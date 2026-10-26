/**
 * MEB 9. Sınıf Bilgisayar Bilimi
 * Haftalık 10 Soruluk Konu Değerlendirme Testleri (Türkiye Yüzyılı Maarif Modeli 2026-2027)
 * Öğretmen: Vahit Keskin
 * 41 Hafta x 10 Soru = 410 Soru
 * Not: 10. Sorular %100 konu uyumlu, derin analiz ve üst düzey düşünme gerektiren zor sorulardır.
 */

const WEEKLY_TESTS = {
  "1": [
    {
      "question": "Bilgisayarda komutların Getirilmesi (Fetch), Çözülmesi (Decode) ve Çalıştırılması (Execute) adımlarını yürüten ana donanım birimi hangisidir?",
      "options": [
        {
          "text": "RAM (Ana Bellek)",
          "isCorrect": false
        },
        {
          "text": "CPU (Merkezi İşlem Birimi)",
          "isCorrect": true
        },
        {
          "text": "GPU (Ekran Kartı)",
          "isCorrect": false
        },
        {
          "text": "SSD (Katı Hâl Sürücüsü)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. CPU, Fetch-Decode-Execute döngüsü ile işletim sistemi ve program komutlarını yürüten bilgisayarın beynidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilgisayar Biliminin Kapsamı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanım, yazılım, ağlar ve algoritmaların kesişim haritası.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilgisayar Biliminin Kapsamı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Merkezi İşlem Birimi (CPU) ve Komut Döngüsü' kapsamında ele alınan <strong>ALU (Aritmetik Mantık Birimi)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Toplama, çıkarma, karşılaştırma ve Boole mantık işlemlerini icra eder.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> ALU (Aritmetik Mantık Birimi), bilişim sistemlerinde Toplama, çıkarma, karşılaştırma ve Boole mantık işlemlerini ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>CU (Kontrol Birimi)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Komutların zamanlamasını ve veri yollarındaki sinyal trafiğini koordine eder.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> CU (Kontrol Birimi), Komutların zamanlamasını ve veri yollarındaki sinyal trafiğini koordine eder. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bellek Türleri & Veri Hiyerarşisi' bölümünde vurgulanan <strong>Cache Bellek</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde İşlemciye en yakın ultra hızlı geçici bellek katma... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Cache Bellek asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Terminal ile Sistem Donanımını Analiz Etme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Terminali Başlat' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Çekirdek sayısı fazla olan her işlemci her oyunda veya uygulamada daha hızlıdır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Yazılım çoklu çekirdeği (multithreading) optimize etmemişse tek çekirdek performansı belirleyicidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Statik Elektrik (ESD)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Parçalara dokunmadan önce metal bir yüzeye dokunarak statik yükünüzü boşaltın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Statik Elektrik (ESD) prensibi, Parçalara dokunmadan önce metal bir yüzeye dokunarak statik yükünüzü boşaltın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sistem Analizi & Donanım Okuryazarlığı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Bilgisayar Bilimine Giriş & Donanım Mimarisi becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Bilgisayar Bilimine Giriş & Donanım Mimarisi becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "2": [
    {
      "question": "İşletim sisteminde donanım ile yazılımlar arasında doğrudan iletişim kuran, bellek ve süreç yönetiminden sorumlu en temel çekirdek bileşene ne ad verilir?",
      "options": [
        {
          "text": "Shell (Kabuk)",
          "isCorrect": false
        },
        {
          "text": "Kernel (Çekirdek)",
          "isCorrect": true
        },
        {
          "text": "BIOS / UEFI",
          "isCorrect": false
        },
        {
          "text": "GUI (Grafik Arayüz)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Kernel (Çekirdek), işletim sisteminin kalbidir; süreçleri, belleği ve donanım aygıtlarını doğrudan yönetir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'İşletim Sistemi Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanım ile uygulama yazılımları arasındaki köprü ve kaynak yöneticisi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'İşletim Sistemi Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'İşletim Sisteminin Dört Ana Görevi' kapsamında ele alınan <strong>Süreç Yönetimi (Process Scheduling)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) CPU süresini milisaniyeler bazında uygulamalara dağıtır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Süreç Yönetimi (Process Scheduling), bilişim sistemlerinde CPU süresini milisaniyeler bazında uygulamalara dağıtır.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Bellek Yönetimi (Memory Management)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Her programa izole bellek alanı tahsis eder, çakışmaları engeller.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Bellek Yönetimi (Memory Management), Her programa izole bellek alanı tahsis eder, çakışmaları engeller. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Terminal (CLI) Gücü ve Temel Komutlar' bölümünde vurgulanan <strong>Pardus</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Türkiye'nin güvenli ve yerli Debian tabanlı dağıtı... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Pardus asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Pardus Terminali ile Dosya ve Dizin Yönetimi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Dizin Oluştur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Linux işletim sistemlerinde hiç virüs veya güvenlik açığı bulunmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Linux mimarisi izin yapısı sebebiyle çok güvenlidir ancak kullanıcı hatası veya güncellenmemiş sunucular hedef olabilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'sudo Komutuna Dikkat'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yönetici yetkisi veren `sudo` komutunu ne yaptığını bilmediğiniz betiklerde asla çalıştırmayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> sudo Komutuna Dikkat prensibi, Yönetici yetkisi veren `sudo` komutunu ne yaptığını bilmediğiniz betiklerde asla çalıştırmayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İşletim Sistemi Yönetimi & Açık Kaynak Bilinci'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: İşletim Sistemleri & Açık Kaynak Dünyası becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda İşletim Sistemleri & Açık Kaynak Dünyası becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "3": [
    {
      "question": "Yerel ağda (LAN) bulunan bilgisayarları MAC adresleri tablosuna (CAM Table) göre birbirine bağlayan ve veriyi sadece hedef porta ileten akıllı ağ cihazı hangisidir?",
      "options": [
        {
          "text": "Hub (Dağıtıcı)",
          "isCorrect": false
        },
        {
          "text": "Switch (Anahtar)",
          "isCorrect": true
        },
        {
          "text": "Repeater (Tekrarlayıcı)",
          "isCorrect": false
        },
        {
          "text": "Modem",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Switch, gelen veri çerçevesindeki (Frame) hedef MAC adresini okuyarak paketi yalnızca ilgili porta yollar; Hub gibi herkese yaymaz.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Ağ Türleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) PAN (Kişisel), LAN (Yerel), MAN (Şehir) ve WAN (Geniş Alan Ağı).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Ağ Türleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Ağ Cihazları ve Görev Dağılımı' kapsamında ele alınan <strong>Switch (Anahtar)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Yerel ağdaki (LAN) cihazları MAC adreslerine göre birbirine bağlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Switch (Anahtar), bilişim sistemlerinde Yerel ağdaki (LAN) cihazları MAC adreslerine göre birbirine ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Router (Yönlendirici)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Farklı ağları IP adreslerine göre haberleştirir ve internet rotasını belirler.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Router (Yönlendirici), Farklı ağları IP adreslerine göre haberleştirir ve internet rotasını belirler. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'OSI Katmanları ve Veri Paketleme (Encapsulation)' bölümünde vurgulanan <strong>Paketleme</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Veri her katmandan geçerken başlık (header) eklene... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Paketleme asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Cisco Packet Tracer ile Yıldız Ağ Simülasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Cihazları Ekle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Wi-Fi sinyalinin şifresi güçlüyse ağdaki tüm veriler otomatik olarak tamamen gizlidir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Ağdaki diğer kullanıcılar şifresiz HTTP sitelerindeki trafiğinizi paket dinleme (sniffing) ile görebilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'WPA3 Şifreleme'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kablosuz ağlarda eski WEP ve WPA standartları dakikalar içinde kırılabilir; mutlaka WPA2/WPA3 kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> WPA3 Şifreleme prensibi, Kablosuz ağlarda eski WEP ve WPA standartları dakikalar içinde kırılabilir; mutlaka WPA2/WPA3 kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Ağ Mimarisi Modelleme & Protokol Analizi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Bilgisayar Ağları & Topolojiler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Bilgisayar Ağları & Topolojiler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "4": [
    {
      "question": "Web tarayıcınızın 'https://...' ile başlayan güvenli bir web sitesine bağlanırken kullandığı varsayılan ağ port numarası hangisidir?",
      "options": [
        {
          "text": "21",
          "isCorrect": false
        },
        {
          "text": "53",
          "isCorrect": false
        },
        {
          "text": "80",
          "isCorrect": false
        },
        {
          "text": "443",
          "isCorrect": true
        }
      ],
      "explanation": "Doğru Cevap: D. Standart güvensiz HTTP 80 portunu kullanırken, SSL/TLS ile şifrelenmiş güvenli HTTPS protokolü 443 numaralı portu kullanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'IP Adresleme Mimarisi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 32 bitlik IPv4 adres tükenmesi ve 128 bitlik IPv6 geleceği.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'IP Adresleme Mimarisi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'İnternetin Telefon Rehberi: DNS ve İstemci-Sunucu' kapsamında ele alınan <strong>1. Yerel Önbellek</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Önce tarayıcı ve işletim sistemi önbelleğinde IP aranır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Yerel Önbellek, bilişim sistemlerinde Önce tarayıcı ve işletim sistemi önbelleğinde IP aranır.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. DNS Sunucu Sorgusu</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bulunamazsa servis sağlayıcının (ISP) DNS sunucusuna sorulur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. DNS Sunucu Sorgusu, Bulunamazsa servis sağlayıcının (ISP) DNS sunucusuna sorulur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'İletim Katmanı: TCP vs UDP Farkı' bölümünde vurgulanan <strong>El Sıkışma (3-Way Handshake)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde SYN -> SYN-ACK -> ACK ile güvenli kanal açılır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> El Sıkışma (3-Way Handshake) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Wireshark ile HTTP / DNS Paketlerini Yakalama'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Wireshark'ı Aç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"IPv6 geldiğinde internet hızımız otomatik olarak 10 kat artacaktır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) IPv6 hız değil, tükenen IP adres havuzunu (3.4 x 10^38 adres) genişletmek için tasarlanmıştır.",
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
      "question": "Günün Altın Kuralı olan <strong>'DNS Zehirlenmesi (DNS Spoofing)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Zararlı yazılımlar DNS ayarlarınızı sahte sunuculara yönlendirerek banka sitelerini taklit edebilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> DNS Zehirlenmesi (DNS Spoofing) prensibi, Zararlı yazılımlar DNS ayarlarınızı sahte sunuculara yönlendirerek banka sitelerini taklit edebilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Protokol Analizi & Web Altyapısı Okuryazarlığı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: İnternet Protokolleri, IP & DNS becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda İnternet Protokolleri, IP & DNS becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "5": [
    {
      "question": "Kullanıcının bilgisayarındaki önemli dosyaları şifreleyerek erişilemez hale getiren ve şifreyi çözmek için para talep eden siber saldırı yazılımı hangisidir?",
      "options": [
        {
          "text": "Adware (Reklam Yazılımı)",
          "isCorrect": false
        },
        {
          "text": "Ransomware (Fidye Yazılımı)",
          "isCorrect": true
        },
        {
          "text": "Solucan (Worm)",
          "isCorrect": false
        },
        {
          "text": "Casus Yazılım (Spyware)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Ransomware (Fidye Yazılımı), sistemleri şifreleyip fidye isteyerek hastaneler, okullar ve şirketlerde milyarlarca liralık zarara yol açan en kritik tehdittir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Zararlı Yazılım Türleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Virüs, Truva Atı (Trojan), Fidye Yazılımı (Ransomware), Solucan (Worm), Casus (Spyware).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Zararlı Yazılım Türleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Zararlı Yazılımlar (Malware) ve Bulaşma Yolları' kapsamında ele alınan <strong>Fidye Yazılımı (Ransomware)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Diskteki tüm dosyaları güçlü şifrelerle kilitler ve açmak için kripto para talep eder.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Fidye Yazılımı (Ransomware), bilişim sistemlerinde Diskteki tüm dosyaları güçlü şifrelerle kilitler ve açmak iç... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Truva Atı (Trojan)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Faydalı bir oyun veya program gibi görünerek arka planda saldırgana kapı (backdoor) açar.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Truva Atı (Trojan), Faydalı bir oyun veya program gibi görünerek arka planda saldırgana kapı (backdoor) açar. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sosyal Mühendislik ve Oltalama (Phishing)' bölümünde vurgulanan <strong>İki Aşamalı Doğrulama (2FA)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Parolanız çalınsa bile telefonunuza gelen onay olm... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> İki Aşamalı Doğrulama (2FA) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Phishing (Oltalama) Analizi ve Parola Testi Laboratuvarı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. E-Posta Başlığını İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Ben ünlü veya zengin biri değilim, beni kimse hacklemek istemez.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Saldırganlar bireyleri botnet ordusu kurmak veya kimlik hırsızlığı yapmak için otomatik taramalarla avlar.",
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
      "question": "Günün Altın Kuralı olan <strong>'Aynı Parolayı Tekrarlama'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Bir site hacklendiğinde sızan parolanız tüm diğer hesaplarınızı tehlikeye atar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Aynı Parolayı Tekrarlama prensibi, Bir site hacklendiğinde sızan parolanız tüm diğer hesaplarınızı tehlikeye atar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Siber Tehdit Analizi & Dijital Öz Savunma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Siber Güvenlik & Dijital Mahremiyet becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Siber Güvenlik & Dijital Mahremiyet becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "6": [
    {
      "question": "Asimetrik (Açık Anahtarlı) şifreleme sisteminde, bir kullanıcının size şifreli bir mesaj gönderebilmesi için hangi anahtarınızı kullanması gerekir?",
      "options": [
        {
          "text": "Özel Anahtarınız (Private Key)",
          "isCorrect": false
        },
        {
          "text": "Genel Anahtarınız (Public Key)",
          "isCorrect": true
        },
        {
          "text": "Ortak Simetrik Anahtar",
          "isCorrect": false
        },
        {
          "text": "Hash Kodu",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Genel Anahtar (Public Key) herkese açıktır ve mesajı şifrelemek için kullanılır. Şifreyi yalnızca o anahtarın sahibi kendi Özel Anahtarıyla (Private Key) çözebilir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kriptoloji Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Kriptografi (Şifreleme bilimi) ve Kriptoanaliz (Şifre kırma bilimi).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kriptoloji Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Simetrik ve Asimetrik Şifreleme Mimarisi' kapsamında ele alınan <strong>Simetrik Şifreleme (AES)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Şifreleme ve çözme için tek bir gizli anahtar kullanılır; çok hızlıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Simetrik Şifreleme (AES), bilişim sistemlerinde Şifreleme ve çözme için tek bir gizli anahtar kullanılır; ço... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Asimetrik Şifreleme (RSA)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Herkesin bildiği Genel Anahtar (Public Key) ile şifrelenir, sadece sahibindeki Özel Anahtar (Private Key) çözer.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Asimetrik Şifreleme (RSA), Herkesin bildiği Genel Anahtar (Public Key) ile şifrelenir, sadece sahibindeki Özel Anahtar (Private Key) çözer. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Kriptografik Hash (Özet) Fonksiyonları' bölümünde vurgulanan <strong>Veri Bütünlüğü</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde İndirilen bir dosyanın değiştirilmediğini doğrulam... amacına hizmet eder.",
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
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Python ile Sezar Şifreleme Aracı Kodlama'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Algoritmayı Tasarla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Hash fonksiyonları çok güçlü şifreleme yöntemleridir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hash bir şifreleme değildir; tek yönlü matematiksel özettir, geri çözülemez.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kendi Şifrelemenizi Yazmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Gerçek projelerde asla kendi yazdığınız kriptoyu kullanmayın; test edilmiş standart kütüphaneleri (OpenSSL) seçin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kendi Şifrelemenizi Yazmayın prensibi, Gerçek projelerde asla kendi yazdığınız kriptoyu kullanmayın; test edilmiş standart kütüphaneleri (OpenSSL) seçin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kriptografik Düşünme & Veri Bütünlüğü Analizi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Kriptoloji: Şifreleme, Hash & İmza becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Kriptoloji: Şifreleme, Hash & İmza becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "7": [
    {
      "question": "Geliştiricinin kaynak kodunu herkesin kullanımına açtığı ancak bu kodu kullanan veya geliştiren kişilerin de kendi türetilmiş projelerini zorunlu olarak açık kaynak yapmasını şart koşan lisans türü hangisidir?",
      "options": [
        {
          "text": "MIT Lisansı",
          "isCorrect": false
        },
        {
          "text": "GNU GPL (Genel Kamu Lisansı)",
          "isCorrect": true
        },
        {
          "text": "Apache 2.0 Lisansı",
          "isCorrect": false
        },
        {
          "text": "Ticari EULA Lisansı",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. GNU GPL lisansı 'Copyleft' ilkesi gereği, o koddan türetilen tüm yeni projelerin de aynı özgürlükle açık kaynak dağıtılmasını şart koşar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Fikri Mülkiyet ve Telif' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Yazılım, görsel, müzik ve metinlerin eser sahipliği hakları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Fikri Mülkiyet ve Telif' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Açık Kaynak Yazılım Lisansları Dünyası' kapsamında ele alınan <strong>MIT Lisansı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Son derece özgürdür; kodu kopyalayabilir, değiştirebilir ve ticari satabilirsiniz; tek şart telif ibaresini korumaktır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> MIT Lisansı, bilişim sistemlerinde Son derece özgürdür; kodu kopyalayabilir, değiştirebilir ve ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>GPL (Genel Kamu Lisansı)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Copyleft ilkesi: Kodunuzu kullanan herkes kendi projesini de açık kaynak yapmak zorundadır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> GPL (Genel Kamu Lisansı), Copyleft ilkesi: Kodunuzu kullanan herkes kendi projesini de açık kaynak yapmak zorundadır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'KVKK ve Dijital Çağda Kişisel Veriler' bölümünde vurgulanan <strong>Açık Rıza</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Verileriniz onayınız olmadan üçüncü taraflarla pay... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Açık Rıza asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Yazılım Projesine Doğru Lisans Seçme Çalıştayı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Senaryoyu İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Google Görseller'de çıkan tüm fotoğraflar ücretsizce projelerde kullanılabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Görsellerin çoğunun telif hakkı vardır; filtrelerden 'Ticari ve diğer lisanslar' aranmalıdır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sistemleri İzinsiz Test Etmeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) İzin almadan bir web sitesinde açık aramak veya tarama yapmak (port scan) suç teşkil edebilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sistemleri İzinsiz Test Etmeyin prensibi, İzin almadan bir web sitesinde açık aramak veya tarama yapmak (port scan) suç teşkil edebilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bilişim Etiği & Yasal Sorumluluk Bilinci'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Bilişim Hukuku, Telif Hakları & KVKK becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Bilişim Hukuku, Telif Hakları & KVKK becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "8": [
    {
      "question": "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
      "options": [
        {
          "text": "DNS -> Alan adını IP adresine dönüştürür",
          "isCorrect": false
        },
        {
          "text": "Switch -> Yerel ağda MAC adresleriyle paket yönlendirir",
          "isCorrect": false
        },
        {
          "text": "SHA-256 -> Simetrik bir şifre çözme algoritmasıdır",
          "isCorrect": true
        },
        {
          "text": "ALU -> Aritmetik ve mantıksal hesaplamaları yapar",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. SHA-256 bir şifreleme veya şifre çözme algoritması değil, tek yönlü kriptografik bir HASH (özetleme) fonksiyonudur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Donanım & Mimari Tekrarı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Von Neumann, CPU döngüsü, önbellek ve bellek türleri soru analizi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Donanım & Mimari Tekrarı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'1. Dönem 1. Yazılı Sınavı Kritik Konu Özeti' kapsamında ele alınan <strong>CPU Komut Döngüsü</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Fetch (Getir), Decode (Çöz), Execute (Çalıştır) adımlarının sırası ve görevli birimler.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> CPU Komut Döngüsü, bilişim sistemlerinde Fetch (Getir), Decode (Çöz), Execute (Çalıştır) adımlarının ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>OSI Modeli vs TCP/IP</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Paketlerin katmanlardan geçerken başlık (header) alarak kapsüllenmesi.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> OSI Modeli vs TCP/IP, Paketlerin katmanlardan geçerken başlık (header) alarak kapsüllenmesi. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Örnek Senaryo Soru Çözümü' bölümünde vurgulanan <strong>Anahtar Kelimeler</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde MAC adresi, IP adresi, LAN, WAN, Yönlendirme terim... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Anahtar Kelimeler asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahtada İnteraktif Soru Bankası Çözümü'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Soru Dağılımını İncele' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılı sınavlarda uzun yazmak her zaman yüksek puan getirir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Öğretmenler uzun paragraflardan ziyade doğru teknik kavramların ve gerekçelerin varlığına puan verir.",
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
          "text": "C) 'Değildir', 'kullanılamaz', 'en az' gibi olumsuz ve sınırlayıcı ifadelere dikkat edin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Soruyu Sonuna Kadar Oku prensibi, 'Değildir', 'kullanılamaz', 'en az' gibi olumsuz ve sınırlayıcı ifadelere dikkat edin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kavramsal Entegrasyon & Sınav Stratejileri'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 1. Yazılı Sınavı Tekrarı & Pekiştirme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 1. Yazılı Sınavı Tekrarı & Pekiştirme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "9": [
    {
      "question": "Bir harita uygulamasının binaların rengini, ağaçların türünü veya sokaktaki kuşları göstermeyip sadece yolları ve mesafeleri göstermesi, hesaplamalı düşünmenin hangi temel ilkesine örnektir?",
      "options": [
        {
          "text": "Ayrıştırma (Decomposition)",
          "isCorrect": false
        },
        {
          "text": "Örüntü Tanıma (Pattern Recognition)",
          "isCorrect": false
        },
        {
          "text": "Soyutlama (Abstraction)",
          "isCorrect": true
        },
        {
          "text": "Hata Ayıklama (Debugging)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Soyutlama (Abstraction), problem çözümü için gereksiz detayları gizleyip yalnızca amaca hizmet eden kritik bilgileri öne çıkarma sürecidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Hesaplamalı Düşünme Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Problemleri bir bilgisayarın çözebileceği adımlara dönüştürme yetisi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Hesaplamalı Düşünme Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Hesaplamalı Düşünmenin Dört Temel Sütunu' kapsamında ele alınan <strong>1. Ayrıştırma</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Örn: Bir oyun yaparken harita, karakter, fizik motoru ve skor tabelasını ayrı tasarlamak.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Ayrıştırma, bilişim sistemlerinde Örn: Bir oyun yaparken harita, karakter, fizik motoru ve sko... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Örüntü Tanıma</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Daha önce çözülmüş benzer problemlerin mantığını yeni duruma uyarlamak.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Örüntü Tanıma, Daha önce çözülmüş benzer problemlerin mantığını yeni duruma uyarlamak. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Gerçek Hayat Problemlerini Ayrıştırma Örneği' bölümünde vurgulanan <strong>Böl ve Yönet (Divide & Conquer)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Büyük sorunlar parçalanarak çözülür.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Böl ve Yönet (Divide & Conquer) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Vaka Çalışması: Okul Kantini Otomasyonunu Ayrıştırma'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Problemi Parçala' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Hesaplamalı düşünme sadece bilgisayar programcılarının işine yarayan bir beceridir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Doktorlar teşhis koyarken, mimarlar bina çizerken, avukatlar dava savunurken hesaplamalı düşünür.",
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
      "question": "Günün Altın Kuralı olan <strong>'Hemen Kod Yazmaya Başlamayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Planı ve algoritması kağıt üzerinde netleşmemiş kodu bilgisayarda yazmak saatler kaybettirir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hemen Kod Yazmaya Başlamayın prensibi, Planı ve algoritması kağıt üzerinde netleşmemiş kodu bilgisayarda yazmak saatler kaybettirir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Hesaplamalı Düşünme (Computational Thinking)'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Hesaplamalı Düşünme & Problem Çözme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Hesaplamalı Düşünme & Problem Çözme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "10": [
    {
      "question": "3 adet diski olan bir Hanoi Kuleleri oyununu kurallara uygun olarak başka bir çubuğa aktarmak için gereken minimum hamle sayısı kaçtır?",
      "options": [
        {
          "text": "5",
          "isCorrect": false
        },
        {
          "text": "6",
          "isCorrect": false
        },
        {
          "text": "7",
          "isCorrect": true
        },
        {
          "text": "9",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Hanoi kulelerinde minimum hamle sayısı 2^n - 1 formülüyle hesaplanır. 3 disk için 2^3 - 1 = 8 - 1 = 7 hamledir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Klasik Algoritma Problemleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Kurt, Kuzu ve Ot kayık problemi; Nehir geçme stratejileri.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Klasik Algoritma Problemleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Klasik Mantık Problemleri ve Bilgisayar Bilimi Çözümleri' kapsamında ele alınan <strong>Kısıt 1</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Kurt ile kuzu yalnız kalırsa kurt kuzuyu yer.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Kısıt 1, bilişim sistemlerinde Kurt ile kuzu yalnız kalırsa kurt kuzuyu yer.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kısıt 2</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kuzu ile ot yalnız kalırsa kuzu otu yer.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kısıt 2, Kuzu ile ot yalnız kalırsa kuzu otu yer. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Hanoi Kuleleri ve 2^n - 1 Formülü' bölümünde vurgulanan <strong>64 Disk Efsanesi</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Saniyede 1 hamle yapılsa bile evrenin ömründen dah... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 64 Disk Efsanesi asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahtada Hanoi Kuleleri Turnuvası'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. 3 Diskli Çözüm' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Labirentlerde sol veya sağ duvarı takip etmek (Sağ El Kuralı) her labirentte mutlaka çıkışı bulur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Eğer çıkış veya hedef labirentin ortasında ada şeklindeyse duvar takip kuralı sonsuz döngüye girebilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Çıkmaza Girdiğinde Geri Adım At (Backtracking)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Algoritmalar hata yaptığında bir önceki güvenli duruma dönüp farklı yolu dener.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Çıkmaza Girdiğinde Geri Adım At (Backtracking) prensibi, Algoritmalar hata yaptığında bir önceki güvenli duruma dönüp farklı yolu dener. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritmik Zeka & Zihinsel Simülasyon'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Ara Tatil: Algoritma & Mantık Atölyesi becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Ara Tatil: Algoritma & Mantık Atölyesi becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "11": [
    {
      "question": "Aşağıdakilerden hangisi bir algoritmanın taşıması gereken zorunlu temel özelliklerden biri DEĞİLDİR?",
      "options": [
        {
          "text": "Kesinlik (Belirlilik)",
          "isCorrect": false
        },
        {
          "text": "Sonluluk",
          "isCorrect": false
        },
        {
          "text": "Belirli bir programlama diline (Örn: Python) bağımlı olması",
          "isCorrect": true
        },
        {
          "text": "En az bir çıktı üretmesi",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Algoritmalar dilden tamamen bağımsız evrensel mantık adımlarıdır; Python, C++ veya Java sadece bu adımları makineye anlatan araçlardır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Algoritmanın 5 Temel İlkesi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Girdi, Çıktı, Belirlilik (Kesinlik), Sonluluk ve Etkinlik.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Algoritmanın 5 Temel İlkesi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Algoritmanın Vazgeçilmez 5 Şartı' kapsamında ele alınan <strong>1. Girdi ve Çıktı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Sıfır veya daha fazla girdi alır, en az bir anlamlı çıktı üretir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Girdi ve Çıktı, bilişim sistemlerinde Sıfır veya daha fazla girdi alır, en az bir anlamlı çıktı ür... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Belirlilik (Kesinlik)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Her adım tek bir anlama gelmeli; 'biraz', 'yaklaşık' gibi belirsizlikler olamaz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Belirlilik (Kesinlik), Her adım tek bir anlama gelmeli; 'biraz', 'yaklaşık' gibi belirsizlikler olamaz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sözde Kod (Pseudocode) Örneği' bölümünde vurgulanan <strong>Trace Table</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Değişkenlerin adım adım değerlerini gösteren doğru... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Trace Table asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'ATM Para Çekme Sürecini Sözde Kod ile Modelleme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Girdileri Tanımla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sözde kod bilgisayar tarafından doğrudan çalıştırılan bir programlama dilidir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Sözde kod insanlar arasındaki iletişimi ve algoritma netliğini sağlamak için yazılan standart bir taslaktır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sıfıra Bölünme Hatası (ZeroDivision)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Paydada değişken varsa sıfır olup olmadığını EĞER ile kontrol etmeden bölme yapmayın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sıfıra Bölünme Hatası (ZeroDivision) prensibi, Paydada değişken varsa sıfır olup olmadığını EĞER ile kontrol etmeden bölme yapmayın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sözde Kod Yazımı & Mantıksal Modelleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Algoritma Tasarımı & Sözde Kod (Pseudocode) becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Algoritma Tasarımı & Sözde Kod (Pseudocode) becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "12": [
    {
      "question": "Bir akış şemasında 'Girilen sınav notu 50'den büyük mü?' gibi bir koşulu ve karar mekanizmasını temsil etmek için hangi geometrik şekil kullanılır?",
      "options": [
        {
          "text": "Paralelkenar",
          "isCorrect": false
        },
        {
          "text": "Dikdörtgen",
          "isCorrect": false
        },
        {
          "text": "Eşkenar Dörtgen (Baklava)",
          "isCorrect": true
        },
        {
          "text": "Daire",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Eşkenar dörtgen (karar sembolü), mantıksal bir karşılaştırma yaparak akışın Evet ya da Hayır yönünde dallanmasını sağlar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Standart Akış Şeması Sembolleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Elips (Başla/Dur), Paralelkenar (Girdi/Çıktı), Dikdörtgen (İşlem), Eşkenar Dörtgen (Karar).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Standart Akış Şeması Sembolleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Evrensel ANSI Akış Şeması Sembolleri' kapsamında ele alınan <strong>Elips</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Algoritmanın BAŞLA ve BİTİR (DUR) noktalarını gösterir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Elips, bilişim sistemlerinde Algoritmanın BAŞLA ve BİTİR (DUR) noktalarını gösterir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Paralelkenar</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Kullanıcıdan veri alma (OKU) veya ekrana sonuç basma (YAZ) işlemleri.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Paralelkenar, Kullanıcıdan veri alma (OKU) veya ekrana sonuç basma (YAZ) işlemleri. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Flowgorithm ile Canlı Algoritma Simülasyonu' bölümünde vurgulanan <strong>Dışa Aktarma</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Şemanızı tek tıkla Python, C++ veya Java koduna dö... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Dışa Aktarma asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Flowgorithm ile Faktöriyel ve Asal Sayı Şeması Çizme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Şemayı Başlat' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Akış şemaları sadece basit programlar içindir, profesyonel yazılımda kullanılmaz.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Havacılık, tıp ve otomotiv gibi kritik sektörlerde tüm yazılımlar önce akış şeması onayından geçer.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tek Başla, Tek Bitir'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Bir akış şemasında sadece bir adet BAŞLA ve tercihen tek bir BİTİR sembolü olmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tek Başla, Tek Bitir prensibi, Bir akış şemasında sadece bir adet BAŞLA ve tercihen tek bir BİTİR sembolü olmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Görsel Algoritma Modelleme & Simülasyon'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Akış Şemaları & Geometrik Semboller becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Akış Şemaları & Geometrik Semboller becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "13": [
    {
      "question": "A = True ve B = False olduğuna göre, `not(A and B) or B` mantıksal ifadesinin nihai doğruluk değeri nedir?",
      "options": [
        {
          "text": "True (1)",
          "isCorrect": true
        },
        {
          "text": "False (0)",
          "isCorrect": false
        },
        {
          "text": "Belirsiz",
          "isCorrect": false
        },
        {
          "text": "Hata verir",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: A. `A and B` = True and False = False. `not(False)` = True. `True or False` = True.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Önerme ve Doğruluk Değerleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Kesin doğru (1 / True) veya yanlış (0 / False) hüküm bildiren ifadeler.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Önerme ve Doğruluk Değerleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Boole Mantık Bağlaçları Tablosu' kapsamında ele alınan <strong>VE (AND - ∧)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Yalnızca her iki önerme de 1 (Doğru) ise sonuç 1'dir; bir tane 0 varsa sonuç 0 olur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> VE (AND - ∧), bilişim sistemlerinde Yalnızca her iki önerme de 1 (Doğru) ise sonuç 1'dir; bir ta... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>VEYA (OR - ∨)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Önermelerden en az biri 1 ise sonuç 1'dir; sadece ikisi de 0 iken sonuç 0 olur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> VEYA (OR - ∨), Önermelerden en az biri 1 ise sonuç 1'dir; sadece ikisi de 0 iken sonuç 0 olur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Python'da Mantıksal Önerme İfadeleri' bölümünde vurgulanan <strong>Toplayıcılar (Adders)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde İşlemcinin sayıları toplaması XOR ve AND kapıların... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Toplayıcılar (Adders) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Doğruluk Tablosu Çıkarma ve Mantık Devresi Simülasyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Problem Senaryosu' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Günlük dildeki 'veya' ile mantıktaki 'VEYA (OR)' tamamen aynıdır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Günlük dilde 'çay veya kahve' derken biri kastedilir (XOR); mantıkta ise ikisini birden seçmek de Doğrudur (OR).",
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
      "question": "Günün Altın Kuralı olan <strong>'Öncelik Sırası: NOT > AND > OR'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Parantez yoksa önce NOT, sonra AND, en son OR işletilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Öncelik Sırası: NOT > AND > OR prensibi, Parantez yoksa önce NOT, sonra AND, en son OR işletilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Boole Mantığı & Sayısal Karar Tasarımı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Mantıksal Önermeler & Boole Cebri becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Mantıksal Önermeler & Boole Cebri becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "14": [
    {
      "question": "1'den 128'e kadar sıralı bir sayı listesinde aranan bir sayıyı bulmak için İkili Arama (Binary Search) algoritması en kötü ihtimalle en fazla kaç karşılaştırma yapar?",
      "options": [
        {
          "text": "128",
          "isCorrect": false
        },
        {
          "text": "64",
          "isCorrect": false
        },
        {
          "text": "7",
          "isCorrect": true
        },
        {
          "text": "1",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. İkili arama her adımda listeyi yarıya böler. 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1 olmak üzere tam 7 adımda (log2(128) = 7) hedefe ulaşır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Arama Problemi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Veri yığını içinde hedef elemanı bulma gereksinimi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Arama Problemi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Linear Search vs Binary Search Karşılaştırması' kapsamında ele alınan <strong>Linear Search (Doğrusal)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Verinin sıralı olması gerekmez; 1 milyon eleman için en kötü durumda 1 milyon adım sürer.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Linear Search (Doğrusal), bilişim sistemlerinde Verinin sıralı olması gerekmez; 1 milyon eleman için en kötü... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Binary Search (İkili)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Veri MUTLAKA sıralı olmalıdır; 1 milyon eleman için en fazla 20 adımda (log2(1.000.000) ≈ 20) hedefe ulaşır!",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Binary Search (İkili), Veri MUTLAKA sıralı olmalıdır; 1 milyon eleman için en fazla 20 adımda (log2(1.000.000) ≈ 20) hedefe ulaşır! açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Kabarcık Sıralaması (Bubble Sort) Mantığı' bölümünde vurgulanan <strong>Bubble Sort</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Anlaşılması kolaydır ancak O(N^2) olduğu için büyü... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Bubble Sort asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sınıf İçi Sayı Tahmin Oyunu ve Sıralama Deneyi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Sayı Tut' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Hızlı bir bilgisayarda her algoritma aynı sürede çalışır, algoritma seçimi önemsizdir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kötü bir algoritma süper bilgisayarda bile saatler sürerken, verimli bir algoritma eski telefonda salisede biter.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sırasız Listede Binary Search Yapmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Sırasız bir dizide Binary Search uygularsanız var olan elemanı bile bulamazsınız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sırasız Listede Binary Search Yapmayın prensibi, Sırasız bir dizide Binary Search uygularsanız var olan elemanı bile bulamazsınız. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritmik Verimlilik & Zaman Karmaşıklığı Analizi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Arama & Sıralama Algoritmaları becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Arama & Sıralama Algoritmaları becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "15": [
    {
      "question": "Python'da `print(\"2026\", \"2027\", sep=\"/\")` komutu çalıştırıldığında terminal ekranında hangi çıktı görüntülenir?",
      "options": [
        {
          "text": "2026 2027",
          "isCorrect": false
        },
        {
          "text": "2026/2027",
          "isCorrect": true
        },
        {
          "text": "2026 sep 2027",
          "isCorrect": false
        },
        {
          "text": "Hata verir",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `sep=\"/\"` parametresi, virgülle ayrılmış argümanların arasına boşluk yerine belirtilen karakteri (`/`) yerleştirir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Python Nedir ve Neden Popüler?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Okunabilir temiz sözdizimi, zengin kütüphane ekosistemi ve geniş topluluk.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Python Nedir ve Neden Popüler?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Python'un Temel İlkeleri ve Sözdizimi' kapsamında ele alınan <strong>Yorumlanan Dil (Interpreted)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Kodu derlemeden (compile) satır satır doğrudan çalıştırır; hızlı prototip üretir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Yorumlanan Dil (Interpreted), bilişim sistemlerinde Kodu derlemeden (compile) satır satır doğrudan çalıştırır; h... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Temiz ve Sade Sözdizimi</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Süslü parantezler yerine girintileme (indentation) kullanır; İngilizce gibi okunur.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Temiz ve Sade Sözdizimi, Süslü parantezler yerine girintileme (indentation) kullanır; İngilizce gibi okunur. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'print() Fonksiyonu Parametreleri ve Yorumlar' bölümünde vurgulanan <strong>Hata Ayıklama</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Şüpheli kod satırlarını başına `#` koyarak geçici ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Hata Ayıklama asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'VS Code Kurulumu ve İlk Python Konsol Kartviziti'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Dosya Oluştur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Python sadece başlangıç dilidir, büyük profesyonel projelerde C++ zorunludur.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) YouTube ve Instagram omurgası Python (Django) ile yazılmıştır; doğru mimariyle devasa sistemleri yönetir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Büyük/Küçük Harf Duyarlılığı (Case-Sensitive)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `Print()` hata verir; Python'da tüm yerleşik komutlar küçük harfle `print()` yazılmalıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Büyük/Küçük Harf Duyarlılığı (Case-Sensitive) prensibi, `Print()` hata verir; Python'da tüm yerleşik komutlar küçük harfle `print()` yazılmalıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Kodlama Ortamı Kurulumu & Temel Sözdizimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Python Geliştirme Ortamı & print() becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Python Geliştirme Ortamı & print() becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "16": [
    {
      "question": "Aşağıdaki değişken tanımlamalarından hangisi Python kurallarına göre GEÇERSİZDİR (SyntaxError verir)?",
      "options": [
        {
          "text": "ogrenci_yasi = 16",
          "isCorrect": false
        },
        {
          "text": "_gizli_kod = 404",
          "isCorrect": false
        },
        {
          "text": "1inci_sinav = 85",
          "isCorrect": true
        },
        {
          "text": "sinavNotu = 90",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Python'da değişken isimleri ASLA rakamla başlayamaz (`1inci_sinav` geçersizdir; `sinav_1` olmalıdır).",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Değişken Mantığı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) RAM bellekte değer saklayan etiketli kutular.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Değişken Mantığı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Python Temel Veri Tipleri ve type() Kullanımı' kapsamında ele alınan <strong>int (Integer)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Pozitif ve negatif tam sayılar: `yas = 15`, `sicaklik = -4`.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> int (Integer), bilişim sistemlerinde Pozitif ve negatif tam sayılar: `yas = 15`, `sicaklik = -4`.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>float (Floating Point)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Noktalı ondalıklı sayılar: `pi = 3.1415`, `fiyat = 49.90`.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> float (Floating Point), Noktalı ondalıklı sayılar: `pi = 3.1415`, `fiyat = 49.90`. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Tip Dönüşümü (Type Casting) ve Kurallar' bölümünde vurgulanan <strong>Yasaklı Kelimeler</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde `for`, `if`, `while`, `class` gibi ayrılmış sözcük... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yasaklı Kelimeler asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Öğrenci Not Bilgi Sistemi Değişken Tasarımı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Değişkenleri Tanımla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir değişkenin türü Python'da asla değiştirilemez.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Python dinamik tiplemelidir; bir değişkene önce int sonra str atanabilir ancak bu iyi bir kodlama pratiği değildir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Anlamlı İsimler Verin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `a`, `b`, `x` yerine `ogrenci_yasi`, `kdv_tutari` gibi açıklayıcı isimler seçin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Anlamlı İsimler Verin prensibi, `a`, `b`, `x` yerine `ogrenci_yasi`, `kdv_tutari` gibi açıklayıcı isimler seçin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Türü Modelleme & Bellek Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Değişkenler & Veri Tipleri becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Değişkenler & Veri Tipleri becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "17": [
    {
      "question": "Python'da `a = 15`, `b = 4` iken `print(a // b)` ve `print(a % b)` komutlarının çıktıları sırasıyla nedir?",
      "options": [
        {
          "text": "3.75 ve 3",
          "isCorrect": false
        },
        {
          "text": "3 ve 3",
          "isCorrect": true
        },
        {
          "text": "3 ve 4",
          "isCorrect": false
        },
        {
          "text": "4 ve 3",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `//` tam bölme operatörüdür ve ondalığı atıp tam kısmı alır (15 // 4 = 3). `%` modül operatörüdür ve kalanı verir (15 % 4 = 3).",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Algoritma & Sözde Kod Tekrarı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sayaçlar, toplam biriktirme ve karar blokları analizi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Algoritma & Sözde Kod Tekrarı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'2. Yazılı Sınavı Odak Konuları' kapsamında ele alınan <strong>1. Kod Çıktısını Bulma</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Verilen kodun ekrana ne yazdıracağını (`sep`, `end`, tırnaklar ve tip dönüşümleri dahil) bulma.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Kod Çıktısını Bulma, bilişim sistemlerinde Verilen kodun ekrana ne yazdıracağını (`sep`, `end`, tırnakl... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Akış Şemasını Çizme</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Verilen günlük hayat senaryosunu elips, paralelkenar ve baklavalarla modelleme.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Akış Şemasını Çizme, Verilen günlük hayat senaryosunu elips, paralelkenar ve baklavalarla modelleme. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Örnek Yazılı Soru Çözümü' bölümünde vurgulanan <strong>Hata Türü</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde `TypeError: can only concatenate str to str`... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Hata Türü asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahtada Sınav Simülasyonu ve Kod Tamamlama'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Soruyu Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Programlama sınavında bir virgül eksik olsa tüm soru sıfır puan alır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) MEB öğretmenleri süreç odaklı değerlendirir; mantık doğruysa küçük yazım hatalarında kısmi puan verilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tırnak İşaretlerini Unutmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Metin çıktılarında tırnakların ekranda gözükmeyeceğini (sadece metnin yazılacağını) bilin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tırnak İşaretlerini Unutmayın prensibi, Metin çıktılarında tırnakların ekranda gözükmeyeceğini (sadece metnin yazılacağını) bilin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Sınav Performansı & Kod İnceleme (Code Review)'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 1. Dönem 2. Sınav Tekrarı & Kodlama becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 1. Dönem 2. Sınav Tekrarı & Kodlama becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "18": [
    {
      "question": "Python'da kullanıcı klavyeden `4` girdiğinde `sayi = input(\"Sayı:\")` ardından `print(sayi * 3)` çalıştırılırsa ekranda ne görünür?",
      "options": [
        {
          "text": "12",
          "isCorrect": false
        },
        {
          "text": "444",
          "isCorrect": true
        },
        {
          "text": "64",
          "isCorrect": false
        },
        {
          "text": "TypeError",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `input()` metin (`str`) döndürdüğü için `sayi = \"4\"` olur. Bir metni `* 3` ile çarpmak onu 3 kez yan yana yazar (`\"444\"`). Matematiksel 12 için `int(input())` yapılmalıydı!",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kullanıcıdan Veri Alma: input()' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Konsol üzerinden klavye girdisi okuma ve değişkene atama.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kullanıcıdan Veri Alma: input()' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Aritmetik Operatörlerin Tam Tablosu' kapsamında ele alınan <strong>Bölme (/) vs Tam Bölme (//)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `/` daima float döner (10 / 2 = 5.0). `//` ise küsuratı atar tam sayıyı alır (10 // 3 = 3).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Bölme (/) vs Tam Bölme (//), bilişim sistemlerinde `/` daima float döner (10 / 2 = 5.0). `//` ise küsuratı atar... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Mod Operatörü (%)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bölümden kalanı verir; bir sayının çiftliğini veya basamaklarını bulmada kullanılır (17 % 5 = 2).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Mod Operatörü (%), Bölümden kalanı verir; bir sayının çiftliğini veya basamaklarını bulmada kullanılır (17 % 5 = 2). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'input() ve f-string Devrimi' bölümünde vurgulanan <strong>Hız ve Okunabilirlik</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde f-string Python 3.6+ ile gelen en hızlı ve temiz f... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Hız ve Okunabilirlik asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Beden Kitle İndeksi (BKİ) Hesaplayıcı Kodlama'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Girdileri Al' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kullanıcı klavyeden sadece rakam yazsa bile Python onu sayı olarak algılar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kullanıcı 50 de yazsa `input()` bunu her zaman metin (`\"50\"`) olarak programa iletir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tip Dönüşümünü Unutma'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kullanıcıdan sayı alırken başına mutlaka `int()` veya `float()` ekleyin; aksi takdirde toplama yerine metin birleşir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tip Dönüşümünü Unutma prensibi, Kullanıcıdan sayı alırken başına mutlaka `int()` veya `float()` ekleyin; aksi takdirde toplama yerine metin birleşir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Etkileşimli Programlama & Aritmetik Çözümleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: input(), Operatörler & f-string becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda input(), Operatörler & f-string becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "19": [
    {
      "question": "Python dilinde kodların dünya standartlarında temiz, okunabilir ve düzenli yazılmasını sağlayan resmi stil ve biçimlendirme rehberi aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "ISO 9001",
          "isCorrect": false
        },
        {
          "text": "PEP 8",
          "isCorrect": true
        },
        {
          "text": "ASCII",
          "isCorrect": false
        },
        {
          "text": "IEEE 802.11",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. PEP 8 (Python Enhancement Proposal 8), Python topluluğunun kabul ettiği resmi stil ve temiz kod yazım kılavuzudur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Dönemlik Kod Portfolyosu' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) 19 hafta boyunca yazılan donanım, ağ, kripto ve Python betiklerini derleme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Dönemlik Kod Portfolyosu' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Temiz Kod (Clean Code) ve PEP 8 Standartları' kapsamında ele alınan <strong>1. Anlamlı İsimlendirme</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Değişken adları küçük harfle ve alt tireyle ayrılmalı (`kullanici_yasi`).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Anlamlı İsimlendirme, bilişim sistemlerinde Değişken adları küçük harfle ve alt tireyle ayrılmalı (`kull... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Operatör Boşlukları</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) `x=5+y` yerine `x = 5 + y` şeklinde operatörlerin etrafına tek boşluk konulmalıdır.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Operatör Boşlukları, `x=5+y` yerine `x = 5 + y` şeklinde operatörlerin etrafına tek boşluk konulmalıdır. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'1. Dönem Bilişim Başarı Portfolyosu' bölümünde vurgulanan <strong>Gelecek Dönem</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Koşullu durumlar (`if-elif-else`) ile programlarım... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Gelecek Dönem asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sınıf İçi Mini Kod Fuarı ve Akran İncelemesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Masaları Gez' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"İyi bir programcı yazdığı ilk kodu asla değiştirmez.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) En iyi yazılımcılar kodlarını sürekli yeniden düzenler (refactoring), sadeleştirir ve iyileştirir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kodlama Pratiğini Bırakmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yazılım yabancı dil gibidir; 2 hafta ara vermek sözdizimini unutturabilir, haftada 1-2 saat pratik yapın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kodlama Pratiğini Bırakmayın prensibi, Yazılım yabancı dil gibidir; 2 hafta ara vermek sözdizimini unutturabilir, haftada 1-2 saat pratik yapın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Proje Sunumu & Kod İncelemesi (Code Review)'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 1. Dönem Proje Sergisi & Yarıyıl Değerlendirme becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 1. Dönem Proje Sergisi & Yarıyıl Değerlendirme becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "20": [
    {
      "question": "Python'da 1 ile 100 arasında (her ikisi de dahil) rastgele bir tam sayı üretmek için hangi komut kullanılır?",
      "options": [
        {
          "text": "random.range(1, 100)",
          "isCorrect": false
        },
        {
          "text": "random.randint(1, 100)",
          "isCorrect": true
        },
        {
          "text": "math.random(1, 100)",
          "isCorrect": false
        },
        {
          "text": "int(random() * 100)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `random.randint(a, b)` fonksiyonu, a ve b sınırları dahil olmak üzere rastgele bir tamsayı döndürür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Kış Kodlama Meydan Okumaları' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Her güne 1 mini algoritma problemi çözme alışkanlığı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Kış Kodlama Meydan Okumaları' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Evde Kodlama Pratiği İçin Altın Tavsiyeler' kapsamında ele alınan <strong>Pomodoro Tekniği</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 25 dakika odaklanarak kod yazın, 5 dakika mola verin; zihniniz hep taze kalsın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Pomodoro Tekniği, bilişim sistemlerinde 25 dakika odaklanarak kod yazın, 5 dakika mola verin; zihnin... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Hata Yapmaktan Korkmayın</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) En iyi yazılımcılar en çok hata (bug) çözen ve pes etmeyenlerdir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Hata Yapmaktan Korkmayın, En iyi yazılımcılar en çok hata (bug) çözen ve pes etmeyenlerdir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Tatil İçin Mini Proje: Zar Simülatörü' bölümünde vurgulanan <strong>randint(1, 6)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 1 ile 6 dahil olmak üzere rastgele tam sayı üretir... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> randint(1, 6) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Ev Çalışması: Şanslı Sayı ve Günlük Skor Programı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Fikir Belirle' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazılımcılar günde 18 saat aralıksız kod yazmalıdır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Sürekli ekrana bakmak tükenmişliğe yol açar; en yaratıcı algoritmik çözümler dinlenmiş zihinle üretilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'20-20-20 Kuralı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakarak gözlerinizi dinlendirin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> 20-20-20 Kuralı prensibi, Her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakarak gözlerinizi dinlendirin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bireysel Öğrenme & Kodlama Tutkusu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Genç Programcılar Kış Kodlama Bülteni becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Genç Programcılar Kış Kodlama Bülteni becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "21": [
    {
      "question": "Verilerin zaman içerisindeki artış, azalış ve değişim trendini en net ve anlaşılır biçimde göstermek için hangi grafik türü tercih edilir?",
      "options": [
        {
          "text": "Pasta Grafik (Pie Chart)",
          "isCorrect": false
        },
        {
          "text": "Çizgi Grafik (Line Chart)",
          "isCorrect": true
        },
        {
          "text": "Radar Grafik",
          "isCorrect": false
        },
        {
          "text": "Kabarcık Grafik",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Çizgi grafikler (Line Chart), zaman serisi (günler, aylar, yıllar) boyunca değişen sürekli verilerin eğilimini göstermek için en ideal görselleştirme biçimidir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Veri Bilimi Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Ham veriyi toplayıp temizleme, analiz etme ve karar üretme sanatı.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Veri Bilimi Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Veri Görselleştirme Neden Bu Kadar Önemli?' kapsamında ele alınan <strong>Trend Tespiti</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Hisselerin, sıcaklıkların veya kullanıcı sayısının zaman içindeki artışını görme.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Trend Tespiti, bilişim sistemlerinde Hisselerin, sıcaklıkların veya kullanıcı sayısının zaman içi... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Aykırı Değerler (Anomalies)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Siber saldırı veya sahtekarlık anındaki olağandışı veri sıçramalarını yakalama.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Aykırı Değerler (Anomalies), Siber saldırı veya sahtekarlık anındaki olağandışı veri sıçramalarını yakalama. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Geleceğin Bilişim Meslekleri ve Becerileri' bölümünde vurgulanan <strong>Problem Çözücü</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Teknoloji değiştikçe değişmeyen tek şey algoritmik... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Problem Çözücü asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kendi Günlük Ekran Süresi Grafiğini Çıkarma'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Veriyi Topla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Veri analitiği sadece bankalar ve finansçılar içindir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Futbol takımlarının maç analizinden doktorların kanser araştırmasına kadar her alan veri analitiğiyle çalışır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Grafik Eksenlerine Dikkat Edin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Y ekseni sıfırdan başlamayan grafikler küçük farkları devasa gibi göstererek yanıltabilir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Grafik Eksenlerine Dikkat Edin prensibi, Y ekseni sıfırdan başlamayan grafikler küçük farkları devasa gibi göstererek yanıltabilir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Okuryazarlığı & Gelecek Vizyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Veri Analitiği & Görselleştirme Bülteni becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Veri Analitiği & Görselleştirme Bülteni becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "22": [
    {
      "question": "Python'da `x = 10` olduğuna göre `(x > 5) and not(x == 10)` ifadesinin sonucu nedir?",
      "options": [
        {
          "text": "True",
          "isCorrect": false
        },
        {
          "text": "False",
          "isCorrect": true
        },
        {
          "text": "None",
          "isCorrect": false
        },
        {
          "text": "SyntaxError",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `x > 5` True'dur. `x == 10` True olduğuna göre `not(True)` False olur. `True and False` işleminin nihai sonucu False'tur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Atama (=) vs Karşılaştırma (==)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Değer yükleme ile eşitlik sorgulama arasındaki hayati fark.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Atama (=) vs Karşılaştırma (==)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Karşılaştırma Operatörleri ve Boolean Sonuçlar' kapsamında ele alınan <strong>== (Eşit mi?)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `5 == 5` -> `True`, `5 == 4` -> `False`",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> == (Eşit mi?), bilişim sistemlerinde `5 == 5` -> `True`, `5 == 4` -> `False`... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>!= (Eşit değil mi?)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) `10 != 20` -> `True`, `10 != 10` -> `False`",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> != (Eşit değil mi?), `10 != 20` -> `True`, `10 != 10` -> `False` açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Bileşik Koşullar (and, or, not)' bölümünde vurgulanan <strong>Zincirleme Karşılaştırma</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Python'da `10 < x < 20` şeklinde doğrudan aralık y... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Zincirleme Karşılaştırma asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kullanıcı Girişi ve İndirim Hak Ediş Doğrulama Aracı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Girdileri Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Python'da `and` ve `or` yerine `&&` ve `||` kullanılır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) C++ ve Java'da `&&` kullanılırken Python sade İngilizce kelimeleri (`and`, `or`, `not`) benimsemiştir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Float Sayılarda Eşitlik Tehlikesi'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `0.1 + 0.2 == 0.3` sonucu Python'da `False` döner! (Kayan nokta hassasiyeti sebebiyle `round()` kullanın).",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Float Sayılarda Eşitlik Tehlikesi prensibi, `0.1 + 0.2 == 0.3` sonucu Python'da `False` döner! (Kayan nokta hassasiyeti sebebiyle `round()` kullanın). gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Mantıksal İfade Yazımı & Karar Altyapısı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Karşılaştırma & Mantıksal Operatörler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Karşılaştırma & Mantıksal Operatörler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "23": [
    {
      "question": "Python'da bir `if` veya `else` satırının hemen sonuna hangi işaretin konulması zorunludur?",
      "options": [
        {
          "text": "Noktalı Virgül (;)",
          "isCorrect": false
        },
        {
          "text": "İki Nokta Üst Üste (:)",
          "isCorrect": true
        },
        {
          "text": "Süslü Parantez ({)",
          "isCorrect": false
        },
        {
          "text": "Ok İşareti (->)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Python'da blok başlatan tüm bileşik ifadelerin (`if`, `else`, `elif`, `for`, `while`, `def`) sonuna iki nokta üst üste (`:`) konulur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Programın Karar Verme Gücü' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Doğrusal akıştan şartlara göre yön değiştiren akıllı programlara geçiş.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Programın Karar Verme Gücü' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'if ve else Sözdizimi Kuralları' kapsamında ele alınan <strong>1. if anahtar kelimesi</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Koşul ifadesini başlatır (`if notu >= 50:`).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. if anahtar kelimesi, bilişim sistemlerinde Koşul ifadesini başlatır (`if notu >= 50:`).... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. İki Nokta (:)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Koşulun bittiğini ve içeriye girileceğini belirtir; unutulursa SyntaxError verir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. İki Nokta (:), Koşulun bittiğini ve içeriye girileceğini belirtir; unutulursa SyntaxError verir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Gerçek Hayat Örneği: Giriş Yetkilendirme' bölümünde vurgulanan <strong>IndentationError</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Boşluk sayılarının uyumsuzluğunda Python'un verdiğ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> IndentationError asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Ehliyet ve Yaş Uygunluk Denetleyicisi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Yaşı Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Her `if` bloğunun arkasından mutlaka bir `else` gelmek zorundadır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Hayır; `else` zorunlu değildir. Sadece koşul sağlanınca bir şey yapmak istiyorsak tek başına `if` yeterlidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'İki Noktayı Asla Unutmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `if yas >= 18` satırının sonuna `:` koymamak yeni başlayanların en sık yaptığı hatadır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> İki Noktayı Asla Unutmayın prensibi, `if yas >= 18` satırının sonuna `:` koymamak yeni başlayanların en sık yaptığı hatadır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Akış Kontrolü & Koşullu Mantık Kurma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Koşullu Durumlar: if & else becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Koşullu Durumlar: if & else becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "24": [
    {
      "question": "Aşağıdaki kod parçasında `notu = 75` iken ekrana ne yazdırılır?\n```python\nif notu >= 50:\n    print(\"Geçti\")\nelif notu >= 70:\n    print(\"İyi\")\n```",
      "options": [
        {
          "text": "İyi",
          "isCorrect": false
        },
        {
          "text": "Geçti",
          "isCorrect": true
        },
        {
          "text": "Hem Geçti hem İyi",
          "isCorrect": false
        },
        {
          "text": "Hata verir",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. 75 sayısı 50'den büyük olduğu için ilk `if` koşulu sağlanır, ekrana 'Geçti' yazar ve merdiven biter. `elif notu >= 70` satırına hiç sıra gelmez! (Sıralama hatası örneği).",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'İkiden Fazla Olasılık' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sadece Evet/Hayır yetmediğinde devreye giren çoklu dallanma.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'İkiden Fazla Olasılık' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'elif Merdiveninin Altın Kuralı' kapsamında ele alınan <strong>Zincirleme Bağlantı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Merdivenin basamakları birbirine bağlıdır; yukarıdaki sağlandıysa aşağıdakiler kontrol bile edilmez.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Zincirleme Bağlantı, bilişim sistemlerinde Merdivenin basamakları birbirine bağlıdır; yukarıdaki sağlan... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sıralama Önemlidir</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Koşulları en özelden en genele veya büyükten küçüğe doğru mantıksal sırayla dizmelisiniz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sıralama Önemlidir, Koşulları en özelden en genele veya büyükten küçüğe doğru mantıksal sırayla dizmelisiniz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Not Değerlendirme ve Harf Notu Algoritması' bölümünde vurgulanan <strong>Girinti Derinliği</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Her iç içe blokta girinti 4 boşluk daha içeri kaya... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Girinti Derinliği asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Bankamatik (ATM) Menü ve Bakiye Sistemi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Menüyü Bas' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir `elif` bloğu doğru olursa altındaki diğer `elif` blokları da çalışır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Merdivende DOĞRU çıkan ilk blok çalışır ve tüm merdiven anında sonlanır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Büyük Sayıyı Başa Koyun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Not sisteminde `if puan >= 50:` başa konursa, 90 alan öğrenci bile 'Geçer' alır ve durur; büyükten küçüğe sıralayın!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Büyük Sayıyı Başa Koyun prensibi, Not sisteminde `if puan >= 50:` başa konursa, 90 alan öğrenci bile 'Geçer' alır ve durur; büyükten küçüğe sıralayın! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Çok Kriterli Karar Algoritmaları Tasarımı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Çok Yönlü Koşullar: elif & İç İçe if becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Çok Yönlü Koşullar: elif & İç İçe if becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "25": [
    {
      "question": "Python'da `for i in range(2, 10, 3): print(i, end=\" \")` kodunun ekran çıktısı aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "2 5 8",
          "isCorrect": true
        },
        {
          "text": "2 5 8 11",
          "isCorrect": false
        },
        {
          "text": "3 6 9",
          "isCorrect": false
        },
        {
          "text": "2 4 6 8 10",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: A. 2'den başlar, 3'er artar: 2, 5, 8. Bir sonraki adım 11 olurdu fakat 10 sınırını aştığı için döngü 8'de durur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Neden Döngü (Loop)?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Kendini tekrar eden amele işlerini bilgisayarın işlemci hızına devretme.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Neden Döngü (Loop)?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'range() Fonksiyonunun 3 Farklı Kullanımı' kapsamında ele alınan <strong>1. range(5)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) 0'dan başlar, 5'e kadar (5 hariç): `0, 1, 2, 3, 4` sayılarını üretir (tam 5 tekrar).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. range(5), bilişim sistemlerinde 0'dan başlar, 5'e kadar (5 hariç): `0, 1, 2, 3, 4` sayıların... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. range(10, 20)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) 10'dan başlar, 20'ye kadar (20 hariç): `10, 11, ..., 19` üretir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. range(10, 20), 10'dan başlar, 20'ye kadar (20 hariç): `10, 11, ..., 19` üretir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Sayaç ve Toplam Biriktirme Mantığı' bölümünde vurgulanan <strong>Adım Sayısı</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Geriye doğru saymak için adım parametresi negatif ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Adım Sayısı asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'İnteraktif Çarpım Tablosu ve Sayı İstatistik Aracı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Sayıyı Al' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"`range(5)` komutu 1'den başlar ve 5'e kadar gider.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Bilgisayar biliminde sayma daima 0'dan başlar! `range(5)` -> `0, 1, 2, 3, 4` üretir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Bitiş Değeri Dahil Değildir (Off-by-one)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 10'a kadar dönmek için `range(1, 11)` yazmalısınız; `range(1, 10)` yazarsanız 9'da durur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Bitiş Değeri Dahil Değildir (Off-by-one) prensibi, 10'a kadar dönmek için `range(1, 11)` yazmalısınız; `range(1, 10)` yazarsanız 9'da durur. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Döngüsel Modelleme & Otomasyon'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: for Döngüsü & range() Fonksiyonu becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda for Döngüsü & range() Fonksiyonu becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "26": [
    {
      "question": "Aşağıdaki kod parçasında programın çökmesine (ZeroDivisionError) sebep olan durum hangi hata kategorisine girer?\n```python\npuan = 100\nkisi_sayisi = 0\nprint(puan / kisi_sayisi)\n```",
      "options": [
        {
          "text": "Sözdizimi Hatası (SyntaxError)",
          "isCorrect": false
        },
        {
          "text": "Çalışma Zamanı Hatası (Runtime Error)",
          "isCorrect": true
        },
        {
          "text": "Mantıksal Hata (Logic Error)",
          "isCorrect": false
        },
        {
          "text": "Donanım Hatası",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Kural gereği sözdiziminde hata yoktur; ancak program çalışırken sıfıra bölme imkansız olduğu için 'ZeroDivisionError' çalışma zamanı (Runtime) hatası fırlatır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Hata Türleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sözdizimi (Syntax), Çalışma Zamanı (Runtime) ve Mantıksal (Semantic) Hatalar.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Hata Türleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Üç Temel Hata Türü' kapsamında ele alınan <strong>1. Sözdizimi Hatası (SyntaxError)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) İki nokta unutulması, parantez kapanmaması; program hiç başlamadan durur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Sözdizimi Hatası (SyntaxError), bilişim sistemlerinde İki nokta unutulması, parantez kapanmaması; program hiç başl... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Çalışma Zamanı Hatası (Runtime)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sıfıra bölme (`ZeroDivisionError`), tip uyuşmazlığı (`TypeError`); program çalışırken çöker.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Çalışma Zamanı Hatası (Runtime), Sıfıra bölme (`ZeroDivisionError`), tip uyuşmazlığı (`TypeError`); program çalışırken çöker. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Adım Adım Hata Ayıklama Örneği' bölümünde vurgulanan <strong>Breakpoint</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Gelişmiş editörlerde kodu durdurup bellek durumunu... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Breakpoint asla rastgele değildir; kurallı, sistematik ve planlıdır.",
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
          "text": "B) '1. Hata Raporunu Oku' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Usta yazılımcılar hiç hata yapmaz ve kodları ilk seferde kusursuz çalışır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kıdemli yazılımcıların mesaisinin %70'i hata ayıklamak ve sistemleri test etmekle geçer.",
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
      "question": "Günün Altın Kuralı olan <strong>'Hata Mesajından Korkmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Kırmızı hata mesajı ceza değil, Python'un size tam olarak nereye bakmanız gerektiğini söyleyen yardım çağrısıdır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hata Mesajından Korkmayın prensibi, Kırmızı hata mesajı ceza değil, Python'un size tam olarak nereye bakmanız gerektiğini söyleyen yardım çağrısıdır. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Hata Ayıklama (Debugging) & Kod Refaktoring'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Ara Tatil: Kodlama & Hata Ayıklama becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Ara Tatil: Kodlama & Hata Ayıklama becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "27": [
    {
      "question": "Aşağıdaki kod çalıştırıldığında ekranda ne görünür?\n```python\ns = 0\nfor x in [2, 5, 8]:\n    if x > 4:\n        s += x\nprint(s)\n```",
      "options": [
        {
          "text": "15",
          "isCorrect": false
        },
        {
          "text": "13",
          "isCorrect": true
        },
        {
          "text": "8",
          "isCorrect": false
        },
        {
          "text": "5",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. x değerleri sırasıyla 2, 5, 8 olur. 2 > 4 yanlıştır (eklenmez). 5 > 4 doğrudur (s = 5). 8 > 4 doğrudur (s = 5 + 8 = 13). Sonuç 13 olur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Operatör Öncelikleri' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Parantez, karşılaştırma (`==`, `!=`) ve mantıksal (`and`, `or`) işlem adımları.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Operatör Öncelikleri' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Sınavda En Çok Karşılaşılan 3 Soru Tipi' kapsamında ele alınan <strong>1. 'Kodun çıktısı nedir?'</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Döngü ve koşul içeren 6 satırlık bir kodun ekrana ne basacağını adım adım yazma.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. 'Kodun çıktısı nedir?', bilişim sistemlerinde Döngü ve koşul içeren 6 satırlık bir kodun ekrana ne basacağ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. 'Kodu tamamlayınız'</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İstenen görevi yerine getirmesi için boş bırakılan yerlere uygun operatörleri yerleştirme.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. 'Kodu tamamlayınız', İstenen görevi yerine getirmesi için boş bırakılan yerlere uygun operatörleri yerleştirme. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Örnek Sınav Sorusu: Döngü ve Koşul Harmanı' bölümünde vurgulanan <strong>range(1, 10)</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde 10'un dahil olmadığını unutmamak en önemli püf nok... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> range(1, 10) asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahtada Canlı Sınav Denemesi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Soruyu Yansıt' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sınavda bir döngü 100 kere dönüyorsa 100 adımı da elle yazmalıyız.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) İlk 3-4 adımı yazıp örüntüyü (matematiksel kuralı) keşfetmek yeterlidir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Döngünün Kaç Kere Döndüğünü Sayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `range(0, 5)` tam 5 kez döner; `range(1, 5)` ise 4 kez döner.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Döngünün Kaç Kere Döndüğünü Sayın prensibi, `range(0, 5)` tam 5 kez döner; `range(1, 5)` ise 4 kez döner. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Algoritma Analizi & Kod Çıktısı Çözümleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: 2. Dönem 1. Sınav Tekrarı & Kod Analizi becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda 2. Dönem 1. Sınav Tekrarı & Kod Analizi becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "28": [
    {
      "question": "Aşağıdaki kod parçasında sayacın değeri kaç olduğunda döngü sonlanır?\n```python\nsayac = 1\nwhile sayac < 5:\n    sayac += 2\n```",
      "options": [
        {
          "text": "3",
          "isCorrect": false
        },
        {
          "text": "4",
          "isCorrect": false
        },
        {
          "text": "5",
          "isCorrect": true
        },
        {
          "text": "Sonsuz döngüye girer",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Başlangıçta sayac=1 (1<5 Doğru) -> sayac=3 olur. Sonra 3<5 (Doğru) -> sayac=5 olur. Sonra 5<5 (Yanlış) olur ve döngü sayac 5 iken sonlanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'for vs while Farkı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Adım sayısı belliyse `for`, koşula bağlı belirsiz tekrarlar için `while`.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'for vs while Farkı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'for ile while Arasındaki Temel Fark' kapsamında ele alınan <strong>for Döngüsü</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Tekrar sayısı baştan bellidir (Örn: '10 kere dön', 'Listedeki 50 elemanı tara').",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> for Döngüsü, bilişim sistemlerinde Tekrar sayısı baştan bellidir (Örn: '10 kere dön', 'Listedek... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>while Döngüsü</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bir olay gerçekleşene kadar döner (Örn: 'Kullanıcı doğru şifreyi girene kadar sor', 'Oyun bitene kadar ekrana çiz').",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> while Döngüsü, Bir olay gerçekleşene kadar döner (Örn: 'Kullanıcı doğru şifreyi girene kadar sor', 'Oyun bitene kadar ekrana çiz'). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Şifre Doğrulama ve Sayı Tahmin Algoritması' bölümünde vurgulanan <strong>Ctrl + C</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Terminalde sonsuz döngüye giren programı zorla dur... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Ctrl + C asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Sayı Tahmin Oyunu Geliştirme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Rastgele Sayı Seç' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sonsuz döngü bilgisayar donanımını yakar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Donanım yanmaz ancak CPU %100 yük altına girip fanları hızlanır; işletim sistemi görevi sonlandırabilir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Sayacı Döngü İçinde Artırın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `i = 1` yazıp `while i <= 10:` dediyseniz döngünün sonuna mutlaka `i += 1` yazmalısınız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Sayacı Döngü İçinde Artırın prensibi, `i = 1` yazıp `while i <= 10:` dediyseniz döngünün sonuna mutlaka `i += 1` yazmalısınız. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dinamik Döngü Kontrolü & Süreç Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: while Döngüsü & Koşullu Tekrarlar becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda while Döngüsü & Koşullu Tekrarlar becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "29": [
    {
      "question": "Aşağıdaki kod çalıştırıldığında ekrana basılan son sayı hangisidir?\n```python\nfor i in range(1, 10):\n    if i == 4:\n        continue\n    if i == 7:\n        break\n    print(i, end=\" \")\n```",
      "options": [
        {
          "text": "3",
          "isCorrect": false
        },
        {
          "text": "6",
          "isCorrect": true
        },
        {
          "text": "7",
          "isCorrect": false
        },
        {
          "text": "9",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. 1, 2, 3 basılır. 4'te `continue` olur (atlanır, basılmaz). 5, 6 basılır. 7'ye geldiğinde `break` çalışır ve döngü tamamen biter. Ekrana basılan son sayı 6'dır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Erken Ayrılma: break' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Koşula bakılmaksızın döngüyü o anda tamamen sonlandırıp dışarı çıkma.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Erken Ayrılma: break' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'break vs continue Farkı' kapsamında ele alınan <strong>break (Durdur ve Çık)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Döngüyü derhal öldürür. Döngüden sonraki ilk satıra atlar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> break (Durdur ve Çık), bilişim sistemlerinde Döngüyü derhal öldürür. Döngüden sonraki ilk satıra atlar.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>continue (Pas Geç ve Devam Et)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Sadece o anki adımı yarıda keser; döngünün bir sonraki turuna geçer.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> continue (Pas Geç ve Devam Et), Sadece o anki adımı yarıda keser; döngünün bir sonraki turuna geçer. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Uygulama: Filtreleme ve Acil Çıkış' bölümünde vurgulanan <strong>Temiz Tasarım</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde `continue` iç içe `if` kalabalığını azaltır.... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Temiz Tasarım asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Alışveriş Sepeti ve İptal Mekanizması Simülatörü'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Sonsuz Döngü Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"`continue` komutu programı kapatır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) `continue` sadece o anki döngü adımını atlar, döngü bir sonraki değerle çalışmaya devam eder.",
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
      "question": "Günün Altın Kuralı olan <strong>'İç İçe Döngülerde break'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `break` sadece içinde bulunduğu en içteki döngüyü kırar; dıştaki döngü dönmeye devam eder!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> İç İçe Döngülerde break prensibi, `break` sadece içinde bulunduğu en içteki döngüyü kırar; dıştaki döngü dönmeye devam eder! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Döngü Akış Yönetimi & Erken Sonlandırma'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Döngü Kontrolleri: break & continue becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Döngü Kontrolleri: break & continue becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "30": [
    {
      "question": "`sehirler = [\"Ankara\", \"İstanbul\", \"İzmir\", \"Bursa\"]` listesinde `sehirler[-1]` ifadesi hangi şehri döndürür?",
      "options": [
        {
          "text": "Ankara",
          "isCorrect": false
        },
        {
          "text": "İzmir",
          "isCorrect": false
        },
        {
          "text": "Bursa",
          "isCorrect": true
        },
        {
          "text": "IndexError",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Negatif indeksleme listenin sonundan geriye doğru sayar. `-1` daima listenin en son elemanını (Bursa) verir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Liste (List) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Birden çok veriyi tek bir değişken altında sıralı saklayan dinamik koleksiyon.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Liste (List) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Listelerin Bellek Mimarisi ve İndeksleme' kapsamında ele alınan <strong>0. İndeks (İlk Eleman)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `diller[0]` daima listenin ilk elemanını getirir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 0. İndeks (İlk Eleman), bilişim sistemlerinde `diller[0]` daima listenin ilk elemanını getirir.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>-1. İndeks (Son Eleman)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Listenin uzunluğunu bilmeseniz bile `diller[-1]` son elemanı verir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> -1. İndeks (Son Eleman), Listenin uzunluğunu bilmeseniz bile `diller[-1]` son elemanı verir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Dilimleme (Slicing) Sözdizimi' bölümünde vurgulanan <strong>len() Fonksiyonu</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Listenin kaç elemandan oluştuğunu `len(liste)` ile... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> len() Fonksiyonu asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Lise Ders Programı ve Gün Listesi Modelleme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Listeyi Tanımla' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Listelerin ilk elemanının indeksi 1'dir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Tüm modern dillerde (Python, C, Java) ilk elemanın indeksi daima 0'dır.",
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
      "question": "Günün Altın Kuralı olan <strong>'Son Elemanın İndeksi: len - 1'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) 5 elemanlı bir listenin son indeksi 4'tür; `liste[5]` yazarsanız program çöker.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Son Elemanın İndeksi: len - 1 prensibi, 5 elemanlı bir listenin son indeksi 4'tür; `liste[5]` yazarsanız program çöker. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Koleksiyonel Veri Yönetimi & Dizi Mimarisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Python Veri Yapıları 1: Listeler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Python Veri Yapıları 1: Listeler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "31": [
    {
      "question": "`sayilar = [10, 20, 30]` listesine `sayilar.append(40)` uygulandıktan sonra `sayilar.pop(0)` çalıştırılırsa listenin son hali ne olur?",
      "options": [
        {
          "text": "[20, 30, 40]",
          "isCorrect": true
        },
        {
          "text": "[10, 20, 30, 40]",
          "isCorrect": false
        },
        {
          "text": "[10, 20, 30]",
          "isCorrect": false
        },
        {
          "text": "[20, 30]",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: A. `append(40)` ile liste `[10, 20, 30, 40]` olur. `pop(0)` ise 0. indisteki ilk elemanı (10) silip çıkarır. Kalan liste: `[20, 30, 40]`.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Eleman Ekleme' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sona ekleme (`append()`) ve araya ekleme (`insert()`).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Eleman Ekleme' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'En Çok Kullanılan 6 Liste Metodu' kapsamında ele alınan <strong>append(deger)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Listenin en sonuna yeni bir eleman ekler: `sepet.append('Kitap')`.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> append(deger), bilişim sistemlerinde Listenin en sonuna yeni bir eleman ekler: `sepet.append('Kit... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>pop(indeks)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Belirtilen indisteki elemanı listeden çıkarır ve geriye döndürür.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> pop(indeks), Belirtilen indisteki elemanı listeden çıkarır ve geriye döndürür. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'for Döngüsü ile Liste Üzerinde Gezinme' bölümünde vurgulanan <strong>enumerate()</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Döngüde hem sıra numarasını hem de elemanın kendis... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> enumerate() asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Dinamik Görev Listesi (To-Do List) Uygulaması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Boş Liste Başlat' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"`sort()` ile `sorted()` tamamen aynıdır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) `liste.sort()` orijinal listeyi değiştirir; `sorted(liste)` ise orijinali bozmadan yeni bir kopya döndürür.",
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
      "question": "Günün Altın Kuralı olan <strong>'sort() Geriye Değer Döndürmez'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `yeni = liste.sort()` yazarsanız `yeni` değişkeni `None` olur! `sort()` orijinal listeyi yerinde değiştirir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> sort() Geriye Değer Döndürmez prensibi, `yeni = liste.sort()` yazarsanız `yeni` değişkeni `None` olur! `sort()` orijinal listeyi yerinde değiştirir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dizi Manipülasyonu & Algoritmik Veri İşleme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Liste Metotları & Döngüler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Liste Metotları & Döngüler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "32": [
    {
      "question": "Aşağıdaki kod parçasında `araba[\"renk\"]` satırı çalıştırıldığında ekranda ne görünür?\n```python\naraba = {\"marka\": \"TOGG\", \"yil\": 2026}\naraba[\"renk\"] = \"Oltu Siyahı\"\nprint(araba[\"renk\"])\n```",
      "options": [
        {
          "text": "KeyError",
          "isCorrect": false
        },
        {
          "text": "Oltu Siyahı",
          "isCorrect": true
        },
        {
          "text": "None",
          "isCorrect": false
        },
        {
          "text": "SyntaxError",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Python sözlüklerinde var olmayan bir anahtara değer atandığında o anahtar otomatik olarak sözlüğe eklenir ve değeri atanır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Demetler (Tuples)' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Normal parantez `()`, değiştirilemez (immutable) ve güvenli veri saklama.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Demetler (Tuples)' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Demet (Tuple) ile Sözlük (Dict) Arasındaki Fark' kapsamında ele alınan <strong>Demet (Tuple - ())</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bir kez tanımlandıktan sonra elemanı eklenemez, silinemez veya değiştirilemez (Örn: GPS koordinatları: `(41.0082, 28.9784)`).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Demet (Tuple - ()), bilişim sistemlerinde Bir kez tanımlandıktan sonra elemanı eklenemez, silinemez ve... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Sözlük (Dictionary - {})</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İndeks numarası yerine anlamlı anahtarlarla (Key) erişim sağlar (Örn: `ogrenci['ad']`).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Sözlük (Dictionary - {}), İndeks numarası yerine anlamlı anahtarlarla (Key) erişim sağlar (Örn: `ogrenci['ad']`). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Python Sözlük Uygulaması' bölümünde vurgulanan <strong>Anahtar Kuralları</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Anahtarlar benzersiz (unique) ve değiştirilemez (s... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Anahtar Kuralları asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'İngilizce-Türkçe Bilişim Sözlüğü Geliştirme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Temel Sözlüğü Kur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Sözlüklerde elemanlar sıralıdır ve 0. eleman diye çağrılabilir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Sözlükler indeksle değil anahtar (Key) ismiyle çağrılır (`sozluk[0]` değil `sozluk['ad']`).",
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
      "question": "Günün Altın Kuralı olan <strong>'Olmayan Anahtara Doğrudan Erişmeyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `sozluk['olmayan']` yazmak `KeyError` fırlatır; daima `sozluk.get('olmayan')` kullanın.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Olmayan Anahtara Doğrudan Erişmeyin prensibi, `sozluk['olmayan']` yazmak `KeyError` fırlatır; daima `sozluk.get('olmayan')` kullanın. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'İlişkisel Veri Modelleme & Sözlük Mimarisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Veri Yapıları 2: Demetler & Sözlükler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Veri Yapıları 2: Demetler & Sözlükler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "33": [
    {
      "question": "Python'da boş bir KÜME (Set) oluşturmak için aşağıdaki tanımlamalardan hangisi kullanılmalıdır?",
      "options": [
        {
          "text": "k = {}",
          "isCorrect": false
        },
        {
          "text": "k = set()",
          "isCorrect": true
        },
        {
          "text": "k = []",
          "isCorrect": false
        },
        {
          "text": "k = ()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Python'da `{}` süslü parantezi varsayılan olarak boş Sözlük (dict) üretir. Boş bir küme oluşturmak için `set()` fonksiyonu kullanılmalıdır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Küme (Set) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sırasız, indekslenemez ve en önemlisi asla mükerrer (tekrar eden) eleman barındırmayan koleksiyon.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Küme (Set) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Kümelerin Sihirli Gücü: Benzersizlik' kapsamında ele alınan <strong>Benzersiz Elemanlar</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) `{1, 2, 2, 3}` kümesi otomatik olarak `{1, 2, 3}` haline gelir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Benzersiz Elemanlar, bilişim sistemlerinde `{1, 2, 2, 3}` kümesi otomatik olarak `{1, 2, 3}` haline gel... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kesişim (Intersection - &)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) İki kümede ortak olan elemanları bulur (Örn: Hem Python hem C++ bilenler).",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kesişim (Intersection - &), İki kümede ortak olan elemanları bulur (Örn: Hem Python hem C++ bilenler). açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'4 Büyük Veri Yapısının Karşılaştırma Matrisi' bölümünde vurgulanan <strong>İndeks Yoktur</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kümelerde `kume[0]` yazamazsınız; çünkü elemanları... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> İndeks Yoktur asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Öğrenci Kulüpleri Kesişim ve Fark Analiz Programı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. İki Küme Oluştur' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Kümeler indeksleme destekler.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Kümelerde elemanların sırası yoktur; bu nedenle `kume[0]` IndexError verir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Boş Küme Tanımlama Tuzağı'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `kume = {}` boş SÖZLÜK açar! Boş küme için mutlaka `kume = set()` yazmalısınız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Boş Küme Tanımlama Tuzağı prensibi, `kume = {}` boş SÖZLÜK açar! Boş küme için mutlaka `kume = set()` yazmalısınız. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Veri Mimarisi Seçimi & Küme İşlemleri'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Veri Yapıları 3: Kümeler & Kıyaslama becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Veri Yapıları 3: Kümeler & Kıyaslama becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "34": [
    {
      "question": "Python'da `tarih = \"2026-10-29\"` metnine `parcalar = tarih.split(\"-\")` uygulandığında `parcalar[1]` elemanı ne olur?",
      "options": [
        {
          "text": "\"2026\"",
          "isCorrect": false
        },
        {
          "text": "\"10\"",
          "isCorrect": true
        },
        {
          "text": "\"29\"",
          "isCorrect": false
        },
        {
          "text": "10 (int)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `split(\"-\")` metodu tire işaretlerinden bölerek `[\"2026\", \"10\", \"29\"]` listesini üretir. 1. indeksteki eleman metin olarak `\"10\"`dur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'String'lerin Dizi Doğası' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Her metin aslında değiştirilemez bir karakter dizisidir (`metin[0]`, `metin[::-1]`).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'String'lerin Dizi Doğası' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'En Güçlü 6 Metin Manipülasyon Metodu' kapsamında ele alınan <strong>split(ayırıcı)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Metni boşluklardan veya virgülden bölüp liste yapar: `'ali,veli,can'.split(',')`.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> split(ayırıcı), bilişim sistemlerinde Metni boşluklardan veya virgülden bölüp liste yapar: `'ali,v... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>join(liste)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bir listedeki kelimeleri aralarına karakter koyarak tek metin yapar: `'-'.join(['2026', '05', '09'])`.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> join(liste), Bir listedeki kelimeleri aralarına karakter koyarak tek metin yapar: `'-'.join(['2026', '05', '09'])`. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Doğal Dil İşleme Sezgisi: Kelime Sayacı' bölümünde vurgulanan <strong>startswith / endswith</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Metnin neyle başlayıp bittiğini sorgular (`.endswi... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> startswith / endswith asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Otomatik E-Posta Doğrulayıcı ve İsim Formatlayıcı'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Girdileri Al' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"`metin.upper()` yazıldığında `metin` değişkeni kalıcı olarak büyük harfe dönüşür.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Metinler değiştirilemez olduğu için `metin = metin.upper()` şeklinde değişkene geri atamalısınız!",
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
      "question": "Günün Altın Kuralı olan <strong>'Kullanıcı Girdisini Daima Temizleyin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Veritabanına kaydetmeden önce mutlaka `.strip()` ile sağdaki soldaki görünmez boşlukları silin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kullanıcı Girdisini Daima Temizleyin prensibi, Veritabanına kaydetmeden önce mutlaka `.strip()` ile sağdaki soldaki görünmez boşlukları silin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Metin Madenciliği & Karakter Manipülasyonu'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Metin (String) İşleme & Metotları becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Metin (String) İşleme & Metotları becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "35": [
    {
      "question": "Aşağıdaki fonksiyon tanımında `selamla(\"Ece\")` çağrısı yapıldığında ekranda ne görünür?\n```python\ndef selamla(ad, mesaj=\"Günaydın\"):\n    print(f\"{mesaj}, {ad}!\")\n```",
      "options": [
        {
          "text": "Ece, Günaydın!",
          "isCorrect": false
        },
        {
          "text": "Günaydın, Ece!",
          "isCorrect": true
        },
        {
          "text": "TypeError (Eksik parametre)",
          "isCorrect": false
        },
        {
          "text": "Hiçbir şey yazmaz",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `ad = \"Ece\"` atanır. İkinci argüman verilmediği için varsayılan `mesaj = \"Günaydın\"` kullanılır. Çıktı: `Günaydın, Ece!`.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Fonksiyon Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Belirli bir görevi yerine getiren, çağrılmadıkça çalışmayan bağımsız kod bloğu.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Fonksiyon Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'DRY Prensibi: Kendini Tekrar Etme! (Don't Repeat Yourself)' kapsamında ele alınan <strong>1. Kodun Yeniden Kullanımı</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bir kez yaz, bin kez çağır; saatlerce kod tekrarı yapmaktan kurtarır.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Kodun Yeniden Kullanımı, bilişim sistemlerinde Bir kez yaz, bin kez çağır; saatlerce kod tekrarı yapmaktan ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Kolay Bakım ve Güncelleme</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Bir hesaplama kuralı değiştiğinde 50 yeri değil, sadece o fonksiyonu değiştirmek yeterlidir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Kolay Bakım ve Güncelleme, Bir hesaplama kuralı değiştiğinde 50 yeri değil, sadece o fonksiyonu değiştirmek yeterlidir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Fonksiyon Tanımlama ve Çağırma Anatomisi' bölümünde vurgulanan <strong>Docstring</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Fonksiyonun hemen altına `\"\"\"açıklama\"\"\"` yazarak ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Docstring asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Geometrik Şekil Alan ve Çevre Hesaplama Motoru'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Dikdörtgen Fonksiyonu' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Bir fonksiyon tanımlandığında hemen otomatik olarak çalışır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Fonksiyon sadece bir tanımdır; programda ismiyle çağrılmadığı sürece asla çalışmaz.",
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
      "question": "Günün Altın Kuralı olan <strong>'Tanımlamadan Önce Çağıramazsınız'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Fonksiyon çağrısı kod dosyasında `def` bloğunun ALTINDA yer almalıdır; üstünde çağrılırsa `NameError` verir.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Tanımlamadan Önce Çağıramazsınız prensibi, Fonksiyon çağrısı kod dosyasında `def` bloğunun ALTINDA yer almalıdır; üstünde çağrılırsa `NameError` verir. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Modüler Programlama & Fonksiyonel Tasarım'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Fonksiyonlar: def & Parametreler becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Fonksiyonlar: def & Parametreler becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "36": [
    {
      "question": "Aşağıdaki kod çalıştırıldığında ekrana ne yazdırılır?\n```python\ndef topla(a, b):\n    return a + b\n    print(\"Hesaplandı\")\n\nsonuc = topla(3, 4)\nprint(sonuc)\n```",
      "options": [
        {
          "text": "Hesaplandı \\n 7",
          "isCorrect": false
        },
        {
          "text": "7",
          "isCorrect": true
        },
        {
          "text": "None",
          "isCorrect": false
        },
        {
          "text": "SyntaxError",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `return a + b` satırı 7 değerini döndürür ve fonksiyonu o anda bitirir. Altındaki `print(\"Hesaplandı\")` satırına sıra hiç gelmez. Ekrana sadece 7 basılır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'print() vs return Farkı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Sadece ekrana göstermek (print) ile sonucu bir sonraki işleme teslim etmek (return).",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'print() vs return Farkı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'print() ile return Arasındaki Hayati Fark' kapsamında ele alınan <strong>print() Sadece Gösterir</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Ekrana piksel çizer; geriye hiçbir değer bırakmaz (`None`). Sonucu başka hesaplamada kullanamazsınız.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> print() Sadece Gösterir, bilişim sistemlerinde Ekrana piksel çizer; geriye hiçbir değer bırakmaz (`None`). ... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>return Değeri Teslim Eder</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Hesaplanan sonucu çağıran yere geri verir: `sonuc = topla(5, 10)` yazıp sonucu başka yerlere gönderebilirsiniz.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> return Değeri Teslim Eder, Hesaplanan sonucu çağıran yere geri verir: `sonuc = topla(5, 10)` yazıp sonucu başka yerlere gönderebilirsiniz. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Yerel (Local) ve Küresel (Global) Kapsam' bölümünde vurgulanan <strong>global</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Fonksiyon içinden dışarıdaki değişkeni değiştirmek... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> global asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Bileşik Faiz ve Finansal Hesaplama Fonksiyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Fonksiyonu Yaz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Her fonksiyon mutlaka bir `return` içermek zorundadır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Zorunlu değildir; `return` içermeyen fonksiyonlar işini bitirince otomatik olarak `None` döndürür.",
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
      "question": "Günün Altın Kuralı olan <strong>'return'den Sonra Kod Yazmayın (Unreachable Code)'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `return` çalıştığı an fonksiyondan çıkılır; altındaki satırlar ölü koddur, hiç çalışmaz.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> return'den Sonra Kod Yazmayın (Unreachable Code) prensibi, `return` çalıştığı an fonksiyondan çıkılır; altındaki satırlar ölü koddur, hiç çalışmaz. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Fonksiyonel Veri Akışı & Kapsam (Scope) Yönetimi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: return İfadesi & Değişken Kapsamı becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda return İfadesi & Değişken Kapsamı becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "37": [
    {
      "question": "Python'da `math` kütüphanesini kullanarak 64 sayısının karekökünü hesaplamak için hangi kod satırı kullanılır?",
      "options": [
        {
          "text": "math.sqr(64)",
          "isCorrect": false
        },
        {
          "text": "math.sqrt(64)",
          "isCorrect": true
        },
        {
          "text": "math.root(64)",
          "isCorrect": false
        },
        {
          "text": "math.kok(64)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `math.sqrt()` (square root) fonksiyonu verilen pozitif sayının karekökünü (64 için 8.0) hesaplar.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Modül (Module) ve Kütüphane Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Önceden yazılmış fonksiyon ve araçların paketlenmiş hali.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Modül (Module) ve Kütüphane Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Python Standart Kütüphanesinin Zenginliği' kapsamında ele alınan <strong>math Modülü</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) İleri matematik: Trigonometri, logaritma, faktöriyel (`math.factorial`), pi sayısı (`math.pi`).",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> math Modülü, bilişim sistemlerinde İleri matematik: Trigonometri, logaritma, faktöriyel (`math.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>random Modülü</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Rastgele seçim (`choice`), karıştırma (`shuffle`), zar ve sayı üretimi.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> random Modülü, Rastgele seçim (`choice`), karıştırma (`shuffle`), zar ve sayı üretimi. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'turtle ile Algoritmik Geometri Sanatı' bölümünde vurgulanan <strong>from math import *</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Yıldızla tüm modülü içeri almak isim çakışmalarına... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> from math import * asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Geri Sayım Sayacı ve turtle Yıldız Çizimi'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Geri Sayım Yap' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Python kütüphaneleri paralıdır.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Standart kütüphaneler ve PyPI üzerindeki 400.000'den fazla paket tamamen açık kaynak ve ücretsizdir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Kendi Dosyanıza Modül Adı Vermeyin!'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Dosyanıza ASLA `random.py`, `math.py` veya `turtle.py` adı vermeyin; Python kendi modülü yerine sizin dosyanızı yüklemeye çalışıp çöker!",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Kendi Dosyanıza Modül Adı Vermeyin! prensibi, Dosyanıza ASLA `random.py`, `math.py` veya `turtle.py` adı vermeyin; Python kendi modülü yerine sizin dosyanızı yüklemeye çalışıp çöker! gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Modüler Entegrasyon & Algoritmik Görselleştirme'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Python Standart Modülleri & turtle becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Python Standart Modülleri & turtle becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "38": [
    {
      "question": "Python'da `try-except` bloğunda bir hata oluşsa da oluşmasa da HER HALÜKARDA en son çalışan blok hangisidir?",
      "options": [
        {
          "text": "else",
          "isCorrect": false
        },
        {
          "text": "catch",
          "isCorrect": false
        },
        {
          "text": "finally",
          "isCorrect": true
        },
        {
          "text": "stop",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. `finally` bloğu, try içinde hata çıksa da çıkmasa da en son mutlaka çalışan temizleme ve kapanış bloğudur.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Hata (Exception) Nedir?' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Kodun çalışması sırasında beklenmeyen durumlarda fırlatılan alarm.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Hata (Exception) Nedir?' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'try-except Blok Mekanizması' kapsamında ele alınan <strong>try Bloğu</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Hata çıkma ihtimali olan tehlikeli kodlar bu bloğun içine konulur.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> try Bloğu, bilişim sistemlerinde Hata çıkma ihtimali olan tehlikeli kodlar bu bloğun içine ko... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>except HataTuru</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Beklenen hata çıktığında devreye girer ve kullanıcıya kibar bir uyarı gösterir.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> except HataTuru, Beklenen hata çıktığında devreye girer ve kullanıcıya kibar bir uyarı gösterir. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Kusursuz Hesap Makinesi Örneği' bölümünde vurgulanan <strong>Çıplak except</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Sadece `except:` yazmak hatanın türünü gizlediği i... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Çıplak except asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Kullanıcıyı Zorlayan Dayanıklı Girdi Fonksiyonu'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Fonksiyonu Başlat' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"try-except kodun içindeki mantık hatalarını (örneğin yanlış formülü) düzeltir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) try-except mantık hatalarını düzeltmez; sadece programın kilitlenip çökmesini önler.",
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
      "question": "Günün Altın Kuralı olan <strong>'Hataları Sessizce Yutmayın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `except: pass` yazmak programdaki tüm hataları gizler ve nerede hata olduğunu bulmayı imkansız kılar.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Hataları Sessizce Yutmayın prensibi, `except: pass` yazmak programdaki tüm hataları gizler ve nerede hata olduğunu bulmayı imkansız kılar. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Dayanıklı (Robust) Kodlama & Hata Toleransı'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: İstisna Yönetimi: try & except becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda İstisna Yönetimi: try & except becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "39": [
    {
      "question": "Aşağıdaki kod parçasında `islem([1, 2, 3, 4])` çağrıldığında ekrana basılan değer nedir?\n```python\ndef islem(liste):\n    return len([x for x in liste if x > 2])\nprint(islem([1, 2, 3, 4]))\n```",
      "options": [
        {
          "text": "4",
          "isCorrect": false
        },
        {
          "text": "2",
          "isCorrect": true
        },
        {
          "text": "[3, 4]",
          "isCorrect": false
        },
        {
          "text": "7",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Listede 2'den büyük olan elemanlar 3 ve 4'tür (2 tane). `len()` bu yeni listenin eleman sayısını yani 2'yi döndürür.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında '1. Dönem Özeti' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Donanım, işletim sistemleri, ağlar, siber güvenlik, kriptoloji ve algoritmalar.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '1. Dönem Özeti' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'9. Sınıf Bilgisayar Bilimi Tam Müfredat Haritası' kapsamında ele alınan <strong>1. Sistem & Donanım</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Von Neumann mimarisi, CPU döngüsü, RAM/SSD hiyerarşisi.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Sistem & Donanım, bilişim sistemlerinde Von Neumann mimarisi, CPU döngüsü, RAM/SSD hiyerarşisi.... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Ağlar & Güvenlik</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) OSI modeli, IP, DNS, kriptoloji, siber hijyen ve KVKK.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Ağlar & Güvenlik, OSI modeli, IP, DNS, kriptoloji, siber hijyen ve KVKK. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Büyük Yıl Sonu Soru Çözümü' bölümünde vurgulanan <strong>Tam Puan</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kodun her adımını açıklayan kısa yorum satırları e... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Tam Puan asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Akıllı Tahtada Kahoot / Quizizz Bilgi Yarışması'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Yarışmaya Bağlan' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yıl sonu sınavı sadece son ünitelerden çıkar.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) MEB ortak sınavları tüm yılın sarmal (kümülatif) kazanımlarını dengeli olarak ölçer.",
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
      "question": "Günün Altın Kuralı olan <strong>'Soruları Dikkatli Okuyun'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) `return` mü isteniyor yoksa `print` mi, fonksiyon mu yazılacak yoksa sadece döngü mü, dikkat edin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Soruları Dikkatli Okuyun prensibi, `return` mü isteniyor yoksa `print` mi, fonksiyon mu yazılacak yoksa sadece döngü mü, dikkat edin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bütünleşik Bilgisayar Bilimi Yetkinliği'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Yıl Sonu Büyük Sınav Tekrarı becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Yıl Sonu Büyük Sınav Tekrarı becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "40": [
    {
      "question": "Metin tabanlı bir oyunda `if \"Kalkan\" in oyuncu[\"envanter\"]:` ifadesinin görevi aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "Envantere Kalkan ekler",
          "isCorrect": false
        },
        {
          "text": "Envanterdeki Kalkan'ı siler",
          "isCorrect": false
        },
        {
          "text": "Oyuncunun envanter listesinde 'Kalkan' olup olmadığını sorgular",
          "isCorrect": true
        },
        {
          "text": "Envanteri alfabetik sıralar",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. `in` üyelik operatörü, aranan elemanın listede mevcut olup olmadığını boolean (`True`/`False`) olarak denetler.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Oyun Mimarisi Tasarımı' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Hikaye akışı, harita odaları ve durum (State) yönetimi.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Oyun Mimarisi Tasarımı' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'Bir Oyun Döngüsünün (Game Loop) 3 Aşaması' kapsamında ele alınan <strong>1. Girdi Alma (Input)</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Kullanıcının tercihini (`1: Kuzeye git`, `2: Sandığı aç`) okuma.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 1. Girdi Alma (Input), bilişim sistemlerinde Kullanıcının tercihini (`1: Kuzeye git`, `2: Sandığı aç`) ok... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>2. Durum Güncelleme (Update)</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Karakterin canını azaltma, envantere kılıç ekleme, canavarın hamlesi.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> 2. Durum Güncelleme (Update), Karakterin canını azaltma, envantere kılıç ekleme, canavarın hamlesi. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'Proje Çekirdek Kodu: Zindan Macerası' bölümünde vurgulanan <strong>Geliştirme Fikri</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Canavar savaşlarına zar atma (`random`) ve gecikme... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Geliştirme Fikri asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Metin Tabanlı Macera Oyununu Tamamlama ve Özelleştirme'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Hikaye Ağacını Çiz' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Oyun yapmak için mutlaka karmaşık 3D grafik motorları gerekir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Oyunun kalbini kurallar, senaryo ve algoritmik mekanikler oluşturur; metin oyunları en güçlü zihinsel egzersizdir.",
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
      "question": "Günün Altın Kuralı olan <strong>'Adım Adım Geliştirin'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Önce oyunun çalışan en basit halini (MVP) yapın; sonra eşyaları ve canavarları ekleyin.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Adım Adım Geliştirin prensibi, Önce oyunun çalışan en basit halini (MVP) yapın; sonra eşyaları ve canavarları ekleyin. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Bütünleşik Yazılım Geliştirme & Oyun Mimarisi'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Büyük Proje: Metin Tabanlı Oyun becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Büyük Proje: Metin Tabanlı Oyun becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
      "difficulty": "Zor",
      "isHard": true
    }
  ],
  "41": [
    {
      "question": "9. Sınıf Bilgisayar Bilimi (Kur 1) dersi boyunca edindiğimiz en değerli kazanım aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "Sadece sınavdan yüksek not almak",
          "isCorrect": false
        },
        {
          "text": "Teknolojiyi sadece tüketen değil, mantığını kavrayıp kodla üretebilen analitik bir zihin kazanmak",
          "isCorrect": true
        },
        {
          "text": "Bilgisayar parçalarının adını ezberlemek",
          "isCorrect": false
        },
        {
          "text": "Komut ezberlemek",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Tebrikler! Bilgisayar Bilimi dersinin nihai hedefi; düşünen, sorgulayan, problem çözen ve geleceğin dijital dünyasını üreten bilinçli bireyler yetiştirmektir.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "Bu haftaki ders akışında 'Bilişim Şenliği ve Proje Sergisi' adımında hangi temel süreç üzerinde durulmuştur?",
      "options": [
        {
          "text": "A) Rastgele tuşlara basarak deneme yapmak",
          "isCorrect": false
        },
        {
          "text": "B) Yıl boyunca üretilen en iyi kodların ve oyunların sunumu.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bilişim Şenliği ve Proje Sergisi' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
      "difficulty": "Kolay",
      "isHard": false
    },
    {
      "question": "'41 Haftalık Büyük Başarı Hikayesi' kapsamında ele alınan <strong>Eylül 2026</strong> kavramının en doğru açıklaması hangisidir?",
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
          "text": "C) Bilgisayarın donanım parçalarını ve sıfır-birlerin mantığını öğrenerek başladık.",
          "isCorrect": true
        },
        {
          "text": "D) İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Eylül 2026, bilişim sistemlerinde Bilgisayarın donanım parçalarını ve sıfır-birlerin mantığını... olarak tanımlanır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bilişim uygulamalarında <strong>Kasım - Ocak</strong> kavramı neden hayati bir öneme sahiptir?",
      "options": [
        {
          "text": "A) Siber güvenliği, kriptolojiyi, akış şemalarını ve Python'un ilk komutlarını fethettik.",
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
      "explanation": "🎉 <strong>Doğru Cevap: A!</strong> Kasım - Ocak, Siber güvenliği, kriptolojiyi, akış şemalarını ve Python'un ilk komutlarını fethettik. açısından temel taşıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "'10. Sınıfta Bizi Neler Bekliyor? (Kur 2 Fragmanı)' bölümünde vurgulanan <strong>Yolunuz Açık Olsun</strong> için hangisi söylenemez?",
      "options": [
        {
          "text": "A) Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
          "isCorrect": false
        },
        {
          "text": "B) Temelde Kodlamayı hayatınızın bir parçası yapın; geleceği ... amacına hizmet eder.",
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
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> Yolunuz Açık Olsun asla rastgele değildir; kurallı, sistematik ve planlıdır.",
      "difficulty": "Orta",
      "isHard": false
    },
    {
      "question": "Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'Yıl Sonu Bilişim Şenliği ve Sertifika Töreni'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?",
      "options": [
        {
          "text": "A) Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
          "isCorrect": false
        },
        {
          "text": "B) '1. Projeni Sun' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
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
      "question": "Bilişim dünyasında sıkça karşılaşılan <em>\"Yazın bilgisayarla hiç ilgilenmeyip her şeyi unutmak normaldir.\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?",
      "options": [
        {
          "text": "A) Haftada sadece 1 saat kod yazmak bile tüm yıl kazandığınız yetenekleri korumanızı sağlar.",
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
      "question": "Günün Altın Kuralı olan <strong>'GitHub Hesabı Açın'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?",
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
          "text": "C) Yazdığınız kodları github.com üzerinde toplayarak lise stajları ve üniversite için güçlü bir CV oluşturun.",
          "isCorrect": true
        },
        {
          "text": "D) İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> GitHub Hesabı Açın prensibi, Yazdığınız kodları github.com üzerinde toplayarak lise stajları ve üniversite için güçlü bir CV oluşturun. gerektirir.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "Bu haftaki dersin genel özeti ve hedeflenen <strong>'Teknoloji Liderliği & Sürekli Mesleki Gelişim'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?",
      "options": [
        {
          "text": "A) Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
          "isCorrect": false
        },
        {
          "text": "B) Kilit Çıkarım: Yıl Sonu Bilişim Şenliği & Portfolyo becerisini günlük hayata aktarmak",
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
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Bu haftanın kilit çıkarımı 'Kilit Çıkarım' doğrultusunda Yıl Sonu Bilişim Şenliği & Portfolyo becerisini günlük hayata aktarmak olmuştur.",
      "difficulty": "İleri",
      "isHard": false
    },
    {
      "question": "🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br><pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>metin = 'BILGISAYAR'\nparca = metin[1:8:2]\nsonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\nprint(sonuc)</pre>",
      "options": [
        {
          "text": "A) iGsY",
          "isCorrect": true
        },
        {
          "text": "B) IgSy",
          "isCorrect": false
        },
        {
          "text": "C) bLgAy",
          "isCorrect": false
        },
        {
          "text": "D) IGSY",
          "isCorrect": false
        }
      ],
      "explanation": "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!",
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
