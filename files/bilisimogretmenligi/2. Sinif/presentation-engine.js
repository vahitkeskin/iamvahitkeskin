/**
 * 2. Sınıf Bilişim Teknolojileri ve Yazılım - Sunum Motoru (Engine)
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
        case 'PageDown':
        case ' ': // Space
          e.preventDefault();
          this.nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides - 1);
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
          if (e.ctrlKey || e.metaKey) return;
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
      }
    });

    // Buton Olayları
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }
    if (this.overviewBtn) {
      this.overviewBtn.addEventListener('click', () => this.toggleOverview());
    }
    if (this.closeOverviewBtn) {
      this.closeOverviewBtn.addEventListener('click', () => this.toggleOverview());
    }
    if (this.fullscreenBtn) {
      this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }
    if (this.printBtn) {
      this.printBtn.addEventListener('click', () => window.print());
    }
    if (this.themeBtn) {
      this.themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.ThemeManager) {
          window.ThemeManager.cycleTheme();
        }
      });
    }

    // Dokunmatik Ekran / Akıllı Tahta Kaydırma (Swipe) Desteği
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    }, { passive: true });

    // İnteraktif Quiz Seçenek Tıklaması
    document.addEventListener('click', (e) => {
      const quizBtn = e.target.closest('.quiz-btn');
      if (quizBtn) {
        const isCorrect = quizBtn.dataset.correct === 'true';
        const parentGrid = quizBtn.closest('.quiz-options-grid');
        const container = quizBtn.closest('.quiz-container');

        // Diğer butonların durumlarını sıfırla
        parentGrid.querySelectorAll('.quiz-btn').forEach(btn => {
          btn.classList.remove('correct', 'wrong');
        });

        if (isCorrect) {
          quizBtn.classList.add('correct');
        } else {
          quizBtn.classList.add('wrong');
          const correctBtn = parentGrid.querySelector('[data-correct="true"]');
          if (correctBtn) correctBtn.classList.add('correct');
        }

        // Açıklamayı göster
        if (container) {
          const exp = container.querySelector('.quiz-explanation');
          if (exp) exp.classList.add('show');
        }
      }
    });
  }

  handleSwipe(startX, endX) {
    const threshold = 50;
    if (endX < startX - threshold) {
      this.nextSlide();
    } else if (endX > startX + threshold) {
      this.prevSlide();
    }
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;

    this.slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'prev');
      if (idx === index) {
        slide.classList.add('active');
      } else if (idx < index) {
        slide.classList.add('prev');
      }
    });

    this.currentIndex = index;
    this.updateHUD();
    this.updateOverviewActive();
  }

  nextSlide() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  updateHUD() {
    if (this.counterEl) {
      this.counterEl.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`;
    }

    if (this.progressBar) {
      const percentage = ((this.currentIndex + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = `${percentage}%`;
    }

    if (this.prevBtn) {
      this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.4' : '1';
      this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
    }

    if (this.nextBtn) {
      if (this.currentIndex === this.totalSlides - 1) {
        this.nextBtn.textContent = 'Başa Dön ↺';
        this.nextBtn.onclick = () => this.goToSlide(0);
      } else {
        this.nextBtn.textContent = 'Sonraki ▶';
        this.nextBtn.onclick = () => this.nextSlide();
      }
    }
  }

  buildOverviewThumbnails() {
    if (!this.overviewGrid) return;
    this.overviewGrid.innerHTML = '';

    this.slides.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `overview-thumb ${idx === this.currentIndex ? 'active' : ''}`;
      
      let title = `Slayt ${idx + 1}`;
      const headerTitle = slide.querySelector('.slide-title, .cover-title');
      if (headerTitle) {
        title = headerTitle.textContent.trim();
      }

      thumb.innerHTML = `
        <span class="thumb-num">SLAYT 0${idx + 1}</span>
        <div class="thumb-title">${title}</div>
      `;

      thumb.addEventListener('click', () => {
        this.goToSlide(idx);
        this.toggleOverview();
      });

      this.overviewGrid.appendChild(thumb);
    });
  }

  updateOverviewActive() {
    if (!this.overviewGrid) return;
    const thumbs = this.overviewGrid.querySelectorAll('.overview-thumb');
    thumbs.forEach((th, idx) => {
      if (idx === this.currentIndex) {
        th.classList.add('active');
      } else {
        th.classList.remove('active');
      }
    });
  }

  toggleOverview() {
    if (!this.overviewModal) return;
    this.isOverviewOpen = !this.isOverviewOpen;
    this.overviewModal.classList.toggle('active', this.isOverviewOpen);
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
