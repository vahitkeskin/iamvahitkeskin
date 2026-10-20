/**
 * 5. Sınıf Bilişim Teknolojileri ve Yazılım - 1. Dönem 2. Bölüm (Hafta 11 - 19)
 * Türkiye Yüzyılı Maarif Modeli
 */

const CURRICULUM_TERM_1_PART2_GRADE5 = [
  // 11. HAFTA
  {
    week: 11,
    date: "23 - 29 Kasım",
    hours: "2 Saat",
    unit: "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
    unitBadge: "2. Tema & 24 Kasım",
    unitTheme: "tema-2",
    title: "Dosya ve Klasör Yönetimi & Öğretmenler Günü",
    subtitle: "Dosya Anatomisi (Ad + Nokta + Uzantı), Temel Uzantılar ve Klasör Ağacı Hiyerarşisi",
    outcomeCode: "BTY.5.2.1",
    targetSkill: "Dosya Sistemi Organizasyonu & Sınıflandırma",
    curiosityQuestion: "Bilgisayar bir dosyanın şarkı mı, film mi, yoksa yazı mı olduğunu nereden anlar?",
    roadmap: [
      { title: "Dosya Nedir?", desc: "Dijital bilgilerin kaydedildiği temel saklama birimi." },
      { title: "Dosya Anatomisi", desc: "Dosya Adı + Nokta (.) + Dosya Uzantısı formülü." },
      { title: "Popüler Dosya Uzantıları", desc: ".docx, .xlsx, .pptx, .jpg, .png, .mp3, .mp4, .pdf." },
      { title: "Klasör Ağacı Hiyerarşisi", desc: "Masaüstü karmaşasını bitiren ana ve alt klasör düzeni." }
    ],
    section1: {
      title: "Dosyanın Kimlik Kartı: Dosya Uzantısı",
      subtitle: "Dosya adı bizim verdiğimiz isimdir; uzantı ise dosyanın hangi programla açılacağını belirleyen soyadıdır.",
      layout: "split-visual",
      card: {
        title: "Dosya İsimlendirme Formülü",
        icon: "🏷️",
        desc: "Bir dosya 3 kısımdan oluşur:",
        items: [
          { bold: "1. Dosya Adı", text: "Dosyanın içeriğini anlatan serbest isim (Örn: 'Odevim', 'Cumhuriyet_Klibi')." },
          { bold: "2. Nokta (.)", text: "İsim ile uzantıyı birbirinden ayıran sınır işareti." },
          { bold: "3. Dosya Uzantısı (Soyadı)", text: "Genellikle 3-4 harften oluşan dosya türü (Örn: '.mp4', '.docx')." },
          { bold: "Yasak Karakterler", text: "Dosya adlarında / \\ : * ? \" < > | gibi işaretler kullanılamaz!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
        
        <rect x="40" y="50" width="320" height="55" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="135" y="85" fill="#38bdf8" font-size="18" font-weight="bold" text-anchor="middle">Ogretmenim</text>
        <circle cx="215" cy="80" r="4" fill="#f59e0b"/>
        <text x="255" y="85" fill="#10b981" font-size="18" font-weight="bold" text-anchor="middle">docx</text>

        <path d="M135 110 V140" stroke="#38bdf8" stroke-width="2"/>
        <text x="135" y="160" fill="#bae6fd" font-size="11" text-anchor="middle">Dosya Adı</text>
        <text x="135" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">(Biz Belirleriz)</text>

        <path d="M215 110 V140" stroke="#f59e0b" stroke-width="2"/>
        <text x="215" y="160" fill="#fde68a" font-size="11" text-anchor="middle">Nokta</text>
        <text x="215" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">(Ayırıcı)</text>

        <path d="M255 110 V140" stroke="#10b981" stroke-width="2"/>
        <text x="255" y="160" fill="#a7f3d0" font-size="11" text-anchor="middle">Uzantı</text>
        <text x="255" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">(Word Belgesi)</text>
      </svg>`,
      caption: "Dosya Adı ve Uzantısının Anatomik Yapısı"
    },
    section2: {
      title: "En Popüler Dosya Uzantıları Rehberi",
      subtitle: "Hangi uzantı ne işe yarar, hangi programla açılır?",
      layout: "cards-4",
      cards: [
        {
          title: "Metin & Belge",
          icon: "📄",
          desc: ".docx (Word), .txt (Metin belgesi), .pdf (Kilitli taşınabilir belge)."
        },
        {
          title: "Resim & Görsel",
          icon: "🖼️",
          desc: ".jpg / .jpeg (Fotoğraf), .png (Şeffaf zeminli grafik), .gif (Animasyonlu resim)."
        },
        {
          title: "Ses & Müzik",
          icon: "🎵",
          desc: ".mp3 (Sıkıştırılmış müzik), .wav (Yüksek kaliteli stüdyo ses kaydı)."
        },
        {
          title: "Video & Film",
          icon: "🎬",
          desc: ".mp4 (Standart video), .avi (Video dosyası), .mov (Apple video formatı)."
        }
      ]
    },
    workshop: {
      title: "Atölye: 'Düzenli Bilgisayarım' Klasör Ağacı",
      subtitle: "Masaüstünde kendi ders ve proje klasörlerimizi oluşturuyoruz.",
      steps: [
        { title: "Ana Klasör Aç", desc: "Masaüstünde sağ tık > Yeni > Klasör diyerek '5_Sinif_Arsivim' adında bir klasör oluşturun." },
        { title: "Alt Klasörler Kur", desc: "İçine girip 4 alt klasör açın: '1_Turkce', '2_Matematik', '3_Bilisim', '4_Resimler'." },
        { title: "Dosyaları Taşı", desc: "Farklı uzantılardaki dosyaları ilgili klasörlere sürükleyip bırakarak düzenleyin." }
      ],
      criteria: [
        "Dosya adı ile uzantısı arasındaki farkı açıklayabilme",
        "En yaygın 5 dosya uzantısını türüyle doğru eşleştirebilme",
        "Hiyerarşik klasör yapısı oluşturup dosyaları düzenleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Dosya Adlandırırken 3 Altın Kural",
      safetyRules: [
        { bold: "Türkçe Karakter Uyarısı", text: "İnternete yüklenecek dosya isimlerinde ç, ğ, ı, ö, ş, ü harfleri yerine c, g, i, o, s, u kullanmak hataları önler." },
        { bold: "Boşluk Yerine Alt Çizgi", text: "Kelimeler arasına boşluk bırakmak yerine alt çizgi (_) koyun (Örn: 'fen_odevi_v1.docx')." }
      ],
      myths: [
        { wrong: "Bir dosyanın sonundaki .docx uzantısını silip .mp4 yaparsam o dosya otomatik olarak film olur.", correct: "Hayır! Sadece uzantıyı elle değiştirmek dosyanın iç yapısını değiştirmez, dosya bozulur ve açılamaz hale gelir." }
      ]
    },
    quiz: {
      question: "Arkadaşınız size 'Okul_Gezisi.mp3' adında bir dosya gönderdi. Bu dosyanın uzantısına (.mp3) bakarak ne tür bir dosya olduğunu anlarsınız?",
      options: [
        { text: "A) Yazılı bir ödev belgesi", isCorrect: false },
        { text: "B) Bir ses veya müzik kaydı", isCorrect: true },
        { text: "C) Bir video filmi", isCorrect: false },
        { text: "D) Sıkıştırılmış bir program", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> <strong>.mp3</strong> uzantısı tüm dünyada ses ve müzik dosyalarını temsil eden standart dosya uzantısıdır."
    },
    summaryRules: [
      { bold: "Dosya = Ad + Nokta + Uzantı", text: "Uzantı dosyanın türünü belirler." },
      { bold: "Klasörler Düzen Getirir", text: "Dosyaları konularına göre klasörleyin." },
      { bold: "24 Kasım Kutlu Olsun", text: "Bizleri bilgiyle aydınlatan tüm öğretmenlerimize teşekkür ederiz." }
    ],
    homework: "Bilgisayarınızda veya telefonunuzda bulunan 5 farklı dosyanın uzantılarını defterinize yazıp dosya türlerini belirtin.",
    nextWeekPreview: "Dosya Sıkıştırma (ZIP/RAR) ve Bulut Depolama (Google Drive, EBA Bulut)!"
  },

  // 12. HAFTA
  {
    week: 12,
    date: "30 Kasım - 06 Aralık",
    hours: "2 Saat",
    unit: "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Dosya Sıkıştırma (ZIP) & Bulut Depolama",
    subtitle: "Dosya Boyutunu Küçültme (ZIP/RAR) ve Bulut Sistemleri (Google Drive, EBA Bulut)",
    outcomeCode: "BTY.5.2.1",
    targetSkill: "Veri Sıkıştırma & Bulut Teknolojileri",
    curiosityQuestion: "Tatile giderken kıyafetlerimizi bavula vakumlayarak nasıl küçültüyorsak, 100 megabaytlık dosyaları tek bir küçük pakete nasıl dönüştürürüz?",
    roadmap: [
      { title: "Dosya Sıkıştırma Nedir?", desc: "Dosyalardaki tekrarlayan verileri matematiksel olarak paketleyip boyutu küçültme." },
      { title: "ZIP ve RAR Formatları", desc: "Birden fazla dosyayı tek bir arşivde toplama sanatı." },
      { title: "Bulut Depolama (Cloud) Nedir?", desc: "Dosyaların internetteki devasa güvenli sunucularda saklanması." },
      { title: "EBA Bulut ve Google Drive", desc: "Flash bellek taşımadan her yerden dosyalarımıza güvenle ulaşma." }
    ],
    section1: {
      title: "Dosya Sıkıştırma: Dijital Vakumlu Poşet",
      subtitle: "Tekrarlayan verileri silmeden paketleyip yer kazanma tekniği.",
      layout: "cards-2",
      cards: [
        {
          title: "Neden Sıkıştırırız?",
          icon: "🗜️",
          desc: "Sıkıştırmanın 3 büyük avantajı:",
          items: [
            { bold: "1. Yer Tasarrufu", text: "Sabit diskte veya flash bellekte daha az yer kaplar." },
            { bold: "2. Hızlı Gönderim", text: "E-posta veya internetten dosya gönderirken saniyeler içinde iletilir." },
            { bold: "3. Tek Paket Kolaylığı", text: "50 farklı fotoğrafı tek tek seçmek yerine tek bir .zip dosyasında birleştirebilirsiniz." }
          ]
        },
        {
          title: "Sıkıştırma Programları",
          icon: "📦",
          desc: "Bilgisayarda kullanılan araçlar:",
          items: [
            { bold: "Pardus / Windows Arşivleyici", text: "Sağ tık > 'Sıkıştır' veya 'Gönder > Sıkıştırılmış ZIP klasörü'." },
            { bold: "Popüler Formatlar", text: ".zip, .rar, .7z, .tar.gz formatları." },
            { bold: "Arşivden Çıkarma", text: "Sıkıştırılmış dosyayı açmak için 'Buraya Çıkart (Extract)' kullanılır." }
          ]
        }
      ]
    },
    section2: {
      title: "Bulut Depolama: Cebinizdeki Gökyüzü",
      subtitle: "Flash bellek unutma, kaybetme ve bozulma derdine son!",
      layout: "split-visual",
      card: {
        title: "Bulut (Cloud) Nasıl Çalışır?",
        icon: "☁️",
        desc: "İnternet üzerindeki dijital kasanız:",
        items: [
          { bold: "Her Yerden Erişim", text: "Evde başladığınız ödeve okulda akıllı tahtadan veya telefondan devam edebilirsiniz." },
          { bold: "Otomatik Yedekleme", text: "Bilgisayarınız bozulsa bile buluttaki dosyalarınız asla kaybolmaz." },
          { bold: "Popüler Bulut Sistemleri", text: "EBA Bulut (Milli Eğitim Bakanlığı), Google Drive, Microsoft OneDrive, Dropbox." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
        
        <path d="M160 80 C160 60 180 45 205 45 C230 45 248 62 250 80 C270 82 285 98 285 115 C285 135 268 150 245 150 H160 C135 150 115 132 115 110 C115 90 135 75 160 80 Z" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="112" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">BULUT SUNUCU</text>
        <text x="200" y="128" fill="#bae6fd" font-size="9" text-anchor="middle">EBA Bulut / Drive</text>

        <rect x="50" y="170" width="70" height="40" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="85" y="194" fill="#a7f3d0" font-size="10" text-anchor="middle">💻 Okul PC</text>

        <rect x="165" y="170" width="70" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="200" y="194" fill="#fde68a" font-size="10" text-anchor="middle">📱 Telefon</text>

        <rect x="280" y="170" width="70" height="40" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="315" y="194" fill="#e9d5ff" font-size="10" text-anchor="middle">🏠 Ev Bilgisayarı</text>

        <path d="M85 170 L160 145" stroke="#94a3b8" stroke-dasharray="3 3"/>
        <path d="M200 170 V150" stroke="#94a3b8" stroke-dasharray="3 3"/>
        <path d="M315 170 L245 145" stroke="#94a3b8" stroke-dasharray="3 3"/>
      </svg>`,
      caption: "Bulut Depolama ile Tüm Cihazlardan Ortak Dosyalara Erişim"
    },
    workshop: {
      title: "Atölye: 'Dosya Sıkıştır ve Buluta Yükle'",
      subtitle: "3 fotoğrafı ZIP paketine dönüştürüp EBA/Drive ortamına yüklüyoruz.",
      steps: [
        { title: "3 Dosyayı Seç", desc: "Masaüstündeki 3 resmi fareyle topluca seçin." },
        { title: "Sağ Tık > Sıkıştır", desc: "Sağ tıklayıp 'Sıkıştır' (ZIP) seçeneğini seçin ve adını 'Gezim.zip' yapın." },
        { title: "Boyutları Karşılaştır", desc: "Orijinal 3 dosyanın toplam boyutu ile oluşan .zip dosyasının boyutunu karşılaştırın." }
      ],
      criteria: [
        "Dosya sıkıştırmanın neden yapıldığını açıklayabilme",
        "Birden fazla dosyayı tek bir ZIP arşivi haline getirebilme",
        "Bulut depolamanın flash belleğe göre avantajlarını bilme"
      ]
    },
    tips: {
      safetyTitle: "Bulut Depolamada Güvenlik",
      safetyRules: [
        { bold: "Hesabınızı Başkasına Vermeyin", text: "Bulut depolama hesabınızın şifresi sadece size aittir; ortak bilgisayarlarda işiniz bitince mutlaka 'Çıkış Yap' butonuna basın." }
      ],
      myths: [
        { wrong: "Bulut depolama gökyüzündeki gerçek bulutların içinde elektrikle çalışır.", correct: "Bulut mecazi bir isimdir; aslında dünyanın farklı yerlerindeki devasa, güvenli veri merkezlerindeki (Data Center) bilgisayarlarda saklanır." }
      ]
    },
    quiz: {
      question: "Birden fazla dosyayı internetten tek bir paket halinde hızlıca göndermek veya sabit diskte daha az yer kaplamasını sağlamak için hangi işlem yapılır?",
      options: [
        { text: "A) Dosyaları silmek", isCorrect: false },
        { text: "B) Dosyaları sıkıştırmak (.zip / .rar)", isCorrect: true },
        { text: "C) Bilgisayarı yeniden başlatmak", isCorrect: false },
        { text: "D) Ekran parlaklığını kısmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Dosyaları sıkıştırmak (ZIP/RAR) hem dosya boyutunu küçültür hem de onlarca dosyayı tek bir paket halinde göndermeyi sağlar."
    },
    summaryRules: [
      { bold: "ZIP = Paketleme", text: "Boyuttan ve zamandan tasarruf." },
      { bold: "Bulut = Her Yerden Erişim", text: "Flash bellek taşıma derdine son." },
      { bold: "Yedek Hayat Kurtarır", text: "Önemli ödevlerinizi daima bulutta yedekleyin." }
    ],
    homework: "EBA hesabınıza giriş yapıp 'EBA Dosyalar / Bulut' bölümünün nerede olduğunu bulun ve 1 dosya yükleyin.",
    nextWeekPreview: "Kelime İşlemciye Giriş: Sayfa Düzeni, Yazı Tipleri ve Biçimlendirme!"
  },

  // 13. HAFTA
  {
    week: 13,
    date: "07 - 13 Aralık",
    hours: "2 Saat",
    unit: "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Kelime İşlemciye Giriş: Yazı Düzenleme",
    subtitle: "Word / LibreOffice Writer / Google Dokümanlar: Arayüz, Yazı Tipi, Paragraf ve Biçimlendirme",
    outcomeCode: "BTY.5.2.2",
    targetSkill: "Dijital Belge Tasarımı & Metin İşleme",
    curiosityQuestion: "Daktiloda yanlış bir harf yazdığınızda tüm sayfayı yırtıp atmak gerekirdi; kelime işlemciler bu zorluğu nasıl tarihe gömdü?",
    roadmap: [
      { title: "Kelime İşlemci Nedir?", desc: "Yazı yazma, düzenleme, biçimlendirme ve yazdırma programları." },
      { title: "Temel Arayüz Menüleri", desc: "Giriş, Ekle, Düzen menüleri ve araç çubukları." },
      { title: "Yazı Tipi (Font) Ayarları", desc: "Boyut, renk, Kalın (K/B), İtalik (İ/I), Altı Çizili (A/U)." },
      { title: "Paragraf ve Hizalama", desc: "Sola yasla, ortala, sağa yasla, iki yana yasla ve satır aralığı." }
    ],
    section1: {
      title: "Kelime İşlemci Arayüzü ve Yazı Tipi (Font)",
      subtitle: "Yazılarınızı sadece okunaklı değil, aynı zamanda estetik ve profesyonel kılın.",
      layout: "cards-2",
      cards: [
        {
          title: "Yazı Tipi (Font) Özellikleri",
          icon: "🔤",
          desc: "Metin görünümünü özelleştirme:",
          items: [
            { bold: "Yazı Tipi (Font Ailesi)", text: "Arial, Calibri, Times New Roman gibi farklı karakter stilleri." },
            { bold: "Yazı Boyutu (Punto)", text: "Başlıklar için 14-18 punto, normal metin için 11-12 punto idealdir." },
            { bold: "Vurgu Stilleri", text: "<strong>K (Kalın)</strong> önemli kelimeler için, <em>İ (İtalik)</em> alıntılar için kullanılır." },
            { bold: "Metin Rengi", text: "Okunabilirliği zorlaştırmayacak koyu ve zıt renkler seçilmelidir." }
          ]
        },
        {
          title: "Paragraf Hizalama Seçenekleri",
          icon: "📐",
          desc: "Metinleri sayfaya düzgünce yerleştirme:",
          items: [
            { bold: "Sola Yasla", text: "Standart okuma yönü (Varsayılan biçim)." },
            { bold: "Ortala", text: "Şiirler ve ana başlıklar için kullanılır." },
            { bold: "Sağa Yasla", text: "Tarih ve imza kısımları için idealdir." },
            { bold: "İki Yana Yasla", text: "Kitap ve gazete düzeninde iki kenarı cetvel gibi düz hizalar." }
          ]
        }
      ]
    },
    section2: {
      title: "Hızlı Kısayollar: Zamandan Kazanın",
      subtitle: "Klavyeden iki tuşa basarak fare kullanmadan saniyeler kazanın.",
      layout: "split-visual",
      card: {
        title: "Bilişimcinin Süper Kısayolları",
        icon: "⚡",
        desc: "Ctrl tuşu kombinasyonları:",
        items: [
          { bold: "Ctrl + C", text: "Kopyala (Seçili metni hafızaya alır)." },
          { bold: "Ctrl + V", text: "Yapıştır (Kopyalanan metni yapıştırır)." },
          { bold: "Ctrl + X", text: "Kes (Metni yerinden alıp taşır)." },
          { bold: "Ctrl + Z", text: "Geri Al (Hata yaptığınızda hayat kurtaran sihirli tuş!)." },
          { bold: "Ctrl + S", text: "Kaydet (Emeğinizin silinmemesi için sık sık basın)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        
        <rect x="50" y="45" width="65" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="82" y="75" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Ctrl</text>

        <text x="130" y="75" fill="#f59e0b" font-size="20" font-weight="bold" text-anchor="middle">+</text>

        <rect x="145" y="45" width="55" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="172" y="75" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">C</text>

        <path d="M215 70 H255" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow)"/>

        <rect x="265" y="45" width="90" height="50" rx="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="310" y="75" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">KOPYALA</text>

        <rect x="50" y="125" width="65" height="50" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="82" y="155" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Ctrl</text>

        <text x="130" y="155" fill="#f59e0b" font-size="20" font-weight="bold" text-anchor="middle">+</text>

        <rect x="145" y="125" width="55" height="50" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="172" y="155" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">Z</text>

        <path d="M215 150 H255" stroke="#c084fc" stroke-width="2.5"/>

        <rect x="265" y="125" width="90" height="50" rx="8" fill="#581c87" stroke="#c084fc" stroke-width="1.5"/>
        <text x="310" y="155" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">GERİ AL</text>
      </svg>`,
      caption: "Klavyeden En Çok Kullanılan Kısayol Tuşları"
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Kendi Şiirimi Biçimlendiriyorum'",
      subtitle: "Kelime işlemcide bir şiir yazıp başlık ve mısraları biçimlendiriyoruz.",
      steps: [
        { title: "Metni Yaz", desc: "Kelime işlemciyi açın ve 2 kıtalık sevdiğiniz bir şiiri yazın." },
        { title: "Başlığı Biçimlendir", desc: "Başlığı seçip 16 punto, Kalın, Kırmızı yapın ve sayfaya 'Ortalayın'." },
        { title: "Kısayolları Dene", desc: "Bir kelimeyi silin ve hemen 'Ctrl + Z' tuşuna basarak geri getirin!" }
      ],
      criteria: [
        "Metin seçme (bloklama) ve yazı tipi ayarlarını değiştirebilme",
        "Paragraf hizalama türlerini amacına uygun kullanabilme",
        "Ctrl+C, Ctrl+V, Ctrl+Z kısayollarını pratik olarak uygulayabilme"
      ]
    },
    tips: {
      safetyTitle: "Tipografi Altın Kuralı",
      safetyRules: [
        { bold: "Çok Fazla Yazı Tipi Kullanmayın", text: "Aynı sayfada 5-6 farklı yazı tipi kullanmak metni çorba yapar ve okunaksız kılar; en fazla 2 uyumlu font seçin." }
      ],
      myths: [
        { wrong: "Satır başına geçmek için sürekli Space (Boşluk) tuşuna basmak gerekir.", correct: "Boşluk tuşu sadece kelimeler arasına tek bir boşluk koymak içindir; yeni satıra geçmek için Enter tuşuna basılır!" }
      ]
    },
    quiz: {
      question: "Kelime işlemci programında çalışırken yanlışlıkla sildiğiniz bir metni veya yaptığınız bir hatayı anında eski haline getiren klavye kısayolu hangisidir?",
      options: [
        { text: "A) Ctrl + P (Yazdır)", isCorrect: false },
        { text: "B) Ctrl + Z (Geri Al)", isCorrect: true },
        { text: "C) Ctrl + A (Tümünü Seç)", isCorrect: false },
        { text: "D) Alt + F4", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> <strong>Ctrl + Z</strong> kısayolu son yapılan işlemi geri alarak hataları anında düzeltir."
    },
    summaryRules: [
      { bold: "Başlıklar Öne Çıkar", text: "Büyük punto ve kalın yazı." },
      { bold: "Hizalama Düzen Verir", text: "İki yana yasla ile dergi düzeni." },
      { bold: "Ctrl + Z Dostunuzdur", text: "Hata yapmaktan korkmayın." }
    ],
    homework: "Bilgisayarda İstiklal Marşımızın ilk 2 kıtasını yazıp başlığını kırmızı ve ortalı, mısralarını italik yapın.",
    nextWeekPreview: "Kelime İşlemcide Tablolar ve Resim Ekleme: Haftalık Ders Programı Tasarımı!"
  },

  // 14. HAFTA
  {
    week: 14,
    date: "14 - 20 Aralık",
    hours: "2 Saat",
    unit: "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Kelime İşlemcide Tablo & Görsel Ekleme",
    subtitle: "Satır ve Sütun Mantığı, Tablo Biçimlendirme, Resim Ekleme ve Metin Kaydırma",
    outcomeCode: "BTY.5.2.3",
    targetSkill: "Görsel Belge Tasarımı & Tablolama",
    curiosityQuestion: "Okul ders programınız veya yemekhane listesi neden düz yazı yerine çizgili kutucuklar (tablolar) halinde hazırlanır?",
    roadmap: [
      { title: "Tablo Nedir?", desc: "Bilgileri satır ve sütunlar halinde düzenli gösteren çizgili ızgara." },
      { title: "Satır ve Sütun Mantığı", desc: "Yatay çizgiler (Satır), dikey çizgiler (Sütun) ve kesişim (Hücre)." },
      { title: "Görsel (Resim) Ekleme", desc: "Bilgisayardan veya internetten telifsiz görsel ekleme." },
      { title: "Metin Kaydırma (Text Wrap)", desc: "Resmin yazının yanında, üstünde veya arkasında durmasını ayarlama." }
    ],
    section1: {
      title: "Tablonun Anatomisi: Satır, Sütun ve Hücre",
      subtitle: "Karmaşık bilgileri tek bakışta anlaşılır kılan muhteşem ızgara.",
      layout: "split-visual",
      card: {
        title: "Tablo Bileşenleri",
        icon: "📊",
        desc: "Tabloyu oluşturan 3 temel unsur:",
        items: [
          { bold: "Sütun (Dikey)", text: "Yukarıdan aşağıya uzanan dikey bölmeler (Örn: Pazartesi sütunu)." },
          { bold: "Satır (Yatay)", text: "Soldan sağa uzanan yatay çizgiler (Örn: 1. Ders saati satırı)." },
          { bold: "Hücre", text: "Satır ve sütunun kesiştiği her bir kutucuk." },
          { bold: "Hücre Birleştirme", text: "Birden fazla kutucuğu birleştirip tek bir başlık kutusu yapma." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
        
        <rect x="50" y="45" width="300" height="35" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="200" y="68" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">HAFTALIK DERS PROGRAMI (Birleştirilmiş Satır)</text>

        <rect x="50" y="90" width="95" height="35" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <text x="97" y="112" fill="#bae6fd" font-size="11" text-anchor="middle">Pazartesi</text>

        <rect x="152" y="90" width="95" height="35" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <text x="200" y="112" fill="#bae6fd" font-size="11" text-anchor="middle">Salı</text>

        <rect x="255" y="90" width="95" height="35" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <text x="302" y="112" fill="#bae6fd" font-size="11" text-anchor="middle">Çarşamba</text>

        <rect x="50" y="135" width="95" height="40" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/>
        <text x="97" y="160" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Bilişim</text>

        <rect x="152" y="135" width="95" height="40" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="200" y="160" fill="#94a3b8" font-size="11" text-anchor="middle">Matematik</text>

        <rect x="255" y="135" width="95" height="40" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="302" y="160" fill="#94a3b8" font-size="11" text-anchor="middle">Türkçe</text>
      </svg>`,
      caption: "Satır, Sütun ve Birleştirilmiş Hücrelerden Oluşan Tablo Yapısı"
    },
    section2: {
      title: "Görsel Ekleme ve Metin Kaydırma",
      subtitle: "Sayfayı zenginleştirmek için resimleri yazıyla uyumlu yerleştirin.",
      layout: "cards-2",
      cards: [
        {
          title: "Resim Yerleşimi (Metin Kaydırma)",
          icon: "🖼️",
          desc: "Resmin yazıyla dansı:",
          items: [
            { bold: "Metinle Aynı Hizada", text: "Resim koca bir harf gibi davranır, satırı böler." },
            { bold: "Kare (Square)", text: "Yazılar resmin etrafından su gibi akar, dergi görünümü kazanır." },
            { bold: "Metnin Önünde / Arkasında", text: "Resim yazının arkasına filigran gibi geçer veya yazının üzerine biner." }
          ]
        },
        {
          title: "Görsel Boyutlandırma Kuralı",
          icon: "📐",
          desc: "Resmin orantısını bozmayın:",
          items: [
            { bold: "Köşelerden Çekin", text: "Resmi büyütüp küçültürken daima 4 köşesindeki yuvarlak noktalardan çekin." },
            { bold: "Yanlardan Basmayın", text: "Sadece sağdan veya üstten basarsanız resimdeki insanlar basık veya zayıf görünür!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Haftalık Ders Programı Tasarımı'",
      subtitle: "5 sütun, 7 satırlık renkli bir ders programı tablosu yapıyoruz.",
      steps: [
        { title: "Tablo Ekle", desc: "Ekle > Tablo menüsünden 6 sütun (Saat + 5 Gün) ve 8 satırlık bir tablo çizin." },
        { title: "Dersleri Yaz & Boya", desc: "Günleri ve dersleri yazın; 'Bilişim' dersi olan hücreleri yeşil renkle boyayın." },
        { title: "Okul Logosu Ekle", desc: "Köşeye okulunuzun veya bir bilişim simgesinin resmini ekleyip 'Kare' hizalayın." }
      ],
      criteria: [
        "Satır ve sütun sayılarını belirleyip tablo ekleyebilme",
        "Hücre arka plan renklerini ve kenarlıklarını düzenleyebilme",
        "Resim ekleyip köşelerinden orantılı boyutlandırabilme"
      ]
    },
    tips: {
      safetyTitle: "İnternetten Resim Eklerken",
      safetyRules: [
        { bold: "Telif Haklarına Saygı", text: "İnternetten indirdiğiniz görsellerin telifsiz (Creative Commons) olmasına dikkat edin; kaynağını dipnot olarak belirtin." }
      ],
      myths: [
        { wrong: "Tablodaki çizgiler sadece ekranda görünür, yazıcıdan çıkmaz.", correct: "Kenarlıklar açık olduğu sürece tüm tablo çizgileri kâğıda aynen basılır; isterseniz kenarlıkları gizleyebilirsiniz." }
      ]
    },
    quiz: {
      question: "Kelime işlemcide bir tablo tasarlarken YUKARIDAN AŞAĞIYA DOĞRU UZANAN dikey bölümlere ne ad verilir?",
      options: [
        { text: "A) Satır", isCorrect: false },
        { text: "B) Sütun", isCorrect: true },
        { text: "C) Sayfa", isCorrect: false },
        { text: "D) Dipnot", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Tablolarda yukarıdan aşağıya dikey alanlara <strong>Sütun</strong>, soldan sağa yatay alanlara ise <strong>Satır</strong> denir."
    },
    summaryRules: [
      { bold: "Tablolar Düzenler", text: "Satır ve sütunlarla temiz liste." },
      { bold: "Köşeden Boyutlandır", text: "Resimlerin oranını asla bozmayın." },
      { bold: "Görsel Güç", text: "Resimli belgeler 10 kat daha ilgi çekicidir." }
    ],
    homework: "Evinizde ailenizin haftalık görev dağılımını veya yemek listesini gösteren 3 sütunlu bir tablo tasarlayın.",
    nextWeekPreview: "Sunum Programlarına Giriş: Slayt Düzenleri, Renkler ve 6x6 Kuralı!"
  },

  // 15. HAFTA
  {
    week: 15,
    date: "21 - 27 Aralık",
    hours: "2 Saat",
    unit: "2. Tema: Dijital Ürün Tasarımı ve Geliştirme",
    unitBadge: "2. Tema",
    unitTheme: "tema-2",
    title: "Sunum Programlarına Giriş & Etkili Tasarım",
    subtitle: "PowerPoint / Google Slaytlar: Slayt Mimarisi, 6x6 Kuralı, Renk Kontrastı ve Geçişler",
    outcomeCode: "BTY.5.2.4",
    targetSkill: "Görsel İletişim & Sunum Tasarımı",
    curiosityQuestion: "Bazı sunumlarda dinleyicilerin uykusu gelirken, bazı sunumlar neden film gibi nefes kesmeden izlenir?",
    roadmap: [
      { title: "Sunum Programı Nedir?", desc: "Fikirlerimizi görsel slaytlarla topluluğa anlatma aracı." },
      { title: "Altın Kural: 6x6 Kuralı", desc: "Bir slaytta en fazla 6 satır ve her satırda en fazla 6 kelime." },
      { title: "Görsel Hiyerarşi & Kontrast", desc: "Koyu zemine açık yazı, büyük başlıklar, vurucu resimler." },
      { title: "Geçişler ve Animasyonlar", desc: "Slaytlar arası yumuşak akış ve dikkat dağıtmayan hareketler." }
    ],
    section1: {
      title: "Etkili Bir Slaytın Altın Kuralları",
      subtitle: "Slaytlar bir kitap sayfası değildir; dinleyicinin okuması için değil, konuşmacıyı desteklemek içindir.",
      layout: "cards-2",
      cards: [
        {
          title: "6x6 Kuralı ve Az Yazı",
          icon: "📏",
          desc: "Yazı kalabalığından kaçının:",
          items: [
            { bold: "6 Satır Kuralı", text: "Bir slayta asla uzun uzun paragraflar kopyalayıp yapıştırmayın." },
            { bold: "Madde İmleri", text: "Cümleler yerine kısa, vurucu anahtar kelimeler ve madde imleri kullanın." },
            { bold: "Görsel Odak", text: "Yazıyı destekleyen büyük ve kaliteli bir görsel metinden daha çok şey anlatır." }
          ]
        },
        {
          title: "Renk Uyumu ve Kontrast",
          icon: "🎨",
          desc: "Gözü yormayan okunabilirlik:",
          items: [
            { bold: "Yüksek Kontrast", text: "Koyu lacivert zemin üzerine beyaz/sarı yazı veya beyaz zemin üzerine koyu gri yazı." },
            { bold: "Görünmez Renkler", text: "Sarı zemin üzerine beyaz yazı veya kırmızı üzerine yeşil yazı ASLA kullanılmaz!" },
            { bold: "Tutarlı Tema", text: "Her slaytta farklı bir renk patlaması yerine aynı renk ailesini koruyun." }
          ]
        }
      ]
    },
    section2: {
      title: "Geçişler ve Animasyonlar: Aşırıya Kaçmayın",
      subtitle: "Her şeyi uçurup döndürmek profesyonel bir sunumu komik duruma düşürür.",
      layout: "split-visual",
      card: {
        title: "Dengeli Hareket",
        icon: "🎬",
        desc: "İki hareket türünün farkı:",
        items: [
          { bold: "Geçiş (Transition)", text: "Bir slayttan diğerine geçerken tüm sayfanın akışı (Örn: Solma, İtme)." },
          { bold: "Animasyon (Animation)", text: "Slaytın içindeki tek bir yazının veya resmin hareketi (Örn: Belirme)." },
          { bold: "Sade Olan Güzeldir", text: "Dönen, takla atan yazılar izleyicinin başını döndürür; sade geçişleri tercih edin." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>
        
        <rect x="50" y="45" width="130" height="150" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
        <text x="115" y="70" fill="#fecdd3" font-size="11" font-weight="bold" text-anchor="middle">✕ KÖTÜ SLAYT</text>
        <line x1="60" y1="85" x2="170" y2="85" stroke="#ef4444" stroke-width="2"/>
        <line x1="60" y1="95" x2="170" y2="95" stroke="#ef4444" stroke-width="2"/>
        <line x1="60" y1="105" x2="170" y2="105" stroke="#ef4444" stroke-width="2"/>
        <line x1="60" y1="115" x2="170" y2="115" stroke="#ef4444" stroke-width="2"/>
        <line x1="60" y1="125" x2="170" y2="125" stroke="#ef4444" stroke-width="2"/>
        <line x1="60" y1="135" x2="170" y2="135" stroke="#ef4444" stroke-width="2"/>
        <line x1="60" y1="145" x2="170" y2="145" stroke="#ef4444" stroke-width="2"/>
        <line x1="60" y1="155" x2="170" y2="155" stroke="#ef4444" stroke-width="2"/>
        <text x="115" y="180" fill="#fca5a5" font-size="9" text-anchor="middle">Aşırı Yazı, Sıfır Görsel!</text>

        <rect x="220" y="45" width="130" height="150" rx="10" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <text x="285" y="70" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">✓ İYİ SLAYT</text>
        <rect x="235" y="85" width="100" height="50" rx="6" fill="#047857"/>
        <text x="285" y="115" fill="#ffffff" font-size="20" text-anchor="middle">🚀</text>
        <text x="285" y="155" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Teknoloji</text>
        <text x="285" y="172" fill="#a7f3d0" font-size="9" text-anchor="middle">3 Kısa Madde</text>
      </svg>`,
      caption: "Kötü Slayt (Yazı Yığını) ile İyi Slayt (Görsel ve Sade) Karşılaştırması"
    },
    workshop: {
      title: "Atölye: '3 Slaytlık Hayalimdeki Şehir'",
      subtitle: "PowerPoint veya Google Slaytlar'da mini bir sunum hazırlıyoruz.",
      steps: [
        { title: "Kapak Slaytı Yap", desc: "Sunum başlığını, kendi adınızı ve güzel bir şehir görselini yerleştirin." },
        { title: "İçerik Slaytı (6x6)", desc: "Geleceğin şehrinde olacak 3 teknolojiyi madde madde yazın." },
        { title: "Kapanış ve Teşekkür", desc: "'Dinlediğiniz için teşekkürler' slaytı ekleyip F5 tuşuyla tam ekran sunun!" }
      ],
      criteria: [
        "Slaytlarda 6x6 kuralına ve az yazı ilkesine uyma",
        "Arka plan ile yazı renkleri arasında yüksek kontrast sağlama",
        "Slayt gösterisini (F5) başlatıp akıcı şekilde sunabilme"
      ]
    },
    tips: {
      safetyTitle: "Sunum Yaparken Beden Dili",
      safetyRules: [
        { bold: "Ekrana Sırtınızı Dönmeyin", text: "Slayttaki yazıları sırtınızı dönüp aynen okumayın; dinleyicilerin gözlerine bakarak anlatın." }
      ],
      myths: [
        { wrong: "Bir slaytta ne kadar çok yazı olursa dinleyiciler o kadar çok şey öğrenir.", correct: "İnsan beyni aynı anda hem çok yazı okuyup hem konuşmacıyı dinleyemez; çok yazı izleyiciyi sıkar ve uzaklaştırır!" }
      ]
    },
    quiz: {
      question: "Etkili bir sunum hazırlarken bir slaytta aşırı yazı kalabalığını engellemek için önerilen kural aşağıdakilerden hangisidir?",
      options: [
        { text: "A) 6x6 Kuralı (En fazla 6 satır, satırda 6 kelime)", isCorrect: true },
        { text: "B) 100x100 Kuralı", isCorrect: false },
        { text: "C) 1 Slayt 1 Saat Kuralı", isCorrect: false },
        { text: "D) Sadece Kırmızı Yazı Kuralı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> <strong>6x6 Kuralı</strong>, slaytların sade, okunabilir ve dikkat çekici kalmasını sağlayan dünyaca ünlü sunum kuralıdır."
    },
    summaryRules: [
      { bold: "Az Yazı, Çok Görsel", text: "Slaytlar özet içindir." },
      { bold: "6x6 Kuralı", text: "Satır ve kelime sınırına uyun." },
      { bold: "Yüksek Kontrast", text: "Yazılar uzaktan net okunmalıdır." }
    ],
    homework: "Sevdiğiniz bir hayvan veya hobiniz hakkında 3 slaytlık sade bir sunum hazırlayın.",
    nextWeekPreview: "Bilgisayar Ağları: İnternet Nasıl Çalışır? (Modem, Switch, IP ve Ağ Türleri)!"
  },

  // 16. HAFTA
  {
    week: 16,
    date: "28 Aralık - 03 Ocak",
    hours: "2 Saat",
    unit: "3. Tema: Bilgisayar Ağları ve İletişim",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "Bilgisayar Ağları: İnternet Nasıl Çalışır?",
    subtitle: "Ağ Nedir? Yerel Ağ (LAN) ve Geniş Ağ (WAN), Modem, Router, Switch ve IP Adresi",
    outcomeCode: "BTY.5.3.1",
    targetSkill: "Ağ Teknolojileri & Altyapı Çözümleme",
    curiosityQuestion: "Evdeki bilgisayarınızdan bastığınız tek bir tuş, okyanusların altındaki kabloları aşarak Amerika'daki bir sunucuya nasıl 0.1 saniyede ulaşır?",
    roadmap: [
      { title: "Bilgisayar Ağı Nedir?", desc: "İki veya daha fazla bilgisayarın kaynak paylaşımı için birbirine bağlanması." },
      { title: "Ağ Türleri (LAN ve WAN)", desc: "Okul içi Yerel Alan Ağı (LAN) ve tüm dünyayı saran Geniş Alan Ağı (WAN / İnternet)." },
      { title: "Ağ Donanımları", desc: "Modem, dağıtıcı (Switch), yönlendirici (Router) ve Ethernet kablosu." },
      { title: "IP Adresi: Dijital Ev Adresi", desc: "Ağa bağlı her cihazın benzersiz kimlik numarası." }
    ],
    section1: {
      title: "Bilgisayar Ağları ve Türleri",
      subtitle: "Tek başına duran bilgisayardan, birbirine bağlı küresel dijital dünyaya.",
      layout: "cards-2",
      cards: [
        {
          title: "Yerel Alan Ağı (LAN - Local Area Network)",
          icon: "🏫",
          desc: "Küçük ve sınırlı coğrafi alan:",
          items: [
            { bold: "Kapsama Alanı", text: "Bir oda, bir ev, bir bilişim laboratuvarı veya tek bir okul binası." },
            { bold: "Avantajı", text: "Tek bir yazıcıyı sınıftaki 30 bilgisayarın ortak kullanabilmesi, çok yüksek veri transfer hızı." },
            { bold: "Bağlantı", text: "Ethernet kabloları veya okulun Wi-Fi ağı." }
          ]
        },
        {
          title: "Geniş Alan Ağı (WAN - Wide Area Network)",
          icon: "🌍",
          desc: "Şehirleri ve kıtaları bağlayan ağ:",
          items: [
            { bold: "Kapsama Alanı", text: "Farklı şehirler, ülkeler ve tüm kıtalar." },
            { bold: "En Büyük Örnek", text: "İnternet, dünyadaki tüm LAN ağlarının birbirine bağlandığı devasa bir WAN'dır!" },
            { bold: "Altyapı", text: "Okyanus altı fiber optik kablolar, uydular ve telekomünikasyon kuleleri." }
          ]
        }
      ]
    },
    section2: {
      title: "Ağ Donanımları: Trafiği Kim Yönetir?",
      subtitle: "İnternet paketlerini doğru adrese ulaştıran donanım kahramanları.",
      layout: "split-visual",
      card: {
        title: "Temel Ağ Cihazları",
        icon: "🔌",
        desc: "Kutunun içindekiler:",
        items: [
          { bold: "Modem", text: "Telefon veya fiber hattından gelen sinyalleri bilgisayarın anlayacağı dijital sinyale çevirir." },
          { bold: "Dağıtıcı (Switch)", text: "Sınıftaki tüm bilgisayarları kablolarla birbirine bağlayan çoklu priz gibidir." },
          { bold: "Ethernet Kablosu (RJ45)", text: "Mavi/gri renkli, internet verisini ışık hızında taşıyan bakır kablo." },
          { bold: "IP Adresi", text: "Ağa bağlanan her cihaza verilen kimlik numarası (Örn: 192.168.1.1)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
        
        <circle cx="200" cy="55" r="22" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="58" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">MODEM</text>

        <rect x="160" y="110" width="80" height="30" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="200" y="130" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">SWITCH</text>

        <line x1="200" y1="77" x2="200" y2="110" stroke="#38bdf8" stroke-width="2.5"/>

        <rect x="45" y="175" width="65" height="35" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="77" y="197" fill="#a7f3d0" font-size="9" text-anchor="middle">Bilgisayar 1</text>

        <rect x="130" y="175" width="65" height="35" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="162" y="197" fill="#a7f3d0" font-size="9" text-anchor="middle">Bilgisayar 2</text>

        <rect x="215" y="175" width="65" height="35" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="247" y="197" fill="#a7f3d0" font-size="9" text-anchor="middle">Bilgisayar 3</text>

        <rect x="300" y="175" width="55" height="35" rx="6" fill="#854d0e" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="327" y="197" fill="#fde68a" font-size="9" text-anchor="middle">Yazıcı</text>

        <path d="M175 140 L77 175" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M190 140 L162 175" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M210 140 L247 175" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M225 140 L327 175" stroke="#94a3b8" stroke-width="1.5"/>
      </svg>`,
      caption: "Yerel Ağda (LAN) Switch Üzerinden Paylaşılan Bilgisayarlar ve Yazıcı"
    },
    workshop: {
      title: "Atölye: 'Kendi IP Adresini Bul'",
      subtitle: "Bilgisayarımızın yerel ağdaki kimlik numarasını öğreniyoruz.",
      steps: [
        { title: "Komut Ekranını Aç", desc: "Başlat menüsünden Terminal / Uçbirim veya Komut İstemi'ni açın." },
        { title: "Komutu Yaz", desc: "Windows'ta 'ipconfig', Pardus'ta 'ip a' veya 'hostname -I' komutunu yazıp Enter'a basın." },
        { title: "IP'yi İncele", desc: "192.168... ile başlayan numarayı bulun ve sıra arkadaşınızınkiyle karşılaştırın." }
      ],
      criteria: [
        "LAN ve WAN ağ türleri arasındaki farkı ayırt edebilme",
        "Modem ve Switch cihazlarının temel görevlerini bilme",
        "Ağa bağlı her cihazın bir IP adresi olduğunu kavrama"
      ]
    },
    tips: {
      safetyTitle: "Ağ Güvenliği Uyarısı",
      safetyRules: [
        { bold: "Şifresiz Açık Wi-Fi Ağlarına Dikkat", text: "Kafelerde veya parklarda şifresiz halka açık Wi-Fi ağlarına bağlandığınızda bankacılık işlemi yapmayın; verileriniz çalınabilir." }
      ],
      myths: [
        { wrong: "İnternet kablosuzdur, dünyadaki tüm veriler sadece uydularla havadan gider.", correct: "Dünya internet trafiğinin %99'u kıtalar ve okyanusların dibine döşenmiş devasa fiber optik denizaltı kablolarıyla taşınır!" }
      ]
    },
    quiz: {
      question: "Bir okulun bilişim laboratuvarındaki veya tek bir binadaki bilgisayarların birbirine bağlanmasıyla oluşan küçük çaplı ağ türüne ne ad verilir?",
      options: [
        { text: "A) WAN (Geniş Alan Ağı)", isCorrect: false },
        { text: "B) LAN (Yerel Alan Ağı)", isCorrect: true },
        { text: "C) Bluetooth", isCorrect: false },
        { text: "D) Uydu Ağı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> <strong>LAN (Local Area Network - Yerel Alan Ağı)</strong>, ev veya okul gibi sınırlı alanlardaki cihazları birbirine bağlar."
    },
    summaryRules: [
      { bold: "Ağ = Paylaşım", text: "Dosya, internet ve yazıcı paylaşılır." },
      { bold: "LAN Küçük, WAN Küresel", text: "İnternet en büyük WAN'dır." },
      { bold: "IP = Dijital Adres", text: "Her cihazın benzersiz bir numarası vardır." }
    ],
    homework: "Evinizdeki internet modeminin üzerinde hangi ışıkların (Power, DSL/İnternet, WLAN vb.) yandığını inceleyip defterinize çizin.",
    nextWeekPreview: "1. Dönem 2. Sınav Tekrarı & Uygulamalı Soru Maratonu!"
  },

  // 17. HAFTA
  {
    week: 17,
    date: "04 - 10 Ocak",
    hours: "2 Saat",
    unit: "SINAV HAFTASI & 2. ve 3. Tema Tekrarı",
    unitBadge: "2. Sınav Tekrarı",
    unitTheme: "tema-sinav",
    title: "1. Dönem 2. Sınav Tekrarı & Soru Maratonu",
    subtitle: "Dosya Uzantıları, ZIP, Word/Yazı Biçimlendirme, Sunum Kuralları ve Ağlar",
    outcomeCode: "BTY.5.2.1 - BTY.5.3.1",
    targetSkill: "Sınav Başarısı & Kapsamlı Tekrar",
    curiosityQuestion: "Dönemin 2. sınavında tüm soruları doğru yanıtlayıp bilişim karnenize 100 yazdırmaya hazır mısınız?",
    roadmap: [
      { title: "Dosya ve Klasörler", desc: ".docx, .mp3, .jpg uzantıları ve ZIP sıkıştırma." },
      { title: "Kelime İşlemci", desc: "Font ayarları, hizalama, Ctrl kısayolları ve tablo yapısı." },
      { title: "Etkili Sunum", desc: "6x6 kuralı, renk kontrastı ve geçiş animasyonları." },
      { title: "Ağ Teknolojileri", desc: "LAN, WAN, Modem, IP adresi ve kablo standartları." }
    ],
    section1: {
      title: "2. Sınavda Çıkacak Kilit Noktalar",
      subtitle: "Tüm 2. ve 3. temanın sınav özeti.",
      layout: "cards-2",
      cards: [
        {
          title: "Yazılım ve Ürün Tasarımı",
          icon: "📄",
          desc: "Ofis ve dosya soruları:",
          items: [
            { bold: "Dosya Uzantısı", text: "Dosyanın türünü belirler (.mp4 = video, .docx = metin)." },
            { bold: "Ctrl Kısayolları", text: "Ctrl+C Kopyala, Ctrl+V Yapıştır, Ctrl+Z Geri Al, Ctrl+S Kaydet." },
            { bold: "Tablo Düzeni", text: "Yatay çizgiler Satır, dikey çizgiler Sütun, kutucuklar Hücredir." },
            { bold: "Sunum Kuralı", text: "6x6 kuralı az yazı ve yüksek kontrast gerektirir." }
          ]
        },
        {
          title: "Ağ ve İletişim",
          icon: "🌐",
          desc: "Ağ soruları:",
          items: [
            { bold: "LAN", text: "Okul içi yerel ağdır." },
            { bold: "WAN", text: "Şehirler arası ve küresel internettir." },
            { bold: "Modem", text: "İnternet sinyalini dönüştürür." },
            { bold: "IP Adresi", text: "Ağdaki cihazların kimlik numarasıdır." }
          ]
        }
      ]
    },
    section2: {
      title: "Karıştırılan Kavramlar: Dikkat Edelim!",
      subtitle: "Sınavda en çok puan kaybettiren küçük tuzaklar.",
      layout: "cards-2",
      cards: [
        {
          title: "Kısayol Tuzakları",
          icon: "⚠️",
          desc: "Hangi tuş ne işe yarar?",
          items: [
            { bold: "Ctrl + X vs Ctrl + C", text: "Ctrl+C kopyalar (orijinali yerinde kalır); Ctrl+X keser (orijinalini silip taşır)." },
            { bold: "Enter vs Space", text: "Enter alt satıra geçer; Space sadece bir harflik boşluk bırakır." }
          ]
        },
        {
          title: "Ağ Cihazı Tuzakları",
          icon: "🔌",
          desc: "Modem mi, Switch mi?",
          items: [
            { bold: "Modem", text: "Dışarıdan gelen internet hattına bağlanır." },
            { bold: "Switch", text: "Sadece sınıftaki bilgisayarları birbirine bağlar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'Bilişim Bilgi Çarkı'",
      subtitle: "Çarkıfelek sorularıyla sınıfça sınav provası yapıyoruz.",
      steps: [
        { title: "Çarkı Çevir", desc: "Tahtada dönen kategorilerden (Uzantılar, Kısayollar, Ağlar, Sunum) bir soru seçin." },
        { title: "60 Saniyede Yanıtla", desc: "Soruya gerekçesiyle birlikte doğru yanıt vererek puan kazanın." },
        { title: "Eksikleri Tamamla", desc: "Takıldığınız konuları öğretmeninizle birlikte hemen tekrar edin." }
      ],
      criteria: [
        "Soru köklerini doğru analiz edebilme",
        "Dosya uzantıları ve kısayolları eksiksiz bilme",
        "Sınavda zamanı verimli kullanabilme"
      ]
    },
    tips: {
      safetyTitle: "Sınav Günü Hatırlatması",
      safetyRules: [
        { bold: "Derin Bir Nefes Alın", text: "Tüm konuları öğrendiniz ve laboratuvarda uyguladınız; başarı sizinle olacaktır." }
      ],
      myths: [
        { wrong: "Sınavda hızlı bitiren daha yüksek not alır.", correct: "Hızlı bitirmek değil, soruları dikkatle okuyup kontrol edenler tam puan alır." }
      ]
    },
    quiz: {
      question: "Sunum hazırlarken izleyicilerin sıkılmaması ve slaytların ferah kalması için uygulanan '6x6 kuralı' ne anlama gelir?",
      options: [
        { text: "A) Sunumun 6 saat sürmesi", isCorrect: false },
        { text: "B) Bir slaytta en fazla 6 satır ve her satırda en fazla 6 kelime olması", isCorrect: true },
        { text: "C) Sunumda 6 farklı renk kullanılması", isCorrect: false },
        { text: "D) 6 gün boyunca prova yapılması", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 6x6 kuralı slaytların okunabilir kalmasını sağlayan en önemli tasarım kuralıdır."
    },
    summaryRules: [
      { bold: "Tekrar Tamam", text: "Tüm üniteler pekiştirildi." },
      { bold: "Kısayollar Hazır", text: "Ctrl+C, Ctrl+V, Ctrl+Z." },
      { bold: "Başarılar!", text: "Sınavda tüm öğrencilerimize başarılar dileriz." }
    ],
    homework: "Son sınav notlarınızı gözden geçirin ve dinlenin.",
    nextWeekPreview: "İnternette İleri Düzey Arama & Güvenilir Bilgiye Ulaşma Taktikleri!"
  },

  // 18. HAFTA
  {
    week: 18,
    date: "11 - 17 Ocak",
    hours: "2 Saat",
    unit: "3. Tema: Bilgisayar Ağları ve İletişim",
    unitBadge: "3. Tema",
    unitTheme: "tema-3",
    title: "İnternette Arama & Güvenilir Kaynak Analizi",
    subtitle: "Arama Motoru Operatörleri (Tırnak, Site, Filetype) ve Sahte Haberleri (Fake News) Ayırt Etme",
    outcomeCode: "BTY.5.3.2",
    targetSkill: "Eleştirel Düşünme & Bilgi Doğrulama",
    curiosityQuestion: "İnternette aradığınız bir ödev konusunda 10 milyon sonuç çıkarken, tam aradığınız cümleyi 2 saniyede nasıl bulursunuz?",
    roadmap: [
      { title: "Arama Motoru Nedir?", desc: "Google, Bing, Yaani gibi interneti tarayan örümcek yazılımlar." },
      { title: "Sihirli Arama İpuçları", desc: "Tırnak işareti (\"...\"), eksi işareti (-), site: ve filetype: operatörleri." },
      { title: "Sahte Haberler (Fake News)", desc: "İnternetteki her bilgi doğru mudur? Bilgi kirliliği ve tık tuzağı (Clickbait)." },
      { title: "Güvenilir Uzantılar", desc: ".gov.tr (Devlet), .edu.tr (Üniversite), .org (Kuruluşlar)." }
    ],
    section1: {
      title: "Arama Motorunun Gizli Güçleri: Arama Operatörleri",
      subtitle: "Milyonlarca çöp sonucun arasından doğru cevaba roket hızıyla ulaşın.",
      layout: "split-visual",
      card: {
        title: "Profesyonel Arama Teknikleri",
        icon: "🔍",
        desc: "Arama kutusuna yazılacak sihirli komutlar:",
        items: [
          { bold: "Tırnak İçi Arama (\"...\")", text: "\"Fatih Sultan Mehmet\" yazarsanız kelimeleri ayırmadan tam bu sırayla arar." },
          { bold: "Eksi İşareti (-)", text: "Sonuçtan istenmeyen kelimeyi çıkarır (Örn: 'Jaguar -araba' yazarsanız sadece hayvan olan jaguar gelir)." },
          { bold: "Site Filtresi (site:)", text: "Sadece belirli sitede arar (Örn: 'deprem site:gov.tr')." },
          { bold: "Dosya Türü (filetype:)", text: "Doğrudan belge arar (Örn: 'bilişim notları filetype:pdf')." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        
        <rect x="40" y="45" width="320" height="40" rx="20" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="65" y="70" fill="#94a3b8" font-size="14">🔍</text>
        <text x="85" y="70" fill="#f8fafc" font-size="12" font-family="monospace">"Milli Mücadele" site:edu.tr</text>

        <rect x="50" y="105" width="300" height="45" rx="8" fill="#065f46" stroke="#34d399" stroke-width="1"/>
        <text x="65" y="125" fill="#ffffff" font-size="11" font-weight="bold">✓ Üniversite Akademik Kaynağı (.edu.tr)</text>
        <text x="65" y="140" fill="#a7f3d0" font-size="9">Güvenilir, bilimsel ve doğrulanmış makale</text>

        <rect x="50" y="160" width="300" height="45" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <text x="65" y="180" fill="#94a3b8" font-size="11">Rastgele Blog Yazısı (Doğrulanmamış)</text>
        <text x="65" y="195" fill="#64748b" font-size="9">Filtre sayesinde elendi ve engellendi!</text>
      </svg>`,
      caption: "Arama Operatörleri ile Doğru ve Güvenilir Kaynağa Ulaşma"
    },
    section2: {
      title: "İnternette Bilgi Dedektifliği: 5N1K Kuralı",
      subtitle: "Gördüğünüz her habere ve videoya hemen inanmayın!",
      layout: "cards-2",
      cards: [
        {
          title: "Sahte Haber Nasıl Anlaşılır?",
          icon: "🕵️",
          desc: "Tuzaklara düşmemek için kontrol listesi:",
          items: [
            { bold: "Yazarı Belli mi?", text: "Haberi kim yazmış, uzmanlığı var mı?" },
            { bold: "Tarihi Güncel mi?", text: "5 yıl önceki bir haber yeniymiş gibi paylaşılmış olabilir." },
            { bold: "Başka Kaynaklar Yazıyor mu?", text: "Resmi haber ajanslarında veya MEB sitesinde var mı?" },
            { bold: "Abartılı Başlıklar (Clickbait)", text: "'İnanamayacaksınız!', 'Gözlerinize inanamayacaksınız!' gibi başlıklardan uzak durun." }
          ]
        },
        {
          title: "Güvenilir Web Uzantıları",
          icon: "🛡️",
          desc: "Devlet ve kurum onaylı uzantılar:",
          items: [
            { bold: ".gov / .gov.tr", text: "Devlet kurumlarının resmi siteleri (En güvenilir)." },
            { bold: ".edu / .edu.tr", text: "Üniversitelerin ve akademik eğitim kurumlarının siteleri." },
            { bold: ".org / .org.tr", text: "Kızılay, Yeşilay, TEMA gibi sivil toplum kuruluşları." },
            { bold: ".com / .net", text: "Ticari sitelerdir, her bilgiyi doğrulamak gerekir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'İnternet Dedektifi'",
      subtitle: "Verilen konuyu sadece resmi (.gov.tr) kaynaklardan bulup belgeliyoruz.",
      steps: [
        { title: "Konu Belirle", desc: "Örn: 'Türkiye'nin ilk yerli haberleşme uydusu Türksat 6A'." },
        { title: "Filtreli Ara", desc: "Arama çubuğuna: 'Türksat 6A site:gov.tr' yazın." },
        { title: "Resmi Bilgiyi Yaz", desc: "TÜBİTAK veya Ulaştırma Bakanlığı sitesinden fırlatılma tarihini bulup defterinize kaydedin." }
      ],
      criteria: [
        "Arama operatörlerini (tırnak, site) kullanarak nokta atışı arama yapabilme",
        "Güvenilir web sitesi uzantılarını (.gov.tr, .edu.tr) ayırt edebilme",
        "İnternetteki bilgileri eleştirel gözle sorgulama becerisi"
      ]
    },
    tips: {
      safetyTitle: "Bilgi Kirliliğinden Korunma",
      safetyRules: [
        { bold: "Teyit Etmeden Paylaşma!", text: "WhatsApp veya sosyal medyada 'Hemen herkese iletin' denen şüpheli mesajları asla başkalarına yaymayın." }
      ],
      myths: [
        { wrong: "Google'da ilk sırada çıkan her web sitesi %100 doğru bilgi verir.", correct: "İlk sıradaki siteler arama motoru optimizasyonu (SEO) veya reklam yapmış olabilir; bilginin doğruluğunu resmi kaynaklardan kontrol etmek şarttır." }
      ]
    },
    quiz: {
      question: "İnternette arama yaparken sadece devlet kurumlarının resmi web sitelerindeki (Örn: MEB, Sağlık Bakanlığı) sonuçları görmek için arama kelimesinin sonuna hangi ifade eklenmelidir?",
      options: [
        { text: "A) site:com", isCorrect: false },
        { text: "B) site:gov.tr", isCorrect: true },
        { text: "C) filetype:mp3", isCorrect: false },
        { text: "D) search:devlet", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> <strong>site:gov.tr</strong> filtresi, arama motoruna sadece Türkiye Cumhuriyeti resmi devlet sitelerindeki sonuçları getirmesini emreder."
    },
    summaryRules: [
      { bold: "Tırnak İçi Kesinliktir", text: "\"Tam İfade\" arayın." },
      { bold: ".gov.tr ve .edu.tr", text: "En güvenilir bilgi kaynaklarıdır." },
      { bold: "Sorgulayan Zihin", text: "Her habere hemen inanmayın, araştırın." }
    ],
    homework: "Sevdiğiniz bir bilim insanı hakkında 'site:edu.tr' filtresi kullanarak bir üniversite makalesinden 2 cümlelik bilgi bulun.",
    nextWeekPreview: "1. Dönem Sonu Değerlendirmesi & Dijital Portfolyo Başarı Kutlaması!"
  },

  // 19. HAFTA (1. DÖNEM SONU)
  {
    week: 19,
    date: "18 - 24 Ocak",
    hours: "2 Saat",
    unit: "1. Dönem Sonu & Değerlendirme",
    unitBadge: "1. Dönem Kapanış",
    unitTheme: "tema-1",
    title: "1. Dönem Sonu & Dijital Portfolyo Kutlaması",
    subtitle: "19 Haftalık Bilişim Serüvenimizin Özeti, Üretilen Dijital Eserler ve Karne Sevinci",
    outcomeCode: "1. Dönem Değerlendirme",
    targetSkill: "Öz Değerlendirme & Dijital Portfolyo Paylaşımı",
    curiosityQuestion: "Eylül ayında bu sınıfa ilk girdiğiniz gün ile bugün arasındaki farkı görebiliyor musunuz? Artık bilgisayarı sadece kullanan değil, onu yöneten birer bilişimcisiniz!",
    roadmap: [
      { title: "1. Dönem Yolculuğu", desc: "Donanım, işletim sistemleri, ofis programları ve ağ teknolojileri." },
      { title: "Dijital Portfolyo Sergisi", desc: "Dönem boyunca hazırladığımız Word belgeleri, tablolar ve sunumlar." },
      { title: "Bilişim Başarı Rozetleri", desc: "'En Düzenli Dosyacı', 'En Hızlı Kısayolcu', 'En Güvenli Vatandaş'." },
      { title: "2. Dönem Fragmanı", desc: "Şubat ayında başlayacak olan Kodlama, Algoritmalar ve Scratch dünyası!" }
    ],
    section1: {
      title: "1. Dönemde Neler Başardık?",
      subtitle: "19 haftalık yoğun ve eğlenceli bilişim maratonumuzun gurur tablosu.",
      layout: "cards-4",
      cards: [
        {
          title: "Bilişim & Donanım",
          icon: "🖥️",
          desc: "Anakart, CPU, RAM, Sabit Disk ve Giriş/Çıkış birimlerini ustaca öğrendik."
        },
        {
          title: "Sistem & Dosya",
          icon: "📁",
          desc: "Pardus'u tanıdık, uzantıların (.docx, .mp3) gizemini çözdük, ZIP yaptık."
        },
        {
          title: "Kelime & Sunum",
          icon: "📝",
          desc: "Tablolu ders programları, 6x6 kuralına uygun etkili sunumlar tasarladık."
        },
        {
          title: "Ağlar & Güvenlik",
          icon: "🌐",
          desc: "İnternetin nasıl çalıştığını, LAN/WAN farkını ve güvenli aramayı keşfettik."
        }
      ]
    },
    section2: {
      title: "2. Dönem Bizi Neler Bekliyor?",
      subtitle: "Şubat ayında başlayacak olan kodlama ve yazılım geliştirme heyecanı.",
      layout: "cards-2",
      cards: [
        {
          title: "Problem Çözme ve Algoritmalar",
          icon: "🧩",
          desc: "Yazılımcı gibi düşünme sanatı:",
          items: [
            { bold: "Algoritmik Mantık", text: "Problemleri parçalara ayırma ve adım adım çözüm planı." },
            { bold: "Akış Şemaları", text: "Başla, işlem, karar ve bitir simgeleriyle görsel haritalar." }
          ]
        },
        {
          title: "Scratch ile Blok Tabanlı Kodlama",
          icon: "🐱",
          desc: "Kendi oyunlarımızı ve animasyonlarımızı kodlayacağız:",
          items: [
            { bold: "Karakterleri Canlandırma", text: "Hareket, konuşma ve ses efektleri." },
            { bold: "Oyun Tasarımı", text: "Labirent oyunları, skor sayaçları ve etkileşimli maceralar." }
          ]
        }
      ]
    },
    workshop: {
      title: "Kapanış Atölyesi: 'Dijital Portfolyo Paylaşımı'",
      subtitle: "Dönem boyunca bilgisayarımızda yaptığımız en iyi çalışmayı sınıfa sunuyoruz.",
      steps: [
        { title: "En İyi Dosyanı Seç", desc: "Ders programı tablonuzu veya hazırladığınız 3 slaytlık sunumu açın." },
        { title: "Akıllı Tahtada Göster", desc: "Tahtaya çıkıp 'Bu çalışmamda şu yazı tipini ve şu tabloyu kullandım' diyerek tanıtın." },
        { title: "Alkış ve Tebrik", desc: "Dönemi başarıyla tamamlayan tüm sınıf arkadaşlarımızı coşkuyla alkışlayalım!" }
      ],
      criteria: [
        "1. Dönem boyunca üretilen dijital ürünleri sunabilme",
        "Gelişime açık yönlerini değerlendirebilme",
        "Tatil sürecinde siber güvenlik ve teknoloji dengesini koruma"
      ]
    },
    tips: {
      safetyTitle: "Yarıyıl Tatili Mesajı",
      safetyRules: [
        { bold: "Tebrikler Genç Bilişimciler!", text: "Bir dönem boyunca gösterdiğiniz gayret ve merak için teşekkür ederiz. Karnelerinizdeki tüm başarılar geleceğinizin teminatıdır." }
      ],
      myths: [
        { wrong: "Kodlama öğrenmek çok zordur, sadece üniversite mezunları yapabilir.", correct: "2. dönemde göreceksiniz ki algoritma ve blok tabanlı kodlama lego oynamak kadar eğlenceli ve kolaydır!" }
      ]
    },
    quiz: {
      question: "1. Dönem boyunca öğrendiğimiz tüm dijital çalışmalarımızı (yazılar, tablolar, sunumlar) düzenli bir şekilde saklayıp sergilediğimiz dijital arşive ne ad verilir?",
      options: [
        { text: "A) Dijital Portfolyo (Gelişim Dosyası)", isCorrect: true },
        { text: "B) Geri Dönüşüm Kutusu", isCorrect: false },
        { text: "C) Virüs Programı", isCorrect: false },
        { text: "D) Modem Işığı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> <strong>Dijital Portfolyo</strong>, bir öğrencinin dönem boyunca ürettiği tüm dijital çalışmaları sergileyen gurur arşivdir."
    },
    summaryRules: [
      { bold: "1. Dönem Tamamlandı", text: "Harika bir temel inşa ettik." },
      { bold: "İyi Tatiller!", text: "Bol bol dinlenin ve kitap okuyun." },
      { bold: "2. Dönem Kodlama Geliyor", text: "Şubat'ta Scratch ile kodlamaya başlıyoruz!" }
    ],
    homework: "Yarıyıl tatilinde zihninizi dinlendirin; ailenizle kaliteli zaman geçirin.",
    nextWeekPreview: "Sömestr Tatili 1. Hafta: Kodlama ve Algoritma Macera Bülteni!"
  }
];
