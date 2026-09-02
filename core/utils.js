// core/utils.js
// ============================================================
// Единый файл утилит для всех страниц проекта
// ============================================================
// Вынесены дублирующиеся функции из модулей для централизации
// и упрощения поддержки кода.
// ============================================================

// ============================================================
// КОНФИГУРАЦИЯ МОДУЛЕЙ
// ============================================================
const moduleCategories = {
  purpose: ['passion', 'skills', 'mission', 'calling'],
  happiness: ['blockers', 'energy_audit', 'gratitude', 'joy'],
  habits: ['identity', 'environment', 'tracker', 'system'],
  money: ['os', 'audit', 'investments', 'debts'],
  responsibility: ['commitments', 'planning', 'discipline', 'delegation'],
  health: ['sleep', 'nutrition', 'movement', 'stress'],
  learning: ['reading', 'techniques', 'memory', 'speedreading'],
  creativity: ['channel', 'fear', 'blocks', 'inspiration'],
  relationships: ['conflicts', 'family', 'friendship', 'boundaries']
};

// ============================================================
// ОБНОВЛЕНИЕ ПЕРЕВОДОВ
// ============================================================
function updateTranslations() {
  const lang = window.currentLang || 'ru';
  const texts = typeof LOCALES !== 'undefined' ? (LOCALES[lang] || LOCALES.ru) : {};
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (texts[key] !== undefined && texts[key] !== null) {
      el.textContent = texts[key];
    }
  });
}

// ============================================================
// ОБНОВЛЕНИЕ МЕТА-ТЕГА ТЕМЫ
// ============================================================
function updateThemeColor() {
  const meta = document.getElementById('themeColorMeta');
  if (!meta) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  meta.content = isDark ? '#0c1220' : '#f1f5f9';
}

// ============================================================
// ОТРИСОВКА ПРОГРЕССА МОДУЛЯ
// ============================================================
function renderModuleProgress(moduleName) {
  const container = document.getElementById('moduleProgress');
  if (!container) return;

  const cats = moduleCategories[moduleName] || [];
  const done = cats.filter(c => localStorage.getItem('compass_' + moduleName + '_' + c + '_completed') === 'true').length;
  const pct = cats.length ? Math.round((done / cats.length) * 100) : 0;
  
  container.innerHTML = `
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="progress-text">${typeof t === 'function' ? t('progress_modules') : '📊 Прогресс'}: ${done}/${cats.length}</div>
  `;
}

// ============================================================
// ЭКСПОРТ В ГЛОБАЛЬНУЮ ОБЛАСТЬ ВИДИМОСТИ
// ============================================================
window.moduleCategories = moduleCategories;
window.updateTranslations = updateTranslations;
window.updateThemeColor = updateThemeColor;
window.renderModuleProgress = renderModuleProgress;
