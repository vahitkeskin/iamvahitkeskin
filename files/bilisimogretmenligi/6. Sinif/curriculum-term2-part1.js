/**
 * 6. Sınıf Bilişim Teknolojileri - 2. Dönem Müfredat Verileri (Hafta 20 - 31)
 */

const CURRICULUM_TERM_2_PART1 = [
  // 20. HAFTA (YARIYIL TATİLİ 1)
  {
    week: 20,
    date: "25 - 31 Ocak",
    hours: "Tatil Bülteni",
    unit: "YARIYIL TATİLİ (1. Hafta)",
    unitBadge: "Yarıyıl Tatili",
    unitTheme: "unite-6",
    title: "Sömestr Kodlama & Algoritma Macera Bülteni",
    subtitle: "Tatilde Blok Tabanlı Kodlama Keşifleri ve Algoritmik Düşünme Oyunları",
    outcomeCode: "Tatil & Hazırlık",
    targetSkill: "Algoritmik Düşünme & Problem Çözme",
    curiosityQuestion: "Bilgisayarlar aslında çok akıllı değil, sadece kendilerine verilen emirleri çok hızlı yerine getiren robotlarsa, onlara nasıl emir veririz?",
    roadmap: [
      { title: "Algoritma Nedir?", desc: "Bir problemi çözmek için adım adım izlenen mantıksal yol haritası." },
      { title: "Günlük Hayatta Algoritma", desc: "Sabah uyanıp okula hazırlanmaktan kek tarifine kadar her şey bir algoritmadır." },
      { title: "Scratch'e İlk Bakış", desc: "scratch.mit.edu adresinde ücretsiz hesap açma ve dünyadaki projeleri inceleme." },
      { title: "Tatil Kodlama Görevi", desc: "Sevdiğin bir çizgi film kahramanına algoritmayla labirent çözdürmek." }
    ],
    section1: {
      title: "Algoritma: Bilgisayarın Düşünme Mantığı",
      subtitle: "Adım adım, açık, net ve sıralı talimatlar dizisi.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Algoritmanın 3 Altın Kuralı",
          icon: "🚶",
          borderClass: "card-primary-border",
          desc: "Her algoritmanın mutlaka uyması gereken temel yapı:",
          items: [
            { bold: "1. Bir Başlangıcı ve Sonu Vardır", text: "Algoritma 'BAŞLA' ile başlar ve hedefe ulaşınca 'BİTİR' ile sonlanır." },
            { bold: "2. Adımlar Net ve Sıralıdır", text: "'Biraz yürü' denmez, '3 adım ileri git' gibi kesin emirler verilir." },
            { bold: "3. Sonsuz Döngüye Girmemeli", text: "Hedefe ulaşınca durmasını sağlayan şartlar belirlenmelidir." }
          ]
        },
        {
          title: "Diş Fırçalama Algoritması Örneği",
          icon: "🪥",
          borderClass: "card-accent-border",
          desc: "Günlük hayattaki basit bir eylemin algoritması:",
          items: [
            { bold: "Adım 1", text: "BAŞLA." },
            { bold: "Adım 2", text: "Diş fırçasını ve macunu al." },
            { bold: "Adım 3", text: "Fırçanın üzerine nohut tanesi kadar macun sık." },
            { bold: "Adım 4", text: "Dişlerini 2 dakika boyunca dairesel hareketlerle fırçala." },
            { bold: "Adım 5", text: "Ağzını ve fırçayı suyla çalkala." },
            { bold: "Adım 6", text: "BİTİR." }
          ]
        }
      ]
    },
    section2: {
      title: "Tatilde Scratch Dünyasını Keşfedin",
      subtitle: "2. dönemde kullanacağımız MIT Scratch platformuna ısınma turu.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Scratch Nedir?",
          icon: "🐱",
          borderClass: "card-success-border",
          desc: "Dünyanın en ünlü üniversitelerinden MIT tarafından çocuklar için tasarlanan blok tabanlı kodlama platformudur.",
          items: [
            { bold: "Yazım Hatası Yok!", text: "Noktalı virgül veya harf hatası yapmazsınız; Lego gibi blokları birbirine takarak kod yazarsınız." },
            { bold: "Kendi Oyununu Yap", text: "Kendi kahramanlarını çizebilir, puanlı oyunlar ve animasyonlar yapabilirsiniz." }
          ]
        },
        {
          title: "Sömestrde Neler Yapabilirsiniz?",
          icon: "🎮",
          borderClass: "card-purple-border",
          desc: "scratch.mit.edu adresinde ücretsiz olarak:",
          items: [
            { bold: "'Fikirler' Sekmesi", text: "Başlangıç eğitim kartlarını inceleyin." },
            { bold: "'İçine Bak' Butonu", text: "Beğendiğiniz oyunların kod bloklarını inceleyip nasıl yapıldığını keşfedin." }
          ]
        }
      ]
    },
    workshop: {
      title: "Robot Arkadaşına Çay Demleme Algoritması Yaz",
      subtitle: "Arkadaşınız bir robot ve hiçbir şey bilmiyor; ona adım adım tarif edin.",
      steps: [
        { title: "Adımları Yaz", desc: "Defterinize 1'den 7'ye kadar çay demlemenin tüm adımlarını en ince ayrıntısına kadar yazın." },
        { title: "Eksik Adımı Yakala", desc: "'Suyu kaynat' dediniz ama 'Ocağı yak' dediniz mi? Robot ocağı yakmadan bekler!" },
        { title: "Algoritmayı Düzelt", desc: "Hatalı sırayı düzelterek kusursuz çalışan bir algoritma elde edin." }
      ],
      criteria: [
        "Adımların sıralı ve mantıklı olması",
        "Hiçbir ara adımın atlanmaması",
        "Algoritmik düşünme becerisini günlük hayata uygulama"
      ]
    },
    tips: {
      safetyTitle: "Scratch Topluluk Kuralları",
      safetyRules: [
        { bold: "Kullanıcı Adı Seçimi", text: "Scratch hesabı açarken gerçek adınızı ve soyadınızı değil, sevimli bir takma ad (rumuz) kullanın." },
        { bold: "Nezaket", text: "Diğer öğrencilerin projelerine sadece yapıcı ve kibar yorumlar yapın." }
      ],
      myths: [
        { wrong: "Kodlama öğrenmek için çok ileri düzey matematik ve İngilizce bilmek gerekir.", correct: "Blok tabanlı kodlama Türkçe bloklarla oynanan eğlenceli bir yapboz oyunudur!" }
      ]
    },
    quiz: {
      question: "Bir problemin çözümü için adım adım, mantıklı ve sıralı olarak tasarlanan işlem basamaklarının tümüne ne ad verilir?",
      options: [
        { text: "A) Piksel", isCorrect: false },
        { text: "B) Algoritma", isCorrect: true },
        { text: "C) Çözünürlük", isCorrect: false },
        { text: "D) Donanım", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Algoritma, bilgisayar programlamasının temel taşı olan mantıksal işlem adımları dizisidir."
    },
    summaryRules: [
      { bold: "Algoritma = Tarif", text: "Bilgisayara ne yapacağını tane tane anlatma sanatıdır." },
      { bold: "Scratch Hazırlığı", text: "2. döneme hazır olmak için Scratch arayüzünü tanımaya başlayın." },
      { bold: "Tatilde Üretim", text: "Ekran sürenizi eğlenceli kodlama keşifleriyle değerlendirin." }
    ],
    homework: "Evden markete gidiş yolunuzun krokisini ve adım adım algoritmasını defterinize çizin.",
    nextWeekPreview: "Yarıyıl Tatili 2. Hafta: Dijital Tasarım & Yapay Zekâ Proje Fikirleri!"
  },

  // 21. HAFTA (YARIYIL TATİLİ 2)
  {
    week: 21,
    date: "01 - 07 Şubat",
    hours: "Tatil Bülteni",
    unit: "YARIYIL TATİLİ (2. Hafta)",
    unitBadge: "Yarıyıl Tatili",
    unitTheme: "unite-6",
    title: "Sömestr Yapay Zekâ & Dijital Tasarım",
    subtitle: "2. Dönem Projelerine Hazırlık, Piksel Sanatı (Pixel Art) ve YZ Fikirleri",
    outcomeCode: "Tatil & Hazırlık",
    targetSkill: "Dijital Tasarım & Proje Planlama",
    curiosityQuestion: "Kendi oyununuzun karakterlerini ve arka planlarını piksel piksel kendiniz çizmek ister miydiniz?",
    roadmap: [
      { title: "Piksel Sanatı (Pixel Art)", desc: "Kare ızgaralar üzerinde retro oyun karakterleri tasarlama sanatı." },
      { title: "Oyun Tasarım Temelleri", desc: "Oyunun amacı, kuralları, engelleri ve kazanma şartı (Game Design)." },
      { title: "Yapay Zekâ + Kodlama", desc: "2. dönemde Scratch içine yapay zekâ kamera modelleri ekleyeceğiz!" },
      { title: "2. Döneme Enerjik Başlangıç", desc: "Laboratuvar kuralları ve ilk ders için hazırlık notları." }
    ],
    section1: {
      title: "Oyun Tasarımının Sırları (Game Design)",
      subtitle: "Bir oyunu bağımlılık yapacak kadar eğlenceli kılan 4 temel unsur.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Bir Oyunun 4 Temel Direği",
          icon: "🕹️",
          borderClass: "card-primary-border",
          desc: "Kodlamaya başlamadan önce kâğıt üzerinde tasarlanması gerekenler:",
          items: [
            { bold: "1. Kahraman (Kukla)", text: "Oyuncunun kontrol ettiği ana karakter (Kedi, astronot, kuş)." },
            { bold: "2. Hedef (Görev)", text: "Oyuncu ne yapmaya çalışıyor? (Elmaları toplamak, prensesi kurtarmak)." },
            { bold: "3. Engel / Tehlike", text: "Oyuncuyu zorlaştıran şeyler (Dikenler, hareket eden canavarlar, süre)." },
            { bold: "4. Ödül / Puan", text: "Skor sayacı ve seviye atlama mekaniği." }
          ]
        },
        {
          title: "Kendi Karakterini Çiz: Piksel Sanatı",
          icon: "👾",
          borderClass: "card-accent-border",
          desc: "Kareli defterde veya 'Piskel' gibi ücretsiz sitelerde:",
          items: [
            { bold: "Kare Izgara Mantığı", text: "Her kare bir pikseldir. Renkleri yan yana koyarak karakter üretin." },
            { bold: "Kostüm Animasyonu", text: "Karakterin kollarını hafifçe değiştirip 2 farklı kare çizerek yürüyüş efekti oluşturun." }
          ]
        }
      ]
    },
    section2: {
      title: "2. Dönem Bizi Neler Bekliyor?",
      subtitle: "Bilişim dersinin en heyecan verici dönemi başlıyor!",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Şubat - Mart",
          icon: "🐱",
          borderClass: "card-primary-border",
          desc: "Scratch Arayüzü, Hareket ve Görünüm blokları, Şartlar ve Değişkenler.",
          items: [
            { bold: "Ürün", text: "Klavye ile kontrol edilen labirent ve yakalama oyunları." }
          ]
        },
        {
          title: "Nisan - Mayıs",
          icon: "🤖",
          borderClass: "card-purple-border",
          desc: "Yapay Zekâ Eklentileri, Video Algılama ve Teachable Machine entegrasyonu.",
          items: [
            { bold: "Ürün", text: "Kameraya el sallayınca zıplayan akıllı oyunlar." }
          ]
        },
        {
          title: "Haziran",
          icon: "🏆",
          borderClass: "card-success-border",
          desc: "Büyük Proje Sergisi, Yıl Sonu Teknoloji Şenliği ve Başarı Belgeleri.",
          items: [
            { bold: "Ürün", text: "Kendi geliştirdiğiniz projeyi tüm okula sunma!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Kareli Defterde Kendi Oyun Karakterini Çiz",
      subtitle: "16x16 karelik bir alanda kendi oyun avatarını tasarla.",
      steps: [
        { title: "Kareleri Say", desc: "Kareli defterinizden 16'ya 16'lık bir kare alanı kurşun kalemle çerçeveleyin." },
        { title: "Pikselleri Boya", desc: "Renkli boya kalemlerinizle bir canavar, kahraman veya uzay gemisi çizin." },
        { title: "Özellik Yaz", desc: "Karakterinin adını, özel gücünü ve zayıf noktasını kâğıdın altına not et." }
      ],
      criteria: [
        "Piksel mantığını (kareleri) doğru kullanma",
        "Renkli ve özgün bir karakter tasarımı oluşturma",
        "Karaktere mantıklı bir oyun hikayesi yazma"
      ]
    },
    tips: {
      safetyTitle: "Okula Dönüş Hazırlığı",
      safetyRules: [
        { bold: "Laboratuvar Temizliği", text: "Bilişim sınıfına yiyecek ve içecekle girilmez; klavye ve farelerimizi temiz tutalım." },
        { bold: "Defter ve Kalem", text: "Kodlamaya başlamadan önce her zaman kâğıt üzerinde plan yapacağız, defterinizi unutmayın." }
      ],
      myths: [
        { wrong: "İyi bir oyun yapmak için 3D gerçekçi grafikler şarttır.", correct: "Minecraft ve Flappy Bird gibi dünyanın en çok oynanan oyunları en basit piksel grafiklere sahiptir; önemli olan oyunun eğlencesidir!" }
      ]
    },
    quiz: {
      question: "Bir bilgisayar oyununda oyuncunun hedefe ulaşmasını zorlaştıran ve heyecan katan engeller ile can/puan sistemini planlama sürecine ne denir?",
      options: [
        { text: "A) Oyun Tasarımı (Game Design)", isCorrect: true },
        { text: "B) Modem Kurulumu", isCorrect: false },
        { text: "C) Sabit Disk Temizliği", isCorrect: false },
        { text: "D) E-Posta Gönderimi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Oyun Tasarımı (Game Design), oyunun kurallarını, amacını ve mekaniklerini kodlamadan önce planlama sanatıdır."
    },
    summaryRules: [
      { bold: "Fikir = Oyunun Ruhu", text: "İyi bir oyun fikri, kodlamanın yarısını bitirmek demektir." },
      { bold: "Piksellerden Büyüye", text: "Basit kare çizimlerle harika oyun dünyaları inşa edilebilir." },
      { bold: "2. Dönem Başlıyor!", text: "Gelecek hafta laboratuvarda ilk Scratch projemizi başlatıyoruz!" }
    ],
    homework: "Tatilde çizdiğiniz oyun karakteri çizimini dosyanıza koyun ve ilk bilişim dersine getirin.",
    nextWeekPreview: "2. Dönem Başlıyor: Blok Tabanlı Programlama Ortamı (Scratch) ile Tanışma!"
  },

  // 22. HAFTA
  {
    week: 22,
    date: "08 - 14 Şubat",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Blok Tabanlı Programlamaya Giriş (Scratch)",
    subtitle: "Scratch Arayüzü: Sahne, Kuklalar, Blok Paleti ve Koordinat Düzlemi (X, Y)",
    outcomeCode: "BTY.6.6.1",
    targetSkill: "Programlama Arayüzü & Koordinat Sistemi",
    curiosityQuestion: "Scratch sahnesindeki sevimli sarı kedi kuklasının tam ortada durduğunu matematiksel olarak nasıl anlarız?",
    roadmap: [
      { title: "Scratch Arayüzünün 4 Bölgesi", desc: "1. Sahne (Stage), 2. Kukla Paneli, 3. Blok Paleti, 4. Kodlama Alanı." },
      { title: "Yeşil Bayrak & Kırmızı Durdur", desc: "Kodları çalıştıran ve durduran ana kumanda butonları." },
      { title: "Sahne Koordinat Düzlemi", desc: "X ekseni (-240 ile +240) ve Y ekseni (-180 ile +180)." },
      { title: "İlk Kod Bloğu", desc: "Yeşil bayrağa tıklandığında 10 adım git ve 'Merhaba!' de." }
    ],
    roadmapSvg: `
      <svg viewBox="0 0 400 240">
        <rect x="10" y="10" width="380" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <!-- Block Palette Left (Blue/Orange) -->
        <rect x="15" y="15" width="80" height="210" fill="#f1f5f9" stroke="#cbd5e1"/>
        <text x="55" y="32" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">Blok Paleti</text>
        <rect x="22" y="45" width="66" height="18" rx="4" fill="#4c97ff"/><text x="55" y="58" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Hareket</text>
        <rect x="22" y="70" width="66" height="18" rx="4" fill="#9966ff"/><text x="55" y="83" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Görünüm</text>
        <rect x="22" y="95" width="66" height="18" rx="4" fill="#d65cd6"/><text x="55" y="108" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Ses</text>
        <rect x="22" y="120" width="66" height="18" rx="4" fill="#ffd500"/><text x="55" y="133" text-anchor="middle" font-size="8" fill="#333" font-weight="bold">Olaylar</text>
        <rect x="22" y="145" width="66" height="18" rx="4" fill="#ffab19"/><text x="55" y="158" text-anchor="middle" font-size="8" fill="#fff" font-weight="bold">Kontrol</text>
        <!-- Script Area Middle -->
        <rect x="100" y="15" width="160" height="210" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="180" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#64748b">Kodlama Alanı</text>
        <!-- Connected Blocks -->
        <path d="M115,55 h70 a6,6 0 0 1 6,6 v15 a6,6 0 0 1 -6,6 h-70 z" fill="#ffd500"/>
        <text x="150" y="70" font-size="8" font-weight="bold" fill="#333">🏳️ tıklandığında</text>
        <path d="M115,76 h70 a4,4 0 0 1 4,4 v16 a4,4 0 0 1 -4,4 h-70 z" fill="#4c97ff"/>
        <text x="150" y="92" font-size="8" font-weight="bold" fill="#fff">10 adım git</text>
        <!-- Stage Right -->
        <rect x="265" y="15" width="120" height="130" fill="#e2e8f0" stroke="#cbd5e1"/>
        <circle cx="280" cy="27" r="6" fill="#22c55e"/><circle cx="295" cy="27" r="6" fill="#ef4444"/>
        <text x="325" y="75" text-anchor="middle" font-size="28">🐱</text>
        <text x="325" y="125" text-anchor="middle" font-size="9" fill="#475569" font-weight="bold">Sahne (X:0, Y:0)</text>
        <!-- Sprite Pane Right Bottom -->
        <rect x="265" y="150" width="120" height="75" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="325" y="165" text-anchor="middle" font-size="8" font-weight="bold" fill="#64748b">Kukla Listesi</text>
        <rect x="275" y="175" width="30" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6"/>
        <text x="290" y="198" text-anchor="middle" font-size="12">🐱</text>
      </svg>
    `,
    section1: {
      title: "Scratch Arayüzünün 4 Ana Bölgesi",
      subtitle: "Kod bloklarından canlı sahneye Scratch ekranının haritası.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "1. Sahne (Stage) & 2. Kukla Paneli",
          icon: "🎭",
          borderClass: "card-primary-border",
          desc: "Oyunun canlandığı ve karakterlerin yönetildiği ekran:",
          items: [
            { bold: "Sahne (Stage)", text: "Kodladığınız her şeyin canlı çalıştığı alandır. Sağ üstte yer alır." },
            { bold: "Yeşil Bayrak", text: "Programı başlatır. Kırmızı Durdur butonu tüm kodları durdurur." },
            { bold: "Kukla (Sprite)", text: "Oyundaki tüm karakterlere kukla denir (Kedi, top, prenses)." },
            { bold: "Dekor (Backdrop)", text: "Sahnenin arka plan resmidir (Uzay, futbol sahası, orman)." }
          ]
        },
        {
          title: "3. Blok Paleti & 4. Kodlama Alanı",
          icon: "🧩",
          borderClass: "card-accent-border",
          desc: "Kodların seçildiği ve yapboz gibi birleştirildiği alan:",
          items: [
            { bold: "Blok Paleti (Sol)", text: "Renklerine göre ayrılmış komut kütüphanesidir (Mavi=Hareket, Mor=Görünüm, Sarı=Olaylar vb.)." },
            { bold: "Kodlama Alanı (Orta)", text: "Blokları farenizle sürükleyip bıraktığınız geniş çalışma masasıdır." },
            { bold: "Mıknatıs Etkisi", text: "Bloklar birbirine yaklaştığında tık diye kenetlenir." }
          ]
        }
      ]
    },
    section2: {
      title: "Sahne Koordinat Sistemi: X ve Y Eksenleri",
      subtitle: "Kuklaların sahnedeki yerini belirleyen matematiksel adresler.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "X Ekseni: Yatay Hareket (Sağ - Sol)",
          icon: "↔️",
          borderClass: "card-success-border",
          desc: "Sahne toplam 480 birim genişliğindedir:",
          items: [
            { bold: "X: 0", text: "Sahnenin tam ORTASIDIR." },
            { bold: "X: +240", text: "Sahnenin en SAĞ kenarıdır (X'i 10 artır = Sağa git)." },
            { bold: "X: -240", text: "Sahnenin en SOL kenarıdır (X'i -10 artır = Sola git)." }
          ]
        },
        {
          title: "Y Ekseni: Dikey Hareket (Yukarı - Aşağı)",
          icon: "↕️",
          borderClass: "card-purple-border",
          desc: "Sahne toplam 360 birim yüksekliğindedir:",
          items: [
            { bold: "Y: 0", text: "Sahnenin tam ORTASIDIR." },
            { bold: "Y: +180", text: "Sahnenin en ÜST tavanıdır (Y'yi 10 artır = Zıpla/Yukarı git)." },
            { bold: "Y: -180", text: "Sahnenin en ALT tabanıdır (Y'yi -10 artır = Düş/Aşağı git)." }
          ]
        }
      ]
    },
    workshop: {
      title: "İlk Kodumuz: 'Kediyi Sahnenin Ortasına Işınla'",
      subtitle: "Scratch'i açıp ilk kod bloğu grubumuzu çalıştıralım.",
      steps: [
        { title: "Yeşil Bayrağı Al", desc: "Sarı 'Olaylar' menüsünden 'tıklandığında' bloğunu kodlama alanına sürükleyin." },
        { title: "Konuma Git Bloğunu Ekle", desc: "Mavi 'Hareket' menüsünden 'x: 0 y: 0 konumuna git' bloğunu altına takın." },
        { title: "Konuştur", desc: "Mor 'Görünüm' menüsünden '2 saniye Merhaba! de' bloğunu ekleyip Yeşil Bayrağa basın!" }
      ],
      criteria: [
        "Blokların doğru sırayla kenetlenmesi",
        "X: 0 ve Y: 0 noktasının sahne ortası olduğunun gözlemlenmesi",
        "Yeşil bayrağa basıldığında kedinin konuşması"
      ]
    },
    tips: {
      safetyTitle: "Scratch Kullanırken Pratik İpuçları",
      safetyRules: [
        { bold: "Blok Silme", text: "Yanlış bir bloğu silmek için sol taraftaki blok paletine doğru geri sürükleyip bırakmanız yeterlidir." },
        { bold: "Dili Türkçe Yapma", text: "Üst menüdeki Dünya (küre) simgesine tıklayarak arayüzü Türkçe yapabilirsiniz." }
      ],
      myths: [
        { wrong: "Kukla ekrandan kaybolursa bir daha geri getirilemez.", correct: "'x: 0 y: 0 konumuna git' ve 'görün' bloklarına çift tıklayarak kuklayı anında sahneye çağırabilirsiniz." }
      ]
    },
    quiz: {
      question: "Scratch sahnesinde bir kuklanın tam ortada yer alması için X ve Y koordinatları sırasıyla ne olmalıdır?",
      options: [
        { text: "A) X: 100, Y: 100", isCorrect: false },
        { text: "B) X: 0, Y: 0", isCorrect: true },
        { text: "C) X: -240, Y: 180", isCorrect: false },
        { text: "D) X: 240, Y: -180", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Scratch sahnesinin tam merkezi X: 0 ve Y: 0 koordinat noktasıdır."
    },
    summaryRules: [
      { bold: "4 Ana Bölge", text: "Blok Paleti, Kodlama Alanı, Sahne ve Kukla Listesi." },
      { bold: "X Yatay, Y Dikey", text: "X sağ-sol, Y yukarı-aşağı koordinat eksenidir." },
      { bold: "Bayrak Başlatır", text: "Yeşil bayrak kodları harekete geçiren başlangıç anahtarıdır." }
    ],
    homework: "Scratch'te 'Kütüphane'den yeni bir kukla ve bir dekor ekleyip projenizi bilgisayarınıza kaydedin.",
    nextWeekPreview: "Hareket, Görünüm ve Ses Blokları: Yürüyen, Dans Eden ve Şarkı Söyleyen Kuklalar!"
  },

  // 23. HAFTA
  {
    week: 23,
    date: "15 - 21 Şubat",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Hareket, Görünüm ve Ses Blokları",
    subtitle: "Adım Git, Yönel, Kostüm Değiştir, Boyut Ayarla ve Ses Çal",
    outcomeCode: "BTY.6.6.1",
    targetSkill: "Kukla Animasyonu & Blok Entegrasyonu",
    curiosityQuestion: "Bir kuklanın kayarak değil, gerçek bir insan gibi bacaklarını hareket ettirerek yürümesini nasıl sağlarız?",
    roadmap: [
      { title: "Mavi Hareket Blokları", desc: "10 adım git, 15 derece dön, 90 yönüne yönel, kenara geldiyse sektir." },
      { title: "Mor Görünüm Blokları", desc: "Sonraki kostüme geç, konuşma balonu çıkar, boyutu %50 yap, renk efekti ver." },
      { title: "Pembe Ses Blokları", desc: "Miyav sesini çal, ses perdesini değiştir ve durdur." },
      { title: "İlk Animasyonumuz", desc: "Yürüyen, konuştukça ağzı açılan ve arkasından müzik çalan kedi projesi." }
    ],
    section1: {
      title: "Mavi Hareket Blokları: Sahneyi Fethet",
      subtitle: "Kuklanızı istediğiniz yöne koşturmanın formülleri.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Temel Hareket Komutları",
          icon: "🏃",
          borderClass: "card-primary-border",
          desc: "Kuklanın sahnede yer değiştirmesini sağlayan bloklar:",
          items: [
            { bold: "10 Adım Git", text: "Kukla o anda baktığı yöne doğru 10 piksel ilerler." },
            { bold: "90 Yönüne Yönel", text: "90=Sağ, -90=Sol, 0=Yukarı, 180=Aşağı yöne dönmesini sağlar." },
            { bold: "Kenara Geldiyse Sek", text: "Kukla ekranın dışına çıkıp kaybolmasın diye duvardan geri sekmesini sağlar." },
            { bold: "Dönüş Stilini Ayarla", text: "Kukla sola dönünce baş aşağı olmasın diye 'sol-sağ' dönüş stili seçilir." }
          ]
        },
        {
          title: "Süzülerek Gitme (Glide)",
          icon: "✈️",
          borderClass: "card-accent-border",
          desc: "Işınlanmak yerine pürüzsüz kayma efekti:",
          items: [
            { bold: "1 Saniyede x:... y:... Git", text: "Kuklanın belirtilen noktaya 1 saniye boyunca yumuşak bir şekilde uçarak gitmesini sağlar." },
            { bold: "Rastgele Konuma Git", text: "Kuklayı sahnenin sürpriz bir yerine anında gönderir (Yakalama oyunları için harikadır!)." }
          ]
        }
      ]
    },
    section2: {
      title: "Görünüm & Ses Blokları: Hayat Verin!",
      subtitle: "Kostümler sayesinde canlı animasyonlar ve neşeli ses efektleri.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Kostüm Değiştirme ile Yürüme",
          icon: "👗",
          borderClass: "card-purple-border",
          desc: "Kuklanın içinde birden fazla çizim karesi (kostüm) bulunur:",
          items: [
            { bold: "Sonraki Kostüm", text: "Her adımda sonraki kostüme geçildiğinde kukla bacaklarını oynatıyormuş gibi görünür." },
            { bold: "Konuşma Balonları", text: "'... de' (belirtilen saniye boyunca ekranda kalır) veya '... düşün' (düşünce balonu çıkarır)." },
            { bold: "Boyut ve Efekt", text: "Boyutu %10 artırarak yaklaşma hissi veya renk efektiyle yanıp sönme." }
          ]
        },
        {
          title: "Ses Blokları (Pembe)",
          icon: "🔊",
          borderClass: "card-success-border",
          desc: "Oyunlarınıza işitsel heyecan katın:",
          items: [
            { bold: "... Sesini Bitene Kadar Çal", text: "Ses tamamen bitene kadar sonraki kod bloğuna geçmez (Şarkılar için)." },
            { bold: "... Sesini Başlat", text: "Sesi çalarken aynı anda kukla hareket etmeye devam eder (Hızlı oyun sesleri için)." },
            { bold: "Kendi Sesini Kaydet", text: "Mikrofonla kendi sesinizi kaydedip kuklaya konuşturabilirsiniz!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Sahnede Yürüyen ve Konuşan Kedi Animasyonu",
      subtitle: "Kedinin sahne boyunca yürüyüp miyavlamasını kodlayalım.",
      steps: [
        { title: "Döngü Ekle", desc: "Kontrol menüsünden '10 defa tekrarla' bloğunu ekleyin." },
        { title: "Hareket ve Kostüm Tak", desc: "İçine '10 adım git' ve 'sonraki kostüm' bloklarını koyun." },
        { title: "Hızı Ayarla ve Ses Çal", desc: "Araya '0.2 saniye bekle' ekleyin ki bacak hareketi görünsün. Döngü bitince 'Miyav sesini çal' deyin!" }
      ],
      criteria: [
        "Kedinin bacaklarının doğal şekilde hareket etmesi",
        "0.2 saniye bekleme ile animasyon hızının dengelenmesi",
        "Ses bloğunun doğru yerde çalışması"
      ]
    },
    tips: {
      safetyTitle: "En Sık Yapılan Hata: Işık Hızında Yürüme",
      safetyRules: [
        { bold: "0.1 - 0.2 Saniye Bekle", text: "Eğer 'sonraki kostüm' arasına bekleme koymazsanız bilgisayar saniyede 1000 kez kostüm değiştirir ve kedi titriyormuş gibi görünür!" },
        { bold: "Dönüş Tarzı", text: "Kediniz baş aşağı yürüyorsa kukla ayarlarından yön kısmındaki 'Sağ/Sol' butonunu seçin." }
      ],
      myths: [
        { wrong: "'10 adım git' komutu kediyi 10 metre ileri götürür.", correct: "Scratch'te 'adım' piksel demektir. 10 adım sadece 10 piksellik minik bir ilerlemedir." }
      ]
    },
    quiz: {
      question: "Scratch'te bir kuklanın yürüyormuş gibi görünmesini sağlamak için '10 adım git' bloğunun hemen altına hangi blok eklenmelidir?",
      options: [
        { text: "A) Dekor 1'e geç", isCorrect: false },
        { text: "B) Sonraki kostüm", isCorrect: true },
        { text: "C) Hepsini durdur", isCorrect: false },
        { text: "D) X'i 0 yap", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Kuklanın farklı bacak çizimlerine geçmesi için 'Sonraki kostüm' bloğu kullanılır."
    },
    summaryRules: [
      { bold: "Hareket + Kostüm = Canlılık", text: "Adım gitme ve kostüm değiştirme birleşince gerçek animasyon doğar." },
      { bold: "Bekleme Zamanı", text: "Gözün kareleri seçebilmesi için 0.1-0.2 saniye bekleme şarttır." },
      { bold: "Ses Atmosferi", text: "Ses efektleri oyuna heyecan ve gerçeklik katar." }
    ],
    homework: "Scratch kütüphanesinden uçan bir yarasa veya yürüyen bir ayı kuklası seçip sahne boyunca yürütün.",
    nextWeekPreview: "Olaylar, Kontrol ve Algılama Blokları: Klavyeyle Kukla Yönetme ve Döngüler!"
  },

  // 24. HAFTA
  {
    week: 24,
    date: "22 - 28 Şubat",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Olaylar, Kontrol & Algılama Blokları",
    subtitle: "Tetikleyiciler (Events), Döngüler (Loops) ve Dokunma Algılama (Sensing)",
    outcomeCode: "BTY.6.6.1",
    targetSkill: "Olay Yönetimi & İnteraktif Kontrol",
    curiosityQuestion: "Klavyedeki sağ ok tuşuna bastığınızda kuklanın anında sağa doğru koşmasını sağlayan gizli bekçi komutu nedir?",
    roadmap: [
      { title: "Sarı Olaylar (Events)", desc: "Bayrak tıklandığında, tuş basılınca, kuklaya tıklanınca tetikleyicileri." },
      { title: "Turuncu Kontrol (Loops)", desc: "'Sürekli tekrarla' (Forever) ve '10 defa tekrarla' döngüleri." },
      { title: "Açık Mavi Algılama", desc: "Fare imlecine değiyor mu? Renge dokunuyor mu? Boşluk tuşu basılı mı?" },
      { title: "Ok Tuşlarıyla Karakter Yönetimi", desc: "Klavyenin 4 ok tuşuyla sahada özgürce gezen kahraman projesi." }
    ],
    section1: {
      title: "Olaylar (Events) ve Döngüler (Loops)",
      subtitle: "Kodların ne zaman çalışacağını ve ne kadar tekrarlanacağını belirleyin.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Olay Blokları: Tetikleyiciler",
          icon: "⚡",
          borderClass: "card-primary-border",
          desc: "Tüm kod bloklarının en tepesine takılan şapka bloklardır:",
          items: [
            { bold: "Yeşil Bayrağa Tıklandığında", text: "Oyun başladığında otomatik çalışan ana başlatıcı." },
            { bold: "[Boşluk] Tuşuna Basılınca", text: "Belirtilen tuşa basıldığı anda altındaki kodları ateşler (Zıplama vb.)." },
            { bold: "Bu Kuklaya Tıklandığında", text: "Fareyle kuklanın üzerine tıklandığında çalışır (Butonlar için idealdir)." }
          ]
        },
        {
          title: "Kontrol Blokları: Döngüler",
          icon: "🔁",
          borderClass: "card-accent-border",
          desc: "Aynı kodları defalarca alt alta yazmaktan kurtaran sihirli bloklar:",
          items: [
            { bold: "Sürekli Tekrarla (Forever)", text: "Oyun durdurulana kadar içindeki kodları aralıksız sonsuza dek çalıştırır." },
            { bold: "10 Defa Tekrarla", text: "İçindeki kodları tam 10 kez çalıştırıp durur." },
            { bold: "... Olana Kadar Bekle", text: "Belirli bir olay gerçekleşene kadar akışı durdurur." }
          ]
        }
      ]
    },
    section2: {
      title: "Algılama Blokları (Sensing): Dünyayı Hisset",
      subtitle: "Kuklanın çevresindeki nesneleri, renkleri ve fareyi hissetmesi.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Temel Algılama Durumları",
          icon: "📡",
          borderClass: "card-success-border",
          desc: "Şart bloklarının içine takılan altıgen bilgi blokları:",
          items: [
            { bold: "Fare İmlecine Değiyor mu?", text: "Kukla fareye veya başka bir kuklaya dokundu mu kontrol eder." },
            { bold: "[Yeşil] Rengine Dokunuyor mu?", text: "Labirent duvarına veya çimlere değip değmediğini algılar." },
            { bold: "[Sağ Ok] Tuşuna Basıldı mı?", text: "Tuşun o an basılı tutulup tutulmadığını anlık olarak kontrol eder." }
          ]
        },
        {
          title: "Kullanıcıdan Bilgi İsteme",
          icon: "💬",
          borderClass: "card-purple-border",
          desc: "Kullanıcıyla etkileşime girme:",
          items: [
            { bold: "'Adın ne?' Diye Sor ve Bekle", text: "Ekranda bir yazı kutusu açar ve kullanıcının cevabını bekler." },
            { bold: "Cevap (Answer) Bloğu", text: "Kullanıcının yazdığı metni hafızasında saklar (Örn: 'Merhaba ' + Cevap)." }
          ]
        }
      ]
    },
    workshop: {
      title: "Klavyeyle Kontrol Edilen Roket Tasarımı",
      subtitle: "4 ok tuşuna basıldığında 4 farklı yöne uçan roket kodlayalım.",
      steps: [
        { title: "Sağ ve Sol Ok", desc: "'Sağ ok basılınca > 90 yönüne dön > 10 adım git'. 'Sol ok basılınca > -90 yönüne dön > 10 adım git'." },
        { title: "Yukarı ve Aşağı Ok", desc: "'Yukarı ok basılınca > 0 yönüne dön > 10 adım git'. 'Aşağı ok basılınca > 180 yönüne dön > 10 adım git'." },
        { title: "Sınır Kontrolü", desc: "Her bloğun altına 'Kenara geldiyse sek' bloğunu ekleyip roketi uçurun!" }
      ],
      criteria: [
        "4 yön tuşunun da eksiksiz çalışması",
        "Roketin yönüne uygun şekilde burnunu çevirmesi",
        "Ekran dışına kaçmayı önleyen sınır kontrolü"
      ]
    },
    tips: {
      safetyTitle: "İki Farklı Tuş Kontrol Yöntemi",
      safetyRules: [
        { bold: "Yöntem 1 (Olay Bloğu)", text: "'[Boşluk] tuşuna basılınca' - Tek tek basmalarda iyidir ama tuşa basılı tutunca takılarak gider." },
        { bold: "Yöntem 2 (Sürekli Tekrarla + Eğer)", text: "'Sürekli tekrarla > Eğer [Sağ ok] basılı mı ise > 10 adım git' - Tuşa basılı tuttuğunuzda araba gibi kaymak gibi akar!" }
      ],
      myths: [
        { wrong: "Döngü kullanmadan da 100 kere adım attırabilirim.", correct: "100 tane bloğu alt alta koymak kod kalabalığıdır; '100 defa tekrarla' tek bir blokla aynı işi yapar!" }
      ]
    },
    quiz: {
      question: "Bir kuklanın oyun boyunca durmaksızın sağa sola hareket etmesi için hareket kodları hangi bloğun içine yerleştirilmelidir?",
      options: [
        { text: "A) 1 saniye bekle", isCorrect: false },
        { text: "B) Sürekli tekrarla (Forever)", isCorrect: true },
        { text: "C) Bu kuklaya tıklanınca", isCorrect: false },
        { text: "D) Gizlen", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bir eylemin oyun sürdüğü sürece kesintisiz devam etmesi için 'Sürekli tekrarla' döngüsü kullanılır."
    },
    summaryRules: [
      { bold: "Olaylar Başlatır", text: "Tıklama, tuş basımı gibi olaylar kodları harekete geçirir." },
      { bold: "Döngüler Tekrarlar", text: "Sürekli tekrarla bloğu oyun mekaniklerinin kalbidir." },
      { bold: "Algılama Hisseder", text: "Dokunma, renk ve tuş algılama kuklayı akıllı yapar." }
    ],
    homework: "Scratch'te bir kukla seçin ve fare imlecine doğru sürekli koşmasını sağlayın ('Fare imlecine doğru yönel' + '3 adım git').",
    nextWeekPreview: "Değişkenler ve Şart Yapıları: Skor, Can ve Süre Sayaçlarıyla Gerçek Bir Oyun Kodlama!"
  },

  // 25. HAFTA
  {
    week: 25,
    date: "01 - 07 Mart",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Değişkenler & Şart Yapıları (Karar Mekanizmaları)",
    subtitle: "Eğer/İse, Değişken (Variable) Oluşturma (Puan, Can, Süre) ve Operatörler",
    outcomeCode: "BTY.6.6.2",
    targetSkill: "Değişken Yönetimi & Karar Yapıları",
    curiosityQuestion: "Oyunlarda elma topladığınızda puanınızın 1 artmasını, canavara değdiğinizde canınızın 1 azalmasını bilgisayar hafızasında nasıl tutar?",
    roadmap: [
      { title: "Değişken (Variable) Nedir?", desc: "Bilgisayarın belleğinde sayı veya metin saklayan etiketli kutucuklar." },
      { title: "Sayaçlar Oluşturma", desc: "Puan, Can, Altın ve Geri Sayım Süresi değişkenleri." },
      { title: "Şart Yapısı: Eğer ... İse (If)", desc: "Eğer puan = 10 ise 'Kazandın!' de; Değilse 'Devam et'." },
      { title: "Yeşil Operatörler", desc: "Matematik (+, -, *, /), Karşılaştırma (<, =, >) ve Mantık (Ve, Veya)." }
    ],
    roadmapSvg: `
      <svg viewBox="0 0 400 240">
        <rect x="10" y="10" width="380" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <!-- Variable Box Illustration -->
        <rect x="25" y="30" width="100" height="70" rx="6" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
        <text x="75" y="48" text-anchor="middle" font-size="10" font-weight="bold" fill="#c2410c">Bellek Kutusu</text>
        <rect x="45" y="58" width="60" height="30" rx="4" fill="#ffffff" stroke="#f97316"/>
        <text x="75" y="78" text-anchor="middle" font-size="14" font-weight="bold" fill="#ea580c">Puan: 5</text>
        <!-- Logic Flow: IF / ELSE -->
        <path d="M140,65 L175,65" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
        <!-- Diamond Decision Node -->
        <polygon points="220,35 265,65 220,95 175,65" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="220" y="62" text-anchor="middle" font-size="9" font-weight="bold" fill="#92400e">Puan = 10?</text>
        <!-- True Branch Right -->
        <path d="M265,65 L300,65" stroke="#16a34a" stroke-width="2"/>
        <rect x="300" y="45" width="80" height="40" rx="4" fill="#dcfce7" stroke="#16a34a"/>
        <text x="340" y="63" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">DOĞRU (Evet)</text>
        <text x="340" y="77" text-anchor="middle" font-size="8" fill="#166534">"Kazandın!"</text>
        <!-- False Branch Down -->
        <path d="M220,95 L220,135" stroke="#dc2626" stroke-width="2"/>
        <rect x="175" y="135" width="90" height="40" rx="4" fill="#fee2e2" stroke="#dc2626"/>
        <text x="220" y="153" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">YANLIŞ (Hayır)</text>
        <text x="220" y="167" text-anchor="middle" font-size="8" fill="#991b1b">"Oyuna Devam"</text>
      </svg>
    `,
    section1: {
      title: "Değişkenler: Bilgisayarın Hafıza Kutuları",
      subtitle: "Sürekli değişen verileri saklamanın en temel yolu.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Değişken (Variable) Nasıl Çalışır?",
          icon: "📦",
          borderClass: "card-primary-border",
          desc: "Üzerinde etiketi olan bir ayakkabı kutusu hayal edin:",
          items: [
            { bold: "Değişken Oluştur", text: "Turuncu 'Değişkenler' menüsünden 'Bir Değişken Oluştur' diyerek 'Puan' adını verin." },
            { bold: "Başlangıç Değeri (Sıfırlama)", text: "Oyun başlarken 'Puan'ı 0 yap' komutuyla kutuyu boşaltın." },
            { bold: "Değeri Değiştirme", text: "Ödül aldıkça 'Puan'ı 1 kadar değiştir' diyerek sayıyı artırın." },
            { bold: "Ekranda Göster/Gizle", text: "Kutucuğun solundaki tık işaretini açarak skorun ekranda görünmesini sağlayın." }
          ]
        },
        {
          title: "Oyunlarda Hangi Değişkenler Olur?",
          icon: "🎮",
          borderClass: "card-accent-border",
          desc: "Profesyonel oyunların arkasındaki sayaçlar:",
          items: [
            { bold: "Puan / Skor", text: "Toplanan yıldız veya elma sayısı." },
            { bold: "Can (Health)", text: "Genelde 3 ile başlar, engele çarptıkça -1 azalır." },
            { bold: "Süre (Timer)", text: "60'tan geriye doğru sıfıra sayan geri sayım sayacı." },
            { bold: "Seviye (Level)", text: "Puan 50 olunca 2. seviyeye geçiren değişken." }
          ]
        }
      ]
    },
    section2: {
      title: "Karar Mekanizmaları: Eğer ... İse (If)",
      subtitle: "Bilgisayara şartlara göre farklı kararlar aldırma sanatı.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Eğer ... İse (Tek Yönlü Karar)",
          icon: "🔀",
          borderClass: "card-success-border",
          desc: "Şart gerçekleşirse içindeki kodlar çalışır, gerçekleşmezse pas geçer:",
          items: [
            { bold: "Örnek", text: "Eğer <Elmaya değiyor mu?> ise:\n  -> Puan'ı 1 kadar değiştir\n  -> 'Çıt' sesini çal\n  -> Elmayı gizle" }
          ]
        },
        {
          title: "Eğer ... İse / Değilse (İki Yönlü Karar)",
          icon: "⚖️",
          borderClass: "card-purple-border",
          desc: "Her iki ihtimal için de ayrı planınız varsa:",
          items: [
            { bold: "Örnek", text: "Eğer <Puan > 50> ise:\n  -> 'Tebrikler, 2. Seviyeye Geçtiniz!' de\nDeğilse:\n  -> 'Daha fazla puan toplamalısın' de" }
          ]
        }
      ]
    },
    workshop: {
      title: "Elma Toplayarak Puan Kazanma Oyunu",
      subtitle: "Kedi elmaya her dokunduğunda puan 1 artsın ve elma kaçsın.",
      steps: [
        { title: "Puan Değişkeni Aç", desc: "Değişkenler menüsünden 'Puan' adında değişken oluşturun ve başlangıçta 0 yapın." },
        { title: "Elmaya Kod Yaz", desc: "Elma kuklasına: 'Sürekli tekrarla > Eğer <Kediye değiyor mu?> ise > Puan'ı 1 artır > Rastgele konuma git'." },
        { title: "Kazanma Şartı Ekle", desc: "'Eğer <Puan = 5> ise > 'Kazandın!' de > Hepsini durdur' kodunu ekleyin!" }
      ],
      criteria: [
        "Puan değişkeninin oyun başında sıfırlanması",
        "Elmaya dokunulduğunda puanın artması ve elmanın yer değiştirmesi",
        "5 puana ulaşıldığında oyunun durması"
      ]
    },
    tips: {
      safetyTitle: "Yeşilçam Tuzağı: Puanın Işık Hızında Artması",
      safetyRules: [
        { bold: "Rastgele Konuma Gönderin", text: "Eğer elmaya dokununca elmayı başka yere göndermezseniz, kedi elmanın üzerinde durduğu 1 saniyede puan 500'e fırlar!" },
        { bold: "Oyunu Sıfırlamayı Unutmayın", text: "Yeşil bayrağa basıldığında puanı sıfırlamazsanız eski oyunun puanı üzerine eklenmeye devam eder." }
      ],
      myths: [
        { wrong: "Puan değişkeni oluşturunca puan kendi kendine artar.", correct: "Değişken sadece bir hafızadır; puanı ne zaman ve kaç artıracağınızı kodlarla siz belirlersiniz." }
      ]
    },
    quiz: {
      question: "Bir oyunda karakterin canı bittiğinde oyunun sonlanması için hangi şart bloğu kullanılmalıdır?",
      options: [
        { text: "A) Eğer <Can = 0> ise [Hepsini durdur]", isCorrect: true },
        { text: "B) Can'ı 1 kadar değiştir", isCorrect: false },
        { text: "C) 10 adım git", isCorrect: false },
        { text: "D) X'i 10 artır", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Canın sıfıra ulaştığını kontrol etmek için 'Eğer <Can = 0> ise' şart yapısı kullanılır."
    },
    summaryRules: [
      { bold: "Değişken = Hafıza", text: "Puan, can ve süre değişkenlerle tutulur ve güncellenir." },
      { bold: "Eğer = Karar", text: "Bilgisayar şartları kontrol ederek doğru kararı uygular." },
      { bold: "Sıfırlama Şart", text: "Her oyun başında değişkenler başlangıç değerine ayarlanmalıdır." }
    ],
    homework: "Kendi oyununuz için 3 farklı değişken belirleyin (Örn: Altın, Enerji, Kalan_Zaman) ve başlangıç değerlerini yazın.",
    nextWeekPreview: "2. Dönem Ara Tatili: Scratch Oyun Atölyesi Bülteni & 12 Mart İstiklal Marşı!"
  },

  // 26. HAFTA (ARA TATİL)
  {
    week: 26,
    date: "08 - 14 Mart",
    hours: "Tatil Bülteni",
    unit: "2. DÖNEM ARA TATİLİ",
    unitBadge: "Ara Tatil",
    unitTheme: "unite-6",
    title: "2. Dönem Ara Tatili Scratch Atölyesi",
    subtitle: "Oyun Geliştirme İpuçları, Algoritma Meydan Okumaları & 12 Mart İstiklal Marşı",
    outcomeCode: "Ara Tatil & Pekistirme",
    targetSkill: "Oyun Tasarımı & Milli Bilinç",
    curiosityQuestion: "12 Mart İstiklal Marşı'mızın kabulü için Scratch'te bayrağımızın dalgalandığı ve Mehmet Akif Ersoy'u anlatan bir animasyon kodlayabilir miyiz?",
    roadmap: [
      { title: "İlk 4 Kodlama Haftasının Özeti", desc: "Arayüz, koordinatlar, döngüler, algılama ve değişkenler." },
      { title: "12 Mart Anma Projesi", desc: "İstiklal Marşı şiirinin dizelerinin sırayla ekranda belirdiği interaktif proje." },
      { title: "Tatilde Yapılacak 3 Mini Oyun", desc: "Labirent, Meyve Yakalama ve Balon Patlatma oyun fikirleri." },
      { title: "Hata Ayıklama (Debugging) İpuçları", desc: "Kodlar çalışmadığında ilk kontrol edilecek 3 kontrol noktası." }
    ],
    section1: {
      title: "12 Mart İstiklal Marşı ve Mehmet Akif Ersoy Projesi",
      subtitle: "Milli şairimizi ve İstiklal Marşı'mızın kabulünü kodlarımızla analım.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Projenin Tasarımı",
          icon: "🇹🇷",
          borderClass: "card-primary-border",
          desc: "Milli Mücadele ruhunu yansıtan anlamlı bir Scratch animasyonu:",
          items: [
            { bold: "Dekor Seçimi", text: "Arka plana dalgalanan şanlı Türk bayrağımız yerleştirilir." },
            { bold: "Mehmet Akif Kuklası", text: "Milli şairimizin resmi eklenir ve 'Korkma, sönmez bu şafaklarda yüzen al sancak...' mısrasını seslendirir." },
            { bold: "Yazı Efektleri", text: "Mısralar şeffaflık (hayalet) efektiyle yavaşça ekranda belirip kaybolur." }
          ]
        },
        {
          title: "Projede Kullanılacak Bloklar",
          icon: "🧩",
          borderClass: "card-accent-border",
          desc: "Bu projeyi yaparken pekiştireceğimiz kodlar:",
          items: [
            { bold: "Ses Blokları", text: "İstiklal Marşı'nın fon müziğini başlatma." },
            { bold: "Görünüm Blokları", text: "Renk ve hayalet (ghost) efektini sıfırdan 100'e değiştirme." },
            { bold: "Zamanlama", text: "Mısraların ezgiye tam uyması için saniye bekleme sürelerini ayarlama." }
          ]
        }
      ]
    },
    section2: {
      title: "Tatilde Geliştirebileceğiniz 3 Oyun Fikri",
      subtitle: "Arkadaşlarınıza oynatabileceğiniz eğlenceli projeler.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "1. Balon Patlatma",
          icon: "🎈",
          borderClass: "card-primary-border",
          desc: "Aşağıdan yukarıya süzülen renkli balonlara fareyle tıklandığında patlama sesi çıksın ve skor 1 artsın.",
          items: [
            { bold: "Püf Nokta", text: "Kırmızı balon 1 puan, altın balon 5 puan kazandırsın!" }
          ]
        },
        {
          title: "2. Labirentten Kaçış",
          icon: "🧀",
          borderClass: "card-accent-border",
          desc: "Minik farenin kediye ve siyah duvarlara çarpmadan peynire ulaşması gereken beceri oyunu.",
          items: [
            { bold: "Püf Nokta", text: "Renge dokunuyorsa başlangıç noktasına geri gönderin." }
          ]
        },
        {
          title: "3. Uzay İstilası",
          icon: "🚀",
          borderClass: "card-purple-border",
          desc: "Yukarıdan düşen göktaşlarından sağa sola kaçan uzay gemisi oyunu.",
          items: [
            { bold: "Püf Nokta", text: "Süre değişkeni ile hayatta kaldığınız her saniye puan kazanın." }
          ]
        }
      ]
    },
    workshop: {
      title: "Tatil Meydan Okuması: Hata Avcısı (Bug Hunter)",
      subtitle: "Aşağıdaki kodda nerede hata olduğunu bulunuz.",
      steps: [
        { title: "Hatalı Kod", desc: "'Yeşil bayrağa tıklandığında > Eğer <Kediye değiyor mu?> ise > Puanı 1 artır'." },
        { title: "Neden Çalışmıyor?", desc: "Kedi elmaya dokunsa bile puan artmıyor! Çünkü kodda 'Sürekli tekrarla' döngüsü yok; bilgisayar şartı sadece oyunun ilk salisesinde kontrol edip bitirmiş!" },
        { title: "Düzeltme", desc: "Şartın etrafına 'Sürekli tekrarla' döngüsü sarıldığında problem anında çözülür!" }
      ],
      criteria: [
        "Döngü eksikliğini doğru tespit etme",
        "Hata ayıklama mantığını kavrama",
        "Kod bloklarını mantıksal sıraya koyma"
      ]
    },
    tips: {
      safetyTitle: "Tatilde Kodlama Yaparken",
      safetyRules: [
        { bold: "Projelerinizi İndirin", text: "İnternet kesilirse kaybolmasın diye 'Dosya > Bilgisayarına Kaydet' diyerek .sb3 uzantılı yedeğini alın." },
        { bold: "Gözlerinizi Dinlendirin", text: "Kod yazarken 20-20-20 kuralını uygulamayı ihmal etmeyin." }
      ],
      myths: [
        { wrong: "İlk denemede kodlar çalışmazsa ben kodlamayı beceremiyorum demektir.", correct: "Dünyanın en iyi yazılımcıları bile günlerinin yarısını hataları arayıp düzelterek geçirir; hata yapmak öğrenmenin en doğal parçasıdır!" }
      ]
    },
    quiz: {
      question: "Bir oyunda 'Eğer <Telif Rengine Değiyor mu?> ise' kodunun oyun boyunca sürekli çalışması için hangi bloğun içine sarılması ZORUNLUDUR?",
      options: [
        { text: "A) 10 adım git", isCorrect: false },
        { text: "B) Sürekli tekrarla (Forever)", isCorrect: true },
        { text: "C) 1 saniye bekle", isCorrect: false },
        { text: "D) Gizlen", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Eğer' şart blokları tek başına sadece bir kez çalışır; oyun boyunca devamlı kontrol etmesi için mutlaka 'Sürekli tekrarla' içine konulmalıdır."
    },
    summaryRules: [
      { bold: "Hatalar Öğretir", text: "Çalışmayan kodları sabırla incelemek en büyük yazılımcı erdemidir." },
      { bold: "Milli Değerlerimiz", text: "Teknolojiyi tarihimizi ve değerlerimizi anlatmak için de kullanmalıyız." },
      { bold: "Sınav Haftası Geliyor", text: "Tatil dönüşü 2. Dönem 1. Sınavı ve labirent oyunları bizi bekliyor!" }
    ],
    homework: "Scratch'te 12 Mart anısına Türk bayraklı kısa bir kutlama sahnesi kodlayın.",
    nextWeekPreview: "2. Dönem 1. Sınav Tekrarı & Blok Tabanlı Döngülerle Büyük Oyun Tasarımı!"
  },

  // 27. HAFTA
  {
    week: 27,
    date: "15 - 21 Mart",
    hours: "2 Saat",
    unit: "SINAV HAFTASI & 6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "Sınav & 6. Ünite",
    unitTheme: "unite-6",
    title: "2. Dönem 1. Sınav & Kodlama Tekrarı",
    subtitle: "Döngüler, Karar Yapıları, Değişkenler ve Sınav Başarı Stratejileri",
    outcomeCode: "BTY.6.6.2",
    targetSkill: "Algoritma Analizi & Sınav Başarısı",
    curiosityQuestion: "Sınav kâğıdında gördüğünüz karışık bir Scratch kod bloğunun ne işe yaradığını çalıştırmadan zihninizde nasıl adım adım canlandırırsınız?",
    roadmap: [
      { title: "Sınavın Kilit Konuları", desc: "Sahne koordinatları (X, Y), Olaylar, Algılama, Değişkenler ve Şartlar." },
      { title: "Kod Takibi (Code Tracing)", desc: "Kodları satır satır okuyup değişkenin son değerini bulma tekniği." },
      { title: "Sık Yapılan Hatalar", desc: "'Puanı 1 yap' ile 'Puanı 1 kadar değiştir' arasındaki hayati fark!" },
      { title: "Soru-Cevap Maratonu", desc: "Akıllı tahtada çıkabilecek örnek sınav sorularının çözümü." }
    ],
    section1: {
      title: "Sınavda Kesin Çıkacak 3 Kritik Kod Bloğu",
      subtitle: "Öğrencilerin sınavda en çok puan kaybettiği detaylar.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Yap vs. Değiştir Farkı",
          icon: "⚠️",
          borderClass: "card-primary-border",
          desc: "İki blok birbirine benzer ama tamamen farklıdır:",
          items: [
            { bold: "Puan'ı [1] Yap", text: "Puan kaç olursa olsun silip tam olarak '1' yapar (Sabitleme)." },
            { bold: "Puan'ı [1] Değiştir", text: "Eski puana +1 ekler (Puan 5 ise 6 yapar - Artırma)." }
          ]
        },
        {
          title: "X ve Y Koordinatları",
          icon: "📍",
          borderClass: "card-accent-border",
          desc: "Kuklanın sahnedeki konumu:",
          items: [
            { bold: "Sağa Gitmek", text: "X'i 10 artır (X pozitif yönde büyür)." },
            { bold: "Sola Gitmek", text: "X'i -10 artır (X negatif yönde küçülür)." },
            { bold: "Yukarı Gitmek", text: "Y'yi 10 artır (Y pozitif yönde yükselir)." },
            { bold: "Aşağı Düşmek", text: "Y'yi -10 artır (Y negatif yönde düşer)." }
          ]
        },
        {
          title: "Eğer ile Sürekli Tekrarla",
          icon: "🔁",
          borderClass: "card-success-border",
          desc: "Şartların çalışabilmesi kuralı:",
          items: [
            { bold: "Kural", text: "Eğer bloğu daima 'Sürekli tekrarla' içinde olmalıdır; aksi halde şart bir kere bakıp geçer." }
          ]
        }
      ]
    },
    section2: {
      title: "Örnek Sınav Sorusu: Kod Takibi (Tracing)",
      subtitle: "Bu kod bloğu çalıştığında ekranda ne yazar?",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Soru: Değişkenin Değeri Kaç Olur?",
          icon: "📝",
          borderClass: "card-purple-border",
          desc: "Aşağıdaki kodları adım adım zihninizde çalıştırın:",
          items: [
            { bold: "1. Adım", text: "Sayac'ı 0 yap." },
            { bold: "2. Adım", text: "3 defa tekrarla bloğu başlar." },
            { bold: "3. Adım", text: "Sayac'ı 5 kadar değiştir." },
            { bold: "Döngü Bittiğinde", text: "Sayac kutusundaki sayı kaçtır? (Cevap: 3 x 5 = 15!)" }
          ]
        },
        {
          title: "Sınavda Başarı Taktikleri",
          icon: "💡",
          borderClass: "card-primary-border",
          desc: "Tam puan almak için yapılması gerekenler:",
          items: [
            { bold: "Kod Bloklarının Renklerine Dikkat", text: "Mavi=Hareket, Mor=Görünüm, Pembe=Ses, Sarı=Olay, Turuncu=Kontrol." },
            { bold: "Şekillere Dikkat", text: "Altıgen boşluklar şart (algılama/operatör), yuvarlak boşluklar sayı/metin alır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Deneme Sınavı Yarışması",
      subtitle: "Gruplar halinde tahtadaki kodun çıktısını tahmin ediyoruz.",
      steps: [
        { title: "Senaryo", desc: "Tahtada bir kedi kuklası var. Kod: 'X: -200 yap > 5 defa tekrarla [X'i 40 değiştir]'. Kedi en son nerede durur?" },
        { title: "Hesaplama", desc: "-200 + (5 x 40) = -200 + 200 = 0!" },
        { title: "Sonuç", desc: "Kedi tam olarak sahnenin merkezinde (X: 0) durur!" }
      ],
      criteria: [
        "Matematiksel koordinat hesabını doğru yapma",
        "Döngü sayısını doğru çarpma",
        "Grup halinde hızlı ve doğru karar alma"
      ]
    },
    tips: {
      safetyTitle: "Sınav Anı Hatırlatması",
      safetyRules: [
        { bold: "Soruları Acele Etmeden Oku", text: "Özellikle 'kaç adım gider?', 'hangi yöne döner?' sorularında kaleminizi kukla gibi sahnede hareket ettirerek çözün." }
      ],
      myths: [
        { wrong: "Kodlama soruları bilgisayar olmadan kâğıt üzerinde çözülemez.", correct: "Kod takibi (kâğıt üzerinde adım adım çalıştırma) tüm yazılımcıların en temel sınav yöntemidir." }
      ]
    },
    quiz: {
      question: "Scratch'te 'Puan' adında bir değişken tanımlanmıştır. Oyun başlangıcında puanı sıfıra eşitlemek için hangi blok kullanılmalıdır?",
      options: [
        { text: "A) Puan'ı 1 kadar değiştir", isCorrect: false },
        { text: "B) Puan'ı 0 yap", isCorrect: true },
        { text: "C) Puan'ı gizle", isCorrect: false },
        { text: "D) Puan kadar git", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Değişkeni belirli bir sayıya eşitlemek ve sıfırlamak için '[Değişken]'i 0 yap' bloğu kullanılır."
    },
    summaryRules: [
      { bold: "Yap = Eşitle, Değiştir = Ekle", text: "Bu hayati farkı asla karıştırmayın." },
      { bold: "X Sağ/Sol, Y Yukarı/Aşağı", text: "Artılar sağa ve yukarı; eksiler sola ve aşağıya götürür." },
      { bold: "Sınavda Başarılar!", text: "Kendinize güvenin, öğrendiğiniz tüm mantık adımlarını dikkatle uygulayın." }
    ],
    homework: "Defterinize 4 ok tuşuyla hareket eden bir kuklanın kod bloklarını renkli kalemlerle çizin.",
    nextWeekPreview: "Büyük Oyun Projesi: Labirent ve Çarpışma Algılama Oyunu Geliştirme!"
  },

  // 28. HAFTA
  {
    week: 28,
    date: "22 - 28 Mart",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Labirent & Çarpışma Algılama Oyunu",
    subtitle: "Duvar Algılama, Başlangıç Noktasına Dönme, Can Kaybı ve Bitiş Kapısı",
    outcomeCode: "BTY.6.6.2",
    targetSkill: "Oyun Mekaniği & Çarpışma Algılama",
    curiosityQuestion: "Bir kuklanın duvardan geçip gitmesini engelleyip, duvara tosladığında 'Güm!' sesi çıkararak geri sekmesini nasıl kodlarız?",
    roadmap: [
      { title: "Labirent Sahnesi Tasarımı", desc: "Tek renk (Örn: Lacivert) çizgilerle geçitleri olan duvarlar çizme." },
      { title: "Karakter Kontrolü", desc: "Ok tuşlarıyla dar koridorlarda gezinebilecek boyutta (örneğin %30) kukla seçimi." },
      { title: "Çarpışma Algılama (Collision)", desc: "'Eğer <Lacivert rengine dokunuyor mu?> ise > Başlangıç x, y noktasına dön'." },
      { title: "Can Sistemi & Hedef", desc: "3 can ile başlama, duvara çarptıkça -1 can ve peynire ulaşınca 'Kazandın!' ekranı." }
    ],
    section1: {
      title: "Labirent Oyununun Temel Mantığı",
      subtitle: "Renk algılama ile fiziksel katı duvarlar oluşturmak.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "1. Renk Algılama (Color Sensing)",
          icon: "🎨",
          borderClass: "card-primary-border",
          desc: "Labirent duvarlarına dokunulduğunu hissetme:",
          items: [
            { bold: "Tek Renk Kuralı", text: "Labirentin tüm duvarlarını aynı renkle (Örn: Koyu Mavi) çizin." },
            { bold: "Damlalık Aracı", text: "Kod bloğundaki renk kutusuna tıklayıp damlalıkla sahnedeki duvara tıklayarak rengi tam eşleştirin." },
            { bold: "Ceza Kodu", text: "Duvara değdiği anda kuklayı başladığı koordinata (X: -200, Y: 140) geri ışınlayın." }
          ]
        },
        {
          title: "2. Kuklanın Boyutu Çok Önemli",
          icon: "🔍",
          borderClass: "card-accent-border",
          desc: "Kukla koridorlardan rahat geçebilmelidir:",
          items: [
            { bold: "Boyut: %30 veya %40", text: "Kukla çok büyük olursa koridora sığmaz ve sürekli duvara çarparak sıkışır!" },
            { bold: "Dönüş Stili", text: "Dar koridorlarda dönerken duvara çarpmaması için dönüş stilini 'Sol-Sağ' yapın." }
          ]
        }
      ]
    },
    section2: {
      title: "Can Kaybı & Bitiş Kapısı Mekaniği",
      subtitle: "Oyunu heyecanlı kılan kurallar ve kazanma/kaybetme şartları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Can Haklarının Yönetimi",
          icon: "❤️",
          borderClass: "card-purple-border",
          desc: "Oyuncuya 3 hak verelim:",
          items: [
            { bold: "Yeşil Bayrakta", text: "Can değişkenini 3 yap." },
            { bold: "Duvara Her Çarptığında", text: "Can'ı -1 kadar değiştir ve 'Ouch!' sesini çal." },
            { bold: "Game Over", text: "Eğer <Can = 0> ise 'Oyun Bitti, Yeniden Dene!' de ve oyunu durdur." }
          ]
        },
        {
          title: "Kazanma Hedefi (Kupa / Peynir)",
          icon: "🏆",
          borderClass: "card-success-border",
          desc: "Labirentin en sonuna bir hedef kuklası koyun:",
          items: [
            { bold: "Hedefe Ulaşma", text: "Eğer <Hedefe değiyor mu?> ise 'Tebrikler, Labirenti Çözdün!' de." },
            { bold: "Alkış Sesi", text: "Zafer müziğini başlat ve sonraki bölüme geçiş dekorunu aç." }
          ]
        }
      ]
    },
    workshop: {
      title: "Adım Adım Labirent Oyunu Kodluyoruz",
      subtitle: "Bilişim sınıfında herkes kendi labirentini inşa ediyor.",
      steps: [
        { title: "Dekoru Çiz", desc: "Dekor çizim aracını açın, kalın dikdörtgenlerle çıkmaz sokakları olan bir labirent çizin." },
        { title: "Kuklayı Boyutlandır", desc: "Bir fare veya böcek kuklası seçip boyutunu 30 yapın, başlangıç noktasına koyun." },
        { title: "Kodları Birleştir", desc: "Ok tuşları hareket kodlarını ve 'Eğer duvara değiyorsa başa dön' kodunu yazıp test edin!" }
      ],
      criteria: [
        "Kuklanın koridorlardan rahatça geçebilmesi",
        "Duvara değdiğinde başlangıç noktasına hatasız dönmesi",
        "Hedefe ulaşıldığında zafer mesajının verilmesi"
      ]
    },
    tips: {
      safetyTitle: "Labirent Oyununda En Sık Karşılaşılan Sorun",
      safetyRules: [
        { bold: "Başlangıç Noktası Duvara Değmesin", text: "Kuklanın başladığı koordinat (X, Y) asla duvara temas etmemelidir; yoksa kukla doğar doğmaz duvara çarpmış sayılır ve sonsuz döngüde sıkışır!" },
        { bold: "Damlalıkla Renk Seçin", text: "Rengi göz kararı seçmeyin; sahnedeki renkle 1 ton bile farklı olsa algılamaz." }
      ],
      myths: [
        { wrong: "Labirent oyunlarında duvarlar fiziksel olarak geçirimsizdir.", correct: "Aslında bilgisayar duvarı tanımaz; biz ona 'Eğer mavi renge dokunursan ileri gitme, geri sek' dediğimiz için geçemez!" }
      ]
    },
    quiz: {
      question: "Labirent oyununda kuklanın duvardan geçmesini engellemek için duvara temas ettiğinde en mantıklı kodlama hangisidir?",
      options: [
        { text: "A) Boyutunu 10 artırmak", isCorrect: false },
        { text: "B) Başlangıç koordinatına geri göndermek veya -10 adım geri itmek", isCorrect: true },
        { text: "C) Bilgisayarı kapatmak", isCorrect: false },
        { text: "D) Rengi kırmızı yapmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Duvara dokunulduğunda kuklayı başlangıç noktasına ışınlamak veya -10 adım geri itmek duvar hissi veren en yaygın oyun tekniğidir."
    },
    summaryRules: [
      { bold: "Renk Algılama = Katı Madde", text: "Duvar rengi algılanarak çarpışma kontrolü yapılır." },
      { bold: "Boyut Uyumu", text: "Kukla labirent koridorundan daha dar olmalıdır." },
      { bold: "Can ve Hedef", text: "Can hakları ve hedef kupa oyunu heyecanlı bir mücadeleye çevirir." }
    ],
    homework: "Labirentinize hareket eden 1 adet devriye canavar kuklası ekleyin (sağa sola sürekli gidip gelen düşman).",
    nextWeekPreview: "Hata Ayıklama (Debugging) Sanatı: Kodlarımız Neden Çalışmaz ve Nasıl Düzeltilir?"
  },

  // 29. HAFTA
  {
    week: 29,
    date: "29 Mart - 04 Nisan",
    hours: "2 Saat",
    unit: "OKUL TEMELLİ PLANLAMA & 6. Ünite: Yazılım Tasarımı",
    unitBadge: "Okul Planlama & 6. Ünite",
    unitTheme: "unite-6",
    title: "Hata Ayıklama & Algoritmik Çözümler",
    subtitle: "Bug Nedir? Kod Hatalarını Bulma, Adım Adım Takip ve Debugging Stratejileri",
    outcomeCode: "BTY.6.6.2",
    targetSkill: "Hata Ayıklama (Debugging) & Problem Çözme",
    curiosityQuestion: "Dünyanın ilk bilgisayar hatası (Bug) aslında bilgisayarın içine giren gerçek bir güve böceğinden mi çıkmıştır?",
    roadmap: [
      { title: "Bug (Hata) Tarihi", desc: "Grace Hopper ve dev bilgisayarın rölesine sıkışan ilk güve böceğinin hikayesi." },
      { title: "Hata Türleri", desc: "1. Sözdizimi hataları, 2. Mantıksal hatalar, 3. Sonsuz döngü kilitlenmeleri." },
      { title: "Debugging (Hata Ayıklama) Stratejileri", desc: "Kodları parçalara ayırma, geçici devre dışı bırakma ve değişkenleri izleme." },
      { title: "Bozuk Projeleri Kurtarma", desc: "Sınıfta kasıtlı olarak bozulmuş 3 Scratch projesini tamir etme atölyesi." }
    ],
    section1: {
      title: "Hata (Bug) Nedir ve Neden Oluşur?",
      subtitle: "Bir programcı için en büyük zafer hatayı bulup çözdüğü andır.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "İlk 'Bug'ın Tarihi (1947)",
          icon: "🐛",
          borderClass: "card-primary-border",
          desc: "Bilgisayar bilimci Grace Hopper, Harvard Mark II bilgisayarı bozulduğunda makinenin içine bakar ve bir röleye sıkışmış güve böceği (bug) bulur. O günden beri tüm yazılım hatalarına 'Bug', hatayı düzeltmeye de 'Debugging' (Böcekten arındırma) denir!",
          items: [
            { bold: "Bug", text: "Yazılımdaki beklenmeyen hata veya kusur." },
            { bold: "Debug", text: "Hatayı arayıp bulma ve düzeltme süreci." }
          ]
        },
        {
          title: "Scratch'te En Yaygın 3 Mantık Hatası",
          icon: "🔍",
          borderClass: "card-accent-border",
          desc: "Scratch'te sözdizimi hatası olmaz ama mantık hatası çok olur:",
          items: [
            { bold: "1. Döngüyü Unutmak", text: "Şartın etrafına 'Sürekli tekrarla' koymamak." },
            { bold: "2. Sıfırlamayı Unutmak", text: "Oyuna başlarken konumu, dekoru ve puanı ilk hâline getirmemek." },
            { bold: "3. Yanlış Kuklaya Kod Yazmak", text: "Kediye yazılacak kodu yanlışlıkla elmaya veya arka plana yazmak!" }
          ]
        }
      ]
    },
    section2: {
      title: "Usta Yazılımcıların 4 Hata Ayıklama Taktiği",
      subtitle: "Bir dedektif gibi ipuçlarını takip ederek hatayı yakalayın.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Taktik 1 & 2: İnceleme ve İzleme",
          icon: "🕵️",
          borderClass: "card-success-border",
          desc: "Hatayı tespit etmenin pratik yolları:",
          items: [
            { bold: "Taktik 1: Değişkenleri Ekranda Açın", text: "Puan veya Can kutusunu görünür yapın; olay anında sayının kaç olduğunu gözünüzle görün." },
            { bold: "Taktik 2: Bloğa Tıklayarak Test Et", text: "Uzun kod grubundan şüphelendiğiniz bloğu ayırıp üzerine farenizle tıklayın; tek başına çalışıyor mu bakın." }
          ]
        },
        {
          title: "Taktik 3 & 4: Parçala ve Ses Ekle",
          icon: "🧩",
          borderClass: "card-purple-border",
          desc: "Gizli hataları ortaya çıkarma yöntemleri:",
          items: [
            { bold: "Taktik 3: 'Bip' Sesi Ekle", text: "Kodun o satıra ulaşıp ulaşmadığını anlamak için araya geçici bir ses bloğu ekleyin; ses çalarsa o kod çalışıyordur!" },
            { bold: "Taktik 4: Sesli Düşün (Kauçuk Ördek Yöntemi)", text: "Kodunuzu bir arkadaşınıza veya masanızdaki bir nesneye adım adım sesli anlatın; anlatırken hatayı hemen fark edersiniz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Hata Hastanesi: Bozuk Projeyi İyileştir!",
      subtitle: "Öğretmenin hazırladığı 3 hatalı kodu tamir ediyoruz.",
      steps: [
        { title: "Vaka 1: Uçmayan Kuş", desc: "Kuş tuşlara basınca hareket etmiyor. (Teşhis: Kod arka plana yazılmış! Tedavi: Kodu kuşa kopyala)." },
        { title: "Vaka 2: Işık Hızında Puan", desc: "Elmaya dokununca puan 1 yerine 400 artıyor. (Teşhis: Elma kaçmıyor! Tedavi: Elmaya rastgele konuma git ekle)." },
        { title: "Vaka 3: Baş Aşağı Kedi", desc: "Sola dönünce kedi ters dönüyor. (Teşhis: Dönüş stili eksik! Tedavi: Dönüş stilini sol-sağ yap)." }
      ],
      criteria: [
        "Hatanın kaynağını doğru tespit edebilme",
        "Gereksiz kodları temizleyip doğru bloğu yerleştirebilme",
        "Çözülen projeyi arkadaşına anlatabilme"
      ]
    },
    tips: {
      safetyTitle: "Sabır ve Problem Çözme Kültürü",
      safetyRules: [
        { bold: "Panik Yok!", text: "Kod çalışmadığında tüm projeyi silip baştan başlamayın; adım adım hatayı arayın." },
        { bold: "Yedek Alarak Çalışın", text: "Büyük bir değişiklik yapmadan önce projenizin bir kopyasını kaydedin." }
      ],
      myths: [
        { wrong: "En iyi programcılar hiç hata yapmayan insanlardır.", correct: "En iyi programcılar hatalardan korkmayan, sabırla hatanın kaynağını çözebilen insanlardır." }
      ]
    },
    quiz: {
      question: "Bir bilgisayar programında veya kod bloğunda beklenmeyen bir şekilde yanlış sonuç üreten hatalara tarihte ilk kez ne ad verilmiştir?",
      options: [
        { text: "A) Piksel", isCorrect: false },
        { text: "B) Bug (Böcek)", isCorrect: true },
        { text: "C) Modem", isCorrect: false },
        { text: "D) Lisans", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 1947 yılında bilgisayar rölesine giren güve böceğinden bu yana yazılım hatalarına 'Bug' denilmektedir."
    },
    summaryRules: [
      { bold: "Bug = Hata, Debug = Çözüm", text: "Yazılımdaki aksaklıkları tespit edip giderme sürecidir." },
      { bold: "Adım Adım Takip", text: "Kodları parça parça test etmek hatayı hızla buldurur." },
      { bold: "Sabır En Büyük Güç", text: "Hatalarla mücadele etmek problem çözme zekâmızı geliştirir." }
    ],
    homework: "Kendi yaptığınız bir projede karşılaştığınız en zor hatayı ve onu nasıl çözdüğünüzü 3 cümleyle yazın.",
    nextWeekPreview: "İnteraktif Hikâye & Mesajlaşma: Kuklalar Birbiriyle Nasıl Konuşur (Haber Salma)?"
  },

  // 30. HAFTA
  {
    week: 30,
    date: "05 - 11 Nisan",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "İnteraktif Hikâye & Haber Salma",
    subtitle: "Kuklalar Arası İletişim: 'Haberini Sal' ve 'Haberini Aldığımda' Blokları",
    outcomeCode: "BTY.6.6.2",
    targetSkill: "Etkileşimli Canlandırma & Mesaj Yönetimi",
    curiosityQuestion: "Tiyatro sahnesinde bir oyuncu sözünü bitirdiğinde diğer oyuncu sıranın kendisine geldiğini nasıl anlar? Scratch'te kuklalar birbirine nasıl pas atar?",
    roadmap: [
      { title: "Haber Salma (Broadcast) Mantığı", desc: "Bir kuklanın diğer tüm kuklalara gizli bir telsiz mesajı fırlatması." },
      { title: "İki Kilit Blok", desc: "'[Başla] haberini sal' ve '[Başla] haberini aldığımda'." },
      { title: "Sahneler Arası Geçiş", desc: "Bölüm bittiğinde arka plan dekorunu değiştirme ve yeni kuklaları çıkarma." },
      { title: "İnteraktif Çizgi Film", desc: "İki karakterin sırayla konuştuğu diyaloglu eğitici bir masal tasarımı." }
    ],
    section1: {
      title: "Haber Salma: Kuklaların Gizli Telsizi",
      subtitle: "Kuklaların birbirinin hareketini tetiklemesini sağlayan en güçlü araç.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Haber Salma Nasıl Çalışır?",
          icon: "📢",
          borderClass: "card-primary-border",
          desc: "Tıpkı okul müdürünün hoparlörden anons yapması gibidir:",
          items: [
            { bold: "1. Anons Yapılır (Haber Sal)", text: "Kedi kuklası konuşmasını bitirir ve '[Sira_Kopekte] haberini sal' bloğunu çalıştırır." },
            { bold: "2. Mesaj Dinlenir (Haber Alınınca)", text: "Köpek kuklası kenarda beklemektedir. '[Sira_Kopekte] haberini aldığımda' bloğu aktif olur ve konuşmaya başlar." },
            { bold: "Kuklalar Karışmaz!", text: "Saniye sayarak beklemek yerine haber salmak diyalogların asla çakışmamasını sağlar." }
          ]
        },
        {
          title: "Oyunlarda Haber Salma Nerede Kullanılır?",
          icon: "🎮",
          borderClass: "card-accent-border",
          desc: "Büyük oyunların omurgası haber salmadır:",
          items: [
            { bold: "Oyun Başlangıcı", text: "Başla butonuna tıklanınca -> '[Oyunu_Baslat] haberini sal' (Tüm canavarlar sahneye çıkar)." },
            { bold: "Can Bittiğinde", text: "Can 0 olunca -> '[Oyun_Bitti] haberini sal' (Tüm kuklalar gizlenir, Game Over ekranı gelir)." },
            { bold: "Bölüm Atlama", text: "Kapıya ulaşınca -> '[2.Bolum] haberini sal' (Dekor değişir)." }
          ]
        }
      ]
    },
    section2: {
      title: "Çok Sahneli Hikâye Tasarımı: Gizlen ve Görün",
      subtitle: "Sahne değiştikçe doğru kuklaları ekrana getirme sanatı.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Gizlen (Hide) ve Görün (Show)",
          icon: "👁️",
          borderClass: "card-success-border",
          desc: "Her kukla her sahnede olmak zorunda değildir:",
          items: [
            { bold: "1. Sahnede (Orman)", text: "Kedi ve Kuş görünür (Show), Uzaylı gizlenir (Hide)." },
            { bold: "Dekor Değişince (Uzay)", text: "'[Uzay] dekoruna geçildiğinde' olayı ile Kedi gizlenir, Uzaylı görünür!" },
            { bold: "Altın Kural", text: "Bir kuklaya 'Gizlen' dediyseniz, oyun tekrar başlarken mutlaka 'Görün' demeyi unutmayın!" }
          ]
        },
        {
          title: "İnteraktif Hikâye Dallanması",
          icon: "📖",
          borderClass: "card-purple-border",
          desc: "İzleyicinin hikâyenin gidişatını seçmesi:",
          items: [
            { bold: "Karar Butonları", text: "Ekrana iki buton çıkar: 'Mağaraya Gir' ve 'Nehirden Git'." },
            { bold: "Hangi Butona Basılırsa", text: "O buton kendi haberini salar ve hikâye o yönde devam eder!" }
          ]
        }
      ]
    },
    workshop: {
      title: "İki Karakterli Eğitici Diyalog: 'Siber Güvenlik Sohbeti'",
      subtitle: "Ali ile Ayşe'nin birbirine güçlü şifreyi anlattığı animasyon.",
      steps: [
        { title: "1. Sahne (Ali Başlar)", desc: "Ali: 'Ayşe, yeni oyun şifremi 123456 yaptım!' der ve '[Ayse_Cevap] haberini salar'." },
        { title: "2. Sahne (Ayşe Uyarır)", desc: "Ayşe haberi alınca: 'Ali, bu çok zayıf bir şifre! Büyük-küçük harf ve sembol eklemelisin!' der." },
        { title: "3. Sahne (Ali Teşekkür Eder)", desc: "Ali haberi alınca: 'Haklısın, hemen güçlü bir şifre yapıyorum!' der ve sevinçle zıplar." }
      ],
      criteria: [
        "Haber salma bloklarının eksiksiz ve doğru sırayla çalışması",
        "Karakterlerin sözlerinin birbirinin üzerine binmemesi",
        "Eğitici ve bilişim etiğine uygun bir mesaj içermesi"
      ]
    },
    tips: {
      safetyTitle: "Haber İsimlerini Anlaşılır Verin",
      safetyRules: [
        { bold: "'Haber1' Demeyin!", text: "Yeni haber oluştururken 'haber1', 'haber2' bırakırsanız 10 haber sonra hangisi neydi unutursunuz. 'Kazanma_Haberi', 'Karakter_Olumu' gibi açık isimler verin." }
      ],
      myths: [
        { wrong: "Kuklaları konuşturmak için aralarına 5 saniye bekleme koymak en iyi yoldur.", correct: "Bekleme süreleri bilgisayar hızına göre kayabilir; haber salma yöntemi ise %100 kusursuz senkronizasyon sağlar." }
      ]
    },
    quiz: {
      question: "Scratch'te bir kuklanın yaptığı eylemi diğer tüm kuklalara ve sahneye duyurarak onların da harekete geçmesini sağlayan blok hangisidir?",
      options: [
        { text: "A) 10 adım git", isCorrect: false },
        { text: "B) [Haber] haberini sal (Broadcast)", isCorrect: true },
        { text: "C) X konumunu değiştir", isCorrect: false },
        { text: "D) Kostüm 2'ye geç", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Haberini sal' bloğu sahnede bir telsiz anonsu yaparak ilgili haberi bekleyen tüm kuklaları aynı anda tetikler."
    },
    summaryRules: [
      { bold: "Haber Sal = Telsiz Anonsu", text: "Kuklalar ve sahneler arası iletişimin temelidir." },
      { bold: "Kusursuz Zamanlama", text: "Diyalogların ve sahne geçişlerinin çakışmasını engeller." },
      { bold: "Büyük Oyunların Kalbi", text: "Game Over, Bölüm Atlama ve Başlatma haber salma ile yönetilir." }
    ],
    homework: "Scratch'te iki kuklanın birbirine fıkra anlattığı haber salmalı 30 saniyelik mini bir diyalog kodlayın.",
    nextWeekPreview: "Skorlu ve Süreli Yakalama Oyunu: Gökten Düşen Nesneler ve Geri Sayım Sayacı!"
  },

  // 31. HAFTA
  {
    week: 31,
    date: "12 - 18 Nisan",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Skorlu & Süreli Yakalama Oyunu",
    subtitle: "Gökten Düşen Nesneler, Sepet Hareketi, Geri Sayım Sayacı ve Game Over Ekranı",
    outcomeCode: "BTY.6.6.2",
    targetSkill: "Oyun Mekaniği, Süre Yönetimi & Skor Sistemi",
    curiosityQuestion: "Gökten rastgele aralıklarla elmalar yağarken alt tarafta sepeti sağa sola kaydırıp 30 saniyede en yüksek skoru toplamayı nasıl kodlarız?",
    roadmap: [
      { title: "Sepet / Kase Kontrolü", desc: "Farenin X konumunu takip eden veya sağ-sol ok tuşlarıyla kayan sepet." },
      { title: "Yukarıdan Düşme Mekaniği", desc: "X: -220 ile +220 arası rastgele bir sayı, Y: 180'den aşağı doğru -10 düşme." },
      { title: "Yakalama ve Yeniden Doğma", desc: "Sepete değince puan kazanma ve tekrar gökyüzüne ışınlanma." },
      { title: "Geri Sayım Sayacı (30 sn)", desc: "Süre 0 olunca tüm oyunu durduran ve skor panosunu açan mekanizma." }
    ],
    section1: {
      title: "Gökten Düşen Nesne Mekaniği Nasıl Kodlanır?",
      subtitle: "Rastgele koordinatlar ve yerçekimi simülasyonu.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "1. Gökyüzünde Rastgele Doğma",
          icon: "🍎",
          borderClass: "card-primary-border",
          desc: "Elma hep aynı yerden düşerse oyun çok sıkıcı olur:",
          items: [
            { bold: "Yeşil Operatör: Rastgele Sayı", text: "X eksenine '[-200] ile [200] arasında rastgele bir sayı seç' bloğunu takın." },
            { bold: "Y Ekseni (En Üst)", text: "Y'yi daima 170 (ekranın tavanı) yapın." },
            { bold: "Sonuç", text: "Elma her seferinde gökyüzünün bambaşka bir noktasında belirir!" }
          ]
        },
        {
          title: "2. Aşağı Doğru Düşme (Yerçekimi)",
          icon: "⬇️",
          borderClass: "card-accent-border",
          desc: "Elmanın aşağı doğru akması:",
          items: [
            { bold: "Y'yi -7 Değiştir", text: "Sürekli tekrarla içinde Y değerini her salisede eksi yönde azaltın." },
            { bold: "Yere Çarpma Kontrolü", text: "Eğer <Y konumu < -160> ise (yere düştüyse), puan vermeden tekrar gökyüzüne gönderin." }
          ]
        }
      ]
    },
    section2: {
      title: "Geri Sayım Sayacı & Game Over",
      subtitle: "Zamana karşı yarış heyecanı ve oyun sonu ekranı.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Geri Sayım Sayacı Nasıl Kodlanır?",
          icon: "⏱️",
          borderClass: "card-purple-border",
          desc: "Ayrı bir komut dizisiyle zamanı işletme:",
          items: [
            { bold: "Süre Değişkeni", text: "Oyun başında 'Süre'yi 30 yap'." },
            { bold: "Döngü", text: "Sürekli tekrarla içinde: '1 saniye bekle' -> 'Süre'yi -1 değiştir'." },
            { bold: "Süre Bittiğinde", text: "Eğer <Süre = 0> ise -> '[Oyun_Bitti] haberini sal' -> 'Hepsini durdur'." }
          ]
        },
        {
          title: "Game Over Ekranı",
          icon: "🏁",
          borderClass: "card-success-border",
          desc: "Oyun bitince profesyonel bir son:",
          items: [
            { bold: "Game Over Kuklası", text: "Başlangıçta gizlidir (Hide)." },
            { bold: "Haber Gelince", text: "'[Oyun_Bitti] haberini aldığımda' -> Sahnenin ortasına gel -> 'Görün' -> 'Toplam Skorunuz: ' + Puan de!" }
          ]
        }
      ]
    },
    workshop: {
      title: "30 Saniyelik 'Elma Yakalama' Şampiyonası",
      subtitle: "Sepetimizi ve gökten düşen elmaları kodlayıp sınıfça oynuyoruz.",
      steps: [
        { title: "Sepeti Kodla", desc: "Sepet kuklasına: 'Sürekli tekrarla > X'i: farenin x'i yap' (Sepet fareyi süper akıcı takip eder)." },
        { title: "Elmayı Kodla", desc: "Elmaya düşme ve sepete değince '+1 puan alıp tavana dönme' kodunu yazın." },
        { title: "30 Saniyelik Sayacı Başlat", desc: "Zaman sayacını ekleyin ve 30 saniyede en çok elmayı kimin toplayacağını test edin!" }
      ],
      criteria: [
        "Elmaların rastgele x koordinatlarından düşmesi",
        "Sepete değince puanın kusursuz artması",
        "30 saniye dolduğunda oyunun durması ve skorun ekranda kalması"
      ]
    },
    tips: {
      safetyTitle: "Zaman Sayacı Ayrı Blokta Olmalı!",
      safetyRules: [
        { bold: "Ayrı Yeşil Bayrak Kullanın", text: "Süre sayacının içine sakın elma hareket kodlarını koymayın. Sayacı boş bir alanda tek başına 'Yeşil bayrak > Süre 30 yap > 30 defa tekrarla [1 sn bekle, -1 değiştir]' şeklinde bağımsız çalıştırın." }
      ],
      myths: [
        { wrong: "Sepeti hareket ettirmek için mutlaka ok tuşları gerekir.", correct: "'X'i farenin x'i yap' bloğu ile sepet doğrudan fareyi izler ve dokunmatik akıllı tahtalarda parmakla oynamak çok daha keyifli olur!" }
      ]
    },
    quiz: {
      question: "Gökten düşen bir nesnenin sahnenin en üstünden (tavanından) başlaması için Y koordinatı yaklaşık kaç olarak ayarlanmalıdır?",
      options: [
        { text: "A) Y: 0", isCorrect: false },
        { text: "B) Y: 170 veya 180", isCorrect: true },
        { text: "C) Y: -180", isCorrect: false },
        { text: "D) Y: -240", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Scratch sahnesinin en üst tepe noktası Y: +180 koordinatıdır; düşen nesneler buradan başlatılır."
    },
    summaryRules: [
      { bold: "Rastgele Sayı = Heyecan", text: "Düşen nesnelerin rastgele yerden gelmesi oyunu dinamik kılar." },
      { bold: "Süre Kısıtı", text: "Zaman sayacı oyuncuda adrenalin ve kazanma hırsı yaratır." },
      { bold: "Bağımsız Kodlar", text: "Hareket kodları ile süre sayacı kodları birbirinden bağımsız çalışmalıdır." }
    ],
    homework: "Oyununuza gökten düşen 'Taş' kuklası ekleyin; taşa değince puan 2 azalsın!",
    nextWeekPreview: "Fizik ve Zıplama Mekanikli Oyunlar: Yerçekimi ve Platform Oyunu Tasarımı!"
  }
];
