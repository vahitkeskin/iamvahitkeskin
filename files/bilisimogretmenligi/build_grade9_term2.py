#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Weeks 20 to 41 (Term 2) for 9. Sınıf Bilgisayar Bilimi (Kur 1)
MEB 2026-2027 Maarif Modeli
Öğretmen: Vahit Keskin
"""

WEEKS_20_31 = [
  # Hafta 20
  {
    "week": 20,
    "date": "25 - 31 Ocak",
    "hours": "2 Ders Saati",
    "unit": "Sömestr Bülteni: Kış Kodlama Kampı",
    "unitBadge": "Sömestr 1",
    "unitTheme": "unite-somestr",
    "title": "Genç Programcılar Kış Kodlama Bülteni",
    "subtitle": "Tatil Boyunca Mantıksal Becerileri Zinde Tutma ve Eğlenceli Kodlama Maceraları",
    "outcomeCode": "BB.9.S.1",
    "targetSkill": "Bireysel Öğrenme & Kodlama Tutkusu",
    "curiosityQuestion": "Bir programcı sadece bilgisayara bakarak değil, yürüyüş yaparken veya oyun oynarken de nasıl kod yazar?",
    "roadmap": [
      { "title": "Kış Kodlama Meydan Okumaları", "desc": "Her güne 1 mini algoritma problemi çözme alışkanlığı." },
      { "title": "Çevrimiçi Kodlama Platformları", "desc": "HackerRank, Codewars ve Project Euler ile seviye atlama." },
      { "title": "Mantık ve Strateji Oyunları", "desc": "Satranç, Go ve zeka bulmacalarının kodlama zihnine faydaları." },
      { "title": "2. Dönem Ön Hazırlığı", "desc": "Koşullu durumlar ve karar algoritmalarına merak uyandırıcı bakış." }
    ],
    "section1": {
      "title": "Evde Kodlama Pratiği İçin Altın Tavsiyeler",
      "subtitle": "Kendi hızınızda öğrenmenin ve üretmenin keyfi",
      "cards": [
        {
          "title": "Verimli Kodlama Rutini",
          "icon": "☕",
          "desc": "Tatili hem dinlenerek hem de yeteneklerinizi katlayarak geçirin.",
          "items": [
            { "bold": "Pomodoro Tekniği", "text": "25 dakika odaklanarak kod yazın, 5 dakika mola verin; zihniniz hep taze kalsın." },
            { "bold": "Hata Yapmaktan Korkmayın", "text": "En iyi yazılımcılar en çok hata (bug) çözen ve pes etmeyenlerdir." },
            { "bold": "Kendi Fikirlerinizi Deneyin", "text": "Sadece derste gördüklerinizle yetinmeyin; aklınıza gelen ilginç fikirleri kodlamayı deneyin." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Tatil İçin Mini Proje: Zar Simülatörü",
      "subtitle": "Rastgele sayı üreterek oyun zarı atma",
      "codeSnippet": "# Sömestr Mini Projesi: Zar Atma Simülatörü\nimport random\n\nzar1 = random.randint(1, 6)\nzar2 = random.randint(1, 6)\ntoplam = zar1 + zar2\n\nprint(f\"Attığınız zarlar: {zar1} ve {zar2}\")\nprint(f\"Toplam Skor: {toplam}\")\nif zar1 == zar2:\n    print(\"Çift attınız! Tebrikler! 🎲🎲\")",
      "codeTitle": "zar_simulator.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Rastgelelik", "title": "random Modülü", "desc": "Oyunlarda ve yapay zekâda zar atma veya şans faktörü `random` kütüphanesiyle sağlanır.", "items": [{ "bold": "randint(1, 6)", "text": "1 ile 6 dahil olmak üzere rastgele tam sayı üretir." }] }
      ]
    },
    "workshop": {
      "title": "Ev Çalışması: Şanslı Sayı ve Günlük Skor Programı",
      "subtitle": "Tatil boyunca ailenizle oynayabileceğiniz basit bir şans oyunu tasarlama",
      "steps": [
        { "title": "1. Fikir Belirle", "desc": "İki oyuncunun arka arkaya zar attığı ve yüksek atanının kazandığı bir kurgu yapın." },
        { "title": "2. Kodunu Yaz", "desc": "`random.randint()` kullanarak her oyuncuya rastgele puan verin." },
        { "title": "3. Sonucu Duyur", "desc": "f-string formatı ile kazananı ekrana afiş gibi basın." },
        { "title": "4. Portfolyona Ekle", "desc": "Kod dosyasını `tatil_projelerim` klasörüne kaydedin." }
      ],
      "criteria": [
        "Kendi başına bağımsız kod dosyası oluşturup çalıştırabilme",
        "Rastgele sayı üretim mantığını doğru kurgulama",
        "Ekrana estetik ve kullanıcı dostu mesajlar çıkarma"
      ]
    },
    "tips": {
      "safetyTitle": "Sağlıklı Teknoloji Kullanımı ve Dijital Denge",
      "safetyRules": [
        { "bold": "20-20-20 Kuralı", "text": "Her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakarak gözlerinizi dinlendirin." },
        { "bold": "Doğru Duruş (Ergonomi)", "text": "Monitör göz hizasında olmalı, sırtınız dik ve kollarınız 90 derece bükülü durmalıdır." },
        { "bold": "Açık Havayı Unutmayın", "text": "Ekran başından kalkıp spor yapmak ve temiz hava almak zihinsel üretkenliğinizi ikiye katlar." }
      ],
      "myths": [
        { "wrong": "Yazılımcılar günde 18 saat aralıksız kod yazmalıdır.", "correct": "Sürekli ekrana bakmak tükenmişliğe yol açar; en yaratıcı algoritmik çözümler dinlenmiş zihinle üretilir." },
        { "wrong": "Tatil ödevleri ve bültenler puan almak için zorunlu eziyettir.", "correct": "Bültenler gençlerin kendi tutkularıyla özgür projeler geliştirmesi için rehberdir." }
      ]
    },
    "quiz": {
      "question": "Python'da 1 ile 100 arasında (her ikisi de dahil) rastgele bir tam sayı üretmek için hangi komut kullanılır?",
      "options": [
        { "text": "A) random.range(1, 100)", "isCorrect": False },
        { "text": "B) random.randint(1, 100)", "isCorrect": True },
        { "text": "C) math.random(1, 100)", "isCorrect": False },
        { "text": "D) int(random() * 100)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `random.randint(a, b)` fonksiyonu, a ve b sınırları dahil olmak üzere rastgele bir tamsayı döndürür."
    },
    "summary": {
      "keyPoints": [
        "Kış tatili zihni dinlendirirken merak edilen yeni teknolojileri keşfetmek için harika bir fırsattır.",
        "Günde 20 dakika kodlama yapmak kas hafızanızı diri tutar.",
        "Haftaya veri bilimi ve grafik çizimlerine eğlenceli bir bakış atacağız."
      ],
      "nextWeek": "Sömestr 2. Hafta: Veri Analitiği ve Python ile Görselleştirme Bülteni",
      "homework": "Zar simülatörü kodunu genişleterek 3 zar atıp en büyüğünü gösteren bir program yazınız."
    }
  },
  # Hafta 21
  {
    "week": 21,
    "date": "01 - 07 Şubat",
    "hours": "2 Ders Saati",
    "unit": "Sömestr Bülteni: Kış Kodlama Kampı",
    "unitBadge": "Sömestr 2",
    "unitTheme": "unite-somestr",
    "title": "Veri Analitiği & Görselleştirme Bülteni",
    "subtitle": "Büyük Veri Çağında Sayıları Grafiğe Dönüştürme, Matplotlib ve Geleceğin Meslekleri",
    "outcomeCode": "BB.9.S.2",
    "targetSkill": "Veri Okuryazarlığı & Gelecek Vizyonu",
    "curiosityQuestion": "Milyonlarca satırlık karmaşık bir Excel tablosundaki gizli trendler tek bir çizgi grafiğiyle saniyeler içinde nasıl görünür hale gelir?",
    "roadmap": [
      { "title": "Veri Bilimi Nedir?", "desc": "Ham veriyi toplayıp temizleme, analiz etme ve karar üretme sanatı." },
      { "title": "Grafiklerin Gücü", "desc": "Çizgi grafik, sütun grafik ve pasta grafik kullanım alanları." },
      { "title": "Python Veri Kütüphaneleri", "desc": "Matplotlib, Seaborn ve Pandas dünyasına giriş vizyonu." },
      { "title": "Bilişimde Yeni Kariyerler", "desc": "Veri Bilimci, Yapay Zekâ Mühendisi, Siber Güvenlik Analisti." }
    ],
    "section1": {
      "title": "Veri Görselleştirme Neden Bu Kadar Önemli?",
      "subtitle": "İnsan beyni görselleri metinlerden 60.000 kat daha hızlı işler",
      "cards": [
        {
          "title": "Veriden Karara Giden Yol",
          "icon": "📊",
          "desc": "Teknoloji şirketlerinin kararlarını veriye dayandırma süreci.",
          "items": [
            { "bold": "Trend Tespiti", "text": "Hisselerin, sıcaklıkların veya kullanıcı sayısının zaman içindeki artışını görme." },
            { "bold": "Aykırı Değerler (Anomalies)", "text": "Siber saldırı veya sahtekarlık anındaki olağandışı veri sıçramalarını yakalama." },
            { "bold": "Doğru İletişim", "text": "Karmaşık teknik raporları yöneticilere ve halka anlaşılır grafiklerle sunma." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Geleceğin Bilişim Meslekleri ve Becerileri",
      "subtitle": "2030'lu yıllarda en çok aranan yetkinlikler",
      "codeSnippet": "# Python ile Basit Grafik Çizimi Sezgisi\n# import matplotlib.pyplot as plt\ngunler = [\"Pzt\", \"Sal\", \"Car\", \"Per\", \"Cum\"]\nsicaklik = [12, 14, 11, 15, 18]\n\nprint(\"Haftalık Hava Durumu Özeti:\")\nfor g, s in zip(gunler, sicaklik):\n    cubuk = \"█\" * s\n    print(f\"{g}: {cubuk} ({s}°C)\")",
      "codeTitle": "ascii_grafik.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Kariyer", "title": "Yapay Zekâ ve Veri", "desc": "Gelecekte kod yazmayı bilen değil, veriyi anlayıp yapay zekâyı doğru yönlendiren uzmanlar fark yaratacak.", "items": [{ "bold": "Problem Çözücü", "text": "Teknoloji değiştikçe değişmeyen tek şey algoritmik mantık gücüdür." }] }
      ]
    },
    "workshop": {
      "title": "Kendi Günlük Ekran Süresi Grafiğini Çıkarma",
      "subtitle": "Telefon veya bilgisayarda son 7 günde harcanan saatleri toplayıp konsolda çubuk grafik çizdirme",
      "steps": [
        { "title": "1. Veriyi Topla", "desc": "Son 7 günün günlük telefon/bilgisayar kullanım saatlerini bir liste olarak not edin." },
        { "title": "2. ASCII Çubukları Yap", "desc": "Her saat için konsola `\"■\"` karakteri basan bir gösterim tasarlayın." },
        { "title": "3. Ortalama Hesapla", "desc": "Haftalık toplam süreyi 7'ye bölerek günlük ortalama ekran sürenizi bulun." },
        { "title": "4. Karar Üret", "desc": "Eğer ortalama 4 saatten fazlaysa haftalık detoks planı yapın." }
      ],
      "criteria": [
        "Verileri toplayıp sayısal olarak anlamlandırma",
        "Görsel çıktılarla veriyi etkili biçimde sergileme",
        "Veri sonuçlarına bakarak kişisel çıkarımlarda bulunabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Veri Manipülasyonuna Karşı Uyanık Olun",
      "safetyRules": [
        { "bold": "Grafik Eksenlerine Dikkat Edin", "text": "Y ekseni sıfırdan başlamayan grafikler küçük farkları devasa gibi göstererek yanıltabilir." },
        { "bold": "Kaynak Güvenilirliği", "text": "Sosyal medyada paylaşılan her infografiğin veri kaynağını (TÜİK, WHO, MEB vb.) kontrol edin." },
        { "bold": "Kendi Verinizi Koruyun", "text": "Ücretsiz veri analizi sitelerine kişisel veya gizli dosyalarınızı yüklemeyin." }
      ],
      "myths": [
        { "wrong": "Veri analitiği sadece bankalar ve finansçılar içindir.", "correct": "Futbol takımlarının maç analizinden doktorların kanser araştırmasına kadar her alan veri analitiğiyle çalışır." },
        { "wrong": "Yapay zekâ çıktığı için insan analistlere ihtiyaç kalmayacaktır.", "correct": "Yapay zekânın ürettiği veriyi yorumlayacak ve etik kararlar alacak bilinçli insanlara her zamankinden çok ihtiyaç vardır." }
      ]
    },
    "quiz": {
      "question": "Verilerin zaman içerisindeki artış, azalış ve değişim trendini en net ve anlaşılır biçimde göstermek için hangi grafik türü tercih edilir?",
      "options": [
        { "text": "A) Pasta Grafik (Pie Chart)", "isCorrect": False },
        { "text": "B) Çizgi Grafik (Line Chart)", "isCorrect": True },
        { "text": "C) Radar Grafik", "isCorrect": False },
        { "text": "D) Kabarcık Grafik", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Çizgi grafikler (Line Chart), zaman serisi (günler, aylar, yıllar) boyunca değişen sürekli verilerin eğilimini göstermek için en ideal görselleştirme biçimidir."
    },
    "summary": {
      "keyPoints": [
        "Veri 21. yüzyılın en değerli hazinesidir; onu işleyenler geleceği şekillendirir.",
        "Görselleştirme soyut rakamları somut hikayelere dönüştürür.",
        "Pazartesi günü 2. Döneme başlıyoruz: Karar yapıları (`if-else`) ile programlarımıza zeka katacağız!"
      ],
      "nextWeek": "2. Dönem Başlıyor: Karşılaştırma ve Mantıksal Operatörler (`==`, `!=`, `<`, `>`, `and`, `or`)",
      "homework": "2. Dönem için temiz bir Python çalışma klasörü açıp okul bilgisayarındaki IDE ortamını hazırlayınız."
    }
  },
  # Hafta 22
  {
    "week": 22,
    "date": "08 - 14 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Python ile Karar ve Döngü Yapıları",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "Karşılaştırma & Mantıksal Operatörler",
    "subtitle": "==, !=, <, >, <=, >=, and, or, not ve Doğruluk Değeri İfadeleri",
    "outcomeCode": "BB.9.4.1",
    "targetSkill": "Mantıksal İfade Yazımı & Karar Altyapısı",
    "curiosityQuestion": "Tek bir eşittir `=` ile çift eşittir `==` arasındaki farkı bilmeyen bir programcı nasıl tüm banka hesaplarını tehlikeye atar?",
    "roadmap": [
      { "title": "Atama (=) vs Karşılaştırma (==)", "desc": "Değer yükleme ile eşitlik sorgulama arasındaki hayati fark." },
      { "title": "6 Karşılaştırma Operatörü", "desc": "`==`, `!=` (eşit değil), `<`, `>`, `<=`, `>=`." },
      { "title": "Mantıksal Operatörler", "desc": "`and` (ve), `or` (veya), `not` (değil) ile bileşik şartlar kurma." },
      { "title": "Operatör Önceliği", "desc": "Aritmetik > Karşılaştırma > Mantıksal işlem sırası." }
    ],
    "section1": {
      "title": "Karşılaştırma Operatörleri ve Boolean Sonuçlar",
      "subtitle": "Her karşılaştırma sonucu mutlaka `True` veya `False` üretir",
      "cards": [
        {
          "title": "Operatörler Listesi",
          "icon": "⚖️",
          "desc": "İki değeri birbiriyle kıyaslayan matematiksel semboller.",
          "items": [
            { "bold": "== (Eşit mi?)", "text": "`5 == 5` -> `True`, `5 == 4` -> `False`" },
            { "bold": "!= (Eşit değil mi?)", "text": "`10 != 20` -> `True`, `10 != 10` -> `False`" },
            { "bold": ">= ve <=", "text": "Büyük eşit ve küçük eşit kontrolleri: `18 >= 18` -> `True`." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Bileşik Koşullar (and, or, not)",
      "subtitle": "Birden fazla şartı aynı anda denetleme",
      "codeSnippet": "# Karşılaştırma ve Mantık Örnekleri\nyas = 16\nvize = True\nparola_dogru = True\n\n# Ehliyet alabilir mi?\nehliyet_sarti = (yas >= 18)\nprint(\"Ehliyet alabilir mi?:\", ehliyet_sarti) # False\n\n# Yurtdışına çıkabilir mi?\nyurtdisi = (yas >= 18) and vize\nprint(\"Yurtdışı onayı:\", yurtdisi)            # False\n\n# Eşitlik kontrolü\nprint(10 == 10)  # True\nprint(10 != 5)   # True",
      "codeTitle": "karsilastirma.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Dikkat!", "title": "Tek Eşittir (=) Hatası", "desc": "`if x = 5` yazmak sözdizimi hatasıdır (SyntaxError); atama değil karşılaştırma için mutlaka `==` kullanılmalıdır.", "items": [{ "bold": "Zincirleme Karşılaştırma", "text": "Python'da `10 < x < 20` şeklinde doğrudan aralık yazılabilir!" }] }
      ]
    },
    "workshop": {
      "title": "Kullanıcı Girişi ve İndirim Hak Ediş Doğrulama Aracı",
      "subtitle": "Kullanıcının girdiği yaş ve öğrenci durumuna göre boolean sonuçlar üreten program",
      "steps": [
        { "title": "1. Girdileri Oku", "desc": "`yas = int(input(\"Yaşınız: \"))` ve `ogrenci_mi = input(\"Öğrenci misiniz? (e/h): \")` yazın." },
        { "title": "2. Şartı Kurgula", "desc": "`ucretsiz_ulasim = (yas < 7) or (yas >= 65)` boolean ifadesini kurun." },
        { "title": "3. İndirim Şartı", "desc": "`indirimli = (ogrenci_mi == 'e') and (yas < 25)` mantığını yazın." },
        { "title": "4. Sonuçları Bas", "desc": "f-string ile kullanıcının haklarını konsola `True`/`False` olarak yazdırın." }
      ],
      "criteria": [
        "`=` ile `==` arasındaki farkı hatasız uygulama",
        "`and` ve `or` bağlaçlarını doğru bağlamda kullanma",
        "Karmaşık şartlarda parantez önceliğini doğru belirleme"
      ]
    },
    "tips": {
      "safetyTitle": "Operatör Kullanımında Kritik Güvenlik",
      "safetyRules": [
        { "bold": "Float Sayılarda Eşitlik Tehlikesi", "text": "`0.1 + 0.2 == 0.3` sonucu Python'da `False` döner! (Kayan nokta hassasiyeti sebebiyle `round()` kullanın)." },
        { "bold": "Metin Karşılaştırmalarında Büyük/Küçük Harf", "text": "`\"ali\" == \"Ali\"` sonucu `False`'tur; karşılaştırmadan önce `.lower()` uygulayın." },
        { "bold": "Boole Değişkenleri Sade Kullanın", "text": "`if aktif == True:` yerine sadece `if aktif:` yazmak daha profesyoneldir." }
      ],
      "myths": [
        { "wrong": "Python'da `and` ve `or` yerine `&&` ve `||` kullanılır.", "correct": "C++ ve Java'da `&&` kullanılırken Python sade İngilizce kelimeleri (`and`, `or`, `not`) benimsemiştir." },
        { "wrong": "Bir karşılaştırma ifadesi sadece `if` içinde yazılabilir.", "correct": "Karşılaştırmalar bağımsız bir değişkene atanabilir (`sonuc = x > 10`) ve boolean değer üretir." }
      ]
    },
    "quiz": {
      "question": "Python'da `x = 10` olduğuna göre `(x > 5) and not(x == 10)` ifadesinin sonucu nedir?",
      "options": [
        { "text": "A) True", "isCorrect": False },
        { "text": "B) False", "isCorrect": True },
        { "text": "C) None", "isCorrect": False },
        { "text": "D) SyntaxError", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `x > 5` True'dur. `x == 10` True olduğuna göre `not(True)` False olur. `True and False` işleminin nihai sonucu False'tur."
    },
    "summary": {
      "keyPoints": [
        "Karşılaştırma operatörleri veriler arasındaki büyüklük ve eşitlik ilişkisini inceler.",
        "`==` eşitliği sorgular, `=` ise sağdaki değeri soldaki değişkene atar.",
        "Bu operatörler programlara karar verme yeteneği kazandıran `if` bloklarının temelidir."
      ],
      "nextWeek": "Koşullu Durumlar: `if` ve `else` Blokları & Girintileme (Indentation) Kuralı",
      "homework": "Kullanıcının girdiği bir sayının 10 ile 50 arasında olup olmadığını tek satırlık bir boolean ifadesiyle ekrana yazdırınız."
    }
  },
  # Hafta 23
  {
    "week": 23,
    "date": "15 - 21 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Python ile Karar ve Döngü Yapıları",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "Koşullu Durumlar: if & else",
    "subtitle": "Karar Mekanizmaları, İki Yönlü Koşullar ve Python'un İmzası: Girintileme (Indentation)",
    "outcomeCode": "BB.9.4.2",
    "targetSkill": "Akış Kontrolü & Koşullu Mantık Kurma",
    "curiosityQuestion": "Python'da diğer dillere benzemeyen 4 boşlukluk 'girintileme (indentation)' kuralı olmasaydı program hangi kodun kime ait olduğunu nasıl anlardı?",
    "roadmap": [
      { "title": "Programın Karar Verme Gücü", "desc": "Doğrusal akıştan şartlara göre yön değiştiren akıllı programlara geçiş." },
      { "title": "if Bloğu Yapısı", "desc": "`if koşul:` sözdizimi, iki nokta üst üste (`:`) ve blok kavramı." },
      { "title": "Girintileme (Indentation)", "desc": "4 boşluk veya 1 TAB standardı; IndentationError ile başa çıkma." },
      { "title": "else Bloğu", "desc": "Koşul sağlanmadığında (False durumunda) çalışacak alternatif yol." }
    ],
    "section1": {
      "title": "if ve else Sözdizimi Kuralları",
      "subtitle": "İki nokta üst üste (:) ve girintilemenin önemi",
      "cards": [
        {
          "title": "Sözdiziminin Anatomisi",
          "icon": "🔀",
          "desc": "Hatasız bir if-else yapısının parçaları.",
          "items": [
            { "bold": "1. if anahtar kelimesi", "text": "Koşul ifadesini başlatır (`if notu >= 50:`)." },
            { "bold": "2. İki Nokta (:)", "text": "Koşulun bittiğini ve içeriye girileceğini belirtir; unutulursa SyntaxError verir." },
            { "bold": "3. 4 Boşluk Girinti", "text": "Koşul doğru olduğunda çalışacak komutlar mutlaka 4 boşluk içeriden başlamalıdır." },
            { "bold": "4. else alternatifi", "text": "Koşul False olduğunda devreye girer; kendi koşulu olmaz, doğrudan `:` alır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Gerçek Hayat Örneği: Giriş Yetkilendirme",
      "subtitle": "Parola doğruluğuna göre kapıyı açma veya reddetme",
      "codeSnippet": "# Kullanıcı Giriş Kontrolü\nsifre = input(\"Sistem Parolanızı Giriniz: \")\n\nif sifre == \"meb2026\":\n    print(\"Giriş Başarılı!\")\n    print(\"Sisteme Hoş Geldiniz.\")\nelse:\n    print(\"Hatalı Parola!\")\n    print(\"Lütfen tekrar deneyiniz.\")\n\nprint(\"Program sonlandı.\") # Girintisiz: her durumda çalışır",
      "codeTitle": "giris_kontrol.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Blok Mantığı", "title": "Hangi Kod Ne Zaman Çalışır?", "desc": "Girintili kodlar sadece ait oldukları koşul sağlanınca çalışır; girintisiz satırlar ise koşuldan bağımsız ana akışta çalışır.", "items": [{ "bold": "IndentationError", "text": "Boşluk sayılarının uyumsuzluğunda Python'un verdiği hatadır." }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Ehliyet ve Yaş Uygunluk Denetleyicisi",
      "subtitle": "Kullanıcıdan yaşını alıp ehliyet alıp alamayacağını, alamıyorsa kaç yılı kaldığını söyleyen program",
      "steps": [
        { "title": "1. Yaşı Oku", "desc": "`yas = int(input(\"Yaşınızı giriniz: \"))` ile tamsayı girdi alın." },
        { "title": "2. if Koşulunu Kur", "desc": "`if yas >= 18:` şartını yazıp altına tebrik mesajı ekleyin." },
        { "title": "3. else Bloğu", "desc": "Kalan yılı hesaplayın: `kalan = 18 - yas` ve `f\"{kalan} yıl sonra başvurabilirsiniz.\"` yazdırın." },
        { "title": "4. Test Et", "desc": "18, 15 ve 25 yaş değerleriyle her iki kolun doğru çalıştığını doğrulayın." }
      ],
      "criteria": [
        "İki nokta (`:`) ve 4 boşluk girinti kuralına tam uyma",
        "Her iki durum için de anlamlı ve kullanıcı dostu mesajlar çıkarma",
        "Negatif veya mantıksız yaş girişlerine karşı mantık yürütme"
      ]
    },
    "tips": {
      "safetyTitle": "Koşul Bloklarında Sık Yapılan Hatalar",
      "safetyRules": [
        { "bold": "İki Noktayı Asla Unutmayın", "text": "`if yas >= 18` satırının sonuna `:` koymamak yeni başlayanların en sık yaptığı hatadır." },
        { "bold": "TAB ile Boşluğu Karıştırmayın", "text": "Bazı editörlerde TAB ile boşluk karakteri farklı yorumlanabilir; VS Code'da daima 4 boşluk kullanın." },
        { "bold": "else Asla Tek Başına Çalışmaz", "text": "Her `else` mutlaka kendinden önceki bir `if` bloğuna bağlı olmak zorundadır." }
      ],
      "myths": [
        { "wrong": "Her `if` bloğunun arkasından mutlaka bir `else` gelmek zorundadır.", "correct": "Hayır; `else` zorunlu değildir. Sadece koşul sağlanınca bir şey yapmak istiyorsak tek başına `if` yeterlidir." },
        { "wrong": "Girintileme sadece görsel güzellik içindir, kodun çalışmasını etkilemez.", "correct": "C++ veya Java'da süslü parantez kullanılırken, Python'da girintileme dilin bizzat sözdizimi kuralıdır!" }
      ]
    },
    "quiz": {
      "question": "Python'da bir `if` veya `else` satırının hemen sonuna hangi işaretin konulması zorunludur?",
      "options": [
        { "text": "A) Noktalı Virgül (;)", "isCorrect": False },
        { "text": "B) İki Nokta Üst Üste (:)", "isCorrect": True },
        { "text": "C) Süslü Parantez ({)", "isCorrect": False },
        { "text": "D) Ok İşareti (->)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Python'da blok başlatan tüm bileşik ifadelerin (`if`, `else`, `elif`, `for`, `while`, `def`) sonuna iki nokta üst üste (`:`) konulur."
    },
    "summary": {
      "keyPoints": [
        "`if` ve `else` programlara zeka ve şartlı karar verme yetisi katar.",
        "Girintileme (Indentation) Python'un yapı taşıdır; kod bloklarını tanımlar.",
        "Koşul doğruysa `if` bloğu, yanlışsa `else` bloğu çalışır."
      ],
      "nextWeek": "Çok Yönlü Koşullar: `elif` Merdiveni ve İç İçe (Nested) Karar Yapıları",
      "homework": "Kullanıcının girdiği bir sayının pozitif mi yoksa negatif mi olduğunu `if-else` ile bulan bir program yazınız."
    }
  },
  # Hafta 24
  {
    "week": 24,
    "date": "22 - 28 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Python ile Karar ve Döngü Yapıları",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "Çok Yönlü Koşullar: elif & İç İçe if",
    "subtitle": "elif Merdiveni, Çoklu Olasılık Yönetimi ve İç İçe (Nested) Karar Yapıları",
    "outcomeCode": "BB.9.4.3",
    "targetSkill": "Çok Kriterli Karar Algoritmaları Tasarımı",
    "curiosityQuestion": "Bir sınav notunu harf notuna (A, B, C, D, F) çevirirken neden 5 tane ayrı ayrı `if` yazmak yerine `elif` merdiveni kullanmalıyız?",
    "roadmap": [
      { "title": "İkiden Fazla Olasılık", "desc": "Sadece Evet/Hayır yetmediğinde devreye giren çoklu dallanma." },
      { "title": "elif (else-if) Mantığı", "desc": "Önceki şart yanlışsa sıradaki şartı kontrol eden verimli basamak." },
      { "title": "Merdiven Çalışma Prensibi", "desc": "Doğru olan ilk `elif` çalıştığında diğer tüm basamakların otomatik atlanması." },
      { "title": "İç İçe (Nested) Koşullar", "desc": "Bir `if` bloğunun içinde başka bir `if` bloğu barındırma mimarisi." }
    ],
    "section1": {
      "title": "elif Merdiveninin Altın Kuralı",
      "subtitle": "Ayrı ayrı if'ler ile elif arasındaki hayati performans ve mantık farkı",
      "cards": [
        {
          "title": "Neden elif?",
          "icon": "🪜",
          "desc": "Ayrı `if` yazılırsa bilgisayar hepsiyle tek tek uğraşır; `elif` ise doğruyu bulunca durur.",
          "items": [
            { "bold": "Zincirleme Bağlantı", "text": "Merdivenin basamakları birbirine bağlıdır; yukarıdaki sağlandıysa aşağıdakiler kontrol bile edilmez." },
            { "bold": "Sıralama Önemlidir", "text": "Koşulları en özelden en genele veya büyükten küçüğe doğru mantıksal sırayla dizmelisiniz." },
            { "bold": "Son Çare: else", "text": "Hiçbir `if` ve `elif` tutmazsa en alttaki `else` devreye girer." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Not Değerlendirme ve Harf Notu Algoritması",
      "subtitle": "85+ Pekiyi, 70+ İyi, 55+ Orta, 50+ Geçer, Altı Kaldı",
      "codeSnippet": "# Sınav Notu Harf Sistemi\npuan = int(input(\"Notunuzu giriniz (0-100): \"))\n\nif puan >= 85:\n    harf = \"A (Pekiyi)\"\nelif puan >= 70:\n    harf = \"B (İyi)\"\nelif puan >= 55:\n    harf = \"C (Orta)\"\nelif puan >= 50:\n    harf = \"D (Geçer)\"\nelse:\n    harf = \"F (Kaldı)\"\n\nprint(f\"Sonucunuz: {harf}\")",
      "codeTitle": "not_degerlendir.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "İç İçe if (Nested)", "title": "Koşul İçinde Koşul", "desc": "Örneğin önce kullanıcının oturum açıp açmadığı denetlenir; açtıysa yetkisi (admin mi, öğrenci mi) kontrol edilir.", "items": [{ "bold": "Girinti Derinliği", "text": "Her iç içe blokta girinti 4 boşluk daha içeri kayar (8 boşluk, 12 boşluk)." }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Bankamatik (ATM) Menü ve Bakiye Sistemi",
      "subtitle": "Kullanıcının seçimine (1: Bakiye, 2: Para Yatır, 3: Para Çek, 4: Çıkış) göre işlem yapan program",
      "steps": [
        { "title": "1. Menüyü Bas", "desc": "Kullanıcıya 4 seçenekli konsol menüsünü yazdırın." },
        { "title": "2. Seçimi Oku", "desc": "`secim = input(\"İşleminiz (1-4): \")` ile tercihi alın." },
        { "title": "3. elif Merdiveni Kur", "desc": "`if secim == '1':` ... `elif secim == '2':` adımlarını kurgulayın." },
        { "title": "4. İç İçe Kontrol Ekle", "desc": "Para çekerken `if cekilecek <= bakiye:` kontrolüyle eksiye düşmeyi önleyin." }
      ],
      "criteria": [
        "`if-elif-else` yapısını mantıksal çelişki olmadan kurgulama",
        "Kullanıcı menü dışı bir değer (Örn: 9) girdiğinde `else` ile uyarı verme",
        "İç içe koşullarda doğru girintileme düzeyini koruma"
      ]
    },
    "tips": {
      "safetyTitle": "Çoklu Koşullarda Sıralama Tuzakları",
      "safetyRules": [
        { "bold": "Büyük Sayıyı Başa Koyun", "text": "Not sisteminde `if puan >= 50:` başa konursa, 90 alan öğrenci bile 'Geçer' alır ve durur; büyükten küçüğe sıralayın!" },
        { "bold": "Aşırı İç İçe Yapılardan Kaçının", "text": "3-4 kattan fazla iç içe `if` yazmak kodun okunabilirliğini bozar; bunun yerine `and` ile birleştirin." },
        { "bold": "Sınır Değerleri Test Edin", "text": "50, 70, 85 gibi tam sınır noktalarını test ederek `>=` mi yoksa `>` mı olması gerektiğini doğrulayın." }
      ],
      "myths": [
        { "wrong": "Bir `elif` bloğu doğru olursa altındaki diğer `elif` blokları da çalışır.", "correct": "Merdivende DOĞRU çıkan ilk blok çalışır ve tüm merdiven anında sonlanır." },
        { "wrong": "İstediğimiz kadar `elif` yazamayız, sınırı 3 tanedir.", "correct": "Bir `if` yapısının altına yüzlerce `elif` eklenebilir, hiçbir teknik sınır yoktur." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında `notu = 75` iken ekrana ne yazdırılır?\n```python\nif notu >= 50:\n    print(\"Geçti\")\nelif notu >= 70:\n    print(\"İyi\")\n```",
      "options": [
        { "text": "A) İyi", "isCorrect": False },
        { "text": "B) Geçti", "isCorrect": True },
        { "text": "C) Hem Geçti hem İyi", "isCorrect": False },
        { "text": "D) Hata verir", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. 75 sayısı 50'den büyük olduğu için ilk `if` koşulu sağlanır, ekrana 'Geçti' yazar ve merdiven biter. `elif notu >= 70` satırına hiç sıra gelmez! (Sıralama hatası örneği)."
    },
    "summary": {
      "keyPoints": [
        "`elif`, ikiden fazla alternatifin olduğu durumlarda kullanılır.",
        "Merdiven ilk doğru koşulu yakaladığında diğer tüm basamakları atlar.",
        "Koşulların diziliş sırası programın doğruluğu için hayati önem taşır."
      ],
      "nextWeek": "`for` Döngüsü, `range()` Fonksiyonu ve Adımlı Tekrarlar",
      "homework": "Kullanıcının girdiği hava sıcaklığına göre (0 altı: Don, 0-15: Soğuk, 15-25: Ilık, 25+: Sıcak) kıyafet öneren bir program yazınız."
    }
  },
  # Hafta 25
  {
    "week": 25,
    "date": "01 - 07 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Python ile Karar ve Döngü Yapıları",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "for Döngüsü & range() Fonksiyonu",
    "subtitle": "Tekrarlı İşlemler, Sayaç Mantığı, range(başla, bitir, adım) ve Döngü Mimarisi",
    "outcomeCode": "BB.9.4.4",
    "targetSkill": "Döngüsel Modelleme & Otomasyon",
    "curiosityQuestion": "Ekrana 10.000 kez adınızı yazdırmak için 10.000 satır kod yazmak yerine sadece 2 satırla bu işi bilgisayara nasıl yaptırabilirsiniz?",
    "roadmap": [
      { "title": "Neden Döngü (Loop)?", "desc": "Kendini tekrar eden amele işlerini bilgisayarın işlemci hızına devretme." },
      { "title": "for Döngüsü Mantığı", "desc": "Belirli bir sayıda veya bir listenin üzerinde adım adım gezinme." },
      { "title": "range() Fonksiyonu", "desc": "`range(dur)`, `range(basla, dur)` ve `range(basla, dur, adim)` parametreleri." },
      { "title": "Toplam ve Sayaç Değişkenleri", "desc": "Döngü içinde değer biriktirme (`toplam += i`) tekniği." }
    ],
    "section1": {
      "title": "range() Fonksiyonunun 3 Farklı Kullanımı",
      "subtitle": "Son değerin DAHİL OLMADIĞI altın kuralı",
      "cards": [
        {
          "title": "range() Parametreleri",
          "icon": "🔄",
          "desc": "Sayı dizisi üreten sihirli fonksiyon.",
          "items": [
            { "bold": "1. range(5)", "text": "0'dan başlar, 5'e kadar (5 hariç): `0, 1, 2, 3, 4` sayılarını üretir (tam 5 tekrar)." },
            { "bold": "2. range(10, 20)", "text": "10'dan başlar, 20'ye kadar (20 hariç): `10, 11, ..., 19` üretir." },
            { "bold": "3. range(0, 50, 5)", "text": "0'dan başlar, 5'er 5'er 50'ye kadar: `0, 5, 10, 15, ..., 45` üretir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sayaç ve Toplam Biriktirme Mantığı",
      "subtitle": "1'den 100'e kadar olan sayıların toplamını hesaplama",
      "codeSnippet": "# 1'den 100'e kadar sayıların toplamı\ntoplam = 0\nfor sayi in range(1, 101): # 101 hariç, 100 dahil!\n    toplam += sayi # toplam = toplam + sayi\n\nprint(f\"1'den 100'e kadar toplam: {toplam}\")\n# Gauss formülü sonucu: 5050\n\n# Geriye doğru sayım:\nfor s in range(10, 0, -1):\n    print(s, end=\" \")\nprint(\"Ateşle! 🚀\")",
      "codeTitle": "for_dongusu.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Döngü Değişkeni", "title": "Geçici İsim (i / sayi)", "desc": "Döngü her döndüğünde değişken sıradaki sayının değerini alır; döngü bitince görevi biter.", "items": [{ "bold": "Adım Sayısı", "text": "Geriye doğru saymak için adım parametresi negatif (`-1`) verilmelidir." }] }
      ]
    },
    "workshop": {
      "title": "İnteraktif Çarpım Tablosu ve Sayı İstatistik Aracı",
      "subtitle": "Kullanıcının istediği sayının çarpım tablosunu ekrana düzenli basan for döngüsü",
      "steps": [
        { "title": "1. Sayıyı Al", "desc": "`sayi = int(input(\"Hangi sayının çarpım tablosu? (1-10): \"))` yazın." },
        { "title": "2. for Döngüsü Kur", "desc": "`for i in range(1, 11):` ile 1'den 10'a kadar döngü açın." },
        { "title": "3. Çarpımı Yazdır", "desc": "f-string ile `f\"{sayi} x {i} = {sayi * i}\"` satırını ekrana basın." },
        { "title": "4. Çift Sayı Filtresi Ekle", "desc": "Sadece çift adımları yazdıracak şekilde `if (sayi * i) % 2 == 0:` şartını ekleyin." }
      ],
      "criteria": [
        "`range()` bitiş değerinin dahil olmadığını dikkate alma",
        "Döngü değişkenini hesaplamalarda etkin kullanabilme",
        "Döngü içinde girintileme kuralını koruma"
      ]
    },
    "tips": {
      "safetyTitle": "for Döngüsünde En Çok Yapılan Hatalar",
      "safetyRules": [
        { "bold": "Bitiş Değeri Dahil Değildir (Off-by-one)", "text": "10'a kadar dönmek için `range(1, 11)` yazmalısınız; `range(1, 10)` yazarsanız 9'da durur." },
        { "bold": "Toplam Değişkenini Döngüden Önce Sıfırlayın", "text": "`toplam = 0` satırını döngünün içine yazarsanız her adımda sıfırlanır ve birikmez." },
        { "bold": "Döngü Değişkenini İçeride Manuel Değiştirmeyin", "text": "for döngüsünde `i = i + 1` yazmanıza gerek yoktur, Python bunu otomatik yapar." }
      ],
      "myths": [
        { "wrong": "`range(5)` komutu 1'den başlar ve 5'e kadar gider.", "correct": "Bilgisayar biliminde sayma daima 0'dan başlar! `range(5)` -> `0, 1, 2, 3, 4` üretir." },
        { "wrong": "for döngüsü sadece sayılar üzerinde çalışır.", "correct": "for döngüsü metinler (harf harf), listeler ve dosyalar üzerinde de adım adım gezinir." }
      ]
    },
    "quiz": {
      "question": "Python'da `for i in range(2, 10, 3): print(i, end=\" \")` kodunun ekran çıktısı aşağıdakilerden hangisidir?",
      "options": [
        { "text": "A) 2 5 8", "isCorrect": True },
        { "text": "B) 2 5 8 11", "isCorrect": False },
        { "text": "C) 3 6 9", "isCorrect": False },
        { "text": "D) 2 4 6 8 10", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: A. 2'den başlar, 3'er artar: 2, 5, 8. Bir sonraki adım 11 olurdu fakat 10 sınırını aştığı için döngü 8'de durur."
    },
    "summary": {
      "keyPoints": [
        "`for` döngüsü tekrarlı görevleri otomatize eden en güçlü araçtır.",
        "`range(başlangıç, bitiş, adım)` sayı serileri üretir; bitiş değeri hariçtir.",
        "Sayaç ve toplam değişkenleri döngü öncesinde başlatılmalıdır."
      ],
      "nextWeek": "2. Dönem Ara Tatil: Python Kodlama Atölyesi, Algoritmik Meydan Okumalar & Hata Ayıklama",
      "homework": "1'den 50'ye kadar olan tek sayıların toplamını `for` döngüsü kullanarak hesaplayıp ekrana yazdırınız."
    }
  }
]

print(f"Hafta 20-25 tamamlandı.")
