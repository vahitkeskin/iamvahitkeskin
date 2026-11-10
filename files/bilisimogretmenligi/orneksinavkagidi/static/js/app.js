// ==========================================================================
// Bilişim Sınav Kağıdı Hazırlama & Yönetim Sistemi - Frontend Uygulaması
// ==========================================================================

const AppState = {
  header: {
    year: "2026-2027 EĞİTİM ÖĞRETİM YILI",
    school: "Özel Viranşehir Uğur Anadolu Lisesi",
    lesson: "SEÇMELİ TÜRK SOSYAL HAYATINDA AİLE",
    term: "1.DÖNEM 1. YAZILI",
    student_name: "",
    student_class: "",
    student_no: "",
    student_score: ""
  },
  questions: [],
  viewMode: "questions", // 'questions' (Soru Kağıdı) veya 'answers' (Cevap Anahtarı)
  colorMode: "bw",       // 'bw' (Siyah/Beyaz) veya 'color' (Renkli)
  answerColor: "#d32f2f",// Varsayılan renk: Kırmızı
  zoomLevel: 1.0,
  printers: []
};

// Sayfa yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  loadInitialExam();
});

// --------------------------------------------------------------------------
// Başlangıç Sınav Kağıdını Yükleme (orneksinavkagidi.jpg Replikası)
// --------------------------------------------------------------------------
async function loadInitialExam() {
  try {
    const res = await fetch("/api/initial-exam");
    if (res.ok) {
      const data = await res.json();
      AppState.header = Object.assign({}, AppState.header, data.header);
      AppState.questions = data.questions || [];
      populateForm();
      renderExamSheet();
      renderQuestionsList();
    }
  } catch (err) {
    console.error("Başlangıç sınavı yüklenirken hata:", err);
  }
}

// --------------------------------------------------------------------------
// Form Alanlarını State ile Doldurma
// --------------------------------------------------------------------------
function populateForm() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("input-year", AppState.header.year);
  setVal("input-school", AppState.header.school);
  setVal("input-lesson", AppState.header.lesson);
  setVal("input-term", AppState.header.term);
  setVal("input-student-name", AppState.header.student_name);
  setVal("input-student-class", AppState.header.student_class);
  setVal("input-student-no", AppState.header.student_no);
  setVal("input-student-score", AppState.header.student_score);
}

