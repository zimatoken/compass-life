// core/theme.js
// ============================================================
// ТЕМА — КОМПАС ПО ЖИЗНИ v3.0
// ============================================================
// Что нового:
// • Поддержка системной темы (prefers-color-scheme)
// • Улучшенное переключение с анимацией
// • Сохранение выбора пользователя
// • Поддержка data-theme на html
// • Автоматическое обновление иконок
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // 1. КОНСТАНТЫ
  // ============================================================

  const STORAGE_KEY = 'compass-theme';
  const DEFAULT_THEME = 'dark';
  const THEME_ICONS = {
    dark: '🌙',
    light: '☀️',
    system: '🖥️'
  };
  const THEME_LABELS = {
    dark: 'Тёмная',
    light: 'Светлая',
    system: 'Системная'
  };
  const THEME_LABELS_EN = {
    dark: 'Dark',
    light: 'Light',
    system: 'System'
  };

  // ============================================================
  // 2. ОСНОВНЫЕ ФУНКЦИИ
  // ============================================================

  /**
   * Определяет, должна ли быть тёмная тема
   */
  function shouldUseDark(theme) {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme === 'dark';
  }

  /**
   * Применяет тему к документу
   */
  function applyTheme(theme) {
    const isDark = shouldUseDark(theme);
    const actualTheme = isDark ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', actualTheme);
    document.documentElement.setAttribute('data-theme-preference', theme);
    
    // Обновляем мета-тег для iOS Safari
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || (isDark ? '#0c1220' : '#f1f5f9');
      meta.content = bg;
    }
    
    updateThemeIcon(theme);
    return actualTheme;
  }

  /**
   * Загружает сохранённую тему
   */
  function loadTheme() {
    let theme = localStorage.getItem(STORAGE_KEY);
    
    // Если тема не сохранена — используем системную
    if (!theme) {
      theme = 'system';
      localStorage.setItem(STORAGE_KEY, theme);
    }
    
    return applyTheme(theme);
  }

  /**
   * Переключает тему
   */
  function toggleTheme() {
    const cur = localStorage.getItem(STORAGE_KEY) || 'system';
    
    // Цикл: system → dark → light → system
    let next;
    if (cur === 'system') next = 'dark';
    else if (cur === 'dark') next = 'light';
    else if (cur === 'light') next = 'system';
    else next = 'system';
    
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    
    // Показываем уведомление
    if (typeof showToast === 'function') {
      const lang = window.currentLang || 'ru';
      const labels = lang === 'en' ? THEME_LABELS_EN : THEME_LABELS;
      const icon = THEME_ICONS[next] || '🎨';
      showToast(`${icon} ${labels[next] || next} ${lang === 'en' ? 'theme' : 'тема'}`);
    }
    
    return next;
  }

  /**
   * Устанавливает конкретную тему
   */
  function setTheme(theme) {
    if (!['dark', 'light', 'system'].includes(theme)) {
      console.warn('[Theme] ❌ Неизвестная тема:', theme);
      return;
    }
    localStorage.setItem(STORAGE_KEY, theme);
    return applyTheme(theme);
  }

  /**
   * Получает текущую тему (предпочтение пользователя)
   */
  function getCurrentTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'system';
  }

  /**
   * Получает фактическую тему (dark/light)
   */
  function getActualTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  /**
   * Сбрасывает тему на системную
   */
  function resetTheme() {
    localStorage.removeItem(STORAGE_KEY);
    return applyTheme('system');
  }

  // ============================================================
  // 3. ОБНОВЛЕНИЕ ИКОНКИ
  // ============================================================

  function updateThemeIcon(theme) {
    const icon = THEME_ICONS[theme] || '🎨';
    
    // Обновляем все кнопки темы
    document.querySelectorAll('.theme-btn, [data-theme-toggle]').forEach(btn => {
      btn.textContent = icon;
      btn.setAttribute('aria-label', `Theme: ${theme}`);
    });
    
    // Обновляем кнопку с текстом
    document.querySelectorAll('.theme-btn-with-label').forEach(btn => {
      const lang = window.currentLang || 'ru';
      const labels = lang === 'en' ? THEME_LABELS_EN : THEME_LABELS;
      btn.innerHTML = `${icon} ${labels[theme] || theme}`;
    });
  }

  // ============================================================
  // 4. СЛУШАТЕЛИ СОБЫТИЙ
  // ============================================================

  /**
   * Слушает изменение системной темы
   */
  function watchSystemTheme() {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    
    media.addEventListener('change', (e) => {
      const preference = localStorage.getItem(STORAGE_KEY) || 'system';
      if (preference === 'system') {
        const isDark = e.matches;
        const actualTheme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', actualTheme);
        updateThemeIcon('system');
      }
    });
  }

  // ============================================================
  // 5. ИНИЦИАЛИЗАЦИЯ
  // ============================================================

  function initTheme() {
    // Загружаем тему
    const actualTheme = loadTheme();
    
    // Обновляем иконку
    const preference = localStorage.getItem(STORAGE_KEY) || 'system';
    updateThemeIcon(preference);
    
    // Слушаем системную тему
    watchSystemTheme();
    
    // Инициализируем кнопки
    document.querySelectorAll('.theme-btn, [data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });
    
    console.log('✅ Theme v3.0 загружен');
    console.log(`🎨 Предпочтение: ${preference}`);
    console.log(`🎨 Фактическая: ${actualTheme}`);
  }

  // ============================================================
  // 6. СТИЛИ ТЕМЫ (внедряются динамически)
  // ============================================================

  function injectThemeStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* ===== ПЕРЕМЕННЫЕ ТЕМЫ ===== */
      :root[data-theme="dark"] {
        --bg: #0c1220;
        --bg2: #111927;
        --card: #1e293b;
        --card-hover: #243447;
        --border: #334155;
        --border-hover: #475569;
        --text: #f1f5f9;
        --text2: #94a3b8;
        --text3: #64748b;
        --accent: #f59e0b;
        --accent2: #d97706;
        --accent3: #b45309;
        --water: #38bdf8;
        --success: #22c55e;
        --danger: #ef4444;
        --shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        --radius: 16px;
      }

      :root[data-theme="light"] {
        --bg: #f1f5f9;
        --bg2: #e2e8f0;
        --card: #ffffff;
        --card-hover: #f8fafc;
        --border: #e2e8f0;
        --border-hover: #cbd5e1;
        --text: #0f172a;
        --text2: #475569;
        --text3: #94a3b8;
        --accent: #f59e0b;
        --accent2: #d97706;
        --accent3: #b45309;
        --water: #0ea5e9;
        --success: #22c55e;
        --danger: #ef4444;
        --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        --radius: 16px;
      }

      /* ===== ПЛАВНЫЙ ПЕРЕХОД ===== */
      * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
      }

      /* ===== БАЗОВЫЕ СТИЛИ ===== */
      body {
        background: var(--bg);
        color: var(--text);
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        margin: 0;
        min-height: 100vh;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .app {
        max-width: 480px;
        margin: 0 auto;
        padding: 16px;
        min-height: 100vh;
        position: relative;
      }

      .screen {
        display: none;
        animation: fadeIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .screen.active {
        display: block;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* ===== КНОПКИ ===== */
      .btn-primary {
        background: linear-gradient(135deg, var(--accent), var(--accent2));
        color: #fff;
        border: none;
        padding: 14px 24px;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        transition: all 0.2s ease;
      }
      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
      }
      .btn-primary:active {
        transform: scale(0.98);
      }

      /* ===== TOAST ===== */
      .toast {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--card);
        color: var(--text);
        padding: 14px 24px;
        border-radius: 12px;
        border: 1px solid var(--border);
        box-shadow: var(--shadow);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 9999;
        pointer-events: none;
        font-size: 14px;
        font-weight: 500;
        max-width: 90%;
        text-align: center;
      }
      .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
        pointer-events: auto;
      }

      /* ===== ТЕМА-КНОПКА ===== */
      .theme-btn {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text);
        line-height: 1;
        min-width: 40px;
        text-align: center;
      }
      .theme-btn:hover {
        border-color: var(--border-hover);
        transform: scale(1.05);
      }
      .theme-btn:active {
        transform: scale(0.95);
      }

      /* ===== ЯЗЫКОВЫЕ КНОПКИ ===== */
      .lang-btn {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: 8px;
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text);
      }
      .lang-btn.active {
        border-color: var(--accent);
        background: rgba(245, 158, 11, 0.1);
        color: var(--accent);
      }
      .lang-btn:hover {
        border-color: var(--border-hover);
      }

      /* ===== SCROLLBAR ===== */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: var(--bg); }
      ::-webkit-scrollbar-thumb { background: var(--text3); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: var(--text2); }

      /* ===== ДОПОЛНИТЕЛЬНО ДЛЯ МОДУЛЕЙ ===== */
      .module-header {
        text-align: center;
        padding: 16px 0;
      }
      .module-header .module-icon {
        font-size: 40px;
      }
      .module-header h1 {
        margin: 4px 0;
        font-size: 24px;
        font-weight: 700;
      }
      .module-header .module-subtitle {
        color: var(--text2);
        font-size: 14px;
        margin: 0;
      }

      /* ===== КАРТОЧКИ КАТЕГОРИЙ ===== */
      .cat-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        padding: 0 0 16px;
      }

      /* ===== ВЫБОР ТЕМЫ В ПОПАПЕ ===== */
      .theme-selector {
        display: flex;
        gap: 8px;
        justify-content: center;
        flex-wrap: wrap;
        padding: 8px 0;
      }
      .theme-option {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: 10px;
        padding: 8px 16px;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text);
        font-weight: 500;
      }
      .theme-option:hover {
        border-color: var(--border-hover);
        transform: translateY(-1px);
      }
      .theme-option.active {
        border-color: var(--accent);
        background: rgba(245, 158, 11, 0.1);
        color: var(--accent);
      }
      .theme-option .theme-icon {
        margin-right: 6px;
      }

      /* ===== ТЕМНАЯ/СВЕТЛАЯ АДАПТАЦИЯ ДЛЯ SVGs ===== */
      [data-theme="dark"] .logo-dark { display: none; }
      [data-theme="light"] .logo-light { display: none; }
    `;
    document.head.appendChild(style);
  }

  // ============================================================
  // 7. ЭКСПОРТ
  // ============================================================

  window.toggleTheme = toggleTheme;
  window.setTheme = setTheme;
  window.loadTheme = loadTheme;
  window.getCurrentTheme = getCurrentTheme;
  window.getActualTheme = getActualTheme;
  window.resetTheme = resetTheme;
  window.applyTheme = applyTheme;

  // ============================================================
  // 8. ЗАПУСК
  // ============================================================

  // Внедряем стили
  injectThemeStyles();

  // Инициализация при загрузке DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  console.log('✅ Theme v3.0 загружен');
  console.log(`🎨 Доступные функции: toggleTheme, setTheme, getCurrentTheme, getActualTheme, resetTheme`);
})();
