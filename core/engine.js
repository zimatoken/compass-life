// core/engine.js
// ============================================================
// ДВИЖОК ФИЛЬТРАЦИИ — КОМПАС ПО ЖИЗНИ v3.0
// ============================================================
// Что нового:
// • Поддержка identity_anchor
// • Улучшенная кросс-модульная фильтрация
// • Поддержка всех полей v3.0 (follow_up, resources, daily_action)
// • Кэширование данных
// • Fallback с приоритетом
// ============================================================

// ===== 1. РЕЕСТР КВИЗОВ =====
const SOS_QUIZ_REGISTRY = {};

function SOS_REGISTER_QUIZ(quiz) {
  if (!quiz || !quiz.meta) {
    console.error('❌ Некорректный квиз:', quiz);
    return;
  }
  
  const key = `${quiz.meta.module}_${quiz.meta.category}_${quiz.meta.lang}`;
  SOS_QUIZ_REGISTRY[key] = quiz;
  
  console.log(`✅ Зарегистрирован квиз: ${quiz.meta.module}/${quiz.meta.category} (${quiz.meta.lang})`);
}
window.SOS_REGISTER_QUIZ = SOS_REGISTER_QUIZ;

function SOS_GET_QUIZ(module, category, lang) {
  const key = `${module}_${category}_${lang}`;
  const quiz = SOS_QUIZ_REGISTRY[key];
  
  if (!quiz) {
    // Пробуем найти без языка (fallback на русский)
    const fallbackKey = `${module}_${category}_ru`;
    const fallback = SOS_QUIZ_REGISTRY[fallbackKey];
    if (fallback) {
      console.warn(`⚠️ Квиз ${key} не найден, используем fallback: ${fallbackKey}`);
      return fallback;
    }
    console.error(`❌ Квиз не найден: ${key}`);
    return null;
  }
  
  return quiz;
}
window.SOS_GET_QUIZ = SOS_GET_QUIZ;

// ===== 2. КЭШ =====
const QuizCache = {
  cache: {},
  
  get(module, category, lang) {
    const key = `${module}_${category}_${lang}`;
    return this.cache[key] || null;
  },
  
  set(module, category, lang, data) {
    const key = `${module}_${category}_${lang}`;
    this.cache[key] = data;
  },
  
  clear() {
    this.cache = {};
  }
};
window.QuizCache = QuizCache;

// ===== 3. ОСНОВНАЯ ФУНКЦИЯ ФИЛЬТРАЦИИ =====
/**
 * Фильтрует решения по ответам пользователя
 * Поддерживает обычные условия и кросс-модульные (_cross)
 */
function filterSolutions(quizData, answers) {
  if (!quizData || !quizData.solutions) return [];
  
  // Если ответов нет — возвращаем fallback (первые 3)
  if (!answers || Object.keys(answers).length === 0) {
    return getFallbackSolutions(quizData.solutions, 3);
  }

  let matched = [];
  let fallback = [];

  // Получаем кросс-профиль из ProgressEngine
  const crossProfile = (typeof ProgressEngine !== 'undefined')
    ? ProgressEngine.getCrossModuleProfile()
    : {};

  for (const sol of quizData.solutions) {
    // Если нет условий — это fallback-решение
    if (!sol.conditions || Object.keys(sol.conditions).length === 0) {
      fallback.push(sol);
      continue;
    }

    let ok = true;

    // === 1. Проверка обычных условий ===
    for (const [qid, vals] of Object.entries(sol.conditions)) {
      if (qid === '_cross') continue; // пропускаем кросс-условия
      
      const ans = answers[qid];
      if (!ans) { ok = false; break; }
      
      const arr = Array.isArray(ans) ? ans : [ans];
      if (!vals.some(v => arr.includes(v))) { ok = false; break; }
    }

    // === 2. Проверка кросс-модульных условий ===
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

    if (ok) {
      matched.push(sol);
    } else {
      fallback.push(sol);
    }
  }

  // === 3. Fallback-механизм ===
  if (matched.length === 0) {
    // Сначала пробуем найти решения по тегам
    const tagMatched = findSolutionsByTags(quizData.solutions, answers);
    if (tagMatched.length > 0) {
      matched = tagMatched;
    } else {
      // Если по тегам не нашлось — берём первые 3 решения
      matched = getFallbackSolutions(fallback, 3);
    }
  }

  // === 4. Сортировка ===
  matched = sortSolutions(matched);

  // === 5. Обогащение данными ===
  matched = enrichSolutions(matched, quizData);

  return matched;
}
window.filterSolutions = filterSolutions;

