/**
 * 7. Sınıf Teknoloji ve Tasarım - 2. Dönem 1. Bölüm (Hafta 20 - 31)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART1_GRADE7 = [
  // 20. HAFTA
  {
    week: 20,
    date: "25 - 31 Ocak",
    hours: "Sömestr",
    unit: "SÖMESTR TATİLİ: Tasarım Macera Bülteni",
    unitBadge: "Sömestr 1",
    unitTheme: "tema-6",
    title: "Sömestr 1. Hafta: Mucitler ve Tasarım Macera Bülteni",
    subtitle: "Bilgisayarsız Tasarım Görevleri, Kağıttan Taşıyıcı Köprüler ve Geometrik Zekâ",
    outcomeCode: "Sömestr & Tasarım Hazırlığı",
    targetSkill: "Yaratıcı Mühendislik & Kâğıt Taşıyıcı Mukavemeti",
    curiosityQuestion: "Sadece tek bir A4 kâğıdı ve biraz bant kullanarak üzerine bir fincan dolusu su koyabileceğiniz sağlam bir köprü yapabilir misiniz?",
    roadmap: [
      { title: "Kâğıt Mühendisliği", desc: "Düz kâğıt bükülür; ama akordiyon gibi katlanırsa tonlarca yük taşıyabilir!" },
      { title: "Üçgenlerin Gücü (Truss Sistemleri)", desc: "Eyfel Kulesi ve köprülerin neden hep üçgen kafeslerden oluştuğu." },
      { title: "Evde Hızlı Prototipleme", desc: "Makarna, kâğıt ve kürdanla depreme dayanıklı kule yarışması." },
      { title: "2. Dönem Heyecanı", desc: "Şubat'ta başlayacak 'Doğadan Tasarıma - Biyotaklit' ünitesine hazırlık." }
    ],
    section1: {
      title: "Geometrinin Sihri: Katlamayla Gelen Güç",
      subtitle: "Malzemenin cinsi kadar, ona verilen şekil (geometri) de mukavemeti belirler.",
      layout: "split-visual",
      card: {
        title: "Kâğıt Kiriş Deneyi",
        icon: "🌉",
        desc: "Düz bir kâğıt ile katlanmış kâğıdın farkı:",
        items: [
          { bold: "Düz Kâğıt", text: "İki kitap arasına köprü gibi konulduğunda kendi ağırlığını bile taşıyamayıp çöker." },
          { bold: "Akordiyon (Zikzak) Katlama", text: "Kâğıt zikzak katlandığında 'oluklu mukavva' prensibiyle 500 gramlık ağırlığı taşır!" },
          { bold: "Silindir Katlama", text: "Dört adet silindir haline getirilmiş kâğıt ayak koca bir ansiklopediyi rahatça taşır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Zikzak Katlama Mukavemet Analizi</text>
        
        <!-- İki Destek Kitap -->
        <rect x="40" y="110" width="60" height="60" rx="4" fill="#1e293b" stroke="#64748b"/>
        <text x="70" y="145" fill="#94a3b8" font-size="8" text-anchor="middle">Ayak 1</text>
        
        <rect x="300" y="110" width="60" height="60" rx="4" fill="#1e293b" stroke="#64748b"/>
        <text x="330" y="145" fill="#94a3b8" font-size="8" text-anchor="middle">Ayak 2</text>
        
        <!-- Zikzak Katlanmış Kâğıt Köprü -->
        <path d="M100 110 L120 90 L140 110 L160 90 L180 110 L200 90 L220 110 L240 90 L260 110 L280 90 L300 110" stroke="#34d399" stroke-width="3" fill="none"/>
        
        <!-- Yük (Ağırlık) -->
        <rect x="175" y="55" width="50" height="35" rx="4" fill="#f59e0b" stroke="#fde68a"/>
        <text x="200" y="75" fill="#0c1322" font-size="9" font-weight="bold" text-anchor="middle">YÜK</text>
        <path d="M200 90 V105" stroke="#ef4444" stroke-width="2" marker-end="url(#arr)"/>
        
        <text x="200" y="195" fill="#cbd5e1" font-size="8" text-anchor="middle">Üçgen geometrisi yükü iki yana dağıtarak çökmesini engeller.</text>
      </svg>`
    },
    section2: {
      title: "Üçgen Kafesler (Truss) Neden Çökmez?",
      subtitle: "Kare ve dikdörtgenler kolayca yamulurken üçgenler neden sabittir?",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Fizik Kuralı",
          title: "Açıların Kilitlenmesi",
          desc: "Üçgenin kenar uzunlukları sabit kaldıkça iç açıları asla değişemez.",
          bullets: [
            "Bir dörtgenin köşesinden iterseniz hemen paralelkenara dönüşür.",
            "Dörtgenin ortasına bir çapraz çıta (üçgenleme) eklerseniz taş gibi kilitlenir.",
            "İnşaat vinçleri, köprüler ve elektrik direkleri bu yüzden üçgendir."
          ]
        },
        {
          badge: "Tatil Meydan Okuması",
          title: "Spagetti Kule Yarışması",
          desc: "Evde kuru makarna ve oyun hamuru / marşmelov ile en yüksek kuleyi yapma.",
          bullets: [
            "Geniş üçgen bir taban inşa edin.",
            "Yukarıya doğru üçgen piramitler ekleyerek yükselin.",
            "Hem eğlenceli vakit geçirin hem de strüktür mantığını kavrayın."
          ]
        }
      ]
    },
    workshop: {
      title: "Sömestr Köprü Mühendisliği Görevi",
      subtitle: "Evde 2 bardak arasına tek kâğıtla en çok madeni para taşıyan köprüyü yapma.",
      steps: [
        { title: "A4 Kâğıdı Katlayın", desc: "Kâğıdı 1'er cm aralıklarla akordiyon gibi zikzak katlayın." },
        { title: "Açıklığı Kurun", desc: "İki bardağı aralarında 15 cm mesafe olacak şekilde masaya dizin." },
        { title: "Ağırlık Testi", desc: "Köprünün ortasına sırayla 1 TL'lik madeni paraları koyup sayın; rekorunuzu not edin!" }
      ],
      criteria: [
        "Hiç yapıştırıcı kullanmadan sadece katlama geometrisiyle taşıma sağlama",
        "En az 10 adet madeni parayı çökmeden taşıyabilmesi",
        "Deney sürecini fotoğraflayıp tatil günlüğüne kaydetme"
      ]
    },
    tips: {
      safetyTitle: "Tatil Bilişim ve Üretim Dengesi",
      safetyRules: [
        { bold: "Ekranı Kapat, Masaya Geç", text: "Bilgisayarda oyun oynamak yerine kendi ellerinle fiziksel bir nesne üretmek zekâyı çok daha fazla keskinleştirir." }
      ],
      myths: [
        { wrong: "Bir yapının sağlam olması için mutlaka ağır ve kalın demirden yapılması gerekir.", correct: "Hayır! Doğru üçgen kafes geometrisiyle hafif alüminyum veya karbon fiber yapılar çelikten kat kat dayanıklı olabilir." }
      ]
    },
    quiz: {
      question: "İnşaat vinçlerinde, köprülerde ve çatı iskeletlerinde dikdörtgen yerine sürekli birbirine bağlı üçgen kafes sistemlerinin (Truss) kullanılmasının temel sebebi nedir?",
      options: [
        { text: "A) Üçgenin en ucuz geometrik şekil olması", isCorrect: false },
        { text: "B) Üçgenlerin dış kuvvetler altında açılarını değiştirmeyip bükülmeye karşı en dirençli şekil olması", isCorrect: true },
        { text: "C) Kuşların konmasını engellemek", isCorrect: false },
        { text: "D) Rüzgârı tamamen durdurmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Üçgen geometrisi kuvvet uygulandığında <strong>açıları değişmeyen ve bükülmeyen tek şekil</strong> olduğu için mühendislikte kullanılır."
    },
    summaryRules: [
      { bold: "Geometri Güçtür", text: "Katlanan kâğıt devasa yükler taşır." },
      { bold: "Üçgen Kafesler (Truss)", text: "Köprülerin çökmez sırrını çözdük." },
      { bold: "Tatil Keyfi", text: "Ellerimizle üreterek dinleniyoruz." }
    ],
    homework: "Spagetti veya kâğıt köprünüzün fotoğrafını çekip kaç para taşıdığını bülteninize yazın.",
    nextWeekPreview: "Sömestr 2. Hafta: Biyotaklit & Doğanın Gizli Teknolojileri Bülteni!"
  },

  // 21. HAFTA
  {
    week: 21,
    date: "01 - 07 Şubat",
    hours: "Sömestr",
    unit: "SÖMESTR TATİLİ: Tasarım Macera Bülteni",
    unitBadge: "Sömestr 2",
    unitTheme: "tema-6",
    title: "Sömestr 2. Hafta: Doğanın Gizli Teknolojileri Bülteni",
    subtitle: "Biyotaklit Keşifleri, Hayvanların Süper Güçleri ve 2. Döneme Zihinsel Hazırlık",
    outcomeCode: "Sömestr & Biyotaklit Hazırlığı",
    targetSkill: "Biyo-İlham (Bio-Inspiration) & Doğa Gözlemi",
    curiosityQuestion: "Kertenkeleler (Gekolar) düz ve pürüzsüz bir cam tavanda aşağı düşmeden baş aşağı nasıl koşabilirler? Ayaklarında yapıştırıcı mı var?",
    roadmap: [
      { title: "Biyotaklit (Biomimicry) Nedir?", desc: "3.8 milyar yıllık doğa AR-GE'sini kopyalayan yeni nesil bilim." },
      { title: "Geko Kertenkelesi ve Van der Waals", desc: "Milyonlarca mikroskobik tüycükle atomik çekim gücü yaratan mucize ayaklar." },
      { title: "Balina Yüzgeçleri ve Rüzgâr Türbini", desc: "Kambur balinanın tırtıklı yüzgeçlerinden ilham alan sessiz pervaneler." },
      { title: "Pazartesi 2. Dönem Başlıyor", desc: "Doğadan Tasarıma ünitesi ile atölyemize bomba gibi dönüş." }
    ],
    section1: {
      title: "Geko Kertenkelesi ve Atomik Yapışma",
      subtitle: "Hiçbir yapıştırıcı veya vantuz olmadan cama yapışan mucizevi tasarım.",
      layout: "split-visual",
      card: {
        title: "Geko Ayağının Mühendislik Sırrı",
        icon: "🦎",
        desc: "Bilim insanlarının elektron mikroskobunda keşfettiği gerçek:",
        items: [
          { bold: "Mikroskobik Tüycükler (Setae)", text: "Gekonun ayak tabanında milimetrekarede yüzbinlerce mikroskobik kıl bulunur." },
          { bold: "Van der Waals Kuvveti", text: "Bu kıllar yüzeydeki atomlara o kadar yaklaşır ki moleküller arası çekim kuvveti devreye girer." },
          { bold: "Geko Bantları (Geckskin)", text: "Bugün astronotların uzay yürüyüşünde ve robotların camlara tırmanmasında bu biyotaklit bantları kullanılır!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Geko Ayağından Uzay Teknolojisine (Biomimicry)</text>
        
        <!-- Sol: Geko Ayağı -->
        <g transform="translate(50, 70)">
          <rect x="0" y="0" width="115" height="100" rx="8" fill="#162038" stroke="#34d399"/>
          <text x="57" y="30" fill="#34d399" font-size="22" text-anchor="middle">🦎</text>
          <text x="57" y="55" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Geko Ayağı</text>
          <text x="57" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">Mikroskobik tüycükler</text>
          <text x="57" y="88" fill="#94a3b8" font-size="8" text-anchor="middle">İzsiz yapışır ve ayrılır</text>
        </g>
        
        <!-- Merkez Ok -->
        <g transform="translate(175, 115)">
          <path d="M0 10 H50" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#arr)"/>
          <text x="25" y="0" fill="#00f0ff" font-size="8" font-weight="bold" text-anchor="middle">BİYOTAKLİT</text>
        </g>
        
        <!-- Sağ: Tırmanıcı Robot / Bant -->
        <g transform="translate(235, 70)">
          <rect x="0" y="0" width="115" height="100" rx="8" fill="#162038" stroke="#00f0ff"/>
          <text x="57" y="30" fill="#00f0ff" font-size="22" text-anchor="middle">🤖 🧗</text>
          <text x="57" y="55" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Geko-Robot</text>
          <text x="57" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">Gökdelen camı silen</text>
          <text x="57" y="88" fill="#94a3b8" font-size="8" text-anchor="middle">ve uzayda tutunan eldiven</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Doğanın 3 Büyük Mühendislik Dersi",
      subtitle: "Doğada çöp yoktur, her atık başka bir canlının hammaddesidir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Ders 1",
          title: "Sıfır Atık ve Döngüsellik",
          desc: "Ormanda dökülen hiçbir yaprak çöp olmaz; toprağa karışıp besin olur.",
          bullets: [
            "İnsan tasarımları da doğa gibi döngüsel (Cradle to Cradle) olmalıdır.",
            "Ürün eskiyince parçalarına ayrılıp yeni bir ürüne dönüşebilmelidir.",
            "Geleceğin mühendisleri atıksız sistemler kuracaktır."
          ]
        },
        {
          badge: "Ders 2",
          title: "Güneş Enerjisiyle Çalışma",
          desc: "Doğadaki tüm canlılar enerjisini doğrudan veya dolaylı olarak güneşten alır.",
          bullets: [
            "Bitkilerin fotosentez yapması en verimli güneş paneli teknolojisidir.",
            "Fosil yakıtlar yerine yenilenebilir güneş ve rüzgâr enerjisi.",
            "2. dönemde bu ilkelerle eko-teknolojiler tasarlayacağız."
          ]
        }
      ]
    },
    workshop: {
      title: "Doğa Kaşifi Gözlem Kartı",
      subtitle: "Tatilin son günlerinde açık havada bir canlıyı veya bitkiyi inceleyip tasarım fikri çıkarma.",
      steps: [
        { title: "Canlıyı Seç", desc: "Kuş, çam kozalağı, kedi patisi, ceviz veya kaktüs." },
        { title: "Süper Gücünü Yaz", desc: "Bu canlı neyi insan yapımı aletlerden çok daha iyi yapıyor?" },
        { title: "Tasarım Fikri Üret", desc: "Bu özellik hangi insan aletine uyarlanabilir? 3 cümleyle not al." }
      ],
      criteria: [
        "Doğal yapının fonksiyonel bir özelliğini doğru teşhis etme",
        "İnsan hayatını kolaylaştıracak yaratıcı bir ürün fikriyle bağ kurma",
        "Pazartesi günü derse zihinsel olarak hazır ve heyecanlı gelme"
      ]
    },
    tips: {
      safetyTitle: "Doğa ve Tasarım Etiği",
      safetyRules: [
        { bold: "Doğaya Zarar Vermeden İnceleyin", text: "Gözlem yaparken hiçbir canlının yuvasına, yaprağına veya dalına zarar vermeyin; sadece fotoğraflayın ve not alın." }
      ],
      myths: [
        { wrong: "İnsan teknolojisi doğadaki tüm canlılardan çok daha üstündür.", correct: "Bir kartalın gözü en iyi askeri kameradan 8 kat keskindir; bir örümceğin ipeği ise aynı kalınlıktaki çelik halattan 5 kat daha sağlamdır!" }
      ]
    },
    quiz: {
      question: "Kertenkelelerin camlarda yapıştırıcısız yürüyebilmesini, köpekbalıklarının suda sürtünmesiz yüzebilmesini inceleyip insan teknolojilerine uyarlayan bilim dalına ne ad verilir?",
      options: [
        { text: "A) Biyotaklit (Biomimicry)", isCorrect: true },
        { text: "B) Madencilik", isCorrect: false },
        { text: "C) Muhasebe", isCorrect: false },
        { text: "D) Heykeltıraşlık", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Doğadaki canlıların tasarım dehalarını teknolojiye aktarma bilimine <strong>Biyotaklit (Biomimicry)</strong> denir."
    },
    summaryRules: [
      { bold: "Tatil Bitti, Okul Başlıyor!", text: "Yeni dönemde harika projeler bizi bekliyor." },
      { bold: "Doğa Baş Öğretmendir", text: "3.8 milyar yıllık patentleri keşfedeceğiz." },
      { bold: "Geko Prensibi", text: "Kimyasal yapıştırıcı yerine mikroskobik tüycükler." }
    ],
    homework: "Pazartesi günü tasarım günlüğünüzü ve boya kalemlerinizi getirmeyi unutmayın.",
    nextWeekPreview: "6. Ünite Başlıyor: Doğadan Tasarıma (Biyotaklit) & Canlıların Yapısal İncelenmesi!"
  },

  // 22. HAFTA
  {
    week: 22,
    date: "08 - 14 Şubat",
    hours: "2 Ders Saati",
    unit: "6. ÜNİTE: DOĞADAN TASARIMA",
    unitBadge: "6. Ünite: Hafta 1",
    unitTheme: "tema-6",
    title: "Doğadan Tasarıma: Canlıların Yapısal Özellikleri",
    subtitle: "Doğal Formlar, İskeletler, Kabuklar ve Sanatsal Gözlem Becerisi",
    outcomeCode: "TT.7.6.1",
    targetSkill: "Sanatsal Doğa Gözlemi & Biçimsel Bileşen Analizi",
    curiosityQuestion: "Yumurta kabuğu parmak uçlarınızla hafifçe vurunca kırılırken, avucunuzun içinde iki ucundan ne kadar sıkarsanız sıkın neden asla kırılmaz?",
    roadmap: [
      { title: "2. Döneme Merhaba", desc: "Doğadan Tasarıma ünitesi yol haritası ve hedefler." },
      { title: "Doğal Yapıların Form Zekâsı", desc: "Kubbeler, kemerler, helezonik spiraller ve petekler." },
      { title: "Yumurta Kabuğu Mukavemeti", desc: "İncecik kalsiyum tabakasının kubbe geometrisi sayesinde devasa basınç taşıması." },
      { title: "Gözlemi İfade Etme", desc: "Doğadaki formu çizim, şema ve analitik kelimelerle kâğıda aktarma." }
    ],
    section1: {
      title: "Yumurta Kabuğu ve Kubbe Mucizesi",
      subtitle: "Kavisli yüzeyler üzerlerine gelen ağırlığı kenarlara doğru eşit dağıtır.",
      layout: "split-visual",
      card: {
        title: "Doğanın 3 Mükemmel Geometrisi",
        icon: "🥚",
        desc: "Mimar ve tasarımcıların doğadan öğrendiği formlar:",
        items: [
          { bold: "1. Kemer ve Kubbe (Yumurta / Kafatası)", text: "Dışarıdan gelen darbeleri tüm yüzeye yayarak içindeki hassas beyni ve embriyoyu korur." },
          { bold: "2. Altıgen Petek (Arı Kovanı)", text: "En az balmumu malzemesiyle en geniş hacmi sağlayan ve sıfır boşluk bırakan kusursuz matematik." },
          { bold: "3. Helezonik Spiral (Salyangoz / Çam Kozalağı)", text: "Altın oranla büyüyen, minimum alanda maksimum dayanıklılık sağlayan kabuk yapısı." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Yumurta Kabuğunda Kuvvet Dağılımı</text>
        
        <!-- Yumurta Şekli -->
        <g transform="translate(130, 65)">
          <path d="M70 20 C110 20 130 70 130 100 C130 130 100 145 70 145 C40 145 10 130 10 100 C10 70 30 20 70 20 Z" fill="#162038" stroke="#34d399" stroke-width="2.5"/>
          
          <!-- Üstten Gelen Kuvvet Oku -->
          <path d="M70 -5 V15" stroke="#ef4444" stroke-width="3" marker-end="url(#arr)"/>
          <text x="70" y="-10" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">Dış Basınç (F)</text>
          
          <!-- Dağılan Kuvvet Okları -->
          <path d="M60 28 Q30 50 25 90" stroke="#f59e0b" stroke-width="2" stroke-dasharray="2 2" fill="none"/>
          <path d="M80 28 Q110 50 115 90" stroke="#f59e0b" stroke-width="2" stroke-dasharray="2 2" fill="none"/>
          <text x="70" y="90" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Eşit Dağılan</text>
          <text x="70" y="102" fill="#38bdf8" font-size="7" text-anchor="middle">Yüzey Gerilimi</text>
        </g>
        
        <!-- Açıklama -->
        <text x="70" y="200" fill="#94a3b8" font-size="8">Stadyum çatıları ve cami kubbeleri bu prensiple tasarlanır.</text>
      </svg>`
    },
    section2: {
      title: "Altıgen Petek Yapısı ve Havacılık",
      subtitle: "Hafiflik ve dayanıklılık gerektiren uçak kanatlarında arı kovanı dokusu.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Havacılık Mühendisliği",
          title: "Honeycomb (Bal Peteği) Paneller",
          desc: "İki alüminyum levha arasına yerleştirilen altıgen petek ızgarası.",
          bullets: [
            "Dolu metal bir plakaya göre %80 daha hafiftir.",
            "Bükülmeye ve çarpmaya karşı inanılmaz derecede dayanıklıdır.",
            "Uçak kanatlarında, uydularda ve yarış arabalarında kullanılır."
          ]
        },
        {
          badge: "Doğadan Çıkarım",
          title: "En Az Malzeme, En Çok Verim",
          desc: "Arılar dairesel veya kare petek yapsalardı aralarda boşluk kalırdı.",
          bullets: [
            "Altıgen, boşluk bırakmadan alanı kapatan en ideal çokgendir.",
            "Doğa her zaman en tasarruflu ve verimli geometride karar kılar.",
            "Tasarımcı doğanın bu tasarruf ilkesini benimser."
          ]
        }
      ]
    },
    workshop: {
      title: "Doğal Form İskelet Çizimi",
      subtitle: "Sınıfa getirilen ceviz kabuğu, deniz kabuğu veya yaprak damarlarının yapısal analizi.",
      steps: [
        { title: "Nesneyi Yakından İnceleyin", desc: "Büyüteç yardımıyla ceviz kabuğunun kıvrımlarını veya yaprak damar ağını gözlemleyin." },
        { title: "İskelet Çizgilerini Çıkarın", desc: "Gereksiz detayları atıp sadece yük taşıyan ana damar hatlarını kâğıda çizin." },
        { title: "Mimari Yorum Katın", desc: "Bu damar ağı bir otoyol kavşağı veya bina çatısı olsaydı nasıl görünürdü?" }
      ],
      criteria: [
        "Doğal yapının taşıyıcı çizgilerini doğru teşhis edebilme",
        "Biçimsel bileşenleri sanatsal ve analitik dille ifade edebilme",
        "Çizime ölçek ve açıklayıcı teknik notlar ekleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Doğa Gözlemcisi Bakışı",
      safetyRules: [
        { bold: "Ayrıntılardaki Gizli Zeka", text: "Bir yaprağa baktığınızda sadece yeşil bir renk değil; suyu taşıyan kusursuz bir boru tesisatı ağı görün." }
      ],
      myths: [
        { wrong: "Düz çizgiler doğaldır, eğri çizgiler yapaydır.", correct: "Tam tersi! Doğada neredeyse hiç cetvelle çizilmiş dümdüz çizgi yoktur; doğa her zaman organik kavisler ve eğriler kullanır." }
      ]
    },
    quiz: {
      question: "Havacılık ve uzay sanayisinde uçak kanatlarının hem çok hafif hem de darbelere karşı inanılmaz dayanıklı olmasını sağlayan ve arı kovanlarından esinlenilen ızgara yapısına ne ad verilir?",
      options: [
        { text: "A) Honeycomb (Bal Peteği Yapısı)", isCorrect: true },
        { text: "B) Kare Çerçeve", isCorrect: false },
        { text: "C) Düz Sac", isCorrect: false },
        { text: "D) Zımpara Kâğıdı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Uçaklarda ve uydularda kullanılan ultra hafif ve sağlam altıgen kompozit panellere <strong>Honeycomb (Bal Peteği)</strong> yapısı denir."
    },
    summaryRules: [
      { bold: "Doğada İsraf Yoktur", text: "En az malzeme ile en çok dayanıklılık." },
      { bold: "Kubbeler ve Petekler", text: "Yumurta kabuğu ve arı kovanı dehası." },
      { bold: "Biyotaklit Derinleşiyor", text: "Haftaya nilüfer yaprağı ve cırt cırt bantları inceliyoruz!" }
    ],
    homework: "Evinizde bir cevizi kırıp kabuğunun iç kubbe çizgilerini inceleyin ve defterinize taslağını çizin.",
    nextWeekPreview: "Biyotaklit (Doğayı Taklit Etme): Yusufçuk, Cırt Cırt ve Nilüfer Çiçeği!"
  },

  // 23. HAFTA
  {
    week: 23,
    date: "15 - 21 Şubat",
    hours: "2 Ders Saati",
    unit: "6. ÜNİTE: DOĞADAN TASARIMA",
    unitBadge: "6. Ünite: Hafta 2",
    unitTheme: "tema-6",
    title: "Biyotaklit (Biomimicry) Kavramı ve İnovasyon",
    subtitle: "Doğanın Patentleri: Cırt Cırt Bant, Nilüfer Etkisi (Lotus Effect) ve Köpekbalığı Derisi",
    outcomeCode: "TT.7.6.2",
    targetSkill: "Biyotaklit Analizi & Problem Çözme Eşleştirmesi",
    curiosityQuestion: "Çamurlu bir gölette açan bembeyaz nilüfer çiçeğinin yaprakları üzerine çamurlu su döküldüğünde neden zerre kadar leke tutmaz ve kendi kendini temizler?",
    roadmap: [
      { title: "Biyotaklitin Doğuş Hikayesi", desc: "George de Mestral'in köpeğinin tüylerine yapışan pıtrak dikenlerinden cırt cırtı icadı." },
      { title: "Lotus Etkisi (Kendini Temizleyen Yüzeyler)", desc: "Mikroskobik tepeciklerle su damlalarını yuvarlayıp tozu süpüren nano-teknoloji." },
      { title: "Yusufçuk Böceği ve Helikopter", desc: "Havada asılı kalan ve 360 derece anında manevra yapabilen kanat aerodinamiği." },
      { title: "Günlük Hayatta Biyotaklit Eşleştirmesi", desc: "Canlı mekanizması ile insan icatları arasındaki birebir bağ." }
    ],
    section1: {
      title: "Pıtrak Dikeninden Cırt Cırt Banta (Velcro)",
      subtitle: "1941 yılında İsviçreli bir mühendisin doğayı mikroskop altında incelemesiyle doğan devrim.",
      layout: "split-visual",
      card: {
        title: "Cırt Cırtın Biyotaklit Sırrı",
        icon: "🌿",
        desc: "Doğadaki kanca mekanizmasının taklidi:",
        items: [
          { bold: "Pıtrak Dikeni (Burdock)", text: "Dikenlerin ucunda gözle görülmeyen yüzlerce minik kanca vardır; kumaş veya kürk halkalarına takılır." },
          { bold: "Velcro Bant Tasarımı", text: "Bir tarafı minik plastik kancalardan, diğer tarafı yumuşak iplik halkalarından üretilir." },
          { bold: "Kullanım Alanları", text: "Ayakkabı bağcıklarından astronotların uzay giysilerine kadar milyonlarca alanda hayatı kolaylaştırır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Lotus (Nilüfer) Etkisi: Süper Hidrofobik Yüzey</text>
        
        <!-- Yaprak Yüzeyi (Nano Tepeler) -->
        <g transform="translate(60, 140)">
          <path d="M0 30 Q15 0 30 30 Q45 0 60 30 Q75 0 90 30 Q105 0 120 30 Q135 0 150 30 Q165 0 180 30 Q195 0 210 30 Q225 0 240 30 Q255 0 270 30" fill="none" stroke="#34d399" stroke-width="2"/>
          <text x="135" y="48" fill="#34d399" font-size="8" text-anchor="middle">Mikroskobik Mumsu Nano-Tepeler</text>
        </g>
        
        <!-- Yuvarlanan Su Damlası -->
        <circle cx="150" cy="120" r="24" fill="#38bdf8" opacity="0.4" stroke="#00f0ff" stroke-width="2"/>
        <text x="150" y="124" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Su Damlası</text>
        
        <!-- Kir / Toz Parçacığı -->
        <circle cx="168" cy="132" r="5" fill="#f59e0b"/>
        <text x="195" y="125" fill="#fde68a" font-size="7">Tozu Alıp Götürür</text>
        <path d="M170 120 H205" stroke="#00f0ff" stroke-width="1.5" marker-end="url(#arr)"/>
        
        <text x="200" y="200" fill="#94a3b8" font-size="8" text-anchor="middle">Kendi kendini temizleyen dış cephe boyaları ve leke tutmayan kumaşlar.</text>
      </svg>`
    },
    section2: {
      title: "Havadaki ve Denizdeki Biyotaklit",
      subtitle: "Milyonlarca yıldır sürtünmeyi yenen canlılar mühendislerin kılavuzudur.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Hava Araçları",
          title: "Yusufçuk Böceği ve Helikopter",
          desc: "İgor Sikorsky helikopteri tasarlarken yusufçuğu incelemiştir.",
          bullets: [
            "Dört kanadını birbirinden bağımsız çırparak havada asılı kalabilme.",
            "Geriye doğru uçabilen ve aniden 90 derece dönebilen aerodinamik.",
            "Askeri ve sivil kurtarma helikopterlerinin ilham kaynağı."
          ]
        },
        {
          badge: "Deniz Teknolojileri",
          title: "Köpekbalığı Derisi ve Mayolar",
          desc: "Dentikül adı verilen mikroskobik pulların sürtünmeyi sıfırlaması.",
          bullets: [
            "Su türbülansını keserek hız rekorları kıran olimpik mayolar (Fastskin).",
            "Bakterilerin yüzeye tutunmasını engelleyen hastane kaplamaları.",
            "Kimyasal dezenfektan kullanmadan mikrop tutmayan yüzeyler!"
          ]
        }
      ]
    },
    workshop: {
      title: "Biyotaklit Eşleştirme Kartları",
      subtitle: "10 canlı ve 10 insan icadını neden-sonuç ilişkisiyle eşleştirme atölyesi.",
      steps: [
        { title: "Canlıyı İncele", desc: "Kutup ayısı kürkü, yusufçuk, nilüfer yaprağı, fil hortumu, baykuş kanatları." },
        { title: "İcatla Eşleştir", desc: "Sessiz rüzgâr türbini, termal mont, robot kol, helikopter, leke tutmaz boya." },
        { title: "Çalışma Prensibini Yaz", desc: "Hangi canlı özelliği hangi probleme çözüm olmuştur? Gerekçelendirin." }
      ],
      criteria: [
        "Canlıların biyolojik adaptasyonlarını doğru kavrama",
        "Biyotaklit ürün ile canlı arasındaki mekanizma bağını açıklayabilme",
        "Takım çalışmasında fikirlerini kanıtlarla savunabilme"
      ]
    },
    tips: {
      safetyTitle: "Biyotaklit Felsefesi",
      safetyRules: [
        { bold: "Doğadan Öğren, Doğayı Sömürme", text: "Biyotaklit canlıları avlamak veya kaynakları tüketmek değil; onların tasarım prensiplerini öğrenip doğaya saygıyla üretmektir." }
      ],
      myths: [
        { wrong: "Biyotaklit sadece hayvanların dış görünüşünü şekil olarak benzetmektir.", correct: "Biyotaklit şekilden çok; fonksiyon, malzeme ve ekosistem düzeyinde derin çalışma mekanizmalarını taklit eder." }
      ]
    },
    quiz: {
      question: "Nilüfer (Lotus) çiçeği yapraklarının mikroskobik pürüzlü yüzeyi sayesinde su damlalarının yapışmayıp yuvarlanarak üzerindeki tozu kiri temizlemesi prensibinden esinlenerek hangi teknolojik ürün geliştirilmiştir?",
      options: [
        { text: "A) Kendi kendini temizleyen dış cephe boyaları ve kumaşlar", isCorrect: true },
        { text: "B) Ağır döküm demir tencereler", isCorrect: false },
        { text: "C) Pil şarj aletleri", isCorrect: false },
        { text: "D) Kablolu kulaklıklar", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Lotus etkisi (Lotus Effect) sayesinde <strong>leke tutmayan kumaşlar ve yağmurla kendi kendini temizleyen bina boyaları</strong> üretilmiştir."
    },
    summaryRules: [
      { bold: "Biyotaklit = Doğa AR-GE'si", text: "Milyonlarca yıllık test edilmiş çözümler." },
      { bold: "Lotus, Pıtrak, Yusufçuk", text: "En ünlü biyotaklit devrimlerini öğrendik." },
      { bold: "Sıra Bizde", text: "Haftaya kendi biyotaklit ürün taslağımızı çizeceğiz!" }
    ],
    homework: "Baykuşların gece avlanırken nasıl tamamen sessiz uçabildiğini araştırın ve rüzgâr türbinleriyle ilişkisini yazın.",
    nextWeekPreview: "Biyotaklit Yaklaşımı ile Bir Tasarım Problemini Çözme ve Taslak Çizimi!"
  },

  // 24. HAFTA
  {
    week: 24,
    date: "22 - 28 Şubat",
    hours: "2 Ders Saati",
    unit: "6. ÜNİTE: DOĞADAN TASARIMA",
    unitBadge: "6. Ünite: Hafta 3",
    unitTheme: "tema-6",
    title: "Biyotaklit ile Problem Çözme ve Taslak Geliştirme",
    subtitle: "Doğadan Esinlenen Taslaklar: Mimari veya Endüstriyel Bir Problemin Çözümlenmesi",
    outcomeCode: "TT.7.6.2 & TT.7.6.3",
    targetSkill: "Biyotaklit Odaklı Fikir Üretimi & Eskiz Çizimi",
    curiosityQuestion: "Ağaçkakan kuşu saatte 25 km hızla ağaç gövdesine saniyede 20 kez kafasını vururken beyni neden hiç sarsılmaz ve zarar görmez?",
    roadmap: [
      { title: "Ağaçkakan ve Darbe Emiciler", desc: "Ağaçkakanın süngerimsi kafatası kemiklerinden esinlenen bisiklet ve motosiklet kaskları." },
      { title: "Fil Hortumu ve Biyonik Robot Kollar", desc: "Kemiksiz, kas demetleriyle her yöne bükülen esnek fabrikasyon robot kolları." },
      { title: "Problemi Doğayla Eşleştirme", desc: "'Doğa bu problemi nasıl çözmüştü?' sorusuyla beyin fırtınası." },
      { title: "Biyotaklit Taslak Çizimi", desc: "Doğal mekanizmayı teknik bir ürün çizimine dönüştürme." }
    ],
    section1: {
      title: "Ağaçkakan Mucizesi ve Yeni Nesil Kasklar",
      subtitle: "Şiddetli darbeleri sönümleyen süngerimsi kafatası mimarisi.",
      layout: "split-visual",
      card: {
        title: "Ağaçkakanın 3 Korumalı Sistemi",
        icon: "🪓",
        desc: "Kask tasarımcılarına ilham veren biyolojik yapılar:",
        items: [
          { bold: "1. Esnek Gaga Ucu", text: "Gaganın dış tabakası elastiktir; ilk çarpma anındaki şok dalgasını emer." },
          { bold: "2. Süngerimsi Kemik Tabakası", text: "Beyni saran kemik plaka delikli mikro gözeneklerden oluşur; darbeyi dağıtır." },
          { bold: "3. Dil Kemiği (Hyoid)", text: "Dil kafatasının etrafını emniyet kemeri gibi sararak beyni sabit tutar!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#34d399" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Ağaçkakan Analojisi ile Darbe Emici Kask Tasarımı</text>
        
        <!-- Sol: Ağaçkakan Kafatası Kesiti -->
        <g transform="translate(50, 70)">
          <path d="M10 50 Q40 10 90 20 Q120 40 100 80 Q60 90 10 50 Z" fill="#162038" stroke="#34d399" stroke-width="2"/>
          <text x="55" y="55" fill="#34d399" font-size="8" text-anchor="middle">Süngerimsi</text>
          <text x="55" y="65" fill="#34d399" font-size="8" text-anchor="middle">Kemik Doku</text>
          <path d="M10 50 L-20 60 L10 55" fill="#f59e0b" stroke="#fde68a"/>
        </g>
        
        <!-- Ok -->
        <path d="M180 115 H210" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#arr)"/>
        
        <!-- Sağ: Biyonik Kask -->
        <g transform="translate(230, 70)">
          <!-- Kask Profili -->
          <path d="M10 50 C10 10 110 10 110 50 C110 80 80 85 10 50 Z" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
          <rect x="35" y="30" width="50" height="25" rx="4" fill="#38bdf8" opacity="0.3"/>
          <text x="60" y="45" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">Çok Katmanlı</text>
          <text x="60" y="54" fill="#a5f3fc" font-size="6" text-anchor="middle">Darbe Sönümleyici</text>
          <text x="60" y="95" fill="#00f0ff" font-size="8" font-weight="bold" text-anchor="middle">Biyonik Kask Taslağı</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Fil Hortumu ve Biyonik Asistanlar",
      subtitle: "Kemiksiz esneklik: Hem hassas bir yumurtayı tutabilen hem de kütükleri kaldıran mekanizma.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Endüstriyel Robotik",
          title: "Bionic Handling Assistant",
          desc: "Alman Festo firmasının fil hortumunu birebir taklit ettiği robot kol.",
          bullets: [
            "Hava körükleriyle çalışan yumuşak ve esnek plastik omurlar.",
            "Fabrikalarda insan işçilerin yanında çarpma riski olmadan güvenle çalışabilme.",
            "Hassas meyveleri ezmeden toplayan tarım robotları."
          ]
        },
        {
          badge: "Tasarım Adımları",
          title: "Biyotaklit Fikir Formülü",
          desc: "Kendi projenizi geliştirirken izleyeceğiniz 3 soru:",
          bullets: [
            "1. Problem: 'Kırılan telefon ekranlarını nasıl koruruz?'",
            "2. Doğa Çözümü: 'Kaplumbağa kabuğu veya armadillo zırhı.'",
            "3. Tasarım Taslağı: 'Katlanabilir zırh plakalı telefon kılıfı.'"
          ]
        }
      ]
    },
    workshop: {
      title: "Doğadan İlham Alan Çözüm Taslağı",
      subtitle: "Öğrencilerin günlük bir problemi seçip doğadan ilhamla özgün bir alet eskizi çizmesi.",
      steps: [
        { title: "Problemi Belirleyin", desc: "Örn: Kaygan zeminde düşmeler, ağır yük taşıma, gürültü kirliliği veya su israfı." },
        { title: "İlham Alınacak Canlı", desc: "Hangi canlının özelliği bu sorunu çözer? (Keçi toynağı mı, deve kirpiği mi, penguen derisi mi?)" },
        { title: "Taslağı Çizin", desc: "A4 kâğıdına ürünün eskizini çizin, canlının taklit edilen yerini okla belirtin." }
      ],
      criteria: [
        "Doğadaki canlı mekanizmasının doğru analiz edilip ürüne aktarılması",
        "Çizimde açıklayıcı teknik etiketler ve çalışma prensibinin gösterilmesi",
        "Özgün, inovatif ve gerçekçi bir çözüm önerisi sunabilme"
      ]
    },
    tips: {
      safetyTitle: "Biyotaklit Tasarımında Derinlik",
      safetyRules: [
        { bold: "Fonksiyona Odaklanın", text: "Sadece dış şeklini hayvana benzetmek oyun hamurudur; gerçek biyotaklit canlının fiziksel işlevini çözmektir." }
      ],
      myths: [
        { wrong: "Doğadaki her canlı mükemmeldir, hiçbir hatası yoktur.", correct: "Canlılar milyonlarca yıllık evrimle kendi çevrelerine uyum sağlamıştır; bizim görevimiz insan problemini çözen doğru canlıyı seçmektir." }
      ]
    },
    quiz: {
      question: "Fil hortumunun kemiksiz, kas demetleriyle her yöne bükülebilen ve hem bir yumurtayı ezmeden tutup hem de ağır yükleri kaldırabilen yapısından esinlenerek hangi teknoloji geliştirilmiştir?",
      options: [
        { text: "A) İnsanlarla güvenle çalışabilen esnek biyonik robot kollar", isCorrect: true },
        { text: "B) Kömür sobaları", isCorrect: false },
        { text: "C) Sabit masa ayakları", isCorrect: false },
        { text: "D) Cam şişeler", isCorrect: false },
        { text: "D) Plastik cetveller", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Fil hortumunun esnek yapısından ilham alınarak fabrikalarda insanlarla güvenle çalışan <strong>Biyonik Robot Kollar (Bionic Handling Assistant)</strong> tasarlanmıştır."
    },
    summaryRules: [
      { bold: "Ağaçkakan = Darbe Emici Kask", text: "Mikro gözenekli kemik mimarisi." },
      { bold: "Fil Hortumu = Biyonik Kol", text: "Hassas ve güçlü esnek robotik." },
      { bold: "Taslaktan Modele", text: "Haftaya bu fikirleri makete dönüştürüyoruz!" }
    ],
    homework: "Çizdiğiniz biyotaklit taslağı için evdeki artık malzemelerden (tel, karton, pet şişe) bir malzeme listesi hazırlayın.",
    nextWeekPreview: "Yeşilay Haftası & Biyotaklit Yaklaşımıyla Ürün Modeli / Maketi Oluşturma!"
  },

  // 25. HAFTA
  {
    week: 25,
    date: "01 - 07 Mart",
    hours: "2 Ders Saati",
    unit: "6. ÜNİTE: DOĞADAN TASARIMA",
    unitBadge: "6. Ünite: Hafta 4",
    unitTheme: "tema-6",
    title: "Yeşilay Haftası & Biyotaklit Ürün Modeli / Maketi",
    subtitle: "Taslaktan Fiziksel Makete: 3 Boyutlu Prototip Üretimi, Sağlıklı Yaşam ve Malzeme Bütünlüğü",
    outcomeCode: "TT.7.6.3 (b)",
    targetSkill: "Üç Boyutlu Maket / Prototip Yapımı & Yeşilay Bilinci",
    curiosityQuestion: "Yeşilay'ın savunduğu sağlıklı ve bağımlılıktan uzak yaşam ile doğanın temiz ve dengeli işleyişi arasında nasıl bir ortak felsefe vardır?",
    roadmap: [
      { title: "1-7 Mart Yeşilay Haftası", desc: "Zararlı alışkanlıklardan uzak, spor, sanat ve teknolojiyle üreten sağlıklı nesiller." },
      { title: "Eskizden Makete Geçiş", desc: "24. haftada çizilen biyotaklit taslağını 3D fiziksel makete dönüştürme." },
      { title: "Model Yapım Teknikleri", desc: "Karton birleştirme, sıcak silikon, tel bükme ve modüler eklemleme." },
      { title: "Fonksiyon Testi", desc: "Yapılan maketin amaçlanan biyotaklit hareketini yapıp yapmadığını sınama." }
    ],
    section1: {
      title: "Maket ve Prototip: Fikrin Elle Tutulur Hali",
      subtitle: "Bir maket yapmak binlerce sayfa rapordan daha ikna edicidir.",
      layout: "split-visual",
      card: {
        title: "Prototiplemenin 3 Aşaması",
        icon: "✂️",
        desc: "Mühendislikte prototip kademeleri:",
        items: [
          { bold: "1. Kaba Maket (Mock-up)", text: "Karton ve bantla sadece boyut ve hacmi görmek için yapılan hızlı model." },
          { bold: "2. Çalışan Prototip (Working Model)", text: "Hareketli parçaları, eklemleri veya lastikli mekanizması işleyen model." },
          { bold: "3. Son Ürün Sunumu", text: "Boyanmış, etiketlenmiş ve kullanıcıya sergilenmeye hazır nihai eser." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#10b981" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Taslaktan Fiziksel Makete Üretim Hattı</text>
        
        <!-- Adım 1: Kâğıt Taslak -->
        <g transform="translate(40, 75)">
          <rect x="0" y="0" width="85" height="90" rx="6" fill="#162038" stroke="#38bdf8"/>
          <text x="42" y="30" fill="#38bdf8" font-size="18" text-anchor="middle">📄</text>
          <text x="42" y="55" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">1. 2D Taslak</text>
          <text x="42" y="70" fill="#94a3b8" font-size="7" text-anchor="middle">Çizim ve Ölçü</text>
        </g>
        
        <path d="M135 120 H155" stroke="#10b981" stroke-width="2"/>
        
        <!-- Adım 2: Karton / Tel Kesimi -->
        <g transform="translate(160, 75)">
          <rect x="0" y="0" width="85" height="90" rx="6" fill="#162038" stroke="#f59e0b"/>
          <text x="42" y="30" fill="#f59e0b" font-size="18" text-anchor="middle">✂️ 📐</text>
          <text x="42" y="55" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">2. Malzeme Kesimi</text>
          <text x="42" y="70" fill="#94a3b8" font-size="7" text-anchor="middle">Parçaların İcadı</text>
        </g>
        
        <path d="M255 120 H275" stroke="#10b981" stroke-width="2"/>
        
        <!-- Adım 3: 3D Maket -->
        <g transform="translate(280, 75)">
          <rect x="0" y="0" width="85" height="90" rx="6" fill="#162038" stroke="#10b981"/>
          <text x="42" y="30" fill="#10b981" font-size="18" text-anchor="middle">🏆 🤖</text>
          <text x="42" y="55" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">3. 3D Maket</text>
          <text x="42" y="70" fill="#a7f3d0" font-size="7" text-anchor="middle">Biyotaklit Model</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Yeşilay Ruhu: Sağlıklı Yaşam ve Üretkenlik",
      subtitle: "Bağımlılığın panzehiri sanat, teknoloji, spor ve üretmektir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Sosyal Değerler",
          title: "Temiz Zihin, Güçlü Tasarım",
          desc: "Tütün, alkol ve ekran bağımlılığı beynin yaratıcı merkezlerini köreltir.",
          bullets: [
            "Boş zamanları tüketerek değil, atölyede bir şeyler üreterek değerlendirmek.",
            "Yeşilay Haftasında sağlıklı nefes alan sporcu ve tasarımcı gençlik.",
            "Doğanın sağlığını korumak kendi sağlığımızı korumaktır."
          ]
        },
        {
          badge: "Maket Kalitesi",
          title: "Birleştirme ve Sağlamlık",
          desc: "Maketin elinize aldığınızda dağılmaması için kritik ipuçları.",
          bullets: [
            "Doğru yapıştırıcı seçimi (Karton için kâğıt tutkalı, plastik için silikon).",
            "Eklem yerlerine takviye üçgenler (destek köşebentleri) koymak.",
            "Ağırlık merkezini dengede tutarak devrilmesini önlemek."
          ]
        }
      ]
    },
    workshop: {
      title: "Biyotaklit Maket Üretim Atölyesi",
      subtitle: "Sınıf laboratuvarında 24. haftadaki taslağın 3 boyutlu maketinin yapılması.",
      steps: [
        { title: "Parçaları Çıkarın", desc: "Karton, pipet veya tel üzerine parçaları şablonla çizip dikkatlice kesin." },
        { title: "Gövdeyi Monte Edin", desc: "Tabandan başlayarak parçaları birbirine yapıştırın ve kurumasını bekleyin." },
        { title: "Biyotaklit Mekanizmasını Test Edin", desc: "Hareketli kısım (örneğin açılır kapanır kanat veya yaylanan ayak) çalışıyor mu?" }
      ],
      criteria: [
        "Taslaktaki ölçü ve oranlara uygun bir 3D maket ortaya koyma",
        "Atık ve geri dönüşüm malzemelerini yaratıcı şekilde kullanabilme",
        "Atölye çalışma kurallarına, temizlik ve iş güvenliğine tam riayet etme"
      ]
    },
    tips: {
      safetyTitle: "Atölye Güvenlik Kuralları",
      safetyRules: [
        { bold: "Sıcak Silikon Tabancası", text: "Silikon tabancasının metal ucuna asla dokunmayın; kullandıktan sonra mutlaka sehpasının üzerine bırakın." }
      ],
      myths: [
        { wrong: "İlk denemede maket kusursuz durmazsa proje başarısız demektir.", correct: "Prototiplemenin amacı zaten hataları erkenden görüp düzeltmektir; her düzeltme tasarımı mükemmelleştirir." }
      ]
    },
    quiz: {
      question: "Bir tasarım fikrinin seri üretime geçmeden önce boyutlarını, ergonomisini ve çalışmasını test etmek amacıyla karton, plastik veya kilden yapılan ilk 3 boyutlu modeline ne ad verilir?",
      options: [
        { text: "A) Prototip / Maket (Mock-up)", isCorrect: true },
        { text: "B) Hurda", isCorrect: false },
        { text: "C) Barkod", isCorrect: false },
        { text: "D) Fatura", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Tasarımın elle tutulur ilk fiziksel test modeline <strong>Prototip veya Maket (Mock-up)</strong> denir."
    },
    summaryRules: [
      { bold: "Fikir Somutlaştı", text: "Kâğıttan 3D fiziksel makete geçtik." },
      { bold: "Yeşilay Bilinci", text: "Sağlıklı yaşam ve üretimle geleceği kuruyoruz." },
      { bold: "Ara Tatil Geliyor", text: "Haftaya Ramazan Bayramı ve İstiklâl Marşı atölyesi!" }
    ],
    homework: "Yaptığınız maketin fotoğraflarını çekin ve tasarım günlüğünüze 'Neleri geliştirebilirim?' başlığı altında 2 not yazın.",
    nextWeekPreview: "2. Ara Tatil & Ramazan Bayramı & 12 Mart İstiklâl Marşı: Bağımsızlık ve Teknoloji Atölyesi!"
  },

  // 26. HAFTA
  {
    week: 26,
    date: "08 - 14 Mart",
    hours: "Ara Tatil",
    unit: "ARA TATİL & RAMAZAN BAYRAMI & 12 MART İSTİKLÂL MARŞI",
    unitBadge: "2. Ara Tatil",
    unitTheme: "tema-6",
    title: "2. Ara Tatil: Bağımsızlık, Değerler ve Teknoloji Atölyesi",
    subtitle: "12 Mart İstiklâl Marşı'nın Kabulü & Ramazan Bayramı Tasarım Maceraları",
    outcomeCode: "Ara Tatil & Millî Değerler Görevi",
    targetSkill: "Millî Değerlerle Tasarım Bütünleştirme & Bayram Dayanışması",
    curiosityQuestion: "Mehmet Âkif Ersoy 'Korkma, sönmez bu şafaklarda yüzen al sancak' derken bağımsızlığın sembolü olan bayrağımızı ve vatanımızı bugün hangi teknolojilerle koruyoruz?",
    roadmap: [
      { title: "12 Mart ve İstiklâl Ruhu", desc: "Millî şairimiz Mehmet Âkif Ersoy'un ideali: İlim ve ahlakla yükselen Asım'ın Nesli." },
      { title: "Ramazan Bayramı ve Paylaşma", desc: "Bayramlaşma, aile dayanışması ve yardımlaşmayı kolaylaştıran dijital tasarımlar." },
      { title: "Savunma ve Havacılık Sanayii", desc: "Bayraktar TB3, Kızılelma, KAAN ve Türkiye'nin yerli mühendislik zaferleri." },
      { title: "Tatil Sonrası Enerji Ünitesi", desc: "7. Ünite: Enerjinin Dönüşümü ve Yenilenebilir Enerji Tasarımlarına hazırlık." }
    ],
    section1: {
      title: "Asım'ın Nesli: İlimle Yükselen Gençlik",
      subtitle: "İstiklâl Marşımızın ruhu, bağımsız Türkiye'nin kendi teknolojisini üretmesiyle taçlanıyor.",
      layout: "split-visual",
      card: {
        title: "Mehmet Âkif'in Gençlik Vizyonu",
        icon: "🇹🇷",
        desc: "İstiklâl şairimizin gençlere emanet ettiği iki büyük kanat:",
        items: [
          { bold: "1. Yüksek Ahlak ve Merhamet", text: "Teknolojiyi insanlığı yok etmek için değil, yaşatmak ve mazluma el uzatmak için kullanmak." },
          { bold: "2. Çağdaş Bilim ve Teknik", text: "Garp'ın (Batı'nın) ilmini ve fennini almak, kendi millî kültürüyle harmanlayıp daha iyisini üretmek." },
          { bold: "3. Tam Bağımsızlık", text: "Göklerde, denizlerde ve siber vatanda kendi yerli yazılım ve tasarımlarımızla var olmak." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#ef4444" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">İstiklâl'den İstikbale: Millî Teknoloji Hamlesi</text>
        
        <!-- Türk Bayrağı Hilal ve Yıldız -->
        <g transform="translate(60, 65)">
          <circle cx="45" cy="45" r="30" fill="#ef4444"/>
          <circle cx="53" cy="45" r="24" fill="#0c1322"/>
          <!-- Yıldız -->
          <polygon points="70,45 74,38 72,48 78,43 72,43" fill="#ef4444"/>
          <text x="45" y="95" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">12 Mart İstiklâl Marşı</text>
        </g>
        
        <!-- Köprü Oku -->
        <path d="M150 110 H180" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#arr)"/>
        
        <!-- Yerli İHA / Kızılelma Silüeti -->
        <g transform="translate(200, 70)">
          <!-- Delta Kanat Uçak -->
          <polygon points="80,15 140,75 125,75 80,50 35,75 20,75" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
          <circle cx="80" cy="40" r="4" fill="#00f0ff"/>
          <text x="80" y="95" fill="#a5f3fc" font-size="8" font-weight="bold" text-anchor="middle">Millî Muharip Uçak (KAAN)</text>
          <text x="80" y="107" fill="#94a3b8" font-size="7" text-anchor="middle">İstikbal Göklerdedir!</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Ramazan Bayramı ve Paylaşma Kültürü",
      subtitle: "Bilişim ve tasarım sadece makineler için değil, gönüller inşa etmek içindir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Manevi Değerler",
          title: "Bayram Sevinci ve Dayanışma",
          desc: "Büyükleri ziyaret etmek, küsleri barıştırmak ve çocukları sevindirmek.",
          bullets: [
            "İhtiyaç sahiplerine gizlice yardım eden 'Zimem Defteri' Osmanlı geleneği.",
            "Bayram harçlıklarıyla teknolojik bir kitap veya atölye malzemesi almak.",
            "Akrabalarla ekran başında değil, yüz yüze sohbetin tadını çıkarmak."
          ]
        },
        {
          badge: "Tatil Sonrası Hazırlık",
          title: "Enerjinin Dönüşümü Ünitesi",
          desc: "Tatil biter bitmez yeşil enerji dünyasına giriyoruz.",
          bullets: [
            "Rüzgâr gülleri, güneş panelleri ve hidroelektrik santralleri.",
            "Dünyamızı kurtaracak temiz enerji tasarımları.",
            "Tatil boyunca bol bol dinlenip enerji toplayın!"
          ]
        }
      ]
    },
    workshop: {
      title: "İstiklâl ve Bayrak Tasarım Kartı",
      subtitle: "Öğrencilerin İstiklâl Marşı'nın en sevdikleri bir mısrasını modern grafik tasarım ilkeleriyle posterleştirmesi.",
      steps: [
        { title: "Bir Mısra Seçin", desc: "'Hakkıdır, hür yaşamış, bayrağımın hürriyet' veya 'Ben ezelden beridir hür yaşadım, hür yaşarım!'" },
        { title: "Tipografi ve Renk", desc: "Kırmızı, beyaz ve antrasit renkleriyle güçlü bir yazı kompozisyonu kurun." },
        { title: "Teknoloji Motifi Ekleyin", desc: "Zemine hafif devre yolları veya fütüristik çizgiler ekleyerek geleceğe bağlayın." }
      ],
      criteria: [
        "12 Mart ruhuna ve bayrağımızın manevi değerine tam saygı gösterme",
        "Tipografi hiyerarşisi ve kontrast ilkelerini doğru uygulama",
        "Ramazan Bayramı tatilini ailece huzur ve mutlulukla geçirme"
      ]
    },
    tips: {
      safetyTitle: "Tatil Tavsiyeleri",
      safetyRules: [
        { bold: "Bayramda Ekranı Kenara Bırakın", text: "Büyüklerinizin elini öpün, hikâyelerini dinleyin; hiçbir sanal bildirim ailenizle paylaşılan bayram sofrasından değerli değildir." }
      ],
      myths: [
        { wrong: "Tasarımcılar sadece teknik makinelerle ilgilenir, edebiyat ve tarihe ihtiyaç duymaz.", correct: "Kendi kültürünü, dilini ve tarihini bilmeyen bir tasarımcı asla milletine ve insanlığa faydalı özgün bir eser üretemez." }
      ]
    },
    quiz: {
      question: "12 Mart 1921'de kabul edilen İstiklâl Marşımızın şairi Mehmet Âkif Ersoy'un gençlere ilim, ahlak ve teknolojiyle yükselmeyi vasiyet ettiği ideal gençlik sembolü aşağıdakilerden hangisidir?",
      options: [
        { text: "A) Asım'ın Nesli", isCorrect: true },
        { text: "B) Lale Devri Gençliği", isCorrect: false },
        { text: "C) Sanal Oyuncular", isCorrect: false },
        { text: "D) Robotik Kulübü", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Duygu Dolu Cevap: A!</strong> Mehmet Âkif Ersoy, ahlakı ve bilimi bir arada taşıyan örnek Türk gençliğini <strong>Asım'ın Nesli</strong> olarak tanımlamıştır."
    },
    summaryRules: [
      { bold: "Hayırlı Bayramlar!", text: "Ailenizle mutlu ve huzurlu bir tatil dileriz." },
      { bold: "12 Mart Ruhu", text: "Korkmadan, üreterek vatanımıza hizmet ediyoruz." },
      { bold: "Haftaya Enerji Geliyor", text: "Pazartesi günü temiz enerji tasarımlarıyla buluşuyoruz!" }
    ],
    homework: "Bayramda büyüklerinize 'Sizin gençliğinizde en büyük teknolojik yenilik neydi?' diye sorup not alın.",
    nextWeekPreview: "7. Ünite Başlıyor: Enerjinin Dönüşümü ve Tasarım & Enerji Türleri!"
  },

  // 27. HAFTA
  {
    week: 27,
    date: "15 - 21 Mart",
    hours: "2 Ders Saati",
    unit: "7. ÜNİTE: ENERJİNİN DÖNÜŞÜMÜ VE TASARIM",
    unitBadge: "7. Ünite: Hafta 1",
    unitTheme: "tema-5",
    title: "Enerji Kavramı, Kaynakları ve Türleri",
    subtitle: "Kinetik, Potansiyel, Isı, Işık, Kimyasal ve Elektrik Enerjisinin Doğası",
    outcomeCode: "TT.7.7.1",
    targetSkill: "Enerji Türlerini Sınıflandırma & Bilgi Kaydetme",
    curiosityQuestion: "Yediğimiz bir elmanın içindeki kimyasal enerji, koşarken nasıl kinetik enerjiye, üşüyünce vücudumuzda nasıl ısı enerjisine dönüşür?",
    roadmap: [
      { title: "Enerji Nedir?", desc: "İş yapabilme yeteneği; evrendeki her hareketin arkasındaki görünmez güç." },
      { title: "Mekanik Enerji (Kinetik ve Potansiyel)", desc: "Hızdan kaynaklanan hareket enerjisi ve yükseklikten kaynaklanan depolanmış güç." },
      { title: "Diğer Enerji Biçimleri", desc: "Elektrik, nükleer, kimyasal, ışık, ses ve ısı enerjisi." },
      { title: "Enerji Dönüşüm Zincirleri", desc: "Bir enerji türünün kaybolmadan diğerine akması (Termodinamiğin 1. Yasası)." }
    ],
    section1: {
      title: "Enerji: Asla Yok Olmayan Sihirli Güç",
      subtitle: "Enerji yoktan var edilemez, vardan yok edilemez; sadece biçim değiştirir.",
      layout: "split-visual",
      card: {
        title: "Temel Enerji Türleri",
        icon: "⚡",
        desc: "Doğada ve teknolojide karşılaştığımız ana enerji biçimleri:",
        items: [
          { bold: "Kinetik Enerji", text: "Hareket halindeki cisimlerin sahip olduğu enerji (Örn: Dönen rüzgâr türbini, akan nehir)." },
          { bold: "Potansiyel Enerji", text: "Cismin konumundan dolayı içinde saklı tuttuğu depolanmış enerji (Örn: Barajda biriken su, gerilmiş yay)." },
          { bold: "Elektrik ve Işık", text: "Elektronların akışıyla taşınan, ampullerde ışığa, motorlarda harekete dönen modern güç." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Enerji Dönüşüm Çarkı (Energy Transformation)</text>
        
        <!-- Merkez Simge -->
        <circle cx="200" cy="125" r="32" fill="#162038" stroke="#fbbf24" stroke-width="2"/>
        <text x="200" y="122" fill="#fbbf24" font-size="16" text-anchor="middle">⚡</text>
        <text x="200" y="137" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">DÖNÜŞÜM</text>
        
        <!-- Dört Enerji Noktası -->
        <!-- Güneş (Işık) -->
        <g transform="translate(100, 75)">
          <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#f59e0b"/>
          <text x="0" y="3" fill="#fde68a" font-size="12" text-anchor="middle">☀️</text>
          <text x="0" y="32" fill="#fde68a" font-size="7" text-anchor="middle">Güneş (Işık)</text>
        </g>
        
        <!-- Pil (Kimyasal) -->
        <g transform="translate(300, 75)">
          <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#34d399"/>
          <text x="0" y="3" fill="#34d399" font-size="12" text-anchor="middle">🔋</text>
          <text x="0" y="32" fill="#a7f3d0" font-size="7" text-anchor="middle">Kimyasal</text>
        </g>
        
        <!-- Rüzgâr (Kinetik) -->
        <g transform="translate(100, 175)">
          <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#00f0ff"/>
          <text x="0" y="3" fill="#00f0ff" font-size="12" text-anchor="middle">💨</text>
          <text x="0" y="32" fill="#a5f3fc" font-size="7" text-anchor="middle">Kinetik (Hareket)</text>
        </g>
        
        <!-- Isı / Sıcaklık -->
        <g transform="translate(300, 175)">
          <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#ef4444"/>
          <text x="0" y="3" fill="#ef4444" font-size="12" text-anchor="middle">🔥</text>
          <text x="0" y="32" fill="#fca5a5" font-size="7" text-anchor="middle">Isı (Termal)</text>
        </g>
        
        <!-- Akış Okları -->
        <path d="M125 75 H170" stroke="#fbbf24" stroke-width="1.5"/>
        <path d="M230 75 H275" stroke="#fbbf24" stroke-width="1.5"/>
        <path d="M125 175 H170" stroke="#fbbf24" stroke-width="1.5"/>
        <path d="M230 175 H275" stroke="#fbbf24" stroke-width="1.5"/>
      </svg>`
    },
    section2: {
      title: "Teknolojide Enerji Dönüşüm Zincirleri",
      subtitle: "Elektrikli bir otomobil gaza bastığında arka planda ne olur?",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Otomobil Örneği",
          title: "Elektrikli Araç Zinciri",
          desc: "Bataryadan tekerleğe uzanan zincirleme reaksiyon.",
          bullets: [
            "1. Lityum pildeki Kimyasal Enerji,",
            "2. Kablolarda Elektrik Enerjisine dönüşür,",
            "3. Elektrik motoru bunu Kinetik (Hareket) Enerjisine çevirir ve araba hızlanır!",
            "Frene basınca kinetik enerji tekrar elektriğe dönüp pili şarj eder (Rejeneratif fren)."
          ]
        },
        {
          badge: "Tasarımcı Gözü",
          title: "Enerji Verimliliği (Kayıplar)",
          desc: "Hiçbir makine %100 verimle çalışamaz; bir kısmı ısıya ve sese kaçar.",
          bullets: [
            "Eski akkor ampuller elektriğin %90'ını ısıya harcar, sadece %10'u ışık olur.",
            "Modern LED ampuller enerjinin %85'ini ışığa çevirir (Yüksek verim).",
            "Tasarımcının amacı enerji kaybını en aza indirmektir."
          ]
        }
      ]
    },
    workshop: {
      title: "Enerji Dönüşüm Şeması Çizimi",
      subtitle: "Bir hidroelektrik santralinin veya rüzgâr türbininin enerji dönüşüm basamaklarını oklarla çizme.",
      steps: [
        { title: "Bir Sistem Seçin", desc: "Baraj (HES), Rüzgâr Türbini, Termal Güneş Santrali veya Bisiklet Dinamosu." },
        { title: "Giriş ve Çıkış Enerjilerini Yazın", desc: "Sisteme hangi enerji giriyor? Hangi aşamalardan geçip neye dönüşüyor?" },
        { title: "Kayıp Enerjiyi Belirtin", desc: "Sürtünmeden dolayı ısı veya ses olarak havaya karışan kayıp enerjiyi kırmızı okla gösterin." }
      ],
      criteria: [
        "Enerji türlerinin (potansiyel, kinetik, elektrik) doğru adlandırılması",
        "Dönüşüm oklarının mantıksal sırayla birbirini takip etmesi",
        "Enerjinin korunumu ilkesini şema üzerinde açıklayabilme"
      ]
    },
    tips: {
      safetyTitle: "Enerji Farkındalığı",
      safetyRules: [
        { bold: "Stand-by (Bekleme) Enerjisi", text: "Televizyon ve bilgisayarlar kapalıyken kırmızı ışığı yanıyorsa elektrik tüketmeye devam eder. Anahtarlı priz kullanın." }
      ],
      myths: [
        { wrong: "Enerji harcanınca tamamen yok olur, uzayda kaybolur.", correct: "Enerji asla yok olmaz! Sürtünme ve ışıma ile ısı enerjisine dönüşerek çevreye yayılır." }
      ]
    },
    quiz: {
      question: "Baraj gölünde yüksekte duran suyun sahip olduğu enerji türü ile su kapaklardan aşağı doğru hızla akarken kazandığı enerji türü sırasıyla hangisidir?",
      options: [
        { text: "A) Potansiyel Enerji -> Kinetik Enerji", isCorrect: true },
        { text: "B) Işık Enerjisi -> Nükleer Enerji", isCorrect: false },
        { text: "C) Kimyasal Enerji -> Ses Enerjisi", isCorrect: false },
        { text: "D) Isı Enerjisi -> Manyetik Enerji", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Yüksekte depolanan su <strong>Yerçekimi Potansiyel Enerjisine</strong>; akarken ise hareket kazandığı için <strong>Kinetik Enerjiye</strong> sahiptir."
    },
    summaryRules: [
      { bold: "Enerji Dönüşür, Yok Olmaz", text: "Potansiyelden kinetiğe, kinetikten elektriğe." },
      { bold: "LED > Akkor Ampul", text: "Isıya kaçan enerjiyi azaltmak verimliliktir." },
      { bold: "Yenilenebilir Gelecek", text: "Haftaya rüzgâr ve güneş enerjisini derinlemesine inceliyoruz!" }
    ],
    homework: "Evinizdeki saç kurutma makinesinin içine hangi enerji girip dışarı hangi enerjiler çıktığını şemayla çizin.",
    nextWeekPreview: "Orman Haftası & Enerjinin Doğadaki ve Makinelerdeki Korunumu!"
  },

  // 28. HAFTA
  {
    week: 28,
    date: "22 - 28 Mart",
    hours: "2 Ders Saati",
    unit: "7. ÜNİTE: ENERJİNİN DÖNÜŞÜMÜ VE TASARIM",
    unitBadge: "7. Ünite: Hafta 2",
    unitTheme: "tema-5",
    title: "Orman Haftası & Enerjinin Doğada ve Makinelerde Korunumu",
    subtitle: "21-26 Mart Orman Haftası, Fotosentez Döngüsü ve Mekanik Sürtünme Kayıpları",
    outcomeCode: "TT.7.7.2",
    targetSkill: "Tümevarımsal Akıl Yürütme & Enerji Korunumu Analizi",
    curiosityQuestion: "Dünyadaki tüm kömür, petrol ve odun enerjisi aslında milyonlarca yıl önce ağaçların depoladığı güneş ışığından başka bir şey değil midir?",
    roadmap: [
      { title: "Orman Haftası ve Yeşil Akciğerler", desc: "Ağaçların fotosentezle güneş ışığını biyokütle enerjisine çevirmesi." },
      { title: "Enerjinin Korunumu Yasası", desc: "Giren toplam enerji = Çıkan toplam enerji dengesi." },
      { title: "Makinelerde Sürtünme ve Isı Kaybı", desc: "Rulmanlar, yağlama ve aerodinamik ile kayıpları azaltma." },
      { title: "Doğadaki ve Makinelerdeki Örüntüler", desc: "Enerji tasarrufu sağlayan akıllı tasarımların ortak kuralları." }
    ],
    section1: {
      title: "Ormanlar: Dünyanın En Büyük Güneş Pili",
      subtitle: "Bir yaprak, insanın yaptığı en gelişmiş güneş panelinden daha verimli ve temiz çalışır.",
      layout: "split-visual",
      card: {
        title: "Fotosentez Enerji Fabrikası",
        icon: "🌲",
        desc: "Ağaçların kurduğu kusursuz dönüşüm döngüsü:",
        items: [
          { bold: "Güneş Işığı + Karbondioksit + Su", text: "Ağaç yaprakları atmosferdeki zararlı sera gazını (CO2) çeker." },
          { bold: "Glikoz (Kimyasal Enerji) + Oksijen", text: "Güneş ışığını odunun ve yaprağın liflerinde depolar; atmosfere tertemiz oksijen salar." },
          { bold: "Yeryüzünün Akümülatörü", text: "Ormanlar olmasaydı yeryüzü kavrulur ve hiçbir canlı yaşayamazdı." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#10b981" stroke-width="1.5"/>
        <text x="200" y="42" fill="#a7f3d0" font-size="11" font-weight="bold" text-anchor="middle">Orman Haftası: Fotosentez ve Biyokütle Enerjisi</text>
        
        <!-- Güneş -->
        <circle cx="80" cy="80" r="25" fill="#f59e0b" stroke="#fde68a"/>
        <text x="80" y="85" fill="#0c1322" font-size="14" text-anchor="middle">☀️</text>
        
        <!-- Işık Okları Ağaca Doğru -->
        <path d="M110 90 L160 115" stroke="#fde68a" stroke-width="2" stroke-dasharray="3 3"/>
        <text x="135" y="98" fill="#fde68a" font-size="7">Güneş Enerjisi</text>
        
        <!-- Ağaç Çizimi -->
        <g transform="translate(160, 80)">
          <!-- Gövde -->
          <rect x="35" y="45" width="20" height="55" rx="3" fill="#78350f"/>
          <!-- Taç -->
          <circle cx="45" cy="35" r="35" fill="#059669" stroke="#34d399" stroke-width="2"/>
          <text x="45" y="38" fill="#ffffff" font-size="16" text-anchor="middle">🌳</text>
        </g>
        
        <!-- Çıkan Oksijen ve Biyokütle -->
        <g transform="translate(265, 85)">
          <rect x="0" y="0" width="100" height="70" rx="6" fill="#162038" stroke="#38bdf8"/>
          <text x="50" y="25" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">DEPOLANAN ENERJİ</text>
          <text x="50" y="42" fill="#ffffff" font-size="7" text-anchor="middle">Oksijen (O2)</text>
          <text x="50" y="55" fill="#34d399" font-size="7" text-anchor="middle">+ Biyokütle Odun</text>
        </g>
        
        <text x="200" y="200" fill="#cbd5e1" font-size="8" text-anchor="middle">Ormanları korumak, dünyanın enerji rezervini ve yaşamını korumaktır.</text>
      </svg>`
    },
    section2: {
      title: "Makinelerde Sürtünme ile Savaş",
      subtitle: "Enerji yok olmaz ama istemediğimiz şekilde ısıya dönüşüp ziyan olabilir.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Mühendislik Çözümü",
          title: "Rulmanlar ve Yağlama",
          desc: "Dönen metallerin birbirine sürtünmesini engellemek.",
          bullets: [
            "İki metal yüzey arasına çelik bilyeler (rulman) koyarak sürtünmeyi %95 azaltmak.",
            "Motor yağı kullanarak parçaların aşınmasını ve ısınmasını önlemek.",
            "Tekerleklerin daha az enerjiyle çok daha uzun süre dönmesini sağlamak."
          ]
        },
        {
          badge: "Aerodinamik Form",
          title: "Hava Direncini Kırmak",
          desc: "Hızlı giden arabaların ve trenlerin rüzgârı yarması.",
          bullets: [
            "Kutu gibi dik tasarımlar rüzgâra çarpar ve 2 kat fazla yakıt harcar.",
            "Damla modeli akıcı hatlar rüzgârı üzerinden kaydırarak tasarruf sağlar.",
            "Doğadaki yunus ve şahin formları yine en büyük rehberimizdir."
          ]
        }
      ]
    },
    workshop: {
      title: "Sürtünme ve Enerji Tasarrufu Deneyi",
      subtitle: "Farklı yüzeylerde (zımpara, tahta, cam) kaydırılan takozun durma mesafesini ölçme.",
      steps: [
        { title: "Eğimli Rampa Kurun", desc: "Kitaplarla 20 derecelik bir rampa oluşturun." },
        { title: "Yüzeyi Değiştirin", desc: "Rampanın altına sırayla havlu, kâğıt ve kaygan naylon poşet serin." },
        { title: "Mesafeyi Ölçün", desc: "Aynı oyuncak arabanın nerede daha uzağa gittiğini ölçüp sürtünme kaybını hesaplayın." }
      ],
      criteria: [
        "Sürtünme kuvvetinin kinetik enerjiyi ısıya dönüştürdüğünü gözlemleyebilme",
        "Orman Haftası temasıyla doğadaki enerji dengesini açıklayabilme",
        "Mühendislikte sürtünmeyi azaltan yöntemleri (rulman, yağlama, cila) listeleyebilme"
      ]
    },
    tips: {
      safetyTitle: "Doğa Sevgisi ve Tasarruf",
      safetyRules: [
        { bold: "Orman Yangınlarını Önleyin", text: "Piknikte cam şişe bırakmayın; kırık camlar büyüteç görevi görerek güneş enerjisini odunlara odaklar ve yangın çıkarır." }
      ],
      myths: [
        { wrong: "Sürtünme tamamen zararlı bir kuvvettir, sıfırlanmalıdır.", correct: "Hayır! Sürtünme olmasaydı araba fren yapamazdı, ayaklarımız kayar yürüyemezdik, ipler düğüm tutmazdı." }
      ]
    },
    quiz: {
      question: "Makinelerde hareketli parçaların birbirine sürtünerek aşınmasını ve enerjinin gereksiz yere ısıya dönüşmesini engellemek için araya konulan bilyeli mekanizmaya ne ad verilir?",
      options: [
        { text: "A) Rulman (Bilyalı Yatak / Bearing)", isCorrect: true },
        { text: "B) Egzoz Borusu", isCorrect: false },
        { text: "C) Korna", isCorrect: false },
        { text: "D) Far Camı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Dönme sürtünmesini minimuma indirmek için çelik bilyelerden oluşan <strong>Rulman</strong> mekanizmaları kullanılır."
    },
    summaryRules: [
      { bold: "Ormanlar Enerji Depolar", text: "Güneşi yapraklarda biyokütleye çevirdik." },
      { bold: "Sürtünme Isıya Dönüşür", text: "Rulman ve yağlama ile enerjiyi koruyoruz." },
      { bold: "Haftaya Büyük Ayrım", text: "Yenilenebilir ve Yenilenemez enerji kaynakları geliyor!" }
    ],
    homework: "Evinizde gıcırdayan bir kapı menteşesini inceleyin: Bir damla yağ damlatınca ses neden kesilir ve kapı nasıl kolay açılır? Yazın.",
    nextWeekPreview: "Yenilenebilir ve Yenilenemez Enerji Kaynakları & Küresel Isınma Tehlikesi!"
  },

  // 29. HAFTA
  {
    week: 29,
    date: "29 Mart - 04 Nisan",
    hours: "2 Ders Saati",
    unit: "7. ÜNİTE: ENERJİNİN DÖNÜŞÜMÜ VE TASARIM",
    unitBadge: "7. Ünite: Hafta 3",
    unitTheme: "tema-5",
    title: "Yenilenebilir ve Yenilenemez Enerji Kaynakları",
    subtitle: "Kütüphaneler Haftası & Fosil Yakıtlar, Sera Gazları, Küresel Isınma ve Temiz Enerji",
    outcomeCode: "TT.7.7.3 & TT.7.7.4",
    targetSkill: "Kaynak Sınıflandırması & Geleceğe Yönelik Çıkarım",
    curiosityQuestion: "Dünyanın petrol ve kömür rezervleri bittiğinde fabrikalar duracak mı, yoksa gökyüzündeki güneş ve rüzgâr bize sonsuza kadar yetecek mi?",
    roadmap: [
      { title: "Kütüphaneler Haftası ve Bilgiye Ulaşma", desc: "Doğru bilimsel kaynaklardan küresel ısınma raporlarını araştırma." },
      { title: "Yenilenemez Enerji (Fosil Yakıtlar)", desc: "Kömür, petrol, doğalgaz ve çevreye saldıkları sera gazı (CO2)." },
      { title: "Yenilenebilir Temiz Enerji", desc: "Güneş, rüzgâr, jeotermal, hidroelektrik ve biyokütle." },
      { title: "Küresel Isınma ve İklim Krizi", desc: "Buzulların erimesi, kuraklık ve tasarımcıların yeşil enerji sorumluluğu." }
    ],
    section1: {
      title: "İki Yol Ayrımı: Fosil Yakıtlar vs. Yeşil Enerji",
      subtitle: "Gezegenimizin geleceği hangi enerji kaynağını seçtiğimize bağlıdır.",
      layout: "split-visual",
      card: {
        title: "Enerji Kaynaklarının Karşılaştırması",
        icon: "⚖️",
        desc: "İki ana enerji grubunun özellikleri:",
        items: [
          { bold: "Yenilenemez (Fosil) Kaynaklar", text: "Tükendikçe yerine yenisi gelmez (oluşumu milyonlarca yıl sürer). Yandığında sera gazı çıkararak dünyayı ısıtır." },
          { bold: "Yenilenebilir Kaynaklar", text: "Doğanın kendi döngüsü içinde asla tükenmeyen (Güneş, Rüzgâr, Su, Yer altı ısısı) temiz ve bedava kaynaklardır." },
          { bold: "Sıfır Karbon Hedefi", text: "2053 net sıfır emisyon hedefiyle tüm enerji üretimimizi yenilenebilir kaynaklara taşıyoruz." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Enerji Kaynakları Sınıflandırma Tablosu</text>
        
        <!-- Sol: Yenilenebilir (Yeşil) -->
        <g transform="translate(45, 60)">
          <rect x="0" y="0" width="145" height="125" rx="8" fill="#162038" stroke="#10b981" stroke-width="1.5"/>
          <text x="72" y="22" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">🌿 YENİLENEBİLİR</text>
          <text x="15" y="45" fill="#a7f3d0" font-size="8">☀️ Güneş Enerjisi</text>
          <text x="15" y="65" fill="#a7f3d0" font-size="8">💨 Rüzgâr Enerjisi</text>
          <text x="15" y="85" fill="#a7f3d0" font-size="8">💧 Hidroelektrik (Su)</text>
          <text x="15" y="105" fill="#a7f3d0" font-size="8">♨️ Jeotermal (Sıcak Su)</text>
        </g>
        
        <!-- Sağ: Yenilenemez (Kırmızı) -->
        <g transform="translate(210, 60)">
          <rect x="0" y="0" width="145" height="125" rx="8" fill="#162038" stroke="#ef4444" stroke-width="1.5"/>
          <text x="72" y="22" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">⛽ YENİLENEMEZ</text>
          <text x="15" y="45" fill="#fca5a5" font-size="8">🪨 Kömür (Termik)</text>
          <text x="15" y="65" fill="#fca5a5" font-size="8">🛢️ Petrol (Benzin/Dizel)</text>
          <text x="15" y="85" fill="#fca5a5" font-size="8">🔥 Doğalgaz</text>
          <text x="15" y="105" fill="#fca5a5" font-size="8">☢️ Uranyum (Nükleer)</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Sera Gazları ve Küresel Isınma Mekanizması",
      subtitle: "Dünyanın üzerine çekilen görünmez sıcak battaniye.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "İklim Tehlikesi",
          title: "Sera Etkisi (Greenhouse Effect)",
          desc: "Fosil yakıt dumanlarının atmosferde ısıyı hapsetmesi.",
          bullets: [
            "Kutuplardaki buzulların erimesi ve deniz seviyesinin yükselmesi.",
            "Aşırı kuraklık, orman yangınları ve tarım arazilerinin çölleşmesi.",
            "Gezegenin sıcaklığı 1.5 derece artarsa geri dönüşü olmayan felaketler başlar."
          ]
        },
        {
          badge: "Tasarımcının Rolü",
          title: "Temiz Enerjili Ürünler",
          desc: "Her yeni tasarım yenilenebilir enerjiyle çalışacak şekilde kurgulanmalıdır.",
          bullets: [
            "Çatılarda güneş kiremitleri ve pencerelerde şeffaf güneş pilleri.",
            "Şehir sokaklarında rüzgârla kendi ışığını yakan akıllı lambalar.",
            "Tasarım dünyayı kirleten değil, temizleyen güçtür."
          ]
        }
      ]
    },
    workshop: {
      title: "Gelecek Senaryosu: 2050 Enerji Vizyonu",
      subtitle: "Öğrencilerin 'Fosil yakıtların tamamen bittiği bir şehirde yaşam nasıl olurdu?' senaryosunu tasarlaması.",
      steps: [
        { title: "Ulaşımı Çözün", desc: "Arabalar ve otobüsler hangi temiz enerjiyle çalışacak?" },
        { title: "Evleri Isıtın", desc: "Doğalgaz olmadan kışın evler nasıl sıcacık kalacak?" },
        { title: "Şehir Şemasını Çizin", desc: "Rüzgâr türbinleri ve güneş tarlalarıyla donatılmış yeşil şehir taslağı hazırlayın." }
      ],
      criteria: [
        "Yenilenebilir enerji türlerini doğru yerlerde kullanabilme",
        "Küresel ısınma sebeplerini ve sonuçlarını bilimsel dille açıklayabilme",
        "Geleceğe yönelik pozitif ve uygulanabilir inovasyon önerileri sunma"
      ]
    },
    tips: {
      safetyTitle: "Gezegenimizi Koruma İlkeleri",
      safetyRules: [
        { bold: "Karbon Ayak İzinizi Azaltın", text: "Yakın mesafelere yürüyerek veya bisikletle gitmek fosil yakıt tüketimini doğrudan azaltır." }
      ],
      myths: [
        { wrong: "Yenilenebilir enerji sistemleri çok verimsizdir ve sanayiyi çalıştıramaz.", correct: "Günümüzde Danimarka ve İskoçya gibi ülkeler elektriklerinin %100'e yakınını sadece rüzgâr ve güneşten üretmektedir." }
      ]
    },
    quiz: {
      question: "Doğanın kendi döngüsü içinde sürekli yenilenen, kullandıkça tükenmeyen ve çevreye zehirli sera gazı salmayan enerji kaynaklarına ne ad verilir?",
      options: [
        { text: "A) Fosil Yakıtlar", isCorrect: false },
        { text: "B) Yenilenebilir Enerji Kaynakları", isCorrect: true },
        { text: "C) Ağır Sanayi Yakıtı", isCorrect: false },
        { text: "D) Ham Petrol", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Güneş, rüzgâr ve su gibi doğada tükenmeyen temiz kaynaklara <strong>Yenilenebilir Enerji Kaynakları</strong> denir."
    },
    summaryRules: [
      { bold: "Fosil Yakıtlar Bitiyor", text: "Kömür ve petrol dünyayı ısıtıyor." },
      { bold: "Güneş ve Rüzgâr Sonsuz", text: "Temiz ve bedava enerjiye geçiyoruz." },
      { bold: "Yeşil Şehirler Kuruyoruz", text: "Haftaya temiz enerjili ürün taslağı çiziyoruz!" }
    ],
    homework: "Kütüphaneden veya güvenilir bilim sitelerinden 'Dünyanın en büyük güneş enerji santralleri' konusunu araştırıp 1 sayfa özet çıkarın.",
    nextWeekPreview: "Yenilenebilir Enerji Kaynakları ile Çalışan Özgün Ürün Taslağı Çizimi!"
  },

  // 30. HAFTA
  {
    week: 30,
    date: "05 - 11 Nisan",
    hours: "2 Ders Saati",
    unit: "7. ÜNİTE: ENERJİNİN DÖNÜŞÜMÜ VE TASARIM",
    unitBadge: "7. Ünite: Hafta 4",
    unitTheme: "tema-5",
    title: "Yenilenebilir Enerjili Ürün Taslağı ve Eskizleri",
    subtitle: "Güneş, Rüzgâr ve Su Gücüyle Çalışan Taşınabilir ve Akıllı Cihaz Tasarımları",
    outcomeCode: "TT.7.7.5",
    targetSkill: "Temiz Enerji Entegrasyonu & Ürün Eskiz Çizimi",
    curiosityQuestion: "Dağda veya kamptayken telefonunuzun şarjı bitse, priz olmadan sadece çantanıza taktığınız küçük bir rüzgâr pervanesiyle telefonunuzu şarj edebilir misiniz?",
    roadmap: [
      { title: "Enerji Hasadı (Energy Harvesting)", desc: "Çevredeki minik rüzgâr, güneş ve adım hareketlerinden elektrik üretme." },
      { title: "Güneş Pilli Şarj Cihazı Tasarımı", desc: "Katlanabilir fotovoltaik paneller ve dahili güç ünitesi (Powerbank)." },
      { title: "Mini Rüzgâr Pervaneli Aydınlatma", desc: "Bisiklet gidonuna takılan ve gittikçe elektrik üreten akıllı far." },
      { title: "Eskiz ve Ölçülendirme", desc: "Ürünün içindeki jeneratör, kablo ve pil yerleşimini taslakta gösterme." }
    ],
    section1: {
      title: "Taşınabilir Temiz Enerji İstasyonları",
      subtitle: "Kablosuz, prizsiz ve tamamen doğadan beslenen yeni nesil seyahat araçları.",
      layout: "split-visual",
      card: {
        title: "Temiz Enerjili Cihazın Bileşenleri",
        icon: "🎒",
        desc: "Taşınabilir bir güneş enerjili çantanın anatomisi:",
        items: [
          { bold: "1. Enerji Toplayıcı", text: "Çantanın dış yüzeyine dikilmiş esnek ve su geçirmez güneş panelleri." },
          { bold: "2. Voltaj Regülatörü (Dengeleyici)", text: "Güneş azalıp çoğaldıkça voltajı sabit 5V seviyesinde tutan elektronik devre kartı." },
          { bold: "3. Enerji Deposu (Akü / Lityum Pil)", text: "Gündüz toplanan enerjiyi gece kullanmak üzere saklayan hafif lityum polimer batarya." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Güneş Panelli Akıllı Sırt Çantası Eskizi</text>
        
        <!-- Sırt Çantası Gövdesi -->
        <g transform="translate(60, 60)">
          <rect x="0" y="20" width="110" height="120" rx="14" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
          <path d="M30 20 C30 0 80 0 80 20" fill="none" stroke="#38bdf8" stroke-width="2"/>
          
          <!-- Esnek Güneş Paneli -->
          <rect x="15" y="40" width="80" height="60" rx="4" fill="#0284c7" stroke="#00f0ff"/>
          <line x1="15" y1="60" x2="95" y2="60" stroke="#00f0ff" stroke-width="1"/>
          <line x1="15" y1="80" x2="95" y2="80" stroke="#00f0ff" stroke-width="1"/>
          <line x1="55" y1="40" x2="55" y2="100" stroke="#00f0ff" stroke-width="1"/>
          <text x="55" y="115" fill="#bae6fd" font-size="7" font-weight="bold" text-anchor="middle">Fotovoltaik Panel</text>
        </g>
        
        <!-- Enerji Hattı Oku -->
        <path d="M180 120 H220" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arr)"/>
        
        <!-- İç Devre ve Telefon Şarjı -->
        <g transform="translate(230, 70)">
          <rect x="0" y="0" width="120" height="100" rx="8" fill="#1e293b" stroke="#34d399"/>
          <rect x="15" y="15" width="40" height="25" rx="3" fill="#10b981"/>
          <text x="35" y="30" fill="#ffffff" font-size="6" text-anchor="middle">Powerbank</text>
          
          <!-- Şarj Olan Telefon -->
          <rect x="65" y="15" width="40" height="65" rx="4" fill="#0c1322" stroke="#38bdf8"/>
          <text x="85" y="45" fill="#38bdf8" font-size="12" text-anchor="middle">⚡</text>
          <text x="85" y="65" fill="#34d399" font-size="6" font-weight="bold" text-anchor="middle">%100 Doldu</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Rüzgâr ve Piezoelektrik Tasarımları",
      subtitle: "Sadece güneş değil; rüzgâr ve adım hareketlerimiz de enerji kaynağıdır.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Mikro Rüzgâr",
          title: "Taşınabilir Rüzgâr Türbini",
          desc: "Geceleri güneş battığında devreye giren temiz enerji çözümü.",
          bullets: [
            "Kamp çadırının tepesine asılan avuç içi büyüklüğünde sessiz pervane.",
            "Gece esen rüzgârla kamp lambasını sabaha kadar aydınlatır.",
            "Güneş ve rüzgârın hibrit (ikili) ortak çalışması."
          ]
        },
        {
          badge: "Hareket Enerjisi",
          title: "Piezoelektrik Ayakkabı Tabanı",
          desc: "Adım attıkça tabana uygulanan basıncın elektriğe dönüşmesi.",
          bullets: [
            "Yürüdükçe bataryasını dolduran akıllı takip ayakkabıları.",
            "Metro istasyonlarında insanların bastığı turnike zeminlerinin elektrik üretmesi.",
            "İnsan hareketi geleceğin temiz yakıtıdır."
          ]
        }
      ]
    },
    workshop: {
      title: "Temiz Enerjili Cihaz Taslak Atölyesi",
      subtitle: "Öğrencilerin güneş veya rüzgâr enerjisiyle çalışan özgün bir taşınabilir ürün eskizi çizmesi.",
      steps: [
        { title: "Enerji Kaynağını Seçin", desc: "Güneş mi, rüzgâr mı, yoksa adım basıncı (piezoelektrik) mı?" },
        { title: "Cihazın Amacını Belirleyin", desc: "Örn: Güneş enerjili bisiklet kaskı, rüzgârlı cep telefonu kılıfı veya akıllı kamp suluğu." },
        { title: "Teknik Eskizini Çizin", desc: "Panelin yerini, pil haznesini ve şarj çıkışını (USB port) etiketleyerek çizin." }
      ],
      criteria: [
        "Yenilenebilir enerji kaynağının ürün üzerine mantıklı entegrasyonu",
        "Çizimde bileşenlerin (toplayıcı, devre, pil) doğru şematik gösterimi",
        "Kullanıcı dostu, ergonomik ve taşınabilir bir tasarım ortaya koyma"
      ]
    },
    tips: {
      safetyTitle: "Elektronik Entegrasyon Güvenliği",
      safetyRules: [
        { bold: "Su Yalıtımı Şarttır", text: "Dışarıda kullanılacak güneş panelli bir çantada elektronik devreler yağmura karşı silikon contalarla korunmalıdır." }
      ],
      myths: [
        { wrong: "Yenilenebilir enerjili aletler çok ağır ve hantaldır.", correct: "Yeni nesil ince film (film-sheet) güneş panelleri kâğıt kadar ince ve son derece hafiftir." }
      ]
    },
    quiz: {
      question: "Güneş enerjili bir cihaz tasarlarken, güneşten gelen ışık şiddeti sürekli değişse bile cep telefonuna giden elektriğin cihazı yakmaması için voltajı sabit tutan elektronik devreye ne ad verilir?",
      options: [
        { text: "A) Voltaj Regülatörü (Dengeleyici)", isCorrect: true },
        { text: "B) Su Borusu", isCorrect: false },
        { text: "C) Bisiklet Zili", isCorrect: false },
        { text: "D) Çekiç", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Güneş panellerinden gelen dalgalı elektriği telefonun güvenle şarj olacağı 5 Volt seviyesinde sabitleyen parçaya <strong>Voltaj Regülatörü</strong> denir."
    },
    summaryRules: [
      { bold: "Enerji Hasadı (Harvesting)", text: "Çevredeki güneş ve rüzgârı yakaladık." },
      { bold: "Bağımsız Cihazlar", text: "Prize muhtaç olmadan çalışan aletler çizdik." },
      { bold: "STEAM Çağı Başlıyor", text: "Haftaya Fen, Teknoloji, Mühendislik, Sanat ve Matematiği birleştiriyoruz!" }
    ],
    homework: "Çizdiğiniz temiz enerjili cihazın 1 günlük güneşlenme ile kaç saat çalışabileceğini tahmin edip yazın.",
    nextWeekPreview: "8. Ünite: Bütünleşik Öğrenme: STEAM & Disiplinler Arası Holistik Düşünme!"
  },

  // 31. HAFTA
  {
    week: 31,
    date: "12 - 18 Nisan",
    hours: "2 Ders Saati",
    unit: "8. ÜNİTE: BÜTÜNLEŞİK ÖĞRENME: STEAM",
    unitBadge: "8. Ünite: Hafta 1",
    unitTheme: "tema-5",
    title: "Bütünleşik Öğrenme: STEAM ve Holistik Düşünme",
    subtitle: "Science (Fen), Technology, Engineering, Art (Sanat), Mathematics Bütünleşmesi",
    outcomeCode: "TT.7.8.1",
    targetSkill: "Disiplinler Arası Sorgulama & Holistik (Bütüncül) Düşünme",
    curiosityQuestion: "Leonardo da Vinci Mona Lisa tablosunu çizen bir ressam mıydı, yoksa helikopter ve köprü tasarlayan bir mühendis miydi?",
    roadmap: [
      { title: "STEAM Nedir?", desc: "Fen, Teknoloji, Mühendislik, Sanat ve Matematiğin aynı potada erimesi." },
      { title: "Holistik (Bütüncül) Düşünme", desc: "Bir problemi tek bir dersin gözüyle değil, tüm bilimlerin ortak aklıyla çözme." },
      { title: "Leonardo da Vinci Modeli", desc: "Sanat ile bilimin birbirini nasıl beslediğinin tarihteki en büyük kanıtı." },
      { title: "STEAM Alt Bileşenleri", desc: "Fizik yasaları + Kodlama + Tasarım estetiği + Geometrik hesaplamalar." }
    ],
    section1: {
      title: "STEAM: 5 Gücün Birleşimi",
      subtitle: "Geleceğin büyük problemleri tek bir uzmanlıkla değil, disiplinler arası köprülerle çözülecek.",
      layout: "split-visual",
      card: {
        title: "STEAM'in 5 Yıldızı",
        icon: "⭐",
        desc: "Bir projede bu 5 disiplin nasıl bir arada çalışır?",
        items: [
          { bold: "S - Science (Fen/Bilim)", text: "Doğa yasalarını açıklar: 'Yerçekimi ve aerodinamik nasıl çalışır?'" },
          { bold: "T - Technology (Teknoloji)", text: "Araçları sağlar: 'Sensörler, yazılımlar ve dijital araçlar nelerdir?'" },
          { bold: "E - Engineering (Mühendislik)", text: "Sistemi inşa eder: 'Hangi malzemeyle nasıl sağlam monte edilir?'" },
          { bold: "A - Art (Sanat/Tasarım)", text: "Ruh ve estetik katar: 'Kullanıcı bu ürünü görünce ne hisseder, ergonomik mi?'" },
          { bold: "M - Mathematics (Matematik)", text: "Hatasız hesaplar: 'Ağırlık, oran, maliyet ve geometri doğru mu?'" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0c1322" stroke="#f97316" stroke-width="1.5"/>
        <text x="200" y="42" fill="#fed7aa" font-size="11" font-weight="bold" text-anchor="middle">STEAM Disiplinler Arası Yıldızı</text>
        
        <!-- 5 Yıldız Ucu / Daireleri -->
        <!-- S: Science -->
        <circle cx="200" cy="70" r="22" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="68" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">S</text>
        <text x="200" y="79" fill="#bae6fd" font-size="6" text-anchor="middle">Science</text>
        
        <!-- T: Technology -->
        <circle cx="280" cy="115" r="22" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
        <text x="280" y="113" fill="#00f0ff" font-size="12" font-weight="bold" text-anchor="middle">T</text>
        <text x="280" y="124" fill="#a5f3fc" font-size="6" text-anchor="middle">Tech</text>
        
        <!-- E: Engineering -->
        <circle cx="250" cy="180" r="22" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="250" y="178" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">E</text>
        <text x="250" y="189" fill="#fde68a" font-size="6" text-anchor="middle">Engine</text>
        
        <!-- A: Art -->
        <circle cx="150" cy="180" r="22" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="150" y="178" fill="#ec4899" font-size="12" font-weight="bold" text-anchor="middle">A</text>
        <text x="150" y="189" fill="#fbcfe8" font-size="6" text-anchor="middle">Art</text>
        
        <!-- M: Math -->
        <circle cx="120" cy="115" r="22" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
        <text x="120" y="113" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">M</text>
        <text x="120" y="124" fill="#a7f3d0" font-size="6" text-anchor="middle">Math</text>
        
        <!-- Yıldız Çizgileri Bağlantısı -->
        <polygon points="200,70 250,180 120,115 280,115 150,180" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="3 2"/>
      </svg>`
    },
    section2: {
      title: "Sanat Olmadan Mühendislik Neden Eksiktir?",
      subtitle: "Sadece teknik olarak çalışan ama kimsenin sevmediği soğuk tasarımlar devri kapandı.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "A (Art) Faktörü",
          title: "İnsani Dokunuş ve Estetik",
          desc: "STEM'den STEAM'e geçişin en büyük sebebi Sanat (Art) bileşenidir.",
          bullets: [
            "Bir akıllı telefonu elinize aldığınızda size hissettirdiği zarafet Sanattır.",
            "Kullanıcı arayüzündeki renk uyumu ve buton yerleşimi Sanattır.",
            "Sanat olmasaydı otomobiller tekerlekli demir kutulardan ibaret kalırdı."
          ]
        },
        {
          badge: "Bütüncül Zekâ",
          title: "Holistik Düşünme Pratiği",
          desc: "Dersler arasındaki sınırları zihninizde kaldırın.",
          bullets: [
            "Matematik dersindeki oran orantıyı resimdeki perspektifle birleştirin.",
            "Fen dersindeki elektrik devresini Türkçe dersindeki hikâye anlatımıyla sunun.",
            "Gerçek hayat derslere bölünmüş değildir; hepsi bir bütündür."
          ]
        }
      ]
    },
    workshop: {
      title: "Bir Ürünü 5 STEAM Gözlüğüyle İnceleme",
      subtitle: "Öğrencilerin 'Akıllı Saat' ürününü 5 farklı disiplin açısından analiz etmesi.",
      steps: [
        { title: "Science & Math", desc: "Kalp nabzını hangi sensörle ölçüyor? (Fen). Ekrandaki adım sayısını nasıl hesaplıyor? (Matematik)." },
        { title: "Tech & Engineering", desc: "Bluetooth ve ekran teknolojisi (Teknoloji). Su geçirmez kordon mekanizması (Mühendislik)." },
        { title: "Art (Sanat)", desc: "Kordon renkleri, arayüz saat kadranı ve kavisli cam estetiği (Sanat)." }
      ],
      criteria: [
        "5 STEAM disiplinini tek bir ürün üzerinde başarıyla ayrıştırabilme",
        "Disiplinler arası bağlantıları neden-sonuç bağıyla kurabilme",
        "Holistik (bütüncül) düşünme felsefesini örneklerle savunabilme"
      ]
    },
    tips: {
      safetyTitle: "Bütünleşik Öğrenme Disiplini",
      safetyRules: [
        { bold: "'Benim Matematikle İşim Yok' Demeyin", text: "En iyi modacılar bile kumaş keserken geometri kullanır; bilim ve sanat birbirinin düşmanı değil ikiz kardeşidir." }
      ],
      myths: [
        { wrong: "STEAM sadece robotik kodlama demektir.", correct: "Hayır! STEAM bir müzik aleti tasarlarken ses fiziği, ahşap mühendisliği, nota matematiği ve estetik cilanın birleşmesidir." }
      ]
    },
    quiz: {
      question: "Fen (Science), Teknoloji (Technology), Mühendislik (Engineering) ve Matematik (Mathematics) alanlarına 'Sanat ve Tasarım' (Art) boyutunu da ekleyerek yaratıcı ve bütüncül düşünmeyi sağlayan yaklaşım hangisidir?",
      options: [
        { text: "A) STEAM", isCorrect: true },
        { text: "B) Sadece Ezber", isCorrect: false },
        { text: "C) Taş Devri", isCorrect: false },
        { text: "D) Hata Raporu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Fen, teknoloji, mühendislik ve matematiği sanatla buluşturan eğitim ve inovasyon yaklaşımına <strong>STEAM</strong> denir."
    },
    summaryRules: [
      { bold: "STEAM = Güç Birliği", text: "5 disiplini tek projede buluşturuyoruz." },
      { bold: "Sanat Ruh Katar", text: "Estetiksiz teknoloji soğuk ve eksiktir." },
      { bold: "23 Nisan Geliyor", text: "Haftaya Çocuk Bayramı projemizle STEAM'i uyguluyoruz!" }
    ],
    homework: "Sevdiğiniz bir müzik aletini (gitar, bağlama veya flüt) 5 STEAM bileşenine ayırıp defterinize yazın.",
    nextWeekPreview: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı & STEAM Disiplinleri Arasındaki İlişki!"
  }
];
