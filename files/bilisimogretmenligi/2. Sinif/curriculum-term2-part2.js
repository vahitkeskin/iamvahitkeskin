/**
 * 2. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem 2. Bölüm (Hafta 31 - 41)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART2_GRADE2 = [
  // 31. HAFTA
  {
    week: 31,
    date: "12 - 18 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "Ara Tatil Atölyesi",
    unitTheme: "tema-5",
    title: "2. Dönem Ara Tatil: İnteraktif Masal Atölyesi",
    subtitle: "Kendi Karakterimizi Çizme ve Ormanda Gezinti Animasyonu",
    outcomeCode: "BTY.2.5.4 (Yaratıcı Hikaye Tasarımı)",
    targetSkill: "Kendi Karakterini Çizim Editöründe Tasarlama ve Kod Bloklarıyla Canlandırma",
    curiosityQuestion: "Çizdiğimiz bir resmin bir anda gözlerini kırpıp ekranda yürümeye başlamasını nasıl sağlarız?",
    roadmap: [
      { title: "Çizim Editörü (Boya Fırçası)", desc: "ScratchJr içinde kendi kahramanımızı sıfırdan çizme." },
      { title: "Karakter Giydirme", desc: "Mevcut karakterlerin renklerini değiştirme ve şapka ekleme." },
      { title: "Masal Kurgusu", desc: "Ormanda kaybolan sevimli sincabın meşe palamudunu bulma hikayesi." },
      { title: "Tatil Projesi", desc: "Tüm aşamaları birleştirip sesli masal tamamlama." }
    ],
    section1: {
      title: "ScratchJr Çizim Editörü: Kahramanını Yarat!",
      subtitle: "Hazır karakterleri kullanabileceğimiz gibi kendi özgün kahramanımızı da çizebiliriz.",
      layout: "split-visual",
      card: {
        title: "Karakter Çizim Adımları",
        icon: "🎨",
        desc: "Karakter menüsündeki fırça simgesine bastığımızda:",
        items: [
          { bold: "1. Fırça Simgesine Tıkla", text: "Karakter ekleme listesinde boş kartın üzerindeki fırçaya basarız." },
          { bold: "2. Şekillerle Gövde Yap", text: "Daire aracıyla sevimli bir kafa ve gövde çizeriz." },
          { bold: "3. Boya Kovası ile Doldur", text: "İstediğimiz renkle kahramanımızın elbisesini boyarız." },
          { bold: "4. Tik İşaretine (✓) Bas", text: "Çizimimiz anında sahneye canlı bir karakter olarak ışınlanır!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <!-- Çizim Masası -->
        <rect x="80" y="45" width="260" height="150" rx="10" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
        <!-- Çizilen Kahraman (Uzaylı / Robotçuk) -->
        <circle cx="210" cy="105" r="30" fill="#a855f7" stroke="#c084fc" stroke-width="2"/>
        <circle cx="200" cy="100" r="5" fill="#ffffff"/>
        <circle cx="220" cy="100" r="5" fill="#ffffff"/>
        <circle cx="200" cy="100" r="2" fill="#000000"/>
        <circle cx="220" cy="100" r="2" fill="#000000"/>
        <path d="M200 118 Q210 128 220 118" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Anten -->
        <line x1="210" y1="75" x2="210" y2="58" stroke="#f472b6" stroke-width="3"/>
        <circle cx="210" cy="55" r="5" fill="#fde047"/>
        <!-- Onay Butonu (✓) -->
        <circle cx="310" cy="65" r="14" fill="#10b981"/>
        <path d="M304 65 L308 69 L316 61" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="210" y="222" fill="#fbcfe8" font-size="12" font-weight="bold" text-anchor="middle">Kendi Çizdiğin Kahraman Senin Kodlarınla Canlanır!</text>
      </svg>`,
      caption: "ScratchJr Karakter Çizim Editörü ve Canlandırma Masası"
    },
    section2: {
      title: "Masal Sahnesi Tasarımı",
      subtitle: "Hikayemizin geçtiği mekan duyguları ve macerayı belirler.",
      layout: "cards-2",
      cards: [
        {
          title: "Mekan Seçenekleri",
          icon: "🏞️",
          desc: "ScratchJr'daki büyüleyici sahneler:",
          items: [
            { bold: "Büyülü Orman", text: "Kuşların öttüğü, sincap ve tavşanların gezindiği yeşil doğa." },
            { bold: "Deniz Altı", text: "Balıkların yüzdüğü, mercanların parladığı derin sular." },
            { bold: "Uzay Boşluğu", text: "Gezegenlerin, yıldızların ve astronotların mekanı." }
          ]
        },
        {
          title: "Diyalog ve Hareket",
          icon: "💬",
          desc: "Karakterlerin etkileşimi:",
          items: [
            { bold: "Karşılaşma", text: "İki karakter birbirine doğru yürür." },
            { bold: "Selamlaşma", text: "Mor konuşma balonu ile 'Merhaba Tavşan Kardeş!' der." },
            { bold: "Birlikte Dans", text: "Müzik eşliğinde neşeyle zıplarlar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Ormandaki Gizemli Yolculuk'",
      subtitle: "Kendi çizdiğimiz sevimli kahramanı orman sahnesinde meyve aramaya çıkarıyoruz.",
      steps: [
        { title: "Kahramanını Çiz", desc: "Fırça aracını açıp renkli bir sincap veya minik robot çizin." },
        { title: "Orman Arka Planı Koy", desc: "Sahneyi yeşil ağaçlarla dolu bir orman manzarası yapın." },
        { title: "Yürüt ve Zıplat", desc: "Sarı bayrak, 4 adım ileri, 2 adım zıpla kodlarını bağlayın." }
      ],
      criteria: [
        "Çizim editöründe kendi karakterini başarıyla tasarlayabilme",
        "Karakteri sahneye aktarıp hareket bloklarıyla canlandırabilme",
        "Yaratıcı masal kurgusu oluşturabilme"
      ]
    },
    tips: {
      safetyTitle: "Masalcı Yazılımcı Öğütleri",
      safetyRules: [
        { bold: "Kapalı Çizgiler", text: "Çizim yaparken çizgilerin uçlarını tam birleştirin, yoksa boya kovası tüm sayfayı boyar." },
        { bold: "Hikayeni Hayal Et", text: "Kodlamaya başlamadan önce masalının nasıl başlayıp nasıl biteceğini düşün." },
        { bold: "Arkadaşına İzlet", text: "Hazırladığın çizgi filmi sıra arkadaşına gururla izlet." }
      ],
      myths: [
        { wrong: "Sadece profesyonel ressamlar güzel oyun karakteri çizebilir.", correct: "Birkaç geometrik daire ve neşeli renklerle çizilen basit karakterler çoğu zaman en sevimli kahramanlar olur!" }
      ]
    },
    quiz: {
      question: "ScratchJr'da hazır karakterler yerine kendi çizdiğimiz bir resmi eklemek için hangi butona basarız?",
      options: [
        { text: "A) Çöp Kutusu", isCorrect: false },
        { text: "B) Karakter ekleme menüsündeki Boya Fırçası butonu", isCorrect: true },
        { text: "C) Bilgisayarın kapatma düğmesi", isCorrect: false },
        { text: "D) Ses kısma butonu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Boya fırçası butonu çizim editörünü açar ve kendi kahramanımızı sıfırdan çizmemizi sağlar."
    },
    summaryRules: [
      { bold: "Yaratıcılık", text: "Hayal ettiğimiz her şeyi dijitalde çizebilme gücüdür." },
      { bold: "Canlandırma", text: "Çizgileri kod bloklarıyla yaşayan kahramanlara dönüştürmektir." },
      { bold: "Gelecek Hafta", text: "23 Nisan Çocuk Bayramı: Dans Eden Çocuklar Projesi!" }
    ],
    homework: "Ara tatilde ailenize anlatmak istediğiniz 3 cümlelik bir çizgi film masalı yazıp gelin.",
    nextWeekPreview: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı: Dans Eden Karakterler Animasyonu!"
  },

  // 32. HAFTA
  {
    week: 32,
    date: "19 - 25 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "23 Nisan Çocuk Bayramı: Dans Eden Karakterler",
    subtitle: "Karakterleri Müzik Eşliğinde Dans Ettirme ve Döngü İçinde Hareket",
    outcomeCode: "BTY.2.5.5 (Animasyon & Döngülü Hareket)",
    targetSkill: "Döngü Bloğunu Karakter Hareketiyle Birleştirme, 23 Nisan Çocuk Şenliği Animasyonu Kodlama",
    curiosityQuestion: "Gazi Mustafa Kemal Atatürk dünyada çocuklara bayram hediye eden tek liderdir; bu bayramı kodlarımızla nasıl kutlarız?",
    roadmap: [
      { title: "23 Nisan Coşkusu", desc: "Dünya çocuklarının kardeşlik ve neşe bayramı." },
      { title: "Döngü Bloğu (Turuncu)", desc: "ScratchJr'daki tekrar (döngü) bloğunu keşfetme." },
      { title: "Dans Figürleri", desc: "Sağa yat, sola yat, zıpla, dön hareketleri." },
      { title: "Bayram Şenliği Sahnesi", desc: "Farklı ülkelerden çocuk karakterlerini sahnede dans ettirme." }
    ],
    section1: {
      title: "Turuncu Döngü Bloğu ile Sürekli Dans",
      subtitle: "Karakterlerimiz müziğin ritmine göre hiç durmadan dans eder.",
      layout: "split-visual",
      card: {
        title: "Dans Döngüsünün Yapısı",
        icon: "💃",
        desc: "Karakteri dans ettiren kod zinciri:",
        items: [
          { bold: "1. Sarı Bayrak", text: "Yeşil bayrağa basıldığında dans başlar." },
          { bold: "2. Turuncu Döngü Kutusu", text: "İçine konulan hareketleri belirttiğimiz sayı kadar (örn: 6 defa) tekrarlar." },
          { bold: "3. Dans Adımları", text: "[Sağa Yat] ➔ [Sola Yat] ➔ [Zıpla: 2] hareketlerini döngünün içine koyarız." },
          { bold: "4. Sonsuz Tekrar", text: "Kırmızı sonsuz döngü bloğuyla müzik durana kadar dansı devam ettiririz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Dans Eden Çocuk Figürü -->
        <circle cx="120" cy="80" r="18" fill="#38bdf8"/>
        <line x1="120" y1="98" x2="120" y2="145" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
        <line x1="120" y1="110" x2="90" y2="90" stroke="#34d399" stroke-width="5" stroke-linecap="round"/>
        <line x1="120" y1="110" x2="150" y2="85" stroke="#34d399" stroke-width="5" stroke-linecap="round"/>
        <line x1="120" y1="145" x2="100" y2="185" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
        <line x1="120" y1="145" x2="140" y2="180" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
        <text x="120" y="60" font-size="20">🎈</text>
        <!-- Döngü Blokları Şeması -->
        <rect x="180" y="65" width="200" height="110" rx="10" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="280" y="90" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">TEKRARLA (DÖNGÜ: 4X)</text>
        <rect x="200" y="105" width="65" height="35" rx="6" fill="#38bdf8"/>
        <text x="232" y="127" fill="#0c4a6e" font-size="10" font-weight="bold" text-anchor="middle">Zıpla ⤴</text>
        <rect x="280" y="105" width="65" height="35" rx="6" fill="#c084fc"/>
        <text x="312" y="127" fill="#3b0764" font-size="10" font-weight="bold" text-anchor="middle">Dön ↷</text>
        <text x="210" y="215" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">23 Nisan Neşesi: Kodlarımızla Dans Eden Çocuklar!</text>
      </svg>`,
      caption: "23 Nisan Çocuk Bayramı Dans Eden Karakterler Döngü Bloğu"
    },
    section2: {
      title: "23 Nisan: Dünyanın En Güzel Çocuk Bayramı",
      subtitle: "Gazi Mustafa Kemal Atatürk'ün tüm dünya çocuklarına armağanı.",
      layout: "cards-2",
      cards: [
        {
          title: "Milli Egemenlik Ruhu",
          icon: "🇹🇷",
          desc: "23 Nisan 1920'nin anlamı:",
          items: [
            { bold: "Meclisimizin Açılışı", text: "Milletimizin kendi kendini yönettiği Türkiye Büyük Millet Meclisi kuruldu." },
            { bold: "Çocuklara Güven", text: "Atatürk geleceğin mimarları olarak çocuklara sonsuz güven duydu." },
            { bold: "Dünya Kardeşliği", text: "Farklı ülkelerden gelen çocuklar el ele tutuşup bayramı kutlar." }
          ]
        },
        {
          title: "Çoklu Karakter Yönetimi",
          icon: "👥",
          desc: "Sahnede birden fazla çocuğu oynatmak:",
          items: [
            { bold: "Her Karakterin Kendi Kodu", text: "Ali karakterinin kod masası ayrı, Ayşe karakterinin kodu ayrıdır." },
            { bold: "Birlikte Başlatma", text: "İkisine de sarı yeşil bayrak bloğu koyarsak aynı anda dansa başlarlar!" },
            { bold: "Ritim Uyumu", text: "Biri zıplarken diğeri alkış tutabilir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: '23 Nisan Dans Gösterisi'",
      subtitle: "Sahneye 2 çocuk karakteri ve balonlar ekleyip döngü içinde dans ettiriyoruz.",
      steps: [
        { title: "2 Karakter Ekle", desc: "Karakter listesinden dans eden 2 sevimli çocuk seçin." },
        { title: "Turuncu Döngüyü Tak", desc: "Her iki karakterin kod alanına turuncu döngü bloğu yerleştirin." },
        { title: "Dans Figürlerini Doldur", desc: "Döngünün içine [Zıpla: 2] ve [Dön: 1] blokları koyup yeşil bayrağa basın." }
      ],
      criteria: [
        "Turuncu tekrar (döngü) bloğunu doğru kurgulayabilme",
        "Birden fazla karaktere eş zamanlı kod yazabilme",
        "23 Nisan coşkusunu dijital animasyonla kutlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Animatör Taktikleri",
      safetyRules: [
        { bold: "Döngünün Ağzı Açıktır", text: "Turuncu döngü bloğu bir timsah ağzı gibidir; tekrarlanacak blokları içine yutmalıdır." },
        { bold: "Karakterleri Üst Üste Koyma", text: "Dans ederken birbirlerini kapatmamaları için sahnede aralıklı durdurun." },
        { bold: "Bayram Şarkısı", text: "Arka plana sınıfta hep birlikte 23 Nisan şarkısı söyleyerek eşlik edin!" }
      ],
      myths: [
        { wrong: "Sahnede 5 karakter varsa her birini başlatmak için 5 kere ayrı ayrı tıklamak gerekir.", correct: "Hepsine 'Yeşil Bayrak' bloğu koyarsanız, tek bir yeşil bayrak tıklamasıyla hepsi aynı anda dansa başlar!" }
      ]
    },
    quiz: {
      question: "ScratchJr'da bir dans hareketinin arka arkaya 5 defa tekrarlanması için hangi renk blok kullanılır?",
      options: [
        { text: "A) Mavi Hareket Bloğu", isCorrect: false },
        { text: "B) Turuncu Döngü (Tekrar) Bloğu", isCorrect: true },
        { text: "C) Kırmızı Dur Bloğu", isCorrect: false },
        { text: "D) Sarı Başlatıcı Blok", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Turuncu döngü bloğu, içindeki hareketleri istediğimiz sayıda otomatik tekrar ettirir."
    },
    summaryRules: [
      { bold: "23 Nisan", text: "Atatürk'ün çocuklara en güzel hediyesidir." },
      { bold: "Döngülü Dans", text: "Karakterleri yorulmadan ritimle oynatır." },
      { bold: "Çoklu Karakter", text: "Takım halinde çalışan harika animasyonlar üretir." }
    ],
    homework: "23 Nisan ile ilgili bir şiiri defterinize yazıp yanına dans eden ScratchJr kedisini çizin.",
    nextWeekPreview: "Konuşan ve Ses Çıkaran Karakterler: Mor Görünüm & Pembe Ses Blokları!"
  },

  // 33. HAFTA
  {
    week: 33,
    date: "26 Nisan - 02 Mayıs",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Konuşan ve Ses Çıkaran Karakterler",
    subtitle: "Mor Görünüm & Pembe Ses Blokları, Kendi Sesimizi Kaydetme Becerisi",
    outcomeCode: "BTY.2.5.6 (Ses & Diyalog Tasarımı)",
    targetSkill: "Karakterlere Konuşma Balonları ve Ses Efektleri Ekleme, Kendi Sesini Kaydedebilme",
    curiosityQuestion: "Karakterimiz ekranda yürürken aynı zamanda bizim kendi sesimizle 'Merhaba arkadaşlar!' diye konuşabilir mi?",
    roadmap: [
      { title: "Mor Bloklar (Görünüm)", desc: "Konuşma balonu, büyüme, küçülme ve kaybolma efektleri." },
      { title: "Pembe Bloklar (Ses)", desc: "Pop sesi, neşeli zil ve kendi ses kaydı bloğu." },
      { title: "Mikrofon Sihri", desc: "Mikrofon butonuna basarak kendi sesimizi karaktere yükleme." },
      { title: "Konuşan Hayvanlar", desc: "Kediye miyavlatma, köpeğe havlatma kodları." }
    ],
    section1: {
      title: "Karakterlerimize Ses ve Nefes Veriyoruz",
      subtitle: "Mor bloklar yazılı konuşturur, pembe bloklar gerçek ses çıkarır!",
      layout: "split-visual",
      card: {
        title: "Ses ve Görünümün Gücü",
        icon: "🗣️",
        desc: "Karakterimizi konuşturan 3 özel araç:",
        items: [
          { bold: "1. Konuşma Balonu (Mor)", text: "Karakterin kafasının üstünde tıpkı çizgi romanlardaki gibi yazı balonu açar." },
          { bold: "2. Ses Efekti (Pembe 'Pop')", text: "Karakter zıpladığında veya bir yere çarptığında eğlenceli 'pop' sesi çıkarır." },
          { bold: "3. Kendi Sesini Kaydet (Mikrofon)", text: "Mikrofona 3 saniye konuşarak kendi sesinizi karaktere hediye edersiniz!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#c084fc" stroke-width="2"/>
        <!-- Karakter Kedi -->
        <circle cx="120" cy="130" r="28" fill="#f59e0b"/>
        <text x="120" y="138" font-size="20" text-anchor="middle">🐱</text>
        <!-- Konuşma Balonu (Mor) -->
        <rect x="150" y="55" width="160" height="50" rx="12" fill="#a855f7" stroke="#c084fc" stroke-width="2"/>
        <polygon points="160,105 140,118 175,105" fill="#a855f7"/>
        <text x="230" y="85" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">"Merhaba Dünya!"</text>
        <!-- Ses Dalgası (Pembe) -->
        <circle cx="330" cy="80" r="16" fill="#ec4899"/>
        <text x="330" y="86" font-size="14" text-anchor="middle">🔊</text>
        <!-- Blok Çubuğu -->
        <rect x="50" y="180" width="60" height="36" rx="6" fill="#facc15"/>
        <text x="80" y="202" fill="#713f12" font-size="10" font-weight="bold" text-anchor="middle">Bayrak 🏁</text>
        
        <rect x="115" y="180" width="75" height="36" rx="6" fill="#a855f7"/>
        <text x="152" y="202" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Konuş 💬</text>
        
        <rect x="195" y="180" width="70" height="36" rx="6" fill="#ec4899"/>
        <text x="230" y="202" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Ses Çal 🎵</text>
        <text x="330" y="202" fill="#fbcfe8" font-size="11" font-weight="bold">Canlı Ses!</text>
      </svg>`,
      caption: "Mor Görünüm (Konuşma Balonu) ve Pembe Ses Blokları Entegrasyonu"
    },
    section2: {
      title: "Mikrofon ile Kendi Sesini Kaydetme Adımları",
      subtitle: "Kendi sesimizle konuşan bir robot veya masal perisi yaratıyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Ses Kaydı Nasıl Yapılır?",
          icon: "🎙️",
          desc: "Kendi sesimizi ekleme aşamaları:",
          items: [
            { bold: "1. Pembe Kategoriye Bas", text: "Yukarıdaki pembe ses menüsüne tıklayın." },
            { bold: "2. Mikrofon Butonuna Bas", text: "Boş mikrofon simgesine basın, kayıt penceresi açılır." },
            { bold: "3. Kırmızı Daireye Bas ve Konuş", text: "Kırmızı butona basıp 'Merhaba ben Robot Bobo!' deyin." },
            { bold: "4. Kareye Bas ve Onayla", text: "Durdurma karesine basıp yeşil onay tikine (✓) tıklayın." }
          ]
        },
        {
          title: "Büyüme ve Küçülme Sihri",
          icon: "🔍",
          desc: "Mor kategorideki diğer süper bloklar:",
          items: [
            { bold: "Büyüt Bloğu", text: "Karakteri dev bir deve dönüştürür." },
            { bold: "Küçült Bloğu", text: "Karakteri minicik bir karıncaya çevirir." },
            { bold: "Gizle ve Göster", text: "Sihirbaz gibi karakteri aniden yok edip tekrar ortaya çıkarır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Konuşan Dostum Robot'",
      subtitle: "Karaktere hem 'Ben bir kodlama robotuyum!' baloncuğu ekliyoruz hem de kendi sesimizi kaydediyoruz.",
      steps: [
        { title: "Robot Karakteri Seç", desc: "Karakter listesinden sevimli bir robot ekleyin." },
        { title: "Konuşma Balonunu Yaz", desc: "Mor konuşma bloğunu sürükleyip içine 'Bip Bip! Merhaba!' yazın." },
        { title: "Kendi Sesini Kaydet", desc: "Mikrofonla kendi robot sesinizi kaydedip mor bloğun arkasına bağlayın." }
      ],
      criteria: [
        "Mor konuşma bloğuna klavyeyle doğru metin yazabilme",
        "Mikrofonu kullanarak kendi sesini başarıyla kaydedebilme",
        "Görsel balon ile ses efektini senkronize çalıştırabilme"
      ]
    },
    tips: {
      safetyTitle: "Ses Mühendisi Kuralları",
      safetyRules: [
        { bold: "Mikrofona Çok Bağırma", text: "Mikrofona çok yakın bağırırsanız ses patlar ve cızırtılı çıkar; sakin bir sesle konuşun." },
        { bold: "Sınıf Sessizliği", text: "Arkadaşınız ses kaydederken sınıfta sessiz olun ki onun kaydına arka plan gürültüsü girmesin." },
        { bold: "Kulaklık Kullanımı", text: "Laboratuvarda başkalarını rahatsız etmemek için bilgisayarın sesini uygun seviyede tutun." }
      ],
      myths: [
        { wrong: "ScratchJr'da sadece kendi dilimizdeki hazır sesleri kullanabiliriz.", correct: "Mikrofon sayesinde dünyanın tüm dillerini, hayvan seslerini, alkışları ve kendi şarkılarınızı kaydedebilirsiniz!" }
      ]
    },
    quiz: {
      question: "ScratchJr'da karakterin başının üzerinde çizgi romanlardaki gibi bir konuşma balonu çıkarmak için hangi renk blok kullanılır?",
      options: [
        { text: "A) Mavi Hareket Bloğu", isCorrect: false },
        { text: "B) Mor Görünüm Bloğu", isCorrect: true },
        { text: "C) Sarı Tetikleyici Blok", isCorrect: false },
        { text: "D) Kırmızı Durdurucu Blok", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Mor bloklar karakterin dış görünüşünü, konuşma balonlarını ve büyüklüğünü kontrol eder."
    },
    summaryRules: [
      { bold: "Mor Bloklar", text: "Yazılı diyaloglar ve büyüme-küçülme sihridir." },
      { bold: "Pembe Bloklar", text: "Gerçek sesler ve kendi mikrofondan kaydettiğimiz seslerdir." },
      { bold: "Gelecek Hafta", text: "Sahne Değiştirme ve İki Karakteri Birbiriyle Konuşturma!" }
    ],
    homework: "ScratchJr'da kediye kendi sesinizle 'Miyav, karnım çok acıktı!' dedirten mini bir animasyon kodlayın.",
    nextWeekPreview: "Sahne Değiştirme ve İki Karakteri Konuşturma (Haberleşme & Mesajlaşma)!"
  },

  // 34. HAFTA
  {
    week: 34,
    date: "03 - 09 Mayıs",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Sahne Değiştirme ve İki Karakteri Konuşturma",
    subtitle: "Zarf Gönderme (Mektup), Birinci Karakter Konuşunca İkincinin Cevap Vermesi",
    outcomeCode: "BTY.2.5.7 (Karakterler Arası İletişim)",
    targetSkill: "Mesajlaşma (Zarf Gönderme/Alma) Mekanizmasıyla Karakterleri Sırayla Konuşturma",
    curiosityQuestion: "İki insan konuşurken birbirinin sözünü kesmeden sırayla nasıl konuşur? Bilgisayarda bir karaktere 'Sen dur, sıra onda!' nasıl deriz?",
    roadmap: [
      { title: "Zarf Gönderme (Mektup)", desc: "Sarı renkli açık ve kapalı zarf bloklarının mantığı." },
      { title: "Haber Salma (Broadcast)", desc: "1. karakter konuşmasını bitirince 2. karaktere mektup atar." },
      { title: "Mektubu Açma", desc: "2. karakter mektubu alınca kendi cevabını söyler." },
      { title: "2. Sahneye Geçiş", desc: "Evden çıkıp parka giden 2 sayfalık interaktif masal." }
    ],
    section1: {
      title: "Sihirli Mektuplar: Zarf Gönderme Sanatı",
      subtitle: "Karakterlerimiz gizli mektuplar aracılığıyla birbirine haber verir.",
      layout: "split-visual",
      card: {
        title: "Mektuplaşma Döngüsü",
        icon: "✉️",
        desc: "İki karakterin karşılıklı konuşma adımları:",
        items: [
          { bold: "1. Kedi Başlar", text: "Kedi 'Günaydın Köpek Kardeş!' der ve kapalı turuncu zarfı postalar." },
          { bold: "2. Zarf Gönderme Bloğu", text: "Sarı açık zarf bloğu havaya bir mesaj sinyali fırlatır." },
          { bold: "3. Köpek Mektubu Alır", text: "Köpeğin kodunun başında 'Turuncu zarf gelince' bloğu vardır." },
          { bold: "4. Köpek Cevap Verir", text: "Mektup gelince köpek neşeyle 'Sana da günaydın Kedi!' der." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Kedi (Sol) -->
        <circle cx="85" cy="115" r="24" fill="#f59e0b"/>
        <text x="85" y="123" font-size="18" text-anchor="middle">🐱</text>
        <rect x="60" y="55" width="90" height="30" rx="6" fill="#a855f7"/>
        <text x="105" y="75" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">"Nasılsın?"</text>
        <!-- Uçan Zarf -->
        <rect x="185" y="100" width="50" height="35" rx="4" fill="#facc15" stroke="#eab308" stroke-width="2"/>
        <path d="M185 100 L210 118 L235 100" stroke="#713f12" stroke-width="2" fill="none"/>
        <path d="M140 115 H180" stroke="#facc15" stroke-width="3" stroke-dasharray="4,3"/>
        <path d="M240 115 H280" stroke="#facc15" stroke-width="3" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
        <!-- Köpek (Sağ) -->
        <circle cx="335" cy="115" r="24" fill="#38bdf8"/>
        <text x="335" y="123" font-size="18" text-anchor="middle">🐶</text>
        <rect x="270" y="55" width="105" height="30" rx="6" fill="#a855f7"/>
        <text x="322" y="75" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">"İyiyim, teşekkürler!"</text>
        <text x="210" y="185" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Sarı Zarf: Karakterlerin Birbirine Haber Gönderme Sırrı!</text>
      </svg>`,
      caption: "Haber Salma (Zarf Gönderme/Alma) ile Karakterler Arası Diyalog"
    },
    section2: {
      title: "Sayfa ve Sahne Değiştirme (2. Perde)",
      subtitle: "Kahramanımız kapıdan çıkınca yeni bir mekana geçiş yapar.",
      layout: "cards-2",
      cards: [
        {
          title: "Yeni Sayfa Ekleme",
          icon: "📄",
          desc: "Sağ taraftaki sayfa sütunundan:",
          items: [
            { bold: "Artı (+) Butonu", text: "Sağdaki sütundan artıya basarak 2. sahneyi oluştururuz." },
            { bold: "Farklı Mekan", text: "1. sahne ev içi, 2. sahne okul bahçesi olabilir." },
            { bold: "Sayfa Geçiş Bloğu", text: "Kırmızı bloklar arasında üzerinde '2' yazan sayfa geçiş bloğunu kullanırız." }
          ]
        },
        {
          title: "Renk Kodlu Zarflar",
          icon: "📬",
          desc: "Mektupların karışmaması için:",
          items: [
            { bold: "6 Farklı Zarf Rengi", text: "Turuncu, sarı, mavi, yeşil, mor ve kırmızı zarflar." },
            { bold: "Aynı Rengi Eşleştir", text: "Turuncu zarf gönderildiyse karşı taraf da mutlaka turuncu zarfı beklemelidir." },
            { bold: "Kusursuz Tiyatro", text: "Böylece karakterler asla birbirinin sözünü kesmez!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kedi ile Köpeğin Sohbeti'",
      subtitle: "Zarf bloklarıyla kedinin soru sorduğu, köpeğin ise cevap verdiği tiyatroyu kodluyoruz.",
      steps: [
        { title: "2 Karakter Koy", desc: "Sahneye Kedi ve Köpek karakterlerini karşılıklı yerleştirin." },
        { title: "Kediye Soru ve Zarf Yaz", desc: "Kediye: [Yeşil Bayrak] ➔ [Konuş: 'Parka gidelim mi?'] ➔ [Turuncu Zarf Gönder]." },
        { title: "Köpeğe Cevap Yaz", desc: "Köpeğe: [Turuncu Zarf Alınca] ➔ [Konuş: 'Evet, harika fikir!'] ➔ [Zıpla: 3]." }
      ],
      criteria: [
        "Zarf gönderme ve alma bloklarını doğru renkle eşleştirebilme",
        "Karakterler arasında senkronize bir diyalog kurabilme",
        "Çoklu sayfa geçiş bloğunu başarıyla deneyimleme"
      ]
    },
    tips: {
      safetyTitle: "İletişim Ustası Kuralları",
      safetyRules: [
        { bold: "Zarf Renklerine Dikkat", text: "Kedi turuncu zarf atıp köpek mavi zarf beklerse köpek asla konuşmaz; renkler birebir aynı olmalıdır!" },
        { bold: "Konuşma Süresi", text: "Karakterlerin konuşma balonları birkaç saniye ekranda kalır, hemen kaybolmaz." },
        { bold: "Tiyatro Oyunu Gibi", text: "Tıpkı okul tiyatrosundaki gibi rol sırasını zarflarla yönetiriz." }
      ],
      myths: [
        { wrong: "İki karakterin aynı anda konuşması daha iyidir.", correct: "Gerçek hayatta da kodlamada da sırayla konuşmak iletişimin en temel nezaket kuralıdır." }
      ]
    },
    quiz: {
      question: "ScratchJr'da birinci karakter konuşmasını bitirdikten sonra ikinci karakterin söze başlamasını sağlamak için hangi mekanizma kullanılır?",
      options: [
        { text: "A) Bilgisayarı kapatıp açmak", isCorrect: false },
        { text: "B) Renkli Zarf Gönderme ve Zarf Alma (Haberleşme) blokları", isCorrect: true },
        { text: "C) Karakterleri sahneden silmek", isCorrect: false },
        { text: "D) Sadece fareye hızlıca tıklamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Zarf blokları (mektuplar), karakterlerin birbirine 'benim sözüm bitti, şimdi sıra sende!' mesajı göndermesini sağlar."
    },
    summaryRules: [
      { bold: "Zarflar", text: "Karakterlerin görünmez telsiz telefonudur." },
      { bold: "Sırayla Konuşma", text: "Hem kodlamada hem hayatta en güzel iletişim yoludur." },
      { bold: "Gelecek Hafta", text: "10-16 Mayıs Engelliler Haftası: Sesli ve Görsel Yardımcı Asistanım!" }
    ],
    homework: "ScratchJr'da kedi ile tavşanın zarf kullanarak selamlaştığı mini bir diyalog hazırlayın.",
    nextWeekPreview: "10-16 Mayıs Engelliler Haftası: İşaret Dili ve Sesli Yardımcı Karakter Projesi!"
  },

  // 35. HAFTA
  {
    week: 35,
    date: "10 - 16 Mayıs",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Engelliler Haftası: Sesli ve Görsel Yardımcı Asistan",
    subtitle: "Empati ve Dayanışma: Engelli Bireyler İçin Hayatı Kolaylaştıran Kodlar",
    outcomeCode: "BTY.2.5.8 (Sosyal Sorumluluk & Kapsayıcı Tasarım)",
    targetSkill: "Empati Duygusu Geliştirme, Özel Gereksinimli Bireyler İçin Teknolojik Çözümler Tasarlama",
    curiosityQuestion: "Gözleri görmeyen bir arkadaşımız bilgisayarı nasıl kullanır? Teknoloji engelleri nasıl kaldırır?",
    roadmap: [
      { title: "Engelliler Haftası (10-16 Mayıs)", desc: "Farkındalık, empati, sevgi ve dayanışma haftası." },
      { title: "Yardımcı Teknolojiler", desc: "Ekran okuyucular, sesli asistanlar ve akıllı bastonlar." },
      { title: "Sesli Buton Projesi", desc: "Gözleri görmeyen biri için basıldığında sesle tarif eden kod." },
      { title: "Büyük Yazı ve Semboller", desc: "İşitme ve görme kolaylığı sağlayan renkli tasarımlar." }
    ],
    section1: {
      title: "Teknoloji Engelleri Kaldırır!",
      subtitle: "Kodlarımızla dünyayı herkes için daha erişilebilir ve mutlu bir yer yapabiliriz.",
      layout: "split-visual",
      card: {
        title: "Yardımcı Teknolojik Mucizeler",
        icon: "🤝",
        desc: "Özel gereksinimli bireylerin süper yardımcıları:",
        items: [
          { bold: "Ekran Okuyucu Programlar", text: "Ekranda yazan yazıları sesli olarak okuyarak görme engelli bireylere rehberlik eder." },
          { bold: "Alt Yazılar ve İşaret Dili", text: "İşitme engelli arkadaşlarımızın videoları kolayca anlamasını sağlar." },
          { bold: "Akıllı Baston (WeWalk)", text: "Sensörleriyle önündeki engelleri ve çukurları haber veren Türk buluşu baston." },
          { bold: "Sesli Asistanlar", text: "'Işıkları aç', 'Kapıyı kapat' gibi komutlarla hayatı kolaylaştırır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Kalp ve Dayanışma Eli -->
        <circle cx="210" cy="100" r="50" fill="#047857" fill-opacity="0.3" stroke="#34d399" stroke-width="3"/>
        <text x="210" y="112" font-size="40" text-anchor="middle">🤝</text>
        <!-- Yardımcı Asistan Simgeleri -->
        <rect x="55" y="60" width="80" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="95" y="90" font-size="20" text-anchor="middle">👁️</text>
        <text x="95" y="115" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Sesli Okuyucu</text>
        
        <rect x="285" y="60" width="80" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="325" y="90" font-size="20" text-anchor="middle">🦻</text>
        <text x="325" y="115" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Görsel İşaret</text>
        
        <rect x="60" y="175" width="300" height="30" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="210" y="195" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">10 - 16 Mayıs: Sevgi Varsa Engel Yoktur!</text>
      </svg>`,
      caption: "Erişilebilir Bilişim ve Yardımcı Asistan Teknolojileri"
    },
    section2: {
      title: "Bizim Kodlayacağımız Yardımcı Asistan",
      subtitle: "Karaktere dokunulduğunda hem sesle yol tarif etsin hem de görsel göstersin.",
      layout: "cards-2",
      cards: [
        {
          title: "Sesli Asistan Robotu",
          icon: "🎙️",
          desc: "Görme engelli bir arkadaşımız için:",
          items: [
            { bold: "Dokunma Tetikleyicisi", text: "Sarı 'Karaktere Dokunulunca' bloğunu kullanırız." },
            { bold: "Sesli Yol Tarifi", text: "Mikrofonla 'Dikkat, önünüzde 3 basamaklı merdiven var!' kaydını oynatırız." },
            { bold: "Büyük Düğmeler", text: "Kolay bulunması için ekranda dev boyutlu butonlar tasarlarız." }
          ]
        },
        {
          title: "Empati ve İyilik Bilişimi",
          icon: "❤️",
          desc: "Yazılımcı olmanın en asil amacı:",
          items: [
            { bold: "İnsanlığa Hizmet", text: "Yazılımlar sadece oyun için değil, insanların hayatını kolaylaştırmak içindir." },
            { bold: "Herkes İçin Tasarım", text: "Renk körleri için zıt renkler, işitme engelliler için balonlar ekleriz." },
            { bold: "Büyük Kalpli Mühendisler", text: "Geleceğin teknolojilerini empati duygusuyla inşa ederiz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Sesli Asistanım Yanımda'",
      subtitle: "ScratchJr'da tıklandığında sesle etrafını tarif eden bir akıllı asistan karakteri kodluyoruz.",
      steps: [
        { title: "Büyük Bir Buton Çiz", desc: "Çizim editöründe kocaman mavi bir 'Yardım' butonu çizin." },
        { title: "Dokunma Bloğunu Tak", desc: "Sarı 'Karaktere Dokunulunca' bloğunu en başa koyun." },
        { title: "Sesli Mesajını Kaydet", desc: "Mikrofonla 'Hoş geldiniz, kütüphaneye gitmek için düz yürüyün' mesajını bağlayın." }
      ],
      criteria: [
        "Erişilebilirlik ve empati bilincini projeye yansıtabilme",
        "Dokunma tetikleyicisiyle ses kaydını eşleştirebilme",
        "Engelliler Haftası'nın önemini kavrama"
      ]
    },
    tips: {
      safetyTitle: "Erişilebilirlik Tüyoları",
      safetyRules: [
        { bold: "Zıt Renkler Kullan", text: "Az gören bireylerin fark edebilmesi için siyah zemin üzerine sarı butonlar koyun." },
        { bold: "Sadece Görüntüye Güvenme", text: "Önemli uyarıları mutlaka sesli bir 'bip' veya konuşma ile destekleyin." },
        { bold: "Empati Kur", text: "Gözlerinizi 1 dakika kapatıp bilgisayarı kullanmanın nasıl bir his olduğunu deneyimleyin." }
      ],
      myths: [
        { wrong: "Engelli bireyler bilgisayar veya akıllı telefon kullanamaz.", correct: "Geliştirilen akıllı ekran okuyucular ve dokunmatik cihazlar sayesinde engelli bireyler bilgisayarı harika şekilde kullanabilir!" }
      ]
    },
    quiz: {
      question: "Görme engelli bir bireyin bilgisayardaki yazıları rahatça anlayabilmesi için hangi teknoloji kullanılır?",
      options: [
        { text: "A) Ekran Okuyucu (Yazıları sese dönüştüren) programlar", isCorrect: true },
        { text: "B) Ekranı tamamen kapatmak", isCorrect: false },
        { text: "C) Bilgisayarın klavyesini sökmek", isCorrect: false },
        { text: "D) Sadece oyun oynamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: A!</strong> Ekran okuyucular, ekrandaki tüm metinleri seslendirerek görme engelli bireylerin dünyayla iletişim kurmasını sağlar."
    },
    summaryRules: [
      { bold: "Empati", text: "Kendimizi başkasının yerine koyup onun dünyasını anlamaktır." },
      { bold: "Erişilebilirlik", text: "Teknolojinin herkes için kolay ve engelsiz olmasıdır." },
      { bold: "10-16 Mayıs", text: "Engelleri sevgi ve teknolojiyle aşma haftasıdır." }
    ],
    homework: "Evinizde engelli bireylerin hayatını kolaylaştıracak hayali bir robot icat edip defterinize resmini çizin.",
    nextWeekPreview: "19 Mayıs Gençlik ve Spor Bayramı: Mini Labirent Oyunu ve Yıldız Toplama!"
  },

  // 36. HAFTA
  {
    week: 36,
    date: "17 - 23 Mayıs",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "19 Mayıs Spor Bayramı: Mini Labirent Oyunu",
    subtitle: "Hedefe Ulaşınca Yıldız Kazan! Karakterin Duvarlara Çarpmadan İlerlemesi",
    outcomeCode: "BTY.2.5.9 (Oyunlaştırma & Çarpışma Algısı)",
    targetSkill: "Etkileşimli Mini Oyun Mekaniği Kurma, Çarpışma Algısı ve Skor Puanı Mantığını Anlama",
    curiosityQuestion: "Bilgisayar oyunlarında karakterimiz bir elmaya veya yıldıza dokunduğunda yıldız nasıl yok olur ve puan kazanırız?",
    roadmap: [
      { title: "19 Mayıs Ruhu", desc: "Atatürk'ü Anma, Gençlik ve Spor Bayramı'nın enerjisi." },
      { title: "Oyun Tasarımı", desc: "Labirent koridorları, toplanacak ödüller ve bitiş çizgisi." },
      { title: "Çarpışma Algısı (Dokununca)", desc: "İki karakter birbirine değince çalışan kodlar." },
      { title: "Kaybol ve Ses Çal", desc: "Yıldızı toplayınca 'Pop' sesiyle yıldızın gizlenmesi." }
    ],
    section1: {
      title: "Oyunlaştırmanın Kalbi: Çarpışma Algısı",
      subtitle: "Karakterimiz ödüllere dokunduğunda puan kazanır, engellere dokununca başa döner.",
      layout: "split-visual",
      card: {
        title: "Mini Oyunun Kuralları",
        icon: "🎮",
        desc: "Labirent oyunumuzun çalışma mekanizması:",
        items: [
          { bold: "1. Oyuncu Karakteri", text: "Ok tuşlarıyla veya dokunarak kontrol ettiğimiz sporcu karakterimiz." },
          { bold: "2. Altın Yıldızlar", text: "Labirentin içine serpiştirdiğimiz toplanabilir ödüller." },
          { bold: "3. 'Dokununca Gizle' Bloğu", text: "Yıldıza kedi çarptığında yıldızın kodu: [Çarpışınca] ➔ [Ses Çal] ➔ [Gizlen]." },
          { bold: "4. Kupa ve Zafer", text: "Labirentin sonundaki şampiyonluk kupasına ulaşınca 'Tebrikler!' yazısı." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
        <!-- Labirent Yolu -->
        <path d="M50 70 H220 V130 H320 V190 H370" stroke="#334155" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50 70 H220 V130 H320 V190 H370" stroke="#0f172a" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Koşan Çocuk -->
        <circle cx="60" cy="70" r="16" fill="#38bdf8"/>
        <text x="60" y="76" font-size="14" text-anchor="middle">🏃</text>
        <!-- Yol Üstündeki Yıldızlar -->
        <text x="170" y="76" font-size="18" text-anchor="middle">⭐</text>
        <text x="220" y="136" font-size="18" text-anchor="middle">⭐</text>
        <!-- Bitiş Kupası -->
        <text x="360" y="196" font-size="22" text-anchor="middle">🏆</text>
        <!-- Çarpışma Bloğu -->
        <rect x="70" y="185" width="280" height="28" rx="6" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
        <text x="210" y="204" fill="#e0e7ff" font-size="11" font-weight="bold" text-anchor="middle">19 Mayıs: Sağlam Kafa Sağlam Vücutta Bulunur!</text>
      </svg>`,
      caption: "Çarpışma Algısı ve Ödül Toplama Mekaniği ile Mini Oyun"
    },
    section2: {
      title: "19 Mayıs ve Sporun Gücü",
      subtitle: "Gazi Mustafa Kemal Atatürk'ün Samsun'da yaktığı bağımsızlık meşalesi.",
      layout: "cards-2",
      cards: [
        {
          title: "Gençlik ve Spor Ruhu",
          icon: "🔥",
          desc: "19 Mayıs 1919'un anlamı:",
          items: [
            { bold: "Milli Mücadelenin Başlangıcı", text: "Atatürk'ün Bandırma Vapuru ile Samsun'a ayak bastığı tarihi gün." },
            { bold: "Spor ve Sağlık", text: "Düzenli spor yapmak hem zihnimizi hem de bedenimizi dinç tutar." },
            { bold: "Gençliğe Armağan", text: "Ülkemizin geleceği gençlerin ve çocukların enerjisine emanettir." }
          ]
        },
        {
          title: "Oyun Tasarımcısı Olmak",
          icon: "🕹️",
          desc: "Sadece oyun oynayan değil, oyun yapan olmak:",
          items: [
            { bold: "Kural Koyucu", text: "Oyunun kurallarını, zorluğunu ve ödüllerini siz belirlersiniz." },
            { bold: "Mücadele Sevinci", text: "Arkadaşlarınız sizin kodladığınız oyunu oynarken büyük keyif alır." },
            { bold: "Geliştirme", text: "Yeni seviyeler ve engeller ekleyerek oyunu büyütebilirsiniz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Yıldız Toplama Şampiyonası'",
      subtitle: "ScratchJr'da labirent içindeki 3 yıldızı toplayıp kupaya ulaşan mini bir oyun kodluyoruz.",
      steps: [
        { title: "Labirent Çiz", desc: "Paint veya ScratchJr arka planında basit bir labirent yolu çizin." },
        { title: "Yıldızlara Çarpışma Kodu Yaz", desc: "Yıldıza: [Karakter Dokununca] ➔ [Pop Sesi] ➔ [Gizlen] bloğu koyun." },
        { title: "Karakteri Yürüt", desc: "Ok butonlarıyla karakteri yıldızların üzerinden geçirip kupaya ulaştırın." }
      ],
      criteria: [
        "Çarpışma (dokunma) tetikleyicisini doğru kullanabilme",
        "Ödül toplama animasyonunu ses ve gizlenme ile tamamlayabilme",
        "19 Mayıs Atatürk'ü Anma Gençlik ve Spor Bayramı ruhunu yansıtma"
      ]
    },
    tips: {
      safetyTitle: "Oyun Tasarımcısı Tüyoları",
      safetyRules: [
        { bold: "Geri Getir Bloğu", text: "Toplanan yıldızlar gizlendikten sonra oyunu baştan başlatırken 'Göster' bloğunu koymayı unutmayın!" },
        { bold: "Oyun Çok Zor Olmasın", text: "Yolları çok dar yaparsanız karakter duvara sıkışabilir; geçiş alanlarını ferah bırakın." },
        { bold: "Sporu Unutma", text: "Bilgisayarda spor oyunu kodlasak da gerçek hayatta her gün bahçede koşup oynamayı ihmal etmeyin." }
      ],
      myths: [
        { wrong: "Bir bilgisayar oyunu yapmak için yüz kişilik bir şirket olmak gerekir.", correct: "En popüler oyunların pek çoğu tek bir kişinin hayal gücü ve basit kodlama bloklarıyla başlamıştır!" }
      ]
    },
    quiz: {
      question: "ScratchJr'da bir nesnenin (örneğin altın yıldızın) kahramanımız ona dokunduğunda ekrandan kaybolması için hangi mor blok kullanılır?",
      options: [
        { text: "A) Büyüt Bloğu", isCorrect: false },
        { text: "B) Gizle (Gözü Kapalı Adam) Bloğu", isCorrect: true },
        { text: "C) Sağa Dön Bloğu", isCorrect: false },
        { text: "D) Sarı Bayrak Bloğu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Mor renkli 'Gizle' bloğu, nesneyi görünmez yapar; böylece oyuncu ödülü toplamış gibi hisseder."
    },
    summaryRules: [
      { bold: "Çarpışma", text: "Karakterlerin birbirine değdiğini algılama gücüdür." },
      { bold: "Oyun Tasarımı", text: "Tüketici değil, hayal gücünü yöneten üretici olmaktır." },
      { bold: "19 Mayıs", text: "Gençliğin, sporun ve bağımsızlık meşalesinin bayramıdır." }
    ],
    homework: "ScratchJr'da hazırladığınız labirent oyununu ailenizden birine oynatıp kaç saniyede bitirdiğini ölçün.",
    nextWeekPreview: "Robotlar ve Akıllı Cihazlar Nasıl Düşünür? Sensörler ve Sıfır Atık Kutuları!"
  },

  // 37. HAFTA
  {
    week: 37,
    date: "24 - 30 Mayıs",
    hours: "2 Ders Saati",
    unit: "6. Tema: Akıllı Teknolojiler, Yapay Zekâ ve Bilişim Şenliği",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Robotlar Nasıl Düşünür? Sensörler ve Sıfır Atık",
    subtitle: "Gözlerimiz Gibi Kamera, Kulaklarımız Gibi Mikrofon: Çevremizi Koruyan Akıllı Kutular",
    outcomeCode: "BTY.2.6.1 (Sensörler & Çevre Duyarlılığı)",
    targetSkill: "Robotların Çalışma Mantığını (Sensör-Beyin-Motor) Anlama, Sıfır Atık Bilinci Geliştirme",
    curiosityQuestion: "Alışveriş merkezine girdiğimizde cam kapı bizi nasıl görüp de kendiliğinden açılır?",
    roadmap: [
      { title: "Robot Nedir?", desc: "Duyargaları (sensörleri) ile dünyayı algılayan akıllı makineler." },
      { title: "Sensörler (Duyargalar)", desc: "Mesafe, ışık, ses ve sıcaklık sensörlerinin görevleri." },
      { title: "Akıllı Karar Mekanizması", desc: "Algıla ➔ Düşün (İşlemci) ➔ Hareket Et (Motor)." },
      { title: "Sıfır Atık Kutusu Projesi", desc: "Plastiği görünce sarı kapağı, kağıdı görünce mavi kapağı açan robot kutu." }
    ],
    section1: {
      title: "Robotların 3 Harika Organı",
      subtitle: "Robotlar da tıpkı insanlar gibi duyar, düşünür ve hareket eder.",
      layout: "split-visual",
      card: {
        title: "İnsan ve Robot Benzerliği",
        icon: "🤖",
        desc: "Robotların çalışma sistemi:",
        items: [
          { bold: "1. Sensörler (Duyularımız)", text: "Kamera (Göz), Mikrofon (Kulak), Dokunma Sensörü (Deri), Mesafe Sensörü (Göz mesafesi)." },
          { bold: "2. Beyin / Mikrodenetleyici (Zihnimiz)", text: "Sensörden gelen bilgiyi okur ve 'Ne yapmalıyım?' diye kodları çalıştırır." },
          { bold: "3. Motorlar ve Çarklar (Kollar ve Bacaklar)", text: "Tekerlekleri döndürür, kolları kaldırır, kapakları açar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
        <!-- 3 Aşama Kutusu -->
        <!-- 1. Sensör -->
        <rect x="35" y="60" width="95" height="110" rx="10" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
        <text x="82" y="85" font-size="24" text-anchor="middle">👁️</text>
        <text x="82" y="115" fill="#e0f2fe" font-size="11" font-weight="bold" text-anchor="middle">SENSÖR</text>
        <text x="82" y="135" fill="#94a3b8" font-size="9" text-anchor="middle">(Algılar / Görür)</text>
        
        <path d="M135 115 H155" stroke="#06b6d4" stroke-width="3" marker-end="url(#arrow)"/>
        
        <!-- 2. Beyin (Çip) -->
        <rect x="160" y="60" width="100" height="110" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
        <text x="210" y="85" font-size="24" text-anchor="middle">🧠</text>
        <text x="210" y="115" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">BEYİN (ÇİP)</text>
        <text x="210" y="135" fill="#94a3b8" font-size="9" text-anchor="middle">(Karar Verir)</text>
        
        <path d="M265 115 H285" stroke="#34d399" stroke-width="3" marker-end="url(#arrow)"/>

        <!-- 3. Motor -->
        <rect x="290" y="60" width="95" height="110" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="337" y="85" font-size="24" text-anchor="middle">⚙️</text>
        <text x="337" y="115" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">MOTOR</text>
        <text x="337" y="135" fill="#94a3b8" font-size="9" text-anchor="middle">(Harekete Geçer)</text>
        
        <text x="210" y="205" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">Robot Düsturu: Algıla ➔ Düşün ➔ Harekete Geç!</text>
      </svg>`,
      caption: "Robotların Temel Çalışma Döngüsü: Sensör, İşlemci ve Motor"
    },
    section2: {
      title: "Sıfır Atık: Doğayı Koruyan Akıllı Robotlar",
      subtitle: "Geleceğin temiz dünyasını akıllı geri dönüşüm kutularıyla kuruyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Akıllı Geri Dönüşüm Kutusu",
          icon: "♻️",
          desc: "Sensörlü kutumuz nasıl çalışır?",
          items: [
            { bold: "Mesafe Sensörü", text: "Elimizde bir atıkla yaklaştığımızı fark eder." },
            { bold: "Kamera / Renk Sensörü", text: "Atığın plastik mi, cam mı yoksa kağıt mı olduğunu anlar." },
            { bold: "Kapağı Açar", text: "Doğru bölmenin kapağını otomatik açıp 'Teşekkür ederim!' der." }
          ]
        },
        {
          title: "Sıfır Atık Alışkanlığı",
          icon: "🌱",
          desc: "Her bilinçli çocuğun görevi:",
          items: [
            { bold: "Gereksiz Tüketimi Azalt", text: "Tek kullanımlık plastik bardak ve poşetleri kullanmayın." },
            { bold: "Yeniden Kullan", text: "Kavanozları ve kutuları kalemlik olarak değerlendirin." },
            { bold: "Geri Dönüştür", text: "Kağıt, cam ve pilleri asla evsel çöpe karıştırmayın." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Akıllı Çöp Kutusu Simülasyonu'",
      subtitle: "ScratchJr'da çöp yaklaştığında kapağını açan ve teşekkür eden bir kutu kodluyoruz.",
      steps: [
        { title: "Çöp Kovası Çiz", desc: "Mavi bir geri dönüşüm kutusu ve bir plastik şişe çizin." },
        { title: "Şişeyi Yaklaştır", desc: "Şişeye sağa doğru yürüme kodu verin." },
        { title: "Kutuya Kod Ver", desc: "Kutuya: [Şişe Dokununca] ➔ [Kapağı Aç] ➔ [Konuş: 'Doğayı Kurtardın!']." }
      ],
      criteria: [
        "Sensör ve motor ilişkisini somutlaştırabilme",
        "Çevre ve sıfır atık duyarlılığını kodlama projesine yansıtma",
        "Dokunma etkileşimini doğru kurgulayabilme"
      ]
    },
    tips: {
      safetyTitle: "Doğa Dostu Bilişimci Öğütleri",
      safetyRules: [
        { bold: "Elektronik Atıkları Sakla", text: "Biten pilleri ve bozuk kabloları çöpe atmayın; okulun atık pil kutusuna teslim edin." },
        { bold: "Gereksiz Işıkları Kapat", text: "Bilgisayarla işiniz bittiğinde monitörü ve prizi kapatıp enerji tasarrufu yapın." },
        { bold: "Kağıt İsrafını Önle", text: "Yazıcıdan sadece gerçekten ihtiyacınız olduğunda çıktı alın." }
      ],
      myths: [
        { wrong: "Robotlar insanlardan daha zekidir ve dünyayı ele geçirecektir.", correct: "Robotlar kendi başlarına hiçbir şey yapamazlar; sadece insanların yazdığı kodları harfiyen uygulayan yardımcı araçlardır." }
      ]
    },
    quiz: {
      question: "Otomatik kapıların biz yaklaştığımızda bizi görüp kendiliğinden açılmasını sağlayan robot organı hangisidir?",
      options: [
        { text: "A) Sensör (Duyarga / Algılayıcı)", isCorrect: true },
        { text: "B) Bilgisayar Faresi", isCorrect: false },
        { text: "C) Yazıcı", isCorrect: false },
        { text: "D) Not Defteri", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Hareket ve mesafe sensörleri insanların yaklaştığını algılar ve motora 'kapıyı aç' emrini verir."
    },
    summaryRules: [
      { bold: "Sensörler", text: "Robotların çevreye bakan gözleri ve kulaklarıdır." },
      { bold: "İşlemci", text: "Gelen bilgiyi değerlendirip motoru çalıştırır." },
      { bold: "Sıfır Atık", text: "Teknolojiyle doğayı koruma seferberliğidir." }
    ],
    homework: "Evinizde veya çevrenizde gördüğünüz 2 tane sensörlü cihazı (otomatik musluk, sokak lambası vb.) bulun ve nasıl çalıştığını defterinize yazın.",
    nextWeekPreview: "Yapay Zekâ Nedir? Bilgisayarlar Resimleri ve Sesleri Nasıl Tanır?"
  },

  // 38. HAFTA
  {
    week: 38,
    date: "31 Mayıs - 06 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Akıllı Teknolojiler, Yapay Zekâ ve Bilişim Şenliği",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Yapay Zekâ Nedir? Bilgisayarlar Nasıl Öğrenir?",
    subtitle: "Meyveleri ve Hayvanları Tanıyan Akıllı Sistemler ile Eğlenceli Deneyler",
    outcomeCode: "BTY.2.6.2 (Yapay Zekâ Farkındalığı)",
    targetSkill: "Yapay Zekânın Temel Mantığını (Veri ile Öğrenme) Kavrama ve Günlük Hayattaki Örneklerini Tanıma",
    curiosityQuestion: "Bilgisayara 100 tane kedi resmi gösterirsek, 101. resmi gösterdiğimizde onun kedi olduğunu nereden bilir?",
    roadmap: [
      { title: "Yapay Zekâ (AI) Nedir?", desc: "İnsan aklını ve öğrenmesini taklit eden akıllı yazılımlar." },
      { title: "Örneklerle Öğrenme", desc: "Tıpkı bebeklerin öğrenmesi gibi bilgisayara resimler ve sesler öğretme." },
      { title: "Görsel Tanıma Oyunu", desc: "Kameraya elma gösterince 'Bu bir elma!' diyen akıllı program." },
      { title: "Yapay Zekânın İyiliği", desc: "Doktorlara yardım eden, çevreyi temizleyen iyi kalpli yapay zekâlar." }
    ],
    section1: {
      title: "Bilgisayarlar Nasıl Öğrenir? Veri Eğitimi",
      subtitle: "Bilgisayara binlerce fotoğraf gösteririz; aralarındaki benzerlikleri keşfeder.",
      layout: "split-visual",
      card: {
        title: "Yapay Zekânın Öğrenme Adımları",
        icon: "🧠",
        desc: "Bir yapay zekâyı eğitirken yapılanlar:",
        items: [
          { bold: "1. Çok Sayıda Örnek (Veri)", text: "Bilgisayara yüzlerce kedi ve yüzlerce köpek fotoğrafı gösteririz." },
          { bold: "2. Ortak Özellikleri Bulur", text: "Kedilerin sivri kulaklarını, bıyıklarını ve göz yapısını inceler." },
          { bold: "3. Test Aşaması", text: "Önüne daha önce hiç görmediği yepyeni bir kedi resmi koyarız." },
          { bold: "4. Tahmin Eder", text: "'Bıyıkları ve kulakları benziyor, bu kesinlikle %99 bir kedi!' der." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- Sol: Veri Havuzu -->
        <rect x="40" y="55" width="90" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="85" y="85" font-size="20" text-anchor="middle">🍎 🍌 🍇</text>
        <text x="85" y="115" font-size="20" text-anchor="middle">🍓 🍊 🍉</text>
        <text x="85" y="145" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Örnek Resimler</text>
        
        <path d="M140 110 H175" stroke="#a855f7" stroke-width="3" marker-end="url(#arrow)"/>
        
        <!-- Merkez: Yapay Zeka Çipi -->
        <circle cx="210" cy="110" r="35" fill="#4c1d95" stroke="#c084fc" stroke-width="2.5"/>
        <text x="210" y="118" font-size="24" text-anchor="middle">✨AI</text>
        
        <path d="M245 110 H280" stroke="#a855f7" stroke-width="3" marker-end="url(#arrow)"/>

        <!-- Sağ: Tanıma / Sonuç -->
        <rect x="290" y="55" width="95" height="110" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <text x="337" y="90" font-size="28" text-anchor="middle">🍎</text>
        <text x="337" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">"ELMA!"</text>
        <text x="337" y="145" fill="#a7f3d0" font-size="9" text-anchor="middle">%99 Doğruluk</text>
        
        <text x="210" y="205" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">Yapay Zekâ: Bol Örnek Görerek Öğrenen Akıllı Yazılım!</text>
      </svg>`,
      caption: "Yapay Zekânın Verilerle Eğitilip Nesneleri Tanıma Süreci"
    },
    section2: {
      title: "Yapay Zekâ Günlük Hayatımızda Nerede?",
      subtitle: "Farkında olmadan her gün yapay zekâ ile karşılaşıyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Hayatımızdaki Örnekler",
          icon: "💡",
          desc: "Her gün karşımıza çıkan akıllı sistemler:",
          items: [
            { bold: "Sesli Asistanlar", text: "Siri veya Asistan'a 'Bugün hava nasıl?' dediğimizde sesimizi anlar." },
            { bold: "Harita ve Navigasyon", text: "Trafiğin yoğun olduğu yerleri önceden tahmin edip bizi boş yoldan götürür." },
            { bold: "Fotoğraf Filtreleri", text: "Yüzümüzün nerede olduğunu bulup burnumuza kedi bıyığı takar." }
          ]
        },
        {
          title: "Geleceğin İyilik Yapay Zekâsı",
          icon: "🏥",
          desc: "İnsanlığa yardım eden projeler:",
          items: [
            { bold: "Hastalıkları Erken Teşhis", text: "Röntgen filmlerini saniyeler içinde inceleyip doktorlara yardımcı olur." },
            { bold: "Orman Yangınlarını Önleme", text: "Uydulardan dumanı ilk saniyede fark edip itfaiyeyi uyarır." },
            { bold: "Kendi Kendine Giden Arabalar", text: "Trafik kazalarını önleyen sürücüsüz araçlar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Akıllı Kamera Deneyi'",
      subtitle: "Web kamerasını kullanarak 'Teachable Machine' veya hazır yapay zekâ aracıyla nesne tanıtıyoruz.",
      steps: [
        { title: "Kamerayı Aç", desc: "Öğretmeninizin tahtada açtığı görsel tanıma aracına bakın." },
        { title: "Kalem ve Silgiyi Tanıt", desc: "Kameraya kalemi gösterip 'Kalem', silgiyi gösterip 'Silgi' diye etiketleyin." },
        { title: "Yapay Zekâyı Test Et", desc: "Farklı bir kalem gösterin ve yapay zekânın doğru bilmesini sınıfça kutlayın!" }
      ],
      criteria: [
        "Yapay zekânın örneklerle öğrendiğini kavrayabilme",
        "Veri miktarı arttıkça yapay zekânın daha doğru bildiğini fark etme",
        "Yapay zekânın insan kontrolünde bir araç olduğunu anlama"
      ]
    },
    tips: {
      safetyTitle: "Geleceğin Bilişimcisi Tavsiyeleri",
      safetyRules: [
        { bold: "Yapay Zekâ Sihir Değildir", text: "Yapay zekâ sihir değil, matematik ve bilgisayar kodudur." },
        { bold: "İnsan Aklı En Değerlisidir", text: "Yapay zekâ sadece yardımcıdır; sevgi, empati ve vicdan yalnız insanlara aittir." },
        { bold: "Öğrenmeye Devam", text: "Geleceğin en iyi yapay zekâlarını sizler kodlayacaksınız!" }
      ],
      myths: [
        { wrong: "Yapay zekâ her şeyi bilir ve asla yanılmaz.", correct: "Yapay zekâya yanlış veya eksik örnekler verirsek yanlış sonuçlar çıkarabilir; bu yüzden denetleyici daima insandır." }
      ]
    },
    quiz: {
      question: "Yapay zekânın bir köpeği diğer hayvanlardan ayırt edebilmesi için aşağıdakilerden hangisi yapılmalıdır?",
      options: [
        { text: "A) Bilgisayara çok sayıda köpek fotoğrafı gösterip eğitmek", isCorrect: true },
        { text: "B) Bilgisayara mama vermek", isCorrect: false },
        { text: "C) Bilgisayarın kamerasını kapatmak", isCorrect: false },
        { text: "D) Hiçbir şey yapmadan beklemek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: A!</strong> Yapay zekâ bol miktarda örnek veri (fotoğraf) görerek öğrenir ve aralarındaki benzerlikleri çözer."
    },
    summaryRules: [
      { bold: "Yapay Zekâ", text: "Verilerden öğrenen akıllı yazılımlardır." },
      { bold: "Örnek Veri", text: "Yapay zekânın ders kitaplarıdır." },
      { bold: "Gelecek Hafta", text: "2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilgi Yarışması!" }
    ],
    homework: "Evinizde yapay zekâ kullanan bir cihaz veya uygulama (sesli asistan, harita vb.) bulup ailesiyle konuşun.",
    nextWeekPreview: "2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilişim ve Kodlama Bilgi Yarışması!"
  },

  // 39. HAFTA
  {
    week: 39,
    date: "07 - 13 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Akıllı Teknolojiler, Yapay Zekâ ve Bilişim Şenliği",
    unitBadge: "2. Dönem 2. Sınav",
    unitTheme: "tema-sinav",
    title: "2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilgi Yarışması",
    subtitle: "Yılın Şampiyon Bilişimcileri: Bütün Konuları İçeren Eğlenceli Bilgi Şöleni",
    outcomeCode: "BTY.2.6.3 (Yıl Sonu Değerlendirme)",
    targetSkill: "Tüm Yılın Bilişim ve Kodlama Becerilerini Ölçme, Takım Ruhu ile Problem Çözme",
    curiosityQuestion: "2. sınıfın başında ilk kez bilgisayar açarken bugün kendi çizgi filmini ve labirent oyununu yapan bir yazılımcı olmak nasıl bir duygu?",
    roadmap: [
      { title: "Büyük Bilişim Arenası", desc: "Donanımdan algoritmaya, ScratchJr'dan yapay zekâya tüm konular." },
      { title: "Grup Yarışması", desc: "Sıra arkadaşıyla birlik olup eğlenceli puanlar toplama." },
      { title: "Kod Bulmacası Çözümü", desc: "Karışık blok dizilimlerini tek hamlede düzeltme." },
      { title: "Yılın Yazılımcıları", desc: "Tüm sınıfa büyük başarı ve gayret ödülleri." }
    ],
    section1: {
      title: "Yılın Büyük Özeti: Bilişim Dağı'nın Zirvesi",
      subtitle: "Eylül'den Haziran'a 41 haftalık muazzam başarı hikayemiz.",
      layout: "split-visual",
      card: {
        title: "2. Sınıf Bilişim Tacımız",
        icon: "👑",
        desc: "Yıl boyu fethettiğimiz 6 büyük tema:",
        items: [
          { bold: "1. Tema (Donanım & Başlatma)", text: "Masaüstü bilgisayarın parçaları, güvenli açma-kapama, klavye ve fare." },
          { bold: "2. Tema (Dijital Sanatlar)", text: "Paint araçları, bayrak çizimi, öğretmenler günü kartı ve klasörler." },
          { bold: "3. Tema (Siber Güvenlik)", text: "Kişisel bilgileri koruma, güçlü şifre kalesi ve dijital ayak izi." },
          { bold: "4. Tema (Algoritma)", text: "Yön okları, labirent çözme, hata ayıklama ve döngüler." },
          { bold: "5. Tema (ScratchJr)", text: "Karakter hareketleri, diyaloglar, danslar ve labirent oyunları." },
          { bold: "6. Tema (Akıllı Teknolojiler)", text: "Robotlar, sensörler, sıfır atık ve yapay zekâ." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
        <!-- Dev Altın Kupa -->
        <path d="M170 50 H250 V100 C250 130, 210 145, 210 145 C210 145, 170 130, 170 100 Z" fill="#f59e0b" stroke="#fbbf24" stroke-width="3"/>
        <!-- Kulplar -->
        <path d="M170 65 C140 65, 140 100, 170 105" stroke="#fbbf24" stroke-width="4" fill="none"/>
        <path d="M250 65 C280 65, 280 100, 250 105" stroke="#fbbf24" stroke-width="4" fill="none"/>
        <!-- Ayak -->
        <rect x="200" y="145" width="20" height="25" fill="#d97706"/>
        <rect x="180" y="170" width="60" height="15" rx="4" fill="#b45309"/>
        <text x="210" y="90" font-size="28" text-anchor="middle">🏆</text>
        <text x="210" y="212" fill="#fde68a" font-size="13" font-weight="900" text-anchor="middle">2. SINIF YILIN ŞAMPİYON BİLİŞİMCİLERİ!</text>
      </svg>`,
      caption: "Yıl Sonu Büyük Bilişim ve Kodlama Şampiyonluk Kupası"
    },
    section2: {
      title: "Büyük Final Soruları: Kendini Sına!",
      subtitle: "Yıl boyunca edindiğimiz süper güçleri hatırlayalım:",
      layout: "cards-2",
      cards: [
        {
          title: "Kodlama Soru Köşesi",
          icon: "💡",
          desc: "Hızlı mantık soruları:",
          items: [
            { bold: "Soru 1", text: "Bir hareketi 10 kere tekrar ettirmek için hangi bloğu kullanırız? (Döngü Bloğu)" },
            { bold: "Soru 2", text: "Koddaki yanlışlığı bulup düzeltmeye ne ad verilir? (Debugging)" },
            { bold: "Soru 3", text: "Karaktere tıklandığında kodları ne başlatır? (Sarı Dokunma Bloğu)" }
          ]
        },
        {
          title: "Güvenlik ve Donanım Köşesi",
          icon: "🛡️",
          desc: "Bilinçli teknoloji soruları:",
          items: [
            { bold: "Soru 4", text: "Bilgisayarın düşünen ve hesaplayan beyni neresidir? (Kasa / İşlemci)" },
            { bold: "Soru 5", text: "İnternette yabancılara söylenmemesi gereken 2 şey? (Adres ve Telefon)" },
            { bold: "Soru 6", text: "Robotların çevreyi görmesini sağlayan parça? (Sensör)" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Yıl Sonu Bilgi Şöleni'",
      subtitle: "Akıllı tahtada açılan 10 soruluk interaktif bilgi şölenini sınıfça alkışlarla tamamlıyoruz.",
      steps: [
        { title: "Takım Masalarına Geç", desc: "Arkadaşlarınızla yan yana oturup takımınızı oluşturun." },
        { title: "Soruları Yanıtla", desc: "Tahtada çıkan soruları birlikte düşünüp ortak kararı söyleyin." },
        { title: "Şampiyonluk Dansı Yap", desc: "Yılın son sınavını 100 tam puanla bitirmenin sevincini yaşayın." }
      ],
      criteria: [
        "Yıl boyunca işlenen tüm temalardaki temel kavramlara hakim olma",
        "Takım arkadaşlarıyla yardımlaşarak ortak çözüm üretebilme",
        "Başarıyı kutlama ve kendine güven duyma"
      ]
    },
    tips: {
      safetyTitle: "Büyük Final Tavsiyeleri",
      safetyRules: [
        { bold: "Bütün Soruları İncele", text: "Acele etmeyin; soruyu tam anlayana kadar dikkatle okuyun." },
        { bold: "Emeğinle Gurur Duy", text: "Bu yıl harika bir teknoloji ve kodlama temeli attın." },
        { bold: "Gelecek Hafta Şenlik Var", text: "Haftaya en sevdiğin projeni sınıfa sunacaksın!" }
      ],
      myths: [
        { wrong: "Sınav sadece not almak içindir.", correct: "Değerlendirmeler ne kadar çok şey öğrendiğimizi görüp kendimizle gurur duymamız için bir bayramdır!" }
      ]
    },
    quiz: {
      question: "Bu yıl öğrendiğimiz; 'Adım adım plan yapmak (Algoritma)', 'Hataları düzeltmek (Debug)' ve 'Blokları birleştirmek' bize hangi süper beceriyi kazandırdı?",
      options: [
        { text: "A) Sadece televizyon kumandası kullanmayı", isCorrect: false },
        { text: "B) Bilgisayarca düşünme ve Kodlama (Yazılımcılık) becerisini", isCorrect: true },
        { text: "C) Bütün gün hareketsiz oturmayı", isCorrect: false },
        { text: "D) Klavyenin tuşlarını sökmeyi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Tüm yıl boyunca edindiğimiz bilgiler bize geleceğin yazılımcısı olma süper gücünü kazandırdı!"
    },
    summaryRules: [
      { bold: "Büyük Başarı", text: "Yılın bütün kazanımlarını eksiksiz tamamladık." },
      { bold: "Takım Ruhu", text: "Birlikte öğrenip birlikte başardık." },
      { bold: "Gelecek Hafta", text: "Dijital Portfolyo ve Yıl Sonu Proje Sunumları!" }
    ],
    homework: "Yıl boyunca klasörünüze kaydettiğiniz en sevdiğiniz 2 projeyi haftaya sunmak üzere seçin.",
    nextWeekPreview: "Dijital Portfolyo: Yıl Boyunca Yaptığım Projeleri Sunma (Benim Eserlerim)!"
  },

  // 40. HAFTA
  {
    week: 40,
    date: "14 - 20 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Akıllı Teknolojiler, Yapay Zekâ ve Bilişim Şenliği",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Dijital Portfolyo: Yıl Boyu Yaptığım Projeleri Sunma",
    subtitle: "Benim Eserlerim: Ailemize ve Arkadaşlarımıza Projelerimizi Anlatma ve Paylaşma",
    outcomeCode: "BTY.2.6.4 (Sunum & Dijital Özgüven)",
    targetSkill: "Dijital Portfolyosunu Düzenleme, Yıl Boyunca Ürettiği Eserleri Topluluk Önünde Sunabilme",
    curiosityQuestion: "Bir bilim insanı veya sanatçı yaptığı harika bir icadı dünyaya nasıl tanıtır? Sahne sırası sende!",
    roadmap: [
      { title: "Dijital Portfolyo Nedir?", desc: "Yıl boyu ürettiğimiz en değerli dijital eserlerin vitrini." },
      { title: "Vitrin Seçimi", desc: "En sevdiğimiz 1 resim ve 1 kodlama oyununu seçme." },
      { title: "Sunum Heyecanı", desc: "Tahtaya çıkıp 'Bu projede ne yaptım, hangi blokları kullandım?' diye anlatma." },
      { title: "Alkış ve Tebrik", desc: "Arkadaşlarının başarılarını yürekten kutlama." }
    ],
    section1: {
      title: "Minik Yazılımcının Sahne Zamanı: Sunum Sanatı",
      subtitle: "Projelerimizi anlatırken göz teması kurar, sesimizi net ve güler yüzlü kullanırız.",
      layout: "split-visual",
      card: {
        title: "Harika Bir Sunumun 4 Adımı",
        icon: "🎤",
        desc: "Tahtada projemizi tanıtırken:",
        items: [
          { bold: "1. Selamlama ve Tanıtım", text: "'Merhaba öğretmenim ve arkadaşlarım, benim adım...' diyerek söze başlarız." },
          { bold: "2. Projenin Amacı", text: "'Bugün size ScratchJr'da kodladığım dans eden kediyi ve labirent oyunumu göstereceğim' deriz." },
          { bold: "3. Hangi Blokları Kullandım?", text: "'Burada turuncu döngü bloğuyla kediyi zıplattım, yeşil bayrakla başlattım' diye anlatırız." },
          { bold: "4. Teşekkür Etme", text: "'Beni dinlediğiniz için teşekkür ederim' diyerek sözümüzü tamamlarız." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
        <!-- Sunum Yapan Öğrenci Kürsüsü -->
        <rect x="70" y="130" width="70" height="75" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
        <!-- Mikrofon -->
        <line x1="105" y1="130" x2="105" y2="105" stroke="#94a3b8" stroke-width="4"/>
        <circle cx="105" cy="100" r="8" fill="#f43f5e"/>
        <!-- Öğrenci -->
        <circle cx="105" cy="65" r="18" fill="#38bdf8"/>
        <path d="M105 83 V130" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
        <!-- Akıllı Tahta Ekranı (Arka Planda Eseri Gösteriyor) -->
        <rect x="180" y="45" width="190" height="130" rx="8" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="2"/>
        <text x="275" y="75" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">BENİM KODLAMA PROJEM</text>
        <circle cx="240" cy="115" r="16" fill="#f59e0b"/>
        <text x="240" y="121" font-size="12" text-anchor="middle">🐱</text>
        <rect x="270" y="105" width="50" height="25" rx="4" fill="#a855f7"/>
        <text x="295" y="122" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Zıpla!</text>
        <text x="210" y="215" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">Kendi Eserini Gururla Sunan Minik Yazılımcı!</text>
      </svg>`,
      caption: "Sınıf Ortamında Dijital Portfolyo ve Proje Sunumu"
    },
    section2: {
      title: "Dijital Portfolyo Çantası",
      subtitle: "Bütün bir yılın birikimi bu dijital çantada saklıdır.",
      layout: "cards-2",
      cards: [
        {
          title: "Portfolyomda Neler Var?",
          icon: "💼",
          desc: "Yıl boyu biriktirdiğimiz dijital hazineler:",
          items: [
            { bold: "Türk Bayrağı Tasarımı", text: "29 Ekim Cumhuriyet Bayramı'nda çizdiğimiz şanlı bayrak." },
            { bold: "Öğretmenler Günü Kartı", text: "Geometrik şekiller ve metinle hazırladığımız tebrik kartı." },
            { bold: "Siber Dedektif Rozeti", text: "Güvenli internet ve şifre kalesi çalışmalarımız." },
            { bold: "ScratchJr Oyunumuz", text: "Yıldız toplayan sporcu ve dans eden kedi animasyonumuz." }
          ]
        },
        {
          title: "Öz Değerlendirme (Kendini Alkışla)",
          icon: "🌟",
          desc: "Nereden nereye geldik?",
          items: [
            { bold: "Eylül Ayı", text: "Farenin sol tıkını yeni öğreniyorduk." },
            { bold: "Haziran Ayı", text: "Artık kendi oyunlarımızı tasarlayıp kodluyoruz!" },
            { bold: "Gelecek Yıl (3. Sınıf)", text: "Daha büyük projeler, robotik kodlamalar bizi bekliyor." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Sahne Sırası Bende!'",
      subtitle: "Her öğrenci akıllı tahtaya çıkıp klasöründeki en sevdiği projeyi 2 dakikada tanıtır.",
      steps: [
        { title: "Projeyi Aç", desc: "Masaüstündeki kendi klasörünüzden sunmak istediğiniz eseri açın." },
        { title: "Tahtada Anlat", desc: "Arkadaşlarına dönüp projenin amacını ve en sevdiğin yönünü söyle." },
        { title: "Alkışları Kabul Et", desc: "Arkadaşlarının alkışlarıyla yerine oturup sıradaki arkadaşını dinle." }
      ],
      criteria: [
        "Kendi çalışmasını topluluk önünde rahatça tanıtabilme",
        "Kullandığı araç ve kod bloklarını ifade edebilme",
        "Arkadaşlarını dinleme nezaketini sergileme"
      ]
    },
    tips: {
      safetyTitle: "Hatip Yazılımcı Öğütleri",
      safetyRules: [
        { bold: "Gülümsemeyi Unutma", text: "Güler yüzlü bir sunum herkesin seni keyifle dinlemesini sağlar." },
        { bold: "Arkadaşını Can Kulağıyla Dinle", text: "Sıra başkasındayken sessiz ol ve onun projesini alkışla." },
        { bold: "Hatan Olsa da Devam Et", text: "Sunumda kelimeyi yanlış söylesen bile gülümse ve devam et." }
      ],
      myths: [
        { wrong: "Sadece kusursuz ve en uzun oyunlar sunulmaya değerdir.", correct: "Sevgiyle, emekle ve dürüstçe yapılmış her küçük proje alkışı ve sunumu sonuna kadar hak eder!" }
      ]
    },
    quiz: {
      question: "Bir bilişim projesini sınıftaki arkadaşlarımıza sunarken aşağıdaki davranışlardan hangisi EN DOĞRUDUR?",
      options: [
        { text: "A) Sırtımızı sınıfa dönüp fısıldayarak konuşmak", isCorrect: false },
        { text: "B) Güleryüzle arkadaşlarımıza bakıp projemizi neşeyle anlatmak", isCorrect: true },
        { text: "C) Utanıp hiçbir şey söylemeden kaçmak", isCorrect: false },
        { text: "D) Başka bir arkadaşımızın projesini kendimizinmiş gibi göstermek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kendi emeğimizle yaptığımız projeyi güler yüzle ve özgüvenle anlatmak gerçek bir bilişim lideri davranışıdır."
    },
    summaryRules: [
      { bold: "Dijital Portfolyo", text: "Emeklerimizin ve hayallerimizin sergisidir." },
      { bold: "Sunum Becerisi", text: "Ürettiğini dünyaya anlatma özgüvenidir." },
      { bold: "Gelecek Hafta", text: "Büyük Kapanış: Yıl Sonu Bilişim ve Kodlama Şenliği!" }
    ],
    homework: "Ailenize bu yıl bilişim dersinde en çok hangi etkinliği severek yaptığınızı anlatın.",
    nextWeekPreview: "Yıl Sonu Bilişim ve Kodlama Şenliği: Başarı Sertifikaları ve Geleceğin Yazılımcıları Mezuniyeti!"
  },

  // 41. HAFTA
  {
    week: 41,
    date: "21 - 27 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Akıllı Teknolojiler, Yapay Zekâ ve Bilişim Şenliği",
    unitBadge: "Büyük Kapanış",
    unitTheme: "tema-6",
    title: "Yıl Sonu Bilişim Şenliği: Geleceğin Yazılımcıları",
    subtitle: "2. Sınıf Başarı Sertifikası, Kodlama Madalyası ve Yaz Tatili Bilişim Tavsiyeleri",
    outcomeCode: "BTY.2.6.5 (Kapanış & Yaşam Boyu Öğrenme)",
    targetSkill: "Yıllık Bilişim Sürecini Başarıyla Tamamlama, Yaz Tatili İçin Bilinçli Teknoloji Rehberi Edinme",
    curiosityQuestion: "Bugün 2. sınıf bilişim mezunu olan sizler, büyüdüğünüzde dünyayı değiştirecek hangi yapay zekâ veya robot projesini kodlayacaksınız?",
    roadmap: [
      { title: "Büyük Şenlik Günü", desc: "Sınıf içi kodlama oyunları, müzik ve kutlama." },
      { title: "Başarı Sertifikaları", desc: "Öğretmeninizden '2. Sınıf Geleceğin Yazılımcısı' belgesini alma." },
      { title: "Yaz Tatili Bilişim Sözü", desc: "Tatili doğada, denizde, kitapla ve dengeli teknolojiyle geçirme." },
      { title: "3. Sınıfa Merhaba", desc: "Gelecek yıl başlayacak ileri düzey robotik maceralar." }
    ],
    section1: {
      title: "Tebrikler! 2. Sınıf Bilişim Yıldızları Mezun Oldu!",
      subtitle: "Koskoca 41 haftayı başarıyla, merakla ve neşeyle tamamladınız.",
      layout: "split-visual",
      card: {
        title: "Minik Yazılımcının Karnesi",
        icon: "🎓",
        desc: "Sizler artık birer teknoloji liderisiniz:",
        items: [
          { bold: "Artık Biliyorsunuz:", text: "Bilgisayar parçalarını, doğru oturmayı, siber güvenliği ve güçlü şifreleri." },
          { bold: "Artık Yapabiliyorsunuz:", text: "Kendi bayrağınızı çizmeyi, klasör açmayı ve iki elle hızlı yazmayı." },
          { bold: "Artık Kodlayabiliyorsunuz:", text: "Algoritmalar kurmayı, labirent çözmeyi, ScratchJr ile oyun yapmayı!" },
          { bold: "En Önemlisi:", text: "Teknolojinin esiri değil, teknolojinin efendisi ve üreticisisiniz!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Mezuniyet Kep'i -->
        <polygon points="210,40 290,65 210,90 130,65" fill="#1e1b4b" stroke="#facc15" stroke-width="2.5"/>
        <rect x="175" y="77" width="70" height="30" rx="4" fill="#1e1b4b"/>
        <line x1="260" y1="70" x2="270" y2="105" stroke="#facc15" stroke-width="3"/>
        <circle cx="270" cy="108" r="5" fill="#facc15"/>
        <!-- Başarı Parıltıları -->
        <text x="150" y="135" font-size="28">⭐</text>
        <text x="210" y="145" font-size="34">🏆</text>
        <text x="270" y="135" font-size="28">⭐</text>
        <!-- Sertifika Şeridi -->
        <rect x="50" y="170" width="320" height="35" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="210" y="193" fill="#fde68a" font-size="12" font-weight="900" text-anchor="middle">2. SINIF BİLİŞİM VE KODLAMA MEZUNİYETİ</text>
        <text x="210" y="225" fill="#cbd5e1" font-size="11" text-anchor="middle">Geleceğin Büyük Yazılımcıları Yolunuz Açık Olsun!</text>
      </svg>`,
      caption: "2. Sınıf Bilişim ve Kodlama Şenliği Mezuniyet Kutlaması"
    },
    section2: {
      title: "Yaz Tatili İçin Altın Bilişim Tavsiyeleri",
      subtitle: "Yaz boyunca hem dinlenin hem de zihninizi diri tutun.",
      layout: "cards-2",
      cards: [
        {
          title: "Dengeli Bir Yaz Tatili",
          icon: "☀️",
          desc: "Tatilin tadını çıkarma reçetesi:",
          items: [
            { bold: "Deniz ve Güneş", text: "Yüzün, koşun, kumdan kaleler yapın ve bol bol D vitamini alın." },
            { bold: "Ekran Sınırı", text: "Günde en fazla 45 dakika eğitici ekran zamanı kuralına sadık kalın." },
            { bold: "Kitap Dostluğu", text: "Yaz boyunca en az 5 harika hikaye kitabı okuyun." }
          ]
        },
        {
          title: "3. Sınıf Müjdesi",
          icon: "🚀",
          desc: "Eylül ayında bizi bekleyen sürprizler:",
          items: [
            { bold: "İleri Scratch Projeleri", text: "Puanlı, can haklı, sesli ve seviyeli gerçek video oyunları." },
            { bold: "Robotik Kodlama", text: "Işık yakan, ses çıkaran mini robot kitleri." },
            { bold: "Dijital Yazarlık", text: "Kendi e-kitaplarımızı ve sunumlarımızı hazırlama." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Bilişim Şenliği ve Sertifika Töreni'",
      subtitle: "Bilişim sınıfında müzik eşliğinde serbest oyunlar oynuyor ve sertifikalarımızı alıyoruz.",
      steps: [
        { title: "Şenlik Oyununu Oyna", desc: "Arkadaşlarınızın hazırladığı ScratchJr oyunlarını deneyip puan verin." },
        { title: "Sertifikanı Al", desc: "Öğretmeninizin elinden 'Geleceğin Yazılımcısı' belgenizi gururla alın." },
        { title: "Hatıra Fotoğrafı Çektir", desc: "Bilişim sınıfında tüm arkadaşlarınızla neşeli bir mezuniyet pozu verin." }
      ],
      criteria: [
        "Yıllık bilişim kazanımlarını başarıyla tamamlamış olma",
        "Sertifika törenine saygı ve mutlulukla katılma",
        "Yaz tatili bilişim sözleşmesine uymaya kararlı olma"
      ]
    },
    tips: {
      safetyTitle: "Bilişim Öğretmeninden Sevgiyle",
      safetyRules: [
        { bold: "Merakını Asla Kaybetme", text: "Bilgisayarların nasıl çalıştığını sormaktan ve araştırmaktan asla vazgeçme." },
        { bold: "İyilik İçin Kodla", text: "Geliştireceğin teknolojiler daima insanlara ve doğaya fayda sağlasın." },
        { bold: "İyi Tatiller!", text: "Bol neşeli, sağlıklı ve macera dolu bir yaz tatili dilerim! - Öğretmenin Vahit Keskin" }
      ],
      myths: [
        { wrong: "2. sınıf bittiğinde bilişimle işimiz biter.", correct: "Bilişim ve teknoloji hayatımızın her anında bizimle; bu sadece başlangıçtı, yolculuk ömür boyu sürecek!" }
      ]
    },
    quiz: {
      question: "Bu yıl bilişim ve kodlama dersinde öğrendiğimiz en değerli kural aşağıdakilerden hangisidir?",
      options: [
        { text: "A) Bütün gün bilgisayar başında aralıksız oyun oynamalıyız", isCorrect: false },
        { text: "B) Teknolojiyi bilinçli, güvenli ve insanlığa faydalı şeyler üretmek için kullanmalıyız", isCorrect: true },
        { text: "C) Şifrelerimizi bütün yabancılara dağıtmalıyız", isCorrect: false },
        { text: "D) Kabloları çekiştirip bilgisayarı fişten çekmeliyiz", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Tebrikler Doğru Cevap: B!</strong> Teknolojinin efendisi olmak; onu dengeli, güvenli ve insanlığa değer katan güzellikler üretmek için kullanmaktır!"
    },
    summaryRules: [
      { bold: "Mezuniyet", text: "2. Sınıf Bilişim ve Kodlama yolculuğunu başarıyla tamamladık!" },
      { bold: "Geleceğin Yazılımcısı", text: "Türkiye Yüzyılı'nın aydınlık ve üretken çocuklarısınız." },
      { bold: "3. Sınıfta Görüşmek Üzere", text: "Sevgiyle, bilimle ve neşeyle kalın!" }
    ],
    homework: "Yaz tatilinde doya doya dinlenin, doğayı keşfedin ve 3. sınıfa büyük bir enerjiyle gelin!",
    nextWeekPreview: "Tebrikler! 2. Sınıf Bilişim Müfredatı Başarıyla Tamamlandı. 3. Sınıfta Görüşmek Üzere!"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_TERM_2_PART2_GRADE2 = CURRICULUM_TERM_2_PART2_GRADE2;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULUM_TERM_2_PART2_GRADE2 };
}
