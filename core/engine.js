// core/engine.js — v3.0 FIX
// ============================================================
// ДВИЖОК ФИЛЬТРАЦИИ — КОМПАС ПО ЖИЗНИ
// ============================================================
// ИСПРАВЛЕНИЯ:
// • Убрано дублирование SOS_REGISTER_QUIZ / SOS_GET_QUIZ (они в registry.js)
// • Используем window.SOS_QUIZ_REGISTRY и window.SOS_GET_QUIZ из registry.js
// • Ключи реестра: module::category::lang (как в registry.js)
// • getCategoryData теперь использует document.body.dataset.module
// ============================================================

// ===== 1. КЭШ (только кэш, не реестр) =====
const QuizCache = {
  _cache: {},
  get(module, category, lang) {
    const key = module + '::' + category + '::' + lang;
    return this._cache[key] || null;
  },
  set(module, category, lang, data) {
    const key = module + '::' + category + '::' + lang;
    this._cache[key] = data;
  },
  clear() { this._cache = {}; }
};
window.QuizCache = QuizCache;

// ===== 2. ОСНОВНАЯ ФУНКЦИЯ ФИЛЬТРАЦИИ =====
function filterSolutions(quizData, answers) {
  if (!quizData || !quizData.solutions) return [];
  if (!answers || Object.keys(answers).length === 0) {
    return getFallbackSolutions(quizData.solutions, 3);
  }

  let matched = [];
  let fallback = [];
  const crossProfile = (typeof ProgressEngine !== 'undefined')
    ? ProgressEngine.getCrossModuleProfile()
    : {};

  for (const sol of quizData.solutions) {
    if (!sol.conditions || Object.keys(sol.conditions).length === 0) {
      fallback.push(sol);
      continue;
    }

    let ok = true;

    // Обычные условия
    for (const [qid, vals] of Object.entries(sol.conditions)) {
      if (qid === '_cross') continue;
      const ans = answers[qid];
      if (!ans) { ok = false; break; }
      const arr = Array.isArray(ans) ? ans : [ans];
      if (!vals.some(v => arr.includes(v))) { ok = false; break; }
    }

    // Кросс-модульные условия
    if (ok && sol.conditions._cross) {
      for (const [mod, conds] of Object.entries(sol.conditions._cross)) {
        const profile = crossProfile[mod];
        if (!profile) { ok = false; break; }
        for (const [key, vals] of Object.entries(conds)) {
          const ans = profile[key];
          if (!ans) { ok = false; break; }
          const arr = Array.isArray(ans) ? ans : [ans];
          if (!vals.some(v => arr.includes(v))) { ok = false; break; }
        }
      }
    }

    if (ok) matched.push(sol);
    else fallback.push(sol);
  }

  if (matched.length === 0) {
    const tagMatched = findSolutionsByTags(quizData.solutions, answers);
    matched = tagMatched.length > 0 ? tagMatched : getFallbackSolutions(fallback, 3);
  }

  matched = sortSolutions(matched);
  matched = enrichSolutions(matched, quizData);
  return matched;
}
window.filterSolutions = filterSolutions;

// ===== 3. FALLBACK-РЕШЕНИЯ =====
function getFallbackSolutions(solutions, count) {
  if (!solutions || solutions.length === 0) return [];
  const preferred = solutions.filter(s =>
    s.tags && (s.tags.includes('start') || s.tags.includes('universal'))
  );
  if (preferred.length > 0) return preferred.slice(0, count);
  return solutions.slice(0, count);
}
window.getFallbackSolutions = getFallbackSolutions;

// ===== 4. ПОИСК ПО ТЕГАМ =====
function findSolutionsByTags(solutions, answers) {
  const allTags = [];
  for (const [qid, ans] of Object.entries(answers)) {
    const arr = Array.isArray(ans) ? ans : [ans];
    for (const val of arr) allTags.push(val);
  }
  return solutions.filter(sol => {
    if (!sol.tags || sol.tags.length === 0) return false;
    return sol.tags.some(tag => allTags.includes(tag));
  });
}
window.findSolutionsByTags = findSolutionsByTags;