// --------------------------------------------------------------------------
// A4 Kağıdı Canlı Render (orneksinavkagidi.jpg Şablonunun Birebir Aynısı)
// --------------------------------------------------------------------------
function renderExamSheet() {
  const h = AppState.header;

  // Başlık Bilgileri
  const elYear = document.getElementById("sheet-year");
  const elSchool = document.getElementById("sheet-school");
  const elLesson = document.getElementById("sheet-lesson");
  const elTerm = document.getElementById("sheet-term");

  if (elYear) elYear.textContent = h.year;
  if (elSchool) elSchool.textContent = h.school;
  if (elLesson) elLesson.textContent = h.lesson;
  if (elTerm) elTerm.textContent = h.term;

  // Sabit Alanlar (Öğrenci Bilgileri)
  const elStudentName = document.getElementById("sheet-student-name");
  const elStudentClass = document.getElementById("sheet-student-class");
  const elStudentNo = document.getElementById("sheet-student-no");
  const elStudentScore = document.getElementById("sheet-student-score");

  if (elStudentName) elStudentName.textContent = h.student_name ? " " + h.student_name : "";
  if (elStudentClass) elStudentClass.textContent = h.student_class ? " " + h.student_class : "";
  if (elStudentNo) elStudentNo.textContent = h.student_no ? " " + h.student_no : "";
  if (elStudentScore) elStudentScore.textContent = h.student_score ? " " + h.student_score : "";

  // Soruların Çizimi
  const container = document.getElementById("sheet-questions-container");
  if (!container) return;

  container.innerHTML = "";

  const isAnswerMode = (AppState.viewMode === "answers");
  const isColor = (AppState.colorMode === "color");
  const activeColor = isColor ? AppState.answerColor : "#000000";

  // Dotted lines pattern identical to orneksinavkagidi.jpg
  const dotsLine1 = "...................................................................................................................................";
  const dotsLine2 = "........................................................................................................................................";
  const dotsLine3 = "........................................................................................................................................";
  const dotsLine4 = ".........................................................................................";

  AppState.questions.forEach((q, idx) => {
    const qNum = idx + 1;
    const block = document.createElement("div");
    block.className = "exam-question-block";

    // Soru Metni Satırı
    const qTextDiv = document.createElement("div");
    qTextDiv.className = "exam-question-text";
    qTextDiv.innerHTML = `<span class="q-num">${qNum}. Soru:</span> <span class="q-content" contenteditable="true" data-qid="${q.id}" data-field="question">${escapeHtml(q.question)}</span> <span class="q-pts">(${q.points} Puan)</span>`;
    block.appendChild(qTextDiv);

    if (!isAnswerMode) {
      // Soru Kağıdı Modu: 4 sıra noktalı cevap alanı
      const dottedDiv = document.createElement("div");
      dottedDiv.className = "dotted-answer-lines";
      dottedDiv.innerHTML = `
        <div class="dotted-line-row"><strong>Cevap:</strong>${dotsLine1}</div>
        <div class="dotted-line-row">${dotsLine2}</div>
        <div class="dotted-line-row">${dotsLine3}</div>
        <div class="dotted-line-row">${dotsLine4}</div>
      `;
      block.appendChild(dottedDiv);
    } else {
      // Cevap Anahtarlı Mod: Soru altında model cevap (seçilen renkte)
      const ansDiv = document.createElement("div");
      ansDiv.className = "model-answer-block";
      ansDiv.style.color = activeColor;
      ansDiv.innerHTML = `
        <span class="ans-label">Cevap: </span>
        <span class="ans-content" contenteditable="true" data-qid="${q.id}" data-field="answer">${escapeHtml(q.answer)}</span>
      `;
      block.appendChild(ansDiv);
    }

    container.appendChild(block);
  });

  // Kağıt üzerindeki contenteditable düzenlemeleri dinle
  attachSheetEditableListeners();
}

// --------------------------------------------------------------------------
// Kağıt Üzerinden Canlı Düzenleme (ContentEditable -> State Senkronizasyonu)
// --------------------------------------------------------------------------
function attachSheetEditableListeners() {
  document.querySelectorAll("[contenteditable='true']").forEach(el => {
    el.addEventListener("blur", (e) => {
      const qid = e.target.getAttribute("data-qid");
      const field = e.target.getAttribute("data-field");
      if (qid && field) {
        const item = AppState.questions.find(q => q.id == qid);
        if (item) {
          item[field] = e.target.innerText.trim();
          renderQuestionsList();
        }
      }
    });
  });
}

