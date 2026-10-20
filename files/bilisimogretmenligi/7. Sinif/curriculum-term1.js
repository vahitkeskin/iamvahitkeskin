/**
 * 7. Sınıf Teknoloji ve Tasarım - 1. Dönem 1. Bölüm (Hafta 1 - 10)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_GRADE7 = [
  // 1. HAFTA
  {
    week: 1,
    date: "14 - 20 Eylül",
    hours: "2 Ders Saati",
    unit: "1. ÜNİTE: TEKNOLOJİ VE TASARIM ÖĞRENİYORUM",
    unitBadge: "1. Ünite: Hafta 1",
    unitTheme: "tema-1",
    title: "Teknoloji ve Tasarım ile İlişkili Kavramlar",
    subtitle: "Buluş, İcat, Keşif, Bilim, Teknik, Tasarım, Endüstri 4.0/5.0, STEAM ve Yapay Zekâ",
    outcomeCode: "TT.7.1.1 & TT.7.1.2",
    targetSkill: "Kavramsal Sorgulama & Parça-Bütün İlişkisi Çözümleme",
    curiosityQuestion: "Tekerlek bir keşif midir, yoksa bir icat mıdır? Peki akıllı telefonlar bu kavramların neresinde yer alır?",
    roadmap: [
      { title: "Temel Kavramlar Sözlüğü", desc: "Keşif, buluş, bilim, teknik ve tasarım arasındaki farklar." },
      { title: "Teknoloji ve Tasarımın Bağı", desc: "Tasarım olmadan teknoloji, teknoloji olmadan tasarım gelişebilir mi?" },
      { title: "Yeni Nesil İnovasyon", desc: "Endüstri 4.0, Karanlık Fabrikalar ve Yapay Zekâ çağı." },
      { title: "Tasarım Alanları", desc: "Mimari-çevre, grafik ve endüstriyel tasarım örnekleri." }
    ],
    section1: {
      title: "Keşif, Buluş ve Tasarım Arasındaki Farklar",
      subtitle: "İnsanlığın doğayı anlama ve dünyayı dönüştürme yolculuğunun temel taşları.",
      layout: "split-visual",
      card: {
        title: "3 Temel Kavramın Karşılaştırması",
        icon: "💡",
        desc: "Birbirine sıkça karıştırılan kavramların net sınırları:",
        items: [
          { bold: "Keşif (Discovery)", text: "Zaten doğada var olan ama bilinmeyen bir şeyin ilk kez ortaya çıkarılmasıdır (Örn: Yerçekimi, Amerika kıtası, DNA yapısı)." },
          { bold: "Buluş / İcat (Invention)", text: "Daha önce var olmayan yeni bir alet, yöntem ya da ürünün insan zekasıyla üretilmesidir (Örn: Telefon, ampul, matbaa)." },
          { bold: "Tasarım (Design)", text: "Zihinde canlandırılan bir fikrin veya problemin estetik, işlevsel ve üretilebilir bir plana dökülmesidir." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#00f0ff" stroke-width="1.5"/>
        <text x="200" y="45" fill="#a5f3fc" font-size="12" font-weight="bold" text-anchor="middle">İnovasyon Ekosistemi</text>
        
        <!-- Merkez: Tasarım Çemberi -->
        <circle cx="200" cy="125" r="38" fill="#162038" stroke="#00f0ff" stroke-width="2.5"/>
        <text x="200" y="122" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">TASARIM</text>
        <text x="200" y="136" fill="#38bdf8" font-size="8" text-anchor="middle">Plan & Estetik</text>
        
        <!-- Sol: Bilim / Keşif -->
        <circle cx="85" cy="85" r="32" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="85" y="82" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">BİLİM</text>
        <text x="85" y="94" fill="#94a3b8" font-size="8" text-anchor="middle">ve Keşif</text>
        
        <!-- Sağ: Teknoloji / Üretim -->
        <circle cx="315" cy="85" r="32" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="315" y="82" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">TEKNİK</text>
        <text x="315" y="94" fill="#94a3b8" font-size="8" text-anchor="middle">ve Teknoloji</text>
        
        <!-- Alt: Endüstri 5.0 -->
        <rect x="135" y="180" width="130" height="28" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="200" y="198" fill="#e9d5ff" font-size="10" font-weight="bold" text-anchor="middle">ENDÜSTRİ 4.0 / 5.0</text>
        
        <!-- Bağlantı Çizgileri -->
        <path d="M115 95 L165 112" stroke="#34d399" stroke-width="2" stroke-dasharray="3 3"/>
        <path d="M285 95 L235 112" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3"/>
        <path d="M200 163 V180" stroke="#a855f7" stroke-width="2"/>
      </svg>`
    },
    section2: {
      title: "Teknoloji ve Tasarımın 3 Ana Dalı",
      subtitle: "Çevremizdeki her nesne bu 3 tasarım disiplininden birinin eseridir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Disiplin 1",
          title: "Endüstriyel Ürün Tasarımı",
          desc: "Seri üretilen tüketim eşyalarının hem güzel hem de kullanışlı hale getirilmesidir.",
          bullets: [
            "Ergonomik bir termos bardak veya elektrikli otomobil.",
            "Malzeme seçimi, dayanıklılık ve üretim maliyeti hesabı.",
            "Kullanıcının eline tam oturan akıllı telefon kasası."
          ]
        },
        {
          badge: "Disiplin 2 & 3",
          title: "Mimari ve Grafik Tasarım",
          desc: "Yaşadığımız mekânlar ve algıladığımız görsel mesajlar.",
          bullets: [
            "Mimari Tasarım: Depreme dayanıklı, ferah ve enerji üreten yeşil binalar.",
            "Grafik Tasarım: Kitap kapakları, logolar, uyarı tabelaları ve web arayüzleri.",
            "Her iki alan da insan hayatını kolaylaştırmayı hedefler."
          ]
        }
      ]
    },
    workshop: {
      title: "Kavram Ağacı & Ürün Çözümlemesi",
      subtitle: "Sınıftaki bir eşyayı (örn: akıllı tahta veya sırt çantası) teknoloji ve tasarım parçalarına ayırma.",
      steps: [
        { title: "Bir Ürün Seçin", desc: "Masanızdaki bir ürünü (kalemtraş, suluk veya saat) seçin." },
        { title: "Teknoloji Parçası", desc: "Bu ürün hangi malzeme, makine ve teknik bilgiyle üretilmiş?" },
        { title: "Tasarım Parçası", desc: "Hangi renkler, ergonomik hatlar ve estetik kararlar verilmiş?" }
      ],
      criteria: [
        "Keşif, buluş ve tasarım kavramlarını birbiriyle karıştırmadan ayırt edebilme",
        "Seçilen ürün üzerinde teknoloji ve tasarım bileşenlerini listeleyebilme",
        "Fikirlerini sınıfla saygılı ve özgüvenli şekilde paylaşabilme"
      ]
    },
    tips: {
      safetyTitle: "İnovasyon Zihniyeti İlkeleri",
      safetyRules: [
        { bold: "Merak Et ve Soru Sor", text: "'Bu alet neden böyle yapılmış, daha pratik olabilir miydi?' sorusu tüm buluşların başlangıcıdır." }
      ],
      myths: [
        { wrong: "Tasarım sadece bir şeyi süslemek ve güzel göstermektir.", correct: "Hayır! Steve Jobs'un dediği gibi: Tasarım sadece nasıl göründüğü değil, nasıl ÇALIŞTIĞIDIR!" }
      ]
    },
    quiz: {
      question: "Doğada zaten var olan fakat insanların henüz haberdar olmadığı bir fizik kuralının veya kıtanın ilk kez ortaya çıkarılmasına ne ad verilir?",
      options: [
        { text: "A) Buluş (İcat)", isCorrect: false },
        { text: "B) Keşif", isCorrect: true },
        { text: "C) Endüstriyel Tasarım", isCorrect: false },
        { text: "D) Patent", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Doğada var olanın bulunmasına <strong>Keşif</strong>; doğada olmayan yeni bir aygıtın üretilmesine <strong>İcat</strong> denir."
    },
    summaryRules: [
      { bold: "Keşif Bulur, İcat Üretir", text: "Tasarım ise onu insan için anlamlı ve kullanışlı kılar." },
      { bold: "Tasarım = İşlev + Estetik", text: "Sadece güzel değil, amaca uygun olmalıdır." },
      { bold: "Endüstri 4.0 Çağındayız", text: "Robotlar ve yapay zekâ tasarımı şekillendiriyor." }
    ],
    homework: "Evinizdeki bir eşyayı inceleyin: Bu eşya icat edilmeden önce insanlar o ihtiyacı nasıl gideriyordu? 3 cümleyle yazın.",
    nextWeekPreview: "Teknoloji ve Tasarım Ürünlerinin Günlük Hayattaki Rolü ve Karşılaştırılması!"
  },

  // 2. HAFTA
  {
    week: 2,
    date: "21 - 27 Eylül",
    hours: "2 Ders Saati",
    unit: "1. ÜNİTE: TEKNOLOJİ VE TASARIM ÖĞRENİYORUM",
    unitBadge: "1. Ünite: Hafta 2",
    unitTheme: "tema-1",
    title: "Teknoloji ve Tasarım Ürünlerinin Karşılaştırılması",
    subtitle: "Geçmişten Günümüze Değişim, Çevresel Sorunlar ve Güncel Gelişmeler",
    outcomeCode: "TT.7.1.3 & TT.7.1.4",
    targetSkill: "Karşılaştırma Yapma & Eleştirel Değerlendirme",
    curiosityQuestion: "100 yıl önceki bir ütü kömürle çalışıyordu; bugünkü akıllı ütüler ise kumaşı algılayıp kendi ısısını ayarlıyor. Bu dönüşümü sağlayan nedir?",
    roadmap: [
      { title: "Zaman İçinde Dönüşüm", desc: "Aynı amaca hizmet eden ürünlerin yüzyıl önceki ve bugünkü halleri." },
      { title: "Benzerlik ve Farklılıklar", desc: "Fonksiyon, malzeme, enerji tüketimi ve kullanıcı konforu." },
      { title: "Çevresel Etki ve Sürdürülebilirlik", desc: "Teknolojik ürünlerin karbon ayak izi ve geri dönüştürülebilirliği." },
      { title: "Gelişmeleri Değerlendirme Ölçütleri", desc: "Bir ürünün başarısını ölçen 4 kriter: Güvenlik, Hız, Tasarruf ve Estetik." }
    ],
    section1: {
      title: "Ürünlerin Evrimi: Dün ve Bugün",
      subtitle: "İhtiyaçlar aynı kalır ama teknolojinin sunduğu çözümler radikal şekilde değişir.",
      layout: "split-visual",
      card: {
        title: "Ürün Değerlendirme Kriterleri",
        icon: "⚖️",
        desc: "İki ürünü karşılaştırırken baktığımız temel göstergeler:",
        items: [
          { bold: "1. Malzeme ve Ağırlık", text: "Ağır döküm demirden hafif karbon fiber ve titanyum alaşımlara geçiş." },
          { bold: "2. Enerji Kaynağı", text: "Fosil yakıtlar ve kas gücünden elektrik ve yenilenebilir güneş pillerine dönüşüm." },
          { bold: "3. Akıllı Arayüzler", text: "Mekanik kollardan dokunmatik ekranlara ve sesli komut algılayıcılara geçiş." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="200" y="45" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">Telefonun 100 Yıllık Tasarım Evrimi</text>
        
        <!-- Geçmiş: Çevirmeli Telefon -->
        <g transform="translate(45, 70)">
          <rect x="0" y="0" width="130" height="120" rx="10" fill="#162038" stroke="#64748b"/>
          <circle cx="65" cy="55" r="28" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
          <!-- Ahize -->
          <rect x="20" y="15" width="90" height="12" rx="6" fill="#475569"/>
          <text x="65" y="100" fill="#94a3b8" font-size="9" font-weight="bold" text-anchor="middle">1920: Mekanik / Sabit</text>
          <text x="65" y="112" fill="#64748b" font-size="8" text-anchor="middle">Ağır, bakır kablolu</text>
        </g>
        
        <!-- Ok -->
        <path d="M190 130 H215" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#arr)"/>
        
        <!-- Bugün: Akıllı Telefon -->
        <g transform="translate(230, 70)">
          <rect x="0" y="0" width="125" height="120" rx="10" fill="#162038" stroke="#00f0ff" stroke-width="1.5"/>
          <rect x="15" y="12" width="95" height="75" rx="6" fill="#070b14"/>
          <circle cx="62" cy="100" r="6" fill="#00f0ff" opacity="0.4"/>
          <text x="62" y="52" fill="#00f0ff" font-size="18" text-anchor="middle">📱 🌐</text>
          <text x="62" y="100" fill="#e0f2fe" font-size="9" font-weight="bold" text-anchor="middle">2026: Akıllı & Mobil</text>
          <text x="62" y="112" fill="#38bdf8" font-size="8" text-anchor="middle">Hafif, yapay zekâlı</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Problem Tespiti ve İnovasyon Fırsatları",
      subtitle: "Günlük hayattaki aksaklıklar yeni bir tasarımın doğum yeridir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Problem Odaklı Bakış",
          title: "Ulaşım ve Şehir Yaşamı",
          desc: "Trafik sıkışıklığı, egzoz gazı ve park yeri yetersizliği.",
          bullets: [
            "Çözüm: Katlanabilir elektrikli bisikletler ve paylaşımlı scooterlar.",
            "Metrobüs ve raylı sistemlerin akıllı durak entegrasyonu.",
            "Tasarımcı önce sorunu derinlemesine anlar."
          ]
        },
        {
          badge: "Tüketim & Sürdürülebilirlik",
          title: "Ambalaj ve Tek Kullanımlıklar",
          desc: "Plastik atıkların doğada yüzlerce yıl kaybolmaması.",
          bullets: [
            "Çözüm: Mantar miselyumundan veya deniz yosunundan organik paketler.",
            "Yeniden doldurulabilir (refill) deterjan ve şampuan istasyonları.",
            "Döngüsel ekonomi modeliyle sıfır atık hedeflenir."
          ]
        }
      ]
    },
    workshop: {
      title: "Ürün Karşılaştırma Matrisi",
      subtitle: "Aynı görevi yapan iki farklı nesneyi 4 kritere göre kıyaslama.",
      steps: [
        { title: "İki Ürün Belirleyin", desc: "Örn: Mum ile LED El Feneri ya da Kara Tahta ile Akıllı Tahta." },
        { title: "Kriter Tablosu", desc: "Enerji verimliliği, güvenlik, taşınabilirlik ve maliyet puanı verin (1-5 arası)." },
        { title: "Yargıda Bulunun", desc: "Hangi ürün neden üstündür? Gelecekte bu ürün nasıl daha da gelişebilir?" }
      ],
      criteria: [
        "En az 3 farklı ölçüte dayalı nesnel karşılaştırma yapabilme",
        "Eski ve yeni ürün arasındaki teknolojik sıçramayı açıklayabilme",
        "Çevreye ve insana olan olumlu/olumsuz etkilerini tartışabilme"
      ]
    },
    tips: {
      safetyTitle: "Teknoloji Değerlendiricisinin Sorumluluğu",
      safetyRules: [
        { bold: "Planlı Eskitme Tuzağı", text: "Bazı ürünler bilerek 2 yıl sonra bozulsun diye tasarlanır. Sürdürülebilir tasarım tamir edilebilir olmalıdır." }
      ],
      myths: [
        { wrong: "En yeni çıkan ürün her zaman en iyisidir.", correct: "Bazen eski mekanik çözümler elektrik kesintisinde veya afet durumunda çok daha güvenilir ve hayat kurtarıcı olabilir." }
      ]
    },
    quiz: {
      question: "Günümüz akıllı teknoloji ürünlerini 50 yıl önceki atalarından ayıran en belirgin tasarım ve teknoloji farkı aşağıdakilerden hangisidir?",
      options: [
        { text: "A) Daha ağır ve büyük olmaları", isCorrect: false },
        { text: "B) Sensörler, yapay zekâ ve kablosuz bağlantıyla kişiselleşebilmeleri", isCorrect: true },
        { text: "C) Sadece kömürle çalışmaları", isCorrect: false },
        { text: "D) Hiç tamir edilememeleri", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Modern teknoloji ürünleri <strong>sensörler, mikroişlemciler ve yapay zekâ</strong> sayesinde kullanıcıyı tanır ve uyum sağlar."
    },
    summaryRules: [
      { bold: "İhtiyaç Sabit, Çözüm Dinamik", text: "Haberleşme ihtiyacı güvercinden uyduya evrildi." },
      { bold: "Ölçütle Değerlendir", text: "Hız, güvenlik, maliyet ve estetik dengesi." },
      { bold: "Gelecek Sürdürülebilirlikte", text: "Doğaya zarar vermeyen tasarımlar kazanacak." }
    ],
    homework: "Büyüklerinize çocukluklarında kullandıkları bir aleti (örn: radyo, çamaşır leğeni) sorun ve bugünkü haliyle farkını yazın.",
    nextWeekPreview: "Temel Tasarım İlkeleri: Çizgi, Renk, Doku ve Denge!"
  },

  // 3. HAFTA
  {
    week: 3,
    date: "28 Eylül - 04 Ekim",
    hours: "2 Ders Saati",
    unit: "2. ÜNİTE: TEMEL TASARIM",
    unitBadge: "2. Ünite: Hafta 1",
    unitTheme: "tema-2",
    title: "Sanat ve Tasarım Eleman ve İlkeleri",
    subtitle: "Görsel Dilin Alfabesi: Çizgi, Renk, Doku, Biçim, Denge, Ritim ve Oran-Orantı",
    outcomeCode: "TT.7.2.1 & TT.7.2.2",
    targetSkill: "Görsel Algılama & Sanatsal Yeniden Yorumlama",
    curiosityQuestion: "Bir ressamın tablosuna ya da bir araba tasarımına baktığımızda neden bazıları bize çok huzurlu, bazıları ise çok dinamik ve agresif gelir?",
    roadmap: [
      { title: "Tasarım Elemanları (Malzemeler)", desc: "Çizgi, renk, doku, alan, biçim ve form." },
      { title: "Tasarım İlkeleri (Tarif Kuralları)", desc: "Denge (simetrik/asimetrik), ritim, vurgu, kontrast ve bütünlük." },
      { title: "Göz Hareketi ve Odak Noktası", desc: "Tasarımcının izleyicinin gözünü istediği yere yönlendirme sanatı." },
      { title: "Mevcut Bir Ürünü Yeniden Yorumlama", desc: "Bağlamdan kopmadan estetik elemanlarla eseri dönüştürme." }
    ],
    section1: {
      title: "Görsel Dilin Yapı Taşları",
      subtitle: "Her tasarım tıpkı harflerden oluşan bir cümle gibi tasarım elemanlarından kurulur.",
      layout: "split-visual",
      card: {
        title: "Tasarım Elemanları ve İlkeleri",
        icon: "🎨",
        desc: "Elemanlar 'ne kullandığımız', ilkeler ise 'nasıl düzenlediğimiz'dir:",
        items: [
          { bold: "Çizgi ve Biçim", text: "Yatay çizgiler sakinlik, dikey çizgiler güç, eğik ve zikzak çizgiler hareket ve heyecan hissettirir." },
          { bold: "Renk ve Doku", text: "Sıcak renkler (kırmızı/sarı) dikkat çeker ve iştah açar; soğuk renkler (mavi/yeşil) güven ve teknoloji hissi verir." },
          { bold: "Denge ve Ritim", text: "Simetrik denge resmiyet ve ağırlık sunarken, asimetrik denge modernlik ve enerji katar." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#818cf8" stroke-width="1.5"/>
        <text x="200" y="45" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">Temel Tasarım İlkeleri Çarkı</text>
        
        <!-- 4 İlke Kutucuğu -->
        <!-- 1. Denge -->
        <g transform="translate(45, 65)">
          <rect x="0" y="0" width="145" height="60" rx="8" fill="#162038" stroke="#38bdf8"/>
          <text x="15" y="25" fill="#38bdf8" font-size="11" font-weight="bold">⚖️ DENGE</text>
          <text x="15" y="45" fill="#94a3b8" font-size="9">Simetrik & Asimetrik Eşitlik</text>
        </g>
        
        <!-- 2. Kontrast -->
        <g transform="translate(210, 65)">
          <rect x="0" y="0" width="145" height="60" rx="8" fill="#162038" stroke="#f59e0b"/>
          <text x="15" y="25" fill="#f59e0b" font-size="11" font-weight="bold">🌓 KONTRAST</text>
          <text x="15" y="45" fill="#94a3b8" font-size="9">Açık-Koyu, Zıtlık Gücü</text>
        </g>
        
        <!-- 3. Ritim -->
        <g transform="translate(45, 140)">
          <rect x="0" y="0" width="145" height="60" rx="8" fill="#162038" stroke="#34d399"/>
          <text x="15" y="25" fill="#34d399" font-size="11" font-weight="bold">🌊 RİTİM</text>
          <text x="15" y="45" fill="#94a3b8" font-size="9">Düzenli Tekrar & Akış</text>
        </g>
        
        <!-- 4. Vurgu -->
        <g transform="translate(210, 140)">
          <rect x="0" y="0" width="145" height="60" rx="8" fill="#162038" stroke="#f43f5e"/>
          <text x="15" y="25" fill="#f43f5e" font-size="11" font-weight="bold">🎯 VURGU</text>
          <text x="15" y="45" fill="#94a3b8" font-size="9">Odak Noktası (Focus)</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Yeniden Yorumlama (Re-Design)",
      subtitle: "Geleneksel bir eseri çağdaş tasarım ilkeleriyle geleceğe taşımak.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Tasarım Yöntemi",
          title: "Bağlamı Korumak",
          desc: "Eserin asıl ruhunu ve anlamını bozmadan yeni bir form vermek.",
          bullets: [
            "Örnek: Selçuklu geometrik motiflerinin modern bir akıllı telefon kılıfında kullanımı.",
            "Geleneksel çini desenlerinin metro istasyonuna uyarlanması.",
            "Tarihi kültürü teknolojiyle buluşturur."
          ]
        },
        {
          badge: "Estetik ve İşlev",
          title: "Kullanıcıya Dokunuş",
          desc: "İyi bir tasarım göze hitap ettiği kadar kullanımı da kolaylaştırır.",
          bullets: [
            "Gereksiz karmaşıklıktan kaçınmak (Minimalizm).",
            "Doğru font büyüklüğü ve okunabilirlik hiyerarşisi.",
            "Dokunma hissi (Pürüzsüz cam vs. kavrayıcı mat yüzey)."
          ]
        }
      ]
    },
    workshop: {
      title: "Geometrik Poster Yeniden Yorumlama",
      subtitle: "Çizgi, ritim ve kontrast ilkelerini kullanarak bir hayvan silüetini fütüristik tasarıma dönüştürme.",
      steps: [
        { title: "Silüet Seçin", desc: "Kartal, kurt veya at gibi güçlü bir hayvan figürü seçin." },
        { title: "Geometrik Parçalama", desc: "Figürü üçgen ve çizgilerle (Low-Poly tekniği) bölün." },
        { title: "Kontrast Renklendirme", desc: "Zıt renklerle ritim ve derinlik kazandırarak posteri tamamlayın." }
      ],
      criteria: [
        "En az 2 tasarım elemanı (çizgi, renk) ve 2 tasarım ilkesi (denge, kontrast) kullanma",
        "Eserin orijinal anlamını ve tanınabilirliğini kaybetmemesi",
        "Görsel kompozisyonda net bir odak noktası (vurgu) oluşturabilme"
      ]
    },
    tips: {
      safetyTitle: "Tasarımda Renk Uyumu",
      safetyRules: [
        { bold: "60-30-10 Kuralı", text: "Tasarımda %60 baskın renk, %30 ikincil renk, %10 ise sadece dikkat çekici vurgu rengi kullanılır." }
      ],
      myths: [
        { wrong: "Bir tasarımda ne kadar çok renk ve şekil olursa o kadar güzel olur.", correct: "Hayır! Fazla görsel kalabalık gözü yorar ve mesajı boğar; 'Az, çoktur' (Less is more) ilkesi esastır." }
      ]
    },
    quiz: {
      question: "Bir posterde izleyicinin gözünün ilk olarak gitmesini istediğimiz en önemli bölüme (örneğin indirim oranı ya da konser tarihi) verilen tasarım ilkesi hangisidir?",
      options: [
        { text: "A) Vurgu (Odak Noktası)", isCorrect: true },
        { text: "B) Ritim", isCorrect: false },
        { text: "C) Doku", isCorrect: false },
        { text: "D) Simetri", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Tasarımda en dikkat çekici öğenin öne çıkarılmasına <strong>Vurgu (Emphasis / Odak Noktası)</strong> denir."
    },
    summaryRules: [
      { bold: "Elemanlar Malzemedir", text: "Çizgi, renk, doku ve biçim tuğlalardır." },
      { bold: "İlkeler Mimarlıktır", text: "Denge, ritim, kontrast binayı ayakta tutar." },
      { bold: "Kültürden Geleceğe", text: "Geleneksel motifleri modern tasarımla birleştirdik." }
    ],
    homework: "Odanızda bulunan bir ürünün hangi tasarım ilkelerine göre üretildiğini 3 maddede listeleyin.",
    nextWeekPreview: "Temel Tasarımda Analoji: Doğadan ve Nesnelerden Benzeşim Kurma!"
  },

  // 4. HAFTA
  {
    week: 4,
    date: "05 - 11 Ekim",
    hours: "2 Ders Saati",
    unit: "2. ÜNİTE: TEMEL TASARIM",
    unitBadge: "2. Ünite: Hafta 2",
    unitTheme: "tema-2",
    title: "Tasarımda Analoji Yapabilme (Benzeşim)",
    subtitle: "Doğrudan ve Dolaylı Benzerlik: İlham Alma, İlişkilendirme ve Fikir Üretme",
    outcomeCode: "TT.7.2.3",
    targetSkill: "Analojik Düşünme & Çağrışımsal Tasarım",
    curiosityQuestion: "Hızlı trenlerin burnunun yalıçapkını kuşunun gagasına benzetilmesi sadece bir tesadüf müdür, yoksa bir mühendislik dehası mı?",
    roadmap: [
      { title: "Analoji Nedir?", desc: "Bilinmeyen bir durumu bilinen başka bir durumla ilişkilendirme sanatı." },
      { title: "Analoji Türleri", desc: "Doğrudan benzerlik (şekilsel), sembolik benzerlik ve işlevsel benzerlik." },
      { title: "Zihinsel Köprüler Kurma", desc: "Bir ceviz kabuğundan kaska, bir kaktüsten su deposuna giden fikir yolları." },
      { title: "Analojik Taslak Çizimi", desc: "Benzeşim fikrini kâğıt üzerinde somut bir ürüne dönüştürme." }
    ],
    section1: {
      title: "Analoji: Zihnin İlham Köprüsü",
      subtitle: "Tasarımcılar daha önce çözülmüş doğal ve yapay sistemleri inceleyerek yeni ürünler tasarlarlar.",
      layout: "split-visual",
      card: {
        title: "Analoji Yönteminin 3 Aşaması",
        icon: "🦉",
        desc: "Yaratıcı tasarımcıların izlediği benzeşim döngüsü:",
        items: [
          { bold: "1. Kaynak Tespiti (Source)", text: "Çözümü zaten barındıran bir canlı veya nesne gözlemlenir (Örn: Köpekbalığı derisi)." },
          { bold: "2. Özelliğin Ayrıştırılması", text: "Köpekbalığının derisindeki mikroskobik kanalların su direncini azalttığı fark edilir." },
          { bold: "3. Hedefe Aktarım (Target)", text: "Bu desen olimpiyat yüzücülerinin mayolarına ve denizaltı gövdelerine uygulanır!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="200" y="45" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">Analojik Tasarım Köprüsü</text>
        
        <!-- Sol: Kaynak (Kuş Gagası) -->
        <g transform="translate(45, 75)">
          <rect x="0" y="0" width="115" height="100" rx="8" fill="#162038" stroke="#34d399"/>
          <text x="57" y="30" fill="#34d399" font-size="22" text-anchor="middle">🐦</text>
          <text x="57" y="55" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Yalıçapkını Kuşu</text>
          <text x="57" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">Sessizce suya</text>
          <text x="57" y="88" fill="#94a3b8" font-size="8" text-anchor="middle">dalabilen sivri gaga</text>
        </g>
        
        <!-- Merkez Köprü Oku -->
        <g transform="translate(165, 115)">
          <path d="M0 10 H60" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#arr)"/>
          <text x="30" y="0" fill="#00f0ff" font-size="8" font-weight="bold" text-anchor="middle">ANALOJİ</text>
        </g>
        
        <!-- Sağ: Hedef Ürün (Hızlı Tren) -->
        <g transform="translate(240, 75)">
          <rect x="0" y="0" width="115" height="100" rx="8" fill="#162038" stroke="#00f0ff"/>
          <text x="57" y="30" fill="#00f0ff" font-size="22" text-anchor="middle">🚅</text>
          <text x="57" y="55" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Şinkansen Treni</text>
          <text x="57" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">Tünelden çıkarken</text>
          <text x="57" y="88" fill="#94a3b8" font-size="8" text-anchor="middle">patlama sesi yapmaz!</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Farklı Alanlarda Analoji Örnekleri",
      subtitle: "Doğadan, günlük nesnelerden ve mimariden ilham alan harika fikirler.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Biçimsel Analoji",
          title: "Görsel Benzerlik",
          desc: "Bir nesnenin dış görünüşünü başka bir kullanım alanına taşımak.",
          bullets: [
            "Pekin Olimpiyat Stadı'nın dev bir 'Kuş Yuvası'na benzetilmesi.",
            "Timsah ağzından esinlenilerek yapılan kıskaçlı pense aletleri.",
            "Görsel olarak tanıdık ve akılda kalıcı ürünler ortaya çıkar."
          ]
        },
        {
          badge: "İşlevsel Analoji",
          title: "Mekanizma Benzerliği",
          desc: "Görünüşü farklı olsa da çalışma prensibinin kopyalanması.",
          bullets: [
            "İnsan kolunun dirsek ve bilek yapısının endüstriyel robot kollara aktarılması.",
            "Yarasanın ses dalgalarıyla yön bulmasından radar sistemlerinin icadı.",
            "Mühendislik problemlerine sağlam çözümler üretir."
          ]
        }
      ]
    },
    workshop: {
      title: "Analojik İcat Atölyesi",
      subtitle: "Rastgele seçilen bir doğa unsuru ile bir günlük problemi analoji kurarak çözme.",
      steps: [
        { title: "Doğa Kartı Çekin", desc: "Örn: Bukalemun derisi, Kirpi dikenleri veya Karahindiba çiçeği tohumları." },
        { title: "Problem Kartı Seçin", desc: "Örn: Kırılan kargo paketleri, sıcakta eriyen dondurma veya bisiklet kilidi." },
        { title: "Analojik Taslak Çizin", desc: "Doğadaki özelliğin bu problemi nasıl çözeceğini şematik olarak kâğıda çizin." }
      ],
      criteria: [
        "Doğadaki kaynak ile tasarlanan hedef ürün arasında mantıklı bir bağ kurma",
        "Tasarımın çiziminde analojik benzerliğin açıkça gösterilmesi",
        "Ürüne özgün bir isim ve slogan belirleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Analoji Yaparken Dikkat",
      safetyRules: [
        { bold: "Birebir Kopyalamayın", text: "Analoji kopyalamak değil; prensibi anlayıp yeni bir problem için yeniden uyarlamaktır." }
      ],
      myths: [
        { wrong: "Analoji sadece resim çizmekte kullanılır.", correct: "Hayır! NASA'daki mühendisler uzay araçlarının iniş takımlarını tasarlarken çekirge bacaklarının analojisini kullanırlar." }
      ]
    },
    quiz: {
      question: "Japonya'daki hızlı trenlerin tünellere girerken çıkardığı gürültüyü önlemek için burnunun yalıçapkını kuşunun gagasına benzetilmesi hangi tasarım yöntemine örnektir?",
      options: [
        { text: "A) Analoji (Benzeşim Kurma)", isCorrect: true },
        { text: "B) Geri Dönüşüm", isCorrect: false },
        { text: "C) Kodlama Hatası", isCorrect: false },
        { text: "D) Planlı Eskitme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Doğadaki bir canlının aerodinamik gaga yapısını bir trene uyarlamak en başarılı <strong>Analoji</strong> örneklerindendir."
    },
    summaryRules: [
      { bold: "Doğa En Büyük Kütüphanedir", text: "Milyonlarca yıldır test edilmiş çözümler barındırır." },
      { bold: "Biçim ve İşlev Analojisi", text: "İster şeklini benzetin, ister çalışma mekanizmasını." },
      { bold: "Yaratıcı Çözüm Gücü", text: "Analojiyle sıra dışı icatlar üretiyoruz." }
    ],
    homework: "Kendi çantanızdaki bir nesneye bakın. Bu nesne doğada hangi canlıya veya nesneye benziyor? Resmini çizip yazın.",
    nextWeekPreview: "Sanat ve Tasarım Elemanlarıyla Özgün Bir Ürün Taslağı Oluşturma!"
  },

  // 5. HAFTA
  {
    week: 5,
    date: "12 - 18 Ekim",
    hours: "2 Ders Saati",
    unit: "2. ÜNİTE: TEMEL TASARIM",
    unitBadge: "2. Ünite: Hafta 3",
    unitTheme: "tema-2",
    title: "Özgün Bir Ürün Oluşturulabilmesi",
    subtitle: "Taslaktan Modele: Fikir Geliştirme, Eskiz Çizimi ve Prototipleme",
    outcomeCode: "TT.7.2.4",
    targetSkill: "Özgün Tasarım Geliştirme & Taslak Çizimi",
    curiosityQuestion: "Bir mimar veya otomobil tasarımcısı aklına gelen harika bir fikri hemen fabrikaya mı gönderir, yoksa önce onlarca taslak kâğıdı mı doldurur?",
    roadmap: [
      { title: "Tasarım Fikrinin Doğuşu", desc: "Beyin fırtınası, zihin haritaları ve karalama eskizleri." },
      { title: "Taslak (Eskiz) Nedir?", desc: "Ölçüsüz, serbest elle çizilen ilk fikir krokileri." },
      { title: "Detaylandırma ve Ölçülendirme", desc: "Malzeme bilgisi, renk paleti ve kullanım talimatları." },
      { title: "Ürüne Dönüştürme", desc: "Kâğıttan 3 boyutlu ilk basit karton modele (Mock-up) geçiş." }
    ],
    section1: {
      title: "Taslaktan Ürüne: Eskiz Sanatı",
      subtitle: "Fikirlerin uçup gitmesini önleyen en hızlı araç bir kurşun kalem ve beyaz bir kâğıttır.",
      layout: "split-visual",
      card: {
        title: "Tasarım Taslağında Neler Bulunmalıdır?",
        icon: "✏️",
        desc: "Bir tasarım eskizinin sadece bir resimden farkı:",
        items: [
          { bold: "1. Çoklu Bakış Açıları", text: "Ürünün sadece önden değil; üstten ve yandan görünüşleri de çizilir." },
          { bold: "2. Açıklama Okları (Callouts)", text: "Hangi parçanın hangi malzemeden (ahşap, alüminyum, silikon) yapılacağı belirtilir." },
          { bold: "3. Boyut İpuçları", text: "Kullanıcının boyuna ve eline uygunluğunu gösteren tahmini ölçüler (cm/mm)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="200" y="45" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Tasarım Taslağı (Eskiz / Blueprint) Anatomisi</text>
        
        <!-- Eskiz Kâğıdı -->
        <rect x="50" y="65" width="160" height="135" rx="6" fill="#1e293b" stroke="#64748b" stroke-dasharray="2 2"/>
        <!-- Çizilen Ürün (Ergonomik Suluk) -->
        <path d="M100 90 C100 80 160 80 160 90 V170 C160 180 100 180 100 170 Z" stroke="#38bdf8" stroke-width="2" fill="none"/>
        <line x1="85" y1="120" x2="100" y2="120" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="80" y="123" fill="#fde68a" font-size="8" text-anchor="end">Silikon Tutamaç</text>
        
        <line x1="160" y1="95" x2="185" y2="85" stroke="#34d399" stroke-width="1.5"/>
        <text x="190" y="87" fill="#a7f3d0" font-size="8">Akıllı Sıcaklık Kapağı</text>
        
        <!-- Sağ Açıklama Paneli -->
        <g transform="translate(235, 75)">
          <rect x="0" y="0" width="125" height="120" rx="8" fill="#162038" stroke="#334155"/>
          <text x="62" y="25" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">TASARIM AŞAMALARI</text>
          <text x="15" y="50" fill="#38bdf8" font-size="8">1. Fikir Bulma</text>
          <text x="15" y="70" fill="#f59e0b" font-size="8">2. Hızlı Eskiz (Draft)</text>
          <text x="15" y="90" fill="#34d399" font-size="8">3. Ölçülendirme</text>
          <text x="15" y="110" fill="#a855f7" font-size="8">4. Prototip Üretimi</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Özgünlük ve İnovasyon Kriterleri",
      subtitle: "Bir ürünü diğerlerinden ayıran ve değerli kılan temel nitelikler.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Özgünlük (Originality)",
          title: "Benzerlerinden Farklı Olmak",
          desc: "Piyasada zaten olan bir şeyi aynen yapmak tasarım değildir.",
          bullets: [
            "Mevcut ürünlerin çözemediği bir eksikliği gidermek.",
            "Yeni bir kullanım kolaylığı veya estetik dokunuş eklemek.",
            "Tasarımcının kendi imzasını ve yaratıcılığını taşıması."
          ]
        },
        {
          badge: "Üretilebilirlik",
          title: "Hayalden Gerçeğe",
          desc: "Tasarım sadece bir fantezi değil, gerçekten imal edilebilir olmalıdır.",
          bullets: [
            "Malzeme dayanıklılığı hesaba katılmalıdır.",
            "Kullanıcı güvenliği tehlikeye atılmamalıdır.",
            "Ekonomik ve çevre dostu üretim yöntemleri tercih edilmelidir."
          ]
        }
      ]
    },
    workshop: {
      title: "Kişisel Tasarım Atölyesi: Akıllı Çalışma Masası Aleti",
      subtitle: "Öğrencilerin masalarındaki dağınıklığı toparlayan veya ders çalışmayı kolaylaştıran özgün bir alet taslağı çizmesi.",
      steps: [
        { title: "İhtiyacı Belirle", desc: "Kalemler mi kayboluyor, telefon mu düşüyor, not kâğıtları mı uçuyor?" },
        { title: "Eskizini Çiz", desc: "A4 kâğıdına en az 2 farklı açıdan ürünün taslağını çizin." },
        { title: "Detayları Etiketle", desc: "Malzemesini, boyutunu ve nasıl çalıştığını oklarla gösterin." }
      ],
      criteria: [
        "Tasarımın özgün ve kopya olmayan bir fikir barındırması",
        "Çizimde açıklayıcı oklar ve malzeme detaylarının bulunması",
        "Ürünün fonksiyonel ve üretilebilir bir mantığa dayanması"
      ]
    },
    tips: {
      safetyTitle: "Tasarımcının Çizim Alışkanlıkları",
      safetyRules: [
        { bold: "Silgi Kullanmaktan Korkmayın", text: "İlk çizgi asla mükemmel olmaz. Taslaklar karalandıkça ve defalarca düzeltildikçe güzelleşir." }
      ],
      myths: [
        { wrong: "Tasarımcı olmak için usta bir ressam kadar güzel resim çizmek şarttır.", correct: "Hayır! Tasarımda önemli olan sanatsal süsleme değil; fikrin, ölçülerin ve parçaların anlaşılır şekilde aktarılmasıdır." }
      ]
    },
    quiz: {
      question: "Bir tasarım fikrinin zihinden kâğıda aktarılırken ölçüsüz, serbest elle ve hızlıca çizilen ilk fikir çizimlerine ne ad verilir?",
      options: [
        { text: "A) Taslak (Eskiz / Draft)", isCorrect: true },
        { text: "B) Fabrika Montaj Hattı", isCorrect: false },
        { text: "C) Patent Belgesi", isCorrect: false },
        { text: "D) Kullanım Kılavuzu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Bir tasarımın ilk karalama ve fikir çizimlerine <strong>Taslak (Eskiz)</strong> denir."
    },
    summaryRules: [
      { bold: "Fikir -> Taslak -> Ürün", text: "İnovasyon bu 3 basamakla gerçeğe dönüşür." },
      { bold: "Açıklama Okları Ekleyin", text: "Hangi parça neden orada açıkça yazılmalıdır." },
      { bold: "Özgün Olun", text: "Kendi tarzınızı tasarıma yansıtın." }
    ],
    homework: "Çizdiğiniz taslağı evdeki karton, pipet veya pet şişe gibi artık malzemelerle basit bir maket haline getirin.",
    nextWeekPreview: "Tasarım Odaklı Süreç: Problemi Tanımlama ve Değişkenleri Belirleme!"
  },

  // 6. HAFTA
  {
    week: 6,
    date: "19 - 25 Ekim",
    hours: "2 Ders Saati",
    unit: "3. ÜNİTE: TASARIM ODAKLI SÜREÇ",
    unitBadge: "3. Ünite: Hafta 1",
    unitTheme: "tema-3",
    title: "Tasarım Süreci Basamakları & Problemi Çözümleme",
    subtitle: "Tasarım Odaklı Düşünme (Design Thinking): Empati, Tanımlama, Fikir ve Kriterler",
    outcomeCode: "TT.7.3.1",
    targetSkill: "Problem Çözümleme & Değişkenleri ve Ölçütleri Sınıflandırma",
    curiosityQuestion: "Dünyanın en iyi mühendisleri bir problemi çözerken neden çözüme atlamadan önce vaktin büyük kısmını problemi anlamaya harcarlar?",
    roadmap: [
      { title: "Tasarım Odaklı Düşünme Nedir?", desc: "İnsan merkezli problem çözme felsefesi (Design Thinking)." },
      { title: "Sürecin 5 Ana Basamağı", desc: "Empati Kur -> Problemi Tanımla -> Fikir Üret -> Prototip Yap -> Test Et." },
      { title: "Değişkenler ve Kriterler", desc: "Tasarımın önündeki engeller: Bütçe, zaman, malzeme ve dayanıklılık." },
      { title: "Problemi Parçalarına Ayırma", desc: "Dev bir sorunu küçük ve yönetilebilir parçalara bölme sanatı." }
    ],
    section1: {
      title: "Tasarım Odaklı Düşünmenin 5 Adımı",
      subtitle: "Stanford ve MIT gibi dünya lideri üniversitelerin geliştirdiği evrensel inovasyon metodolojisi.",
      layout: "split-visual",
      card: {
        title: "Tasarım Döngüsü (Design Loop)",
        icon: "🔄",
        desc: "Bir mühendis veya tasarımcı bu 5 adımı takip eder:",
        items: [
          { bold: "1. Empati Kur", text: "Kullanıcının neye üzüldüğünü, nerede zorlandığını dinle ve hisset." },
          { bold: "2. Problemi Tanımla", text: "'Nasıl yapabiliriz ki...' sorusuyla net bir hedef cümle belirle." },
          { bold: "3. Fikir Üret", text: "Çılgın fikirler dahil onlarca alternatif üret, sınırları zorla." },
          { bold: "4. Prototiple", text: "Fikri eline alabileceğin karton, kil veya dijital modele dök." },
          { bold: "5. Test Et & Geliştir", text: "Kullanıcıya denet, geri bildirim al ve hataları düzelt." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#818cf8" stroke-width="1.5"/>
        <text x="200" y="42" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">5 Adımlı Tasarım Odaklı Düşünme Döngüsü</text>
        
        <!-- 5 Daire Zinciri -->
        <g transform="translate(30, 85)">
          <!-- 1. Empati -->
          <circle cx="28" cy="28" r="24" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
          <text x="28" y="25" fill="#38bdf8" font-size="14" text-anchor="middle">❤️</text>
          <text x="28" y="40" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">1. Empati</text>
          
          <path d="M54 28 H68" stroke="#64748b" stroke-width="2"/>
          
          <!-- 2. Tanımla -->
          <circle cx="98" cy="28" r="24" fill="#162038" stroke="#f59e0b" stroke-width="2"/>
          <text x="98" y="25" fill="#f59e0b" font-size="14" text-anchor="middle">🎯</text>
          <text x="98" y="40" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">2. Tanımla</text>
          
          <path d="M124 28 H138" stroke="#64748b" stroke-width="2"/>
          
          <!-- 3. Fikir -->
          <circle cx="168" cy="28" r="24" fill="#162038" stroke="#00f0ff" stroke-width="2"/>
          <text x="168" y="25" fill="#00f0ff" font-size="14" text-anchor="middle">💡</text>
          <text x="168" y="40" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">3. Fikir</text>
          
          <path d="M194 28 H208" stroke="#64748b" stroke-width="2"/>
          
          <!-- 4. Prototip -->
          <circle cx="238" cy="28" r="24" fill="#162038" stroke="#34d399" stroke-width="2"/>
          <text x="238" y="25" fill="#34d399" font-size="14" text-anchor="middle">🔨</text>
          <text x="238" y="40" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">4. Prototip</text>
          
          <path d="M264 28 H278" stroke="#64748b" stroke-width="2"/>
          
          <!-- 5. Test -->
          <circle cx="308" cy="28" r="24" fill="#162038" stroke="#ec4899" stroke-width="2"/>
          <text x="308" y="25" fill="#ec4899" font-size="14" text-anchor="middle">🧪</text>
          <text x="308" y="40" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">5. Test</text>
        </g>
        
        <!-- Geri Bildirim Döngü Oku -->
        <path d="M338 113 C338 160 58 160 58 113" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4 3" fill="none"/>
        <text x="200" y="165" fill="#e9d5ff" font-size="8" text-anchor="middle">Geri Bildirim Döngüsü (Hata Bulunca Başa Dön)</text>
      </svg>`
    },
    section2: {
      title: "Değişkenler ve Tasarım Kriterleri",
      subtitle: "Tasarımın sınırlarını çizen gerçek dünya kısıtlamaları.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Kriter Türleri",
          title: "Ölçütler (Criteria)",
          desc: "Tasarımın mutlaka sağlaması gereken başarı standartlarıdır.",
          bullets: [
            "Güvenlik: Kesici köşe veya zehirli boya içermemesi.",
            "Ergonomi: 7. sınıf öğrencisinin sırtında ağırlık yapmaması.",
            "Estetik: Gençlerin severek kullanacağı modern renkler."
          ]
        },
        {
          badge: "Kısıtlamalar",
          title: "Kısıtlar (Constraints)",
          desc: "Tasarımcının hareket alanını daraltan sınırlar.",
          bullets: [
            "Bütçe: Ürünün satış fiyatının makul seviyede kalması.",
            "Zaman: Dönem sonu sergisine kadar bitirilme zorunluluğu.",
            "Malzeme: Kolay bulunabilir ve geri dönüştürülebilir olması."
          ]
        }
      ]
    },
    workshop: {
      title: "Problem Tanımlama Laboratuvarı",
      subtitle: "Okuldaki gerçek bir sorunu 5N1K yöntemiyle net bir tasarım problemine dönüştürme.",
      steps: [
        { title: "Sorunu Gözlemle", desc: "Örn: Yağmurlu günlerde ıslak şemsiyelerin sınıfta yerleri göle çevirmesi." },
        { title: "Hedef Cümleyi Yaz", desc: "'Öğrencilerin ıslak şemsiyelerini çevreye su damlatmadan kurutabilecekleri ekonomik bir düzenek nasıl tasarlanabilir?'" },
        { title: "Ölçüt ve Kısıtları Belirle", desc: "Ölçüt: 5 dakikada suyu süzmeli. Kısıt: Elektrik prizine ihtiyaç duymamalı." }
      ],
      criteria: [
        "Problemi kişiselleştirmeden nesnel bir cümleyle tanımlayabilme",
        "En az 2 ölçüt ve 2 kısıtlamayı listeye dökebilme",
        "Tasarım odaklı düşünmenin basamaklarını doğru sırayla kavrama"
      ]
    },
    tips: {
      safetyTitle: "İnovasyon Odaklı Düşünce",
      safetyRules: [
        { bold: "Hemen Çözüme Koşmayın", text: "Einstein demiştir ki: 'Bir problemi çözmek için 1 saatim olsa, 55 dakikasını problemi düşünmeye, 5 dakikasını çözüme ayırırım.'" }
      ],
      myths: [
        { wrong: "Tasarım süreci baştan sona dümdüz bir çizgidir.", correct: "Hayır! Tasarım süreci döngüseldir (iteratif); test aşamasında hata bulursanız fikir aşamasına geri dönersiniz." }
      ]
    },
    quiz: {
      question: "Tasarım odaklı düşünme (Design Thinking) metodolojisinde, ürün prototipini yapmadan hemen önce gelen ve onlarca alternatif çözümün arandığı aşama hangisidir?",
      options: [
        { text: "A) Fikir Üretme (Ideate)", isCorrect: true },
        { text: "B) Test Etme", isCorrect: false },
        { text: "C) Patent Alma", isCorrect: false },
        { text: "D) Seri Üretim", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Empati ve tanımlama adımlarından sonra zengin fikirlerin havada uçuştuğu aşama <strong>Fikir Üretme (Ideate)</strong> basamağıdır."
    },
    summaryRules: [
      { bold: "Empatiyle Başla", text: "Kullanıcıyı anlamadan iyi ürün tasarlanamaz." },
      { bold: "Kriterleri Belirle", text: "Ölçütler hedeftir, kısıtlar ise sınırlarımız." },
      { bold: "Hata Yapmaktan Korkma", text: "Her hata tasarımı mükemmelleştiren derstir." }
    ],
    homework: "Evinizde ailenizin zorlandığı bir konuyu belirleyin ve 'Nasıl yapabiliriz ki...' şablonuyla 1 cümlelik tasarım problemi yazın.",
    nextWeekPreview: "29 Ekim Cumhuriyet Bayramı & Tasarım Problemini Alt Parçalara Ayrıştırma!"
  },

  // 7. HAFTA
  {
    week: 7,
    date: "26 Ekim - 01 Kasım",
    hours: "2 Ders Saati",
    unit: "3. ÜNİTE: TASARIM ODAKLI SÜREÇ",
    unitBadge: "3. Ünite: Hafta 2",
    unitTheme: "tema-3",
    title: "29 Ekim Cumhuriyet Bayramı & Problemi Parçalara Ayırma",
    subtitle: "Büyük Sorunları Yönetilebilir Alt Bileşenlere Bölme ve Ayrıştırma Yöntemleri",
    outcomeCode: "TT.7.3.1 (b)",
    targetSkill: "Karmaşık Problemleri Ayrıştırma (Decomposition)",
    curiosityQuestion: "Cumhuriyetimizin ilk yıllarında demir ağlar ve fabrikalar kurulurken devasa kalkınma projeleri tek bir hamlede mi yapıldı, yoksa adım adım planlanarak mı?",
    roadmap: [
      { title: "Cumhuriyet ve Sanayileşme", desc: "Atatürk'ün bilime, tekniğe ve yerli üretime verdiği önem." },
      { title: "Ayrıştırma (Decomposition)", desc: "Karmaşık bir problemi küçük parçalara bölerek çözme tekniği." },
      { title: "Tasarım Ağacı Modeli", desc: "Ana problem -> Alt sistemler -> Parçalar hiyerarşisi." },
      { title: "Kızılay Haftası & Yardım Tasarımı", desc: "Afet anında hızlı kurulan çadır ve lojistik sistemlerin analizi." }
    ],
    section1: {
      title: "Ayrıştırma: Mühendisliğin Süper Gücü",
      subtitle: "Büyük bir fili tek lokmada yiyemezsiniz; ama küçük dilimlere bölerseniz başarabilirsiniz.",
      layout: "split-visual",
      card: {
        title: "Tasarım Ağacı Yöntemi",
        icon: "🌲",
        desc: "Bir bisiklet tasarımını alt sistemlerine ayırma örneği:",
        items: [
          { bold: "1. Taşıyıcı Sistem", text: "Gövde kadrosu, maşa, ağırlık merkezi ve malzeme dayanımı." },
          { bold: "2. Güç ve İletim Sistemi", text: "Pedallar, zincir, vites dişlileri ve tekerlek göbeği." },
          { bold: "3. Güvenlik ve Kontrol", text: "Fren telleri, gidon açısı, aydınlatma farı ve kask entegrasyonu." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fecdd3" font-size="11" font-weight="bold" text-anchor="middle">Problem Ayrıştırma Ağacı (Decomposition)</text>
        
        <!-- Tepe: Ana Tasarım Problemi -->
        <rect x="130" y="55" width="140" height="30" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="200" y="74" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Afet Çadırı Tasarımı</text>
        
        <!-- Bağlantı Dalları -->
        <path d="M200 85 V105" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M100 105 H300" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M100 105 V125" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M200 105 V125" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M300 105 V125" stroke="#94a3b8" stroke-width="1.5"/>
        
        <!-- Alt Parça 1: İskelet -->
        <rect x="50" y="125" width="100" height="45" rx="6" fill="#162038" stroke="#38bdf8"/>
        <text x="100" y="142" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">1. İskelet</text>
        <text x="100" y="158" fill="#94a3b8" font-size="8" text-anchor="middle">Hafif, katlanır boru</text>
        
        <!-- Alt Parça 2: Yalıtım -->
        <rect x="150" y="125" width="100" height="45" rx="6" fill="#162038" stroke="#f59e0b"/>
        <text x="200" y="142" fill="#f59e0b" font-size="9" font-weight="bold" text-anchor="middle">2. Yalıtım</text>
        <text x="200" y="158" fill="#94a3b8" font-size="8" text-anchor="middle">Su ve rüzgâr geçirmez</text>
        
        <!-- Alt Parça 3: Enerji -->
        <rect x="250" y="125" width="100" height="45" rx="6" fill="#162038" stroke="#34d399"/>
        <text x="300" y="142" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">3. Enerji</text>
        <text x="300" y="158" fill="#94a3b8" font-size="8" text-anchor="middle">Güneş panelli çatı</text>
        
        <text x="200" y="198" fill="#cbd5e1" font-size="9" text-anchor="middle">Parçalara ayrılan her sorun çok daha kolay çözülür!</text>
      </svg>`
    },
    section2: {
      title: "29 Ekim Coşkusu ve Milli Teknoloji Hamlesi",
      subtitle: "Cumhuriyetimizin temeli üreten, tasarlayan ve bağımsız çalışan beyinlerle atılmıştır.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Tarihten İlham",
          title: "Vecihi Hürkuş ve Nuri Demirağ",
          desc: "Cumhuriyetin ilk yerli uçak ve demiryolu tasarımcılarının azmi.",
          bullets: [
            "İmkânsızlıklar içinde çizilen ilk yerli tayyare taslakları.",
            "Kendi teknolojisini üretemeyen toplumlar bağımsız kalamaz ilkesi.",
            "Bugünün İHA ve SİHA başarılarının temel taşları."
          ]
        },
        {
          badge: "Sosyal Sorumluluk",
          title: "Kızılay ve İnsani Tasarım",
          desc: "Zor günlerde insan hayatını kurtaran pratik çözümler.",
          bullets: [
            "Afet bölgesinde 10 dakikada kurulabilen modüler yaşam üniteleri.",
            "Aşevlerinin seyyar yemek dağıtım sistemleri.",
            "Tasarım sadece konfor değil, hayat kurtarma aracıdır."
          ]
        }
      ]
    },
    workshop: {
      title: "Kızılay Afet İstasyonu Ayrıştırma Görevi",
      subtitle: "Bir deprem bölgesinde kurulacak acil yaşam ünitesini 3 alt parçaya ayırıp taslak hazırlama.",
      steps: [
        { title: "Ana Sistemi Belirleyin", desc: "'Mobil İlkyardım ve Barınma Çadırı' ana başlığını seçin." },
        { title: "3 Alt Bileşene Ayırın", desc: "A) Havalandırma ve Isınma B) Temiz Su Dağıtımı C) İletişim/Telsiz." },
        { title: "Bir Parçayı Tasarlayın", desc: "Seçtiğiniz bir alt parçanın çalışma mekanizmasını eskizle çizin." }
      ],
      criteria: [
        "Problemi alt fonksiyonlara mantıklı şekilde bölebilme",
        "29 Ekim ve Kızılay değerlerine uygun dayanışma ruhu yansıtma",
        "Çözüm taslağında pratik kurulum ve hafiflik kriterlerini gözetme"
      ]
    },
    tips: {
      safetyTitle: "Sistem Düşüncesi İlkeleri",
      safetyRules: [
        { bold: "Parçalar Arasındaki Uyum", text: "Bir parçayı değiştirirken diğer parçanın çalışmasını bozmamaya dikkat edin (Sistem dengesi)." }
      ],
      myths: [
        { wrong: "Bir sorunu çözmek için hemen yekpare devasa bir alet yapılmalıdır.", correct: "Hayır! Modüler ve parçalı tasarımlar arıza anında tek parça değiştirilerek kolayca tamir edilir." }
      ]
    },
    quiz: {
      question: "Karmaşık bir tasarım problemini çözmek için onu daha küçük, bağımsız ve kolay çözülebilir alt bileşenlerine ayırma işlemine ne ad verilir?",
      options: [
        { text: "A) Format Atma", isCorrect: false },
        { text: "B) Ayrıştırma (Decomposition)", isCorrect: true },
        { text: "C) Patent Alma", isCorrect: false },
        { text: "D) Planlı Eskitme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Karmaşık sorunları alt parçalara bölme işlemine <strong>Ayrıştırma (Decomposition)</strong> denir."
    },
    summaryRules: [
      { bold: "Cumhuriyet Üretmektir", text: "Teknoloji ve tasarımla ülkemizi yükseltiyoruz." },
      { bold: "Parçala ve Çöz", text: "Her alt parça için ayrı çözüm üret." },
      { bold: "Kızılay Ruhu", text: "İnsanlığa fayda sağlayan tasarımlar önceliğimizdir." }
    ],
    homework: "Evinizdeki buzdolabını 3 alt sisteme ayırın (Soğutma, Raflar, Elektrik) ve defterinize şemasını çizin.",
    nextWeekPreview: "Tasarım Sürecindeki Unsurları Tasnif Etme ve Çözüm Arama!"
  },

  // 8. HAFTA
  {
    week: 8,
    date: "02 - 08 Kasım",
    hours: "2 Ders Saati",
    unit: "3. ÜNİTE: TASARIM ODAKLI SÜREÇ",
    unitBadge: "3. Ünite: Hafta 3",
    unitTheme: "tema-3",
    title: "Tasarım Sürecindeki Unsurları Tasnif Etme",
    subtitle: "Bilgi Toplama, İhtiyaç Listesi Oluşturma ve Önceliklendirme Matrisleri",
    outcomeCode: "TT.7.3.1 (c)",
    targetSkill: "Veri Tasnifi & İhtiyaç Önceliklendirme",
    curiosityQuestion: "Bir akıllı saatin içine kamera, oyun konsolu, mikrodalga fırın ve projektör koyabilir miyiz? Neden tasarımcılar bazı özelliklere 'Hayır' der?",
    roadmap: [
      { title: "Tasnif (Sınıflandırma) Nedir?", desc: "Toplanan ihtiyaçların ve fikirlerin önem sırasına dizilmesi." },
      { title: "MoSCoW Önceliklendirme Kuralı", desc: "Mutlaka Olmalı, Olsa İyi Olur, Olabilir, Şimdilik Olmayacak." },
      { title: "Tasarım Matrisi", desc: "Maliyet, hız ve fayda kıyaslamasıyla en doğru seçimi yapma." },
      { title: "Kullanıcı Geri Bildirimini Gruplama", desc: "Anketlerden gelen yüzlerce cevabı tematik kategorilere ayırma." }
    ],
    section1: {
      title: "MoSCoW Metodu ile Tasarım Önceliklendirme",
      subtitle: "Her şeyi aynı anda yapamazsınız; başarılı tasarımcılar vazgeçebilenlerdir.",
      layout: "split-visual",
      card: {
        title: "MoSCoW Öncelik Seviyeleri",
        icon: "📊",
        desc: "Bir ürünü tasarlarken fikirleri 4 kutuya ayırırız:",
        items: [
          { bold: "Must Have (Mutlaka Olmalı)", text: "Olmazsa ürün görevini yapamaz (Örn: Akıllı telefonun şarj soketi ve ekranı)." },
          { bold: "Should Have (Olsa Çok İyi Olur)", text: "Çok faydalı ama ürün onsuz da çalışabilir (Örn: Parmak izi okuyucu)." },
          { bold: "Could Have (Olabilir)", text: "Bütçe ve vakit kalırsa eklenebilecek hoş bir detay (Örn: Gece parlayan kordon)." },
          { bold: "Won't Have (Şimdilik Olmayacak)", text: "Ürünü gereksiz pahalı veya ağır yapacağı için bilerek elenen özellikler." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">MoSCoW Önceliklendirme Matrisi</text>
        
        <!-- 4 Kutu Izgarası -->
        <g transform="translate(45, 60)">
          <!-- MUST -->
          <rect x="0" y="0" width="145" height="65" rx="8" fill="#162038" stroke="#ef4444" stroke-width="1.5"/>
          <text x="15" y="22" fill="#ef4444" font-size="10" font-weight="bold">🔴 MUST (Zorunlu)</text>
          <text x="15" y="40" fill="#cbd5e1" font-size="8">Temel işlevler</text>
          <text x="15" y="52" fill="#94a3b8" font-size="8">Olmazsa ürün çalışmaz</text>
          
          <!-- SHOULD -->
          <rect x="165" y="0" width="145" height="65" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="180" y="22" fill="#f59e0b" font-size="10" font-weight="bold">🟡 SHOULD (Önemli)</text>
          <text x="180" y="40" fill="#cbd5e1" font-size="8">Yüksek değer katar</text>
          <text x="180" y="52" fill="#94a3b8" font-size="8">Büyük kolaylık sağlar</text>
          
          <!-- COULD -->
          <rect x="0" y="75" width="145" height="65" rx="8" fill="#162038" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="15" y="97" fill="#38bdf8" font-size="10" font-weight="bold">🔵 COULD (Olabilir)</text>
          <text x="15" y="115" fill="#cbd5e1" font-size="8">Hoş bir detay</text>
          <text x="15" y="127" fill="#94a3b8" font-size="8">Bütçe kalırsa eklenir</text>
          
          <!-- WONT -->
          <rect x="165" y="75" width="145" height="65" rx="8" fill="#162038" stroke="#64748b" stroke-width="1.5"/>
          <text x="180" y="97" fill="#94a3b8" font-size="10" font-weight="bold">⚪ WON'T (Elenenler)</text>
          <text x="180" y="115" fill="#cbd5e1" font-size="8">Gereksiz ağırlık/masraf</text>
          <text x="180" y="127" fill="#94a3b8" font-size="8">Projeden çıkarıldı</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Bilgiyi Gruplama ve Tasnif Sanatı",
      subtitle: "Kullanıcı istekleri arasındaki ortak örüntüleri yakalamak.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Veri Gruplama",
          title: "Benzeşim Diyagramı (Affinity Diagram)",
          desc: "Beyin fırtınasında yazılan yapışkan notları konularına göre kümeleme.",
          bullets: [
            "Ergonomi Grubu: 'Askısı omzumu acıtıyor', 'Çanta çok ağır'.",
            "Güvenlik Grubu: 'Fermuarı arkada olsun', 'Reflektörlü şerit eklensin'.",
            "Benzer şikayetler tek bir güçlü tasarım çözümüne dönüşür."
          ]
        },
        {
          badge: "Karar Verme",
          title: "Tasarım Dengesi",
          desc: "Fiyat, kalite ve süre arasındaki altın denge.",
          bullets: [
            "Çok ucuz ama kalitesiz ürün müşteri kaybeder.",
            "Çok kaliteli ama astronomik pahalı ürünü kimse alamaz.",
            "Tasarımcı en optimize noktayı bulmak için tasnif yapar."
          ]
        }
      ]
    },
    workshop: {
      title: "Akıllı Okul Çantası Önceliklendirme Matrisi",
      subtitle: "Öğrencilerin bir okul çantası için 8 farklı özelliği MoSCoW kutularına yerleştirmesi.",
      steps: [
        { title: "Özellikleri İnceleyin", desc: "Su geçirmez kumaş, masaj yapan sırtlık, RGB ışık, USB şarj portu, gizli cep, güneş paneli." },
        { title: "Matrise Dağıtın", desc: "Hangisi 'Must' (Olmazsa olmaz), hangisi 'Won't' (Gereksiz lüks)?" },
        { title: "Gerekçenizi Açıklayın", desc: "Neden o özelliği elediniz? Maliyeti nasıl etkiledi?" }
      ],
      criteria: [
        "MoSCoW yönteminin 4 kategorisini doğru anlamlandırma",
        "Tasarım kararlarını mantıklı gerekçelerle savunabilme",
        "Kullanıcı ihtiyaçları ile maliyet dengesini kurabilme"
      ]
    },
    tips: {
      safetyTitle: "Tasarım Yönetimi İlkeleri",
      safetyRules: [
        { bold: "Özellik Şişkinliği (Feature Creep)", text: "Bir alete her şeyi eklemeye çalışırsanız alet hiçbir şeyi doğru düzgün yapamaz hale gelir. Sade kalın." }
      ],
      myths: [
        { wrong: "Bir üründe ne kadar çok buton varsa o kadar kalitelidir.", correct: "Günümüzde en kaliteli tasarımlar tek bir tuşla veya sezgisel olarak çalışan minimalist tasarımlardır." }
      ]
    },
    quiz: {
      question: "MoSCoW önceliklendirme yönteminde, bir ürünün çalışabilmesi için kesinlikle vazgeçilemeyecek en temel hayati özellikler hangi kategoride toplanır?",
      options: [
        { text: "A) Won't (Şimdilik Olmayacak)", isCorrect: false },
        { text: "B) Must Have (Mutlaka Olmalı)", isCorrect: true },
        { text: "C) Could Have (Olabilir)", isCorrect: false },
        { text: "D) Belki Bir Gün", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Ürünün varlık sebebi olan vazgeçilmez özellikler <strong>Must Have (Mutlaka Olmalı)</strong> kutusundadır."
    },
    summaryRules: [
      { bold: "Tasnif = Düzen", text: "Fikirleri önem sırasına koyduk." },
      { bold: "MoSCoW Kuralı", text: "Zorunlu olanları süslerden ayırdık." },
      { bold: "Sadelik Kazandırır", text: "Gereksiz detayları eleyerek güçlü ürünler tasarlıyoruz." }
    ],
    homework: "Kendi çalışma masanızdaki eşyaları MoSCoW yöntemiyle 4 gruba ayırıp defterinize yazın.",
    nextWeekPreview: "10 Kasım Atatürk'ü Anma & Tasarım Geliştirme Kriterlerinin Uygulanması ve Etiketleme!"
  },

  // 9. HAFTA
  {
    week: 9,
    date: "09 - 15 Kasım",
    hours: "2 Ders Saati",
    unit: "3. ÜNİTE: TASARIM ODAKLI SÜREÇ",
    unitBadge: "3. Ünite: Hafta 4",
    unitTheme: "tema-3",
    title: "10 Kasım Atatürk'ü Anma & Tasarım Kriterleri ve Etiketleme",
    subtitle: "Atatürk'ün Akıl ve Bilim Mirası, Tasarım Sürecindeki Unsurları Etiketleme (Tagging)",
    outcomeCode: "TT.7.3.1 (ç)",
    targetSkill: "Kavramsal Etiketleme & Kriter Uygulama",
    curiosityQuestion: "Mustafa Kemal Atatürk'ün yazdığı Geometri kitabı, bugün kullandığımız bilim ve tasarım terimlerini nasıl değiştirdi?",
    roadmap: [
      { title: "Atatürk ve Tasarım Dili", desc: "Atatürk'ün 'üçgen, açı, boyut, teğet' gibi terimleri Türkçeleştirerek bilime katkısı." },
      { title: "Tasarımda Etiketleme (Tagging)", desc: "Her bileşenin görevini, malzemesini ve bağlantısını tanımlama." },
      { title: "Geliştirme Kriterleri Uygulaması", desc: "Tasarım kâğıdında standart semboller, oklar ve malzeme kodları." },
      { title: "Anıtkabir Mimari Çözümlemesi", desc: "Sadeliğin, asaletin ve orantının mimari bir esere dönüşmesi." }
    ],
    section1: {
      title: "Atatürk: Bilimin ve Geometrinin Öncüsü",
      subtitle: "'Hayatta en hakiki mürşit ilimdir, fendir.' sözünün tasarım ve mühendislikteki izdüşümü.",
      layout: "split-visual",
      card: {
        title: "Atatürk'ün Geometri Kitabı (1937)",
        icon: "📐",
        desc: "Bugün kullandığımız temel terimleri Atatürk türetmiştir:",
        items: [
          { bold: "Eski Arapça Terimler", text: "'Müselles-i mütesâviyü'l-adlâ' yerine -> 'Eşkenar Üçgen'." },
          { bold: "Tasarımcı Dili", text: "'Kavs' yerine 'Yay', 'Hatt-ı müstakîm' yerine 'Doğru', 'Zaviye' yerine 'Açı'." },
          { bold: "Netlik ve Anlaşılırlık", text: "Terimlerin anlaşılır olması, Türk gençlerinin mühendislik ve mimariyi kolayca öğrenmesini sağladı." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#6366f1" stroke-width="1.5"/>
        <text x="200" y="42" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">Tasarım Elemanlarını Etiketleme (Tagging) Standardı</text>
        
        <!-- Ürün Çizimi (Güneş Enerjili Lamba) -->
        <g transform="translate(60, 65)">
          <rect x="20" y="30" width="80" height="90" rx="10" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="60" cy="75" r="22" fill="#f59e0b" opacity="0.3"/>
          <text x="60" y="80" fill="#fde68a" font-size="20" text-anchor="middle">💡</text>
          <rect x="35" y="15" width="50" height="15" rx="3" fill="#334155" stroke="#34d399"/>
        </g>
        
        <!-- Etiket Okları ve Rozetleri -->
        <!-- Etiket 1 -->
        <line x1="120" y1="80" x2="180" y2="80" stroke="#34d399" stroke-width="1.5"/>
        <rect x="185" y="68" width="160" height="24" rx="4" fill="#1e293b" stroke="#34d399"/>
        <text x="195" y="84" fill="#a7f3d0" font-size="9">[#GÜÇ]: Monokristal Fotovoltaik Panel</text>
        
        <!-- Etiket 2 -->
        <line x1="140" y1="120" x2="180" y2="120" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="185" y="108" width="160" height="24" rx="4" fill="#1e293b" stroke="#38bdf8"/>
        <text x="195" y="124" fill="#bae6fd" font-size="9">[#GÖVDE]: Geri Dönüşümlü ABS Plastik</text>
        
        <!-- Etiket 3 -->
        <line x1="100" y1="155" x2="180" y2="155" stroke="#f43f5e" stroke-width="1.5"/>
        <rect x="185" y="143" width="160" height="24" rx="4" fill="#1e293b" stroke="#f43f5e"/>
        <text x="195" y="159" fill="#fecdd3" font-size="9">[#KORUMA]: IP68 Su Geçirmez Conta</text>
        
        <text x="200" y="200" fill="#94a3b8" font-size="8" text-anchor="middle">Etiketler, tasarımın üretim aşamasında kusursuz anlaşılmasını sağlar.</text>
      </svg>`
    },
    section2: {
      title: "Tasarım Geliştirme Kriterlerinin Rolü",
      subtitle: "Etiketlenen her parça belirli bir kritere hizmet eder.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Etiketleme (Tagging)",
          title: "Bileşen Kimlik Kartları",
          desc: "Tasarım çizimindeki her öğenin standart kodlarla tanımlanması.",
          bullets: [
            "Fonksiyon Etiketi: [Giriş], [Çıkış], [Sensör], [Aktüatör].",
            "Malzeme Etiketi: [Alüminyum 6061], [Bambu Elyafı], [Polikarbon].",
            "Mühendisler ve ustalar bu etiketlere bakarak montaj yapar."
          ]
        },
        {
          badge: "Mimari Miras",
          title: "Anıtkabir'in Tasarım Dili",
          desc: "Prof. Emin Onat ve Orhan Arda'nın eseri olan Anıtkabir'in oranları.",
          bullets: [
            "Hitit, Selçuklu ve Osmanlı mimari motiflerinin modern sentezi.",
            "Aslanlı Yol'daki taşların insanı yavaş yürütmek için aralıklı döşenmesi (Deneyim tasarımı).",
            "Ata'mızı saygı, minnet ve bilime bağlılıkla anıyoruz."
          ]
        }
      ]
    },
    workshop: {
      title: "Teknik Etiketleme Laboratuvarı",
      subtitle: "Öğrencilerin daha önce çizdikleri taslak üzerine profesyonel mühendislik etiketleri eklemesi.",
      steps: [
        { title: "Taslağınızı Açın", desc: "5. haftada çizdiğiniz özgün ürün taslağını masanıza koyun." },
        { title: "3 Kategori Etiket Belirleyin", desc: "A) Malzeme B) Boyut C) Güvenlik kriterlerini seçin." },
        { title: "Oklarla İlişkilendirin", desc: "Cetvel yardımıyla çizimden dışarıya oklar çıkarıp etiket kutularını doldurun." }
      ],
      criteria: [
        "Etiketlerin açık, okunaklı ve teknik dille yazılması",
        "Atatürk'ün Türkçe bilim terimlerini doğru kullanabilme",
        "Çizim ile etiket okları arasında karmaşa yaratmayacak düzen sağlama"
      ]
    },
    tips: {
      safetyTitle: "Teknik Resim ve Etiketleme Standardı",
      safetyRules: [
        { bold: "Çizgileri Çakıştırmayın", text: "Etiket oklarının birbiri üzerinden çapraz geçmemesine özen gösterin; şema temiz ve ferah olmalıdır." }
      ],
      myths: [
        { wrong: "Etiketleme sadece karmaşık fabrikalarda gereklidir.", correct: "En basit ahşap sandalyede bile hangi vidanın nereye takılacağını gösteren etiketler olmadan ürün monte edilemez." }
      ]
    },
    quiz: {
      question: "Mustafa Kemal Atatürk'ün 1937 yılında bizzat kaleme alarak Türkçemize 'üçgen, açı, teğet, boyut' gibi kavramları kazandırdığı tarihi eseri hangisidir?",
      options: [
        { text: "A) Nutuk", isCorrect: false },
        { text: "B) Geometri Kitabı", isCorrect: true },
        { text: "C) Medeni Bilgiler", isCorrect: false },
        { text: "D) Zabit ve Kumandan ile Hasbihal", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Atatürk, Yalova'da bizzat çalışarak bugün bilim ve tasarımda kullandığımız terimleri <strong>Geometri</strong> kitabıyla dilimize kazandırmıştır."
    },
    summaryRules: [
      { bold: "Atatürk'ün Yolunda Bilimle", text: "Akıl, teknik ve tasarım en büyük gücümüzdür." },
      { bold: "Etiketle ve Netleştir", text: "Her parçanın adı, malzemesi ve görevi belli olmalıdır." },
      { bold: "Teknik Standartlar", text: "Dünyanın her yerindeki mühendislerin anlayacağı ortak dil." }
    ],
    homework: "Anıtkabir'in mimari özelliklerini araştırın ve en ilginizi çeken 2 tasarım detayını defterinize yazın.",
    nextWeekPreview: "1. Dönem Ara Tatili: Teknoloji ve Tasarım Macera Atölyesi!"
  },

  // 10. HAFTA
  {
    week: 10,
    date: "16 - 22 Kasım",
    hours: "Ara Tatil",
    unit: "ARA TATİL: Teknoloji ve Tasarım Macera Atölyesi",
    unitBadge: "1. Ara Tatil",
    unitTheme: "tema-3",
    title: "1. Ara Tatil: Tasarım ve İnovasyon Atölyesi",
    subtitle: "Tatil Boyunca Evde Geri Dönüşüm Malzemeleriyle Yapılabilecek Yaratıcı Projeler",
    outcomeCode: "Ara Tatil Gelişim Görevi",
    targetSkill: "Yaratıcı Problem Çözme & Geri Dönüşümle Üretim",
    curiosityQuestion: "Evde çöpe gitmek üzere olan bir karton kutu, plastik şişe kapağı ve lastikle çalışan bir araba yapabilir misiniz?",
    roadmap: [
      { title: "Tatil Tasarım Maceraları", desc: "Evde ekran olmadan ellerle dokunarak üretim yapma keyfi." },
      { title: "İleri Dönüşüm (Upcycling)", desc: "Çöpü daha değerli bir tasarım ürününe dönüştürme sanatı." },
      { title: "Mekanik Oyuncak Yapımı", desc: "Potansiyel enerjiyi harekete çeviren lastikli araba mekanizması." },
      { title: "Tasarım Günlüğü Tutma", desc: "Gözlemlenen ilginç nesneleri ve fikirleri günlüğe eskizleme." }
    ],
    section1: {
      title: "İleri Dönüşüm (Upcycling) ile Üretim",
      subtitle: "Geri dönüşüm malzemeyi eritir; ileri dönüşüm ise ona yeni bir hayat ve değer katar.",
      layout: "split-visual",
      card: {
        title: "Evde Tasarım Malzemeleri",
        icon: "📦",
        desc: "Çöpe atmayıp tasarımda kullanabileceğimiz harika parçalar:",
        items: [
          { bold: "Karton Kutular & Rulolar", text: "Sağlam gövdeler, tüneller, labirentler ve bina maketleri için mükemmeldir." },
          { bold: "Şişe Kapakları", text: "Tekerlekler, düğmeler, renkli mozaik parçaları veya sayaçlar." },
          { bold: "Paket Lastikleri & Pipetler", text: "Mekanik güç, yaylanma, esneklik ve hava üfleme kanalları." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#10b981" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Tatil Görevi: Lastik Motorlu Karton Araba</text>
        
        <!-- Karton Gövde -->
        <rect x="100" y="90" width="180" height="45" rx="6" fill="#162038" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="190" y="117" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Karton Şasi (Gövde)</text>
        
        <!-- Tekerlekler (Kapaklar) -->
        <circle cx="130" cy="145" r="18" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="130" cy="145" r="5" fill="#f59e0b"/>
        
        <circle cx="250" cy="145" r="18" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="250" cy="145" r="5" fill="#f59e0b"/>
        
        <!-- Lastik Mekanizması -->
        <path d="M130 90 Q190 70 250 90" stroke="#f43f5e" stroke-width="3" fill="none"/>
        <text x="190" y="65" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">Gerilen Paket Lastiği (Potansiyel Enerji)</text>
        
        <!-- Hareket Oku -->
        <path d="M295 112 H335" stroke="#10b981" stroke-width="2.5" marker-end="url(#arr)"/>
        <text x="315" y="103" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">İleri Hız</text>
      </svg>`
    },
    section2: {
      title: "Tatili Verimli Geçirme Rehberi",
      subtitle: "Dinlenmek sadece uyumak değil; farklı ve sevdiğin bir işle zihnini tazelemektir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Tasarımcı Gözü",
          title: "Çevreni Gözlemle",
          desc: "Tatil boyunca gittiğin parkta, köyde veya sokakta:",
          bullets: [
            "İnsanlar hangi nesneleri kullanırken zorlanıyor?",
            "Doğadaki kuşlar, karıncalar ve yapraklar nasıl mühendislik harikaları barındırıyor?",
            "İlginç gördüğün 3 nesneyi tasarım günlüğüne çiz."
          ]
        },
        {
          badge: "Dijital Denge",
          title: "Ekran Bağımlılığına Ara",
          desc: "Ellerinle üretmenin verdiği mutluluk sanal oyunlardan çok daha tatmin edicidir.",
          bullets: [
            "Tablet ve telefonu günde 1 saatle sınırlandırın.",
            "Ailenizle birlikte bir geri dönüşüm projesi yapın.",
            "Tatil dönüşü yaptığınız ürünü sınıfta gururla sergileyin."
          ]
        }
      ]
    },
    workshop: {
      title: "Ev Yapımı Lastikli Araç Şampiyonası",
      subtitle: "Tatil boyunca evdeki malzemelerle en uzağa giden lastikli aracı tasarlayıp yapma.",
      steps: [
        { title: "Şasi ve Aks", desc: "Karton süt kutusu gövde, pipet ve çöp şişten tekerlek mili yapın." },
        { title: "Tekerlekler", desc: "4 adet şişe kapağını delip mile sabitleyin." },
        { title: "Lastik Motoru", desc: "Paket lastiğini arka mile bağlayıp gerin ve bırakın; kaç metre gittiğini ölçün!" }
      ],
      criteria: [
        "Tamamen evdeki atık malzemelerden üretilmiş olması",
        "Kendi kendine en az 2 metre düz çizgide ilerleyebilmesi",
        "Tasarım sürecinin fotoğraflarını çekip günlüğe ekleme"
      ]
    },
    tips: {
      safetyTitle: "Evde Atölye Güvenliği",
      safetyRules: [
        { bold: "Makas ve Maket Bıçağı", text: "Kesici aletleri kullanırken mutlaka bir büyüğünüzden yardım isteyin veya küt uçlu çocuk makası kullanın." }
      ],
      myths: [
        { wrong: "Tasarım yapmak için pahalı laboratuvar cihazları ve 3D yazıcılar şarttır.", correct: "Tarihteki en büyük mucitler ilk modellerini karton, tel ve ahşap parçalarıyla evlerinin bodrumlarında yapmışlardır." }
      ]
    },
    quiz: {
      question: "Evdeki atık malzemeleri (karton kutu, şişe kapağı, lastik) çöpe atmak yerine onları daha işlevsel ve değerli bir tasarım ürününe dönüştürme işlemine ne ad verilir?",
      options: [
        { text: "A) İleri Dönüşüm (Upcycling)", isCorrect: true },
        { text: "B) Çöp Yakma", isCorrect: false },
        { text: "C) Hata Ayıklama", isCorrect: false },
        { text: "D) Planlı Eskitme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Atık nesnelere yaratıcılık katarak daha değerli bir ürün elde etmeye <strong>İleri Dönüşüm (Upcycling)</strong> denir."
    },
    summaryRules: [
      { bold: "İyi Tatiller!", text: "Hem dinlenin hem de üretmenin tadını çıkarın." },
      { bold: "Atıkları Değerlendir", text: "Çöp değil, yeni icatların ham maddesi." },
      { bold: "Tatil Sonrası CAD Başlıyor", text: "2. periyotta 3D Bilgisayar Destekli Tasarıma geçiyoruz!" }
    ],
    homework: "Yaptığınız lastikli aracın videosunu veya fotoğrafını çekip tatil dönüşü öğretmeninize gösterin.",
    nextWeekPreview: "4. Ünite Başlıyor: Bilgisayar Destekli Tasarım (CAD) ve 2B/3B Modelleme!"
  }
];
