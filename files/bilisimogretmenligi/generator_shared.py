#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for shared core presentation engine, styles, and templates
for 9. Sınıf and 10. Sınıf Bilgisayar Bilimi (2026-2027 MEB).
"""

import os

def create_theme_manager(grade_title):
    return f"""/**
 * MEB Maarif Modeli - {grade_title}
 * Tema Yöneticisi (Theme Manager)
 * Sistem (Otomatik), Açık (Light) ve Koyu (Dark) Mod
 * Öğretmen: Vahit Keskin | 2026-2027 Eğitim ve Öğretim Yılı
 */

(function () {{
  const STORAGE_KEY = 'meb_theme_mode'; // 'system' | 'light' | 'dark'

  function getSystemPreference() {{
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }}

  function getSavedTheme() {{
    try {{
      return localStorage.getItem(STORAGE_KEY) || 'light';
    }} catch (e) {{
      return 'light';
    }}
  }}

  function resolveTheme(setting) {{
    if (setting === 'light' || setting === 'dark') return setting;
    return getSystemPreference();
  }}

  function applyTheme(setting, showToast = false) {{
    const validSetting = (setting === 'light' || setting === 'dark') ? setting : 'system';
    const resolved = resolveTheme(validSetting);

    const root = document.documentElement;
    root.setAttribute('data-theme', resolved);
    root.setAttribute('data-theme-setting', validSetting);
    if (document.body) {{
      document.body.setAttribute('data-theme', resolved);
      document.body.setAttribute('data-theme-setting', validSetting);
    }}

    let metaEl = document.querySelector('meta[name="color-scheme"]');
    if (!metaEl) {{
      metaEl = document.createElement('meta');
      metaEl.name = 'color-scheme';
      document.head.appendChild(metaEl);
    }}
    metaEl.content = validSetting === 'system' ? 'light dark' : validSetting;

    updateUI(validSetting, resolved);

    if (showToast) {{
      showThemeToast(validSetting, resolved);
    }}
  }}

  function setTheme(setting) {{
    try {{
      localStorage.setItem(STORAGE_KEY, setting);
    }} catch (e) {{
      console.warn('LocalStorage erişilemedi:', e);
    }}
    applyTheme(setting, true);
  }}

  function cycleTheme() {{
    const current = getSavedTheme();
    let next = 'light';
    if (current === 'light') next = 'dark';
    else if (current === 'dark') next = 'system';
    else if (current === 'system') next = 'light';
    setTheme(next);
  }}

  function updateUI(setting, resolved) {{
    const pillButtons = document.querySelectorAll('.theme-pill-btn');
    pillButtons.forEach(btn => {{
      const val = btn.dataset.themeVal;
      if (val === setting) {{
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
      }} else {{
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      }}
    }});

    const hudButtons = document.querySelectorAll('.btn-theme, #btnThemeToggle');
    hudButtons.forEach(btn => {{
      const iconEl = btn.querySelector('.theme-btn-icon');
      const textEl = btn.querySelector('.theme-btn-text');

      if (setting === 'system') {{
        if (iconEl) iconEl.textContent = '🖥️';
        if (textEl) textEl.textContent = resolved === 'dark' ? 'Sistem (Kapalı)' : 'Sistem (Açık)';
        btn.title = `Tema: Sistem Modu (Şu an: ${{resolved === 'dark' ? 'Kapalı' : 'Açık'}}) [Kısayol: T]`;
      }} else if (setting === 'light') {{
        if (iconEl) iconEl.textContent = '☀️';
        if (textEl) textEl.textContent = 'Açık';
        btn.title = 'Tema: Açık Mod (Varsayılan) [Kısayol: T]';
      }} else {{
        if (iconEl) iconEl.textContent = '🌙';
        if (textEl) textEl.textContent = 'Kapalı';
        btn.title = 'Tema: Kapalı Mod [Kısayol: T]';
      }}
    }});
  }}

  function showThemeToast(setting, resolved) {{
    let toast = document.getElementById('theme-toast');
    if (!toast) {{
      toast = document.createElement('div');
      toast.id = 'theme-toast';
      toast.className = 'theme-toast';
      document.body.appendChild(toast);
    }}

    let msg = '';
    if (setting === 'system') {{
      msg = `🖥️ Sistem Modu (${{resolved === 'dark' ? 'Kapalı' : 'Açık'}}) Aktif`;
    }} else if (setting === 'light') {{
      msg = '☀️ Açık Mod Aktif';
    }} else {{
      msg = '🌙 Kapalı Mod Aktif';
    }}

    toast.innerHTML = `<span class="toast-dot"></span><span>${{msg}}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {{
      toast.classList.remove('show');
    }}, 1800);
  }}

  const initialSetting = getSavedTheme();
  applyTheme(initialSetting, false);

  if (window.matchMedia) {{
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {{
      if (getSavedTheme() === 'system') {{
        applyTheme('system', false);
      }}
    }});
  }}

  window.addEventListener('storage', (e) => {{
    if (e.key === STORAGE_KEY) {{
      applyTheme(e.newValue || 'light', false);
    }}
  }});

  window.ThemeManager = {{
    getSetting: getSavedTheme,
    getResolved: () => resolveTheme(getSavedTheme()),
    setTheme: setTheme,
    cycleTheme: cycleTheme,
    apply: applyTheme,
    update: () => updateUI(getSavedTheme(), resolveTheme(getSavedTheme()))
  }};
}})();
"""

def create_presentation_engine():
    return """/**
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
"""

def create_presentation_styles(grade_name=None, course_name=None, primary_color=None, primary_rgb=None, is_grade_10=False):
    if is_grade_10:
        grade_name = grade_name or "10. Sınıf"
        course_name = course_name or "Bilgisayar Bilimi (Kur 2)"
        primary_color = primary_color or "#f59e0b"
        primary_rgb = primary_rgb or "245, 158, 11"
    else:
        grade_name = grade_name or "9. Sınıf"
        course_name = course_name or "Bilgisayar Bilimi (Kur 1)"
        primary_color = primary_color or "#00f0ff"
        primary_rgb = primary_rgb or "0, 240, 255"

    return f"""/* ==========================================================================
   MEB {grade_name} {course_name} - Yıllık Ders Sunumları Tasarım Sistemi
   Türkiye Yüzyılı Maarif Modeli (2026-2027)
   Öğretmen: Vahit Keskin
   Fatih Akıllı Tahta (16:9), 4K ve Dokunmatik Ekran Optimizasyonu
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root {{
  /* Renk Paleti (Modern Lise & Siber Tasarım) */
  --bg-primary: #070b14;
  --bg-surface: #0e1526;
  --bg-surface-elevated: #162038;
  --bg-card: rgba(22, 32, 56, 0.75);
  --bg-glass: rgba(14, 21, 38, 0.85);

  --accent-cyan: #00f0ff;
  --accent-blue: #3b82f6;
  --accent-indigo: #6366f1;
  --accent-amber: #f59e0b;
  --accent-rose: #f43f5e;
  --accent-emerald: #10b981;
  --accent-purple: #a855f7;

  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-accent: rgba({primary_rgb}, 0.35);

  /* Tema Ünite Renkleri */
  --unit-1: #00f0ff;
  --unit-2: #10b981;
  --unit-3: #8b5cf6;
  --unit-somestr: #f59e0b;
  --unit-4: #0284c7;
  --unit-5: #ef4444;
  --unit-6: #6366f1;

  /* Tipografi */
  --font-sans: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Yuvarlatmalar ve Gölgeler */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --shadow-lg: 0 20px 30px -10px rgba(0, 0, 0, 0.6);
  --shadow-glow: 0 0 25px rgba({primary_rgb}, 0.25);
}}

/* Sıfırlama */
*, *::before, *::after {{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}}

html, body {{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  user-select: none;
}}

/* Slayt Konteyneri - 16:9 En-Boy Oranı */
.deck-container {{
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 20%, rgba({primary_rgb}, 0.08) 0%, transparent 60%);
}}

/* Slayt Temel Yapısı */
.slide {{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.2rem 3.5rem 5.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.97) translateY(12px);
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}}

.slide.active {{
  opacity: 1;
  pointer-events: auto;
  transform: scale(1) translateY(0);
  z-index: 10;
}}

/* Slayt Üst Başlığı (Header) */
.slide-header {{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.8rem;
}}

.slide-title-box {{
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}}

.header-badges {{
  display: flex;
  gap: 0.6rem;
  align-items: center;
}}

.badge {{
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.2rem 0.7rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}}

.badge-unit {{
  background: rgba({primary_rgb}, 0.15);
  color: var(--accent-cyan);
  border: 1px solid rgba({primary_rgb}, 0.4);
}}

.badge-week {{
  background: rgba(139, 92, 246, 0.15);
  color: #c084fc;
  border: 1px solid rgba(139, 92, 246, 0.35);
}}

.badge-code {{
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.35);
  font-family: var(--font-mono);
}}

.slide-title {{
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
}}

.slide-subtitle {{
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.5;
}}

/* Slayt 1: Kapak */
.slide-cover {{
  justify-content: center;
  text-align: center;
  background: radial-gradient(circle at 50% 30%, #152244 0%, #070b14 100%);
  position: relative;
  overflow: hidden;
}}

.cover-wrapper {{
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
}}

.cover-tag {{
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.3rem;
  background: rgba({primary_rgb}, 0.15);
  border: 1px solid var(--border-accent);
  border-radius: 9999px;
  color: var(--accent-cyan);
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}}

.cover-title {{
  font-size: 3.2rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.5px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
}}

.cover-subtitle {{
  font-size: 1.4rem;
  color: #cbd5e1;
  max-width: 900px;
  line-height: 1.5;
  font-weight: 400;
}}

.cover-curiosity-box {{
  background: rgba(245, 158, 11, 0.1);
  border: 1px dashed rgba(245, 158, 11, 0.4);
  border-radius: var(--radius-md);
  padding: 1.1rem 1.8rem;
  margin: 0.4rem 0;
  color: #fde68a;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-align: left;
  max-width: 950px;
}}

.cover-meta-grid {{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 0.8rem;
}}

.cover-meta-item {{
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.9rem;
  text-align: center;
}}

.meta-label {{
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-dim);
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 0.3rem;
  display: block;
}}

.meta-value {{
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
}}

/* Slayt 2: 4'lü Yol Haritası Kartları */
.cards-grid-4 {{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin: 1rem 0;
}}

.card-roadmap {{
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}}

.card-roadmap:hover {{
  transform: translateY(-4px);
  border-color: var(--border-accent);
}}

.roadmap-step {{
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--accent-cyan);
  background: rgba({primary_rgb}, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  align-self: flex-start;
}}

.roadmap-title {{
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
}}

.roadmap-desc {{
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.5;
}}

/* Slayt 3 & 4: Bölünmüş İçerik (Metin + SVG Şema) */
.split-content {{
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 2rem;
  align-items: center;
  flex: 1;
}}

.text-panel {{
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}}

.info-card-highlight {{
  background: linear-gradient(135deg, rgba(22, 32, 56, 0.8) 0%, rgba(14, 21, 38, 0.9) 100%);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}}

.info-card-highlight h3 {{
  font-size: 1.35rem;
  color: #ffffff;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}}

.info-card-highlight p {{
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
}}

.concept-bullets {{
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}}

.concept-bullets li {{
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.5;
}}

.bullet-dot {{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-cyan);
  margin-top: 0.45rem;
  flex-shrink: 0;
  box-shadow: 0 0 8px var(--accent-cyan);
}}

.visual-panel {{
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(14, 21, 38, 0.5);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  box-shadow: var(--shadow-lg);
}}

.visual-panel svg {{
  max-width: 100%;
  max-height: 380px;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
}}

/* 2'li & 3'lü Kart Izgaraları */
.cards-grid-2 {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  flex: 1;
  align-items: stretch;
}}

.cards-grid-3 {{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  flex: 1;
  align-items: stretch;
}}

.feature-card {{
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}}

.feature-badge {{
  display: inline-block;
  padding: 0.25rem 0.7rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(245, 158, 11, 0.15);
  color: var(--accent-amber);
  border: 1px solid rgba(245, 158, 11, 0.3);
  align-self: flex-start;
}}

.feature-title {{
  font-size: 1.25rem;
  color: #ffffff;
  font-weight: 700;
}}

.feature-desc {{
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.55;
}}

/* Kod Blokları (VS Code / Terminal Style) */
.code-window {{
  background: #090d16;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  font-family: var(--font-mono);
  margin-top: 0.5rem;
}}

.code-header {{
  background: #111827;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}}

.mac-dots {{
  display: flex;
  gap: 6px;
}}

.mac-dot {{
  width: 11px;
  height: 11px;
  border-radius: 50%;
}}

.dot-red {{ background: #ff5f56; }}
.dot-yellow {{ background: #ffbd2e; }}
.dot-green {{ background: #27c93f; }}

.code-title {{
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 500;
}}

.code-content {{
  padding: 1.2rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e2e8f0;
  overflow-x: auto;
  white-space: pre;
}}

.token-kw {{ color: #c084fc; font-weight: 700; }}
.token-fn {{ color: #38bdf8; font-weight: 600; }}
.token-str {{ color: #34d399; }}
.token-num {{ color: #fbbf24; }}
.token-cmt {{ color: #64748b; font-style: italic; }}

/* Slayt 5: Atölye / Laboratuvar Görevi */
.workshop-wrapper {{
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.8rem;
  margin: 0.8rem 0;
  flex: 1;
}}

.workshop-steps {{
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}}

.workshop-step-card {{
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.1rem 1.4rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
}}

.step-number {{
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
  color: #070b14;
  font-weight: 900;
  font-size: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}}

.step-info h4 {{
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 0.2rem;
}}

.step-info p {{
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.45;
}}

.workshop-success-box {{
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}}

.workshop-success-box h3 {{
  color: #34d399;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}}

/* Slayt 6: Siber Güvenlik & Doğru Bilinen Yanlışlar */
.tips-grid {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
  margin: 0.8rem 0;
  flex: 1;
}}

.tips-box {{
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 1.6rem;
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}}

.tips-box.rules {{
  border-left: 4px solid var(--accent-emerald);
}}

.tips-box.myths {{
  border-left: 4px solid var(--accent-rose);
}}

.tips-title {{
  font-size: 1.25rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}}

.myth-item {{
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}}

.myth-wrong {{
  color: #fca5a5;
  font-size: 0.92rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}}

.myth-correct {{
  color: #86efac;
  font-size: 0.92rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.2rem;
  font-weight: 500;
}}

/* Slayt 7: İnteraktif Akıllı Tahta Sınavı */
.quiz-container {{
  max-width: 960px;
  margin: 0.5rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}}

.quiz-question-box {{
  background: linear-gradient(135deg, rgba(22, 32, 56, 0.95) 0%, rgba(14, 21, 38, 0.9) 100%);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-md);
  padding: 1.6rem 2rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.5;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}}

.quiz-options-grid {{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}}

.quiz-btn {{
  background: var(--bg-surface-elevated);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 1.1rem 1.5rem;
  color: #f8fafc;
  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}}

.quiz-btn:hover:not(:disabled) {{
  border-color: var(--accent-cyan);
  background: rgba({primary_rgb}, 0.12);
  transform: translateY(-2px);
}}

.quiz-btn.correct {{
  background: rgba(16, 185, 129, 0.25) !important;
  border-color: #10b981 !important;
  color: #a7f3d0 !important;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.35);
}}

.quiz-btn.wrong {{
  background: rgba(239, 68, 68, 0.25) !important;
  border-color: #ef4444 !important;
  color: #fca5a5 !important;
}}

.quiz-answer-box {{
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-md);
  padding: 1.2rem 1.6rem;
  color: #d1fae5;
  font-size: 1.05rem;
  line-height: 1.5;
  display: none;
}}

.quiz-answer-box.show {{
  display: block;
  animation: fadeIn 0.3s ease;
}}

/* Slayt 8: Haftalık Özet & Görevler */
.summary-grid {{
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.8rem;
  margin: 0.8rem 0;
  flex: 1;
}}

.summary-card {{
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}}

.summary-title {{
  font-size: 1.25rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}}

/* HUD Kontrol Çubuğu (Bottom Navigation) */
.hud-bar {{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: var(--bg-glass);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
}}

.hud-progress-wrapper {{
  display: flex;
  align-items: center;
  gap: 1rem;
}}

.hud-progress-track {{
  width: 220px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  overflow: hidden;
}}

.hud-progress-bar {{
  height: 100%;
  width: 12.5%;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-blue));
  border-radius: 9999px;
  transition: width 0.3s ease;
}}

.hud-slide-count {{
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--text-muted);
  font-weight: 700;
}}

.hud-controls {{
  display: flex;
  align-items: center;
  gap: 0.6rem;
}}

.hud-btn {{
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
}}

.hud-btn:hover:not(:disabled) {{
  border-color: var(--border-accent);
  background: rgba({primary_rgb}, 0.12);
  color: #ffffff;
}}

.hud-btn:disabled {{
  opacity: 0.35;
  cursor: not-allowed;
}}

.hud-btn-primary {{
  background: var(--accent-blue);
  color: #ffffff;
  border-color: var(--accent-blue);
}}

.hud-btn-primary:hover:not(:disabled) {{
  background: #2563eb;
}}

/* Genel Bakış (Overview) Modalı */
.overview-modal {{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(7, 11, 20, 0.95);
  backdrop-filter: blur(15px);
  z-index: 200;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}}

.overview-modal.show {{
  display: flex;
}}

.overview-content {{
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}}

.overview-header {{
  display: flex;
  justify-content: space-between;
  align-items: center;
}}

.overview-grid {{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}}

.overview-card {{
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}}

.overview-card:hover {{
  border-color: var(--accent-cyan);
  transform: scale(1.03);
}}

.overview-card.active {{
  border-color: var(--accent-cyan);
  box-shadow: 0 0 15px rgba({primary_rgb}, 0.4);
}}

.overview-thumb-num {{
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--accent-cyan);
}}

.overview-thumb-title {{
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
}}

/* Tema Bildirim Balonu (Toast) */
.theme-toast {{
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: rgba(15, 23, 42, 0.95);
  color: #ffffff;
  padding: 0.6rem 1.4rem;
  border-radius: 9999px;
  border: 1px solid var(--border-accent);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 300;
}}

.theme-toast.show {{
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}}

.toast-dot {{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-cyan);
}}

/* Açık Mod Uyumluluğu (Light Mode Overrides - Yüksek Kontrast & Net Okunabilirlik) */
[data-theme="light"] {{
  --bg-primary: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #f1f5f9;
  --bg-card: #ffffff;
  --bg-glass: rgba(255, 255, 255, 0.96);
  --text-main: #0f172a;
  --text-muted: #334155;
  --text-dim: #475569;
  --border-subtle: #e2e8f0;
  --border-accent: rgba({primary_rgb}, 0.6);
  color-scheme: light;
}}

[data-theme="light"] body {{
  background: #f8fafc !important;
  color: #0f172a !important;
}}

[data-theme="light"] .deck-container {{
  background: radial-gradient(circle at 50% 20%, #eff6ff 0%, #f8fafc 100%) !important;
}}

[data-theme="light"] .slide-cover {{
  background: radial-gradient(circle at 50% 30%, #f0f9ff 0%, #ffffff 100%) !important;
}}

[data-theme="light"] .cover-title,
[data-theme="light"] .slide-title,
[data-theme="light"] .info-card-highlight h3,
[data-theme="light"] .feature-title,
[data-theme="light"] .roadmap-title,
[data-theme="light"] .meta-value,
[data-theme="light"] .step-info h4,
[data-theme="light"] .tips-title,
[data-theme="light"] .summary-title,
[data-theme="light"] .quiz-question-box {{
  color: #0f172a !important;
}}

[data-theme="light"] .cover-subtitle,
[data-theme="light"] .slide-subtitle,
[data-theme="light"] .concept-bullets li,
[data-theme="light"] .roadmap-desc,
[data-theme="light"] .feature-desc,
[data-theme="light"] .step-info p {{
  color: #334155 !important;
}}

[data-theme="light"] .concept-bullets li strong {{
  color: #0f172a !important;
}}

[data-theme="light"] .badge-unit,
[data-theme="light"] .cover-tag {{
  background: #ede9fe !important;
  color: #5b21b6 !important;
  border: 1.5px solid #c4b5fd !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .badge-week {{
  background: #f3e8ff !important;
  color: #6b21a8 !important;
  border: 1.5px solid #d8b4fe !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .badge-code {{
  background: #fef3c7 !important;
  color: #92400e !important;
  border: 1.5px solid #fde68a !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .cover-curiosity-box {{
  background: #fffbeb !important;
  color: #92400e !important;
  border: 1.5px solid #fcd34d !important;
  font-weight: 600 !important;
}}

[data-theme="light"] .cover-meta-item {{
  background: #ffffff !important;
  border: 1.5px solid #e2e8f0 !important;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04) !important;
}}

[data-theme="light"] .meta-label {{
  color: #475569 !important;
  font-weight: 700 !important;
}}

[data-theme="light"] .card-roadmap,
[data-theme="light"] .feature-card,
[data-theme="light"] .info-card-highlight,
[data-theme="light"] .workshop-step-card,
[data-theme="light"] .tips-box,
[data-theme="light"] .summary-card,
[data-theme="light"] .visual-panel {{
  background: #ffffff !important;
  border: 1.5px solid #e2e8f0 !important;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06) !important;
}}

[data-theme="light"] .roadmap-step {{
  background: #ede9fe !important;
  color: #4338ca !important;
  border: 1px solid #c7d2fe !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .workshop-success-box {{
  background: #ecfdf5 !important;
  border: 1.5px solid #a7f3d0 !important;
}}

[data-theme="light"] .workshop-success-box h3 {{
  color: #065f46 !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .workshop-success-box p,
[data-theme="light"] .workshop-success-box li {{
  color: #047857 !important;
  font-weight: 500 !important;
}}

[data-theme="light"] .tips-box.rules {{
  background: #f0fdf4 !important;
  border: 1.5px solid #bbf7d0 !important;
  border-left: 5px solid #10b981 !important;
}}

[data-theme="light"] .tips-box.rules h3 {{
  color: #065f46 !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .tips-box.rules li {{
  color: #166534 !important;
  font-weight: 500 !important;
}}

[data-theme="light"] .tips-box.mistakes {{
  background: #fff1f2 !important;
  border: 1.5px solid #fecdd3 !important;
  border-left: 5px solid #ef4444 !important;
}}

[data-theme="light"] .tips-box.mistakes h3 {{
  color: #9f1239 !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .tips-box.mistakes li {{
  color: #881337 !important;
  font-weight: 500 !important;
}}

[data-theme="light"] .quiz-btn {{
  background: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  color: #0f172a !important;
  font-weight: 600 !important;
  box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04) !important;
}}

[data-theme="light"] .quiz-btn:hover:not(:disabled) {{
  background: #f1f5f9 !important;
  border-color: #4f46e5 !important;
  color: #4338ca !important;
}}

[data-theme="light"] .quiz-btn.correct {{
  background: #dcfce7 !important;
  border-color: #22c55e !important;
  color: #14532d !important;
  font-weight: 700 !important;
}}

[data-theme="light"] .quiz-btn.wrong {{
  background: #fee2e2 !important;
  border-color: #ef4444 !important;
  color: #7f1d1d !important;
  font-weight: 700 !important;
}}

[data-theme="light"] .quiz-explanation {{
  background: #eff6ff !important;
  border: 1.5px solid #bfdbfe !important;
  color: #1e40af !important;
}}

[data-theme="light"] .quiz-question-box {{
  background: linear-gradient(135deg, #ffffff 0%, #eff6ff 100%) !important;
  border: 1.5px solid #cbd5e1 !important;
}}

[data-theme="light"] .hud-bar {{
  background: rgba(255, 255, 255, 0.98) !important;
  border-top: 1.5px solid #e2e8f0 !important;
  box-shadow: 0 -4px 20px rgba(15, 23, 42, 0.08) !important;
}}

[data-theme="light"] .hud-slide-count {{
  color: #0f172a !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .hud-btn {{
  background: #f8fafc !important;
  border: 1.5px solid #cbd5e1 !important;
  color: #0f172a !important;
  font-weight: 700 !important;
}}

[data-theme="light"] .hud-btn:hover {{
  background: #e2e8f0 !important;
  border-color: #94a3b8 !important;
  color: #0f172a !important;
}}

[data-theme="light"] .hud-btn-primary {{
  background: #4f46e5 !important;
  border-color: #4338ca !important;
  color: #ffffff !important;
  font-weight: 700 !important;
}}

[data-theme="light"] .hud-btn-primary:hover {{
  background: #4338ca !important;
}}

[data-theme="light"] .overview-modal {{
  background: rgba(248, 250, 252, 0.96) !important;
}}

[data-theme="light"] .overview-header h3 {{
  color: #0f172a !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .overview-thumb {{
  background: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06) !important;
}}

[data-theme="light"] .overview-thumb:hover {{
  border-color: #4f46e5 !important;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.15) !important;
}}

[data-theme="light"] .overview-thumb.active {{
  border-color: #4f46e5 !important;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3) !important;
}}

[data-theme="light"] .thumb-title {{
  color: #0f172a !important;
  font-weight: 700 !important;
}}

[data-theme="light"] .thumb-num {{
  color: #4338ca !important;
  font-weight: 800 !important;
}}

[data-theme="light"] .btn-close-overview {{
  background: #ffffff !important;
  border: 1.5px solid #cbd5e1 !important;
  color: #0f172a !important;
}}

[data-theme="light"] .theme-toast {{
  background: #ffffff !important;
  color: #0f172a !important;
  border: 1.5px solid #cbd5e1 !important;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12) !important;
}}

/* Yazdırma Modu */
@media print {{
  html, body {{
    overflow: visible !important;
    height: auto !important;
    background: #ffffff !important;
    color: #000000 !important;
  }}
  .hud-bar, .overview-modal, .theme-toast {{
    display: none !important;
  }}
  .deck-container {{
    display: block !important;
    width: 100% !important;
    height: auto !important;
  }}
  .slide {{
    position: relative !important;
    opacity: 1 !important;
    transform: none !important;
    page-break-after: always;
    break-after: page;
    height: 100vh !important;
    width: 100vw !important;
    padding: 2rem !important;
    background: #ffffff !important;
    color: #000000 !important;
  }}
}}

@keyframes fadeIn {{
  from {{ opacity: 0; transform: translateY(6px); }}
  to {{ opacity: 1; transform: translateY(0); }}
}}
"""

def create_presentation_builder(grade_name, course_name):
    return f"""/**
 * MEB {grade_name} {course_name} - Slayt Oluşturucu (Presentation Builder)
 * curriculum-data.js dosyasından veriyi alıp 8 aşamalı zengin akıllı tahta
 * sunumunu dinamik olarak inşa eder.
 * Öğretmen: Vahit Keskin | MEB 2026-2027
 */

function buildPresentation(weekNum) {{
  const container = document.getElementById('presentation-deck');
  if (!container) return;

  const weekData = CURRICULUM_DATA.find(w => w.week === weekNum);
  if (!weekData) {{
    container.innerHTML = `<div style="padding: 3rem; color: #ef4444; text-align: center;"><h2>Hafta ${{weekNum}} müfredat verisi bulunamadı.</h2></div>`;
    return;
  }}

  // Body data-unit
  document.body.setAttribute('data-unit', weekData.unitTheme || 'unite-1');

  container.innerHTML = `
    <!-- SLAYT 1: KAPAK -->
    <section class="slide slide-cover active">
      <div class="cover-wrapper">
        <div class="cover-tag">
          ${{weekData.unitBadge || weekData.unit}}
        </div>
        <h1 class="cover-title">${{weekData.title}}</h1>
        <p class="cover-subtitle">${{weekData.subtitle}}</p>
        
        <div class="cover-curiosity-box">
          <span style="font-size: 1.6rem;">💡</span>
          <div><strong>Merak & Keşif Sorusu:</strong> ${{weekData.curiosityQuestion}}</div>
        </div>

        <div class="cover-meta-grid">
          <div class="cover-meta-item">
            <span class="meta-label">Hafta & Tarih</span>
            <span class="meta-value">${{weekData.week}}. Hafta (${{weekData.date}})</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Ders Süresi</span>
            <span class="meta-value">${{weekData.hours || '2 Ders Saati'}}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Kazanım Kodu</span>
            <span class="meta-value">${{weekData.outcomeCode}}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Hedef Bilişim Becerisi</span>
            <span class="meta-value">${{weekData.targetSkill}}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 2: YOL HARİTASI VE ANAHTAR KAVRAMLAR -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${{weekData.unitBadge || weekData.unit}}</span>
            <span class="badge badge-week">${{weekData.week}}. Hafta</span>
            <span class="badge badge-code">${{weekData.outcomeCode}}</span>
          </div>
          <h2 class="slide-title">Haftanın Yol Haritası & Kavram Ağacı</h2>
          <p class="slide-subtitle">Bu haftanın öğrenme serüveninde hangi adımları takip edeceğiz?</p>
        </div>
        <div style="font-size: 0.95rem; color: var(--text-dim);">${{weekData.date}}</div>
      </div>

      <div class="cards-grid-4">
        ${{weekData.roadmap.map((step, idx) => `
          <div class="card-roadmap">
            <span class="roadmap-step">ADIM 0${{idx + 1}}</span>
            <h3 class="roadmap-title">${{step.title}}</h3>
            <p class="roadmap-desc">${{step.desc}}</p>
          </div>
        `).join('')}}
      </div>
    </section>

    <!-- SLAYT 3: DETAYLI KONU ANLATIMI 1 (KAVRAMSAL ŞEMA & TEORİ) -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${{weekData.unitBadge || weekData.unit}}</span>
            <span class="badge badge-code">${{weekData.outcomeCode}}</span>
          </div>
          <h2 class="slide-title">${{weekData.section1.title}}</h2>
          <p class="slide-subtitle">${{weekData.section1.subtitle}}</p>
        </div>
        <div style="font-size: 0.9rem; color: var(--accent-cyan); font-weight: 700;">Konu Anlatımı I</div>
      </div>

      <div class="split-content">
        <div class="text-panel">
          ${{weekData.section1.cards ? `
            <div class="info-card-highlight">
              <h3><span>${{weekData.section1.cards[0].icon || '📌'}}</span> ${{weekData.section1.cards[0].title}}</h3>
              <p>${{weekData.section1.cards[0].desc || ''}}</p>
            </div>
            ${{weekData.section1.cards[0].items ? `
              <ul class="concept-bullets">
                ${{weekData.section1.cards[0].items.map(it => `
                  <li>
                    <span class="bullet-dot"></span>
                    <div><strong>${{it.bold}}:</strong> ${{it.text}}</div>
                  </li>
                `).join('')}}
              </ul>
            ` : ''}}
          ` : ''}}
        </div>
        <div class="visual-panel">
          ${{weekData.roadmapSvg || weekData.section1.svg || getDefaultSvg(weekData.title)}}
        </div>
      </div>
    </section>

    <!-- SLAYT 4: DETAYLI KONU ANLATIMI 2 (TEKNİK SÜREÇ & KOD/MİMARİ) -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${{weekData.unitBadge || weekData.unit}}</span>
            <span class="badge badge-code">${{weekData.targetSkill}}</span>
          </div>
          <h2 class="slide-title">${{weekData.section2.title}}</h2>
          <p class="slide-subtitle">${{weekData.section2.subtitle}}</p>
        </div>
        <div style="font-size: 0.9rem; color: var(--accent-amber); font-weight: 700;">Teknik Süreç & Kod</div>
      </div>

      ${{weekData.section2.codeSnippet ? `
        <div class="split-content">
          <div class="text-panel">
            ${{weekData.section2.cards.map(c => `
              <div class="feature-card">
                <span class="feature-badge">${{c.badge || 'Kavram'}}</span>
                <h3 class="feature-title">${{c.title}}</h3>
                <p class="feature-desc">${{c.desc || ''}}</p>
                ${{c.items ? `
                  <ul class="concept-bullets" style="margin-top: 0.4rem;">
                    ${{c.items.map(it => `<li><span class="bullet-dot" style="background: var(--accent-amber);"></span> <div><strong>${{it.bold}}:</strong> ${{it.text}}</div></li>`).join('')}}
                  </ul>
                ` : ''}}
              </div>
            `).join('')}}
          </div>
          <div class="code-window">
            <div class="code-header">
              <div class="mac-dots">
                <span class="mac-dot dot-red"></span>
                <span class="mac-dot dot-yellow"></span>
                <span class="mac-dot dot-green"></span>
              </div>
              <span class="code-title">${{weekData.section2.codeTitle || 'ornek_kod.py'}}</span>
              <span style="font-size: 0.75rem; color: #64748b; font-family: var(--font-mono);">${{weekData.section2.codeLang || 'Python 3'}}</span>
            </div>
            <pre class="code-content">${{weekData.section2.codeSnippet}}</pre>
          </div>
        </div>
      ` : `
        <div class="cards-grid-${{weekData.section2.cards.length === 3 ? '3' : '2'}}">
          ${{weekData.section2.cards.map(c => `
            <div class="feature-card">
              <span class="feature-badge">${{c.badge || 'Kavram'}}</span>
              <h3 class="feature-title">${{c.title}}</h3>
              <p class="feature-desc">${{c.desc || ''}}</p>
              ${{c.items ? `
                <ul class="concept-bullets" style="margin-top: 0.4rem;">
                  ${{c.items.map(it => `<li><span class="bullet-dot" style="background: var(--accent-amber);"></span> <div><strong>${{it.bold}}:</strong> ${{it.text}}</div></li>`).join('')}}
                </ul>
              ` : ''}}
            </div>
          `).join('')}}
        </div>
      `}}
    </section>

    <!-- SLAYT 5: ATÖLYE / UYGULAMALI LABORATUVAR GÖREVİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-week" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Sınıf İçi Atölye</span>
            <span class="badge badge-code">Laboratuvar Görevi</span>
          </div>
          <h2 class="slide-title">🛠️ ${{weekData.workshop.title}}</h2>
          <p class="slide-subtitle">${{weekData.workshop.subtitle}}</p>
        </div>
      </div>

      <div class="workshop-wrapper">
        <div class="workshop-steps">
          ${{weekData.workshop.steps.map((st, idx) => `
            <div class="workshop-step-card">
              <div class="step-number">${{idx + 1}}</div>
              <div class="step-info">
                <h4>${{st.title}}</h4>
                <p>${{st.desc}}</p>
              </div>
            </div>
          `).join('')}}
        </div>

        <div class="workshop-success-box">
          <h3><span>🎯</span> Başarı Ölçütleri (Rubrik)</h3>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.5;">Görevi tamamlarken öğretmeniniz ve zümrenizin değerlendireceği temel standartlar:</p>
          <ul class="concept-bullets">
            ${{weekData.workshop.criteria.map(crit => `
              <li>
                <span class="bullet-dot" style="background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
                <div>${{crit}}</div>
              </li>
            `).join('')}}
          </ul>
        </div>
      </div>
    </section>

    <!-- SLAYT 6: SİBER GÜVENLİK, ETİK VE DOĞRU BİLİNEN YANLIŞLAR -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Bilişim Etiği</span>
            <span class="badge badge-week">Geliştirici İpuçları</span>
          </div>
          <h2 class="slide-title">🛡️ ${{weekData.tips.safetyTitle || 'Siber Güvenlik & Doğru Bilinen Yanlışlar'}}</h2>
          <p class="slide-subtitle">Yazılım ve bilişim dünyasında dikkat edilmesi gereken kurallar ve yaygın yanılgılar.</p>
        </div>
      </div>

      <div class="tips-grid">
        <div class="tips-box rules">
          <h3 class="tips-title"><span>📐</span> Güvenlik & Profesyonel Standartlar</h3>
          <ul class="concept-bullets">
            ${{weekData.tips.safetyRules.map(rule => `
              <li>
                <span class="bullet-dot" style="background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
                <div><strong>${{rule.bold}}:</strong> ${{rule.text}}</div>
              </li>
            `).join('')}}
          </ul>
        </div>

        <div class="tips-box myths">
          <h3 class="tips-title"><span>❌</span> Doğru Bilinen Yanlışlar</h3>
          <div style="display: flex; flex-direction: column; gap: 0.8rem;">
            ${{weekData.tips.myths.map(m => `
              <div class="myth-item">
                <div class="myth-wrong"><span>✕</span> <strong>Yanlış:</strong> ${{m.wrong}}</div>
                <div class="myth-correct"><span>✓</span> <strong>Doğrusu:</strong> ${{m.correct}}</div>
              </div>
            `).join('')}}
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: İNTERAKTİF AKILLI TAHTA MİNİ SINAVI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Sıra Sende!</span>
            <span class="badge badge-week">${{weekData.week}}. Hafta Değerlendirme</span>
          </div>
          <h2 class="slide-title">Akıllı Tahta İnteraktif Mini Sınavı</h2>
          <p class="slide-subtitle">Hadi öğrendiklerimizi test edelim! Doğru olduğunu düşündüğünüz şıkka tıklayın.</p>
        </div>
        <div style="font-size: 0.9rem; color: var(--accent-emerald); font-weight: 700;">Hızlı Pekiştirme</div>
      </div>

      <div class="quiz-container">
        <div class="quiz-question-box">
          ❓ ${{weekData.quiz.question}}
        </div>
        <div class="quiz-options-grid">
          ${{weekData.quiz.options.map(opt => `
            <button class="quiz-btn" data-correct="${{opt.isCorrect}}">
              <span>${{opt.text}}</span>
            </button>
          `).join('')}}
        </div>
        <div class="quiz-answer-box">
          <strong>Çözüm & Açıklama:</strong> ${{weekData.quiz.explanation}}
        </div>
      </div>
    </section>

    <!-- SLAYT 8: HAFTALIK ÖZET VE GELECEK HAFTA BAKIŞI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Ders Sonu</span>
            <span class="badge badge-week">Özet & Görevler</span>
          </div>
          <h2 class="slide-title">Haftalık Özet & Gelecek Haftaya Bakış</h2>
          <p class="slide-subtitle">Bugünün kilit çıkarımları ve bir sonraki dersin hazırlık adımları.</p>
        </div>
      </div>

      <div class="summary-grid">
        <div class="summary-card">
          <h3 class="summary-title"><span>📌</span> Haftanın Kilit Çıkarımları</h3>
          <ul class="concept-bullets">
            ${{weekData.summary.keyPoints.map(pt => `
              <li>
                <span class="bullet-dot"></span>
                <div>${{pt}}</div>
              </li>
            `).join('')}}
          </ul>
        </div>

        <div class="summary-card">
          <h3 class="summary-title"><span>🚀</span> Gelecek Hafta ve Bireysel Görev</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-sm); padding: 1rem;">
              <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--accent-amber); font-weight: 700;">Gelecek Haftanın Konusu</span>
              <p style="font-size: 1.05rem; color: #ffffff; font-weight: 700; margin-top: 0.3rem;">${{weekData.summary.nextWeek}}</p>
            </div>
            <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-sm); padding: 1rem;">
              <span style="font-size: 0.8rem; text-transform: uppercase; color: #93c5fd; font-weight: 700;">Bireysel Araştırma / Kod Görevi</span>
              <p style="font-size: 0.95rem; color: #cbd5e1; margin-top: 0.3rem;">${{weekData.summary.homework}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HUD BOTTOM BAR -->
    <div class="hud-bar">
      <div class="hud-progress-wrapper">
        <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
        <span class="hud-slide-count">1 / 8</span>
      </div>
      <div class="hud-controls">
        <button class="hud-btn btn-prev">← Geri</button>
        <button class="hud-btn btn-overview">☰ Genel Bakış</button>
        <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
        <button class="hud-btn btn-fullscreen" title="Tam Ekran [F]">⛶ Tam Ekran</button>
        <button class="hud-btn btn-print" title="Yazdır / PDF [P]">🖨️ PDF</button>
        <button class="hud-btn hud-btn-primary btn-next">İleri →</button>
      </div>
    </div>

    <!-- OVERVIEW MODAL -->
    <div class="overview-modal">
      <div class="overview-content">
        <div class="overview-header">
          <h3 style="font-size: 1.4rem; color: #ffffff;">Slayt Genel Görünümü - ${{weekData.week}}. Hafta</h3>
          <button class="hud-btn btn-close-overview">✕ Kapat</button>
        </div>
        <div class="overview-grid"></div>
      </div>
    </div>
  `;

  if (window.ThemeManager) {{
    window.ThemeManager.update();
  }}
}}

function getDefaultSvg(title) {{
  return `
    <svg viewBox="0 0 400 300">
      <rect width="400" height="300" rx="16" fill="#0e1526" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
      <circle cx="200" cy="120" r="50" fill="rgba(0, 240, 255, 0.1)" stroke="#00f0ff" stroke-width="3"/>
      <text x="200" y="128" text-anchor="middle" font-size="30">⚡</text>
      <text x="200" y="200" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">${{title}}</text>
      <text x="200" y="224" text-anchor="middle" font-size="12" fill="#94a3b8">MEB Bilgisayar Bilimi</text>
    </svg>
  `;
}}

document.addEventListener('DOMContentLoaded', () => {{
  const urlParams = new URLSearchParams(window.location.search);
  const weekParam = urlParams.get('hafta');
  const bodyWeek = document.body.dataset.week;
  const targetWeek = parseInt(weekParam || bodyWeek || '1');
  buildPresentation(targetWeek);
}});
"""

def create_single_week_html(grade_name, week_num, topic_title, course_name="Bilişim Teknolojileri ve Yazılım"):
    padded = f"{week_num:02d}"
    return f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{padded}. Hafta: {topic_title} - {grade_name} {course_name}</title>
  <link rel="stylesheet" href="presentation-styles.css">
</head>
<body data-unit="unite-1" data-week="{week_num}">
  <div class="deck-container" id="presentation-deck"></div>

  <script src="curriculum-term1.js"></script>
  <script src="curriculum-term1-part2.js"></script>
  <script src="curriculum-term2-part1.js"></script>
  <script src="curriculum-term2-part2.js"></script>
  <script src="curriculum-data.js"></script>
  <script src="theme-manager.js"></script>
  <script src="presentation-builder.js"></script>
  <script src="presentation-engine.js"></script>
</body>
</html>
"""

def create_portal_index_html(grade_name, course_name, units_list, accent_color=None, accent_rgb=None, is_grade_10=False):
    unit_tabs = "".join([f'<button class="filter-tab" data-filter="{u["id"]}">{u["title"]}</button>\n' for u in units_list])
    
    if accent_color and accent_rgb:
        hero_accent = f"radial-gradient(circle, rgba({accent_rgb}, 0.22) 0%, rgba({accent_rgb}, 0.08) 50%, transparent 70%)"
        card_stripe = f"linear-gradient(90deg, {accent_color}, #3b82f6)"
        btn_launch_bg = f"linear-gradient(135deg, {accent_color} 0%, rgba({accent_rgb}, 0.8) 100%)"
        btn_launch_hover = f"linear-gradient(135deg, {accent_color} 0%, #ffffff 100%)"
    elif is_grade_10:
        accent_color = "#f59e0b"
        accent_rgb = "245, 158, 11"
        hero_accent = "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.1) 50%, transparent 70%)"
        card_stripe = "linear-gradient(90deg, #f59e0b, #ef4444)"
        btn_launch_bg = "linear-gradient(135deg, #d97706 0%, #b45309 100%)"
        btn_launch_hover = "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    else:
        accent_color = "#00f0ff"
        accent_rgb = "0, 240, 255"
        hero_accent = "radial-gradient(circle, rgba(0, 240, 255, 0.18) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)"
        card_stripe = "linear-gradient(90deg, #00f0ff, #6366f1)"
        btn_launch_bg = "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)"
        btn_launch_hover = "linear-gradient(135deg, #00f0ff 0%, #3b82f6 100%)"
    
    return f"""<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <title>{grade_name} {course_name} - Yıllık Ders Sunumları Portalı (2026-2027)</title>
  <script>
    (function() {{
      try {{
        const saved = localStorage.getItem('meb_theme_mode') || 'light';
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const resolved = saved === 'system' ? (prefersDark ? 'dark' : 'light') : saved;
        document.documentElement.setAttribute('data-theme', resolved);
        document.documentElement.setAttribute('data-theme-setting', saved);
      }} catch(e) {{}}
    }})();
  </script>
  <link rel="stylesheet" href="presentation-styles.css">
  <style>
    body {{
      background: #070b14;
      color: #f8fafc;
      min-height: 100vh;
      overflow-y: auto;
      padding: 2.5rem 1.5rem;
      user-select: auto;
      display: block;
      font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }}

    .portal-container {{
      max-width: 1400px;
      margin: 0 auto;
    }}

    /* Portal Hero Header */
    .portal-header {{
      background: linear-gradient(135deg, #0f172a 0%, #070b14 100%);
      border: 1px solid rgba({accent_rgb}, 0.25);
      border-radius: var(--radius-xl);
      padding: 2.5rem 3rem;
      margin-bottom: 2rem;
      box-shadow: 0 25px 35px -5px rgba(0, 0, 0, 0.6);
      position: relative;
      overflow: hidden;
    }}

    .portal-header::before {{
      content: "";
      position: absolute;
      top: -120px;
      right: -100px;
      width: 380px;
      height: 380px;
      background: {hero_accent};
      border-radius: 50%;
      pointer-events: none;
    }}

    .hero-badge-row {{
      display: flex;
      gap: 0.8rem;
      align-items: center;
      margin-bottom: 1.2rem;
      flex-wrap: wrap;
    }}

    .hero-badge {{
      background: rgba({accent_rgb}, 0.12);
      color: {accent_color};
      border: 1px solid rgba({accent_rgb}, 0.35);
      padding: 0.35rem 0.95rem;
      border-radius: 9999px;
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }}

    .hero-badge-teacher {{
      background: rgba(245, 158, 11, 0.15);
      color: #fbbf24;
      border-color: rgba(245, 158, 11, 0.35);
    }}

    .hero-badge-fatih {{
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      border-color: rgba(99, 102, 241, 0.35);
    }}

    .portal-title {{
      font-size: 2.6rem;
      font-weight: 900;
      color: #ffffff;
      line-height: 1.2;
      margin-bottom: 0.9rem;
      letter-spacing: -0.5px;
    }}

    .portal-desc {{
      font-size: 1.15rem;
      color: #94a3b8;
      max-width: 950px;
      line-height: 1.65;
      margin-bottom: 2rem;
    }}

    .stats-row {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 1.2rem;
    }}

    .stat-card {{
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-md);
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }}

    .stat-val {{
      font-size: 2rem;
      font-weight: 900;
      color: #00f0ff;
      font-family: var(--font-mono);
    }}

    .stat-lbl {{
      font-size: 0.85rem;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}

    /* Kontrol Paneli */
    .controls-panel {{
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }}

    .search-input-box {{
      position: relative;
      display: flex;
      align-items: center;
    }}

    .search-input-box svg {{
      position: absolute;
      left: 1.2rem;
      color: #64748b;
    }}

    .search-input {{
      width: 100%;
      background: #070b14;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 1rem 1.2rem 1rem 3.2rem;
      font-family: var(--font-sans);
      font-size: 1.05rem;
      color: #f8fafc;
      transition: all 0.2s ease;
    }}

    .search-input:focus {{
      outline: none;
      border-color: {accent_color};
      box-shadow: 0 0 15px rgba({accent_rgb}, 0.25);
    }}

    .filter-tabs {{
      display: flex;
      gap: 0.6rem;
      flex-wrap: wrap;
    }}

    .filter-tab {{
      background: #070b14;
      border: 1px solid var(--border-subtle);
      color: #94a3b8;
      padding: 0.55rem 1.1rem;
      border-radius: 9999px;
      font-family: var(--font-sans);
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }}

    .filter-tab:hover {{
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.2);
    }}

    .filter-tab.active {{
      background: rgba({accent_rgb}, 0.15);
      border-color: {accent_color};
      color: {accent_color};
      font-weight: 700;
    }}

    /* Haftalar Izgarası */
    .weeks-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }}

    .week-card {{
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.2rem;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }}

    .week-card:hover {{
      transform: translateY(-6px);
      border-color: rgba({accent_rgb}, 0.4);
      box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.5);
    }}

    .week-card::before {{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: {card_stripe};
      opacity: 0;
      transition: opacity 0.2s ease;
    }}

    .week-card:hover::before {{
      opacity: 1;
    }}

    .card-meta-row {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
    }}

    .week-badge {{
      font-family: var(--font-mono);
      font-size: 0.82rem;
      font-weight: 800;
      color: {accent_color};
      background: rgba({accent_rgb}, 0.1);
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
    }}

    .card-date {{
      font-size: 0.85rem;
      color: #64748b;
    }}

    .card-unit {{
      font-size: 0.8rem;
      color: #94a3b8;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.5px;
      display: block;
      margin-bottom: 0.4rem;
    }}

    .card-title {{
      font-size: 1.35rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.3;
      margin-bottom: 0.4rem;
    }}

    .card-subtitle {{
      font-size: 0.95rem;
      color: #94a3b8;
      line-height: 1.5;
    }}

    .card-tags {{
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 0.8rem;
    }}

    .card-tag {{
      font-size: 0.75rem;
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.05);
      color: #cbd5e1;
      border: 1px solid var(--border-subtle);
    }}

    .card-tag-code {{
      font-family: var(--font-mono);
      color: #fbbf24;
      background: rgba(245, 158, 11, 0.1);
      border-color: rgba(245, 158, 11, 0.3);
    }}

    .card-actions {{
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 0.6rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);
    }}

    .btn-action {{
      padding: 0.65rem 1rem;
      border-radius: var(--radius-sm);
      font-family: var(--font-sans);
      font-size: 0.92rem;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }}

    .btn-launch {{
      background: {btn_launch_bg};
      color: #ffffff;
    }}

    .btn-launch:hover {{
      background: {btn_launch_hover};
      box-shadow: 0 0 15px rgba({accent_rgb}, 0.4);
    }}

    .btn-print-card {{
      background: rgba(255, 255, 255, 0.05);
      color: #94a3b8;
      border: 1px solid var(--border-subtle);
    }}

    .btn-print-card:hover {{
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.25);
    }}

    /* Alt Kılavuz */
    .guide-box {{
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.8rem 2.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
    }}

    .guide-desc {{
      color: #94a3b8;
      font-size: 0.95rem;
    }}

    .guide-keys {{
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
    }}

    .key-badge {{
      background: #070b14;
      border: 1px solid var(--border-subtle);
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: {accent_color};
      font-weight: 700;
    }}

    .theme-segmented-control {{
      display: inline-flex;
      background: rgba(0, 0, 0, 0.4);
      padding: 0.25rem;
      border-radius: 9999px;
      border: 1px solid var(--border-subtle);
    }}

    .theme-pill-btn {{
      background: transparent;
      border: none;
      color: #94a3b8;
      padding: 0.35rem 0.9rem;
      border-radius: 9999px;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.2s ease;
    }}

    .theme-pill-btn.active {{
      background: var(--bg-surface-elevated);
      color: #00f0ff;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    }}

    /* Light Mode Overrides for Portal - Yüksek Kontrast & Net Okunabilirlik */
    [data-theme="light"] body {{
      background: #f8fafc !important;
      color: #0f172a !important;
    }}

    [data-theme="light"] .portal-header {{
      background: linear-gradient(135deg, #ffffff 0%, #eff6ff 100%) !important;
      border: 1.5px solid #cbd5e1 !important;
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.05) !important;
    }}

    [data-theme="light"] .hero-badge {{
      background: #ede9fe !important;
      color: #5b21b6 !important;
      border: 1.5px solid #c4b5fd !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .hero-badge-teacher {{
      background: #fef3c7 !important;
      color: #92400e !important;
      border: 1.5px solid #fde68a !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .hero-badge-fatih {{
      background: #e0e7ff !important;
      color: #3730a3 !important;
      border: 1.5px solid #c7d2fe !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .portal-title {{
      color: #0f172a !important;
      font-weight: 900 !important;
    }}

    [data-theme="light"] .portal-desc {{
      color: #334155 !important;
      font-weight: 500 !important;
    }}

    [data-theme="light"] .stat-card {{
      background: #ffffff !important;
      border: 1.5px solid #e2e8f0 !important;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;
    }}

    [data-theme="light"] .stat-val {{
      color: #4338ca !important;
      font-weight: 900 !important;
    }}

    [data-theme="light"] .stat-lbl {{
      color: #475569 !important;
      font-weight: 700 !important;
    }}

    [data-theme="light"] .controls-panel {{
      background: #ffffff !important;
      border: 1.5px solid #e2e8f0 !important;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;
    }}

    [data-theme="light"] .search-input {{
      background: #ffffff !important;
      border: 1.5px solid #cbd5e1 !important;
      color: #0f172a !important;
    }}

    [data-theme="light"] .search-input::placeholder {{
      color: #64748b !important;
    }}

    [data-theme="light"] .search-input-box svg {{
      color: #475569 !important;
    }}

    [data-theme="light"] .search-input:focus {{
      border-color: #4f46e5 !important;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15) !important;
    }}

    [data-theme="light"] .filter-tab {{
      background: #ffffff !important;
      border: 1.5px solid #cbd5e1 !important;
      color: #334155 !important;
      font-weight: 600 !important;
    }}

    [data-theme="light"] .filter-tab:hover {{
      background: #f1f5f9 !important;
      color: #0f172a !important;
      border-color: #94a3b8 !important;
    }}

    [data-theme="light"] .filter-tab.active {{
      background: #4f46e5 !important;
      border-color: #4338ca !important;
      color: #ffffff !important;
      font-weight: 700 !important;
      box-shadow: 0 2px 6px rgba(79, 70, 229, 0.25) !important;
    }}

    [data-theme="light"] .week-card {{
      background: #ffffff !important;
      border: 1.5px solid #e2e8f0 !important;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05) !important;
    }}

    [data-theme="light"] .week-card:hover {{
      border-color: #6366f1 !important;
      box-shadow: 0 12px 28px rgba(79, 70, 229, 0.12) !important;
    }}

    [data-theme="light"] .week-badge {{
      background: #ede9fe !important;
      color: #5b21b6 !important;
      border: 1px solid #ddd6fe !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .card-date {{
      color: #475569 !important;
      font-weight: 600 !important;
    }}

    [data-theme="light"] .card-unit {{
      color: #4338ca !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .card-title {{
      color: #0f172a !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .card-subtitle {{
      color: #334155 !important;
      font-weight: 500 !important;
    }}

    [data-theme="light"] .card-tag {{
      background: #f1f5f9 !important;
      color: #1e293b !important;
      border: 1px solid #cbd5e1 !important;
      font-weight: 600 !important;
    }}

    [data-theme="light"] .card-tag-code {{
      background: #fef3c7 !important;
      color: #92400e !important;
      border: 1px solid #fde68a !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .card-actions {{
      border-top: 1.5px solid #e2e8f0 !important;
    }}

    [data-theme="light"] .btn-launch {{
      background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%) !important;
      color: #ffffff !important;
      font-weight: 700 !important;
      box-shadow: 0 2px 6px rgba(79, 70, 229, 0.25) !important;
    }}

    [data-theme="light"] .btn-launch:hover {{
      background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%) !important;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35) !important;
    }}

    [data-theme="light"] .btn-print-card {{
      background: #f8fafc !important;
      color: #1e293b !important;
      border: 1.5px solid #cbd5e1 !important;
      font-weight: 700 !important;
    }}

    [data-theme="light"] .btn-print-card:hover {{
      background: #e2e8f0 !important;
      color: #0f172a !important;
      border-color: #94a3b8 !important;
    }}

    [data-theme="light"] .guide-box {{
      background: #ffffff !important;
      border: 1.5px solid #e2e8f0 !important;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;
    }}

    [data-theme="light"] .guide-desc {{
      color: #334155 !important;
      font-weight: 500 !important;
    }}

    [data-theme="light"] .key-badge {{
      background: #f1f5f9 !important;
      border: 1.5px solid #cbd5e1 !important;
      color: #4338ca !important;
      font-weight: 800 !important;
    }}

    [data-theme="light"] .theme-segmented-control {{
      background: #e2e8f0 !important;
      border: 1.5px solid #cbd5e1 !important;
    }}

    [data-theme="light"] .theme-pill-btn {{
      color: #475569 !important;
      font-weight: 700 !important;
    }}

    [data-theme="light"] .theme-pill-btn:hover {{
      color: #0f172a !important;
    }}

    [data-theme="light"] .theme-pill-btn.active {{
      background: #ffffff !important;
      color: #4338ca !important;
      box-shadow: 0 2px 6px rgba(15, 23, 42, 0.15) !important;
    }}
  </style>
</head>
<body>
  <div class="portal-container">
    
    <!-- HERO HEADER -->
    <header class="portal-header">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div class="hero-badge-row">
          <span class="hero-badge">⚡ {grade_name} BİLİŞİM EĞİTİMİ</span>
          <span class="hero-badge hero-badge-teacher">👨‍🏫 ÖĞRETMEN: VAHİT KESKİN</span>
          <span class="hero-badge hero-badge-fatih">🎯 FATİH AKILLI TAHTA & DOKUNMATİK</span>
          <span class="hero-badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border-color: rgba(16, 185, 129, 0.35);">📅 2026 - 2027 EĞİTİM YILI</span>
        </div>

        <div class="theme-switch-wrapper">
          <div class="theme-segmented-control" role="radiogroup" aria-label="Görünüm Teması">
            <button type="button" class="theme-pill-btn active" data-theme-val="light" title="Açık Mod (Varsayılan)" aria-checked="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              <span>Açık</span>
            </button>
            <button type="button" class="theme-pill-btn" data-theme-val="dark" title="Kapalı Mod" aria-checked="false">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              <span>Kapalı</span>
            </button>
            <button type="button" class="theme-pill-btn" data-theme-val="system" title="Sistem Modu" aria-checked="false">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <span>Sistem</span>
            </button>
          </div>
        </div>
      </div>

      <h1 class="portal-title">{grade_name} {course_name} Yıllık Sunum Portalı</h1>
      <p class="portal-desc">
        Milli Eğitim Bakanlığı Türkiye Yüzyılı Maarif Modeli müfredatına tam uyumlu; Fatih Akıllı Tahta dokunmatik ekranları için optimize edilmiş, kod blokları, zengin SVG infografikleri, interaktif testler ve sınıf içi atölyeler içeren 41 haftalık eksiksiz lise sunum arşivi.
      </p>

      <div class="stats-row">
        <div class="stat-card">
          <span class="stat-val">41</span>
          <span class="stat-lbl">Haftalık Sunum</span>
        </div>
        <div class="stat-card">
          <span class="stat-val">6</span>
          <span class="stat-lbl">Temel Öğrenme Alanı</span>
        </div>
        <div class="stat-card">
          <span class="stat-val">328+</span>
          <span class="stat-lbl">İnteraktif Slayt</span>
        </div>
        <div class="stat-card">
          <span class="stat-val">100%</span>
          <span class="stat-lbl">Akıllı Tahta & PDF Uyumlu</span>
        </div>
      </div>
    </header>

    <!-- KONTROL PANELİ -->
    <div class="controls-panel">
      <div class="search-input-box">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="searchInput" class="search-input" placeholder="Konu, kazanım kodu, anahtar kelime veya ünite arayın (Örn: Python, Algoritma, Nesne, IoT, Döngüler, Fonksiyon)...">
      </div>

      <div class="filter-tabs">
        <button class="filter-tab active" data-filter="all">Tüm Haftalar (41)</button>
        <button class="filter-tab" data-filter="term1">1. Dönem (1 - 19)</button>
        <button class="filter-tab" data-filter="term2">2. Dönem (20 - 41)</button>
        {unit_tabs}
      </div>
    </div>

    <!-- HAFTALAR IZGARASI -->
    <div class="weeks-grid" id="weeksGrid"></div>

    <!-- KULLANIM KILAVUZU -->
    <div class="guide-box">
      <div>
        <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.3rem;">Akıllı Tahta & Klavye Kısayolları Kılavuzu</h4>
        <p class="guide-desc">Sınıfta ders işlerken ekrana dokunarak veya klavyenizden sunumu saniyeler içinde yönetebilirsiniz.</p>
      </div>
      <div class="guide-keys">
        <div><span class="key-badge">Space / ▶</span> <span class="guide-desc">Sonraki Slayt</span></div>
        <div><span class="key-badge">◀</span> <span class="guide-desc">Önceki Slayt</span></div>
        <div><span class="key-badge">F</span> <span class="guide-desc">Tam Ekran</span></div>
        <div><span class="key-badge">O</span> <span class="guide-desc">Genel Bakış</span></div>
        <div><span class="key-badge">T</span> <span class="guide-desc">Tema Değiştir</span></div>
        <div><span class="key-badge">P</span> <span class="guide-desc">PDF Yazdır</span></div>
        <div><span class="key-badge">Kaydır (Swipe)</span> <span class="guide-desc">Dokunmatik Geçiş</span></div>
      </div>
    </div>

  </div>

  <!-- VERİ DOSYALARI -->
  <script src="curriculum-term1.js"></script>
  <script src="curriculum-term1-part2.js"></script>
  <script src="curriculum-term2-part1.js"></script>
  <script src="curriculum-term2-part2.js"></script>
  <script src="curriculum-data.js"></script>

  <script>
    document.addEventListener('DOMContentLoaded', () => {{
      const grid = document.getElementById('weeksGrid');
      const searchInput = document.getElementById('searchInput');
      const filterTabs = document.querySelectorAll('.filter-tab');

      let currentFilter = 'all';
      let searchQuery = '';

      function getWeekFilename(w) {{
        const padded = w.week < 10 ? '0' + w.week : w.week;
        return `Hafta_${{padded}}.html`;
      }}

      function renderWeeks() {{
        grid.innerHTML = '';

        const filtered = CURRICULUM_DATA.filter(w => {{
          if (currentFilter === 'term1' && w.week > 19) return false;
          if (currentFilter === 'term2' && w.week <= 19) return false;
          if (currentFilter.startsWith('unite-') && w.unitTheme !== currentFilter) return false;

          if (searchQuery.trim() !== '') {{
            const query = searchQuery.toLowerCase();
            const textToSearch = `${{w.week}} ${{w.title}} ${{w.subtitle}} ${{w.unit}} ${{w.outcomeCode}} ${{w.targetSkill}} ${{w.roadmap.map(r=>r.title+' '+r.desc).join(' ')}}`.toLowerCase();
            if (!textToSearch.includes(query)) return false;
          }}

          return true;
        }});

        if (filtered.length === 0) {{
          grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
              <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: #ffffff;">Aramanızla Eşleşen Hafta Bulunamadı</h3>
              <p style="color: #94a3b8;">"${{searchQuery}}" için farklı bir arama terimi deneyin veya filtreleri temizleyin.</p>
            </div>
          `;
          return;
        }}

        filtered.forEach(w => {{
          const card = document.createElement('div');
          card.className = 'week-card';
          
          const filename = getWeekFilename(w);
          const termBadge = w.week <= 19 ? '1. Dönem' : '2. Dönem';

          card.innerHTML = `
            <div class="card-top">
              <div class="card-meta-row">
                <span class="week-badge">${{w.week}}. Hafta • ${{termBadge}}</span>
                <span class="card-date">${{w.date}}</span>
              </div>
              <span class="card-unit">${{w.unitBadge || w.unit}}</span>
              <h3 class="card-title">${{w.title}}</h3>
              <p class="card-subtitle">${{w.subtitle}}</p>
              <div class="card-tags">
                <span class="card-tag card-tag-code">${{w.outcomeCode}}</span>
                <span class="card-tag">${{w.targetSkill}}</span>
                <span class="card-tag">${{w.hours || '2 Saat'}}</span>
              </div>
            </div>
            <div class="card-actions">
              <a href="${{filename}}" class="btn-action btn-launch">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Sunumu Başlat
              </a>
              <a href="${{filename}}?print=true" class="btn-action btn-print-card" target="_blank" title="Yazdır veya PDF Kaydet">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                PDF
              </a>
            </div>
          `;

          grid.appendChild(card);
        }});
      }}

      searchInput.addEventListener('input', (e) => {{
        searchQuery = e.target.value;
        renderWeeks();
      }});

      filterTabs.forEach(tab => {{
        tab.addEventListener('click', () => {{
          filterTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          currentFilter = tab.dataset.filter;
          renderWeeks();
        }});
      }});

      renderWeeks();
    }});
  </script>
  <script src="theme-manager.js"></script>
</body>
</html>
"""

def create_curriculum_data_combiner(grade_name, course_name):
    return f"""/**
 * MEB {grade_name} {course_name} - Yıllık Müfredat Veri Birleştirici (41 Hafta)
 * 2026/2027 Eğitim-Öğretim Yılı MEB Bilişim Teknolojileri & Bilgisayar Bilimi Dersi
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_DATA = [
  ...CURRICULUM_TERM_1_PART1,
  ...CURRICULUM_TERM_1_PART2,
  ...CURRICULUM_TERM_2_PART1,
  ...CURRICULUM_TERM_2_PART2
];

console.log("{grade_name} {course_name} Müfredat Verisi Başarıyla Yüklendi. Toplam Hafta Sayısı:", CURRICULUM_DATA.length);
"""
