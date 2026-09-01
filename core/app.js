// ============================================================
// APP.JS — ГИБРИДНАЯ ВЕРСИЯ v3.0
// ============================================================
// Что нового:
// • Персонализация по имени (UserProfile)
// • Timeline инсайтов (InsightTimeline)
// • Микро-вызовы (DailyChallenge)
// • График прогресса (ProgressChart)
// • Follow-up reminder через 7 дней (FollowUpEngine)
// • Day Cycle + Daily Task + Resources + Cross-recommendations
// • Полная интеграция с квизами v3.0
// ============================================================

// ============================================================
// 1. УТИЛИТЫ И БАЗОВЫЕ ФУНКЦИИ
// ============================================================

function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}
window.showToast = showToast;

// ============================================================
// 2. ДЕНЬ И ЦИКЛЫ
// ============================================================

function getDayCycle() {
  const hour = new Date().getHours();
  const cycles = [
    { name: "awakening", hours: [6, 7, 8], icon: "🌅", type: "planning" },
    { name: "deep", hours: [9, 10, 11], icon: "☀️", type: "deep" },
    { name: "routine", hours: [12, 13], icon: "🍽️", type: "routine" },
    { name: "social", hours: [14, 15, 16], icon: "🌤️", type: "social" },
    { name: "physical", hours: [17, 18], icon: "🌇", type: "physical" },
    { name: "reflect", hours: [19, 20, 21], icon: "🌙", type: "reflect" },
    { name: "rest", hours: [22, 23, 0, 1, 2, 3, 4, 5], icon: "😴", type: "rest" }
  ];
  const current = cycles.find(c => c.hours.includes(hour)) || cycles[0];
  const hintKey = 'day_cycle_hint_' + current.type;
  const hint = t(hintKey) || '';
  return { ...current, label: t('day_cycle_' + current.name), hint: hint };
}
window.getDayCycle = getDayCycle;

// ============================================================
// 3. ПЕРСОНАЛИЗАЦИЯ: ИМЯ ПОЛЬЗОВАТЕЛЯ
// ============================================================

const UserProfile = {
  getName() {
    return localStorage.getItem('compass_user_name') || '';
  },
  setName(name) {
    localStorage.setItem('compass_user_name', name.trim());
  },
  getGreeting() {
    const hour = new Date().getHours();
    const name = this.getName();
    const timeGreeting = hour < 12 ? 'Доброе утро' : hour < 18 ? 'Добрый день' : 'Добрый вечер';
    return name ? `${timeGreeting}, ${name}!` : timeGreeting + '!';
  }
};
window.UserProfile = UserProfile;

function renderPersonalGreeting() {
  const name = UserProfile.getName();
  if (!name) {
    return `<div class="name-prompt" id="namePrompt">
      <p class="name-prompt-text">Как тебя зовут? Это поможет мне обращаться лично.</p>
      <input type="text" id="userNameInput" class="name-input" placeholder="Имя" maxlength="20">
      <button class="name-btn" onclick="saveUserName()">Сохранить</button>
    </div>`;
  }
  const greeting = UserProfile.getGreeting();
  const cycle = getDayCycle();
  const hint = cycle ? cycle.label + ' ' + (cycle.hint || '') : '';
  return `<div class="personal-greeting">
    <h2 class="greeting-title">${greeting}</h2>
    <p class="greeting-hint">${hint}</p>
  </div>`;
}
window.renderPersonalGreeting = renderPersonalGreeting;

function saveUserName() {
  const input = document.getElementById('userNameInput');
  if (input && input.value.trim()) {
    UserProfile.setName(input.value.trim());
    location.reload();
  }
}
window.saveUserName = saveUserName;

// ============================================================
// 4. TIMELINE ИНСАЙТОВ
// ============================================================

