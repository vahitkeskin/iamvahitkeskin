/**
 * 1. Sınıf Serbest Etkinlikler - 1. Dönem 2. Bölüm (Hafta 11 - 19)
 * Türkiye Yüzyılı Maarif Modeli (2026-2027)
 * Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_PART2_GRADE1 = [
  // 11. HAFTA
  {
    week: 11,
    date: "23 - 29 Kasım",
    hours: "4 Ders Saati",
    unit: "24 Kasım Öğretmenler Günü ve Aile Fotoğrafları",
    unitBadge: "11. Tema: Sevgi & İfade",
    unitTheme: "tema-3",
    title: "11. Hafta: 24 Kasım Öğretmenler Günü, Fotoğraf Yorumlama ve Film",
    subtitle: "Öğretmenimize Teşekkür Kartı, Aile Fotoğraflarını Tanıtma ve Çizgi Film",
    outcomeCode: "SE.1.11 (Görsel İfade & Vefa)",
    targetSkill: "Düzeye Uygun Fotoğrafları Yorumlayabilme, Duygularını İfade Etme ve Kes-Yapıştır Becerisi",
    curiosityQuestion: "Elimizdeki eski bir aile fotoğrafına baktığımızda oradaki mutluluğu ve anıları arkadaşlarımıza nasıl anlatırız?",
    roadmap: [
      { title: "24 Kasım Öğretmenler Günü", desc: "Öğretmenimizin bize kattığı güzellikleri anlama ve sevgi kartı hazırlama." },
      { title: "Aile Fotoğrafları Saati", desc: "Evden getirilen aile fotoğraflarını tahtada tanıtıp kendini ifade etme." },
      { title: "Eğitici Çizgi Film", desc: "Arkadaşlık ve paylaşma temalı çizgi filmi izleyip kahramanları konuşma." },
      { title: "Çiçek Kes-Yapıştır", desc: "Renkli fon kartonlarından çiçek buketi kesip sınıf panosuna yapıştırma." }
    ],
    section1: {
      title: "24 Kasım: Sevgili Öğretmenime Teşekkür Çiçeği",
      subtitle: "Bize okumayı, yazmayı ve dünyayı sevmeyi öğreten öğretmenlerimize minnet duyarız.",
      layout: "split-visual",
      card: {
        title: "Fotoğraf Yorumlama Kuralları",
        icon: "📷🌷",
        desc: "Bir fotoğrafı tanıtırken:",
        items: [
          { bold: "1. Kimler Var?", text: "Fotoğraftaki kişileri tanıt: 'Bu annem, bu babam, bu da minik kardeşim.'" },
          { bold: "2. Neredeyiz?", text: "Fotoğrafın çekildiği yeri söyle: 'Geçen yaz gittiğimiz deniz kenarı veya park.'" },
          { bold: "3. Ne Hissediyorsun?", text: "O an ne hissettiğini anlat: 'Çok mutluyduk çünkü birlikte piknik yapıyorduk.'" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#ec4899" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#f472b6" text-anchor="middle">24 KASIM ÖĞRETMENLER GÜNÜ SEVGİ KARTI</text>

        <!-- Sevgi Mektubu / Kartı -->
        <rect x="70" y="80" width="180" height="140" rx="10" fill="#fdf2f8" stroke="#f472b6" stroke-width="3"/>
        <text x="160" y="110" font-size="28" text-anchor="middle">💌</text>
        <text x="160" y="135" font-size="11" font-weight="bold" fill="#831843" text-anchor="middle">Canım Öğretmenim</text>
        <line x1="90" y1="150" x2="230" y2="150" stroke="#fbcfe8" stroke-width="2"/>
        <line x1="90" y1="170" x2="230" y2="170" stroke="#fbcfe8" stroke-width="2"/>
        <line x1="110" y1="190" x2="210" y2="190" stroke="#fbcfe8" stroke-width="2"/>
        <text x="160" y="210" font-size="14" text-anchor="middle">💐❤️</text>

        <!-- Aile Fotoğrafı Çerçevesi -->
        <rect x="290" y="80" width="180" height="140" rx="10" fill="#f8fafc" stroke="#38bdf8" stroke-width="3"/>
        <rect x="300" y="90" width="160" height="95" rx="6" fill="#e0f2fe"/>
        <text x="380" y="145" font-size="34" text-anchor="middle">👨‍👩‍👧‍👦</text>
        <text x="380" y="205" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Ailem ve Ben Albümü</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#f472b6" text-anchor="middle">Görselleri anlatırken işitilebilir ses tonu ve güler yüz kullanırız!</text>
      </svg>`
    },
    section2: {
      title: "Fotoğrafla Konuşma ve Çizgi Film Saati",
      subtitle: "Gördüklerimizi kelimelere dökmek iletişim kaslarımızı güçlendirir.",
      cards: [
        {
          badge: "İfade",
          title: "Fotoğrafını Tanıt",
          desc: "Tahtaya çıkıp arkadaşlarına heyecanlanmadan, sakin bir sesle anını anlatma."
        },
        {
          badge: "Oyun",
          title: "Kulaktan Kulağa",
          desc: "Öğretmenin fısıldadığı sevgi cümlesini bozmadan en son sıradaki arkadaşa iletme."
        },
        {
          badge: "Film Saati",
          title: "Kahramanı Keşfet",
          desc: "İzlediğimiz filmde en sevdiğimiz karakterin neden iyi bir dost olduğunu söyleme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Atölye: 'Öğretmenime Kalpli Çiçek Buketi'",
      desc: "Her öğrenci renkli fon kartonundan bir lale ve kalp keserek büyük sınıf buketine yapıştırır.",
      steps: [
        { title: "Şablon Çizimi", desc: "Renkli kâğıt üzerine kalp ve çiçek şekli çizme." },
        { title: "Güvenli Kesim", desc: "Küt uçlu makasla çizgiyi taşırmadan kesme." },
        { title: "Buket Oluşturma", desc: "Tüm çiçekleri öğretmen masasının arkasındaki büyük panoya asma." }
      ],
      criteria: [
        "Fotoğraf anlatımında akıcı ve işitilebilir ses tonu kullanabilme",
        "Makas ve yapıştırıcıyı temiz, güvenli kullanabilme",
        "Kulaktan kulağa oyununda kurallara ve arkadaşlarına saygı gösterme"
      ]
    },
    tips: {
      safetyTitle: "İletişim ve Saygı Rehberi",
      safetyRules: [
        { bold: "Arkadaşını Dinle", text: "Bir arkadaşımız tahtada fotoğrafını tanıtırken sözünü kesmeden, göz teması kurarak dinleriz." }
      ],
      myths: [
        { wrong: "Sınıf önünde konuşurken utanıp susmak en doğrusudur.", correct: "Hayır! Burası bizim sevgi dolu sınıfımız. Yanlış söylesek bile konuşmaya çalışmak cesaretimizi artırır." }
      ]
    },
    quiz: {
      question: "24 Kasım'da kutladığımız ve bize her gün yeni bilgiler öğreten kıymetli büyüklerimizin bayramı hangisidir?",
      options: [
        { text: "A) Öğretmenler Günü 👩‍🏫💐", isCorrect: true },
        { text: "B) İtfaiyeciler Günü 🚒", isCorrect: false },
        { text: "C) Astronotlar Günü 🚀", isCorrect: false },
        { text: "D) Bahçıvanlar Günü 🌻", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> 24 Kasım <strong>Öğretmenler Günü</strong>'dür. Başöğretmen Atatürk'ün izinde tüm öğretmenlerimize teşekkür ederiz!"
    },
    summaryRules: [
      { bold: "Öğretmenini Sev", text: "Öğretmenlerimize her gün saygıyla gülümse." },
      { bold: "Kendini Anlat", text: "Fotoğraflar anılarımızın en güzel aynasıdır." },
      { bold: "Haftaya Farkındalık", text: "Önümüzdeki hafta 3 Aralık Dünya Engelliler Günü ve Kış Mevsimi konuşması yapacağız!" }
    ],
    homework: "Öğretmeninize sevginizi anlatan küçük bir resim çizip altına adınızı yazın.",
    nextWeekPreview: "3 Aralık Dünya Engelliler Günü, Kış Mevsimi Sohbeti ve Eğlenceli Monolog Çalışması!"
  },

  // 12. HAFTA
  {
    week: 12,
    date: "30 Kasım - 06 Aralık",
    hours: "4 Ders Saati",
    unit: "3 Aralık Dünya Engelliler Günü ve Kış Mevsimi",
    unitBadge: "12. Tema: Empati & Mevsimler",
    unitTheme: "tema-3",
    title: "12. Hafta: 3 Aralık Dünya Engelliler Günü, Monolog ve Kış Mevsimi",
    subtitle: "Empatiyle Birbirimizi Anlama, Sahne Monoloğu ve Kış Şarkıları",
    outcomeCode: "SE.1.12 (Empati & Beden Dili)",
    targetSkill: "Monologda Beden Dilini Kullanabilme, Engelli Bireylere Empati Duyma ve Kış Mevsimini Yorumlama",
    curiosityQuestion: "Gözlerimizi bir anlığına kapatsak veya ses çıkarmadan sadece bedenimizle konuşsak dünyayı nasıl algılarız?",
    roadmap: [
      { title: "3 Aralık Engelliler Günü", desc: "Farklılıklarımızın zenginlik olduğunu ve sevginin engelleri aştığını öğrenme." },
      { title: "Monolog ve Mimik Atölyesi", desc: "Aynanın karşısındaymış gibi el-kol hareketleriyle kısa bir monolog canlandırma." },
      { title: "Kış Mevsimi Geldi", desc: "Havanın soğuması, kar yağışı, kış meyveleri ve kış giysileri hakkında konuşma." },
      { title: "Kardan Adam Tekerlemesi", desc: "Ritim tutarak eğlenceli kış tekerlemelerini hep birlikte seslendirme." }
    ],
    section1: {
      title: "Sevgi Engel Tanımaz: Empati Köprüsü",
      subtitle: "Hepimiz birer çiçeğiz; bazılarımız farklı açar ama hepimiz dünyayı güzelleştiririz.",
      layout: "split-visual",
      card: {
        title: "Monolog Nedir? (Tek Başına Konuşma)",
        icon: "🎭❄️",
        desc: "Sahnede monolog yaparken:",
        items: [
          { bold: "1. Jest ve Mimik", text: "Yüzümüz ve ellerimiz söylediklerimize eşlik eder (sevinç, merak, şaşkınlık)." },
          { bold: "2. Göz Teması", text: "Yere veya tavana değil, dinleyen arkadaşlarımızın gözlerine bakarız." },
          { bold: "3. Doğal Ses Tonu", text: "Ne bağırırız ne fısıldarız; herkesin duyabileceği tatlı bir sesle konuşuruz." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#38bdf8" text-anchor="middle">3 ARALIK DÜNYA ENGELLİLER GÜNÜ & KIŞ MEVSİMİ</text>

        <!-- Empati & Destek (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🧑‍🦽🤝👧</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Sevgi Engelleri Aşar</text>
        <text x="155" y="175" font-size="9" fill="#cbd5e1" text-anchor="middle">Rampa, sarı çizgi ve empati</text>
        <text x="155" y="195" font-size="9" fill="#cbd5e1" text-anchor="middle">Arkadaşımıza el uzatırız</text>

        <!-- Kış Mevsimi & Sahne (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">⛄❄️🧤</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Hoş Geldin Kış!</text>
        <text x="385" y="175" font-size="9" fill="#cbd5e1" text-anchor="middle">Kar tanesi gibi tertemiz</text>
        <text x="385" y="195" font-size="9" fill="#cbd5e1" text-anchor="middle">Kışın güzelliklerini konuşuyoruz</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#38bdf8" text-anchor="middle">Farklılıklar engel değil, hayatımızın en tatlı renkleridir!</text>
      </svg>`
    },
    section2: {
      title: "Kış Mevsimi Sohbeti ve Sahne Heyecanı",
      subtitle: "Kış mevsiminde doğanın uykusunu ve sokaktaki minik dostlarımızı konuşuyoruz.",
      cards: [
        {
          badge: "Farkındalık",
          title: "Yardımsever Eller",
          desc: "Tekerlekli sandalyeli veya beyaz bastonlu birine yol verme ve kibarca yardım teklif etme."
        },
        {
          badge: "Monolog",
          title: "Kardan Adam Konuşuyor",
          desc: "'Merhaba çocuklar, havalar çok soğuk ama ben kar yağdığı için çok mutluyum!' monoloğu."
        },
        {
          badge: "Mevsim",
          title: "Kışın Ne Giyeriz?",
          desc: "Bere, atkı, eldiven ve mont giyerek soğuktan korunma; mandalina ve portakal yeme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Drama: 'Gözlerim Kapalı Dünyayı Dinliyorum'",
      desc: "Öğrenciler sırayla gözlerini kapatıp arkadaşlarının çıkardığı sesleri (alkış, zil, yaprak hışırtısı) tahmin eder.",
      steps: [
        { title: "Empati Çemberi", desc: "Gözleri görmeyen birinin bastonuyla veya kulaklarıyla dünyayı nasıl hissettiğini konuşma." },
        { title: "Kardan Adam Monoloğu", desc: "İsteyen öğrencilerin kardan adam şapkası takıp 2 cümlelik monolog söylemesi." },
        { title: "Kış Şarkısı", desc: "'Kış Baba' şarkısını hareketlerle ve gülümseyerek koro halinde seslendirme." }
      ],
      criteria: [
        "Engelli bireylerin yaşam koşullarına karşı duyarlılık ve empati gösterebilme",
        "Topluluk önünde monolog söylerken ses tonu ve jestlerini ayarlayabilme",
        "Kış mevsiminin özelliklerini doğru ifade edebilme"
      ]
    },
    tips: {
      safetyTitle: "Kış Güvenliği ve Sosyal Saygı",
      safetyRules: [
        { bold: "Buzlu Yollarda Dikkat", text: "Kışın buzlu zeminlerde ellerimiz cebimizde yürümemeliyiz; dengemizi korumak için küçük adımlar atmalıyız." }
      ],
      myths: [
        { wrong: "Engelli bireyler kendi işlerini asla yapamaz, her zaman yardıma muhtaçtırlar.", correct: "Hayır! Uygun yollar, rampalar ve asansörler olduğunda engelli arkadaşlarımız her başarıya imza atabilirler." }
      ]
    },
    quiz: {
      question: "3 Aralık Dünya Engelliler Günü'nde yapabileceğimiz en doğru ve güzel davranış hangisidir?",
      options: [
        { text: "A) Engelli arkadaşlarımıza sevgiyle yaklaşıp ihtiyaç duyduklarında yardım etmek. 🤝", isCorrect: true },
        { text: "B) Görme engellilerin yürüdüğü sarı kabartmalı yollara araba veya eşya koymak.", isCorrect: false },
        { text: "C) Onlara şaşkın şaşkın bakıp parmakla göstermek.", isCorrect: false },
        { text: "D) Tekerlekli sandalye rampasının önüne geçip durmak.", isCorrect: false }
      ],
      explanation: "🎉 <strong>Bravo, Doğru Cevap: A!</strong> Gerçek engel bedenlerde değil, sevgisiz kalplerdedir. <strong>Empati ve yardımseverlik</strong> en büyük erdemdir!"
    },
    summaryRules: [
      { bold: "Engelleri Kaldır", text: "Herkes için erişilebilir bir dünya kuralım." },
      { bold: "Kışa Hazır Ol", text: "Atkını, bereni tak; kışın güzelliklerini yaşa." },
      { bold: "Haftaya Haklarımızı Öğreniyoruz", text: "Önümüzdeki hafta 10 Aralık İnsan Hakları ve Demokrasi Haftası'nı kutlayacağız!" }
    ],
    homework: "Evinizin penceresinden kış mevsimini gözlemleyin ve kuşlar için balkona birkaç parça ekmek kırıntısı koyun.",
    nextWeekPreview: "10 Aralık İnsan Hakları ve Demokrasi Haftası, Tekerlemeler ve Zihin Açan Bulmacalar!"
  },

  // 13. HAFTA
  {
    week: 13,
    date: "07 - 13 Aralık",
    hours: "4 Ders Saati",
    unit: "10 Aralık İnsan Hakları ve Demokrasi Haftası",
    unitBadge: "13. Tema: Haklar & Adalet",
    unitTheme: "tema-3",
    title: "13. Hafta: 10 Aralık İnsan Hakları, Tekerleme ve Eğitici Oyunlar",
    subtitle: "Çocuk Hakları, Sınıfta Oy Kullanma, Ritmik Tekerlemeler ve Film",
    outcomeCode: "SE.1.13 (Hak & Birlikte Yaşam)",
    targetSkill: "Çocuk Haklarının Farkında Olma, Demokratik Karar Alma ve Ritmik Tekerleme Söyleme",
    curiosityQuestion: "Dünyadaki tüm çocukların aynı haklara sahip olması sence neden çok önemlidir?",
    roadmap: [
      { title: "Çocuk Hakları Nelerdir?", desc: "Oyun oynama, eğitim alma, beslenme ve sevilme hakkımızı öğrenme." },
      { title: "Sınıf İçi Seçim Oyunu", desc: "Hangi oyunun oynanacağına parmak kaldırarak demokratik biçimde karar verme." },
      { title: "Eğlenceli Tekerlemeler", desc: "'Komşu komşu hu / Oğlun geldi mi?' tekerlemesini koro halinde söyleme." },
      { title: "Dostluk Filmi ve Bulmaca", desc: "Birlikte yaşama kültürünü anlatan çizgi filmi izleyip labirent bulmacası çözme." }
    ],
    section1: {
      title: "Çocuk Hakları: Gülen Çocuklar Dünyası",
      subtitle: "Her çocuğun sağlıkla büyüme, okula gitme ve neşeyle oyun oynama hakkı vardır.",
      layout: "split-visual",
      card: {
        title: "Temel Çocuk Haklarımız",
        icon: "⚖️🎈",
        desc: "Haklarımızı biliyor ve koruyoruz:",
        items: [
          { bold: "1. Yaşama ve Sağlık", text: "Temiz su içmek, sağlıklı beslenmek ve hastalanınca doktora gitmek hakkımızdır." },
          { bold: "2. Okuma ve Öğrenme", text: "Her çocuk okula gider, kitap okur ve yeni şeyler öğrenir." },
          { bold: "3. Oyun ve Eğlence", text: "Parkta koşmak, oyuncaklarla oynamak ve güvende olmak her çocuğun hakkıdır." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#34d399" text-anchor="middle">10 ARALIK İNSAN HAKLARI & ÇOCUK HAKLARI</text>

        <!-- 3 Temel Hak Rozeti -->
        <!-- Rozet 1: Eğitim -->
        <g transform="translate(60,85)">
          <circle cx="65" cy="50" r="42" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="65" y="58" font-size="28" text-anchor="middle">📚</text>
          <text x="65" y="110" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Eğitim Hakkı</text>
        </g>

        <!-- Rozet 2: Oyun -->
        <g transform="translate(205,85)">
          <circle cx="65" cy="50" r="42" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="65" y="58" font-size="28" text-anchor="middle">⚽🪁</text>
          <text x="65" y="110" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Oyun Hakkı</text>
        </g>

        <!-- Rozet 3: Sağlık ve Sevgi -->
        <g transform="translate(350,85)">
          <circle cx="65" cy="50" r="42" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="65" y="58" font-size="28" text-anchor="middle">🏥❤️</text>
          <text x="65" y="110" font-size="11" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Sağlık & Sevgi</text>
        </g>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#34d399" text-anchor="middle">Fikirlerimizi söylemek ve kararlara katılmak demokrasinin temelidir!</text>
      </svg>`
    },
    section2: {
      title: "Demokrasi Oyunu ve Tekerleme Coşkusu",
      subtitle: "Birlikte karar verir, çoğunluğun seçimine saygı duyarız.",
      cards: [
        {
          badge: "Demokrasi",
          title: "Sınıf Sandığı",
          desc: "Teneffüste hangi oyunun oynanacağını el kaldırarak oylama; sonuca saygı duyma."
        },
        {
          badge: "Tekerleme",
          title: "Komşu Komşu Hu!",
          desc: "Sözleri karıştırmadan, hızlanıp yavaşlayarak ritimle tekerleme söyleme."
        },
        {
          badge: "Bulmaca",
          title: "Labirentte Yolunu Bul",
          desc: "Çocuğun okul çantasına ulaşması için çizgiyi duvarlara değdirmeden çizme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Uygulama: 'Demokratik Oyun Seçimi ve Tekerleme Yarışması'",
      desc: "Sınıfça 2 oyun adayı belirlenir, oylama yapılır ve kazanan oyun kurallarına göre oynanır.",
      steps: [
        { title: "Adayları Belirle", desc: "Mendil kapmaca mı yoksa Deve-Cüce mi oynayacağımızı tahtaya yazma." },
        { title: "Oy Sayımı", desc: "Herkes tek bir oy kullanır; oylar sayılarak tahtaya yazılır." },
        { title: "Kazananı Kutla", desc: "Kendi istediği oyun çıkmasa bile çoğunluğun seçtiği oyunu neşeyle oynama." }
      ],
      criteria: [
        "Temel çocuk haklarını açıklayabilme",
        "Demokratik oylama sonucuna saygı duyup uyum sağlayabilme",
        "Tekerlemeyi ritmine uygun ve doğru sözlerle seslendirebilme"
      ]
    },
    tips: {
      safetyTitle: "Birlikte Yaşam Kültürü",
      safetyRules: [
        { bold: "Söz Hakkına Saygı", text: "Arkadaşımız fikrini söylerken onunla dalga geçilmez; herkesin düşüncesi değerlidir." }
      ],
      myths: [
        { wrong: "Sadece benim dediğim oyun oynanmalı, yoksa oyuna küserim.", correct: "Hayır! Demokraside çoğunluğun kararına saygı duyulur; küsmek yerine arkadaşlığın tadı çıkarılır." }
      ]
    },
    quiz: {
      question: "Aşağıdakilerden hangisi dünyadaki tüm çocukların sahip olduğu en doğal haklardan biridir?",
      options: [
        { text: "A) Okula gitmek, oyun oynamak ve sağlıklı beslenmek 📚⚽", isCorrect: true },
        { text: "B) Bütün gün ağır işlerde çalışmak", isCorrect: false },
        { text: "C) Sürekli azarlanmak ve korkutulmak", isCorrect: false },
        { text: "D) Hiç uyumadan sokakta dolaşmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Çocuk Hakları Sözleşmesi'ne göre tüm çocuklar <strong>eğitim alma, oynama ve güvende büyüme</strong> hakkına sahiptir!"
    },
    summaryRules: [
      { bold: "Hakkını Bil", text: "Sen değerlisin, haklarınla güçlüsün." },
      { bold: "Karara Saygı Duy", text: "Demokrasi birlikte yaşamayı güzelleştirir." },
      { bold: "Haftaya Tutum ve Yerli Malı!", text: "Önümüzdeki hafta Tutum, Yatırım ve Türk Malları Haftası'nı kutlayacağız!" }
    ],
    homework: "Ailenize çocuk hakları hakkında okulda öğrendiğiniz 3 güzel kuralı anlatın.",
    nextWeekPreview: "12-18 Aralık Tutum ve Türk Malları Haftası, Meyve Şarkıları ve Harf Bulmacaları!"
  },

  // 14. HAFTA
  {
    week: 14,
    date: "14 - 20 Aralık",
    hours: "4 Ders Saati",
    unit: "12-18 Aralık Tutum, Yatırım ve Türk Malları Haftası",
    unitBadge: "14. Tema: Tasarruf & Bereket",
    unitTheme: "tema-3",
    title: "14. Hafta: Yerli Malı Haftası, Harf Bulmacası ve Masallar",
    subtitle: "Tutumlu Olmak, Ülkemizin Zenginlikleri, Meyve Şarkıları ve Masal Saati",
    outcomeCode: "SE.1.14 (Tutum & Milli Bilinç)",
    targetSkill: "Tutumlu Olmanın Önemini Kavrama, Türk Mallarını Tanıma, Harf Bulmacası Çözme ve Masal Dinleme",
    curiosityQuestion: "Bir kumbaraya atılan minik bozuk paralar zamanla nasıl büyük bir hayale veya faydalı bir kitaba dönüşür?",
    roadmap: [
      { title: "Yerli Malı ve Tutum", desc: "Ülkemizde üretilen meyve, sebze ve ürünleri tercih etmenin önemi." },
      { title: "Harf Bulmacası Atölyesi", desc: "Öğrendiğimiz harflerle meyve isimlerini (elma, armut, ceviz) bulma." },
      { title: "Meyveler Konuşuyor Şarkısı", desc: "'Elmayı, portakalı unutma / Bol vitamin var onda' şarkısını koro ile söyleme." },
      { title: "Ağustos Böceği ve Karınca", desc: "Tutumlu olmanın ve çalışkanlığın değerini anlatan masalı dinleyip yorumlama." }
    ],
    section1: {
      title: "Yerli Malı Yurdun Malı: Herkes Onu Kullanmalı",
      subtitle: "Kendi toprağımızın bereketi, kendi insanımızın emeği ülkemizi zenginleştirir.",
      layout: "split-visual",
      card: {
        title: "Tutumlu Çocuğun 3 Kuralı",
        icon: "🍎🧺",
        desc: "Nasıl tutumlu oluruz?",
        items: [
          { bold: "1. İhtiyacın Kadar Al", text: "Tabağına yiyebileceğin kadar yemek koy, ekmeği ve yiyecekleri israf etme." },
          { bold: "2. Eşyalarını Koru", text: "Kalemlerini, silgini ve defterini özenle kullan, hemen kaybetme." },
          { bold: "3. Kumbarana Biriktir", text: "Harçlığının bir kısmını kumbarana atarak geleceğe yatırım yap." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#14532d" stroke="#facc15" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fde047" text-anchor="middle">TUTUM, YATIRIM VE TÜRK MALLARI HAFTASI (869)</text>

        <!-- Yerli Ürün Sepeti (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#166534" stroke="#86efac" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">🍎🍊🥜🍇</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fef08a" text-anchor="middle">Anadolu Bereketi</text>
        <text x="155" y="175" font-size="9" fill="#dcfce7" text-anchor="middle">Malatya kayısısı, Rize çayı</text>
        <text x="155" y="195" font-size="9" fill="#dcfce7" text-anchor="middle">Aydın inciri, Amasya elması</text>

        <!-- Kumbara ve 869 Barkod (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#166534" stroke="#facc15" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🪙🐖🏷️</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Yerli Barkod: 869</text>
        <text x="385" y="175" font-size="9" fill="#dcfce7" text-anchor="middle">Barkodun ilk 3 rakamı 869</text>
        <text x="385" y="195" font-size="9" fill="#dcfce7" text-anchor="middle">ise ülkemizde üretilmiştir!</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fde047" text-anchor="middle">Tasarruf eden çocuk, geleceğini aydınlatan çocuktur!</text>
      </svg>`
    },
    section2: {
      title: "Meyve Şarkıları ve Masal Köşesi",
      subtitle: "Hem vitamin depolarız hem de tasarrufun değerini kavrarız.",
      cards: [
        {
          badge: "Şarkı",
          title: "Meyveler Korosu",
          desc: "Her öğrenci bir meyvenin rolünü alır (Portakal: C vitaminiyim, Nar: bin taneyim!)."
        },
        {
          badge: "Bulmaca",
          title: "Seslerden Kelimeye",
          desc: "Öğrendiğimiz harflerle kutuları doldurma: E-L-M-A, N-A-R, K-E-S-T-A-N-E."
        },
        {
          badge: "Masal",
          title: "Karıncanın Dersi",
          desc: "Yazın çalışıp kışa hazırlık yapan karınca ile tembel ağustos böceğinin hikâyesi."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Yerli Malı Meyve Şenliği ve Kumbara Tasarımı'",
      desc: "Öğrenciler evden getirdikleri kuru yemiş ve meyveleri paylaşır; boş kutulardan kumbara yapar.",
      steps: [
        { title: "Meyve Paylaşımı", desc: "Elma, fındık ve mandalinaları arkadaşlarımızla kardeşçe paylaşma." },
        { title: "Kumbara Süsleme", desc: "Karton kutuyu boyayıp üzerine 'Tasarruf Sandığım' yazma." },
        { title: "Barkod Avı", desc: "Sınıftaki ürünlerin barkodunda '869' sayısını bulup inceleme." }
      ],
      criteria: [
        "Tutumlu olma ve kaynakları israf etmeme bilinci gösterebilme",
        "Türk mallarının ve yerli üretimin önemini kavrayabilme",
        "Grup içinde adaletli ve cömertçe paylaşımda bulunabilme"
      ]
    },
    tips: {
      safetyTitle: "Sağlıklı Beslenme ve Tasarruf",
      safetyRules: [
        { bold: "Meyveleri Yıkayarak Ye", text: "Meyveleri yemeden önce bol suyla mutlaka yıkarız; kabuklarını çöpe değil organik atığa atarız." }
      ],
      myths: [
        { wrong: "Yabancı marka eşyalar her zaman yerli ürünlerden daha kalitelidir.", correct: "Hayır! Ülkemizde üretilen Türk malları hem çok kaliteli hem de ülkemizin çiftçisini ve işçisini destekler." }
      ]
    },
    quiz: {
      question: "Türkiye'de üretilen yerli ürünlerin barkod numaraları genellikle hangi 3 rakamla başlar?",
      options: [
        { text: "A) 869 🇹🇷", isCorrect: true },
        { text: "B) 111", isCorrect: false },
        { text: "C) 999", isCorrect: false },
        { text: "D) 000", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Türkiye'de üretilen yerli ürünlerin barkodu <strong>869</strong> ile başlar. Alışveriş yaparken 869 barkodunu ararız!"
    },
    summaryRules: [
      { bold: "Yerli Malı Seç", text: "Ülkemizin zenginliklerine sahip çık." },
      { bold: "Tutumlu Ol", text: "Gereksiz harcama yapma, kumbarana sahip çık." },
      { bold: "Haftaya Güzel Konuşma", text: "Önümüzdeki hafta etkili konuşma kuralları ve sorun çözme atölyesi yapacağız!" }
    ],
    homework: "Evinizdeki mutfakta bulunan 3 ürünün barkoduna bakın ve 869 yazısını bulun.",
    nextWeekPreview: "Etkili Konuşma Kuralları, Sorun Çözme Çemberi ve Renkli Kes-Yapıştır Sanatı!"
  },

  // 15. HAFTA
  {
    week: 15,
    date: "21 - 27 Aralık",
    hours: "4 Ders Saati",
    unit: "Etkili Konuşma, Sorun Çözme ve Sanat",
    unitBadge: "15. Tema: İletişim & Çözüm",
    unitTheme: "tema-3",
    title: "15. Hafta: Konuşma Kuralları, Sorun Çözme ve Kes-Yapıştır",
    subtitle: "İyi Bir Konuşmacı Olmak, Anlaşmazlıkları Konuşarak Çözme ve Kolaj",
    outcomeCode: "SE.1.15 (Sözlü İletişim & Uzlaşma)",
    targetSkill: "Topluluk Önünde Kurallara Uygun Konuşabilme, Sorunlara Barışçıl Çözüm Bulma ve El Becerisi",
    curiosityQuestion: "İki arkadaş aynı oyuncakla aynı anda oynamak isterse kavga etmeden nasıl harika bir çözüm bulabilirler?",
    roadmap: [
      { title: "İyi Bir Konuşmacı", desc: "Göz teması kurma, anlaşılır ses tonu ve söz kesmeden dinleme kuralları." },
      { title: "Sorun Çözme Masası", desc: "Sınıftaki anlaşmazlıkları 'Önce sen anlat, sonra ben anlatayım' yöntemiyle çözme." },
      { title: "Nelerden Hoşlanırım?", desc: "Her öğrencinin en sevdiği renk, oyun ve yemeği kürsüde anlatması." },
      { title: "Kış Manzarası Kolajı", desc: "Mavi fon kâğıdına pamuktan karlar ve kâğıttan çam ağaçları yapıştırma." }
    ],
    section1: {
      title: "Büyülü Konuşma: Dinleten ve Güven Veren Sözler",
      subtitle: "Doğru kelimeleri sevgiyle söyleyen insanın kalbi herkesi büyüler.",
      layout: "split-visual",
      card: {
        title: "Konuşurken Nelere Dikkat Ederiz?",
        icon: "🗣️🌟",
        desc: "İyi bir konuşmacının altın kuralları:",
        items: [
          { bold: "1. Tane Tane Konuş", text: "Kelimeleri yutmadan, acele etmeden, dinleyenin anlayacağı hızda konuşuruz." },
          { bold: "2. Gözlere Bak", text: "Dinleyicilerin yüzüne bakarız; yere veya tavana bakmak ilgisiz görünür." },
          { bold: "3. Sihirli Sözler Kat", text: "'Lütfen, rica ederim, özür dilerim' sözleri sorunları anında çözer." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#a5b4fc" text-anchor="middle">SORUN ÇÖZME & ETKİLİ KONUŞMA BASAMAKLARI</text>

        <!-- Basamak 1: Dur ve Sakinleş -->
        <g transform="translate(60,85)">
          <rect x="0" y="0" width="120" height="130" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
          <text x="60" y="40" font-size="28" text-anchor="middle">🛑🧘</text>
          <text x="60" y="70" font-size="11" font-weight="bold" fill="#c7d2fe" text-anchor="middle">1. Dur & Dinle</text>
          <text x="60" y="95" font-size="8.5" fill="#e0e7ff" text-anchor="middle">Öfkeni kontrol et</text>
          <text x="60" y="110" font-size="8.5" fill="#e0e7ff" text-anchor="middle">Derin nefes al</text>
        </g>

        <!-- Basamak 2: Duygunu Söyle -->
        <g transform="translate(210,85)">
          <rect x="0" y="0" width="120" height="130" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
          <text x="60" y="40" font-size="28" text-anchor="middle">💬❤️</text>
          <text x="60" y="70" font-size="11" font-weight="bold" fill="#c7d2fe" text-anchor="middle">2. Duygunu Anlat</text>
          <text x="60" y="95" font-size="8.5" fill="#e0e7ff" text-anchor="middle">'Sıramı alınca</text>
          <text x="60" y="110" font-size="8.5" fill="#e0e7ff" text-anchor="middle">üzüldüm' de</text>
        </g>

        <!-- Basamak 3: Ortak Çözüm Bul -->
        <g transform="translate(360,85)">
          <rect x="0" y="0" width="120" height="130" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
          <text x="60" y="40" font-size="28" text-anchor="middle">🤝🎉</text>
          <text x="60" y="70" font-size="11" font-weight="bold" fill="#c7d2fe" text-anchor="middle">3. Çözüm Üret</text>
          <text x="60" y="95" font-size="8.5" fill="#e0e7ff" text-anchor="middle">Sırayla oynayalım</text>
          <text x="60" y="110" font-size="8.5" fill="#e0e7ff" text-anchor="middle">veya paylaşalım</text>
        </g>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#a5b4fc" text-anchor="middle">Kavga değil, tatlı dil bütün kapıları açar!</text>
      </svg>`
    },
    section2: {
      title: "Sorun Çözme Masası ve Kış Kolajı",
      subtitle: "Parmak kaldırmayı bilir, el işiyle sabrı öğreniriz.",
      cards: [
        {
          badge: "Barış",
          title: "Sırayla Paylaş",
          desc: "Biri 5 dakika oynar, sonra diğerine verir; kum saatiyle adaletli süre tutma."
        },
        {
          badge: "İfade",
          title: "Ben Nelerden Hoşlanırım?",
          desc: "Kürsüye çıkıp 'En çok resim yapmayı ve kedileri severim' diyerek kendini tanıtma."
        },
        {
          badge: "El İşi",
          title: "Pamuktan Kardan Adam",
          desc: "Karton üzerine pamuk yapıştırıp düğmeler ve minik bir havuç burnu ekleme."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Rol Oynama: 'Barış Masasında İki Dost'",
      desc: "İki öğrenci boya kalemini paylaşamayan iki arkadaşı canlandırır ve barışçıl bir çözüm bulur.",
      steps: [
        { title: "Durumu Canlandır", desc: "İki arkadaşın aynı kırmızı kalemi isteme anını sahneleme." },
        { title: "Çözüm Önerileri", desc: "Sınıftaki diğer öğrencilerden çözüm önerileri toplama." },
        { title: "Anlaşma ve Tokalaşma", desc: "'Sen resmi bitirene kadar ben sarıyı kullanayım' diyerek tokalaşma." }
      ],
      criteria: [
        "Öfkelenmeden duygularını sözcüklerle ifade edebilme",
        "Karşılaştığı bir anlaşmazlığa yapıcı çözüm üretebilme",
        "Kolaj çalışmasında malzemeleri temiz ve düzenli kullanabilme"
      ]
    },
    tips: {
      safetyTitle: "İletişim Adabı",
      safetyRules: [
        { bold: "Söz Kesilmez", text: "Bir arkadaşımız konuşurken araya girilmez; söz hakkı almak için parmak kaldırıp sıramızı bekleriz." }
      ],
      myths: [
        { wrong: "En çok bağıran ve en sert konuşan haklı çıkar.", correct: "Hayır! Haklı olmak bağırmakla değil, sakin ve saygılı kelimelerle açıklamakla anlaşılır." }
      ]
    },
    quiz: {
      question: "Sınıfta bir arkadaşımızla aynı kitabı aynı anda okumak istersek en doğru davranış hangisidir?",
      options: [
        { text: "A) 'Gel yan yana oturalım, resimlerine birlikte bakalım' demek 📖🤝", isCorrect: true },
        { text: "B) Kitabı çekip yırtmak", isCorrect: false },
        { text: "C) Arkadaşımıza küsüp ağlamak", isCorrect: false },
        { text: "D) Kitabı saklayıp kimseye vermemek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Birlikte okumak veya sırayla incelemek <strong>hem dostluğu pekiştirir hem de sorunu çözer</strong>!"
    },
    summaryRules: [
      { bold: "Tatlı Dilli Ol", text: "Kelimelerin gücünü sevgiyle kullan." },
      { bold: "Sorunu Konuş", text: "Kavga yok, anlaşma ve paylaşma var." },
      { bold: "Haftaya Bilmeceler!", text: "Önümüzdeki hafta zihin açan bilmeceler ve geometrik kenar süsleri yapacağız!" }
    ],
    homework: "Evde kardeşiniz veya ailenizle yaşadığınız küçük bir anlaşmazlığı konuşarak çözün.",
    nextWeekPreview: "Sınıf İçi Eğlenceli Oyunlar, Defter Kenar Süsü, Bilmeceler ve Boyama!"
  },

  // 16. HAFTA
  {
    week: 16,
    date: "28 Aralık - 03 Ocak",
    hours: "4 Ders Saati",
    unit: "Oyunlar, Zeka Bilmeceleri ve Kenar Süsleri",
    unitBadge: "16. Tema: Zeka & Oyun",
    unitTheme: "tema-3",
    title: "16. Hafta: Oyun Oynama, Kenar Süsü, Bilmeceler ve Boyama",
    subtitle: "Zihni Canlandıran Bilmeceler, Defter Estetiği ve Taşırmadan Boyama",
    outcomeCode: "SE.1.16 (Zeka Oyunları & Estetik)",
    targetSkill: "Bilmeceleri Dinleyip Akıl Yürütebilme, Kenar Süsü Çizebilme ve Temiz Boyama Yapabilme",
    curiosityQuestion: "'Ne ağzı var ne dili, konuşur insan gibi!' Bu bilmecenin cevabı sence ne olabilir?",
    roadmap: [
      { title: "Zeka ve Mantık Bilmeceleri", desc: "Doğa, hayvanlar ve eşyalarla ilgili eğlenceli bilmeceleri çözme." },
      { title: "Geometrik Kenar Süsü", desc: "Defter kenarına üçgen ve papatya desenli yeni bir ritmik süs tasarlama." },
      { title: "Sınıf İçi Eğitsel Oyun", desc: "Mendil kapmaca veya köşe kapmaca oyunuyla takım ruhunu güçlendirme." },
      { title: "Yeni Yıl Boyama Sayfası", desc: "Kardan adam ve çam ağacı resmini sınırları taşırmadan boyama." }
    ],
    section1: {
      title: "Bilmeceler Dünyası: Zihnin Şifreleri",
      subtitle: "Bilmeceler bize kelimelerin ardındaki gizli ipuçlarını bulmayı ve düşünmeyi öğretir.",
      layout: "split-visual",
      card: {
        title: "Bilmeceleri Nasıl Çözeriz?",
        icon: "🧩💡",
        desc: "İpuçlarını takip etme sanatı:",
        items: [
          { bold: "1. Dikkatle Dinle", text: "Bilmecenin içinde geçen kelimelere odaklan: 'Uçar mı, yüzer mi, kanadı var mı?'" },
          { bold: "2. Eşyaları Karşılaştır", text: "'Konuşur insan gibi' dendiğinde aklına konuşan eşyalar (kitap, radyo) gelsin." },
          { bold: "3. Arkadaşlarınla Paylaş", text: "Yeni öğrendiğin bir bilmeceyi ailene sorarak onları da şaşırt!" }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#18181b" stroke="#f59e0b" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#fbbf24" text-anchor="middle">ZEKA BİLMECESİ VE DEFTER KENAR SÜSÜ</text>

        <!-- Bilmece Kartı (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#27272a" stroke="#fbbf24" stroke-width="2"/>
        <text x="155" y="115" font-size="28" text-anchor="middle">📖✨</text>
        <text x="155" y="140" font-size="10.5" font-weight="bold" fill="#fde047" text-anchor="middle">Ne ağzı var ne dili,</text>
        <text x="155" y="160" font-size="10.5" font-weight="bold" fill="#fde047" text-anchor="middle">Konuşur insan gibi?</text>
        <rect x="95" y="175" width="120" height="26" rx="6" fill="#09090b" stroke="#71717a" stroke-width="1"/>
        <text x="155" y="192" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">Cevap: KİTAP</text>

        <!-- Ritmik Kenar Süsü (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#ffffff" stroke="#e4e4e7" stroke-width="2"/>
        <text x="385" y="105" font-size="10" font-weight="bold" fill="#09090b" text-anchor="middle">Örüntü: Çiçek 🌸 + Yıldız ⭐</text>
        <!-- Desen Şeridi -->
        <line x1="305" y1="120" x2="465" y2="120" stroke="#f43f5e" stroke-width="2"/>
        <text x="325" y="145" font-size="16" text-anchor="middle">🌸</text>
        <text x="355" y="145" font-size="16" text-anchor="middle">⭐</text>
        <text x="385" y="145" font-size="16" text-anchor="middle">🌸</text>
        <text x="415" y="145" font-size="16" text-anchor="middle">⭐</text>
        <text x="445" y="145" font-size="16" text-anchor="middle">🌸</text>
        <line x1="305" y1="165" x2="465" y2="165" stroke="#f43f5e" stroke-width="2"/>
        <text x="385" y="195" font-size="9" font-weight="bold" fill="#52525b" text-anchor="middle">Defter Kenar Çizgisi</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#fbbf24" text-anchor="middle">Bilmeceler düşündürür, kenar süsleri defterimizi parlatır!</text>
      </svg>`
    },
    section2: {
      title: "Oyun Kuralları ve Boyama Disiplini",
      subtitle: "Oyunda saygı, boyamada sabır ve düzen bizi başarıya taşır.",
      cards: [
        {
          badge: "Oyun Adabı",
          title: "Kazananı Tebrik Et",
          desc: "Oyunu kaybedince öfkelenmemek, kazanan arkadaşımızın elini sıkıp 'Tebrikler' demek."
        },
        {
          badge: "El Becerisi",
          title: "Sınırları Koruma",
          desc: "Boya kalemini kâğıdın dışına taşırmadan, beyaz boşluk bırakmadan aynı yönde sürme."
        },
        {
          badge: "Bilmeceler",
          title: "Yeni Bir Bilmece",
          desc: "'Uzaktan baktım bir taş, yanına vardım dört ayak bir baş!' (Cevap: Kaplumbağa)."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Bilmeceni Sor, Arkadaşın Bilsin!'",
      desc: "Her öğrenci bildiği bir bilmeceyi parmak kaldırarak sorar; doğru bilen panoya yıldız yapıştırır.",
      steps: [
        { title: "Bilmeceni Hazırla", desc: "Zihninden bir hayvan veya eşya seçip özelliklerini düşünme." },
        { title: "Sınıfa Sor", desc: "İşitilebilir bir sesle bilmeceyi sınıfa yöneltme." },
        { title: "Defterini Süsle", desc: "Yazı defterinin kenarına çiçek ve yıldız örüntüsünü hatasız tamamlama." }
      ],
      criteria: [
        "Bilmeceleri dinlerken sabırlı olmak ve parmak kaldırarak cevap vermek",
        "Kenar süsü örüntüsünü kurallara uygun sürdürebilme",
        "Boyama yaparken temizliğe ve çizgi sınırlarına dikkat edebilme"
      ]
    },
    tips: {
      safetyTitle: "Boya Kalemleri ve Düzen",
      safetyRules: [
        { bold: "Kalemleri Masada Tut", text: "Boya kalemlerini yere düşürmemek için boyama biter bitmez kutusuna veya kalemliğe yerleştiririz." }
      ],
      myths: [
        { wrong: "Hızlı boyamak iyi boyamaktır.", correct: "Hayır! Önemli olan hız değil, çizgi sınırlarını taşırmadan ve boşluk bırakmadan özenle boyamaktır." }
      ]
    },
    quiz: {
      question: "'Uzaktan baktım bir taş, yanına vardım dört ayak bir baş!' bilmecesinin doğru cevabı hangisidir?",
      options: [
        { text: "A) Kaplumbağa 🐢", isCorrect: true },
        { text: "B) Uçak ✈️", isCorrect: false },
        { text: "C) Masa 🪑", isCorrect: false },
        { text: "D) Ayakkabı 👟", isCorrect: false }
      ],
      explanation: "🎉 <strong>Bravo, Doğru Cevap: A!</strong> Sert kabuğuyla taşa benzeyen, dört ayağı ve bir başı olan sevimli hayvanımız <strong>kaplumbağadır 🐢</strong>!"
    },
    summaryRules: [
      { bold: "Zihnini Çalıştır", text: "Bilmecelerle düşünmeyi öğren." },
      { bold: "Defterini Sev", text: "Kenar süsleri defterine zarafet katar." },
      { bold: "Haftaya Fıkralar!", text: "Önümüzdeki hafta Nasreddin Hoca fıkraları ve şarkılı oyunlar oynayacağız!" }
    ],
    homework: "Ailenizden yeni bir bilmece öğrenin ve cevabıyla birlikte aklınızda tutun.",
    nextWeekPreview: "Fıkra Anlatma Atölyesi, Monolog ve Şarkılı Oyunlar!"
  },

  // 17. HAFTA
  {
    week: 17,
    date: "04 - 10 Ocak",
    hours: "4 Ders Saati",
    unit: "Gülmece Kültürü, Fıkralar ve Şarkılı Oyunlar",
    unitBadge: "17. Tema: Mizah & Neşe",
    unitTheme: "tema-3",
    title: "17. Hafta: Fıkra Anlatma, Monolog ve Şarkılı Oyunlar",
    subtitle: "Nasreddin Hoca'dan Düşündüren Güldürüler, Sahne Monoloğu ve Dans",
    outcomeCode: "SE.1.17 (Mizah & Sahne Sanatı)",
    targetSkill: "Fıkraları Jest ve Mimiklerle Anlatabilme, Dinleme Nezaketi Gösterme ve Şarkılı Oyunlara Eşlik Etme",
    curiosityQuestion: "Nasreddin Hoca göle yoğurt çalarken 'Ya tutarsa!' diyerek bize umut hakkında ne öğretmek istemiştir?",
    roadmap: [
      { title: "Nasreddin Hoca Fıkraları", desc: "'Parayı veren düdüğü çalar' ve 'Göle maya çalmak' fıkralarını öğrenme." },
      { title: "Fıkra Anlatma Kürsüsü", desc: "Tahtaya çıkıp ses tonunu değiştirerek komik ve düşündürücü fıkra anlatma." },
      { title: "Monolog Çalışması", desc: "Hoca'nın cübbesini giymiş gibi eşeğe ters binen Hoca monoloğu sergileme." },
      { title: "Şarkılı Oyunlar", desc: "'Kutu Kutu Pense' ve 'Yağ Satarım Bal Satarım' şarkılı oyunlarını oynama." }
    ],
    section1: {
      title: "Gülerken Düşünmek: Nasreddin Hoca Mirası",
      subtitle: "Fıkralar sadece kahkaha atmak için değil, hayattaki hatalarımızdan ders çıkarmak içindir.",
      layout: "split-visual",
      card: {
        title: "Fıkra Anlatırken 3 İncelik",
        icon: "👳‍♂️✨",
        desc: "İyi bir fıkra anlatıcısı:",
        items: [
          { bold: "1. Canlandırma Yap", text: "Hoca konuşurken bilge bir ses, çocuklar konuşurken neşeli bir ses tonu kullan." },
          { bold: "2. Mimiklerini Kullan", text: "Şaşırma, sevinme veya gülümseme ifadelerini yüzünle arkadaşlarına hissettir." },
          { bold: "3. Son Cümleye Dikkat", text: "Fıkranın en can alıcı son cümlesini (nükteyi) vurgulayarak söyle." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e293b" stroke="#eab308" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#facc15" text-anchor="middle">FIKRA VE ŞARKILI OYUNLAR ATÖLYESİ</text>

        <!-- Nasreddin Hoca & Eşek (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#0f172a" stroke="#eab308" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">👳‍♂️🫏🪈</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">Parayı Veren Düdüğü Çalar</text>
        <text x="155" y="175" font-size="9" fill="#cbd5e1" text-anchor="middle">Emek vermeden karşılık</text>
        <text x="155" y="195" font-size="9" fill="#cbd5e1" text-anchor="middle">beklenmeyeceğini öğretir</text>

        <!-- Şarkılı Oyun (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">👫🎶⭕</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#f472b6" text-anchor="middle">Kutu Kutu Pense</text>
        <text x="385" y="175" font-size="9" fill="#cbd5e1" text-anchor="middle">El ele tutuşur çember oluruz</text>
        <text x="385" y="195" font-size="9" fill="#cbd5e1" text-anchor="middle">Adı söylenen arkasını döner</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#facc15" text-anchor="middle">Fıkra anlatan arkadaşımızı saygıyla dinler, kahkahamızı paylaşırız!</text>
      </svg>`
    },
    section2: {
      title: "Şarkılı Oyunlar ve Dinleme Nezaketi",
      subtitle: "Birlikte söyler, el ele döner, dostluğumuzu büyütürüz.",
      cards: [
        {
          badge: "Nezaket",
          title: "Dinleme Adabı",
          desc: "Fıkra anlatılırken araya girmemek, sonunu bozmamak ve bitince alkışlamak."
        },
        {
          badge: "Dans & Ritim",
          title: "Yağ Satarım Bal Satarım",
          desc: "Mendili arkaya usulca bırakma; yakalama ve kaçma anında güvenliği koruma."
        },
        {
          badge: "Monolog",
          title: "Kazan Doğurdu!",
          desc: "Hoca'nın komşusuna emanet kazan hikâyesini mimiklerle sınıfta canlandırma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Günün En Tatlı Fıkra Anlatıcısı'",
      desc: "İstekli öğrenciler tahtada öğrendikleri fıkraları anlatır; sınıfça en güzel jest yapan arkadaş seçilir.",
      steps: [
        { title: "Fıkra Seçimi", desc: "Kısa, düşündürücü ve neşeli bir Nasreddin Hoca fıkrası belirleme." },
        { title: "Kürsüye Çıkış", desc: "Göz teması kurarak ve gülümsenerek fıkrayı canlandırma." },
        { title: "Alkışlama", desc: "Tüm anlatan arkadaşları cesaretlerinden dolayı coşkuyla alkışlama." }
      ],
      criteria: [
        "Fıkrayı oluş sırasına göre ve anlamını bozmadan aktarabilme",
        "Anlatım sırasında beden dilini ve ses tonunu etkili kullanabilme",
        "Şarkılı oyunlarda oyun kurallarına ve arkadaşlarına saygı duyma"
      ]
    },
    tips: {
      safetyTitle: "Oyun Güvenliği",
      safetyRules: [
        { bold: "Koşarken İtme Yok", text: "Şarkılı oyunlarda ebeden kaçarken arkadaşlarımızı itmemeli, sınıf sıralarına çarpmamaya dikkat etmeliyiz." }
      ],
      myths: [
        { wrong: "Fıkra anlatırken herkesle alay etmek ve kaba kelimeler kullanmak gerekir.", correct: "Hayır! Türk mizahı nezaket, zeka ve sevgi doludur; kimseyle alay etmeden güldürür." }
      ]
    },
    quiz: {
      question: "Nasreddin Hoca'nın pazara giderken çocuklara düdük alma hikâyesindeki ünlü ve ders verici sözü hangisidir?",
      options: [
        { text: "A) 'Parayı veren düdüğü çalar!' 🪈", isCorrect: true },
        { text: "B) 'Düdük çalmak çok zordur!'", isCorrect: false },
        { text: "C) 'Pazara sadece büyükler gider!'", isCorrect: false },
        { text: "D) 'Düdükleri denize atalım!'", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Hoca sadece kendisine para veren çocuğa düdük getirmiş ve <strong>'Parayı veren düdüğü çalar'</strong> diyerek adaleti öğretmiştir!"
    },
    summaryRules: [
      { bold: "Gülümse ve Düşün", text: "Nasreddin Hoca bizim zeka rehberimizdir." },
      { bold: "Arkadaşını Dinle", text: "Fıkra dinlemek dikkatimizi artırır." },
      { bold: "Haftaya Enerji Tasarrufu!", text: "Önümüzdeki hafta Enerji Tasarrufu Haftası, sayışmalar ve okuma atölyesi yapacağız!" }
    ],
    homework: "Büyüklerinize 'Kazan Doğurdu' fıkrasını sorun ve birlikte gülümseyin.",
    nextWeekPreview: "Enerji Tasarrufu Haftası, Ritmik Sayışmalar, Sorun Çözme ve Okuma Atölyesi!"
  },

  // 18. HAFTA
  {
    week: 18,
    date: "11 - 17 Ocak",
    hours: "4 Ders Saati",
    unit: "Enerji Tasarrufu Haftası ve Ritmik Sayışmalar",
    unitBadge: "18. Tema: Tasarruf & Doğa",
    unitTheme: "tema-3",
    title: "18. Hafta: Enerji Tasarrufu Haftası, Sayışma ve Okuma Atölyesi",
    subtitle: "Işıkları Kapatmak, Suyu Boşa Akıtmamak, Ritimli Sayışmalar ve Okuma",
    outcomeCode: "SE.1.18 (Enerji Bilinci & Ritim)",
    targetSkill: "Enerji Kaynaklarını Verimli Kullanma, Sayışmaları Ezgisine Uygun Söyleme ve Sesli/Sessiz Okuma",
    curiosityQuestion: "Gereksiz yanan tek bir lambayı kapattığımızda dünyamız ve doğadaki hayvanlar buna neden çok sevinir?",
    roadmap: [
      { title: "Enerji Tasarrufu Nedir?", desc: "Elektrik, su ve doğal gazı boş yere harcamamanın doğaya faydaları." },
      { title: "Ritmik Sayışmalar", desc: "'Oooo... İğne battı, canımı yaktı' sayışmasıyla adaletli ebe seçme." },
      { title: "Sesli ve Sessiz Okuma", desc: "Seviyeye uygun enerji tasarrufu metnini önce sessiz, sonra sesli okuma." },
      { title: "Sorun Çözme Atölyesi", desc: "Açık unutulan muslukları ve boşa yanan ışıkları fark edip önlem alma." }
    ],
    section1: {
      title: "Enerjini Koru, Geleceği Aydınlat",
      subtitle: "Her damla su ve her sönük lamba dünyamıza nefes aldırır.",
      layout: "split-visual",
      card: {
        title: "Evde ve Okulda Enerji Dedektifi",
        icon: "💡💧",
        desc: "Enerji dedektifinin 3 görevi:",
        items: [
          { bold: "1. Boşa Yanan Işığı Söndür", text: "Gündüz güneş varken lamba yakma; odadan çıkarken anahtara basıp kapat." },
          { bold: "2. Musluğu Kapat", text: "Dişlerimizi fırçalarken veya ellerimizi sabunlarken musluğu açık bırakma." },
          { bold: "3. Prizleri Boş Bırak", text: "Kullanılmayan şarj aletlerini prizde bırakmama konusunda büyüklerini uyar." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#7dd3fc" text-anchor="middle">ENERJİ TASARRUFU HAFTASI & SAYIŞMALAR</text>

        <!-- Tasarruf Lambası (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#075985" stroke="#facc15" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">💡🌱🔌</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#fef08a" text-anchor="middle">Boşa Yanmasın!</text>
        <text x="155" y="175" font-size="9" fill="#e0f2fe" text-anchor="middle">Işığı kapat, doğayı kurtar</text>
        <text x="155" y="195" font-size="9" fill="#e0f2fe" text-anchor="middle">Damlaya damlaya göl olur</text>

        <!-- Ritmik Sayışma (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#075985" stroke="#38bdf8" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">🎯🥁✋</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#7dd3fc" text-anchor="middle">Adil Ebe Seçimi</text>
        <text x="385" y="175" font-size="9" fill="#e0f2fe" text-anchor="middle">'Oooo... Portakalı soydum'</text>
        <text x="385" y="195" font-size="9" fill="#e0f2fe" text-anchor="middle">Hece hece ritim tutma</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#facc15" text-anchor="middle">Gereksiz tüketim yok, bilinçli ve tasarruflu nesil var!</text>
      </svg>`
    },
    section2: {
      title: "Sayışma Eğlencesi ve Okuma Saati",
      subtitle: "Sayışmalar adaleti öğretir, okuma saatleri ufkumuzu açar.",
      cards: [
        {
          badge: "Ritim",
          title: "Portakalı Soydum",
          desc: "Her hecede bir arkadaşın göğsüne dokunarak adaletli biçimde ebeyi belirleme."
        },
        {
          badge: "Okuma",
          title: "Sessiz Okuma Kuralları",
          desc: "Dudak kıpırdatmadan, gözlerle satırları takip ederek metni anlama."
        },
        {
          badge: "Sesli Okuma",
          title: "Noktada Dur, Virgülle Soluklan",
          desc: "Noktalama işaretlerine dikkat ederek şiir gibi ahenkli sesli okuma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Etkinlik: 'Sınıfımızın Enerji Nöbetçisi'",
      desc: "Haftanın enerji dedektifleri seçilir; teneffüslerde boşa yanan ışıkları ve damlayan muslukları kontrol eder.",
      steps: [
        { title: "Rozet Takımı", desc: "Öğrencilere 'Enerji Dedektifi' yeşil yıldız rozeti takma." },
        { title: "Sayışma Çemberi", desc: "Öğrencilerin çember olup ezgiyle sayışma söyleyerek oyuna başlaması." },
        { title: "Tasarruf Afişi", desc: "'Gereksizse Söndür' yazılı minik uyarı kartlarını prizlerin yanına yapıştırma." }
      ],
      criteria: [
        "Enerji tasarrufu kurallarını günlük hayatta uygulayabilme",
        "Sayışmaları hece ritmine uygun ve eksiksiz söyleyebilme",
        "Sesli okumada noktalama işaretlerine dikkat edebilme"
      ]
    },
    tips: {
      safetyTitle: "Elektrik Güvenliği",
      safetyRules: [
        { bold: "Islak Elle Dokunma", text: "Ellerimiz ıslakken asla elektrik prizlerine veya anahtarlara dokunmamalıyız; prizlere hiçbir yabancı cisim sokmamalıyız." }
      ],
      myths: [
        { wrong: "Tek bir lambayı kapatmakla dünyada hiçbir şey değişmez.", correct: "Hayır! Milyonlarca çocuk birer lamba kapattığında barajlarımız ve ormanlarımız kurtulur." }
      ]
    },
    quiz: {
      question: "Enerji Tasarrufu Haftası'nda evde yapabileceğimiz en faydalı davranış hangisidir?",
      options: [
        { text: "A) Odamızdan çıkarken ışığı kapatmak ve diş fırçalarken suyu kapatmak 💡🚰", isCorrect: true },
        { text: "B) Bütün odaların lambalarını açıp sokakta oynamak", isCorrect: false },
        { text: "C) Musluğu sonuna kadar açıp kaçmak", isCorrect: false },
        { text: "D) Televizyonu açık bırakıp uyumak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Kullanmadığımız elektrik ve suyu kapatmak <strong>doğayı korumanın ve tasarrufun en güzel yoludur</strong>!"
    },
    summaryRules: [
      { bold: "Enerjini Koru", text: "Gereksizse söndür, boşa akıtma." },
      { bold: "Ritimle Oyna", text: "Sayışmalar oyunun en tatlı kurallarıdır." },
      { bold: "Haftaya Dönem Sonu!", text: "Önümüzdeki hafta 1. dönemi harika bir film, telefon nezaketi ve bulmacalarla tamamlıyoruz!" }
    ],
    homework: "Evinizde boşa yanan bir lambayı kapatıp ailenize 'Ben Enerji Dedektifiyim' deyin.",
    nextWeekPreview: "Film İzleme, Telefon Görgü Kuralları, Hayat Bilgisi Bulmacası ve 1. Dönem Sonu!"
  },

  // 19. HAFTA
  {
    week: 19,
    date: "18 - 24 Ocak",
    hours: "4 Ders Saati",
    unit: "1. Dönem Sonu, İletişim Nezaketi ve Film",
    unitBadge: "19. Tema: 1. Dönem Finali",
    unitTheme: "tema-3",
    title: "19. Hafta: Film İzleme, Telefon Nezaketi, Bulmaca ve 1. Dönem Sonu",
    subtitle: "Telefonla Görgü Kurallarına Uygun Konuşma, Eğitici Film ve Karne Heyecanı",
    outcomeCode: "SE.1.19 (Görgü & Dönem Sonu)",
    targetSkill: "Telefonla Konuşurken Nezaket Kurallarına Uyabilme, Film Yorumlayabilme ve 1. Dönemi Değerlendirme",
    curiosityQuestion: "Biri bizi telefonla aradığında veya biz aradığımızda ilk olarak ne söylemeliyiz?",
    roadmap: [
      { title: "Telefon Nezaketi Atölyesi", desc: "'Alo, iyi günler, ben Ali, Ayşe ile görüşebilir miyim?' diyalogları." },
      { title: "1. Dönem Eğitici Filmi", desc: "Bütün sınıfın ilgiyle izleyeceği sevgi ve başarı temalı animasyon filmi." },
      { title: "Hayat Bilgisi Bulmacası", desc: "1. dönem boyunca öğrendiğimiz kurallarla ilgili kare ve çizgi bulmacalar." },
      { title: "Karne Öncesi Veda Çemberi", desc: "1. dönemin en güzel anılarını paylaşma ve yarıyıl tatiline hazırlanma." }
    ],
    section1: {
      title: "Alo Nezaketi: Telefon Görgü Kuralları",
      subtitle: "Telefon sesimizi uzaklara taşır; kelimelerimiz ise nezaketimizi gösterir.",
      layout: "split-visual",
      card: {
        title: "Telefonla Konuşurken 3 Adım",
        icon: "☎️📱",
        desc: "Doğru bir telefon konuşması:",
        items: [
          { bold: "1. Kendini Tanıt", text: "Arayınca önce selam ver ve kim olduğunu söyle: 'İyi günler, ben Kerem.'" },
          { bold: "2. Kimi Aradığını Belirt", text: "'Ahmet evde mi acaba, onunla bir ödev hakkında görüşebilir miyim?' de." },
          { bold: "3. Teşekkür Et ve Kapat", text: "Konuşma bitince 'Teşekkür ederim, iyi günler' diyerek nazikçe sonlandır." }
        ]
      },
      diagramSvg: `<svg viewBox="0 0 540 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="490" height="250" rx="16" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
        <text x="270" y="55" font-size="15" font-weight="bold" fill="#c084fc" text-anchor="middle">TELEFON NEZAKETİ VE 1. DÖNEM FİNALİ</text>

        <!-- Telefon Arayan Çocuk (Sol) -->
        <rect x="60" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#c084fc" stroke-width="2"/>
        <text x="155" y="125" font-size="34" text-anchor="middle">📞👦💬</text>
        <text x="155" y="155" font-size="11" font-weight="bold" fill="#e9d5ff" text-anchor="middle">'Alo, İyi Günler'</text>
        <text x="155" y="175" font-size="9" fill="#d8b4fe" text-anchor="middle">Önce kendini tanıt</text>
        <text x="155" y="195" font-size="9" fill="#d8b4fe" text-anchor="middle">Bağırmadan sakin konuş</text>

        <!-- Karne ve Başarı Yıldızı (Sağ) -->
        <rect x="290" y="80" width="190" height="140" rx="10" fill="#2e1065" stroke="#f59e0b" stroke-width="2"/>
        <text x="385" y="125" font-size="34" text-anchor="middle">📜⭐🎉</text>
        <text x="385" y="155" font-size="11" font-weight="bold" fill="#fde047" text-anchor="middle">1. Dönem Başarısı</text>
        <text x="385" y="175" font-size="9" fill="#d8b4fe" text-anchor="middle">Okuduk, yazdık, büyüdük</text>
        <text x="385" y="195" font-size="9" fill="#d8b4fe" text-anchor="middle">Tatile gururla giriyoruz!</text>

        <rect x="70" y="240" width="400" height="24" rx="6" fill="#070b14"/>
        <text x="270" y="256" font-size="10" font-weight="bold" fill="#c084fc" text-anchor="middle">Kelimelerimiz ne kadar nazikse dostluklarımız o kadar sağlam olur!</text>
      </svg>`
    },
    section2: {
      title: "Film Saati ve Dönem Sonu Coşkusu",
      subtitle: "19 haftalık harika bir serüveni alkışlarla noktalıyoruz.",
      cards: [
        {
          badge: "Drama",
          title: "Telefon Görüşmesi",
          desc: "İki elini telefon yapıp sınıfın karşısında örnek bir tebrik konuşması canlandırma."
        },
        {
          badge: "Bulmaca",
          title: "Dönem Sonu Şifresi",
          desc: "Trafik kuralları, temizlik ve nezaket kelimelerini bulup gizli şifreyi çözme."
        },
        {
          badge: "Tatil Sevinci",
          title: "Sömestr Planları",
          desc: "Dinlenme, kitap okuma, kardan adam yapma ve oyun oynama planlarını paylaşma."
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Drama: 'Örnek Telefon Görüşmesi'",
      desc: "İki öğrenci aralarında oyuncak telefonlarla konuşarak nezaket ve vedalaşma provası yapar.",
      steps: [
        { title: "Telefon Çalıyor", desc: "'Dırrrr... Alo, merhaba Ayşe teyze, ben Zeynep.'" },
        { title: "Mesajı İlet", desc: "'Elif'e ödev sayfasını sormak için aramıştım, müsait mi acaba?'" },
        { title: "Kibar Kapanış", desc: "'Çok teşekkür ederim, iyi günler dilerim, hoşça kalın.'" }
      ],
      criteria: [
        "Telefonla konuşurken nezaket kurallarına eksiksiz uyabilme",
        "İzlenen filmdeki ana fikri kendi cümleleriyle anlatabilme",
        "1. dönem boyunca gösterdiği çaba için kendini ve arkadaşlarını tebrik edebilme"
      ]
    },
    tips: {
      safetyTitle: "Telefon Kullanımında Dikkat",
      safetyRules: [
        { bold: "Tanımadığın Numaralar", text: "Tanımadığımız numaralardan gelen aramalara tek başımıza cevap vermemeli, telefonu hemen annemize veya babamıza vermeliyiz." }
      ],
      myths: [
        { wrong: "Telefonda karşıdaki kişi bizi görmediği için istediğimiz gibi kaba konuşabiliriz.", correct: "Hayır! Nezaket her yerdedir; telefondaki ses tonumuz kalbimizin aynasıdır." }
      ]
    },
    quiz: {
      question: "Bir arkadaşımızın evini telefonla aradığımızda ve telefonu annesi açtığında ilk olarak ne söylemeliyiz?",
      options: [
        { text: "A) 'İyi günler, ben [Adımız], [Arkadaşımızın adı] ile görüşebilir miyim?' 📞", isCorrect: true },
        { text: "B) 'Çabuk arkadaşımı ver!' diye bağırmak", isCorrect: false },
        { text: "C) Hiçbir şey demeden telefonu kapatmak", isCorrect: false },
        { text: "D) Gülüp telefona komik sesler çıkarmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Harikasın, Doğru Cevap: A!</strong> Telefonu açan büyüğümüze <strong>selam vermek, kendimizi tanıtmak ve izin istemek</strong> en güzel görgü kuralıdır!"
    },
    summaryRules: [
      { bold: "Nazik Konuş", text: "Telefonda tatlı dilli ve saygılı ol." },
      { bold: "Kendinle Gurur Duy", text: "1. dönemi başarıyla, sevgiyle tamamladın." },
      { bold: "İyi Tatiller!", text: "Önümüzdeki iki hafta sömestr tatilinde dinlenip ikinci döneme bomba gibi başlayacağız!" }
    ],
    homework: "Yarıyıl tatilinde uzaktaki bir akrabanızı (büyükanne veya dedenizi) arayıp halini hatırını nazikçe sorun.",
    nextWeekPreview: "Sömestr Tatili 1. Hafta Macera Bülteni (Kış Oyunları, Kitap Okuma ve Aile Zamanı)!"
  }
];

window.CURRICULUM_TERM_1_PART2_GRADE1 = CURRICULUM_TERM_1_PART2_GRADE1;
