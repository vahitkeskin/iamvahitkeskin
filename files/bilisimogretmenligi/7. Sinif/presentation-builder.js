/**
 * 7. Sınıf Teknoloji ve Tasarım - Slayt Derleyici (Builder)
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
          <span style="font-size: 1.5rem;">💡</span>
          <div><strong>Merak ve Tasarım Sorusu:</strong> ${weekData.curiosityQuestion}</div>
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
            <span class="meta-label">Hedef Tasarım Becerisi</span>
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
          <h2 class="slide-title">Haftanın Tasarım Yol Haritası</h2>
          <p class="slide-subtitle">Bu hafta atölyemizde ve laboratuvarımızda hangi adımları takip edeceğiz?</p>
        </div>
      </div>

      <div class="cards-grid-4">
        ${weekData.roadmap.map((step, idx) => `
          <div class="card-roadmap">
            <span class="roadmap-step">ADIM 0${idx + 1}</span>
            <h3 class="roadmap-title">${step.title}</h3>
            <p class="roadmap-desc">${step.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="hud-bar">
        <div class="hud-progress-wrapper">
          <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
          <span class="hud-slide-count">2 / 8</span>
        </div>
        <div class="hud-controls">
          <button class="hud-btn btn-prev">← Geri</button>
          <button class="hud-btn btn-overview">☰ Genel Bakış</button>
          <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
          <button class="hud-btn hud-btn-primary btn-next">İleri →</button>
        </div>
      </div>
    </section>

    <!-- SLAYT 3: DETAYLI KONU ANLATIMI 1 (GÖRSEL ŞEMA & KAVRAM) -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-code">${weekData.outcomeCode}</span>
          </div>
          <h2 class="slide-title">${weekData.section1.title}</h2>
          <p class="slide-subtitle">${weekData.section1.subtitle}</p>
        </div>
      </div>

      <div class="split-content">
        <div class="text-panel">
          <div class="info-card-highlight">
            <h3><span>${weekData.section1.card.icon || '📌'}</span> ${weekData.section1.card.title}</h3>
            <p>${weekData.section1.card.desc}</p>
          </div>
          <ul class="concept-bullets">
            ${weekData.section1.card.items.map(item => `
              <li>
                <span class="bullet-dot"></span>
                <div><strong>${item.bold}:</strong> ${item.text}</div>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="visual-panel">
          ${weekData.section1.svg}
        </div>
      </div>

      <div class="hud-bar">
        <div class="hud-progress-wrapper">
          <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
          <span class="hud-slide-count">3 / 8</span>
        </div>
        <div class="hud-controls">
          <button class="hud-btn btn-prev">← Geri</button>
          <button class="hud-btn btn-overview">☰ Genel Bakış</button>
          <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
          <button class="hud-btn hud-btn-primary btn-next">İleri →</button>
        </div>
      </div>
    </section>

    <!-- SLAYT 4: DETAYLI KONU ANLATIMI 2 (UYGULAMA VE İLKELER) -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-code">${weekData.targetSkill}</span>
          </div>
          <h2 class="slide-title">${weekData.section2.title}</h2>
          <p class="slide-subtitle">${weekData.section2.subtitle}</p>
        </div>
      </div>

      <div class="cards-grid-2">
        ${weekData.section2.blocks.map(block => `
          <div class="feature-card">
            <span class="feature-badge">${block.badge}</span>
            <h3 class="feature-title">${block.title}</h3>
            <p class="feature-desc">${block.desc}</p>
            <ul class="concept-bullets" style="margin-top: 0.5rem;">
              ${block.bullets.map(b => `
                <li>
                  <span class="bullet-dot" style="background: var(--accent-amber); box-shadow: 0 0 8px var(--accent-amber);"></span>
                  <div>${b}</div>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="hud-bar">
        <div class="hud-progress-wrapper">
          <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
          <span class="hud-slide-count">4 / 8</span>
        </div>
        <div class="hud-controls">
          <button class="hud-btn btn-prev">← Geri</button>
          <button class="hud-btn btn-overview">☰ Genel Bakış</button>
          <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
          <button class="hud-btn hud-btn-primary btn-next">İleri →</button>
        </div>
      </div>
    </section>

    <!-- SLAYT 5: TASARIM ATÖLYESİ / LABORATUVAR GÖREVİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-week" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Atölye Görevi</span>
            <span class="badge badge-code">Uygulamalı Tasarım</span>
          </div>
          <h2 class="slide-title">🛠️ ${weekData.workshop.title}</h2>
          <p class="slide-subtitle">${weekData.workshop.subtitle}</p>
        </div>
      </div>

      <div class="workshop-wrapper">
        <div class="workshop-steps">
          ${weekData.workshop.steps.map((st, idx) => `
            <div class="workshop-step-card">
              <div class="step-number">${idx + 1}</div>
              <div class="step-info">
                <h4>${st.title}</h4>
                <p>${st.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="workshop-success-box">
          <h3><span>🎯</span> Başarı Kriterleri (Rubrik)</h3>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.5;">Görevinizi tamamlarken öğretmeninizin ve akranlarınızın değerlendireceği temel standartlar:</p>
          <ul class="concept-bullets">
            ${weekData.workshop.criteria.map(crit => `
              <li>
                <span class="bullet-dot" style="background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
                <div>${crit}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="hud-bar">
        <div class="hud-progress-wrapper">
          <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
          <span class="hud-slide-count">5 / 8</span>
        </div>
        <div class="hud-controls">
          <button class="hud-btn btn-prev">← Geri</button>
          <button class="hud-btn btn-overview">☰ Genel Bakış</button>
          <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
          <button class="hud-btn hud-btn-primary btn-next">İleri →</button>
        </div>
      </div>
    </section>

    <!-- SLAYT 6: TASARIMCI REHBERİ & YANILGILAR -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Tasarım Etiği</span>
            <span class="badge badge-week">Akılcı İpuçları</span>
          </div>
          <h2 class="slide-title">🛡️ Tasarımcı Rehberi & Doğru Bilinen Yanlışlar</h2>
          <p class="slide-subtitle">İnovasyon ve mühendislikte sık karşılaşılan hatalar ve kritik ilkeler.</p>
        </div>
      </div>

      <div class="tips-grid">
        <div class="tips-box rules">
          <h3 class="tips-title"><span>📐</span> ${weekData.tips.safetyTitle || 'Tasarım ve Güvenlik İlkeleri'}</h3>
          <ul class="concept-bullets">
            ${weekData.tips.safetyRules.map(rule => `
              <li>
                <span class="bullet-dot" style="background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
                <div><strong>${rule.bold}:</strong> ${rule.text}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="tips-box myths">
          <h3 class="tips-title"><span>❌</span> Doğru Bilinen Yanlışlar</h3>
          <div style="display: flex; flex-direction: column; gap: 0.8rem;">
            ${weekData.tips.myths.map(m => `
              <div class="myth-item">
                <div class="myth-wrong"><strong>Yanlış:</strong> ${m.wrong}</div>
                <div class="myth-correct"><strong>Doğrusu:</strong> ${m.correct}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="hud-bar">
        <div class="hud-progress-wrapper">
          <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
          <span class="hud-slide-count">6 / 8</span>
        </div>
        <div class="hud-controls">
          <button class="hud-btn btn-prev">← Geri</button>
          <button class="hud-btn btn-overview">☰ Genel Bakış</button>
          <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
          <button class="hud-btn hud-btn-primary btn-next">İleri →</button>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: İNTERAKTİF SINIF QUİZ'İ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-week">Akıllı Tahta Quiz'i</span>
            <span class="badge badge-code">Haftalık Kazanım Ölçümü</span>
          </div>
          <h2 class="slide-title">🧠 Haftanın Sorusu: Kim Tasarımcı Olmak İster?</h2>
          <p class="slide-subtitle">Doğru şıkkı akıllı tahtada işaretleyin ve sonucunuzu görün!</p>
        </div>
      </div>

      <div class="quiz-container">
        <div class="quiz-question-box">
          ${weekData.quiz.question}
        </div>

        <div class="quiz-options-grid">
          ${weekData.quiz.options.map((opt, idx) => `
            <button class="quiz-btn" data-correct="${opt.isCorrect}">
              <span>${opt.text}</span>
              <span class="quiz-icon"></span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-explanation">
          ${weekData.quiz.explanation}
        </div>
      </div>

      <div class="hud-bar">
        <div class="hud-progress-wrapper">
          <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
          <span class="hud-slide-count">7 / 8</span>
        </div>
        <div class="hud-controls">
          <button class="hud-btn btn-prev">← Geri</button>
          <button class="hud-btn btn-overview">☰ Genel Bakış</button>
          <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
          <button class="hud-btn hud-btn-primary btn-next">İleri →</button>
        </div>
      </div>
    </section>

    <!-- SLAYT 8: HAFTALIK ÖZET & GELECEK HAFTA -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Ders Özeti</span>
            <span class="badge badge-week">Haftanın Kapanışı</span>
          </div>
          <h2 class="slide-title">🏁 Neler Öğrendik? & Gelecek Hafta</h2>
          <p class="slide-subtitle">Bu haftanın kilit tasarım kazanımları ve ev görevi.</p>
        </div>
      </div>

      <div class="summary-grid">
        <div class="summary-box">
          <h3 style="color: #ffffff; font-size: 1.3rem;">📌 Bu Haftanın 3 Altın Kuralı</h3>
          <ul class="concept-bullets">
            ${weekData.summaryRules.map(sr => `
              <li>
                <span class="bullet-dot"></span>
                <div><strong>${sr.bold}:</strong> ${sr.text}</div>
              </li>
            `).join('')}
          </ul>
          <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1rem; margin-top: auto; border: 1px dashed rgba(255,255,255,0.15);">
            <strong style="color: var(--accent-amber);">📝 Haftalık Görev:</strong> ${weekData.homework || 'Konuyla ilgili fikirlerinizi tasarım günlüğünüze eskiz olarak kaydedin.'}
          </div>
        </div>

        <div class="next-week-card">
          <h4>Gelecek Hafta Bizi Ne Bekliyor?</h4>
          <h3>${weekData.nextWeekPreview}</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5;">Atölyemizdeki bir sonraki heyecan verici tasarıma hazır olun! Fikirlerinizi getirmeyi unutmayın.</p>
          <div style="margin-top: 1rem;">
            <button class="hud-btn btn-print" style="width: 100%; justify-content: center;">📄 Bu Sunumu PDF Olarak Kaydet (P)</button>
          </div>
        </div>
      </div>

      <div class="hud-bar">
        <div class="hud-progress-wrapper">
          <div class="hud-progress-track"><div class="hud-progress-bar"></div></div>
          <span class="hud-slide-count">8 / 8</span>
        </div>
        <div class="hud-controls">
          <button class="hud-btn btn-prev">← Geri</button>
          <button class="hud-btn btn-overview">☰ Genel Bakış</button>
          <button class="hud-btn btn-theme" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]"><span class="theme-btn-icon">☀️</span> <span class="theme-btn-text">Açık</span></button>
          <button class="hud-btn hud-btn-primary btn-next" style="display: none;">İleri →</button>
        </div>
      </div>
    </section>

    <!-- GENEL GÖRÜNÜM MODALI -->
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

  const data = typeof CURRICULUM_DATA_7 !== 'undefined' ? CURRICULUM_DATA_7 : (typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : []);
  const weekData = data.find(w => w.week === currentWeekNum);
  if (weekData) {
    buildPresentation(weekData);
    if (window.deck) {
      window.deck.init();
    } else if (typeof PresentationDeck !== 'undefined') {
      window.deck = new PresentationDeck();
    }
  }
});
