const HabitTracker = {
  _key() { return 'compass_habits'; },

  add(name, identityLabel, cue, routine, reward) {
    const habits = this.getAll();
    habits.push({
      id: Date.now().toString(),
      name, identity: identityLabel, cue, routine, reward,
      streak: 0, bestStreak: 0, history: [], created: Date.now()
    });
    localStorage.setItem(this._key(), JSON.stringify(habits));
  },

  getAll() {
    return JSON.parse(localStorage.getItem(this._key()) || '[]');
  },

  checkIn(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if(!h) return;
    const today = new Date().toDateString();
    if(h.history.includes(today)) return;
    h.history.push(today);
    h.streak++;
    if(h.streak > h.bestStreak) h.bestStreak = h.streak;
    if(h.streak === 66 && typeof showToast === 'function') {
      showToast('🎉 Привычка сформирована! Вы — новый человек.');
    }
    localStorage.setItem(this._key(), JSON.stringify(habits));
  },

  renderCalendar(habitId, containerId, days = 14) {
    const container = document.getElementById(containerId);
    if(!container) return;
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if(!h) { container.innerHTML = '<p>Нет данных</p>'; return; }
    let html = '<div class="habit-tracker">';
    for(let i = days - 1; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const ds = d.toDateString();
      const done = h.history.includes(ds);
      const isToday = i === 0;
      const cls = done ? 'done' : (isToday ? 'today' : 'missed');
      html += `<div class="habit-day ${cls}" title="${ds}"></div>`;
    }
    html += '</div>';
    container.innerHTML = html;
  },

  getMotivation(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if(!h) return '';
    const streak = h.streak || 0;
    if(streak === 0) return '💪 Начни сегодня — это главный шаг!';
    if(streak < 7) return `🔥 Ты уже держишься ${streak} дней! Продолжай!`;
    if(streak < 30) return `🌟 ${streak} дней! Ты сильнее, чем думаешь!`;
    if(streak < 66) return `🚀 ${streak} дней до привычки! Ты почти у цели!`;
    return '🎉 Привычка сформирована! Ты — новый человек!';
  },

  getStats(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if(!h) return null;
    const total = h.history.length;
    const daysSinceStart = Math.floor((Date.now() - h.created) / 86400000);
    const successRate = daysSinceStart > 0 ? Math.round((total / daysSinceStart) * 100) : 0;
    return { total, streak: h.streak || 0, bestStreak: h.bestStreak || 0, successRate, daysSinceStart };
  }
};
window.HabitTracker = HabitTracker;
console.log('✅ Tracker v1.1 загружен (motivation)');
