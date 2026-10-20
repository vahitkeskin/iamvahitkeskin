/**
 * 1. Sınıf Serbest Etkinlikler - 2. Dönem 2. Bölüm (Hafta 32 - 41)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART2_GRADE1 = [
  // 32. HAFTA
  {
    week: 32,
    date: "19 - 25 Nisan",
    hours: "4 Ders Saati",
    unit: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı",
    unitBadge: "32. Tema: 23 Nisan Bayramı",
    unitTheme: "tema-5",
    title: "32. Hafta: 23 Nisan Çocuk Bayramı, Bahar Gezisi ve Ront",
    subtitle: "Dünyanın İlk ve Tek Çocuk Bayramı, Bahar Gezisi, Oyun ve Şarkılar",
    outcomeCode: "SE.1.32 (Milli Bayram & Çocuk Hakları)",
    targetSkill: "23 Nisan'ın Önemini Kavrama, Atatürk'ün Çocuklara Güvenini Anlama, Toplu Şarkı ve Ront",
    curiosityQuestion: "Atatürk, Türkiye Büyük Millet Meclisi'nin açıldığı 23 Nisan gününü dünyada neden yalnızca çocuklara bayram olarak armağan etmiştir?",
    roadmap: [
      { title: "23 Nisan Nedir?", desc: "TBMM'nin açılışı ve Atatürk'ün çocuklara olan sonsuz sevgisinin bayramı." },
      { title: "Bahar Bahçe Gezisi", desc: "Okul bahçesine çıkıp yeşeren doğayı ve bayram coşkusunu teneffüs etme." },
      { title: "23 Nisan Ront Dansı", desc: "Kırmızı beyaz bayraklarla ve kurdelelerle müzik eşliğinde sahne provası." },
      { title: "Bayram Şarkıları Korosu", desc: "'Sanki Her Tarafta Var Bir Düğün' şarkısını gururla söyleme." }
    ],
    section1: {
      title: "23 Nisan: Dünyanın Çocuklarına Atatürk Armağanı",
      subtitle: "Geleceğimizin güvencesi çocuklar, bugün neşeyle el ele bayram kutlar.",
      layout: "split-visual",
      card: {
        title: "23 Nisan'ın 3 Büyük Mesajı",
        icon: "🇹🇷🎈",
        desc: "Atatürk'ten çocuklara:",
        items: [
          { bold: "1. Egemenlik Milletindir", text: "23 Nisan 1920'de Ankara'da Meclis açıldı ve milletimiz kendi geleceğine kavuştu." },
          { bold: "2. Çocuklar Geleceğin Yıldızlarıdır", text: "Atatürk: 'Küçük hanımlar, küçük beyler! Sizler geleceğin bir gülü, yıldızısınız!' demiştir." },
          { bold: "3. Dünya Çocukları Kardeştir", text: "Dünyanın dört bir yanından gelen çocuklar Türkiye'de barış için el ele tutuşur." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fca5a5" text-anchor="middle">23 NİSAN ULUSAL EGEMENLİK VE ÇOCUK BAYRAMI</text>

        <!-- Bayrak ve Atatürk (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#991b1b" stroke="#fca5a5" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🇹🇷🕊️❤️</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">23 Nisan 1920</text>
        <text x="155" y="175" font-size="9" fill="#fee2e2" text-anchor="middle">TBMM Açıldı</text>
        <text x="155" y="195" font-size="9" fill="#fee2e2" text-anchor="middle">Atatürk Çocuklara Armağan Etti</text>

        <!-- Dünya Çocukları Dansı (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#991b1b" stroke="#facc15" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">👧👦🧒🌍👧</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Dünya Çocukları Kardeştir</text>
        <text x="385" y="175" font-size="9" fill="#fee2e2" text-anchor="middle">Barış, neşe ve kardeşlik</text>
        <text x="385" y="195" font-size="9" fill="#fee2e2" text-anchor="middle">El ele dünya bayramı</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fca5a5" text-anchor="middle">Bugünün küçükleri, yarının büyük yöneticileri ve bilim insanlarıdır!</text>
      </svg>`
    },
    section2: {
      title: "Bahar Gezisi ve Şarkılı Ront Dansı",
      subtitle: "Bayram sevinci baharın tüm renkleriyle sınıflarımıza doluyor.",
      cards: [
        {
          badge: "Bahar",
          title: "Ağaçlardaki Değişim",
          desc: "Okul bahçesinde baharın gelişini inceleme, çiçek kokularını içimize çekme."
        },
        {
          badge: "Ront",
          title: "Kurdele Dansı",
          desc: "Kırmızı ve beyaz kurdeleleri müzik eşliğinde göğe doğru dalgalandırma."
        },
        {
          badge: "Koro",
          title: "23 Nisan Şarkısı",
          desc: "'Bugün 23 Nisan / Neşe doluyor insan' şarkısını tüm kalbimizle seslendirme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Tören Provası: '23 Nisan Sevgi Çemberi'",
      desc: "Her öğrenci eline küçük bir Türk bayrağı alır; koro halinde şarkı söyler ve ront adımlarını uygular.",
      steps: [
        { title: "Bayrak Selamı", desc: "Bayrakları sağ göğsümüzde tutarak saygıyla duruş sergileme." },
        { title: "Koro Söyleyişi", desc: "Şarkıyı gür ve coşkulu bir sesle hep birlikte okuma." },
        { title: "Tebrikleşme", desc: "Arkadaşların 23 Nisan Bayramı'nı kutlayıp el sallama." }
      ],
      criteria: [
        "23 Nisan Bayramı'nın milli ve evrensel anlamını açıklayabilme",
        "Ront hareketlerini sınıf arkadaşlarıyla eş zamanlı ve uyumlu yapabilme",
        "Bayrak sevgisini ve saygısını davranışlarıyla gösterebilme"
      ]
    },
    tips: {
      safetyTitle: "Tören Güvenliği ve Nezaket",
      safetyRules: [
        { bold: "Bayrağı Yere Düşürme", text: "Ay yıldızlı şanlı Türk bayrağımızı asla yere değdirmemeli, özenle ve gururla taşımalıyız." }
      ],
      myths: [
        { wrong: "23 Nisan sadece tatil yapıp evde oturma günüdür.", correct: "Hayır! 23 Nisan milletimizin bağımsızlığını ve Atatürk'ün çocuklara emanet ettiği Cumhuriyeti kutlama günüdür." }
      ]
    },
    quiz: {
      question: "Atatürk, 23 Nisan gününü dünyada kime bayram olarak armağan etmiştir?",
      options: [
        { text: "A) Tüm dünya çocuklarına 👧👦🇹🇷", isCorrect: true },
        { text: "B) Sadece büyüklere", isCorrect: false },
        { text: "C) Sadece futbolculara", isCorrect: false },
        { text: "D) Sadece astronotlara", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Ulu Önder Mustafa Kemal Atatürk, 23 Nisan gününü <strong>tüm dünya çocuklarına</strong> armağan etmiştir!"
    },
    summaryRules: [
      { bold: "Ata'na Teşekkür Et", text: "23 Nisan senin en büyük bayramındır." },
      { bold: "Bayrağını Dalgalandır", text: "Kırmızı beyaz ay yıldız bizim gururumuzdur." },
      { bold: "Haftaya Sınıf Süsleme!", text: "Önümüzdeki hafta sınıfımızı bayraklar ve fenerlerle süsleyecek, drama yapacağız!" }
    ],
    homework: "Evinizin penceresini veya balkonunu 23 Nisan için ay yıldızlı Türk bayraklarıyla süsleyin.",
    nextWeekPreview: "23 Nisan Sınıf Süsleme Şenliği, Drama (Telefon Nezaketi), Harf Bulmacası ve Ront!"
  },

  // 33. HAFTA
  {
    week: 33,
    date: "26 Nisan - 02 Mayıs",
    hours: "4 Ders Saati",
    unit: "Sınıf Süsleme Şenliği ve Telefon Görgü Kuralları",
    unitBadge: "33. Tema: Süsleme & Drama",
    unitTheme: "tema-5",
    title: "33. Hafta: Sınıf Süsleme, Drama, Telefon Nezaketi ve Bulmaca",
    subtitle: "23 Nisan Bayrakları, Kağıt Fenerler, Telefon Konuşması Draması",
    outcomeCode: "SE.1.33 (Milli Bilinç & Rol Oynama)",
    targetSkill: "Sınıf Alanını İş Birliğiyle Süsleme, Telefonda Nezaket Kurallarıyla Konuşma, Bulmaca Çözme",
    curiosityQuestion: "Renkli elişi kâğıtlarını katlayıp minik kesikler attığımızda nasıl büyüleyici bir kâğıt fenere dönüşür?",
    roadmap: [
      { title: "Sınıf Süsleme Atölyesi", desc: "Bayraklar, kâğıt zincirler ve fenerlerle sınıfımızı bayram yerine çevirme." },
      { title: "Telefon Nezaketi Draması", desc: "İki arkadaşın örnek bir telefon konuşması yaparak nezaket sergilemesi." },
      { title: "23 Nisan Harf Bulmacası", desc: "B-A-Y-R-A-M, M-E-C-L-İ-S, A-T-A-T-Ü-R-K kelimelerini karelerde bulma." },
      { title: "Ront ve Dans Çalışması", desc: "Şarkılı oyun figürlerini süslü sınıfın içinde coşkuyla sergileme." }
    ],
    section1: {
      title: "Sınıfımız Bayram Yeri: Renkler ve Fenerler",
      subtitle: "Minik eller birleşince sınıfımız bir çiçek bahçesine dönüşür.",
      layout: "split-visual",
      card: {
        title: "Kâğıttan Fener Yapımı Adımları",
        icon: "🏮✂️",
        desc: "Nasıl yapılır?",
        items: [
          { bold: "1. Kâğıdı Katla", text: "Renkli A4 kâğıdını uzunlamasına ikiye katla." },
          { bold: "2. Kesikler At", text: "Katlanan yerden kenara doğru 1 cm aralıklarla düz kesikler at (uçları kesme!)." },
          { bold: "3. Birleştir ve As", text: "Kâğıdı açıp iki kenarını yuvarlayarak yapıştır; sınıf ipine as." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#f43f5e" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fb7185" text-anchor="middle">SINIF SÜSLEME & TELEFON DRAMASI</text>

        <!-- Sınıf Süsleri ve Fener (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#f43f5e" stroke-width="2"/>
        <!-- Asılı Bayrak İpi -->
        <path d="M 75 105 Q 155 125 235 105" fill="none" stroke="#f43f5e" stroke-width="2"/>
        <polygon points="90,108 105,135 120,108" fill="#ef4444"/>
        <polygon points="135,114 150,141 165,114" fill="#ffffff"/>
        <polygon points="180,111 195,138 210,111" fill="#ef4444"/>
        <text x="155" y="170" font-size="28" text-anchor="middle">🏮✨✂️</text>
        <text x="155" y="200" font-size="10" font-weight="bold" fill="#fbcfe8" text-anchor="middle">Bayram Süslememiz</text>

        <!-- Telefon Draması (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#38bdf8" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">📱👧💬👦📱</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Telefon Nezaketi</text>
        <text x="385" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">'İyi günler, ben Elif'</text>
        <text x="385" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">'Bayramını kutlarım!'</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fb7185" text-anchor="middle">Birlikte süslemek dostluğu, nezaketle konuşmak sevgiyi büyütür!</text>
      </svg>`
    },
    section2: {
      title: "Telefon Nezaketi ve Harf Bulmacaları",
      subtitle: "Kelimeleri doğru seçer, bayram neşesini telefonla da paylaşırız.",
      cards: [
        {
          badge: "Drama",
          title: "Örnek Telefon Konuşması",
          desc: "Sınıf önünde iki öğrencinin telefonla bayram tebriği yapması ve vedalaşması."
        },
        {
          badge: "Bulmaca",
          title: "Bayram Kelimeleri",
          desc: "B-A-Y-R-A-M ve N-E-Ş-E kelimelerini bulup kutuları sarıya boyama."
        },
        {
          badge: "İş Birliği",
          title: "Panoyu Donat",
          desc: "Herkesin hazırladığı bir feneri sınıfa asarak ortak başarıyı kutlama."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Uygulama: 'Sınıfımızı Bayram Evine Çeviriyoruz'",
      desc: "Öğrenciler gruplara ayrılır; bir grup bayrakları ipe dizer, diğer grup kâğıt fenerleri pencerelere asar.",
      steps: [
        { title: "Fener ve Zincir Yap", desc: "Renkli halkaları birbirine geçirerek sınıf zincirleri üretme." },
        { title: "Pano ve Camları Süsle", desc: "Öğretmenin yardımıyla süsleri pencerelere ve panoya asma." },
        { title: "Telefon Canlandırması", desc: "Sınıfın süslü havasında bayram tebrik telefonu draması yapma." }
      ],
      criteria: [
        "Sınıf süsleme çalışmalarına hevesle ve yardımlaşarak katılabilme",
        "Telefonda kendini tanıtma ve nezaket ifadelerini doğru kullanabilme",
        "Makas ve yapıştırıcı kullanımında güvenlik kurallarına tam uyum sağlama"
      ]
    },
    tips: {
      safetyTitle: "Süsleme Güvenliği",
      safetyRules: [
        { bold: "Sıraların Üstüne Çıkma", text: "Süsleri tavana veya yüksek yerlere asarken sıraların ya da sandalyelerin üstüne çıkmamalı, daima öğretmenimizden yardım istemeliyiz." }
      ],
      myths: [
        { wrong: "Sınıfı sadece birkaç kişi süsler, diğerleri kenarda bekler.", correct: "Hayır! Birlikte çalışmak en büyük eğlencedir; herkesin bir fener asması sınıfımızı güzelleştirir." }
      ]
    },
    quiz: {
      question: "Sınıfı 23 Nisan için süslerken yüksek bir yere bayrak asmak istediğimizde ne yapmalıyız?",
      options: [
        { text: "A) Öğretmenimizden veya görevli büyüklerimizden yardım istemeliyiz 👩‍🏫🚩", isCorrect: true },
        { text: "B) Sallanan bir sıranın ucuna tek ayakla çıkmalıyız", isCorrect: false },
        { text: "C) Arkadaşımızın sırtına basıp tırmanmalıyız", isCorrect: false },
        { text: "D) Bayrağı tavana doğru fırlatmalıyız", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Yüksek yerlere süs asarken düşme tehlikesine karşı <strong>mutlaka öğretmenimizden yardım isteriz</strong>!"
    },
    summaryRules: [
      { bold: "Birlikte Üret", text: "Sınıf süsleri hepimizin ortak eseridir." },
      { bold: "Telefonda Nazik Ol", text: "Selam ver, kendini tanıt, teşekkür et." },
      { bold: "Haftaya Bayram Şarkıları!", text: "Önümüzdeki hafta 23 Nisan şarkıları, ront dansı ve neşeli fıkralar var!" }
    ],
    homework: "Evde renkli kâğıttan bir fener yapıp kendi odanızın penceresine asın.",
    nextWeekPreview: "23 Nisan Şarkıları, Ront Çalışması, Nasreddin Hoca Fıkraları ve Görsel Okuma!"
  },

  // 34. HAFTA
  {
    week: 34,
    date: "03 - 09 Mayıs",
    hours: "4 Ders Saati",
    unit: "Bayram Şarkıları, Fıkralar ve Görsel Okuma",
    unitBadge: "34. Tema: Müzik & Mizah",
    unitTheme: "tema-5",
    title: "34. Hafta: 23 Nisan Şarkıları, Ront, Fıkra ve Görsel Okuma",
    subtitle: "Bayram Coşkusunun Devamı, Güldüren Fıkralar ve Resim İnceleme",
    outcomeCode: "SE.1.34 (Müzik & Anlatım)",
    targetSkill: "Bayram Şarkılarını Rontla Bütünleştirme, Fıkra Anlatabilme, Görseller Arası İlişki Kurma",
    curiosityQuestion: "Bir resimde uçurtma uçuran, ip atlayan ve el ele tutuşan çocukları gördüğümüzde oradaki sevinci kelimelerle nasıl anlatırız?",
    roadmap: [
      { title: "23 Nisan Koro Şarkıları", desc: "'Egemenlik Ulusundur' şarkısını coşkuyla koro halinde seslendirme." },
      { title: "Ront Dansı Gösterisi", desc: "Öğrenilen müzikli ront hareketlerini süslü sınıfta sergileme." },
      { title: "Fıkra Köşesi", desc: "Öğrencilerin bildikleri düşündürücü ve eğlenceli fıkraları anlatması." },
      { title: "Bahar Görseli Okuma", desc: "Resimdeki nesneler ve duygular arasında bağ kurarak hikâye oluşturma." }
    ],
    section1: {
      title: "Şarkılarla Dans Eden Bedenler: Ront",
      subtitle: "Müzik kulağımızda, adımlarımız yerinde; bayramı dans ederek kutlarız.",
      layout: "split-visual",
      card: {
        title: "Fıkra Anlatmanın İncelikleri",
        icon: "🎭👳‍♂️",
        desc: "İyi bir fıkra anlatıcısı:",
        items: [
          { bold: "1. Şaşırtıcı Sona Odaklan", text: "Fıkranın en komik yerini sona sakla; anlatırken gülüp fıkrayı bozma." },
          { bold: "2. Sesini Değiştir", text: "Fıkradaki dedeyi, çocuğu veya kuşu sesinle canlandır." },
          { bold: "3. Dinleyicileri Selamla", text: "Fıkra bitince herkes gülerken nazikçe selam verip alkışları kabul et." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#86efac" text-anchor="middle">RONT ÇALIŞMASI VE GÖRSEL OKUMA</text>

        <!-- Ront Dansı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#166534" stroke="#86efac" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🎶💃🕺👧</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fef08a" text-anchor="middle">23 Nisan Rontu</text>
        <text x="155" y="175" font-size="9" fill="#dcfce7" text-anchor="middle">Müzikle adım uyumu</text>
        <text x="155" y="195" font-size="9" fill="#dcfce7" text-anchor="middle">Kırmızı beyaz kurdeleler</text>

        <!-- Görsel Okuma (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#166534" stroke="#facc15" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🖼️🔍🪁🌸</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Görsel Okuma Tablosu</text>
        <text x="385" y="175" font-size="9" fill="#dcfce7" text-anchor="middle">Resimdeki olayları fark et</text>
        <text x="385" y="195" font-size="9" fill="#dcfce7" text-anchor="middle">Cümlelerle ifade et</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#86efac" text-anchor="middle">Görselleri dikkatle okuyan çocuk, dünyayı daha iyi anlar!</text>
      </svg>`
    },
    section2: {
      title: "Görsel Okuma ve Mizah Zamanı",
      subtitle: "Baktığımız her resim bize anlatılmamış bir hikâye fısıldar.",
      cards: [
        {
          badge: "Mizah",
          title: "Günün Fıkrası",
          desc: "Temel'in veya Nasreddin Hoca'nın güldüren fıkralarını dinleyip ders çıkarma."
        },
        {
          badge: "Görsel",
          title: "İlişki Kurma",
          desc: "Güneş açınca kelebeklerin çıkması, çiçeklerin açması arasındaki bağı açıklama."
        },
        {
          badge: "Nezaket",
          title: "Arkadaşı Tebrik",
          desc: "Güzel fıkra anlatan ve rontta başarılı olan arkadaşları içtenlikle alkışlama."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Sahne: 'Görselden Masal Yaratma ve Fıkra Atölyesi'",
      desc: "Tahtaya yansıtılan bayram pikniği tablosu incelenir; öğrenciler resimdeki karakterleri konuşturur.",
      steps: [
        { title: "Tabloyu İncele", desc: "Resimdeki çocukların yüz ifadelerine ve ne yaptıklarına bakma." },
        { title: "Cümle Kur", desc: "'Resimdeki sarı elbiseli kız uçurtmasını rüzgâra bırakmış' cümlesini kurma." },
        { title: "Fıkra Sahnesi", desc: "İsteyen öğrencilerin fıkra anlatarak sınıfı neşelendirmesi." }
      ],
      criteria: [
        "Görseldeki ayrıntılar arasında neden-sonuç bağı kurabilme",
        "Fıkra anlatırken dinleyenlerin ilgisini canlı tutabilme",
        "Ront çalışmasında müzik ve adım koordinasyonunu koruyabilme"
      ]
    },
    tips: {
      safetyTitle: "İletişim Adabı",
      safetyRules: [
        { bold: "Arkadaşını Dinle", text: "Fıkra anlatan arkadaşın sözünü 'Ben bunu biliyordum' diyerek kesmemeli, anlatmasına izin vermeliyiz." }
      ],
      myths: [
        { wrong: "Resimlere sadece bakılır, resimlerle konuşulmaz veya hikâye yazılmaz.", correct: "Hayır! Büyük yazarlar önce resimleri dikkatle inceler ve gördüklerinden harika hikâyeler üretirler." }
      ]
    },
    quiz: {
      question: "Görsel okuma yaparken bir resme baktığımızda ilk olarak neye dikkat etmeliyiz?",
      options: [
        { text: "A) Resimde kimlerin olduğuna, nerede bulunduklarına ve ne yaptıklarına 🔍🖼️", isCorrect: true },
        { text: "B) Kâğıdın arkasını çevirip bakmaya", isCorrect: false },
        { text: "C) Resmi yırtıp atmaya", isCorrect: false },
        { text: "D) Hiç bakmadan kafamıza göre konuşmaya", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Görsel okuma yaparken <strong>kişiler, mekân ve olaylar</strong> arasındaki ilişkiyi dikkatle inceleriz!"
    },
    summaryRules: [
      { bold: "Resimleri Oku", text: "Her detay bir anlam taşır." },
      { bold: "Gül ve Güldür", text: "Fıkralar hayatın neşesidir." },
      { bold: "Haftaya Engelliler Haftası!", text: "Önümüzdeki hafta 10-16 Mayıs Engelliler Haftası, empati oyunları ve masal okuma var!" }
    ],
    homework: "Sevdiğiniz bir kitabın resimli kapağını ailenize görsel okuma yaparak detaylarıyla anlatın.",
    nextWeekPreview: "10-16 Mayıs Engelliler Haftası, Empati Oyunları, Kes-Yapıştır ve Masal Okuma!"
  },

  // 35. HAFTA
  {
    week: 35,
    date: "10 - 16 Mayıs",
    hours: "4 Ders Saati",
    unit: "10-16 Mayıs Engelliler Haftası ve Empati",
    unitBadge: "35. Tema: Empati & Dayanışma",
    unitTheme: "tema-5",
    title: "35. Hafta: Engelliler Haftası, Oyun, Kes-Yapıştır ve Masal",
    subtitle: "Empatiyle Birbirimizi Anlama, Dayanışma Oyunları ve Masal Tonlaması",
    outcomeCode: "SE.1.35 (Farkındalık & Empati)",
    targetSkill: "Engelli Bireylerin Yaşamına Empati Duyma, Birlikte Oyun Kurallarına Uyma, Masalı Tonlamayla Okuma",
    curiosityQuestion: "Gözleri görmeyen bir arkadaşımıza okulun kütüphanesini gezdirirken onun koluna girip merdivenleri nasıl tarif ederiz?",
    roadmap: [
      { title: "10-16 Mayıs Engelliler Haftası", desc: "Farklılıklarımızı sevme, engelleri birlikte aşma bilinci geliştirme." },
      { title: "Kılavuz Arkadaşım Oyunu", desc: "Bir öğrencinin gözleri bağlıyken eşinin rehberliğinde engelsiz parkurda yürümesi." },
      { title: "Sevgi Çiçeği Kes-Yapıştır", desc: "Renkli kâğıtlardan yardım eli ve sevgi çiçeği kolajı yapma." },
      { title: "Vurgu ve Tonlamalı Masal", desc: "Öğretmenin okuduğu masaldaki heyecanlı ve tatlı yerleri tonlamayla dinleme." }
    ],
    section1: {
      title: "Empati: Kendini Başkasının Yerine Koymak",
      subtitle: "Birlikte yürürsek hiçbir engel bizi durduramaz.",
      layout: "split-visual",
      card: {
        title: "Engelsiz Bir Okul İçin 3 Adım",
        icon: "🤝♿",
        desc: "Nasıl destek oluruz?",
        items: [
          { bold: "1. Rampaları Boş Bırak", text: "Tekerlekli sandalye rampalarının önüne çanta veya eşya koyma." },
          { bold: "2. Sarı Çizgileri Koru", text: "Görme engelli arkadaşlarımızın yürüdüğü kabartmalı yollarda bekleme yapma." },
          { bold: "3. Nazikçe Yardım Teklif Et", text: "'Yardım ister misin?' diye kibarca sor; izin verirse destek ol." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#7dd3fc" text-anchor="middle">10-16 MAYIS ENGELLİLER HAFTASI: SEVGİ VE EMPATİ</text>

        <!-- Dayanışma Eli (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#38bdf8" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🤝🧑‍🦽👧</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">El Ele Engelsiz Yaşam</text>
        <text x="155" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">Sevgi engel tanımaz</text>
        <text x="155" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Herkes için erişilebilir okul</text>

        <!-- Güvenli Kılavuz Yürüyüşü (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#facc15" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🦯🚶‍♂️👣⭐</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Kılavuz Arkadaşım</text>
        <text x="385" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">Rehberlik ve güven</text>
        <text x="385" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Merdivende yavaş adımlar</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Gerçek sevgi farklılıkları kucaklamak ve birlikte yürümektir!</text>
      </svg>`
    },
    section2: {
      title: "Dayanışma Oyunu ve Masal Saati",
      subtitle: "Güven duygusunu hisseder, masalların tonlamasıyla büyüleniriz.",
      cards: [
        {
          badge: "Oyun",
          title: "Kılavuz Yürüyüşü",
          desc: "Gözleri bağlı arkadaşını sesinle yönlendirerek yumuşak minderlerin arasından geçirme."
        },
        {
          badge: "Masal",
          title: "Kahramanları Bul",
          desc: "Masalı dinledikten sonra 'Keloğlan ne yaptı, padişah ne cevap verdi?' sorularını yanıtlama."
        },
        {
          badge: "Sanat",
          title: "Yardım Eden Eller",
          desc: "Kendi elinin şeklini kâğıda çizip keserek büyük sınıf panosuna yapıştırma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Empati Parkuru: 'Güvenle Yan Yana'",
      desc: "Öğrenciler ikişerli eşleşir; biri gözünü kapatır, diğeri omzundan hafifçe tutarak sınıfta engelsiz yürütür.",
      steps: [
        { title: "Rol Değişimi", desc: "Önce biri gözünü kapatıp rehberine güvenir, sonra roller değişir." },
        { title: "Duygunu Paylaş", desc: "'Gözlerim kapalıyken ne hissettim, arkadaşıma nasıl güvendim?' sohbeti." },
        { title: "Sevgi Çiçeği", desc: "Kesilen el kalıplarının ortasına kalp yapıştırarak panoya asma." }
      ],
      criteria: [
        "Engelli bireylerin duygularını ve ihtiyaçlarını empatiyle anlayabilme",
        "Kılavuzluk oyununda arkadaşına karşı dikkatli ve koruyucu davranabilme",
        "Masal dinlerken tonlama ve vurguları fark edebilme"
      ]
    },
    tips: {
      safetyTitle: "Empati ve Oyun Güvenliği",
      safetyRules: [
        { bold: "Yavaş ve Dikkatli Yürü", text: "Gözleri kapalı arkadaşımıza rehberlik ederken koşmamalı, sıraya veya kapıya çarpmaması için yavaş adımlarla ilerlemeliyiz." }
      ],
      myths: [
        { wrong: "Engelli bireyler sadece özel günlerde hatırlanmalıdır.", correct: "Hayır! Her gün onların hayatını kolaylaştıracak sevgi ve saygıyı göstermek bizim insanlık görevimizdir." }
      ]
    },
    quiz: {
      question: "Gözleri görmeyen beyaz bastonlu bir arkadaşımıza yardım ederken hangisini yapmalıyız?",
      options: [
        { text: "A) Yanına gidip 'Merhaba, merdivenden inmenize yardım edebilir miyim?' diye sormak 🦯🤝", isCorrect: true },
        { text: "B) Bastonunu elinden çekip almak", isCorrect: false },
        { text: "C) Hızlıca koşup önüne geçmek", isCorrect: false },
        { text: "D) Hiç aldırmadan yanından koşarak geçmek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Yardım etmeden önce <strong>izin istemek ve nazikçe destek olmak</strong> en doğru yaklaşımdır!"
    },
    summaryRules: [
      { bold: "Empati Kur", text: "Arkadaşının gözü, kulağı ve eli ol." },
      { bold: "Engelleri Kaldır", text: "Okulda herkese yer ve sevgi var." },
      { bold: "Haftaya 19 Mayıs & Anneler Günü!", text: "Önümüzdeki hafta 19 Mayıs Atatürk'ü Anma, Anneler Günü resmi ve monolog var!" }
    ],
    homework: "Evinizde gözlerinizi 2 dakika kapatıp odanızda yürümeyi deneyin ve hislerinizi ailenizle paylaşın.",
    nextWeekPreview: "19 Mayıs Atatürk'ü Anma Gençlik ve Spor Bayramı, Anneler Günü Resmi, Monolog ve Bulmaca!"
  },

  // 36. HAFTA
  {
    week: 36,
    date: "17 - 23 Mayıs",
    hours: "4 Ders Saati",
    unit: "19 Mayıs ve Canım Annem Sevgisi",
    unitBadge: "36. Tema: Gençlik & Anneler",
    unitTheme: "tema-5",
    title: "36. Hafta: 19 Mayıs, Anneler Günü, Monolog ve Resim",
    subtitle: "Samsun'a Çıkan İlk Adım, Dünyanın En Güzel Varlığı Annem ve Boyama",
    outcomeCode: "SE.1.36 (Tarih & Vefa)",
    targetSkill: "19 Mayıs'ın Önemini Bilme, Anneler Günü İçin Resim Yapma, Monologda Beden Dilini Kullanma",
    curiosityQuestion: "Atatürk, 19 Mayıs 1919'da Bandırma Vapuru ile Samsun'a ayak bastığında vatanımız için nasıl büyük bir kurtuluş meşalesi yakmıştır?",
    roadmap: [
      { title: "19 Mayıs Gençlik ve Spor Bayramı", desc: "Kurtuluş Savaşı'nın başlangıcı, Atatürk'ün gençliğe ve spora verdiği değer." },
      { title: "Canım Annem Resmi", desc: "Anneler Günü için kalpli, çiçekli ve renkli bir teşekkür resmi hazırlama." },
      { title: "Sahne Monoloğu", desc: "'Ben bir sporcuyum, her gün koşar sağlığımı korurum' monoloğunu mimikle sergileme." },
      { title: "Çizgi ve Nokta Bulmacası", desc: "Noktaları 1'den 20'ye kadar birleştirerek spor topu ve kupa resmi çıkarma." }
    ],
    section1: {
      title: "19 Mayıs: Bağımsızlığın İlk Adımı",
      subtitle: "Güneş Samsun'dan doğdu; milletimiz Atatürk'ün önderliğinde el ele verdi.",
      layout: "split-visual",
      card: {
        title: "Anneme Sevgi Mektubu",
        icon: "💐❤️",
        desc: "Annemize ne söyleriz?",
        items: [
          { bold: "1. Sevgi Dolu Teşekkür", text: "'Canım annem, beni sevgiyle büyüttüğün için sana çok teşekkür ederim.'" },
          { bold: "2. Gülümseyen Çiçekler", text: "Resmin kenarına annenin en sevdiği renkte papatyalar ve güller çiz." },
          { bold: "3. Öpücükle Armağan Et", text: "Akşam resmi annene verirken sarıl ve 'Seni çok seviyorum' de." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#eab308" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">19 MAYIS GENÇLİK VE SPOR & ANNELER GÜNÜ</text>

        <!-- Bandırma Vapuru & Meşale (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#eab308" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🚢🔥🏃‍♂️</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">19 Mayıs 1919</text>
        <text x="155" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">Samsun'a Çıkış</text>
        <text x="155" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Sağlam kafa sağlam vücutta</text>

        <!-- Anneler Günü Resmi (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#ec4899" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">👩‍👧💐❤️🎨</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#f472b6" text-anchor="middle">Canım Annem</text>
        <text x="385" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">Sevgin dünyalara değer</text>
        <text x="385" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Rengarenk çiçekler sana</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Sporla güçleniriz, anne sevgisiyle kalbimizi güzelleştiririz!</text>
      </svg>`
    },
    section2: {
      title: "Spor Monoloğu ve Çizgi Bulmacası",
      subtitle: "Beden dilimiz enerjiyi yansıtır, kalemimiz noktaları birleştirir.",
      cards: [
        {
          badge: "Monolog",
          title: "Genç Sporcu",
          desc: "Kollarını gerip 'Ben her sabah jimnastik yaparım, sütümü içerim' monoloğu."
        },
        {
          badge: "Bulmaca",
          title: "Noktaları Birleştir",
          desc: "1'den 20'ye kadar sayarak çizgileri çekme ve şampiyonluk kupasını boyama."
        },
        {
          badge: "Resim",
          title: "Taşırmadan Boya",
          desc: "Anneler Günü çiçeğini özenle, boşluk bırakmadan pırıl pırıl renklendirme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Atölye: 'Anneme Sevgi Tablosu ve Spor Dansı'",
      desc: "Her öğrenci annesine hediye edeceği resmi tamamlar; ardından 19 Mayıs marşıyla hareket eder.",
      steps: [
        { title: "Resmi Çiz", desc: "Kalp içinde anne ve çocuk figürünü boyama kalemleriyle çizme." },
        { title: "Yazını Ekle", desc: "Öğretmenin yardımıyla 'Seni Çok Seviyorum Canım Annem' yazma." },
        { title: "Aferin Yıldızı", desc: "Çalışmasını temiz ve zamanında bitirenlere öğretmen yıldızı takma." }
      ],
      criteria: [
        "19 Mayıs Atatürk'ü Anma Gençlik ve Spor Bayramı'nın önemini bilme",
        "Anneler Günü için hazırlanan çalışmada özen ve temizlik sergileyebilme",
        "Nokta birleştirme bulmacasında sayı sırasını hatasız takip edebilme"
      ]
    },
    tips: {
      safetyTitle: "Spor ve Resim Düzeni",
      safetyRules: [
        { bold: "Boya Kalemlerini Topla", text: "Resim bittikten sonra boya kalemlerini ve kırıkları yere bırakmamalı; kalemliği derli toplu çantaya koymalıyız." }
      ],
      myths: [
        { wrong: "Anneler Günü'nde sadece pahalı hediyeler değerlidir.", correct: "Hayır! Bir çocuğun kendi elleriyle çizdiği bir resim ve sıcacık bir sarılma anneye en büyük hazinedir." }
      ]
    },
    quiz: {
      question: "Atatürk, 19 Mayıs 1919'da Kurtuluş Savaşı'nı başlatmak için hangi şehrimize ayak basmıştır?",
      options: [
        { text: "A) Samsun 🚢🇹🇷", isCorrect: true },
        { text: "B) Antalya", isCorrect: false },
        { text: "C) İzmir", isCorrect: false },
        { text: "D) Konya", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Mustafa Kemal Atatürk, Bandırma Vapuru ile 19 Mayıs 1919'da <strong>Samsun'a</strong> çıkarak milli mücadeleyi başlatmıştır!"
    },
    summaryRules: [
      { bold: "Spor Yap, Güçlen", text: "19 Mayıs gençliğin ve dinçliğin bayramıdır." },
      { bold: "Annene Sarıl", text: "Onun sevgisi dünyalara bedeldir." },
      { bold: "Haftaya Masal & Tekerleme!", text: "Önümüzdeki hafta 'Sar Makarayı' tekerlemesi, 5N 1K masal soruları ve film var!" }
    ],
    homework: "Yaptığınız Anneler Günü resmini annenize verin ve ona sımsıkı sarılarak teşekkür edin.",
    nextWeekPreview: "'Sar Makarayı Sar' Tekerlemesi, Masal Anlatma, 5N 1K Soruları ve Çizgi Film!"
  },

  // 37. HAFTA
  {
    week: 37,
    date: "24 - 30 Mayıs",
    hours: "4 Ders Saati",
    unit: "Tekerlemeler, 5N 1K ve Hayal Gücü",
    unitBadge: "37. Tema: Masal & 5N 1K",
    unitTheme: "tema-5",
    title: "37. Hafta: 'Sar Makarayı', Masal Anlatma, 5N 1K ve Film",
    subtitle: "Ritmik El Hareketleri, Masal Çözümleme ve Hayal Gücü Filmleri",
    outcomeCode: "SE.1.37 (Dil Becerisi & 5N 1K)",
    targetSkill: "Tekerlemeyi Hızlanarak Söyleme, Masaldaki 5N 1K Unsurlarını Bulma, Film Analizi",
    curiosityQuestion: "'Sar sar sar makarayı / Çöz çöz çöz makarayı / Şöyle de böyle şap şap şap!' derken ellerimiz neden hiç durmaz?",
    roadmap: [
      { title: "'Sar Makarayı' Tekerlemesi", desc: "Kolları döndürerek hızlanan ve yavaşlayan eğlenceli el tekerlemesi." },
      { title: "Masal Sahnesi ve 5N 1K", desc: "'Kim? Ne yaptı? Nerede? Ne zaman? Nasıl?' sorularıyla masalı anlama." },
      { title: "Serbest Bahar Boyaması", desc: "Deniz, yelkenli ve gökyüzü temalı serbest konulu boyama çalışması." },
      { title: "Hayal Gücü Çizgi Filmi", desc: "Uçan balonlar ve maceralar konulu seviyeye uygun animasyonu izleme." }
    ],
    section1: {
      title: "'Sar Makarayı': Hızlanan Eller Oyunu",
      subtitle: "Kollarımız bir makara gibi döner, alkışlarla ritim hızlanır.",
      layout: "split-visual",
      card: {
        title: "Tekerlemenin Hareketleri",
        icon: "🧵👏",
        desc: "Aşama aşama ritim:",
        items: [
          { bold: "1. Sar Makarayı", text: "İki elini yumruk yapıp göğsünün önünde ileriye doğru hızla çevir." },
          { bold: "2. Çöz Makarayı", text: "Yönü tersine çevirip geriye doğru ellerini sar." },
          { bold: "3. Şap Şap Şap!", text: "Dizlerine iki kez, ellerine üç kez alkış vurup 'Komşu komşu tak tak tak' de." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">'SAR MAKARAYI' VE 5N 1K MASAL SORULARI</text>

        <!-- Sar Makarayı Hareketi (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🧵🔄👏✨</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">'Sar Makarayı Sar'</text>
        <text x="155" y="175" font-size="9" fill="#cbd5e1" text-anchor="middle">Hızlan - Yavaşla</text>
        <text x="155" y="195" font-size="9" fill="#cbd5e1" text-anchor="middle">Şap şap şap, tak tak tak!</text>

        <!-- 5N 1K Soruları (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="385" y="115" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Masal Dedektifi: 5N 1K</text>
        <text x="330" y="145" font-size="10" fill="#fde047">❓ KİM?</text>
        <text x="410" y="145" font-size="10" fill="#fde047">❓ NEREDE?</text>
        <text x="330" y="175" font-size="10" fill="#fde047">❓ NE YAPTI?</text>
        <text x="410" y="175" font-size="10" fill="#fde047">❓ NASIL?</text>
        <text x="385" y="205" font-size="8.5" fill="#cbd5e1" text-anchor="middle">Masalı tam anlamanın şifresi</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Tekerleme hızımızı artırır, 5N 1K soruları aklımızı keskinleştirir!</text>
      </svg>`
    },
    section2: {
      title: "Masal Dedektifi ve Film Saati",
      subtitle: "Hikâyelerin içine girip ipuçlarını yakalıyoruz.",
      cards: [
        {
          badge: "Dedektif",
          title: "Kim ve Nerede?",
          desc: "Masalda geçen kahramanın adını ve olayın geçtiği ormanı veya kaleyi bulma."
        },
        {
          badge: "Tekerleme",
          title: "En Hızlı Makara",
          desc: "Tekerlemenin sonunu şaşırmadan en hızlı söyleyen grubu sınıfta alkışlama."
        },
        {
          badge: "Film Saati",
          title: "Filmden Çıkarımlar",
          desc: "Çizgi filmin sonunda 'Kahraman hangi hatayı yaptı ve nasıl düzeltti?' sorusunu yanıtlama."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Masal Dedektifleri Sahnesi'",
      desc: "Öğretmen kısa bir masal anlatır; tahtadaki 5N 1K kutularına öğrencilerden gelen cevaplar yazılır.",
      steps: [
        { title: "Masalı Dinle", desc: "Kırmızı Başlıklı Kız veya Keloğlan masalını sessizce takip etme." },
        { title: "Soruları Cevapla", desc: "'Kahraman kimdi? Nereye gitti? Ne zaman oldu?' sorularını yanıtlama." },
        { title: "Makarayı Sar", desc: "Tüm sınıf ayağa kalkarak makara tekerlemesini koro halinde oynama." }
      ],
      criteria: [
        "Tekerlemeyi el hareketleriyle ritmik ve hızlı biçimde söyleyebilme",
        "Dinlediği veya izlediği içerikten 5N 1K sorularına doğru cevap verebilme",
        "Grup içinde dinleme adabına ve sıra bekleme kuralına uyma"
      ]
    },
    tips: {
      safetyTitle: "Dikkat ve Ritim",
      safetyRules: [
        { bold: "Arkadaşına Çarpma", text: "Makara tekerlemesinde kollarımızı döndürürken yanımızdaki arkadaşımıza çarpmamak için mesafemizi korumalıyız." }
      ],
      myths: [
        { wrong: "Bir hikâyeyi sadece sonunu dinlemek yeterlidir.", correct: "Hayır! Hikâyenin başını, ortasını ve kahramanların neden öyle davrandığını anlamak zihnimizi geliştirir." }
      ]
    },
    quiz: {
      question: "Bir masalı dikkatle dinleyen bir 'Masal Dedektifi' aşağıdaki sorulardan hangisine cevap verebilir?",
      options: [
        { text: "A) Masaldaki kahramanın KİM olduğuna ve olayın NEREDE geçtiğine 🕵️‍♂️📖", isCorrect: true },
        { text: "B) Yarın havanın kaç derece olacağına", isCorrect: false },
        { text: "C) Yanındaki arkadaşının ayakkabı numarasına", isCorrect: false },
        { text: "D) Televizyonun fişinin nerede olduğuna", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Masal dedektifleri 5N 1K sorularıyla <strong>kahramanın kim olduğunu, nerede ve nasıl yaşadığını</strong> hemen bulurlar!"
    },
    summaryRules: [
      { bold: "Makarayı Çevir", text: "Tekerlemelerle eğlen ve hızlan." },
      { bold: "Soruları Sor", text: "5N 1K ile masalları derinlemesine anla." },
      { bold: "Haftaya Yaz Tatili Planları!", text: "Önümüzdeki hafta Atatürk'ün Kurtuluş Savaşı filmleri ve tatil planları konuşması var!" }
    ],
    homework: "Evde ailenize 'Sar Makarayı' tekerlemesini el hareketleriyle gösterip birlikte hızlanarak oynayın.",
    nextWeekPreview: "Kurtuluş Savaşı Filmleri, Fıkra Anlatma, Yaz Tatili Planları ve Eşleştirme Bulmacaları!"
  },

  // 38. HAFTA
  {
    week: 38,
    date: "31 Mayıs - 06 Haziran",
    hours: "4 Ders Saati",
    unit: "Kurtuluş Savaşı, Fıkralar ve Yaz Tatili Planları",
    unitBadge: "38. Tema: Tarih & Gelecek",
    unitTheme: "tema-5",
    title: "38. Hafta: Kurtuluş Savaşı Filmleri, Fıkra ve Tatil Planları",
    subtitle: "Atatürk'ün Mücadelesi, Eğlendirici Fıkralar ve Yaz Tatili Hayalleri",
    outcomeCode: "SE.1.38 (Tarih & İfade)",
    targetSkill: "Atatürk'ün Milli Mücadelesini Anlama, Fıkra Anlatabilme, Geleceğe Dair Duygularını İfade Etme",
    curiosityQuestion: "Yaz tatili geldiğinde deniz kenarında, köyde dedemizin yanında veya yemyeşil yaylalarda neler yapmak istersin?",
    roadmap: [
      { title: "Kurtuluş Savaşı Çizgi Filmi", desc: "Milletimizin birlik olup vatanımızı kurtardığı destansı günleri izleme." },
      { title: "Günün En Tatlı Fıkrası", desc: "Öğrencilerin yeni öğrendikleri esprili fıkraları sahneye çıkıp anlatması." },
      { title: "Yaz Tatilinde Neler Yapacağım?", desc: "Kürsüye çıkıp tatil planlarını, okuyacağı kitapları ve hayallerini paylaşma." },
      { title: "İlişkili Nesne Eşleştirme", desc: "Güneş-Gözlük, Çanta-Kitap, Deniz-Yelkenli nesnelerini eşleştirme." }
    ],
    section1: {
      title: "Vatan Sevgisi ve Yaz Güneşi",
      subtitle: "Geçmişimizi minnetle anar, geleceğe umut dolu tatil hayalleri kurarız.",
      layout: "split-visual",
      card: {
        title: "Yaz Tatili İçin 3 Güzel Plan",
        icon: "🏖️📚",
        desc: "Dolu dolu bir yaz:",
        items: [
          { bold: "1. Doğada Koş", text: "Parklarda, sahilde veya köyde bol bol temiz hava al ve bisiklete bin." },
          { bold: "2. Yaz Masalları Oku", text: "Her gün serin bir gölgede en az 20 dakika resimli kitap oku." },
          { bold: "3. Yeni Bir Beceri Öğren", text: "Yüzmeyi öğren, resim yap veya bir müzik aletine merhaba de." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#7dd3fc" text-anchor="middle">KURTULUŞ SAVAŞI FİLMİ VE YAZ TATİLİ PLANLARI</text>

        <!-- Atatürk & Kurtuluş Savaşı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#075985" stroke="#facc15" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🎖️🇹🇷🐎</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Kurtuluş Destanı</text>
        <text x="155" y="175" font-size="9" fill="#e0f2fe" text-anchor="middle">Birlik ve beraberlik</text>
        <text x="155" y="195" font-size="9" fill="#e0f2fe" text-anchor="middle">Atatürk'ün cesareti</text>

        <!-- Yaz Tatili Hayalleri (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#075985" stroke="#38bdf8" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">☀️🏖️🍉🚲</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Yaz Tatili Geliyor</text>
        <text x="385" y="175" font-size="9" fill="#e0f2fe" text-anchor="middle">Deniz, kum, bisiklet</text>
        <text x="385" y="195" font-size="9" fill="#e0f2fe" text-anchor="middle">Kitaplarla dinlenme</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#facc15" text-anchor="middle">Geçmişini iyi bilen çocuk, geleceğe güvenle ve neşeyle bakar!</text>
      </svg>`
    },
    section2: {
      title: "Kürsüde Hayaller ve Fıkra Eğlencesi",
      subtitle: "Duygularımızı özgürce paylaşır, arkadaşlarımızı dinleriz.",
      cards: [
        {
          badge: "İfade",
          title: "Benim Tatilim",
          desc: "Kürsüye çıkıp 'Bu yaz dedemin köyüne gideceğim, kuzuları seveceğim' konuşması."
        },
        {
          badge: "Fıkra",
          title: "Gülümseme Zamanı",
          desc: "Sınıfın en güzel fıkra anlatan öğrencisini seçip alkışlarla onurlandırma."
        },
        {
          badge: "Nezaket",
          title: "Söz Kesmeme",
          desc: "Arkadaşımız tatil planını anlatırken dinleme adabına tam bağlı kalma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Kürsü: 'Yaz Tatili Hayal Haritam'",
      desc: "Her öğrenci bir A4 kâğıdına yaz tatilinde gitmek istediği yeri çizer ve tahtada tanıtır.",
      steps: [
        { title: "Hayalini Çiz", desc: "Güneş, deniz, köy evi veya kitaplarla dolu tatil resmini çizme." },
        { title: "Kürsüde Anlat", desc: "Tahtaya çıkıp 2-3 cümleyle yaz tatilinde neler yapacağını açıklama." },
        { title: "Arkadaşını Dinle", desc: "Tüm sınıf arkadaşlarının hayallerine saygı duyup tebrik etme." }
      ],
      criteria: [
        "Kurtuluş Savaşı'nın önemini kavrayıp milli kahramanlara saygı duyabilme",
        "Topluluk önünde yaz tatili hedeflerini akıcı bir dille anlatabilme",
        "Eşleştirme bulmacalarını mantıksal bağı kurarak doğru çözebilme"
      ]
    },
    tips: {
      safetyTitle: "Yaz Güvenliği ve Sağlık",
      safetyRules: [
        { bold: "Güneş Çarpmasına Dikkat", text: "Yazın öğle saatlerinde dik gelen güneş altında şapkasız dolaşmamalı, bol bol su içmeyi unutmamalıyız." }
      ],
      myths: [
        { wrong: "Yaz tatilinde hiç kitap okunmaz, sadece oyun oynanır.", correct: "Hayır! En güzel yaz günleri gölgede keyifle okunan masallarla süslenen günlerdir." }
      ]
    },
    quiz: {
      question: "Kurtuluş Savaşı filmini izlerken milletimizin vatanımızı kurtarmak için gösterdiği en önemli güç hangisidir?",
      options: [
        { text: "A) Birlik, beraberlik ve Atatürk'ün önderliğinde çok çalışmak 🇹🇷🤝", isCorrect: true },
        { text: "B) Herkesin kendi başına bir köşeye kaçması", isCorrect: false },
        { text: "C) Pes edip hiçbir şey yapmamak", isCorrect: false },
        { text: "D) Sadece oturup beklemek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Kurtuluş Savaşı'nı milletimizin <strong>birlik, dayanışma ve vatan sevgisi</strong> kazanmıştır!"
    },
    summaryRules: [
      { bold: "Ata'nı Minnetle An", text: "Bu güzel vatan bize emanettir." },
      { bold: "Tatilini Planla", text: "Yaz tatili hem dinlenme hem gelişim vaktidir." },
      { bold: "Haftaya Soru-Cevap Oyunu!", text: "Önümüzdeki hafta iki grup halinde soru sorma, sorun çözme ve tekerlemeler var!" }
    ],
    homework: "Yaz tatilinde okumak istediğiniz 2 resimli masal kitabının adını belirleyip defterinize yazın.",
    nextWeekPreview: "İki Grup Halinde Soru Sorma Oyunu, Sorun Çözme, Tekerleme ve Film İzleme!"
  },

  // 39. HAFTA
  {
    week: 39,
    date: "07 - 13 Haziran",
    hours: "4 Ders Saati",
    unit: "Birlikte Düşünme, Sorun Çözme ve Soru Oyunu",
    unitBadge: "39. Tema: Tartışma & Mantık",
    unitTheme: "tema-5",
    title: "39. Hafta: Tekerleme, İki Grup Sorun Çözme ve Soru Oyunu",
    subtitle: "Takım Halinde Soru Sorma ve Cevaplama, Uzlaşma ve Kayıkçı Tekerlemesi",
    outcomeCode: "SE.1.39 (Takım Çalışması & İfade)",
    targetSkill: "İki Grup Halinde Soru Sorma ve Yanıtlama, Problem Durumlarına Ortak Çözüm Bulma",
    curiosityQuestion: "Sınıf iki takıma ayrıldığında birbirine tatlı dille ve kurallara uyarak nasıl soru sorar ve dinler?",
    roadmap: [
      { title: "Takım Soru Oyunu", desc: "Mavi ve Kırmızı takımın birbirine ders konularıyla ilgili bilmece ve soru sorması." },
      { title: "Sorun Çözme Sahnesi", desc: "İki arkadaşın tartışma nedenlerini inceleyip ortak orta yolu bulma." },
      { title: "'Fış Fış Kayıkçı' Tekrarı", desc: "Tekerlemeyi bu kez tüm sınıf halka olup coşkuyla sallanarak söyleme." },
      { title: "Dostluk Çizgi Filmi", desc: "Birlikte çalışan karıncaların zorlukları nasıl aştığını anlatan filmi izleme." }
    ],
    section1: {
      title: "Takım Oyunu: Birlikte Sormak, Birlikte Öğrenmek",
      subtitle: "Bilgi paylaştıkça çoğalır, takımlar dostlukla yarışır.",
      layout: "split-visual",
      card: {
        title: "Takım Soru Oyununun Kuralları",
        icon: "👥❓",
        desc: "Oyun adımları:",
        items: [
          { bold: "1. Sözcü Seç", text: "Her takım kendi içinde fısıltıyla anlaşıp soruyu soracak sözcüyü belirler." },
          { bold: "2. Konu Dışına Çıkma", text: "Öğrendiğimiz konularla (trafik, sağlık, hayvanlar) ilgili net sorular sor." },
          { bold: "3. Rakibi Tebrik Et", text: "Karşı grup doğru bildiğinde masaya vurarak veya alkışla kutla." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#a5b4fc" text-anchor="middle">İKİ GRUP HALİNDE SORU SORMA VE SORUN ÇÖZME</text>

        <!-- Mavi Takım (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#38bdf8" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🔵👧👦❓</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Mavi Takım</text>
        <text x="155" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">'Hangi meyve sarıdır?'</text>
        <text x="155" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Sözcü sırayla sorar</text>

        <!-- Kırmızı Takım (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#f43f5e" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🔴🧒👧💡</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fb7185" text-anchor="middle">Kırmızı Takım</text>
        <text x="385" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">'Cevap: Muz ve Limon!'</text>
        <text x="385" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Birlikte düşünür cevaplar</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#a5b4fc" text-anchor="middle">Yarışmak değil, birlikte öğrenip birbirini alkışlamak esastır!</text>
      </svg>`
    },
    section2: {
      title: "Sorun Çözme ve Barış Masası",
      subtitle: "Kavga yok, anlaşma var; her sorunun tatlı bir çözümü vardır.",
      cards: [
        {
          badge: "Barış",
          title: "Dinleme Çemberi",
          desc: "İki arkadaş anlaşamadığında önce derin bir nefes alır, sonra sırayla duygularını anlatır."
        },
        {
          badge: "Tekerleme",
          title: "Kayıkçı Korosu",
          desc: "'Fış Fış Kayıkçı' tekerlemesini tüm sınıf büyük bir halka olup neşeyle söyler."
        },
        {
          badge: "Film Saati",
          title: "Yardımlaşma",
          desc: "İzlenen filmdeki hayvanların bir araya gelerek köprü kurmasını konuşma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Uygulama: 'Dostça Soru Yarışması'",
      desc: "Sınıf iki eşit takıma ayrılır; her takım diğer takıma sırayla 3 bilmece sorar.",
      steps: [
        { title: "Sorunu Hazırla", desc: "Grupça toplanıp sorulacak bilmeceyi fısıltıyla seçme." },
        { title: "Sözcü Konuşsun", desc: "Takım sözcüsünün ayağa kalkıp soruyu karşı gruba nazikçe sorması." },
        { title: "Ortak Alkış", desc: "Bilen tarafı diğer tarafın tebrik edip alkışlaması." }
      ],
      criteria: [
        "Grup içinde iş birliği ve sessizce fikir alışverişi yapabilme",
        "Karşı takıma soru sorarken saygılı ve anlaşılır bir dil kullanabilme",
        "Oyun sonunda kazanan veya kaybeden ayrımı yapmadan dostluğu kutlama"
      ]
    },
    tips: {
      safetyTitle: "İletişim Nezaketi",
      safetyRules: [
        { bold: "Alay Etmek Yok", text: "Karşı takım soruyu bilemediğinde asla dalga geçilmez; 'Önemli değil, bir dahakine bilirsiniz' denir." }
      ],
      myths: [
        { wrong: "Yarışmalarda sadece kazanan takım mutlu olmalıdır.", correct: "Hayır! Birlikte oynanan oyunlarda en büyük kazanç dostluk ve keyifli vakit geçirmektir." }
      ]
    },
    quiz: {
      question: "Grupça soru oyunu oynarken karşı takım doğru cevap verdiğinde ne yapmalıyız?",
      options: [
        { text: "A) 'Tebrik ederiz!' diyerek onları içtenlikle alkışlamak 👏🎉", isCorrect: true },
        { text: "B) 'Siz hile yaptınız' diye bağırmak", isCorrect: false },
        { text: "C) Sıralara vurup oyunu terk etmek", isCorrect: false },
        { text: "D) Surat asıp küsmek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Gerçek centilmen öğrenciler <strong>başarılı olan arkadaşlarını tebrik eder ve alkışlarlar</strong>!"
    },
    summaryRules: [
      { bold: "Takım Ol", text: "Birlikte düşünmek gücümüzü artırır." },
      { bold: "Centilmen Kal", text: "Arkadaşını tebrik etmeyi bil." },
      { bold: "Haftaya Büyük Tekrar!", text: "Önümüzdeki hafta yıl boyu öğrendiğimiz tüm şarkıları, oyunları ve filmleri tekrar edeceğiz!" }
    ],
    homework: "Ailenize okulda oynadığınız takım soru oyununu anlatıp evde iki takım olup bilmece yarışması yapın.",
    nextWeekPreview: "Yıl Boyu Öğrenilen Şarkı ve Oyunlar Tekrarı, Soru Sorma Atölyesi ve Veda Hazırlığı!"
  },

  // 40. HAFTA
  {
    week: 40,
    date: "14 - 20 Haziran",
    hours: "4 Ders Saati",
    unit: "Yıl Boyu Öğrenilenlerin Tekrarı ve Film Şenliği",
    unitBadge: "40. Tema: Büyük Hatırlama",
    unitTheme: "tema-5",
    title: "40. Hafta: Film İzleme, Soru Sorma ve Yıl Sonu Şarkıları",
    subtitle: "1 Yıl Boyunca Neler Öğrendik? En Sevilen Şarkılar ve Oyunlar",
    outcomeCode: "SE.1.40 (Yıl Sonu Tekrarı & Özet)",
    targetSkill: "Yıl Boyunca Öğrenilen Şarkı ve Oyunları Hatırlama, Akıcı Soru Sorma, 1. Sınıfı Değerlendirme",
    curiosityQuestion: "1. sınıfın ilk gününde tanışma çemberinde oturduğumuz o ilk anı ve şimdi koskoca bir yılı bitirdiğimizi düşündüğünde ne hissediyorsun?",
    roadmap: [
      { title: "Yılın En Sevilen Şarkıları", desc: "Sonbahardan yaza kadar öğrendiğimiz şarkıları koro halinde baştan sona söyleme." },
      { title: "Geleneksel Oyunlar Şenliği", desc: "Mendil kapmaca, Deve-Cüce ve Gece-Gündüz oyunlarını bahçede oynama." },
      { title: "Yıl Sonu Eğitici Filmi", desc: "Büyümeyi, dostluğu ve okulu anlatan harika bir animasyon izleme." },
      { title: "Meraklı Sorular Atölyesi", desc: "Öğrencilerin 2. sınıfla ilgili merak ettiklerini öğretmenlerine sorması." }
    ],
    section1: {
      title: "1. Sınıfın Masalı: Harflerden Şarkılara",
      subtitle: "Küçücük adımlarla başladık; şimdi okuyan, yazan, şarkılar söyleyen koca yıldızlar olduk.",
      layout: "split-visual",
      card: {
        title: "1 Yılda Neler Başardık?",
        icon: "🌟📚",
        desc: "Kocaman başarılarımız:",
        items: [
          { bold: "1. Okumayı ve Yazmayı Öğrendik", text: "Harfler birleşti, kitap sayfaları en yakın dostumuz oldu." },
          { bold: "2. Sayısız Oyun ve Tekerleme", text: "Ront yaptık, fıkra anlattık, kenar süsleriyle defterlerimizi süsledik." },
          { bold: "3. Harika Dostluklar Kurduk", text: "Paylaşmayı, empatiyi, nezaketi ve birlikte başarmayı öğrendik." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">1. SINIF SERÜVENİ: HARFLERDEN YILDIZLARA</text>

        <!-- Eylül Başlangıcı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#38bdf8" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🎒🌱🔤</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Eylül: İlk Gün</text>
        <text x="155" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">Heyecanla başladık</text>
        <text x="155" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">İlk çizgiler, ilk sesler</text>

        <!-- Haziran Sonu (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#f59e0b" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">📖🌟🎓🎉</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Haziran: Başarı</text>
        <text x="385" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">Kitap okuyoruz</text>
        <text x="385" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">2. sınıfa hazırız!</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Her gün yeni bir bilgi, her gün yeni bir tebessüm kazandık!</text>
      </svg>`
    },
    section2: {
      title: "Şarkılar Korosu ve 2. Sınıfa Merak",
      subtitle: "Bildiğimiz tüm oyunları oynuyor, neşeyle büyüyoruz.",
      cards: [
        {
          badge: "Koro",
          title: "Şarkı Geçidi",
          desc: "'Kutu Kutu Pense', 'Fış Fış Kayıkçı' ve '23 Nisan' şarkılarını arka arkaya söyleme."
        },
        {
          badge: "Oyun",
          title: "Sınıfın Favorisi",
          desc: "Öğrencilerin oylarıyla yılın en çok sevilen oyununu okul bahçesinde oynama."
        },
        {
          badge: "Merak",
          title: "2. Sınıfta Ne Var?",
          desc: "Yeni dersler, yeni kitaplar ve yeni maceralar hakkında öğretmenle sohbet."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Kutlama: 'Yılın En Güzel Anı Çemberi'",
      desc: "Öğrenciler yere bağdaş kurup çember olur; bu yıl sınıfta yaşadığı en mutlu günü anlatır.",
      steps: [
        { title: "Söz Sırası", desc: "Yumuşak oyun topunu tutan öğrencinin en sevdiği anıyı paylaşması." },
        { title: "Topu Devret", desc: "Göz teması kurup tebessüm ederek topu yanındaki arkadaşına atma." },
        { title: "Ortak Alkış", desc: "Tüm sınıfın 1 yıl boyunca gösterdiği emek için birbirini alkışlaması." }
      ],
      criteria: [
        "1. sınıf boyunca edindiği becerileri gururla ve doğru ifade edebilme",
        "Toplu şarkı ve oyun etkinliklerine tam uyum ve neşeyle katılabilme",
        "2. sınıfa karşı olumlu merak ve yüksek öğrenme isteği sergileme"
      ]
    },
    tips: {
      safetyTitle: "Bahçe Oyunları Güvenliği",
      safetyRules: [
        { bold: "Sıcakta Su İç", text: "Haziran güneşi altında oyun oynarken terleyince mutlaka gölgeye geçip suyumuzu yudumlamalıyız." }
      ],
      myths: [
        { wrong: "1. sınıf bitince öğrendiğimiz her şeyi unuturuz.", correct: "Hayır! Okuma, yazma ve nezaket kuralları ömür boyu bizimle kalan en değerli hazinelerimizdir." }
      ]
    },
    quiz: {
      question: "1. sınıfta geçirdiğimiz koca bir yıl boyunca kazandığımız EN GÜZEL değer hangisidir?",
      options: [
        { text: "A) Okumayı öğrenmek, arkadaşlığı paylaşmak ve nezaketle yaşamak 📖🤝✨", isCorrect: true },
        { text: "B) Sürekli sıranın altına saklanmak", isCorrect: false },
        { text: "C) Bütün gün kavga etmek", isCorrect: false },
        { text: "D) Eşyalarımızı kaybetmek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> 1. sınıf bize <strong>okumanın güzelliğini, dostluğun kıymetini ve saygıyla yaşamayı</strong> kazandırdı!"
    },
    summaryRules: [
      { bold: "Kendini Kutla", text: "1. sınıfı harika bir başarıyla tamamladın." },
      { bold: "Şarkını Söyle", text: "Öğrendiğin tüm melodiler kalbinde kalsın." },
      { bold: "Haftaya Büyük Şenlik!", text: "Önümüzdeki hafta 41. Hafta Yıl Sonu Serbest Etkinlikler Şenliği ve Başarı Sertifikaları var!" }
    ],
    homework: "1. sınıfta en çok sevdiğiniz bir tekerlemeyi veya şarkıyı ailenize gururla söyleyin.",
    nextWeekPreview: "41. Hafta: Yıl Sonu Serbest Etkinlikler Şenliği, Başarı Sertifikaları ve Büyük Veda!"
  },

  // 41. HAFTA - FİNAL ŞENLİĞİ
  {
    week: 41,
    date: "21 - 27 Haziran",
    hours: "4 Ders Saati",
    unit: "Yıl Sonu Serbest Etkinlikler Şenliği ve Büyük Veda",
    unitBadge: "41. Tema: Yıl Sonu Şenliği",
    unitTheme: "tema-5",
    title: "41. Hafta: Yıl Sonu Serbest Etkinlikler Şenliği ve Sertifika Töreni",
    subtitle: "Sosyal Etkinlikler, Portfolyo Sergisi, Başarı Madalyaları ve Karneler",
    outcomeCode: "SE.1.41 (Sosyal Etkinlik & Başarı)",
    targetSkill: "Yıl Boyu Yapılan Ürünleri Sergileme, Başarıyı Kutlama, Vedalaşma ve Tatil Bilinci",
    curiosityQuestion: "Bugün karnemizi ve 'Yılın Küçük Yıldızı' başarı belgemizi alırken kalbimiz neden pır pır eder?",
    roadmap: [
      { title: "Sınıf Sergisi Açılışı", desc: "Yıl boyu yapılan resimler, kenar süsleri ve kolajların panoda sergilenmesi." },
      { title: "Şenlik Oyunları", desc: "Bahçede balon patlatma, yumurta taşıma ve çuval yarışı gibi neşeli oyunlar." },
      { title: "Başarı Sertifikaları Töreni", desc: "Öğretmenimizin her öğrenciye özel hazırladığı 'Başarı Madalyası'nı takması." },
      { title: "2. Sınıfa Uğurlama ve Veda", desc: "Birbirimize sarılma, iyi tatiller dileme ve 2. sınıfa merhaba deme." }
    ],
    section1: {
      title: "Güle Güle 1. Sınıf, Merhaba 2. Sınıf!",
      subtitle: "Bir yılda dev gibi büyüdük; kalbimizde sevgi, zihnimizde bilgi ışıldıyor.",
      layout: "split-visual",
      card: {
        title: "Küçük Yıldızın Başarı Belgesi",
        icon: "🎖️📜",
        desc: "Bu belge şunları söyler:",
        items: [
          { bold: "1. Çok Çalıştın", text: "Okumayı, yazmayı, problem çözmeyi sabırla öğrendin." },
          { bold: "2. Harika Bir Arkadaş Oldun", text: "Paylaştın, gülümsedin, kurallara saygı duydun." },
          { bold: "3. Artık 2. Sınıfsın!", text: "Geleceğin aydınlık çocuğu olarak yeni sınıfa gururla geçiyorsun." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="3"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">YIL SONU ŞENLİĞİ: 1. SINIF BAŞARI SERTİFİKASI</text>

        <!-- Başarı Sertifikası (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="3"/>
        <text x="155" y="110" font-size="24" text-anchor="middle">📜⭐</text>
        <text x="155" y="135" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">BAŞARI BELGESİ</text>
        <text x="155" y="155" font-size="9" fill="#a16207" text-anchor="middle">1. Sınıfı Üstün Gayretle</text>
        <text x="155" y="170" font-size="9" fill="#a16207" text-anchor="middle">Tamamlayan Yıldız Öğrenci</text>
        <text x="155" y="195" font-size="8.5" font-weight="bold" fill="#15803d" text-anchor="middle">Tebrikler! Artık 2. Sınıfsın 🎓</text>

        <!-- Madalya ve Şenlik (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="385" cy="130" r="32" fill="#eab308" stroke="#facc15" stroke-width="3"/>
        <text x="385" y="142" font-size="28" text-anchor="middle">🥇</text>
        <text x="385" y="185" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Yılın Şampiyonu</text>
        <text x="385" y="205" font-size="9" fill="#cbd5e1" text-anchor="middle">Emek, Sevgi ve Başarı</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Tüm öğrencilerimizle gurur duyuyoruz, iyi tatiller dileriz!</text>
      </svg>`
    },
    section2: {
      title: "Şenlik Oyunları ve Veda Sarılması",
      subtitle: "Kahkahalar bahçeyi doldurur, gözler sevinçle parlar.",
      cards: [
        {
          badge: "Şenlik",
          title: "Bahçe Oyunları",
          desc: "Tüm sınıfın okul bahçesinde müzik eşliğinde neşeyle balon ve bayrak oyunları oynaması."
        },
        {
          badge: "Sergi",
          title: "Ürünler Panoda",
          desc: "Yıl boyunca defterlere çizilen en güzel kenar süsleri ve resimleri ailelere sergileme."
        },
        {
          badge: "Veda",
          title: "İyi Tatiller Dileği",
          desc: "Öğretmenimize ve arkadaşlarımıza sarılıp 'Eylül'de 2. sınıfta görüşürüz' deme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Tören: '1. Sınıf Mezuniyet Madalyası Töreni'",
      desc: "Her öğrenci tahtaya alkışlarla davet edilir; öğretmeni tarafından madalyası takılır ve fotoğraf çekilir.",
      steps: [
        { title: "Kürsüye Davet", desc: "Adı okunan öğrencinin güler yüzle tahtaya çıkması." },
        { title: "Madalya Takımı", desc: "Öğretmenin tebrik sözleriyle öğrenciye madalyasını takması." },
        { title: "Hatıra Fotoğrafı", desc: "Tüm sınıfın '1. Sınıfı Bitirdik!' diyerek kep veya şapkayla fotoğraf çektirmesi." }
      ],
      criteria: [
        "1 yıl boyunca gösterdiği başarı ve çabanın gururunu yaşayabilme",
        "Arkadaşlarına ve öğretmenine sevgi ve saygıyla veda edebilme",
        "Yaz tatilini verimli, güvenli ve sağlıklı geçirme bilincine sahip olma"
      ]
    },
    tips: {
      safetyTitle: "Yaz Tatili Güvenliği",
      safetyRules: [
        { bold: "Denizde ve Havuzda Dikkat", text: "Yazın denize veya havuza girerken asla büyüklerimizin yanından ayrılmamalı; kolluksuz veya can yeleksiz derin yerlere gitmemeliyiz." }
      ],
      myths: [
        { wrong: "1. sınıf bitti, artık hiç öğrenmeye gerek yok.", correct: "Hayır! Hayat her gün yeni bir şey öğrenmektir; tatilde doğayı incelemek de harika bir derstir." }
      ]
    },
    quiz: {
      question: "1. sınıfı başarıyla tamamlayan bir öğrenci önümüzdeki eğitim-öğretim yılında hangi sınıfa geçecektir?",
      options: [
        { text: "A) 2. Sınıfa! 🎒🎉🎓", isCorrect: true },
        { text: "B) Anaokuluna", isCorrect: false },
        { text: "C) Üniversiteye", isCorrect: false },
        { text: "D) Hiçbir sınıfa", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> 1. sınıfı başarıyla tamamladın ve artık <strong>2. Sınıf öğrencisisin</strong>! Başarıların daim olsun!"
    },
    summaryRules: [
      { bold: "Kendinle Gurur Duy", text: "Sen harika bir 1. sınıf yılı geçirdin." },
      { bold: "Tatilin Tadını Çıkar", text: "Bol bol dinlen, kitap oku, oyun oyna." },
      { bold: "2. Sınıfta Görüşmek Üzere!", text: "Eylül ayında 2. sınıfın yepyeni maceralarında buluşuyoruz!" }
    ],
    homework: "Yaz tatili boyunca en az 10 masal kitabı okuyun ve doğanın tadını doyasıya çıkarın.",
    nextWeekPreview: "2026-2027 Eğitim Öğretim Yılı 1. Sınıf Serbest Etkinlikler Dersi Başarıyla Tamamlandı!"
  }
];

window.CURRICULUM_TERM_2_PART2_GRADE1 = CURRICULUM_TERM_2_PART2_GRADE1;
