/**
 * 6. Sınıf Bilişim Teknolojileri - Slayt Oluşturucu (Presentation Builder)
 * curriculum-data.js dosyasındaki verileri alarak 8 slaytlık zengin, görsel
 * ve modern sunum yapısını otomatik olarak oluşturur.
 */

function buildPresentation(weekNum) {
  const container = document.getElementById('presentation-deck');
  if (!container) return;

  const weekData = CURRICULUM_DATA.find(w => w.week === weekNum);
  if (!weekData) {
    container.innerHTML = `<div style="padding: 2rem; color: #ef4444;"><h3>Hafta ${weekNum} verisi bulunamadı.</h3></div>`;
    return;
  }

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

    <!-- SLAYT 7: İNTERAKTİF MİNİ SINAV -->
    <section class="slide">
      <div class="slide-header">
        <div class="slide-title-box">
          <div class="header-badges">
            <span class="badge badge-unit">${weekData.unitBadge || weekData.unit}</span>
            <span class="badge badge-week">${weekData.week}. Hafta</span>
          </div>
          <h2>Pekiştirme: Akıllı Tahta Mini Testi</h2>
          <p>Öğrendiklerimizi pekiştirelim! Doğru cevabı bulmak için şıkka tıklayın.</p>
        </div>
        <div class="header-meta">Sıra Sende!</div>
      </div>
      <div class="slide-body">
        <div class="quiz-container">
          <div class="quiz-card">
            <div class="quiz-q">
              <span>❓</span>
              <div>${weekData.quiz.question}</div>
            </div>
            <div class="quiz-options">
              ${weekData.quiz.options.map(opt => `
                <button class="quiz-opt" data-correct="${opt.isCorrect}">${opt.text}</button>
              `).join('')}
            </div>
            <div class="quiz-answer">
              ${weekData.quiz.explanation}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SLAYT 8: HAFTALIK ÖZET & EV ETKİNLİĞİ -->
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
