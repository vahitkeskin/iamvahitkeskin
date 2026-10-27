/**
 * 2. Sınıf Bilişim Teknolojileri ve Yazılım - 1. Dönem 2. Bölüm (Hafta 11 - 19)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_PART2_GRADE2 = [
  // 11. HAFTA
  {
    week: 11,
    date: "23 - 29 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital Sanatlar, Çizim ve Metin Dünyam",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "24 Kasım Öğretmenler Günü & Geometrik Şekiller",
    subtitle: "Daire, Kare, Üçgen ve Yıldızlarla Öğretmenimize Dijital Tebrik Kartı Tasarımı",
    outcomeCode: "BTY.2.2.4 (Geometri & Dijital Sanat)",
    targetSkill: "Geometrik Şekilleri Amaca Uygun Kullanarak Anlamlı Tasarımlar Oluşturma",
    curiosityQuestion: "Bilgisayarda çizdiğimiz bir yıldız veya kalp, öğretmenimizin yüzünde nasıl kocaman bir tebessüm oluşturur?",
    roadmap: [
      { title: "24 Kasım Önemi", desc: "Bize okumayı, yazmayı ve bilişimi öğreten öğretmenlerimize teşekkür." },
      { title: "Şekil Paleti", desc: "Kalp, yıldız, konuşma balonu ve çokgen araçları." },
      { title: "Çerçeve Tasarımı", desc: "Sayfanın kenarlarına renkli ve desenli süslemeler yapma." },
      { title: "Tebrik Mesajı", desc: "'Canım Öğretmenim' başlığı ve çiçeklerle kartı tamamlama." }
    ],
    section1: {
      title: "Öğretmenler Günü Kartının Tasarım Adımları",
      subtitle: "Sayfamızı tıpkı gerçek bir tebrik kartı gibi katlanabilir ve süslü hazırlıyoruz.",
      layout: "split-visual",
      card: {
        title: "Tebrik Kartının Bölümleri",
        icon: "💌",
        desc: "Kartımızı tasarlarken şu adımları izleriz:",
        items: [
          { bold: "1. Şık Bir Çerçeve", text: "Sayfanın kenarına yuvarlatılmış dikdörtgen ile zarif bir çerçeve çizeriz." },
          { bold: "2. Sevgi Kalbi ve Çiçekler", text: "Şekiller menüsünden kırmızı bir kalp ve fırçalarla sarı papatyalar ekleriz." },
          { bold: "3. Parlayan Yıldızlar", text: "Öğretmenimizin bir ışık gibi yolumuzu aydınlattığını anlatan sarı yıldızlar serpiştiririz." },
          { bold: "4. Renk Uyumu", text: "Yazıların rahat okunması için açık zemin üzerine koyu renkler seçeriz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <!-- Kart Arka Plan -->
        <rect x="50" y="35" width="320" height="180" rx="12" fill="#831843" stroke="#f472b6" stroke-width="2"/>
        <!-- Kalp -->
        <path d="M210 110 C210 80, 160 70, 160 105 C160 135, 210 165, 210 165 C210 165, 260 135, 260 105 C260 70, 210 80, 210 110 Z" fill="#f43f5e"/>
        <!-- Yıldızlar -->
        <polygon points="90,65 95,80 110,80 98,90 102,105 90,95 78,105 82,90 70,80 85,80" fill="#fde047"/>
        <polygon points="330,65 335,80 350,80 338,90 342,105 330,95 318,105 322,90 310,80 325,80" fill="#fde047"/>
        <!-- Yazı -->
        <text x="210" y="70" fill="#fbcfe8" font-size="14" font-weight="bold" text-anchor="middle">24 KASIM ÖĞRETMENLER GÜNÜ</text>
        <text x="210" y="195" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Canım Öğretmenim, İyi ki Varsınız! ❤️</text>
      </svg>`,
      caption: "Vektörel Öğretmenler Günü Dijital Tebrik Kartı"
    },
    section2: {
      title: "Geometrik Şekillerle Duyguları Anlatmak",
      subtitle: "Dijital çizimde semboller kelimelerden daha hızlı konuşur.",
      layout: "cards-2",
      cards: [
        {
          title: "Sembollerin Dili",
          icon: "⭐",
          desc: "Tasarımda sıkça kullandığımız sembolik şekiller:",
          items: [
            { bold: "Kalp Şekli", text: "Sevgi, şefkat, teşekkür ve bağlılığı temsil eder." },
            { bold: "Yıldız Şekli", text: "Başarıyı, ışığı, yol göstericiliği ve çalışkanlığı simgeler." },
            { bold: "Konuşma Balonu", text: "Karakterlerin veya bizim söylemek istediğimiz tatlı sözleri içerir." }
          ]
        },
        {
          title: "Şekil Boyutlandırma Sırrı",
          icon: "📐",
          desc: "Şekilleri tam kıvamında çizmek için:",
          items: [
            { bold: "Shift Tuşu Mucizesi", text: "Daire veya kare çizerken Shift tuşuna basılı tutarsak şekil hiç bozulmaz, kusursuz olur!" },
            { bold: "Köşelerden Çekme", text: "Şekli büyütmek için ortasından değil, köşelerindeki minik noktalardan çekeriz." },
            { bold: "Taşıma Çaprazı", text: "Şeklin üzerine gelip dört yönlü ok çıktığında istediğimiz yere taşırız." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Öğretmenime Sürpriz Tebrik Kartı'",
      subtitle: "Paint'te kalpler, yıldızlar ve çiçeklerle donatılmış bir tebrik kartı çiziyoruz.",
      steps: [
        { title: "Çerçeveyi Çiz", desc: "Sayfanın ortasına büyük bir dikdörtgen kart zemini çizin ve açık renge boyayın." },
        { title: "Kalp ve Yıldızları Ekle", desc: "Şekillerden kırmızı bir kalp ve etrafına sarı parıltılı yıldızlar yerleştirin." },
        { title: "İsmini ve Mesajını Yaz", desc: "Kartın altına kendi adınızı ve sınıfınızı yazıp kaydedin." }
      ],
      criteria: [
        "Geometrik şekilleri orantılı şekilde yerleştirebilme",
        "Renk kontrastını sağlayarak yazıları okunur kılma",
        "24 Kasım Öğretmenler Günü anlamına uygun saygılı bir içerik hazırlama"
      ]
    },
    tips: {
      safetyTitle: "Tasarım Ustası Tavsiyeleri",
      safetyRules: [
        { bold: "Gözü Yormayan Renkler", text: "Çok fazla cırtlak rengi üst üste kullanmayın; birbiriyle uyumlu 2-3 ana renk seçin." },
        { bold: "Shift Tuşunu Dene", text: "Daire çizerken yumurta gibi yassı olmasını istemiyorsanız klavyeden Shift'e basın." },
        { bold: "Yazıcıdan Çıktı", text: "Öğretmeniniz izin verirse kartınızı yazıcıdan renkli basıp öğretmeninize hediye edebilirsiniz!" }
      ],
      myths: [
        { wrong: "Bir tebrik kartına ne kadar çok karışık resim koyarsak o kadar güzel olur.", correct: "En güzel tasarımlar sade, düzenli ve sevgi dolu olanlardır." }
      ]
    },
    quiz: {
      question: "Çizim programında kusursuz, yamulmayan tam yuvarlak bir daire çizmek için fareyi çekerken klavyeden hangi tuşa basılı tutarız?",
      options: [
        { text: "A) Space (Boşluk) Tuşu", isCorrect: false },
        { text: "B) Shift Tuşu", isCorrect: true },
        { text: "C) Backspace (Silme) Tuşu", isCorrect: false },
        { text: "D) Enter Tuşu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Shift tuşuna basılı tutarak çizdiğimizde daireler tam yuvarlak, kareler tam eşit kenarlı olur."
    },
    summaryRules: [
      { bold: "24 Kasım", text: "Tüm öğretmenlerimize saygı ve teşekkür günümüzdür." },
      { bold: "Shift Tuşu", text: "Şekillerin oranını bozmadan kusursuz çizen sihirli tuştur." },
      { bold: "Dijital Kart", text: "Hem çevre dostu hem de el emeği harika bir hediyedir." }
    ],
    homework: "Çizdiğiniz Öğretmenler Günü kartını öğretmeninize gösterip Öğretmenler Günü'nü kutlayın.",
    nextWeekPreview: "Dijital Tebrik Kartı Hazırlama ve Metin Ekleme (A Harfi Tuşu ile Yazı Dünyası)!"
  },

  // 12. HAFTA
  {
    week: 12,
    date: "30 Kasım - 06 Aralık",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital Sanatlar, Çizim ve Metin Dünyam",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Dijital Tebrik Kartına Metin Ekleme (Metin Aracı)",
    subtitle: "Resmimizin Üzerine Yazı Yazma, Yazı Boyutu ve Rengini Seçme Becerisi",
    outcomeCode: "BTY.2.2.5 (Tipografi & Metin Düzenleme)",
    targetSkill: "Metin (A) Aracını Kullanarak Resimlerin Üzerine Anlaşılır Yazılar Ekleyebilme",
    curiosityQuestion: "Bilgisayarda harfleri dev bir bina kadar büyütebilir veya karınca kadar küçültebilir miyiz?",
    roadmap: [
      { title: "Metin Aracı (A Harfi)", desc: "Paint araç çubuğundaki büyük 'A' simgesini keşfetme." },
      { title: "Metin Kutusu Açma", desc: "Yazı yazmak istediğimiz yere fareyle çerçeve çizme." },
      { title: "Yazı Tipi ve Boyutu", desc: "Font seçimi, puntosunu (büyüklüğünü) 16, 24, 36 yapma." },
      { title: "Kalın ve Renkli Yazı", desc: "Yazıları kalın (Bold) yapma ve renk paletinden renklendirme." }
    ],
    section1: {
      title: "Sihirli Metin Aracı: 'A' Harfinin Gizemi",
      subtitle: "Resimlerimize konuşma balonları, başlıklar ve şiirler eklemek artık çok kolay.",
      layout: "split-visual",
      card: {
        title: "Metin Yazma Kuralları",
        icon: "🅰️",
        desc: "Metin aracını kullanırken sırasıyla:",
        items: [
          { bold: "1. 'A' Aracına Tıkla", text: "Araçlar menüsündeki büyük 'A' harfine tıklarız." },
          { bold: "2. Kutuyu Aç", text: "Resmin üzerinde yazı yazacağımız yere fareyle bir kutu çizeriz." },
          { bold: "3. Boyutu Seç", text: "Yazı boyutu sayısını (örneğin 24) seçerek yazımızın ne kadar büyük olacağını belirleriz." },
          { bold: "4. Kutunun Dışına Tıklama", text: "Yazımız bitmeden kutunun dışına tıklamayız; çünkü tıkladığımızda artık resme dönüşür!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Metin Kutusu Kesik Çizgili -->
        <rect x="60" y="45" width="300" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4"/>
        <!-- A Simgesi -->
        <circle cx="100" cy="85" r="24" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2"/>
        <text x="100" y="94" fill="#38bdf8" font-size="24" font-weight="900" text-anchor="middle">A</text>
        <!-- Yazı Örneği -->
        <text x="140" y="85" fill="#f8fafc" font-size="16" font-weight="bold">Merhaba 2. Sınıf!</text>
        <line x1="265" y1="70" x2="265" y2="90" stroke="#f43f5e" stroke-width="3"/>
        <!-- Açıklama Çubuğu -->
        <rect x="70" y="140" width="280" height="35" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
        <text x="110" y="162" fill="#94a3b8" font-size="11">Boyut: <tspan fill="#38bdf8" font-weight="bold">24 pt</tspan></text>
        <text x="190" y="162" fill="#94a3b8" font-size="11">Yazı Tipi: <tspan fill="#34d399" font-weight="bold">Arial</tspan></text>
        <text x="290" y="162" fill="#94a3b8" font-size="11">Renk: <tspan fill="#f59e0b" font-weight="bold">Sarı</tspan></text>
      </svg>`,
      caption: "Paint Metin Kutusu (Text Box) ve Biçimlendirme Çubuğu"
    },
    section2: {
      title: "Yazıları Süper Güçlerle Donatmak",
      subtitle: "Yazımızı kalınlaştırabilir, eğik yapabilir ve rengarenk boyayabiliriz.",
      layout: "cards-3",
      cards: [
        {
          title: "K (Kalın / Bold)",
          icon: "𝐁",
          desc: "Başlıkları daha belirgin ve güçlü yapmak için yazıyı şişmanlatırız."
        },
        {
          title: "T (İtalik / Eğik)",
          icon: "𝘐",
          desc: "Yazıyı hafifçe sağa doğru yatırarak şiirsel ve zarif bir hava katarız."
        },
        {
          title: "Renk Paleti",
          icon: "🎨",
          desc: "Yazıyı seçip renk kutusundan istediğimiz rengi tıklayarak parlatırız."
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kendi Şiirini Ekrana Yaz'",
      subtitle: "Paint'te bir doğa resmi çizip yanına 2 kıtalık kısa bir çocuk şiiri yazıyoruz.",
      steps: [
        { title: "Metin Aracını (A) Seç", desc: "Paint'te 'A' harfi aracına tıklayın ve sayfanın sağına bir metin kutusu açın." },
        { title: "Boyutu 20 Yap", desc: "Yazı boyutu kutusundan 20 sayısını seçin ve 'K' (Kalın) butonuna basın." },
        { title: "Şiirini Yaz ve Renklendir", desc: "Klavyeden şiirinizi yazın, başlığı kırmızı gövdeyi lacivert yapın." }
      ],
      criteria: [
        "Metin aracını doğru şekilde etkinleştirebilme",
        "Yazı boyutunu ve rengini başarıyla değiştirebilme",
        "Klavyede yazarken noktalama ve boşluk kurallarına uyma"
      ]
    },
    tips: {
      safetyTitle: "Metin Dedektifi Kuralları",
      safetyRules: [
        { bold: "Kutuyu Kapatmadan Oku", text: "Yazınızı kontrol edin; dışarı tıklamadan önce harf hatalarını Backspace ile düzeltin." },
        { bold: "Zıt Renk Kuralı", text: "Koyu renk arka plana açık renk yazı (örn: lacivert üzerine sarı yazı) yazın." },
        { bold: "Çok Küçük Yazmayın", text: "Yazı boyutu en az 18-20 punto olmalı, tahtadan rahatça okunabilmelidir." }
      ],
      myths: [
        { wrong: "Metin kutusunun dışına tıkladıktan sonra silgi kullanmadan yazıdaki harfi hemen değiştirebilirim.", correct: "Paint'te metin kutusu onaylandıktan sonra resim gibi sabitlenir; bu yüzden tıklamadan önce kontrol etmek çok önemlidir." }
      ]
    },
    quiz: {
      question: "Paint çizim programında resmimizin üzerine klavye ile yazı yazmak istediğimizde hangi simgeye tıklarız?",
      options: [
        { text: "A) Silgi Simgesi", isCorrect: false },
        { text: "B) Büyük 'A' Harfi Simgesi", isCorrect: true },
        { text: "C) Büyüteç Simgesi", isCorrect: false },
        { text: "D) Boya Kutusu Simgesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'A' simgesi metin (Text) aracıdır; tıkladığımızda ekrana yazı yazmamızı sağlar."
    },
    summaryRules: [
      { bold: "A Harfi", text: "Bilgisayarda resimle yazıyı birleştiren kapıdır." },
      { bold: "Punto (Boyut)", text: "Yazımızın ekrandaki büyüklük ayarıdır." },
      { bold: "Renk Uyumu", text: "Yazıların net ve pırıl pırıl okunmasını sağlar." }
    ],
    homework: "En sevdiğiniz masal kahramanının adını ve bir özelliğini Paint'te renkli yazıyla hazırlayın.",
    nextWeekPreview: "Klavyede İki Elle Hızlı Yazma ve Parmak Egzersizleri (F ve J Tuşlarının Gizemi)!"
  },

  // 13. HAFTA
  {
    week: 13,
    date: "07 - 13 Aralık",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital Sanatlar, Çizim ve Metin Dünyam",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Klavyede İki Elle Hızlı Yazma ve Parmak Egzersizleri",
    subtitle: "Ev Tuşları (F ve J Çıkıntıları), Eğlenceli Yazma Oyunları ve Harf Avı",
    outcomeCode: "BTY.2.2.6 (Klavye Hızı & Koordinasyon)",
    targetSkill: "İki Elin Parmaklarını Klavyeye Doğru Yerleştirme ve Hızlı Yazma Pratiği",
    curiosityQuestion: "Klavyedeki F ve J harflerinin üzerinde neden minik birer kabartma (çıkıntı) vardır?",
    roadmap: [
      { title: "F ve J Çıkıntıları", desc: "Gözlerimiz ekrandayken parmaklarımızın evini bulmasını sağlayan rehberler." },
      { title: "Ev Sırası (Home Row)", desc: "A-S-D-F ve J-K-L-Ş tuşlarına parmakların yerleşimi." },
      { title: "Başparmakların Görevi", desc: "Space (Boşluk) tuşunu sırayla tıklatan dostlar." },
      { title: "Harf Avı Oyunu", desc: "Yukarıdan düşen harfleri klavyeden basarak yakalama oyunu." }
    ],
    section1: {
      title: "Klavyenin Gizli Haritası: Ev Sırası",
      subtitle: "Parmaklarımız klavyede gezdikten sonra daima dinlenmek için evine döner.",
      layout: "split-visual",
      card: {
        title: "Parmaklarımızın Ev Sırası",
        icon: "🖐️",
        desc: "İki elimizin işaret parmaklarını F ve J çıkıntılarına koyarız:",
        items: [
          { bold: "Sol Elimiz (A-S-D-F)", text: "Serçe parmak: A | Yüzük parmak: S | Orta parmak: D | İşaret parmak: F (çıkıntılı)." },
          { bold: "Sağ Elimiz (J-K-L-Ş)", text: "İşaret parmak: J (çıkıntılı) | Orta parmak: K | Yüzük parmak: L | Serçe parmak: Ş." },
          { bold: "Başparmaklar", text: "İki başparmağımız da uzun Space tuşunun üzerinde hazır bekler." },
          { bold: "Gözler Ekranda", text: "Klavyeye bakmadan yazmanın ilk kuralı parmakları evine alıştırmaktır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Sol El Yuvaları -->
        <rect x="40" y="80" width="35" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="57" y="105" fill="#e0f2fe" font-size="14" font-weight="bold" text-anchor="middle">A</text>
        <rect x="80" y="80" width="35" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="97" y="105" fill="#e0f2fe" font-size="14" font-weight="bold" text-anchor="middle">S</text>
        <rect x="120" y="80" width="35" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="137" y="105" fill="#e0f2fe" font-size="14" font-weight="bold" text-anchor="middle">D</text>
        <!-- F Tuşu (Çıkıntılı) -->
        <rect x="160" y="80" width="35" height="40" rx="6" fill="#047857" stroke="#34d399" stroke-width="2.5"/>
        <text x="177" y="105" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">F</text>
        <line x1="168" y1="113" x2="186" y2="113" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
        <!-- Sağ El Tuşları -->
        <!-- J Tuşu (Çıkıntılı) -->
        <rect x="225" y="80" width="35" height="40" rx="6" fill="#047857" stroke="#34d399" stroke-width="2.5"/>
        <text x="242" y="105" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">J</text>
        <line x1="233" y1="113" x2="251" y2="113" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
        <rect x="265" y="80" width="35" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="282" y="105" fill="#f3e8ff" font-size="14" font-weight="bold" text-anchor="middle">K</text>
        <rect x="305" y="80" width="35" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="322" y="105" fill="#f3e8ff" font-size="14" font-weight="bold" text-anchor="middle">L</text>
        <rect x="345" y="80" width="35" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="362" y="105" fill="#f3e8ff" font-size="14" font-weight="bold" text-anchor="middle">Ş</text>
        <!-- Alt Çizgi -->
        <rect x="110" y="150" width="200" height="30" rx="6" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
        <text x="210" y="170" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">SPACE (Başparmaklar)</text>
        <text x="210" y="215" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">Sarı Çizgiler: Parmakların Evini Bulan Gizli Çıkıntılar!</text>
      </svg>`,
      caption: "Klavyede Ev Sırası Parmak Yerleşimi ve F - J Çıkıntıları"
    },
    section2: {
      title: "Hızlı Yazma Oyunu: Tavuk mu Şimşek mi?",
      subtitle: "Tek parmakla aramak tavuk gibi gagalamaktır; iki elle yazmak şimşek gibi hızlanmaktır.",
      layout: "cards-2",
      cards: [
        {
          title: "Tavuk Yöntemi (Hatalı)",
          icon: "🐔",
          desc: "Tek işaret parmağıyla harf aramak:",
          items: [
            { bold: "Çok Yavaş", text: "Her harf için gözümüzü ekrandan klavyeye indirip kaldırmak zorunda kalırız." },
            { bold: "Boynumuz Ağrır", text: "Sürekli aşağı-yukarı bakmak boyun kaslarımızı yorar." },
            { bold: "Parmaklarımız Küser", text: "Diğer parmaklarımız çalışmadığı için tembelleşir." }
          ]
        },
        {
          title: "Piyano Yöntemi (Doğru)",
          icon: "🎹",
          desc: "Tıpkı piyano çalar gibi tüm parmakları kullanmak:",
          items: [
            { bold: "Şimşek Hızı", text: "Her parmak kendi bölgesindeki harfe basar, saniyeler içinde kelimeler akar." },
            { bold: "Gözler Ekranda", text: "Yazdığımız hikayeyi canlı canlı ekranda izleriz." },
            { bold: "Eğlenceli Ritim", text: "Tuşlardan çıkan tıkır tıkır sesler müzik gibi neşe verir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'Hızlı Parmaklar Harf Şampiyonası'",
      subtitle: "Ekranda sırayla açılan kelimeleri iki elimizi kullanarak en doğru şekilde yazıyoruz.",
      steps: [
        { title: "Parmaklarını Eve Koy", desc: "İşaret parmaklarınızı F ve J tuşlarındaki minik çıkıntıların üzerine yerleştirin." },
        { title: "Temel Egzersiz", desc: "Deftere 1 satır 'asdf jklş' yazarak parmaklarınızı ısıtın." },
        { title: "Kelime Yarışması", desc: "'elma', 'okul', 'bilgisayar', 'kalem' kelimelerini iki elle yazın." }
      ],
      criteria: [
        "F ve J çıkıntılarını dokunarak hissedebilme",
        "İki elin parmaklarını klavyeye dengeli dağıtabilme",
        "Klavye hız egzersizine istekli ve sabırlı katılma"
      ]
    },
    tips: {
      safetyTitle: "Hızlı Parmak Taktikleri",
      safetyRules: [
        { bold: "Acele Etme", text: "Başta yavaş yazabilirsiniz, bu çok doğaldır; doğru parmakla basmak hızdan daha önemlidir." },
        { bold: "Elleri Masaya Yapıştırma", text: "Bileklerinizi hafifçe yukarıda tutun, piyano çalar gibi parmak uçlarınızla dokunun." },
        { bold: "Günde 5 Dakika", text: "Her gün 5 dakika iki elle yazma pratiği yapmak sizi sınıfın en hızlı yazarı yapar." }
      ],
      myths: [
        { wrong: "Sadece tek parmakla yazarsam da aynı hızda yazabilirim.", correct: "Tek parmakla dakikada en fazla 15 kelime yazılırken, iki elle yazan bir öğrenci dakikada 50 kelimeyi zahmetsizce yazabilir." }
      ]
    },
    quiz: {
      question: "Klavyede F ve J tuşlarının üzerinde parmağımızla hissettiğimiz minik çıkıntıların amacı nedir?",
      options: [
        { text: "A) Tuşların bozuk olduğunu göstermek", isCorrect: false },
        { text: "B) Klavyeye bakmadan parmaklarımızın doğru yerini (ev sırasını) bulmasını sağlamak", isCorrect: true },
        { text: "C) Parmaklarımızın kaymasını engellemek", isCorrect: false },
        { text: "D) Sadece süs olsun diye yapılmıştır", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> F ve J çıkıntıları, gözlerimiz ekrandayken ellerimizin doğru sıraya oturmasını sağlayan sihirli kılavuzlardır."
    },
    summaryRules: [
      { bold: "Ev Sırası", text: "Parmaklarımızın dinlenme ve başlangıç yuvasıdır." },
      { bold: "F ve J", text: "Dokunarak hissedilen iki gizli pusuladır." },
      { bold: "İki El Kuralı", text: "Yazmayı bir piyano resitaline dönüştürür." }
    ],
    homework: "Gözlerinizi kapatıp parmaklarınızla F ve J harflerinin üzerindeki çıkıntıları bulma oyunu oynayın.",
    nextWeekPreview: "Belgelerimi ve Resimlerimi Masaüstünde Klasöre Kaydetme (Düzenli Dijital Çalışma Alanı)!"
  },

  // 14. HAFTA
  {
    week: 14,
    date: "14 - 20 Aralık",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital Sanatlar, Çizim ve Metin Dünyam",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Belgelerimi ve Resimlerimi Klasöre Kaydetme",
    subtitle: "Farklı Kaydet (Save), Dosya İsmi Verme ve Düzenli Dijital Çalışma Alanı",
    outcomeCode: "BTY.2.2.7 (Dosya Yönetimi)",
    targetSkill: "Çalışmalarını Uygun İsimle Kaydetme ve Masaüstünde Yeni Klasör Oluşturabilme",
    curiosityQuestion: "Bilgisayarda çizdiğimiz resimleri kaydetmezsek bilgisayarı kapattığımızda o resimlere ne olur?",
    roadmap: [
      { title: "Kaydet (Save) Butonu", desc: "Mavi disket simgesinin sırrı ve anlamı." },
      { title: "Dosyaya İsim Verme", desc: "Resmimize 'Benim_Resmim_Ali' gibi anlamlı isim koyma." },
      { title: "Yeni Klasör Açma", desc: "Masaüstünde sağ tık -> Yeni -> Klasör adımları." },
      { title: "Dijital Düzen", desc: "Dağınık masaüstü yerine her şeyi kendi dolabına koyma." }
    ],
    section1: {
      title: "Sihirli Mavi Disket: Kaydet Butonu",
      subtitle: "Emeğimizin kaybolmaması için bilgisayara 'bunu hafızanda sakla' deriz.",
      layout: "split-visual",
      card: {
        title: "Dosya Kaydetme Adımları",
        icon: "💾",
        desc: "Yaptığımız bir resmi kaydederken 4 adım:",
        items: [
          { bold: "1. Disket Simgesine Tıkla", text: "Programın sol üstündeki mavi diskete veya Dosya -> Kaydet'e tıklarız." },
          { bold: "2. Yeri Seç (Nereye?)", text: "Sol taraftan 'Masaüstü' veya kendi klasörümüzü seçeriz." },
          { bold: "3. İsim Ver (Adı Ne?)", text: "Dosya adı kutusuna konuyu ve adımızı yazarız (Örn: 'Bayrak_Resmi_Ayse')." },
          { bold: "4. 'Kaydet'e Bas", text: "Pencerenin sağ altındaki Kaydet butonuna basarak dosyamızı koruma altına alırız." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Disket Simgesi -->
        <rect x="50" y="50" width="120" height="120" rx="12" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
        <rect x="70" y="50" width="80" height="45" rx="4" fill="#ffffff"/>
        <rect x="70" y="115" width="80" height="45" rx="4" fill="#1e293b"/>
        <circle cx="110" cy="138" r="8" fill="#38bdf8"/>
        <!-- Ok ve Klasör -->
        <path d="M190 110 H240" stroke="#f59e0b" stroke-width="4" marker-end="url(#arrow)"/>
        <!-- Klasör Simgesi -->
        <path d="M255 80 H295 L310 95 H365 V155 H255 Z" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>
        <rect x="255" y="95" width="110" height="60" rx="4" fill="#fbbf24"/>
        <text x="310" y="132" fill="#78350f" font-size="11" font-weight="bold" text-anchor="middle">ÖDEVLERİM</text>
        <text x="210" y="205" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">Disket Simge = Kalıcı Hafıza & Kaydet</text>
      </svg>`,
      caption: "Kaydet (Disket) Simgesi ve Masaüstü Klasör İlişkisi"
    },
    section2: {
      title: "Yeni Klasör: Bilgisayarımızın Düzenli Çekmecesi",
      subtitle: "Odamızdaki eşyaları dolaba koyduğumuz gibi dosyaları da klasörlere koyarız.",
      layout: "cards-2",
      cards: [
        {
          title: "Klasör Nasıl Açılır?",
          icon: "📁",
          desc: "Masaüstünde kendi adımıza klasör oluşturmak:",
          items: [
            { bold: "1. Sağ Tıkla", text: "Masaüstünün boş bir yerine farenin sağ tuşuyla bir kez tıklarız." },
            { bold: "2. 'Yeni' Üzerine Gel", text: "Açılan menüde 'Yeni' seçeneğinin üzerine geliriz." },
            { bold: "3. 'Klasör'e Bas", text: "'Klasör'e tıklarız, ekrana sarı bir klasör gelir." },
            { bold: "4. Kendi Adını Yaz", text: "Mavi yazıya dokunmadan kendi adınızı ve soyadınızı yazıp Enter'a basın." }
          ]
        },
        {
          title: "Dosya İsimlendirme Kuralları",
          icon: "🏷️",
          desc: "Dosyalarımızın karışmaması için altın kurallar:",
          items: [
            { bold: "Anlamlı İsim", text: "'adsiz1', 'resim2' yerine 'Cumhuriyet_Resmim' gibi açıklayıcı isimler verin." },
            { bold: "Türkçe Karakter Uyarısı", text: "Mümkünse ç, ğ, ı, ö, ş, ü harfleri yerine c, g, i, o, s, u harfleri kullanın." },
            { bold: "Tarih Ekleyin", text: "Ödevlerinizin sonuna tarih eklemek aradığınızda kolay bulmanızı sağlar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kendi Dijital Çekmeceni Oluştur'",
      subtitle: "Masaüstünde kendi adınızla bir klasör açıp içine yaptığınız resmi kaydedin.",
      steps: [
        { title: "Yeni Klasör Aç", desc: "Masaüstünde boş bir yere sağ tıklayıp 'Yeni -> Klasör' deyin ve adınızı yazın." },
        { title: "Paint'te Resim Çiz", desc: "Paint'te bir çiçek veya ev resmi çizip sol üstteki disket simgesine basın." },
        { title: "Klasörünün İçine Kaydet", desc: "Masaüstünden kendi klasörünüze çift tıklayıp dosyanızı içine kaydedin." }
      ],
      criteria: [
        "Masaüstünde yeni klasör oluşturabilme",
        "Dosyayı uygun isim vererek kendi klasörüne kaydedebilme",
        "Kayıtlı dosyasını daha sonra klasörden açabilme"
      ]
    },
    tips: {
      safetyTitle: "Dosya Koruma Kalkanı",
      safetyRules: [
        { bold: "Ara Sıra Kaydet (Ctrl+S)", text: "Resim çizerken elektrik kesilirse emeğiniz kaybolmasın diye arada bir disket butonuna basın." },
        { bold: "Arkadaşının Dosyasına Dokunma", text: "Başkasına ait klasörleri ve dosyaları asla silmeyin veya değiştirmeyin." },
        { bold: "Çöp Kutusuna Dikkat", text: "Bir dosyayı silmeden önce gerçekten ihtiyacınız olup olmadığını iki kez düşünün." }
      ],
      myths: [
        { wrong: "Programın sağ üstündeki kırmızı çarpı (X) tuşuna basınca her şey otomatik kaydedilir.", correct: "Çarpı tuşu programı kapatır; eğer kaydetmediyseniz bilgisayar sorar. 'Kaydetme' derseniz yaptığınız her şey silinir!" }
      ]
    },
    quiz: {
      question: "Bilgisayarda çizdiğimiz bir resmi daha sonra tekrar açabilmek için hangi simgeye tıklamalıyız?",
      options: [
        { text: "A) Kırmızı Çarpı (X) Simgesi", isCorrect: false },
        { text: "B) Mavi Renkli Disket (Kaydet) Simgesi", isCorrect: true },
        { text: "C) Büyüteç Simgesi", isCorrect: false },
        { text: "D) Ekranı Kapatma Düğmesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Mavi disket simgesi 'Kaydet' (Save) komutudur ve dosyamızı kalıcı olarak saklar."
    },
    summaryRules: [
      { bold: "Disket", text: "Dijital hafızaya emanet etme mührüdür." },
      { bold: "Klasör", text: "Dosyalarımızı düzenli tutan sarı renkli çekmecedir." },
      { bold: "Doğru İsim", text: "Aradığımız resmi saniyeler içinde bulmamızı sağlar." }
    ],
    homework: "Ailenizin bilgisayarında veya telefonunda fotoğrafların hangi klasörlerde saklandığını inceleyin.",
    nextWeekPreview: "İnternet Nedir? Bilgiye Ulaşmanın Güvenli Yolları & Görünmez Dünya Ağı!"
  },

  // 15. HAFTA
  {
    week: 15,
    date: "21 - 27 Aralık",
    hours: "2 Ders Saati",
    unit: "3. Tema: Güvenli İnternet ve Dijital Ayak İzi",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "İnternet Nedir? Bilgiye Ulaşmanın Güvenli Yolları",
    subtitle: "Dünyayı Saran Görünmez Ağ, Web Tarayıcıları ve Güvenli Çocuk Siteleri",
    outcomeCode: "BTY.2.3.1 (Ağ Bilinci & Güvenlik)",
    targetSkill: "İnternet Kavramını Anlama, Güvenli Web Sitelerini ve Arama Kurallarını Öğrenme",
    curiosityQuestion: "Dünyanın diğer ucundaki bir kütüphanedeki kitabı veya uzaydaki uydunun fotoğrafını odamızdan nasıl anında görebiliyoruz?",
    roadmap: [
      { title: "İnternet: Küresel Örümcek Ağı", desc: "Bütün dünya bilgisayarlarının birbirine bağlanması." },
      { title: "Web Tarayıcıları", desc: "İnternet denizinde gezinti yapan gemilerimiz (Chrome, Edge vb.)." },
      { title: "Güvenli Siteler", desc: "Çocuk dostu eğitici siteler (EBA, TRT Çocuk, Bilim Çocuk)." },
      { title: "Bilinmeyen Bağlantılar", desc: "Her parlayan linke ve reklama tıklamama kuralı." }
    ],
    section1: {
      title: "Dünyayı Birbirine Bağlayan Görünmez Ağ: İnternet",
      subtitle: "Bilgisayarlar kablolarla, uydularla ve fiber hatlarla birbirine el ele tutuşur.",
      layout: "split-visual",
      card: {
        title: "İnternet Dünyasının Temel Taşları",
        icon: "🌐",
        desc: "İnternette güvenle yolculuk yapmak için bilmemiz gerekenler:",
        items: [
          { bold: "İnternet Ağı", text: "Milyarlarca cihazın konuştuğu, bilgi paylaştığı devasa bir dijital okyanustur." },
          { bold: "Web Tarayıcısı (Browser)", text: "İnternet sitelerini açmamızı sağlayan penceremizdir." },
          { bold: "Web Sitesi Adresi (URL)", text: "Tıpkı evimizin adresi gibi, her sitenin kendine ait bir adresi vardır (örn: eba.gov.tr)." },
          { bold: "Güvenli Arama", text: "Öğretmenimizin ve ailemizin onayladığı çocuk arama motorlarını kullanırız." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
        <!-- Dünya Küresi -->
        <circle cx="210" cy="115" r="55" fill="#0369a1" stroke="#38bdf8" stroke-width="2.5"/>
        <path d="M175 90 C190 85, 230 95, 245 110 C220 125, 200 115, 175 90 Z" fill="#22c55e"/>
        <path d="M190 135 C205 145, 235 155, 240 135 C230 125, 205 125, 190 135 Z" fill="#22c55e"/>
        <!-- Çevredeki Bilgisayarlar -->
        <rect x="60" y="45" width="45" height="35" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="105" y1="70" x2="165" y2="95" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <rect x="315" y="45" width="45" height="35" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="315" y1="70" x2="255" y2="95" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <rect x="60" y="150" width="45" height="35" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="105" y1="160" x2="165" y2="135" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <rect x="315" y="150" width="45" height="35" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="315" y1="160" x2="255" y2="135" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="210" y="205" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">İnternet: Dünyayı Saran Bilgi Ağı</text>
      </svg>`,
      caption: "Milyonlarca Bilgisayarı Birbirine Bağlayan İnternet Küresi"
    },
    section2: {
      title: "Güvenli İnternet Limanları",
      subtitle: "İnternette gezerken güvenli ve eğitici siteleri tercih ederiz.",
      layout: "cards-2",
      cards: [
        {
          title: "Güvenli Çocuk Siteleri",
          icon: "🛡️",
          desc: "Bizim yaşımıza uygun harika siteler:",
          items: [
            { bold: "EBA (eba.gov.tr)", text: "Milli Eğitim Bakanlığı'nın ders videoları, kitapları ve eğitici oyunları." },
            { bold: "TRT Çocuk", text: "Çizgi filmler, yarışmalar ve güvenli çocuk oyunları." },
            { bold: "TÜBİTAK Bilim Çocuk", text: "Deneyler, hayvanlar alemi ve uzay keşifleri." }
          ]
        },
        {
          title: "Zararlı Reklam Tuzakları",
          icon: "⚠️",
          desc: "İnternette asla tıklanmaması gereken tuzaklar:",
          items: [
            { bold: "'Tebrikler Kazandınız!'", text: "Ekranda aniden parlayan 'Hediye telefon kazandınız' kutucukları yalandır, hemen çarpıdan kapatın!" },
            { bold: "Bilinmeyen İndirmeler", text: "'Buraya tıkla indir' yazan yabancı butonlara basmayın." },
            { bold: "Aileye Danışma", text: "Karşınıza tuhaf bir pencere çıktığında hemen öğretmeninize veya ailenize seslenin." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'EBA'da Eğlenceli Bilim Keşfi'",
      subtitle: "Web tarayıcısını açıp EBA çocuk portalına güvenli giriş yapıyoruz.",
      steps: [
        { title: "Tarayıcıyı Aç", desc: "Masaüstündeki web tarayıcısı simgesine çift tıklayın." },
        { title: "Adresi Yaz", desc: "Üstteki adres çubuğuna 'eba.gov.tr' yazıp Enter tuşuna basın." },
        { title: "Eğitici Oyunu Seç", desc: "Öğretmeninizin gösterdiği fen ve teknoloji oyununu açıp deneyin." }
      ],
      criteria: [
        "Web tarayıcısını tanıyıp açabilme",
        "Adres çubuğuna doğru site adresini yazabilme",
        "Güvenli içerikleri ayırt edebilme"
      ]
    },
    tips: {
      safetyTitle: "İnternet Gezgini Altın Kuralları",
      safetyRules: [
        { bold: "Tek Başına Gezme", text: "İnterneti daima yanınızda bir büyüğünüz veya öğretmeniniz varken kullanın." },
        { bold: "Kamera İzni Verme", text: "Bir web sitesi kameranızı veya mikrofonunuzu açmak isterse mutlaka 'İzin Verme'yi seçin." },
        { bold: "Korkutan İçerikler", text: "Sizi üzen veya korkutan bir şey görürseniz ekranı kapatıp hemen ailenize haber verin." }
      ],
      myths: [
        { wrong: "İnternette yazan her bilgi tamamen doğrudur.", correct: "İnternette pek çok yanlış ve uydurma bilgi de vardır; doğruyu öğrenmek için öğretmenimize ve güvenilir kitaplara başvurmalıyız." }
      ]
    },
    quiz: {
      question: "İnternette oyun oynarken ekranda aniden 'Tebrikler, son model bir tablet kazandınız, hemen buraya tıklayın!' yazısı çıkarsa ne yapmalıyız?",
      options: [
        { text: "A) Çok sevinip hemen üzerine tıklarız", isCorrect: false },
        { text: "B) Tıklamadan pencereyi kapatır ve hemen öğretmenimize/ailemize haber veririz", isCorrect: true },
        { text: "C) Bütün arkadaşlarımıza haber verip hediyeyi paylaşırız", isCorrect: false },
        { text: "D) Ev adresimizi ve telefonumuzu yazarız", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu tür aniden parlayan pencereler sahte reklamlardır; asla tıklanmamalı ve büyüklere söylenmelidir."
    },
    summaryRules: [
      { bold: "İnternet", text: "Doğru kullanıldığında dünyanın en büyük kütüphanesidir." },
      { bold: "Güvenli Siteler", text: "EBA ve TRT Çocuk gibi güvenli limanlarda gezmeliyiz." },
      { bold: "Yabancı Linkler", text: "Bilinmeyen pencerelere asla tıklanmaz." }
    ],
    homework: "Ailenizle birlikte EBA'ya girip ilginizi çeken bir bilim videosunu birlikte izleyin.",
    nextWeekPreview: "Dijital Dünyada Nezaket ve Güvenli Şifre Oluşturma (Gizli Şifre Kalesi)!"
  },

  // 16. HAFTA
  {
    week: 16,
    date: "28 Aralık - 03 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Güvenli İnternet ve Dijital Ayak İzi",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "Dijital Dünyada Nezaket ve Güvenli Şifre Oluşturma",
    subtitle: "Kişisel Bilgilerimizi Koruma (Ad, Soyad, Okul, Adres) ve Gizli Şifre Kalesi",
    outcomeCode: "BTY.2.3.2 (Şifre Güvenliği & Siber Etik)",
    targetSkill: "Kişisel Bilgilerin Gizliliğini Koruma ve Güçlü Bir Şifre Oluşturabilme",
    curiosityQuestion: "Evimizin anahtarını sokakta tanımadığımız bir yabancıya verir miyiz? Peki ya bilgisayar şifremizi?",
    roadmap: [
      { title: "Kişisel Bilgi Nedir?", desc: "Adımız, ev adresimiz, okulumuz ve telefon numaramız." },
      { title: "Şifre Kalesi", desc: "Hesaplarımızı koruyan dijital kilit." },
      { title: "Güçlü Şifre Sırları", desc: "Harfler, sayılar ve sembolleri karıştırma." },
      { title: "Dijital Nezaket", desc: "İnternette de gerçek hayattaki gibi saygılı ve kibar olma." }
    ],
    section1: {
      title: "Kişisel Bilgilerimiz Bize Özeldir!",
      subtitle: "Tanımadığımız kişilere internette asla söylemememiz gereken 5 sır:",
      layout: "split-visual",
      card: {
        title: "Gizli Kalması Gereken Bilgiler",
        icon: "🔒",
        desc: "İnternette hiçbir yabancıyla paylaşılmaz:",
        items: [
          { bold: "Ev Adresimiz", text: "Hangi mahallede ve sokakta oturduğumuz gizlidir." },
          { bold: "Okulumuzun Adı", text: "Hangi okula ve hangi sınıfa gittiğimiz paylaşılmaz." },
          { bold: "Telefon Numaramız", text: "Annemizin, babamızın veya kendi telefon numaramız verilmez." },
          { bold: "T.C. Kimlik Numarası", text: "Sadece ailemizin bildiği en özel kimlik numaramızdır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Kale Kalkanı -->
        <path d="M210 45 L280 75 V135 C280 175, 210 205, 210 205 C210 205, 140 175, 140 135 V75 Z" fill="#065f46" stroke="#34d399" stroke-width="3"/>
        <!-- Asma Kilit -->
        <rect x="190" y="120" width="40" height="35" rx="6" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
        <path d="M198 120 V105 C198 95, 222 95, 222 105 V120" stroke="#fbbf24" stroke-width="3" fill="none"/>
        <circle cx="210" cy="135" r="4" fill="#78350f"/>
        <line x1="210" y1="139" x2="210" y2="147" stroke="#78350f" stroke-width="2"/>
        <!-- Kalkan Yazısı -->
        <text x="210" y="225" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GÜÇLÜ ŞİFRE KALENİ KORUR!</text>
      </svg>`,
      caption: "Kişisel Bilgileri Koruyan Dijital Güvenlik Kalkanı"
    },
    section2: {
      title: "Yıkılmaz Bir Şifre Nasıl Yapılır?",
      subtitle: "Hırsızların tahmin edemeyeceği güçlü bir şifre kalesi inşa ediyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Zayıf Şifreler (Çok Tehlikeli!)",
          icon: "❌",
          desc: "Kolayca tahmin edilen şifreler:",
          items: [
            { bold: "'123456'", text: "Dünyanın en kolay tahmin edilen ve hemen kırılan şifresidir." },
            { bold: "'1234' veya 'şifre'", text: "Hiçbir koruma sağlamaz." },
            { bold: "Kendi Adımız", text: "Örneğin 'ahmet2016' gibi şifreleri herkes kolayca tahmin eder." }
          ]
        },
        {
          title: "Güçlü Şifre Formülü (Süper Güvenli!)",
          icon: "✅",
          desc: "Kimsenin bulamayacağı formül:",
          items: [
            { bold: "Büyük ve Küçük Harf", text: "Örneğin: 'Elma' veya 'Kedi'." },
            { bold: "Sayılar Ekle", text: "Doğum yılı yerine rastgele sayılar: '42', '89'." },
            { bold: "Sihirli Sembol", text: "Nokta, soru işareti veya yıldız ekle: 'Mavi.Kedi?42'." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'Süper Gizli Şifre Üreticisi'",
      subtitle: "Defterimize güçlü şifre kurallarına uygun bir şifre kurguluyoruz ama kimseye göstermiyoruz!",
      steps: [
        { title: "Sevdiğin Bir Renk Seç", desc: "Örneğin 'Turuncu'." },
        { title: "Uğurlu Bir Sayı Ekle", desc: "Örneğin '75'." },
        { title: "Sihirli Bir İşaret Koy", desc: "Sonuna yıldız (*) koyarak 'Turuncu75*' şifresini üretin." }
      ],
      criteria: [
        "Güçlü şifre kurallarını (harf + sayı + sembol) uygulayabilme",
        "Şifrenin sadece anne-baba ile paylaşılabileceğini bilme",
        "Kişisel bilgileri internet ortamında gizli tutma bilinci"
      ]
    },
    tips: {
      safetyTitle: "Şifre ve Nezaket Kuralları",
      safetyRules: [
        { bold: "Şifreni Sır Gibi Sakla", text: "En yakın arkadaşına bile şifreni söyleme; sadece anne-baban bilebilir." },
        { bold: "İnternette Kibar Ol", text: "Gerçek hayatta söylemeyeceğin kötü sözleri internette de asla yazma." },
        { bold: "Büyük Harfle Bağırma", text: "İnternette TÜMÜ BÜYÜK HARFLE yazmak bağırmak anlamına gelir; küçük harflerle yazın." }
      ],
      myths: [
        { wrong: "En iyi arkadaşıma şifremi verirsem arkadaşlığımız daha da güçlenir.", correct: "Şifreler diş fırçası gibidir; sadece kişiye özeldir ve kimseyle paylaşılamaz!" }
      ]
    },
    quiz: {
      question: "Aşağıdakilerden hangisi bir bilgisayar hesabı için en GÜÇLÜ ve tahmin edilmesi en ZOR şifredir?",
      options: [
        { text: "A) 123456", isCorrect: false },
        { text: "B) ali", isCorrect: false },
        { text: "C) Sari.Kus!84", isCorrect: true },
        { text: "D) 111111", isCorrect: false },
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: C!</strong> Büyük harf, küçük harf, sayı ve sembol (!, .) içeren şifreler kırılamaz kalelerdir."
    },
    summaryRules: [
      { bold: "Kişisel Bilgi", text: "Evimiz, okulumuz ve telefonumuz yabancılara kapalıdır." },
      { bold: "Güçlü Şifre", text: "Harf, sayı ve sembollerden oluşan gizli anahtardır." },
      { bold: "Nezaket", text: "Ekran arkasında da daima kibar ve yardımsever olmalıyız." }
    ],
    homework: "Evinizde bir hesabın şifresini anne veya babanızla birlikte güçlü şifre kurallarına göre yenileyin.",
    nextWeekPreview: "1. Dönem 2. Değerlendirme & Güvenli İnternet Dedektifi Bilgi Yarışması!"
  },

  // 17. HAFTA
  {
    week: 17,
    date: "04 - 10 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Güvenli İnternet ve Dijital Ayak İzi",
    unitBadge: "1. Dönem 2. Sınav",
    unitTheme: "tema-sinav",
    title: "1. Dönem 2. Değerlendirme & Güvenli İnternet Dedektifi",
    subtitle: "Siber Tehlikelere Karşı Kalkanımız: Doğru Davranış Senaryoları ve Test",
    outcomeCode: "BTY.2.3.3 (Değerlendirme & Güvenlik Analizi)",
    targetSkill: "İnternet Güvenliği ve Dijital Becerileri Ölçme, Senaryolar Üzerinden Doğru Karar Verme",
    curiosityQuestion: "Karşımıza çıkan bir tehlikeyi fark edip 'Dur! Bu bir tuzak!' diyebilmek bize nasıl bir dedektif rozeti kazandırır?",
    roadmap: [
      { title: "Dedektif Görevi", desc: "İnternette karşılaşılan tuzak senaryoları inceleme." },
      { title: "Şifre ve Bilgi Testi", desc: "Kişisel bilgileri koruma kurallarını hatırlama." },
      { title: "Paint ve Yazı Becerisi", desc: "1. dönem boyunca öğrendiğimiz çizim ve klavye becerilerini sergileme." },
      { title: "Dönem Şampiyonları", desc: "Dedektif başarı sertifikalarını alma." }
    ],
    section1: {
      title: "Güvenli İnternet Dedektifinin Senaryo Odası",
      subtitle: "3 farklı durumda bir dedektif gibi doğru kararı veriyoruz:",
      layout: "split-visual",
      card: {
        title: "Senaryolar ve Doğru Kararlar",
        icon: "🕵️‍♂️",
        desc: "Dedektif sınavından tam puan alma rehberi:",
        items: [
          { bold: "1. Senaryo (Yabancı Mesajı)", text: "Oyunda tanımadığımız biri 'Hangi okula gidiyorsun?' dedi. -> ASLA CEVAP VERMEYİZ, ailemize söyleriz." },
          { bold: "2. Senaryo (Hediye Tuzağı)", text: "Ekranda 'Ücretsiz altın kazanmak için tıkla' çıktı. -> TIKLAMAYIZ, pencereyi kapatırız." },
          { bold: "3. Senaryo (Şifre İsteme)", text: "Biri 'Karakterini güçlendireyim şifreni ver' dedi. -> ŞİFREMİZİ KİMSEYE VERMEYİZ!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
        <!-- Dedektif Büyüteci -->
        <circle cx="170" cy="115" r="50" fill="#1e293b" stroke="#38bdf8" stroke-width="4"/>
        <line x1="205" y1="150" x2="250" y2="195" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
        <!-- Büyüteç İçinde Onay -->
        <path d="M145 115 L165 135 L195 95" stroke="#10b981" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Rozet -->
        <rect x="250" y="55" width="120" height="40" rx="8" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
        <text x="310" y="80" fill="#fecaca" font-size="11" font-weight="bold" text-anchor="middle">SİBER DEDEKTİF</text>
        <text x="210" y="215" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Tehlikeleri Fark Eden Akıllı Çocuklar!</text>
      </svg>`,
      caption: "Siber Güvenlik Dedektifi Büyüteci ve Kontrol Simgesi"
    },
    section2: {
      title: "1. Dönem Büyük Bilişim Değerlendirmesi",
      subtitle: "Eylül ayından bu yana katettiğimiz muhteşem yolculuk.",
      layout: "cards-2",
      cards: [
        {
          title: "Neler Öğrendik?",
          icon: "📚",
          desc: "1. dönemin 4 ana hazinesi:",
          items: [
            { bold: "Donanım", text: "Ekran, kasa, klavye, fare ve açma-kapama adımları." },
            { bold: "Ergonomi", text: "Kol boyu mesafe, dik duruş ve 20-20-20 kuralı." },
            { bold: "Dijital Sanat", text: "Paint araçları, şekiller, metin ekleme ve klasöre kaydetme." },
            { bold: "Siber Güvenlik", text: "Kişisel bilgileri saklama ve güçlü şifre oluşturma." }
          ]
        },
        {
          title: "Dedektif Andı",
          icon: "🌟",
          desc: "Bilişim sınıfının sözü:",
          items: [
            { bold: "Söz Veriyorum", text: "Teknolojiyi öğrenmek ve üretmek için kullanacağıma," },
            { bold: "Söz Veriyorum", text: "Ekran başında süremi aşmayıp sağlığımı koruyacağıma," },
            { bold: "Söz Veriyorum", text: "İnternette daima kibar ve dikkatli olacağıma söz veririm!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Siber Dedektif Yarışması'",
      subtitle: "Akıllı tahtada açılan 5 interaktif güvenlik senaryosunu sınıfça çözüyoruz.",
      steps: [
        { title: "Senaryoyu Dinle", desc: "Öğretmeninizin okuduğu dijital olayı dikkatle dinleyin." },
        { title: "Dedektif Kararını Ver", desc: "Doğru davranışı seçip el kaldırarak fikrinizi açıklayın." },
        { title: "Dedektif Rozetini Al", desc: "Tüm soruları tamamlayarak 1. dönem başarı belgenizi kazanın." }
      ],
      criteria: [
        "Siber güvenlik risklerini doğru analiz edebilme",
        "Kişisel bilgilerin korunması gerektiğini savunabilme",
        "Sınıf içi tartışmalarda saygılı ve aktif rol alma"
      ]
    },
    tips: {
      safetyTitle: "Sınav ve Güvenlik Tavsiyeleri",
      safetyRules: [
        { bold: "Şüphe Duy", text: "İnternette çok güzel görünen tekliflere hemen inanmayın, mutlaka şüpheyle yaklaşın." },
        { bold: "Büyüğüne Danış", text: "Kafanızı karıştıran her durumda bir büyüğünüzden yardım isteyin." },
        { bold: "Kendine Güven", text: "Sen öğrendiğin bilgilerle en güçlü siber dedektifsin!" }
      ],
      myths: [
        { wrong: "Sanal ortamda tanıştığım biriyle gerçek hayatta gizlice buluşabilirim.", correct: "İnternette tanışılan yabancılarla asla gerçek hayatta buluşulmaz; bu çok tehlikelidir!" }
      ]
    },
    quiz: {
      question: "İnternette oynadığınız bir oyunda tanımadığınız bir oyuncu size 'Hangi okula gidiyorsun ve adın ne?' diye sorarsa en doğru davranış ne olur?",
      options: [
        { text: "A) Okulumuzun tam adını ve ev adresimizi hemen yazarız", isCorrect: false },
        { text: "B) 'Kişisel bilgilerimi yabancılarla paylaşamam' deriz ve ailemize haber veririz", isCorrect: true },
        { text: "C) Telefon numaramızı veririz", isCorrect: false },
        { text: "D) Okulun fotoğrafını çeker göndeririz", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kişisel bilgilerimiz (ad, okul, adres) yabancılara karşı daima gizli tutulmalıdır."
    },
    summaryRules: [
      { bold: "Farkındalık", text: "Tehlikeyi önceden sezme yeteneğidir." },
      { bold: "Gizlilik", text: "Özel bilgilerimizi bir zırh gibi korumaktır." },
      { bold: "Büyük Başarı", text: "1. dönemin tüm konularını başarıyla tamamladık!" }
    ],
    homework: "Ailenize 'Siber Dedektif' olduğunuzu söyleyip öğrendiğiniz 3 güvenlik kuralını anlatın.",
    nextWeekPreview: "Dijital Ayak İzi: Kumsaldaki Ayak İzleri ve İnternette Bıraktığımız İzler!"
  },

  // 18. HAFTA
  {
    week: 18,
    date: "11 - 17 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Güvenli İnternet ve Dijital Ayak İzi",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "Dijital Ayak İzi: İnternette Paylaştıklarımız Silinir mi?",
    subtitle: "Kumsaldaki Ayak İzleri ve Sanal Dünyadaki Kalıcı İzlerimizin Farkındalığı",
    outcomeCode: "BTY.2.3.4 (Dijital Kimlik & Ayak İzi)",
    targetSkill: "Dijital Ayak İzi Kavramını Öğrenme, İnternette Kalıcı İzler Bırakmamaya Özen Gösterme",
    curiosityQuestion: "Kumsalda yürüdüğümüzde dalgalar ayak izlerimizi siler, peki internete yüklediğimiz bir fotoğrafı dalgalar silebilir mi?",
    roadmap: [
      { title: "Kumsaldaki İzler", desc: "Gerçek hayattaki izlerle dijital izlerin karşılaştırılması." },
      { title: "Dijital Ayak İzi Nedir?", desc: "İnternette tıkladığımız, aradığımız ve paylaştığımız her şeyin izi." },
      { title: "İnternet Asla Unutmaz", desc: "Sil düğmesine bassak bile bir kopyanın kalabileceği gerçeği." },
      { title: "Güzel İzler Bırakmak", desc: "İnterneti faydalı bilgiler, güzel çizimler ve iyilik için kullanma." }
    ],
    section1: {
      title: "Dijital Ayak İzi: İnternetteki Gölgemiz",
      subtitle: "İnternette yaptığımız her tıklama, arkamızda görünmez bir ayak izi bırakır.",
      layout: "split-visual",
      card: {
        title: "Ayak İzimiz Neleri İçerir?",
        icon: "👣",
        desc: "İnternette gezerken bıraktığımız 4 iz:",
        items: [
          { bold: "İzlediğimiz Videolar", text: "Hangi çizgi filmleri ve oyunları izlediğimiz kaydedilir." },
          { bold: "Yaptığımız Aramalar", text: "Arama kutusuna yazdığımız her kelime iz bırakır." },
          { bold: "Yüklediğimiz Resimler", text: "Fotoğraflarımız internette bir kez paylaşıldığında başkaları tarafından kaydedilebilir." },
          { bold: "Yazdığımız Yorumlar", text: "Yazdığımız sözler yıllar sonra bile karşımıza çıkabilir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Ayak İzi 1 -->
        <ellipse cx="140" cy="115" rx="22" ry="38" fill="#f59e0b" fill-opacity="0.3" stroke="#fbbf24" stroke-width="2" transform="rotate(-15 140 115)"/>
        <circle cx="120" cy="70" r="6" fill="#fbbf24"/>
        <circle cx="132" cy="65" r="5" fill="#fbbf24"/>
        <circle cx="144" cy="67" r="5" fill="#fbbf24"/>
        <circle cx="155" cy="72" r="4" fill="#fbbf24"/>
        <circle cx="163" cy="80" r="3.5" fill="#fbbf24"/>
        <!-- Ayak İzi 2 -->
        <ellipse cx="260" cy="95" rx="22" ry="38" fill="#38bdf8" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2" transform="rotate(15 260 95)"/>
        <circle cx="280" cy="50" r="6" fill="#38bdf8"/>
        <circle cx="268" cy="45" r="5" fill="#38bdf8"/>
        <circle cx="256" cy="47" r="5" fill="#38bdf8"/>
        <circle cx="245" cy="52" r="4" fill="#38bdf8"/>
        <circle cx="237" cy="60" r="3.5" fill="#38bdf8"/>
        <!-- Yazı -->
        <text x="210" y="195" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">İnternette Paylaşılan Şeyler Kolay Kolay Silinmez!</text>
        <text x="210" y="215" fill="#94a3b8" font-size="11" text-anchor="middle">Bu yüzden sadece güzel ve gurur duyacağımız izler bırakmalıyız.</text>
      </svg>`,
      caption: "İnternette Bıraktığımız Kalıcı Dijital Ayak İzi"
    },
    section2: {
      title: "Güzel ve Temiz Dijital İzler Bırakmak",
      subtitle: "Büyüdüğümüzde geçmişimize baktığımızda gurur duyacağımız izler bırakalım.",
      layout: "cards-2",
      cards: [
        {
          title: "Bırakılması Gereken Güzel İzler",
          icon: "🌱",
          desc: "Bize ve çevremize değer katan paylaşımlar:",
          items: [
            { bold: "Eğitici Projeler", text: "Çizdiğimiz resimler, kodladığımız oyunlar ve şiirlerimiz." },
            { bold: "Kibar ve Güzel Sözler", text: "Arkadaşımızın başarısını tebrik eden tatlı yorumlar." },
            { bold: "Bilim ve Sanat Merakı", text: "Faydalı belgeseller ve kitap araştırmaları." }
          ]
        },
        {
          title: "Asla Bırakılmaması Gereken İzler",
          icon: "🚫",
          desc: "Gelecekte bizi utandırabilecek hatalar:",
          items: [
            { bold: "Kırıcı Sözler", text: "Öfkeyle yazılmış kaba ve alaycı kelimeler." },
            { bold: "Uygunsuz Fotoğraflar", text: "İznimiz olmadan çekilen veya ailemizi zor durumda bırakacak resimler." },
            { bold: "Yalan Haberler", text: "Doğruluğundan emin olmadığımız korkutucu paylaşımlar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Benim Dijital Ayak İzim Panosu'",
      subtitle: "Paint'te bir ayak izi çizip içine internette bırakmak istediğimiz güzel şeyleri yazıyoruz.",
      steps: [
        { title: "Büyük Bir Ayak İzi Çiz", desc: "Elips ve fırça araçlarıyla sayfanın ortasına büyük bir ayak izi çizin." },
        { title: "İçini Güzel Sözlerle Doldur", desc: "'Dürüstlük', 'Bilim', 'Sevgi', 'Çizimlerim' kelimelerini içine yazın." },
        { title: "Renklendir ve Kaydet", desc: "Pırıl pırıl renklerle süsleyip 'Benim_Guzel_Izim' adıyla kaydedin." }
      ],
      criteria: [
        "Dijital ayak izinin kalıcılığını kavrayabilme",
        "İnternette sorumlu ve temiz izler bırakma bilinci oluşturma",
        "Kendi dijital kimliği üzerine düşüncelerini görselleştirebilme"
      ]
    },
    tips: {
      safetyTitle: "Bilinçli İnternetçi Öğütleri",
      safetyRules: [
        { bold: "Paylaşmadan Önce Düşün", text: "'Bunu öğretmenim veya anneannem görse sevinir mi?' diye kendinize sorun." },
        { bold: "İzinsiz Fotoğraf Çekme", text: "Arkadaşınızın fotoğrafını çekip internete koymadan önce mutlaka iznini alın." },
        { bold: "Silmek Yetmeyebilir", text: "Bir resmi silseniz bile bir başkası ekran görüntüsü almış olabilir; bu yüzden baştan dikkatli olun." }
      ],
      myths: [
        { wrong: "İnternette sildiğim bir şey uzay boşluğuna gider ve tamamen yok olur.", correct: "İnternet sunucularında verilerin yedekleri kalabilir; bu yüzden internete yüklenen her şey kalıcı kabul edilmelidir." }
      ]
    },
    quiz: {
      question: "İnternette yaptığımız aramalar, izlediğimiz videolar ve yazdığımız yazılar arkamızda ne bırakır?",
      options: [
        { text: "A) Gerçek çamurlu ayak izi", isCorrect: false },
        { text: "B) Dijital Ayak İzi (Kalıcı kayıtlar)", isCorrect: true },
        { text: "C) Hiçbir iz bırakmaz, her şey anında uçar", isCorrect: false },
        { text: "D) Sadece elektrik tasarrufu sağlar", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> İnternette yaptığımız her işlem arkamızda 'Dijital Ayak İzi' bırakır; bu yüzden daima güzel ve faydalı işler yapmalıyız."
    },
    summaryRules: [
      { bold: "Dijital Ayak İzi", text: "İnternetteki kalıcı geçmişimiz ve gölgemizdir." },
      { bold: "Düşün Sonra Paylaş", text: "En akıllıca ve güvenli internet kuralıdır." },
      { bold: "Geleceğe Miras", text: "Bıraktığımız her iz bizi yansıtır." }
    ],
    homework: "Ailenize 'Dijital Ayak İzi' kavramını anlatıp internette birlikte bıraktığınız güzel bir anıyı konuşun.",
    nextWeekPreview: "1. Dönem Sonu: Dijital Portfolyo, Eserlerimizin Sergisi ve Karne Sevinci!"
  },

  // 19. HAFTA
  {
    week: 19,
    date: "18 - 24 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Güvenli İnternet ve Dijital Ayak İzi",
    unitBadge: "Dönem Sonu",
    unitTheme: "tema-3",
    title: "1. Dönem Sonu: Dijital Portfolyo ve Karne Sevinci",
    subtitle: "Dönem Boyunca Yaptığımız Çizimler, Yazılar ve Başarı Rozetlerimizin Sunumu",
    outcomeCode: "BTY.2.3.5 (Portfolyo & Öz Değerlendirme)",
    targetSkill: "1. Dönem Ürünlerini Sergileme, Kendini İfade Etme ve Başarıyı Kutlama",
    curiosityQuestion: "19 hafta önce bilgisayarı açmayı bile bilmezken bugün kendi tebrik kartlarımızı ve bayraklarımızı çiziyor olmak nasıl bir süper güç?",
    roadmap: [
      { title: "Büyük Geriye Bakış", desc: "19 haftalık bilişim yolculuğumuzun fotoğraf albümü." },
      { title: "Dijital Portfolyo Sergisi", desc: "Klasörümüzdeki en sevdiğimiz resmi açıp sınıfa tanıtma." },
      { title: "Karne Sevinci", desc: "1. dönemi başarıyla bitirmenin gururunu yaşama." },
      { title: "Tatil Bilişim Sözü", desc: "Yarıyıl tatilinde ekran dengesini koruma sözü." }
    ],
    section1: {
      title: "19 Haftalık Bilişim Kahramanları Geçidi",
      subtitle: "Küçük adımlarla başladık, devasa bilişimciler olduk!",
      layout: "split-visual",
      card: {
        title: "1. Dönem Başarı Karnemiz",
        icon: "🎖️",
        desc: "Gurur duyduğumuz kazanımlarımız:",
        items: [
          { bold: "1. Bilgisayar Parçaları", text: "Kasa, monitör, klavye ve fareyi adımız gibi biliyoruz." },
          { bold: "2. Sağlık ve Denge", text: "Bir kol boyu mesafeden dik oturuyor, ekran süremizi sınırlandırıyoruz." },
          { bold: "3. Dijital Ressamlık", text: "Paint'te bayrağımızı, evimizi ve öğretmenler günü kartımızı çizdik." },
          { bold: "4. Siber Güvenlik", text: "Kişisel sırlarımızı koruyor, güçlü şifreler üretiyoruz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- Karne / Başarı Belgesi -->
        <rect x="70" y="35" width="280" height="180" rx="12" fill="#1e1b4b" stroke="#c084fc" stroke-width="2.5"/>
        <text x="210" y="70" fill="#fde047" font-size="16" font-weight="900" text-anchor="middle">1. DÖNEM BAŞARI BELGESİ</text>
        <line x1="110" y1="85" x2="310" y2="85" stroke="#a855f7" stroke-width="2"/>
        <text x="210" y="115" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">2. SINIF BİLİŞİM YILDIZLARI</text>
        <text x="210" y="140" fill="#cbd5e1" font-size="11" text-anchor="middle">Harika çizimler ve güvenli internet ustaları!</text>
        <!-- Altın Yıldızlar -->
        <text x="140" y="180" font-size="24">⭐</text>
        <text x="185" y="180" font-size="28">🏆</text>
        <text x="245" y="180" font-size="24">⭐</text>
      </svg>`,
      caption: "1. Dönem Bilişim ve Teknoloji Başarı Belgesi"
    },
    section2: {
      title: "Yarıyıl Tatili (Sömestr) Bilişim Planımız",
      subtitle: "Tatilde dinlenirken teknolojiyi eğlenceli ve faydalı şekilde kullanmak.",
      layout: "cards-2",
      cards: [
        {
          title: "Tatilde Neler Yapabiliriz?",
          icon: "☃️",
          desc: "Keyifli kış tatili etkinlikleri:",
          items: [
            { bold: "Kar Topu ve Yürüyüş", text: "Açık havanın tadını çıkarın, kardan adam yapın ve hareket edin." },
            { bold: "Akıl Oyunları ve Bulmacalar", text: "Labirent çözme, sudoku ve tangram gibi kağıt oyunları oynayın." },
            { bold: "Kitap Okuma Saati", text: "Her gün yeni bir masal veya bilim kitabı keşfedin." }
          ]
        },
        {
          title: "2. Dönem Bizi Neler Bekliyor?",
          icon: "🚀",
          desc: "Şubat ayında başlayacak dev macera:",
          items: [
            { bold: "Algoritma ve Kodlama", text: "Robot gibi adım adım düşünme ve yön bulma oyunları." },
            { bold: "ScratchJr ile Kodlama", text: "Karakterleri zıplatma, koşturma ve konuşturma sanatı!" },
            { bold: "Kendi Mini Oyunumuz", text: "Arkadaşlarınızla oynayabileceğiniz eğlenceli kodlama projeleri." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Sınıfımızın Dijital Sanat Sergisi'",
      subtitle: "Dönem boyunca klasörümüze kaydettiğimiz en güzel 1 resmi akıllı tahtaya yansıtıp arkadaşlarımıza sunuyoruz.",
      steps: [
        { title: "Klasörünü Aç", desc: "Masaüstündeki kendi klasörünüze girin." },
        { title: "En İyi Eserini Seç", desc: "Çizdiğiniz bayrak, ev veya tebrik kartlarından en beğendiğinizi açın." },
        { title: "Sunumunu Yap", desc: "Resminde ne anlattığını ve hangi araçları kullandığını 1 dakikada anlat." }
      ],
      criteria: [
        "Kendi dijital ürünlerini sergileme özgüvenine sahip olma",
        "Arkadaşlarının çalışmalarını saygı ve beğeniyle alkışlama",
        "1. dönem sürecindeki gelişimini ifade edebilme"
      ]
    },
    tips: {
      safetyTitle: "Tatil Bilişim Sözü",
      safetyRules: [
        { bold: "Günde 45 Dakika", text: "Tatilde olsak bile ekran süresini 45 dakikayı geçirmeyecek şekilde planlayın." },
        { bold: "Gözlerini Dinlendir", text: "Her 20 dakikada bir ekrandan uzaklaşıp mola verin." },
        { bold: "2. Döneme Enerji", text: "Şubat ayında başlayacak kodlama maceraları için bol bol dinlenin!" }
      ],
      myths: [
        { wrong: "Tatilde bilgisayarda öğrendiğimiz her şeyi unuturuz.", correct: "Doğru öğrenilen bilişim becerileri bisiklete binmek gibidir; asla unutulmaz, sadece 2. dönemde daha da hızlanacaktır!" }
      ]
    },
    quiz: {
      question: "1. Dönem boyunca yaptığımız çizimleri, yazıları ve belgeleri kaybetmemek için nereye kaydetmiştik?",
      options: [
        { text: "A) Çöp Kutusuna", isCorrect: false },
        { text: "B) Masaüstünde kendi adımızla açtığımız özel klasöre", isCorrect: true },
        { text: "C) Bilgisayarın klavyesinin altına", isCorrect: false },
        { text: "D) Hiçbir yere kaydetmedik", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kendi adımıza açtığımız klasör bizim dijital dolabımızdır; tüm eserlerimizi orada güvenle sakladık."
    },
    summaryRules: [
      { bold: "Gurur", text: "1. dönemi harika bilgiler ve eserlerle tamamladık." },
      { bold: "İyi Tatiller", text: "Bol hareketli, neşeli ve dinlendirici bir sömestr dileriz." },
      { bold: "2. Dönem", text: "Kodlama ve robotik dünyasının kapıları açılacak!" }
    ],
    homework: "Yarıyıl tatilinde dinlenin, kitap okuyun ve 2. dönem başlayacak kodlama dersi için enerji toplayın!",
    nextWeekPreview: "Sömestr 1. Hafta: Bilgisayarsız Kodlama ve Algoritma Macera Bülteni!"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_TERM_1_PART2_GRADE2 = CURRICULUM_TERM_1_PART2_GRADE2;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULUM_TERM_1_PART2_GRADE2 };
}
