/**
 * MEB 4. Sınıf Bilişim Teknolojileri ve Yazılım - Slayt Oluşturucu (Presentation Builder)
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

    <!-- SLAYT 7: İNTERAKTİF AKILLI TAHTA MİNİ SINAVI -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">Sıra Sende!</span>
            <span class="badge badge-week">${weekData.week}. Hafta Değerlendirme</span>
          </div>
          <h2 class="slide-title">Akıllı Tahta İnteraktif Mini Sınavı</h2>
          <p class="slide-subtitle">Hadi öğrendiklerimizi test edelim! Doğru olduğunu düşündüğünüz şıkka tıklayın.</p>
        </div>
        <div style="font-size: 0.9rem; color: var(--accent-emerald); font-weight: 700;">Hızlı Pekiştirme</div>
      </div>

      <div class="quiz-container">
        <div class="quiz-question-box">
          ❓ ${weekData.quiz.question}
        </div>
        <div class="quiz-options-grid">
          ${weekData.quiz.options.map(opt => `
            <button class="quiz-btn" data-correct="${opt.isCorrect}">
              <span>${opt.text}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-answer-box">
          <strong>Çözüm & Açıklama:</strong> ${weekData.quiz.explanation}
        </div>
      </div>
    </section>

    <!-- SLAYT 8: HAFTALIK ÖZET VE GELECEK HAFTA BAKIŞI -->
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
            ${weekData.summary.keyPoints.map(pt => `
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
              <p style="font-size: 1.05rem; color: #ffffff; font-weight: 700; margin-top: 0.3rem;">${weekData.summary.nextWeek}</p>
            </div>
            <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-sm); padding: 1rem;">
              <span style="font-size: 0.8rem; text-transform: uppercase; color: #93c5fd; font-weight: 700;">Bireysel Araştırma / Kod Görevi</span>
              <p style="font-size: 0.95rem; color: #cbd5e1; margin-top: 0.3rem;">${weekData.summary.homework}</p>
            </div>
          </div>
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
