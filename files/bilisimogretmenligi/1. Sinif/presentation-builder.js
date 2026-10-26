/**
 * 1. Sınıf Serbest Etkinlikler - Slayt Derleyici (Builder)
 * Haftalık müfredat verisini alıp 8 aşamalı görsel slayt destesine dönüştürür.
 * Öğretmen: Vahit Keskin
 */

function buildPresentation(weekData) {
  const deck = document.getElementById('presentation-deck');
  if (!deck || !weekData) return;

  const weeklyTest = (typeof WEEKLY_TESTS !== 'undefined' && WEEKLY_TESTS[weekData.week])
    ? WEEKLY_TESTS[weekData.week]
    : (weekData.test && weekData.test.length > 0 ? weekData.test : null);

  const testQuestions = (weeklyTest && weeklyTest.length > 0)
    ? weeklyTest
    : (weekData.quiz ? [
        {
          question: weekData.quiz.question,
          options: weekData.quiz.options,
          explanation: weekData.quiz.explanation,
          difficulty: "Kolay",
          isHard: false
        }
      ] : []);

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
            <span class="curiosity-question-text" style="font-size: 1.15rem; ">${weekData.curiosityQuestion}</span>
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
              <h3 class="overview-modal-title" style="font-size: 1.4rem; ">${weekData.section1.card.title}</h3>
            </div>
            <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1.2rem;">
              ${weekData.section1.card.desc}
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${weekData.section1.card.items.map(item => `
                <div style="background: rgba(255,255,255,0.04); border-left: 3px solid var(--primary); padding: 0.6rem 0.9rem; border-radius: 4px;">
                  <strong style="color: var(--primary); font-size: 0.95rem;">${item.bold}:</strong>
                  <span class="card-desc" style="font-size: 0.92rem;"> ${item.text}</span>
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
            <h3 class="overview-modal-title" style="font-size: 1.3rem; margin-bottom: 0.4rem;">🎯 Oyun ve Etkinlik Adımları:</h3>
            ${weekData.workshop.steps.map((st, i) => `
              <div class="workshop-step-item">
                <div class="step-num">${i + 1}</div>
                <div>
                  <strong class="step-title" style="font-size: 1.05rem; display: block; margin-bottom: 0.2rem;">${st.title}</strong>
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
                <li class="criteria-item" style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.92rem;">
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
                  <strong class="safety-rule-bold" style="font-size: 1rem; display: block; margin-bottom: 0.2rem;">${r.bold}</strong>
                  <span class="safety-rule-text" style="font-size: 0.95rem;">${r.text}</span>
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
                  <div class="myth-wrong-item" style="font-size: 0.95rem; margin-bottom: 0.4rem;"><strong>❌ Yanlış Düşünce:</strong> ${m.wrong}</div>
                  <div class="myth-correct-item" style="font-size: 0.95rem;"><strong>✅ Doğrusu:</strong> ${m.correct}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: HAFTALIK ÖZET VE KUTLAMA -->
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
              <h3 class="overview-modal-title" style="font-size: 1.35rem; ">Haftanın 3 Altın Kuralı</h3>
            </div>
            ${weekData.summaryRules.map(r => `
              <div style="display: flex; align-items: flex-start; gap: 0.8rem; background: rgba(255,255,255,0.03); padding: 0.8rem 1.1rem; border-radius: var(--radius-md);">
                <span style="color: var(--primary); font-size: 1.2rem;">⭐</span>
                <div>
                  <strong class="summary-rule-bold" style="font-size: 1.05rem;">${r.bold}:</strong>
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
              <p class="homework-desc" style="font-size: 1.1rem; line-height: 1.6;">
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

    <!-- SLAYT 8 - 17: 10 SORULUK KONU DEĞERLENDİRME TESTİ -->
    ${testQuestions.map((q, qIdx) => `
      <section class="slide slide-quiz-question" data-q-idx="${qIdx}" data-is-hard="${q.isHard || qIdx === 9}">
        <div class="slide-header">
          <div class="slide-title-box">
            <div class="header-badges">
              <span class="badge badge-unit">Konu Tarama Testi</span>
              <span class="badge badge-week">${weekData.week}. Hafta</span>
              <span class="badge ${(q.isHard || qIdx === 9) ? 'badge-hard' : 'badge-level'}">
                ${(q.isHard || qIdx === 9) ? '🔥 10. SORU (ZOR DÜZEY)' : 'Soru ' + (qIdx + 1) + ' / 10'}
              </span>
            </div>
            <h2 class="slide-title">${(q.isHard || qIdx === 9) ? '🔥 Analiz & Derin Muhakeme Sorusu' : 'Haftalık Bilgi Kontrol Noktası'}</h2>
            <p class="slide-subtitle">${(q.isHard || qIdx === 9) ? '⚠️ Bu soru üst düzey düşünme, dikkat ve çok adımlı analiz gerektirir!' : 'Öğrendiklerinizi pekiştirin; doğru seçeneğe dokunun.'}</p>
          </div>
          <div class="quiz-hud-live-score">
            <span class="live-score-correct">✓ <span class="score-c-count">0</span> Doğru</span>
            <span class="live-score-wrong">✕ <span class="score-w-count">0</span> Yanlış</span>
          </div>
        </div>

        <div class="quiz-pills-bar">
          ${testQuestions.map((item, pIdx) => `
            <button class="quiz-nav-pill ${pIdx === qIdx ? 'current' : ''} ${(item.isHard || pIdx === 9) ? 'pill-hard' : ''}" 
                    data-target-q="${pIdx}" title="${(item.isHard || pIdx === 9) ? '10. Soru (Zor)' : 'Soru ' + (pIdx + 1)}">
              ${(item.isHard || pIdx === 9) ? '🔥 10' : (pIdx + 1)}
            </button>
          `).join('')}
        </div>

        <div class="quiz-container ${(q.isHard || qIdx === 9) ? 'quiz-container-hard' : ''}">
          <div class="quiz-question-box ${(q.isHard || qIdx === 9) ? 'question-box-hard' : ''}">
            <div style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: ${(q.isHard || qIdx === 9) ? '#fbbf24' : 'var(--accent-cyan)'}; margin-bottom: 0.4rem; font-weight: 800;">
              ${(q.isHard || qIdx === 9) ? '🔥 YILDIZLI ZOR SORU' : 'SORU ' + (qIdx + 1)}
            </div>
            ${q.question}
          </div>

          <div class="quiz-options-grid">
            ${q.options.map((opt, oIdx) => {
              const letter = ['A', 'B', 'C', 'D'][oIdx] || '';
              const optText = typeof opt === 'string' ? opt : (opt.text ? opt.text.replace(/^[A-D]\)\s*/, '') : '');
              const isCorr = typeof opt === 'object' ? Boolean(opt.isCorrect) : false;
              return `
                <button class="quiz-btn" data-correct="${isCorr}">
                  <span style="font-weight: 800; color: var(--accent-cyan); margin-right: 0.5rem;">${letter})</span>
                  <span>${optText}</span>
                </button>
              `;
            }).join('')}
          </div>

          <div class="quiz-answer-box quiz-explanation">
            <div style="margin-bottom: 0.8rem;">
              <strong>Çözüm & Açıklama:</strong> ${q.explanation}
            </div>
            <div style="display: flex; justify-content: flex-end;">
              ${qIdx < testQuestions.length - 1 ? `
                <button class="btn-next-question" data-next-q="${qIdx + 1}">
                  Sonraki Soru (${qIdx + 2} / 10) →
                </button>
              ` : `
                <button class="btn-finish-quiz">
                  🏆 Testi Tamamla & Karneni Gör →
                </button>
              `}
            </div>
          </div>
        </div>
      </section>
    `).join('')}

    <!-- SLAYT 18: TEST SONUÇ KARNESİ VE BAŞARI ÖZETİ -->
    <section class="slide slide-quiz-results">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Test Karnesi</span>
            <span class="badge badge-week">${weekData.week}. Hafta Başarı Raporu</span>
          </div>
          <h2 class="slide-title">🏆 Haftalık Konu Tarama Testi Tamamlandı!</h2>
          <p class="slide-subtitle">İşte 10 soruluk değerlendirme sınavı performansınız:</p>
        </div>
      </div>

      <div class="results-card">
        <div class="results-score-circle">
          <span class="score-big" id="finalScoreVal">0</span>
          <span class="score-total">/ 10</span>
        </div>

        <h3 class="results-title" id="resultsTitle">Test Değerlendirmesi</h3>
        <p class="results-desc" id="resultsDesc">Soruları çözdükçe başarı durumunuz ve karne analizi burada görüntülenecektir.</p>

        <div class="results-breakdown-grid" id="resultsBreakdownGrid">
          ${testQuestions.map((q, idx) => `
            <div class="result-breakdown-item" data-q-idx="${idx}">
              <span class="rb-num">${idx === 9 ? '🔥 10' : (idx + 1)}</span>
              <span class="rb-status">Bekliyor</span>
            </div>
          `).join('')}
        </div>

        <div class="results-actions">
          <button class="hud-btn btn-restart-quiz">🔄 Testi Baştan Çöz</button>
          <button class="hud-btn btn-review-hard">🔥 10. Zor Soruyu İncele</button>
          <button class="hud-btn btn-go-cover">🏠 Konu Anlatımına Dön</button>
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
          <h3 class="overview-modal-title" style="font-size: 1.4rem;">Slayt Genel Görünümü - ${weekData.week}. Hafta</h3>
          <button class="hud-btn btn-close-overview">✕ Kapat</button>
        </div>
        <div class="overview-grid"></div>
      </div>
    </div>
  `;

  if (window.ThemeManager) {
    window.ThemeManager.update();
  }

  
  // -------------------------------------------------------------
  // İNTERAKTİF 10 SORULUK TEST MOTORU
  // -------------------------------------------------------------
  const quizState = {
    answers: {},
    correctCount: 0,
    wrongCount: 0
  };

  function updateScoreHUD() {
    deck.querySelectorAll('.score-c-count').forEach(el => el.textContent = quizState.correctCount);
    deck.querySelectorAll('.score-w-count').forEach(el => el.textContent = quizState.wrongCount);

    Object.keys(quizState.answers).forEach(qIdx => {
      const isCorr = quizState.answers[qIdx];
      deck.querySelectorAll(`.quiz-nav-pill[data-target-q="${qIdx}"]`).forEach(pill => {
        pill.classList.remove('answered-correct', 'answered-wrong');
        pill.classList.add(isCorr ? 'answered-correct' : 'answered-wrong');
      });
      deck.querySelectorAll(`.result-breakdown-item[data-q-idx="${qIdx}"]`).forEach(item => {
        item.classList.remove('correct', 'wrong');
        item.classList.add(isCorr ? 'correct' : 'wrong');
        const statusEl = item.querySelector('.rb-status');
        if (statusEl) statusEl.textContent = isCorr ? 'Doğru' : 'Yanlış';
      });
    });

    const finalScoreEl = deck.querySelector('#finalScoreVal');
    if (finalScoreEl) finalScoreEl.textContent = quizState.correctCount;
    const titleEl = deck.querySelector('#resultsTitle');
    const descEl = deck.querySelector('#resultsDesc');
    if (titleEl && descEl) {
      const c = quizState.correctCount;
      if (c === 10) {
        titleEl.textContent = "🌟 Kusursuz Başarı! 10'da 10 Tam Puan!";
        descEl.textContent = "Tebrikler! Hem tüm temel soruları hem de 10. zor analiz sorusunu hatasız çözerek konunun gerçek bir ustası olduğunu kanıtladın.";
      } else if (c >= 8) {
        titleEl.textContent = "🎉 Harika Performans! Konuya Çok İyi Hakimsin!";
        descEl.textContent = `10 sorudan ${c} tanesini doğru cevapladın. Ufak birkaç detayı da gözden geçirerek 10'da 10 yapabilirsin.`;
      } else if (c >= 6) {
        titleEl.textContent = "👍 İyi Bir Başlangıç! Öğrenmeye Devam!";
        descEl.textContent = `10 sorudan ${c} tanesini doğru cevapladın. Konu slaytlarını bir kez daha inceleyip testi tekrar denemelisin.`;
      } else {
        titleEl.textContent = "💪 Geliştirilebilir! Pes Etmek Yok!";
        descEl.textContent = `10 sorudan ${c} tanesini doğru cevapladın. Konu özetini ve slaytları baştan sona dikkatlice oku, tekrar dene!`;
      }
    }
  }

  // Seçenek Tıklaması
  deck.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parentContainer = btn.closest('.quiz-container');
      const parentSlide = btn.closest('.slide-quiz-question');
      if (!parentContainer || !parentSlide) return;

      const qIdx = parseInt(parentSlide.dataset.qIdx, 10);
      const isCorrect = btn.dataset.correct === 'true';

      parentContainer.querySelectorAll('.quiz-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') {
          b.classList.add('correct');
        } else if (b === btn) {
          b.classList.add('wrong');
        }
      });

      const ansBox = parentContainer.querySelector('.quiz-answer-box, .quiz-explanation');
      if (ansBox) ansBox.classList.add('show');

      if (typeof quizState.answers[qIdx] === 'undefined') {
        quizState.answers[qIdx] = isCorrect;
        if (isCorrect) quizState.correctCount++;
        else quizState.wrongCount++;
        updateScoreHUD();
      }
    });
  });

  // Soru Hapı Tıklaması
  deck.querySelectorAll('.quiz-nav-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const targetQ = parseInt(pill.dataset.targetQ, 10);
      const targetSlide = deck.querySelector(`.slide-quiz-question[data-q-idx="${targetQ}"]`);
      if (targetSlide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(targetSlide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // Sonraki Soru Butonu
  deck.querySelectorAll('.btn-next-question').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.deck) window.deck.nextSlide();
    });
  });

  // Testi Bitir Butonu
  deck.querySelectorAll('.btn-finish-quiz').forEach(btn => {
    btn.addEventListener('click', () => {
      const resSlide = deck.querySelector('.slide-quiz-results');
      if (resSlide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(resSlide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // Testi Baştan Çöz
  deck.querySelectorAll('.btn-restart-quiz').forEach(btn => {
    btn.addEventListener('click', () => {
      quizState.answers = {};
      quizState.correctCount = 0;
      quizState.wrongCount = 0;
      updateScoreHUD();

      deck.querySelectorAll('.quiz-btn').forEach(b => {
        b.disabled = false;
        b.classList.remove('correct', 'wrong');
      });
      deck.querySelectorAll('.quiz-answer-box, .quiz-explanation').forEach(b => {
        b.classList.remove('show');
      });
      deck.querySelectorAll('.quiz-nav-pill').forEach(p => {
        p.classList.remove('answered-correct', 'answered-wrong');
      });
      deck.querySelectorAll('.result-breakdown-item').forEach(item => {
        item.classList.remove('correct', 'wrong');
        const st = item.querySelector('.rb-status');
        if (st) st.textContent = 'Bekliyor';
      });

      const q1Slide = deck.querySelector('.slide-quiz-question[data-q-idx="0"]');
      if (q1Slide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(q1Slide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // 10. Zor Soruyu İncele
  deck.querySelectorAll('.btn-review-hard').forEach(btn => {
    btn.addEventListener('click', () => {
      const q10Slide = deck.querySelector('.slide-quiz-question[data-q-idx="9"]');
      if (q10Slide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(q10Slide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // Konu Anlatımına Dön
  deck.querySelectorAll('.btn-go-cover').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.deck) window.deck.goToSlide(0);
    });
  });
}

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
