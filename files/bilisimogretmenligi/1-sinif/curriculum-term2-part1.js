/**
 * 1. Sınıf Serbest Etkinlikler - 2. Dönem 1. Bölüm (Hafta 20 - 31)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART1_GRADE1 = [
  // 20. HAFTA - SÖMESTR 1
  {
    week: 20,
    date: "25 - 31 Ocak",
    hours: "Tatil Haftası",
    unit: "Yarıyıl Tatili 1. Hafta Macera Bülteni",
    unitBadge: "20. Tema: Sömestr Tatili",
    unitTheme: "tema-4",
    title: "20. Hafta: Yarıyıl Tatili 1. Hafta Macera Bülteni",
    subtitle: "Kış Oyunları, Aileyle Kitap Okuma Saati, Kardan Adam ve Dinlenme",
    outcomeCode: "Sömestr 1. Hafta Bülteni",
    targetSkill: "Tatil Zamanını Verimli ve Sağlıklı Değerlendirme, Aile İçi İletişim",
    curiosityQuestion: "Kar yağdığında havuçtan burunlu, kömürden gözlü bir kardan adam yaparken ona neden atkı sararız?",
    roadmap: [
      { title: "Kış Oyunları ve Neşe", desc: "Kartopu oynama, kardan adam yapma ve temiz kış havası alma." },
      { title: "Kitap Kurdu Saati", desc: "Her gün 15 dakika resimli masal kitabı okuma veya büyüklere dinletme." },
      { title: "Akıl ve Kutu Oyunları", desc: "Evde tablet yerine ailece mangala, eşleştirme veya domino oynama." },
      { title: "Kuşlara Yem Bırakma", desc: "Kışın yiyecek bulamayan sokak hayvanları için pencereye yem koyma." }
    ],
    section1: {
      title: "Kış Masalı: Doğanın Beyaz Örtüsü",
      subtitle: "Kar taneleri gökyüzünden sessizce iner, çocuklar için oyun bahçesi kurar.",
      layout: "split-visual",
      card: {
        title: "Evde 3 Tatil Görevi",
        icon: "⛄❄️",
        desc: "Sömestrde zinde kalma rehberi:",
        items: [
          { bold: "1. Kardan Adamını Yap", text: "Bahçede veya balkonda kardan adam yapıp havuç ve zeytinle süsle." },
          { bold: "2. Masalını Resmet", text: "Okuduğun masalın en heyecanlı sahnesini resim defterine çiz." },
          { bold: "3. Sevgiyle Dinlen", text: "Erken yat, erken kalk; sütünü ve kış meyvelerini ihmal etme." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#7dd3fc" text-anchor="middle">SÖMESTR TATİLİ: KIŞ MASALI & OYUN</text>

        <!-- Kardan Adam (Sol) -->
        <circle cx="160" cy="180" r="40" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="160" cy="125" r="28" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <circle cx="152" cy="120" r="3" fill="#0f172a"/>
        <circle cx="168" cy="120" r="3" fill="#0f172a"/>
        <polygon points="160,126 175,129 160,132" fill="#ea580c"/>
        <rect x="145" y="92" width="30" height="15" fill="#dc2626" rx="2"/>
        <rect x="140" y="105" width="40" height="5" fill="#dc2626" rx="2"/>
        <text x="160" y="215" font-size="10" font-weight="bold" fill="#e0f2fe" text-anchor="middle">Kardan Dostumuz</text>

        <!-- Tatil Kitap Köşesi (Sağ) -->
        <rect x="290" y="80" width="180" height="135" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="380" y="120" font-size="32" text-anchor="middle">📖☕🍊</text>
        <text x="380" y="150" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Sıcak Masal Saati</text>
        <text x="380" y="170" font-size="9" fill="#cbd5e1" text-anchor="middle">Her gün 1 masal oku</text>
        <text x="380" y="190" font-size="9" fill="#cbd5e1" text-anchor="middle">Hayal gücünü besle</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Tatil hem dinlenme hem de yeni keşifler yapma zamanıdır!</text>
      </svg>`
    },
    section2: {
      title: "Ekrandan Uzak, Aileyle Yakın",
      subtitle: "Birlikte geçirilen anlar en değerli anılardır.",
      cards: [
        {
          badge: "Oyun",
          title: "İsim - Şehir Benzeri",
          desc: "Öğrendiğimiz harflerle başlayan hayvan ve meyve isimlerini bulma oyunu."
        },
        {
          badge: "Doğa",
          title: "Kuş Yemliği",
          desc: "Süt kutusunu kesip içine buğday ve ekmek koyarak balkona asma."
        },
        {
          badge: "Sağlık",
          title: "C Vitamini",
          desc: "Grip olmamak için her gün portakal, kivi veya mandalina tüketme."
        }
      ]
    },
    workshop: {
      title: "Tatil Projesi: 'Kendi Masal Kitabımı Yapıyorum'",
      desc: "3 yaprak kâğıdı ortadan katlayarak zımbala; kahramanı bir kutup ayısı olan resimli minik kitap yap.",
      steps: [
        { title: "Kitapçık Katla", desc: "A4 kâğıtlarını ikiye katlayıp kapak hazırla." },
        { title: "Resim Çiz", desc: "Her sayfaya kış konulu bir resim çizip altına bir cümle yaz." },
        { title: "Ailene Oku", desc: "Akşam tüm aileye kendi hazırladığın masalı gururla seslendir." }
      ],
      criteria: [
        "Tatili ekrandan uzak ve yaratıcı etkinliklerle geçirebilme",
        "Kitap okuma alışkanlığını tatilde de sürdürebilme",
        "Sokak hayvanlarına karşı merhamet ve duyarlılık gösterme"
      ]
    },
    tips: {
      safetyTitle: "Kış Tatili Sağlığı",
      safetyRules: [
        { bold: "Sıkı Giyin", text: "Dışarı çıkarken üşütmemek için mont, atkı ve eldivenlerini mutlaka tak; ıslanan eldivenlerini hemen değiştir." }
      ],
      myths: [
        { wrong: "Tatil boyunca hiç kitap açmamak gerekir.", correct: "Hayır! Her gün okunan kısa bir masal okuma hızımızı korur ve bizi 2. döneme hazır tutar." }
      ]
    },
    quiz: {
      question: "Kışın dondurucu soğuklarda sokaktaki kuşlar ve sevimli hayvanlar için ne yapabiliriz?",
      options: [
        { text: "A) Penceremizin önüne veya bahçeye su ve buğday/ekmek kırıntısı koyabiliriz 🐦🥖", isCorrect: true },
        { text: "B) Onları kovalamak", isCorrect: false },
        { text: "C) Pencereleri tamamen kapatıp unutmak", isCorrect: false },
        { text: "D) Taş atmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Bravo, Doğru Cevap: A!</strong> Kar altında kalan minik kuşlara <strong>bir avuç yem ve ılık su vermek</strong> harika bir iyiliktir!"
    },
    summaryRules: [
      { bold: "İyi Dinlen", text: "Oyun oyna, temiz hava al." },
      { bold: "Kitap Oku", text: "Her gün bir masalla hayal kur." },
      { bold: "Tatil Devam Ediyor!", text: "Önümüzdeki hafta sömestr 2. hafta macera bülteniyle tatilimizi sürdürüyoruz!" }
    ],
    homework: "Kendi hazırladığınız minik masal kitabını tatil dönüşü öğretmenine göstermek için çantana koy.",
    nextWeekPreview: "Sömestr Tatili 2. Hafta Macera Bülteni (2. Döneme Hazırlık, Zeka Oyunları ve Düzen)!"
  },

  // 21. HAFTA - SÖMESTR 2
  {
    week: 21,
    date: "01 - 07 Şubat",
    hours: "Tatil Haftası",
    unit: "Yarıyıl Tatili 2. Hafta Macera Bülteni",
    unitBadge: "21. Tema: Sömestr Tatili",
    unitTheme: "tema-4",
    title: "21. Hafta: Yarıyıl Tatili 2. Hafta Macera Bülteni",
    subtitle: "2. Döneme Hazırlık, Çanta Düzenleme, El Becerileri ve Heyecan",
    outcomeCode: "Sömestr 2. Hafta Bülteni",
    targetSkill: "Öz Bakım, Okul Eşyalarını Hazırlama ve 2. Döneme Motivasyon",
    curiosityQuestion: "Tatil biterken okul çantamızı ve boya kalemlerimizi hazırlamak okula başlama heyecanını neden ikiye katlar?",
    roadmap: [
      { title: "Çanta ve Kalemlik Bakımı", desc: "Kırılan kalemleri açma, silgiyi temizleme ve defterleri kontrol etme." },
      { title: "Zeka ve Mantık Çizgileri", desc: "Noktaları birleştirerek resim tamamlama ve fark bulma oyunları." },
      { title: "Okul Arkadaşlarımı Özledim", desc: "Sınıf arkadaşlarımızla yeniden buluşacağımız günü sevgiyle hayal etme." },
      { title: "Erken Uyanma Provası", desc: "Okul saatine uyum sağlamak için tatilin son günlerinde erken yatıp kalkma." }
    ],
    section1: {
      title: "Okula Dönüş Heyecanı: Yeni Dönem, Yeni Başarılar",
      subtitle: "Dinlendik, güçlendik; şimdi ikinci dönemin güzelliklerini keşfetmeye hazırız.",
      layout: "split-visual",
      card: {
        title: "2. Dönem Çanta Kontrol Listesi",
        icon: "🎒✏️",
        desc: "Pazartesi için çantamızda:",
        items: [
          { bold: "1. Açılmış Kurşun Kalemler", text: "Uçları hazır 3 adet kurşun kalem ve kırmızı başlık kalemi." },
          { bold: "2. Temiz Defterler", text: "Sayfaları yıpranmamış, kenar süsleri tamamlanmış yazı defterleri." },
          { bold: "3. Beslenme ve Su Matarası", text: "Temiz yıkanmış su matarası ve beslenme çantası." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#ec4899" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#f472b6" text-anchor="middle">2. DÖNEME HAZIRLIK ÇANTASI</text>

        <!-- Sırt Çantası Görseli -->
        <g transform="translate(180, 75)">
          <rect x="30" y="30" width="120" height="130" rx="20" fill="#ec4899" stroke="#be185d" stroke-width="3"/>
          <rect x="45" y="80" width="90" height="60" rx="10" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/>
          <path d="M 60 30 C 60 10, 120 10, 120 30" fill="none" stroke="#be185d" stroke-width="4"/>
          <circle cx="90" cy="110" r="10" fill="#f43f5e"/>
          <text x="90" y="114" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">★</text>
        </g>

        <!-- Yan Rozetler -->
        <text x="90" y="120" font-size="32" text-anchor="middle">✏️</text>
        <text x="90" y="145" font-size="10" font-weight="bold" fill="#fbcfe8" text-anchor="middle">Kalemler Açık</text>

        <text x="90" y="185" font-size="32" text-anchor="middle">📖</text>
        <text x="90" y="210" font-size="10" font-weight="bold" fill="#fbcfe8" text-anchor="middle">Defterler Temiz</text>

        <text x="440" y="120" font-size="32" text-anchor="middle">💧</text>
        <text x="440" y="145" font-size="10" font-weight="bold" fill="#fbcfe8" text-anchor="middle">Matara Dolu</text>

        <text x="440" y="185" font-size="32" text-anchor="middle">🍎</text>
        <text x="440" y="210" font-size="10" font-weight="bold" fill="#fbcfe8" text-anchor="middle">Meyvemiz Hazır</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#f472b6" text-anchor="middle">Düzenli çanta, okulda başarı ve huzur demektir!</text>
      </svg>`
    },
    section2: {
      title: "Tatil Biterken Son Hazırlıklar",
      subtitle: "Uyku düzenimizi ayarlıyor, pazartesi gününe gülümseyerek hazırlanıyoruz.",
      cards: [
        {
          badge: "Uyku",
          title: "Erken Yatış",
          desc: "Pazar akşamı erkenden uyuyup sabah güneşle birlikte dinç uyanma."
        },
        {
          badge: "Eşyalar",
          title: "Kıyafetini Hazırla",
          desc: "Okul formasını, çorabını ve ayakkabını akşamdan sandalyene koyma."
        },
        {
          badge: "Motivasyon",
          title: "Gülümse!",
          desc: "Öğretmenine ve arkadaşlarına kavuşacağın için sevinçle okula adım atma."
        }
      ]
    },
    workshop: {
      title: "Evde Uygulama: 'Pazar Akşamı Çanta Merasimi'",
      desc: "Öğrenci ailesiyle birlikte kalemliğini döker; kırıkları açar, çantasını eksiksiz hazırlar.",
      steps: [
        { title: "Kalemlik Temizliği", desc: "Silgi tozlarını ve kalem talaşlarını çöp kutusuna dökme." },
        { title: "Defter Sayımı", desc: "Pazartesi ders programına göre gerekli kitap ve defterleri koyma." },
        { title: "Alarmı Kur", desc: "Sabah geç kalmamak için saati ayarlayıp iyi geceler dileme." }
      ],
      criteria: [
        "Okul araç gereçlerinin bakımını kendi başına yapabilme",
        "2. döneme karşı olumlu tutum ve yüksek motivasyon sergileme",
        "Uyku ve beslenme düzenini okul saatlerine uyumlu hale getirme"
      ]
    },
    tips: {
      safetyTitle: "Okula Uyum Rehberi",
      safetyRules: [
        { bold: "Ağır Çanta Taşıma", text: "Çantana sadece o günün derslerine ait araç gereçleri koy; sırtını korumak için iki askıyı birden omuzlarına tak." }
      ],
      myths: [
        { wrong: "Okul açılınca tatil bitti diye üzülmeliyiz.", correct: "Hayır! Okul arkadaşları görmek, yeni oyunlar oynamak ve öğrenmek en büyük maceradır." }
      ]
    },
    quiz: {
      question: "Tatilin son pazar akşamı okul için yapmamız gereken en doğru hazırlık hangisidir?",
      options: [
        { text: "A) Çantamızı hazırlayıp erken saatte uyumak 🎒⏰", isCorrect: true },
        { text: "B) Gece yarısına kadar tabletle oyun oynamak", isCorrect: false },
        { text: "C) Kalemlerimizi evde bırakıp gitmek", isCorrect: false },
        { text: "D) Sabah geç uyanıp servisi kaçırmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Erken uyumak ve çantamızı akşamdan hazırlamak <strong>okulun ilk gününe zinde ve mutlu başlamamızı sağlar</strong>!"
    },
    summaryRules: [
      { bold: "Çantanı Düzenle", text: "Eşyaların senin sorumluluğundadır." },
      { bold: "Erken Uyu", text: "Sabah neşeyle uyan." },
      { bold: "Yarın Okul Var!", text: "2. döneme neşeli tekerlemeler ve fıkralarla başlıyoruz!" }
    ],
    homework: "Pazar akşamı çantanızı tek başınıza hazırlayıp anne babanıza kontrol ettirin.",
    nextWeekPreview: "22. Hafta: Fıkra Anlatma, Kenar Süsü, 'Pazara Gittim' Tekerlemesi ve Okuma!"
  },

  // 22. HAFTA
  {
    week: 22,
    date: "08 - 14 Şubat",
    hours: "4 Ders Saati",
    unit: "2. Döneme Merhaba, Tekerlemeler ve Kenar Süsü",
    unitBadge: "22. Tema: Neşeli Başlangıç",
    unitTheme: "tema-4",
    title: "22. Hafta: Fıkra, Kenar Süsü, Tekerleme ve Okuma",
    subtitle: "2. Dönem Coşkusu, 'Pazara Gittim Pazar Yok' Tekerlemesi ve Okuma",
    outcomeCode: "SE.1.22 (Tekerleme & El Becerisi)",
    targetSkill: "Tekerlemeyi Ezgi ve Jestlerle Söyleme, Kenar Süsünü Kuralına Göre Çizme, Akıcı Okuma",
    curiosityQuestion: "'Pazara gittim pazar yok, eve geldim annem yok!' Bu komik tekerlemeyi şaşırmadan hızlıca söyleyebilir misin?",
    roadmap: [
      { title: "Tatil Sonrası Buluşma", desc: "Arkadaşlarla sarılma, 2. döneme neşeli fıkralarla gülerek başlama." },
      { title: "'Yok Yok Yok' Tekerlemesi", desc: "Pazara gittim tekerlemesini koro halinde ritim tutarak söyleme." },
      { title: "2. Dönem Kenar Süsü", desc: "Lale ve dalgalı çizgilerle defter kenarlarını bahara hazırlama." },
      { title: "Sesli ve Sessiz Okuma", desc: "Seviyeye uygun tatil ve okul konulu metinleri ses tonunu ayarlayarak okuma." }
    ],
    section1: {
      title: "'Pazara Gittim' Ritmik Tekerlemesi",
      subtitle: "Tekerlemeler dilimizi çözer, kelimeleri dans ettirir.",
      layout: "split-visual",
      card: {
        title: "Tekerlememizin Sözleri",
        icon: "🗣️🧺",
        desc: "Ritimle tekrar edelim:",
        items: [
          { bold: "1. Kıt'a", text: "Pazara gittim pazar yok / Eve geldim annem yok" },
          { bold: "2. Kıt'a", text: "Çorbaya baktım kaşık yok / Dedeme baktım sakalı yok" },
          { bold: "Nakarat", text: "Yok, yok, yok! (Hep birlikte alkışla ritim tutma)" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#86efac" text-anchor="middle">TEKERLEME & KENAR SÜSÜ ATÖLYESİ</text>

        <!-- Tekerleme Sahnesi (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#166534" stroke="#86efac" stroke-width="2"/>
        <text x="155" y="120" font-size="34" text-anchor="middle">🛒🏠🥣</text>
        <text x="155" y="150" font-size="10.5" font-weight="bold" fill="#fef08a" text-anchor="middle">'Pazara Gittim Pazar Yok'</text>
        <text x="155" y="170" font-size="9" fill="#dcfce7" text-anchor="middle">Ritimle alkış tutuyoruz</text>
        <text x="155" y="190" font-size="9" fill="#dcfce7" text-anchor="middle">'Yok, yok, yok!'</text>

        <!-- Lale Kenar Süsü (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <text x="385" y="105" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Örüntü: Lale 🌷 + Dalga 〰️</text>
        <line x1="305" y1="120" x2="465" y2="120" stroke="#16a34a" stroke-width="2"/>
        <text x="325" y="145" font-size="16" text-anchor="middle">🌷</text>
        <text x="355" y="145" font-size="16" text-anchor="middle">〰️</text>
        <text x="385" y="145" font-size="16" text-anchor="middle">🌷</text>
        <text x="415" y="145" font-size="16" text-anchor="middle">〰️</text>
        <text x="445" y="145" font-size="16" text-anchor="middle">🌷</text>
        <line x1="305" y1="165" x2="465" y2="165" stroke="#16a34a" stroke-width="2"/>
        <text x="385" y="195" font-size="9" font-weight="bold" fill="#475569" text-anchor="middle">Defter Kenar Çizgisi</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#86efac" text-anchor="middle">Tekerlemeler dili açar, kenar süsü defteri şenlendirir!</text>
      </svg>`
    },
    section2: {
      title: "Okuma Çalışması ve Fıkra Eğlencesi",
      subtitle: "Sayfalardaki harfler kelimeye, kelimeler sıcacık hikâyelere dönüşür.",
      cards: [
        {
          badge: "Fıkra",
          title: "Gülümseyen Sınıf",
          desc: "Öğrencilerin bildikleri kısa fıkraları mimiklerle arkadaşlarına anlatması."
        },
        {
          badge: "Okuma",
          title: "İşitilebilir Ses",
          desc: "Tüm sınıfın duyacağı ama bağırmayan doğal bir tonla paragraf okuma."
        },
        {
          badge: "El Becerisi",
          title: "Panoya Asma",
          desc: "En düzenli kenar süsü yapan öğrencilerin defterlerini sınıf panosunda sergileme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Tekerleme Korosu ve Kenar Süsü Sergisi'",
      desc: "Sınıf iki gruba ayrılır; biri tekerlemenin ilk dizesini, diğeri 'yok yok yok' nakaratını söyler.",
      steps: [
        { title: "Ritim Tut", desc: "Masaya parmak uçlarıyla hafifçe vurarak tekerlemenin temposunu yakalama." },
        { title: "Koro Söyleyişi", desc: "Şaşırmadan ve kelimeleri yutmadan tekerlemeyi tamamlama." },
        { title: "Deftere Kenar Süsü", desc: "Defterin sol ve sağ kenarına lale örüntüsünü özenle çizme." }
      ],
      criteria: [
        "Tekerlemeyi ezberden, ritmine uygun ve doğru telaffuzla söyleyebilme",
        "Kenar süsü örüntüsünü eşit aralıklarla ve estetik biçimde çizebilme",
        "Okuma sırasında kelimeleri doğru ve akıcı seslendirebilme"
      ]
    },
    tips: {
      safetyTitle: "Ses Sağlığı ve Duruş",
      safetyRules: [
        { bold: "Dik Otur", text: "Okuma yaparken sırtımız dik olmalı; göğsümüz sıkışmazsa nefesimizi ve sesimizi çok daha rahat kontrol ederiz." }
      ],
      myths: [
        { wrong: "Tekerlemeyi en hızlı söyleyen her zaman en başarılıdır.", correct: "Hayır! Hızdan önce kelimelerin net anlaşılması ve ritme uyulması önemlidir." }
      ]
    },
    quiz: {
      question: "'Pazara gittim pazar yok / Eve geldim annem yok...' tekerlemesinin nakaratında hangi kelime tekrarlanır?",
      options: [
        { text: "A) Yok, yok, yok! ❌", isCorrect: true },
        { text: "B) Çok, çok, çok!", isCorrect: false },
        { text: "C) Var, var, var!", isCorrect: false },
        { text: "D) Koş, koş, koş!", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Tekerlememizin eğlenceli nakaratı ritimle söylenen <strong>'Yok, yok, yok!'</strong> sözleridir!"
    },
    summaryRules: [
      { bold: "Diline Güven", text: "Tekerlemelerle kelimeleri dans ettir." },
      { bold: "Defterini Koru", text: "Kenar süsü defterine değer katar." },
      { bold: "Haftaya Güzel Konuşma", text: "Önümüzdeki hafta tatil anılarımızı paylaşacak ve eşleştirme bulmacaları çözeceğiz!" }
    ],
    homework: "Öğrendiğiniz 'Pazara Gittim' tekerlemesini evde ailenize ritim tutarak söyleyin.",
    nextWeekPreview: "Tatil Anıları, Güzel Konuşma, Sorun Çözme ve Eşleştirme Bulmacaları!"
  },

  // 23. HAFTA
  {
    week: 23,
    date: "15 - 21 Şubat",
    hours: "4 Ders Saati",
    unit: "Tatil Anıları, Sorun Çözme ve Bulmacalar",
    unitBadge: "23. Tema: Anılar & Mantık",
    unitTheme: "tema-4",
    title: "23. Hafta: Tatil Dönüşü Güzel Konuşma, Sorun Çözme ve Bulmaca",
    subtitle: "Tatil Anılarını Kürsüde Paylaşma, Empatiyle Sorun Çözme ve Eşleştirme",
    outcomeCode: "SE.1.23 (Sözlü Anlatım & Eşleştirme)",
    targetSkill: "Topluluk Önünde Tatil Anılarını İfade Edebilme, Tartışmaları Çözebilme, Eşleştirme Becerisi",
    curiosityQuestion: "Tatil boyunca yaşadığın en ilginç veya seni en çok güldüren anıyı arkadaşlarının gözünün içine bakarak nasıl anlatırsın?",
    roadmap: [
      { title: "Kürsüde Tatil Anım", desc: "Öğrencilerin tatilde nereye gittiklerini, neler yaptıklarını nezaketle anlatması." },
      { title: "Söz Kesmeme Kuralı", desc: "Arkadaşımız konuşurken sözünü kesersek ne olur? Saygılı dinleme atölyesi." },
      { title: "Sınıf İçi Sorun Çözme", desc: "Teneffüste tartışan iki öğrencinin nedenlerini dinleyip adil çözüm bulma." },
      { title: "İlişkili Nesne Eşleştirme", desc: "Fırça-Boya, Arı-Bal, Kuş-Yuva gibi birbiriyle ilişkili nesneleri eşleştirme." }
    ],
    section1: {
      title: "Anlat Bakalım: Söz Sırası Sende",
      subtitle: "Güzel konuşan insan, dinleyenlerin gönlüne sıcacık bir köprü kurar.",
      layout: "split-visual",
      card: {
        title: "Kürsü Konuşması Kuralları",
        icon: "🎙️✨",
        desc: "Kürsüye çıktığımızda:",
        items: [
          { bold: "1. Selam Ver", text: "'Merhaba sevgili öğretmenim ve arkadaşlarım' diyerek başla." },
          { bold: "2. Anını Anlat", text: "'Tatil boyunca ailemle parkta yürüyüş yaptım, kar yağışını izledim.'" },
          { bold: "3. Teşekkür Et", text: "'Beni dinlediğiniz için teşekkür ederim' diyerek yerine geç." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#a5b4fc" text-anchor="middle">GÜZEL KONUŞMA VE EŞLEŞTİRME BULMACASI</text>

        <!-- Kürsüde Konuşan Çocuk (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#a5b4fc" stroke-width="2"/>
        <text x="155" y="120" font-size="34" text-anchor="middle">🧑‍🏫🎤🗣️</text>
        <text x="155" y="150" font-size="11" font-weight="bold" fill="#c7d2fe" text-anchor="middle">Kürsüde Tatil Anım</text>
        <text x="155" y="170" font-size="9" fill="#e0e7ff" text-anchor="middle">Göz teması kuruyoruz</text>
        <text x="155" y="190" font-size="9" fill="#e0e7ff" text-anchor="middle">Parmak kaldırıp söz alıyoruz</text>

        <!-- Eşleştirme Kartları (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#f59e0b" stroke-width="2"/>
        <text x="385" y="110" font-size="10.5" font-weight="bold" fill="#fde047" text-anchor="middle">İlişkili Nesneleri Eşleştir</text>
        <!-- Eşleşme 1 -->
        <text x="325" y="140" font-size="20" text-anchor="middle">🖌️</text>
        <line x1="345" y1="135" x2="425" y2="135" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="445" y="140" font-size="20" text-anchor="middle">🎨</text>
        <!-- Eşleşme 2 -->
        <text x="325" y="180" font-size="20" text-anchor="middle">🐝</text>
        <line x1="345" y1="175" x2="425" y2="175" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="445" y="180" font-size="20" text-anchor="middle">🍯</text>
        <text x="385" y="210" font-size="8.5" fill="#e0e7ff" text-anchor="middle">Fırça-Palet / Arı-Bal</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#a5b4fc" text-anchor="middle">Dinlemek sevginin, güzel konuşmak saygının ifadesidir!</text>
      </svg>`
    },
    section2: {
      title: "Söz Kesmeme Kuralları ve Zihin Egzersizi",
      subtitle: "Birbirimizi saygıyla dinler, mantık bulmacalarıyla zekamızı keskinleştiririz.",
      cards: [
        {
          badge: "Nezaket",
          title: "Söz Kesilirse Ne Olur?",
          desc: "Arkadaşımız düşüncesini unutur, kırılır ve sınıfın huzuru bozulur."
        },
        {
          badge: "Çözüm",
          title: "Barış Masası",
          desc: "İki arkadaş anlaşamadığında öğretmenin gözetiminde konuşarak uzlaşır."
        },
        {
          badge: "Mantık",
          title: "Eşleştirme Oyunu",
          desc: "Ağaç-Yaprak, Balık-Deniz, Ayakkabı-Çorap eşleştirmelerini çizgiyle bağlama."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Atölye: 'Tatil Anıları Sahnesi ve Eşleştirme Kartları'",
      desc: "Her öğrenci kürsüye çıkarak tatilden 1 dakikalık anı anlatır; ardından çalışma kâğıdındaki eşleştirmeleri yapar.",
      steps: [
        { title: "Kürsü Sırası", desc: "Öğretmenin davetiyle kürsüye çıkıp tatil anısını paylaşma." },
        { title: "Dinleme Disiplini", desc: "Dinleyenlerin gözlerini konuşan arkadaştan ayırmaması." },
        { title: "Bulmaca Çözümü", desc: "Birbiriyle bağlantılı nesneleri renkli kalemlerle birleştirme." }
      ],
      criteria: [
        "Topluluk önünde rahat, anlaşılır ve ses tonunu ayarlayarak konuşabilme",
        "Arkadaşı konuşurken sözünü kesmeden saygıyla dinleyebilme",
        "İlişkili nesneler arasındaki mantıksal bağı kavrayıp eşleştirebilme"
      ]
    },
    tips: {
      safetyTitle: "İletişim ve Empati Rehberi",
      safetyRules: [
        { bold: "İzin İsteyerek Konuş", text: "Söz almak istediğimizde parmağımızı sessizce kaldırır, öğretmenimiz isim verene kadar konuşmayız." }
      ],
      myths: [
        { wrong: "En çok konuşan ve başkasının sözünü bastıran lider olur.", correct: "Hayır! Gerçek lider arkadaşını en iyi dinleyen ve adaletli çözümler üreten kişidir." }
      ]
    },
    quiz: {
      question: "Bir arkadaşımız tahtada tatil anısını anlatırken yapmamız gereken en doğru davranış hangisidir?",
      options: [
        { text: "A) Sessizce ve gözlerinin içine bakarak dikkatle dinlemek 👂👀", isCorrect: true },
        { text: "B) Yanımızdakiyle fısıldaşıp gülüşmek", isCorrect: false },
        { text: "C) Araya girip 'Benimki daha güzeldi' diye bağırmak", isCorrect: false },
        { text: "D) Sıranın altına eğilip oyuncakla oynamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Bravo, Doğru Cevap: A!</strong> Arkadaşımızı <strong>sözünü kesmeden, göz teması kurarak dinlemek</strong> ona duyduğumuz saygının en güzel göstergesidir!"
    },
    summaryRules: [
      { bold: "Güzel Anlat", text: "Tatlı dille anılarını paylaş." },
      { bold: "Saygıyla Dinle", text: "Söz kesme, sıranı bekle." },
      { bold: "Haftaya Masal Saati!", text: "Önümüzdeki hafta masal dinleme, olayları sıralama ve Atatürk filmi izleyeceğiz!" }
    ],
    homework: "Evde ailenize tatilde yaşadığınız bir anıyı kürsüdeymiş gibi ayakta anlatın.",
    nextWeekPreview: "Masal Dinleme, Olayları 1-2-3-4 Sıralama, Kenar Süsü ve Atatürk Filmi!"
  },

  // 24. HAFTA
  {
    week: 24,
    date: "22 - 28 Şubat",
    hours: "4 Ders Saati",
    unit: "Masal Saati, Olayları Sıralama ve Atatürk",
    unitBadge: "24. Tema: Masal & Tarih",
    unitTheme: "tema-4",
    title: "24. Hafta: Masal Dinleme, Olay Sıralama ve Atatürk'ün Çocuk Sevgisi",
    subtitle: "Masal Kahramanları, Görselleri 1-4 Oluş Sırasına Koyma ve Film",
    outcomeCode: "SE.1.24 (Olay Örgüsü & Atatürk)",
    targetSkill: "Dinlediği Masalı Kendi Cümleleriyle Anlatma, Olayları Sıralama, Atatürk Sevgisi",
    curiosityQuestion: "Bir tohumun toprağa düşmesi, filizlenmesi, fidan olması ve elma vermesi olaylarını sırasıyla nasıl anlatırız?",
    roadmap: [
      { title: "Keloğlan ve Sihirli Taş", desc: "Dürüstlüğü ve zekayı öğreten seviyeye uygun Türk masalını dinleme." },
      { title: "Olayları Sıralama (1-2-3-4)", desc: "Karışık verilen 4 resmi oluş sırasına göre numaralandırma." },
      { title: "Atatürk'ün Çocuk Sevgisi Filmi", desc: "Atatürk'ün çocuklarla oyun oynadığı ve onlara güvendiği anıları izleme." },
      { title: "Masal Kenar Süsü", desc: "Taç ve yıldız motifleriyle defter kenarına masalsı bir süs çizme." }
    ],
    section1: {
      title: "Olayların Oluş Sırası: 'Önce, Sonra, En Sonunda'",
      subtitle: "Her hikâyenin bir başı, ortası ve mutlu bir sonu vardır.",
      layout: "split-visual",
      card: {
        title: "Olay Sıralama Adımları",
        icon: "🌱🌳🍎",
        desc: "Bir elmanın hikâyesi:",
        items: [
          { bold: "1. Tohum Ekilir", text: "Toprağa minik bir tohum atılır ve can suyu verilir." },
          { bold: "2. Filiz Çıkar", text: "Topraktan yeşil minik bir filiz güneşe doğru uzanır." },
          { bold: "3. Ağaç Büyür", text: "Gövdesi kalınlaşır, dalları çiçek açar." },
          { bold: "4. Elma Toplanır", text: "Kırmızı tatlı elmalar sepete toplanır ve afiyetle yenir." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">OLAYLARI OLUŞ SIRASINA GÖRE SIRALAMA (1 - 4)</text>

        <!-- 4 Adım Kutusu -->
        <!-- Adım 1 -->
        <g transform="translate(45, 85)">
          <rect x="0" y="0" width="100" height="130" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="50" cy="20" r="12" fill="#d97706"/>
          <text x="50" y="24" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
          <text x="50" y="65" font-size="28" text-anchor="middle">🌱</text>
          <text x="50" y="100" font-size="9" font-weight="bold" fill="#fde047" text-anchor="middle">Tohum Ekildi</text>
          <text x="50" y="115" font-size="8" fill="#cbd5e1" text-anchor="middle">Toprak & Su</text>
        </g>

        <!-- Adım 2 -->
        <g transform="translate(165, 85)">
          <rect x="0" y="0" width="100" height="130" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="50" cy="20" r="12" fill="#d97706"/>
          <text x="50" y="24" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
          <text x="50" y="65" font-size="28" text-anchor="middle">🌿</text>
          <text x="50" y="100" font-size="9" font-weight="bold" fill="#fde047" text-anchor="middle">Filizlendi</text>
          <text x="50" y="115" font-size="8" fill="#cbd5e1" text-anchor="middle">Güneşi Gördü</text>
        </g>

        <!-- Adım 3 -->
        <g transform="translate(285, 85)">
          <rect x="0" y="0" width="100" height="130" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="50" cy="20" r="12" fill="#d97706"/>
          <text x="50" y="24" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
          <text x="50" y="65" font-size="28" text-anchor="middle">🌳</text>
          <text x="50" y="100" font-size="9" font-weight="bold" fill="#fde047" text-anchor="middle">Ağaç Oldu</text>
          <text x="50" y="115" font-size="8" fill="#cbd5e1" text-anchor="middle">Çiçek Açtı</text>
        </g>

        <!-- Adım 4 -->
        <g transform="translate(405, 85)">
          <rect x="0" y="0" width="100" height="130" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <circle cx="50" cy="20" r="12" fill="#d97706"/>
          <text x="50" y="24" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
          <text x="50" y="65" font-size="28" text-anchor="middle">🍎</text>
          <text x="50" y="100" font-size="9" font-weight="bold" fill="#fde047" text-anchor="middle">Meyve Verdi</text>
          <text x="50" y="115" font-size="8" fill="#cbd5e1" text-anchor="middle">Afiyetle Yendi</text>
        </g>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Önce tohum, sonra fidan, en sonunda koca bir elma ağacı!</text>
      </svg>`
    },
    section2: {
      title: "Atatürk ve Çocuklar & Masal Kahramanları",
      subtitle: "Geleceğin büyük insanları bugünün çocuklarıdır.",
      cards: [
        {
          badge: "Atatürk",
          title: "Çocuk Sevgisi",
          desc: "Atatürk'ün çocuklarla konuşurken diz çöküp onların boyuna inmesi ve onları dinlemesi."
        },
        {
          badge: "Masal",
          title: "Keloğlan'ın Dürüstlüğü",
          desc: "Zor durumda kalsa bile yalan söylemeyen Keloğlan'ın masaldaki başarısı."
        },
        {
          badge: "Sıralama",
          title: "Yumurta - Civciv - Tavuk",
          desc: "Doğadaki canlıların büyüme evrelerini görsellerle sıraya koyma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Karışık Resimleri Sıraya Diz!'",
      desc: "Her öğrenciye 4 parçalı çizgi roman kâğıdı verilir; olayları 1, 2, 3, 4 olarak numaralandırır.",
      steps: [
        { title: "Resimleri İncele", desc: "Sabah uyanma, diş fırçalama, kahvaltı yapma ve okula gitme resimlerini görme." },
        { title: "Numaralandır", desc: "Kutucuklara kurşun kalemle doğru sırayı yazma." },
        { title: "Masalını Anlat", desc: "Sıraladığı resimlere bakarak arkadaşlarına mini bir hikâye anlatma." }
      ],
      criteria: [
        "Olayların kronolojik (oluş) sırasını mantıksal olarak doğru kavrayabilme",
        "Dinlediği masalın ana fikrini kendi cümleleriyle ifade edebilme",
        "Atatürk'ün çocuklara verdiği değeri açıklayabilme"
      ]
    },
    tips: {
      safetyTitle: "Doğru Düşünme Becerisi",
      safetyRules: [
        { bold: "Acele Etme", text: "Resimleri sıralarken hemen karar verme; önce tüm resimlere bakıp olayların neden ve sonuçlarını düşün." }
      ],
      myths: [
        { wrong: "Masallar sadece hayal ürünüdür, bize hiçbir şey öğretmez.", correct: "Hayır! Masallar bize dürüstlüğü, sabrı, cesareti ve dostluğun değerini öğretir." }
      ]
    },
    quiz: {
      question: "Aşağıdaki olaylar oluş sırasına göre dizildiğinde EN BAŞTA hangisi yer almalıdır?",
      options: [
        { text: "A) Sabah yataktan uyanmak ⏰🛏️", isCorrect: true },
        { text: "B) Okulda derse başlamak", isCorrect: false },
        { text: "C) Okuldan eve dönüp uyumak", isCorrect: false },
        { text: "D) Öğle yemeği yemek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Günün ilk olayı sabah <strong>yataktan uyanmaktır</strong>. Sonra kahvaltı yapılır, okula gidilir ve ders işlenir!"
    },
    summaryRules: [
      { bold: "Sırayı Takip Et", text: "Her şeyin bir başlangıcı ve sonucu vardır." },
      { bold: "Ata'nı Örnek Al", text: "Atatürk gibi çocukları ve okumayı çok sev." },
      { bold: "Haftaya Yeşilay!", text: "Önümüzdeki hafta 1-7 Mart Yeşilay Haftası ve sağlıklı yaşam bilincini öğreneceğiz!" }
    ],
    homework: "Evde fırçalanan dişler, yıkanan eller gibi günlük bir rutinin 3 aşamasını sırayla anlatın.",
    nextWeekPreview: "Yeşilay Haftası (1-7 Mart), Sağlıklı Yaşam, Harf Bulmacaları ve Bilmeceler!"
  },

  // 25. HAFTA
  {
    week: 25,
    date: "01 - 07 Mart",
    hours: "4 Ders Saati",
    unit: "1-7 Mart Yeşilay Haftası ve Sağlıklı Yaşam",
    unitBadge: "25. Tema: Sağlık & Yeşilay",
    unitTheme: "tema-4",
    title: "25. Hafta: Yeşilay Haftası, Sağlıklı Yaşam ve Harf Bulmacası",
    subtitle: "Temiz Nefes, Yeşilay'ın Yeşil Hilali, Sağlıklı Besinler ve Bilmece",
    outcomeCode: "SE.1.25 (Sağlık & Yeşilay)",
    targetSkill: "Sağlıklı Yaşam Alışkanlıkları Kazanma, Yeşilay'ın Amacını Kavrama, Harf Bulmacası Çözme",
    curiosityQuestion: "Yeşilay'ın bayrağında neden beyaz zemin üzerinde yemyeşil bir hilal (ay) vardır?",
    roadmap: [
      { title: "Yeşilay Nedir?", desc: "Bedenimizi zararlı alışkanlıklardan ve dumandan koruyan yeşil hilalli dostumuz." },
      { title: "Sağlıklı Yaşam Kuralları", desc: "Bol su içmek, spor yapmak, temiz hava almak ve meyve sebze tüketmek." },
      { title: "Yeşilay Harf Bulmacası", desc: "S-A-Ğ-L-I-K, S-U, E-L-M-A, S-P-O-R kelimelerini bulmaca kutularında bulma." },
      { title: "Yeşil Hilal Rozeti", desc: "Kâğıttan yeşil hilal çizip keserek yakamıza 'Yeşilay Dostu' rozeti takma." }
    ],
    section1: {
      title: "Yeşilay: Temiz Beden, Temiz Gelecek",
      subtitle: "Sağlığımız en büyük hazinemizdir; onu sporla ve temiz havayla koruruz.",
      layout: "split-visual",
      card: {
        title: "Sağlıklı Çocuğun 3 Kuralı",
        icon: "🍏🏃‍♂️",
        desc: "Yeşilay dostu çocuk:",
        items: [
          { bold: "1. Temiz Hava Alır", text: "Parklarda koşar, sigara dumanı ve kirli havadan uzak durur." },
          { bold: "2. Su ve Meyve Tüketir", text: "Asitli ve şekerli içecekler yerine bol su, süt ve taze meyve suyu içer." },
          { bold: "3. Hareket Eder", text: "Bütün gün ekran başında oturmaz; ip atlar, top oynar, spor yapar." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#6ee7b7" text-anchor="middle">1-7 MART YEŞİLAY HAFTASI: SAĞLIKLI YAŞAM</text>

        <!-- Yeşilay Hilali (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <!-- Yeşil Hilal Çizimi -->
        <path d="M 175 110 A 35 35 0 1 0 175 170 A 28 28 0 1 1 175 110 Z" fill="#34d399"/>
        <text x="155" y="195" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Yeşilay Simgesi</text>
        <text x="155" y="210" font-size="8.5" fill="#d1fae5" text-anchor="middle">Zararlı Alışkanlıklara Hayır!</text>

        <!-- Sağlıklı Yaşam İkonları (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#065f46" stroke="#facc15" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🚴‍♂️🥗💧⚽</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Sağlık Hazinemiz</text>
        <text x="385" y="175" font-size="9" fill="#d1fae5" text-anchor="middle">Günde 8 bardak su iç</text>
        <text x="385" y="195" font-size="9" fill="#d1fae5" text-anchor="middle">Açık havada spor yap</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#6ee7b7" text-anchor="middle">Sağlıklı nesiller, güçlü Türkiye'nin teminatıdır!</text>
      </svg>`
    },
    section2: {
      title: "Harf Bulmacası ve Zeka Bilmeceleri",
      subtitle: "Bedenimizi sporla, zihnimizi bulmacalarla zinde tutuyoruz.",
      cards: [
        {
          badge: "Yeşilay",
          title: "Temiz Ciğerler",
          desc: "Derin nefes alıp verme egzersizleri yaparak temiz havanın değerini anlama."
        },
        {
          badge: "Bulmaca",
          title: "Karede Sağlık",
          desc: "Kare bulmaca kutularında S-P-O-R ve M-E-Y-V-E harflerini boyama."
        },
        {
          badge: "Bilmece",
          title: "Sarıdır sallanır...",
          desc: "'Sarıdır sallanır, dalında ballanır / Soyulur yenir, bilin bakalım nedir?' (Muz)."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Uygulama: 'Yeşilay Rozetimi Yapıyorum'",
      desc: "Her öğrenci yeşil elişi kâğıdından bir hilal keser; beyaz dairenin üzerine yapıştırıp göğsüne takar.",
      steps: [
        { title: "Hilal Çiz", desc: "Bardağın ağzıyla kâğıda hilal şekli çizip makasla kesme." },
        { title: "Rozet Tasarla", desc: "Üzerine 'Yeşilay Dostuyum' yazarak çengelli iğne veya bantla takma." },
        { title: "Sağlık Andı", desc: "'Sağlığıma iyi bakacağıma, bol su içip spor yapacağıma söz veririm' andı." }
      ],
      criteria: [
        "Yeşilay'ın görevlerini ve sağlıklı yaşam ilkelerini kavrayabilme",
        "Harf bulmacasındaki kelimeleri harf harf doğru tespit edebilme",
        "Kes-yapıştır etkinliğini temiz ve özenli tamamlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Sağlıklı Alışkanlıklar",
      safetyRules: [
        { bold: "Dumanlı Ortamlardan Uzak Dur", text: "Yanımızda sigara içen biri olursa nazikçe uyarır veya oradan uzaklaşarak temiz hava olan yere geçeriz." }
      ],
      myths: [
        { wrong: "Sürekli abur cubur ve cips yemek büyümeyi hızlandırır.", correct: "Hayır! Büyümeyi hızlandıran ve boy uzatan taze sebze, meyve, yumurta ve süttür." }
      ]
    },
    quiz: {
      question: "Yeşilay Haftası'nda öğrendiğimiz kurallara göre sağlığımızı korumak için hangisini yapmalıyız?",
      options: [
        { text: "A) Bol su içmek, meyve yemek ve açık havada spor yapmak 🏃‍♂️💧🍎", isCorrect: true },
        { text: "B) Sürekli gazlı içecekler içmek", isCorrect: false },
        { text: "C) Bütün gün televizyon karşısında hareketsiz oturmak", isCorrect: false },
        { text: "D) Kirli ve dumanlı ortamlarda beklemek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Yeşilay bize <strong>temiz hava, spor, su ve sağlıklı besinlerle</strong> güçlü kalmayı öğütler!"
    },
    summaryRules: [
      { bold: "Bedenini Sev", text: "Sağlığın senin en büyük hazinendir." },
      { bold: "Yeşilay'ı Tanı", text: "Zararlı duman ve alışkanlıklardan uzak dur." },
      { bold: "Haftaya Ara Tatil!", text: "Önümüzdeki hafta 2. Dönem Ara Tatili ve Ramazan Bayramı bülteniyle dinleneceğiz!" }
    ],
    homework: "Ailenize Yeşilay'ın yeşil hilalinin ne anlama geldiğini anlatın ve birlikte yürüyüş yapın.",
    nextWeekPreview: "2. Dönem Ara Tatil Macera Bülteni (Oyunlar, Doğa ve Ramazan Bayramı Neşesi)!"
  },

  // 26. HAFTA - 2. DÖNEM ARA TATİL
  {
    week: 26,
    date: "08 - 14 Mart",
    hours: "Tatil Haftası",
    unit: "2. Dönem Ara Tatili Macera Bülteni",
    unitBadge: "26. Tema: Ara Tatil & Bayram",
    unitTheme: "tema-4",
    title: "26. Hafta: 2. Dönem Ara Tatil Macera Bülteni",
    subtitle: "İlkbahara Merhaba, Ramazan Bayramı Coşkusu, Aile Ziyaretleri ve Dinlenme",
    outcomeCode: "Ara Tatil & Bayram Bülteni",
    targetSkill: "Geleneksel Değerler, Büyüklere Saygı, İlkbahar Gözlemleri ve Dinlenme",
    curiosityQuestion: "Bayramlarda büyüklerimizin elini öpüp 'Bayramınız kutlu olsun' demek neden kalbimizi sıcacık yapar?",
    roadmap: [
      { title: "İlkbaharın İlk Müjdeleri", desc: "Ağaçların çiçek açması, havaların ısınması ve doğanın uyanışı." },
      { title: "Ramazan Bayramı Sevinci", desc: "Temiz bayram kıyafetleri giyme, büyüklere sarılma ve tatlı ikramlar." },
      { title: "Geleneksel Sokak Oyunları", desc: "Bahçede arkadaşlarla ip atlama, seksek ve saklambaç oynama." },
      { title: "Kitapla Baş Başa", desc: "Tatil günlerinde bahar konulu renkli bir hikâye kitabı okuma." }
    ],
    section1: {
      title: "Bahar ve Bayram: Çifte Sevinç",
      subtitle: "Toprak yeşile bürünürken evlerimiz bayram neşesi ve sevgiyle dolar.",
      layout: "split-visual",
      card: {
        title: "Bayram Nezaketi",
        icon: "🍬🌸",
        desc: "Bayramda güzel adetlerimiz:",
        items: [
          { bold: "1. Büyüklere Saygı", text: "Büyükanne ve büyükbabalarımızın elini öper, bayramlarını tebrik ederiz." },
          { bold: "2. Tatlı Dilli Ziyaret", text: "Komşularımızla selamlaşır, güler yüzle bayramlaşırız." },
          { bold: "3. Paylaşmak Güzeldir", text: "Şekerimizi ve sevincimizi kardeşlerimizle ve arkadaşlarımızla paylaşırız." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">ARA TATİL: İLKBAHAR & RAMAZAN BAYRAMI NEŞESİ</text>

        <!-- Bahar Ağacı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#34d399" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🌸🌳🦋</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Bahar Geldi!</text>
        <text x="155" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">Ağaçlar pembe açtı</text>
        <text x="155" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Kelebekler uçuşuyor</text>

        <!-- Bayram Şekeri ve Sevgi (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#312e81" stroke="#f59e0b" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🍬👨‍👩‍👧‍👦🎁</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">İyi Bayramlar!</text>
        <text x="385" y="175" font-size="9" fill="#e0e7ff" text-anchor="middle">El öpme ve bayramlaşma</text>
        <text x="385" y="195" font-size="9" fill="#e0e7ff" text-anchor="middle">Büyükleri sevindirme</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Bayramlar küskünlerin barıştığı, sevginin çoğaldığı günlerdir!</text>
      </svg>`
    },
    section2: {
      title: "Bahar Yürüyüşü ve Bayram Adabı",
      subtitle: "Hem doğayı keşfeder hem geleneklerimizi yaşatırız.",
      cards: [
        {
          badge: "Gelenek",
          title: "Bayramlaşma Sözleri",
          desc: "'Hayırlı bayramlar, nice mutlu bayramlara' diyerek büyüklere sarılma."
        },
        {
          badge: "Doğa",
          title: "Bahar Çiçekleri",
          desc: "Papatyaları ve erik ağaçlarının beyaz çiçeklerini dalından koparmadan sevme."
        },
        {
          badge: "Oyun",
          title: "Seksek Zamanı",
          desc: "Bahçeye tebeşirle seksek çizip dengede tek ayak üzerinde zıplama."
        }
      ]
    },
    workshop: {
      title: "Tatil Görevi: 'Aileme Bayram Tebrik Kartı'",
      desc: "Kartonu ikiye katlayıp üzerine bahar çiçekleri çizerek büyükanne ve büyükbabaya bayram kartı hazırlama.",
      steps: [
        { title: "Kartı Boya", desc: "Ön yüzüne renkli balonlar ve bahar çiçekleri çizme." },
        { title: "Mesajını Yaz", desc: "İçine 'Canım Ailem, Bayramınız Kutlu Olsun' yazma." },
        { title: "Gülerek Ver", desc: "Bayram sabahı kartı büyüklerine öpücükle takdim etme." }
      ],
      criteria: [
        "Milli ve manevi bayramların paylaşma değerini kavrayabilme",
        "İlkbahar mevsiminin doğadaki değişimlerini gözlemleyebilme",
        "Büyüklerle iletişimde nezaket ve saygı kurallarına uyabilme"
      ]
    },
    tips: {
      safetyTitle: "Bayramda Sağlık ve Beslenme",
      safetyRules: [
        { bold: "Çok Fazla Şeker Yeme", text: "Bayramda ikram edilen şeker ve çikolataları arka arkaya yememeli, karnımızın ağrımaması için ölçülü tüketmeliyiz." }
      ],
      myths: [
        { wrong: "Bayramda sadece harçlık toplamak önemlidir.", correct: "Hayır! Bayramın asıl güzelliği sevdiklerimizle kucaklaşmak ve büyüklerimizin duasını almaktır." }
      ]
    },
    quiz: {
      question: "Ramazan Bayramı'nda büyüklerimizi ziyaret ettiğimizde yapabileceğimiz en nazik davranış hangisidir?",
      options: [
        { text: "A) Güler yüzle 'İyi bayramlar' deyip ellerini öpmek ve hal hatır sormak 🍬👵", isCorrect: true },
        { text: "B) 'Bana hemen para verin' diye bağırmak", isCorrect: false },
        { text: "C) Bir köşeye çekilip tablete bakmak", isCorrect: false },
        { text: "D) İkram edilen şekerin hepsini cebine doldurup kaçmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Bayramın en tatlı adeti <strong>büyüklerimize saygıyla sarılmak ve tebessümle bayramlaşmaktır</strong>!"
    },
    summaryRules: [
      { bold: "Baharın Tadını Çıkar", text: "Ağaçların uyanışını izle." },
      { bold: "Büyüklerini Sevindir", text: "Bayram sevincini herkesle paylaş." },
      { bold: "Pazartesi Buluşuyoruz!", text: "Tatil dönüşü şarkılar, boyama ve çizgi bulmacalarıyla dersimize başlıyoruz!" }
    ],
    homework: "Bayram tatili boyunca hazırladığınız tebrik kartını büyüklerinize hediye edin.",
    nextWeekPreview: "27. Hafta: Birlikte Şarkı Söyleme, Boyama Çalışması, Sınıf İçi Oyun ve Çizgi Bulmacaları!"
  },

  // 27. HAFTA
  {
    week: 27,
    date: "15 - 21 Mart",
    hours: "4 Ders Saati",
    unit: "Bahar Şarkıları, Çizgi Bulmacaları ve Oyun",
    unitBadge: "27. Tema: Ritim & Çizgi",
    unitTheme: "tema-4",
    title: "27. Hafta: Şarkı Söyleme, Boyama, Sınıf İçi Oyun ve Bulmaca",
    subtitle: "Koro Halinde Şarkı Söyleme, Bahar Resmi Boyama ve Labirent",
    outcomeCode: "SE.1.27 (Müzik & Görsel Algı)",
    targetSkill: "Topluca Şarkı Söylemekten Hoşlanma, Çizgi Bulmacaları Çözme, Oyun Kurallarına Uyma",
    curiosityQuestion: "Bütün sınıf aynı anda tek bir ses olup bir şarkıyı söylediğinde neden gökyüzündeki kuşlar gibi ahenkli duyulur?",
    roadmap: [
      { title: "Bahar Korosu", desc: "'Daha Dün Annemizin Kollarında Yaşarken' ve bahar şarkılarını birlikte söyleme." },
      { title: "Bahar Boyaması", desc: "Kuşlar, kelebekler ve papatyalarla dolu bahar manzarasını özenle boyama." },
      { title: "Sınıf İçi Eğitsel Oyun", desc: "Öğrencilerin seçtiği hareketli bir oyunla kurallara uyarak eğlenme." },
      { title: "Çizgi Labirent Bulmacası", desc: "Arıyı kovana ulaştıran labirent yolunu çizgiyi taşırmadan bulma." }
    ],
    section1: {
      title: "Koro Neşesi: Birlikte Şarkı Söylemek",
      subtitle: "Şarkı söylerken nefesimiz birleşir, kalplerimiz ritim tutar.",
      layout: "split-visual",
      card: {
        title: "Koro Şarkıcısının 3 Kuralı",
        icon: "🎶🎤",
        desc: "Koro halinde söylerken:",
        items: [
          { bold: "1. Arkadaşını Dinle", text: "Sesini aşırı yükseltip tek başına bağırma; sınıfın sesiyle uyumlu ol." },
          { bold: "2. Ritmi Kaçırma", text: "Öğretmenin el hareketlerini takip ederek aynı anda başla ve bitir." },
          { bold: "3. Gülümseyerek Söyle", text: "Şarkının neşesini yüzündeki tebessümle tüm sınıfa hissettir." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#86efac" text-anchor="middle">BAHAR KOROSU VE ÇİZGİ LABİRENT BULMACASI</text>

        <!-- Koro Şarkıcıları (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#166534" stroke="#86efac" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">👧👦🎶🧒</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fef08a" text-anchor="middle">Bahar Korosu</text>
        <text x="155" y="175" font-size="9" fill="#dcfce7" text-anchor="middle">Birlikte söylemek güç verir</text>
        <text x="155" y="195" font-size="9" fill="#dcfce7" text-anchor="middle">Tek ses, tek yürek</text>

        <!-- Çizgi Labirent (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#166534" stroke="#facc15" stroke-width="2"/>
        <text x="325" y="115" font-size="20" text-anchor="middle">🐝</text>
        <!-- Labirent Çizgisi -->
        <path d="M 340 110 L 400 110 L 400 145 L 350 145 L 350 180 L 430 180" fill="none" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
        <text x="450" y="185" font-size="20" text-anchor="middle">🍯</text>
        <text x="385" y="210" font-size="9" font-weight="bold" fill="#fef08a" text-anchor="middle">Arıyı Kovana Ulaştır!</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#86efac" text-anchor="middle">Şarkılar neşelendirir, labirent bulmacaları dikkati artırır!</text>
      </svg>`
    },
    section2: {
      title: "Oyun Kuralları ve Tebrik Kültürü",
      subtitle: "Kaybetsek de kazansak da en güzel ödül arkadaşlıktır.",
      cards: [
        {
          badge: "Oyun",
          title: "Adil Ebe",
          desc: "Ebe seçildiğinde mızıkçılık yapmadan görevi üstlenmek ve kurallara uymak."
        },
        {
          badge: "Sanat",
          title: "Bahar Renkleri",
          desc: "Yeşilin, sarının ve pembenin en tatlı tonlarıyla bahar sayfasını donatma."
        },
        {
          badge: "Tebrik",
          title: "Alkışla Ödüllendir",
          desc: "Bulmacayı doğru çözen veya oyunu kazanan grubu tüm sınıfça alkışlama."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Müzik Atölyesi: 'Bahar Koromuz Sahnede'",
      desc: "Öğrenciler sırayla şarkının hareketlerini canlandırır, koro halinde bahar şarkısını seslendirir.",
      steps: [
        { title: "Nefes Açma", desc: "Çiçek koklar gibi derin nefes alıp mum üfler gibi yavaşça verme." },
        { title: "Koro Söyleyişi", desc: "Şarkının sözlerini net ve tatlı bir melodiyle seslendirme." },
        { title: "Labirent Çözümü", desc: "Çalışma sayfasındaki labirenti kurşun kalemle değdirmeden tamamlama." }
      ],
      criteria: [
        "Koro halinde şarkı söylerken sınıfın ses dengesine uyum sağlayabilme",
        "Çizgi bulmacalarını dikkatle ve sabırla sonuca ulaştırabilme",
        "Oyun sonunda kazanan arkadaşını içtenlikle tebrik edebilme"
      ]
    },
    tips: {
      safetyTitle: "Ses Kullanımı",
      safetyRules: [
        { bold: "Boğazını Yorma", text: "Şarkı söylerken boğazını yırtarcasına bağırmamalısın; şarkı bağırmak değil, ezgiyi hissettirmektir." }
      ],
      myths: [
        { wrong: "Labirentte yanlış yola girince kâğıdı yırtıp atmalıyız.", correct: "Hayır! Yanlış yolu silgiyle silip geri dönmek sabrı ve doğru yolu bulmayı öğretir." }
      ]
    },
    quiz: {
      question: "Koro halinde bütün sınıfla birlikte şarkı söylerken en doğru davranış hangisidir?",
      options: [
        { text: "A) Arkadaşlarıyla aynı ses tonunda ve uyum içinde söylemek 🎶👧👦", isCorrect: true },
        { text: "B) Kulağını tıkayıp avazı çıktığı kadar tek başına bağırmak", isCorrect: false },
        { text: "C) Şarkı söyleyen arkadaşlarının dikkatini dağıtmak", isCorrect: false },
        { text: "D) Hiç ağzını açmadan somurtmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Koro olmak <strong>birlikte, uyumla ve tek bir güzel ses gibi</strong> şarkıyı seslendirmektir!"
    },
    summaryRules: [
      { bold: "Birlikte Söyle", text: "Müzik kalpleri birleştirir." },
      { bold: "Sabırla Çiz", text: "Labirentler zihnini geliştirir." },
      { bold: "Haftaya Orman Haftası!", text: "Önümüzdeki hafta Orman Haftası, Dünya Tiyatrolar Günü ve ördek tekerlemesi var!" }
    ],
    homework: "Bahar şarkısını evde ailenize el hareketleriyle söyleyerek küçük bir konser verin.",
    nextWeekPreview: "Orman Haftası (21-26 Mart), Dünya Tiyatrolar Günü (27 Mart), Masal ve 'Çık Çıkalım Çardağa' Tekerlemesi!"
  },

  // 28. HAFTA
  {
    week: 28,
    date: "22 - 28 Mart",
    hours: "4 Ders Saati",
    unit: "Orman Haftası ve Dünya Tiyatrolar Günü",
    unitBadge: "28. Tema: Orman & Tiyatro",
    unitTheme: "tema-4",
    title: "28. Hafta: Orman Haftası, Tiyatro, Kes-Yapıştır ve Tekerleme",
    subtitle: "Ağaçların Önemi, Sınıf Tiyatrosu, 'Çık Çıkalım Çardağa' Tekerlemesi",
    outcomeCode: "SE.1.28 (Doğa Bilinci & Tiyatro)",
    targetSkill: "Ormanların ve Doğanın Değerini Kavrama, Tiyatroda Rol Alabilme, Ritmik Tekerleme",
    curiosityQuestion: "Bir ormandaki binlerce ağaç olmasa soluduğumuz tertemiz havayı ve içtiğimiz yağmur sularını nereden bulurduk?",
    roadmap: [
      { title: "21-26 Mart Orman Haftası", desc: "Ağaçların havayı temizlemesi, hayvanlara yuva olması ve orman yangınlarından korunma." },
      { title: "27 Mart Tiyatrolar Günü", desc: "Tiyatro sahnesi kurma, kukla veya kostümle bir ağacı canlandırma." },
      { title: "Ördek Tekerlemesi", desc: "'Çık çıkalım çardağa / Yem verelim ördeğe...' tekerlemesini hızlıca söyleme." },
      { title: "Ağaç Kes-Yapıştır Kolajı", desc: "Yeşil kâğıtlardan yapraklar kesip ulu bir orman tablosu oluşturma." }
    ],
    section1: {
      title: "Ormanlar: Dünyamızın Yeşil Ciğerleri",
      subtitle: "Bir fidan dikmek, geleceğe nefes ve kuşlara sıcacık bir yuva armağan etmektir.",
      layout: "split-visual",
      card: {
        title: "Orman Dostunun Görevleri",
        icon: "🌲🎭",
        desc: "Ormanları korumak için:",
        items: [
          { bold: "1. Ağaç Dalı Kırma", text: "Canlı ağaçların dallarını koparma; yapraklara sevgiyle dokun." },
          { bold: "2. Ormanda Çöp Bırakma", text: "Cam şişe ve plastik atıklar yangına sebep olabilir, çöpleri topla." },
          { bold: "3. Fidan Dik", text: "Her bahar bir fidan dikerek kendi dikili ağacına can suyu ver." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#6ee7b7" text-anchor="middle">ORMAN HAFTASI & DÜNYA TİYATROLAR GÜNÜ</text>

        <!-- Ulu Orman Ağacı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🌲🐿️🦉🦌</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Orman Haftası (21-26 Mart)</text>
        <text x="155" y="175" font-size="9" fill="#d1fae5" text-anchor="middle">Ormanlar hayat kaynağıdır</text>
        <text x="155" y="195" font-size="9" fill="#d1fae5" text-anchor="middle">Tüm canlıların yuvasıdır</text>

        <!-- Tiyatro Sahnesi (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#065f46" stroke="#facc15" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🎭🎪🎟️</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Tiyatrolar Günü (27 Mart)</text>
        <text x="385" y="175" font-size="9" fill="#d1fae5" text-anchor="middle">Rol yapma ve canlandırma</text>
        <text x="385" y="195" font-size="9" fill="#d1fae5" text-anchor="middle">Empati ve özgüven sahnesi</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#6ee7b7" text-anchor="middle">Doğayı koruyan, sanatı seven nesiller aydınlık yarınları kurar!</text>
      </svg>`
    },
    section2: {
      title: "Tiyatro Sahnesi ve Ördek Tekerlemesi",
      subtitle: "Sahnede ağaç olur rüzgârla sallanır, tekerlemelerle neşeleniriz.",
      cards: [
        {
          badge: "Tiyatro",
          title: "Konuşan Ağaç Rolü",
          desc: "Kollarını dal yapıp 'Ben bir meşeyim, sincaplara palamut veririm' canlandırması."
        },
        {
          badge: "Tekerleme",
          title: "Çık Çıkalım Çardağa",
          desc: "'Yem verelim ördeğe / Ördek yemini yemeden / Ciyak miyak demeden...'"
        },
        {
          badge: "Fıkra",
          title: "Günün Fıkrası",
          desc: "Arkadaşını dikkatle dinleme ve en güzel jest yapanı alkışlama."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Tiyatro: 'Ormanın Minik Koruyucuları'",
      desc: "Öğrenciler ağaç, rüzgâr, sincap ve kuş rollerine bürünerek kısa bir orman tiyatrosu sahneler.",
      steps: [
        { title: "Rol Dağılımı", desc: "Ağaç olanlar kollarını açar, kuş olanlar kanat çırpar." },
        { title: "Oyun Metni", desc: "Ormana gelen çocukların fidan dikip kuşlara su vermesini canlandırma." },
        { title: "Tekerleme Yarışması", desc: "Ördek tekerlemesini şaşırmadan en akıcı söyleyen grubu alkışlama." }
      ],
      criteria: [
        "Ormanların canlılar için önemini kendi ifadeleriyle açıklayabilme",
        "Tiyatro canlandırmasında rolünün gerektirdiği jest ve mimikleri yapabilme",
        "Tekerlemeyi ritmine uygun ve doğru sözlerle seslendirebilme"
      ]
    },
    tips: {
      safetyTitle: "Doğa Sevgisi ve Yangın Güvenliği",
      safetyRules: [
        { bold: "Ateş Yakılmaz", text: "Piknik yerlerinde büyüklerimizin bile orman içinde ateş yakmasına izin vermemeli; yangın tehlikesine karşı 112'yi bilmeliyiz." }
      ],
      myths: [
        { wrong: "Ormandan tek bir ağaç kesilirse hiçbir şey olmaz.", correct: "Hayır! Bir ağaç onlarca kuşun, böceğin yuvasıdır ve oksijen kaynağımızdır." }
      ]
    },
    quiz: {
      question: "21-26 Mart Orman Haftası'nda doğayı ve çevremizi korumak için hangisini yapmalıyız?",
      options: [
        { text: "A) Fidan dikmek ve ağaçların dallarını korumak 🌲🌱", isCorrect: true },
        { text: "B) Ağaçların kabuklarını bıçakla soymak", isCorrect: false },
        { text: "C) Ormana kırık cam ve çöp atmak", isCorrect: false },
        { text: "D) Yeşil dalları koparıp yere atmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Ormanları korumak için <strong>fidan diker, ağaçlara şefkatle yaklaşır ve yeşili koruruz</strong>!"
    },
    summaryRules: [
      { bold: "Ormanı Koru", text: "Her ağaç gökyüzüne uzanan bir nefes." },
      { bold: "Sahneye Çık", text: "Tiyatro kendini anlatmanın en güzel yoludur." },
      { bold: "Haftaya Kütüphaneler Haftası!", text: "Önümüzdeki hafta Kütüphaneler Haftası, parkta ilkbahar gözlemi ve kitap okuma yapacağız!" }
    ],
    homework: "Yakınınızdaki bir parkta bir ağacı inceleyin; gövdesine ve tomurcuklanan yapraklarına bakın.",
    nextWeekPreview: "Kütüphaneler Haftası, Görsel Okuma, Defter Kenar Süsü ve Parkta İlkbahar Gözlemi!"
  },

  // 29. HAFTA
  {
    week: 29,
    date: "29 Mart - 04 Nisan",
    hours: "4 Ders Saati",
    unit: "Kütüphaneler Haftası ve Doğada İlkbahar Gözlemi",
    unitBadge: "29. Tema: Kitap & Doğa",
    unitTheme: "tema-4",
    title: "29. Hafta: Kütüphaneler Haftası, Görsel Okuma ve Bahar Gezisi",
    subtitle: "Kitapların Büyülü Dünyası, Parkta Ağaç İncelemesi ve Dikte",
    outcomeCode: "SE.1.29 (Kitap Sevgisi & Gözlem)",
    targetSkill: "Kütüphane Kurallarını Bilme, Resim ve Görselleri Yorumlayabilme, Doğadaki Bahar Değişimini Gözlemleme",
    curiosityQuestion: "Sessiz bir kütüphanenin kapısından içeri girdiğimizde neden parmak uçlarımızda yürür ve fısıltıyla konuşuruz?",
    roadmap: [
      { title: "Kütüphaneler Haftası", desc: "Kitapların sessiz evi: Kütüphanede nasıl davranılır, kitaplar nasıl ödünç alınır?" },
      { title: "Görsel Okuma Saati", desc: "Bahar mevsimini anlatan büyük tabloyu inceleyip detayları anlatma." },
      { title: "Okul Bahçesinde Bahar Gezisi", desc: "Ağaçlardaki taze yeşil yaprakları, tomurcukları ve çiçekleri yerinde inceleme." },
      { title: "Kitap Ayracı Tasarımı", desc: "Karton şerit üzerine çiçekli kenar süsü çizerek kendi kitap ayracını yapma." }
    ],
    section1: {
      title: "Kütüphane: Bilgilerin ve Hayallerin Şatosu",
      subtitle: "Kitap sayfaları arasında zamanda yolculuk yapar, bilmediklerimizi öğreniriz.",
      layout: "split-visual",
      card: {
        title: "Kütüphanede 3 Altın Kural",
        icon: "📚🤫",
        desc: "Kütüphanede uyulması gerekenler:",
        items: [
          { bold: "1. Sessiz Ol", text: "Kitap okuyanların dikkatini dağıtmamak için konuşulmaz, fısıldanır." },
          { bold: "2. Kitapları Özenle Tut", text: "Sayfaları katlama, yırtma; kitap ayracı kullan ve temiz ellerle oku." },
          { bold: "3. Aldığın Yere Koy", text: "Okuman bitince kitabı aldığın rafa düzenli biçimde geri yerleştir." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#7dd3fc" text-anchor="middle">KÜTÜPHANELER HAFTASI & BAHAR GÖZLEMİ</text>

        <!-- Kütüphane Rafı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="155" y="115" font-size="28" text-anchor="middle">📚📖✨</text>
        <line x1="80" y1="130" x2="230" y2="130" stroke="#475569" stroke-width="3"/>
        <!-- Kitap Sırtları -->
        <rect x="90" y="135" width="18" height="45" fill="#ef4444" rx="2"/>
        <rect x="112" y="140" width="16" height="40" fill="#3b82f6" rx="2"/>
        <rect x="132" y="130" width="22" height="50" fill="#10b981" rx="2"/>
        <rect x="158" y="138" width="16" height="42" fill="#f59e0b" rx="2"/>
        <rect x="178" y="132" width="20" height="48" fill="#8b5cf6" rx="2"/>
        <line x1="80" y1="185" x2="230" y2="185" stroke="#475569" stroke-width="3"/>
        <text x="155" y="205" font-size="9" font-weight="bold" fill="#e0f2fe" text-anchor="middle">Sessizce Oku & Koru</text>

        <!-- Bahar Gezi & Tomurcuk (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🔍🌳🌸🌤️</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#86efac" text-anchor="middle">Doğada Bahar Gezisi</text>
        <text x="385" y="175" font-size="9" fill="#cbd5e1" text-anchor="middle">Tomurcukları büyüteçle incele</text>
        <text x="385" y="195" font-size="9" fill="#cbd5e1" text-anchor="middle">Havanın ılıdığını hisset</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Kitap okuyan çocuk hayal eder, doğayı izleyen çocuk anlar!</text>
      </svg>`
    },
    section2: {
      title: "Görsel Okuma ve Doğa Keşfi",
      subtitle: "Gözlerimiz bir büyüteç gibi detayları yakalar.",
      cards: [
        {
          badge: "Görsel Okuma",
          title: "Resimde Ne Var?",
          desc: "Bahar tablosunda saklanan arıyı, göldeki ördeği ve elma toplayan çocuğu bulma."
        },
        {
          badge: "Bahar Gezisi",
          title: "Ağaçtaki Değişim",
          desc: "Kışın çıplak olan dalların yeşil yapraklarla nasıl dolduğunu bahçede gözlemleme."
        },
        {
          badge: "Dikte",
          title: "Bahar Cümlesi",
          desc: "'İlkbahar geldi, ağaçlar çiçek açtı.' cümlesini tahtadan bakıp deftere güzelce yazma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Atölye: 'Kendi Çiçekli Kitap Ayracım'",
      desc: "Her öğrenci sert kartondan bir şerit keser; üzerine kenar süsü örüntüsü çizip püskül takar.",
      steps: [
        { title: "Karton Kesimi", desc: "Kitap boyunda renkli karton şerit hazırlama." },
        { title: "Bahar Deseni", desc: "Papatya ve yaprak desenleriyle ayracı renklendirme." },
        { title: "Kitabına Tak", desc: "Ayracı masal kitabının içine koyarak 'Ben bir kitap kurduyum' deme." }
      ],
      criteria: [
        "Kütüphanede sessiz olma ve kitapları koruma bilinci sergileme",
        "Gösterilen görseldeki ayrıntıları fark edip ifade edebilme",
        "Doğadaki mevsimsel değişimleri doğru gözlemleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Doğa Yürüyüşü Güvenliği",
      safetyRules: [
        { bold: "Gruptan Ayrılma", text: "Okul bahçesinde veya parkta gözlem yaparken öğretmenimizin yanından ve sınıf grubundan asla uzaklaşmayız." }
      ],
      myths: [
        { wrong: "Kitapların sayfalarını kıvırarak işaretlemek kitaba zarar vermez.", correct: "Hayır! Sayfaları katlamak kitabı yıpratır; bunun yerine her zaman kitap ayracı kullanılmalıdır." }
      ]
    },
    quiz: {
      question: "Kütüphaneler Haftası'nda öğrendiğimiz kütüphane kurallarından EN ÖNEMLİSİ hangisidir?",
      options: [
        { text: "A) Sessiz olmak ve kitapları yıpratmadan özenle korumak 📚🤫", isCorrect: true },
        { text: "B) Kütüphanede top oynamak ve koşmak", isCorrect: false },
        { text: "C) Kitap sayfalarını yırtıp uçak yapmak", isCorrect: false },
        { text: "D) Raflardaki kitapları yere saçmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Kütüphane <strong>sessizliğin ve bilginin evidir</strong>; kitaplar özenle korunur ve fısıltıyla konuşulur!"
    },
    summaryRules: [
      { bold: "Kitapları Sev", text: "Kitap senin en sadık dostundur." },
      { bold: "Doğayı İncele", text: "İlkbaharın uyanışını fark et." },
      { bold: "Haftaya Kayıkçı Tekerlemesi!", text: "Önümüzdeki hafta 'Fış Fış Kayıkçı' tekerlemesi, sorun çözme ve şarkılar var!" }
    ],
    homework: "Evde en sevdiğiniz hikâye kitabının arasına yaptığınız ayracı koyun ve ailenize okuyun.",
    nextWeekPreview: "'Fış Fış Kayıkçı' Tekerlemesi, Sorun Çözme, Birlikte Şarkı Söyleme ve Soru Sorma!"
  },

  // 30. HAFTA
  {
    week: 30,
    date: "05 - 11 Nisan",
    hours: "4 Ders Saati",
    unit: "Tekerlemeler, Sorun Çözme ve Merak Dünyası",
    unitBadge: "30. Tema: Ritim & Çözüm",
    unitTheme: "tema-4",
    title: "30. Hafta: 'Fış Fış Kayıkçı', Sorun Çözme ve Şarkılar",
    subtitle: "Ritmik Kayıkçı Tekerlemesi, Konu Dışına Çıkmadan Soru Sorma ve Şarkı",
    outcomeCode: "SE.1.30 (Ritim & Akıcı Konuşma)",
    targetSkill: "Tekerlemeleri Beden Hareketiyle Söyleme, Sorunlara Akılcı Çözüm Bulma, Doğru Soru Sorma",
    curiosityQuestion: "'Fış fış kayıkçı, kürekleri çekiyor tıkır tıkır!' derken iki arkadaş el ele tutuşup nasıl sallanır?",
    roadmap: [
      { title: "'Fış Fış Kayıkçı' Tekerlemesi", desc: "İkişerli eşleşip el ele tutuşarak kayık gibi sallanma ve tekerlemeyi söyleme." },
      { title: "Sorun Çözme Çemberi", desc: "Oyun sahasında yaşanan anlaşmazlıkları barışçıl ve adil biçimde çözme." },
      { title: "Doğru Soru Sorma", desc: "Konudan sapmadan merak ettiği şeyi nezaketle ve akıcı biçimde sorma." },
      { title: "Toplu Şarkı Saati", desc: "Bahar ve çocuk şarkılarını alkışlarla coşkuyla seslendirme." }
    ],
    section1: {
      title: "'Fış Fış Kayıkçı': İki Kişilik Ritim Dansı",
      subtitle: "Tekerleme söylerken bir ileri bir geri sallanır, denizde yüzen bir kayık oluruz.",
      layout: "split-visual",
      card: {
        title: "Kayıkçı Tekerlemesi Kuralları",
        icon: "🛶🌊",
        desc: "Nasıl oynanır?",
        items: [
          { bold: "1. Eşleş ve Otur", text: "Arkadaşınla yüz yüze bağdaş kurarak otur ve ellerini sıkıca tut." },
          { bold: "2. Birlikte Sallan", text: "Biri geriye yaslanırken diğeri öne eğilir; kayığın kürek çekmesi taklit edilir." },
          { bold: "3. Sözleri Söyle", text: "'Fış fış kayıkçı / Kayıkçının küreği / Hop hop eder yüreği / Akşama fincan böreği!'" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#7dd3fc" text-anchor="middle">'FIŞ FIŞ KAYIKÇI' TEKERLEME OYUNU</text>

        <!-- Kayık ve Çocuklar (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#075985" stroke="#38bdf8" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🛶👧🤝👦</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">El Ele Sallanıyoruz</text>
        <text x="155" y="175" font-size="9" fill="#e0f2fe" text-anchor="middle">'Fış fış kayıkçı...'</text>
        <text x="155" y="195" font-size="9" fill="#e0f2fe" text-anchor="middle">Ritimle kürek çekiyoruz</text>

        <!-- Sorun Çözme & Soru Sorma (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#075985" stroke="#facc15" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">❓💡🤝</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Merak Et & Soru Sor</text>
        <text x="385" y="175" font-size="9" fill="#e0f2fe" text-anchor="middle">Konudan sapmadan sor</text>
        <text x="385" y="195" font-size="9" fill="#e0f2fe" text-anchor="middle">Anlaşmazlığı konuşarak çöz</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Tekerleme arkadaşlığı güçlendirir, doğru soru aklı aydınlatır!</text>
      </svg>`
    },
    section2: {
      title: "Akıcı Soru Sorma ve Problem Çözme",
      subtitle: "Merak eden çocuk öğrenir, konuşan çocuk uzlaşır.",
      cards: [
        {
          badge: "İletişim",
          title: "Konu Dışına Çıkma",
          desc: "Orman konuşulurken uzaydan bahsetmemek; anlatılan konuya odaklı soru sorma."
        },
        {
          badge: "Barış",
          title: "Haklıyı Dinle",
          desc: "Topu kimin atacağına taş-kâğıt-makas veya sayışma yaparak adaletle karar verme."
        },
        {
          badge: "Müzik",
          title: "Bahar Şarkıları",
          desc: "Tüm sınıfın koro halinde neşeyle yeni öğrendikleri çocuk şarkısını söylemesi."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Kayıkçılar Yarışması ve Soru Çemberi'",
      desc: "İkişerli gruplar sırayla 'Fış Fış Kayıkçı' oyununu sahneler; ardından merak edilen bir konuda soru-cevap yapılır.",
      steps: [
        { title: "Kayık Eşleşmesi", desc: "Her öğrencinin yanındaki arkadaşıyla el ele tutuşması." },
        { title: "Ritim Performansı", desc: "Sallanarak tekerlemeyi ritimle tamamlama." },
        { title: "Meraklı Sorular", desc: "'Neden yağmur yağar?' gibi bir konuda konu dışına çıkmadan soru sorma." }
      ],
      criteria: [
        "Tekerlemeyi hareketle birleştirerek eksiksiz söyleyebilme",
        "Soru sorarken ve yanıtlarken konu dışına çıkmadan akıcı konuşabilme",
        "Arkadaşıyla iş birliği ve ritim uyumu sergileyebilme"
      ]
    },
    tips: {
      safetyTitle: "Hareket Güvenliği",
      safetyRules: [
        { bold: "Sert Çekme", text: "Kayıkçı oyununda arkadaşımızın ellerini çok sert çekmemeli, dengesini bozup kafasını arkaya vurmasına sebep olmamalıyız." }
      ],
      myths: [
        { wrong: "Soru sormak ayıp veya bilgisizlik göstergesidir.", correct: "Hayır! En zeki ve en başarılı insanlar soru sorarak öğrenen meraklı çocuklardır." }
      ]
    },
    quiz: {
      question: "'Fış fış kayıkçı / Kayıkçının küreği / Hop hop eder yüreği...' tekerlemesinin son dizesi hangisidir?",
      options: [
        { text: "A) Akşama fincan böreği! 🥧", isCorrect: true },
        { text: "B) Akşama domates çorbası!", isCorrect: false },
        { text: "C) Sabah oldu uyanalım!", isCorrect: false },
        { text: "D) Kaç kaç kaç!", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Tekerlememiz neşeyle <strong>'Akşama fincan böreği!'</strong> denilerek sonlanır!"
    },
    summaryRules: [
      { bold: "Ritim Tut", text: "Arkadaşınla el ele kayıkçı ol." },
      { bold: "Merak Et", text: "Konuyla ilgili güzel sorular sor." },
      { bold: "Haftaya Ront Çalışması!", text: "Önümüzdeki hafta müzikli dans (ront), olay sıralama ve eğlenceli çizgi film var!" }
    ],
    homework: "Evde kardeşiniz veya ailenizle 'Fış Fış Kayıkçı' oyununu el ele tutuşup oynayın.",
    nextWeekPreview: "Müzikli Dans (Ront Çalışması), Olayları Sıralama, Sınıf Oyunları ve Eğitici Çizgi Film!"
  },

  // 31. HAFTA
  {
    week: 31,
    date: "12 - 18 Nisan",
    hours: "4 Ders Saati",
    unit: "Müzikli Dans (Ront), Oyun ve Film Saati",
    unitBadge: "31. Tema: Dans & Hareket",
    unitTheme: "tema-4",
    title: "31. Hafta: Ront Çalışması, Oyun Oynama ve Çizgi Film",
    subtitle: "Müzikli Hareketler, Görselleri Sıralama ve 23 Nisan Öncesi Provalar",
    outcomeCode: "SE.1.31 (Müzikli Hareket & Sıralama)",
    targetSkill: "Müziğe Uygun Ront Hareketleri Yapabilme, Olayları Neden-Sonuç Sırasına Dizme, Film Analizi",
    curiosityQuestion: "Müzik başladığında ellerimiz, ayaklarımız ve bedenimiz nasıl bir masal anlatır gibi dans eder?",
    roadmap: [
      { title: "Ront Nedir?", desc: "Müzik eşliğinde el ele tutuşarak yapılan şarkılı dans ve ritmik figürler." },
      { title: "23 Nisan Ront Provası", desc: "Gelecek haftaki 23 Nisan Çocuk Bayramı için çiçek ve bayrak rontu çalışma." },
      { title: "Olayları Sıralama", desc: "Tırtılın kozaya girmesi ve kelebek olarak uçması evrelerini sıraya koyma." },
      { title: "Eğlenceli Çizgi Film", desc: "Dostluk ve yardımlaşma konulu kısa çizgi filmi izleyip kuralları konuşma." }
    ],
    section1: {
      title: "Ront Çalışması: Müziğin Bedenle Dansı",
      subtitle: "Şarkı söylerken adımlarımızı sayar, çember olur neşeyle döneriz.",
      layout: "split-visual",
      card: {
        title: "Ront Yaparken 3 İncelik",
        icon: "💃🕺",
        desc: "Ront dansında:",
        items: [
          { bold: "1. Ritme Uy", text: "Davul veya müzik temposuna göre adımlarını ayarla; öne, arkaya, yana adım at." },
          { bold: "2. Eşinle Uyumlu Ol", text: "Çemberdeki arkadaşlarının ellerini bırakma, mesafeni koru." },
          { bold: "3. Gülümse ve Selam Ver", text: "Dans bittiğinde seyircilere başınla ve tebessümle zarif bir selam ver." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#ec4899" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#f472b6" text-anchor="middle">MÜZİKLİ DANS (RONT) VE OLAYLARI SIRALAMA</text>

        <!-- Ront Çemberi Dansı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#f472b6" stroke-width="2"/>
        <circle cx="155" cy="135" r="35" fill="none" stroke="#f472b6" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="155" y="105" font-size="20" text-anchor="middle">👧</text>
        <text x="190" y="140" font-size="20" text-anchor="middle">👦</text>
        <text x="155" y="175" font-size="20" text-anchor="middle">🧒</text>
        <text x="120" y="140" font-size="20" text-anchor="middle">👧</text>
        <text x="155" y="142" font-size="12" text-anchor="middle">🎶</text>
        <text x="155" y="205" font-size="9.5" font-weight="bold" fill="#fbcfe8" text-anchor="middle">Ront Çemberi</text>

        <!-- Kelebeğin Oluşumu (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#38bdf8" stroke-width="2"/>
        <text x="385" y="108" font-size="10" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Olay Sıralama: Kelebek</text>
        <text x="325" y="145" font-size="22" text-anchor="middle">🐛</text>
        <text x="355" y="145" font-size="12" fill="#38bdf8" text-anchor="middle">→</text>
        <text x="385" y="145" font-size="22" text-anchor="middle">🛖</text>
        <text x="415" y="145" font-size="12" fill="#38bdf8" text-anchor="middle">→</text>
        <text x="445" y="145" font-size="22" text-anchor="middle">🦋</text>
        <text x="385" y="185" font-size="8.5" fill="#e0f2fe" text-anchor="middle">1.Tırtıl → 2.Koza → 3.Kelebek</text>
        <text x="385" y="205" font-size="8.5" fill="#e0f2fe" text-anchor="middle">Neden - Sonuç Bağı</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#f472b6" text-anchor="middle">Ront dansı beden koordinasyonunu, sıralama zihnimizi geliştirir!</text>
      </svg>`
    },
    section2: {
      title: "Oyun Kuralları ve Çizgi Film Keyfi",
      subtitle: "Birlikte hareket eder, filmden güzel dersler çıkarırız.",
      cards: [
        {
          badge: "Ritim",
          title: "Adım - Alkış - Dön",
          desc: "Müziğin ritmine göre iki adım sağa, iki alkış ve etrafında bir tam tur dönme."
        },
        {
          badge: "Sıralama",
          title: "Yumurta ve Kuş",
          desc: "Yuvadaki yumurtanın çatlaması, yavru kuşun beslenmesi ve uçmasını sıraya dizme."
        },
        {
          badge: "Film Saati",
          title: "İzleme Adabı",
          desc: "Çizgi film izlerken sessiz olmak, filmin kahramanlarını ve mekanını fark etmek."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Prova: '23 Nisan Ront Dansı İlk Adımlar'",
      desc: "Sınıf daire olur, 'Ateş Böceği' veya bayrak şarkısı eşliğinde ront figürlerini prova eder.",
      steps: [
        { title: "Çember Oluştur", desc: "Tüm sınıfın el ele tutuşarak büyük bir çember olması." },
        { title: "Hareketleri Yap", desc: "Öğretmenin gösterdiği adım-alkış figürlerini müzikle eşleştirme." },
        { title: "Selamlama", desc: "Şarkı bitiminde el sallayarak ve gülümseyerek selam durma." }
      ],
      criteria: [
        "Müziğin ritmine uygun ront ve dans hareketlerini yapabilme",
        "Canlıların büyüme evrelerini kronolojik sıraya koyabilme",
        "Film izleme kurallarına uyup ana fikri söyleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Dans ve Hareket Güvenliği",
      safetyRules: [
        { bold: "Çemberde İtme Yok", text: "Ront dönerken arkadaşlarımızın kollarını çekiştirmemeli, ayağı takılıp düşmemesi için uygun aralık bırakmalıyız." }
      ],
      myths: [
        { wrong: "Ront sadece kızların yaptığı bir etkinliktir.", correct: "Hayır! Ront kız ve erkek tüm öğrencilerin birlikte neşeyle yaptığı harika bir müzikli beden eğitimidir." }
      ]
    },
    quiz: {
      question: "Müzik eşliğinde el ele tutuşup ritmik hareketler ve adımlarla yapılan toplu çocuk dansına ne ad verilir?",
      options: [
        { text: "A) Ront çalışması 💃🕺🎶", isCorrect: true },
        { text: "B) Koşu yarışı", isCorrect: false },
        { text: "C) Sessiz sinema", isCorrect: false },
        { text: "D) Halat çekme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Şarkı eşliğinde çember oluşturarak yapılan müzikli oyun ve danslara <strong>ront</strong> denir!"
    },
    summaryRules: [
      { bold: "Müzikle Dans Et", text: "Ront ile bedenini ritme bırak." },
      { bold: "Olayları Sırala", text: "Tırtıldan kelebeğe hayatın akışını anla." },
      { bold: "Haftaya 23 Nisan Bayramı!", text: "Önümüzdeki hafta 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı coşkusu başlıyor!" }
    ],
    homework: "Öğrendiğiniz ront adımlarını evde ailenize gösterip birlikte müzikle dönün.",
    nextWeekPreview: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı, Bahar Gezisi, Ront ve Çocuk Şarkıları!"
  }
];

window.CURRICULUM_TERM_2_PART1_GRADE1 = CURRICULUM_TERM_2_PART1_GRADE1;
