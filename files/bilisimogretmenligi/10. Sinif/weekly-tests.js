/**
 * MEB 10. Sınıf Bilgisayar Bilimi
 * Haftalık 10 Soruluk Konu Değerlendirme Testleri (Türkiye Yüzyılı Maarif Modeli 2026-2027)
 * Öğretmen: Vahit Keskin
 * 41 Hafta x 10 Soru = 410 Soru
 * Not: 10. Sorular %100 konu uyumlu, derin analiz ve üst düzey düşünme gerektiren zor sorulardır.
 */

const WEEKLY_TESTS = {
  "1": [
    {
      "question": "Git versiyon kontrol sisteminde yapılan değişiklikleri kalıcı bir sürüm noktası olarak kaydedip açıklama ekleyen temel komut hangisidir?",
      "options": [
        {
          "text": "git pull",
          "isCorrect": false
        },
        {
          "text": "git commit -m \"açıklama\"",
          "isCorrect": true
        },
        {
          "text": "git push",
          "isCorrect": false
        },
        {
          "text": "git checkout",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `git commit -m \"...\"` komutu, sahnelenen (staged) değişiklikleri kalıcı bir anlık görüntü (snapshot) olarak yerel depoya mühürler.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilgisayar Bilimi Kur 2 Vizyonu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) OOP, Robotik / IoT, Web/Mobil sistemler ve Yapay Zekâ yol haritası.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilgisayar Bilimi Kur 2 Vizyonu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Yazılım Geliştirme Yaşam Döngüsü (SDLC)' kapsamında ele alınan <strong>1. Planlama ve Analiz</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Müşterinin veya sistemin neye ihtiyaç duyduğunu teknik şartnameye dökme.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Planlama ve Analiz, bilişim sistemlerinde Müşterinin veya sistemin neye ihtiyaç duyduğunu teknik şartn... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Mimari Tasarım (Design)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Veritabanı şemaları, UML diyagramları ve sistem arayüzlerinin çizilmesi.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Mimari Tasarım (Design), Veritabanı şemaları, UML diyagramları ve sistem arayüzlerinin çizilmesi. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Versiyon Kontrol Sistemi: Git Mimarisi' bölümünde vurgulanan <strong>Commit Mesajı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Neyin neden değiştirildiğini anlatan tarihsel hafı... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Commit Mesajı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Terminalde Git Deposu Başlatma ve İlk Commit'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Depo Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Git ile GitHub tamamen aynı şeydir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Git bilgisayarınızda çalışan yerel versiyon kontrol aracıdır; GitHub ise bu depoları bulutta barındıran platformdur.",
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
      "question": "Günün Altın Kuralı olan <strong>'Hassas Bilgileri Yüklemeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Parola, API anahtarı veya veritabanı şifrelerini asla GitHub'a push etmeyin; `.gitignore` kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hassas Bilgileri Yüklemeyin prensibi, Parola, API anahtarı veya veritabanı şifrelerini asla GitHub'a push etmeyin; `.gitignore` kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yazılım Yaşam Döngüsü & Sürüm Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Kur 2'ye Giriş & Yazılım Yaşam Döngüsü becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Kur 2'ye Giriş & Yazılım Yaşam Döngüsü becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "2": [
    {
      "question": "Nesne Yönelimli Programlamada (OOP) bir nesnenin sahip olduğu özellikleri (verileri) ve yapabildiği davranışları (fonksiyonları) tanımlayan genel şablona / kalıba ne ad verilir?",
      "options": [
        {
          "text": "Nesne (Object)",
          "isCorrect": false
        },
        {
          "text": "Sınıf (Class)",
          "isCorrect": true
        },
        {
          "text": "Modül (Module)",
          "isCorrect": false
        },
        {
          "text": "Değişken (Variable)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Sınıf (Class), nesnelerin özellik ve davranışlarını tanımlayan soyut şablondur; bu şablondan üretilen somut varlıklara ise Nesne (Object) denir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Prosedürel vs Nesne Yönelimli' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Fonksiyonlar yığınından birbiriyle haberleşen akıllı nesneler dünyasına geçiş.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Prosedürel vs Nesne Yönelimli' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sınıf (Kalıp) ile Nesne (Örnek) Ayrımı' kapsamında ele alınan <strong>Sınıf (Class)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Soyut tasarımdır. Bellekte yer kaplamaz; kuralları tanımlar (Örn: `Insan` sınıfı).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sınıf (Class), bilişim sistemlerinde Soyut tasarımdır. Bellekte yer kaplamaz; kuralları tanımlar ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Nesne (Object / Instance)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Taslaktan üretilmiş somut örnektir. Bellekte yer tutar (Örn: `ali = Insan()`, `ece = Insan()`).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Nesne (Object / Instance), Taslaktan üretilmiş somut örnektir. Bellekte yer tutar (Örn: `ali = Insan()`, `ece = Insan()`). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Python'da İlk Sınıfın Tanımlanması' bölümünde vurgulanan <strong>Yeniden Kullanılabilirlik</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Tek bir sınıftan binlerce farklı nesne türetebilir... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yeniden Kullanılabilirlik asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bilişim Laboratuvarı Cihaz Sınıfı Modelleme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Sınıfı Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sınıf ile nesne aynı şeydir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Sınıf soyut bir kalıptır (mimari çizim), nesne ise o kalıptan inşa edilen somut binadır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sınıf İsimlerinde Büyük Harf'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `class ogrenci:` yerine mutlaka `class Ogrenci:` yazın; bu standart kodun okunmasını sağlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sınıf İsimlerinde Büyük Harf prensibi, `class ogrenci:` yerine mutlaka `class Ogrenci:` yazın; bu standart kodun okunmasını sağlar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Nesne Yönelimli Modelleme & Soyutlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: OOP Felsefesi: Sınıf & Nesne becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda OOP Felsefesi: Sınıf & Nesne becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "3": [
    {
      "question": "Python'da bir sınıfın yapıcı metodu (constructor) olarak nesne bellekte ilk üretildiği anda çalışan özel metot hangisidir?",
      "options": [
        {
          "text": "def start(self):",
          "isCorrect": false
        },
        {
          "text": "def __init__(self):",
          "isCorrect": true
        },
        {
          "text": "def __build__(self):",
          "isCorrect": false
        },
        {
          "text": "def new(self):",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `__init__` (Initialization / Başlatma) metodu, Python sınıflarının standart yapıcı metodudur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Yapıcı Metot (__init__)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Nesne yaratıldığı anda arka planda otomatik çalışan sihirli kurucu metot.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Yapıcı Metot (__init__)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'__init__ ve self Mimarisi' kapsamında ele alınan <strong>__init__ Rolü</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Nesne oluşturulduğunda ilk çalışan fonksiyondur; zorunlu parametreleri alır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> __init__ Rolü, bilişim sistemlerinde Nesne oluşturulduğunda ilk çalışan fonksiyondur; zorunlu par... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>self Anlamı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Çağıran nesnenin bellekteki adresini gösterir. `araba1.calis()` dendiğinde `self = araba1` olur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> self Anlamı, Çağıran nesnenin bellekteki adresini gösterir. `araba1.calis()` dendiğinde `self = araba1` olur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Akıllı Oyuncu Sınıfı Uygulaması' bölümünde vurgulanan <strong>Dunder Metotlar</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde `__init__`, `__str__` gibi çift alt tireli metotla... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Dunder Metotlar asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Banka Hesabı Sınıfı (Bakiye, Para Yatır, Para Çek)'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. __init__ Yaz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Nesneyi çağırırken `self` parametresini de elimizle girmeliyiz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Python nokta operatörüyle çağrılan nesneyi `self` yerine otomatik olarak arka planda ilk sıraya koyar.",
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
      "question": "Günün Altın Kuralı olan <strong>'self Parametresini Atlamayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Metot tanımlarken `def saldir(self):` yazmazsanız, Python `saldir() takes 0 positional arguments but 1 was given` hatası fırlatır!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> self Parametresini Atlamayın prensibi, Metot tanımlarken `def saldir(self):` yazmazsanız, Python `saldir() takes 0 positional arguments but 1 was given` hatası fırlatır! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sınıf İçi Metot ve Durum Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Yapıcı Metot (__init__) & self becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Yapıcı Metot (__init__) & self becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "4": [
    {
      "question": "Python'da bir sınıf özniteliğini 'Private' (sınıf dışından doğrudan erişilemez) yapmak için öznitelik adının başına hangi karakterler konulur?",
      "options": [
        {
          "text": "Tek alt tire (_degisken)",
          "isCorrect": false
        },
        {
          "text": "Çift alt tire (__degisken)",
          "isCorrect": true
        },
        {
          "text": "Yıldız işareti (*degisken)",
          "isCorrect": false
        },
        {
          "text": "Dolar işareti ($degisken)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Python'da çift alt tire (`__`) ile başlayan öznitelikler 'Name Mangling' mekanizmasıyla dışarıdan doğrudan erişime kapatılarak Private hale getirilir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kapsülleme (Encapsulation) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Veriyi ve o veriyi işleyen metotları tek bir kapsül içinde koruma altına alma ilkesi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kapsülleme (Encapsulation) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Veri Gizleme ve Güvenlik Seviyeleri' kapsamında ele alınan <strong>Public (Genel)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `self.ad = 'Ali'` - Herkes doğrudan okur ve değiştirebilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Public (Genel), bilişim sistemlerinde `self.ad = 'Ali'` - Herkes doğrudan okur ve değiştirebilir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Protected (Korumalı)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) `self._hiz = 50` - Tek alt tire; geliştiriciye 'Dışarıdan dokunma' ricasıdır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Protected (Korumalı), `self._hiz = 50` - Tek alt tire; geliştiriciye 'Dışarıdan dokunma' ricasıdır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Güvenli Banka Hesabı ve Setter Doğrulaması' bölümünde vurgulanan <strong>Veri Bütünlüğü</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Hatalı değerlerin sistemin hafızasına girmesini se... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Veri Bütünlüğü asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Termostat Sınıfı Kapsülleme Atölyesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Sınıf & Private Alan' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Python'da C++ veya Java'daki gibi mutlak 'private' vardır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Python 'hepimiz yetişkin insanlarız' felsefesini benimser; iki alt tire güçlü bir sözleşmedir ancak bellekten mutlak kilit vurmaz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Gereksiz Yere Her Şeyi Private Yapmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sadece korunması ve kurallara bağlanması gereken kritik verileri private yapın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Gereksiz Yere Her Şeyi Private Yapmayın prensibi, Sadece korunması ve kurallara bağlanması gereken kritik verileri private yapın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Bütünlüğü & Güvenli Sınıf Tasarımı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Kapsülleme (Encapsulation) & Veri Gizleme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Kapsülleme (Encapsulation) & Veri Gizleme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "5": [
    {
      "question": "Python'da bir alt sınıfın (child class), üst sınıfının (parent class) yapıcı metodunu çağırmasını sağlayan yerleşik fonksiyon hangisidir?",
      "options": [
        {
          "text": "parent()",
          "isCorrect": false
        },
        {
          "text": "super()",
          "isCorrect": true
        },
        {
          "text": "base()",
          "isCorrect": false
        },
        {
          "text": "this()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `super()` fonksiyonu alt sınıftan üst sınıfın metotlarına (özellikle `super().__init__()`) erişim sağlayan standart fonksiyondur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kalıtım (Miras) Kavramı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Biyolojik gen aktarımı gibi; üst sınıfın yeteneklerini alt sınıfa devretme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kalıtım (Miras) Kavramı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Kalıtımın Temel Mekanizması' kapsamında ele alınan <strong>Temel Sınıf (Superclass)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) En genel özellikleri barındırır (Örn: `Arac`).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Temel Sınıf (Superclass), bilişim sistemlerinde En genel özellikleri barındırır (Örn: `Arac`).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Türemiş Sınıf (Subclass)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Üst sınıftan her şeyi alır ve üzerine ekleme yapar (Örn: `ElektrikliArac(Arac)`).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Türemiş Sınıf (Subclass), Üst sınıftan her şeyi alır ve üzerine ekleme yapar (Örn: `ElektrikliArac(Arac)`). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Robot Hiyerarşisi Uygulaması' bölümünde vurgulanan <strong>Bakım Kolaylığı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Ortak bir kural değiştiğinde sadece üst sınıfı gün... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Bakım Kolaylığı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Okul Bilişim Ailesi Sınıf Hiyerarşisi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Kisi Sınıfı Yaz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Alt sınıf üst sınıftaki private (`__`) değişkenlere doğrudan erişebilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Private alanlar alt sınıflara bile gizlidir; alt sınıf onlara ancak üst sınıfın public metotlarıyla ulaşabilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'super() Çağrısını Unutmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Alt sınıfın `__init__` metodunun ilk satırına daima `super().__init__(...)` yazın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> super() Çağrısını Unutmayın prensibi, Alt sınıfın `__init__` metodunun ilk satırına daima `super().__init__(...)` yazın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Hiyerarşik Modelleme & Kod Yeniden Kullanılabilirliği'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Kalıtım (Inheritance) & super() becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Kalıtım (Inheritance) & super() becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "6": [
    {
      "question": "Farklı sınıfların aynı isimli metotlara sahip olarak ortak bir döngü veya fonksiyonda aynı biçimde çağrılabilmesine Nesne Yönelimli Programlamada ne ad verilir?",
      "options": [
        {
          "text": "Kapsülleme (Encapsulation)",
          "isCorrect": false
        },
        {
          "text": "Kalıtım (Inheritance)",
          "isCorrect": false
        },
        {
          "text": "Çok Biçimlilik (Polymorphism)",
          "isCorrect": true
        },
        {
          "text": "Derleme (Compilation)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Çok Biçimlilik (Polymorphism), farklı sınıfların aynı arayüzü (aynı isimli metotları) kendi bünyelerinde farklı biçimlerde icra edebilmesidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Çok Biçimlilik (Polymorphism)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Farklı sınıfların aynı isimli metotlara sahip olarak ortak bir arayüz sunması.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Çok Biçimlilik (Polymorphism)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Metot Ezme ve Çok Biçimlilik Mimarisi' kapsamında ele alınan <strong>Method Overriding</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Alt sınıf üst sınıfın metodunu aynı isimle yeniden yazar; çağrıldığında alt sınıfınki çalışır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Method Overriding, bilişim sistemlerinde Alt sınıf üst sınıfın metodunu aynı isimle yeniden yazar; ça... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Döngü ile Çalışma</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Tek bir listedeki yüzlerce farklı nesneyi `for nesne in liste: nesne.ses_cikar()` ile yönetebilme.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Döngü ile Çalışma, Tek bir listedeki yüzlerce farklı nesneyi `for nesne in liste: nesne.ses_cikar()` ile yönetebilme. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Ses Çıkaran Canlılar ve Çok Biçimlilik' bölümünde vurgulanan <strong>Açık/Kapalı Prensibi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yeni bir `Kus` sınıfı eklediğinizde mevcut döngü k... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Açık/Kapalı Prensibi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Geometrik Şekiller Alan Hesaplayıcı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Sekil Taban Sınıfı' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Polymorphism sadece kalıtımla mümkündür.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Python'da 'Duck Typing' sayesinde iki sınıf arasında kalıtım bağı olmasa bile aynı isimli metotları varsa çok biçimli davranabilirler.",
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
      "question": "Günün Altın Kuralı olan <strong>'Metot İsimlerini Birebir Aynı Tutun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Üst sınıfta `alan()` iken alt sınıfta `alan_hesapla()` yazarsanız override gerçekleşmez!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Metot İsimlerini Birebir Aynı Tutun prensibi, Üst sınıfta `alan()` iken alt sınıfta `alan_hesapla()` yazarsanız override gerçekleşmez! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Esnek Arayüz Tasarımı & Çok Biçimli Algoritmalar'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Çok Biçimlilik & Metot Ezme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Çok Biçimlilik & Metot Ezme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "7": [
    {
      "question": "Python'da var olan bir metin dosyasının içindeki eski verileri silmeden, yeni verileri dosyanın en sonuna eklemek için hangi dosya açma kipi (mode) kullanılır?",
      "options": [
        {
          "text": "'r'",
          "isCorrect": false
        },
        {
          "text": "'w'",
          "isCorrect": false
        },
        {
          "text": "'a'",
          "isCorrect": true
        },
        {
          "text": "'x'",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. 'a' (Append / Ekleme) kipi, dosya varsa mevcut içeriği korur ve imleci dosyanın sonuna koyarak yeni kayıtları ekler.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Uçucu Bellek vs Kalıcı Depolama' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) RAM ile Disk (SSD/HDD) farkı ve dosyaların işletim sistemindeki yeri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Uçucu Bellek vs Kalıcı Depolama' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Python Dosya Okuma/Yazma Standartları' kapsamında ele alınan <strong>'r' Kipi</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Okuma modu. Dosya yoksa `FileNotFoundError` fırlatır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 'r' Kipi, bilişim sistemlerinde Okuma modu. Dosya yoksa `FileNotFoundError` fırlatır.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>'w' Kipi</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yazma modu. Dosya varsa içindekileri tamamen SİLER, baştan yazar!",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 'w' Kipi, Yazma modu. Dosya varsa içindekileri tamamen SİLER, baştan yazar! açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Öğrenci Not Kayıt ve CSV Dışa Aktarım' bölümünde vurgulanan <strong>Otomatik Kapanma</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde `with` bloğu bittiğinde dosya arka planda işletim ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Otomatik Kapanma asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kişisel Günlük ve Şifreli Not Defteri'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Kullanıcıdan Not Al' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Dosyayı kapatmak için mutlaka elimizle `f.close()` yazmalıyız.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) `with` bağlam yöneticisi kullanıldığında kod hata fırlatsa bile dosya yüzde yüz güvenle otomatik kapatılır.",
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
      "question": "Günün Altın Kuralı olan <strong>''w' Moduna Çok Dikkat Edin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Mevcut bir dosyayı `'w'` kipiyle açtığınız an içindeki tüm eski veriler anında kalıcı olarak silinir!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> 'w' Moduna Çok Dikkat Edin prensibi, Mevcut bir dosyayı `'w'` kipiyle açtığınız an içindeki tüm eski veriler anında kalıcı olarak silinir! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kalıcı Veri Yönetimi & Tablosal Dosya İşleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Dosya İşlemleri (I/O) & CSV becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Dosya İşlemleri (I/O) & CSV becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "8": [
    {
      "question": "Python'da çalışma anında meydana gelebilecek olası hataları yakalamak ve programın beklenmedik şekilde çökmesini engellemek için hangi blok yapısı kullanılır?",
      "options": [
        {
          "text": "if - elif - else",
          "isCorrect": false
        },
        {
          "text": "try - except - finally",
          "isCorrect": true
        },
        {
          "text": "while - break",
          "isCorrect": false
        },
        {
          "text": "def - return",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `try` bloğu riskli kodları çalıştırır, hata oluşursa `except` bloğu devreye girer, `finally` ise temizlik kodlarını yürütür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'JSON (JavaScript Object Notation)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İnternet dünyasının evrensel veri paketleme standardı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'JSON (JavaScript Object Notation)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'JSON Formatı ve İstisna Hiyerarşisi' kapsamında ele alınan <strong>Python Dict  JSON Object</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Python anahtar-değer sözlükleri doğrudan JSON objesi `{}` olur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Python Dict  JSON Object, bilişim sistemlerinde Python anahtar-değer sözlükleri doğrudan JSON objesi `{}` ol... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Python List  JSON Array</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Python listeleri JSON dizisi `[]` olarak aktarılır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Python List  JSON Array, Python listeleri JSON dizisi `[]` olarak aktarılır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Ayarlar Dosyası ve Güvenli Hata Yakalama' bölümünde vurgulanan <strong>ensure_ascii=False</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde JSON içine Türkçe karakterleri Unicode koduna dönü... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> ensure_ascii=False asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Görev Yöneticisi (Todo App)'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Dosya Kontrolü' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Hata yakalama (try-except) programı yavaşlatır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Modern dillerde try bloğunun performans etkisi ihmal edilebilir düzeydedir; çökmeden çalışan bir sistem her şeyden değerlidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Asla Boş 'except:' Yazmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sadece `except:` yazıp geçmek programın neden çöktüğünü gizler; daima spesifik hata adını belirtin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Asla Boş 'except:' Yazmayın prensibi, Sadece `except:` yazıp geçmek programın neden çöktüğünü gizler; daima spesifik hata adını belirtin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Değişimi & Dayanıklı (Fault-Tolerant) Kodlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: JSON Veri Formatı & Hata Yakalama becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda JSON Veri Formatı & Hata Yakalama becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "9": [
    {
      "question": "Arduino programlarında kart ilk açıldığında veya yeniden başlatıldığında sadece bir defa çalışan ve pin yapılandırmalarının yapıldığı özel fonksiyon hangisidir?",
      "options": [
        {
          "text": "void main()",
          "isCorrect": false
        },
        {
          "text": "void setup()",
          "isCorrect": true
        },
        {
          "text": "void loop()",
          "isCorrect": false
        },
        {
          "text": "void init()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `setup()` fonksiyonu kart enerjilendiğinde tek bir kez çalışarak pinlerin giriş/çıkış modlarını ve iletişim hızını ayarlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Mikroişlemci vs Mikrodenetleyici' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Bilgisayar CPU'su (işlem gücü) ile tek yongada bilgisayar (SoC / MCU) farkı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Mikroişlemci vs Mikrodenetleyici' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Gömülü Sistem Mimarisi ve Pin Dağılımı' kapsamında ele alınan <strong>Dijital Pinler (0 - 13)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sadece 0V (LOW) veya 5V (HIGH) durumlarını anlar ve üretir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Dijital Pinler (0 - 13), bilişim sistemlerinde Sadece 0V (LOW) veya 5V (HIGH) durumlarını anlar ve üretir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>PWM Pinleri (~3, 5, 6, 9, 10, 11)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Hız ve parlaklık gibi ara kademeleri simüle eden özel dijital pinler.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> PWM Pinleri (~3, 5, 6, 9, 10, 11), Hız ve parlaklık gibi ara kademeleri simüle eden özel dijital pinler. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'C/C++ Arduino Kod İskeleti' bölümünde vurgulanan <strong>Gömülü Mantık</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Gömülü cihazlarda işletim sistemi yoktur; yazdığın... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Gömülü Mantık asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Arduino IDE Kurulumu ve Dahili LED Yakma'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. IDE ve Port Seçimi' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Arduino kodlamak için çok ileri düzey C bilmek gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Arduino sadeleştirilmiş C++ dili kullanır ve fonksiyonları Python kadar kolay ve anlaşılırdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kısa Devreye Dikkat Edin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 5V ile GND pinlerini asla doğrudan birbirine bağlamayın; kartın regülatörü yanabilir!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kısa Devreye Dikkat Edin prensibi, 5V ile GND pinlerini asla doğrudan birbirine bağlamayın; kartın regülatörü yanabilir! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Gömülü Sistem Mimarisi & Donanım Tanıma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Mikrodenetleyiciler & Donanıma Giriş becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Mikrodenetleyiciler & Donanıma Giriş becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "10": [
    {
      "question": "Ohm Kanunu'na (V = I * R) göre 5 Volt gerilimle çalışan bir devrede akımı 0.02 Amper (20 mA) ile sınırlamak için bağlanması gereken ideal direnç değeri kaç Ohm'dur?",
      "options": [
        {
          "text": "100 Ω",
          "isCorrect": false
        },
        {
          "text": "250 Ω (veya pratik standart 220 Ω)",
          "isCorrect": true
        },
        {
          "text": "1000 Ω",
          "isCorrect": false
        },
        {
          "text": "10 Ω",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. R = V / I formülünden R = 5V / 0.02A = 250 Ω çıkar. Piyasada en yakın standart değer 220 Ω veya 330 Ω olarak güvenle kullanılır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Elektriğin Temel Büyüklükleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Voltaj (Gerilim - V), Akım (Şiddet - I) ve Direnç (Zorluk - R).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Elektriğin Temel Büyüklükleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Ohm Kanunu ve LED Direnç Hesabı' kapsamında ele alınan <strong>Formül: V = I * R</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Gerilim (Volt) = Akım (Amper) x Direnç (Ohm).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Formül: V = I * R, bilişim sistemlerinde Gerilim (Volt) = Akım (Amper) x Direnç (Ohm).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>LED Çalışma Şartı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kırmızı LED yaklaşık 2V gerilim ve 20mA (0.02A) akımla güvenle ışık verir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> LED Çalışma Şartı, Kırmızı LED yaklaşık 2V gerilim ve 20mA (0.02A) akımla güvenle ışık verir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Breadboard Üzerinde Harici LED Devresi' bölümünde vurgulanan <strong>Breadboard Bağlantısı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Dikey delikler (1-30) kendi aralarında 5'erli ilet... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Breadboard Bağlantısı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Trafik Işıkları Simülasyonu Devresi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. 3 LED ve 3 Direnç Yerleştir' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Direncin LED'den önce mi sonra mı takıldığı sonucu değiştirir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Direnç seridir; LED'in ister anaduna ister katotuna takılsın devredeki akımı eşit derecede sınırlar.",
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
      "question": "Günün Altın Kuralı olan <strong>'Direnci Asla Atlamayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 5V hatta bağlanan hiçbir LED'i dirençsiz bırakmayın; direnç akım sınırlayıcı hayat sigortasıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Direnci Asla Atlamayın prensibi, 5V hatta bağlanan hiçbir LED'i dirençsiz bırakmayın; direnç akım sınırlayıcı hayat sigortasıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Devre Analizi & Breadboard Üzerinde Prototipleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Temel Elektronik & Breadboard Devreleri becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Temel Elektronik & Breadboard Devreleri becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "11": [
    {
      "question": "Arduino'da `pinMode(2, INPUT_PULLUP);` komutu verildiğinde ve butona basılmadığında `digitalRead(2)` hangi değeri döner?",
      "options": [
        {
          "text": "LOW (0)",
          "isCorrect": false
        },
        {
          "text": "HIGH (1)",
          "isCorrect": true
        },
        {
          "text": "2.5V (Belirsiz)",
          "isCorrect": false
        },
        {
          "text": "-1 (Hata)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Dahili Pull-up direnci pini VCC (+5V) hattına çektiği için buton basılı değilken pin HIGH (1) okunur; basıldığında GND'ye çekilip LOW (0) olur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'GPIO Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Genel Amaçlı Giriş/Çıkış pinlerinin voltaj seviyeleri (HIGH: 5V/3.3V, LOW: 0V).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'GPIO Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Giriş ve Floating Pin Problemi' kapsamında ele alınan <strong>Çözüm: Pull-up Direnci</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Pini bir dirençle 5V'a bağlayarak boştayken kararlı HIGH seviyesinde tutar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Çözüm: Pull-up Direnci, bilişim sistemlerinde Pini bir dirençle 5V'a bağlayarak boştayken kararlı HIGH sev... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>pinMode(pin, INPUT_PULLUP)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Arduino'nun içindeki dahili 20kΩ direnci aktif eder; harici dirence gerek kalmaz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> pinMode(pin, INPUT_PULLUP), Arduino'nun içindeki dahili 20kΩ direnci aktif eder; harici dirence gerek kalmaz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Buton ile LED Yakma & Toggle Mantığı' bölümünde vurgulanan <strong>millis() vs delay()</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde delay() işlemciyi dondururken, millis() zaman saya... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> millis() vs delay() asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'INPUT_PULLUP ile Buton Kontrollü Güvenlik Kilidi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Devreyi Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Butonun bir bacağını 5V'a, diğerini doğrudan pine bağlarsak harika çalışır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Buton bırakıldığında pin boşta kalır (floating) ve devre parazitlerle kafayı yer; mutlaka pull-up/down gerekir.",
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
      "question": "Günün Altın Kuralı olan <strong>'OUTPUT Olarak Tanımlı Pini GND'ye Doğrudan Bağlamayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) HIGH iken GND'ye değerse aşırı akım çekilir ve mikrodenetleyicinin o pini kalıcı olarak yanar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> OUTPUT Olarak Tanımlı Pini GND'ye Doğrudan Bağlamayın prensibi, HIGH iken GND'ye değerse aşırı akım çekilir ve mikrodenetleyicinin o pini kalıcı olarak yanar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dijital Giriş/Çıkış Devreleri & Mantıksal Anahtarlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Dijital Giriş/Çıkış & Buton ile LED Kontrolü becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Dijital Giriş/Çıkış & Buton ile LED Kontrolü becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "12": [
    {
      "question": "Arduino'da `analogRead(A0)` komutu 512 değerini okuduğunda, A0 pinine uygulanan gerçek fiziksel voltaj yaklaşık kaç volttur?",
      "options": [
        {
          "text": "1.25 V",
          "isCorrect": false
        },
        {
          "text": "2.50 V",
          "isCorrect": true
        },
        {
          "text": "3.30 V",
          "isCorrect": false
        },
        {
          "text": "5.00 V",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. 10-bit ADC 0V'u 0, 5V'u 1023 olarak kodlar. 512 değeri tam orta nokta olduğundan (512 / 1023) * 5V ≈ 2.50 Volt'a karşılık gelir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Analog Dünya vs Dijital Dünya' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Gerçek hayattaki sürekli voltaj (0-5V) ile 0/1 arasındaki fark.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Analog Dünya vs Dijital Dünya' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'analogRead() vs analogWrite() Çözünürlükleri' kapsamında ele alınan <strong>analogRead(A0)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 0V için 0, 2.5V için 512, 5V için 1023 değerini döndürür.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> analogRead(A0), bilişim sistemlerinde 0V için 0, 2.5V için 512, 5V için 1023 değerini döndürür.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>analogWrite(pin, deger)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yalnızca yanında '~' simgesi olan PWM pinlerinde (3, 5, 6, 9, 10, 11) 0-255 arası çalışır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> analogWrite(pin, deger), Yalnızca yanında '~' simgesi olan PWM pinlerinde (3, 5, 6, 9, 10, 11) 0-255 arası çalışır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Potansiyometre ile RGB LED Renk Mikseri' bölümünde vurgulanan <strong>Ortak Anot vs Ortak Katot</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Katot devrede eksi ucu (GND) ortaktır; 255 tam par... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Ortak Anot vs Ortak Katot asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Masa Lambası Tasarımı (Potansiyometreli Dimmer)'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Potansiyometreyi Bağla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"analogWrite() pinden gerçekten 2.5V gibi sürekli analog voltaj çıkartır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Arduino gerçek DAC (Dijital-Analog Çevirici) içermez; 0V ve 5V arasında yüksek hızda kare dalga açıp kapatır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Analog Pinlere Asla 5V Üzerinde Gerilim Vermeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) ADC girişine 5V'tan yüksek voltaj gelirse mikrodenetleyicinin analog modülü kalıcı hasar görür.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Analog Pinlere Asla 5V Üzerinde Gerilim Vermeyin prensibi, ADC girişine 5V'tan yüksek voltaj gelirse mikrodenetleyicinin analog modülü kalıcı hasar görür. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Analog Veri İşleme & PWM Sinyal Modülasyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Analog Sinyaller & PWM ile RGB LED Kontrolü becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Analog Sinyaller & PWM ile RGB LED Kontrolü becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "13": [
    {
      "question": "HC-SR04 sensörüyle yapılan ölçümde `pulseIn(ECHO, HIGH)` süresi 2000 mikrosaniye çıkmıştır. Ses hızı 0.0343 cm/µs kabul edilirse engelin mesafesi kaç santimetredir?",
      "options": [
        {
          "text": "68.6 cm",
          "isCorrect": false
        },
        {
          "text": "34.3 cm",
          "isCorrect": true
        },
        {
          "text": "17.15 cm",
          "isCorrect": false
        },
        {
          "text": "100 cm",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Ses engele gidip tekrar geri döndüğü için süre 2'ye bölünür: 2000 / 2 = 1000 µs. Mesafe = 1000 * 0.0343 = 34.3 cm.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Sensör Sınıflandırması' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Analog sensörler (LDR, NTC) vs Dijital/Zaman tabanlı sensörler (HC-SR04, DHT11).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Sensör Sınıflandırması' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'HC-SR04 Ultrasonik Mesafe Ölçüm Felsefesi' kapsamında ele alınan <strong>1. Tetikleme (Trigger)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Trig pinine 10 mikrosaniyelik HIGH darbesi verilir; sensör 8 adet ses dalgası yayar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Tetikleme (Trigger), bilişim sistemlerinde Trig pinine 10 mikrosaniyelik HIGH darbesi verilir; sensör 8... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Dinleme (Echo)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Ses engele çarpıp dönene kadar Echo pini HIGH kalır; `pulseIn(ECHO, HIGH)` bu süreyi ölçer.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Dinleme (Echo), Ses engele çarpıp dönene kadar Echo pini HIGH kalır; `pulseIn(ECHO, HIGH)` bu süreyi ölçer. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'HC-SR04 ile Park Sensörü ve Radar Sistemi' bölümünde vurgulanan <strong>Yankı Alamama (Timeout)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Ses engelden sekmezse pulseIn fonksiyonu varsayıla... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yankı Alamama (Timeout) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Otonom Araçlar İçin Çarpışma Önleyici Radar'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. HC-SR04 Bağla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"HC-SR04 kızılötesi lazer ışığıyla mesafe ölçer.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! HC-SR04 mekanik ses dalgası kullanır; optik lazer sensörler VL53L0X gibi ToF (Time-of-Flight) sensörleridir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kumaş ve Sünger Gibi Yutucu Yüzeyler'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yumuşak yüzeyler ultrasonik sesi soğurur, yankı geri dönmez ve mesafe ölçülemez.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kumaş ve Sünger Gibi Yutucu Yüzeyler prensibi, Yumuşak yüzeyler ultrasonik sesi soğurur, yankı geri dönmez ve mesafe ölçülemez. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sensör Verisi Toplama & Çevresel Algılama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Çevre Algılama: Sensörler & HC-SR04 Mesafe Sensörü becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Çevre Algılama: Sensörler & HC-SR04 Mesafe Sensörü becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "14": [
    {
      "question": "Bir servo motora `motor.write(180);` komutu gönderildiğinde motor milinin hareketi ne olur?",
      "options": [
        {
          "text": "180 saniye boyunca son hızla döner",
          "isCorrect": false
        },
        {
          "text": "180 derecelik açısal konuma gider ve orada kilitlenir",
          "isCorrect": true
        },
        {
          "text": "Saniyede 180 tur atar",
          "isCorrect": false
        },
        {
          "text": "180 milivolt gerilim üretir",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Standart servo motorlar açısal konumlandırma (0-180 derece) aktüatörleridir; girilen açı değerine ulaşıp pozisyonunu korur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Aktüatör Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sensörün aldığı kararı fiziksel harekete, sese veya güce çeviren eyleyici elemanlar.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Aktüatör Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Servo Motor vs Step Motor vs DC Motor' kapsamında ele alınan <strong>Kapalı Çevrim Kontrol</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) İçindeki potansiyometre motor milinin açısını sürekli okur ve hedefe varınca motoru durdurur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kapalı Çevrim Kontrol, bilişim sistemlerinde İçindeki potansiyometre motor milinin açısını sürekli okur v... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>PWM Kontrol Prensibi</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 50 Hz (20ms periyot) sinyalinde 1ms pals 0°, 1.5ms pals 90°, 2ms pals 180° açısına karşılık gelir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> PWM Kontrol Prensibi, 50 Hz (20ms periyot) sinyalinde 1ms pals 0°, 1.5ms pals 90°, 2ms pals 180° açısına karşılık gelir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Ultrasonik Radar Taraması Yapan Servo Kodu' bölümünde vurgulanan <strong>Akım Sıçraması</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Birden fazla servo aynı anda dönerse Arduino reset... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Akım Sıçraması asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Otopark Bariyeri Sistemi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Servoyu ve Sensörü Bağla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Servo motor sürekli kendi etrafında 360 derece döner.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Standart servolar 180 derece ile sınırlıdır. 360 derece dönebilenler 'Continuous Servo' olarak adlandırılır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Asla Servoyu Zorla Elinizle Döndürmeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) SG90 motorların plastik dişlileri aşırı narindir; zorlandığında diş sıyırır ve motor bozulur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Asla Servoyu Zorla Elinizle Döndürmeyin prensibi, SG90 motorların plastik dişlileri aşırı narindir; zorlandığında diş sıyırır ve motor bozulur. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Fiziksel Eyleyiciler & Mekanik Güç Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Aktüatörler: Servo Motor, Röle & Mekanik Eyleyiciler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Aktüatörler: Servo Motor, Röle & Mekanik Eyleyiciler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "15": [
    {
      "question": "Arduino Uno mikrodenetleyicisinde I2C haberleşme protokolünün SDA (Veri) ve SCL (Saat) sinyalleri standart olarak hangi pinlerden alınır?",
      "options": [
        {
          "text": "D0 ve D1 pinleri",
          "isCorrect": false
        },
        {
          "text": "A4 (SDA) ve A5 (SCL) pinleri",
          "isCorrect": true
        },
        {
          "text": "D9 ve D10 PWM pinleri",
          "isCorrect": false
        },
        {
          "text": "Vin ve 5V pinleri",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. ATmega328P işlemcisinde dahili donanımsal TWI (I2C) birimi A4 (SDA) ve A5 (SCL) pinlerine bağlıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Geleneksel Paralel LCD vs I2C LCD' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 16 pinlik karmaşık bağlantı yerine I2C modülü ile 4 pine (VCC, GND, SDA, SCL) düşürme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Geleneksel Paralel LCD vs I2C LCD' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'I2C Haberleşme Mimarisi ve Adresleme' kapsamında ele alınan <strong>Sadece 2 İletişim Hattı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Arduino Uno'da A4 pini SDA (veri), A5 pini SCL (saat sinyali) olarak görev yapar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Sadece 2 İletişim Hattı, bilişim sistemlerinde Arduino Uno'da A4 pini SDA (veri), A5 pini SCL (saat sinyali... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Adres Tabanlı İletişim</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Her cihazın benzersiz bir kimlik adresi vardır (örn: LCD için `0x27`, RTC saat modülü için `0x68`).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Adres Tabanlı İletişim, Her cihazın benzersiz bir kimlik adresi vardır (örn: LCD için `0x27`, RTC saat modülü için `0x68`). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sensör Verilerini LCD Ekrana Yazdırma' bölümünde vurgulanan <strong>lcd.clear() Kullanımı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sürekli loop içinde clear() çağrılırsa ekran titre... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> lcd.clear() Kullanımı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Çevre İstasyonu Gösterge Paneli'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. LCD'yi Arduino'ya Bağla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"I2C LCD ekrana istediğimiz her Türkçe karakteri (ğ, ş, ı) doğrudan yazdırabiliriz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Karakter LCD'ler ROM'larında standart ASCII tablosu barındırır; 'ğ, ş' gibi harfler için `createChar()` ile 5x8 özel piksel çizilmelidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Ekranda Sadece Beyaz Kareler Varsa'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Bu durum ekranın elektrik aldığını ama işlemciyle haberleşemediğini gösterir; I2C adresini ve SDA/SCL bağlantılarını kontrol edin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Ekranda Sadece Beyaz Kareler Varsa prensibi, Bu durum ekranın elektrik aldığını ama işlemciyle haberleşemediğini gösterir; I2C adresini ve SDA/SCL bağlantılarını kontrol edin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'I2C Haberleşme Protokolü & Görsel Kullanıcı Arayüzü'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Bilgi Ekranları: I2C LCD 16x2 & Robotik Entegrasyon becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Bilgi Ekranları: I2C LCD 16x2 & Robotik Entegrasyon becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "16": [
    {
      "question": "Aşağıdaki HTML5 etiketlerinden hangisi bir web sayfasının ana ve benzersiz içeriğini barındırmak için özel olarak tasarlanmıştır?",
      "options": [
        {
          "text": "",
          "isCorrect": false
        },
        {
          "text": "",
          "isCorrect": true
        },
        {
          "text": "",
          "isCorrect": false
        },
        {
          "text": "",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `<main>` etiketi bir sayfada yalnızca bir kez bulunur ve o belgenin temel ana konusunu temsil eder.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'İstemci-Sunucu Mimarisi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) İstemci (Tarayıcı) istek atar (Request), Sunucu işler ve yanıt döner (Response).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'İstemci-Sunucu Mimarisi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Neden Semantik (Anlamsal) HTML5?' kapsamında ele alınan <strong>ve</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Site logosu, ana başlık ve gezinme menüsü linklerini içerir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> ve, bilişim sistemlerinde Site logosu, ana başlık ve gezinme menüsü linklerini içerir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>ve</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sayfanın asıl benzersiz gövdesini ve kendi başına bağımsız okunabilir yazıları temsil eder.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> ve, Sayfanın asıl benzersiz gövdesini ve kendi başına bağımsız okunabilir yazıları temsil eder. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Semantik Bir Teknoloji Blogu İskeleti' bölümünde vurgulanan <strong>Erişilebilirlik (A11y)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Görme engelliler için ekran okuyucular doğrudan ``... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Erişilebilirlik (A11y) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kişisel Bilişim Portfolyosu İskeleti Oluşturma'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Proje Klasörü Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"HTML bir programlama dilidir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) HTML programlama dili değil, bir 'İşaretleme Dilidir' (Markup Language); döngü veya mantıksal karar içermez.",
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
      "question": "Günün Altın Kuralı olan <strong>'HTTP Üzerinden Asla Şifre Göndermeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) HTTP trafiği düz metindir; aynı ağdaki herkes Wireshark ile parolanızı açıkça okuyabilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> HTTP Üzerinden Asla Şifre Göndermeyin prensibi, HTTP trafiği düz metindir; aynı ağdaki herkes Wireshark ile parolanızı açıkça okuyabilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Web Mimarisi & Semantik Sayfa İskeleti İnşası'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Web Mimarisine Giriş & HTML5 Semantik Yapı becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Web Mimarisine Giriş & HTML5 Semantik Yapı becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "17": [
    {
      "question": "Aşağıdaki kod satırlarından hangisi bir Arduino devresinde 9. pine bağlı LED'in parlaklığını yarı yarıya yakmak için doğru bir ifadedir?",
      "options": [
        {
          "text": "digitalWrite(9, 50);",
          "isCorrect": false
        },
        {
          "text": "analogWrite(9, 127);",
          "isCorrect": true
        },
        {
          "text": "analogRead(9, 512);",
          "isCorrect": false
        },
        {
          "text": "pinMode(9, 2.5V);",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. analogWrite() 0 ile 255 arasında PWM değeri alır. 127 yaklaşık olarak %50 duty cycle (yarı parlaklık) sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'OOP Kritik Soru Kalıpları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sınıf, kalıtım, encapsulation ve `__init__` constructor senaryoları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'OOP Kritik Soru Kalıpları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'1. Dönem Çıkabilecek Kritik Kod Senaryoları' kapsamında ele alınan <strong>Cevap</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Üst sınıfın nitelikleri başlatılamaz; alt sınıf üst sınıftaki değişkenlere erişmeye çalıştığında `AttributeError` fırlatır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Cevap, bilişim sistemlerinde Üst sınıfın nitelikleri başlatılamaz; alt sınıf üst sınıftak... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Püf Noktası</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) `super()` metodu üst sınıfın yapıcı fonksiyonunu çalıştırıp ortak alanları miras aldırır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Püf Noktası, `super()` metodu üst sınıfın yapıcı fonksiyonunu çalıştırıp ortak alanları miras aldırır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bütünleşik Örnek: IoT Sensör Okuma Sınıfı' bölümünde vurgulanan <strong>Sınavda Puan Getiren Detay</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde with bloğu dosya kapatmayı (close) garanti eder.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sınavda Puan Getiren Detay asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akran Değerlendirmeli Sınav Provası'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Soru Hazırla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılı sınavda sadece kodun hatasız çalışması puan getirir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Öğretmenler problem çözme yaklaşımına, algoritma mantığına ve temiz kod standartlarına da kısmi puan verir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Değişken İsimlerini Anlaşılır Yazın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sınav kağıdına `a`, `b`, `x` yerine `sicaklik`, `mesafe` gibi anlamlı isimler yazmak puan kazandırır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Değişken İsimlerini Anlaşılır Yazın prensibi, Sınav kağıdına `a`, `b`, `x` yerine `sicaklik`, `mesafe` gibi anlamlı isimler yazmak puan kazandırır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kapsamlı Kod Analizi & Problem Çözme Sentezi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 1. Dönem 2. Yazılı Sınav Tekrarı & Pekiştirme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 1. Dönem 2. Yazılı Sınav Tekrarı & Pekiştirme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "18": [
    {
      "question": "Bir CSS Grid konteynerinde 3 eşit genişlikte sütun oluşturmak için kullanılan en modern ve temiz CSS ifadesi hangisidir?",
      "options": [
        {
          "text": "grid-template-columns: 33.3% 33.3% 33.3%;",
          "isCorrect": false
        },
        {
          "text": "grid-template-columns: repeat(3, 1fr);",
          "isCorrect": true
        },
        {
          "text": "display: flex-columns(3);",
          "isCorrect": false
        },
        {
          "text": "columns: 3px;",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `repeat(3, 1fr)` ifadesi alanı 3 eşit kesire (fraction) böler; padding ve gap değerlerini otomatik hesaplayarak taşmayı önler.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'CSS Kutu Modeli (Box Model)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Content, Padding, Border ve Margin katmanlarının piksel matematiği.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'CSS Kutu Modeli (Box Model)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Flexbox vs CSS Grid Karşılaştırması' kapsamında ele alınan <strong>justify-content</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Ana eksende (yatayda) öğeleri dağıtır: `center`, `space-between`, `space-around`.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> justify-content, bilişim sistemlerinde Ana eksende (yatayda) öğeleri dağıtır: `center`, `space-betw... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>align-items</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Çapraz eksende (dikeyde) öğeleri hizalar: `center` ile tek satırda dikey ortalama.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> align-items, Çapraz eksende (dikeyde) öğeleri hizalar: `center` ile tek satırda dikey ortalama. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Duyarlı (Responsive) Kart Izgarası CSS Kodu' bölümünde vurgulanan <strong>Mobil Öncelikli Tasarım</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Önce telefon görünümünü tasarlayıp sonra @media il... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Mobil Öncelikli Tasarım asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Responsive Teknoloji Haber Portalı Tasarımı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Navbar Tasarla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Flexbox varken artık CSS Grid'e hiç gerek yoktur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Flexbox tek boyut (satır VEYA sütun) için harikadır; ancak 2 boyutlu matris ve sayfa düzenlerinde Grid çok daha üstündür.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sabit Genişliklerden (px) Kaçının'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kapsayıcılara `width: 1200px;` vermek telefonda sağa taşmaya yol açar; `max-width: 100%` veya `fr` kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sabit Genişliklerden (px) Kaçının prensibi, Kapsayıcılara `width: 1200px;` vermek telefonda sağa taşmaya yol açar; `max-width: 100%` veya `fr` kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Modern CSS Yerleşim Sistemleri & Duyarlı (Responsive) Tasarım'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: CSS3 ile Modern Arayüz: Flexbox & CSS Grid becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda CSS3 ile Modern Arayüz: Flexbox & CSS Grid becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "19": [
    {
      "question": "JavaScript'te sayfadaki `` öğesine tıklandığında bir fonksiyon çalıştırmak için hangi yöntem kullanılır?",
      "options": [
        {
          "text": "document.click('#kaydet');",
          "isCorrect": false
        },
        {
          "text": "document.querySelector('#kaydet').addEventListener('click', fn);",
          "isCorrect": true
        },
        {
          "text": "window.setClick('kaydet');",
          "isCorrect": false
        },
        {
          "text": "html.find('button').start();",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `querySelector` ile seçilen DOM elemanına `addEventListener` metodu bağlanarak kullanıcı etkileşimleri yakalanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'JavaScript'in Doğuşu & Rolü' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Statik sayfaları yaşayan, kullanıcıyla konuşan canlı uygulamalara dönüştürme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'JavaScript'in Doğuşu & Rolü' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'DOM (Belge Nesne Modeli) Nedir?' kapsamında ele alınan <strong>1. Seçme (Select)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) var btn = document.querySelector('#btnKaydet'); ile elemanı yakalama.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Seçme (Select), bilişim sistemlerinde var btn = document.querySelector('#btnKaydet'); ile elemanı ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Dinleme (Listen)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) btn.addEventListener('click', () => { ... }); ile tıklanmayı bekleme.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Dinleme (Listen), btn.addEventListener('click', () => { ... }); ile tıklanmayı bekleme. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Etkileşimli Sayaç ve Tema Değiştirici Kodu' bölümünde vurgulanan <strong>Modern JS (ES6)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde const, let ve ok fonksiyonları (`() => {}`) modern... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Modern JS (ES6) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'1. Dönem Sonu Bilişim Portfolyo Sergisi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Projeni Hazırla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Java ile JavaScript aynı dildir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Asla! 'Ham' ile 'Hamster' ne kadar benzerse Java ile JavaScript de o kadar benzerdir; tamamen farklı iki dildir.",
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
      "question": "Günün Altın Kuralı olan <strong>'F12 Console Panelini Dostunuz Yapın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Hatalar sayfada görünmez, F12 Konsolunda kırmızı olarak yazar; `console.log()` ile değişkenleri kontrol edin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> F12 Console Panelini Dostunuz Yapın prensibi, Hatalar sayfada görünmez, F12 Konsolunda kırmızı olarak yazar; `console.log()` ile değişkenleri kontrol edin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Etkileşimli Web Programlama & DOM Manipülasyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: JavaScript Temelleri & Dinamik DOM Yönetimi becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda JavaScript Temelleri & Dinamik DOM Yönetimi becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "20": [
    {
      "question": "Nesnelerin İnterneti (IoT) projelerinde HTTP yerine hafifliği ve düşük bant genişliği tüketimi nedeniyle en çok tercih edilen mesajlaşma protokolü hangisidir?",
      "options": [
        {
          "text": "FTP",
          "isCorrect": false
        },
        {
          "text": "MQTT",
          "isCorrect": true
        },
        {
          "text": "SMTP",
          "isCorrect": false
        },
        {
          "text": "Telnet",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. MQTT (Message Queuing Telemetry Transport), minimal başlık boyutu ve Publish/Subscribe yapısıyla IoT dünyasının standart protokolüdür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'ESP32 Dünyası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Çift çekirdekli 240MHz işlemci, dahili Wi-Fi ve Bluetooth ile Arduino Uno'nun ötesine geçiş.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'ESP32 Dünyası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'ESP32 ve MQTT Protokolü Devrimi' kapsamında ele alınan <strong>Yayıncı (Publisher)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sensör düğümü okuduğu nem verisini `ev/salon/sicaklik` başlığına (topic) fırlatır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Yayıncı (Publisher), bilişim sistemlerinde Sensör düğümü okuduğu nem verisini `ev/salon/sicaklik` başlı... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Abone (Subscriber)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Klima veya telefon uygulaması bu başlığı dinler; veri geldiği milisaniyede haberdar olur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Abone (Subscriber), Klima veya telefon uygulaması bu başlığı dinler; veri geldiği milisaniyede haberdar olur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'ESP32 ile Wi-Fi'a Bağlanma Kodu' bölümünde vurgulanan <strong>Yerel IP Adresi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bağlandıktan sonra modemden aldığı 192.168.1.X adr... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yerel IP Adresi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bulut Kontrollü Akıllı Oda Lambası Projesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. ESP32'yi Wi-Fi'a Bağla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Her IoT cihazı için internete açık sabit bir IP (Static IP) satın almak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! MQTT ve bulut sunucuları sayesinde cihaz dışarıya bağlanır, dışarıdan cihaza doğrudan port açmaya gerek kalmaz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Wi-Fi Şifrelerini Asla GitHub'a Yüklemeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kodunuzdaki modem şifrelerini ayrı bir `secrets.h` dosyasına koyup `.gitignore` içine ekleyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Wi-Fi Şifrelerini Asla GitHub'a Yüklemeyin prensibi, Kodunuzdaki modem şifrelerini ayrı bir `secrets.h` dosyasına koyup `.gitignore` içine ekleyin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'IoT Sistem Mimarisi & Kablosuz Ağ Protokolleri'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: İleri Düzey Robotik & IoT Kış Kampı Bülteni becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda İleri Düzey Robotik & IoT Kış Kampı Bülteni becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "21": [
    {
      "question": "Bir web uygulamasında SQL Injection (SQLi) güvenlik açığını tamamen ve kökten engelleyen en güvenli yöntem aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "SQL sorgularını Python'da `+` ile birleştirmek",
          "isCorrect": false
        },
        {
          "text": "Parametreli Sorgular (Prepared Statements / Parametric Queries) kullanmak",
          "isCorrect": true
        },
        {
          "text": "Kullanıcı adlarını sadece büyük harfle kaydetmek",
          "isCorrect": false
        },
        {
          "text": "Veritabanı şifresini 4 haneli yapmak",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Parametreli sorgularda veritabanı motoru girdiyi asla çalıştırılabilir SQL komutu olarak yorumlamaz; sadece veri (literal) olarak işler.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Full-Stack Mimari Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Frontend (HTML/CSS/JS) + Backend (Python/Node) + Veritabanı (SQL) üçlüsü.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Full-Stack Mimari Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'SQL Injection Anatomisi ve Savunma' kapsamında ele alınan <strong>Oluşan Sorgu</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `SELECT * FROM kullanicilar WHERE ad = 'admin' OR '1'='1';`",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Oluşan Sorgu, bilişim sistemlerinde `SELECT * FROM kullanicilar WHERE ad = 'admin' OR '1'='1';`... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Mantıksal Sonuç</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) '1'='1' ifadesi her zaman True döner; şifre kontrolü atlanır ve hacker en yetkili hesapla giriş yapar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Mantıksal Sonuç, '1'='1' ifadesi her zaman True döner; şifre kontrolü atlanır ve hacker en yetkili hesapla giriş yapar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Güvenli Parola Saklama: Hash ve Salt' bölümünde vurgulanan <strong>Tuzlama (Salting)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Aynı şifreye sahip iki kişinin özetlerinin farklı ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tuzlama (Salting) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Güvenli Form Doğrulama ve XSS Savunması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Senaryoyu Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Frontend tarafında (HTML'de) 'required' veya 'maxlength' koyarsak sitemiz güvendedir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hackerlar tarayıcıyı devreden çıkarıp doğrudan curl veya Postman ile sunucuya istek atabilir; asıl güvenlik backenddedir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kullanıcı Girdisine ASLA Güvenmeyin (Sanitize All Inputs)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Formlardan gelen her metin potansiyel bir saldırı vektörü olarak kabul edilmelidir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kullanıcı Girdisine ASLA Güvenmeyin (Sanitize All Inputs) prensibi, Formlardan gelen her metin potansiyel bir saldırı vektörü olarak kabul edilmelidir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Full-Stack Web Mimarisi & Güvenli Yazılım Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Full-Stack Web & Siber Güvenlik Kış Bülteni becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Full-Stack Web & Siber Güvenlik Kış Bülteni becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "22": [
    {
      "question": "JavaScript'te `fetch()` fonksiyonu bir ağ isteği gönderdiğinde ilk aşamada doğrudan ne döndürür?",
      "options": [
        {
          "text": "Hazır çözümlenmiş JavaScript nesnesi",
          "isCorrect": false
        },
        {
          "text": "Henüz tamamlanmamış bir Promise (Gelecek Vaadi) nesnesi",
          "isCorrect": true
        },
        {
          "text": "Düz metin bir HTML sayfası",
          "isCorrect": false
        },
        {
          "text": "Sayısal bir hata kodu",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `fetch()` hemen veriyi veremez çünkü internet gecikmesi vardır; bu yüzden gelecekte çözümlenecek bir `Promise` döndürür ve `await` ile beklenir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Senkron vs Asenkron' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sayfanın donmasını engelleyip veriyi arka planda sessizce çekme felsefesi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Senkron vs Asenkron' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'REST API ve JSON Formatının Evrenselliği' kapsamında ele alınan <strong>GET (Oku)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sunucudan veri talep eder (Örn: ürün listesi çekme).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> GET (Oku), bilişim sistemlerinde Sunucudan veri talep eder (Örn: ürün listesi çekme).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>POST (Oluştur)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sunucuya yeni kayıt ekler (Örn: yeni üye kaydı).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> POST (Oluştur), Sunucuya yeni kayıt ekler (Örn: yeni üye kaydı). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'async / await ile Canlı Veri Çekme Kodu' bölümünde vurgulanan <strong>try / catch</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde İnternet koptuğunda veya sunucu çöktüğünde uygulam... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> try / catch asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Canlı Döviz / Altın Takip Widget'ı Geliştirme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Arayüzü Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"fetch() çağrısı yapıldığında bütün web sayfası durur ve internet gelene kadar kullanıcı hiçbir yere tıklayamaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! fetch() tamamen asenkrondur (arka planda çalışır); kullanıcı sayfada gezinmeye ve butonlara basmaya devam edebilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'CORS (Cross-Origin Resource Sharing) Hatası'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Tarayıcılar güvenlik gereği farklı bir domainden gelen istekleri engelleyebilir; sunucuda CORS başlıkları açılmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> CORS (Cross-Origin Resource Sharing) Hatası prensibi, Tarayıcılar güvenlik gereği farklı bir domainden gelen istekleri engelleyebilir; sunucuda CORS başlıkları açılmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Asenkron Ağ İletişimi & Harici REST API Tüketimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Web'de Asenkron İletişim: REST API & fetch() becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Web'de Asenkron İletişim: REST API & fetch() becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "23": [
    {
      "question": "Flask uygulamasında bir HTML dosyasını arka yüzden dinamik değişkenler göndererek istemciye sunmak için hangi fonksiyon kullanılır?",
      "options": [
        {
          "text": "open_html()",
          "isCorrect": false
        },
        {
          "text": "render_template('dosya.html', degisken=deger)",
          "isCorrect": true
        },
        {
          "text": "load_page()",
          "isCorrect": false
        },
        {
          "text": "response.write()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `render_template` fonksiyonu `templates` klasöründeki HTML dosyasını Jinja2 motorundan geçirip değişkenleri işleyerek tarayıcıya yollar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Backend Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Veritabanıyla konuşan, şifreleri doğrulayan ve HTML sayfalarını dinamik üreten mutfak.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Backend Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Neden Flask Tercih Ediyoruz?' kapsamında ele alınan <strong>Mikro Çekirdek</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Gereksiz veritabanı veya karmaşık admin paneli dayatmaz; 5 satırda başlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Mikro Çekirdek, bilişim sistemlerinde Gereksiz veritabanı veya karmaşık admin paneli dayatmaz; 5 s... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Öğrenme Eğrisi</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Python temellerini doğrudan web ile birleştirmek için en ideal eğitim aracıdır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Öğrenme Eğrisi, Python temellerini doğrudan web ile birleştirmek için en ideal eğitim aracıdır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Çalışan İlk Flask Uygulaması' bölümünde vurgulanan <strong>Port 5000</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Tarayıcıdan `http://127.0.0.1:5000` (localhost) ad... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Port 5000 asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Flask ile Not Defteri Web Uygulaması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Flask Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Python web için çok yavaştır, bu yüzden webde hiç kullanılmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Instagram, Spotify, Pinterest ve Dropbox gibi devasa platformların arka yüzü büyük oranda Python üzerinde koşar.",
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
      "question": "Günün Altın Kuralı olan <strong>'Canlıda Asla debug=True Bırakmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `debug=True` hata anında ekranda interaktif Python konsolu açar; hackerlar sunucuda terminal komutu çalıştırabilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Canlıda Asla debug=True Bırakmayın prensibi, `debug=True` hata anında ekranda interaktif Python konsolu açar; hackerlar sunucuda terminal komutu çalıştırabilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Arka Yüz (Backend) Programlama & Web Servisi Geliştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Python ile Hafif Web Sunucusu: Flask Temelleri becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Python ile Hafif Web Sunucusu: Flask Temelleri becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "24": [
    {
      "question": "Bir ilişkisel veritabanı tablosundaki her satırı diğerlerinden ayıran, benzersiz ve boş (NULL) bırakılamayan alana ne ad verilir?",
      "options": [
        {
          "text": "Foreign Key (Yabancı Anahtar)",
          "isCorrect": false
        },
        {
          "text": "Primary Key (Birincil Anahtar)",
          "isCorrect": true
        },
        {
          "text": "Secondary Index",
          "isCorrect": false
        },
        {
          "text": "Auto Field",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Birincil Anahtar (Primary Key), tabloda her kaydın parmak izi gibidir; benzersizdir ve asla NULL olamaz.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Neden Veritabanı (Database)?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Metin ve Excel dosyalarının devasa verilerde çökmesi ve eşzamanlı erişim krizleri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Neden Veritabanı (Database)?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Veritabanı Normalizasyonu ve İlişki Tipleri' kapsamında ele alınan <strong>Bire Bir (1:1)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bir vatandaşın sadece bir T.C. Kimlik kartı olabilir (Vatandaş  Pasaport).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Bire Bir (1:1), bilişim sistemlerinde Bir vatandaşın sadece bir T.C. Kimlik kartı olabilir (Vatand... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Bire Çok (1:N)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bir öğretmenin birçok öğrencisi olabilir, bir yazarın birçok kitabı olabilir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Bire Çok (1:N), Bir öğretmenin birçok öğrencisi olabilir, bir yazarın birçok kitabı olabilir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Veri Tipleri ve Kısıtlayıcılar (Constraints)' bölümünde vurgulanan <strong>Referential Integrity</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Olmayan bir öğrenciye ödünç kitap verilmesini veri... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Referential Integrity asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Okul Kütüphanesi Varlık-İlişki (ER) Diyagramı Çizimi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Varlıkları Belirle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Excel zaten bir veritabanıdır, ek bir veritabanı programına gerek yoktur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Excel bir tablolama programıdır; eşzamanlı milyonlarca satırda kilitlenir, ACID güvencesi ve SQL gücü sunamaz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Bir Hücreye Asla Birden Çok Veri Yazmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Telefon sütununa '0555..., 0532...' yazmak 1. Normal Formu bozar; arama yapmayı imkansız kılar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bir Hücreye Asla Birden Çok Veri Yazmayın prensibi, Telefon sütununa '0555..., 0532...' yazmak 1. Normal Formu bozar; arama yapmayı imkansız kılar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Modelleme & İlişkisel Varlık-İlişki (ER) Mimarisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Veri Tabanı Mimarisine Giriş & İlişkisel Model becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Veri Tabanı Mimarisine Giriş & İlişkisel Model becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "25": [
    {
      "question": "Aşağıdaki SQL ifadelerinden hangisi `kitaplar` tablosundaki TÜM sütunları ve TÜM kayıtları ekrana getirmek için kullanılır?",
      "options": [
        {
          "text": "GET ALL FROM kitaplar;",
          "isCorrect": false
        },
        {
          "text": "SELECT * FROM kitaplar;",
          "isCorrect": true
        },
        {
          "text": "FETCH TABLE kitaplar;",
          "isCorrect": false
        },
        {
          "text": "SHOW ROWS IN kitaplar;",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `SELECT * FROM tablo_adi;` evrensel SQL komutudur; '*' işareti tablodaki bütün sütunları temsil eder.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'SQL Dili Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Veritabanlarıyla konuşmak için 1970'lerden beri kullanılan evrensel standart dil.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'SQL Dili Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'DDL vs DML Komut Grupları' kapsamında ele alınan <strong>DDL (Data Definition Language)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Tabloyu, sütunları ve tipleri oluşturur (`CREATE`, `ALTER`, `DROP`). Mimaridir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> DDL (Data Definition Language), bilişim sistemlerinde Tabloyu, sütunları ve tipleri oluşturur (`CREATE`, `ALTER`, ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>DML (Data Manipulation Language)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Tablonun içine veri ekler, okur, günceller (`INSERT`, `SELECT`, `UPDATE`, `DELETE`). İşçiliktir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> DML (Data Manipulation Language), Tablonun içine veri ekler, okur, günceller (`INSERT`, `SELECT`, `UPDATE`, `DELETE`). İşçiliktir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Temel SQL Komutları Scripti' bölümünde vurgulanan <strong>Performans Uyarısı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Milyonlarca satırlı büyük tablolarda `SELECT *` ye... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Performans Uyarısı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sınıf Bilişim Kulübü Veritabanı Oluşturma'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Veritabanı Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"SELECT komutu tablodaki verileri kalıcı olarak değiştirir veya siler.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Asla! SELECT salt okunurdur (read-only); orijinal veriye dokunmadan sadece ekrana kopya listeler.",
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
      "question": "Günün Altın Kuralı olan <strong>'Büyük/Küçük Harf Standardı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) SQL komutları büyük harfle (`SELECT`), tablo ve sütun isimleri küçük harfle (`ogrenciler`) yazılır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Büyük/Küçük Harf Standardı prensibi, SQL komutları büyük harfle (`SELECT`), tablo ve sütun isimleri küçük harfle (`ogrenciler`) yazılır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Temel SQL Komutları & Veri Sorgulama Becerisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: SQL Temelleri: CREATE, INSERT & SELECT becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda SQL Temelleri: CREATE, INSERT & SELECT becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "26": [
    {
      "question": "Bir veritabanında `EXPLAIN QUERY PLAN` komutu çalıştırıldığında çıktıda 'SCAN TABLE' ifadesinin görülmesi ne anlama gelir?",
      "options": [
        {
          "text": "Sorgunun B-Tree indeksi kullanarak çok hızlı çalıştığı",
          "isCorrect": false
        },
        {
          "text": "Tabloda hiç indeks kullanılmadığı ve tüm satırların tek tek baştan sona tarandığı",
          "isCorrect": true
        },
        {
          "text": "Tablonun silindiği",
          "isCorrect": false
        },
        {
          "text": "Veritabanının şifrelendiği",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. 'SCAN TABLE' (Full Table Scan), veritabanının aranan satırı bulabilmek için tablodaki her kaydı tek tek incelediğini gösterir; bu yavaşlığın işaretidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Tam Tablo Taraması (Full Table Scan)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Milyonlarca satırı baştan sona tek tek taramanın faturası ve sunucu kilitlenmeleri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Tam Tablo Taraması (Full Table Scan)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'B-Tree (Dengeli Ağaç) ve İndeks Gücü' kapsamında ele alınan <strong>Fihrist Mantığı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Aranan numara 50'den büyükse sol tarafa hiç bakmaz, aramayı tek hamlede yarıya indirir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Fihrist Mantığı, bilişim sistemlerinde Aranan numara 50'den büyükse sol tarafa hiç bakmaz, aramayı ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>1 Milyon Kayıt Karşılaştırması</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İndekssiz: 1.000.000 işlem. İndeksli: Sadece 20 işlem (2^20 ≈ 1.048.576)!",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 1 Milyon Kayıt Karşılaştırması, İndekssiz: 1.000.000 işlem. İndeksli: Sadece 20 işlem (2^20 ≈ 1.048.576)! açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'İndeks Tanımlama ve Sorgu Planı İnceleme' bölümünde vurgulanan <strong>Ne Zaman İndeks Konmalı?</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde WHERE, JOIN ve ORDER BY'da sıkça kullanılan sütunl... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Ne Zaman İndeks Konmalı? asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'100.000 Kayıtlı Veritabanında Hız Testi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Veriyi Üret' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bütün sütunlara indeks koyarsak veritabanımız dünyanın en hızlısı olur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Her indeks yazma (INSERT, UPDATE, DELETE) işlemlerini yavaşlatır; sadece sorgulanan kritik sütunlar indekslenir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Az Satırlı Tablolara İndeks Koymayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 100 satırlık küçük bir tabloda indekse bakıp sonra veriye gitmek baştan sona okumaktan daha yavaştır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Az Satırlı Tablolara İndeks Koymayın prensibi, 100 satırlık küçük bir tabloda indekse bakıp sonra veriye gitmek baştan sona okumaktan daha yavaştır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sorgu Optimizasyonu & Veritabanı Başarım Analizi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Ara Tatil: SQL Optimizasyon & İndeks Atölyesi becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Ara Tatil: SQL Optimizasyon & İndeks Atölyesi becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "27": [
    {
      "question": "Python'da `sqlite3` kütüphanesi kullanılırken yapılan bir `INSERT` işleminin veritabanı dosyasına kalıcı olarak kaydedilmesi için hangi fonksiyonun çağrılması zorunludur?",
      "options": [
        {
          "text": "cursor.save()",
          "isCorrect": false
        },
        {
          "text": "connection.commit()",
          "isCorrect": true
        },
        {
          "text": "cursor.push()",
          "isCorrect": false
        },
        {
          "text": "db.mühürle()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `commit()` fonksiyonu o ana kadar yapılan veritabanı işlemlerini kalıcı olarak diske mühürler; commit edilmeyen işlemler bağlantı kesilince geri alınır (rollback).",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Web & API Soru Kalıpları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) fetch(), JSON parse, HTTP durum kodları (200, 404, 500) ve async/await.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Web & API Soru Kalıpları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Klasik Yazılı Soru Örnekleri ve Analizi' kapsamında ele alınan <strong>Doğru Cevap</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `CREATE TABLE urunler (urun_id INTEGER PRIMARY KEY AUTOINCREMENT, ad TEXT NOT NULL, stok INTEGER);`",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Doğru Cevap, bilişim sistemlerinde `CREATE TABLE urunler (urun_id INTEGER PRIMARY KEY AUTOINCRE... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Doğru Cevap</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) `no = request.form.get('ogrenci_no')` komutuyla güvenle okunur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Doğru Cevap, `no = request.form.get('ogrenci_no')` komutuyla güvenle okunur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Uçtan Uca Mini Proje: Webden SQL'e Kayıt' bölümünde vurgulanan <strong>Parametreli Sorgu (?)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde SQL Injection açığını engelleyen soru işaretli par... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Parametreli Sorgu (?) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Hata Bulma (Code Review) Yarışması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Kodu İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"SELECT sorgusunda veriler tablodan silinir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) SELECT sadece görüntüler, verilere hiçbir zarar vermez.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sorunun 'Hangi Dilde' Olduğuna Bakın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Bazen öğrenciler JavaScript fetch() sorusuna Python yazabiliyor; sorulan dili dikkatle okuyun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sorunun 'Hangi Dilde' Olduğuna Bakın prensibi, Bazen öğrenciler JavaScript fetch() sorusuna Python yazabiliyor; sorulan dili dikkatle okuyun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Web & Veritabanı Entegrasyon Sentezi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 2. Dönem 1. Yazılı Sınav Tekrarı & Pekiştirme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 2. Dönem 1. Yazılı Sınav Tekrarı & Pekiştirme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "28": [
    {
      "question": "İki tabloyu birleştirirken her iki tabloda da ortak karşılığı bulunan kayıtların yanı sıra sol tablodaki eşleşmeyen kayıtları da kaybetmeden getiren JOIN türü hangisidir?",
      "options": [
        {
          "text": "INNER JOIN",
          "isCorrect": false
        },
        {
          "text": "LEFT JOIN (veya LEFT OUTER JOIN)",
          "isCorrect": true
        },
        {
          "text": "CROSS JOIN",
          "isCorrect": false
        },
        {
          "text": "DROP JOIN",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `LEFT JOIN`, sol tablodaki tüm satırları korur; sağ tabloda eşleşen bir kayıt yoksa o kısımları `NULL` olarak doldurur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'WHERE ile Hassas Filtreleme' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) `LIKE '%Teknoloji%'`, `BETWEEN 50 AND 100` ve mantıksal `AND / OR` filtreleri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'WHERE ile Hassas Filtreleme' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'İlişkisel Tabloları Birleştirme: JOIN Türleri' kapsamında ele alınan <strong>INNER JOIN (Kesişim)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sadece her iki tabloda da karşılığı olan kayıtları getirir. (Örn: Sadece en az 1 notu olan öğrencileri listeler).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> INNER JOIN (Kesişim), bilişim sistemlerinde Sadece her iki tabloda da karşılığı olan kayıtları getirir. ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>LEFT JOIN (Solu Koru)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sol tablodaki TÜM öğrencileri getirir; henüz notu girilmemiş öğrencilerin not sütunu NULL görünür.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> LEFT JOIN (Solu Koru), Sol tablodaki TÜM öğrencileri getirir; henüz notu girilmemiş öğrencilerin not sütunu NULL görünür. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Gelişmiş Raporlama ve Gruplama Sorguları' bölümünde vurgulanan <strong>ROUND() Fonksiyonu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Ortalama sayısının ondalık basamağını yuvarlayarak... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> ROUND() Fonksiyonu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'E-Ticaret Satış Analitiği Dashboard'u'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Şemayı Yükle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"En fazla iki tablo birleştirilebilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır! Bir sorguda zincirleme olarak 5, 10 veya daha fazla tablo birbiri ardına JOIN edilebilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'ON Şartını Asla Unutmayın (Kartezyen Çarpım)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) ON şartı yazılmazsa A tablosundaki her satır B tablosundaki her satırla eşleşir (1.000 x 1.000 = 1.000.000 satır oluşur ve sunucu çöker).",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> ON Şartını Asla Unutmayın (Kartezyen Çarpım) prensibi, ON şartı yazılmazsa A tablosundaki her satır B tablosundaki her satırla eşleşir (1.000 x 1.000 = 1.000.000 satır oluşur ve sunucu çöker). gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Çok Tablolu İlişkisel Veri Analizi & SQL JOIN Operasyonları'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: İleri Düzey SQL: WHERE, GROUP BY & JOIN becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda İleri Düzey SQL: WHERE, GROUP BY & JOIN becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "29": [
    {
      "question": "Python `sqlite3` kütüphanesinde bir `SELECT` sorgusunun getirdiği tüm sonuç satırlarını Python listesi olarak çekmek için hangi fonksiyon kullanılır?",
      "options": [
        {
          "text": "cursor.get_all()",
          "isCorrect": false
        },
        {
          "text": "cursor.fetchall()",
          "isCorrect": true
        },
        {
          "text": "connection.read_lines()",
          "isCorrect": false
        },
        {
          "text": "cursor.fetch_table()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `cursor.fetchall()` sorgu sonucundaki tüm satırları demetlerden oluşan bir liste `[(1, 'Ali'), (2, 'Ayşe')]` halinde döndürür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Gömülü Veritabanı: SQLite' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Ayrı bir sunucu kurulumu gerektirmeyen, tek bir `.db` dosyasında yaşayan hafif dev.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Gömülü Veritabanı: SQLite' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Python sqlite3 Modülü ve İşlem Mimarisi' kapsamında ele alınan <strong>1. Bağlan (Connect)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `conn = sqlite3.connect('okul.db')` ile dosya açılır (yoksa sıfırdan oluşturulur).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Bağlan (Connect), bilişim sistemlerinde `conn = sqlite3.connect('okul.db')` ile dosya açılır (yoksa ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. İmleç Al (Cursor)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) `cursor = conn.cursor()` ile sorguları yürütecek araç alınır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. İmleç Al (Cursor), `cursor = conn.cursor()` ile sorguları yürütecek araç alınır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Tam Teşekküllü CRUD Yöneticisi Sınıfı' bölümünde vurgulanan <strong>fetchall()</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sorgu sonucundaki tüm satırları Python demetleri (... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> fetchall() asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Konsol Tabanlı Öğrenci İşleri Otomasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Menü Döngüsü Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"SQLite sadece bir oyuncaktır, gerçek dünyada kimse kullanmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Dünyada en çok kopyası çalışan veritabanı SQLite'tır! Her Android ve iPhone telefonda, her Chrome ve Safari tarayıcısında onlarca SQLite veritabanı koşar.",
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
      "question": "Günün Altın Kuralı olan <strong>'execute() İçinde Asla f-string Kullanmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `cursor.execute(f\"... WHERE ad='{ad}'\")` yazmak doğrudan SQL Injection davetiyesidir; mutlaka `(?, ?)` kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> execute() İçinde Asla f-string Kullanmayın prensibi, `cursor.execute(f\"... WHERE ad='{ad}'\")` yazmak doğrudan SQL Injection davetiyesidir; mutlaka `(?, ?)` kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Python - Veritabanı Entegrasyonu & CRUD Yazılım Mimarisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Python ile Veritabanı Entegrasyonu: SQLite3 & CRUD becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Python ile Veritabanı Entegrasyonu: SQLite3 & CRUD becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "30": [
    {
      "question": "NumPy'da 12 elemanlı tek boyutlu bir diziyi 3 satır ve 4 sütunlu bir matrise dönüştürmek için hangi fonksiyon kullanılır?",
      "options": [
        {
          "text": "dizi.resize_matrix(3, 4)",
          "isCorrect": false
        },
        {
          "text": "dizi.reshape(3, 4)",
          "isCorrect": true
        },
        {
          "text": "dizi.convert(3, 4)",
          "isCorrect": false
        },
        {
          "text": "dizi.split(3, 4)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `reshape(satir, sutun)` metodu, eleman sayısı uyuştuğu sürece (3 * 4 = 12) dizinin boyutlarını ve şeklini yeniden yapılandırır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Veri ve Yapay Zekâ İlişkisi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Veri olmadan yapay zekâ öğrenemez; modeller trilyonlarca sayının matris çarpımıyla eğitilir.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Veri ve Yapay Zekâ İlişkisi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Neden Standart Liste Değil de NumPy?' kapsamında ele alınan <strong>Homojen Tip</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) NumPy dizisindeki tüm elemanlar aynı tiptedir (Örn: `int32` veya `float64`); tip kontrolüyle vakit kaybetmez.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Homojen Tip, bilişim sistemlerinde NumPy dizisindeki tüm elemanlar aynı tiptedir (Örn: `int32` ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>SIMD Desteği</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Modern işlemcilerin tek bir saat çevriminde 8 sayıyı aynı anda çarpmasını (Single Instruction Multiple Data) sağlar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> SIMD Desteği, Modern işlemcilerin tek bir saat çevriminde 8 sayıyı aynı anda çarpmasını (Single Instruction Multiple Data) sağlar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'NumPy Dizi Operasyonları ve İstatistik' bölümünde vurgulanan <strong>reshape()</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 1x9'luk bir vektörü `matris.reshape(3, 3)` yaparak... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> reshape() asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Dijital Görseli Matris Olarak Temsil Etme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. NumPy'ı İçe Aktar' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"NumPy sadece matematikle ilgilenen akademisyenler içindir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) NumPy; görüntü işleme (OpenCV), veri analizi (Pandas) ve derin öğrenme (TensorFlow, PyTorch) dahil tüm yapay zekânın temel harcıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Dizi Kopyalama Tuzağı (View vs Copy)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `b = a` derseniz b'deki değişiklik a'yı da bozar; bağımsız kopya için mutlaka `b = a.copy()` kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Dizi Kopyalama Tuzağı (View vs Copy) prensibi, `b = a` derseniz b'deki değişiklik a'yı da bozar; bağımsız kopya için mutlaka `b = a.copy()` kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Vektörel Hesaplama & Çok Boyutlu Dizi (Tensor) Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Veri Bilimi ve Yapay Zekâya Giriş: Python NumPy becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Veri Bilimi ve Yapay Zekâya Giriş: Python NumPy becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "31": [
    {
      "question": "Bir Pandas DataFrame tablosundaki tüm boş ve eksik (NaN) değerlerin yerine 0 yazmak için hangi fonksiyon kullanılır?",
      "options": [
        {
          "text": "df.clean_zeros()",
          "isCorrect": false
        },
        {
          "text": "df.fillna(0)",
          "isCorrect": true
        },
        {
          "text": "df.replace_null(0)",
          "isCorrect": false
        },
        {
          "text": "df.dropna(0)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `df.fillna(0)` fonksiyonu tablodaki tüm eksik ve tanımsız (`NaN`) hücreleri parantez içindeki değerle (0) doldurur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'NumPy'dan Pandas'a Geçiş' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sayılardan oluşan matrislere sütun isimleri ve satır indeksleri ekleyerek Excel'den güçlü bir tablo gücü kazanma.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'NumPy'dan Pandas'a Geçiş' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Veri Bilimcinin Günlük Hayatı: %80 Veri Temizleme' kapsamında ele alınan <strong>df.head(5)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Milyonlarca satırlık tablonun ilk 5 satırını hızlıca önizler.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> df.head(5), bilişim sistemlerinde Milyonlarca satırlık tablonun ilk 5 satırını hızlıca önizler... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>df.info()</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Hangi sütunda kaç tane boş değer olduğunu ve bellek kullanımını raporlar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> df.info(), Hangi sütunda kaç tane boş değer olduğunu ve bellek kullanımını raporlar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'CSV Dosyası Analiz ve Filtreleme Kodu' bölümünde vurgulanan <strong>inplace=True</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Değişikliği yeni bir kopya oluşturmadan doğrudan m... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> inplace=True asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Açık Veri Portalı İnceleme Atölyesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Veri İndir' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Pandas sadece küçük veri setleri içindir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Pandas milyonlarca satırı bellek yettiği sürece saniyeler içinde işler; daha büyük veriler için Dask ve Spark kullanılır.",
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
      "question": "Günün Altın Kuralı olan <strong>'SettingWithCopyWarning Uyarısı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Filtrelenmiş bir alt tablonun hücresini doğrudan değiştirmeye çalışırsanız uyarı verir; `.copy()` veya `.loc[]` kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> SettingWithCopyWarning Uyarısı prensibi, Filtrelenmiş bir alt tablonun hücresini doğrudan değiştirmeye çalışırsanız uyarı verir; `.copy()` veya `.loc[]` kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Analitiği, Temizleme & DataFrame Manipülasyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Pandas ile Veri Analitiği & Tablo İşleme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Pandas ile Veri Analitiği & Tablo İşleme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "32": [
    {
      "question": "İki sürekli sayısal değişken arasındaki korelasyonu (ilişkiyi) noktalar kümesi olarak göstermek için Matplotlib'de hangi fonksiyon kullanılır?",
      "options": [
        {
          "text": "plt.bar()",
          "isCorrect": false
        },
        {
          "text": "plt.scatter()",
          "isCorrect": true
        },
        {
          "text": "plt.pie()",
          "isCorrect": false
        },
        {
          "text": "plt.hist()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `plt.scatter(x, y)` saçılım / dağılım grafiği çizer ve iki değişkenin birbiriyle nasıl bir ilişki içinde olduğunu noktalarla gösterir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Görselleştirmenin Gücü' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Ham sayı yığınlarını hikâye anlatan, karar verdirici infografiklere çevirme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Görselleştirmenin Gücü' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Hangi Veriye Hangi Grafik?' kapsamında ele alınan <strong>Çizgi Grafiği (plt.plot)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Zamana bağlı değişimleri, sıcaklık trendlerini ve borsa grafiklerini gösterir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Çizgi Grafiği (plt.plot), bilişim sistemlerinde Zamana bağlı değişimleri, sıcaklık trendlerini ve borsa graf... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sütun Grafiği (plt.bar)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kategoriler arası karşılaştırma yapar (Örn: Sınıflara göre ortalama notlar).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sütun Grafiği (plt.bar), Kategoriler arası karşılaştırma yapar (Örn: Sınıflara göre ortalama notlar). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Profesyonel Grafik Çizim Kodu' bölümünde vurgulanan <strong>plt.tight_layout()</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kenar boşluklarını otomatik kırparak etiketlerin k... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> plt.tight_layout() asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bilişim Laboratuvarı Başarı Grafiği Üretimi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Verileri Tanımla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Pasta grafiği (Pie Chart) her yerde kullanılabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Veri bilimciler pasta grafiğinden kaçınır; insan gözü açıları kıyaslamakta zorlanır. Sütun grafiği her zaman daha doğrudur.",
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
      "question": "Günün Altın Kuralı olan <strong>'Eksenleri Sıfırdan Başlatın (Trunking Axis)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sütun grafiğinde Y eksenini 90'dan başlatırsanız 92 ile 95 arasındaki fark devasa görünür; yanıltıcı grafik çizmek etik dışıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Eksenleri Sıfırdan Başlatın (Trunking Axis) prensibi, Sütun grafiğinde Y eksenini 90'dan başlatırsanız 92 ile 95 arasındaki fark devasa görünür; yanıltıcı grafik çizmek etik dışıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Görselleştirme & Grafiksel Çıkarım'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Veri Görselleştirme: Matplotlib ile Grafikler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Veri Görselleştirme: Matplotlib ile Grafikler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "33": [
    {
      "question": "K-En Yakın Komşu (KNN) algoritmasında, yeni bir veri noktasının hangi sınıfa ait olduğuna karar verilirken temel alınan matematiksel ilke hangisidir?",
      "options": [
        {
          "text": "Rastgele zar atma",
          "isCorrect": false
        },
        {
          "text": "En yakın K adet komşunun Öklid mesafesine göre çoğunluk oylaması (Majority Vote)",
          "isCorrect": true
        },
        {
          "text": "Verilerin ortalamasını çarpmak",
          "isCorrect": false
        },
        {
          "text": "Veritabanından satır silmek",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. KNN, yeni verinin uzaydaki konumunu mevcut verilere olan mesafesiyle kıyaslar ve en yakın komşularının çoğunluk sınıfına dahil eder.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Programlamada Büyük Paradigma Değişimi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Geleneksel: Kural + Veri = Sonuç. Makine Öğrenmesi: Veri + Sonuç = Kural!",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Programlamada Büyük Paradigma Değişimi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Geleneksel Kodlama vs Makine Öğrenmesi' kapsamında ele alınan <strong>1. Mesafe Ölçümü</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Yeni gelen noktanın tüm eski noktalara uzaklığı Öklid formülüyle (`d = √((x2-x1)² + (y2-y1)²)` hesaplanır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Mesafe Ölçümü, bilişim sistemlerinde Yeni gelen noktanın tüm eski noktalara uzaklığı Öklid formül... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. En Yakın K Komşuyu Seç</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Mesafeler küçükten büyüğe sıralanır; en yakın K adet (örn: 3 veya 5) komşu belirlenir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. En Yakın K Komşuyu Seç, Mesafeler küçükten büyüğe sıralanır; en yakın K adet (örn: 3 veya 5) komşu belirlenir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Scikit-Learn ile İlk Yapay Zekâ Modeli' bölümünde vurgulanan <strong>K Değeri Seçimi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Beraberlik durumunu önlemek için K sayısı genelde ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> K Değeri Seçimi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Spam E-Posta / Mesaj Filtresi Simülasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Scikit-Learn Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yapay zekâ modelleri insan gibi bilinçlidir ve düşünür.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yapay zekâ bilinç taşımaz; sadece çok boyutlu geometrik uzayda mesafe, türev ve istatistik hesaplayan matematiksel formüllerdir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Aşırı Öğrenme (Overfitting) Tuzağı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Model eğitimi ezberlerse yeni gördüğü veride çuvallar; eğitim verisiyle test verisini mutlaka ayırın (`train_test_split`).",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Aşırı Öğrenme (Overfitting) Tuzağı prensibi, Model eğitimi ezberlerse yeni gördüğü veride çuvallar; eğitim verisiyle test verisini mutlaka ayırın (`train_test_split`). gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Makine Öğrenmesi Modeli Eğitme & Sınıflandırma Mantığı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Makine Öğrenmesine Giriş & KNN Algoritması becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Makine Öğrenmesine Giriş & KNN Algoritması becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "34": [
    {
      "question": "OpenCV kütüphanesinde bir görüntüyü kenar tespiti veya yüz tanıma işlemine sokmadan önce hesaplama yükünü azaltmak amacıyla standart olarak hangi formata dönüştürürüz?",
      "options": [
        {
          "text": "CMYK Formatı",
          "isCorrect": false
        },
        {
          "text": "Gri Tonlama (Grayscale)",
          "isCorrect": true
        },
        {
          "text": "Negatif Format",
          "isCorrect": false
        },
        {
          "text": "16-bit Ses Formatı",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Gri tonlama görüntüyü 3 renk kanalından (B, G, R) tek bir parlaklık kanalına indirir; bu sayede algoritma 3 kat daha hızlı çalışır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilgisayar Nasıl 'Görür'?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Her pikselin 0 ile 255 arasında Kırmızı, Yeşil ve Mavi sayılardan oluştuğu 3B matrisler.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilgisayar Nasıl 'Görür'?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Dijital Görüntünün Piksel Anatomisi' kapsamında ele alınan <strong>Piksel Değeri (0-255)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 0 tamamen zifiri karanlık (siyah), 255 ise en parlak ışıktır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Piksel Değeri (0-255), bilişim sistemlerinde 0 tamamen zifiri karanlık (siyah), 255 ise en parlak ışıktır... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Neden Gri Tonlama (Grayscale)?</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Renk bilgisi kenar ve şekil bulurken gereksiz hesap yükü getirir; 3 kanaldan tek kanala düşürerek hızı 3 kat artırırız.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Neden Gri Tonlama (Grayscale)?, Renk bilgisi kenar ve şekil bulurken gereksiz hesap yükü getirir; 3 kanaldan tek kanala düşürerek hızı 3 kat artırırız. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Web Kamerasını Açan ve Kenar Çizen OpenCV Kodu' bölümünde vurgulanan <strong>Kaynak Temizliği</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde `cap.release()` kameranın donanımsal meşguliyetini... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Kaynak Temizliği asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kırmızı Elma / Kalem Takip Eden Akıllı Radar'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. OpenCV Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kameradan okunan görüntüler otomatik olarak RGB formatındadır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) OpenCV kütüphanesinde varsayılan renk dizilimi BGR'dır (Mavi, Yeşil, Kırmızı).",
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
      "question": "Günün Altın Kuralı olan <strong>'Işıklandırma Değişkenliği'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Odadaki ışık değiştiğinde RGB değerleri bozulur; renk takibi projelerinde her zaman ışığa dayanıklı HSV formatını kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Işıklandırma Değişkenliği prensibi, Odadaki ışık değiştiğinde RGB değerleri bozulur; renk takibi projelerinde her zaman ışığa dayanıklı HSV formatını kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Görüntü İşleme & Gerçek Zamanlı Kamera Görüntüsü Analizi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Bilgisayarlı Görü Temelleri: OpenCV & Kamera becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Bilgisayarlı Görü Temelleri: OpenCV & Kamera becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "35": [
    {
      "question": "Git sisteminde ana kodu bozmadan 'ozellik' adında yeni bir geliştirme dalı (branch) oluşturup doğrudan o dala geçiş yapan tek satırlık pratik komut hangisidir?",
      "options": [
        {
          "text": "git branch new ozellik",
          "isCorrect": false
        },
        {
          "text": "git checkout -b ozellik",
          "isCorrect": true
        },
        {
          "text": "git create ozellik",
          "isCorrect": false
        },
        {
          "text": "git jump ozellik",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `git checkout -b dal_adi` komutu aynı anda hem yeni bir dal oluşturur hem de çalışma alanını o dala geçirir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bireysel Git'ten Takım Git'ine' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Tek başına commit atmak yerine onlarca dalın (branch) eşzamanlı birleştiği büyük nehir.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bireysel Git'ten Takım Git'ine' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Merge Conflict (Çakışma) Bir Felaket Değildir' kapsamında ele alınan <strong><<<<<<< HEAD</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sizin mevcut dalınızdaki kodların başladığı yerdir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> <<<<<<< HEAD, bilişim sistemlerinde Sizin mevcut dalınızdaki kodların başladığı yerdir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>=======</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İki farklı kod versiyonunu ayıran orta sınırdır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> =======, İki farklı kod versiyonunu ayıran orta sınırdır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Takım Çalışması İçin Terminal Komutları' bölümünde vurgulanan <strong>Conventional Commits</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde `feat:`, `fix:`, `docs:` gibi önekler commit geçmi... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Conventional Commits asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'3 Kişilik Takımla Ortak Proje Simülasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Depoyu Aç & Davet Et' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Merge Conflict bir hatadır veya kodun bozulduğu anlamına gelir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Asla! Conflict bir hata değil, Git'in iki kişinin emeğini korumak için 'Hangisini seçeyim?' diye yazılımcıya sorduğu güvenlik kalkanıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'README.md Projenin Vitrinidir'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Açıklaması, ekran görüntüleri ve kurulum adımları olmayan bir GitHub projesi ölü bir koddur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> README.md Projenin Vitrinidir prensibi, Açıklaması, ekran görüntüleri ve kurulum adımları olmayan bir GitHub projesi ölü bir koddur. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Açık Kaynak İş Birliği & Sürüm Kontrol Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Git & GitHub ile Profesyonel İş Birliği becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Git & GitHub ile Profesyonel İş Birliği becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "36": [
    {
      "question": "Scrum metodolojisinde her gün yapılan ve en fazla 15 dakika süren, geliştiricilerin dünkü işlerini, bugünkü planlarını ve önlerindeki engelleri paylaştığı toplantıya ne ad verilir?",
      "options": [
        {
          "text": "Sprint Retrospective",
          "isCorrect": false
        },
        {
          "text": "Daily Scrum (Günlük Ayaküstü Toplantı)",
          "isCorrect": true
        },
        {
          "text": "Sprint Planning",
          "isCorrect": false
        },
        {
          "text": "Code Review",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Daily Scrum, takımın iletişimini taze tutmak ve engelleri erken teşhis etmek için her iş günü 15 dakikalık hızlı bir senkronizasyon toplantısıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Şelale (Waterfall) Neden İflas Etti?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 1 yıl plan yapıp sonra kod yazmanın değişen dünya şartlarında başarısız oluşu.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Şelale (Waterfall) Neden İflas Etti?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Kullanıcı Hikâyesi (User Story) Nasıl Yazılır?' kapsamında ele alınan <strong>Kalıp</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Bir [KULLANICI TİPİ] olarak, [BİR HEDEF / İSTEK] istiyorum, böylece [SAĞLANAN FAYDA] elde edebileyim.'",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kalıp, bilişim sistemlerinde 'Bir [KULLANICI TİPİ] olarak, [BİR HEDEF / İSTEK] istiyorum,... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Örnek</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 'Bir **Öğrenci** olarak, **kütüphanedeki kitapları ada göre aratabilmek** istiyorum, böylece **aradığım kaynağı dakikalarca aramadan hızla bulabileyim**.'",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Örnek, 'Bir **Öğrenci** olarak, **kütüphanedeki kitapları ada göre aratabilmek** istiyorum, böylece **aradığım kaynağı dakikalarca aramadan hızla bulabileyim**.' açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Scrum Toplantıları ve Ritüelleri' bölümünde vurgulanan <strong>3 Soru</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 1) Dün ne yaptım? 2) Bugün ne yapacağım? 3) Önümde... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 3 Soru asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bitirme Projesi İçin Sınıf Kanban Panosu Kurma'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Takım Rollerini Belirle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Agile metodolojide hiç planlama yapılmaz, herkes kafasına göre kod yazar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Agile katı ve hantal planlara karşıdır; aksine her 2 haftada bir sürekli ve dinamik planlama yapar.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kapsam Kayması (Scope Creep)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Proje geliştirilirken sürekli 'Şunu da ekleyelim' denirse proje asla bitmez; yeni fikirleri sonraki sprintlere erteleyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kapsam Kayması (Scope Creep) prensibi, Proje geliştirilirken sürekli 'Şunu da ekleyelim' denirse proje asla bitmez; yeni fikirleri sonraki sprintlere erteleyin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Proje Yönetimi, Çevik Metodolojiler & Ekip Koordinasyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Çevik Yazılım Geliştirme: Agile, Scrum & Kanban becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Çevik Yazılım Geliştirme: Agile, Scrum & Kanban becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "37": [
    {
      "question": "Bir yazılım projesine başlamadan önce projenin temel işlevlerini içeren ilk çalışan en yalın sürümüne yazılım mühendisliğinde ne ad verilir?",
      "options": [
        {
          "text": "Beta Test",
          "isCorrect": false
        },
        {
          "text": "MVP (Minimum Viable Product - Minimum Uygulanabilir Ürün)",
          "isCorrect": true
        },
        {
          "text": "Final Release",
          "isCorrect": false
        },
        {
          "text": "Full Stack",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. MVP, projenin temel değerini kanıtlayan en sade çalışan modelidir; önce MVP inşa edilir, sonra üzerine ek özellikler inşa edilir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Capstone Proje Vizyonu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Lise müfredatının tüm kazanımlarını somut, çalışan ve topluma faydalı bir ürüne dönüştürme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Capstone Proje Vizyonu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Capstone Projesi Başarı Kriterleri' kapsamında ele alınan <strong>1. Veri Üretimi / Girişi</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sensörlerden (IoT) veya web formlarından gelen canlı veriler.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Veri Üretimi / Girişi, bilişim sistemlerinde Sensörlerden (IoT) veya web formlarından gelen canlı veriler... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. İşleme ve OOP Mantığı</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Python sınıflarıyla (Class) verinin modellenmesi ve doğrulanması.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. İşleme ve OOP Mantığı, Python sınıflarıyla (Class) verinin modellenmesi ve doğrulanması. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Örnek Proje Şartnamesi (Teknik Doküman)' bölümünde vurgulanan <strong>Teknolojiler</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Arduino/ESP32, Python Flask, SQLite, HTML/CSS/JS, ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Teknolojiler asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Proje Şartnamesi ve Mimari Diyagram Hazırlama'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Proje Adını ve Amacını Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Büyük projeyi bitirmek için yüzlerce sayfa kod yazmak gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Önemli olan kodun uzunluğu değil, mimarinin temizliği, modülerliği ve hatasız çalışmasıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'MVP (Minimum Viable Product) Mantığı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Önce projenin en temel çalışan çekirdeğini yapın; süslemeleri ve ekstra özellikleri sonraya bırakın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> MVP (Minimum Viable Product) Mantığı prensibi, Önce projenin en temel çalışan çekirdeğini yapın; süslemeleri ve ekstra özellikleri sonraya bırakın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bütünleşik Sistem Mimarisi Tasarımı & Şartname Hazırlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Büyük Capstone Proje: Sistem Tasarımı & Mimari becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Büyük Capstone Proje: Sistem Tasarımı & Mimari becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "38": [
    {
      "question": "Bir yazılım projesinde en alt seviyedeki bağımsız fonksiyonların tek tek doğruluğunu denetleyen otomatik test seviyesine ne ad verilir?",
      "options": [
        {
          "text": "Entegrasyon Testi",
          "isCorrect": false
        },
        {
          "text": "Birim Testi (Unit Test)",
          "isCorrect": true
        },
        {
          "text": "Kullanıcı Kabul Testi (UAT)",
          "isCorrect": false
        },
        {
          "text": "Güvenlik Sızma Testi",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Birim Testleri (Unit Tests), kodun en küçük yapı taşları olan tekil fonksiyon ve metotların beklenen çıktıyı verip vermediğini izole olarak test eder.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bütünleştirme (Integration) Krizi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Farklı geliştiricilerin yazdığı bağımsız modüllerin bir araya getirildiği kritik an.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bütünleştirme (Integration) Krizi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Birim Testi (Unit Testing) Mantığı' kapsamında ele alınan <strong>assert Eşitliği</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `self.assertEqual(hesapla(2, 3), 5)` komutu fonksiyonun 5 üretip üretmediğini denetler.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> assert Eşitliği, bilişim sistemlerinde `self.assertEqual(hesapla(2, 3), 5)` komutu fonksiyonun 5 ür... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Regresyon Önleme</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Yeni bir özellik eklediğinizde eski özelliklerin bozulmadığını tek bir tuşla test eder.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Regresyon Önleme, Yeni bir özellik eklediğinizde eski özelliklerin bozulmadığını tek bir tuşla test eder. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Python Otomatik Birim Testi Kodu' bölümünde vurgulanan <strong>Sınır Değer Testleri</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sıfır, eksi sayılar ve aşırı büyük girdilerle kodu... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Sınır Değer Testleri asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Takım İçi Entegrasyon & Bug Avı Maratonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Modülleri Birleştir' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılımda hiç hata çıkmaması projenin harika olduğu anlamına gelir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Tam aksine, hiç test edilmediği anlamına gelir! İyi bir yazılımcı bilerek sistemi zorlar ve hataları erken bulur.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kabloları Zorlamayın & Gevşek Bırakmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Robotik projelerde en sık yaşanan entegrasyon hatası temassızlık yapan jumper kablolardır; kabloları bantla sabitleyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kabloları Zorlamayın & Gevşek Bırakmayın prensibi, Robotik projelerde en sık yaşanan entegrasyon hatası temassızlık yapan jumper kablolardır; kabloları bantla sabitleyin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sistem Entegrasyonu & Yazılım Test Metodolojileri'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Capstone Proje: Entegrasyon & Test Maratonu becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Capstone Proje: Entegrasyon & Test Maratonu becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "39": [
    {
      "question": "Aşağıdaki teknolojilerden hangisi ilişkisel veritabanlarından çekilen verileri Python ortamında temizlemek ve matris olarak yapay zekâ modeline hazırlamak için doğrudan kullanılır?",
      "options": [
        {
          "text": "Arduino IDE",
          "isCorrect": false
        },
        {
          "text": "Pandas ve NumPy Kütüphaneleri",
          "isCorrect": true
        },
        {
          "text": "CSS Flexbox",
          "isCorrect": false
        },
        {
          "text": "Servo.h",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Pandas ve NumPy, SQL veya dosyalardan gelen ham verileri temizleme, matrisleştirme ve makine öğrenmesi modellerine girdi olarak sunma araçlarıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Yıllık Döngü Özeti' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 1. Dönem donanım ve OOP temellerinden, 2. Dönem web, SQL ve makine öğrenmesine uzanan köprü.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Yıllık Döngü Özeti' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Kritik Sınav Senaryoları & Soru Çözümleri' kapsamında ele alınan <strong>Çözüm</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `SELECT o.ad, AVG(n.puan) FROM ogrenciler o INNER JOIN notlar n ON o.id = n.ogrenci_id GROUP BY o.ad;`",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Çözüm, bilişim sistemlerinde `SELECT o.ad, AVG(n.puan) FROM ogrenciler o INNER JOIN notla... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Çözüm</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) `df['fiyat'].fillna(df['fiyat'].mean(), inplace=True)` ardından `filtre = df[df['fiyat'] > 100]`.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Çözüm, `df['fiyat'].fillna(df['fiyat'].mean(), inplace=True)` ardından `filtre = df[df['fiyat'] > 100]`. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yıllık Büyük Sentez Kodu: Veriden Tahmine' bölümünde vurgulanan <strong>Yazılı Sınav Bonusu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Bu bütünleşik mimariyi sınav kağıdında açıklayabil... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yazılı Sınav Bonusu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahta Canlı Soru Çözüm Maratonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Rastgele Soru Çek' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılı sınavda sadece kod ezberleyenler yüksek not alır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Ezberleyenler ilk ters köşede takılır; mantığını ve mimari ilişkileri kavrayanlar her soruyu çözer.",
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
      "question": "Günün Altın Kuralı olan <strong>'Soruları Acele Etmeden İki Kez Okuyun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) En çok yapılan hata sorunun kökündeki 'değildir', 'beklenmez' veya 'hata verir' kelimelerini kaçırmaktır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Soruları Acele Etmeden İki Kez Okuyun prensibi, En çok yapılan hata sorunun kökündeki 'değildir', 'beklenmez' veya 'hata verir' kelimelerini kaçırmaktır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Yıllık Bilişim Müfredatı Kazanım Sentezi & Sınav Yetkinliği'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 2. Dönem 2. Büyük Sınav Tekrarı & Kapsamlı Özet becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 2. Dönem 2. Büyük Sınav Tekrarı & Kapsamlı Özet becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "40": [
    {
      "question": "Canlı bir yazılım veya donanım demosu sırasında beklenmedik bir bağlantı veya elektrik arızası yaşanması ihtimaline karşı profesyonel mühendislerin hazırladığı en kritik önlem nedir?",
      "options": [
        {
          "text": "Sunumu tamamen iptal edip kaçmak",
          "isCorrect": false
        },
        {
          "text": "Önceden kaydedilmiş çalışan sistem demosunu (Plan B / Fail-safe Video) hazır bulundurmak",
          "isCorrect": true
        },
        {
          "text": "Arızayı gizleyip çalışıyormuş gibi yalan söylemek",
          "isCorrect": false
        },
        {
          "text": "Bilgisayarı çöpe atmak",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Büyük teknoloji konferanslarında (Apple, Google, Microsoft) bile canlı demo kazalarına karşı çalışan sistemin önceden çekilmiş yüksek çözünürlüklü yedek demosu her zaman hazır tutulur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Büyük Gün: Canlı Sistem Demosu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) PowerPoint slaytları arkasına saklanmadan, çalışan canlı devreyi ve yazılımı sergileme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Büyük Gün: Canlı Sistem Demosu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Canlı Demo Nasıl Başarıyla Sunulur?' kapsamında ele alınan <strong>1. Dakika: Problem ve Çözüm</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 'Hangi sorunu çözüyoruz ve projemiz günlük hayatı nasıl kolaylaştırıyor?'",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Dakika: Problem ve Çözüm, bilişim sistemlerinde 'Hangi sorunu çözüyoruz ve projemiz günlük hayatı nasıl kola... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Dakika: Canlı Etkileşim</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sensöre üfleyin, butona basın, web sayfasında grafiğin nasıl güncellendiğini canlı gösterin.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Dakika: Canlı Etkileşim, Sensöre üfleyin, butona basın, web sayfasında grafiğin nasıl güncellendiğini canlı gösterin. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yedek Plan (Fail-Safe Strategy) İlkeleri' bölümünde vurgulanan <strong>Yerel Sunucu (Localhost)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Okul interneti yavaşsa projeyi harici bulut yerine... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yerel Sunucu (Localhost) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bilişim Zümresi Önünde Canlı Proje Sunumu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Sahneyi Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Canlı sunumda küçük bir aksaklık çıkarsa tüm proje sıfır alır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Asla! Gerçek hayatta uzay roketleri bile fırlatılırken aksaklık yaşanabilir; önemli olan sorunu soğukkanlılıkla teşhis etmektir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kodu Baştan Sona Okumayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Slayttaki 200 satır kodu tek tek okumak dinleyicileri sıkar; sadece kritik algoritmayı ve mimariyi özetleyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kodu Baştan Sona Okumayın prensibi, Slayttaki 200 satır kodu tek tek okumak dinleyicileri sıkar; sadece kritik algoritmayı ve mimariyi özetleyin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Canlı Sistem Demosu, Sunum Becerisi & Teknik Dokümantasyon'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Capstone Proje: Canlı Sistem Demosu & Test becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Capstone Proje: Canlı Sistem Demosu & Test becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "41": [
    {
      "question": "10. Sınıf Bilgisayar Bilimi (Kur 2) dersi boyunca edindiğiniz bilgi birikimi, üniversite ve iş hayatında aşağıdaki alanlardan hangisinin temelini oluşturur?",
      "options": [
        {
          "text": "Yalnızca klavyede hızlı yazı yazmanın",
          "isCorrect": false
        },
        {
          "text": "Yazılım Mühendisliği, Veri Bilimi, Siber Güvenlik ve Robotik Sistemler dünyasının",
          "isCorrect": true
        },
        {
          "text": "Sadece bilgisayar oyunları oynamanın",
          "isCorrect": false
        },
        {
          "text": "Bilgisayar monitörünü temizlemenin",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Bu yıl tamamladığınız OOP, Mikrodenetleyiciler, Web Mimarisi, SQL ve Yapay Zekâ konuları modern bilgisayar mühendisliğinin temel çekirdeğini oluşturmaktadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilişim Teknolojileri Şenliği' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Okul koridorlarında ve laboratuvarında açılan stantlarla projelerin tüm okula ve velilere sergilenmesi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilişim Teknolojileri Şenliği' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Geleceğin Bilişim Kariyer Haritası' kapsamında ele alınan <strong>1. Yapay Zekâ ve Veri Bilimi</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Büyük veri analizi, makine öğrenmesi algoritmaları, derin öğrenme ve üretken yapay zekâ (LLM) geliştirme.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Yapay Zekâ ve Veri Bilimi, bilişim sistemlerinde Büyük veri analizi, makine öğrenmesi algoritmaları, derin öğ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Full-Stack Web ve Bulut Mühendisliği</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Milyonlarca kullanıcılı web platformları, mikroservisler, AWS/Google Cloud ve modern arayüzler.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Full-Stack Web ve Bulut Mühendisliği, Milyonlarca kullanıcılı web platformları, mikroservisler, AWS/Google Cloud ve modern arayüzler. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Geliştiricinin Hayat Boyu Öğrenme Sözü' bölümünde vurgulanan <strong>Açık Kaynak Katkısı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sadece hazır kod kullanan değil, dünyaya faydalı k... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Açık Kaynak Katkısı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Yıl Sonu Bilişim Şenliği ve Portfolyo Lansmanı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Standını Süsle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılımcı olmak için doğuştan dahi matematikçi olmak şarttır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yazılımcı olmanın %10'u zekâ, %90'ı sabır, deneme-yanılma ve merak duygusudur.",
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
      "question": "Günün Altın Kuralı olan <strong>'Yaz Boyunca Kod Yazmayı Bırakmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kodlama kas gibidir; 3 ay hiç pratik yapmazsanız syntax unutulur. Haftada en az 2 saat küçük projeler yapın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Yaz Boyunca Kod Yazmayı Bırakmayın prensibi, Kodlama kas gibidir; 3 ay hiç pratik yapmazsanız syntax unutulur. Haftada en az 2 saat küçük projeler yapın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilişim Vizyonu, Portfolyo Sunumu & Kariyer Planlama'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Yıl Sonu Bilişim Şenliği & Kariyer Rehberliği becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Yıl Sonu Bilişim Şenliği & Kariyer Rehberliği becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>class Donanim:\n    def __init__(self, ad):\n        self.ad = ad\n    def calis(self):\n        return f'{self.ad}: Aktif'\n\nclass Islemci(Donanim):\n    def calis(self):\n        ana = super().calis()\n        return f'{ana} + 8 Çekirdek'\n\ncpu = Islemci('CPU')\nprint(cpu.calis())</pre>",
      "options": [
        {
          "text": "A) CPU: Aktif + 8 Çekirdek",
          "isCorrect": true
        },
        {
          "text": "B) CPU: Aktif",
          "isCorrect": false
        },
        {
          "text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı",
          "isCorrect": false
        },
        {
          "text": "D) 8 Çekirdek",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!",
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
