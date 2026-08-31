// app.js — ИСПРАВЛЕННАЯ ВЕРСИЯ v1.2
// ============================================================

let currentFlow = null;
let currentAnswers = {};
let currentQuestionIndex = 0;

function showToast(msg) {
  const el = document.getElementById('toast');
  if(!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}
window.showToast = showToast;

function getDayCycle() {
  const hour = new Date().getHours();
  const cycles = [
    { name: "awakening", hours: [6,7,8], icon: "🌅", type: "planning" },
    { name: "deep", hours: [9,10,11], icon: "☀️", type: "deep" },
    { name: "routine", hours: [12,13], icon: "🍽️", type: "routine" },
    { name: "social", hours: [14,15,16], icon: "🌤️", type: "social" },
    { name: "physical", hours: [17,18], icon: "🌇", type: "physical" },
    { name: "reflect", hours: [19,20,21], icon: "🌙", type: "reflect" },
    { name: "rest", hours: [22,23,0,1,2,3,4,5], icon: "😴", type: "rest" }
  ];
  const current = cycles.find(c => c.hours.includes(hour)) || cycles[0];
  const hintKey = 'day_cycle_hint_' + current.type;
  const hint = t(hintKey) || '';
  return { ...current, label: t('day_cycle_' + current.name), hint: hint };
}
window.getDayCycle = getDayCycle;

function startFlow(category) {
  const quiz = getCategoryData(category);
  if(!quiz) { showToast('Категория не найдена: ' + category); return; }
  currentFlow = quiz;
  currentAnswers = {};
  currentQuestionIndex = 0;
  renderQuestion();
  showScreen('screen-quiz');
}
window.startFlow = startFlow;

function renderQuestion() {
  const quiz = currentFlow;
  const visible = getVisibleQuestions(quiz.questions, currentAnswers);
  if(currentQuestionIndex >= visible.length) { showResults(); return; }
  const q = visible[currentQuestionIndex];
  const container = document.getElementById('quiz-container');
  if(!container) return;

  let html = '<div class="question-card">';
  html += '<div class="question-num">' + t('question_of', {current: currentQuestionIndex+1, total: visible.length}) + '</div>';
  html += '<h3 class="question-text">' + q.text + '</h3>';
  
  // Показываем подсказку о цикле дня
  const cycle = getDayCycle();
  if(cycle && cycle.icon) {
    html += '<div class="day-cycle-hint">' + cycle.icon + ' ' + cycle.label + '</div>';
  }
  
  html += '<div class="options">';
  for(const opt of q.options) {
    html += "<button class=\"option-btn\" onclick=\"selectAnswer('" + q.id + "', '" + opt.id + "')\">" + opt.label + "</button>";
  }
  html += '</div></div>';
  container.innerHTML = html;
}

function selectAnswer(qid, oid) {
  currentAnswers[qid] = oid;
  if(typeof ProgressEngine !== 'undefined') {
    ProgressEngine.saveAnswer(currentFlow.meta.module, currentFlow.meta.category, qid, oid);
  }
  currentQuestionIndex++;
  renderQuestion();
}
window.selectAnswer = selectAnswer;

function showResults() {
  const solutions = filterSolutions(currentFlow, currentAnswers);
  const container = document.getElementById('quiz-container');
  if(!container) return;

  let html = '<div class="results-header">';
  html += '<div class="result-icon">' + (currentFlow.meta.icon || '✅') + '</div>';
  html += '<h2>' + (currentFlow.meta.title || 'Результаты') + '</h2>';
  html += '<p>' + t('click_to_expand') + '</p></div>';

  // Cross-module рекомендации
  if(typeof ProgressEngine !== 'undefined' && typeof ProgressEngine.getRecommendations === 'function') {
    const recs = ProgressEngine.getRecommendations();
    if(recs && recs.length > 0) {
      html += '<div class="cross-recommendation">';
      html += '<h4>' + t('recommendation_title') + '</h4>';
      for(const r of recs) {
        html += '<div class="rec-item">' + r.text + '</div>';
      }
      html += '</div>';
    }
  }

  if(solutions.length === 0) {
    html += '<div class="no-results"><p>' + t('no_results') + '</p></div>';
  } else {
    for(const sol of solutions) {
      html += '<div class="result-card" onclick="toggleDetail(this)">';
      html += '<div class="result-title">' + sol.title + '</div>';
      html += '<div class="result-badges">';
      html += '<span class="badge prio-' + (sol.scoring?.priority||'medium') + '">' + t('badge_' + (sol.scoring?.priority||'medium')) + '</span>';
      html += '<span class="badge rel-' + (sol.scoring?.reliability||'medium') + '">' + t('badge_' + (sol.scoring?.reliability||'medium') + '_rel') + '</span>';
      html += '</div>';
      html += '<div class="result-detail">';
      html += '<p>' + sol.description + '</p>';
      if(sol.daily_action) {
        html += '<div class="daily-action-box"><strong>🎯 ' + t('daily_task_title') + ':</strong> ' + sol.daily_action + '</div>';
      }
      if(sol.steps && sol.steps.length) {
        html += '<h4>' + t('detail_steps') + '</h4><ol>' + sol.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>';
      }
      if(sol.warnings && sol.warnings.length) {
        html += '<h4>' + t('detail_warnings') + '</h4><ul>' + sol.warnings.map(w => '<li>' + w + '</li>').join('') + '</ul>';
      }
      // Ресурсы (книги, техники)
      if(sol.resources && sol.resources.length) {
        html += '<h4>📚 Ресурсы</h4><ul class="resources-list">';
        for(const r of sol.resources) {
          const icon = r.type === 'book' ? '📖' : r.type === 'technique' ? '🧠' : '🔗';
          html += '<li>' + icon + ' ' + r.label + '</li>';
        }
        html += '</ul>';
      }
      html += '</div></div>';
    }
  }

  html += '<button class="btn-primary" onclick="restartFlow()" style="margin-top:16px">' + t('restart') + '</button>';
  container.innerHTML = html;

  // Сохраняем daily_action
  if(solutions[0] && solutions[0].daily_action && typeof ProgressEngine !== 'undefined') {
    ProgressEngine.setDailyAction({
      text: solutions[0].daily_action,
      module: currentFlow.meta.module,
      category: currentFlow.meta.category,
      timestamp: Date.now()
    });
    // Обновляем daily_action на главной
    updateDailyTaskUI();
  }
  
  // Сохраняем профиль модуля
  if(typeof ProgressEngine !== 'undefined') {
    const profile = { energy: 5, blocks: [] };
    if(currentAnswers['flow_state']) profile.identity = currentAnswers['flow_state'];
    ProgressEngine.saveModuleProfile(currentFlow.meta.module, profile);
  }
}

function updateDailyTaskUI() {
  if(typeof ProgressEngine === 'undefined') return;
  const task = ProgressEngine.getDailyAction();
  if(!task || !task.text) return;
  
  const container = document.getElementById('dailyTaskBox');
  if(!container) return;
  
  const isDone = task.completed || false;
  container.innerHTML = `
    <div class="daily-task-content">
      <div class="daily-task-title">🎯 ${t('daily_task_title')}</div>
      <div class="daily-task-text">${task.text}</div>
      <button class="daily-task-btn" onclick="completeDailyTask()" ${isDone ? 'disabled style="opacity:0.5"' : ''}>
        ${isDone ? '✅ Выполнено' : t('daily_task_done')}
      </button>
    </div>
  `;
  if(isDone) container.classList.add('done');
  else container.classList.remove('done');
}

function toggleDetail(card) {
  card.classList.toggle('expanded');
}
window.toggleDetail = toggleDetail;

function restartFlow() {
  currentAnswers = {};
  currentQuestionIndex = 0;
  renderQuestion();
}
window.restartFlow = restartFlow;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}
window.showScreen = showScreen;

function goHome() {
  showScreen('screen-home');
  updateDailyTaskUI();
}
window.goHome = goHome;

function completeDailyTask() {
  if(typeof ProgressEngine !== 'undefined') {
    ProgressEngine.completeTask('daily');
    showToast('✅ Задание выполнено!');
    
    // Обновить все кнопки
    document.querySelectorAll('.daily-task-btn').forEach(btn => {
      btn.textContent = '✅ Выполнено';
      btn.disabled = true;
      btn.style.opacity = '0.5';
    });
    
    document.querySelectorAll('#dailyTaskBox, .daily-task-box').forEach(box => {
      box.classList.add('done');
    });
  }
}
window.completeDailyTask = completeDailyTask;

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
  // Обновить daily_task на главной
  updateDailyTaskUI();
});

console.log('✅ App v1.2 загружен (day cycle + daily task + resources + cross-recommendations)');