const InsightTimeline = {
  add(module, category, insightText) {
    const items = this.getAll();
    items.push({
      id: Date.now(),
      module,
      category,
      text: insightText,
      date: new Date().toISOString(),
      dateStr: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
    });
    if (items.length > 50) items.splice(0, items.length - 50);
    localStorage.setItem('compass_insights', JSON.stringify(items));
  },

  getAll() {
    return JSON.parse(localStorage.getItem('compass_insights') || '[]');
  },

  getRecent(count = 5) {
    return this.getAll().slice(-count).reverse();
  },

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const items = this.getRecent(5);
    if (items.length === 0) {
      container.innerHTML = `<p class="timeline-empty">Пройди первый квиз — и здесь появится твоя история.</p>`;
      return;
    }
    const html = items.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">${item.dateStr}</div>
          <div class="timeline-text">${item.text}</div>
          <div class="timeline-module">${t('cat_' + item.module) || item.module}</div>
        </div>
      </div>
    `).join('');
    container.innerHTML = `<div class="timeline-list">${html}</div>`;
  }
};
window.InsightTimeline = InsightTimeline;

// ============================================================
// 5. МИКРО-ВЫЗОВЫ (DAILY CHALLENGES)
// ============================================================

const DailyChallenge = {
  challenges: {
    ru: [
      { id: 'ch1', text: 'Сегодня скажи «нет» 1 просьбе, которая тебя выматывает', module: 'responsibility' },
      { id: 'ch2', text: 'Потрать 15 минут на творчество без оценки результата', module: 'creativity' },
      { id: 'ch3', text: 'Запиши 3 вещи, за которые благодарен', module: 'happiness' },
      { id: 'ch4', text: 'Сделай 1 сложную задачу до 11:00', module: 'responsibility' },
      { id: 'ch5', text: 'Позвони близкому человеку без повода', module: 'relationships' },
      { id: 'ch6', text: 'Отложи 10% сегодняшних доходов', module: 'money' },
      { id: 'ch7', text: 'Ложись спать до 23:00', module: 'health' },
      { id: 'ch8', text: 'Прочитай 10 страниц книги', module: 'learning' },
      { id: 'ch9', text: 'Сделай 10-минутную медитацию', module: 'health' },
      { id: 'ch10', text: 'Напиши 1 страницу текста на любую тему', module: 'creativity' }
    ],
    en: [
      { id: 'ch1', text: 'Say "no" to 1 draining request today', module: 'responsibility' },
      { id: 'ch2', text: 'Spend 15 minutes creating without judging the result', module: 'creativity' },
      { id: 'ch3', text: 'Write down 3 things you are grateful for', module: 'happiness' },
      { id: 'ch4', text: 'Do 1 hard task before 11 AM', module: 'responsibility' },
      { id: 'ch5', text: 'Call a loved one for no reason', module: 'relationships' },
      { id: 'ch6', text: 'Save 10% of today\'s income', module: 'money' },
      { id: 'ch7', text: 'Go to bed before 11 PM', module: 'health' },
      { id: 'ch8', text: 'Read 10 pages of a book', module: 'learning' },
      { id: 'ch9', text: 'Do a 10-minute meditation', module: 'health' },
      { id: 'ch10', text: 'Write 1 page on any topic', module: 'creativity' }
    ]
  },

  getToday() {
    const lang = window.currentLang || 'ru';
    const today = new Date().toDateString();
    const saved = JSON.parse(localStorage.getItem('compass_challenge') || '{}');
    if (saved.date === today) return saved;
    const pool = this.challenges[lang] || this.challenges.ru;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const challenge = { date: today, ...pick, done: false };
    localStorage.setItem('compass_challenge', JSON.stringify(challenge));
    return challenge;
  },

  complete() {
    const ch = this.getToday();
    ch.done = true;
    ch.completedAt = Date.now();
    localStorage.setItem('compass_challenge', JSON.stringify(ch));
    const streak = parseInt(localStorage.getItem('compass_challenge_streak') || '0');
    localStorage.setItem('compass_challenge_streak', String(streak + 1));
    return streak + 1;
  },

  getStreak() {
    return parseInt(localStorage.getItem('compass_challenge_streak') || '0');
  },

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const ch = this.getToday();
    const streak = this.getStreak();
    const doneClass = ch.done ? 'done' : '';
    const btnDisabled = ch.done ? 'disabled' : '';
    container.innerHTML = `
      <div class="challenge-card ${doneClass}">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-label">${t('challenge_title') || 'Вызов дня'}</span>
          <span class="challenge-streak">🔥 ${streak} ${t('days') || 'дней'}</span>
        </div>
        <p class="challenge-text">${ch.text}</p>
        <button class="challenge-btn" onclick="completeChallenge()" ${btnDisabled}>
          ${ch.done ? '✅ ' + (t('daily_task_done') || 'Выполнено') : '✅ ' + (t('daily_task_done') || 'Выполнено')}
        </button>
      </div>
    `;
  }
};
window.DailyChallenge = DailyChallenge;

function completeChallenge() {
  const streak = DailyChallenge.complete();
  DailyChallenge.render('challengeContainer');
  showToast(streak >= 7 ? `🔥 ${streak} ${t('days_streak') || 'дней подряд! Ты — машина!'}` : '✅ ' + (t('challenge_complete') || 'Отлично! Вызов выполнен.'));
}
window.completeChallenge = completeChallenge;

// ============================================================
// 6. ГРАФИК ПРОГРЕССА
// ============================================================

const ProgressChart = {
  renderMini(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container || !data || data.length === 0) return;
    const max = Math.max(...data.map(d => d.value), 1);
    const width = 280;
    const height = 80;
    const barW = width / data.length - 6;
    const bars = data.map((d, i) => {
      const h = (d.value / max) * (height - 20);
      const x = i * (barW + 6) + 3;
      const y = height - h - 16;
      return `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="4" fill="var(--accent)" opacity="0.8"/>
              <text x="${x + barW/2}" y="${height - 2}" text-anchor="middle" fill="var(--text3)" font-size="10">${d.label}</text>`;
    }).join('');
    container.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="progress-chart">${bars}</svg>`;
  },

  getWeeklyData() {
    const days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = 'compass_daily_' + d.toDateString();
      const done = localStorage.getItem(key) === 'true';
      const label = d.toLocaleDateString('ru-RU', { weekday: 'short' });
      days.push({ label, value: done ? 1 : 0 });
    }
    return days;
  }
};
window.ProgressChart = ProgressChart;

