// core/tracker.js
// ============================================================
// ТРЕКЕР ПРИВЫЧЕК — КОМПАС ПО ЖИЗНИ v3.0
// ============================================================
// Что нового:
// • Глобальный просмотр (все привычки)
// • Импорт/экспорт привычек
// • Архивация старых привычек
// • Группировка по категориям
// • Приоритеты
// • Напоминания (в localStorage)
// • Ежедневная проверка привычек
// ============================================================

const HabitTracker = {
  _key() { return 'compass_habits'; },
  _archiveKey() { return 'compass_habits_archive'; },

  // ============================================================
  // 1. ОСНОВНЫЕ CRUD-ОПЕРАЦИИ
  // ============================================================

  /**
   * Добавляет новую привычку
   */
  add(name, identityLabel, cue, routine, reward, category, priority) {
    const habits = this.getAll();
    const habit = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.trim(),
      identity: identityLabel || '',
      cue: cue || '',
      routine: routine || '',
      reward: reward || '',
      category: category || 'personal',
      priority: priority || 'medium', // high, medium, low
      streak: 0,
      bestStreak: 0,
      history: [],
      created: Date.now(),
      updated: Date.now(),
      completed: false,
      archived: false,
      notes: '',
      goal: 0, // целевое количество в день
      unit: '' // единица измерения (мин, км, стр)
    };
    habits.push(habit);
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return habit;
  },

  /**
   * Получает все привычки
   */
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key()) || '[]');
    } catch {
      return [];
    }
  },

  /**
   * Получает активные привычки
   */
  getActive() {
    return this.getAll().filter(h => !h.archived);
  },

  /**
   * Получает архивные привычки
   */
  getArchived() {
    return this.getAll().filter(h => h.archived);
  },

  /**
   * Получает привычку по ID
   */
  get(habitId) {
    const habits = this.getAll();
    return habits.find(h => h.id === habitId) || null;
  },

  /**
   * Получает привычки по категории
   */
  getByCategory(category) {
    return this.getAll().filter(h => h.category === category && !h.archived);
  },

  /**
   * Получает привычки по приоритету
   */
  getByPriority(priority) {
    return this.getAll().filter(h => h.priority === priority && !h.archived);
  },

  // ============================================================
  // 2. ВЫПОЛНЕНИЕ ПРИВЫЧКИ
  // ============================================================

  /**
   * Отмечает выполнение привычки
   */
  checkIn(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return null;
    if (h.archived) return null;

    const today = new Date().toDateString();
    if (h.history.includes(today)) return h; // уже отмечено

    // Проверяем пропуски
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    const lastDate = h.history.length > 0 ? new Date(h.history[h.history.length - 1]) : null;
    if (lastDate) {
      const diffDays = Math.floor((Date.now() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        h.streak = 0;
      }
    }

    h.history.push(today);
    h.streak++;
    if (h.streak > h.bestStreak) h.bestStreak = h.streak;
    h.updated = Date.now();
    h.completed = true;

    localStorage.setItem(this._key(), JSON.stringify(habits));

    // Мотивация
    const motivation = this.getMotivation(habitId);
    if (motivation && typeof showToast === 'function') {
      showToast(motivation);
    }

    // Обновляем общий прогресс
    this._updateDailyProgress();

    return h;
  },

  /**
   * Отмечает привычку как невыполненную (отмена)
   */
  uncheck(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return false;

    const today = new Date().toDateString();
    const idx = h.history.indexOf(today);
    if (idx === -1) return false;

    h.history.splice(idx, 1);
    h.streak = this._recalculateStreak(h);
    h.updated = Date.now();
    h.completed = false;

    localStorage.setItem(this._key(), JSON.stringify(habits));
    return true;
  },

  /**
   * Пересчитывает серию
   */
  _recalculateStreak(habit) {
    if (habit.history.length === 0) return 0;
    
    let streak = 0;
    const today = new Date();
    let checkDate = new Date();
    
    for (let i = 0; i < habit.history.length; i++) {
      const dateStr = checkDate.toDateString();
      if (habit.history.includes(dateStr)) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  },

  // ============================================================
  // 3. УПРАВЛЕНИЕ ПРИВЫЧКАМИ
  // ============================================================

  /**
   * Удаляет привычку
   */
  remove(habitId) {
    const habits = this.getAll();
    const filtered = habits.filter(h => h.id !== habitId);
    if (filtered.length === habits.length) return false;
    localStorage.setItem(this._key(), JSON.stringify(filtered));
    return true;
  },

  /**
   * Архивирует привычку
   */
  archive(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return false;
    h.archived = true;
    h.archivedAt = Date.now();
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return true;
  },

  /**
   * Восстанавливает привычку из архива
   */
  unarchive(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return false;
    h.archived = false;
    delete h.archivedAt;
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return true;
  },

  /**
   * Редактирует привычку
   */
  update(habitId, updates) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return false;
    Object.assign(h, updates);
    h.updated = Date.now();
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return true;
  },

  // ============================================================
  // 4. СТАТИСТИКА
  // ============================================================

  /**
   * Получает статистику по привычке
   */
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
      daysSinceStart,
      created: h.created,
      archived: h.archived
    };
  },

  /**
   * Получает общую статистику по всем привычкам
   */
  getGlobalStats() {
    const habits = this.getActive();
    let totalStreak = 0;
    let totalBestStreak = 0;
    let completedToday = 0;
    const today = new Date().toDateString();

    for (const h of habits) {
      totalStreak += h.streak || 0;
      totalBestStreak += h.bestStreak || 0;
      if (h.history.includes(today)) completedToday++;
    }

    return {
      totalHabits: habits.length,
      totalStreak: totalStreak,
      totalBestStreak: totalBestStreak,
      completedToday: completedToday,
      avgStreak: habits.length > 0 ? Math.round(totalStreak / habits.length) : 0,
      avgBestStreak: habits.length > 0 ? Math.round(totalBestStreak / habits.length) : 0
    };
  },

  /**
   * Получает данные для графика (последние N дней)
   */
  getChartData(habitId, days = 30) {
    const h = this.get(habitId);
    if (!h) return [];

    const data = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const ds = d.toDateString();
      data.push({
        date: ds,
        day: d.getDate(),
        month: d.toLocaleDateString('ru-RU', { month: 'short' }),
        done: h.history.includes(ds),
        weekday: d.toLocaleDateString('ru-RU', { weekday: 'short' })
      });
    }
    return data;
  },

  // ============================================================
  // 5. МОТИВАЦИЯ
  // ============================================================

  /**
   * Получает мотивационную фразу
   */
  getMotivation(habitId) {
    const h = this.get(habitId);
    if (!h) return '';
    const streak = h.streak || 0;
    
    const t = typeof window.t === 'function' ? window.t : key => key;
    
    if (streak === 0) return t('motivation_start') || '💪 Начни сегодня — это главный шаг!';
    if (streak < 7) return (t('motivation_week') || '🔥 Ты уже держишься {days} дней! Продолжай!').replace('{days}', streak);
    if (streak < 21) return (t('motivation_month') || '🌟 {days} дней! Ты сильнее, чем думаешь!').replace('{days}', streak);
    if (streak < 66) return (t('motivation_almost') || '🚀 {days} дней до привычки! Ты почти у цели!').replace('{days}', streak);
    if (streak < 100) return '🏆 ' + streak + ' дней! Ты — легенда!';
    return t('motivation_done') || '🎉 Привычка сформирована! Ты — новый человек!';
  },

  // ============================================================
  // 6. РЕНДЕРИНГ
  // ============================================================

  /**
   * Рендерит календарь привычки
   */
  renderCalendar(habitId, containerId, days = 30) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const h = this.get(habitId);
    if (!h) {
      container.innerHTML = '<p style="color:var(--text3);">Нет данных</p>';
      return;
    }

    const isDoneToday = h.history.includes(new Date().toDateString());
    const stats = this.getStats(habitId);

    let html = `<div class="habit-tracker-header">
      <span class="habit-name">${h.name}</span>
      <span class="habit-streak">🔥 ${h.streak || 0} дней</span>
      ${isDoneToday ? '<span class="habit-done-today">✅</span>' : ''}
      ${stats ? `<span class="habit-rate">📊 ${stats.successRate}%</span>` : ''}
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
      html += `<div class="habit-day ${cls}" title="${d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}"></div>`;
    }
    html += '</div>';

    const motivation = this.getMotivation(habitId);
    if (motivation) {
      html += `<div class="habit-motivation">${motivation}</div>`;
    }

    container.innerHTML = html;
  },

  /**
   * Рендерит список всех привычек
   */
  renderList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const habits = this.getActive();
    if (habits.length === 0) {
      container.innerHTML = '<p style="color:var(--text3); text-align:center; padding:20px;">Нет активных привычек</p>';
      return;
    }

    let html = '';
    const today = new Date().toDateString();
    
    for (const h of habits) {
      const isDoneToday = h.history.includes(today);
      const stats = this.getStats(h.id);
      html += `<div class="habit-item" data-id="${h.id}">
        <div class="habit-item-header">
          <span class="habit-item-name">${h.name}</span>
          <span class="habit-item-streak">🔥 ${h.streak || 0}</span>
          <button class="habit-item-check" onclick="window.HabitTracker.checkIn('${h.id}')">
            ${isDoneToday ? '✅' : '⬜'}
          </button>
        </div>
        ${h.identity ? `<div class="habit-item-identity">🧠 ${h.identity}</div>` : ''}
        ${stats ? `<div class="habit-item-stats">📊 ${stats.successRate}% · 🏆 ${stats.bestStreak}</div>` : ''}
      </div>`;
    }

    container.innerHTML = html;
  },

  // ============================================================
  // 7. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
  // ============================================================

  /**
   * Обновляет ежедневный прогресс
   */
  _updateDailyProgress() {
    const today = new Date().toDateString();
    const habits = this.getActive();
    let completed = 0;
    let total = habits.length;

    for (const h of habits) {
      if (h.history.includes(today)) completed++;
    }

    localStorage.setItem('compass_daily_habits_' + today, JSON.stringify({
      completed,
      total,
      date: today
    }));
  },

  /**
   * Получает ежедневный прогресс
   */
  getDailyProgress(dateStr) {
    const key = 'compass_daily_habits_' + dateStr;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  },

  /**
   * Сбрасывает серию привычки
   */
  resetStreak(habitId) {
    const habits = this.getAll();
    const h = habits.find(x => x.id === habitId);
    if (!h) return false;
    h.streak = 0;
    localStorage.setItem(this._key(), JSON.stringify(habits));
    return true;
  },

  // ============================================================
  // 8. ИМПОРТ/ЭКСПОРТ
  // ============================================================

  /**
   * Экспортирует привычки в JSON
   */
  exportData() {
    return JSON.stringify(this.getAll(), null, 2);
  },

  /**
   * Импортирует привычки из JSON
   */
  importData(json) {
    try {
      const data = JSON.parse(json);
      if (!Array.isArray(data)) throw new Error('Не массив');
      localStorage.setItem(this._key(), JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('[Tracker] ❌ Ошибка импорта:', e);
      return false;
    }
  },

  // ============================================================
  // 9. СБРОС
  // ============================================================

  /**
   * Сбрасывает все данные
   */
  resetAll() {
    localStorage.removeItem(this._key());
    localStorage.removeItem(this._archiveKey());
    console.log('[Tracker] 🧹 Все привычки сброшены');
  }
};

// ===== ЭКСПОРТ =====
window.HabitTracker = HabitTracker;

console.log('✅ Tracker v3.0 загружен (CRUD + motivation + calendar + stats + export/import)');
console.log(`📊 Всего привычек: ${HabitTracker.getAll().length}`);
console.log(`📊 Активных: ${HabitTracker.getActive().length}`);
