/**
 * 3. Sınıf Bilişim Teknolojileri ve Yazılım - 1. Dönem (1. Kısım: Hafta 1 - 10)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_GRADE3 = [
  // 1. HAFTA
  {
    week: 1,
    date: "14 - 20 Eylül",
    hours: "2 Ders Saati",
    unit: "1. Tema: Dijital Beceriler ve Bilgisayar Sistemleri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Bilişim Dünyasına Merhaba: Giriş ve Çıkış Birimleri",
    subtitle: "Bilgisayara Bilgi Verenler ve Bilgiyi Bize Ulaştıran Donanım Ailesi",
    outcomeCode: "BTY.3.1.1 (Donanım & Sistem Mimarisi)",
    targetSkill: "Giriş ve Çıkış Birimlerini Tanıma, Donanımları Görevlerine Göre Sınıflandırma",
    curiosityQuestion: "Bilgisayara sesimizi kaydettiğimizde ses dalgalarımız nasıl elektrik sinyaline dönüşüp hoparlörden tekrar çıkar?",
    roadmap: [
      { title: "Bilişim Nedir?", desc: "Bilginin teknoloji ile işlenmesi, saklanması ve iletilmesi." },
      { title: "Giriş Birimleri (Input)", desc: "Klavye, fare, mikrofon, web kamerası ve tarayıcı." },
      { title: "Çıkış Birimleri (Output)", desc: "Monitör, hoparlör, kulaklık ve yazıcı." },
      { title: "Laboratuvar Kuralları", desc: "3. sınıf bilişim atölyesinde güvenli ve saygılı çalışma ilkeleri." }
    ],
    section1: {
      title: "Bilgisayarın Duyu Organları: Giriş ve Çıkış",
      subtitle: "Bilgisayar da tıpkı bizim gibi duyar, görür ve konuşur!",
      layout: "split-visual",
      card: {
        title: "İki Büyük Donanım Takımı",
        icon: "🔌",
        desc: "Bilgisayara bağlanan tüm cihazlar iki gruba ayrılır:",
        items: [
          { bold: "Giriş Birimleri (Göz ve Kulak)", text: "Dış dünyadaki bilgiyi (yazı, ses, fotoğraf) bilgisayarın içine aktarır." },
          { bold: "Çıkış Birimleri (Ağız ve Yüz)", text: "Bilgisayarın içinde işlenen bilgiyi bize ses, görüntü veya kağıt baskı olarak sunar." },
          { bold: "Kasa (Merkezi Beyin)", text: "Girişten gelen bilgiyi işler ve çıkış birimlerine emir gönderir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Giriş Bölümü -->
        <rect x="35" y="45" width="105" height="150" rx="10" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="87" y="70" fill="#22d3ee" font-size="12" font-weight="bold" text-anchor="middle">GİRİŞ (INPUT)</text>
        <circle cx="87" cy="100" r="14" fill="#06b6d4" fill-opacity="0.2"/>
        <text x="87" y="105" font-size="14" text-anchor="middle">🎤</text>
        <text x="87" y="125" fill="#f8fafc" font-size="10" text-anchor="middle">Mikrofon</text>
        <text x="87" y="145" fill="#f8fafc" font-size="10" text-anchor="middle">Web Kamerası</text>
        <text x="87" y="165" fill="#f8fafc" font-size="10" text-anchor="middle">Klavye & Fare</text>
        <!-- Ok 1 -->
        <path d="M145 120 H175" stroke="#818cf8" stroke-width="3" stroke-linecap="round" marker-end="url(#arrow)"/>
        <!-- Kasa / İşlemci (Merkez) -->
        <rect x="180" y="55" width="60" height="130" rx="8" fill="#312e81" stroke="#6366f1" stroke-width="2"/>
        <circle cx="210" cy="80" r="8" fill="#f43f5e"/>
        <line x1="195" y1="105" x2="225" y2="105" stroke="#818cf8" stroke-width="2"/>
        <line x1="195" y1="120" x2="225" y2="120" stroke="#818cf8" stroke-width="2"/>
        <text x="210" y="155" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">İŞLEM</text>
        <text x="210" y="170" fill="#c7d2fe" font-size="8" text-anchor="middle">Kasa/CPU</text>
        <!-- Ok 2 -->
        <path d="M245 120 H275" stroke="#818cf8" stroke-width="3" stroke-linecap="round"/>
        <!-- Çıkış Bölümü -->
        <rect x="280" y="45" width="105" height="150" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="332" y="70" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">ÇIKIŞ (OUTPUT)</text>
        <circle cx="332" cy="100" r="14" fill="#f43f5e" fill-opacity="0.2"/>
        <text x="332" y="105" font-size="14" text-anchor="middle">🔊</text>
        <text x="332" y="125" fill="#f8fafc" font-size="10" text-anchor="middle">Hoparlör</text>
        <text x="332" y="145" fill="#f8fafc" font-size="10" text-anchor="middle">Monitör/Ekran</text>
        <text x="332" y="165" fill="#f8fafc" font-size="10" text-anchor="middle">Yazıcı (Printer)</text>
        <text x="210" y="222" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">Giriş ➔ İşlem ➔ Çıkış Döngüsü</text>
      </svg>`,
      caption: "Bilgisayar Sisteminde Giriş, İşlem ve Çıkış Mimarisi"
    },
    section2: {
      title: "Giriş ve Çıkış Parçalarını Karşılaştırıyoruz",
      subtitle: "Hangi parçanın hangi takıma ait olduğunu dedektif gibi ayıralım.",
      layout: "cards-2",
      cards: [
        {
          title: "Giriş Birimleri (Veri Verenler)",
          icon: "📥",
          desc: "Bizim komutlarımızı içeri aktaran araçlar:",
          items: [
            { bold: "Tarayıcı (Scanner)", text: "Kağıttaki resmi fotoğraflayıp bilgisayara aktarır." },
            { bold: "Mikrofon", text: "Şarkımızı veya sesimizi kaydedip dijital ses yapar." },
            { bold: "Webcam", text: "Görüntümüzü alıp uzaktaki arkadaşlarımıza ulaştırır." },
            { bold: "Fare & Klavye", text: "Tıklamalarımızı ve harfleri ekrana gönderir." }
          ]
        },
        {
          title: "Çıkış Birimleri (Sonuç Gösterenler)",
          icon: "📤",
          desc: "Bilgisayarın bize cevap verdiği araçlar:",
          items: [
            { bold: "Monitör (Ekran)", text: "Resimleri, videoları ve oyunları gözümüzle görmemizi sağlar." },
            { bold: "Yazıcı (Printer)", text: "Çizdiğimiz resmi beyaz kağıda renkli mürekkeple basar." },
            { bold: "Hoparlör & Kulaklık", text: "Müzikleri ve oyun efektlerini kulağımıza duyurur." },
            { bold: "Projeksiyon", text: "Görüntüyü dev bir perdeye yansıtır." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Donanım Eşleştirme Turnuvası'",
      subtitle: "Masanızdaki ve sınıftaki cihazları inceleyerek doğru takıma yerleştirin.",
      steps: [
        { title: "Cihazları İncele", desc: "Masanızdaki kulaklığı, fareyi, klavyeyi ve monitörü gözlemleyin." },
        { title: "Kartları Eşleştir", desc: "Öğretmeninizin gösterdiği donanımın Giriş mi Çıkış mı olduğunu kartınıza yazın." },
        { title: "Kablo Yolunu Takip Et", desc: "Kulaklık kablosunun kasanın hangi renkli girişine takıldığını keşfedin." }
      ],
      criteria: [
        "Giriş ve çıkış birimlerinin mantığını doğru açıklayabilme",
        "En az 5 farklı çevre biriminin adını ve işlevini söyleyebilme",
        "Laboratuvar kurallarına ve donanım kablolarına özen gösterme"
      ]
    },
    tips: {
      safetyTitle: "Donanım Ustası Tavsiyeleri",
      safetyRules: [
        { bold: "Kabloları Asılarak Çekme", text: "Kulaklık veya fareyi çıkarırken kablodan değil, plastik ucundan tutarak nazikçe çekin." },
        { bold: "Islak Elle Dokunma", text: "Elektronik cihazlara kesinlikle ıslak veya nemli elle yaklaşmayın." },
        { bold: "Kulaklık Sesi Seviyesi", text: "Kulaklık sesini asla sonuna kadar açmayın; kulak sağlığınızı korumak için orta seviyede dinleyin." }
      ],
      myths: [
        { wrong: "Monitör bilgisayarın beynidir; kasa sadece bir kutudur.", correct: "Monitör sadece bir çıkış ekranıdır. Bütün hesaplamaları ve işlemleri yapan asıl beyin kasanın içindeki işlemcidir (CPU)." }
      ]
    },
    quiz: {
      question: "Kağıt üzerine çizdiğimiz bir resmi bilgisayarın içine aktarmak isteyen bir öğrenci hangi donanım birimini kullanmalıdır?",
      options: [
        { text: "A) Yazıcı (Printer)", isCorrect: false },
        { text: "B) Tarayıcı (Scanner)", isCorrect: true },
        { text: "C) Hoparlör", isCorrect: false },
        { text: "D) Kulaklık", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Tarayıcı (Scanner) bir giriş birimidir; fiziksel kağıttaki resmi tarayıp bilgisayar ekranına dijital olarak aktarır."
    },
    summaryRules: [
      { bold: "Giriş Birimleri", text: "Bilgisayara bilgi ve komut verir." },
      { bold: "Çıkış Birimleri", text: "Bilgisayardaki sonucu bize duyurur veya gösterir." },
      { bold: "İşlemci", text: "Giriş ile çıkış arasındaki köprü ve zekâdır." }
    ],
    homework: "Evinizdeki teknolojik cihazları inceleyin; hangilerinin giriş hangilerinin çıkış birimi olduğunu not defterinize yazın.",
    nextWeekPreview: "İşletim Sistemi Nedir? Windows, Masaüstü, Görev Çubuğu ve Pencerelerin Yönetimi!"
  },

  // 2. HAFTA
  {
    week: 2,
    date: "21 - 27 Eylül",
    hours: "2 Ders Saati",
    unit: "1. Tema: Dijital Beceriler ve Bilgisayar Sistemleri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "İşletim Sistemi Nedir? Masaüstü ve Pencereler",
    subtitle: "Donanım ile Yazılımı Yöneten Büyük Şef: Windows, Pardus ve MacOS",
    outcomeCode: "BTY.3.1.2 (İşletim Sistemi Bilinci)",
    targetSkill: "İşletim Sistemi Kavramını Kavrama, Masaüstü Öğelerini ve Pencereleri Yönetebilme",
    curiosityQuestion: "Bilgisayarın içinde bir orkestra şefi olmasaydı fareye tıkladığımızda ekrandaki pencereler ne yapacağını nereden bilirdi?",
    roadmap: [
      { title: "İşletim Sistemi (OS)", desc: "Bilgisayarın tüm parçalarını ve programlarını yöneten ana yazılım." },
      { title: "Yaygın Sistemler", desc: "Windows, Milli İşletim Sistemimiz PARDUS, MacOS ve Android." },
      { title: "Masaüstü ve Simgeler", desc: "Masaüstü alanı, çöp kutusu, simgeler ve görev çubuğu." },
      { title: "Pencere Kontrolleri", desc: "Simge durumuna küçült (-), Ekranı kapla (□), Kapat (X)." }
    ],
    section1: {
      title: "Büyük Orkestra Şefi: İşletim Sistemi",
      subtitle: "İşletim sistemi olmadan bilgisayar sadece boş bir metal yığınıdır.",
      layout: "split-visual",
      card: {
        title: "İşletim Sisteminin 3 Süper Görevi",
        icon: "🎛️",
        desc: "Bilgisayar açıldığı andan kapandığı ana kadar:",
        items: [
          { bold: "Donanımları Yönetir", text: "Klavyeden basılan harfleri ekrana iletir, yazıcıya kağıt yazdırır." },
          { bold: "Programları Çalıştırır", text: "Oyunların, çizim programlarının ve videoların uyumla çalışmasını sağlar." },
          { bold: "Dosyaları Düzenler", text: "Çalışmalarımızı kaydeder ve istediğimiz an bulmamızı sağlar." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Pencere Çerçevesi -->
        <rect x="55" y="45" width="310" height="160" rx="10" fill="#1e293b" stroke="#334155" stroke-width="2"/>
        <!-- Pencere Başlık Çubuğu -->
        <rect x="55" y="45" width="310" height="28" rx="8" fill="#312e81"/>
        <text x="75" y="63" fill="#e0e7ff" font-size="11" font-weight="bold">Bilişim Penceresi (Windows / Pardus)</text>
        <!-- 3 Kontrol Butonu -->
        <circle cx="315" cy="59" r="6" fill="#f59e0b"/>
        <text x="315" y="62" fill="#000" font-size="8" text-anchor="middle" font-weight="bold">-</text>
        <circle cx="333" cy="59" r="6" fill="#10b981"/>
        <text x="333" y="62" fill="#000" font-size="8" text-anchor="middle" font-weight="bold">□</text>
        <circle cx="351" cy="59" r="6" fill="#f43f5e"/>
        <text x="351" y="62" fill="#fff" font-size="8" text-anchor="middle" font-weight="bold">✕</text>
        <!-- Pencere İçeriği -->
        <rect x="75" y="85" width="60" height="50" rx="6" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" stroke-width="1"/>
        <text x="105" y="112" font-size="16" text-anchor="middle">📁</text>
        <text x="105" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Belgelerim</text>
        <rect x="155" y="85" width="60" height="50" rx="6" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="1"/>
        <text x="185" y="112" font-size="16" text-anchor="middle">🎨</text>
        <text x="185" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Resimlerim</text>
        <rect x="235" y="85" width="60" height="50" rx="6" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1"/>
        <text x="265" y="112" font-size="16" text-anchor="middle">🎮</text>
        <text x="265" y="145" fill="#94a3b8" font-size="9" text-anchor="middle">Oyunlar</text>
        <!-- Görev Çubuğu -->
        <rect x="55" y="175" width="310" height="30" fill="#0f172a"/>
        <rect x="62" y="180" width="20" height="20" rx="4" fill="#6366f1"/>
        <text x="72" y="194" fill="#fff" font-size="10" text-anchor="middle">⊞</text>
        <text x="95" y="194" fill="#64748b" font-size="10">Aramak için buraya yazın...</text>
        <text x="335" y="194" fill="#94a3b8" font-size="10">09:30</text>
      </svg>`,
      caption: "İşletim Sistemi Masaüstü ve 3 Sihirli Pencere Düğmesi"
    },
    section2: {
      title: "Pencere Kontrol Düğmeleri ve Görev Çubuğu",
      subtitle: "Ekrandaki programları kolayca yönetebilmek için 3 sihirli düğme:",
      layout: "cards-2",
      cards: [
        {
          title: "3 Sihirli Pencere Düğmesi",
          icon: "🪟",
          desc: "Her pencerenin sağ üst köşesinde bulunur:",
          items: [
            { bold: "Eksi (-) Düğmesi", text: "Pencereyi kapatmaz, simge durumuna küçültüp görev çubuğuna saklar." },
            { bold: "Kare (□) Düğmesi", text: "Pencereyi tüm ekrana yayar (Kapla) veya eski boyutuna geri getirir." },
            { bold: "Çarpı (X) Düğmesi", text: "Programı tamamen kapatır ve işini bitirir." }
          ]
        },
        {
          title: "Masaüstünün Yardımcıları",
          icon: "🖥️",
          desc: "Ekrandaki çalışma alanımızın parçaları:",
          items: [
            { bold: "Masaüstü (Desktop)", text: "Bilgisayar açılınca karşımıza gelen ana çalışma masamız." },
            { bold: "Simgeler (Icons)", text: "Programları, oyunları ve klasörleri temsil eden küçük resimler." },
            { bold: "Görev Çubuğu (Taskbar)", text: "En alttaki saat, başlat menüsü ve açık programların durduğu şerit." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Pencere Cambazı'",
      subtitle: "Ekranda birden fazla pencere açarak boyutlandırma ve yerleştirme çalışması yapıyoruz.",
      steps: [
        { title: "İki Program Aç", desc: "Masaüstünden hem Paint'i hem de Hesap Makinesini çift tıklayarak açın." },
        { title: "Yan Yana Yerleştir", desc: "Pencerelerin başlık çubuğundan tutup sürükleyerek ekranı ikiye bölün." },
        { title: "Küçült ve Büyüt", desc: "(-) ve (□) butonlarına basarak pencerelerin nasıl saklanıp büyüdüğünü deneyin." }
      ],
      criteria: [
        "Pencere kontrol butonlarının (-, □, X) görevlerini eksiksiz uygulayabilme",
        "Pencereleri başlık çubuğundan tutup ekranda taşıyabilme",
        "Görev çubuğundan küçültülmüş pencereleri tekrar açabilme"
      ]
    },
    tips: {
      safetyTitle: "İşletim Sistemi İpuçları",
      safetyRules: [
        { bold: "Kaydetmeden Çarpıya (X) Basma", text: "Yaptığınız çalışmayı kaydetmeden pencereyi kapatırsanız emeğiniz kaybolabilir!" },
        { bold: "Masaüstünü Temiz Tut", text: "Masaüstüne yüzlerce dosya doldurmak bilgisayarın açılışını yavaşlatır; klasörler kullanın." },
        { bold: "Milli Yazılımımız PARDUS", text: "TÜBİTAK tarafından geliştirilen güvenli milli işletim sistemimiz Pardus'u tanıyın." }
      ],
      myths: [
        { wrong: "Eksi (-) butonuna bastığımızda program tamamen silinir.", correct: "Hayır! Eksi butonu programı sadece görev çubuğunda beklemeye alır; üzerine tıklayınca hemen geri gelir." }
      ]
    },
    quiz: {
      question: "Bir pencereyi kapatmadan, sadece geçici olarak ekranın altındaki görev çubuğuna indirmek için hangi düğmeye basılır?",
      options: [
        { text: "A) Kırmızı Çarpı (X) Düğmesi", isCorrect: false },
        { text: "B) Eksi (-) Simge Durumuna Küçült Düğmesi", isCorrect: true },
        { text: "C) Kare (□) Ekranı Kapla Düğmesi", isCorrect: false },
        { text: "D) Başlat Menüsü Tuşu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Eksi (-) butonu pencereyi kapatmaz, geçici olarak görev çubuğuna indirir."
    },
    summaryRules: [
      { bold: "İşletim Sistemi", text: "Bilgisayarın patronudur; her şeyi o yönetir." },
      { bold: "Pencereler", text: "(-) saklar, (□) kaplar, (X) kapatır." },
      { bold: "Görev Çubuğu", text: "Açık programların sıralandığı güvenli limandır." }
    ],
    homework: "Evdeki bilgisayarda veya tabletinizde hangi işletim sisteminin çalıştığını öğrenin (Windows, Android, MacOS vb.).",
    nextWeekPreview: "Dosya ve Klasör Yönetimi: Bilgilerimizi Ağaç Gibi Düzenli Saklama Sanatı!"
  },

  // 3. HAFTA
  {
    week: 3,
    date: "28 Eylül - 04 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Dijital Beceriler ve Bilgisayar Sistemleri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Dosya ve Klasör Yönetimi: Düzenli Dijital Kütüphanem",
    subtitle: "Dosya Türleri, Ağaç Yapısı, Klasör Açma, Taşıma ve Geri Dönüşüm Kutusu",
    outcomeCode: "BTY.3.1.3 (Veri Organizasyonu)",
    targetSkill: "Hiyerarşik Klasör Ağacı Oluşturma, Dosyaları Düzenleme ve Geri Dönüşümü Yönetme",
    curiosityQuestion: "Odandaki bütün kitaplar, kıyafetler ve oyuncaklar tek bir yığın halinde yere dökülseydi ne olurdu? Bilgisayarda bunu klasörlerle nasıl önleriz?",
    roadmap: [
      { title: "Dosya Nedir?", desc: "Resim, müzik, metin veya video gibi her bir dijital belge." },
      { title: "Klasör (Dizin) Nedir?", desc: "Dosyaları konularına göre gruplayıp içine koyduğumuz sarı dolaplar." },
      { title: "Alt Klasör Sistemi", desc: "Büyük dolabın içine küçük kutular yerleştirme (Ağaç yapısı)." },
      { title: "Geri Dönüşüm Kutusu", desc: "Yanlışlıkla silinen dosyaları kurtarma veya tamamen temizleme." }
    ],
    section1: {
      title: "Dijital Düzen: Dosyalar ve Sarı Klasörler",
      subtitle: "Aradığımız bir resmi 3 saniyede bulabilmek düzenli klasör yapısıyla mümkündür.",
      layout: "split-visual",
      card: {
        title: "Klasör Ağacı Nasıl Çalışır?",
        icon: "📂",
        desc: "Düzenli bir bilgisayar kullanıcısının klasör hiyerarşisi:",
        items: [
          { bold: "Ana Klasör (Kök)", text: "Örn: '3_A_Sinifi_Ali' klasörü masaüstünde durur." },
          { bold: "Alt Klasörler", text: "İçine 'Resimlerim', 'Ders Notlarım', 'Kodlama Projelerim' açılır." },
          { bold: "Dosyalar", text: "Her dosya kendi konusuna uygun alt klasörün içine kaydedilir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Ana Klasör -->
        <rect x="50" y="45" width="130" height="40" rx="8" fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b" stroke-width="2"/>
        <text x="70" y="70" font-size="16">📁</text>
        <text x="95" y="69" fill="#fde68a" font-size="11" font-weight="bold">BENİM DOSYALARIM</text>
        <!-- Ağaç Çizgileri -->
        <path d="M115 85 V125 H150" stroke="#818cf8" stroke-width="2" stroke-linecap="round"/>
        <path d="M115 125 V175 H150" stroke="#818cf8" stroke-width="2" stroke-linecap="round"/>
        <!-- Alt Klasör 1 -->
        <rect x="150" y="105" width="120" height="36" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="165" y="128" font-size="14">🎨</text>
        <text x="188" y="127" fill="#22d3ee" font-size="10" font-weight="bold">Resimlerim</text>
        <!-- Alt Klasör 2 -->
        <rect x="150" y="155" width="120" height="36" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
        <text x="165" y="178" font-size="14">💻</text>
        <text x="188" y="177" fill="#f472b6" font-size="10" font-weight="bold">Projelerim</text>
        <!-- Dosyalar -->
        <path d="M270 123 H300" stroke="#818cf8" stroke-width="1.5"/>
        <text x="310" y="127" fill="#cbd5e1" font-size="10">bayrak.png</text>
        <path d="M270 173 H300" stroke="#818cf8" stroke-width="1.5"/>
        <text x="310" y="177" fill="#cbd5e1" font-size="10">oyun.sb3</text>
        <text x="210" y="222" fill="#94a3b8" font-size="11" text-anchor="middle">Hiyerarşik Klasör Ağacı Mimarisi</text>
      </svg>`,
      caption: "Klasörlerin Ağaç Yapısı ile Dosyaları Düzenleme"
    },
    section2: {
      title: "Klasör İşlemleri ve Geri Dönüşüm Kutusu",
      subtitle: "Dosyaları oluşturma, adlandırma ve silinenleri geri getirme:",
      layout: "cards-2",
      cards: [
        {
          title: "Yeni Klasör Oluşturma Adımları",
          icon: "✨",
          desc: "3 kolay adımda yeni bir sarı klasör açarız:",
          items: [
            { bold: "1. Sağ Tık", text: "Masaüstünde veya pencere içinde boş bir yere farenin sağ tuşuyla tıklayın." },
            { bold: "2. Yeni ➔ Klasör", text: "Açılan menüden 'Yeni' ve ardından 'Klasör' seçeneğine tıklayın." },
            { bold: "3. İsim Ver", text: "Mavi yanan alana klasörün adını yazıp 'Enter' tuşuna basın." }
          ]
        },
        {
          title: "Geri Dönüşüm Kutusu (Çöp Kutusu)",
          icon: "🗑️",
          desc: "Dosyaları koruyan ikinci şans kutumuz:",
          items: [
            { bold: "Silme (Delete)", text: "Gereksiz bir dosyayı seçip Delete tuşuna bastığımızda çöp kutusuna gider." },
            { bold: "Geri Yükle (Restore)", text: "Yanlışlıkla sildiğimiz dosyayı açıp 'Geri Yükle' dersek eski yerine döner." },
            { bold: "Kutuyu Boşalt", text: "Çöp kutusunu boşalttığımızda dosyalar bilgisayardan tamamen temizlenir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kendi Dijital Çantamı Kuruyorum'",
      subtitle: "Masaüstünde adınıza bir ana klasör açıp içine 3 alt klasör yerleştirin.",
      steps: [
        { title: "Ana Klasörü Aç", desc: "Masaüstünde sağ tık -> Yeni -> Klasör yapıp adınızı ve sınıfınızı yazın." },
        { title: "3 Alt Klasör Ekle", desc: "Klasörün içine girip 'Resimler', 'Şiirler' ve 'Kodlar' adında 3 klasör açın." },
        { title: "Dosyaları Taşı", desc: "Öğretmeninizin verdiği örnek resimleri doğru klasörlere sürükleyip bırakın." }
      ],
      criteria: [
        "Yeni klasör oluşturma ve doğru isimlendirme becerisi",
        "Dosyaları sürükle-bırak yöntemiyle ilgili alt klasöre taşıyabilme",
        "Geri dönüşüm kutusundan dosya kurtarma pratiğini uygulayabilme"
      ]
    },
    tips: {
      safetyTitle: "Dosya Düzenleyicinin Rehberi",
      safetyRules: [
        { bold: "Anlamsız İsimler Verme", text: "'asdasd' veya 'adsız' yerine 'Turk_Bayragi_Resmi' gibi aradığınızda bulabileceğiniz isimler verin." },
        { bold: "Türkçe Karakter Uyarısı", text: "Dosya isimlerinde bazen 'ı, ğ, ü, ş, ö, ç' harfleri yerine 'i, g, u, s, o, c' kullanmak uyumluluk sağlar." },
        { bold: "Başkalarının Klasörünü Silme", text: "Ortak bilgisayarlarda arkadaşlarınızın veya öğretmeninizin klasörlerine asla dokunmayın." }
      ],
      myths: [
        { wrong: "Delete tuşuna bastığım anda dosya uzayda yok olur.", correct: "Hayır! Dosya önce Geri Dönüşüm Kutusuna gider. Çöp kutusunu boşaltana kadar dosyanızı geri kurtarabilirsiniz." }
      ]
    },
    quiz: {
      question: "Yanlışlıkla sildiğimiz çok önemli bir resmi bilgisayardan tamamen kaybolmadan geri getirmek için nereye bakmalıyız?",
      options: [
        { text: "A) İnternet Tarayıcısına", isCorrect: false },
        { text: "B) Geri Dönüşüm Kutusuna (Geri Yükle)", isCorrect: true },
        { text: "C) Hesap Makinesine", isCorrect: false },
        { text: "D) Yazıcıya", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Silinen dosyalar Geri Dönüşüm Kutusunda bekler; 'Geri Yükle' diyerek onları eski yerine kurtarabiliriz."
    },
    summaryRules: [
      { bold: "Klasörler", text: "Dosyalarımızın düzenli ve güvenli evidir." },
      { bold: "Ağaç Yapısı", text: "Ana klasör ve alt klasörlerle düzen kurarız." },
      { bold: "Geri Dönüşüm", text: "Hatalı silmelere karşı kurtarıcı emniyet kemerimizdir." }
    ],
    homework: "Ailenizin bilgisayarında veya telefonunda fotoğrafların hangi klasörlerde saklandığını inceleyin.",
    nextWeekPreview: "Klavye Ustalığı: On Parmak Yazma Temelleri, Ev Tuşları (F ve J) ve Parmak Dansı!"
  },

  // 4. HAFTA
  {
    week: 4,
    date: "05 - 11 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Dijital Beceriler ve Bilgisayar Sistemleri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Klavye Ustalığı: On Parmak Temelleri & Q/F Klavye",
    subtitle: "Klavyeye Bakmadan Yazma Sanatı, F ve J Ev Çıkıntıları ve Parmak Dağılımı",
    outcomeCode: "BTY.3.1.4 (Klavye Becerisi & Ergonomi)",
    targetSkill: "On Parmak Klavye Dizilimini Kavrama, Ev Sırasını (F-J) Doğru Kullanabilme",
    curiosityQuestion: "Dünyanın en hızlı daktilo ve klavye şampiyonları neden ekrandan gözlerini hiç ayırmadan klavyeye hiç bakmadan yazabilirler?",
    roadmap: [
      { title: "Q ve F Klavye Farkı", desc: "Türkçeye en uygun tasarlanan F klavye ve dünyada yaygın Q klavye." },
      { title: "Ev Sırası (Home Row)", desc: "Parmaklarımızın dinlenme ve kalkış yuvası: A-S-D-F ve J-K-L-Ş." },
      { title: "F ve J Çıkıntıları", desc: "Karanlıkta bile parmaklarımızın evini bulmasını sağlayan küçük çizgiler." },
      { title: "Başparmakların Görevi", desc: "Space (Boşluk) tuşunu sırayla tıklatan çalışkan yardımcılar." }
    ],
    section1: {
      title: "Parmaklarımızın Yuvası: Ev Sırası",
      subtitle: "Klavyedeki her parmağın kendine ait özel bir harf bölgesi vardır.",
      layout: "split-visual",
      card: {
        title: "Sol ve Sağ El Görev Dağılımı",
        icon: "⌨️",
        desc: "Klavyenin orta sırasına ellerimizi yerleştirirken:",
        items: [
          { bold: "Sol El (A - S - D - F)", text: "Serçe: A, Yüzük: S, Orta: D, İşaret: F (çıkıntılı tuş)." },
          { bold: "Sağ El (J - K - L - Ş)", text: "İşaret: J (çıkıntılı tuş), Orta: K, Yüzük: L, Serçe: Ş." },
          { bold: "İki Başparmak", text: "Alttaki uzun Space (Boşluk) tuşunun üzerinde hazır bekler." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Klavye Gövdesi -->
        <rect x="40" y="45" width="340" height="150" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <!-- Ev Sırası Tuşları -->
        <!-- Sol El -->
        <rect x="60" y="90" width="30" height="30" rx="4" fill="#312e81" stroke="#818cf8"/>
        <text x="75" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">A</text>
        <rect x="95" y="90" width="30" height="30" rx="4" fill="#312e81" stroke="#818cf8"/>
        <text x="110" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">S</text>
        <rect x="130" y="90" width="30" height="30" rx="4" fill="#312e81" stroke="#818cf8"/>
        <text x="145" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">D</text>
        <!-- F Tuşu (Özel Çıkıntı) -->
        <rect x="165" y="90" width="30" height="30" rx="4" fill="#4338ca" stroke="#06b6d4" stroke-width="2"/>
        <text x="180" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">F</text>
        <line x1="172" y1="114" x2="188" y2="114" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/>
        <!-- J Tuşu (Özel Çıkıntı) -->
        <rect x="225" y="90" width="30" height="30" rx="4" fill="#4338ca" stroke="#06b6d4" stroke-width="2"/>
        <text x="240" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">J</text>
        <line x1="232" y1="114" x2="248" y2="114" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Sağ El -->
        <rect x="260" y="90" width="30" height="30" rx="4" fill="#312e81" stroke="#818cf8"/>
        <text x="275" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">K</text>
        <rect x="295" y="90" width="30" height="30" rx="4" fill="#312e81" stroke="#818cf8"/>
        <text x="310" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">L</text>
        <rect x="330" y="90" width="30" height="30" rx="4" fill="#312e81" stroke="#818cf8"/>
        <text x="345" y="110" fill="#fff" font-size="12" font-weight="bold" text-anchor="middle">Ş</text>
        <!-- Space Tuşu -->
        <rect x="120" y="135" width="180" height="24" rx="4" fill="#0f172a" stroke="#64748b"/>
        <text x="210" y="151" fill="#94a3b8" font-size="10" text-anchor="middle">SPACE (BOŞLUK)</text>
        <text x="210" y="215" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">F ve J Tuşlarındaki Çıkıntılar Parmaklarımızın Pusulasıdır!</text>
      </svg>`,
      caption: "Klavyede Ev Sırası ve F / J Rehber Çıkıntıları"
    },
    section2: {
      title: "Hızlı ve Doğru Yazmanın 3 Kuralı",
      subtitle: "Klavyede ustalaşmak sabır ve düzenli pratikle gelir:",
      layout: "cards-2",
      cards: [
        {
          title: "Klavye Duruş Kuralları",
          icon: "👐",
          desc: "Parmaklarımızı doğru tuttuğumuzda ellerimiz asla yorulmaz:",
          items: [
            { bold: "Bilekleri Havada Tut", text: "Bileklerinizi masaya yapıştırmayın; hafif kubbe şeklinde tutun." },
            { bold: "Ekrana Bak", text: "Klavyeye değil ekrana bakmaya alışın; hatalarınızı anında görürsünüz." },
            { bold: "Her Harften Sonra Eve Dön", text: "Üst sıradan harfe basan parmak hemen ev tuşuna geri döner." }
          ]
        },
        {
          title: "F Klavye ve Türkçenin Gücü",
          icon: "🇹🇷",
          desc: "Milli gururumuz F klavyenin özellikleri:",
          items: [
            { bold: "İhsan Sıtkı Yener", text: "Türkçede en çok kullanılan harfleri analiz ederek F klavyeyi icat etmiştir." },
            { bold: "En Çok Kullanılan Harfler Ortada", text: "'A, E, K, İ, M, L' gibi sesli ve yaygın harfler parmakların tam altına gelir." },
            { bold: "Dünya Şampiyonlukları", text: "Türkiye, F klavye sayesinde dünyada en çok hızlı yazma şampiyonluğu kazanan ülkedir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Harf Avcısı Oyunu'",
      subtitle: "Eğlenceli klavye oyununda ekrandan düşen harfleri doğru parmakla yakalıyoruz.",
      steps: [
        { title: "Parmakları Yerleştir", desc: "İşaret parmaklarınızı F ve J kabartmalarına koyup ev sırasını kurun." },
        { title: "Ev Sırası Alıştırması", desc: "Sırayla 'a s d f j k l ş' harflerini 3'er kez yazarak parmaklarınızı ısıtın." },
        { title: "Hız Yarışması", desc: "Kelime işlemcide öğretmenin tahtaya yazdığı 5 kelimeyi en az hatayla yazın." }
      ],
      criteria: [
        "F ve J çıkıntılarını dokunarak gözleri kapalı bulabilme",
        "Klavyeye bakmadan ev sırası harflerini doğru parmakla tuşlayabilme",
        "İki elin başparmaklarını Space tuşu için koordineli kullanabilme"
      ]
    },
    tips: {
      safetyTitle: "Klavye Şampiyonu Tavsiyeleri",
      safetyRules: [
        { bold: "Tek Parmakla Yazma Alışkanlığı", text: "Sadece işaret parmağıyla yazmaya alışırsanız ileride hızlanamazsınız; tüm parmakları alıştırın." },
        { bold: "Tuşlara Sert Vurma", text: "Klavyenin tuşları çok hassastır; piyano çalar gibi zarifçe dokunmanız yeterlidir." },
        { bold: "Parmak Egzersizi", text: "15 dakikalık yazma sonrasında parmaklarınızı açıp kapatarak dinlendirin." }
      ],
      myths: [
        { wrong: "Klavyedeki harfler rastgele dizilmiştir, hiçbir mantığı yoktur.", correct: "Q klavye daktilo kollarının sıkışmaması için, F klavye ise Türkçede en sık geçen harflerin en güçlü parmaklara gelmesi için bilimsel olarak tasarlanmıştır." }
      ]
    },
    quiz: {
      question: "Klavyede gözlerimiz ekrandayken ellerimizin doğru yerde olduğunu anlamamızı sağlayan kabartmalı (çıkıntılı) iki harf hangisidir?",
      options: [
        { text: "A) A ve S tuşları", isCorrect: false },
        { text: "B) F ve J tuşları", isCorrect: true },
        { text: "C) Space ve Enter tuşları", isCorrect: false },
        { text: "D) K ve L tuşları", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> F ve J tuşlarının üzerindeki minik kabartmalar, gözümüzü ekrandan ayırmadan ellerimizi 'Ev Sırası'na yerleştirmemizi sağlar."
    },
    summaryRules: [
      { bold: "Ev Sırası", text: "Parmaklarımızın yuvasıdır (A-S-D-F ve J-K-L-Ş)." },
      { bold: "F ve J Çıkıntıları", text: "Dokunarak yolu bulduran sihirli pusulamızdır." },
      { bold: "On Parmak", text: "Sabırla pratik yapan her öğrencinin süper gücüdür." }
    ],
    homework: "Evdeki klavyede F ve J kabartmalarını gözünüz kapalı bulma pratiği yapın ve ailenize gösterin.",
    nextWeekPreview: "Özel Karakterler ve Kısayol Tuşları: Shift, AltGr, Ctrl+C ve Ctrl+V Sihirleri!"
  },

  // 5. HAFTA
  {
    week: 5,
    date: "12 - 18 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Dijital Beceriler ve Bilgisayar Sistemleri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Özel Karakterler ve Sihirli Kısayol Tuşları",
    subtitle: "Shift, AltGr, Caps Lock, Ctrl+C (Kopyala) ve Ctrl+V (Yapıştır) Büyüsü",
    outcomeCode: "BTY.3.1.5 (Klavye Kısayolları & Özel Karakterler)",
    targetSkill: "Üst ve Alt Karakterleri (@, ?, !, +, -) Yazabilme, Temel Klavye Kısayollarını Kullanma",
    curiosityQuestion: "Bir tuşun üzerinde 3 farklı işaret varken (örneğin Q tuşunda Q ve @), bilgisayara hangi işareti istediğimizi nasıl söyleriz?",
    roadmap: [
      { title: "Çift ve Üç Karakterli Tuşlar", desc: "Bir tuşun altındaki, üstündeki ve sağındaki işaretlerin sırrı." },
      { title: "Shift Tuşunun Görevi", desc: "Tuşun üstündeki işareti çıkarma (?, !, ', %) ve büyük harf yapma." },
      { title: "AltGr Tuşunun Görevi", desc: "Tuşun sağ altındaki işareti çıkarma (@, €, #, £)." },
      { title: "Kopyala - Yapıştır Sihri", desc: "Ctrl+C ile kopyalama, Ctrl+V ile yapıştırma, Ctrl+Z ile geri alma." }
    ],
    section1: {
      title: "Klavyenin Gizli Katmanları: Shift ve AltGr",
      subtitle: "Klavyede az tuşla yüzlerce farklı sembol yazmamızı sağlayan iki yardımcı kahraman:",
      layout: "split-visual",
      card: {
        title: "3 Karakter Kuralı",
        icon: "✨",
        desc: "Tuşun neresinde hangi işaret varsa:",
        items: [
          { bold: "Doğrudan Basınca", text: "Tuşun sol altındaki ana harf veya sayı çıkar (Örn: 2)." },
          { bold: "Shift ile Basınca", text: "Tuşun sol üstündeki sembol çıkar (Örn: Shift + 2 ➔ ' kesme işareti)." },
          { bold: "AltGr ile Basınca", text: "Tuşun sağ altındaki özel sembol çıkar (Örn: AltGr + Q ➔ @ e-posta işareti)." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Dev Q Tuşu -->
        <rect x="60" y="55" width="120" height="120" rx="14" fill="#1e293b" stroke="#818cf8" stroke-width="3"/>
        <text x="85" y="115" fill="#ffffff" font-size="38" font-weight="bold">Q</text>
        <text x="145" y="155" fill="#f43f5e" font-size="28" font-weight="900">@</text>
        <text x="120" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">AltGr + Q = @</text>
        <!-- Artı Simgesi -->
        <text x="210" y="125" fill="#6366f1" font-size="28" font-weight="bold" text-anchor="middle">+</text>
        <!-- Kısayol Kartı -->
        <rect x="240" y="55" width="140" height="120" rx="12" fill="#312e81" stroke="#a5b4fc" stroke-width="1.5"/>
        <text x="310" y="80" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">SÜPER KISAYOLLAR</text>
        <text x="255" y="105" fill="#fff" font-size="11" font-weight="bold">Ctrl + C :</text>
        <text x="315" y="105" fill="#cbd5e1" font-size="10">Kopyala</text>
        <text x="255" y="125" fill="#fff" font-size="11" font-weight="bold">Ctrl + V :</text>
        <text x="315" y="125" fill="#cbd5e1" font-size="10">Yapıştır</text>
        <text x="255" y="145" fill="#fff" font-size="11" font-weight="bold">Ctrl + Z :</text>
        <text x="315" y="145" fill="#cbd5e1" font-size="10">Geri Al</text>
        <text x="210" y="222" fill="#22d3ee" font-size="11" font-weight="bold" text-anchor="middle">Zaman Kazandıran Sihirli Tuş Kombinasyonları</text>
      </svg>`,
      caption: "Shift ve AltGr ile Karakter Üretme & Ctrl Kısayolları"
    },
    section2: {
      title: "En Çok Kullanılan Sihirli Kısayollar",
      subtitle: "Yazılımcıların ve bilişim uzmanlarının en çok kullandığı pratik kombinasyonlar:",
      layout: "cards-2",
      cards: [
        {
          title: "Kopyala, Yapıştır ve Kes",
          icon: "📋",
          desc: "Metinleri veya resimleri taşırken farenin yerine kullanılır:",
          items: [
            { bold: "Ctrl + C (Copy - Kopyala)", text: "Seçili yazının bir kopyasını hafızaya alır." },
            { bold: "Ctrl + V (Paste - Yapıştır)", text: "Hafızadaki kopyayı imlecin olduğu yere yapıştırır." },
            { bold: "Ctrl + X (Cut - Kes)", text: "Yazıyı yerinden kesip başka yere taşımak için hafızaya alır." }
          ]
        },
        {
          title: "Geri Al ve Kaydet",
          icon: "💾",
          desc: "Hata yaptığımızda bizi kurtaran sihirli tuşlar:",
          items: [
            { bold: "Ctrl + Z (Undo - Geri Al)", text: "Yanlışlıkla sildiğiniz veya bozduğunuz son hareketi sihirli şekilde geri getirir." },
            { bold: "Ctrl + S (Save - Kaydet)", text: "Tek bir tıkla çalışmanızı dosyanıza kaydeder." },
            { bold: "Ctrl + A (Select All - Tümünü Seç)", text: "Sayfadaki bütün yazıları ve resimleri tek hamlede seçer." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Sihirli Semboller ve Kopyalama'",
      subtitle: "Kelime işlemci belgesinde özel karakterleri yazma ve kopyala-yapıştır pratiği yapıyoruz.",
      steps: [
        { title: "E-Posta İşaretini Çıkar", desc: "AltGr tuşuna basılı tutarak Q tuşuna basın ve ekrana '@' yazın." },
        { title: "Soru ve Ünlem Yaz", desc: "Shift tuşuna basılı tutarak soru işareti (?) ve ünlem (!) işaretlerini yazın." },
        { title: "Ctrl+C ve Ctrl+V Yap", desc: "Yazdığınız cümlenin 10 kopyasını kısayol tuşlarıyla 5 saniyede çoğaltın." }
      ],
      criteria: [
        "AltGr tuşuyla @ ve diğer 3. karakterleri doğru yazabilme",
        "Shift tuşuyla büyük harf ve üst sembolleri üretebilme",
        "Ctrl+C ve Ctrl+V kısayollarını başarıyla uygulayabilme"
      ]
    },
    tips: {
      safetyTitle: "Kısayol Ustası Öğütleri",
      safetyRules: [
        { bold: "Aynı Anda Basma", text: "Ctrl+C yaparken önce Ctrl'ye basılı tutun, elinizi çekmeden C'ye bir kez dokunup ikisini de bırakın." },
        { bold: "Ctrl+Z Hayat Kurtarır", text: "Çizdiğiniz resimde veya yazdığınız metinde bir hata yaparsanız panik yapmayın; hemen Ctrl+Z'ye basın!" },
        { bold: "Sık Sık Ctrl+S Yapın", text: "Elektrik kesilse bile emeğinizin kaybolmaması için çalışırken arada bir Ctrl+S yapın." }
      ],
      myths: [
        { wrong: "Kopyalanan bir yazıyı sadece 1 defa yapıştırabiliriz.", correct: "Hayır! Bir kez Ctrl+C ile kopyaladığınız bir şeyi istediğiniz kadar, yüzlerce kez Ctrl+V ile yapıştırabilirsiniz." }
      ]
    },
    quiz: {
      question: "Bilgisayarda yanlışlıkla sildiğimiz bir yazıyı veya hatalı yaptığımız son adımı hemen geri almak için hangi kısayol tuşunu kullanırız?",
      options: [
        { text: "A) Ctrl + C", isCorrect: false },
        { text: "B) Ctrl + Z (Geri Al)", isCorrect: true },
        { text: "C) Alt + F4", isCorrect: false },
        { text: "D) Shift + Space", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Ctrl + Z bilgisayar dünyasının 'zaman makinesi'dir; yaptığınız son hatayı anında geri alır."
    },
    summaryRules: [
      { bold: "Shift", text: "Üst karakterleri ve büyük harfleri açar." },
      { bold: "AltGr", text: "Sağ alttaki özel sembolleri (@, €, #) çıkarır." },
      { bold: "Ctrl + C ve V", text: "Kopyalama ve yapıştırmanın sihirli ikilisidir." }
    ],
    homework: "Klavyenizdeki sayı tuşlarının üstündeki işaretleri inceleyin; Shift ile basarak 5 farklı işareti defterinize çizin.",
    nextWeekPreview: "Dijital Sağlık ve Doğru Duruş: 20-20-20 Kuralı, Mavi Işık ve Sağlıklı Teknoloji Dengesi!"
  },

  // 6. HAFTA
  {
    week: 6,
    date: "19 - 25 Ekim",
    hours: "2 Ders Saati",
    unit: "1. Tema: Dijital Beceriler ve Bilgisayar Sistemleri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "Dijital Sağlık: 20-20-20 Kuralı ve Ekran Dengesi",
    subtitle: "Göz Sağlığı, Mavi Işık Filtresi, Dijital Detoks ve Ergonomik Hareketler",
    outcomeCode: "BTY.3.1.6 (Sağlık & Dijital Denge)",
    targetSkill: "Teknoloji Kullanımında Sağlık Kurallarını Uygulama, 20-20-20 Kuralını Hayata Geçirme",
    curiosityQuestion: "Telefon ve tablet ekranına uzun süre kırpmadan baktığımızda gözlerimiz neden yanar, kurur ve yorulur?",
    roadmap: [
      { title: "20-20-20 Kuralı", desc: "Her 20 dakikada bir, 20 fit (6 metre) uzağa, 20 saniye boyunca bakma." },
      { title: "Göz Kırpma Egzersizi", desc: "Ekran karşısında göz kırpma sıklığımızın düşüşünü engelleme." },
      { title: "Mavi Işık ve Uyku", desc: "Ekranların yaydığı mavi ışığın uyku hormonu melatonin üzerindeki etkisi." },
      { title: "Dijital Detoks", desc: "Haftanın belirli saatlerinde ekranları tamamen kapatıp doğayla buluşma." }
    ],
    section1: {
      title: "Gözlerimizin Koruyucu Meleği: 20-20-20 Kuralı",
      subtitle: "Dünya göz doktorlarının tüm çocuklara önerdiği altın formül:",
      layout: "split-visual",
      card: {
        title: "20-20-20 Kuralı Nasıl Uygulanır?",
        icon: "👁️",
        desc: "Bilgisayar veya tablet başında çalışırken:",
        items: [
          { bold: "Her 20 Dakikada Bir", text: "Zamanlayıcınız çaldığında çalışmanıza kısa bir nefes molası verin." },
          { bold: "20 Fit (6 Metre) Uzağa Bak", text: "Pencereden dışarıya, gökyüzündeki bir buluta veya uzaktaki bir ağaca bakın." },
          { bold: "20 Saniye Bekle", text: "Göz kaslarınız uzaktaki nesneye odaklanarak dinlensin ve gevşesin." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- 3 Daire Döngüsü -->
        <!-- 20 Dakika -->
        <circle cx="90" cy="110" r="38" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2"/>
        <text x="90" y="105" fill="#34d399" font-size="20" font-weight="900" text-anchor="middle">20</text>
        <text x="90" y="125" fill="#f8fafc" font-size="10" text-anchor="middle">Dakika Çalış</text>
        <!-- Ok 1 -->
        <path d="M135 110 H165" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
        <!-- 20 Fit (6 Metre) -->
        <circle cx="210" cy="110" r="38" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" stroke-width="2"/>
        <text x="210" y="105" fill="#22d3ee" font-size="20" font-weight="900" text-anchor="middle">6 m</text>
        <text x="210" y="125" fill="#f8fafc" font-size="10" text-anchor="middle">Uzağa Bak</text>
        <!-- Ok 2 -->
        <path d="M255 110 H285" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
        <!-- 20 Saniye -->
        <circle cx="330" cy="110" r="38" fill="#f43f5e" fill-opacity="0.2" stroke="#f43f5e" stroke-width="2"/>
        <text x="330" y="105" fill="#fb7185" font-size="20" font-weight="900" text-anchor="middle">20 sn</text>
        <text x="330" y="125" fill="#f8fafc" font-size="10" text-anchor="middle">Dinlendir</text>
        <text x="210" y="195" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">Göz Kaslarını Koruyan Evrensel Kural</text>
        <text x="210" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">Gözlerini sık sık kırpmayı ve pencereni havalandırmayı unutma!</text>
      </svg>`,
      caption: "Dünya Standartlarında 20-20-20 Göz Sağlığı Döngüsü"
    },
    section2: {
      title: "Mavi Işık Tehlikesi ve Masa Başı Molaları",
      subtitle: "Bilinçli teknoloji kullanıcısı bedenine saygı duyar:",
      layout: "cards-2",
      cards: [
        {
          title: "Mavi Işık Nedir?",
          icon: "🌙",
          desc: "Ekranların yaydığı görünmez tehlike:",
          items: [
            { bold: "Gündüz Işığı Taklidi", text: "Ekranlar güneş ışığı gibi parlak mavi ışık yayar; beynimiz hala gündüz sanır." },
            { bold: "Uykusuzluk Yapar", text: "Uyumadan 1 saat önce ekran izlenirse uykuya dalmak çok zorlaşır." },
            { bold: "Gece Işığı Modu", text: "Akşamları cihazlarda 'Sarı / Sıcak Işık' filtresini açmak gözü korur." }
          ]
        },
        {
          title: "Masa Başı Egzersizleri",
          icon: "🧘‍♂️",
          desc: "Her derste yapabileceğimiz 30 saniyelik hareketler:",
          items: [
            { bold: "Omuz Çevirme", text: "Omuzlarınızı 5 kez geriye, 5 kez öne doğru dairesel çevirin." },
            { bold: "Boyun Esnetme", text: "Başınızı nazikçe sağa ve sola eğerek boyun kaslarınızı rahatlatın." },
            { bold: "Bilek Masajı", text: "Fare tutan elinizin bileğini dairesel hareketlerle ovun." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Göz ve Beden Dinlendirme'",
      subtitle: "Bilişim dersimizin ortasında 2 dakikalık sağlıklı mola uyguluyoruz.",
      steps: [
        { title: "Elleri Gözlere Kapat (Palming)", desc: "Avuç içlerinizi birbirine sürtüp ısıtın ve gözlerinize bastırmadan karanlık yapın." },
        { title: "Pencereden Uzağa Bak", desc: "Sınıf penceresinden uzaktaki ağaçlara veya bulutlara 20 saniye odaklanın." },
        { title: "Derin Nefes Al", desc: "Burnunuzdan derin nefes alıp omuzlarınızı gevşetin." }
      ],
      criteria: [
        "20-20-20 kuralının 3 aşamasını eksiksiz söyleyebilme",
        "Masa başı ergonomik esneme hareketlerini doğru uygulayabilme",
        "Gece ekran kullanımının uykuya etkisini kavrayabilme"
      ]
    },
    tips: {
      safetyTitle: "Sağlıklı Teknoloji Rehberi",
      safetyRules: [
        { bold: "Yatakta Telefon / Tablet Yasak", text: "Uyumadan en az 1 saat önce tüm ekranları kapatıp kitap okumaya geçin." },
        { bold: "Karanlıkta Ekrana Bakma", text: "Karanlık odada parlayan bir ekrana bakmak gözü aşırı yorar; odanın ışığı açık olsun." },
        { bold: "Su İçmeyi İhmal Etme", text: "Bilgisayar başındayken su içmeyi unutmayın; vücudumuz ve gözlerimiz neme ihtiyaç duyar." }
      ],
      myths: [
        { wrong: "Gözlerimi hiç kırpmadan oyuna odaklanırsam daha iyi oynarım.", correct: "Göz kırpmamak gözün kurumasına, kızarmasına ve bulanık görmesine yol açar; bu yüzden bilinçli olarak sık sık kırpmalıyız." }
      ]
    },
    quiz: {
      question: "Bilgisayar veya tablet başında göz sağlığımızı korumak için önerilen '20-20-20 Kuralı' ne anlama gelir?",
      options: [
        { text: "A) 20 saat oyun oyna, 20 saat uyu", isCorrect: false },
        { text: "B) Her 20 dakikada bir, 6 metre uzağa 20 saniye bak", isCorrect: true },
        { text: "C) Günde 20 bardak çay iç", isCorrect: false },
        { text: "D) Klavyenin 20 tuşuna aynı anda bas", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Her 20 dakikada bir, 6 metre (20 fit) uzağa 20 saniye bakmak göz kaslarımızı dinlendirir ve miyop riskini azaltır."
    },
    summaryRules: [
      { bold: "20-20-20 Kuralı", text: "Gözlerimizin en sadık dostudur." },
      { bold: "Mavi Işık", text: "Akşamları uykumuzu kaçırır; gece filtresini açmalıyız." },
      { bold: "Gerçek Hayat Dengesi", text: "Ekran dışındaki spor, doğa ve oyunlar bizi mutlu eder." }
    ],
    homework: "Bu akşam ailenize '20-20-20 Kuralı'nı öğretin ve televizyon izlerken birlikte uygulayın.",
    nextWeekPreview: "29 Ekim Cumhuriyet Bayramı: Dijital Afiş Tasarımı ve Cumhuriyetimizin 103. Yılı!"
  },

  // 7. HAFTA
  {
    week: 7,
    date: "26 Ekim - 01 Kasım",
    hours: "2 Ders Saati",
    unit: "1. Tema: Dijital Beceriler ve Bilgisayar Sistemleri",
    unitBadge: "1. Tema",
    unitTheme: "tema-1",
    title: "29 Ekim Cumhuriyet Bayramı: Dijital Afiş Tasarımı",
    subtitle: "Milli Birlik Ruhu, Geometrik Şekiller, Slogan Metinleri ve Dijital Sergi",
    outcomeCode: "BTY.3.1.7 (Milli Değerler & Dijital Tasarım)",
    targetSkill: "Cumhuriyet Değerlerini Görselleştirme, Afiş Tasarım İlkelerini Uygulayabilme",
    curiosityQuestion: "Etkili bir afişte başlık, slogan ve görseller nasıl dengelenir ki sokaktan geçen herkesin hemen dikkatini çeksin?",
    roadmap: [
      { title: "29 Ekim 1923 Ruhu", desc: "Gazi Mustafa Kemal Atatürk ve milletimizin bağımsızlık zaferi." },
      { title: "Afiş Tasarımının 3 Kuralı", desc: "Büyük vurucu başlık, anlamlı görsel ve akılda kalıcı slogan." },
      { title: "Renklerin Dili", desc: "Al bayrağımızın kırmızısı, bembeyaz hilal ve yıldız, altın sarısı yazılar." },
      { title: "Sınıf Dijital Panosu", desc: "Tasarlanan afişleri dışa aktarıp ortak sergide paylaşma." }
    ],
    section1: {
      title: "Cumhuriyetimizin 103. Yılına Özel Dijital Afiş",
      subtitle: "Bilişim araçlarıyla tarihimizi ve vatan sevgimizi görsel bir sanat eserine dönüştürüyoruz.",
      layout: "split-visual",
      card: {
        title: "Başarılı Bir Afişin Ögeleri",
        icon: "🎨",
        desc: "Bir afiş tasarlarken dikkat edilecek 4 unsur:",
        items: [
          { bold: "1. Ana Başlık (En Büyük Yazı)", text: "'Cumhuriyet 103 Yaşında!' gibi uzaktan bile okunan net yazı." },
          { bold: "2. Odak Görseli", text: "Şanlı Türk Bayrağı, Atatürk silüeti veya coşkulu çocuklar." },
          { bold: "3. Slogan / Mesaj", text: "'İlelebet Payidar Kalacaktır!' gibi kalbe dokunan kısa bir söz." },
          { bold: "4. Sade ve Düzenli Zemin", text: "Gözü yormayan, yazıların rahat okunduğu renk kontrastı." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#7f1d1d" stroke="#f59e0b" stroke-width="2"/>
        <!-- Türk Bayrağı Zemin -->
        <rect x="35" y="35" width="350" height="180" rx="12" fill="#dc2626"/>
        <!-- Hilal -->
        <circle cx="160" cy="115" r="48" fill="#ffffff"/>
        <circle cx="174" cy="115" r="38" fill="#dc2626"/>
        <!-- Yıldız -->
        <polygon points="215,92 221,108 238,108 224,118 229,134 215,124 201,134 206,118 192,108 209,108" fill="#ffffff"/>
        <!-- Başlık -->
        <rect x="50" y="45" width="320" height="32" rx="6" fill="#000000" fill-opacity="0.3"/>
        <text x="210" y="67" fill="#fef08a" font-size="14" font-weight="900" text-anchor="middle" letter-spacing="1">YAŞASIN CUMHURİYET!</text>
        <!-- Slogan -->
        <text x="210" y="195" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">"Egemenlik Kayıtsız Şartsız Milletindir!"</text>
      </svg>`,
      caption: "29 Ekim Cumhuriyet Bayramı Dijital Afiş Tasarımı"
    },
    section2: {
      title: "Tasarımda Renk Kontrastı ve Yazı Boyutu",
      subtitle: "Görsellerimizin profesyonel görünmesi için tasarım sırları:",
      layout: "cards-2",
      cards: [
        {
          title: "Kontrast (Zıtlık) Kuralı",
          icon: "💡",
          desc: "Yazıların kolay okunması için:",
          items: [
            { bold: "Koyu Zemine Açık Yazı", text: "Kırmızı veya siyah zemin üzerinde beyaz ve sarı harfler pırıl pırıl parlar." },
            { bold: "Açık Zemine Koyu Yazı", text: "Beyaz kağıt üzerinde koyu kırmızı veya lacivert renkler tercih edilmelidir." },
            { bold: "Görünmeyen Hata", text: "Kırmızı zemine pembe yazı yazılırsa kimse okuyamaz!" }
          ]
        },
        {
          title: "Yazı Hiyerarşisi (Büyüklük Sırası)",
          icon: "📐",
          desc: "Afişteki yazıların büyüklük dereceleri:",
          items: [
            { bold: "1. Derece (Manşet)", text: "En önemli mesaj (36-48 punto): '29 EKİM'." },
            { bold: "2. Derece (Alt Başlık)", text: "Açıklayıcı ifade (20-24 punto): 'Cumhuriyet Bayramı Kutlu Olsun'." },
            { bold: "3. Derece (Detay)", text: "Tarih ve okul ismi (12-14 punto): 'Bilişim Sınıfı Sergisi'." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Cumhuriyet Afişimi Kodluyorum'",
      subtitle: "Bilgisayarda çizim ve metin araçlarını birleştirerek kendi bayram afişimizi tasarlıyoruz.",
      steps: [
        { title: "Kırmızı Zemin Oluştur", desc: "Çizim programında sayfayı dikdörtgen aracıyla şanlı bayrağımızın al kırmızısına boyayın." },
        { title: "Hilal ve Yıldız Ekle", desc: "Beyaz şekillerle ay ve yıldızı orantılı şekilde yerleştirin." },
        { title: "Vurucu Sloganı Yaz", desc: "Büyük harflerle 'CUMHURİYET ÖZGÜRLÜKTÜR' sloganını ekleyip kaydedin." }
      ],
      criteria: [
        "Afişte başlık, görsel ve slogan dengesini kurabilme",
        "Renk kontrastına dikkat ederek yazıların okunabilirliğini sağlama",
        "Milli bayram ruhunu ve saygısını tasarıma yansıtabilme"
      ]
    },
    tips: {
      safetyTitle: "Tasarımcı Öğütleri",
      safetyRules: [
        { bold: "Afişi Çok Doldurma", text: "Her boşluğa bir şey sıkıştırmak afişi bozar; sade tasarımlar her zaman daha güçlüdür." },
        { bold: "Yazım Kurallarına Dikkat", text: "Büyük harfleri ve noktalama işaretlerini doğru kullanarak dilimize saygı gösterin." },
        { bold: "Kaydederken Kaliteyi Seçin", text: "Çalışmanızı JPEG veya PNG formatında yüksek kalitede kaydedin." }
      ],
      myths: [
        { wrong: "Bir afişte ne kadar çok renk ve yazı tipi kullanırsak o kadar güzel olur.", correct: "Hayır! Bir tasarımda en fazla 2 veya 3 uyumlu renk ve en fazla 2 yazı tipi (font) kullanmak profesyonel tasarımın kuralıdır." }
      ]
    },
    quiz: {
      question: "Koyu kırmızı renkli bir zemin üzerine tasarlanan bir Cumhuriyet afişinde, başlığın en net ve kolay okunabilmesi için hangi renk harfler seçilmelidir?",
      options: [
        { text: "A) Koyu Kahverengi", isCorrect: false },
        { text: "B) Bembeyaz veya Parlak Altın Sarısı", isCorrect: true },
        { text: "C) Bordo", isCorrect: false },
        { text: "D) Koyu Gri", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> Koyu zemin üzerine beyaz veya sarı gibi açık renkler kullanıldığında yüksek 'kontrast' oluşur ve yazı uzaktan bile rahatça okunur."
    },
    summaryRules: [
      { bold: "Afiş", text: "Büyük başlık, güçlü görsel ve kısa sloganın birleşimidir." },
      { bold: "Kontrast", text: "Yazıların göz alıcı şekilde okunmasını sağlar." },
      { bold: "Cumhuriyet", text: "En büyük milli değerimiz ve gururumuzdur." }
    ],
    homework: "Çevrenizdeki ilan panolarında veya marketlerdeki afişleri inceleyin; en çok dikkatinizi çeken afişin nedenini not alın.",
    nextWeekPreview: "1. Dönem 1. Değerlendirme: Bilişim Dedektifleri Büyük Bilgi Yarışması!"
  },

  // 8. HAFTA
  {
    week: 8,
    date: "02 - 08 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital İletişim, Kelime İşlemci ve Görsel Üretim",
    unitBadge: "1. Dönem 1. Sınav",
    unitTheme: "tema-sinav",
    title: "1. Dönem 1. Değerlendirme & Bilişim Bilgi Yarışması",
    subtitle: "Donanım, İşletim Sistemi, Dosya Düzeni, On Parmak ve Sağlık Konuları Özet Sınavı",
    outcomeCode: "BTY.3.2.1 (Ölçme & Değerlendirme)",
    targetSkill: "İlk 7 Haftanın Bilişim Kazanımlarını Ölçme, Analiz Etme ve Pekiştirme",
    curiosityQuestion: "İlk 7 haftada öğrendiğimiz tüm dijital kahramanlar (Giriş/Çıkış, Pencereler, Klasörler, Ev Sırası, 20-20-20) yarışsa en güçlüsü hangisi olurdu?",
    roadmap: [
      { title: "Büyük Bilişim Arenası", desc: "Donanım, yazılım, dosya yönetimi ve sağlık soruları." },
      { title: "Klavye Kısayolları Etabı", desc: "Ctrl+C, Ctrl+V, Shift ve AltGr sihirlerini test etme." },
      { title: "Görsel ve Senaryo Analizi", desc: "Gerçek hayattaki bilişim problemlerine doğru çözümü bulma." },
      { title: "Başarı Rozetleri", desc: "1. Dönemin ilk Bilişim Dedektifi başarı belgelerini alma." }
    ],
    section1: {
      title: "İlk 7 Haftanın Bilişim Zirvesi",
      subtitle: "Bilişim yolculuğumuzun ilk büyük etabını başarıyla tamamladık!",
      layout: "split-visual",
      card: {
        title: "Usta Olduğumuz Konular",
        icon: "🏆",
        desc: "Hakim olduğumuz 4 ana temel:",
        items: [
          { bold: "1. Sistem Donanımı", text: "Giriş (Tarayıcı, mikrofon) ve Çıkış (Yazıcı, monitör) birimlerini biliyoruz." },
          { bold: "2. İşletim Sistemi & Pencereler", text: "Masaüstünü, görev çubuğunu ve (-, □, X) butonlarını ustalıkla yönetiyoruz." },
          { bold: "3. Klasör Ağacı & Geri Dönüşüm", text: "Dosyalarımızı kaybetmeden düzenli saklıyoruz." },
          { bold: "4. Klavye & Dijital Sağlık", text: "On parmak ev tuşlarını ve 20-20-20 kuralını uyguluyoruz." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Yıldız Kupası -->
        <circle cx="210" cy="95" r="45" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="3"/>
        <text x="210" y="108" font-size="44" text-anchor="middle">🎖️</text>
        <rect x="90" y="155" width="240" height="32" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
        <text x="210" y="176" fill="#a5b4fc" font-size="12" font-weight="900" text-anchor="middle">3. SINIF BİLİŞİM DEDEKTİFİ</text>
        <text x="210" y="210" fill="#94a3b8" font-size="11" text-anchor="middle">Tebrikler! 1. Yazılı Değerlendirme Başarısı</text>
      </svg>`,
      caption: "1. Dönem 1. Değerlendirme Bilişim Başarı Rozeti"
    },
    section2: {
      title: "Hızlı Soru Köşesi: Kendini Sına!",
      subtitle: "Sınav öncesi son hatırlatma soruları:",
      layout: "cards-2",
      cards: [
        {
          title: "Donanım ve Sistem Soruları",
          icon: "🧠",
          desc: "Hızlı cevaplar:",
          items: [
            { bold: "Soru 1", text: "Kağıttaki resmi bilgisayara aktaran cihaz? (Tarayıcı)" },
            { bold: "Soru 2", text: "Pencereyi kapatmadan görev çubuğuna indiren düğme? (Eksi - butonu)" },
            { bold: "Soru 3", text: "Klavyedeki çıkıntılı iki rehber harf? (F ve J)" }
          ]
        },
        {
          title: "Kısayol ve Sağlık Soruları",
          icon: "⚡",
          desc: "Pratik kurallar:",
          items: [
            { bold: "Soru 4", text: "Hatalı yapılan son işlemi geri alan kısayol? (Ctrl + Z)" },
            { bold: "Soru 5", text: "@ işaretini çıkarmak için hangi tuşa basılır? (AltGr + Q)" },
            { bold: "Soru 6", text: "Her 20 dakikada bir gözleri nereye odaklamalıyız? (6 metre uzağa)" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Büyük Bilişim Bilgi Şöleni'",
      subtitle: "Akıllı tahtada açılan 10 soruluk interaktif bilgi yarışmasını sınıfça çözüyoruz.",
      steps: [
        { title: "Takımları Oluştur", desc: "Sıra arkadaşınızla birlikte iki kişilik bilişim ekibinizi kurun." },
        { title: "Soruları Yanıtla", desc: "Tahtada çıkan çoktan seçmeli soruları süre bitmeden cevaplayın." },
        { title: "Sonuçları Değerlendir", desc: "En yüksek puanı toplayıp haftanın bilişim şampiyonu rozetini kazanın." }
      ],
      criteria: [
        "İlk 7 haftanın temel bilişim kavramlarına tam hakimiyet",
        "Soruları dikkatle okuyup çeldiricilere düşmeden doğruyu bulma",
        "Takım arkadaşıyla yardımlaşarak ortak fikir birliğine varma"
      ]
    },
    tips: {
      safetyTitle: "Sınav Taktikleri",
      safetyRules: [
        { bold: "Soruyu Sonuna Kadar Oku", text: "'Hangisi DEĞİLDİR?' gibi olumsuz köklere özellikle dikkat edin." },
        { bold: "Panik Yapma", text: "Tüm konuları sınıfta eğlenerek öğrendin; kendine güven!" },
        { bold: "Kontrol Et", text: "Cevaplarını teslim etmeden önce son bir kez gözden geçir." }
      ],
      myths: [
        { wrong: "Sınav sadece not almak içindir.", correct: "Sınavlar öğrendiklerimizin ne kadarını anladığımızı görüp eksiklerimizi tamamlamamız için bir öğrenme fırsatıdır." }
      ]
    },
    quiz: {
      question: "Aşağıdakilerden hangisi bir 'ÇIKIŞ BİRİMİ'dir?",
      options: [
        { text: "A) Mikrofon", isCorrect: false },
        { text: "B) Klavye", isCorrect: false },
        { text: "C) Hoparlör", isCorrect: true },
        { text: "D) Web Kamerası", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: C!</strong> Hoparlör bilgisayardaki sesleri dışarıya veren bir çıkış (output) birimidir; mikrofon, klavye ve kamera ise giriş birimidir."
    },
    summaryRules: [
      { bold: "Donanım & Yazılım", text: "Birbirini tamamlayan iki ayrılmaz parçadır." },
      { bold: "Düzen & Güvenlik", text: "Bilişimde başarının anahtarıdır." },
      { bold: "Gelecek Hafta", text: "Kelime işlemcide ilk yazı ve şiirlerimizi yazmaya başlıyoruz!" }
    ],
    homework: "1. sınavda takıldığınız konuları not alıp gelecek derste öğretmeninize sorun.",
    nextWeekPreview: "10 Kasım Atatürk'ü Anma & Kelime İşlemciye Giriş: Yazı Tipleri, Boyutları ve Renkleri!"
  },

  // 9. HAFTA
  {
    week: 9,
    date: "09 - 15 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital İletişim, Kelime İşlemci ve Görsel Üretim",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "10 Kasım Atatürk'ü Anma & Kelime İşlemciye Giriş",
    subtitle: "Atatürk'e Sevgi ve Minnet Şiirleri: Font (Yazı Tipi), Boyut, Kalın ve İtalik Stilleri",
    outcomeCode: "BTY.3.2.2 (Kelime İşlemci & Tipografi)",
    targetSkill: "Kelime İşlemci Programını Açma, Metin Yazma, Font ve Paragraf Biçimlendirme",
    curiosityQuestion: "Bilgisayarda yazdığımız bir harfi neden bir anda el yazısına, gazete yazısına veya devasa bir anıt yazısına dönüştürebiliriz?",
    roadmap: [
      { title: "10 Kasım Ruhu", desc: "Gazi Mustafa Kemal Atatürk'ün fikirleri, bilime ve çocuklara verdiği değer." },
      { title: "Kelime İşlemci Nedir?", desc: "Word, LibreOffice Writer, Google Dokümanlar gibi metin yazma programları." },
      { title: "Yazı Tipi (Font) ve Boyutu", desc: "Times New Roman, Arial, Calibri, Comic Sans ve punto ayarları." },
      { title: "Stil Düğmeleri", desc: "Kalın (K/B), İtalik/Eğik (İ/I), Altı Çizili (A/U) ve Renk Paleti." }
    ],
    section1: {
      title: "Kelime İşlemci Dünyası ve Yazı Biçimlendirme",
      subtitle: "Düşüncelerimizi, mektuplarımızı ve şiirlerimizi özenle düzenlediğimiz dijital kağıt:",
      layout: "split-visual",
      card: {
        title: "Metin Biçimlendirmenin 4 Temeli",
        icon: "📝",
        desc: "Kelime işlemcide bir yazıyı güzelleştirirken:",
        items: [
          { bold: "1. Font (Yazı Tipi)", text: "Harflerin çizim stilini belirler (Örn: Ciddi, eğlenceli veya el yazısı)." },
          { bold: "2. Punto (Yazı Boyutu)", text: "Başlıklar için 18-24 punto, gövde metni için 12-14 punto idealdir." },
          { bold: "3. Kalın (Bold)", text: "Önemli kelimeleri daha koyu ve dikkat çekici hale getirir." },
          { bold: "4. Renk Paleti", text: "Harflere istediğimiz rengi vererek anlamı güçlendirir." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
        <!-- Kelime İşlemci Penceresi -->
        <rect x="45" y="40" width="330" height="170" rx="10" fill="#ffffff"/>
        <!-- Menü Şeridi -->
        <rect x="45" y="40" width="330" height="32" rx="8" fill="#1e293b"/>
        <text x="60" y="60" fill="#fff" font-size="10" font-weight="bold">Giriş</text>
        <rect x="100" y="46" width="60" height="20" rx="4" fill="#334155"/>
        <text x="130" y="60" fill="#e2e8f0" font-size="9" text-anchor="middle">Calibri ▼</text>
        <rect x="168" y="46" width="30" height="20" rx="4" fill="#334155"/>
        <text x="183" y="60" fill="#e2e8f0" font-size="9" text-anchor="middle">14 ▼</text>
        <!-- K - İ - A Düğmeleri -->
        <rect x="206" y="46" width="20" height="20" rx="4" fill="#6366f1"/>
        <text x="216" y="60" fill="#fff" font-size="10" font-weight="900" text-anchor="middle">K</text>
        <rect x="230" y="46" width="20" height="20" rx="4" fill="#334155"/>
        <text x="240" y="60" fill="#fff" font-size="10" font-style="italic" text-anchor="middle">İ</text>
        <rect x="254" y="46" width="20" height="20" rx="4" fill="#334155"/>
        <text x="264" y="60" fill="#fff" font-size="10" text-decoration="underline" text-anchor="middle">A</text>
        <!-- Belge İçeriği (10 Kasım Şiiri) -->
        <text x="210" y="105" fill="#1e1b4b" font-size="14" font-weight="900" text-anchor="middle">ATATÜRK'Ü ANARKEN</text>
        <text x="210" y="125" fill="#475569" font-size="11" font-style="italic" text-anchor="middle">Açtığın yolda, gösterdiğin hedefe,</text>
        <text x="210" y="142" fill="#475569" font-size="11" font-style="italic" text-anchor="middle">Hiç durmadan yürüyeceğime ant içerim.</text>
        <text x="210" y="165" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">Ne Mutlu Türküm Diyene!</text>
      </svg>`,
      caption: "Kelime İşlemcide Araç Çubuğu ve Şiir Düzenleme"
    },
    section2: {
      title: "Metin Seçme ve Hizalama Düğmeleri",
      subtitle: "Bir yazıyı değiştirmek için önce farenin sol tuşuyla seçmeliyiz:",
      layout: "cards-2",
      cards: [
        {
          title: "Seçme (Highlight) Kuralı",
          icon: "🖱️",
          desc: "Bilgisayarda altın kural: 'Seçmeden Değiştiremezsin!'",
          items: [
            { bold: "Sol Tık ile Sürükle", text: "Değiştirmek istediğiniz kelimenin başından sonuna kadar basılı tutun." },
            { bold: "Mavi Gölge", text: "Seçilen yazı mavi arka planla parlar; artık rengini veya boyutunu değiştirebilirsiniz." },
            { bold: "Çift Tık Sihri", text: "Bir kelimenin üzerine çift tıklarsanız sadece o kelimeyi seçer." }
          ]
        },
        {
          title: "Paragraf Hizalama Düğmeleri",
          icon: "📄",
          desc: "Yazıyı sayfanın neresinde durdurmak istersiniz?",
          items: [
            { bold: "Sola Hizala", text: "Normal kitap ve defter yazıları gibi soldan başlar." },
            { bold: "Ortala (Center)", text: "Şiirler ve başlıklar için sayfanın tam ortasına yerleştirir." },
            { bold: "Sağa Hizala", text: "Tarih veya imza gibi bilgileri sayfanın sağına yaslar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: '10 Kasım Anı Belgesi Hazırlama'",
      subtitle: "Kelime işlemcide Atatürk için 4 dizelik bir şiir yazıp biçimlendiriyoruz.",
      steps: [
        { title: "Programı Başlat", desc: "Kelime işlemciyi (Word veya Writer) açıp boş bir belge oluşturun." },
        { title: "Şiiri Yaz ve Ortala", desc: "Başlığı büyük harflerle yazıp 18 punto yapın ve ortaya hizalayın." },
        { title: "Renk ve Stil Ver", desc: "Önemli kelimeleri kalınlaştırın ve başlığa kırmızı renk verip kaydedin." }
      ],
      criteria: [
        "Metin seçme (bloklama) işlemini fareyle doğru yapabilme",
        "Yazı tipi, punto ve renk ayarlarını amaca uygun uygulayabilme",
        "Ortalama ve sola yaslama düğmelerini doğru yerde kullanabilme"
      ]
    },
    tips: {
      safetyTitle: "Dizgici Yazılımcı Tavsiyeleri",
      safetyRules: [
        { bold: "CapsLock Tuşuna Dikkat", text: "Bütün metni büyük harfle yazmak bağırmak gibidir; sadece başlıkları büyük yapın." },
        { bold: "Noktadan Sonra Boşluk", text: "Nokta, virgül ve soru işaretinden sonra mutlaka 1 kez Boşluk (Space) bırakın." },
        { bold: "Belgeni İsimlendir", text: "Dosyanızı '10_Kasim_Ataturk_Siiri_Ali' adıyla klasörünüze kaydedin." }
      ],
      myths: [
        { wrong: "Yazıyı seçmeden de font boyutunu değiştirirsem bütün yazı kendiliğinden büyür.", correct: "Hayır! Bilgisayar hangi kelimeyi değiştirmek istediğinizi bilemez. Önce fareyle kelimeyi seçmeli, sonra boyuta tıklamalısınız." }
      ]
    },
    quiz: {
      question: "Kelime işlemci programında yazılan bir şiirin başlığını sayfanın tam ortasına yerleştirmek için hangi hizalama düğmesine basılmalıdır?",
      options: [
        { text: "A) Sola Yasla", isCorrect: false },
        { text: "B) Ortala (Center)", isCorrect: true },
        { text: "C) Sağa Yasla", isCorrect: false },
        { text: "D) İki Yana Yasla", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Ortala' düğmesi seçili başlığı veya şiir dizelerini sayfanın tam ortasına hizalar."
    },
    summaryRules: [
      { bold: "Seç ve Uygula", text: "Biçimlendirmek istediğin yazıyı önce mutlaka seçmelisin." },
      { bold: "Yazı Tipi & Boyut", text: "Metnin okunurluğunu ve ciddiyetini belirler." },
      { bold: "Atatürk'ün İzinde", text: "Geleceğin bilişim ve bilim öncüleri olarak çok çalışacağız." }
    ],
    homework: "Sevdiğiniz bir kitabın kapağındaki yazı tiplerini inceleyin; başlık ile yazar isminin büyüklük farkını not alın.",
    nextWeekPreview: "1. Dönem Ara Tatil: Eğlenceli Dijital Tipografi, Şiir ve Afiş Atölyesi!"
  },

  // 10. HAFTA
  {
    week: 10,
    date: "16 - 22 Kasım",
    hours: "2 Ders Saati",
    unit: "2. Tema: Dijital İletişim, Kelime İşlemci ve Görsel Üretim",
    unitBadge: "Ara Tatil Atölyesi",
    unitTheme: "tema-2",
    title: "1. Dönem Ara Tatil: Dijital Tipografi ve Sanat Atölyesi",
    subtitle: "Görsel ve Metin Uyumu, Renkli Başlıklar, Çerçeveler ve Yaratıcı Yazarlık",
    outcomeCode: "BTY.3.2.3 (Serbest Üretim & Tipografi Sanatı)",
    targetSkill: "Metin ve Görseli Bir Arada Kullanarak Özgün Bir Hikaye Sayfası Oluşturabilme",
    curiosityQuestion: "Kitap kapaklarındaki harfler nasıl resimlerin bir parçası haline gelip bize masalın havasını hissettirir?",
    roadmap: [
      { title: "Tipografi Sanatı", desc: "Harflerin sadece ses değil, görsel bir duygu olduğunu keşfetme." },
      { title: "Metne Görsel Ekleme", desc: "Kelime işlemci sayfasına küçük resim ve şekiller ekleme." },
      { title: "Kenarlık ve Sayfa Rengi", desc: "Sayfayı bir masal parşömenine dönüştürme." },
      { title: "Tatil Hikayesi", desc: "Kendi yazdığımız mini tatil masalını resimlerle süsleme." }
    ],
    section1: {
      title: "Harflerin Büyüsü: Tipografi ve Sanat",
      subtitle: "Kelimeler doğru font ve renklerle buluştuğunda adeta canlanır:",
      layout: "split-visual",
      card: {
        title: "Tipografik Tasarımın Püf Noktaları",
        icon: "✨",
        desc: "Bir masal sayfası tasarlarken:",
        items: [
          { bold: "Duyguya Uygun Font", text: "Bir korku hikayesiyle bir neşeli uzay masalı aynı fontla yazılmaz!" },
          { bold: "İlk Harfi Büyütme (Baş Harf)", text: "Masalların başındaki 'BİR VARMIŞ...' gibi ilk harfi devasa yapma." },
          { bold: "Sayfa Sınırları", text: "Yazıların kenarlara yapışmaması için sayfa boşluklarını (kenar boşluğu) koruma." }
        ]
      },
      svg: `<svg viewBox="0 0 420 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="390" height="220" rx="16" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <!-- Masal Parşömeni -->
        <rect x="55" y="35" width="310" height="180" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <!-- Süs Kenarlığı -->
        <rect x="65" y="45" width="290" height="160" rx="8" fill="none" stroke="#d97706" stroke-width="1" stroke-dasharray="4 4"/>
        <!-- İlk Harf B (Büyük) -->
        <rect x="80" y="60" width="35" height="40" rx="6" fill="#ec4899"/>
        <text x="97" y="90" fill="#ffffff" font-size="28" font-weight="900" text-anchor="middle">B</text>
        <!-- Masal Metni -->
        <text x="125" y="75" fill="#78350f" font-size="12" font-weight="bold">ir varmış, bir yokmuş...</text>
        <text x="125" y="92" fill="#78350f" font-size="11">Uzay gemisini kodlayan minik robot,</text>
        <text x="80" y="120" fill="#78350f" font-size="11">yıldızların arasından süzülerek dünyaya gelmiş.</text>
        <!-- Görsel Figür -->
        <circle cx="280" cy="155" r="24" fill="#6366f1"/>
        <text x="280" y="162" font-size="20" text-anchor="middle">🤖</text>
        <polygon points="120,165 140,135 160,165" fill="#10b981"/>
        <text x="210" y="200" fill="#92400e" font-size="10" font-weight="bold" text-anchor="middle">Metin ve Görselin Masalsı Uyumu</text>
      </svg>`,
      caption: "Resimli Masal Sayfası ve Tipografik Düzen"
    },
    section2: {
      title: "Resim Eklerken Metin Kaydırma Seçenekleri",
      subtitle: "Sayfaya resim eklediğimizde yazılar resmin etrafında nasıl akmalı?",
      layout: "cards-2",
      cards: [
        {
          title: "Metin Kaydırma (Text Wrap)",
          icon: "🔄",
          desc: "Resmin üzerine sağ tıklayıp seçebileceğimiz seçenekler:",
          items: [
            { bold: "Metinle Aynı Hizaya", text: "Resim bir harf gibi davranır; sayfa düzeni kayabilir." },
            { bold: "Kare (Square)", text: "Yazılar resmin etrafında düzgün bir kare kutu gibi dolaşır." },
            { bold: "Sıkı (Tight)", text: "Yazılar resmin kıvrımlarına kadar sokularak harika görünür." }
          ]
        },
        {
          title: "Sayfa Kenarlıkları ve Renkler",
          icon: "🖼️",
          desc: "Sayfayı süsleme araçları:",
          items: [
            { bold: "Sayfa Kenarlığı", text: "Belgenin etrafına renkli çizgiler veya yıldız desenleri ekler." },
            { bold: "Sayfa Rengi", text: "Beyaz kağıdı açık pastel sarı, mavi veya yeşile boyar." },
            { bold: "Filigran", text: "Arka plana silik bir arma veya logo yerleştirir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Atölyesi: 'Kendi Masal Kitabımı Yapıyorum'",
      subtitle: "Ara tatilde ailenizle paylaşacağınız resimli ve renkli bir masal sayfası hazırlayın.",
      steps: [
        { title: "Bir Masal Konusu Seç", desc: "Bir robotun, sevimli bir sincabın veya uzay roketinin hikayesini hayal edin." },
        { title: "Büyük Baş Harfle Başla", desc: "İlk harfi büyük ve renkli yapıp 3-4 cümlelik masalınızı yazın." },
        { title: "Şekil veya Resim Ekle", desc: "Ekle menüsünden bir yıldız, kalp veya resim ekleyip 'Kare' metin kaydırması yapın." }
      ],
      criteria: [
        "Metin ile resmi bir sayfada uyumlu bir şekilde birleştirebilme",
        "Resmin metin kaydırma (Wrap Text) özelliğini doğru ayarlayabilme",
        "Yaratıcı ve hatasız bir hikaye sayfası üretebilme"
      ]
    },
    tips: {
      safetyTitle: "Genç Yazar Öğütleri",
      safetyRules: [
        { bold: "Resmin Boyutunu Köşelerden Değiştir", text: "Resmi büyütüp küçültürken kenarlardan değil, mutlaka köşelerden çekin; böylece şekli bozulmaz." },
        { bold: "Kendi Emeğini Yaz", text: "İnternetten kopyalamak yerine kendi aklınızdaki eşsiz masalı yazın." },
        { bold: "PDF Olarak Kaydet", text: "Masalınızı başka bir bilgisayarda açtığınızda düzenin bozulmaması için PDF olarak dışa aktarın." }
      ],
      myths: [
        { wrong: "Kelime işlemciler sadece düz siyah-beyaz resmi yazılar yazmak içindir.", correct: "Hayır! Kelime işlemcilerle dergiler, renkli afişler, davetiyeler ve resimli masal kitapları tasarlayabilirsiniz." }
      ]
    },
    quiz: {
      question: "Kelime işlemci belgesine eklediğimiz bir fotoğrafın yazıları itip sayfayı bozmaması ve yazıların resmin etrafında güzelce akması için hangi özellik kullanılır?",
      options: [
        { text: "A) Yazı Tipi Değiştirme", isCorrect: false },
        { text: "B) Metni Kaydır (Text Wrap - Kare / Sıkı)", isCorrect: true },
        { text: "C) Bilgisayarı Kapat", isCorrect: false },
        { text: "D) Yazıcıyı Başlat", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Metni Kaydır' (Text Wrap) seçeneği sayesinde yazılar resmin etrafında kusursuzca akar ve profesyonel bir dergi sayfası oluşur."
    },
    summaryRules: [
      { bold: "Tipografi", text: "Harflerin görsel sanatıdır." },
      { bold: "Metin ve Görsel", text: "Birlikte olunca masallar canlanır." },
      { bold: "Ara Tatil", text: "Okumak, yazmak, çizmek ve dinlenmek için harika bir fırsattır!" }
    ],
    homework: "Ara tatilde en sevdiğiniz hikaye kitabının 1 sayfasını açın; resmin ve yazıların nasıl yerleştirildiğini inceleyin.",
    nextWeekPreview: "24 Kasım Öğretmenler Günü: Şiir ve Mektup Dizgisi, Paragraf Aralıkları ve Baskı Önizleme!"
  }
];

if (typeof window !== 'undefined') {
  window.CURRICULUM_TERM_1_GRADE3 = CURRICULUM_TERM_1_GRADE3;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CURRICULUM_TERM_1_GRADE3;
}
