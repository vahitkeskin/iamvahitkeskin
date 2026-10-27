/**
 * MEB 4. Sınıf Bilişim Teknolojileri ve Yazılım
 * Haftalık 10 Soruluk Konu Değerlendirme Testleri (Türkiye Yüzyılı Maarif Modeli 2026-2027)
 * Öğretmen: Vahit Keskin
 * 41 Hafta x 10 Soru = 410 Soru
 * Not: 10. Sorular %100 konu uyumlu, derin analiz ve üst düzey düşünme gerektiren zor sorulardır.
 */

const WEEKLY_TESTS = {
  "1": [
    {
      "question": "Aşağıdakilerden hangisi taşınabilir, ekranı katlanabilen ve pille çalışan bir bilgisayar türüdür?",
      "options": [
        {
          "text": "Masaüstü Bilgisayar (Kasa)",
          "isCorrect": false
        },
        {
          "text": "Dizüstü Bilgisayar (Laptop)",
          "isCorrect": true
        },
        {
          "text": "Televizyon Ekranı",
          "isCorrect": false
        },
        {
          "text": "Fotokopi Makinesi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Dizüstü (Laptop) bilgisayarlar ekran, klavye ve pili bir arada barındırarak kolayca taşınabilir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilişim Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgi ve iletişim kelimelerinin birleşimiyle doğan teknoloji dünyası.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilişim Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Cihazlar Hayatımızı Nasıl Değiştirdi?' kapsamında ele alınan <strong>Hızlı İletişim</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Dünyanın öbür ucundaki akrabalarımızla görüntülü konuşabiliyoruz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Hızlı İletişim, bilişim sistemlerinde Dünyanın öbür ucundaki akrabalarımızla görüntülü konuşabiliy... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Eğlenceli Öğrenme</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İnteraktif haritalar, uzay simülasyonları ve eğitici oyunlarla öğreniyoruz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Eğlenceli Öğrenme, İnteraktif haritalar, uzay simülasyonları ve eğitici oyunlarla öğreniyoruz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Farklı Türde Bilgisayarlar' bölümünde vurgulanan <strong>Avantajı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Geniş ekran, güçlü işlemci ve uzun süreli dayanıkl... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Avantajı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Benim Süper Akıllı Cihaz Tasarımım'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Sorunu Keşfet' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilgisayarlar kendi kendine her şeyi düşünebilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilgisayarlar sadece insanların yazdığı yazılımları ve komutları çalıştırır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Yiyecek ve İçecek Yasak'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Klavye ve cihazların üzerine sıvı dökülmemesi için sınıfa su/içecek getirilmez.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Yiyecek ve İçecek Yasak prensibi, Klavye ve cihazların üzerine sıvı dökülmemesi için sınıfa su/içecek getirilmez. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Teknolojiyi Tanıma & Amaçlı Kullanma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Bilişim: Hayatımızın her alanında işlerimizi kolaylaştıran teknolojiler bütünüdür.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Bilişim' doğrultusunda Hayatımızın her alanında işlerimizi kolaylaştıran teknolojiler bütünüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Dijital Teknolojiyle Tanışıyorum' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "2": [
    {
      "question": "Bilgisayara sesimizi kaydetmek ve mikrofondan konuşmak istediğimizde hangi tür donanım kullanmış oluruz?",
      "options": [
        {
          "text": "Çıkış Birimi",
          "isCorrect": false
        },
        {
          "text": "Giriş Birimi",
          "isCorrect": true
        },
        {
          "text": "Yazıcı",
          "isCorrect": false
        },
        {
          "text": "Hoparlör",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Mikrofon dışarıdaki ses dalgalarını bilgisayarın içine aktardığı için bir GİRİŞ birimidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Donanım Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgisayarın dokunabildiğimiz, gözle görebildiğimiz tüm fiziksel parçaları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Donanım Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Giriş ve Çıkış Birimleri Arasındaki Fark' kapsamında ele alınan <strong>Giriş (Input)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Klavye ile harf yazmak, fare ile tıklamak, mikrofonla şarkı söylemek.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Giriş (Input), bilişim sistemlerinde Klavye ile harf yazmak, fare ile tıklamak, mikrofonla şarkı ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>İşleme (CPU)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İşlemci gelen komutları anlar, hesaplar ve sonuca dönüştürür.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> İşleme (CPU), İşlemci gelen komutları anlar, hesaplar ve sonuca dönüştürür. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Donanımları Yakından Tanıyalım' bölümünde vurgulanan <strong>Klavye</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde F ve Q klavye türleri vardır; Türkçe için F klavye... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Klavye asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Donanım Sepeti Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Birimleri Ayır' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Ekran kapandığında bilgisayarın içindeki bütün bilgiler silinir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır, bilgiler sabit diskte (SSD) güvenle saklanır; ekran sadece göstergedir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Ekranı Elle Silmeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Monitör ekranına parmakla sertçe bastırılmaz; özel mikrofiber bezle silinir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Ekranı Elle Silmeyin prensibi, Monitör ekranına parmakla sertçe bastırılmaz; özel mikrofiber bezle silinir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Donanım Birimlerini Sınıflandırma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Donanım: Bilgisayarın elle tutulup gözle görülebilen somut parçalarıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Donanım' doğrultusunda Bilgisayarın elle tutulup gözle görülebilen somut parçalarıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Bilgisayarın Organları: Donanım Dünyası' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "3": [
    {
      "question": "Ülkemizde TÜBİTAK tarafından geliştirilen, akıllı tahtalarımızda da kullanılan milli işletim sistemimizin adı nedir?",
      "options": [
        {
          "text": "PARDUS",
          "isCorrect": true
        },
        {
          "text": "Paint",
          "isCorrect": false
        },
        {
          "text": "Hesap Makinesi",
          "isCorrect": false
        },
        {
          "text": "Klavye",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Aferin, Doğru Cevap: A!</strong> Anadolu Parsı'ndan adını alan PARDUS, ülkemizin gururu olan milli işletim sistemimizdir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Yazılım Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanıma ne yapması gerektiğini söyleyen kodlar, komutlar ve programlar.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Yazılım Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yazılım Olmadan Donanım Bir Hiçtir!' kapsamında ele alınan <strong>Sistem Yazılımları</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) İşletim sistemleri (Pardus, Windows, Android, iOS).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sistem Yazılımları, bilişim sistemlerinde İşletim sistemleri (Pardus, Windows, Android, iOS).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Uygulama Yazılımları</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Paint (resim çizme), Word (yazı yazma), Scratch (kodlama).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Uygulama Yazılımları, Paint (resim çizme), Word (yazı yazma), Scratch (kodlama). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Milli İşletim Sistemimiz: PARDUS' bölümünde vurgulanan <strong>Güvenli</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Virüslere karşı son derece dayanıklıdır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Güvenli asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahtada Pardus'u Keşfediyoruz'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Pardus Logosu' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılıma dokunabiliriz çünkü o da bir alettir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yazılım elle tutulamaz, sadece ekranda görünür ve çalışır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Bilinmeyen Sitelerden İndirmeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) İnternette 'Ücretsiz indir' yazan tuzak reklamlara asla tıklanmaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinmeyen Sitelerden İndirmeyin prensibi, İnternette 'Ücretsiz indir' yazan tuzak reklamlara asla tıklanmaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yazılım Türlerini ve İşletim Sistemini Anlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Yazılım: Bilgisayarın donanımlarını çalıştıran akıllı programlardır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Yazılım' doğrultusunda Bilgisayarın donanımlarını çalıştıran akıllı programlardır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Yazılım Ne İşe Yarar? İşletim Sistemleri & PARDUS' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "4": [
    {
      "question": "Aşağıdaki dosyalardan hangisi bir 'RESİM / FOTOĞRAF' dosyasıdır?",
      "options": [
        {
          "text": "istiklal_marsi.mp3",
          "isCorrect": false
        },
        {
          "text": "okul_bahcesi.jpg",
          "isCorrect": true
        },
        {
          "text": "matematik_notlari.txt",
          "isCorrect": false
        },
        {
          "text": "cizgi_film.mp4",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '.jpg' ve '.png' uzantıları resim ve görsel dosyalarını temsil eder.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dosya Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgisayarda sakladığımız her yazı, resim, müzik veya video bir dosyadır.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dosya Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dosyaların Soyadları: Dosya Uzantıları' kapsamında ele alınan <strong>.txt / .docx</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Yazı ve metin dosyaları (Hikâyeler, ödevler).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> .txt / .docx, bilişim sistemlerinde Yazı ve metin dosyaları (Hikâyeler, ödevler).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>.jpg / .png</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Resim ve fotoğraf dosyaları (Çizimlerimiz).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> .jpg / .png, Resim ve fotoğraf dosyaları (Çizimlerimiz). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Klasörler: Dijital Düzen Dolabımız' bölümünde vurgulanan <strong>Kural</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Klasör adlarında Türkçe karakterleri dikkatli kull... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kural asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Masaüstü Temizlik Operasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Klasör Oluştur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir klasörün içine asla başka klasör konulamaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Klasörlerin içine istediğiniz kadar alt klasör koyabilirsiniz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Çöp Kutusunu Hemen Boşaltmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yanlışlıkla sildiğiniz bir dosya 'Geri Dönüşüm Kutusu'ndan kurtarılabilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Çöp Kutusunu Hemen Boşaltmayın prensibi, Yanlışlıkla sildiğiniz bir dosya 'Geri Dönüşüm Kutusu'ndan kurtarılabilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dosya ve Klasör Hiyerarşisini Yönetme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Dosyalar: Bilgisayardaki bilgi parçacıklarıdır; uzantıları dosya türünü gösterir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Dosyalar' doğrultusunda Bilgisayardaki bilgi parçacıklarıdır; uzantıları dosya türünü gösterir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Dosya ve Klasör Düzeni: Dijital Çantamı Topluyorum' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "5": [
    {
      "question": "Yazı yazarken kelimeler arasında boşluk bırakmak için klavyenin en uzun tuşu olan hangi tuşa basarız?",
      "options": [
        {
          "text": "Enter",
          "isCorrect": false
        },
        {
          "text": "Space (Boşluk)",
          "isCorrect": true
        },
        {
          "text": "Esc (Çıkış)",
          "isCorrect": false
        },
        {
          "text": "Shift",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Klavyenin en altındaki uzun tuş Space (Boşluk) tuşudur ve kelimeler arasına boşluk koyar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Klavyenin Gizli Tuşları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Enter (Giriş/Onay), Backspace (Geriye Sil), Delete (İleriye Sil), Caps Lock (Büyük Harf).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Klavyenin Gizli Tuşları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Önemli Klavye Tuşları Ne İşe Yarar?' kapsamında ele alınan <strong>Enter (Giriş)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Alt satıra geçmeyi sağlar veya seçili komutu onaylar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Enter (Giriş), bilişim sistemlerinde Alt satıra geçmeyi sağlar veya seçili komutu onaylar.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Space (Boşluk)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kelimeler arasında bir karakterlik boşluk bırakır; en uzun tuştur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Space (Boşluk), Kelimeler arasında bir karakterlik boşluk bırakır; en uzun tuştur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Fare (Mouse) Kontrol Sanatı' bölümünde vurgulanan <strong>İpucu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Çift tıklarken fareyi hareket ettirmeden hızlıca i... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> İpucu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Hızlı Parmaklar Klavye Yarışı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Duruşunu Ayarla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Ne kadar sert basarsak harf o kadar hızlı yazılır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilgisayar nazik dokunuşları da anında algılar, sert basmak klavyeyi bozar.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tuşlara Sert Basmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Tuşlar hassastır, hafif dokunuşlarla yazmak parmakları korur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tuşlara Sert Basmayın prensibi, Tuşlar hassastır, hafif dokunuşlarla yazmak parmakları korur. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Klavye ve Fareyi Etkin ve Hızlı Kullanma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Klavye Tuşları: Enter alt satıra geçer, Space boşluk bırakır, Backspace geriye siler.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Klavye Tuşları' doğrultusunda Enter alt satıra geçer, Space boşluk bırakır, Backspace geriye siler. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Klavye ve Fare Sihirbazı: Hızlı & Doğru Yazma' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "6": [
    {
      "question": "Bilgisayar kullanırken gözlerimizi dinlendirmek için uyguladığımız '20-20-20 kuralı' ne anlama gelir?",
      "options": [
        {
          "text": "20 saat aralıksız oyun oynamak",
          "isCorrect": false
        },
        {
          "text": "Her 20 dakikada bir, 20 saniye boyunca uzağa bakmak",
          "isCorrect": true
        },
        {
          "text": "20 kere ekrana dokunmak",
          "isCorrect": false
        },
        {
          "text": "20 dakika sonra bilgisayarı çöpe atmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 20 dakikada bir en az 20 saniye uzağa bakarak göz kaslarımızı dinlendiririz.",
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
          "text": "B) Çalışma ortamımızın ve eşyalarımızın bedenimize uygun tasarlanması bilimi.",
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
      "question": "'Bilgisayar Başında Doğru Oturuş Kuralları' kapsamında ele alınan <strong>Sırt Desteği</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sandalyenin sırtlığına yaslanın; asla öne doğru eğilmeyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sırt Desteği, bilişim sistemlerinde Sandalyenin sırtlığına yaslanın; asla öne doğru eğilmeyin.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Ekran Yüksekliği</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Ekranın üst kenarı tam göz hizanızda olmalıdır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Ekran Yüksekliği, Ekranın üst kenarı tam göz hizanızda olmalıdır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Gözlerimizi Nasıl Koruruz?' bölümünde vurgulanan <strong>Aydınlatma</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Oda loş olmamalı, ışık doğrudan ekrana yansıyıp pa... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Aydınlatma asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sınıfta Ayna Heykel Ergonomi Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Duruş Denetimi' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Karanlık odada parıl parıl yanan ekrana bakmak çok havalıdır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Karanlıkta parlak ekrana bakmak göz sağlığına ciddi zarar verir.",
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
          "text": "C) Yemek yerken telefon veya tablet izlenmez; ailece sohbet edilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Yemekte Ekran Yok prensibi, Yemek yerken telefon veya tablet izlenmez; ailece sohbet edilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sağlık ve Ergonomi Kurallarını Yaşama Geçirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 90° Kuralı: Dizler ve dirsekler 90 derece, sırt sandalyeye tam yaslanmalıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '90° Kuralı' doğrultusunda Dizler ve dirsekler 90 derece, sırt sandalyeye tam yaslanmalıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Sağlıklı ve Ergonomik Bilgisayar Kullanımı' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "7": [
    {
      "question": "Çizim programında bir hata yaptığımızda son yaptığımız işlemi hemen iptal edip geri almak için hangi klavye kısayolu kullanılır?",
      "options": [
        {
          "text": "Ctrl + Z (Geri Al)",
          "isCorrect": true
        },
        {
          "text": "Delete (Sil)",
          "isCorrect": false
        },
        {
          "text": "Esc (Çıkış)",
          "isCorrect": false
        },
        {
          "text": "Space (Boşluk)",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Ctrl + Z kısayolu dijital dünyanın en büyük kurtarıcısıdır; yapılan son işlemi geri alır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '29 Ekim Coşkusu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Cumhuriyetin ilanı ve milletimizin bağımsızlık meşalesi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '29 Ekim Coşkusu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Ressamın Araç Kutusu' kapsamında ele alınan <strong>Fırça ve Kalem</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Farklı kalınlıklarda serbest çizgi çizmemizi sağlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Fırça ve Kalem, bilişim sistemlerinde Farklı kalınlıklarda serbest çizgi çizmemizi sağlar.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Geometrik Şekiller</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kusursuz daire, dikdörtgen ve yıldız çizmeyi kolaylaştırır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Geometrik Şekiller, Kusursuz daire, dikdörtgen ve yıldız çizmeyi kolaylaştırır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Cumhuriyet Afişi Tasarım Adımları' bölümünde vurgulanan <strong>Renk Seçimi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Milli bayrağımızın rengi derin ve asildir.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Renk Seçimi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Cumhuriyet Afişi Tasarım Atölyesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Programı Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilgisayarda resim çizmek için ressam olmak şarttır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Geometrik şekiller ve dijital araçlarla herkes harika afişler yapabilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sık Sık Kaydedin (Ctrl + S)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Elektrik kesilirse emeğiniz kaybolmasın diye sık sık kaydedin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sık Sık Kaydedin (Ctrl + S) prensibi, Elektrik kesilirse emeğiniz kaybolmasın diye sık sık kaydedin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Milli Değerleri Dijital Tasarımla İfade Etme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 29 Ekim: Milletimizin en büyük bayramıdır; bilişimle onu geleceğe taşırız.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '29 Ekim' doğrultusunda Milletimizin en büyük bayramıdır; bilişimle onu geleceğe taşırız. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'29 Ekim Cumhuriyet Bayramı Özel: Dijital Afiş Tasarımı' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "8": [
    {
      "question": "Aşağıdakilerden hangisi bir 'ÇIKIŞ BİRİMİ'dir ve bilgisayardaki yazıları kâğıda dökmeye yarar?",
      "options": [
        {
          "text": "Tarayıcı",
          "isCorrect": false
        },
        {
          "text": "Klavye",
          "isCorrect": false
        },
        {
          "text": "Yazıcı (Printer)",
          "isCorrect": true
        },
        {
          "text": "Fare",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Yazıcı (Printer), bilgisayardaki verileri ve çizimleri kâğıda basan bir ÇIKIŞ birimidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Donanım Özeti' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Giriş birimleri, çıkış birimleri ve kasa içi bileşenlerin tekrarı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Donanım Özeti' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Büyük Sınav Tekrarı: 4 Ana Başlık' kapsamında ele alınan <strong>Donanım (Fiziksel)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Dokunabildiğimiz her şey donanımdır. Klavye (Giriş), Ekran (Çıkış).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Donanım (Fiziksel), bilişim sistemlerinde Dokunabildiğimiz her şey donanımdır. Klavye (Giriş), Ekran (... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Yazılım (Ruh)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Donanıma can veren programlardır. En önemlisi PARDUS işletim sistemidir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Yazılım (Ruh), Donanıma can veren programlardır. En önemlisi PARDUS işletim sistemidir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sınavda Çıkabilecek Örnek Sorular' bölümünde vurgulanan <strong>Taktik</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Aygıtın ses/görüntü verdiğini mi yoksa aldığını mı... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Taktik asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Dijital Bilgi Çarkı Yarışması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Gruplara Ayrılın' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilişim sınavı sadece ezberle geçilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilişim sınavı kavramları anlayarak ve mantık kurarak çok daha kolay geçilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Soruyu Sonuna Kadar Oku'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 'Hangisi DEĞİLDİR?' gibi olumsuz köklere özellikle dikkat edin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Soruyu Sonuna Kadar Oku prensibi, 'Hangisi DEĞİLDİR?' gibi olumsuz köklere özellikle dikkat edin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kavramları Hatırlama, Pekiştirme ve Sınava Hazırlık'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kavramları Hatırla: Donanım somut aletler, yazılım akıllı kodlardır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kavramları Hatırla' doğrultusunda Donanım somut aletler, yazılım akıllı kodlardır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'1. Dönem 1. Yazılı Sınav Tekrarı & Dijital Dedektif' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "9": [
    {
      "question": "Aşağıdaki şifrelerden hangisi 'EN GÜÇLÜ VE GÜVENLİ' şifre örneğidir?",
      "options": [
        {
          "text": "123456",
          "isCorrect": false
        },
        {
          "text": "fenerbahce",
          "isCorrect": false
        },
        {
          "text": "Ahmet2015",
          "isCorrect": false
        },
        {
          "text": "Kedi*48!Mavi",
          "isCorrect": true
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: D!</strong> 'Kedi*48!Mavi' şifresi büyük harf, küçük harf, rakam ve sembol içerdiği için son derece güçlüdür.",
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
          "text": "B) Adımız, T.C. kimlik numaramız, ev adresimiz, okul adımız ve telefonumuz.",
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
      "question": "'Kişisel Bilgilerimiz Bize Özeldir!' kapsamında ele alınan <strong>Ev Adresi ve Okul Adı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Hangi okulda okuduğunuzu ve nerede oturduğunuzu asla yazmayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Ev Adresi ve Okul Adı, bilişim sistemlerinde Hangi okulda okuduğunuzu ve nerede oturduğunuzu asla yazmayı... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>T.C. Kimlik Numarası</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Devletin sadece size verdiği çok gizli bir numaradır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> T.C. Kimlik Numarası, Devletin sadece size verdiği çok gizli bir numaradır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Süper Güçlü Şifre Nasıl Yapılır?' bölümünde vurgulanan <strong>Tehlike</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Korsanlar bu şifreleri hemen tahmin edip hesabınız... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tehlike asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Güçlü Şifre Oluşturma Fabrikası'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Sevdiğin Bir Kelime Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İnternette tanıştığımız herkes gerçekten söylediği yaştadır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kötü niyetli yetişkinler internette kendilerini çocuk gibi tanıtabilir!",
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
      "question": "Günün Altın Kuralı olan <strong>'Şüphelenirsen Ebeveynine Söyle'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sizi rahatsız eden, hediye vaat eden veya korkutan bir mesaj görürseniz hemen ailenize gösterin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Şüphelenirsen Ebeveynine Söyle prensibi, Sizi rahatsız eden, hediye vaat eden veya korkutan bir mesaj görürseniz hemen ailenize gösterin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Siber Güvenlik Bilinci & Şifre Koruması'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kişisel Bilgiler: Ad, adres, telefon ve T.C. kimlik internette asla paylaşılmaz.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kişisel Bilgiler' doğrultusunda Ad, adres, telefon ve T.C. kimlik internette asla paylaşılmaz. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Güvenli İnternet: Şifremi Kimseye Söylemem!' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "10": [
    {
      "question": "Bir robotu kareli labirentte 2 kare yukarı ve 3 kare sağa götürmek için hangi algoritma sırası uygulanmalıdır?",
      "options": [
        {
          "text": "⬇️⬇️ ⬅️⬅️⬅️",
          "isCorrect": false
        },
        {
          "text": "⬆️⬆️ ➡️➡️➡️",
          "isCorrect": true
        },
        {
          "text": "➡️➡️ ⬆️⬆️⬆️",
          "isCorrect": false
        },
        {
          "text": "⬅️ ⬆️ ⬇️",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> İki kare yukarı (⬆️⬆️) ve üç kare sağa (➡️➡️➡️) adımları robotu doğru hedefe ulaştırır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Ara Tatil Dinlenmesi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Derslere kısa bir mola verip zihnimizi tazelemek.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Ara Tatil Dinlenmesi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Ekransız Kodlama (Unplugged) Nedir?' kapsamında ele alınan <strong>⬆️ Yukarı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Karakteri bir kare yukarı ilerlet.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> ⬆️ Yukarı, bilişim sistemlerinde Karakteri bir kare yukarı ilerlet.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>➡️ Sağa</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Karakteri bir kare sağa ilerlet.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> ➡️ Sağa, Karakteri bir kare sağa ilerlet. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Robot Arkadaşım Oyunu' bölümünde vurgulanan <strong>Kural</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Eksik veya hatalı komut verirsen robot duvara tosl... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kural asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kareli Kâğıtta Labirent Algoritması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Labirenti Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kodlama sadece bilgisayar başında öğrenilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Algoritmik düşünme satrançla, yemek tarifiyle ve kutu oyunlarıyla da gelişir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Doğada Vakit Geçirin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Güneşli havalarda parkta koşun, top oynayın ve temiz hava alın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Doğada Vakit Geçirin prensibi, Güneşli havalarda parkta koşun, top oynayın ve temiz hava alın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilişimsel Düşünme & Problem Çözme Becerisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Ekransız Kodlama: Düşünme, sıralama ve mantık yürütme becerisidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Ekransız Kodlama' doğrultusunda Düşünme, sıralama ve mantık yürütme becerisidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'1. Dönem Ara Tatil: Eğlenceli Bilişim ve Kodlama Kulübü' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "11": [
    {
      "question": "İnternette bir arkadaşımızın fotoğrafını kendi profilimizde paylaşmadan önce ne yapmalıyız?",
      "options": [
        {
          "text": "Hemen habersiz paylaşmalıyız",
          "isCorrect": false
        },
        {
          "text": "Mutlaka arkadaşımızdan ve ailesinden izin istemeliyiz",
          "isCorrect": true
        },
        {
          "text": "Fotoğrafı karalayıp paylaşmalıyız",
          "isCorrect": false
        },
        {
          "text": "Başka bir şehre taşınmalıyız",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Başkalarının fotoğraflarını paylaşmadan önce mutlaka açıkça izin istemek temel dijital nezaket kuralıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dijital Ayak İzi Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnternette tıkladığımız, aradığımız, yazdığımız ve paylaştığımız her şeyin kaydı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dijital Ayak İzi Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Ayak İzimizi Nasıl Temiz Tutarız?' kapsamında ele alınan <strong>Kibar Olun</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Paylaşımlarınızda saygılı, yapıcı ve güzel Türkçe kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kibar Olun, bilişim sistemlerinde Paylaşımlarınızda saygılı, yapıcı ve güzel Türkçe kullanın.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>İzin İsteyin</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bir arkadaşınızın resmini paylaşmadan önce mutlaka 'Paylaşabilir miyim?' diye sorun.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> İzin İsteyin, Bir arkadaşınızın resmini paylaşmadan önce mutlaka 'Paylaşabilir miyim?' diye sorun. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'24 Kasım Öğretmenler Günü Dijital Kartı' bölümünde vurgulanan <strong>Mesaj</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 'Canım Öğretmenim, bize dijital dünyanın kapıların... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Mesaj asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Öğretmenime Dijital Teşekkür Kartı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kart Çerçevesi Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Hikâye 24 saat sonra silindiğinde internetten tamamen yok olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Başka kullanıcılar ekran görüntüsü almış veya kaydedilmiş olabilir; izi kalır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Düşünmeden Paylaşma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 'Bunu öğretmenim veya annem görse ne hisseder?' diye kendinize sorun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Düşünmeden Paylaşma prensibi, 'Bunu öğretmenim veya annem görse ne hisseder?' diye kendinize sorun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dijital Kimlik & İtibar Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Dijital Ayak İzi: İnternette arkamızda bıraktığımız kalıcı dijital izlerdir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Dijital Ayak İzi' doğrultusunda İnternette arkamızda bıraktığımız kalıcı dijital izlerdir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Dijital Ayak İzi: İnternette Bıraktığımız İzler' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "12": [
    {
      "question": "İnternet mesajlaşmasında bir cümlenin TAMAMEN BÜYÜK HARFLERLE yazılması dijital nezaket kurallarına göre ne anlama gelir?",
      "options": [
        {
          "text": "Karşıdaki kişiye saygı duymak",
          "isCorrect": false
        },
        {
          "text": "Çok mutlu olduğunu belirtmek",
          "isCorrect": false
        },
        {
          "text": "Karşıdaki kişiye bağırmak ve öfkelenmek",
          "isCorrect": true
        },
        {
          "text": "Pilin azaldığını göstermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Dijital iletişimde (Netiket) tüm harfleri büyük yazmak bağırmak ve saygısızlık yapmak anlamına gelir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Netiket (Siber Nezaket)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnternet ortamında uyulması gereken ahlaki ve görgü kuralları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Netiket (Siber Nezaket)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Siber Nezaket (Netiket) Kuralları' kapsamında ele alınan <strong>Büyük Harf Tuzağı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sürekli büyük harfle yazmak 'SANA BAĞIRIYORUM' demektir; normal yazın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Büyük Harf Tuzağı, bilişim sistemlerinde Sürekli büyük harfle yazmak 'SANA BAĞIRIYORUM' demektir; nor... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kaba ve Kırıcı Sözler</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Alay etmek, lakap takmak veya dışlamak asla kabul edilemez.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kaba ve Kırıcı Sözler, Alay etmek, lakap takmak veya dışlamak asla kabul edilemez. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Siber Zorbalıkla Mücadele Planı' bölümünde vurgulanan <strong>Sakin Kal</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Derin bir nefes al ve mesajı yanıtsız bırak.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sakin Kal asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Netiket Drama ve Canlandırma Atölyesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Senaryo 1: Grup Sohbeti' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İnternette kimse kim olduğumu bilmez, istediğim gibi konuşabilirim.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) İnternette her cihazın bir IP adresi vardır ve herkes kolayca tespit edilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'1. DUR:'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Hemen karşılık verme ve sakinliğini koru.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> 1. DUR: prensibi, Hemen karşılık verme ve sakinliğini koru. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Netiket Kurallarını Uygulama & Siber Zorbalığı Önleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Netiket: İnternetteki görgü kurallarıdır; saygı her şeyin başıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Netiket' doğrultusunda İnternetteki görgü kurallarıdır; saygı her şeyin başıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Siber Nezaket (Netiket) ve Siber Zorbalıktan Korunma' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "13": [
    {
      "question": "Aşağıdaki web sitesi uzantılarından hangisi Türkiye Cumhuriyeti resmi devlet kurumlarına aittir ve en güvenilir kaynaktır?",
      "options": [
        {
          "text": ".com",
          "isCorrect": false
        },
        {
          "text": ".gov.tr",
          "isCorrect": true
        },
        {
          "text": ".xyz",
          "isCorrect": false
        },
        {
          "text": ".net",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> '.gov.tr' uzantısı (Government Turkey) resmi devlet kurumlarının güvenilir adresidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilgi Kirliliği Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnternette dolaşan yanlış, eksik veya yanıltıcı haberler.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilgi Kirliliği Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Her Gördüğüne İnanma: Sahte Haberler' kapsamında ele alınan <strong>Abartılı Başlıklar</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'İnanılmaz Olay!', 'Bunu görenler şok oldu!' gibi tuzak başlıklar (tık tuzağı).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Abartılı Başlıklar, bilişim sistemlerinde 'İnanılmaz Olay!', 'Bunu görenler şok oldu!' gibi tuzak başl... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Yazar ve Tarih Yok</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Haberi kimin yazdığı ve hangi tarihte olduğu belli değilse güvenilmezdir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Yazar ve Tarih Yok, Haberi kimin yazdığı ve hangi tarihte olduğu belli değilse güvenilmezdir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Güvenilir Web Sitesi Uzantıları' bölümünde vurgulanan <strong>Özellik</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Resmi veriler ve müfredat burada yer alır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Özellik asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sahte Haberi Yakala Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Haberi İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İnternette birinci sırada çıkan arama sonucu her zaman en doğrusudur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bazen reklam veren siteler en üstte çıkabilir; kaynağa dikkat edilmelidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Anahtar Kelimeleri Seçin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 'Güneş sistemi gezegenleri nelerdir lütfen söyle' yerine 'Güneş sistemi gezegenleri' yazın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Anahtar Kelimeleri Seçin prensibi, 'Güneş sistemi gezegenleri nelerdir lütfen söyle' yerine 'Güneş sistemi gezegenleri' yazın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Eleştirel Düşünme & Bilgi Doğrulama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Bilgi Dedektifliği: Gördüğümüz her haberi sorgulamak ve doğrulamaktır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Bilgi Dedektifliği' doğrultusunda Gördüğümüz her haberi sorgulamak ve doğrulamaktır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Bilgi Dedektifliği: Doğru Bilgiye Ulaşma' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "14": [
    {
      "question": "Dijital ekrandaki görüntüleri oluşturan en küçük renkli noktalara (karelere) ne ad verilir?",
      "options": [
        {
          "text": "Klasör",
          "isCorrect": false
        },
        {
          "text": "Piksel",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Dijital dünyada resimler milyonlarca minik renk noktacığı olan 'Piksel'lerden meydana gelir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Piksel Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Dijital ekranlardaki resimleri oluşturan minicik renkli noktalar.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Piksel Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Piksel: Dijital Dünyanın Yapı Taşı' kapsamında ele alınan <strong>Çözünürlük</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Piksel sayısı ne kadar çoksa resim o kadar net ve kaliteli görünür.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Çözünürlük, bilişim sistemlerinde Piksel sayısı ne kadar çoksa resim o kadar net ve kaliteli g... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Bozulma (Pikselleşme)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Küçük bir resmi çok büyütürsek pikseller belirginleşir ve resim bulanıklaşır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Bozulma (Pikselleşme), Küçük bir resmi çok büyütürsek pikseller belirginleşir ve resim bulanıklaşır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Çizim Programının Sihirli Araçları' bölümünde vurgulanan <strong>Fayda</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Aynı mavi tonunu yeniden aramak zorunda kalmazsını... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Fayda asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sevimli Robot Maskotu Çiziyoruz'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Gövde ve Kafa' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilgisayardaki silgi gerçek silgi gibi kâğıdı yırtabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Dijital silgi sadece pikselleri temizler; sayfayı asla yıpratmaz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Shift Tuşunu Kullanın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Daire çizerken Shift tuşuna basılı tutarsanız kusursuz bir yuvarlak elde edersiniz!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Shift Tuşunu Kullanın prensibi, Daire çizerken Shift tuşuna basılı tutarsanız kusursuz bir yuvarlak elde edersiniz! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Görsel Tasarım & Dijital Sanat Becerisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Piksel: Görüntüyü oluşturan en küçük renkli yapı taşıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Piksel' doğrultusunda Görüntüyü oluşturan en küçük renkli yapı taşıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Dijital Ressam: Çizim ve Görsel Düzenleme' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "15": [
    {
      "question": "Kelime işlemci programında bir başlığı sayfanın tam ortasına getirmek için hangi hizalama düğmesi kullanılır?",
      "options": [
        {
          "text": "Sola Hizala",
          "isCorrect": false
        },
        {
          "text": "Ortala",
          "isCorrect": true
        },
        {
          "text": "Sağa Hizala",
          "isCorrect": false
        },
        {
          "text": "Yazıyı Sil",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Ortala' düğmesi başlıkları ve şiir dizelerini sayfanın tam merkezine hizalar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kelime İşlemci (Word/Writer) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Mektup, hikâye, ödev ve şiir yazıp biçimlendirdiğimiz yazılımlar.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kelime İşlemci (Word/Writer) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yazılarımızı Nasıl Güzelleştiririz?' kapsamında ele alınan <strong>K (Kalın / Bold)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Başlıkları ve önemli kelimeleri daha belirgin ve kalın yapar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> K (Kalın / Bold), bilişim sistemlerinde Başlıkları ve önemli kelimeleri daha belirgin ve kalın yapar... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>İ (İtalik / Eğik)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yazıyı hafifçe sağa yatırır; vurgulamalar için idealdir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> İ (İtalik / Eğik), Yazıyı hafifçe sağa yatırır; vurgulamalar için idealdir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hizalama ve Görsel Ekleme' bölümünde vurgulanan <strong>İki Yana Yasla</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kitap ve gazete gibi her iki kenarı da jilet gibi ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> İki Yana Yasla asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kendi Dijital Masalımı Yazıyorum'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Başlığı Yaz ve Ortala' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir kelimeyi silmek için bütün sayfayı silmek gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Sadece silmek istediğiniz kelimeyi fareyle seçip Delete tuşuna basmanız yeterlidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Önce Yaz, Sonra Biçimlendir'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yazarken sürekli renkle uğraşmak dikkatinizi dağıtır; önce metni bitirin, sonra süsleyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Önce Yaz, Sonra Biçimlendir prensibi, Yazarken sürekli renkle uğraşmak dikkatinizi dağıtır; önce metni bitirin, sonra süsleyin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Metin Düzenleme & İçerik Üretimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kelime İşlemci: Metinleri düzenli, süslü ve hatasız yazmamızı sağlayan programdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kelime İşlemci' doğrultusunda Metinleri düzenli, süslü ve hatasız yazmamızı sağlayan programdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Kelime İşlemciyle İlk Hikâyem: Metin Yazma' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "16": [
    {
      "question": "Bir sunum hazırlarken metinlerin salondaki herkes tarafından rahatça okunabilmesi için neye dikkat edilmelidir?",
      "options": [
        {
          "text": "Yazıları küçücük yapıp sayfayı doldurmaya",
          "isCorrect": false
        },
        {
          "text": "Koyu renk zemin üzerine açık renk ve büyük yazı tipi kullanmaya",
          "isCorrect": true
        },
        {
          "text": "Sarı zemin üzerine beyaz yazı yazmaya",
          "isCorrect": false
        },
        {
          "text": "Bütün slaytları kapkaranlık bırakmaya",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Zıt renkler (kontrast) ve büyük yazı tipi izleyicilerin yazıları çok uzaktan bile rahatça okumasını sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Sunum Programı Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Fikirlerimizi slayt adı verilen renkli dijital sayfalara döküp izleyicilere sunduğumuz araç.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Sunum Programı Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Harika Bir Slaytın Altın Kuralları' kapsamında ele alınan <strong>Az Yazı (6x6 Kuralı)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bir slaytta en fazla 6 satır ve her satırda en fazla 6 kelime olmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Az Yazı (6x6 Kuralı), bilişim sistemlerinde Bir slaytta en fazla 6 satır ve her satırda en fazla 6 kelim... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Büyük ve Kaliteli Görseller</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Anlattığınız konuyu özetleyen net ve renkli resimler seçin.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Büyük ve Kaliteli Görseller, Anlattığınız konuyu özetleyen net ve renkli resimler seçin. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Slayt Geçişleri ve Animasyonlar' bölümünde vurgulanan <strong>Öneri</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Tüm sunum boyunca aynı geçiş efektini kullanmak pr... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Öneri asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'3 Slaytlık 'Geleceğin Şehri' Sunumu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Slayt 1: Kapak' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Ne kadar çok animasyon koyarsak sunum o kadar başarılı olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Çok fazla animasyon dinleyicinin dikkatini dağıtır ve konuyu unutturur.",
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
      "question": "Günün Altın Kuralı olan <strong>'Slaytı Arkadan Okumayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Slayttaki yazıları kelime kelime ekrandan okumayın; izleyicilerin yüzüne bakın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Slaytı Arkadan Okumayın prensibi, Slayttaki yazıları kelime kelime ekrandan okumayın; izleyicilerin yüzüne bakın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Etkili Sunum Hazırlama & İletişim Becerisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Sunum Sanatı: Fikirleri görsel ve etkileyici şekilde anlatma becerisidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Sunum Sanatı' doğrultusunda Fikirleri görsel ve etkileyici şekilde anlatma becerisidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Dijital Sunum Sihirbazı: Slayt Hazırlama' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "17": [
    {
      "question": "Aşağıdaki eşleştirmelerden hangisi 'YANLIŞTIR'?",
      "options": [
        {
          "text": ".mp3 -> Müzik / Ses Dosyası",
          "isCorrect": false
        },
        {
          "text": ".jpg -> Resim / Fotoğraf Dosyası",
          "isCorrect": false
        },
        {
          "text": ".txt -> Video / Film Dosyası",
          "isCorrect": true
        },
        {
          "text": ".docx -> Kelime İşlemci Metin Belgesi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> '.txt' uzantısı düz metin (yazı) dosyasıdır; video dosyaları '.mp4' veya '.avi' uzantılıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Siber Güvenlik & Netiket' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Dijital ayak izi, güçlü şifre, siber zorbalık ve netiket ilkeleri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Siber Güvenlik & Netiket' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'2. Yazılı Sınavının Anahtar Kavramları' kapsamında ele alınan <strong>Dijital Ayak İzi</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) İnternette paylaştığımız her şey kalıcı bir iz bırakır; dikkatli olunmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Dijital Ayak İzi, bilişim sistemlerinde İnternette paylaştığımız her şey kalıcı bir iz bırakır; dikk... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>BÜYÜK HARFLER</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Mesajlaşırken sürekli büyük harf kullanmak bağırmak anlamına gelir (Netiket kuralı).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> BÜYÜK HARFLER, Mesajlaşırken sürekli büyük harf kullanmak bağırmak anlamına gelir (Netiket kuralı). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Soru Çözme Taktikleri' bölümünde vurgulanan <strong>Kontrol</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde En emin olduğunuz şıktan başlayarak eleme yapın.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kontrol asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bilişim Şampiyonlar Ligi Testi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Gruplar Hazır' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılı sınavda çok uzun yazan her zaman daha çok puan alır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Önemli olan doğru ve net kavramı yazmaktır; gereksiz uzatmak vakit kaybettirir.",
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
      "question": "Günün Altın Kuralı olan <strong>'İyi Uyuyun ve Kahvaltı Yapın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sınav sabahı zinde uyanmak beyin dalgalarınızı hızlandırır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> İyi Uyuyun ve Kahvaltı Yapın prensibi, Sınav sabahı zinde uyanmak beyin dalgalarınızı hızlandırır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dönemlik Bilişim Kazanımlarını Değerlendirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Büyük Tekrar: Dijital ayak izi, siber nezaket ve güvenli arama temel taşlarımızdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Büyük Tekrar' doğrultusunda Dijital ayak izi, siber nezaket ve güvenli arama temel taşlarımızdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'1. Dönem 2. Yazılı Sınav Tekrarı & Bilgi Yarışması' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "18": [
    {
      "question": "Aşağıdakilerden hangisi evlerimizde kullanılan ve odanın haritasını çıkararak temizlik yapan bir yapay zekâ / robot örneğidir?",
      "options": [
        {
          "text": "Mekanik Çalar Saat",
          "isCorrect": false
        },
        {
          "text": "Akıllı Robot Süpürge",
          "isCorrect": true
        },
        {
          "text": "Normal Masa Lambası",
          "isCorrect": false
        },
        {
          "text": "Tahta Cetvel",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Akıllı robot süpürgeler sensörleri ve yapay zekâ algoritmalarıyla odanın haritasını çıkararak temizlik yapar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Yapay Zekâ (YZ) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnsan gibi düşünebilen, resimleri tanıyabilen ve öğrenebilen akıllı bilgisayar programları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Yapay Zekâ (YZ) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yapay Zekâ Bilgisayardan Nasıl Farklıdır?' kapsamında ele alınan <strong>Veri ile Beslenir</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Ne kadar çok elma resmi görürse, kırmızı bir elmayı o kadar kolay tanır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Veri ile Beslenir, bilişim sistemlerinde Ne kadar çok elma resmi görürse, kırmızı bir elmayı o kadar ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sesimizi Tanır</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Siri veya akıllı asistanlar kelimelerimizi dijital sinyale çevirip anlamlandırır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sesimizi Tanır, Siri veya akıllı asistanlar kelimelerimizi dijital sinyale çevirip anlamlandırır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Çevremizdeki Yapay Zekâ Örnekleri' bölümünde vurgulanan <strong>Özellik</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Merdiven kenarını fark edip aşağı düşmez!... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Özellik asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Yapay Zekâya Resim Öğretiyoruz'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'İki Kategori Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yapay zekâ insan duygularına sahiptir ve üzülebilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yapay zekâda duygu ve kalp yoktur; sadece matematiksel hesaplamalar vardır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Her Cevabına Güvenmeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yapay zekâ bazen uydurma bilgiler verebilir (halüsinasyon); mutlaka kontrol edin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Her Cevabına Güvenmeyin prensibi, Yapay zekâ bazen uydurma bilgiler verebilir (halüsinasyon); mutlaka kontrol edin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yapay Zekâ Kavramını Tanıma & Örnekleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Yapay Zekâ: İnsan zekâsını taklit ederek öğrenen akıllı yazılımlardır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Yapay Zekâ' doğrultusunda İnsan zekâsını taklit ederek öğrenen akıllı yazılımlardır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Günlük Yaşamda Yapay Zekâ: Akıllı Asistanlar' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "19": [
    {
      "question": "Bir öğrencinin dönem boyunca bilgisayarda ürettiği en güzel resim, yazı ve sunumları bir araya getirdiği gelişim dosyasına ne ad verilir?",
      "options": [
        {
          "text": "Çöp Kutusu",
          "isCorrect": false
        },
        {
          "text": "Dijital Portfolyo (Gelişim Dosyası)",
          "isCorrect": true
        },
        {
          "text": "Hesap Makinesi",
          "isCorrect": false
        },
        {
          "text": "Klavye Kablosu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Dijital Portfolyo', emeklerimizi, resimlerimizi ve projelerimizi gururla sakladığımız dijital vitrinimizdir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dönemlik Yolculuğumuz' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanımdan yazılıma, güvenli internetten dijital resim ve masal yazmaya uzanan serüven.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dönemlik Yolculuğumuz' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'1. Dönem Dijital Portfolyomuzda Neler Var?' kapsamında ele alınan <strong>1. Eserimiz</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 29 Ekim Cumhuriyet Bayramı Dijital Afişi (.png).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Eserimiz, bilişim sistemlerinde 29 Ekim Cumhuriyet Bayramı Dijital Afişi (.png).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Eserimiz</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 24 Kasım Öğretmenime Teşekkür Kartı (.png).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Eserimiz, 24 Kasım Öğretmenime Teşekkür Kartı (.png). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'2. Dönem Bizi Neler Bekliyor?' bölümünde vurgulanan <strong>Heyecan</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kedi maskotunu klavye tuşlarıyla yöneteceğiz!... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Heyecan asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahtada Portfolyo Sergisi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Çalışmanı Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Tatil sadece hiç düşünmeden yatmak demektir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Tatil hem dinlenmek hem de merak ettiğimiz yeni hobileri keşfetmek içindir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Gözlerinizi Dinlendirin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Tatilde tüm günü ekran karşısında geçirmeyin; ailenizle masa oyunları oynayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Gözlerinizi Dinlendirin prensibi, Tatilde tüm günü ekran karşısında geçirmeyin; ailenizle masa oyunları oynayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dijital Portfolyo Oluşturma & Öz Değerlendirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Başarı Dolu Bir Dönem: Donanım, yazılım, güvenlik, çizim, metin ve sunum konularını ustalıkla tamamladık.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Başarı Dolu Bir Dönem' doğrultusunda Donanım, yazılım, güvenlik, çizim, metin ve sunum konularını ustalıkla tamamladık. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'1. Dönem Sonu: Dijital Ürünler Portfolyosu' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "20": [
    {
      "question": "Bir problemin çözümü için adım adım izlenen sıralı yola ne ad verilir?",
      "options": [
        {
          "text": "Monitör",
          "isCorrect": false
        },
        {
          "text": "Algoritma",
          "isCorrect": true
        },
        {
          "text": "Yazıcı",
          "isCorrect": false
        },
        {
          "text": "Hoparlör",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Algoritma', belirli bir amaca ulaşmak için adım adım tasarlanan mantıksal işlem sırasıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Algoritma Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bir hedefe ulaşmak veya bir problemi çözmek için adım adım izlenen kesin yol.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Algoritma Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Algoritma: Hayatımızın Her Yerinde!' kapsamında ele alınan <strong>Ayakkabı Giyme</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 1. Çorabını giy -> 2. Ayakkabını giy -> 3. Bağcıklarını bağla. (Önce ayakkabı giyilmez!)",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Ayakkabı Giyme, bilişim sistemlerinde 1. Çorabını giy -> 2. Ayakkabını giy -> 3. Bağcıklarını bağl... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Çay Demleme</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 1. Suyu kaynat -> 2. Çayı demliğe koy -> 3. Sıcak suyu dök -> 4. 15 dakika bekle.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Çay Demleme, 1. Suyu kaynat -> 2. Çayı demliğe koy -> 3. Sıcak suyu dök -> 4. 15 dakika bekle. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Ekransız Kodlama Tahtası' bölümünde vurgulanan <strong>Kural</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Her adım tek bir kare ilerletir.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kural asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Hazine Avcısı Algoritması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Haritayı Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kodlama yapmak için mutlaka çok pahalı bir bilgisayar gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) En büyük bilgisayar bilimcileri algoritmalarını önce kâğıt üzerinde tasarlar.",
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
      "question": "Günün Altın Kuralı olan <strong>'Başlangıç ve Bitiş Şarttır'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Her algoritmanın mutlaka bir 'BAŞLA' ve bir 'DUR' noktası olmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Başlangıç ve Bitiş Şarttır prensibi, Her algoritmanın mutlaka bir 'BAŞLA' ve bir 'DUR' noktası olmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilişimsel Düşünme & Algoritmik Sıralama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Algoritma: Adım adım kurallar ve sıralı eylemler bütünüdür.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Algoritma' doğrultusunda Adım adım kurallar ve sıralı eylemler bütünüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Sömestr 1. Hafta: Ekransız Kodlama & Algoritma' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "21": [
    {
      "question": "Bir bilgisayarın bir işi en az adımda, en hızlı ve en az enerji harcayarak yapmasına ne ad verilir?",
      "options": [
        {
          "text": "Format Atmak",
          "isCorrect": false
        },
        {
          "text": "Verimlilik / Optimizasyon (En Kısa Yol)",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarı Kapatmak",
          "isCorrect": false
        },
        {
          "text": "Ekranı Karartmak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Verimlilik ve Optimizasyon', problemleri en kısa ve en az maliyetli yoldan çözme sanatıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Labirent Çözme Stratejisi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Çıkmaz sokakları erkenden fark etme ve geri dönme mantığı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Labirent Çözme Stratejisi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Labirentlerde Karar Noktaları' kapsamında ele alınan <strong>Çıkmaz Sokağı Gör</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Eğer yolun sonu kapalıysa o yola hiç girmeden diğer tarafa yönel.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Çıkmaz Sokağı Gör, bilişim sistemlerinde Eğer yolun sonu kapalıysa o yola hiç girmeden diğer tarafa y... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Hedef Pusulası</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Hedef sağ üstteyse, mümkün olduğunca yukarı ve sağa giden yolları tercih et.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Hedef Pusulası, Hedef sağ üstteyse, mümkün olduğunca yukarı ve sağa giden yolları tercih et. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Optimizasyon: En Kısa Yolu Bul!' bölümünde vurgulanan <strong>Dezavantaj</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Çok pil harcar, zaman kaybettirir.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Dezavantaj asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kendi Labirentini Yarat ve Arkadaşına Çözdür'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Izgarayı Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Labirentten çıkış sadece şans işidir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Labirentten çıkış matematik, mantık ve yön stratejisi işidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Bütünü Görün'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Labirente sadece başlangıç noktasından bakmayın; çıkıştan geriye doğru bakmak bazen çok daha kolaydır!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bütünü Görün prensibi, Labirente sadece başlangıç noktasından bakmayın; çıkıştan geriye doğru bakmak bazen çok daha kolaydır! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Stratejik Planlama & Alternatif Üretme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Labirent Stratejisi: Hedefe odaklanmak ve çıkmaz yolları erken fark etmektir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Labirent Stratejisi' doğrultusunda Hedefe odaklanmak ve çıkmaz yolları erken fark etmektir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Sömestr 2. Hafta: Zekâ ve Labirent Atölyesi' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "22": [
    {
      "question": "Büyük ve karmaşık bir problemi daha kolay çözebilmek için küçük ve yönetilebilir parçalara ayırma işlemine ne ad verilir?",
      "options": [
        {
          "text": "Bilgisayarı Kapatmak",
          "isCorrect": false
        },
        {
          "text": "Problemi Ayrıştırma (Parçalara Bölme)",
          "isCorrect": true
        },
        {
          "text": "Monitörü Temizlemek",
          "isCorrect": false
        },
        {
          "text": "Resim Çizmek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Ayrıştırma (Decomposition)', bilişimsel düşünmenin en temel adımıdır; büyük işleri küçük parçalarla kolayca çözeriz.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Problem Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Hedefimize ulaşmamızı engelleyen, çözülmesi gereken her türlü durum veya soru.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Problem Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Büyük Problemi Küçük Parçalara Böl!' kapsamında ele alınan <strong>1. Küçük Parça</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Önce yerdeki oyuncakları toplayıp sepete koy.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Küçük Parça, bilişim sistemlerinde Önce yerdeki oyuncakları toplayıp sepete koy.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Küçük Parça</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sonra masadaki kitap ve defterleri çantaya yerleştir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Küçük Parça, Sonra masadaki kitap ve defterleri çantaya yerleştir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Problem Çözmenin 4 Altın Adımı' bölümünde vurgulanan <strong>Önemli</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Problemi anlamadan çözüm üretmeye çalışmak karanlı... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Önemli asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Okul Kantinindeki Kuyruk Problemini Çözüyoruz'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Problemi Tanımla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Akıllı insanlar problemleri tek saniyede sihirle çözer.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Akıllı insanlar problemleri adım adım, sabırla ve plan yaparak çözer.",
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
      "question": "Günün Altın Kuralı olan <strong>'Panik Yok!'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Bir sorunla karşılaştığınızda önce derin bir nefes alıp sakinleşin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Panik Yok! prensibi, Bir sorunla karşılaştığınızda önce derin bir nefes alıp sakinleşin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Problemi Tanımlama & Parçalara Bölme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Problem: Çözülmeyi bekleyen her türlü zorluk veya sorudur.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Problem' doğrultusunda Çözülmeyi bekleyen her türlü zorluk veya sorudur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Problem Nedir? Günlük Hayat Problemleri' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "23": [
    {
      "question": "Aşağıdaki 'Kek Pişirme Algoritması' adımlarından hangisi 'EN SONDA' yer almalıdır?",
      "options": [
        {
          "text": "Yumurtaları kaba kır",
          "isCorrect": false
        },
        {
          "text": "Fırını 180 dereceye ayarla",
          "isCorrect": false
        },
        {
          "text": "Keki fırından çıkar ve afiyetle ye (BİTİR)",
          "isCorrect": true
        },
        {
          "text": "Un ve sütü karıştır",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Bir pişirme algoritmasında yemeğin servis edilmesi ve yenmesi (BİTİR) en son adımdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Algoritmanın 3 Altın Kuralı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 1. Başlangıcı ve bitişi olmalı, 2. Adımları kesin ve net olmalı, 3. Sonuç üretmeli.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Algoritmanın 3 Altın Kuralı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'İyi Bir Algoritmanın Özellikleri' kapsamında ele alınan <strong>Başla ve Dur</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Mutlaka 1. adım 'BAŞLA' ve son adım 'BİTİR' olmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Başla ve Dur, bilişim sistemlerinde Mutlaka 1. adım 'BAŞLA' ve son adım 'BİTİR' olmalıdır.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Net Komutlar</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Biraz su koy' belirsizdir; '1 bardak su koy' açık ve nettir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Net Komutlar, 'Biraz su koy' belirsizdir; '1 bardak su koy' açık ve nettir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Adım Adım Diş Fırçalama Algoritması' bölümünde vurgulanan <strong>Detay</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Macunu fırçanın üzerine nohut büyüklüğünde sık.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Detay asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kör Robot ve Sandviç Algoritması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Öğrenci Komut Verir' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Robotlar akıllıdır, eksik söylediğimiz şeyleri kendileri tamamlar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Robotlar ve bilgisayarlar sadece söyleneni yapar; asla kendiliğinden tahmin edemez.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kendinizi Robot Yerine Koyun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Robot sizin ne düşündüğünüzü bilmez; sadece ağzınızdan çıkan kelimeyi anlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kendinizi Robot Yerine Koyun prensibi, Robot sizin ne düşündüğünüzü bilmez; sadece ağzınızdan çıkan kelimeyi anlar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritma Oluşturma & Adımları Mantıkla Sıralama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Algoritma Sihri: Adımları doğru sırayla dizerek harika sonuçlar üretmektir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Algoritma Sihri' doğrultusunda Adımları doğru sırayla dizerek harika sonuçlar üretmektir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Algoritma Sihri: Günlük Yaşam Algoritmaları' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "24": [
    {
      "question": "Bir akış şemasında 'Karar verme' ve 'Şart sorgulama' (Örn: Sınav notu 50'den büyük mü?) için hangi geometrik sembol kullanılır?",
      "options": [
        {
          "text": "Dikdörtgen",
          "isCorrect": false
        },
        {
          "text": "Eşkenar Dörtgen (Baklava Dilimi)",
          "isCorrect": true
        },
        {
          "text": "Elips",
          "isCorrect": false
        },
        {
          "text": "Daire",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Eşkenar dörtgen (baklava dilimi), karar anlarını gösterir ve içinden EVET/HAYIR okları çıkar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Akış Şeması Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Algoritmanın geometrik şekiller ve oklarla çizilmiş görsel haritası.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Akış Şeması Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Akış Şemasının Temel Sembolleri' kapsamında ele alınan <strong>Elips (Başla / Bitir)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Şemanın en üstünde ve en altında mutlaka birer tane bulunur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Elips (Başla / Bitir), bilişim sistemlerinde Şemanın en üstünde ve en altında mutlaka birer tane bulunur.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Dikdörtgen (İşlem)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) '10 adım yürü', 'Sayıyı 2 ile çarp' gibi eylemler buraya yazılır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Dikdörtgen (İşlem), '10 adım yürü', 'Sayıyı 2 ile çarp' gibi eylemler buraya yazılır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Karar Anı: Evet mi, Hayır mı?' bölümünde vurgulanan <strong>EVET Oku</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Montunu giy kutusuna gider.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> EVET Oku asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Trafik Lambası Akış Şeması Çizimi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Başla Elipsi' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İstediğimiz herhangi bir şekli akış şemasında kafamıza göre kullanabiliriz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Şekillerin anlamı sabittir; dikdörtgen işlem, baklava karardır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Cetvel Kullanın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Düzgün çizilmiş şekiller şemanın okunmasını çok kolaylaştırır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Cetvel Kullanın prensibi, Düzgün çizilmiş şekiller şemanın okunmasını çok kolaylaştırır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Görsel Algoritma & Akış Şeması Çizme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Akış Şeması: Algoritmanın görsel haritasıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Akış Şeması' doğrultusunda Algoritmanın görsel haritasıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Yönler ve Akış Şemaları: Hedefe Ulaşma' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "25": [
    {
      "question": "Blok tabanlı kodlamada bir komutun çalışması için blok nereye takılmalıdır?",
      "options": [
        {
          "text": "Ekranın boş bir yerine tek başına bırakılmalıdır",
          "isCorrect": false
        },
        {
          "text": "'Çalıştığı Zaman' bloğunun altına kenetlenmelidir",
          "isCorrect": true
        },
        {
          "text": "Çöp kutusuna atılmalıdır",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarın klavyesinin üstüne konmalıdır",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kodların çalışması için başlangıç tetiği olan 'Çalıştığı Zaman' bloğunun altına lego gibi takılması gerekir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Blok Tabanlı Kodlama Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Yazım hatası yapmadan, lego parçalarını birleştirir gibi program yazma yöntemi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Blok Tabanlı Kodlama Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Neden Blok Tabanlı Kodlama?' kapsamında ele alınan <strong>Hata Yapmayı Önler</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Birbirine uymayan bloklar fiziksel olarak kenetlenmez.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Hata Yapmayı Önler, bilişim sistemlerinde Birbirine uymayan bloklar fiziksel olarak kenetlenmez.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Görsel ve Renkli</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Hareket blokları mavi, olaylar sarı, kontroller turuncudur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Görsel ve Renkli, Hareket blokları mavi, olaylar sarı, kontroller turuncudur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Code.org Arayüzünü Tanıyalım' bölümünde vurgulanan <strong>Görev</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Karakteri hedefe ulaştırmak.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Görev asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Code.org Klasik Labirent 1-5 Bölümleri'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Bölüm 1'i Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Blok kodlama gerçek kodlama değildir, sadece bir oyundur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Blokların arkasında gerçek Python ve JavaScript kodları yatar; mantık birebir aynıdır!",
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
      "question": "Günün Altın Kuralı olan <strong>'Karakterin Gözünden Bakın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Karakter aşağı doğru bakıyorsa onun sağı sizin solunuz olabilir; kendinizi onun yerine koyun!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Karakterin Gözünden Bakın prensibi, Karakter aşağı doğru bakıyorsa onun sağı sizin solunuz olabilir; kendinizi onun yerine koyun! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Görsel Bloklarla Program Yazma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Blok Kodlama: Görsel ve eğlenceli yazılım üretme yöntemidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Blok Kodlama' doğrultusunda Görsel ve eğlenceli yazılım üretme yöntemidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Blok Tabanlı Kodlamaya İlk Adım: Code.org' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "26": [
    {
      "question": "Bir karakterin kenarları eşit bir KARE çizmesi için hangi döngü kodu kullanılmalıdır?",
      "options": [
        {
          "text": "2 defa tekrarla: [ İlerle, Sola dön ]",
          "isCorrect": false
        },
        {
          "text": "4 defa tekrarla: [ İlerle, 90 derece Sağa dön ]",
          "isCorrect": true
        },
        {
          "text": "10 defa tekrarla: [ Zıpla ]",
          "isCorrect": false
        },
        {
          "text": "1 defa tekrarla: [ Dur ]",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Karenin 4 eşit kenarı ve 4 dik açısı olduğu için 4 defa [İlerle, 90 derece dön] döngüsü kusursuz bir kare çizer.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Döngü (Loop) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Aynı işlemi defalarca tekrarlayan süper pratik kod yapısı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Döngü (Loop) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Döngülerin Büyülü Gücü: Tekrar Et!' kapsamında ele alınan <strong>Döngüsüz (Zor Yol)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) İlerle, İlerle, İlerle, İlerle, İlerle... (Sayfa bloklarla dolar!)",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Döngüsüz (Zor Yol), bilişim sistemlerinde İlerle, İlerle, İlerle, İlerle, İlerle... (Sayfa bloklarla d... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Döngülü (Akıllı Yol)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) '5 defa tekrarla: [ İlerle ]' -> Sadece tek bir blokla biter!",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Döngülü (Akıllı Yol), '5 defa tekrarla: [ İlerle ]' -> Sadece tek bir blokla biter! açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'12 Mart İstiklâl Marşı'nın Kabulü' bölümünde vurgulanan <strong>Bilişim Projesi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde İstiklal Marşı'nın mısralarını döngülerle sırayla ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Bilişim Projesi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Döngü ile Kare ve Yıldız Çizme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Döngü Bloğunu Al' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Döngü kullanmadan da her programı yapabiliriz, döngü gereksizdir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Döngü olmadan 1000 satırlık oyunlar yazılamaz; döngü yazılımcının en büyük yardımcısıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'İçine Koyduğunuz Bloklara Dikkat Edin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Döngünün içine ne koyarsanız o bloklar tekrarlanır; dışındakiler sadece bir kez çalışır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> İçine Koyduğunuz Bloklara Dikkat Edin prensibi, Döngünün içine ne koyarsanız o bloklar tekrarlanır; dışındakiler sadece bir kez çalışır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Döngü Yapılarını Kullanarak Kodu Sadeleştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Döngüler: Aynı eylemleri belirlenen sayıda otomatik tekrarlayan bloklardır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Döngüler' doğrultusunda Aynı eylemleri belirlenen sayıda otomatik tekrarlayan bloklardır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Döngüler (Tekrarlar) & 12 Mart İstiklâl Marşı' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "27": [
    {
      "question": "Bir oyunda karakterimizin duvara çarptığında 'Geriye Dönmesini', duvara çarpmadığında ise 'İlerlemeye Devam Etmesini' sağlayan kod yapısı hangisidir?",
      "options": [
        {
          "text": "Sadece Başla bloğu",
          "isCorrect": false
        },
        {
          "text": "Eğer (Duvara dokunuyor mu?) ... Değilse ...",
          "isCorrect": true
        },
        {
          "text": "Ses Çal bloğu",
          "isCorrect": false
        },
        {
          "text": "Yazıyı Sil bloğu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Eğer - Değilse' yapısı iki farklı durumu kontrol ederek karaktere doğru kararı aldırır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Koşul (Şart) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bir olayın gerçekleşmesinin başka bir duruma bağlı olması ('Eğer ödev biterse oyun oynayabilirsin').",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Koşul (Şart) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bilgisayarlar Nasıl Karar Verir?' kapsamında ele alınan <strong>EĞER Şartı Doğruysa</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Hemen altındaki birinci blok grubunu çalıştırır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> EĞER Şartı Doğruysa, bilişim sistemlerinde Hemen altındaki birinci blok grubunu çalıştırır.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>DEĞİLSE (Şart Yanlışsa)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Değilse kısmındaki alternatif blok grubunu çalıştırır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> DEĞİLSE (Şart Yanlışsa), Değilse kısmındaki alternatif blok grubunu çalıştırır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'18 Mart Çanakkale Zaferi ve Şehitleri Anma' bölümünde vurgulanan <strong>Milli Bilinç</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Şehitlerimizi saygı ve rahmetle anıyoruz.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Milli Bilinç asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Trafik Lambası Kodluyoruz'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Sensörü Ayarla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilgisayarlar geleceği önceden tahmin edebilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilgisayarlar sadece bizim 'Eğer şu olursa bunu yap' dediğimiz şartları kontrol eder.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sürekli Tekrarla ile Kullanın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Eğer bloğu bir kere değil oyun boyunca kontrol etsin diye 'Sürekli Tekrarla' içine konulmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sürekli Tekrarla ile Kullanın prensibi, Eğer bloğu bir kere değil oyun boyunca kontrol etsin diye 'Sürekli Tekrarla' içine konulmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Koşullu Durumları Kodlama & Karar Mekanizmaları'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Koşul (Şart): Karar verme anlarıdır; bir durumun sonucuna göre yön belirler.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Koşul (Şart)' doğrultusunda Karar verme anlarıdır; bir durumun sonucuna göre yön belirler. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Şartlar (Eğer - Değilse) & 18 Mart Çanakkale Zaferi' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "28": [
    {
      "question": "Scratch programında hazırladığımız oyun ve animasyonları başlatmak için sahnenin üzerindeki hangi renkli simgeye tıklanır?",
      "options": [
        {
          "text": "Kırmızı Buton",
          "isCorrect": false
        },
        {
          "text": "Yeşil Bayrak",
          "isCorrect": true
        },
        {
          "text": "Sarı Yıldız",
          "isCorrect": false
        },
        {
          "text": "Mavi Kare",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Scratch dünyasında projeleri başlatmanın evrensel sembolü 'Yeşil Bayrak'tır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Scratch Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) MIT Üniversitesi tarafından çocuklar için geliştirilen en popüler blok kodlama aracı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Scratch Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Scratch Arayüzünün Haritası' kapsamında ele alınan <strong>1. Blok Çekmecesi (Sol)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Hareket (Mavi), Görünüm (Mor), Ses (Pembe), Olaylar (Sarı), Kontrol (Turuncu).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Blok Çekmecesi (Sol), bilişim sistemlerinde Hareket (Mavi), Görünüm (Mor), Ses (Pembe), Olaylar (Sarı), ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Kodlama Alanı (Orta)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Blokları sürükleyip lego gibi dizdiğimiz geniş çalışma masası.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Kodlama Alanı (Orta), Blokları sürükleyip lego gibi dizdiğimiz geniş çalışma masası. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'İlk Scratch Kodumuz' bölümünde vurgulanan <strong>Önemli</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bütün Scratch projeleri bu sarı blokla başlar.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Önemli asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kendi Karakterimi Seçiyorum ve Konuşturuyorum'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Arka Plan Ekle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Scratch'te sadece sarı kedi kuklasıyla oyun yapılabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kütüphanede yüzlerce hayvan, insan, uzay aracı vardır; hatta kendi çiziminizi bile kukla yapabilirsiniz!",
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
      "question": "Günün Altın Kuralı olan <strong>'Kuklaya Tıkladığınızdan Emin Olun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kod yazmadan önce sağ altta hangi kuklanın seçili olduğuna bakın; yoksa sahneye kod yazabilirsiniz!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kuklaya Tıkladığınızdan Emin Olun prensibi, Kod yazmadan önce sağ altta hangi kuklanın seçili olduğuna bakın; yoksa sahneye kod yazabilirsiniz! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Scratch Arayüzünü Tanıma & İlk Animasyon'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Scratch: Oyun ve animasyon yapmamızı sağlayan görsel kodlama platformudur.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Scratch' doğrultusunda Oyun ve animasyon yapmamızı sağlayan görsel kodlama platformudur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Scratch Dünyasına Merhaba: Kedi Maskot & Sahne' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "29": [
    {
      "question": "Aşağıdaki kod çalıştırıldığında kedi toplam KAÇ ADIM ilerlemiş olur?\n[ 5 defa tekrarla: [ 10 adım git ] ]",
      "options": [
        {
          "text": "10 adım",
          "isCorrect": false
        },
        {
          "text": "15 adım",
          "isCorrect": false
        },
        {
          "text": "50 adım",
          "isCorrect": true
        },
        {
          "text": "5 adım",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 5 defa 10 adım git komutu çalıştığında 5 x 10 = 50 adım ilerlenmiş olur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bug ve Debug Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bug = Kod hatası, Debug = Hatayı bulup temizleme sanatı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bug ve Debug Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Hata Ayıklama (Debug) Nasıl Yapılır?' kapsamında ele alınan <strong>1. Hatayı Gözlemle</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Karakter ne yapıyor? Duvara mı çarpıyor, dönmüyor mu yoksa hiç hareket etmiyor mu?",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Hatayı Gözlemle, bilişim sistemlerinde Karakter ne yapıyor? Duvara mı çarpıyor, dönmüyor mu yoksa h... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Blokları Sırayla Oku</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yukarıdan aşağıya doğru blokları tıpkı bir robot gibi sesli oku.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Blokları Sırayla Oku, Yukarıdan aşağıya doğru blokları tıpkı bir robot gibi sesli oku. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sınavda Çıkacak Temel Kod Soruları' bölümünde vurgulanan <strong>İpucu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Tekrar sayısı ile adım sayısını çarpın.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> İpucu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bozuk Kodları Tamir Etme Atölyesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Bozuk Kod 1' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Hata yapan biri iyi bir yazılımcı olamaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Dünyanın en iyi yazılımcıları günlerinin yarısını hata ayıklayarak (debugging) geçirir!",
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
      "question": "Günün Altın Kuralı olan <strong>'Kod Bloklarını Parmağınızla İzleyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Soru kâğıdındaki blokları sırasıyla parmağınızla takip ederek kafanızda canlandırın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kod Bloklarını Parmağınızla İzleyin prensibi, Soru kâğıdındaki blokları sırasıyla parmağınızla takip ederek kafanızda canlandırın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kod Hatalarını Bulma & Düzeltme (Debugging)'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Debug (Hata Ayıklama): Kod hatalarını bulup düzeltme uzmanlığıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Debug (Hata Ayıklama)' doğrultusunda Kod hatalarını bulup düzeltme uzmanlığıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'2. Dönem 1. Yazılı Sınav Tekrarı & Debug' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "30": [
    {
      "question": "Scratch'te bir karakterin yürürken bacaklarını hareket ettiriyormuş gibi görünmesi için hangi blok kullanılır?",
      "options": [
        {
          "text": "Görünümü Gizle",
          "isCorrect": false
        },
        {
          "text": "Sonraki Kostüme Geç",
          "isCorrect": true
        },
        {
          "text": "Sahneyi Karart",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarı Kapat",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Sonraki Kostüm' bloğu kuklanın bir sonraki çizimine geçerek yürüyüş animasyonu oluşturur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Animasyonun Sırrı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Birbirini takip eden resimlerin hızla gösterilmesiyle hareket yanılsaması oluşturma.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Animasyonun Sırrı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Çizgi Film Sihirbazlığı: Kostüm Değişimi' kapsamında ele alınan <strong>1. Blok</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 10 adım git.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Blok, bilişim sistemlerinde 10 adım git.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Blok</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sonraki kostüme geç.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Blok, Sonraki kostüme geç. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yerçekimi ve Zıplama Fiziği' bölümünde vurgulanan <strong>Tepe Noktası</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde En tepede 0.1 saniye havada asılı kalır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tepe Noktası asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Koşan ve Zıplayan Kedi Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Sağ Ok Kodu' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Karakterin zıplaması için sadece 'Yukarı git' demek yeterlidir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Eğer aşağı indirme kodu yazmazsanız karakter havada asılı kalır; mutlaka geri indirmelisiniz!",
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
      "question": "Günün Altın Kuralı olan <strong>'Dönüş İznini Ayarlayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sol oka basınca kedi baş aşağı dönüyorsa, 'Dönüş İznini: Sadece Sağa-Sola' olarak seçin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Dönüş İznini Ayarlayın prensibi, Sol oka basınca kedi baş aşağı dönüyorsa, 'Dönüş İznini: Sadece Sağa-Sola' olarak seçin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Animasyon Yapma & Karakterleri Hareketlendirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kostümler: Karakterin farklı çizimleridir; hızla değişince animasyon doğar.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kostümler' doğrultusunda Karakterin farklı çizimleridir; hızla değişince animasyon doğar. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Karakterleri Canlandırma: Yürüme & Zıplama' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "31": [
    {
      "question": "Scratch'te bir kuklanın topladığı elmanın ekranda kaybolması ve gizlenmesi için hangi Görünüm bloğu kullanılır?",
      "options": [
        {
          "text": "Göster",
          "isCorrect": false
        },
        {
          "text": "Gizle",
          "isCorrect": true
        },
        {
          "text": "Ses Çal",
          "isCorrect": false
        },
        {
          "text": "Boyutu 200 Yap",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Gizle' bloğu kuklayı görünmez yapar; ödül toplanınca gizlenmesi için bu blok kullanılır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Labirent Oyunu Mimarisi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Karakter, labirent duvarları, toplanacak ödüller ve çıkış kapısı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Labirent Oyunu Mimarisi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Labirent Oyununun Temel Mekaniği' kapsamında ele alınan <strong>Hareket</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sağ oka basınca 5 adım ileri git.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Hareket, bilişim sistemlerinde Sağ oka basınca 5 adım ileri git.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kontrol</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) EĞER siyah duvara dokunuyor mu?",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kontrol, EĞER siyah duvara dokunuyor mu? açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Ödül ve Puan Sistemi' bölümünde vurgulanan <strong>Yeniden Başlama</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yeşil bayrağa basıldığında elma yeniden 'Görün'mel... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yeniden Başlama asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Tatil Özel: Kendi Labirent Oyunumu Yapıyorum'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Labirenti Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Oyun yapmak için kodları tek seferde mükemmel yazmak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Oyunlar deneme, yanılma, test etme ve geliştirme ile adım adım mükemmelleşir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Başlangıç Konumunu Belirleyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yeşil bayrağa basınca kedinin her zaman sol üstteki başlangıç noktasına gitmesi için 'x: -200 y: 150 konumuna git' bloğunu en başa koyun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Başlangıç Konumunu Belirleyin prensibi, Yeşil bayrağa basınca kedinin her zaman sol üstteki başlangıç noktasına gitmesi için 'x: -200 y: 150 konumuna git' bloğunu en başa koyun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kapsamlı Oyun Tasarımı & Hata Ayıklama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Labirent Fiziği: Renge dokunma ve geri tepme ile duvar hissi verilir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Labirent Fiziği' doğrultusunda Renge dokunma ve geri tepme ile duvar hissi verilir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'2. Dönem Ara Tatil: Scratch Oyun Kulübü' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "32": [
    {
      "question": "Scratch'te bir kuklanın üzerine bilgisayar faresiyle tıklandığında kodların çalışmasını başlatan sarı olay bloğu hangisidir?",
      "options": [
        {
          "text": "Yeşil bayrağa tıklanınca",
          "isCorrect": false
        },
        {
          "text": "Bu kuklaya tıklanınca",
          "isCorrect": true
        },
        {
          "text": "Boşluk tuşuna basılınca",
          "isCorrect": false
        },
        {
          "text": "Sahne kararınca",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bu kuklaya tıklanınca' bloğu, sadece o kuklaya fareyle tıklandığı an altındaki komutları çalıştırır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '23 Nisan Anlamı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) TBMM'nin açılışı ve Atatürk'ün dünyada çocuklara bayram hediye eden tek lider olması.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '23 Nisan Anlamı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'İnteraktif Kart Nasıl Çalışır?' kapsamında ele alınan <strong>Kırmızı Balona Tıklanınca</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Balon gökyüzüne doğru süzülsün ve 'Pop' sesiyle patlasın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kırmızı Balona Tıklanınca, bilişim sistemlerinde Balon gökyüzüne doğru süzülsün ve 'Pop' sesiyle patlasın.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Atatürk Portresine Tıklanınca</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Egemenlik kayıtsız şartsız milletindir!' sözü yankılansın.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Atatürk Portresine Tıklanınca, 'Egemenlik kayıtsız şartsız milletindir!' sözü yankılansın. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Balonların Göğe Yükselme Kodu' bölümünde vurgulanan <strong>Tepeden Dönüş</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Eğer Y konumu > 180 ise, Y'yi tekrar -180 yapıp aş... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tepeden Dönüş asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'23 Nisan İnteraktif Bayram Kartı Atölyesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Dekoru Süsle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Tebrik kartları sadece matbaada basılan kâğıtlarla yapılır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Dijital interaktif kartlar ses, hareket ve animasyon içerdiği için çok daha eğlencelidir!",
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
      "question": "Günün Altın Kuralı olan <strong>'Sesleri Çok Yüksek Yapmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Ses seviyesini %70 civarında tutarak kulakları rahatsız etmeyecek şekilde ayarlayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sesleri Çok Yüksek Yapmayın prensibi, Ses seviyesini %70 civarında tutarak kulakları rahatsız etmeyecek şekilde ayarlayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Etkileşimli Tebrik Kartı Tasarlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 23 Nisan: Gazi Mustafa Kemal Atatürk'ün çocuklara en büyük emanetidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '23 Nisan' doğrultusunda Gazi Mustafa Kemal Atatürk'ün çocuklara en büyük emanetidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'23 Nisan Çocuk Bayramı: İnteraktif Tebrik Kartı' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "33": [
    {
      "question": "Scratch'te hareket eden bir balığın sahnenin kenarına ulaştığında dışarı kaçmayıp geri dönmesini sağlayan blok hangisidir?",
      "options": [
        {
          "text": "Görünümü Gizle",
          "isCorrect": false
        },
        {
          "text": "Kenara geldiyse sektir",
          "isCorrect": true
        },
        {
          "text": "Sahneyi sil",
          "isCorrect": false
        },
        {
          "text": "10 saniye bekle",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Kenara geldiyse sektir' bloğu sahne duvarlarına çarpan kuklaları otomatik olarak geri döndürür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Su Altı Dünyası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Mavi okyanus dekoru, yosunlar, renkli balıklar ve deniz yıldızları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Su Altı Dünyası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Doğal Balık Yüzme Hareketi' kapsamında ele alınan <strong>1. Adım</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sürekli Tekrarla bloğu açın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Adım, bilişim sistemlerinde Sürekli Tekrarla bloğu açın.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Adım</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 5 adım git.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Adım, 5 adım git. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Çoklu Karakterleri Yönetmek' bölümünde vurgulanan <strong>Farklı Hızlar</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Biri 4 adım, diğeri 7 adım giderse akvaryum çok da... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Farklı Hızlar asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Canlı Akvaryum Projesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Dekoru Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Her balık için yüzlerce satır kod yazmak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bir balığın kodunu yazıp diğer balıklara fareyle sürükleyerek anında kopyalayabilirsiniz!",
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
      "question": "Günün Altın Kuralı olan <strong>'Hızları Dengeli Tutun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Balıkların adımını 30 yaparsanız ekranda şimşek gibi uçarlar; 3-6 arası çok doğaldır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hızları Dengeli Tutun prensibi, Balıkların adımını 30 yaparsanız ekranda şimşek gibi uçarlar; 3-6 arası çok doğaldır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Rastgele Hareket & Çoklu Karakter Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Simülasyon: Gerçek hayatı bilgisayarda canlandırma sanatıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Simülasyon' doğrultusunda Gerçek hayatı bilgisayarda canlandırma sanatıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Akvaryum Oyunu: Balıkların Yüzmesi & Efektler' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "34": [
    {
      "question": "Scratch'te yakalanan her meyve için oyuncunun puanını 1 artırmak istediğimizde hangi blok kullanılmalıdır?",
      "options": [
        {
          "text": "Skoru 0 yap",
          "isCorrect": false
        },
        {
          "text": "Skoru 1 kadar değiştir (artır)",
          "isCorrect": true
        },
        {
          "text": "Skoru gizle",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarı yeniden başlat",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Skoru 1 kadar değiştir' bloğu mevcut puana her seferinde +1 ekleyerek skoru yükseltir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Değişken (Variable) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgisayarın hafızasında bilgi sakladığı, içi değişebilen etiketli kutu/kumbara.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Değişken (Variable) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Değişken: Dijital Kumbara' kapsamında ele alınan <strong>Oyun Başında</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Skor değişkenini 0 yap' (Kumbara sıfırlanır).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Oyun Başında, bilişim sistemlerinde 'Skor değişkenini 0 yap' (Kumbara sıfırlanır).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Elma Yakalanınca</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Skor değişkenini 1 kadar değiştir' (Kumbaraya 1 puan atılır).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Elma Yakalanınca, 'Skor değişkenini 1 kadar değiştir' (Kumbaraya 1 puan atılır). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Düşen Elma Algoritması' bölümünde vurgulanan <strong>Rastgelelik</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Elmanın nereden düşeceği hiç belli olmaz!... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Rastgelelik asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Tam Meyve Yakalama Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Sepet Kodu' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Değişkenler sadece sayı tutabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Değişkenler oyuncunun adını (Ahmet, Ayşe) veya seviye adını da metin olarak saklayabilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Oyun Başında Sıfırlayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yeşil bayrağa basıldığında 'Skoru 0 yap' demezseniz önceki oyunun puanı silinmez!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Oyun Başında Sıfırlayın prensibi, Yeşil bayrağa basıldığında 'Skoru 0 yap' demezseniz önceki oyunun puanı silinmez! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Değişken Kavramını Kullanarak Skorlu Oyun Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Değişken: Bilgisayarın hafızasındaki bilgi saklama kutusudur.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Değişken' doğrultusunda Bilgisayarın hafızasındaki bilgi saklama kutusudur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Meyve Yakalama Oyunu: Değişkenler & Skor' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "35": [
    {
      "question": "Scratch'te ellerini kullanamayan bir kişinin bilgisayara ses çıkararak veya alkış yaparak komut vermesini sağlayan algılama bloğu hangisidir?",
      "options": [
        {
          "text": "Fareye tıklandı mı?",
          "isCorrect": false
        },
        {
          "text": "Ses şiddeti (Loudness)",
          "isCorrect": true
        },
        {
          "text": "Renge dokunuyor mu?",
          "isCorrect": false
        },
        {
          "text": "Klavyeden boşluk tuşu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Ses Şiddeti (Loudness)' bloğu mikrofondan gelen ses seviyesini ölçerek sesle kontrol imkânı tanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Engelliler Haftası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Farklılıklara saygı, empati ve engelleri teknolojiyle aşma bilinci.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Engelliler Haftası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bilişimle Engelleri Kaldırıyoruz!' kapsamında ele alınan <strong>Ekran Okuyucular</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Görme engelliler için ekrandaki yazıları sesli olarak okur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Ekran Okuyucular, bilişim sistemlerinde Görme engelliler için ekrandaki yazıları sesli olarak okur.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Göz Takip Cihazları</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sadece göz kırparak fareyi hareket ettirme ve yazı yazma.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Göz Takip Cihazları, Sadece göz kırparak fareyi hareket ettirme ve yazı yazma. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Scratch'te Ses Algılama Bloğu' bölümünde vurgulanan <strong>Kullanım</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde EĞER Ses Şiddeti > 40 ise -> Karakteri Zıplat!... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kullanım asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sesle Zıplayan Sevimli Tavşan'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Mikrofonu İzin Ver' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Engelliler bilişim teknolojilerini kullanamaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Dünyada çok başarılı görme engelli ve bedensel engelli yazılım mühendisleri vardır!",
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
      "question": "Günün Altın Kuralı olan <strong>'Büyük Yazı Tipi'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Az gören bireyler için ekrandaki yazıları her zaman büyük ve net yapın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Büyük Yazı Tipi prensibi, Az gören bireyler için ekrandaki yazıları her zaman büyük ve net yapın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Engelsiz Teknoloji & Sosyal Duyarlılık Becerisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Empati ve Sevgi: Engeller bedende değil, empati kuramayan zihinlerdedir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Empati ve Sevgi' doğrultusunda Engeller bedende değil, empati kuramayan zihinlerdedir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Engelliler Haftası Özel: Engelsiz Bilişim' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "36": [
    {
      "question": "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı oyunumuzda topun rakete çarptığında geriye dönmesi için hangi kod bloğu uygulanır?",
      "options": [
        {
          "text": "Sahneyi karart",
          "isCorrect": false
        },
        {
          "text": "180 derece dön ve ilerle",
          "isCorrect": true
        },
        {
          "text": "Boyutu 0 yap",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarı kapat",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 180 derece dönmek tam ters istikamete yönelmeyi sağlar ve topun geri sekmesini kodlar.",
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
          "text": "B) Mustafa Kemal Atatürk'ün Samsun'a ayak basarak Kurtuluş Savaşı'nı başlattığı kutlu gün.",
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
      "question": "'Penaltı ve Gol Oyunu Mantığı' kapsamında ele alınan <strong>Top Kuklası</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Boşluk tuşuna basınca kaleye doğru hızla fırlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Top Kuklası, bilişim sistemlerinde Boşluk tuşuna basınca kaleye doğru hızla fırlar.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kaleci Kuklası</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kale çizgisinde sağa sola sürekli gidip gelerek devriye atar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kaleci Kuklası, Kale çizgisinde sağa sola sürekli gidip gelerek devriye atar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Top Sektirme (Pong) Oyunu' bölümünde vurgulanan <strong>Kolay Kontrol</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Gecikme olmadan mükemmel refleks sağlar.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kolay Kontrol asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'19 Mayıs Gençlik Kupası Futbol Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Futbol Sahası Dekoru' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"E-spor gerçek sporun yerine geçer.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) E-spor eğlencelidir ama beden sağlığımız için mutlaka gerçek spor ve koşu yapmalıyız.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kaleciyi Çok Hızlı Yapmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kaleci çok hızlı olursa hiç gol atılamaz; oyunu keyifli kılan dengeli hızdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kaleciyi Çok Hızlı Yapmayın prensibi, Kaleci çok hızlı olursa hiç gol atılamaz; oyunu keyifli kılan dengeli hızdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Fiziksel Dinamikler & Spor Oyunu Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 19 Mayıs: Milli mücadelemizin ilk kıvılcımı ve gençliğin bayramıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '19 Mayıs' doğrultusunda Milli mücadelemizin ilk kıvılcımı ve gençliğin bayramıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı: Spor Oyunu' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "37": [
    {
      "question": "Sıfır Atık standartlarına göre 'KÂĞIT VE KARTON' atıklar hangi renkli geri dönüşüm kutusuna atılmalıdır?",
      "options": [
        {
          "text": "Sarı Kutu",
          "isCorrect": false
        },
        {
          "text": "Mavi Kutu",
          "isCorrect": true
        },
        {
          "text": "Kırmızı Kutu",
          "isCorrect": false
        },
        {
          "text": "Siyah Kutu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Sıfır Atık yönetmeliğine göre kâğıt ve karton atıklar MAVİ renkli geri dönüşüm kutularında toplanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Sıfır Atık Hareketi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İsrafı önlemek, kaynakları verimli kullanmak ve atıkları geri dönüştürmek.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Sıfır Atık Hareketi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Teknoloji Doğayı Nasıl Korur?' kapsamında ele alınan <strong>Ağaçları Kurtarır</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 1 ton kâğıt geri dönüştürüldüğünde 17 yetişkin ağaç kesilmekten kurtulur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Ağaçları Kurtarır, bilişim sistemlerinde 1 ton kâğıt geri dönüştürüldüğünde 17 yetişkin ağaç kesilmek... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Denizleri Temizler</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Plastiklerin okyanuslara ve balıkların midesine gitmesini önler.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Denizleri Temizler, Plastiklerin okyanuslara ve balıkların midesine gitmesini önler. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Geri Dönüşüm Oyunu Algoritması' bölümünde vurgulanan <strong>Puan</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Doğru kutu yüksek çevre puanı kazandırır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Puan asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sıfır Atık Kahramanı Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kutuları Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bütün çöpler tek bir torbaya konulup atılmalıdır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kâğıt, cam ve plastik kaynağında ayrı toplanırsa %100 geri dönüştürülebilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Cihazları Prizde Bırakmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Şarj aletleri prize takılı kaldığında elektrik tüketmeye devam eder (vampir enerji).",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Cihazları Prizde Bırakmayın prensibi, Şarj aletleri prize takılı kaldığında elektrik tüketmeye devam eder (vampir enerji). gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Çevreye Duyarlı Teknoloji & Sınıflandırma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Sıfır Atık: Geleceğimize temiz ve yaşanabilir bir dünya bırakma sözümüzdür.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Sıfır Atık' doğrultusunda Geleceğimize temiz ve yaşanabilir bir dünya bırakma sözümüzdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Sıfır Atık ve Akıllı Geri Dönüşüm Robotu' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "38": [
    {
      "question": "Scratch'te bir karakterin konuşmasını bitirdikten sonra sıranın diğer karaktere geçtiğini bildirmek için kullandığı blok hangisidir?",
      "options": [
        {
          "text": "Bilgisayarı kapat",
          "isCorrect": false
        },
        {
          "text": "Haberini sal (Broadcast)",
          "isCorrect": true
        },
        {
          "text": "Sahneyi sil",
          "isCorrect": false
        },
        {
          "text": "100 adım git",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Haberini sal (Broadcast)' bloğu kuklalar arası gizli iletişim kurarak olayların sırayla tetiklenmesini sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Haber Salma (Broadcast) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bir kuklanın diğer tüm kuklalara gizli bir telsiz anonsu göndermesi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Haber Salma (Broadcast) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Karakterler Arasında Telsiz İletişimi' kapsamında ele alınan <strong>1. Adım (Kedi)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Selam Karabaş!' der ve 'kedi_konustu' haberini salar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Adım (Kedi), bilişim sistemlerinde 'Selam Karabaş!' der ve 'kedi_konustu' haberini salar.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Adım (Köpek)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'kedi_konustu haberini alınca' bloğu uyanır ve 'Selam Tekir!' der.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Adım (Köpek), 'kedi_konustu haberini alınca' bloğu uyanır ve 'Selam Tekir!' der. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sahne ve Bölüm Değiştirme' bölümünde vurgulanan <strong>Sahne Tepkisi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Haber gelince 'Sonraki Dekora Geç' komutunu çalışt... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sahne Tepkisi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Ormanda Karşılaşan İki Arkadaş Çizgi Filmi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '2 Kukla ve Orman Dekoru' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Haber salındığında sadece 1 kukla haberi duyabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Haber salındığında projedeki bütün kuklalar ve sahne anonsu aynı anda duyar!",
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
      "question": "Günün Altın Kuralı olan <strong>'Haberlere Anlamlı İsimler Verin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 'Haber 1' demek yerine 'kedi_bitti' veya 'oyun_basladi' yazın; kafanız karışmaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Haberlere Anlamlı İsimler Verin prensibi, 'Haber 1' demek yerine 'kedi_bitti' veya 'oyun_basladi' yazın; kafanız karışmaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Olay Tabanlı İletişim & Senaryo Kurgulama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Haber Salma: Kuklalar ve sahneler arası kablosuz anons sistemidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Haber Salma' doğrultusunda Kuklalar ve sahneler arası kablosuz anons sistemidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'İnteraktif Hikâye & Karakter Sohbeti' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "39": [
    {
      "question": "Scratch'te bir oyunda puanları saklamak için 'SKOR' adında oluşturduğumuz ve oyun boyunca değeri değişebilen yapıya ne ad verilir?",
      "options": [
        {
          "text": "Ses Efekti",
          "isCorrect": false
        },
        {
          "text": "Sahne Dekoru",
          "isCorrect": false
        },
        {
          "text": "Değişken (Variable)",
          "isCorrect": true
        },
        {
          "text": "Klavye Kablosu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Puan, can ve süre gibi oyun boyunca güncellenen değerleri saklayan yapılara 'Değişken' denir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Algoritma & Akış Şeması' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sıralama kuralları, elips, dikdörtgen, eşkenar dörtgen sembolleri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Algoritma & Akış Şeması' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yılın 6 Büyük Bilişim Kazanımı' kapsamında ele alınan <strong>1. Algoritma</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Problemleri adım adım çözme planıdır (Başla ve Bitir zorunludur).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Algoritma, bilişim sistemlerinde Problemleri adım adım çözme planıdır (Başla ve Bitir zorunlu... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Döngü</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Aynı işi yorulmadan belirlenen sayıda tekrarlar (Kod tasarrufu).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Döngü, Aynı işi yorulmadan belirlenen sayıda tekrarlar (Kod tasarrufu). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sınavda Karşılaşacağınız Özel Soru Tipleri' bölümünde vurgulanan <strong>Yöntem</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Küçük bir karalama kâğıdında adımları tek tek işar... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yöntem asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Büyük Yıl Sonu Bilgi Arenası'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Bireysel Odaklanma' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilişim sınavında sadece bilgisayar kullananlar başarılı olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilişim sınavında dikkatli düşünen ve mantık kuran herkes tam puan alır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sakin ve Dikkatli Olun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sınav kâğıdını aldığınızda heyecanlanmayın; bildiğiniz sorularla başlayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sakin ve Dikkatli Olun prensibi, Sınav kâğıdını aldığınızda heyecanlanmayın; bildiğiniz sorularla başlayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yıllık Bilişim Müfredatını Tamamlama & Sınav Başarısı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Büyük Yılın Sonu: 4. sınıf bilişim müfredatının tüm kazanımlarını başarıyla tamamladık.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Büyük Yılın Sonu' doğrultusunda 4. sınıf bilişim müfredatının tüm kazanımlarını başarıyla tamamladık. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'2. Dönem 2. Yazılı Sınavı Büyük Yıl Sonu Tekrarı' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "40": [
    {
      "question": "Bir geliştiricinin hazırladığı oyunu veya projeyi topluluğa kısa ve etkileyici şekilde tanıtmasına ne ad verilir?",
      "options": [
        {
          "text": "Format Atmak",
          "isCorrect": false
        },
        {
          "text": "Proje Sunumu / Demo (Pitching)",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarı Kapatmak",
          "isCorrect": false
        },
        {
          "text": "Virüs Taraması",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Proje Sunumu ve Pitching', fikri ve çalışan demoyu etkileyici şekilde anlatma becerisidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Pitching (Proje Sunumu) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Hazırladığımız bir oyunu veya icadı 2 dakika içinde ilgi çekici şekilde tanıtma sanatı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Pitching (Proje Sunumu) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Harika Bir Oyun Sunumu Nasıl Yapılır?' kapsamında ele alınan <strong>Giriş (30 sn)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Merhaba! Oyunumun adı 'Siber Macera'. Amacı dünyayı çevre kirliliğinden kurtarmak.'",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Giriş (30 sn), bilişim sistemlerinde 'Merhaba! Oyunumun adı 'Siber Macera'. Amacı dünyayı çevre k... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kodlama Sırları (30 sn)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Bu oyunda değişkenler, döngüler ve haber salma blokları kullandım.'",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kodlama Sırları (30 sn), 'Bu oyunda değişkenler, döngüler ve haber salma blokları kullandım.' açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Akran Geri Bildirimi: 'Sandviç Yöntemi'' bölümünde vurgulanan <strong>Motivasyon</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Arkadaşının emeğini takdir et.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Motivasyon asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sınıf İçi Küçük Geliştiriciler Fuarı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Tahtaya Çık' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılımcılar sadece karanlık odada kod yazar, insanlarla konuşmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Modern yazılımcılar harika sunumlar yapan, takım çalışan ve iletişim ustası liderlerdir!",
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
      "question": "Günün Altın Kuralı olan <strong>'Göz Teması Kurun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yere veya duvara bakmayın; arkadaşlarınıza ve öğretmeninize bakarak konuşun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Göz Teması Kurun prensibi, Yere veya duvara bakmayın; arkadaşlarınıza ve öğretmeninize bakarak konuşun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Proje Sunumu, Beden Dili & İletişim Becerisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Proje Sunumu: Ürettiğimiz eseri dünyaya anlatabilme cesareti ve sanatıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Proje Sunumu' doğrultusunda Ürettiğimiz eseri dünyaya anlatabilme cesareti ve sanatıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Oyunumu Arkadaşlarıma Sunuyorum: Proje Demosu' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "41": [
    {
      "question": "4. sınıf boyunca Bilişim Teknolojileri ve Yazılım dersinde öğrendiğimiz en değerli ilke hangisidir?",
      "options": [
        {
          "text": "Sadece sabahtan akşama kadar bilgisayarda oyun oynamak",
          "isCorrect": false
        },
        {
          "text": "Teknolojiyi tüketen değil; aklıyla, ahlakıyla ve bilgisiyle üreten birey olmak",
          "isCorrect": true
        },
        {
          "text": "Bütün şifreleri herkesle paylaşmak",
          "isCorrect": false
        },
        {
          "text": "Bilgisayara hiç dokunmamak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bilişim dersimizin en büyük hedefi; teknolojiyi sadece tüketen değil, vatanımıza ve insanlığa faydalı projeler üreten bireyler yetiştirmektir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Yolculuğun Zirvesi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 41 haftalık bilişim maratonunun gururla tamamlanması.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Yolculuğun Zirvesi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'1 Yılda Neler Başardınız?' kapsamında ele alınan <strong>Donanım & Yazılım Ustası</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bilgisayarın tüm parçalarını ve milli sistemimiz Pardus'u öğrendiniz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Donanım & Yazılım Ustası, bilişim sistemlerinde Bilgisayarın tüm parçalarını ve milli sistemimiz Pardus'u öğ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Siber Kalkan Sahibi</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Güçlü şifre yapmayı, netiket kurallarını ve güvenli interneti benimsediniz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Siber Kalkan Sahibi, Güçlü şifre yapmayı, netiket kurallarını ve güvenli interneti benimsediniz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'5. Sınıfta Bizi Neler Bekliyor?' bölümünde vurgulanan <strong>Gelecek</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Teknofest yarışmalarına katılan takımlarda yer ala... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Gelecek asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bilişim Şenliği Festival Turnuvası'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Turnuvayı Başlat' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İlkokul bittiğinde bilişim dersi de biter.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilişim hayat boyu süren, her meslekte karşınıza çıkacak en değerli süper güçtür!",
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
      "question": "Günün Altın Kuralı olan <strong>'Kodlamayı Bırakmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yaz tatilinde Scratch üzerinde yeni oyun fikirleri deneyin; öğrendiklerinizi pekiştirin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kodlamayı Bırakmayın prensibi, Yaz tatilinde Scratch üzerinde yeni oyun fikirleri deneyin; öğrendiklerinizi pekiştirin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yıllık Başarıyı Kutlama & Ortaokula Geçiş Vizyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Yıl Sonu Gururu: 41 haftalık MEB müfredatını eksiksiz ve başarıyla tamamladık.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Yıl Sonu Gururu' doğrultusunda 41 haftalık MEB müfredatını eksiksiz ve başarıyla tamamladık. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>'Yıl Sonu Bilişim ve Kodlama Şenliği' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>• <strong>3 defa tekrarla:</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?",
      "options": [
        {
          "text": "A) 21",
          "isCorrect": false
        },
        {
          "text": "B) 23",
          "isCorrect": true
        },
        {
          "text": "C) 25",
          "isCorrect": false
        },
        {
          "text": "D) 19",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!",
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
