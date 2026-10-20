/**
 * 6. Sınıf Bilişim Teknolojileri - 2. Dönem Müfredat Verileri (Hafta 32 - 41)
 */

const CURRICULUM_TERM_2_PART2 = [
  // 32. HAFTA
  {
    week: 32,
    date: "19 - 25 Nisan",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Fizik & Zıplama Mekanikli Platform Oyunları",
    subtitle: "Yerçekimi Simülasyonu (Dikey Hız Değişkeni), Zemin Algılama ve Zıplama Fiziği",
    outcomeCode: "BTY.6.6.2",
    targetSkill: "Fizik Simülasyonu & Platform Mekaniği",
    curiosityQuestion: "Mario veya Sonic gibi oyun kahramanları zıpladığında neden havada asılı kalmaz da gerçek hayattaki gibi yere doğru hızlanarak düşer?",
    roadmap: [
      { title: "Yerçekimi (Gravity) Fiziği", desc: "Sürekli aşağı çeken görünmez kuvvet ve hızlanarak düşme." },
      { title: "Dikey Hız (Y_Hizi) Değişkeni", desc: "Zıplarken hızı pozitif yapma, yerçekimi etkisiyle hızı her an -1 azaltma." },
      { title: "Zemin / Platform Algılama", desc: "Ayaklar yeşil çimene veya platforma değdiğinde düşmeyi durdurma." },
      { title: "23 Nisan Çocuk Bayramı Teması", desc: "Bayrak toplayarak engelleri aşan çocuk kahraman platform oyunu." }
    ],
    section1: {
      title: "Scratch'te Gerçekçi Zıplama Fiziği Nasıl Kodlanır?",
      subtitle: "Basit 'Y'yi 10 değiştir' yerine gerçekçi yerçekimi formülü.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Yerçekimi ve Dikey Hız (Y_Hizi)",
          icon: "🪂",
          borderClass: "card-primary-border",
          desc: "Fizik kurallarını bilgisayar diline çevirme:",
          items: [
            { bold: "Değişken Oluştur", text: "'Y_Hizi' adında bir değişken açın." },
            { bold: "Sürekli Düşme", text: "Sürekli tekrarla içinde: 'Y'yi [Y_Hizi] kadar değiştir' ve 'Y_Hizi'nı -1 kadar değiştir' (Yerçekimi)." },
            { bold: "Zıplama Gücü", text: "Boşluk tuşuna basılınca: 'Y_Hizi'nı 12 yap' (Karakter yukarı fırlar ve hız yavaşça sıfırlanıp negatife dönerek düşer!)." }
          ]
        },
        {
          title: "Zeminde Durma Kuralı",
          icon: "🟩",
          borderClass: "card-success-border",
          desc: "Karakterin ekranın dibinden düşüp gitmesini önlemek:",
          items: [
            { bold: "Zemin Rengine Değiyor mu?", text: "Eğer <Zemin rengine değiyor mu?> ise: 'Y_Hizi'nı 0 yap' ve karakteri zeminin 1 piksel üstünde tut." },
            { bold: "Çift Zıplama Kilidi", text: "Karakter sadece ZEMİNE DEĞERKEN zıplayabilmeli; yoksa havada sürekli zıplayarak uçar gider!" }
          ]
        }
      ]
    },
    section2: {
      title: "23 Nisan Platform Oyunu Tasarımı",
      subtitle: "Ulusal Egemenlik ve Çocuk Bayramı coşkusunu oyunumuza taşıyalım.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Platformlar ve Engeller",
          icon: "🪜",
          borderClass: "card-accent-border",
          desc: "Farklı yüksekliklerdeki basamaklar:",
          items: [
            { bold: "Yüzen Adalar", text: "Karakterin basamak basamak zıplayarak tırmanabileceği ahşap platformlar." },
            { bold: "Dikenli Çukurlar", text: "Aşağıdaki kırmızı dikenlere düşerse canı -1 azalsın ve başa dönsün." }
          ]
        },
        {
          title: "Milli Bayram Görevi",
          icon: "🇹🇷",
          borderClass: "card-purple-border",
          desc: "Oyunun ana amacı:",
          items: [
            { bold: "Bayrakları Topla", text: "Tüm platformlardaki 5 Türk bayrağını toplayarak tepedeki TBMM binasına ulaşmak." },
            { bold: "Kutlama Ekranı", text: "23 Nisan marşı çalsın ve konfetiler patlasın!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: Kendi Zıplayan Karakterini Kodla",
      subtitle: "Yerçekimi değişkenini kurup kahramanı zıplatıyoruz.",
      steps: [
        { title: "Zemin Çiz", desc: "Sahnenin altına yeşil renkte düz kalın bir zemin çizgisi çizin." },
        { title: "Y_Hizi Kodunu Yaz", desc: "Kuklaya 'Sürekli tekrarla > Y'yi Y_Hizi kadar değiştir > Y_Hizi'nı -1 değiştir' bloklarını kurun." },
        { title: "Zemin Kontrolü & Zıplama", desc: "'Eğer zemine değiyorsa Y_Hizi'nı 0 yap' ve 'Boşluk basılınca Y_Hizi'nı 12 yap' ekleyin!" }
      ],
      criteria: [
        "Karakterin havaya sıçrayıp kavis çizerek yumuşakça düşmesi",
        "Zemine bastığında durup zeminin içine batmaması",
        "Zıplama hissiyatının tatmin edici ve gerçekçi olması"
      ]
    },
    tips: {
      safetyTitle: "Platform Fiziğinde Sık Yapılan Hata",
      safetyRules: [
        { bold: "Zıplama Şartı", text: "'Eğer Boşluk tuşu basıldı mı VE Zemine değiyor mu ise' şeklinde 'VE' operatörü kullanın; böylece havada uçma hilesini engellersiniz." }
      ],
      myths: [
        { wrong: "Fizik oyunları yapmak için üniversite düzeyinde fizik bilmek gerekir.", correct: "Scratch'te 'hızı her adımda -1 azaltmak' gibi basit bir çıkarma işlemiyle yerçekimi simüle edilir!" }
      ]
    },
    quiz: {
      question: "Platform oyunlarında karakterin zıpladıktan sonra gerçekçi bir şekilde aşağı doğru düşmesini sağlamak için her döngüde hangi işlem yapılmalıdır?",
      options: [
        { text: "A) X konumunu 10 artırmak", isCorrect: false },
        { text: "B) Dikey hız (Y_Hizi) değişkenini her adımda -1 azaltmak", isCorrect: true },
        { text: "C) Karakterin boyutunu küçültmek", isCorrect: false },
        { text: "D) Sahne rengini değiştirmek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Yerçekimini taklit etmek için dikey hız değişkeni her döngüde -1 azaltılarak karakterin ivmeli şekilde aşağı düşmesi sağlanır."
    },
    summaryRules: [
      { bold: "Y_Hizi = Zıplama Motoru", text: "Pozitif değer fırlatır, yerçekimi eksiye çekerek düşürür." },
      { bold: "Zemin Algılama", text: "Zemine temas düşmeyi sonlandırır." },
      { bold: "23 Nisan Coşkusu", text: "Oyunlarımızı bayram temasıyla taçlandırdık." }
    ],
    homework: "Oyununuza zıplayarak üzerine basıldığında yok olan bir canavar kuklası tasarlayın.",
    nextWeekPreview: "Büyük Dönüm Noktası: Blok Tabanlı Yapay Zekâ Eklentileri (Video Algılama ve Metin Okuma)!"
  },

  // 33. HAFTA
  {
    week: 33,
    date: "26 Nisan - 02 Mayıs",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-5",
    title: "Blok Tabanlı Yapay Zekâ Eklentileri",
    subtitle: "Scratch Eklenti Menüsü, Video Algılama (Video Sensing) ve Metinden Sese",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Yapay Zekâ Eklentileri & Kamera Etkileşimi",
    curiosityQuestion: "Klavyeye veya fareye hiç dokunmadan, sadece web kamerasına elinizi sallayarak ekrandaki balonları patlatabilir misiniz?",
    roadmap: [
      { title: "Scratch Eklenti Menüsü", desc: "Sol alttaki mavi '+' butonundan açılan yapay zekâ ve donanım kütüphanesi." },
      { title: "Video Algılama (Video Sensing)", desc: "Web kamerasını sahneye yansıtma ve ekrandaki hareketi ölçme." },
      { title: "Metinden Sese (Text-to-Speech)", desc: "Yazdığınız Türkçe metinleri kuklanın gerçek bir insan sesiyle okuması." },
      { title: "Çeviri (Google Translate)", desc: "Farklı dillere anında kelime çevirisi yapan yapay zekâ blokları." }
    ],
    section1: {
      title: "Scratch Eklentileri: Kodlamanın Süper Güçleri",
      subtitle: "Standart blokların ötesine geçip kamerayı ve sesi projenize dahil edin.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Video Algılama (Video Sensing)",
          icon: "📹",
          borderClass: "card-primary-border",
          desc: "Web kamerasını oyun kumandasına dönüştürün:",
          items: [
            { bold: "Videoyu Aç / Kapat", text: "Web kamerasının canlı görüntüsünü sahnenin arka planına yerleştirir." },
            { bold: "Saydamlığı Ayarla", text: "Kamera görüntüsünün ne kadar şeffaf olacağını belirler (%0 net, %50 yarı saydam)." },
            { bold: "Kukla Üzerindeki Video Hareketi", text: "Elinizi kuklanın üzerine getirdiğinizde kameradaki hareket miktarını (0-100) ölçer!" }
          ]
        },
        {
          title: "Metinden Sese (Text-to-Speech)",
          icon: "🗣️",
          borderClass: "card-purple-border",
          desc: "Amazon Polly yapay zekâsı ile konuşan kuklalar:",
          items: [
            { bold: "'... Konuş' Bloğu", text: "Yazdığınız herhangi bir cümleyi yapay zekâ anında seslendirir." },
            { bold: "Ses Karakteri Seçimi", text: "Alto (kadın), Tenor (erkek), Cırcır böceği veya Dev ses tonları." },
            { bold: "Türkçe Desteği", text: "Dili 'Türkçe' ayarlayarak kusursuz telaffuzla konuşturun." }
          ]
        }
      ]
    },
    section2: {
      title: "Kamerayla Temas: Dokunmadan Oyun Oyna",
      subtitle: "Artırılmış Gerçeklik (AR) mantığını Scratch'te deneyimlemek.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Hareket Algılama Mantığı",
          icon: "👋",
          borderClass: "card-success-border",
          desc: "Kamera piksel değişikliklerini hesaplar:",
          items: [
            { bold: "Şart Bloğu", text: "Eğer <Kukla üzerindeki video hareketi > 30> ise..." },
            { bold: "Fiziksel Dokunuş Hissi", text: "Elinizi kamerada balonun olduğu yere vurduğunuzda, hareket eşiği 30'u geçer ve balon patlar!" }
          ]
        },
        {
          title: "Çeviri Eklentisi (Translate)",
          icon: "🌍",
          borderClass: "card-accent-border",
          desc: "Yapay zekâ destekli anlık çok dilli sözlük:",
          items: [
            { bold: "Google Çeviri", text: "Türkçe yazılan bir kelimeyi İngilizce, Fransızca, Japonca gibi onlarca dile çevirir." },
            { bold: "Seslendirme ile Birleştirme", text: "Çevrilen kelimeyi Metinden Sese bloğu ile yabancı dilde seslendirebilirsiniz!" }
          ]
        }
      ]
    },
    workshop: {
      title: "Kamerayla Balon Patlatma Oyunu",
      subtitle: "Web kamerasına el sallayarak ekrandaki balonu patlatalım.",
      steps: [
        { title: "Eklentiyi Ekle", desc: "Sol alttan 'Video Algılama' eklentisini seçin ve kamerayı açın." },
        { title: "Kodu Yaz", desc: "Balon kuklasına: 'Sürekli tekrarla > Eğer <video hareketi > 40> ise > 'Pop' sesini çal > Rastgele konuma git > Puanı 1 artır'." },
        { title: "Test Et", desc: "Kameraya geçin ve elinizle havada balona dokunarak puan kazanın!" }
      ],
      criteria: [
        "Kameranın başarıyla sahneye yansıtılması",
        "Hareket eşiğinin (örneğin 40) doğru ayarlanması",
        "Elin temas ettiği anda balonun kaçması ve ses çıkarması"
      ]
    },
    tips: {
      safetyTitle: "Kamera İzni ve Işık Şartları",
      safetyRules: [
        { bold: "Tarayıcı Kamera İzni", text: "Scratch açıldığında sol üstte çıkan 'Kameranıza erişmek istiyor' uyarısına 'İzin Ver' demelisiniz." },
        { bold: "İyi Işık Şartı", text: "Oda çok karanlıksa kamera hareketi iyi algılayamaz; aydınlık ortamda çalışın." }
      ],
      myths: [
        { wrong: "Kamera görüntüsü internete kaydedilir veya birilerine gider.", correct: "Video algılama tamamen kendi bilgisayarınızın içinde çalışır; hiçbir görüntü internete yüklenmez." }
      ]
    },
    quiz: {
      question: "Scratch'te bir kuklanın ekranda konuşma balonu çıkarmak yerine gerçek bir insan sesiyle Türkçe cümleler söylemesini sağlayan eklenti hangisidir?",
      options: [
        { text: "A) Çizim (Kalem) Eklentisi", isCorrect: false },
        { text: "B) Metinden Sese (Text-to-Speech)", isCorrect: true },
        { text: "C) Müzik Eklentisi", isCorrect: false },
        { text: "D) Lego Robot Eklentisi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Metinden Sese (Text-to-Speech) yapay zekâ eklentisi yazılan metinleri insan sesiyle canlandırır."
    },
    summaryRules: [
      { bold: "Eklentiler Sınırları Kaldırır", text: "Kamera, ses sentezi ve çeviri ile projeler akıllanır." },
      { bold: "Video Algılama = Temassız Kontrol", text: "Vücut hareketlerimizle oyun yönetmenin kapısını açar." },
      { bold: "Gelecek Hafta Büyük Buluşma", text: "Eğittiğimiz Teachable Machine yapay zekâ modelini Scratch'e bağlayacağız!" }
    ],
    homework: "Scratch'te 'Metinden Sese' eklentisini kullanarak kendisini tanıtan ve 'Bugün hava çok güzel' diyen bir kukla kodlayın.",
    nextWeekPreview: "Teachable Machine Modelini Scratch'e Bağlama: Yapay Zekâ Destekli Gerçek Projeler!"
  },

  // 34. HAFTA
  {
    week: 34,
    date: "03 - 09 Mayıs",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-5",
    title: "Teachable Machine Modelini Scratch'e Bağlama",
    subtitle: "TM2Scratch / Yapay Zekâ Modeli Entegrasyonu ve Canlı Sınıflandırma",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Model Entegrasyonu & Akıllı Sistem Tasarımı",
    curiosityQuestion: "18. haftada Teachable Machine'de eğittiğimiz 'Taş-Kâğıt-Makas' veya 'Maskeli/Maskesiz' yapay zekâ modelini Scratch oyunumuzun beyni yapabilir miyiz?",
    roadmap: [
      { title: "Model Dışa Aktarma (Export)", desc: "Teachable Machine modelinin paylaşılabilir bulut bağlantı linkini (URL) alma." },
      { title: "Scratch Yapay Zekâ Eklentisi", desc: "TM2Scratch veya mBlock AI blokları ile model linkini bağlama." },
      { title: "Canlı Karar Blokları", desc: "'Eğer yapay zekâ tahmini [Kâğıt] ise...' mantığı." },
      { title: "Görsel Tahmin Gücü", desc: "Kameranın gördüğü nesneye göre oyunun gidişatını anında değiştiren akıllı yazılım." }
    ],
    section1: {
      title: "Yapay Zekâ Modelini Dışa Aktarma (Export URL)",
      subtitle: "Eğitilen beyni Scratch'e aktarmanın 2 dakikalık köprüsü.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Model Bağlantı Linkini Alma",
          icon: "🔗",
          borderClass: "card-primary-border",
          desc: "Teachable Machine ekranındaki adımlar:",
          items: [
            { bold: "1. 'Export Model' Butonu", text: "Model eğitildikten sonra sağ üstteki butona tıklayın." },
            { bold: "2. 'Upload my model'", text: "Modeli Google bulut sunucularına yükleyin (Tamamen ücretsizdir)." },
            { bold: "3. Paylaşılabilir Link", text: "'https://teachablemachine.withgoogle.com/models/XYZ...' şeklinde bir link kopyalayın." }
          ]
        },
        {
          title: "Scratch'e YZ Beynini Yükleme",
          icon: "🧠",
          borderClass: "card-purple-border",
          desc: "Scratch / TM2Scratch ortamında:",
          items: [
            { bold: "Model Linkini Yapıştır", text: "'[URL] modelini yükle' bloğunun içine linki yapıştırın." },
            { bold: "Model Yüklendi!", text: "Scratch artık kendi eğittiğiniz sınıfları (Taş, Kâğıt, Makas) birer blok olarak tanır!" }
          ]
        }
      ]
    },
    section2: {
      title: "Yapay Zekâ ile Karar Alma Mekanizması",
      subtitle: "Kameranın gördüğü sınıfa göre çalışan akıllı bloklar.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "YZ Olay Blokları",
          icon: "⚡",
          borderClass: "card-success-border",
          desc: "Yapay zekâ sınıfı tanıdığı anda tetiklenen kodlar:",
          items: [
            { bold: "[Tas] görüntüsü algılandığında", text: "Kameraya yumruğunuzu gösterdiğiniz anda altındaki kodlar çalışır." },
            { bold: "[Kagit] görüntüsü algılandığında", text: "Elinizi açık gösterdiğiniz anda devreye girer." },
            { bold: "Güven Oranı (Confidence)", text: "Modelin emin olma yüzdesi %80'in üzerindeyse işlem yapar." }
          ]
        },
        {
          title: "Akıllı Karar Verme",
          icon: "🤖",
          borderClass: "card-accent-border",
          desc: "Yapay zekâ ile interaktif oyun:",
          items: [
            { bold: "Rakip Bilgisayar", text: "Siz kameraya 'Taş' gösterirseniz bilgisayar hemen 'Kâğıt' kostümüne geçip 'Ben kazandım!' diyebilir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Yapay Zekâlı Taş-Kâğıt-Makas Hakemi",
      subtitle: "Kameraya gösterdiğimiz el hareketini tanıyan ve söyleyen akıllı program.",
      steps: [
        { title: "Modeli Bağla", desc: "Teachable Machine model linkini Scratch projesine yükleyin." },
        { title: "Kodları Eşle", desc: "'[Tas] algılandığında > 'Taş dedin!' de ve seslendir'." },
        { title: "Canlı Deneyin", desc: "Kameraya sırayla taş, kâğıt ve makas hareketlerini yapıp yapay zekânın hızını test edin!" }
      ],
      criteria: [
        "Model linkinin Scratch'e hatasız yüklenmesi",
        "Kameradaki hareketin doğru sınıflandırılması",
        "Geri bildirimin ekranda net şekilde verilmesi"
      ]
    },
    tips: {
      safetyTitle: "Model Yükleme İpuçları",
      safetyRules: [
        { bold: "İnternet Bağlantısı Şart", text: "Bulut linkindeki modeli ilk defa çekerken internet bağlantınızın aktif olması gerekir." },
        { bold: "Sınıf İsimleri Birebir Aynı Olmalı", text: "Teachable Machine'de 'Tas' yazdıysanız Scratch'te de 'Tas' olarak görünür; büyük-küçük harfe dikkat edin." }
      ],
      myths: [
        { wrong: "Scratch gibi çocuk programlarında gerçek yapay zekâ çalıştırılamaz.", correct: "Bugün profesyonel mühendislerin kullandığı sinir ağları (neural networks) modelleri doğrudan Scratch içinde çalışabilmektedir!" }
      ]
    },
    quiz: {
      question: "Teachable Machine'de eğittiğimiz bir makine öğrenmesi modelini Scratch veya mBlock ortamına aktarmak için modelin hangi çıktısı kullanılır?",
      options: [
        { text: "A) Yazıcıdan alınan kâğıt çıktısı", isCorrect: false },
        { text: "B) Bulut paylaşım bağlantı linki (Model URL'si)", isCorrect: true },
        { text: "C) Ekran parlaklığı ayarı", isCorrect: false },
        { text: "D) Kulaklık kablosu", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Export Model > Upload' işleminden sonra oluşturulan bulut URL linki, modeli Scratch'e bağlayan dijital köprüdür."
    },
    summaryRules: [
      { bold: "Model + Kod = Akıllı Sistem", text: "Yapay zekâ beyni ile Scratch mantığı birleştiğinde mucizeler doğar." },
      { bold: "Kamera Gözümüzdür", text: "Model kamera görüntüsünü analiz edip sınıfları tanır." },
      { bold: "Gelecek Hafta Akıllı Asistan", text: "Kameraya gösterdiğimiz meyveleri tanıyan sesli market asistanı yapacağız!" }
    ],
    homework: "Evinizde kameraya göstermek üzere 2 farklı nesne (Örn: Kitap ve Kalem) belirleyin ve Teachable Machine'de modelini hazırlayın.",
    nextWeekPreview: "Yapay Zekâ Destekli Akıllı Asistan ve Nesne Tanıma Projesi!"
  },

  // 35. HAFTA
  {
    week: 35,
    date: "10 - 16 Mayıs",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-5",
    title: "Yapay Zekâ Destekli Akıllı Asistan",
    subtitle: "Akıllı Kamera ile Nesne Tanıma, Sesli Bilgilendirme ve Market Asistanı",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Akıllı Ürün Geliştirme & Nesne Tanıma",
    curiosityQuestion: "Süpermarketlerde barkod okutmak yerine kameraya meyveyi tuttuğunuzda tartının onun elma olduğunu bilip fiyatını söylemesi hangi sistemdir?",
    roadmap: [
      { title: "Akıllı Kasa / Asistan Mantığı", desc: "Kameraya gösterilen nesneyi sınıflandırıp bilgi veren sistemler." },
      { title: "Çoklu Sınıf Tanıma", desc: "Elma, Muz, Portakal sınıflarını tanıyan yapay zekâ modeli." },
      { title: "Sesli Yanıt Entegrasyonu", desc: "Nesne tanınınca Metinden Sese ile 'Bu bir Amasya elmasıdır, kilosu 30 TL'dir' seslendirmesi." },
      { title: "Engelliler Haftası Duyarlılığı", desc: "Görme engelliler için etrafındaki eşyaları tanıyan sesli gözlük fikri!" }
    ],
    section1: {
      title: "Akıllı Market Kasası Nasıl Çalışır?",
      subtitle: "Görüntü işleme ve sesli asistan teknolojilerinin birleşimi.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Sistem Akış Şeması",
          icon: "🛒",
          borderClass: "card-primary-border",
          desc: "Adım adım akıllı asistan mekanizması:",
          items: [
            { bold: "1. Algılama", text: "Web kamerası tartının üzerindeki nesneyi görür." },
            { bold: "2. Yapay Zekâ Analizi", text: "Eğitilen model nesnenin rengine ve şekline bakarak '%95 Elma' kararını verir." },
            { bold: "3. Fiyat ve Bilgi", text: "Ekrana elma görseli gelir ve veritabanından fiyatı hesaplanır." },
            { bold: "4. Sesli Bildirim", text: "Hoparlörden müşteriye ürünün adı ve tutarı seslendirilir." }
          ]
        },
        {
          title: "Sosyal Fayda: Görme Engellilere Destek",
          icon: "🦯",
          borderClass: "card-success-border",
          desc: "10-16 Mayıs Engelliler Haftası kapsamında:",
          items: [
            { bold: "Akıllı Baston / Gözlük", text: "Görme engelli bireyin kamerayı tuttuğu nesneyi (ilaç kutusu, kapı, otobüs numarası) tanıyan ve kulağına fısıldayan asistan projesi." },
            { bold: "Bilişimle Hayat Kolaylaştırma", text: "Teknolojinin en kutsal görevi engelleri kaldırmaktır." }
          ]
        }
      ]
    },
    section2: {
      title: "Scratch Kodlama Mimarisi",
      subtitle: "Nesne tanındığında tetiklenen çok kanallı kod blokları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Nesneye Göre Tepki Verme",
          icon: "🧩",
          borderClass: "card-purple-border",
          desc: "Karar yapılarının kullanımı:",
          items: [
            { bold: "Eğer <Elma algılandı> ise:", text: "-> Elma dekoruna geç\n-> 'Amasya Elması tespit edildi' de ve seslendir\n-> Fiyat değişkenini 30 yap" },
            { bold: "Eğer <Muz algılandı> ise:", text: "-> Muz dekoruna geç\n-> 'Yerli Anamur Muzu tespit edildi' de ve seslendir\n-> Fiyat değişkenini 45 yap" }
          ]
        },
        {
          title: "Hatalı Tanımayı Önleme",
          icon: "🛡️",
          borderClass: "card-accent-border",
          desc: "Kararsızlık anında güvenlik tedbiri:",
          items: [
            { bold: "Boş Kamera Sınıfı", text: "Kamerada hiçbir şey yokken sistemin kendi kendine konuşmasını engellemek için 'Bos' adında bir sınıf eğitin!" },
            { bold: "Bekleme Süresi", text: "Seslendirme bittikten sonra 2 saniye bekleyin ki aynı şeyi 50 defa tekrarlamasın." }
          ]
        }
      ]
    },
    workshop: {
      title: "Akıllı Manav Kamerasını Canlı Çalıştırma",
      subtitle: "Sınıfa getirilen elma ve muzu tanıyan yapay zekâ projesi.",
      steps: [
        { title: "Elmayı Göster", desc: "Kameraya elmayı tutun; asistan anında tanısın, ekranda elma belirsin ve sesli fiyat söylesin." },
        { title: "Muzu Göster", desc: "Elmayı çekip muzu tutun; ekran muz olsun ve 'Yerli muz tartıldı' desin." },
        { title: "Boş Bırak", desc: "Nesneyi çekince asistan 'Lütfen tartıya ürün koyunuz' uyarısı versin." }
      ],
      criteria: [
        "Farklı nesnelerin yüksek doğrulukla ayırt edilmesi",
        "Görsel ve sesli bildirimin eş zamanlı çalışması",
        "Kamera önü boşken hatalı çalışmaması"
      ]
    },
    tips: {
      safetyTitle: "Doğruluk Oranını Artırma",
      safetyRules: [
        { bold: "Kameraya Çok Yaklaştırmayın", text: "Nesneyi kameranın tam burnuna sokarsanız görüntü bulanıklaşır; 20-30 cm mesafeden net gösterin." },
        { bold: "Döndürerek Gösterin", text: "Nesnenin sapı veya arkası dönükken de tanıyabilmesi için çevirerek örnek toplamış olun." }
      ],
      myths: [
        { wrong: "Akıllı kameralar insan gözü gibi derinliği ve kokuyu algılar.", correct: "Kamera sadece renk piksellerinin dizilişine bakar; elmanın kokusunu veya tadını bilmez." }
      ]
    },
    quiz: {
      question: "Akıllı kamera projesinde kameranın önünde hiçbir nesne yokken yapay zekânın rastgele sesler çıkarmasını engellemek için en profesyonel çözüm hangisidir?",
      options: [
        { text: "A) Bilgisayarın sesini kısmak", isCorrect: false },
        { text: "B) Model eğitiminde kamera önünün boş olduğu durum için 'Bos' adında ayrı bir sınıf tanımlamak", isCorrect: true },
        { text: "C) Kamerayı bantla kapatmak", isCorrect: false },
        { text: "D) Yeşil bayrağa basmamak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Makine öğrenmesinde 'Arka Plan / Boş' sınıfı eğitmek, sistemin boşta dururken yanlış kararlar vermesini engelleyen en kritik mühendislik kuralıdır."
    },
    summaryRules: [
      { bold: "Görüntü + Ses = Asistan", text: "Görüntü algılama ses senteziyle birleşince akıllı ürünler doğar." },
      { bold: "Engelleri Kaldıran Teknoloji", text: "Yapay zekâ görme engelli bireyler için dünyaya açılan bir gözdür." },
      { bold: "Gelecek Hafta Sesli Komutlar", text: "Kameradan sonra şimdi de sesimizle kuklaları yöneteceğiz!" }
    ],
    homework: "Görme engelli bir bireyin günlük hayatını kolaylaştıracak yapay zekâlı bir cihaz fikri tasarlayıp 3 cümleyle anlatın.",
    nextWeekPreview: "Sesle Kontrol Edilen Projeler: 'Zıpla' Deyince Zıplayan Kuklalar & 19 Mayıs Coşkusu!"
  },

  // 36. HAFTA
  {
    week: 36,
    date: "17 - 23 Mayıs",
    hours: "2 Saat",
    unit: "KURBAN BAYRAMI / 19 MAYIS & 6. Ünite",
    unitBadge: "Bayram & 6. Ünite",
    unitTheme: "unite-6",
    title: "Sesle Kontrol Edilen Proje Geliştirme",
    subtitle: "Ses Tanıma Modeli, 19 Mayıs Atatürk'ü Anma Gençlik ve Spor Bayramı Projesi",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Sesle Kontrol & Milli Bayram Projesi",
    curiosityQuestion: "Klavyeye dokunmadan, mikrofona sadece 'Zıpla!', 'Koş!' veya 'Dur!' diyerek bir oyunu sadece sesinizle yönetebilir misiniz?",
    roadmap: [
      { title: "Ses Tanıma Yapay Zekâsı", desc: "Mikrofondan gelen ses dalgalarının frekans spektrogramını analiz etme." },
      { title: "Ses Komutu Modeli Eğitme", desc: "'Zıpla', 'Ateş', 'Sağ' kelimelerini Teachable Machine Audio ile eğitme." },
      { title: "19 Mayıs Gençlik ve Spor Projesi", desc: "Sesli komutla engelleri aşan milli atletizm koşu oyunu tasarımı." },
      { title: "Gürültü Eşiği Ayarı", desc: "Sınıftaki arka plan uğultusu ile öğrencinin komutunu ayırt etme." }
    ],
    section1: {
      title: "Ses Tanıma (Audio AI) Nasıl Çalışır?",
      subtitle: "Bilgisayar ses dalgalarını görsel resimlere (spektrogram) dönüştürerek öğrenir.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Ses Modeli Eğitme Adımları",
          icon: "🎙️",
          borderClass: "card-primary-border",
          desc: "Teachable Machine Audio kütüphanesi:",
          items: [
            { bold: "1. Arka Plan Gürültüsü (Background)", text: "Önce 20 saniye boyunca hiç konuşmadan odadaki sessizliği kaydedin." },
            { bold: "2. Komut Kelimesi ('Zıpla')", text: "Farklı tonlarda ve hızlarda 20-30 kez 'Zıpla' kelimesini söyleyip kaydedin." },
            { bold: "3. İkinci Komut ('Dur')", text: "Aynı şekilde 'Dur' komutunu kaydedin." },
            { bold: "4. Modeli Eğit", text: "Yapay zekâ sesinizin frekans parmak izini çıkarır!" }
          ]
        },
        {
          title: "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı",
          icon: "🇹🇷",
          borderClass: "card-accent-border",
          desc: "Gazi Mustafa Kemal Atatürk'ün gençliğe armağanı:",
          items: [
            { bold: "Gençlik ve Spor Ruhu", text: "19 Mayıs 1919'da Samsun'da yakılan bağımsızlık meşalesi." },
            { bold: "Sesli Koşu Oyunu", text: "Milli atletimiz koşarken karşısına çıkan engelleri mikrofona 'Zıpla!' diyerek aşıyor!" }
          ]
        }
      ]
    },
    section2: {
      title: "Scratch ile Sesli Komut Entegrasyonu",
      subtitle: "Mikrofon sesini hareket bloklarına bağlama.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Kodlama Yapısı",
          icon: "🧩",
          borderClass: "card-purple-border",
          desc: "Ses algılandığında çalışan mekanizma:",
          items: [
            { bold: "'Zıpla' Sesi Duyulduğunda:", text: "-> Karakterin Y_Hizi değişkenini 12 yap (Karakter havaya sıçrar!)." },
            { bold: "'Hızlı' Sesi Duyulduğunda:", text: "-> Koşu hızını 15 yap." },
            { bold: "'Dur' Sesi Duyulduğunda:", text: "-> Hızı 0 yap ve dinlenme kostümüne geç." }
          ]
        },
        {
          title: "Hassasiyet Ayarı",
          icon: "🎛️",
          borderClass: "card-success-border",
          desc: "Yanlış tetiklenmeleri önleme:",
          items: [
            { bold: "Güven Eşiği (%85)", text: "Model söylediğiniz kelimeden en az %85 emin olduğunda komutu çalıştırır." },
            { bold: "Mikrofon Ses Seviyesi", text: "Scratch'in içindeki 'Ses yüksekliği > 50' bloğu ile de basit sesli kontroller yapılabilir." }
          ]
        }
      ]
    },
    workshop: {
      title: "19 Mayıs Sesli Koşu Şampiyonası",
      subtitle: "Sesimizle engelli koşan atlet kuklasını yöneteceğiz.",
      steps: [
        { title: "Koşu Sahnesini Kur", desc: "Arka plana stadyum pisti ve Türk bayrakları yerleştirin." },
        { title: "Engelleri Kaydır", desc: "Engeller sağdan sola doğru sürekli aksın." },
        { title: "Sesle Zıplat", desc: "Engel yaklaştığında mikrofona 'Zıpla!' diye bağırarak atletin engeli aşmasını sağlayın!" }
      ],
      criteria: [
        "Ses komutunun zamanında algılanması",
        "Karakterin sesle senkronize şekilde zıplaması",
        "19 Mayıs coşkusunu yansıtan grafik ve sesler"
      ]
    },
    tips: {
      safetyTitle: "Sınıfta Ses Kaydederken",
      safetyRules: [
        { bold: "Sessizlik Şart", text: "Arka plan gürültüsü sınıf arkadaşlarınızın sesleriyle dolarsa yapay zekâ her sesi komut zannedebilir; kayıt anında sınıfta çıt çıkmamalıdır." }
      ],
      myths: [
        { wrong: "Sesle kontrol sadece pahalı akıllı arabalarda ve telefonlarda çalışır.", correct: "Bugün 6. sınıf bilişim dersinde kendi sesimizle çalışan sistemleri kendimiz üretiyoruz!" }
      ]
    },
    quiz: {
      question: "Teachable Machine Audio ile bir ses tanıma modeli eğitirken yapay zekânın ortamdaki uğultuyu konuşma zannetmemesi için ilk önce hangi sınıf eğitilmelidir?",
      options: [
        { text: "A) Müzik Sınıfı", isCorrect: false },
        { text: "B) Arka Plan Gürültüsü (Background Noise)", isCorrect: true },
        { text: "C) Çığlık Sınıfı", isCorrect: false },
        { text: "D) Fısıltı Sınıfı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Ses modellerinde 'Arka Plan Gürültüsü' kaydedilerek modelin sessizlik ile komut kelimesi arasındaki farkı öğrenmesi sağlanır."
    },
    summaryRules: [
      { bold: "Ses = Dijital Parmak İzi", text: "Yapay zekâ ses dalgalarını analiz ederek komutları tanır." },
      { bold: "Eller Serbest (Hands-Free)", text: "Sesle kontrol engelli bireyler ve sürücüler için hayat kurtarır." },
      { bold: "19 Mayıs Kutlu Olsun!", text: "Bilişimle üreten Türk gençliği geleceğin mimarıdır." }
    ],
    homework: "Sesle kontrol edilen bir akıllı ev sistemi tasarlasanız hangi 3 sesli komutu (Örn: 'Işıkları söndür') eklersiniz? Yazın.",
    nextWeekPreview: "Yapay Zekâ ile Çevre ve Sıfır Atık Projesi: Akıllı Geri Dönüşüm Kutusu Tasarımı!"
  },

  // 37. HAFTA
  {
    week: 37,
    date: "24 - 30 Mayıs",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-5",
    title: "Yapay Zekâ ile Sıfır Atık & Çevre Projesi",
    subtitle: "Akıllı Geri Dönüşüm Kutusu: Plastik, Kağıt, Cam ve Metal Atık Ayrıştırma",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Sosyal Sorumluluk & Yapay Zekâ Mühendisliği",
    curiosityQuestion: "Çöpe attığımız plastik bir şişenin denize veya toprağa karışıp 500 yıl boyunca dünyayı kirletmesini yapay zekâ nasıl engeller?",
    roadmap: [
      { title: "Sıfır Atık Hareketi Nedir?", desc: "Geri dönüştürülebilir atıkların kaynağında doğru kutulara ayrıştırılması." },
      { title: "Büyük Problem: Karışık Çöp", desc: "İnsanların plastik kutusuna cam veya çöp atması sonucu geri dönüşümün imkânsızlaşması." },
      { title: "Yapay Zekâ Çözümü", desc: "Kameranın atığı görüp kapağı otomatik açtığı 'Akıllı Sıfır Atık Kutusu' projesi." },
      { title: "Model Eğitimi: 4 Atık Türü", desc: "Plastik (Sarı), Kâğıt (Mavi), Cam (Yeşil) ve Organik Atık (Kahverengi)." }
    ],
    section1: {
      title: "Akıllı Sıfır Atık Kutusu Proje Mimarisi",
      subtitle: "Geleceğin temiz dünyasını bilişim ve yapay zekâ ile inşa ediyoruz.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Sistem Nasıl Çalışır?",
          icon: "♻️",
          borderClass: "card-success-border",
          desc: "Akıllı çöp kutusuna yaklaşan bir öğrenci:",
          items: [
            { bold: "1. Kameraya Gösterir", text: "Elindeki pet şişeyi kutunun üzerindeki kameraya tutar." },
            { bold: "2. YZ Karar Verir", text: "Model '%98 Plastik Atık' sınıflandırmasını yapar." },
            { bold: "3. Doğru Kapak Açılır", text: "Sarı Plastik kapağı açılır ve yeşil ışık yanar." },
            { bold: "4. Teşekkür ve Puan", text: "'Teşekkürler, doğayı korudunuz! +5 Çevre Puanı' sesi duyulur." }
          ]
        },
        {
          title: "4 Temel Atık Sınıfı",
          icon: "🗑️",
          borderClass: "card-primary-border",
          desc: "Eğiteceğimiz yapay zekâ veri sınıfları:",
          items: [
            { bold: "Plastik Sınıfı", text: "Su şişeleri, yoğurt kapları, plastik poşetler." },
            { bold: "Kâğıt Sınıfı", text: "Karton kutular, defter yaprakları, gazete." },
            { bold: "Cam Sınıfı", text: "Cam kavanozlar, soda şişeleri." },
            { bold: "Organik / Çöp", text: "Muz kabuğu, elma çöpü, yemek artıkları." }
          ]
        }
      ]
    },
    section2: {
      title: "Scratch Simülasyonunun Kodlanması",
      subtitle: "Kameradan algılanan atığa göre doğru kutunun kapağını hareket ettirmek.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Kapak Animasyonu Kodları",
          icon: "🧩",
          borderClass: "card-purple-border",
          desc: "Kutuların kuklalarına yazılan bloklar:",
          items: [
            { bold: "Plastik Algılandığında:", text: "-> '[Plastik_Kapak_Ac]' haberini sal.\n-> Sarı kutu kuklası: 'Kapak_Acik' kostümüne geç.\n-> 3 saniye sonra: 'Kapak_Kapali' kostümüne dön." },
            { bold: "Ödül Sistemi:", text: "-> 'Cevre_Puani' değişkenini 5 artır." }
          ]
        },
        {
          title: "Sesli Yönlendirme",
          icon: "📢",
          borderClass: "card-accent-border",
          desc: "Kullanıcıya yardımcı olan sesler:",
          items: [
            { bold: "Metinden Sese", text: "'Lütfen elinizdeki kartonu mavi kutuya atınız' sesli rehberliği." },
            { bold: "Tebrik Melodisi", text: "Her doğru atıkta neşeli bir başarı zili." }
          ]
        }
      ]
    },
    workshop: {
      title: "Akıllı Geri Dönüşüm Kutusu Projesi Geliştirme",
      subtitle: "Sınıfça okul bahçesi için sanal bir prototip üretiyoruz.",
      steps: [
        { title: "Veri Setini Topla", desc: "Plastik şişe, kâğıt parçası ve elma kabuğunu kamerada 100'er kare eğitin." },
        { title: "Scratch Sahnesini Çiz", desc: "Sarı (Plastik), Mavi (Kâğıt) ve Yeşil (Cam) kutu kuklaları yerleştirin." },
        { title: "Kamerayı Test Et", desc: "Kameraya kâğıt gösterince mavi kutunun kapağının açıldığını doğrulayın!" }
      ],
      criteria: [
        "Atık türlerinin doğru kutularla eşleştirilmesi",
        "Çevre puanı sayacının doğru çalışması",
        "Sosyal farkındalık oluşturan sesli ve görsel mesajlar"
      ]
    },
    tips: {
      safetyTitle: "Doğa İçin Bilişim",
      safetyRules: [
        { bold: "Teknoloji Doğayı Kurtarabilir", text: "Bilişim sadece eğlence için değil, çevre kirliliği ve iklim krizi gibi küresel sorunları çözmek için en güçlü araçtır." }
      ],
      myths: [
        { wrong: "Geri dönüşüm kutularındaki atıklar nasılsa aynı yere dökülüyor.", correct: "Doğru ayrıştırılan atıklar fabrikalarda eritilerek yeni defterlere, kıyafetlere ve eşyalara dönüşür; enerji tasarrufu sağlar." }
      ]
    },
    quiz: {
      question: "Kameraya gösterilen bir pet şişenin plastik olduğunu tespit edip sadece plastik geri dönüşüm kapağını açan bir sistem hangi bilişim bileşenlerini birlikte kullanır?",
      options: [
        { text: "A) Sadece Kelime İşlemci", isCorrect: false },
        { text: "B) Yapay Zekâ Görüntü Tanıma + Karar Yapıları (Eğer) + Mekanik Kontrol", isCorrect: true },
        { text: "C) Sadece Sabit Disk", isCorrect: false },
        { text: "D) E-posta Göndericisi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Akıllı geri dönüşüm sistemleri görüntü tanıma yapay zekâsını kodlama karar yapıları ve motorlarla birleştiren tam bir mekatronik sistemdir."
    },
    summaryRules: [
      { bold: "Sıfır Atık = Temiz Gelecek", text: "Atıkları doğru kutulara atmak her vatandaşın sorumluluğudur." },
      { bold: "YZ Doğanın Hizmetinde", text: "Akıllı kamera sistemleri insan hatalarını sıfıra indirir." },
      { bold: "Proje Gelişiyor", text: "Gelecek hafta projemizi test edip sergi için mükemmelleştireceğiz!" }
    ],
    homework: "Evinizde bir günde çıkan atıkların listesini yapın ve kaç tanesinin geri dönüştürülebilir olduğunu belirleyin.",
    nextWeekPreview: "Yapay Zekâ Projesi Geliştirme, Test Etme ve İyileştirme (Kullanıcı Deneyimi / UI-UX)!"
  },

  // 38. HAFTA
  {
    week: 38,
    date: "31 Mayıs - 06 Haziran",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-6",
    title: "Proje Geliştirme, Test & İyileştirme",
    subtitle: "Kullanıcı Deneyimi (UX), Arayüz Tasarımı (UI), Alfa/Beta Testleri ve Hata Giderme",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Yazılım Testi, Optimizasyon & Kullanıcı Deneyimi",
    curiosityQuestion: "Dünyanın en iyi kodlanmış oyunu bile olsa, butonları karışık ve yazıları okunaksızsa oyuncular neden oynamayı hemen bırakır?",
    roadmap: [
      { title: "UI ve UX Nedir?", desc: "Kullanıcı Arayüzü (UI: Renkler, butonlar) ve Kullanıcı Deneyimi (UX: Kolaylık, akıcılık)." },
      { title: "Kullanıcı Testi (Akran Testi)", desc: "Projeyi arkadaşına verip 'Hiçbir şey sormadan oyna' diyerek izleme sanatı." },
      { title: "Geri Bildirim Toplama", desc: "Oyunun neresi zor? Nerede takıldı? Hangi buton anlaşılmadı?" },
      { title: "Son Rötuşlar", desc: "Ses efektleri, skor tablosu, başlangıç kılavuzu ve estetik iyileştirmeler." }
    ],
    section1: {
      title: "UI ve UX: Oyununuzu Profesyonel Kılın",
      subtitle: "Sadece çalışan değil, kullanması zevkli ve kolay ürünler tasarlamak.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Kullanıcı Arayüzü (UI - User Interface)",
          icon: "🎨",
          borderClass: "card-primary-border",
          desc: "Kullanıcının ekranda gördüğü tüm görsel unsurlar:",
          items: [
            { bold: "Okunaklı Yazılar", text: "Yazı rengi ile arka plan rengi yüksek kontrastlı olmalı (Koyu zemine beyaz yazı)." },
            { bold: "Net Butonlar", text: "'Başla', 'Nasıl Oynanır', 'Tekrar Dene' butonları büyük ve kolay tıklanır olmalı." },
            { bold: "Düzenli Ekran", text: "Skor, can ve süre sayaçları sahnenin köşelerine düzgünce yerleştirilmelidir." }
          ]
        },
        {
          title: "Kullanıcı Deneyimi (UX - User Experience)",
          icon: "💡",
          borderClass: "card-success-border",
          desc: "Kullanıcının oyunu oynarken hissettiği rahatlık ve duygu:",
          items: [
            { bold: "Anlaşılır Kurallar", text: "Oyunun başında 'Ok tuşlarıyla yönet, elmalardan puan topla' yazan 3 saniyelik kılavuz olmalı." },
            { bold: "Zorluk Dengesi", text: "Oyun ne pes ettirecek kadar imkânsız ne de esnetecek kadar aşırı kolay olmalıdır." }
          ]
        }
      ]
    },
    section2: {
      title: "Akran Testi (Peer Review) Nasıl Yapılır?",
      subtitle: "Kendi göremediğiniz hataları arkadaşınız 10 saniyede yakalar!",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Test Protokolü",
          icon: "📋",
          borderClass: "card-accent-border",
          desc: "Profesyonel oyun stüdyolarının test yöntemi:",
          items: [
            { bold: "1. Sessizce İzleyin", text: "Arkadaşınız oynarken ona ipucu vermeyin; nereye tıklayacağını kendi bulabiliyor mu izleyin." },
            { bold: "2. Takıldığı Yerleri Not Alın", text: "Eğer arkadaşınız 'Şimdi ne yapacağım?' diyorsa, oyununuzda kılavuz eksiktir!" },
            { bold: "3. Beklenmeyen Hatalar", text: "Kukla duvara sıkıştı mı? Puan eksiye düştü mü?" }
          ]
        },
        {
          title: "İyileştirme Listesi",
          icon: "🛠️",
          borderClass: "card-purple-border",
          desc: "Testten sonra yapılacak düzenlemeler:",
          items: [
            { bold: "Hata Giderme", text: "Tespit edilen kod hatalarını düzeltin." },
            { bold: "Cila (Polish)", text: "Zıplama sesleri, arka plan müziği ve zafer konfetileri ekleyin." }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi 'Akran Testi' İstasyonu",
      subtitle: "Projelerimizi yan sıradaki arkadaşımızla değiştirip test ediyoruz.",
      steps: [
        { title: "Projeleri Değişin", desc: "Arkadaşınızın bilgisayarına geçin ve projesini yeşil bayrakla başlatın." },
        { title: "Değerlendirme Kartı Doldur", desc: "1. Kurallar anlaşılıyor mu? (5/5), 2. Görseller güzel mi? (5/5), 3. Bir hata gördün mü?" },
        { title: "Geri Bildirim Ver", desc: "Nazik ve yapıcı bir dille: 'Oyunun çok eğlenceli ama canavar biraz fazla hızlı gidiyor, biraz yavaşlatırsan harika olur!'" }
      ],
      criteria: [
        "Objektif ve yapıcı geri bildirim verebilme",
        "Eleştirileri olgunlukla dinleyip projeyi geliştirebilme",
        "UI ve UX standartlarına uygunluk"
      ]
    },
    tips: {
      safetyTitle: "Yazılımcı Erdemi: Eleştiriye Açık Olmak",
      safetyRules: [
        { bold: "Alınmak Yok, Gelişmek Var!", text: "Biri projenizdeki bir hatayı söylediğinde sevinin; çünkü sergiden önce o hatayı düzeltme şansı kazanmış oldunuz!" }
      ],
      myths: [
        { wrong: "Bir oyun kodlandıktan sonra ilk haliyle piyasaya sürülür.", correct: "Büyük oyunlar piyasaya çıkmadan önce aylarca binlerce test kullanıcısı (Beta Tester) tarafından test edilir." }
      ]
    },
    quiz: {
      question: "Bir bilgisayar oyununda butonların büyüklüğü, renklerin uyumu ve yazıların netliği gibi doğrudan göze hitap eden tasarım ögelerine ne ad verilir?",
      options: [
        { text: "A) UI (Kullanıcı Arayüzü)", isCorrect: true },
        { text: "B) IP Adresi", isCorrect: false },
        { text: "C) DNS Sunucusu", isCorrect: false },
        { text: "D) MP3 Formatı", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> UI (User Interface - Kullanıcı Arayüzü), ekrandaki butonlar, renkler, tipografi ve görsel düzeni ifade eder."
    },
    summaryRules: [
      { bold: "UI = Güzellik, UX = Kolaylık", text: "İkisi bir arada olunca efsane projeler doğar." },
      { bold: "Test Etmeden Yayınlama", text: "Akran testi projedeki görünmez hataları ortaya çıkarır." },
      { bold: "Büyük Sergiden Önceki Son Adım", text: "Gelecek hafta final sınavı ve sergi hazırlığı var!" }
    ],
    homework: "Arkadaşınızdan aldığınız geri bildirimlere göre projenizdeki 2 eksiği giderin ve son halini kaydedin.",
    nextWeekPreview: "2. Dönem 2. Sınav Tekrarı & Büyük Yıl Sonu Proje Sergisi Hazırlığı!"
  },

  // 39. HAFTA
  {
    week: 39,
    date: "07 - 13 Haziran",
    hours: "2 Saat",
    unit: "SINAV HAFTASI & 6. Ünite: Yazılım Tasarımı",
    unitBadge: "Sınav & Sergi Hazırlığı",
    unitTheme: "unite-6",
    title: "2. Dönem 2. Sınav & Proje Sergileme",
    subtitle: "Yılın Son Sınavı, Kodlama & Yapay Zekâ Özeti ve Proje Tanıtım Posteri",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Yıllık Sentez, Sınav Başarısı & Ürün Tanıtımı",
    curiosityQuestion: "Bir yıl boyunca öğrendiğiniz devasa bilişim bilgi hazinesini ve geliştirdiğiniz projeyi okul sergisinde ziyaretçilere nasıl profesyonelce sunarsınız?",
    roadmap: [
      { title: "2. Dönem 2. Sınav Kapsamı", desc: "Scratch blokları, değişkenler, şartlar, haber salma ve yapay zekâ entegrasyonu." },
      { title: "Sınav Soru Tipleri", desc: "Kod tamamlama, hata bulma ve algoritma akış şeması soruları." },
      { title: "Proje Tanıtım Kartı (Poster)", desc: "Projenin adı, amacı, kullanılan teknolojiler ve geliştiricinin adı." },
      { title: "Sergi Standı Düzeni", desc: "Ziyaretçilerin projeyi akıllı tahtada veya bilgisayarda rahatça deneyimlemesi." }
    ],
    section1: {
      title: "Yılın Son Sınavı İçin Dev Özet",
      subtitle: "2. Dönemin tüm kodlama ve yapay zekâ kazanımları tek bakışta.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Scratch Kodlama Kazanımları",
          icon: "🐱",
          borderClass: "card-primary-border",
          desc: "BTY.6.6.1 - BTY.6.6.2:",
          items: [
            { bold: "Koordinatlar", text: "X yatay (-240 ile +240), Y dikey (-180 ile +180), merkez X:0 Y:0." },
            { bold: "Değişkenler", text: "Sayaçlar için 'Bir değişken oluştur'; başlangıçta sıfırla, olay olunca 1 değiştir." },
            { bold: "Şartlar & Döngüler", text: "'Eğer' mutlaka 'Sürekli tekrarla' içinde olmalıdır." },
            { bold: "Haber Salma", text: "Kuklalar arası iletişim ve sahne geçişi telsiz anonsudur." }
          ]
        },
        {
          title: "Yapay Zekâ Kazanımları",
          icon: "🤖",
          borderClass: "card-purple-border",
          desc: "BTY.6.6.3:",
          items: [
            { bold: "Eklentiler", text: "Video Algılama (kamera hareketi), Metinden Sese (Amazon Polly seslendirme)." },
            { bold: "Teachable Machine", text: "Veri topla -> Eğit -> Test et -> Model URL'sini Scratch'e bağla." },
            { bold: "Sosyal Fayda", text: "Sıfır atık, akıllı market ve engelsiz yaşam projeleri." }
          ]
        }
      ]
    },
    section2: {
      title: "Proje Tanıtım Posteri Hazırlama",
      subtitle: "Gelecek hafta sergide projenizin başında duracak tanıtım kartı.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Poster Üzerinde Neler Olmalı?",
          icon: "📜",
          borderClass: "card-success-border",
          desc: "A4 kâğıdına renkli olarak hazırlanacak bilgiler:",
          items: [
            { bold: "Proje Adı", text: "Örn: 'Akıllı Sıfır Atık Kutusu' veya 'Sesli 19 Mayıs Koşusu'." },
            { bold: "Geliştirici", text: "Adınız, Soyadınız ve Sınıfınız (Örn: 6/A - 124)." },
            { bold: "Projenin Amacı", text: "'Bu proje, çöplerin doğru kutulara atılmasını yapay zekâ ile otomatikleştirmeyi amaçlar.'" },
            { bold: "Nasıl Oynanır?", text: "3 maddede ziyaretçiye verilecek yönerge." }
          ]
        },
        {
          title: "Sergide Bilişim Duruşu",
          icon: "👔",
          borderClass: "card-accent-border",
          desc: "Ziyaretçilere projeyi tanıtırken:",
          items: [
            { bold: "Güleryüz ve Nezaket", text: "'Hoş geldiniz öğretmenim, projemizi denemek ister misiniz?'" },
            { bold: "Teknik Açıklama", text: "'Burada kamera görüntüyü alıyor ve Teachable Machine modeline gönderiyor...'" }
          ]
        }
      ]
    },
    workshop: {
      title: "Hızlı Sınav Tekrarı & Poster Tasarımı",
      subtitle: "Sınav öncesi son provayı yapıp sergi posterimizi hazırlıyoruz.",
      steps: [
        { title: "Sınav Sorusunu Çöz", desc: "'Eğer <Y konumu < -150> ise' kodu ne zaman çalışır? (Cevap: Nesne yere düştüğünde)." },
        { title: "Posteri Doldur", desc: "A4 kâğıdınıza projenizin ekran görüntüsünü veya çizimini yapıştırıp tanıtım metnini yazın." },
        { title: "Standını Hazırla", desc: "Bilgisayarındaki projeyi tam ekran yap ve test et!" }
      ],
      criteria: [
        "Sınav kavramlarını eksiksiz tekrarlama",
        "Tanıtım posterinin düzenli ve anlaşılır olması",
        "Projenin çalışır vaziyette hazır tutulması"
      ]
    },
    tips: {
      safetyTitle: "Son Sınav Hatırlatması",
      safetyRules: [
        { bold: "Yıllık Emeklerinizin Karşılığı", text: "Bu sınav bir yıl boyunca bilişim sınıfında gösterdiğiniz çabanın ve kazandığınız dijital yeteneklerin taçlanmasıdır. Başarılar dileriz!" }
      ],
      myths: [
        { wrong: "Sınav bitince bilişim biter.", correct: "Bilişim bir ders değil, tüm hayatınız boyunca kullanacağınız ve dünyayı değiştireceğiniz bir yaşam biçimidir!" }
      ]
    },
    quiz: {
      question: "Scratch projesinde bir kuklanın başka bir kuklayla çarpıştığını algılayıp aynı anda hem puanı artırıp hem de sahneyi değiştiren blok yapısı hangisidir?",
      options: [
        { text: "A) 10 adım git", isCorrect: false },
        { text: "B) Eğer <değiyor mu?> ise [Puanı değiştir] ve [Haber sal]", isCorrect: true },
        { text: "C) 1 saniye bekle", isCorrect: false },
        { text: "D) Boyutu %10 yap", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Algılama bloğu ile şart yapısı birleşerek hem değişkeni günceller hem de haber salarak sahne akışını yönetir."
    },
    summaryRules: [
      { bold: "Sınavı Başarıyla Tamamladık", text: "Yılın tüm kazanımlarını başarıyla sergilediniz." },
      { bold: "Poster Hazır", text: "Projenizi anlatan harika bir tanıtım kartı oluşturdunuz." },
      { bold: "Büyük Final Haftası!", text: "Gelecek hafta tüm okula projelerimizi sergiliyoruz!" }
    ],
    homework: "Projenizin tanıtım posterini tamamlayıp gelecek haftaki büyük sunum için hazırlayın.",
    nextWeekPreview: "Yapay Zekâ Destekli Ürün Sunumu ve Dijital Portfolyo Paylaşımı!"
  },

  // 40. HAFTA
  {
    week: 40,
    date: "14 - 20 Haziran",
    hours: "2 Saat",
    unit: "6. Ünite: Yazılım Tasarımı ve Programlama",
    unitBadge: "6. Ünite",
    unitTheme: "unite-5",
    title: "Yapay Zekâ Ürün Sunumu & Portfolyo",
    subtitle: "Proje Pitching (Etkili Sunum), Canlı Demo, Dijital Portfolyo ve Akran Değerlendirmesi",
    outcomeCode: "BTY.6.6.3",
    targetSkill: "Etkili Sunum, İletişim & Dijital Portfolyo",
    curiosityQuestion: "Harika bir oyun veya yapay zekâ programı kodladınız; peki bunu insanlara 2 dakikada en heyecan verici şekilde nasıl anlatırsınız?",
    roadmap: [
      { title: "Etkili Sunum (Pitching) Nedir?", desc: "Silikon Vadisi girişimcileri gibi projenin fikrini ve gücünü kısaca anlatma." },
      { title: "2 Dakikalık Altın Sunum Planı", desc: "1. Problem -> 2. Yapay Zekâ Çözümü -> 3. Canlı Demo -> 4. Gelecek Planı." },
      { title: "Canlı Demo Heyecanı", desc: "Projeyi tahtada canlı çalıştırıp izleyicilere denetme sanatı." },
      { title: "Dijital Portfolyo", desc: "Yıl boyunca üretilen tüm çalışmaların (Tablo, ses, video, kod) dijital arşivi." }
    ],
    section1: {
      title: "2 Dakikada Proje Sunumu (Elevator Pitch)",
      subtitle: "Dinleyicileri etkilemenin ve projenizi parlatmanın 4 adımı.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Sunumun 4 Adımı",
          icon: "🎤",
          borderClass: "card-primary-border",
          desc: "Ziyaretçilere ve jüriye projenizi anlatırken:",
          items: [
            { bold: "1. Dikkat Çekici Soru (30 sn)", text: "'Günde kaç ton plastiğin denize karıştığını biliyor musunuz? İşte bu sorunu çözmek için yola çıktık.'" },
            { bold: "2. Yapay Zekâ Çözümümüz (30 sn)", text: "'Teachable Machine ile 4 farklı atığı tanıyan bir akıllı geri dönüşüm kutusu tasarladık.'" },
            { bold: "3. Canlı Demo (45 sn)", text: "'Bakın, kameraya pet şişeyi gösterdiğimde sarı kapak otomatik açılıyor ve çevre puanı veriyor!'" },
            { bold: "4. Kapanış & Teşekkür (15 sn)", text: "'Dinlediğiniz için teşekkür ederiz, sorularınız varsa yanıtlamaktan mutluluk duyarız.'" }
          ]
        },
        {
          title: "Beden Dili ve İletişim İpuçları",
          icon: "🌟",
          borderClass: "card-success-border",
          desc: "Kürsüde veya standın başında parlayın:",
          items: [
            { bold: "Göz Teması Kurun", text: "Sadece ekrana bakıp konuşmayın; dinleyicilerin gözlerine bakın." },
            { bold: "Ses Tonu", text: "Ne çok kısık ne bağırarak; enerjik, kendinden emin ve net bir sesle konuşun." },
            { bold: "Gülümseyin", text: "Projenizi severek ve gururla sunun!" }
          ]
        }
      ]
    },
    section2: {
      title: "Dijital Portfolyo: 1 Yıllık Emeğin Gururu",
      subtitle: "Bilişim dersinde sıfırdan ürettiğiniz tüm dijital eserler.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "1. Dönem Ürünleri",
          icon: "📁",
          borderClass: "card-primary-border",
          desc: "Veri ve medya uzmanlığı:",
          items: [
            { bold: "Excel Tablosu", text: "Harçlık ve tasarruf analizi." },
            { bold: "Podcast MP3'ü", text: "Audacity ile ses kurgusu." },
            { bold: "Video Filmi", text: "CapCut ile montajlanmış 10 Kasım anma klibi." }
          ]
        },
        {
          title: "2. Dönem Ürünleri",
          icon: "🎮",
          borderClass: "card-accent-border",
          desc: "Kodlama ve yapay zekâ:",
          items: [
            { bold: "Scratch Oyunları", text: "Labirent oyunu, Meyve yakalama şampiyonası." },
            { bold: "YZ Modelleri", text: "Teachable Machine elma-muz ve taş-kağıt-makas modelleri." }
          ]
        },
        {
          title: "Geleceğe Miras",
          icon: "🏆",
          borderClass: "card-purple-border",
          desc: "7. ve 8. sınıfta yapacağınız projelere zemin hazırlayan devasa bir dijital birikim!",
          items: [
            { bold: "Özgüven", text: "Teknoloji tüketicisi değil, teknoloji üreticisi bir zihin." }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi 'Proje Sunum Provasi'",
      subtitle: "Her öğrenci tahtaya çıkıp projesini 2 dakikada sunuyor.",
      steps: [
        { title: "Zamanlayıcıyı Başlat", desc: "Tahtada 2 dakikalık geri sayım sayacı açılsın." },
        { title: "Sunumunu Yap", desc: "Problem, çözüm, canlı demo ve teşekkür basamaklarıyla projeni tanıt." },
        { title: "Sınıfça Alkışla", desc: "Sunum bittiğinde tüm sınıf arkadaşını coşkuyla alkışlasın ve sorular sorsun!" }
      ],
      criteria: [
        "2 dakikalık zaman sınırına uyum sağlama",
        "Canlı demoyu hatasız ve akıcı gerçekleştirebilme",
        "Kendine güvenli, açık ve nazik bir beden dili"
      ]
    },
    tips: {
      safetyTitle: "Canlı Demo Sırasında Hata Olursa (Demo Laneti)",
      safetyRules: [
        { bold: "Soğukkanlı Olun!", text: "Büyük teknoloji şirketlerinin lansmanlarında bile bazen alet çalışmayabilir. Gülümseyin ve 'İşte yapay zekânın da bazen kafası karışabiliyor, hemen bir kez daha deniyoruz!' diyerek durumu profesyonelce toparlayın." }
      ],
      myths: [
        { wrong: "Sunum yapmak sadece çok konuşmayı sevenlerin işidir.", correct: "İyi bir sunum, hazırlıklı olmaya ve anlatacağı projeyi gerçekten iyi bilmeye dayanır." }
      ]
    },
    quiz: {
      question: "Bir yazılım veya yapay zekâ projesini jüriye tanıtırken izleyicilerin ilgisini en hızlı çeken başlangıç cümlesi hangisidir?",
      options: [
        { text: "A) 'Ben bu projeyi yaparken çok uykusuz kaldım.'", isCorrect: false },
        { text: "B) 'Günde kaç ton plastiğin denizlerimizi kirlettiğini biliyor musunuz? İşte bu problemi çözmek için buradayız.'", isCorrect: true },
        { text: "C) 'Hocam bana kaç puan vereceksiniz?'", isCorrect: false },
        { text: "D) 'Projem bitti işte öyle bir şeyler kodladım.'", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Projeye doğrudan çözdüğü gerçek hayat problemiyle ve merak uyandıran bir soruyla başlamak en etkili sunum tekniğidir."
    },
    summaryRules: [
      { bold: "Etkili Sunum", text: "Problem + YZ Çözümü + Canlı Demo + Teşekkür." },
      { bold: "Gurur Tablosu", text: "Yıl boyunca ürettiğiniz tüm dijital ürünler geleceğinizin teminatıdır." },
      { bold: "Yıl Sonu Şenliği!", text: "Gelecek hafta karne öncesi büyük Bilişim ve Teknoloji Şenliği'ndeyiz!" }
    ],
    homework: "Gelecek haftaki Teknoloji Şenliği için projenizin son kontrollerini yapın.",
    nextWeekPreview: "41. Hafta: Büyük Yıl Sonu Bilişim ve Teknoloji Şenliği & Başarı Sertifikaları!"
  },

  // 41. HAFTA (SOSYAL ETKİNLİK & YIL SONU)
  {
    week: 41,
    date: "21 - 27 Haziran",
    hours: "2 Saat",
    unit: "SOSYAL ETKİNLİK & YIL SONU",
    unitBadge: "Sosyal Etkinlik",
    unitTheme: "unite-1",
    title: "Yıl Sonu Bilişim & Teknoloji Şenliği",
    subtitle: "Dijital Sergi, Scratch Oyun Turnuvası, Başarı Belgeleri ve Geleceğe Bakış",
    outcomeCode: "Sosyal Etkinlik & Yıl Sonu",
    targetSkill: "Yıllık Değerlendirme, Sosyal Paylaşım & Kutlama",
    curiosityQuestion: "Bir yıl önce eylül ayında bu sınıfa ilk girdiğiniz gün ile bugün arasındaki farkı görebiliyor musunuz? Artık siz birer dijital üreticisiniz!",
    roadmap: [
      { title: "Büyük Bilişim Sergisi", desc: "Okul idaresi, öğretmenler ve diğer sınıfların projelerimizi ziyareti." },
      { title: "Scratch Oyun Turnuvası", desc: "Öğrencilerin kodladığı en eğlenceli oyunlarda sınıf şampiyonasının yapılması." },
      { title: "Yılın En'leri & Başarı Sertifikaları", desc: "'En Yaratıcı Oyun', 'En Çevreci Yapay Zekâ', 'En Temiz Kod' ödülleri." },
      { title: "Geleceğe Veda & Yaz Tatili Rehberi", desc: "Yaz tatilinde kodlama ve dijital üretimi sürdürme tavsiyeleri." }
    ],
    section1: {
      title: "Bir Yılın Masalsı Özeti: Nereden Nereye?",
      subtitle: "Eylül'den Haziran'a 41 haftalık bilişim yolculuğumuz.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Sonbahar: Temeller",
          icon: "🍂",
          borderClass: "card-primary-border",
          desc: "IoT, Bulut Bilişim ve Excel formülleriyle verileri fethettiniz. Audacity ile radyo podcastleri hazırladınız.",
          items: [
            { bold: "Beceriler", text: "Veri analitiği, ses montajı ve dijital okuryazarlık." }
          ]
        },
        {
          title: "Kış: Güvenlik & Etik",
          icon: "❄️",
          borderClass: "card-purple-border",
          desc: "Telif haklarını, kırılmaz şifreleri, siber zorbalıkla mücadeleyi ve yapay zekâ veri etiketlemeyi öğrendiniz.",
          items: [
            { bold: "Beceriler", text: "Bilinçli siber vatandaşlık ve etik değerler." }
          ]
        },
        {
          title: "İlkbahar: Kodlama & YZ",
          icon: "🌱",
          borderClass: "card-success-border",
          desc: "Scratch ile kendi oyunlarınızı kodladınız, Teachable Machine modellerini kameraya bağlayıp konuşturdunuz!",
          items: [
            { bold: "Beceriler", text: "Algoritma, oyun tasarımı ve yapay zekâ mühendisliği." }
          ]
        }
      ]
    },
    section2: {
      title: "Yaz Tatili İçin Bilişim Önerileri",
      subtitle: "Tatil boyunca üretmeye ve öğrenmeye devam edin.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Tatilde Neler Yapabilirsiniz?",
          icon: "☀️",
          borderClass: "card-accent-border",
          desc: "Gelişiminizi tatilde de sürdürün:",
          items: [
            { bold: "Scratch Topluluğu", text: "scratch.mit.edu adresinde dünyanın dört bir yanından çocukların projelerini inceleyin ve remixleyin." },
            { bold: "Robotik & Elektronik", text: "İlginiz varsa Arduino veya Micro:bit gibi minik elektronik kartlarla akıllı lamba yapmayı deneyin." },
            { bold: "Python'a Göz Atın", text: "7. sınıfa hazırlık olarak bloklardan metin tabanlı Python diline yavaşça göz atabilirsiniz." }
          ]
        },
        {
          title: "Dijital Yaşam Dengesi",
          icon: "🚴",
          borderClass: "card-primary-border",
          desc: "Yazın tadını çıkarın:",
          items: [
            { bold: "Gerçek Hayat Maceraları", text: "Güneşin, denizin, bisikletin ve arkadaşlarınızla sokakta oynamanın keyfini çıkarın." },
            { bold: "Kitap Okuyun", text: "Bilim kurgu ve teknoloji kitaplarıyla hayal gücünüzü zenginleştirin." }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi 'Scratch Oyun Turnuvası' ve Sergi",
      subtitle: "Bilişim sınıfının son gününde eğlence ve gurur tavan yapıyor!",
      steps: [
        { title: "Turnuva Başlasın", desc: "Öğrencilerin kodladığı oyunlar akıllı tahtada açılır ve en yüksek skoru yapanlar alkışlanır." },
        { title: "Başarı Belgeleri", desc: "Bilişim Teknolojileri Öğretmeni Vahit Keskin tarafından hazırlanan başarı sertifikaları dağıtılır." },
        { title: "Grup Fotoğrafı", desc: "Geleceğin yazılımcıları, mühendisleri ve yapay zekâ liderleri olarak hatıra fotoğrafı çekilir!" }
      ],
      criteria: [
        "Centilmence yarışma ve arkadaşlarını tebrik edebilme",
        "Bir yıllık emeğin tadını çıkarıp gurur duyma",
        "Geleceğe umutla ve merakla bakma"
      ]
    },
    tips: {
      safetyTitle: "Öğretmeninizden Bir Altın Nasihat",
      safetyRules: [
        { bold: "Dünyayı Değiştirecek Olan Sizlersiniz", text: "Teknoloji sadece bir araçtır; önemli olan onu iyilik için, insanlık için, doğayı korumak ve hayatı güzelleştirmek için kullanacak olan sizin vicdanınız, aklınız ve çalışkanlığınızdır." }
      ],
      myths: [
        { wrong: "Bilişim sadece bir ders saatiydi.", correct: "Bilişim sizin 21. yüzyılda dünyayı anlama, problem çözme ve hayallerinizi inşa etme süper gücünüzdür!" }
      ]
    },
    quiz: {
      question: "Bu yıl 6. sınıf Bilişim Teknolojileri dersinde edindiğiniz EN BÜYÜK kazanım aşağıdakilerden hangisidir?",
      options: [
        { text: "A) Sadece bilgisayar oyunlarını saatlerce oynamak", isCorrect: false },
        { text: "B) Teknolojiyi bilinçli, etik ve güvenli kullanan; problem çözen ve kendi projelerini üretebilen bir dijital vatandaş olmak", isCorrect: true },
        { text: "C) Bilgisayarın fişini takmayı öğrenmek", isCorrect: false },
        { text: "D) İnternette rastgele videolar izlemek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bir yıl boyunca edindiğiniz en kıymetli beceri, teknolojiyi tüketen değil; anlayan, yöneten, üreten ve etik kullanan bireyler olmanızdır!"
    },
    summaryRules: [
      { bold: "Tebrikler 6. Sınıflar!", text: "41 haftalık bilişim maratonunu gurur ve başarıyla tamamladınız." },
      { bold: "Sizlerle Gurur Duyuyoruz", text: "Ürettiğiniz tablolar, sesler, videolar, oyunlar ve YZ modelleri harikaydı." },
      { bold: "İyi Tatiller!", text: "7. sınıfta yeni bilişim maceralarında buluşmak üzere, harika bir yaz tatili dileriz!" }
    ],
    homework: "Yaz tatilinde bir bilim müzesini veya teknoloji atölyesini ziyaret edin ve fotoğrafını saklayın.",
    nextWeekPreview: "2026/2027 Eğitim Öğretim Yılı Sona Erdi. Harika Bir Yaz Tatili Dileriz!"
  }
];
