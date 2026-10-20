/**
 * 5. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem 1. Bölüm (Hafta 20 - 31)
 * Türkiye Yüzyılı Maarif Modeli
 */

const CURRICULUM_TERM_2_PART1_GRADE5 = [
  // 20. HAFTA
  {
    week: 20,
    date: "25 - 31 Ocak",
    hours: "Sömestr",
    unit: "SÖMESTR TATİLİ: Algoritma Macera Bülteni",
    unitBadge: "Sömestr 1",
    unitTheme: "tema-6",
    title: "Sömestr 1. Hafta: Algoritma Macera Bülteni",
    subtitle: "Bilgisayarsız Kodlama (Unplugged Coding), Mantık Bulmacaları ve Sıralama Oyunları",
    outcomeCode: "Sömestr & Kodlama Hazırlığı",
    targetSkill: "Algoritmik Düşünme & Problem Çözme",
    curiosityQuestion: "Bilgisayar olmadan, sadece kâğıt-kalem ve adım adım yönergelerle bir robot gibi hareket edebilir misiniz?",
    roadmap: [
      { title: "Bilgisayarsız Kodlama Nedir?", desc: "Ekran olmadan mantıksal kurallarla kodlama mantığını öğrenme." },
      { title: "Sıralı Adımlar (Algoritma)", desc: "Çorap giymeden ayakkabı giyilemez kuralı: Mantıklı sıra!" },
      { title: "Labirent Çözme Bulmacaları", desc: "Kâğıt üzerinde sağa, sola, yukarı oklarıyla hedefe ulaşma." },
      { title: "2. Dönem Kodlama Heyecanı", desc: "Şubat ayında başlayacak Scratch serüvenine zihinsel hazırlık." }
    ],
    section1: {
      title: "Algoritma: Hayatımızın Gizli Haritası",
      subtitle: "Bir işi başarmak için takip edilen sonlu, net ve sıralı adımlar bütünü.",
      layout: "split-visual",
      card: {
        title: "Günlük Hayat Algoritmaları",
        icon: "🧭",
        desc: "Farkında olmadan her gün algoritma çalıştırıyoruz:",
        items: [
          { bold: "Sabah Uyanma", text: "1. Uyan -> 2. Yataktan kalk -> 3. Elini yüzünü yıka -> 4. Kahvaltı yap." },
          { bold: "Sıranın Önemi", text: "Eğer yüzünü yıkamadan evden çıkarsan veya ayakkabıyı giyip çorabı üstüne giymeye çalışırsan algoritma çöker (Hata / Bug)!" },
          { bold: "Netlik Kuralı", text: "Her adım o kadar açık olmalıdır ki bir robot bile aynen uygulayabilsin." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        
        <rect x="50" y="45" width="80" height="40" rx="20" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
        <text x="90" y="70" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">BAŞLA</text>

        <path d="M90 85 V105" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow)"/>

        <rect x="50" y="105" width="80" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="90" y="130" fill="#bae6fd" font-size="10" text-anchor="middle">Adım At</text>

        <path d="M130 125 H175" stroke="#38bdf8" stroke-width="2.5"/>

        <polygon points="220,105 260,125 220,145 180,125" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="220" y="129" fill="#fde68a" font-size="9" text-anchor="middle">Engel var mı?</text>

        <path d="M260 125 H300" stroke="#f59e0b" stroke-width="2"/>
        <text x="280" y="118" fill="#fde68a" font-size="8">Evet</text>

        <rect x="300" y="105" width="65" height="40" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="332" y="130" fill="#fecdd3" font-size="9" text-anchor="middle">Zıpla</text>

        <path d="M220 145 V175 H170" stroke="#34d399" stroke-width="2"/>
        <text x="235" y="165" fill="#a7f3d0" font-size="8">Hayır</text>

        <rect x="90" y="165" width="80" height="35" rx="18" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="130" y="187" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">BİTİR</text>
      </svg>`,
      caption: "Basit Bir Günlük Yaşam Karar ve Adım Akış Şeması"
    },
    section2: {
      title: "Sömestr Eğlencesi: 'Beni Bir Robot Gibi Yönet'",
      subtitle: "Evde ailenizle oynayabileceğiniz harika bir kodlama oyunu.",
      layout: "cards-2",
      cards: [
        {
          title: "Oyun Kuralları (Robot Anne/Baba)",
          icon: "🤖",
          desc: "Rol paylaşımı yapın:",
          items: [
            { bold: "Robot Rolü", text: "Gözlerini kapatsın veya sadece kendisine söylenen komutları harfiyen uygulasın." },
            { bold: "Programcı Rolü (Siz)", text: "Ona sadece 4 komut verin: '1 Adım İleri', 'Sağa Dön', 'Sola Dön', 'Al'." },
            { bold: "Hedef", text: "Salondaki yastığı alıp masanın üzerine koydurmaya çalışın!" }
          ]
        },
        {
          title: "Neden Bu Oyunu Oynuyoruz?",
          icon: "💡",
          desc: "Bilgisayar gibi düşünme pratiği:",
          items: [
            { bold: "Bilgisayarlar Sezemez", text: "İnsanlar 'şuraya git' deyince anlar ama bilgisayara kaç santim, hangi açıyla gideceğini söylemek zorundayız." },
            { bold: "Eksik Komut = Kaza", text: "'Sağa dön' demezseniz robot duvara toslar!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Tatil Atölyesi: 'Ayran Yapma Algoritması'",
      subtitle: "Adım adım lezzetli bir ayran yapmanın kusursuz kodunu yazıyoruz.",
      steps: [
        { title: "Başla ve Malzemeler", desc: "1. Başla -> 2. Yoğurt, su, tuz, bardak ve kaşığı hazırla." },
        { title: "İşlem Adımları", desc: "3. Kaseye 3 kaşık yoğurt koy -> 4. 1 çay kaşığı tuz ekle -> 5. 1 bardak su dök -> 6. Köpürene kadar karıştır." },
        { title: "Bardağa Koy ve Bitir", desc: "7. Ayranı bardağa dök -> 8. Afiyetle iç -> 9. Bitir." }
      ],
      criteria: [
        "Algoritmaların 'Başla' ile başlayıp 'Bitir' ile sonlandığını bilme",
        "Adımların sırasının mantıksal önemini açıklayabilme",
        "Eksik bir adım olduğunda sonucun bozulacağını fark etme"
      ]
    },
    tips: {
      safetyTitle: "Algoritmanın 3 Altın Kuralı",
      safetyRules: [
        { bold: "1. Başlangıcı ve Sonu Olmalı", text: "Sonsuz döngüde kaybolmamalı, mutlaka bitmelidir." },
        { bold: "2. Adımlar Net Olmalı", text: "'Biraz karıştır' yerine '10 saniye karıştır' denmelidir." },
        { bold: "3. Sıralı Olmalı", text: "Pişirmeden yemek yenemez." }
      ],
      myths: [
        { wrong: "Algoritma sadece matematik dersinde ve bilgisayar ekranında vardır.", correct: "Yemek tariflerinden lego yapım kılavuzlarına kadar hayatın her anında algoritma kullanırız!" }
      ]
    },
    quiz: {
      question: "Bir problemin çözümü için tasarlanan, 'BAŞLA' ile başlayıp 'BİTİR' ile sonlanan adım adım sıralı yönergeler listesine ne ad verilir?",
      options: [
        { text: "A) Algoritma", isCorrect: true },
        { text: "B) Monitör", isCorrect: false },
        { text: "C) Ethernet Kablosu", isCorrect: false },
        { text: "D) Flash Bellek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Belirli bir amaca ulaşmak için adım adım yazılan sıralı çözüm yoluna <strong>Algoritma</strong> denir."
    },
    summaryRules: [
      { bold: "Algoritma = Plan", text: "Adım adım çözüm yolu." },
      { bold: "Sıralama Hayatidir", text: "Adımların yeri karıştırılamaz." },
      { bold: "Tatilin Tadını Çıkarın", text: "Ailenizle kodlama oyunları oynayın." }
    ],
    homework: "Kendi sabah okula hazırlanma algoritmanızı en az 6 adımda defterinize yazın.",
    nextWeekPreview: "Sömestr 2. Hafta: Bilişim Mantık Bulmacaları ve Güvenli İnternet Hazırlığı!"
  },

  // 21. HAFTA
  {
    week: 21,
    date: "01 - 07 Şubat",
    hours: "Sömestr",
    unit: "SÖMESTR TATİLİ: Dijital Zekâ Oyunları",
    unitBadge: "Sömestr 2",
    unitTheme: "tema-6",
    title: "Sömestr 2. Hafta: Dijital Zekâ Oyunları",
    subtitle: "Problem Parçalama (Ayrıştırma), Akıl Yürütme ve 2. Dönem Kodlama Oryantasyonu",
    outcomeCode: "Sömestr & Problem Çözme",
    targetSkill: "Eleştirel Düşünme & Problem Parçalama",
    curiosityQuestion: "Karşınızda kocaman, çözülmesi imkânsız gibi görünen devasa bir problem olduğunda onu nasıl kolayca çözebilirsiniz?",
    roadmap: [
      { title: "Büyük Problemi Parçala", desc: "Kocaman bir pastayı dilimleyip yemek gibi: Ayrıştırma (Decomposition)." },
      { title: "Mantık ve Akıl Yürütme", desc: "İpuçlarından yola çıkarak doğru sonuca ulaşma." },
      { title: "Karakter ve Sahne Tasarımı", desc: "Scratch'te kendi oyun kahramanımızı hayal etme." },
      { title: "2. Dönem Başlıyor!", desc: "Haftaya okullar açılıyor ve doğrudan kodlamaya giriyoruz." }
    ],
    section1: {
      title: "Yazılımcı Süper Gücü: Problemi Parçalara Ayırma",
      subtitle: "Büyük bir projeyi küçük, kolay parçalara bölerek adım adım fethedin.",
      layout: "cards-2",
      cards: [
        {
          title: "Parçalama (Decomposition) Nedir?",
          icon: "🧩",
          desc: "Karmaşık işleri basitleştirme sanatı:",
          items: [
            { bold: "Örnek: Bir Bilgisayar Oyunu Yapmak", text: "Birdenbire koca bir oyun yapılamaz!" },
            { bold: "Parça 1", text: "Kahramanın çizimi ve yürümesi." },
            { bold: "Parça 2", text: "Düşmanların ve engellerin hareketi." },
            { bold: "Parça 3", text: "Skor sayacı ve can sistemi." },
            { bold: "Sonuç", text: "Küçük parçalar birleşince devasa bir oyun ortaya çıkar!" }
          ]
        },
        {
          title: "Örüntü Tanıma (Pattern Recognition)",
          icon: "🔍",
          desc: "Benzerlikleri keşfetme:",
          items: [
            { bold: "Tekrar Eden İşler", text: "Daha önce çözdüğünüz bir probleme benzeyen bir durum var mı?" },
            { bold: "Hazır Çözüm", text: "Daha önce kare çizmeyi öğrendiyseniz, dikdörtgen çizmeyi 1 dakikada çözersiniz." }
          ]
        }
      ]
    },
    section2: {
      title: "2. Dönem İçin Scratch Hazırlığı",
      subtitle: "MIT Üniversitesi tarafından çocuklar için geliştirilen renkli kodlama platformu.",
      layout: "cards-2",
      cards: [
        {
          title: "Scratch Nedir?",
          icon: "🐱",
          desc: "Renkli lego bloklarıyla programlama:",
          items: [
            { bold: "Yazım Hatası Yok", text: "Noktalı virgül veya parantez unutma derdi yok; bloklar birbirine lego gibi oturur." },
            { bold: "Görsel ve Eğlenceli", text: "Kedi kuklası, uzay sahneleri, sesler ve müzikler." },
            { bold: "Dünya Çapında", text: "Milyonlarca öğrencinin kod paylaştığı küresel kütüphane." }
          ]
        },
        {
          title: "Laboratuvarda Ne Yapacağız?",
          icon: "🎮",
          desc: "2. Dönem hedeflerimiz:",
          items: [
            { bold: "Animasyonlar", text: "Dans eden, konuşan karakterler." },
            { bold: "Oyunlar", text: "Labirent, meyve yakalama, yarış oyunları." },
            { bold: "Milli Bayram Projeleri", text: "12 Mart, 18 Mart ve 23 Nisan dijital kutlamaları." }
          ]
        }
      ]
    },
    workshop: {
      title: "Tatil Atölyesi: 'Kendi Oyun Kahramanını Çiz'",
      subtitle: "2. dönem Scratch'te yöneteceğiniz kahramanın eskizini kâğıda çizin.",
      steps: [
        { title: "Kahramanını Hayal Et", desc: "Bir robot mu, astronot mu, sevimli bir sincap mı?" },
        { title: "Özelliklerini Yaz", desc: "Adı ne? Süper gücü ne? Hangi renkte?" },
        { title: "Çizimini Yap", desc: "Kâğıda önden ve yandan görünüşünü çizip yanınızda getirin." }
      ],
      criteria: [
        "Problemleri alt bileşenlerine ayırabilme bilinci",
        "Yaratıcı bir karakter konsepti tasarlayabilme",
        "2. Dönem kodlama dersine yüksek motivasyonla başlama"
      ]
    },
    tips: {
      safetyTitle: "Okula Dönüş Hatırlatması",
      safetyRules: [
        { bold: "Çantanızı ve Notlarınızı Hazırlayın", text: "Bilişim defterinizi, kalemlerinizi hazırlayın; haftaya sınıfımızda buluşuyoruz!" }
      ],
      myths: [
        { wrong: "Sadece çok zor matematik bilenler kod yazabilir.", correct: "Kodlama bir dil öğrenmek gibidir; mantığını anlayan her 5. sınıf öğrencisi harika oyunlar kodlayabilir." }
      ]
    },
    quiz: {
      question: "Karmaşık ve büyük bir problemi daha kolay çözebilmek için onu daha küçük ve yönetilebilir parçalara ayırma yöntemine ne ad verilir?",
      options: [
        { text: "A) Problemi Parçalara Ayırma (Ayrıştırma)", isCorrect: true },
        { text: "B) Bilgisayarı Kapatma", isCorrect: false },
        { text: "C) Yazıcıdan Çıktı Alma", isCorrect: false },
        { text: "D) Dosya Uzantısını Değiştirme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> <strong>Ayrıştırma (Decomposition)</strong>, yazılımcıların ve mühendislerin en temel problem çözme stratejisidir."
    },
    summaryRules: [
      { bold: "Büyük İşi Parçala", text: "Adım adım kolayca çöz." },
      { bold: "Tatil Bitti, Macera Başlıyor", text: "Haftaya kodlama dersindeyiz." },
      { bold: "Scratch Bizi Bekler", text: "Kendi oyunlarımızı üreteceğiz." }
    ],
    homework: "Scratch sitesini (scratch.mit.edu) ailenizle birlikte ziyaret edip örnek oyunları inceleyin.",
    nextWeekPreview: "Problem Çözme ve Günlük Yaşam Algoritmaları: Sözel Adımlar ve Mantık!"
  },

  // 22. HAFTA
  {
    week: 22,
    date: "08 - 14 Şubat",
    hours: "2 Saat",
    unit: "6. Tema: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Problem Çözme & Günlük Yaşam Algoritmaları",
    subtitle: "Problem Nedir? Problemi Anlama, Çözüm Yolları ve Sözel Algoritma Adımları",
    outcomeCode: "BTY.5.6.1",
    targetSkill: "Problemi Yapılandırma & Sözel Algoritma",
    curiosityQuestion: "Bir labirentin çıkışını bulurken rastgele sağa sola koşmak mı yoksa sağ elinizi duvardan hiç ayırmadan yürümek mi sizi hedefe götürür?",
    roadmap: [
      { title: "Problem Nedir?", desc: "Hedefe ulaşmamızı engelleyen, çözülmesi gereken durumlar." },
      { title: "Problem Çözme Adımları", desc: "1. Problemi Anla -> 2. Plan Yap -> 3. Planı Uygula -> 4. Değerlendir." },
      { title: "Sözel Algoritma", desc: "Konuşma dilimizle adım adım yazılan çözüm reçetesi." },
      { title: "Hata Ayıklama (Debugging)", desc: "Algoritmadaki eksik veya ters adımları bulup düzeltme." }
    ],
    section1: {
      title: "Problem Çözmenin 4 Altın Adımı (Polya Yöntemi)",
      subtitle: "Dünyanın en büyük bilim insanlarının kullandığı problem çözme formülü.",
      layout: "cards-4",
      cards: [
        {
          title: "1. Problemi Anla",
          icon: "🧐",
          desc: "Bize ne verilmiş, bizden ne isteniyor? Eksik bilgi var mı?"
        },
        {
          title: "2. Plan Yap",
          icon: "📝",
          desc: "Daha önce benzer bir durum yaşadın mı? Hangi adımları izleyeceksin?"
        },
        {
          title: "3. Planı Uygula",
          icon: "⚙️",
          desc: "Hazırladığın adımları sırayla, acele etmeden teker teker yürüt."
        },
        {
          title: "4. Değerlendir",
          icon: "✅",
          desc: "Çözüm gerçekten çalıştı mı? Daha kısa ve kolay bir yolu var mıydı?"
        }
      ]
    },
    section2: {
      title: "Sözel Algoritma Örneği: Diş Fırçalama",
      subtitle: "Bir robotun dişlerini fırçalayabilmesi için gereken kusursuz komutlar.",
      layout: "split-visual",
      card: {
        title: "Adım Adım Diş Fırçalama Algoritması",
        icon: "🪥",
        desc: "Sıralı yönergeler:",
        items: [
          { bold: "Adım 1", text: "Başla." },
          { bold: "Adım 2", text: "Diş fırçasını ve macununu al." },
          { bold: "Adım 3", text: "Macunun kapağını aç." },
          { bold: "Adım 4", text: "Fırçanın üzerine nohut büyüklüğünde macun sık." },
          { bold: "Adım 5", text: "Macunun kapağını kapat." },
          { bold: "Adım 6", text: "Dişlerini 2 dakika boyunca dairesel hareketlerle fırçala." },
          { bold: "Adım 7", text: "Ağzını suyla çalkala ve fırçayı yıka." },
          { bold: "Adım 8", text: "Bitir." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        
        <rect x="50" y="40" width="300" height="35" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="70" y="62" fill="#38bdf8" font-size="12" font-weight="bold">1. ADIM:</text>
        <text x="135" y="62" fill="#e2e8f0" font-size="11">Problemi Dikkatle Oku ve Anla</text>

        <rect x="50" y="85" width="300" height="35" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="70" y="107" fill="#c084fc" font-size="12" font-weight="bold">2. ADIM:</text>
        <text x="135" y="107" fill="#e2e8f0" font-size="11">Çözüm İçin Algoritma Planı Yap</text>

        <rect x="50" y="130" width="300" height="35" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="70" y="152" fill="#fde68a" font-size="12" font-weight="bold">3. ADIM:</text>
        <text x="135" y="152" fill="#e2e8f0" font-size="11">Adımları Sırayla ve Net Uygula</text>

        <rect x="50" y="175" width="300" height="35" rx="8" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="70" y="197" fill="#a7f3d0" font-size="12" font-weight="bold">4. ADIM:</text>
        <text x="135" y="197" fill="#ffffff" font-size="11" font-weight="bold">Sonucu Test Et ve Değerlendir ✓</text>
      </svg>`,
      caption: "Problem Çözme Sürecinin 4 Temel Aşaması"
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Kek Yapma Algoritması'",
      subtitle: "Karışık verilen 6 kek yapma adımını doğru mantıksal sıraya diziyoruz.",
      steps: [
        { title: "Karışık Adımları İncele", desc: "A) Fırına ver, B) Yumurta ve şekeri çırp, C) Un ve kabartma tozu ekle, D) Fırından çıkarıp servis et, E) Başla, F) Fırını 180 dereceye ayarla." },
        { title: "Sıralamayı Yap", desc: "Doğru kronolojik sırayı defterinize yazın: (E -> F -> B -> C -> A -> D)." },
        { title: "Hata Testi", desc: "Eğer fırına vermeden un eklemeyi unutsaydık ne olurdu? (Algoritmada mantık hatası!)." }
      ],
      criteria: [
        "Problemin tanımını yapabilme ve çözüm adımlarını listeleyebilme",
        "Sözel algoritma yazarken adımları numaralandırıp 'Başla/Bitir' ekleme",
        "Mantık hatalarını (Bug) tespit edip düzeltebilme"
      ]
    },
    tips: {
      safetyTitle: "Algoritma Yazarken Püf Noktası",
      safetyRules: [
        { bold: "Yoruma Yer Bırakmayın", text: "Komutlarınız o kadar net olmalı ki farklı kişiler okuduğunda hepsi tam olarak aynı şeyi yapsın." }
      ],
      myths: [
        { wrong: "Bir problemin sadece tek bir doğru algoritması vardır.", correct: "Bir hedefe giden birden fazla farklı algoritma olabilir; önemli olan en kısa, en hızlı ve hatasız olanı seçmektir." }
      ]
    },
    quiz: {
      question: "Bir algoritmanın ilk adımı ve son adımı her zaman hangi kelimelerle başlamalı ve bitmelidir?",
      options: [
        { text: "A) Aç - Kapat", isCorrect: false },
        { text: "B) Başla - Bitir", isCorrect: true },
        { text: "C) Giriş - Çıkış", isCorrect: false },
        { text: "D) İleri - Geri", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Tüm algoritmalar istisnasız olarak <strong>BAŞLA</strong> komutuyla başlar ve <strong>BİTİR</strong> komutuyla sonlanır."
    },
    summaryRules: [
      { bold: "Plan Yapmadan Başlama", text: "Önce anla, sonra çöz." },
      { bold: "Başla ve Bitir", text: "Her algoritmanın sınırı bellidir." },
      { bold: "Net Komutlar", text: "Belirsizlik hataya yol açar." }
    ],
    homework: "Sevdiğiniz bir sandviçin hazırlanma algoritmasını adım adım (en az 6 adım) defterinize yazın.",
    nextWeekPreview: "Akış Şemaları: Geometrik Simgelerle Algoritmaları Görselleştirme!"
  },

  // 23. HAFTA
  {
    week: 23,
    date: "15 - 21 Şubat",
    hours: "2 Saat",
    unit: "6. Tema: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Akış Şemaları & Geometrik Simgeler",
    subtitle: "Elips (Başla), Paralelkenar (Veri Girişi), Dikdörtgen (İşlem), Eşkenar Dörtgen (Karar)",
    outcomeCode: "BTY.5.6.2",
    targetSkill: "Görsel Modelleme & Akış Şeması Çizimi",
    curiosityQuestion: "Yazılımcılar neden binlerce satır kod yazmadan önce algoritmalarını geometrik şekillerle bir harita gibi çizerler?",
    roadmap: [
      { title: "Akış Şeması (Flowchart) Nedir?", desc: "Algoritmanın evrensel geometrik şekillerle resmedilmiş hali." },
      { title: "Temel Semboller", desc: "Elips, Paralelkenar, Dikdörtgen ve Eşkenar Dörtgen (Baklava)." },
      { title: "Akış Okları", desc: "İşlemlerin hangi yöne doğru aktığını gösteren yönlendiriciler." },
      { title: "Karar (Şart) Dallanması", desc: "Evet / Hayır seçeneklerine göre iki farklı yola ayrılma." }
    ],
    section1: {
      title: "Akış Şemasının Evrensel 4 Ana Şekli",
      subtitle: "Dünyanın neresine giderseniz gidin tüm mühendisler bu standart şekilleri kullanır.",
      layout: "cards-4",
      cards: [
        {
          title: "Elips (Oval)",
          icon: "🟢",
          desc: "BAŞLA ve BİTİR adımlarını temsil eder. Şemanın giriş ve çıkış kapısıdır."
        },
        {
          title: "Paralelkenar",
          icon: "📥",
          desc: "VERİ GİRİŞİ (Kullanıcıdan sayı, isim veya klavyeden bilgi alma)."
        },
        {
          title: "Dikdörtgen",
          icon: "⚙️",
          desc: "İŞLEM ve HESAPLAMA (Örn: Toplam = A + B, ekmek kes, motoru çalıştır)."
        },
        {
          title: "Eşkenar Dörtgen (Baklava)",
          icon: "💎",
          desc: "KARAR ve KARŞILAŞTIRMA (Şart kontrolü: Sayı > 0 mı? Evet ise sağa, Hayır ise sola)."
        }
      ]
    },
    section2: {
      title: "Örnek Şema: İki Sayının Toplamı",
      subtitle: "Bilgisayara iki sayıyı toplatmanın akış diyagramı.",
      layout: "split-visual",
      card: {
        title: "Şema Akış Basamakları",
        icon: "➕",
        desc: "Adım adım şema analizi:",
        items: [
          { bold: "1. Elips (Başla)", text: "Program çalışmaya başlar." },
          { bold: "2. Paralelkenar (Girdi)", text: "Kullanıcıdan 1. ve 2. sayıyı girmesi istenir (A ve B)." },
          { bold: "3. Dikdörtgen (Hesaplama)", text: "İşlemci Toplam = A + B işlemini yapar." },
          { bold: "4. Paralelkenar/Dalgalı Dörtgen (Çıktı)", text: "Toplam sonucu ekrana yazdırılır." },
          { bold: "5. Elips (Bitir)", text: "Program başarıyla sonlanır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        
        <rect x="150" y="30" width="100" height="30" rx="15" fill="#065f46" stroke="#34d399" stroke-width="2"/>
        <text x="200" y="50" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">BAŞLA</text>

        <path d="M200 60 V75" stroke="#94a3b8" stroke-width="2"/>

        <polygon points="140,75 250,75 240,105 130,105" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="190" y="94" fill="#bae6fd" font-size="10" text-anchor="middle">A ve B Sayısını Gir</text>

        <path d="M190 105 V120" stroke="#94a3b8" stroke-width="2"/>

        <rect x="140" y="120" width="120" height="30" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
        <text x="200" y="139" fill="#e9d5ff" font-size="10" text-anchor="middle">Toplam = A + B</text>

        <path d="M200 150 V165" stroke="#94a3b8" stroke-width="2"/>

        <polygon points="140,165 250,165 240,195 130,195" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="190" y="184" fill="#fde68a" font-size="10" text-anchor="middle">Toplamı Yazdır</text>

        <path d="M200 195 V205" stroke="#94a3b8" stroke-width="2"/>

        <rect x="150" y="205" width="100" height="25" rx="12.5" fill="#881337" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="200" y="222" fill="#fecdd3" font-size="10" font-weight="bold" text-anchor="middle">BİTİR</text>
      </svg>`,
      caption: "İki Sayıyı Toplayan Standart Akış Şeması"
    },
    workshop: {
      title: "Atölye: 'Yağmur Yağıyor mu?' Şeması Çizimi",
      subtitle: "Karar (Eşkenar Dörtgen) içeren şartlı bir akış şeması çiziyoruz.",
      steps: [
        { title: "Başla Elipsi", desc: "Kâğıdın en üstüne 'Başla' elipsini çizin." },
        { title: "Karar Kutusu", desc: "Altına eşkenar dörtgen (baklava) çizin ve içine 'Yağmur yağıyor mu?' yazın." },
        { title: "İki Yola Ayır", desc: "EVET okunu 'Şemsiye al' kutusuna götürün; HAYIR okunu 'Güneş gözlüğü tak' kutusuna götürün ve 'Bitir' elipsinde birleştirin!" }
      ],
      criteria: [
        "Elips, dikdörtgen, paralelkenar ve eşkenar dörtgenin işlevlerini bilme",
        "Akış oklarını doğru yönde bağlayabilme",
        "Karar kutusundan çıkan Evet ve Hayır dallarını doğru kurabilme"
      ]
    },
    tips: {
      safetyTitle: "Akış Şemasında Karar Kuralı",
      safetyRules: [
        { bold: "İki Çıkış Olamaz", text: "Normal dikdörtgenlerden sadece TEK bir çıkış oku çıkar; sadece Eşkenar Dörtgenden (Karar) 'Evet' ve 'Hayır' olmak üzere İKİ çıkış çıkar." }
      ],
      myths: [
        { wrong: "İstediğimiz geometrik şekli rastgele kullanabiliriz (Örn: Başla yerine yıldız çizmek).", correct: "Akış şeması sembolleri uluslararası standarttır (ISO); herkesin aynı şeyi anlaması için kurallara uymak şarttır." }
      ]
    },
    quiz: {
      question: "Akış şemalarında bir koşulu kontrol etmek, karşılaştırma yapmak ve 'EVET / HAYIR' kararı vermek için hangi geometrik şekil kullanılır?",
      options: [
        { text: "A) Dikdörtgen", isCorrect: false },
        { text: "B) Eşkenar Dörtgen (Baklava Dilimi)", isCorrect: true },
        { text: "C) Daire / Elips", isCorrect: false },
        { text: "D) Paralelkenar", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> <strong>Eşkenar Dörtgen (Baklava Dilimi)</strong>, şart ve karar durumlarını temsil eder; bir ucu 'Evet'e diğer ucu 'Hayır'a gider."
    },
    summaryRules: [
      { bold: "Elips = Başla/Bitir", text: "Şemanın sınırlarıdır." },
      { bold: "Dikdörtgen = İşlem", text: "Hesaplama ve eylemler." },
      { bold: "Baklava = Karar", text: "Evet/Hayır seçimleri." }
    ],
    homework: "Öğrencinin sınav notuna göre (Not >= 50 ise 'Geçti', değilse 'Kaldı') karar veren akış şemasını defterinize çizin.",
    nextWeekPreview: "Şartlı Durumlar (Eğer/Değilse) ve Döngüler (Sürekli Tekrarla)!"
  },

  // 24. HAFTA
  {
    week: 24,
    date: "22 - 28 Şubat",
    hours: "2 Saat",
    unit: "6. Tema: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Şart Yapıları (Eğer) & Döngüler (Tekrarla)",
    subtitle: "Karar Mekanizmaları (Eğer / Değilse) ve Tekrarlı Yapılar (Döngü / Loop)",
    outcomeCode: "BTY.5.6.3",
    targetSkill: "Mantıksal Akış & Döngü Kurgusu",
    curiosityQuestion: "Bilgisayara 1000 defa 'Merhaba' yazdırmak için 1000 satır kod mu yazarız, yoksa tek bir döngü komutu mu veririz?",
    roadmap: [
      { title: "Şart Yapısı (Eğer / İse)", desc: "Belirli bir koşul sağlandığında çalışan akıllı kod blokları." },
      { title: "Eğer - Değilse (İki Seçenek)", desc: "Şart doğruysa A yoluna, yanlışsa B yoluna gitme." },
      { title: "Döngü (Loop) Nedir?", desc: "Aynı işlemi defalarca tekrarlayan enerji tasarrufu sağlayan yapılar." },
      { title: "Sayaç ve Bitiş Şartı", desc: "Döngünün sonsuza kadar takılıp kalmaması için gereken sınır kuralı." }
    ],
    section1: {
      title: "Şart Yapıları: Eğer ... İse ... Değilse",
      subtitle: "Programların zeki davranmasını ve duruma göre farklı tepki vermesini sağlayan omurga.",
      layout: "cards-2",
      cards: [
        {
          title: "Tek Yönlü Şart (Eğer ... İse)",
          icon: "🚥",
          desc: "Sadece koşul tuttuğunda çalışır:",
          items: [
            { bold: "Kural", text: "Eğer <Trafik lambası Kırmızı> ise: Arabayı durdur." },
            { bold: "Aksi Halde", text: "Kırmızı değilse bu blok hiçbir şey yapmaz, sonraki adıma geçer." }
          ]
        },
        {
          title: "Çift Yönlü Şart (Eğer ... Değilse)",
          icon: "⚖️",
          desc: "İki olasılıktan biri mutlaka çalışır:",
          items: [
            { bold: "Kural", text: "Eğer <Şifre doğru> ise: Kapıyı aç ve 'Hoş Geldiniz' de." },
            { bold: "Değilse", text: "Kırmızı alarm çal ve 'Hatalı Şifre!' uyarısı ver." }
          ]
        }
      ]
    },
    section2: {
      title: "Döngüler (Loops): Yorulmayan Bilgisayar",
      subtitle: "Aynı hareketi 10 defa veya oyun bitene kadar sürekli tekrarlatmak.",
      layout: "split-visual",
      card: {
        title: "Döngü Türleri",
        icon: "🔄",
        desc: "İki temel döngü çeşidi:",
        items: [
          { bold: "1. Belirli Sayıda Tekrarla", text: "'10 defa tekrarla: 1 adım at.' 10 adım atınca otomatik olarak durur." },
          { bold: "2. Sürekli Tekrarla (Sonsuz Döngü)", text: "'Sürekli tekrarla: Fareyi takip et.' Oyun kapatılana veya durdurulana kadar durmaksızın çalışır." },
          { bold: "Kod Tasarrufu", text: "100 satır yazmak yerine döngü içine tek satır yazıp '100 defa tekrarla' deriz!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        
        <circle cx="200" cy="120" r="50" stroke="#34d399" stroke-width="3" stroke-dasharray="6 6"/>
        <path d="M235 77 L248 83 L242 70" fill="#34d399"/>

        <rect x="150" y="105" width="100" height="30" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">10 Adım Git</text>

        <rect x="40" y="105" width="80" height="30" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="80" y="124" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">GİRİŞ</text>

        <path d="M120 120 H150" stroke="#38bdf8" stroke-width="2"/>

        <rect x="280" y="105" width="80" height="30" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="320" y="124" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">ÇIKIŞ</text>

        <path d="M250 120 H280" stroke="#f59e0b" stroke-width="2"/>
        <text x="200" y="55" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">10 DEFA DÖN</text>
      </svg>`,
      caption: "Döngü Yapısı: Belirlenen Sayıda Aynı İşi Tekrarlama Mantığı"
    },
    workshop: {
      title: "Atölye: 'Kare Çizme Algoritması'",
      subtitle: "Döngü kullanarak bir karenin 4 kenarını en kısa kodla çizdiriyoruz.",
      steps: [
        { title: "Döngüsüz Halini Yaz", desc: "İleri git -> Sağa dön -> İleri git -> Sağa dön -> İleri git -> Sağa dön -> İleri git -> Sağa dön (8 satır!)." },
        { title: "Tekrarı Yakala", desc: "'İleri git ve Sağa dön' hareketi tam 4 defa tıpatıp tekrarlanıyor!" },
        { title: "Döngülü Kodu Kur", desc: "'4 defa tekrarla: [ 100 adım git, 90 derece sağa dön ]' (Sadece 2 satır!)." }
      ],
      criteria: [
        "Eğer ve Değilse arasındaki mantıksal farkı kavrayabilme",
        "Tekrarlayan işleri döngü bloğuyla sadeleştirebilme",
        "Sonsuz döngü ile sayılı döngüyü ayırt edebilme"
      ]
    },
    tips: {
      safetyTitle: "Sonsuz Döngü Tehlikesi",
      safetyRules: [
        { bold: "Bitiş Şartı Koymayı Unutmayın", text: "Sayacı artırmazsanız döngü sonsuza kadar döner ve bilgisayar kilitlenebilir; her döngünün mantıklı bir çıkış şartı olmalıdır." }
      ],
      myths: [
        { wrong: "Döngüler sadece şekil çizmek için kullanılır.", correct: "Oyunlardaki canavarların sürekli hareket etmesi, müziğin arka planda çalması, puanın kontrol edilmesi hep döngülerle yapılır!" }
      ]
    },
    quiz: {
      question: "Bir algoritmanın aynı işlemi defalarca arka arkaya yorulmadan tekrarlamasını sağlayan kodlama yapısına ne ad verilir?",
      options: [
        { text: "A) Klasör", isCorrect: false },
        { text: "B) Döngü (Loop)", isCorrect: true },
        { text: "C) Donanım", isCorrect: false },
        { text: "D) Piksel", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> <strong>Döngü (Loop)</strong>, belirli komutları istenilen sayıda veya bir şart gerçekleşene kadar tekrarlayan temel programlama yapısıdır."
    },
    summaryRules: [
      { bold: "Eğer = Akıllı Karar", text: "Şart sağlanınca çalışır." },
      { bold: "Döngü = Güçlü Tekrar", text: "Yüzlerce satırı 2 satıra indirir." },
      { bold: "Haftaya Scratch!", text: "Bu kavramları bloklarla kodlayacağız." }
    ],
    homework: "Günde 5 vakit namaz kılmak veya haftada 5 gün okula gitmek döngü müdür? Nedenini 1 cümleyle açıklayın.",
    nextWeekPreview: "Blok Tabanlı Programlamaya Giriş: Scratch Arayüzü ve Kedi Kuklası!"
  },

  // 25. HAFTA
  {
    week: 25,
    date: "01 - 07 Mart",
    hours: "2 Saat",
    unit: "6. Tema: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Blok Tabanlı Kodlamaya Giriş: Scratch",
    subtitle: "Scratch Arayüzü: Sahne, Kuklalar (Sprites), Kod Blokları Paleti ve Yeşil Bayrak",
    outcomeCode: "BTY.5.6.4",
    targetSkill: "Görsel Programlama Ortamı & Arayüz Hakimiyeti",
    curiosityQuestion: "Karmaşık İngilizce kod kelimeleri yazmadan, rengârenk legoları üst üste takarak oyun yapabileceğinizi biliyor muydunuz?",
    roadmap: [
      { title: "Scratch Nedir?", desc: "MIT tarafından geliştirilen blok tabanlı görsel kodlama platformu." },
      { title: "Sahne (Stage) ve Koordinatlar", desc: "Oyunun ve animasyonun sergilendiği beyaz tiyatro sahnesi." },
      { title: "Kuklalar (Sprites)", desc: "Sahnede hareket eden, konuşan ve dans eden karakterlerimiz." },
      { title: "Kod Blokları Paleti", desc: "Hareket (Mavi), Görünüm (Mor), Ses (Pembe), Olaylar (Sarı)." }
    ],
    section1: {
      title: "Scratch Ekranının 4 Ana Bölgesi",
      subtitle: "Kendi oyun stüdyomuzun çalışma masasını tanıyalım.",
      layout: "cards-4",
      cards: [
        {
          title: "1. Blok Paleti (Sol)",
          icon: "🧱",
          desc: "Farklı renklere ayrılmış tüm kod bloklarının bulunduğu malzeme dolabı."
        },
        {
          title: "2. Kodlama Alanı (Orta)",
          icon: "🏗️",
          desc: "Blokları sürükleyip birbirine lego gibi taktığımız dev inşaat alanı."
        },
        {
          title: "3. Sahne (Sağ Üst)",
          icon: "🎭",
          desc: "Kodlarımızın canlı olarak çalıştığı, kuklaların hareket ettiği ekran."
        },
        {
          title: "4. Kukla ve Dekor (Sağ Alt)",
          icon: "🐱",
          desc: "Yeni karakterler ve arka plan resimleri eklediğimiz yönetim paneli."
        }
      ]
    },
    section2: {
      title: "Blokların Renk Kodları: Ne İşe Yararlar?",
      subtitle: "Her renk bloğu farklı bir süper gücü temsil eder.",
      layout: "split-visual",
      card: {
        title: "Temel Blok Kategorileri",
        icon: "🎨",
        desc: "En çok kullanacağımız 4 renk:",
        items: [
          { bold: "Mavi (Hareket)", text: "Adım git, dön, x-y konumuna git, zıpla." },
          { bold: "Mor (Görünüm)", text: "Konuşma balonu çıkar, kostüm değiştir, rengi değiştir." },
          { bold: "Pembe (Ses)", text: "Miyav sesini çal, davul sesi çıkar, sesi yükselt." },
          { bold: "Sarı (Olaylar)", text: "Yeşil bayrağa tıklandığında, boşluk tuşuna basıldığında." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        
        <rect x="40" y="45" width="80" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
        <text x="80" y="70" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">BLOKLAR</text>
        <circle cx="80" cy="95" r="8" fill="#3b82f6"/>
        <circle cx="80" cy="120" r="8" fill="#a855f7"/>
        <circle cx="80" cy="145" r="8" fill="#ec4899"/>
        <circle cx="80" cy="170" r="8" fill="#f59e0b"/>

        <rect x="130" y="45" width="120" height="150" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
        <text x="190" y="70" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">KODLAMA ALANI</text>
        <rect x="145" y="90" width="90" height="25" rx="5" fill="#d97706"/>
        <text x="190" y="106" fill="#ffffff" font-size="8" text-anchor="middle">Tıklandığında</text>
        <rect x="145" y="117" width="90" height="25" rx="5" fill="#2563eb"/>
        <text x="190" y="133" fill="#ffffff" font-size="8" text-anchor="middle">10 Adım Git</text>

        <rect x="260" y="45" width="105" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
        <text x="312" y="70" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">SAHNE</text>
        <rect x="270" y="85" width="85" height="60" rx="4" fill="#0f172a"/>
        <text x="312" y="122" fill="#ffffff" font-size="24" text-anchor="middle">🐱</text>
        <text x="312" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">Kukla Listesi</text>
      </svg>`,
      caption: "Scratch Programının 4 Bölmeli Çalışma Ekranı"
    },
    workshop: {
      title: "Atölye: 'İlk Scratch Kodumuz: Yürüyen Kedi'",
      subtitle: "Yeşil bayrağa basınca 10 adım atan ve miyavlayan ilk projemizi yazıyoruz.",
      steps: [
        { title: "Scratch'i Aç", desc: "scratch.mit.edu sitesine girin veya bilgisayardaki Scratch 3'ü açın." },
        { title: "Olay Bloğu Ekle", desc: "Olaylar (Sarı) menüsünden 'Yeşil bayrağa tıklandığında' şapka bloğunu ortaya çekin." },
        { title: "Hareket ve Ses Ekle", desc: "Altına '10 adım git' ve 'Miyav sesini bitene kadar çal' bloklarını çıt sesiyle takın!" }
      ],
      criteria: [
        "Scratch arayüzündeki 4 ana bölgeyi doğru gösterebilme",
        "Blokları sürükleyip birbirine lego gibi takabilme",
        "Yeşil bayrakla kodu çalıştırıp kırmızı butonla durdurabilme"
      ]
    },
    tips: {
      safetyTitle: "Scratch Kodlama Püf Noktası",
      safetyRules: [
        { bold: "Şapka Blokları Şarttır", text: "Üstü bombeli sarı olay blokları olmadan kodlar çalışmaz; elektrik düğmesi gibidirler." }
      ],
      myths: [
        { wrong: "Scratch'te sadece kedi karakteri kullanılabilir.", correct: "Kukla kütüphanesinde yüzlerce insan, hayvan, araba ve fantezi karakteri vardır; isterseniz kendi fotoğrafınızı bile kukla yapabilirsiniz!" }
      ]
    },
    quiz: {
      question: "Scratch programında hazırladığımız kodları çalıştırmak ve animasyonu başlatmak için sahnenin üstündeki hangi simgeye tıklanır?",
      options: [
        { text: "A) Kırmızı Buton", isCorrect: false },
        { text: "B) Yeşil Bayrak", isCorrect: true },
        { text: "C) Mavi Yıldız", isCorrect: false },
        { text: "D) Sarı Ünlem", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Scratch'te projeleri başlatmak için <strong>Yeşil Bayrak</strong>, durdurmak için ise kırmızı sekizgen buton kullanılır."
    },
    summaryRules: [
      { bold: "Scratch = Blok Kodlama", text: "Lego gibi birleşen renkli bloklar." },
      { bold: "Sahne ve Kukla", text: "Karakterlerin oyun alanı." },
      { bold: "Yeşil Bayrakla Başla", text: "Kodlarınızı anında canlı test edin." }
    ],
    homework: "Scratch kütüphanesinden sevdiğiniz 2 farklı kuklayı (Örn: Balık ve Dalgıç) sahneye ekleyip kaydedin.",
    nextWeekPreview: "Hareket Blokları, Koordinat Sistemi (X ve Y) & 12 Mart İstiklal Marşı Projesi!"
  },

  // 26. HAFTA
  {
    week: 26,
    date: "08 - 14 Mart",
    hours: "2 Saat",
    unit: "6. Tema & 12 Mart İstiklal Marşı",
    unitBadge: "6. Tema & 12 Mart",
    unitTheme: "tema-6",
    title: "Hareket Blokları & 12 Mart Anma Projesi",
    subtitle: "X ve Y Koordinatları, Adım Git, Dön, Kenara Geldiyse Sek ve Bayrak Animasyonu",
    outcomeCode: "BTY.5.6.5",
    targetSkill: "Uzamsal Konumlandırma & Animasyon",
    curiosityQuestion: "Scratch sahnesinde tam ortada duran bir kuklanın adresi nedir ve ekranın sağ köşesine gitmek için hangi koordinatı artırmalıyız?",
    roadmap: [
      { title: "Sahne Koordinat Sistemi", desc: "Yatay X ekseni (-240 ile +240) ve Dikey Y ekseni (-180 ile +180)." },
      { title: "Merkez Noktası (X:0, Y:0)", desc: "Sahnenin tam kalbi ve başlangıç konumu." },
      { title: "Kenara Geldiyse Sek", desc: "Karakterin ekrandan çıkıp kaybolmasını engelleyen kalkan bloğu." },
      { title: "12 Mart İstiklal Marşı", desc: "Mehmet Akif Ersoy'u anma ve şanlı bayrağımızı dalgalandırma projesi." }
    ],
    section1: {
      title: "Scratch Sahnesinin Gizli Haritası: X ve Y",
      subtitle: "Sahnedeki her noktanın bir matematiksel adresi vardır.",
      layout: "split-visual",
      card: {
        title: "Koordinat Kuralları",
        icon: "🧭",
        desc: "X ve Y pusulası:",
        items: [
          { bold: "X Ekseni (Yatay)", text: "Sağa doğru gidildikçe X artar (+240'a kadar), sola gidildikçe azalır (-240'a kadar)." },
          { bold: "Y Ekseni (Dikey)", text: "Yukarı çıkıldıkça Y artar (+180'e kadar), aşağı inildikçe azalır (-180'e kadar)." },
          { bold: "Merkez", text: "Sahnenin tam ortası X: 0, Y: 0 noktasıdır." },
          { bold: "Işınlanma Bloğu", text: "'X: ... Y: ... konumuna git' bloğu karakteri anında o noktaya taşır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        
        <line x1="40" y1="120" x2="360" y2="120" stroke="#64748b" stroke-width="2"/>
        <line x1="200" y1="35" x2="200" y2="205" stroke="#64748b" stroke-width="2"/>

        <text x="345" y="112" fill="#38bdf8" font-size="10" font-weight="bold">+X (240)</text>
        <text x="45" y="112" fill="#38bdf8" font-size="10" font-weight="bold">-X (-240)</text>
        <text x="205" y="48" fill="#34d399" font-size="10" font-weight="bold">+Y (180)</text>
        <text x="205" y="200" fill="#34d399" font-size="10" font-weight="bold">-Y (-180)</text>

        <circle cx="200" cy="120" r="6" fill="#f59e0b"/>
        <text x="215" y="132" fill="#fde68a" font-size="11" font-weight="bold">Merkez (0,0)</text>

        <circle cx="280" cy="70" r="14" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
        <text x="280" y="75" fill="#ffffff" font-size="14" text-anchor="middle">🐱</text>
        <text x="280" y="98" fill="#fecdd3" font-size="9" text-anchor="middle">X: 100, Y: 60</text>
      </svg>`,
      caption: "Scratch 480x360 Piksel Koordinat Düzlemi"
    },
    section2: {
      title: "12 Mart İstiklal Marşı & Bayrak Animasyonu",
      subtitle: "Milli şairimiz Mehmet Akif Ersoy'u bilişimle anıyoruz.",
      layout: "cards-2",
      cards: [
        {
          title: "Dalgalanan Şanlı Bayrak",
          icon: "🇹🇷",
          desc: "Animasyon kodları:",
          items: [
            { bold: "Kostüm Değiştir", text: "Bayrak kuklasının 2 farklı dalgalanma kostümü arasında 0.3 saniye arayla geçiş yapın." },
            { bold: "Sürekli Tekrarla", text: "İstiklal Marşımız arka planda çalarken bayrak sonsuz döngüde dalgalansın." }
          ]
        },
        {
          title: "Kenara Geldiyse Sek Kuralı",
          icon: "⚽",
          desc: "Ekrandan kaybolmayı önleme:",
          items: [
            { bold: "Kenara Geldiyse Sek", text: "Mavi hareket bloğudur. Kukla sahnenin kenarına çarptığında ters yöne döner." },
            { bold: "Dönüş Stilini Ayarla", text: "Karakterin baş aşağı dönmemesi için dönüş stilini 'Sağ-Sol' yapın." }
          ]
        }
      ]
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'İstiklal Marşı Tören Sahnesi'",
      subtitle: "Bayrak direğe tırmanırken İstiklal Marşı çalan tören projesi.",
      steps: [
        { title: "Sahne ve Bayrak Ekle", desc: "Arka plana okul bahçesi ekleyin, sahneye Türk Bayrağı kuklası koyun." },
        { title: "Y Konumunu Artır", desc: "Bayrağa: 'Sürekli tekrarla > Y'yi 2 artır' diyerek direkte yavaşça yukarı tırmandırın." },
        { title: "En Tepede Durdur", desc: "'Eğer Y konumu > 120 ise durdur' şartı ekleyip töreni tamamlayın!" }
      ],
      criteria: [
        "X ve Y koordinat mantığını doğru kullanabilme",
        "Karakteri sahnede istenen konuma hareket ettirebilme",
        "12 Mart milli duygusunu yansıtan anlamlı bir proje geliştirme"
      ]
    },
    tips: {
      safetyTitle: "Ters Dönen Karakter Sorunu",
      safetyRules: [
        { bold: "Baş Aşağı Dönüyorsa", text: "Kukla panelindeki 'Yön' kısmına tıklayın ve ortadaki 'Sadece Sağa/Sola Bak' (◄►) butonunu seçin." }
      ],
      myths: [
        { wrong: "10 adım git bloğu sadece sağa doğru gider.", correct: "10 adım git bloğu karakterin baktığı yön neresiyse o yöne doğru ilerler!" }
      ]
    },
    quiz: {
      question: "Scratch sahnesinde hareket eden bir kuklanın yukarıya doğru zıplaması veya tırmanması için hangi koordinat değeri artırılmalıdır?",
      options: [
        { text: "A) X Değeri", isCorrect: false },
        { text: "B) Y Değeri", isCorrect: true },
        { text: "C) Ses Seviyesi", isCorrect: false },
        { text: "D) Kostüm Numarası", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Scratch'te <strong>Y ekseni</strong> dikey konumdur; yukarı gitmek için Y artırılır, aşağı inmek için Y azaltılır."
    },
    summaryRules: [
      { bold: "X = Yatay, Y = Dikey", text: "Sahnenin adresi koordinattır." },
      { bold: "Merkez X:0, Y:0", text: "Başlangıç noktası." },
      { bold: "12 Mart Ruhu", text: "Korkma, sönmez bu şafaklarda yüzen al sancak!" }
    ],
    homework: "Scratch'te bir top kuklasına 'Sürekli tekrarla: 10 adım git, Kenara geldiyse sek' bloklarını ekleyip test edin.",
    nextWeekPreview: "Görünüm ve Ses Blokları: Konuşma Balonları & 18 Mart Çanakkale Zaferi!"
  },

  // 27. HAFTA
  {
    week: 27,
    date: "15 - 21 Mart",
    hours: "2 Saat",
    unit: "6. Tema & 18 Mart Çanakkale",
    unitBadge: "6. Tema & 18 Mart",
    unitTheme: "tema-6",
    title: "Görünüm ve Ses Blokları: 18 Mart Zaferi",
    subtitle: "Konuşma Balonları (De/Düşün), Kostüm Değiştirme, Ses Çalma ve Çanakkale Kahramanları",
    outcomeCode: "BTY.5.6.5",
    targetSkill: "Multimedya Programlama & Tarihi Anlatı",
    curiosityQuestion: "Bir çizgi film karakterinin ekranda gerçek bir insan gibi adım atıp yürümesi için arka arkaya kaç resim değişir?",
    roadmap: [
      { title: "Görünüm Blokları (Mor)", desc: "Konuşma balonları, kostüm değiştirme, boyut ve renk efektleri." },
      { title: "Kostüm Animasyonu", desc: "1. Kostüm ve 2. Kostüm arasında hızlı geçişle yürüme etkisi yaratma." },
      { title: "Ses Blokları (Pembe)", desc: "Müzik, efekt sesleri ekleme ve ses perdesi/şiddeti ayarları." },
      { title: "18 Mart Çanakkale Zaferi", desc: "Seyit Onbaşı ve şehitlerimizi anlatan etkileşimli dijital tiyatro." }
    ],
    section1: {
      title: "Görünüm Blokları: Karakterleri Canlandırma",
      subtitle: "Kuklanız sadece hareket etmesin; konuşsun, düşünsün ve kılık değiştirsin.",
      layout: "cards-2",
      cards: [
        {
          title: "Konuşma ve Düşünme Balonları",
          icon: "💬",
          desc: "Karakterinize söz hakkı verin:",
          items: [
            { bold: "'... de 2 saniye'", text: "Ekranda çizgi roman konuşma balonu çıkar ve 2 saniye sonra kaybolur." },
            { bold: "'... düşün 2 saniye'", text: "Karakterin kafasında bulut şeklinde düşünme balonu belirir." },
            { bold: "Diyalog Kurgusu", text: "İki kukla karşılıklı konuşurken aralara 'bekle' blokları koyarak sırayla konuşmaları sağlanır." }
          ]
        },
        {
          title: "Kostüm Değiştirme (Animasyon Sırrı)",
          icon: "🎭",
          desc: "Akıcı hareket ilüzyonu:",
          items: [
            { bold: "Sonraki Kostüm Bloğu", text: "Karakterin bir sonraki yürüyüş pozuna geçmesini sağlar." },
            { bold: "0.2 Saniye Bekle", text: "Kostümler arasına minik bir bekleme konulmazsa karakter ışık hızında hareket eder ve anlaşılmaz!" }
          ]
        }
      ]
    },
    section2: {
      title: "Ses Blokları ve 18 Mart Çanakkale Zaferi",
      subtitle: "'Çanakkale Geçilmez!' destanını ses ve animasyonla yaşatalım.",
      layout: "split-visual",
      card: {
        title: "Tarihi Tiyatro Kurgusu",
        icon: "🎖️",
        desc: "Çanakkale Anma Projesi adımları:",
        items: [
          { bold: "Kahraman Sahneye Çıkar", text: "Seyit Onbaşı kuklası sahneye gelir ve '275 kiloluk top mermisini vatan sevgisiyle kaldırdım' der." },
          { bold: "Top Atışı Sesi", text: "Pembe ses bloğundan 'Boom' top atışı efekti çalar." },
          { bold: "Zafer Müziği", text: "Arka planda kahramanlık marşı eşliğinde şanlı zaferimiz kutlanır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
        
        <rect x="40" y="40" width="150" height="150" rx="12" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="115" y="65" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">GÖRÜNÜM (MOR)</text>
        <rect x="55" y="85" width="120" height="30" rx="6" fill="#7e22ce"/>
        <text x="115" y="104" fill="#ffffff" font-size="9" text-anchor="middle">"Merhaba!" de 2 sn</text>
        <rect x="55" y="125" width="120" height="30" rx="6" fill="#7e22ce"/>
        <text x="115" y="144" fill="#ffffff" font-size="9" text-anchor="middle">Sonraki Kostüm</text>

        <rect x="210" y="40" width="150" height="150" rx="12" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="285" y="65" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">SES (PEMBE)</text>
        <rect x="225" y="85" width="120" height="30" rx="6" fill="#be185d"/>
        <text x="285" y="104" fill="#ffffff" font-size="9" text-anchor="middle">Miyav Sesini Çal</text>
        <rect x="225" y="125" width="120" height="30" rx="6" fill="#be185d"/>
        <text x="285" y="144" fill="#ffffff" font-size="9" text-anchor="middle">Sesi 10 Değiştir</text>

        <text x="200" y="210" fill="#fecdd3" font-size="11" font-weight="bold" text-anchor="middle">18 Mart: Çanakkale Geçilmez!</text>
      </svg>`,
      caption: "Görünüm ve Ses Bloklarının Multimedya Gücü"
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Yürüyen ve Konuşan Karakter'",
      subtitle: "Karaktere hem yürüme kostümü hem konuşma balonu ekliyoruz.",
      steps: [
        { title: "Kukla Seç", desc: "Scratch kütüphanesinden en az 2 kostümü olan bir insan/hayvan kuklası seçin." },
        { title: "Yürüyüş Döngüsü", desc: "'Sürekli tekrarla: 10 adım git -> Sonraki kostüme geç -> 0.2 saniye bekle -> Kenara geldiyse sek' bloklarını bağlayın." },
        { title: "Ses ve Konuşma", desc: "Boşluk tuşuna basınca 'Çanakkale Şehitlerimizi Saygıyla Anıyoruz' dedirtin!" }
      ],
      criteria: [
        "Konuşma ve düşünme balonları arasındaki farkı bilme",
        "Kostüm değiştirme ile adım adım animasyon üretebilme",
        "Ses bloklarını projeye başarıyla dahil edebilme"
      ]
    },
    tips: {
      safetyTitle: "Diyaloglarda Zamanlama",
      safetyRules: [
        { bold: "Bekleme Süresi Koyun", text: "Eğer bir kukla konuşurken diğeri hemen konuşursa sözleri üst üste biner; aralara karşı tarafın konuşma süresi kadar 'bekle' koyun." }
      ],
      myths: [
        { wrong: "Scratch'te sadece sistemdeki hazır sesler kullanılır.", correct: "Mikrofon butonuna basarak kendi sesinizi kaydedebilir ve kuklalarınıza kendi sesinizle konuşma yaptırabilirsiniz!" }
      ]
    },
    quiz: {
      question: "Scratch programında bir karakterin ekranda yürüyor gibi görünmesini sağlayan en pratik yöntem hangisidir?",
      options: [
        { text: "A) Sürekli tekrarla içinde 'Sonraki Kostüm' bloğunu kullanıp kısa süre beklemek", isCorrect: true },
        { text: "B) Bilgisayarın sesini sonuna kadar açmak", isCorrect: false },
        { text: "C) Kuklayı sahneden silip tekrar eklemek", isCorrect: false },
        { text: "D) Yeşil bayrağa 100 kere basmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Farklı yürüyüş pozlarına sahip kostümler arasında <strong>Sonraki Kostüm</strong> bloğuyla sırayla geçiş yapmak canlı bir yürüme animasyonu oluşturur."
    },
    summaryRules: [
      { bold: "Mor Bloklar = Görünüm", text: "Konuşma ve kostüm değişimi." },
      { bold: "Pembe Bloklar = Ses", text: "Efektler ve arka plan müziği." },
      { bold: "18 Mart Zaferi", text: "Çanakkale kahramanlarımızı rahmetle anıyoruz." }
    ],
    homework: "Scratch'te kendi sesinizi mikrofondan kaydedip bir kuklaya söyleten 2 blokluk mini proje yapın.",
    nextWeekPreview: "Olaylar ve Kontrol Blokları: Ok Tuşlarıyla Karakter Yönetimi!"
  },

  // 28. HAFTA
  {
    week: 28,
    date: "22 - 28 Mart",
    hours: "2 Saat",
    unit: "6. Tema: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Olaylar & Kontrol: Tuşlarla Karakter Yönetimi",
    subtitle: "Klavyeden Yönlendirme (Yukarı, Aşağı, Sağ, Sol), Döngüler ve Şartlı Tetikleyiciler",
    outcomeCode: "BTY.5.6.6",
    targetSkill: "Etkileşimli Oyun Mekaniği & Kontrol",
    curiosityQuestion: "Bilgisayar oyunlarında klavyenin 'W, A, S, D' veya ok tuşlarına bastığınızda kahramanın anında o yöne koşmasını sağlayan kod arkada nasıl çalışır?",
    roadmap: [
      { title: "Olaylar (Events) Nedir?", desc: "Programı tetikleyen kıvılcımlar: Tuşa basılınca, kuklaya tıklanınca." },
      { title: "Ok Tuşları ile Hareket", desc: "Yukarı basınca Y artar, Aşağı basınca Y azalır, Sağa basınca X artar." },
      { title: "Sürekli Tekrarla İçinde Eğer", desc: "Oyun boyunca kesintisiz tuş kontrolü yapmanın altın mimarisi." },
      { title: "Oyun Tasarımına Giriş", desc: "Kendi yönettiğimiz kahramanla sahneyi keşfetme." }
    ],
    section1: {
      title: "Karakteri Ok Tuşlarıyla Yönetmenin 2 Yolu",
      subtitle: "Acemi yöntemi ile profesyonel oyun stüdyolarının akıcı kontrol yöntemi.",
      layout: "cards-2",
      cards: [
        {
          title: "1. Yöntem: Olay Blokları (Basit)",
          icon: "🟡",
          desc: "'... tuşuna basılınca' bloğu:",
          items: [
            { bold: "Nasıl Çalışır?", text: "'Sağ ok tuşuna basılınca: X'i 10 değiştir.'" },
            { bold: "Eksisi", text: "Tuşa basılı tuttuğunuzda karakter önce bir takılır, sonra yürür; hafif kesik kesik hissettirir." }
          ]
        },
        {
          title: "2. Yöntem: Sürekli Kontrol (Akıcı - Profesyonel)",
          icon: "🟢",
          desc: "Yeşil bayrak + Sürekli tekrarla + Eğer:",
          items: [
            { bold: "Nasıl Çalışır?", text: "Sürekli tekrarla içinde: 'Eğer <Sağ ok basıldı mı?> ise: X'i 10 değiştir.'" },
            { bold: "Artısı", text: "Konsol oyunlarındaki gibi pürüzsüz, yağ gibi akan bir hareket kabiliyeti sunar!" }
          ]
        }
      ]
    },
    section2: {
      title: "4 Yönlü Hareketin Matematiksel Kod Haritası",
      subtitle: "Klavyeden basılan her tuş bir koordinat eksenini günceller.",
      layout: "split-visual",
      card: {
        title: "Pusula Formülleri",
        icon: "🧭",
        desc: "4 Temel Yön:",
        items: [
          { bold: "Sağ Ok Tuşu", text: "X'i 10 değiştir (Sağa kayar)." },
          { bold: "Sol Ok Tuşu", text: "X'i -10 değiştir (Sola kayar)." },
          { bold: "Yukarı Ok Tuşu", text: "Y'yi 10 değiştir (Yukarı çıkar)." },
          { bold: "Aşağı Ok Tuşu", text: "Y'yi -10 değiştir (Aşağı iner)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        
        <circle cx="200" cy="120" r="28" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="127" fill="#ffffff" font-size="22" text-anchor="middle">🐱</text>

        <rect x="175" y="35" width="50" height="35" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="57" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">▲ Y: +10</text>

        <rect x="175" y="170" width="50" height="35" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="192" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">▼ Y: -10</text>

        <rect x="45" y="102" width="60" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="75" y="124" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">◄ X: -10</text>

        <rect x="295" y="102" width="60" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="325" y="124" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">► X: +10</text>

        <path d="M200 90 V72" stroke="#34d399" stroke-width="2"/>
        <path d="M200 150 V168" stroke="#34d399" stroke-width="2"/>
        <path d="M170 120 H107" stroke="#38bdf8" stroke-width="2"/>
        <path d="M230 120 H293" stroke="#38bdf8" stroke-width="2"/>
      </svg>`,
      caption: "Klavyenin 4 Ok Tuşu ile X ve Y Koordinatlarının Yönetimi"
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Serbest Gezen Kahraman'",
      subtitle: "Klavyeden yönlendirilen ve ekranda serbestçe gezebilen kukla yapıyoruz.",
      steps: [
        { title: "Kukla Ekle", desc: "Sevdiğiniz bir araba, uçak veya hayvan kuklası ekleyin." },
        { title: "4 Yön Kodunu Kur", desc: "Yukarı, aşağı, sağ ve sol ok tuşlarına ilgili X ve Y değişim bloklarını kurun." },
        { title: "Yönünü Döndür", desc: "Sağa basınca 90 yönüne dön, sola basınca -90 yönüne dön bloklarını ekleyin!" }
      ],
      criteria: [
        "Ok tuşları ile X ve Y eksenlerini doğru eşleştirebilme",
        "Karakteri sahnede takılmadan akıcı yönetebilme",
        "Ters yöne giderken yön bloklarını doğru kullanabilme"
      ]
    },
    tips: {
      safetyTitle: "Eksi İşaretine Dikkat",
      safetyRules: [
        { bold: "Sola ve Aşağıya Eksi Gelir", text: "Sağa giderken normal 10, sola giderken -10; yukarı giderken normal 10, aşağı inerken -10 yazılır." }
      ],
      myths: [
        { wrong: "Sadece klavye ok tuşları kullanılabilir.", correct: "Scratch'te klavyedeki tüm harfler (W, A, S, D, Boşluk vb.) kontrol tuşu olarak atanabilir!" }
      ]
    },
    quiz: {
      question: "Scratch projesinde sol ok tuşuna basıldığında karakterin sola doğru ilerlemesi için aşağıdaki kod bloklarından hangisi kullanılmalıdır?",
      options: [
        { text: "A) Y'yi 10 değiştir", isCorrect: false },
        { text: "B) X'i -10 değiştir", isCorrect: true },
        { text: "C) 100 derece dön", isCorrect: false },
        { text: "D) Kostümü sil", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Yatay eksen X eksenidir; sola doğru gitmek için <strong>X'i -10 değiştir</strong> bloğu kullanılır."
    },
    summaryRules: [
      { bold: "Olaylar Başlatır", text: "Tuş basımı hareketi tetikler." },
      { bold: "X Yatay, Y Dikey", text: "+ ileri, - geri anlamına gelir." },
      { bold: "Sınava Hazırlık", text: "Gelecek hafta 2. dönemin ilk sınav tekrarı var!" }
    ],
    homework: "Klavyenin 'Boşluk (Space)' tuşuna basınca kuklanızı havaya zıplatıp (Y: +30) sonra geri indiren (Y: -30) kodu tasarlayın.",
    nextWeekPreview: "2. Dönem 1. Sınav Tekrarı & Kodlama Şampiyonası!"
  },

  // 29. HAFTA
  {
    week: 29,
    date: "29 Mart - 04 Nisan",
    hours: "2 Saat",
    unit: "SINAV HAFTASI & 6. Tema Tekrarı",
    unitBadge: "2. Dönem 1. Sınav",
    unitTheme: "tema-sinav",
    title: "2. Dönem 1. Sınav Tekrarı & Kodlama Özeti",
    subtitle: "Algoritma Adımları, Akış Şeması Şekilleri, Şartlar, Döngüler ve Scratch Blokları",
    outcomeCode: "BTY.5.6.1 - BTY.5.6.6",
    targetSkill: "Sınav Başarısı & Kodlama Mantığı Sentezi",
    curiosityQuestion: "Algoritmadan akış şemasına, koordinatlardan tuş kontrollerine kadar öğrendiğimiz tüm kodlama bilgisiyle sınavı fethetmeye hazır mısınız?",
    roadmap: [
      { title: "Algoritma ve Problem Çözme", desc: "4 aşamalı çözüm planı ve sözel algoritma yazma kuralları." },
      { title: "Akış Şeması Şekilleri", desc: "Elips, dikdörtgen, paralelkenar ve baklava dilimi görevleri." },
      { title: "Şartlar ve Döngüler", desc: "Eğer/Değilse ve Tekrarla mantığı." },
      { title: "Scratch Blokları & Koordinatlar", desc: "X, Y eksenleri, yeşil bayrak ve ok tuşu kontrolleri." }
    ],
    section1: {
      title: "Sınavın 4 Büyük Sorusu ve Çözüm Taktikleri",
      subtitle: "Yazılı sınavda en çok puan getiren kritik başlıklar.",
      layout: "cards-2",
      cards: [
        {
          title: "1. Akış Şeması Eşleştirmesi",
          icon: "📐",
          desc: "Şekil ve görev eşleştirmesi:",
          items: [
            { bold: "Elips", text: "Başla ve Bitir." },
            { bold: "Paralelkenar", text: "Veri Girişi (Kullanıcıdan bilgi alma)." },
            { bold: "Dikdörtgen", text: "İşlem ve Hesaplama." },
            { bold: "Eşkenar Dörtgen", text: "Karar ve Karşılaştırma (Evet/Hayır)." }
          ]
        },
        {
          title: "2. Scratch Koordinat Soruları",
          icon: "🐱",
          desc: "Eksen kuralları:",
          items: [
            { bold: "Sağa Gitmek", text: "X artar (+10)." },
            { bold: "Sola Gitmek", text: "X azalır (-10)." },
            { bold: "Yukarı Çıkmak", text: "Y artar (+10)." },
            { bold: "Aşağı İnmek", text: "Y azalır (-10)." }
          ]
        }
      ]
    },
    section2: {
      title: "Kod Tamamlama Soruları: Hata Nerede?",
      subtitle: "Öğretmenlerin sınavda sorduğu 'Bu kod neden çalışmıyor?' tuzakları.",
      layout: "cards-2",
      cards: [
        {
          title: "Tuzak 1: Yeşil Bayrak Yok!",
          icon: "⚠️",
          desc: "Tetikleyici eksikliği:",
          items: [
            { bold: "Hata", text: "Bloklar dizilmiş ama üstünde 'Tıklandığında' şapka bloğu yok." },
            { bold: "Çözüm", text: "Olay bloğu olmadan kodlar asla tetiklenmez!" }
          ]
        },
        {
          title: "Tuzak 2: Döngüsüz 'Eğer' Bloğu",
          icon: "🔄",
          desc: "Tek anlık çalışma hatası:",
          items: [
            { bold: "Hata", text: "'Eğer sağ ok basıldı mı' kodu tek başına duruyor." },
            { bold: "Çözüm", text: "'Eğer' mutlaka 'Sürekli tekrarla' içine konulmalıdır; yoksa sadece yeşil bayrağa basıldığı o salisede kontrol eder ve biter!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'Sınav Sorusu Yazarı'",
      subtitle: "Sıra arkadaşımız için 2 soruluk mini sınav testi hazırlıyoruz.",
      steps: [
        { title: "1 Şekil Sorusu Yaz", desc: "Bir akış şeması geometrik şekli çizip görevini sorun." },
        { title: "1 Scratch Sorusu Yaz", desc: "X ve Y ekseniyle ilgili çoktan seçmeli bir koordinat sorusu yazın." },
        { title: "Kâğıtları Değişin", desc: "Soruları çözüp birbirinize puan verin!" }
      ],
      criteria: [
        "Soru hazırlayarak konuyu derinlemesine pekiştirme",
        "Sık yapılan mantık hatalarını tanıyıp düzeltebilme",
        "Sınav öncesi tam hazırlık ve özgüven"
      ]
    },
    tips: {
      safetyTitle: "Sınav Başarı Tavsiyesi",
      safetyRules: [
        { bold: "İşaretlere Dikkat Edin", text: "X ile Y'yi, artı (+) ile eksi (-) işaretlerini birbirine karıştırmayın." }
      ],
      myths: [
        { wrong: "Scratch bloklarının renkleri öylesine rastgele seçilmiştir.", correct: "Renkler görevlerine göredir: Maviler hareket, morlar görünüm, sarılar olay, turuncular kontrol içindir!" }
      ]
    },
    quiz: {
      question: "Scratch projesinde bir kuklanın oyun boyunca klavyedeki ok tuşlarını KESİNTİSİZ olarak dinleyip hareket edebilmesi için 'Eğer' blokları hangi döngünün içine yerleştirilmelidir?",
      options: [
        { text: "A) 1 defa bekle", isCorrect: false },
        { text: "B) Sürekli tekrarla (Forever)", isCorrect: true },
        { text: "C) Sesi kapat", isCorrect: false },
        { text: "D) Sahneyi sil", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Eğer blokları <strong>Sürekli Tekrarla</strong> içine konulmazsa sadece ilk açılışta bir kez kontrol edilir ve oyun boyunca tuşlar çalışmaz."
    },
    summaryRules: [
      { bold: "Akış Şemaları Net", text: "Elips, dikdörtgen, paralelkenar, baklava." },
      { bold: "Koordinatlar Hazır", text: "Sağ/Sol = X, Yukarı/Aşağı = Y." },
      { bold: "Başarılar!", text: "Sınavda hepinize üstün başarılar dileriz." }
    ],
    homework: "Akış şeması sembollerini ve anlamlarını son kez tekrar edin.",
    nextWeekPreview: "Algılama Blokları & Labirentten Çıkış Oyunu Tasarımı!"
  },

  // 30. HAFTA
  {
    week: 30,
    date: "05 - 11 Nisan",
    hours: "2 Saat",
    unit: "6. Tema: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Tema",
    unitTheme: "tema-6",
    title: "Algılama Blokları & Labirent Oyunu",
    subtitle: "Renge Değiyor mu? Kuklaya Değiyor mu? Çarpışma Algılama ve Labirent Mekaniği",
    outcomeCode: "BTY.5.6.7",
    targetSkill: "Çarpışma Algılama & Oyun Tasarımı",
    curiosityQuestion: "Bir video oyununda kahramanınız duvara çarptığında içinden geçip gitmesini engelleyen ve duvarda durduran sihirli kod nedir?",
    roadmap: [
      { title: "Algılama (Sensing) Blokları", desc: "Açık mavi bloklar: Dokunma, renk algılama, mesafe ölçme." },
      { title: "Çarpışma Algılama (Collision)", desc: "<... rengine değiyor mu?> mantıksal şartı." },
      { title: "Labirent Çizimi", desc: "Siyah duvarlar, başlangıç noktası ve yeşil çıkış kapısı." },
      { title: "Duvara Çarpınca Geri Git", desc: "Karakter duvara değdiğinde onu başladığı yere ışınlama kuralı." }
    ],
    section1: {
      title: "Algılama Blokları: Bilgisayarın Duyu Organları",
      subtitle: "Kuklanızın etrafındaki dünyayı hissetmesini sağlayan sensörler.",
      layout: "cards-2",
      cards: [
        {
          title: "Temel Algılama Şartları",
          icon: "📡",
          desc: "Açık mavi sensör blokları:",
          items: [
            { bold: "<... değiyor mu?>", text: "Fare imlecine veya başka bir kuklaya dokundu mu?" },
            { bold: "<... rengine değiyor mu?>", text: "Kukla sahnede belirli bir renge (Örn: Siyah duvara) temas etti mi?" },
            { bold: "Mesafe Ölçer", text: "Kuklanın elmaya veya hedefe olan piksel mesafesi." }
          ]
        },
        {
          title: "Labirent Duvarı Mantığı",
          icon: "🧱",
          desc: "Duvardan geçmeyi engelleme:",
          items: [
            { bold: "Siyah Renk Kuralı", text: "Labirentin tüm duvarlarını aynı renkte (Örn: Siyah) çizin." },
            { bold: "Çarpınca Başa Dön", text: "Eğer <Siyah renge değiyor mu?> ise: 'X: -200 Y: 140 konumuna git' (Başlangıç noktasına fırlar!)." }
          ]
        }
      ]
    },
    section2: {
      title: "Labirent Oyununun Tam Kod Mimarisi",
      subtitle: "Tüm parçaları bir araya getirerek ilk gerçek oyunumuzu kodluyoruz.",
      layout: "split-visual",
      card: {
        title: "Oyun Döngüsü",
        icon: "🎮",
        desc: "Yeşil bayrak altındaki sistem:",
        items: [
          { bold: "1. Başlangıç", text: "Karakteri başlangıç noktasına ışınla ve boyutunu %50 yap." },
          { bold: "2. Sürekli Tekrarla", text: "4 ok tuşunu dinle ve hareket ettir." },
          { bold: "3. Duvar Kontrolü", text: "Eğer duvara değerse 'Ouch!' sesi çıkar ve başlangıca dön." },
          { bold: "4. Kazanma Kontrolü", text: "Eğer yeşil kapıya değerse 'Tebrikler Kazandınız!' de ve oyunu bitir!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        
        <rect x="45" y="40" width="310" height="160" rx="8" fill="#1e293b"/>
        
        <line x1="100" y1="40" x2="100" y2="140" stroke="#f43f5e" stroke-width="8"/>
        <line x1="160" y1="100" x2="160" y2="200" stroke="#f43f5e" stroke-width="8"/>
        <line x1="220" y1="40" x2="220" y2="150" stroke="#f43f5e" stroke-width="8"/>
        <line x1="280" y1="90" x2="280" y2="200" stroke="#f43f5e" stroke-width="8"/>

        <circle cx="70" cy="70" r="12" fill="#38bdf8"/>
        <text x="70" y="74" fill="#ffffff" font-size="10" text-anchor="middle">🐱</text>
        <text x="70" y="100" fill="#bae6fd" font-size="8" text-anchor="middle">BAŞLA</text>

        <rect x="315" y="150" width="30" height="30" rx="4" fill="#10b981"/>
        <text x="330" y="170" fill="#ffffff" font-size="12" text-anchor="middle">🏆</text>
        <text x="330" y="195" fill="#a7f3d0" font-size="8" text-anchor="middle">ÇIKIŞ</text>
      </svg>`,
      caption: "Labirent Sahnesi: Kırmızı Duvarlar, Başlangıç ve Zafer Kapısı"
    },
    workshop: {
      title: "Laboratuvar Etkinliği: 'Kendi Labirentini Kodla'",
      subtitle: "Boya aracılığıyla labirent çizip kuklamızı çıkışa ulaştırıyoruz.",
      steps: [
        { title: "Labirent Çiz", desc: "Sahne dekoruna girin ve kalın kırmızı çizgilerle geçitleri olan bir labirent çizin." },
        { title: "Kuklayı Küçült", desc: "Kuklanın koridorlardan rahatça geçebilmesi için boyutunu %40 veya %50 yapın." },
        { title: "Çarpışma Kodunu Yaz", desc: "'Eğer kırmızı renge değiyor mu ise başlangıç konumuna git' kodunu ekleyip test edin!" }
      ],
      criteria: [
        "Açık mavi algılama bloklarını doğru kullanabilme",
        "Renk damlalığı aracıyla labirent duvarının rengini tam seçebilme",
        "Karakterin duvardan geçmesini engelleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Damlalık Aracı İpucu",
      safetyRules: [
        { bold: "Rengi Göz Kararı Seçmeyin", text: "Renk kutusuna tıklayıp alttaki büyüteç (damlalık) simgesini seçin ve sahnedeki duvarın üzerine tıklayın; böylece renk tonu %100 tutar." }
      ],
      myths: [
        { wrong: "Labirent oyunu yapmak için yüzlerce satır karmaşık kod gerekir.", correct: "Scratch'te 'Eğer renge değiyor mu ise başa git' şeklindeki sadece 2 blokluk bir şartla muhteşem labirent oyunları yapılır!" }
      ]
    },
    quiz: {
      question: "Labirent oyununda karakterin duvarlara çarptığını anlamak için Scratch'te hangi blok kategorisindeki şart bloğu kullanılır?",
      options: [
        { text: "A) Ses Blokları", isCorrect: false },
        { text: "B) Algılama Blokları (<... rengine değiyor mu?>)", isCorrect: true },
        { text: "C) Kalem Blokları", isCorrect: false },
        { text: "D) Dosya Menüsü", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> <strong>Algılama (Sensing)</strong> kategorisindeki <code>&lt;... rengine değiyor mu?&gt;</code> bloğu, kuklanın duvar rengine temas edip etmediğini kontrol eder."
    },
    summaryRules: [
      { bold: "Algılama = Duyular", text: "Çarpışmaları ve teması yakalar." },
      { bold: "Damlalık Aracı", text: "Duvar rengini birebir kopyalayın." },
      { bold: "Labirent Hazır", text: "Tatil atölyesinde oyunumuzu geliştireceğiz!" }
    ],
    homework: "Labirent oyununuza bir ödül nesnesi (Örn: Sarı peynir) ekleyip peynire değince 'Puanı 1 artır' kodunu tasarlayın.",
    nextWeekPreview: "2. Dönem Ara Tatili Scratch Oyun Geliştirme Atölyesi!"
  },

  // 31. HAFTA (2. DÖNEM ARA TATİLİ)
  {
    week: 31,
    date: "12 - 18 Nisan",
    hours: "Ara Tatil",
    unit: "ARA TATİL: Scratch Oyun Atölyesi",
    unitBadge: "2. Ara Tatil",
    unitTheme: "tema-6",
    title: "2. Dönem Ara Tatili: Scratch Oyun Atölyesi",
    subtitle: "Labirent Oyununa Seviyeler (Level 2), Can Sistemi ve Ses Efektleri Ekleme Rehberi",
    outcomeCode: "Ara Tatil & Oyun Geliştirme",
    targetSkill: "Oyun Mekaniği Tasarımı & Hata Ayıklama",
    curiosityQuestion: "Yaptığınız labirent oyununu arkadaşınıza oynattığınızda tek seviye yerine 3 farklı zorluk seviyesine sahip olsa nasıl olurdu?",
    roadmap: [
      { title: "2. Seviye Dekor Tasarımı", desc: "Daha dar koridorlar ve hareket eden engeller." },
      { title: "Can Sistemi (3 Can)", desc: "Duvara her çarptığında canı 1 azaltma ve 0 olunca 'Game Over'." },
      { title: "Arka Plan Müziği", desc: "Oyun boyunca çalan hafif retro arcade müzik." },
      { title: "23 Nisan Bayramı Hazırlığı", desc: "Tatilden sonra 23 Nisan Çocuk Bayramı oyun projemiz başlıyor!" }
    ],
    section1: {
      title: "Oyununuza Seviye Atlama (Level) Ekleyin",
      subtitle: "Çıkış kapısına ulaşınca bir sonraki zorlu dekorun açılması.",
      layout: "cards-2",
      cards: [
        {
          title: "Sonraki Dekora Geçiş",
          icon: "🏁",
          desc: "Kapıya temas mekanizması:",
          items: [
            { bold: "Kapı Algılandı", text: "Eğer <Yeşil kapıya değiyor mu?> ise:" },
            { bold: "Sonraki Dekor", text: "Görünümden 'Sonraki Dekora Geç' komutunu verin." },
            { bold: "Karakteri Başa Al", text: "Karakteri yeni labirentin başlangıç koordinatına ışınlayın." },
            { bold: "Kutlama Sesi", text: "'Win' zafer sesini çalarak oyuncuyu ödüllendirin!" }
          ]
        },
        {
          title: "Hareket Eden Düşman Engeller",
          icon: "👾",
          desc: "Oyunu heyecanlı kılan tuzaklar:",
          items: [
            { bold: "Düşman Kukla", text: "Labirent koridorunda yukarı-aşağı sürekli gidip gelen bir hayalet veya alev topu." },
            { bold: "Temas Kuralı", text: "Eğer <Düşmana değiyor mu?> ise: Canı -1 azalt ve canavardan uzaklaştır." }
          ]
        }
      ]
    },
    section2: {
      title: "Tatil Boyunca Oyun Geliştirici Olun",
      subtitle: "Tüketen değil, üreten tarafta olmanın gururunu yaşayın.",
      layout: "cards-2",
      cards: [
        {
          title: "Akran Testi (Arkadaşına Oynat)",
          icon: "🎮",
          desc: "En iyi oyun test yöntemi:",
          items: [
            { bold: "Arkadaşına Ver", text: "Oyunu kardeşine veya arkadaşına oynatın." },
            { bold: "İpuçsuz İzle", text: "Nerede takılıyor? Koridor çok mu dar? Çok mu zor yoksa çok mu kolay?" },
            { bold: "Dengele", text: "Geri bildirimlere göre oyunun zorluğunu herkesin zevk alacağı seviyeye çekin." }
          ]
        },
        {
          title: "Tatil Sonrası: Büyük 23 Nisan Projesi",
          icon: "🇹🇷",
          desc: "Tatilden hemen sonra:",
          items: [
            { bold: "Ulusal Egemenlik", text: "TBMM'nin açılışını ve çocuk bayramını kutlayan şampiyona projesi." },
            { bold: "Değişkenler", text: "Skor ve süre sayaçlarıyla tam profesyonel oyun kurgusu." }
          ]
        }
      ]
    },
    workshop: {
      title: "Tatil Görevi: '3 Canlı Labirent'",
      subtitle: "Değişken oluşturup oyuna 3 can hakkı tanımlıyoruz.",
      steps: [
        { title: "Can Değişkeni Aç", desc: "Değişkenler menüsünden 'Can' adında bir değişken oluşturun ve başlangıçta 3 yapın." },
        { title: "Can Azalt", desc: "Duvara her çarptığında 'Canı -1 kadar değiştir' ekleyin." },
        { title: "Oyun Bitti Şartı", desc: "'Eğer Can = 0 ise: Oyunu Durdur' şartı koyarak oyunu tamamlayın." }
      ],
      criteria: [
        "Can değişkenini oluşturup doğru şekilde azaltabilme",
        "Oyun döngüsünü tatil boyunca test edip geliştirebilme",
        "Ekran başında geçirilen süreyi spor ve tatille dengeleme"
      ]
    },
    tips: {
      safetyTitle: "Tatil Bilişim Dengesi",
      safetyRules: [
        { bold: "Günde 1 Saat Kodlama Yeterlidir", text: "Geri kalan vaktinizde baharda açık havada yürüyüş yapın, kitap okuyun ve zihninizi tazeleyin." }
      ],
      myths: [
        { wrong: "Bir oyunu yaptıktan sonra ilk haliyle mükemmel olmalıdır.", correct: "Dünyanın en ünlü oyunları bile piyasaya çıkmadan önce yüzlerce kez test edilir ve hataları düzeltilir!" }
      ]
    },
    quiz: {
      question: "Scratch projesinde bir kuklanın yeşil bayrak tıklandığında oyun boyunca duvara çarpıp çarpmadığını aralıksız kontrol etmesi için 'Eğer' bloğu nereye yerleştirilmelidir?",
      options: [
        { text: "A) Sürekli Tekrarla bloğunun içine", isCorrect: true },
        { text: "B) Çöp kutusuna", isCorrect: false },
        { text: "C) Sadece ses bloğunun altına", isCorrect: false },
        { text: "D) Sahnenin arkasına", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Oyun boyunca anlık temasları yakalamak için şart blokları mutlaka <strong>Sürekli Tekrarla</strong> döngüsü içinde olmalıdır."
    },
    summaryRules: [
      { bold: "İyi Tatiller!", text: "Bilişimle üretin, doğayla dinlenin." },
      { bold: "Labirent Gelişti", text: "Canlar ve seviyeler eklendi." },
      { bold: "23 Nisan Geliyor", text: "Haftaya çocuk bayramı projemiz başlıyor!" }
    ],
    homework: "Labirent oyununuza 'Zafer' ve 'Oyun Bitti' şeklinde 2 farklı bitiş dekoru ekleyin.",
    nextWeekPreview: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kodlama Şampiyonası & Değişkenler!"
  }
];