// ===== 4. ПОЛУЧЕНИЕ FALLBACK-РЕШЕНИЙ =====
function getFallbackSolutions(solutions, count = 3) {
  if (!solutions || solutions.length === 0) return [];
  
  // Сначала ищем решения с тегом "start" или "universal"
  const preferred = solutions.filter(s => 
    s.tags && (s.tags.includes('start') || s.tags.includes('universal'))
  );
  
  if (preferred.length > 0) {
    return preferred.slice(0, count);
  }
  
  // Иначе берём первые count
  return solutions.slice(0, count);
}
window.getFallbackSolutions = getFallbackSolutions;

// ===== 5. ПОИСК ПО ТЕГАМ =====
function findSolutionsByTags(solutions, answers) {
  const allTags = [];
  
  // Собираем все теги из ответов
  for (const [qid, ans] of Object.entries(answers)) {
    const arr = Array.isArray(ans) ? ans : [ans];
    for (const val of arr) {
      allTags.push(val);
    }
  }

  // Ищем решения, у которых есть хотя бы один совпадающий тег
  const matched = solutions.filter(sol => {
    if (!sol.tags || sol.tags.length === 0) return false;
    return sol.tags.some(tag => allTags.includes(tag));
  });

  return matched;
}
window.findSolutionsByTags = findSolutionsByTags;

// ===== 6. СОРТИРОВКА =====
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

// ===== 7. ОБОГАЩЕНИЕ РЕШЕНИЙ =====
function enrichSolutions(solutions, quizData) {
  return solutions.map(sol => {
    // Добавляем identity_anchor из метаданных
    if (quizData && quizData.meta && quizData.meta.identity_anchor) {
      sol._identity_anchor = quizData.meta.identity_anchor;
    }
    
    // Добавляем module и category для контекста
    if (quizData && quizData.meta) {
      sol._module = quizData.meta.module;
      sol._category = quizData.meta.category;
    }
    
    return sol;
  });
}
window.enrichSolutions = enrichSolutions;

// ===== 8. ВИДИМЫЕ ВОПРОСЫ =====
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

// ===== 9. ПОЛУЧЕНИЕ ДАННЫХ КАТЕГОРИИ =====
function getCategoryData(category) {
  const module = document.body.dataset.module;
  if (!module) {
    console.error('❌ Нет data-module на body');
    return null;
  }
  
  const lang = window.currentLang || 'ru';
  
  // Проверяем кэш
  const cached = QuizCache.get(module, category, lang);
  if (cached) {
    return cached;
  }
  
  const quiz = SOS_GET_QUIZ(module, category, lang);
  
  if (quiz) {
    QuizCache.set(module, category, lang, quiz);
  }
  
  return quiz;
}
window.getCategoryData = getCategoryData;

// ===== 10. УНИВЕРСАЛЬНЫЙ СТАРТ КВИЗА =====
function startQuiz(module, category, lang) {
  const langToUse = lang || window.currentLang || 'ru';
  const quiz = SOS_GET_QUIZ(module, category, langToUse);
  
  if (!quiz) {
    console.error(`❌ Квиз не найден: ${module}/${category} (${langToUse})`);
    return null;
  }
  
  // Сохраняем в глобальную переменную для app.js
  window.currentFlow = quiz;
  window.currentAnswers = {};
  window.currentQuestionIndex = 0;
  
  return quiz;
}
window.startQuiz = startQuiz;

// ===== 11. ПРОВЕРКА НАЛИЧИЯ КВИЗА =====
function hasQuiz(module, category, lang) {
  const langToUse = lang || window.currentLang || 'ru';
  const key = `${module}_${category}_${langToUse}`;
  return !!SOS_QUIZ_REGISTRY[key];
}
window.hasQuiz = hasQuiz;

// ===== 12. ПОЛУЧЕНИЕ ВСЕХ КВИЗОВ МОДУЛЯ =====
function getModuleQuizzes(module) {
  const result = [];
  for (const key in SOS_QUIZ_REGISTRY) {
    const quiz = SOS_QUIZ_REGISTRY[key];
    if (quiz.meta && quiz.meta.module === module) {
      result.push(quiz);
    }
  }
  return result;
}
window.getModuleQuizzes = getModuleQuizzes;

// ===== 13. ПОЛУЧЕНИЕ КАТЕГОРИЙ МОДУЛЯ =====
function getModuleCategories(module, lang) {
  const langToUse = lang || window.currentLang || 'ru';
  const categories = [];
  
  for (const key in SOS_QUIZ_REGISTRY) {
    const quiz = SOS_QUIZ_REGISTRY[key];
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
  
  return categories;
}
window.getModuleCategories = getModuleCategories;

console.log('✅ Engine v3.0 загружен (cross-module + tag fallback + sorting + cache + enrichment)');
console.log('📦 Зарегистрировано квизов:', Object.keys(SOS_QUIZ_REGISTRY).length);
