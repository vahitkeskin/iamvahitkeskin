/**
 * 5. Sınıf Bilişim Teknolojileri ve Yazılım - Slayt Derleyici (Builder)
 * Haftalık müfredat verisini alıp 8 aşamalı görsel slayt destesine dönüştürür.
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
          <span style="font-size: 1.5rem;">💡</span>
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
          <h2 class="slide-title">Haftanın Yol Haritası ve Anahtar Kavramlar</h2>
          <p class="slide-subtitle">Bu hafta laboratuvarda hangi adımları takip edeceğiz?</p>
        </div>
      </div>

      <div class="cards-grid-4">
        ${weekData.roadmap.map((item, idx) => `
          <div class="feature-card">
            <div class="card-icon-header">
              <div class="card-icon-badge">${['🧭', '🔍', '⚙️', '🚀'][idx] || '📌'}</div>
              <h3 class="card-title">${item.title}</h3>
            </div>
            <p class="card-desc">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SLAYT 3: 1. KONU ODAĞI & GÖRSEL İNFOGRAFİK -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2 class="slide-title">${weekData.section1.title}</h2>
          <p class="slide-subtitle">${weekData.section1.subtitle}</p>
        </div>
      </div>

      ${weekData.section1.layout === 'split-visual' ? `
        <div class="visual-split-layout">
          <div class="feature-card">
            <div class="card-icon-header">
              <div class="card-icon-badge">${weekData.section1.card.icon || '💻'}</div>
              <h3 class="card-title">${weekData.section1.card.title}</h3>
            </div>
            <p class="card-desc">${weekData.section1.card.desc}</p>
            <ul class="card-list">
              ${weekData.section1.card.items.map(it => `
                <li><strong>${it.bold}:</strong> ${it.text}</li>
              `).join('')}
            </ul>
          </div>
          <div class="visual-box">
            ${weekData.section1.svg}
            <span class="visual-caption">${weekData.section1.caption || 'Kavramsal Görsel Şema'}</span>
          </div>
        </div>
      ` : `
        <div class="cards-grid-2">
          ${weekData.section1.cards.map(card => `
            <div class="feature-card">
              <div class="card-icon-header">
                <div class="card-icon-badge">${card.icon || '📌'}</div>
                <h3 class="card-title">${card.title}</h3>
              </div>
              <p class="card-desc">${card.desc}</p>
              <ul class="card-list">
                ${card.items.map(it => `
                  <li><strong>${it.bold}:</strong> ${it.text}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `}
    </section>

    <!-- SLAYT 4: 2. KONU ODAĞI & DERİNLEMESİNE BAKIŞ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2 class="slide-title">${weekData.section2.title}</h2>
          <p class="slide-subtitle">${weekData.section2.subtitle}</p>
        </div>
      </div>

      ${weekData.section2.layout === 'split-visual' ? `
        <div class="visual-split-layout">
          <div class="feature-card">
            <div class="card-icon-header">
              <div class="card-icon-badge">${weekData.section2.card.icon || '🧩'}</div>
              <h3 class="card-title">${weekData.section2.card.title}</h3>
            </div>
            <p class="card-desc">${weekData.section2.card.desc}</p>
            <ul class="card-list">
              ${weekData.section2.card.items.map(it => `
                <li><strong>${it.bold}:</strong> ${it.text}</li>
              `).join('')}
            </ul>
          </div>
          <div class="visual-box">
            ${weekData.section2.svg}
            <span class="visual-caption">${weekData.section2.caption || 'Şematik Anlatım'}</span>
          </div>
        </div>
      ` : weekData.section2.layout === 'cards-3' ? `
        <div class="cards-grid-3">
          ${weekData.section2.cards.map(card => `
            <div class="feature-card">
              <div class="card-icon-header">
                <div class="card-icon-badge">${card.icon || '⭐'}</div>
                <h3 class="card-title">${card.title}</h3>
              </div>
              <p class="card-desc">${card.desc}</p>
              <ul class="card-list">
                ${card.items.map(it => `
                  <li><strong>${it.bold}:</strong> ${it.text}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="cards-grid-2">
          ${weekData.section2.cards.map(card => `
            <div class="feature-card">
              <div class="card-icon-header">
                <div class="card-icon-badge">${card.icon || '⭐'}</div>
                <h3 class="card-title">${card.title}</h3>
              </div>
              <p class="card-desc">${card.desc}</p>
              <ul class="card-list">
                ${card.items.map(it => `
                  <li><strong>${it.bold}:</strong> ${it.text}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `}
    </section>

    <!-- SLAYT 5: BİLİŞİM LABORATUVARI VE UYGULAMA ATÖLYESİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Atölye Laboratuvarı</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2 class="slide-title">${weekData.workshop.title}</h2>
          <p class="slide-subtitle">${weekData.workshop.subtitle}</p>
        </div>
      </div>

      <div class="workshop-grid">
        ${weekData.workshop.steps.map((st, i) => `
          <div class="step-card">
            <div class="step-number">0${i + 1}</div>
            <h4 class="step-title">${st.title}</h4>
            <p class="card-desc">${st.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="criteria-box">
        <span class="criteria-badge">BAŞARI KRİTERLERİ</span>
        <div style="font-size: 0.92rem; color: #cbd5e1; display: flex; gap: 1.5rem; flex-wrap: wrap;">
          ${weekData.workshop.criteria.map(c => `<span>✓ ${c}</span>`).join('')}
        </div>
      </div>
    </section>

    <!-- SLAYT 6: İPUÇLARI, REHBER & DOĞRU BİLİNEN YANLIŞLAR -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Bilişim Rehberi</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2 class="slide-title">Altın Kurallar ve Doğru Bilinen Yanlışlar</h2>
          <p class="slide-subtitle">Sık yapılan hatalara düşmeyin, teknolojiyi bilinçli kullanın.</p>
        </div>
      </div>

      <div class="cards-grid-2">
        <div class="feature-card" style="border-left: 4px solid var(--emerald-400);">
          <div class="card-icon-header">
            <div class="card-icon-badge" style="background: rgba(16, 185, 129, 0.2); color: var(--emerald-400);">🛡️</div>
            <h3 class="card-title">${weekData.tips.safetyTitle || 'Günün Altın Kuralı'}</h3>
          </div>
          <p class="card-desc">Bilişim okuryazarlığında dikkat edilmesi gereken hayati noktalar:</p>
          <ul class="card-list">
            ${weekData.tips.safetyRules.map(sr => `
              <li><strong>${sr.bold}:</strong> ${sr.text}</li>
            `).join('')}
          </ul>
        </div>

        <div class="feature-card" style="border-left: 4px solid var(--rose-500);">
          <div class="card-icon-header">
            <div class="card-icon-badge" style="background: rgba(244, 63, 94, 0.2); color: var(--rose-500);">⚠️</div>
            <h3 class="card-title">Doğru Bilinen Yanlışlar (Efsaneler)</h3>
          </div>
          <p class="card-desc">Sıkça karıştırılan kavramlar ve bilimsel gerçekler:</p>
          <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 0.3rem;">
            ${weekData.tips.myths.map(m => `
              <div style="background: rgba(255, 255, 255, 0.03); padding: 0.8rem 1rem; border-radius: var(--radius-sm); border: 1px solid rgba(255, 255, 255, 0.06);">
                <div style="color: #fecdd3; font-size: 0.88rem; margin-bottom: 0.25rem;"><strong>✕ Yanlış:</strong> "${m.wrong}"</div>
                <div style="color: #a7f3d0; font-size: 0.88rem;"><strong>✓ Doğru:</strong> ${m.correct}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: İNTERAKTİF QUİZ / KONTROL NOKTASI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Günün Sorusu</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2 class="slide-title">Bilgi Kontrol Noktası (Mini Sınav)</h2>
          <p class="slide-subtitle">Öğrendiklerinizi pekiştirin; doğru seçeneği işaretleyin.</p>
        </div>
      </div>

      <div class="quiz-container">
        <div class="quiz-question-box">
          ${weekData.quiz.question}
        </div>

        <div class="quiz-options-grid">
          ${weekData.quiz.options.map((opt, oIdx) => `
            <button class="quiz-btn" data-correct="${opt.isCorrect}">
              <span>${['A', 'B', 'C', 'D'][oIdx]})</span>
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-explanation">
          ${weekData.quiz.explanation}
        </div>
      </div>
    </section>

    <!-- SLAYT 8: HAFTALIK ÖZET, ÖDEV VE GELECEK HAFTA -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Kapanış</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2 class="slide-title">Haftanın Özeti ve Gelecek Hafta</h2>
          <p class="slide-subtitle">Bugün neler öğrendik, haftaya bizi ne bekliyor?</p>
        </div>
      </div>

      <div class="cards-grid-3">
        <div class="feature-card">
          <div class="card-icon-header">
            <div class="card-icon-badge">🎯</div>
            <h3 class="card-title">3 Anahtar Çıkarım</h3>
          </div>
          <ul class="card-list">
            ${weekData.summaryRules.map(sr => `
              <li><strong>${sr.bold}:</strong> ${sr.text}</li>
            `).join('')}
          </ul>
        </div>

        <div class="feature-card" style="border-top: 3px solid var(--amber-400);">
          <div class="card-icon-header">
            <div class="card-icon-badge" style="background: rgba(245, 158, 11, 0.2); color: var(--amber-400);">📝</div>
            <h3 class="card-title">Haftanın Keşif Görevi</h3>
          </div>
          <p class="card-desc" style="font-size: 0.98rem; color: #fde68a; line-height: 1.6;">
            ${weekData.homework}
          </p>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: auto;">
            💡 Not defterinize 2-3 cümleyle not alıp bir sonraki derse getirin.
          </div>
        </div>

        <div class="feature-card" style="border-top: 3px solid var(--cyan-400);">
          <div class="card-icon-header">
            <div class="card-icon-badge" style="background: rgba(34, 211, 238, 0.2); color: var(--cyan-400);">🚀</div>
            <h3 class="card-title">Gelecek Hafta Fragmanı</h3>
          </div>
          <p class="card-desc" style="font-size: 1rem; color: #e2e8f0; line-height: 1.6;">
            <strong>${weekData.week + 1}. Hafta:</strong><br>
            ${weekData.nextWeekPreview}
          </p>
          <div style="font-size: 0.8rem; color: var(--cyan-400); margin-top: auto;">
            ✨ Yeni bir dijital macera bizi bekliyor!
          </div>
        </div>
      </div>
    </section>

    <!-- ALT GEZİNME BAR (HUD) -->
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
        <button class="hud-btn btn-theme" id="btnThemeToggle" title="Tema Değiştir (Açık/Koyu/Sistem) [T]">
          <span class="theme-btn-icon">🖥️</span>
          <span class="theme-btn-text">Sistem</span>
        </button>
        <button class="hud-btn btn-fullscreen" title="Tam Ekran (F)">⛶ Tam Ekran</button>
        <button class="hud-btn btn-print" title="PDF Olarak Yazdır (P)">🖨️ PDF</button>
      </div>
    </div>

    <!-- GENEL BAKIŞ MODALI -->
    <div class="overview-modal">
      <div class="overview-content">
        <div class="overview-header">
          <h3 style="color: #ffffff; font-size: 1.25rem;">Slayt Genel Görünümü - ${weekData.week}. Hafta</h3>
          <button class="hud-btn btn-close-overview">✕ Kapat</button>
        </div>
        <div class="overview-grid"></div>
      </div>
    </div>
  `;

  // Quiz butonlarını bağla
  const quizButtons = deck.querySelectorAll('.quiz-btn');
  const explanationBox = deck.querySelector('.quiz-explanation');

  quizButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.dataset.correct === 'true';
      quizButtons.forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') {
          b.classList.add('correct');
        } else if (b === btn) {
          b.classList.add('wrong');
        }
      });
      if (explanationBox) {
        explanationBox.classList.add('show');
      }
    });
  });

  if (window.ThemeManager) {
    window.ThemeManager.update();
  }
}

// Otomatik başlatıcı
window.addEventListener('DOMContentLoaded', () => {
  const currentWeekNum = parseInt(document.body.dataset.week, 10);
  if (!currentWeekNum) return;

  if (typeof CURRICULUM_DATA_5 !== 'undefined') {
    const weekData = CURRICULUM_DATA_5.find(w => w.week === currentWeekNum);
    if (weekData) {
      buildPresentation(weekData);
      // Motoru yeniden bağla
      if (window.deck) {
        window.deck.init();
      }
    }
  }
});
