/**
 * MEB 3. Sınıf Bilişim Teknolojileri ve Yazılım
 * Haftalık 10 Soruluk Konu Değerlendirme Testleri (Türkiye Yüzyılı Maarif Modeli 2026-2027)
 * Öğretmen: Vahit Keskin
 * 41 Hafta x 10 Soru = 410 Soru
 * Not: 10. Sorular %100 konu uyumlu, derin analiz ve üst düzey düşünme gerektiren zor sorulardır.
 */

const WEEKLY_TESTS = {
  "1": [
    {
      "question": "Kağıt üzerine çizdiğimiz bir resmi bilgisayarın içine aktarmak isteyen bir öğrenci hangi donanım birimini kullanmalıdır?",
      "options": [
        {
          "text": "Yazıcı (Printer)",
          "isCorrect": false
        },
        {
          "text": "Tarayıcı (Scanner)",
          "isCorrect": true
        },
        {
          "text": "Hoparlör",
          "isCorrect": false
        },
        {
          "text": "Kulaklık",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Tarayıcı (Scanner) bir giriş birimidir; fiziksel kağıttaki resmi tarayıp bilgisayar ekranına dijital olarak aktarır.",
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
          "text": "B) Bilginin teknoloji ile işlenmesi, saklanması ve iletilmesi.",
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
      "question": "'Bilgisayarın Duyu Organları: Giriş ve Çıkış' kapsamında ele alınan <strong>Giriş Birimleri (Göz ve Kulak)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Dış dünyadaki bilgiyi (yazı, ses, fotoğraf) bilgisayarın içine aktarır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Giriş Birimleri (Göz ve Kulak), bilişim sistemlerinde Dış dünyadaki bilgiyi (yazı, ses, fotoğraf) bilgisayarın içi... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Çıkış Birimleri (Ağız ve Yüz)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bilgisayarın içinde işlenen bilgiyi bize ses, görüntü veya kağıt baskı olarak sunar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Çıkış Birimleri (Ağız ve Yüz), Bilgisayarın içinde işlenen bilgiyi bize ses, görüntü veya kağıt baskı olarak sunar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Giriş ve Çıkış Parçalarını Karşılaştırıyoruz' bölümünde vurgulanan <strong>Tarayıcı (Scanner)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kağıttaki resmi fotoğraflayıp bilgisayara aktarır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tarayıcı (Scanner) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Donanım Eşleştirme Turnuvası''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Cihazları İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Monitör bilgisayarın beynidir; kasa sadece bir kutudur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Monitör sadece bir çıkış ekranıdır. Bütün hesaplamaları ve işlemleri yapan asıl beyin kasanın içindeki işlemcidir (CPU).",
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
      "question": "Günün Altın Kuralı olan <strong>'Kabloları Asılarak Çekme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kulaklık veya fareyi çıkarırken kablodan değil, plastik ucundan tutarak nazikçe çekin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kabloları Asılarak Çekme prensibi, Kulaklık veya fareyi çıkarırken kablodan değil, plastik ucundan tutarak nazikçe çekin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Giriş ve Çıkış Birimlerini Tanıma, Donanımları Görevlerine Göre Sınıflandırma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Giriş Birimleri: Bilgisayara bilgi ve komut verir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Giriş Birimleri' doğrultusunda Bilgisayara bilgi ve komut verir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Bilişim Dünyasına Merhaba: Giriş ve Çıkış Birimleri' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "2": [
    {
      "question": "Bir pencereyi kapatmadan, sadece geçici olarak ekranın altındaki görev çubuğuna indirmek için hangi düğmeye basılır?",
      "options": [
        {
          "text": "Kırmızı Çarpı (X) Düğmesi",
          "isCorrect": false
        },
        {
          "text": "Eksi (-) Simge Durumuna Küçült Düğmesi",
          "isCorrect": true
        },
        {
          "text": "Kare (□) Ekranı Kapla Düğmesi",
          "isCorrect": false
        },
        {
          "text": "Başlat Menüsü Tuşu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Eksi (-) butonu pencereyi kapatmaz, geçici olarak görev çubuğuna indirir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'İşletim Sistemi (OS)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgisayarın tüm parçalarını ve programlarını yöneten ana yazılım.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'İşletim Sistemi (OS)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Büyük Orkestra Şefi: İşletim Sistemi' kapsamında ele alınan <strong>Donanımları Yönetir</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Klavyeden basılan harfleri ekrana iletir, yazıcıya kağıt yazdırır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Donanımları Yönetir, bilişim sistemlerinde Klavyeden basılan harfleri ekrana iletir, yazıcıya kağıt yaz... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Programları Çalıştırır</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Oyunların, çizim programlarının ve videoların uyumla çalışmasını sağlar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Programları Çalıştırır, Oyunların, çizim programlarının ve videoların uyumla çalışmasını sağlar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Pencere Kontrol Düğmeleri ve Görev Çubuğu' bölümünde vurgulanan <strong>Eksi (-) Düğmesi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Pencereyi kapatmaz, simge durumuna küçültüp görev ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Eksi (-) Düğmesi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Pencere Cambazı''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'İki Program Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Eksi (-) butonuna bastığımızda program tamamen silinir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Eksi butonu programı sadece görev çubuğunda beklemeye alır; üzerine tıklayınca hemen geri gelir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kaydetmeden Çarpıya (X) Basma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yaptığınız çalışmayı kaydetmeden pencereyi kapatırsanız emeğiniz kaybolabilir!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kaydetmeden Çarpıya (X) Basma prensibi, Yaptığınız çalışmayı kaydetmeden pencereyi kapatırsanız emeğiniz kaybolabilir! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İşletim Sistemi Kavramını Kavrama, Masaüstü Öğelerini ve Pencereleri Yönetebilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) İşletim Sistemi: Bilgisayarın patronudur; her şeyi o yönetir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'İşletim Sistemi' doğrultusunda Bilgisayarın patronudur; her şeyi o yönetir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'İşletim Sistemi Nedir? Masaüstü ve Pencereler' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "3": [
    {
      "question": "Yanlışlıkla sildiğimiz çok önemli bir resmi bilgisayardan tamamen kaybolmadan geri getirmek için nereye bakmalıyız?",
      "options": [
        {
          "text": "İnternet Tarayıcısına",
          "isCorrect": false
        },
        {
          "text": "Geri Dönüşüm Kutusuna (Geri Yükle)",
          "isCorrect": true
        },
        {
          "text": "Hesap Makinesine",
          "isCorrect": false
        },
        {
          "text": "Yazıcıya",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Silinen dosyalar Geri Dönüşüm Kutusunda bekler; 'Geri Yükle' diyerek onları eski yerine kurtarabiliriz.",
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
          "text": "B) Resim, müzik, metin veya video gibi her bir dijital belge.",
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
      "question": "'Dijital Düzen: Dosyalar ve Sarı Klasörler' kapsamında ele alınan <strong>Ana Klasör (Kök)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Örn: '3_A_Sinifi_Ali' klasörü masaüstünde durur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Ana Klasör (Kök), bilişim sistemlerinde Örn: '3_A_Sinifi_Ali' klasörü masaüstünde durur.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Alt Klasörler</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İçine 'Resimlerim', 'Ders Notlarım', 'Kodlama Projelerim' açılır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Alt Klasörler, İçine 'Resimlerim', 'Ders Notlarım', 'Kodlama Projelerim' açılır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Klasör İşlemleri ve Geri Dönüşüm Kutusu' bölümünde vurgulanan <strong>1. Sağ Tık</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Masaüstünde veya pencere içinde boş bir yere faren... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 1. Sağ Tık asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kendi Dijital Çantamı Kuruyorum''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Ana Klasörü Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Delete tuşuna bastığım anda dosya uzayda yok olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Dosya önce Geri Dönüşüm Kutusuna gider. Çöp kutusunu boşaltana kadar dosyanızı geri kurtarabilirsiniz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Anlamsız İsimler Verme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 'asdasd' veya 'adsız' yerine 'Turk_Bayragi_Resmi' gibi aradığınızda bulabileceğiniz isimler verin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Anlamsız İsimler Verme prensibi, 'asdasd' veya 'adsız' yerine 'Turk_Bayragi_Resmi' gibi aradığınızda bulabileceğiniz isimler verin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Hiyerarşik Klasör Ağacı Oluşturma, Dosyaları Düzenleme ve Geri Dönüşümü Yönetme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Klasörler: Dosyalarımızın düzenli ve güvenli evidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Klasörler' doğrultusunda Dosyalarımızın düzenli ve güvenli evidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Dosya ve Klasör Yönetimi: Düzenli Dijital Kütüphanem' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "4": [
    {
      "question": "Klavyede gözlerimiz ekrandayken ellerimizin doğru yerde olduğunu anlamamızı sağlayan kabartmalı (çıkıntılı) iki harf hangisidir?",
      "options": [
        {
          "text": "A ve S tuşları",
          "isCorrect": false
        },
        {
          "text": "F ve J tuşları",
          "isCorrect": true
        },
        {
          "text": "Space ve Enter tuşları",
          "isCorrect": false
        },
        {
          "text": "K ve L tuşları",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> F ve J tuşlarının üzerindeki minik kabartmalar, gözümüzü ekrandan ayırmadan ellerimizi 'Ev Sırası'na yerleştirmemizi sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Q ve F Klavye Farkı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Türkçeye en uygun tasarlanan F klavye ve dünyada yaygın Q klavye.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Q ve F Klavye Farkı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Parmaklarımızın Yuvası: Ev Sırası' kapsamında ele alınan <strong>Sol El (A - S - D - F)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Serçe: A, Yüzük: S, Orta: D, İşaret: F (çıkıntılı tuş).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sol El (A - S - D - F), bilişim sistemlerinde Serçe: A, Yüzük: S, Orta: D, İşaret: F (çıkıntılı tuş).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sağ El (J - K - L - Ş)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İşaret: J (çıkıntılı tuş), Orta: K, Yüzük: L, Serçe: Ş.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sağ El (J - K - L - Ş), İşaret: J (çıkıntılı tuş), Orta: K, Yüzük: L, Serçe: Ş. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hızlı ve Doğru Yazmanın 3 Kuralı' bölümünde vurgulanan <strong>Bilekleri Havada Tut</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bileklerinizi masaya yapıştırmayın; hafif kubbe şe... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Bilekleri Havada Tut asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Harf Avcısı Oyunu''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Parmakları Yerleştir' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Klavyedeki harfler rastgele dizilmiştir, hiçbir mantığı yoktur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Q klavye daktilo kollarının sıkışmaması için, F klavye ise Türkçede en sık geçen harflerin en güçlü parmaklara gelmesi için bilimsel olarak tasarlanmıştır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tek Parmakla Yazma Alışkanlığı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sadece işaret parmağıyla yazmaya alışırsanız ileride hızlanamazsınız; tüm parmakları alıştırın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tek Parmakla Yazma Alışkanlığı prensibi, Sadece işaret parmağıyla yazmaya alışırsanız ileride hızlanamazsınız; tüm parmakları alıştırın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'On Parmak Klavye Dizilimini Kavrama, Ev Sırasını (F-J) Doğru Kullanabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Ev Sırası: Parmaklarımızın yuvasıdır (A-S-D-F ve J-K-L-Ş).",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Ev Sırası' doğrultusunda Parmaklarımızın yuvasıdır (A-S-D-F ve J-K-L-Ş). olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Klavye Ustalığı: On Parmak Temelleri & Q/F Klavye' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "5": [
    {
      "question": "Bilgisayarda yanlışlıkla sildiğimiz bir yazıyı veya hatalı yaptığımız son adımı hemen geri almak için hangi kısayol tuşunu kullanırız?",
      "options": [
        {
          "text": "Ctrl + C",
          "isCorrect": false
        },
        {
          "text": "Ctrl + Z (Geri Al)",
          "isCorrect": true
        },
        {
          "text": "Alt + F4",
          "isCorrect": false
        },
        {
          "text": "Shift + Space",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Ctrl + Z bilgisayar dünyasının 'zaman makinesi'dir; yaptığınız son hatayı anında geri alır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Çift ve Üç Karakterli Tuşlar' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bir tuşun altındaki, üstündeki ve sağındaki işaretlerin sırrı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Çift ve Üç Karakterli Tuşlar' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Klavyenin Gizli Katmanları: Shift ve AltGr' kapsamında ele alınan <strong>Doğrudan Basınca</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Tuşun sol altındaki ana harf veya sayı çıkar (Örn: 2).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Doğrudan Basınca, bilişim sistemlerinde Tuşun sol altındaki ana harf veya sayı çıkar (Örn: 2).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Shift ile Basınca</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Tuşun sol üstündeki sembol çıkar (Örn: Shift + 2 ➔ ' kesme işareti).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Shift ile Basınca, Tuşun sol üstündeki sembol çıkar (Örn: Shift + 2 ➔ ' kesme işareti). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'En Çok Kullanılan Sihirli Kısayollar' bölümünde vurgulanan <strong>Ctrl + C (Copy - Kopyala)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Seçili yazının bir kopyasını hafızaya alır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Ctrl + C (Copy - Kopyala) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Sihirli Semboller ve Kopyalama''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'E-Posta İşaretini Çıkar' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kopyalanan bir yazıyı sadece 1 defa yapıştırabiliriz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Bir kez Ctrl+C ile kopyaladığınız bir şeyi istediğiniz kadar, yüzlerce kez Ctrl+V ile yapıştırabilirsiniz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Aynı Anda Basma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Ctrl+C yaparken önce Ctrl'ye basılı tutun, elinizi çekmeden C'ye bir kez dokunup ikisini de bırakın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Aynı Anda Basma prensibi, Ctrl+C yaparken önce Ctrl'ye basılı tutun, elinizi çekmeden C'ye bir kez dokunup ikisini de bırakın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Üst ve Alt Karakterleri (@, ?, !, +, -) Yazabilme, Temel Klavye Kısayollarını Kullanma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Shift: Üst karakterleri ve büyük harfleri açar.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Shift' doğrultusunda Üst karakterleri ve büyük harfleri açar. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Özel Karakterler ve Sihirli Kısayol Tuşları' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "6": [
    {
      "question": "Bilgisayar veya tablet başında göz sağlığımızı korumak için önerilen '20-20-20 Kuralı' ne anlama gelir?",
      "options": [
        {
          "text": "20 saat oyun oyna, 20 saat uyu",
          "isCorrect": false
        },
        {
          "text": "Her 20 dakikada bir, 6 metre uzağa 20 saniye bak",
          "isCorrect": true
        },
        {
          "text": "Günde 20 bardak çay iç",
          "isCorrect": false
        },
        {
          "text": "Klavyenin 20 tuşuna aynı anda bas",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Her 20 dakikada bir, 6 metre (20 fit) uzağa 20 saniye bakmak göz kaslarımızı dinlendirir ve miyop riskini azaltır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '20-20-20 Kuralı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Her 20 dakikada bir, 20 fit (6 metre) uzağa, 20 saniye boyunca bakma.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '20-20-20 Kuralı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Gözlerimizin Koruyucu Meleği: 20-20-20 Kuralı' kapsamında ele alınan <strong>Her 20 Dakikada Bir</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Zamanlayıcınız çaldığında çalışmanıza kısa bir nefes molası verin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Her 20 Dakikada Bir, bilişim sistemlerinde Zamanlayıcınız çaldığında çalışmanıza kısa bir nefes molası ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>20 Fit (6 Metre) Uzağa Bak</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Pencereden dışarıya, gökyüzündeki bir buluta veya uzaktaki bir ağaca bakın.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 20 Fit (6 Metre) Uzağa Bak, Pencereden dışarıya, gökyüzündeki bir buluta veya uzaktaki bir ağaca bakın. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Mavi Işık Tehlikesi ve Masa Başı Molaları' bölümünde vurgulanan <strong>Gündüz Işığı Taklidi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Ekranlar güneş ışığı gibi parlak mavi ışık yayar; ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Gündüz Işığı Taklidi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Göz ve Beden Dinlendirme''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Elleri Gözlere Kapat (Palming)' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Gözlerimi hiç kırpmadan oyuna odaklanırsam daha iyi oynarım.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Göz kırpmamak gözün kurumasına, kızarmasına ve bulanık görmesine yol açar; bu yüzden bilinçli olarak sık sık kırpmalıyız.",
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
      "question": "Günün Altın Kuralı olan <strong>'Yatakta Telefon / Tablet Yasak'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Uyumadan en az 1 saat önce tüm ekranları kapatıp kitap okumaya geçin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Yatakta Telefon / Tablet Yasak prensibi, Uyumadan en az 1 saat önce tüm ekranları kapatıp kitap okumaya geçin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Teknoloji Kullanımında Sağlık Kurallarını Uygulama, 20-20-20 Kuralını Hayata Geçirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 20-20-20 Kuralı: Gözlerimizin en sadık dostudur.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '20-20-20 Kuralı' doğrultusunda Gözlerimizin en sadık dostudur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Dijital Sağlık: 20-20-20 Kuralı ve Ekran Dengesi' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "7": [
    {
      "question": "Koyu kırmızı renkli bir zemin üzerine tasarlanan bir Cumhuriyet afişinde, başlığın en net ve kolay okunabilmesi için hangi renk harfler seçilmelidir?",
      "options": [
        {
          "text": "Koyu Kahverengi",
          "isCorrect": false
        },
        {
          "text": "Bembeyaz veya Parlak Altın Sarısı",
          "isCorrect": true
        },
        {
          "text": "Bordo",
          "isCorrect": false
        },
        {
          "text": "Koyu Gri",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Koyu zemin üzerine beyaz veya sarı gibi açık renkler kullanıldığında yüksek 'kontrast' oluşur ve yazı uzaktan bile rahatça okunur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '29 Ekim 1923 Ruhu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Gazi Mustafa Kemal Atatürk ve milletimizin bağımsızlık zaferi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '29 Ekim 1923 Ruhu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Cumhuriyetimizin 103. Yılına Özel Dijital Afiş' kapsamında ele alınan <strong>1. Ana Başlık (En Büyük Yazı)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Cumhuriyet 103 Yaşında!' gibi uzaktan bile okunan net yazı.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Ana Başlık (En Büyük Yazı), bilişim sistemlerinde 'Cumhuriyet 103 Yaşında!' gibi uzaktan bile okunan net yazı.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Odak Görseli</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Şanlı Türk Bayrağı, Atatürk silüeti veya coşkulu çocuklar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Odak Görseli, Şanlı Türk Bayrağı, Atatürk silüeti veya coşkulu çocuklar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Tasarımda Renk Kontrastı ve Yazı Boyutu' bölümünde vurgulanan <strong>Koyu Zemine Açık Yazı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kırmızı veya siyah zemin üzerinde beyaz ve sarı ha... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Koyu Zemine Açık Yazı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Cumhuriyet Afişimi Kodluyorum''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kırmızı Zemin Oluştur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir afişte ne kadar çok renk ve yazı tipi kullanırsak o kadar güzel olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Bir tasarımda en fazla 2 veya 3 uyumlu renk ve en fazla 2 yazı tipi (font) kullanmak profesyonel tasarımın kuralıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Afişi Çok Doldurma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Her boşluğa bir şey sıkıştırmak afişi bozar; sade tasarımlar her zaman daha güçlüdür.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Afişi Çok Doldurma prensibi, Her boşluğa bir şey sıkıştırmak afişi bozar; sade tasarımlar her zaman daha güçlüdür. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Cumhuriyet Değerlerini Görselleştirme, Afiş Tasarım İlkelerini Uygulayabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Afiş: Büyük başlık, güçlü görsel ve kısa sloganın birleşimidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Afiş' doğrultusunda Büyük başlık, güçlü görsel ve kısa sloganın birleşimidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '29 Ekim Cumhuriyet Bayramı: Dijital Afiş Tasarımı' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "8": [
    {
      "question": "Aşağıdakilerden hangisi bir 'ÇIKIŞ BİRİMİ'dir?",
      "options": [
        {
          "text": "Mikrofon",
          "isCorrect": false
        },
        {
          "text": "Klavye",
          "isCorrect": false
        },
        {
          "text": "Hoparlör",
          "isCorrect": true
        },
        {
          "text": "Web Kamerası",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Hoparlör bilgisayardaki sesleri dışarıya veren bir çıkış (output) birimidir; mikrofon, klavye ve kamera ise giriş birimidir.",
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
          "text": "B) Donanım, yazılım, dosya yönetimi ve sağlık soruları.",
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
      "question": "'İlk 7 Haftanın Bilişim Zirvesi' kapsamında ele alınan <strong>1. Sistem Donanımı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Giriş (Tarayıcı, mikrofon) ve Çıkış (Yazıcı, monitör) birimlerini biliyoruz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Sistem Donanımı, bilişim sistemlerinde Giriş (Tarayıcı, mikrofon) ve Çıkış (Yazıcı, monitör) biriml... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. İşletim Sistemi & Pencereler</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Masaüstünü, görev çubuğunu ve (-, □, X) butonlarını ustalıkla yönetiyoruz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. İşletim Sistemi & Pencereler, Masaüstünü, görev çubuğunu ve (-, □, X) butonlarını ustalıkla yönetiyoruz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hızlı Soru Köşesi: Kendini Sına!' bölümünde vurgulanan <strong>Soru 1</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kağıttaki resmi bilgisayara aktaran cihaz? (Tarayı... amacına hizmet eder.",
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
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Büyük Bilişim Bilgi Şöleni''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Takımları Oluştur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
          "text": "A) Sınavlar öğrendiklerimizin ne kadarını anladığımızı görüp eksiklerimizi tamamlamamız için bir öğrenme fırsatıdır.",
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
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İlk 7 Haftanın Bilişim Kazanımlarını Ölçme, Analiz Etme ve Pekiştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Donanım & Yazılım: Birbirini tamamlayan iki ayrılmaz parçadır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Donanım & Yazılım' doğrultusunda Birbirini tamamlayan iki ayrılmaz parçadır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '1. Dönem 1. Değerlendirme & Bilişim Bilgi Yarışması' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "9": [
    {
      "question": "Kelime işlemci programında yazılan bir şiirin başlığını sayfanın tam ortasına yerleştirmek için hangi hizalama düğmesine basılmalıdır?",
      "options": [
        {
          "text": "Sola Yasla",
          "isCorrect": false
        },
        {
          "text": "Ortala (Center)",
          "isCorrect": true
        },
        {
          "text": "Sağa Yasla",
          "isCorrect": false
        },
        {
          "text": "İki Yana Yasla",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Ortala' düğmesi seçili başlığı veya şiir dizelerini sayfanın tam ortasına hizalar.",
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
          "text": "B) Gazi Mustafa Kemal Atatürk'ün fikirleri, bilime ve çocuklara verdiği değer.",
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
      "question": "'Kelime İşlemci Dünyası ve Yazı Biçimlendirme' kapsamında ele alınan <strong>1. Font (Yazı Tipi)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Harflerin çizim stilini belirler (Örn: Ciddi, eğlenceli veya el yazısı).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Font (Yazı Tipi), bilişim sistemlerinde Harflerin çizim stilini belirler (Örn: Ciddi, eğlenceli veya... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Punto (Yazı Boyutu)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Başlıklar için 18-24 punto, gövde metni için 12-14 punto idealdir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Punto (Yazı Boyutu), Başlıklar için 18-24 punto, gövde metni için 12-14 punto idealdir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Metin Seçme ve Hizalama Düğmeleri' bölümünde vurgulanan <strong>Sol Tık ile Sürükle</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Değiştirmek istediğiniz kelimenin başından sonuna ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sol Tık ile Sürükle asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: '10 Kasım Anı Belgesi Hazırlama''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Programı Başlat' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazıyı seçmeden de font boyutunu değiştirirsem bütün yazı kendiliğinden büyür.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Bilgisayar hangi kelimeyi değiştirmek istediğinizi bilemez. Önce fareyle kelimeyi seçmeli, sonra boyuta tıklamalısınız.",
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
      "question": "Günün Altın Kuralı olan <strong>'CapsLock Tuşuna Dikkat'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Bütün metni büyük harfle yazmak bağırmak gibidir; sadece başlıkları büyük yapın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> CapsLock Tuşuna Dikkat prensibi, Bütün metni büyük harfle yazmak bağırmak gibidir; sadece başlıkları büyük yapın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kelime İşlemci Programını Açma, Metin Yazma, Font ve Paragraf Biçimlendirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Seç ve Uygula: Biçimlendirmek istediğin yazıyı önce mutlaka seçmelisin.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Seç ve Uygula' doğrultusunda Biçimlendirmek istediğin yazıyı önce mutlaka seçmelisin. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '10 Kasım Atatürk'ü Anma & Kelime İşlemciye Giriş' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "10": [
    {
      "question": "Kelime işlemci belgesine eklediğimiz bir fotoğrafın yazıları itip sayfayı bozmaması ve yazıların resmin etrafında güzelce akması için hangi özellik kullanılır?",
      "options": [
        {
          "text": "Yazı Tipi Değiştirme",
          "isCorrect": false
        },
        {
          "text": "Metni Kaydır (Text Wrap - Kare / Sıkı)",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarı Kapat",
          "isCorrect": false
        },
        {
          "text": "Yazıcıyı Başlat",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Metni Kaydır' (Text Wrap) seçeneği sayesinde yazılar resmin etrafında kusursuzca akar ve profesyonel bir dergi sayfası oluşur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Tipografi Sanatı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Harflerin sadece ses değil, görsel bir duygu olduğunu keşfetme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Tipografi Sanatı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Harflerin Büyüsü: Tipografi ve Sanat' kapsamında ele alınan <strong>Duyguya Uygun Font</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bir korku hikayesiyle bir neşeli uzay masalı aynı fontla yazılmaz!",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Duyguya Uygun Font, bilişim sistemlerinde Bir korku hikayesiyle bir neşeli uzay masalı aynı fontla yaz... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>İlk Harfi Büyütme (Baş Harf)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Masalların başındaki 'BİR VARMIŞ...' gibi ilk harfi devasa yapma.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> İlk Harfi Büyütme (Baş Harf), Masalların başındaki 'BİR VARMIŞ...' gibi ilk harfi devasa yapma. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Resim Eklerken Metin Kaydırma Seçenekleri' bölümünde vurgulanan <strong>Metinle Aynı Hizaya</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Resim bir harf gibi davranır; sayfa düzeni kayabil... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Metinle Aynı Hizaya asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kendi Masal Kitabımı Yapıyorum''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Bir Masal Konusu Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kelime işlemciler sadece düz siyah-beyaz resmi yazılar yazmak içindir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Kelime işlemcilerle dergiler, renkli afişler, davetiyeler ve resimli masal kitapları tasarlayabilirsiniz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Resmin Boyutunu Köşelerden Değiştir'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Resmi büyütüp küçültürken kenarlardan değil, mutlaka köşelerden çekin; böylece şekli bozulmaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Resmin Boyutunu Köşelerden Değiştir prensibi, Resmi büyütüp küçültürken kenarlardan değil, mutlaka köşelerden çekin; böylece şekli bozulmaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Metin ve Görseli Bir Arada Kullanarak Özgün Bir Hikaye Sayfası Oluşturabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Tipografi: Harflerin görsel sanatıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Tipografi' doğrultusunda Harflerin görsel sanatıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '1. Dönem Ara Tatil: Dijital Tipografi ve Sanat Atölyesi' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "11": [
    {
      "question": "Kelime işlemcide yeni bir paragrafa başlarken metni tam 1 parmak içeri (paragraf başı) kaydırmak için klavyedeki hangi tuşa basılır?",
      "options": [
        {
          "text": "Caps Lock",
          "isCorrect": false
        },
        {
          "text": "Tab Tuşu (⇥)",
          "isCorrect": true
        },
        {
          "text": "Esc Tuşu",
          "isCorrect": false
        },
        {
          "text": "Backspace Tuşu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Tab tuşu imleci standart paragraf girintisi kadar (1.25 cm) tek tıkla ileri kaydırır.",
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
          "text": "B) Başöğretmen Gazi Mustafa Kemal Atatürk ve tüm öğretmenlerimize minnet.",
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
      "question": "'Dijital Mektup Sanatı ve Paragraf Düzeni' kapsamında ele alınan <strong>1. Hitap (Sol Üst)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Sevgili Öğretmenim,' ifadesi ve sonrasında virgül.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Hitap (Sol Üst), bilişim sistemlerinde 'Sevgili Öğretmenim,' ifadesi ve sonrasında virgül.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Paragraf Girintisi (Tab)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Her paragrafa başlarken klavyedeki 'Tab' tuşuyla 1 parmak içeriden başlama.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Paragraf Girintisi (Tab), Her paragrafa başlarken klavyedeki 'Tab' tuşuyla 1 parmak içeriden başlama. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Tab Tuşu ve Satır Aralıkları' bölümünde vurgulanan <strong>Tek Tıkla Girinti</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Klavyenin solundaki iki oklu 'Tab' tuşu imleci tam... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tek Tıkla Girinti asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Öğretmenime Dijital Mektup''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Hitap ve Paragraf' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Her satırın sonunda Enter tuşuna basmak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Kelime işlemciler kelimeyi otomatik alt satıra kaydırır. Enter'a sadece yeni bir paragrafa geçerken basılır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Enter Tuşunu Gereksiz Kullanma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Satır bittiğinde kelime işlemci kendiliğinden alt satıra geçer; sadece yeni paragrafa başlarken Enter'a basın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Enter Tuşunu Gereksiz Kullanma prensibi, Satır bittiğinde kelime işlemci kendiliğinden alt satıra geçer; sadece yeni paragrafa başlarken Enter'a basın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Resmi/Samimi Mektup Düzenini Kavrama, Satır ve Paragraf Boşluklarını Ayarlayabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Mektup Düzeni: Hitap, paragraf girintisi ve sağ alt imza ile oluşur.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Mektup Düzeni' doğrultusunda Hitap, paragraf girintisi ve sağ alt imza ile oluşur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '24 Kasım Öğretmenler Günü: Mektup ve Şiir Dizgisi' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "12": [
    {
      "question": "Kelime işlemcide hazırladığımız bir tabloda, yatay ve dikey çizgilerin kesişmesiyle oluşan ve içine yazı yazdığımız her bir kutucuğa ne ad verilir?",
      "options": [
        {
          "text": "Sütun",
          "isCorrect": false
        },
        {
          "text": "Satır",
          "isCorrect": false
        },
        {
          "text": "Hücre (Cell)",
          "isCorrect": true
        },
        {
          "text": "Paragraf",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Satır ve sütunun kesiştiği her bir bağımsız kutucuğa 'Hücre' (Cell) denir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Tablo Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgileri düzenli gösteren satır ve sütun ızgarası.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Tablo Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bilginin Düzen Kutusu: Tablolar ve Hücreler' kapsamında ele alınan <strong>Sütun (Column - Dikey)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Yukarıdan aşağıya inen dikey çizgiler (Örn: Günler).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sütun (Column - Dikey), bilişim sistemlerinde Yukarıdan aşağıya inen dikey çizgiler (Örn: Günler).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Satır (Row - Yatay)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Soldan sağa uzanan yatay katlar (Örn: Ders saatleri).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Satır (Row - Yatay), Soldan sağa uzanan yatay katlar (Örn: Ders saatleri). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Madde İşaretleri ve Numaralandırma' bölümünde vurgulanan <strong>Kullanım Yeri</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Alışveriş listesi, sevdiğimiz oyunlar, donanım par... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kullanım Yeri asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Renkli Ders Programım''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Tablo Ekle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Tablodaki satır ve sütun sayısı baştan belirlenir ve sonradan asla değiştirilemez.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yanlış! İstediğiniz an sağ tıklayarak yeni satır veya sütun ekleyebilir ya da fazlalıkları silebilirsiniz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tablo Sütun Genişliği'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Çizgilerin üzerine gelip çift yönlü ok çıktığında fareyle sürükleyerek sütunu daraltıp genişletebilirsiniz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tablo Sütun Genişliği prensibi, Çizgilerin üzerine gelip çift yönlü ok çıktığında fareyle sürükleyerek sütunu daraltıp genişletebilirsiniz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Satır ve Sütunlardan Oluşan Tablo Tasarlama, Madde İşaretli Listeler Oluşturma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Tablolar: Satır ve sütunlarla bilgiyi en düzenli gösteren araçtır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Tablolar' doğrultusunda Satır ve sütunlarla bilgiyi en düzenli gösteren araçtır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Tablolar ve Listeler: Haftalık Ders Programım' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "13": [
    {
      "question": "Fotoğraf makinesiyle çektiğimiz veya Paint'te çizdiğimiz bir 'RESİM' dosyasının uzantısı aşağıdakilerden hangisi olabilir?",
      "options": [
        {
          "text": ".mp3",
          "isCorrect": false
        },
        {
          "text": ".jpg veya .png",
          "isCorrect": true
        },
        {
          "text": ".docx",
          "isCorrect": false
        },
        {
          "text": ".mp4",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> '.jpg' ve '.png' görsel/resim dosyalarının evrensel uzantılarıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dosya Uzantısı Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Dosya adının sonundaki nokta (.) ve 3-4 harflik gizli kimlik kodu.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dosya Uzantısı Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dosyaların Soyadları: Uzantılar Dünyası' kapsamında ele alınan <strong>1. Dosya Adı (Ön Ad)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bizim verdiğimiz isim: 'istiklal_marsi'",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Dosya Adı (Ön Ad), bilişim sistemlerinde Bizim verdiğimiz isim: 'istiklal_marsi'... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Nokta (.)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Ad ile soyadı ayıran sınır çizgisi.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Nokta (.), Ad ile soyadı ayıran sınır çizgisi. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Veri Kapasite Merdiveni: KB, MB ve GB' bölümünde vurgulanan <strong>Byte (B)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Tek bir harf veya karakter (Örn: 'A' harfi = 1 Byt... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Byte (B) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Uzantı Dedektifliği''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Özellikler Penceresini Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir metin belgesi ile 2 saatlik bir çizgi film bilgisayarda aynı yeri kaplar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Bir metin belgesi birkaç Kilobyte (KB) iken, 2 saatlik bir video binlerce Megabyte veya birkaç Gigabyte (GB) yer kaplar.",
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
      "question": "Günün Altın Kuralı olan <strong>'Uzantıyı Yanlışlıkla Silme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dosyayı yeniden adlandırırken noktadan sonraki uzantıyı silerseniz dosya bozulabilir ve açılmayabilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Uzantıyı Yanlışlıkla Silme prensibi, Dosyayı yeniden adlandırırken noktadan sonraki uzantıyı silerseniz dosya bozulabilir ve açılmayabilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dosya Uzantılarından Dosya Türünü Tanıma, Temel Kapasite Birimlerini Kavrama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Dosya Uzantısı: Dosyanın ne işe yaradığını söyleyen soyadıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Dosya Uzantısı' doğrultusunda Dosyanın ne işe yaradığını söyleyen soyadıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Dosya Uzantıları ve Türleri: Soyadlar Dünyası' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "14": [
    {
      "question": "Bilgisayara taktığımız bir USB Flash belleği işimiz bittiğinde kasanın zarar görmemesi ve verilerin bozulmaması için nasıl çıkarmalıyız?",
      "options": [
        {
          "text": "Çok hızlı bir şekilde aniden çekerek",
          "isCorrect": false
        },
        {
          "text": "'Donanımı Güvenle Kaldır' seçeneğine tıklayıp uyarı gelince nazikçe çekerek",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarın monitörünü kapatıp çekerek",
          "isCorrect": false
        },
        {
          "text": "Fişi prizden çekerek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Donanımı Güvenle Kaldır' komutu belleğe veri yazımını güvenle tamamlar ve dosyaların bozulmasını engeller.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Yedekleme (Backup) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Önemli dosyaların ikinci bir kopyasını başka bir güvenli yerde saklama.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Yedekleme (Backup) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Can Simidi: Veri Yedekleme' kapsamında ele alınan <strong>1. Cihaz Bozulabilir</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bilgisayarın sabit diski eskiyip çalışmayabilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Cihaz Bozulabilir, bilişim sistemlerinde Bilgisayarın sabit diski eskiyip çalışmayabilir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Kazalar Olabilir</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bilgisayar düşebilir, ıslanabilir veya kaybolabilir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Kazalar Olabilir, Bilgisayar düşebilir, ıslanabilir veya kaybolabilir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bulut Depolama ve USB Bellek Karşılaştırması' bölümünde vurgulanan <strong>Avantajı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde İnternet bağlantısı olmadan da her bilgisayarda an... amacına hizmet eder.",
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
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Güvenli Çıkar ve Yedekle''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'USB'yi Kasaya Tak' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bulut depolamadaki dosyalar yağmur yağınca gökyüzünden dökülüp kaybolabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bulut kelimesi sadece bir benzetmedir! Aslında dosyalar devasa veri merkezlerinde, yer altındaki süper bilgisayarlarda korunur.",
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
      "question": "Günün Altın Kuralı olan <strong>'Lap Diye Çekme!'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dosya yazılırken USB belleği birden çekerseniz içindeki tüm veriler yanabilir ve silinebilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Lap Diye Çekme! prensibi, Dosya yazılırken USB belleği birden çekerseniz içindeki tüm veriler yanabilir ve silinebilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Yedekleme Kavramını Anlama, Dosyaları USB veya Buluta Güvenle Aktarma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Yedekleme: Emeğimizi felaketlere karşı koruyan sigortamızdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Yedekleme' doğrultusunda Emeğimizi felaketlere karşı koruyan sigortamızdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Veri Yedekleme ve Bulut Depolama' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "15": [
    {
      "question": "Bir araştırma ödevi yaparken aşağıdaki web sitesi uzantılarından hangisi 'DEVLET VE RESMİ EĞİTİM KURUMLARINA' ait en güvenilir kaynaktır?",
      "options": [
        {
          "text": ".xyz",
          "isCorrect": false
        },
        {
          "text": ".gov.tr veya .edu.tr",
          "isCorrect": true
        },
        {
          "text": ".com",
          "isCorrect": false
        },
        {
          "text": ".net",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> '.gov' devlet kurumlarını, '.edu' ise üniversiteleri temsil eder ve bilgi güvenliği en yüksek sitelerdir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Arama Motoru Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Google, Bing, Yaani gibi internet kütüphanecileri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Arama Motoru Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Dedektif: Anahtar Kelimeler' kapsamında ele alınan <strong>Acemi Arama</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Öğretmenim bana kutup ayılarını sordu onlar nerede yaşar acaba?' (Çok uzun ve verimsiz).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Acemi Arama, bilişim sistemlerinde 'Öğretmenim bana kutup ayılarını sordu onlar nerede yaşar ac... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Usta Bilişimci Araması</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Kutup ayıları yaşam alanları beslenme özellikleri' (Net ve kesin).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Usta Bilişimci Araması, 'Kutup ayıları yaşam alanları beslenme özellikleri' (Net ve kesin). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Web Sitelerinin Güvenlik Rozetleri: Uzantılar' bölümünde vurgulanan <strong>.gov.tr (Government - Devlet)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bakanlıklar, resmi kurumlar ve belediyeler (Örn: m... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> .gov.tr (Government - Devlet) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Doğru Bilgi Avcısı''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Anahtar Kelimeleri Belirle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İnternette yazan her şey mutlaka doğrudur çünkü oraya sadece uzmanlar yazar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Büyük bir yanılgı! İnternette herhangi biri hiçbir denetim olmadan web sitesi açıp yanlış bilgi yazabilir; bu yüzden eleştirel düşünmeliyiz.",
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
      "question": "Günün Altın Kuralı olan <strong>'İlk Çıkan Reklamlara Tıklama'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Arama sonuçlarının en üstünde 'Sponsorlu' veya 'Reklam' yazan linkleri atlayıp gerçek sonuçlara bakın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> İlk Çıkan Reklamlara Tıklama prensibi, Arama sonuçlarının en üstünde 'Sponsorlu' veya 'Reklam' yazan linkleri atlayıp gerçek sonuçlara bakın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İnternette Etkili Arama Yapabilme, Güvenilir (.edu, .gov, .org) Siteleri Ayırt Edebilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Anahtar Kelimeler: Arama motorunda doğru sonuca götüren pusuladır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Anahtar Kelimeler' doğrultusunda Arama motorunda doğru sonuca götüren pusuladır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'İnternette Doğru Bilgiye Ulaşma ve Arama Stratejileri' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "16": [
    {
      "question": "İnternette karşımıza çıkan 'ŞOK ŞOK ŞOK! Tıklayan herkese 1000 TL hediye!' şeklindeki yanıltıcı ve abartılı paylaşımlara ne ad verilir?",
      "options": [
        {
          "text": "EBA Canlı Dersi",
          "isCorrect": false
        },
        {
          "text": "Tıklama Tuzağı (Clickbait / Sahte İçerik)",
          "isCorrect": true
        },
        {
          "text": "Bilimsel Araştırma",
          "isCorrect": false
        },
        {
          "text": "Yazılım Güncellemesi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Tıklama tuzakları (Clickbait) insanları meraklandırıp tuzağa çekmek için uydurulan sahte başlıklardır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Sahte Haber (Fake News) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnsanları kandırmak, korkutmak veya para kazanmak için uydurulan yalanlar.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Sahte Haber (Fake News) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Görünüşe Aldanma: Sahte Haber Tuzakları' kapsamında ele alınan <strong>1. Aşırı Abartılı Başlık</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Dünyanın sonu geldi!', 'Bunu gören herkes bayıldı!' gibi çığlık atan başlıklar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Aşırı Abartılı Başlık, bilişim sistemlerinde 'Dünyanın sonu geldi!', 'Bunu gören herkes bayıldı!' gibi çı... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Kaynak Yoktur</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Haberde uzman ismi, tarih veya resmi kurum adı bulunmaz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Kaynak Yoktur, Haberde uzman ismi, tarih veya resmi kurum adı bulunmaz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sahte Haberi Önleme: Teyit Dedektifliği' bölümünde vurgulanan <strong>1. Tarihe Bak</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 10 yıl önceki eski bir olay yeni gibi paylaşılmış ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 1. Tarihe Bak asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Yalan mı Gerçek mi Oyunu''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Haberi Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir fotoğraf varsa o haber kesinlikle doğrudur çünkü fotoğraf yalan söyleyemez.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Büyük bir yanılgı! Günümüzde Photoshop ve Yapay Zekâ (AI) araçlarıyla var olmayan olayların bile gerçekçi fotoğrafları kolayca üretilebilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Heyecana Kapılma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Seni çok korkutan veya aşırı heyecanlandıran haberler genellikle tıklama tuzağıdır; sakin kal.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Heyecana Kapılma prensibi, Seni çok korkutan veya aşırı heyecanlandıran haberler genellikle tıklama tuzağıdır; sakin kal. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sahte Haberleri (Fake News) ve Tıklama Tuzaklarını Tanıma, Dijital Şüphecilik Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Her Gördüğüne İnanma: Eleştirel düşün ve kaynağı araştır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Her Gördüğüne İnanma' doğrultusunda Eleştirel düşün ve kaynağı araştır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Bilgi Kirliliği ve Sahte Haberler (Fake News)' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "17": [
    {
      "question": "Bir Word belgesini başka bir bilgisayarda veya cep telefonunda açtığımızda yazıların ve resimlerin ASLA KAYMAMASI için hangi formatta dışa aktarmalıyız?",
      "options": [
        {
          "text": ".mp3",
          "isCorrect": false
        },
        {
          "text": ".pdf",
          "isCorrect": true
        },
        {
          "text": ".txt",
          "isCorrect": false
        },
        {
          "text": ".exe",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> PDF formatı belgenin düzenini adeta dondurur; hangi cihazda açılırsa açılsın asla kaymaz ve bozulmaz.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Siber Sınav Arenası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Kelime işlemciden dosya uzantılarına tüm 1. dönem konuları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Siber Sınav Arenası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'1. Dönemin Büyük Bilişim Muhakemesi' kapsamında ele alınan <strong>Kelime İşlemci & Tablolar</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Font, punto, hizalama, Tab tuşu, satır/sütun ve hücre mantığı.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kelime İşlemci & Tablolar, bilişim sistemlerinde Font, punto, hizalama, Tab tuşu, satır/sütun ve hücre mantığ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Dosya Uzantıları</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) .docx, .pdf, .jpg, .png, .mp3, .mp4 kimlikleri.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Dosya Uzantıları, .docx, .pdf, .jpg, .png, .mp3, .mp4 kimlikleri. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hızlı Sınav Hazırlık Soruları' bölümünde vurgulanan <strong>Soru 1</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Tabloda yatay ve dikey çizgilerin kesiştiği kutucu... amacına hizmet eder.",
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
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Siber Kalkan Turnuvası''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Senaryoları Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sınav bittiğinde bilişim öğrenmemiz de sona erer.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilişim ve teknoloji hayat boyu devam eden, her gün yeni şeyler öğreneceğimiz heyecan dolu bir serüvendir!",
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
      "question": "Günün Altın Kuralı olan <strong>'Tüm Seçenekleri Oku'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) A şıkkını görür görmez atlamayın; B, C ve D şıklarını da mutlaka okuyun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tüm Seçenekleri Oku prensibi, A şıkkını görür görmez atlamayın; B, C ve D şıklarını da mutlaka okuyun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'2. ve 3. Temanın Tüm Bilişim Kazanımlarını Değerlendirme ve Pekiştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Büyük Başarı: 1. dönemin tüm konularını başarıyla tamamladık.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Büyük Başarı' doğrultusunda 1. dönemin tüm konularını başarıyla tamamladık. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '1. Dönem 2. Değerlendirme & Siber Dedektif' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "18": [
    {
      "question": "İnternet ortamında mesajlaşırken veya e-posta yazarken BÜTÜN KELİMELERİ BÜYÜK HARFLERLE YAZMAK ne anlama gelir?",
      "options": [
        {
          "text": "Çok kibar ve neşeli konuşmak",
          "isCorrect": false
        },
        {
          "text": "Karşı tarafa bağırmak, öfkelenmek ve kavga etmek",
          "isCorrect": true
        },
        {
          "text": "Bilgisayarın hızını artırmak",
          "isCorrect": false
        },
        {
          "text": "Şifreyi güçlendirmek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> İnternet nezaketinde (Netiket) tamamen BÜYÜK HARF kullanmak 'bağırmak' anlamına gelir; bu yüzden sadece ilk harfleri büyük yazmalıyız.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Netiket (Net-Etiquette)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnternet ortamında saygılı, nazik ve ahlaklı olma kuralları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Netiket (Net-Etiquette)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sanal Dünyada Nezaket: Netiket Kuralları' kapsamında ele alınan <strong>1. Yüzüne Söyleyemeyeceğini Yazma</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Gerçek hayatta arkadaşının yüzüne karşı söyleyemeyeceğin kaba sözleri internete yazma.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Yüzüne Söyleyemeyeceğini Yazma, bilişim sistemlerinde Gerçek hayatta arkadaşının yüzüne karşı söyleyemeyeceğin kab... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Büyük Harfle Bağırma</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bütün kelimeleri büyük harfle yazmak internet dilinde bağırmak ve kavga etmek sayılır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Büyük Harfle Bağırma, Bütün kelimeleri büyük harfle yazmak internet dilinde bağırmak ve kavga etmek sayılır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Telif Hakkı (Copyright) ve Emeğe Saygı' bölümünde vurgulanan <strong>Neleri Korur?</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kitaplar, müzikler, oyunlar, kodlar, çizimler ve f... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Neleri Korur? asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Telif ve Nezaket Sözleşmem''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'İlkeleri Yaz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İnternette kimse beni görmediği için istediğim gibi kaba davranabilirim.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Büyük bir yanılgı! İnternetteki her mesajın arkasında IP adresi ve dijital ayak izi vardır; kaba davranışlar gerçek hayatta olduğu gibi cezalandırılır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Öfkeyle Mesaj Atma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sinirlendiğinde klavyeden uzaklaş, derin nefes al ve sakinleşince yaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Öfkeyle Mesaj Atma prensibi, Sinirlendiğinde klavyeden uzaklaş, derin nefes al ve sakinleşince yaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dijital Ortamda Nezaket Kurallarını (Netiket) Uygulama, Telif Hakkı Bilinci Edinme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Netiket: Sanal dünyanın altın nezaket kurallarıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Netiket' doğrultusunda Sanal dünyanın altın nezaket kurallarıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Dijital Etik, Nezaket (Netiket) ve Telif Hakkı' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "19": [
    {
      "question": "1. dönem boyunca ürettiğimiz resimleri, şiirleri ve tabloları düzenli şekilde saklayıp gelişimimizi gördüğümüz dijital koleksiyona ne ad verilir?",
      "options": [
        {
          "text": "Geri Dönüşüm Kutusu",
          "isCorrect": false
        },
        {
          "text": "Dijital Portfolyo (Gelişim Dosyası)",
          "isCorrect": true
        },
        {
          "text": "Arama Motoru",
          "isCorrect": false
        },
        {
          "text": "Görev Çubuğu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Dijital Portfolyo' bir öğrencinin dönem boyunca ürettiği en güzel çalışmaların toplandığı başarı vitrinidir.",
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
          "text": "B) Donanımdan klavyeye, tablolardan siber güvenliğe 19 haftalık macera.",
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
      "question": "'19 Haftalık Başarı Albümümüz' kapsamında ele alınan <strong>Sistem ve Donanım</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Giriş ve çıkış birimlerini, işletim sistemini ve pencereleri yönetiyoruz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sistem ve Donanım, bilişim sistemlerinde Giriş ve çıkış birimlerini, işletim sistemini ve pencereleri... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Düzen ve Dosyalar</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Klasör ağacıyla dosyalarımızı düzenliyor, USB ve bulutta yedekliyoruz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Düzen ve Dosyalar, Klasör ağacıyla dosyalarımızı düzenliyor, USB ve bulutta yedekliyoruz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Dijital Portfolyo Klasörümüz' bölümünde vurgulanan <strong>29 Ekim Afişi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Şanlı Türk Bayrağı ve Cumhuriyet sloganımız.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 29 Ekim Afişi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Benim Portfolyom Sahnesi''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Tatil demek sabah akşam bilgisayar oyunu oynamak demektir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilinçli bir çocuk tatili sporla, kitapla, sevdikleriyle ve dengeli teknolojiyle geçiren çocuktur!",
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
      "question": "Günün Altın Kuralı olan <strong>'Cihazları Korumaya Al'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Tatil boyunca okul bilgisayarlarını kapatıp laboratuvarı tertemiz bırakalım.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Cihazları Korumaya Al prensibi, Tatil boyunca okul bilgisayarlarını kapatıp laboratuvarı tertemiz bırakalım. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'1. Dönem Dijital Eserlerini Portfolyoda Sunma, Öz Değerlendirme Yapabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 1. Dönem Başarısı: Çalışmanın, öğrenmenin ve üretmenin zaferidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '1. Dönem Başarısı' doğrultusunda Çalışmanın, öğrenmenin ve üretmenin zaferidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '1. Dönem Sonu: Dijital Portfolyo ve Karne Sevinci' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "20": [
    {
      "question": "Ekran veya bilgisayar kullanmadan; kağıt, kalem, yön okları ve oyunlarla kodlama mantığını öğrenmeye ne ad verilir?",
      "options": [
        {
          "text": "İnternet Araması",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarsız Kodlama (Unplugged Coding)",
          "isCorrect": true
        },
        {
          "text": "Donanım Formatlama",
          "isCorrect": false
        },
        {
          "text": "Dosya Sıkıştırma",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Bilgisayarsız Kodlama' (Unplugged Coding), ekran bağımlılığı olmadan zihinsel mantık ve problem çözme becerisi geliştiren harika bir yöntemdir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilgisayarsız Kodlama (Unplugged)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Ekran olmadan zihnimizle ve kağıtla kodlama ilkelerini uygulama.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilgisayarsız Kodlama (Unplugged)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Zihnimizin Algoritması: Bilgisayarsız Kodlama' kapsamında ele alınan <strong>1. Robot Kendi Düşünemez</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Robot rolündeki kişi sadece duyduğu komutu harfiyen yerine getirir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Robot Kendi Düşünemez, bilişim sistemlerinde Robot rolündeki kişi sadece duyduğu komutu harfiyen yerine g... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Belirsiz Komut Yasaktır</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'İleri git' demek yetmez; '3 adım ileri yürü' denilmelidir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Belirsiz Komut Yasaktır, 'İleri git' demek yetmez; '3 adım ileri yürü' denilmelidir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Piksel Boyama Sanatı (Pixel Art)' bölümünde vurgulanan <strong>Kod Formatı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde '2K, 3B, 2K' ➔ 2 Kırmızı, 3 Beyaz, 2 Kırmızı kare ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kod Formatı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kareli Kâğıtta Piksel Avı''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Izgarayı Hazırla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kodlama öğrenmek için mutlaka pahalı bir bilgisayara ihtiyaç vardır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Kodlamanın temeli olan 'algoritmik düşünme', kağıt, kalem, legolar ve zekâ oyunlarıyla ekran olmadan da mükemmel öğrenilebilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Ailenle Birlikte Oyna'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) İnsan robot oyununu anne, baba veya kardeşinizle oynayarak eğlenceyi paylaşın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Ailenle Birlikte Oyna prensibi, İnsan robot oyununu anne, baba veya kardeşinizle oynayarak eğlenceyi paylaşın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilgisayarsız Kodlama (Unplugged Coding) ile Problem Çözme Becerisini Pekiştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Algoritma Zihindedir: Bilgisayar olmadan da düşünceyle kodlama yapılır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Algoritma Zihindedir' doğrultusunda Bilgisayar olmadan da düşünceyle kodlama yapılır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Sömestr 1. Hafta: Bilgisayarsız Kodlama Macera Bülteni' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "21": [
    {
      "question": "4x4 boyutundaki bir Sudoku bulmacasında, birinci satırda '1, 2, 3' sayıları yer alıyorsa, satırın sonundaki boş kutuya HANGİ SAYI gelmelidir?",
      "options": [
        {
          "text": "1",
          "isCorrect": false
        },
        {
          "text": "4",
          "isCorrect": true
        },
        {
          "text": "5",
          "isCorrect": false
        },
        {
          "text": "0",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 4x4 Sudoku'da her satırda 1, 2, 3 ve 4 sayıları birer kez bulunmalıdır; eksik olan tek sayı 4'tür!",
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
          "text": "B) Zihnimizi dinç tutan, hafızayı ve konsantrasyonu güçlendiren bulmacalar.",
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
      "question": "'Zihnin Jimnastiği: Sudoku ve Mantık Kuralları' kapsamında ele alınan <strong>1. Satır Kuralı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Soldan sağa her satırda 1, 2, 3, 4 sayıları birer kez bulunmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Satır Kuralı, bilişim sistemlerinde Soldan sağa her satırda 1, 2, 3, 4 sayıları birer kez bulunm... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Sütun Kuralı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yukarıdan aşağıya her sütunda sayılar asla tekrar etmemelidir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Sütun Kuralı, Yukarıdan aşağıya her sütunda sayılar asla tekrar etmemelidir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Gizli Casus Şifreleri (Kriptoloji)' bölümünde vurgulanan <strong>Harf Kaydırma</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Her harf alfabede 3 adım sonrasıyla değiştirilir (... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Harf Kaydırma asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Gizli Ajan Şifre Çözümü''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Şifre Tablosunu İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sudoku çözmek için matematikte dahi olmak ve devasa sayıları çarpmak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Sudoku'da hiçbir matematik işlemi yoktur. Sayılar yerine elma, armut, muz resimleri de koysanız oyunun mantığı tamamen aynıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tahmin Etme, Emin Ol'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sudoku'da 'galiba buraya 2 gelir' diye rastgele sayı yazmayın; satır ve sütunu kontrol edip kanıtlayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tahmin Etme, Emin Ol prensibi, Sudoku'da 'galiba buraya 2 gelir' diye rastgele sayı yazmayın; satır ve sütunu kontrol edip kanıtlayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Mantıksal Çıkarım Yapma, Parça-Bütün İlişkisi Kurma ve Strateji Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Sudoku: Sayılara değil, mantığa ve elenen olasılıklara dayanır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Sudoku' doğrultusunda Sayılara değil, mantığa ve elenen olasılıklara dayanır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Sömestr 2. Hafta: Zekâ Oyunları ve Mantık Bulmacaları' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "22": [
    {
      "question": "Çok büyük ve zor görünen bir bilgisayar projesini daha kolay çözebilmek için küçük ve yönetilebilir parçalara ayırma işlemine ne ad verilir?",
      "options": [
        {
          "text": "Silme (Delete)",
          "isCorrect": false
        },
        {
          "text": "Parçalara Ayırma (Ayrıştırma - Decomposition)",
          "isCorrect": true
        },
        {
          "text": "Format Atma",
          "isCorrect": false
        },
        {
          "text": "Yazıcıdan Çıktı Alma",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Parçalara Ayırma' (Ayrıştırma), karmaşık sorunları küçük parçalara bölerek adım adım çözme stratejisidir.",
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
          "text": "B) Hedefimize ulaşmamızı engelleyen, çözülmeyi bekleyen her durum.",
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
      "question": "'Büyük Sorunları Lokmalara Bölmek: Ayrıştırma' kapsamında ele alınan <strong>Hatalı Yaklaşım</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Oda çok dağınık, nereden başlayacağımı bilmiyorum!' deyip pes etmek.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Hatalı Yaklaşım, bilişim sistemlerinde 'Oda çok dağınık, nereden başlayacağımı bilmiyorum!' deyip p... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Ayrıştırma Yöntemi</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İşi 3 küçük parçaya böl: 1. Kitapları rafa diz, 2. Kıyafetleri dolaba as, 3. Oyuncakları kutuya koy.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Ayrıştırma Yöntemi, İşi 3 küçük parçaya böl: 1. Kitapları rafa diz, 2. Kıyafetleri dolaba as, 3. Oyuncakları kutuya koy. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Problem Çözmenin 4 Evrensel Basamağı' bölümünde vurgulanan <strong>1. Problemi Anla</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Elimizde ne var? Ne eksik? Ulaşmak istediğimiz kes... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 1. Problemi Anla asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Oyun Tasarımı Ayrıştırma''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Projeyi İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Zeki insanlar problemleri hiç düşünmeden tek saniyede çözer.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Gerçek dehalar problemleri en çok parçaya bölen, sabırla plan yapan ve vazgeçmeyen insanlardır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Gözünde Büyütme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Çok zor görünen ödevler ve projeler parçalara bölündüğünde çocuk oyuncağına dönüşür.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Gözünde Büyütme prensibi, Çok zor görünen ödevler ve projeler parçalara bölündüğünde çocuk oyuncağına dönüşür. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Karmaşık Problemleri Alt Parçalara Ayırma (Decomposition) ve Sıralı Strateji Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Problemi Anla: Çözümün yarısı ne istendiğini tam kavramaktır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Problemi Anla' doğrultusunda Çözümün yarısı ne istendiğini tam kavramaktır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Problem Çözme ve Parçalara Ayırma (Ayrıştırma)' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "23": [
    {
      "question": "Bir akış şemasında algoritmanın 'BAŞLADIĞINI' ve 'BİTTİĞİNİ' gösteren uluslararası standart geometrik şekil hangisidir?",
      "options": [
        {
          "text": "Dikdörtgen",
          "isCorrect": false
        },
        {
          "text": "Elips (Oval)",
          "isCorrect": true
        },
        {
          "text": "Paralelkenar",
          "isCorrect": false
        },
        {
          "text": "Üçgen",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Elips (Oval) şekli, akış şemalarının kapısı gibidir; 'BAŞLA' ve 'BİTİR' adımlarında kullanılır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Akış Şeması (Flowchart) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Algoritmanın geometrik şekillerle resmedilmiş haritası.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Akış Şeması (Flowchart) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Uluslararası Kod Dili: Akış Şeması Şekilleri' kapsamında ele alınan <strong>1. Elips (Oval)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Algoritmanın ilk adımı 'BAŞLA' ve son adımı 'BİTİR' için kullanılır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Elips (Oval), bilişim sistemlerinde Algoritmanın ilk adımı 'BAŞLA' ve son adımı 'BİTİR' için kul... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Dikdörtgen</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yapılan işlemler, hesaplamalar ve hareketler (Örn: 'Sayıları topla', '2 adım yürü').",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Dikdörtgen, Yapılan işlemler, hesaplamalar ve hareketler (Örn: 'Sayıları topla', '2 adım yürü'). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Neden Yazı Yerine Akış Şeması Çizeriz?' bölümünde vurgulanan <strong>Sayfalarca Yazı Yerine</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Uzun paragraflar yerine 4 kutucukla tüm algoritmay... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sayfalarca Yazı Yerine asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Ayran Yapma Akış Şeması''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Başla Elipsi Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Akış şeması sadece bilgisayarlar içindir, fabrikalarda kullanılmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Otomobil fabrikalarından hastanelere, roket fırlatma merkezlerinden aşçılara kadar tüm profesyoneller akış şemasıyla çalışır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Okları Unutma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Şekillerin arasına ok koymazsanız bilgisayar bir sonraki adımın hangisi olduğunu bilemez.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Okları Unutma prensibi, Şekillerin arasına ok koymazsanız bilgisayar bir sonraki adımın hangisi olduğunu bilemez. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritmaları Uluslararası Standart Akış Şeması Sembolleriyle Çizebilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Akış Şeması: Algoritmanın evrensel görsel haritasıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Akış Şeması' doğrultusunda Algoritmanın evrensel görsel haritasıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Algoritma ve Akış Şemalarına Giriş (Standart Şekiller)' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "24": [
    {
      "question": "Bir akış şemasında 'Eğer hava soğuksa montunu giy, değilse tişörtle çık' kararını göstermek için HANGİ GEOMETRİK ŞEKİL kullanılır?",
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
          "text": "Daire",
          "isCorrect": false
        },
        {
          "text": "Paralelkenar",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Eşkenar Dörtgen (Baklava Dilimi), şart ve karar durumlarını göstermek için kullanılan evrensel semboldür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Karar (Şart) Kutusu Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Akış şemasındaki Baklava Dilimi (Eşkenar Dörtgen) şekli.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Karar (Şart) Kutusu Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yol Ayrımının Hakimi: Karar Kutusu' kapsamında ele alınan <strong>Giriş Oku</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Yukarıdan tek bir okla soruya gelinir (Örn: 'Yağmur yağıyor mu?').",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Giriş Oku, bilişim sistemlerinde Yukarıdan tek bir okla soruya gelinir (Örn: 'Yağmur yağıyor ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Evet Yolu (True)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Cevap evet ise bu yoldan gidilir (Örn: 'Şemsiyeni al').",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Evet Yolu (True), Cevap evet ise bu yoldan gidilir (Örn: 'Şemsiyeni al'). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Oyunlarda Karar Mekanizmaları' bölümünde vurgulanan <strong>Can Bitti mi?</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde EĞER can = 0 İSE ➔ Ekrana 'Game Over' yaz, DEĞİLSE... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Can Bitti mi? asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Akıllı Kapı Şeması''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Başla ve Sensör Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bilgisayarlar 'Belki' veya 'Bilemiyorum' diye karar verebilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Bilgisayarların dünyası ikilidir (0 ve 1). Bir şart ya kesinlikle doğrudur (Evet) ya da kesinlikle yanlıştır (Hayır).",
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
      "question": "Günün Altın Kuralı olan <strong>'Evet ve Hayır Yazılarını Unutma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Okların üzerine 'Evet' ve 'Hayır' yazmazsanız hangi yolun nereye gittiği anlaşılmaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Evet ve Hayır Yazılarını Unutma prensibi, Okların üzerine 'Evet' ve 'Hayır' yazmazsanız hangi yolun nereye gittiği anlaşılmaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Akış Şemalarında Şartlı Durumları (Eşkenar Dörtgen) Kullanarak Dallanan Algoritmalar Kurma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Eşkenar Dörtgen: Akış şemasının akıl ve karar merkezidir.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Eşkenar Dörtgen' doğrultusunda Akış şemasının akıl ve karar merkezidir. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Akış Şemalarında Karar Yapısı (Eşkenar Dörtgen)' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "25": [
    {
      "question": "Bir bilgisayar programındaki veya algoritmadaki mantık hatasını bulup düzeltme işlemine verilen uluslararası isim nedir?",
      "options": [
        {
          "text": "Format Atma",
          "isCorrect": false
        },
        {
          "text": "Debugging (Hata Ayıklama)",
          "isCorrect": true
        },
        {
          "text": "Yedekleme",
          "isCorrect": false
        },
        {
          "text": "Yazı Tipi Değiştirme",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Debugging' (Hata Ayıklama), yazılımdaki böcekleri (hataları) bulup temizleme sanatıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bug (Böcek) ve Debugging' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Tarihin ilk bilgisayarında bulunan gerçek güve ve hata ayıklama kavramı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bug (Böcek) ve Debugging' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Hata Avcıları: Debugging Sanatı' kapsamında ele alınan <strong>1. Belirtiyi Gör</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Robot hedefe varamadı mı? Yoksa duvara mı çarptı?",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Belirtiyi Gör, bilişim sistemlerinde Robot hedefe varamadı mı? Yoksa duvara mı çarptı?... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Adım Adım Takip Et</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Parmakla ilk adımdan itibaren her hareketi tek tek simüle et.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Adım Adım Takip Et, Parmakla ilk adımdan itibaren her hareketi tek tek simüle et. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Optimizasyon: En Kısa ve Akıllı Yol' bölümünde vurgulanan <strong>Hantal Yol</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde İleri git, dön, ileri git, dön, ileri git, dön, il... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Hantal Yol asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Bozuk Robotu Kurtar''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Bozuk Kodu İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İyi bir yazılımcı hiç hata yapmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! En iyi yazılımcı, hatasını en hızlı fark eden, araştıran ve sabırla düzelten yazılımcıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Asla Sinirlenme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kodun ilk seferde çalışmaması dünyanın sonu değildir; profesyonel yazılımcılar zamanlarının yarısını hata arayarak geçirir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Asla Sinirlenme prensibi, Kodun ilk seferde çalışmaması dünyanın sonu değildir; profesyonel yazılımcılar zamanlarının yarısını hata arayarak geçirir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritmalardaki Hataları Adım Adım İzleyerek Tespit Etme ve En Verimli Yolu Bulma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Bug: Algoritmanın çalışmasını engelleyen mantık hatasıdır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Bug' doğrultusunda Algoritmanın çalışmasını engelleyen mantık hatasıdır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Hata Ayıklama (Debugging) ve Optimizasyon' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "26": [
    {
      "question": "İstiklal Marşı'mızın TBMM tarafından kabul edildiği ve her yıl gururla andığımız tarihi gün hangisidir?",
      "options": [
        {
          "text": "23 Nisan 1920",
          "isCorrect": false
        },
        {
          "text": "12 Mart 1921",
          "isCorrect": true
        },
        {
          "text": "29 Ekim 1923",
          "isCorrect": false
        },
        {
          "text": "19 Mayıs 1919",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> İstiklal Marşı'mız 12 Mart 1921 tarihinde Türkiye Büyük Millet Meclisi'nde coşkuyla kabul edilmiştir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '12 Mart 1921 Ruhu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Milli şairimiz Mehmet Akif Ersoy ve İstiklal Marşı'mızın TBMM'de kabulü.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '12 Mart 1921 Ruhu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Milli Marşımızın Dizgisi ve Şartlı Kurallar' kapsamında ele alınan <strong>Şart 1</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) EĞER sıra = 1 İSE ➔ 'Korkma, sönmez bu şafaklarda...' kıtasını oku.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Şart 1, bilişim sistemlerinde EĞER sıra = 1 İSE ➔ 'Korkma, sönmez bu şafaklarda...' kıtası... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Şart 2</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) EĞER sıra = 2 İSE ➔ 'Çatma, kurban olayım çehreni ey nazlı hilal!' kıtasını oku.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Şart 2, EĞER sıra = 2 İSE ➔ 'Çatma, kurban olayım çehreni ey nazlı hilal!' kıtasını oku. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sayaçlar ve Sıralı Şart Mekanizması' bölümünde vurgulanan <strong>Başlangıçta</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sayaç = 1 olarak başlar.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Başlangıçta asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Marşımızın Kıtalarını Sırala''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kıtaları İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Algoritmalar sadece matematik ve sayılar içindir; şiir veya marşlarda kullanılamaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Algoritma mantığı müzikten şiire, spordan uzay bilimine kadar sıralı ve kurallı olan her yerde çalışır!",
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
      "question": "Günün Altın Kuralı olan <strong>'İstiklal Marşı Okunurken'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Marşımız çalarken bilgisayar başında da olsak dimdik ayağa kalkıp saygıyla durmalıyız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> İstiklal Marşı Okunurken prensibi, Marşımız çalarken bilgisayar başında da olsak dimdik ayağa kalkıp saygıyla durmalıyız. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İstiklal Marşı'mızın Kabulü Bilincini Edinme, Şartlı Sıralama Algoritmaları Kurma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) 12 Mart: Milli bağımsızlığımızın ve İstiklal Marşı'mızın kabul günüdür.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı '12 Mart' doğrultusunda Milli bağımsızlığımızın ve İstiklal Marşı'mızın kabul günüdür. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '12 Mart İstiklal Marşı & Şartlı Algoritmalar' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "27": [
    {
      "question": "Bir robotun ekranda düzgün bir 'KARE' çizmesi için [İleri Git, Sağa Dön] hareketini HANGİ DÖNGÜ bloğunun içine koymalıyız?",
      "options": [
        {
          "text": "2 Defa Tekrarla",
          "isCorrect": false
        },
        {
          "text": "4 Defa Tekrarla",
          "isCorrect": true
        },
        {
          "text": "100 Defa Tekrarla",
          "isCorrect": false
        },
        {
          "text": "Hiç Tekrarlama",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Karenin 4 eşit kenarı ve 4 köşesi olduğu için [İleri Git, Sağa Dön] adımı tam '4 Defa Tekrarla' döngüsüyle kusursuz çizilir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '18 Mart 1915 Çanakkale Ruhu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Seyit Onbaşı, Mehmetçik ve 'Çanakkale Geçilmez!' destanı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '18 Mart 1915 Çanakkale Ruhu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yorulmayan Tekrar: Döngülerin Gücü' kapsamında ele alınan <strong>Döngüsüz Kod</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 100 satır boyunca alt alta '1 Adım At' yazmak gerekirdi (Sayfalar dolusu gereksiz yazı!).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Döngüsüz Kod, bilişim sistemlerinde 100 satır boyunca alt alta '1 Adım At' yazmak gerekirdi (Say... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Döngülü Kod</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) '100 DEFA TEKRARLA: [1 Adım At]' (Sadece tek satırda muazzam tasarruf!).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Döngülü Kod, '100 DEFA TEKRARLA: [1 Adım At]' (Sadece tek satırda muazzam tasarruf!). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'18 Mart Çanakkale Ruhu ve Saygı' bölümünde vurgulanan <strong>Seyit Onbaşı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 276 kiloluk top mermisini tek başına sırtlayıp düş... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Seyit Onbaşı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Döngü ile Geometrik Şekiller''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kare Algoritmasını Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Döngü sadece aynı işlemi yapar; her seferinde sayıyı değiştiremez.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Döngü her döndüğünde içindeki sayacı 1 artırarak farklı sayılar yazdırabilir (Örn: 1'den 100'e kadar sayma).",
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
      "question": "Günün Altın Kuralı olan <strong>'Dönüş Derecesini Doğru Hesapla'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kare için 360 / 4 = 90 derece, üçgen için 360 / 3 = 120 derece dönüş gerekir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Dönüş Derecesini Doğru Hesapla prensibi, Kare için 360 / 4 = 90 derece, üçgen için 360 / 3 = 120 derece dönüş gerekir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Döngü (Loop) Yapısını Akış Şemalarında ve Algoritmalarda Kullanabilme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Döngü (Loop): Tekrar eden işleri tek satırda çözen sihirli halkadır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Döngü (Loop)' doğrultusunda Tekrar eden işleri tek satırda çözen sihirli halkadır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '18 Mart Çanakkale Zaferi & Döngüler (Loops)' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "28": [
    {
      "question": "Scratch 3.0 programında hazırladığımız tüm kod bloklarının çalışmaya başlaması için sahnenin üzerindeki hangi butona basılır?",
      "options": [
        {
          "text": "Kırmızı Yuvarlak Buton",
          "isCorrect": false
        },
        {
          "text": "Yeşil Bayrak Butonu (🏁)",
          "isCorrect": true
        },
        {
          "text": "Mavi Kare Buton",
          "isCorrect": false
        },
        {
          "text": "Sarı Yıldız Buton",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Yeşil Bayrak, Scratch dünyasında kod trenini harekete geçiren evrensel 'Başlat' düğmesidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Scratch Dünyası Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Milyonlarca çocuğun oyun, animasyon ve hikaye kodladığı görsel stüdyo.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Scratch Dünyası Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Scratch 3.0 Stüdyosu: Çizgi Film ve Oyun Fabrikası' kapsamında ele alınan <strong>1. Blok Paleti (Sol)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Renk renk ayrılmış kod bloklarının durduğu sihirli çekmece.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Blok Paleti (Sol), bilişim sistemlerinde Renk renk ayrılmış kod bloklarının durduğu sihirli çekmece.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Kodlama Alanı (Orta)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Blokları sürükleyip lego gibi birbirine çıt diye taktığımız geniş masa.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Kodlama Alanı (Orta), Blokları sürükleyip lego gibi birbirine çıt diye taktığımız geniş masa. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yeşil Bayrak ve Kırmızı Durdurma Butonları' bölümünde vurgulanan <strong>Tetikleyici</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yeşil bayrağa tıklandığında, arkasında sarı bayrak... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tetikleyici asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'İlk Scratch Projem''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Dekor Ekle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Scratch çocuk oyuncağıdır, gerçek kodlama değildir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yanlış! Dünyanın en ünlü üniversitesi MIT ve Harvard, bilgisayar mühendisliği öğrencilerine ilk derste Scratch ile algoritma mantığını öğretir!",
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
      "question": "Günün Altın Kuralı olan <strong>'Blokları Birbirine Kenetle'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Bloklar havada ayrı durursa çalışmaz; altındaki girintiye mutlaka çıt sesiyle takılmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Blokları Birbirine Kenetle prensibi, Bloklar havada ayrı durursa çalışmaz; altındaki girintiye mutlaka çıt sesiyle takılmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Scratch Arayüzünü Tanıma, Kukla ve Dekor Ekleyebilme, Blokları Çalışma Alanına Taşıma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Scratch 3.0: Hayallerimizi koda dönüştüren renkli stüdyomuzdur.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Scratch 3.0' doğrultusunda Hayallerimizi koda dönüştüren renkli stüdyomuzdur. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Blok Tabanlı Kodlamaya Giriş: Scratch 3.0 Arayüzü' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "29": [
    {
      "question": "Scratch'te bir karakterin sürekli olarak sağa doğru yürümesini ve hiç durmamasını sağlamak için hangi kontrol bloğu kullanılır?",
      "options": [
        {
          "text": "1 Defa Yap",
          "isCorrect": false
        },
        {
          "text": "Sürekli Tekrarla (Forever Loop)",
          "isCorrect": true
        },
        {
          "text": "Durdur Hepsi",
          "isCorrect": false
        },
        {
          "text": "1 Saniye Bekle",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Sürekli Tekrarla' bloğu, içindeki kodları kırmızı durdurma butonuna basılana kadar hiç durmadan sonsuz döngüyle çalıştırır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Kodlama Arenası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Ayrıştırma, akış şemaları ve Scratch arayüzü sınavı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Kodlama Arenası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Algoritmadan Scratch'e Başarı Köprüsü' kapsamında ele alınan <strong>1. Problem Çözme & Ayrıştırma</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Büyük sorunları küçük parçalara bölüp adım adım çözüyoruz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Problem Çözme & Ayrıştırma, bilişim sistemlerinde Büyük sorunları küçük parçalara bölüp adım adım çözüyoruz.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Akış Şeması Sembolleri</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Elips (Başla), Dikdörtgen (İşlem), Paralelkenar (Girdi) ve Baklava (Karar).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Akış Şeması Sembolleri, Elips (Başla), Dikdörtgen (İşlem), Paralelkenar (Girdi) ve Baklava (Karar). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hızlı Sınav Hatırlatmaları' bölümünde vurgulanan <strong>Soru 1</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Akış şemasında 'Evet/Hayır' diye iki kola ayrılan ... amacına hizmet eder.",
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
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Kodlama Şampiyonası''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Soruları Dikkatle Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sınavda yanlış yaparsam yazılımcı olamam.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hata yapmak yazılımcılığın ilk kuralıdır! Önemli olan hatadan ders çıkarıp doğrusunu öğrenmektir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Görsellere İyi Bak'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sorunun yanındaki akış şeması oklarını parmağınla takip et.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Görsellere İyi Bak prensibi, Sorunun yanındaki akış şeması oklarını parmağınla takip et. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'4. ve 5. Temanın Algoritmik ve Kodlama Kazanımlarını Değerlendirme ve Pekiştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Büyük Başarı: 2. dönemin ilk yazılı değerlendirmesini tamamladık.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Büyük Başarı' doğrultusunda 2. dönemin ilk yazılı değerlendirmesini tamamladık. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '2. Dönem 1. Değerlendirme & Algoritma-Scratch' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "30": [
    {
      "question": "Scratch sahnesinde bir karakteri YUKARIYA DOĞRU zıplatmak veya gökyüzüne uçurmak için hangi değerini artırmalıyız?",
      "options": [
        {
          "text": "X değerini",
          "isCorrect": false
        },
        {
          "text": "Y değerini (+Y yönü)",
          "isCorrect": true
        },
        {
          "text": "Ses seviyesini",
          "isCorrect": false
        },
        {
          "text": "Dil ayarını",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Y ekseni dikey eksendir; yukarı çıkmak için Y değerini artırırız (+Y), aşağı inmek için ise azaltırız (-Y).",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Mavi Hareket Blokları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Adım git, derece dön, konuma git ve süzülerek ilerle.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Mavi Hareket Blokları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sahnenin Haritası: X ve Y Koordinatları' kapsamında ele alınan <strong>X Ekseni (Sağ ve Sol)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Yatay caddedir. Sağa doğru +240'a kadar gider, sola doğru -240'a kadar iner.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> X Ekseni (Sağ ve Sol), bilişim sistemlerinde Yatay caddedir. Sağa doğru +240'a kadar gider, sola doğru -2... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Y Ekseni (Yukarı ve Aşağı)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Dikey gökdelendir. Yukarıya doğru +180'e kadar çıkar, aşağıya doğru -180'e kadar iner.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Y Ekseni (Yukarı ve Aşağı), Dikey gökdelendir. Yukarıya doğru +180'e kadar çıkar, aşağıya doğru -180'e kadar iner. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Mavi Hareket Bloklarının Süper Güçleri' bölümünde vurgulanan <strong>10 Adım Git</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Baktığı yöne doğru düz bir çizgi halinde 10 piksel... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 10 Adım Git asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Laboratuvar Atölyesi: 'Sahne Dansı ve Sekme''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Yeşil Bayrak ve Başlangıç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"X ve Y sadece çok zor lise matematiğidir, 3. sınıflar anlayamaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hiç de değil! X sadece sağ-sol caddesi, Y ise yukarı-aşağı asansörüdür. Haritayı anlayan her çocuk X ve Y'yi kolayca yönetir!",
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
      "question": "Günün Altın Kuralı olan <strong>'Ters Dönen Kedi Hatası'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kedi duvardan sekince baş aşağı dönüyorsa, sol üstteki 'Dönüş İzni: Sadece Sağa-Sola' butonuna basın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Ters Dönen Kedi Hatası prensibi, Kedi duvardan sekince baş aşağı dönüyorsa, sol üstteki 'Dönüş İzni: Sadece Sağa-Sola' butonuna basın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Karakterleri Belirli Yön ve Koordinatlara (X, Y) Gönderebilme, Sayı Parametrelerini Yönetme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) X Ekseni: Sağ (+) ve Sol (-) yatay koordinattır.",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'X Ekseni' doğrultusunda Sağ (+) ve Sol (-) yatay koordinattır. olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Karakterleri Hareket Ettirme ve Koordinat Düzlemi (X-Y)' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "31": [
    {
      "question": "Scratch'te bir balığın sahne kenarına çarpıp baş aşağı dönmesini önlemek için hangi blok kullanılır?",
      "options": [
        {
          "text": "Gizle bloğu",
          "isCorrect": true
        },
        {
          "text": "Dönüş stilini sol-sağ yap bloğu",
          "isCorrect": false
        },
        {
          "text": "Boyutu %50 yap bloğu",
          "isCorrect": false
        },
        {
          "text": "100 adım git bloğu",
          "isCorrect": false
        }
      ],
      "explanation": "'Dönüş stilini sol-sağ yap' bloğu, karakterin duvardan sekerken ters dönmesini engeller ve sadece yatay eksende yönünü çevirir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Çoklu Kukla (Multi-Sprite)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Her deniz canlısına bağımsız hareket ve davranış kodları yazma.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Çoklu Kukla (Multi-Sprite)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Su Altı Dünyasını Kodlarla Canlandırma' kapsamında ele alınan <strong>1. Bağımsız Hızlar</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Her balığa farklı adım sayısı (ör. küçük balığa 12 adım, kaplumbağaya 4 adım) verilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Bağımsız Hızlar, bilişim sistemlerinde Her balığa farklı adım sayısı (ör. küçük balığa 12 adım, kap... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Dönüş İzni</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Karakterin ters dönmemesi için 'Dönüş stilini sol-sağ yap' komutu eklenir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Dönüş İzni, Karakterin ters dönmemesi için 'Dönüş stilini sol-sağ yap' komutu eklenir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'İnteraktif Olaylar: Tıklanan Balık Tepki Versin!' bölümünde vurgulanan <strong>'Bu kuklaya tıklandığında'</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sarı renkli Olaylar bloğu doğrudan balığa dokunulu... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 'Bu kuklaya tıklandığında' asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: İnteraktif Scratch Akvaryumu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Dekor Seçimi' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'2. Dönem Ara Tatil: İnteraktif Akvaryum ve Doğa Simülasyonu' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Çoklu Karakterleri Bağımsız Kodlama, Rastgele Hareket ve Etkileşim Tasarımı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 2. Dönem Ara Tatil: İnteraktif Akvaryum ve Doğa Simülasyonu becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 2. Dönem Ara Tatil: İnteraktif Akvaryum ve Doğa Simülasyonu becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '2. Dönem Ara Tatil: İnteraktif Akvaryum ve Doğa Simülasyonu' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "32": [
    {
      "question": "Scratch'te bir kuklanın yürüyormuş veya dans ediyormuş gibi görünmesi için 'sonraki kostüm' bloğunun altına hangi blok eklenmelidir?",
      "options": [
        {
          "text": "100 adım git",
          "isCorrect": true
        },
        {
          "text": "0.2 saniye bekle",
          "isCorrect": false
        },
        {
          "text": "Gizlen",
          "isCorrect": false
        },
        {
          "text": "Dekor 3'e geç",
          "isCorrect": false
        }
      ],
      "explanation": "Kostüm değişimlerinin insan gözü tarafından doğal bir hareket olarak algılanabilmesi için araya '0.2 saniye bekle' gibi kısa duraklama konmalıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '23 Nisan Önemi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Gazi Mustafa Kemal Atatürk'ün dünya çocuklarına armağan ettiği milli bayram.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '23 Nisan Önemi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Animasyonun Temeli: Kostüm Değiştirme' kapsamında ele alınan <strong>1. Kostümler Sekmesi</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Karakterin kollarını ve bacaklarını farklı açtığı çizim kareleri yer alır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Kostümler Sekmesi, bilişim sistemlerinde Karakterin kollarını ve bacaklarını farklı açtığı çizim kare... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. 'Sonraki Kostüm'</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Karakteri sıradaki çizimine geçirerek animasyon oluşturur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. 'Sonraki Kostüm', Karakteri sıradaki çizimine geçirerek animasyon oluşturur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Müzik Ekleme ve Zamanlama' bölümünde vurgulanan <strong>'... Sesini Başlat'</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Müziği arkada çalarken karakterin dans kodlarının ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> '... Sesini Başlat' asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: 23 Nisan Sahne Gösterisi Animasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Dekor' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'23 Nisan Çocuk Bayramı: Çocuk Korosu & Kostüm Animasyonu' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kostüm Değiştirerek Animasyon Üretme, Müzik Eşzamanlaması ve Bayram Mesajı Sunumu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 23 Nisan Çocuk Bayramı: Çocuk Korosu & Kostüm Animasyonu becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 23 Nisan Çocuk Bayramı: Çocuk Korosu & Kostüm Animasyonu becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '23 Nisan Çocuk Bayramı: Çocuk Korosu & Kostüm Animasyonu' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "33": [
    {
      "question": "İki kuklanın sırayla konuşması için birinci kukla konuşurken ikinci kuklanın koduna hangi blok eklenmelidir?",
      "options": [
        {
          "text": "Durdur hepsi",
          "isCorrect": true
        },
        {
          "text": "... saniye bekle",
          "isCorrect": false
        },
        {
          "text": "Kenara geldiyse sektir",
          "isCorrect": false
        },
        {
          "text": "X konumunu 10 değiştir",
          "isCorrect": false
        }
      ],
      "explanation": "Diyalogların üst üste binmemesi için birinci karakter konuşurken, ikinci karakterin koduna konuşma süresi kadar '... saniye bekle' komutu konulmalıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Konuşma vs Düşünce' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) '... de' ve '... düşün' balonlarının farkları ve kullanım amaçları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Konuşma vs Düşünce' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Karakterlerin Sesi: Görünüm Blokları' kapsamında ele alınan <strong>Konuşma Balonu ('... de')</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sivri uçludur; karakterin dışarıya yüksek sesle söylediği cümleleri gösterir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Konuşma Balonu ('... de'), bilişim sistemlerinde Sivri uçludur; karakterin dışarıya yüksek sesle söylediği cü... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Düşünce Balonu ('... düşün')</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bulut şeklindedir; karakterin iç sesini ve aklından geçenleri yansıtır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Düşünce Balonu ('... düşün'), Bulut şeklindedir; karakterin iç sesini ve aklından geçenleri yansıtır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Müzik Eklentisi ile Dijital Çalgılar' bölümünde vurgulanan <strong>'60 Numaralı Notayı Çal'</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 60 sayısı piyanodaki temel 'Orta Do' notasına denk... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> '60 Numaralı Notayı Çal' asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Karşılıklı Sohbet ve Do-Re-Mi Piyanist'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kukla Seçimi' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'Görünüm ve Ses Blokları: Diyaloglar, Kostümler ve Enstrümanlar' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Senkronize Diyalog Tasarlama, Ses Efektlerini Yönetme ve Dijital Müzik Üretimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Görünüm ve Ses Blokları: Diyaloglar, Kostümler ve Enstrümanlar becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Görünüm ve Ses Blokları: Diyaloglar, Kostümler ve Enstrümanlar becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Görünüm ve Ses Blokları: Diyaloglar, Kostümler ve Enstrümanlar' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "34": [
    {
      "question": "Labirent oyununda karakterin duvardan geçmesini engellemek için 'eğer duvara değdi mi ise' bloğunun içine hangi komut yazılmalıdır?",
      "options": [
        {
          "text": "100 adım git",
          "isCorrect": true
        },
        {
          "text": "Başlangıç konumuna git (veya -5 adım git)",
          "isCorrect": false
        },
        {
          "text": "Kostümü değiştir",
          "isCorrect": false
        },
        {
          "text": "Dekor 2'ye geç",
          "isCorrect": false
        }
      ],
      "explanation": "Duvara temas algılandığında karakter ya hemen labirentin başlangıç koordinatlarına geri ışınlanır ya da zıt yönde (-5 adım) geri itilerek duvardan geçmesi engellenir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Algılama Blokları (Açık Mavi)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Karakterin ekrandaki nesneleri hissetmesini sağlayan sensör blokları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Algılama Blokları (Açık Mavi)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bilgisayarın Dokunma Duyusu: Algılama Blokları' kapsamında ele alınan <strong>'... değdi mi?'</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Fare imlecine, kenara veya başka bir kuklaya temas edip etmediğini kontrol eder.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> '... değdi mi?', bilişim sistemlerinde Fare imlecine, kenara veya başka bir kuklaya temas edip etme... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>'... rengine dokundu mu?'</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kuklanın belirlenen renge (ör. kırmızı labirent duvarına) dokunup dokunmadığını algılar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> '... rengine dokundu mu?', Kuklanın belirlenen renge (ör. kırmızı labirent duvarına) dokunup dokunmadığını algılar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Labirent Oyunu Tasarım Adımları' bölümünde vurgulanan <strong>Başlangıç Noktası</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Duvara değdiğinde 'x: -200, y: 140' gibi ilk koord... amacına hizmet eder.",
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
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Kırmızı Duvarlı Mini Labirent Oyunu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Labirent Çizimi' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'Algılama (Sensing) ve Karar Blokları: Temas ve Renk Kontrolü' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Çevreyle Teması Algılama, Renk Kontrolü ve Koşullu Labirent Mekaniği Kurma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Algılama (Sensing) ve Karar Blokları: Temas ve Renk Kontrolü becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Algılama (Sensing) ve Karar Blokları: Temas ve Renk Kontrolü becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Algılama (Sensing) ve Karar Blokları: Temas ve Renk Kontrolü' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "35": [
    {
      "question": "Görme engelli bireyler için tasarlanan 'Akıllı Baston' bir engeli fark ettiğinde kullanıcıyı nasıl uyarır?",
      "options": [
        {
          "text": "Ekranın rengini mavi yaparak",
          "isCorrect": true
        },
        {
          "text": "Titreşim ve sesli ikaz (bip sesi) vererek",
          "isCorrect": false
        },
        {
          "text": "Karakterin kostümünü değiştirerek",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarı kapatıp yeniden başlatarak",
          "isCorrect": false
        }
      ],
      "explanation": "Akıllı bastonlar kullanıcının görme kısıtını dikkate alarak işitsel (bip sesi) ve dokunsal (sapındaki titreşim motoru) sinyallerle uyarı yapar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Erişilebilirlik (A11y)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Teknolojinin tüm özel gereksinimli bireyler için eşit ve engelsiz olması.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Erişilebilirlik (A11y)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Teknoloji Engelleri Nasıl Kaldırır?' kapsamında ele alınan <strong>1. Ekran Okuyucular</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Telefondaki butonları ve haberleri seslendirerek görme engellilere rehberlik eder.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Ekran Okuyucular, bilişim sistemlerinde Telefondaki butonları ve haberleri seslendirerek görme engel... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Otomatik Altyazı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Videolardaki konuşmaları anında metne dökerek işitme engellilere ulaştırır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Otomatik Altyazı, Videolardaki konuşmaları anında metne dökerek işitme engellilere ulaştırır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Akıllı Baston Nasıl Düşünür?' bölümünde vurgulanan <strong>Ses Dalgası</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bastonun ucundaki sensör insanın duyamayacağı ses ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Ses Dalgası asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Scratch ile 'Akıllı Baston' Simülatörü'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Kaldırım Sahnesi' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'Engelliler Haftası: Görme ve İşitme Engelliler İçin Sesli Rehber' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Teknolojiyi Erişilebilirlik İçin Kullanma, Mesafe Algılama Simülasyonu ve Empati Kurma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Engelliler Haftası: Görme ve İşitme Engelliler İçin Sesli Rehber becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Engelliler Haftası: Görme ve İşitme Engelliler İçin Sesli Rehber becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Engelliler Haftası: Görme ve İşitme Engelliler İçin Sesli Rehber' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "36": [
    {
      "question": "Scratch'te yeni bir oyun başlarken önceki oyunun puanlarının silinip sıfırlanması için hangi blok kullanılır?",
      "options": [
        {
          "text": "Skor'u 1 kadar değiştir",
          "isCorrect": true
        },
        {
          "text": "Skor değişkenini gizle",
          "isCorrect": false
        },
        {
          "text": "Skor'u 0 yap",
          "isCorrect": false
        },
        {
          "text": "Skor'u göster",
          "isCorrect": false
        }
      ],
      "explanation": "'Skor'u 0 yap' bloğu oyunun başında değişkeni sıfırlar. '1 kadar değiştir' ise puan eklemeye devam eder.",
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
          "text": "B) Atatürk'ün gençliğe ve spora armağan ettiği dinamizm ve zindelik bayramı.",
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
      "question": "'Bilgisayarın Hafıza Kutuları: Değişkenler' kapsamında ele alınan <strong>1. Kutuya İsim Ver</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Bir Değişken Oluştur' diyerek amacına uygun ad (ör. 'Skor', 'Puan', 'Can') yazılır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Kutuya İsim Ver, bilişim sistemlerinde 'Bir Değişken Oluştur' diyerek amacına uygun ad (ör. 'Skor',... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Oyuna Sıfırla Başla</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yeşil bayrağın altına mutlaka 'Skor'u 0 yap' bloğu konulmalıdır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Oyuna Sıfırla Başla, Yeşil bayrağın altına mutlaka 'Skor'u 0 yap' bloğu konulmalıdır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Basketbol Oyun Mekaniği' bölümünde vurgulanan <strong>'Boşluk tuşuna basılınca'</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Top oyuncunun elinden fırlar ve havada süzülür.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 'Boşluk tuşuna basılınca' asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Potaya Basket At ve Skor Kazan'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Dekor ve Kuklalar' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'19 Mayıs Gençlik ve Spor Bayramı: Basketbol Oyunu & Değişkenler (Skor)' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Değişken Kavramını Anlama, Skor Sayacı Oluşturma ve Hedef Vurma Oyunu Tasarlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 19 Mayıs Gençlik ve Spor Bayramı: Basketbol Oyunu & Değişkenler (Skor) becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 19 Mayıs Gençlik ve Spor Bayramı: Basketbol Oyunu & Değişkenler (Skor) becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '19 Mayıs Gençlik ve Spor Bayramı: Basketbol Oyunu & Değişkenler (Skor)' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "37": [
    {
      "question": "Bir robotun çevresindeki mesafeyi, ışığı veya rengi fark etmesini sağlayan 'duyu organı' parçasına ne ad verilir?",
      "options": [
        {
          "text": "Motor",
          "isCorrect": true
        },
        {
          "text": "Sensör (Algılayıcı)",
          "isCorrect": false
        },
        {
          "text": "Pil",
          "isCorrect": false
        },
        {
          "text": "Tekerlek",
          "isCorrect": false
        }
      ],
      "explanation": "Sensörler (algılayıcılar), tıpkı insan duyu organları gibi robotun çevresindeki fiziksel dünyayı algılayıp işlemciye elektrik sinyali olarak iletir.",
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
          "text": "B) Çevresini algılayan, karar veren ve hareket eden akıllı makineler.",
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
      "question": "'Bir Robot Nasıl Düşünür ve Çalışır?' kapsamında ele alınan <strong>1. Sensörler (Girdi)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Çevredeki ışığı, rengi veya engelleri hisseden algılayıcılar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Sensörler (Girdi), bilişim sistemlerinde Çevredeki ışığı, rengi veya engelleri hisseden algılayıcılar... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Mikroişlemci (Beyin)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sensörden gelen bilgiyi okuyup kodlara göre karar veren çip.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Mikroişlemci (Beyin), Sensörden gelen bilgiyi okuyup kodlara göre karar veren çip. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Çizgi İzleme Algoritmasının Sırrı' bölümünde vurgulanan <strong>Beyaz Zemin</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Işığı güçlü şekilde yansıtır; sensör 'Beyazdayım' ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Beyaz Zemin asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Scratch ile 'Akıllı Robot Süpürge' Simülasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Oval Pist' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'Akıllı Teknolojiler ve Robotik: Sensörler ve Çizgi İzleyen Robot' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Robot Bileşenlerini Tanıma, Girdi-İşlem-Çıktı Döngüsünü Kavrama ve Çizgi İzleme Algoritması'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Akıllı Teknolojiler ve Robotik: Sensörler ve Çizgi İzleyen Robot becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Akıllı Teknolojiler ve Robotik: Sensörler ve Çizgi İzleyen Robot becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Akıllı Teknolojiler ve Robotik: Sensörler ve Çizgi İzleyen Robot' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "38": [
    {
      "question": "Bir yapay zekâ modelinin elma ile portakalı birbiriyle karıştırmadan çok doğru tanıması için ne yapılmalıdır?",
      "options": [
        {
          "text": "Bilgisayarın sesini sonuna kadar açmak",
          "isCorrect": true
        },
        {
          "text": "Farklı ışık ve açılardan çok sayıda elma ve portakal fotoğrafı göstererek eğitmek",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarı kapatıp beklemek",
          "isCorrect": false
        },
        {
          "text": "Klavyeden rastgele tuşlara basmak",
          "isCorrect": false
        }
      ],
      "explanation": "Makine öğrenmesinde modelin doğruluğu verinin zenginliğine bağlıdır. Farklı ışıklarda ve açılarda ne kadar çok örnek gösterilirse yapay zekâ o kadar doğru öğrenir.",
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
          "text": "B) Bilgisayarların insan gibi öğrenme, görme ve karar verme yeteneği.",
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
      "question": "'Bilgisayarlar Nasıl Öğrenir? Makine Öğrenmesi' kapsamında ele alınan <strong>1. Veri (Data) Toplama</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Örneğin kameraya 40 plastik şişe, 40 tane de kağıt fotoğrafı gösterilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Veri (Data) Toplama, bilişim sistemlerinde Örneğin kameraya 40 plastik şişe, 40 tane de kağıt fotoğrafı... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Modeli Eğit (Train)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yapay zekâ renkleri, şekilleri ve kenarları analiz ederek iki sınıfı öğrenir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Modeli Eğit (Train), Yapay zekâ renkleri, şekilleri ve kenarları analiz ederek iki sınıfı öğrenir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sıfır Atık İçin Akıllı Ayrıştırma' bölümünde vurgulanan <strong>Farklı Açılar</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Nesneyi çevirerek, uzaktan ve yakından tanıtmak do... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Farklı Açılar asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Teachable Machine ile 'Akıllı Atık Sınıflandırıcı''</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Siteyi Açın' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'Yapay Zekâ ve Makine Öğrenmesi: Bilgisayara Nesneleri Öğretme' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yapay Zekânın Öğrenme Sürecini Anlama, Veri Toplama, Model Eğitme ve Test Etme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Yapay Zekâ ve Makine Öğrenmesi: Bilgisayara Nesneleri Öğretme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Yapay Zekâ ve Makine Öğrenmesi: Bilgisayara Nesneleri Öğretme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Yapay Zekâ ve Makine Öğrenmesi: Bilgisayara Nesneleri Öğretme' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "39": [
    {
      "question": "Scratch'te bir kuklanın bir koşula bağlı olarak puan kazanması için hangi iki blok kategorisi birlikte kullanılır?",
      "options": [
        {
          "text": "Yalnızca Kalem ve Müzik",
          "isCorrect": true
        },
        {
          "text": "Kontrol (Eğer... ise) ve Değişkenler (Skor'u 1 değiştir)",
          "isCorrect": false
        },
        {
          "text": "Yalnızca Dekor ve Sahne",
          "isCorrect": false
        },
        {
          "text": "Gizlen ve Göster",
          "isCorrect": false
        }
      ],
      "explanation": "Puan kazanma koşulunu denetlemek için Kontrol kategorisindeki 'Eğer... ise' bloğu; kazanılan puanı hafızada tutup artırmak için ise Değişkenler kategorisindeki 'Skor'u 1 değiştir' bloğu birlikte kullanılır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Blok Renkleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Hareket (Mavi), Görünüm (Mor), Ses (Pembe), Olaylar (Sarı), Kontrol (Turuncu), Algılama (Açık Mavi), Değişken (Koyu Turuncu).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Blok Renkleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'2. Dönem Kodlama ve Teknoloji Özeti' kapsamında ele alınan <strong>1. Blok Renkleri ve Görevleri</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Hangi bloğun ne işe yaradığını ezberlemeden mantığıyla bilme.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Blok Renkleri ve Görevleri, bilişim sistemlerinde Hangi bloğun ne işe yaradığını ezberlemeden mantığıyla bilme... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Hata Ayıklama (Debugging)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Çalışmayan veya yanlış çalışan kodlardaki hataları bulup düzeltme.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Hata Ayıklama (Debugging), Çalışmayan veya yanlış çalışan kodlardaki hataları bulup düzeltme. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sınav Uygulama ve Değerlendirme Yönergesi' bölümünde vurgulanan <strong>Test Soruları</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 10 adet çoktan seçmeli kavram sorusu.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Test Soruları asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Yıl Sonu Karma Kodlama Parkuru'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Scratch'i Açın' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilişim Sınavı' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Tüm Yılın Kodlama ve Algoritma Kazanımlarını Test Etme ve Eksikleri Giderme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilişim Sınavı becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilişim Sınavı becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında '2. Dönem 2. Değerlendirme: Yıl Sonu Büyük Bilişim Sınavı' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "40": [
    {
      "question": "Bir arkadaşımızın kodladığı oyuna yapıcı geri bildirim verirken kullanılan 'Sandviç Metodu'nun ilk adımı nedir?",
      "options": [
        {
          "text": "Oyunun tüm eksiklerini söyleyip kapatmak",
          "isCorrect": true
        },
        {
          "text": "Önce projede en çok beğenilen güzel yönü söyleyip övmek",
          "isCorrect": false
        },
        {
          "text": "Oyunu hiç dinlememek",
          "isCorrect": false
        },
        {
          "text": "Kendi oyununun daha iyi olduğunu iddia etmek",
          "isCorrect": false
        }
      ],
      "explanation": "Sandviç metodu daima pozitif bir övgüyle başlar (beğenilen yön söylenir), ardından nazikçe geliştirme tavsiyesi verilir ve teşekkürle tamamlanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dijital Portfolyo' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Yıl boyunca ürettiğimiz en iyi kodlama projelerimizin koleksiyonu.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dijital Portfolyo' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bir Yazılımcı Projesini Nasıl Sunar?' kapsamında ele alınan <strong>1. Merhaba & Tanıtım</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Adını, soyadını ve kodladığın oyunun ismini söyleyerek başla.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Merhaba & Tanıtım, bilişim sistemlerinde Adını, soyadını ve kodladığın oyunun ismini söyleyerek başla... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Oyunun Amacı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Hangi tuşlarla oynandığını ve oyuncunun ne yapması gerektiğini anlat.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Oyunun Amacı, Hangi tuşlarla oynandığını ve oyuncunun ne yapması gerektiğini anlat. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Akran Değerlendirmesi: Sandviç Metodu' bölümünde vurgulanan <strong>1. Üst Ekmek (Övgü)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 'Karakterinin renkleri ve seçtiğin müzik gerçekten... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 1. Üst Ekmek (Övgü) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: Akıllı Tahtada 'Benim Oyunum' Sahne Sunumu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Projeyi Açın' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'Dijital Portfolyo Sunumu: 'Benim Kodladığım Oyun' ve Sunum Becerisi' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kendi Kodladığı Projeyi Topluluk Önünde Sunma, İletişim Becerisi ve Yapıcı Akran Değerlendirmesi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Dijital Portfolyo Sunumu: 'Benim Kodladığım Oyun' ve Sunum Becerisi becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Dijital Portfolyo Sunumu: 'Benim Kodladığım Oyun' ve Sunum Becerisi becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Dijital Portfolyo Sunumu: 'Benim Kodladığım Oyun' ve Sunum Becerisi' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "41": [
    {
      "question": "3. Sınıf Bilişim Teknolojileri ve Yazılım dersinin en büyük hedefi aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "Bilgisayarda sabahtan akşama kadar çizgi film izlemek",
          "isCorrect": true
        },
        {
          "text": "Teknolojiyi sadece tüketen değil, kod yazarak faydalı ürünler üreten 'Dijital Üretici' olmak",
          "isCorrect": false
        },
        {
          "text": "Sürekli yeni tablet veya telefon satın aldırmak",
          "isCorrect": false
        },
        {
          "text": "Klavye tuşlarını rastgele sökmek",
          "isCorrect": false
        }
      ],
      "explanation": "Bilişim dersinin nihai hedefi; öğrencilerimizin ekran karşısında pasif bir tüketici olmak yerine problem çözen, algoritma kuran ve kod yazan aktif 'Dijital Üreticiler' olmasını sağlamaktır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Neler Başardık?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanım, klavye, Word mektupları, algoritmalar, Scratch oyunları, robotik ve yapay zekâ.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Neler Başardık?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bir Yılın Bilişim Yolculuğu: Neler Başardık?' kapsamında ele alınan <strong>1. Donanım & Sistem</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Giriş-çıkış birimlerini ve dosya klasör hiyerarşisini öğrendik.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Donanım & Sistem, bilişim sistemlerinde Giriş-çıkış birimlerini ve dosya klasör hiyerarşisini öğrend... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. On Parmak & Word</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) F/J ev sırasını, kısayolları ve mektup/afiş dizgisini başardık.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. On Parmak & Word, F/J ev sırasını, kısayolları ve mektup/afiş dizgisini başardık. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'4. Sınıfta Bizi Neler Bekliyor?' bölümünde vurgulanan <strong>Işık ve Ses Devreleri</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yazdığımız kodlarla gerçek LED lambaları ve motorl... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Işık ve Ses Devreleri asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Uygulama Atölyesi: 3. Sınıf Bilişim Şenliği ve Sertifika Töreni'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) 'Parti Dekoru' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "'Yıl Sonu Bilişim Şenliği: Geleceğin Yazılımcıları Mezuniyeti' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?",
      "options": [
        {
          "text": "A) Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
          "isCorrect": true
        },
        {
          "text": "B) Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
          "isCorrect": false
        },
        {
          "text": "C) Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
          "isCorrect": false
        },
        {
          "text": "D) Zararlı yazılımlara karşı güvenlik önlemi almak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Günün Altın Kuralı olan <strong>'Bilinçli Kullanım'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dijital güvenlik ve etik kurallara uymak",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bilinçli Kullanım prensibi, Dijital güvenlik ve etik kurallara uymak gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dijital Üretici Kimliğini İçselleştirme, Yıllık Başarıyı Kutlama ve Gelecek Vizyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Yıl Sonu Bilişim Şenliği: Geleceğin Yazılımcıları Mezuniyeti becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Yıl Sonu Bilişim Şenliği: Geleceğin Yazılımcıları Mezuniyeti becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>Bir okul bilgisayarında 'Yıl Sonu Bilişim Şenliği: Geleceğin Yazılımcıları Mezuniyeti' konusuyla ilgili bir senaryo inceleniyor:<br>Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?",
      "options": [
        {
          "text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.",
          "isCorrect": true
        },
        {
          "text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.",
          "isCorrect": false
        },
        {
          "text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur.",
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
