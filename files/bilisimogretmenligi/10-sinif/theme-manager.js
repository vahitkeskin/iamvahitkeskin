/**
 * MEB Maarif Modeli - 10. Sınıf Bilgisayar Bilimi (Kur 2)
 * Tema Yöneticisi (Theme Manager)
 * Sistem (Otomatik), Açık (Light) ve Koyu (Dark) Mod
 * Öğretmen: Vahit Keskin | 2026-2027 Eğitim ve Öğretim Yılı
 */

(function () {
  const STORAGE_KEY = 'meb_theme_mode'; // 'system' | 'light' | 'dark'

  function getSystemPreference() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'light';
    } catch (e) {
      return 'light';
    }
  }

  function resolveTheme(setting) {
    if (setting === 'light' || setting === 'dark') return setting;
    return getSystemPreference();
  }

  function applyTheme(setting, showToast = false) {
    const validSetting = (setting === 'light' || setting === 'dark') ? setting : 'system';
    const resolved = resolveTheme(validSetting);

    const root = document.documentElement;
    root.setAttribute('data-theme', resolved);
    root.setAttribute('data-theme-setting', validSetting);
    if (document.body) {
      document.body.setAttribute('data-theme', resolved);
      document.body.setAttribute('data-theme-setting', validSetting);
    }

    let metaEl = document.querySelector('meta[name="color-scheme"]');
    if (!metaEl) {
      metaEl = document.createElement('meta');
      metaEl.name = 'color-scheme';
      document.head.appendChild(metaEl);
    }
    metaEl.content = validSetting === 'system' ? 'light dark' : validSetting;

    updateUI(validSetting, resolved);

    if (showToast) {
      showThemeToast(validSetting, resolved);
    }
  }

  function setTheme(setting) {
    try {
      localStorage.setItem(STORAGE_KEY, setting);
    } catch (e) {
      console.warn('LocalStorage erişilemedi:', e);
    }
    applyTheme(setting, true);
  }

  function cycleTheme() {
    const current = getSavedTheme();
    let next = 'light';
    if (current === 'light') next = 'dark';
    else if (current === 'dark') next = 'system';
    else if (current === 'system') next = 'light';
    setTheme(next);
  }

  function updateUI(setting, resolved) {
    const pillButtons = document.querySelectorAll('.theme-pill-btn');
    pillButtons.forEach(btn => {
      const val = btn.dataset.themeVal;
      if (val === setting) {
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      }
    });

    const hudButtons = document.querySelectorAll('.btn-theme, #btnThemeToggle');
    hudButtons.forEach(btn => {
      const iconEl = btn.querySelector('.theme-btn-icon');
      const textEl = btn.querySelector('.theme-btn-text');

      if (setting === 'system') {
        if (iconEl) iconEl.textContent = '🖥️';
        if (textEl) textEl.textContent = resolved === 'dark' ? 'Sistem (Kapalı)' : 'Sistem (Açık)';
        btn.title = `Tema: Sistem Modu (Şu an: ${resolved === 'dark' ? 'Kapalı' : 'Açık'}) [Kısayol: T]`;
      } else if (setting === 'light') {
        if (iconEl) iconEl.textContent = '☀️';
        if (textEl) textEl.textContent = 'Açık';
        btn.title = 'Tema: Açık Mod (Varsayılan) [Kısayol: T]';
      } else {
        if (iconEl) iconEl.textContent = '🌙';
        if (textEl) textEl.textContent = 'Kapalı';
        btn.title = 'Tema: Kapalı Mod [Kısayol: T]';
      }
    });
  }

  function showThemeToast(setting, resolved) {
    let toast = document.getElementById('theme-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'theme-toast';
      toast.className = 'theme-toast';
      document.body.appendChild(toast);
    }

    let msg = '';
    if (setting === 'system') {
      msg = `🖥️ Sistem Modu (${resolved === 'dark' ? 'Kapalı' : 'Açık'}) Aktif`;
    } else if (setting === 'light') {
      msg = '☀️ Açık Mod Aktif';
    } else {
      msg = '🌙 Kapalı Mod Aktif';
    }

    toast.innerHTML = `<span class="toast-dot"></span><span>${msg}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 1800);
  }

  const initialSetting = getSavedTheme();
  applyTheme(initialSetting, false);

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (getSavedTheme() === 'system') {
        applyTheme('system', false);
      }
    });
  }

  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      applyTheme(e.newValue || 'light', false);
    }
  });

  window.ThemeManager = {
    getSetting: getSavedTheme,
    getResolved: () => resolveTheme(getSavedTheme()),
    setTheme: setTheme,
    cycleTheme: cycleTheme,
    apply: applyTheme,
    update: () => updateUI(getSavedTheme(), resolveTheme(getSavedTheme()))
  };
})();

// ══════════════════════════════════════════════════════════════════
// BROWSER TAB ICON & TITLE ENHANCER (SEKME İKONU & BAŞLIK GARANTİSİ)
// ══════════════════════════════════════════════════════════════════
(function initTabIconAndTitle() {
  const GRADE_ICONS = {
    1: '🎒', 2: '💻', 3: '🧩', 4: '🚀', 5: '🛡️',
    6: '⚙️', 7: '📐', 8: '🤖', 9: '🐍', 10: '🧠'
  };

  function detectGradeIcon() {
    const path = (window.location && window.location.pathname) ? window.location.pathname : '';
    const href = (window.location && window.location.href) ? window.location.href : '';
    const text = (document && document.title) ? document.title : '';

    const match = (path + ' ' + href).match(/(\d+)-sinif/i);
    if (match && GRADE_ICONS[match[1]]) {
      return GRADE_ICONS[match[1]];
    }

    const titleMatch = text.match(/(\d+)\.\s*Sınıf/i);
    if (titleMatch && GRADE_ICONS[titleMatch[1]]) {
      return GRADE_ICONS[titleMatch[1]];
    }

    if (href.endsWith('bilisimogretmenligi/') || href.endsWith('bilisimogretmenligi/index.html') || href.endsWith('/index.html') || text.includes('Portalı')) {
      return '🎓';
    }

    return null;
  }

  function applyTabIcon() {
    if (typeof document === 'undefined') return;
    const icon = detectGradeIcon();
    if (!icon) return;

    if (document.title) {
      document.title = document.title.replace(/^[^a-zA-Z0-9çÇğĞıİöÖşŞüÜ\s]+/, "").trim();
    }

    if (document.head) {
      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.type = 'image/svg+xml';
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      const svgDataUri = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${icon}</text></svg>`;
      if (link.getAttribute('href') !== svgDataUri) {
        link.setAttribute('href', svgDataUri);
      }
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyTabIcon);
    } else {
      applyTabIcon();
    }
  }
})();
