function filterSolutions(quizData, answers) {
  if(!quizData || !quizData.solutions) return [];
  let matched = [];
  let fallback = [];

  const crossProfile = (typeof ProgressEngine !== 'undefined')
    ? ProgressEngine.getCrossModuleProfile()
    : {};

  for(const sol of quizData.solutions) {
    if(!sol.conditions) { matched.push(sol); continue; }
    let ok = true;

    // Обычные условия
    for(const [qid, vals] of Object.entries(sol.conditions)) {
      if(qid === '_cross') continue;
      const ans = answers[qid];
      if(!ans) { ok = false; break; }
      const arr = Array.isArray(ans) ? ans : [ans];
      if(!vals.some(v => arr.includes(v))) { ok = false; break; }
    }

    // Cross-module условия
    if(ok && sol.conditions._cross) {
      for(const [mod, conds] of Object.entries(sol.conditions._cross)) {
        const profile = crossProfile[mod];
        if(!profile) { ok = false; break; }
        for(const [key, vals] of Object.entries(conds)) {
          const ans = profile[key];
          if(!ans) { ok = false; break; }
          const arr = Array.isArray(ans) ? ans : [ans];
          if(!vals.some(v => arr.includes(v))) { ok = false; break; }
        }
      }
    }

    if(ok) matched.push(sol);
    else fallback.push(sol);
  }

  if(matched.length === 0 && fallback.length > 0) {
    matched = fallback.slice(0, 3);
  }

  const prioOrder = { fast:0, medium:1, slow:2 };
  matched.sort((a,b) => {
    const pa = prioOrder[a.scoring?.priority] ?? 1;
    const pb = prioOrder[b.scoring?.priority] ?? 1;
    return pa - pb;
  });
  return matched;
}

function getVisibleQuestions(questions, answers) {
  if(!questions) return [];
  return questions.filter(q => {
    if(!q.conditions) return true;
    for(const [qid, vals] of Object.entries(q.conditions)) {
      const ans = answers[qid];
      if(!ans) return false;
      const arr = Array.isArray(ans) ? ans : [ans];
      if(!vals.some(v => arr.includes(v))) return false;
    }
    return true;
  });
}

function getCategoryData(category) {
  const module = document.body.dataset.module;
  if(!module) { console.error('Нет data-module на body'); return null; }
  return SOS_GET_QUIZ(module, category, window.currentLang || 'ru');
}

window.filterSolutions = filterSolutions;
window.getVisibleQuestions = getVisibleQuestions;
window.getCategoryData = getCategoryData;
console.log('✅ Engine v1.1 загружен (cross-module)');
