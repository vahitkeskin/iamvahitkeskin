/**
 * 5. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem 2. Bölüm (Hafta 32 - 41)
 * Türkiye Yüzyılı Maarif Modeli
 */

const CURRICULUM_TERM_2_PART2_GRADE5 = [
  // 32. HAFTA
  {
    week: 32,
    date: "19 - 25 Nisan",
    hours: "2 Ders Saati",
    unit: "TEMA 5: Algoritmik Düşünme ve Blok Tabanlı Kodlama",
    unitBadge: "Tema 5: Hafta 13",
    unitTheme: "tema-5",
    title: "23 Nisan & Scratch'te Değişkenler (Variables)",
    subtitle: "Bilgisayarın Hafızasında Bilgi Saklama: Skor, Süre ve Can Sayaçları",
    outcomeCode: "BTY.5.6.1",
    targetSkill: "Veri Saklama & Değişken Yönetimi",
    curiosityQuestion: "Bilgisayar oyunu oynarken skorunuzun 10'dan 20'ye çıktığını bilgisayar aklında nasıl tutar?",
    roadmap: [
      { title: "Değişken Nedir?", desc: "İçine farklı değerler koyabileceğimiz etiketli dijital kutular." },
      { title: "Scratch Değişkenler Menüsü", desc: "Bir değişken oluştur butonu ve turuncu renkli veri blokları." },
      { title: "Değeri Değiştirme", desc: "'Skor'u 1 kadar değiştir' ile puan artırma mantığı." },
      { title: "23 Nisan Kutlaması", desc: "Bayrak toplayarak puan kazanan 23 Nisan Çocuk Bayramı projesi." }
    ],
    section1: {
      title: "Değişken: Bilgisayarın Etiketli Kutusu",
      subtitle: "Oyun boyunca değişebilen sayıları (skor, süre, can) bellekte tutan yapılardır.",
      layout: "split-visual",
      card: {
        title: "Değişkenin 3 Temel Özelliği",
        icon: "📦",
        desc: "Bir değişkeni evinizdeki bir oyuncak kutusuna benzetebiliriz:",
        items: [
          { bold: "Bir İsmi Vardır", text: "Kutunun üstünde 'Puan', 'Kalan_Sure' veya 'Can' yazar." },
          { bold: "İçinde Bir Değer Taşır", text: "Oyun başlarken kutunun içine 0 koyarız, elma topladıkça sayı artar." },
          { bold: "Değeri Değişebilir", text: "Sabit kalmaz; oyunun gidişatına göre artar, azalır veya sıfırlanır." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="200" y="45" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Scratch Değişken Kutusu (Ram Bellek)</text>
        
        <!-- Kutu Çizimi -->
        <rect x="50" y="70" width="130" height="110" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4"/>
        <rect x="65" y="80" width="100" height="26" rx="6" fill="#f59e0b"/>
        <text x="115" y="97" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Kutu Adı: SKOR</text>
        <circle cx="115" cy="140" r="28" fill="#38bdf8" opacity="0.2"/>
        <text x="115" y="148" fill="#38bdf8" font-size="26" font-weight="bold" text-anchor="middle">10</text>
        <text x="115" y="195" fill="#94a3b8" font-size="9" text-anchor="middle">İçindeki Değer</text>
        
        <!-- Ok ve Eylem -->
        <path d="M200 125 H240" stroke="#10b981" stroke-width="3" marker-end="url(#arr)"/>
        <text x="220" y="115" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">+1 Puan</text>
        
        <!-- Scratch Bloğu -->
        <g transform="translate(255, 95)">
          <path d="M0 8 C10 8 15 0 25 0 H115 C125 0 130 8 140 8 V32 C130 32 125 40 115 40 H25 C15 40 10 32 0 32 Z" fill="#ff8c1a"/>
          <text x="10" y="22" fill="#ffffff" font-size="10" font-weight="bold">skor 'i</text>
          <rect x="55" y="10" width="22" height="16" rx="8" fill="#ffffff"/>
          <text x="66" y="22" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">1</text>
          <text x="82" y="22" fill="#ffffff" font-size="10" font-weight="bold">kadar değiştir</text>
        </g>
        <text x="320" y="160" fill="#cbd5e1" font-size="9" text-anchor="middle">Her bayrak aldığında</text>
        <text x="320" y="175" fill="#fde68a" font-size="9" text-anchor="middle">kutuya 1 eklenir!</text>
      </svg>`
    },
    section2: {
      title: "Scratch Değişken Blokları ve 23 Nisan Sahnesi",
      subtitle: "Değişkenlerin oyun başındaki sıfırlanması ve oyun içi güncellemeleri.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Başlangıç Ayarı (Reset)",
          title: "Skor'u 0 Yap Bloğu",
          desc: "Yeşil bayrağa basıldığında önceki oyundan kalan puan silinmeli ve sıfırlanmalıdır.",
          bullets: [
            "Tıklandığında -> [Skor] 'i [0] yap.",
            "Eğer sıfırlamazsak yeni oyuna 50 puandan başlanabilir!",
            "Her yeni oyun temiz bir sayfa açmalıdır."
          ]
        },
        {
          badge: "Puan Kazanma",
          title: "Skor'u 1 Kadar Değiştir",
          desc: "Karakter hedefe ulaştığında veya ödülü topladığında kutudaki sayı artar.",
          bullets: [
            "Eğer [Kukla2'ye değdi mi?] ise:",
            "[Skor]'i 1 kadar değiştir",
            "Ses çal ve ödülü rastgele konuma ışınla."
          ]
        }
      ]
    },
    workshop: {
      title: "23 Nisan Bayrak Toplama Oyunu",
      subtitle: "Kedi kuklası sahnedeki Türk bayraklarını topladıkça skor kazanır.",
      steps: [
        { title: "Değişken Oluştur", desc: "'Değişkenler' kategorisine gidip 'Skor' adında bir değişken açın." },
        { title: "Sıfırlama Kodu", desc: "Tıklandığında -> [Skor] 'i 0 yap bloğunu yerleştirin." },
        { title: "Temas Kontrolü", desc: "Bayrak kuklasına: 'Eğer Kediye değiyorsa, skoru 1 artır, ses çal ve gizlen' kodunu yazın." }
      ],
      criteria: [
        "Skor değişkeninin sahnede görünür olması",
        "Her bayrak toplandığında skorun tam 1 artması",
        "Yeşil bayrağa basıldığında skorun başarıyla 0 olması"
      ]
    },
    tips: {
      safetyTitle: "Bilişimde Değişken İsimlendirme",
      safetyRules: [
        { bold: "Anlamlı İsimler Verin", text: "Değişkenin adına 'x', 'a', 'b' yerine 'Skor', 'Can' veya 'Sure' yazmak kodun anlaşılmasını kolaylaştırır." }
      ],
      myths: [
        { wrong: "Değişken sadece sayıları saklayabilir.", correct: "Hayır! Değişkenler oyuncunun ismini ('Ahmet', 'Zeynep') gibi metinleri de saklayabilir." }
      ]
    },
    quiz: {
      question: "Scratch'te bir oyuna her baştan başlandığında (yeşil bayrak tıklandığında) puanın önceki oyundan kalmaması için hangi blok kullanılmalıdır?",
      options: [
        { text: "A) [Skor]'u 1 kadar değiştir", isCorrect: false },
        { text: "B) [Skor]'u 0 yap", isCorrect: true },
        { text: "C) [Skor]'u gizle", isCorrect: false },
        { text: "D) 10 saniye bekle", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Oyun başında hafızadaki puanı sıfırlamak için mutlaka <strong>[Skor]'u 0 yap</strong> bloğu kullanılır."
    },
    summaryRules: [
      { bold: "Değişken = Bilgi Kutusu", text: "Bellekte veri tutan isimli alanlardır." },
      { bold: "Başlangıçta Sıfırla", text: "Her yeni oyunda 'Skor'u 0 yap' unutulmamalıdır." },
      { bold: "23 Nisan Kutlu Olsun", text: "Bayrak toplama oyunuyla bayramımızı kodladık." }
    ],
    homework: "Oyununuza 'Kalan_Hak' adında ikinci bir değişken ekleyip başlangıç değerini 3 yapın.",
    nextWeekPreview: "Süreli ve Skorlu Meyve Toplama Oyunu: Süre bittiğinde ne olacak?"
  },

  // 33. HAFTA
  {
    week: 33,
    date: "26 Nisan - 02 Mayıs",
    hours: "2 Ders Saati",
    unit: "TEMA 5: Algoritmik Düşünme ve Blok Tabanlı Kodlama",
    unitBadge: "Tema 5: Hafta 14",
    unitTheme: "tema-5",
    title: "Skorlu ve Süreli Meyve Toplama Oyunu",
    subtitle: "Rastgele Konum (Random Position), Geri Sayım Sayacı ve Oyun Bitti Şartı",
    outcomeCode: "BTY.5.6.2",
    targetSkill: "Oyun Mekaniği Tasarımı & Süre Yönetimi",
    curiosityQuestion: "Gökten elmaların düştüğü bir oyunda elmanın hep aynı yerden değil de rastgele bir yerden düşmesini nasıl sağlarız?",
    roadmap: [
      { title: "Rastgele Konum Bloğu", desc: "Sahnenin herhangi bir yerine (-240 ile +240 arası) elma yerleştirme." },
      { title: "Y Ekseniyle Aşağı Düşme", desc: "'Y'yi -5 değiştir' ile yerçekimi hissi oluşturma." },
      { title: "Süre Değişkeni (Geri Sayım)", desc: "Süre'yi 30 yap -> 1 saniye bekle -> Süre'yi -1 değiştir döngüsü." },
      { title: "Oyun Bitti Kontrolü", desc: "Eğer Süre = 0 ise 'Tümünü Durdur' bloğuyla oyunu bitirme." }
    ],
    section1: {
      title: "Geri Sayım Sayacı Nasıl Kodlanır?",
      subtitle: "30 saniyeden geriye doğru sayan gerçek bir saat mekanizması.",
      layout: "split-visual",
      card: {
        title: "Sayaç Algoritması",
        icon: "⏱️",
        desc: "Süre değişkenini adım adım azaltmak için gereken adımlar:",
        items: [
          { bold: "1. Başlangıç Değeri", text: "Tıklandığında -> [Süre]'yi 30 yap." },
          { bold: "2. Zaman Akışı", text: "Sürekli Tekrarla: [1 saniye bekle] -> [Süre]'yi -1 kadar değiştir." },
          { bold: "3. Bitiş Kontrolü", text: "Eğer [Süre = 0] ise -> 'Oyun Bitti' de ve tümünü durdur!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="200" y="45" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">Meyve Toplama & Süre Döngüsü</text>
        
        <!-- Sol Sepet ve Elma -->
        <g transform="translate(40, 70)">
          <!-- Sepet -->
          <ellipse cx="60" cy="120" rx="35" ry="14" fill="#d97706"/>
          <rect x="25" y="100" width="70" height="20" rx="4" fill="#b45309"/>
          <text x="60" y="114" fill="#fef3c7" font-size="9" font-weight="bold" text-anchor="middle">SEPET</text>
          
          <!-- Düşen Elma -->
          <circle cx="60" cy="40" r="14" fill="#ef4444"/>
          <path d="M60 26 Q64 20 62 16" stroke="#15803d" stroke-width="2"/>
          <text x="60" y="44" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">🍎</text>
          <path d="M60 60 V90" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3"/>
          <text x="60" y="75" fill="#fecdd3" font-size="8" text-anchor="middle">y: -5 değiştir</text>
        </g>
        
        <!-- Sağ Kod Blokları Şeması -->
        <g transform="translate(190, 65)">
          <rect x="0" y="0" width="170" height="135" rx="8" fill="#1e293b" stroke="#334155"/>
          <text x="85" y="18" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">GERİ SAYIM SAYACI</text>
          
          <rect x="10" y="28" width="150" height="22" rx="4" fill="#ff8c1a"/>
          <text x="85" y="43" fill="#ffffff" font-size="9" text-anchor="middle">[Süre]'yi 30 yap</text>
          
          <rect x="10" y="56" width="150" height="42" rx="4" fill="#ffab19"/>
          <text x="85" y="72" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">30 defa tekrarla:</text>
          <text x="85" y="88" fill="#0f172a" font-size="8" text-anchor="middle">1 sn bekle & Süre'yi -1 değiştir</text>
          
          <rect x="10" y="104" width="150" height="22" rx="4" fill="#ef4444"/>
          <text x="85" y="119" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Tümünü Durdur!</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Rastgele Konum ve Yere Değme Kontrolü",
      subtitle: "Elmanın sahnenin en tepesinde rastgele bir X noktasında belirmesi.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "X Koordinatı",
          title: "Rastgele X Seçimi",
          desc: "Elma yukarıdan düşerken her seferinde ekranın farklı bir yerinden başlamalıdır.",
          bullets: [
            "x: [-200 ile 200 arasında rastgele bir sayı seç]",
            "y: [160] (Sahnenin üst kısmı)",
            "Bu sayede oyun asla tekdüze ve sıkıcı olmaz!"
          ]
        },
        {
          badge: "Yerçekimi & Sepet",
          title: "Temas Algılama",
          desc: "Sepete değerse puan artar, yere değerse elma tekrar tepeye ışınlanır.",
          bullets: [
            "Eğer [Sepete değdi mi?] ise -> Puanı 1 artır, tepeye dön.",
            "Eğer [y konumu < -150] ise -> Tepeye dön (Sepet kaçırdı!).",
            "Kaçan elmalar için can azaltma da eklenebilir."
          ]
        }
      ]
    },
    workshop: {
      title: "Meyve Yağmuru Laboratuvarı",
      subtitle: "Sağ-sol ok tuşlarıyla kontrol edilen sepetle elma yakalama oyunu.",
      steps: [
        { title: "Sepet Hareketi", desc: "Sepet kuklasına sağ-sol ok tuşlarıyla 'x'i 10 değiştir' / 'x'i -10 değiştir' kodlarını ekleyin." },
        { title: "Elma Yağmuru", desc: "Elmaya: 'x: rastgele, y: 160 yap' ve 'sürekli tekrarla: y'yi -7 değiştir' kodunu yazın." },
        { title: "Sayaç ve Skor", desc: "Süre için 30 saniyelik geri sayım, toplanan her elma için Skor +1 ekleyin." }
      ],
      criteria: [
        "Elmanın tavandan aşağıya doğru akıcı şekilde düşmesi",
        "Sepete değdiğinde skorun 1 artıp elmanın tepeye dönmesi",
        "30 saniye dolduğunda oyunun otomatik durması"
      ]
    },
    tips: {
      safetyTitle: "Oyun Tasarımında Denge (Game Balance)",
      safetyRules: [
        { bold: "Oyun Ne Çok Zor Ne Çok Kolay Olmalı", text: "Elma saniyede 50 piksel hızla düşerse kimse yakalayamaz; çok yavaş düşerse oyuncu sıkılır. Hızı 5-8 piksel arası ayarlayın." }
      ],
      myths: [
        { wrong: "Süreyi azaltmak için 'Süreyi 1 değiştir' yazılır.", correct: "Hayır! Süreyi azaltmak için eksi işaretiyle 'Süreyi -1 kadar değiştir' yazılmalıdır." }
      ]
    },
    quiz: {
      question: "Scratch'te bir elmanın sahnenin en yukarısından aşağıya doğru yere düşmesini sağlamak için hangi blok kullanılmalıdır?",
      options: [
        { text: "A) x'i 10 değiştir", isCorrect: false },
        { text: "B) y'yi -5 değiştir", isCorrect: true },
        { text: "C) 15 derece dön", isCorrect: false },
        { text: "D) 100 adım git", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Dikey hareket 'Y' eksenidir. Aşağı doğru inmek için 'Y' koordinatını negatif sayıyla (örn: <strong>y'yi -5 değiştir</strong>) azaltırız."
    },
    summaryRules: [
      { bold: "Y Ekseni = Aşağı/Yukarı", text: "Eksi Y değeri yerçekimi gibi aşağı çeker." },
      { bold: "Rastgele Sayı = Heyecan", text: "Farklı noktalarda doğan nesneler oyunu canlandırır." },
      { bold: "Sayaç Kontrolü", text: "Süre = 0 olduğunda oyun biter." }
    ],
    homework: "Oyununuza yere düşen elma sayısını sayan 'Kacan_Elma' değişkeni ekleyin.",
    nextWeekPreview: "İki Karakterli Etkileşim & Haber Salma (Broadcast): Kuklalar birbiriyle nasıl konuşur?"
  },

  // 34. HAFTA
  {
    week: 34,
    date: "03 - 09 Mayıs",
    hours: "2 Ders Saati",
    unit: "TEMA 5: Algoritmik Düşünme ve Blok Tabanlı Kodlama",
    unitBadge: "Tema 5: Hafta 15",
    unitTheme: "tema-5",
    title: "Karakterler Arası İletişim: Haber Salma (Broadcast)",
    subtitle: "Olay Tabanlı Tetikleyiciler: 'Haberini Sal' ve 'Haberi Aldığımda' Mekanizması",
    outcomeCode: "BTY.5.6.3",
    targetSkill: "Olay Tabanlı Programlama & Karakterler Arası İletişim",
    curiosityQuestion: "Bir kukla bir hedefe ulaştığında, sahnenin diğer ucundaki başka bir kukla bunu nereden anlar ve harekete geçer?",
    roadmap: [
      { title: "Haber Salma Nedir?", desc: "Kuklaların birbirine ve sahneye telsizle gizli anons geçmesi." },
      { title: "'... Haberini Sal' Bloğu", desc: "Sarı Olaylar kategorisinde özel bir mesaj yayınlama." },
      { title: "'... Haberini Aldığımda' Bloğu", desc: "Mesajı duyan diğer kuklaların göreve başlaması." },
      { title: "Seviye Atlama & Zafer Sahnesi", desc: "Anahtar bulununca kapının açılması ve dekorun değişmesi." }
    ],
    section1: {
      title: "Haber Salma: Scratch'in Telsiz Sistemi",
      subtitle: "Bir olay gerçekleştiğinde tüm sahneye ve kuklalara sinyal gönderme yöntemi.",
      layout: "split-visual",
      card: {
        title: "Telsiz Metaforu",
        icon: "📻",
        desc: "Bir polis telsizinde 'Merkezden tüm birimlere!' anonsu gibi çalışır:",
        items: [
          { bold: "1. Haber Salan (Verici)", text: "Örn: Kedi anahtara dokunduğunda: [Kapiyi_Ac haberini sal]." },
          { bold: "2. Mesajın Yayılması", text: "Scratch projesindeki tüm kuklalar bu anonsu aynı anda duyar." },
          { bold: "3. Haberi Dinleyen (Alıcı)", text: "Kapı kuklası: [Kapiyi_Ac haberini aldığımda] -> Gizlen ve sesi çal!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="200" y="45" fill="#c4b5fd" font-size="12" font-weight="bold" text-anchor="middle">Kuklalar Arası Haberleşme Döngüsü</text>
        
        <!-- Sol Kukla: Gönderici -->
        <g transform="translate(40, 75)">
          <rect x="0" y="0" width="90" height="100" rx="8" fill="#1e293b" stroke="#38bdf8"/>
          <text x="45" y="25" fill="#38bdf8" font-size="20" text-anchor="middle">🐱</text>
          <text x="45" y="45" fill="#bae6fd" font-size="10" font-weight="bold" text-anchor="middle">Kedi Kuklası</text>
          <rect x="8" y="55" width="74" height="22" rx="4" fill="#f59e0b"/>
          <text x="45" y="70" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Haber Sal:</text>
          <text x="45" y="88" fill="#fde68a" font-size="8" text-anchor="middle">"seviye_atla"</text>
        </g>
        
        <!-- Ortadaki Dalgalar / Telsiz Sinyali -->
        <g transform="translate(145, 110)">
          <path d="M0 15 Q25 0 50 15 T100 15" stroke="#a855f7" stroke-width="2.5" fill="none" stroke-dasharray="4 2"/>
          <text x="50" y="-5" fill="#e9d5ff" font-size="9" font-weight="bold" text-anchor="middle">Telsiz Dalgası (Broadcast)</text>
          <polygon points="105,15 95,10 95,20" fill="#a855f7"/>
        </g>
        
        <!-- Sağ Kukla: Alıcı -->
        <g transform="translate(265, 75)">
          <rect x="0" y="0" width="105" height="100" rx="8" fill="#1e293b" stroke="#34d399"/>
          <text x="52" y="25" fill="#34d399" font-size="20" text-anchor="middle">🚪</text>
          <text x="52" y="45" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Kapı / Sahne</text>
          <rect x="8" y="55" width="89" height="22" rx="4" fill="#10b981"/>
          <text x="52" y="70" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Haberi Aldığımda:</text>
          <text x="52" y="88" fill="#a7f3d0" font-size="8" text-anchor="middle">"Dekoru Değiştir"</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Haber Salma Neden Bu Kadar Önemlidir?",
      subtitle: "Bağımsız nesnelerin birbiriyle senkronize çalışmasını sağlar.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Oyun Bittiğinde",
          title: "'Oyun_Bitti' Haberi",
          desc: "Can bittiğinde Kedi 'Oyun_Bitti' haberi salar. Sahne karanlık dekora geçer, 'Game Over' yazısı belirir.",
          bullets: [
            "Tüm kuklalar bu haberle durur veya gizlenir.",
            "Sonuç ekranı temiz ve profesyonel görünür.",
            "Kod karmaşasını önler ve projeyi düzenler."
          ]
        },
        {
          badge: "Diyaloglar & Tiyatro",
          title: "Sırayla Konuşma",
          desc: "İki kuklanın sohbet etmesi için 'bekle' yerine haber salma kullanılabilir.",
          bullets: [
            "Ali sorar -> [Soru_Soruldu haberini sal].",
            "Ayşe [Soru_Soruldu haberini aldığında] cevap verir.",
            "Böylece zamanlama kaymaları yaşanmaz."
          ]
        }
      ]
    },
    workshop: {
      title: "Hazine Avcısı ve Kilitli Sandık",
      subtitle: "Kahraman anahtarı aldığında sandık açılır ve tebrik sesi çalar.",
      steps: [
        { title: "Anahtar ve Kedi", desc: "Kediyi oklarla hareket ettirin. Kedi anahtara değdiğinde 'Anahtar_Alindi' haberini salsın ve anahtar gizlensin." },
        { title: "Sandık Kodu", desc: "Sandık kuklasına gidin: '[Anahtar_Alindi] haberini aldığımda -> Kılık 2'ye geç (Açık Sandık) ve Ses çal'." },
        { title: "Tebrik Mesajı", desc: "Tebrik yazısı kuklasına: '[Anahtar_Alindi] haberini aldığımda -> Göster' ekleyin." }
      ],
      criteria: [
        "Haber salma bloğunun doğru oluşturulup isimlendirilmesi",
        "Karakter temas ettiği anda mesajın iletilmesi",
        "Alıcı kuklanın haberi alır almaz doğru eylemi gerçekleştirmesi"
      ]
    },
    tips: {
      safetyTitle: "Haber İsimlendirirken Dikkat",
      safetyRules: [
        { bold: "Habere Anlaşılır İsim Verin", text: "'Haber1', 'Haber2' bırakmayın! 'Oyun_Bitti', 'Kapi_Acildi', 'Skor_Artir' gibi ne işe yaradığını belirten isimler koyun." }
      ],
      myths: [
        { wrong: "Bir haberi sadece bir kukla dinleyebilir.", correct: "Hayır! Bir haber salındığında projedeki 10 farklı kukla aynı anda o haberi dinleyip farklı tepkiler verebilir." }
      ]
    },
    quiz: {
      question: "Scratch'te bir kuklanın yaptığı bir eylemi (örneğin anahtarı almasını) başka bir kuklaya (örneğin kapıya) bildirmek için hangi blok çifti kullanılır?",
      options: [
        { text: "A) [Adım git] ve [Dön]", isCorrect: false },
        { text: "B) [... haberini sal] ve [... haberini aldığımda]", isCorrect: true },
        { text: "C) [Gizlen] ve [Göster]", isCorrect: false },
        { text: "D) [Fareye doğru dön] ve [Tıklandığında]", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Kuklalar arası haberleşme için <strong>haberini sal</strong> ve <strong>haberini aldığımda</strong> blokları kullanılır."
    },
    summaryRules: [
      { bold: "Haber = Telsiz Mesajı", text: "Tüm kuklalar aynı frekansta buluşur." },
      { bold: "Kuklalar Eşgüdümlü Çalışır", text: "Biri haber salar, diğeri tepki verir." },
      { bold: "Seviye Geçişleri Kolaylaşır", text: "Sahne ve dekor değişimleri haberle tetiklenir." }
    ],
    homework: "Oyununuza can bittiğinde devreye giren 'Oyun_Kaybedildi' haberi ekleyin.",
    nextWeekPreview: "Engelliler Haftası & Sesli Asistan Projesi: Scratch Metinden Sese Eklentisi!"
  },

  // 35. HAFTA
  {
    week: 35,
    date: "10 - 16 Mayıs",
    hours: "2 Ders Saati",
    unit: "TEMA 5: Algoritmik Düşünme ve Blok Tabanlı Kodlama",
    unitBadge: "Tema 5: Hafta 16",
    unitTheme: "tema-5",
    title: "Engelliler Haftası & Sesli Asistan Projesi",
    subtitle: "Scratch Eklentileri (Extensions): Metinden Sese (Text-to-Speech) ve Engelsiz Bilişim",
    outcomeCode: "BTY.5.6.3",
    targetSkill: "Eklenti Entegrasyonu & Sosyal Fayda Odaklı Tasarım",
    curiosityQuestion: "Görme engelli bir bireyin bilgisayardaki yazıları okuyabilmesi için bilgisayarlar nasıl bir ses teknolojisi kullanır?",
    roadmap: [
      { title: "Engelsiz Bilişim ve Erişilebilirlik", desc: "10-16 Mayıs Engelliler Haftası ve teknolojinin kolaylaştırıcı gücü." },
      { title: "Scratch Eklenti Menüsü", desc: "Sol alttaki mavi butondan 'Metinden Sese' eklentisini projeye ekleme." },
      { title: "Konuşma Blokları (TTS)", desc: "'[Merhaba] de ve konuş', ses tonunu (Alto, Tenor) ve dili ayarlama." },
      { title: "Akıllı Asistan Tasarımı", desc: "Kullanıcı soru sorduğunda sesli yanıt veren dijital rehber." }
    ],
    section1: {
      title: "Teknoloji Herkes İçindir: Erişilebilirlik",
      subtitle: "Bilişim teknolojileri engelleri kaldırarak herkesin bilgiye ulaşmasını sağlar.",
      layout: "split-visual",
      card: {
        title: "Engelsiz Bilişim Çözümleri",
        icon: "♿",
        desc: "Günlük hayatta kullanılan yardımcı teknolojiler:",
        items: [
          { bold: "Ekran Okuyucular (TTS)", text: "Ekranda yazan metinleri yapay zekâ sesiyle sese dönüştürür." },
          { bold: "Sesli Komut Sistemleri", text: "Ellerini kullanamayan bireyler için sesle çalışan asistanlar." },
          { bold: "Yüksek Kontrast & Büyüteç", text: "Az gören bireyler için arayüz yazılarını büyüten yazılımlar." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="200" y="45" fill="#67e8f9" font-size="12" font-weight="bold" text-anchor="middle">Metinden Sese (Text-to-Speech) Mimarisi</text>
        
        <!-- Giriş: Metin Kutusu -->
        <rect x="40" y="80" width="90" height="70" rx="8" fill="#1e293b" stroke="#38bdf8"/>
        <text x="85" y="105" fill="#bae6fd" font-size="10" font-weight="bold" text-anchor="middle">Metin Girdisi</text>
        <rect x="50" y="115" width="70" height="22" rx="4" fill="#0f172a"/>
        <text x="85" y="130" fill="#38bdf8" font-size="9" text-anchor="middle">"Günaydın!"</text>
        
        <!-- Ok -->
        <path d="M135 115 H165" stroke="#06b6d4" stroke-width="2.5" marker-end="url(#arr)"/>
        
        <!-- TTS Motoru -->
        <circle cx="205" cy="115" r="35" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
        <text x="205" y="110" fill="#22d3ee" font-size="16" text-anchor="middle">🤖</text>
        <text x="205" y="128" fill="#a5f3fc" font-size="8" font-weight="bold" text-anchor="middle">TTS Motoru</text>
        
        <!-- Ok -->
        <path d="M245 115 H275" stroke="#06b6d4" stroke-width="2.5"/>
        
        <!-- Hoparlör / Ses Çıkışı -->
        <rect x="280" y="80" width="85" height="70" rx="8" fill="#1e293b" stroke="#10b981"/>
        <text x="322" y="105" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Ses Çıkışı</text>
        <text x="322" y="130" fill="#34d399" font-size="22" text-anchor="middle">🔊 🎶</text>
        
        <text x="200" y="185" fill="#94a3b8" font-size="10" text-anchor="middle">Yazılı kelimeler anında insansı bir sese dönüşür.</text>
      </svg>`
    },
    section2: {
      title: "Scratch Metinden Sese Blokları",
      subtitle: "Sol alttaki mavi butona tıklayarak 'Metinden Sese' eklentisini açıyoruz.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Yeşil TTS Blokları",
          title: "Sesi Konuşturma",
          desc: "Scratch karakteri artık sadece baloncukla yazmaz, hoparlörden sesli olarak konuşur.",
          bullets: [
            "[Merhaba dünya] de ve konuş",
            "Sesi [Alto / Tenor / Dev / Sincap] yap",
            "Dili [Türkçe] yap (Türkçe aksanla okur)"
          ]
        },
        {
          badge: "Sosyal Sorumluluk",
          title: "Engelsiz Bilişim Projesi",
          desc: "Görme güçlüğü çeken bir birey için sesli menü veya sesli rehber yapıyoruz.",
          bullets: [
            "Butonlara basıldığında butonun ne olduğunu seslendirir.",
            "Kullanıcıya sesli yönergeler verir.",
            "Teknolojinin iyilik ve yardım için kullanımını öğretir."
          ]
        }
      ]
    },
    workshop: {
      title: "Engelsiz Sesli Okul Asistanı",
      subtitle: "Okul kütüphanesini tanıtan ve görme engellilere rehberlik eden akıllı asistan.",
      steps: [
        { title: "Eklentiyi Ekle", desc: "Scratch arayüzünün sol altındaki 'Eklenti Ekle' ikonuna basıp 'Metinden Sese'yi seçin." },
        { title: "Dili ve Sesi Ayarla", desc: "Tıklandığında -> Dili [Türkçe] yap, Sesi [Alto] yap bloklarını yerleştirin." },
        { title: "Soru-Cevap Döngüsü", desc: "'Bilişim sınıfı nerede?' butonuna tıklandığında karakterimiz 'Bilişim sınıfı 2. katta sağdadır' cümlesini sesli okusun." }
      ],
      criteria: [
        "Metinden Sese eklentisinin başarıyla projeye dahil edilmesi",
        "Karakterin doğru Türkçe telaffuzla konuşması",
        "Engelliler Haftası temasına uygun yardımsever bir asistan tasarlanması"
      ]
    },
    tips: {
      safetyTitle: "Erişilebilir Tasarım İlkeleri",
      safetyRules: [
        { bold: "Sadece Görüntüye Güvenmeyin", text: "Önemli uyarıları hem ekranda yazıyla hem de sesle duyurmak erişilebilirliğin altın kuralıdır." }
      ],
      myths: [
        { wrong: "Yapay zekâ sesleri sadece robot gibi tekdüze konuşur.", correct: "Günümüz teknolojisinde duygulu, tonlamalı ve insan sesine çok yakın sesler üretilebilmektedir." }
      ]
    },
    quiz: {
      question: "Scratch'te bir kuklanın ekrandaki yazıları Türkçe seslendirerek hoparlörden duyurmasını sağlamak için hangi eklenti kullanılmalıdır?",
      options: [
        { text: "A) Kalem (Pen) Eklentisi", isCorrect: false },
        { text: "B) Metinden Sese (Text to Speech)", isCorrect: true },
        { text: "C) Müzik Eklentisi", isCorrect: false },
        { text: "D) Çeviri (Translate)", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Metinleri sese dönüştürmek için <strong>Metinden Sese (Text-to-Speech)</strong> eklentisi kullanılır."
    },
    summaryRules: [
      { bold: "Teknoloji Engelsizdir", text: "Yazılımlar herkes için erişilebilir olmalıdır." },
      { bold: "TTS Eklentisi", text: "Kuklalarımızı kendi ana dilimizde konuşturduk." },
      { bold: "Empati ve Bilişim", text: "İhtiyaç sahiplerine hayatı kolaylaştıran çözümler ürettik." }
    ],
    homework: "Asistanınıza 'Kütüphane saatleri kaça kadar?' sorusuna sesli yanıt veren yeni bir buton ekleyin.",
    nextWeekPreview: "19 Mayıs Gençlik ve Spor Bayramı & Ses Algılama ile Spor Oyunu!"
  },

  // 36. HAFTA
  {
    week: 36,
    date: "17 - 23 Mayıs",
    hours: "2 Ders Saati",
    unit: "TEMA 5: Algoritmik Düşünme ve Blok Tabanlı Kodlama",
    unitBadge: "Tema 5: Hafta 17",
    unitTheme: "tema-5",
    title: "19 Mayıs & Mikrofon/Ses Algılama ile Spor Oyunu",
    subtitle: "Bilgisayarın Sensörlerini Kullanma: Ses Yüksekliği (Loudness) ile Karakter Kontrolü",
    outcomeCode: "BTY.5.6.3",
    targetSkill: "Sensör Verisi İşleme & Etkileşimli Arayüz",
    curiosityQuestion: "Klavyeye ya da fareye hiç dokunmadan, sadece 'Zıpla!' diye bağırarak bir oyunu yönetebilir misiniz?",
    roadmap: [
      { title: "19 Mayıs ve Sporun Önemi", desc: "Atatürk'ü Anma, Gençlik ve Spor Bayramı'nı dijital sporla kutlama." },
      { title: "Mikrofon Sensörü", desc: "Bilgisayarın mikrofonundan gelen ses düzeyini ölçen 'Ses Yüksekliği' bloğu." },
      { title: "Eşik Değeri (Threshold)", desc: "Eğer ses yüksekliği > 30 ise: Karakterin engelin üzerinden zıplaması." },
      { title: "Sesle Koşu Simülasyonu", desc: "Ne kadar yüksek ses çıkarılırsa karakterin o kadar hızlı koşması." }
    ],
    section1: {
      title: "Sensörler: Bilgisayarın Duyu Organları",
      subtitle: "Algılama menüsündeki 'Ses Yüksekliği' bloğu odadaki gürültü seviyesini 0 ile 100 arasında ölçer.",
      layout: "split-visual",
      card: {
        title: "Ses Algılama Mantığı",
        icon: "🎤",
        desc: "Mikrofon ses dalgalarını dijital sayılara çevirir:",
        items: [
          { bold: "Sessiz Ortam (0 - 10)", text: "Sınıf sessizken değer çok düşüktür; karakter hareketsiz bekler." },
          { bold: "Normal Konuşma (15 - 35)", text: "Hafif ses çıkarıldığında algılanan değer orta seviyeye çıkar." },
          { bold: "Bağırma / Alkış (> 40)", text: "Ses eşiği aşıldığında zıplama veya koşma komutu tetiklenir!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
        <text x="200" y="45" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">Ses Algılama (Loudness) ile Kontrol</text>
        
        <!-- Mikrofon -->
        <g transform="translate(50, 75)">
          <rect x="15" y="10" width="20" height="35" rx="10" fill="#ec4899"/>
          <path d="M5 25 C5 45 45 45 45 25" stroke="#f472b6" stroke-width="2" fill="none"/>
          <line x1="25" y1="45" x2="25" y2="65" stroke="#f472b6" stroke-width="3"/>
          <line x1="10" y1="65" x2="40" y2="65" stroke="#f472b6" stroke-width="3"/>
          <text x="25" y="85" fill="#fbcfe8" font-size="9" text-anchor="middle">Mikrofon</text>
        </g>
        
        <!-- Ses Düzeyi Çubuğu (VU Meter) -->
        <g transform="translate(130, 80)">
          <rect x="0" y="0" width="130" height="24" rx="6" fill="#1e293b" stroke="#334155"/>
          <rect x="2" y="2" width="85" height="20" rx="4" fill="url(#soundGrad)"/>
          <line x1="75" y1="0" x2="75" y2="28" stroke="#ef4444" stroke-width="2"/>
          <text x="75" y="42" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">Eşik (35)</text>
          <text x="45" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Değer: 52</text>
        </g>
        
        <!-- Zıplayan Karakter -->
        <g transform="translate(290, 80)">
          <rect x="0" y="0" width="75" height="95" rx="8" fill="#1e293b" stroke="#34d399"/>
          <text x="37" y="35" fill="#34d399" font-size="24" text-anchor="middle">🏃</text>
          <path d="M37 60 V45" stroke="#34d399" stroke-width="2" marker-end="url(#arr)"/>
          <text x="37" y="75" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Zıpladı!</text>
          <text x="37" y="88" fill="#6ee7b7" font-size="8" text-anchor="middle">y'yi 30 artır</text>
        </g>
        <defs>
          <linearGradient id="soundGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10b981"/>
            <stop offset="70%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#ef4444"/>
          </linearGradient>
        </defs>
      </svg>`
    },
    section2: {
      title: "Ses Algılama Kod Blokları",
      subtitle: "Algılama menüsündeki yuvarlak 'ses yüksekliği' bloğu mantıksal şart içine konur.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Şart Bloğu",
          title: "Eşik Kontrolü",
          desc: "Yeşil bayrak tıklandığında sürekli döngüde ses seviyesi kontrol edilir.",
          bullets: [
            "Sürekli Tekrarla:",
            "Eğer < [ses yüksekliği] > 30 > ise:",
            "y'yi 40 değiştir -> 0.2 sn bekle -> y'yi -40 değiştir (Zıplama)."
          ]
        },
        {
          badge: "Farklı Etkileşimler",
          title: "Klavyesiz Oyun Deneyimi",
          desc: "Öğrenciler vücut sesleriyle (alkış, tezahürat) oyuna katılır.",
          bullets: [
            "19 Mayıs coşkusunu takım tezahüratıyla oyuna yansıtma.",
            "Engelli bireyler için sesle erişilebilirlik örneği.",
            "Donanım (mikrofon) ile yazılımın bütünleşmesi."
          ]
        }
      ]
    },
    workshop: {
      title: "19 Mayıs 100 Metre Sesli Koşu Şampiyonası",
      subtitle: "Öğrenci alkışladıkça veya tezahürat yaptıkça koşan atlet projesi.",
      steps: [
        { title: "Koşucu Kuklası", desc: "Bir atlet kuklası seçip sahnenin soluna (x: -200, y: -80) yerleştirin." },
        { title: "Ses Dinleme Kodu", desc: "Sürekli tekrarla içinde: 'Eğer ses yüksekliği > 20 ise: 10 adım git ve sonraki kılığa geç' kodunu yazın." },
        { title: "Bitiş Çizgisi", desc: "Atlet bitiş çizgisine (x > 200) ulaştığında 'Şampiyon!' dekoruna geçsin ve zafer marşı çalsın." }
      ],
      criteria: [
        "Mikrofon izninin verilmesi ve ses seviyesinin algılanması",
        "Ses çıkarıldığında kuklanın akıcı şekilde ileriye koşması",
        "19 Mayıs Gençlik ve Spor Bayramı ruhuna uygun neşeli bir tasarım"
      ]
    },
    tips: {
      safetyTitle: "Sınıf İçi Ses Dengesi",
      safetyRules: [
        { bold: "Eşik Değerini Doğru Ayarlayın", text: "Laboratuvarda diğer arkadaşlarınız konuşurken yanlışlıkla zıplamaması için eşiği çok düşük (örneğin 5) yapmayın. 30-40 idealdir." }
      ],
      myths: [
        { wrong: "Scratch sesin ne kelime söylediğini anlar.", correct: "Temel Scratch sesin şiddetini (yüksekliğini) ölçer; kelimeleri anlamak için yapay zekâ ses tanıma modelleri gerekir." }
      ]
    },
    quiz: {
      question: "Scratch'te mikrofon aracılığıyla ortamdaki sesin şiddetini kontrol etmek için hangi Algılama bloğu kullanılır?",
      options: [
        { text: "A) fare x", isCorrect: false },
        { text: "B) ses yüksekliği (loudness)", isCorrect: true },
        { text: "C) süre", isCorrect: false },
        { text: "D) tuşuna basıldı mı?", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Ortamın ses şiddetini 0 ile 100 arasında ölçen blok <strong>ses yüksekliği (loudness)</strong> bloğudur."
    },
    summaryRules: [
      { bold: "Mikrofon = Duyu Organı", text: "Bilgisayar dış dünyadaki sesleri sayılara çevirir." },
      { bold: "Eşik Değeri (Threshold)", text: "Belli bir sesin üstünde eylem başlar." },
      { bold: "19 Mayıs Ruhu", text: "Kodlarımızla sporu ve gençliği buluşturduk." }
    ],
    homework: "Oyununuza 'Zıpla!' dendiğinde engelin üstünden atlayan bir engel kuklası ekleyin.",
    nextWeekPreview: "Sıfır Atık & Çevre Projesi: Akıllı Geri Dönüşüm Kutusu!"
  },

  // 37. HAFTA
  {
    week: 37,
    date: "24 - 30 Mayıs",
    hours: "2 Ders Saati",
    unit: "TEMA 5: Algoritmik Düşünme ve Blok Tabanlı Kodlama",
    unitBadge: "Tema 5: Hafta 18",
    unitTheme: "tema-5",
    title: "Sıfır Atık & Akıllı Geri Dönüşüm Kutusu Projesi",
    subtitle: "Toplumsal ve Çevresel Problemlere Bilişimle Çözüm: Nesne Ayrıştırma Algoritması",
    outcomeCode: "BTY.5.6.4",
    targetSkill: "Algoritmik Sınıflandırma & Çevre Bilinci",
    curiosityQuestion: "Geri dönüşüm tesislerinde pet şişeler, piller ve kâğıtlar insan eli değmeden sensörlerle nasıl ayrıştırılır?",
    roadmap: [
      { title: "Sıfır Atık Hareketi", desc: "Doğayı korumak için atıkların doğru kutulara atılmasının önemi." },
      { title: "Ayrıştırma Algoritması", desc: "Eğer plastik ise sarı kutuya, eğer kâğıt ise mavi kutuya yönlendirme." },
      { title: "Sürükle - Bırak Etkileşimi", desc: "'Fareye basıldı mı?' ve 'x/y faresine git' bloklarıyla atığı taşıma." },
      { title: "Puanlama ve Çevre Karnesi", desc: "Doğru kutuda +10 yeşil puan, yanlış kutuda -5 puan cezası." }
    ],
    section1: {
      title: "Akıllı Çevre Çözümü: Ayrıştırma Mantığı",
      subtitle: "Bir nesnenin kılığına veya türüne göre doğru hedefe yönlendirilmesi.",
      layout: "split-visual",
      card: {
        title: "3 Renk 3 Kutu Kuralı",
        icon: "♻️",
        desc: "Sıfır Atık projemizde simüle edeceğimiz kutular:",
        items: [
          { bold: "Mavi Kutu (Kâğıt)", text: "Kitap, gazete, karton kutular buraya atılır." },
          { bold: "Sarı Kutu (Plastik)", text: "Pet şişe, poşet ve plastik ambalajlar buraya yönlendirilir." },
          { bold: "Kırmızı Kutu (Pil / Elektronik)", text: "Doğaya en çok zarar veren tehlikeli atık kutusu." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="200" y="45" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">Sıfır Atık Akıllı Ayrıştırma Simülasyonu</text>
        
        <!-- Atık Nesnesi -->
        <g transform="translate(165, 65)">
          <rect x="0" y="0" width="70" height="35" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="35" y="22" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">🧴 Pet Şişe</text>
        </g>
        
        <!-- 3 Yönlü Karar Oku -->
        <path d="M200 105 V130" stroke="#94a3b8" stroke-width="2"/>
        <path d="M200 130 H80 V150" stroke="#3b82f6" stroke-width="2"/>
        <path d="M200 130 H320 V150" stroke="#ef4444" stroke-width="2"/>
        <path d="M200 130 V150" stroke="#eab308" stroke-width="2"/>
        
        <!-- Kutular -->
        <!-- Mavi: Kağıt -->
        <g transform="translate(45, 155)">
          <rect x="0" y="0" width="70" height="55" rx="6" fill="#1d4ed8"/>
          <text x="35" y="25" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">KÂĞIT</text>
          <text x="35" y="42" fill="#bfdbfe" font-size="8" text-anchor="middle">Mavi Kutu</text>
        </g>
        
        <!-- Sarı: Plastik -->
        <g transform="translate(165, 155)">
          <rect x="0" y="0" width="70" height="55" rx="6" fill="#ca8a04"/>
          <text x="35" y="25" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">PLASTİK</text>
          <text x="35" y="42" fill="#fef08a" font-size="8" text-anchor="middle">Sarı Kutu (✓)</text>
        </g>
        
        <!-- Kırmızı: Pil -->
        <g transform="translate(285, 155)">
          <rect x="0" y="0" width="70" height="55" rx="6" fill="#b91c1c"/>
          <text x="35" y="25" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">ATIK PİL</text>
          <text x="35" y="42" fill="#fecaca" font-size="8" text-anchor="middle">Kırmızı Kutu</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Ayrıştırma Kod Mantığı",
      subtitle: "Kuklanın doğru kutuya temas edip etmediğinin algılanması.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Doğru Kutulama",
          title: "Temas & Puan Artışı",
          desc: "Pet şişe sarı kutuya dokunduğunda çevre puanı artar ve teşekkür sesi çalar.",
          bullets: [
            "Eğer [Sarı_Kutu'ya değdi mi?] ise:",
            "[Cevre_Puani]'nı 10 artır,",
            "'Harika! Plastik geri dönüştü' de ve gizlen."
          ]
        },
        {
          badge: "Hatalı Atık",
          title: "Ceza & Eğitici Uyarı",
          desc: "Plastik şişe mavi kâğıt kutusuna atılırsa sistem oyuncuyu uyarır.",
          bullets: [
            "Eğer [Mavi_Kutu'ya değdi mi?] ise:",
            "[Cevre_Puani]'nı 5 azalt,",
            "'Hata! Ben plastik şişeyim, sarı kutuya atmalısın' uyarısı ver."
          ]
        }
      ]
    },
    workshop: {
      title: "Akıllı Sıfır Atık Şehri",
      subtitle: "Öğrenciler fareyle sahnedeki atıkları doğru konteynerlere taşır.",
      steps: [
        { title: "Kutuları Çiz/Seç", desc: "Sahneye Mavi (Kâğıt), Sarı (Plastik) ve Yeşil (Cam) 3 farklı kutu kuklası ekleyin." },
        { title: "Atık Kuklaları", desc: "Elma çöpü, gazete ve kola kutusu kuklaları ekleyin." },
        { title: "Sürükleme ve Şart Kodu", desc: "Atık kuklasına 'fare basılı iken fareyi takip et; bırakıldığında doğru kutuya değdiyse puan ver' algoritmasını kurun." }
      ],
      criteria: [
        "En az 2 farklı atık ve 2 farklı geri dönüşüm kutusunun kodlanması",
        "Doğru eşleşmede puan artması, yanlışta uyarı vermesi",
        "Sıfır atık ve çevre bilincini yansıtan temiz bir sahne tasarımı"
      ]
    },
    tips: {
      safetyTitle: "Bilişimle Doğa Dostu Çözümler",
      safetyRules: [
        { bold: "Elektronik Atıklar (E-Atık)", text: "Eski tablet, telefon veya piller normal çöpe asla atılmamalıdır; özel e-atık toplama merkezlerine verilmelidir." }
      ],
      myths: [
        { wrong: "Kodlama sadece bilgisayar oyunları yapmak içindir.", correct: "Hayır! Kodlama; çevre kirliliği, iklim krizi ve trafik gibi gerçek dünya sorunlarını çözmek için en güçlü araçtır." }
      ]
    },
    quiz: {
      question: "Sıfır Atık projemizde plastik bir şişenin sadece sarı kutuya atıldığında puan kazandırmasını sağlamak için hangi blok kontrolü kullanılır?",
      options: [
        { text: "A) Eğer [Sarı Kutu'ya değdi mi?] ise", isCorrect: true },
        { text: "B) 10 defa tekrarla", isCorrect: false },
        { text: "C) fareye doğru dön", isCorrect: false },
        { text: "D) ses perdesini 10 artır", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Nesnelerin birbirine dokunup dokunmadığını test etmek için <strong>[Kuklaya/Kutuya değdi mi?]</strong> algılama bloğu kullanılır."
    },
    summaryRules: [
      { bold: "Kodlama + Doğa Sevgisi", text: "Problemleri algoritmalarla çözüyoruz." },
      { bold: "Ayrıştırma Şartları", text: "Doğru kutu = Puan, Yanlış kutu = Eğitici uyarı." },
      { bold: "Geleceğe Temiz Dünya", text: "Bilişimle Sıfır Atık bilinci kazandık." }
    ],
    homework: "Projenize bir de 'Organik Atık (Yiyecek Artıkları)' kutusu ekleyin.",
    nextWeekPreview: "Proje Geliştirme, Hata Ayıklama (Debugging) & Kullanıcı Dostu Tasarım!"
  },

  // 38. HAFTA
  {
    week: 38,
    date: "31 Mayıs - 06 Haziran",
    hours: "2 Ders Saati",
    unit: "TEMA 5: Algoritmik Düşünme ve Blok Tabanlı Kodlama",
    unitBadge: "Tema 5: Hafta 19",
    unitTheme: "tema-5",
    title: "Proje Geliştirme, Hata Ayıklama (Debugging) ve Tasarım",
    subtitle: "Yazılımdaki Hataları (Bug) Bulma, Kod İyileştirme ve Kullanıcı Deneyimi (UI/UX)",
    outcomeCode: "BTY.5.6.4",
    targetSkill: "Hata Ayıklama (Debugging) & Tasarım Estetiği",
    curiosityQuestion: "Yazılımcılar bilgisayardaki hatalara neden 'Böcek' (Bug), hatayı temizlemeye de 'Böcek Ayıklama' (Debugging) derler?",
    roadmap: [
      { title: "Bug ve Debugging Tarihi", desc: "1947 yılında ilk bilgisayarlardan birine giren gerçek bir güve böceğinin hikayesi." },
      { title: "Scratch'te En Sık Yapılan 3 Hata", desc: "Sonsuz döngüyü unutmak, değişkeni sıfırlamamak ve gizlenen kuklayı göstermemek." },
      { title: "Adım Adım Hata Tespiti", desc: "Kodu parça parça çalıştırarak hatanın kaynağını bulma tekniği." },
      { title: "Kullanıcı Dostu Arayüz (UI/UX)", desc: "Başla butonu, anlaşılır buton renkleri ve yardım ekranı tasarımı." }
    ],
    section1: {
      title: "Hata Ayıklama (Debugging) Sanatı",
      subtitle: "En iyi yazılımcılar hiç hata yapmayanlar değil, hatalarını sabırla çözebilenlerdir.",
      layout: "split-visual",
      card: {
        title: "Scratch'in 3 Gizli Hatası (Bug)",
        icon: "🐞",
        desc: "Öğrencilerin projelerinde en çok karşılaştığı durumlar:",
        items: [
          { bold: "1. 'Kuklam Kayboldu!'", text: "Önceki oyunda 'Gizlen' dediniz ama yeşil bayrağa basıldığında 'Göster' koymayı unuttunuz!" },
          { bold: "2. 'Puanım Sıfırlanmıyor!'", text: "Yeşil bayrak altına 'Skor'u 0 yap' eklemediğiniz için önceki skor devam ediyor." },
          { bold: "3. 'Şart Çalışmıyor!'", text: "'Eğer' bloğunu 'Sürekli Tekrarla' içine koymadığınız için sadece bayrağa basılan ilk salisede kontrol edip kapandı." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#ef4444" stroke-width="1.5"/>
        <text x="200" y="45" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">Hata Ayıklama (Debugging) Döngüsü</text>
        
        <!-- Adım 1: Hata -->
        <g transform="translate(40, 80)">
          <circle cx="45" cy="45" r="35" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
          <text x="45" y="40" fill="#ef4444" font-size="20" text-anchor="middle">🐞</text>
          <text x="45" y="58" fill="#fecaca" font-size="9" font-weight="bold" text-anchor="middle">1. Hatayı Fark Et</text>
        </g>
        
        <path d="M125 125 H155" stroke="#ef4444" stroke-width="2" marker-end="url(#arr)"/>
        
        <!-- Adım 2: Kodu İncele -->
        <g transform="translate(160, 80)">
          <circle cx="45" cy="45" r="35" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <text x="45" y="40" fill="#f59e0b" font-size="20" text-anchor="middle">🔍</text>
          <text x="45" y="58" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">2. Kodu Oku</text>
        </g>
        
        <path d="M245 125 H275" stroke="#10b981" stroke-width="2"/>
        
        <!-- Adım 3: Düzelt & Test Et -->
        <g transform="translate(280, 80)">
          <circle cx="45" cy="45" r="35" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
          <text x="45" y="40" fill="#10b981" font-size="20" text-anchor="middle">✨</text>
          <text x="45" y="58" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">3. Çöz & Test Et</text>
        </g>
        
        <text x="200" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">"Hata yapmak öğrenmenin en doğal ve heyecan verici parçasıdır!"</text>
      </svg>`
    },
    section2: {
      title: "Kullanıcı Deneyimi (UI/UX) İpuçları",
      subtitle: "Oyununuzu başkaları oynarken keyif alması için küçük ama sihirli dokunuşlar.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Arayüz (UI)",
          title: "Net ve Canlı Butonlar",
          desc: "Oyuncunun neye basacağını düşünmesine gerek kalmamalıdır.",
          bullets: [
            "Büyük, okunaklı 'OYNA' ve 'YENİDEN BAŞLA' butonları.",
            "Yazı rengi ile arka plan arasında yüksek kontrast.",
            "Can ve Skor panellerinin ekranın üst köşelerine nizami yerleşimi."
          ]
        },
        {
          badge: "Deneyim (UX)",
          title: "Nasıl Oynanır? Ekranı",
          desc: "Oyun başlamadan önce kontrolleri 1 cümleyle oyuncuya açıklayın.",
          bullets: [
            "'Yön tuşlarıyla hareket et, boşluk tuşuyla zıpla!'",
            "Başarısız olunduğunda oyuncuyu aşağılamayan teşvik edici mesajlar.",
            "Ses efektlerinin kulağı tırmalamayacak seviyede ayarlanması."
          ]
        }
      ]
    },
    workshop: {
      title: "Hatalı Kodu Kurtar (Code Doctor)",
      subtitle: "Öğretmenin bilerek hata koyduğu bir Scratch projesini öğrenciler tamir eder.",
      steps: [
        { title: "Hatayı Gözlemle", desc: "Verilen projeyi çalıştırın: Kedi neden duvardan geçiyor ve elmayı yiyince puan neden 1 yerine 50 artıyor?" },
        { title: "Kod Röntgeni", desc: "Karakterlerin bloklarını tek tek ayırıp 'Eğer' ve 'Değiştir' bloklarındaki mantıksal hataları bulun." },
        { title: "Arayüz Makyajı", desc: "Projeye bir 'Başla' butonu ve 'Nasıl Oynanır' yönergesi ekleyip kusursuz hale getirin." }
      ],
      criteria: [
        "Projedeki en az 2 mantıksal hatanın tespit edilip onarılması",
        "Kuklanın başlangıç konumu ve görünürlük ayarlarının sıfırlanması",
        "Oyuncu dostu bir başlangıç menüsü tasarlanması"
      ]
    },
    tips: {
      safetyTitle: "Yazılımcı Sabrı",
      safetyRules: [
        { bold: "Kod Çalışmadığında Pes Etmeyin", text: "Hata mesajı veya yanlış çalışan bir blok size nerede düşünme hatası yaptığınızı fısıldayan bir öğretmen gibidir." }
      ],
      myths: [
        { wrong: "Profesyonel mühendisler kod yazarken hiç hata yapmazlar.", correct: "Google veya NASA'daki yazılımcılar vakitlerinin %60'ından fazlasını hata ayıklama (debugging) yaparak geçirirler." }
      ]
    },
    quiz: {
      question: "Scratch projesinde bir kuklanın yeşil bayrağa basıldığında sahnede görünmemesinin (kaybolmasının) en olası sebebi nedir?",
      options: [
        { text: "A) Bilgisayarın şarjının bitmesi", isCorrect: false },
        { text: "B) Önceki oyunda 'Gizlen' denilip, bayrak altına 'Göster' bloğunun unutulması", isCorrect: true },
        { text: "C) Kedinin tatile gitmesi", isCorrect: false },
        { text: "D) Sahne renginin beyaz olması", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Eğer bir kukla önceki oyunda gizlendiyse, yeni oyun başlarken mutlaka <strong>Göster</strong> bloğu ile ekrana getirilmelidir."
    },
    summaryRules: [
      { bold: "Bug = Yazılım Hatası", text: "Hatalar projenin doğal bir parçasıdır." },
      { bold: "Debugging = Hata Ayıklama", text: "Adım adım inceleyerek hatayı çözüyoruz." },
      { bold: "Kullanıcı Dostu Tasarım", text: "Oyunlarımız herkesin kolayca anlayacağı kadar sade olmalı." }
    ],
    homework: "Kendi yaptığınız eski bir oyununuzu açıp 'Nasıl Oynanır?' bilgi ekranı ekleyin.",
    nextWeekPreview: "2. Dönem 2. Sınav Tekrarı ve Büyük Yıl Sonu Bilişim Özeti!"
  },

  // 39. HAFTA
  {
    week: 39,
    date: "07 - 13 Haziran",
    hours: "2 Ders Saati",
    unit: "TEMA 1 - TEMA 5: Yıl Sonu Genel Tekrarı",
    unitBadge: "Sınav Haftası",
    unitTheme: "tema-6",
    title: "2. Dönem 2. Yazılı Sınavı & Büyük Yıl Sonu Tekrarı",
    subtitle: "Algoritmalar, Akış Şemaları, Şartlar, Döngüler ve Scratch Mekanikleri Özeti",
    outcomeCode: "BTY.5.6.4",
    targetSkill: "Kazanım Pekiştirme & Sınav Başarısı",
    curiosityQuestion: "5. sınıfın başından bugüne kadar bilişim teknolojilerinde neleri başardık ve geleceğe hangi dijital becerilerle adım atıyoruz?",
    roadmap: [
      { title: "Algoritma & Akış Şeması", desc: "Elips, dikdörtgen, eşkenar dörtgen şekillerinin anlamları." },
      { title: "Şart ve Karar Yapıları", desc: "Eğer - Değilse bloklarının günlük hayattaki ve koddaki karşılığı." },
      { title: "Döngüler ve Değişkenler", desc: "Sürekli Tekrarla, 10 Defa Tekrarla ve Skor/Süre kutuları." },
      { title: "2. Yazılı Sınav Uygulaması", desc: "Dönem sonu değerlendirmesi ve başarıyla sınavı tamamlama." }
    ],
    section1: {
      title: "2. Dönemin Kodlama Haritası",
      subtitle: "Şubat ayından Haziran ayına kadar adım adım inşa ettiğimiz kodlama temelleri.",
      layout: "split-visual",
      card: {
        title: "Sınavda Çıkacak 4 Kritik Konu",
        icon: "📝",
        desc: "Sınav kâğıdında en çok puan getirecek temel başlıklar:",
        items: [
          { bold: "Akış Şeması Şekilleri", text: "Elips (Başla/Bitir), Dikdörtgen (İşlem), Baklava Dilimi (Karar/Şart)." },
          { bold: "Hareket & Koordinat", text: "X ekseni sağ(+)/sol(-), Y ekseni yukarı(+)/aşağı(-)." },
          { bold: "Şart (Eğer) Blokları", text: "Karakterlerin çarpışma, algılama ve puan kazanma mekanizması." },
          { bold: "Değişkenler", text: "Skor sıfırlama ([Skor] 0 yap) ve puan artırma ([Skor] 1 değiştir)." }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="1.5"/>
        <text x="200" y="45" fill="#a5b4fc" font-size="12" font-weight="bold" text-anchor="middle">2. Dönem Kodlama Sınav Özeti</text>
        
        <!-- 4 Sütun Bilgi Kartı -->
        <g transform="translate(35, 70)">
          <!-- Kart 1: Şekiller -->
          <rect x="0" y="0" width="75" height="110" rx="8" fill="#1e293b" stroke="#38bdf8"/>
          <text x="37" y="25" fill="#38bdf8" font-size="14" text-anchor="middle">🔷</text>
          <text x="37" y="45" fill="#bae6fd" font-size="9" font-weight="bold" text-anchor="middle">Akış Şeması</text>
          <text x="37" y="65" fill="#94a3b8" font-size="8" text-anchor="middle">Elips: Başla</text>
          <text x="37" y="80" fill="#94a3b8" font-size="8" text-anchor="middle">Kutu: Eylem</text>
          <text x="37" y="95" fill="#94a3b8" font-size="8" text-anchor="middle">Eşkenar: Eğer</text>
        </g>
        
        <g transform="translate(120, 70)">
          <!-- Kart 2: Koordinat -->
          <rect x="0" y="0" width="75" height="110" rx="8" fill="#1e293b" stroke="#10b981"/>
          <text x="37" y="25" fill="#10b981" font-size="14" text-anchor="middle">🎯</text>
          <text x="37" y="45" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">X / Y Ekseni</text>
          <text x="37" y="65" fill="#94a3b8" font-size="8" text-anchor="middle">+X: Sağa git</text>
          <text x="37" y="80" fill="#94a3b8" font-size="8" text-anchor="middle">-X: Sola git</text>
          <text x="37" y="95" fill="#94a3b8" font-size="8" text-anchor="middle">+Y: Yukarı çık</text>
        </g>
        
        <g transform="translate(205, 70)">
          <!-- Kart 3: Şartlar -->
          <rect x="0" y="0" width="75" height="110" rx="8" fill="#1e293b" stroke="#f59e0b"/>
          <text x="37" y="25" fill="#f59e0b" font-size="14" text-anchor="middle">⚡</text>
          <text x="37" y="45" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">Şart & Döngü</text>
          <text x="37" y="65" fill="#94a3b8" font-size="8" text-anchor="middle">Eğer ise...</text>
          <text x="37" y="80" fill="#94a3b8" font-size="8" text-anchor="middle">Değilse...</text>
          <text x="37" y="95" fill="#94a3b8" font-size="8" text-anchor="middle">Sürekli tekrarla</text>
        </g>
        
        <g transform="translate(290, 70)">
          <!-- Kart 4: Değişken -->
          <rect x="0" y="0" width="75" height="110" rx="8" fill="#1e293b" stroke="#ec4899"/>
          <text x="37" y="25" fill="#ec4899" font-size="14" text-anchor="middle">📦</text>
          <text x="37" y="45" fill="#fbcfe8" font-size="9" font-weight="bold" text-anchor="middle">Değişkenler</text>
          <text x="37" y="65" fill="#94a3b8" font-size="8" text-anchor="middle">Skor: 0 yap</text>
          <text x="37" y="80" fill="#94a3b8" font-size="8" text-anchor="middle">Can: -1 değiştir</text>
          <text x="37" y="95" fill="#94a3b8" font-size="8" text-anchor="middle">Süre: Geri say</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Sınav Taktikleri ve Sık Karışan Noktalar",
      subtitle: "Soruları çözerken dikkat edilecek altın kurallar.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "Soru İpucu 1",
          title: "'Değiştir' ile 'Yap' Farkı",
          desc: "En çok puan kaybedilen soru tipi!",
          bullets: [
            "'Skoru 5 yap' derseniz skor TAM 5 olur.",
            "'Skoru 5 kadar değiştir' derseniz var olan skorun üstüne 5 eklenir (10 ise 15 olur).",
            "Soru kökündeki 'artır/ekle' veya 'sıfırla' kelimelerine dikkat edin."
          ]
        },
        {
          badge: "Soru İpucu 2",
          title: "Sürekli Tekrarla İhtiyacı",
          desc: "Eğer şart kontrolü oyun boyunca devam edecekse:",
          bullets: [
            "'Eğer kuklaya değdi mi?' bloğu tek başına çalıştırılırsa hemen biter.",
            "Oyun boyunca aralıksız yakalamak için mutlaka 'Sürekli Tekrarla' içine yerleştirilmelidir.",
            "Bayrak tıklandığında kodların akışını gözünüzde canlandırın."
          ]
        }
      ]
    },
    workshop: {
      title: "Sınav Öncesi Canlı Quiz Yarışması",
      subtitle: "Akıllı tahta üzerinde tüm sınıfın katıldığı 10 soruluk interaktif mini deneme sınavı.",
      steps: [
        { title: "Takımları Kur", desc: "Sınıfı 3 takıma ayırın (Bitler, Baytlar ve Pikseller)." },
        { title: "Akıllı Tahtada Çöz", desc: "Akış şeması ve Scratch kod blokları sorularını tahtada tartışarak çözün." },
        { title: "Puan Analizi", desc: "En çok takılınan konuları öğretmen rehberliğinde tahtada tekrar kodlayın." }
      ],
      criteria: [
        "Temel akış şeması şekillerinin hatasız bilinmesi",
        "Scratch bloklarının görevlerinin ve renk kategorilerinin kavranması",
        "Sınav kaygısını yenip kendine güvenle sınava hazırlanma"
      ]
    },
    tips: {
      safetyTitle: "Sınav Başarı Taktikleri",
      safetyRules: [
        { bold: "Soruları Dikkatle Okuyun", text: "'Hangisi yanlıştır?', 'Hangisi yapılamaz?' gibi olumsuz köklü soruların altını çizin." }
      ],
      myths: [
        { wrong: "Kodlama sınavı sadece ezberle geçilir.", correct: "Hayır! Kodlama mantık ve sebep-sonuç ilişkisidir; bir bloğun ne yaptığını anlarsanız her soruyu çözersiniz." }
      ]
    },
    quiz: {
      question: "Bir Scratch projesinde 'Puan' adındaki değişkenin değeri 8 iken, ekranda sırasıyla [Puan'ı 2 kadar değiştir] ve ardından [Puan'ı 0 yap] blokları çalışırsa son durum ne olur?",
      options: [
        { text: "A) 10", isCorrect: false },
        { text: "B) 8", isCorrect: false },
        { text: "C) 0", isCorrect: true },
        { text: "D) 2", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> [Puan'ı 2 değiştir] ile puan 10 olur; ancak hemen ardından [Puan'ı 0 yap] çalıştığı için son değer <strong>0</strong> olur!"
    },
    summaryRules: [
      { bold: "Tüm Yılın Emeği", text: "Donanımdan kodlamaya harika bir yıl geçirdik." },
      { bold: "Mantık > Ezber", text: "Kodu anlayarak çözen asla yanılmaz." },
      { bold: "Sınavda Başarılar", text: "Kendinize güvenin, siz birer kodlamacısınız!" }
    ],
    homework: "Yıl boyu öğrendiğiniz tüm Scratch bloklarından en sevdiğiniz 5 tanesini defterinize renkleriyle çizin.",
    nextWeekPreview: "Dijital Portfolyo Hazırlama & Projeleri Etkili Sunma (Pitching)!"
  },

  // 40. HAFTA
  {
    week: 40,
    date: "14 - 20 Haziran",
    hours: "2 Ders Saati",
    unit: "TEMA 6: Bilişimle Üretim, Paylaşım ve Dijital Portfolyo",
    unitBadge: "Tema 6: Hafta 1",
    unitTheme: "tema-6",
    title: "Dijital Portfolyo & Bilişim Projelerini Sunma (Pitching)",
    subtitle: "Yıl Boyunca Yapılan Ürünleri Kataloglama, Ekran Kaydı Alma ve Topluluk Önünde Sunum",
    outcomeCode: "BTY.5.6.4",
    targetSkill: "Portfolyo Yönetimi & Etkili Sunum / İletişim",
    curiosityQuestion: "Harika bir oyun veya yazılım yapsanız ama bunu kimseye anlatamazsanız insanlar projenizi nasıl keşfeder?",
    roadmap: [
      { title: "Dijital Portfolyo Nedir?", desc: "Yıl boyunca ürettiğimiz sunum, metin ve Scratch oyunlarının vitrini." },
      { title: "Proje Ekran Görüntüsü / GIF Alma", desc: "Oyunumuzun en heyecanlı anını yakalayıp kapak resmi yapma." },
      { title: "2 Dakikalık Asansör Konuşması (Pitch)", desc: "Projenin amacını, hedef kitlesini ve özelliklerini net anlatma." },
      { title: "Akran Değerlendirmesi", desc: "Arkadaşların projelerini yapıcı ve saygılı dille inceleme." }
    ],
    section1: {
      title: "Dijital Portfolyo: Senin Başarı Vitrinin",
      subtitle: "Bir bilişimcinin en büyük gücü diplomaları değil, yapıp gösterdiği projeleridir.",
      layout: "split-visual",
      card: {
        title: "5. Sınıf Portfolyomuzda Neler Var?",
        icon: "📁",
        desc: "Bu yıl ürettiğimiz gurur verici dijital eserler:",
        items: [
          { bold: "1. Dönem Ürünleri", text: "Kelime işlemcide hazırlanan resimli afişler, etkili sunum slaytları ve güvenli şifre kılavuzları." },
          { bold: "2. Dönem Ürünleri", text: "Labirent oyunu, 23 Nisan projesi, Meyve toplama, Sesli Asistan ve Sıfır Atık simülasyonu." },
          { bold: "Gelişim Dosyası", text: "İlk haftadaki acemilikten yıl sonundaki usta kodlamacıya dönüşümün kanıtı!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="200" y="45" fill="#c4b5fd" font-size="12" font-weight="bold" text-anchor="middle">Dijital Portfolyo & Proje Sunumu (Pitching)</text>
        
        <!-- Portfolyo Klasörü -->
        <g transform="translate(45, 75)">
          <path d="M0 15 C0 7 7 0 15 0 H45 L60 15 H110 C118 15 125 22 125 30 V90 C125 98 118 105 110 105 H15 C7 105 0 98 0 90 Z" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
          <rect x="15" y="30" width="95" height="60" rx="4" fill="#0f172a"/>
          <text x="62" y="52" fill="#38bdf8" font-size="9" text-anchor="middle">📄 Afiş_Tasarim.docx</text>
          <text x="62" y="68" fill="#f59e0b" font-size="9" text-anchor="middle">📊 Bilisim_Sunum.pptx</text>
          <text x="62" y="84" fill="#10b981" font-size="9" text-anchor="middle">🐱 Oyunum.sb3</text>
        </g>
        
        <!-- Ok -->
        <path d="M185 130 H225" stroke="#34d399" stroke-width="2.5" marker-end="url(#arr)"/>
        <text x="205" y="120" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">Sunum</text>
        
        <!-- Sunum Yapan Öğrenci Kürsüsü -->
        <g transform="translate(245, 75)">
          <rect x="0" y="35" width="105" height="70" rx="6" fill="#1e293b" stroke="#34d399"/>
          <text x="52" y="25" fill="#a7f3d0" font-size="22" text-anchor="middle">🎤 🧑‍💻</text>
          <text x="52" y="58" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">"Oyunumun Amacı:"</text>
          <text x="52" y="75" fill="#94a3b8" font-size="8" text-anchor="middle">Çevre kirliliğini</text>
          <text x="52" y="88" fill="#fde68a" font-size="8" text-anchor="middle">sıfıra indirmek!</text>
        </g>
      </svg>`
    },
    section2: {
      title: "Etkili Proje Sunumu (Pitching) Nasıl Yapılır?",
      subtitle: "2 dakikada projenizi herkesin hayran kalacağı şekilde anlatmanın sırrı.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "3 Adımlı Konuşma",
          title: "Problem - Çözüm - Demo",
          desc: "Sunum yaparken takip edilecek basit ve etkileyici plan:",
          bullets: [
            "1. Problem: 'İnsanlar sokaktaki çöpleri ayrıştırmıyor.'",
            "2. Çözüm: 'Ben de eğlenceli bir Sıfır Atık oyunu kodladım.'",
            "3. Canlı Gösterim: 'Şimdi gelin birlikte 1 tur oynayalım!'"
          ]
        },
        {
          badge: "Nezaket & Geri Bildirim",
          title: "Akran Değerlendirme Kültürü",
          desc: "Arkadaşınızın oyununu denerken nasıl yorum yapmalısınız?",
          bullets: [
            "Önce güzel bir yönünü övün: 'Renkler ve müzik çok neşeli olmuş.'",
            "Sonra yapıcı öneri sunun: 'Belki karakter biraz daha hızlı koşabilir.'",
            "Asla kırıcı olmayın; her proje büyük bir emeğin ürünüdür."
          ]
        }
      ]
    },
    workshop: {
      title: "Bilişim Girişimcileri Sahnesi",
      subtitle: "Öğrenciler kendi geliştirdikleri en iyi projeyi akıllı tahtada 2 dakika boyunca tanıtır.",
      steps: [
        { title: "En İyi Projeni Seç", desc: "Dönem boyunca yaptığınız Scratch projelerinden en çok gurur duyduğunuzu seçin." },
        { title: "Kapak ve Yönerge", desc: "Projenin içine adınızı, soyadınızı ve oyun kurallarını ekleyin." },
        { title: "Kürsüye Çık ve Sun", desc: "Akıllı tahtayı açın, projenizi çalıştırın ve arkadaşlarınıza oyununuzun hikayesini anlatın." }
      ],
      criteria: [
        "Projenin amacının ve kodlama mantığının anlaşılır anlatılması",
        "Topluluk önünde ses tonu ve beden dilinin özgüvenli kullanımı",
        "Arkadaşlardan gelen sorulara nazik ve mantıklı cevaplar verme"
      ]
    },
    tips: {
      safetyTitle: "Dijital Ayak İzi ve Paylaşım",
      safetyRules: [
        { bold: "Kişisel Bilgilerinizi Gizleyin", text: "Portfolyonuzu internette paylaşırken ev adresi, telefon veya T.C. kimlik numarası gibi hassas bilgileri asla dosyalara yazmayın." }
      ],
      myths: [
        { wrong: "Sadece kusursuz ve devasa projeler sunulabilir.", correct: "Hayır! Küçük ama iyi çalışan, özgün bir fikir içeren her proje değerlidir ve gururla sunulabilir." }
      ]
    },
    quiz: {
      question: "Geliştirdiğimiz bir bilişim projesini topluluk önünde veya arkadaşlarımıza 2 dakikada etkileyici şekilde anlatma tekniğine ne ad verilir?",
      options: [
        { text: "A) Pitching (Asansör Konuşması / Kısa Sunum)", isCorrect: true },
        { text: "B) Format Atma", isCorrect: false },
        { text: "C) ZIP Sıkıştırma", isCorrect: false },
        { text: "D) Hata Ayıklama (Debugging)", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Bir projenin özetini, amacını ve çözümünü kısa sürede etkili aktarmaya <strong>Pitching</strong> (kısa sunum) denir."
    },
    summaryRules: [
      { bold: "Portfolyo = Vitrin", text: "Ürettiğimiz tüm dijital eserleri derledik." },
      { bold: "İletişim Gücü", text: "Kod yazmak kadar onu anlatabilmek de önemlidir." },
      { bold: "Geleceğin Bilişimcisi", text: "Projelerimizle gurur duyuyoruz." }
    ],
    homework: "Tüm yıl yaptığınız bilişim ödevlerini tek bir '5_Sinif_Bilisim_Portfolyom' klasöründe toplayıp düzenleyin.",
    nextWeekPreview: "Yıl Sonu Bilişim Şenliği & Kodlama Festivali: Başarı Belgeleri ve Turnuva!"
  },

  // 41. HAFTA
  {
    week: 41,
    date: "21 - 25 Haziran",
    hours: "2 Ders Saati",
    unit: "TEMA 6: Bilişimle Üretim, Paylaşım ve Dijital Portfolyo",
    unitBadge: "Festival Haftası",
    unitTheme: "tema-6",
    title: "Yıl Sonu Bilişim & Kodlama Şenliği",
    subtitle: "Turnuvalar, Oyun Deneme İstasyonları, Başarı Belgeleri ve 6. Sınıfa Uğurlama",
    outcomeCode: "BTY.5.6.4",
    targetSkill: "İş Birlikli Öğrenme & Bilişim Özgüveni",
    curiosityQuestion: "Bu yıl sadece bilgisayar kullanmayı değil, bilgisayara ne yapması gerektiğini emretmeyi öğrendiniz; peki sırada ne var?",
    roadmap: [
      { title: "Bilişim Şenliği Açılışı", desc: "Laboratuvarın festival alanına dönüştürülmesi ve oyun istasyonları." },
      { title: "Sınıf İçi Kodlama Turnuvası", desc: "Öğrencilerin birbirlerinin oyunlarını oynayarak yüksek skor rekoru kırması." },
      { title: "Geleceğin Bilişimcisi Belgeleri", desc: "Yıl boyu gayret gösteren tüm öğrencilere başarı sertifikası." },
      { title: "6. Sınıfa Merhaba", desc: "Gelecek yıl bizi bekleyen robotik kodlama ve yapay zekâ dünyasına ilk bakış." }
    ],
    section1: {
      title: "Bir Yılın Muhteşem Bilişim Yolculuğu",
      subtitle: "İlk gün farenin sol tuşundan, bugün kendi oyunlarını ve sesli asistanlarını kodlayan genç beyinlere...",
      layout: "split-visual",
      card: {
        title: "5. Sınıfta Kazandığımız Süper Güçler",
        icon: "🏆",
        desc: "Artık sıradan bir tüketici değil, dijital dünyanın üreticisisiniz:",
        items: [
          { bold: "Bilinçli ve Güvenli", text: "Güçlü parolalar, dijital ayak izi, siber tuzaklara karşı kalkan." },
          { bold: "Donanım ve İşletim Sistemi Ustası", text: "RAM, işlemci, Pardus açık kaynak kültürü ve dosya yönetimi." },
          { bold: "Algoritmik Düşünür", text: "Akış şemalarıyla düşünen, şartları ve değişkenleri yönetebilen bir zihin!" }
        ]
      },
      svg: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="200" rx="16" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
        <text x="200" y="45" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">5. Sınıf Bilişim Başarı Tacı</text>
        
        <!-- Büyük Kupa -->
        <g transform="translate(150, 65)">
          <path d="M25 15 H75 V45 C75 60 60 70 50 70 C40 70 25 60 25 45 Z" fill="#f59e0b" stroke="#fde68a" stroke-width="2"/>
          <!-- Kulplar -->
          <path d="M25 25 H10 C5 25 5 45 15 45 H25" fill="none" stroke="#f59e0b" stroke-width="2"/>
          <path d="M75 25 H90 C95 25 95 45 85 45 H75" fill="none" stroke="#f59e0b" stroke-width="2"/>
          <!-- Ayak -->
          <rect x="43" y="70" width="14" height="20" fill="#d97706"/>
          <rect x="30" y="90" width="40" height="15" rx="4" fill="#b45309"/>
          <text x="50" y="101" fill="#fef3c7" font-size="8" font-weight="bold" text-anchor="middle">2026-2027</text>
          <text x="50" y="42" fill="#ffffff" font-size="18" text-anchor="middle">⭐</text>
        </g>
        
        <!-- Kutlama Konfetileri -->
        <circle cx="70" cy="80" r="4" fill="#38bdf8"/>
        <circle cx="100" cy="130" r="3" fill="#ec4899"/>
        <circle cx="320" cy="90" r="5" fill="#10b981"/>
        <circle cx="290" cy="140" r="4" fill="#f59e0b"/>
        <polygon points="75,150 80,160 70,160" fill="#a855f7"/>
        <polygon points="310,165 315,175 305,175" fill="#38bdf8"/>
        
        <text x="200" y="195" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Tebrikler Geleceğin Bilişimcileri!</text>
        <text x="200" y="210" fill="#cbd5e1" font-size="9" text-anchor="middle">Artık teknolojiye yön veren taraftasınız.</text>
      </svg>`
    },
    section2: {
      title: "Bilişim Festivali İstasyonları",
      subtitle: "Son hafta dersinde laboratuvarda uygulayacağımız eğlenceli etkinlikler.",
      layout: "split-blocks",
      blocks: [
        {
          badge: "İstasyon 1",
          title: "Arcade Oyun Salonu",
          desc: "Her bilgisayarda bir öğrencinin geliştirdiği oyun açık durur.",
          bullets: [
            "Öğrenciler 5'er dakika arayla istasyonları gezer.",
            "En yüksek skoru yapan tahtadaki 'Skor Tablosu'na adını yazdırır.",
            "Geliştirici arkadaşına teşekkür eder ve oyunu puanlar."
          ]
        },
        {
          badge: "İstasyon 2",
          title: "Geleceğe Mektup & 6. Sınıf",
          desc: "Gelecek yıl robotik ve yapay zekâda ne üretmek istiyorsun?",
          bullets: [
            "6. sınıfta bizi bekleyen blok tabanlı yapay zekâ modelleri.",
            "Çizgi izleyen robotlar ve sensörlü projeler.",
            "Bilişim Kulübü ve Teknofest hedefleri!"
          ]
        }
      ]
    },
    workshop: {
      title: "Yıl Sonu Başarı Sertifikası Dağıtımı",
      subtitle: "Öğretmen Vahit Keskin rehberliğinde tüm öğrencilere Bilişim Başarı Belgesi takdimi.",
      steps: [
        { title: "Alkışlarla Sahneye", desc: "Her öğrenci sırayla tahtaya gelerek yıl boyu gösterdiği sabır ve başarı için alkışlanır." },
        { title: "Sertifika Takdimi", desc: "'Geleceğin Yazılımcısı ve Dijital Vatandaşı' unvanlı başarı belgeleri verilir." },
        { title: "Toplu Hatıra Fotoğrafı", desc: "Bilişim laboratuvarında bilgisayarlar ve projeler eşliğinde hatıra fotoğrafı çekilir." }
      ],
      criteria: [
        "Yıl boyunca bilişim sınıfı kurallarına ve etiğe uyulması",
        "Tüm atölye ve oyun projelerine aktif katılım sağlanması",
        "Teknolojiyi faydalı ve yaratıcı amaçlarla kullanma kararlılığı"
      ]
    },
    tips: {
      safetyTitle: "Yaz Tatili Bilişim Tavsiyeleri",
      safetyRules: [
        { bold: "3T Kuralını Unutmayın", text: "Tatil boyunca Tablet, Telefon ve Televizyonu günde 1-1.5 saatten fazla kullanmayın; açık havada spor yapın, yüzün ve bol kitap okuyun." }
      ],
      myths: [
        { wrong: "Yaz tatilinde kodlama tamamen unutulur.", correct: "Hayır! Scratch veya kodlama bulmacalarını haftada sadece 1 saat açıp kurcalamak bile zihninizi formda tutar." }
      ]
    },
    quiz: {
      question: "5. Sınıf Bilişim Teknolojileri ve Yazılım dersinin bize kazandırdığı en değerli bakış açısı aşağıdakilerden hangisidir?",
      options: [
        { text: "A) Bilgisayarda sadece saatlerce video izlemek", isCorrect: false },
        { text: "B) Teknolojiyi sadece tüketen değil; algoritmalarla üreten, sorun çözen ve insanlığa fayda sağlayan bireyler olmak", isCorrect: true },
        { text: "C) Şifremizi herkesle paylaşmak", isCorrect: false },
        { text: "D) Bozuk bilgisayarları çöpe atmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Muhteşem Cevap: B!</strong> Bilişim dersinin asıl gayesi; teknolojinin esiri olmak değil, <strong>akılla ve ahlakla üreten lider nesiller</strong> yetiştirmektir!"
    },
    summaryRules: [
      { bold: "5. Sınıf Tamamlandı!", text: "Harika bir dönemi geride bıraktık." },
      { bold: "Kodlamaya Devam", text: "Tatil boyunca üretmeye ara vermeyin." },
      { bold: "6. Sınıfta Görüşmek Üzere!", text: "Daha büyük projeler ve robotik bizi bekliyor." }
    ],
    homework: "Yaz tatilinde canınız sıkıldığında Scratch'te ailenize sürpriz bir bayram tebrik kartı kodlayın.",
    nextWeekPreview: "İyi Tatiller Genç Bilişimciler! 6. Sınıfta Görüşmek Üzere!"
  }
];