// ============================================================
// 7. FOLLOW-UP REMINDER (проверка через неделю)
// ============================================================

const FollowUpEngine = {
  schedule(quizId, followUpData) {
    const reminders = JSON.parse(localStorage.getItem('compass_followups') || '[]');
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);
    reminders.push({
      quizId,
      question: followUpData.question,
      options: followUpData.options,
      reward: followUpData.reward,
      dueDate: dueDate.toISOString(),
      shown: false,
      answered: false
    });
    localStorage.setItem('compass_followups', JSON.stringify(reminders));
  },

  checkAndShow() {
    const reminders = JSON.parse(localStorage.getItem('compass_followups') || '[]');
    const now = new Date();
    const due = reminders.filter(r => !r.answered && new Date(r.dueDate) <= now);
    if (due.length === 0) return;
    const r = due[0];
    this.renderModal(r);
  },

  renderModal(r) {
    const modal = document.createElement('div');
    modal.className = 'followup-modal';
    modal.id = 'followupModal';
    const optionsHtml = r.options.map((opt, i) =>
      `<button class="followup-option" onclick="answerFollowUp('${r.quizId}', '${opt}', this)">${opt}</button>`
    ).join('');
    modal.innerHTML = `
      <div class="followup-backdrop"></div>
      <div class="followup-card">
        <div class="followup-icon">⏰</div>
        <h3 class="followup-title">${t('followup_title') || 'Проверка через неделю'}</h3>
        <p class="followup-question">${r.question}</p>
        <div class="followup-options">${optionsHtml}</div>
        <button class="followup-skip" onclick="skipFollowUp('${r.quizId}')">${t('followup_later') || 'Напомнить позже'}</button>
      </div>
    `;
    document.body.appendChild(modal);
  },

  answer(quizId, answer, btn) {
    const reminders = JSON.parse(localStorage.getItem('compass_followups') || '[]');
    const r = reminders.find(x => x.quizId === quizId);
    if (!r) return;
    r.answered = true;
    r.answer = answer;
    localStorage.setItem('compass_followups', JSON.stringify(reminders));
    const reward = r.reward && r.reward[answer];
    if (reward) {
      btn.parentElement.innerHTML = `<div class="followup-reward">${reward}</div>`;
      setTimeout(() => {
        const modal = document.getElementById('followupModal');
        if (modal) modal.remove();
      }, 2500);
    } else {
      const modal = document.getElementById('followupModal');
      if (modal) modal.remove();
    }
  },

  skip(quizId) {
    const reminders = JSON.parse(localStorage.getItem('compass_followups') || '[]');
    const r = reminders.find(x => x.quizId === quizId);
    if (r) {
      const d = new Date(r.dueDate);
      d.setDate(d.getDate() + 2);
      r.dueDate = d.toISOString();
      localStorage.setItem('compass_followups', JSON.stringify(reminders));
    }
    const modal = document.getElementById('followupModal');
    if (modal) modal.remove();
  }
};
window.FollowUpEngine = FollowUpEngine;

