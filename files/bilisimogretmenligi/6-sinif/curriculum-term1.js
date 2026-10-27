/**
 * 6. Sınıf Bilişim Teknolojileri - 1. Dönem Müfredat Verileri (Hafta 1 - 10)
 */

const CURRICULUM_TERM_1_PART1 = [
  // 1. HAFTA
  {
    week: 1,
    date: "14 - 20 Eylül",
    hours: "2 Saat",
    unit: "1. Ünite: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Ünite",
    unitTheme: "unite-1",
    title: "Yenilikçi Bilişim Teknolojileri",
    subtitle: "Nesnelerin İnterneti, Yapay Zekâ, Bulut Bilişim ve Otonom Araçlar",
    outcomeCode: "BTY.6.1.1",
    targetSkill: "Dijital Okuryazarlık & Sınıflandırma",
    curiosityQuestion: "Sabah alarmınız çaldığında kahve makinesinin otomatik çalışması ve perdelerinizin açılması hangi teknolojiyle mümkündür?",
    roadmap: [
      { title: "Yenilikçi Teknoloji Nedir?", desc: "Geleneksel bilişimden farkı ve günlük yaşamı kolaylaştıran yönleri." },
      { title: "5 Büyük Teknoloji", desc: "IoT, Yapay Zekâ, Bulut Bilişim, Büyük Veri ve Otonom Sistemler." },
      { title: "Kullanım Alanları", desc: "Sağlık, eğitim, akıllı ev, tarım ve ulaşım sektörlerindeki uygulamalar." },
      { title: "Geleceğe Hazırlık", desc: "Tüketen değil, teknolojinin mantığını kavrayıp üreten birey olma." }
    ],
    roadmapSvg: `
      <svg viewBox="0 0 400 300">
        <circle cx="200" cy="150" r="45" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
        <text x="200" y="146" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Yenilikçi</text>
        <text x="200" y="162" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Teknolojiler</text>
        <g transform="translate(200, 45)"><circle r="32" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><text y="4" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">Yapay Zekâ</text><line x1="0" y1="32" x2="0" y2="60" stroke="#93c5fd" stroke-width="2" stroke-dasharray="4"/></g>
        <g transform="translate(305, 115)"><circle r="32" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/><text y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">Nesnelerin</text><text y="11" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">İnterneti (IoT)</text><line x1="-32" y1="12" x2="-60" y2="25" stroke="#a7f3d0" stroke-width="2" stroke-dasharray="4"/></g>
        <g transform="translate(265, 235)"><circle r="32" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Bulut</text><text y="11" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Bilişim</text><line x1="-25" y1="-25" x2="-45" y2="-45" stroke="#fde68a" stroke-width="2" stroke-dasharray="4"/></g>
        <g transform="translate(135, 235)"><circle r="32" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#5b21b6">Büyük Veri</text><text y="11" text-anchor="middle" font-size="10" font-weight="bold" fill="#5b21b6">(Big Data)</text><line x1="25" y1="-25" x2="45" y2="-45" stroke="#ddd6fe" stroke-width="2" stroke-dasharray="4"/></g>
        <g transform="translate(95, 115)"><circle r="32" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text y="-2" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">Otonom</text><text y="11" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">Araçlar</text><line x1="32" y1="12" x2="60" y2="25" stroke="#fecaca" stroke-width="2" stroke-dasharray="4"/></g>
      </svg>
    `,
    section1: {
      title: "Nesnelerin İnterneti (IoT) & Bulut Bilişim",
      subtitle: "Akıllı cihazların haberleşmesi ve verilerin her yerden erişilebilir olması.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Nesnelerin İnterneti (IoT)",
          icon: "🌐",
          borderClass: "card-primary-border",
          desc: "Fiziksel cihazların sensörler ve internet ağı ile birbirine bağlanıp veri paylaşmasıdır.",
          items: [
            { bold: "Akıllı Evler", text: "Kombinin hava soğuyunca otomatik açılması, akıllı lambalar." },
            { bold: "Sağlık ve Spor", text: "Adım sayımızı ve kalp ritmimizi ölçen akıllı saatler." },
            { bold: "Akıllı Şehirler", text: "Doluluk oranına göre rota çizen akıllı çöp konteynerleri." }
          ]
        },
        {
          title: "Bulut Bilişim (Cloud)",
          icon: "☁️",
          borderClass: "card-accent-border",
          desc: "Dosya ve programların bilgisayar diskinde değil, internetteki güvenli sunucularda saklanmasıdır.",
          items: [
            { bold: "Her Yerden Erişim", text: "Ödevinize okuldan, evden veya telefondan anında ulaşabilirsiniz." },
            { bold: "Güvenli Yedekleme", text: "Bilgisayarınız arızalansa bile fotoğraflarınız kaybolmaz." },
            { bold: "Ortak Çalışma", text: "Arkadaşlarınızla aynı sunum üzerinde eş zamanlı çalışabilirsiniz." }
          ]
        }
      ]
    },
    section2: {
      title: "Yapay Zekâ, Büyük Veri & Otonom Sistemler",
      subtitle: "Karar verebilen yazılımlar ve sürücüsüz araç teknolojileri.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Yapay Zekâ (AI)",
          icon: "🤖",
          borderClass: "card-purple-border",
          desc: "İnsan aklını taklit ederek problem çözen, öğrenen ve önerilerde bulunan sistemler.",
          items: [
            { bold: "Sesli Asistanlar", text: "Siri, Google Asistan komutlarımızı anlayıp yanıt verir." },
            { bold: "Tıpta Teşhis", text: "Röntgen filmlerini saniyeler içinde analiz eder." }
          ]
        },
        {
          title: "Büyük Veri (Big Data)",
          icon: "📊",
          borderClass: "card-primary-border",
          desc: "Dünyada her saniye üretilen devasa bilgi yığınının anlamlandırılmasıdır.",
          items: [
            { bold: "Trafik Tahmini", text: "Harita uygulamalarının en hızlı yolu hesaplaması." },
            { bold: "Öneri Sistemleri", text: "Sevdiğiniz şarkılara benzer müziklerin listelenmesi." }
          ]
        },
        {
          title: "Otonom Araçlar",
          icon: "🚗",
          borderClass: "card-accent-border",
          desc: "Sürücüye ihtiyaç duymadan radar, lidar ve kameralarla yol alan taşıtlar.",
          items: [
            { bold: "Sürücüsüz Taşıma", text: "Akıllı metrolar, otonom otobüsler ve robotaksiler." },
            { bold: "İnsansız Araçlar", text: "Kargo teslimatı yapan dronlar ve tarım robotları." }
          ]
        }
      ]
    },
    workshop: {
      title: "Geleceğin Akıllı Okulunu Tasarla",
      subtitle: "Yenilikçi teknolojileri birleştirerek okulumuz için akıllı bir çözüm üretelim.",
      steps: [
        { title: "Okuldaki Sorunu Belirle", desc: "Örn: Koridorda gereksiz yanan lambalar, kütüphanede kaybolan kitaplar veya kantin kuyrukları." },
        { title: "Hangi Teknolojiyi Kullanacaksın?", desc: "IoT sensörleri, Yapay Zekâ yüz tanıma veya Bulut Bilişim veritabanı eşleştirmesi yapın." },
        { title: "Çözümünü 2 Cümleyle Sun", desc: "Arkadaşlarına tasarladığın sistemin nasıl çalıştığını ve sağladığı faydayı anlat." }
      ],
      criteria: [
        "Doğru yenilikçi teknoloji kavramını kullanma",
        "Günlük hayatı kolaylaştıran gerçekçi bir çözüm sunma",
        "Grup arkadaşlarıyla iş birliği ve etkili iletişim",
        "Çevreye duyarlı ve tasarruf odaklı yaklaşım"
      ]
    },
    tips: {
      safetyTitle: "Akıllı Cihazlarda Güvenlik Önlemleri",
      safetyRules: [
        { bold: "Varsayılan Şifreyi Değiştirin", text: "Akıllı cihazların fabrika çıkış şifrelerini hemen güçlü bir şifreyle güncelleyin." },
        { bold: "İzinleri Kontrol Edin", text: "Uygulamalara gereksiz kamera ve mikrofona 7/24 erişim yetkisi vermeyin." },
        { bold: "Güncellemeleri İhmal Etmeyin", text: "Cihaz yazılımlarını güncel tutarak güvenlik açıklarını kapatın." }
      ],
      myths: [
        { wrong: "Bulut bilişimde dosyalar havada veya uydularda uçar.", correct: "Veriler yeryüzündeki son derece güvenli ve devasa sunucu merkezlerinde saklanır." },
        { wrong: "Yapay zekâ her şeyi kusursuz bilir ve asla yanılmaz.", correct: "Yapay zekâ insanların yüklediği verilerden öğrenir; hatalı veri hatalı sonuca yol açar." }
      ]
    },
    quiz: {
      question: "Bir tarım arazisinde toprağın nemini ölçüp sadece ihtiyaç duyulduğunda sulama vanalarını otomatik açan sistem hangi teknolojiye en iyi örnektir?",
      options: [
        { text: "A) Kelime İşlemci Yazılımı", isCorrect: false },
        { text: "B) Nesnelerin İnterneti (IoT)", isCorrect: true },
        { text: "C) CD/DVD Yazıcı Cihazı", isCorrect: false },
        { text: "D) Tarayıcı Programı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Sensörlerin nem oranını ölçüp internet veya kablosuz ağ üzerinden vanalarla haberleşmesi Nesnelerin İnterneti (IoT) kapsamındadır."
    },
    summaryRules: [
      { bold: "Yenilikçi Teknolojiler", text: "İşlerimizi hızlandırır, kaynakları korur ve hayat standardımızı yükseltir." },
      { bold: "Cihazlar Arası İletişim", text: "IoT ve Bulut Bilişim sayesinde cihazlar ve bilgiler mekândan bağımsız yönetilir." },
      { bold: "Bilinçli Kullanım", text: "Akıllı cihazları kullanırken şifre güvenliğine ve gizlilik ayarlarına mutlaka dikkat edilmelidir." }
    ],
    homework: "Evinizdeki internete bağlı cihazların (telefon, TV, robot süpürge vb.) listesini çıkarın ve hangilerinin IoT cihazı olduğunu belirleyin.",
    nextWeekPreview: "Bilişim Teknolojilerinin Geleceği - Gelecekte bizi hangi meslekler ve yaşam tarzları bekliyor?"
  },

  // 2. HAFTA
  {
    week: 2,
    date: "21 - 27 Eylül",
    hours: "2 Saat",
    unit: "1. Ünite: Bilişim Teknolojilerinin Hayatımızdaki Yeri",
    unitBadge: "1. Ünite",
    unitTheme: "unite-1",
    title: "Bilişim Teknolojilerinin Geleceği",
    subtitle: "Dünden Bugüne Bilişimin Evrimi, Akıllı Şehirler ve Geleceğin Meslekleri",
    outcomeCode: "BTY.6.1.2",
    targetSkill: "Çıkarım Yapma & Geleceği Modelleme",
    curiosityQuestion: "Bundan 50 yıl önce oda büyüklüğünde olan bilgisayarlar bugün cebimize sığıyorsa, bundan 20 yıl sonra teknoloji nerede olacak?",
    roadmap: [
      { title: "Bilişimin Kısa Tarihi", desc: "İlk mekanik hesap makinelerinden cebimizdeki süper bilgisayarlara." },
      { title: "Geleceğin Teknolojileri", desc: "Kuantum bilgisayarlar, beyin-bilgisayar arayüzleri, hologramlar." },
      { title: "Akıllı Şehirler", desc: "Trafik, enerji ve atık yönetiminin yapay zekâ ile optimize edilmesi." },
      { title: "Geleceğin Meslekleri", desc: "Robotik koordinatörü, siber güvenlik uzmanı, yapay zekâ eğitmeni." }
    ],
    section1: {
      title: "Teknolojinin Evrimi: Dün, Bugün ve Yarın",
      subtitle: "Bilişim araçlarının geçirdiği devrim niteliğindeki değişim.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Dün (Geçmiş)",
          icon: "📜",
          borderClass: "card-accent-border",
          desc: "Oda büyüklüğünde ENIAC bilgisayarı, disketler, siyah-beyaz ekranlar ve yavaş çevirmeli ağlar.",
          items: [
            { bold: "Depolama", text: "1.44 MB disketler ile sadece birkaç metin taşınıyordu." },
            { bold: "Erişim", text: "Bilgisayarlar sadece üniversite ve devlet kurumlarındaydı." }
          ]
        },
        {
          title: "Bugün (Şimdi)",
          icon: "📱",
          borderClass: "card-primary-border",
          desc: "Akıllı telefonlar, 5G hızlı internet, bulut depolama ve avucumuzdaki yapay zekâ asistanları.",
          items: [
            { bold: "Milyarlarca Bağlantı", text: "Dünyanın yarısından fazlası anlık iletişimde." },
            { bold: "Hızlı Veri", text: "Tek tıkla saniyeler içinde 4K video izleme ve paylaşma." }
          ]
        },
        {
          title: "Yarın (Gelecek)",
          icon: "🚀",
          borderClass: "card-purple-border",
          desc: "Kuantum bilişim, nano-robotlar, uçan elektrikli taksiler ve akıllı şehir ekosistemleri.",
          items: [
            { bold: "Kuantum Gücü", text: "Yıllar süren hesaplamalar saniyeler içinde tamamlanacak." },
            { bold: "Akıllı Yaşam", text: "İnsan sağlığını 7/24 takip eden yapay zekâ doktorlar." }
          ]
        }
      ]
    },
    section2: {
      title: "Akıllı Şehirler & Geleceğin Meslekleri",
      subtitle: "Teknolojiyle değişen şehir hayatı ve yarının kariyer fırsatları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Akıllı Şehirler (Smart Cities)",
          icon: "🏙️",
          borderClass: "card-primary-border",
          desc: "Kaynakların verimli kullanıldığı, çevre dostu ve vatandaş odaklı şehir modelleri.",
          items: [
            { bold: "Akıllı Trafik", text: "Trafik yoğunluğunu ölçüp ışık sürelerini otomatik ayarlayan kavşaklar." },
            { bold: "Enerji Tasarrufu", text: "Sokakta yaya veya araç yokken ışığını kısan akıllı sokak lambaları." },
            { bold: "Akıllı Şebekeler", text: "Güneş ve rüzgâr enerjisini depolayıp ihtiyaca göre dağıtan sistemler." }
          ]
        },
        {
          title: "Geleceğin Bilişim Meslekleri",
          icon: "💼",
          borderClass: "card-accent-border",
          desc: "Gelecekte bazı geleneksel meslekler yok olurken yepyeni heyecan verici uzmanlıklar doğuyor.",
          items: [
            { bold: "Yapay Zekâ Mühendisi", text: "Kendi kendine öğrenen akıllı algoritmaları tasarlayan uzmanlar." },
            { bold: "Siber Güvenlik Uzmanı", text: "Kurumları ve kişileri dijital korsanlardan koruyan kalkanlar." },
            { bold: "Büyük Veri Analisti", text: "Milyonlarca veriyi inceleyip kritik kararlar alan stratejistler." },
            { bold: "Nesnelerin İnterneti Mimarı", text: "Milyarlarca akıllı cihazın güvenli ağını kuran mühendisler." }
          ]
        }
      ]
    },
    workshop: {
      title: "2050 Yılında Bir Gün: Geleceği Hayal Et",
      subtitle: "2050 yılındaki bir öğrencinin okul gününü tasarlayalım.",
      steps: [
        { title: "Geleceğin Ulaşımı", desc: "Sabah okula nasıl gidiyorsun? Uçan otonom araç mı, vakumlu hızlı tüp tren mi?" },
        { title: "Geleceğin Sınıfı", desc: "Dersler nasıl işleniyor? Hologram öğretmenler, artırılmış gerçeklik (AR) gözlükleriyle uzayda gezinti mi?" },
        { title: "Geleceğin Mesleği", desc: "Büyüdüğünde hangi yenilikçi mesleği yapmak istersin? Neden?" }
      ],
      criteria: [
        "Teknolojik gelişmeleri mantıklı şekilde birbiriyle ilişkilendirme",
        "Yaratıcı ve geleceğe yönelik özgün fikirler sunma",
        "Teknolojinin insana ve doğaya faydasını gözetme"
      ]
    },
    tips: {
      safetyTitle: "Teknolojinin Toplumsal Etkileri ve Dengesi",
      safetyRules: [
        { bold: "Ekran Bağımlılığına Dikkat", text: "Teknoloji geliştikçe gerçek dünyadan kopmamak ve doğayla bağı korumak şarttır." },
        { bold: "Dijital Ayak İzi", text: "Bugün internette paylaştığınız her şey gelecekteki kariyerinizi etkileyebilir." },
        { bold: "Sürekli Öğrenme", text: "Geleceğin teknolojilerine uyum sağlamak için meraklı ve araştırmacı kalmalısınız." }
      ],
      myths: [
        { wrong: "Robotlar gelecekte tüm insanların işini elinden alacak ve kimse çalışmayacak.", correct: "Rutin ve tehlikeli işleri makineler yapacak; ancak yaratıcılık, empati ve düşünme gerektiren yepyeni meslekler doğacak." },
        { wrong: "Gelecekte kodlama bilmeye gerek kalmayacak.", correct: "Kodlama ve algoritmik düşünme, tıpkı okuma-yazma gibi temel bir problem çözme becerisi olmaya devam edecektir." }
      ]
    },
    quiz: {
      question: "Trafik lambalarının araç sayısını kamerayla sayıp yeşil ışık süresini anlık uzatıp kısaltması hangi şehir yaklaşımına örnektir?",
      options: [
        { text: "A) Sanayi Şehri", isCorrect: false },
        { text: "B) Akıllı Şehir (Smart City)", isCorrect: true },
        { text: "C) Tarihî Şehir", isCorrect: false },
        { text: "D) Tarım Köyü", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Şehirdeki altyapının veriler ve sensörler ile otomatik yönetilmesi Akıllı Şehir konseptinin temelidir."
    },
    summaryRules: [
      { bold: "Hızlı Değişim", text: "Bilişim teknolojileri her geçen yıl katlanarak daha hızlı ve güçlü hâle gelmektedir." },
      { bold: "Yeni Beceriler", text: "Geleceğin mesleklerinde başarılı olmak için problem çözme ve dijital okuryazarlık esastır." },
      { bold: "İnsan Odaklılık", text: "Teknoloji bir amaç değil, insan hayatını güzelleştiren ve kolaylaştıran bir araçtır." }
    ],
    homework: "Ailenizden bir büyüğünüze çocukluğunda bilgisayar, internet veya cep telefonu olup olmadığını sorun ve bugünküyle karşılaştırın.",
    nextWeekPreview: "Dijital Ürün Tasarımına Geçiş: Tablolama Programlarına Giriş (Excel / E-Tablolar)"
  },

  // 3. HAFTA
  {
    week: 3,
    date: "28 Eylül - 04 Ekim",
    hours: "2 Saat",
    unit: "2. Ünite: Dijital Ürün Tasarım ve Geliştirme",
    unitBadge: "2. Ünite",
    unitTheme: "unite-2",
    title: "Tablolama Programlarına Giriş",
    subtitle: "Hücreler, Satırlar, Sütunlar ve Tablolama Programlarının Arayüzü",
    outcomeCode: "BTY.6.2.1",
    targetSkill: "Veri Düzenleme & Arayüz Kullanımı",
    curiosityQuestion: "Binlerce öğrencinin notlarını, boylarını ve okul numaralarını dakikalar içinde sıralayıp ortalamasını alan sihirli yazılım nedir?",
    roadmap: [
      { title: "Tablolama Programı Nedir?", desc: "Hesaplama, analiz ve grafik oluşturma amacıyla kullanılan programlar." },
      { title: "Popüler Programlar", desc: "Microsoft Excel, Google E-Tablolar (Sheets) ve LibreOffice Calc." },
      { title: "Temel Anatomisi", desc: "Çalışma kitabı, çalışma sayfası, satır, sütun ve hücre adresi." },
      { title: "Veri Türleri", desc: "Metin (sol hizalı), Sayı (sağ hizalı) ve Tarih formatları." }
    ],
    section1: {
      title: "Tablolama Programının Temel Yapı Taşları",
      subtitle: "Satırlar, sütunlar ve kesiştikleri büyülü kutucuklar: Hücreler.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Sütun (Column)",
          icon: "⬇️",
          borderClass: "card-primary-border",
          desc: "Tablodaki dikey alanlardır. Harflerle (A, B, C... Z, AA...) adlandırılır.",
          items: [
            { bold: "Yön", text: "Yukarıdan aşağıya doğru uzanır." },
            { bold: "Adlandırma", text: "A sütunu, B sütunu, C sütunu..." }
          ]
        },
        {
          title: "Satır (Row)",
          icon: "➡️",
          borderClass: "card-accent-border",
          desc: "Tablodaki yatay alanlardır. Sayılarla (1, 2, 3, 4...) adlandırılır.",
          items: [
            { bold: "Yön", text: "Soldan sağa doğru uzanır." },
            { bold: "Adlandırma", text: "1. satır, 2. satır, 3. satır..." }
          ]
        },
        {
          title: "Hücre (Cell)",
          icon: "🟩",
          borderClass: "card-success-border",
          desc: "Bir satır ile bir sütunun kesiştiği her bir kutucuğa hücre denir.",
          items: [
            { bold: "Hücre Adresi", text: "Önce sütun harfi, sonra satır sayısı yazılır (Örn: A1, B5, C12)." },
            { bold: "Aktif Hücre", text: "O anda etrafı koyu çizgiyle seçili olan hücredir." }
          ]
        }
      ]
    },
    section2: {
      title: "Arayüz Bileşenleri ve Veri Türleri",
      subtitle: "Formül çubuğundan ad kutusuna, metinlerden sayılara kadar her şey.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Arayüzün Kritik Bölümleri",
          icon: "🖥️",
          borderClass: "card-primary-border",
          desc: "Programı kullanırken en çok bakacağımız iki temel panel:",
          items: [
            { bold: "Ad Kutusu (Name Box)", text: "O anda hangi hücrede olduğunuzu gösterir (Örn: A1 kutusu)." },
            { bold: "Formül Çubuğu (fx)", text: "Hücreye yazılan metinleri, sayıları veya hesaplama formüllerini gösterir ve düzenler." },
            { bold: "Sayfa Sekmeleri", text: "Altta yer alan Sayfa1, Sayfa2 gibi çalışma sayfaları arasında geçiş sağlar." }
          ]
        },
        {
          title: "Hücredeki Veri Türleri",
          icon: "🔤",
          borderClass: "card-success-border",
          desc: "Tablolama programı girdiğiniz veriyi otomatik algılar:",
          items: [
            { bold: "Metin Verisi (Metinsel)", text: "İsimler, kelimeler. Varsayılan olarak hücrenin SOLUNA hizalanır." },
            { bold: "Sayı Verisi (Sayısal)", text: "Fiyatlar, yaşlar, notlar. Varsayılan olarak hücrenin SAĞINA hizalanır." },
            { bold: "Tarih / Saat", text: "04.10.2026 gibi zaman belirten özel veri türleridir." }
          ]
        }
      ]
    },
    workshop: {
      title: "İlk Tablomuzu Oluşturuyoruz: Sınıf Kitaplığı",
      subtitle: "Bir tablolama programı açarak kitap listesi hazırlayalım.",
      steps: [
        { title: "Başlıkları Yaz", desc: "A1 hücresine 'Kitap Adı', B1 hücresine 'Yazar', C1 hücresine 'Sayfa Sayısı' yazın." },
        { title: "Verileri Doldur", desc: "A2'den itibaren sevdiğiniz 3 kitabın bilgilerini satır satır alt alta girin." },
        { title: "Biçimlendirme Yap", desc: "Başlık satırını (1. satır) kalın (bold) yapın, arka planını açık yeşille renklendirin." }
      ],
      criteria: [
        "Hücre adreslerini doğru tanıma ve veri girme",
        "Sayıların sağa, metinlerin sola hizalandığını gözlemleme",
        "Dosyayı 'Kitaplik.xlsx' olarak kaydetme"
      ]
    },
    tips: {
      safetyTitle: "Tablolama Püf Noktaları",
      safetyRules: [
        { bold: "Otomatik Tamamlama (Kulp)", text: "Hücrenin sağ alt köşesindeki minik siyah kareyi (doldurma kulpu) aşağı sürükleyerek 1, 2, 3... veya Pazartesi, Salı... serilerini anında doldurabilirsiniz." },
        { bold: "Sütun Genişletme", text: "Eğer hücrede '###' işareti görürseniz panik yapmayın! Sütun dar gelmiştir, sütun başlığını sağa çekip genişletin." }
      ],
      myths: [
        { wrong: "Hücre adresi yazılırken önce sayı, sonra harf söylenir (3B gibi).", correct: "Her zaman önce sütun harfi, sonra satır numarası söylenir (B3 gibi)." },
        { wrong: "Tablolama programı sadece matematik öğretmenleri içindir.", correct: "Doktorlar, mühendisler, bakkallar ve öğrenciler de planlama için her gün tablolama kullanır." }
      ]
    },
    quiz: {
      question: "Tablolama programında 'C' sütunu ile '5' numaralı satırın kesiştiği hücrenin adresi hangisidir?",
      options: [
        { text: "A) 5C", isCorrect: false },
        { text: "B) C5", isCorrect: true },
        { text: "C) C-5", isCorrect: false },
        { text: "D) 5-C", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Hücre adresi daima önce sütun harfi (C) sonra satır rakamı (5) şeklinde 'C5' olarak ifade edilir."
    },
    summaryRules: [
      { bold: "Sütunlar Harfle, Satırlar Sayıyla", text: "A, B, C dikey sütunlar; 1, 2, 3 yatay satırlardır." },
      { bold: "Hücre = Kesişim", text: "Her hücrenin benzersiz bir adresi vardır (A1, B3 vb.)." },
      { bold: "Düzenli Veri", text: "Başlıkları en üst satıra yazmak verilerin kolay anlaşılmasını sağlar." }
    ],
    homework: "Haftalık ders programınızı bir tablolama programında (Pazartesi-Cuma sütunları, 1-7 ders saatleri) tasarlayın.",
    nextWeekPreview: "Tablolamada Formüller ve Grafikler: =TOPLA, =ORTALAMA ile otomatik hesaplamalar!"
  },

  // 4. HAFTA
  {
    week: 4,
    date: "05 - 11 Ekim",
    hours: "2 Saat",
    unit: "2. Ünite: Dijital Ürün Tasarım ve Geliştirme",
    unitBadge: "2. Ünite",
    unitTheme: "unite-2",
    title: "Tablolama ile Veri Analizi ve Grafikler",
    subtitle: "Formüller, Fonksiyonlar (=TOPLA, =ORTALAMA) ve Veriyi Görselleştirme",
    outcomeCode: "BTY.6.2.2 - 6.2.4",
    targetSkill: "Veri Analizi, Hesaplama ve Grafik Çizme",
    curiosityQuestion: "1000 sayıyı kağıt kalemle toplamak saatler sürerken, Excel bunu saniyenin binde birinde nasıl hatasız hesaplar?",
    roadmap: [
      { title: "Formülün Altın Kuralı", desc: "Tüm formüllerin mutlaka eşittir (=) işareti ile başlaması." },
      { title: "Temel Fonksiyonlar", desc: "=TOPLA, =ORTALAMA, =MAK (En büyük), =MİN (En küçük)." },
      { title: "Veri Sıralama ve Filtre", desc: "A'dan Z'ye veya büyükten küçüğe verileri düzenleme." },
      { title: "Grafik Oluşturma", desc: "Sütun, Çizgi ve Pasta grafikleri ile veriyi görsel şölene dönüştürme." }
    ],
    section1: {
      title: "Formüller ve Sihirli Fonksiyonlar",
      subtitle: "Bilgisayara matematiksel işlem yaptırmanın kuralları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Formülün Altın Kuralı: (=)",
          icon: "🧮",
          borderClass: "card-primary-border",
          desc: "Bir hücreye '=' koymazsanız program yazdığınızı düz yazı zanneder. '=' koyduğunuz anda hesap makinesine dönüşür!",
          items: [
            { bold: "Basit Toplama", text: "=A1+B1 (A1 ile B1'i toplar)" },
            { bold: "Çarpma İşlemi", text: "=A1*5 (A1'i 5 ile çarpar - yıldız işareti çarpıdır)" },
            { bold: "Bölme İşlemi", text: "=B1/2 (B1'i 2'ye böler - eğik çizgi bölmedir)" }
          ]
        },
        {
          title: "En Çok Kullanılan 4 Fonksiyon",
          icon: "⚡",
          borderClass: "card-success-border",
          desc: "Aralık belirtmek için iki nokta (:) kullanılır (Örn: A1:A5 = A1'den A5'e kadar):",
          items: [
            { bold: "=TOPLA(A1:A10)", text: "A1'den A10'a kadar tüm sayıları toplar." },
            { bold: "=ORTALAMA(B1:B5)", text: "Seçili aralıktaki sayıların aritmetik ortalamasını alır." },
            { bold: "=MAK(C1:C20)", text: "Listedeki en büyük (maksimum) sayıyı bulur." },
            { bold: "=MİN(C1:C20)", text: "Listedeki en küçük (minimum) sayıyı bulur." }
          ]
        }
      ]
    },
    section2: {
      title: "Verileri Görselleştirme: Grafik Türleri",
      subtitle: "Sayıları bir bakışta anlaşılır hâle getiren grafikler.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Sütun Grafiği",
          icon: "📊",
          borderClass: "card-primary-border",
          desc: "Farklı kategorileri ve miktarları birbiriyle karşılaştırmak için en ideal grafiktir.",
          items: [
            { bold: "Örnek", text: "Öğrencilerin sınav notlarını veya aylık harçlıkları kıyaslama." }
          ]
        },
        {
          title: "Pasta Grafiği",
          icon: "🥧",
          borderClass: "card-accent-border",
          desc: "Bir bütünün parçalarını ve yüzdelik oranlarını göstermek için kullanılır.",
          items: [
            { bold: "Örnek", text: "Bir bütçenin harcama dağılımı (Kira, gıda, giyim yüzdeleri)." }
          ]
        },
        {
          title: "Çizgi Grafiği",
          icon: "📈",
          borderClass: "card-purple-border",
          desc: "Zaman içindeki artış ve azalış eğilimlerini (trendleri) takip etmek için kullanılır.",
          items: [
            { bold: "Örnek", text: "Bir haftalık hava sıcaklığı değişimi veya dolar kuru takibi." }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınıfın Harçlık ve Tasarruf Analizi",
      subtitle: "Haftalık harçlık tablosu hazırlayıp grafik oluşturalım.",
      steps: [
        { title: "Verileri Gir", desc: "5 arkadaşınızın Pazartesi'den Cuma'ya yaptığı harcamaları tabloya yazın." },
        { title: "Formül Ekle", desc: "Herkesin toplam harcamasını =TOPLA(...) fonksiyonuyla hesaplatın." },
        { title: "Grafik Ekle", desc: "Tabloyu seçip 'Ekle > Sütun Grafiği'ne tıklayın. Grafiğe başlık verin." }
      ],
      criteria: [
        "Formülü doğru yazma ve '=' işaretini unutmamak",
        "Fonksiyon aralığını doğru seçmek (A2:A6)",
        "Amaca uygun doğru grafik türünü belirlemek"
      ]
    },
    tips: {
      safetyTitle: "İpuçları ve Hata Uyarıları",
      safetyRules: [
        { bold: "Dinamik Güncelleme", text: "Hücredeki bir sayıyı değiştirdiğinizde, ona bağlı tüm formüller ve grafikler anında kendini otomatik günceller!" },
        { bold: "#DEĞER! Hatası", text: "Eğer formül yazdığınız hücrede bu hatayı görürseniz, metin içeren bir hücreyle toplama işlemi yapmaya çalışmış olabilirsiniz." }
      ],
      myths: [
        { wrong: "Formüllerde büyük-küçük harf fark eder (=topla ile =TOPLA farklıdır).", correct: "Tablolama programı formül isimlerinde büyük/küçük harf ayrımı yapmaz, ikisi de çalışır." },
        { wrong: "Grafik çizmek için sayılar tek tek grafiğe elle çizilir.", correct: "Tabloyu fareyle seçip 'Grafik Ekle' demek saniyeler içinde grafiği oluşturur." }
      ]
    },
    quiz: {
      question: "B1'den B10'a kadar olan hücrelerdeki sayıların ortalamasını bulmak için hangi formül yazılmalıdır?",
      options: [
        { text: "A) =TOPLA(B1:B10)/10", isCorrect: false },
        { text: "B) =ORTALAMA(B1:B10)", isCorrect: true },
        { text: "C) ORTALAMA(B1;B10)", isCorrect: false },
        { text: "D) =B1+B10/2", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> En kısa ve hatasız yöntem hazır =ORTALAMA(B1:B10) fonksiyonunu kullanmaktır."
    },
    summaryRules: [
      { bold: "Eşittir ile Başla", text: "Tüm matematiksel işlemler ve fonksiyonlar '=' ile başlar." },
      { bold: "İki Nokta (:) Aralıktır", text: "A1:A5 demek A1'den A5'e kadar aradaki tüm hücreleri kapsar." },
      { bold: "Grafik = Kolay Anlama", text: "Karmaşık sayı listeleri grafiklerle saniyeler içinde anlaşılır." }
    ],
    homework: "Ailenizin son 3 aylık elektrik faturası miktarlarını bir tabloya girin ve çizgi grafiğini oluşturun.",
    nextWeekPreview: "Ses Düzenleme Dünyasına Giriş: Audacity, Ses Dalgaları ve Podcast Kurgusu!"
  },

  // 5. HAFTA
  {
    week: 5,
    date: "12 - 18 Ekim",
    hours: "2 Saat",
    unit: "2. Ünite: Dijital Ürün Tasarım ve Geliştirme",
    unitBadge: "2. Ünite",
    unitTheme: "unite-2-ses",
    title: "Ses Düzenleme Programlarına Giriş & Kurgu",
    subtitle: "Dijital Ses, Ses Dalgaları, Audacity Arayüzü ve Podcast Senaryosu",
    outcomeCode: "BTY.6.2.5 - 6.2.6",
    targetSkill: "Dijital Ses İşleme & Senaryo Kurgulama",
    curiosityQuestion: "Filmlerdeki canavar sesleri veya şarkıcılardaki stüdyo sesleri aslında bilgisayarda nasıl işlenir?",
    roadmap: [
      { title: "Dijital Ses Nedir?", desc: "Titreşimlerin bilgisayarda 1 ve 0'lara dönüştürülmesi ve ses dalgaları." },
      { title: "Ses Dosya Formatları", desc: "MP3, WAV, AAC, OGG arasındaki kalite ve boyut farkları." },
      { title: "Audacity ile Tanışma", desc: "Ücretsiz, açık kaynaklı ve güçlü ses düzenleme programı." },
      { title: "Senaryo ve Kurgu", desc: "Podcast veya sesli tiyatro için giriş, gelişme ve müzik planı." }
    ],
    section1: {
      title: "Dijital Ses Dünyası & Dosya Formatları",
      subtitle: "Ses dalgalarının özellikleri ve doğru format seçimi.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Ses Dalgalarının Özellikleri",
          icon: "〰️",
          borderClass: "card-primary-border",
          desc: "Ses havada titreşen dalgalardır. Mikrofondan geçen ses dijital sayılara dönüşür:",
          items: [
            { bold: "Genlik (Şiddet)", text: "Ses dalgasının yüksekliğidir. Dalga ne kadar yüksekse ses o kadar gür çıkar." },
            { bold: "Frekans (Tiz / Bas)", text: "Saniyedeki titreşim sayısıdır. İnce (tiz) veya kalın (pes/bas) sesi belirler." },
            { bold: "Kanal Sayısı", text: "Mono (tek hoparlör/kanal) veya Stereo (sağ ve sol ayrı iki kanal) ses." }
          ]
        },
        {
          title: "Ses Dosyası Formatları",
          icon: "📁",
          borderClass: "card-accent-border",
          desc: "Kullanım amacına göre ses formatı seçimi çok önemlidir:",
          items: [
            { bold: "MP3", text: "En yaygın formattır. Sıkıştırılmıştır, dosya boyutu küçüktür, internette kolay paylaşılır." },
            { bold: "WAV", text: "Sıkıştırılmamış ham stüdyo kalitesidir. Ses çok nettir fakat dosya boyutu büyüktür." },
            { bold: "OGG / AAC", text: "Modern oyunlarda ve dijital yayınlarda kullanılan yüksek verimli formatlar." }
          ]
        }
      ]
    },
    section2: {
      title: "Audacity ile Tanışma & Kurgu Mantığı",
      subtitle: "Çok kanallı ses düzenlemenin püf noktaları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Audacity Programının Yetenekleri",
          icon: "🎙️",
          borderClass: "card-primary-border",
          desc: "Dünyanın en popüler ücretsiz ses işleme programı:",
          items: [
            { bold: "Kayıt Alma", text: "Mikrofondan tek tıkla kırmızı kayıt butonuyla ses kaydetme." },
            { bold: "Kes ve Birleştir", text: "Gereksiz öksürük, duraklama ve 'eee' seslerini makasla kesip atma." },
            { bold: "Çok Kanallı Çalışma", text: "Üst kanala kendi konuşmanızı, alt kanala hafif bir fon müziği koyabilme." }
          ]
        },
        {
          title: "Bir Podcast / Ses Kurgusu Planı",
          icon: "📝",
          borderClass: "card-accent-border",
          desc: "Kayıt düğmesine basmadan önce mutlaka bir kurgu senaryosu hazırlanmalıdır:",
          items: [
            { bold: "1. Giriş (Jingle)", text: "3-5 saniyelik dikkat çekici enerjik bir müzik ve 'Hoş geldiniz' anonsu." },
            { bold: "2. Ana İçerik", text: "Haftanın konusu hakkında samimi, akıcı ve bilgilendirici konuşma." },
            { bold: "3. Kapanış & Çıkış", text: "Dinleyicilere teşekkür, soru sorma ve yavaşça azalan fon müziği." }
          ]
        }
      ]
    },
    workshop: {
      title: "Okul Radyosu İçin 1 Dakikalık Podcast Senaryosu",
      subtitle: "Sınıf arkadaşınızla birlikte mini bir radyo programı tasarlayın.",
      steps: [
        { title: "Program Adını Belirle", desc: "Örn: 'Genç Bilişimciler', 'Teknoloji Avcıları', '6-A'nın Sesi'." },
        { title: "Senaryoyu Yaz", desc: "15 saniyelik giriş, 30 saniyelik ilginç teknoloji haberi, 15 saniyelik kapanış metni oluşturun." },
        { title: "Müzik Planı Yap", desc: "Girişte ve konuşmanın arkasında hangi tempoda müzik çalacağını belirleyin." }
      ],
      criteria: [
        "Metnin anlaşılır, Türkçe kurallarına uygun ve akıcı olması",
        "Zaman planına (toplam 60 saniye) sadık kalınması",
        "Grup üyeleri arasında dengeli rol dağılımı"
      ]
    },
    tips: {
      safetyTitle: "Kayıt Öncesi Kritik Hatırlatmalar",
      safetyRules: [
        { bold: "Mikrofon Mesafesi", text: "Ağzınız mikrofona ne çok yakın (patlama sesleri olur) ne çok uzak (yankı olur) olmalıdır; yaklaşık 15 cm idealdir." },
        { bold: "Sessiz Ortam", text: "Kayıt yaparken pencereyi kapatın, arkadaki televizyon veya fan sesini durdurun." }
      ],
      myths: [
        { wrong: "En iyi ses kaydı sadece 10 bin liralık stüdyo mikrofonlarıyla alınır.", correct: "Doğru mesafe ve sessiz bir odada telefon kulaklığının mikrofonuyla bile harika kayıtlar alınabilir." },
        { wrong: "MP3 dosyası kaydedilince stüdyo projesi de kaydedilmiş olur.", correct: "MP3 sadece dinlemek içindir; projeyi tekrar kanallarıyla düzenlemek için proje dosyasını (.aup3) saklamalısınız." }
      ]
    },
    quiz: {
      question: "Dosya boyutu küçük olduğu için internet üzerinden arkadaşımıza göndermek ve web sitelerine yüklemek için en uygun ses formatı hangisidir?",
      options: [
        { text: "A) WAV", isCorrect: false },
        { text: "B) MP3", isCorrect: true },
        { text: "C) BMP", isCorrect: false },
        { text: "D) EXE", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> MP3 formatı insan kulağının duyamayacağı frekansları sıkıştırarak dosya boyutunu 10 kat küçülttüğü için internette en ideal formattır."
    },
    summaryRules: [
      { bold: "Ses Dalgaları = Bilgi", text: "Genlik sesi yükseltir, frekans sesin inceliğini belirler." },
      { bold: "Format Farkı", text: "WAV yüksek kalite/büyük boyut; MP3 pratik/küçük boyuttur." },
      { bold: "Önce Kurgu", text: "İyi bir ses kaydı, kayda başlamadan önce yazılmış iyi bir senaryoyla başlar." }
    ],
    homework: "Sevdiğiniz bir şarkıyı veya radyo anonsunu dinleyin; konuşma başladığında arka plandaki müziğe ne olduğunu not edin.",
    nextWeekPreview: "Ses Dosyası Geliştirme: Audacity'de ses kesme, gürültü silme ve arka plan müziği miksajı!"
  },

  // 6. HAFTA
  {
    week: 6,
    date: "19 - 25 Ekim",
    hours: "2 Saat",
    unit: "2. Ünite: Dijital Ürün Tasarım ve Geliştirme",
    unitBadge: "2. Ünite",
    unitTheme: "unite-2-ses",
    title: "Ses Dosyası Geliştirme & Efektler",
    subtitle: "Gürültü Engelleme, Kesme, Fade In/Out ve Podcast Dışa Aktarma (Export)",
    outcomeCode: "BTY.6.2.7",
    targetSkill: "Dijital Ses Kurgusu & Efekt Uygulama",
    curiosityQuestion: "Müzik çalarken konuşma başladığında şarkının sesinin otomatik olarak hafifçe kısılmasına ne denir?",
    roadmap: [
      { title: "Hatalı Bölümleri Kesme", desc: "Seçim aracı ile istemediğimiz nefes ve duraksama seslerini silme." },
      { title: "Gürültü Azaltma", desc: "Arka plandaki vantilatör veya klima uğultusunu yok etme (Noise Reduction)." },
      { title: "Ses Efektleri", desc: "Fade In (Giderek artan ses) ve Fade Out (Yavaşça azalan ses)." },
      { title: "Dışa Aktarma (Export)", desc: "Audacity projesini dinlenebilir MP3 dosyasına dönüştürme." }
    ],
    section1: {
      title: "Audacity'de Ses Düzenleme Araçları",
      subtitle: "Profesyonel bir radyo yayını gibi temiz ses elde etmenin yolları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Kesme, Kırpma ve Sessizleştirme",
          icon: "✂️",
          borderClass: "card-primary-border",
          desc: "Ses dalgası üzerindeki istenmeyen kısımları yönetme:",
          items: [
            { bold: "Seçim Aracı (I İmleci)", text: "Fare ile silmek istediğiniz ses bölgesini seçin ve 'Delete' tuşuna basın." },
            { bold: "Bölme (Split)", text: "Ctrl + I ile bir ses kanalını ikiye bölüp araya başka sesler ekleyebilirsiniz." },
            { bold: "Sessizlik Ekleme", text: "Öksürük gibi bölgeleri silmek yerine tamamen sessizleştirebilirsiniz." }
          ]
        },
        {
          title: "Sihirli Efekt: Gürültü Azaltma (Noise Reduction)",
          icon: "🔇",
          borderClass: "card-accent-border",
          desc: "Kayıt arkasındaki dip gürültüyü silmenin 2 adımı:",
          items: [
            { bold: "1. Adım - Gürültü Profilini Al", text: "Kayıtta hiç konuşmadığınız 2 saniyelik boş bölgeyi seçip programa 'İşte istenmeyen ses bu' deyin." },
            { bold: "2. Adım - Temizle", text: "Tüm kaydı seçip gürültü azaltmayı uygulayın; dip tıslamalar sihirli şekilde yok olur!" }
          ]
        }
      ]
    },
    section2: {
      title: "Miksaj & Dışa Aktarma (Export)",
      subtitle: "Vokal ve müziğin dengelenmesi ve MP3 çıktısı alma.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Fade In & Fade Out Efektleri",
          icon: "🎚️",
          borderClass: "card-success-border",
          desc: "Müziklerin aniden pat diye başlamasını ve bitmesini engeller:",
          items: [
            { bold: "Fade In (Giderek Yüksel)", text: "Müziğin başlangıcını seçip uygulayın; ses sıfırdan yavaşça duyulur hâle gelir." },
            { bold: "Fade Out (Giderek Azal)", text: "Şarkının sonunu seçip uygulayın; ses yavaşça kısılarak kaybolur." },
            { bold: "Ses Seviyesi (Gain)", text: "Fon müziğinin ses seviyesini -12 dB civarına indirerek konuşmacının önüne geçmesini önleyin." }
          ]
        },
        {
          title: "Kaydetme ve Dışa Aktarma Farkı",
          icon: "💾",
          borderClass: "card-primary-border",
          desc: "Öğrencilerin en sık karıştırdığı hayati konu:",
          items: [
            { bold: "Projeyi Kaydet (Ctrl+S)", text: ".aup3 uzantılıdır. Sadece Audacity'de açılır, telefonda dinlenemez." },
            { bold: "Dışa Aktar (Export > MP3)", text: "Tüm kanalları tek bir ses dosyası yapar. Telefonda, arabada ve internette dinlenir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Kendi Mini Podcast Projeni Tamamla",
      subtitle: "Kaydettiğin sesi temizle, müzik ekle ve MP3 olarak kaydet.",
      steps: [
        { title: "Sesi Temizle", desc: "Konuşma kaydındaki nefes duraksamalarını sil ve gürültü azaltma uygula." },
        { title: "Fon Müziği Ekle", desc: "'Dosya > İçe Aktar > Ses' diyerek telifsiz fon müziği ekle, Fade In ve Fade Out yap." },
        { title: "MP3 Olarak Çıkar", desc: "'Dosya > Dışa Aktar > MP3 Olarak Dışa Aktar' diyerek 'Benim_Podcastim.mp3' adıyla kaydet." }
      ],
      criteria: [
        "Konuşma sesinin fon müziğinden net şekilde duyulması",
        "Müziğin Fade In ile yumuşak başlayıp Fade Out ile bitmesi",
        "Dosyanın MP3 formatında başarıyla dışa aktarılması"
      ]
    },
    tips: {
      safetyTitle: "Telif Haklarına Dikkat!",
      safetyRules: [
        { bold: "Telifsiz Müzik Kullanın", text: "YouTube Ses Kitaplığı veya Creative Commons lisanslı ücretsiz müzikleri tercih edin." },
        { bold: "Sanatçıya Teşekkür", text: "Podcast açıklamanıza kullandığınız müziğin bestecisinin adını ekleyin." }
      ],
      myths: [
        { wrong: "Sesi kaydettikten sonra 'Kaydet'e basarsam MP3 oluşur.", correct: "Kaydet sadece projeyi saklar. Dinlenebilir ses için mutlaka 'Dışa Aktar (Export)' denmelidir." }
      ]
    },
    quiz: {
      question: "Audacity programında hazırlanan çok kanallı bir ses projesini telefonda dinlenebilecek standart bir ses dosyasına dönüştürmek için hangi menü kullanılır?",
      options: [
        { text: "A) Dosya > Farklı Kaydet", isCorrect: false },
        { text: "B) Dosya > Dışa Aktar (Export) > MP3", isCorrect: true },
        { text: "C) Düzenle > Geri Al", isCorrect: false },
        { text: "D) Görünüm > Yakınlaştır", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Audacity'de projeyi herkesin dinleyebileceği bir ses dosyası yapmak için 'Dışa Aktar (Export)' menüsü kullanılır."
    },
    summaryRules: [
      { bold: "Temiz Ses", text: "Gürültü azaltma ile arka plan uğultuları yok edilir." },
      { bold: "Yumuşak Geçişler", text: "Fade In ve Fade Out profesyonel müzik geçişi sağlar." },
      { bold: "Dışa Aktar = MP3", text: "Paylaşılabilir dosya için 'Dışa Aktar' seçeneği kullanılır." }
    ],
    homework: "Sevdiğiniz bir şiiri telefonunuza kaydedin ve arka plana uygun bir fon müziği seçin.",
    nextWeekPreview: "Görsel Dünyaya Yolculuk: Video Düzenleme Programlarına Giriş ve Storyboard Hazırlama!"
  },

  // 7. HAFTA
  {
    week: 7,
    date: "26 Ekim - 01 Kasım",
    hours: "2 Saat",
    unit: "2. Ünite: Dijital Ürün Tasarım ve Geliştirme",
    unitBadge: "2. Ünite",
    unitTheme: "unite-2-video",
    title: "Video Düzenleme Programlarına Giriş & Kurgu",
    subtitle: "Kare Hızı (FPS), Çözünürlük, Storyboard (Görsel Taslak) ve CapCut/Clipchamp",
    outcomeCode: "BTY.6.2.8 - 6.2.9",
    targetSkill: "Görsel Kurgulama & Video Senaryosu",
    curiosityQuestion: "Videolar aslında arka arkaya çok hızlı gösterilen binlerce fotoğraftan ibaretse, gözümüz bunu nasıl hareketli görür?",
    roadmap: [
      { title: "Video Nasıl Oluşur?", desc: "Kare mantığı, FPS (Kare/saniye) ve gözün algı sınırı." },
      { title: "Çözünürlük Standartları", desc: "720p (HD), 1080p (Full HD) ve 4K (Ultra HD) arasındaki farklar." },
      { title: "Video Düzenleyiciler", desc: "CapCut, Microsoft Clipchamp, OpenShot arayüzleri." },
      { title: "Storyboard (Görsel Taslak)", desc: "Çekim öncesi sahneleri çizerek ve planlayarak kurgulama." }
    ],
    section1: {
      title: "Videonun Temel Prensipleri: FPS ve Çözünürlük",
      subtitle: "Piksellerden kare hızına hareketli görüntünün matematiği.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Kare Hızı: FPS (Frames Per Second)",
          icon: "🎞️",
          borderClass: "card-primary-border",
          desc: "Bir saniyede ekrandan geçen fotoğraf karesi sayısıdır:",
          items: [
            { bold: "24 FPS", text: "Sinema filmlerinin standart hızıdır. Doğal bir hareket hissi verir." },
            { bold: "30 / 60 FPS", text: "YouTube videoları ve bilgisayar oyunları. Hareketler son derece akıcıdır." },
            { bold: "120+ FPS", text: "Ağır çekim (Slow Motion) videolar kaydetmek için kullanılır." }
          ]
        },
        {
          title: "Çözünürlük (Resolution)",
          icon: "📺",
          borderClass: "card-accent-border",
          desc: "Ekrandaki toplam piksel (noktacık) sayısıdır. Piksel arttıkça detay netleşir:",
          items: [
            { bold: "HD (720p)", text: "1280 x 720 piksel. İnternette hızlı yüklenen temel kalite." },
            { bold: "Full HD (1080p)", text: "1920 x 1080 piksel. Günümüzün en popüler video standardı." },
            { bold: "4K UHD (2160p)", text: "3840 x 2160 piksel. Kristal netliğinde sinematik kalite." }
          ]
        }
      ]
    },
    section2: {
      title: "Storyboard: Çekmeden Önce Tasarla",
      subtitle: "Çizgi roman gibi sahneleri kâğıda dökerek zamandan kazanmak.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Storyboard (Görsel Taslak) Nedir?",
          icon: "📋",
          borderClass: "card-purple-border",
          desc: "Videonun sahne sahne, kare kare kâğıt üzerine çizilip altına konuşmaların ve sürelerin yazıldığı plandır.",
          items: [
            { bold: "Görsel Çizim", text: "Kamera ne görecek? Oyuncu nerede duracak?" },
            { bold: "Açı ve Plan", text: "Geniş açı mı, yakın çekim mi?" },
            { bold: "Süre ve Ses", text: "Sahne kaç saniye sürecek ve arkada hangi müzik olacak?" }
          ]
        },
        {
          title: "Neden Storyboard Yaparız?",
          icon: "💡",
          borderClass: "card-success-border",
          desc: "Plan yapmadan çekime başlamak zaman ve emek israfıdır:",
          items: [
            { bold: "Zaman Tasarrufu", text: "Hangi sahnenin çekileceği bellidir, gereksiz çekim yapılmaz." },
            { bold: "Eksiksiz Kurgu", text: "Montaj masasına oturulduğunda hiçbir sahnenin unutulmadığı görülür." }
          ]
        }
      ]
    },
    workshop: {
      title: "29 Ekim Cumhuriyet Bayramı İçin 4 Karelik Storyboard",
      subtitle: "Cumhuriyetimizin kuruluşu için 30 saniyelik bir video tasarlayalım.",
      steps: [
        { title: "1. Kare (Giriş - 5 sn)", desc: "Dalgalanan Türk bayrağı görseli ve etkileyici bir başlangıç müziği." },
        { title: "2. Kare (Gelişme 1 - 10 sn)", desc: "Atatürk ve silah arkadaşlarının fotoğrafı, dış ses: 'Büyük zaferin ardından...'" },
        { title: "3. Kare (Gelişme 2 - 10 sn)", desc: "Cumhuriyetin ilanı ve coşkulu halk görüntüleri, marş sesi yükselir." },
        { title: "4. Kare (Kapanış - 5 sn)", desc: "'29 Ekim Cumhuriyet Bayramımız Kutlu Olsun' yazısı ve okul logosu." }
      ],
      criteria: [
        "Her karenin altına konuşma metni ve süre yazılması",
        "Sahneler arasında mantıklı bir akış olması",
        "29 Ekim ruhunu yansıtan saygılı ve gururlu bir tema"
      ]
    },
    tips: {
      safetyTitle: "Video Çekiminde Önemli İpuçları",
      safetyRules: [
        { bold: "Yatay Çekim (16:9)", text: "Akıllı tahtalar ve bilgisayarlar yataydır. Videolarınızı telefonu YATAY tutarak çekin." },
        { bold: "Işığı Arkana Al", text: "Işık kaynağı (pencere/lamba) kameranın arkasında olmalı, oyuncunun arkasında olursa yüzü karanlık çıkar." }
      ],
      myths: [
        { wrong: "Video düzenleme programı öğrenmek için sinema yönetmeni olmak gerekir.", correct: "CapCut ve Clipchamp gibi programlar sürükle-bırak kolaylığında herkesin kullanabileceği araçlardır." }
      ]
    },
    quiz: {
      question: "Bir videonun sahne sahne çizilerek kamera açıları, konuşmaları ve süreleriyle kâğıda dökülmesine ne ad verilir?",
      options: [
        { text: "A) Storyboard (Görsel Taslak)", isCorrect: true },
        { text: "B) Formül Çubuğu", isCorrect: false },
        { text: "C) Ağ Topolojisi", isCorrect: false },
        { text: "D) Veri Tabanı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Video prodüksiyonunda çekim öncesi sahneleri kare kare planlama işlemine Storyboard (Görsel Taslak) denir."
    },
    summaryRules: [
      { bold: "FPS = Akıcılık", text: "24-60 FPS arasında kare hızı gözümüzün hareketi pürüzsüz görmesini sağlar." },
      { bold: "1080p = Standart", text: "Full HD çözünürlük netlik ve dosya boyutu açısından en dengeli çözümdür." },
      { bold: "Planla, Sonra Çek", text: "İyi bir video kurgusu iyi bir storyboard ile başlar." }
    ],
    homework: "Sevdiğiniz bir çizgi filmin 30 saniyesini izleyin ve kaç farklı kamera açısı/sahne değiştiğini sayın.",
    nextWeekPreview: "Sınav Haftası Tekrarı & Video Dosyası Geliştirme: Zaman Çizelgesi ve Katmanlar!"
  },

  // 8. HAFTA
  {
    week: 8,
    date: "02 - 08 Kasım",
    hours: "2 Saat",
    unit: "SINAV HAFTASI & 2. Ünite: Dijital Ürün Tasarım ve Geliştirme",
    unitBadge: "Sınav & 2. Ünite",
    unitTheme: "unite-2-video",
    title: "1. Dönem 1. Sınav Tekrarı & Video Geliştirme",
    subtitle: "Zaman Çizelgesi (Timeline), Katmanlar, Geçiş Efektleri ve Sınav Hazırlığı",
    outcomeCode: "BTY.6.2.10",
    targetSkill: "Katman Yönetimi, Sınav Başarısı & Video Montajı",
    curiosityQuestion: "Bir videonun altında müzik, köşesinde kanal logosu ve altta altyazı aynı anda nasıl görünür?",
    roadmap: [
      { title: "1. Sınav Konuları Özeti", desc: "Yenilikçi teknolojiler, Excel hücreleri/formülleri ve ses düzenleme." },
      { title: "Zaman Çizelgesi (Timeline)", desc: "Videonun saniye saniye soldan sağa aktığı ana çalışma pisti." },
      { title: "Katman Mantığı (Layers)", desc: "Üst üste binen video, yazı, çıkartma ve ses kanalları." },
      { title: "Geçiş Efektleri (Transitions)", desc: "İki sahne arasında yumuşak erime (dissolve), kayma ve silinme." }
    ],
    section1: {
      title: "1. Dönem 1. Sınav İçin Süper Özet",
      subtitle: "İlk 7 haftanın en kritik sınav soruları ve kavramları.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Yenilikçi Teknolojiler",
          icon: "🚀",
          borderClass: "card-primary-border",
          desc: "IoT cihazların internetle konuşmasıdır. Bulut verileri internette saklar. Yapay zekâ problem çözer.",
          items: [
            { bold: "Kilit Nokta", text: "Akıllı saat IoT'dir, Google Drive Bulut Bilişimdir." }
          ]
        },
        {
          title: "Tablolama (Excel)",
          icon: "📊",
          borderClass: "card-success-border",
          desc: "Sütunlar harf (A), satırlar sayı (1). Formüller mutlaka '=' ile başlar. =TOPLA ve =ORTALAMA.",
          items: [
            { bold: "Kilit Nokta", text: "C sütunu 4. satır kesişimi = C4 hücresidir." }
          ]
        },
        {
          title: "Ses & Video",
          icon: "🎬",
          borderClass: "card-accent-border",
          desc: "Audacity ses düzenler. MP3 küçük boyutludur. FPS saniyedeki karedir. Storyboard görsel taslaktır.",
          items: [
            { bold: "Kilit Nokta", text: "Fade In sesi artırır, Fade Out sesi kısar." }
          ]
        }
      ]
    },
    section2: {
      title: "Video Düzenlemede Katman (Layer) Sistemi",
      subtitle: "Katmanlar sandviç gibidir; üstteki alttakini örter!",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Katman Mantığı Nasıl Çalışır?",
          icon: "🥞",
          borderClass: "card-primary-border",
          desc: "Timeline üzerinde farklı izler bulunur:",
          items: [
            { bold: "3. Katman (En Üst)", text: "Yazılar, Altyazılar ve Kanal Logosu (Şeffaf arka plan)." },
            { bold: "2. Katman (Orta)", text: "Ana Video ve Fotoğraflar." },
            { bold: "1. Katman (Ses Kanalı)", text: "Konuşma sesi, ses efektleri ve fon müziği." }
          ]
        },
        {
          title: "Geçiş Efektleri (Transitions)",
          icon: "✨",
          borderClass: "card-accent-border",
          desc: "İki video klip birbirine bağlanırken kullanılır:",
          items: [
            { bold: "Çapraz Erime (Cross Dissolve)", text: "İlk sahne yavaşça solarak ikinci sahneye dönüşür." },
            { bold: "Kararma (Fade to Black)", text: "Sahne kararır, bölüm bittiğinde sinematik his verir." },
            { bold: "Aşırıya Kaçmayın!", text: "Her 2 saniyede bir dönen geçişler izleyicinin başını döndürür; sade geçişler seçin." }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınav Öncesi Hızlı Yarışma: Bilişim Yıldızları",
      subtitle: "Tahtadaki soruları en hızlı cevaplayan sırayı belirliyoruz.",
      steps: [
        { title: "Soru 1 (Tablolama)", desc: "A1'den A8'e kadar olan sayıların en büyüğünü bulan formülü tahtaya yazın." },
        { title: "Soru 2 (Ses)", desc: "Şarkının pat diye bitmesini engelleyip yavaşça kısılmasını sağlayan efektin adı nedir?" },
        { title: "Soru 3 (Video)", desc: "Video katmanlarında logonun görünmesi için videonun altında mı üstünde mi olmalıdır?" }
      ],
      criteria: [
        "Doğru formül söz dizimi: =MAK(A1:A8)",
        "Doğru ses efekti: Fade Out",
        "Katman kuralı: Logo videonun ÜST katmanında olmalıdır"
      ]
    },
    tips: {
      safetyTitle: "Sınav Başarısı İçin 3 Altın İpucu",
      safetyRules: [
        { bold: "Soruları Dikkatli Oku", text: "'Hangisi değildir?' veya 'Hangisi doğrudur?' köklerine çok dikkat edin." },
        { bold: "Formül Eşittir İşareti", text: "Sınavda formül yazarken '=' işaretini unutmak tam puan kaybettirir!" }
      ],
      myths: [
        { wrong: "Sınavda sadece tanımlar sorulur.", correct: "Bilişim sınavında pratik problem çözme ve durum analizi soruları çoğunluktadır." }
      ]
    },
    quiz: {
      question: "Bir video düzenleme programında ana videonun üzerine logonun görünmesi için logo hangi katmanda yer almalıdır?",
      options: [
        { text: "A) Videonun altındaki katmanda", isCorrect: false },
        { text: "B) Videonun üstündeki katmanda", isCorrect: true },
        { text: "C) Müzik kanalında", isCorrect: false },
        { text: "D) Çöp kutusunda", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Üst katmandaki öğeler alttakilerin üzerinde görünür; bu yüzden yazı ve logolar daima video katmanının üstünde olmalıdır."
    },
    summaryRules: [
      { bold: "Sınav Hazırlığı", text: "Yenilikçi teknolojiler, formüller ve ses/video kavramlarını iyi tekrar edin." },
      { bold: "Katmanlar = Derinlik", text: "Üst katmandaki şeffaf ögeler alttaki videoyu kapatmadan zenginleştirir." },
      { bold: "Sade Geçişler", text: "Gözü yormayan geçiş efektleri videoyu profesyonel gösterir." }
    ],
    homework: "1. Dönem 1. Sınavı için ilk 7 haftanın özet kartlarını tekrar gözden geçirin.",
    nextWeekPreview: "Videoyu Render Alıp Tamamlama & Bilgisayar Ağları ve İletişim Dünyasına Giriş!"
  },

  // 9. HAFTA
  {
    week: 9,
    date: "09 - 15 Kasım",
    hours: "2 Saat",
    unit: "2. Ünite & 3. Ünite: Bilgisayar Ağları ve İletişim",
    unitBadge: "2. & 3. Ünite",
    unitTheme: "unite-3",
    title: "Video Projesi Tamamlama & Bilgisayar Ağları",
    subtitle: "Render/Export Alma, Bilgisayar Ağları (LAN, WAN, İnternet) ve Ağ Cihazları",
    outcomeCode: "BTY.6.2.10 & 6.3.1",
    targetSkill: "Ürün Dışa Aktarma & Ağ Yapısını Kavrama",
    curiosityQuestion: "Evimizdeki bilgisayardan gönderdiğimiz bir mesaj, dünyanın öbür ucundaki sunucuya okyanusların altından geçen kablolarla nasıl bir saniyede ulaşır?",
    roadmap: [
      { title: "Render (Dışa Aktarma)", desc: "Video kurgusunu MP4 formatında tek parça film hâline getirme." },
      { title: "Bilgisayar Ağı Nedir?", desc: "İki veya daha fazla bilgisayarın kaynak paylaşımı için bağlanması." },
      { title: "Ağ Çeşitleri", desc: "Yerel Alan Ağı (LAN), Metropol Ağ (MAN) ve Geniş Alan Ağı (WAN / İnternet)." },
      { title: "Ağ Donanımları", desc: "Modem, Yönlendirici (Router), Dağıtıcı (Switch) ve Ağ Kartı (NIC)." }
    ],
    section1: {
      title: "Video Projesini Dışa Aktarma (Export / Render)",
      subtitle: "Montaj masasında biten videoyu izlenebilir MP4'e dönüştürmek.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Render İşlemi Nedir?",
          icon: "⚙️",
          borderClass: "card-primary-border",
          desc: "Tüm katmanların (videolar, sesler, yazılar, geçişler) bilgisayar işlemcisi tarafından kare kare hesaplanıp tek bir MP4 dosyası yapılmasıdır.",
          items: [
            { bold: "Çözünürlük Seçimi", text: "YouTube ve okul sunumları için 1080p (Full HD) idealdir." },
            { bold: "Kare Hızı", text: "Standart olarak 30 FPS veya 60 FPS seçilir." },
            { bold: "Sabır Gerekir!", text: "Videonun uzunluğuna göre render işlemi birkaç dakika sürebilir." }
          ]
        },
        {
          title: "10 Kasım Atatürk'ü Anma Videosu",
          icon: "🇹🇷",
          borderClass: "card-accent-border",
          desc: "Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ü saygıyla anıyoruz:",
          items: [
            { bold: "Anma Projesi", text: "Atatürk'ün bilime ve gençliğe verdiği önemi anlatan fotoğraflardan oluşan saygı videosu hazırlama." },
            { bold: "Fon Müziği", text: "Duygusal, saygın ve telifsiz bir enstrümantal melodi eşliğinde." }
          ]
        }
      ]
    },
    section2: {
      title: "Bilgisayar Ağları ve Donanımları",
      subtitle: "Dünyayı birbirine bağlayan devasa iletişim otoyolu.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Büyüklüklerine Göre Ağlar",
          icon: "🌐",
          borderClass: "card-primary-border",
          desc: "Kapsadıkları coğrafi alana göre ağ türleri:",
          items: [
            { bold: "LAN (Yerel Alan Ağı)", text: "Ev, okul laboratuvarı veya tek bir bina içindeki bilgisayarların ağıdır." },
            { bold: "WAN (Geniş Alan Ağı)", text: "Şehirler ve ülkeler arası devasa ağdır. En büyük WAN örneği İNTERNET'tir." }
          ]
        },
        {
          title: "Temel Ağ Cihazları",
          icon: "🔌",
          borderClass: "card-success-border",
          desc: "İnternete bağlanmamızı sağlayan donanımlar:",
          items: [
            { bold: "Modem", text: "Dışarıdan gelen telefon/fiber sinyalini bilgisayarın anlayacağı dijital veriye çevirir." },
            { bold: "Yönlendirici (Router)", text: "Gelen veri paketlerinin doğru cihaza (telefon, tablet) gitmesini yönlendirir." },
            { bold: "Dağıtıcı (Switch)", text: "Okul laboratuvarındaki 20 bilgisayarı kablolarla birbirine bağlar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Okul Bilişim Laboratuvarının Ağ Haritasını Çiz",
      subtitle: "Sınıfımızdaki bilgisayarlar internete nasıl bağlanıyor?",
      steps: [
        { title: "Bilgisayarları İncele", desc: "Kasaların arkasındaki mavi/gri ağ kablolarını (Ethernet) bulun." },
        { title: "Dağıtıcıyı (Switch) Bul", desc: "Tüm kabloların toplandığı duvardaki veya panodaki ışıklı kutuyu inceleyin." },
        { title: "Şemayı Çiz", desc: "Kâğıda İnternet Bulutu -> Modem -> Switch -> Öğrenci Bilgisayarları akışını çizin." }
      ],
      criteria: [
        "Ağ cihazlarının doğru sırayla şemalandırılması",
        "LAN ve WAN kavramlarının şema üzerinde gösterilmesi",
        "Grupça okul altyapısını keşfetme"
      ]
    },
    tips: {
      safetyTitle: "Ağ Güvenliği İpuçları",
      safetyRules: [
        { bold: "Şifresiz Wi-Fi Ağlarına Dikkat", text: "Kafelerdeki veya parklardaki şifresiz ortak Wi-Fi ağlarında bankacılık işlemi veya şifre girişi yapmayın." },
        { bold: "Modem Arayüz Şifresi", text: "Modem yönetim panelinin şifresi 'admin' veya '1234' olarak bırakılmamalıdır." }
      ],
      myths: [
        { wrong: "Wi-Fi olunca internet kablosuz gelir, dünyada hiç kablo kalmamıştır.", correct: "Kıtalar ve okyanuslar altında yüz binlerce kilometrelik fiber optik kablolar olmadan internet çalışamaz." }
      ]
    },
    quiz: {
      question: "Okulunuzun bilişim sınıfındaki 25 bilgisayarın birbiriyle kablolu olarak haberleşmesini sağlayan ağ cihazı hangisidir?",
      options: [
        { text: "A) Dağıtıcı (Switch)", isCorrect: true },
        { text: "B) Ekran Kartı", isCorrect: false },
        { text: "C) Tarayıcı", isCorrect: false },
        { text: "D) Hoparlör", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Aynı bina veya laboratuvardaki çok sayıda bilgisayarı birbirine bağlayan ağ donanımına Dağıtıcı (Switch) denir."
    },
    summaryRules: [
      { bold: "Render = Final Video", text: "Tüm montaj işlemleri render ile tek bir MP4 dosyasında birleşir." },
      { bold: "LAN Küçük, WAN Büyük", text: "LAN okul ağı, WAN ise kıtalararası internet ağıdır." },
      { bold: "Modem Çevirir, Switch Dağıtır", text: "Ağ donanımları verilerin doğru adrese ulaşmasını sağlar." }
    ],
    homework: "Evinizdeki modemin üzerindeki ışıkların (Power, DSL, Internet, WLAN) ne anlama geldiğini araştırın.",
    nextWeekPreview: "1. Dönem Ara Tatili: Eğlenceli Bilişim Keşifleri & Kodlama Görevleri!"
  },

  // 10. HAFTA (ARA TATİL)
  {
    week: 10,
    date: "16 - 22 Kasım",
    hours: "Tatil Bülteni",
    unit: "1. DÖNEM ARA TATİLİ",
    unitBadge: "Ara Tatil",
    unitTheme: "unite-1",
    title: "1. Dönem Ara Tatil: Bilişim & Teknoloji Atölyesi",
    subtitle: "İlk 9 Haftanın Büyük Özeti, Eğlenceli Kodlama Oyunları ve Dijital Sağlık",
    outcomeCode: "Tekrar & Pekistirme",
    targetSkill: "Öz Düzenleme & Dijital Yaşam Dengesi",
    curiosityQuestion: "Tatil boyunca ekran başında saatlerce oyun oynamak yerine teknolojiyi eğlenerek üreten tarafta olmaya ne dersiniz?",
    roadmap: [
      { title: "İlk 9 Haftanın Karnesi", desc: "Yenilikçi teknolojiler, Excel tabloları, ses ve video kurgusu özeti." },
      { title: "Eğlenceli Kodlama Görevleri", desc: "Code.org ve Block Games ile tatilde algoritma maceraları." },
      { title: "Dijital Detoks & Sağlık", desc: "20-20-20 kuralı ve doğru oturma ergonomisi." },
      { title: "Tatil Bilişim Meydan Okuması", desc: "Ailene bir tabloyla tatil harcaması veya anı podcasti hazırla!" }
    ],
    section1: {
      title: "Tatilde Keşfedilecek Eğlenceli Bilişim Platformları",
      subtitle: "Hem oynatan hem de kodlama ve tasarım öğreten ücretsiz siteler.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Code.org (Kodlama Saati)",
          icon: "🧩",
          borderClass: "card-primary-border",
          desc: "Minecraft, Star Wars ve Karlar Ülkesi karakterleriyle blok tabanlı kodlama bulmacaları çözün.",
          items: [
            { bold: "Öneri", text: "Klasik Labirent ve Dans Partisi etkinliklerini tamamlayın." }
          ]
        },
        {
          title: "Quick, Draw! (Google AI)",
          icon: "🎨",
          borderClass: "card-purple-border",
          desc: "Siz 20 saniyede çizim yaparken yapay zekânın ne çizdiğinizi tahmin etmeye çalıştığı eğlenceli oyun.",
          items: [
            { bold: "Öneri", text: "Yapay zekânın çizimleri nasıl öğrendiğini bizzat deneyimleyin." }
          ]
        },
        {
          title: "EBA Bilişim Portalı",
          icon: "📚",
          borderClass: "card-success-border",
          desc: "Milli Eğitim Bakanlığı'nın animasyonları, eğitici oyunları ve bilişim testleri.",
          items: [
            { bold: "Öneri", text: "Öğrendiğiniz konuların EBA mini testlerini çözün." }
          ]
        }
      ]
    },
    section2: {
      title: "Dijital Sağlık & Ergonomi: 20-20-20 Kuralı",
      subtitle: "Gözlerimizi, omurgamızı ve zihnimizi koruyarak teknolojiden keyif alma.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "20-20-20 Göz Sağlığı Kuralı",
          icon: "👀",
          borderClass: "card-primary-border",
          desc: "Göz kuruluğu ve baş ağrısını önlemek için uzmanların tavsiyesi:",
          items: [
            { bold: "Her 20 Dakikada Bir", text: "Ekrana bakmaya kısa bir mola verin." },
            { bold: "20 Feet (Yaklaşık 6 Metre)", text: "Uzağa, pencereden dışarıya bakın." },
            { bold: "20 Saniye Boyunca", text: "Gözlerinizi dinlendirin ve birkaç kez kırpın." }
          ]
        },
        {
          title: "Doğru Oturma Duruşu (Ergonomi)",
          icon: "🪑",
          borderClass: "card-accent-border",
          desc: "Bilgisayar başında kambur durmak omurga sağlığını bozar:",
          items: [
            { bold: "Ekran Mesafesi", text: "Göz hizasından biraz aşağıda ve bir kol mesafesi (50-70 cm) uzaklıkta." },
            { bold: "Dik Sırt", text: "Sırtınızı sandalyeye yaslayın, ayaklarınız yere tam basmalı." },
            { bold: "Bilek Desteği", text: "Klavyeyi kullanırken bilekler havada bükülü kalmamalıdır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Tatil Meydan Okuması: Aile Anı Podcasti",
      subtitle: "Tatilde öğrendiğiniz ses kayıt becerilerini ailenizle uygulayın.",
      steps: [
        { title: "Röportaj Yap", desc: "Anne, baba veya kardeşinize 'Çocukken en sevdiğiniz oyun neydi?' diye sorun ve sesini kaydedin." },
        { title: "Giriş ve Fon Müziği Ekle", desc: "Audacity veya telefondaki ses düzenleyici ile başına kendi anonsunuzu ekleyin." },
        { title: "Akşam Dinleyin", desc: "Ailecek oturup 2 dakikalık bu mini aile podcastini hep birlikte dinleyin!" }
      ],
      criteria: [
        "Temiz ve anlaşılır bir ses kaydı alma",
        "Nezaket kurallarına uygun röportaj yapma",
        "Teknolojiyi aile içi iletişimi güçlendirmek için kullanma"
      ]
    },
    tips: {
      safetyTitle: "Tatilde Siber Güvenlik Hatırlatmaları",
      safetyRules: [
        { bold: "Oyunlarda Şifre Paylaşmayın", text: "Hiçbir arkadaşınızla veya sitede 'ücretsiz elmas/kostüm' vaatlerine aldanıp şifrenizi paylaşmayın." },
        { bold: "Ekran Süresi Limiti", text: "Günde 1-1.5 saatten fazla ekran başında kalmamaya özen gösterin; sevdiklerinizle vakit geçirin." }
      ],
      myths: [
        { wrong: "Tatilde bilişim dersi unutulur, tatil sadece hiçbir şey yapmama zamanıdır.", correct: "Teknoloji üretimi hobidir; tatilde sevdiğiniz projeleri yapmak en eğlenceli dinlenme yöntemidir." }
      ]
    },
    quiz: {
      question: "Bilgisayar başında gözlerimizi yorulmaktan korumak için önerilen '20-20-20 Kuralı' neyi ifade eder?",
      options: [
        { text: "A) Günde 20 saat uyumayı", isCorrect: false },
        { text: "B) Her 20 dakikada bir, 20 saniye boyunca en az 20 feet (6 metre) uzağa bakmayı", isCorrect: true },
        { text: "C) 20 dakika oyun oynayıp 20 dakika video izlemeyi", isCorrect: false },
        { text: "D) 20 adet şifre ezberlemeyi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 20-20-20 kuralı ekran başındaki göz kaslarını gevşetmek için dünya çapında uygulanan en etkili ergonomi kuralıdır."
    },
    summaryRules: [
      { bold: "Denge Önemlidir", text: "Teknolojiyle üretin ama açık havada spor ve kitap okumayı ihmal etmeyin." },
      { bold: "Ergonomiye Dikkat", text: "Dik oturun, ekran mesafenizi ve göz sağlığınızı koruyun." },
      { bold: "Geleceğe Hazırlık", text: "Tatil dönüşü internette ileri düzey arama ve siber güvenlik bizi bekliyor!" }
    ],
    homework: "Tatil boyunca yaptığınız en eğlenceli dijital veya açık hava etkinliğini 3 cümleyle günlüğünüze yazın.",
    nextWeekPreview: "İnternette İleri Düzey Arama Teknikleri & E-Posta Adabı (Netiquette)!"
  }
];
