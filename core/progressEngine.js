const ProgressEngine = {
  _key(prefix) { return 'compass_' + prefix; },

  saveAnswer(module, category, questionId, optionId) {
    const key = this._key(module + '_' + category);
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    data[questionId] = { answer: optionId, date: Date.now() };
    localStorage.setItem(key, JSON.stringify(data));
  },

  getAnswers(module, category) {
    const key = this._key(module + '_' + category);
    return JSON.parse(localStorage.getItem(key) || '{}');
  },

  getTrend(module, days = 7) {
    const all = [];
    for(let i = 0; i < days; i++) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const dateStr = d.toDateString();
      const key = this._key('daily_' + dateStr);
      const val = localStorage.getItem(key);
      all.push({ date: dateStr, value: val ? parseInt(val) : null });
    }
    return all.reverse();
  },

  getCrossModuleProfile() {
    const modules = ['purpose','happiness','habits','money','responsibility','health','relationships','creativity','learning'];
    let completed = 0;
    const profile = { energy: 5, identity: '', resources: 5, blocks: [], completed: 0, total: 5 };
    for(const mod of modules) {
      const key = this._key(mod + '_profile');
      const data = JSON.parse(localStorage.getItem(key) || 'null');
      if(data) {
        completed++;
        profile[mod] = data;
        if(data.energy !== undefined) profile.energy = (profile.energy + data.energy) / 2;
        if(data.identity) profile.identity = data.identity;
        if(data.blocks) profile.blocks.push(...data.blocks);
      }
    }
    profile.completed = completed;
    return profile;
  },

  saveModuleProfile(module, profile) {
    localStorage.setItem(this._key(module + '_profile'), JSON.stringify(profile));
  },

  getDailyAction() {
    const key = this._key('last_daily_action');
    const raw = localStorage.getItem(key);
    if(!raw) return null;
    return JSON.parse(raw);
  },

  setDailyAction(obj) {
    localStorage.setItem(this._key('last_daily_action'), JSON.stringify(obj));
  },

  completeTask(taskId) {
    const today = new Date().toDateString();
    const key = this._key('task_' + taskId + '_' + today);
    localStorage.setItem(key, '1');
    const streakKey = this._key('streak_' + taskId);
    let streak = parseInt(localStorage.getItem(streakKey) || '0');
    streak++;
    localStorage.setItem(streakKey, String(streak));
    if(streak === 66) {
      if(typeof showToast === 'function') showToast('🎉 66 дней! Привычка сформирована!');
    }
  },

  getStreak(taskId) {
    return parseInt(localStorage.getItem(this._key('streak_' + taskId)) || '0');
  },

  getModuleProgress(module) {
    const key = `compass_${module}`;
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    return Object.keys(data).length;
  },

  getRecommendations() {
    const profile = this.getCrossModuleProfile();
    const recs = [];
    if(profile.purpose && profile.purpose.flow_state === 'creating') {
      if(!profile.money || profile.money.savings === 'no_savings') {
        recs.push({
          module: 'money',
          text: 'У вас есть творческий потенциал. Начните с малого: откладывайте 5% дохода на развитие.',
          priority: 'high'
        });
      }
    }
    if(profile.habits && profile.habits.identity) {
      const id = profile.habits.identity;
      if(typeof id === 'string' && (id.includes('bad') || id.includes('not'))) {
        recs.push({
          module: 'habits',
          text: 'Вы определили себя через отрицание. Попробуйте переформулировать: "Я — человек, который выбирает здоровье".',
          priority: 'medium'
        });
      }
    }
    return recs;
  },

  cleanupOldData(daysToKeep = 90) {
    const cutoff = Date.now() - daysToKeep * 86400000;
    const keys = Object.keys(localStorage);
    for(const key of keys) {
      if(key.startsWith('compass_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if(data && data.date && data.date < cutoff) {
            localStorage.removeItem(key);
          }
        } catch(e) {}
      }
    }
  }
};
window.ProgressEngine = ProgressEngine;
console.log('✅ ProgressEngine v1.1 загружен (analytics)');
