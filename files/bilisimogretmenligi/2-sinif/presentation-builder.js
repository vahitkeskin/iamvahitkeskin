/**
 * 2. Sınıf Bilişim Teknolojileri ve Yazılım - Slayt Derleyici (Builder)
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
          <p class="slide-subtitle">Bu hafta bilişim dersimizde hangi eğlenceli adımları takip edeceğiz?</p>
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
              <div class="card-icon-badge">${weekData.section1.card?.icon || '💻'}</div>
              <h3 class="card-title">${weekData.section1.card?.title || 'Temel Kavramlar'}</h3>
            </div>
            <p class="card-desc">${weekData.section1.card?.desc || ''}</p>
            <ul class="card-list">
              ${(weekData.section1.card?.items || []).map(it => `
                <li><strong>${it.bold}:</strong> ${it.text}</li>
              `).join('')}
            </ul>
          </div>
          <div class="visual-box">
            ${weekData.section1.svg || ''}
            <span class="visual-caption">${weekData.section1.caption || 'Kavramsal Görsel Şema'}</span>
          </div>
        </div>
      ` : `
        <div class="cards-grid-2">
          ${(weekData.section1.cards || []).map(card => `
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
              <div class="card-icon-badge">${weekData.section2.card?.icon || '🧩'}</div>
              <h3 class="card-title">${weekData.section2.card?.title || 'Konu Özeti'}</h3>
            </div>
            <p class="card-desc">${weekData.section2.card?.desc || ''}</p>
            <ul class="card-list">
              ${(weekData.section2.card?.items || []).map(it => `
                <li><strong>${it.bold}:</strong> ${it.text}</li>
              `).join('')}
            </ul>
          </div>
          <div class="visual-box">
            ${weekData.section2.svg || ''}
            <span class="visual-caption">${weekData.section2.caption || 'Şematik Anlatım'}</span>
          </div>
        </div>
      ` : weekData.section2.layout === 'cards-3' ? `
        <div class="cards-grid-3">
          ${(weekData.section2.cards || []).map(card => `
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
          ${(weekData.section2.cards || []).map(card => `
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
            <span class="badge badge-unit">Uygulama Atölyesi</span>
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
        <div class="criteria-list" style="font-size: 0.92rem; display: flex; gap: 1.5rem; flex-wrap: wrap;">${weekData.workshop.criteria.map(c => `<span>✓ ${c}</span>`).join('')}
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
          <p class="slide-subtitle">Sık yapılan hatalara düşmeyelim, teknolojiyi bilinçli kullanalım.</p>
        </div>
      </div>

      <div class="cards-grid-2">
        <div class="feature-card" style="border-left: 4px solid var(--emerald-400);">
          <div class="card-icon-header">
            <div class="card-icon-badge" style="background: rgba(16, 185, 129, 0.2); color: var(--emerald-400);">🛡️</div>
            <h3 class="card-title">${weekData.tips.safetyTitle || 'Günün Altın Kuralı'}</h3>
          </div>
          <p class="card-desc">Bilişim dünyasında dikkat etmemiz gereken en önemli kurallar:</p>
          <ul class="card-list">
            ${weekData.tips.safetyRules.map(sr => `
              <li><strong>${sr.bold}:</strong> ${sr.text}</li>
            `).join('')}
          </ul>
        </div>

        <div class="feature-card" style="border-left: 4px solid var(--rose-500);">
          <div class="card-icon-header">
            <div class="card-icon-badge" style="background: rgba(244, 63, 94, 0.2); color: var(--rose-500);">⚠️</div>
            <h3 class="card-title">Doğru Bilinen Yanlışlar</h3>
          </div>
          <p class="card-desc">Karıştırılan durumlar ve bilmemiz gereken gerçekler:</p>
          <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 0.3rem;">
            ${weekData.tips.myths.map(m => `
              <div style="background: rgba(255, 255, 255, 0.03); padding: 0.8rem 1rem; border-radius: var(--radius-sm); border: 1px solid rgba(255, 255, 255, 0.06);">
                <div class="myth-wrong-item" style="font-size: 0.88rem; margin-bottom: 0.25rem;"><strong>✕ Yanlış:</strong> "${m.wrong}"</div>
                <div class="myth-correct-item" style="font-size: 0.88rem;"><strong>✓ Doğru:</strong> ${m.correct}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: HAFTALIK ÖZET, ÖDEV VE GELECEK HAFTA -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Kapanış</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2 class="slide-title">Haftanın Özeti ve Gelecek Hafta</h2>
          <p class="slide-subtitle">Bugün neler öğrendik, haftaya bizi hangi macera bekliyor?</p>
        </div>
      </div>

      <div class="cards-grid-3">
        <div class="feature-card">
          <div class="card-icon-header">
            <div class="card-icon-badge">🎯</div>
            <h3 class="card-title">3 Önemli Nokta</h3>
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
          <p class="card-desc homework-desc" style="font-size: 0.98rem; line-height: 1.6;">
            ${weekData.homework}
          </p>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: auto;">
            💡 Defterinize birkaç cümleyle not alın veya resmini çizip getirin.
          </div>
        </div>

        <div class="feature-card" style="border-top: 3px solid var(--sky-400);">
          <div class="card-icon-header">
            <div class="card-icon-badge" style="background: rgba(56, 189, 248, 0.2); color: var(--sky-400);">🚀</div>
            <h3 class="card-title">Gelecek Hafta Fragmanı</h3>
          </div>
          <p class="card-desc preview-desc" style="font-size: 1rem; line-height: 1.6;">
            <strong>${weekData.week + 1}. Hafta:</strong><br>
            ${weekData.nextWeekPreview}
          </p>
          <div style="font-size: 0.8rem; color: var(--sky-400); margin-top: auto;">
            ✨ Yeni bir dijital macera bizi bekliyor!
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
        <button class="hud-btn btn-theme" id="btnThemeToggle" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]">
          <span class="theme-btn-icon">☀️</span>
          <span class="theme-btn-text">Açık</span>
        </button>
        <button class="hud-btn btn-fullscreen" title="Tam Ekran (F)">⛶ Tam Ekran</button>
        <button class="hud-btn btn-print" title="PDF Olarak Yazdır (P)">🖨️ PDF</button>
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

  const dataset = typeof CURRICULUM_DATA_2 !== 'undefined' ? CURRICULUM_DATA_2 : (typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : null);
  if (dataset) {
    const weekData = dataset.find(w => w.week === currentWeekNum);
    if (weekData) {
      buildPresentation(weekData);
      if (window.deck) {
        window.deck.init();
      } else if (typeof PresentationDeck !== 'undefined') {
        window.deck = new PresentationDeck();
      }
    }
  }
});
