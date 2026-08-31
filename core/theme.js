// core/theme.js
// ============================================================
// ТЕМА — КОМПАС ПО ЖИЗНИ v2.0
// ============================================================

(function() {
  // ===== ЗАГРУЗКА ТЕМЫ ====
  const saved = localStorage.getItem('compass-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  // ===== ФУНКЦИЯ ЗАГРУЗКИ ТЕМЫ ====
  window.loadTheme = function() {
    const th = localStorage.getItem('compass-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', th);
    updateThemeIcon(th);
  };

  // ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ====
  window.toggleTheme = function() {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('compass-theme', next);
    updateThemeIcon(next);
    
    // Показываем уведомление
    if (typeof showToast === 'function') {
      const label = next === 'dark' ? '🌙 Тёмная тема' : '☀️ Светлая тема';
      showToast(label);
    }
  };

  // ===== ОБНОВЛЕНИЕ ИКОНКИ ====
  function updateThemeIcon(theme) {
    const btn = document.querySelector('.theme-btn, #themeToggle, [data-theme-toggle]');
    if (btn) {
      btn.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  // ===== ПОЛУЧИТЬ ТЕКУЩУЮ ТЕМУ ====
  window.getCurrentTheme = function() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  };

  // ===== СБРОС ТЕМЫ (для тестирования) ====
  window.resetTheme = function() {
    localStorage.removeItem('compass-theme');
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  };

  // ===== CSS ПЕРЕМЕННЫЕ И БАЗОВЫЕ СТИЛИ ====
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
      --water: #0ea5e9;
      --success: #22c55e;
      --danger: #ef4444;
      --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      --radius: 16px;
    }

    /* ===== ПЛАВНЫЙ ПЕРЕХОД ===== */
    * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    /* ===== БАЗОВЫЕ СТИЛИ ===== */
    body {
      background: var(--bg);
      color: var(--text);
      font-family: system-ui, -apple-system, sans-serif;
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
      white-space: nowrap;
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
    }
    .theme-btn:hover {
      border-color: var(--border-hover);
      transform: scale(1.05);
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
    }
    .lang-btn:hover {
      border-color: var(--border-hover);
    }

    /* ===== SCROLLBAR ===== */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--text3); border-radius: 3px; }

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
  `;
  document.head.appendChild(style);

  // ===== ИНИЦИАЛИЗАЦИЯ ====
  // Обновляем иконку при загрузке
  updateThemeIcon(saved);

  console.log('✅ Theme v2.0 загружен');
  console.log(`🎨 Текущая тема: ${saved}`);
})();
