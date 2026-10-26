/**
 * 6. Sınıf Bilişim Teknolojileri - Slayt Oluşturucu (Presentation Builder)
 * curriculum-data.js dosyasındaki verileri alarak 8 slaytlık zengin, görsel
 * ve modern sunum yapısını otomatik olarak oluşturur.
 */

function buildPresentation(weekNum) {
  const container = document.getElementById('presentation-deck');
  if (!container) return;

  const dataset = typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : (typeof CURRICULUM_DATA_6 !== 'undefined' ? CURRICULUM_DATA_6 : []);
  const actualWeekNum = (typeof weekNum === 'object' && weekNum !== null) ? weekNum.week : parseInt(weekNum, 10);
  const weekData = dataset.find(w => w.week === actualWeekNum) || (typeof weekNum === 'object' ? weekNum : null);

  if (!weekData) {
    container.innerHTML = `<div style="padding: 2rem; color: #ef4444;"><h3>Hafta ${weekNum} verisi bulunamadı.</h3></div>`;
    return;
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

  // Üniteye göre body temasını ayarla
  document.body.setAttribute('data-unit', weekData.unitTheme || 'unite-1');

  // 8 Slayt HTML'i
  container.innerHTML = `
    <!-- SLAYT 1: KAPAK -->
    <section class="slide slide-cover active">
      <div class="cover-content">
        <div class="cover-tag">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          ${weekData.unit}
        </div>
        <h1>${weekData.title}</h1>
        <p class="cover-sub">${weekData.subtitle}</p>
        <div class="cover-meta">
          <div class="cover-meta-item">
            <span class="label">Hafta & Tarih</span>
            <span class="val">${weekData.week}. Hafta (${weekData.date})</span>
          </div>
          <div class="cover-meta-item">
            <span class="label">Ders Saati</span>
            <span class="val">${weekData.hours || '2 Saat'}</span>
          </div>
          <div class="cover-meta-item">
            <span class="label">Kazanım Kodu</span>
            <span class="val">${weekData.outcomeCode}</span>
          </div>
          <div class="cover-meta-item">
            <span class="label">Hedef Beceri</span>
            <span class="val">${weekData.targetSkill}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 2: YOL HARİTASI & ANAHTAR KAVRAMLAR -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
            <span class="badge badge-code">${weekData.outcomeCode}</span>
          </div>
          <h2>Haftanın Yol Haritası & Anahtar Kavramlar</h2>
          <p>Bu dersin hedefleri, zihin haritası ve temel kavramlar sözlüğü.</p>
        </div>
        <div class="header-meta">${weekData.date} • ${weekData.hours || '2 Saat'}</div>
      </div>
      <div class="slide-body layout-split">
        <div class="card card-primary-border" style="height: 100%;">
          <h3 class="card-title"><span class="icon">🎯</span> Neler Öğreneceğiz?</h3>
          <ul class="clean-list" style="margin-top: 0.8rem;">
            ${weekData.roadmap.map((item, idx) => `
              <li><span class="bullet">${idx + 1}</span> <div><strong>${item.title}:</strong> ${item.desc}</div></li>
            `).join('')}
          </ul>
          <div class="tip-box">
            <span class="tip-icon">💡</span>
            <div class="tip-content"><strong>Merak Sorusu:</strong> ${weekData.curiosityQuestion}</div>
          </div>
        </div>
        <div class="visual-box">
          ${weekData.roadmapSvg || getDefaultSvg(weekData.title)}
          <div class="visual-caption">${weekData.title} Kavram Haritası</div>
        </div>
      </div>
    </section>

    <!-- SLAYT 3: KONU ANLATIMI I -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2>${weekData.section1.title}</h2>
          <p>${weekData.section1.subtitle}</p>
        </div>
        <div class="header-meta">Detaylı Konu Anlatımı I</div>
      </div>
      <div class="slide-body ${weekData.section1.layout || 'layout-cards-2'}">
        ${weekData.section1.cards.map(c => `
          <div class="card ${c.borderClass || 'card-primary-border'}">
            <h3 class="card-title"><span class="icon">${c.icon || '📌'}</span> ${c.title}</h3>
            ${c.desc ? `<p class="card-desc" style="margin-bottom: 0.8rem;">${c.desc}</p>` : ''}
            ${c.items ? `
              <ul class="clean-list">
                ${c.items.map(it => `<li><span class="bullet">✓</span> <div><strong>${it.bold}:</strong> ${it.text}</div></li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SLAYT 4: KONU ANLATIMI II (TEKNİK SÜREÇ & ARAYÜZ) -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2>${weekData.section2.title}</h2>
          <p>${weekData.section2.subtitle}</p>
        </div>
        <div class="header-meta">Detaylı Konu Anlatımı II</div>
      </div>
      <div class="slide-body ${weekData.section2.layout || 'layout-cards-3'}">
        ${weekData.section2.cards.map(c => `
          <div class="card ${c.borderClass || 'card-accent-border'}">
            <h3 class="card-title"><span class="icon">${c.icon || '⚡'}</span> ${c.title}</h3>
            ${c.desc ? `<p class="card-desc" style="margin-bottom: 0.6rem;">${c.desc}</p>` : ''}
            ${c.items ? `
              <ul class="clean-list" style="font-size: 0.92rem;">
                ${c.items.map(it => `<li><span class="bullet">▸</span> <div><strong>${it.bold}:</strong> ${it.text}</div></li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </section>

    <!-- SLAYT 5: SINIF İÇİ ATÖLYE / UYGULAMA GÖREVİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2>Sınıf İçi Atölye: "${weekData.workshop.title}"</h2>
          <p>${weekData.workshop.subtitle}</p>
        </div>
        <div class="header-meta">Uygulama Görevi</div>
      </div>
      <div class="slide-body layout-split">
        <div class="step-grid" style="grid-template-columns: 1fr; gap: 1rem;">
          ${weekData.workshop.steps.map((st, i) => `
            <div class="step-card">
              <span class="step-num">${i + 1}</span>
              <h4>${st.title}</h4>
              <p>${st.desc}</p>
            </div>
          `).join('')}
        </div>
        <div class="card card-success-border" style="height: 100%; justify-content: center;">
          <h3 class="card-title"><span class="icon">🌟</span> Başarı Ölçütleri</h3>
          <ul class="clean-list" style="margin-top: 0.8rem;">
            ${weekData.workshop.criteria.map(cr => `
              <li><span class="bullet">✓</span> ${cr}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    </section>

    <!-- SLAYT 6: PÜF NOKTALARI & GÜVENLİK / ETİK -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2>Püf Noktaları, Güvenlik & Doğru Bilinen Yanlışlar</h2>
          <p>Bilinçli teknoloji kullanımı, güvenlik tedbirleri ve kritik ipuçları.</p>
        </div>
        <div class="header-meta">Dijital Farkındalık</div>
      </div>
      <div class="slide-body layout-cards-2">
        <div class="card card-primary-border">
          <h3 class="card-title"><span class="icon">🛡️</span> ${weekData.tips.safetyTitle || 'Güvenlik ve Önemli Kurallar'}</h3>
          <ul class="clean-list">
            ${weekData.tips.safetyRules.map(sr => `
              <li><span class="bullet">!</span> <div><strong>${sr.bold}:</strong> ${sr.text}</div></li>
            `).join('')}
          </ul>
        </div>
        <div class="card card-accent-border">
          <h3 class="card-title"><span class="icon">❌</span> Doğru Bilinen Yanlışlar</h3>
          <ul class="clean-list">
            ${weekData.tips.myths.map(m => `
              <li><span class="bullet">✕</span> <div><strong>Yanlış:</strong> ${m.wrong}<br><strong>Doğrusu:</strong> ${m.correct}</div></li>
            `).join('')}
          </ul>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: HAFTALIK ÖZET & EV ETKİNLİĞİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2>Haftalık Özet & Gelecek Haftaya Bakış</h2>
          <p>Akılda kalması gereken 3 altın kural ve haftalık araştırma görevi.</p>
        </div>
        <div class="header-meta">Özet & Kapanış</div>
      </div>
      <div class="slide-body layout-cards-2">
        <div class="card card-primary-border">
          <h3 class="card-title"><span class="icon">📌</span> 3 Altın Kural</h3>
          <ul class="clean-list">
            ${weekData.summaryRules.map((r, i) => `
              <li><span class="bullet">${i + 1}</span> <div><strong>${r.bold}:</strong> ${r.text}</div></li>
            `).join('')}
          </ul>
        </div>
        <div class="card card-accent-border">
          <h3 class="card-title"><span class="icon">🔍</span> Ev Keşif Görevi & Gelecek Hafta</h3>
          <p class="card-desc" style="margin-bottom: 0.8rem;">
            <strong>Ev Görevi:</strong> ${weekData.homework}
          </p>
          <div class="tip-box">
            <span class="tip-icon">🚀</span>
            <div class="tip-content"><strong>Gelecek Hafta (${weekData.week + 1}. Hafta):</strong> ${weekData.nextWeekPreview}</div>
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


    <!-- ALT GEZİNME HUD -->
    <div class="deck-hud">
      <div class="hud-progress-bar"></div>
      <div class="hud-left">
        <a href="index.html" class="hud-home-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Haftalar Listesi
        </a>
        <span class="hud-slide-count">1 / 8</span>
      </div>
      <div class="hud-controls">
        <button class="hud-btn btn-prev">◀ Önceki</button>
        <button class="hud-btn hud-btn-primary btn-next">Sonraki ▶</button>
        <button class="hud-btn btn-overview" title="Slayt Listesi (O)">⊞ Genel Bakış</button>
        <button class="hud-btn btn-theme" id="btnThemeToggle" title="Tema Değiştir (Açık/Kapalı/Sistem) [T]">
          <span class="theme-btn-icon">☀️</span>
          <span class="theme-btn-text">Açık</span>
        </button>
        <button class="hud-btn btn-fullscreen" title="Tam Ekran (F)">⛶ Tam Ekran</button>
        <button class="hud-btn btn-print" title="Yazdır / PDF Olarak Kaydet (P)">🖨️ PDF</button>
      </div>
    </div>

    <!-- GENEL BAKIŞ MODALI -->
    <div class="overview-modal">
      <div class="overview-content">
        <div class="overview-header">
          <h3>Slayt Genel Görünümü - ${weekData.week}. Hafta</h3>
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
    container.querySelectorAll('.score-c-count').forEach(el => el.textContent = quizState.correctCount);
    container.querySelectorAll('.score-w-count').forEach(el => el.textContent = quizState.wrongCount);

    Object.keys(quizState.answers).forEach(qIdx => {
      const isCorr = quizState.answers[qIdx];
      container.querySelectorAll(`.quiz-nav-pill[data-target-q="${qIdx}"]`).forEach(pill => {
        pill.classList.remove('answered-correct', 'answered-wrong');
        pill.classList.add(isCorr ? 'answered-correct' : 'answered-wrong');
      });
      container.querySelectorAll(`.result-breakdown-item[data-q-idx="${qIdx}"]`).forEach(item => {
        item.classList.remove('correct', 'wrong');
        item.classList.add(isCorr ? 'correct' : 'wrong');
        const statusEl = item.querySelector('.rb-status');
        if (statusEl) statusEl.textContent = isCorr ? 'Doğru' : 'Yanlış';
      });
    });

    const finalScoreEl = container.querySelector('#finalScoreVal');
    if (finalScoreEl) finalScoreEl.textContent = quizState.correctCount;
    const titleEl = container.querySelector('#resultsTitle');
    const descEl = container.querySelector('#resultsDesc');
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
  container.querySelectorAll('.quiz-btn').forEach(btn => {
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
  container.querySelectorAll('.quiz-nav-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const targetQ = parseInt(pill.dataset.targetQ, 10);
      const targetSlide = container.querySelector(`.slide-quiz-question[data-q-idx="${targetQ}"]`);
      if (targetSlide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(targetSlide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // Sonraki Soru Butonu
  container.querySelectorAll('.btn-next-question').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.deck) window.deck.nextSlide();
    });
  });

  // Testi Bitir Butonu
  container.querySelectorAll('.btn-finish-quiz').forEach(btn => {
    btn.addEventListener('click', () => {
      const resSlide = container.querySelector('.slide-quiz-results');
      if (resSlide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(resSlide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // Testi Baştan Çöz
  container.querySelectorAll('.btn-restart-quiz').forEach(btn => {
    btn.addEventListener('click', () => {
      quizState.answers = {};
      quizState.correctCount = 0;
      quizState.wrongCount = 0;
      updateScoreHUD();

      container.querySelectorAll('.quiz-btn').forEach(b => {
        b.disabled = false;
        b.classList.remove('correct', 'wrong');
      });
      container.querySelectorAll('.quiz-answer-box, .quiz-explanation').forEach(b => {
        b.classList.remove('show');
      });
      container.querySelectorAll('.quiz-nav-pill').forEach(p => {
        p.classList.remove('answered-correct', 'answered-wrong');
      });
      container.querySelectorAll('.result-breakdown-item').forEach(item => {
        item.classList.remove('correct', 'wrong');
        const st = item.querySelector('.rb-status');
        if (st) st.textContent = 'Bekliyor';
      });

      const q1Slide = container.querySelector('.slide-quiz-question[data-q-idx="0"]');
      if (q1Slide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(q1Slide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // 10. Zor Soruyu İncele
  container.querySelectorAll('.btn-review-hard').forEach(btn => {
    btn.addEventListener('click', () => {
      const q10Slide = container.querySelector('.slide-quiz-question[data-q-idx="9"]');
      if (q10Slide && window.deck) {
        const slideIdx = window.deck.slides.indexOf(q10Slide);
        if (slideIdx !== -1) window.deck.goToSlide(slideIdx);
      }
    });
  });

  // Konu Anlatımına Dön
  container.querySelectorAll('.btn-go-cover').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.deck) window.deck.goToSlide(0);
    });
  });

  if (window.ThemeManager) {
    window.ThemeManager.update();
  }
}

function getDefaultSvg(title) {
  return `
    <svg viewBox="0 0 400 300">
      <rect width="400" height="300" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <circle cx="200" cy="120" r="48" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
      <text x="200" y="126" text-anchor="middle" font-size="28">💻</text>
      <text x="200" y="200" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">${title}</text>
      <text x="200" y="222" text-anchor="middle" font-size="12" fill="#64748b">Bilişim Teknolojileri 6. Sınıf</text>
    </svg>
  `;
}

// Otomatik başlatma: URL parametresi veya body data-week
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const weekParam = urlParams.get('hafta');
  const bodyWeek = document.body.dataset.week;
  const targetWeek = parseInt(weekParam || bodyWeek || '1');
  
  buildPresentation(targetWeek);
});
