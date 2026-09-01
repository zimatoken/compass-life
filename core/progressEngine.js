// core/progressEngine.js
// ============================================================
// ПРОГРЕСС-ДВИЖОК — КОМПАС ПО ЖИЗНИ v3.0
// ============================================================
// Что нового:
// • Поддержка follow-up отслеживания
// • Энергетический трекер
// • Блокировка ответов (answered_questions)
// • Улучшенные кросс-модульные рекомендации
// • Статистика по модулям
// • Трекинг завершённых квизов
// ============================================================

const ProgressEngine = {
  _key(prefix) { return 'compass_' + prefix; },

  // ============================================================
  // 1. ОСНОВНЫЕ МЕТОДЫ РАБОТЫ С ОТВЕТАМИ
  // ============================================================

  /**
   * Сохраняет ответ на вопрос
   */
  saveAnswer(module, category, questionId, optionId) {
    const key = this._key(module + '_' + category);
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    data[questionId] = { answer: optionId, date: Date.now() };
    localStorage.setItem(key, JSON.stringify(data));
    
    // Обновляем время последней активности
    this._updateLastActivity(module, category);
  },

  /**
   * Получает все ответы для категории
   */
  getAnswers(module, category) {
    const key = this._key(module + '_' + category);
    return JSON.parse(localStorage.getItem(key) || '{}');
  },

  /**
   * Проверяет, отвечал ли пользователь на вопрос
   */
  hasAnswer(module, category, questionId) {
    const answers = this.getAnswers(module, category);
    return !!answers[questionId];
  },

  /**
   * Получает последний ответ на вопрос
   */
  getLastAnswer(module, category, questionId) {
    const answers = this.getAnswers(module, category);
    return answers[questionId] || null;
  },

  // ============================================================
  // 2. ТРЕКИНГ АКТИВНОСТИ
  // ============================================================

  _updateLastActivity(module, category) {
    const key = this._key('last_activity');
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    data[module + '_' + category] = Date.now();
    localStorage.setItem(key, JSON.stringify(data));
  },

  getLastActivity(module, category) {
    const key = this._key('last_activity');
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    return data[module + '_' + category] || null;
  },

  /**
   * Отмечает квиз как завершённый
   */
  markQuizCompleted(module, category) {
    const key = this._key('completed_quizzes');
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    const id = module + '_' + category;
    if (!data.includes(id)) {
      data.push(id);
      localStorage.setItem(key, JSON.stringify(data));
    }
  },

  /**
   * Проверяет, завершён ли квиз
   */
  isQuizCompleted(module, category) {
    const key = this._key('completed_quizzes');
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    return data.includes(module + '_' + category);
  },

  /**
   * Получает список завершённых квизов
   */
  getCompletedQuizzes() {
    const key = this._key('completed_quizzes');
    return JSON.parse(localStorage.getItem(key) || '[]');
  },

  // ============================================================
  // 3. ЭНЕРГЕТИЧЕСКИЙ ТРЕКЕР
  // ============================================================

  /**
   * Сохраняет дневную энергию (1-10)
   */
  saveDailyEnergy(score) {
    const today = new Date().toDateString();
    const key = this._key('energy_' + today);
    localStorage.setItem(key, String(Math.max(1, Math.min(10, score))));
  },

  /**
   * Получает дневную энергию
   */
  getDailyEnergy(dateStr) {
    const key = this._key('energy_' + dateStr);
    const val = localStorage.getItem(key);
    return val ? parseInt(val) : null;
  },

  /**
   * Получает среднюю энергию за период
   */
  getAverageEnergy(days = 7) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const energy = this.getDailyEnergy(d.toDateString());
      if (energy !== null) {
        total += energy;
        count++;
      }
    }
    return count > 0 ? Math.round(total / count) : null;
  },

  // ============================================================
  // 4. ПРОФИЛИ МОДУЛЕЙ
  // ============================================================

  /**
   * Сохраняет профиль модуля
   */
  saveModuleProfile(module, profile) {
    const key = this._key(module + '_profile');
    const existing = this.getModuleProfile(module) || {};
    localStorage.setItem(key, JSON.stringify({ ...existing, ...profile }));
  },

  /**
   * Получает профиль модуля
   */
  getModuleProfile(module) {
    const key = this._key(module + '_profile');
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  },

  /**
   * Получает прогресс модуля (количество ответов)
   */
  getModuleProgress(module) {
    const key = this._key(module);
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    return Object.keys(data).length;
  },

  // ============================================================
  // 5. КРОСС-МОДУЛЬНЫЙ ПРОФИЛЬ
  // ============================================================

  getCrossModuleProfile() {
    const modules = [
      'purpose', 'happiness', 'habits', 'money', 
      'responsibility', 'health', 'relationships', 
      'creativity', 'learning'
    ];
    
    let completed = 0;
    const profile = { 
      energy: 5, 
      identity: '', 
      resources: 5, 
      blocks: [], 
      completed: 0, 
      total: modules.length,
      lastUpdated: Date.now()
    };
    
    for (const mod of modules) {
      const data = this.getModuleProfile(mod);
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

  // ============================================================
  // 6. ТРЕНДЫ
  // ============================================================

  /**
   * Получает тренд по дням
   */
  getTrend(module, days = 7) {
    const result = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toDateString();
      
      const energy = this.getDailyEnergy(dateStr);
      
      const key = this._key(module + '_' + dateStr);
      const raw = localStorage.getItem(key);
      let answer = null;
      if (raw) {
        try { answer = JSON.parse(raw); } catch(e) {}
      }
      
      result.push({ 
        date: dateStr, 
        energy: energy, 
        answer: answer,
        day: d.toLocaleDateString('ru-RU', { weekday: 'short' })
      });
    }
    return result;
  },

  /**
   * Получает общую статистику
   */
  getStats() {
    const completedQuizzes = this.getCompletedQuizzes();
    const profile = this.getCrossModuleProfile();
    const avgEnergy = this.getAverageEnergy(7);
    const streak = this.getStreak('daily');
    
    return {
      completedQuizzes: completedQuizzes.length,
      totalModules: profile.total,
      completedModules: profile.completed,
      avgEnergy: avgEnergy,
      streak: streak,
      blocks: profile.blocks || [],
      identity: profile.identity || ''
    };
  },

  // ============================================================
  // 7. ЕЖЕДНЕВНЫЕ ЗАДАНИЯ
  // ============================================================

  /**
   * Получает текущее дневное задание
   */
  getDailyAction() {
    const key = this._key('last_daily_action');
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try { 
      const data = JSON.parse(raw);
      // Проверяем, не устарело ли задание (более 24 часов)
      if (data.created && (Date.now() - data.created > 24 * 60 * 60 * 1000)) {
        return null;
      }
      return data;
    } catch(e) { return null; }
  },

  /**
   * Устанавливает дневное задание
   */
  setDailyAction(obj) {
    obj.created = Date.now();
    obj.completed = false;
    localStorage.setItem(this._key('last_daily_action'), JSON.stringify(obj));
  },

  /**
   * Отмечает задание как выполненное
   */
  completeTask(taskId) {
    const today = new Date().toDateString();
    const taskKey = this._key('task_' + taskId + '_' + today);
    
    if (localStorage.getItem(taskKey)) return false;
    
    localStorage.setItem(taskKey, '1');
    
    // Обновляем ежедневную отметку
    const dailyKey = 'compass_daily_' + today;
    localStorage.setItem(dailyKey, 'true');
    
    // Обновляем серию
    const streakKey = this._key('streak_' + taskId);
    let streak = parseInt(localStorage.getItem(streakKey) || '0');
    streak++;
    localStorage.setItem(streakKey, String(streak));
    
    // Отмечаем задание как выполненное
    const action = this.getDailyAction();
    if (action) {
      action.completed = true;
      action.completedAt = Date.now();
      localStorage.setItem(this._key('last_daily_action'), JSON.stringify(action));
    }
    
    this._showMotivation(streak);
    return true;
  },

  /**
   * Получает серию выполнений
   */
  getStreak(taskId) {
    return parseInt(localStorage.getItem(this._key('streak_' + taskId)) || '0');
  },

  /**
   * Проверяет, выполнено ли задание сегодня
   */
  isTaskCompletedToday(taskId) {
    const today = new Date().toDateString();
    const taskKey = this._key('task_' + taskId + '_' + today);
    return !!localStorage.getItem(taskKey);
  },

  // ============================================================
  // 8. МОТИВАЦИЯ
  // ============================================================

  _showMotivation(streak) {
    if (typeof showToast !== 'function') return;
    
    const messages = {
      1: '💪 ' + (typeof t === 'function' ? t('motivation_start') : 'Начни сегодня — это главный шаг!'),
      7: '🔥 ' + (typeof t === 'function' ? t('motivation_week', { days: streak }) : `🔥 Ты уже держишься ${streak} дней! Продолжай!`),
      14: '🌟 ' + (typeof t === 'function' ? t('motivation_month', { days: streak }) : `🌟 ${streak} дней! Ты сильнее, чем думаешь!`),
      21: '🚀 ' + (typeof t === 'function' ? t('motivation_almost', { days: streak }) : `🚀 ${streak} дней! Ты почти у цели!`),
      30: '🎉 ' + (typeof t === 'function' ? t('motivation_done') : '🎉 Привычка сформирована! Ты — новый человек!'),
      66: '🏆 ' + (typeof t === 'function' ? '🏆 66 дней! Ты — легенда!' : '🏆 66 дней! Ты — легенда!')
    };
    
    const msg = messages[streak] || (streak % 7 === 0 ? `🔥 ${streak} дней! Ты — машина!` : null);
    if (msg) showToast(msg);
  },

  // ============================================================
  // 9. РЕКОМЕНДАЦИИ
  // ============================================================

  getRecommendations() {
    const profile = this.getCrossModuleProfile();
    const recs = [];

    // === Purpose + Money ===
    if (profile.purpose && profile.purpose.flow_state === 'creating') {
      if (!profile.money || profile.money.savings === 'no_savings') {
        recs.push({
          module: 'money',
          text: 'У вас есть творческий потенциал. Начните с малого: откладывайте 5% дохода на развитие.',
          priority: 'high',
          category: 'audit'
        });
      }
    }

    // === Purpose + Responsibility ===
    if (profile.purpose && profile.purpose.flow_state) {
      if (!profile.responsibility || profile.responsibility.overload === 'too_many') {
        recs.push({
          module: 'responsibility',
          text: 'У вас есть призвание, но вы перегружены обязательствами. Проведите аудит дел — оставьте только важное.',
          priority: 'medium',
          category: 'commitments'
        });
      }
    }

    // === Happiness + Relationships ===
    if (profile.happiness && profile.happiness.energy_pattern === 'toxic') {
      if (!profile.relationships || profile.relationships.relation_quality === 'strained') {
        recs.push({
          module: 'relationships',
          text: 'Вы окружены токсичными людьми. Начните устанавливать границы — это улучшит и настроение, и отношения.',
          priority: 'high',
          category: 'family'
        });
      }
    }

    // === Happiness + Health ===
    if (profile.happiness && profile.happiness.blocker_intensity === 'critical') {
      if (!profile.health || profile.health.sleep_quality === 'bad') {
        recs.push({
          module: 'health',
          text: 'Критический уровень стресса. Начните с нормализации сна — это основа восстановления.',
          priority: 'high',
          category: 'sleep'
        });
      }
    }

    // === Money + Habits ===
    if (profile.money && profile.money.financial_archtype === 'spender') {
      if (!profile.habits || profile.habits.current_gap === 'willpower') {
        recs.push({
          module: 'money',
          text: 'Вы склонны к импульсивным тратам. Внедрите привычку "правило 24 часов" перед любой покупкой > 1000₽.',
          priority: 'medium',
          category: 'audit'
        });
      }
    }

    // === Creativity + Fear ===
    if (profile.creativity && profile.creativity.creative_block === 'fear') {
      if (!profile.happiness || profile.happiness.blocker_intensity === 'critical') {
        recs.push({
          module: 'creativity',
          text: 'Страх критики блокирует ваше творчество. Начните с малого: покажите работу 1 безопасному человеку.',
          priority: 'high',
          category: 'channel'
        });
      }
    }

    // === Health + Sleep ===
    if (profile.health && profile.health.sleep_quality === 'bad') {
      if (!profile.responsibility || profile.responsibility.planning_style === 'chaos') {
        recs.push({
          module: 'responsibility',
          text: 'Плохой сон связан с хаосом в планировании. Начните с ритуала: за 1 час до сна — никаких экранов.',
          priority: 'medium',
          category: 'planning'
        });
      }
    }

    // === Learning + Reading ===
    if (profile.learning && profile.learning.reading_freq === 'never') {
      if (!profile.purpose || !profile.purpose.flow_state) {
        recs.push({
          module: 'learning',
          text: 'Чтение помогает найти призвание. Начните с 5 страниц в день — это изменит всё.',
          priority: 'low',
          category: 'reading'
        });
      }
    }

    return recs;
  },

  // ============================================================
  // 10. FOLLOW-UP ТРЕКИНГ
  // ============================================================

  /**
   * Сохраняет ответ на follow-up
   */
  saveFollowUpAnswer(quizId, answer) {
    const key = this._key('followup_answers');
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    data[quizId] = {
      answer: answer,
      date: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(data));
  },

  /**
   * Получает ответ на follow-up
   */
  getFollowUpAnswer(quizId) {
    const key = this._key('followup_answers');
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    return data[quizId] || null;
  },

  // ============================================================
  // 11. УПРАВЛЕНИЕ ДАННЫМИ
  // ============================================================

  /**
   * Очистка старых данных
   */
  cleanupOldData(daysToKeep = 90) {
    const cutoff = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;
    const keys = Object.keys(localStorage);
    let cleaned = 0;
    
    for (const key of keys) {
      if (key.startsWith('compass_')) {
        try {
          const data = JSON.parse(localStorage.getItem(key));
          if (data && data.date && data.date < cutoff) {
            localStorage.removeItem(key);
            cleaned++;
          }
        } catch(e) {}
      }
    }
    
    console.log(`🧹 Очищено ${cleaned} устаревших записей`);
    return cleaned;
  },

  /**
   * Полный сброс данных
   */
  resetAll() {
    const keys = Object.keys(localStorage);
    let removed = 0;
    
    for (const key of keys) {
      if (key.startsWith('compass_')) {
        localStorage.removeItem(key);
        removed++;
      }
    }
    
    console.log(`🔄 Сброшено ${removed} записей`);
    return removed;
  },

  /**
   * Экспорт данных
   */
  exportData() {
    const data = {};
    const keys = Object.keys(localStorage);
    
    for (const key of keys) {
      if (key.startsWith('compass_')) {
        try {
          data[key] = JSON.parse(localStorage.getItem(key));
        } catch(e) {
          data[key] = localStorage.getItem(key);
        }
      }
    }
    
    return data;
  },

  /**
   * Импорт данных
   */
  importData(data) {
    for (const [key, value] of Object.entries(data)) {
      if (key.startsWith('compass_')) {
        localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
      }
    }
    console.log('📥 Данные импортированы');
  },

  // ============================================================
  // 12. ПОЛУЧЕНИЕ СТАТИСТИКИ ПО МОДУЛЯМ
  // ============================================================

  getModuleStats() {
    const modules = [
      'purpose', 'happiness', 'habits', 'money', 
      'responsibility', 'health', 'relationships', 
      'creativity', 'learning'
    ];
    
    const stats = {};
    
    for (const mod of modules) {
      const answers = this.getAnswers(mod, mod);
      const profile = this.getModuleProfile(mod);
      const isCompleted = this.isQuizCompleted(mod, mod);
      
      stats[mod] = {
        answerCount: Object.keys(answers).length,
        hasProfile: !!profile,
        isCompleted: isCompleted,
        lastActivity: this.getLastActivity(mod, mod)
      };
    }
    
    return stats;
  }
};

// ============================================================
// ЭКСПОРТ
// ============================================================
window.ProgressEngine = ProgressEngine;

console.log('✅ ProgressEngine v3.0 загружен (full analytics + recommendations + follow-up + stats)');
console.log('📊 Доступно модулей:', Object.keys(ProgressEngine.getModuleStats()).length);
