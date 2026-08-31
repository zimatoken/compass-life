// core/engine.js
// ============================================================
// ДВИЖОК ФИЛЬТРАЦИИ — КОМПАС ПО ЖИЗНИ v2.0
// ============================================================

/**
 * Фильтрует решения по ответам пользователя
 * Поддерживает обычные условия и кросс-модульные (_cross)
 */
function filterSolutions(quizData, answers) {
  if (!quizData || !quizData.solutions) return [];
  
  // Если ответов нет — возвращаем fallback (первые 3)
  if (!answers || Object.keys(answers).length === 0) {
    return quizData.solutions.slice(0, 3);
  }

  let matched = [];
  let fallback = [];

  // Получаем кросс-профиль из ProgressEngine
  const crossProfile = (typeof ProgressEngine !== 'undefined')
    ? ProgressEngine.getCrossModuleProfile()
    : {};

  for (const sol of quizData.solutions) {
    // Если нет условий — это fallback-решение (добавляем в matched, но с низким приоритетом)
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
      matched = fallback.slice(0, 3);
    }
  }

  // === 4. Сортировка ===
  matched = sortSolutions(matched);

  return matched;
}

/**
 * Поиск решений по тегам (fallback)
 */
function findSolutionsByTags(solutions, answers) {
  const allTags = [];
  
  // Собираем все теги из ответов
  for (const [qid, ans] of Object.entries(answers)) {
    const arr = Array.isArray(ans) ? ans : [ans];
    for (const val of arr) {
      // Ищем теги в вопросах (упрощённо: используем заглушку)
      // В реальности нужно знать соответствие id → tags
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

/**
 * Сортировка решений по priority + reliability
 */
function sortSolutions(solutions) {
  const prioOrder = { fast: 0, medium: 1, slow: 2 };
  const relOrder = { high: 0, medium: 1, low: 2 };

  return solutions.sort((a, b) => {
    const pa = prioOrder[a.scoring?.priority] ?? 1;
    const pb = prioOrder[b.scoring?.priority] ?? 1;
    
    if (pa !== pb) return pa - pb;
    
    // Если priority одинаковый — сортируем по reliability
    const ra = relOrder[a.scoring?.reliability] ?? 1;
    const rb = relOrder[b.scoring?.reliability] ?? 1;
    return ra - rb;
  });
}

/**
 * Возвращает видимые вопросы с учётом условий
 */
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

/**
 * Получает данные категории из реестра
 */
function getCategoryData(category) {
  const module = document.body.dataset.module;
  if (!module) {
    console.error('❌ Нет data-module на body');
    return null;
  }
  
  const lang = window.currentLang || 'ru';
  const quiz = SOS_GET_QUIZ(module, category, lang);
  
  if (!quiz) {
    console.error(`❌ Категория не найдена: ${module}/${category} (${lang})`);
  }
  
  return quiz;
}

// ===== ЭКСПОРТ =====
window.filterSolutions = filterSolutions;
window.getVisibleQuestions = getVisibleQuestions;
window.getCategoryData = getCategoryData;

console.log('✅ Engine v2.0 загружен (cross-module + tag fallback + sorting)');
