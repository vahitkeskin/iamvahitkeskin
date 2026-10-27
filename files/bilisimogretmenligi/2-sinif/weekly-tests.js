/**
 * MEB 2. Sınıf Bilişim Teknolojileri ve Yazılım
 * Haftalık 10 Soruluk Konu Değerlendirme Testleri (Türkiye Yüzyılı Maarif Modeli 2026-2027)
 * Öğretmen: Vahit Keskin
 * 41 Hafta x 10 Soru = 410 Soru
 * Not: 10. Sorular %100 konu uyumlu, derin analiz ve üst düzey düşünme gerektiren zor sorulardır.
 */

const WEEKLY_TESTS = {
  "1": [
    {
      "question": "Bilgisayarda resim yaparken, yazı yazarken veya çizgi film izlerken görüntüleri görmemizi sağlayan parça hangisidir?",
      "options": [
        {
          "text": "Fare (Mouse)",
          "isCorrect": false
        },
        {
          "text": "Ekran (Monitör)",
          "isCorrect": true
        },
        {
          "text": "Klavye",
          "isCorrect": false
        },
        {
          "text": "Elektrik Prizi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Monitör (Ekran), bilgisayarın bize bilgileri, renkleri ve resimleri gösteren penceresidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilişim ile Tanışma' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgisayarların hayatımızı nasıl kolaylaştırdığını öğrenme.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilişim ile Tanışma' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Masaüstü Bilgisayarın 4 Temel Parçası' kapsamında ele alınan <strong>Kasa (Sistem Birimi)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Bilgisayarın beynidir (İşlemci). Bütün hesaplamaları ve düşünme işini kasa yapar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kasa (Sistem Birimi), bilişim sistemlerinde Bilgisayarın beynidir (İşlemci). Bütün hesaplamaları ve düşü... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Monitör (Ekran)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bilgisayarın yüzüdür. Yaptığımız resimleri, yazıları ve oyunları bize gösterir.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Monitör (Ekran), Bilgisayarın yüzüdür. Yaptığımız resimleri, yazıları ve oyunları bize gösterir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bilgisayarlar Nerede Yaşar? Çeşitleri Nelerdir?' bölümünde vurgulanan <strong>Dizüstü (Laptop)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Ekranı, klavyesi ve pili tek gövdede birleşmiş kat... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Dizüstü (Laptop) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Parça Eşleştirme Dedektifi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Parçaları İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sadece monitör (ekran) tek başına bilgisayardır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Monitör sadece görüntü verir; asıl düşünen ve çalışan parça kasanın içindedir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Ellerimiz Temiz Olmalı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Bilgisayar başına oturmadan önce ellerimizi yıkayıp kurulamalıyız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Ellerimiz Temiz Olmalı prensibi, Bilgisayar başına oturmadan önce ellerimizi yıkayıp kurulamalıyız. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Teknolojik Cihazları Tanıma ve Temel Parçaları Sınıflandırma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kasa: Bilgisayarın beyni ve yönetim merkezidir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kasa' doğrultusunda Bilgisayarın beyni ve yönetim merkezidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Bilişim Dünyasına Merhaba & Bilgisayar Nedir?' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "2": [
    {
      "question": "Dersimiz bittiğinde bilgisayarımızı en güvenli şekilde nasıl kapatmalıyız?",
      "options": [
        {
          "text": "Duvardaki elektrik fişini aniden çekerek",
          "isCorrect": false
        },
        {
          "text": "Kasanın açma düğmesine sertçe basıp tutarak",
          "isCorrect": false
        },
        {
          "text": "Başlat menüsüne girip 'Bilgisayarı Kapat' seçeneğine tıklayarak",
          "isCorrect": true
        },
        {
          "text": "Klavyenin bütün tuşlarına aynı anda basarak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Bilgisayarı Başlat menüsünden kapatmak, dosyalarımızın ve bilgisayarımızın sağlığını korur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Power (Güç) Sembolü' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Evrensel açma-kapama sembolünü tanıma (Daire ve dik çizgi).",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Power (Güç) Sembolü' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sihirli Güç Düğmesi: Power Sembolü' kapsamında ele alınan <strong>1. Adım</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Kasanın üzerindeki yuvarlak büyük Güç (Power) düğmesine nazikçe bir kez basarız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Adım, bilişim sistemlerinde Kasanın üzerindeki yuvarlak büyük Güç (Power) düğmesine nazi... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Adım</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Monitörün (ekranın) altındaki küçük düğmeye basarak ekran ışığını açarız.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Adım, Monitörün (ekranın) altındaki küçük düğmeye basarak ekran ışığını açarız. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bilgisayarı Doğru Şekilde Kapatma Adımları' bölümünde vurgulanan <strong>1. Pencereleri Kapat</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Açık olan resimleri ve çalışmaları çarpı (X) tuşun... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 1. Pencereleri Kapat asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'Bilgisayarımı Güvenle Başlatıyorum''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Güç Düğmesini Bul' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Monitörün düğmesini kapatınca bilgisayar da tamamen kapanmış olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Monitör sadece ekranı kapatır; bilgisayar kasanın içinde çalışmaya devam eder. Mutlaka Başlat menüsünden kapatılmalıdır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Tek Tık Kuralı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Açma düğmesine bir kere basmak yeterlidir, düğmeye basılı tutulmaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tek Tık Kuralı prensibi, Açma düğmesine bir kere basmak yeterlidir, düğmeye basılı tutulmaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilgisayarı Kurallarına Uygun Şekilde Başlatma ve Güvenle Kapatma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Power Sembolü: Tüm cihazlarda açma ve kapama kapısıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Power Sembolü' doğrultusunda Tüm cihazlarda açma ve kapama kapısıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Bilgisayarı Doğru ve Güvenli Açma-Kapama Kuralları' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "3": [
    {
      "question": "Masaüstünde bulunan bir oyunu veya klasörü açıp içine girmek için faremizle hangi hareketi yaparız?",
      "options": [
        {
          "text": "Farenin sağ tuşuna tek basarız",
          "isCorrect": false
        },
        {
          "text": "Sol tuşa peş peşe hızlıca iki defa basarız (Çift Tık)",
          "isCorrect": true
        },
        {
          "text": "Fareyi havaya kaldırıp sallarız",
          "isCorrect": false
        },
        {
          "text": "Tekerleği hızla çeviririz",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Sol tuşa hızlıca iki kez basmak (Çift Tık), bilgisayara 'bu dosyayı aç' emrini verir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Fareyi Doğru Tutma' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Avuç içi desteği, işaret ve orta parmağın yerleşimi.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Fareyi Doğru Tutma' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Fare Anatomisi ve Parmaklarımızın Yeri' kapsamında ele alınan <strong>İşaret Parmağı</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Daima Sol Tuşun üzerinde durur. En çok kullandığımız tuştur (Seçer ve açar).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> İşaret Parmağı, bilişim sistemlerinde Daima Sol Tuşun üzerinde durur. En çok kullandığımız tuştur ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Orta Parmak</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sağ Tuşun üzerinde dinlenir. Gizli seçenekleri açmak için kullanılır.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Orta Parmak, Sağ Tuşun üzerinde dinlenir. Gizli seçenekleri açmak için kullanılır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Tıklama Türleri Ne İşe Yarar?' bölümünde vurgulanan <strong>Tıklama Türleri Ne İşe Yarar?</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sistemlerin doğru ve optimize biçimde çalışması... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tıklama Türleri Ne İşe Yarar? asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Dijital Elma Toplama Oyunu''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Fareyi Tut ve İmleci Bul' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Fare masada bitince havada hareket ettirirsem ok ekranda gitmeye devam eder.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Fare lazer ışığıyla masayı okur; masadan kaldırıldığında ok hareket etmez. Fareyi kaldırıp masanın ortasına yeniden koymalıyız.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bileği Bükmeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Bileğimiz masada düz durmalı; yukarı ya da aşağı bükülmemelidir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bileği Bükmeyin prensibi, Bileğimiz masada düz durmalı; yukarı ya da aşağı bükülmemelidir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Fareyi Doğru Tutma, Sol/Sağ Tıklama ve Sürükle-Bırak Becerisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) İşaret Parmağı: Sol tuşun komutanıdır, her şeyi seçer ve açar.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'İşaret Parmağı' doğrultusunda Sol tuşun komutanıdır, her şeyi seçer ve açar. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Sihirli Fare (Mouse) ile Tanışıyorum: Sol Tık ve Sürükle-Bırak' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "4": [
    {
      "question": "Yazı yazarken iki kelime arasına boşluk bırakmak için klavyedeki hangi tuşa basarız?",
      "options": [
        {
          "text": "Enter Tuşu",
          "isCorrect": false
        },
        {
          "text": "En alttaki uzun Space (Boşluk) Tuşu",
          "isCorrect": true
        },
        {
          "text": "Backspace (Silme) Tuşu",
          "isCorrect": false
        },
        {
          "text": "Farenin sağ tuşu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Space tuşu, klavyenin en uzun tuşudur ve kelimeler arasına güzel bir boşluk koyar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Harf ve Sayı Tuşları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) A-Z harfleri ve 0-9 sayı tuşlarının dizilimi.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Harf ve Sayı Tuşları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Klavyenin Süper Kahraman Tuşları' kapsamında ele alınan <strong>Boşluk (Space)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Klavyenin en altındaki uzun tuştur. Kelimelerin birbirine yapışmaması için araya boşluk koyar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Boşluk (Space), bilişim sistemlerinde Klavyenin en altındaki uzun tuştur. Kelimelerin birbirine ya... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Silme (Backspace)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Üzerinde sola doğru ok olan tuştur. Yanlış yazdığımız harfleri geriye doğru siler.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Silme (Backspace), Üzerinde sola doğru ok olan tuştur. Yanlış yazdığımız harfleri geriye doğru siler. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Klavyede İsmini Yazma Sanatı' bölümünde vurgulanan <strong>Caps Lock Tuşu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Klavyenin solundaki bu tuşa bastığımızda küçük bir... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Caps Lock Tuşu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'Ekrana Adını ve En Sevdiğin Rengi Yaz''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Metin Belgesini Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yanlış yazdığımızda bütün cümleyi baştan silmemiz gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Sadece hatalı harfi silmek için Backspace tuşuna gerektiği kadar basmak yeterlidir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bir Kere Basmak Yeter'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Space tuşuna bir defa basılır; birden fazla basarsak kelimeler birbirinden çok uzaklaşır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bir Kere Basmak Yeter prensibi, Space tuşuna bir defa basılır; birden fazla basarsak kelimeler birbirinden çok uzaklaşır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Temel Klavye Tuşlarını Tanıma ve Ekrana İsmini Yazabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Space: Kelimeleri birbirinden ayıran boşluk köprüsüdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Space' doğrultusunda Kelimeleri birbirinden ayıran boşluk köprüsüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Renkli Klavye Tuşları: Harfler, Sayılar ve Görevleri' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "5": [
    {
      "question": "Bilgisayar karşısında otururken göz sağlığımızı korumak için ekran ile aramızda ne kadar mesafe olmalıdır?",
      "options": [
        {
          "text": "Burnumuz ekrana değecek kadar yakın",
          "isCorrect": false
        },
        {
          "text": "Yaklaşık bir kol boyu mesafe (50-60 cm)",
          "isCorrect": true
        },
        {
          "text": "5 metre uzaktan dürbünle bakmalıyız",
          "isCorrect": false
        },
        {
          "text": "Sandalyenin altına saklanmalıyız",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bir kol boyu mesafe gözlerimizin yorulmasını engeller ve ekrandaki her şeyi net görmemizi sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Ergonomi Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Vücudumuz ile çalışma ortamımızın dost olması.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Ergonomi Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Robot Gibi Güçlü ve Dik Oturuyoruz!' kapsamında ele alınan <strong>Sırtımız Dik</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Sandalyenin arkalığına tam yaslanırız, kambur durmayız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sırtımız Dik, bilişim sistemlerinde Sandalyenin arkalığına tam yaslanırız, kambur durmayız.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kol Boyu Mesafe</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kolumuzu uzattığımızda parmak uçlarımız ekrana ancak değecek kadar uzakta dururuz (50 cm).",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kol Boyu Mesafe, Kolumuzu uzattığımızda parmak uçlarımız ekrana ancak değecek kadar uzakta dururuz (50 cm). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Gözlerimizi ve Bedenimizi Dinlendirme Egzersizleri' bölümünde vurgulanan <strong>Uzağa Bakma</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Gözlerimizi ekrandan ayırıp sınıfın veya odanın en... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Uzağa Bakma asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'Ergonomi Aynası ve Heykel Oyunu''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kol Boyunu Ölç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Ekrana ne kadar yakından bakarsak yazıları o kadar iyi anlarız.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Ekrana çok yaklaşmak göz kaslarını aşırı yorar ve göz sağlığını bozar; daima bir kol boyu mesafe korunmalıdır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Karanlıkta Ekrana Bakma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Karanlık odada parlayan ekran gözleri bozar; odanın ışığı mutlaka açık olmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Karanlıkta Ekrana Bakma prensibi, Karanlık odada parlayan ekran gözleri bozar; odanın ışığı mutlaka açık olmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilgisayar Başında Doğru Oturuş Pozisyonunu Alma ve Vücut Sağlığını Koruma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Dik Duruş: Sırtımızı korur, güçlü bir omurga sağlar.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Dik Duruş' doğrultusunda Sırtımızı korur, güçlü bir omurga sağlar. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Dijital Sağlık ve Doğru Duruş (Ergonomi) Kuralları' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "6": [
    {
      "question": "Tablet veya bilgisayarda oyun oynarken süremiz dolup alarm çaldığında ne yapmalıyız?",
      "options": [
        {
          "text": "Alarmı kapatıp oynamaya gizlice devam etmeliyiz",
          "isCorrect": false
        },
        {
          "text": "Oyunu kaydedip cihazı kapatmalı ve hareketli bir oyuna geçmeliyiz",
          "isCorrect": true
        },
        {
          "text": "Ağlayıp odamıza kapanmalıyız",
          "isCorrect": false
        },
        {
          "text": "Ekranı geceye kadar açık bırakmalıyız",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Süre bitince ekranı kapatmak bir irade ve süper kahramanlık göstergesidir!",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Ekran Süresi Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Tablet, telefon ve televizyon karşısında geçirdiğimiz toplam zaman.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Ekran Süresi Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Teknoloji Terazisi: Dijital Denge' kapsamında ele alınan <strong>Okul ve Ödevler</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Derslerimizi öğrenir, ödevlerimizi tamamlarız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Okul ve Ödevler, bilişim sistemlerinde Derslerimizi öğrenir, ödevlerimizi tamamlarız.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Hareket ve Açık Hava</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bahçede koşar, ip atlar, bisiklete biner ve temiz hava alırız.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Hareket ve Açık Hava, Bahçede koşar, ip atlar, bisiklete biner ve temiz hava alırız. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Ekran Bağımlılığından Korunma Taktikleri' bölümünde vurgulanan <strong>Süreyi Belirle</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Anne veya babamızla süreyi kararlaştırırız (Örn: 3... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Süreyi Belirle asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'Günlük Zaman Pastası Çizimi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Zaman Pastasını Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Daha çok bilgisayar oyunu oynarsam daha mutlu ve dinlenmiş olurum.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Saatlerce ekran başında kalmak beyni yorar, gözleri kızartır ve kişiyi sinirli yapar. Asıl enerji açık havada koşarak kazanılır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Yemekte Ekran Yok'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Yemek yerken telefon veya tablete bakmayız; yemeğimizin tadını çıkarırız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Yemekte Ekran Yok prensibi, Yemek yerken telefon veya tablete bakmayız; yemeğimizin tadını çıkarırız. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Ekran Süresini Bilinçli Yönetme ve Gerçek Hayat ile Teknoloji Dengesini Kurma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Denge: Gerçek oyunlar sanal oyunlardan çok daha sağlıklıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Denge' doğrultusunda Gerçek oyunlar sanal oyunlardan çok daha sağlıklıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Ekran Süresi ve Sağlıklı Teknoloji Kullanımı' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "7": [
    {
      "question": "Çizim programında sayfanın tamamını tek bir tıkla kırmızı renge boyamak için hangi aracı kullanırız?",
      "options": [
        {
          "text": "Silgi Aracı",
          "isCorrect": false
        },
        {
          "text": "Boya Kovası (Doldur) Aracı",
          "isCorrect": true
        },
        {
          "text": "Büyüteç Aracı",
          "isCorrect": false
        },
        {
          "text": "Metin Yazma Aracı",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Boya kovası aracı, kapalı bir alanı veya tüm ekranı seçtiğimiz renkle bir anda doldurur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Cumhuriyet Coşkusu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 29 Ekim 1923'te kurulan Cumhuriyetimizin 103. yılı kutlaması.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Cumhuriyet Coşkusu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bayrağımızın Geometrisi ve Dijital Çizimi' kapsamında ele alınan <strong>1. Kırmızı Zemin</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Boya kovası aracıyla çalışma sayfamızı pırıl pırıl bayrak kırmızısına boyarız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Kırmızı Zemin, bilişim sistemlerinde Boya kovası aracıyla çalışma sayfamızı pırıl pırıl bayrak kı... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Büyük Beyaz Daire</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Şekillerden daireyi seçip beyaz renkle bir yuvarlak çizeriz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Büyük Beyaz Daire, Şekillerden daireyi seçip beyaz renkle bir yuvarlak çizeriz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Cumhuriyetimizin Işığında Bilişim ve Üretim' bölümünde vurgulanan <strong>Hayal Et ve Tasarla</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bilgisayarı kendi resimlerimizi, hikayelerimizi çi... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Hayal Et ve Tasarla asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Cumhuriyet Bayrağımı Çiziyorum''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Çizim Programını Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilgisayarda çizim yapmak için gerçek ressam olmak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Geometrik şekiller ve renk araçları sayesinde herkes bilgisayarda harika çizimler yapabilir!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Delikli Şekillere Dikkat'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Boya kovasıyla boyarken çizgilerin kapalı olduğundan emin olun, yoksa boya her yere akar!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Delikli Şekillere Dikkat prensibi, Boya kovasıyla boyarken çizgilerin kapalı olduğundan emin olun, yoksa boya her yere akar! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Cumhuriyet Değerlerini Kavrama, Renkleri ve Şekilleri Kullanarak Bayrak Çizme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 29 Ekim: Cumhuriyetimizin ve bağımsızlığımızın gurur günüdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '29 Ekim' doğrultusunda Cumhuriyetimizin ve bağımsızlığımızın gurur günüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '29 Ekim Cumhuriyet Bayramı & Dijital Bayrak Tasarımımız' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "8": [
    {
      "question": "Bilgisayarın kütüphanesini ve beynini oluşturan, bütün hesaplamaları yapan ana parça aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "Kasa (Sistem Birimi)",
          "isCorrect": true
        },
        {
          "text": "Fare Altlığı",
          "isCorrect": false
        },
        {
          "text": "Kulaklık",
          "isCorrect": false
        },
        {
          "text": "Yazıcı Kağıdı",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: A!</strong> Kasa, bilgisayarın içindeki işlemci ve bellek parçalarını barındıran akıllı yönetim merkezidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilişim Çarkıfeleği' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanım parçaları ve görevlerini hatırlama oyunu.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilişim Çarkıfeleği' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'İlk 7 Haftanın Bilişim Özeti' kapsamında ele alınan <strong>Donanım Parçaları</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Kasa (Beyin), Monitör (Göz), Klavye (Yazı) ve Fare (İşaretçi).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Donanım Parçaları, bilişim sistemlerinde Kasa (Beyin), Monitör (Göz), Klavye (Yazı) ve Fare (İşaretçi... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Açma ve Kapama</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Power düğmesiyle açar, Başlat menüsünden güvenle kapatırız.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Açma ve Kapama, Power düğmesiyle açar, Başlat menüsünden güvenle kapatırız. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bilişim Dedektifi Soru Atölyesi' bölümünde vurgulanan <strong>Soru 1</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bilgisayarı prizden çekerek kapatmak bilgisayarı k... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Soru 1 asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'Bilişim Şampiyonu Bilgi Yarışması''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Takımını Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sınavda hızlı bitiren her zaman en yüksek puanı alır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Önemli olan hız değil, dikkatli ve kurallara uygun şekilde doğru cevabı bulmaktır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Soruyu Dikkatle Oku'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Seçeneklere hemen atlamadan önce sorunun ne sorduğunu tam anlayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Soruyu Dikkatle Oku prensibi, Seçeneklere hemen atlamadan önce sorunun ne sorduğunu tam anlayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İlk 7 Haftanın Bilişim Kazanımlarını Değerlendirme ve Pekiştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Başarı: Düzenli dinleyen ve uygulayan öğrencinin yanındadır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Başarı' doğrultusunda Düzenli dinleyen ve uygulayan öğrencinin yanındadır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '1. Dönem 1. Değerlendirme & Bilişim Bilgi Yarışması' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "9": [
    {
      "question": "Paint programında çizim yaparken duvara sprey boya sıkıyormuş gibi minik noktacıklarla boyama yapan araç hangisidir?",
      "options": [
        {
          "text": "Silgi",
          "isCorrect": false
        },
        {
          "text": "Sprey (Airbrush) Fırçası",
          "isCorrect": true
        },
        {
          "text": "Büyüteç",
          "isCorrect": false
        },
        {
          "text": "Metin Aracı",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Sprey fırçası, noktacıklı püskürtme yaparak çiçeklere ve gökyüzüne harika dokular kazandırır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '10 Kasım Ruhu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ü saygıyla anma.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '10 Kasım Ruhu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Paint Programının Sihirli Çizim Çantası' kapsamında ele alınan <strong>Kalem Aracı</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Tıpkı kurşun kalem gibi serbest el çizgileri ve desenler çizer.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kalem Aracı, bilişim sistemlerinde Tıpkı kurşun kalem gibi serbest el çizgileri ve desenler çiz... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Fırçalar</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yağlı boya, sulu boya, pastel boya ve sprey boya efektleri sunar.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Fırçalar, Yağlı boya, sulu boya, pastel boya ve sprey boya efektleri sunar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'10 Kasım Anısına Sevgi Çiçekleri' bölümünde vurgulanan <strong>Fırçalardan Spreyi Seç</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yıldız tozu gibi püskürten sprey boyayı seçeriz.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Fırçalardan Spreyi Seç asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Ata'mıza Saygı Resmi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Paint'i Başlat' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Paint programında fırça bitince yeni fırça satın almak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Paint içindeki fırçalar ve boyalar sınırsızdır; tükenmez ve asla kurumaz!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Hata Yapmaktan Korkma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Dijital çizimde silgi ve geri al butonu her zaman yanınızdadır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hata Yapmaktan Korkma prensibi, Dijital çizimde silgi ve geri al butonu her zaman yanınızdadır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Paint Programı Arayüzünü Tanıma, Kalem ve Fırça Araçlarıyla Anma Resmi Çizme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Paint: Bilgisayardaki sonsuz renkli resim atölyemizdir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Paint' doğrultusunda Bilgisayardaki sonsuz renkli resim atölyemizdir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '10 Kasım Atatürk'ü Anma & Paint ile Çizim Araçları' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "10": [
    {
      "question": "Çizim programında bir evin çatısını çizmek için aşağıdaki geometrik şekillerden hangisini kullanmak en uygundur?",
      "options": [
        {
          "text": "Daire",
          "isCorrect": false
        },
        {
          "text": "Üçgen",
          "isCorrect": true
        },
        {
          "text": "Hilal",
          "isCorrect": false
        },
        {
          "text": "Dalgalı Çizgi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Üçgen şekli, iki yana eğimli kenarlarıyla tam bir ev çatısı oluşturur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Serbest Sanat Zamanı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Kurallara bağlı kalmadan kendi hayal dünyasını çizme.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Serbest Sanat Zamanı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Geometrik Şekillerle Sihirli Ev Tasarımı' kapsamında ele alınan <strong>Kare ve Dikdörtgen</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Evimizin duvarları, pencereleri, kapısı ve araba gövdesi.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kare ve Dikdörtgen, bilişim sistemlerinde Evimizin duvarları, pencereleri, kapısı ve araba gövdesi.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Üçgen</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Evimizin çatısı, dağların zirvesi ve yelkenli geminin yelkeni.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Üçgen, Evimizin çatısı, dağların zirvesi ve yelkenli geminin yelkeni. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Ara Tatilde Bilişim ve Üretim Rehberi' bölümünde vurgulanan <strong>Kendi Masal Kitabını Çiz</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Paint'te bir kahraman çizip altına birkaç cümleyle... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kendi Masal Kitabını Çiz asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Hayalimdeki Doğa Parkı''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Zemin ve Gökyüzü' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Tatilde tüm gün bilgisayarda oyun oynamak en iyi tatil yöntemidir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Tüm gün ekranda oyun oynamak bedeni ve zihni tembelleştirir; asıl enerji arkadaş canlısı oyunlarda ve sporda saklıdır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Ekran Sınırına Sadık Kal'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Tatilde olsak bile ekran başında saatlerce kalmayın, 45 dakikada bir mutlaka mola verin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Ekran Sınırına Sadık Kal prensibi, Tatilde olsak bile ekran başında saatlerce kalmayın, 45 dakikada bir mutlaka mola verin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Hayal Gücünü Dijital Çizimle İfade Etme ve Bağımsız Proje Tamamlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Şekiller: Çizim dünyasının yapı taşlarıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Şekiller' doğrultusunda Çizim dünyasının yapı taşlarıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '1. Dönem Ara Tatil: Eğlenceli Dijital Boyama Atölyesi' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "11": [
    {
      "question": "Çizim programında kusursuz, yamulmayan tam yuvarlak bir daire çizmek için fareyi çekerken klavyeden hangi tuşa basılı tutarız?",
      "options": [
        {
          "text": "Space (Boşluk) Tuşu",
          "isCorrect": false
        },
        {
          "text": "Shift Tuşu",
          "isCorrect": true
        },
        {
          "text": "Backspace (Silme) Tuşu",
          "isCorrect": false
        },
        {
          "text": "Enter Tuşu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Shift tuşuna basılı tutarak çizdiğimizde daireler tam yuvarlak, kareler tam eşit kenarlı olur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '24 Kasım Önemi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bize okumayı, yazmayı ve bilişimi öğreten öğretmenlerimize teşekkür.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '24 Kasım Önemi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Öğretmenler Günü Kartının Tasarım Adımları' kapsamında ele alınan <strong>1. Şık Bir Çerçeve</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Sayfanın kenarına yuvarlatılmış dikdörtgen ile zarif bir çerçeve çizeriz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Şık Bir Çerçeve, bilişim sistemlerinde Sayfanın kenarına yuvarlatılmış dikdörtgen ile zarif bir çer... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Sevgi Kalbi ve Çiçekler</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Şekiller menüsünden kırmızı bir kalp ve fırçalarla sarı papatyalar ekleriz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Sevgi Kalbi ve Çiçekler, Şekiller menüsünden kırmızı bir kalp ve fırçalarla sarı papatyalar ekleriz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Geometrik Şekillerle Duyguları Anlatmak' bölümünde vurgulanan <strong>Kalp Şekli</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sevgi, şefkat, teşekkür ve bağlılığı temsil eder.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kalp Şekli asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Öğretmenime Sürpriz Tebrik Kartı''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Çerçeveyi Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir tebrik kartına ne kadar çok karışık resim koyarsak o kadar güzel olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) En güzel tasarımlar sade, düzenli ve sevgi dolu olanlardır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Gözü Yormayan Renkler'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Çok fazla cırtlak rengi üst üste kullanmayın; birbiriyle uyumlu 2-3 ana renk seçin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Gözü Yormayan Renkler prensibi, Çok fazla cırtlak rengi üst üste kullanmayın; birbiriyle uyumlu 2-3 ana renk seçin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Geometrik Şekilleri Amaca Uygun Kullanarak Anlamlı Tasarımlar Oluşturma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 24 Kasım: Tüm öğretmenlerimize saygı ve teşekkür günümüzdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '24 Kasım' doğrultusunda Tüm öğretmenlerimize saygı ve teşekkür günümüzdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '24 Kasım Öğretmenler Günü & Geometrik Şekiller' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "12": [
    {
      "question": "Paint çizim programında resmimizin üzerine klavye ile yazı yazmak istediğimizde hangi simgeye tıklarız?",
      "options": [
        {
          "text": "Silgi Simgesi",
          "isCorrect": false
        },
        {
          "text": "Büyük 'A' Harfi Simgesi",
          "isCorrect": true
        },
        {
          "text": "Büyüteç Simgesi",
          "isCorrect": false
        },
        {
          "text": "Boya Kutusu Simgesi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'A' simgesi metin (Text) aracıdır; tıkladığımızda ekrana yazı yazmamızı sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Metin Aracı (A Harfi)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Paint araç çubuğundaki büyük 'A' simgesini keşfetme.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Metin Aracı (A Harfi)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sihirli Metin Aracı: 'A' Harfinin Gizemi' kapsamında ele alınan <strong>1. 'A' Aracına Tıkla</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Araçlar menüsündeki büyük 'A' harfine tıklarız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. 'A' Aracına Tıkla, bilişim sistemlerinde Araçlar menüsündeki büyük 'A' harfine tıklarız.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Kutuyu Aç</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Resmin üzerinde yazı yazacağımız yere fareyle bir kutu çizeriz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Kutuyu Aç, Resmin üzerinde yazı yazacağımız yere fareyle bir kutu çizeriz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yazıları Süper Güçlerle Donatmak' bölümünde vurgulanan <strong>Yazıları Süper Güçlerle Donatmak</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sistemlerin doğru ve optimize biçimde çalışması... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yazıları Süper Güçlerle Donatmak asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kendi Şiirini Ekrana Yaz''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Metin Aracını (A) Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Metin kutusunun dışına tıkladıktan sonra silgi kullanmadan yazıdaki harfi hemen değiştirebilirim.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Paint'te metin kutusu onaylandıktan sonra resim gibi sabitlenir; bu yüzden tıklamadan önce kontrol etmek çok önemlidir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Kutuyu Kapatmadan Oku'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Yazınızı kontrol edin; dışarı tıklamadan önce harf hatalarını Backspace ile düzeltin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kutuyu Kapatmadan Oku prensibi, Yazınızı kontrol edin; dışarı tıklamadan önce harf hatalarını Backspace ile düzeltin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Metin (A) Aracını Kullanarak Resimlerin Üzerine Anlaşılır Yazılar Ekleyebilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) A Harfi: Bilgisayarda resimle yazıyı birleştiren kapıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'A Harfi' doğrultusunda Bilgisayarda resimle yazıyı birleştiren kapıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Dijital Tebrik Kartına Metin Ekleme (Metin Aracı)' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "13": [
    {
      "question": "Klavyede F ve J tuşlarının üzerinde parmağımızla hissettiğimiz minik çıkıntıların amacı nedir?",
      "options": [
        {
          "text": "Tuşların bozuk olduğunu göstermek",
          "isCorrect": false
        },
        {
          "text": "Klavyeye bakmadan parmaklarımızın doğru yerini (ev sırasını) bulmasını sağlamak",
          "isCorrect": true
        },
        {
          "text": "Parmaklarımızın kaymasını engellemek",
          "isCorrect": false
        },
        {
          "text": "Sadece süs olsun diye yapılmıştır",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> F ve J çıkıntıları, gözlerimiz ekrandayken ellerimizin doğru sıraya oturmasını sağlayan sihirli kılavuzlardır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'F ve J Çıkıntıları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Gözlerimiz ekrandayken parmaklarımızın evini bulmasını sağlayan rehberler.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'F ve J Çıkıntıları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Klavyenin Gizli Haritası: Ev Sırası' kapsamında ele alınan <strong>Sol Elimiz (A-S-D-F)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Serçe parmak: A | Yüzük parmak: S | Orta parmak: D | İşaret parmak: F (çıkıntılı).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sol Elimiz (A-S-D-F), bilişim sistemlerinde Serçe parmak: A | Yüzük parmak: S | Orta parmak: D | İşaret ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sağ Elimiz (J-K-L-Ş)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İşaret parmak: J (çıkıntılı) | Orta parmak: K | Yüzük parmak: L | Serçe parmak: Ş.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sağ Elimiz (J-K-L-Ş), İşaret parmak: J (çıkıntılı) | Orta parmak: K | Yüzük parmak: L | Serçe parmak: Ş. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hızlı Yazma Oyunu: Tavuk mu Şimşek mi?' bölümünde vurgulanan <strong>Çok Yavaş</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Her harf için gözümüzü ekrandan klavyeye indirip k... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Çok Yavaş asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'Hızlı Parmaklar Harf Şampiyonası''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Parmaklarını Eve Koy' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sadece tek parmakla yazarsam da aynı hızda yazabilirim.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Tek parmakla dakikada en fazla 15 kelime yazılırken, iki elle yazan bir öğrenci dakikada 50 kelimeyi zahmetsizce yazabilir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Acele Etme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Başta yavaş yazabilirsiniz, bu çok doğaldır; doğru parmakla basmak hızdan daha önemlidir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Acele Etme prensibi, Başta yavaş yazabilirsiniz, bu çok doğaldır; doğru parmakla basmak hızdan daha önemlidir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İki Elin Parmaklarını Klavyeye Doğru Yerleştirme ve Hızlı Yazma Pratiği'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Ev Sırası: Parmaklarımızın dinlenme ve başlangıç yuvasıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Ev Sırası' doğrultusunda Parmaklarımızın dinlenme ve başlangıç yuvasıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Klavyede İki Elle Hızlı Yazma ve Parmak Egzersizleri' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "14": [
    {
      "question": "Bilgisayarda çizdiğimiz bir resmi daha sonra tekrar açabilmek için hangi simgeye tıklamalıyız?",
      "options": [
        {
          "text": "Kırmızı Çarpı (X) Simgesi",
          "isCorrect": false
        },
        {
          "text": "Mavi Renkli Disket (Kaydet) Simgesi",
          "isCorrect": true
        },
        {
          "text": "Büyüteç Simgesi",
          "isCorrect": false
        },
        {
          "text": "Ekranı Kapatma Düğmesi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Mavi disket simgesi 'Kaydet' (Save) komutudur ve dosyamızı kalıcı olarak saklar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kaydet (Save) Butonu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Mavi disket simgesinin sırrı ve anlamı.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kaydet (Save) Butonu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sihirli Mavi Disket: Kaydet Butonu' kapsamında ele alınan <strong>1. Disket Simgesine Tıkla</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Programın sol üstündeki mavi diskete veya Dosya -> Kaydet'e tıklarız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Disket Simgesine Tıkla, bilişim sistemlerinde Programın sol üstündeki mavi diskete veya Dosya -> Kaydet'e ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Yeri Seç (Nereye?)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sol taraftan 'Masaüstü' veya kendi klasörümüzü seçeriz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Yeri Seç (Nereye?), Sol taraftan 'Masaüstü' veya kendi klasörümüzü seçeriz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yeni Klasör: Bilgisayarımızın Düzenli Çekmecesi' bölümünde vurgulanan <strong>1. Sağ Tıkla</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Masaüstünün boş bir yerine farenin sağ tuşuyla bir... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 1. Sağ Tıkla asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kendi Dijital Çekmeceni Oluştur''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Yeni Klasör Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Programın sağ üstündeki kırmızı çarpı (X) tuşuna basınca her şey otomatik kaydedilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Çarpı tuşu programı kapatır; eğer kaydetmediyseniz bilgisayar sorar. 'Kaydetme' derseniz yaptığınız her şey silinir!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Ara Sıra Kaydet (Ctrl+S)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Resim çizerken elektrik kesilirse emeğiniz kaybolmasın diye arada bir disket butonuna basın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Ara Sıra Kaydet (Ctrl+S) prensibi, Resim çizerken elektrik kesilirse emeğiniz kaybolmasın diye arada bir disket butonuna basın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Çalışmalarını Uygun İsimle Kaydetme ve Masaüstünde Yeni Klasör Oluşturabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Disket: Dijital hafızaya emanet etme mührüdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Disket' doğrultusunda Dijital hafızaya emanet etme mührüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Belgelerimi ve Resimlerimi Klasöre Kaydetme' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "15": [
    {
      "question": "İnternette oyun oynarken ekranda aniden 'Tebrikler, son model bir tablet kazandınız, hemen buraya tıklayın!' yazısı çıkarsa ne yapmalıyız?",
      "options": [
        {
          "text": "Çok sevinip hemen üzerine tıklarız",
          "isCorrect": false
        },
        {
          "text": "Tıklamadan pencereyi kapatır ve hemen öğretmenimize/ailemize haber veririz",
          "isCorrect": true
        },
        {
          "text": "Bütün arkadaşlarımıza haber verip hediyeyi paylaşırız",
          "isCorrect": false
        },
        {
          "text": "Ev adresimizi ve telefonumuzu yazarız",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu tür aniden parlayan pencereler sahte reklamlardır; asla tıklanmamalı ve büyüklere söylenmelidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'İnternet: Küresel Örümcek Ağı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bütün dünya bilgisayarlarının birbirine bağlanması.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'İnternet: Küresel Örümcek Ağı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dünyayı Birbirine Bağlayan Görünmez Ağ: İnternet' kapsamında ele alınan <strong>İnternet Ağı</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Milyarlarca cihazın konuştuğu, bilgi paylaştığı devasa bir dijital okyanustur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> İnternet Ağı, bilişim sistemlerinde Milyarlarca cihazın konuştuğu, bilgi paylaştığı devasa bir d... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Web Tarayıcısı (Browser)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İnternet sitelerini açmamızı sağlayan penceremizdir.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Web Tarayıcısı (Browser), İnternet sitelerini açmamızı sağlayan penceremizdir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Güvenli İnternet Limanları' bölümünde vurgulanan <strong>EBA (eba.gov.tr)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Milli Eğitim Bakanlığı'nın ders videoları, kitapla... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> EBA (eba.gov.tr) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'EBA'da Eğlenceli Bilim Keşfi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Tarayıcıyı Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İnternette yazan her bilgi tamamen doğrudur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) İnternette pek çok yanlış ve uydurma bilgi de vardır; doğruyu öğrenmek için öğretmenimize ve güvenilir kitaplara başvurmalıyız.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Tek Başına Gezme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) İnterneti daima yanınızda bir büyüğünüz veya öğretmeniniz varken kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tek Başına Gezme prensibi, İnterneti daima yanınızda bir büyüğünüz veya öğretmeniniz varken kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İnternet Kavramını Anlama, Güvenli Web Sitelerini ve Arama Kurallarını Öğrenme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) İnternet: Doğru kullanıldığında dünyanın en büyük kütüphanesidir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'İnternet' doğrultusunda Doğru kullanıldığında dünyanın en büyük kütüphanesidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'İnternet Nedir? Bilgiye Ulaşmanın Güvenli Yolları' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "16": [
    {
      "question": "Aşağıdakilerden hangisi bir bilgisayar hesabı için en GÜÇLÜ ve tahmin edilmesi en ZOR şifredir?",
      "options": [
        {
          "text": "123456",
          "isCorrect": false
        },
        {
          "text": "ali",
          "isCorrect": false
        },
        {
          "text": "Sari.Kus!84",
          "isCorrect": true
        },
        {
          "text": "111111",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Büyük harf, küçük harf, sayı ve sembol (!, .) içeren şifreler kırılamaz kalelerdir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kişisel Bilgi Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Adımız, ev adresimiz, okulumuz ve telefon numaramız.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kişisel Bilgi Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Kişisel Bilgilerimiz Bize Özeldir!' kapsamında ele alınan <strong>Ev Adresimiz</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Hangi mahallede ve sokakta oturduğumuz gizlidir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Ev Adresimiz, bilişim sistemlerinde Hangi mahallede ve sokakta oturduğumuz gizlidir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Okulumuzun Adı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Hangi okula ve hangi sınıfa gittiğimiz paylaşılmaz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Okulumuzun Adı, Hangi okula ve hangi sınıfa gittiğimiz paylaşılmaz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yıkılmaz Bir Şifre Nasıl Yapılır?' bölümünde vurgulanan <strong>'123456'</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Dünyanın en kolay tahmin edilen ve hemen kırılan ş... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> '123456' asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama: 'Süper Gizli Şifre Üreticisi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Sevdiğin Bir Renk Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"En iyi arkadaşıma şifremi verirsem arkadaşlığımız daha da güçlenir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Şifreler diş fırçası gibidir; sadece kişiye özeldir ve kimseyle paylaşılamaz!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Şifreni Sır Gibi Sakla'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) En yakın arkadaşına bile şifreni söyleme; sadece anne-baban bilebilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Şifreni Sır Gibi Sakla prensibi, En yakın arkadaşına bile şifreni söyleme; sadece anne-baban bilebilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kişisel Bilgilerin Gizliliğini Koruma ve Güçlü Bir Şifre Oluşturabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kişisel Bilgi: Evimiz, okulumuz ve telefonumuz yabancılara kapalıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kişisel Bilgi' doğrultusunda Evimiz, okulumuz ve telefonumuz yabancılara kapalıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Dijital Dünyada Nezaket ve Güvenli Şifre Oluşturma' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "17": [
    {
      "question": "İnternette oynadığınız bir oyunda tanımadığınız bir oyuncu size 'Hangi okula gidiyorsun ve adın ne?' diye sorarsa en doğru davranış ne olur?",
      "options": [
        {
          "text": "Okulumuzun tam adını ve ev adresimizi hemen yazarız",
          "isCorrect": false
        },
        {
          "text": "'Kişisel bilgilerimi yabancılarla paylaşamam' deriz ve ailemize haber veririz",
          "isCorrect": true
        },
        {
          "text": "Telefon numaramızı veririz",
          "isCorrect": false
        },
        {
          "text": "Okulun fotoğrafını çeker göndeririz",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kişisel bilgilerimiz (ad, okul, adres) yabancılara karşı daima gizli tutulmalıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dedektif Görevi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnternette karşılaşılan tuzak senaryoları inceleme.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dedektif Görevi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Güvenli İnternet Dedektifinin Senaryo Odası' kapsamında ele alınan <strong>1. Senaryo (Yabancı Mesajı)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Oyunda tanımadığımız biri 'Hangi okula gidiyorsun?' dedi. -> ASLA CEVAP VERMEYİZ, ailemize söyleriz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Senaryo (Yabancı Mesajı), bilişim sistemlerinde Oyunda tanımadığımız biri 'Hangi okula gidiyorsun?' dedi. ->... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Senaryo (Hediye Tuzağı)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Ekranda 'Ücretsiz altın kazanmak için tıkla' çıktı. -> TIKLAMAYIZ, pencereyi kapatırız.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Senaryo (Hediye Tuzağı), Ekranda 'Ücretsiz altın kazanmak için tıkla' çıktı. -> TIKLAMAYIZ, pencereyi kapatırız. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'1. Dönem Büyük Bilişim Değerlendirmesi' bölümünde vurgulanan <strong>Donanım</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Ekran, kasa, klavye, fare ve açma-kapama adımları.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Donanım asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Siber Dedektif Yarışması''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Senaryoyu Dinle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sanal ortamda tanıştığım biriyle gerçek hayatta gizlice buluşabilirim.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) İnternette tanışılan yabancılarla asla gerçek hayatta buluşulmaz; bu çok tehlikelidir!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Şüphe Duy'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) İnternette çok güzel görünen tekliflere hemen inanmayın, mutlaka şüpheyle yaklaşın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Şüphe Duy prensibi, İnternette çok güzel görünen tekliflere hemen inanmayın, mutlaka şüpheyle yaklaşın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İnternet Güvenliği ve Dijital Becerileri Ölçme, Senaryolar Üzerinden Doğru Karar Verme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Farkındalık: Tehlikeyi önceden sezme yeteneğidir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Farkındalık' doğrultusunda Tehlikeyi önceden sezme yeteneğidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '1. Dönem 2. Değerlendirme & Güvenli İnternet Dedektifi' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "18": [
    {
      "question": "İnternette yaptığımız aramalar, izlediğimiz videolar ve yazdığımız yazılar arkamızda ne bırakır?",
      "options": [
        {
          "text": "Gerçek çamurlu ayak izi",
          "isCorrect": false
        },
        {
          "text": "Dijital Ayak İzi (Kalıcı kayıtlar)",
          "isCorrect": true
        },
        {
          "text": "Hiçbir iz bırakmaz, her şey anında uçar",
          "isCorrect": false
        },
        {
          "text": "Sadece elektrik tasarrufu sağlar",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> İnternette yaptığımız her işlem arkamızda 'Dijital Ayak İzi' bırakır; bu yüzden daima güzel ve faydalı işler yapmalıyız.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kumsaldaki İzler' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Gerçek hayattaki izlerle dijital izlerin karşılaştırılması.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kumsaldaki İzler' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Ayak İzi: İnternetteki Gölgemiz' kapsamında ele alınan <strong>İzlediğimiz Videolar</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Hangi çizgi filmleri ve oyunları izlediğimiz kaydedilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> İzlediğimiz Videolar, bilişim sistemlerinde Hangi çizgi filmleri ve oyunları izlediğimiz kaydedilir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Yaptığımız Aramalar</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Arama kutusuna yazdığımız her kelime iz bırakır.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Yaptığımız Aramalar, Arama kutusuna yazdığımız her kelime iz bırakır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Güzel ve Temiz Dijital İzler Bırakmak' bölümünde vurgulanan <strong>Eğitici Projeler</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Çizdiğimiz resimler, kodladığımız oyunlar ve şiirl... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Eğitici Projeler asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Benim Dijital Ayak İzim Panosu''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Büyük Bir Ayak İzi Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İnternette sildiğim bir şey uzay boşluğuna gider ve tamamen yok olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) İnternet sunucularında verilerin yedekleri kalabilir; bu yüzden internete yüklenen her şey kalıcı kabul edilmelidir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Paylaşmadan Önce Düşün'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) 'Bunu öğretmenim veya anneannem görse sevinir mi?' diye kendinize sorun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Paylaşmadan Önce Düşün prensibi, 'Bunu öğretmenim veya anneannem görse sevinir mi?' diye kendinize sorun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dijital Ayak İzi Kavramını Öğrenme, İnternette Kalıcı İzler Bırakmamaya Özen Gösterme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Dijital Ayak İzi: İnternetteki kalıcı geçmişimiz ve gölgemizdir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Dijital Ayak İzi' doğrultusunda İnternetteki kalıcı geçmişimiz ve gölgemizdir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Dijital Ayak İzi: İnternette Paylaştıklarımız Silinir mi?' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "19": [
    {
      "question": "1. Dönem boyunca yaptığımız çizimleri, yazıları ve belgeleri kaybetmemek için nereye kaydetmiştik?",
      "options": [
        {
          "text": "Çöp Kutusuna",
          "isCorrect": false
        },
        {
          "text": "Masaüstünde kendi adımızla açtığımız özel klasöre",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarın klavyesinin altına",
          "isCorrect": false
        },
        {
          "text": "Hiçbir yere kaydetmedik",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kendi adımıza açtığımız klasör bizim dijital dolabımızdır; tüm eserlerimizi orada güvenle sakladık.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Geriye Bakış' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 19 haftalık bilişim yolculuğumuzun fotoğraf albümü.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Geriye Bakış' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'19 Haftalık Bilişim Kahramanları Geçidi' kapsamında ele alınan <strong>1. Bilgisayar Parçaları</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Kasa, monitör, klavye ve fareyi adımız gibi biliyoruz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Bilgisayar Parçaları, bilişim sistemlerinde Kasa, monitör, klavye ve fareyi adımız gibi biliyoruz.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Sağlık ve Denge</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bir kol boyu mesafeden dik oturuyor, ekran süremizi sınırlandırıyoruz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Sağlık ve Denge, Bir kol boyu mesafeden dik oturuyor, ekran süremizi sınırlandırıyoruz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yarıyıl Tatili (Sömestr) Bilişim Planımız' bölümünde vurgulanan <strong>Kar Topu ve Yürüyüş</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Açık havanın tadını çıkarın, kardan adam yapın ve ... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kar Topu ve Yürüyüş asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Sınıfımızın Dijital Sanat Sergisi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Klasörünü Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Tatilde bilgisayarda öğrendiğimiz her şeyi unuturuz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Doğru öğrenilen bilişim becerileri bisiklete binmek gibidir; asla unutulmaz, sadece 2. dönemde daha da hızlanacaktır!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Günde 45 Dakika'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Tatilde olsak bile ekran süresini 45 dakikayı geçirmeyecek şekilde planlayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Günde 45 Dakika prensibi, Tatilde olsak bile ekran süresini 45 dakikayı geçirmeyecek şekilde planlayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'1. Dönem Ürünlerini Sergileme, Kendini İfade Etme ve Başarıyı Kutlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Gurur: 1. dönemi harika bilgiler ve eserlerle tamamladık.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Gurur' doğrultusunda 1. dönemi harika bilgiler ve eserlerle tamamladık. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '1. Dönem Sonu: Dijital Portfolyo ve Karne Sevinci' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "20": [
    {
      "question": "Bir robota 'Sağa dön' komutu verdiğimizde robot ne yapmalıdır?",
      "options": [
        {
          "text": "5 adım koşmalıdır",
          "isCorrect": false
        },
        {
          "text": "Bulunduğu yerde sadece sağ tarafına dönüp durmalıdır (adım atmamalıdır)",
          "isCorrect": true
        },
        {
          "text": "Geriye doğru zıplamalıdır",
          "isCorrect": false
        },
        {
          "text": "Yere yatıp uyumalıdır",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Dönüş' komutu sadece yönü değiştirir; adım atmak için ayrıca 'İleri Yürü' komutu verilmelidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilgisayarsız Kodlama' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Ekran olmadan zihnimizle kodlama mantığını öğrenme.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilgisayarsız Kodlama' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'İnsan Robot Oyunu Nasıl Oynanır?' kapsamında ele alınan <strong>1. Robot Sadece Komutları Dinler</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Robot olan kişi kendi kafasına göre yürüyemez; sadece verilen yönergeleri yapar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Robot Sadece Komutları Dinler, bilişim sistemlerinde Robot olan kişi kendi kafasına göre yürüyemez; sadece verile... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Net ve Açık Komutlar</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Git' demek yetersizdir; '2 adım ileri yürü' gibi kesin konuşmalıyız.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Net ve Açık Komutlar, 'Git' demek yetersizdir; '2 adım ileri yürü' gibi kesin konuşmalıyız. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Kağıt Üzerinde Kodlama Labirentleri' bölümünde vurgulanan <strong>Başlangıç Noktası</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sol üst köşedeki sevimli tavşanı işaretleriz.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Başlangıç Noktası asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Ev Atölyesi: 'Halı Üzerinde Labirent Macerası''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Parkuru Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kodlama öğrenmek için mutlaka pahalı bir bilgisayar gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kodlamanın temeli mantık ve algoritmadır; kağıt, kalem ve zihnimizle her yerde kodlama yapılabilir!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Evde Koşmadan Oyna'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Robot oyunu oynarken adımları sakin ve dikkatli atın, eşyalara çarpmayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Evde Koşmadan Oyna prensibi, Robot oyunu oynarken adımları sakin ve dikkatli atın, eşyalara çarpmayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilgisayarsız Kodlama (Unplugged Coding) ile Problem Çözme Becerisini Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Algoritma: Bir hedefe ulaşmak için atılan adım adım yönergelerdir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Algoritma' doğrultusunda Bir hedefe ulaşmak için atılan adım adım yönergelerdir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Sömestr 1. Hafta: Bilgisayarsız Kodlama Macera Bülteni' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "21": [
    {
      "question": "Kırmızı - Sarı - Mavi - Kırmızı - Sarı - Mavi - Kırmızı - ... örüntüsünde soru işaretli yere hangi renk gelmelidir?",
      "options": [
        {
          "text": "Yeşil",
          "isCorrect": false
        },
        {
          "text": "Sarı",
          "isCorrect": true
        },
        {
          "text": "Mor",
          "isCorrect": false
        },
        {
          "text": "Beyaz",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Örüntü 'Kırmızı - Sarı - Mavi' şeklinde tekrar etmektedir; bu yüzden kırmızının arkasından 'Sarı' gelir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Akıl Oyunları Dünyası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Zihnimizi açan, odaklanmamızı artıran eğlenceli oyunlar.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Akıl Oyunları Dünyası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Tangram: Antik Çin Zekâ Bulmacası' kapsamında ele alınan <strong>2 Büyük Üçgen</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Gövde ve büyük kanatları yapmak için kullanılır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 2 Büyük Üçgen, bilişim sistemlerinde Gövde ve büyük kanatları yapmak için kullanılır.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>1 Orta Üçgen</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kuyruk veya çatı gibi orta büyüklükteki detaylar içindir.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 1 Orta Üçgen, Kuyruk veya çatı gibi orta büyüklükteki detaylar içindir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Mini Sudoku ve Örüntü Dedektifi' bölümünde vurgulanan <strong>Hiçbir Sayı Tekrar Etmez</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Her satırda, her sütunda ve her 2x2 kutuda 1, 2, 3... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Hiçbir Sayı Tekrar Etmez asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Ev Atölyesi: 'Kendi Tangramını Makasla Kes''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Tangram Şablonunu Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sudoku sadece matematik dahileri içindir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) 4x4 Sudoku tamamen bir dikkat ve mantık oyunudur; toplama-çıkarma bilmeye bile gerek yoktur!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Hemen Pes Etme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Bulmaca ilk denemede çözülmeyebilir; parçaları çevirin, yerlerini değiştirin ve yeniden deneyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hemen Pes Etme prensibi, Bulmaca ilk denemede çözülmeyebilir; parçaları çevirin, yerlerini değiştirin ve yeniden deneyin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Mantıksal Akıl Yürütme, Örüntüleri Keşfetme ve Parça-Bütün İlişkisi Kurma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Tangram: 7 parça ile sınırsız hayal gücüdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Tangram' doğrultusunda 7 parça ile sınırsız hayal gücüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Sömestr 2. Hafta: Zekâ Oyunları ve Dijital Bulmacalar' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "22": [
    {
      "question": "Bir işi veya görevi başarmak için takip ettiğimiz başlangıcı ve bitişi olan sıralı adımlara ne ad verilir?",
      "options": [
        {
          "text": "Algoritma",
          "isCorrect": true
        },
        {
          "text": "Monitör",
          "isCorrect": false
        },
        {
          "text": "Silgi",
          "isCorrect": false
        },
        {
          "text": "Elektrik Düğmesi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: A!</strong> Algoritma, hedefe adım adım giden en mantıklı ve sıralı yoldur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Algoritma Sözcüğü' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Büyük Türk bilgini El-Harezmi'den gelen sihirli kelime.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Algoritma Sözcüğü' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Algoritma: Adım Adım Başarı Reçetesi' kapsamında ele alınan <strong>1. Adım</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Diş fırçanı eline al ve suyla hafifçe ıslat.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Adım, bilişim sistemlerinde Diş fırçanı eline al ve suyla hafifçe ıslat.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Adım</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Diş macununun kapağını aç ve bezelye tanesi kadar macun sık.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Adım, Diş macununun kapağını aç ve bezelye tanesi kadar macun sık. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Algoritmanın 3 Altın Kuralı' bölümünde vurgulanan <strong>Algoritmanın 3 Altın Kuralı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sistemlerin doğru ve optimize biçimde çalışması... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Algoritmanın 3 Altın Kuralı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Lezzetli Tost Algoritması''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Adımları Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Algoritmalar sadece bilgisayarlar içindir, insanlar algoritma kullanmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) İnsanlar sabah uyanıp okula gidene kadar farkında olmadan yüzlerce algoritma uygular!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Açık ve Net Ol'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Komutları verirken robotun kafasını karıştırmayacak şekilde açık konuşun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Açık ve Net Ol prensibi, Komutları verirken robotun kafasını karıştırmayacak şekilde açık konuşun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritma Kavramını Anlama, Günlük Yaşam Olaylarını Sıralı Adımlarla İfade Etme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Algoritma: Sıralı adımlarla problem çözme planıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Algoritma' doğrultusunda Sıralı adımlarla problem çözme planıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Algoritma Nedir? Günlük Hayattaki Adımlar' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "23": [
    {
      "question": "Karakterimizin 3 kare yukarıya doğru yürümesi için aşağıdaki kod satırlarından hangisini yazmalıyız?",
      "options": [
        {
          "text": "[→] [→] [→]",
          "isCorrect": false
        },
        {
          "text": "[↑] [↑] [↑]",
          "isCorrect": true
        },
        {
          "text": "[↓] [↓] [↓]",
          "isCorrect": false
        },
        {
          "text": "[←] [→] [←]",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Yukarıyı gösteren 3 tane [↑] oku, karakteri 3 kare ileriye götürür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '4 Temel Yön' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İleri (↑), Geri (↓), Sağa Dön (→), Sola Dön (←).",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '4 Temel Yön' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Kodlamanın Dili: 4 Sihirli Yön Oku' kapsamında ele alınan <strong>↑ (İleri Yürü)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Karakter baktığı yönde 1 kare veya 1 adım ileri gider.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> ↑ (İleri Yürü), bilişim sistemlerinde Karakter baktığı yönde 1 kare veya 1 adım ileri gider.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>↓ (Geri Git)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Karakter arkasını dönmeden 1 kare geriye adım atar.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> ↓ (Geri Git), Karakter arkasını dönmeden 1 kare geriye adım atar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Robotun Gözünden Bakmak: Bakış Açısı' bölümünde vurgulanan <strong>Kendini Robotun Yerine Koy</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Zihninizde robotun arkasına geçip onunla aynı yöne... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kendini Robotun Yerine Koy asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Hedefe Ulaşma Oyunu''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Izgarayı İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"'Sağa dön' dediğimizde robot otomatik olarak sağdaki kareye atlar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Dönüş sadece yüzü o yöne çevirir; adım atmak için ileri komutu gerekir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Dönüş ile Adımı Karıştırma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) 'Sağa dön' komutundan sonra mutlaka bir 'İleri git' komutu verilmelidir; yoksa robot olduğu yerde döner durur!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Dönüş ile Adımı Karıştırma prensibi, 'Sağa dön' komutundan sonra mutlaka bir 'İleri git' komutu verilmelidir; yoksa robot olduğu yerde döner durur! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yön Oklarını (↑, ↓, →, ←) Kullanarak Mekânsal Yönergeler Oluşturabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Yön Okları: Kodlamanın evrensel yön pusulasıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Yön Okları' doğrultusunda Kodlamanın evrensel yön pusulasıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Yönergeler ve Yön Okları ile Komut Verme' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "24": [
    {
      "question": "Labirent oyununda önümüze aşamayacağımız bir taş duvar çıktığında algoritmamız ne yapmalıdır?",
      "options": [
        {
          "text": "Duvara kafa atıp beklemelidir",
          "isCorrect": false
        },
        {
          "text": "Duvarın etrafından dolaşacak yeni yön komutları vermelidir",
          "isCorrect": true
        },
        {
          "text": "Oyunu hemen kapatmalıdır",
          "isCorrect": false
        },
        {
          "text": "Geriye doğru sonsuza kadar gitmelidir",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> İyi bir yazılımcı engelle karşılaştığında pes etmez; duvarın etrafından dolaşacak yeni yönleri kodlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Labirent Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Çıkmaz sokakları ve engelleri olan bulmaca yolları.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Labirent Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Labirent Dedektifi: Duvarları Aşma Sanatı' kapsamında ele alınan <strong>1. Çıkmaz Sokakları İncele</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Ucu kapalı yollara girmeden önce gözümüzle takip ederiz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Çıkmaz Sokakları İncele, bilişim sistemlerinde Ucu kapalı yollara girmeden önce gözümüzle takip ederiz.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Adımları Say</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Daha az dönüş ve daha az adım içeren rotayı belirleriz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Adımları Say, Daha az dönüş ve daha az adım içeren rotayı belirleriz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'En Kısa Yol: Bilgisayarın Süper Gücü' bölümünde vurgulanan <strong>Fazla Adım</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 15 komut harcar, karakter yorulur.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Fazla Adım asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Hazine Avcısı Algoritması''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Engelleri İşaretle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Labirentte tek bir doğru yol vardır, başka yoldan gidilemez.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Labirentlerde hedefe giden birden fazla yol olabilir; yazılımcı en kısa ve en güvenli olanı seçer.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Sondan Başa Git'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Bazen hedeften geriye doğru takip etmek doğru yolu çok daha hızlı gösterir!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sondan Başa Git prensibi, Bazen hedeften geriye doğru takip etmek doğru yolu çok daha hızlı gösterir! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Labirentlerde En Kısa Yolu Bulma ve Engelleri Dolaşarak Algoritma Oluşturma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Engeller: Bizi durduramaz, sadece yolumuzu planlamamızı sağlar.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Engeller' doğrultusunda Bizi durduramaz, sadece yolumuzu planlamamızı sağlar. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Kareli Kâğıtta Labirent Çözme ve Hazine Avı' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "25": [
    {
      "question": "Bir bilgisayar programında veya kod satırında ortaya çıkan yanlışlıklara ve hatalara ne ad verilir?",
      "options": [
        {
          "text": "Piksel",
          "isCorrect": false
        },
        {
          "text": "Bug (Böcek / Hata)",
          "isCorrect": true
        },
        {
          "text": "Monitör",
          "isCorrect": false
        },
        {
          "text": "Klavye",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Koddaki mantık hatalarına 'Bug', bu hataları temizleyip düzeltmeye ise 'Debugging' denir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bug (Böcek) Hikayesi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Tarihin ilk bilgisayarına sıkışan gerçek güve böceğinin hikayesi.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bug (Böcek) Hikayesi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Tarihin İlk Bilgisayar Böceği (Bug)' kapsamında ele alınan <strong>Dev Bilgisayar Durdu</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Bilim insanı Grace Hopper bilgisayarın neden çalışmadığını araştırdı.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Dev Bilgisayar Durdu, bilişim sistemlerinde Bilim insanı Grace Hopper bilgisayarın neden çalışmadığını a... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sıkışan Güve Böceği</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Makinelerin röleleri arasına sıkışıp kalan bir böcek (Bug) buldu.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sıkışan Güve Böceği, Makinelerin röleleri arasına sıkışıp kalan bir böcek (Bug) buldu. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hata Ayıklama Dedektifinin 3 Adımı' bölümünde vurgulanan <strong>Hata Ayıklama Dedektifinin 3 Adımı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sistemlerin doğru ve optimize biçimde çalışması... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Hata Ayıklama Dedektifinin 3 Adımı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Böcek Avlama Yarışması''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kodu Takip Et' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İyi bir yazılımcı hiç hata yapmaz, tek seferde hatasız kod yazar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Gerçek yazılımcılık hata yapmamak değil, yapılan hataları sabırla çözebilme becerisidir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Hata Yapmak Doğaldır'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Dünyanın en iyi yazılımcıları bile her gün yüzlerce hata ayıklar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hata Yapmak Doğaldır prensibi, Dünyanın en iyi yazılımcıları bile her gün yüzlerce hata ayıklar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritmadaki Hatalı Adımı Tespit Etme (Debug) ve Doğrusuyla Değiştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Bug: Yolumuza çıkan minik kod hatasıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Bug' doğrultusunda Yolumuza çıkan minik kod hatasıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Kodlama Hatalarını Bulma: Hata Ayıklama (Debugging)' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "26": [
    {
      "question": "Kodlamada 'EĞER karakter altın elmaya değerse...' şartı gerçekleştiğinde aşağıdaki olaylardan hangisinin olması en mantıklıdır?",
      "options": [
        {
          "text": "Oyuncunun puanı 10 artar ve neşeli bir ses çalar",
          "isCorrect": true
        },
        {
          "text": "Bilgisayar tamamen bozulur",
          "isCorrect": false
        },
        {
          "text": "Ekran kapkaranlık olur",
          "isCorrect": false
        },
        {
          "text": "Karakter oyundan dışarı fırlar",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: A!</strong> Şart gerçekleştiğinde (elmaya değince) oyuncu ödüllendirilir ve puan kazanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '12 Mart Ruhu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Milli Şairimiz Mehmet Akif Ersoy ve İstiklal Marşı'mızın kabulü.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '12 Mart Ruhu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Karar Verme Büyüsü: 'Eğer... İse...'' kapsamında ele alınan <strong>Trafik Işıkları</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) EĞER ışık kırmızı İSE dur! EĞER yeşil İSE geç!",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Trafik Işıkları, bilişim sistemlerinde EĞER ışık kırmızı İSE dur! EĞER yeşil İSE geç!... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Hava Durumu</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) EĞER yağmur yağıyorsa İSE şemsiyeni yanına al.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Hava Durumu, EĞER yağmur yağıyorsa İSE şemsiyeni yanına al. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'İstiklal Marşı ve Bağımsızlık Şartımız' bölümünde vurgulanan <strong>Korkma!</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Marşımızın ilk kelimesi milletimize cesaret ve umu... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Korkma! asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Eğer... İse...' Drama Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Şartı Dinle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilgisayarlar kendi kendilerine canları ne isterse öyle karar verirler.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilgisayarlar sadece bizim yazdığımız 'Eğer... İse...' kurallarını kontrol ederek mantıklı kararlar verir.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'İki İhtimal Vardır'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Bir şart ya Doğrudur (Evet) ya da Yanlıştır (Hayır).",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> İki İhtimal Vardır prensibi, Bir şart ya Doğrudur (Evet) ya da Yanlıştır (Hayır). gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Günlük Hayatta ve Kodlamada Şartlı Durumları (Eğer - İse) Kavrayabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Eğer... İse...: Kodlamadaki akıllı karar verme anahtarıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Eğer... İse...' doğrultusunda Kodlamadaki akıllı karar verme anahtarıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '12 Mart İstiklal Marşı & Şartlı Kararlar (Eğer... İse...)' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "27": [
    {
      "question": "Bir robota 4 eşit kenarı olan bir kare çizdirmek için hangi döngüyü kullanmak en doğrudur?",
      "options": [
        {
          "text": "2 Kere Tekrarla: [İleri Git, Sağa Dön]",
          "isCorrect": false
        },
        {
          "text": "4 Kere Tekrarla: [İleri Git, Sağa Dön]",
          "isCorrect": true
        },
        {
          "text": "100 Kere Tekrarla: [Geri Git]",
          "isCorrect": false
        },
        {
          "text": "Hiç döngü kullanmamak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Karenin 4 kenarı ve 4 köşesi vardır; bu yüzden 'İleri Git, Sağa Dön' hareketini 4 kez tekrarlamak tam bir kare çizer.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '18 Mart Çanakkale Ruhu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Çanakkale Geçilmez destanı ve kahraman şehitlerimiz.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '18 Mart Çanakkale Ruhu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Döngülerin Sihri: Tekrar Blokları' kapsamında ele alınan <strong>Döngüsüz Yol (Uzun)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) İleri Git, Sağa Dön, İleri Git, Sağa Dön, İleri Git, Sağa Dön, İleri Git, Sağa Dön (8 komut!).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Döngüsüz Yol (Uzun), bilişim sistemlerinde İleri Git, Sağa Dön, İleri Git, Sağa Dön, İleri Git, Sağa Dö... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Döngülü Yol (Akıllıca)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 4 KERE TEKRARLA: [İleri Git, Sağa Dön] (Sadece tek satır!).",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Döngülü Yol (Akıllıca), 4 KERE TEKRARLA: [İleri Git, Sağa Dön] (Sadece tek satır!). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Doğadaki ve Hayatımızdaki Döngüler' bölümünde vurgulanan <strong>Gece ve Gündüz</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Dünyamız kendi etrafında döner, gece ve gündüz hiç... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Gece ve Gündüz asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Döngülü Dans Gösterisi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Hareketi Belirle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Döngü kullanınca bilgisayar daha çok yorulur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Tam tersine, döngü kullanmak kod satırlarını azaltır ve bilgisayarın hafızasını rahatlatır!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Tekrar Sayısına Dikkat'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Üçgen çizecekseniz 3 kere, kare çizecekseniz 4 kere tekrarla demelisiniz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tekrar Sayısına Dikkat prensibi, Üçgen çizecekseniz 3 kere, kare çizecekseniz 4 kere tekrarla demelisiniz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Döngü (Tekrar) Kavramını Anlama, Tekrarlayan Hareketleri Kısa Yoldan Kodlayabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Döngü (Loop): Tekrarlanan işleri tek satırda çözme sanatıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Döngü (Loop)' doğrultusunda Tekrarlanan işleri tek satırda çözme sanatıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '18 Mart Çanakkale Zaferi & Döngüler (Tekrar Blokları)' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "28": [
    {
      "question": "ScratchJr blok tabanlı kodlama programında hazırladığımız animasyonu başlatmak için hangi renk bayrağa tıklarız?",
      "options": [
        {
          "text": "Kırmızı Bayrak",
          "isCorrect": false
        },
        {
          "text": "Yeşil Bayrak",
          "isCorrect": true
        },
        {
          "text": "Mavi Bayrak",
          "isCorrect": false
        },
        {
          "text": "Sarı Bayrak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Yeşil Bayrak, kodlama dünyasında 'Oyunu ve Animasyonu Başlat' anlamına gelir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'ScratchJr / Code.org Dünyası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Çocuklar için özel tasarlanmış blok kodlama platformu.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'ScratchJr / Code.org Dünyası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'ScratchJr Stüdyosu ile Tanışıyoruz' kapsamında ele alınan <strong>1. Sahne (Büyük Ekran)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Karakterlerimizin koştuğu, dans ettiği ve oyunun oynandığı yer.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Sahne (Büyük Ekran), bilişim sistemlerinde Karakterlerimizin koştuğu, dans ettiği ve oyunun oynandığı y... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Karakter Menüsü (Sol Taraf)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yeni kahramanlar, hayvanlar ve araçlar eklediğimiz alan.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Karakter Menüsü (Sol Taraf), Yeni kahramanlar, hayvanlar ve araçlar eklediğimiz alan. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Renkli Blokların Görevleri' bölümünde vurgulanan <strong>Renkli Blokların Görevleri</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sistemlerin doğru ve optimize biçimde çalışması... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Renkli Blokların Görevleri asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'İlk Karakterimi Sahneye Koyuyorum''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Yeni Proje Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kod yazmak için binlerce karmaşık İngilizce kelime ezberlemek zorundayız.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Blok tabanlı kodlamada resimli ve renkli blokları sürükleyip birleştirmek yeterlidir!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Blokları Birbirine Yapıştır'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Bloklar yapboz gibidir; birbirine tık diye kilitlenmezse kodlar çalışmaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Blokları Birbirine Yapıştır prensibi, Bloklar yapboz gibidir; birbirine tık diye kilitlenmezse kodlar çalışmaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Blok Tabanlı Kodlama Arayüzünü Tanıma, Karakter ve Sahne Ekleyebilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) ScratchJr: Çocukların çizgi film ve oyun stüdyosudur.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'ScratchJr' doğrultusunda Çocukların çizgi film ve oyun stüdyosudur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Blok Tabanlı Kodlamaya Giriş: ScratchJr Arayüzü' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "29": [
    {
      "question": "ScratchJr'da hazırladığımız bir kod zincirinin yeşil bayrağa tıklandığında çalışması için en başa hangi blok konulmalıdır?",
      "options": [
        {
          "text": "Kırmızı Durdurma Bloğu",
          "isCorrect": false
        },
        {
          "text": "Üzerinde Yeşil Bayrak olan Sarı Başlatıcı Blok",
          "isCorrect": true
        },
        {
          "text": "Mavi Sağa Dönüş Bloğu",
          "isCorrect": false
        },
        {
          "text": "Mor Görünüm Bloğu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Sarı bayrak bloğu kapının anahtarı gibidir; yeşil bayrağa basıldığında arkasındaki tüm blokları sırayla çalıştırır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kod Bulmacaları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Karışık blok dizilerini doğru eşleştirme.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kod Bulmacaları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Algoritmadan Blok Kodlamaya Başarı Köprüsü' kapsamında ele alınan <strong>Algoritma Mantığı</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Günlük hayattaki sıralı adımları ve hedefe gitmeyi biliyoruz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Algoritma Mantığı, bilişim sistemlerinde Günlük hayattaki sıralı adımları ve hedefe gitmeyi biliyoruz... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Yön Okları ve Labirent</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) En kısa yoldan engelleri aşarak hazineyi buluyoruz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Yön Okları ve Labirent, En kısa yoldan engelleri aşarak hazineyi buluyoruz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Blok Eşleştirme Soru Odası' bölümünde vurgulanan <strong>Sarı Bayrak Bloğu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yeşil bayrağa basılınca kodları başlatır.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sarı Bayrak Bloğu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kodlama Şampiyonası''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Hedefi İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sarı bayrak bloğu olmadan da kodlar kendi kendine çalışır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Her kod zincirinin başlaması için mutlaka en başta bir başlatıcı (tetikleyici) blok bulunmalıdır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Adımları Parmakla Say'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Karakterin kaç adım gitmesi gerektiğini ekrana bakarak dikkatlice sayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Adımları Parmakla Say prensibi, Karakterin kaç adım gitmesi gerektiğini ekrana bakarak dikkatlice sayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritma, Yön Okları, Hata Ayıklama ve Blok Kodlama Temellerini Değerlendirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Başarı: Düzenli çalışan ve pratik yapan öğrencilerin ödülüdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Başarı' doğrultusunda Düzenli çalışan ve pratik yapan öğrencilerin ödülüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '2. Dönem 1. Değerlendirme & Blok Kodlama Bulmacaları' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "30": [
    {
      "question": "ScratchJr'da karakterin sağa doğru 5 adım birden yürümesi için en pratik yöntem hangisidir?",
      "options": [
        {
          "text": "Yan yana 5 tane [Sağa Git: 1] bloğu dizmek",
          "isCorrect": false
        },
        {
          "text": "Tek bir [Sağa Git] bloğu koyup altındaki sayıyı '5' yapmak",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarın ekranını sağa doğru eğmek",
          "isCorrect": false
        },
        {
          "text": "Farenin sol tuşuna 5 kere vurmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bloğun altındaki sayıyı 5 yapmak, kodumuzu tertemiz tutar ve karakteri tek seferde 5 adım koşturur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Mavi Bloklar Dünyası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sağa (➔), Sola (⬅), Yukarı (⬆), Aşağı (⬇) ve Zıpla (⤴).",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Mavi Bloklar Dünyası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Mavi Hareket Bloklarının Gücü' kapsamında ele alınan <strong>Sağa Git (➔)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Karakteri ekranın sağına doğru yürütür.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sağa Git (➔), bilişim sistemlerinde Karakteri ekranın sağına doğru yürütür.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sola Git (⬅)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Karakteri ekranın soluna doğru yürütür.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sola Git (⬅), Karakteri ekranın soluna doğru yürütür. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sayı Parametresinin Sırrı' bölümünde vurgulanan <strong>Tuş Takımı Açılır</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Ekrana 1'den 9'a kadar minik bir hesap makinesi ge... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tuş Takımı Açılır asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kedi Ağaca Tırmanıyor''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Park Arka Planı Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Karakteri hareket ettirmek için farenin sol tuşuyla sürekli tutup çekmek zorundayız.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Blokları bir kere yazıp yeşil bayrağa bastığımızda karakter kendi kendine otomatik olarak hareket eder!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Karakter Ekrandan Kaçmasın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Çok büyük sayılar (örn: 50) yazarsanız karakter ekranın dışına çıkıp kaybolabilir; 5-10 arası sayılar idealdir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Karakter Ekrandan Kaçmasın prensibi, Çok büyük sayılar (örn: 50) yazarsanız karakter ekranın dışına çıkıp kaybolabilir; 5-10 arası sayılar idealdir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Karakteri Farklı Yönlerde Hareket Ettirme, Sayı Parametrelerini Değiştirme ve Zıplatma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Mavi Bloklar: Karakterimizin bacakları ve kanatlarıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Mavi Bloklar' doğrultusunda Karakterimizin bacakları ve kanatlarıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Karakterleri Hareket Ettirme: Yeşil Bayrak ve Mavi Bloklar' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "31": [
    {
      "question": "ScratchJr'da hazır karakterler yerine kendi çizdiğimiz bir resmi eklemek için hangi butona basarız?",
      "options": [
        {
          "text": "Çöp Kutusu",
          "isCorrect": false
        },
        {
          "text": "Karakter ekleme menüsündeki Boya Fırçası butonu",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarın kapatma düğmesi",
          "isCorrect": false
        },
        {
          "text": "Ses kısma butonu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Boya fırçası butonu çizim editörünü açar ve kendi kahramanımızı sıfırdan çizmemizi sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Çizim Editörü (Boya Fırçası)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) ScratchJr içinde kendi kahramanımızı sıfırdan çizme.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Çizim Editörü (Boya Fırçası)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'ScratchJr Çizim Editörü: Kahramanını Yarat!' kapsamında ele alınan <strong>1. Fırça Simgesine Tıkla</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Karakter ekleme listesinde boş kartın üzerindeki fırçaya basarız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Fırça Simgesine Tıkla, bilişim sistemlerinde Karakter ekleme listesinde boş kartın üzerindeki fırçaya bas... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Şekillerle Gövde Yap</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Daire aracıyla sevimli bir kafa ve gövde çizeriz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Şekillerle Gövde Yap, Daire aracıyla sevimli bir kafa ve gövde çizeriz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Masal Sahnesi Tasarımı' bölümünde vurgulanan <strong>Büyülü Orman</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kuşların öttüğü, sincap ve tavşanların gezindiği y... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Büyülü Orman asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Ormandaki Gizemli Yolculuk''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kahramanını Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sadece profesyonel ressamlar güzel oyun karakteri çizebilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Birkaç geometrik daire ve neşeli renklerle çizilen basit karakterler çoğu zaman en sevimli kahramanlar olur!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Kapalı Çizgiler'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Çizim yaparken çizgilerin uçlarını tam birleştirin, yoksa boya kovası tüm sayfayı boyar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kapalı Çizgiler prensibi, Çizim yaparken çizgilerin uçlarını tam birleştirin, yoksa boya kovası tüm sayfayı boyar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kendi Karakterini Çizim Editöründe Tasarlama ve Kod Bloklarıyla Canlandırma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Yaratıcılık: Hayal ettiğimiz her şeyi dijitalde çizebilme gücüdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Yaratıcılık' doğrultusunda Hayal ettiğimiz her şeyi dijitalde çizebilme gücüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '2. Dönem Ara Tatil: İnteraktif Masal Atölyesi' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "32": [
    {
      "question": "ScratchJr'da bir dans hareketinin arka arkaya 5 defa tekrarlanması için hangi renk blok kullanılır?",
      "options": [
        {
          "text": "Mavi Hareket Bloğu",
          "isCorrect": false
        },
        {
          "text": "Turuncu Döngü (Tekrar) Bloğu",
          "isCorrect": true
        },
        {
          "text": "Kırmızı Dur Bloğu",
          "isCorrect": false
        },
        {
          "text": "Sarı Başlatıcı Blok",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Turuncu döngü bloğu, içindeki hareketleri istediğimiz sayıda otomatik tekrar ettirir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '23 Nisan Coşkusu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Dünya çocuklarının kardeşlik ve neşe bayramı.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '23 Nisan Coşkusu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Turuncu Döngü Bloğu ile Sürekli Dans' kapsamında ele alınan <strong>1. Sarı Bayrak</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Yeşil bayrağa basıldığında dans başlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Sarı Bayrak, bilişim sistemlerinde Yeşil bayrağa basıldığında dans başlar.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Turuncu Döngü Kutusu</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İçine konulan hareketleri belirttiğimiz sayı kadar (örn: 6 defa) tekrarlar.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Turuncu Döngü Kutusu, İçine konulan hareketleri belirttiğimiz sayı kadar (örn: 6 defa) tekrarlar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'23 Nisan: Dünyanın En Güzel Çocuk Bayramı' bölümünde vurgulanan <strong>Meclisimizin Açılışı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Milletimizin kendi kendini yönettiği Türkiye Büyük... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Meclisimizin Açılışı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: '23 Nisan Dans Gösterisi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '2 Karakter Ekle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sahnede 5 karakter varsa her birini başlatmak için 5 kere ayrı ayrı tıklamak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hepsine 'Yeşil Bayrak' bloğu koyarsanız, tek bir yeşil bayrak tıklamasıyla hepsi aynı anda dansa başlar!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Döngünün Ağzı Açıktır'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Turuncu döngü bloğu bir timsah ağzı gibidir; tekrarlanacak blokları içine yutmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Döngünün Ağzı Açıktır prensibi, Turuncu döngü bloğu bir timsah ağzı gibidir; tekrarlanacak blokları içine yutmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Döngü Bloğunu Karakter Hareketiyle Birleştirme, 23 Nisan Çocuk Şenliği Animasyonu Kodlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 23 Nisan: Atatürk'ün çocuklara en güzel hediyesidir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '23 Nisan' doğrultusunda Atatürk'ün çocuklara en güzel hediyesidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '23 Nisan Çocuk Bayramı: Dans Eden Karakterler' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "33": [
    {
      "question": "ScratchJr'da karakterin başının üzerinde çizgi romanlardaki gibi bir konuşma balonu çıkarmak için hangi renk blok kullanılır?",
      "options": [
        {
          "text": "Mavi Hareket Bloğu",
          "isCorrect": false
        },
        {
          "text": "Mor Görünüm Bloğu",
          "isCorrect": true
        },
        {
          "text": "Sarı Tetikleyici Blok",
          "isCorrect": false
        },
        {
          "text": "Kırmızı Durdurucu Blok",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Mor bloklar karakterin dış görünüşünü, konuşma balonlarını ve büyüklüğünü kontrol eder.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Mor Bloklar (Görünüm)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Konuşma balonu, büyüme, küçülme ve kaybolma efektleri.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Mor Bloklar (Görünüm)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Karakterlerimize Ses ve Nefes Veriyoruz' kapsamında ele alınan <strong>1. Konuşma Balonu (Mor)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Karakterin kafasının üstünde tıpkı çizgi romanlardaki gibi yazı balonu açar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Konuşma Balonu (Mor), bilişim sistemlerinde Karakterin kafasının üstünde tıpkı çizgi romanlardaki gibi y... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Ses Efekti (Pembe 'Pop')</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Karakter zıpladığında veya bir yere çarptığında eğlenceli 'pop' sesi çıkarır.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Ses Efekti (Pembe 'Pop'), Karakter zıpladığında veya bir yere çarptığında eğlenceli 'pop' sesi çıkarır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Mikrofon ile Kendi Sesini Kaydetme Adımları' bölümünde vurgulanan <strong>1. Pembe Kategoriye Bas</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yukarıdaki pembe ses menüsüne tıklayın.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 1. Pembe Kategoriye Bas asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Konuşan Dostum Robot''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Robot Karakteri Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"ScratchJr'da sadece kendi dilimizdeki hazır sesleri kullanabiliriz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Mikrofon sayesinde dünyanın tüm dillerini, hayvan seslerini, alkışları ve kendi şarkılarınızı kaydedebilirsiniz!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Mikrofona Çok Bağırma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Mikrofona çok yakın bağırırsanız ses patlar ve cızırtılı çıkar; sakin bir sesle konuşun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Mikrofona Çok Bağırma prensibi, Mikrofona çok yakın bağırırsanız ses patlar ve cızırtılı çıkar; sakin bir sesle konuşun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Karakterlere Konuşma Balonları ve Ses Efektleri Ekleme, Kendi Sesini Kaydedebilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Mor Bloklar: Yazılı diyaloglar ve büyüme-küçülme sihridir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Mor Bloklar' doğrultusunda Yazılı diyaloglar ve büyüme-küçülme sihridir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Konuşan ve Ses Çıkaran Karakterler' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "34": [
    {
      "question": "ScratchJr'da birinci karakter konuşmasını bitirdikten sonra ikinci karakterin söze başlamasını sağlamak için hangi mekanizma kullanılır?",
      "options": [
        {
          "text": "Bilgisayarı kapatıp açmak",
          "isCorrect": false
        },
        {
          "text": "Renkli Zarf Gönderme ve Zarf Alma (Haberleşme) blokları",
          "isCorrect": true
        },
        {
          "text": "Karakterleri sahneden silmek",
          "isCorrect": false
        },
        {
          "text": "Sadece fareye hızlıca tıklamak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Zarf blokları (mektuplar), karakterlerin birbirine 'benim sözüm bitti, şimdi sıra sende!' mesajı göndermesini sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Zarf Gönderme (Mektup)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sarı renkli açık ve kapalı zarf bloklarının mantığı.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Zarf Gönderme (Mektup)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sihirli Mektuplar: Zarf Gönderme Sanatı' kapsamında ele alınan <strong>1. Kedi Başlar</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Kedi 'Günaydın Köpek Kardeş!' der ve kapalı turuncu zarfı postalar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Kedi Başlar, bilişim sistemlerinde Kedi 'Günaydın Köpek Kardeş!' der ve kapalı turuncu zarfı po... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Zarf Gönderme Bloğu</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sarı açık zarf bloğu havaya bir mesaj sinyali fırlatır.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Zarf Gönderme Bloğu, Sarı açık zarf bloğu havaya bir mesaj sinyali fırlatır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sayfa ve Sahne Değiştirme (2. Perde)' bölümünde vurgulanan <strong>Artı (+) Butonu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sağdaki sütundan artıya basarak 2. sahneyi oluştur... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Artı (+) Butonu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kedi ile Köpeğin Sohbeti''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '2 Karakter Koy' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İki karakterin aynı anda konuşması daha iyidir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Gerçek hayatta da kodlamada da sırayla konuşmak iletişimin en temel nezaket kuralıdır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Zarf Renklerine Dikkat'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Kedi turuncu zarf atıp köpek mavi zarf beklerse köpek asla konuşmaz; renkler birebir aynı olmalıdır!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Zarf Renklerine Dikkat prensibi, Kedi turuncu zarf atıp köpek mavi zarf beklerse köpek asla konuşmaz; renkler birebir aynı olmalıdır! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Mesajlaşma (Zarf Gönderme/Alma) Mekanizmasıyla Karakterleri Sırayla Konuşturma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Zarflar: Karakterlerin görünmez telsiz telefonudur.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Zarflar' doğrultusunda Karakterlerin görünmez telsiz telefonudur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Sahne Değiştirme ve İki Karakteri Konuşturma' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "35": [
    {
      "question": "Görme engelli bir bireyin bilgisayardaki yazıları rahatça anlayabilmesi için hangi teknoloji kullanılır?",
      "options": [
        {
          "text": "Ekran Okuyucu (Yazıları sese dönüştüren) programlar",
          "isCorrect": true
        },
        {
          "text": "Ekranı tamamen kapatmak",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarın klavyesini sökmek",
          "isCorrect": false
        },
        {
          "text": "Sadece oyun oynamak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: A!</strong> Ekran okuyucular, ekrandaki tüm metinleri seslendirerek görme engelli bireylerin dünyayla iletişim kurmasını sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Engelliler Haftası (10-16 Mayıs)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Farkındalık, empati, sevgi ve dayanışma haftası.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Engelliler Haftası (10-16 Mayıs)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Teknoloji Engelleri Kaldırır!' kapsamında ele alınan <strong>Ekran Okuyucu Programlar</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Ekranda yazan yazıları sesli olarak okuyarak görme engelli bireylere rehberlik eder.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Ekran Okuyucu Programlar, bilişim sistemlerinde Ekranda yazan yazıları sesli olarak okuyarak görme engelli b... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Alt Yazılar ve İşaret Dili</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İşitme engelli arkadaşlarımızın videoları kolayca anlamasını sağlar.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Alt Yazılar ve İşaret Dili, İşitme engelli arkadaşlarımızın videoları kolayca anlamasını sağlar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bizim Kodlayacağımız Yardımcı Asistan' bölümünde vurgulanan <strong>Dokunma Tetikleyicisi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sarı 'Karaktere Dokunulunca' bloğunu kullanırız.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Dokunma Tetikleyicisi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Sesli Asistanım Yanımda''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Büyük Bir Buton Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Engelli bireyler bilgisayar veya akıllı telefon kullanamaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Geliştirilen akıllı ekran okuyucular ve dokunmatik cihazlar sayesinde engelli bireyler bilgisayarı harika şekilde kullanabilir!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Zıt Renkler Kullan'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Az gören bireylerin fark edebilmesi için siyah zemin üzerine sarı butonlar koyun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Zıt Renkler Kullan prensibi, Az gören bireylerin fark edebilmesi için siyah zemin üzerine sarı butonlar koyun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Empati Duygusu Geliştirme, Özel Gereksinimli Bireyler İçin Teknolojik Çözümler Tasarlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Empati: Kendimizi başkasının yerine koyup onun dünyasını anlamaktır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Empati' doğrultusunda Kendimizi başkasının yerine koyup onun dünyasını anlamaktır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Engelliler Haftası: Sesli ve Görsel Yardımcı Asistan' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "36": [
    {
      "question": "ScratchJr'da bir nesnenin (örneğin altın yıldızın) kahramanımız ona dokunduğunda ekrandan kaybolması için hangi mor blok kullanılır?",
      "options": [
        {
          "text": "Büyüt Bloğu",
          "isCorrect": false
        },
        {
          "text": "Gizle (Gözü Kapalı Adam) Bloğu",
          "isCorrect": true
        },
        {
          "text": "Sağa Dön Bloğu",
          "isCorrect": false
        },
        {
          "text": "Sarı Bayrak Bloğu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Mor renkli 'Gizle' bloğu, nesneyi görünmez yapar; böylece oyuncu ödülü toplamış gibi hisseder.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '19 Mayıs Ruhu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Atatürk'ü Anma, Gençlik ve Spor Bayramı'nın enerjisi.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '19 Mayıs Ruhu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Oyunlaştırmanın Kalbi: Çarpışma Algısı' kapsamında ele alınan <strong>1. Oyuncu Karakteri</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Ok tuşlarıyla veya dokunarak kontrol ettiğimiz sporcu karakterimiz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Oyuncu Karakteri, bilişim sistemlerinde Ok tuşlarıyla veya dokunarak kontrol ettiğimiz sporcu karakt... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Altın Yıldızlar</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Labirentin içine serpiştirdiğimiz toplanabilir ödüller.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Altın Yıldızlar, Labirentin içine serpiştirdiğimiz toplanabilir ödüller. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'19 Mayıs ve Sporun Gücü' bölümünde vurgulanan <strong>Milli Mücadelenin Başlangıcı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Atatürk'ün Bandırma Vapuru ile Samsun'a ayak bastı... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Milli Mücadelenin Başlangıcı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Yıldız Toplama Şampiyonası''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Labirent Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir bilgisayar oyunu yapmak için yüz kişilik bir şirket olmak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) En popüler oyunların pek çoğu tek bir kişinin hayal gücü ve basit kodlama bloklarıyla başlamıştır!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Geri Getir Bloğu'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Toplanan yıldızlar gizlendikten sonra oyunu baştan başlatırken 'Göster' bloğunu koymayı unutmayın!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Geri Getir Bloğu prensibi, Toplanan yıldızlar gizlendikten sonra oyunu baştan başlatırken 'Göster' bloğunu koymayı unutmayın! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Etkileşimli Mini Oyun Mekaniği Kurma, Çarpışma Algısı ve Skor Puanı Mantığını Anlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Çarpışma: Karakterlerin birbirine değdiğini algılama gücüdür.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Çarpışma' doğrultusunda Karakterlerin birbirine değdiğini algılama gücüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '19 Mayıs Spor Bayramı: Mini Labirent Oyunu' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "37": [
    {
      "question": "Otomatik kapıların biz yaklaştığımızda bizi görüp kendiliğinden açılmasını sağlayan robot organı hangisidir?",
      "options": [
        {
          "text": "Sensör (Duyarga / Algılayıcı)",
          "isCorrect": true
        },
        {
          "text": "Bilgisayar Faresi",
          "isCorrect": false
        },
        {
          "text": "Yazıcı",
          "isCorrect": false
        },
        {
          "text": "Not Defteri",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Hareket ve mesafe sensörleri insanların yaklaştığını algılar ve motora 'kapıyı aç' emrini verir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Robot Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Duyargaları (sensörleri) ile dünyayı algılayan akıllı makineler.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Robot Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Robotların 3 Harika Organı' kapsamında ele alınan <strong>1. Sensörler (Duyularımız)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Kamera (Göz), Mikrofon (Kulak), Dokunma Sensörü (Deri), Mesafe Sensörü (Göz mesafesi).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Sensörler (Duyularımız), bilişim sistemlerinde Kamera (Göz), Mikrofon (Kulak), Dokunma Sensörü (Deri), Mesa... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Beyin / Mikrodenetleyici (Zihnimiz)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sensörden gelen bilgiyi okur ve 'Ne yapmalıyım?' diye kodları çalıştırır.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Beyin / Mikrodenetleyici (Zihnimiz), Sensörden gelen bilgiyi okur ve 'Ne yapmalıyım?' diye kodları çalıştırır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sıfır Atık: Doğayı Koruyan Akıllı Robotlar' bölümünde vurgulanan <strong>Mesafe Sensörü</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Elimizde bir atıkla yaklaştığımızı fark eder.... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Mesafe Sensörü asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Akıllı Çöp Kutusu Simülasyonu''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Çöp Kovası Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Robotlar insanlardan daha zekidir ve dünyayı ele geçirecektir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Robotlar kendi başlarına hiçbir şey yapamazlar; sadece insanların yazdığı kodları harfiyen uygulayan yardımcı araçlardır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Elektronik Atıkları Sakla'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Biten pilleri ve bozuk kabloları çöpe atmayın; okulun atık pil kutusuna teslim edin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Elektronik Atıkları Sakla prensibi, Biten pilleri ve bozuk kabloları çöpe atmayın; okulun atık pil kutusuna teslim edin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Robotların Çalışma Mantığını (Sensör-Beyin-Motor) Anlama, Sıfır Atık Bilinci Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Sensörler: Robotların çevreye bakan gözleri ve kulaklarıdır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Sensörler' doğrultusunda Robotların çevreye bakan gözleri ve kulaklarıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Robotlar Nasıl Düşünür? Sensörler ve Sıfır Atık' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "38": [
    {
      "question": "Yapay zekânın bir köpeği diğer hayvanlardan ayırt edebilmesi için aşağıdakilerden hangisi yapılmalıdır?",
      "options": [
        {
          "text": "Bilgisayara çok sayıda köpek fotoğrafı gösterip eğitmek",
          "isCorrect": true
        },
        {
          "text": "Bilgisayara mama vermek",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarın kamerasını kapatmak",
          "isCorrect": false
        },
        {
          "text": "Hiçbir şey yapmadan beklemek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: A!</strong> Yapay zekâ bol miktarda örnek veri (fotoğraf) görerek öğrenir ve aralarındaki benzerlikleri çözer.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Yapay Zekâ (AI) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnsan aklını ve öğrenmesini taklit eden akıllı yazılımlar.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Yapay Zekâ (AI) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bilgisayarlar Nasıl Öğrenir? Veri Eğitimi' kapsamında ele alınan <strong>1. Çok Sayıda Örnek (Veri)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Bilgisayara yüzlerce kedi ve yüzlerce köpek fotoğrafı gösteririz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Çok Sayıda Örnek (Veri), bilişim sistemlerinde Bilgisayara yüzlerce kedi ve yüzlerce köpek fotoğrafı göster... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Ortak Özellikleri Bulur</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kedilerin sivri kulaklarını, bıyıklarını ve göz yapısını inceler.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Ortak Özellikleri Bulur, Kedilerin sivri kulaklarını, bıyıklarını ve göz yapısını inceler. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yapay Zekâ Günlük Hayatımızda Nerede?' bölümünde vurgulanan <strong>Sesli Asistanlar</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Siri veya Asistan'a 'Bugün hava nasıl?' dediğimizd... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sesli Asistanlar asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Akıllı Kamera Deneyi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kamerayı Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yapay zekâ her şeyi bilir ve asla yanılmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yapay zekâya yanlış veya eksik örnekler verirsek yanlış sonuçlar çıkarabilir; bu yüzden denetleyici daima insandır.",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Yapay Zekâ Sihir Değildir'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Yapay zekâ sihir değil, matematik ve bilgisayar kodudur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Yapay Zekâ Sihir Değildir prensibi, Yapay zekâ sihir değil, matematik ve bilgisayar kodudur. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yapay Zekânın Temel Mantığını (Veri ile Öğrenme) Kavrama ve Günlük Hayattaki Örneklerini Tanıma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Yapay Zekâ: Verilerden öğrenen akıllı yazılımlardır.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Yapay Zekâ' doğrultusunda Verilerden öğrenen akıllı yazılımlardır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Yapay Zekâ Nedir? Bilgisayarlar Nasıl Öğrenir?' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "39": [
    {
      "question": "Bu yıl öğrendiğimiz; 'Adım adım plan yapmak (Algoritma)', 'Hataları düzeltmek (Debug)' ve 'Blokları birleştirmek' bize hangi süper beceriyi kazandırdı?",
      "options": [
        {
          "text": "Sadece televizyon kumandası kullanmayı",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarca düşünme ve Kodlama (Yazılımcılık) becerisini",
          "isCorrect": true
        },
        {
          "text": "Bütün gün hareketsiz oturmayı",
          "isCorrect": false
        },
        {
          "text": "Klavyenin tuşlarını sökmeyi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Tüm yıl boyunca edindiğimiz bilgiler bize geleceğin yazılımcısı olma süper gücünü kazandırdı!",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Bilişim Arenası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanımdan algoritmaya, ScratchJr'dan yapay zekâya tüm konular.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Bilişim Arenası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yılın Büyük Özeti: Bilişim Dağı'nın Zirvesi' kapsamında ele alınan <strong>1. Tema (Donanım & Başlatma)</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Masaüstü bilgisayarın parçaları, güvenli açma-kapama, klavye ve fare.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Tema (Donanım & Başlatma), bilişim sistemlerinde Masaüstü bilgisayarın parçaları, güvenli açma-kapama, klavye... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Tema (Dijital Sanatlar)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Paint araçları, bayrak çizimi, öğretmenler günü kartı ve klasörler.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Tema (Dijital Sanatlar), Paint araçları, bayrak çizimi, öğretmenler günü kartı ve klasörler. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Büyük Final Soruları: Kendini Sına!' bölümünde vurgulanan <strong>Soru 1</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bir hareketi 10 kere tekrar ettirmek için hangi bl... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Soru 1 asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Yıl Sonu Bilgi Şöleni''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Takım Masalarına Geç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sınav sadece not almak içindir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Değerlendirmeler ne kadar çok şey öğrendiğimizi görüp kendimizle gurur duymamız için bir bayramdır!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bütün Soruları İncele'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Acele etmeyin; soruyu tam anlayana kadar dikkatle okuyun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bütün Soruları İncele prensibi, Acele etmeyin; soruyu tam anlayana kadar dikkatle okuyun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Tüm Yılın Bilişim ve Kodlama Becerilerini Ölçme, Takım Ruhu ile Problem Çözme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Büyük Başarı: Yılın bütün kazanımlarını eksiksiz tamamladık.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Büyük Başarı' doğrultusunda Yılın bütün kazanımlarını eksiksiz tamamladık. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz '2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilgi Yarışması' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "40": [
    {
      "question": "Bir bilişim projesini sınıftaki arkadaşlarımıza sunarken aşağıdaki davranışlardan hangisi EN DOĞRUDUR?",
      "options": [
        {
          "text": "Sırtımızı sınıfa dönüp fısıldayarak konuşmak",
          "isCorrect": false
        },
        {
          "text": "Güleryüzle arkadaşlarımıza bakıp projemizi neşeyle anlatmak",
          "isCorrect": true
        },
        {
          "text": "Utanıp hiçbir şey söylemeden kaçmak",
          "isCorrect": false
        },
        {
          "text": "Başka bir arkadaşımızın projesini kendimizinmiş gibi göstermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kendi emeğimizle yaptığımız projeyi güler yüzle ve özgüvenle anlatmak gerçek bir bilişim lideri davranışıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dijital Portfolyo Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Yıl boyu ürettiğimiz en değerli dijital eserlerin vitrini.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dijital Portfolyo Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Minik Yazılımcının Sahne Zamanı: Sunum Sanatı' kapsamında ele alınan <strong>1. Selamlama ve Tanıtım</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) 'Merhaba öğretmenim ve arkadaşlarım, benim adım...' diyerek söze başlarız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Selamlama ve Tanıtım, bilişim sistemlerinde 'Merhaba öğretmenim ve arkadaşlarım, benim adım...' diyerek ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Projenin Amacı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Bugün size ScratchJr'da kodladığım dans eden kediyi ve labirent oyunumu göstereceğim' deriz.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Projenin Amacı, 'Bugün size ScratchJr'da kodladığım dans eden kediyi ve labirent oyunumu göstereceğim' deriz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Dijital Portfolyo Çantası' bölümünde vurgulanan <strong>Türk Bayrağı Tasarımı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 29 Ekim Cumhuriyet Bayramı'nda çizdiğimiz şanlı ba... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Türk Bayrağı Tasarımı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Sahne Sırası Bende!''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Projeyi Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sadece kusursuz ve en uzun oyunlar sunulmaya değerdir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Sevgiyle, emekle ve dürüstçe yapılmış her küçük proje alkışı ve sunumu sonuna kadar hak eder!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Gülümsemeyi Unutma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Güler yüzlü bir sunum herkesin seni keyifle dinlemesini sağlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Gülümsemeyi Unutma prensibi, Güler yüzlü bir sunum herkesin seni keyifle dinlemesini sağlar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dijital Portfolyosunu Düzenleme, Yıl Boyunca Ürettiği Eserleri Topluluk Önünde Sunabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Dijital Portfolyo: Emeklerimizin ve hayallerimizin sergisidir.",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Dijital Portfolyo' doğrultusunda Emeklerimizin ve hayallerimizin sergisidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Dijital Portfolyo: Yıl Boyu Yaptığım Projeleri Sunma' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "41": [
    {
      "question": "Bu yıl bilişim ve kodlama dersinde öğrendiğimiz en değerli kural aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "Bütün gün bilgisayar başında aralıksız oyun oynamalıyız",
          "isCorrect": false
        },
        {
          "text": "Teknolojiyi bilinçli, güvenli ve insanlığa faydalı şeyler üretmek için kullanmalıyız",
          "isCorrect": true
        },
        {
          "text": "Şifrelerimizi bütün yabancılara dağıtmalıyız",
          "isCorrect": false
        },
        {
          "text": "Kabloları çekiştirip bilgisayarı fişten çekmeliyiz",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Tebrikler Doğru Cevap: B!</strong> Teknolojinin efendisi olmak; onu dengeli, güvenli ve insanlığa değer katan güzellikler üretmek için kullanmaktır!",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Şenlik Günü' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sınıf içi kodlama oyunları, müzik ve kutlama.",
          "isCorrect": true
        },
        {
          "text": "C) Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
          "isCorrect": false
        },
        {
          "text": "D) Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Şenlik Günü' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Tebrikler! 2. Sınıf Bilişim Yıldızları Mezun Oldu!' kapsamında ele alınan <strong>Artık Biliyorsunuz:</strong> kavramının en doğru açıklaması hangisidir?",
      "options": [
        {
          "text": "A) Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
          "isCorrect": false
        },
        {
          "text": "B) Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
          "isCorrect": false
        },
        {
          "text": "C) Bilgisayar parçalarını, doğru oturmayı, siber güvenliği ve güçlü şifreleri.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Artık Biliyorsunuz:, bilişim sistemlerinde Bilgisayar parçalarını, doğru oturmayı, siber güvenliği ve g... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Artık Yapabiliyorsunuz:</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kendi bayrağınızı çizmeyi, klasör açmayı ve iki elle hızlı yazmayı.",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
          "isCorrect": false
        },
        {
          "text": "C) Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
          "isCorrect": false
        },
        {
          "text": "D) Ekranın parlaklığını kapatıp çalışmayı durdurur.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Artık Yapabiliyorsunuz:, Kendi bayrağınızı çizmeyi, klasör açmayı ve iki elle hızlı yazmayı. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yaz Tatili İçin Altın Bilişim Tavsiyeleri' bölümünde vurgulanan <strong>Deniz ve Güneş</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yüzün, koşun, kumdan kaleler yapın ve bol bol D vi... amacına hizmet eder.",
          "isCorrect": false
        },
        {
          "text": "C) Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
          "isCorrect": false
        },
        {
          "text": "D) Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Deniz ve Güneş asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Bilişim Şenliği ve Sertifika Töreni''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Şenlik Oyununu Oyna' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
          "isCorrect": true
        },
        {
          "text": "C) Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
          "isCorrect": false
        },
        {
          "text": "D) Ekranı fareyle çizerek fiziksel olarak hasar vermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"2. sınıf bittiğinde bilişimle işimiz biter.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilişim ve teknoloji hayatımızın her anında bizimle; bu sadece başlangıçtı, yolculuk ömür boyu sürecek!",
          "isCorrect": true
        },
        {
          "text": "B) Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
          "isCorrect": false
        },
        {
          "text": "D) Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Merakını Asla Kaybetme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
      "options": [
        {
          "text": "A) Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
          "isCorrect": false
        },
        {
          "text": "B) Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
          "isCorrect": false
        },
        {
          "text": "C) Bilgisayarların nasıl çalıştığını sormaktan ve araştırmaktan asla vazgeçme.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Merakını Asla Kaybetme prensibi, Bilgisayarların nasıl çalıştığını sormaktan ve araştırmaktan asla vazgeçme. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yıllık Bilişim Sürecini Başarıyla Tamamlama, Yaz Tatili İçin Bilinçli Teknoloji Rehberi Edinme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Mezuniyet: 2. Sınıf Bilişim ve Kodlama yolculuğunu başarıyla tamamladık!",
          "isCorrect": true
        },
        {
          "text": "C) Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
          "isCorrect": false
        },
        {
          "text": "D) Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Mezuniyet' doğrultusunda 2. Sınıf Bilişim ve Kodlama yolculuğunu başarıyla tamamladık! olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>Kareli bir labirentte bulunan sevimli robotumuz 'Yıl Sonu Bilişim Şenliği: Geleceğin Yazılımcıları' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>1. Adım: [3 Kutu Sağa İlerle]<br>2. Adım: [2 Kutu Yukarı Çık]<br>3. Adım: [1 Kutu Sola Dön ve İlerle]<br>4. Adım: [2 Kutu Aşağı İn]<br>Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?",
      "options": [
        {
          "text": "A) Başlangıç noktasının 2 kutu sağında",
          "isCorrect": true
        },
        {
          "text": "B) Başlangıç noktasının 3 kutu yukarısında",
          "isCorrect": false
        },
        {
          "text": "C) Tam olarak başlangıç noktasının üzerinde",
          "isCorrect": false
        },
        {
          "text": "D) Başlangıç noktasının 1 kutu solunda",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!",
      "difficulty": "Zor",
      "isHard": true
    }
  ]
};

if (typeof window !== 'undefined') {
  window.WEEKLY_TESTS = WEEKLY_TESTS;
}
if (typeof globalThis !== 'undefined') {
  globalThis.WEEKLY_TESTS = WEEKLY_TESTS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WEEKLY_TESTS;
}
