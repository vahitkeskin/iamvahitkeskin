/**
 * 3. Sınıf Bilişim Teknolojileri ve Yazılım - Slayt Derleyici (Builder)
 * Haftalık müfredat verisini alıp 8 aşamalı görsel slayt destesine dönüştürür.
 * Öğretmen: Vahit Keskin
 */

function buildPresentation(weekData) {
  const deck = document.getElementById('presentation-deck');
  if (!deck || !weekData) return;

  if (typeof weekData === 'number') {
    const dataset = typeof CURRICULUM_DATA_3 !== 'undefined' ? CURRICULUM_DATA_3 : (typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : []);
    weekData = dataset.find(w => w.week === weekData) || { week: weekData };
  }

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
            <span class="badge badge-week">Bilinçli Bilişimci</span>
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

    <!-- SLAYT 7: HAFTALIK ÖZET & EV GÖREVİ -->
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
        <button class="hud-btn btn-theme" id="btnThemeToggle" title="Tema: Açık / Kapalı / Sistem [T]" aria-label="Görünüm Teması">
          <span class="theme-btn-icon">☀️</span>
          <span class="theme-btn-text">Açık</span>
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
