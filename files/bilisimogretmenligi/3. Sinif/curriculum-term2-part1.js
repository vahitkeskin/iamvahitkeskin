/**
 * 3. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem (1. Kısım: Hafta 20 - 30)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART1_GRADE3 = [
  // 20. HAFTA
  {
    week: 20,
    date: "25 - 31 Ocak",
    hours: "2 Ders Saati",
    unit: "Sömestr Tatili Bilişim Bülteni",
    unitBadge: "Sömestr 1. Hafta",
    unitTheme: "tema-4",
    title: "Sömestr 1. Hafta: Bilgisayarsız Kodlama Macera Bülteni",
    subtitle: "Ekran Olmadan Algoritmik Düşünme: İnsan Robot Oyunu, Renkli Yönergeler ve Kareli Kâğıt",
    outcomeCode: "BTY.3.4.0 (Tatil Etkinliği & Bilgisayarsız Kodlama)",
    targetSkill: "Bilgisayarsız Kodlama (Unplugged Coding) ile Problem Çözme Becerisini Pekiştirme",
    curiosityQuestion: "Bilgisayarların hiç olmadığı bir adada mahsur kalsaydınız sadece çakıl taşları ve yön oklarıyla bir arkadaşınıza nasıl mesaj kodlardınız?",
    roadmap: [
      { title: "Bilgisayarsız Kodlama (Unplugged)", desc: "Ekran olmadan zihnimizle ve kağıtla kodlama ilkelerini uygulama." },
      { title: "İnsan Robot Macerası", desc: "Kardeşimize veya ailemize net yönergelerle su bardağını getirtme oyunu." },
      { title: "Kareli Kâğıtta Piksel Çizim", desc: "Sayılar ve oklar kullanarak gizli resmi boyama bulmacası." },
      { title: "Hazine Haritası", desc: "Odanın bir yerine saklanan ipucunu adım adım komutlarla bulma." }
    ],
    section1: {
      title: "Zihnimizin Algoritması: Bilgisayarsız Kodlama",
      subtitle: "Kodlama bilgisayardan önce insanın düşünce tarzında başlar!",
      layout: "split-visual",
      card: {
        title: "İnsan Robot Oyununun 4 Kuralı",
        icon: "🤖",
        desc: "Evde ailenizle oynayabileceğiniz eğlenceli oyun:",
        items: [
          { bold: "1. Robot Kendi Düşünemez", text: "Robot rolündeki kişi sadece duyduğu komutu harfiyen yerine getirir." },
          { bold: "2. Belirsiz Komut Yasaktır", text: "'İleri git' demek yetmez; '3 adım ileri yürü' denilmelidir." },
          { bold: "3. Dönüş Ayrı Bir Komuttur", text: "'Sağa dön' denildiğinde adım atılmaz; sadece vücut 90 derece sağa çevrilir." },
          { bold: "4. Görev Sonu", text: "Hedefe ulaşıldığında 'DUR' komutuyla robot görevi bitirir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Kareli Zemin Izgarası -->
        <g stroke="#334155" stroke-width="1">
          <line x1="50" y1="45" x2="250" y2="45"/>
          <line x1="50" y1="85" x2="250" y2="85"/>
          <line x1="50" y1="125" x2="250" y2="125"/>
          <line x1="50" y1="165" x2="250" y2="165"/>
          <line x1="50" y1="45" x2="50" y2="165"/>
          <line x1="100" y1="45" x2="100" y2="165"/>
          <line x1="150" y1="45" x2="150" y2="165"/>
          <line x1="200" y1="45" x2="200" y2="165"/>
          <line x1="250" y1="45" x2="250" y2="165"/>
        </g>
        <!-- Robot Başlangıç -->
        <rect x="58" y="133" width="34" height="24" rx="4" fill="#6366f1"/>
        <text x="75" y="150" font-size="14" text-anchor="middle">🤖</text>
        <!-- Yol Okları -->
        <path d="M75 133 V65 H175 V105 H225" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 4"/>
        <!-- Hedef Hazine Sandığı -->
        <rect x="208" y="93" width="34" height="24" rx="4" fill="#f59e0b"/>
        <text x="225" y="110" font-size="14" text-anchor="middle">💎</text>
        <!-- Komut Listesi -->
        <rect x="270" y="45" width="120" height="120" rx="8" fill="#1e293b" stroke="#818cf8"/>
        <text x="330" y="65" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">KOD LİSTESİ</text>
        <text x="280" y="85" fill="#f8fafc" font-size="10">1. ↑ 2 Adım İleri</text>
        <text x="280" y="102" fill="#f8fafc" font-size="10">2. ➔ Sağa Dön</text>
        <text x="280" y="119" fill="#f8fafc" font-size="10">3. ↑ 2 Adım İleri</text>
        <text x="280" y="136" fill="#f8fafc" font-size="10">4. ↓ 1 Adım Aşağı</text>
        <text x="280" y="153" fill="#f43f5e" font-size="10" font-weight="bold">5. 💎 Hazineyi Al!</text>
        <text x="210" y="215" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Ekran Yok, Kodlama Var: Unplugged Düşünme!</text>
      </svg>`,
      caption: "Kareli Kâğıtta Yön Oklarıyla Algoritmik Yol Bulma"
    },
    section2: {
      title: "Piksel Boyama Sanatı (Pixel Art)",
      subtitle: "Bilgisayar ekranındaki her resim aslında sayılardan oluşan küçük karelerdir:",
      layout: "cards-2",
      cards: [
        {
          title: "Sayılarla Kodlanan Resim",
          icon: "🎨",
          desc: "Kareli bir kağıda verilen kodlar:",
          items: [
            { bold: "Kod Formatı", text: "'2K, 3B, 2K' ➔ 2 Kırmızı, 3 Beyaz, 2 Kırmızı kare boya demektir." },
            { bold: "Satır Satır Çözüm", text: "Tıpkı yazıcının kağıda satır satır basması gibi resim yavaşça belirir." },
            { bold: "Sürpriz Figür", text: "Tüm satırları doğru boyadığınızda bir kalp, yıldız veya kılıç ortaya çıkar." }
          ]
        },
        {
          title: "Problem Çözme Refleksi",
          icon: "🧩",
          desc: "Bilgisayarsız kodlamanın zihnimize faydaları:",
          items: [
            { bold: "Sabır ve Odaklanma", text: "Hatalı bir kare boyandığında tüm resmin bozulabileceğini görerek dikkatli olmayı öğretir." },
            { bold: "Mekânsal Zekâ", text: "Sağ, sol, yukarı, aşağı yönlerini zihinde canlandırma gücünü artırır." },
            { bold: "Algoritmik Zihin", text: "Karışık işleri adım adım sıraya koyma becerisi kazandırır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kareli Kâğıtta Piksel Avı'",
      subtitle: "Renkli kalemlerimizle verilen şifreli kodları kareli kağıda uygulayıp resmi buluyoruz.",
      steps: [
        { title: "Izgarayı Hazırla", desc: "Defterinize 10x10 karelik bir alan çizin." },
        { title: "Kodları Sırayla Takip Et", desc: "Öğretmenin tahtaya yazdığı renk ve sayı kodlarını satır satır boyayın." },
        { title: "Gizli Resmi Keşfet", desc: "Ortaya çıkan Türk Bayrağı veya roket figürünü gururla gösterin." }
      ],
      criteria: [
        "Verilen yönergeleri ve yön oklarını eksiksiz takip edebilme",
        "Piksel mantığıyla sayıları renklere dönüştürebilme",
        "Ekran olmadan da algoritmik düşünebilme refleksini sergileme"
      ]
    },
    tips: {
      safetyTitle: "Tatil Bilişimcisi Tavsiyeleri",
      safetyRules: [
        { bold: "Ailenle Birlikte Oyna", text: "İnsan robot oyununu anne, baba veya kardeşinizle oynayarak eğlenceyi paylaşın." },
        { bold: "Hata Yaparsan Pes Etme", text: "Piksel boyamada yanlış kutuyu boyadıysan silgiyle düzelt ve devam et." },
        { bold: "Kendi Labirentini Çiz", text: "Kareli kağıda kendi labirentini çizip arkadaşına çözdürmeyi dene." }
      ],
      myths: [
        { wrong: "Kodlama öğrenmek için mutlaka pahalı bir bilgisayara ihtiyaç vardır.", correct: "Hayır! Kodlamanın temeli olan 'algoritmik düşünme', kağıt, kalem, legolar ve zekâ oyunlarıyla ekran olmadan da mükemmel öğrenilebilir." }
      ]
    },
    quiz: {
      question: "Ekran veya bilgisayar kullanmadan; kağıt, kalem, yön okları ve oyunlarla kodlama mantığını öğrenmeye ne ad verilir?",
      options: [
        { text: "A) İnternet Araması", isCorrect: false },
        { text: "B) Bilgisayarsız Kodlama (Unplugged Coding)", isCorrect: true },
        { text: "C) Donanım Formatlama", isCorrect: false },
        { text: "D) Dosya Sıkıştırma", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Bilgisayarsız Kodlama' (Unplugged Coding), ekran bağımlılığı olmadan zihinsel mantık ve problem çözme becerisi geliştiren harika bir yöntemdir."
    },
    summaryRules: [
      { bold: "Algoritma Zihindedir", text: "Bilgisayar olmadan da düşünceyle kodlama yapılır." },
      { bold: "Piksel Boyama", text: "Dijital görsellerin temel yapı taşını öğretir." },
      { bold: "Tatil Eğlencesi", text: "Aileyle oynanan mantık oyunları zihnimizi açar." }
    ],
    homework: "Kareli bir kağıda kendi adınızın baş harfini piksel kareleriyle kodlayıp boyayın.",
    nextWeekPreview: "Sömestr 2. Hafta: Akıl Oyunları ve Dijital Bulmacalar (Sudoku, Kakuro ve Mantık Şifreleri)!"
  },

  // 21. HAFTA
  {
    week: 21,
    date: "01 - 07 Şubat",
    hours: "2 Ders Saati",
    unit: "Sömestr Tatili Bilişim Bülteni",
    unitBadge: "Sömestr 2. Hafta",
    unitTheme: "tema-4",
    title: "Sömestr 2. Hafta: Zekâ Oyunları ve Mantık Bulmacaları",
    subtitle: "Sudoku, Tangram, Kakuro, Örüntü Tamamlama ve Problem Çözme Egzersizleri",
    outcomeCode: "BTY.3.4.0 (Akıl Oyunları & Mantıksal Muhakeme)",
    targetSkill: "Mantıksal Çıkarım Yapma, Parça-Bütün İlişkisi Kurma ve Strateji Geliştirme",
    curiosityQuestion: "Japonların ünlü zeka bulmacası Sudoku'da hiçbir matematik işlemi (toplama, çıkarma) yapılmadığı halde sayılar nasıl zihnimizi bir sporcu gibi çalıştırır?",
    roadmap: [
      { title: "Akıl Oyunları Dünyası", desc: "Zihnimizi dinç tutan, hafızayı ve konsantrasyonu güçlendiren bulmacalar." },
      { title: "Mini Sudoku (4x4 ve 6x6)", desc: "Her satırda, sütunda ve kutuda sayıları tekrarsız dizme kuralı." },
      { title: "Tangram Geometrisi", desc: "7 geometrik parça ile binlerce figür (kedi, kuş, roket) tasarlama." },
      { title: "Şifre Kırma (Kripto)", desc: "Her harfin bir sembolle eşleştiği gizli casus mesajını çözme." }
    ],
    section1: {
      title: "Zihnin Jimnastiği: Sudoku ve Mantık Kuralları",
      subtitle: "Sudoku sayılarla oynanan bir mantık oyunudur; toplama yapılmaz, olasılıklar elenir:",
      layout: "split-visual",
      card: {
        title: "4x4 Sudokunun 3 Altın Kuralı",
        icon: "🔢",
        desc: "Boş kareleri 1, 2, 3, 4 sayılarıyla doldururken:",
        items: [
          { bold: "1. Satır Kuralı", text: "Soldan sağa her satırda 1, 2, 3, 4 sayıları birer kez bulunmalıdır." },
          { bold: "2. Sütun Kuralı", text: "Yukarıdan aşağıya her sütunda sayılar asla tekrar etmemelidir." },
          { bold: "3. 2x2 Kutu Kuralı", text: "Kalın çizgili 4'lü kutularda da her sayıdan sadece 1 adet olmalıdır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Sudoku 4x4 Izgara -->
        <rect x="50" y="45" width="160" height="160" rx="6" fill="#1e293b" stroke="#818cf8" stroke-width="3"/>
        <!-- Kalın Kutu Çizgileri -->
        <line x1="130" y1="45" x2="130" y2="205" stroke="#f43f5e" stroke-width="3"/>
        <line x1="50" y1="125" x2="210" y2="125" stroke="#f43f5e" stroke-width="3"/>
        <!-- İnce Çizgiler -->
        <line x1="90" y1="45" x2="90" y2="205" stroke="#475569" stroke-width="1.5"/>
        <line x1="170" y1="45" x2="170" y2="205" stroke="#475569" stroke-width="1.5"/>
        <line x1="50" y1="85" x2="210" y2="85" stroke="#475569" stroke-width="1.5"/>
        <line x1="50" y1="165" x2="210" y2="165" stroke="#475569" stroke-width="1.5"/>
        <!-- Sayılar -->
        <text x="70" y="72" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">1</text>
        <text x="110" y="72" fill="#38bdf8" font-size="18" font-weight="900" text-anchor="middle">2</text>
        <text x="150" y="72" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">3</text>
        <text x="190" y="72" fill="#fde68a" font-size="18" font-weight="900" text-anchor="middle">?</text>
        <text x="70" y="112" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">3</text>
        <text x="110" y="112" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">4</text>
        <text x="150" y="112" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">1</text>
        <text x="190" y="112" fill="#fff" font-size="18" font-weight="bold" text-anchor="middle">2</text>
        <!-- Tangram ve Şifre Kartı -->
        <rect x="235" y="45" width="155" height="160" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
        <text x="312" y="70" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">TANGRAM & ŞİFRE</text>
        <polygon points="260,110 310,110 285,85" fill="#f59e0b"/>
        <polygon points="310,110 360,110 335,135" fill="#10b981"/>
        <rect x="285" y="110" width="25" height="25" fill="#6366f1"/>
        <text x="312" y="170" fill="#cbd5e1" font-size="10" text-anchor="middle">7 Geometrik Parça</text>
        <text x="312" y="190" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Soru İşareti = 4 !</text>
      </svg>`,
      caption: "4x4 Sudoku Çözüm Mantığı ve Tangram Figürleri"
    },
    section2: {
      title: "Gizli Casus Şifreleri (Kriptoloji)",
      subtitle: "Tarihin en eski bilişim bilimi: Mesajları şifreleme ve çözme:",
      layout: "cards-2",
      cards: [
        {
          title: "Sezar Şifrelemesi",
          icon: "🏛️",
          desc: "Roma İmparatoru Jül Sezar'ın gizli yöntemi:",
          items: [
            { bold: "Harf Kaydırma", text: "Her harf alfabede 3 adım sonrasıyla değiştirilir (A ➔ D, B ➔ E)." },
            { bold: "Şifre Çözücü", text: "Şifreyi sadece alfabeyi 3 adım geri kaydırmayı bilen kişi okuyabilir." },
            { bold: "Modern Şifrelerin Temeli", text: "Bugün internet bankacılığı ve şifrelerimiz bu mantığın milyarlarca kat güçlüsüyle korunur." }
          ]
        },
        {
          title: "Örüntü ve Sıralama Zekâsı",
          icon: "🔍",
          desc: "Sıradaki şekil veya sayı hangisi?",
          items: [
            { bold: "Kuralı Bul", text: "2, 4, 8, 16... diziliminde her sayı kendisinin iki katı olmaktadır." },
            { bold: "Görsel Örüntü", text: "Daire, Üçgen, Kare, Daire, Üçgen... sıradaki şekil Karedir!" },
            { bold: "Yazılımcı Zihni", text: "Örüntüleri keşfeden çocuklar bilgisayar kodlarındaki tekrarları çok kolay çözer." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Gizli Ajan Şifre Çözümü'",
      subtitle: "Tahtada şifrelenmiş olarak verilen 3 kelimelik gizli bilişim mesajını çözüyoruz.",
      steps: [
        { title: "Şifre Tablosunu İncele", desc: "Hangi sayının hangi harfe denk geldiğini gösteren şifre anahtarına bakın." },
        { title: "Harfleri Birleştir", desc: "'2-9-12-9-19-9-13' sayılarının karşılığı olan 'BİLİŞİM' kelimesini bulun." },
        { title: "Kendi Şifreni Yaz", desc: "Arkadaşına çözmesi için kendi adını şifreli sayılarla yazıp kağıdı ona ver." }
      ],
      criteria: [
        "Sudoku kurallarını eksiksiz anlayıp doğru sayıyı yerleştirebilme",
        "Basit şifreleme anahtarlarını kullanarak kod çözebilme",
        "Mantıksal akıl yürütme becerisini problem üzerinde sergileme"
      ]
    },
    tips: {
      safetyTitle: "Zekâ Ustası Öğütleri",
      safetyRules: [
        { bold: "Tahmin Etme, Emin Ol", text: "Sudoku'da 'galiba buraya 2 gelir' diye rastgele sayı yazmayın; satır ve sütunu kontrol edip kanıtlayın." },
        { bold: "İpuçlarından Başla", text: "En çok sayısı dolu olan satır veya sütun en kolay çözülendir; oradan başlayın." },
        { bold: "Zihnini Esnet", text: "Günde 1 Sudoku veya mantık bulmacası çözmek matematik başarınızı ikiye katlar." }
      ],
      myths: [
        { wrong: "Sudoku çözmek için matematikte dahi olmak ve devasa sayıları çarpmak gerekir.", correct: "Hayır! Sudoku'da hiçbir matematik işlemi yoktur. Sayılar yerine elma, armut, muz resimleri de koysanız oyunun mantığı tamamen aynıdır." }
      ]
    },
    quiz: {
      question: "4x4 boyutundaki bir Sudoku bulmacasında, birinci satırda '1, 2, 3' sayıları yer alıyorsa, satırın sonundaki boş kutuya HANGİ SAYI gelmelidir?",
      options: [
        { text: "A) 1", isCorrect: false },
        { text: "B) 4", isCorrect: true },
        { text: "C) 5", isCorrect: false },
        { text: "D) 0", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 4x4 Sudoku'da her satırda 1, 2, 3 ve 4 sayıları birer kez bulunmalıdır; eksik olan tek sayı 4'tür!"
    },
    summaryRules: [
      { bold: "Sudoku", text: "Sayılara değil, mantığa ve elenen olasılıklara dayanır." },
      { bold: "Şifreleme", text: "Bilgiyi korumanın ve aktarmanın gizemli sanatıdır." },
      { bold: "2. Dönem Başlıyor", text: "Haftaya okullar açılıyor; problem çözme ve algoritma adımları başlıyor!" }
    ],
    homework: "Gazeteden veya internetten bir 4x4 veya 6x6 Sudoku bulmacası kesip çözün ve dosyanıza koyun.",
    nextWeekPreview: "Problem Çözme Adımları: Problemi Anlama, Parçalara Ayırma (Ayrıştırma) ve Algoritma!"
  },

  // 22. HAFTA
  {
    week: 22,
    date: "08 - 14 Şubat",
    hours: "2 Ders Saati",
    unit: "4. Tema: Problem Çözme, Akış Şemaları ve Algoritmik Tasarım",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Problem Çözme ve Parçalara Ayırma (Ayrıştırma)",
    subtitle: "Büyük Problemleri Küçük Lokmalara Bölme, Örüntü Tanıma ve Adım Adım Strateji",
    outcomeCode: "BTY.3.4.1 (Problem Çözme & Ayrıştırma)",
    targetSkill: "Karmaşık Problemleri Alt Parçalara Ayırma (Decomposition) ve Sıralı Strateji Geliştirme",
    curiosityQuestion: "Koskoca bir fili tek lokmada yiyebilir miyiz? Peki ya devasa bir bilgisayar oyununu tek bir günde yazabilir miyiz?",
    roadmap: [
      { title: "Problem Nedir?", desc: "Hedefimize ulaşmamızı engelleyen, çözülmeyi bekleyen her durum." },
      { title: "Parçalara Ayırma (Ayrıştırma)", desc: "Dev bir işi küçük, kolay yönetilebilir parçalara bölme sanatı." },
      { title: "Örüntü Tanıma (Pattern Recognition)", desc: "Daha önce çözdüğümüz benzer durumlarla benzerlik kurma." },
      { title: "Plan Yapma (Algoritma)", desc: "Parçaları doğru mantık sırasına dizerek hedefe varma." }
    ],
    section1: {
      title: "Büyük Sorunları Lokmalara Bölmek: Ayrıştırma",
      subtitle: "Bütün mühendisler ve yazılımcılar karmaşık projeleri önce parçalayarak fetheder:",
      layout: "split-visual",
      card: {
        title: "Oda Toplama Problemi",
        icon: "🧩",
        desc: "Devasa dağınık bir odayı toplarken:",
        items: [
          { bold: "Hatalı Yaklaşım", text: "'Oda çok dağınık, nereden başlayacağımı bilmiyorum!' deyip pes etmek." },
          { bold: "Ayrıştırma Yöntemi", text: "İşi 3 küçük parçaya böl: 1. Kitapları rafa diz, 2. Kıyafetleri dolaba as, 3. Oyuncakları kutuya koy." },
          { bold: "Sonuç", text: "Her küçük parça 5 dakikada biter ve koskoca oda pırıl pırıl olur!" }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Büyük Problem (Merkez) -->
        <rect x="150" y="45" width="120" height="45" rx="10" fill="#f43f5e" stroke="#fb7185" stroke-width="2"/>
        <text x="210" y="72" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle">BÜYÜK PROBLEM</text>
        <!-- 3 Parçaya Ayrılma Okları -->
        <path d="M170 90 L100 130" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M210 90 V130" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 4"/>
        <path d="M250 90 L320 130" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 4"/>
        <!-- Küçük Parça 1 -->
        <rect x="40" y="130" width="105" height="50" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="92" y="152" fill="#22d3ee" font-size="10" font-weight="bold" text-anchor="middle">1. Parça</text>
        <text x="92" y="168" fill="#cbd5e1" font-size="9" text-anchor="middle">Karakteri Çiz</text>
        <!-- Küçük Parça 2 -->
        <rect x="157" y="130" width="105" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="210" y="152" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">2. Parça</text>
        <text x="210" y="168" fill="#cbd5e1" font-size="9" text-anchor="middle">Zıplama Kodları</text>
        <!-- Küçük Parça 3 -->
        <rect x="275" y="130" width="105" height="50" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="327" y="152" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">3. Parça</text>
        <text x="327" y="168" fill="#cbd5e1" font-size="9" text-anchor="middle">Puan Tablosu</text>
        <text x="210" y="215" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Parçala ➔ Çöz ➔ Birleştir!</text>
      </svg>`,
      caption: "Büyük Problemleri Küçük Parçalara Ayırma (Decomposition)"
    },
    section2: {
      title: "Problem Çözmenin 4 Evrensel Basamağı",
      subtitle: "Bütün bilim insanlarının takip ettiği meşhur Polya Stratejisi:",
      layout: "cards-2",
      cards: [
        {
          title: "1. ve 2. Adım: Anla ve Planla",
          icon: "💡",
          desc: "Harekete geçmeden önce zihinde kurma:",
          items: [
            { bold: "1. Problemi Anla", text: "Elimizde ne var? Ne eksik? Ulaşmak istediğimiz kesin hedef neresi?" },
            { bold: "2. Plan Yap (Algoritma)", text: "Hedefe hangi sırayla yürüyeceğiz? Önce hangi adım atılacak?" },
            { bold: "Önemli Kural", text: "Sorunu tam anlamadan çözüme başlarsanız zaman kaybedersiniz." }
          ]
        },
        {
          title: "3. ve 4. Adım: Uygula ve Kontrol Et",
          icon: "⚙️",
          desc: "Planı gerçeğe dönüştürme:",
          items: [
            { bold: "3. Planı Uygula", text: "Hazırladığın adımları sabırla ve dikkatlice teker teker gerçekleştir." },
            { bold: "4. Geriye Dönüp Kontrol Et", text: "Hedefe ulaştık mı? Çözüm doğru çalışıyor mu? Daha kısa bir yol var mıydı?" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Oyun Tasarımı Ayrıştırma'",
      subtitle: "Bir 'Labirentten Kaçış Oyunu' projesini 4 alt göreve bölüp planlıyoruz.",
      steps: [
        { title: "Projeyi İncele", desc: "Tahtadaki oyun videosunu izleyip oyunda neler olduğunu listeleyin." },
        { title: "4 Parçaya Ayır", desc: "Labirent duvarları, oyuncu karakteri, düşman ve çıkış kapısı görevlerini yazın." },
        { title: "Sıralama Yap", desc: "Hangisini ilk önce kodlamalıyız? Mantıklı sırayı belirleyin." }
      ],
      criteria: [
        "Karmaşık bir görevi en az 3 bağımsız alt parçaya ayırabilme",
        "Problem çözmenin 4 basamağını doğru sırayla ifade edebilme",
        "Planlı çalışmanın projeyi hızlandırdığını fark edebilme"
      ]
    },
    tips: {
      safetyTitle: "Problem Çözücü Öğütleri",
      safetyRules: [
        { bold: "Gözünde Büyütme", text: "Çok zor görünen ödevler ve projeler parçalara bölündüğünde çocuk oyuncağına dönüşür." },
        { bold: "Kağıt Kalem Kullan", text: "Problemi çözmeye başlamadan önce taslağını mutlaka bir kağıda çizin." },
        { bold: "Hata Yapınca Sevin", text: "Hatalar bize hangi yolun çalışmadığını gösteren en iyi öğretmenlerdir." }
      ],
      myths: [
        { wrong: "Zeki insanlar problemleri hiç düşünmeden tek saniyede çözer.", correct: "Gerçek dehalar problemleri en çok parçaya bölen, sabırla plan yapan ve vazgeçmeyen insanlardır." }
      ]
    },
    quiz: {
      question: "Çok büyük ve zor görünen bir bilgisayar projesini daha kolay çözebilmek için küçük ve yönetilebilir parçalara ayırma işlemine ne ad verilir?",
      options: [
        { text: "A) Silme (Delete)", isCorrect: false },
        { text: "B) Parçalara Ayırma (Ayrıştırma - Decomposition)", isCorrect: true },
        { text: "C) Format Atma", isCorrect: false },
        { text: "D) Yazıcıdan Çıktı Alma", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Parçalara Ayırma' (Ayrıştırma), karmaşık sorunları küçük parçalara bölerek adım adım çözme stratejisidir."
    },
    summaryRules: [
      { bold: "Problemi Anla", text: "Çözümün yarısı ne istendiğini tam kavramaktır." },
      { bold: "Ayrıştırma", text: "Dev sorunları küçük lokmalara bölmektir." },
      { bold: "Gelecek Hafta", text: "Akış Şemaları: Geometrik şekillerle algoritma çizimi başlıyor!" }
    ],
    homework: "Odanızda çözmek istediğiniz bir dağınıklığı 3 parçaya ayırarak nasıl çözeceğinizi planlayın.",
    nextWeekPreview: "Akış Şemaları: Standart Şekiller (Elips, Dikdörtgen, Paralelkenar) ve Şemalar!"
  },

  // 23. HAFTA
  {
    week: 23,
    date: "15 - 21 Şubat",
    hours: "2 Ders Saati",
    unit: "4. Tema: Problem Çözme, Akış Şemaları ve Algoritmik Tasarım",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Algoritma ve Akış Şemalarına Giriş (Standart Şekiller)",
    subtitle: "Elips (Başla/Dur), Paralelkenar (Girdi/Çıktı), Dikdörtgen (İşlem) ve Yön Okları",
    outcomeCode: "BTY.3.4.2 (Akış Şemaları & Semboller)",
    targetSkill: "Algoritmaları Uluslararası Standart Akış Şeması Sembolleriyle Çizebilme",
    curiosityQuestion: "Dünyanın farklı ülkelerindeki yazılımcılar (Türk, Japon, Amerikalı) birbirinin dilini bilmese bile hazırladıkları algoritmayı nasıl tek bakışta anlarlar?",
    roadmap: [
      { title: "Akış Şeması (Flowchart) Nedir?", desc: "Algoritmanın geometrik şekillerle resmedilmiş haritası." },
      { title: "Elips (Oval)", desc: "Algoritmanın başlangıç (BAŞLA) ve bitiş (DUR) sınırları." },
      { title: "Paralelkenar", desc: "Kullanıcıdan bilgi alma (Giriş) ve sonucu gösterme (Çıkış)." },
      { title: "Dikdörtgen", desc: "Matematiksel hesaplamalar ve eylemler (İşlem kutusu)." }
    ],
    section1: {
      title: "Uluslararası Kod Dili: Akış Şeması Şekilleri",
      subtitle: "Bütün bilgisayar mühendisleri aynı standart şekilleri kullanır:",
      layout: "split-visual",
      card: {
        title: "Temel 4 Akış Şeması Sembolü",
        icon: "📐",
        desc: "Şemaları çizerken kullanılan evrensel geometrik şekiller:",
        items: [
          { bold: "1. Elips (Oval)", text: "Algoritmanın ilk adımı 'BAŞLA' ve son adımı 'BİTİR' için kullanılır." },
          { bold: "2. Dikdörtgen", text: "Yapılan işlemler, hesaplamalar ve hareketler (Örn: 'Sayıları topla', '2 adım yürü')." },
          { bold: "3. Paralelkenar", text: "Klavyeden veri girilmesi veya ekrana bilgi yazdırılması." },
          { bold: "4. Akış Okları (➔)", text: "Adımların hangi yöne doğru akacağını gösteren rehber oklar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- 1. Elips: Başla -->
        <ellipse cx="210" cy="45" rx="50" ry="18" fill="#10b981" stroke="#34d399" stroke-width="2"/>
        <text x="210" y="49" fill="#ffffff" font-size="11" font-weight="900" text-anchor="middle">BAŞLA</text>
        <line x1="210" y1="63" x2="210" y2="80" stroke="#818cf8" stroke-width="2.5" marker-end="url(#arrow)"/>
        <!-- 2. Paralelkenar: Veri Girişi -->
        <polygon points="170,80 260,80 250,110 160,110" fill="#06b6d4" stroke="#22d3ee" stroke-width="2"/>
        <text x="210" y="99" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">İki Sayı Gir</text>
        <line x1="210" y1="110" x2="210" y2="128" stroke="#818cf8" stroke-width="2.5"/>
        <!-- 3. Dikdörtgen: İşlem -->
        <rect x="160" y="128" width="100" height="30" rx="4" fill="#6366f1" stroke="#818cf8" stroke-width="2"/>
        <text x="210" y="147" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Toplam = A + B</text>
        <line x1="210" y1="158" x2="210" y2="175" stroke="#818cf8" stroke-width="2.5"/>
        <!-- 4. Elips: Bitir -->
        <ellipse cx="210" cy="192" rx="50" ry="17" fill="#f43f5e" stroke="#fb7185" stroke-width="2"/>
        <text x="210" y="196" fill="#ffffff" font-size="11" font-weight="900" text-anchor="middle">BİTİR</text>
        <text x="340" y="147" fill="#94a3b8" font-size="9" text-anchor="middle">Yukarıdan Aşağıya</text>
        <text x="340" y="160" fill="#38bdf8" font-size="9" text-anchor="middle">Adım Adım Akış</text>
      </svg>`,
      caption: "İki Sayıyı Toplayan Standart Akış Şeması"
    },
    section2: {
      title: "Neden Yazı Yerine Akış Şeması Çizeriz?",
      subtitle: "Görsel şemaların yazılı anlatıma karşı 3 büyük üstünlüğü:",
      layout: "cards-2",
      cards: [
        {
          title: "Hızlı Anlaşılabilirlik",
          icon: "⚡",
          desc: "Bir bakışta tüm planı görme:",
          items: [
            { bold: "Sayfalarca Yazı Yerine", text: "Uzun paragraflar yerine 4 kutucukla tüm algoritmayı anlatır." },
            { bold: "Hataları Hemen Gösterir", text: "Eksik bir adım veya unutulan bir ok anında göze çarpar." },
            { bold: "Evrensel Dil", text: "Dünyanın her yerindeki mühendisler aynı şekilleri kullanır." }
          ]
        },
        {
          title: "Şema Çizme Kuralları",
          icon: "📏",
          desc: "Kusursuz bir akış şemasının kuralları:",
          items: [
            { bold: "Okların Yönü", text: "Akış genellikle yukarıdan aşağıya veya soldan sağa doğru ilerler." },
            { bold: "Mutlaka Başla ve Bitir Olmalı", text: "Başlangıcı veya sonu olmayan bir şema asla çalışmaz." },
            { bold: "Kutuların İçine Kısa Yaz", text: "Kutucukların içine uzun romanlar değil, net emirler yazılır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Ayran Yapma Akış Şeması'",
      subtitle: "Günlük hayattaki 'Ayran Yapma' algoritmasını geometrik şekillerle çiziyoruz.",
      steps: [
        { title: "Başla Elipsi Çiz", desc: "Kağıdın veya çizim programının en üstüne yeşil bir Elips çizip 'BAŞLA' yazın." },
        { title: "İşlem Kutularını Sırala", desc: "Dikdörtgenler içine 'Yoğurdu kaba koy', 'Su ekle', 'Tuz at', 'Çırp' adımlarını yazın." },
        { title: "Oklarla Birleştir ve Bitir", desc: "Adımları oklarla bağlayıp en alta kırmızı Elips ile 'BİTİR' koyun." }
      ],
      criteria: [
        "Elips, dikdörtgen ve paralelkenar şekillerini doğru işlevle kullanabilme",
        "Akış oklarını adımlar arasında mantıksal sırayla bağlayabilme",
        "Günlük bir olayı standart akış şemasına dönüştürebilme"
      ]
    },
    tips: {
      safetyTitle: "Akış Mimarı Tavsiyeleri",
      safetyRules: [
        { bold: "Okları Unutma", text: "Şekillerin arasına ok koymazsanız bilgisayar bir sonraki adımın hangisi olduğunu bilemez." },
        { bold: "Şekilleri Karıştırma", text: "İşlem için Elips kullanamazsınız; Elips sadece Başla ve Bitir içindir." },
        { bold: "Cetvel veya Şablon Kullan", text: "Kağıda çizerken şekillerin düzgün ve orantılı olmasına özen gösterin." }
      ],
      myths: [
        { wrong: "Akış şeması sadece bilgisayarlar içindir, fabrikalarda kullanılmaz.", correct: "Otomobil fabrikalarından hastanelere, roket fırlatma merkezlerinden aşçılara kadar tüm profesyoneller akış şemasıyla çalışır." }
      ]
    },
    quiz: {
      question: "Bir akış şemasında algoritmanın 'BAŞLADIĞINI' ve 'BİTTİĞİNİ' gösteren uluslararası standart geometrik şekil hangisidir?",
      options: [
        { text: "A) Dikdörtgen", isCorrect: false },
        { text: "B) Elips (Oval)", isCorrect: true },
        { text: "C) Paralelkenar", isCorrect: false },
        { text: "D) Üçgen", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Elips (Oval) şekli, akış şemalarının kapısı gibidir; 'BAŞLA' ve 'BİTİR' adımlarında kullanılır."
    },
    summaryRules: [
      { bold: "Akış Şeması", text: "Algoritmanın evrensel görsel haritasıdır." },
      { bold: "Elips", text: "Başla ve Bitir sınırlarıdır." },
      { bold: "Dikdörtgen", text: "Eylemler ve işlemler kutusudur." }
    ],
    homework: "Sabah uyanıp okula gitme algoritmanızı 4 şekilli bir akış şeması olarak defterinize çizin.",
    nextWeekPreview: "Karar Verme Büyüsü: Baklava Dilimi (Eşkenar Dörtgen) ile 'Eğer... İse... Değilse...' Şemaları!"
  },

  // 24. HAFTA
  {
    week: 24,
    date: "22 - 28 Şubat",
    hours: "2 Ders Saati",
    unit: "4. Tema: Problem Çözme, Akış Şemaları ve Algoritmik Tasarım",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Akış Şemalarında Karar Yapısı (Eşkenar Dörtgen)",
    subtitle: "Baklava Dilimi Şekli ile 'Eğer... İse... Değilse...' (Evet / Hayır Yolları)",
    outcomeCode: "BTY.3.4.3 (Karar Yapıları & Şartlı Dallanma)",
    targetSkill: "Akış Şemalarında Şartlı Durumları (Eşkenar Dörtgen) Kullanarak Dallanan Algoritmalar Kurma",
    curiosityQuestion: "Yol ayrımına gelen akıllı bir sürücüsüz araba, trafik ışığının kırmızı mı yeşil mi olduğunu kontrol edip nasıl anında doğru yola sapar?",
    roadmap: [
      { title: "Karar (Şart) Kutusu Nedir?", desc: "Akış şemasındaki Baklava Dilimi (Eşkenar Dörtgen) şekli." },
      { title: "İki Farklı Yol: Evet / Hayır", desc: "Şart doğruysa sağa (EVET), yanlışsa sola (HAYIR) dallanma." },
      { title: "Günlük Karar Örnekleri", desc: "'Hava yağmurlu mu?', 'Sıcaklık 20 dereceden yüksek mi?'" },
      { title: "Dallanan Algoritmalar", desc: "Farklı durumlara göre farklı sonuçlar üreten akıllı sistemler." }
    ],
    section1: {
      title: "Yol Ayrımının Hakimi: Karar Kutusu",
      subtitle: "Bilgisayarların akıllı davranmasını sağlayan sihirli eşkenar dörtgen:",
      layout: "split-visual",
      card: {
        title: "Eşkenar Dörtgen Nasıl Çalışır?",
        icon: "💎",
        desc: "İçine daima cevabı 'Evet' veya 'Hayır' olan bir soru yazılır:",
        items: [
          { bold: "Giriş Oku", text: "Yukarıdan tek bir okla soruya gelinir (Örn: 'Yağmur yağıyor mu?')." },
          { bold: "Evet Yolu (True)", text: "Cevap evet ise bu yoldan gidilir (Örn: 'Şemsiyeni al')." },
          { bold: "Hayır Yolu (False)", text: "Cevap hayır ise diğer yoldan gidilir (Örn: 'Güneş gözlüğünü tak')." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Soru (Karar Kutusu - Baklava Dilimi) -->
        <polygon points="210,35 290,75 210,115 130,75" fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2"/>
        <text x="210" y="72" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Hava Yağmurlu</text>
        <text x="210" y="85" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">mu?</text>
        <!-- EVET Yolu (Sağa) -->
        <line x1="290" y1="75" x2="330" y2="75" stroke="#10b981" stroke-width="2.5"/>
        <line x1="330" y1="75" x2="330" y2="120" stroke="#10b981" stroke-width="2.5"/>
        <text x="305" y="68" fill="#34d399" font-size="10" font-weight="bold">EVET</text>
        <rect x="280" y="120" width="100" height="30" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="330" y="139" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Şemsiye Al ☔</text>
        <!-- HAYIR Yolu (Sola) -->
        <line x1="130" y1="75" x2="90" y2="75" stroke="#f43f5e" stroke-width="2.5"/>
        <line x1="90" y1="75" x2="90" y2="120" stroke="#f43f5e" stroke-width="2.5"/>
        <text x="105" y="68" fill="#fb7185" font-size="10" font-weight="bold">HAYIR</text>
        <rect x="40" y="120" width="100" height="30" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="90" y="139" fill="#fecdd3" font-size="9" font-weight="bold" text-anchor="middle">Normal Çık 🧢</text>
        <!-- Ortak Bitiş -->
        <line x1="330" y1="150" x2="330" y2="175" stroke="#818cf8" stroke-width="2"/>
        <line x1="90" y1="150" x2="90" y2="175" stroke="#818cf8" stroke-width="2"/>
        <line x1="90" y1="175" x2="330" y2="175" stroke="#818cf8" stroke-width="2"/>
        <line x1="210" y1="175" x2="210" y2="190" stroke="#818cf8" stroke-width="2"/>
        <ellipse cx="210" cy="204" rx="45" ry="14" fill="#6366f1" stroke="#818cf8" stroke-width="1.5"/>
        <text x="210" y="208" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Okula Git</text>
      </svg>`,
      caption: "Akış Şemasında Eşkenar Dörtgen ile Şartlı Dallanma (Evet / Hayır)"
    },
    section2: {
      title: "Oyunlarda Karar Mekanizmaları",
      subtitle: "Bilgisayar oyunlarındaki heyecan bu baklava dilimleriyle kodlanır:",
      layout: "cards-2",
      cards: [
        {
          title: "Oyun İçi Karar Örnekleri",
          icon: "🎮",
          desc: "Her saniye kontrol edilen şartlar:",
          items: [
            { bold: "Can Bitti mi?", text: "EĞER can = 0 İSE ➔ Ekrana 'Game Over' yaz, DEĞİLSE ➔ Oyuna devam et." },
            { bold: "Puana Ulaşıldı mı?", text: "EĞER puan > 100 İSE ➔ Bir üst bölüme geç, DEĞİLSE ➔ Puan toplamaya devam et." },
            { bold: "Tuşa Basıldı mı?", text: "EĞER Boşluk tuşuna basıldıysa ➔ Karakteri zıplat." }
          ]
        },
        {
          title: "İki Çıkış Kuralı",
          icon: "🚦",
          desc: "Karar kutusunun vazgeçilmez kuralı:",
          items: [
            { bold: "Asla Tek Ok Çıkamaz", text: "Eşkenar dörtgenden mutlaka biri 'Evet', diğeri 'Hayır' olan 2 ok çıkmalıdır." },
            { bold: "Soru Net Olmalıdır", text: "'Bugün hava nasıl?' yanlıştır; 'Sıcaklık 25 dereceden yüksek mi?' doğrudur." },
            { bold: "Yollar Birleşir", text: "Farklı kararlar verildikten sonra yollar genellikle ortak bir noktada buluşur." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Akıllı Kapı Şeması'",
      subtitle: "Alışveriş merkezindeki otomatik cam kapının açılma şemasını çiziyoruz.",
      steps: [
        { title: "Başla ve Sensör Oku", desc: "Elips ile BAŞLA yapıp 'Hareket sensörünü kontrol et' adımını ekleyin." },
        { title: "Karar Kutusunu Çiz", desc: "Eşkenar dörtgen içine 'İnsan yaklaştı mı?' sorusunu yazın." },
        { title: "Evet ve Hayır Yollarını Bağla", desc: "Evet ise 'Kapıyı Aç', Hayır ise 'Kapıyı Kapalı Tut' kutularını oklarla bağlayın." }
      ],
      criteria: [
        "Eşkenar dörtgen şeklini karar/şart durumları için doğru kullanabilme",
        "Evet ve Hayır kollarını doğru yönlendirip etiketleyebilme",
        "Sensörlü sistemlerin karar verme algoritmasını modelleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Karar Ustası Tavsiyeleri",
      safetyRules: [
        { bold: "Evet ve Hayır Yazılarını Unutma", text: "Okların üzerine 'Evet' ve 'Hayır' yazmazsanız hangi yolun nereye gittiği anlaşılmaz." },
        { bold: "Mantık Hatası Yapma", text: "Evet koluna yanlış eylemi bağlarsanız şema tam tersi çalışır (Örn: İnsan gelince kapıyı kitlemek gibi!)." },
        { bold: "Robotların Karar Gücü", text: "Robotlar duygularıyla değil, bu matematiksel mantık şartlarıyla karar verir." }
      ],
      myths: [
        { wrong: "Bilgisayarlar 'Belki' veya 'Bilemiyorum' diye karar verebilir.", correct: "Hayır! Bilgisayarların dünyası ikilidir (0 ve 1). Bir şart ya kesinlikle doğrudur (Evet) ya da kesinlikle yanlıştır (Hayır)." }
      ]
    },
    quiz: {
      question: "Bir akış şemasında 'Eğer hava soğuksa montunu giy, değilse tişörtle çık' kararını göstermek için HANGİ GEOMETRİK ŞEKİL kullanılır?",
      options: [
        { text: "A) Dikdörtgen", isCorrect: false },
        { text: "B) Eşkenar Dörtgen (Baklava Dilimi)", isCorrect: true },
        { text: "C) Daire", isCorrect: false },
        { text: "D) Paralelkenar", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Eşkenar Dörtgen (Baklava Dilimi), şart ve karar durumlarını göstermek için kullanılan evrensel semboldür."
    },
    summaryRules: [
      { bold: "Eşkenar Dörtgen", text: "Akış şemasının akıl ve karar merkezidir." },
      { bold: "Evet / Hayır", text: "Her soru iki farklı yola ayrılır." },
      { bold: "Akıllı Cihazlar", text: "Karar blokları sayesinde doğru adımı seçer." }
    ],
    homework: "Trafik lambasının çalışma mantığını (Işık kırmızı mı? Evet ise Dur, Hayır ise Geç) akış şeması olarak çizin.",
    nextWeekPreview: "Hata Ayıklama (Debugging) ve Optimizasyon: Kod Böceklerini Avlama Zamanı!"
  },

  // 25. HAFTA
  {
    week: 25,
    date: "01 - 07 Mart",
    hours: "2 Ders Saati",
    unit: "4. Tema: Problem Çözme, Akış Şemaları ve Algoritmik Tasarım",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "Hata Ayıklama (Debugging) ve Optimizasyon",
    subtitle: "Kod Böceklerini (Bug) Yakalama, Algoritma İyileştirme ve En Kısa Yol",
    outcomeCode: "BTY.3.4.4 (Hata Ayıklama & Verimlilik)",
    targetSkill: "Algoritmalardaki Hataları Adım Adım İzleyerek Tespit Etme ve En Verimli Yolu Bulma",
    curiosityQuestion: "Dünyanın en iyi yazılımcıları bile kod yazarken neden günde onlarca hata yaparlar ve bir dedektif gibi hataları nasıl bulurlar?",
    roadmap: [
      { title: "Bug (Böcek) ve Debugging", desc: "Tarihin ilk bilgisayarında bulunan gerçek güve ve hata ayıklama kavramı." },
      { title: "Adım Adım İzleme (Trace)", desc: "Algoritmayı parmağımızla baştan sona tek tek takip ederek hatayı yakalama." },
      { title: "Sonsuz Döngü Tehlikesi", desc: "Bitmeyen, bilgisayarı kilitleyen kısırdöngüleri önleme." },
      { title: "Optimizasyon (Verimlilik)", desc: "10 adımda yapılan bir işi 4 adımda daha akıllıca çözme." }
    ],
    section1: {
      title: "Hata Avcıları: Debugging Sanatı",
      subtitle: "Hata yapmak yazılımcılığın en doğal parçasıdır; asıl ustalık hatayı bulup düzeltmektir!",
      layout: "split-visual",
      card: {
        title: "Hata Bulmanın 3 Dedektif Adımı",
        icon: "🐞",
        desc: "Bir algoritma yanlış çalıştığında:",
        items: [
          { bold: "1. Belirtiyi Gör", text: "Robot hedefe varamadı mı? Yoksa duvara mı çarptı?" },
          { bold: "2. Adım Adım Takip Et", text: "Parmakla ilk adımdan itibaren her hareketi tek tek simüle et." },
          { bold: "3. Hatalı Adımı Değiştir", text: "'Sağa Dön' yerine yanlışlıkla 'Sola Dön' yazılmış adımı düzelt ve yeniden test et." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Büyüteç Çerçevesi -->
        <circle cx="150" cy="115" r="55" fill="#1e293b" stroke="#f43f5e" stroke-width="3"/>
        <line x1="190" y1="155" x2="230" y2="195" stroke="#f43f5e" stroke-width="6" stroke-linecap="round"/>
        <!-- İçteki Böcek (Bug) -->
        <ellipse cx="150" cy="115" rx="18" ry="24" fill="#f43f5e"/>
        <circle cx="150" cy="90" r="10" fill="#881337"/>
        <line x1="130" y1="105" x2="115" y2="95" stroke="#f43f5e" stroke-width="2.5"/>
        <line x1="170" y1="105" x2="185" y2="95" stroke="#f43f5e" stroke-width="2.5"/>
        <line x1="130" y1="125" x2="115" y2="135" stroke="#f43f5e" stroke-width="2.5"/>
        <line x1="170" y1="125" x2="185" y2="135" stroke="#f43f5e" stroke-width="2.5"/>
        <!-- Sağ Açıklama Kartı -->
        <rect x="250" y="55" width="140" height="120" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="320" y="80" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">DEBUGGING</text>
        <text x="265" y="105" fill="#cbd5e1" font-size="9">1. Hatayı Fark Et</text>
        <text x="265" y="125" fill="#cbd5e1" font-size="9">2. Sebebini Bul</text>
        <text x="265" y="145" fill="#34d399" font-size="9" font-weight="bold">3. Düzelt & Kutla!</text>
        <text x="210" y="222" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Hatalar Bizi Daha Akıllı Yapan Basamaklardır!</text>
      </svg>`,
      caption: "Böcek (Bug) Avı ve Hata Ayıklama (Debugging) Döngüsü"
    },
    section2: {
      title: "Optimizasyon: En Kısa ve Akıllı Yol",
      subtitle: "Aynı işi daha az komutla yapmak yazılımcılıkta bir sanattır:",
      layout: "cards-2",
      cards: [
        {
          title: "Hantal Kod vs. Optimize Kod",
          icon: "🚀",
          desc: "Kare çizmek için iki farklı yol:",
          items: [
            { bold: "Hantal Yol", text: "İleri git, dön, ileri git, dön, ileri git, dön, ileri git, dön (8 satır yorucu kod)." },
            { bold: "Optimize Yol", text: "4 kez tekrarla: [İleri git, Dön] (Tek bir döngüyle 2 satır akıllı kod)." },
            { bold: "Faydası", text: "Bilgisayar daha hızlı çalışır, hafıza daha az yorulur." }
          ]
        },
        {
          title: "Sonsuz Döngü Kapanı",
          icon: "🌀",
          desc: "Bilgisayarı kilitleyen büyük tuzak:",
          items: [
            { bold: "Çıkışı Olmayan Yol", text: "Bitiş şartı konulmayan bir döngü sonsuza kadar döner." },
            { bold: "Bilgisayar Donar", text: "Program yanıt vermez hale gelir ve kapatılmak zorunda kalınır." },
            { bold: "Çözüm", text: "Her döngünün içine mutlaka bir 'Çıkış Kapısı' veya sayı limiti koyun." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Bozuk Robotu Kurtar'",
      subtitle: "Tahtada yanlış kodlandığı için duvara toslayan robotun kodlarını düzeltiyoruz.",
      steps: [
        { title: "Bozuk Kodu İncele", desc: "Robotun neden hedefe varamadığını ve nerede duvara çarptığını bulun." },
        { title: "Hatalı Bloğu Çıkar", desc: "3. adımdaki yanlış yön okunu silip yerine doğrusunu yerleştirin." },
        { title: "Yeniden Çalıştır", desc: "Robotun alkışlar eşliğinde hazineye ulaştığını gözlemleyin." }
      ],
      criteria: [
        "Verilen bir algoritmada mantık hatasını parmakla izleyerek bulabilme",
        "Hatalı adımı düzelterek algoritmanın doğru çalışmasını sağlama",
        "Daha az adımla optimize çözüm önerebilme"
      ]
    },
    tips: {
      safetyTitle: "Hata Avcısı Öğütleri",
      safetyRules: [
        { bold: "Asla Sinirlenme", text: "Kodun ilk seferde çalışmaması dünyanın sonu değildir; profesyonel yazılımcılar zamanlarının yarısını hata arayarak geçirir." },
        { bold: "Yavaş Yavaş Test Et", text: "100 satır kod yazıp sonra test etmek yerine, her 3 adımda bir kodunuzu deneyin." },
        { bold: "Arkadaşından Yardım İste", text: "Bazen senin göremediğin hatayı yanındaki sıra arkadaşın bir saniyede fark edebilir (Eşli Programlama)." }
      ],
      myths: [
        { wrong: "İyi bir yazılımcı hiç hata yapmaz.", correct: "Hayır! En iyi yazılımcı, hatasını en hızlı fark eden, araştıran ve sabırla düzelten yazılımcıdır." }
      ]
    },
    quiz: {
      question: "Bir bilgisayar programındaki veya algoritmadaki mantık hatasını bulup düzeltme işlemine verilen uluslararası isim nedir?",
      options: [
        { text: "A) Format Atma", isCorrect: false },
        { text: "B) Debugging (Hata Ayıklama)", isCorrect: true },
        { text: "C) Yedekleme", isCorrect: false },
        { text: "D) Yazı Tipi Değiştirme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Debugging' (Hata Ayıklama), yazılımdaki böcekleri (hataları) bulup temizleme sanatıdır."
    },
    summaryRules: [
      { bold: "Bug", text: "Algoritmanın çalışmasını engelleyen mantık hatasıdır." },
      { bold: "Debugging", text: "Sabırla hatayı bulup çözme ustalığıdır." },
      { bold: "Optimizasyon", text: "En az adımla en mükemmel sonuca ulaşmaktır." }
    ],
    homework: "Evinizde bir işi yaparken (örneğin ayakkabı bağlarken) yapılan komik bir hatayı ve nasıl düzeltileceğini düşünün.",
    nextWeekPreview: "12 Mart İstiklal Marşı: Şartlı Algoritmalar ve Marşımızın Kıtalarını Sıralama!"
  },

  // 26. HAFTA
  {
    week: 26,
    date: "08 - 14 Mart",
    hours: "2 Ders Saati",
    unit: "4. Tema: Problem Çözme, Akış Şemaları ve Algoritmik Tasarım",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "12 Mart İstiklal Marşı & Şartlı Algoritmalar",
    subtitle: "Milli Şairimiz Mehmet Akif Ersoy ve Şartlı Kararlarla Kıtaları Doğru Sıralama",
    outcomeCode: "BTY.3.4.5 (Milli Değerler & Şartlı Algoritma)",
    targetSkill: "İstiklal Marşı'mızın Kabulü Bilincini Edinme, Şartlı Sıralama Algoritmaları Kurma",
    curiosityQuestion: "Milli marşımızın dizeleri karışık olarak verilseydi, bilgisayara hangi kıtanın önce geleceğini şartlı kurallarla nasıl öğretirdik?",
    roadmap: [
      { title: "12 Mart 1921 Ruhu", desc: "Milli şairimiz Mehmet Akif Ersoy ve İstiklal Marşı'mızın TBMM'de kabulü." },
      { title: "Şartlı Sıralama Mantığı", desc: "'Eğer 1. kıtaysa 'Korkma!' ile başla, Eğer 2. kıtaysa 'Çatma kurban olayım' de.'" },
      { title: "Algoritmik Eşleştirme", desc: "Kelimeleri ve kıtaları mantıksal şartlarla sıraya dizme." },
      { title: "Milli Değerler Sunumu", desc: "İstiklal Marşı'mızın ilk iki kıtasını akış şemasıyla modelleme." }
    ],
    section1: {
      title: "Milli Marşımızın Dizgisi ve Şartlı Kurallar",
      subtitle: "Korkma! Sönmez bu şafaklarda yüzen al sancak!",
      layout: "split-visual",
      card: {
        title: "Şartlı Sıralama Kuralı",
        icon: "🇹🇷",
        desc: "Kıtaları sıraya koyan karar mekanizması:",
        items: [
          { bold: "Şart 1", text: "EĞER sıra = 1 İSE ➔ 'Korkma, sönmez bu şafaklarda...' kıtasını oku." },
          { bold: "Şart 2", text: "EĞER sıra = 2 İSE ➔ 'Çatma, kurban olayım çehreni ey nazlı hilal!' kıtasını oku." },
          { bold: "Bitiş Şartı", text: "EĞER sıra > 10 İSE ➔ Marş tamamlandı, saygıyla selamla." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#7f1d1d" stroke="#f59e0b" stroke-width="2"/>
        <!-- Şanlı Türk Bayrağı -->
        <rect x="40" y="40" width="140" height="90" rx="8" fill="#dc2626"/>
        <circle cx="95" cy="85" r="24" fill="#fff"/>
        <circle cx="102" cy="85" r="19" fill="#dc2626"/>
        <polygon points="122,74 125,82 133,82 126,87 129,95 122,90 115,95 118,87 111,82 119,82" fill="#fff"/>
        <!-- Şart Kutusu -->
        <polygon points="280,40 350,75 280,110 210,75" fill="#1e293b" stroke="#fde68a" stroke-width="2"/>
        <text x="280" y="73" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Sıra == 1 mi?</text>
        <line x1="280" y1="110" x2="280" y2="135" stroke="#fff" stroke-width="2"/>
        <text x="295" y="125" fill="#34d399" font-size="9" font-weight="bold">EVET</text>
        <!-- 1. Kıta Kutusu -->
        <rect x="200" y="135" width="160" height="40" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="280" y="152" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">"Korkma, sönmez bu şafaklarda..."</text>
        <text x="280" y="166" fill="#fde68a" font-size="8" text-anchor="middle">1. Kıta Okundu ➔ Sıra = 2 Yap</text>
        <text x="210" y="215" fill="#ffffff" font-size="11" font-weight="900" text-anchor="middle">12 Mart 1921: İstiklal Marşı'mızın Kabulü Kutlu Olsun!</text>
      </svg>`,
      caption: "İstiklal Marşı Kıtalarını Şartlı Döngü ile Sıralama"
    },
    section2: {
      title: "Sayaçlar ve Sıralı Şart Mekanizması",
      subtitle: "Bilgisayara sırayla bir şey saydırırken 'Sayaç' (Counter) kullanırız:",
      layout: "cards-2",
      cards: [
        {
          title: "Sayaç (Counter) Mantığı",
          icon: "⏱️",
          desc: "Adımları sayan dijital hafıza:",
          items: [
            { bold: "Başlangıçta", text: "Sayaç = 1 olarak başlar." },
            { bold: "Her Adımda", text: "Bir kıta okunduktan sonra Sayaç = Sayaç + 1 yapılır." },
            { bold: "Kontrol", text: "Sayaç 10 olduğunda marşın bütün kıtaları sırayla tamamlanmış olur." }
          ]
        },
        {
          title: "Milli Birlik ve Şiir Sevgisi",
          icon: "📖",
          desc: "Mehmet Akif Ersoy'un öğüdü:",
          items: [
            { bold: "İstiklal Şairi", text: "Mehmet Akif bu marşı Türk milletine ve kahraman ordumuza hediye etmiştir." },
            { bold: "Asla Unutulmaz", text: "'Allah bu millete bir daha İstiklal Marşı yazdırmasın!'" },
            { bold: "Kodlarımızla Yaşatıyoruz", text: "Milli değerlerimizi teknolojiyle birleştirerek gururla öğreniyoruz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Marşımızın Kıtalarını Sırala'",
      subtitle: "Karışık verilen mısraları şartlı algoritma adımlarıyla doğru sıraya diziyoruz.",
      steps: [
        { title: "Kıtaları İncele", desc: "Ekranda karışık sırayla duran 4 dizeyi okuyun." },
        { title: "Şartları Kur", desc: "'Eğer ilk dize ise 'Korkma' ile başlayan satırı en üste al' kuralını uygulayın." },
        { title: "Koro Halinde Oku", desc: "Doğru dizilen marşımızı sınıfla birlikte saygıyla okuyun." }
      ],
      criteria: [
        "İstiklal Marşı'nın kabul tarihini ve milli önemini kavrayabilme",
        "Sayaç ve şart yapısını sıralama problemlerinde uygulayabilme",
        "Milli değerleri dijital etkinliklerle birleştirebilme"
      ]
    },
    tips: {
      safetyTitle: "Saygı ve Bilişim Kuralları",
      safetyRules: [
        { bold: "İstiklal Marşı Okunurken", text: "Marşımız çalarken bilgisayar başında da olsak dimdik ayağa kalkıp saygıyla durmalıyız." },
        { bold: "Sayaç Değerini Sıfırlamayı Unutma", text: "Yeni bir sayma işlemine başlarken sayacı mutlaka baştan başlatın." },
        { bold: "Doğru Yazım", text: "Marşımızın dizelerini yazarken imla ve noktalama kurallarına harfiyen uyun." }
      ],
      myths: [
        { wrong: "Algoritmalar sadece matematik ve sayılar içindir; şiir veya marşlarda kullanılamaz.", correct: "Algoritma mantığı müzikten şiire, spordan uzay bilimine kadar sıralı ve kurallı olan her yerde çalışır!" }
      ]
    },
    quiz: {
      question: "İstiklal Marşı'mızın TBMM tarafından kabul edildiği ve her yıl gururla andığımız tarihi gün hangisidir?",
      options: [
        { text: "A) 23 Nisan 1920", isCorrect: false },
        { text: "B) 12 Mart 1921", isCorrect: true },
        { text: "C) 29 Ekim 1923", isCorrect: false },
        { text: "D) 19 Mayıs 1919", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> İstiklal Marşı'mız 12 Mart 1921 tarihinde Türkiye Büyük Millet Meclisi'nde coşkuyla kabul edilmiştir."
    },
    summaryRules: [
      { bold: "12 Mart", text: "Milli bağımsızlığımızın ve İstiklal Marşı'mızın kabul günüdür." },
      { bold: "Şartlı Sıralama", text: "Adımları doğru kurallara göre art arda dizer." },
      { bold: "Gelecek Hafta", text: "18 Mart Çanakkale Zaferi ve Döngüler (Tekrar Blokları)!" }
    ],
    homework: "İstiklal Marşı'mızın ilk iki kıtasını defterinize en güzel el yazınızla yazın.",
    nextWeekPreview: "18 Mart Çanakkale Zaferi: Döngüler (Loop) ve Sayı Sayaçlarıyla Tekrar Eden Görevler!"
  },

  // 27. HAFTA
  {
    week: 27,
    date: "15 - 21 Mart",
    hours: "2 Ders Saati",
    unit: "4. Tema: Problem Çözme, Akış Şemaları ve Algoritmik Tasarım",
    unitBadge: "4. Tema",
    unitTheme: "tema-4",
    title: "18 Mart Çanakkale Zaferi & Döngüler (Loops)",
    subtitle: "Kahraman Şehitlerimiz, '10 Kere Tekrarla' Bloğu, Sayaçlar ve Sonsuz Döngüler",
    outcomeCode: "BTY.3.4.6 (Döngü Mimarisi & Milli Tarih)",
    targetSkill: "Döngü (Loop) Yapısını Akış Şemalarında ve Algoritmalarda Kullanabilme",
    curiosityQuestion: "Günde 10.000 adım atmak isteyen bir sporcuya her adımı için tek tek kod yazmak mı kolaydır, yoksa '10.000 kere tekrarla' demek mi?",
    roadmap: [
      { title: "18 Mart 1915 Çanakkale Ruhu", desc: "Seyit Onbaşı, Mehmetçik ve 'Çanakkale Geçilmez!' destanı." },
      { title: "Döngü (Loop) Nedir?", desc: "Belirli bir eylemi istenen sayı kadar otomatik tekrar ettiren sihirli yapı." },
      { title: "Sayaçlı Döngüler", desc: "1'den başlayıp 10'a kadar sayan ve bitince duran akıllı döngüler." },
      { title: "Akış Şemasında Geri Dönüş Oku", desc: "Şemada aşağıdan yukarıya doğru dönerek döngü kurma." }
    ],
    section1: {
      title: "Yorulmayan Tekrar: Döngülerin Gücü",
      subtitle: "Bilgisayarlar aynı hareketi sıkılmadan milyonlarca kez mükemmel tekrarlar:",
      layout: "split-visual",
      card: {
        title: "Döngü Olmasaydı Ne Olurdu?",
        icon: "🔁",
        desc: "100 metre koşan bir koşucu için:",
        items: [
          { bold: "Döngüsüz Kod", text: "100 satır boyunca alt alta '1 Adım At' yazmak gerekirdi (Sayfalar dolusu gereksiz yazı!)." },
          { bold: "Döngülü Kod", text: "'100 DEFA TEKRARLA: [1 Adım At]' (Sadece tek satırda muazzam tasarruf!)." },
          { bold: "Sayaç Kontrolü", text: "Her adımda sayaç 1 artar; 100 olunca döngü biter ve madalya verilir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Döngü Başlangıç -->
        <rect x="150" y="40" width="120" height="30" rx="6" fill="#312e81" stroke="#818cf8"/>
        <text x="210" y="60" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">Sayaç = 1</text>
        <line x1="210" y1="70" x2="210" y2="85" stroke="#818cf8" stroke-width="2"/>
        <!-- Döngü Şartı (Baklava) -->
        <polygon points="210,85 270,115 210,145 150,115" fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2"/>
        <text x="210" y="112" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Sayaç &lt;= 5</text>
        <text x="210" y="125" fill="#fff" font-size="9" text-anchor="middle">mi?</text>
        <!-- EVET Kolu (Aşağıya Eylem) -->
        <line x1="210" y1="145" x2="210" y2="165" stroke="#10b981" stroke-width="2"/>
        <text x="225" y="158" fill="#34d399" font-size="9" font-weight="bold">EVET</text>
        <rect x="145" y="165" width="130" height="28" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="210" y="182" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Adım At &amp; Sayaç++</text>
        <!-- Geri Dönüş Oku (Loop) -->
        <path d="M145 179 H100 V115 H150" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/>
        <text x="75" y="145" fill="#22d3ee" font-size="9" font-weight="bold" text-anchor="middle">DÖNGÜ</text>
        <!-- HAYIR Kolu (Sağa Bitiş) -->
        <line x1="270" y1="115" x2="310" y2="115" stroke="#f43f5e" stroke-width="2"/>
        <text x="285" y="108" fill="#fb7185" font-size="9" font-weight="bold">HAYIR</text>
        <ellipse cx="345" cy="115" rx="30" ry="16" fill="#f43f5e"/>
        <text x="345" y="119" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">BİTİR</text>
        <text x="210" y="222" fill="#a5b4fc" font-size="11" font-weight="bold" text-anchor="middle">Geri Dönen Ok Sayesinde 5 Kere Tekrar Eder!</text>
      </svg>`,
      caption: "Akış Şemasında Döngü (Loop) ve Sayaç Mekanizması"
    },
    section2: {
      title: "18 Mart Çanakkale Ruhu ve Saygı",
      subtitle: "Tarihimizin en büyük kahramanlık destanını minnetle anıyoruz:",
      layout: "cards-2",
      cards: [
        {
          title: "Çanakkale Geçilmez!",
          icon: "⚓",
          desc: "18 Mart 1915 Deniz Zaferi:",
          items: [
            { bold: "Seyit Onbaşı", text: "276 kiloluk top mermisini tek başına sırtlayıp düşman zırhlısını vuran kahraman." },
            { bold: "Birlik Ruhu", text: "Tüm yurdun tek yürek olup vatanını canı pahasına savunduğu destan." },
            { bold: "Gazi Mustafa Kemal", text: "Anafartalar Komutanı olarak askeri dehasını tüm dünyaya kanıtladı." }
          ]
        },
        {
          title: "Kodlamada Döngü Çeşitleri",
          icon: "🔄",
          desc: "İki temel döngü türü:",
          items: [
            { bold: "Sayı Sayarak Tekrar (Belirli)", text: "'10 defa tekrarla', '4 defa kare çiz' (Kaç kere döneceği bellidir)." },
            { bold: "Şarta Bağlı Tekrar (Sürekli)", text: "'Duvara değene kadar yürü', 'Oyun bitene kadar tekrarla' (Şart bozulana kadar döner)." },
            { bold: "Enerji Tasarrufu", text: "Döngüler yazılımcının en büyük yardımcısıdır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Döngü ile Geometrik Şekiller'",
      subtitle: "Kare, üçgen ve yıldız şekillerini döngü blokları kullanarak en az komutla çiziyoruz.",
      steps: [
        { title: "Kare Algoritmasını Kur", desc: "'4 defa tekrarla: [100 adım git, 90 derece sağa dön]' döngüsünü oluşturun." },
        { title: "Eşkenar Üçgeni Çiz", desc: "'3 defa tekrarla: [100 adım git, 120 derece dön]' döngüsüyle üçgeni tamamlayın." },
        { title: "Adım Sayısını Karşılaştır", desc: "Döngüsüz yazsaydık kaç satır süreceğini hesaplayıp tasarrufu görün." }
      ],
      criteria: [
        "Döngü (Loop) mantığını algoritmada doğru konumlandırabilme",
        "Geometrik şekillerin köşe sayısı ile döngü tekrar sayısı arasındaki ilişkiyi kurma",
        "18 Mart Çanakkale Zaferi'nin tarihi önemini kavrayabilme"
      ]
    },
    tips: {
      safetyTitle: "Döngü Mimarı Öğütleri",
      safetyRules: [
        { bold: "Dönüş Derecesini Doğru Hesapla", text: "Kare için 360 / 4 = 90 derece, üçgen için 360 / 3 = 120 derece dönüş gerekir." },
        { bold: "Sayaç Artışını Unutma", text: "Sayaçlı döngülerde 'Sayaç = Sayaç + 1' yapmayı unutursanız sayaç hep 1 kalır ve döngü sonsuza kilitlenir." },
        { bold: "Şehitlerimize Minnet", text: "Bugün özgürce kod yazabiliyorsak bunu Çanakkale kahramanlarına borçluyuz." }
      ],
      myths: [
        { wrong: "Döngü sadece aynı işlemi yapar; her seferinde sayıyı değiştiremez.", correct: "Döngü her döndüğünde içindeki sayacı 1 artırarak farklı sayılar yazdırabilir (Örn: 1'den 100'e kadar sayma)." }
      ]
    },
    quiz: {
      question: "Bir robotun ekranda düzgün bir 'KARE' çizmesi için [İleri Git, Sağa Dön] hareketini HANGİ DÖNGÜ bloğunun içine koymalıyız?",
      options: [
        { text: "A) 2 Defa Tekrarla", isCorrect: false },
        { text: "B) 4 Defa Tekrarla", isCorrect: true },
        { text: "C) 100 Defa Tekrarla", isCorrect: false },
        { text: "D) Hiç Tekrarlama", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Karenin 4 eşit kenarı ve 4 köşesi olduğu için [İleri Git, Sağa Dön] adımı tam '4 Defa Tekrarla' döngüsüyle kusursuz çizilir."
    },
    summaryRules: [
      { bold: "Döngü (Loop)", text: "Tekrar eden işleri tek satırda çözen sihirli halkadır." },
      { bold: "Tasarruf", text: "Kodları kısaltır, hataları engeller." },
      { bold: "Gelecek Hafta", text: "Büyük Gün! Scratch 3.0 Blok Tabanlı Kodlama Başlıyor!" }
    ],
    homework: "Evde bir pergel veya bardak kullanarak defterinize bir döngü çarkı çizin ve içine 4 kural yazın.",
    nextWeekPreview: "Scratch 3.0 Dünyasına Giriş: Sahne, Sevimli Kedi Kuklası ve Renkli Kod Blokları!"
  },

  // 28. HAFTA
  {
    week: 28,
    date: "22 - 28 Mart",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Programlama (Scratch / Code.org)",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Blok Tabanlı Kodlamaya Giriş: Scratch 3.0 Arayüzü",
    subtitle: "Sahne (Stage), Kukla (Sprite), Dekorlar ve Renkli Kod Blokları Kütüphanesi",
    outcomeCode: "BTY.3.5.1 (Görsel Kodlama & Arayüz Keşfi)",
    targetSkill: "Scratch Arayüzünü Tanıma, Kukla ve Dekor Ekleyebilme, Blokları Çalışma Alanına Taşıma",
    curiosityQuestion: "Lego parçalarını birbirine takarak kule yaptığımız gibi, renkli kod bloklarını takarak kendi bilgisayar oyunumuzu yapabilir miyiz?",
    roadmap: [
      { title: "Scratch Dünyası Nedir?", desc: "Milyonlarca çocuğun oyun, animasyon ve hikaye kodladığı görsel stüdyo." },
      { title: "Sahne ve Kukla (Sprite)", desc: "Oyunun geçtiği tiyatro sahnesi ve sahnedeki sevimli kedi oyuncumuz." },
      { title: "Dekor (Arka Plan) Kütüphanesi", desc: "Uzay, su altı, kale ve futbol sahası manzaraları ekleme." },
      { title: "Kod Blokları Paleti", desc: "Hareket (Mavi), Görünüm (Mor), Ses (Pembe), Olaylar (Sarı)." }
    ],
    section1: {
      title: "Scratch 3.0 Stüdyosu: Çizgi Film ve Oyun Fabrikası",
      subtitle: "Burası bizim hayallerimizi ekranda canlandırdığımız yazılım atölyemizdir:",
      layout: "split-visual",
      card: {
        title: "Scratch Arayüzünün 4 Ana Bölgesi",
        icon: "🎬",
        desc: "Ekrandaki çalışma alanları:",
        items: [
          { bold: "1. Blok Paleti (Sol)", text: "Renk renk ayrılmış kod bloklarının durduğu sihirli çekmece." },
          { bold: "2. Kodlama Alanı (Orta)", text: "Blokları sürükleyip lego gibi birbirine çıt diye taktığımız geniş masa." },
          { bold: "3. Sahne (Sağ Üst)", text: "Kodladığımız oyunun ve çizgi filmin canlı oynatıldığı sinema perdesi." },
          { bold: "4. Kukla ve Dekor Listesi (Sağ Alt)", text: "Oyundaki tüm karakterlerin ve arka planların yönetildiği alan." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Scratch Üst Çubuk -->
        <rect x="35" y="35" width="350" height="24" rx="4" fill="#4f46e5"/>
        <text x="50" y="51" fill="#fff" font-size="11" font-weight="bold">Scratch 3.0</text>
        <circle cx="340" cy="47" r="7" fill="#10b981"/>
        <polygon points="338,44 344,47 338,50" fill="#fff"/>
        <circle cx="360" cy="47" r="7" fill="#f43f5e"/>
        <rect x="357" y="44" width="6" height="6" fill="#fff"/>
        <!-- Sol: Blok Paleti -->
        <rect x="35" y="65" width="75" height="150" fill="#1e293b" stroke="#334155"/>
        <circle cx="50" cy="80" r="5" fill="#3b82f6"/>
        <text x="60" y="83" fill="#cbd5e1" font-size="8">Hareket</text>
        <circle cx="50" cy="98" r="5" fill="#a855f7"/>
        <text x="60" y="101" fill="#cbd5e1" font-size="8">Görünüm</text>
        <circle cx="50" cy="116" r="5" fill="#ec4899"/>
        <text x="60" y="119" fill="#cbd5e1" font-size="8">Ses</text>
        <circle cx="50" cy="134" r="5" fill="#eab308"/>
        <text x="60" y="137" fill="#cbd5e1" font-size="8">Olaylar</text>
        <circle cx="50" cy="152" r="5" fill="#f97316"/>
        <text x="60" y="155" fill="#cbd5e1" font-size="8">Kontrol</text>
        <!-- Orta: Kodlama Alanı -->
        <rect x="115" y="65" width="130" height="150" fill="#0f172a" stroke="#334155"/>
        <rect x="125" y="80" width="90" height="22" rx="4" fill="#eab308"/>
        <text x="170" y="94" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">🚩 tıklandığında</text>
        <rect x="125" y="104" width="90" height="22" rx="4" fill="#3b82f6"/>
        <text x="170" y="118" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">10 adım git</text>
        <!-- Sağ Üst: Sahne -->
        <rect x="250" y="65" width="135" height="90" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="317" y="115" font-size="28" text-anchor="middle">🐱</text>
        <!-- Sağ Alt: Kukla Paneli -->
        <rect x="250" y="160" width="135" height="55" rx="4" fill="#1e293b" stroke="#334155"/>
        <rect x="260" y="170" width="28" height="28" rx="4" fill="#334155"/>
        <text x="274" y="188" font-size="14" text-anchor="middle">🐱</text>
        <text x="315" y="185" fill="#94a3b8" font-size="8">Kukla 1 (Kedi)</text>
      </svg>`,
      caption: "Scratch 3.0 Programlama Ortamı Arayüz Haritası"
    },
    section2: {
      title: "Yeşil Bayrak ve Kırmızı Durdurma Butonları",
      subtitle: "Sahnenin hemen üzerindeki iki trafik yöneticisi:",
      layout: "cards-2",
      cards: [
        {
          title: "Yeşil Bayrak (Başlat Butonu)",
          icon: "🏁",
          desc: "Tüm projenin anahtarı:",
          items: [
            { bold: "Tetikleyici", text: "Yeşil bayrağa tıklandığında, arkasında sarı bayrak bloğu olan bütün kodlar aynı anda çalışmaya başlar." },
            { bold: "Oyunun Başlangıcı", text: "Karakterler sahneye çıkar, müzik başlar ve skor sıfırlanır." },
            { bold: "Klavye Kısayolu", text: "İstediğiniz zaman tıklayarak oyunu yeniden başlatabilirsiniz." }
          ]
        },
        {
          title: "Kırmızı Düğme (Durdur)",
          icon: "🛑",
          desc: "Her şeyi donduran emniyet freni:",
          items: [
            { bold: "Acil Fren", text: "Çalışan tüm kodları, dönen döngüleri ve çalan müzikleri tek tıkla durdurur." },
            { bold: "Sonsuz Döngü Kurtarıcısı", text: "Oyun kontrolden çıktığında kırmızı butona basarak sakinleşebilirsiniz." },
            { bold: "Yeniden Başlama", text: "Durdurduktan sonra tekrar yeşil bayrağa basarak baştan başlayabilirsiniz." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'İlk Scratch Projem'",
      subtitle: "Kedi kuklasına uzay dekoru ekleyip 10 adım koşturuyoruz.",
      steps: [
        { title: "Dekor Ekle", desc: "Sağ alttaki 'Bir Dekor Seç' büyütecine tıklayıp 'Space' (Uzay) dekorunu seçin." },
        { title: "Olay Bloğunu Sürükle", desc: "Sarı Olaylar menüsünden 'Yeşil Bayrağa Tıklandığında' bloğunu masaya bırakın." },
        { title: "Hareket Bloğunu Tak", desc: "Mavi '10 Adım Git' bloğunu sarı bloğun altına çıt diye takıp yeşil bayrağa basın." }
      ],
      criteria: [
        "Scratch arayüzündeki 4 ana bölgeyi doğru adlandırabilme",
        "Yeni bir dekor ve yeni bir kukla ekleyebilme",
        "Yeşil bayrak ile mavi hareket bloğunu birleştirip çalıştırabilme"
      ]
    },
    tips: {
      safetyTitle: "Genç Kodlamacı Tavsiyeleri",
      safetyRules: [
        { bold: "Blokları Birbirine Kenetle", text: "Bloklar havada ayrı durursa çalışmaz; altındaki girintiye mutlaka çıt sesiyle takılmalıdır." },
        { bold: "Projeyi Kaydet", text: "Sol üstteki 'Dosya ➔ Bilgisayarına Kaydet' diyerek projenizi .sb3 formatında saklayın." },
        { bold: "Kukla Seçimi", text: "Sadece kedi değil; kütüphaneden futbolcu, dinozor, kelebek gibi yüzlerce kukla ekleyebilirsiniz." }
      ],
      myths: [
        { wrong: "Scratch çocuk oyuncağıdır, gerçek kodlama değildir.", correct: "Yanlış! Dünyanın en ünlü üniversitesi MIT ve Harvard, bilgisayar mühendisliği öğrencilerine ilk derste Scratch ile algoritma mantığını öğretir!" }
      ]
    },
    quiz: {
      question: "Scratch 3.0 programında hazırladığımız tüm kod bloklarının çalışmaya başlaması için sahnenin üzerindeki hangi butona basılır?",
      options: [
        { text: "A) Kırmızı Yuvarlak Buton", isCorrect: false },
        { text: "B) Yeşil Bayrak Butonu (🏁)", isCorrect: true },
        { text: "C) Mavi Kare Buton", isCorrect: false },
        { text: "D) Sarı Yıldız Buton", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Yeşil Bayrak, Scratch dünyasında kod trenini harekete geçiren evrensel 'Başlat' düğmesidir."
    },
    summaryRules: [
      { bold: "Scratch 3.0", text: "Hayallerimizi koda dönüştüren renkli stüdyomuzdur." },
      { bold: "Yeşil Bayrak", text: "Oyunun ve animasyonun başlama düdüğüdür." },
      { bold: "Gelecek Hafta", text: "2. Dönem 1. Değerlendirme: Algoritma ve Scratch Bilgi Yarışması!" }
    ],
    homework: "Scratch arayüzünün 4 bölgesini defterinize renkli kalemlerle şematik olarak çizin.",
    nextWeekPreview: "2. Dönem 1. Değerlendirme: Algoritma, Akış Şemaları ve Scratch Sınavı!"
  },

  // 29. HAFTA
  {
    week: 29,
    date: "29 Mart - 04 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Programlama (Scratch / Code.org)",
    unitBadge: "2. Dönem 1. Sınav",
    unitTheme: "tema-sinav",
    title: "2. Dönem 1. Değerlendirme & Algoritma-Scratch",
    subtitle: "Ayrıştırma, Akış Şeması Şekilleri, Karar Yapıları, Döngüler ve Scratch Temelleri Sınavı",
    outcomeCode: "BTY.3.5.2 (Ölçme & Değerlendirme)",
    targetSkill: "4. ve 5. Temanın Algoritmik ve Kodlama Kazanımlarını Değerlendirme ve Pekiştirme",
    curiosityQuestion: "Bugüne kadar öğrendiğimiz akış şemaları ve Scratch bloklarıyla bir robota kendi başına labirentten çıkmayı nasıl başarıyla yaptırdık?",
    roadmap: [
      { title: "Büyük Kodlama Arenası", desc: "Ayrıştırma, akış şemaları ve Scratch arayüzü sınavı." },
      { title: "Şekil ve Görev Eşleştirme", desc: "Elips, dikdörtgen, paralelkenar ve baklava dilimi görevleri." },
      { title: "Kod Blokları Bulmacası", desc: "Karışık Scratch bloklarını doğru sıraya dizme." },
      { title: "Kodlama Rozetleri", desc: "2. Dönem Genç Yazılımcı sertifikalarını alma." }
    ],
    section1: {
      title: "Algoritmadan Scratch'e Başarı Köprüsü",
      subtitle: "2. dönemin ilk yarısında problem çözme ve kodlama dehası olduk!",
      layout: "split-visual",
      card: {
        title: "Usta Olduğumuz Konular",
        icon: "🏆",
        desc: "Sorumlu olduğumuz 4 büyük alan:",
        items: [
          { bold: "1. Problem Çözme & Ayrıştırma", text: "Büyük sorunları küçük parçalara bölüp adım adım çözüyoruz." },
          { bold: "2. Akış Şeması Sembolleri", text: "Elips (Başla), Dikdörtgen (İşlem), Paralelkenar (Girdi) ve Baklava (Karar)." },
          { bold: "3. Döngüler ve Sayaçlar", text: "Tekrarlayan işleri döngüyle optimize ediyoruz." },
          { bold: "4. Scratch 3.0 Mimarisi", text: "Sahne, kukla, dekor ve yeşil bayrak mantığına hakimiz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Madalya / Yıldız Kupası -->
        <circle cx="210" cy="95" r="45" fill="#f59e0b" fill-opacity="0.25" stroke="#fbbf24" stroke-width="4"/>
        <text x="210" y="110" font-size="44" text-anchor="middle">🌟</text>
        <rect x="80" y="155" width="260" height="32" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="210" y="176" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">GENÇ YAZILIMCI KODLAMA ROZETİ</text>
        <text x="210" y="210" fill="#94a3b8" font-size="11" text-anchor="middle">2. Dönem 1. Değerlendirme Başarısı</text>
      </svg>`,
      caption: "2. Dönem 1. Değerlendirme Genç Yazılımcı Kupası"
    },
    section2: {
      title: "Hızlı Sınav Hatırlatmaları",
      subtitle: "Kendini son kez sına:",
      layout: "cards-2",
      cards: [
        {
          title: "Akış Şeması Soruları",
          icon: "📐",
          desc: "Hızlı cevaplar:",
          items: [
            { bold: "Soru 1", text: "Akış şemasında 'Evet/Hayır' diye iki kola ayrılan şekil? (Eşkenar Dörtgen)" },
            { bold: "Soru 2", text: "Hesaplama ve eylem yapılan dikdörtgen şeklin adı? (İşlem Kutusu)" },
            { bold: "Soru 3", text: "Koddaki hatayı bulup düzeltmeye ne ad verilir? (Debugging)" }
          ]
        },
        {
          title: "Scratch ve Döngü Soruları",
          icon: "🐱",
          desc: "Kodlama kuralları:",
          items: [
            { bold: "Soru 4", text: "Kare çizmek için döngü kaç kez tekrarlanmalıdır? (4 kez)" },
            { bold: "Soru 5", text: "Scratch'te kodları başlatan buton? (Yeşil Bayrak)" },
            { bold: "Soru 6", text: "Karakterlerin oynadığı tiyatro alanına ne denir? (Sahne)" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kodlama Şampiyonası'",
      subtitle: "Akıllı tahtada açılan 10 soruluk interaktif sınavı tamamlayıp sertifikamızı alıyoruz.",
      steps: [
        { title: "Soruları Dikkatle Oku", desc: "Tahtadaki şema ve blok sorularını sırayla inceleyin." },
        { title: "Doğru Seçeneği İşaretle", desc: "Süreniz dolmadan doğru cevabı söyleyin." },
        { title: "Şampiyonluk Dansı", desc: "100 tam puanla 3. Sınıf Kodlama Lideri unvanını kutlayın." }
      ],
      criteria: [
        "Akış şeması sembollerini ve anlamlarını eksiksiz bilme",
        "Scratch arayüz bileşenlerini doğru tanıyabilme",
        "Algoritmik problem çözme mantığını sorular üzerinde kanıtlama"
      ]
    },
    tips: {
      safetyTitle: "Sınav Tavsiyeleri",
      safetyRules: [
        { bold: "Görsellere İyi Bak", text: "Sorunun yanındaki akış şeması oklarını parmağınla takip et." },
        { bold: "Acele Etme", text: "Her soruyu dikkatle okuyacak bolca vaktin var." },
        { bold: "Gelecek Hafta Animasyon", text: "Haftaya Scratch'te karakterleri zıplatma ve koşturma başlıyor!" }
      ],
      myths: [
        { wrong: "Sınavda yanlış yaparsam yazılımcı olamam.", correct: "Hata yapmak yazılımcılığın ilk kuralıdır! Önemli olan hatadan ders çıkarıp doğrusunu öğrenmektir." }
      ]
    },
    quiz: {
      question: "Scratch'te bir karakterin sürekli olarak sağa doğru yürümesini ve hiç durmamasını sağlamak için hangi kontrol bloğu kullanılır?",
      options: [
        { text: "A) 1 Defa Yap", isCorrect: false },
        { text: "B) Sürekli Tekrarla (Forever Loop)", isCorrect: true },
        { text: "C) Durdur Hepsi", isCorrect: false },
        { text: "D) 1 Saniye Bekle", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Sürekli Tekrarla' bloğu, içindeki kodları kırmızı durdurma butonuna basılana kadar hiç durmadan sonsuz döngüyle çalıştırır."
    },
    summaryRules: [
      { bold: "Büyük Başarı", text: "2. dönemin ilk yazılı değerlendirmesini tamamladık." },
      { bold: "Kodlama Ustası", text: "Şemaları ve blokları başarıyla birleştirdik." },
      { bold: "Gelecek Hafta", text: "Karakterleri Hareket Ettirme ve X-Y Koordinat Düzlemi!" }
    ],
    homework: "Scratch'te kendi hayal ettiğiniz bir karakterin neler yapmasını istediğinizi 3 madde halinde yazın.",
    nextWeekPreview: "Karakterleri Hareket Ettirme: Mavi Bloklar, X ve Y Koordinatları ile Sahne Dansı!"
  },

  // 30. HAFTA
  {
    week: 30,
    date: "05 - 11 Nisan",
    hours: "2 Ders Saati",
    unit: "5. Tema: Blok Tabanlı Programlama (Scratch / Code.org)",
    unitBadge: "5. Tema",
    unitTheme: "tema-5",
    title: "Karakterleri Hareket Ettirme ve Koordinat Düzlemi (X-Y)",
    subtitle: "Mavi Bloklar, Adım Git, Derece Dön, X (Sağ-Sol) ve Y (Yukarı-Aşağı) Eksenleri",
    outcomeCode: "BTY.3.5.3 (Koordinat Sistemi & Hareket)",
    targetSkill: "Karakterleri Belirli Yön ve Koordinatlara (X, Y) Gönderebilme, Sayı Parametrelerini Yönetme",
    curiosityQuestion: "Uçaklar gökyüzünde veya gemiler okyanusta yollarını kaybeder mi? Bilgisayar ekranındaki bir kedi nerede durduğunu nasıl tam olarak bilir?",
    roadmap: [
      { title: "Mavi Hareket Blokları", desc: "Adım git, derece dön, konuma git ve süzülerek ilerle." },
      { title: "X Ekseni (Yatay Cadde)", desc: "Sağa giderken X artar (+), sola giderken X azalır (-)." },
      { title: "Y Ekseni (Dikey Asansör)", desc: "Yukarı çıkarken Y artar (+), aşağı inerken Y azalır (-)." },
      { title: "Merkez Noktası (X:0, Y:0)", desc: "Sahnenin tam ortasındaki sıfır noktası (Kuklanın evi)." }
    ],
    section1: {
      title: "Sahnenin Haritası: X ve Y Koordinatları",
      subtitle: "Scratch sahnesi aslında dev bir koordinat ızgarasıdır:",
      layout: "split-visual",
      card: {
        title: "X ve Y Eksenlerinin Sırrı",
        icon: "🧭",
        desc: "Karakterimizin ekrandaki adresini belirleyen iki sayı:",
        items: [
          { bold: "X Ekseni (Sağ ve Sol)", text: "Yatay caddedir. Sağa doğru +240'a kadar gider, sola doğru -240'a kadar iner." },
          { bold: "Y Ekseni (Yukarı ve Aşağı)", text: "Dikey gökdelendir. Yukarıya doğru +180'e kadar çıkar, aşağıya doğru -180'e kadar iner." },
          { bold: "X:0, Y:0 Noktası", text: "Sahnenin tam kalbidir; karakterinizi ortaya getirmek için 'x:0 y:0 konumuna git' bloğu kullanılır." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Koordinat Düzlemi -->
        <!-- X Ekseni (Yatay Çizgi) -->
        <line x1="45" y1="125" x2="375" y2="125" stroke="#3b82f6" stroke-width="2.5"/>
        <!-- Y Ekseni (Dikey Çizgi) -->
        <line x1="210" y1="35" x2="210" y2="215" stroke="#f43f5e" stroke-width="2.5"/>
        <!-- Eksen Etiketleri -->
        <text x="365" y="118" fill="#60a5fa" font-size="11" font-weight="900">+X (Sağ)</text>
        <text x="55" y="118" fill="#60a5fa" font-size="11" font-weight="900">-X (Sol)</text>
        <text x="220" y="50" fill="#f87171" font-size="11" font-weight="900">+Y (Yukarı)</text>
        <text x="220" y="210" fill="#f87171" font-size="11" font-weight="900">-Y (Aşağı)</text>
        <!-- Merkez Noktası (0,0) -->
        <circle cx="210" cy="125" r="6" fill="#fde68a"/>
        <text x="200" y="145" fill="#fde68a" font-size="10" font-weight="bold">(0,0)</text>
        <!-- Sevimli Kedi Kuklası Merkezde -->
        <text x="210" y="120" font-size="24" text-anchor="middle">🐱</text>
        <rect x="270" y="160" width="120" height="40" rx="6" fill="#1e293b" stroke="#3b82f6"/>
        <text x="330" y="178" fill="#fff" font-size="9" text-anchor="middle">x: 0 y: 0 konumuna git</text>
        <text x="330" y="192" fill="#38bdf8" font-size="8" text-anchor="middle">Merkeze Çağırma Bloğu</text>
      </svg>`,
      caption: "Scratch Sahnesinde X ve Y Koordinat Eksenleri"
    },
    section2: {
      title: "Mavi Hareket Bloklarının Süper Güçleri",
      subtitle: "Karakterimize hayat veren en önemli mavi bloklar:",
      layout: "cards-2",
      cards: [
        {
          title: "Adım Gitme ve Yön Değiştirme",
          icon: "🏃‍♂️",
          desc: "Karakteri koşturma komutları:",
          items: [
            { bold: "10 Adım Git", text: "Baktığı yöne doğru düz bir çizgi halinde 10 piksel yürür." },
            { bold: "90 Derece Yönüne Dön", text: "Kafasını tam sağa çevirir (Sol için -90, yukarı için 0, aşağı için 180)." },
            { bold: "Kenara Geldiyse Sek", text: "Karakter ekranın sınırına çarptığında top gibi geri döner." }
          ]
        },
        {
          title: "Süzülerek İlerleme (Gliding)",
          icon: "🚀",
          desc: "Işınlanmak yerine yumuşakça kayarak gitme:",
          items: [
            { bold: "1 Saniyede (X, Y) Konumuna Git", text: "Karakter hedefe adeta uçarak, zarif bir animasyonla süzülür." },
            { bold: "Rastgele Konuma Git", text: "Karakter sahnede beklenmedik bir yere sürpriz şekilde zıplar." },
            { bold: "Fare İmlecine Doğru Dön", text: "Gözleriyle parmağınızı veya farenizi takip eder." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Sahne Dansı ve Sekme'",
      subtitle: "Kedi kuklasını ekranın kenarlarından seken bir pinpon topu gibi kodluyoruz.",
      steps: [
        { title: "Yeşil Bayrak ve Başlangıç", desc: "Yeşil bayrak altına 'x:0 y:0 konumuna git' ve '90 yönüne dön' bloklarını takın." },
        { title: "Sürekli Tekrarla Bloğu Ekle", desc: "Turuncu Kontrol menüsünden 'Sürekli Tekrarla' bloğunu sürükleyin." },
        { title: "Hareket ve Sekme Koy", desc: "İçine '10 Adım Git' ve 'Kenara Geldiyse Sek' bloklarını koyup bayrağa basın." }
      ],
      criteria: [
        "X ve Y koordinatlarının anlamını sahne üzerinde gösterebilme",
        "Karakteri kenara geldiğinde döndürebilme (Dönüş stilini ayarlama)",
        "Sürekli hareket döngüsü kurabilme"
      ]
    },
    tips: {
      safetyTitle: "Koordinat Ustası Tavsiyeleri",
      safetyRules: [
        { bold: "Ters Dönen Kedi Hatası", text: "Kedi duvardan sekince baş aşağı dönüyorsa, sol üstteki 'Dönüş İzni: Sadece Sağa-Sola' butonuna basın." },
        { bold: "Ekranda Kaybolan Karakter", text: "Karakteriniz ekranın dışına kaçtıysa 'x:0 y:0 konumuna git' bloğuna çift tıklayarak hemen eve çağırın!" },
        { bold: "Yavaşlatmak İçin", text: "Çok hızlı koşan bir kuklayı sakinleştirmek için döngünün içine '0.1 saniye bekle' bloğu ekleyin." }
      ],
      myths: [
        { wrong: "X ve Y sadece çok zor lise matematiğidir, 3. sınıflar anlayamaz.", correct: "Hiç de değil! X sadece sağ-sol caddesi, Y ise yukarı-aşağı asansörüdür. Haritayı anlayan her çocuk X ve Y'yi kolayca yönetir!" }
      ]
    },
    quiz: {
      question: "Scratch sahnesinde bir karakteri YUKARIYA DOĞRU zıplatmak veya gökyüzüne uçurmak için hangi değerini artırmalıyız?",
      options: [
        { text: "A) X değerini", isCorrect: false },
        { text: "B) Y değerini (+Y yönü)", isCorrect: true },
        { text: "C) Ses seviyesini", isCorrect: false },
        { text: "D) Dil ayarını", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Y ekseni dikey eksendir; yukarı çıkmak için Y değerini artırırız (+Y), aşağı inmek için ise azaltırız (-Y)."
    },
    summaryRules: [
      { bold: "X Ekseni", text: "Sağ (+) ve Sol (-) yatay koordinattır." },
      { bold: "Y Ekseni", text: "Yukarı (+) ve Aşağı (-) dikey koordinattır." },
      { bold: "(0, 0) Noktası", text: "Sahnenin tam ortasındaki sıcacık evdir." }
    ],
    homework: "Scratch sahnesinde (X:100, Y:100) noktasının sahnenin neresine (sağ üst, sol alt vb.) denk geldiğini defterinize çizin.",
    nextWeekPreview: "2. Dönem Ara Tatil: İnteraktif Akvaryum ve Doğa Simülasyonu Atölyesi!"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_TERM_2_PART1_GRADE3 = CURRICULUM_TERM_2_PART1_GRADE3;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CURRICULUM_TERM_2_PART1_GRADE3;
}
