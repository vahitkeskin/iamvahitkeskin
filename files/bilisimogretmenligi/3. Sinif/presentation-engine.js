/**
 * 3. Sınıf Bilişim Teknolojileri ve Yazılım - Sunum Motoru (Engine)
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

    // Otomatik yazdırma URL kontrolü (?print=true)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('print') === 'true') {
      setTimeout(() => window.print(), 800);
    }
  }

  bindEvents() {
    // Klavye Kısayolları
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

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

    // Buton Dinleyicileri
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
    if (this.overviewBtn) this.overviewBtn.addEventListener('click', () => this.toggleOverview());
    if (this.closeOverviewBtn) this.closeOverviewBtn.addEventListener('click', () => this.toggleOverview());
    if (this.fullscreenBtn) this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    if (this.printBtn) this.printBtn.addEventListener('click', () => window.print());
    if (this.themeBtn) {
      this.themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.ThemeManager) {
          window.ThemeManager.cycleTheme();
        }
      });
    }

    // Dokunmatik Ekran (Fatih Tahta Swipe) Desteği
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      this.handleSwipe(touchStartX, touchStartY, touchEndX, touchEndY);
    }, { passive: true });

    // İnteraktif Quiz Seçenek Tıklamaları
    document.addEventListener('click', (e) => {
      const quizBtn = e.target.closest('.quiz-btn');
      if (!quizBtn) return;

      const parent = quizBtn.closest('.quiz-container');
      if (!parent) return;

      const allBtns = parent.querySelectorAll('.quiz-btn');
      const feedback = parent.querySelector('.quiz-feedback');
      const isCorrect = quizBtn.dataset.correct === 'true';

      allBtns.forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') {
          b.classList.add('correct');
        }
      });

      if (!isCorrect) {
        quizBtn.classList.add('wrong');
        if (feedback) {
          feedback.style.background = 'rgba(244, 63, 94, 0.2)';
          feedback.style.color = '#fecdd3';
          feedback.style.border = '1px solid #f43f5e';
          feedback.innerHTML = `❌ <strong>Tekrar Düşünelim:</strong> Bir sonraki denemende doğru cevabı bulacağına inanıyorum! Doğru seçenek yeşil renkle işaretlendi.`;
          feedback.classList.add('active');
        }
      } else {
        if (feedback) {
          feedback.style.background = 'rgba(16, 185, 129, 0.2)';
          feedback.style.color = '#a7f3d0';
          feedback.style.border = '1px solid #10b981';
          feedback.innerHTML = feedback.dataset.explanation || `🎉 <strong>Harika, Tebrikler!</strong> Doğru cevabı verdin, tam bir bilişim ustasısın!`;
          feedback.classList.add('active');
        }
      }
    });
  }

  handleSwipe(startX, startY, endX, endY) {
    const diffX = endX - startX;
    const diffY = endY - startY;
    const threshold = 50;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold) {
      if (diffX < 0) {
        this.nextSlide(); // Sağa kaydırma -> Sonraki
      } else {
        this.prevSlide(); // Sola kaydırma -> Önceki
      }
    }
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;

    this.slides.forEach((s, idx) => {
      s.classList.remove('active', 'prev');
      if (idx === index) {
        s.classList.add('active');
      } else if (idx < index) {
        s.classList.add('prev');
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
      const pct = ((this.currentIndex + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = `${pct}%`;
    }

    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
      this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.4' : '1';
    }

    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;
      this.nextBtn.style.opacity = this.currentIndex === this.totalSlides - 1 ? '0.4' : '1';
    }
  }

  buildOverviewThumbnails() {
    if (!this.overviewGrid) return;
    this.overviewGrid.innerHTML = '';

    this.slides.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.className = 'overview-thumb';
      if (idx === this.currentIndex) thumb.classList.add('active');

      let title = `Slayt ${idx + 1}`;
      const titleEl = slide.querySelector('.slide-title') || slide.querySelector('.cover-title');
      if (titleEl) {
        title = titleEl.textContent;
      }

      thumb.innerHTML = `
        <span class="thumb-num">${String(idx + 1).padStart(2, '0')}</span>
        <span class="thumb-title">${title}</span>
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
