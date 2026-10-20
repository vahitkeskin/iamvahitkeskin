/**
 * 6. Sınıf Bilişim Teknolojileri - Akıllı Tahta Sunum Motoru
 * Dokunmatik ekran (Fatih Akıllı Tahta) ve klavye destekli sunum kontrolcüsü.
 */

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
    
    // Overview modalı
    this.overviewModal = document.querySelector('.overview-modal');
    this.overviewGrid = document.querySelector('.overview-grid');
    this.closeOverviewBtn = document.querySelector('.btn-close-overview');

    this.buildOverviewThumbs();
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
