/**
 * 2. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem 1. Bölüm (Hafta 20 - 30)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART1_GRADE2 = [
  // 20. HAFTA
  {
    week: 20,
    date: "25 - 31 Ocak",
    hours: "2 Ders Saati",
    unit: "Sömestr Tatili Bilişim Bülteni",
    unitBadge: "Sömestr 1. Hafta",
    unitTheme: "tema-4",
    title: "Sömestr 1. Hafta: Bilgisayarsız Kodlama Macera Bülteni",
    subtitle: "Evde Ailemizle Yapabileceğimiz Kağıt-Kalem Algoritma Oyunları ve Labirentler",
    outcomeCode: "BTY.2.4.0 (Tatil Etkinliği & Mantık Oyunları)",
    targetSkill: "Bilgisayarsız Kodlama (Unplugged Coding) ile Problem Çözme Becerisini Geliştirme",
    curiosityQuestion: "Bilgisayar olmadan, sadece renkli kağıtlar ve ok işaretleriyle bir robot arkadaşımızı odanın içinde yönlendirebilir miyiz?",
    roadmap: [
      { title: "Bilgisayarsız Kodlama", desc: "Ekran olmadan zihnimizle kodlama mantığını öğrenme." },
      { title: "İnsan Robot Oyunu", desc: "Kardeşimize veya annemize adım adım komut verme." },
      { title: "Ok İşaretleri Dili", desc: "↑ (İleri), ↓ (Geri), → (Sağa Dön), ← (Sola Dön)." },
      { title: "Hazine Haritası", desc: "Odanın köşesine saklanan oyuncağı yönergelerle bulma." }
    ],
    section1: {
      title: "İnsan Robot Oyunu Nasıl Oynanır?",
      subtitle: "Birimiz robot oluyoruz, diğerimiz ise yazılımcı (komut veren)!",
      layout: "split-visual",
      card: {
        title: "Oyunun 3 Altın Kuralı",
        icon: "🤖",
        desc: "Evde ailenizle oynayabileceğiniz eğlenceli oyun:",
        items: [
          { bold: "1. Robot Sadece Komutları Dinler", text: "Robot olan kişi kendi kafasına göre yürüyemez; sadece verilen yönergeleri yapar." },
          { bold: "2. Net ve Açık Komutlar", text: "'Git' demek yetersizdir; '2 adım ileri yürü' gibi kesin konuşmalıyız." },
          { bold: "3. Dönüşleri Unutma", text: "'Sağa dön' denildiğinde sadece kendi etrafında döner, adım atmaz." },
          { bold: "4. Hedefe Ulaşma", text: "Robot masaya veya duvara çarpmadan hedefteki bardağı masaya koymalıdır!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- Robot Çocuk -->
        <rect x="100" y="65" width="50" height="50" rx="8" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
        <circle cx="115" cy="80" r="5" fill="#ffffff"/>
        <circle cx="135" cy="80" r="5" fill="#ffffff"/>
        <line x1="115" y1="98" x2="135" y2="98" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
        <line x1="125" y1="50" x2="125" y2="65" stroke="#38bdf8" stroke-width="3"/>
        <circle cx="125" cy="48" r="4" fill="#f43f5e"/>
        <!-- Adım Yolu (Kareli zemin) -->
        <path d="M160 90 H220 V150 H280" stroke="#fde047" stroke-width="4" stroke-dasharray="6,4" marker-end="url(#arrow)"/>
        <!-- Hazine Sandığı -->
        <rect x="280" y="130" width="55" height="40" rx="6" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>
        <path d="M280 145 H335" stroke="#78350f" stroke-width="2"/>
        <circle cx="307" cy="145" r="4" fill="#ffffff"/>
        <text x="210" y="215" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">Komut: 2 Adım İleri ➔ Sağa Dön ➔ 2 Adım İleri!</text>
      </svg>`,
      caption: "İnsan Robot Oyunu Yönerge ve Hazine Rotası"
    },
    section2: {
      title: "Kağıt Üzerinde Kodlama Labirentleri",
      subtitle: "Kalemimizi bir robot gibi kareler üzerinde gezdiriyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Kareli Kağıt Sanatı",
          icon: "📝",
          desc: "Kareli defterimizde kodlama alıştırması:",
          items: [
            { bold: "Başlangıç Noktası", text: "Sol üst köşedeki sevimli tavşanı işaretleriz." },
            { bold: "Engeller (Taşlar)", text: "Bazı kareleri siyaha boyayıp 'geçilmez duvar' yaparız." },
            { bold: "Havuç (Hedef)", text: "Sağ alt köşeye ödül havucumuzu koyarız." },
            { bold: "Kod Satırı", text: "Sayfanın altına oklarla kodumuzu yazarız: [→] [→] [↓] [→]." }
          ]
        },
        {
          title: "Neden Bilgisayarsız Kodlama?",
          icon: "🧠",
          desc: "Zihnimize kattığı süper yetenekler:",
          items: [
            { bold: "Ekrandan Uzak Dinlenme", text: "Gözlerimiz dinlenirken beynimiz problem çözmeyi öğrenir." },
            { bold: "Mekânsal Zekâ", text: "Sağımızı ve solumuzu karıştırmadan yön bulmayı pekiştirir." },
            { bold: "Sabır ve Planlama", text: "Harekete geçmeden önce plan yapma alışkanlığı kazandırır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Ev Atölyesi: 'Halı Üzerinde Labirent Macerası'",
      subtitle: "Oturma odasının halısını karelere bölüp yastıklardan engel koyarak ailece oynuyoruz.",
      steps: [
        { title: "Parkuru Kur", desc: "Halıya yastıklardan 2 tane engel (taş) koyun, köşeye bir oyuncak (hazine) yerleştirin." },
        { title: "Kardeşini Robot Yap", desc: "Kardeşinizin gözlerini açık tutarak sadece sizin ok komutlarınızla yürümesini sağlayın." },
        { title: "Yönergeleri Oku", desc: "'1 adım ileri, sağa dön, 2 adım ileri' diyerek hazineye ulaştırın." }
      ],
      criteria: [
        "Yönergeleri adım adım ve sırasıyla verebilme",
        "Sağ ve sol dönüş komutlarını doğru kullanabilme",
        "Aile bireyleriyle neşeli bir kodlama oyunu oynama"
      ]
    },
    tips: {
      safetyTitle: "Sömestr Oyun Rehberi",
      safetyRules: [
        { bold: "Evde Koşmadan Oyna", text: "Robot oyunu oynarken adımları sakin ve dikkatli atın, eşyalara çarpmayın." },
        { bold: "Kardeşine Nazik Ol", text: "Robot yanlış adım attığında kızmak yerine 'Hata ayıklayalım (Debug edelim)' diyerek düzeltin." },
        { bold: "Temiz Hava Al", text: "Oyun bittikten sonra pencereyi açıp odanızı havalandırın." }
      ],
      myths: [
        { wrong: "Kodlama öğrenmek için mutlaka pahalı bir bilgisayar gerekir.", correct: "Kodlamanın temeli mantık ve algoritmadır; kağıt, kalem ve zihnimizle her yerde kodlama yapılabilir!" }
      ]
    },
    quiz: {
      question: "Bir robota 'Sağa dön' komutu verdiğimizde robot ne yapmalıdır?",
      options: [
        { text: "A) 5 adım koşmalıdır", isCorrect: false },
        { text: "B) Bulunduğu yerde sadece sağ tarafına dönüp durmalıdır (adım atmamalıdır)", isCorrect: true },
        { text: "C) Geriye doğru zıplamalıdır", isCorrect: false },
        { text: "D) Yere yatıp uyumalıdır", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Dönüş' komutu sadece yönü değiştirir; adım atmak için ayrıca 'İleri Yürü' komutu verilmelidir."
    },
    summaryRules: [
      { bold: "Algoritma", text: "Bir hedefe ulaşmak için atılan adım adım yönergelerdir." },
      { bold: "Robotlar", text: "Yalnızca yazılımcının verdiği net komutları anlar." },
      { bold: "Oyunla Öğrenme", text: "Bilgisayarsız kodlama zihnimizi güçlendirir." }
    ],
    homework: "Kareli bir kağıda 4x4 bir ızgara çizip tavşanı havuca ulaştıran ok kodlarını yazın.",
    nextWeekPreview: "Sömestr 2. Hafta: Zekâ Oyunları, Tangram ve Dijital Bulmaca Bülteni!"
  },

  // 21. HAFTA
  {
    week: 21,
    date: "01 - 07 Şubat",
    hours: "2 Ders Saati",
    unit: "Sömestr Tatili Bilişim Bülteni",
    unitBadge: "Sömestr 2. Hafta",
    unitTheme: "tema-4",
    title: "Sömestr 2. Hafta: Zekâ Oyunları ve Dijital Bulmacalar",
    subtitle: "Sudoku, Tangram, Örüntü Tamamlama ve Problem Çözme Egzersizleri",
    outcomeCode: "BTY.2.4.0 (Akıl Oyunları & Bilişsel Gelişim)",
    targetSkill: "Mantıksal Akıl Yürütme, Örüntüleri Keşfetme ve Parça-Bütün İlişkisi Kurma",
    curiosityQuestion: "7 tane tahta geometrik parçayı (Tangram) birleştirerek nasıl bir kedi, ev veya uzay roketi yapabiliriz?",
    roadmap: [
      { title: "Akıl Oyunları Dünyası", desc: "Zihnimizi açan, odaklanmamızı artıran eğlenceli oyunlar." },
      { title: "Tangram Sanatı", desc: "Üçgenler, kare ve paralelkenarla şekiller oluşturma." },
      { title: "Mini Sudoku (4x4)", desc: "Her satırda ve sütunda 1-2-3-4 sayılarını tekrarsız dizme." },
      { title: "Örüntü Avcısı", desc: "Sıradaki şekil hangisi? Mantıksal dizilim kuralını bulma." }
    ],
    section1: {
      title: "Tangram: Antik Çin Zekâ Bulmacası",
      subtitle: "7 parça ile binlerce farklı figür tasarlayabiliriz.",
      layout: "split-visual",
      card: {
        title: "Tangramın 7 Parçası",
        icon: "🧩",
        desc: "Bir karenin kesilmesiyle oluşan sihirli şekiller:",
        items: [
          { bold: "2 Büyük Üçgen", text: "Gövde ve büyük kanatları yapmak için kullanılır." },
          { bold: "1 Orta Üçgen", text: "Kuyruk veya çatı gibi orta büyüklükteki detaylar içindir." },
          { bold: "2 Küçük Üçgen", text: "Kulaklar, burun ve ayakları oluşturur." },
          { bold: "1 Kare ve 1 Paralelkenar", text: "Şekle denge ve hareket katan özel parçalardır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Tangram Kedi Figürü -->
        <!-- Kafa (Kare) -->
        <rect x="160" y="55" width="35" height="35" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" transform="rotate(45 160 55)"/>
        <!-- Kulaklar (2 Küçük Üçgen) -->
        <polygon points="120,45 135,20 150,45" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
        <polygon points="160,45 175,20 190,45" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Gövde (Büyük Üçgen) -->
        <polygon points="110,105 200,105 155,170" fill="#3b82f6" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Bacak (Orta Üçgen) -->
        <polygon points="155,170 200,170 200,125" fill="#10b981" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Kuyruk (Paralelkenar) -->
        <polygon points="200,170 240,150 255,165 215,185" fill="#a855f7" stroke="#ffffff" stroke-width="1.5"/>
        <text x="210" y="225" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">7 Geometrik Parçadan Doğan Akıllı Kedi!</text>
      </svg>`,
      caption: "Tangram Parçalarından Oluşturulan Kedi Figürü"
    },
    section2: {
      title: "Mini Sudoku ve Örüntü Dedektifi",
      subtitle: "Sayılardan korkmuyoruz; onları bir bulmaca gibi diziyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "4x4 Çocuk Sudokusu",
          icon: "🔢",
          desc: "Sudoku oynamanın tek kuralı:",
          items: [
            { bold: "Hiçbir Sayı Tekrar Etmez", text: "Her satırda, her sütunda ve her 2x2 kutuda 1, 2, 3, 4 sayıları yalnız bir kez yer alır." },
            { bold: "Eksik Olanı Bul", text: "Satıra bakıp '1, 2, 4 var, hangisi eksik? Tabii ki 3!' diyerek doldururuz." },
            { bold: "Şekilli Sudoku", text: "Sayılar yerine elma, armut, muz ve çilek resimleriyle de oynayabiliriz." }
          ]
        },
        {
          title: "Örüntüleri Çözme Sanatı",
          icon: "🔍",
          desc: "Kodlamanın temeli örüntü tanımadır:",
          items: [
            { bold: "Kuralı Keşfet", text: "Kırmızı, Mavi, Sarı, Kırmızı, Mavi... Sırada ne var? (Sarı!)." },
            { bold: "Döngüyü Gör", text: "Kendini tekrar eden parçaları yakalamak algoritma kurmamızı sağlar." },
            { bold: "Büyük Resme Bak", text: "Detayların arasındaki gizli bağı görmek zihnimizi keskinleştirir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Ev Atölyesi: 'Kendi Tangramını Makasla Kes'",
      subtitle: "Renkli bir kartondan kare kesip 7 parçaya ayırarak ailece figür yarışması yapıyoruz.",
      steps: [
        { title: "Tangram Şablonunu Çiz", desc: "Kare bir kağıdın üzerine tangram çizgilerini cetvelle çizin." },
        { title: "Parçaları Kes", desc: "Özenle 7 parçayı makasla sınırlarından kesin." },
        { title: "Figür Meydan Okuması", desc: "Parçaları üst üste getirmeden bir kuş veya yelkenli gemi oluşturun." }
      ],
      criteria: [
        "Geometrik parçaları doğru şekilde birleştirebilme",
        "Parçaları üst üste bindirmeden figür üretme",
        "Problem karşısında pes etmeden farklı kombinasyonları deneme"
      ]
    },
    tips: {
      safetyTitle: "Akıl Oyunları İpuçları",
      safetyRules: [
        { bold: "Hemen Pes Etme", text: "Bulmaca ilk denemede çözülmeyebilir; parçaları çevirin, yerlerini değiştirin ve yeniden deneyin." },
        { bold: "İpuçlarını Kullan", text: "Tıkandığınızda ailenizden küçük bir ipucu isteyebilirsiniz." },
        { bold: "2. Dönem Başlıyor", text: "Tatilin son günlerinde çantanızı hazırlayın, haftaya kodlama dersinde buluşuyoruz!" }
      ],
      myths: [
        { wrong: "Sudoku sadece matematik dahileri içindir.", correct: "4x4 Sudoku tamamen bir dikkat ve mantık oyunudur; toplama-çıkarma bilmeye bile gerek yoktur!" }
      ]
    },
    quiz: {
      question: "Kırmızı - Sarı - Mavi - Kırmızı - Sarı - Mavi - Kırmızı - ... örüntüsünde soru işaretli yere hangi renk gelmelidir?",
      options: [
        { text: "A) Yeşil", isCorrect: false },
        { text: "B) Sarı", isCorrect: true },
        { text: "C) Mor", isCorrect: false },
        { text: "D) Beyaz", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Örüntü 'Kırmızı - Sarı - Mavi' şeklinde tekrar etmektedir; bu yüzden kırmızının arkasından 'Sarı' gelir."
    },
    summaryRules: [
      { bold: "Tangram", text: "7 parça ile sınırsız hayal gücüdür." },
      { bold: "Örüntü", text: "Kodlamanın ve doğanın gizli düzenidir." },
      { bold: "Hoş Geldin 2. Dönem", text: "Zihnimiz hazır, kodlama serüveni başlıyor!" }
    ],
    homework: "Kendi kestiğiniz tangram parçalarıyla ailenize bir insan veya hayvan figürü yapıp fotoğrafını çekin.",
    nextWeekPreview: "2. Dönem Başlıyor: Algoritma Nedir? Günlük Hayatımızdaki Adım Adım Yönergeler!"
  },

  // 22. HAFTA
  {
    week: 22,
    date: "08 - 14 Şubat",
    hours: "2 Ders Saati",
    unit: "4. Tema: Algoritmik Düşünme ve Bilgisayarsız Kodlama",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Algoritma Nedir? Günlük Hayattaki Adımlar",
    subtitle: "Diş Fırçalama, Sandviç Hazırlama ve Okula Gelme Algoritması",
    outcomeCode: "BTY.2.4.1 (Algoritma Mantığı)",
    targetSkill: "Algoritma Kavramını Anlama, Günlük Yaşam Olaylarını Sıralı Adımlarla İfade Etme",
    curiosityQuestion: "Sabah uyanınca ayakkabımızı çorabımızdan önce giyebilir miyiz? Sıralama neden hayatın en önemli kuralıdır?",
    roadmap: [
      { title: "Algoritma Sözcüğü", desc: "Büyük Türk bilgini El-Harezmi'den gelen sihirli kelime." },
      { title: "Adım Adım Düşünme", desc: "Bir işi başından sonuna kadar sırayla yapma sanatı." },
      { title: "Diş Fırçalama Algoritması", desc: "Macunu sürmeden fırçayı ağza götürürsek ne olur?" },
      { title: "Hata Avı", desc: "Karışık verilen adımları doğru sıraya dizme oyunu." }
    ],
    section1: {
      title: "Algoritma: Adım Adım Başarı Reçetesi",
      subtitle: "Bir amaca ulaşmak için takip ettiğimiz sıralı yola 'Algoritma' denir.",
      layout: "split-visual",
      card: {
        title: "Diş Fırçalama Algoritması",
        icon: "🪥",
        desc: "Sıralama bozulursa işler karışır:",
        items: [
          { bold: "1. Adım", text: "Diş fırçanı eline al ve suyla hafifçe ıslat." },
          { bold: "2. Adım", text: "Diş macununun kapağını aç ve bezelye tanesi kadar macun sık." },
          { bold: "3. Adım", text: "Dişlerini 2 dakika boyunca dairesel hareketlerle nazikçe fırçala." },
          { bold: "4. Adım", text: "Ağzını bol suyla çalkala, fırçanı yıka ve yerine koy." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- 4 Adım Kutusu -->
        <rect x="35" y="45" width="75" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="72" y="70" fill="#38bdf8" font-size="16" font-weight="900" text-anchor="middle">1</text>
        <text x="72" y="100" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">Fırçayı Al</text>
        <text x="72" y="125" font-size="22" text-anchor="middle">🪥</text>
        
        <path d="M115 100 H130" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>
        
        <rect x="135" y="45" width="75" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="172" y="70" fill="#38bdf8" font-size="16" font-weight="900" text-anchor="middle">2</text>
        <text x="172" y="100" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">Macun Sık</text>
        <text x="172" y="125" font-size="22" text-anchor="middle">🧴</text>
        
        <path d="M215 100 H230" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>

        <rect x="235" y="45" width="75" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="272" y="70" fill="#38bdf8" font-size="16" font-weight="900" text-anchor="middle">3</text>
        <text x="272" y="100" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">Fırçala</text>
        <text x="272" y="125" font-size="22" text-anchor="middle">✨</text>
        
        <path d="M315 100 H330" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>

        <rect x="335" y="45" width="55" height="110" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <text x="362" y="70" fill="#34d399" font-size="16" font-weight="900" text-anchor="middle">4</text>
        <text x="362" y="100" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Çalkala</text>
        <text x="362" y="125" font-size="22" text-anchor="middle">💧</text>
        
        <text x="210" y="200" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">Algoritma: Başlangıcı ve Bitişi Olan Sıralı Yol!</text>
      </svg>`,
      caption: "Adım Adım Diş Fırçalama Algoritması Akış Şeması"
    },
    section2: {
      title: "Algoritmanın 3 Altın Kuralı",
      subtitle: "Bir algoritmanın kusursuz çalışması için bu kurallar şarttır:",
      layout: "cards-3",
      cards: [
        {
          title: "1. Bir Başlangıcı Vardır",
          icon: "🏁",
          desc: "Her algoritma 'Başla' komutuyla ilk adımdan itibaren harekete geçer."
        },
        {
          title: "2. Adımlar Karışmaz",
          icon: "🪜",
          desc: "Merdiven basamakları gibi 1. adımdan 2. adıma sırayla geçilir, basamak atlanmaz."
        },
        {
          title: "3. Bir Bitişi Vardır",
          icon: "🎯",
          desc: "Hedefe ulaşıldığında 'Bitir' denir ve görev başarıyla tamamlanır."
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Lezzetli Tost Algoritması'",
      subtitle: "Karışık verilen 5 tost yapma adımını tahtada doğru sıraya diziyoruz.",
      steps: [
        { title: "Adımları Oku", desc: "Tahtadaki karışık adımları (Tostu ye, Ekmeği kes, Peyniri koy, Makineye bas) inceleyin." },
        { title: "Doğru Sıralamayı Kur", desc: "Hangisi 1. adım, hangisi son adım olmalı tartışın." },
        { title: "Defterine Numaralandır", desc: "Adımların yanına 1, 2, 3, 4, 5 yazarak algoritmayı tamamlayın." }
      ],
      criteria: [
        "Olaylar arasında mantıksal öncelik-sonralık ilişkisi kurabilme",
        "Algoritma adımlarını eksiksiz listeleyebilme",
        "Sıralama hatasını fark edip düzeltebilme"
      ]
    },
    tips: {
      safetyTitle: "Algoritma Ustası Tüyoları",
      safetyRules: [
        { bold: "Açık ve Net Ol", text: "Komutları verirken robotun kafasını karıştırmayacak şekilde açık konuşun." },
        { bold: "Adım Atlamayın", text: "Önemli bir adımı unuttuğunuzda (örneğin tostun fişini takmayı) sonuç başarısız olur." },
        { bold: "Her Şey Bir Algoritmadır", text: "Yemek tarifleri, origami sanatı ve lego yapımı hepsi birer algoritmadır." }
      ],
      myths: [
        { wrong: "Algoritmalar sadece bilgisayarlar içindir, insanlar algoritma kullanmaz.", correct: "İnsanlar sabah uyanıp okula gidene kadar farkında olmadan yüzlerce algoritma uygular!" }
      ]
    },
    quiz: {
      question: "Bir işi veya görevi başarmak için takip ettiğimiz başlangıcı ve bitişi olan sıralı adımlara ne ad verilir?",
      options: [
        { text: "A) Algoritma", isCorrect: true },
        { text: "B) Monitör", isCorrect: false },
        { text: "C) Silgi", isCorrect: false },
        { text: "D) Elektrik Düğmesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: A!</strong> Algoritma, hedefe adım adım giden en mantıklı ve sıralı yoldur."
    },
    summaryRules: [
      { bold: "Algoritma", text: "Sıralı adımlarla problem çözme planıdır." },
      { bold: "Sıralama Önemlidir", text: "Adımların yeri değişirse sonuç bozulur." },
      { bold: "Gelecek Hafta", text: "Yön oklarıyla robot yönlendirmeye başlıyoruz!" }
    ],
    homework: "Sabah yataktan kalkıp okula gelene kadar yaptığınız 5 adımı defterinize 1-2-3-4-5 diye sıralayın.",
    nextWeekPreview: "Yönergeler ve Yön Okları: İleri, Geri, Sağa ve Sola Dönüşler!"
  },

  // 23. HAFTA
  {
    week: 23,
    date: "15 - 21 Şubat",
    hours: "2 Ders Saati",
    unit: "4. Tema: Algoritmik Düşünme ve Bilgisayarsız Kodlama",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Yönergeler ve Yön Okları ile Komut Verme",
    subtitle: "Robot Arkadaşımı Yönlendirme Oyunu & Mekânsal Yön Bulma Becerisi",
    outcomeCode: "BTY.2.4.2 (Yön Algısı & Komut Verme)",
    targetSkill: "Yön Oklarını (↑, ↓, →, ←) Kullanarak Mekânsal Yönergeler Oluşturabilme",
    curiosityQuestion: "Karıncalar yiyecek bulduklarında yuvalarına dönerken yönlerini nasıl hiç şaşırmazlar?",
    roadmap: [
      { title: "4 Temel Yön", desc: "İleri (↑), Geri (↓), Sağa Dön (→), Sola Dön (←)." },
      { title: "Kendi Sağımla Robotun Sağı", desc: "Robotun baktığı yöne göre sağını ve solunu bulma." },
      { title: "Kod Blokları Çizimi", desc: "Kare kutular içine yön okları yerleştirerek kod dizisi kurma." },
      { title: "Sınıf İçi Robot Oyunu", desc: "Öğretmenin yönergeleriyle tahtadaki hedefe ulaşma." }
    ],
    section1: {
      title: "Kodlamanın Dili: 4 Sihirli Yön Oku",
      subtitle: "Bütün robotlar ve bilgisayar oyunları bu 4 ok ile hareket eder.",
      layout: "split-visual",
      card: {
        title: "Yön Oklarının Anlamları",
        icon: "🧭",
        desc: "Karakterimizi kontrol eden 4 ana komut:",
        items: [
          { bold: "↑ (İleri Yürü)", text: "Karakter baktığı yönde 1 kare veya 1 adım ileri gider." },
          { bold: "↓ (Geri Git)", text: "Karakter arkasını dönmeden 1 kare geriye adım atar." },
          { bold: "→ (Sağa Dön)", text: "Karakter olduğu yerde 90 derece sağ tarafına döner." },
          { bold: "← (Sola Dön)", text: "Karakter olduğu yerde 90 derece sol tarafına döner." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Merkez Daire -->
        <circle cx="210" cy="115" r="30" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
        <text x="210" y="122" font-size="22" text-anchor="middle">🤖</text>
        <!-- Yukarı Ok -->
        <rect x="190" y="35" width="40" height="40" rx="8" fill="#047857" stroke="#34d399" stroke-width="2"/>
        <text x="210" y="62" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">↑</text>
        <!-- Aşağı Ok -->
        <rect x="190" y="155" width="40" height="40" rx="8" fill="#047857" stroke="#34d399" stroke-width="2"/>
        <text x="210" y="182" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">↓</text>
        <!-- Sağ Ok -->
        <rect x="270" y="95" width="40" height="40" rx="8" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="290" y="122" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">→</text>
        <!-- Sol Ok -->
        <rect x="110" y="95" width="40" height="40" rx="8" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="130" y="122" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">←</text>
        <text x="210" y="218" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">Yeşil: İleri / Geri | Mavi: Sağa / Sola Dönüş</text>
      </svg>`,
      caption: "4 Temel Yön Oku ve Hareket Mekanizması"
    },
    section2: {
      title: "Robotun Gözünden Bakmak: Bakış Açısı",
      subtitle: "Robot bize doğru bakıyorsa onun sağı bizim solumuzdur!",
      layout: "cards-2",
      cards: [
        {
          title: "Ayna Etkisi (Ters Bakış)",
          icon: "🪞",
          desc: "Karşıdan gelen bir robota komut verirken:",
          items: [
            { bold: "Kendini Robotun Yerine Koy", text: "Zihninizde robotun arkasına geçip onunla aynı yöne baktığınızı hayal edin." },
            { bold: "Sağ Elini Kaldır", text: "Robotun sağ elinin nerede olduğunu kendi sağ kolunuzla kıyaslayın." },
            { bold: "Hata Yapmaktan Korkma", text: "Deneme yanılma yaparak yönü teyit edin." }
          ]
        },
        {
          title: "Kod Kartları Sıralaması",
          icon: "🃏",
          desc: "Yazdığımız oklar soldan sağa doğru okunur:",
          items: [
            { bold: "1. Komut", text: "İlk kutudaki ok önce çalışır." },
            { bold: "2. Komut", text: "Birinci adım bitince ikinci oka geçilir." },
            { bold: "Bitiş Bayrağı", text: "Tüm oklar bitince karakter durur." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Hedefe Ulaşma Oyunu'",
      subtitle: "Kareli ızgarada duran robotu kırmızı elmaya ulaştıran ok kodunu yazıyoruz.",
      steps: [
        { title: "Izgarayı İncele", desc: "Robotun ve elmanın hangi karelerde durduğuna bakın." },
        { title: "Adımları Say", desc: "Kaç kare ileri gitmesi gerektiğini parmağınızla sayın." },
        { title: "Okları Çiz", desc: "Defterinize sırasıyla: [↑] [↑] [→] [↑] kodlarını yazarak elmaya ulaşın." }
      ],
      criteria: [
        "Yön oklarını doğru anlamlarıyla kullanabilme",
        "Izgaradaki mesafe ve adım sayısını doğru hesaplayabilme",
        "Robotun yönüne göre dönüşleri başarıyla uygulama"
      ]
    },
    tips: {
      safetyTitle: "Yön Dedektifi Tüyoları",
      safetyRules: [
        { bold: "Dönüş ile Adımı Karıştırma", text: "'Sağa dön' komutundan sonra mutlaka bir 'İleri git' komutu verilmelidir; yoksa robot olduğu yerde döner durur!" },
        { bold: "Bileklik Taktiği", text: "Sağ kolunuza taktığınız bir saat veya toka sağınızı asla unutmamanızı sağlar." },
        { bold: "Gözünle Takip Et", text: "Komutları yazdıktan sonra parmağınızla kareler üzerinde canlandırın." }
      ],
      myths: [
        { wrong: "'Sağa dön' dediğimizde robot otomatik olarak sağdaki kareye atlar.", correct: "Dönüş sadece yüzü o yöne çevirir; adım atmak için ileri komutu gerekir." }
      ]
    },
    quiz: {
      question: "Karakterimizin 3 kare yukarıya doğru yürümesi için aşağıdaki kod satırlarından hangisini yazmalıyız?",
      options: [
        { text: "A) [→] [→] [→]", isCorrect: false },
        { text: "B) [↑] [↑] [↑]", isCorrect: true },
        { text: "C) [↓] [↓] [↓]", isCorrect: false },
        { text: "D) [←] [→] [←]", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Yukarıyı gösteren 3 tane [↑] oku, karakteri 3 kare ileriye götürür."
    },
    summaryRules: [
      { bold: "Yön Okları", text: "Kodlamanın evrensel yön pusulasıdır." },
      { bold: "Dönüş + Adım", text: "İki hareket birlikte çalışınca yol alırız." },
      { bold: "Bakış Açısı", text: "Karakterin gözünden dünyaya bakma sanatıdır." }
    ],
    homework: "Odanızın kapısından yatağınıza kadar kaç adım ileri ve nereye dönüş olduğunu oklarla defterinize çizin.",
    nextWeekPreview: "Kareli Kâğıtta Labirent Çözme ve Hazine Avı Algoritması!"
  },

  // 24. HAFTA
  {
    week: 24,
    date: "22 - 28 Şubat",
    hours: "2 Ders Saati",
    unit: "4. Tema: Algoritmik Düşünme ve Bilgisayarsız Kodlama",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Kareli Kâğıtta Labirent Çözme ve Hazine Avı",
    subtitle: "Engelleri Aşma, En Kısa Yolu Bulma ve Adım Sayısını Hesaplama",
    outcomeCode: "BTY.2.4.3 (Optimizasyon & Problem Çözme)",
    targetSkill: "Labirentlerde En Kısa Yolu Bulma ve Engelleri Dolaşarak Algoritma Oluşturma",
    curiosityQuestion: "Aynı hedefe giden iki yoldan biri 5 adım, diğeri 10 adım sürüyorsa robotlar neden daima 5 adımlık yolu tercih eder?",
    roadmap: [
      { title: "Labirent Nedir?", desc: "Çıkmaz sokakları ve engelleri olan bulmaca yolları." },
      { title: "Engel Farkındalığı", desc: "Duvarlara ve çukurlara çarpmadan dolaşma." },
      { title: "En Kısa Yol (Optimizasyon)", desc: "Daha az komutla hedefe daha hızlı varma." },
      { title: "Hazine Avı Macerası", desc: "Yıldızları toplayarak sandığa ulaşma algoritması." }
    ],
    section1: {
      title: "Labirent Dedektifi: Duvarları Aşma Sanatı",
      subtitle: "Labirentte yürürken önceden yolu gözümüzle tararız.",
      layout: "split-visual",
      card: {
        title: "Labirent Çözme Stratejisi",
        icon: "🧭",
        desc: "En akıllıca yolu bulmak için 3 kural:",
        items: [
          { bold: "1. Çıkmaz Sokakları İncele", text: "Ucu kapalı yollara girmeden önce gözümüzle takip ederiz." },
          { bold: "2. Adımları Say", text: "Daha az dönüş ve daha az adım içeren rotayı belirleriz." },
          { bold: "3. Kodunu Test Et", text: "Yazdığın okları parmağınla kare kare yürüterek kontrol et." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- 4x4 Izgara -->
        <g stroke="#334155" stroke-width="1.5">
          <line x1="80" y1="45" x2="280" y2="45"/>
          <line x1="80" y1="85" x2="280" y2="85"/>
          <line x1="80" y1="125" x2="280" y2="125"/>
          <line x1="80" y1="165" x2="280" y2="165"/>
          <line x1="80" y1="205" x2="280" y2="205"/>
          
          <line x1="80" y1="45" x2="80" y2="205"/>
          <line x1="130" y1="45" x2="130" y2="205"/>
          <line x1="180" y1="45" x2="180" y2="205"/>
          <line x1="230" y1="45" x2="230" y2="205"/>
          <line x1="280" y1="45" x2="280" y2="205"/>
        </g>
        <!-- Engeller (Siyah/Kırmızı taşlar) -->
        <rect x="130" y="85" width="50" height="40" fill="#f43f5e" fill-opacity="0.4"/>
        <text x="155" y="110" font-size="16" text-anchor="middle">🧱</text>
        <rect x="180" y="125" width="50" height="40" fill="#f43f5e" fill-opacity="0.4"/>
        <text x="205" y="150" font-size="16" text-anchor="middle">🧱</text>
        <!-- Kahraman (Sol Üst) -->
        <circle cx="105" cy="65" r="16" fill="#38bdf8"/>
        <text x="105" y="71" font-size="14" text-anchor="middle">🐱</text>
        <!-- Hedef Hazine (Sağ Alt) -->
        <rect x="235" y="170" width="40" height="30" rx="4" fill="#f59e0b"/>
        <text x="255" y="190" font-size="14" text-anchor="middle">⭐</text>
        <!-- Yol Çizgisi -->
        <path d="M105 65 H205 V85 H255 V185" stroke="#fde047" stroke-width="3" stroke-dasharray="4,3"/>
      </svg>`,
      caption: "Engelleri Dolaşarak Yıldızı Bulan Akıllı Algoritma"
    },
    section2: {
      title: "En Kısa Yol: Bilgisayarın Süper Gücü",
      subtitle: "Daha az pil harcamak ve daha hızlı olmak için en kısa yolu seçeriz.",
      layout: "cards-2",
      cards: [
        {
          title: "Uzun Yol (Yavaş)",
          icon: "🐢",
          desc: "Gereksiz dolambaçlı yoldan gitmek:",
          items: [
            { bold: "Fazla Adım", text: "15 komut harcar, karakter yorulur." },
            { bold: "Daha Çok Hata Riski", text: "Komut sayısı arttıkça hata yapma ihtimali yükselir." },
            { bold: "Zaman Kaybı", text: "Hedefe geç varılır." }
          ]
        },
        {
          title: "En Kısa Yol (Şimşek)",
          icon: "⚡",
          desc: "Hedefe giden en kestirme doğru rota:",
          items: [
            { bold: "Optimizasyon", text: "Gereksiz adımlardan arındırılmış temiz kod." },
            { bold: "Enerji Tasarrufu", text: "Robot pilini korur, anında hedefe ulaşır." },
            { bold: "Yazılımcı Zekâsı", text: "Problemi en pratik yoldan çözme ustalığıdır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Hazine Avcısı Algoritması'",
      subtitle: "Kareli çalışma kağıdındaki engelleri aşarak sandığa ulaşan en kısa kodu yazıyoruz.",
      steps: [
        { title: "Engelleri İşaretle", desc: "Yoldaki taşların üzerinden geçemeyeceğinizi unutmayın." },
        { title: "En Kısa Rotayı Çiz", desc: "Kaleminizle engellerin etrafından dolanan en az adımlı yolu çizin." },
        { title: "Kod Satırını Yaz", desc: "Adımları [→] [→] [↓] [↓] [→] şeklinde kutucuklara doldurun." }
      ],
      criteria: [
        "Engellere çarpmadan hedefe ulaşan geçerli bir rota kurabilme",
        "En kısa yolu (minimum adım sayısını) tespit edebilme",
        "Kod dizilimini hatasız kağıda aktarabilme"
      ]
    },
    tips: {
      safetyTitle: "Labirent Dedektifi Stratejileri",
      safetyRules: [
        { bold: "Sondan Başa Git", text: "Bazen hedeften geriye doğru takip etmek doğru yolu çok daha hızlı gösterir!" },
        { bold: "Duvara Dokunma", text: "Duvara çarpan robot sistem hatası verir, duvarların kenarından dolaşın." },
        { bold: "Her Adımı Say", text: "Kareleri atlarken bir basamak fazla saymadığınızdan emin olun." }
      ],
      myths: [
        { wrong: "Labirentte tek bir doğru yol vardır, başka yoldan gidilemez.", correct: "Labirentlerde hedefe giden birden fazla yol olabilir; yazılımcı en kısa ve en güvenli olanı seçer." }
      ]
    },
    quiz: {
      question: "Labirent oyununda önümüze aşamayacağımız bir taş duvar çıktığında algoritmamız ne yapmalıdır?",
      options: [
        { text: "A) Duvara kafa atıp beklemelidir", isCorrect: false },
        { text: "B) Duvarın etrafından dolaşacak yeni yön komutları vermelidir", isCorrect: true },
        { text: "C) Oyunu hemen kapatmalıdır", isCorrect: false },
        { text: "D) Geriye doğru sonsuza kadar gitmelidir", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> İyi bir yazılımcı engelle karşılaştığında pes etmez; duvarın etrafından dolaşacak yeni yönleri kodlar."
    },
    summaryRules: [
      { bold: "Engeller", text: "Bizi durduramaz, sadece yolumuzu planlamamızı sağlar." },
      { bold: "En Kısa Yol", text: "Zaman ve enerji tasarrufu sağlayan akıllı yoldur." },
      { bold: "Planlama", text: "Harekete geçmeden önce düşünmektir." }
    ],
    homework: "Kareli defterinize 5x5 bir labirent çizip içine 3 tane engel koyun ve kardeşinize çözdürün.",
    nextWeekPreview: "Kodlama Hatalarını Bulma: Hata Ayıklama (Debugging) Dedektifi İş Başında!"
  },

  // 25. HAFTA
  {
    week: 25,
    date: "01 - 07 Mart",
    hours: "2 Ders Saati",
    unit: "4. Tema: Algoritmik Düşünme ve Bilgisayarsız Kodlama",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Kodlama Hatalarını Bulma: Hata Ayıklama (Debugging)",
    subtitle: "Yanlış Adımı Tespit Etme, Düzeltme ve Sabırla Çözüme Ulaşma",
    outcomeCode: "BTY.2.4.4 (Hata Ayıklama & Çözüm Üretme)",
    targetSkill: "Algoritmadaki Hatalı Adımı Tespit Etme (Debug) ve Doğrusuyla Değiştirme",
    curiosityQuestion: "Bilgisayar yazılımcıları kodlarındaki hatalara neden 'Böcek' (Bug) derler ve bu böcekleri nasıl avlarlar?",
    roadmap: [
      { title: "Bug (Böcek) Hikayesi", desc: "Tarihin ilk bilgisayarına sıkışan gerçek güve böceğinin hikayesi." },
      { title: "Debugging Nedir?", desc: "Hatalı komutu bulup ayıklama ve düzeltme sanatı." },
      { title: "Hata Avcısı Büyüteci", desc: "Kodları adım adım parmakla takip ederek hatayı yakalama." },
      { title: "Sabır ve Başarı", desc: "Hata yapmanın öğrenmenin en doğal parçası olduğunu kavrama." }
    ],
    section1: {
      title: "Tarihin İlk Bilgisayar Böceği (Bug)",
      subtitle: "1947 yılında dev bilgisayar çalışmayınca içinden gerçek bir böcek çıktı!",
      layout: "split-visual",
      card: {
        title: "Grace Hopper ve İlk Böcek",
        icon: "🐞",
        desc: "Yazılım dünyasının en eğlenceli hikayesi:",
        items: [
          { bold: "Dev Bilgisayar Durdu", text: "Bilim insanı Grace Hopper bilgisayarın neden çalışmadığını araştırdı." },
          { bold: "Sıkışan Güve Böceği", text: "Makinelerin röleleri arasına sıkışıp kalan bir böcek (Bug) buldu." },
          { bold: "Böceği Ayıkladılar (Debug)", text: "Böceği cımbızla defterlerine yapıştırdılar ve o günden sonra tüm kod hatalarına 'Bug' dendi!" },
          { bold: "Hata Ayıklama (Debugging)", text: "Koddaki yanlışı bulup temizleme işine verilen evrensel isimdir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
        <!-- Uğur Böceği / Böcek Simgesi -->
        <circle cx="160" cy="115" r="45" fill="#e11d48" stroke="#ffffff" stroke-width="2"/>
        <line x1="160" y1="70" x2="160" y2="160" stroke="#0f172a" stroke-width="3"/>
        <circle cx="140" cy="95" r="7" fill="#0f172a"/>
        <circle cx="180" cy="95" r="7" fill="#0f172a"/>
        <circle cx="135" cy="130" r="8" fill="#0f172a"/>
        <circle cx="185" cy="130" r="8" fill="#0f172a"/>
        <!-- Baş -->
        <circle cx="160" cy="65" r="18" fill="#0f172a"/>
        <line x1="150" y1="50" x2="140" y2="35" stroke="#0f172a" stroke-width="3"/>
        <line x1="170" y1="50" x2="180" y2="35" stroke="#0f172a" stroke-width="3"/>
        <!-- Büyüteç Üzerine Gelmiş -->
        <circle cx="260" cy="115" r="40" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="3"/>
        <line x1="290" y1="145" x2="330" y2="185" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
        <text x="260" y="122" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">DEBUG</text>
        <text x="210" y="215" fill="#fecdd3" font-size="12" font-weight="bold" text-anchor="middle">Hataları Bulup Düzeltmek Bizi Güçlendirir!</text>
      </svg>`,
      caption: "Yazılım Dünyasının Sembolü: Bug (Böcek) ve Debugging (Hata Ayıklama)"
    },
    section2: {
      title: "Hata Ayıklama Dedektifinin 3 Adımı",
      subtitle: "Kodumuz çalışmadığında paniklemiyoruz; dedektif adımlarını uyguluyoruz:",
      layout: "cards-3",
      cards: [
        {
          title: "1. Dur ve İncele",
          icon: "🛑",
          desc: "Karakter nerede yanlış yaptı? Nerede duvara çarptı? Tam o noktayı tespit ederiz."
        },
        {
          title: "2. Yanlış Oku Bul",
          icon: "🔍",
          desc: "Sağa dönmesi gerekirken sola mı döndü? Yanlış yöne bakan oku buluruz."
        },
        {
          title: "3. Doğrusuyla Değiştir",
          icon: "✏️",
          desc: "Hatalı oku silip yerine doğru yön okunu koyarız ve programı baştan çalıştırırız."
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Böcek Avlama Yarışması'",
      subtitle: "Tahtada gösterilen 4 hatalı algoritmadaki yanlış oku bulup düzeltiyoruz.",
      steps: [
        { title: "Kodu Takip Et", desc: "[İleri] [İleri] [Sola Dön] [İleri] kodunu parmağınızla labirentte yürütün." },
        { title: "Böceği Yakala", desc: "Karakterin duvara çarptığı yerdeki 'Sola Dön' hatasını yakalayın." },
        { title: "Kodu İyileştir", desc: "'Sola Dön' yerine 'Sağa Dön' yazarak görevi başarıyla bitirin." }
      ],
      criteria: [
        "Hatalı adımın kod içindeki yerini gösterebilme",
        "Hatanın neden kaynaklandığını açıklayabilme",
        "Doğru komutla kodu onarabilme"
      ]
    },
    tips: {
      safetyTitle: "Geliştirici Zihniyeti Rehberi",
      safetyRules: [
        { bold: "Hata Yapmak Doğaldır", text: "Dünyanın en iyi yazılımcıları bile her gün yüzlerce hata ayıklar." },
        { bold: "Pes Etme", text: "İlk denemede çalışmazsa sakin ol ve adımları baştan tek tek oku." },
        { bold: "Arkadaşından Destek Al", text: "Bazen başka bir göz bizim göremediğimiz hatayı bir saniyede fark edebilir." }
      ],
      myths: [
        { wrong: "İyi bir yazılımcı hiç hata yapmaz, tek seferde hatasız kod yazar.", correct: "Gerçek yazılımcılık hata yapmamak değil, yapılan hataları sabırla çözebilme becerisidir." }
      ]
    },
    quiz: {
      question: "Bir bilgisayar programında veya kod satırında ortaya çıkan yanlışlıklara ve hatalara ne ad verilir?",
      options: [
        { text: "A) Piksel", isCorrect: false },
        { text: "B) Bug (Böcek / Hata)", isCorrect: true },
        { text: "C) Monitör", isCorrect: false },
        { text: "D) Klavye", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Koddaki mantık hatalarına 'Bug', bu hataları temizleyip düzeltmeye ise 'Debugging' denir."
    },
    summaryRules: [
      { bold: "Bug", text: "Yolumuza çıkan minik kod hatasıdır." },
      { bold: "Debugging", text: "Hataları sabırla bulup düzeltme sanatıdır." },
      { bold: "Sabır", text: "Gerçek bir yazılımcının en büyük süper gücüdür." }
    ],
    homework: "Evde yanlış yapılan bir işi (örneğin ayakkabıyı bağlamadan yürümeye çalışmak) bir algoritma hatası olarak anlatın.",
    nextWeekPreview: "12 Mart İstiklal Marşı & Şartlı Kararlar: Eğer... İse... (Karar Verme Gücü)!"
  },

  // 26. HAFTA
  {
    week: 26,
    date: "08 - 14 Mart",
    hours: "2 Ders Saati",
    unit: "4. Tema: Algoritmik Düşünme ve Bilgisayarsız Kodlama",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "12 Mart İstiklal Marşı & Şartlı Kararlar (Eğer... İse...)",
    subtitle: "Yağmur Yağarsa Şemsiyeni Al! Kodlamada Karar Verme Mekanizması",
    outcomeCode: "BTY.2.4.5 (Şartlı Durumlar & Karar Yapısı)",
    targetSkill: "Günlük Hayatta ve Kodlamada Şartlı Durumları (Eğer - İse) Kavrayabilme",
    curiosityQuestion: "Trafik lambası kırmızı yandığında arabalar neden kendiliğinden durur? Bilgisayarlar kararları nasıl verir?",
    roadmap: [
      { title: "12 Mart Ruhu", desc: "Milli Şairimiz Mehmet Akif Ersoy ve İstiklal Marşı'mızın kabulü." },
      { title: "Şart (Koşul) Nedir?", desc: "'Eğer böyle olursa, bunu yap' mantığını anlama." },
      { title: "Günlük Şartlar", desc: "Hava soğuksa montunu giy, zil çalarsa sınıfa gir." },
      { title: "Kodlamada Eğer Bloğu", desc: "Karakter duvara değerse geri dön şartı." }
    ],
    section1: {
      title: "Karar Verme Büyüsü: 'Eğer... İse...'",
      subtitle: "Bilgisayarlar şartları kontrol eder; doğruysa sağa, yanlışsa sola gider.",
      layout: "split-visual",
      card: {
        title: "Günlük Hayattaki Eğer Şartları",
        icon: "🚦",
        desc: "Her gün uyguladığımız şartlı kararlar:",
        items: [
          { bold: "Trafik Işıkları", text: "EĞER ışık kırmızı İSE dur! EĞER yeşil İSE geç!" },
          { bold: "Hava Durumu", text: "EĞER yağmur yağıyorsa İSE şemsiyeni yanına al." },
          { bold: "Ders Zili", text: "EĞER zil çalarsa İSE sınıfa gir ve yerine otur." },
          { bold: "Bilgisayar Oyunu", text: "EĞER karaktere can iksiri değerse İSE puanı 10 artır!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Karar Eşkenar Dörtgeni -->
        <polygon points="210,40 280,85 210,130 140,85" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="210" y="80" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">YAĞMUR</text>
        <text x="210" y="95" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">YAĞIYOR MU?</text>
        <!-- EVET Yolu -->
        <line x1="280" y1="85" x2="330" y2="85" stroke="#10b981" stroke-width="3"/>
        <text x="300" y="78" fill="#34d399" font-size="10" font-weight="bold">EVET</text>
        <rect x="330" y="65" width="65" height="40" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="362" y="90" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Şemsiye Al ☂️</text>
        <!-- HAYIR Yolu -->
        <line x1="140" y1="85" x2="90" y2="85" stroke="#f43f5e" stroke-width="3"/>
        <text x="110" y="78" fill="#fb7185" font-size="10" font-weight="bold">HAYIR</text>
        <rect x="25" y="65" width="65" height="40" rx="6" fill="#881337" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="57" y="90" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Güneş Gözlüğü 🕶️</text>
        <!-- İstiklal Marşı Anması -->
        <rect x="70" y="170" width="280" height="35" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="210" y="192" fill="#e0e7ff" font-size="11" font-weight="bold" text-anchor="middle">12 Mart: Korkma, Sönmez Bu Şafaklarda Yüzen Al Sancak!</text>
      </svg>`,
      caption: "Akış Şemalarında Şart (Eğer) Karar Mekanizması"
    },
    section2: {
      title: "İstiklal Marşı ve Bağımsızlık Şartımız",
      subtitle: "Milli Şairimiz Mehmet Akif Ersoy'un millete armağanı.",
      layout: "cards-2",
      cards: [
        {
          title: "Milli Şairimiz Mehmet Akif",
          icon: "📜",
          desc: "İstiklal Marşı'mızın doğuşu:",
          items: [
            { bold: "Korkma!", text: "Marşımızın ilk kelimesi milletimize cesaret ve umut aşılar." },
            { bold: "Milletime Armağan", text: "Mehmet Akif ödül parasını kabul etmemiş, marşı kahraman milletimize hediye etmiştir." },
            { bold: "Saygıyla Dinleriz", text: "İstiklal Marşı okunurken hazır ol duruşuna geçer, gururla söyleriz." }
          ]
        },
        {
          title: "Kodlamada Şartlar Bizi Nasıl Korur?",
          icon: "🛡️",
          desc: "Akıllı cihazlar şartlar sayesinde çalışır:",
          items: [
            { bold: "Eğer Batarya Azalırsa", text: "Telefon 'Lütfen şarja takın' uyarısı verir." },
            { bold: "Eğer Şifre Doğruysa", text: "Kilit açılır; yanlışsa 'Tekrar dene' der." },
            { bold: "Eğer Engel Çıkarsa", text: "Robot durur ve başka yöne döner." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Eğer... İse...' Drama Oyunu",
      subtitle: "Öğretmen bir şart söyler, sınıftaki öğrenciler şarta göre hareket eder.",
      steps: [
        { title: "Şartı Dinle", desc: "Öğretmeniniz 'Eğer adında 'A' harfi varsa el salla!' der." },
        { title: "Şartı Kontrol Et", desc: "Adınızda 'A' harfi olup olmadığını kontrol edin." },
        { title: "Hareketi Yap", desc: "Şart sana uyuyorsa neşeyle el salla; uymuyorsa sessizce bekle." }
      ],
      criteria: [
        "Şartlı durumları doğru analiz edebilme",
        "Şartın gerçekleşmesi durumunda doğru eylemi sergileme",
        "İstiklal Marşı'nın kabulü anlam ve önemini kavrama"
      ]
    },
    tips: {
      safetyTitle: "Karar Mekanizması İpuçları",
      safetyRules: [
        { bold: "İki İhtimal Vardır", text: "Bir şart ya Doğrudur (Evet) ya da Yanlıştır (Hayır)." },
        { bold: "İstiklal Marşı Saygısı", text: "Marşımız çalarken kıpırdamadan, ciddiyet ve gururla dinleriz." },
        { bold: "Karar Verirken Düşün", text: "Tıpkı bilgisayarlar gibi biz de harekete geçmeden önce şartları değerlendiririz." }
      ],
      myths: [
        { wrong: "Bilgisayarlar kendi kendilerine canları ne isterse öyle karar verirler.", correct: "Bilgisayarlar sadece bizim yazdığımız 'Eğer... İse...' kurallarını kontrol ederek mantıklı kararlar verir." }
      ]
    },
    quiz: {
      question: "Kodlamada 'EĞER karakter altın elmaya değerse...' şartı gerçekleştiğinde aşağıdaki olaylardan hangisinin olması en mantıklıdır?",
      options: [
        { text: "A) Oyuncunun puanı 10 artar ve neşeli bir ses çalar", isCorrect: true },
        { text: "B) Bilgisayar tamamen bozulur", isCorrect: false },
        { text: "C) Ekran kapkaranlık olur", isCorrect: false },
        { text: "D) Karakter oyundan dışarı fırlar", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: A!</strong> Şart gerçekleştiğinde (elmaya değince) oyuncu ödüllendirilir ve puan kazanır."
    },
    summaryRules: [
      { bold: "Eğer... İse...", text: "Kodlamadaki akıllı karar verme anahtarıdır." },
      { bold: "Şartlar", text: "Olayların sonucunu belirleyen kurallardır." },
      { bold: "12 Mart", text: "İstiklal Marşı'mızın kabulü ve milli gurur günümüzdür." }
    ],
    homework: "Ailenize günlük hayatta uyguladığınız 3 tane 'Eğer... İse...' kuralı söyleyin.",
    nextWeekPreview: "18 Mart Çanakkale Zaferi & Döngüler: Tekrarlayan Adımlarla Kolay Kodlama!"
  },

  // 27. HAFTA
  {
    week: 27,
    date: "15 - 21 Mart",
    hours: "2 Ders Saati",
    unit: "4. Tema: Algoritmik Düşünme ve Bilgisayarsız Kodlama",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "18 Mart Çanakkale Zaferi & Döngüler (Tekrar Blokları)",
    subtitle: "Tekrar Tekrar Yazmak Yerine '3 Kere Tekrarla' Bloğu Kullanımı",
    outcomeCode: "BTY.2.4.6 (Döngü Yapısı & Verimlilik)",
    targetSkill: "Döngü (Tekrar) Kavramını Anlama, Tekrarlayan Hareketleri Kısa Yoldan Kodlayabilme",
    curiosityQuestion: "100 adım ileri gitmek için 100 kere 'İleri Git' yazmak mı kolaydır, yoksa '100 defa tekrarla: İleri Git' demek mi?",
    roadmap: [
      { title: "18 Mart Çanakkale Ruhu", desc: "Çanakkale Geçilmez destanı ve kahraman şehitlerimiz." },
      { title: "Döngü (Loop) Nedir?", desc: "Aynı işi belirlenen sayı kadar otomatik tekrar ettirme." },
      { title: "Kare Çizme Döngüsü", desc: "4 kere [İleri Git, Sağa Dön] ile kolay kare yapımı." },
      { title: "Kod Tasarrufu", desc: "Yorulmadan, sayfalarca yazmadan akıllıca kodlama." }
    ],
    section1: {
      title: "Döngülerin Sihri: Tekrar Blokları",
      subtitle: "Bilgisayarlar aynı hareketi bıkmadan usanmadan milyonlarca kez tekrarlayabilir.",
      layout: "split-visual",
      card: {
        title: "Döngü Olmasaydı Ne Olurdu?",
        icon: "🔁",
        desc: "Kare çizmek için iki farklı yol:",
        items: [
          { bold: "Döngüsüz Yol (Uzun)", text: "İleri Git, Sağa Dön, İleri Git, Sağa Dön, İleri Git, Sağa Dön, İleri Git, Sağa Dön (8 komut!)." },
          { bold: "Döngülü Yol (Akıllıca)", text: "4 KERE TEKRARLA: [İleri Git, Sağa Dön] (Sadece tek satır!)." },
          { bold: "Sonsuz Döngü", text: "Oyunlarda karakterin sürekli nefes alması veya kuşun kanat çırpması için 'Sürekli Tekrarla' kullanılır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Döngü Dairesi -->
        <circle cx="160" cy="115" r="45" fill="none" stroke="#f59e0b" stroke-width="5" stroke-dasharray="18,8"/>
        <!-- Dönen Ok Başı -->
        <polygon points="160,65 175,70 165,80" fill="#fbbf24"/>
        <text x="160" y="112" fill="#ffffff" font-size="20" font-weight="900" text-anchor="middle">4x</text>
        <text x="160" y="128" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">TEKRAR</text>
        <!-- Kare Oluşumu -->
        <rect x="250" y="70" width="80" height="80" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
        <text x="290" y="115" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">KARE</text>
        <!-- Çanakkale Şehitleri Anması -->
        <rect x="60" y="185" width="300" height="30" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5"/>
        <text x="210" y="205" fill="#fee2e2" font-size="11" font-weight="bold" text-anchor="middle">18 Mart: Çanakkale Zaferi ve Şehitlerimizi Saygıyla Anıyoruz</text>
      </svg>`,
      caption: "Döngü (Tekrar) Mekanizması ile Geometrik Şekil Çizimi"
    },
    section2: {
      title: "Doğadaki ve Hayatımızdaki Döngüler",
      subtitle: "Döngüler sadece bilgisayarda değil, tüm kainatta vardır.",
      layout: "cards-2",
      cards: [
        {
          title: "Kainatın Muazzam Döngüsü",
          icon: "🌍",
          desc: "Sürekli tekrarlanan doğa olayları:",
          items: [
            { bold: "Gece ve Gündüz", text: "Dünyamız kendi etrafında döner, gece ve gündüz hiç durmadan tekrarlanır." },
            { bold: "4 Mevsim", text: "İlkbahar, Yaz, Sonbahar, Kış... Her yıl aynı sırayla döngüye girer." },
            { bold: "Kalp Atışımız", text: "Tık-tık, tık-tık... Kalbimiz hayat boyu ritmik bir döngüyle atar." }
          ]
        },
        {
          title: "18 Mart Çanakkale Destanı",
          icon: "🎖️",
          desc: "Tarihimizin altın sayfası:",
          items: [
            { bold: "Çanakkale Geçilmez", text: "Mehmetçiğin vatan sevgisi ve fedakarlığıyla yazılan büyük zafer." },
            { bold: "Seyit Onbaşı", text: "275 kiloluk mermiyi tek başına sırtlayan kahraman askerimiz." },
            { bold: "Şehitlerimize Vefa", text: "Onların bize bıraktığı vatanı çok çalışarak yüceltmek boynumuzun borcudur." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Döngülü Dans Gösterisi'",
      subtitle: "Alkış ve zıplama hareketlerini döngü bloğuyla kodlayıp sınıfta uyguluyoruz.",
      steps: [
        { title: "Hareketi Belirle", desc: "[2 Kere Alkışla, 1 Kere Zıpla] hareketini seçin." },
        { title: "Döngüyü Kur", desc: "Bu hareketi '3 KERE TEKRARLA' döngüsünün içine koyun." },
        { title: "Dansı Yap", desc: "Sınıfça ritim tutarak döngüyü tam 3 defa eksiksiz tamamlayın." }
      ],
      criteria: [
        "Tekrarlayan eylemleri döngü mantığıyla ifade edebilme",
        "Döngü sayacını doğru takip edebilme",
        "Çanakkale Zaferi'nin anlam ve önemini kavrama"
      ]
    },
    tips: {
      safetyTitle: "Döngü Ustası Kuralları",
      safetyRules: [
        { bold: "Tekrar Sayısına Dikkat", text: "Üçgen çizecekseniz 3 kere, kare çizecekseniz 4 kere tekrarla demelisiniz." },
        { bold: "Döngünün İçi", text: "Sadece tekrarlanacak adımları döngü kutusunun içine koyun; diğerlerini dışarıda bırakın." },
        { bold: "Yorulmadan Kodla", text: "Aynı kodu defalarca alt alta yazıyorsanız mutlaka döngü kullanmayı düşünün." }
      ],
      myths: [
        { wrong: "Döngü kullanınca bilgisayar daha çok yorulur.", correct: "Tam tersine, döngü kullanmak kod satırlarını azaltır ve bilgisayarın hafızasını rahatlatır!" }
      ]
    },
    quiz: {
      question: "Bir robota 4 eşit kenarı olan bir kare çizdirmek için hangi döngüyü kullanmak en doğrudur?",
      options: [
        { text: "A) 2 Kere Tekrarla: [İleri Git, Sağa Dön]", isCorrect: false },
        { text: "B) 4 Kere Tekrarla: [İleri Git, Sağa Dön]", isCorrect: true },
        { text: "C) 100 Kere Tekrarla: [Geri Git]", isCorrect: false },
        { text: "D) Hiç döngü kullanmamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Karenin 4 kenarı ve 4 köşesi vardır; bu yüzden 'İleri Git, Sağa Dön' hareketini 4 kez tekrarlamak tam bir kare çizer."
    },
    summaryRules: [
      { bold: "Döngü (Loop)", text: "Tekrarlanan işleri tek satırda çözme sanatıdır." },
      { bold: "Verimlilik", text: "Daha az yazarak daha çok iş başarmaktır." },
      { bold: "Gelecek Hafta", text: "Blok tabanlı kodlama ScratchJr dünyasına adım atıyoruz!" }
    ],
    homework: "Gününüzde her gün düzenli olarak tekrarladığınız 3 döngüyü (sabah uyanmak, yemek yemek gibi) defterinize yazın.",
    nextWeekPreview: "Blok Tabanlı Kodlamaya Giriş: ScratchJr Dünyası, Renkli Bloklar ve Sevimli Kedi!"
  },

  // 28. HAFTA
  {
    week: 28,
    date: "22 - 28 Mart",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Blok Tabanlı Kodlamaya Giriş: ScratchJr Arayüzü",
    subtitle: "Karakter (Kedi), Sahne Arka Planı ve Renkli Kod Blokları Paleti",
    outcomeCode: "BTY.2.5.1 (Arayüz & Blok Keşfi)",
    targetSkill: "Blok Tabanlı Kodlama Arayüzünü Tanıma, Karakter ve Sahne Ekleyebilme",
    curiosityQuestion: "Lego parçalarını üst üste takarak kale yaptığımız gibi, renkli kod bloklarını yan yana dizerek kendi çizgi filmimizi yapabilir miyiz?",
    roadmap: [
      { title: "ScratchJr / Code.org Dünyası", desc: "Çocuklar için özel tasarlanmış blok kodlama platformu." },
      { title: "Karakter (Kukla / Sprite)", desc: "Kodlarımızla canlandıracağımız sevimli kedi kahramanımız." },
      { title: "Sahne (Arka Plan)", desc: "Şehir, deniz altı, uzay ve orman manzaraları ekleme." },
      { title: "Blok Paleti", desc: "Sarı (Başlatıcı), Mavi (Hareket), Mor (Görünüm) bloklar." }
    ],
    section1: {
      title: "ScratchJr Stüdyosu ile Tanışıyoruz",
      subtitle: "Burası bizim çizgi film ve oyun stüdyomuz!",
      layout: "split-visual",
      card: {
        title: "Arayüzün 4 Ana Bölgesi",
        icon: "🎬",
        desc: "Kodlama ekranında bizi karşılayan bölümler:",
        items: [
          { bold: "1. Sahne (Büyük Ekran)", text: "Karakterlerimizin koştuğu, dans ettiği ve oyunun oynandığı yer." },
          { bold: "2. Karakter Menüsü (Sol Taraf)", text: "Yeni kahramanlar, hayvanlar ve araçlar eklediğimiz alan." },
          { bold: "3. Kodlama Alanı (Alt Kısım)", text: "Renkli yapboz bloklarını yan yana birbirine kilitlediğimiz çalışma masası." },
          { bold: "4. Yeşil Bayrak (Sağ Üst)", text: "Animasyonumuzu ve oyunumuzu başlatan sihirli başlatma butonu!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <!-- Sahne Alanı -->
        <rect x="100" y="35" width="220" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
        <!-- Kedi Karakteri -->
        <circle cx="210" cy="90" r="22" fill="#f59e0b"/>
        <polygon points="195,75 205,55 212,72" fill="#f59e0b"/>
        <polygon points="208,72 215,55 225,75" fill="#f59e0b"/>
        <circle cx="204" cy="88" r="3" fill="#0f172a"/>
        <circle cx="216" cy="88" r="3" fill="#0f172a"/>
        <!-- Yeşil Bayrak -->
        <circle cx="300" cy="55" r="14" fill="#15803d"/>
        <polygon points="296,48 306,53 296,58" fill="#ffffff"/>
        <!-- Kodlama Alanı (Alt) -->
        <rect x="35" y="160" width="350" height="60" rx="8" fill="#090d16" stroke="#ec4899" stroke-width="1.5"/>
        <!-- Sarı Başlatıcı Blok -->
        <rect x="50" y="172" width="60" height="36" rx="6" fill="#facc15"/>
        <text x="80" y="195" fill="#713f12" font-size="11" font-weight="bold" text-anchor="middle">Bayrak 🏁</text>
        <!-- Mavi Hareket Bloğu -->
        <rect x="115" y="172" width="60" height="36" rx="6" fill="#38bdf8"/>
        <text x="145" y="195" fill="#0c4a6e" font-size="11" font-weight="bold" text-anchor="middle">Sağa ➔</text>
        <!-- Kırmızı Dur Blok -->
        <rect x="180" y="172" width="45" height="36" rx="6" fill="#f43f5e"/>
        <text x="202" y="195" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Dur 🛑</text>
      </svg>`,
      caption: "ScratchJr Sahne, Karakter ve Blok Tabanlı Kodlama Masası"
    },
    section2: {
      title: "Renkli Blokların Görevleri",
      subtitle: "Tıpkı trafik lambaları gibi renkler blokların gücünü anlatır.",
      layout: "cards-3",
      cards: [
        {
          title: "Sarı Bloklar (Tetikleyici)",
          icon: "🟡",
          desc: "Hareketi neyin başlatacağını belirler (Yeşil bayrağa basılınca, karaktere dokununca)."
        },
        {
          title: "Mavi Bloklar (Hareket)",
          icon: "🔵",
          desc: "Karakteri sağa, sola, yukarı, aşağı hareket ettirir ve zıplatır."
        },
        {
          title: "Mor Bloklar (Görünüm)",
          icon: "🟣",
          desc: "Karaktere konuşma balonu ekler, büyütür, küçültür veya gizler."
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'İlk Karakterimi Sahneye Koyuyorum'",
      subtitle: "ScratchJr programını açıp kediye güzel bir arka plan (park) seçiyoruz.",
      steps: [
        { title: "Yeni Proje Aç", desc: "Artı (+) simgesine tıklayarak boş bir stüdyo açın." },
        { title: "Arka Planı Değiştir", desc: "Üstteki manzara simgesine tıklayıp orman veya park resmini seçin." },
        { title: "Karakteri Taşı", desc: "Sevimli kediyi sahnenin istediğiniz köşesine sürükleyip bırakın." }
      ],
      criteria: [
        "ScratchJr / Blok kodlama arayüzünü açabilme",
        "Sahneye uygun arka plan manzarası ekleyebilme",
        "Karakteri sahnede doğru konuma yerleştirebilme"
      ]
    },
    tips: {
      safetyTitle: "Blok Kodlama Tüyoları",
      safetyRules: [
        { bold: "Blokları Birbirine Yapıştır", text: "Bloklar yapboz gibidir; birbirine tık diye kilitlenmezse kodlar çalışmaz." },
        { bold: "Silmek İçin Yukarı At", text: "İstemediğiniz bir bloğu parmağınızla yukarıdaki blok paletine geri fırlatın." },
        { bold: "Yeşil Bayrağa Bas", text: "Kodunuzun nasıl çalıştığını görmek için her zaman yeşil bayrağa tıklayın." }
      ],
      myths: [
        { wrong: "Kod yazmak için binlerce karmaşık İngilizce kelime ezberlemek zorundayız.", correct: "Blok tabanlı kodlamada resimli ve renkli blokları sürükleyip birleştirmek yeterlidir!" }
      ]
    },
    quiz: {
      question: "ScratchJr blok tabanlı kodlama programında hazırladığımız animasyonu başlatmak için hangi renk bayrağa tıklarız?",
      options: [
        { text: "A) Kırmızı Bayrak", isCorrect: false },
        { text: "B) Yeşil Bayrak", isCorrect: true },
        { text: "C) Mavi Bayrak", isCorrect: false },
        { text: "D) Sarı Bayrak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Yeşil Bayrak, kodlama dünyasında 'Oyunu ve Animasyonu Başlat' anlamına gelir."
    },
    summaryRules: [
      { bold: "ScratchJr", text: "Çocukların çizgi film ve oyun stüdyosudur." },
      { bold: "Bloklar", text: "Yapboz gibi birleşerek bilgisayara komut verir." },
      { bold: "Yeşil Bayrak", text: "Tüm büyülü hareketleri başlatan anahtardır." }
    ],
    homework: "ScratchJr programında hangi hayvan karakterleri olduğunu inceleyip defterinize en sevdiğiniz karakteri çizin.",
    nextWeekPreview: "2. Dönem 1. Değerlendirme & Blok Kodlama Bulmacaları!"
  },

  // 29. HAFTA
  {
    week: 29,
    date: "29 Mart - 04 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "2. Dönem 1. Sınav",
    unitTheme: "tema-sinav",
    title: "2. Dönem 1. Değerlendirme & Blok Kodlama Bulmacaları",
    subtitle: "Karakterleri Doğru Bloklarla Eşleştirme ve Mini Kodlama Sınavı",
    outcomeCode: "BTY.2.5.2 (Değerlendirme & Pekiştirme)",
    targetSkill: "Algoritma, Yön Okları, Hata Ayıklama ve Blok Kodlama Temellerini Değerlendirme",
    curiosityQuestion: "Blok kodlama yarışmasında en az blokla karakteri hedefe ulaştıran minik yazılımcı hangi madalyayı kazanır?",
    roadmap: [
      { title: "Kod Bulmacaları", desc: "Karışık blok dizilerini doğru eşleştirme." },
      { title: "Hata Avcısı Testi", desc: "Çalışmayan blok dizisindeki hatalı parçayı bulma." },
      { title: "Renk ve Görev Eşleme", desc: "Sarı (Başla), Mavi (Hareket), Kırmızı (Dur)." },
      { title: "Kodlama Rozetleri", desc: "2. Dönem 1. Kodlama Şampiyonu belgelerini alma." }
    ],
    section1: {
      title: "Algoritmadan Blok Kodlamaya Başarı Köprüsü",
      subtitle: "2. dönemin ilk yarısında öğrendiğimiz süper kavramları test ediyoruz.",
      layout: "split-visual",
      card: {
        title: "Değerlendirme Konuları",
        icon: "🏆",
        desc: "Hakim olduğumuz 4 ana başlık:",
        items: [
          { bold: "Algoritma Mantığı", text: "Günlük hayattaki sıralı adımları ve hedefe gitmeyi biliyoruz." },
          { bold: "Yön Okları ve Labirent", text: "En kısa yoldan engelleri aşarak hazineyi buluyoruz." },
          { bold: "Hata Ayıklama (Debugging)", text: "Koddaki yanlışı tespit edip düzeltebiliyoruz." },
          { bold: "Bloklar ve Arayüz", text: "Yeşil bayrakla başlatıp mavi bloklarla hareket ettiriyoruz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
        <!-- Madalya / Yıldız Kupası -->
        <circle cx="210" cy="95" r="45" fill="#f59e0b" fill-opacity="0.25" stroke="#fbbf24" stroke-width="4"/>
        <text x="210" y="110" font-size="44" text-anchor="middle">🌟</text>
        <rect x="100" y="155" width="220" height="30" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="210" y="175" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">KODLAMA DEDEKTİFİ KUPASI</text>
        <text x="210" y="210" fill="#94a3b8" font-size="11" text-anchor="middle">Blokları başarıyla birleştiren 2. sınıflar!</text>
      </svg>`,
      caption: "2. Dönem 1. Değerlendirme Kodlama Başarı Kupası"
    },
    section2: {
      title: "Blok Eşleştirme Soru Odası",
      subtitle: "Hangi blok hangi görevi yapar? Kendimizi deneyelim:",
      layout: "cards-2",
      cards: [
        {
          title: "Bloklar ve Görevleri",
          icon: "🧩",
          desc: "Renklerin sırrını hatırlayalım:",
          items: [
            { bold: "Sarı Bayrak Bloğu", text: "Yeşil bayrağa basılınca kodları başlatır." },
            { bold: "Mavi Sağ Ok Bloğu", text: "Karakteri sağa doğru 1 adım yürütür." },
            { bold: "Mavi Yukarı Ok Bloğu", text: "Karakteri yukarı doğru zıplatır." },
            { bold: "Kırmızı Blok", text: "Çalışan kod dizisini sonlandırır ve durdurur." }
          ]
        },
        {
          title: "Senaryoyu Çöz!",
          icon: "🎯",
          desc: "Kedi köpeğe çarpmadan nasıl kaçar?",
          items: [
            { bold: "Senaryo", text: "Kedinin önünde bir köpek var. Kedi nasıl geçmeli?" },
            { bold: "Çözüm", text: "Önce yukarı zıplamalı, havadayken sağa gitmeli ve sonra yere inmelidir." },
            { bold: "Doğru Bloklar", text: "[Zıpla] ➔ [Sağa Git] ➔ [Aşağı İn]." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kodlama Şampiyonası'",
      subtitle: "Akıllı tahtada açılan blok bulmacalarını en az blok kullanarak çözüyoruz.",
      steps: [
        { title: "Hedefi İncele", desc: "Karakterin nereye gitmek istediğini görün." },
        { title: "Blokları Sırala", desc: "Sarı başlatıcı bloğun yanına doğru hareket bloklarını sürükleyin." },
        { title: "Yeşil Bayrağa Bas", desc: "Kodunuzu test edip hedefe ulaştığınızı kutlayın." }
      ],
      criteria: [
        "Blokların renklerini ve işlevlerini doğru ayırt edebilme",
        "En az blokla en verimli çözümü üretebilme",
        "Başarı rozetini alarak özgüven kazanma"
      ]
    },
    tips: {
      safetyTitle: "Sınav Tavsiyeleri",
      safetyRules: [
        { bold: "Adımları Parmakla Say", text: "Karakterin kaç adım gitmesi gerektiğini ekrana bakarak dikkatlice sayın." },
        { bold: "Başlatıcı Bloğu Unutma", text: "En başa sarı bayrak bloğu koymazsanız yeşil bayrağa bastığınızda hiçbir şey hareket etmez!" },
        { bold: "Gülümse ve Başar", text: "Sen bir kodlama ustasısın; kendine güven!" }
      ],
      myths: [
        { wrong: "Sarı bayrak bloğu olmadan da kodlar kendi kendine çalışır.", correct: "Her kod zincirinin başlaması için mutlaka en başta bir başlatıcı (tetikleyici) blok bulunmalıdır." }
      ]
    },
    quiz: {
      question: "ScratchJr'da hazırladığımız bir kod zincirinin yeşil bayrağa tıklandığında çalışması için en başa hangi blok konulmalıdır?",
      options: [
        { text: "A) Kırmızı Durdurma Bloğu", isCorrect: false },
        { text: "B) Üzerinde Yeşil Bayrak olan Sarı Başlatıcı Blok", isCorrect: true },
        { text: "C) Mavi Sağa Dönüş Bloğu", isCorrect: false },
        { text: "D) Mor Görünüm Bloğu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Sarı bayrak bloğu kapının anahtarı gibidir; yeşil bayrağa basıldığında arkasındaki tüm blokları sırayla çalıştırır."
    },
    summaryRules: [
      { bold: "Başarı", text: "Düzenli çalışan ve pratik yapan öğrencilerin ödülüdür." },
      { bold: "Blok Zinciri", text: "Tıpkı bir tren gibi vagon vagon birbirine bağlanır." },
      { bold: "Gelecek Hafta", text: "Karakterleri koşturma ve zıplatma animasyonları başlıyor!" }
    ],
    homework: "Kareli bir kağıda kendi hayalinizdeki bir oyun karakterini ve ona vereceğiniz 3 komut bloğunu çizin.",
    nextWeekPreview: "Karakterleri Hareket Ettirme: Yeşil Bayrak, Sarı Başlatıcılar ve Mavi Hareket Blokları!"
  },

  // 30. HAFTA
  {
    week: 30,
    date: "05 - 11 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Kodlama ve ScratchJr Dünyası",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Karakterleri Hareket Ettirme: Yeşil Bayrak ve Mavi Bloklar",
    subtitle: "Sağa Git, Sola Git, Zıpla ve Karakteri Başlangıç Noktasına Getir",
    outcomeCode: "BTY.2.5.3 (Hareket & Olay Tetikleyiciler)",
    targetSkill: "Karakteri Farklı Yönlerde Hareket Ettirme, Sayı Parametrelerini Değiştirme ve Zıplatma",
    curiosityQuestion: "Karakterimizin 1 adım değil de tek bir blokla 10 adım birden koşmasını nasıl sağlarız?",
    roadmap: [
      { title: "Mavi Bloklar Dünyası", desc: "Sağa (➔), Sola (⬅), Yukarı (⬆), Aşağı (⬇) ve Zıpla (⤴)." },
      { title: "Sayı Değerleri (Parametreler)", desc: "Bloğun altındaki sayıyı 1'den 5'e çıkararak hızlı ilerleme." },
      { title: "Zıplama Hareketi", desc: "Karakteri havaya zıplatıp tekrar zemine indirme." },
      { title: "Başlangıç Pozisyonu", desc: "Oyun bitince karakteri eski yerine çağırma." }
    ],
    section1: {
      title: "Mavi Hareket Bloklarının Gücü",
      subtitle: "Karakterimiz sahnede adeta dans eder gibi hareket eder.",
      layout: "split-visual",
      card: {
        title: "Temel Hareket Blokları",
        icon: "🏃‍♂️",
        desc: "Karakterimize hayat veren 5 mavi blok:",
        items: [
          { bold: "Sağa Git (➔)", text: "Karakteri ekranın sağına doğru yürütür." },
          { bold: "Sola Git (⬅)", text: "Karakteri ekranın soluna doğru yürütür." },
          { bold: "Zıpla Bloğu (⤴)", text: "Karakter neşeyle havaya sıçrar ve tekrar yere konar." },
          { bold: "Sayı Kutusu", text: "Bloğun altındaki küçük sayıya basıp 5 yazarsak karakter 5 adım birden gider!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Zıplayan Kedi İllüstrasyonu -->
        <path d="M120 160 C150 80, 210 80, 240 160" stroke="#fde047" stroke-width="3" stroke-dasharray="6,4"/>
        <!-- Zirve Noktadaki Kedi -->
        <circle cx="180" cy="85" r="20" fill="#f59e0b"/>
        <polygon points="168,70 176,55 182,68" fill="#f59e0b"/>
        <polygon points="178,68 185,55 192,70" fill="#f59e0b"/>
        <text x="180" y="90" font-size="12" text-anchor="middle">🐱</text>
        <!-- Blok Gösterimi -->
        <rect x="60" y="175" width="70" height="40" rx="6" fill="#facc15"/>
        <text x="95" y="200" fill="#713f12" font-size="11" font-weight="bold" text-anchor="middle">Bayrak 🏁</text>
        
        <rect x="135" y="175" width="70" height="40" rx="6" fill="#38bdf8"/>
        <text x="170" y="195" fill="#0c4a6e" font-size="11" font-weight="bold" text-anchor="middle">Zıpla ⤴</text>
        <circle cx="170" cy="207" r="7" fill="#ffffff"/>
        <text x="170" y="211" fill="#0c4a6e" font-size="9" font-weight="bold" text-anchor="middle">3</text>
        
        <rect x="210" y="175" width="70" height="40" rx="6" fill="#38bdf8"/>
        <text x="245" y="195" fill="#0c4a6e" font-size="11" font-weight="bold" text-anchor="middle">Sağa ➔</text>
        <circle cx="245" cy="207" r="7" fill="#ffffff"/>
        <text x="245" y="211" fill="#0c4a6e" font-size="9" font-weight="bold" text-anchor="middle">5</text>
        <text x="330" y="200" fill="#a7f3d0" font-size="11" font-weight="bold">Hedefe Ulaştı!</text>
      </svg>`,
      caption: "Zıplama ve Adım Sayısı Parametresi ile Karakter Hareketi"
    },
    section2: {
      title: "Sayı Parametresinin Sırrı",
      subtitle: "Aynı bloğu 5 kere yan yana dizmek yerine altına '5' yazarız!",
      layout: "cards-2",
      cards: [
        {
          title: "Sayı Tuş Takımı",
          icon: "🔢",
          desc: "Bloğun altındaki sayıya tıkladığımızda:",
          items: [
            { bold: "Tuş Takımı Açılır", text: "Ekrana 1'den 9'a kadar minik bir hesap makinesi gelir." },
            { bold: "İstediğin Sayıyı Seç", text: "Örneğin '4'e basarsanız karakter 4 adım boyu ilerler." },
            { bold: "Temiz Kod Masası", text: "Böylece kod alanımız kalabalıklaşmaz, sade ve şık kalır." }
          ]
        },
        {
          title: "Geriye Dönüş Butonu",
          icon: "🔄",
          desc: "Karakter ekranın sonuna gittiğinde:",
          items: [
            { bold: "Geri Çağırma Butonu", text: "Yeşil bayrağın yanındaki geri dönüş butonuna basarız." },
            { bold: "İlk Yerine Döner", text: "Karakter tıpış tıpış ilk başladığı noktaya ışınlanır." },
            { bold: "Yeniden Oyna", text: "Animasyonumuzu baştan tekrar izleyebiliriz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kedi Ağaca Tırmanıyor'",
      subtitle: "Kediyi sağa koşturan, ağacın dalına zıplatan ve orada durduran kodu yazıyoruz.",
      steps: [
        { title: "Park Arka Planı Seç", desc: "Ağaçlı güzel bir park manzarası ekleyin." },
        { title: "Adımları Ayarla", desc: "Sarı bayrak bloğunun yanına [Sağa Git: 6] bloğu ekleyin." },
        { title: "Zıplama Bloğunu Tak", desc: "Devamına [Zıpla: 4] bloğu takıp yeşil bayrağa basın." }
      ],
      criteria: [
        "Mavi hareket bloklarını amaca uygun bağlayabilme",
        "Blokların altındaki sayı parametrelerini değiştirebilme",
        "Animasyonu yeşil bayrakla başlatıp test edebilme"
      ]
    },
    tips: {
      safetyTitle: "Hareket Ustası Tüyoları",
      safetyRules: [
        { bold: "Karakter Ekrandan Kaçmasın", text: "Çok büyük sayılar (örn: 50) yazarsanız karakter ekranın dışına çıkıp kaybolabilir; 5-10 arası sayılar idealdir." },
        { bold: "Zıplama Yüksekliği", text: "Zıpla bloğunun altındaki sayı ne kadar büyük olursa o kadar yükseğe sıçrar." },
        { bold: "Blokları Birbirine Yaklaştır", text: "Blokların birbirine kenetlendiğini gösteren 'tık' sesini dinleyin." }
      ],
      myths: [
        { wrong: "Karakteri hareket ettirmek için farenin sol tuşuyla sürekli tutup çekmek zorundayız.", correct: "Blokları bir kere yazıp yeşil bayrağa bastığımızda karakter kendi kendine otomatik olarak hareket eder!" }
      ]
    },
    quiz: {
      question: "ScratchJr'da karakterin sağa doğru 5 adım birden yürümesi için en pratik yöntem hangisidir?",
      options: [
        { text: "A) Yan yana 5 tane [Sağa Git: 1] bloğu dizmek", isCorrect: false },
        { text: "B) Tek bir [Sağa Git] bloğu koyup altındaki sayıyı '5' yapmak", isCorrect: true },
        { text: "C) Bilgisayarın ekranını sağa doğru eğmek", isCorrect: false },
        { text: "D) Farenin sol tuşuna 5 kere vurmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bloğun altındaki sayıyı 5 yapmak, kodumuzu tertemiz tutar ve karakteri tek seferde 5 adım koşturur."
    },
    summaryRules: [
      { bold: "Mavi Bloklar", text: "Karakterimizin bacakları ve kanatlarıdır." },
      { bold: "Sayı Parametresi", text: "Adımların mesafesini ve hızını belirler." },
      { bold: "Gelecek Hafta", text: "2. Dönem Ara Tatil: İnteraktif Kodlama ve Masal Atölyesi!" }
    ],
    homework: "ScratchJr'da kedinin önce sağa 4 adım, sonra yukarı 3 adım zıplayıp durduğu bir animasyon hazırlayın.",
    nextWeekPreview: "2. Dönem Ara Tatil: İnteraktif Kodlama ve Masal Atölyesi & Kendi Masal Kahramanım!"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_TERM_2_PART1_GRADE2 = CURRICULUM_TERM_2_PART1_GRADE2;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULUM_TERM_2_PART1_GRADE2 };
}
