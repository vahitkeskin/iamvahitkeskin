/**
 * 2. Sınıf Bilişim Teknolojileri ve Yazılım - Sunum Motoru (Engine)
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
