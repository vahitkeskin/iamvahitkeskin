/**
 * 1. Sınıf Serbest Etkinlikler - Sunum Motoru (Engine)
 * Fatih Akıllı Tahta & Dokunmatik Ekran Desteği
 * Öğretmen: Vahit Keskin
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

    this.bindEvents();
    this.buildOverviewThumbnails();
    this.goToSlide(0);

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