function answerFollowUp(quizId, answer, btn) {
  FollowUpEngine.answer(quizId, answer, btn);
}
window.answerFollowUp = answerFollowUp;

function skipFollowUp(quizId) {
  FollowUpEngine.skip(quizId);
}
window.skipFollowUp = skipFollowUp;

// ============================================================
// 8. КВИЗ-ЯДРО
// ============================================================

let currentFlow = null;
let currentAnswers = {};
let currentQuestionIndex = 0;

function getCategoryData(category) {
  // Ищем во всех зарегистрированных квизах
  if (typeof SOS_QUIZ_REGISTRY !== 'undefined') {
    const key = Object.keys(SOS_QUIZ_REGISTRY).find(k => {
      const q = SOS_QUIZ_REGISTRY[k];
      return q.meta && q.meta.category === category;
    });
    if (key) return SOS_QUIZ_REGISTRY[key];
  }
  return null;
}

function getVisibleQuestions(questions, answers) {
  return questions.filter(q => {
    if (!q.conditions) return true;
    for (const key in q.conditions) {
      const val = answers[key];
      if (!val || !q.conditions[key].includes(val)) return false;
    }
    return true;
  });
}

function filterSolutions(quiz, answers) {
  const solutions = quiz.solutions || [];
  const matched = [];
  const fallbacks = [];

  for (const sol of solutions) {
    if (!sol.conditions || Object.keys(sol.conditions).length === 0) {
      fallbacks.push(sol);
      continue;
    }
    let match = true;
    for (const key in sol.conditions) {
      const val = answers[key];
      if (!val || !sol.conditions[key].includes(val)) {
        match = false;
        break;
      }
    }
    if (match) matched.push(sol);
  }

  return matched.length > 0 ? matched : fallbacks;
}

function startFlow(category) {
  const quiz = getCategoryData(category);
  if (!quiz) {
    showToast('Категория не найдена: ' + category);
    return;
  }
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
  if (currentQuestionIndex >= visible.length) {
    showResults();
    return;
  }
  const q = visible[currentQuestionIndex];
  const container = document.getElementById('quiz-container');
  if (!container) return;

  let html = '<div class="question-card">';
  html += `<div class="question-num">${t('question_of', { current: currentQuestionIndex + 1, total: visible.length }) || `Вопрос ${currentQuestionIndex + 1} из ${visible.length}`}</div>`;
  html += `<h3 class="question-text">${q.text}</h3>`;

  const cycle = getDayCycle();
  if (cycle && cycle.icon) {
    html += '<div class="day-cycle-hint">' + cycle.icon + ' ' + cycle.label + '</div>';
  }

  html += '<div class="options">';
  for (const opt of q.options) {
    html += `<button class="option-btn" onclick="selectAnswer('${q.id}', '${opt.id}')">${opt.label}</button>`;
  }
  html += '</div></div>';
  container.innerHTML = html;
}

