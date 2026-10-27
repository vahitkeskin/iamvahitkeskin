/**
 * 3. Sınıf Bilişim Teknolojileri ve Yazılım - 1. Dönem (2. Kısım: Hafta 11 - 19)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_PART2_GRADE3 = [
  // 11. HAFTA
  {
    week: 11,
    date: "23 - 29 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital İletişim, Kelime İşlemci ve Görsel Üretim",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "24 Kasım Öğretmenler Günü: Mektup ve Şiir Dizgisi",
    subtitle: "Paragraf Aralıkları, Satır Boşlukları ve Öğretmenimize Dijital Teşekkür Belgesi",
    outcomeCode: "BTY.3.2.4 (Biçimlendirme & Değerler Eğitimi)",
    targetSkill: "Resmi/Samimi Mektup Düzenini Kavrama, Satır ve Paragraf Boşluklarını Ayarlayabilme",
    curiosityQuestion: "Eski zamanlarda güvercinlerle gönderilen mektuplar bugün dijital ortamda nasıl saniyeler içinde sevdiklerimize ulaşır?",
    roadmap: [
      { title: "24 Kasım Önemi", desc: "Başöğretmen Gazi Mustafa Kemal Atatürk ve tüm öğretmenlerimize minnet." },
      { title: "Mektup Düzeni", desc: "Hitap cümlesi, giriş, gelişme, sonuç ve sağ alttaki imza bölümü." },
      { title: "Satır Aralığı (1.15 / 1.5)", desc: "Satırların birbirine yapışmasını önleyip nefes aldırma." },
      { title: "Yazdırma Önizleme (Ctrl+P)", desc: "Kağıda basmadan önce belgenin nasıl görüneceğini kontrol etme." }
    ],
    section1: {
      title: "Dijital Mektup Sanatı ve Paragraf Düzeni",
      subtitle: "Güzel bir mektup sadece içten kelimelerle değil, düzenli satırlarla da kalbe dokunur.",
      layout: "split-visual",
      card: {
        title: "Kusursuz Bir Mektubun 4 Bölümü",
        icon: "✉️",
        desc: "Kelime işlemcide mektup yazarken:",
        items: [
          { bold: "1. Hitap (Sol Üst)", text: "'Sevgili Öğretmenim,' ifadesi ve sonrasında virgül." },
          { bold: "2. Paragraf Girintisi (Tab)", text: "Her paragrafa başlarken klavyedeki 'Tab' tuşuyla 1 parmak içeriden başlama." },
          { bold: "3. Satır Aralığı", text: "Satırların çok sıkışık olmaması için 1.15 veya 1.5 aralık seçme." },
          { bold: "4. Tarih ve İmza (Sağ Alt)", text: "Sayfanın sağına yaslanmış tarih, ad-soyad ve imza." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Mektup Kağıdı -->
        <rect x="65" y="35" width="290" height="180" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Sağ Üst Tarih -->
        <text x="335" y="55" fill="#64748b" font-size="9" text-anchor="end">24 Kasım 2026</text>
        <!-- Hitap -->
        <text x="85" y="75" fill="#4338ca" font-size="12" font-weight="900">Canım Öğretmenim,</text>
        <!-- Paragraf 1 -->
        <text x="105" y="95" fill="#334155" font-size="10">Bize her gün bilginin, sevginin ve bilişimin</text>
        <text x="85" y="110" fill="#334155" font-size="10">kapılarını açtığınız için size yürekten teşekkür ederim.</text>
        <!-- Paragraf 2 -->
        <text x="105" y="132" fill="#334155" font-size="10">Sizin sayenizde bilgisayarı sadece tüketen değil,</text>
        <text x="85" y="147" fill="#334155" font-size="10">geleceği üreten çocuklar olacağız.</text>
        <!-- Çiçek / Kalp Simgesi -->
        <circle cx="120" cy="180" r="14" fill="#f43f5e" fill-opacity="0.2"/>
        <text x="120" y="185" font-size="14" text-anchor="middle">🌸</text>
        <!-- Sağ Alt İmza -->
        <text x="335" y="180" fill="#1e1b4b" font-size="10" font-weight="bold" text-anchor="end">Öğrenciniz Ali</text>
        <text x="335" y="195" fill="#64748b" font-size="8" text-anchor="end">3/B Sınıfı</text>
      </svg>`,
      caption: "Öğretmenler Günü Dijital Mektup Düzeni ve Paragraf Hiyerarşisi"
    },
    section2: {
      title: "Tab Tuşu ve Satır Aralıkları",
      subtitle: "Klavyenin ve biçimlendirmenin iki gizli süper gücü:",
      layout: "cards-2",
      cards: [
        {
          title: "Sihirli 'Tab' Tuşu (Paragraf Başı)",
          icon: "⇥",
          desc: "Space tuşuna 5 kez basmak yerine:",
          items: [
            { bold: "Tek Tıkla Girinti", text: "Klavyenin solundaki iki oklu 'Tab' tuşu imleci tam 1.25 cm içeri iter." },
            { bold: "Kusursuz Düzen", text: "Bütün paragraflarınız milimetrik olarak aynı hizada başlar." },
            { bold: "Zaman Tasarrufu", text: "Boşluk saymaya gerek kalmadan hızlıca yazıya odaklanırsınız." }
          ]
        },
        {
          title: "Baskı Önizleme (Print Preview)",
          icon: "🖨️",
          desc: "Kağıt ve mürekkep israfını önleyen çevre dostu adım:",
          items: [
            { bold: "Ctrl + P Kısayolu", text: "Yazdırma penceresini açarak sayfanın tam görüntüsünü gösterir." },
            { bold: "Kenar Taşması Kontrolü", text: "Yazıların kenarlardan taşıp taşmadığını ekranda görmenizi sağlar." },
            { bold: "Ağaçları Korur", text: "Hatalı baskıyı önleyerek doğayı ve kağıtları korur." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Öğretmenime Dijital Mektup'",
      subtitle: "Kelime işlemcide tüm kurallara uygun mektup yazıp çerçeve ekliyoruz.",
      steps: [
        { title: "Hitap ve Paragraf", desc: "Öğretmeninize hitap yazın ve Tab tuşuna basarak teşekkür cümlenizi yazın." },
        { title: "Satır Aralığını Ayarla", desc: "Tüm metni seçip satır aralığını 1.5 yaparak ferah bir görünüm kazandırın." },
        { title: "Tarih ve İmzanı Sağa Yasla", desc: "Adınızı ve tarihi sayfanın sağına yaslayıp 'Mektubum' adıyla kaydedin." }
      ],
      criteria: [
        "Tab tuşunu kullanarak doğru paragraf girintisi yapabilme",
        "Satır aralığı ve hizalama araçlarını mektup formatına uygun kullanma",
        "Baskı önizleme yaparak sayfayı görsel olarak denetleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Dizgi Kuralları",
      safetyRules: [
        { bold: "Enter Tuşunu Gereksiz Kullanma", text: "Satır bittiğinde kelime işlemci kendiliğinden alt satıra geçer; sadece yeni paragrafa başlarken Enter'a basın." },
        { bold: "Yazım Denetimi (Kırmızı Çizgi)", text: "Kelimenin altındaki kırmızı dalgalı çizgi yazım hatası olduğunu gösterir; sağ tıklayıp doğrusunu seçin." },
        { bold: "Nezaket Dili", text: "Mektubunuzda daima saygılı, samimi ve sevgi dolu cümleler kurun." }
      ],
      myths: [
        { wrong: "Her satırın sonunda Enter tuşuna basmak gerekir.", correct: "Hayır! Kelime işlemciler kelimeyi otomatik alt satıra kaydırır. Enter'a sadece yeni bir paragrafa geçerken basılır." }
      ]
    },
    quiz: {
      question: "Kelime işlemcide yeni bir paragrafa başlarken metni tam 1 parmak içeri (paragraf başı) kaydırmak için klavyedeki hangi tuşa basılır?",
      options: [
        { text: "A) Caps Lock", isCorrect: false },
        { text: "B) Tab Tuşu (⇥)", isCorrect: true },
        { text: "C) Esc Tuşu", isCorrect: false },
        { text: "D) Backspace Tuşu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Tab tuşu imleci standart paragraf girintisi kadar (1.25 cm) tek tıkla ileri kaydırır."
    },
    summaryRules: [
      { bold: "Mektup Düzeni", text: "Hitap, paragraf girintisi ve sağ alt imza ile oluşur." },
      { bold: "Tab Tuşu", text: "Kusursuz ve eşit paragraf başları sağlar." },
      { bold: "Öğretmenlerimiz", text: "Bize dijital geleceği armağan eden rehberlerimizdir." }
    ],
    homework: "Evde ailenizden birine kısa bir teşekkür notu yazın ve paragraf girintisini nasıl yaptığınızı onlara anlatın.",
    nextWeekPreview: "Tablolar ve Listeler: Madde İşaretleri ve Haftalık Ders Programı Tablosu Oluşturma!"
  },

  // 12. HAFTA
  {
    week: 12,
    date: "30 Kasım - 06 Aralık",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital İletişim, Kelime İşlemci ve Görsel Üretim",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Tablolar ve Listeler: Haftalık Ders Programım",
    subtitle: "Satır ve Sütun Mantığı, Tablo Ekleme, Madde İşaretleri ve Renkli Hücreler",
    outcomeCode: "BTY.3.2.5 (Veri Tabloları & Listeleme)",
    targetSkill: "Satır ve Sütunlardan Oluşan Tablo Tasarlama, Madde İşaretli Listeler Oluşturma",
    curiosityQuestion: "Doktorların nöbet çizelgeleri, okulun ders programı ve liglerdeki puan durumu neden hep kutucuklar (tablolar) halinde yazılır?",
    roadmap: [
      { title: "Tablo Nedir?", desc: "Bilgileri düzenli gösteren satır ve sütun ızgarası." },
      { title: "Satır (Yatay) ve Sütun (Dikey)", desc: "Soldan sağa satırlar, yukarıdan aşağıya sütunlar ve kesiştikleri 'Hücre'ler." },
      { title: "Madde İşaretleri (Bullets)", desc: "Alışveriş veya görev listesini noktalar ve tiklerle sıralama." },
      { title: "Ders Programı Tasarımı", desc: "Pazartesi'den Cuma'ya 5 sütunlu haftalık takvim tablosu." }
    ],
    section1: {
      title: "Bilginin Düzen Kutusu: Tablolar ve Hücreler",
      subtitle: "Karışık yazılar tabloya döküldüğünde gözlerimiz aradığı bilgiyi bir saniyede bulur.",
      layout: "split-visual",
      card: {
        title: "Tablonun 3 Temel Elemanı",
        icon: "📊",
        desc: "Bir tablo oluştururken bilmemiz gereken 3 terim:",
        items: [
          { bold: "Sütun (Column - Dikey)", text: "Yukarıdan aşağıya inen dikey çizgiler (Örn: Günler)." },
          { bold: "Satır (Row - Yatay)", text: "Soldan sağa uzanan yatay katlar (Örn: Ders saatleri)." },
          { bold: "Hücre (Cell - Kutu)", text: "Satır ve sütunun birleştiği her bir kutucuk (Dersin yazıldığı yer)." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Tablo Çerçevesi -->
        <rect x="45" y="45" width="330" height="150" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <!-- Başlık Satırı (Header Row) -->
        <rect x="45" y="45" width="330" height="30" rx="6" fill="#312e81"/>
        <text x="80" y="65" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Saat</text>
        <text x="145" y="65" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Pazartesi</text>
        <text x="210" y="65" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Salı</text>
        <text x="275" y="65" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Çarşamba</text>
        <text x="340" y="65" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Perşembe</text>
        <!-- Dikey Çizgiler (Sütunlar) -->
        <line x1="110" y1="45" x2="110" y2="195" stroke="#475569" stroke-width="1.5"/>
        <line x1="175" y1="45" x2="175" y2="195" stroke="#475569" stroke-width="1.5"/>
        <line x1="240" y1="45" x2="240" y2="195" stroke="#475569" stroke-width="1.5"/>
        <line x1="305" y1="45" x2="305" y2="195" stroke="#475569" stroke-width="1.5"/>
        <!-- Yatay Çizgiler (Satırlar) -->
        <line x1="45" y1="105" x2="375" y2="105" stroke="#475569" stroke-width="1.5"/>
        <line x1="45" y1="135" x2="375" y2="135" stroke="#475569" stroke-width="1.5"/>
        <line x1="45" y1="165" x2="375" y2="165" stroke="#475569" stroke-width="1.5"/>
        <!-- Örnek Hücre İçi -->
        <text x="80" y="95" fill="#94a3b8" font-size="9" text-anchor="middle">1. Ders</text>
        <text x="145" y="95" fill="#22d3ee" font-size="9" font-weight="bold" text-anchor="middle">Bilişim</text>
        <text x="210" y="95" fill="#f8fafc" font-size="9" text-anchor="middle">Türkçe</text>
        <text x="275" y="95" fill="#f8fafc" font-size="9" text-anchor="middle">Matematik</text>
        <text x="340" y="95" fill="#f8fafc" font-size="9" text-anchor="middle">Hayat Bil.</text>
        <text x="210" y="218" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Sütunlar (Dikey) + Satırlar (Yatay) = Hücreler</text>
      </svg>`,
      caption: "Satır ve Sütunlardan Oluşan Haftalık Ders Programı Tablosu"
    },
    section2: {
      title: "Madde İşaretleri ve Numaralandırma",
      subtitle: "Görevleri ve adımları sıralamak için iki harika liste aracı:",
      layout: "cards-2",
      cards: [
        {
          title: "Madde İşaretleri (Noktalı Liste)",
          icon: "•",
          desc: "Sıranın önemli olmadığı durumlarda kullanılır:",
          items: [
            { bold: "Kullanım Yeri", text: "Alışveriş listesi, sevdiğimiz oyunlar, donanım parçaları." },
            { bold: "Simgeler", text: "Yuvarlak nokta (•), tik işareti (✔), ok (➔) veya yıldız (★)." },
            { bold: "Otomatik Devam", text: "Enter'a bastığınızda yeni satırda otomatik olarak yeni bir madde işareti belirir." }
          ]
        },
        {
          title: "Numaralandırma (1, 2, 3 Sıralı Liste)",
          icon: "🔢",
          desc: "Sıralamanın ve adımların önemli olduğu yerlerde:",
          items: [
            { bold: "Kullanım Yeri", text: "Yemek tarifleri, oyun kuralları, algoritma adımları." },
            { bold: "Otomatik Sayı Artışı", text: "1. maddeyi yazıp Enter'a basınca bilgisayar otomatik olarak '2.' yazar." },
            { bold: "Sıralama Kolaylığı", text: "Araya yeni bir madde eklediğinizde tüm sayılar kendini düzeltir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Renkli Ders Programım'",
      subtitle: "Kelime işlemcide 6 sütun ve 5 satırdan oluşan renkli bir haftalık ders programı hazırlayın.",
      steps: [
        { title: "Tablo Ekle", desc: "'Ekle' menüsünden 'Tablo'ya tıklayıp 6 sütun x 5 satır seçin." },
        { title: "Günleri ve Saatleri Yaz", desc: "En üst satıra günleri, ilk sütuna ders saatlerini yazın." },
        { title: "Hücreleri Renklendir", desc: "Bilişim dersi hücresini mor, Beden Eğitimi hücresini yeşil renkle boyayın." }
      ],
      criteria: [
        "Satır ve sütun sayılarını amaca uygun belirleyebilme",
        "Hücre içine metin yazma ve metni ortalayabilme",
        "Tablo tasarım araçlarıyla hücre arka plan rengini değiştirebilme"
      ]
    },
    tips: {
      safetyTitle: "Tablo Tasarımcısı İpuçları",
      safetyRules: [
        { bold: "Tablo Sütun Genişliği", text: "Çizgilerin üzerine gelip çift yönlü ok çıktığında fareyle sürükleyerek sütunu daraltıp genişletebilirsiniz." },
        { bold: "Tab Tuşuyla Hücre Geçişi", text: "Tab tuşuna basarak bir sonraki kutucuğa kolayca zıplayabilirsiniz." },
        { bold: "Listenin Sonunu Bitirme", text: "Madde işaretli listeden çıkmak için boş bir satırda iki kez Enter'a basın." }
      ],
      myths: [
        { wrong: "Tablodaki satır ve sütun sayısı baştan belirlenir ve sonradan asla değiştirilemez.", correct: "Yanlış! İstediğiniz an sağ tıklayarak yeni satır veya sütun ekleyebilir ya da fazlalıkları silebilirsiniz." }
      ]
    },
    quiz: {
      question: "Kelime işlemcide hazırladığımız bir tabloda, yatay ve dikey çizgilerin kesişmesiyle oluşan ve içine yazı yazdığımız her bir kutucuğa ne ad verilir?",
      options: [
        { text: "A) Sütun", isCorrect: false },
        { text: "B) Satır", isCorrect: false },
        { text: "C) Hücre (Cell)", isCorrect: true },
        { text: "D) Paragraf", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: C!</strong> Satır ve sütunun kesiştiği her bir bağımsız kutucuğa 'Hücre' (Cell) denir."
    },
    summaryRules: [
      { bold: "Tablolar", text: "Satır ve sütunlarla bilgiyi en düzenli gösteren araçtır." },
      { bold: "Hücreler", text: "Tablonun içine yazı yazdığımız bağımsız kutucuklarıdır." },
      { bold: "Listeler", text: "Madde işaretleri ve numaralarla okumayı kolaylaştırır." }
    ],
    homework: "Evinizde ailenizin haftalık alışveriş listesini madde işaretleri kullanarak bilgisayarda yazın ve çıktısını alın.",
    nextWeekPreview: "Dosya Uzantıları ve Türleri: .docx, .jpg, .mp3, .pdf ve Boyut Birimleri (KB, MB, GB)!"
  },

  // 13. HAFTA
  {
    week: 13,
    date: "07 - 13 Aralık",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital İletişim, Kelime İşlemci ve Görsel Üretim",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Dosya Uzantıları ve Türleri: Soyadlar Dünyası",
    subtitle: ".docx, .pdf, .jpg, .png, .mp3, .mp4 ve Boyut Birimleri (KB, MB, GB)",
    outcomeCode: "BTY.3.2.6 (Dosya Mimarisi & Kapasite)",
    targetSkill: "Dosya Uzantılarından Dosya Türünü Tanıma, Temel Kapasite Birimlerini Kavrama",
    curiosityQuestion: "İnsanların soyadları olduğu gibi bilgisayar dosyalarının da soyadları (uzantıları) var mıdır? Bilgisayar bir dosyanın şarkı mı resim mi olduğunu nereden anlar?",
    roadmap: [
      { title: "Dosya Uzantısı Nedir?", desc: "Dosya adının sonundaki nokta (.) ve 3-4 harflik gizli kimlik kodu." },
      { title: "Metin ve Belge Uzantıları", desc: ".docx (Word), .pdf (Korumalı Belge), .txt (Düz Yazı)." },
      { title: "Görsel, Ses ve Video", desc: ".jpg/.png (Resim), .mp3 (Ses/Müzik), .mp4 (Video/Film)." },
      { title: "Kapasite Birimleri", desc: "Byte ➔ Kilobyte (KB) ➔ Megabyte (MB) ➔ Gigabyte (GB)." }
    ],
    section1: {
      title: "Dosyaların Soyadları: Uzantılar Dünyası",
      subtitle: "Noktadan sonraki harfler dosyanın hangi programla açılacağını söyler:",
      layout: "split-visual",
      card: {
        title: "Dosya İsim Anatomisi",
        icon: "🏷️",
        desc: "Bir dosyanın iki ana bölümü:",
        items: [
          { bold: "1. Dosya Adı (Ön Ad)", text: "Bizim verdiğimiz isim: 'istiklal_marsi'" },
          { bold: "2. Nokta (.)", text: "Ad ile soyadı ayıran sınır çizgisi." },
          { bold: "3. Uzantı (Soyadı)", text: "Dosyanın türünü belirleyen kod: '.docx' veya '.mp3'" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Dosya Kartı 1: Belge -->
        <rect x="40" y="45" width="155" height="65" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="55" y="80" font-size="20">📄</text>
        <text x="85" y="70" fill="#f8fafc" font-size="11" font-weight="bold">odev</text>
        <text x="115" y="70" fill="#60a5fa" font-size="11" font-weight="900">.docx</text>
        <text x="85" y="90" fill="#94a3b8" font-size="9">Word Metin Belgesi</text>
        <!-- Dosya Kartı 2: Resim -->
        <rect x="225" y="45" width="155" height="65" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="240" y="80" font-size="20">🖼️</text>
        <text x="270" y="70" fill="#f8fafc" font-size="11" font-weight="bold">bayrak</text>
        <text x="310" y="70" fill="#34d399" font-size="11" font-weight="900">.png</text>
        <text x="270" y="90" fill="#94a3b8" font-size="9">Şeffaf Resim Dosyası</text>
        <!-- Dosya Kartı 3: Müzik -->
        <rect x="40" y="125" width="155" height="65" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
        <text x="55" y="160" font-size="20">🎵</text>
        <text x="85" y="150" fill="#f8fafc" font-size="11" font-weight="bold">sarki</text>
        <text x="115" y="150" fill="#f472b6" font-size="11" font-weight="900">.mp3</text>
        <text x="85" y="170" fill="#94a3b8" font-size="9">Ses ve Müzik Dosyası</text>
        <!-- Dosya Kartı 4: Video -->
        <rect x="225" y="125" width="155" height="65" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="240" y="160" font-size="20">🎬</text>
        <text x="270" y="150" fill="#f8fafc" font-size="11" font-weight="bold">cizgifilm</text>
        <text x="318" y="150" fill="#fbbf24" font-size="11" font-weight="900">.mp4</text>
        <text x="270" y="170" fill="#94a3b8" font-size="9">Hareketli Video Dosyası</text>
        <text x="210" y="215" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Noktadan Sonraki Uzantı Dosyanın Kimliğidir!</text>
      </svg>`,
      caption: "En Yaygın Dosya Uzantıları ve Türleri"
    },
    section2: {
      title: "Veri Kapasite Merdiveni: KB, MB ve GB",
      subtitle: "Dosyalar bilgisayar hafızasında ne kadar yer kaplar?",
      layout: "cards-2",
      cards: [
        {
          title: "Kapasite Birimleri Merdiveni",
          icon: "🪜",
          desc: "Küçükten büyüğe dijital tartı birimleri:",
          items: [
            { bold: "Byte (B)", text: "Tek bir harf veya karakter (Örn: 'A' harfi = 1 Byte)." },
            { bold: "Kilobyte (KB)", text: "Küçük metin belgeleri ve simgeler (1 KB ≈ 1024 Byte)." },
            { bold: "Megabyte (MB)", text: "Fotoğraflar ve MP3 şarkılar (1 MB ≈ 1024 KB)." },
            { bold: "Gigabyte (GB)", text: "Filmler, 3D oyunlar ve hafıza kartları (1 GB ≈ 1024 MB)." }
          ]
        },
        {
          title: "PDF Formatının Önemi",
          icon: "🔒",
          desc: "Neden belgelerimizi PDF yaparız?",
          items: [
            { bold: "Düzen Asla Bozulmaz", text: "Word belgesi farklı bir bilgisayarda açılınca kayabilir; PDF asla kaymaz." },
            { bold: "Her Cihazda Açılır", text: "Telefonda, tablette veya akıllı tahtada birebir aynı görünür." },
            { bold: "Güvenlidir", text: "İçindeki yazılar yanlışlıkla değiştirilemez veya silinemez." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Uzantı Dedektifliği'",
      subtitle: "Bilgisayardaki örnek klasördeki dosyaların uzantılarına ve boyutlarına bakıyoruz.",
      steps: [
        { title: "Özellikler Penceresini Aç", desc: "Bir dosyanın üzerine sağ tıklayıp 'Özellikler' seçeneğine tıklayın." },
        { title: "Uzantıyı ve Boyutu Oku", desc: "Dosya türünü (Örn: .png) ve boyutunu (Örn: 2.4 MB) not defterinize yazın." },
        { title: "Büyükten Küçüğe Sırala", desc: "Klasördeki bir video (.mp4) ile metin belgesinin (.txt) boyutunu karşılaştırın." }
      ],
      criteria: [
        "En az 5 dosya uzantısını (.docx, .pdf, .jpg, .mp3, .mp4) doğru eşleştirebilme",
        "KB, MB ve GB arasındaki büyüklük ilişkisini doğru kavrama",
        "Bir dosyanın boyutunu özellikler penceresinden okuyabilme"
      ]
    },
    tips: {
      safetyTitle: "Dosya Dedektifi Tavsiyeleri",
      safetyRules: [
        { bold: "Uzantıyı Yanlışlıkla Silme", text: "Dosyayı yeniden adlandırırken noktadan sonraki uzantıyı silerseniz dosya bozulabilir ve açılmayabilir." },
        { bold: "Bilinmeyen .exe Dosyaları", text: "İnternetten inen '.exe' uzantılı dosyalara öğretmeninizin veya ailenizin izni olmadan asla tıklamayın; virüs olabilir!" },
        { bold: "Yer Tasarrufu", text: "Bilgisayarda yer kalmadığında en çok yer kaplayan videoları (GB) temizleyin." }
      ],
      myths: [
        { wrong: "Bir metin belgesi ile 2 saatlik bir çizgi film bilgisayarda aynı yeri kaplar.", correct: "Hayır! Bir metin belgesi birkaç Kilobyte (KB) iken, 2 saatlik bir video binlerce Megabyte veya birkaç Gigabyte (GB) yer kaplar." }
      ]
    },
    quiz: {
      question: "Fotoğraf makinesiyle çektiğimiz veya Paint'te çizdiğimiz bir 'RESİM' dosyasının uzantısı aşağıdakilerden hangisi olabilir?",
      options: [
        { text: "A) .mp3", isCorrect: false },
        { text: "B) .jpg veya .png", isCorrect: true },
        { text: "C) .docx", isCorrect: false },
        { text: "D) .mp4", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> '.jpg' ve '.png' görsel/resim dosyalarının evrensel uzantılarıdır."
    },
    summaryRules: [
      { bold: "Dosya Uzantısı", text: "Dosyanın ne işe yaradığını söyleyen soyadıdır." },
      { bold: "Kapasite", text: "Byte < KB < MB < GB olarak büyür." },
      { bold: "PDF", text: "Değişmeyen, taş gibi sağlam dijital kağıttır." }
    ],
    homework: "Evinizdeki bilgisayarda bulunan 3 farklı dosyanın ismini, uzantısını ve boyutunu defterinize yazın.",
    nextWeekPreview: "Veri Yedekleme ve Bulut Depolama: Flash Bellek (USB) ve Dosyalarımızı Koruma Yolları!"
  },

  // 14. HAFTA
  {
    week: 14,
    date: "14 - 20 Aralık",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital İletişim, Kelime İşlemci ve Görsel Üretim",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Veri Yedekleme ve Bulut Depolama",
    subtitle: "Flash Bellek (USB), Harici Disk, Bulut (Cloud) Sürücüler ve Veri Güvenliği",
    outcomeCode: "BTY.3.2.7 (Yedekleme & Bulut Bilişim)",
    targetSkill: "Veri Yedekleme Kavramını Anlama, Dosyaları USB veya Buluta Güvenle Aktarma",
    curiosityQuestion: "Bilgisayarımızın üzerine bir bardak meyve suyu dökülüp bozulursa, içindeki bütün aile fotoğraflarımız ve projelerimiz sonsuza dek yok mu olur?",
    roadmap: [
      { title: "Yedekleme (Backup) Nedir?", desc: "Önemli dosyaların ikinci bir kopyasını başka bir güvenli yerde saklama." },
      { title: "Fiziksel Yedekleme Araçları", desc: "Flash Bellek (USB bellek), Harici Hard Disk ve Hafıza Kartı." },
      { title: "Bulut Depolama (Cloud)", desc: "İnternetteki dev güvenli sunucularda veri saklama (Google Drive, EBA Bulut)." },
      { title: "Güvenli Çıkarma Kuralı", desc: "USB belleği çekerken verilerin bozulmasını önleme yöntemi." }
    ],
    section1: {
      title: "Dijital Can Simidi: Veri Yedekleme",
      subtitle: "'Yedeği olmayan veri, aslında var olmayan veridir!' sözünü unutmayalım:",
      layout: "split-visual",
      card: {
        title: "Neden Yedek Almalıyız?",
        icon: "🛡️",
        desc: "Dijital dünyada karşılaşabileceğimiz 3 risk:",
        items: [
          { bold: "1. Cihaz Bozulabilir", text: "Bilgisayarın sabit diski eskiyip çalışmayabilir." },
          { bold: "2. Kazalar Olabilir", text: "Bilgisayar düşebilir, ıslanabilir veya kaybolabilir." },
          { bold: "3. Yanlışlıkla Silinebilir", text: "Bir arkadaşımız veya kardeşimiz dosyayı yanlışlıkla silebilir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Bilgisayarım -->
        <rect x="40" y="70" width="90" height="70" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
        <text x="85" y="105" font-size="24" text-anchor="middle">💻</text>
        <text x="85" y="130" fill="#f8fafc" font-size="9" text-anchor="middle">Bilgisayarım</text>
        <!-- Ok 1 (USB'ye) -->
        <path d="M135 95 H185" stroke="#818cf8" stroke-width="2" stroke-linecap="round"/>
        <!-- USB Flash Bellek -->
        <rect x="190" y="80" width="60" height="30" rx="4" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
        <rect x="250" y="86" width="14" height="18" fill="#cbd5e1"/>
        <text x="220" y="100" fill="#e0e7ff" font-size="10" font-weight="bold" text-anchor="middle">USB</text>
        <!-- Ok 2 (Buluta) -->
        <path d="M85 70 V45 H280 V60" stroke="#ec4899" stroke-width="2" stroke-dasharray="4 4"/>
        <!-- Bulut (Cloud) -->
        <ellipse cx="320" cy="95" rx="50" ry="32" fill="#ec4899" fill-opacity="0.2" stroke="#ec4899" stroke-width="2"/>
        <text x="320" y="95" font-size="24" text-anchor="middle">☁️</text>
        <text x="320" y="118" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">BULUT (CLOUD)</text>
        <text x="210" y="185" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">1 Dosya ➔ 2 Farklı Yerde Kopya = Tam Güvenlik!</text>
        <text x="210" y="210" fill="#94a3b8" font-size="9" text-anchor="middle">Buluttaki dosyalarınıza internet olan her yerden ulaşabilirsiniz.</text>
      </svg>`,
      caption: "Fiziksel USB ve İnternet Bulut Yedekleme Modeli"
    },
    section2: {
      title: "Bulut Depolama ve USB Bellek Karşılaştırması",
      subtitle: "İki popüler yedekleme yönteminin güçlü yönleri:",
      layout: "cards-2",
      cards: [
        {
          title: "Flash Bellek (USB Drive)",
          icon: "💾",
          desc: "Cebimizde taşıyabildiğimiz fiziksel bellek:",
          items: [
            { bold: "Avantajı", text: "İnternet bağlantısı olmadan da her bilgisayarda anında çalışır." },
            { bold: "Kullanımı", text: "Dosyayı sağ tıklayıp 'Gönder ➔ USB Sürücüsü' demek yeterlidir." },
            { bold: "Dikkat Edilecek", text: "Çok küçük olduğu için cebimizden düşüp kaybolabilir!" }
          ]
        },
        {
          title: "Bulut Depolama (Google Drive / EBA)",
          icon: "☁️",
          desc: "İnternetteki görünmez güvenli kasa:",
          items: [
            { bold: "Avantajı", text: "Cihazınız denize düşse bile dosyalarınız internette güvende kalır." },
            { bold: "Erişim", text: "Kullanıcı adı ve şifrenizle dünyadaki herhangi bir tabletten açabilirsiniz." },
            { bold: "Dikkat Edilecek", text: "Dosyaları yüklemek ve indirmek için internet bağlantısı gerekir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Güvenli Çıkar ve Yedekle'",
      subtitle: "Örnek bir USB belleğe dosya kopyalama ve 'Güvenle Kaldır' adımlarını uyguluyoruz.",
      steps: [
        { title: "USB'yi Kasaya Tak", desc: "Öğretmeninizin verdiği USB belleği kasanın ön portuna nazikçe takın." },
        { title: "Dosyayı Kopyala", desc: "Masaüstündeki çalışma klasörünüzü USB içine sürükleyip bırakın." },
        { title: "Donanımı Güvenle Kaldır", desc: "Sağ alttaki USB simgesine tıklayıp 'Güvenle Kaldır' dedikten sonra belleği çekin." }
      ],
      criteria: [
        "Dosyaları harici bir depolama birimine kopyalayabilme",
        "USB belleği işletim sisteminden 'Güvenle Kaldır' yaparak çıkarma kuralını uygulama",
        "Bulut depolamanın fiziksel bellekten farkını açıklayabilme"
      ]
    },
    tips: {
      safetyTitle: "Veri Koruyucunun Altın Kuralları",
      safetyRules: [
        { bold: "Lap Diye Çekme!", text: "Dosya yazılırken USB belleği birden çekerseniz içindeki tüm veriler yanabilir ve silinebilir." },
        { bold: "3-2-1 Kuralı", text: "En değerli dosyalarınızın 3 kopyası olsun; 2'si farklı cihazlarda, 1'i bulutta saklansın." },
        { bold: "Ortak USB Tehlikesi", text: "Tanımadığınız kişilerin USB belleklerini bilgisayarınıza takmayın; virüs bulaşabilir." }
      ],
      myths: [
        { wrong: "Bulut depolamadaki dosyalar yağmur yağınca gökyüzünden dökülüp kaybolabilir.", correct: "Bulut kelimesi sadece bir benzetmedir! Aslında dosyalar devasa veri merkezlerinde, yer altındaki süper bilgisayarlarda korunur." }
      ]
    },
    quiz: {
      question: "Bilgisayara taktığımız bir USB Flash belleği işimiz bittiğinde kasanın zarar görmemesi ve verilerin bozulmaması için nasıl çıkarmalıyız?",
      options: [
        { text: "A) Çok hızlı bir şekilde aniden çekerek", isCorrect: false },
        { text: "B) 'Donanımı Güvenle Kaldır' seçeneğine tıklayıp uyarı gelince nazikçe çekerek", isCorrect: true },
        { text: "C) Bilgisayarın monitörünü kapatıp çekerek", isCorrect: false },
        { text: "D) Fişi prizden çekerek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Donanımı Güvenle Kaldır' komutu belleğe veri yazımını güvenle tamamlar ve dosyaların bozulmasını engeller."
    },
    summaryRules: [
      { bold: "Yedekleme", text: "Emeğimizi felaketlere karşı koruyan sigortamızdır." },
      { bold: "Bulut", text: "Dosyalarımıza her yerden ulaşmamızı sağlayan gökyüzü kasasıdır." },
      { bold: "Güvenle Kaldır", text: "Belleğimizi ve verimizi koruyan altın adımdır." }
    ],
    homework: "Ailenize önemli fotoğraflarını ve telefon rehberlerini nasıl yedeklediklerini sorun; onlara 'Bulut Yedekleme'yi anlatın.",
    nextWeekPreview: "İnternette Doğru Bilgiye Ulaşma: Arama Motorlarında Anahtar Kelimeler ve Güvenilir Kaynaklar!"
  },

  // 15. HAFTA
  {
    week: 15,
    date: "21 - 27 Aralık",
    hours: "2 Ders Saati",
    unit: "3. Tema: Siber Güvenlik, Dijital Etik ve Bilgi Doğrulama",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "İnternette Doğru Bilgiye Ulaşma ve Arama Stratejileri",
    subtitle: "Arama Motorları, Doğru Anahtar Kelimeler (Keywords) ve Güvenilir Web Siteleri",
    outcomeCode: "BTY.3.3.1 (Bilgi Okuryazarlığı & Arama Stratejileri)",
    targetSkill: "İnternette Etkili Arama Yapabilme, Güvenilir (.edu, .gov, .org) Siteleri Ayırt Edebilme",
    curiosityQuestion: "İnternette trilyonlarca web sayfası varken arama motoruna yazdığımız bir kelime nasıl 0.2 saniyede tam aradığımız cevabı karşımıza getirir?",
    roadmap: [
      { title: "Arama Motoru Nedir?", desc: "Google, Bing, Yaani gibi internet kütüphanecileri." },
      { title: "Anahtar Kelime (Keyword) Sanatı", desc: "Uzun cümleler yerine doğru ve kesin sözcükler seçme." },
      { title: "Güvenilir Site Uzantıları", desc: ".gov (Devlet), .edu (Üniversite/Eğitim), .org (Vakıf/Dernek)." },
      { title: "3 Kaynak Doğrulaması", desc: "Bir bilgiyi ödevimize almadan önce en az 3 farklı siteden teyit etme." }
    ],
    section1: {
      title: "Dijital Dedektif: Anahtar Kelimeler",
      subtitle: "Arama motoruyla konuşurken akıllı kelimeler seçersek hazineye hemen ulaşırız:",
      layout: "split-visual",
      card: {
        title: "Kötü Arama vs. Usta Arama",
        icon: "🔍",
        desc: "İki farklı öğrencinin arama taktiği:",
        items: [
          { bold: "Acemi Arama", text: "'Öğretmenim bana kutup ayılarını sordu onlar nerede yaşar acaba?' (Çok uzun ve verimsiz)." },
          { bold: "Usta Bilişimci Araması", text: "'Kutup ayıları yaşam alanları beslenme özellikleri' (Net ve kesin)." },
          { bold: "Tırnak İşareti Sihri", text: "\"Türkiye Yüzyılı\" gibi tırnak içine yazarsanız kelimeleri yan yana arar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Arama Çubuğu -->
        <rect x="50" y="45" width="320" height="42" rx="21" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
        <text x="75" y="70" font-size="16">🔍</text>
        <text x="100" y="71" fill="#ffffff" font-size="12" font-weight="bold">gezegenler guneş sistemi özellikleri</text>
        <rect x="320" y="52" width="40" height="28" rx="14" fill="#6366f1"/>
        <text x="340" y="70" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">ARA</text>
        <!-- Güvenilir Sonuç 1 (.edu / .gov) -->
        <rect x="50" y="105" width="320" height="45" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="65" y="125" fill="#34d399" font-size="11" font-weight="bold">tubitak.gov.tr ➔ Güneş Sistemi ve Gezegenler</text>
        <text x="65" y="140" fill="#94a3b8" font-size="9">Bilim Çocuk dergisinin resmi ve onaylı uzay araştırmaları sayfası...</text>
        <!-- Güvenilir Sonuç 2 (.org) -->
        <rect x="50" y="160" width="320" height="45" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="65" y="180" fill="#22d3ee" font-size="11" font-weight="bold">bilimcocuk.tubitak.gov.tr ➔ Uzay Rehberi</text>
        <text x="65" y="195" fill="#94a3b8" font-size="9">Gezegenlerin büyüklükleri ve güneşe olan uzaklıkları tablosu...</text>
      </svg>`,
      caption: "Etkili Arama Motoru Sorgusu ve Güvenilir (.gov / .edu) Sonuçlar"
    },
    section2: {
      title: "Web Sitelerinin Güvenlik Rozetleri: Uzantılar",
      subtitle: "Girdiğimiz web adresinin sonuna bakarak ne kadar güvenilir olduğunu anlarız:",
      layout: "cards-2",
      cards: [
        {
          title: "En Güvenilir Kurumsal Siteler",
          icon: "🏛️",
          desc: "Herkesin kafasına göre alamayacağı resmi siteler:",
          items: [
            { bold: ".gov.tr (Government - Devlet)", text: "Bakanlıklar, resmi kurumlar ve belediyeler (Örn: meb.gov.tr)." },
            { bold: ".edu.tr (Education - Üniversite)", text: "Üniversiteler ve bilim enstitüleri (Örn: metu.edu.tr)." },
            { bold: ".k12.tr (Okullar)", text: "İlkokul, ortaokul ve liselerin resmi web sayfaları." }
          ]
        },
        {
          title: "Genel ve Ticari Siteler",
          icon: "🌐",
          desc: "Herkesin açabileceği, bilgi kontrolü gereken siteler:",
          items: [
            { bold: ".com / .com.tr (Ticari)", text: "Şirketler, alışveriş siteleri ve haber portalları." },
            { bold: ".org (Organizasyon)", text: "Dernekler, vakıflar ve sivil toplum kuruluşları." },
            { bold: "Dikkat Edilmeli", text: "Bu sitelerdeki bilgileri mutlaka resmi bir kaynaktan teyit edin." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Doğru Bilgi Avcısı'",
      subtitle: "Öğretmeninizin sorduğu bir bilim sorusunu en güvenilir siteden bulup belgenize ekleyin.",
      steps: [
        { title: "Anahtar Kelimeleri Belirle", desc: "'Dünyanın en derin gölü hangisidir?' sorusu için 3 anahtar kelime seçin." },
        { title: "Resmi Kaynağı Bul", desc: "Arama sonuçlarında .gov veya .edu uzantılı güvenilir bir siteye girin." },
        { title: "Kaynak Göstererek Yaz", desc: "Cevabı kendi cümlenizle yazıp altına 'Kaynak: tubitak.gov.tr' notunu düşün." }
      ],
      criteria: [
        "Arama motorunda doğru anahtar kelimelerle hedef odaklı arama yapabilme",
        "Güvenilir web site uzantılarını (.gov, .edu) doğru ayırt edebilme",
        "Bulunan bilginin kaynağını dürüstçe belirtebilme"
      ]
    },
    tips: {
      safetyTitle: "Siber Araştırmacı Tavsiyeleri",
      safetyRules: [
        { bold: "İlk Çıkan Reklamlara Tıklama", text: "Arama sonuçlarının en üstünde 'Sponsorlu' veya 'Reklam' yazan linkleri atlayıp gerçek sonuçlara bakın." },
        { bold: "3 Kaynak Kuralı", text: "Şüpheli veya şaşırtıcı bir bilgiyi en az 3 farklı sitede görmeden doğru kabul etmeyin." },
        { bold: "Kopyala-Yapıştır Ödev Yapma", text: "Bilgiyi okuyun, anlayın ve kendi kelimelerinizle özetleyin." }
      ],
      myths: [
        { wrong: "İnternette yazan her şey mutlaka doğrudur çünkü oraya sadece uzmanlar yazar.", correct: "Büyük bir yanılgı! İnternette herhangi biri hiçbir denetim olmadan web sitesi açıp yanlış bilgi yazabilir; bu yüzden eleştirel düşünmeliyiz." }
      ]
    },
    quiz: {
      question: "Bir araştırma ödevi yaparken aşağıdaki web sitesi uzantılarından hangisi 'DEVLET VE RESMİ EĞİTİM KURUMLARINA' ait en güvenilir kaynaktır?",
      options: [
        { text: "A) .xyz", isCorrect: false },
        { text: "B) .gov.tr veya .edu.tr", isCorrect: true },
        { text: "C) .com", isCorrect: false },
        { text: "D) .net", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> '.gov' devlet kurumlarını, '.edu' ise üniversiteleri temsil eder ve bilgi güvenliği en yüksek sitelerdir."
    },
    summaryRules: [
      { bold: "Anahtar Kelimeler", text: "Arama motorunda doğru sonuca götüren pusuladır." },
      { bold: ".gov ve .edu", text: "En güvenilir resmi bilgi kaynaklarıdır." },
      { bold: "Teyit Et", text: "Öğrendiğin bilgiyi farklı kaynaklardan kontrol et." }
    ],
    homework: "Sevdiğiniz bir hayvan hakkında .gov veya .edu uzantılı bir siteden ilginç 2 doğru bilgi bulup sınıfta paylaşın.",
    nextWeekPreview: "Dijital Dünyada Bilgi Kirliliği ve Sahte Haberler (Fake News): Gördüğümüz Her Şeye İnanmalı mıyız?"
  },

  // 16. HAFTA
  {
    week: 16,
    date: "28 Aralık - 03 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Siber Güvenlik, Dijital Etik ve Bilgi Doğrulama",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "Bilgi Kirliliği ve Sahte Haberler (Fake News)",
    subtitle: "Tıklama Tuzakları (Clickbait), Sahte Görseller, Deepfake ve Eleştirel Düşünme",
    outcomeCode: "BTY.3.3.2 (Medya Okuryazarlığı & Doğrulama)",
    targetSkill: "Sahte Haberleri (Fake News) ve Tıklama Tuzaklarını Tanıma, Dijital Şüphecilik Geliştirme",
    curiosityQuestion: "İnternette 'Uzaylılar dün gece okul bahçesine indi!' diye bir fotoğraf görseniz ilk yapacağınız şey ne olurdu?",
    roadmap: [
      { title: "Sahte Haber (Fake News) Nedir?", desc: "İnsanları kandırmak, korkutmak veya para kazanmak için uydurulan yalanlar." },
      { title: "Tıklama Tuzağı (Clickbait)", desc: "'İnanamayacaksınız!', 'Şok şok şok!' başlıklarıyla kandıran tuzaklar." },
      { title: "Montaj ve Yapay Zekâ Görselleri", desc: "Fotoğrafların photoshop veya yapay zekâ ile değiştirilebileceği gerçeği." },
      { title: "Teyit Dedektifliği (5N1K)", desc: "Kim? Ne zaman? Nerede? Kaynak var mı? sorularını sorma sanatı." }
    ],
    section1: {
      title: "Görünüşe Aldanma: Sahte Haber Tuzakları",
      subtitle: "İnternette gördüğümüz her parlayan şey altın değildir!",
      layout: "split-visual",
      card: {
        title: "Bir Haberin Sahte Olduğunu Gösteren 4 İpucu",
        icon: "🚨",
        desc: "Şüpheli bir paylaşımla karşılaştığınızda:",
        items: [
          { bold: "1. Aşırı Abartılı Başlık", text: "'Dünyanın sonu geldi!', 'Bunu gören herkes bayıldı!' gibi çığlık atan başlıklar." },
          { bold: "2. Kaynak Yoktur", text: "Haberde uzman ismi, tarih veya resmi kurum adı bulunmaz." },
          { bold: "3. İmla Hatalarıyla Doludur", text: "Büyük harfler, ünlem işaretleri (!!!!) ve bozuk cümleler dikkat çeker." },
          { bold: "4. Başka Hiçbir Yerde Yoktur", text: "Büyük haber kanallarında veya TRT'de bahsedilmiyorsa uydurmadır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
        <!-- Sahte Haber Kartı -->
        <rect x="45" y="45" width="330" height="150" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="45" y="45" width="330" height="28" rx="8" fill="#881337"/>
        <text x="65" y="64" fill="#fecdd3" font-size="11" font-weight="900">⚠️ DİKKAT: ŞÜPHELİ VE SAHTE İÇERİK</text>
        <text x="65" y="95" fill="#f43f5e" font-size="13" font-weight="900">ŞOK HABER! GÖKYÜZÜNDEN ÇİKOLATA YAĞDI!</text>
        <!-- Sahte Görsel Çerçevesi -->
        <rect x="65" y="110" width="80" height="55" rx="6" fill="#0f172a" stroke="#475569"/>
        <text x="105" y="142" font-size="22" text-anchor="middle">🍫🌧️</text>
        <text x="160" y="125" fill="#cbd5e1" font-size="10">Hemen tıklayın ve kazanın!</text>
        <text x="160" y="142" fill="#ef4444" font-size="10" font-weight="bold">Bu bir 'Tıklama Tuzağı'dır (Clickbait).</text>
        <text x="160" y="158" fill="#94a3b8" font-size="9">Amaç reklam izletmek veya virüs bulaştırmaktır.</text>
        <text x="210" y="215" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">İnanmadan Önce Araştır, Paylaşmadan Önce Düşün!</text>
      </svg>`,
      caption: "Sahte Haberlerin ve Tıklama Tuzaklarının Anatomisi"
    },
    section2: {
      title: "Sahte Haberi Önleme: Teyit Dedektifliği",
      subtitle: "Bilinçli bir dijital vatandaş sahte haberi yaymaz, durdurur:",
      layout: "cards-2",
      cards: [
        {
          title: "Teyit Etmenin 3 Altın Kuralı",
          icon: "🕵️‍♂️",
          desc: "Bir habere inanmadan önce:",
          items: [
            { bold: "1. Tarihe Bak", text: "10 yıl önceki eski bir olay yeni gibi paylaşılmış olabilir." },
            { bold: "2. Yazarı Araştır", text: "Bu haberi yazan kişi gerçek bir gazeteci veya bilim insanı mı?" },
            { bold: "3. Teyit Sitelerini Kullan", text: "teyit.org, malumatfurus.org gibi doğrulama platformlarını inceleyin." }
          ]
        },
        {
          title: "Yalan Haberi Yaymama Sorumluluğu",
          icon: "🛑",
          desc: "Sahte bir haber gördüğümüzde yapacaklarımız:",
          items: [
            { bold: "Asla Paylaşma", text: "Doğruluğundan emin olmadığın bir mesajı WhatsApp grubuna gönderme." },
            { bold: "Uyar", text: "Arkadaşın sahte haberi paylaştıysa nazikçe gerçeğini ve kaynağını söyle." },
            { bold: "Şikayet Et (Raporla)", text: "Sosyal medya platformlarındaki 'Yanıltıcı İçerik' butonuna bas." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Yalan mı Gerçek mi Oyunu'",
      subtitle: "Akıllı tahtada açılan 4 farklı haber senaryosunu inceleyip sahte olanları yakalıyoruz.",
      steps: [
        { title: "Haberi Oku", desc: "Tahtada çıkan haberin başlığını, görselini ve kaynağını büyüteçle inceleyin." },
        { title: "İpuçlarını Ara", desc: "Haberde imla hatası, tık tuzağı veya kaynak eksikliği var mı tespit edin." },
        { title: "Kararını Ver", desc: "Arkadaşlarınla tartışıp 'Bu Gerçektir' veya 'Bu Sahte Habertir' butonuna basın." }
      ],
      criteria: [
        "Tıklama tuzaklarını (Clickbait) anında fark edebilme",
        "Sahte görseller ve yanıltıcı içerikler karşısında eleştirel düşünebilme",
        "Doğrulanmamış bilgileri paylaşmama sorumluluğunu benimseme"
      ]
    },
    tips: {
      safetyTitle: "Medya Dedektifi Tavsiyeleri",
      safetyRules: [
        { bold: "Heyecana Kapılma", text: "Seni çok korkutan veya aşırı heyecanlandıran haberler genellikle tıklama tuzağıdır; sakin kal." },
        { bold: "Görsel Arama Yap", text: "Şüphelendiğin bir fotoğrafı arama motorunun 'Görselle Ara' özelliğine yükleyerek nereden alındığını bulabilirsin." },
        { bold: "Büyüklerine Danış", text: "İnternette seni endişelendiren bir haber görürsen mutlaka öğretmenine veya ailene sor." }
      ],
      myths: [
        { wrong: "Bir fotoğraf varsa o haber kesinlikle doğrudur çünkü fotoğraf yalan söyleyemez.", correct: "Büyük bir yanılgı! Günümüzde Photoshop ve Yapay Zekâ (AI) araçlarıyla var olmayan olayların bile gerçekçi fotoğrafları kolayca üretilebilir." }
      ]
    },
    quiz: {
      question: "İnternette karşımıza çıkan 'ŞOK ŞOK ŞOK! Tıklayan herkese 1000 TL hediye!' şeklindeki yanıltıcı ve abartılı paylaşımlara ne ad verilir?",
      options: [
        { text: "A) EBA Canlı Dersi", isCorrect: false },
        { text: "B) Tıklama Tuzağı (Clickbait / Sahte İçerik)", isCorrect: true },
        { text: "C) Bilimsel Araştırma", isCorrect: false },
        { text: "D) Yazılım Güncellemesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Tıklama tuzakları (Clickbait) insanları meraklandırıp tuzağa çekmek için uydurulan sahte başlıklardır."
    },
    summaryRules: [
      { bold: "Her Gördüğüne İnanma", text: "Eleştirel düşün ve kaynağı araştır." },
      { bold: "Tıklama Tuzaklarına Düşme", text: "Abartılı başlıklardan uzak dur." },
      { bold: "Doğrula Sonra Paylaş", text: "Doğru bilgi yaymak bir vatandaşlık görevidir." }
    ],
    homework: "Ailenizle birlikte televizyon veya internetteki bir haberin kaynağını (muhabir, ajans) bulma alıştırması yapın.",
    nextWeekPreview: "1. Dönem 2. Değerlendirme: Güvenli İnternet ve Siber Dedektif Büyük Bilgi Yarışması!"
  },

  // 17. HAFTA
  {
    week: 17,
    date: "04 - 10 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Siber Güvenlik, Dijital Etik ve Bilgi Doğrulama",
    unitBadge: "1. Dönem 2. Sınav",
    unitTheme: "tema-sinav",
    title: "1. Dönem 2. Değerlendirme & Siber Dedektif",
    subtitle: "Kelime İşlemci, Tablolar, Dosya Uzantıları, Yedekleme ve Bilgi Doğrulama Büyük Sınavı",
    outcomeCode: "BTY.3.3.3 (Ölçme & Değerlendirme)",
    targetSkill: "2. ve 3. Temanın Tüm Bilişim Kazanımlarını Değerlendirme ve Pekiştirme",
    curiosityQuestion: "Bugüne kadar öğrendiğimiz tüm dijital becerilerle internette karşımıza çıkabilecek siber tuzakları nasıl bir dedektif gibi çözeriz?",
    roadmap: [
      { title: "Siber Sınav Arenası", desc: "Kelime işlemciden dosya uzantılarına tüm 1. dönem konuları." },
      { title: "Uzantı ve Boyut Eşleme", desc: "KB, MB, GB birimleri ve dosya türlerini analiz etme." },
      { title: "Güvenli İnternet Senaryoları", desc: "Tıklama tuzakları ve sahte haber senaryolarını çözme." },
      { title: "Dönem Şampiyonları", desc: "1. Dönem Bilişim Uzmanı başarı sertifikalarını alma." }
    ],
    section1: {
      title: "1. Dönemin Büyük Bilişim Muhakemesi",
      subtitle: "17 haftada edindiğimiz muhteşem dijital yetkinlikleri sergiliyoruz:",
      layout: "split-visual",
      card: {
        title: "Sınav Konuları Özeti",
        icon: "🏆",
        desc: "Sorumlu olduğumuz 4 ana tema:",
        items: [
          { bold: "Kelime İşlemci & Tablolar", text: "Font, punto, hizalama, Tab tuşu, satır/sütun ve hücre mantığı." },
          { bold: "Dosya Uzantıları", text: ".docx, .pdf, .jpg, .png, .mp3, .mp4 kimlikleri." },
          { bold: "Yedekleme & Bulut", text: "USB bellek güvenli çıkarma ve Google Drive / Bulut yedekleme." },
          { bold: "Bilgi Doğrulama & Siber Etik", text: "Anahtar kelimeler, .gov/.edu uzantıları ve sahte haberleri yakalama." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Madalya / Rozet -->
        <circle cx="210" cy="95" r="45" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="3"/>
        <text x="210" y="108" font-size="44" text-anchor="middle">🛡️</text>
        <rect x="90" y="155" width="240" height="32" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="210" y="176" fill="#fecdd3" font-size="12" font-weight="900" text-anchor="middle">SİBER GÜVENLİK DEDEKTİFİ</text>
        <text x="210" y="210" fill="#94a3b8" font-size="11" text-anchor="middle">1. Dönem 2. Yazılı Başarı Rozeti</text>
      </svg>`,
      caption: "1. Dönem 2. Değerlendirme Siber Güvenlik Başarı Rozeti"
    },
    section2: {
      title: "Hızlı Sınav Hazırlık Soruları",
      subtitle: "Kendini son kez test et:",
      layout: "cards-2",
      cards: [
        {
          title: "Yazılım ve Tablo Soruları",
          icon: "💡",
          desc: "Hızlı hatırlatmalar:",
          items: [
            { bold: "Soru 1", text: "Tabloda yatay ve dikey çizgilerin kesiştiği kutucuk? (Hücre)" },
            { bold: "Soru 2", text: "Paragraf başında 1 parmak girinti yapan tuş? (Tab)" },
            { bold: "Soru 3", text: "Düzeni asla bozulmayan güvenli belge formatı? (.pdf)" }
          ]
        },
        {
          title: "Güvenlik ve Doğrulama Soruları",
          icon: "🛡️",
          desc: "Siber kurallar:",
          items: [
            { bold: "Soru 4", text: "Devlet kurumlarının resmi web site uzantısı? (.gov.tr)" },
            { bold: "Soru 5", text: "USB belleği çekerken yapılması gereken işlem? (Güvenle Kaldır)" },
            { bold: "Soru 6", text: "Abartılı ve aldatıcı haber başlıklarına ne denir? (Clickbait / Tık Tuzağı)" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Siber Kalkan Turnuvası'",
      subtitle: "Akıllı tahtada açılan 10 soruluk interaktif değerlendirme testini tamamlıyoruz.",
      steps: [
        { title: "Senaryoları Oku", desc: "Tahtada çıkan gerçek hayattan siber tuzak senaryolarını inceleyin." },
        { title: "Doğru Kararı Ver", desc: "Zaman dolmadan önce doğru seçeneğe tıklayın." },
        { title: "Rozetini Al", desc: "100 tam puan alarak 1. Dönem Bilişim Uzmanı sertifikanızı kutlayın." }
      ],
      criteria: [
        "2. ve 3. temanın temel kazanımlarını sorular üzerinde doğru uygulama",
        "Siber güvenlik riskleri karşısında doğru refleksleri sergileme",
        "Kendine güvenerek sınavı başarıyla tamamlama"
      ]
    },
    tips: {
      safetyTitle: "Final Sınavı Tavsiyeleri",
      safetyRules: [
        { bold: "Tüm Seçenekleri Oku", text: "A şıkkını görür görmez atlamayın; B, C ve D şıklarını da mutlaka okuyun." },
        { bold: "Emeğine Güven", text: "Tüm dönem boyunca çok çalıştın, pratik yaptın ve başardın!" },
        { bold: "Gelecek Hafta Şenlik", text: "Haftaya dijital portfolyomuzu açıp yaptığımız eserleri kutlayacağız." }
      ],
      myths: [
        { wrong: "Sınav bittiğinde bilişim öğrenmemiz de sona erer.", correct: "Bilişim ve teknoloji hayat boyu devam eden, her gün yeni şeyler öğreneceğimiz heyecan dolu bir serüvendir!" }
      ]
    },
    quiz: {
      question: "Bir Word belgesini başka bir bilgisayarda veya cep telefonunda açtığımızda yazıların ve resimlerin ASLA KAYMAMASI için hangi formatta dışa aktarmalıyız?",
      options: [
        { text: "A) .mp3", isCorrect: false },
        { text: "B) .pdf", isCorrect: true },
        { text: "C) .txt", isCorrect: false },
        { text: "D) .exe", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> PDF formatı belgenin düzenini adeta dondurur; hangi cihazda açılırsa açılsın asla kaymaz ve bozulmaz."
    },
    summaryRules: [
      { bold: "Büyük Başarı", text: "1. dönemin tüm konularını başarıyla tamamladık." },
      { bold: "Siber Güvenlik", text: "Bilinçli teknoloji kullanıcısının zırhıdır." },
      { bold: "Gelecek Hafta", text: "Dijital Etik, Nezaket (Netiket) ve Telif Hakkı!" }
    ],
    homework: "Ailenize bu dönem bilişimde öğrendiğiniz en ilginç 3 bilgiyi anlatıp onları bilgilendirin.",
    nextWeekPreview: "Dijital Etik, Nezaket (Netiket) ve Telif Hakkı: Emeğe Saygı ve Kaynak Gösterme!"
  },

  // 18. HAFTA
  {
    week: 18,
    date: "11 - 17 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Siber Güvenlik, Dijital Etik ve Bilgi Doğrulama",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "Dijital Etik, Nezaket (Netiket) ve Telif Hakkı",
    subtitle: "Emeğe Saygı (©), Kaynak Gösterme, Siber Zorbalığı Önleme ve Dijital Nezaket",
    outcomeCode: "BTY.3.3.4 (Dijital Etik & Telif Hakları)",
    targetSkill: "Dijital Ortamda Nezaket Kurallarını (Netiket) Uygulama, Telif Hakkı Bilinci Edinme",
    curiosityQuestion: "Günlerce emek verip çizdiğiniz bir resmi bir yabancı internetten alıp 'Bunu ben çizdim!' diye paylaşırsa ne hissedersiniz?",
    roadmap: [
      { title: "Netiket (Net-Etiquette)", desc: "İnternet ortamında saygılı, nazik ve ahlaklı olma kuralları." },
      { title: "Büyük Harfle Yazmama", text: "İnternette tamamen BÜYÜK HARFLERLE YAZMAK bağırmak anlamına gelir." },
      { title: "Telif Hakkı (Copyright ©)", desc: "Müzisyenlerin, yazarların ve yazılımcıların ürettiği eserlerin yasal koruması." },
      { title: "Kaynak Gösterme Sanatı", desc: "Başkalarının bilgisini kullanırken kime ait olduğunu dürüstçe belirtme." }
    ],
    section1: {
      title: "Sanal Dünyada Nezaket: Netiket Kuralları",
      subtitle: "Ekranın arkasında da kalbi ve duyguları olan gerçek insanlar olduğunu unutmayalım:",
      layout: "split-visual",
      card: {
        title: "Netiketin 4 Altın Kuralı",
        icon: "🤝",
        desc: "İnternette iletişim kurarken:",
        items: [
          { bold: "1. Yüzüne Söyleyemeyeceğini Yazma", text: "Gerçek hayatta arkadaşının yüzüne karşı söyleyemeyeceğin kaba sözleri internete yazma." },
          { bold: "2. Büyük Harfle Bağırma", text: "Bütün kelimeleri büyük harfle yazmak internet dilinde bağırmak ve kavga etmek sayılır." },
          { bold: "3. İzin Almadan Paylaşma", text: "Arkadaşının fotoğrafını veya videosunu izinsiz paylaşmak özel hayatına saygısızlıktır." },
          { bold: "4. Siber Zorbalığa Karşı Dur", text: "Biriyle alay edildiğini görürsen sessiz kalma; öğretmenine veya ailene haber ver." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Telif Hakkı Rozeti -->
        <circle cx="120" cy="95" r="40" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
        <text x="120" y="108" fill="#fbbf24" font-size="44" font-weight="900" text-anchor="middle">©</text>
        <text x="120" y="155" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">TELİF HAKKI</text>
        <text x="120" y="172" fill="#94a3b8" font-size="9" text-anchor="middle">Emeğe Saygı Kalkanı</text>
        <!-- Nezaket Mesajlaşması -->
        <rect x="200" y="45" width="180" height="45" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="215" y="65" fill="#34d399" font-size="10" font-weight="bold">Arkadaşın:</text>
        <text x="215" y="80" fill="#f8fafc" font-size="9">Harika bir proje çizmişsin, tebrikler!</text>
        <rect x="200" y="105" width="180" height="45" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
        <text x="215" y="125" fill="#a5b4fc" font-size="10" font-weight="bold">Sen:</text>
        <text x="215" y="140" fill="#f8fafc" font-size="9">Çok teşekkür ederim nazik sözlerin için! 😊</text>
        <text x="210" y="215" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Gerçek Hayattaki Nezaket Dijitalde de Aynen Geçerlidir!</text>
      </svg>`,
      caption: "Telif Hakkı (©) Sembolü ve Dijital Nezaket (Netiket) İletişimi"
    },
    section2: {
      title: "Telif Hakkı (Copyright) ve Emeğe Saygı",
      subtitle: "Dijital üreticilerin haklarını koruyan evrensel kurallar:",
      layout: "cards-2",
      cards: [
        {
          title: "Telif Hakkı Nedir? (©)",
          icon: "©️",
          desc: "Bir kişinin kendi aklıyla ürettiği eserin yasal koruması:",
          items: [
            { bold: "Neleri Korur?", text: "Kitaplar, müzikler, oyunlar, kodlar, çizimler ve fotoğraflar." },
            { bold: "İzinsiz Kullanım Yasaktır", text: "Telifli bir eseri sahibinden habersiz satmak veya kendi eserin gibi göstermek suçtur." },
            { bold: "Korsana Hayır", text: "Korsan oyun veya film indirmek hem emek hırsızlığıdır hem de bilgisayara virüs bulaştırır." }
          ]
        },
        {
          title: "Kaynak Gösterme Nasıl Yapılır?",
          icon: "📖",
          desc: "Ödevlerimizde başkalarının bilgisini kullanırken dürüstlük kuralı:",
          items: [
            { bold: "Yazarın Adını Yaz", text: "'Yazar: Prof. Dr. Aziz Sancar'" },
            { bold: "Eserin veya Sitenin Adı", text: "'Kaynak: TÜBİTAK Bilim Çocuk Dergisi'" },
            { bold: "Dürüstlük Rozeti", text: "Kaynak gösteren öğrenci gerçek bir bilim insanı dürüstlüğüne sahiptir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Telif ve Nezaket Sözleşmem'",
      subtitle: "Kelime işlemcide sınıfımızın 'Bilişim Nezaket İlkeleri' belgesini tasarlıyoruz.",
      steps: [
        { title: "İlkeleri Yaz", desc: "Madde işaretleri kullanarak 4 adet internet nezaket kuralı yazın." },
        { title: "Telif Hakkı Sembolü Ekle", desc: "Ekle -> Simgeler menüsünden © (Telif) sembolünü belgenize ekleyin." },
        { title: "Kendi İmzanı At", desc: "Belgenin altına 'Bu kurallara uyacağıma söz veririm' yazıp adınızı imzalayın." }
      ],
      criteria: [
        "Netiket (dijital nezaket) kurallarını doğru ifade edebilme",
        "Telif hakkının önemini ve izinsiz içerik kullanmanın sakıncalarını kavrama",
        "Kendi dijital ahlak ilkelerini belge üzerinde biçimlendirebilme"
      ]
    },
    tips: {
      safetyTitle: "Bilinçli İnternetçi Öğütleri",
      safetyRules: [
        { bold: "Öfkeyle Mesaj Atma", text: "Sinirlendiğinde klavyeden uzaklaş, derin nefes al ve sakinleşince yaz." },
        { bold: "Ücretsiz ve Açık Kaynak", text: "Ödevlerinizde telifsiz serbest kullanılan görselleri (Creative Commons) tercih edin." },
        { bold: "Arkadaşına Destek Ol", text: "İnternette arkadaşını üzen bir durum olursa ona sevgiyle destek ol ve yalnız bırakma." }
      ],
      myths: [
        { wrong: "İnternette kimse beni görmediği için istediğim gibi kaba davranabilirim.", correct: "Büyük bir yanılgı! İnternetteki her mesajın arkasında IP adresi ve dijital ayak izi vardır; kaba davranışlar gerçek hayatta olduğu gibi cezalandırılır." }
      ]
    },
    quiz: {
      question: "İnternet ortamında mesajlaşırken veya e-posta yazarken BÜTÜN KELİMELERİ BÜYÜK HARFLERLE YAZMAK ne anlama gelir?",
      options: [
        { text: "A) Çok kibar ve neşeli konuşmak", isCorrect: false },
        { text: "B) Karşı tarafa bağırmak, öfkelenmek ve kavga etmek", isCorrect: true },
        { text: "C) Bilgisayarın hızını artırmak", isCorrect: false },
        { text: "D) Şifreyi güçlendirmek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> İnternet nezaketinde (Netiket) tamamen BÜYÜK HARF kullanmak 'bağırmak' anlamına gelir; bu yüzden sadece ilk harfleri büyük yazmalıyız."
    },
    summaryRules: [
      { bold: "Netiket", text: "Sanal dünyanın altın nezaket kurallarıdır." },
      { bold: "Telif Hakkı (©)", text: "Emeğe ve üreticiye duyulan yasal saygıdır." },
      { bold: "Dürüstlük", text: "Kaynak gösteren öğrencinin en büyük erdemidir." }
    ],
    homework: "Sevdiğiniz bir kitabın ilk sayfasına bakın; © Telif Hakkı sembolünü ve hangi yayınevine ait olduğunu defterinize not alın.",
    nextWeekPreview: "1. Dönem Sonu: Dijital Ürün Portfolyosu, Eserlerin Sunumu ve Karne Sevinci!"
  },

  // 19. HAFTA
  {
    week: 19,
    date: "18 - 24 Ocak",
    hours: "2 Ders Saati",
    unit: "3. Tema: Siber Güvenlik, Dijital Etik ve Bilgi Doğrulama",
    unitBadge: "Dönem Sonu",
    unitTheme: "tema-3",
    title: "1. Dönem Sonu: Dijital Portfolyo ve Karne Sevinci",
    subtitle: "Dönem Boyu Ürettiğimiz Afişler, Şiirler, Tablolar ve Başarı Sertifikalarımız",
    outcomeCode: "BTY.3.3.5 (Portfolyo & Öz Değerlendirme)",
    targetSkill: "1. Dönem Dijital Eserlerini Portfolyoda Sunma, Öz Değerlendirme Yapabilme",
    curiosityQuestion: "19 hafta önce başladığımız bu yolculukta ne kadar çok dijital eser ürettiğinizi tek bir klasörde görünce kendinizle nasıl gurur duyacaksınız?",
    roadmap: [
      { title: "Büyük Geriye Bakış", desc: "Donanımdan klavyeye, tablolardan siber güvenliğe 19 haftalık macera." },
      { title: "Dijital Portfolyo Vitrini", desc: "En sevdiğimiz afişi, mektubu ve ders programı tablosunu seçme." },
      { title: "Sınıf İçi Eser Sergisi", desc: "Akıllı tahtaya çıkıp kendi çalışmasını arkadaşlarına tanıtma." },
      { title: "Karne Sevinci", desc: "1. dönemi başarıyla bitirmenin ve tatil sözü vermenin heyecanı." }
    ],
    section1: {
      title: "19 Haftalık Başarı Albümümüz",
      subtitle: "Küçük adımlarla başladık, harika dijital üreticiler olduk!",
      layout: "split-visual",
      card: {
        title: "1. Dönem Başarı Karnemiz",
        icon: "🎓",
        desc: "Gururla kazandığımız yetkinlikler:",
        items: [
          { bold: "Sistem ve Donanım", text: "Giriş ve çıkış birimlerini, işletim sistemini ve pencereleri yönetiyoruz." },
          { bold: "Düzen ve Dosyalar", text: "Klasör ağacıyla dosyalarımızı düzenliyor, USB ve bulutta yedekliyoruz." },
          { bold: "Kelime İşlemci Ustalığı", text: "Şiirler yazıyor, tablolar tasarlıyor ve baskı önizleme yapıyoruz." },
          { bold: "Siber Bilinç", text: "Sahte haberleri yakalıyor, telif hakkına ve netiket kurallarına uyuyoruz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Başarı Kupası -->
        <circle cx="210" cy="85" r="42" fill="#f59e0b" fill-opacity="0.25" stroke="#fbbf24" stroke-width="3"/>
        <text x="210" y="98" font-size="40" text-anchor="middle">🏆</text>
        <rect x="70" y="145" width="280" height="36" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="210" y="168" fill="#fde68a" font-size="12" font-weight="900" text-anchor="middle">1. DÖNEM BİLİŞİM LİDERİ SERTİFİKASI</text>
        <text x="210" y="210" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Tebrikler 3. Sınıflar! Harika Bir Dönem Geçirdik!</text>
      </svg>`,
      caption: "1. Dönem Sonu Bilişim ve Teknoloji Başarı Kupası"
    },
    section2: {
      title: "Dijital Portfolyo Klasörümüz",
      subtitle: "Klasörümüzdeki en değerli 4 eser:",
      layout: "cards-2",
      cards: [
        {
          title: "Ürettiğimiz Harika Eserler",
          icon: "📁",
          desc: "Klasörümüzün içindeki zenginlikler:",
          items: [
            { bold: "29 Ekim Afişi", text: "Şanlı Türk Bayrağı ve Cumhuriyet sloganımız." },
            { bold: "24 Kasım Mektubu", text: "Öğretmenimize Tab tuşuyla yazdığımız teşekkür mektubumuz." },
            { bold: "Ders Programı Tablomuz", text: "Renkli hücrelerle oluşturduğumuz haftalık program." },
            { bold: "Siber Dedektif Rozetimiz", text: "Güvenli internet ve şifre kalesi çalışmalarımız." }
          ]
        },
        {
          title: "Yarıyıl Tatili Bilişim Sözü",
          icon: "🏖️",
          desc: "Tatili sağlıklı ve mutlu geçirme sözümüz:",
          items: [
            { bold: "Ekran Süresi Dengesi", text: "Bütün günü ekran karşısında değil, kitap okuyarak ve oyun oynayarak geçireceğiz." },
            { bold: "20-20-20 Kuralı", text: "Tablete baktığımız her 20 dakikada gözlerimizi dinlendireceğiz." },
            { bold: "2. Döneme Hazırlık", text: "İkinci dönem başlayacak olan Algoritma ve Scratch Kodlama dünyasına enerji toplayacağız!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Benim Portfolyom Sahnesi'",
      subtitle: "Her öğrenci akıllı tahtaya çıkarak 1. dönem klasöründeki en sevdiği eseri 1 dakikada tanıtır.",
      steps: [
        { title: "Klasörünü Aç", desc: "Masaüstündeki kendi klasörünüzden en gurur duyduğunuz çalışmayı açın." },
        { title: "Eserini Tanıt", desc: "Arkadaşlarına dönüp hangi araçları ve fontları kullandığını söyle." },
        { title: "Karne Tebriğini Kabul Et", desc: "Sınıfın alkışlarıyla birlikte dönemin başarı belgesini al." }
      ],
      criteria: [
        "Kendi dijital ürününü özgüvenle topluluk önünde sunabilme",
        "Dönem boyunca öğrendiği bilişim terimlerini doğru kullanabilme",
        "Arkadaşlarının çalışmalarını takdir etme ve başarıyı kutlama"
      ]
    },
    tips: {
      safetyTitle: "Tatil Bilişim Öğütleri",
      safetyRules: [
        { bold: "Cihazları Korumaya Al", text: "Tatil boyunca okul bilgisayarlarını kapatıp laboratuvarı tertemiz bırakalım." },
        { bold: "Gözlerini Dinlendir", text: "Tatil bol bol koşup oynamak ve doğada vakit geçirmek içindir." },
        { bold: "Kodlama Merakını Koru", text: "Sömestr tatili bültenlerindeki bilgisayarsız akıl oyunlarını ailenle çöz!" }
      ],
      myths: [
        { wrong: "Tatil demek sabah akşam bilgisayar oyunu oynamak demektir.", correct: "Bilinçli bir çocuk tatili sporla, kitapla, sevdikleriyle ve dengeli teknolojiyle geçiren çocuktur!" }
      ]
    },
    quiz: {
      question: "1. dönem boyunca ürettiğimiz resimleri, şiirleri ve tabloları düzenli şekilde saklayıp gelişimimizi gördüğümüz dijital koleksiyona ne ad verilir?",
      options: [
        { text: "A) Geri Dönüşüm Kutusu", isCorrect: false },
        { text: "B) Dijital Portfolyo (Gelişim Dosyası)", isCorrect: true },
        { text: "C) Arama Motoru", isCorrect: false },
        { text: "D) Görev Çubuğu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Dijital Portfolyo' bir öğrencinin dönem boyunca ürettiği en güzel çalışmaların toplandığı başarı vitrinidir."
    },
    summaryRules: [
      { bold: "1. Dönem Başarısı", text: "Çalışmanın, öğrenmenin ve üretmenin zaferidir." },
      { bold: "Dijital Portfolyo", text: "Emeklerimizin gurur tablosudur." },
      { bold: "2. Dönem", text: "Algoritmalar ve Scratch ile Kodlama Şöleni başlıyor!" }
    ],
    homework: "Yarıyıl tatilinde ailenizle birlikte 'Sömestr Kodlama Bülteni'ndeki bulmacaları çözün.",
    nextWeekPreview: "Sömestr 1. Hafta: Bilgisayarsız Kodlama (Unplugged) ve Labirent Macera Bülteni!"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_TERM_1_PART2_GRADE3 = CURRICULUM_TERM_1_PART2_GRADE3;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CURRICULUM_TERM_1_PART2_GRADE3;
}