// --------------------------------------------------------------------------
// Sol Panel: Soru Listesini Çizme & Yönetim
// --------------------------------------------------------------------------
function renderQuestionsList() {
  const container = document.getElementById("sidebar-questions-list");
  const countBadge = document.getElementById("badge-question-count");
  if (countBadge) countBadge.textContent = `${AppState.questions.length} Soru (Toplam: ${getTotalPoints()} Puan)`;

  if (!container) return;
  container.innerHTML = "";

  AppState.questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-item-card";

    card.innerHTML = `
      <div class="question-item-header">
        <span class="question-num-tag">${idx + 1}. Soru</span>
        <div class="question-item-actions">
          <button class="btn btn-secondary btn-sm" onclick="moveQuestion(${idx}, -1)" title="Yukarı Taşı" ${idx === 0 ? "disabled" : ""}>↑</button>
          <button class="btn btn-secondary btn-sm" onclick="moveQuestion(${idx}, 1)" title="Aşağı Taşı" ${idx === AppState.questions.length - 1 ? "disabled" : ""}>↓</button>
          <button class="btn btn-danger btn-sm" onclick="deleteQuestion(${idx})" title="Sil">✕</button>
        </div>
      </div>
      <div class="form-group" style="margin-bottom: 0.4rem;">
        <input type="text" value="${escapeHtml(q.question)}" onchange="updateQuestionText(${idx}, this.value)" placeholder="Soru metni...">
      </div>
      <div class="form-row" style="margin-bottom: 0.4rem;">
        <div>
          <label style="font-size: 0.7rem;">Puan:</label>
          <input type="number" min="1" max="100" value="${q.points}" onchange="updateQuestionPoints(${idx}, this.value)">
        </div>
        <div>
          <label style="font-size: 0.7rem;">Cevap Önizleme:</label>
          <input type="text" value="${escapeHtml(q.answer.substring(0, 30))}..." title="${escapeHtml(q.answer)}" readonly style="background: #f1f5f9; cursor: pointer;" onclick="editAnswerModal(${idx})">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function getTotalPoints() {
  return AppState.questions.reduce((sum, q) => sum + (parseInt(q.points) || 0), 0);
}

// Soru Düzenleme İşlemleri
window.updateQuestionText = (idx, val) => {
  if (AppState.questions[idx]) {
    AppState.questions[idx].question = val;
    renderExamSheet();
  }
};

window.updateQuestionPoints = (idx, val) => {
  if (AppState.questions[idx]) {
    AppState.questions[idx].points = parseInt(val) || 0;
    renderExamSheet();
    renderQuestionsList();
  }
};

window.moveQuestion = (idx, direction) => {
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= AppState.questions.length) return;
  const temp = AppState.questions[idx];
  AppState.questions[idx] = AppState.questions[newIdx];
  AppState.questions[newIdx] = temp;
  renderExamSheet();
  renderQuestionsList();
};

window.deleteQuestion = (idx) => {
  AppState.questions.splice(idx, 1);
  renderExamSheet();
  renderQuestionsList();
  showToast("Soru silindi.");
};

window.addNewQuestion = () => {
  const newId = Date.now();
  const defaultPts = Math.max(5, Math.round(100 / (AppState.questions.length + 1)));
  AppState.questions.push({
    id: newId,
    question: "Yeni soru metnini buraya yazınız...",
    points: defaultPts,
    answer: "Bu sorunun doğru model cevabını buraya yazınız."
  });
  renderExamSheet();
  renderQuestionsList();
  showToast("Yeni soru eklendi.");
};

window.balancePoints = () => {
  const n = AppState.questions.length;
  if (n === 0) return;
  const each = Math.floor(100 / n);
  const rem = 100 - (each * n);
  AppState.questions.forEach((q, i) => {
    q.points = each + (i === n - 1 ? rem : 0);
  });
  renderExamSheet();
  renderQuestionsList();
  showToast("Puanlar 100 puana eşit şekilde dengelendi.");
};

window.editAnswerModal = (idx) => {
  const q = AppState.questions[idx];
  if (!q) return;
  const newAns = prompt(`${idx + 1}. Soru için model cevabı düzenleyiniz:`, q.answer);
  if (newAns !== null) {
    q.answer = newAns.trim();
    renderExamSheet();
    renderQuestionsList();
  }
};

// --------------------------------------------------------------------------
// Bilişim Öğretmenliği Sınavı Oluşturucu (5, 6, 7, 8, 9, 10. Sınıflar)
// --------------------------------------------------------------------------
async function generateBilisimExam() {
  const grade = document.getElementById("select-grade").value;
  const difficulty = document.getElementById("select-difficulty").value;
  const count = document.getElementById("input-question-count").value || 5;

  showToast(`${grade}. Sınıf Bilişim sınavı hazırlanıyor...`);

  try {
    const res = await fetch(`/api/questions?grade=${grade}&difficulty=${difficulty}&count=${count}`);
    if (res.ok) {
      const data = await res.json();
      AppState.questions = data.questions || [];

      // Ders adını ve başlığı sınıf düzeyine uygun güncelle
      if (parseInt(grade) >= 9) {
        AppState.header.lesson = "BİLGİSAYAR BİLİMİ";
        AppState.header.school = "Anadolu Lisesi";
      } else {
        AppState.header.lesson = "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM";
        AppState.header.school = "Ortaokulu";
      }
      populateForm();
      renderExamSheet();
      renderQuestionsList();
      showToast(`${grade}. Sınıf Bilişim sınavı (${data.questions.length} soru) başarıyla oluşturuldu!`);
    }
  } catch (err) {
    console.error("Soru oluşturma hatası:", err);
    showToast("Soru oluşturulurken bir hata oluştu.");
  }
}

// --------------------------------------------------------------------------
// Özel Soru İsteme Asistanı (AI / Konu Bazlı)
// --------------------------------------------------------------------------
async function generateCustomPrompt() {
  const promptInput = document.getElementById("input-custom-prompt");
  const promptText = promptInput.value.trim();
  const grade = document.getElementById("select-grade").value;
  const count = document.getElementById("input-question-count").value || 5;

  if (!promptText) {
    alert("Lütfen hazırlamak istediğiniz konuyu yazınız (Örn: Python döngüler, Scratch değişkenler, Siber güvenlik)");
    return;
  }

  showToast("Özel sorular üretiliyor...");
  try {
    const res = await fetch("/api/generate-custom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: promptText, grade: grade, count: parseInt(count) })
    });

    if (res.ok) {
      const data = await res.json();
      AppState.questions = data.questions || [];
      AppState.header.lesson = "BİLİŞİM: " + data.topic.toUpperCase();
      populateForm();
      renderExamSheet();
      renderQuestionsList();
      promptInput.value = "";
      showToast(`'${data.topic}' konulu sorular kağıda yerleştirildi!`);
    } else {
      showToast("Özel soru üretilemedi.");
    }
  } catch (err) {
    console.error("Özel soru üretme hatası:", err);
  }
}

// --------------------------------------------------------------------------
// Event Listener'lar ve Kontroller
// --------------------------------------------------------------------------
function initEventListeners() {
  // Üst Bilgi Değişiklikleri
  const bindHeaderInput = (id, key) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        AppState.header[key] = e.target.value;
        renderExamSheet();
      });
    }
  };

  bindHeaderInput("input-year", "year");
  bindHeaderInput("input-school", "school");
  bindHeaderInput("input-lesson", "lesson");
  bindHeaderInput("input-term", "term");
  bindHeaderInput("input-student-name", "student_name");
  bindHeaderInput("input-student-class", "student_class");
  bindHeaderInput("input-student-no", "student_no");
  bindHeaderInput("input-student-score", "student_score");

  // Bilişim Soru Üret Butonları
  document.getElementById("btn-generate-bilisim")?.addEventListener("click", generateBilisimExam);
  document.getElementById("btn-generate-custom")?.addEventListener("click", generateCustomPrompt);
  document.getElementById("btn-add-question")?.addEventListener("click", addNewQuestion);
  document.getElementById("btn-balance-points")?.addEventListener("click", balancePoints);

  // Görünüm Modu Değiştirme: [ Soru Kağıdı ] | [ Cevap Anahtarı ]
  const btnModeQuestions = document.getElementById("btn-mode-questions");
  const btnModeAnswers = document.getElementById("btn-mode-answers");

  btnModeQuestions?.addEventListener("click", () => {
    AppState.viewMode = "questions";
    btnModeQuestions.classList.add("active");
    btnModeAnswers.classList.remove("active");
    document.getElementById("color-controls-section").style.display = "none";
    renderExamSheet();
  });

  btnModeAnswers?.addEventListener("click", () => {
    AppState.viewMode = "answers";
    btnModeAnswers.classList.add("active");
    btnModeQuestions.classList.remove("active");
    document.getElementById("color-controls-section").style.display = "flex";
    renderExamSheet();
  });

  // Renkli / Siyah-Beyaz Seçeneği
  const selectColorMode = document.getElementById("select-color-mode");
  const colorPickerWrapper = document.getElementById("color-picker-wrapper");
  const colorPicker = document.getElementById("input-answer-color");
  const colorHexText = document.getElementById("color-hex-text");

  selectColorMode?.addEventListener("change", (e) => {
    AppState.colorMode = e.target.value; // 'bw' veya 'color'
    if (AppState.colorMode === "color") {
      colorPickerWrapper.style.display = "flex";
    } else {
      colorPickerWrapper.style.display = "none";
    }
    renderExamSheet();
  });

  colorPicker?.addEventListener("input", (e) => {
    AppState.answerColor = e.target.value;
    if (colorHexText) colorHexText.textContent = e.target.value.toUpperCase();
    renderExamSheet();
  });

  // Hazır Renk Butonları (Kırmızı, Lacivert, Yeşil, Mor, Turuncu)
  document.querySelectorAll(".preset-color-dot").forEach(dot => {
    dot.addEventListener("click", (e) => {
      const color = e.target.getAttribute("data-color");
      if (color) {
        AppState.answerColor = color;
        if (colorPicker) colorPicker.value = color;
        if (colorHexText) colorHexText.textContent = color.toUpperCase();
        renderExamSheet();
      }
    });
  });

  // Yakınlaştırma (Zoom) Kontrolleri
  document.getElementById("btn-zoom-50")?.addEventListener("click", () => setZoom(0.5));
  document.getElementById("btn-zoom-75")?.addEventListener("click", () => setZoom(0.75));
  document.getElementById("btn-zoom-100")?.addEventListener("click", () => setZoom(1.0));
  document.getElementById("btn-zoom-fit")?.addEventListener("click", setZoomFit);

  // Sıfırla (Orijinal orneksinavkagidi.jpg'ye dön)
  document.getElementById("btn-reset-original")?.addEventListener("click", () => {
    if (confirm("Sınav kağıdını görseldeki orijinal 'orneksinavkagidi.jpg' haline döndürmek istiyor musunuz?")) {
      loadInitialExam();
      showToast("Orijinal şablon geri yüklendi.");
    }
  });

  // İndirme ve Yazdırma
  document.getElementById("btn-export-docx-questions")?.addEventListener("click", () => downloadDocx("questions"));
  document.getElementById("btn-export-docx-answers")?.addEventListener("click", () => downloadDocx("answers"));
  document.getElementById("btn-export-docx-both")?.addEventListener("click", downloadBothDocx);

  // Hızlı Yazdır / PDF Kaydet (window.print)
  document.getElementById("btn-quick-print")?.addEventListener("click", () => {
    window.print();
  });

  // Donanım Yazıcısı Seçme Modalı
  document.getElementById("btn-open-printer-modal")?.addEventListener("click", openPrinterModal);
  document.getElementById("btn-modal-close")?.addEventListener("click", closePrinterModal);
  document.getElementById("btn-refresh-printers")?.addEventListener("click", fetchPrinters);
  document.getElementById("btn-submit-print")?.addEventListener("click", executePrint);

  // Modal dışına tıklandığında kapat
  document.getElementById("printer-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "printer-modal") closePrinterModal();
  });
}

// --------------------------------------------------------------------------
// Yakınlaştırma (Zoom) İşlevi
// --------------------------------------------------------------------------
function setZoom(val) {
  AppState.zoomLevel = val;
  const scaler = document.getElementById("paper-scaler");
  if (scaler) {
    scaler.style.transform = `scale(${val})`;
  }
  document.querySelectorAll(".zoom-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`btn-zoom-${Math.round(val * 100)}`);
  if (btn) btn.classList.add("active");
}

function setZoomFit() {
  const container = document.querySelector(".preview-panel");
  if (!container) return;
  const containerWidth = container.clientWidth - 40;
  const a4WidthPx = 794; // approx 210mm in px at 96 dpi
  const scale = Math.min(1.0, Math.max(0.4, (containerWidth / a4WidthPx)));
  AppState.zoomLevel = scale;
  const scaler = document.getElementById("paper-scaler");
  if (scaler) {
    scaler.style.transform = `scale(${scale})`;
  }
}

// --------------------------------------------------------------------------
// DOCX İndirme İşlemleri (Sunucu OpenXML Motoru)
// --------------------------------------------------------------------------
async function downloadDocx(mode) {
  showToast(mode === "questions" ? "Soru Kağıdı DOCX oluşturuluyor..." : "Cevap Anahtarı DOCX oluşturuluyor...");

  const payload = {
    header: AppState.header,
    questions: AppState.questions,
    mode: mode,
    color: (AppState.colorMode === "color" && mode === "answers") ? AppState.answerColor : "000000"
  };

  try {
    const res = await fetch("/api/export-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      const lessonName = (AppState.header.lesson || "Sinav").replace(/\s+/g, "_");
      a.href = url;
      a.download = mode === "questions" ? `${lessonName}_Soru_Kagidi.docx` : `${lessonName}_Cevap_Anahtari.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      showToast("DOCX belgesi indirildi!");
    } else {
      showToast("DOCX indirme hatası oluştu.");
    }
  } catch (err) {
    console.error("DOCX indirme hatası:", err);
  }
}

