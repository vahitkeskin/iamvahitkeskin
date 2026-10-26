/**
 * 1. Sınıf Serbest Etkinlikler - Slayt Derleyici (Builder)
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
          ${weekData.unitBadge || '1. Sınıf Serbest Etkinlikler'}
        </div>
        <h1 class="cover-title">${weekData.title}</h1>
        <p class="cover-subtitle">${weekData.subtitle}</p>
        
        <div class="cover-curiosity-box">
          <span style="font-size: 2.2rem;">🌟</span>
          <div>
            <strong>Günün Merak ve Keşif Sorusu:</strong>
            <span style="font-size: 1.15rem; color: #ffffff;">${weekData.curiosityQuestion}</span>
          </div>
        </div>

        <div class="cover-meta-grid">
          <div class="cover-meta-item">
            <span class="meta-label">Süreç / Tarih</span>
            <span class="meta-value">${weekData.week}. Hafta (${weekData.date})</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Ders Süresi</span>
            <span class="meta-value">${weekData.hours || '4 Ders Saati'}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Gelişim Alanı</span>
            <span class="meta-value">${weekData.outcomeCode || 'İletişim & Oyun'}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Hedef Beceri</span>
            <span class="meta-value">${weekData.targetSkill}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 2: YOL HARİTASI VE ETKİNLİK ADIMLARI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || 'Serbest Etkinlikler'}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
            <span class="badge badge-code">${weekData.hours || '4 Saat'}</span>
          </div>
          <h2 class="slide-title">Haftanın Eğlenceli Macera Haritası</h2>
          <p class="slide-subtitle">Bu hafta sınıfta ve bahçede hangi neşeli etkinlikleri yapacağız?</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="roadmap-grid">
          ${weekData.roadmap.map((step, idx) => `
            <div class="roadmap-card">
              <div class="roadmap-step">${idx + 1}</div>
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SLAYT 3: 1. ETKİNLİK & ÖZEL VEKTÖREL SVG İLLÜSTRASYONU -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">1. Etkinlik</span>
            <span class="badge badge-week">Görsel Öğrenme</span>
          </div>
          <h2 class="slide-title">${weekData.section1.title}</h2>
          <p class="slide-subtitle">${weekData.section1.subtitle}</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="split-layout">
          <div class="info-card-container">
            <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
              <span style="font-size: 2rem;">${weekData.section1.card.icon || '🎨'}</span>
              <h3 style="font-size: 1.4rem; color: #ffffff;">${weekData.section1.card.title}</h3>
            </div>
            <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.2rem;">
              ${weekData.section1.card.desc}
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${weekData.section1.card.items.map(item => `
                <div style="background: rgba(255,255,255,0.04); border-left: 3px solid var(--primary); padding: 0.6rem 0.9rem; border-radius: 4px;">
                  <strong style="color: var(--primary); font-size: 0.95rem;">${item.bold}:</strong>
                  <span style="color: #cbd5e1; font-size: 0.92rem;"> ${item.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="visual-container">
            ${weekData.section1.diagramSvg}
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 4: 2. VE 3. ETKİNLİK KARTLARI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Etkinlik İstasyonları</span>
            <span class="badge badge-week">Keşif &amp; Eğlence</span>
          </div>
          <h2 class="slide-title">${weekData.section2.title}</h2>
          <p class="slide-subtitle">${weekData.section2.subtitle}</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="cards-triad">
          ${weekData.section2.cards.map(card => `
            <div class="content-card">
              <span class="card-badge">${card.badge}</span>
              <h3>${card.title}</h3>
              <p>${card.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SLAYT 5: SINIF İÇİ OYUN & UYGULAMA ATÖLYESİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Uygulama Zamanı</span>
            <span class="badge badge-code">Birlikte Oynuyoruz</span>
          </div>
          <h2 class="slide-title">${weekData.workshop.title}</h2>
          <p class="slide-subtitle">${weekData.workshop.desc}</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="workshop-container">
          <div class="workshop-steps">
            <h3 style="font-size: 1.3rem; color: #ffffff; margin-bottom: 0.4rem;">🎯 Oyun ve Etkinlik Adımları:</h3>
            ${weekData.workshop.steps.map((st, i) => `
              <div class="workshop-step-item">
                <div class="step-num">${i + 1}</div>
                <div>
                  <strong style="color: #ffffff; font-size: 1.05rem; display: block; margin-bottom: 0.2rem;">${st.title}</strong>
                  <span style="color: var(--text-muted); font-size: 0.95rem;">${st.desc}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.5rem;">⭐</span>
              <h4 style="color: var(--primary); font-size: 1.15rem; font-weight: 800;">Başarı Kriterleri</h4>
            </div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-top: 0.4rem;">
              ${weekData.workshop.criteria.map(crit => `
                <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.92rem; color: #e2e8f0;">
                  <span style="color: var(--success); font-weight: bold;">✔</span>
                  <span>${crit}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 6: KÜÇÜK YILDIZLAR REHBERİ VE GÖRGÜ/GÜVENLİK KURALLARI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Rehber</span>
            <span class="badge badge-week">Görgü &amp; Güvenlik</span>
          </div>
          <h2 class="slide-title">Küçük Yıldızlar Rehberi</h2>
          <p class="slide-subtitle">Birlikte oynarken ve üretirken nelere dikkat etmeliyiz?</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="split-layout">
          <div style="background: var(--bg-surface); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-lg); padding: 1.8rem; box-shadow: var(--shadow-card); display: flex; flex-direction: column; justify-content: center;">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.2rem;">
              <span style="font-size: 1.8rem;">🤝</span>
              <h3 style="color: var(--success); font-size: 1.35rem; font-weight: 800;">${weekData.tips.safetyTitle}</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${weekData.tips.safetyRules.map(r => `
                <div style="background: rgba(16, 185, 129, 0.08); border-left: 3px solid var(--success); padding: 0.75rem 1rem; border-radius: 4px;">
                  <strong style="color: #34d399; font-size: 1rem; display: block; margin-bottom: 0.2rem;">${r.bold}</strong>
                  <span style="color: #cbd5e1; font-size: 0.95rem;">${r.text}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: var(--radius-lg); padding: 1.8rem; box-shadow: var(--shadow-card); display: flex; flex-direction: column; justify-content: center;">
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.2rem;">
              <span style="font-size: 1.8rem;">💡</span>
              <h3 style="color: #f87171; font-size: 1.35rem; font-weight: 800;">Bunu Biliyor muydunuz?</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${weekData.tips.myths.map(m => `
                <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; padding: 0.75rem 1rem; border-radius: 4px;">
                  <div style="color: #fca5a5; font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>❌ Yanlış Düşünce:</strong> ${m.wrong}</div>
                  <div style="color: #34d399; font-size: 0.95rem;"><strong>✅ Doğrusu:</strong> ${m.correct}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: İNTERAKTİF SINIF QUIZ'İ / EĞLENCELİ BİLMECE -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Haftanın Sorusu</span>
            <span class="badge badge-week">Akıllı Tahta Quiz'i</span>
          </div>
          <h2 class="slide-title">Kim Doğru Cevabı Bilecek?</h2>
          <p class="slide-subtitle">Soruyu dinleyin, tahtada doğru cevaba dokunun ve alkışı kapın!</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="quiz-wrapper">
          <div class="quiz-question-box">
            <p class="quiz-question-text">${weekData.quiz.question}</p>
          </div>

          <div class="quiz-options-grid">
            ${weekData.quiz.options.map((opt, i) => `
              <button class="quiz-btn" data-correct="${opt.isCorrect}">
                <span style="background: rgba(255,255,255,0.1); width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900;">${String.fromCharCode(65 + i)}</span>
                <span>${opt.text}</span>
              </button>
            `).join('')}
          </div>

          <div class="quiz-explanation">
            ${weekData.quiz.explanation}
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 8: HAFTALIK ÖZET VE KUTLAMA -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Haftanın Özeti</span>
            <span class="badge badge-week">Aferin Çocuklar!</span>
          </div>
          <h2 class="slide-title">Bu Hafta Neler Başardık?</h2>
          <p class="slide-subtitle">Öğrendiklerimizi hatırlayalım ve haftanın yıldızı olalım!</p>
        </div>
      </div>

      <div class="slide-body">
        <div class="split-layout">
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.8rem; box-shadow: var(--shadow-card); display: flex; flex-direction: column; justify-content: space-around;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span style="font-size: 1.8rem;">🎉</span>
              <h3 style="font-size: 1.35rem; color: #ffffff;">Haftanın 3 Altın Kuralı</h3>
            </div>
            ${weekData.summaryRules.map(r => `
              <div style="display: flex; align-items: flex-start; gap: 0.8rem; background: rgba(255,255,255,0.03); padding: 0.8rem 1.1rem; border-radius: var(--radius-md);">
                <span style="color: var(--primary); font-size: 1.2rem;">⭐</span>
                <div>
                  <strong style="color: #ffffff; font-size: 1.05rem;">${r.bold}:</strong>
                  <span style="color: var(--text-muted); font-size: 0.98rem;"> ${r.text}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(56, 189, 248, 0.08) 100%); border: 2px dashed rgba(245, 158, 11, 0.4); border-radius: var(--radius-lg); padding: 1.8rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
                <span style="font-size: 1.8rem;">🏡</span>
                <h4 style="font-size: 1.25rem; color: var(--primary); font-weight: 800;">Evde Sevgi ve Oyun Görevi</h4>
              </div>
              <p style="font-size: 1.1rem; color: #ffffff; line-height: 1.6;">
                ${weekData.homework}
              </p>
            </div>

            <div style="background: rgba(0,0,0,0.3); border-radius: var(--radius-md); padding: 1rem 1.2rem; border-left: 4px solid var(--secondary);">
              <span style="font-size: 0.8rem; color: var(--text-sub); text-transform: uppercase; font-weight: 700;">Gelecek Hafta Bizi Ne Bekliyor?</span>
              <div style="font-size: 1.15rem; color: var(--secondary); font-weight: 800; margin-top: 0.2rem;">
                ${weekData.nextWeekPreview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ALT KONTROL VE HUD BARI -->
    <div class="hud-bar">
      <div class="hud-controls-group">
        <button class="hud-btn btn-prev" title="Önceki Slayt (Sol Ok / PageUp)">◀ Önceki</button>
        <button class="hud-btn btn-next hud-btn-primary" title="Sonraki Slayt (Sağ Ok / Space)">Sonraki ▶</button>
      </div>

      <div class="hud-progress-container">
        <div class="hud-progress-bar"></div>
      </div>

      <div class="hud-controls-group">
        <span class="hud-slide-count">1 / 8</span>
        <button class="hud-btn btn-overview" title="Tüm Slaytları Gör (O)">☷ Genel Bakış</button>
        <button class="hud-btn btn-fullscreen" title="Tam Ekran (F)">⛶ Tam Ekran</button>
        <button class="hud-btn btn-print" title="Yazdır / PDF Kaydet (P)">🖨️ PDF</button>
        <button class="hud-btn btn-theme" id="btnThemeToggle" title="Tema: Açık / Kapalı / Sistem [T]" aria-label="Görünüm Teması">
          <span class="theme-btn-icon">☀️</span>
          <span class="theme-btn-text">Açık</span>
        </button>
      </div>
    </div>

    <!-- GENEL BAKIŞ MODALI -->
    <div class="overview-modal">
      <div style="max-width: 1400px; margin: 0 auto;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <h3 style="color: #ffffff; font-size: 1.4rem;">Slayt Genel Görünümü - ${weekData.week}. Hafta</h3>
          <button class="hud-btn btn-close-overview">✕ Kapat</button>
        </div>
        <div class="overview-grid"></div>
      </div>
    </div>
  `;

  if (window.ThemeManager) {
    window.ThemeManager.update();
  }

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
}

// Otomatik başlatıcı
window.addEventListener('DOMContentLoaded', () => {
  const currentWeekNum = parseInt(document.body.dataset.week, 10);
  if (!currentWeekNum) return;

  const data = typeof CURRICULUM_DATA_1 !== 'undefined' ? CURRICULUM_DATA_1 : (typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : []);
  const weekData = data.find(w => w.week === currentWeekNum);
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
});
