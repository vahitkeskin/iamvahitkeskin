/**
 * 7. Sınıf Teknoloji ve Tasarım - Slayt Derleyici (Builder)
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

    <!-- SLAYT 7: HAFTALIK ÖZET & GELECEK HAFTA -->
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
