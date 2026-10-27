/**
 * 3. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem (2. Kısım: Hafta 31 - 41)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART2_GRADE3 = [
  // 31. HAFTA
  {
    week: 31,
    date: "12 - 18 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Görsel Blok Tabanlı Kodlama ve Dijital Animasyon",
    unitBadge: "2. Ara Tatil",
    unitTheme: "tema-5",
    title: "2. Dönem Ara Tatil: İnteraktif Akvaryum ve Doğa Simülasyonu",
    subtitle: "Scratch ile Çoklu Karakter Yönetimi, Rastgele Konum ve Su Altı Dünyası",
    outcomeCode: "BTY.3.5.3 (Çoklu Karakter & Doğa Simülasyonu)",
    targetSkill: "Çoklu Karakterleri Bağımsız Kodlama, Rastgele Hareket ve Etkileşim Tasarımı",
    curiosityQuestion: "Akvaryumdaki yüzlerce balık birbirine çarpmadan nasıl ahenkle yüzer ve Scratch'te bu okyanusu nasıl canlandırırız?",
    roadmap: [
      { title: "Çoklu Kukla (Multi-Sprite)", desc: "Her deniz canlısına bağımsız hareket ve davranış kodları yazma." },
      { title: "Kenara Geldiyse Sektir", desc: "Balıkların sahne dışına kaçmasını önleyip duvardan döndürme." },
      { title: "Dönüş Stili (Sol-Sağ)", desc: "Balıkların ters yüzmesini önleyip doğal dönüş kazandırma." },
      { title: "Tıklama Olayı & Kaçış", desc: "Tıklanan balığın renk değiştirip hızla süzülmesini sağlama." }
    ],
    section1: {
      title: "Su Altı Dünyasını Kodlarla Canlandırma",
      subtitle: "Scratch sahnesini yaşayan, renkli bir akvaryuma dönüştürüyoruz!",
      layout: "split-visual",
      card: {
        title: "Doğal Yüzme Simülasyonunun 3 Kuralı",
        icon: "🐠",
        desc: "Akvaryumdaki balıkların gerçekçi yüzmesi için:",
        items: [
          { bold: "1. Bağımsız Hızlar", text: "Her balığa farklı adım sayısı (ör. küçük balığa 12 adım, kaplumbağaya 4 adım) verilir." },
          { bold: "2. Dönüş İzni", text: "Karakterin ters dönmemesi için 'Dönüş stilini sol-sağ yap' komutu eklenir." },
          { bold: "3. Baloncuk Sesleri", text: "Arka planda su balonu ses efekti çalınarak akvaryum hissi güçlendirilir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="oceanGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0284c7"/>
            <stop offset="60%" stop-color="#0369a1"/>
            <stop offset="100%" stop-color="#082f49"/>
          </linearGradient>
        </defs>
        <rect x="15" y="15" width="390" height="220" rx="16" fill="url(#oceanGrad2)" stroke="#38bdf8" stroke-width="2"/>
        <path d="M 15 210 Q 120 195 230 215 T 405 205 L 405 235 L 15 235 Z" fill="#d97706"/>
        <!-- Yosunlar -->
        <path d="M 45 210 Q 30 150 55 100 Q 70 150 60 210 Z" fill="#22c55e" opacity="0.8"/>
        <path d="M 370 205 Q 355 140 380 90 Q 395 140 385 205 Z" fill="#16a34a" opacity="0.8"/>
        <!-- Balık 1 (Turuncu) -->
        <g transform="translate(130, 90)">
          <ellipse cx="0" cy="0" rx="35" ry="22" fill="#f97316"/>
          <polygon points="28,0 52,-18 52,18" fill="#ea580c"/>
          <circle cx="-18" cy="-6" r="4" fill="#ffffff"/>
          <circle cx="-19" cy="-6" r="2" fill="#0f172a"/>
          <circle cx="8" cy="-25" r="3" fill="none" stroke="#e0f2fe" stroke-width="1.5"/>
          <circle cx="14" cy="-40" r="4" fill="none" stroke="#e0f2fe" stroke-width="1.5"/>
        </g>
        <!-- Balık 2 (Mavi) -->
        <g transform="translate(290, 150)">
          <ellipse cx="0" cy="0" rx="30" ry="18" fill="#38bdf8"/>
          <polygon points="-24,0 -44,-14 -44,14" fill="#facc15"/>
          <circle cx="15" cy="-4" r="3.5" fill="#ffffff"/>
          <circle cx="16" cy="-4" r="1.8" fill="#0f172a"/>
        </g>
        <!-- Kod Etiketi -->
        <rect x="25" y="25" width="180" height="35" rx="6" fill="#0f172a" opacity="0.85" stroke="#6366f1"/>
        <text x="35" y="47" fill="#38bdf8" font-size="11" font-weight="bold">sürekli tekrarla: 10 adım git</text>
      </svg>`,
      caption: "Scratch ile çoklu kukla ve su altı ekosistemi simülasyonu"
    },
    section2: {
      title: "İnteraktif Olaylar: Tıklanan Balık Tepki Versin!",
      subtitle: "Akvaryum sadece izlenen değil, dokunulup oynanan bir dünya haline geliyor.",
      cards: [
        {
          title: "Tıklama Olayı (Event)",
          icon: "👆",
          desc: "Fare ile balığa tıklandığında anlık tepkiler:",
          items: [
            { bold: "'Bu kuklaya tıklandığında'", text: "Sarı renkli Olaylar bloğu doğrudan balığa dokunulunca tetiklenir." },
            { bold: "Kaçış Hareketi", text: "'Rastgele konuma 0.5 saniyede süzül' diyerek anında kaçar." }
          ]
        },
        {
          title: "Görsel ve Sesli Geri Bildirim",
          icon: "✨",
          desc: "Tıklanan canlıyı canlandırma:",
          items: [
            { bold: "Renk Değişimi", text: "'Renk etkisini 25 değiştir' ile her tıkta yeni bir türe dönüşür." },
            { bold: "Baloncuk Sesi", text: "'Bubbles' veya 'Pop' ses efekti çalarak işitsel zenginlik katar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: İnteraktif Scratch Akvaryumu",
      subtitle: "3 farklı deniz canlısıyla yaşayan, tıklanabilir bir su altı dünyası kodluyoruz.",
      steps: [
        { title: "Dekor Seçimi", desc: "Sahne kütüphanesinden 'Underwater 1' arka planını ekleyiniz." },
        { title: "Balık Kuklaları", desc: "'Fish' ve 'Starfish' kuklalarını ekleyip boyutlarını %60 olarak ayarlayınız." },
        { title: "Yüzme Algoritması", desc: "'Yeşil bayrak tıklandığında' -> 'Dönüş stilini sol-sağ yap' -> 'Sürekli tekrarla: 8 adım git, kenara geldiyse sek' bloklarını dizin." },
        { title: "İnteraktif Kaçış", desc: "Balığa 'Bu kuklaya tıklandığında' -> 'rastgele konuma 0.5 saniyede git' ve 'bubbles sesini başlat' komutlarını ekleyin." }
      ],
      time: "25 Dakika",
      target: "Duvarlardan seken ve tıklandığında kaçan 2 farklı deniz canlısı simülasyonu"
    },
    safetyAndEthics: [
      "Çevre ve Deniz Bilinci: Denizlerimizi ve okyanusları plastik atıklardan korumak tüm canlıların yaşam hakkıdır.",
      "Ekran Süresi Dengesi: Ara tatilde bilgisayar başında günde en fazla 45 dakika geçirmeli ve doğayla iç içe olmalıyız."
    ],
    quiz: {
      question: "Scratch'te bir balığın sahne kenarına çarpıp baş aşağı dönmesini önlemek için hangi blok kullanılır?",
      options: [
        "A) Gizle bloğu",
        "B) Dönüş stilini sol-sağ yap bloğu",
        "C) Boyutu %50 yap bloğu",
        "D) 100 adım git bloğu"
      ],
      correctAnswer: 1,
      explanation: "'Dönüş stilini sol-sağ yap' bloğu, karakterin duvardan sekerken ters dönmesini engeller ve sadece yatay eksende yönünü çevirir."
    },
    summary: "Ara tatil atölyemizde çoklu kuklaları bağımsız kodlamayı, duvardan sektirme kurallarını ve tıklama olaylarıyla etkileşimli su altı dünyası tasarlamayı başardık.",
    homework: "Evde ailenize Scratch akvaryumunuzu gösterin ve onlardan ekrandaki balıklara tıklamalarını isteyerek tepkilerini izleyin.",
    nextWeekPreview: "23 Nisan Çocuk Bayramı: Müzikli ve kostüm değiştiren çocuk korosu animasyonu kodlayacağız!"
  },

  // 32. HAFTA
  {
    week: 32,
    date: "19 - 25 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Görsel Blok Tabanlı Kodlama ve Dijital Animasyon",
    unitBadge: "23 Nisan Özel",
    unitTheme: "tema-5",
    title: "23 Nisan Çocuk Bayramı: Çocuk Korosu & Kostüm Animasyonu",
    subtitle: "Scratch ile Kostüm Değiştirerek Yürüme/Dans Efekti, Müzik Çalma ve Bayrak Töreni Sahnesi",
    outcomeCode: "BTY.3.5.4 (Kostüm Animasyonu & Milli Değerler)",
    targetSkill: "Kostüm Değiştirerek Animasyon Üretme, Müzik Eşzamanlaması ve Bayram Mesajı Sunumu",
    curiosityQuestion: "Çizgi filmlerdeki karakterler aslında sadece peş peşe değişen fotoğraflar mıdır? Scratch'te bunu nasıl yaparız?",
    roadmap: [
      { title: "23 Nisan Önemi", desc: "Gazi Mustafa Kemal Atatürk'ün dünya çocuklarına armağan ettiği milli bayram." },
      { title: "Kostüm Değiştirme", desc: "'Sonraki kostüm' ve bekleme bloğu ile yürüme/dans animasyonu." },
      { title: "Fon Müziği Ekleme", desc: "Neşeli çocuk şarkılarını sahne arkasında kesintisiz çalma." },
      { title: "Konuşma Balonu", desc: "'23 Nisan Kutlu Olsun!' mesajını sahnede kutlama." }
    ],
    section1: {
      title: "Animasyonun Temeli: Kostüm Değiştirme",
      subtitle: "Hızlı değişen resim kareleri insan gözünde akıcı bir harekete dönüşür!",
      layout: "split-visual",
      card: {
        title: "Kusursuz Dans Döngüsünün 3 Parçası",
        icon: "💃",
        desc: "Scratch'te kuklayı hareket ettirmek için:",
        items: [
          { bold: "1. Kostümler Sekmesi", text: "Karakterin kollarını ve bacaklarını farklı açtığı çizim kareleri yer alır." },
          { bold: "2. 'Sonraki Kostüm'", text: "Karakteri sıradaki çizimine geçirerek animasyon oluşturur." },
          { bold: "3. '0.2 Saniye Bekle'", text: "Gözün kareleri fark edebilmesi için araya mutlaka kısa bekleme konulmalıdır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
        <rect x="15" y="195" width="390" height="40" fill="#a16207"/>
        <!-- Flama -->
        <path d="M 25 35 Q 210 65 395 35" fill="none" stroke="#cbd5e1" stroke-width="2"/>
        <polygon points="60,40 80,40 70,60" fill="#e11d48"/>
        <polygon points="120,47 140,47 130,67" fill="#e11d48"/>
        <polygon points="180,50 200,50 190,70" fill="#e11d48"/>
        <polygon points="240,50 260,50 250,70" fill="#e11d48"/>
        <polygon points="300,47 320,47 310,67" fill="#e11d48"/>
        <!-- Dans Eden Çocuk (Orta) -->
        <g transform="translate(210, 135)">
          <circle cx="0" cy="-35" r="14" fill="#fed7aa"/>
          <rect x="-10" y="-20" width="20" height="32" rx="4" fill="#e11d48"/>
          <line x1="-10" y1="-10" x2="-26" y2="-28" stroke="#fed7aa" stroke-width="4" stroke-linecap="round"/>
          <line x1="10" y1="-10" x2="26" y2="-28" stroke="#fed7aa" stroke-width="4" stroke-linecap="round"/>
          <rect x="-8" y="12" width="7" height="35" fill="#ffffff"/>
          <rect x="1" y="12" width="7" height="35" fill="#ffffff"/>
          <!-- Elindeki Türk Bayrağı -->
          <line x1="26" y1="-28" x2="26" y2="-65" stroke="#64748b" stroke-width="2"/>
          <rect x="26" y="-65" width="26" height="16" fill="#e11d48"/>
          <circle cx="36" cy="-57" r="4" fill="#ffffff"/>
          <circle cx="37.5" cy="-57" r="3.2" fill="#e11d48"/>
        </g>
        <!-- Notalar -->
        <text x="100" y="110" font-size="22" fill="#ec4899">♪</text>
        <text x="310" y="100" font-size="26" fill="#8b5cf6">♫</text>
        <!-- Konuşma Balonu -->
        <rect x="135" y="65" width="150" height="28" rx="8" fill="#ffffff" stroke="#e11d48"/>
        <text x="145" y="84" fill="#e11d48" font-size="11" font-weight="bold">23 Nisan Kutlu Olsun! 🎉</text>
      </svg>`,
      caption: "Kostüm değiştirerek dans eden ve bayrak sallayan çocuk kuklası"
    },
    section2: {
      title: "Müzik Ekleme ve Zamanlama",
      subtitle: "Görsel dans hareketlerini neşeli şarkılarla buluşturuyoruz.",
      cards: [
        {
          title: "Ses Blokları",
          icon: "🎵",
          desc: "Scratch'te müzik başlatma:",
          items: [
            { bold: "'... Sesini Başlat'", text: "Müziği arkada çalarken karakterin dans kodlarının aynı anda devam etmesini sağlar." },
            { bold: "Müzik Kütüphanesi", text: "'Celebrate', 'Dance' kategorisinden coşkulu melodiler seçilir." }
          ]
        },
        {
          title: "Konuşma ve Işık Gösterisi",
          icon: "💡",
          desc: "Sahneyi zenginleştiren detaylar:",
          items: [
            { bold: "Konuşma Balonu", text: "'... de 2 saniye' ile bayram tebriki ekranda görünür." },
            { bold: "Dekor Renk Efekti", text: "Sahneye 'renk etkisini 10 değiştir' döngüsü eklenerek disko ışıkları yapılır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: 23 Nisan Sahne Gösterisi Animasyonu",
      subtitle: "Müzik eşliğinde kostüm değiştirerek dans eden iki çocuk kuklası kodlayınız.",
      steps: [
        { title: "Dekor", desc: "'Spotlight' veya 'Concert' sahne dekorunu seçiniz." },
        { title: "Kuklalar", desc: "Kütüphaneden kostümleri olan iki çocuk kuklası (ör. Ballerina ve Cassy Dance) ekleyiniz." },
        { title: "Dans Döngüsü", desc: "Her iki kuklaya: 'Yeşil bayrak tıklandığında' -> 'Sürekli tekrarla' -> 'Sonraki kostüm' -> '0.2 saniye bekle' bloklarını bağlayın." },
        { title: "Müzik ve Kutlama", desc: "'Dance Celebrate' müziğini başlatın ve kuklalardan birine '23 Nisan Kutlu Olsun!' dedirtin." }
      ],
      time: "25 Dakika",
      target: "Müzik eşliğinde dans eden ve bayram mesajı veren animasyon"
    },
    safetyAndEthics: [
      "Milli Birlik ve Beraberlik: Bayramlarımızı sevgi, saygı ve kardeşlikle kutlamalı; Atatürk'ün mirasına sahip çıkmalıyız.",
      "Telif Hakları: Projelerimize müzik eklerken Scratch kütüphanesindeki serbest telifli sesleri tercih etmeliyiz."
    ],
    quiz: {
      question: "Scratch'te bir kuklanın yürüyormuş veya dans ediyormuş gibi görünmesi için 'sonraki kostüm' bloğunun altına hangi blok eklenmelidir?",
      options: [
        "A) 100 adım git",
        "B) 0.2 saniye bekle",
        "C) Gizlen",
        "D) Dekor 3'e geç"
      ],
      correctAnswer: 1,
      explanation: "Kostüm değişimlerinin insan gözü tarafından doğal bir hareket olarak algılanabilmesi için araya '0.2 saniye bekle' gibi kısa duraklama konmalıdır."
    },
    summary: "23 Nisan kutlama projemizde kostüm geçişlerini döngülerle birleştirerek dijital animasyon yapmayı, konuşma balonları ve fon müziğiyle zengin bir sahne oluşturmayı öğrendik.",
    homework: "Scratch'te hazırladığınız 23 Nisan animasyonuna üçüncü bir kukla (örneğin uçan kırmızı-beyaz balonlar) ekleyin.",
    nextWeekPreview: "Görünüm ve Ses Blokları: Konuşma balonları, düşünceler ve klavyeyle piyano çalma!"
  },

  // 33. HAFTA
  {
    week: 33,
    date: "26 Nisan - 2 Mayıs",
    hours: "2 Ders Saati",
    unit: "5. Tema: Görsel Blok Tabanlı Kodlama ve Dijital Animasyon",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Görünüm ve Ses Blokları: Diyaloglar, Kostümler ve Enstrümanlar",
    subtitle: "Scratch ile Karakter Konuşturma, Düşünce Balonları, Ses Tonu Değiştirme ve Piyano Çalma",
    outcomeCode: "BTY.3.5.5 (Görünüm, Ses & Müzik Eklentisi)",
    targetSkill: "Senkronize Diyalog Tasarlama, Ses Efektlerini Yönetme ve Dijital Müzik Üretimi",
    curiosityQuestion: "Bilgisayar klavyesindeki rakamlara basarak tıpkı gerçek bir piyano gibi do-re-mi sesleri nasıl çalınabilir?",
    roadmap: [
      { title: "Konuşma vs Düşünce", desc: "'... de' ve '... düşün' balonlarının farkları ve kullanım amaçları." },
      { title: "Senkronize Sohbet", desc: "İki kuklayı bekleme bloklarıyla sırayla, söz kesmeden konuşturma." },
      { title: "Ses Tonu (Pitch)", desc: "Sesleri inceltip kalınlaştırarak eğlenceli efektler üretme." },
      { title: "Müzik Eklentisi", desc: "Scratch uzantısı ile bilgisayarı bir müzik aletine çevirme." }
    ],
    section1: {
      title: "Karakterlerin Sesi: Görünüm Blokları",
      subtitle: "Mor renkli Görünüm bloklarıyla karakterlerimize diyalog yazıyoruz.",
      layout: "split-visual",
      card: {
        title: "İki Farklı Baloncuk Türü",
        icon: "💬",
        desc: "Karakterlerin duygu ve düşüncelerini aktarma:",
        items: [
          { bold: "Konuşma Balonu ('... de')", text: "Sivri uçludur; karakterin dışarıya yüksek sesle söylediği cümleleri gösterir." },
          { bold: "Düşünce Balonu ('... düşün')", text: "Bulut şeklindedir; karakterin iç sesini ve aklından geçenleri yansıtır." },
          { bold: "Sıralı Konuşma", text: "Biri konuşurken diğeri bekler; böylece diyaloglar üst üste binmez." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
        <!-- Sol Konuşma Kartı -->
        <g transform="translate(35, 45)">
          <rect x="0" y="0" width="160" height="85" rx="10" fill="#ffffff"/>
          <polygon points="30,85 45,100 50,85" fill="#ffffff"/>
          <text x="15" y="25" fill="#4f46e5" font-size="11" font-weight="bold">💬 Konuşma Balonu</text>
          <text x="15" y="48" fill="#1e293b" font-size="10">"Merhaba Kedi!" de</text>
          <text x="15" y="68" fill="#64748b" font-size="9">Açık diyaloglar için</text>
        </g>
        <!-- Sağ Düşünce Kartı -->
        <g transform="translate(225, 45)">
          <rect x="0" y="0" width="160" height="85" rx="10" fill="#ffffff"/>
          <circle cx="35" cy="93" r="4" fill="#ffffff"/>
          <circle cx="30" cy="102" r="2" fill="#ffffff"/>
          <text x="15" y="25" fill="#ec4899" font-size="11" font-weight="bold">💭 Düşünce Balonu</text>
          <text x="15" y="48" fill="#1e293b" font-size="10">"Acaba nerede?" düşün</text>
          <text x="15" y="68" fill="#64748b" font-size="9">İç ses ve ipuçları için</text>
        </g>
        <!-- Piyano Tuşları Minyatür -->
        <g transform="translate(100, 155)">
          <rect x="0" y="0" width="220" height="65" rx="8" fill="#1e293b" stroke="#6366f1"/>
          <!-- Beyaz tuşlar -->
          <rect x="15" y="10" width="26" height="45" rx="2" fill="#ffffff"/>
          <rect x="45" y="10" width="26" height="45" rx="2" fill="#ffffff"/>
          <rect x="75" y="10" width="26" height="45" rx="2" fill="#ffffff"/>
          <rect x="105" y="10" width="26" height="45" rx="2" fill="#ffffff"/>
          <rect x="135" y="10" width="26" height="45" rx="2" fill="#ffffff"/>
          <rect x="165" y="10" width="26" height="45" rx="2" fill="#ffffff"/>
          <!-- Siyah tuşlar -->
          <rect x="34" y="10" width="16" height="26" rx="2" fill="#0f172a"/>
          <rect x="64" y="10" width="16" height="26" rx="2" fill="#0f172a"/>
          <rect x="124" y="10" width="16" height="26" rx="2" fill="#0f172a"/>
          <rect x="154" y="10" width="16" height="26" rx="2" fill="#0f172a"/>
        </g>
      </svg>`,
      caption: "Konuşma ve düşünce balonları ile dijital piyano notaları"
    },
    section2: {
      title: "Müzik Eklentisi ile Dijital Çalgılar",
      subtitle: "Sol alttaki mavi '+' butonundan Müzik eklentisini açarak notaları keşfediyoruz.",
      cards: [
        {
          title: "Müzik Blokları",
          icon: "🎹",
          desc: "Notalarla melodi üretme:",
          items: [
            { bold: "'60 Numaralı Notayı Çal'", text: "60 sayısı piyanodaki temel 'Orta Do' notasına denk gelir." },
            { bold: "Vuruş Süresi", text: "0.25 kısa vuruş, 0.5 orta, 1 tam vuruş uzunluğunda ses verir." }
          ]
        },
        {
          title: "Enstrüman Seçimi",
          icon: "🎺",
          desc: "Farklı çalgı sesleri:",
          items: [
            { bold: "Çalgılar", text: "Piyano, gitar, flüt, org, marimba ve davul sesleri seçilebilir." },
            { bold: "Klavye Tuşları", text: "1, 2, 3 tuşlarına basıldığında Do, Re, Mi sesleri tetiklenir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Karşılıklı Sohbet ve Do-Re-Mi Piyanist",
      subtitle: "İki kuklanın sırayla konuşmasını ve 1-2-3 tuşlarıyla piyano çalmasını kodlayınız.",
      steps: [
        { title: "Kukla Seçimi", desc: "Sahneye 'Kedi' ve 'Panda' kuklalarını ekleyiniz." },
        { title: "Sıralı Konuşma", desc: "Kedi 'Merhaba Panda!' derken Panda 2 saniye beklesin; ardından Panda 'Merhaba Kedi!' desin." },
        { title: "Müzik Eklentisi", desc: "Sol alttan 'Müzik' eklentisini projeye dahil edin." },
        { title: "Piyano Kodları", desc: "'1 tuşuna basılınca: 60 notasını çal', '2 tuşuna basılınca: 62 notasını çal', '3 tuşuna basılınca: 64 notasını çal' bloklarını oluşturun." }
      ],
      time: "25 Dakika",
      target: "Söz kesmeden diyalog kuran iki karakter ve tuşlarla çalınan dijital piyano"
    },
    safetyAndEthics: [
      "İletişim Nezaketi: Karakterlerimize diyalog yazarken daima kibar, saygılı ve yapıcı kelimeler seçmeliyiz.",
      "İşitme Sağlığı: Kulaklıkla çalışırken ses seviyesini %60'ın üzerinde tutmamalıyız."
    ],
    quiz: {
      question: "İki kuklanın sırayla konuşması için birinci kukla konuşurken ikinci kuklanın koduna hangi blok eklenmelidir?",
      options: [
        "A) Durdur hepsi",
        "B) ... saniye bekle",
        "C) Kenara geldiyse sektir",
        "D) X konumunu 10 değiştir"
      ],
      correctAnswer: 1,
      explanation: "Diyalogların üst üste binmemesi için birinci karakter konuşurken, ikinci karakterin koduna konuşma süresi kadar '... saniye bekle' komutu konulmalıdır."
    },
    summary: "Bu hafta Görünüm bloklarıyla konuşma ve düşünce balonlarını ayrıştırdık, iki kuklayı senkronize konuşturduk ve Müzik eklentisiyle bilgisayarımızı melodik bir piyanoya çevirdik.",
    homework: "Klavyenin 1'den 7'ye kadar olan tuşlarına basıldığında Do-Re-Mi-Fa-Sol-La-Si seslerini çalan 7 tuşlu tam bir piyano kodlayın.",
    nextWeekPreview: "Algılama Blokları: Renge dokundu mu, fareye değdi mi ve heyecan dolu labirent oyunu!"
  },

  // 34. HAFTA
  {
    week: 34,
    date: "3 - 9 Mayıs",
    hours: "2 Ders Saati",
    unit: "5. Tema: Görsel Blok Tabanlı Kodlama ve Dijital Animasyon",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Algılama (Sensing) ve Karar Blokları: Temas ve Renk Kontrolü",
    subtitle: "Scratch Açık Mavi Bloklar, 'Fare İmlecine Değdi mi?', 'Renge Değdi mi?' ve Labirent Oyunu",
    outcomeCode: "BTY.3.5.6 (Algılama Blokları & Labirent)",
    targetSkill: "Çevreyle Teması Algılama, Renk Kontrolü ve Koşullu Labirent Mekaniği Kurma",
    curiosityQuestion: "Robot süpürgeler veya arabalar duvara çarptığını nasıl anlar ve Scratch'te karakterimize bu hissi nasıl veririz?",
    roadmap: [
      { title: "Algılama Blokları (Açık Mavi)", desc: "Karakterin ekrandaki nesneleri hissetmesini sağlayan sensör blokları." },
      { title: "Altıgen Şekil Mantığı", desc: "Sivri uçlu blokların sadece 'Eğer... ise' içine oturması." },
      { title: "Damlalık Aracı", desc: "Sahnedeki duvar rengini birebir kopyalama tekniği." },
      { title: "Labirent Çözümü", desc: "Kırmızı duvara çarpınca başlangıç koordinatına ışınlanma." }
    ],
    section1: {
      title: "Bilgisayarın Dokunma Duyusu: Algılama Blokları",
      subtitle: "Açık mavi Algılama blokları kuklalarımıza duvara çarpma ve dokunma hissi kazandırır.",
      layout: "split-visual",
      card: {
        title: "3 Önemli Algılama Bloğu",
        icon: "📡",
        desc: "Kuklanın çevresini denetleme:",
        items: [
          { bold: "'... değdi mi?'", text: "Fare imlecine, kenara veya başka bir kuklaya temas edip etmediğini kontrol eder." },
          { bold: "'... rengine dokundu mu?'", text: "Kuklanın belirlenen renge (ör. kırmızı labirent duvarına) dokunup dokunmadığını algılar." },
          { bold: "Sürekli Tekrarla Şartı", text: "Algılama bloğu 'eğer' ile birlikte sürekli döngüde olmalıdır; yoksa oyun anında durur." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
        <!-- Labirent Duvarları (Kırmızı) -->
        <path d="M 45 50 L 160 50 L 160 130 L 90 130 L 90 200 L 240 200" fill="none" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>
        <path d="M 210 50 L 375 50 L 375 150 L 290 150 L 290 95" fill="none" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>
        <!-- Oyuncu (Sarı Top) -->
        <circle cx="125" cy="90" r="14" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="129" cy="86" r="2.5" fill="#0f172a"/>
        <!-- Hedef Yıldız -->
        <g transform="translate(335, 200)">
          <circle cx="0" cy="0" r="16" fill="#10b981"/>
          <text x="-7" y="5" fill="#ffffff" font-size="14" font-weight="bold">★</text>
        </g>
        <!-- Blok Görseli -->
        <g transform="translate(180, 85)">
          <path d="M 0 0 L 140 0 L 140 26 L 45 26 L 45 55 L 140 55 L 140 75 L 0 75 Z" fill="#eab308"/>
          <text x="8" y="18" fill="#713f12" font-size="11" font-weight="bold">eğer</text>
          <polygon points="35,13 42,5 128,5 135,13 128,21 42,21" fill="#0284c7"/>
          <text x="46" y="16" fill="#ffffff" font-size="8" font-weight="bold">kırmızıya değdi mi?</text>
          <rect x="52" y="30" width="80" height="18" rx="3" fill="#2563eb"/>
          <text x="56" y="43" fill="#ffffff" font-size="8">başlangıca git</text>
        </g>
      </svg>`,
      caption: "Kırmızı duvara çarpınca başlangıca dönen labirent algoritması"
    },
    section2: {
      title: "Labirent Oyunu Tasarım Adımları",
      subtitle: "Karakterin duvardan geçmesini engelleyip bitişe ulaşma mücadelesi kurguluyoruz.",
      cards: [
        {
          title: "Ceza Mekanizması",
          icon: "🛑",
          desc: "Duvara çarpma durumu:",
          items: [
            { bold: "Başlangıç Noktası", text: "Duvara değdiğinde 'x: -200, y: 140' gibi ilk koordinata geri ışınlanır." },
            { bold: "Geri İtme Yöntemi", text: "Veya duvara değer değmez '-5 adım git' diyerek geri seker." }
          ]
        },
        {
          title: "Zafer ve Ödül",
          icon: "🏆",
          desc: "Hedefe ulaşma anı:",
          items: [
            { bold: "Hazine Teması", text: "'Eğer yeşil yıldıza değdi mi ise' zafer komutları başlar." },
            { bold: "Kazanma Mesajı", text: "'Tebrikler Kazandın!' konuşma balonu çıkar ve alkış çalar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Kırmızı Duvarlı Mini Labirent Oyunu",
      subtitle: "Çizdiğiniz kırmızı duvarlara çarpmadan yeşil yıldıza ulaşan oyunu kodlayınız.",
      steps: [
        { title: "Labirent Çizimi", desc: "Sahne dekoruna kalın kırmızı fırçayla basit labirent yolları çizin, sonuna yeşil daire koyun." },
        { title: "Oyuncu Boyutu", desc: "Oyuncu kuklasını yollardan rahat geçecek şekilde (%40) küçültün." },
        { title: "Ok Tuşları", desc: "Yukarı, Aşağı, Sağ, Sol ok tuşlarıyla hareket kodlarını bağlayın." },
        { title: "Duvar Kontrolü", desc: "'Sürekli tekrarla: Eğer kırmızı rengine değdi mi ise x: -200 y: 140 konumuna git' bloğunu kurun." }
      ],
      time: "25 Dakika",
      target: "Duvara çarpınca başa dönen, hedefe varınca kazandıran mini labirent"
    },
    safetyAndEthics: [
      "Hata Ayıklama Sabrı: Karakter duvardan geçerse panik yapmayın; renk damlalığıyla duvar rengini yeniden seçip deneyin.",
      "Adil Tasarım: Oyun yaparken oyuncuyu bıktıracak imkansız labirentler yerine eğlenceli ve çözülebilir yollar kurmalıyız."
    ],
    quiz: {
      question: "Labirent oyununda karakterin duvardan geçmesini engellemek için 'eğer duvara değdi mi ise' bloğunun içine hangi komut yazılmalıdır?",
      options: [
        "A) 100 adım git",
        "B) Başlangıç konumuna git (veya -5 adım git)",
        "C) Kostümü değiştir",
        "D) Dekor 2'ye geç"
      ],
      correctAnswer: 1,
      explanation: "Duvara temas algılandığında karakter ya hemen labirentin başlangıç koordinatlarına geri ışınlanır ya da zıt yönde (-5 adım) geri itilerek duvardan geçmesi engellenir."
    },
    summary: "Bu dersimizde açık mavi Algılama bloklarını, renk damlalığıyla temas kontrolünü ve 'Eğer... ise' karar yapılarıyla duvara çarpınca başa dönen labirent mekaniğini inşa ettik.",
    homework: "Labirentinize fareyle toplanabilecek 2 adet sarı elmas ekleyin ve elmaslara dokununca kaybolmalarını sağlayın.",
    nextWeekPreview: "Engelliler Haftası: Görme ve işitme engelliler için akıllı baston simülasyonu kodlayacağız!"
  },

  // 35. HAFTA
  {
    week: 35,
    date: "10 - 16 Mayıs",
    hours: "2 Ders Saati",
    unit: "6. Tema: Robotik, Yapay Zekâ ve Geleceğin Bilişim Dünyası",
    unitBadge: "Engelliler Haftası",
    unitTheme: "tema-6",
    title: "Engelliler Haftası: Görme ve İşitme Engelliler İçin Sesli Rehber",
    subtitle: "Bilişim ve Erişilebilirlik (A11y), Akıllı Baston Algoritması ve Ekran Okuyucu Teknolojileri",
    outcomeCode: "BTY.3.6.1 (Erişilebilirlik & Akıllı Baston)",
    targetSkill: "Teknolojiyi Erişilebilirlik İçin Kullanma, Mesafe Algılama Simülasyonu ve Empati Kurma",
    curiosityQuestion: "Gözleri görmeyen bir birey önündeki basamağı veya çukuru çarpmadan nasıl fark edebilir? Akıllı bastonlar nasıl 'görür'?",
    roadmap: [
      { title: "Erişilebilirlik (A11y)", desc: "Teknolojinin tüm özel gereksinimli bireyler için eşit ve engelsiz olması." },
      { title: "Ekran Okuyucular", desc: "Yazıları sese dönüştürerek görme engellilere rehberlik eden yazılımlar." },
      { title: "Akıllı Baston Mantığı", desc: "Yarasalar gibi ultrasonik ses dalgası gönderip mesafeyi ölçme." },
      { title: "Sesli & Titreşimli Uyarı", desc: "Mesafe kısaldıkça artan bip sesleriyle kullanıcıyı koruma." }
    ],
    section1: {
      title: "Teknoloji Engelleri Nasıl Kaldırır?",
      subtitle: "Bilişim dünyası empati ve sevgiyle birleştiğinde herkes için hayatı kolaylaştırır.",
      layout: "split-visual",
      card: {
        title: "Hayat Kolaylaştıran 3 Teknoloji",
        icon: "🦯",
        desc: "Özel gereksinimli bireyler için geliştirilen çözümler:",
        items: [
          { bold: "1. Ekran Okuyucular", text: "Telefondaki butonları ve haberleri seslendirerek görme engellilere rehberlik eder." },
          { bold: "2. Otomatik Altyazı", text: "Videolardaki konuşmaları anında metne dökerek işitme engellilere ulaştırır." },
          { bold: "3. Akıllı Baston", text: "Önündeki engelleri metrelerce uzaktan algılayarak ses ve titreşimle uyarır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <rect x="15" y="185" width="390" height="50" fill="#334155"/>
        <rect x="15" y="200" width="390" height="20" fill="#facc15"/>
        <!-- Görme Engelli Karakter (Solda) -->
        <g transform="translate(120, 125)">
          <circle cx="0" cy="-35" r="14" fill="#fed7aa"/>
          <rect x="-8" y="-38" width="16" height="6" rx="2" fill="#0f172a"/>
          <rect x="-10" y="-20" width="20" height="38" rx="4" fill="#3b82f6"/>
          <rect x="-8" y="18" width="7" height="45" fill="#1e3a8a"/>
          <rect x="1" y="18" width="7" height="45" fill="#1e3a8a"/>
          <!-- Baston -->
          <line x1="8" y1="-8" x2="22" y2="10" stroke="#fed7aa" stroke-width="3" stroke-linecap="round"/>
          <line x1="22" y1="10" x2="80" y2="80" stroke="#f8fafc" stroke-width="3"/>
          <circle cx="80" cy="80" r="3.5" fill="#ef4444"/>
          <!-- Ultrasonik Dalgalar -->
          <path d="M 75 50 Q 90 52 90 62" fill="none" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 85 45 Q 105 50 105 67" fill="none" stroke="#38bdf8" stroke-width="2"/>
        </g>
        <!-- Engel Kutu (Sağda) -->
        <g transform="translate(280, 160)">
          <rect x="0" y="0" width="35" height="35" rx="4" fill="#b45309" stroke="#78350f" stroke-width="2"/>
          <text x="5" y="22" fill="#fef3c7" font-size="9" font-weight="bold">ENGEL</text>
        </g>
        <!-- Kod Paneli -->
        <rect x="35" y="30" width="230" height="40" rx="8" fill="#1e293b" stroke="#10b981"/>
        <text x="45" y="48" fill="#34d399" font-size="10" font-weight="bold">AKILLI BASTON ALGORİTMASI:</text>
        <text x="45" y="62" fill="#ffffff" font-size="9">Eğer mesafe &lt; 50 cm ise: "BİP! ENGEL VAR!"</text>
      </svg>`,
      caption: "Mesafe sensörlü akıllı baston ve sesli uyarı simülasyonu"
    },
    section2: {
      title: "Akıllı Baston Nasıl Düşünür?",
      subtitle: "Ultrasonik mesafe sensörüyle çalışan bastonun algoritmasını çözüyoruz.",
      cards: [
        {
          title: "Sensör (Yarasa Kulağı)",
          icon: "🦇",
          desc: "Ses dalgalarıyla görme:",
          items: [
            { bold: "Ses Dalgası", text: "Bastonun ucundaki sensör insanın duyamayacağı ses dalgası fırlatır." },
            { bold: "Yankı Ölçümü", text: "Engele çarpıp dönen sesin süresinden mesafeyi santimetre olarak hesaplar." }
          ]
        },
        {
          title: "Uyarı Sistemi",
          icon: "🔊",
          desc: "Kullanıcıyı bilgilendirme:",
          items: [
            { bold: "Sesli Bip", text: "Engel 50 cm'den yakınsa hızlı bip sesleri çalar." },
            { bold: "Titreşim", text: "Bastonun sapındaki motor titreyerek kullanıcının eline haber verir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Scratch ile 'Akıllı Baston' Simülatörü",
      subtitle: "Baston engele yaklaştıkça sesli ikaz veren erişilebilir bir simülasyon kodlayınız.",
      steps: [
        { title: "Kaldırım Sahnesi", desc: "Sahneye kaldırım dekoru ve sağ tarafa bir 'Kutu' (engel kuklası) ekleyiniz." },
        { title: "Baston Kuklası", desc: "Sol tarafa yürüyen baston kuklasını yerleştiriniz." },
        { title: "Mesafe Algılama", desc: "Algılama sekmesinden '... kuklasına olan mesafe' bloğunu alın." },
        { title: "Uyarı Koşulu", desc: "'Eğer kutuya mesafe < 80 ise' -> 'Alert / Beep sesini başlat' ve 'Dikkat engel var! de' komutlarını dizin." }
      ],
      time: "25 Dakika",
      target: "Engele 80 adımdan fazla yaklaşınca ses ve yazıyla uyaran akıllı baston"
    },
    safetyAndEthics: [
      "Kapsayıcılık ve Empati: Bilgisayar oyunları ve web siteleri tasarlarken görme ve işitme güçlüğü çeken arkadaşlarımızı da düşünmeliyiz.",
      "Yol Hakkına Saygı: Kaldırımlardaki sarı kabartmalı şeritlerin üzerine araba, bisiklet veya kutu bırakmamalıyız."
    ],
    quiz: {
      question: "Görme engelli bireyler için tasarlanan 'Akıllı Baston' bir engeli fark ettiğinde kullanıcıyı nasıl uyarır?",
      options: [
        "A) Ekranın rengini mavi yaparak",
        "B) Titreşim ve sesli ikaz (bip sesi) vererek",
        "C) Karakterin kostümünü değiştirerek",
        "D) Bilgisayarı kapatıp yeniden başlatarak"
      ],
      correctAnswer: 1,
      explanation: "Akıllı bastonlar kullanıcının görme kısıtını dikkate alarak işitsel (bip sesi) ve dokunsal (sapındaki titreşim motoru) sinyallerle uyarı yapar."
    },
    summary: "Engelliler Haftası'nda teknolojinin engelleri kaldıran gücünü inceledik; ekran okuyucuları, sesli asistanları ve ultrasonik mesafe mantığıyla çalışan akıllı baston projesini Scratch'te modelledik.",
    homework: "Evinizde gözlerinizi 2 dakika kapatarak bir odadan diğerine sadece dokunarak gitmeyi deneyin ve teknolojinin önemini ailenizle tartışın.",
    nextWeekPreview: "19 Mayıs Gençlik ve Spor Bayramı: Basketbol hedef oyunu ve turuncu Değişkenler (Skor) sekmesi!"
  },

  // 36. HAFTA
  {
    week: 36,
    date: "17 - 23 Mayıs",
    hours: "2 Ders Saati",
    unit: "5. Tema: Görsel Blok Tabanlı Kodlama ve Dijital Animasyon",
    unitBadge: "19 Mayıs Özel",
    unitTheme: "tema-5",
    title: "19 Mayıs Gençlik ve Spor Bayramı: Basketbol Oyunu & Değişkenler (Skor)",
    subtitle: "Scratch Turuncu Değişken Blokları, Puan/Skor Sayacı Oluşturma ve Hedef Vurma Mekaniği",
    outcomeCode: "BTY.3.5.7 (Değişkenler & Skor Sayacı)",
    targetSkill: "Değişken Kavramını Anlama, Skor Sayacı Oluşturma ve Hedef Vurma Oyunu Tasarlama",
    curiosityQuestion: "Bilgisayar oyunları kaç puan aldığımızı aklında nasıl tutar ve biz hafızasında özel bir kutu nasıl açarız?",
    roadmap: [
      { title: "19 Mayıs Ruhu", desc: "Atatürk'ün gençliğe ve spora armağan ettiği dinamizm ve zindelik bayramı." },
      { title: "Değişken (Variable)", desc: "Bilgisayar hafızasında puan, can veya süre tutan etiketli kutular." },
      { title: "Skoru Sıfırlama", desc: "Yeni oyun başlarken hafızayı temizleme ('Skor'u 0 yap')." },
      { title: "Puan Kazanma", desc: "Top potadan her geçtiğinde 'Skor'u 1 kadar değiştir'." }
    ],
    section1: {
      title: "Bilgisayarın Hafıza Kutuları: Değişkenler",
      subtitle: "Koyu turuncu Değişkenler sekmesiyle oyunlarımıza puan tablosu ekliyoruz.",
      layout: "split-visual",
      card: {
        title: "Değişken Kullanmanın 3 Altın Kuralı",
        icon: "📦",
        desc: "Oyunlarda değişken yönetimi:",
        items: [
          { bold: "1. Kutuya İsim Ver", text: "'Bir Değişken Oluştur' diyerek amacına uygun ad (ör. 'Skor', 'Puan', 'Can') yazılır." },
          { bold: "2. Oyuna Sıfırla Başla", text: "Yeşil bayrağın altına mutlaka 'Skor'u 0 yap' bloğu konulmalıdır." },
          { bold: "3. Başarıda Artır", text: "Her başarılı atışta 'Skor'u 1 kadar değiştir' komutuyla puan hanesi +1 yükseltilir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <rect x="15" y="180" width="390" height="55" fill="#d97706"/>
        <!-- Skor Kutusu (Sol Üst) -->
        <g transform="translate(35, 35)">
          <rect x="0" y="0" width="120" height="42" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <text x="12" y="18" fill="#fbbf24" font-size="10" font-weight="bold">SKOR TABLOSU</text>
          <text x="50" y="34" fill="#22c55e" font-size="14" font-weight="bold">19</text>
        </g>
        <!-- Pota Direği (Sağ) -->
        <g transform="translate(350, 70)">
          <line x1="30" y1="0" x2="30" y2="120" stroke="#64748b" stroke-width="6"/>
          <rect x="10" y="10" width="6" height="50" rx="2" fill="#ffffff" stroke="#e11d48" stroke-width="2"/>
          <line x1="-15" y1="45" x2="10" y2="45" stroke="#ea580c" stroke-width="4"/>
          <polygon points="-15,45 10,45 2,75 -8,75" fill="none" stroke="#f8fafc" stroke-width="1.5" stroke-dasharray="3"/>
        </g>
        <!-- Basketbol Topu -->
        <g transform="translate(260, 90)">
          <circle cx="0" cy="0" r="16" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
          <path d="M -16 0 Q 0 -4 16 0" fill="none" stroke="#7c2d12" stroke-width="1.5"/>
          <path d="M 0 -16 Q -4 0 0 16" fill="none" stroke="#7c2d12" stroke-width="1.5"/>
          <!-- Yay Çizgisi -->
          <path d="M -130 90 Q -65 -15 0 0" fill="none" stroke="#fef08a" stroke-width="2" stroke-dasharray="4"/>
        </g>
        <!-- Atıcı Çocuk -->
        <g transform="translate(110, 140)">
          <circle cx="0" cy="-30" r="13" fill="#fed7aa"/>
          <rect x="-8" y="-17" width="16" height="28" rx="4" fill="#e11d48"/>
          <text x="-4" y="-1" fill="#ffffff" font-size="10" font-weight="bold">19</text>
          <line x1="8" y1="-10" x2="26" y2="-28" stroke="#fed7aa" stroke-width="4" stroke-linecap="round"/>
          <rect x="-7" y="11" width="6" height="38" fill="#ffffff"/>
          <rect x="1" y="11" width="6" height="38" fill="#ffffff"/>
        </g>
      </svg>`,
      caption: "Potaya basket atıldığında 'Skor' değişkenini 1 artıran oyun mekaniği"
    },
    section2: {
      title: "Basketbol Oyun Mekaniği",
      subtitle: "Boşluk tuşuna basınca topun potaya süzülmesi ve çembere temas kontrolü.",
      cards: [
        {
          title: "Şut Hareketi",
          icon: "🏀",
          desc: "Topun fırlatılması:",
          items: [
            { bold: "'Boşluk tuşuna basılınca'", text: "Top oyuncunun elinden fırlar ve havada süzülür." },
            { bold: "Süzülme Bloğu", text: "'x: 200, y: 50 konumuna 1 saniyede git' ile potaya yay çizer." }
          ]
        },
        {
          title: "Basket Algılama",
          icon: "🎯",
          desc: "Puan kazanma:",
          items: [
            { bold: "Çember Teması", text: "'Eğer çember kuklasına değdi mi ise' koşulu çalışır." },
            { bold: "Skor Artışı & Alkış", text: "'Skor'u 1 artır', alkış sesi çal ve topu tekrar başlangıç eline döndür." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Potaya Basket At ve Skor Kazan",
      subtitle: "Scratch'te 'Skor' değişkeni oluşturan ve boşluk tuşuyla şut atan oyun kodlayınız.",
      steps: [
        { title: "Dekor ve Kuklalar", desc: "'Basketball 1' dekorunu ekleyin. Bir basketbol topu ve pota çemberi kuklası koyun." },
        { title: "Skor Değişkeni", desc: "Değişkenler sekmesinden 'Skor' adında bir değişken açın." },
        { title: "Sıfırlama", desc: "'Yeşil bayrak tıklandığında' -> 'Skor'u 0 yap' -> topu başlangıç koordinatına yerleştirin." },
        { title: "Şut ve Puan", desc: "'Boşluk tuşuna basılınca' -> potaya süzül -> 'eğer çembere değdi mi ise' -> 'Skor'u 1 değiştir' ve 'Basket!' de komutunu verin." }
      ],
      time: "25 Dakika",
      target: "Her başarılı basket atışında skoru +1 artıran interaktif spor oyunu"
    },
    safetyAndEthics: [
      "Spor ve Zihinsel Zindelik: Bilgisayar başında oyun kodlamak kadar dışarıda arkadaşlarımızla basketbol oynamak da sağlığımız için vazgeçilmezdir.",
      "Fair Play: Kazanmayı sevinçle kutladığımız gibi kaybetmeyi de olgunlukla karşılamalıyız."
    ],
    quiz: {
      question: "Scratch'te yeni bir oyun başlarken önceki oyunun puanlarının silinip sıfırlanması için hangi blok kullanılır?",
      options: [
        "A) Skor'u 1 kadar değiştir",
        "B) Skor değişkenini gizle",
        "C) Skor'u 0 yap",
        "D) Skor'u göster"
      ],
      correctAnswer: 2,
      explanation: "'Skor'u 0 yap' bloğu oyunun başında değişkeni sıfırlar. '1 kadar değiştir' ise puan eklemeye devam eder."
    },
    summary: "19 Mayıs kutlamamızda turuncu Değişkenler sekmesini keşfettik; bilgisayar hafızasında skor tutarak potaya basket atıldığında puan kazandıran heyecanlı bir oyun geliştirdik.",
    homework: "Oyununuza bir de 'Kalan Top' değişkeni ekleyin. Başlangıçta 5 top olsun ve her şutta 1 azalsın.",
    nextWeekPreview: "Akıllı Teknolojiler ve Robotik: Mesafe sensörleri, LDR ve çizgi izleyen robotlar!"
  },

  // 37. HAFTA
  {
    week: 37,
    date: "24 - 30 Mayıs",
    hours: "2 Ders Saati",
    unit: "6. Tema: Robotik, Yapay Zekâ ve Geleceğin Bilişim Dünyası",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Akıllı Teknolojiler ve Robotik: Sensörler ve Çizgi İzleyen Robot",
    subtitle: "Robot Nedir? Girdi (Sensör) -> İşlem (Mikroçip) -> Çıktı (Motor) Döngüsü ve Otonom Araçlar",
    outcomeCode: "BTY.3.6.2 (Robotik Sistemler & Sensörler)",
    targetSkill: "Robot Bileşenlerini Tanıma, Girdi-İşlem-Çıktı Döngüsünü Kavrama ve Çizgi İzleme Algoritması",
    curiosityQuestion: "Fabrikalarda koli taşıyan otonom robotlar veya hastanedeki ilaç taşıyıcılar yerdeki siyah çizgiyi nasıl takip eder?",
    roadmap: [
      { title: "Robot Nedir?", desc: "Çevresini algılayan, karar veren ve hareket eden akıllı makineler." },
      { title: "Robotik Döngü", desc: "Sensör (Göz/Kulak) -> Beyin (İşlemci) -> Motor (Ayaklar/Kollar)." },
      { title: "Işık ve Mesafe Sensörü", desc: "LDR ile karanlığı anlama, ultrasonik ile engelden kaçma." },
      { title: "Çizgi İzleyen Robot", desc: "Siyah yoldan çıkınca zıt motoru hızlandırarak şeritte kalma mantığı." }
    ],
    section1: {
      title: "Bir Robot Nasıl Düşünür ve Çalışır?",
      subtitle: "Robotlar sadece filmlerdeki gibi değildir; evdeki akıllı süpürgeler de birer robottur!",
      layout: "split-visual",
      card: {
        title: "Robotun 3 Temel Organı",
        icon: "🤖",
        desc: "Bir makinenin robot olabilmesi için:",
        items: [
          { bold: "1. Sensörler (Girdi)", text: "Çevredeki ışığı, rengi veya engelleri hisseden algılayıcılar." },
          { bold: "2. Mikroişlemci (Beyin)", text: "Sensörden gelen bilgiyi okuyup kodlara göre karar veren çip." },
          { bold: "3. Motorlar (Çıktı)", text: "Verilen karara göre tekerlekleri çeviren veya kolları hareket ettiren parçalar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Siyah Yol Pisti -->
        <path d="M 35 130 Q 130 50 210 130 T 385 130" fill="none" stroke="#ffffff" stroke-width="20" stroke-linecap="round"/>
        <path d="M 35 130 Q 130 50 210 130 T 385 130" fill="none" stroke="#0f172a" stroke-width="12" stroke-linecap="round"/>
        <!-- Robot (Üstten Görünüm) -->
        <g transform="translate(205, 110) rotate(15)">
          <!-- Tekerlekler -->
          <rect x="-30" y="-24" width="12" height="20" rx="3" fill="#475569"/>
          <rect x="-30" y="10" width="12" height="20" rx="3" fill="#475569"/>
          <!-- Gövde -->
          <rect x="-24" y="-18" width="55" height="42" rx="8" fill="#3b82f6" stroke="#60a5fa" stroke-width="2"/>
          <!-- Çip -->
          <rect x="-10" y="-10" width="24" height="24" rx="3" fill="#1e1b4b" stroke="#818cf8"/>
          <!-- Sensörler (Ön Kırmızı Noktalar) -->
          <circle cx="35" cy="-8" r="3.5" fill="#ef4444"/>
          <circle cx="35" cy="8" r="3.5" fill="#ef4444"/>
          <!-- Mesafe Sensörü Gözleri -->
          <circle cx="43" cy="-5" r="4" fill="#94a3b8" stroke="#38bdf8"/>
          <circle cx="43" cy="5" r="4" fill="#94a3b8" stroke="#38bdf8"/>
        </g>
        <!-- 3 Adım Akışı -->
        <g transform="translate(35, 30)">
          <rect x="0" y="0" width="85" height="24" rx="4" fill="#0284c7"/>
          <text x="10" y="16" fill="#ffffff" font-size="9" font-weight="bold">1. SENSÖR</text>
          <text x="95" y="16" fill="#38bdf8" font-size="12">→</text>
          <rect x="115" y="0" width="85" height="24" rx="4" fill="#4338ca"/>
          <text x="127" y="16" fill="#ffffff" font-size="9" font-weight="bold">2. BEYİN</text>
          <text x="210" y="16" fill="#38bdf8" font-size="12">→</text>
          <rect x="225" y="0" width="85" height="24" rx="4" fill="#b91c1c"/>
          <text x="235" y="16" fill="#ffffff" font-size="9" font-weight="bold">3. MOTOR</text>
        </g>
      </svg>`,
      caption: "Sensör, beyin ve motor üçlüsüyle çalışan çizgi izleyen akıllı robot"
    },
    section2: {
      title: "Çizgi İzleme Algoritmasının Sırrı",
      subtitle: "İki sensörlü bir robot siyah şeritte nasıl dengede kalır?",
      cards: [
        {
          title: "Işık Yansıması",
          icon: "💡",
          desc: "Zemini ayırt etme:",
          items: [
            { bold: "Beyaz Zemin", text: "Işığı güçlü şekilde yansıtır; sensör 'Beyazdayım' der." },
            { bold: "Siyah Çizgi", text: "Işığı soğurur ve yansıtmaz; sensör 'Siyah yoldayım' der." }
          ]
        },
        {
          title: "Dönüş Kararı",
          icon: "🔄",
          desc: "Şeritte kalma kuralı:",
          items: [
            { bold: "Sol Sensör Beyaza Çıkarsa", text: "Robot sağa kaymış demektir; sol motor hızlandırılıp sola dönülür." },
            { bold: "Sağ Sensör Beyaza Çıkarsa", text: "Robot sola kaymış demektir; sağ motor hızlandırılıp sağa dönülür." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Scratch ile 'Akıllı Robot Süpürge' Simülasyonu",
      subtitle: "Sahneye siyah oval yol çizip, siyahı takip eden iki sensörlü robot simülasyonu kodlayınız.",
      steps: [
        { title: "Oval Pist", desc: "Beyaz sahne üzerine kalın siyah fırçayla kapalı oval bir yol çizin." },
        { title: "Robot Kuklası", desc: "Robot kuklasının burnuna iki farklı renkte küçük sensör noktası (sol sarı, sağ mavi) ekleyin." },
        { title: "Sensör Kontrolü", desc: "'Eğer sarı siyaha değiyorsa sola dön 5 derece', 'Eğer mavi siyaha değiyorsa sağa dön 5 derece' bloklarını yazın." },
        { title: "Otonom Sürüş", desc: "Her iki sensör de siyah yoldaysa '3 adım git' diyerek robotu pist boyunca turlatın." }
      ],
      time: "25 Dakika",
      target: "Siyah çizgiden çıkmadan pisti otonom tamamlayan robot simülasyonu"
    },
    safetyAndEthics: [
      "Robotik Güvenliği: Gerçek hayatta robotlarla çalışırken acil durdurma butonlarının yerini bilmeli ve hareketli mekanizmalardan uzak durmalıyız.",
      "İnsanlık İçin Teknoloji: Robotlar insanların tehlikeli ve yorucu işlerini üstlenerek hayatı kolaylaştırmak için üretilmelidir."
    ],
    quiz: {
      question: "Bir robotun çevresindeki mesafeyi, ışığı veya rengi fark etmesini sağlayan 'duyu organı' parçasına ne ad verilir?",
      options: [
        "A) Motor",
        "B) Sensör (Algılayıcı)",
        "C) Pil",
        "D) Tekerlek"
      ],
      correctAnswer: 1,
      explanation: "Sensörler (algılayıcılar), tıpkı insan duyu organları gibi robotun çevresindeki fiziksel dünyayı algılayıp işlemciye elektrik sinyali olarak iletir."
    },
    summary: "Bu derste robotik sistemlerin temelini (sensör, beyin, motor döngüsü) kavradık ve fabrikalarda kullanılan çizgi izleyen otonom robotların çalışma prensibini Scratch üzerinde canlandırdık.",
    homework: "Evinizdeki akıllı cihazları (robot süpürge, mikrodalga, fotoselli musluk) listeleyin ve hangilerinde sensör olduğunu bulun.",
    nextWeekPreview: "Yapay Zekâ ve Makine Öğrenmesi: Google Teachable Machine ile bilgisayara nesneleri öğretme!"
  },

  // 38. HAFTA
  {
    week: 38,
    date: "31 Mayıs - 6 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Robotik, Yapay Zekâ ve Geleceğin Bilişim Dünyası",
    unitBadge: "Yapay Zekâ & AI",
    unitTheme: "tema-6",
    title: "Yapay Zekâ ve Makine Öğrenmesi: Bilgisayara Nesneleri Öğretme",
    subtitle: "Google Teachable Machine ile Görüntü Tanıma, Veri Toplama, Model Eğitimi ve Sıfır Atık",
    outcomeCode: "BTY.3.6.3 (Makine Öğrenmesi & Sıfır Atık)",
    targetSkill: "Yapay Zekânın Öğrenme Sürecini Anlama, Veri Toplama, Model Eğitme ve Test Etme",
    curiosityQuestion: "Bilgisayara hiç kod yazmadan sadece kameradan fotoğraflar göstererek elma ile muzu ayırt etmesini nasıl öğretebiliriz?",
    roadmap: [
      { title: "Yapay Zekâ (AI) Nedir?", desc: "Bilgisayarların insan gibi öğrenme, görme ve karar verme yeteneği." },
      { title: "1. Adım: Veri Toplama", desc: "Kameradan nesnelerin onlarca farklı açıdan fotoğrafını kaydetme." },
      { title: "2. Adım: Model Eğitimi", desc: "Bilgisayarın fotoğraflardaki ortak özellikleri keşfetmesi." },
      { title: "3. Adım: Canlı Test", desc: "Sıfır atık kutusu için plastik ve kağıdı kameradan ayırt etme." }
    ],
    section1: {
      title: "Bilgisayarlar Nasıl Öğrenir? Makine Öğrenmesi",
      subtitle: "Kural yazmak yerine bol bol örnek göstererek bilgisayara görmeyi öğretiyoruz!",
      layout: "split-visual",
      card: {
        title: "Teachable Machine'in 3 Aşaması",
        icon: "🧠",
        desc: "Yapay zekâ modelinin gelişim süreci:",
        items: [
          { bold: "1. Veri (Data) Toplama", text: "Örneğin kameraya 40 plastik şişe, 40 tane de kağıt fotoğrafı gösterilir." },
          { bold: "2. Modeli Eğit (Train)", text: "Yapay zekâ renkleri, şekilleri ve kenarları analiz ederek iki sınıfı öğrenir." },
          { bold: "3. Canlı Tahmin (Test)", text: "Kameraya yeni bir defter tutulduğunda %98 eminlikle 'Kağıt' cevabını verir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- Adım 1: Veri Topla -->
        <g transform="translate(35, 45)">
          <rect x="0" y="0" width="95" height="135" rx="8" fill="#ffffff"/>
          <rect x="0" y="0" width="95" height="24" rx="8" fill="#6366f1"/>
          <text x="12" y="16" fill="#ffffff" font-size="9" font-weight="bold">1. VERİ TOPLA</text>
          <rect x="10" y="32" width="75" height="42" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="16" y="48" fill="#ef4444" font-size="9" font-weight="bold">Plastik (40)</text>
          <rect x="10" y="82" width="75" height="42" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="16" y="98" fill="#3b82f6" font-size="9" font-weight="bold">Kağıt (40)</text>
        </g>
        <!-- Ok 1 -->
        <path d="M 138 112 H 165" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="3"/>
        <!-- Adım 2: Eğit -->
        <g transform="translate(172, 60)">
          <rect x="0" y="0" width="85" height="105" rx="8" fill="#ffffff"/>
          <rect x="0" y="0" width="85" height="24" rx="8" fill="#8b5cf6"/>
          <text x="16" y="16" fill="#ffffff" font-size="9" font-weight="bold">2. EĞİT</text>
          <circle cx="42" cy="65" r="22" fill="#ede9fe" stroke="#a78bfa" stroke-width="2"/>
          <circle cx="34" cy="58" r="4" fill="#7c3aed"/>
          <circle cx="50" cy="58" r="4" fill="#7c3aed"/>
          <circle cx="42" cy="74" r="4" fill="#ec4899"/>
        </g>
        <!-- Ok 2 -->
        <path d="M 265 112 H 292" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="3"/>
        <!-- Adım 3: Test -->
        <g transform="translate(298, 45)">
          <rect x="0" y="0" width="95" height="135" rx="8" fill="#ffffff"/>
          <rect x="0" y="0" width="95" height="24" rx="8" fill="#10b981"/>
          <text x="24" y="16" fill="#ffffff" font-size="9" font-weight="bold">3. TEST</text>
          <rect x="10" y="35" width="75" height="45" rx="4" fill="#f0fdf4"/>
          <text x="14" y="52" fill="#15803d" font-size="8" font-weight="bold">Kameradaki Şişe:</text>
          <text x="14" y="70" fill="#047857" font-size="11" font-weight="bold">%98 Plastik!</text>
          <rect x="10" y="90" width="75" height="8" rx="2" fill="#e2e8f0"/>
          <rect x="10" y="90" width="73" height="8" rx="2" fill="#22c55e"/>
        </g>
      </svg>`,
      caption: "Veri topla -> Modeli eğit -> Canlı test et yapay zekâ iş akışı"
    },
    section2: {
      title: "Sıfır Atık İçin Akıllı Ayrıştırma",
      subtitle: "Yapay zekâ çevre kirliliğini önlemede nasıl büyük bir kahramana dönüşür?",
      cards: [
        {
          title: "Görüntü İşleme",
          icon: "📷",
          desc: "Kamera ile nesne tanıma:",
          items: [
            { bold: "Farklı Açılar", text: "Nesneyi çevirerek, uzaktan ve yakından tanıtmak doğruluğu artırır." },
            { bold: "Işık Değişimi", text: "Hem aydınlık hem loş ışıkta veri toplamak modelin yanılmasını önler." }
          ]
        },
        {
          title: "Sıfır Atık Kutuları",
          icon: "♻️",
          desc: "Akıllı geri dönüşüm:",
          items: [
            { bold: "Otomatik Kapak", text: "Plastiği tanıyınca mavi kapak, kağıdı tanıyınca sarı kapak açılır." },
            { bold: "Doğa Koruma", text: "Çöplerin birbirine karışmasını engelleyerek doğayı koruruz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Teachable Machine ile 'Akıllı Atık Sınıflandırıcı'",
      subtitle: "Google Teachable Machine ile 'Kalem' ve 'Silgi' nesnelerini ayırt eden AI modeli eğitin.",
      steps: [
        { title: "Siteyi Açın", desc: "Tarayıcıda teachablemachine.withgoogle.com adresine girip 'Image Project' başlatın." },
        { title: "Sınıf 1 ve 2", desc: "Class 1 adını 'Kalem', Class 2 adını 'Silgi/Defter' olarak adlandırın." },
        { title: "Fotoğraf Çekin", desc: "Webcam butonuna basılı tutarak kaleminizi kameraya farklı açılardan 30 kare tanıtın; aynısını silgiye yapın." },
        { title: "Eğit ve Dene", desc: "'Train Model' butonuna basarak eğitin ve ardından elinize kalemi alıp ekrandaki tahmin yüzdesini inceleyin." }
      ],
      time: "25 Dakika",
      target: "Kameraya gösterilen nesneyi en az %85 doğrulukla tanıyan yapay zekâ modeli"
    },
    safetyAndEthics: [
      "Veri Çeşitliliği (Önyargı Önleme): Sadece sarı kalem gösterirsek model mavi kalemi tanıyamaz; zengin örnekler sunmalıyız.",
      "Kamera Gizliliği: Kamera görüntüleri internete sızmadan tarayıcımız içinde güvenle işlenir."
    ],
    quiz: {
      question: "Bir yapay zekâ modelinin elma ile portakalı birbiriyle karıştırmadan çok doğru tanıması için ne yapılmalıdır?",
      options: [
        "A) Bilgisayarın sesini sonuna kadar açmak",
        "B) Farklı ışık ve açılardan çok sayıda elma ve portakal fotoğrafı göstererek eğitmek",
        "C) Bilgisayarı kapatıp beklemek",
        "D) Klavyeden rastgele tuşlara basmak"
      ],
      correctAnswer: 1,
      explanation: "Makine öğrenmesinde modelin doğruluğu verinin zenginliğine bağlıdır. Farklı ışıklarda ve açılarda ne kadar çok örnek gösterilirse yapay zekâ o kadar doğru öğrenir."
    },
    summary: "Bu derste yapay zekânın ve makine öğrenmesinin temel mantığını kavradık; Google Teachable Machine aracıyla kendi görüntü tanıma modelimizi eğiterek sıfır atık bilincine sahip akıllı bir sınıflandırıcı yaptık.",
    homework: "Evinizde el hareketlerinizle (örneğin El Açık vs Yumruk) çalışan bir yapay zekâ modeli tasarlayın.",
    nextWeekPreview: "2. Dönem 2. Değerlendirme: Yıl sonu büyük bilişim sınavı ve kazanım ölçümü!"
  },

  // 39. HAFTA
  {
    week: 39,
    date: "7 - 13 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Robotik, Yapay Zekâ ve Geleceğin Bilişim Dünyası",
    unitBadge: "2. Dönem Sınav",
    unitTheme: "tema-6",
    title: "2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilişim Sınavı",
    subtitle: "Scratch Blokları, Algoritmalar, Robotik, Sensörler ve Yapay Zekâ Yıl Sonu Kazanım Ölçümü",
    outcomeCode: "BTY.3.6.4 (Yıl Sonu Bilişim Ölçme & Değerlendirme)",
    targetSkill: "Tüm Yılın Kodlama ve Algoritma Kazanımlarını Test Etme ve Eksikleri Giderme",
    curiosityQuestion: "1 yıl boyunca biriktirdiğimiz bilişim bilgileriyle bir sınav parkurundaki tüm kod bloklarını hatasız dizebilir miyiz?",
    roadmap: [
      { title: "Blok Renkleri", desc: "Hareket (Mavi), Görünüm (Mor), Ses (Pembe), Olaylar (Sarı), Kontrol (Turuncu), Algılama (Açık Mavi), Değişken (Koyu Turuncu)." },
      { title: "Döngü ve Koşul", desc: "'Sürekli tekrarla' ve 'Eğer... ise... değilse' yapılarının farkları." },
      { title: "Robotik & Sensör", desc: "Girdi-işlem-çıktı mantığı ve sensörlerin kullanım alanları." },
      { title: "Yapay Zekâ", desc: "Veri toplama, model eğitme ve tahmin adımları." }
    ],
    section1: {
      title: "2. Dönem Kodlama ve Teknoloji Özeti",
      subtitle: "Kağıt üzerindeki algoritmalardan Scratch'in interaktif oyun dünyasına uzanan büyük başarı!",
      layout: "split-visual",
      card: {
        title: "Bilişim Şampiyonunun 3 Temel Gücü",
        icon: "📝",
        desc: "Sınavda karşılaşacağımız temel başlıklar:",
        items: [
          { bold: "1. Blok Renkleri ve Görevleri", text: "Hangi bloğun ne işe yaradığını ezberlemeden mantığıyla bilme." },
          { bold: "2. Hata Ayıklama (Debugging)", text: "Çalışmayan veya yanlış çalışan kodlardaki hataları bulup düzeltme." },
          { bold: "3. Mantıksal Sıralama", text: "Önce başlangıç konumuna git, sonra döngüyü başlat, en son puanı artır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
        <!-- Sınav Kağıdı -->
        <g transform="translate(45, 35)">
          <rect x="0" y="0" width="200" height="175" rx="8" fill="#ffffff"/>
          <rect x="15" y="15" width="120" height="10" rx="2" fill="#6366f1"/>
          <text x="15" y="45" fill="#1e293b" font-size="9" font-weight="bold">S1: Hareket bloğu hangi renktir?</text>
          <circle cx="20" cy="60" r="5" fill="#2563eb"/>
          <text x="32" y="63" fill="#2563eb" font-size="8" font-weight="bold">Mavi (Hareket)</text>
          <text x="15" y="85" fill="#1e293b" font-size="9" font-weight="bold">S2: Puan saymak için ne açılır?</text>
          <circle cx="20" cy="100" r="5" fill="#f59e0b"/>
          <text x="32" y="103" fill="#d97706" font-size="8" font-weight="bold">Değişken (Skor)</text>
          <text x="15" y="125" fill="#1e293b" font-size="9" font-weight="bold">S3: Duvara çarpma hissi?</text>
          <circle cx="20" cy="140" r="5" fill="#0284c7"/>
          <text x="32" y="143" fill="#0284c7" font-size="8" font-weight="bold">Algılama (Temas)</text>
          <!-- Puan Damgası -->
          <circle cx="165" cy="140" r="22" fill="none" stroke="#22c55e" stroke-width="3"/>
          <text x="150" y="145" fill="#16a34a" font-size="14" font-weight="bold">100</text>
        </g>
        <!-- Başarı Kupası -->
        <g transform="translate(295, 75)">
          <polygon points="10,0 60,0 52,50 18,50" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
          <path d="M 10 10 Q -10 20 12 35" fill="none" stroke="#facc15" stroke-width="3"/>
          <path d="M 60 10 Q 80 20 58 35" fill="none" stroke="#facc15" stroke-width="3"/>
          <rect x="28" y="50" width="14" height="20" fill="#ca8a04"/>
          <rect x="15" y="70" width="40" height="15" rx="3" fill="#78350f"/>
          <text x="16" y="-10" fill="#38bdf8" font-size="12" font-weight="bold">TEBRİKLER!</text>
        </g>
      </svg>`,
      caption: "Yıl sonu bilişim sınav kağıdı ve başarı değerlendirmesi"
    },
    section2: {
      title: "Sınav Uygulama ve Değerlendirme Yönergesi",
      subtitle: "Teorik soruların yanında bilgisayar başında canlı kod bloklama.",
      cards: [
        {
          title: "Soru Dağılımı",
          icon: "📊",
          desc: "Kazanım ölçümü:",
          items: [
            { bold: "Test Soruları", text: "10 adet çoktan seçmeli kavram sorusu." },
            { bold: "Kod Parkuru", text: "Scratch arayüzünde verilen mini senaryoyu çalışan bloklara dökme." }
          ]
        },
        {
          title: "Başarı Kriterleri",
          icon: "🎯",
          desc: "Nelere dikkat edilecek:",
          items: [
            { bold: "Zaman Yönetimi", text: "40 dakikalık süreyi acele etmeden planlı kullanma." },
            { bold: "Kod Temizliği", text: "Gereksiz blokları silip sahneyi derli toplu bırakma." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Yıl Sonu Karma Kodlama Parkuru",
      subtitle: "Verilen görevi (Yeşil bayrakla başla, 10 adım git, duvara değerse ses çal ve skoru artır) inşa edin.",
      steps: [
        { title: "Scratch'i Açın", desc: "Scratch 3.0 uygulamasında temiz bir proje başlatın." },
        { title: "Olay ve Hareket", desc: "'Yeşil bayrak tıklandığında' altına 'sürekli tekrarla: 10 adım git, kenara geldiyse sek' bloklarını koyun." },
        { title: "Koşul ve Değişken", desc: "'Skor' değişkeni açın. 'Eğer kenara değdi mi ise' -> 'ses çal' ve 'Skor'u 1 artır' kodunu ekleyin." },
        { title: "Test ve Gösterim", desc: "Yeşil bayrağa basarak projenizi öğretmeninize başarıyla sunun." }
      ],
      time: "25 Dakika",
      target: "Tüm blok kategorilerini içeren mini parkuru hatasız tamamlamak"
    },
    safetyAndEthics: [
      "Akademik Dürüstlük: Sınavlarda kendi bilgimiz ve emeğimizle başarıya ulaşmak en büyük erdemdir.",
      "Öğrenme Fırsatı: Yanlış yaptığımız sorular eksiklerimizi tamamlamak için en güzel kılavuzdur."
    ],
    quiz: {
      question: "Scratch'te bir kuklanın bir koşula bağlı olarak puan kazanması için hangi iki blok kategorisi birlikte kullanılır?",
      options: [
        "A) Yalnızca Kalem ve Müzik",
        "B) Kontrol (Eğer... ise) ve Değişkenler (Skor'u 1 değiştir)",
        "C) Yalnızca Dekor ve Sahne",
        "D) Gizlen ve Göster"
      ],
      correctAnswer: 1,
      explanation: "Puan kazanma koşulunu denetlemek için Kontrol kategorisindeki 'Eğer... ise' bloğu; kazanılan puanı hafızada tutup artırmak için ise Değişkenler kategorisindeki 'Skor'u 1 değiştir' bloğu birlikte kullanılır."
    },
    summary: "2. Dönem 2. Değerlendirme sınavıyla 3. sınıf bilişim müfredatının tüm kazanımlarını başarıyla pekiştirdik; algoritmik düşünme, blok kodlama, robotik ve yapay zekâ yetkinliklerimizi kanıtladık.",
    homework: "Yıl boyunca en çok sevdiğiniz Scratch projenizi belirleyin ve haftaya sınıf arkadaşlarınıza sunmak için hazırlık yapın.",
    nextWeekPreview: "Dijital Portfolyo Sunumu: 'Benim Kodladığım Oyun' ve akıllı tahtada sahne sunumu!"
  },

  // 40. HAFTA
  {
    week: 40,
    date: "14 - 20 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Robotik, Yapay Zekâ ve Geleceğin Bilişim Dünyası",
    unitBadge: "Portfolyo Sunumu",
    unitTheme: "tema-6",
    title: "Dijital Portfolyo Sunumu: 'Benim Kodladığım Oyun' ve Sunum Becerisi",
    subtitle: "Yıl Boyunca Geliştirilen Scratch Projelerini Akıllı Tahtada Arkadaşlarına Sunma ve Akran Değerlendirmesi",
    outcomeCode: "BTY.3.6.5 (Dijital Portfolyo & Sunum Becerisi)",
    targetSkill: "Kendi Kodladığı Projeyi Topluluk Önünde Sunma, İletişim Becerisi ve Yapıcı Akran Değerlendirmesi",
    curiosityQuestion: "Dünyanın en iyi yazılımcıları yeni bir oyun veya telefon çıkardıklarında sahnede insanlara bunu nasıl heyecanla anlatır?",
    roadmap: [
      { title: "Dijital Portfolyo", desc: "Yıl boyunca ürettiğimiz en iyi kodlama projelerimizin koleksiyonu." },
      { title: "Sunumun 4 Adımı", desc: "Giriş (Kendini tanıt), Hikaye (Oyunun amacı), Kodlar (Algoritma), Canlı Demo." },
      { title: "Sahne Duruşu", desc: "Göz teması kurma, dik durma ve net bir ses tonuyla akıllı tahtayı kullanma." },
      { title: "Sandviç Metodu", desc: "Arkadaşımızın oyununu överek ve nazikçe geliştirme önerisi vererek değerlendirme." }
    ],
    section1: {
      title: "Bir Yazılımcı Projesini Nasıl Sunar?",
      subtitle: "Harika bir oyun kodlamak kadar, onu insanlara anlatabilmek de büyük bir yetenektir!",
      layout: "split-visual",
      card: {
        title: "Başarılı Bir Sunumun 4 Parçası",
        icon: "🎤",
        desc: "Akıllı tahta önünde sunum yaparken:",
        items: [
          { bold: "1. Merhaba & Tanıtım", text: "Adını, soyadını ve kodladığın oyunun ismini söyleyerek başla." },
          { bold: "2. Oyunun Amacı", text: "Hangi tuşlarla oynandığını ve oyuncunun ne yapması gerektiğini anlat." },
          { bold: "3. En Gurur Duyduğun Blok", text: "'En çok şu algoritmayı kurarken zorlandım ve böyle çözdüm' de." },
          { bold: "4. Canlı Gösterim", text: "Oyunu 1 dakika oynat ve sınıftan bir arkadaşını tahtaya davet et." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Fatih Akıllı Tahta (Arka Planda) -->
        <g transform="translate(130, 35)">
          <rect x="0" y="0" width="250" height="145" rx="8" fill="#1e293b" stroke="#cbd5e1" stroke-width="4"/>
          <rect x="8" y="8" width="234" height="129" rx="3" fill="#f8fafc"/>
          <rect x="8" y="8" width="234" height="18" fill="#4f46e5"/>
          <text x="15" y="21" fill="#ffffff" font-size="8" font-weight="bold">BENİM KODLADIĞIM OYUN: UZAY MACERASI</text>
          <rect x="15" y="35" width="90" height="70" rx="4" fill="#090d16"/>
          <circle cx="60" cy="70" r="12" fill="#facc15"/>
          <!-- Kod blokları temsili -->
          <rect x="115" y="35" width="115" height="18" rx="3" fill="#eab308"/>
          <rect x="115" y="58" width="95" height="18" rx="3" fill="#2563eb"/>
          <rect x="115" y="81" width="105" height="18" rx="3" fill="#0284c7"/>
        </g>
        <!-- Sunum Yapan Öğrenci (Önde Solda) -->
        <g transform="translate(80, 130)">
          <circle cx="0" cy="-35" r="15" fill="#fed7aa"/>
          <rect x="-10" y="-18" width="20" height="38" rx="4" fill="#f43f5e"/>
          <line x1="10" y1="-8" x2="45" y2="-35" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/>
          <rect x="-8" y="20" width="7" height="55" fill="#1e293b"/>
          <rect x="1" y="20" width="7" height="55" fill="#1e293b"/>
        </g>
        <!-- Alkışlayan Sınıf Silüet -->
        <circle cx="50" cy="225" r="14" fill="#475569"/>
        <circle cx="120" cy="235" r="14" fill="#475569"/>
        <circle cx="340" cy="225" r="14" fill="#475569"/>
        <circle cx="390" cy="230" r="14" fill="#475569"/>
      </svg>`,
      caption: "Akıllı tahtada kendi Scratch oyununu arkadaşlarına sunan öğrenci"
    },
    section2: {
      title: "Akran Değerlendirmesi: Sandviç Metodu",
      subtitle: "Kırıcı olmadan, arkadaşımıza projesini geliştirmesi için yapıcı geri bildirim veriyoruz.",
      cards: [
        {
          title: "Sandviç Katmanları",
          icon: "🥪",
          desc: "3 Adımda geri bildirim:",
          items: [
            { bold: "1. Üst Ekmek (Övgü)", text: "'Karakterinin renkleri ve seçtiğin müzik gerçekten harikaydı!'" },
            { bold: "2. İç Malzeme (Tavsiye)", text: "'Bence top biraz daha yavaş giderse oyun oynamak daha kolay olabilir.'" },
            { bold: "3. Alt Ekmek (Teşekkür)", text: "'Bize bu güzel oyunu sunduğun için çok teşekkürler!'" }
          ]
        },
        {
          title: "Dinleme Adabı",
          icon: "👂",
          desc: "Sınıf içi saygı:",
          items: [
            { bold: "Söz Kesmeme", text: "Arkadaşımız konuşurken dikkatle dinleriz." },
            { bold: "Coşkulu Alkış", text: "Sunum bitince tüm sınıf arkadaşımızı alkışlarız." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: Akıllı Tahtada 'Benim Oyunum' Sahne Sunumu",
      subtitle: "Seçtiğiniz projeyi Fatih Akıllı Tahta'da açıp sınıf arkadaşlarınıza 3 dakikalık canlı sunum yapınız.",
      steps: [
        { title: "Projeyi Açın", desc: "Scratch projenizi akıllı tahta ekranında tam ekran yapın." },
        { title: "Selamlama", desc: "Tahtanın yanında durarak gülümseyip arkadaşlarınızı selamlayın." },
        { title: "Hikaye ve Kodlar", desc: "Oyunun mantığını ve en sevdiğiniz kod bloğunu açıklayın." },
        { title: "Arkadaşını Oynat", desc: "Sınıftan bir arkadaşınızı tahtaya çağırıp oyunu test ettirin." }
      ],
      time: "25 Dakika",
      target: "Özgüvenli beden dili ve net ses tonuyla 3 dakikalık sahne sunumu"
    },
    safetyAndEthics: [
      "Saygılı Dinleme: Bir arkadaşımız sahnede sunum yaparken yanımızdakiyle konuşmamalı ve tüm dikkatimizi ona vermeliyiz.",
      "Yaratıcılığa Değer Verme: Her arkadaşımızın projesi kendi hayal dünyasının eşsiz bir eseridir."
    ],
    quiz: {
      question: "Bir arkadaşımızın kodladığı oyuna yapıcı geri bildirim verirken kullanılan 'Sandviç Metodu'nun ilk adımı nedir?",
      options: [
        "A) Oyunun tüm eksiklerini söyleyip kapatmak",
        "B) Önce projede en çok beğenilen güzel yönü söyleyip övmek",
        "C) Oyunu hiç dinlememek",
        "D) Kendi oyununun daha iyi olduğunu iddia etmek"
      ],
      correctAnswer: 1,
      explanation: "Sandviç metodu daima pozitif bir övgüyle başlar (beğenilen yön söylenir), ardından nazikçe geliştirme tavsiyesi verilir ve teşekkürle tamamlanır."
    },
    summary: "Bu hafta dijital portfolyomuzu açarak en gurur duyduğumuz Scratch projemizi akıllı tahtada sunduk; sahne duruşu, etkili hitabet ve yapıcı akran değerlendirmesi becerilerini kazandık.",
    homework: "Gelecek hafta yapılacak Bilişim Şenliği mezuniyet töreni için ailenizle birlikte 1 yıllık başarılarınızı kutlayın.",
    nextWeekPreview: "Yıl Sonu Bilişim Şenliği: Geleceğin yazılımcıları mezuniyeti ve 4. sınıfa büyük geçiş!"
  },

  // 41. HAFTA
  {
    week: 41,
    date: "21 - 27 Haziran",
    hours: "2 Ders Saati",
    unit: "6. Tema: Robotik, Yapay Zekâ ve Geleceğin Bilişim Dünyası",
    unitBadge: "Bilişim Mezuniyeti",
    unitTheme: "tema-6",
    title: "Yıl Sonu Bilişim Şenliği: Geleceğin Yazılımcıları Mezuniyeti",
    subtitle: "3. Sınıf Bilişim Başarı Sertifikası, Yıllık Kazanım Değerlendirmesi ve 4. Sınıf Vizyonu",
    outcomeCode: "BTY.3.6.6 (Yıl Sonu Bilişim Şenliği & Mezuniyet)",
    targetSkill: "Dijital Üretici Kimliğini İçselleştirme, Yıllık Başarıyı Kutlama ve Gelecek Vizyonu",
    curiosityQuestion: "3. sınıfa başlarken sadece bilgisayar kullanan bir çocuktunuz; şimdi kendi oyunlarını kodlayan bir 'Yazılımcı' olarak dünyayı nasıl değiştireceksiniz?",
    roadmap: [
      { title: "Neler Başardık?", desc: "Donanım, klavye, Word mektupları, algoritmalar, Scratch oyunları, robotik ve yapay zekâ." },
      { title: "Dijital Üretici Olmak", desc: "Teknolojiyi tüketen değil, faydalı yazılımlar üreten birey olma gururu." },
      { title: "Başarı Sertifikası", desc: "MEB Maarif Modeli 3. sınıf bilişim mezuniyet belgesini alma." },
      { title: "4. Sınıf Vizyonu", desc: "micro:bit, Arduino, çok seviyeli oyunlar ve siber güvenlik maceralarına hazırlık." }
    ],
    section1: {
      title: "Bir Yılın Bilişim Yolculuğu: Neler Başardık?",
      subtitle: "Eylül ayında çıktığımız bu heyecan dolu yolculukta artık birer dijital üreticisiniz!",
      layout: "split-visual",
      card: {
        title: "3. Sınıfta Kazandığımız 6 Süper Güç",
        icon: "🏆",
        desc: "41 haftalık maratonun özeti:",
        items: [
          { bold: "1. Donanım & Sistem", text: "Giriş-çıkış birimlerini ve dosya klasör hiyerarşisini öğrendik." },
          { bold: "2. On Parmak & Word", text: "F/J ev sırasını, kısayolları ve mektup/afiş dizgisini başardık." },
          { bold: "3. Algoritma & Akış", text: "Problemleri parçalayıp baklava dilimi karar yapılarıyla modelledik." },
          { bold: "4. Scratch Kodlama", text: "Hareket, döngü, algılama ve değişkenlerle kendi oyunlarımızı yazdık." },
          { bold: "5. Robotik & Sensör", text: "Akıllı bastonları ve çizgi izleyen otonom robotları keşfettik." },
          { bold: "6. Yapay Zekâ", text: "Google Teachable Machine ile bilgisayara nesneleri öğrettik." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="festGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4338ca"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>
        <rect x="15" y="15" width="390" height="220" rx="16" fill="url(#festGrad2)" stroke="#facc15" stroke-width="3"/>
        <!-- Konfetiler -->
        <circle cx="50" cy="50" r="3" fill="#f43f5e"/>
        <circle cx="80" cy="35" r="2.5" fill="#38bdf8"/>
        <circle cx="360" cy="45" r="3" fill="#22c55e"/>
        <circle cx="380" cy="70" r="2.5" fill="#facc15"/>
        <!-- Sertifika Belgesi Kartı -->
        <g transform="translate(90, 40)">
          <rect x="0" y="0" width="240" height="165" rx="10" fill="#ffffff" stroke="#facc15" stroke-width="4"/>
          <circle cx="120" cy="140" r="18" fill="#facc15"/>
          <text x="110" y="146" fill="#713f12" font-size="14">★</text>
          <text x="50" y="28" fill="#4338ca" font-size="11" font-weight="900">BAŞARI SERTİFİKASI</text>
          <text x="65" y="42" fill="#64748b" font-size="8">T.C. MİLLÎ EĞİTİM BAKANLIĞI</text>
          <line x1="25" y1="50" x2="215" y2="50" stroke="#e2e8f0" stroke-width="1.5"/>
          <text x="30" y="68" fill="#1e293b" font-size="9">Bu belge, 2026-2027 Eğitim Yılında</text>
          <text x="30" y="82" fill="#0f172a" font-size="10" font-weight="bold">3. Sınıf Bilişim ve Kodlama</text>
          <text x="30" y="96" fill="#1e293b" font-size="9">eğitimini başarıyla tamamlayan</text>
          <text x="50" y="118" fill="#2563eb" font-size="11" font-weight="900">GELECEĞİN YAZILIMCISINA</text>
        </g>
        <!-- Mezuniyet Kepi -->
        <g transform="translate(50, 140)">
          <polygon points="0,0 25,-10 50,0 25,10" fill="#1e1b4b" stroke="#facc15" stroke-width="1.5"/>
          <rect x="18" y="7" width="14" height="10" fill="#1e1b4b"/>
          <line x1="25" y1="0" x2="45" y2="18" stroke="#facc15" stroke-width="1.5"/>
          <circle cx="45" cy="18" r="2" fill="#facc15"/>
        </g>
      </svg>`,
      caption: "3. Sınıf Bilişim Teknolojileri ve Kodlama Mezuniyet Başarı Sertifikası"
    },
    section2: {
      title: "4. Sınıfta Bizi Neler Bekliyor?",
      subtitle: "Gelecek yıl çok daha büyük ve heyecan verici bilişim maceralarına atılacağız!",
      cards: [
        {
          title: "Fiziksel Kodlama",
          icon: "⚡",
          desc: "micro:bit ve Arduino:",
          items: [
            { bold: "Işık ve Ses Devreleri", text: "Yazdığımız kodlarla gerçek LED lambaları ve motorları çalıştıracağız." },
            { bold: "Kendi Kumandamız", text: "Fiziksel butonlarla Scratch oyunlarımızı yöneteceğiz." }
          ]
        },
        {
          title: "İleri Düzey Oyunlar",
          icon: "🎮",
          desc: "Gelişmiş yazılım dünyası:",
          items: [
            { bold: "Çok Seviyeli Oyunlar", text: "Can barları, zaman sayaçları ve yapay zekâlı canavarlar kodlayacağız." },
            { bold: "3 Boyutlu Tasarım", text: "Tinkercad ile kendi 3D modellerimizi tasarlayıp yazıcıdan çıkaracağız." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama Atölyesi: 3. Sınıf Bilişim Şenliği ve Sertifika Töreni",
      subtitle: "Scratch sahnesine tüm sınıfın avatarlarını koyup konfeti kutlaması başlatınız.",
      steps: [
        { title: "Parti Dekoru", desc: "Sahne kütüphanesinden 'Party' dekorunu seçiniz." },
        { title: "Kendi Avatarın", desc: "Kendinizi temsil eden bir kukla seçip sahneye yerleştirin." },
        { title: "Kutlama Mesajı", desc: "'Yeşil bayrak tıklandığında' -> '3. Sınıf Bilişim Şampiyonuyum! de 3 saniye' kodunu verin." },
        { title: "Sertifika", desc: "Öğretmeninizden dijital başarı sertifikanızı alarak 4. sınıfa gururla merhaba deyin!" }
      ],
      time: "25 Dakika",
      target: "Yıl boyu üretilen projeleri kutlayıp başarı belgesini gururla almak"
    },
    safetyAndEthics: [
      "Yaz Tatilinde Sağlıklı Denge: Yaz tatilinde yüzmeli, spor yapmalı, kitap okumalı; bilgisayarı ise yeni şeyler üretmek için bilinçli kullanmalıyız.",
      "Teknolojiyi İyilik İçin Kullanmak: Kazandığınız kodlama yeteneğini daima insanlığa ve doğaya faydalı ürünler yapmak için kullanın."
    ],
    quiz: {
      question: "3. Sınıf Bilişim Teknolojileri ve Yazılım dersinin en büyük hedefi aşağıdakilerden hangisidir?",
      options: [
        "A) Bilgisayarda sabahtan akşama kadar çizgi film izlemek",
        "B) Teknolojiyi sadece tüketen değil, kod yazarak faydalı ürünler üreten 'Dijital Üretici' olmak",
        "C) Sürekli yeni tablet veya telefon satın aldırmak",
        "D) Klavye tuşlarını rastgele sökmek"
      ],
      correctAnswer: 1,
      explanation: "Bilişim dersinin nihai hedefi; öğrencilerimizin ekran karşısında pasif bir tüketici olmak yerine problem çözen, algoritma kuran ve kod yazan aktif 'Dijital Üreticiler' olmasını sağlamaktır."
    },
    summary: "Tebrikler Sevgili 3. Sınıf Öğrencileri! 41 haftalık bilişim ve kodlama maratonunu üstün başarıyla tamamladınız. Artık birer dijital üreticisiniz. 4. sınıfta yepyeni robotik ve kodlama maceralarında görüşmek üzere!",
    homework: "Yaz tatilinde Scratch üzerinde hayalinizdeki bir yaz oyununu kodlayın ve 4. sınıfa getirip arkadaşlarınıza gösterin.",
    nextWeekPreview: "4. Sınıf Bilişim Teknolojileri: Fiziksel programlama, mikrodenetleyiciler ve 3D tasarım dünyası!"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULUM_TERM_2_PART2_GRADE3 };
}
