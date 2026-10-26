/**
 * Lise Bilgisayar Bilimi - Akıllı Tahta Sunum Motoru (Presentation Engine)
 * Fatih Akıllı Tahta dokunmatik kontrolleri & gelişmiş klavye kısayolları
 * Öğretmen: Vahit Keskin | MEB 2026-2027
 */

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

    // Dokunmatik Ekran (Fatih Akıllı Tahta) Kaydırma (Swipe)
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

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX < 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });

    // Buton Dinleyicileri (HUD)
    document.querySelectorAll('.btn-prev').forEach(btn => {
      btn.addEventListener('click', () => this.prev());
    });

    document.querySelectorAll('.btn-next').forEach(btn => {
      btn.addEventListener('click', () => this.next());
    });

    document.querySelectorAll('.btn-overview').forEach(btn => {
      btn.addEventListener('click', () => this.toggleOverview());
    });

    document.querySelectorAll('.btn-close-overview').forEach(btn => {
      btn.addEventListener('click', () => this.toggleOverview());
    });

    document.querySelectorAll('.btn-fullscreen').forEach(btn => {
      btn.addEventListener('click', () => this.toggleFullscreen());
    });

    document.querySelectorAll('.btn-print').forEach(btn => {
      btn.addEventListener('click', () => window.print());
    });

    document.querySelectorAll('.btn-theme, #btnThemeToggle').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.ThemeManager) {
          window.ThemeManager.cycleTheme();
        }
      });
    });

    // İnteraktif Sınav Seçenekleri
    document.querySelectorAll('.quiz-btn, .quiz-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const parent = btn.closest('.quiz-container, .quiz-card');
        if (!parent) return;

        const isCorrect = btn.dataset.correct === 'true';
        const allBtns = parent.querySelectorAll('.quiz-btn, .quiz-opt');

        allBtns.forEach(b => {
          b.disabled = true;
          if (b.dataset.correct === 'true') {
            b.classList.add('correct');
          }
        });

        if (!isCorrect) {
          btn.classList.add('wrong');
        }

        const answerBox = parent.querySelector('.quiz-answer-box, .quiz-answer');
        if (answerBox) {
          answerBox.classList.add('show');
        }
      });
    });
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;

    this.slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });

    this.currentIndex = index;
    this.updateHUD();

    if (this.isOverviewOpen) {
      this.toggleOverview();
    }
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
    document.querySelectorAll('.hud-slide-count').forEach(counter => {
      counter.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`;
    });

    const percent = ((this.currentIndex + 1) / this.totalSlides) * 100;
    document.querySelectorAll('.hud-progress-bar').forEach(bar => {
      bar.style.width = `${percent}%`;
    });

    document.querySelectorAll('.btn-prev').forEach(btn => {
      btn.disabled = this.currentIndex === 0;
    });

    document.querySelectorAll('.btn-next').forEach(btn => {
      btn.disabled = this.currentIndex === this.totalSlides - 1;
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

  toggleOverview() {
    if (!this.overviewModal) return;
    this.isOverviewOpen = !this.isOverviewOpen;
    this.overviewModal.classList.toggle('show', this.isOverviewOpen);
  }

  buildOverviewThumbnails() {
    if (!this.overviewGrid) return;
    this.overviewGrid.innerHTML = '';

    this.slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = 'overview-card';
      if (idx === this.currentIndex) card.classList.add('active');

      const titleEl = slide.querySelector('h1, h2, .slide-title, .cover-title');
      const title = titleEl ? titleEl.textContent : `Slayt ${idx + 1}`;

      card.innerHTML = `
        <span class="overview-thumb-num">${idx + 1}</span>
        <div class="overview-thumb-title">${title}</div>
      `;

      card.addEventListener('click', () => {
        this.goToSlide(idx);
      });

      this.overviewGrid.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Slayt motorunu otomatik başlat
  setTimeout(() => {
    window.Deck = new PresentationDeck();
  }, 100);
});