function selectAnswer(qid, oid) {
  currentAnswers[qid] = oid;
  if (typeof ProgressEngine !== 'undefined') {
    ProgressEngine.saveAnswer(currentFlow.meta.module, currentFlow.meta.category, qid, oid);
  }
  currentQuestionIndex++;
  renderQuestion();
}
window.selectAnswer = selectAnswer;

function showResults() {
  const solutions = filterSolutions(currentFlow, currentAnswers);
  const container = document.getElementById('quiz-container');
  if (!container) return;

  let html = '<div class="results-header">';
  html += '<div class="result-icon">' + (currentFlow.meta.icon || '✅') + '</div>';
  html += '<h2>' + (currentFlow.meta.title || 'Результаты') + '</h2>';
  html += '<p>' + (t('click_to_expand') || 'Нажми на карточку, чтобы развернуть') + '</p></div>';

  // Identity-якорь
  if (currentFlow.meta.identity_anchor) {
    html += `<div class="identity-anchor">${currentFlow.meta.identity_anchor}</div>`;
  }

  // Cross-module рекомендации
  if (typeof ProgressEngine !== 'undefined' && typeof ProgressEngine.getRecommendations === 'function') {
    const recs = ProgressEngine.getRecommendations();
    if (recs && recs.length > 0) {
      html += '<div class="cross-recommendation">';
      html += '<h4>' + (t('recommendation_title') || 'Рекомендации') + '</h4>';
      for (const r of recs) {
        html += '<div class="rec-item">' + r.text + '</div>';
      }
      html += '</div>';
    }
  }

  if (solutions.length === 0) {
    html += '<div class="no-results"><p>' + (t('no_results') || 'Нет решений') + '</p></div>';
  } else {
    for (const sol of solutions) {
      html += '<div class="result-card result-card-v3" onclick="toggleDetail(this)">';
      html += '<div class="result-header">';
      html += '<div class="result-emoji">' + (sol.title.match(/^.{1,2}/) || '📌') + '</div>';
      html += '<div class="result-meta">';
      html += '<div class="result-title">' + sol.title + '</div>';
      html += '<div class="result-desc-short">' + sol.description + '</div>';
      html += '<div class="result-badges-row">';
      html += `<span class="badge prio-${sol.scoring?.priority || 'medium'}">${t('badge_' + (sol.scoring?.priority || 'medium')) || sol.scoring?.priority || 'Средний'}</span>`;
      html += `<span class="badge rel-${sol.scoring?.reliability || 'medium'}">${t('badge_' + (sol.scoring?.reliability || 'medium') + '_rel') || sol.scoring?.reliability || 'Средняя'}</span>`;
      if (sol.time_estimate) {
        html += `<span class="badge time-badge">⏱️ ${sol.time_estimate}</span>`;
      }
      html += '</div>';
      html += '</div>';
      html += '</div>';
      html += '<div class="result-detail">';
      if (sol.yield_estimate) {
        html += `<div class="result-yield">🎯 ${t('yield_estimate') || 'Результат'}: ${sol.yield_estimate}</div>`;
      }
      if (sol.daily_action) {
        html += renderDailyActionClean(sol);
      }
      if (sol.steps && sol.steps.length) {
        html += `<h4>${t('detail_steps') || 'Шаги'}</h4><ol>` + sol.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>';
      }
      if (sol.warnings && sol.warnings.length) {
        html += `<h4>${t('detail_warnings') || 'Предупреждения'}</h4><ul>` + sol.warnings.map(w => '<li>' + w + '</li>').join('') + '</ul>';
      }
      if (sol.resources && sol.resources.length) {
        html += `<h4>📚 ${t('resources') || 'Ресурсы'}</h4><ul class="resources-list-v3">`;
        for (const r of sol.resources) {
          const icon = r.type === 'book' ? '📖' : r.type === 'technique' ? '🧠' : '🔗';
          html += `<li class="resource-item-v3"><span class="resource-icon-v3">${icon}</span><span class="resource-text-v3">${r.label}</span></li>`;
        }
        html += '</ul>';
      }
      // Follow-up info
      if (sol.follow_up) {
        html += `<div class="followup-info">⏰ ${t('followup_coming') || 'Через неделю мы проверим твой прогресс'}</div>`;
      }
      html += '</div></div>';
    }
  }

  html += `<button class="btn-primary" onclick="restartFlow()" style="margin-top:16px">${t('restart') || 'Начать заново'}</button>`;
  container.innerHTML = html;

  // Сохраняем инсайт и follow-up
  if (solutions.length > 0) {
    const topSolution = solutions[0];
    afterQuizComplete(currentFlow.meta.module, currentFlow.meta.category, topSolution);
  }

  // Сохраняем daily_action
  if (solutions[0] && solutions[0].daily_action && typeof ProgressEngine !== 'undefined') {
    ProgressEngine.setDailyAction({
      text: solutions[0].daily_action,
      module: currentFlow.meta.module,
      category: currentFlow.meta.category,
      timestamp: Date.now()
    });
    updateDailyTaskUI();
  }

  // Сохраняем профиль модуля
  if (typeof ProgressEngine !== 'undefined') {
    const profile = { energy: 5, blocks: [] };
    if (currentAnswers['flow_state']) profile.identity = currentAnswers['flow_state'];
    ProgressEngine.saveModuleProfile(currentFlow.meta.module, profile);
  }
}

