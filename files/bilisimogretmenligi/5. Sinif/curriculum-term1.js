/**
 * 5. Sınıf Bilişim Teknolojileri ve Yazılım - 1. Dönem Müfredat Verileri (Hafta 1 - 10)
 * Türkiye Yüzyılı Maarif Modeli
 */

const CURRICULUM_TERM_1_GRADE5 = [
  // 1. HAFTA
  {
    week: 1,
    date: "14 - 20 Eylül",
    hours: "2 Saat",
    unit: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Bilişim ile Tanışıyorum & Teknolojinin Gelişimi",
    subtitle: "Bilgi, İletişim ve Teknoloji Kavramları; Abaküsten Günümüze Bilişimin Serüveni",
    outcomeCode: "BTY.5.1.1",
    targetSkill: "Kavramsal Analiz & Sınıflandırma",
    curiosityQuestion: "İlk bilgisayarlar bir oda büyüklüğünde ve tonlarca ağırlıktayken, bugün cebimizdeki akıllı telefonlar onlardan nasıl milyonlarca kat daha güçlü olabildi?",
    roadmap: [
      { title: "Bilişim Nedir?", desc: "Bilgi ve iletişim kelimelerinin birleşimiyle oluşan dijital dünya." },
      { title: "Temel Kavramlar", desc: "Veri, bilgi, iletişim ve teknoloji arasındaki farklar." },
      { title: "Teknolojinin Evrimi", desc: "Taş tabletlerden abaküse, delikli kartlardan mikroişlemcilere." },
      { title: "Günlük Yaşamda Bilişim", desc: "Eğitimde, sağlıkta, ulaşımda ve iletişimde hayatımızı kolaylaştıran dijital araçlar." }
    ],
    section1: {
      title: "Bilişim ve Teknoloji Dünyasının Temel Taşları",
      subtitle: "Bilişim sadece bilgisayar demek değildir; bilginin işlenmesi ve aktarılması sanatıdır.",
      layout: "split-visual",
      card: {
        title: "Temel Tanımlar",
        icon: "💡",
        desc: "Dijital çağı anlamak için bilmemiz gereken 4 sihirli kelime:",
        items: [
          { bold: "Veri (Data)", text: "İşlenmemiş ham gerçekler (Örn: '25', 'Pazartesi', 'Kırmızı')." },
          { bold: "Bilgi (Information)", text: "Verinin anlamlı ve işlenmiş hali (Örn: 'Pazartesi günü hava sıcaklığı 25 derecedir')." },
          { bold: "İletişim", text: "Bilginin iki veya daha fazla kişi/cihaz arasında aktarılması." },
          { bold: "Bilişim (Bilişim Teknolojileri)", text: "Bilginin bilgisayarlar aracılığıyla toplanması, işlenmesi, saklanması ve iletilmesi bilimi." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="100" height="70" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="70" y="65" fill="#a7f3d0" font-size="13" font-weight="bold" text-anchor="middle">HAM VERİ</text>
        <text x="70" y="85" fill="#94a3b8" font-size="10" text-anchor="middle">Sayılar, Harfler</text>
        
        <path d="M125 65 H165" stroke="#34d399" stroke-width="3" marker-end="url(#arrow)"/>
        
        <rect x="170" y="20" width="90" height="90" rx="16" fill="#065f46" stroke="#34d399" stroke-width="2.5"/>
        <text x="215" y="60" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">BİLGİSAYAR</text>
        <text x="215" y="80" fill="#a7f3d0" font-size="10" text-anchor="middle">İşleme (CPU)</text>
        
        <path d="M265 65 H305" stroke="#34d399" stroke-width="3"/>
        
        <rect x="310" y="30" width="80" height="70" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="350" y="65" fill="#bae6fd" font-size="13" font-weight="bold" text-anchor="middle">BİLGİ</text>
        <text x="350" y="85" fill="#94a3b8" font-size="10" text-anchor="middle">Anlamlı Rapor</text>
        
        <rect x="50" y="145" width="300" height="70" rx="14" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
        <text x="200" y="175" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">BİLİŞİM = BİLGİ + İLETİŞİM</text>
        <text x="200" y="198" fill="#94a3b8" font-size="11" text-anchor="middle">Günün her anında hayatımızı kolaylaştıran dijital güç!</text>
      </svg>`,
      caption: "Verinin Bilgisayarda İşlenip Anlamlı Bilgiye Dönüşüm Süreci"
    },
    section2: {
      title: "Geçmişten Günümüze Bilişim Teknolojileri",
      subtitle: "İnsanlığın hesaplama ve iletişim araçlarındaki devrimsel yolculuğu.",
      layout: "cards-2",
      cards: [
        {
          title: "Mekanik Çağdan Elektronik Çağa",
          icon: "🕰️",
          desc: "Tarihin ilk hesap makineleri:",
          items: [
            { bold: "Abaküs (M.Ö. 2400)", text: "Boncukların tellere dizilmesiyle yapılan tarihin ilk hesap aracı." },
            { bold: "Pascaline (1642)", text: "Dişli çarklarla çalışan ilk mekanik toplama makinesi." },
            { bold: "ENIAC (1946)", text: "30 ton ağırlığında, 167 metrekare yer kaplayan ilk elektronik genel amaçlı bilgisayar!" }
          ]
        },
        {
          title: "Mikroişlemci Devrimi ve İnternet",
          icon: "🚀",
          desc: "Bilgisayarların evlere ve ceplere girişi:",
          items: [
            { bold: "Kişisel Bilgisayarlar (PC - 1980'ler)", text: "Monitör ve klavyesiyle ofis ve ev masalarına giren bilgisayarlar." },
            { bold: "World Wide Web (İnternet - 1990'lar)", text: "Tüm dünyayı birbirine bağlayan küresel ağ." },
            { bold: "Akıllı Cihazlar (Günümüz)", text: "Cebe sığan, yapay zekâlı, dokunmatik süper bilgisayarlar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Zaman Tüneli Kartları'",
      subtitle: "Teknolojik aletleri tarihlerine ve kullanım amaçlarına göre eşleştiriyoruz.",
      steps: [
        { title: "Cihazları Listele", desc: "Tahtada gösterilen 6 aracı (Abaküs, ENIAC, Daktilo, Masaüstü PC, Akıllı Telefon, Akıllı Saat) inceleyin." },
        { title: "Kronolojik Sırala", desc: "En eskiden en yeniye doğru zaman şeridinde doğru sıraya dizin." },
        { title: "Farkları Karşılaştır", desc: "Boyut, hız ve kullanım kolaylığı açısından aralarındaki dev farkları tartışın." }
      ],
      criteria: [
        "Veri ve bilgi kavramları arasındaki farkı açıklayabilme",
        "Geçmişten bugüne bilişim cihazlarını kronolojik sıralayabilme",
        "Bilişim teknolojilerinin günlük hayattaki rollerini örnekleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Teknolojiyi Tanırken Unutulmaması Gerekenler",
      safetyRules: [
        { bold: "Teknoloji Bir Araçtır", text: "Teknoloji tek başına bir amaç değil; hayatımızı kolaylaştıran, öğrenmemizi hızlandıran bir araçtır." },
        { bold: "Üretici Zihin", text: "Sadece oyun oynayan bir tüketici değil, oyun ve program tasarlayan bir üretici olmayı hedefleyin." }
      ],
      myths: [
        { wrong: "İlk bilgisayarlar da bugünkü gibi küçücük ve hafif yapılıyordu.", correct: "İlk elektronik bilgisayar olan ENIAC yaklaşık 30 ton ağırlığındaydı ve koca bir spor salonunu kaplıyordu!" }
      ]
    },
    quiz: {
      question: "Ham ve işlenmemiş gerçeklere 'Veri' denir. Peki bu verinin bilgisayar tarafından işlenip anlamlı ve kullanılabilir hale gelmiş haline ne ad verilir?",
      options: [
        { text: "A) İnternet", isCorrect: false },
        { text: "B) Bilgi", isCorrect: true },
        { text: "C) Donanım", isCorrect: false },
        { text: "D) Kablo", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Veriler (sayılar, harfler) bilgisayarın işlemcisinde işlendiğinde anlamlı bir sonuç yani <strong>Bilgi (Information)</strong> ortaya çıkar."
    },
    summaryRules: [
      { bold: "Bilişim", text: "Bilgi + İletişim kelimelerinin birleşimidir." },
      { bold: "Veri İşlenir Bilgi Olur", text: "Bilgisayarlar veri işleme makineleridir." },
      { bold: "Devasa Geçmiş", text: "Tonlarca ağırlıktan cebe sığan akıllı cihazlara ulaştık." }
    ],
    homework: "Evinizde bulunan ve içinde bilgisayar çipi/işlemcisi olan 3 cihazı defterinize yazıp nasıl bir bilişim görevi yaptığını belirtin.",
    nextWeekPreview: "Bilişim Teknolojilerinin Sağlığımıza Etkileri & Doğru Oturuş (Ergonomi) Kuralları!"
  },

  // 2. HAFTA
  {
    week: 2,
    date: "21 - 27 Eylül",
    hours: "2 Saat",
    unit: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Bilişimin Etkileri & Dijital Sağlık (Ergonomi)",
    subtitle: "Teknolojinin Olumlu/Olumsuz Yönleri, Doğru Oturuş Kuralları ve 20-20-20 Kuralı",
    outcomeCode: "BTY.5.1.2",
    targetSkill: "Öz Düzenleme & Sağlıklı Yaşam Becerisi",
    curiosityQuestion: "Bilgisayar başında kambur oturup saatlerce ekrana baktığımızda boynumuzun 27 kilogramlık bir ağırlığı taşıdığını biliyor muydunuz?",
    roadmap: [
      { title: "Teknolojinin Olumlu Etkileri", desc: "Hızlı bilgiye erişim, mesafe tanımayan iletişim, online kütüphaneler." },
      { title: "Teknolojinin Riskleri", desc: "Hareketsizlik, duruş bozuklukları, göz yorgunluğu ve ekran bağımlılığı." },
      { title: "Ergonomi Nedir?", desc: "İnsan vücudunun çalıştığı ortamla uyumunu sağlayan bilim dalı." },
      { title: "20-20-20 Kuralı", desc: "Gözlerimizi koruyan uluslararası altın kural." }
    ],
    section1: {
      title: "Teknolojinin İki Yüzü: Fırsatlar ve Riskler",
      subtitle: "Bilinçli kullanıldığında süper güç, kontrolsüz kullanıldığında zaman ve sağlık hırsızı.",
      layout: "cards-2",
      cards: [
        {
          title: "Olumlu Yönler (Fırsatlar)",
          icon: "🌟",
          desc: "Bilişimin hayatımıza kattığı değerler:",
          items: [
            { bold: "Anında Bilgiye Ulaşım", text: "Milyonlarca kitaba ve ansiklopediye tek tıkla ulaşabilme." },
            { bold: "Zaman ve Enerji Tasarrufu", text: "Bankacılık, e-Devlet ve uzaktan eğitimle kuyruklardan kurtulma." },
            { bold: "Yaratıcılık ve Üretim", text: "Kendi çizimlerimizi, müziklerimizi ve kodlarımızı üretebilme." }
          ]
        },
        {
          title: "Olumsuz Yönler (Riskler)",
          icon: "⚠️",
          desc: "Aşırı ve kontrolsüz kullanımın tehlikeleri:",
          items: [
            { bold: "Hareketsiz Yaşam (Sedanter)", text: "Obezite, bel-boyun fıtıkları ve omurga eğriliği (skolyoz)." },
            { bold: "Ekran Bağımlılığı", text: "Arkadaşlardan ve aileden kopma, gerçek hayattaki oyunlardan uzaklaşma." },
            { bold: "Uyku Bozuklukları", text: "Gece mavi ışığa maruz kalmanın melatonin hormonunu baskılaması." }
          ]
        }
      ]
    },
    section2: {
      title: "Ergonomi: Bilgisayar Başında Doğru Duruş",
      subtitle: "Vücudumuzu korumak için çalışma masamızı nasıl ayarlamalıyız?",
      layout: "split-visual",
      card: {
        title: "Doğru Oturuş Kuralları",
        icon: "🪑",
        desc: "Akıllı tahta ve bilgisayar karşısında 5 altın kural:",
        items: [
          { bold: "Ekran Mesafesi", text: "Gözleriniz ile ekran arasında 50-70 cm (yaklaşık bir kol boyu) mesafe olmalıdır." },
          { bold: "Ekran Hizası", text: "Ekranın üst kenarı tam göz hizanızda veya biraz aşağısında bulunmalıdır." },
          { bold: "90 Derece Kuralı", text: "Dirsekleriniz, dizleriniz ve beliniz 90 derecelik dik açıda durmalıdır." },
          { bold: "Ayak Desteği", text: "Ayaklar havada sallanmamalı, yere düz basmalı veya ayak desteği konulmalıdır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <line x1="80" y1="180" x2="160" y2="180" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
        <line x1="120" y1="180" x2="120" y2="100" stroke="#94a3b8" stroke-width="6"/>
        
        <circle cx="120" cy="70" r="18" fill="#38bdf8"/>
        <path d="M120 88 V140 H160 V180" stroke="#34d399" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M120 105 H155 V135" stroke="#34d399" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        
        <rect x="230" y="60" width="12" height="100" fill="#64748b"/>
        <rect x="210" y="70" width="80" height="60" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
        <line x1="138" y1="70" x2="210" y2="70" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="175" y="64" fill="#fde68a" font-size="10" text-anchor="middle">Göz Hizası (50-70 cm)</text>
        
        <text x="135" y="125" fill="#a7f3d0" font-size="11" font-weight="bold">90°</text>
        <text x="170" y="165" fill="#a7f3d0" font-size="11" font-weight="bold">90°</text>
      </svg>`,
      caption: "İdeal Ergonomik Bilgisayar Çalışma Pozisyonu"
    },
    workshop: {
      title: "Sınıf İçi 'Ergonomi Denetçisi' Uygulaması",
      subtitle: "Sıra arkadaşımızın oturuşunu kontrol edip doğru pozisyona getiriyoruz.",
      steps: [
        { title: "Duruşunu İncele", desc: "Arkadaşınızın bilgisayar başında nasıl oturduğuna bakın: Sırtı dik mi, ayakları yere basıyor mu?" },
        { title: "20-20-20 Kuralını Dene", desc: "Her 20 dakikada bir, 20 saniye boyunca, 20 fit (yaklaşık 6 metre) uzağa bakın." },
        { title: "Mini Egzersiz", desc: "Omuzları geriye yuvarlama, başı sağa-sola eğme ve bilek esnetme hareketlerini yapın." }
      ],
      criteria: [
        "Ergonomi kurallarına uygun şekilde oturma alışkanlığı kazanma",
        "20-20-20 kuralının göz sağlığı için önemini açıklayabilme",
        "Ekran başında geçirilen süreyi planlayabilme"
      ]
    },
    tips: {
      safetyTitle: "20-20-20 Göz Sağlığı Kuralı",
      safetyRules: [
        { bold: "20 Dakikada Bir", text: "Ekrana kesintisiz bakmayın; her 20 dakikada bir mola verin." },
        { bold: "20 Saniye Süreyle", text: "Gözlerinizi ekrandan ayırıp dinlendirin." },
        { bold: "20 Fit (6 Metre) Uzağa", text: "Pencereden dışarı, uzak bir ağaca veya duvardaki bir noktaya bakın." }
      ],
      myths: [
        { wrong: "Karanlık odada sadece telefonun/bilgisayarın ışığıyla çalışmak gözü daha az yorar.", correct: "Zifiri karanlıkta parlayan parlak ekran göz bebeklerini aşırı yorar; oda aydınlatması ile ekran parlaklığı dengeli olmalıdır." }
      ]
    },
    quiz: {
      question: "Bilgisayar kullanırken göz sağlığımızı korumak için önerilen '20-20-20 kuralı' aşağıdakilerden hangisini ifade eder?",
      options: [
        { text: "A) Günde 20 saat bilgisayar oynamak", isCorrect: false },
        { text: "B) Her 20 dakikada bir, 20 saniye boyunca en az 20 fit (6 metre) uzağa bakmak", isCorrect: true },
        { text: "C) 20 yaşından önce bilgisayara dokunmamak", isCorrect: false },
        { text: "D) Ekranı 20 cm mesafeden izlemek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 20-20-20 kuralı göz kaslarımızın gevşemesini ve göz kuruluğunun önlenmesini sağlayan bilimsel kuraldır."
    },
    summaryRules: [
      { bold: "90 Derece Duruş", text: "Bel, dirsek ve dizler dik açıda olmalıdır." },
      { bold: "20-20-20 Kuralı", text: "Gözlerimizi düzenli dinlendirmeliyiz." },
      { bold: "Ekran Bağımlılığına Hayır", text: "Gerçek hayat, spor ve arkadaşlık her şeyden değerlidir." }
    ],
    homework: "Evdeki çalışma masanızın ergonomik kurallara uyup uymadığını kontrol edip 1 eksik yönünü düzeltin (Örn: Ayak altına kutu koymak).",
    nextWeekPreview: "Dijital Vatandaşlık & İnternette Bıraktığımız Dijital Ayak İzleri!"
  },

  // 3. HAFTA
  {
    week: 3,
    date: "28 Eylül - 04 Ekim",
    hours: "2 Saat",
    unit: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Dijital Vatandaşlık & Dijital Ayak İzi",
    subtitle: "Dijital Kimlik, e-Devlet/e-Okul, Sanal Nezaket (Netiket) ve Silinmeyen İzler",
    outcomeCode: "BTY.5.1.3",
    targetSkill: "Dijital Vatandaşlık & Siber Etik",
    curiosityQuestion: "Kumsalda yürürken bıraktığınız ayak izleri dalgalarla silinir; peki internette tıkladığınız bir video veya yaptığınız bir yorum hiç silinir mi?",
    roadmap: [
      { title: "Dijital Vatandaş Kimdir?", desc: "İnternet dünyasında hak ve sorumluluklarının bilincinde olan birey." },
      { title: "Dijital Ayak İzi Nedir?", desc: "İnternette gezinirken geride bıraktığımız tüm tıklama, arama ve paylaşımlar." },
      { title: "Sanal Nezaket (Netiket)", desc: "İnternette iletişim kurarken uymamız gereken ahlaki nezaket kuralları." },
      { title: "Dijital Kamu Hizmetleri", desc: "e-Okul, e-Devlet, EBA ve ÖBA gibi dijital platformların güvenli kullanımı." }
    ],
    section1: {
      title: "Dijital Ayak İzi: Sanal Dünyanın Gölgesi",
      subtitle: "İnternette attığınız her adım bir kayıt olarak sunucularda saklanır.",
      layout: "split-visual",
      card: {
        title: "Aktif ve Pasif Ayak İzleri",
        icon: "👣",
        desc: "İnternette geride bıraktığımız izlerin türleri:",
        items: [
          { bold: "Aktif Ayak İzi", text: "Kendi isteğinizle yaptığınız paylaşımlar: Fotoğraf yüklemek, sosyal medyada yorum yazmak, e-posta atmak." },
          { bold: "Pasif Ayak İzi", text: "Siz farkında olmadan kaydedilen izler: Ziyaret ettiğiniz siteler, IP adresiniz, arama geçmişiniz." },
          { bold: "Silinmezlik Kuralı", text: "İnternette paylaşılan bir şey 'Sil' butonuna basılsa bile başka biri tarafından ekran görüntüsü alınmış olabilir!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
        
        <path d="M120 170 C100 150 90 120 110 90 C125 70 145 75 145 100 C145 130 135 155 120 170 Z" fill="#38bdf8" opacity="0.8"/>
        <circle cx="115" cy="55" r="7" fill="#38bdf8"/>
        <circle cx="128" cy="58" r="6" fill="#38bdf8"/>
        <circle cx="140" cy="65" r="5" fill="#38bdf8"/>
        <circle cx="150" cy="74" r="4" fill="#38bdf8"/>
        <circle cx="158" cy="85" r="3.5" fill="#38bdf8"/>

        <rect x="180" y="45" width="180" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
        <text x="195" y="65" fill="#ffffff" font-size="11" font-weight="bold">🔍 Arama Geçmişi</text>
        <text x="195" y="78" fill="#94a3b8" font-size="9">Google, YouTube aramaları</text>

        <rect x="180" y="95" width="180" height="40" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
        <text x="195" y="115" fill="#ffffff" font-size="11" font-weight="bold">💬 Yorumlar & Beğeniler</text>
        <text x="195" y="128" fill="#94a3b8" font-size="9">Sanal dünyadaki sözlerimiz</text>

        <rect x="180" y="145" width="180" height="40" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1"/>
        <text x="195" y="165" fill="#ffffff" font-size="11" font-weight="bold">📍 Konum ve Girişler</text>
        <text x="195" y="178" fill="#94a3b8" font-size="9">Cihaz ve IP kayıtları</text>
      </svg>`,
      caption: "İnternette Geride Bıraktığımız Dijital İzlerin Haritası"
    },
    section2: {
      title: "Sanal Nezaket (Netiket) Kuralları",
      subtitle: "Gerçek hayatta kaba olan davranışlar internette de suç ve kabalıktır.",
      layout: "cards-2",
      cards: [
        {
          title: "Netiket (Netiquette) Nedir?",
          icon: "🤝",
          desc: "İnternette uyulması gereken görgü kuralları:",
          items: [
            { bold: "BÜYÜK HARFLE YAZMAYIN", text: "İnternette TÜMÜ BÜYÜK HARF YAZMAK karşı tarafa bağırmak, azarlamak anlamına gelir!" },
            { bold: "Saygılı Dil", text: "Fikrine katılmadığınız kişilere asla hakaret veya alay içeren kelimeler yazmayın." },
            { bold: "İzinsiz Paylaşmayın", text: "Arkadaşınızın fotoğrafını veya sırrını onun izni olmadan asla bir grupta paylaşmayın." }
          ]
        },
        {
          title: "İyi Bir Dijital Vatandaşın Özellikleri",
          icon: "🛡️",
          desc: "Geleceğin bilinçli bireyi:",
          items: [
            { bold: "Doğrulamadan Paylaşmaz", text: "Gördüğü her sansasyonel habere hemen inanıp başkalarına yaymaz." },
            { bold: "Telif Haklarına Uyar", text: "Başkalarının emeğini kendi yapmış gibi kopyalayıp sunmaz." },
            { bold: "Siber Zorbalığa Karşı Durur", text: "Biriyle internette alay edildiğinde ona destek olur, zorbalığı ihbar eder." }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'Dijital Ayak İzi Temizliği'",
      subtitle: "Kendi dijital güvenliğimizi denetleyip bir netiket bildirgesi hazırlıyoruz.",
      steps: [
        { title: "Adını Google'da Ara", desc: "Adınızı ve soyadınızı tırnak içinde (\"Ad Soyad\") aratıp internette hakkınızda hangi bilgilerin çıktığına bakın." },
        { title: "Gizlilik Ayarı Yap", desc: "Kullandığınız hesapların (EBA vb.) profillerini sadece tanıdıklarınıza açık hale getirin." },
        { title: "Netiket Sözleşmesi", desc: "Sınıf panomuza 'Sınıfımızın 5 Dijital Kuralı' afişini hazırlayıp imzalayın." }
      ],
      criteria: [
        "Dijital ayak izinin kalıcılığını ve sonuçlarını kavrayabilme",
        "Netiket kurallarına uygun mesajlar yazabilme",
        "Kişisel bilgileri internette gizli tutma bilinci"
      ]
    },
    tips: {
      safetyTitle: "İnternette Paylaşım Yapmadan Önce 'DÜŞÜN' Kuralı",
      safetyRules: [
        { bold: "D - Doğru mu?", text: "Paylaştığın bilgi kesinlikle doğru ve teyitli mi?" },
        { bold: "Ü - Üzücü mü?", text: "Bu paylaşım bir arkadaşını veya aileyi üzer mi?" },
        { bold: "Ş - Şart mı?", text: "Bunu herkesin bilmesi gerçekten gerekli mi?" },
        { bold: "N - Nazik mi?", text: "Kullandığın üslup nazik ve saygılı mı?" }
      ],
      myths: [
        { wrong: "İnternette sahte bir isimle (takma adla) yazarsam kimse benim kim olduğumu bulamaz.", correct: "Her cihazın internete bağlanırken kullandığı bir IP adresi vardır ve emniyet güçleri her türlü yasa dışı işlemi saniyeler içinde tespit edebilir." }
      ]
    },
    quiz: {
      question: "İnternette arkadaşınıza e-posta veya mesaj yazarken TÜMÜ BÜYÜK HARFLERLE YAZMAK (Örn: 'BURAYA GEL') sanal dünyada ne anlama gelir?",
      options: [
        { text: "A) Çok kibar ve neşeli olmak", isCorrect: false },
        { text: "B) Karşı tarafa bağırmak ve azarlamak", isCorrect: true },
        { text: "C) Hızlı yazdığını göstermek", isCorrect: false },
        { text: "D) Yazım hatası yapmamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> İnternet nezaketinde (Netiket) tamamen büyük harflerle yazmak bağırmak anlamına gelir ve kaba bir davranış sayılır."
    },
    summaryRules: [
      { bold: "Dijital Ayak İzi Silinmez", text: "Paylaşmadan önce iki kez düşünün." },
      { bold: "Netiket Şarttır", text: "Sanal ortamda da nazik ve adil olun." },
      { bold: "Bilinçli Dijital Vatandaş", text: "Haklarını ve sorumluluklarını bilen kazanır." }
    ],
    homework: "Ailenizle birlikte 'Dijital Ayak İzi' kavramını konuşup anne ve babanıza internette ilk bıraktıkları dijital izi sorun.",
    nextWeekPreview: "Yapay Zekâya Giriş: Bilgisayarlar Nasıl Öğrenir ve Karar Verir?"
  },

  // 4. HAFTA
  {
    week: 4,
    date: "05 - 11 Ekim",
    hours: "2 Saat",
    unit: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Yapay Zekâya Giriş: Akıllı Sistemler",
    subtitle: "Yapay Zekâ Nedir? İnsan Zekâsı ile Farkı, Günlük Hayattaki Örnekler ve Karar Mekanizmaları",
    outcomeCode: "BTY.5.1.4",
    targetSkill: "Yapay Zekâ Okuryazarlığı & Sorgulama",
    curiosityQuestion: "Telefonunuz yüzünüzü nasıl tanıyor veya YouTube tam da sizin seveceğiniz bir videoyu nasıl önünüze getiriyor?",
    roadmap: [
      { title: "Yapay Zekâ (YZ) Nedir?", desc: "İnsan zekâsını taklit ederek öğrenen ve problem çözen yazılımlar." },
      { title: "Geleneksel Kodlama vs YZ", desc: "Sabit kurallar yerine örnek verilerden öğrenme farkı." },
      { title: "Evimizdeki Yapay Zekâ", desc: "Otonom robot süpürgeler, sesli asistanlar, yüz tanıma kilitleri." },
      { title: "Etik ve Güvenlik", desc: "Yapay zekânın sınırları ve insan denetiminin önemi." }
    ],
    section1: {
      title: "Yapay Zekâ (AI) Nasıl Çalışır?",
      subtitle: "Geleneksel programlar sadece söylenen kuralı yapar; yapay zekâ ise tecrübeyle öğrenir.",
      layout: "split-visual",
      card: {
        title: "Geleneksel Kod ile YZ Arasındaki Fark",
        icon: "🧠",
        desc: "İki farklı yazılım yaklaşımı:",
        items: [
          { bold: "Klasik Programlama", text: "Yazılımcı bütün kuralları satır satır yazar. 'Eğer kırmızıysa dur, yeşilse geç.' Kural dışı bir durumda bilgisayar kilitlenir." },
          { bold: "Yapay Zekâ (Makine Öğrenmesi)", text: "Bilgisayara binlerce elma ve armut resmi gösterilir. Bilgisayar renk, şekil ve sap özelliklerini kendi kendine öğrenir!" },
          { bold: "Sürekli Gelişim", text: "Ne kadar çok veri görürse tahmin yeteneği o kadar artar." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
        
        <circle cx="90" cy="80" r="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="90" y="75" fill="#ffffff" font-size="20" text-anchor="middle">🍎</text>
        <text x="90" y="95" fill="#a7f3d0" font-size="10" text-anchor="middle">1000 Elma</text>

        <circle cx="90" cy="150" r="30" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="90" y="145" fill="#ffffff" font-size="20" text-anchor="middle">🍐</text>
        <text x="90" y="165" fill="#fde68a" font-size="10" text-anchor="middle">1000 Armut</text>

        <path d="M130 115 H190" stroke="#ec4899" stroke-width="3" stroke-dasharray="4 4"/>

        <rect x="195" y="70" width="90" height="90" rx="14" fill="#831843" stroke="#f43f5e" stroke-width="2"/>
        <text x="240" y="110" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">YAPAY ZEKÂ</text>
        <text x="240" y="128" fill="#fbcfe8" font-size="10" text-anchor="middle">Örüntü Öğrenme</text>

        <path d="M290 115 H330" stroke="#10b981" stroke-width="3"/>

        <rect x="335" y="85" width="45" height="60" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <text x="357" y="120" fill="#a7f3d0" font-size="16" font-weight="bold" text-anchor="middle">✓</text>
      </svg>`,
      caption: "Yapay Zekânın Binlerce Veriden Örüntü Çıkararak Öğrenme Mantığı"
    },
    section2: {
      title: "Hayatımızın İçindeki Akıllı Teknolojiler",
      subtitle: "Farkında olmadan her gün onlarca yapay zekâ sistemiyle karşılaşıyoruz.",
      layout: "cards-3",
      cards: [
        {
          title: "Görsel Zekâ (Kamera)",
          icon: "📷",
          desc: "Görüntüleri anlama:",
          items: [
            { bold: "Yüz Tanıma", text: "Telefon kilidini açan yüz tarama sistemleri." },
            { bold: "Otonom Araçlar", text: "Yoldaki yayaları ve trafik ışıklarını gören akıllı arabalar." }
          ]
        },
        {
          title: "Ses ve Dil Zekâsı",
          icon: "🎙️",
          desc: "Konuşmayı anlama:",
          items: [
            { bold: "Sesli Asistanlar", text: "Siri, Google Asistan, Alexa gibi sorularımıza yanıt veren sistemler." },
            { bold: "Anında Çeviri", text: "Farklı dilleri saniyesinde tercüme eden araçlar." }
          ]
        },
        {
          title: "Öneri Sistemleri",
          icon: "🎯",
          desc: "Tercihleri tahmin etme:",
          items: [
            { bold: "Müzik ve Video", text: "Spotify veya YouTube'un dinlediğimiz şarkılara göre yeni şarkı önermesi." },
            { bold: "Akıllı Haritalar", text: "Trafiği tahmin edip en hızlı rotayı çizen navigasyon." }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'Akıllı mı, Değil mi?' Testi",
      subtitle: "Sınıftaki cihazları inceliyor, hangisinin yapay zekâlı olduğunu buluyoruz.",
      steps: [
        { title: "Cihazları İncele", desc: "1. Basit Hesap Makinesi, 2. Akıllı Süpürge, 3. Mekanik Çalar Saat, 4. Sesle Çalışan Asistan." },
        { title: "Karşılaştır", desc: "Hangisi kendi kendine öğrenip durumunu değiştiriyor? Hangisi sadece tek bir düğmeye basınca çalışıyor?" },
        { title: "YZ Tanımı Yap", desc: "Bir cihaza 'Yapay Zekâlı' diyebilmek için onda hangi özelliklerin olması gerektiğini maddeler halinde yazın." }
      ],
      criteria: [
        "Yapay zekâ ile klasik programlama arasındaki farkı ayırt edebilme",
        "Günlük yaşamdan 3 farklı yapay zekâ örneği verebilme",
        "Yapay zekânın veri ile beslendiğini kavrayabilme"
      ]
    },
    tips: {
      safetyTitle: "Yapay Zekâyı Kullanırken Unutmayın",
      safetyRules: [
        { bold: "Yapay Zekâ Bir İnsan Değildir", text: "Duyguları, vicdanı veya gerçek bilinci yoktur; sadece matematiksel olasılıkları hesaplar." },
        { bold: "Her Dediği Doğru Olmayabilir", text: "Bazen 'halüsinasyon' görerek yanlış veya uydurma bilgiler üretebilir; her zaman doğrulayın." }
      ],
      myths: [
        { wrong: "Yapay zekâ her şeyi bilir ve asla hata yapmaz.", correct: "Yapay zekâ sadece ona öğretilen veriler kadar bilir; veriler hatalıysa yapay zekâ da hatalı kararlar verir." }
      ]
    },
    quiz: {
      question: "Aşağıdakilerden hangisi bir 'Yapay Zekâ' uygulamasına örnek OLARAK GÖSTERİLEBİLİR?",
      options: [
        { text: "A) Standart bir el fenerinin açma kapama düğmesi", isCorrect: false },
        { text: "B) Odanın haritasını çıkarıp engelleri görerek yönünü belirleyen robot süpürge", isCorrect: true },
        { text: "C) Pil ile çalışan mekanik duvar saati", isCorrect: false },
        { text: "D) Rüzgâr estikçe dönen fırıldak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Robot süpürgeler sensör ve yapay zekâ algoritmalarıyla odanın haritasını öğrenip engellere çarpmadan rotalarını güncellerler."
    },
    summaryRules: [
      { bold: "YZ Veri ile Öğrenir", text: "Ne kadar kaliteli veri, o kadar başarılı sistem." },
      { bold: "Hayatımızın İçinde", text: "Navigasyon, sesli asistanlar ve kameralar." },
      { bold: "İnsan Kontrolü Şarttır", text: "En akıllı karar verici daima insandır." }
    ],
    homework: "Evinizde veya çevrenizde yapay zekâ ile çalışan 1 teknolojik cihazı tespit edip nasıl çalıştığını bir paragrafla yazın.",
    nextWeekPreview: "Bilgisayar Sistemleri: Donanım ve Yazılım Ayrımı (Ruh ve Beden İkilemi)!"
  },

  // 5. HAFTA
  {
    week: 5,
    date: "12 - 18 Ekim",
    hours: "2 Saat",
    unit: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Bilgisayar Sistemleri: Donanım ve Yazılım",
    subtitle: "Ruh ve Beden İkilemi: Donanım (Hardware) ve Yazılım (Software) Arasındaki Temel Farklar",
    outcomeCode: "BTY.5.1.5",
    targetSkill: "Sistem Analizi & Bileşen Sınıflandırması",
    curiosityQuestion: "Bir bilgisayarın tüm kabloları, ekranı ve kasası sapasağlam olsa ama içinde hiçbir işletim sistemi veya program olmasa çalışabilir mi?",
    roadmap: [
      { title: "Bilgisayar Sistemi Nedir?", desc: "Donanım ve yazılımın mükemmel uyumuyla çalışan elektronik sistem." },
      { title: "Donanım (Hardware)", desc: "Gözle görülebilen, elle tutulabilen tüm fiziksel parçalar." },
      { title: "Yazılım (Software)", desc: "Donanıma ne yapacağını söyleyen komutlar, kodlar ve programlar." },
      { title: "Ruh ve Beden Analojisi", desc: "Donanım bir beden ise, yazılım onun içindeki ruhtur ve akıldır." }
    ],
    section1: {
      title: "Donanım ve Yazılım: İkisi Bir Arada",
      subtitle: "Biri olmadan diğeri hiçbir işe yaramayan ayrılmaz iki parça.",
      layout: "cards-2",
      cards: [
        {
          title: "Donanım (Hardware - Beden)",
          icon: "🖥️",
          desc: "Fiziksel olan her şey:",
          items: [
            { bold: "Dokunulabilir Parçalar", text: "Monitör, klavye, fare, kasa, anakart, sabit disk, kablolar." },
            { bold: "Görevi", text: "Yazılımdan gelen komutları elektrik sinyalleriyle fiziksel olarak yerine getirmek." },
            { bold: "Örnek", text: "Müzik dinlemek için taktığınız kulaklık bir donanımdır." }
          ]
        },
        {
          title: "Yazılım (Software - Ruh / Akıl)",
          icon: "💿",
          desc: "Dijital olan tüm kodlar:",
          items: [
            { bold: "Görünmez Komutlar", text: "İşletim sistemleri (Windows, Pardus), oyunlar, kelime işlemciler, web tarayıcılar." },
            { bold: "Görevi", text: "Kullanıcının isteklerini bilgisayarın anlayacağı 1 ve 0 diline çevirmek." },
            { bold: "Örnek", text: "Kulaklıktan çalan MP3 müzik dosyası ve müzik çalar uygulaması bir yazılımdır." }
          ]
        }
      ]
    },
    section2: {
      title: "Yazılım Türleri: Sistem ve Uygulama",
      subtitle: "Bilgisayardaki yazılımlar hiyerarşik bir görev dağılımına sahiptir.",
      layout: "split-visual",
      card: {
        title: "Yazılımların Sınıflandırılması",
        icon: "📂",
        desc: "İki ana yazılım grubu:",
        items: [
          { bold: "1. Sistem Yazılımları (İşletim Sistemleri)", text: "Bilgisayarın açılmasını ve tüm donanımların birbiriyle konuşmasını sağlayan ana yazılım (Pardus, Windows, macOS, Android, iOS)." },
          { bold: "2. Uygulama Yazılımları", text: "Belirli bir işi yapmak için kurduğumuz programlar: Scratch (kodlama), Paint (çizim), Word (yazı), Chrome (web)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        
        <rect x="50" y="40" width="300" height="40" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="200" y="65" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">KULLANICI (BİZ)</text>

        <path d="M200 82 V98" stroke="#94a3b8" stroke-width="2"/>

        <rect x="50" y="100" width="300" height="40" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="200" y="125" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">UYGULAMA YAZILIMI (Scratch, Oyunlar)</text>

        <path d="M200 142 V158" stroke="#94a3b8" stroke-width="2"/>

        <rect x="50" y="160" width="300" height="40" rx="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="185" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">DONANIM (İşlemci, RAM, Ekran)</text>
      </svg>`,
      caption: "Kullanıcı, Yazılım ve Donanım Arasındaki Katmanlı İlişki"
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Donanım mı, Yazılım mı?'",
      subtitle: "10 farklı bilgisayar ögesini doğru kutulara yerleştiriyoruz.",
      steps: [
        { title: "Kelimeleri İncele", desc: "Monitör, Minecraft, Fare, Windows 11, Klavye, YouTube, Anakart, Paint, Kulaklık, Antivirüs." },
        { title: "Sepetlere Ayır", desc: "Hangilerine dokunabilirsiniz? (Donanım Sepeti) Hangileri ekranda çalışan kodlardır? (Yazılım Sepeti)." },
        { title: "Analoji Kur", desc: "Bir araba düşünün: Motor, tekerlek ve direksiyon nedir? Şoförün arabayı kullanma bilgisi nedir?" }
      ],
      criteria: [
        "Donanım ve yazılım arasındaki temel farkı kavrayabilme",
        "Sistem yazılımı ile uygulama yazılımını ayırt edebilme",
        "Donanımın yazılımsız çalışamayacağını açıklayabilme"
      ]
    },
    tips: {
      safetyTitle: "Bilişim Terimlerini Karıştırmayın",
      safetyRules: [
        { bold: "Dokunabiliyorsan Donanım", text: "Eğer elinle tutabiliyor, ağırlığını hissedebiliyorsan donanımdır." },
        { bold: "Çalıştırıyorsan Yazılım", text: "Eğer simgesine tıklayıp açıyor ve kullanıyorsan yazılımdır." }
      ],
      myths: [
        { wrong: "Çok güçlü bir ekran kartı veya işlemci alırsak bilgisayarda yazılıma gerek kalmaz.", correct: "En pahalı ve en güçlü bilgisayar bile içine işletim sistemi yüklenmediğinde sadece pahalı bir metal ve plastik yığınıdır!" }
      ]
    },
    quiz: {
      question: "Bilgisayarda gözle görebildiğimiz ve elimizle dokunabildiğimiz tüm fiziksel parçalara (Kasa, Ekran, Klavye vb.) genel olarak ne ad verilir?",
      options: [
        { text: "A) Yazılım (Software)", isCorrect: false },
        { text: "B) Donanım (Hardware)", isCorrect: true },
        { text: "C) İnternet", isCorrect: false },
        { text: "D) Algoritma", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bilgisayarın fiziksel gövdesini oluşturan tüm bileşenlere <strong>Donanım (Hardware)</strong> denir."
    },
    summaryRules: [
      { bold: "Donanım = Beden", text: "Fiziksel parçalar ve cihazlar." },
      { bold: "Yazılım = Akıl", text: "İşletim sistemi ve uygulamalar." },
      { bold: "Birlikte Güçlü", text: "Biri olmadan diğeri hiçbir işe yaramaz." }
    ],
    homework: "Evinizdeki bilgisayar veya akıllı telefonda yüklü olan 3 uygulama yazılımı ile 3 donanım parçasını defterinize yazın.",
    nextWeekPreview: "Kasanın İçini Açıyoruz: Anakart, İşlemci, RAM ve Giriş-Çıkış Birimleri!"
  },

  // 6. HAFTA
  {
    week: 6,
    date: "19 - 25 Ekim",
    hours: "2 Saat",
    unit: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Dahili ve Harici Donanım Birimleri",
    subtitle: "Kasa İçi Organlar (Anakart, CPU, RAM, Sabit Disk) ve Giriş/Çıkış Aygıtları",
    outcomeCode: "BTY.5.1.5",
    targetSkill: "Donanım Mimarisi & Bileşen Analizi",
    curiosityQuestion: "Bilgisayarın içinde insanın beyni, kalbi, iskeleti ve hafızasına denk gelen elektronik organlar olduğunu biliyor muydunuz?",
    roadmap: [
      { title: "Dahili Donanım (İç Organlar)", desc: "Kasanın veya kapağın içinde gizli duran hayati parçalar." },
      { title: "Anakart, İşlemci (CPU), RAM", desc: "Bilgisayarın iskeleti, beyni ve çalışma masası." },
      { title: "Kalıcı Depolama (SSD / HDD)", desc: "Fotoğraf ve oyunlarımızın saklandığı dev dijital kütüphane." },
      { title: "Harici Donanımlar", desc: "Giriş birimleri (veri veren) ve çıkış birimleri (sonuç gösteren)." }
    ],
    section1: {
      title: "Kasanın İçindeki Hayati Organlar (Dahili Donanım)",
      subtitle: "Bir bilgisayar kasasını açtığımızda gördüğümüz muhteşem mimari.",
      layout: "cards-4",
      cards: [
        {
          title: "Anakart (Motherboard)",
          icon: "🟩",
          desc: "Tüm parçaları birbirine bağlayan dev otoyol ve sinir sistemi."
        },
        {
          title: "İşlemci (CPU - Beyin)",
          icon: "🧠",
          desc: "Milyarlarca matematiksel işlemi saniyede yapan bilgisayarın beyni."
        },
        {
          title: "RAM (Geçici Bellek)",
          icon: "⚡",
          desc: "Açık olan programların çalıştığı hızlı masa. Elektrik kesilince silinir!"
        },
        {
          title: "Sabit Disk (SSD/HDD)",
          icon: "💾",
          desc: "Elektrik kesilse bile dosyaları yıllarca saklayan kalıcı kütüphane."
        }
      ]
    },
    section2: {
      title: "Giriş ve Çıkış Birimleri (Harici Donanım)",
      subtitle: "Bilgisayara bilgi verenler (Giriş) ve bilgisayardan bilgi alanlar (Çıkış).",
      layout: "cards-2",
      cards: [
        {
          title: "Giriş Birimleri (Input)",
          icon: "📥",
          desc: "Dış dünyadan bilgisayara veri aktaran aygıtlar:",
          items: [
            { bold: "Klavye", text: "Yazı ve komut girmemizi sağlar." },
            { bold: "Fare (Mouse)", text: "İmleçle seçim ve tıklama komutu verir." },
            { bold: "Mikrofon", text: "Sesimizi elektrik sinyali olarak bilgisayara aktarır." },
            { bold: "Web Kamerası & Tarayıcı", text: "Görüntüleri ve basılı kâğıtları dijitale aktarır." }
          ]
        },
        {
          title: "Çıkış Birimleri (Output)",
          icon: "📤",
          desc: "İşlenen bilgiyi insana sunan aygıtlar:",
          items: [
            { bold: "Monitör (Ekran)", text: "Görüntüleri ve pikselleri bize gösterir." },
            { bold: "Hoparlör & Kulaklık", text: "İşlenen sesleri duymamızı sağlar." },
            { bold: "Yazıcı (Printer)", text: "Dijital belgeleri kâğıda basar." },
            { bold: "Projeksiyon Cihazı", text: "Görüntüyü perdeye veya akıllı tahtaya yansıtır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Bir PC Topluyoruz'",
      subtitle: "Bilişim sınıfındaki parçaları tanıyıp işlevlerini simüle ediyoruz.",
      steps: [
        { title: "Anakartı İncele", desc: "İşlemci yuvasını, RAM slotlarını ve bağlantı noktalarını gözlemleyin." },
        { title: "RAM vs Sabit Disk", desc: "Masa analojisi kurun: RAM çalışma masasıdır (iş biter toplanır), Sabit Disk ise arkadaki kilitli dolaptır (kalıcıdır)." },
        { title: "Giriş/Çıkış Testi", desc: "Tahtadaki aygıtları 'Giriş' ve 'Çıkış' sepetlerine doğru şekilde ayırın." }
      ],
      criteria: [
        "Dahili donanım parçalarının (CPU, RAM, SSD) görevlerini açıklayabilme",
        "RAM ile Sabit Disk arasındaki geçici/kalıcı farkını kavrayabilme",
        "Giriş ve çıkış birimlerini doğru sınıflandırabilme"
      ]
    },
    tips: {
      safetyTitle: "Donanım Güvenliği İpucu",
      safetyRules: [
        { bold: "Statik Elektrik Tehlikesi", text: "Bilgisayar parçalarına dokunmadan önce metal bir yüzeye dokunarak vücudunuzdaki statik elektriği boşaltın." },
        { bold: "Zorlamadan Takın", text: "RAM veya kablolar sadece tek bir yönde oturur; asla aşırı güç uygulayarak zorlamayın." }
      ],
      myths: [
        { wrong: "RAM belleği ne kadar büyükse bilgisayar o kadar çok dosya saklar.", correct: "Dosyaları saklayan parça Sabit Disktir (SSD/HDD)! RAM ise sadece aynı anda açık olan pencerelerin kasmadan çalışmasını sağlar." }
      ]
    },
    quiz: {
      question: "Bilgisayarda elektrik kesildiğinde veya bilgisayar kapatıldığında üzerindeki tüm bilgileri kaybeden GEÇİCİ çalışma belleği hangisidir?",
      options: [
        { text: "A) Sabit Disk (SSD/HDD)", isCorrect: false },
        { text: "B) RAM (Geçici Bellek)", isCorrect: true },
        { text: "C) Anakart", isCorrect: false },
        { text: "D) Yazıcı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> RAM (Random Access Memory), bilgisayar açıkken programların hızlıca çalışması için verileri geçici tutar; elektrik kesilince içindeki bilgiler silinir."
    },
    summaryRules: [
      { bold: "CPU = Beyin", text: "Tüm hesaplamaları işlemci yapar." },
      { bold: "RAM = Çalışma Masası", text: "Hızlıdır ancak geçicidir." },
      { bold: "Giriş / Çıkış", text: "Bilgisayara veri girer, ekrandan sonuç çıkar." }
    ],
    homework: "Hem giriş hem de çıkış birimi olarak çalışabilen tek bir aygıt bulun ve nasıl çalıştığını yazın (İpucu: Dokunmatik ekran).",
    nextWeekPreview: "Veri Kapasite Ölçüleri: Bit, Bayt, GB, TB ve 29 Ekim Cumhuriyet Bayramı Coşkusu!"
  },

  // 7. HAFTA
  {
    week: 7,
    date: "26 Ekim - 01 Kasım",
    hours: "2 Saat",
    unit: "1. Tema: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Tema & 29 Ekim",
    unitTheme: "tema-1",
    title: "Veri Kapasite Birimleri & 29 Ekim Coşkusu",
    subtitle: "Bit, Bayt, Kilobayt, Megabayt, Gigabayt, Terabayt ve Cumhuriyetimizin Bilişim Vizyonu",
    outcomeCode: "BTY.5.1.5",
    targetSkill: "Sayısal Hesaplama & Dosya Boyutu Analizi",
    curiosityQuestion: "Telefonunuzdaki 128 GB hafıza aslında kaç milyar tane harf ve sayı saklayabilir?",
    roadmap: [
      { title: "Bit ve Bayt Nedir?", desc: "Dijital dünyanın atomu (0 veya 1) ve 8 bitin birleşimi olan Bayt." },
      { title: "Kapasite Merdiveni", desc: "Bayt -> KB -> MB -> GB -> TB basamakları ve 1024 katsayısı." },
      { title: "Dosya Türleri ve Boyutları", desc: "Bir metin belgesi, bir fotoğraf, bir şarkı ve bir film kaç MB tutar?" },
      { title: "29 Ekim Cumhuriyet Bayramı", desc: "Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ün bilim ve teknoloji hedefi." }
    ],
    section1: {
      title: "Dijital Ölçü Merdiveni: Küçükten Büyüğe",
      subtitle: "Tıpkı gram-kilogram-ton gibi, dijital verilerin de hassas ağırlık birimleri vardır.",
      layout: "split-visual",
      card: {
        title: "Kapasite Basamakları (1024 Kuralı)",
        icon: "📏",
        desc: "İkili sayı sisteminde (Binary) her basamak 1024 kat büyür:",
        items: [
          { bold: "Bit (b)", text: "En küçük veri birimi. Sadece 0 veya 1 değerini alır (Lamba açık/kapalı)." },
          { bold: "Bayt (B)", text: "8 Bit birleşerek 1 Bayt'ı oluşturur. Klavyeden bastığınız tam 1 harfe eşittir (Örn: 'A')." },
          { bold: "Kilobayt (KB)", text: "1024 Bayt (Kısa bir metin belgesi)." },
          { bold: "Megabayt (MB)", text: "1024 KB (1 MP3 müzik dosyası yaklaşık 4-5 MB'tır)." },
          { bold: "Gigabayt (GB)", text: "1024 MB (1 HD film yaklaşık 2-4 GB'tır)." },
          { bold: "Terabayt (TB)", text: "1024 GB (Büyük harici diskler ve sunucu depoları)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        
        <path d="M50 180 L110 150 L170 120 L230 90 L290 60 L350 30" stroke="#34d399" stroke-width="3" stroke-dasharray="4 4"/>
        
        <circle cx="50" cy="180" r="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="50" y="184" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Bit</text>

        <circle cx="110" cy="150" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="110" y="154" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Byte</text>

        <circle cx="170" cy="120" r="18" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
        <text x="170" y="124" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">KB</text>

        <circle cx="230" cy="90" r="20" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="230" y="94" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">MB</text>

        <circle cx="290" cy="60" r="22" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="290" y="64" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">GB</text>

        <circle cx="350" cy="30" r="24" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <text x="350" y="34" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">TB</text>
      </svg>`,
      caption: "Küçükten Büyüğe Dijital Veri Kapasite Basamakları"
    },
    section2: {
      title: "29 Ekim Cumhuriyet Bayramı & Dijital Türkiye",
      subtitle: "Cumhuriyetimizin 103. yılında bilim ve teknoloji meşalesini gururla taşıyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "İstikbal Göklerdedir ve Bilimdedir",
          icon: "🇹🇷",
          desc: "Atatürk'ün gençliğe emaneti:",
          items: [
            { bold: "Milli Teknoloji Hamlesi", text: "Kendi yazılımlarını, uydularını ve robotlarını üreten bağımsız Türkiye." },
            { bold: "Cumhuriyet Değerleri", text: "Çalışkanlık, dürüstlük ve vatanına faydalı bir dijital üretici olmak." }
          ]
        },
        {
          title: "Hangi Dosya Kaç MB Tutar?",
          icon: "📊",
          desc: "Günlük hayattaki pratik boyutlar:",
          items: [
            { bold: "1 Sayfa Word (.docx)", text: "Yaklaşık 30 - 50 Kilobayt (KB)." },
            { bold: "1 Yüksek Çözünürlüklü Fotoğraf", text: "Yaklaşık 3 - 6 Megabayt (MB)." },
            { bold: "1 Uzun Metraj Sinema Filmi", text: "Yaklaşık 1.5 - 4 Gigabayt (GB)." }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'Flash Bellek Doldurma Oyunu'",
      subtitle: "16 GB boyutundaki bir belleğe neleri sığdırabileceğimizi hesaplıyoruz.",
      steps: [
        { title: "Boyutları İncele", desc: "Fotoğraf (4 MB), Şarkı (5 MB), Film (2 GB = 2048 MB)." },
        { title: "Hesapla", desc: "16 GB bir belleğe sadece film atarsak kaç film sığar? (16 / 2 = 8 film)." },
        { title: "Büyükten Küçüğe Diz", desc: "500 MB, 2 GB, 1 TB, 800 KB, 4000 Bayt verilerini sıraya koyun." }
      ],
      criteria: [
        "Bit ve Bayt arasındaki 8 kat ilişkisini bilme",
        "Kapasite birimlerini küçükten büyüğe sıralayabilme",
        "Dosya boyutlarını karşılaştırıp depolama tahmini yapabilme"
      ]
    },
    tips: {
      safetyTitle: "Kapasite Hesabında Pratik Formül",
      safetyRules: [
        { bold: "1024 Sayısı Nereden Gelir?", text: "Bilgisayarlar 2'lik tabanda (0 ve 1) çalıştığı için 2 üzeri 10 sayısı 1024 eder; bu yüzden her basamak 1024'er kat büyür." }
      ],
      myths: [
        { wrong: "1 Megabayt (MB), 1 Gigabayt'tan (GB) daha büyüktür çünkü başında 'Mega' yazar.", correct: "Hayır! Sıralama: Bayt -> KB -> MB -> GB -> TB şeklindedir. GB, MB'tan tam 1024 kat daha büyüktür!" }
      ]
    },
    quiz: {
      question: "Klavyeden bastığımız tek bir harf (Örneğin 'K' harfi) bilgisayar hafızasında tam olarak ne kadarlık bir yer kaplar?",
      options: [
        { text: "A) 1 Gigabayt (GB)", isCorrect: false },
        { text: "B) 1 Bayt (Byte = 8 Bit)", isCorrect: true },
        { text: "C) 1 Terabayt (TB)", isCorrect: false },
        { text: "D) 1 Megabayt (MB)", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Klavyedeki her karakter (harf, rakam veya boşluk) 8 bitin birleşiminden oluşan <strong>1 Bayt (Byte)</strong> yer kaplar."
    },
    summaryRules: [
      { bold: "8 Bit = 1 Bayt", text: "1 Bayt = 1 Harf demektir." },
      { bold: "Sıralama", text: "Bit < Bayt < KB < MB < GB < TB." },
      { bold: "29 Ekim Kutlu Olsun", text: "Geleceğin teknolojisini Cumhuriyet gençliği inşa eder." }
    ],
    homework: "Evinizdeki bilgisayarın veya tabletin toplam depolama kapasitesinin kaç GB olduğunu öğrenip defterinize yazın.",
    nextWeekPreview: "1. Dönem 1. Sınav Tekrarı ve Donanım Şampiyonası!"
  },

  // 8. HAFTA
  {
    week: 8,
    date: "02 - 08 Kasım",
    hours: "2 Saat",
    unit: "SINAV HAFTASI & 1. Tema Tekrarı",
    unitBadge: "Sınav Tekrarı",
    unitTheme: "tema-sinav",
    title: "1. Dönem 1. Sınav Tekrarı & Donanım Şampiyonası",
    subtitle: "Bilişim Kavramları, Ergonomi, Dijital Vatandaşlık, Donanım ve Kapasite Soru Çözümleri",
    outcomeCode: "BTY.5.1.1 - BTY.5.1.5",
    targetSkill: "Sınav Başarısı & Kavramsal Sentez",
    curiosityQuestion: "İlk 7 haftada öğrendiğimiz tüm bilişim hazinesini bir araya getirip sınavda 100 tam puan almaya hazır mısınız?",
    roadmap: [
      { title: "1. Tema Dev Özeti", desc: "Veri, bilgi, bilişim, teknoloji kavramlarının tekrarı." },
      { title: "Sağlık & Ergonomi", desc: "Doğru duruş kuralları ve 20-20-20 kuralının soru tipleri." },
      { title: "Donanım Analizi", desc: "Anakart, CPU, RAM, SSD ve Giriş/Çıkış birimleri eşleştirmeleri." },
      { title: "Kapasite Ölçüleri", desc: "KB, MB, GB sıralaması ve problem çözümleri." }
    ],
    section1: {
      title: "Sınavda Kesin Çıkacak 4 Temel Konu",
      subtitle: "Öğretmenlerin en çok soru sorduğu kilit noktalar.",
      layout: "cards-2",
      cards: [
        {
          title: "Bilişim & Ergonomi Soruları",
          icon: "📝",
          desc: "Kavram soruları:",
          items: [
            { bold: "Veri - Bilgi", text: "Ham olana veri, işlenmiş olana bilgi denir." },
            { bold: "Ergonomi", text: "Ekran göz hizasında, mesafe 50-70 cm, kollar ve bacaklar 90 derece olmalıdır." },
            { bold: "20-20-20 Kuralı", text: "20 dakikada bir, 20 saniye, 20 fit uzağa bakarak gözler dinlendirilir." }
          ]
        },
        {
          title: "Donanım & Kapasite Soruları",
          icon: "🎯",
          desc: "Mühendislik soruları:",
          items: [
            { bold: "RAM vs Sabit Disk", text: "RAM geçici ve hızlıdır; Sabit disk kalıcıdır ve elektrik kesilince silinmez." },
            { bold: "İşlemci (CPU)", text: "Bilgisayarın beynidir." },
            { bold: "Kapasite Sıralaması", text: "Bit < Bayt < KB < MB < GB < TB. 1 Bayt = 8 Bit'tir." }
          ]
        }
      ]
    },
    section2: {
      title: "Klasik Sınav Sorusu: Giriş mi, Çıkış mı?",
      subtitle: "Karıştırılan aygıtların pratik ayrımı.",
      layout: "split-visual",
      card: {
        title: "Aygıtın Görevini Sorgula",
        icon: "⚖️",
        desc: "Aygıta bakarken kendine sor:",
        items: [
          { bold: "Bilgisayara bilgi mi veriyor?", text: "Evet ise -> GİRİŞ BİRİMİ (Klavye, Fare, Mikrofon, Kamera)." },
          { bold: "Bilgisayardan bana bilgi mi gösteriyor?", text: "Evet ise -> ÇIKIŞ BİRİMİ (Monitör, Hoparlör, Kulaklık, Yazıcı)." },
          { bold: "İkisi birden olanlar:", text: "Dokunmatik Ekran (hem ekrana bakarız çıkış, hem parmakla dokunuruz giriş)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
        <circle cx="200" cy="120" r="45" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
        <text x="200" y="115" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">SINAV</text>
        <text x="200" y="132" fill="#fecdd3" font-size="10" text-anchor="middle">TEKRARI</text>

        <rect x="40" y="50" width="100" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
        <text x="90" y="75" fill="#bae6fd" font-size="10" text-anchor="middle">1. Bilişim Nedir?</text>

        <rect x="260" y="50" width="100" height="40" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
        <text x="310" y="75" fill="#a7f3d0" font-size="10" text-anchor="middle">2. Ergonomi</text>

        <rect x="40" y="150" width="100" height="40" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
        <text x="90" y="175" fill="#e9d5ff" font-size="10" text-anchor="middle">3. Donanımlar</text>

        <rect x="260" y="150" width="100" height="40" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
        <text x="310" y="175" fill="#fde68a" font-size="10" text-anchor="middle">4. Kapasite</text>
      </svg>`,
      caption: "1. Dönem 1. Sınav Kapsam Haritası"
    },
    workshop: {
      title: "Atölye: 'Sınıf Sınav Provasi'",
      subtitle: "Geçmiş yılların çıkmış sınav sorularını birlikte çözüyoruz.",
      steps: [
        { title: "Soruyu Oku", desc: "Tahtaya yansıtılan test ve boşluk doldurma sorularını dikkatle okuyun." },
        { title: "Gerekçeni Söyle", desc: "Sadece şıkkı söylemeyin; neden o şıkkın doğru olduğunu teknik kelimelerle açıklayın." },
        { title: "Kendi Sorunu Yaz", desc: "Sıra arkadaşınıza sormak üzere 1 adet çoktan seçmeli bilişim sorusu yazın." }
      ],
      criteria: [
        "Soru köklerini dikkatle okuyup çeldiricileri eleyebilme",
        "Kavramları doğru terminolojiyle ifade edebilme",
        "Sınav kaygısını yönetip kendine güven duyma"
      ]
    },
    tips: {
      safetyTitle: "Sınavda Başarı Taktikleri",
      safetyRules: [
        { bold: "Soruları Acele Etmeden Okuyun", text: "'Hangisi DEĞİLDİR?' veya 'Hangisi ÇIKIŞ birimidir?' gibi olumsuz ifadelere çok dikkat edin." }
      ],
      myths: [
        { wrong: "Bilişim sınavı sadece bilgisayar oyunlarını iyi oynayanların yüksek aldığı bir sınavdır.", correct: "Bilişim sınavı bilimsel kavramları, donanım mimarisini ve mantıksal düşünmeyi ölçer." }
      ]
    },
    quiz: {
      question: "Aşağıdaki eşleştirmelerden hangisi 'GİRİŞ BİRİMİ - ÇIKIŞ BİRİMİ' kuralına göre DOĞRU olarak verilmiştir?",
      options: [
        { text: "A) Giriş: Hoparlör / Çıkış: Mikrofon", isCorrect: false },
        { text: "B) Giriş: Klavye / Çıkış: Monitör", isCorrect: true },
        { text: "C) Giriş: Yazıcı / Çıkış: Fare", isCorrect: false },
        { text: "D) Giriş: Ekran / Çıkış: Klavye", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Klavye bilgisayara yazı girdiği için GİRİŞ, Monitör görüntüyü dışarı gösterdiği için ÇIKIŞ birimidir."
    },
    summaryRules: [
      { bold: "Sınava Hazırız", text: "İlk 7 haftanın tüm kazanımlarını tekrarladık." },
      { bold: "Kavramlar Net", text: "Donanım, yazılım, ergonomi ve kapasite birimleri." },
      { bold: "Başarılar!", text: "Kendinize güvenin, siz birer dijital kaşifsiniz." }
    ],
    homework: "Sınav tekrar slaytlarını gözden geçirip anlamadığınız bir konu varsa not alın.",
    nextWeekPreview: "İşletim Sistemleri (Pardus, Windows, macOS) & 10 Kasım Atatürk'ü Anma!"
  },

  // 9. HAFTA
  {
    week: 9,
    date: "09 - 15 Kasım",
    hours: "2 Saat",
    unit: "1. Tema & 10 Kasım Atatürk'ü Anma",
    unitBadge: "1. Tema & 10 Kasım",
    unitTheme: "tema-1",
    title: "İşletim Sistemleri & 10 Kasım Anma",
    subtitle: "Bilgisayarın Orkestra Şefi (Pardus, Windows, Linux, Android) ve Atatürk'ün Bilim Mirası",
    outcomeCode: "BTY.5.1.6",
    targetSkill: "Sistem Yönetimi & Milli Bilişim Bilinci",
    curiosityQuestion: "Bilgisayardaki fare, ekran kartı, klavye ve işlemcinin bir orkestra gibi birbiriyle kavga etmeden uyumla çalışmasını kim yönetir?",
    roadmap: [
      { title: "İşletim Sistemi Nedir?", desc: "Donanım ile kullanıcı arasında köprü kuran ana sistem yazılımı." },
      { title: "Masaüstü ve Mobil Sistemler", desc: "Pardus, Windows, Linux, macOS; Android ve iOS." },
      { title: "Milli İşletim Sistemimiz: PARDUS", desc: "TÜBİTAK tarafından geliştirilen yerli ve milli açık kaynaklı işletim sistemi." },
      { title: "10 Kasım Atatürk'ü Anma", desc: "Gazi Mustafa Kemal Atatürk'ün akıl, bilim ve çağdaş uygarlık hedefi." }
    ],
    section1: {
      title: "İşletim Sistemi: Bilgisayarın Orkestra Şefi",
      subtitle: "İşletim sistemi olmadan hiçbir uygulama çalışamaz.",
      layout: "split-visual",
      card: {
        title: "İşletim Sisteminin Temel Görevleri",
        icon: "🎼",
        desc: "Bilgisayarı yöneten 4 ana görev:",
        items: [
          { bold: "Donanım Yönetimi", text: "RAM, işlemci ve depolama kaynaklarını programlar arasında adilce paylaştırır." },
          { bold: "Dosya ve Klasör Düzeni", text: "Verilerin kaybolmadan sabit diske düzenli yazılmasını sağlar." },
          { bold: "Kullanıcı Arayüzü (Masaüstü)", text: "Pencereler, simgeler ve menülerle bilgisayarı kolayca kullanmamızı sağlar." },
          { bold: "Güvenlik", text: "Kullanıcı şifrelerini ve program izinlerini kontrol eder." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        
        <circle cx="200" cy="120" r="45" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2.5"/>
        <text x="200" y="115" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">İŞLETİM</text>
        <text x="200" y="132" fill="#bfdbfe" font-size="10" text-anchor="middle">SİSTEMİ</text>

        <rect x="40" y="35" width="80" height="45" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
        <text x="80" y="62" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">PARDUS</text>

        <rect x="280" y="35" width="80" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
        <text x="320" y="62" fill="#bae6fd" font-size="11" font-weight="bold" text-anchor="middle">Windows</text>

        <rect x="40" y="160" width="80" height="45" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1"/>
        <text x="80" y="187" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">Android</text>

        <rect x="280" y="160" width="80" height="45" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1"/>
        <text x="320" y="187" fill="#fecdd3" font-size="11" font-weight="bold" text-anchor="middle">macOS / iOS</text>

        <path d="M125 60 L160 95" stroke="#60a5fa" stroke-width="1.5"/>
        <path d="M275 60 L240 95" stroke="#60a5fa" stroke-width="1.5"/>
        <path d="M125 180 L160 145" stroke="#60a5fa" stroke-width="1.5"/>
        <path d="M275 180 L240 145" stroke="#60a5fa" stroke-width="1.5"/>
      </svg>`,
      caption: "İşletim Sistemleri: Masaüstü ve Mobil Dünyanın Liderleri"
    },
    section2: {
      title: "Milli Gururumuz PARDUS & 10 Kasım",
      subtitle: "TÜBİTAK tarafından geliştirilen açık kaynaklı yerli işletim sistemimiz.",
      layout: "cards-2",
      cards: [
        {
          title: "PARDUS Nedir?",
          icon: "🐆",
          desc: "Türkiye'nin güvenli işletim sistemi:",
          items: [
            { bold: "Açık Kaynak Kodlu", text: "Kodları herkes tarafından incelenebilir, arka kapısı ve virüs tehlikesi düşüktür." },
            { bold: "Okullarda & Kamuda", text: "Fatih Projesi etkileşimli akıllı tahtalarında ve devlet kurumlarında güvenle kullanılır." },
            { bold: "Özgür ve Ücretsiz", text: "Lisans ücreti ödemeden herkes bilgisayarına indirip kurabilir." }
          ]
        },
        {
          title: "10 Kasım: Atatürk'ün Bilim Mirası",
          icon: "🇹🇷",
          desc: "Büyük Önder'i saygı ve özlemle anıyoruz:",
          items: [
            { bold: "'Hayatta En Hakiki Mürşit İlimdir'", text: "Atatürk'ün Türk milletine gösterdiği en büyük rota akıl ve fendir." },
            { bold: "Geleceğin Bilişimcileri", text: "Vatanını en çok seven, görevini en iyi yapandır ve teknoloji üreten gençliktir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'İşletim Sistemleri Müzesi'",
      subtitle: "Farklı işletim sistemlerinin masaüstü arayüzlerini tanıyoruz.",
      steps: [
        { title: "Akıllı Tahtada Pardus", desc: "Sınıfımızdaki akıllı tahtanın Pardus menüsünü, ayarlarını ve dosya yöneticisini inceleyin." },
        { title: "Mobil vs Masaüstü", desc: "Telefonunuzdaki Android/iOS ile bilgisayardaki Pardus/Windows arasındaki kullanım farklarını yazın." },
        { title: "10 Kasım Anma Görevi", desc: "Kelime işlemcide Atatürk'ün bilime verdiği önemi anlatan kısa bir anma metni hazırlayın." }
      ],
      criteria: [
        "İşletim sisteminin temel işlevlerini söyleyebilme",
        "Masaüstü ve mobil işletim sistemlerine örnek verebilme",
        "Pardus'un milli bir proje olduğunu ve açık kaynak felsefesini bilme"
      ]
    },
    tips: {
      safetyTitle: "İşletim Sistemi Güncellemeleri",
      safetyRules: [
        { bold: "Güncellemeleri Ertelemeyin", text: "İşletim sistemi güncellemeleri siber korsanların bulduğu güvenlik açıklarını kapatır; sisteminizi daima güncel tutun." }
      ],
      myths: [
        { wrong: "Pardus sadece okullarda çalışan basit bir programdır.", correct: "Pardus tam teşekküllü, çok güçlü, bakanlıklarda ve hastanelerde güvenle kullanılan milli bir işletim sistemidir." }
      ]
    },
    quiz: {
      question: "TÜBİTAK tarafından geliştirilen, Fatih Projesi akıllı tahtalarımızda ve kamu kurumlarında kullanılan yerli ve milli işletim sistemimizin adı nedir?",
      options: [
        { text: "A) Windows", isCorrect: false },
        { text: "B) Android", isCorrect: false },
        { text: "C) PARDUS", isCorrect: true },
        { text: "D) iOS", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Adını Anadolu leoparından (Panthera pardus tulliana) alan <strong>PARDUS</strong>, ülkemizin gururu olan açık kaynaklı işletim sistemidir."
    },
    summaryRules: [
      { bold: "İşletim Sistemi", text: "Bilgisayarın yöneticisi ve şefidir." },
      { bold: "Milli Sistemimiz", text: "PARDUS açık kaynaklı ve güvenlidir." },
      { bold: "Atatürk'ün İzinde", text: "Bilim ve teknolojiyle aydınlık yarınlara." }
    ],
    homework: "Evinizdeki bilgisayar ve telefonların hangi işletim sistemlerini (Sürüm numaralarıyla birlikte) kullandığını yazın.",
    nextWeekPreview: "1. Dönem Ara Tatil Bilişim Keşif Bülteni ve Teknoloji Detoksu!"
  },

  // 10. HAFTA (ARA TATİL BÜLTENİ)
  {
    week: 10,
    date: "16 - 22 Kasım",
    hours: "Ara Tatil",
    unit: "ARA TATİL: Bilişim Keşif Bülteni",
    unitBadge: "Ara Tatil",
    unitTheme: "tema-1",
    title: "1. Dönem Ara Tatil: Bilişim Keşif Bülteni",
    subtitle: "Teknoloji Detoksu, Aileyle Dijital Oyunlar, Evdeki IoT Cihazlarını Keşfetme Rehberi",
    outcomeCode: "Ara Tatil & Sosyal Etkinlik",
    targetSkill: "Teknoloji Dengesi & Keşif Becerisi",
    curiosityQuestion: "Tatil boyunca ekrana yapışıp kalmak yerine, teknolojiyi bir dedektif gibi keşfedip ailenizle eğlenceli oyunlar oynamaya ne dersiniz?",
    roadmap: [
      { title: "Teknoloji Detoksu", desc: "Belirli saatlerde ekranları kapatıp doğaya, spora ve kitaplara vakit ayırma." },
      { title: "Evdeki Akıllı Dedektiflik", desc: "Evinizdeki akıllı cihazları ve sensörleri listeleyip haritalama." },
      { title: "Ailece Dijital Bilgi Yarışması", desc: "Öğrendiğiniz bilişim sorularıyla ailenize mini sınav yapma." },
      { title: "2. Dönem Başlangıcı Önizleme", desc: "Dosya ve klasör yönetimi, uzantılar ve dijital ürün tasarımı." }
    ],
    section1: {
      title: "Ara Tatilde Sağlıklı Teknoloji Dengesi",
      subtitle: "Teknolojiyi tamamen bırakmıyoruz; onu bilinçli ve eğlenceli yönetiyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Teknoloji Detoksu Nedir?",
          icon: "🌿",
          desc: "Zihnimizi ve gözlerimizi tazelemek:",
          items: [
            { bold: "Ekran Molası", text: "Günde en az 3-4 saat tüm telefon, tablet ve bilgisayarları sessize alıp kenara bırakmak." },
            { bold: "Fiziksel Oyunlar", text: "Bisiklete binmek, parkta koşmak, kutu oyunları oynamak." },
            { bold: "Göz Dinlendirme", text: "Sürekli 50 cm mesafeye bakan göz kaslarını uzağa bakarak dinlendirmek." }
          ]
        },
        {
          title: "Evdeki 'Akıllı Cihaz' Dedektifi",
          icon: "🕵️‍♂️",
          desc: "Evinizdeki IoT ve işlemcili cihazları bulun:",
          items: [
            { bold: "Mutfakta", text: "Akıllı buzdolabı, programlı mikrodalga, bulaşık makinesi beyni." },
            { bold: "Oturma Odasında", text: "Akıllı TV, Wi-Fi modemi, robot süpürge, akıllı klima." },
            { bold: "Cebimizde", text: "Akıllı bileklik, telefon, adımsayar." }
          ]
        }
      ]
    },
    section2: {
      title: "Tatil Görevi: Bilişim Sohbeti",
      subtitle: "Ailenizle birlikte teknolojinin dününü ve bugününü konuşun.",
      layout: "cards-2",
      cards: [
        {
          title: "Büyüklere Röportaj",
          icon: "🎤",
          desc: "Anne, baba veya büyükanne/büyükbabanıza sorun:",
          items: [
            { bold: "Sizin Yaşınızdayken", text: "'Siz 5. sınıftayken cep telefonu veya evinizde internet var mıydı?'" },
            { bold: "İlk Bilgisayar", text: "'İlk bilgisayarla ne zaman tanıştınız, nasıl görünüyordu?'" },
            { bold: "En Büyük Değişim", text: "'Sizce teknoloji hayatınızı en çok hangi alanda kolaylaştırdı?'" }
          ]
        },
        {
          title: "Tatil Sonrası Hazırlık",
          icon: "🎒",
          desc: "Tatilden sonra 2. Temaya geçiyoruz:",
          items: [
            { bold: "Dosya Uzantıları", text: ".docx, .jpg, .mp3, .mp4 dosyalarının gizemini çözeceğiz." },
            { bold: "Kelime İşlemci", text: "Kendi dijital dergimizi ve afişlerimizi tasarlayacağız." }
          ]
        }
      ]
    },
    workshop: {
      title: "Tatil Atölyesi: 'Akıllı Ev Haritası'",
      subtitle: "Evinizin krokisini çizip içindeki bilişim cihazlarını işaretleyin.",
      steps: [
        { title: "Kroki Çiz", desc: "A4 kâğıdına evinizin odalarını basitçe çizin." },
        { title: "Cihazları Yerleştir", desc: "Modem nereden yayın yapıyor? TV nerede? Akıllı saat nerede şarj oluyor?" },
        { title: "Güvenlik Kontrolü", desc: "Modemin şifresi güçlü mü? Şifreyi kimseyle paylaşıyor musunuz?" }
      ],
      criteria: [
        "Tatil boyunca ekran süresini 1-2 saat ile sınırlandırabilme",
        "Aile bireyleriyle teknoloji üzerine röportaj yapabilme",
        "İyi dinlenip yeni döneme zinde başlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Tatil Güvenlik Hatırlatması",
      safetyRules: [
        { bold: "Yabancılarla Sohbet Etmeyin", text: "Online oyunlarda tanımadığınız kişilere adınızı, okulunuzu, adresinizi asla söylemeyin." },
        { bold: "Uyku Düzeni", text: "Tatil olsa bile gece geç saatlere kadar ekran başında kalmayın; uyku beynin en iyi ilacıdır." }
      ],
      myths: [
        { wrong: "Tatil demek sabah akşam kesintisiz bilgisayar oyunu oynamak demektir.", correct: "Gerçek tatil zihni, bedeni ve gözleri tazelemektir; oyunlar sadece günün küçük bir ödülü olmalıdır." }
      ]
    },
    quiz: {
      question: "Aşağıdakilerden hangisi tatilde göz ve beden sağlığımızı korumak için yapabileceğimiz en doğru davranıştır?",
      options: [
        { text: "A) Karanlık odada gece 3'e kadar telefonla oynamak", isCorrect: false },
        { text: "B) Ekran süresini sınırlayıp açık havada spor ve yürüyüş yapmak", isCorrect: true },
        { text: "C) Yemek yerken bile tablet izlemek", isCorrect: false },
        { text: "D) Hiç su içmeden oyun oynamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Tatilde açık hava sporları yapmak, kitap okumak ve ekran süresini dengelemek hem bedeni hem zihni canlandırır."
    },
    summaryRules: [
      { bold: "İyi Tatiller!", text: "Dinlenin, eğlenin ve keşfedin." },
      { bold: "Teknoloji Dengesi", text: "Ekranı siz yönetin, ekran sizi yönetmesin." },
      { bold: "Haftaya Buluşuyoruz", text: "Dosya yönetimi ve dijital ürün tasarımıyla devam ediyoruz!" }
    ],
    homework: "Tatil boyunca ailenizle birlikte doğada geçirdiğiniz güzel bir anıyı not edin.",
    nextWeekPreview: "Dosya ve Klasör Yönetimi: Uzantıların Gizemi (.docx, .jpg, .mp3, .mp4, .zip)!"
  }
];