// ===== 5. СОРТИРОВКА =====
function sortSolutions(solutions) {
  const prioOrder = { fast: 0, urgent: 0, high: 0, medium: 1, slow: 2, low: 3 };
  const relOrder = { high: 0, medium: 1, low: 2 };
  return solutions.sort((a, b) => {
    const pa = prioOrder[a.scoring?.priority] ?? 1;
    const pb = prioOrder[b.scoring?.priority] ?? 1;
    if (pa !== pb) return pa - pb;
    const ra = relOrder[a.scoring?.reliability] ?? 1;
    const rb = relOrder[b.scoring?.reliability] ?? 1;
    return ra - rb;
  });
}
window.sortSolutions = sortSolutions;

// ===== 6. ОБОГАЩЕНИЕ =====
function enrichSolutions(solutions, quizData) {
  return solutions.map(sol => {
    if (quizData?.meta?.identity_anchor) sol._identity_anchor = quizData.meta.identity_anchor;
    if (quizData?.meta) {
      sol._module = quizData.meta.module;
      sol._category = quizData.meta.category;
    }
    return sol;
  });
}
window.enrichSolutions = enrichSolutions;

// ===== 7. ВИДИМЫЕ ВОПРОСЫ =====
function getVisibleQuestions(questions, answers) {
  if (!questions) return [];
  return questions.filter(q => {
    if (!q.conditions) return true;
    for (const [qid, vals] of Object.entries(q.conditions)) {
      const ans = answers[qid];
      if (!ans) return false;
      const arr = Array.isArray(ans) ? ans : [ans];
      if (!vals.some(v => arr.includes(v))) return false;
    }
    return true;
  });
}
window.getVisibleQuestions = getVisibleQuestions;

// ===== 8. ПОЛУЧЕНИЕ ДАННЫХ КАТЕГОРИИ =====
function getCategoryData(category) {
  const module = document.body.dataset.module;
  if (!module) {
    console.error('❌ Нет data-module на <body>');
    return null;
  }
  const lang = window.currentLang || 'ru';

  const cached = QuizCache.get(module, category, lang);
  if (cached) return cached;

  // Используем SOS_GET_QUIZ из registry.js (ключ: module::category::lang)
  const quiz = (typeof SOS_GET_QUIZ === 'function')
    ? SOS_GET_QUIZ(module, category, lang)
    : null;

  if (quiz) QuizCache.set(module, category, lang, quiz);
  return quiz;
}
window.getCategoryData = getCategoryData;

// ===== 9. УНИВЕРСАЛЬНЫЙ СТАРТ =====
function startQuiz(module, category, lang) {
  const langToUse = lang || window.currentLang || 'ru';
  const quiz = (typeof SOS_GET_QUIZ === 'function')
    ? SOS_GET_QUIZ(module, category, langToUse)
    : null;
  if (!quiz) {
    console.error(`❌ Квиз не найден: ${module}/${category} (${langToUse})`);
    return null;
  }
  window.currentFlow = quiz;
  window.currentAnswers = {};
  window.currentQuestionIndex = 0;
  return quiz;
}
window.startQuiz = startQuiz;

// ===== 10. ПРОВЕРКА НАЛИЧИЯ =====
function hasQuiz(module, category, lang) {
  return !!(typeof SOS_GET_QUIZ === 'function' && SOS_GET_QUIZ(module, category, lang || window.currentLang || 'ru'));
}
window.hasQuiz = hasQuiz;

// ===== 11. КАТЕГОРИИ МОДУЛЯ =====
function getModuleCategories(module, lang) {
  const langToUse = lang || window.currentLang || 'ru';
  const categories = [];
  const reg = (typeof window.SOS_QUIZ_REGISTRY !== 'undefined') ? window.SOS_QUIZ_REGISTRY : {};
  for (const [key, quiz] of Object.entries(reg)) {
    if (quiz.meta && quiz.meta.module === module && quiz.meta.lang === langToUse) {
      categories.push({
        id: quiz.meta.category,
        title: quiz.meta.title,
        icon: quiz.meta.icon,
        color: quiz.meta.color,
        description: quiz.meta.description
      });
    }
  }
  return categories.sort((a, b) => a.title.localeCompare(b.title));
}
window.getModuleCategories = getModuleCategories;

console.log('✅ Engine v3.0-FIX загружен (без дублирования реестра)');