// ============================================================
// 9. ИНТЕГРАЦИЯ ПОСЛЕ ЗАВЕРШЕНИЯ КВИЗА
// ============================================================

function afterQuizComplete(module, category, topSolution) {
  if (topSolution) {
    const insight = topSolution.description || topSolution.title;
    InsightTimeline.add(module, category, insight);
    if (topSolution.follow_up) {
      FollowUpEngine.schedule(module + '_' + category + '_' + topSolution.id, topSolution.follow_up);
    }
  }
  if (typeof updateModuleProgress === 'function') {
    updateModuleProgress();
  }
}
window.afterQuizComplete = afterQuizComplete;

// ============================================================
// 10. RENDER DAILY ACTION (без дублей)
// ============================================================

function renderDailyActionClean(solution) {
  if (!solution || !solution.daily_action) return '';
  const text = solution.daily_action
    .replace(/^Сегодня:\s*/i, '')
    .replace(/^🎯\s*/, '');
  const doneKey = 'compass_daily_' + new Date().toDateString();
  const isDone = localStorage.getItem(doneKey) === 'true';
  const btnDisabled = isDone ? 'disabled' : '';
  const btnText = isDone ? '✅ Выполнено!' : (t('daily_task_done') || 'Выполнено');
  return `
    <div class="daily-action-v3 ${isDone ? 'done' : ''}">
      <div class="daily-action-header">
        <span class="daily-action-icon">⚡</span>
        <span class="daily-action-label">${t('daily_task_title') || 'Задание дня'}</span>
      </div>
      <p class="daily-action-text">${text}</p>
      <button class="daily-action-btn" onclick="completeDailyTaskV3(this)" ${btnDisabled}>
        ${btnText}
      </button>
    </div>
  `;
}
window.renderDailyActionClean = renderDailyActionClean;

function completeDailyTaskV3(btn) {
  btn.disabled = true;
  btn.textContent = '✅ Выполнено!';
  const container = btn.closest('.daily-action-v3');
  if (container) container.classList.add('done');
  const today = new Date().toDateString();
  localStorage.setItem('compass_daily_' + today, 'true');
  showToast('🔥 Отлично! Шаг к новой привычке сделан.');
}
window.completeDailyTaskV3 = completeDailyTaskV3;

// ============================================================
// 11. НАВИГАЦИЯ И УПРАВЛЕНИЕ ЭКРАНАМИ
// ============================================================

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
  if (el) el.classList.add('active');
}
window.showScreen = showScreen;

function goHome() {
  showScreen('screen-home');
  updateDailyTaskUI();
  initHomeEnhanced();
}
window.goHome = goHome;

