/**
 * 2. Sınıf Bilişim Teknolojileri ve Yazılım - 1. Dönem 1. Bölüm (Hafta 1 - 10)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_GRADE2 = [
  // 1. HAFTA
  {
    week: 1,
    date: "14 - 20 Eylül",
    hours: "2 Ders Saati",
    unit: "1. Tema: Bilişim Dünyası ve Bilgisayarla Tanışma",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Bilişim Dünyasına Merhaba & Bilgisayar Nedir?",
    subtitle: "Dijital Çağın Kahramanları: Ekran, Kasa, Klavye ve Fare ile Tanışıyoruz",
    outcomeCode: "BTY.2.1.1 (Donanım & Tanıma)",
    targetSkill: "Teknolojik Cihazları Tanıma ve Temel Parçaları Sınıflandırma",
    curiosityQuestion: "Bilgisayarlar da tıpkı insanlar gibi görüp düşünebilir mi? Bilgisayarın gözü ve beyni nerededir?",
    roadmap: [
      { title: "Bilişim ile Tanışma", desc: "Bilgisayarların hayatımızı nasıl kolaylaştırdığını öğrenme." },
      { title: "4 Temel Kahraman", desc: "Monitör (Ekran), Kasa (Beyin), Klavye ve Farenin görevleri." },
      { title: "Giriş ve Çıkış", desc: "Bilgisayara bilgi veren ve bilgiyi bize gösteren parçalar." },
      { title: "Sınıf Kuralları", desc: "Bilişim sınıfında güvenli ve saygılı çalışma kuralları." }
    ],
    section1: {
      title: "Masaüstü Bilgisayarın 4 Temel Parçası",
      subtitle: "Her bir parçanın bilgisayar ailesinde çok önemli bir görevi vardır.",
      layout: "split-visual",
      card: {
        title: "Bilgisayarımızın Organları",
        icon: "🖥️",
        desc: "Masaüstü bilgisayarımızı oluşturan 4 ana parça:",
        items: [
          { bold: "Kasa (Sistem Birimi)", text: "Bilgisayarın beynidir (İşlemci). Bütün hesaplamaları ve düşünme işini kasa yapar." },
          { bold: "Monitör (Ekran)", text: "Bilgisayarın yüzüdür. Yaptığımız resimleri, yazıları ve oyunları bize gösterir." },
          { bold: "Klavye", text: "Bilgisayara yazı yazmamızı ve komut vermemizi sağlayan tuşlar takımıdır." },
          { bold: "Fare (Mouse)", text: "Ekranda gezen sihirli okumuzu (imleç) kontrol eden yardımcımızdır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Monitör -->
        <rect x="40" y="35" width="160" height="110" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <rect x="52" y="47" width="136" height="86" rx="6" fill="#0284c7" fill-opacity="0.25"/>
        <text x="120" y="95" fill="#e0f2fe" font-size="14" font-weight="bold" text-anchor="middle">EKRAN (Göz)</text>
        <!-- Monitör Ayak -->
        <rect x="110" y="145" width="20" height="25" fill="#64748b"/>
        <rect x="90" y="170" width="60" height="10" rx="4" fill="#475569"/>
        <!-- Kasa -->
        <rect x="235" y="35" width="80" height="145" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2.5"/>
        <circle cx="275" cy="65" r="10" fill="#a855f7" fill-opacity="0.3" stroke="#c084fc" stroke-width="2"/>
        <line x1="250" y1="95" x2="300" y2="95" stroke="#64748b" stroke-width="3"/>
        <line x1="250" y1="110" x2="300" y2="110" stroke="#64748b" stroke-width="3"/>
        <text x="275" y="145" fill="#f3e8ff" font-size="12" font-weight="bold" text-anchor="middle">KASA</text>
        <text x="275" y="160" fill="#c084fc" font-size="10" text-anchor="middle">(Beyin)</text>
        <!-- Klavye -->
        <rect x="40" y="190" width="150" height="30" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.8"/>
        <text x="115" y="210" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">KLAVYE (Tuşlar)</text>
        <!-- Fare -->
        <rect x="210" y="190" width="30" height="30" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
        <line x1="225" y1="190" x2="225" y2="204" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="265" y="210" fill="#fcd34d" font-size="11" font-weight="bold">FARE</text>
      </svg>`,
      caption: "Masaüstü Bilgisayarın 4 Temel Donanım Parçası"
    },
    section2: {
      title: "Bilgisayarlar Nerede Yaşar? Çeşitleri Nelerdir?",
      subtitle: "Bilgisayarlar sadece masamızda durmaz; farklı boyutlarda ve şekillerde karşımıza çıkar.",
      layout: "cards-2",
      cards: [
        {
          title: "Taşınabilir Cihazlar",
          icon: "💻",
          desc: "Çantamıza koyup istediğimiz yere götürebildiğimiz akıllı bilgisayarlar:",
          items: [
            { bold: "Dizüstü (Laptop)", text: "Ekranı, klavyesi ve pili tek gövdede birleşmiş katlanabilir bilgisayar." },
            { bold: "Tablet", text: "Dokunmatik ekranıyla parmaklarımızla çizim yapıp oyun oynadığımız hafif cihaz." },
            { bold: "Akıllı Telefon", text: "Cebimize sığan, hem iletişim kurup hem fotoğraf çektiğimiz mini bilgisayar." }
          ]
        },
        {
          title: "Bilişim Sınıfı Altın Kuralları",
          icon: "🏫",
          desc: "Laboratuvarımızda mutlu ve güvenli öğrenmek için:",
          items: [
            { bold: "Yiyecek ve İçecek Yasak", text: "Bilgisayarlar suya ve kırıntılara karşı çok hassastır; masada su ve yiyecek bulundurmayız." },
            { bold: "Nazik Kullanım", text: "Tuşlara ve fareye vurmadan, yumuşakça basarız." },
            { bold: "Kablolara Dokunmama", text: "Elektrik kablolarına ve prizlere asla dokunmayız, öğretmenimizden yardım isteriz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Parça Eşleştirme Dedektifi'",
      subtitle: "Masanızdaki bilgisayarın parçalarını inceleyerek doğru isimleri eşleştirin.",
      steps: [
        { title: "Parçaları İncele", desc: "Masanızdaki monitör, kasa, klavye ve fareyi gözlemleyin." },
        { title: "Kabloları Takip Et", desc: "Klavyenin ve farenin kablosunun nereye (kasaya) bağlandığını dikkatlice keşfedin." },
        { title: "Dedektif Kartını Doldur", desc: "Öğretmeninizin gösterdiği parçanın adını ve ne işe yaradığını sınıfla paylaşın." }
      ],
      criteria: [
        "Bilgisayarın 4 temel parçasını isimlendirebilme",
        "Kasanın ve ekranın görevini söyleyebilme",
        "Bilişim sınıfı kurallarına özenle uyma"
      ]
    },
    tips: {
      safetyTitle: "Teknoloji Dedektifinin Altın Kuralı",
      safetyRules: [
        { bold: "Ellerimiz Temiz Olmalı", text: "Bilgisayar başına oturmadan önce ellerimizi yıkayıp kurulamalıyız." },
        { bold: "Kablolar Tehlikelidir", text: "Kasanın arkasındaki elektrik kablolarıyla oynamamalıyız." },
        { bold: "Öğretmene Haber Ver", text: "Bir parça çalışmadığında vurmak yerine hemen öğretmenimize söylemeliyiz." }
      ],
      myths: [
        { wrong: "Sadece monitör (ekran) tek başına bilgisayardır.", correct: "Monitör sadece görüntü verir; asıl düşünen ve çalışan parça kasanın içindedir." }
      ]
    },
    quiz: {
      question: "Bilgisayarda resim yaparken, yazı yazarken veya çizgi film izlerken görüntüleri görmemizi sağlayan parça hangisidir?",
      options: [
        { text: "A) Fare (Mouse)", isCorrect: false },
        { text: "B) Ekran (Monitör)", isCorrect: true },
        { text: "C) Klavye", isCorrect: false },
        { text: "D) Elektrik Prizi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Monitör (Ekran), bilgisayarın bize bilgileri, renkleri ve resimleri gösteren penceresidir."
    },
    summaryRules: [
      { bold: "Kasa", text: "Bilgisayarın beyni ve yönetim merkezidir." },
      { bold: "Monitör", text: "Görüntüleri ve pencereleri bize gösteren ekrandır." },
      { bold: "Klavye ve Fare", text: "Bilgisayara komut vermemizi sağlayan yönlendiricilerdir." }
    ],
    homework: "Evinizde bulunan bilgisayar veya tabletin ekranına ve tuşlarına bakıp defterinize bir masaüstü bilgisayar resmi çizin.",
    nextWeekPreview: "Bilgisayarı Doğru Açma ve Kapatma Kuralları & Güç Düğmesinin Gizemi!"
  },

  // 2. HAFTA
  {
    week: 2,
    date: "21 - 27 Eylül",
    hours: "2 Ders Saati",
    unit: "1. Tema: Bilişim Dünyası ve Bilgisayarla Tanışma",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Bilgisayarı Doğru ve Güvenli Açma-Kapama Kuralları",
    subtitle: "Güç Düğmesi, Başlat Menüsü ve Elektronik Cihazlara Özen Gösterme",
    outcomeCode: "BTY.2.1.2 (Sistem Bilinci)",
    targetSkill: "Bilgisayarı Kurallarına Uygun Şekilde Başlatma ve Güvenle Kapatma",
    curiosityQuestion: "Bilgisayarı elektrik fişinden çekerek kapatırsak içindeki dosyalarımıza ve oyunlarımıza ne olur?",
    roadmap: [
      { title: "Power (Güç) Sembolü", desc: "Evrensel açma-kapama sembolünü tanıma (Daire ve dik çizgi)." },
      { title: "Açılış Aşamaları", desc: "Önce kasa ve monitör düğmesine basma, masaüstünün gelmesini bekleme." },
      { title: "Güvenli Kapatma", desc: "Başlat menüsü -> Kapat adımlarını öğrenme." },
      { title: "Fişi Çekmeme Kuralı", desc: "Bilgisayarın hafızasını ve parçalarını koruma bilinci." }
    ],
    section1: {
      title: "Sihirli Güç Düğmesi: Power Sembolü",
      subtitle: "Bütün teknolojik cihazlarda bulunan açma-kapama işaretini öğreniyoruz.",
      layout: "split-visual",
      card: {
        title: "Bilgisayarı Açma Adımları",
        icon: "⚡",
        desc: "Bilgisayarımızı uyandırmak için sırasıyla şunları yaparız:",
        items: [
          { bold: "1. Adım", text: "Kasanın üzerindeki yuvarlak büyük Güç (Power) düğmesine nazikçe bir kez basarız." },
          { bold: "2. Adım", text: "Monitörün (ekranın) altındaki küçük düğmeye basarak ekran ışığını açarız." },
          { bold: "3. Adım", text: "Ekranda pencereler ve masaüstü simgeleri gelene kadar sabırla bekleriz." },
          { bold: "Altın Kural", text: "Düğmeye art arda defalarca sertçe basmayız; bir tık yeterlidir!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Power Sembolü Büyük -->
        <circle cx="210" cy="110" r="55" fill="#047857" fill-opacity="0.2" stroke="#34d399" stroke-width="4"/>
        <path d="M190 75 A 40 40 0 1 0 230 75" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
        <line x1="210" y1="55" x2="210" y2="95" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
        <!-- Açıklama -->
        <rect x="70" y="180" width="280" height="35" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="210" y="202" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GÜÇ (POWER) DÜĞMESİ SEMBOLÜ</text>
      </svg>`,
      caption: "Dünya Standartlarında Güç (Power) Sembolü"
    },
    section2: {
      title: "Bilgisayarı Doğru Şekilde Kapatma Adımları",
      subtitle: "Bilgisayar uyumadan önce açık programları kaydeder ve kendini korumaya alır.",
      layout: "cards-2",
      cards: [
        {
          title: "Doğru Kapatma Yolu",
          icon: "🛑",
          desc: "İşimiz bittiğinde yapılması gereken adımlar:",
          items: [
            { bold: "1. Pencereleri Kapat", text: "Açık olan resimleri ve çalışmaları çarpı (X) tuşundan kapatırız." },
            { bold: "2. Başlat'a Tıkla", text: "Ekranın sol altındaki pencere simgeli Başlat menüsüne tıklarız." },
            { bold: "3. 'Bilgisayarı Kapat'", text: "Aç-kapa simgesine tıklayıp 'Bilgisayarı Kapat' seçeneğini seçeriz." }
          ]
        },
        {
          title: "Neden Fişten Çekilmez?",
          icon: "⚠️",
          desc: "Ani kapanmaların bilgisayara zararları:",
          items: [
            { bold: "Dosyalar Bozulur", text: "Kaydedilmemiş çizimlerimiz ve ödevlerimiz silinebilir." },
            { bold: "Sabit Disk Hasar Görür", text: "Bilgisayarın kütüphanesi aniden durduğu için çizilebilir." },
            { bold: "Sistem Çökebilir", text: "Bilgisayar bir sonraki açılışta hata verebilir ve açılmayabilir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'Bilgisayarımı Güvenle Başlatıyorum'",
      subtitle: "Her öğrenci kendi bilgisayarını kurallara uygun açıp kapatır.",
      steps: [
        { title: "Güç Düğmesini Bul", desc: "Kasanızın üzerindeki power simgesini bulun ve tek tıkla basın." },
        { title: "Masaüstünü Bekle", desc: "Ekranda masaüstü simgeleri gelene kadar bekleyin." },
        { title: "Başlat Menüsünden Kapat", desc: "Öğretmeninizin yönergesiyle Başlat menüsünden bilgisayarı kapatın." }
      ],
      criteria: [
        "Güç düğmesini doğru şekilde bulup basabilme",
        "Açılışta sabırla sistemin yüklenmesini bekleme",
        "Kapatırken Başlat menüsünü kullanma alışkanlığı"
      ]
    },
    tips: {
      safetyTitle: "Teknolojik Cihazları Koruma Rehberi",
      safetyRules: [
        { bold: "Tek Tık Kuralı", text: "Açma düğmesine bir kere basmak yeterlidir, düğmeye basılı tutulmaz." },
        { bold: "Ekran Işığı", text: "Kasa açıldıktan sonra monitör açılmazsa monitörün düğmesini kontrol edin." },
        { bold: "Günün Sonu", text: "Bilişim sınıfından ayrılırken sandalyemizi içeri iter ve masamızı düzenli bırakırız." }
      ],
      myths: [
        { wrong: "Monitörün düğmesini kapatınca bilgisayar da tamamen kapanmış olur.", correct: "Monitör sadece ekranı kapatır; bilgisayar kasanın içinde çalışmaya devam eder. Mutlaka Başlat menüsünden kapatılmalıdır." }
      ]
    },
    quiz: {
      question: "Dersimiz bittiğinde bilgisayarımızı en güvenli şekilde nasıl kapatmalıyız?",
      options: [
        { text: "A) Duvardaki elektrik fişini aniden çekerek", isCorrect: false },
        { text: "B) Kasanın açma düğmesine sertçe basıp tutarak", isCorrect: false },
        { text: "C) Başlat menüsüne girip 'Bilgisayarı Kapat' seçeneğine tıklayarak", isCorrect: true },
        { text: "D) Klavyenin bütün tuşlarına aynı anda basarak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: C!</strong> Bilgisayarı Başlat menüsünden kapatmak, dosyalarımızın ve bilgisayarımızın sağlığını korur."
    },
    summaryRules: [
      { bold: "Power Sembolü", text: "Tüm cihazlarda açma ve kapama kapısıdır." },
      { bold: "Başlat Menüsü", text: "Güvenli kapanmanın resmi adresidir." },
      { bold: "Özen Gösterme", text: "Elektronik cihazlar sert darbelerden korunmalıdır." }
    ],
    homework: "Evinizdeki televizyon kumandasında ve diğer elektronik cihazlarda Güç (Power) düğmesini bulup ailesine gösterin.",
    nextWeekPreview: "Sihirli Fare (Mouse) ile Tanışıyoruz: Sol Tık, Sağ Tık ve Sürükle-Bırak Sanatı!"
  },

  // 3. HAFTA
  {
    week: 3,
    date: "28 Eylül - 04 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Bilişim Dünyası ve Bilgisayarla Tanışma",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Sihirli Fare (Mouse) ile Tanışıyorum: Sol Tık ve Sürükle-Bırak",
    subtitle: "İşaretçi (İmleç) Takibi, Tıklama Becerisi ve Eğlenceli El-Göz Koordinasyonu",
    outcomeCode: "BTY.2.1.3 (Psikomotor Koordinasyon)",
    targetSkill: "Fareyi Doğru Tutma, Sol/Sağ Tıklama ve Sürükle-Bırak Becerisi",
    curiosityQuestion: "Masanın üzerindeki plastik fareyi hareket ettirince ekrandaki beyaz ok nasıl bizimle aynı yöne hareket eder?",
    roadmap: [
      { title: "Fareyi Doğru Tutma", desc: "Avuç içi desteği, işaret ve orta parmağın yerleşimi." },
      { title: "Sol Tık ve Çift Tık", desc: "Seçme (tek tık) ve dosya/program açma (hızlı çift tık)." },
      { title: "Sağ Tık Menüsü", desc: "Seçenekler ve özellikler kutusunu açma." },
      { title: "Sürükle ve Bırak", desc: "Sol tuşa basılı tutarak nesneleri taşıma oyunu." }
    ],
    section1: {
      title: "Fare Anatomisi ve Parmaklarımızın Yeri",
      subtitle: "Fareyi doğru tuttuğumuzda elimiz hiç yorulmaz ve ekranda hedefleri kolayca vururuz.",
      layout: "split-visual",
      card: {
        title: "Fare Tutuş Kuralları",
        icon: "🖱️",
        desc: "İki parmak kuralıyla fareyi kontrol ediyoruz:",
        items: [
          { bold: "İşaret Parmağı", text: "Daima Sol Tuşun üzerinde durur. En çok kullandığımız tuştur (Seçer ve açar)." },
          { bold: "Orta Parmak", text: "Sağ Tuşun üzerinde dinlenir. Gizli seçenekleri açmak için kullanılır." },
          { bold: "Tekerlek (Scroll)", text: "İki tuşun ortasındaki tekerlek sayfaları yukarı-aşağı kaydırır." },
          { bold: "Baş ve Yüzük Parmak", text: "Fareyi yanlardan nazikçe kavrayıp masada kaydırmayı sağlar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Fare Gövdesi -->
        <rect x="150" y="45" width="120" height="160" rx="50" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
        <line x1="210" y1="45" x2="210" y2="115" stroke="#f59e0b" stroke-width="2"/>
        <line x1="150" y1="115" x2="270" y2="115" stroke="#f59e0b" stroke-width="2"/>
        <!-- Sol Tuş Vurgusu -->
        <rect x="153" y="48" width="54" height="64" rx="20" fill="#38bdf8" fill-opacity="0.35"/>
        <text x="180" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">SOL TIK</text>
        <text x="180" y="100" fill="#bae6fd" font-size="9" text-anchor="middle">(İşaret)</text>
        <!-- Sağ Tuş Vurgusu -->
        <rect x="213" y="48" width="54" height="64" rx="20" fill="#a855f7" fill-opacity="0.25"/>
        <text x="240" y="85" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">SAĞ TIK</text>
        <text x="240" y="100" fill="#f3e8ff" font-size="9" text-anchor="middle">(Orta)</text>
        <!-- Tekerlek -->
        <rect x="202" y="65" width="16" height="32" rx="6" fill="#f59e0b"/>
        <!-- Ok / İşaretçi -->
        <polygon points="50,60 50,95 62,85 75,100 82,93 69,78 85,78" fill="#ffffff" stroke="#000000" stroke-width="2"/>
        <text x="95" y="80" fill="#ffffff" font-size="12" font-weight="bold">İmleç (Ok)</text>
      </svg>`,
      caption: "Fare Üzerinde Sol Tuş, Sağ Tuş ve Tekerlek Düzeni"
    },
    section2: {
      title: "Tıklama Türleri Ne İşe Yarar?",
      subtitle: "Ekranda bir nesneye farklı şekillerde dokunarak bilgisayara emir veririz.",
      layout: "cards-3",
      cards: [
        {
          title: "Tek Tık (Sol Tuş)",
          icon: "👆",
          desc: "Bir simgeyi, resmi veya butonu seçmek için bir defa 'tık' yaparız."
        },
        {
          title: "Çift Tık (Hızlı Sol)",
          icon: "✌️",
          desc: "Aynı noktaya 'tık-tık' diye hızlıca iki defa basarak klasörleri ve oyunları açarız."
        },
        {
          title: "Sürükle ve Bırak",
          icon: "✊",
          desc: "Sol tuşa basılı tutup elimizi kaydırırız; nesneyi istediğimiz yere taşıyıp parmağımızı bırakırız."
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Dijital Elma Toplama Oyunu'",
      subtitle: "Ekranda dağınık duran elmaları sürükleyip sepete bırakıyoruz.",
      steps: [
        { title: "Fareyi Tut ve İmleci Bul", desc: "Ekranda gezen beyaz oku farenizle istediğiniz köşeye götürün." },
        { title: "Tek Tıkla Seç", desc: "Masaüstündeki resim simgesine tek tıkla tıklayıp maviye dönüştürün." },
        { title: "Sürükle ve Sepete Bırak", desc: "Sol tuşa basılı tutarak simgeyi ekranın sağındaki klasöre sürükleyin ve bırakın." }
      ],
      criteria: [
        "Fareyi doğru parmaklarla kavrayabilme",
        "İmleci istenen hedefe hassas şekilde ulaştırabilme",
        "Sürükle-bırak hareketini başarıyla tamamlama"
      ]
    },
    tips: {
      safetyTitle: "Sağlıklı Bilek ve Fare Kullanımı",
      safetyRules: [
        { bold: "Bileği Bükmeyin", text: "Bileğimiz masada düz durmalı; yukarı ya da aşağı bükülmemelidir." },
        { bold: "Fare Altlığı (Mousepad)", text: "Fareyi mutlaka pürüzsüz bir zemin veya mousepad üzerinde kaydırın." },
        { bold: "Sert Basmayın", text: "Tuşlar çok hassastır; hafifçe 'tık' sesi duyulacak kadar basmak yeterlidir." }
      ],
      myths: [
        { wrong: "Fare masada bitince havada hareket ettirirsem ok ekranda gitmeye devam eder.", correct: "Fare lazer ışığıyla masayı okur; masadan kaldırıldığında ok hareket etmez. Fareyi kaldırıp masanın ortasına yeniden koymalıyız." }
      ]
    },
    quiz: {
      question: "Masaüstünde bulunan bir oyunu veya klasörü açıp içine girmek için faremizle hangi hareketi yaparız?",
      options: [
        { text: "A) Farenin sağ tuşuna tek basarız", isCorrect: false },
        { text: "B) Sol tuşa peş peşe hızlıca iki defa basarız (Çift Tık)", isCorrect: true },
        { text: "C) Fareyi havaya kaldırıp sallarız", isCorrect: false },
        { text: "D) Tekerleği hızla çeviririz", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Sol tuşa hızlıca iki kez basmak (Çift Tık), bilgisayara 'bu dosyayı aç' emrini verir."
    },
    summaryRules: [
      { bold: "İşaret Parmağı", text: "Sol tuşun komutanıdır, her şeyi seçer ve açar." },
      { bold: "Çift Tık", text: "Kapıyı iki kere tıklatmak gibidir; içeri girmemizi sağlar." },
      { bold: "Sürükle Bırak", text: "Dijital eşyalarımızı ekranda taşıma gücüdür." }
    ],
    homework: "Elinizi bir masa üzerinde fare varmış gibi koyup işaret ve orta parmağınızla tık-tık alıştırması yapın.",
    nextWeekPreview: "Renkli Klavye Tuşları: Harfler, Sayılar, Boşluk ve Silme Tuşunun Görevleri!"
  },

  // 4. HAFTA
  {
    week: 4,
    date: "05 - 11 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Bilişim Dünyası ve Bilgisayarla Tanışma",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Renkli Klavye Tuşları: Harfler, Sayılar ve Görevleri",
    subtitle: "Space, Backspace, Enter Tuşlarının Görevleri ve Klavyede İsmini Yazma",
    outcomeCode: "BTY.2.1.4 (Klavye Becerisi)",
    targetSkill: "Temel Klavye Tuşlarını Tanıma ve Ekrana İsmini Yazabilme",
    curiosityQuestion: "Klavyedeki en uzun tuş hangisidir ve neden üzerinde hiçbir yazı yazmaz?",
    roadmap: [
      { title: "Harf ve Sayı Tuşları", desc: "A-Z harfleri ve 0-9 sayı tuşlarının dizilimi." },
      { title: "Boşluk Tuşu (Space)", desc: "Kelimelerin arasına nefes aldırma tuşu." },
      { title: "Silme Tuşu (Backspace)", desc: "Hatalı yazdığımız harfi silen sihirli silgi." },
      { title: "Giriş Tuşu (Enter)", desc: "Alt satıra geçme ve onaylama düğmesi." }
    ],
    section1: {
      title: "Klavyenin Süper Kahraman Tuşları",
      subtitle: "Yazı yazarken bize en çok yardım eden 3 özel tuşu öğreniyoruz.",
      layout: "split-visual",
      card: {
        title: "Özel Görevli 3 Tuş",
        icon: "⌨️",
        desc: "Yazı yazarken parmaklarımızın en yakın dostları:",
        items: [
          { bold: "Boşluk (Space)", text: "Klavyenin en altındaki uzun tuştur. Kelimelerin birbirine yapışmaması için araya boşluk koyar." },
          { bold: "Silme (Backspace)", text: "Üzerinde sola doğru ok olan tuştur. Yanlış yazdığımız harfleri geriye doğru siler." },
          { bold: "Enter (Giriş)", text: "Yazı yazarken alt satıra geçmemizi sağlar; aynı zamanda 'Evet / Başla' anlamına gelir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Klavye Gövdesi -->
        <rect x="35" y="35" width="350" height="180" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <!-- Enter Tuşu -->
        <path d="M290 75 H345 V125 H310 V100 H290 Z" fill="#a855f7" stroke="#c084fc" stroke-width="1.5"/>
        <text x="325" y="115" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ENTER ↵</text>
        <!-- Backspace Tuşu -->
        <rect x="270" y="45" width="75" height="25" rx="5" fill="#f43f5e" stroke="#fb7185" stroke-width="1.5"/>
        <text x="307" y="62" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">← SİL (Back)</text>
        <!-- Harf Blokları Minik -->
        <rect x="55" y="75" width="25" height="25" rx="4" fill="#334155"/>
        <text x="67" y="92" fill="#94a3b8" font-size="11" text-anchor="middle">A</text>
        <rect x="85" y="75" width="25" height="25" rx="4" fill="#334155"/>
        <text x="97" y="92" fill="#94a3b8" font-size="11" text-anchor="middle">S</text>
        <rect x="115" y="75" width="25" height="25" rx="4" fill="#334155"/>
        <text x="127" y="92" fill="#94a3b8" font-size="11" text-anchor="middle">D</text>
        <rect x="145" y="75" width="25" height="25" rx="4" fill="#38bdf8"/>
        <text x="157" y="92" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">F</text>
        <!-- Space Tuşu -->
        <rect x="110" y="160" width="180" height="30" rx="6" fill="#10b981" stroke="#34d399" stroke-width="2"/>
        <text x="200" y="180" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">SPACE (BOŞLUK TUŞU)</text>
      </svg>`,
      caption: "Klavyede Space (Boşluk), Backspace (Silme) ve Enter Tuşları"
    },
    section2: {
      title: "Klavyede İsmini Yazma Sanatı",
      subtitle: "Klavyedeki harfleri ararken iki elimizi de hazır tutmalıyız.",
      layout: "cards-2",
      cards: [
        {
          title: "Büyük Harf Yazma (Caps Lock)",
          icon: "🔠",
          desc: "İsmimizin ilk harfini büyük yapmak için:",
          items: [
            { bold: "Caps Lock Tuşu", text: "Klavyenin solundaki bu tuşa bastığımızda küçük bir ışık yanar ve tüm harfler büyük yazar." },
            { bold: "Kapatmayı Unutma", text: "Büyük harfimiz bitince tekrar basıp ışığı söndürürüz." },
            { bold: "Shift ile Büyük Harf", text: "Shift tuşuna basılı tutarken bir harfe basarsak o harf büyük çıkar." }
          ]
        },
        {
          title: "İki Elimizi Kullanma Alışkanlığı",
          icon: "👐",
          desc: "Tek parmakla aramak yerine iki elimizi klavyeye yayarız:",
          items: [
            { bold: "Sol Elimiz", text: "Klavyenin solundaki harflere (A, S, D, F...) bakar." },
            { bold: "Sağ Elimiz", text: "Klavyenin sağındaki harflere (J, K, L, M...) bakar." },
            { bold: "Başparmaklar", text: "Büyük Space tuşunun üzerinde hazır bekler." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'Ekrana Adını ve En Sevdiğin Rengi Yaz'",
      subtitle: "Metin belgesini açıp klavyede adımızı, soyadımızı ve yaşımızı yazıyoruz.",
      steps: [
        { title: "Metin Belgesini Aç", desc: "Masaüstündeki Not Defteri veya WordPad simgesine çift tıklayın." },
        { title: "Adını ve Soyadını Yaz", desc: "Harfleri bularak adınızı yazın, araya bir kez Space tuşuyla boşluk bırakın." },
        { title: "Enter ile Alt Satıra Geç", desc: "Enter'a basıp alt satıra en sevdiğiniz rengi ve yaşınızı yazın." }
      ],
      criteria: [
        "Space tuşu ile kelimeler arasına tek boşluk bırakabilme",
        "Hata yaptığında Backspace ile silebilme",
        "Enter tuşuyla alt satıra geçebilme"
      ]
    },
    tips: {
      safetyTitle: "Doğru Yazma Alışkanlıkları",
      safetyRules: [
        { bold: "Bir Kere Basmak Yeter", text: "Space tuşuna bir defa basılır; birden fazla basarsak kelimeler birbirinden çok uzaklaşır." },
        { bold: "Tuşları Tırnakla Kazıma", text: "Tuşların üzerindeki harfleri parmak uçlarımızın etli kısmıyla nazikçe basarız." },
        { bold: "İki El Kuralı", text: "Sadece tek parmakla değil, iki elimizi de kullanarak yazmaya alışın." }
      ],
      myths: [
        { wrong: "Yanlış yazdığımızda bütün cümleyi baştan silmemiz gerekir.", correct: "Sadece hatalı harfi silmek için Backspace tuşuna gerektiği kadar basmak yeterlidir." }
      ]
    },
    quiz: {
      question: "Yazı yazarken iki kelime arasına boşluk bırakmak için klavyedeki hangi tuşa basarız?",
      options: [
        { text: "A) Enter Tuşu", isCorrect: false },
        { text: "B) En alttaki uzun Space (Boşluk) Tuşu", isCorrect: true },
        { text: "C) Backspace (Silme) Tuşu", isCorrect: false },
        { text: "D) Farenin sağ tuşu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Space tuşu, klavyenin en uzun tuşudur ve kelimeler arasına güzel bir boşluk koyar."
    },
    summaryRules: [
      { bold: "Space", text: "Kelimeleri birbirinden ayıran boşluk köprüsüdür." },
      { bold: "Backspace", text: "Geriye doğru silen sihirli silgidir." },
      { bold: "Enter", text: "Bir alt satıra atlayan onaylama tuşudur." }
    ],
    homework: "Evde klavyeye bakarak isminizin harflerinin nerede olduğunu bulun ve defterinize klavye sırasına göre yazın.",
    nextWeekPreview: "Dijital Sağlık ve Doğru Duruş (Ergonomi) Kuralları & Robot Gibi Dik Dur!"
  },

  // 5. HAFTA
  {
    week: 5,
    date: "12 - 18 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Bilişim Dünyası ve Bilgisayarla Tanışma",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Dijital Sağlık ve Doğru Duruş (Ergonomi) Kuralları",
    subtitle: "Bilgisayar Karşısında Dik Duruş, Ekran Mesafesi ve Göz Dinlendirme Hareketleri",
    outcomeCode: "BTY.2.1.5 (Sağlık & Ergonomi)",
    targetSkill: "Bilgisayar Başında Doğru Oturuş Pozisyonunu Alma ve Vücut Sağlığını Koruma",
    curiosityQuestion: "Bilgisayar başında kambur oturduğumuzda omurgamız neden bize küser ve sırtımız ağrır?",
    roadmap: [
      { title: "Ergonomi Nedir?", desc: "Vücudumuz ile çalışma ortamımızın dost olması." },
      { title: "Kol Boyu Mesafesi", desc: "Ekran ile gözümüz arasındaki güvenli uzaklık." },
      { title: "90 Derece Kuralı", desc: "Belimizin, dizlerimizin ve kollarımızın dik duruşu." },
      { title: "Göz Dinlendirme", desc: "Pencereden uzaklara bakma ve göz egzersizleri." }
    ],
    section1: {
      title: "Robot Gibi Güçlü ve Dik Oturuyoruz!",
      subtitle: "Doğru oturduğumuzda hem daha az yoruluruz hem de boyumuz sağlıklı uzar.",
      layout: "split-visual",
      card: {
        title: "Bilgisayar Başında 4 Duruş Kuralı",
        icon: "🪑",
        desc: "Masa başında vücudumuzu koruyan kurallar:",
        items: [
          { bold: "Sırtımız Dik", text: "Sandalyenin arkalığına tam yaslanırız, kambur durmayız." },
          { bold: "Kol Boyu Mesafe", text: "Kolumuzu uzattığımızda parmak uçlarımız ekrana ancak değecek kadar uzakta dururuz (50 cm)." },
          { bold: "Ayaklar Yere Bassın", text: "Ayaklarımız havada sallanmamalı, yere düzgünce basmalıdır." },
          { bold: "Göz Seviyesi", text: "Ekran tam karşımızda olmalı; kafamızı çok yukarı ya da aşağı bükmemeliyiz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Sandalye ve Çocuk -->
        <circle cx="130" cy="70" r="20" fill="#38bdf8"/>
        <!-- Gövde Dik -->
        <line x1="130" y1="90" x2="130" y2="155" stroke="#34d399" stroke-width="8" stroke-linecap="round"/>
        <!-- Kollar 90 Derece -->
        <path d="M130 110 H170 V135" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
        <!-- Bacaklar 90 Derece -->
        <path d="M130 155 H170 V195" stroke="#34d399" stroke-width="6" stroke-linecap="round"/>
        <!-- Sandalye -->
        <path d="M110 95 V165 H165" stroke="#64748b" stroke-width="5" stroke-linecap="round"/>
        <line x1="130" y1="165" x2="130" y2="205" stroke="#64748b" stroke-width="5"/>
        <!-- Masa ve Ekran -->
        <rect x="220" y="80" width="80" height="60" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <line x1="260" y1="140" x2="260" y2="175" stroke="#64748b" stroke-width="6"/>
        <line x1="170" y1="135" x2="310" y2="135" stroke="#94a3b8" stroke-width="4"/>
        <!-- Göz Mesafesi Çizgisi -->
        <line x1="150" y1="70" x2="220" y2="90" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="185" y="65" fill="#fde68a" font-size="10" font-weight="bold">Kol Boyu (50 cm)</text>
      </svg>`,
      caption: "İdeal Ergonomik Bilgisayar Oturuş Pozisyonu"
    },
    section2: {
      title: "Gözlerimizi ve Bedenimizi Dinlendirme Egzersizleri",
      subtitle: "Her 20-30 dakikada bir bedenimize küçük bir mola hediyesi veririz.",
      layout: "cards-2",
      cards: [
        {
          title: "Göz Jimnastiği",
          icon: "👀",
          desc: "Gözlerimizin kurumasını ve yorulmasını önlemek için:",
          items: [
            { bold: "Uzağa Bakma", text: "Gözlerimizi ekrandan ayırıp sınıfın veya odanın en uzak köşesine bakarız." },
            { bold: "Göz Kırpma", text: "Ekrana dalıp gitmeden gözlerimizi sık sık kırpıştırırız." },
            { bold: "Göz Yuvarlama", text: "Gözlerimizi yavaşça sağa, sola, yukarı ve aşağı hareket ettiririz." }
          ]
        },
        {
          title: "Mini Beden Esnemesi",
          icon: "🤸",
          desc: "Otururken yapabileceğimiz canlandırıcı hareketler:",
          items: [
            { bold: "Omuz Çevirme", text: "Omuzlarımızı geriye doğru daireler çizerek yuvarlarız." },
            { bold: "Bilek Esnetme", text: "Parmaklarımızı kenetleyip ellerimizi ileriye doğru uzatırız." },
            { bold: "Boyun Dinlendirme", text: "Başımızı nazikçe sağa ve sola yatırıp boyun kaslarımızı rahatlatırız." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'Ergonomi Aynası ve Heykel Oyunu'",
      subtitle: "Sıra arkadaşımızla birbirimizin oturuşunu kontrol edip doğru pozisyona getiriyoruz.",
      steps: [
        { title: "Kol Boyunu Ölç", desc: "Kolunuzu ekrana doğru uzatın; ekrana çok yakınsanız sandalyenizi geriye alın." },
        { title: "Sırtını Dik Yap", desc: "Arkadaşınızın sırtının sandalyeye dik yaslanıp yaslanmadığını denetleyin." },
        { title: "Mola Dansı", desc: "Öğretmeniniz eşliğinde omuz çevirme ve göz dinlendirme hareketlerini yapın." }
      ],
      criteria: [
        "Kol boyu mesafesini doğru ayarlayabilme",
        "Sırtı dik tutma alışkanlığı gösterme",
        "Göz ve bilek esnetme hareketlerini uygulayabilme"
      ]
    },
    tips: {
      safetyTitle: "Sağlıklı Teknoloji Kalkanı",
      safetyRules: [
        { bold: "Karanlıkta Ekrana Bakma", text: "Karanlık odada parlayan ekran gözleri bozar; odanın ışığı mutlaka açık olmalıdır." },
        { bold: "Masa Yüksekliği", text: "Masa göğüs hizamızda olmalı; kollarımız havada asılı kalmamalıdır." },
        { bold: "Su İçmeyi Unutma", text: "Bilgisayar başında vakit geçirirken su içmeyi ve hareket etmeyi ihmal etmeyin." }
      ],
      myths: [
        { wrong: "Ekrana ne kadar yakından bakarsak yazıları o kadar iyi anlarız.", correct: "Ekrana çok yaklaşmak göz kaslarını aşırı yorar ve göz sağlığını bozar; daima bir kol boyu mesafe korunmalıdır." }
      ]
    },
    quiz: {
      question: "Bilgisayar karşısında otururken göz sağlığımızı korumak için ekran ile aramızda ne kadar mesafe olmalıdır?",
      options: [
        { text: "A) Burnumuz ekrana değecek kadar yakın", isCorrect: false },
        { text: "B) Yaklaşık bir kol boyu mesafe (50-60 cm)", isCorrect: true },
        { text: "C) 5 metre uzaktan dürbünle bakmalıyız", isCorrect: false },
        { text: "D) Sandalyenin altına saklanmalıyız", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bir kol boyu mesafe gözlerimizin yorulmasını engeller ve ekrandaki her şeyi net görmemizi sağlar."
    },
    summaryRules: [
      { bold: "Dik Duruş", text: "Sırtımızı korur, güçlü bir omurga sağlar." },
      { bold: "Bir Kol Boyu", text: "Gözlerimizin koruma mesafesidir." },
      { bold: "Mini Molalar", text: "Zihnimizi ve bedenimizi zinde tutar." }
    ],
    homework: "Evinizde televizyon veya tablet izlerken oturuşunuzu kontrol edin ve ailenize 'Bir Kol Boyu Kuralı'nı öğretin.",
    nextWeekPreview: "Ekran Süresi ve Sağlıklı Teknoloji Kullanımı & Parkta Oyun ile Ekran Dengesi!"
  },

  // 6. HAFTA
  {
    week: 6,
    date: "19 - 25 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Bilişim Dünyası ve Bilgisayarla Tanışma",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Ekran Süresi ve Sağlıklı Teknoloji Kullanımı",
    subtitle: "Teknoloji Dostumuz mu, Zaman Hırsızı mı? Parkta Oyun ile Dijital Oyun Dengesi",
    outcomeCode: "BTY.2.1.6 (Dijital Denge)",
    targetSkill: "Ekran Süresini Bilinçli Yönetme ve Gerçek Hayat ile Teknoloji Dengesini Kurma",
    curiosityQuestion: "Tüm günümüzü ekran başında geçirirsek dışarıdaki hangi güzellikleri ve oyunları kaçırırız?",
    roadmap: [
      { title: "Ekran Süresi Nedir?", desc: "Tablet, telefon ve televizyon karşısında geçirdiğimiz toplam zaman." },
      { title: "Zaman Hırsızları", desc: "Farkında olmadan saatlerimizin nasıl kayıp gittiğini anlama." },
      { title: "Gerçek Oyunlar", desc: "Top oynama, bisiklete binme, resim çizme ve arkadaşlarla buluşma." },
      { title: "Bilişim Sözleşmem", desc: "Günlük sağlıklı ekran süresi sözü verme." }
    ],
    section1: {
      title: "Teknoloji Terazisi: Dijital Denge",
      subtitle: "Teknoloji harika bir araçtır ama gerçek hayat dışarıda bizi bekleyen maceradır.",
      layout: "split-visual",
      card: {
        title: "Dengeli Bir Gün Nasıl Olmalı?",
        icon: "⚖️",
        desc: "2. sınıf öğrencisi için sağlıklı bir günün dilimleri:",
        items: [
          { bold: "Okul ve Ödevler", text: "Derslerimizi öğrenir, ödevlerimizi tamamlarız." },
          { bold: "Hareket ve Açık Hava", text: "Bahçede koşar, ip atlar, bisiklete biner ve temiz hava alırız." },
          { bold: "Aile ve Arkadaşlar", text: "Sevdiklerimizle sohbet eder, kutu oyunları oynarız." },
          { bold: "Bilinçli Ekran Saati", text: "Günde en fazla 30-45 dakika eğitici ve eğlenceli ekran zamanı kullanırız." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- Terazi Direği -->
        <line x1="210" y1="60" x2="210" y2="180" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
        <line x1="160" y1="180" x2="260" y2="180" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
        <!-- Terazi Kolu Dengede -->
        <line x1="100" y1="75" x2="320" y2="75" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
        <circle cx="210" cy="75" r="8" fill="#fbbf24"/>
        <!-- Sol Kefe: Gerçek Hayat -->
        <line x1="100" y1="75" x2="80" y2="130" stroke="#f59e0b" stroke-width="2"/>
        <line x1="100" y1="75" x2="120" y2="130" stroke="#f59e0b" stroke-width="2"/>
        <rect x="60" y="130" width="80" height="35" rx="8" fill="#047857" stroke="#34d399" stroke-width="2"/>
        <text x="100" y="152" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">PARK & OYUN ⚽</text>
        <!-- Sağ Kefe: Bilinçli Ekran -->
        <line x1="320" y1="75" x2="300" y2="130" stroke="#f59e0b" stroke-width="2"/>
        <line x1="320" y1="75" x2="340" y2="130" stroke="#f59e0b" stroke-width="2"/>
        <rect x="280" y="130" width="80" height="35" rx="8" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
        <text x="320" y="152" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DİJİTAL SAAT 💻</text>
        <text x="210" y="212" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">İkisi de dengede olunca hayat çok neşeli!</text>
      </svg>`,
      caption: "Gerçek Hayat ile Teknoloji Zamanının Dengesi"
    },
    section2: {
      title: "Ekran Bağımlılığından Korunma Taktikleri",
      subtitle: "Ekran başından kalkmak zor geldiğinde uygulayabileceğimiz taktikler.",
      layout: "cards-2",
      cards: [
        {
          title: "Süre Zili (Alarm) Kuralı",
          icon: "⏰",
          desc: "Oyuna veya videoya başlamadan önce:",
          items: [
            { bold: "Süreyi Belirle", text: "Anne veya babamızla süreyi kararlaştırırız (Örn: 30 dakika)." },
            { bold: "Sayacı Kur", text: "Saati veya alarmı kurup kenara koyarız." },
            { bold: "Zil Çalınca Kapat", text: "Alarm çaldığında mızmızlanmadan ekranı hemen kapatırız." }
          ]
        },
        {
          title: "Ekran Kararmadan Önce",
          icon: "🌙",
          desc: "Sağlıklı uyku için altın kural:",
          items: [
            { bold: "Yatmadan 1 Saat Önce", text: "Uyumadan önce tablet, telefon ve televizyon ekranlarına bakmayız." },
            { bold: "Mavi Işık", text: "Ekran ışığı beynimize 'daha gündüz' mesajı vererek uykumuzu kaçırır." },
            { bold: "Kitap Oku", text: "Uykudan önce masal veya hikaye kitabı okumak beynimizi dinlendirir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'Günlük Zaman Pastası Çizimi'",
      subtitle: "Defterimize yuvarlak bir pasta çizip içine günümüzü nasıl paylaştırdığımızı boyuyoruz.",
      steps: [
        { title: "Zaman Pastasını Çiz", desc: "Defterinize büyük bir çember (pasta) çizin." },
        { title: "Dilimlere Ayır", desc: "Uyku, okul, parkta oyun, yemek ve ekran süresi dilimlerini belirleyin." },
        { title: "Renklendir", desc: "Ekran süresini küçük bir dilim olarak maviye, park oyununu yeşile boyayın." }
      ],
      criteria: [
        "Ekran süresinin günün küçük bir parçası olması gerektiğini fark etme",
        "Kendi günlük zaman planını görselleştirebilme",
        "Ekran süresi sınırına uymaya istekli olma"
      ]
    },
    tips: {
      safetyTitle: "Bilinçli Teknoloji Kullanıcısı Kuralları",
      safetyRules: [
        { bold: "Yemekte Ekran Yok", text: "Yemek yerken telefon veya tablete bakmayız; yemeğimizin tadını çıkarırız." },
        { bold: "İzin Alarak Kullan", text: "Tableti veya bilgisayarı açmadan önce ailemizden mutlaka izin alırız." },
        { bold: "Göz Teması Kur", text: "Biri bizimle konuşurken ekrana değil, konuşan kişinin yüzüne bakarız." }
      ],
      myths: [
        { wrong: "Daha çok bilgisayar oyunu oynarsam daha mutlu ve dinlenmiş olurum.", correct: "Saatlerce ekran başında kalmak beyni yorar, gözleri kızartır ve kişiyi sinirli yapar. Asıl enerji açık havada koşarak kazanılır." }
      ]
    },
    quiz: {
      question: "Tablet veya bilgisayarda oyun oynarken süremiz dolup alarm çaldığında ne yapmalıyız?",
      options: [
        { text: "A) Alarmı kapatıp oynamaya gizlice devam etmeliyiz", isCorrect: false },
        { text: "B) Oyunu kaydedip cihazı kapatmalı ve hareketli bir oyuna geçmeliyiz", isCorrect: true },
        { text: "C) Ağlayıp odamıza kapanmalıyız", isCorrect: false },
        { text: "D) Ekranı geceye kadar açık bırakmalıyız", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Süre bitince ekranı kapatmak bir irade ve süper kahramanlık göstergesidir!"
    },
    summaryRules: [
      { bold: "Denge", text: "Gerçek oyunlar sanal oyunlardan çok daha sağlıklıdır." },
      { bold: "Zaman Sınırı", text: "30-45 dakikalık bilinçli kullanım yeterlidir." },
      { bold: "Uykudan Önce", text: "Mavi ışıktan uzak durup güzelce dinlenmeliyiz." }
    ],
    homework: "Bu hafta sonu ailenizle birlikte 1 saat boyunca hiçbir ekrana bakmadan kutu oyunu oynayın veya yürüyüş yapın.",
    nextWeekPreview: "29 Ekim Cumhuriyet Bayramı & Bilgisayarda Şanlı Türk Bayrağımızı Tasarlıyoruz!"
  },

  // 7. HAFTA
  {
    week: 7,
    date: "26 Ekim - 01 Kasım",
    hours: "2 Ders Saati",
    unit: "1. Tema: Bilişim Dünyası ve Bilgisayarla Tanışma",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "29 Ekim Cumhuriyet Bayramı & Dijital Bayrak Tasarımımız",
    subtitle: "Milli Birlik ve Beraberlik Ruhu ile Bilgisayarda Şanlı Türk Bayrağını Çizme",
    outcomeCode: "BTY.2.1.7 (Milli Değerler & Dijital Tasarım)",
    targetSkill: "Cumhuriyet Değerlerini Kavrama, Renkleri ve Şekilleri Kullanarak Bayrak Çizme",
    curiosityQuestion: "Göklerde dalgalanan al bayrağımızın hilal ve yıldızını bilgisayarda geometrik şekillerle nasıl çizebiliriz?",
    roadmap: [
      { title: "Cumhuriyet Coşkusu", desc: "29 Ekim 1923'te kurulan Cumhuriyetimizin 103. yılı kutlaması." },
      { title: "Bayrağımızın Renkleri", desc: "Al kırmızı zemin, bembeyaz hilal ve beş köşeli yıldız." },
      { title: "Şekil Araçları", desc: "Daire (hilal için) ve yıldız aracıyla çizim yapma." },
      { title: "Dijital Sergi", desc: "Sınıf panosunda bayrak tasarımlarımızı paylaşma." }
    ],
    section1: {
      title: "Bayrağımızın Geometrisi ve Dijital Çizimi",
      subtitle: "Bilgisayarda hilal yapmak için iki dairenin sihrini kullanırız.",
      layout: "split-visual",
      card: {
        title: "Adım Adım Dijital Bayrak",
        icon: "🇹🇷",
        desc: "Çizim programında bayrağımızı oluşturma aşamaları:",
        items: [
          { bold: "1. Kırmızı Zemin", text: "Boya kovası aracıyla çalışma sayfamızı pırıl pırıl bayrak kırmızısına boyarız." },
          { bold: "2. Büyük Beyaz Daire", text: "Şekillerden daireyi seçip beyaz renkle bir yuvarlak çizeriz." },
          { bold: "3. Kırmızı İç Daire", text: "Biraz daha küçük bir kırmızı daireyi beyaz dairenin üzerine kaydırarak hilal (ay) oluştururuz." },
          { bold: "4. Beş Köşeli Yıldız", text: "Yıldız aracını seçip hilalin tam karşısına gururla yerleştiririz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Türk Bayrağı -->
        <rect x="20" y="25" width="380" height="200" rx="10" fill="#e11d48"/>
        <!-- Hilal Dış Çember (Beyaz) -->
        <circle cx="160" cy="125" r="60" fill="#ffffff"/>
        <!-- Hilal İç Çember (Kırmızı kesme) -->
        <circle cx="175" cy="125" r="48" fill="#e11d48"/>
        <!-- Yıldız -->
        <polygon points="245,125 220,110 230,135 210,120 238,120 220,140" fill="#ffffff" transform="scale(1.2) translate(-25,-15)"/>
        <!-- Başlık -->
        <rect x="70" y="195" width="280" height="25" rx="6" fill="#000000" fill-opacity="0.4"/>
        <text x="210" y="212" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">YAŞASIN CUMHURİYET! (29 EKİM 1923)</text>
      </svg>`,
      caption: "Vektörel Çizim ile Türk Bayrağımızın Hilal ve Yıldızı"
    },
    section2: {
      title: "Cumhuriyetimizin Işığında Bilişim ve Üretim",
      subtitle: "Gazi Mustafa Kemal Atatürk'ün çocuklara emanet ettiği aydınlık gelecek.",
      layout: "cards-2",
      cards: [
        {
          title: "Geleceğin Bilim İnsanları",
          icon: "🚀",
          desc: "Cumhuriyet çocukları teknolojiyi tüketen değil, üreten gençlerdir:",
          items: [
            { bold: "Hayal Et ve Tasarla", text: "Bilgisayarı kendi resimlerimizi, hikayelerimizi çizmek için kullanırız." },
            { bold: "Kodlamayı Öğren", text: "Küçük yaşta kodlama öğrenerek ülkemize faydalı yazılımlar geliştiririz." },
            { bold: "Çalışkan Olmak", text: "Atatürk'ün 'Vatanını en çok seven, görevini en iyi yapandır' sözünü ilke ediniriz." }
          ]
        },
        {
          title: "Bilişimde Renk Paleti Kullanımı",
          icon: "🎨",
          desc: "Çizim yaparken renkleri seçme ustalığı:",
          items: [
            { bold: "Renk Seçici", text: "İstediğimiz rengi renk kutusuna tıklayarak fırçamıza yükleriz." },
            { bold: "Geri Al (Ctrl+Z)", text: "Çizgimiz yamuk olduğunda üzülmeyiz; 'Geri Al' tuşuyla hemen düzeltiriz." },
            { bold: "Fırça Kalınlığı", text: "Çizgimizi ister ince ister kalın yaparak resmimize derinlik katarız." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Cumhuriyet Bayrağımı Çiziyorum'",
      subtitle: "Paint programında kırmızı zemin üzerine hilal ve yıldız çizip sınıf panosuna kaydediyoruz.",
      steps: [
        { title: "Çizim Programını Aç", desc: "Paint veya Tux Paint programını masaüstünden açın." },
        { title: "Zemini Kırmızıya Boya", desc: "Boya kovası aracıyla sayfayı parlak kırmızı renge boyayın." },
        { title: "Hilal ve Yıldızı Çiz", desc: "Beyaz şekillerle hilal ve yıldızı ekleyip '29 Ekim Cumhuriyet' yazısı ekleyin." }
      ],
      criteria: [
        "Şekil ve boya kovası araçlarını doğru kullanabilme",
        "Bayrağın renk ve oranlarına özen gösterme",
        "Milli bayram coşkusunu dijital eserine yansıtabilme"
      ]
    },
    tips: {
      safetyTitle: "Dijital Sanatçı İpuçları",
      safetyRules: [
        { bold: "Delikli Şekillere Dikkat", text: "Boya kovasıyla boyarken çizgilerin kapalı olduğundan emin olun, yoksa boya her yere akar!" },
        { bold: "Geri Al Sihri", text: "Hata yaptığınızda silgiyle saatlerce uğraşmak yerine 'Geri Al' (Undo) butonuna basın." },
        { bold: "Çalışmanı Kaydet", text: "Eseriniz bittiğinde mutlaka 'Kaydet' düğmesine basarak dosyanızı saklayın." }
      ],
      myths: [
        { wrong: "Bilgisayarda çizim yapmak için gerçek ressam olmak gerekir.", correct: "Geometrik şekiller ve renk araçları sayesinde herkes bilgisayarda harika çizimler yapabilir!" }
      ]
    },
    quiz: {
      question: "Çizim programında sayfanın tamamını tek bir tıkla kırmızı renge boyamak için hangi aracı kullanırız?",
      options: [
        { text: "A) Silgi Aracı", isCorrect: false },
        { text: "B) Boya Kovası (Doldur) Aracı", isCorrect: true },
        { text: "C) Büyüteç Aracı", isCorrect: false },
        { text: "D) Metin Yazma Aracı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Boya kovası aracı, kapalı bir alanı veya tüm ekranı seçtiğimiz renkle bir anda doldurur."
    },
    summaryRules: [
      { bold: "29 Ekim", text: "Cumhuriyetimizin ve bağımsızlığımızın gurur günüdür." },
      { bold: "Boya Kovası", text: "Geniş alanları tek tıkla renklendirme aracıdır." },
      { bold: "Geri Al", text: "Dijital dünyada hataları kolayca düzeltme gücüdür." }
    ],
    homework: "Çizdiğiniz dijital Türk bayrağını ailenize gösterip Cumhuriyet Bayramı şiiri okuyun.",
    nextWeekPreview: "1. Dönem 1. Değerlendirme & Bilgisayar Parçaları Büyük Bilgi Yarışması!"
  },

  // 8. HAFTA
  {
    week: 8,
    date: "02 - 08 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital Sanatlar, Çizim ve Metin Dünyam",
    unitBadge: "1. Dönem 1. Sınav",
    unitTheme: "tema-sinav",
    title: "1. Dönem 1. Değerlendirme & Bilişim Bilgi Yarışması",
    subtitle: "Öğrendiklerimizi Pekiştiriyoruz: Donanım Dedektifi ve Eğlenceli Mini Test",
    outcomeCode: "BTY.2.2.1 (Ölçme & Değerlendirme)",
    targetSkill: "İlk 7 Haftanın Bilişim Kazanımlarını Değerlendirme ve Pekiştirme",
    curiosityQuestion: "Bugüne kadar öğrendiğimiz tüm bilişim kahramanları (Kasa, Ekran, Fare, Klavye, Ergonomi) bir yarışmaya girse birinci kim olurdu?",
    roadmap: [
      { title: "Bilişim Çarkıfeleği", desc: "Donanım parçaları ve görevlerini hatırlama oyunu." },
      { title: "Ergonomi Duruş Testi", desc: "Bilgisayar başında doğru ve yanlış oturuşları ayırma." },
      { title: "Klavye ve Fare Ustalığı", desc: "Tuşların görevleri ve tıklama pratikleri." },
      { title: "Başarı Rozetleri", desc: "Dönemin ilk rozetini kazanma sevinci." }
    ],
    section1: {
      title: "İlk 7 Haftanın Bilişim Özeti",
      subtitle: "Bilişim dünyasında harika bir temel attık, şimdi öğrendiklerimizi hatırlayalım.",
      layout: "split-visual",
      card: {
        title: "Bilişim Kahramanları Karnesi",
        icon: "🏆",
        desc: "Artık çok iyi bildiğimiz 4 altın başlık:",
        items: [
          { bold: "Donanım Parçaları", text: "Kasa (Beyin), Monitör (Göz), Klavye (Yazı) ve Fare (İşaretçi)." },
          { bold: "Açma ve Kapama", text: "Power düğmesiyle açar, Başlat menüsünden güvenle kapatırız." },
          { bold: "Fare ve Klavye", text: "Sol tıkla seçer, çift tıkla açar, Space ile boşluk bırakırız." },
          { bold: "Ergonomi ve Denge", text: "Kol boyu mesafeden dik oturur, ekran süresini dengeleriz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
        <!-- Madalya / Kupa -->
        <circle cx="210" cy="95" r="45" fill="#f59e0b" fill-opacity="0.25" stroke="#fbbf24" stroke-width="4"/>
        <text x="210" y="110" font-size="44" text-anchor="middle">🥇</text>
        <rect x="110" y="155" width="200" height="30" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="210" y="175" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">BİLİŞİM DEDEKTİFİ ROZETİ</text>
        <text x="210" y="210" fill="#94a3b8" font-size="11" text-anchor="middle">Tüm adımları başarıyla tamamlayan 2. sınıflar!</text>
      </svg>`,
      caption: "1. Dönem 1. Değerlendirme Başarı Kupası"
    },
    section2: {
      title: "Bilişim Dedektifi Soru Atölyesi",
      subtitle: "Karşılaştırma senaryoları ile bilgilerimizi test ediyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Doğru mu? Yanlış mı?",
          icon: "🤔",
          desc: "Cümleleri okuyup doğru olanları alkışlıyoruz:",
          items: [
            { bold: "Soru 1", text: "Bilgisayarı prizden çekerek kapatmak bilgisayarı korur. (YANLIŞ)" },
            { bold: "Soru 2", text: "Klavyede kelimelerin arasına boşluk bırakmak için Space tuşuna basılır. (DOĞRU)" },
            { bold: "Soru 3", text: "Ekrana bir kol boyu mesafeden bakmak göz sağlığımız için gereklidir. (DOĞRU)" }
          ]
        },
        {
          title: "Hangi Parça Hangisi?",
          icon: "🧩",
          desc: "Görevleri parçalarla eşleştiriyoruz:",
          items: [
            { bold: "Tık-Tık Yapıp Dosya Açar", text: "Fare (Mouse)" },
            { bold: "Bütün İşlemleri Yönetir", text: "Kasa (İşlemci)" },
            { bold: "Şiir ve Hikaye Yazdırır", text: "Klavye" },
            { bold: "Resimleri ve Renkleri Gösterir", text: "Monitör (Ekran)" }
          ]
        }
      ]
    },
    workshop: {
      title: "Uygulama: 'Bilişim Şampiyonu Bilgi Yarışması'",
      subtitle: "Akıllı tahtada açılan soruları sıra arkadaşımızla birlikte cevaplayıp puan topluyoruz.",
      steps: [
        { title: "Takımını Kur", desc: "Sıra arkadaşınızla ikili dedektif grubu oluşturun." },
        { title: "Soruları Yanıtla", desc: "Tahtadaki 5 soruyu dikkatlice okuyup doğru cevabı işaretleyin." },
        { title: "Başarı Rozetini Al", desc: "Soruları tamamlayıp dijital başarı sertifikanızı alın." }
      ],
      criteria: [
        "Donanım parçalarının görevlerini ayırt edebilme",
        "Ergonomi ve güvenli kullanım kurallarını açıklayabilme",
        "Takım çalışmasına uyum sağlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Sınav ve Tekrar Stratejileri",
      safetyRules: [
        { bold: "Soruyu Dikkatle Oku", text: "Seçeneklere hemen atlamadan önce sorunun ne sorduğunu tam anlayın." },
        { bold: "Arkadaşına Saygı", text: "Grup çalışmalarında arkadaşının fikrini sabırla dinleyin." },
        { bold: "Öğrenmek Eğlencedir", text: "Hatalarımız eksiklerimizi tamamlamak için en iyi öğretmenimizdir." }
      ],
      myths: [
        { wrong: "Sınavda hızlı bitiren her zaman en yüksek puanı alır.", correct: "Önemli olan hız değil, dikkatli ve kurallara uygun şekilde doğru cevabı bulmaktır." }
      ]
    },
    quiz: {
      question: "Bilgisayarın kütüphanesini ve beynini oluşturan, bütün hesaplamaları yapan ana parça aşağıdakilerden hangisidir?",
      options: [
        { text: "A) Kasa (Sistem Birimi)", isCorrect: true },
        { text: "B) Fare Altlığı", isCorrect: false },
        { text: "C) Kulaklık", isCorrect: false },
        { text: "D) Yazıcı Kağıdı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: A!</strong> Kasa, bilgisayarın içindeki işlemci ve bellek parçalarını barındıran akıllı yönetim merkezidir."
    },
    summaryRules: [
      { bold: "Başarı", text: "Düzenli dinleyen ve uygulayan öğrencinin yanındadır." },
      { bold: "Donanım", text: "Birbirine yardım eden muhteşem bir orkestra gibidir." },
      { bold: "Gelecek Hafta", text: "Paint çizim programında sanat yolculuğumuz başlıyor!" }
    ],
    homework: "Bugüne kadar öğrendiğiniz en ilginç bilişim kuralını defterinize 1 cümleyle yazıp yıldızla süsleyin.",
    nextWeekPreview: "10 Kasım Atatürk'ü Anma & Paint Çizim Programında Fırçalar ve Renklerin Dünyası!"
  },

  // 9. HAFTA
  {
    week: 9,
    date: "09 - 15 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital Sanatlar, Çizim ve Metin Dünyam",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "10 Kasım Atatürk'ü Anma & Paint ile Çizim Araçları",
    subtitle: "Gazi Mustafa Kemal Atatürk'e Sevgi Çelenkleri ve Paint Çizim Araçları",
    outcomeCode: "BTY.2.2.2 (Görsel Tasarım & Tarih Bilinci)",
    targetSkill: "Paint Programı Arayüzünü Tanıma, Kalem ve Fırça Araçlarıyla Anma Resmi Çizme",
    curiosityQuestion: "Ekrana çizgi çizdiğimizde kalemimiz hiç tükenir mi? Dijital boyaların gerçek boyalardan farkı nedir?",
    roadmap: [
      { title: "10 Kasım Ruhu", desc: "Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ü saygıyla anma." },
      { title: "Paint Arayüzü", desc: "Çizim alanı, araçlar menüsü ve renk kutusu." },
      { title: "Kalem ve Fırçalar", desc: "Farklı uçlu fırçalarla çizgi denemeleri yapma." },
      { title: "Sevgi Çelengi", desc: "Atatürk ve çocuk sevgisini anlatan çiçekler çizme." }
    ],
    section1: {
      title: "Paint Programının Sihirli Çizim Çantası",
      subtitle: "Boya kalemlerimiz kırılmaz, boyalarımız masaya dökülmez!",
      layout: "split-visual",
      card: {
        title: "Temel Çizim Araçları",
        icon: "🖌️",
        desc: "Paint programının en popüler 4 aracı:",
        items: [
          { bold: "Kalem Aracı", text: "Tıpkı kurşun kalem gibi serbest el çizgileri ve desenler çizer." },
          { bold: "Fırçalar", text: "Yağlı boya, sulu boya, pastel boya ve sprey boya efektleri sunar." },
          { bold: "Silgi Aracı", text: "İstemediğimiz fazlalıkları beyaz zeminle silip temizler." },
          { bold: "Renk Kutusu", text: "Gökkuşağının tüm renklerini tek tıkla seçmemizi sağlar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Paint Paleti -->
        <path d="M110 50 C180 30, 270 50, 310 110 C340 160, 280 210, 210 200 C170 195, 140 220, 100 200 C50 170, 60 80, 110 50 Z" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
        <!-- Boya Noktaları -->
        <circle cx="120" cy="90" r="14" fill="#ef4444"/>
        <circle cx="160" cy="70" r="14" fill="#3b82f6"/>
        <circle cx="210" cy="70" r="14" fill="#10b981"/>
        <circle cx="260" cy="95" r="14" fill="#fbbf24"/>
        <circle cx="280" cy="140" r="14" fill="#a855f7"/>
        <!-- Fırça -->
        <rect x="75" y="165" width="80" height="12" rx="4" fill="#78350f" transform="rotate(-30 75 165)"/>
        <path d="M140 130 L160 118 L155 140 Z" fill="#94a3b8"/>
        <!-- Başlık -->
        <text x="210" y="232" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">Paint ile Dijital Sanat Atölyesi</text>
      </svg>`,
      caption: "Dijital Renk Paleti ve Sanatçı Fırçası"
    },
    section2: {
      title: "10 Kasım Anısına Sevgi Çiçekleri",
      subtitle: "Atatürk'ün çocuklara olan sevgisini rengarenk çiçeklerle anlatıyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Sprey Boya ile Çiçek Buketi",
          icon: "💐",
          desc: "Sprey aracıyla harika gölgeler ve çiçek yaprakları oluşturma:",
          items: [
            { bold: "Fırçalardan Spreyi Seç", text: "Yıldız tozu gibi püskürten sprey boyayı seçeriz." },
            { bold: "Kırmızı ve Beyaz Çiçekler", text: "Kasımpatı ve karanfiller çizerek Ata'mıza sevgi çelengi yaparız." },
            { bold: "Kalınlık Ayarı", text: "Püskürtme boyutunu genişleterek dolgun yapraklar yaparız." }
          ]
        },
        {
          title: "Serbest El Çizgisi Becerisi",
          icon: "✏️",
          desc: "Fareyi kağıt üzerindeki kalem gibi kontrol etmek:",
          items: [
            { bold: "Sol Tuşa Basılı Tut", text: "Çizgi çizerken parmağımızı sol tuşta basılı tutarız." },
            { bold: "Bileği Rahat Bırak", text: "Fareyi sıkmadan, masada yumuşak hareketlerle kaydırırız." },
            { bold: "Bitince Bırak", text: "Çizgi tamamlandığında parmağımızı kaldırırız." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Ata'mıza Saygı Resmi'",
      subtitle: "Paint'te çiçekler, Türk bayrağı ve 'Saygı ve Özlemle' yazısı hazırlıyoruz.",
      steps: [
        { title: "Paint'i Başlat", desc: "Arama çubuğuna Paint yazarak uygulamayı açın." },
        { title: "Kırmızı ve Beyaz Karanfiller Çiz", desc: "Fırça ve sprey aracını kullanarak çelenk şeklinde çiçekler çizin." },
        { title: "Metin Aracıyla Not Düş", desc: "'1881 - 1938 Seni Hiç Unutmayacağız' notunu ekleyin." }
      ],
      criteria: [
        "Farklı fırça ve kalem araçlarını seçebilme",
        "Renk paletinden uygun renkleri kullanabilme",
        "10 Kasım anma temasına uygun özenli bir eser oluşturma"
      ]
    },
    tips: {
      safetyTitle: "Dijital Boyama Tüyoları",
      safetyRules: [
        { bold: "Hata Yapmaktan Korkma", text: "Dijital çizimde silgi ve geri al butonu her zaman yanınızdadır." },
        { bold: "Farklı Fırçaları Dene", text: "Sadece tek bir fırçayla kalmayın; suluboya ve tebeşir fırçalarını da keşfedin." },
        { bold: "Masaüstüne Kaydet", text: "Resminizi '10_Kasim_Resmim' adıyla masaüstüne kaydetmeyi unutmayın." }
      ],
      myths: [
        { wrong: "Paint programında fırça bitince yeni fırça satın almak gerekir.", correct: "Paint içindeki fırçalar ve boyalar sınırsızdır; tükenmez ve asla kurumaz!" }
      ]
    },
    quiz: {
      question: "Paint programında çizim yaparken duvara sprey boya sıkıyormuş gibi minik noktacıklarla boyama yapan araç hangisidir?",
      options: [
        { text: "A) Silgi", isCorrect: false },
        { text: "B) Sprey (Airbrush) Fırçası", isCorrect: true },
        { text: "C) Büyüteç", isCorrect: false },
        { text: "D) Metin Aracı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Sprey fırçası, noktacıklı püskürtme yaparak çiçeklere ve gökyüzüne harika dokular kazandırır."
    },
    summaryRules: [
      { bold: "Paint", text: "Bilgisayardaki sonsuz renkli resim atölyemizdir." },
      { bold: "Fırçalar", text: "Resmimize farklı duygular ve efektler katar." },
      { bold: "10 Kasım", text: "Büyük Önder Atatürk'ü minnet ve saygıyla anma günümüzdür." }
    ],
    homework: "Evde bir kağıda Atatürk için çizmek istediğiniz resmi tasarlayın ve haftaya bilgisayarda çizmek üzere hazırlanın.",
    nextWeekPreview: "1. Dönem Ara Tatil: Eğlenceli Dijital Boyama ve Çizim Atölyesi!"
  },

  // 10. HAFTA
  {
    week: 10,
    date: "16 - 22 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital Sanatlar, Çizim ve Metin Dünyam",
    unitBadge: "Ara Tatil Atölyesi",
    unitTheme: "tema-2",
    title: "1. Dönem Ara Tatil: Eğlenceli Dijital Boyama Atölyesi",
    subtitle: "Hayal Gücümüzü Ekrana Taşıyoruz: Doldurma Kovası, Fırçalar ve Çizgi Sanatı",
    outcomeCode: "BTY.2.2.3 (Serbest Üretim)",
    targetSkill: "Hayal Gücünü Dijital Çizimle İfade Etme ve Bağımsız Proje Tamamlama",
    curiosityQuestion: "Bilgisayarda uzay gemisi mi yoksa masal şatosu mu çizmek daha eğlencelidir? Renkler hayallerimize nasıl sınır tanımaz?",
    roadmap: [
      { title: "Serbest Sanat Zamanı", desc: "Kurallara bağlı kalmadan kendi hayal dünyasını çizme." },
      { title: "Şekilleri Birleştirme", desc: "Üçgen çatı, kare duvar ve daire pencerelerle ev yapma." },
      { title: "Gökkuşağı Renkleri", desc: "Farklı renk tonlarını karıştırarak özel renk üretme." },
      { title: "Tatil Hatırası", desc: "Ara tatil boyunca yapılacakları dijital resimle anlatma." }
    ],
    section1: {
      title: "Geometrik Şekillerle Sihirli Ev Tasarımı",
      subtitle: "Kareler, üçgenler ve daireler bir araya gelince kocaman bir masal dünyası oluşur.",
      layout: "split-visual",
      card: {
        title: "Şekillerin Gücü",
        icon: "🏰",
        desc: "Şekil araçlarıyla kolayca neler çizebiliriz?",
        items: [
          { bold: "Kare ve Dikdörtgen", text: "Evimizin duvarları, pencereleri, kapısı ve araba gövdesi." },
          { bold: "Üçgen", text: "Evimizin çatısı, dağların zirvesi ve yelkenli geminin yelkeni." },
          { bold: "Daire ve Elips", text: "Gökyüzündeki sıcacık güneş, bulutlar, arabanın tekerlekleri ve sevimli kardan adam." },
          { bold: "Yıldız", text: "Gece gökyüzünü süsleyen parlak yıldızlar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Doğa Zemin -->
        <rect x="25" y="170" width="370" height="60" rx="8" fill="#15803d"/>
        <!-- Güneş -->
        <circle cx="340" cy="65" r="28" fill="#f59e0b" stroke="#fde68a" stroke-width="3"/>
        <!-- Ev Gövde (Kare) -->
        <rect x="150" y="105" width="100" height="80" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
        <!-- Çatı (Üçgen) -->
        <polygon points="140,105 200,50 260,105" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/>
        <!-- Kapı -->
        <rect x="185" y="145" width="30" height="40" fill="#78350f"/>
        <!-- Pencereler -->
        <rect x="160" y="120" width="22" height="22" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <rect x="218" y="120" width="22" height="22" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <!-- Ağaç -->
        <rect x="75" y="140" width="16" height="45" fill="#78350f"/>
        <circle cx="83" cy="125" r="30" fill="#22c55e"/>
      </svg>`,
      caption: "Geometrik Şekiller ile Oluşturulan Masal Evi"
    },
    section2: {
      title: "Ara Tatilde Bilişim ve Üretim Rehberi",
      subtitle: "Tatili sadece ekran başında pasif video izleyerek değil, üreterek geçirin.",
      layout: "cards-2",
      cards: [
        {
          title: "Üretici Ekran Zamanı",
          icon: "💡",
          desc: "Tatilde yapılabilecek harika dijital etkinlikler:",
          items: [
            { bold: "Kendi Masal Kitabını Çiz", text: "Paint'te bir kahraman çizip altına birkaç cümleyle macerasını yazın." },
            { bold: "Aile Portresi", text: "Ailenizin bireylerini çizip onlara sürpriz hediye edin." },
            { bold: "Eğitici Akıl Oyunları", text: "Code.org veya EBA üzerindeki seviyeli bulmacaları çözün." }
          ]
        },
        {
          title: "Açık Hava ve Doğa Keşfi",
          icon: "🌳",
          desc: "Tatilin gerçek kahramanı sizsiniz:",
          items: [
            { bold: "Parkta Bisiklet ve Yürüyüş", text: "Sonbahar yapraklarını toplayıp renklerini inceleyin." },
            { bold: "Kitap Okuma Saati", text: "Her gün en az 20 sayfa macera kitabı okuyun." },
            { bold: "Bilişim Enerjisi", text: "Dinlenmiş ve tazelenmiş olarak 2. döneme hazırlanın." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Hayalimdeki Doğa Parkı'",
      subtitle: "Ağaçlar, göl, balıklar, gökyüzü ve hayvanlar içeren kocaman bir doğa resmi çiziyoruz.",
      steps: [
        { title: "Zemin ve Gökyüzü", desc: "Sayfanın üstünü mavi gökyüzü, altını yeşil çimen olarak ikiye boyayın." },
        { title: "Göl ve Ağaçlar Ekle", desc: "Elips aracıyla mavi bir göl, daire ve dikdörtgenle ulu ağaçlar yapın." },
        { title: "Güneş ve Kuşları Çiz", desc: "Sarı bir güneş ve ince çizgilerle uçuşan martılar ekleyin." }
      ],
      criteria: [
        "Farklı geometrik şekilleri amaca uygun birleştirebilme",
        "Renk uyumunu ve sahne kompozisyonunu zenginleştirme",
        "Kendi özgün hayal gücünü ekrana yansıtabilme"
      ]
    },
    tips: {
      safetyTitle: "Ara Tatil Bilişim Sözü",
      safetyRules: [
        { bold: "Ekran Sınırına Sadık Kal", text: "Tatilde olsak bile ekran başında saatlerce kalmayın, 45 dakikada bir mutlaka mola verin." },
        { bold: "Gözlerini Koru", text: "Pencereye çıkıp uzaklara bakın ve temiz hava soluyun." },
        { bold: "Çizimlerini Sakla", text: "Tatilde yaptığınız resimleri bir klasörde toplayıp öğretmeninize göstermek için saklayın." }
      ],
      myths: [
        { wrong: "Tatilde tüm gün bilgisayarda oyun oynamak en iyi tatil yöntemidir.", correct: "Tüm gün ekranda oyun oynamak bedeni ve zihni tembelleştirir; asıl enerji arkadaş canlısı oyunlarda ve sporda saklıdır." }
      ]
    },
    quiz: {
      question: "Çizim programında bir evin çatısını çizmek için aşağıdaki geometrik şekillerden hangisini kullanmak en uygundur?",
      options: [
        { text: "A) Daire", isCorrect: false },
        { text: "B) Üçgen", isCorrect: true },
        { text: "C) Hilal", isCorrect: false },
        { text: "D) Dalgalı Çizgi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Üçgen şekli, iki yana eğimli kenarlarıyla tam bir ev çatısı oluşturur."
    },
    summaryRules: [
      { bold: "Şekiller", text: "Çizim dünyasının yapı taşlarıdır." },
      { bold: "Ara Tatil", text: "Hem dinlenme hem de hayal gücünü serbest bırakma fırsatıdır." },
      { bold: "Üretken Çocuk", text: "Teknolojiyi tüketmez, onunla yeni güzellikler üretir." }
    ],
    homework: "Ara tatilde ailenizle geçirdiğiniz en güzel anın resmini bilgisayarda çizip dosyanıza kaydedin.",
    nextWeekPreview: "24 Kasım Öğretmenler Günü & Geometrik Şekillerle Dijital Tebrik Kartı Tasarımı!"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_TERM_1_GRADE2 = CURRICULUM_TERM_1_GRADE2;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CURRICULUM_TERM_1_GRADE2 };
}
