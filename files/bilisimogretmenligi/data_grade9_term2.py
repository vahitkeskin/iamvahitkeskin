#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Weeks 26 to 41 for 9. Sınıf Bilgisayar Bilimi (Kur 1)
MEB 2026-2027 Maarif Modeli
Öğretmen: Vahit Keskin
"""

WEEKS_26_41 = [
  # Hafta 26
  {
    "week": 26,
    "date": "08 - 14 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Python ile Karar ve Döngü Yapıları",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "Ara Tatil: Kodlama & Hata Ayıklama",
    "subtitle": "Algoritmik Meydan Okumalar, Hata Ayıklama (Debugging) ve Kod İyileştirme",
    "outcomeCode": "BB.9.4.5",
    "targetSkill": "Hata Ayıklama (Debugging) & Kod Refaktoring",
    "curiosityQuestion": "Tarihteki ilk bilgisayar hatası (bug) gerçek bir güveden kaynaklanmıştı; günümüzde kodlarımızdaki 'böcekleri' nasıl avlarız?",
    "roadmap": [
      { "title": "Hata Türleri", "desc": "Sözdizimi (Syntax), Çalışma Zamanı (Runtime) ve Mantıksal (Semantic) Hatalar." },
      { "title": "Hata Ayıklama Teknikleri", "desc": "`print()` ile değişken izleme ve adım adım çalıştırma." },
      { "title": "Algoritmik Meydan Okumalar", "desc": "Palindrom kelime bulma, asal sayı testi ve Fibonacci dizisi." },
      { "title": "Temiz Kod Düzenlemesi", "desc": "Gereksiz kodları budama ve PEP 8 standartlarına uyarlama." }
    ],
    "section1": {
      "title": "Üç Temel Hata Türü",
      "subtitle": "Python'un yakaladığı ve yakalayamadığı hatalar",
      "cards": [
        {
          "title": "Hata Sınıflandırması",
          "icon": "🐛",
          "desc": "Programcının karşılaştığı hata kategorileri.",
          "items": [
            { "bold": "1. Sözdizimi Hatası (SyntaxError)", "text": "İki nokta unutulması, parantez kapanmaması; program hiç başlamadan durur." },
            { "bold": "2. Çalışma Zamanı Hatası (Runtime)", "text": "Sıfıra bölme (`ZeroDivisionError`), tip uyuşmazlığı (`TypeError`); program çalışırken çöker." },
            { "bold": "3. Mantıksal Hata (Logic Error)", "text": "En tehlikelisidir! Program çökmeksizin çalışır ama yanlış sonuç üretir (Örn: `+` yerine `-` yazılması)." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Adım Adım Hata Ayıklama Örneği",
      "subtitle": "Masa başı izleme ile mantık hatasını yakalama",
      "codeSnippet": "# Hatalı Kod vs Düzeltilmiş Kod\n# HATA: 1'den 5'e kadar sayıların çarpımını hesaplama\ncarpim = 0  # HATA! 0 ile çarpmak sonucu hep 0 yapar!\nfor i in range(1, 6):\n    carpim *= i\nprint(f\"Hatalı: {carpim}\") # 0\n\n# DÜZELTME:\ncarpim = 1  # Çarpmanın etkisiz elemanı 1'dir\nfor i in range(1, 6):\n    carpim *= i\nprint(f\"Doğru: {carpim}\")  # 120 (5!)",
      "codeTitle": "hata_ayiklama.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Dedektiflik", "title": "print() ile İnceleme", "desc": "Döngü içine `print(f'Adım {i}: carpim={carpim}')` yazarak değişkenin her turdaki değişimini gözlerinizle görün.", "items": [{ "bold": "Breakpoint", "text": "Gelişmiş editörlerde kodu durdurup bellek durumunu inceleme noktasıdır." }] }
      ]
    },
    "workshop": {
      "title": "Bozuk Kodları Tamir Etme Atölyesi",
      "subtitle": "İçinde 4 farklı hata barındıran bir Python programını dedektif gibi inceleyip düzeltme",
      "steps": [
        { "title": "1. Hata Raporunu Oku", "desc": "Terminaldeki Traceback çıktısını ve satır numarasını inceleyin." },
        { "title": "2. Syntax Hatalarını Çöz", "desc": "Eksik parantezleri ve `:` işaretlerini tamamlayın." },
        { "title": "3. Tip Hatalarını Gider", "desc": "`str` ile `int` toplamaya çalışan satıra `int()` dönüşümü ekleyin." },
        { "title": "4. Mantık Hatasını Düzelt", "desc": "Ortalama hesabında parantez eksikliğini (`a + b / 2` -> `(a + b) / 2`) giderin." }
      ],
      "criteria": [
        "Hata mesajlarını doğru okuyup satır numarasını tespit edebilme",
        "Mantıksal hataların nedenini açıklayabilme",
        "Çalışan kodu temiz ve standartlara uygun teslim etme"
      ]
    },
    "tips": {
      "safetyTitle": "Hata Ayıklarken Sakin Kalma Kuralları",
      "safetyRules": [
        { "bold": "Hata Mesajından Korkmayın", "text": "Kırmızı hata mesajı ceza değil, Python'un size tam olarak nereye bakmanız gerektiğini söyleyen yardım çağrısıdır." },
        { "bold": "Tek Seferde Tek Değişiklik Yapın", "text": "Aynı anda 5 yeri değiştirmeyin; tek bir yeri düzeltip test edin." },
        { "bold": "Kodu Sesli Okuyun (Rubber Duck)", "text": "Kodu masanızdaki bir nesneye kelime kelime anlatmak mantık hatalarını anında fark ettirir." }
      ],
      "myths": [
        { "wrong": "Usta yazılımcılar hiç hata yapmaz ve kodları ilk seferde kusursuz çalışır.", "correct": "Kıdemli yazılımcıların mesaisinin %70'i hata ayıklamak ve sistemleri test etmekle geçer." },
        { "wrong": "Hata vermeyen kod kesinlikle doğru çalışıyordur.", "correct": "Mantıksal hatalar hiçbir hata mesajı vermez; sonucu dikkatle doğrulamak gerekir." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında programın çökmesine (ZeroDivisionError) sebep olan durum hangi hata kategorisine girer?\n```python\npuan = 100\nkisi_sayisi = 0\nprint(puan / kisi_sayisi)\n```",
      "options": [
        { "text": "A) Sözdizimi Hatası (SyntaxError)", "isCorrect": False },
        { "text": "B) Çalışma Zamanı Hatası (Runtime Error)", "isCorrect": True },
        { "text": "C) Mantıksal Hata (Logic Error)", "isCorrect": False },
        { "text": "D) Donanım Hatası", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Kural gereği sözdiziminde hata yoktur; ancak program çalışırken sıfıra bölme imkansız olduğu için 'ZeroDivisionError' çalışma zamanı (Runtime) hatası fırlatır."
    },
    "summary": {
      "keyPoints": [
        "Hata ayıklama programcılık becerisinin yarısıdır.",
        "Syntax hatalarını editör yakalar, mantık hatalarını insan zihni çözer.",
        "Gelecek hafta 2. Dönem 1. Yazılı Sınavı için büyük tekrar yapacağız."
      ],
      "nextWeek": "2. Dönem 1. Yazılı Sınavı Tekrarı ve Kod Analizleri",
      "homework": "Kendinize ait 3 farklı hata türünü içeren 3 mini kod dosyası hazırlayıp çözümleriyle birlikte not alınız."
    }
  },
  # Hafta 27
  {
    "week": 27,
    "date": "15 - 21 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Python ile Karar ve Döngü Yapıları",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "2. Dönem 1. Sınav Tekrarı & Kod Analizi",
    "subtitle": "Karşılaştırma Operatörleri, if-elif-else Blokları, for Döngüsü ve range() Soru Çözümleri",
    "outcomeCode": "BB.9.4.6",
    "targetSkill": "Algoritma Analizi & Kod Çıktısı Çözümleme",
    "curiosityQuestion": "Bir sınav sorusunda iç içe geçmiş bir döngü ve koşul gördüğümüzde adım adım kafamız karışmadan nasıl çözeriz?",
    "roadmap": [
      { "title": "Operatör Öncelikleri", "desc": "Parantez, karşılaştırma (`==`, `!=`) ve mantıksal (`and`, `or`) işlem adımları." },
      { "title": "if-elif-else Akış Analizi", "desc": "Doğru basamağı bulup alttakileri atlama kuralları." },
      { "title": "for Döngüsü ve range() Takibi", "desc": "Döngü sayacının her adımdaki değerini tabloya dökme." },
      { "title": "Örnek MEB Senaryo Soruları", "desc": "Açık uçlu lise bilişim yazılı sınavı provası." }
    ],
    "section1": {
      "title": "Sınavda En Çok Karşılaşılan 3 Soru Tipi",
      "subtitle": "Kritik soru kalıpları ve garantili çözüm teknikleri",
      "cards": [
        {
          "title": "Sınav Formatı",
          "icon": "📝",
          "desc": "MEB Maarif Modeli süreç odaklı sınav standartları.",
          "items": [
            { "bold": "1. 'Kodun çıktısı nedir?'", "text": "Döngü ve koşul içeren 6 satırlık bir kodun ekrana ne basacağını adım adım yazma." },
            { "bold": "2. 'Kodu tamamlayınız'", "text": "İstenen görevi yerine getirmesi için boş bırakılan yerlere uygun operatörleri yerleştirme." },
            { "bold": "3. 'Hatalı satırı bulunuz'", "text": "Girintileme veya sözdizimi hatası içeren satırı gerekçesiyle açıklama." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Örnek Sınav Sorusu: Döngü ve Koşul Harmanı",
      "subtitle": "Çift sayıları toplayan döngünün izleme tablosu",
      "codeSnippet": "# Soru: Aşağıdaki kod ekrana ne yazdırır?\ntoplam = 0\nfor i in range(1, 10):\n    if i % 3 == 0:\n        toplam += i\nprint(\"Sonuç:\", toplam)\n\n# Çözüm İzleme Tablosu:\n# i = 3 -> 3 % 3 == 0 (Evet) -> toplam = 3\n# i = 6 -> 6 % 3 == 0 (Evet) -> toplam = 3 + 6 = 9\n# i = 9 -> 9 % 3 == 0 (Evet) -> toplam = 9 + 9 = 18\n# Çıktı: Sonuç: 18",
      "codeTitle": "sinav_cozum.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "İzleme Tablosu", "title": "Trace Table Mucizesi", "desc": "Sınav kağıdının kenarına `i` ve `toplam` sütunları açıp satır satır değerleri yazmak hata yapmanızı %100 engeller.", "items": [{ "bold": "range(1, 10)", "text": "10'un dahil olmadığını unutmamak en önemli püf noktasıdır." }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahtada Canlı Sınav Denemesi",
      "subtitle": "Öğrencilerin tahtaya kalkarak farklı zorluktaki 5 kodlama sorusunu çözmesi",
      "steps": [
        { "title": "1. Soruyu Yansıt", "desc": "Tahtaya for döngüsü ve if içeren bir kodlama sorusu açın." },
        { "title": "2. Değişkenleri Çıkar", "desc": "Döngü değişkeninin başlangıç, bitiş ve adım değerlerini altını çizerek belirleyin." },
        { "title": "3. Koşulu Denetle", "desc": "Hangi değerlerin `if` filtresinden geçebildiğini listeleyin." },
        { "title": "4. Çıktıyı Yaz", "desc": "Ekrana tam olarak nasıl yazılacağını tırnak ve boşluklara dikkat ederek belirtin." }
      ],
      "criteria": [
        "Soru kökündeki şartları eksiksiz dikkate alma",
        "İzleme tablosunu düzenli ve okunabilir oluşturma",
        "Zamanı verimli kullanarak sınav provasını tamamlama"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Esnasında Dikkat Edilecekler",
      "safetyRules": [
        { "bold": "Döngünün Kaç Kere Döndüğünü Sayın", "text": "`range(0, 5)` tam 5 kez döner; `range(1, 5)` ise 4 kez döner." },
        { "bold": "end=\" \" Parametresine Dikkat", "text": "`print()` içinde `end` yoksa her çıktı yeni satıra (alt alta) basılır." },
        { "bold": "Sakin ve Adım Adım İlerleyin", "text": "Kodu bir kerede kafanızdan çözmeye çalışmayın; her adımda değişkenin yeni değerini not edin." }
      ],
      "myths": [
        { "wrong": "Sınavda bir döngü 100 kere dönüyorsa 100 adımı da elle yazmalıyız.", "correct": "İlk 3-4 adımı yazıp örüntüyü (matematiksel kuralı) keşfetmek yeterlidir." },
        { "wrong": "`elif` her zaman çalışır.", "correct": "Kendinden önceki `if` doğruysa `elif`'e asla bakılmaz." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod çalıştırıldığında ekranda ne görünür?\n```python\ns = 0\nfor x in [2, 5, 8]:\n    if x > 4:\n        s += x\nprint(s)\n```",
      "options": [
        { "text": "A) 15", "isCorrect": False },
        { "text": "B) 13", "isCorrect": True },
        { "text": "C) 8", "isCorrect": False },
        { "text": "D) 5", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. x değerleri sırasıyla 2, 5, 8 olur. 2 > 4 yanlıştır (eklenmez). 5 > 4 doğrudur (s = 5). 8 > 4 doğrudur (s = 5 + 8 = 13). Sonuç 13 olur."
    },
    "summary": {
      "keyPoints": [
        "2. Dönem 1. sınavı karar ve döngü yapılarının sentezidir.",
        "İzleme tablosu yapmak karmaşık kodlarda hata payını sıfıra indirir.",
        "Haftaya koşula bağlı tekrarlar için `while` döngüsünü öğreneceğiz."
      ],
      "nextWeek": "`while` Döngüsü, Koşula Bağlı Tekrarlar ve Sonsuz Döngü Yönetimi",
      "homework": "Sınav öncesi son hazırlık olarak 10 adet for döngüsü sorusunun çıktısını kağıt üzerinde çözünüz."
    }
  },
  # Hafta 28
  {
    "week": 28,
    "date": "22 - 28 Mart",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: while Döngüsü ve İleri Veri Yapıları",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "while Döngüsü & Koşullu Tekrarlar",
    "subtitle": "Koşula Bağlı Tekrarlar, Sonsuz Döngüler (Infinite Loop), Bayrak (Flag) ve Sayaç Yönetimi",
    "outcomeCode": "BB.9.5.1",
    "targetSkill": "Dinamik Döngü Kontrolü & Süreç Yönetimi",
    "curiosityQuestion": "Kullanıcının doğru şifreyi kaçıncı denemede gireceğini önceden bilmediğimizde `for` yerine neden `while` kullanmak zorundayız?",
    "roadmap": [
      { "title": "for vs while Farkı", "desc": "Adım sayısı belliyse `for`, koşula bağlı belirsiz tekrarlar için `while`." },
      { "title": "while Sözdizimi", "desc": "`while kosul:` yapısı ve koşul True olduğu sürece dönen mekanizma." },
      { "title": "Sonsuz Döngü Tehlikesi", "desc": "Koşulun hiç False olmaması durumunda bilgisayarın kilitlenmesi." },
      { "title": "Bayrak (Flag) Değişkeni", "desc": "`oyun_devam = True` gibi kontrol değişkenleriyle döngüyü yönetme." }
    ],
    "section1": {
      "title": "for ile while Arasındaki Temel Fark",
      "subtitle": "Hangi döngüyü ne zaman seçmeliyiz?",
      "cards": [
        {
          "title": "Döngü Seçim Rehberi",
          "icon": "🔁",
          "desc": "Programcının doğru döngüyü seçme kriterleri.",
          "items": [
            { "bold": "for Döngüsü", "text": "Tekrar sayısı baştan bellidir (Örn: '10 kere dön', 'Listedeki 50 elemanı tara')." },
            { "bold": "while Döngüsü", "text": "Bir olay gerçekleşene kadar döner (Örn: 'Kullanıcı doğru şifreyi girene kadar sor', 'Oyun bitene kadar ekrana çiz')." },
            { "bold": "Sayaç Güncelleme", "text": "while içinde sayacı artırmazsanız (`sayac += 1`), koşul hep True kalır ve sonsuz döngüye girer!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Şifre Doğrulama ve Sayı Tahmin Algoritması",
      "subtitle": "Kullanıcı doğru bilene kadar dönen etkileşimli program",
      "codeSnippet": "# Doğru Parola Girilene Kadar Soran while Döngüsü\ngizli_sifre = \"python123\"\ngirilen = \"\"\ndeneme_sayisi = 0\n\nwhile girilen != gizli_sifre:\n    girilen = input(\"Şifrenizi giriniz: \")\n    deneme_sayisi += 1\n    if girilen != gizli_sifre:\n        print(\"Hatalı! Tekrar deneyin.\")\n\nprint(f\"Tebrikler! {deneme_sayisi}. denemede doğru bildiniz.\")",
      "codeTitle": "sifre_denetim.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Sonsuz Döngü", "title": "while True Kalıbı", "desc": "Bazen kasıtlı olarak `while True:` ile sonsuz döngü başlatılır ve içeriden belirli bir şartta `break` ile çıkılır.", "items": [{ "bold": "Ctrl + C", "text": "Terminalde sonsuz döngüye giren programı zorla durdurma kısayoludur." }] }
      ]
    },
    "workshop": {
      "title": "Sayı Tahmin Oyunu Geliştirme",
      "subtitle": "Bilgisayarın 1-100 arasında tuttuğu sayıyı 'Yukarı' / 'Aşağı' ipuçlarıyla while döngüsünde bulma",
      "steps": [
        { "title": "1. Rastgele Sayı Seç", "desc": "`hedef = random.randint(1, 100)` ile gizli sayıyı belirleyin." },
        { "title": "2. while Döngüsü Aç", "desc": "`tahmin = 0` ve `while tahmin != hedef:` koşulunu kurun." },
        { "title": "3. İpucu Ver", "desc": "Kullanıcının tahmini küçükse 'Daha Büyük!', büyükse 'Daha Küçük!' yazdırın." },
        { "title": "4. Tebrik ve Skor", "desc": "Doğru bildiğinde döngüden çıkıp kaç hamlede bildiğini kutlayın." }
      ],
      "criteria": [
        "while koşulunun doğru zamanda False olmasını sağlama",
        "Sayaç değişkenini her adımda 1 artırmayı unutmama",
        "Sonsuz döngü riskine karşı güvenli kod yazma"
      ]
    },
    "tips": {
      "safetyTitle": "while Döngüsünde Yaşam Kurtaran Kurallar",
      "safetyRules": [
        { "bold": "Sayacı Döngü İçinde Artırın", "text": "`i = 1` yazıp `while i <= 10:` dediyseniz döngünün sonuna mutlaka `i += 1` yazmalısınız." },
        { "bold": "Koşulu Döngüden Önce Tanımlayın", "text": "`while secim != 'q':` yazmadan önce yukarıda `secim = ''` değişkenini başlatmalısınız." },
        { "bold": "Bilgisayar Donarsa Ctrl+C", "text": "Program sonsuz döngüye girip yanıt vermezse terminalde CTRL+C tuşlarına basın." }
      ],
      "myths": [
        { "wrong": "Sonsuz döngü bilgisayar donanımını yakar.", "correct": "Donanım yanmaz ancak CPU %100 yük altına girip fanları hızlanır; işletim sistemi görevi sonlandırabilir." },
        { "wrong": "while döngüsü yerine her zaman for döngüsü yazılabilir.", "correct": "Kullanıcının kaçıncı denemede doğru yapacağı gibi belirsiz durumlarda for yetersiz kalır, while zorunludur." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında sayacın değeri kaç olduğunda döngü sonlanır?\n```python\nsayac = 1\nwhile sayac < 5:\n    sayac += 2\n```",
      "options": [
        { "text": "A) 3", "isCorrect": False },
        { "text": "B) 4", "isCorrect": False },
        { "text": "C) 5", "isCorrect": True },
        { "text": "D) Sonsuz döngüye girer", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. Başlangıçta sayac=1 (1<5 Doğru) -> sayac=3 olur. Sonra 3<5 (Doğru) -> sayac=5 olur. Sonra 5<5 (Yanlış) olur ve döngü sayac 5 iken sonlanır."
    },
    "summary": {
      "keyPoints": [
        "`while` döngüsü koşul Doğru olduğu sürece çalışmaya devam eder.",
        "Sayaç güncellenmezse program sonsuz döngüye hapsolur.",
        "Oyun döngüleri ve kullanıcı menüleri `while` mimarisiyle kurulur."
      ],
      "nextWeek": "Döngü Kontrol İfadeleri: `break` (Kırma), `continue` (Atlama) ve `pass`",
      "homework": "Kullanıcı 'çıkış' yazana kadar girdiği tüm kelimeleri alt alta yazdıran bir `while` programı yazınız."
    }
  },
  # Hafta 29
  {
    "week": 29,
    "date": "29 Mart - 04 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: while Döngüsü ve İleri Veri Yapıları",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Döngü Kontrolleri: break & continue",
    "subtitle": "break (Döngüyü Kırma), continue (Adımı Atlama), pass (Yer Tutucu) ve while-else",
    "outcomeCode": "BB.9.5.2",
    "targetSkill": "Döngü Akış Yönetimi & Erken Sonlandırma",
    "curiosityQuestion": "1000 elemanlı bir listede aradığımız elemanı 3. adımda bulduysak kalan 997 adımı boşuna çalıştırmadan döngüyü nasıl acilen terk ederiz?",
    "roadmap": [
      { "title": "Erken Ayrılma: break", "desc": "Koşula bakılmaksızın döngüyü o anda tamamen sonlandırıp dışarı çıkma." },
      { "title": "Adımı Atlama: continue", "desc": "Mevcut turun kalan kodlarını çalıştırmadan bir sonraki tura zıplama." },
      { "title": "Yer Tutucu: pass", "desc": "Henüz yazılmamış kod bloklarında sözdizimi hatası almamak için boş geçme." },
      { "title": "while True + break Kalıbı", "desc": "Sonsuz döngüyü içeriden akıllıca kontrol etme standardı." }
    ],
    "section1": {
      "title": "break vs continue Farkı",
      "subtitle": "Döngüyü bitirmek ile bir adımı es geçmek arasındaki ayrım",
      "cards": [
        {
          "title": "İki Kritik Müdahale Komutu",
          "icon": "🛑",
          "desc": "Döngünün doğal akışına anında müdahale eden komutlar.",
          "items": [
            { "bold": "break (Durdur ve Çık)", "text": "Döngüyü derhal öldürür. Döngüden sonraki ilk satıra atlar." },
            { "bold": "continue (Pas Geç ve Devam Et)", "text": "Sadece o anki adımı yarıda keser; döngünün bir sonraki turuna geçer." },
            { "bold": "pass (Hiçbir Şey Yapma)", "text": "Sözdizimsel olarak boş bırakılamayan bloklarda yer tutucu görevi görür." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Uygulama: Filtreleme ve Acil Çıkış",
      "subtitle": "Tek sayıları atlama ve hatalı girişte iptal",
      "codeSnippet": "# continue ile tek sayıları atlayıp çiftleri basma\nfor sayi in range(1, 10):\n    if sayi % 2 != 0:\n        continue # Tek ise alt satırları çalıştırma, sıradaki sayıya geç!\n    print(f\"Çift sayı: {sayi}\")\n\n# break ile sonsuz döngüden çıkış\nwhile True:\n    cevap = input(\"Çıkmak için 'q' yazın: \")\n    if cevap == 'q':\n        print(\"Döngü kırıldı. Güle güle!\")\n        break",
      "codeTitle": "break_continue.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Optimizasyon", "title": "Gereksiz İşlemi Önleme", "desc": "Aranan veri bulunduğunda `break` kullanmak CPU'yu boşuna milyonlarca döngü döndürmekten kurtarır.", "items": [{ "bold": "Temiz Tasarım", "text": "`continue` iç içe `if` kalabalığını azaltır." }] }
      ]
    },
    "workshop": {
      "title": "Alışveriş Sepeti ve İptal Mekanizması Simülatörü",
      "subtitle": "Kullanıcı 'tamam' yazana kadar fiyat toplayan, '0' yazarsa o ürünü atlayan program",
      "steps": [
        { "title": "1. Sonsuz Döngü Kur", "desc": "`toplam = 0` ve `while True:` ile giriş döngüsü başlatın." },
        { "title": "2. Girdiyi Kontrol Et", "desc": "Kullanıcı 'tamam' yazdıysa `break` ile döngüyü kırın." },
        { "title": "3. continue Filtresi", "desc": "Fiyat 0 veya negatif girildiyse `continue` ile sepete eklemeden sonraki ürüne geçin." },
        { "title": "4. Toplamı Göster", "desc": "Döngü kırılınca nihai sepet tutarını f-string ile ekrana basın." }
      ],
      "criteria": [
        "`break` ve `continue` komutlarının çalışma zamanını doğru ayırt etme",
        "Kullanıcı girişlerine esnek ve hatasız tepki verme",
        "Döngüden sonra programın akışını başarıyla sürdürme"
      ]
    },
    "tips": {
      "safetyTitle": "break ve continue Kullanırken Dikkat",
      "safetyRules": [
        { "bold": "İç İçe Döngülerde break", "text": "`break` sadece içinde bulunduğu en içteki döngüyü kırar; dıştaki döngü dönmeye devam eder!" },
        { "bold": "while içinde continue ve Sayaç Tuzağı", "text": "while içinde `continue` öncesinde sayacı artırmazsanız, sayaç artamadan döngü başa döner ve sonsuz döngüye girer!" },
        { "bold": "Aşırı break Kullanımından Kaçının", "text": "Bir döngüde 5 farklı `break` olması kodun takip edilmesini zorlaştırır." }
      ],
      "myths": [
        { "wrong": "`continue` komutu programı kapatır.", "correct": "`continue` sadece o anki döngü adımını atlar, döngü bir sonraki değerle çalışmaya devam eder." },
        { "wrong": "`pass` komutu döngüyü durdurur.", "correct": "`pass` hiçbir şey yapmaz; sadece Python'un boş blok hatası vermesini önleyen bir yer tutucudur." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod çalıştırıldığında ekrana basılan son sayı hangisidir?\n```python\nfor i in range(1, 10):\n    if i == 4:\n        continue\n    if i == 7:\n        break\n    print(i, end=\" \")\n```",
      "options": [
        { "text": "A) 3", "isCorrect": False },
        { "text": "B) 6", "isCorrect": True },
        { "text": "C) 7", "isCorrect": False },
        { "text": "D) 9", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. 1, 2, 3 basılır. 4'te `continue` olur (atlanır, basılmaz). 5, 6 basılır. 7'ye geldiğinde `break` çalışır ve döngü tamamen biter. Ekrana basılan son sayı 6'dır."
    },
    "summary": {
      "keyPoints": [
        "`break` döngüyü anında sonlandırır; erken çıkış sağlar.",
        "`continue` mevcut adımı atlayıp bir sonraki adıma zıplar.",
        "`pass` gelecekte yazılacak kodlar için sözdizimsel yer tutucudur."
      ],
      "nextWeek": "Python Veri Yapıları 1: Listeler (Diziler), İndeksleme ve Dilimleme",
      "homework": "1'den 20'ye kadar olan sayılardan 3'ün katı olanları `continue` ile atlayıp diğerlerini yazdıran bir program yapınız."
    }
  },
  # Hafta 30
  {
    "week": 30,
    "date": "05 - 11 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: while Döngüsü ve İleri Veri Yapıları",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Python Veri Yapıları 1: Listeler",
    "subtitle": "Dizi (Array) Mantığı, Köşeli Parantez [], İndeksleme (0'dan Başlama), Negatif İndeksler ve Dilimleme",
    "outcomeCode": "BB.9.5.3",
    "targetSkill": "Koleksiyonel Veri Yönetimi & Dizi Mimarisi",
    "curiosityQuestion": "Okuldaki 1000 öğrencinin adını saklamak için 1000 tane ayrı değişken (`ogr1, ogr2...`) açmak yerine neden tek bir Liste kullanırız?",
    "roadmap": [
      { "title": "Liste (List) Nedir?", "desc": "Birden çok veriyi tek bir değişken altında sıralı saklayan dinamik koleksiyon." },
      { "title": "Köşeli Parantez [] Mimarisi", "desc": "Farklı türleri (int, str, float) bir arada tutabilme esnekliği." },
      { "title": "İndeksleme (0-Tabanlı)", "desc": "İlk elemanın indeksi daima 0'dır; son elemana negatif indeksle (`-1`) erişim." },
      { "title": "Dilimleme (Slicing [basla:bitir])", "desc": "Listenin belirli bir alt parçasını çekip alma sanatı." }
    ],
    "section1": {
      "title": "Listelerin Bellek Mimarisi ve İndeksleme",
      "subtitle": "Sıralı hafıza kutuları ve pozitif/negatif indeksler",
      "cards": [
        {
          "title": "İndeks Kuralları",
          "icon": "📑",
          "desc": "Listedeki elemanlara ulaşmanın koordinat sistemi.",
          "items": [
            { "bold": "0. İndeks (İlk Eleman)", "text": "`diller[0]` daima listenin ilk elemanını getirir." },
            { "bold": "-1. İndeks (Son Eleman)", "text": "Listenin uzunluğunu bilmeseniz bile `diller[-1]` son elemanı verir." },
            { "bold": "Değiştirilebilirlik (Mutable)", "text": "Listeler değiştirilebilir; `diller[0] = 'Python'` yazarak eleman güncellenebilir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Dilimleme (Slicing) Sözdizimi",
      "subtitle": "`liste[başlangıç : bitiş : adım]` formülü",
      "codeSnippet": "# Python Listeleri ve Dilimleme\nnotlar = [85, 90, 45, 100, 60, 75]\n\nprint(\"İlk eleman:\", notlar[0])     # 85\nprint(\"Son eleman:\", notlar[-1])    # 75\nprint(\"İlk 3 not:\", notlar[0:3])    # [85, 90, 45] (3 hariç!)\nprint(\"Tersten liste:\", notlar[::-1]) # [75, 60, 100, 45, 90, 85]\n\nnotlar[2] = 50 # 45 olan not 50 olarak güncellendi!\nprint(\"Güncel liste:\", notlar)",
      "codeTitle": "listeler_giris.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "IndexError", "title": "Sınır Aşımı Hatası", "desc": "3 elemanlı bir listenin `liste[5]` elemanını istemek `IndexError: list index out of range` hatası üretir.", "items": [{ "bold": "len() Fonksiyonu", "text": "Listenin kaç elemandan oluştuğunu `len(liste)` ile anında öğreniriz." }] }
      ]
    },
    "workshop": {
      "title": "Lise Ders Programı ve Gün Listesi Modelleme",
      "subtitle": "Haftanın günlerini bir listede saklayıp hafta içi ve hafta sonu dilimlerini ekrana basma",
      "steps": [
        { "title": "1. Listeyi Tanımla", "desc": "`gunler = [\"Pazartesi\", \"Salı\", \"Çarşamba\", \"Perşembe\", \"Cuma\", \"Cumartesi\", \"Pazar\"]` yazın." },
        { "title": "2. Hafta İçini Dilimle", "desc": "`hafta_ici = gunler[0:5]` ile ilk 5 günü yeni bir listeye alın." },
        { "title": "3. Hafta Sonunu Çek", "desc": "`hafta_sonu = gunler[5:]` veya `gunler[-2:]` ile son 2 günü çekin." },
        { "title": "4. Ekrana Formatlı Bas", "desc": "Her iki listeyi ve `len(gunler)` bilgisini konsola yazdırın." }
      ],
      "criteria": [
        "Sıfır tabanlı indeksleme mantığını hatasız kullanma",
        "Negatif indekslerle sondan eleman çağırmayı kavrama",
        "Dilimleme sınırlarını (`basla:bitir`) doğru belirleme"
      ]
    },
    "tips": {
      "safetyTitle": "Listeler ile Çalışırken Kritik Püf Noktaları",
      "safetyRules": [
        { "bold": "Son Elemanın İndeksi: len - 1", "text": "5 elemanlı bir listenin son indeksi 4'tür; `liste[5]` yazarsanız program çöker." },
        { "bold": "Dilimleme Hata Vermez", "text": "İndekslemede sınır aşımı hata verirken, dilimlemede `liste[0:100]` yazsanız bile olanları alır ve çökmez." },
        { "bold": "Kopya Alırken `[:]` Kullanın", "text": "`b = a` yazarsanız ikisi aynı belleği gösterir; bağımsız kopya için `b = a.copy()` veya `b = a[:]` yapın." }
      ],
      "myths": [
        { "wrong": "Listelerin ilk elemanının indeksi 1'dir.", "correct": "Tüm modern dillerde (Python, C, Java) ilk elemanın indeksi daima 0'dır." },
        { "wrong": "Bir liste içinde sadece sayılar veya sadece metinler olabilir.", "correct": "Python listeleri heterojendir; aynı listede int, str, float ve bool yan yana bulunabilir." }
      ]
    },
    "quiz": {
      "question": "`sehirler = [\"Ankara\", \"İstanbul\", \"İzmir\", \"Bursa\"]` listesinde `sehirler[-1]` ifadesi hangi şehri döndürür?",
      "options": [
        { "text": "A) Ankara", "isCorrect": False },
        { "text": "B) İzmir", "isCorrect": False },
        { "text": "C) Bursa", "isCorrect": True },
        { "text": "D) IndexError", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. Negatif indeksleme listenin sonundan geriye doğru sayar. `-1` daima listenin en son elemanını (Bursa) verir."
    },
    "summary": {
      "keyPoints": [
        "Listeler birden çok veriyi tek çatıda toplayan dinamik yapılardır.",
        "İndeksler 0'dan başlar; `-1` son elemanı işaret eder.",
        "Dilimleme (`[basla:bitir]`) alt listeler üretmenin en zarif yoludur."
      ],
      "nextWeek": "Listelerle Döngüsel İşlemler ve Liste Metotları (`append`, `pop`, `sort`, `len`)",
      "homework": "En sevdiğiniz 5 filmi bir liste yapıp ilk ve son filmi, ardından da 2. ve 3. filmleri dilimleyerek ekrana yazdırınız."
    }
  },
  # Hafta 31
  {
    "week": 31,
    "date": "12 - 18 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: while Döngüsü ve İleri Veri Yapıları",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Liste Metotları & Döngüler",
    "subtitle": "append, insert, remove, pop, sort, reverse, count ve for Döngüsüyle Liste Gezinimi",
    "outcomeCode": "BB.9.5.4",
    "targetSkill": "Dizi Manipülasyonu & Algoritmik Veri İşleme",
    "curiosityQuestion": "Bir alışveriş sepetine yeni ürün ekleme, ürünü silme ve fiyatları küçükten büyüğe sıralama işlemleri Python metotlarıyla kaç satırda yapılır?",
    "roadmap": [
      { "title": "Eleman Ekleme", "desc": "Sona ekleme (`append()`) ve araya ekleme (`insert()`)." },
      { "title": "Eleman Silme", "desc": "Değere göre silme (`remove()`) ve indekse göre çıkarıp alma (`pop()`)." },
      { "title": "Sıralama ve Ters Çevirme", "desc": "Alfabetik/sayısal dizme (`sort()`) ve listeyi tersyüz etme (`reverse()`)." },
      { "title": "for ile Liste Gezinimi", "desc": "`for eleman in liste:` ve `in` üyelik operatörüyle arama yapma." }
    ],
    "section1": {
      "title": "En Çok Kullanılan 6 Liste Metodu",
      "subtitle": "Listeyi canlı ve dinamik kılan yerleşik fonksiyonlar",
      "cards": [
        {
          "title": "Metot Rehberi",
          "icon": "🛠️",
          "desc": "Nokta `.` operatörüyle çağrılan liste fonksiyonları.",
          "items": [
            { "bold": "append(deger)", "text": "Listenin en sonuna yeni bir eleman ekler: `sepet.append('Kitap')`." },
            { "bold": "pop(indeks)", "text": "Belirtilen indisteki elemanı listeden çıkarır ve geriye döndürür." },
            { "bold": "remove(deger)", "text": "İsmi verilen ilk eşleşen elemanı siler." },
            { "bold": "sort()", "text": "Listeyi orijinal haliyle küçükten büyüğe (A-Z) sıralar." }
          ]
        }
      ]
    },
    "section2": {
      "title": "for Döngüsü ile Liste Üzerinde Gezinme",
      "subtitle": "İndeks numarasına ihtiyaç duymadan doğrudan elemanları okuma",
      "codeSnippet": "# Liste Metotları ve for Döngüsü\nogrenciler = [\"Ece\", \"Can\", \"Zeynep\", \"Ali\"]\nogrenciler.append(\"Burak\") # Sona ekler\nogrenciler.sort()           # Alfabetik sıralar: ['Ali', 'Burak', 'Can', 'Ece', 'Zeynep']\n\nprint(\"Sınıf Listesi:\")\nfor sira, ogrenci in enumerate(ogrenciler, 1):\n    print(f\"{sira}. {ogrenci}\")\n\n# Arama kontrolü\nif \"Ali\" in ogrenciler:\n    print(\"Ali sınıfta mevcut!\")",
      "codeTitle": "liste_metotlari.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "in Operatörü", "title": "Üyelik Sorgulama", "desc": "`if 'elma' in meyveler:` yazarak bir elemanın listede olup olmadığını tek kelimeyle sorgulayabilirsiniz.", "items": [{ "bold": "enumerate()", "text": "Döngüde hem sıra numarasını hem de elemanın kendisini aynı anda verir." }] }
      ]
    },
    "workshop": {
      "title": "Dinamik Görev Listesi (To-Do List) Uygulaması",
      "subtitle": "Kullanıcının görev ekleyip silebildiği ve listelediği interaktif konsol programı",
      "steps": [
        { "title": "1. Boş Liste Başlat", "desc": "`gorevler = []` listesini oluşturun." },
        { "title": "2. while Döngüsü", "desc": "Kullanıcıya 'Ekle', 'Sil', 'Listele', 'Çıkış' menüsünü sunun." },
        { "title": "3. Metotları Bağla", "desc": "Ekleme için `append()`, tamamlama/silme için `pop()` kullanın." },
        { "title": "4. Listeyi Göster", "desc": "`for` döngüsüyle tüm görevleri numaralandırarak ekrana basın." }
      ],
      "criteria": [
        "`append()` ve `pop()` metotlarını doğru bağlamda kullanma",
        "Silme işleminde geçersiz indeks girildiğinde hata vermesini önleme",
        "Temiz ve anlaşılır menü etkileşimi tasarlama"
      ]
    },
    "tips": {
      "safetyTitle": "Liste Metotlarında Dikkat Edilecekler",
      "safetyRules": [
        { "bold": "sort() Geriye Değer Döndürmez", "text": "`yeni = liste.sort()` yazarsanız `yeni` değişkeni `None` olur! `sort()` orijinal listeyi yerinde değiştirir." },
        { "bold": "remove() Olmayan Elemanda Çöker", "text": "Listede olmayan bir şeyi silmeye çalışırsanız `ValueError` verir; önce `if eleman in liste:` kontrolü yapın." },
        { "bold": "Boş Listede pop() Hatası", "text": "Boş bir listede `pop()` çağrılırsa `IndexError` verir." }
      ],
      "myths": [
        { "wrong": "`sort()` ile `sorted()` tamamen aynıdır.", "correct": "`liste.sort()` orijinal listeyi değiştirir; `sorted(liste)` ise orijinali bozmadan yeni bir kopya döndürür." },
        { "wrong": "Bir listenin eleman sayısını saymak için döngüyle tek tek saymak gerekir.", "correct": "`len(liste)` fonksiyonu anında eleman sayısını verir." }
      ]
    },
    "quiz": {
      "question": "`sayilar = [10, 20, 30]` listesine `sayilar.append(40)` uygulandıktan sonra `sayilar.pop(0)` çalıştırılırsa listenin son hali ne olur?",
      "options": [
        { "text": "A) [20, 30, 40]", "isCorrect": True },
        { "text": "B) [10, 20, 30, 40]", "isCorrect": False },
        { "text": "C) [10, 20, 30]", "isCorrect": False },
        { "text": "D) [20, 30]", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: A. `append(40)` ile liste `[10, 20, 30, 40]` olur. `pop(0)` ise 0. indisteki ilk elemanı (10) silip çıkarır. Kalan liste: `[20, 30, 40]`."
    },
    "summary": {
      "keyPoints": [
        "Metotlar nesnelerin yetenekleridir (`liste.metot()`).",
        "`append()` ekler, `pop()` ve `remove()` siler, `sort()` sıralar.",
        "`for eleman in liste:` kalıbı Python'un en zarif ve güçlü döngü yapısıdır."
      ],
      "nextWeek": "Python Veri Yapıları 2: Demetler (Tuples) ve Sözlükler (Dictionaries - Anahtar/Değer)",
      "homework": "Kullanıcıdan 5 adet sayı alıp bunları bir listeye ekleyen ve ardından küçükten büyüğe sıralayıp basan programı yazınız."
    }
  }
]

print("Hafta 26-31 tamamlandı.")