function updateDailyTaskUI() {
  if (typeof ProgressEngine === 'undefined') return;
  const task = ProgressEngine.getDailyAction();
  if (!task || !task.text) return;

  const container = document.getElementById('dailyTaskBox');
  if (!container) return;

  const doneKey = 'compass_daily_' + new Date().toDateString();
  const isDone = localStorage.getItem(doneKey) === 'true';

  container.innerHTML = `
    <div class="daily-task-content ${isDone ? 'done' : ''}">
      <div class="daily-task-title">🎯 ${t('daily_task_title') || 'Задание дня'}</div>
      <div class="daily-task-text">${task.text}</div>
      <button class="daily-task-btn" onclick="completeDailyTask()" ${isDone ? 'disabled style="opacity:0.5"' : ''}>
        ${isDone ? '✅ ' + (t('daily_task_done') || 'Выполнено') : '✅ ' + (t('daily_task_done') || 'Выполнено')}
      </button>
    </div>
  `;
  if (isDone) container.classList.add('done');
  else container.classList.remove('done');
}
window.updateDailyTaskUI = updateDailyTaskUI;

function completeDailyTask() {
  if (typeof ProgressEngine !== 'undefined') {
    ProgressEngine.completeTask('daily');
    const doneKey = 'compass_daily_' + new Date().toDateString();
    localStorage.setItem(doneKey, 'true');
    showToast('✅ Задание выполнено!');
    document.querySelectorAll('.daily-task-btn').forEach(btn => {
      btn.textContent = '✅ Выполнено';
      btn.disabled = true;
      btn.style.opacity = '0.5';
    });
    document.querySelectorAll('#dailyTaskBox, .daily-task-content').forEach(box => {
      box.classList.add('done');
    });
  }
}
window.completeDailyTask = completeDailyTask;

// ============================================================
// 12. ИНИЦИАЛИЗАЦИЯ НА ГЛАВНОЙ
// ============================================================

function initHomeEnhanced() {
  const greetingContainer = document.getElementById('personalGreeting');
  if (greetingContainer) greetingContainer.innerHTML = renderPersonalGreeting();

  DailyChallenge.render('challengeContainer');

  InsightTimeline.render('timelineContainer');

  const weekData = ProgressChart.getWeeklyData();
  ProgressChart.renderMini('weekChart', weekData);

  FollowUpEngine.checkAndShow();

  updateDailyTaskUI();
}
window.initHomeEnhanced = initHomeEnhanced;

// ============================================================
// 13. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  updateDailyTaskUI();

  if (document.getElementById('screen-home').classList.contains('active')) {
    initHomeEnhanced();
  }

  console.log('✅ App v3.0 Hybrid загружен (UserProfile + Timeline + Challenges + Chart + FollowUp + DayCycle)');
});

// ============================================================
// 14. ПЕРЕВОДЫ (fallback)
// ============================================================

function t(key, params) {
  // Базовый fallback для переводов
  const translations = {
    'question_of': 'Вопрос {current} из {total}',
    'click_to_expand': 'Нажми на карточку, чтобы развернуть',
    'daily_task_title': 'Задание дня',
    'daily_task_done': 'Выполнено',
    'detail_steps': 'Шаги',
    'detail_warnings': 'Предупреждения',
    'resources': 'Ресурсы',
    'yield_estimate': 'Результат',
    'restart': 'Начать заново',
    'badge_fast': 'Срочно',
    'badge_medium': 'Средний',
    'badge_slow': 'Долгосрочный',
    'badge_high_rel': 'Высокая',
    'badge_medium_rel': 'Средняя',
    'badge_low_rel': 'Низкая',
    'followup_title': 'Проверка через неделю',
    'followup_later': 'Напомнить позже',
    'followup_coming': 'Через неделю мы проверим твой прогресс',
    'challenge_title': 'Вызов дня',
    'days': 'дней',
    'days_streak': 'дней подряд! Ты — машина!',
    'challenge_complete': 'Отлично! Вызов выполнен.',
    'recommendation_title': 'Рекомендации',
    'no_results': 'Нет решений'
  };
  let text = translations[key] || key;
  if (params) {
    for (const p in params) {
      text = text.replace('{' + p + '}', params[p]);
    }
  }
  return text;
}
window.t = t;
