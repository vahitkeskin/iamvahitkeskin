/**
 * Rehberlik Planı & Excel Tablo PDF Oluşturucu
 * Tam Otonom Reaktif JavaScript Uygulaması
 */

(function () {
  'use strict';

  // --- Varsayılan Başlangıç Verileri (ornekexcel.jpg baz alınarak) ---
  const DEFAULT_STATE = {
    institution: "VİRANŞEHİR ÖZEL UĞUR ORTA OKULU",
    service: "",
    mainTitle: "HAZİRAN",
    iconText: "✚",
    subtitle: "2026-2027 EĞİTİM ÖĞRETİM YILI REHBERLİK FAALİYET PLANI",
    showLogo: true,
    showSignatures: true,
    sigLeftTitle: "Hazırlayan",
    sigLeftName: "Rehber Öğretmen / Psikolojik Danışman",
    sigRightTitle: "Uygundur / Tasdik Olunur",
    sigRightName: "Okul Müdürü",

    orientation: "landscape", // 'landscape' veya 'portrait'
    theme: "theme-excel",
    gridStyle: "grid-dotted",
    fontSize: "font-md",
    emptyRowsCount: 1,

    columns: [
      { id: "sira", title: "Sıra", width: "5%" },
      { id: "calisma", title: "YAPILACAK ÇALIŞMA", width: "25%" },
      { id: "tarih", title: "TARİH", width: "14%" },
      { id: "hedef", title: "HEDEF TÜRÜ", width: "12%" },
      { id: "aciklama", title: "AÇIKLAMA", width: "30%" },
      { id: "sinif", title: "SINIF/ŞUBE", width: "14%" }
    ],

    rows: [
      {
        id: "r1",
        sira: "1",
        calisma: "Bilinçli Teknoloji Kullanımı",
        tarih: "01-04/06/2027",
        hedef: "",
        aciklama: "Faaliyet türü:Seminer\nhedef kitle: Öğrenci",
        sinif: "Tüm Sınıflar"
      },
      {
        id: "r2",
        sira: "2",
        calisma: "Değerler Eğitimi Çalışmaları",
        tarih: "07-11/06/2027",
        hedef: "",
        aciklama: "Faaliyet türü:Pano (Yardımseverlik)\nhedef kitle: Öğrenci",
        sinif: "Tüm Sınıflar"
      },
      {
        id: "r3",
        sira: "4",
        calisma: "Zaman Yönetimi",
        tarih: "14-18/06/2027",
        hedef: "",
        aciklama: "Faaliyet türü:Pano,broşür\nhedef kitle: Öğrenci",
        sinif: "Tüm Sınıflar"
      },
      {
        id: "r4",
        sira: "5",
        calisma: "Rehberlik Hizmetleri Yürütme Komisyonu Toplantısının Yapılması",
        tarih: "21-25/06/2027",
        hedef: "",
        aciklama: "Faaliyet türü: Toplantı",
        sinif: ""
      }
    ]
  };

  // Uygulama Durumu (State)
  let state = loadStoredState();
  let currentZoom = 1.0;
  let pdfBlobUrl = null;
  let pdfUpdateTimeout = null;
  let isPdfGenerating = false;
  let currentActiveTab = 'doc'; // 'doc' veya 'pdf'

  // DOM Elemanları
  const DOM = {
    // Üst Butonlar
    btnLoadSample: document.getElementById('btn-load-sample'),
    btnResetAll: document.getElementById('btn-reset-all'),
    btnPasteExcel: document.getElementById('btn-paste-excel'),
    btnToggleSettings: document.getElementById('btn-toggle-settings'),
    btnPrint: document.getElementById('btn-print'),
    btnDownloadPdf: document.getElementById('btn-download-pdf'),
    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),

    // Başlık Inputları
    inputInstitution: document.getElementById('input-institution'),
    inputService: document.getElementById('input-service'),
    inputIconText: document.getElementById('input-icon-text'),
    inputMainTitle: document.getElementById('input-main-title'),
    inputSubtitle: document.getElementById('input-subtitle'),

    // Sütunlar
    columnsContainer: document.getElementById('columns-inputs-container'),
    btnAddCustomColumn: document.getElementById('btn-add-custom-column'),
    btnResetDefaultColumns: document.getElementById('btn-reset-default-columns'),
    columnCountBadge: document.getElementById('column-count-badge'),

    // Satır Tablosu (Editör)
    editorTableHead: document.getElementById('editor-table-head'),
    editorTableBody: document.getElementById('editor-table-body'),
    btnAddRow: document.getElementById('btn-add-row'),
    btnAddRowTop: document.getElementById('btn-add-row-top'),
    btnDeleteRow: document.getElementById('btn-delete-row') || document.getElementById('btn-quick-empty-rows'),
    btnClearTable: document.getElementById('btn-clear-table'),
    rowsCountBadge: document.getElementById('rows-count-badge'),

    // İmza Alanları
    checkShowSignatures: document.getElementById('check-show-signatures'),
    inputSigLeftTitle: document.getElementById('input-sig-left-title'),
    inputSigLeftName: document.getElementById('input-sig-left-name'),
    inputSigRightTitle: document.getElementById('input-sig-right-title'),
    inputSigRightName: document.getElementById('input-sig-right-name'),

    // JSON Yedekleme
    btnExportJson: document.getElementById('btn-export-json'),
    fileImportJson: document.getElementById('file-import-json'),

    // Önizleme & PDF Alanı
    previewViewport: document.getElementById('preview-viewport'),
    tabBtnDoc: document.getElementById('tab-btn-doc'),
    tabBtnPdf: document.getElementById('tab-btn-pdf'),
    docViewWrapper: document.getElementById('doc-view-wrapper'),
    pdfIframeWrapper: document.getElementById('pdf-iframe-wrapper'),
    pdfIframe: document.getElementById('pdf-preview-iframe'),
    pdfLoadingOverlay: document.getElementById('pdf-loading-overlay'),
    btnRefreshPdf: document.getElementById('btn-refresh-pdf'),
    statusIndicator: document.querySelector('.status-indicator'),
    statusText: document.getElementById('status-text'),

    // Zoom Kontrolleri
    btnZoomIn: document.getElementById('btn-zoom-in'),
    btnZoomOut: document.getElementById('btn-zoom-out'),
    btnZoomReset: document.getElementById('btn-zoom-reset'),
    zoomLevelText: document.getElementById('zoom-level-text'),
    a4Container: document.getElementById('a4-sheet-container'),

    // Önizleme Dokümanı (Canlı Belge)
    printableDoc: document.getElementById('printable-document'),
    previewInstitution: document.getElementById('preview-institution'),
    previewService: document.getElementById('preview-service'),
    previewSubtitle: document.getElementById('preview-subtitle'),
    previewMainTitle: document.getElementById('preview-main-title'),
    previewIcon: document.getElementById('preview-icon'),
    previewTableHead: document.getElementById('preview-table-head'),
    previewTableBody: document.getElementById('preview-table-body'),
    previewSignaturesBlock: document.getElementById('preview-signatures-block'),
    previewSigLeftTitle: document.getElementById('preview-sig-left-title'),
    previewSigLeftName: document.getElementById('preview-sig-left-name'),
    previewSigRightTitle: document.getElementById('preview-sig-right-title'),
    previewSigRightName: document.getElementById('preview-sig-right-name'),
    docLogoBox: document.getElementById('doc-logo-box'),

    // Ayarlar Paneli (Drawer)
    settingsDrawer: document.getElementById('settings-drawer'),
    btnCloseSettings: document.getElementById('btn-close-settings'),
    btnOrientLandscape: document.getElementById('btn-orient-landscape'),
    btnOrientPortrait: document.getElementById('btn-orient-portrait'),
    selectTableTheme: document.getElementById('select-table-theme'),
    selectGridStyle: document.getElementById('select-grid-style'),
    selectTableFontSize: document.getElementById('select-table-font-size'),
    checkShowLogo: document.getElementById('check-show-logo'),
    inputEmptyRowsCount: document.getElementById('input-empty-rows-count'),
    labelEmptyRowsCount: document.getElementById('label-empty-rows-count'),

    // Excel Yapıştırma Modalı
    dialogPasteExcel: document.getElementById('dialog-paste-excel'),
    textareaExcelPaste: document.getElementById('textarea-excel-paste'),
    checkPasteReplace: document.getElementById('check-paste-replace'),
    btnConfirmPaste: document.getElementById('btn-confirm-paste'),
    btnCancelPaste: document.getElementById('btn-cancel-paste'),
    btnClosePasteModal: document.getElementById('btn-close-paste-modal'),

    // Toast Konteyneri
    toastContainer: document.getElementById('toast-container')
  };

  // --- Başlatma (Init) ---
  function init() {
    initTheme();
    syncFormInputsFromState();
    renderAll();
    setupEventListeners();

    // Sayfa açıldığında kullanıcının tüm kağıdı tekte görebilmesi için otomatik ekrana sığdır
    setTimeout(() => {
      fitDocumentToScreen();
    }, 60);

    // Sayfa açıldığında otomatik PDF blob oluştur (arka planda)
    schedulePdfUpdate(600);
  }

  // --- Veri Saklama ve Yükleme (LocalStorage) ---
  function loadStoredState() {
    try {
      const stored = localStorage.getItem('ugur_rehber_state');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.institution === "UĞUR OKULLARI VİRANŞEHİR KAMPÜSÜ" || parsed.institution === "VİRANŞEHİR ÖZEL UĞUR ORTA") {
          parsed.institution = "VİRANŞEHİR ÖZEL UĞUR ORTA OKULU";
        }
        if (parsed.service === "REHBERLİK VE PSİKOLOJİK DANIŞMA SERVİSİ" || parsed.service === "REHBERLİK VE PSİKOLOJİK DANIŞMANLIK SERVİSİ") {
          parsed.service = "";
        }
        if (parsed.emptyRowsCount === 12 || parsed.emptyRowsCount === undefined) {
          parsed.emptyRowsCount = 1;
        }
        return parsed;
      }
    } catch (e) {
      console.warn("Kayıtlı veri yüklenirken hata oluştu:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  function saveStateToStorage() {
    try {
      localStorage.setItem('ugur_rehber_state', JSON.stringify(state));
    } catch (e) {
      console.warn("Veri kaydedilemedi:", e);
    }
  }

  // --- Tema Yönetimi ---
  function initTheme() {
    const savedTheme = localStorage.getItem('ugur_ui_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ugur_ui_theme', next);
    updateThemeIcon(next);
    showToast(`Görünüm teması: ${next === 'dark' ? 'Karanlık Mod' : 'Aydınlık Mod'}`, 'info');
  }

  function updateThemeIcon(theme) {
    if (DOM.themeIcon) {
      DOM.themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  // --- Form Elemanlarını State ile Eşitleme ---
  function syncFormInputsFromState() {
    DOM.inputInstitution.value = state.institution || '';
    DOM.inputService.value = state.service || '';
    DOM.inputIconText.value = state.iconText || '✚';
    DOM.inputMainTitle.value = state.mainTitle || '';
    DOM.inputSubtitle.value = state.subtitle || '';

    DOM.checkShowSignatures.checked = state.showSignatures !== false;
    DOM.inputSigLeftTitle.value = state.sigLeftTitle || '';
    DOM.inputSigLeftName.value = state.sigLeftName || '';
    DOM.inputSigRightTitle.value = state.sigRightTitle || '';
    DOM.inputSigRightName.value = state.sigRightName || '';

    DOM.selectTableTheme.value = state.theme || 'theme-excel';
    DOM.selectGridStyle.value = state.gridStyle || 'grid-dotted';
    DOM.selectTableFontSize.value = state.fontSize || 'font-md';
    DOM.checkShowLogo.checked = state.showLogo !== false;
    DOM.inputEmptyRowsCount.value = state.emptyRowsCount || 0;
    DOM.labelEmptyRowsCount.textContent = `${state.emptyRowsCount || 0} Satır`;

    updateOrientationUI(state.orientation || 'landscape');
  }

  // --- Arayüz ve Önizleme Render İşlemleri ---
  function renderAll() {
    renderColumnsCustomizer();
    renderEditorTable();
    renderLiveDocument();
    updateBadges();
    saveStateToStorage();
  }

  function updateBadges() {
    if (DOM.columnCountBadge) {
      DOM.columnCountBadge.textContent = `${state.columns.length} Sütun`;
    }
    if (DOM.rowsCountBadge) {
      DOM.rowsCountBadge.textContent = `${state.rows.length} Dolu Satır`;
    }
  }

  // Sütun Düzenleyici (Sol Panel)
  function renderColumnsCustomizer() {
    DOM.columnsContainer.innerHTML = '';
    state.columns.forEach((col, idx) => {
      const item = document.createElement('div');
      item.className = 'column-item';

      const idxLabel = document.createElement('span');
      idxLabel.className = 'column-idx';
      idxLabel.textContent = `${idx + 1}`;

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-control column-input';
      input.value = col.title;
      input.placeholder = `Sütun ${idx + 1} Başlığı`;
      input.dataset.colId = col.id;

      input.addEventListener('input', (e) => {
        col.title = e.target.value;
        renderEditorTableHead();
        renderLiveDocument();
        schedulePdfUpdate(800);
        saveStateToStorage();
      });

      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn-remove-col';
      removeBtn.title = 'Sütunu Sil';
      removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
      removeBtn.disabled = state.columns.length <= 1; // En az 1 sütun kalmalı

      removeBtn.addEventListener('click', () => {
        if (state.columns.length <= 1) return;
        state.columns.splice(idx, 1);
        renderAll();
        schedulePdfUpdate(800);
      });

      item.appendChild(idxLabel);
      item.appendChild(input);
      item.appendChild(removeBtn);
      DOM.columnsContainer.appendChild(item);
    });
  }

  // Editör Tablosu (Sol Panel)
  function renderEditorTable() {
    renderEditorTableHead();
    renderEditorTableBody();
  }

  function renderEditorTableHead() {
    DOM.editorTableHead.innerHTML = '';
    const tr = document.createElement('tr');

    state.columns.forEach(col => {
      const th = document.createElement('th');
      th.textContent = col.title;
      th.style.width = col.width || 'auto';
      tr.appendChild(th);
    });

    // İşlem sütunu
    const thActions = document.createElement('th');
    thActions.className = 'row-action-cell';
    thActions.textContent = 'İşlem';
    tr.appendChild(thActions);

    DOM.editorTableHead.appendChild(tr);
  }

  function renderEditorTableBody() {
    DOM.editorTableBody.innerHTML = '';

    state.rows.forEach((row, rowIdx) => {
      const tr = document.createElement('tr');
      tr.dataset.rowId = row.id;

      state.columns.forEach(col => {
        const td = document.createElement('td');
        const input = document.createElement('textarea');
        input.className = 'cell-input';
        input.rows = (row[col.id] && row[col.id].includes('\n')) ? 2 : 1;
        input.value = row[col.id] || '';

        input.addEventListener('input', (e) => {
          row[col.id] = e.target.value;
          // Anında canlı belgeye yansıt
          renderLiveDocument();
          schedulePdfUpdate(1000);
          saveStateToStorage();
        });

        td.appendChild(input);
        tr.appendChild(td);
      });

      // Satır İşlem Butonları (Kopyala, Sil, Yukarı/Aşağı)
      const tdActions = document.createElement('td');
      tdActions.className = 'row-action-cell';
      tdActions.innerHTML = `
        <div class="row-actions-group">
          <button class="btn-row-action" data-action="up" title="Yukarı Taşı"><i class="fa-solid fa-chevron-up"></i></button>
          <button class="btn-row-action" data-action="down" title="Aşağı Taşı"><i class="fa-solid fa-chevron-down"></i></button>
          <button class="btn-row-action" data-action="clone" title="Satırı Çoğalt"><i class="fa-solid fa-clone"></i></button>
          <button class="btn-row-action btn-row-delete" data-action="delete" title="Satırı Sil"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;

      tdActions.querySelector('[data-action="up"]').addEventListener('click', () => moveRow(rowIdx, -1));
      tdActions.querySelector('[data-action="down"]').addEventListener('click', () => moveRow(rowIdx, 1));
      tdActions.querySelector('[data-action="clone"]').addEventListener('click', () => duplicateRow(rowIdx));
      tdActions.querySelector('[data-action="delete"]').addEventListener('click', () => deleteRow(rowIdx));

      tr.appendChild(tdActions);
      DOM.editorTableBody.appendChild(tr);
    });
  }

  // --- CANLI A4 BELGE ÖNİZLEMESİ (Sağ Panel) ---
  function renderLiveDocument() {
    // 1. Üst Metinler
    DOM.previewInstitution.textContent = state.institution || '';
    DOM.previewInstitution.style.display = state.institution ? 'block' : 'none';

    DOM.previewService.textContent = state.service || '';
    DOM.previewService.style.display = state.service ? 'block' : 'none';

    DOM.previewSubtitle.textContent = state.subtitle || '';
    DOM.previewSubtitle.style.display = state.subtitle ? 'block' : 'none';

    DOM.previewMainTitle.textContent = state.mainTitle || '';
    DOM.previewIcon.textContent = state.iconText || '';
    DOM.previewIcon.style.display = state.iconText ? 'inline-block' : 'none';

    // Logo Görünürlüğü
    DOM.docLogoBox.style.display = state.showLogo ? 'flex' : 'none';

    // 2. Tablo Sınıfları ve Stili
    DOM.printableDoc.className = `print-document ${state.orientation} ${state.theme} ${state.gridStyle} ${state.fontSize}`;

    // 3. Tablo Başlıkları
    DOM.previewTableHead.innerHTML = '';
    const trHead = document.createElement('tr');
    state.columns.forEach(col => {
      const th = document.createElement('th');
      th.textContent = col.title;
      th.style.width = col.width || 'auto';
      trHead.appendChild(th);
    });
    DOM.previewTableHead.appendChild(trHead);

    // 4. Tablo Satırları (Veriler)
    DOM.previewTableBody.innerHTML = '';
    state.rows.forEach(row => {
      const tr = document.createElement('tr');
      state.columns.forEach(col => {
        const td = document.createElement('td');
        td.className = `col-${col.id}`;
        td.textContent = row[col.id] || '';
        tr.appendChild(td);
      });
      DOM.previewTableBody.appendChild(tr);
    });

    // 5. Ekstra Boş Izgara Satırları (Excel hissi için)
    const emptyCount = parseInt(state.emptyRowsCount, 10) || 0;
    const startIndex = state.rows.length + 1;
    for (let i = 0; i < emptyCount; i++) {
      const trEmpty = document.createElement('tr');
      trEmpty.className = 'empty-row';
      state.columns.forEach(col => {
        const td = document.createElement('td');
        td.className = `col-${col.id}`;
        if (col.id === 'sira') {
          td.textContent = (startIndex + i).toString();
        } else {
          td.innerHTML = '&nbsp;';
        }
        trEmpty.appendChild(td);
      });
      DOM.previewTableBody.appendChild(trEmpty);
    }

    // 6. İmza / Onay Bloğu
    if (state.showSignatures) {
      DOM.previewSignaturesBlock.style.display = 'flex';
      DOM.previewSigLeftTitle.textContent = state.sigLeftTitle || 'Hazırlayan';
      DOM.previewSigLeftName.textContent = state.sigLeftName || '';
      DOM.previewSigRightTitle.textContent = state.sigRightTitle || 'Tasdik Olunur';
      DOM.previewSigRightName.textContent = state.sigRightName || '';
    } else {
      DOM.previewSignaturesBlock.style.display = 'none';
    }

    // Durum göstergesi
    setSyncStatus(true);
  }

  // --- GERÇEK PDF OLUŞTURMA & CANLI IFRAME GÜNCELLEME ---
  function schedulePdfUpdate(delayMs = 800) {
    if (pdfUpdateTimeout) clearTimeout(pdfUpdateTimeout);
    setSyncStatus(false);

    pdfUpdateTimeout = setTimeout(() => {
      generatePdfBlob();
    }, delayMs);
  }

  function setSyncStatus(isLive) {
    if (DOM.statusIndicator && DOM.statusText) {
      if (isLive) {
        DOM.statusIndicator.className = 'status-indicator live';
        DOM.statusText.textContent = 'Canlı Senkronize';
      } else {
        DOM.statusIndicator.className = 'status-indicator syncing';
        DOM.statusText.textContent = 'PDF Hazırlanıyor...';
      }
    }
  }

  function generatePdfBlob(callback) {
    if (typeof html2pdf === 'undefined') {
      console.warn("html2pdf kütüphanesi henüz yüklenmedi.");
      return;
    }

    if (isPdfGenerating) return;
    isPdfGenerating = true;

    if (DOM.pdfLoadingOverlay) {
      DOM.pdfLoadingOverlay.classList.add('active');
    }

    const docElement = document.getElementById('printable-document');
    const opt = {
      margin:       [8, 8, 8, 8],
      filename:     getGeneratedFilename(),
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: state.orientation || 'landscape' }
    };

    html2pdf().from(docElement).set(opt).outputPdf('blob').then(function (blob) {
      // Önceki blob URL'sini bellek sızıntısını önlemek için serbest bırak
      if (pdfBlobUrl) {
        URL.revokeObjectURL(pdfBlobUrl);
      }

      pdfBlobUrl = URL.createObjectURL(blob);

      if (DOM.pdfIframe) {
        DOM.pdfIframe.src = pdfBlobUrl;
      }

      isPdfGenerating = false;
      if (DOM.pdfLoadingOverlay) {
        DOM.pdfLoadingOverlay.classList.remove('active');
      }
      setSyncStatus(true);

      if (typeof callback === 'function') {
        callback(blob, pdfBlobUrl);
      }
    }).catch(function (err) {
      console.error("PDF oluşturma hatası:", err);
      isPdfGenerating = false;
      if (DOM.pdfLoadingOverlay) {
        DOM.pdfLoadingOverlay.classList.remove('active');
      }
      setSyncStatus(true);
    });
  }

  function getGeneratedFilename() {
    const rawName = `${state.institution || 'UgurOkullari'}_${state.mainTitle || 'Plan'}_${state.subtitle || 'Rehberlik'}`;
    const cleanName = rawName.replace(/[^a-zA-Z0-9ığüşöçİĞÜŞÖÇ_]/g, '_').substring(0, 50);
    return `${cleanName}.pdf`;
  }

  function downloadPdfDirectly() {
    showToast("PDF dosyası oluşturuluyor ve indiriliyor...", "info");
    if (typeof html2pdf === 'undefined') {
      window.print();
      return;
    }

    const docElement = document.getElementById('printable-document');
    const opt = {
      margin:       [8, 8, 8, 8],
      filename:     getGeneratedFilename(),
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: state.orientation || 'landscape' }
    };

    html2pdf().from(docElement).set(opt).save().then(() => {
      showToast("PDF başarıyla bilgisayarınıza indirildi!", "success");
    });
  }

  // --- Satır İşlemleri (Ekleme, Silme, Taşıma) ---
  function addNewRow(atStart = false) {
    const newId = 'r_' + Date.now() + Math.random().toString(36).substr(2, 4);
    const nextSira = (state.rows.length + 1).toString();

    const newRow = {
      id: newId,
      sira: nextSira
    };

    state.columns.forEach(col => {
      if (col.id !== 'sira') {
        newRow[col.id] = '';
      }
    });

    if (atStart) {
      state.rows.unshift(newRow);
    } else {
      state.rows.push(newRow);
    }

    renderAll();
    schedulePdfUpdate(600);
    showToast("Yeni satır eklendi.", "info");

    // En son eklenen satıra odaklan
    setTimeout(() => {
      const inputs = DOM.editorTableBody.querySelectorAll('.cell-input');
      if (inputs.length > 0) {
        inputs[inputs.length - state.columns.length + 1].focus();
      }
    }, 50);
  }

  function deleteRow(index) {
    if (index >= 0 && index < state.rows.length) {
      state.rows.splice(index, 1);
      renderAll();
      schedulePdfUpdate(600);
      showToast("Satır silindi.", "info");
    }
  }

  function duplicateRow(index) {
    if (index >= 0 && index < state.rows.length) {
      const cloned = JSON.parse(JSON.stringify(state.rows[index]));
      cloned.id = 'r_' + Date.now() + Math.random().toString(36).substr(2, 4);
      cloned.sira = (parseInt(cloned.sira, 10) + 1 || (state.rows.length + 1)).toString();
      state.rows.splice(index + 1, 0, cloned);
      renderAll();
      schedulePdfUpdate(600);
      showToast("Satır kopyalandı.", "success");
    }
  }

  function moveRow(index, direction) {
    const target = index + direction;
    if (target < 0 || target >= state.rows.length) return;

    const temp = state.rows[index];
    state.rows[index] = state.rows[target];
    state.rows[target] = temp;

    renderAll();
    schedulePdfUpdate(600);
  }

  function clearAllRows() {
    state.rows = [];
    renderAll();
    schedulePdfUpdate(600);
    showToast("Tüm satırlar temizlendi.", "info");
  }

  function deleteLastRow() {
    if (state.rows.length > 0) {
      state.rows.pop();
      renderAll();
      schedulePdfUpdate(600);
      showToast("Son satır silindi.", "info");
    } else if (state.emptyRowsCount > 0) {
      state.emptyRowsCount--;
      DOM.inputEmptyRowsCount.value = state.emptyRowsCount;
      DOM.labelEmptyRowsCount.textContent = `${state.emptyRowsCount} Satır`;
      renderLiveDocument();
      schedulePdfUpdate(600);
      showToast("Boş satır silindi.", "info");
    } else {
      showToast("Tabloda silinecek satır kalmadı.", "error");
    }
  }

  // --- Sütun İşlemleri ---
  function addNewCustomColumn() {
    const colNum = state.columns.length + 1;
    const colId = 'col_' + Date.now();
    state.columns.push({
      id: colId,
      title: `YENİ SÜTUN ${colNum}`,
      width: '15%'
    });
    renderAll();
    schedulePdfUpdate(800);
    showToast("Yeni sütun eklendi.", "success");
  }

  function resetDefaultColumns() {
    state.columns = JSON.parse(JSON.stringify(DEFAULT_STATE.columns));
    renderAll();
    schedulePdfUpdate(800);
    showToast("Varsayılan sütun yapısına dönüldü.", "info");
  }

  // --- Excel'den Yapıştırma Ayrıştırıcı (TSV Parser) ---
  function handleExcelPaste() {
    const rawText = DOM.textareaExcelPaste.value.trim();
    if (!rawText) {
      showToast("Lütfen yapıştırılacak veri girin.", "error");
      return;
    }

    const lines = rawText.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length === 0) return;

    const isReplace = DOM.checkPasteReplace.checked;
    const newRows = [];

    lines.forEach((line, lineIdx) => {
      const cells = line.split('\t');
      const rowObj = {
        id: 'paste_' + Date.now() + '_' + lineIdx
      };

      state.columns.forEach((col, colIdx) => {
        rowObj[col.id] = (cells[colIdx] || '').trim();
      });

      newRows.push(rowObj);
    });

    if (isReplace) {
      state.rows = newRows;
    } else {
      state.rows = state.rows.concat(newRows);
    }

    DOM.dialogPasteExcel.close();
    DOM.textareaExcelPaste.value = '';
    renderAll();
    schedulePdfUpdate(600);
    showToast(`${newRows.length} satır Excel'den başarıyla aktarıldı!`, "success");
  }

  // --- Şablon Yükleme (Masaüstü ornekexcel.jpg Verisi) ---
  function loadSampleTemplate() {
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    syncFormInputsFromState();
    renderAll();
    schedulePdfUpdate(600);
    showToast("Örnek Excel şablonu (ornekexcel.jpg) yüklendi!", "success");
  }

  // --- Her Şeyi Sıfırla (Fabrika Ayarlarına Dön) ---
  function resetEverything() {
    if (confirm("DİKKAT: Yaptığınız tüm düzenlemeler silinecek ve sayfa ilk varsayılan şablonuna dönecektir.\n\nHer şeyi sıfırlamak istiyor musunuz?")) {
      try {
        localStorage.removeItem('ugur_rehber_state');
      } catch (e) {
        console.warn("LocalStorage silinemedi:", e);
      }
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      syncFormInputsFromState();
      renderAll();
      setTimeout(fitDocumentToScreen, 60);
      schedulePdfUpdate(400);
      showToast("Tüm veriler ve ayarlar başarıyla sıfırlandı!", "success");
    }
  }

  // --- JSON Yedekleme / Yükleme ---
  function exportJsonData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Rehberlik_Plani_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("JSON verisi indirildi.", "success");
  }

  function importJsonData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.columns && imported.rows) {
          state = imported;
          syncFormInputsFromState();
          renderAll();
          schedulePdfUpdate(600);
          showToast("JSON verileri başarıyla yüklendi!", "success");
        } else {
          showToast("Geçersiz JSON formatı.", "error");
        }
      } catch (err) {
        showToast("JSON dosyası okunamadı.", "error");
      }
    };
    reader.readAsText(file);
  }

  // --- Otomatik Ekrana Sığdırma ve Zoom İşlemleri ---
  function fitDocumentToScreen() {
    if (!DOM.previewViewport || !DOM.printableDoc) return;

    // Viewport kullanılabilir alanı (çevresinde ferah 32px pay bırakılır)
    const paddingX = 48;
    const paddingY = 48;
    const availWidth = Math.max(DOM.previewViewport.clientWidth - paddingX, 220);
    const availHeight = Math.max(DOM.previewViewport.clientHeight - paddingY, 220);

    // Belgenin gerçek piksel boyutları
    const docWidth = DOM.printableDoc.offsetWidth || (state.orientation === 'landscape' ? 1123 : 794);
    const docHeight = DOM.printableDoc.offsetHeight || (state.orientation === 'landscape' ? 794 : 1123);

    const scaleX = availWidth / docWidth;
    const scaleY = availHeight / docHeight;

    // Tüm kağıdın tek bakışta hem enine hem boyuna tam sığması için Math.min:
    let fitScale = Math.min(scaleX, scaleY);

    // Sınırlar: min %25, max %130
    fitScale = Math.max(0.25, Math.min(fitScale, 1.3));

    // Temiz yüzde için iki basamağa yuvarla
    fitScale = Math.round(fitScale * 100) / 100;

    setZoom(fitScale);
  }

  function setZoom(level) {
    currentZoom = Math.min(Math.max(level, 0.25), 2.5);

    if (DOM.a4Container && DOM.printableDoc && DOM.docViewWrapper) {
      const docW = DOM.printableDoc.offsetWidth;
      const docH = DOM.printableDoc.offsetHeight;

      DOM.a4Container.style.width = `${docW}px`;
      DOM.a4Container.style.height = `${docH}px`;
      DOM.a4Container.style.transform = `scale(${currentZoom})`;
      DOM.a4Container.style.transformOrigin = 'top left';

      // docViewWrapper boyutunu tam ölçekli görsel boyuta eşitle (böylece tam ortalanır ve gereksiz scrollbar oluşmaz)
      DOM.docViewWrapper.style.width = `${Math.round(docW * currentZoom)}px`;
      DOM.docViewWrapper.style.height = `${Math.round(docH * currentZoom)}px`;
      DOM.docViewWrapper.style.margin = 'auto';
    }

    if (DOM.zoomLevelText) {
      DOM.zoomLevelText.textContent = `${Math.round(currentZoom * 100)}%`;
    }
  }

  // --- Sayfa Yönü Ayarı ---
  function setOrientation(orientation) {
    state.orientation = orientation;
    updateOrientationUI(orientation);
    renderLiveDocument();
    setTimeout(fitDocumentToScreen, 60);
    schedulePdfUpdate(600);
    saveStateToStorage();
    showToast(`Sayfa yönü: ${orientation === 'landscape' ? 'Yatay' : 'Dikey'} yapıldı.`, "info");
  }

  function updateOrientationUI(orientation) {
    DOM.btnOrientLandscape.classList.toggle('active', orientation === 'landscape');
    DOM.btnOrientPortrait.classList.toggle('active', orientation === 'portrait');
  }

  // --- Bildirim Kutucuğu (Toast) ---
  function showToast(message, type = 'info') {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? 'fa-check' : (type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info');
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // --- Olay Dinleyicileri (Event Listeners) ---
  function setupEventListeners() {
    // 1. Üst Aksiyonlar
    DOM.btnLoadSample.addEventListener('click', loadSampleTemplate);
    if (DOM.btnResetAll) {
      DOM.btnResetAll.addEventListener('click', resetEverything);
    }
    DOM.btnPasteExcel.addEventListener('click', () => DOM.dialogPasteExcel.showModal());
    DOM.btnClosePasteModal.addEventListener('click', () => DOM.dialogPasteExcel.close());
    DOM.btnCancelPaste.addEventListener('click', () => DOM.dialogPasteExcel.close());
    DOM.btnConfirmPaste.addEventListener('click', handleExcelPaste);

    DOM.btnToggleSettings.addEventListener('click', () => {
      DOM.settingsDrawer.classList.toggle('open');
    });
    DOM.btnCloseSettings.addEventListener('click', () => {
      DOM.settingsDrawer.classList.remove('open');
    });

    DOM.btnPrint.addEventListener('click', () => window.print());
    DOM.btnDownloadPdf.addEventListener('click', downloadPdfDirectly);
    DOM.btnThemeToggle.addEventListener('click', toggleTheme);

    // 2. Başlık Inputları
    const titleInputs = [
      { el: DOM.inputInstitution, key: 'institution' },
      { el: DOM.inputService, key: 'service' },
      { el: DOM.inputIconText, key: 'iconText' },
      { el: DOM.inputMainTitle, key: 'mainTitle' },
      { el: DOM.inputSubtitle, key: 'subtitle' },
      { el: DOM.inputSigLeftTitle, key: 'sigLeftTitle' },
      { el: DOM.inputSigLeftName, key: 'sigLeftName' },
      { el: DOM.inputSigRightTitle, key: 'sigRightTitle' },
      { el: DOM.inputSigRightName, key: 'sigRightName' }
    ];

    titleInputs.forEach(({ el, key }) => {
      el.addEventListener('input', (e) => {
        state[key] = e.target.value;
        renderLiveDocument();
        schedulePdfUpdate(800);
        saveStateToStorage();
      });
    });

    DOM.checkShowSignatures.addEventListener('change', (e) => {
      state.showSignatures = e.target.checked;
      renderLiveDocument();
      schedulePdfUpdate(600);
      saveStateToStorage();
    });

    // 3. Sütun ve Satır Araç Çubuğu
    DOM.btnAddCustomColumn.addEventListener('click', addNewCustomColumn);
    DOM.btnResetDefaultColumns.addEventListener('click', resetDefaultColumns);
    DOM.btnAddRow.addEventListener('click', () => addNewRow(false));
    DOM.btnAddRowTop.addEventListener('click', () => addNewRow(false));
    if (DOM.btnDeleteRow) {
      DOM.btnDeleteRow.addEventListener('click', deleteLastRow);
    }
    DOM.btnClearTable.addEventListener('click', () => {
      if (confirm("Tablodaki tüm satırlar silinsin mi?")) {
        clearAllRows();
      }
    });

    // 4. JSON Yedekleme
    DOM.btnExportJson.addEventListener('click', exportJsonData);
    DOM.fileImportJson.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        importJsonData(e.target.files[0]);
      }
    });

    // 5. Sekmeler (Tablar): Canlı Belge vs Gerçek PDF iframe
    DOM.tabBtnDoc.addEventListener('click', () => {
      currentActiveTab = 'doc';
      DOM.tabBtnDoc.classList.add('active');
      DOM.tabBtnPdf.classList.remove('active');
      DOM.docViewWrapper.classList.add('active');
      DOM.pdfIframeWrapper.classList.remove('active');
      setTimeout(fitDocumentToScreen, 50);
    });

    DOM.tabBtnPdf.addEventListener('click', () => {
      currentActiveTab = 'pdf';
      DOM.tabBtnPdf.classList.add('active');
      DOM.tabBtnDoc.classList.remove('active');
      DOM.pdfIframeWrapper.classList.add('active');
      DOM.docViewWrapper.classList.remove('active');

      // PDF iframe'ini anında tazele
      if (!pdfBlobUrl) {
        generatePdfBlob();
      }
    });

    DOM.btnRefreshPdf.addEventListener('click', () => {
      generatePdfBlob(() => {
        showToast("Gerçek PDF dosyası güncellendi!", "success");
      });
    });

    // 6. Zoom Kontrolleri
    DOM.btnZoomIn.addEventListener('click', () => setZoom(currentZoom + 0.1));
    DOM.btnZoomOut.addEventListener('click', () => setZoom(currentZoom - 0.1));
    DOM.btnZoomReset.addEventListener('click', () => {
      fitDocumentToScreen();
      showToast("Tüm kağıt ekrana sığdırıldı.", "info");
    });

    // Pencere yeniden boyutlandırıldığında otomatik sığdır
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (currentActiveTab === 'doc') {
          fitDocumentToScreen();
        }
      }, 120);
    });

    // 7. Ayarlar Çekmecesi Kontrolleri
    DOM.btnOrientLandscape.addEventListener('click', () => setOrientation('landscape'));
    DOM.btnOrientPortrait.addEventListener('click', () => setOrientation('portrait'));

    DOM.selectTableTheme.addEventListener('change', (e) => {
      state.theme = e.target.value;
      renderLiveDocument();
      schedulePdfUpdate(600);
      saveStateToStorage();
    });

    DOM.selectGridStyle.addEventListener('change', (e) => {
      state.gridStyle = e.target.value;
      renderLiveDocument();
      schedulePdfUpdate(600);
      saveStateToStorage();
    });

    DOM.selectTableFontSize.addEventListener('change', (e) => {
      state.fontSize = e.target.value;
      renderLiveDocument();
      schedulePdfUpdate(600);
      saveStateToStorage();
    });

    DOM.checkShowLogo.addEventListener('change', (e) => {
      state.showLogo = e.target.checked;
      renderLiveDocument();
      schedulePdfUpdate(600);
      saveStateToStorage();
    });

    DOM.inputEmptyRowsCount.addEventListener('input', (e) => {
      state.emptyRowsCount = parseInt(e.target.value, 10);
      DOM.labelEmptyRowsCount.textContent = `${state.emptyRowsCount} Satır`;
      renderLiveDocument();
      schedulePdfUpdate(800);
      saveStateToStorage();
    });
  }

  // Uygulamayı Başlat
  document.addEventListener('DOMContentLoaded', init);
})();
