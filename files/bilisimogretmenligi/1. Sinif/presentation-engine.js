/**
 * 1. Sınıf Serbest Etkinlikler - Sunum Motoru (Engine)
 * Fatih Akıllı Tahta & Dokunmatik Ekran Desteği
 * Öğretmen: Vahit Keskin
 */

// Global Tema Yöneticisi (Eğer henüz yüklenmediyse güvenli fallback)
(function initThemeManagerFallback() {
  if (window.ThemeManager) return;

  const STORAGE_KEY = 'meb_theme_mode';

  function getSystemPreference() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'system';
    } catch (e) {
      return 'system';
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
    let next = 'system';
    if (current === 'system') next = 'light';
    else if (current === 'light') next = 'dark';
    else if (current === 'dark') next = 'system';
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
        if (textEl) textEl.textContent = resolved === 'dark' ? 'Sistem (Koyu)' : 'Sistem (Açık)';
        btn.title = `Tema: Sistem Modu (Şu an: ${resolved === 'dark' ? 'Koyu' : 'Açık'}) [Kısayol: T]`;
      } else if (setting === 'light') {
        if (iconEl) iconEl.textContent = '☀️';
        if (textEl) textEl.textContent = 'Açık';
        btn.title = 'Tema: Açık Mod [Kısayol: T]';
      } else {
        if (iconEl) iconEl.textContent = '🌙';
        if (textEl) textEl.textContent = 'Koyu';
        btn.title = 'Tema: Koyu Mod [Kısayol: T]';
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
      msg = `🖥️ Sistem Modu (${resolved === 'dark' ? 'Koyu' : 'Açık'}) Aktif`;
    } else if (setting === 'light') {
      msg = '☀️ Açık Mod Aktif';
    } else {
      msg = '🌙 Koyu Mod Aktif';
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
      applyTheme(e.newValue || 'system', false);
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

class PresentationDeck {
  constructor() {
    this.slides = [];
    this.currentIndex = 0;
    this.totalSlides = 0;
    this.isOverviewOpen = false;

    this.init();
  }

  init() {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.totalSlides = this.slides.length;

    if (this.totalSlides === 0) return;

    this.progressBar = document.querySelector('.hud-progress-bar');
    this.counterEl = document.querySelector('.hud-slide-count');
    this.prevBtn = document.querySelector('.btn-prev');
    this.nextBtn = document.querySelector('.btn-next');
    this.overviewModal = document.querySelector('.overview-modal');
    this.overviewGrid = document.querySelector('.overview-grid');
    this.overviewBtn = document.querySelector('.btn-overview');
    this.closeOverviewBtn = document.querySelector('.btn-close-overview');
    this.fullscreenBtn = document.querySelector('.btn-fullscreen');
    this.printBtn = document.querySelector('.btn-print');
    this.themeBtn = document.getElementById('btnThemeToggle');

    this.bindEvents();
    this.buildOverviewThumbnails();
    this.goToSlide(0);

    if (window.ThemeManager) {
      window.ThemeManager.update();
    }

    // Otomatik yazdırma URL kontrolü
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('print') === 'true') {
      setTimeout(() => window.print(), 800);
    }
  }

  bindEvents() {
    // Klavye Kısayolları
    document.addEventListener('keydown', (e) => {
      if (this.isOverviewOpen && e.key === 'Escape') {
        this.toggleOverview();
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          this.next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault();
          this.prev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          this.toggleFullscreen();
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          this.toggleOverview();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          window.print();
          break;
        case 't':
        case 'T':
          e.preventDefault();
          if (window.ThemeManager) {
            window.ThemeManager.cycleTheme();
          }
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides - 1);
          break;
      }
    });

    // Buton Tıklamaları
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.fullscreenBtn) this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    if (this.overviewBtn) this.overviewBtn.addEventListener('click', () => this.toggleOverview());
    if (this.closeOverviewBtn) this.closeOverviewBtn.addEventListener('click', () => this.toggleOverview());
    if (this.printBtn) this.printBtn.addEventListener('click', () => window.print());
    if (this.themeBtn) {
      this.themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.ThemeManager) {
          window.ThemeManager.cycleTheme();
        }
      });
    }

    // Dokunmatik Ekran (Swipe) Desteği
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const diffX = e.changedTouches[0].screenX - touchStartX;
      const diffY = e.changedTouches[0].screenY - touchStartY;

      // Yatay kaydırma dikeyden büyükse ve 50px'i aştıysa
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX < 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;

    this.slides.forEach((s, idx) => {
      if (idx === index) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    this.currentIndex = index;
    this.updateHUD();
  }

  next() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  updateHUD() {
    if (this.counterEl) {
      this.counterEl.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`;
    }

    if (this.progressBar) {
      const pct = ((this.currentIndex + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = `${pct}%`;
    }

    if (this.prevBtn) {
      this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.4' : '1';
      this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
    }

    if (this.nextBtn) {
      this.nextBtn.style.opacity = this.currentIndex === this.totalSlides - 1 ? '0.4' : '1';
      this.nextBtn.style.pointerEvents = this.currentIndex === this.totalSlides - 1 ? 'none' : 'auto';
    }

    // Modal küçük resimlerini güncelle
    if (this.overviewGrid) {
      const thumbs = this.overviewGrid.querySelectorAll('.overview-thumb');
      thumbs.forEach((t, i) => {
        if (i === this.currentIndex) {
          t.classList.add('current');
        } else {
          t.classList.remove('current');
        }
      });
    }
  }

  toggleOverview() {
    if (!this.overviewModal) return;
    this.isOverviewOpen = !this.isOverviewOpen;

    if (this.isOverviewOpen) {
      this.overviewModal.classList.add('open');
    } else {
      this.overviewModal.classList.remove('open');
    }
  }

  buildOverviewThumbnails() {
    if (!this.overviewGrid) return;
    this.overviewGrid.innerHTML = '';

    this.slides.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `overview-thumb ${idx === this.currentIndex ? 'current' : ''}`;

      let title = `Slayt ${idx + 1}`;
      const titleEl = slide.querySelector('.slide-title, .cover-title');
      if (titleEl) {
        title = titleEl.textContent.trim();
      }

      thumb.innerHTML = `
        <span class="badge" style="background: rgba(255,255,255,0.1); color: #fff; width: fit-content;">Slayt ${idx + 1}</span>
        <span class="overview-thumb-title">${title}</span>
      `;

      thumb.addEventListener('click', () => {
        this.goToSlide(idx);
        this.toggleOverview();
      });

      this.overviewGrid.appendChild(thumb);
    });
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

// Sayfa yüklendiğinde başlat
window.addEventListener('DOMContentLoaded', () => {
  window.deck = new PresentationDeck();
});
