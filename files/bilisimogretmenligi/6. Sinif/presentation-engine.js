/**
 * 6. Sınıf Bilişim Teknolojileri - Akıllı Tahta Sunum Motoru
 * Dokunmatik ekran (Fatih Akıllı Tahta) ve klavye destekli sunum kontrolcüsü.
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

class PresentationEngine {
  constructor() {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.totalSlides = this.slides.length;
    this.currentIndex = 0;
    this.isOverviewOpen = false;

    this.initDOM();
    this.initEvents();
    this.updateSlide();
  }

  initDOM() {
    // HUD elementleri
    this.slideCountEl = document.querySelector('.hud-slide-count');
    this.progressBar = document.querySelector('.hud-progress-bar');
    this.prevBtn = document.querySelector('.btn-prev');
    this.nextBtn = document.querySelector('.btn-next');
    this.fullscreenBtn = document.querySelector('.btn-fullscreen');
    this.overviewBtn = document.querySelector('.btn-overview');
    this.printBtn = document.querySelector('.btn-print');
    this.themeBtn = document.getElementById('btnThemeToggle');
    
    // Overview modalı
    this.overviewModal = document.querySelector('.overview-modal');
    this.overviewGrid = document.querySelector('.overview-grid');
    this.closeOverviewBtn = document.querySelector('.btn-close-overview');

    this.buildOverviewThumbs();

    if (window.ThemeManager) {
      window.ThemeManager.update();
    }
  }

  buildOverviewThumbs() {
    if (!this.overviewGrid) return;
    this.overviewGrid.innerHTML = '';
    
    this.slides.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `overview-thumb ${idx === this.currentIndex ? 'active' : ''}`;
      
      const titleEl = slide.querySelector('h1, h2');
      const titleText = titleEl ? titleEl.innerText : `Slayt ${idx + 1}`;
      
      thumb.innerHTML = `
        <span class="thumb-num">Slayt ${idx + 1}</span>
        <span class="thumb-title">${titleText}</span>
      `;
      
      thumb.addEventListener('click', () => {
        this.goToSlide(idx);
        this.toggleOverview(false);
      });
      
      this.overviewGrid.appendChild(thumb);
    });
  }

  initEvents() {
    // Buton dinleyicileri
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
    if (this.fullscreenBtn) this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    if (this.overviewBtn) this.overviewBtn.addEventListener('click', () => this.toggleOverview(true));
    if (this.printBtn) this.printBtn.addEventListener('click', () => window.print());
    if (this.closeOverviewBtn) this.closeOverviewBtn.addEventListener('click', () => this.toggleOverview(false));
    if (this.themeBtn) {
      this.themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.ThemeManager) {
          window.ThemeManager.cycleTheme();
        }
      });
    }

    // Klavye kısayolları
    document.addEventListener('keydown', (e) => {
      if (this.isOverviewOpen) {
        if (e.key === 'Escape' || e.key === 'o' || e.key === 'O') {
          this.toggleOverview(false);
        }
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
          this.toggleOverview(true);
          break;
        case 'p':
        case 'P':
          if (e.ctrlKey || e.metaKey) return; // normal browser print
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

    // Dokunmatik (Akıllı Tahta / Tablet) kaydırma algılama
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Yatay kaydırma dikeyden fazlaysa ve en az 50px ise
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX < 0) {
          this.next(); // Sağa çekince sonraki slayt
        } else {
          this.prev(); // Sola çekince önceki slayt
        }
      }
    }, { passive: true });

    // İnteraktif Mini Sınav Şıkları
    document.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const parent = btn.closest('.quiz-card');
        const isCorrect = btn.dataset.correct === 'true';
        
        // Diğer butonların durumunu sıfırla
        parent.querySelectorAll('.quiz-opt').forEach(opt => {
          opt.classList.remove('correct', 'incorrect');
        });
        
        if (isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
          // Doğru olanı da göster
          const correctBtn = parent.querySelector('.quiz-opt[data-correct="true"]');
          if (correctBtn) correctBtn.classList.add('correct');
        }
        
        const ans = parent.querySelector('.quiz-answer');
        if (ans) ans.classList.add('show');
      });
    });
  }

  updateSlide() {
    this.slides.forEach((slide, idx) => {
      if (idx === this.currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Sayaç güncelle
    if (this.slideCountEl) {
      this.slideCountEl.innerText = `${this.currentIndex + 1} / ${this.totalSlides}`;
    }

    // İlerleme çubuğu
    if (this.progressBar) {
      const pct = ((this.currentIndex + 1) / this.totalSlides) * 100;
      this.progressBar.style.width = `${pct}%`;
    }

    // Buton durumları
    if (this.prevBtn) {
      this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.4' : '1';
      this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
    }
    if (this.nextBtn) {
      this.nextBtn.style.opacity = this.currentIndex === this.totalSlides - 1 ? '0.4' : '1';
      this.nextBtn.style.pointerEvents = this.currentIndex === this.totalSlides - 1 ? 'none' : 'auto';
    }

    // Overview thumbs güncelle
    if (this.overviewGrid) {
      const thumbs = this.overviewGrid.querySelectorAll('.overview-thumb');
      thumbs.forEach((thumb, idx) => {
        if (idx === this.currentIndex) {
          thumb.classList.add('active');
        } else {
          thumb.classList.remove('active');
        }
      });
    }
  }

  next() {
    if (this.currentIndex < this.totalSlides - 1) {
      this.currentIndex++;
      this.updateSlide();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlide();
    }
  }

  goToSlide(index) {
    if (index >= 0 && index < this.totalSlides) {
      this.currentIndex = index;
      this.updateSlide();
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Tam ekran hatası: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  toggleOverview(show) {
    this.isOverviewOpen = show;
    if (this.overviewModal) {
      if (show) {
        this.overviewModal.classList.add('open');
      } else {
        this.overviewModal.classList.remove('open');
      }
    }
  }
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
  window.presentation = new PresentationEngine();
});
