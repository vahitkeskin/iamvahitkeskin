/**
 * 7. Sınıf Teknoloji ve Tasarım - 2. Dönem 2. Bölüm (Hafta 32 - 41)
 * Türkiye Yüzyılı Maarif Modeli
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART2_GRADE7 = [
  // 32. HAFTA
  {
    week: 32,
    date: "19 - 25 Nisan",
    hours: "2 Saat",
    unit: "8. BÜTÜNLEŞİK ÖĞRENME: STEAM",
    unitBadge: "Tema 8: STEAM",
    unitTheme: "tema-8",
    title: "32. Hafta: 23 Nisan & STEAM Disiplinleri Arasındaki İlişki",
    subtitle: "Bilim, Teknoloji, Mühendislik, Sanat ve Matematiğin Güç Birliği ile Geleceğin Tasarımı",
    outcomeCode: "TT.7.8.2",
    targetSkill: "STEAM Disiplinleri Arasındaki İlişkiyi Gözlemleme & Ölçüt Belirleme",
    curiosityQuestion: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı kutlamalarında kullanılan ışıklı ve hareketli bir bayram dönme dolabında fen, matematik ve sanat nasıl el ele verir?",
    roadmap: [
      { title: "STEAM Disiplinlerinin Kesiti", desc: "Fen, teknoloji, mühendislik, sanat ve matematiğin tek bir üründe kesiştiği noktalar." },
      { title: "Gözlem Ölçütleri Belirleme", desc: "Bir ürünü incelerken hangi disiplinin ne kadar ve nasıl katkı sunduğunu ölçme." },
      { title: "23 Nisan Temalı STEM Oyuncağı", desc: "Çocukların oynarken öğreneceği mekanik ve estetik bir kutlama aracının analizi." },
      { title: "Veri Toplama ve Kayıt", desc: "Disiplinler arası verileri sınıflandırma ve tablo/şemalarla dokümante etme." }
    ],
    section1: {
      title: "STEAM Disiplinleri Birbirini Nasıl Besler?",
      subtitle: "Hiçbir bilim dalı tek başına bir mucit yaratamaz; gerçek inovasyon disiplinlerin kesişiminde doğar.",
      layout: "split-visual",
      card: {
        title: "Disiplinler Arası Köprüler",
        icon: "🔬🎨",
        desc: "Bir akıllı ürün veya mekanik düzenek üretilirken her disiplinin üstlendiği kritik rol:",
        items: [
          { bold: "Fen (Doğa Yasaları)", text: "Yerçekimi, dişli çark sürtünmesi, ışığın kırılması ve elektrik akımı ilkelerini sağlar." },
          { bold: "Matematik (Hassas Hesap)", text: "Dönme açısı (360°), dişli oranları, simetri ekseni, maliyet hesabı ve ölçekleme sunar." },
          { bold: "Mühendislik & Teknoloji", text: "Motor seçimi, 3B şasi tasarımı, kablolama ve dayanıklı malzeme montajını yürütür." },
          { bold: "Sanat (Tasarım & Ruh)", text: "Ergonomi, renk armonisi, kullanıcı dostu arayüz ve göze hitap eden estetik katar." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="steamPentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.8"/>
            <stop offset="50%" stop-color="#ec4899" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.8"/>
          </linearGradient>
        </defs>
        <!-- Merkez Daire: STEAM İnovasyon -->
        <circle cx="270" cy="150" r="50" fill="url(#steamPentGrad)" stroke="#ffffff" stroke-width="3" filter="drop-shadow(0 0 12px rgba(0,240,255,0.6))"/>
        <text x="270" y="146" font-size="14" font-weight="900" fill="#070b14" text-anchor="middle">STEAM</text>
        <text x="270" y="162" font-size="11" font-weight="700" fill="#070b14" text-anchor="middle">İNOVASYON</text>

        <!-- 5 Disiplin Çemberi -->
        <!-- S: Science -->
        <circle cx="270" cy="45" r="34" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
        <text x="270" y="42" font-size="14" font-weight="bold" fill="#00f0ff" text-anchor="middle">FEN (S)</text>
        <text x="270" y="56" font-size="9" fill="#94a3b8" text-anchor="middle">Kuvvet &amp; Enerji</text>
        <line x1="270" y1="79" x2="270" y2="100" stroke="#00f0ff" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- T: Technology -->
        <circle cx="410" cy="100" r="34" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <text x="410" y="97" font-size="14" font-weight="bold" fill="#3b82f6" text-anchor="middle">TEKNO (T)</text>
        <text x="410" y="111" font-size="9" fill="#94a3b8" text-anchor="middle">Sensör &amp; Kod</text>
        <line x1="380" y1="115" x2="315" y2="135" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- E: Engineering -->
        <circle cx="360" cy="240" r="34" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="360" y="237" font-size="13" font-weight="bold" fill="#10b981" text-anchor="middle">MÜHENDİS (E)</text>
        <text x="360" y="251" font-size="9" fill="#94a3b8" text-anchor="middle">Şasi &amp; Mekanizma</text>
        <line x1="335" y1="215" x2="295" y2="185" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- A: Art -->
        <circle cx="180" cy="240" r="34" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="180" y="237" font-size="14" font-weight="bold" fill="#ec4899" text-anchor="middle">SANAT (A)</text>
        <text x="180" y="251" font-size="9" fill="#94a3b8" text-anchor="middle">Estetik &amp; Form</text>
        <line x1="205" y1="215" x2="245" y2="185" stroke="#ec4899" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- M: Math -->
        <circle cx="130" cy="100" r="34" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="130" y="97" font-size="13" font-weight="bold" fill="#f59e0b" text-anchor="middle">MATEMATİK (M)</text>
        <text x="130" y="111" font-size="9" fill="#94a3b8" text-anchor="middle">Oran &amp; Geometri</text>
        <line x1="160" y1="115" x2="225" y2="135" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
      </svg>`
    },
    section2: {
      title: "23 Nisan Örneği: 'Işıklı Dönen Çocuk Bayramı Sahnesi'",
      subtitle: "Gözlem ölçütleriyle bir üründeki STEAM bileşenlerini ayrıştırma matrisi.",
      cards: [
        {
          badge: "Fen & Fizik",
          title: "Elektrik Devresi ve Ağırlık Merkezi",
          desc: "LED ışıkların paralel bağlanması ve dönme dolabın dengede kalması için taban ağırlık merkezinin yere yakın planlanması."
        },
        {
          badge: "Matematik",
          title: "360 Derecelik Eşit Açı Dağılımı",
          desc: "Dönme dolapta 8 adet gondol varsa, her bir gondol aralığının 360° / 8 = 45° derece olarak kusursuz yerleştirilmesi."
        },
        {
          badge: "Sanat & Tasarım",
          title: "Cumhuriyet ve Çocuk Renkleri",
          desc: "Al ve beyaz Türk bayrağı renkleri, çocuk siluetleri, ışık animasyonlarının görsel ritmi ve bayram coşkusu estetiği."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: STEAM Gözlem ve Eşleştirme Formu",
      desc: "Öğrenciler çalışma gruplarına ayrılarak sınıftaki akıllı tahta veya sınıfa getirilen mekanik bir saat üzerinde 5 disiplinin rolünü listeler.",
      steps: [
        { title: "Ürün Belirleme", desc: "İncelenecek ürün: Mekanik sarkaçlı duvar saati veya güneş enerjili oyuncak araba." },
        { title: "Ölçüt Tablosu Çizimi", desc: "Deftere 5 sütun açılır: Fen, Teknoloji, Mühendislik, Sanat ve Matematik." },
        { title: "Veri Eşleme", desc: "Her sütunun altına ürünün ilgili özelliğini en az 2 madde halinde yazarak kaydetme." }
      ],
      criteria: [
        "Her bir disiplinin üründeki işlevini doğru gerekçelendirebilme",
        "Disiplinlerin birbiriyle nasıl yardımlaştığını açıklayabilme",
        "Gözlem sonuçlarını analitik bir tablo ile raporlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Tasarımcı Analiz Notu",
      safetyRules: [
        { bold: "Bütünsel Bakış", text: "Bir ürünü parçalarken sadece teknik tarafına odaklanmayın; kullanıcıya hissettirdiği duyguyu (Sanat) unutmayın." }
      ],
      myths: [
        { wrong: "Sanat sadece ürünün üzerine resim çizmek veya süs yapıştırmaktır.", correct: "Hayır! Sanat, ürünün formu, ergonomik tutuşu, orantısı ve insanla kurduğu estetik bağın tamamıdır." }
      ]
    },
    quiz: {
      question: "23 Nisan için tasarlanan 6 kanatlı bir rüzgâr gülünde, kanatlar arasındaki 60 derecelik açının hesaplanması ve kanatların al-beyaz renk ahengi sırasıyla hangi iki STEAM disiplinine aittir?",
      options: [
        { text: "A) Matematik ve Sanat", isCorrect: true },
        { text: "B) Fen ve Madencilik", isCorrect: false },
        { text: "C) Hukuk ve Biyoloji", isCorrect: false },
        { text: "D) Sadece Edebiyat", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Açı ve derece hesaplamaları <strong>Matematik</strong> disiplinine, renk uyumu ve görsel ahenk ise <strong>Sanat</strong> disiplinine aittir."
    },
    summaryRules: [
      { bold: "5 Disiplin = 1 Bütün", text: "Fen, teknoloji, mühendislik, sanat ve matematik birlikte çalışır." },
      { bold: "Ölçütlü Gözlem", text: "Ürünleri rastgele değil, disiplin bileşenlerine göre analiz ederiz." },
      { bold: "Haftaya Proje Türleri", text: "Önümüzdeki hafta Araştırma ve Tasarım projelerini karşılaştıracağız!" }
    ],
    homework: "Evinizdeki bir mikrodalga fırını veya çamaşır makinesini 5 STEAM disiplini açısından inceleyip defterinize 1'er cümleyle özetleyin.",
    nextWeekPreview: "Proje Odaklı Düşünme & Proje Türlerini Karşılaştırma!"
  },

  // 33. HAFTA
  {
    week: 33,
    date: "26 Nisan - 02 Mayıs",
    hours: "2 Saat",
    unit: "8. BÜTÜNLEŞİK ÖĞRENME: STEAM",
    unitBadge: "Tema 8: STEAM",
    unitTheme: "tema-8",
    title: "33. Hafta: Proje Odaklı Düşünme & Proje Türlerini Karşılaştırma",
    subtitle: "Araştırma, Tasarım/Geliştirme ve Sosyal İnovasyon Projelerinin Anatomisi",
    outcomeCode: "TT.7.8.3",
    targetSkill: "Proje Türlerinin Benzerlik ve Farklılıklarını Karşılaştırabilme",
    curiosityQuestion: "'Sokak hayvanları kışın üşüyor' sorusuna bir bilim insanı ile bir tasarımcı nasıl farklı projelerle yaklaşır?",
    roadmap: [
      { title: "Proje Nedir?", desc: "Belirli bir başlangıç ve bitişi olan, hedefe yönelik özgün çalışma süreci." },
      { title: "3 Ana Proje Türü", desc: "Araştırma Projesi, Tasarım/Geliştirme (Mühendislik) Projesi, Sosyal İnovasyon Projesi." },
      { title: "Karşılaştırma Matrisi", desc: "Hedef, yöntem, çıktı ve değerlendirme ölçütlerindeki benzerlik ve farklar." },
      { title: "Gantt Şeması ve Yol Haritası", desc: "Zamanı, bütçeyi ve görev dağılımını görselleştirerek projeyi yönetme." }
    ],
    section1: {
      title: "Üç Farklı Proje Türü ve Çıktıları",
      subtitle: "Her projenin doğuş noktası bir ihtiyaçtır; ancak izlediği rota ve ürettiği nihai ürün farklıdır.",
      layout: "split-visual",
      card: {
        title: "Proje Türleri Rehberi",
        icon: "📋📊",
        desc: "Okullarda ve TÜBİTAK/TEKNOFEST yarışmalarında karşılaştığımız 3 ana proje:",
        items: [
          { bold: "1. Araştırma Projesi", text: "Bir soruya veya hipoteze yanıt arar. Çıktısı: Rapor, grafik, bilimsel makale ve veridir (Örn: 'Hangi yalıtım malzemesi ısıyı daha çok korur?')." },
          { bold: "2. Tasarım & Geliştirme Projesi", text: "Mevcut bir soruna fiziksel veya dijital bir ürün/prototip üretir (Örn: 'Güneş enerjili kedi evi tasarlama')." },
          { bold: "3. Sosyal İnovasyon Projesi", text: "Toplumsal bir davranış veya farkındalık yaratır (Örn: 'Bayat ekmeklerin israfını önleyen mahalle dayanışma kutusu')." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- 3 Sütun Karşılaştırma Kutusu -->
        <!-- Sütun 1: Araştırma -->
        <rect x="20" y="30" width="155" height="240" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="97" cy="65" r="22" fill="#3b82f6" fill-opacity="0.2"/>
        <text x="97" y="70" font-size="18" text-anchor="middle">🔍</text>
        <text x="97" y="105" font-size="13" font-weight="bold" fill="#3b82f6" text-anchor="middle">ARAŞTIRMA</text>
        <line x1="35" y1="120" x2="160" y2="120" stroke="#334155" stroke-width="1.5"/>
        <text x="35" y="145" font-size="10" font-weight="bold" fill="#cbd5e1">• Soru / Hipotez</text>
        <text x="35" y="170" font-size="10" font-weight="bold" fill="#cbd5e1">• Deney &amp; Anket</text>
        <text x="35" y="195" font-size="10" font-weight="bold" fill="#cbd5e1">• Bilgi Keşfi</text>
        <rect x="35" y="220" width="125" height="32" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>
        <text x="97" y="240" font-size="10" font-weight="bold" fill="#3b82f6" text-anchor="middle">Çıktı: Rapor &amp; Veri</text>

        <!-- Sütun 2: Tasarım / Mühendislik -->
        <rect x="192" y="30" width="155" height="240" rx="12" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
        <circle cx="270" cy="65" r="22" fill="#00f0ff" fill-opacity="0.2"/>
        <text x="270" y="70" font-size="18" text-anchor="middle">⚙️</text>
        <text x="270" y="105" font-size="13" font-weight="bold" fill="#00f0ff" text-anchor="middle">TASARIM / ÜRÜN</text>
        <line x1="207" y1="120" x2="332" y2="120" stroke="#334155" stroke-width="1.5"/>
        <text x="207" y="145" font-size="10" font-weight="bold" fill="#cbd5e1">• Somut Problem</text>
        <text x="207" y="170" font-size="10" font-weight="bold" fill="#cbd5e1">• Çizim &amp; Modelleme</text>
        <text x="207" y="195" font-size="10" font-weight="bold" fill="#cbd5e1">• Hızlı Prototipleme</text>
        <rect x="207" y="220" width="125" height="32" rx="6" fill="#0f172a" stroke="#00f0ff" stroke-width="1"/>
        <text x="270" y="240" font-size="10" font-weight="bold" fill="#00f0ff" text-anchor="middle">Çıktı: Prototip / Maket</text>

        <!-- Sütun 3: Sosyal İnovasyon -->
        <rect x="365" y="30" width="155" height="240" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <circle cx="442" cy="65" r="22" fill="#10b981" fill-opacity="0.2"/>
        <text x="442" y="70" font-size="18" text-anchor="middle">🌱</text>
        <text x="442" y="105" font-size="13" font-weight="bold" fill="#10b981" text-anchor="middle">SOSYAL İNOVASYON</text>
        <line x1="380" y1="120" x2="505" y2="120" stroke="#334155" stroke-width="1.5"/>
        <text x="380" y="145" font-size="10" font-weight="bold" fill="#cbd5e1">• Toplumsal İhtiyaç</text>
        <text x="380" y="170" font-size="10" font-weight="bold" fill="#cbd5e1">• Katılımcı Model</text>
        <text x="380" y="195" font-size="10" font-weight="bold" fill="#cbd5e1">• Davranış Değişimi</text>
        <rect x="380" y="220" width="125" height="32" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
        <text x="442" y="240" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">Çıktı: Toplumsal Fayda</text>
      </svg>`
    },
    section2: {
      title: "Proje Döngüsü Adımları: Ortak Süreç",
      subtitle: "Hangi tür olursa olsun, başarılı her projenin geçtiği 4 ana istasyon.",
      cards: [
        {
          badge: "Aşama 1",
          title: "Tanımlama & Araştırma",
          desc: "Problemi ya da araştırma sorusunu netleştirme, literatür taraması yapma ve mevcut çözümleri inceleme."
        },
        {
          badge: "Aşama 2",
          title: "Planlama (Gantt Şeması)",
          desc: "Kim ne yapacak? Bütçe nedir? Hangi haftada hangi görev teslim edilecek? Zaman yönetimi çizelgesi oluşturma."
        },
        {
          badge: "Aşama 3",
          title: "Uygulama & Prototip",
          desc: "Laboratuvar deneylerini yürütme, atölyede maket üretme veya kod yazarak ürünü hayata geçirme."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: Proje Fikrinden Tür Belirleme",
      desc: "Tahtaya yazılan 3 farklı proje fikrinin türünü belirleyip karşılaştırma kartı hazırlama.",
      steps: [
        { title: "Durum Analizi", desc: "Fikir A: 'Okul kantininde sıra bekleme sürelerinin analizi ve grafik raporu' -> Araştırma." },
        { title: "Tasarım Fikri", desc: "Fikir B: 'Kantin için jet kartlı otomatik sandviç otomatı prototipi' -> Tasarım/Mühendislik." },
        { title: "Sosyal Fikir", desc: "Fikir C: 'Askıda sandviç dayanışma platformu ve bilinçlendirme afişleri' -> Sosyal İnovasyon." }
      ],
      criteria: [
        "Fikirlerin çıktısına bakarak proje türünü hatasız ayırt edebilme",
        "Her proje türünün güçlü yönünü ve kısıtını ifade edebilme",
        "Kendi özgün proje konusunu bir türe yerleştirebilme"
      ]
    },
    tips: {
      safetyTitle: "Proje Lideri İpuçları",
      safetyRules: [
        { bold: "Zaman Kısıtı", text: "Projenizi belirlerken teslim tarihine ve elinizdeki malzemelere göre makul büyüklükte bir kapsam seçin." }
      ],
      myths: [
        { wrong: "Bir proje sadece maket veya çalışan cihaz varsa projedir.", correct: "Yanlış! Bilimsel bir hipotezi verilerle kanıtlayan bir araştırma raporu da saygın bir projedir." }
      ]
    },
    quiz: {
      question: "'Plastik şişelerin bitki saksısına dönüştürülmesini sağlayan damla sulamalı otomatik bir balkon saksısı prototipi üretmek' hangi proje türüne girer?",
      options: [
        { text: "A) Tasarım ve Geliştirme (Mühendislik) Projesi", isCorrect: true },
        { text: "B) Tarihsel Belge İncelemesi", isCorrect: false },
        { text: "C) Sadece Teori Yazımı", isCorrect: false },
        { text: "D) Müzik Besteleme Projesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Somut bir ihtiyaca yönelik çalışan bir ürün/prototip üretme amacı taşıdığı için bu bir <strong>Tasarım ve Geliştirme (Mühendislik)</strong> projesidir."
    },
    summaryRules: [
      { bold: "Araştırma = Bilgi Keşfi", text: "Veri, anket ve deney raporu üretir." },
      { bold: "Tasarım = Somut Çözüm", text: "Maket, cihaz veya yazılım prototipi üretir." },
      { bold: "Sosyal = Toplumsal Değişim", text: "Farkındalık ve dayanışma hareketi üretir." }
    ],
    homework: "Gelecek hafta başlayacağımız STEAM projesi için aklınıza gelen 2 sorunu defterinize yazın.",
    nextWeekPreview: "STEAM Yaklaşımına Göre Tasarım Problemi Belirleme ve Çözüm Arama!"
  },

  // 34. HAFTA
  {
    week: 34,
    date: "03 - 09 Mayıs",
    hours: "2 Saat",
    unit: "8. BÜTÜNLEŞİK ÖĞRENME: STEAM",
    unitBadge: "Tema 8: STEAM",
    unitTheme: "tema-8",
    title: "34. Hafta: STEAM Odaklı Tasarım Problemi Belirleme ve Çözüm Arama",
    subtitle: "Gerçek Hayat Problemleri, Kısıtlar, Ölçütler ve Çözüm Tahminleri",
    outcomeCode: "TT.7.8.4 (a, b, c)",
    targetSkill: "STEAM Yaklaşımına Göre Problemi Yapılandırma & Çözüm Tahmininde Bulunma",
    curiosityQuestion: "'Sınıf kapısının arkasına takılan askılıklar montların ağırlığıyla sürekli kırılıyor.' Bu sorunu bir STEAM mucidi gibi nasıl çözeriz?",
    roadmap: [
      { title: "Tasarım Problemi Nedir?", desc: "Her rahatsızlık bir problem midir? Yapılandırılabilir ve çözülebilir bir problem tanımı." },
      { title: "Empati ve İhtiyaç Analizi", desc: "Kullanıcıyı dinleme, gözlem yapma ve gerçek ihtiyacı netleştirme." },
      { title: "Kısıtlar ve Ölçütler (Tasarım Sınırları)", desc: "Maliyet kısıtı, malzeme dayanımı, güvenlik ve boyut kriterleri." },
      { title: "STEAM Çözüm Tahminleri", desc: "Farklı disiplinlerin imkânlarını kullanarak beyin fırtınası ile fikir üretme." }
    ],
    section1: {
      title: "Bir Problemi 'STEAM Dilinde' Yapılandırmak",
      subtitle: "İyi tanımlanmış bir problem, çözümün yarısıdır. Problemi ölçülebilir parametrelere dökmeliyiz.",
      layout: "split-visual",
      card: {
        title: "Problem Tanımlama Şablonu",
        icon: "🎯📝",
        desc: "Mühendislerin ve tasarımcıların kullandığı standart problem cümlesi yapısı:",
        items: [
          { bold: "[KULLANICI]", text: "Kim için tasarlıyoruz? (Örn: 7. sınıf öğrencileri ve nöbetçi öğretmenler)." },
          { bold: "[İHTİYAÇ / ZORLUK]", text: "Hangi sorunu yaşıyor? (Kışın kalın montlar askıya sığmıyor ve yere düşüyor)." },
          { bold: "[SEBEP / ENGEL]", text: "Neden çözülemiyor? (Mevcut plastik askıların taşıma mukavemeti 2 kg ile sınırlı)." },
          { bold: "[ÖLÇÜT & KISIT]", text: "Çözüm en fazla 50 TL maliyetli olmalı ve kapıya vida ile zarar vermemeli." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Problem Çözüm Köprüsü -->
        <!-- Sol Kıyı: Problem & Kısıtlar -->
        <rect x="25" y="40" width="150" height="220" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <text x="100" y="70" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">MEVCUT DURUM</text>
        <line x1="40" y1="85" x2="160" y2="85" stroke="#334155" stroke-width="1"/>
        <text x="40" y="115" font-size="10" fill="#cbd5e1">⚠️ Montlar düşüyor</text>
        <text x="40" y="140" font-size="10" fill="#cbd5e1">⚠️ Plastik kırılıyor</text>
        <text x="40" y="165" font-size="10" fill="#cbd5e1">⚠️ Dağınıklık oluşuyor</text>
        <rect x="35" y="195" width="130" height="50" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>
        <text x="100" y="215" font-size="9" font-weight="bold" fill="#f87171" text-anchor="middle">KISITLAR:</text>
        <text x="100" y="232" font-size="9" fill="#94a3b8" text-anchor="middle">Sıfır Bütçe / Atık Malzeme</text>

        <!-- Orta: STEAM Analiz Köprüsü -->
        <path d="M 180 150 L 350 150" stroke="#00f0ff" stroke-width="4" stroke-dasharray="6,4"/>
        <polygon points="355,150 340,143 340,157" fill="#00f0ff"/>
        <rect x="215" y="115" width="110" height="70" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
        <text x="270" y="137" font-size="11" font-weight="bold" fill="#00f0ff" text-anchor="middle">STEAM DÖNGÜSÜ</text>
        <text x="270" y="155" font-size="9" fill="#cbd5e1" text-anchor="middle">Fen: Kaldıraç kolu</text>
        <text x="270" y="170" font-size="9" fill="#cbd5e1" text-anchor="middle">Matematik: Açı &amp; Yük</text>

        <!-- Sağ Kıyı: Hedeflenen Çözüm -->
        <rect x="365" y="40" width="150" height="220" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="440" y="70" font-size="14" font-weight="bold" fill="#10b981" text-anchor="middle">HEDEF ÇÖZÜM</text>
        <line x1="380" y1="85" x2="500" y2="85" stroke="#334155" stroke-width="1"/>
        <text x="380" y="115" font-size="10" fill="#cbd5e1">✅ 10 kg taşıma gücü</text>
        <text x="380" y="140" font-size="10" fill="#cbd5e1">✅ Geri dönüşüm malzeme</text>
        <text x="380" y="165" font-size="10" fill="#cbd5e1">✅ Kapıya zarar vermez</text>
        <rect x="375" y="195" width="130" height="50" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
        <text x="440" y="215" font-size="9" font-weight="bold" fill="#34d399" text-anchor="middle">SONUÇ:</text>
        <text x="440" y="232" font-size="9" fill="#94a3b8" text-anchor="middle">Dayanıklı Askı Düzeneği</text>
      </svg>`
    },
    section2: {
      title: "Veriye ve Bilgiye Dayalı Çözüm Tahmini",
      subtitle: "Fikir üretirken 'bana öyle geliyor ki' değil; bilimsel verilere dayanan öngörüler kullanırız.",
      cards: [
        {
          badge: "Fizik Verisi",
          title: "Kuvvet Kolunu Kısaltmak",
          desc: "Askının duvardan öne doğru uzanan kolu ne kadar kısa olursa, bağlantı noktasına binen tork momenti o kadar azalır ve askı kırılmaz."
        },
        {
          badge: "Malzeme Bilimi",
          title: "Oluklu Metal veya Lamine Ahşap",
          desc: "Kırılgan sert plastikler yerine esneyebilen ahşap veya geri dönüştürülmüş metal şeritler dinamik darbelere daha dayanıklıdır."
        },
        {
          badge: "Sanat & Tasarım",
          title: "Modüler ve Renkli Kancalar",
          desc: "Her öğrencinin numarasını taşıyan renk kodlu kancalar mont karışıklığını ve sınıftaki karmaşayı tamamen önler."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: Sınıf İçi 'Tasarım Problemi Fişi' Doldurma",
      desc: "Her öğrenci veya ikili grup kendi okul veya ev ortamından bir problem seçip kısıt ve ölçütlerini belirler.",
      steps: [
        { title: "Sorun Seçimi", desc: "Örnek: Sıraların altındaki çanta düşme sorunu, tahta silgisi tozunun yayılması vb." },
        { title: "Kısıt Belirleme", desc: "Maksimum maliyet, kullanılabilecek araçlar, güvenlik koşulları." },
        { title: "Çözüm Tahmini", desc: "En az 2 farklı STEAM çözüm önerisini taslak eskizle deftere çizme." }
      ],
      criteria: [
        "Problemi kişiselleştirmeden nesnel ve ölçülebilir cümleyle tanımlama",
        "En az 3 adet gerçekçi kısıt/ölçüt belirleyebilme",
        "Tahmin edilen çözümün STEAM temeline dayanması"
      ]
    },
    tips: {
      safetyTitle: "İnovasyon Püf Noktası",
      safetyRules: [
        { bold: "Soruna Aşık Olun", text: "İlk aklınıza gelen tek bir çözüme hemen saplanıp kalmayın; önce sorunu derinlemesine anlayın ve alternatifler üretin." }
      ],
      myths: [
        { wrong: "Tasarım problemi sadece yeni bir robot icat etmektir.", correct: "Hayır! Çöp kutusunun kapağının sessiz kapanmasını sağlayan bir sünger mekanizması bile harika bir tasarım problemidir." }
      ]
    },
    quiz: {
      question: "Bir tasarım problemini tanımlarken belirlenen 'Ürünün maliyeti 40 TL'yi geçmemelidir ve okul duvarına delik açılmamalıdır' maddeleri tasarım sürecinde ne olarak adlandırılır?",
      options: [
        { text: "A) Kısıtlar ve Ölçütler (Tasarım Sınırları)", isCorrect: true },
        { text: "B) Eğlence Kuralları", isCorrect: false },
        { text: "C) Hata Listesi", isCorrect: false },
        { text: "D) Dönem Sonu Notu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Bir tasarımın bütçesini, boyutunu, malzeme türünü ve kullanım koşullarını sınırlandıran kurallara <strong>Kısıtlar ve Ölçütler</strong> denir."
    },
    summaryRules: [
      { bold: "Problem Tanımı Net Olmalı", text: "Kullanıcı + İhtiyaç + Kısıt formülünü uygularız." },
      { bold: "Veriye Dayalı Tahmin", text: "Fizik ve matematik gerçeklerine göre çözüm üretiriz." },
      { bold: "Haftaya Prototip Testi", text: "Engelliler Haftası özelinde çözümümüzü test edeceğiz!" }
    ],
    homework: "Seçtiğiniz problemin çözümüne dair 1 adet hızlı karakalem krokiyi defterinize çizin.",
    nextWeekPreview: "Engelliler Haftası & STEAM Çözümünün Değerlendirilmesi ve Prototipi!"
  },

  // 35. HAFTA
  {
    week: 35,
    date: "10 - 16 Mayıs",
    hours: "2 Saat",
    unit: "8. BÜTÜNLEŞİK ÖĞRENME: STEAM",
    unitBadge: "Tema 8: STEAM",
    unitTheme: "tema-8",
    title: "35. Hafta: Engelliler Haftası & STEAM Çözümünün Prototipi ve Değerlendirilmesi",
    subtitle: "Kapsayıcı Tasarım, Engelsiz Yaşam Teknolojileri ve Hızlı Prototipleme",
    outcomeCode: "TT.7.8.4 (ç, d)",
    targetSkill: "Önermeler Üzerinden Akıl Yürütme, Prototipi Değerlendirme ve Yansıtma",
    curiosityQuestion: "Tekerlekli sandalye kullanan bir birey veya görme engelli bir arkadaşımız için bir okul merdiveni nasıl aşılabilir hale gelir?",
    roadmap: [
      { title: "Engelliler Haftası & Kapsayıcı Tasarım", desc: "Evrensel tasarım ilkeleri: Herkes için erişilebilir, eşit ve bağımsız yaşam ürünleri." },
      { title: "STEAM Odaklı Engelsiz Çözümler", desc: "Sensörlü sesli bastonlar, kabartmalı yönlendirmeler, hafif portatif rampalar." },
      { title: "Hızlı Prototipleme ve Test", desc: "Karton, pipet ve basit mekanizmalarla çözüm önerisinin ölçekli maketini kurma." },
      { title: "Değerlendirme ve Yansıtma (İterasyon)", desc: "Prototip nerede tıkandı? Hangi ölçütleri karşılayamadı? İyileştirme döngüsü." }
    ],
    section1: {
      title: "Kapsayıcı (Evrensel) Tasarım Felsefesi",
      subtitle: "Tasarım sadece 'çoğunluk' için değil, toplumun tüm fertleri için eşit erişilebilirlik sunmalıdır.",
      layout: "split-visual",
      card: {
        title: "Evrensel Tasarım İlkeleri",
        icon: "♿🤝",
        desc: "Engelleri ortadan kaldıran 3 temel tasarım kuralı:",
        items: [
          { bold: "1. Eşit Kullanım İmkânı", text: "Ürün tüm yetenek seviyesindeki bireyler tarafından aynı kolaylıkta kullanılabilmelidir." },
          { bold: "2. Hata Toleransı & Güvenlik", text: "Kullanıcı yanlış bir hareket yapsa bile tehlike oluşturmayacak koruyucu kilitler ve yumuşak kenarlar." },
          { bold: "3. Düşük Fiziksel Çaba", text: "Aşırı kuvvet uygulamaya gerek kalmadan tek parmakla veya sesle kumanda edilebilen mekanizmalar." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Akıllı Engelsiz Baston Prototipi Şeması -->
        <rect x="30" y="30" width="480" height="240" rx="14" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
        <text x="270" y="60" font-size="14" font-weight="bold" fill="#6366f1" text-anchor="middle">STEAM PROJESİ: AKILLI ENGELSİZ BASTON PROTOTİPİ</text>

        <!-- Baston Gövdesi -->
        <line x1="80" y1="210" x2="420" y2="210" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
        <!-- Tutamak -->
        <path d="M 420 210 Q 460 210 460 170" fill="none" stroke="#f59e0b" stroke-width="12" stroke-linecap="round"/>

        <!-- Parça 1: Ultrasonik Sensör (Fen & Tekno) -->
        <circle cx="120" cy="210" r="16" fill="#00f0ff" stroke="#ffffff" stroke-width="2"/>
        <text x="120" y="160" font-size="10" font-weight="bold" fill="#00f0ff" text-anchor="middle">ULTRASONİK SENSÖR</text>
        <text x="120" y="175" font-size="9" fill="#94a3b8" text-anchor="middle">(Engel Algılama: 1.5 m)</text>
        <line x1="120" y1="180" x2="120" y2="194" stroke="#00f0ff" stroke-width="1.5"/>
        <!-- Dalga yayılımı -->
        <path d="M 95 195 A 20 20 0 0 0 95 225" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="3,2"/>
        <path d="M 80 185 A 35 35 0 0 0 80 235" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="3,2"/>

        <!-- Parça 2: Titreşimli Uyarı Motoru (Mühendislik) -->
        <rect x="380" y="180" width="28" height="20" rx="4" fill="#ec4899" stroke="#ffffff" stroke-width="1.5"/>
        <text x="394" y="145" font-size="10" font-weight="bold" fill="#ec4899" text-anchor="middle">TİTREŞİM MOTORU</text>
        <text x="394" y="160" font-size="9" fill="#94a3b8" text-anchor="middle">(Tutamağa Geri Bildirim)</text>
        <line x1="394" y1="165" x2="394" y2="178" stroke="#ec4899" stroke-width="1.5"/>

        <!-- Parça 3: Ergonomik Tutuş & Renk (Sanat) -->
        <text x="460" y="125" font-size="10" font-weight="bold" fill="#f59e0b" text-anchor="middle">ERGONOMİK KAVRAMA</text>
        <text x="460" y="140" font-size="9" fill="#94a3b8" text-anchor="middle">(Elden Kaymayan Doku)</text>
        <line x1="460" y1="145" x2="460" y2="165" stroke="#f59e0b" stroke-width="1.5"/>

        <!-- Parça 4: Açı & Mesafe Hesaplama (Matematik) -->
        <rect x="220" y="225" width="120" height="30" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
        <text x="280" y="244" font-size="9" font-weight="bold" fill="#34d399" text-anchor="middle">Matematik: Zaman × Hız = Yol</text>
      </svg>`
    },
    section2: {
      title: "Prototip Testi ve Yansıtma (İterasyon)",
      subtitle: "Bir prototip ilk denemede mükemmel çalışmaz; gerçek mühendislik hatalardan öğrenmektir.",
      cards: [
        {
          badge: "Test Aşaması",
          title: "Engelleri Algılama Testi",
          desc: "Prototip farklı yükseklikteki engellerin (çukur, basamak, sarkan dal) önüne konularak sensör tepki süresi kronometreyle ölçülür."
        },
        {
          badge: "Kullanıcı Geri Bildirimi",
          title: "Empatiyle Deneyimleme",
          desc: "Gözleri kapatarak baston prototipiyle güvenli bir koridorda yürünür; titreşimin yeterince hissedilip hissedilmediği test edilir."
        },
        {
          badge: "Yansıtma & Revizyon",
          title: "İyileştirme Kararları",
          desc: "Örn: 'Bastonun ucu çok ağır oldu, pili tutamağa taşımalıyız' veya 'Sesli uyarı sokaktaki gürültüde duyulmuyor, titreşimi artırmalıyız'."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: 'Engelsiz Okul Çözümü' Prototip Değerlendirme",
      desc: "Öğrenciler gruplar halinde karton, tahta çubuk ve lastiklerle bir engelsiz tasarım maketi oluşturur ve akranlarına sunar.",
      steps: [
        { title: "Hızlı Prototip İnşası", desc: "Örnek: Tekerlekli sandalye için portatif katlanır rampa maketi veya sesli asansör butonu paneli." },
        { title: "Rubrik ile Değerlendirme", desc: "Akran değerlendirme formunda 3 ölçüt puanlanır: Dayanıklılık, Ergonomi, Amaca Uygunluk." },
        { title: "Tasarım Günlüğüne Kayıt", desc: "Test sırasında karşılaşılan 2 aksaklık ve çözüm planı süreç dosyasına (portfolyoya) yazılır." }
      ],
      criteria: [
        "Engelliler Haftası bilinciyle kapsayıcı bir fayda üretebilme",
        "Prototip üzerindeki eksikleri nesnel eleştiriyle saptayabilme",
        "Geri bildirimlere göre revizyon (düzeltme) önerisi geliştirebilme"
      ]
    },
    tips: {
      safetyTitle: "Tasarım ve Empati Prensibi",
      safetyRules: [
        { bold: "Varsayımlara Güvenmeyin", text: "Engelli bireylerin neye ihtiyaç duyduğunu tahmin etmek yerine, onların gerçek deneyimlerini dinleyin ve araştırın." }
      ],
      myths: [
        { wrong: "Prototipin ilk denemede bozulması veya çalışmaması başarısızlıktır.", correct: "Hayır! Bir prototipin erken aşamada arızalanması, nihai üründe çıkacak büyük bir hatayı baştan önlediği için büyük bir başarıdır." }
      ]
    },
    quiz: {
      question: "Üretilen bir prototipin eksiklerini, zayıf noktalarını test ederek bulma ve tasarımı yeniden geliştirip mükemmelleştirme döngüsüne ne ad verilir?",
      options: [
        { text: "A) İterasyon (Yineleme & Geliştirme Döngüsü)", isCorrect: true },
        { text: "B) Projeyi Terk Etme", isCorrect: false },
        { text: "C) EZBERLEME", isCorrect: false },
        { text: "D) Sadece Boyama", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Tasarım sürecinde bir prototipin test edilip, alınan geri bildirimlerle sürekli iyileştirilmesi döngüsüne <strong>İterasyon</strong> denir."
    },
    summaryRules: [
      { bold: "Kapsayıcı Tasarım", text: "Engelsiz bir dünya için herkesi düşünerek tasarlarız." },
      { bold: "Prototip Öğretir", text: "Hatalar projenin en değerli dersleridir." },
      { bold: "Haftaya Yeni Ünite!", text: "Gelecek hafta heyecan verici 'Yapay Zekâ' dünyasına adım atıyoruz!" }
    ],
    homework: "Çevrenizde engelli bireylerin zorlandığı bir mekânı (kaldırım, otobüs durağı vb.) fotoğraflayın veya krokisini çizip 1 çözüm önerisi yazın.",
    nextWeekPreview: "9. Ünite: Yapay Zekâ ve Akıllı Ürünler - Yapay Zekâ Kavramı ve Algoritmaları!"
  },

  // 36. HAFTA
  {
    week: 36,
    date: "17 - 23 Mayıs",
    hours: "2 Saat",
    unit: "9. YAPAY ZEKÂ VE AKILLI ÜRÜNLER",
    unitBadge: "Tema 9: Yapay Zekâ",
    unitTheme: "tema-9",
    title: "36. Hafta: Yapay Zekâ Kavramı, Algoritmaları ve Etkileri",
    subtitle: "Makineler Nasıl Düşünür? Akıllı Sistemlerin Avantaj ve Dezavantajları",
    outcomeCode: "TT 7.9.1",
    targetSkill: "Yapay Zekâ Kavramını, Algoritmalarını, Avantaj ve Risklerini Sorgulayabilme",
    curiosityQuestion: "Telefonunuz yüzünüzü bir saniyeden kısa sürede nasıl tanıyor? Makineler gerçekten düşünebilir mi yoksa sadece hesap mı yapıyor?",
    roadmap: [
      { title: "Yapay Zekâ (YZ) Nedir?", desc: "Geleneksel bilgisayar yazılımları ile öğrenen sistemler arasındaki dev fark." },
      { title: "Algoritmaların Evrimi", desc: "Kural tabanlı kodlama (If-Else) vs. Veriyle beslenen Makine Öğrenmesi (Machine Learning)." },
      { title: "Günlük Yaşamdaki Akıllı Sistemler", desc: "Navigasyon rotaları, öneri algoritmaları, otonom süpürgeler ve çeviri sistemleri." },
      { title: "Fırsatlar ve Riskler", desc: "Tıpta erken teşhis ve hız avantajına karşılık iş gücü dönüşümü ve veri mahremiyeti." }
    ],
    section1: {
      title: "Geleneksel Kodlama vs. Yapay Zekâ (Makine Öğrenmesi)",
      subtitle: "Eskiden kuralları biz tek tek yazardık; artık kuralları verileri inceleyen yapay zekâ kendisi buluyor.",
      layout: "split-visual",
      card: {
        title: "Temel Mantık Ayrımı",
        icon: "🧠🤖",
        desc: "İki çağın yazılım mimarisini karşılaştıralım:",
        items: [
          { bold: "Geleneksel Yazılım (Klasik Kod)", text: "Girdi + Kural (İnsan Yazar) = Çıktı. Örneğin: 'Eğer hava sıcaklığı > 25° ise klimayı aç' kuralını mühendis baştan kodlar." },
          { bold: "Yapay Zekâ (Makine Öğrenmesi)", text: "Girdi + Çıktı (Örnek Veriler) = Kuralı Makine Öğrenir! Binlerce kedi fotoğrafı gösterilir; kedi kulağının geometrisini model kendisi keşfeder." },
          { bold: "Sürekli Gelişim", text: "Yapay zekâ yeni veri geldikçe deneyim kazanır ve tahmin doğruluk oranını artırır." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Klasik Programlama Kutusu -->
        <rect x="25" y="35" width="225" height="230" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <text x="137" y="65" font-size="13" font-weight="bold" fill="#3b82f6" text-anchor="middle">GELENEKSEL PROGRAMLAMA</text>
        <line x1="40" y1="80" x2="235" y2="80" stroke="#334155" stroke-width="1.5"/>

        <rect x="45" y="100" width="80" height="35" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="85" y="122" font-size="11" fill="#cbd5e1" text-anchor="middle">VERİ</text>

        <rect x="155" y="100" width="80" height="35" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="195" y="122" font-size="11" fill="#cbd5e1" text-anchor="middle">KURALLAR</text>

        <path d="M 85 140 L 85 165 L 137 165" stroke="#3b82f6" stroke-width="2"/>
        <path d="M 195 140 L 195 165 L 137 165" stroke="#3b82f6" stroke-width="2"/>

        <circle cx="137" cy="185" r="20" fill="#3b82f6" fill-opacity="0.2"/>
        <text x="137" y="190" font-size="14" text-anchor="middle">💻</text>

        <rect x="75" y="220" width="125" height="32" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="137" y="240" font-size="11" font-weight="bold" fill="#60a5fa" text-anchor="middle">SONUÇ (ÇIKTI)</text>

        <!-- Yapay Zekâ / Makine Öğrenmesi Kutusu -->
        <rect x="285" y="35" width="225" height="230" rx="12" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
        <text x="397" y="65" font-size="13" font-weight="bold" fill="#00f0ff" text-anchor="middle">YAPAY ZEKÂ (ÖĞRENME)</text>
        <line x1="300" y1="80" x2="495" y2="80" stroke="#334155" stroke-width="1.5"/>

        <rect x="305" y="100" width="80" height="35" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="345" y="122" font-size="11" fill="#cbd5e1" text-anchor="middle">VERİ</text>

        <rect x="415" y="100" width="80" height="35" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="455" y="122" font-size="11" fill="#cbd5e1" text-anchor="middle">ÇIKTILAR</text>

        <path d="M 345 140 L 345 165 L 397 165" stroke="#00f0ff" stroke-width="2"/>
        <path d="M 455 140 L 455 165 L 397 165" stroke="#00f0ff" stroke-width="2"/>

        <circle cx="397" cy="185" r="20" fill="#00f0ff" fill-opacity="0.2"/>
        <text x="397" y="190" font-size="14" text-anchor="middle">🧠</text>

        <rect x="335" y="220" width="125" height="32" rx="6" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
        <text x="397" y="240" font-size="11" font-weight="bold" fill="#00f0ff" text-anchor="middle">MODEL (KURALLAR)</text>
      </svg>`
    },
    section2: {
      title: "Yapay Zekânın Avantajları ve Risk Dengesi",
      subtitle: "Güçlü bir teknolojiyi doğru kullanabilmek, onun sınırlarını ve tehlikelerini bilmekten geçer.",
      cards: [
        {
          badge: "Avantaj: Hız & Teşhis",
          title: "Milyonlarca Veriyi Saniyede Tarama",
          desc: "Tıpta röntgen ve MR sonuçlarını uzman bir hekimden binlerce kat hızlı tarayarak mikroskobik tümörleri erkenden yakalayabilir."
        },
        {
          badge: "Avantaj: Otomasyon",
          title: "Zorlu ve Tehlikeli Görevler",
          desc: "Nükleer santral denetimi, maden arama veya uzay keşiflerinde insanların can güvenliğini riske atmadan 7/24 kesintisiz çalışır."
        },
        {
          badge: "Risk: Yanlılık & Mahremiyet",
          title: "Önyargılı Veri ve Güvenlik",
          desc: "Eğitildiği veri taraflı ise yapay zekâ da hatalı kararlar verir. Ayrıca kişisel verilerin izinsiz kullanımı gizliliği tehdit edebilir."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: 'Yapay Zekâ Tartışma ve Sorgulama Çemberi'",
      desc: "Sınıf iki gruba ayrılarak yapay zekânın avantajlarını ve dezavantajlarını argümanlarla savunur.",
      steps: [
        { title: "Grup A (Fırsatçılar)", desc: "Yapay zekânın çevre kirliliğiyle mücadele ve trafik kazalarını önlemedeki rolünü savunur." },
        { title: "Grup B (Sorgulayıcılar)", desc: "İş kaybı riski, sanat eserlerinin telif hakları ve deepfake yanıltmacasını tartışır." },
        { title: "Ortak Çıkarım", desc: "Tahtaya 'Etik ve Güvenli Yapay Zekâ İlkeleri' başlıklı 3 altın kural yazılarak mutabakata varılır." }
      ],
      criteria: [
        "Yapay zekâ kavramını doğru tanımlayabilme",
        "En az 2 somut avantaj ve 2 somut dezavantajı verilerle açıklayabilme",
        "Eleştirel ve teknolojik sorgulama becerisini sergileyebilme"
      ]
    },
    tips: {
      safetyTitle: "Geleceğin Mühendisi Notu",
      safetyRules: [
        { bold: "Yapay Zekâ Araçtır, Efendi Değil", text: "Yapay zekâ insan zihninin yerini alacak bir varlık değil; insanın potansiyelini katlayan güçlü bir yardımcıdır." }
      ],
      myths: [
        { wrong: "Yapay zekâ canlıdır, tıpkı insan gibi duyguları ve bilinci vardır.", correct: "Hayır! Yapay zekâ sadece karmaşık matematiksel olasılık hesapları ve desen tanıma algoritmaları çalıştırır; bilinci yoktur." }
      ]
    },
    quiz: {
      question: "Geleneksel programlamada kuralları insan doğrudan kodlarken; yapay zekâ ve makine öğrenmesinde sistem kuralları neye bakarak kendisi öğrenir?",
      options: [
        { text: "A) Kendisine gösterilen büyük veri kümelerine (Dataset)", isCorrect: true },
        { text: "B) Rüzgârın yönüne", isCorrect: false },
        { text: "C) Bilgisayarın kasasının rengine", isCorrect: false },
        { text: "D) Boş bir kâğıda", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Makine öğrenmesi algoritmaları, kendilerine sunulan binlerce veya milyonlarca <strong>örnek veri kümesini (dataset)</strong> inceleyerek örüntüleri ve kuralları kendileri çıkarır."
    },
    summaryRules: [
      { bold: "Öğrenen Algoritmalar", text: "Makine veriden tecrübe kazanır." },
      { bold: "Büyük Fırsatlar", text: "Tıp, uzay, çevre ve hız alanlarında insanlığa hizmet eder." },
      { bold: "Haftaya Model Eğitiyoruz", text: "Önümüzdeki hafta kendi yapay zekâ modelimizi bizzat eğiteceğiz!" }
    ],
    homework: "Günlük hayatta bizzat karşılaştığınız 3 yapay zekâ uygulamasını (çeviri, dizi önerisi vb.) defterinize yazın.",
    nextWeekPreview: "Yapay Zekâ Model Eğitimi & Görsel Veri Toplama (Teachable Machine)!"
  },

  // 37. HAFTA
  {
    week: 37,
    date: "24 - 30 Mayıs",
    hours: "2 Saat",
    unit: "9. YAPAY ZEKÂ VE AKILLI ÜRÜNLER",
    unitBadge: "Tema 9: Yapay Zekâ",
    unitTheme: "tema-9",
    title: "37. Hafta: Yapay Zekâ Model Eğitimi & Görsel Veri Toplama",
    subtitle: "Google Teachable Machine ile Görüntü Sınıflandırma ve Model Doğrulama",
    outcomeCode: "TT 7.9.2",
    targetSkill: "Yapay Zekâ Modeli Eğitmek İçin Bilgi Toplayabilme & Doğruluk Testi Yapabilme",
    curiosityQuestion: "Bir bilgisayar kamerasına 'Tükenmez Kalem' ile 'Kurşun Kalem'i gösterdiğimizde hangisinin hangisi olduğunu yüzde yüz doğrulukla nasıl ayırt eder?",
    roadmap: [
      { title: "Veri Seti (Dataset) Oluşturma", desc: "Bir yapay zekânın başarısı, eğitildiği verinin kalitesine ve çeşitliliğine bağlıdır." },
      { title: "Görsel Sınıflandırma (Image Classification)", desc: "Sınıf 1 ve Sınıf 2: Web kamerasıyla farklı açılardan örnek görüntü toplama." },
      { title: "Modeli Eğitme (Train Model)", desc: "Sinir ağının (Neural Network) görüntülerdeki pikselleri ve kenarları öğrenme süreci." },
      { title: "Test ve Tahmin (Confidence / Güven Skoru)", desc: "Modelin yeni nesneleri yüzde kaç ihtimalle doğru tanıdığını ölçme ve kaydetme." }
    ],
    section1: {
      title: "Model Eğitmenin 3 Temel Aşaması",
      subtitle: "Google Teachable Machine veya benzeri görsel araçlarla kod yazmadan yapay zekâ eğitme döngüsü.",
      layout: "split-visual",
      card: {
        title: "Eğitim Adımları",
        icon: "📷⚙️",
        desc: "Sıfırdan bir yapay zekâ görsel modeli nasıl inşa edilir?",
        items: [
          { bold: "1. Veri Toplama (Data Collection)", text: "Kamera karşısında nesneyi sağa, sola çevirerek en az 50-100 adet fotoğraf karesi kaydederiz." },
          { bold: "2. Modeli Eğitme (Training)", text: "'Train' butonuna basılır; yapay zekâ algoritması pikseller arasındaki renk, eğri ve doku farklarını haritalandırır." },
          { bold: "3. Önizleme ve Test (Testing)", text: "Eğitimde kullanılmamış tamamen yeni bir nesne gösterilir; model örneğin '%96 Kalem, %4 Silgi' şeklinde güven skorunu gösterir." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- 3 Adımlı Teachable Machine Süreci -->
        <!-- Adım 1: Sınıflar -->
        <rect x="20" y="40" width="150" height="220" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
        <text x="95" y="65" font-size="12" font-weight="bold" fill="#3b82f6" text-anchor="middle">1. VERİ SETİ (DATASET)</text>
        <line x1="30" y1="75" x2="160" y2="75" stroke="#334155" stroke-width="1"/>

        <rect x="30" y="90" width="130" height="65" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="95" y="110" font-size="10" font-weight="bold" fill="#00f0ff" text-anchor="middle">Sınıf A: Makas ✂️</text>
        <text x="95" y="128" font-size="9" fill="#94a3b8" text-anchor="middle">60 Görsel Örnek</text>
        <text x="95" y="143" font-size="8" fill="#64748b" text-anchor="middle">Farklı açılar, ışıklar</text>

        <rect x="30" y="170" width="130" height="65" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
        <text x="95" y="190" font-size="10" font-weight="bold" fill="#f59e0b" text-anchor="middle">Sınıf B: Cetvel 📏</text>
        <text x="95" y="208" font-size="9" fill="#94a3b8" text-anchor="middle">60 Görsel Örnek</text>
        <text x="95" y="223" font-size="8" fill="#64748b" text-anchor="middle">Farklı açılar, ışıklar</text>

        <!-- Ok 1 -->
        <path d="M 175 150 L 205 150" stroke="#64748b" stroke-width="3"/>
        <polygon points="210,150 200,145 200,155" fill="#64748b"/>

        <!-- Adım 2: Eğitim -->
        <rect x="215" y="65" width="130" height="170" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <circle cx="280" cy="115" r="28" fill="#ec4899" fill-opacity="0.2"/>
        <text x="280" y="122" font-size="22" text-anchor="middle">🧠</text>
        <text x="280" y="165" font-size="12" font-weight="bold" fill="#ec4899" text-anchor="middle">2. EĞİTİM</text>
        <text x="280" y="183" font-size="9" fill="#cbd5e1" text-anchor="middle">Ağırlıklar Hesaplanıyor</text>
        <text x="280" y="200" font-size="9" fill="#cbd5e1" text-anchor="middle">50 Epochs / Doku Analizi</text>

        <!-- Ok 2 -->
        <path d="M 350 150 L 380 150" stroke="#64748b" stroke-width="3"/>
        <polygon points="385,150 375,145 375,155" fill="#64748b"/>

        <!-- Adım 3: Test & Tahmin -->
        <rect x="390" y="40" width="130" height="220" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="455" y="65" font-size="12" font-weight="bold" fill="#10b981" text-anchor="middle">3. TAHMİN / TEST</text>
        <line x1="400" y1="75" x2="510" y2="75" stroke="#334155" stroke-width="1"/>

        <circle cx="455" cy="110" r="24" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="455" y="116" font-size="18" text-anchor="middle">✂️</text>

        <rect x="400" y="145" width="110" height="20" rx="4" fill="#0f172a"/>
        <rect x="400" y="145" width="104" height="20" rx="4" fill="#10b981"/>
        <text x="455" y="159" font-size="10" font-weight="bold" fill="#070b14" text-anchor="middle">Makas: %95</text>

        <rect x="400" y="175" width="110" height="20" rx="4" fill="#0f172a"/>
        <rect x="400" y="175" width="6" height="20" rx="4" fill="#f59e0b"/>
        <text x="455" y="189" font-size="10" fill="#94a3b8" text-anchor="middle">Cetvel: %5</text>

        <rect x="400" y="210" width="110" height="35" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
        <text x="455" y="226" font-size="8" font-weight="bold" fill="#34d399" text-anchor="middle">SONUÇ:</text>
        <text x="455" y="238" font-size="8" fill="#cbd5e1" text-anchor="middle">Doğruluk Doğrulandı!</text>
      </svg>`
    },
    section2: {
      title: "Modelin Başarısını Etkileyen Faktörler",
      subtitle: "Yapay zekânın hata yapmasını engellemek için veri setinde nelere dikkat etmeliyiz?",
      cards: [
        {
          badge: "Veri Çeşitliliği",
          title: "Açı ve Işık Değişkenliği",
          desc: "Bir nesneyi hep aynı ışıkta ve aynı mesafeden çekerseniz, loş ışıkta veya uzaktan gösterildiğinde model onu tanıyamaz (Aşırı Uyum / Overfitting)."
        },
        {
          badge: "Veri Dengesi",
          title: "Eşit Sayıda Örnek",
          desc: "Makas için 200 fotoğraf çekip cetvel için sadece 10 fotoğraf çekerseniz, yapay zekâ her gördüğü şeye 'makas' deme eğiliminde olur."
        },
        {
          badge: "Arka Plan Temizliği",
          title: "Gürültüden Arındırma",
          desc: "Kameranın arkasında sürekli hareket eden insanlar veya karmaşık desenler varsa, model nesneyi değil arka planı öğrenmeye kalkabilir."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: Sınıf İçi 'Görüntü Ayırt Edici Model' Deneyimi",
      desc: "Öğrenciler akıllı tahtada veya bilgisayarda 2 farklı kırtasiye malzemesini tanıyan yapay zekâ modeli kurar.",
      steps: [
        { title: "Veri Toplama", desc: "Sınıf 1: 'Silgi', Sınıf 2: 'Kalemtıraş'. Kamera karşısında her biri için en az 40'ar poz kaydetme." },
        { title: "Model Eğitimi", desc: "Teachable Machine üzerinde 'Train' işlemini başlatıp kayıp (loss) grafiğini gözlemleme." },
        { title: "Kör Test ve Kayıt", desc: "Arkadaşlarının elindeki farklı renkte bir silgiyi kameraya tutup doğruluk oranını tabloya not etme." }
      ],
      criteria: [
        "En az 2 farklı sınıfta kaliteli görsel veri toplayabilme",
        "Eğitilen modelin güven skorunu (% oranını) yorumlayabilme",
        "Test sonuçlarını ve hatalı tahmin sebeplerini raporda açıklayabilme"
      ]
    },
    tips: {
      safetyTitle: "Veri Bilimci Tavsiyesi",
      safetyRules: [
        { bold: "Çöp Girerse Çöp Çıkar (GIGO)", text: "Yapay zekâya kalitesiz, bulanık veya hatalı etiketlenmiş veri verirseniz; elde edeceğiniz sonuç da kaçınılmaz olarak hatalı olur." }
      ],
      myths: [
        { wrong: "Bir yapay zekâyı eğitmek için mutlaka binlerce satır C++ veya Python kodu yazmak zorunludur.", correct: "Hayır! Günümüzde blok tabanlı ve görsel arayüzlü araçlarla (Teachable Machine, Scratch AI vb.) kod yazmadan da harika modeller eğitilebilir." }
      ]
    },
    quiz: {
      question: "Bir yapay zekâ modelini eğitirken kameraya gösterilen nesnenin farklı açılardan, farklı ışıklarda ve zengin örneklerle çekilmesi modelin hangi yeteneğini doğrudan artırır?",
      options: [
        { text: "A) Doğru Tanıma ve Genelleme Başarısını", isCorrect: true },
        { text: "B) Bilgisayarın fan sesini", isCorrect: false },
        { text: "C) İnternet kotasını", isCorrect: false },
        { text: "D) Ekran parlaklığını", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Veri çeşitliliği, yapay zekânın ezberlemek yerine gerçek özellikleri kavramasını sağlar ve <strong>doğru tanıma ve genelleme başarısını</strong> en üst seviyeye çıkarır."
    },
    summaryRules: [
      { bold: "Veri Seti Temeldir", text: "Kaliteli veri = Başarılı yapay zekâ." },
      { bold: "Eğit ve Doğrula", text: "Modeli eğitir, test eder ve güven skorunu kaydederiz." },
      { bold: "Haftaya Prompt Mühendisliği", text: "Önümüzdeki hafta yapay zekâ ile doğru konuşma sanatını öğreneceğiz!" }
    ],
    homework: "Evde Teachable Machine sitesine girip 'Açık El' ve 'Yumruk' el hareketlerini tanıyan 2 sınıflı bir model deneyin.",
    nextWeekPreview: "Yapay Zekâ İstem Mühendisliği (Prompt Engineering) & Uygulama Alanları!"
  },

  // 38. HAFTA
  {
    week: 38,
    date: "31 Mayıs - 06 Haziran",
    hours: "2 Saat",
    unit: "9. YAPAY ZEKÂ VE AKILLI ÜRÜNLER",
    unitBadge: "Tema 9: Yapay Zekâ",
    unitTheme: "tema-9",
    title: "38. Hafta: Yapay Zekâ İstem Mühendisliği (Prompt Engineering)",
    subtitle: "Yapay Zekâ ile Doğru İletişim: Rol, Bağlam, Görev ve Kısıt Mimarisi",
    outcomeCode: "TT 7.9.3",
    targetSkill: "İstem Mühendisliği İlkelerini Kullanarak Bilgi Toplayabilme & Doğrulayabilme",
    curiosityQuestion: "'Bana bir araba resmi çiz' demekle, 'Fütüristik, güneş enerjili, aerodinamik hatlara sahip bir spor otomobilin stüdyo ışığı altında 3B çizimini hazırla' demek arasında ne fark vardır?",
    roadmap: [
      { title: "İstem (Prompt) Nedir?", desc: "Yapay zekâ modellerine verilen talimat, soru ve bağlam yönergelerinin tümü." },
      { title: "Profesyonel İstem Formülü", desc: "Rol (Kimsin?) + Bağlam (Durum ne?) + Görev (Ne yapacaksın?) + Kısıt (Sınırlar neler?)." },
      { title: "Görsel ve Metin Üretiminde Prompt", desc: "Midjourney, DALL-E ve ChatGPT/Gemini gibi üretken yapay zekâ araçlarında istem incelikleri." },
      { title: "Farklı Mesleklerde Yapay Zekâ", desc: "Mimaride konsept çizimi, tıpta literatür tarama, yazılımda kod hata tespiti." }
    ],
    section1: {
      title: "Altın İstem Formülü: RBGK Mimarisi",
      subtitle: "Yapay zekâdan harika bir yanıt almak istiyorsanız, ona rastgele değil yapılandırılmış bir talimat vermelisiniz.",
      layout: "split-visual",
      card: {
        title: "RBGK İstem Bileşenleri",
        icon: "💬✨",
        desc: "Her profesyonel promptun 4 vazgeçilmez yapı taşı:",
        items: [
          { bold: "1. ROL (Role)", text: "Yapay zekâya kim gibi davranacağını söyleyin: 'Sen ödüllü bir endüstriyel ürün tasarımcısısın.'" },
          { bold: "2. BAĞLAM (Context)", text: "Durumu anlatın: '7. sınıf öğrencileri için geri dönüştürülebilir malzemelerle bir okul projesi geliştiriyoruz.'" },
          { bold: "3. GÖREV (Task)", text: "Ne yapmasını istediğinizi net yazın: 'Plastik şişelerden yapılabilecek 3 özgün masa lambası fikri üret.'" },
          { bold: "4. KISITLAR (Constraints)", text: "Formatı ve sınırları belirtin: 'Maddeler halinde yaz, her madde en fazla 2 cümle olsun ve teknik terim içermesin.'" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Zayıf Prompt vs Güçlü Prompt Karşılaştırması -->
        <!-- Üst Kısım: Zayıf Prompt -->
        <rect x="25" y="30" width="490" height="95" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
        <circle cx="55" cy="55" r="16" fill="#ef4444" fill-opacity="0.2"/>
        <text x="55" y="60" font-size="14" text-anchor="middle">❌</text>
        <text x="85" y="55" font-size="12" font-weight="bold" fill="#ef4444">ZAYIF İSTEM (Eksik &amp; Yüzeysel)</text>
        <rect x="85" y="65" width="220" height="28" rx="4" fill="#0f172a"/>
        <text x="95" y="83" font-size="10" fill="#94a3b8">"Bana güzel bir bisiklet anlat."</text>
        <path d="M 315 80 L 350 80" stroke="#ef4444" stroke-width="2"/>
        <text x="365" y="75" font-size="9" fill="#f87171">Çıktı: Sıradan, genel geçer,</text>
        <text x="365" y="90" font-size="9" fill="#f87171">işe yaramayan ansiklopedi metni.</text>

        <!-- Alt Kısım: Güçlü RBGK Prompt -->
        <rect x="25" y="145" width="490" height="135" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <circle cx="55" cy="175" r="16" fill="#10b981" fill-opacity="0.2"/>
        <text x="55" y="180" font-size="14" text-anchor="middle">✅</text>
        <text x="85" y="175" font-size="12" font-weight="bold" fill="#10b981">GÜÇLÜ İSTEM (RBGK Formülü ile Kusursuz)</text>

        <!-- 4 Rozet -->
        <g transform="translate(85, 190)">
          <rect x="0" y="0" width="85" height="32" rx="4" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>
          <text x="42" y="15" font-size="8" font-weight="bold" fill="#60a5fa" text-anchor="middle">1. ROL</text>
          <text x="42" y="27" font-size="7" fill="#cbd5e1" text-anchor="middle">Bisiklet Mühendisi</text>

          <rect x="95" y="0" width="85" height="32" rx="4" fill="#0f172a" stroke="#00f0ff" stroke-width="1"/>
          <text x="137" y="15" font-size="8" font-weight="bold" fill="#00f0ff" text-anchor="middle">2. BAĞLAM</text>
          <text x="137" y="27" font-size="7" fill="#cbd5e1" text-anchor="middle">Şehir içi katlanır bisiklet</text>

          <rect x="190" y="0" width="85" height="32" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
          <text x="232" y="15" font-size="8" font-weight="bold" fill="#fbbf24" text-anchor="middle">3. GÖREV</text>
          <text x="232" y="27" font-size="7" fill="#cbd5e1" text-anchor="middle">3 hafif şasi fikri üret</text>

          <rect x="285" y="0" width="115" height="32" rx="4" fill="#0f172a" stroke="#ec4899" stroke-width="1"/>
          <text x="342" y="15" font-size="8" font-weight="bold" fill="#f472b6" text-anchor="middle">4. KISITLAR</text>
          <text x="342" y="27" font-size="7" fill="#cbd5e1" text-anchor="middle">Max 10 kg, tablo formatında</text>
        </g>

        <rect x="85" y="235" width="415" height="28" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
        <text x="292" y="253" font-size="9" font-weight="bold" fill="#34d399" text-anchor="middle">ÇIKTI: Tam hedefe yönelik, profesyonel, uygulanabilir mühendislik tablosu!</text>
      </svg>`
    },
    section2: {
      title: "Görsel ve Metin Üretiminde İstem İncelikleri",
      subtitle: "Görsel yapay zekâlarda stil, ışık ve kamera açısı; metin modellerinde tonlama ve format belirleyicidir.",
      cards: [
        {
          badge: "Görsel İstemler",
          title: "Stil, Işık ve Açı Detayı",
          desc: "Görsel üretirken 'İzometrik çizim, stüdyo ışığı, 8k çözünürlük, Unreal Engine 5 render, blueprint tarzı' gibi teknik anahtar kelimeler kaliteyi 10 kat artırır."
        },
        {
          badge: "Metin İstemleri",
          title: "Adım Adım Düşündürme (Chain of Thought)",
          desc: "Yapay zekâya 'Cevap vermeden önce adım adım düşün ve gerekçeni açıkla' demek, mantık hatalarını ve uydurma (halüsinasyon) oranını sıfıra yaklaştırır."
        },
        {
          badge: "Doğrulama ve Teyit",
          title: "Kaynak Sorgulama Refleksi",
          desc: "Yapay zekânın verdiği her bilgi doğru kabul edilmez; güvenilir bilimsel kaynaklarla ve ders kitaplarıyla mutlaka çapraz kontrole tabi tutulmalıdır."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: 'Mükemmel İstem Tasarımı' Yarışması",
      desc: "Öğrenciler bir tasarım projesi için yapay zekâya yöneltilecek en etkili ve eksiksiz istem metnini kurgular.",
      steps: [
        { title: "Tema Seçimi", desc: "Örnek: 'Okul bahçesinde yağmur suyunu toplayan akıllı kuş yuvası projesi'." },
        { title: "RBGK Kurgusu", desc: "Defterde 4 kutu oluşturarak Rol, Bağlam, Görev ve Kısıt maddelerini eksiksiz doldurma." },
        { title: "İstem Karşılaştırması", desc: "Basit istem ile RBGK isteminin ürettiği sonuçlar tahtada karşılaştırılarak tablolara kaydedilir." }
      ],
      criteria: [
        "RBGK formülünün 4 bileşenini de doğru kullanabilme",
        "İstemde gereksiz laf kalabalığından kaçınıp net talimat yazabilme",
        "Yapay zekâ çıktısının kalitesindeki farkı analitik olarak değerlendirebilme"
      ]
    },
    tips: {
      safetyTitle: "İstem Mühendisi Kuralı",
      safetyRules: [
        { bold: "Halüsinasyon Uyarısı", text: "Yapay zekâ bazen bilmediği şeyleri çok emin bir dille uydurabilir (Halüsinasyon). Bilgileri kontrol etmeden projelerinizde kullanmayın." }
      ],
      myths: [
        { wrong: "Yapay zekâ ne düşündüğümüzü hisseder, kısa yazsak da anlar.", correct: "Hayır! Yapay zekâ zihin okuyamaz; ne kadar net, spesifik ve detaylı talimat verirseniz o kadar kaliteli sonuç üretir." }
      ]
    },
    quiz: {
      question: "Yapay zekâya istem yazarken 'Sen ödüllü bir endüstriyel ürün tasarımcısısın' ifadesini eklemek RBGK formülünün hangi bileşenine karşılık gelir?",
      options: [
        { text: "A) Rol (Role) Belirleme", isCorrect: true },
        { text: "B) Kısıt Koyma", isCorrect: false },
        { text: "C) Hata Bildirimi", isCorrect: false },
        { text: "D) Dosya Silme", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Yapay zekânın uzmanlık alanını ve yanıt verirken takınacağı bakış açısını tanımlayan ifadeye <strong>Rol (Role)</strong> denir."
    },
    summaryRules: [
      { bold: "RBGK ile Yaz", text: "Rol + Bağlam + Görev + Kısıt mimarisi." },
      { bold: "Spesifik Ol", text: "Genel istekler vasat, net istekler harika sonuçlar üretir." },
      { bold: "Haftaya Akıllı Ürünler", text: "Gelecek hafta yapay zekâ ile akıllı donanımları birleştireceğiz!" }
    ],
    homework: "Sevdiğiniz bir teknolojik araç hakkında RBGK formülüne uygun 1 adet profesyonel istem hazırlayıp defterinize yazın.",
    nextWeekPreview: "Yapay Zekâ ile Akıllı Ürün Sentezleme & Etik ve Güvenlik Boyutları!"
  },

  // 39. HAFTA
  {
    week: 39,
    date: "07 - 13 Haziran",
    hours: "2 Saat",
    unit: "9. YAPAY ZEKÂ VE AKILLI ÜRÜNLER",
    unitBadge: "Tema 9: Yapay Zekâ",
    unitTheme: "tema-9",
    title: "39. Hafta: Yapay Zekâ ile Akıllı Ürün Geliştirme & Etik ve Güvenlik",
    subtitle: "Sensörler + Yapay Zekâ Bütünleşmesi, Dijital Mahremiyet ve Yapay Zekâ Etiği",
    outcomeCode: "TT 7.9.4",
    targetSkill: "Yapay Zekâ Araçlarını ve Akıllı Ürün Parçalarını Sentezleyebilme",
    curiosityQuestion: "Akıllı bir sera kamerası domateslerin kızarıp kızarmadığını yapay zekâ ile anlayıp sadece olgun domatesleri sulayan bir vanayı açabilir mi?",
    roadmap: [
      { title: "Akıllı Ürün Sentezi", desc: "Sensör (Algıla) + Yapay Zekâ Modeli (Karar Ver) + Mekanik Eylem (Uygula)." },
      { title: "Gerçek Hayat Akıllı Ürünleri", desc: "Akıllı geri dönüşüm kutuları, sürücüsüz tarım traktörleri, yapay zekâlı ev asistanları." },
      { title: "Yapay Zekâ Etiği & Mahremiyet", desc: "Yüz tanıma kameraları, dijital ayak izi, veri güvenliği ve insan onuru." },
      { title: "Sorumlu Yapay Zekâ İlkeleri", desc: "Şeffaflık, hesap verebilirlik, adillik ve çevreye duyarlılık." }
    ],
    section1: {
      title: "Akıllı Ürünün Formülü: Donanım + Yapay Zekâ Beyni",
      subtitle: "Geleneksel bir mekanik alet, içine yapay zekâ algoritması eklendiğinde 'akıllı ürüne' dönüşür.",
      layout: "split-visual",
      card: {
        title: "3'lü Akıllı Ürün Mimarisi",
        icon: "🤖🌱",
        desc: "Bir akıllı ürünün çalışma çevrimi:",
        items: [
          { bold: "1. ALGI (Sensörler & Kameralar)", text: "Çevreden fiziksel veri toplar (Isı, nem, görüntü, ses veya mesafe sensörleri)." },
          { bold: "2. KARAR (Yapay Zekâ Modeli)", text: "Toplanan veriyi analiz eder. 'Bu bir yabani ot mu yoksa buğday mı?' sorusunu saniyenin yüzde birinde yanıtlar." },
          { bold: "3. EYLEM (Aktüatörler & Motorlar)", text: "Alınan karara göre fiziksel bir eylem gerçekleştirir (Motoru çalıştır, vanayı aç, uyarı ışığı yak)." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Akıllı Geri Dönüşüm Kutusu Mimarisi -->
        <rect x="25" y="30" width="490" height="240" rx="14" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
        <text x="270" y="58" font-size="13" font-weight="bold" fill="#00f0ff" text-anchor="middle">SENTEZ ÖRNEĞİ: YAPAY ZEKÂLI AKILLI GERİ DÖNÜŞÜM KUTUSU</text>

        <!-- Blok 1: Kamera (Algı) -->
        <rect x="50" y="90" width="115" height="130" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="107" cy="125" r="20" fill="#3b82f6" fill-opacity="0.2"/>
        <text x="107" y="131" font-size="16" text-anchor="middle">📷</text>
        <text x="107" y="160" font-size="11" font-weight="bold" fill="#60a5fa" text-anchor="middle">1. ALGI (SENSÖR)</text>
        <text x="107" y="178" font-size="9" fill="#cbd5e1" text-anchor="middle">Girişteki Kamera</text>
        <text x="107" y="193" font-size="8" fill="#94a3b8" text-anchor="middle">Atık görseli yakalar</text>

        <!-- Ok 1 -->
        <path d="M 170 155 L 200 155" stroke="#00f0ff" stroke-width="2.5"/>
        <polygon points="205,155 195,150 195,160" fill="#00f0ff"/>

        <!-- Blok 2: Yapay Zekâ (Karar) -->
        <rect x="210" y="80" width="125" height="150" rx="10" fill="#0f172a" stroke="#00f0ff" stroke-width="2" filter="drop-shadow(0 0 8px rgba(0,240,255,0.4))"/>
        <circle cx="272" cy="120" r="22" fill="#00f0ff" fill-opacity="0.2"/>
        <text x="272" y="126" font-size="18" text-anchor="middle">🧠</text>
        <text x="272" y="155" font-size="11" font-weight="bold" fill="#00f0ff" text-anchor="middle">2. KARAR (YZ)</text>
        <text x="272" y="173" font-size="9" fill="#cbd5e1" text-anchor="middle">Görüntü Modeli</text>
        <text x="272" y="188" font-size="8" fill="#34d399" text-anchor="middle">%98 Plastik Şişe!</text>
        <text x="272" y="202" font-size="8" fill="#94a3b8" text-anchor="middle">Kapak motoruna sinyal</text>

        <!-- Ok 2 -->
        <path d="M 340 155 L 370 155" stroke="#00f0ff" stroke-width="2.5"/>
        <polygon points="375,155 365,150 365,160" fill="#00f0ff"/>

        <!-- Blok 3: Motor & Kapak (Eylem) -->
        <rect x="375" y="90" width="115" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="432" cy="125" r="20" fill="#10b981" fill-opacity="0.2"/>
        <text x="432" y="131" font-size="16" text-anchor="middle">⚙️</text>
        <text x="432" y="160" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">3. EYLEM (MOTOR)</text>
        <text x="432" y="178" font-size="9" fill="#cbd5e1" text-anchor="middle">Servo Motor Açılır</text>
        <text x="432" y="193" font-size="8" fill="#94a3b8" text-anchor="middle">Plastik haznesine atar</text>

        <rect x="70" y="235" width="400" height="25" rx="5" fill="#070b14"/>
        <text x="270" y="251" font-size="9" font-weight="bold" fill="#f59e0b" text-anchor="middle">🛡️ Etik Not: Kamera sadece atığı görüntüler, kişilerin yüzünü asla kaydetmez!</text>
      </svg>`
    },
    section2: {
      title: "Yapay Zekâ Etiği ve Güvenlik Boyutu",
      subtitle: "Bir teknolojinin yapılabilir olması, onun mutlaka kontrolsüzce yapılması gerektiği anlamına gelmez.",
      cards: [
        {
          badge: "Mahremiyet & Veri Güvenliği",
          title: "Kişisel Verilerin Gizliliği",
          desc: "Akıllı hoparlörler veya ev kameraları odadaki özel konuşmaları izinsiz kaydetmemeli ve üçüncü şahıslarla paylaşmamalıdır."
        },
        {
          badge: "Algoritmik Adalet (Bias)",
          title: "Önyargısız ve Eşit Sistemler",
          desc: "Yapay zekâ iş başvurularını değerlendirirken veya sınav puanlarken cinsiyet, ırk veya bölge ayrımcılığı yapmayacak şekilde tarafsız denetlenmelidir."
        },
        {
          badge: "İnsan Kontrolü",
          title: "Son Sözün İnsanda Kalması",
          desc: "Hayati kararlarda (sağlık tedavileri, adalet, savunma sistemleri) yapay zekâ sadece öneri sunmalı; nihai onay mutlaka uzman insana ait olmalıdır."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: 'Akıllı Ürün Taslak Sentezi' ve Etik Beyannamesi",
      desc: "Öğrenciler gruplar halinde bir sensör ve yapay zekâ modelini birleştiren ürün kurgular ve etik kurallarını yazar.",
      steps: [
        { title: "Ürün Fikri", desc: "Örnek: 'Yorgunluk Tespit Eden Akıllı Sürücü Gözlüğü' veya 'Akıllı Bahçe Sulama Robotu'." },
        { title: "Sentez Şeması", desc: "Hangi sensör veri toplayacak? YZ neye karar verecek? Hangi motor/ekran eylemi yapacak?" },
        { title: "Etik Sözleşmesi", desc: "Bu ürün üretilirse kullanıcıların mahremiyeti nasıl korunacak? 2 maddelik etik güvence yazma." }
      ],
      criteria: [
        "Sensör, yapay zekâ ve mekanik eylem bileşenlerini eksiksiz sentezleyebilme",
        "Ürünün toplumsal veya çevresel bir fayda üretmesini sağlama",
        "Etik ve veri güvenliği ilkelerine duyarlı çözümler sunabilme"
      ]
    },
    tips: {
      safetyTitle: "Siber Güvenlik ve Etik",
      safetyRules: [
        { bold: "Yüzünüz ve Sesiniz Size Aittir", text: "Yapay zekâ uygulamalarına kendi yüz fotoğraflarınızı veya ses kayıtlarınızı yüklerken gizlilik sözleşmelerini mutlaka kontrol edin." }
      ],
      myths: [
        { wrong: "Akıllı ürünler her şeyi tek başına kusursuz yapar, insana hiç gerek kalmaz.", correct: "Hayır! En akıllı otonom sistemler bile sensör arızası veya beklenmedik durumlar karşısında insan gözetimine muhtaçtır." }
      ]
    },
    quiz: {
      question: "Bir yapay zekâlı akıllı sistemin sensörlerinden gelen verileri analiz edip karara varması akıllı ürün mimarisinin hangi basamağını oluşturur?",
      options: [
        { text: "A) Karar (Yapay Zekâ Modeli / Akıl)", isCorrect: true },
        { text: "B) Kutu ambalajı", isCorrect: false },
        { text: "C) Pil yuvası", isCorrect: false },
        { text: "D) Vida sıkma", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Sensörlerden gelen verileri değerlendirip ne yapılacağına hükmeden yazılımsal zekâya <strong>Karar (Yapay Zekâ Modeli)</strong> denir."
    },
    summaryRules: [
      { bold: "Algı + Karar + Eylem", text: "Akıllı ürünün üçlü saç ayağıdır." },
      { bold: "Etik Olmazsa Olmaz", text: "Mahremiyet ve adalet teknolojinin önünde gelir." },
      { bold: "Haftaya Portfolyo", text: "Gelecek hafta yıl boyu yaptığımız harika tasarımları derliyoruz!" }
    ],
    homework: "Gelecek haftaki portfolyo derlemesi için yıl boyu çizdiğiniz tüm karakalem ve CAD tasarımlarınızı dosyanıza koyup getirin.",
    nextWeekPreview: "Tasarım Portfolyosu (Ürün Dosyası) Derleme ve Değerlendirme!"
  },

  // 40. HAFTA
  {
    week: 40,
    date: "14 - 20 Haziran",
    hours: "2 Saat",
    unit: "10. OKUL TEMELLİ PLANLAMA: Tasarım Portfolyosu",
    unitBadge: "Tema 10: Portfolyo",
    unitTheme: "tema-10",
    title: "40. Hafta: Tasarım Portfolyosu Derleme ve Ürün Değerlendirme",
    subtitle: "Yıl Boyu Geliştirilen 2B/3B Çizimler, Prototip Süreçleri ve Tasarım Günlüğü",
    outcomeCode: "Okul Temelli Planlama & Portfolyo",
    targetSkill: "Tasarım Süreç Dosyasını (Portfolyo) Düzenleme, Öz Değerlendirme ve Akran Değerlendirme",
    curiosityQuestion: "Dünyanın en ünlü mimarları ve otomobil tasarımcıları iş başvurularına diploma yerine neden 'Portfolyo' ile giderler?",
    roadmap: [
      { title: "Tasarım Portfolyosu Nedir?", desc: "Sadece son ürün değil; ilk karalamadan çalışan prototipe kadar tüm öğrenme yolculuğu." },
      { title: "1. ve 2. Dönem Eserleri", desc: "Karakalem eskizler, 2B Inkscape vektörleri, 3B Tinkercad modelleri, Biyotaklit ve STEAM projeleri." },
      { title: "Öz Değerlendirme & Tasarımcı Refleksiyonu", desc: "'Nereden başladım, nereye geldim? En çok hangi aşamada zorlandım ve nasıl aştım?'" },
      { title: "Dereceli Puanlama (Rubrik)", desc: "Analitik kriterlerle tasarım dosyalarını değerlendirme ve sergiye hazırlama." }
    ],
    section1: {
      title: "Profesyonel Bir Tasarım Portfolyosunun Yapısı",
      subtitle: "Bir portfolyo, tasarımcının düşünme biçimini, problem çözme kasını ve sabrını gösteren vitrindir.",
      layout: "split-visual",
      card: {
        title: "Portfolyo Bölümleri",
        icon: "📁📐",
        desc: "7. Sınıf Teknoloji ve Tasarım dosyamızın 4 ana sekmesi:",
        items: [
          { bold: "Sekme 1: Fikirler & Eskizler", text: "Eylül-Ekim aylarında çizilen karakalem fikirler, analoji çizimleri ve ergonomi eskizleri." },
          { bold: "Sekme 2: Dijital CAD Modelleri", text: "2B vektörel katmanlı çizimler ve Tinkercad üzerinde modellenen 3B katı cisim render çıktıları." },
          { bold: "Sekme 3: Mimari & Doğadan Tasarımlar", text: "Sıfır enerjili eko-konut mimari planı ve Lotus/Ağaçkakan biyotaklit inovasyon taslakları." },
          { bold: "Sekme 4: STEAM & Yapay Zekâ Projesi", text: "Sensörlü prototip fotoğrafları, RBGK prompt metinleri ve akran değerlendirme formları." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Portfolyo Klasörü Görseli -->
        <rect x="35" y="40" width="470" height="225" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="68" font-size="14" font-weight="bold" fill="#f59e0b" text-anchor="middle">7. SINIF TEKNOLOJİ VE TASARIM GELİŞİM PORTFOLYOSU</text>

        <!-- 4 Klasör Sekmesi / Kartı -->
        <!-- Kart 1 -->
        <rect x="55" y="90" width="95" height="150" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
        <text x="102" y="115" font-size="16" text-anchor="middle">✏️</text>
        <text x="102" y="135" font-size="10" font-weight="bold" fill="#00f0ff" text-anchor="middle">DÖNEM 1A</text>
        <line x1="65" y1="145" x2="140" y2="145" stroke="#334155" stroke-width="1"/>
        <text x="102" y="165" font-size="8" fill="#cbd5e1" text-anchor="middle">Analoji Çizimi</text>
        <text x="102" y="180" font-size="8" fill="#cbd5e1" text-anchor="middle">Perspektif Eskiz</text>
        <text x="102" y="195" font-size="8" fill="#cbd5e1" text-anchor="middle">Tasarım İlkeleri</text>
        <rect x="65" y="210" width="75" height="18" rx="3" fill="#00f0ff" fill-opacity="0.2"/>
        <text x="102" y="222" font-size="7" font-weight="bold" fill="#00f0ff" text-anchor="middle">Tamamlandı</text>

        <!-- Kart 2 -->
        <rect x="165" y="90" width="95" height="150" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="212" y="115" font-size="16" text-anchor="middle">💻</text>
        <text x="212" y="135" font-size="10" font-weight="bold" fill="#3b82f6" text-anchor="middle">DÖNEM 1B</text>
        <line x1="175" y1="145" x2="250" y2="145" stroke="#334155" stroke-width="1"/>
        <text x="212" y="165" font-size="8" fill="#cbd5e1" text-anchor="middle">2B CAD Vektör</text>
        <text x="212" y="180" font-size="8" fill="#cbd5e1" text-anchor="middle">3B Tinkercad</text>
        <text x="212" y="195" font-size="8" fill="#cbd5e1" text-anchor="middle">Eko-Konut Mimari</text>
        <rect x="175" y="210" width="75" height="18" rx="3" fill="#3b82f6" fill-opacity="0.2"/>
        <text x="212" y="222" font-size="7" font-weight="bold" fill="#60a5fa" text-anchor="middle">Tamamlandı</text>

        <!-- Kart 3 -->
        <rect x="275" y="90" width="95" height="150" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
        <text x="322" y="115" font-size="16" text-anchor="middle">🌿</text>
        <text x="322" y="135" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">DÖNEM 2A</text>
        <line x1="285" y1="145" x2="360" y2="145" stroke="#334155" stroke-width="1"/>
        <text x="322" y="165" font-size="8" fill="#cbd5e1" text-anchor="middle">Biyotaklit Doğa</text>
        <text x="322" y="180" font-size="8" fill="#cbd5e1" text-anchor="middle">Temiz Enerji</text>
        <text x="322" y="195" font-size="8" fill="#cbd5e1" text-anchor="middle">Rüzgâr Tribünü</text>
        <rect x="285" y="210" width="75" height="18" rx="3" fill="#10b981" fill-opacity="0.2"/>
        <text x="322" y="222" font-size="7" font-weight="bold" fill="#34d399" text-anchor="middle">Tamamlandı</text>

        <!-- Kart 4 -->
        <rect x="385" y="90" width="95" height="150" rx="8" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
        <text x="432" y="115" font-size="16" text-anchor="middle">🚀</text>
        <text x="432" y="135" font-size="10" font-weight="bold" fill="#ec4899" text-anchor="middle">DÖNEM 2B</text>
        <line x1="395" y1="145" x2="470" y2="145" stroke="#334155" stroke-width="1"/>
        <text x="432" y="165" font-size="8" fill="#cbd5e1" text-anchor="middle">STEAM Prototipi</text>
        <text x="432" y="180" font-size="8" fill="#cbd5e1" text-anchor="middle">Teachable Model</text>
        <text x="432" y="195" font-size="8" fill="#cbd5e1" text-anchor="middle">RBGK Promptları</text>
        <rect x="395" y="210" width="75" height="18" rx="3" fill="#ec4899" fill-opacity="0.2"/>
        <text x="432" y="222" font-size="7" font-weight="bold" fill="#f472b6" text-anchor="middle">Tamamlandı</text>
      </svg>`
    },
    section2: {
      title: "Öz Değerlendirme ve Akran Gözüyle İnceleme",
      subtitle: "Gelişiminizi görmek için kendinize dürüst sorular sormalı ve arkadaşlarınızın yapıcı eleştirilerini dinlemelisiniz.",
      cards: [
        {
          badge: "Tasarımcı Refleksiyonu",
          title: "Ben Neler Öğrendim?",
          desc: "Sene başında düz bir çizgi çizmekte zorlanırken şimdi 3 boyutlu CAD model üretebiliyorum; tasarım vizyonum ve problem çözme becerim genişledi."
        },
        {
          badge: "Akran Rubriği",
          title: "Saygılı ve Yapıcı Eleştiri",
          desc: "Arkadaşınızın dosyasını incelerken sadece 'güzel olmuş' demek yerine: 'Köprü maketindeki üçgen kafes yapın çok sağlam ancak boyama estetiği geliştirilebilir' şeklinde yönlendirici notlar verin."
        },
        {
          badge: "Sergi Seçimi",
          title: "Gelecek Haftaya En İyi Eserler",
          desc: "Her öğrenci okul yıl sonu sergisinde kendi masasını süsleyecek en gurur duyduğu 2 çalışmasını (biri fiziksel maket, biri dijital çıktı) belirler."
        }
      ]
    },
    workshop: {
      title: "Atölye Görevi: Portfolyo İnceleme ve Akran Değerlendirme Çemberi",
      desc: "Öğrenciler portfolyolarını yanındaki sıra arkadaşıyla değiştirerek rubrik formunu doldurur.",
      steps: [
        { title: "Dosya Kontrolü", desc: "Kapak sayfası, içindekiler listesi, çizimler ve tarihlerin eksiksiz olduğunu teyit etme." },
        { title: "Rubrik Puanlaması", desc: "Özgünlük (30p), Süreç Takibi ve Tasarım Notları (30p), Düzen ve Temizlik (20p), Sunum (20p)." },
        { title: "Gelişim Notu Yazma", desc: "Arkadaşının dosyasına 'En beğendiğim yönü' ve 'Bir sonraki projede geliştirebileceği alan' şeklinde 2 cümle yazma." }
      ],
      criteria: [
        "Yıl boyu üretilen tüm çalışmaları kronolojik sırayla derleyebilme",
        "Kendi tasarım sürecine dair öz eleştiri ve refleksiyon yazabilme",
        "Akranına objektif ve yapıcı geri bildirim sunabilme"
      ]
    },
    tips: {
      safetyTitle: "Portfolyo Yönetimi Notu",
      safetyRules: [
        { bold: "Eskizlerinizi Asla Çöpe Atmayın", text: "En komik veya hatalı görünen ilk karalamalar bile portfolyonun en kıymetli parçasıdır; çünkü onlar sizin nereden nereye geldiğinizi kanıtlar." }
      ],
      myths: [
        { wrong: "Portfolyo sadece hatasız ve kusursuz çizimlerin konduğu bir albümdür.", correct: "Hayır! Portfolyo bir gelişim günlüğüdür; yapılan hatalar ve o hataların nasıl düzeltildiği sürecin en değerli hikâyesidir." }
      ]
    },
    quiz: {
      question: "Bir tasarımcının yıl boyunca yaptığı eskizleri, 2B/3B dijital çizimleri, prototip fotoğraflarını ve süreç notlarını derlediği gelişim dosyasına ne ad verilir?",
      options: [
        { text: "A) Tasarım Portfolyosu (Süreç Dosyası)", isCorrect: true },
        { text: "B) Telefon Rehberi", isCorrect: false },
        { text: "C) Yemek Menüsü", isCorrect: false },
        { text: "D) Vergi Levhası", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Tasarımcının tüm fikir, eskiz, CAD ve prototip yolculuğunu kanıtlayan profesyonel gelişim dosyasına <strong>Tasarım Portfolyosu (Ürün Dosyası)</strong> denir."
    },
    summaryRules: [
      { bold: "Süreç = Başarı", text: "Önemli olan sadece nihai ürün değil, kat ettiğiniz yoldur." },
      { bold: "Portfolyon Hazır", text: "Artık birer genç tasarımcı ve mühendissiniz." },
      { bold: "BÜYÜK GÜN: ŞENLİK!", text: "Haftaya yıl sonu Teknoloji ve Tasarım Şenliğimizde eserlerimizi tüm okula sergiliyoruz!" }
    ],
    homework: "Gelecek haftaki şenlik için sergileyeceğiniz en iyi 2 çalışmanızı hazırlayın ve 1 dakikalık sunum konuşmanızı prova edin.",
    nextWeekPreview: "Yıl Sonu Sosyal Etkinlik: Teknoloji ve Tasarım Şenliği & Başarı Sertifikaları!"
  },

  // 41. HAFTA
  {
    week: 41,
    date: "21 - 27 Haziran",
    hours: "2 Saat",
    unit: "10. OKUL TEMELLİ PLANLAMA: Teknoloji ve Tasarım Şenliği",
    unitBadge: "Tema 10: Şenlik",
    unitTheme: "tema-10",
    title: "41. Hafta: Yıl Sonu Teknoloji ve Tasarım Şenliği & Başarı Sertifikaları",
    subtitle: "Okul İnovasyon Sergisi, Ürün Sunumları ve Genç Mucitler Veda Töreni",
    outcomeCode: "Okul Temelli Planlama & Sosyal Etkinlik",
    targetSkill: "Ürün ve Fikirlerini Topluluk Önünde Özgüvenle Sunabilme & Yıl Sonu Başarı Değerlendirmesi",
    curiosityQuestion: "Tasarladığınız harika bir projeyi bir yatırımcıya veya okul müdürüne sadece 60 saniyede (Asansör Konuşması) nasıl anlatırsınız?",
    roadmap: [
      { title: "Teknoloji ve Tasarım Şenliği Kurulumu", desc: "Okul koridorunda veya spor salonunda stantların düzenlenmesi ve eser yerleşimi." },
      { title: "Asansör Konuşması (Elevator Pitch)", desc: "Sorun, çözüm, yenilikçi yön ve faydayı 1 dakikada etkileyici bir dille özetleme." },
      { title: "Tasarımcı Pasaportu & Mezuniyet", desc: "7. Sınıf Teknoloji ve Tasarım dersinde kazanılan tüm becerilerin kutlanması." },
      { title: "8. Sınıfa Vizyon Köprüsü", desc: "Gelecek yıl başlayacak olan 'İnovasyon, Patent ve İleri Düzey Robotik Projeleri'ne hazırlık." }
    ],
    section1: {
      title: "60 Saniyelik 'Asansör Konuşması' (Elevator Pitch) Sanatı",
      subtitle: "Harika bir fikriniz olabilir; ancak onu doğru kelimelerle anlatamazsanız kimse farkına varamaz.",
      layout: "split-visual",
      card: {
        title: "Asansör Konuşması Formülü",
        icon: "🎤⚡",
        desc: "Bir ziyaretçi standınıza geldiğinde 60 saniyede anlatılacak 4 adım:",
        items: [
          { bold: "00-15 sn (Kanca & Sorun)", text: "'Biliyor musunuz, okulumuzda her gün onlarca defter sırf kapakları yırtıldığı için çöpe atılıyor...'" },
          { bold: "15-30 sn (Bizim Çözümümüz)", text: "'Biz bu sorunu çözmek için geri dönüştürülmüş pet şişelerden su geçirmez modüler defter kılıfı tasarladık.'" },
          { bold: "30-45 sn (STEAM & Teknoloji Farkı)", text: "'Tasarımımızı Tinkercad ile 3 boyutlu modelledik ve dayanıklılık testlerinde 100 kat daha sağlam çıktı.'" },
          { bold: "45-60 sn (Eylem & Teşekkür)", text: "'İşte prototipimiz burada, denemek ister misiniz? Standımıza hoş geldiniz!'" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Şenlik Standı ve Sunum Sahnesi -->
        <defs>
          <linearGradient id="podiumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#ef4444"/>
          </linearGradient>
        </defs>

        <rect x="25" y="30" width="490" height="240" rx="14" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="60" font-size="14" font-weight="bold" fill="#f59e0b" text-anchor="middle">TEKNO-FEST &amp; TASARIM ŞENLİĞİ: GENÇ MUCİTLER KÜRSÜSÜ</text>

        <!-- Sergi Masası -->
        <rect x="70" y="170" width="400" height="85" rx="6" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
        <line x1="70" y1="195" x2="470" y2="195" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="235" font-size="12" font-weight="bold" fill="#f59e0b" text-anchor="middle">7. SINIF İNOVASYON &amp; TASARIM STANDI</text>

        <!-- Eser 1: 3B Mimari Maket -->
        <rect x="95" y="125" width="75" height="50" rx="4" fill="#1e293b" stroke="#00f0ff" stroke-width="1.5"/>
        <text x="132" y="148" font-size="14" text-anchor="middle">🏡</text>
        <text x="132" y="165" font-size="8" font-weight="bold" fill="#00f0ff" text-anchor="middle">Eko-Konut</text>

        <!-- Eser 2: Rüzgâr Türbini -->
        <rect x="195" y="105" width="75" height="70" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="232" y="135" font-size="20" text-anchor="middle">🌀</text>
        <text x="232" y="165" font-size="8" font-weight="bold" fill="#10b981" text-anchor="middle">Temiz Enerji</text>

        <!-- Eser 3: Akıllı Baston -->
        <rect x="295" y="115" width="75" height="60" rx="4" fill="#1e293b" stroke="#6366f1" stroke-width="1.5"/>
        <text x="332" y="142" font-size="16" text-anchor="middle">🦯</text>
        <text x="332" y="165" font-size="8" font-weight="bold" fill="#818cf8" text-anchor="middle">STEAM Baston</text>

        <!-- Eser 4: Yapay Zekâ Modeli -->
        <rect x="395" y="125" width="60" height="50" rx="4" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
        <text x="425" y="148" font-size="14" text-anchor="middle">🤖</text>
        <text x="425" y="165" font-size="8" font-weight="bold" fill="#f472b6" text-anchor="middle">AI Model</text>

        <!-- Madalya / Rozet İkonu -->
        <circle cx="270" cy="90" r="18" fill="url(#podiumGrad)" stroke="#ffffff" stroke-width="2"/>
        <text x="270" y="96" font-size="16" text-anchor="middle">🏆</text>
      </svg>`
    },
    section2: {
      title: "Bir Yılın Hasadı: Neler Kazandık?",
      subtitle: "Eylül ayından Haziran sonuna kadar kat ettiğimiz devasa yolculuğun özeti.",
      cards: [
        {
          badge: "Tasarım Odaklı Düşünme",
          title: "Bir Mucit Gibi Düşünmek",
          desc: "Sorunlardan şikayet etmek yerine 'Bunu nasıl çözerim?' deme refleksini, ergonomi ve tasarım ilkelerini kazandık."
        },
        {
          badge: "Dijital & CAD Okuryazarlığı",
          title: "Geleceğin Dijital Üretimi",
          desc: "Fikirlerimizi kâğıttan çıkarıp 2B vektörel katmanlara ve 3B yazıcıya hazır Tinkercad modellerine dönüştürmeyi başardık."
        },
        {
          badge: "STEAM & Geleceğin Teknolojileri",
          title: "Biyotaklit, Enerji ve Yapay Zekâ",
          desc: "Doğanın milyarlarca yıllık zekâsını, yenilenebilir enerjiyi ve yapay zekâ istem mühendisliğini projelerimizde harmanladık."
        }
      ]
    },
    workshop: {
      title: "Şenlik Etkinliği: 'Yılın Genç Tasarımcıları' Rozet Töreni",
      desc: "Her öğrenci kendi standında velilere, öğretmenlere ve alt sınıflara projelerini sunar ve katılım sertifikasını alır.",
      steps: [
        { title: "Stant Ziyaretleri", desc: "Ziyaretçiler öğrencilerin masalarını gezerek projeleri dener ve soru sorar." },
        { title: "Ziyaretçi Oylaması", desc: "'En İnovatif Proje', 'En Çevreci Tasarım' ve 'En İyi Sunum' kategorilerinde oylar toplanır." },
        { title: "Sertifika ve Kapanış", desc: "Öğretmenimiz Vahit Keskin tarafından tüm öğrencilere 'Genç Mucit Tasarımcı Başarı Sertifikası' takdim edilir." }
      ],
      criteria: [
        "Projesini özgüvenli, akıcı ve nezaket kuralları çerçevesinde sunabilme",
        "Ziyaretçilerden gelen sorulara teknik ve ikna edici yanıtlar verebilme",
        "Yıl boyunca gösterilen azim ve üretkenliği kutlayabilme"
      ]
    },
    tips: {
      safetyTitle: "Geleceğe Tavsiye",
      safetyRules: [
        { bold: "Merakınızı Asla Kaybetmeyin", text: "Teknoloji hızla değişir; ancak merak eden, soru soran ve üretmekten vazgeçmeyen bir zihin her zaman dünyayı güzelleştirecektir." }
      ],
      myths: [
        { wrong: "Ders bitti, artık tasarımla işimiz kalmadı.", correct: "Hayır! Hayatın kendisi dev bir tasarım atölyesidir. 8. sınıfta çok daha büyük hedeflerle inovasyon ve patent yolculuğuna devam edeceğiz." }
      ]
    },
    quiz: {
      question: "Tasarlanan bir projenin sorununu, çözümünü, yenilikçi yönünü ve toplumsal faydasını 60 saniyede etkileyici bir şekilde özetleyen sunum tekniğine ne ad verilir?",
      options: [
        { text: "A) Asansör Konuşması (Elevator Pitch)", isCorrect: true },
        { text: "B) Sessiz Sinema", isCorrect: false },
        { text: "C) Saat Tik Takı", isCorrect: false },
        { text: "D) Fısıltı Gazetesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Bir fikri veya ürünü çok kısa bir sürede (60 saniye civarında) etkileyici ve ikna edici şekilde anlatma sanatına <strong>Asansör Konuşması (Elevator Pitch)</strong> denir."
    },
    summaryRules: [
      { bold: "Tebrikler Genç Mucitler!", text: "41 haftalık yoğun ve ilham verici yolculuğu başarıyla tamamladınız." },
      { bold: "Üretmeye Devam!", text: "Hayal eden, çizen, üreten ve pes etmeyenler dünyayı değiştirir." },
      { bold: "8. Sınıfta Görüşmek Üzere!", text: "Türkiye Yüzyılı Maarif Modeli - Öğretmen: Vahit Keskin." }
    ],
    homework: "Yaz tatilinde çevrenizde gördüğünüz ilginç teknolojileri ve doğa harikalarını not alacağınız bir 'Yaz Mucidi Defteri' tutun.",
    nextWeekPreview: "İyi Tatiller! 8. Sınıf İleri Teknoloji ve İnovasyon Dünyasında Buluşmak Üzere!"
  }
];
