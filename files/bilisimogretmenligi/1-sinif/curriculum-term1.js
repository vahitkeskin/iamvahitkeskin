/**
 * 1. Sınıf Serbest Etkinlikler - 1. Dönem 1. Bölüm (Hafta 1 - 10)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_GRADE1 = [
  // 1. HAFTA
  {
    week: 1,
    date: "14 - 20 Eylül",
    hours: "4 Ders Saati",
    unit: "Okula Merhaba ve Tanışma",
    unitBadge: "1. Tema: Okula Uyum",
    unitTheme: "tema-1",
    title: "1. Hafta: Şarkılar, Fotoğraflar ve Çizgi Dünyası",
    subtitle: "Yeni Arkadaşlar, Sınıf Kuralları, Birlikte Şarkı Söyleme ve Renkli Boyama",
    outcomeCode: "SE.1.1 (İletişim & Uyum)",
    targetSkill: "Kendini ve Ailesini Tanıtma, Nezaketle Dinleme ve Çizgi Becerisi",
    curiosityQuestion: "Sınıfımızdaki yeni arkadaşlarımızla tanışırken onlara ilk olarak ne söyleriz ve kocaman bir gülümseme neden sihirli bir anahtardır?",
    roadmap: [
      { title: "Hep Birlikte Şarkı", desc: "Topluca öğrenilen neşeli okul şarkısını söyleme ve ritim tutma." },
      { title: "Fotoğraf Yorumlama", desc: "Aile ve tatil fotoğrafları üzerinden kendini ve sevdiklerini tanıtma." },
      { title: "Serbest Boyama", desc: "Taşırmadan boyama, kalem tutma ve çalışma kâğıdını tertemiz tutma." },
      { title: "Film İzleme Kuralları", desc: "Sessizce izleme, dinleme ve filmdeki ilginç noktaları paylaşma." }
    ],
    section1: {
      title: "Tanışma Çemberi: Kendimizi Tanıtıyoruz",
      subtitle: "Her öğrenci biriciktir; kendimizi anlatırken tatlı bir ses tonu ve tebessüm kullanırız.",
      layout: "split-visual",
      card: {
        title: "Tanışma Adımları",
        icon: "👋😊",
        desc: "Sıra bize geldiğinde arkadaşlarımıza şunları söyleriz:",
        items: [
          { bold: "1. Adım", text: "'Merhaba arkadaşlar, benim adım...' diyerek ismimizi net bir sesle söylemek." },
          { bold: "2. Adım", text: "En sevdiğimiz oyunu, rengi veya meyveyi neşeyle paylaşmak." },
          { bold: "3. Adım", text: "Konuşan arkadaşımızın gözlerine bakarak onu saygıyla ve sözünü kesmeden dinlemek." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>
        <!-- Arka Plan Kartı -->
        <rect x="20" y="20" width="500" height="260" rx="16" fill="url(#bgGrad1)" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="16" font-weight="bold" fill="#f59e0b" text-anchor="middle">TANIŞMA VE ŞARKI ÇEMBERİ</text>
        
        <!-- Merkez Güneş / Müzik Notası -->
        <circle cx="270" cy="150" r="42" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="3"/>
        <text x="270" y="160" font-size="32" text-anchor="middle">☀️🎶</text>
        
        <!-- 4 Çocuk Figürü Dairesel -->
        <!-- Çocuk 1: Sol -->
        <circle cx="110" cy="150" r="32" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="2"/>
        <text x="110" y="157" font-size="24" text-anchor="middle">👦</text>
        <text x="110" y="200" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">"Merhaba!"</text>
        <line x1="145" y1="150" x2="225" y2="150" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>

        <!-- Çocuk 2: Sağ -->
        <circle cx="430" cy="150" r="32" fill="#ec4899" fill-opacity="0.2" stroke="#ec4899" stroke-width="2"/>
        <text x="430" y="157" font-size="24" text-anchor="middle">👧</text>
        <text x="430" y="200" font-size="11" font-weight="bold" fill="#ec4899" text-anchor="middle">"Hoş Geldin!"</text>
        <line x1="395" y1="150" x2="315" y2="150" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,3"/>

        <!-- Çocuk 3: Üst -->
        <circle cx="270" cy="80" r="24" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2"/>
        <text x="270" y="87" font-size="18" text-anchor="middle">🧒</text>

        <!-- Çocuk 4: Alt -->
        <circle cx="270" cy="225" r="24" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="2"/>
        <text x="270" y="232" font-size="18" text-anchor="middle">👧</text>

        <!-- Alt Not -->
        <rect x="70" y="245" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="261" font-size="10" font-weight="bold" fill="#cbd5e1" text-anchor="middle">Hep birlikte söyleyince şarkılar çok daha güzel duyulur!</text>
      </svg>`
    },
    section2: {
      title: "Resim Yorumlama ve Temiz Boyama",
      subtitle: "Gözlerimizle keşfeder, ellerimizle renklendiririz.",
      cards: [
        {
          badge: "Görsel Okuma",
          title: "Resimde Ne Görüyorum?",
          desc: "Fotoğraftaki kişilerin nerede olduğunu, yüzlerindeki gülümsemeyi ve mevsimi tahmin etme oyunu."
        },
        {
          badge: "İnce Motor",
          title: "Taşırmadan Boyama Sanatı",
          desc: "Boya kalemini doğru tutma (üç parmak kuralı) ve sınır çizgilerinin dışına çıkmadan sabırla boyama."
        },
        {
          badge: "Dinleme Adabı",
          title: "Film ve Çizgi Film Kuralları",
          desc: "Ekran açıkken ayağa kalkmadan, arkadaşlarımızın görüşünü kapatmadan sessizce ve dikkatle izleme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Sevgi Çemberi ve Şarkımız'",
      desc: "Öğrenciler el ele tutuşarak sınıf çemberi oluşturur ve İlköğretim Haftası şarkısını hep birlikte söyler.",
      steps: [
        { title: "Çember Olalım", desc: "Tüm sınıf el ele tutuşup neşeyle bir daire oluşturur." },
        { title: "İsim Söyleme & Alkış", desc: "Öğretmenin topu attığı öğrenci adını söyler, tüm sınıf onu sevgiyle alkışlar." },
        { title: "Boya ve As", desc: "Dağıtılan 'Okulumu Seviyorum' resmini boyayıp sınıf panosuna asma." }
      ],
      criteria: [
        "Arkadaşlarına kendini güler yüzle ve net bir sesle tanıtabilme",
        "Grup halinde şarkı söylerken ritme uyum sağlayabilme",
        "Boya kalemlerini düzenli ve temiz kullanabilme"
      ]
    },
    tips: {
      safetyTitle: "Sınıfımızın Altın Nezaket Kuralları",
      safetyRules: [
        { bold: "Söz İstemek", text: "Konuşmak istediğimizde parmağımızı kaldırıp öğretmenimizin söz vermesini bekleriz." },
        { bold: "Eşyaları Paylaşmak", text: "Arkadaşımızın boya kalemini alırken 'Kullanabilir miyim?' diye nazikçe izin isteriz." }
      ],
      myths: [
        { wrong: "Sınıfta en yüksek sesle bağıranın dediği olur.", correct: "Hayır! Nezaketle, sakin ve tatlı bir dille konuşan herkes kendini çok daha iyi ifade eder." }
      ]
    },
    quiz: {
      question: "Sınıfta bir arkadaşımız kendisini tanıtırken veya öğretmenimiz bir masal anlatırken ne yapmalıyız?",
      options: [
        { text: "A) Sessizce ve dikkatle onu dinlemeliyiz.", isCorrect: true },
        { text: "B) Koşup zıplamalıyız.", isCorrect: false },
        { text: "C) Sıranın altına saklanmalıyız.", isCorrect: false },
        { text: "D) Yüksek sesle şarkı söylemeliyiz.", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Bir arkadaşımız konuşurken onu gözlerine bakarak, sözünü kesmeden ve <strong>dikkatle dinlemek</strong> en güzel görgü kuralıdır."
    },
    summaryRules: [
      { bold: "Gülümse ve Tanış", text: "Yeni arkadaşlar edinmek dünyanın en güzel hissidir." },
      { bold: "Temiz Çalış", text: "Boya kâğıtlarımızı ve sıramızı tertemiz tutarız." },
      { bold: "Haftaya Bilmeceler!", text: "Gelecek hafta eğlenceli bilmeceler ve masallar bizi bekliyor!" }
    ],
    homework: "Evde ailenize okulda öğrendiğiniz şarkıyı söyleyin ve en sevdiğiniz oyuncağın resmini çizin.",
    nextWeekPreview: "Bilmeceler, Masallar, Saklambaç Oyunu ve Renkli Kes-Yapıştır Atölyesi!"
  },

  // 2. HAFTA
  {
    week: 2,
    date: "21 - 27 Eylül",
    hours: "4 Ders Saati",
    unit: "Masallar, Bilmeceler ve Oyun Dünyası",
    unitBadge: "2. Tema: Hayal Gücü",
    unitTheme: "tema-1",
    title: "2. Hafta: Bilmece Sorma, Masal Dinleme ve Kes-Yapıştır",
    subtitle: "Zekâ Dolu Bilmeceler, Büyülü Masal Diyarı, Bahçede Oyun ve Makas Becerisi",
    outcomeCode: "SE.1.2 (Dil & İnce Motor)",
    targetSkill: "Hikâye Unsurlarını Belirleme, Bilmece Çözme, Oyun Paylaşımı ve Güvenli Makas Kullanımı",
    curiosityQuestion: "'Uzaktan baktım bir taş, yanına vardım dört ayak bir baş.' Bilin bakalım bu sevimli hayvan hangisidir?",
    roadmap: [
      { title: "Eğlenceli Bilmeceler", desc: "Bildiğimiz ve yeni öğrendiğimiz zıpır bilmeceleri arkadaşlarımıza sorma." },
      { title: "Büyülü Masal Saati", desc: "Masalın kahramanlarını, olay yerini ve zamanını hayal edip anlatma." },
      { title: "Bahçe Oyunları", desc: "Saklambaç, ebeleme ve ip atlama; oyun sonunda kazananı alkışlama." },
      { title: "Kes-Yapıştır Atölyesi", desc: "Makasla çizgileri takip ederek şekilleri kesme ve yapıştırma sanatı." }
    ],
    section1: {
      title: "Bir Masalın Kahramanları Kimlerdir?",
      subtitle: "Her masal bizi bambaşka bir dünyaya götürür; dinlerken gözlerimizi kapatıp hayal ederiz.",
      layout: "split-visual",
      card: {
        title: "Masal Dedektifleri",
        icon: "🏰🧚",
        desc: "Bir masalı dinlerken şu 4 ipucunu yakalarız:",
        items: [
          { bold: "1. Olay Nedir?", text: "Masalda ne yaşandı? Kahramanın başına hangi ilginç macera geldi?" },
          { bold: "2. Kimler Var?", text: "Kahramanlar kim? (Cesur sincap, bilge kaplumbağa, minik kuş)." },
          { bold: "3. Nerede Geçiyor?", text: "Olay yemyeşil bir ormanda mı, yüksek bir dağda mı geçiyor?" },
          { bold: "4. Masalın Sonu", text: "Kahraman sorunu nasıl çözdü ve masal bize ne öğretti?" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Masal Şatosu ve Karakterler -->
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#c084fc" text-anchor="middle">MASAL ÇATISI VE 4 UNSUR</text>

        <!-- Şato Kulesi -->
        <rect x="220" y="110" width="100" height="120" fill="#312e81" stroke="#a855f7" stroke-width="2"/>
        <polygon points="220,110 270,70 320,110" fill="#ec4899"/>
        <text x="270" y="150" font-size="28" text-anchor="middle">🏰</text>
        <text x="270" y="200" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">MASAL</text>

        <!-- 4 Köşe Rozeti -->
        <!-- Olay -->
        <circle cx="90" cy="110" r="32" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="90" y="108" font-size="18" text-anchor="middle">📖</text>
        <text x="90" y="128" font-size="10" font-weight="bold" fill="#38bdf8" text-anchor="middle">OLAY</text>

        <!-- Kişiler -->
        <circle cx="450" cy="110" r="32" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="450" y="108" font-size="18" text-anchor="middle">🦊</text>
        <text x="450" y="128" font-size="10" font-weight="bold" fill="#f59e0b" text-anchor="middle">KİŞİLER</text>

        <!-- Yer -->
        <circle cx="90" cy="210" r="32" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <text x="90" y="208" font-size="18" text-anchor="middle">🌲</text>
        <text x="90" y="228" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">YER</text>

        <!-- Zaman -->
        <circle cx="450" cy="210" r="32" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <text x="450" y="208" font-size="18" text-anchor="middle">⏳</text>
        <text x="450" y="228" font-size="10" font-weight="bold" fill="#ec4899" text-anchor="middle">ZAMAN</text>
      </svg>`
    },
    section2: {
      title: "Makas Tutma Sanatı ve Bahçe Oyunları",
      subtitle: "Ellerimiz güçleniyor, bahçede dostlukla koşuyoruz.",
      cards: [
        {
          badge: "Güvenli Makas",
          title: "Küt Uçlu Makas Kuralı",
          desc: "Makasın ucunu daima masaya doğru tutarız; yürürken kapalı tutar ve arkadaşımıza sap kısmından uzatırız."
        },
        {
          badge: "Oyun Kuralları",
          title: "Saklambaç ve Ebeleme",
          desc: "Ebe seçilirken sayışmaca yaparız; oyunun kurallarına uyar ve oyun bitince ebemizi kucaklarız."
        },
        {
          badge: "Alkışla Ödül",
          title: "Tebrik Etme Erdemi",
          desc: "Oyunu kim kazanırsa kazansın, hep birlikte alkışlarız; çünkü en önemli şey eğlenmektir."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: 'Renkli Geometrik Şekillerden Kedi Yapımı'",
      desc: "Öğrenciler küt uçlu makas ile kâğıttaki üçgen ve daireleri kesip yapıştırarak sevimli kedi maskotunu oluşturur.",
      steps: [
        { title: "Çizgiden Kes", desc: "Noktalı sınır çizgilerini taşırmadan yavaşça makasla kesme." },
        { title: "Azıcık Yapıştırıcı", desc: "Yapıştırıcıyı kâğıdın sadece kenarlarına damla kadar sürme." },
        { title: "Gözlerini Çiz", desc: "Oluşan kediciğe bıyık ve göz çizip sınıfta konuşturma." }
      ],
      criteria: [
        "Makası parmaklarına ve arkadaşlarına zarar vermeden güvenle kullanabilme",
        "Parçaları uyumlu bir şekilde birleştirip yapıştırabilme",
        "Çalışma masasını ve artık kâğıtları çöp kutusuna atabilme"
      ]
    },
    tips: {
      safetyTitle: "Atölye ve Oyun Güvenliği",
      safetyRules: [
        { bold: "Makasla Asla Koşulmaz", text: "Makas elimizdeyken yerimizden kalkmayız; ayağa kalkmamız gerekirse makası masaya bırakırız." }
      ],
      myths: [
        { wrong: "Oyunu kaybeden kişi üzülüp ağlamalı veya küsmelidir.", correct: "Hayır! Oyun bir yarıştır ama asıl amaç dostlukla eğlenmektir. Bir dahaki sefere sen kazanırsın!" }
      ]
    },
    quiz: {
      question: "'Uzaktan baktım bir taş, yanına vardım dört ayak bir baş.' bilmecesinin doğru cevabı hangisidir?",
      options: [
        { text: "A) Kaplumbağa 🐢", isCorrect: true },
        { text: "B) Uçak ✈️", isCorrect: false },
        { text: "C) Elma 🍎", isCorrect: false },
        { text: "D) Futbol Topu ⚽", isCorrect: false }
      ],
      explanation: "🎉 <strong>Bravo, Doğru Cevap: A!</strong> Sert kabuğu taşa benzeyen, dört ayağı ve sevimli başı olan hayvan <strong>Kaplumbağa</strong>dır!"
    },
    summaryRules: [
      { bold: "Dikkatli Kes", text: "Makas kullanırken sakin ve dikkatli oluruz." },
      { bold: "Kazananı Alkışla", text: "Oyun sonunda arkadaşlarımızı tebrik ederiz." },
      { bold: "Haftaya Problem Çözüyoruz", text: "Gelecek hafta anlaşmazlıkları barışla çözmeyi öğreneceğiz!" }
    ],
    homework: "Büyüklerinizden 1 tane ilginç bilmece öğrenip gelecek ders arkadaşlarınıza sormak üzere ezberleyin.",
    nextWeekPreview: "Sorun Çözme Becerisi, Kulaktan Kulağa Oyunu ve Hayvanları Koruma Günü!"
  },

  // 3. HAFTA
  {
    week: 3,
    date: "28 Eylül - 04 Ekim",
    hours: "4 Ders Saati",
    unit: "Sorun Çözme ve Hayvan Dostlarımız",
    unitBadge: "3. Tema: Barış & Doğa",
    unitTheme: "tema-1",
    title: "3. Hafta: Sorun Çözme, Kulaktan Kulağa ve Hayvan Dostlarımız",
    subtitle: "Anlaşmazlıkları Konuşarak Çözme, Dikkat Oyunu ve 4 Ekim Hayvanları Koruma Günü",
    outcomeCode: "SE.1.3 (Sosyal Farkındalık)",
    targetSkill: "Karşılaştığı Problemlere Barışçıl Çözüm Bulma, Odaklanarak Dinleme ve Hayvan Sevgisi",
    curiosityQuestion: "İki arkadaş aynı boya kalemini aynı anda kullanmak isterse kavga etmeden bu sorunu nasıl tatlıya bağlayabilir?",
    roadmap: [
      { title: "Barışçıl Sorun Çözme", desc: "Tartışmak yerine konuşarak, sırayla kullanarak adil çözümler üretme." },
      { title: "Kulaktan Kulağa Oyunu", desc: "Fısıldanan kelimeyi dikkatle dinleme ve sırayı bozmadan aktarma." },
      { title: "Karşılıklı Soru Sorma", desc: "Konu dışına çıkmadan akıcı ve merak dolu sorular sorma etkinliği." },
      { title: "4 Ekim Hayvanları Koruma", desc: "Sokaktaki kedi, köpek ve kuş dostlarımıza bir kap su, bir kap sevgi." }
    ],
    section1: {
      title: "Sınıfta Bir Sorun Çıktığında 'Barış Köprüsü'",
      subtitle: "Küs kalmak veya bağırmak hiçbir şeyi çözmez; çözüm konuşmak ve empati kurmaktır.",
      layout: "split-visual",
      card: {
        title: "3 Adımda Sorun Çözme",
        icon: "🕊️❤️",
        desc: "Bir anlaşmazlık olduğunda Barış Köprümüzün adımları:",
        items: [
          { bold: "1. Dur ve Sakinleş", text: "Derin bir nefes al, bağırmak yerine sakin bir ses tonuna geç." },
          { bold: "2. Duyguyu Anlat", text: "'Sen kalemi elimden çekince üzüldüm, çünkü resmimi bitirecektim' de." },
          { bold: "3. Ortak Çözüm Bul", text: "'Önce sen sarıyı kullan, ben kırmızıyı boyayayım; 2 dakika sonra değişelim.'" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#132a24" stroke="#10b981" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#34d399" text-anchor="middle">BARIŞ VE ANLAYIŞ KÖPRÜSÜ</text>

        <!-- Sol Taraf: Sakinleş -->
        <rect x="50" y="90" width="120" height="130" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="110" y="125" font-size="28" text-anchor="middle">🧘</text>
        <text x="110" y="160" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">1. SAKİNLEŞ</text>
        <text x="110" y="180" font-size="9" fill="#94a3b8" text-anchor="middle">Derin nefes al</text>

        <!-- Orta Taraf: Konuş & Dinle -->
        <rect x="210" y="80" width="120" height="150" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <text x="270" y="120" font-size="32" text-anchor="middle">🤝</text>
        <text x="270" y="160" font-size="12" font-weight="bold" fill="#34d399" text-anchor="middle">2. ANLAT &amp; DİNLE</text>
        <text x="270" y="180" font-size="9" fill="#94a3b8" text-anchor="middle">Duygunu ifade et</text>
        <text x="270" y="195" font-size="9" fill="#94a3b8" text-anchor="middle">Söz kesme</text>

        <!-- Sağ Taraf: Paylaş -->
        <rect x="370" y="90" width="120" height="130" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="430" y="125" font-size="28" text-anchor="middle">🎁</text>
        <text x="430" y="160" font-size="11" font-weight="bold" fill="#f59e0b" text-anchor="middle">3. ANLAŞ &amp; BÖLÜŞ</text>
        <text x="430" y="180" font-size="9" fill="#94a3b8" text-anchor="middle">Sırayla kullan</text>

        <!-- Oklar -->
        <path d="M 175 155 L 205 155" stroke="#10b981" stroke-width="2"/>
        <path d="M 335 155 L 365 155" stroke="#10b981" stroke-width="2"/>
        <rect x="70" y="245" width="400" height="22" rx="4" fill="#070b14"/>
        <text x="270" y="260" font-size="9" font-weight="bold" fill="#f59e0b" text-anchor="middle">4 Ekim Hayvanları Koruma Günü: Doğadaki tüm canlılar bizim dostumuzdur!</text>
      </svg>`
    },
    section2: {
      title: "Kulaktan Kulağa ve Karşılıklı Soru Sorma",
      subtitle: "Fısıltılar kelimeye, kelimeler kahkahaya dönüşür.",
      cards: [
        {
          badge: "Odaklanma",
          title: "Kulaktan Kulağa Oyunu",
          desc: "Fısıldanan gizli kelimeyi çok dikkatle dinleriz; doğru duyup sıradaki arkadaşımızın kulağına tek seferde fısıldarız."
        },
        {
          badge: "Soru Üretme",
          title: "Grup Soru Yarışması",
          desc: "Sınıf iki gruba ayrılır; bir grup 'Tavşanlar neden havuç sever?' gibi meraklı bir soru sorar, diğer grup tatlı tatlı yanıtlar."
        },
        {
          badge: "Hayvan Sevgisi",
          title: "Sokak Hayvanlarını Koruma",
          desc: "Kapımızın önüne bir kap temiz su koymak, aç kalan kuşlara ekmek kırıntısı serpmek minik bir kahramanlıktır."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Kulaktan Kulağa ve Kedi Besleme Kumbarası'",
      desc: "Öğrenciler sırada kulaktan kulağa zinciri kurar, ardından atık karton kutudan hayvanlar için mama kabı süsler.",
      steps: [
        { title: "Kulaktan Kulağa", desc: "Öğretmen ilk öğrencinin kulağına 'Kelebek' der, en sondaki öğrenci kelimeyi sesli söyler." },
        { title: "Sorun Çözme Canlandırması", desc: "İki öğrenci sınıfta oyuncak paylaşamama sorununu konuşarak çözer ve alkış alır." },
        { title: "Kedi Kabı Süsleme", desc: "Küçük plastik kaba renkli stickerlar yapıştırıp okul bahçesindeki kedilere su koyma." }
      ],
      criteria: [
        "Fısıldanan sözcüğü dikkatle dinleyip arkadaşına aktarabilme",
        "Anlaşmazlıklarda şiddet veya küsme yerine konuşma yolunu seçebilme",
        "Hayvanları koruma bilinciyle şefkat duygusu sergileyebilme"
      ]
    },
    tips: {
      safetyTitle: "Doğa ve Arkadaşlık Öğüdü",
      safetyRules: [
        { bold: "Sokak Hayvanlarına Nazik Davranın", text: "Tanımadığımız hayvanları uzaktan sever, onları korkutacak ani hareketler yapmayız." }
      ],
      myths: [
        { wrong: "Bir arkadaşımız bizimle aynı fikirde değilse onunla bir daha oynamamalıyız.", correct: "Hayır! Farklı düşünceler zenginliktir. Konuşarak ortak bir orta yol her zaman bulunur." }
      ]
    },
    quiz: {
      question: "Sınıfta iki arkadaş aynı kitabı okumak istediğinde en doğru ve saygılı çözüm hangisidir?",
      options: [
        { text: "A) Kitabı yan yana oturup birlikte incelemek veya sırayla okumak.", isCorrect: true },
        { text: "B) Kitabı yırtmak.", isCorrect: false },
        { text: "C) Birbirine küsmek.", isCorrect: false },
        { text: "D) Kitabı pencereden atmak.", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Eşyaları <strong>birlikte paylaşmak veya sırayla kullanmak</strong> gerçek dostların tercih ettiği en güzel yoldur."
    },
    summaryRules: [
      { bold: "Konuşarak Çöz", text: "Kavga yok, küsmek yok; konuşarak anlaşmak var." },
      { bold: "Dikkatle Dinle", text: "Kulaktan kulağa oyunu dinleme kaslarımızı güçlendirir." },
      { bold: "Haftaya Tekerlemeler!", text: "Önümüzdeki hafta hızlı sayışmalar ve atık malzemelerle üretim yapacağız!" }
    ],
    homework: "Evinizin önüne veya balkonunuza kuşlar ve sokak hayvanları için küçük bir kap temiz su koyun.",
    nextWeekPreview: "Duygularımızı İfade Etme, Atık Malzemelerle 10'luk Yapma ve Tekerlemeler!"
  },

  // 4. HAFTA
  {
    week: 4,
    date: "05 - 11 Ekim",
    hours: "4 Ders Saati",
    unit: "Atık Malzemeler ve Tekerlemeler",
    unitBadge: "4. Tema: Geri Dönüşüm",
    unitTheme: "tema-1",
    title: "4. Hafta: Duyguları İfade Etme, Atık Malzemeler ve Tekerlemeler",
    subtitle: "Düğmelerden Sayı Seti, Ritimli Tekerlemeler ve Fotoğraf Yorumlama",
    outcomeCode: "SE.1.4 (Yaratıcılık & Ritim)",
    targetSkill: "Duyguları Topluluk Önünde İfade Etme, Atık Malzemeyi Değerlendirme ve Ritmik Tekerleme",
    curiosityQuestion: "Evde kullanılmayan eski düğmeler, şişe kapakları veya kutular çöp müdür, yoksa eğlenceli birer oyuncak olabilir mi?",
    roadmap: [
      { title: "Duyguları İfade Etme", desc: "Mutluluk, şaşkınlık, heyecan ve üzüntü duygularını rahatça anlatma." },
      { title: "Atık Malzeme Atölyesi", desc: "Düğmeler ve kapaklarla 10'luk matematik ve sanat materyali yapma." },
      { title: "Tekerleme ve Sayışma", desc: "Oyun öncesi 'Ooo piti piti' gibi sayışmalarla ebe seçme ritmi." },
      { title: "Fotoğraf Yorumlama", desc: "Ailesiyle çekilen fotoğraftaki mutlu anları arkadaşlarıyla paylaşma." }
    ],
    section1: {
      title: "Düğmelerle 10'luk Seti ve Geri Dönüşüm",
      subtitle: "Çöpe gidecek malzemeleri akıllıca kullanarak doğayı korur ve öğreniriz.",
      layout: "split-visual",
      card: {
        title: "Atık Düğme Sayacı",
        icon: "🔘♻️",
        desc: "Düğmeler ve kapaklarla neler yapabiliriz?",
        items: [
          { bold: "1. Gruplama", text: "Düğmeleri renklerine ve büyüklüklerine göre sepetlere ayırma." },
          { bold: "2. 10'luk Blok Yapma", text: "Bir karton şerit üzerine 10 adet renkli düğme dizerek onluk deste oluşturma." },
          { bold: "3. Doğayı Koruma", text: "Plastik atıkları atmayarak toprağı ve denizleri temiz tutma bilinci." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#f59e0b" text-anchor="middle">ATIK DÜĞMELERLE 10'LUK DESTE SAYACI</text>

        <!-- Karton Şerit -->
        <rect x="50" y="90" width="440" height="60" rx="10" fill="#334155" stroke="#64748b" stroke-width="1.5"/>

        <!-- 10 Adet Düğme -->
        <!-- 1-5 Mavi -->
        <circle cx="80" cy="120" r="16" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
        <text x="80" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">1</text>
        <circle cx="120" cy="120" r="16" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
        <text x="120" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">2</text>
        <circle cx="160" cy="120" r="16" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
        <text x="160" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">3</text>
        <circle cx="200" cy="120" r="16" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
        <text x="200" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">4</text>
        <circle cx="240" cy="120" r="16" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
        <text x="240" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">5</text>

        <!-- 6-10 Turuncu/Pembe -->
        <circle cx="295" cy="120" r="16" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
        <text x="295" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">6</text>
        <circle cx="335" cy="120" r="16" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
        <text x="335" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">7</text>
        <circle cx="375" cy="120" r="16" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
        <text x="375" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">8</text>
        <circle cx="415" cy="120" r="16" fill="#ec4899" stroke="#ffffff" stroke-width="2"/>
        <text x="415" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">9</text>
        <circle cx="455" cy="120" r="16" fill="#ec4899" stroke="#ffffff" stroke-width="2"/>
        <text x="455" y="125" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">10</text>

        <!-- Alt Kutu: Tekerleme Şiiri -->
        <rect x="70" y="175" width="400" height="75" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
        <text x="270" y="198" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">"Komşu komşu hu, oğlun geldi mi? Geldi."</text>
        <text x="270" y="218" font-size="10" fill="#cbd5e1" text-anchor="middle">"Ne getirdi? İnci boncuk. Kime kime? Sana bana..."</text>
        <text x="270" y="238" font-size="9" fill="#94a3b8" text-anchor="middle">Ritimle tekerleme söylemek dil kaslarımızı güçlendirir!</text>
      </svg>`
    },
    section2: {
      title: "Duygularımız ve Sayışmacalar",
      subtitle: "İçimizdeki hisleri tanıyor ve adlandırıyoruz.",
      cards: [
        {
          badge: "Duygu Çemberi",
          title: "Bugün Nasıl Hissediyorum?",
          desc: "Mutlu, heyecanlı, yorgun veya şaşkın... Her duygu doğaldır ve doğru kelimelerle anlatıldığında güzelleşir."
        },
        {
          badge: "Oyun Başlangıcı",
          title: "Adil Sayışmaca",
          desc: "'İğne battı, canımı yaktı, tombul kuş...' Tekerleme ile ebe seçerken sırayı atlamamak adaletin başlangıcıdır."
        },
        {
          badge: "Aile Fotoğrafı",
          title: "Anlat Bakalım",
          desc: "Fotoğraftaki küçük anıyı sınıfta topluluk karşısında heyecanlanmadan anlatma alıştırması."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Atık Kapaklardan Tırtıl Yapımı'",
      desc: "Öğrenciler evden getirdikleri plastik su kapaklarını delikli ipten geçirerek renkli bir sayma tırtılı üretir.",
      steps: [
        { title: "Kapakları Diz", desc: "10 adet kapağı renk sırasına göre yan yana dizeriz." },
        { title: "İpten Geçir", desc: "Kapakların deliklerinden yün ipi geçirip ucuna düğüm atarız." },
        { title: "Gözlerini Yapıştır", desc: "En öndeki kapağa sevimli iki göz çizip tırtılımızı konuştururuz." }
      ],
      criteria: [
        "Atık malzemeyi yaratıcı bir oyuncağa dönüştürebilme",
        "Tekerlemeyi ritmine ve sözlerine uygun akıcı söyleyebilme",
        "Topluluk önünde konuşurken göz teması kurabilme"
      ]
    },
    tips: {
      safetyTitle: "Geri Dönüşüm ve Güvenlik",
      safetyRules: [
        { bold: "Temiz Atık Malzeme", text: "Etkinlikte kullanacağımız kapak veya kutuları mutlaka önceden yıkayıp kurularız." }
      ],
      myths: [
        { wrong: "Tekerlemeyi sadece oyunun başında bir kere hızlıca söyleyip geçmeliyiz.", correct: "Hayır! Tekerlemeler teker teker, hece hece ve ritimli söylenirse çok daha eğlenceli olur." }
      ]
    },
    quiz: {
      question: "Evimizdeki boş karton kutuları veya plastik su şişesi kapaklarını çöpe atmak yerine sınıfta oyuncak yapmak ne anlama gelir?",
      options: [
        { text: "A) Geri Dönüşüm ve Doğayı Koruma ♻️", isCorrect: true },
        { text: "B) Zamanı boşa harcamak", isCorrect: false },
        { text: "C) Evi kirletmek", isCorrect: false },
        { text: "D) Uyumak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Atık malzemeleri tekrar kullanarak yeni bir ürün üretmeye <strong>Geri Dönüşüm</strong> denir ve bu doğamızı korur!"
    },
    summaryRules: [
      { bold: "Duygunu Paylaş", text: "Hissettiklerini arkadaşlarına açıkça anlat." },
      { bold: "Atıkları Değerlendir", text: "Kapak ve kutulardan harika oyuncaklar üret." },
      { bold: "Haftaya Gülmece!", text: "Önümüzdeki hafta Nasreddin Hoca fıkraları ve Deve-Cüce oyunu var!" }
    ],
    homework: "Evde kullanılmayan 5 adet şişe kapağını yıkayıp kurutarak bir sonraki derse getirin.",
    nextWeekPreview: "Masal Anlatma, Deve-Cüce Oyunu ve Neşeli Nasreddin Hoca Fıkraları!"
  },

  // 5. HAFTA
  {
    week: 5,
    date: "12 - 18 Ekim",
    hours: "4 Ders Saati",
    unit: "Oyun Kuralları ve Fıkralar",
    unitBadge: "5. Tema: Neşeli Sınıf",
    unitTheme: "tema-1",
    title: "5. Hafta: Masal Anlatma, Deve-Cüce Oyunu ve Fıkralar",
    subtitle: "Dikkati Toplama, Sınıf İçi Paylaşım, Nasreddin Hoca Fıkraları ve Duygu İfadesi",
    outcomeCode: "SE.1.5 (Mizah & Dikkat)",
    targetSkill: "Oyun Kurallarına Uyma, Fıkra Canlandırma, Mutluluk ve Rahatsızlıkları İfade Edebilme",
    curiosityQuestion: "Nasreddin Hoca göle neden yoğurt mayalamıştır ve 'Ya tutarsa!' sözü bize ne öğretir?",
    roadmap: [
      { title: "Deve - Cüce Oyunu", desc: "Öğretmenin komutlarına göre hızlıca çömelip ayağa kalkma refleks oyunu." },
      { title: "Nasreddin Hoca Fıkraları", desc: "Hem güldüren hem düşündüren eğitici fıkraları sınıfta anlatma." },
      { title: "Duygularımızı Anlatıyoruz", desc: "'Bizi neler mutlu eder, neler rahatsız eder?' çember sohbeti." },
      { title: "Öz Değerlendirme & Alkış", desc: "Oyunda kazananı tebrik etme ve sınıf kurallarına bağlılık." }
    ],
    section1: {
      title: "Deve - Cüce Oyunu: Dikkat ve Refleks",
      subtitle: "Gözlerimiz öğretmende, kulaklarımız komutta; şaşırmadan oyunda kalma mücadelesi.",
      layout: "split-visual",
      card: {
        title: "Oyun Kuralları",
        icon: "🐪📏",
        desc: "Deve - Cüce oyununun 3 altın kuralı:",
        items: [
          { bold: "1. Deve Deyince", text: "Dimdik ayağa kalkarız, kollarımızı yukarı doğru esnetiriz." },
          { bold: "2. Cüce Deyince", text: "Hızlıca yere çömelir, ellerimizi dizlerimize koyarız." },
          { bold: "3. Yanılan Kişi", text: "Hiç üzülmeden kenara geçer ve arkadaşlarını neşeyle alkışlayarak izler." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#38bdf8" text-anchor="middle">DEVE - CÜCE DİKKAT SAHNESİ</text>

        <!-- Sol: Deve (Ayakta) -->
        <rect x="70" y="80" width="160" height="150" rx="12" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="150" y="125" font-size="34" text-anchor="middle">🧍‍♂️</text>
        <text x="150" y="165" font-size="14" font-weight="bold" fill="#f59e0b" text-anchor="middle">DEVE!</text>
        <text x="150" y="190" font-size="10" fill="#cbd5e1" text-anchor="middle">Ayakta dik dur!</text>
        <text x="150" y="208" font-size="9" fill="#94a3b8" text-anchor="middle">(Boyumuz uzar)</text>

        <!-- Sağ: Cüce (Çömelmiş) -->
        <rect x="310" y="80" width="160" height="150" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <text x="390" y="145" font-size="34" text-anchor="middle">🧎‍♂️</text>
        <text x="390" y="175" font-size="14" font-weight="bold" fill="#10b981" text-anchor="middle">CÜCE!</text>
        <text x="390" y="198" font-size="10" fill="#cbd5e1" text-anchor="middle">Hızlıca çömel!</text>
        <text x="390" y="215" font-size="9" fill="#94a3b8" text-anchor="middle">(Küçücük ol)</text>

        <rect x="70" y="245" width="400" height="22" rx="4" fill="#070b14"/>
        <text x="270" y="260" font-size="9" font-weight="bold" fill="#cbd5e1" text-anchor="middle">Öğretmen kandırmaca yapabilir: Deve derken çömelebilir, sakın aldanma!</text>
      </svg>`
    },
    section2: {
      title: "Nasreddin Hoca Fıkraları ve Duygu Paylaşımı",
      subtitle: "Tebessüm ederken düşünür, duygularımızı korkmadan paylaşırız.",
      cards: [
        {
          badge: "Fıkra Saati",
          title: "Parayı Veren Düdüğü Çalar",
          desc: "Hoca'nın pazara giderken düdük isteyen çocuklara verdiği meşhur ders: Emeğin ve hakkın önemi."
        },
        {
          badge: "Duygu Sohbeti",
          title: "Beni Neler Mutlu Eder?",
          desc: "Kardeşimizle oynamak, annemize sarılmak, okulda yeni bir harf öğrenmek... Mutluluğu paylaşınca çoğalır."
        },
        {
          badge: "Sınır Koyma",
          title: "Beni Neler Rahatsız Eder?",
          desc: "İzinsiz eşyamızın alınması veya itilip kakılmak; 'Lütfen dur, bundan hoşlanmıyorum' diyebilme cesareti."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Deve-Cüce Şampiyonası ve Fıkra Canlandırma'",
      desc: "Tüm sınıf ayakta Deve-Cüce oynar; elenenler kıkırdayarak jüriye geçer. Ardından istekli öğrenciler Hoca fıkrası canlandırır.",
      steps: [
        { title: "Deve - Cüce Yarışması", desc: "Öğretmen şaşırtmalı komutlar verir, son 3'e kalan öğrenci alkışlanır." },
        { title: "Hoca Kavuğu Başa", desc: "Karton kavuk takan öğrenci 'Göle Maya Çalma' fıkrasını sınıfta anlatır." },
        { title: "Duygu Kartları", desc: "Gülen yüz ve üzgün yüz kartlarıyla günün duygusunu panoya asma." }
      ],
      criteria: [
        "İşitsel komutlara anında ve doğru beden hareketiyle tepki verebilme",
        "Oyunda elendiğinde öfkelenmeden kuralı kabullenebilme",
        "Kısa bir fıkrayı tebessümle ve anlaşılır şekilde aktarabilme"
      ]
    },
    tips: {
      safetyTitle: "Oyun Etiği ve Arkadaşlık",
      safetyRules: [
        { bold: "Elenen Arkadaşla Asla Dalga Geçilmez", text: "Oyundan çıkan arkadaşımıza 'Bir dahaki sefere daha iyi yaparsın' diyerek destek oluruz." }
      ],
      myths: [
        { wrong: "Üzgün olduğumuzda kimseye söylemeyip içimize atmalıyız.", correct: "Hayır! Bizi üzen veya rahatsız eden şeyleri öğretmenimize ve ailemize söylemek bizi hemen rahatlatır." }
      ]
    },
    quiz: {
      question: "Deve - Cüce oyununda öğretmenimiz 'Deve' dediğinde ne yapmalıyız?",
      options: [
        { text: "A) Hemen ayağa dik kalkmalıyız.", isCorrect: true },
        { text: "B) Yere yatıp uyumalıyız.", isCorrect: false },
        { text: "C) Sıranın arkasına kaçmalıyız.", isCorrect: false },
        { text: "D) Gözlerimizi kapatıp şarkı söylemeliyiz.", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> 'Deve' komutu geldiğinde <strong>dimdik ayağa kalkarız</strong>, 'Cüce' denildiğinde ise çömeliriz!"
    },
    summaryRules: [
      { bold: "Dikkatini Topla", text: "Komutları dikkatle dinleyerek refleksini geliştir." },
      { bold: "Gül ve Güldür", text: "Nasreddin Hoca fıkraları neşemize neşe katar." },
      { bold: "Haftaya Atatürk Sevgisi!", text: "Gelecek hafta Atatürk'ün çocuk sevgisini ve monolog sanatını öğreneceğiz!" }
    ],
    homework: "Büyüklerinizden Nasreddin Hoca'nın 'Kazan Doğurdu' fıkrasını dinleyin.",
    nextWeekPreview: "Atatürk'ün Hayatı ve Çocuk Sevgisi Filmi, Monolog & Mimik Çalışması!"
  },

  // 6. HAFTA
  {
    week: 6,
    date: "19 - 25 Ekim",
    hours: "4 Ders Saati",
    unit: "Atatürk'ün Çocuk Sevgisi ve Monolog",
    unitBadge: "6. Tema: Millî Değerler",
    unitTheme: "tema-2",
    title: "6. Hafta: Atatürk ve Çocuk Sevgisi, Monolog ve Bulmacalar",
    subtitle: "Ulu Önderin Çocuklarla Anıları, Beden Dili & Mimik Kullanımı, Çizgi Bulmacaları",
    outcomeCode: "SE.1.6 (Tarih & Beden Dili)",
    targetSkill: "Atatürk'ün Çocuk Sevgisini Kavrama, Beden Dili ve Mimiklerle Monolog Sunabilme",
    curiosityQuestion: "Gazi Mustafa Kemal Atatürk çocukları neden 'Geleceğin birer gülü, yıldızı ve ikbal ışığı' olarak görmüştür?",
    roadmap: [
      { title: "Atatürk ve Çocuk Filmi", desc: "Atatürk'ün manevi kızı Ülkü ve çocuklarla olan sevgi dolu anılarını izleme." },
      { title: "Monolog Sanatı", desc: "Topluluk önünde konuşurken el-kol hareketleri ve yüz mimiklerini doğru kullanma." },
      { title: "Çizgi ve Labirent Bulmaca", desc: "Tavşanı havuca ulaştıran labirenti el kaldırmadan kurşun kalemle çizme." },
      { title: "Öykü Seslendirme", desc: "Masaldaki rüzgârı 'fıııışşş', yağmuru parmak şıklatarak canlandırma." }
    ],
    section1: {
      title: "Atatürk'ün Kalbindeki Çocuk Sevgisi",
      subtitle: "'Küçük hanımlar, küçük beyler! Sizler geleceğin mimarısınız.'",
      layout: "split-visual",
      card: {
        title: "Atatürk'ün Çocuk Anıları",
        icon: "🇹🇷🧒",
        desc: "Büyük liderin çocuklara verdiği değer:",
        items: [
          { bold: "Çocuk Bayramı", text: "Dünyada çocuklara bayram (23 Nisan) hediye eden tek ve ilk liderdir." },
          { bold: "Onları Dinlerdi", text: "Okulları ziyaret ettiğinde en arka sırada oturan çocukların yanına gidip sohbet ederdi." },
          { bold: "Gülümseyen Yüz", text: "Çocukların korkusuz, özgür ve neşeli büyümesini en büyük zenginlik sayardı." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#ec4899" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#f472b6" text-anchor="middle">ATATÜRK VE GELECEĞİN YILDIZLARI</text>

        <!-- Kalp ve Bayrak -->
        <circle cx="270" cy="140" r="50" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-width="3"/>
        <text x="270" y="152" font-size="44" text-anchor="middle">🇹🇷</text>

        <!-- Sol Çocuk -->
        <circle cx="120" cy="140" r="34" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="120" y="148" font-size="26" text-anchor="middle">👧</text>
        <text x="120" y="195" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Sevgi &amp; Saygı</text>

        <!-- Sağ Çocuk -->
        <circle cx="420" cy="140" r="34" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="420" y="148" font-size="26" text-anchor="middle">👦</text>
        <text x="420" y="195" font-size="11" font-weight="bold" fill="#f59e0b" text-anchor="middle">Çalışkanlık</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#cbd5e1" text-anchor="middle">"Çocuklar geleceğimizin meşalesidir." - Mustafa Kemal Atatürk</text>
      </svg>`
    },
    section2: {
      title: "Monolog ve Beden Dili: Mimiklerin Gücü",
      subtitle: "Sadece sesimizle değil, gözlerimiz ve ellerimizle de konuşuruz.",
      cards: [
        {
          badge: "Monolog Nedir?",
          title: "Tek Başına Konuşma",
          desc: "Sahnede tek başına bir duyguyu, sevinci veya bir hayvanı ses ve hareketlerle canlandırma sanatı."
        },
        {
          badge: "Mimikler",
          title: "Yüzümüzün İfadeleri",
          desc: "Kaşlarımızı kaldırınca şaşkınlık, gülümseyince neşe, dudak bükünce üzüntü... Yüzümüz bir tiyatro sahnesidir."
        },
        {
          badge: "Labirent Çözümü",
          title: "Dikkatli Çizgi",
          desc: "Labirentte çıkmaz sokaklara girmeden gözlerimizle önce yolu bulur, sonra kalemi sürükleriz."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Küçük Tiyatrocular Monolog Sahnesi'",
      desc: "Her öğrenci sahneye çıkarak 30 saniye boyunca bir mesleği (doktor, astronot, ressam) sadece mimik ve sesle canlandırır.",
      steps: [
        { title: "Karakterini Seç", desc: "Öğretmenin sepetinden bir rol kâğıdı seçme (Örn: Çiçek sulayan neşeli bahçıvan)." },
        { title: "Mimiklerini Kullan", desc: "Gözlerinle, ellerinle ve beden hareketlerinle karakteri canlandırma." },
        { title: "Sınıf Alkışı", desc: "Doğru tahmin eden arkadaşlarla birlikte canlandıranı alkışlama." }
      ],
      criteria: [
        "Topluluk önünde çekinmeden beden dili ve yüz ifadelerini kullanabilme",
        "Atatürk'ün çocuklara verdiği değeri kendi cümleleriyle özetleyebilme",
        "Labirent bulmacasını el kaldırmadan kurallara uygun çözebilme"
      ]
    },
    tips: {
      safetyTitle: "Sahne ve Özgüven",
      safetyRules: [
        { bold: "Hata Yapmaktan Korkma", text: "Sahnede kelimeyi unutsan bile gülümsemeye devam et; arkadaşlarının hepsi senin dostun!" }
      ],
      myths: [
        { wrong: "Konuşurken ellerimizi cebimize sokup yere bakmalıyız.", correct: "Hayır! Dinleyicilerin gözlerine bakmalı, ellerimizi doğal ve serbest hareket ettirmeliyiz." }
      ]
    },
    quiz: {
      question: "Dünyada çocuklara bayram (23 Nisan) hediye eden ilk ve tek ulu önder kimdir?",
      options: [
        { text: "A) Gazi Mustafa Kemal Atatürk 🇹🇷", isCorrect: true },
        { text: "B) Kaptan Kanca", isCorrect: false },
        { text: "C) Pamuk Prenses", isCorrect: false },
        { text: "D) Noel Baba", isCorrect: false }
      ],
      explanation: "🎉 <strong>Bravo, Doğru Cevap: A!</strong> Çocuklara ve geleceğe sonsuz güven duyan cumhuriyetimizin kurucusu <strong>Gazi Mustafa Kemal Atatürk</strong>tür!"
    },
    summaryRules: [
      { bold: "Atatürk'ü Sev", text: "Onun bilime ve eğitime verdiği önemi örnek al." },
      { bold: "Beden Dili Güçtür", text: "Gülümseyerek ve dik durarak konuş." },
      { bold: "Haftaya 29 Ekim!", text: "Gelecek hafta Cumhuriyet Bayramı coşkusuyla sınıflarımızı süsleyeceğiz!" }
    ],
    homework: "Ailenize Atatürk'ün çocuklarla ilgili küçük bir anısını anlattırıp dinleyin.",
    nextWeekPreview: "29 Ekim Cumhuriyet Bayramı, Nezaket Sözcükleri ve Kızılay Çadırı Maketi!"
  },

  // 7. HAFTA
  {
    week: 7,
    date: "26 Ekim - 01 Kasım",
    hours: "4 Ders Saati",
    unit: "Cumhuriyet Bayramı ve Nezaket",
    unitBadge: "7. Tema: Cumhuriyet & Kızılay",
    unitTheme: "tema-2",
    title: "7. Hafta: 29 Ekim Cumhuriyet Bayramı, Nezaket ve Kızılay",
    subtitle: "Kırmızı Beyaz Bayraklar, Sihirli Nezaket Sözleri ve Kızılay Çadırı Kes-Yapıştır",
    outcomeCode: "SE.1.7 (Vatanseverlik & Nezaket)",
    targetSkill: "Cumhuriyet Coşkusunu Yaşama, Nezaket İfadelerini Günlük Yaşamda Kullanma ve El Becerisi",
    curiosityQuestion: "'Günaydın, lütfen, teşekkür ederim, geçmiş olsun' sözcüklerine neden 'Sihirli Nezaket Sözcükleri' denir?",
    roadmap: [
      { title: "29 Ekim Coşkusu", desc: "Cumhuriyetin ilanı, bayrağımızın al rengi ve marşlar eşliğinde kutlama." },
      { title: "Sihirli Nezaket Sözleri", desc: "Günaydın, afedersiniz, teşekkür ederim sözlerini canlandırarak öğrenme." },
      { title: "Kızılay Haftası & Yardım", desc: "Zor durumda kalan insanlara şefkat eli uzatan Kızılay'ın önemi." },
      { title: "Bayrak ve Çadır Maketi", desc: "Kırmızı beyaz el işi kâğıtlarıyla sınıf süsü ve hilâl yapımı." }
    ],
    section1: {
      title: "29 Ekim Cumhuriyet Bayramı: Bağımsızlık ve Işık",
      subtitle: "Cumhuriyet; özgürlük, kardeşlik ve milletimizin kendi kendini yönetmesidir.",
      layout: "split-visual",
      card: {
        title: "Cumhuriyetin Bize Kattıkları",
        icon: "🇹🇷✨",
        desc: "Cumhuriyet ile kavuştuğumuz güzellikler:",
        items: [
          { bold: "Her Çocuk Okula", text: "Kız-erkek tüm çocukların eşit ve parasız eğitim hakkı." },
          { bold: "Barış ve Huzur", text: "Yurtta sulh, cihanda sulh anlayışıyla kardeşçe yaşamak." },
          { bold: "Al Bayrak", text: "Göklerde dalgalanan ay yıldızlı al bayrağımızın gururu." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
        <text x="270" y="55" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">29 EKİM CUMHURİYET BAYRAMI</text>

        <!-- Büyük Türk Bayrağı -->
        <rect x="140" y="80" width="260" height="150" rx="10" fill="#e11d48" stroke="#ffffff" stroke-width="3"/>
        <!-- Hilal -->
        <path d="M 235 155 A 40 40 0 1 0 235 95 A 32 32 0 1 1 235 155 Z" fill="#ffffff"/>
        <!-- Yıldız -->
        <polygon points="275,115 280,128 295,128 283,136 288,149 275,140 262,149 267,136 255,128 270,128" fill="#ffffff"/>

        <rect x="70" y="245" width="400" height="22" rx="4" fill="#070b14"/>
        <text x="270" y="260" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Cumhuriyetimizin 103. Yılı Kutlu Olsun! 🇹🇷</text>
      </svg>`
    },
    section2: {
      title: "Sihirli Nezaket Sözcükleri ve Kızılay",
      subtitle: "Tatlı dil yılanı deliğinden çıkarır; nezaket insanı sevdirir.",
      cards: [
        {
          badge: "Nezaket",
          title: "Sihirli 4 Sözcük",
          desc: "1. 'Günaydın', 2. 'Lütfen', 3. 'Teşekkür Ederim', 4. 'Özür Dilerim'. Bu sözcükler her kapıyı açar."
        },
        {
          badge: "Kızılay",
          title: "Beyaz Çadır & Kırmızı Hilal",
          desc: "Depremde, selde veya yangında sıcacık çorba ve battaniye ulaştıran yardım meleği kuruluşumuz."
        },
        {
          badge: "Kes - Yapıştır",
          title: "Kırmızı Hilal Rozeti",
          desc: "Beyaz kartonun üzerine kırmızı hilal yapıştırarak Kızılay gönüllüsü rozeti hazırlama."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Cumhuriyet Zinciri ve Nezaket Draması'",
      desc: "Öğrenciler kırmızı-beyaz halkaları birbirine geçirerek sınıfı süsler; ardından 'Geçmiş Olsun' dramasını canlandırır.",
      steps: [
        { title: "Cumhuriyet Zinciri", desc: "Kırmızı ve beyaz kâğıt şeritlerini halka yapıp tavana asma." },
        { title: "Nezaket Draması", desc: "Hasta olan arkadaşına çiçek götürüp 'Geçmiş olsun' deme provası." },
        { title: "Kızılay Çadırı", desc: "Beyaz kâğıdı üçgen katlayıp üzerine kırmızı hilal çizerek çadır yapma." }
      ],
      criteria: [
        "Cumhuriyet Bayramı'nın anlamını coşkuyla ifade edebilme",
        "Nezaket sözcüklerini doğru yerde ve zamanda kullanabilme",
        "Kızılay'ın yardımseverlik değerini kavrayabilme"
      ]
    },
    tips: {
      safetyTitle: "İletişim ve Vatan Sevgisi",
      safetyRules: [
        { bold: "Bayrağımıza Saygı", text: "Şanlı Türk bayrağımızı asla yere düşürmeyiz; daima başımızın üstünde tutarız." }
      ],
      myths: [
        { wrong: "Teşekkür etmek veya özür dilemek insanı zayıf gösterir.", correct: "Hayır! Özür dilemek ve teşekkür etmek kişinin ne kadar olgun, kibar ve güçlü olduğunu gösterir." }
      ]
    },
    quiz: {
      question: "Sabah okula geldiğimizde öğretmenimize ve sınıf arkadaşlarımıza söyleyeceğimiz en güzel nezaket sözü hangisidir?",
      options: [
        { text: "A) 'Günaydın arkadaşlar!' ☀️", isCorrect: true },
        { text: "B) 'Çekilin önümden!'", isCorrect: false },
        { text: "C) 'Uykum var konuşmayın!'", isCorrect: false },
        { text: "D) Hiçbir şey demeden kapıyı çarpmak.", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Sabahları güler yüzle <strong>'Günaydın!'</strong> demek herkesin gününü aydınlatır!"
    },
    summaryRules: [
      { bold: "Cumhuriyeti Koru", text: "Bize emanet edilen bu vatanı çok çalışarak büyüteceğiz." },
      { bold: "Kibar Ol", text: "Sihirli nezaket sözcüklerini dilinden düşürme." },
      { bold: "Haftaya Kenar Süsleri!", text: "Önümüzdeki hafta defterlerimizi süsleyen harika geometrik desenler çizeceğiz!" }
    ],
    homework: "29 Ekim Cumhuriyet Bayramı için pencerenize ay yıldızlı bir Türk bayrağı asın.",
    nextWeekPreview: "Kızılay Haftası, Defter Kenar Süsü Yapımı ve Sorun Çözme Atölyesi!"
  },

  // 8. HAFTA
  {
    week: 8,
    date: "02 - 08 Kasım",
    hours: "4 Ders Saati",
    unit: "Ritimli Desenler ve Kenar Süsleri",
    unitBadge: "8. Tema: Estetik & Düzen",
    unitTheme: "tema-2",
    title: "8. Hafta: Kenar Süsü Yapma, Ritmik Desenler ve Film İzleme",
    subtitle: "Defter Kenarlarına Estetik Düzen, Gece-Gündüz Oyunu ve Film Çıkarımları",
    outcomeCode: "SE.1.8 (Görsel Estetik & Ritim)",
    targetSkill: "Belli Bir Düzen İçinde Kenar Süsü Çizebilme, Oyun Kurallarına Uyma ve Film Analizi",
    curiosityQuestion: "Bir defterin kenarına üçgen, kare, daire sırasıyla çizdiğimizde neden bir şarkının ritmi gibi ahenkli görünür?",
    roadmap: [
      { title: "Geometrik Kenar Süsleri", desc: "Üçgen, daire, dalga ve zikzak çizgilerle defter kenarlarını süsleme." },
      { title: "Gece - Gündüz Oyunu", desc: "Öğretmen 'Gece' deyince sıraya yatma, 'Gündüz' deyince uyanma dikkat oyunu." },
      { title: "Sorun Çözme Çemberi", desc: "Sınıf içinde yaşanan minik anlaşmazlıkları empatiyle çözme." },
      { title: "Eğitici Film İzleme", desc: "Dostluk ve yardımlaşma konulu kısa animasyon filmi izleyip yorumlama." }
    ],
    section1: {
      title: "Ritmik Kenar Süsü: Geometrinin Müziği",
      subtitle: "Belli bir sıra ve kuralla tekrarlanan şekiller defterimize düzen ve güzellik katar.",
      layout: "split-visual",
      card: {
        title: "Örüntü ve Kenar Süsü Kuralları",
        icon: "📐🎨",
        desc: "Güzel bir kenar süsü çizerken:",
        items: [
          { bold: "1. Kural Belirle", text: "Örnek kural: 'Bir üçgen, bir yuvarlak, bir üçgen, bir yuvarlak...'" },
          { bold: "2. Eşit Aralık Bırak", text: "Şekillerin birbirine yapışmamasına ve eşit mesafede olmasına özen göster." },
          { bold: "3. Canlı Renklendir", text: "Üçgenleri sarıya, daireleri maviye boyayarak ritmik bir uyum yakala." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#38bdf8" text-anchor="middle">RİTMİK DEFTER KENAR SÜSÜ ÖRÜNTÜSÜ</text>

        <!-- Defter Sayfası Çerçevesi -->
        <rect x="60" y="80" width="420" height="145" rx="8" fill="#ffffff"/>
        
        <!-- Üst Kenar Süsü Şeridi -->
        <!-- Tekrar eden: Üçgen - Daire - Kare -->
        <!-- 1 -->
        <polygon points="90,105 105,90 120,105" fill="#f59e0b"/>
        <circle cx="140" cy="98" r="8" fill="#38bdf8"/>
        <rect x="160" y="90" width="16" height="16" fill="#ec4899"/>

        <!-- 2 -->
        <polygon points="195,105 210,90 225,105" fill="#f59e0b"/>
        <circle cx="245" cy="98" r="8" fill="#38bdf8"/>
        <rect x="265" y="90" width="16" height="16" fill="#ec4899"/>

        <!-- 3 -->
        <polygon points="300,105 315,90 330,105" fill="#f59e0b"/>
        <circle cx="350" cy="98" r="8" fill="#38bdf8"/>
        <rect x="370" y="90" width="16" height="16" fill="#ec4899"/>

        <!-- 4 -->
        <polygon points="405,105 420,90 435,105" fill="#f59e0b"/>
        <circle cx="455" cy="98" r="8" fill="#38bdf8"/>

        <!-- Defter Satır Çizgileri -->
        <line x1="85" y1="130" x2="455" y2="130" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="85" y1="155" x2="455" y2="155" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="85" y1="180" x2="455" y2="180" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="85" y1="205" x2="455" y2="205" stroke="#cbd5e1" stroke-width="1.5"/>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#f59e0b" text-anchor="middle">Kural: Üçgen 🔺 + Daire 🔵 + Kare 🟥 tekrar eder!</text>
      </svg>`
    },
    section2: {
      title: "Gece - Gündüz Oyunu ve Film Saati",
      subtitle: "Gözlerimiz kapanır gece olur, açılır pırıl pırıl gündüz olur.",
      cards: [
        {
          badge: "Oyun",
          title: "Gece - Gündüz Kuralı",
          desc: "Öğretmen 'Gece' deyince kollarımızı sıraya koyup başımızı yaslarız; 'Gündüz' deyince neşeyle uyanırız."
        },
        {
          badge: "Dikkat",
          title: "Şaşırmadan Dur",
          desc: "Gece komutunda kıpırdayan veya gülen elenir; elenen arkadaşımız yeni komutçunun yardımcısı olur."
        },
        {
          badge: "Film Saati",
          title: "Kahramanın Yolu",
          desc: "İzlenen çizgi filmdeki kahramanın neyi başardığını ve hangi zorluğu aştığını sınıfta konuşma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'En Güzel Kenar Süsü Yarışması'",
      desc: "Her öğrenci yazı defterinin kenarına kendi belirlediği 2 şekilli ritmik süsü çizer ve boyar.",
      steps: [
        { title: "Şekil Seçimi", desc: "Örnek: Kalp ve yıldız veya lale ve yaprak motifi seçme." },
        { title: "Cetvelsiz Çizim", desc: "El kaslarını kullanarak sabırla ve aralıkları bozmadan çizme." },
        { title: "Panoda Sergileme", desc: "En düzenli ve temiz kenar süsü yapan defterleri sınıf masasında sergileme." }
      ],
      criteria: [
        "Belirlenen ritmik örüntü kuralını sonuna kadar bozmadan sürdürebilme",
        "Sayfa temizliğine ve düzenine özen gösterebilme",
        "Gece-gündüz oyununda dikkat ve öz denetim sergileyebilme"
      ]
    },
    tips: {
      safetyTitle: "Defter Düzeni ve Estetik",
      safetyRules: [
        { bold: "Silgi Kullanımı", text: "Yanlış yaptığımızda silgiyi defteri yırtmadan, hafifçe ve tek yönde sürterek temizleriz." }
      ],
      myths: [
        { wrong: "Kenar süsü gereksizdir, sadece zaman kaybettirir.", correct: "Hayır! Kenar süsü el kaslarını güçlendirir, yazı yazmayı güzelleştirir ve düzen alışkanlığı kazandırır." }
      ]
    },
    quiz: {
      question: "Bir defter kenarına 'Yıldız ⭐, Ay 🌙, Yıldız ⭐, Ay 🌙' sırasıyla çizildiğinde bir sonraki şekil hangisi olmalıdır?",
      options: [
        { text: "A) Yıldız ⭐", isCorrect: true },
        { text: "B) Karpuz 🍉", isCorrect: false },
        { text: "C) Bisiklet 🚲", isCorrect: false },
        { text: "D) Ayakkabı 👟", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Örüntü kuralımız 'Yıldız, Ay, Yıldız, Ay' şeklinde gittiği için sıradaki şekil <strong>Yıldız ⭐</strong> olmalıdır!"
    },
    summaryRules: [
      { bold: "Düzenli Ol", text: "Defterlerimiz bizim aynamızdır, onları süsleriz." },
      { bold: "Odaklan ve Eğlen", text: "Gece-gündüz oyunu dikkatimizi güçlendirir." },
      { bold: "Haftaya 10 Kasım", text: "Önümüzdeki hafta Atatürk'ü sevgi, saygı ve minnetle anacağız!" }
    ],
    homework: "Resim defterinizin bir sayfasının kenarına üçgen ve yuvarlaklardan oluşan bir kenar süsü çizin.",
    nextWeekPreview: "10 Kasım Atatürk'ü Anma, Nasreddin Hoca Fıkraları ve Saygı Duruşu!"
  },

  // 9. HAFTA
  {
    week: 9,
    date: "09 - 15 Kasım",
    hours: "4 Ders Saati",
    unit: "10 Kasım Atatürk'ü Anma ve Mizah",
    unitBadge: "9. Tema: Saygı & Vefa",
    unitTheme: "tema-2",
    title: "9. Hafta: 10 Kasım Atatürk'ü Anma, Fıkralar ve Kenar Süsü",
    subtitle: "Atatürk'ün Ağaç Sevgisi, Saygı Duruşu, Eğlendirici Fıkralar ve Boyama",
    outcomeCode: "SE.1.9 (Tarih & Vefa)",
    targetSkill: "10 Kasım'ın Anlamını Kavrama, Saygı Duruşu Adabı, Fıkra Anlatma ve Temiz Boyama",
    curiosityQuestion: "Atatürk bir çınar ağacının dalı kesilmesin diye koca bir köşkü raylar üzerinde neden kaydırmıştır?",
    roadmap: [
      { title: "10 Kasım ve Saygı", desc: "Saat 09.05'te saygı duruşu adabı, Atatürk'ü minnet ve çiçeklerle anma." },
      { title: "Yürüyen Köşk Hikâyesi", desc: "Atatürk'ün Yalova'da doğayı ve ağaçları korumak için sergilediği büyük ders." },
      { title: "Nasreddin Hoca Fıkraları", desc: "Düşündüren ve güldüren fıkraları ses tonunu değiştirerek anlatma." },
      { title: "Sonbahar Kenar Süsü", desc: "Çınar yaprakları ve palamut desenleriyle sonbahar temalı kenar süsü." }
    ],
    section1: {
      title: "Atatürk'ün Doğa Sevgisi: 'Yürüyen Köşk'",
      subtitle: "Büyük Önder sadece vatanı değil; toprağı, ağacı ve yeşili de canı gibi severdi.",
      layout: "split-visual",
      card: {
        title: "Bir Dal İçin Köşk Kayan Adam",
        icon: "🌳🏠",
        desc: "Yalova Yürüyen Köşk'ün unutulmaz dersi:",
        items: [
          { bold: "Olay", text: "Yalova'daki köşkün çatısına ulu bir çınar ağacının dalı değiyordu. Bahçıvan 'Dalı keselim Paşam' dedi." },
          { bold: "Atatürk'ün Yanıtı", text: "'Hayır! Ağacın dalı kesilmeyecek, köşk kaydırılacak!' emrini verdi." },
          { bold: "Büyük Ders", text: "Köşk altına konan raylarla 5 metre yana kaydırıldı ve ulu çınar kurtarıldı." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#f59e0b" text-anchor="middle">ATATÜRK'ÜN DOĞA DERSİ: YÜRÜYEN KÖŞK</text>

        <!-- Ulu Çınar Ağacı (Sol) -->
        <path d="M 120 220 L 120 140 Q 120 120 140 100 Q 160 80 180 90" stroke="#78350f" stroke-width="12" fill="none"/>
        <circle cx="120" cy="100" r="45" fill="#15803d" fill-opacity="0.8"/>
        <circle cx="150" cy="80" r="35" fill="#16a34a" fill-opacity="0.8"/>
        <text x="130" y="105" font-size="28" text-anchor="middle">🌳</text>
        <text x="130" y="160" font-size="10" font-weight="bold" fill="#34d399" text-anchor="middle">Ulu Çınar</text>

        <!-- Raylar Üzerinde Köşk (Sağ) -->
        <!-- Raylar -->
        <line x1="220" y1="225" x2="440" y2="225" stroke="#94a3b8" stroke-width="6"/>
        <line x1="220" y1="233" x2="440" y2="233" stroke="#94a3b8" stroke-width="6"/>
        <!-- Ray traversleri -->
        <line x1="240" y1="220" x2="240" y2="238" stroke="#64748b" stroke-width="3"/>
        <line x1="280" y1="220" x2="280" y2="238" stroke="#64748b" stroke-width="3"/>
        <line x1="320" y1="220" x2="320" y2="238" stroke="#64748b" stroke-width="3"/>
        <line x1="360" y1="220" x2="360" y2="238" stroke="#64748b" stroke-width="3"/>
        <line x1="400" y1="220" x2="400" y2="238" stroke="#64748b" stroke-width="3"/>

        <!-- Köşk Binası -->
        <rect x="290" y="120" width="120" height="95" rx="6" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
        <polygon points="280,120 350,80 420,120" fill="#dc2626"/>
        <text x="350" y="160" font-size="26" text-anchor="middle">🏠</text>
        <text x="350" y="200" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">Kaydırılan Köşk</text>

        <!-- Hareket Oku -->
        <path d="M 270 170 L 240 170" stroke="#f59e0b" stroke-width="4" marker-end="url(#arrow)"/>

        <rect x="70" y="245" width="400" height="22" rx="4" fill="#070b14"/>
        <text x="270" y="260" font-size="9" font-weight="bold" fill="#cbd5e1" text-anchor="middle">Bir ağaç dalı kesilmesin diye koca bir binayı kaydıran yüce lider!</text>
      </svg>`
    },
    section2: {
      title: "10 Kasım Saygısı ve Neşeli Fıkralar",
      subtitle: "Saygıyla anar, fıkralarla hayatı ve tebessümü öğreniriz.",
      cards: [
        {
          badge: "10 Kasım",
          title: "Saat 09.05 Saygı Duruşu",
          desc: "Sirenler çaldığında ellerimiz yanda, dimdik ve kıpırdamadan durarak Ata'mıza sevgimizi ve saygımızı gösteririz."
        },
        {
          badge: "Fıkra Anlatımı",
          title: "Bindiği Dalı Kesen Hoca",
          desc: "Arkadaşımızı fıkra anlatırken dikkatle dinleriz; en güzel jest ve mimikle anlatanı alkışlarız."
        },
        {
          badge: "Temiz Boyama",
          title: "Kasımpatı Çiçekleri",
          desc: "10 Kasım'ın simgesi beyaz ve sarı kasımpatı çiçeklerini taşırmadan boyayıp Atatürk köşesine asma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Atatürk Köşesi Çiçekleri ve Fıkra Sahnesi'",
      desc: "Öğrenciler kasımpatı çiçeklerini boyayıp sınıf panosundaki Atatürk büstünün etrafına yapıştırır.",
      steps: [
        { title: "Saygı Duruşu Provası", desc: "Sınıfta sessizce 1 dakika saygı duruşunda bulunma ve İstiklâl Marşı söyleme." },
        { title: "Çiçek Boyama", desc: "Kasımpatı çiçeğini özenle boyayıp makasla kesme." },
        { title: "Fıkra Yarışması", desc: "Günün en güldüren ve düşündüren fıkrasını sınıfta alkışla seçme." }
      ],
      criteria: [
        "10 Kasım tören ve saygı duruşu kurallarına tam uyum gösterebilme",
        "Atatürk'ün ağaç ve doğa sevgisini kavrayabilme",
        "İşini zamanında, temiz ve çalışanlara saygılı tamamlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Tören Adabı ve Vefa",
      safetyRules: [
        { bold: "Saygı Duruşunda Kıpırdanmaz", text: "Saygı duruşunda etrafa bakılmaz, konuşulmaz ve gülünmez; dimdik Ata'mız düşünülür." }
      ],
      myths: [
        { wrong: "10 Kasım sadece ağlama ve hüzün günüdür.", correct: "Hayır! 10 Kasım Atatürk'ün fikirlerini anlama, doğa ve vatan sevgisini yaşatma ve çok çalışma günüdür." }
      ]
    },
    quiz: {
      question: "Atatürk, Yalova'da köşkün çatısına değen ulu çınar ağacının dalı kesilmek istendiğinde ne yapmıştır?",
      options: [
        { text: "A) Dalı kestirmemiş, köşkü raylar üzerinde kaydırtmıştır. 🌳", isCorrect: true },
        { text: "B) Ağacı tamamen söktürmüştür.", isCorrect: false },
        { text: "C) Köşkü yıkıp gitmiştir.", isCorrect: false },
        { text: "D) Hiç ilgilenmemiştir.", isCorrect: false }
      ],
      explanation: "🎉 <strong>Bravo, Doğru Cevap: A!</strong> Atatürk eşsiz bir doğa aşığıydı. Çınar ağacının tek bir dalı bile zarar görmesin diye <strong>köşkü raylar üzerinde kaydırtmıştır</strong>!"
    },
    summaryRules: [
      { bold: "Ata'nı Unutma", text: "Atatürk'ün gösterdiği aydınlık yolda yürü." },
      { bold: "Ağaçları Koru", text: "Tek bir yeşil dal için köşkü kaydıran liderin çocuklarıyız." },
      { bold: "Tatile Giriyoruz!", text: "Önümüzdeki hafta 1. Dönem ara tatilinde dinlenip oyunlar oynayacağız!" }
    ],
    homework: "Ailenizle birlikte 10 Kasım günü Atatürk anısına bir fidan veya saksıya çiçek ekin.",
    nextWeekPreview: "1. Dönem Ara Tatili Macera Bülteni (Oyunlar, Masallar ve Aile Etkinlikleri)!"
  },

  // 10. HAFTA - ARA TATİL
  {
    week: 10,
    date: "16 - 22 Kasım",
    hours: "Tatil Haftası",
    unit: "1. Dönem Ara Tatili Macera Bülteni",
    unitBadge: "10. Tema: Ara Tatil",
    unitTheme: "tema-2",
    title: "10. Hafta: 1. Dönem Ara Tatil Macera Bülteni",
    subtitle: "Evde Eğlenceli Oyunlar, Sonbahar Yaprak Kolajı, Masal Saatleri ve Dinlenme",
    outcomeCode: "Ara Tatil Etkinlik Bülteni",
    targetSkill: "Aile İçi İletişim, Doğayı Gözlemleme ve Serbest Zamanı Yaratıcı Değerlendirme",
    curiosityQuestion: "Sonbaharda sararıp yere dökülen rengarenk yapraklarla evde nasıl sevimli bir aslan veya kelebek resmi yapabiliriz?",
    roadmap: [
      { title: "Parkta Yaprak Avı", desc: "Yere düşen sarı, kırmızı ve kahverengi kurumuş yaprakları toplama." },
      { title: "Yaprak Kolajı Tablosu", desc: "Toplanan yaprakları kâğıda yapıştırıp sevimli hayvan figürleri üretme." },
      { title: "Aile Masal Saati", desc: "Televizyon ve telefonları kapatıp büyüklerin çocukluk anılarını dinleme." },
      { title: "2. Bölüme Hazırlık", desc: "Tatil dönüşü 'Öğretmenler Günü' kutlamasına heyecanla hazırlanma." }
    ],
    section1: {
      title: "Sonbahar Yaprak Sanatı: Doğanın Renkleri",
      subtitle: "Doğa sonbaharda bize en güzel boya paletini sunar; yapraklar birer sanat fırçasıdır.",
      layout: "split-visual",
      card: {
        title: "Evde Yaprak Aslanı Projesi",
        icon: "🦁🍂",
        desc: "Kurutulmuş yapraklarla nasıl aslan yapılır?",
        items: [
          { bold: "1. Daire Çiz", text: "Bir A4 kâğıdının ortasına aslanın yüzünü çizip göz ve burun ekle." },
          { bold: "2. Yeleleri Yapıştır", text: "Sarı ve turuncu çınar yapraklarını yüzün etrafına dairesel yapıştır." },
          { bold: "3. Tablonu As", text: "Kuruduktan sonra odanın en güzel köşesine asarak tatil hatırası yap." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1c1917" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#f59e0b" text-anchor="middle">ARA TATİL: SONBAHAR YAPRAK ASLANI</text>

        <!-- Aslan Yelesi (Yapraklar) -->
        <circle cx="270" cy="150" r="70" fill="#d97706" fill-opacity="0.3" stroke="#b45309" stroke-width="3" stroke-dasharray="6,4"/>
        <text x="270" y="100" font-size="24" text-anchor="middle">🍂</text>
        <text x="320" y="120" font-size="24" text-anchor="middle">🍁</text>
        <text x="330" y="170" font-size="24" text-anchor="middle">🍂</text>
        <text x="300" y="210" font-size="24" text-anchor="middle">🍁</text>
        <text x="240" y="210" font-size="24" text-anchor="middle">🍂</text>
        <text x="210" y="170" font-size="24" text-anchor="middle">🍁</text>
        <text x="220" y="120" font-size="24" text-anchor="middle">🍂</text>

        <!-- Aslan Yüzü -->
        <circle cx="270" cy="150" r="42" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="270" y="162" font-size="36" text-anchor="middle">🦁</text>

        <rect x="70" y="245" width="400" height="22" rx="4" fill="#070b14"/>
        <text x="270" y="260" font-size="9" font-weight="bold" fill="#fde047" text-anchor="middle">Doğadan dökülen yapraklar çöp değil, minik eller için harika sanattır!</text>
      </svg>`
    },
    section2: {
      title: "Evde Ekransız Eğlence ve Dinlenme",
      subtitle: "Tablet ve televizyonu biraz dinlendirip ailemizle sıcacık anlar biriktiririz.",
      cards: [
        {
          badge: "Oyun",
          title: "Sessiz Sinema Saati",
          desc: "Konuşmadan sadece hareketlerle bir hayvanı veya mesleği anne babaya anlatma oyunu."
        },
        {
          badge: "Kitap & Masal",
          title: "Büyüklerle Masal",
          desc: "Anneanne ve dedelerimizin çocukken oynadığı eski sokak oyunlarını dinleme."
        },
        {
          badge: "Dinlenme",
          title: "Uyku ve Sağlıklı Beslenme",
          desc: "Meyve yiyerek, erken uyuyarak okulun ikinci bölümüne bomba gibi zinde hazırlanma."
        }
      ]
    },
    workshop: {
      title: "Tatil Görevi: 'Ailemle 1 Gün Ekransız Macera'",
      desc: "Tatilin bir gününde tüm aile telefon ve televizyonu kapatıp kutu oyunu oynar, yürüyüş yapar.",
      steps: [
        { title: "Doğa Yürüyüşü", desc: "Parkta veya bahçede temiz hava alıp farklı ağaç türlerini inceleme." },
        { title: "Yaprak Kolajı", desc: "Toplanan yapraklarla A4 kâğıdına hayvan veya ağaç resmi yapma." },
        { title: "Çantayı Hazırla", desc: "Tatil biterken boya kalemlerini ve defterleri okul için düzenleme." }
      ],
      criteria: [
        "Serbest zamanı ekrandan uzak, yaratıcı ve hareketli değerlendirebilme",
        "Aile bireyleriyle kaliteli ve sevgi dolu iletişim kurabilme",
        "Tatil dönüşü okula zinde ve neşeli başlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Tatil Güvenliği",
      safetyRules: [
        { bold: "Trafik Kurallarına Dikkat", text: "Parka giderken veya sokakta yürürken daima kaldırımdan yürür, karşıdan karşıya geçerken büyügümüzün elini tutarız." }
      ],
      myths: [
        { wrong: "Tatil demek sabahtan akşama kadar tabletle oyun oynamaktır.", correct: "Hayır! En güzel tatil doğada koşan, resim yapan ve ailesiyle sohbet eden çocukların tatilidir." }
      ]
    },
    quiz: {
      question: "Sonbahar mevsiminde parklarda yerlere dökülen rengarenk kurumuş yapraklarla evde ne yapabiliriz?",
      options: [
        { text: "A) Kâğıda yapıştırarak sevimli hayvan kolajları yapabiliriz. 🍁", isCorrect: true },
        { text: "B) Onları çiğneyip yemeliyiz.", isCorrect: false },
        { text: "C) Hepsini yakmalıyız.", isCorrect: false },
        { text: "D) Çöpe atıp üzülmeliyiz.", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Kurumuş yapraklar kâğıt üzerine yapıştırılarak harika <strong>aslan, kirpi ve kelebek tabloları</strong> yapılabilir!"
    },
    summaryRules: [
      { bold: "İyi Dinlen", text: "Tatilin tadını doğada ve ailenle çıkar." },
      { bold: "Ekrana Sınır Koy", text: "Gözlerini ve zihnini dinlendir." },
      { bold: "Pazartesi Görüşürüz!", text: "Tatil dönüşü Öğretmenler Günü heyecanıyla buluşuyoruz!" }
    ],
    homework: "Tatil boyunca yaptığınız yaprak kolajını tatil dönüşü sınıfa getirin.",
    nextWeekPreview: "24 Kasım Öğretmenler Günü, Fotoğraf Yorumlama ve Eğlenceli Çizgi Filmler!"
  }
];
