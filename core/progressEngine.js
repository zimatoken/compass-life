// core/progressEngine.js
// ============================================================
// ПРОГРЕСС-ДВИЖОК — КОМПАС ПО ЖИЗНИ v2.0
// ============================================================

const ProgressEngine = {
  _key(prefix) { return 'compass_' + prefix; },

  // === СОХРАНЕНИЕ ОТВЕТОВ ===
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

  // === ЕЖЕДНЕВНАЯ ЭНЕРГИЯ ===
  saveDailyEnergy(score) {
    const today = new Date().toDateString();
    const key = this._key('energy_' + today);
    localStorage.setItem(key, String(score));
  },

  getDailyEnergy(dateStr) {
    const key = this._key('energy_' + dateStr);
    return localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : null;
  },

  // === ТРЕНД ===
  getTrend(module, days = 7) {
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toDateString();
      
      // Энергия
      const energy = this.getDailyEnergy(dateStr);
      
      // Ответы по модулю (если есть)
      const key = this._key(module + '_' + dateStr);
      const raw = localStorage.getItem(key);
      let answer = null;
      if (raw) {
        try { answer = JSON.parse(raw); } catch(e) {}
      }
      
      result.push({ date: dateStr, energy: energy, answer: answer });
    }
    return result;
  },

  // === КРОСС-ПРОФИЛЬ ===
  getCrossModuleProfile() {
    const modules = ['purpose', 'happiness', 'habits', 'money', 'responsibility', 'health', 'relationships', 'creativity', 'learning'];
    let completed = 0;
    const profile = { 
      energy: 5, 
      identity: '', 
      resources: 5, 
      blocks: [], 
      completed: 0, 
      total: modules.length 
    };
    
    for (const mod of modules) {
      const key = this._key(mod + '_profile');
      const data = JSON.parse(localStorage.getItem(key) || 'null');
      if (data) {
        completed++;
        profile[mod] = data;
        if (data.energy !== undefined) {
          profile.energy = (profile.energy + data.energy) / 2;
        }
        if (data.identity) profile.identity = data.identity;
        if (data.blocks) profile.blocks.push(...data.blocks);
      }
    }
    profile.completed = completed;
    return profile;
  },

  saveModuleProfile(module, profile) {
    localStorage.setItem(this._key(module + '_profile'), JSON.stringify(profile));
  },

  getModuleProgress(module) {
    const key = `compass_${module}`;
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    return Object.keys(data).length;
  },

  // === ЕЖЕДНЕВНОЕ ЗАДАНИЕ ===
  getDailyAction() {
    const key = this._key('last_daily_action');
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch(e) { return null; }
  },

  setDailyAction(obj) {
    // Добавляем дату создания
    obj.created = Date.now();
    localStorage.setItem(this._key('last_daily_action'), JSON.stringify(obj));
  },

  // === ВЫПОЛНЕНИЕ ЗАДАНИЯ ===
  completeTask(taskId) {
    const today = new Date().toDateString();
    const taskKey = this._key('task_' + taskId + '_' + today);
    
    // Если уже выполнено — не дублируем
    if (localStorage.getItem(taskKey)) return;
    
    localStorage.setItem(taskKey, '1');
    
    const streakKey = this._key('streak_' + taskId);
    let streak = parseInt(localStorage.getItem(streakKey) || '0');
    streak++;
    localStorage.setItem(streakKey, String(streak));
    
    // Мотивация в зависимости от прогресса
    if (streak === 1) {
      if (typeof showToast === 'function') showToast('💪 ' + t('motivation_start'));
    } else if (streak === 7) {
      if (typeof showToast === 'function') showToast('🔥 ' + t('motivation_week', { days: streak }));
    } else if (streak === 30) {
      if (typeof showToast === 'function') showToast('🌟 ' + t('motivation_month', { days: streak }));
    } else if (streak === 60) {
      if (typeof showToast === 'function') showToast('🚀 ' + t('motivation_almost', { days: streak }));
    } else if (streak === 66) {
      if (typeof showToast === 'function') showToast('🎉 ' + t('motivation_done'));
    }
  },

  getStreak(taskId) {
    return parseInt(localStorage.getItem(this._key('streak_' + taskId)) || '0');
  },

  // === РЕКОМЕНДАЦИИ ===
  getRecommendations() {
    const profile = this.getCrossModuleProfile();
    const recs = [];

    // Рекомендация: Purpose + Money
    if (profile.purpose && profile.purpose.flow_state === 'creating') {
      if (!profile.money || profile.money.savings === 'no_savings') {
        recs.push({
          module: 'money',
          text: 'У вас есть творческий потенциал. Начните с малого: откладывайте 5% дохода на развитие.',
          priority: 'high'
        });
      }
    }

    // Рекомендация: Purpose + Responsibility
    if (profile.purpose && profile.purpose.flow_state) {
      if (!profile.responsibility || profile.responsibility.overload === 'too_many') {
        recs.push({
          module: 'responsibility',
          text: 'У вас есть призвание, но вы перегружены обязательствами. Проведите аудит дел — оставьте только важное.',
          priority: 'medium'
        });
      }
    }

    // Рекомендация: Habits + Health
    if (profile.habits && profile.habits.desired_identity === 'athlete') {
      if (!profile.health || profile.health.sleep_quality === 'bad') {
        recs.push({
          module: 'health',
          text: 'Вы хотите быть спортивным, но у вас мало энергии. Начните с 5-минутной зарядки утром и нормализации сна.',
          priority: 'medium'
        });
      }
    }

    // Рекомендация: Happiness + Relationships
    if (profile.happiness && profile.happiness.energy_pattern === 'toxic') {
      if (!profile.relationships || profile.relationships.relation_quality === 'strained') {
        recs.push({
          module: 'relationships',
          text: 'Вы окружены токсичными людьми. Начните устанавливать границы — это улучшит и настроение, и отношения.',
          priority: 'high'
        });
      }
    }

    // Рекомендация: Money + Habits
    if (profile.money && profile.money.financial_archtype === 'spender') {
      if (!profile.habits || profile.habits.current_gap === 'willpower') {
        recs.push({
          module: 'habits',
          text: 'Вы склонны к импульсивным тратам. Внедрите привычку "правило 24 часов" перед любой покупкой > 1000₽.',
          priority: 'medium'
        });
      }
    }

    // Рекомендация: Creativity + Fear
    if (profile.creativity && profile.creativity.creative_block === 'fear') {
      if (!profile.happiness || profile.happiness.blocker_intensity === 'critical') {
        recs.push({
          module: 'creativity',
          text: 'Страх критики блокирует ваше творчество. Начните с малого: покажите работу 1 безопасному человеку.',
          priority: 'high'
        });
      }
    }

    return recs;
  },

  // === ОЧИСТКА ===
  cleanupOldData(daysToKeep = 90) {
    const cutoff = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;
    const keys = Object.keys(localStorage);
    for (const key of keys) {
      if (key.startsWith('compass_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (data && data.date && data.date < cutoff) {
            localStorage.removeItem(key);
          }
        } catch(e) {}
      }
    }
  },

  // === РЕСЕТ (для тестирования) ===
  resetAll() {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
      if (key.startsWith('compass_')) {
        localStorage.removeItem(key);
      }
    }
    console.log('🔄 Все данные сброшены');
  }
};

window.ProgressEngine = ProgressEngine;
console.log('✅ ProgressEngine v2.0 загружен (full analytics + recommendations)');
