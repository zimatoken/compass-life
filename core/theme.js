(function(){
  const saved = localStorage.getItem('compass-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  window.loadTheme = function() {
    const th = localStorage.getItem('compass-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', th);
  };
  window.toggleTheme = function() {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('compass-theme', next);
  };
  const style = document.createElement('style');
  style.textContent = `
    :root[data-theme="dark"] {
      --bg:#0c1220; --card:#1e293b; --border:#334155;
      --text:#f1f5f9; --text2:#94a3b8; --text3:#64748b;
      --accent:#f59e0b; --accent2:#d97706; --water:#38bdf8;
      --success:#22c55e; --danger:#ef4444;
    }
    :root[data-theme="light"] {
      --bg:#f8fafc; --card:#ffffff; --border:#e2e8f0;
      --text:#0f172a; --text2:#475569; --text3:#94a3b8;
      --accent:#f59e0b; --accent2:#d97706; --water:#0ea5e9;
      --success:#22c55e; --danger:#ef4444;
    }
    body { background:var(--bg); color:var(--text); font-family:system-ui,-apple-system,sans-serif; margin:0; }
    .app { max-width:480px; margin:0 auto; min-height:100vh; }
    .screen { display:none; padding-bottom:40px; }
    .screen.active { display:block; }
    .btn-primary { background:linear-gradient(135deg,var(--accent),var(--accent2)); color:#fff; border:none; padding:14px 24px; border-radius:12px; font-size:15px; font-weight:600; cursor:pointer; width:100%; }
    .toast { position:fixed; bottom:24px; left:50%; transform:translateX(-50%) translateY(100px); background:var(--card); color:var(--text); padding:12px 20px; border-radius:12px; border:1px solid var(--border); opacity:0; transition:all .3s; z-index:1000; pointer-events:none; }
    .toast.show { opacity:1; transform:translateX(-50%) translateY(0); }
  `;
  document.head.appendChild(style);
  console.log('✅ Theme загружен');
})();
