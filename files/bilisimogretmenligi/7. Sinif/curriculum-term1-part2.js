/**
 * 7. Sınıf Teknoloji ve Tasarım - 1. Dönem 2. Bölüm (Hafta 11 - 19)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_PART2_GRADE7 = [
  // 11. HAFTA
  {
    week: 11,
    date: "23 - 29 Kasım",
    hours: "2 Ders Saati",
    unit: "3. ÜNİTE: TASARIM ODAKLI SÜREÇ",
    unitBadge: "3. Ünite: Hafta 5",
    unitTheme: "tema-3",
    title: "24 Kasım Öğretmenler Günü & Tasarım Kriterleri Uygulaması",
    subtitle: "Tasarım Problemlerinde Değişkenler, Ölçütler, Ayrıştırma ve Etiketleme Bütünleştirmesi",
    outcomeCode: "TT.7.3.1",
    targetSkill: "Bütüncül Problem Çözümleme & Kriter Yönetimi",
    curiosityQuestion: "Bir öğretmen için sınıf ortamında tebeşir tozu solumadan veya boğazı ağrımadan ders anlatabileceği ergonomik bir araç nasıl tasarlanabilir?",
    roadmap: [
      { title: "24 Kasım ve Öğretmen Emeği", desc: "Eğitimde teknoloji ve tasarımın öğretmenlerin hayatını kolaylaştırmadaki rolü." },
      { title: "Kriterlerin Bütünleştirilmesi", desc: "Değişkenleri belirleme, parçalara ayırma, tasnif etme ve etiketleme zinciri." },
      { title: "Sınıf İçi İhtiyaç Analizi", desc: "Tahta silgisi, ders materyali taşıyıcı ve akıllı tahta kalemi ergonomisi." },
      { title: "Tasarım Dokümantasyonu", desc: "Bir fikri başkalarının üretebileceği netlikte raporlama." }
    ],
    section1: {
      title: "Tasarım Sürecinin Dörtlü Zinciri",
      subtitle: "Bir problemi çözerken adım adım uygulanan mühendislik mantığı.",
      layout: "split-visual",
      card: {
        title: "Dört Adımlı Çözümleme Zinciri",
        icon: "⛓️",
        desc: "Bu ünitede ustalaştığımız 4 temel beceri:",
        items: [
          { bold: "a) Değişken ve Ölçüt Belirleme", text: "Problemi çevreleyen sınırları (bütçe, ağırlık, süre) netleştiririz." },
          { bold: "b) Parçalara Ayrıştırma", text: "Karmaşık sorunu 3-4 alt sisteme böleriz (Taşıyıcı, mekanik, kontrol)." },
          { bold: "c) Tasnif ve Önceliklendirme", text: "MoSCoW yöntemiyle zorunlu özellikleri lüks olanlardan ayırırız." },
          { bold: "ç) Etiketleme (Tagging)", text: "Teknik resimde her parçayı malzeme ve fonksiyon koduyla tanımlarız." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#818cf8" stroke-width="1.5"/>
        <text x="200" y="42" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">Tasarım Süreci 4'lü Entegrasyon Çarkı</text>
        
        <!-- Merkez Daire -->
        <circle cx="200" cy="125" r="30" fill="#162038" stroke="#818cf8" stroke-width="2"/>
        <text x="200" y="128" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ÇÖZÜM</text>
        
        <!-- 4 Uydu -->
        <!-- 1. Ölçütler -->
        <circle cx="110" cy="85" r="24" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="110" y="88" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">Ölçütler</text>
        <path d="M130 98 L175 115" stroke="#38bdf8" stroke-width="1.5"/>
        
        <!-- 2. Ayrıştırma -->
        <circle cx="290" cy="85" r="24" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="290" y="88" fill="#f59e0b" font-size="8" font-weight="bold" text-anchor="middle">Ayrıştırma</text>
        <path d="M270 98 L225 115" stroke="#f59e0b" stroke-width="1.5"/>
        
        <!-- 3. Tasnif -->
        <circle cx="110" cy="165" r="24" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="110" y="168" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">Tasnif</text>
        <path d="M130 152 L175 135" stroke="#34d399" stroke-width="1.5"/>
        
        <!-- 4. Etiketleme -->
        <circle cx="290" cy="165" r="24" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
        <text x="290" y="168" fill="#ec4899" font-size="8" font-weight="bold" text-anchor="middle">Etiketleme</text>
        <path d="M270 152 L225 135" stroke="#ec4899" stroke-width="1.5"/>
      </svg>`
    },
    section2: {
      title: "24 Kasım Özel: Eğitime Değer Katan Tasarımlar",
      subtitle: "Öğretmenlerimizin ve öğrencilerin okul hayatını kolaylaştıran yenilikçi ürünler.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Problem Alanı",
          title: "Sınıf Ergonomisi ve Sağlık",
          desc: "Günde 6-8 saat ayakta ders anlatan öğretmenlerin karşılaştığı zorluklar.",
          bullets: [
            "Ses tellerini koruyan hafif taşınabilir yaka mikrofonları.",
            "Ayak ve bel ağrısını azaltan ortopedik tabanlık tasarımları.",
            "Kitap ve sınav kâğıtlarını yıpratmadan taşıyan hafif evrak çantaları."
          ]
        },
        {
          badge: "İnovatif Çözüm",
          title: "Akıllı Sınıf Asistanları",
          desc: "Teknolojinin öğretmenle iş birliği yapması.",
          bullets: [
            "Toz tutmayan ve kendi kendini temizleyen silgi aparatları.",
            "Akıllı tahtaya uzaktan kumanda eden ergonomik parmak yüzükleri.",
            "Tasarım insan sevgisi ve minnetle birleştiğinde değer kazanır."
          ]
        }
      ]
    },
    workshop: {
      title: "24 Kasım Öğretmen Masası Düzenleyici (Organizer)",
      subtitle: "Öğretmeninizin tahta kalemlerini, zımbasını ve evraklarını düzenli tutan bir masaüstü aparatı tasarlayın.",
      steps: [
        { title: "Empati ve İhtiyaç", desc: "Öğretmeninizin masasında en çok neyin kaybolduğunu veya dağınıklık yarattığını gözlemleyin." },
        { title: "Bölmeler ve Fonksiyon", desc: "Kalemlik, ataş yuvası, kâğıt tutucu ve telefon standını tek bir kompakt gövdede birleştirin." },
        { title: "Teknik Etiketler", desc: "Malzemesini (geri dönüştürülmüş ahşap veya PLA plastik) ve ölçülerini etiketleyerek çizin." }
      ],
      criteria: [
        "Tasarım sürecinin 4 basamağını (ölçüt, ayrıştırma, tasnif, etiketleme) çizime yansıtma",
        "24 Kasım Öğretmenler Günü anlamına uygun estetik ve duygusal bir mesaj taşıma",
        "Ürünün masada az yer kaplayıp maksimum fonksiyon sağlaması (Kompakt tasarım)"
      ]
    },
    tips: {
      safetyTitle: "Tasarımda Kullanıcı Odaklılık",
      safetyRules: [
        { bold: "Öğretmeninizden Fikir Alın", text: "Tasarım yaparken tahmin yürütmeyin; kullanıcıya 'Hocam masanızda en çok neye ihtiyaç duyuyorsunuz?' diye sorun." }
      ],
      myths: [
        { wrong: "Bir ürünü tasarlayıp bitirdikten sonra kriterlere bakılır.", correct: "Hayır! Kriterler tasarım başlamadan önce belirlenir ve tüm süreç boyunca pusula gibi takip edilir." }
      ]
    },
    quiz: {
      question: "Tasarım odaklı süreçte belirlenen 'Ürünün toplam ağırlığı 300 gramı geçmemelidir ve maliyeti 50 TL'nin altında olmalıdır' gibi kesin sınırlayıcı kurallara ne ad verilir?",
      options: [
        { text: "A) Tasarım Kısıtları (Constraints)", isCorrect: true },
        { text: "B) Renk Paleti", isCorrect: false },
        { text: "C) Patent Numarası", isCorrect: false },
        { text: "D) Ritim İlkesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Bütçe, ağırlık veya süre gibi tasarımcının aşamayacağı sınırlayıcı kurallara <strong>Tasarım Kısıtı (Constraint)</strong> denir."
    },
    summaryRules: [
      { bold: "Öğretmenler Günümüz Kutlu Olsun", text: "Eğitime ve bilime emek veren tüm öğretmenlerimize saygıyla." },
      { bold: "4 Adımlı Çözüm", text: "Ölçütle, parçala, tasnif et ve etiketle." },
      { bold: "CAD Dönemine Geçiş", text: "Haftaya 2D ve 3D dijital modelleme dünyasına adım atıyoruz!" }
    ],
    homework: "Öğretmeninize hediye etmek istediğiniz inovatif bir sınıf aracının 1 sayfalık taslak sunumunu hazırlayın.",
    nextWeekPreview: "4. Ünite: Bilgisayar Destekli Tasarım (CAD) ve 2B Vektörel Çizimler!"
  },

  // 12. HAFTA
  {
    week: 12,
    date: "30 Kasım - 06 Aralık",
    hours: "2 Ders Saati",
    unit: "4. ÜNİTE: BİLGİSAYAR DESTEKLİ TASARIM (CAD)",
    unitBadge: "4. Ünite: Hafta 1",
    unitTheme: "tema-4",
    title: "Bilgisayar Destekli Tasarıma (CAD) Giriş",
    subtitle: "3 Aralık Dünya Engelliler Günü & Taslak Çizimlerin İki Boyutlu (2B) Vektörlere Dönüşümü",
    outcomeCode: "TT.7.4.1",
    targetSkill: "2B Dijital Çizim & Erişilebilirlik Odaklı CAD Tasarımı",
    curiosityQuestion: "Kâğıt üzerindeki bir çizimi bilgisayara aktardığımızda neden büyüttükçe pikseller bozulmaz da cam gibi net kalır?",
    roadmap: [
      { title: "CAD (Computer Aided Design) Nedir?", desc: "Mühendislerin ve mimarların çizim masasını ekrana taşıyan yazılımlar." },
      { title: "Vektörel Çizim Mantığı", desc: "Piksel yerine matematiksel koordinatlar ve formüllerle çalışan çizgiler." },
      { title: "3 Aralık Dünya Engelliler Günü", desc: "Engelsiz yaşam için tekerlekli sandalye rampaları ve tutunma kolları tasarımı." },
      { title: "2B CAD Araç Çantası", desc: "Doğru, çember, yay, eğri (bezier) ve ölçülendirme komutları." }
    ],
    section1: {
      title: "CAD: Dijital Tasarım Dünyasının Dili",
      subtitle: "Kâğıt, kalem ve cetvelin yerini alan hassas dijital tasarım araçları.",
      layout: "split-visual",
      card: {
        title: "Neden CAD Kullanıyoruz?",
        icon: "💻",
        desc: "Geleneksel kâğıt çizimine göre CAD'in 3 dev üstünlüğü:",
        items: [
          { bold: "Milimetrik Hassasiyet", text: "Virgülden sonra mikron düzeyinde kusursuz ölçülendirme yapılabilir." },
          { bold: "Sonsuz Geri Al (Undo) ve Düzeltme", text: "Kâğıdı yırtmadan, tek tıkla hatayı düzeltme ve kopyalama imkânı." },
          { bold: "Üretime Doğrudan İletim", text: "Çizilen 2B vektör lazer kesiciye veya CNC tezgâha anında gönderilebilir." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#c084fc" stroke-width="1.5"/>
        <text x="200" y="42" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">2B CAD Vektörel Çizim Arayüzü</text>
        
        <!-- Çizim Alanı (Grid) -->
        <rect x="50" y="60" width="200" height="135" rx="6" fill="#162038" stroke="#334155"/>
        <!-- Izgara Çizgileri -->
        <path d="M50 95 H250 M50 130 H250 M50 165 H250 M100 60 V195 M150 60 V195 M200 60 V195" stroke="#1e293b" stroke-width="1"/>
        
        <!-- Vektörel Engelli Rampası Çizimi -->
        <polygon points="70,165 210,165 210,115" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <text x="140" y="150" fill="#38bdf8" font-size="8" font-weight="bold">Rampa Açısı: 6°</text>
        <line x1="215" y1="115" x2="215" y2="165" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="225" y="142" fill="#fde68a" font-size="7">h: 80cm</text>
        
        <!-- Sağ Araç Çubuğu -->
        <g transform="translate(265, 60)">
          <rect x="0" y="0" width="95" height="135" rx="6" fill="#1e293b" stroke="#475569"/>
          <text x="47" y="22" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">CAD ARAÇLARI</text>
          <rect x="10" y="32" width="75" height="18" rx="4" fill="#0c1322"/>
          <text x="47" y="44" fill="#00f0ff" font-size="8" text-anchor="middle">✏️ Çizgi (Line)</text>
          <rect x="10" y="55" width="75" height="18" rx="4" fill="#0c1322"/>
          <text x="47" y="67" fill="#38bdf8" font-size="8" text-anchor="middle">⭕ Daire (Circle)</text>
          <rect x="10" y="78" width="75" height="18" rx="4" fill="#0c1322"/>
          <text x="47" y="90" fill="#f59e0b" font-size="8" text-anchor="middle">📏 Ölçü (Dim)</text>
          <rect x="10" y="101" width="75" height="18" rx="4" fill="#0c1322"/>
          <text x="47" y="113" fill="#34d399" font-size="8" text-anchor="middle">✂️ Budama (Trim)</text>
        </g>
      </svg>`
    },
    section2: {
      title: "3 Aralık: Engelsiz Yaşam İçin Tasarım",
      subtitle: "Teknoloji ve CAD, engelleri kaldırmak için en güçlü araçtır.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Sosyal Tasarım",
          title: "Evrensel Tasarım (Universal Design)",
          desc: "Sadece engelliler için değil, herkes için kolay ve erişilebilir ürünler.",
          bullets: [
            "Tekerlekli sandalye rampaları bebek arabası süren annelerin de işine yarar.",
            "Geniş kapılar ve alçak asansör butonları herkes için konfor sağlar.",
            "Tasarım yaparken tüm insan çeşitliliğini kucaklıyoruz."
          ]
        },
        {
          badge: "2B Modelleme Kuralları",
          title: "Vektörel Çizim Standartları",
          desc: "Kapalı konturlar ve doğru geometrik birleşimler.",
          bullets: [
            "Çizgilerin uçları mutlaka birleşmelidir (Snapping / Kenetlenme).",
            "Açık kalan konturlar 3 boyuta yükseltilemez (Extrude edilemez).",
            "Ölçülendirme çizgileri çizimle karışmayacak renkte gösterilir."
          ]
        }
      ]
    },
    workshop: {
      title: "Engelsiz Kaldırım & Rampa 2B Taslağı",
      subtitle: "Bir okul girişindeki merdiven yanına standartlara uygun 2B engelli rampası çizimi.",
      steps: [
        { title: "Ölçüleri Belirleyin", desc: "Rampa yüksekliği 50 cm, eğim %6-8 arası, genişlik en az 100 cm." },
        { title: "2B Çizimi Oluşturun", desc: "Yandan ve üstten görünüşü cetvel veya 2D CAD yazılımında çizin." },
        { title: "Emniyet Detayları", desc: "Kaymaz zemin deseni ve iki taraflı tutunma korkuluklarını ekleyin." }
      ],
      criteria: [
        "Eğim ve boyut ölçütlerinin standartlara tam uygunluğu",
        "2B çizimde çizgi kalınlıkları ve ölçülendirme kurallarına uyulması",
        "Engelliler Haftası bilincini yansıtan empati odaklı tasarım"
      ]
    },
    tips: {
      safetyTitle: "Erişilebilirlik Güvenlik Kuralları",
      safetyRules: [
        { bold: "Eğim Hayati Önem Taşır", text: "Rampa eğimi %8'den dik olursa tekerlekli sandalye devrilebilir veya kullanan kişi tırmanamaz." }
      ],
      myths: [
        { wrong: "CAD yazılımlarını sadece üniversite mezunu mühendisler kullanabilir.", correct: "Günümüzde ortaokul öğrencilerinin bile kolayca kullanabileceği harika ücretsiz web tabanlı CAD araçları mevcuttur." }
      ]
    },
    quiz: {
      question: "Bilgisayarda tasarım yaparken piksellerden oluşan ve büyütüldüğünde bozulan resimler yerine, matematiksel formüllerle büyütülse bile asla kalitesini kaybetmeyen çizim türüne ne ad verilir?",
      options: [
        { text: "A) Piksel Resmi (JPEG)", isCorrect: false },
        { text: "B) Vektörel Çizim (Vector / CAD)", isCorrect: true },
        { text: "C) Ekran Görüntüsü", isCorrect: false },
        { text: "D) Fotokopi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> CAD yazılımları <strong>Vektörel</strong> çizim kullanır; bu sayede çizim ne kadar büyütülürse büyütülsün milimetrik netliğini korur."
    },
    summaryRules: [
      { bold: "CAD = Dijital Hassasiyet", text: "Çizimlerimizi bilgisayar ortamına taşıdık." },
      { bold: "Engelsiz Yaşam Tasarımı", text: "Erişilebilirliği standart haline getiriyoruz." },
      { bold: "Vektörlerin Gücü", text: "Bozulmayan, ölçülü ve üretime hazır çizgiler." }
    ],
    homework: "Evinizin kapı eşiklerini ve banyo girişini inceleyin: Tekerlekli sandalye için bir engel var mı? 2 maddede yazın.",
    nextWeekPreview: "Taslak Çizimlerin 2 Boyutlu Görsellere Dönüştürülmesi ve Vektör Editörleri!"
  },

  // 13. HAFTA
  {
    week: 13,
    date: "07 - 13 Aralık",
    hours: "2 Ders Saati",
    unit: "4. ÜNİTE: BİLGİSAYAR DESTEKLİ TASARIM (CAD)",
    unitBadge: "4. Ünite: Hafta 2",
    unitTheme: "tema-4",
    title: "Taslak Çizimlerin İki Boyutlu Görsellere Dönüştürülmesi",
    subtitle: "İnsan Hakları ve Demokrasi Haftası & Vektörel Çizim Programlarıyla Ürün Geliştirme",
    outcomeCode: "TT.7.4.1 (b)",
    targetSkill: "2B Vektörel Modelleme & Dijital Grafik Üretimi",
    curiosityQuestion: "Lazer kesiciler ve kumaş kesme robotları bir ceketi veya ahşap yapbozu hangi dosya formatını okuyarak sıfır hatayla kesebilir?",
    roadmap: [
      { title: "İnsan Hakları ve Eşit Tasarım", desc: "10 Aralık İnsan Hakları Haftası: Her bireyin kaliteli tasarıma erişim hakkı." },
      { title: "2B Vektörel Çizim Yazılımları", desc: "Inkscape, AutoCAD 2D, LibreCAD ve vektör çalışma mantığı." },
      { title: "Katmanlar (Layers) ile Çalışma", desc: "Ana hatlar, ölçü çizgileri ve taramaları farklı katmanlara ayırma." },
      { title: "Lazer Kesim & Dijital Çıktı", desc: "SVG ve DXF dosya formatları ile üretime hazırlık." }
    ],
    section1: {
      title: "Katmanlar (Layers): Çizimin Şeffaf Asetatları",
      subtitle: "Karmaşık bir tasarımı yönetmenin sırrı her öğeyi kendi katmanına koymaktır.",
      layout: "split-visual",
      card: {
        title: "Katmanlı Tasarımın 3 Faydası",
        icon: "📑",
        desc: "2B CAD yazılımlarında katmanların işlevi:",
        items: [
          { bold: "Katman 1: Ana Gövde (Kesim Hattı)", text: "Ürünün dış hatlarıdır; lazer kesiciye 'burayı tamamen kes' komutu verir." },
          { bold: "Katman 2: Detaylar ve Kazıma", text: "Yüzeye yazı veya logo basılacak alanlardır; lazer burayı sadece çizer/kazar." },
          { bold: "Katman 3: Ölçülendirme ve Notlar", text: "Tasarımcının kendine aldığı notlardır; üretimde gizlenebilir." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#c084fc" stroke-width="1.5"/>
        <text x="200" y="42" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">2B CAD Katman (Layer) Yapısı</text>
        
        <!-- Üst Üste Binen Katmanlar İllüstrasyonu -->
        <!-- Katman 3 (Ölçüler) -->
        <g transform="translate(60, 60)">
          <polygon points="40,20 180,20 150,60 10,60" fill="rgba(99, 102, 241, 0.2)" stroke="#818cf8" stroke-width="1.5"/>
          <text x="95" y="45" fill="#c7d2fe" font-size="8">Katman 3: Ölçüler (Gizlenebilir)</text>
        </g>
        
        <!-- Katman 2 (Kazıma / Gravür) -->
        <g transform="translate(60, 95)">
          <polygon points="40,20 180,20 150,60 10,60" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="95" y="45" fill="#fde68a" font-size="8">Katman 2: Yazı & Desen Kazıma</text>
        </g>
        
        <!-- Katman 1 (Kesim Hattı) -->
        <g transform="translate(60, 130)">
          <polygon points="40,20 180,20 150,60 10,60" fill="rgba(0, 240, 255, 0.2)" stroke="#00f0ff" stroke-width="2"/>
          <text x="95" y="45" fill="#a5f3fc" font-size="8" font-weight="bold">Katman 1: Ana Kesim (Dış Hatlar)</text>
        </g>
        
        <!-- Sağ Açıklama -->
        <g transform="translate(260, 75)">
          <rect x="0" y="0" width="105" height="110" rx="8" fill="#162038" stroke="#334155"/>
          <text x="52" y="25" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">DOSYA TÜRLERİ</text>
          <text x="15" y="50" fill="#00f0ff" font-size="8">.SVG (Web Vektör)</text>
          <text x="15" y="70" fill="#f59e0b" font-size="8">.DXF (CAD Değişim)</text>
          <text x="15" y="90" fill="#34d399" font-size="8">.DWG (Teknik Resim)</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Hassas Çizim Teknikleri",
      subtitle: "Göz kararı değil; matematiksel kesinlikle çizim yapma yöntemleri.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "CAD Yeteneği",
          title: "Kenetlenme (Snap) ve Kılavuzlar",
          desc: "Farenin tam köşe noktalarına, merkezlere ve orta çizgilere yapışması.",
          bullets: [
            "Uç Nokta (Endpoint) ve Orta Nokta (Midpoint) kenetlenmesi.",
            "Teğet (Tangent) ve Diklik (Perpendicular) hizalamaları.",
            "Çizimlerin kusursuz birleşmesini sağlayarak boşlukları önler."
          ]
        },
        {
          badge: "Hak ve Etik",
          title: "İnsan Hakları ve Adil Tasarım",
          desc: "Tasarım çözümlerinin tüm toplum kesimlerine adil sunulması.",
          bullets: [
            "Pahalı ve lüks tasarımlar yerine herkesin alabileceği uygun fiyatlı ürünler.",
            "Açık kaynaklı (Open Source) tasarım dosyalarının paylaşımı.",
            "Bilginin paylaşıldıkça çoğaldığı bilinci."
          ]
        }
      ]
    },
    workshop: {
      title: "Geometrik Anahtarlık 2B Vektör Tasarımı",
      subtitle: "Öğrencilerin lazer kesiciye uygun 2 katmanlı (Dış kesim ve isim kazıma) anahtarlık taslağı çizmesi.",
      steps: [
        { title: "Dış Geometriyi Çizin", desc: "50x30 mm boyutunda köşeleri yuvarlatılmış bir dikdörtgen ve askı deliği çizin." },
        { title: "İsim Katmanı Ekleyin", desc: "Katman 2'ye geçip adınızı veya anlamlı bir sembolü vektörel yazıyla yerleştirin." },
        { title: "Ölçülendirin", desc: "Ölçü çizgileriyle delik çapını (4 mm) ve kenar uzaklıklarını netleştirin." }
      ],
      criteria: [
        "Dış konturun kapalı ve pürüzsüz çizilmesi",
        "Kesim ve kazıma katmanlarının doğru renk kodlarıyla ayrılması",
        "İnsan Hakları ve Demokrasi Haftasına uygun barışçıl ve adil bir tema içermesi"
      ]
    },
    tips: {
      safetyTitle: "Dijital Vektör Hijyeni",
      safetyRules: [
        { bold: "Çift Çizgilerden Kaçının", text: "Aynı çizginin üst üste iki kez çizilmesi lazer kesicinin orayı iki kere kesip malzemeyi yakmasına sebep olur. Kontrol edin." }
      ],
      myths: [
        { wrong: "Bir fotoğrafı Paint'te büyütünce CAD çizimi elde edilir.", correct: "Hayır! Fotoğraflar piksellerden oluşur; CAD çizimi ise matematiksel eğrilerden oluşan vektörel dosyalardır." }
      ]
    },
    quiz: {
      question: "2B CAD ve vektörel tasarım yazılımlarında çizimin dış hatlarını, iç detaylarını ve ölçü çizgilerini birbirinden ayırarak düzenli çalışmayı sağlayan araca ne ad verilir?",
      options: [
        { text: "A) Katmanlar (Layers)", isCorrect: true },
        { text: "B) Ekran Koruyucu", isCorrect: false },
        { text: "C) Çöp Kutusu", isCorrect: false },
        { text: "D) Yazıcı Sürücüsü", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Çizim elemanlarını bağımsız olarak yönetmek, gizlemek veya kilitlemek için <strong>Katmanlar (Layers)</strong> kullanılır."
    },
    summaryRules: [
      { bold: "Vektör = Sınırsız Kalite", text: "Bozulmayan dijital çizgiler ürettik." },
      { bold: "Katmanlı Düzen", text: "Kesim, kazıma ve ölçü çizgilerini ayırdık." },
      { bold: "3 Boyuta Hazırlık", text: "2B profillerimiz haftaya 3D modellere yükselecek!" }
    ],
    homework: "Çizdiğiniz anahtarlık tasarımının DXF veya SVG formatında kaydedilip üretime nasıl gönderileceğini araştırın.",
    nextWeekPreview: "Taslak Çizimlerin 3 Boyutlu Görsellere Dönüştürülmesi: Tinkercad ile 3D Katı Modelleme!"
  },

  // 14. HAFTA
  {
    week: 14,
    date: "14 - 20 Aralık",
    hours: "2 Ders Saati",
    unit: "4. ÜNİTE: BİLGİSAYAR DESTEKLİ TASARIM (CAD)",
    unitBadge: "4. Ünite: Hafta 3",
    unitTheme: "tema-4",
    title: "Taslak Çizimlerin Üç Boyutlu (3B) Görsellere Dönüşümü",
    subtitle: "Yerli Malı Haftası & Tinkercad ile 3D Modelleme: Katı Cisimler, Boşluklar ve Gruplama",
    outcomeCode: "TT.7.4.2 (b)",
    targetSkill: "3B Uzamsal Düşünme & Katı Modelleme (Solid Modeling)",
    curiosityQuestion: "3D yazıcılar kütüphanedeki bir büstü veya plastik bir oyun kolunu sıfırdan katman katman nasıl basar?",
    roadmap: [
      { title: "Tutum ve Yatırım (Yerli Malı)", desc: "Milli teknoloji hamlesinde yerli üretim ve 3D yazıcı teknolojisinin önemi." },
      { title: "2B'den 3B'ye Geçiş", desc: "X ve Y eksenlerine derinlik (Z ekseni) ekleyerek hacim kazandırma." },
      { title: "Tinkercad Arayüzü ve Çalışma Düzlemi", desc: "Küp, silindir, küre temel şekilleri ve kamera açıları." },
      { title: "Katı (Solid) ve Delik (Hole) Mantığı", desc: "Şekilleri birleştirme ve içi boş hacimler oyma tekniği." }
    ],
    section1: {
      title: "3 Boyutlu Uzay: X, Y ve Z Eksenleri",
      subtitle: "Genişlik ve yüksekliğe derinlik eklendiğinde nesneler dokunulabilir bir hacim kazanır.",
      layout: "split-visual",
      card: {
        title: "3D Katı Modellemenin 3 Temel Kuralı",
        icon: "🧊",
        desc: "Tinkercad gibi 3B yazılımlarda uygulanan Boolean mantığı:",
        items: [
          { bold: "1. Ekleme (Birleştirme)", text: "İki katı şekli (örn: küp ve çatı piramidi) yan yana getirip tek parça gövde yapmak." },
          { bold: "2. Çıkarma (Delik Açma)", text: "Bir şekli 'Delik' (Hole) yapıp katı cismin içine sokarak içini oymak veya delik delmek." },
          { bold: "3. Gruplama (Group / Ctrl+G)", text: "Seçilen tüm parçaları tek bir birleşik nesneye dönüştürmek." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#c084fc" stroke-width="1.5"/>
        <text x="200" y="42" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">3D Modelleme Mantığı: Katı + Delik = Sonuç</text>
        
        <!-- Adım 1: Katı Küp -->
        <g transform="translate(45, 80)">
          <!-- İzometrik Küp -->
          <polygon points="40,20 70,5 100,20 70,35" fill="#38bdf8" stroke="#bae6fd"/>
          <polygon points="40,20 70,35 70,75 40,60" fill="#0284c7" stroke="#bae6fd"/>
          <polygon points="100,20 70,35 70,75 100,60" fill="#0369a1" stroke="#bae6fd"/>
          <text x="70" y="95" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">1. Katı Küp</text>
        </g>
        
        <text x="160" y="125" fill="#ffffff" font-size="16" font-weight="bold">+</text>
        
        <!-- Adım 2: Silindir Delik -->
        <g transform="translate(165, 80)">
          <ellipse cx="40" cy="25" rx="18" ry="8" fill="#64748b" opacity="0.6" stroke="#94a3b8" stroke-dasharray="2 2"/>
          <path d="M22 25 V65 C22 70 58 70 58 65 V25" fill="#475569" opacity="0.4" stroke="#94a3b8" stroke-dasharray="2 2"/>
          <text x="40" y="95" fill="#f59e0b" font-size="8" font-weight="bold" text-anchor="middle">2. Silindir Delik</text>
        </g>
        
        <text x="250" y="125" fill="#ffffff" font-size="16" font-weight="bold">=</text>
        
        <!-- Adım 3: Ortası Delik Parça -->
        <g transform="translate(265, 80)">
          <polygon points="40,20 70,5 100,20 70,35" fill="#34d399" stroke="#a7f3d0"/>
          <ellipse cx="70" cy="20" rx="12" ry="5" fill="#0c1322"/>
          <polygon points="40,20 70,35 70,75 40,60" fill="#059669" stroke="#a7f3d0"/>
          <polygon points="100,20 70,35 70,75 100,60" fill="#047857" stroke="#a7f3d0"/>
          <text x="70" y="95" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">3. Gruplanmış Ürün</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Yerli Malı Haftası ve Dijital Üretim Devrimi",
      subtitle: "Dışa bağımlılığı azaltmanın yolu kendi yazılım ve donanımımızı 3D tasarlamaktır.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Milli Üretim",
          title: "3D Yazıcılar ve Hızlı Prototipleme",
          desc: "Fikirden ürüne dakikalar içinde geçebilme gücü.",
          bullets: [
            "Hammadde olarak mısır nişastasından yapılan çevre dostu PLA filamentler.",
            "Kırılan bir buzdolabı kulpunu veya drone pervanesini evde basabilme özgürlüğü.",
            "Yedek parça ithalatını sıfırlayan yerli üretim vizyonu."
          ]
        },
        {
          badge: "3D Beceriler",
          title: "Uzamsal Düşünme Gücü",
          desc: "Bir cismi zihinde evirip çevirerek arkasını ve içini görebilme.",
          bullets: [
            "Tinkercad'de 'Hizalama' (Align) aracı ile parçaları tam ortalama.",
            "Çalışma düzlemini (Workplane) eğimli yüzeylere taşıyarak çizim yapma.",
            "Mimarlık ve mühendisliğin temel reflekslerini kazanma."
          ]
        }
      ]
    },
    workshop: {
      title: "Tinkercad ile Yerli Tasarım Bardak Tutacağı",
      subtitle: "3D ortamda silindir ve küpleri birleştirip delik aracıyla ergonomik kulp açma.",
      steps: [
        { title: "Ana Silindiri Yerleştirin", desc: "Çapı 70 mm, yüksekliği 85 mm olan bir katı silindir koyun." },
        { title: "İçini Oyun", desc: "Çapı 64 mm olan ikinci bir silindiri 'Delik' yapıp içine ortalayın." },
        { title: "Kulpu Ekleyin ve Gruplayın", desc: "Yanına 'Torus' (halka) ekleyip hepsini seçip 'Grupla' butonuna basın." }
      ],
      criteria: [
        "Katı ve delik araçlarının doğru sırada kullanılması",
        "Tüm parçaların 'Align' (Hizala) aracıyla simetrik ortalanması",
        "Yerli üretim ve dayanıklılık ilkelerine uygun et kalınlığı (en az 3 mm)"
      ]
    },
    tips: {
      safetyTitle: "3D Modelleme Hassasiyeti",
      safetyRules: [
        { bold: "Havada Asılı Parça Bırakmayın", text: "3D yazıcılar yerçekimi nedeniyle havada asılı boşluklara baskı yapamaz; parçalar tabana basmalı veya destek almalıdır." }
      ],
      myths: [
        { wrong: "3D modelleme yapmak için çok pahalı süper bilgisayarlar gerekir.", correct: "Tinkercad web tarayıcısı üzerinden çalışan tamamen ücretsiz ve hafif bir 3D modelleme aracıdır." }
      ]
    },
    quiz: {
      question: "Tinkercad ve benzeri 3B modelleme yazılımlarında, bir nesnenin içine oyuk açmak veya pencere gibi boşluklar oluşturmak için hangi özellik kullanılır?",
      options: [
        { text: "A) Renk Değiştirme", isCorrect: false },
        { text: "B) Delik (Hole) Yapma ve Gruplama", isCorrect: true },
        { text: "C) Sayfayı Yenileme", isCorrect: false },
        { text: "D) Dosyayı Silme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 3B modellemede boşluklar oluşturmak için şekil önce <strong>Delik (Hole)</strong> yapılır, ardından katı cisimle seçilip <strong>Gruplanır</strong>."
    },
    summaryRules: [
      { bold: "3. Boyut = Z Ekseni", text: "Derinlik katarak hacimli nesneler ürettik." },
      { bold: "Katı + Delik = İnovasyon", text: "Karmaşık aletler basit şekillerin birleşimidir." },
      { bold: "Yerli Malı Dijitaldir", text: "Kendi 3D modellerimizi üreterek geleceğe yatırım yapıyoruz." }
    ],
    homework: "Tinkercad üzerinde evinizdeki bir masa lambasının 3B modelini çizmeye başlayın.",
    nextWeekPreview: "Çoklu Ortam Sunusu Hazırlama: Tasarımlarımızı Profesyonelce Tanıtma!"
  },

  // 15. HAFTA
  {
    week: 15,
    date: "21 - 27 Aralık",
    hours: "2 Ders Saati",
    unit: "4. ÜNİTE: BİLGİSAYAR DESTEKLİ TASARIM (CAD)",
    unitBadge: "4. Ünite: Hafta 4",
    unitTheme: "tema-4",
    title: "Çoklu Ortam Sunusu Hazırlayabilme",
    subtitle: "3D Tasarım Render'ları, Ses, Video ve Etkili Sunum İlkeleriyle Projeyi Paylaşma",
    outcomeCode: "TT.7.4.2",
    targetSkill: "Multimedya Sunum Planlama & Görsel İletişim",
    curiosityQuestion: "Dünyanın en iyi buluşunu yapsanız ama sunum slaytlarınız sıkıcı, yazılarla dolu ve karanlık olsa projenize kim yatırım yapar?",
    roadmap: [
      { title: "Çoklu Ortam (Multimedia) Nedir?", desc: "Metin, ses, video, animasyon ve 3D görsellerin etkileyici uyumu." },
      { title: "Sunum Planlama Aşamaları", desc: "Hikâye Panosu (Storyboard), hedef kitle analizi ve mesaj kurgusu." },
      { title: "3D Tasarımdan Görsel (Render) Alma", desc: "Tinkercad modelini en iyi gösteren ışık ve kamera açısını seçme." },
      { title: "Sunum Değerlendirme Kriterleri", desc: "Zaman yönetimi, beden dili, ses tonu ve slayt sadeliği." }
    ],
    section1: {
      title: "Etkileyici Bir Tasarım Sunumunun Formülü",
      subtitle: "İzleyicileri büyüleyen profesyonel bir çoklu ortam sunumunun anatomisi.",
      layout: "split-visual",
      card: {
        title: "Sunum Tasarımında 3 Altın Kural",
        icon: "🎬",
        desc: "Sunum hazırlarken dikkat edilmesi gerekenler:",
        items: [
          { bold: "1. Görsel Ağırlıklı Olmalı", text: "Uzun paragraflar yerine 3D modelinizin net ekran görüntüleri ve kısa anahtar kelimeler konmalıdır." },
          { bold: "2. Hikâye Anlatımı (Storytelling)", text: "'Bu ürünü neden tasarladım? Hangi acıyı çözüyor?' sorusuna duygusal bağ kurarak başlanmalıdır." },
          { bold: "3. Çoklu Ortam Entegrasyonu", text: "Modelin 360 derece dönüş videosu ve işlevsel ses efektleri sunuma hayat katar." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#c084fc" stroke-width="1.5"/>
        <text x="200" y="42" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">Çoklu Ortam Sunum Planı (Storyboard)</text>
        
        <!-- 3 Slayt Kartı Minyatürü -->
        <!-- Slayt 1: Problem -->
        <g transform="translate(45, 65)">
          <rect x="0" y="0" width="90" height="65" rx="6" fill="#162038" stroke="#f43f5e"/>
          <text x="45" y="25" fill="#f43f5e" font-size="16" text-anchor="middle">❓</text>
          <text x="45" y="45" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">1. PROBLEM</text>
          <text x="45" y="55" fill="#94a3b8" font-size="6" text-anchor="middle">Kullanıcı zorluğu</text>
        </g>
        
        <path d="M142 97 H158" stroke="#64748b" stroke-width="2"/>
        
        <!-- Slayt 2: 3D Çözüm -->
        <g transform="translate(165, 65)">
          <rect x="0" y="0" width="90" height="65" rx="6" fill="#162038" stroke="#00f0ff"/>
          <text x="45" y="25" fill="#00f0ff" font-size="16" text-anchor="middle">🧊</text>
          <text x="45" y="45" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">2. 3D ÇÖZÜM</text>
          <text x="45" y="55" fill="#94a3b8" font-size="6" text-anchor="middle">Tinkercad modeli</text>
        </g>
        
        <path d="M262 97 H278" stroke="#64748b" stroke-width="2"/>
        
        <!-- Slayt 3: Gelecek -->
        <g transform="translate(285, 65)">
          <rect x="0" y="0" width="90" height="65" rx="6" fill="#162038" stroke="#34d399"/>
          <text x="45" y="25" fill="#34d399" font-size="16" text-anchor="middle">🚀</text>
          <text x="45" y="45" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">3. ETKİ</text>
          <text x="45" y="55" fill="#94a3b8" font-size="6" text-anchor="middle">Hayata katkısı</text>
        </g>
        
        <rect x="65" y="150" width="270" height="40" rx="8" fill="#1e293b" stroke="#334155"/>
        <text x="200" y="168" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Çoklu Ortam Bileşenleri</text>
        <text x="200" y="182" fill="#94a3b8" font-size="8" text-anchor="middle">Metin + 3D Render Görseli + Kısa Animasyon / Ses</text>
      </svg>`
    },
    section2: {
      title: "Sunum Değerlendirme Kriterleri",
      subtitle: "İyi bir sunumu harika yapan sahne performansı detayları.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Beden Dili",
          title: "İzleyiciyle Göz Teması",
          desc: "Ekrana arkasını dönüp slayttaki yazıları okuyan konuşmacı sıkıcıdır.",
          bullets: [
            "Yüzünüz sınıfa dönük olmalı, herkesle göz teması kurmalısınız.",
            "Ses tonunuz canlı, heyecanlı ve net olmalıdır.",
            "Tasarımınıza duyduğunuz tutkuyu izleyiciye hissettirin."
          ]
        },
        {
          badge: "Zaman Yönetimi",
          title: "3 Dakika Kuralı",
          desc: "Fikrinizi dağıtmadan, en vurucu yerlerini kısa sürede anlatmak.",
          bullets: [
            "Gereksiz teknik jargona boğulmadan net konuşmak.",
            "Sunum sonunda arkadaşlarınızdan gelen sorulara açık olmak.",
            "Geri bildirimleri tebessümle ve not alarak karşılamak."
          ]
        }
      ]
    },
    workshop: {
      title: "3 Slaytlık Çoklu Ortam Proje Sunumu",
      subtitle: "Tinkercad'de tasarladığınız ürünün fotoğraflarını kullanarak 3 slaytlık mini sunu hazırlama.",
      steps: [
        { title: "Render Alın", desc: "Tinkercad modelinizin en güzel 2 açısının ekran görüntüsünü kaydedin." },
        { title: "Slaytları Oluşturun", desc: "Slayt 1: Başlık & Problem, Slayt 2: 3D Tasarım & Özellikler, Slayt 3: Faydası & Teşekkür." },
        { title: "Canlı Sunun", desc: "Akıllı tahtada 2 dakika boyunca sınıf arkadaşlarınıza projenizi tanıtın." }
      ],
      criteria: [
        "Slaytlarda yazı yerine görsel ve render kullanımına ağırlık verilmesi",
        "Sunumun akıcı, zaman sınırına uygun ve özgüvenli yapılması",
        "Tasarım fikrinin problem-çözüm ilişkisinin net aktarılabilmesi"
      ]
    },
    tips: {
      safetyTitle: "Sunum İpuçları",
      safetyRules: [
        { bold: "Slaytları Okumayın", text: "Slayt sizin not kâğıdınız değil, dinleyicinin pusulasıdır. Siz slaytta yazandan fazlasını anlatmalısınız." }
      ],
      myths: [
        { wrong: "Sunum ne kadar uzun sürerse o kadar başarılıdır.", correct: "En etkileyici sunumlar az ve öz konuşarak izleyicide merak ve hayranlık uyandıran kısa sunumlardır." }
      ]
    },
    quiz: {
      question: "Bir teknoloji ve tasarım projesini başkalarına etkili şekilde aktarmak için metin, fotoğraf, 3D model render'ı, ses ve videonun birlikte kullanıldığı sunum türüne ne ad verilir?",
      options: [
        { text: "A) Çoklu Ortam Sunusu (Multimedia Presentation)", isCorrect: true },
        { text: "B) Kara Tahta Çizimi", isCorrect: false },
        { text: "C) Fatura Dökümü", isCorrect: false },
        { text: "D) Telefon Rehberi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Farklı medya türlerinin (görsel, ses, metin, 3D) harmanlandığı sunumlara <strong>Çoklu Ortam Sunusu (Multimedia)</strong> denir."
    },
    summaryRules: [
      { bold: "Görseller Konuşsun", text: "Yazı az, 3D model görüntüleri bol olsun." },
      { bold: "Hikâyeni Anlat", text: "Problemi nasıl çözdüğünü heyecanla paylaş." },
      { bold: "Mimari Tasarım Geliyor", text: "Haftaya evler, binalar ve mekân tasarımına başlıyoruz!" }
    ],
    homework: "Geliştirdiğiniz sunuyu ailenize evde 3 dakikada sunup onların fikirlerini not alın.",
    nextWeekPreview: "5. Ünite: Mimari Tasarım & Mekân Kavramının İncelenmesi!"
  },

  // 16. HAFTA
  {
    week: 16,
    date: "28 Aralık - 03 Ocak",
    hours: "2 Ders Saati",
    unit: "5. ÜNİTE: MİMARİ TASARIM",
    unitBadge: "5. Ünite: Hafta 1",
    unitTheme: "tema-5",
    title: "Mekân Kavramının İncelenmesi & Mekânsal Analoji",
    subtitle: "Doğal ve Yapay Mekânlar, İnsan İhtiyaçları ve Mekânlar Arası Benzeşimler",
    outcomeCode: "TT.7.5.1",
    targetSkill: "Mekânsal Analoji & Çevresel Gözlem",
    curiosityQuestion: "Kuşların ördüğü yuvalar, karınca tünelleri ve arı kovanları ile insanların inşa ettiği gökdelenler arasında nasıl bir mimari akrabalık vardır?",
    roadmap: [
      { title: "Mekân Nedir?", desc: "İçinde yaşamın geçtiği, sınırları belirli fiziksel veya kavramsal boşluk." },
      { title: "Mekân Türleri", desc: "Açık, yarı açık ve kapalı mekânlar; doğal ve yapay çevre." },
      { title: "Mekânsal Analoji", desc: "Doğadaki sığınaklardan ve canlı yapılarından esinlenen mimari tasarımlar." },
      { title: "Mekânın Nitelikleri", desc: "Işık, akustik (ses), hava akımı, mahremiyet ve güvenlik." }
    ],
    section1: {
      title: "Mekân: Yaşamın Sahnesi",
      subtitle: "Mimarlık boşluğu şekillendirme ve insan için anlamlı kılma sanatıdır.",
      layout: "split-visual",
      card: {
        title: "3 Temel Mekân Türü",
        icon: "🏛️",
        desc: "İçinde bulunduğumuz alanların mimari sınıflandırması:",
        items: [
          { bold: "Kapalı Mekân", text: "Dört tarafı ve çatısı kapalı, dış etkenlerden tamamen korunaklı alanlar (Ev, sınıf, hastane)." },
          { bold: "Yarı Açık Mekân", text: "Gölge ve hava akımını birleştiren geçiş alanları (Balkon, veranda, çardak, revak)." },
          { bold: "Açık Mekân", text: "Doğayla doğrudan temas halinde olan geniş alanlar (Meydan, park, bahçe, stadyum)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#f472b6" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">Mekânsal Analoji: Doğal Mağaradan Modern Konuta</text>
        
        <!-- Sol: Doğal Mağara / Sığınak -->
        <g transform="translate(45, 65)">
          <path d="M10 80 Q50 15 110 40 Q130 90 90 100 H10 Z" fill="#162038" stroke="#64748b" stroke-width="2"/>
          <text x="65" y="65" fill="#94a3b8" font-size="14" text-anchor="middle">⛰️</text>
          <text x="65" y="115" fill="#94a3b8" font-size="8" font-weight="bold" text-anchor="middle">Doğal Mekân (Mağara)</text>
          <text x="65" y="126" fill="#64748b" font-size="7" text-anchor="middle">Rüzgâr ve yırtıcıdan koruma</text>
        </g>
        
        <!-- Merkez Ok -->
        <path d="M185 115 H215" stroke="#f472b6" stroke-width="2" marker-end="url(#arr)"/>
        
        <!-- Sağ: Eko-Mimari Ev -->
        <g transform="translate(235, 65)">
          <!-- Modern Konut -->
          <polygon points="65,15 15,50 115,50" fill="#1e293b" stroke="#f472b6" stroke-width="1.5"/>
          <rect x="25" y="50" width="80" height="55" rx="4" fill="#162038" stroke="#f472b6" stroke-width="1.5"/>
          <rect x="40" y="65" width="20" height="20" rx="3" fill="#fbcfe8" opacity="0.4"/>
          <rect x="75" y="70" width="18" height="35" rx="2" fill="#334155"/>
          <text x="65" y="118" fill="#fbcfe8" font-size="8" font-weight="bold" text-anchor="middle">Yapay Mekân (Modern Ev)</text>
          <text x="65" y="129" fill="#94a3b8" font-size="7" text-anchor="middle">Konfor, ışık ve yalıtım</text>
        </g>
        
        <text x="200" y="200" fill="#cbd5e1" font-size="8" text-anchor="middle">İnsan, doğadaki sığınma refleksini mimari zekâsıyla sanata dönüştürmüştür.</text>
      </svg>`
    },
    section2: {
      title: "Mekânsal Analoji Örnekleri",
      subtitle: "Binalar sadece beton yığınları değil, doğayla sohbet eden yaşayan organizmalardır.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Doğadan İlham",
          title: "Termit Tepeleri ve Havalandırma",
          desc: "Afrika'daki termit karıncalarının inşa ettiği dev kuleler.",
          bullets: [
            "Dışarısı 45 derece sıcakken yuvanın içi klimalı gibi 25 derecede sabit kalır.",
            "Zimbabve'deki Eastgate alışveriş merkezi bu termit analojisiyle tasarlanmıştır.",
            "Klima kullanmadan %90 daha az elektrik tüketir!"
          ]
        },
        {
          badge: "Işık ve Akustik",
          title: "Mekânın Ruhu (Atmosfer)",
          desc: "Bir mekâna girdiğimizde hissettiklerimiz rastlantı değildir.",
          bullets: [
            "Tavan yüksekliği arttıkça yaratıcı ve özgür düşünce güçlenir.",
            "Doğal gün ışığı alan sınıflarda öğrenme başarısı %20 artar.",
            "Mimar, ışığı ve havayı birer inşaat malzemesi gibi kullanır."
          ]
        }
      ]
    },
    workshop: {
      title: "Mekân Karşılaştırma ve Analoji Günlüğü",
      subtitle: "Öğrencilerin okullarındaki 2 farklı mekânı (örn: Kütüphane vs. Spor Salonu) analiz etmesi.",
      steps: [
        { title: "2 Mekân Seçin", desc: "Biri sessiz ve odaklanma alanı, diğeri hareket ve ses alanı olsun." },
        { title: "Nitelikleri Karşılaştırın", desc: "Tavan yüksekliği, ışık miktarı, zemin kaplaması ve havalandırma farklarını listeleyin." },
        { title: "Doğal Benzetim Yapın", desc: "Kütüphane doğada neye benzer? (Sessiz bir mağara mı, ulu bir ağaç kovuğu mu?)" }
      ],
      criteria: [
        "Mekân türlerini (açık, kapalı, yarı açık) doğru tespit edebilme",
        "Fiziksel özelliklerin insan psikolojisine etkisini açıklayabilme",
        "Özgün bir mekânsal analoji kurabilme"
      ]
    },
    tips: {
      safetyTitle: "Mimari ve Yaşam Kalitesi",
      safetyRules: [
        { bold: "Hava Sirkülasyonu", text: "Pencereleri karşılıklı açılabilen (çapraz havalandırmalı) odalar karbondioksit birikmesini önleyerek zihni açık tutar." }
      ],
      myths: [
        { wrong: "Büyük ev her zaman daha iyi ve lüks evdir.", correct: "İhtiyaca göre tasarlanmamış devasa evler kışın ısınamaz, temizliği zordur ve yüksek enerji israfına yol açar." }
      ]
    },
    quiz: {
      question: "Zimbabve'deki ünlü Eastgate alışveriş merkezinin klimasız doğal yollarla serinlemesi için Afrika termit karıncalarının yuva havalandırma kanallarından esinlenilmesi hangi mimari yaklaşıma örnektir?",
      options: [
        { text: "A) Mekânsal Analoji (Biyomimetik Mimari)", isCorrect: true },
        { text: "B) Yıkım Kararı", isCorrect: false },
        { text: "C) Şehir Efsanesi", isCorrect: false },
        { text: "D) Planlı Eskitme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Doğadaki canlıların barınma ve havalandırma sistemlerini binalara uyarlamaya <strong>Mekânsal Analoji</strong> denir."
    },
    summaryRules: [
      { bold: "Mekân = Yaşam Alanı", text: "Açık, kapalı ve yarı açık alanları tanıdık." },
      { bold: "Doğadan Mimarliğe", text: "Termitlerden kuş yuvalarına ilham aldık." },
      { bold: "Işık ve Akustik", text: "Mekânın ruhunu doğru tasarımla oluşturuyoruz." }
    ],
    homework: "Odanızın gün ışığı alma durumunu inceleyin: Çalışma masanız ışığa göre doğru yerde mi? Gözleminizi yazın.",
    nextWeekPreview: "Mimari Tasarım Özellikleri: İşlevselliğin Yapısal Farklılıklara Etkisi!"
  },

  // 17. HAFTA
  {
    week: 17,
    date: "04 - 10 Ocak",
    hours: "2 Ders Saati",
    unit: "5. ÜNİTE: MİMARİ TASARIM",
    unitBadge: "5. Ünite: Hafta 2",
    unitTheme: "tema-5",
    title: "Mimari Tasarım Özelliklerinin Ayırt Edilmesi",
    subtitle: "İşlevsel Özelliklerin Yapısal Farklılıklara Yol Açması, İklim ve Coğrafya Etkisi",
    outcomeCode: "TT.7.5.2",
    targetSkill: "İşlev-Biçim İlişkisini Çözümleme & Mimari Karşılaştırma",
    curiosityQuestion: "Karadeniz yaylalarındaki evler neden dik çatılı ve ahşap iken, Mardin veya Şanlıurfa evleri düz damlı ve kalın taş duvarlıdır?",
    roadmap: [
      { title: "'Biçim İşlevi Takip Eder'", desc: "Mimar Louis Sullivan'ın ünlü ilkesi (Form Follows Function)." },
      { title: "İklim ve Coğrafyanın Rolü", desc: "Kar, güneş, rüzgâr ve deprem şartlarının binayı şekillendirmesi." },
      { title: "Geleneksel Türk Evi Mimarisi", desc: "Cumbalar, avlular, geniş saçaklar ve taş-ahşap uyumu." },
      { title: "Yapı Malzemeleri Analizi", desc: "Taş, ahşap, kerpiç, çelik ve betonun avantaj/dezavantajları." }
    ],
    section1: {
      title: "Coğrafya Kaderdir, Mimari İse Çözümdür!",
      subtitle: "Farklı iklimlerde yaşayan insanlar yüzyıllar içinde en kusursuz yapısal çözümleri geliştirmiştir.",
      layout: "split-visual",
      card: {
        title: "İki Coğrafya İki Farklı Çözüm",
        icon: "🏡",
        desc: "İklimin mimariyi nasıl şekillendirdiğinin canlı kanıtı:",
        items: [
          { bold: "Rize / Karadeniz Evi", text: "Sürekli şiddetli yağmur ve kar yağdığı için çatıları çok diktir; bol orman olduğu için ahşap malzeme kullanılır." },
          { bold: "Mardin / Güneydoğu Evi", text: "Yazın 45 derece sıcağa karşı 80 cm kalınlığında sarı kalker taşı kullanılır; gündüz sıcağı geçirmez, gece ılık kalır. Çatılar kurutmalık düz damdır." },
          { bold: "Kapadokya Kaya Evleri", text: "Tüf kayalara oyulan evler yazın serin, kışın sıcacık kalarak sıfır enerjiyle mükemmel yalıtım sağlar." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#f472b6" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">İklimin Mimari Biçime Etkisi</text>
        
        <!-- Karadeniz Evi (Dik Çatılı) -->
        <g transform="translate(45, 65)">
          <rect x="0" y="0" width="135" height="125" rx="8" fill="#162038" stroke="#34d399"/>
          <!-- Dik Ahşap Çatı -->
          <polygon points="67,15 15,55 120,55" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
          <rect x="25" y="55" width="85" height="45" fill="#1e293b"/>
          <text x="67" y="112" fill="#a7f3d0" font-size="8" font-weight="bold" text-anchor="middle">Karadeniz Yayla Evi</text>
          <text x="67" y="122" fill="#94a3b8" font-size="7" text-anchor="middle">Dik Çatı (Kar tutmaz)</text>
        </g>
        
        <!-- Mardin Taş Evi (Düz Damlı) -->
        <g transform="translate(220, 65)">
          <rect x="0" y="0" width="135" height="125" rx="8" fill="#162038" stroke="#f59e0b"/>
          <!-- Düz Teras Dam -->
          <rect x="20" y="30" width="95" height="10" fill="#d97706"/>
          <rect x="25" y="40" width="85" height="60" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="67" y="112" fill="#fde68a" font-size="8" font-weight="bold" text-anchor="middle">Mardin Taş Evi</text>
          <text x="67" y="122" fill="#94a3b8" font-size="7" text-anchor="middle">Kalın Taş Duvar (Serin tutar)</text>
        </g>
      </svg>`
    },
    section2: {
      title: "İşlevsellik (Functionality) ve Yapısal Farklar",
      subtitle: "Bina ne işe yarayacaksa ona göre şekillenir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "İşlevsel Farklılık 1",
          title: "Hastane vs. Tiyatro Salonu",
          desc: "Kullanım amacı binaların plan şemasını baştan aşağı değiştirir.",
          bullets: [
            "Hastane: Hijyenik zeminler, sedye geçişi için geniş koridorlar ve asansörler.",
            "Tiyatro Salonu: Eğimli amfi oturma düzeni, yankı yapmayan akustik paneller ve karanlık sahne.",
            "Her yapı kendi fonksiyonuna kusursuz hizmet etmelidir."
          ]
        },
        {
          badge: "İşlevsel Farklılık 2",
          title: "Depreme Dayanıklı Mimari",
          desc: "Güvenlik her türlü süsün ve estetiğin önündedir.",
          bullets: [
            "Sismik izolatörler (Deprem anında binayı sallantıdan ayıran kauçuk tabanlar).",
            "Simetrik ve dengeli kolon-kiriş sistemleri.",
            "Hafif çelik veya esneyebilen ahşap karkas yapılar."
          ]
        }
      ]
    },
    workshop: {
      title: "İklim ve Fonksiyon Dedektifi",
      subtitle: "Farklı coğrafyalardan 3 yapı fotoğrafını inceleyip mimari kararların arkasındaki nedenleri çözme.",
      steps: [
        { title: "Yapıları İnceleyin", desc: "A) Eskimo İglosu B) Akdeniz Beyaz Bodrum Evi C) Yayla Ahşap Serenderi." },
        { title: "Neden Bu Malzeme?", desc: "Neden buz, neden kireç beyazı taş, neden yüksek kazıklar üstünde ahşap?" },
        { title: "Çıkarım Yapın", desc: "Bu evler yer değiştirseydi (örn: İglo Antalya'da olsaydı) ne olurdu?" }
      ],
      criteria: [
        "İklim ile yapı malzemesi arasındaki bağı doğru kurabilme",
        "İşlevin yapısal biçime nasıl yansıdığını gerekçelendirebilme",
        "Geleneksel Türk mimarisinin çevreye uyumundaki bilgeliği takdir edebilme"
      ]
    },
    tips: {
      safetyTitle: "Doğru Malzeme Seçimi",
      safetyRules: [
        { bold: "Yerel Malzeme Kullanımı", text: "İnşaat malzemesini binlerce kilometre öteden getirmek yerine bölgede bulunan yerel taş ve ahşabı kullanmak çevre kirliliğini ve maliyeti önler." }
      ],
      myths: [
        { wrong: "Betonarme binalar her zaman taş ve ahşap binalardan daha sağlıklıdır.", correct: "Doğal taş ve ahşap nefes alır, nemi dengeler; betonarme ise doğru yalıtılmazsa rutubet ve romatizmaya yol açabilir." }
      ]
    },
    quiz: {
      question: "Akdeniz ve Ege kıyılarındaki geleneksel evlerin dış cephelerinin genellikle kireçle bembeyaz boyanmasının temel mimari ve fiziksel sebebi nedir?",
      options: [
        { text: "A) Beyaz boyanın daha ucuz olması", isCorrect: false },
        { text: "B) Güneş ışınlarını geri yansıtarak evin içinin serin kalmasını sağlamak", isCorrect: true },
        { text: "C) Gece uzaydan görülebilmek", isCorrect: false },
        { text: "D) Yağmur sularını toplamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Beyaz renk güneş ışığını yansıtır (albedo etkisi); bu sayede kavurucu sıcaklarda <strong>evin içinin doğal yolla serin kalması</strong> sağlanır."
    },
    summaryRules: [
      { bold: "Biçim İşlevi Takip Eder", text: "Amaca uygun olmayan mimari yaşayamaz." },
      { bold: "İklim Mimarı Yönetir", text: "Karadeniz dik çatı, Mardin taş duvar." },
      { bold: "Deprem Gerçeği", text: "Sağlam zemin ve esnek mühendislik hayat kurtarır." }
    ],
    homework: "Yaşadığınız binanın çatısını ve duvarlarını inceleyin: Yaşadığınız şehrin iklimine uygun tasarlanmış mı? 3 cümleyle açıklayın.",
    nextWeekPreview: "Enerji Tasarrufu Haftası & Yaşamak İstediğin Hayalindeki Evi Tasarlama!"
  },

  // 18. HAFTA
  {
    week: 18,
    date: "11 - 17 Ocak",
    hours: "2 Ders Saati",
    unit: "5. ÜNİTE: MİMARİ TASARIM",
    unitBadge: "5. Ünite: Hafta 3",
    unitTheme: "tema-5",
    title: "Enerji Tasarrufu Haftası & Hayalimdeki Konut Tasarımı",
    subtitle: "Farklı Coğrafi ve İklim Şartlarına Uygun, Sıfır Enerjili Eko-Konut Projesi",
    outcomeCode: "TT.7.5.3",
    targetSkill: "Konut Tasarımı & Sürdürülebilir Mimari Maketi",
    curiosityQuestion: "Kendi elektriğini üreten, yağmur suyunu arıtıp kullanan ve kışın yakıt parası ödemeyen bir 'Sıfır Enerjili Ev' tasarlayabilir misiniz?",
    roadmap: [
      { title: "Enerji Tasarrufu Haftası", desc: "Binalarda harcanan enerjinin %40'ı ısınma ve soğutmaya gider; bunu nasıl sıfırlarız?" },
      { title: "Pasif Ev (Passive House) İlkeleri", desc: "Güney cepheye bakan pencereler, üç camlı yalıtım ve ısı geri kazanımlı havalandırma." },
      { title: "Kişisel İhtiyaç Programı", desc: "Bir ailenin yaşaması için gereken mekânlar (Salon, mutfak, çalışma odası, bahçe)." },
      { title: "Konut Taslak ve Maket Çizimi", desc: "Karton ve artık malzemelerle ölçekli konut maketine başlama." }
    ],
    section1: {
      title: "Sıfır Enerjili Eko-Ev Mimarisi",
      subtitle: "Geleceğin evleri doğayı kirleten değil, doğayla uyum içinde yaşayan yeşil binalardır.",
      layout: "split-visual",
      card: {
        title: "Eko-Konutun 4 Temel Organı",
        icon: "🌿",
        desc: "Sürdürülebilir mimarinin vazgeçilmez bileşenleri:",
        items: [
          { bold: "1. Güneş Panelli Çatı", text: "Evin tüm elektrik ve sıcak su ihtiyacını temiz güneş enerjisinden üretir." },
          { bold: "2. Yağmur Suyu Hasadı", text: "Çatıdaki oluklardan depoya akan yağmur suyu filtrelenerek bahçe sulamada ve rezervuarda kullanılır." },
          { bold: "3. Süper Yalıtım (Isı Yalıtımı)", text: "Taş yünü ve mantolama sayesinde kışın sıcaklık kaçmaz, yazın içeriye sıcak girmez." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#10b981" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Sıfır Enerjili Eko-Ev Kesiti</text>
        
        <!-- Çatı ve Güneş Paneli -->
        <polygon points="200,60 90,110 310,110" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
        <!-- Güneş Panelleri Çatı Üzerinde -->
        <rect x="130" y="80" width="60" height="20" rx="2" fill="#0284c7" stroke="#38bdf8"/>
        <text x="160" y="93" fill="#ffffff" font-size="7" text-anchor="middle">Güneş Paneli</text>
        
        <!-- Bina Gövdesi -->
        <rect x="110" y="110" width="180" height="75" fill="#162038" stroke="#10b981" stroke-width="1.5"/>
        
        <!-- Geniş Güney Pencereleri -->
        <rect x="130" y="125" width="40" height="30" rx="3" fill="#38bdf8" opacity="0.3" stroke="#38bdf8"/>
        <text x="150" y="143" fill="#bae6fd" font-size="6" text-anchor="middle">3 Kat Cam</text>
        
        <rect x="230" y="125" width="40" height="30" rx="3" fill="#38bdf8" opacity="0.3" stroke="#38bdf8"/>
        
        <!-- Yağmur Suyu Deposu -->
        <rect x="60" y="145" width="35" height="40" rx="4" fill="#0f172a" stroke="#00f0ff"/>
        <text x="77" y="165" fill="#00f0ff" font-size="6" text-anchor="middle">Yağmur</text>
        <text x="77" y="175" fill="#00f0ff" font-size="6" text-anchor="middle">Deposu</text>
        <path d="M90 110 L75 145" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="2 2"/>
        
        <text x="200" y="202" fill="#a7f3d0" font-size="8" text-anchor="middle">Kendi enerjisini üreten, atık çıkarmayan akıllı yuva.</text>
      </svg>`
    },
    section2: {
      title: "Yaşamak İstediğim Konut: İhtiyaç Analizi",
      subtitle: "Bir ev sadece duvarlardan ibaret değildir; aile bireylerinin huzur bulduğu sığınaktır.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Mekân Dağılımı",
          title: "Fonksiyonel Plan Şeması",
          desc: "Evin odalarının birbirine göre doğru konumlandırılması.",
          bullets: [
            "Gündüz Yaşam Alanı: Salon ve mutfak güneş alan güney cepheye bakar.",
            "Gece Dinlenme Alanı: Yatak odaları sessiz ve sakin arka cepheye yerleştirilir.",
            "Islak Hacimler: Mutfak ve banyo tesisat kolaylığı için sırt sırta verilir."
          ]
        },
        {
          badge: "Sürdürülebilirlik",
          title: "Enerji Tasarrufu Kuralları",
          desc: "Küçük mimari dokunuşlarla %50 enerji tasarrufu sağlamak.",
          bullets: [
            "Kışın yaprak döken ağaçlar dikmek (Kışın güneşi kesmez, yazın gölge yapar).",
            "Girişte çift kapılı rüzgârlık (Hava perdesi görevi görür).",
            "Toprağın ısısından faydalanan toprak kaynaklı ısı pompaları."
          ]
        }
      ]
    },
    workshop: {
      title: "Eko-Konut Taslak Çizimi ve Kat Planı",
      subtitle: "Öğrencilerin seçtikleri bir iklim şartına (dağ, sahil veya bozkır) uygun eko-ev kat planı çizmesi.",
      steps: [
        { title: "Coğrafyanı Seç", desc: "Örn: Kışları çok karlı Erzurum dağ evi mi, yazları çok sıcak Antalya sahil evi mi?" },
        { title: "Kat Planını Çiz (Kuşbakışı)", desc: "1/50 ölçekte salon, mutfak, banyo ve pencereleri kâğıda çizin." },
        { title: "Yeşil Enerji Detayları", desc: "Güneş panelinin, yalıtım malzemesinin ve yağmur deposunun yerini etiketleyin." }
      ],
      criteria: [
        "Seçilen iklim koşullarına uygun yapısal kararlar alma",
        "Kat planında odaların birbiriyle mantıklı sirkülasyon (geçiş) ilişkisi",
        "Enerji Tasarrufu Haftası ruhuna uygun yeşil mimari çözümleri gösterme"
      ]
    },
    tips: {
      safetyTitle: "Enerji Verimliliği Standartları",
      safetyRules: [
        { bold: "Termal Köprüleri Engelleyin", text: "Balkon demirlerinin veya kolonların dışarıya açık kalması binanın ısısını dışarı kaçırır; binanın her yeri kesintisiz sarılmalıdır." }
      ],
      myths: [
        { wrong: "Güneş panelleri kışın ve bulutlu havalarda hiç elektrik üretmez.", correct: "Modern fotovoltaik paneller doğrudan güneş ışığı olmasa da bulutlardan süzülen ultraviyole ışıkla elektrik üretmeye devam eder." }
      ]
    },
    quiz: {
      question: "Binaların pencerelerinin güneye baktırılması, yüksek yalıtım yapılması ve çatıda güneş enerjisi kullanılarak neredeyse hiç yakıt tüketmeyen evlere ne ad verilir?",
      options: [
        { text: "A) Pasif Ev / Sıfır Enerjili Ev (Passive House)", isCorrect: true },
        { text: "B) Taş Kömürü Santrali", isCorrect: false },
        { text: "C) Çadır Kent", isCorrect: false },
        { text: "D) Prefabrik Baraka", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Doğal güneş ışığı, üstün yalıtım ve yenilenebilir kaynaklarla enerji faturasını sıfıra yaklaştıran yapılara <strong>Pasif Ev (Sıfır Enerjili Konut)</strong> denir."
    },
    summaryRules: [
      { bold: "Enerji Tasarrufu Gelecektir", text: "Yalıtımlı binalar dünyamızı korur." },
      { bold: "Doğru Cephe Seçimi", text: "Güneşten bedava ışık ve ısı sağladık." },
      { bold: "Sıfır Atık Yuvalar", text: "Yağmur suyunu biriktirip dönüştürüyoruz." }
    ],
    homework: "Çizdiğiniz kat planının renkli bir maketini hazırlamak için evdeki kutu ve kartonları toplamaya başlayın.",
    nextWeekPreview: "Mimari Tasarım İçin Çoklu Ortam Sunumu & 1. Dönem Büyük Değerlendirmesi!"
  },

  // 19. HAFTA
  {
    week: 19,
    date: "18 - 24 Ocak",
    hours: "2 Ders Saati",
    unit: "5. ÜNİTE: MİMARİ TASARIM",
    unitBadge: "1. Dönem Sonu",
    unitTheme: "tema-5",
    title: "Mimari Tasarım Çoklu Ortam Sunumu & 1. Dönem Değerlendirmesi",
    subtitle: "Estetik Algının Mimariye Etkisi, Maket Sergisi ve Dönem Boyu Kazanılan Beceriler",
    outcomeCode: "TT.7.5.4",
    targetSkill: "Mimari Sunum & Ürün Değerlendirme / Savunma",
    curiosityQuestion: "Mimar Sinan 450 yıl önce inşa ettiği Süleymaniye ve Selimiye Camilerini padişaha ve halka nasıl sundu? Bir mimarın ikna kabiliyeti neden bu kadar önemlidir?",
    roadmap: [
      { title: "Mimar Sinan'ın Dehası", desc: "Estetik, mühendislik, akustik ve deprem izolatörlerinin 5 asır önceki zirvesi." },
      { title: "Estetik Algı ve Oran", desc: "Altın oran, simetri, sadelik ve gökyüzüyle bütünleşen silüet." },
      { title: "Konut Maketi ve Sunum", desc: "Öğrencilerin hazırladığı eko-konut tasarımlarını akıllı tahtada sunması." },
      { title: "1. Dönem Başarı Portfolyosu", desc: "Kavramlardan CAD ve mimariye uzanan 19 haftalık gurur tablosu." }
    ],
    section1: {
      title: "Mimar Sinan ve Evrensel Estetik",
      subtitle: "Dünya mimarlık tarihinin en büyük dehasının bıraktığı zamansız ilkeler.",
      layout: "split-visual",
      card: {
        title: "Sinan'ın 3 Ustalık Sırrı",
        icon: "🕌",
        desc: "Günümüz mimarlarının hala hayranlıkla incelediği çözümler:",
        items: [
          { bold: "Akustik ve Ses Küpleri", text: "Kubbenin içine yerleştirdiği boşluklu testiler sayesinde mikrofonsuz ses tüm camiye kristal netlikte yayılır." },
          { bold: "Hava Akımı ve İsli Odası", text: "Yüzlerce kandilden çıkan dumanı hava akımıyla tek bir odada toplayıp oradan dünyanın en kaliteli mürekkebini üretmiştir." },
          { bold: "Deprem Esnekliği", text: "Temellerin altına koyduğu kazıklar ve esnek harçlar sayesinde 500 yıldır hiçbir eseri yıkılmamıştır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#f472b6" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">Mimar Sinan'ın Selimiye Kubbe Akustiği ve Oranı</text>
        
        <!-- Kubbe Silüeti -->
        <g transform="translate(100, 65)">
          <path d="M0 110 C0 30 200 30 200 110 Z" fill="#162038" stroke="#f472b6" stroke-width="2"/>
          <!-- Minareler -->
          <line x1="-15" y1="120" x2="-15" y2="10" stroke="#fbcfe8" stroke-width="2"/>
          <line x1="215" y1="120" x2="215" y2="10" stroke="#fbcfe8" stroke-width="2"/>
          
          <!-- Akustik Testileri (Nodlar) -->
          <circle cx="50" cy="65" r="4" fill="#f59e0b"/>
          <circle cx="100" cy="50" r="4" fill="#f59e0b"/>
          <circle cx="150" cy="65" r="4" fill="#f59e0b"/>
          <text x="100" y="75" fill="#fde68a" font-size="7" text-anchor="middle">İç Akustik Küpleri</text>
        </g>
        
        <text x="200" y="195" fill="#cbd5e1" font-size="8" text-anchor="middle">"Çıraklık (Şehzade), Kalfalık (Süleymaniye), Ustalık (Selimiye)"</text>
      </svg>`
    },
    section2: {
      title: "1. Dönem Portfolyosu: Neler Başardık?",
      subtitle: "Eylül ayından bugüne tasarımcı kimliğimize kattığımız büyük değerler.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Bilişsel Beceriler",
          title: "Kavramlar ve Problem Çözme",
          desc: "Artık çevremize sıradan bir tüketici gibi değil, bir tasarımcı gözüyle bakıyoruz.",
          bullets: [
            "Buluş, icat ve tasarımın farklarını kavradık.",
            "Tasarım odaklı düşünme (Design Thinking) basamaklarını uyguladık.",
            "Problemleri parçalara ayırıp (Decomposition) MoSCoW ile tasnif ettik."
          ]
        },
        {
          badge: "Dijital & Pratik Güç",
          title: "CAD ve Mimari Vizyon",
          desc: "Fikirlerimizi dijital dünyaya ve mekânlara aktardık.",
          bullets: [
            "2B vektörler ve katmanlar (Layers) ile teknik çizim yaptık.",
            "Tinkercad ile 3D katı modeller oluşturup delikler açtık.",
            "İklime uygun eko-konut kat planları ve maketleri geliştirdik."
          ]
        }
      ]
    },
    workshop: {
      title: "1. Dönem Mimari Sergi ve Pitching Sahnesi",
      subtitle: "Her öğrencinin eko-konut projesini ve maketini sınıfa 2 dakikada sunması.",
      steps: [
        { title: "Maketinizi Sergileyin", desc: "Yaptığınız maketi veya çizdiğiniz kat planını akıllı tahta önüne yerleştirin." },
        { title: "İklim ve Enerji Çözümünü Anlatın", desc: "Bu ev neden çevre dostu? Güneş panelini ve pencereleri nereye koydunuz?" },
        { title: "Akran Geri Bildirimi", desc: "Arkadaşlarınızın sorularını yanıtlayıp yapıcı önerilerini not alın." }
      ],
      criteria: [
        "Sunumun çoklu ortam araçlarıyla desteklenmiş olması",
        "Mimar Sinan estetiğine ve enerji tasarrufu bilincine değinilmesi",
        "Topluluk önünde konuşurken beden dili ve ses tonunun etkili kullanımı"
      ]
    },
    tips: {
      safetyTitle: "Tasarımcının Öz Değerlendirmesi",
      safetyRules: [
        { bold: "Gelişim Süreklidir", text: "Dönem boyunca yaptığınız ilk taslakla son maketinizi kıyaslayın; ne kadar devasa bir ilerleme kaydettiğinizi göreceksiniz." }
      ],
      myths: [
        { wrong: "Bir mimar sadece çizim yapar, sunum yapması gerekmez.", correct: "En dahi mimar bile çizimini müşteriye, belediyeye ve mühendislere ikna edici şekilde sunamazsa o bina asla inşa edilemez." }
      ]
    },
    quiz: {
      question: "Dünya mimarlık tarihine damga vuran, Süleymaniye ve Selimiye camilerinde kusursuz akustik, hava akımı ve deprem mühendisliği uygulayan büyük Türk mimarı kimdir?",
      options: [
        { text: "A) Mimar Sinan", isCorrect: true },
        { text: "B) İbn-i Sina", isCorrect: false },
        { text: "C) Piri Reis", isCorrect: false },
        { text: "D) Ali Kuşçu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Gurur Dolu Cevap: A!</strong> Eserleriyle 5 asırdır dünyaya ilham veren baş mimarımız <strong>Mimar Sinan</strong>'dır."
    },
    summaryRules: [
      { bold: "1. Dönem Başarıyla Bitti!", text: "Harika bir tasarım serüvenini tamamladık." },
      { bold: "Mimar Sinan Mirası", text: "Estetik, akıl ve dayanıklılık ilkemiz oldu." },
      { bold: "2. Dönem Biyotaklit Geliyor", text: "Şubat'ta doğanın gizli teknolojilerini çözeceğiz!" }
    ],
    homework: "1. dönem boyunca yaptığınız tüm çizim ve taslakları '7_Sinif_Tasarim_Portfolyom' dosyasında toplayıp düzenleyin.",
    nextWeekPreview: "Sömestr Tatili: Tasarım & İcat Macera Bülteni (Doğadan Tasarıma Hazırlık)!"
  }
];
