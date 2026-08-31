// core/tracker.js
// ============================================================
// ТРЕКЕР ПРИВЫЧЕК — КОМПАС ПО ЖИЗНИ v2.0
// ============================================================

const HabitTracker = {
  _key() { return 'compass_habits'; },

  // === ДОБАВЛЕНИЕ ПРИВЫЧКИ ===
  add(name, identityLabel, cue, routine, reward) {
    const habits = this.getAll();
    habits.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name,
      identity: identityLabel || '',
      cue: cue || '',
      routine: routine || '',
      reward: reward || '',
      streak: 0,
      bestStreak: 0,
      history: [],
      created: Date.now()
    });
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return habits[habits.length - 1];
  },

  // === ПОЛУЧИТЬ ВСЕ ===
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key()) || '[]');
    } catch {
      return [];
    }
  },

  // === ПОЛУЧИТЬ ПО ID ===
  get(habitId) {
    const habits = this.getAll();
    return habits.find(h => h.id === habitId) || null;
  },

  // === ОТМЕТИТЬ ВЫПОЛНЕНИЕ ===
  checkIn(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return;

    const today = new Date().toDateString();
    if (h.history.includes(today)) return; // уже отмечено

    // Проверяем, был ли пропуск
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    // Если вчера не отмечено и это не первый день — сбрасываем серию
    if (!h.history.includes(yesterdayStr) && h.history.length > 0) {
      h.streak = 0;
    }

    h.history.push(today);
    h.streak++;
    if (h.streak > h.bestStreak) h.bestStreak = h.streak;

    localStorage.setItem(this._key(), JSON.stringify(habits));

    // Мотивация
    const motivation = this.getMotivation(habitId);
    if (motivation && typeof showToast === 'function') {
      showToast(motivation);
    }

    return h;
  },

  // === УДАЛИТЬ ПРИВЫЧКУ ===
  remove(habitId) {
    const habits = this.getAll();
    const filtered = habits.filter(h => h.id !== habitId);
    if (filtered.length === habits.length) return false;
    localStorage.setItem(this._key(), JSON.stringify(filtered));
    return true;
  },

  // === РЕДАКТИРОВАТЬ ПРИВЫЧКУ ===
  update(habitId, updates) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return false;
    Object.assign(h, updates);
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return true;
  },

  // === РЕНДЕР КАЛЕНДАРЯ ===
  renderCalendar(habitId, containerId, days = 14) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const h = this.get(habitId);
    if (!h) {
      container.innerHTML = '<p style="color:var(--text3);">Нет данных</p>';
      return;
    }

    // Подсветка иконки календаря
    const isDoneToday = h.history.includes(new Date().toDateString());

    let html = `<div class="habit-tracker-header">
      <span class="habit-name">${h.name}</span>
      <span class="habit-streak">🔥 ${h.streak} дней</span>
      ${isDoneToday ? '<span class="habit-done-today">✅</span>' : ''}
    </div>`;

    html += '<div class="habit-tracker-grid">';
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const ds = d.toDateString();
      const done = h.history.includes(ds);
      const isToday = i === 0;
      const cls = done ? 'done' : (isToday ? 'today' : 'missed');
      html += `<div class="habit-day ${cls}" title="${ds}"></div>`;
    }
    html += '</div>';

    // Мотивационная фраза
    const motivation = this.getMotivation(habitId);
    if (motivation) {
      html += `<div class="habit-motivation">${motivation}</div>`;
    }

    container.innerHTML = html;
  },

  // === МОТИВАЦИОННАЯ ФРАЗА ===
  getMotivation(habitId) {
    const h = this.get(habitId);
    if (!h) return '';
    const streak = h.streak || 0;
    
    // Используем локализацию, если есть
    const t = typeof window.t === 'function' ? window.t : key => key;
    
    if (streak === 0) return t('motivation_start') || '💪 Начни сегодня — это главный шаг!';
    if (streak < 7) return (t('motivation_week') || '🔥 Ты уже держишься {days} дней! Продолжай!').replace('{days}', streak);
    if (streak < 30) return (t('motivation_month') || '🌟 {days} дней! Ты сильнее, чем думаешь!').replace('{days}', streak);
    if (streak < 66) return (t('motivation_almost') || '🚀 {days} дней до привычки! Ты почти у цели!').replace('{days}', streak);
    return t('motivation_done') || '🎉 Привычка сформирована! Ты — новый человек!';
  },

  // === СТАТИСТИКА ===
  getStats(habitId) {
    const h = this.get(habitId);
    if (!h) return null;
    const total = h.history.length;
    const daysSinceStart = Math.max(1, Math.floor((Date.now() - h.created) / 86400000));
    const successRate = Math.round((total / daysSinceStart) * 100);
    return {
      total,
      streak: h.streak || 0,
      bestStreak: h.bestStreak || 0,
      successRate,
      daysSinceStart
    };
  },

  // === СБРОС СЕРИИ ===
  resetStreak(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return false;
    h.streak = 0;
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return true;
  }
};

// ===== ЭКСПОРТ =====
window.HabitTracker = HabitTracker;

console.log('✅ Tracker v2.0 загружен (CRUD + motivation + calendar)');
