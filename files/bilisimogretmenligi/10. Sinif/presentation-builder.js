/**
 * MEB 10. Sınıf Bilgisayar Bilimi (Kur 2) - Slayt Oluşturucu (Presentation Builder)
 * curriculum-data.js dosyasından veriyi alıp 8 aşamalı zengin akıllı tahta
 * sunumunu dinamik olarak inşa eder.
 * Öğretmen: Vahit Keskin | MEB 2026-2027
 */

function buildPresentation(weekNum) {
  const container = document.getElementById('presentation-deck');
  if (!container) return;

  const weekData = CURRICULUM_DATA.find(w => w.week === weekNum);
  if (!weekData) {
    container.innerHTML = `<div style="padding: 3rem; color: #ef4444; text-align: center;"><h2>Hafta ${weekNum} müfredat verisi bulunamadı.</h2></div>`;
    return;
  }

  // Body data-unit
  document.body.setAttribute('data-unit', weekData.unitTheme || 'unite-1');

  const summaryKeyPoints = (weekData.summary && weekData.summary.keyPoints)
    ? weekData.summary.keyPoints
    : (weekData.summaryRules
        ? weekData.summaryRules.map(r => `<strong>${r.bold}:</strong> ${r.text}`)
        : []);
  const summaryNextWeek = (weekData.summary && weekData.summary.nextWeek)
    ? weekData.summary.nextWeek
    : (weekData.nextWeekPreview || 'Gelecek haftanın heyecan verici konusu');
  const summaryHomework = (weekData.summary && weekData.summary.homework)
    ? weekData.summary.homework
    : (weekData.homework || 'Konuyu pekiştirici mini araştırma ve uygulama görevi.');

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

  container.innerHTML = `
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
          <div><strong>Merak & Keşif Sorusu:</strong> ${weekData.curiosityQuestion}</div>
        </div>

        <div class="cover-meta-grid">
          <div class="cover-meta-item">
            <span class="meta-label">Hafta & Tarih</span>
            <span class="meta-value">${weekData.week}. Hafta (${weekData.date})</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Ders Süresi</span>
            <span class="meta-value">${weekData.hours || '2 Ders Saati'}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Kazanım Kodu</span>
            <span class="meta-value">${weekData.outcomeCode}</span>
          </div>
          <div class="cover-meta-item">
            <span class="meta-label">Hedef Bilişim Becerisi</span>
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
          <h2 class="slide-title">Haftanın Yol Haritası & Kavram Ağacı</h2>
          <p class="slide-subtitle">Bu haftanın öğrenme serüveninde hangi adımları takip edeceğiz?</p>
        </div>
        <div style="font-size: 0.95rem; color: var(--text-dim);">${weekData.date}</div>
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
    </section>

    <!-- SLAYT 3: DETAYLI KONU ANLATIMI 1 (KAVRAMSAL ŞEMA & TEORİ) -->
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
        <div style="font-size: 0.9rem; color: var(--accent-cyan); font-weight: 700;">Konu Anlatımı I</div>
      </div>

      <div class="split-content">
        <div class="text-panel">
          ${weekData.section1.cards ? `
            <div class="info-card-highlight">
              <h3><span>${weekData.section1.cards[0].icon || '📌'}</span> ${weekData.section1.cards[0].title}</h3>
              <p>${weekData.section1.cards[0].desc || ''}</p>
            </div>
            ${weekData.section1.cards[0].items ? `
              <ul class="concept-bullets">
                ${weekData.section1.cards[0].items.map(it => `
                  <li>
                    <span class="bullet-dot"></span>
                    <div><strong>${it.bold}:</strong> ${it.text}</div>
                  </li>
                `).join('')}
              </ul>
            ` : ''}
          ` : ''}
        </div>
        <div class="visual-panel">
          ${weekData.roadmapSvg || weekData.section1.svg || getDefaultSvg(weekData.title)}
        </div>
      </div>
    </section>

    <!-- SLAYT 4: DETAYLI KONU ANLATIMI 2 (TEKNİK SÜREÇ & KOD/MİMARİ) -->
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
        <div style="font-size: 0.9rem; color: var(--accent-amber); font-weight: 700;">Teknik Süreç & Kod</div>
      </div>

      ${weekData.section2.codeSnippet ? `
        <div class="split-content">
          <div class="text-panel">
            ${weekData.section2.cards.map(c => `
              <div class="feature-card">
                <span class="feature-badge">${c.badge || 'Kavram'}</span>
                <h3 class="feature-title">${c.title}</h3>
                <p class="feature-desc">${c.desc || ''}</p>
                ${c.items ? `
                  <ul class="concept-bullets" style="margin-top: 0.4rem;">
                    ${c.items.map(it => `<li><span class="bullet-dot" style="background: var(--accent-amber);"></span> <div><strong>${it.bold}:</strong> ${it.text}</div></li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
          <div class="code-window">
            <div class="code-header">
              <div class="mac-dots">
                <span class="mac-dot dot-red"></span>
                <span class="mac-dot dot-yellow"></span>
                <span class="mac-dot dot-green"></span>
              </div>
              <span class="code-title">${weekData.section2.codeTitle || 'ornek_kod.py'}</span>
              <span style="font-size: 0.75rem; color: #64748b; font-family: var(--font-mono);">${weekData.section2.codeLang || 'Python 3'}</span>
            </div>
            <pre class="code-content">${weekData.section2.codeSnippet}</pre>
          </div>
        </div>
      ` : `
        <div class="cards-grid-${weekData.section2.cards.length === 3 ? '3' : '2'}">
          ${weekData.section2.cards.map(c => `
            <div class="feature-card">
              <span class="feature-badge">${c.badge || 'Kavram'}</span>
              <h3 class="feature-title">${c.title}</h3>
              <p class="feature-desc">${c.desc || ''}</p>
              ${c.items ? `
                <ul class="concept-bullets" style="margin-top: 0.4rem;">
                  ${c.items.map(it => `<li><span class="bullet-dot" style="background: var(--accent-amber);"></span> <div><strong>${it.bold}:</strong> ${it.text}</div></li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>
      `}
    </section>

    <!-- SLAYT 5: ATÖLYE / UYGULAMALI LABORATUVAR GÖREVİ -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-week" style="background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(16, 185, 129, 0.4);">Sınıf İçi Atölye</span>
            <span class="badge badge-code">Laboratuvar Görevi</span>
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
          <h3><span>🎯</span> Başarı Ölçütleri (Rubrik)</h3>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.5;">Görevi tamamlarken öğretmeniniz ve zümrenizin değerlendireceği temel standartlar:</p>
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
    </section>

    <!-- SLAYT 6: SİBER GÜVENLİK, ETİK VE DOĞRU BİLİNEN YANLIŞLAR -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Bilişim Etiği</span>
            <span class="badge badge-week">Geliştirici İpuçları</span>
          </div>
          <h2 class="slide-title">🛡️ ${weekData.tips.safetyTitle || 'Siber Güvenlik & Doğru Bilinen Yanlışlar'}</h2>
          <p class="slide-subtitle">Yazılım ve bilişim dünyasında dikkat edilmesi gereken kurallar ve yaygın yanılgılar.</p>
        </div>
      </div>

      <div class="tips-grid">
        <div class="tips-box rules">
          <h3 class="tips-title"><span>📐</span> Güvenlik & Profesyonel Standartlar</h3>
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
                <div class="myth-wrong"><span>✕</span> <strong>Yanlış:</strong> ${m.wrong}</div>
                <div class="myth-correct"><span>✓</span> <strong>Doğrusu:</strong> ${m.correct}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 7: HAFTALIK ÖZET VE GELECEK HAFTA BAKIŞI (DERS SONU KAPANIŞI) -->
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
            ${summaryKeyPoints.map(pt => `
              <li>
                <span class="bullet-dot"></span>
                <div>${pt}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="summary-card">
          <h3 class="summary-title"><span>🚀</span> Gelecek Hafta ve Bireysel Görev</h3>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-sm); padding: 1rem;">
              <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--accent-amber); font-weight: 700;">Gelecek Haftanın Konusu</span>
              <p class="next-week-topic" style="font-size: 1.05rem; font-weight: 700; margin-top: 0.3rem;">${summaryNextWeek}</p>
            </div>
            <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-sm); padding: 1rem;">
              <span style="font-size: 0.8rem; text-transform: uppercase; color: #93c5fd; font-weight: 700;">Bireysel Araştırma / Kod Görevi</span>
              <p class="next-week-homework" style="font-size: 0.95rem; margin-top: 0.3rem;">${summaryHomework}</p>
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
              <span class="badge ${ (q.isHard || qIdx === 9) ? 'badge-hard' : 'badge-code' }">
                ${ (q.isHard || qIdx === 9) ? '🔥 10. SORU (ZOR DÜZEY)' : 'Soru ' + (qIdx + 1) + ' / 10' }
              </span>
            </div>
            <h2 class="slide-title">${ (q.isHard || qIdx === 9) ? '🔥 Analiz & Derin Muhakeme Sorusu' : 'Haftalık Bilgi Kontrol Noktası' }</h2>
            <p class="slide-subtitle">${ (q.isHard || qIdx === 9) ? '⚠️ Bu soru üst düzey düşünme, dikkat ve çok adımlı analiz gerektirir!' : 'Öğrendiklerinizi pekiştirin; doğru seçeneğe dokunun.' }</p>
          </div>
          <div class="quiz-hud-live-score">
            <span class="live-score-correct">✓ <span class="score-c-count">0</span> Doğru</span>
            <span class="live-score-wrong">✕ <span class="score-w-count">0</span> Yanlış</span>
          </div>
        </div>

        <div class="quiz-pills-bar">
          ${testQuestions.map((item, pIdx) => `
            <button class="quiz-nav-pill ${pIdx === qIdx ? 'current' : ''} ${ (item.isHard || pIdx === 9) ? 'pill-hard' : '' }" 
                    data-target-q="${pIdx}" title="${ (item.isHard || pIdx === 9) ? '10. Soru (Zor)' : 'Soru ' + (pIdx + 1) }">
              ${ (item.isHard || pIdx === 9) ? '🔥 10' : (pIdx + 1) }
            </button>
          `).join('')}
        </div>

        <div class="quiz-container ${ (q.isHard || qIdx === 9) ? 'quiz-container-hard' : '' }">
          <div class="quiz-question-box ${ (q.isHard || qIdx === 9) ? 'question-box-hard' : '' }">
            <div style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: ${ (q.isHard || qIdx === 9) ? '#fbbf24' : 'var(--accent-cyan)' }; margin-bottom: 0.4rem; font-weight: 800;">
              ${ (q.isHard || qIdx === 9) ? '🔥 YILDIZLI ZOR SORU' : 'SORU ' + (qIdx + 1) }
            </div>
            ${q.question}
          </div>

          <div class="quiz-options-grid">
            ${q.options.map(opt => `
              <button class="quiz-btn" data-correct="${opt.isCorrect}">
                <span>${opt.text}</span>
              </button>
            `).join('')}
          </div>

          <div class="quiz-answer-box">
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
          <h3 style="font-size: 1.4rem; color: #ffffff;">Slayt Genel Görünümü - ${weekData.week}. Hafta</h3>
          <button class="hud-btn btn-close-overview">✕ Kapat</button>
        </div>
        <div class="overview-grid"></div>
      </div>
    </div>
  `;

  if (window.ThemeManager) {
    window.ThemeManager.update();
  }
}

function getDefaultSvg(title) {
  return `
    <svg viewBox="0 0 400 300">
      <rect width="400" height="300" rx="16" fill="#0e1526" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
      <circle cx="200" cy="120" r="50" fill="rgba(0, 240, 255, 0.1)" stroke="#00f0ff" stroke-width="3"/>
      <text x="200" y="128" text-anchor="middle" font-size="30">⚡</text>
      <text x="200" y="200" text-anchor="middle" font-size="15" font-weight="bold" fill="#ffffff">${title}</text>
      <text x="200" y="224" text-anchor="middle" font-size="12" fill="#94a3b8">MEB Bilgisayar Bilimi</text>
    </svg>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const weekParam = urlParams.get('hafta');
  const bodyWeek = document.body.dataset.week;
  const targetWeek = parseInt(weekParam || bodyWeek || '1');
  buildPresentation(targetWeek);
});