async function downloadBothDocx() {
  showToast("Hem soru hem cevaplı sınav paketi hazırlanıyor...");

  const payload = {
    header: AppState.header,
    questions: AppState.questions,
    color: AppState.colorMode === "color" ? AppState.answerColor : "000000"
  };

  try {
    const res = await fetch("/api/export-both-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      const lessonName = (AppState.header.lesson || "Sinav").replace(/\s+/g, "_");
      a.href = url;
      a.download = `${lessonName}_Sinav_Paketi.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      showToast("Soru ve Cevap Kağıtları ZIP olarak indirildi!");
    }
  } catch (err) {
    console.error("ZIP paketi indirme hatası:", err);
  }
}

// --------------------------------------------------------------------------
// Yazıcı Servisi & CUPS Modal İşlemleri
// --------------------------------------------------------------------------
function openPrinterModal() {
  const modal = document.getElementById("printer-modal");
  if (modal) modal.classList.add("active");
  fetchPrinters();
}

function closePrinterModal() {
  const modal = document.getElementById("printer-modal");
  if (modal) modal.classList.remove("active");
}

async function fetchPrinters() {
  const select = document.getElementById("select-printer");
  const statusMsg = document.getElementById("printer-status-message");
  if (select) select.innerHTML = "<option>Yazıcılar taranıyor...</option>";

  try {
    const res = await fetch("/api/printers");
    if (res.ok) {
      const data = await res.json();
      AppState.printers = data.printers || [];

      if (select) select.innerHTML = "";

      if (AppState.printers.length === 0) {
        if (select) {
          select.innerHTML = "<option value=''>Sistemde kayıtlı fiziksel CUPS yazıcısı yok</option>";
        }
        if (statusMsg) {
          statusMsg.innerHTML = `<span style="color:#b45309;">⚠️ ${data.message}</span>`;
        }
      } else {
        AppState.printers.forEach(p => {
          const opt = document.createElement("option");
          opt.value = p.name;
          opt.textContent = `${p.name} ${p.is_default ? "(Varsayılan)" : ""} - ${p.description}`;
          if (p.is_default) opt.selected = true;
          select.appendChild(opt);
        });
        if (statusMsg) {
          statusMsg.innerHTML = `<span style="color:#16a34a;">✓ ${AppState.printers.length} yazıcı tespit edildi.</span>`;
        }
      }
    }
  } catch (err) {
    console.error("Yazıcı listesi hatası:", err);
  }
}

async function executePrint() {
  const select = document.getElementById("select-printer");
  const copiesInput = document.getElementById("input-print-copies");
  const copies = parseInt(copiesInput?.value || 1);
  const selectedPrinter = select?.value;

  if (!selectedPrinter) {
    // CUPS yazıcısı yoksa tarayıcının yerel yazdırma penceresini başlat
    closePrinterModal();
    showToast("Doğrudan sistem yazdırma penceresi açılıyor...");
    window.print();
    return;
  }

  showToast(`${copies} adet kopya '${selectedPrinter}' yazıcısına gönderiliyor...`);

  const payload = {
    printer: selectedPrinter,
    copies: copies,
    header: AppState.header,
    questions: AppState.questions,
    mode: AppState.viewMode,
    color: AppState.colorMode === "color" ? AppState.answerColor : "000000"
  };

  try {
    const res = await fetch("/api/print", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      showToast(data.message);
      closePrinterModal();
    } else {
      showToast(data.message || "Yazdırma başarısız oldu.");
    }
  } catch (err) {
    console.error("Yazdırma gönderim hatası:", err);
  }
}

// --------------------------------------------------------------------------
// Yardımcılar: Toast Bildirimi & HTML Escape
// --------------------------------------------------------------------------
function showToast(msg) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>ℹ️</span> <span>${escapeHtml(msg)}</span>`;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

function escapeHtml(text) {
  if (!text) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.toString().replace(/[&<>"']/g, m => map[m]);
}

