/**
 * 3. Sınıf Bilişim Teknolojileri ve Yazılım - Slayt Derleyici (Builder)
 * Haftalık müfredat verisini alıp 8 aşamalı görsel slayt destesine dönüştürür.
 * Öğretmen: Vahit Keskin
 */

function buildPresentation(weekData) {
  const deck = document.getElementById('presentation-deck');
  if (!deck || !weekData) return;

  deck.innerHTML = `
    <!-- SLAYT 1: KAPAK -->
    <section class="slide slide-cover active">
      <div class="cover-wrapper">
        <div class="cover-tag">
          ${weekData.unitBadge || weekData.unit}
        </div>
        <h1 class="cover-title">${weekData.title}</h1>
        <p class="cover-subtitle">${weekData.subtitle}</p>
        
        <div class="cover-curiosity-box">
          <span style="font-size: 1.6rem;">💡</span>
          <div><strong>Merak Sorusu:</strong> ${weekData.curiosityQuestion}</div>
        </div>

        <div class="cover-meta-grid">
          <div class="cover-meta-item">
            <span class="meta-label">Süreç / Tarih</span>
            <span class="meta-value">${weekData.week}. Hafta (${weekData.date})</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Ders Süresi</span>
            <span class="meta-value">${weekData.hours || '2 Ders Saati'}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Öğrenme Çıktısı</span>
            <span class="meta-value">${weekData.outcomeCode}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Hedef Beceri</span>
            <span class="meta-value">${weekData.targetSkill}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 2: YOL HARİTASI VE ANAHTAR KAVRAMLAR -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
            <span class="badge badge-code">${weekData.outcomeCode}</span>
          </div>
          <h2 class="slide-title">Haftanın Yol Haritası ve Keşif Adımları</h2>
          <p class="slide-subtitle">Bu hafta bilişim dersimizde hangi adımları keşfedeceğiz?</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="roadmap-grid">
          ${(weekData.roadmap || []).map((step, idx) => `
            <div class="roadmap-card">
              <div class="step-number">${idx + 1}</div>
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SLAYT 3: BÖLÜM 1 & GÖRSEL İNCELEME (SPLIT-VISUAL) -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">1. Keşif Adımı</span>
          </div>
          <h2 class="slide-title">${weekData.section1 ? weekData.section1.title : 'Temel Kavramlar'}</h2>
          <p class="slide-subtitle">${weekData.section1 ? weekData.section1.subtitle : 'Konunun özünü inceliyoruz.'}</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="split-visual">
          <div class="info-card">
            <div class="info-card-header">
              <div class="info-card-icon">${weekData.section1 && weekData.section1.card ? (weekData.section1.card.icon || '💻') : '💻'}</div>
              <h3 class="info-card-title">${weekData.section1 && weekData.section1.card ? weekData.section1.card.title : 'Önemli Bilgiler'}</h3>
            </div>
            <p class="info-card-desc">${weekData.section1 && weekData.section1.card ? (weekData.section1.card.desc || '') : ''}</p>
            <ul class="info-list">
              ${weekData.section1 && weekData.section1.card && weekData.section1.card.items ? weekData.section1.card.items.map(it => `
                <li class="info-list-item">
                  <span class="info-list-bullet">✦</span>
                  <div><strong>${it.bold}:</strong> ${it.text}</div>
                </li>
              `).join('') : ''}
            </ul>
          </div>

          <div class="visual-box">
            ${weekData.section1 ? (weekData.section1.svg || '') : ''}
            <div class="visual-caption">${weekData.section1 ? (weekData.section1.caption || '') : ''}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 4: BÖLÜM 2 & DERİNLEMESİNE İNCELEME -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">2. Keşif Adımı</span>
          </div>
          <h2 class="slide-title">${weekData.section2 ? weekData.section2.title : 'Detaylı İnceleme'}</h2>
          <p class="slide-subtitle">${weekData.section2 ? weekData.section2.subtitle : 'Örneklerle pekiştiriyoruz.'}</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="${weekData.section2 && weekData.section2.cards && weekData.section2.cards.length === 3 ? 'cards-grid-3' : 'cards-grid-2'}">
          ${weekData.section2 && weekData.section2.cards ? weekData.section2.cards.map(c => `
            <div class="card-item">
              <div class="card-item-header">
                <span class="card-item-icon">${c.icon || '📌'}</span>
                <h3 class="card-item-title">${c.title}</h3>
              </div>
              <p style="color: var(--text-sub); font-size: 0.95rem; line-height: 1.5;">${c.desc || ''}</p>
              ${c.items ? `
                <ul class="info-list" style="margin-top: 0.5rem;">
                  ${c.items.map(it => `
                    <li class="info-list-item">
                      <span class="info-list-bullet" style="color: var(--accent-coral);">•</span>
                      <div><strong>${it.bold}:</strong> ${it.text}</div>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('') : ''}
        </div>
      </div>
    </section>

    <!-- SLAYT 5: BİLİŞİM LABORATUVARI ATÖLYESİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week" style="background: rgba(16, 185, 129, 0.2); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.4);">Uygulama Zamanı</span>
          </div>
          <h2 class="slide-title">${weekData.workshop ? weekData.workshop.title : 'Laboratuvar Atölyesi'}</h2>
          <p class="slide-subtitle">${weekData.workshop ? weekData.workshop.subtitle : 'Bilgisayar başında öğrendiklerimizi hayata geçiriyoruz.'}</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="workshop-container">
          <div class="workshop-steps">
            ${weekData.workshop && weekData.workshop.steps ? weekData.workshop.steps.map((st, idx) => `
              <div class="workshop-step">
                <div class="workshop-step-num">${idx + 1}</div>
                <div class="workshop-step-content">
                  <h4>${st.title}</h4>
                  <p>${st.desc}</p>
                </div>
              </div>
            `).join('') : ''}
          </div>

          <div class="workshop-meta">
            <div class="workshop-badge-row">
              <span>🎯</span>
              <span>Başarı Kriterleri</span>
            </div>
            <ul class="criteria-list">
              ${weekData.workshop && weekData.workshop.criteria ? weekData.workshop.criteria.map(cr => `
                <li class="criteria-item">${cr}</li>
              `).join('') : ''}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 6: BİLİNÇLİ TEKNOLOJİ & MİT AVCISI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week" style="background: rgba(245, 158, 11, 0.2); color: #fde68a; border-color: rgba(245, 158, 11, 0.4);">Bilinçli Bilişimci</span>
          </div>
          <h2 class="slide-title">Bilinçli Teknoloji & Mit Avcısı</h2>
          <p class="slide-subtitle">Sağlıklı, güvenli ve doğru teknoloji kullanımı için ipuçları.</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="tips-grid">
          <div class="safety-box">
            <div class="safety-title">
              <span>🛡️</span>
              <span>${weekData.tips ? weekData.tips.safetyTitle : 'Bilinçli Kullanım Kuralları'}</span>
            </div>
            <ul class="info-list">
              ${weekData.tips && weekData.tips.safetyRules ? weekData.tips.safetyRules.map(r => `
                <li class="info-list-item">
                  <span class="info-list-bullet" style="color: #34d399;">✔</span>
                  <div><strong>${r.bold}:</strong> ${r.text}</div>
                </li>
              `).join('') : ''}
            </ul>
          </div>

          <div class="myths-box">
            <div class="myths-title">
              <span>🔍</span>
              <span>Doğru Bilinen Yanlışlar (Mitler)</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
              ${weekData.tips && weekData.tips.myths ? weekData.tips.myths.map(m => `
                <div class="myth-item">
                  <div class="myth-wrong">❌ ${m.wrong}</div>
                  <div class="myth-correct">✔ ${m.correct}</div>
                </div>
              `).join('') : ''}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: İNTERAKTİF BİLİŞİM TESTİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week" style="background: rgba(99, 102, 241, 0.2); color: var(--primary-light); border-color: rgba(99, 102, 241, 0.4);">Bilgi Sınavı</span>
          </div>
          <h2 class="slide-title">Haftanın Bilişim Sorusu</h2>
          <p class="slide-subtitle">Akıllı tahtada doğru cevabı seçerek kendini sına!</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="quiz-container">
          <div class="quiz-question">${weekData.quiz ? weekData.quiz.question : 'Bu haftaki konudan ne öğrendik?'}</div>
          <div class="quiz-options">
            ${weekData.quiz && weekData.quiz.options ? weekData.quiz.options.map(opt => `
              <button class="quiz-btn" data-correct="${opt.isCorrect}">
                ${opt.text}
              </button>
            `).join('') : ''}
          </div>
          <div class="quiz-feedback" data-explanation="${weekData.quiz ? (weekData.quiz.explanation || '') : ''}"></div>
        </div>
      </div>
    </section>

    <!-- SLAYT 8: HAFTALIK ÖZET & EV GÖREVİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week" style="background: rgba(244, 63, 94, 0.2); color: var(--accent-coral-light); border-color: rgba(244, 63, 94, 0.4);">Ders Sonu</span>
          </div>
          <h2 class="slide-title">Haftalık Özet ve Ev Görevi</h2>
          <p class="slide-subtitle">Bugün öğrendiklerimizi pekiştiriyor ve bir sonraki haftaya hazırlanıyoruz.</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="summary-grid">
          <div class="summary-card">
            <div class="summary-card-title">
              <span>📌</span>
              <span>Aklında Kalsın: 3 Altın Kural</span>
            </div>
            <ul class="info-list">
              ${weekData.summaryRules ? weekData.summaryRules.map(sr => `
                <li class="info-list-item">
                  <span class="info-list-bullet" style="color: var(--primary-light);">★</span>
                  <div><strong>${sr.bold}:</strong> ${sr.text}</div>
                </li>
              `).join('') : ''}
            </ul>
          </div>

          <div class="summary-card">
            <div class="summary-card-title">
              <span>🏡</span>
              <span>Ev Keşif Görevi</span>
            </div>
            <div class="homework-box">
              ${weekData.homework || 'Evde bu hafta öğrendiğin kavramları ailene anlat ve bir örnek göster.'}
            </div>
            ${weekData.nextWeekPreview ? `
              <div class="next-week-preview">
                <strong>Gelecek Hafta:</strong> ${weekData.nextWeekPreview}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </section>

    <!-- ALT HUD ÇUBUĞU -->
    <div class="deck-hud">
      <div class="hud-progress-bar"></div>
      <div class="hud-left">
        <a href="index.html" class="hud-home-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Haftalar Listesi
        </a>
        <span class="hud-slide-count">1 / 8</span>
      </div>
      <div class="hud-controls">
        <button class="hud-btn btn-prev">◀ Önceki</button>
        <button class="hud-btn hud-btn-primary btn-next">Sonraki ▶</button>
        <button class="hud-btn btn-overview" title="Genel Bakış (O)">⊞ Genel Bakış</button>
        <button class="hud-btn btn-fullscreen" title="Tam Ekran (F)">⛶ Tam Ekran</button>
        <button class="hud-btn btn-print" title="PDF Olarak Yazdır (P)">🖨️ PDF</button>
        <button class="hud-btn btn-theme" id="btnThemeToggle" title="Tema: Sistem / Açık / Koyu [T]" aria-label="Görünüm Teması">
          <span class="theme-btn-icon">🖥️</span>
          <span class="theme-btn-text">Sistem</span>
        </button>
      </div>
    </div>

    <!-- GENEL BAKIŞ MODALI -->
    <div class="overview-modal">
      <div class="overview-content">
        <div class="overview-header">
          <h3 class="overview-title">${weekData.week}. Hafta - Tüm Slaytlar</h3>
          <button class="btn-close-overview">✕ Kapat</button>
        </div>
        <div class="overview-grid"></div>
      </div>
    </div>
  `;

  if (window.ThemeManager) {
    window.ThemeManager.update();
  }
}

// Otomatik başlatıcı
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const weekFromUrl = parseInt(urlParams.get('week'), 10);
  const currentWeekNum = weekFromUrl || parseInt(document.body.dataset.week, 10);
  if (!currentWeekNum) return;

  const dataset = typeof CURRICULUM_DATA_3 !== 'undefined' ? CURRICULUM_DATA_3 : (typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : null);
  if (dataset) {
    const weekData = dataset.find(w => w.week === currentWeekNum);
    if (weekData) {
      buildPresentation(weekData);
      if (window.deck) {
        window.deck.init();
      } else if (typeof PresentationDeck !== 'undefined') {
        window.deck = new PresentationDeck();
      }
      if (window.ThemeManager) {
        window.ThemeManager.update();
      }
    }
  }
});
