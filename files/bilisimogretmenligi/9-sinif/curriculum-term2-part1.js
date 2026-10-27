/**
 * MEB 9. Sınıf Bilgisayar Bilimi (Kur 1) - 2. Dönem 1. Kısım (Hafta 20 - 31)
 * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART1 = [
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
      {
        "title": "Kış Kodlama Meydan Okumaları",
        "desc": "Her güne 1 mini algoritma problemi çözme alışkanlığı."
      },
      {
        "title": "Çevrimiçi Kodlama Platformları",
        "desc": "HackerRank, Codewars ve Project Euler ile seviye atlama."
      },
      {
        "title": "Mantık ve Strateji Oyunları",
        "desc": "Satranç, Go ve zeka bulmacalarının kodlama zihnine faydaları."
      },
      {
        "title": "2. Dönem Ön Hazırlığı",
        "desc": "Koşullu durumlar ve karar algoritmalarına merak uyandırıcı bakış."
      }
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
            {
              "bold": "Pomodoro Tekniği",
              "text": "25 dakika odaklanarak kod yazın, 5 dakika mola verin; zihniniz hep taze kalsın."
            },
            {
              "bold": "Hata Yapmaktan Korkmayın",
              "text": "En iyi yazılımcılar en çok hata (bug) çözen ve pes etmeyenlerdir."
            },
            {
              "bold": "Kendi Fikirlerinizi Deneyin",
              "text": "Sadece derste gördüklerinizle yetinmeyin; aklınıza gelen ilginç fikirleri kodlamayı deneyin."
            }
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
        {
          "badge": "Rastgelelik",
          "title": "random Modülü",
          "desc": "Oyunlarda ve yapay zekâda zar atma veya şans faktörü `random` kütüphanesiyle sağlanır.",
          "items": [
            {
              "bold": "randint(1, 6)",
              "text": "1 ile 6 dahil olmak üzere rastgele tam sayı üretir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Ev Çalışması: Şanslı Sayı ve Günlük Skor Programı",
      "subtitle": "Tatil boyunca ailenizle oynayabileceğiniz basit bir şans oyunu tasarlama",
      "steps": [
        {
          "title": "1. Fikir Belirle",
          "desc": "İki oyuncunun arka arkaya zar attığı ve yüksek atanının kazandığı bir kurgu yapın."
        },
        {
          "title": "2. Kodunu Yaz",
          "desc": "`random.randint()` kullanarak her oyuncuya rastgele puan verin."
        },
        {
          "title": "3. Sonucu Duyur",
          "desc": "f-string formatı ile kazananı ekrana afiş gibi basın."
        },
        {
          "title": "4. Portfolyona Ekle",
          "desc": "Kod dosyasını `tatil_projelerim` klasörüne kaydedin."
        }
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
        {
          "bold": "20-20-20 Kuralı",
          "text": "Her 20 dakikada bir, 20 saniye boyunca 20 fit (6 metre) uzağa bakarak gözlerinizi dinlendirin."
        },
        {
          "bold": "Doğru Duruş (Ergonomi)",
          "text": "Monitör göz hizasında olmalı, sırtınız dik ve kollarınız 90 derece bükülü durmalıdır."
        },
        {
          "bold": "Açık Havayı Unutmayın",
          "text": "Ekran başından kalkıp spor yapmak ve temiz hava almak zihinsel üretkenliğinizi ikiye katlar."
        }
      ],
      "myths": [
        {
          "wrong": "Yazılımcılar günde 18 saat aralıksız kod yazmalıdır.",
          "correct": "Sürekli ekrana bakmak tükenmişliğe yol açar; en yaratıcı algoritmik çözümler dinlenmiş zihinle üretilir."
        },
        {
          "wrong": "Tatil ödevleri ve bültenler puan almak için zorunlu eziyettir.",
          "correct": "Bültenler gençlerin kendi tutkularıyla özgür projeler geliştirmesi için rehberdir."
        }
      ]
    },
    "quiz": {
      "question": "Python'da 1 ile 100 arasında (her ikisi de dahil) rastgele bir tam sayı üretmek için hangi komut kullanılır?",
      "options": [
        {
          "text": "A) random.range(1, 100)",
          "isCorrect": false
        },
        {
          "text": "B) random.randint(1, 100)",
          "isCorrect": true
        },
        {
          "text": "C) math.random(1, 100)",
          "isCorrect": false
        },
        {
          "text": "D) int(random() * 100)",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(99, 102, 241, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"40\" y=\"40\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n          <text x=\"90\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Girdi</text>\n          <text x=\"90\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Parametreler (x, y)</text>\n          \n          <line x1=\"140\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#00f0ff\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"180\" y=\"30\" width=\"140\" height=\"90\" rx=\"10\" fill=\"#162038\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n          <text x=\"250\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#c084fc\">def topla(a, b):</text>\n          <text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">sonuc = a + b</text>\n          <text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#34d399\">return sonuc</text>\n          \n          <line x1=\"320\" y1=\"70\" x2=\"360\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"340\" y=\"40\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n          <text x=\"370\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#34d399\">Çıktı</text>\n          <text x=\"370\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Sonuç</text>\n          \n          <!-- Hata Yönetimi try-except -->\n          <rect x=\"40\" y=\"150\" width=\"340\" height=\"115\" rx=\"8\" fill=\"#111827\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">İstisna Yönetimi: try / except</text>\n          <text x=\"210\" y=\"200\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">try: sayi = int(input()) except ValueError: print(\"Hata!\")</text>\n          <text x=\"210\" y=\"225\" text-anchor=\"middle\" font-size=\"10\" fill=\"#cbd5e1\">Programın aniden çökmesini önler, güvenli çalışma sağlar.</text>\n          <text x=\"210\" y=\"245\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Temiz Kod | Modülerlik | Tekrar Kullanılabilirlik</text>\n        </svg>"
  },
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
      {
        "title": "Veri Bilimi Nedir?",
        "desc": "Ham veriyi toplayıp temizleme, analiz etme ve karar üretme sanatı."
      },
      {
        "title": "Grafiklerin Gücü",
        "desc": "Çizgi grafik, sütun grafik ve pasta grafik kullanım alanları."
      },
      {
        "title": "Python Veri Kütüphaneleri",
        "desc": "Matplotlib, Seaborn ve Pandas dünyasına giriş vizyonu."
      },
      {
        "title": "Bilişimde Yeni Kariyerler",
        "desc": "Veri Bilimci, Yapay Zekâ Mühendisi, Siber Güvenlik Analisti."
      }
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
            {
              "bold": "Trend Tespiti",
              "text": "Hisselerin, sıcaklıkların veya kullanıcı sayısının zaman içindeki artışını görme."
            },
            {
              "bold": "Aykırı Değerler (Anomalies)",
              "text": "Siber saldırı veya sahtekarlık anındaki olağandışı veri sıçramalarını yakalama."
            },
            {
              "bold": "Doğru İletişim",
              "text": "Karmaşık teknik raporları yöneticilere ve halka anlaşılır grafiklerle sunma."
            }
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
        {
          "badge": "Kariyer",
          "title": "Yapay Zekâ ve Veri",
          "desc": "Gelecekte kod yazmayı bilen değil, veriyi anlayıp yapay zekâyı doğru yönlendiren uzmanlar fark yaratacak.",
          "items": [
            {
              "bold": "Problem Çözücü",
              "text": "Teknoloji değiştikçe değişmeyen tek şey algoritmik mantık gücüdür."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kendi Günlük Ekran Süresi Grafiğini Çıkarma",
      "subtitle": "Telefon veya bilgisayarda son 7 günde harcanan saatleri toplayıp konsolda çubuk grafik çizdirme",
      "steps": [
        {
          "title": "1. Veriyi Topla",
          "desc": "Son 7 günün günlük telefon/bilgisayar kullanım saatlerini bir liste olarak not edin."
        },
        {
          "title": "2. ASCII Çubukları Yap",
          "desc": "Her saat için konsola `\"■\"` karakteri basan bir gösterim tasarlayın."
        },
        {
          "title": "3. Ortalama Hesapla",
          "desc": "Haftalık toplam süreyi 7'ye bölerek günlük ortalama ekran sürenizi bulun."
        },
        {
          "title": "4. Karar Üret",
          "desc": "Eğer ortalama 4 saatten fazlaysa haftalık detoks planı yapın."
        }
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
        {
          "bold": "Grafik Eksenlerine Dikkat Edin",
          "text": "Y ekseni sıfırdan başlamayan grafikler küçük farkları devasa gibi göstererek yanıltabilir."
        },
        {
          "bold": "Kaynak Güvenilirliği",
          "text": "Sosyal medyada paylaşılan her infografiğin veri kaynağını (TÜİK, WHO, MEB vb.) kontrol edin."
        },
        {
          "bold": "Kendi Verinizi Koruyun",
          "text": "Ücretsiz veri analizi sitelerine kişisel veya gizli dosyalarınızı yüklemeyin."
        }
      ],
      "myths": [
        {
          "wrong": "Veri analitiği sadece bankalar ve finansçılar içindir.",
          "correct": "Futbol takımlarının maç analizinden doktorların kanser araştırmasına kadar her alan veri analitiğiyle çalışır."
        },
        {
          "wrong": "Yapay zekâ çıktığı için insan analistlere ihtiyaç kalmayacaktır.",
          "correct": "Yapay zekânın ürettiği veriyi yorumlayacak ve etik kararlar alacak bilinçli insanlara her zamankinden çok ihtiyaç vardır."
        }
      ]
    },
    "quiz": {
      "question": "Verilerin zaman içerisindeki artış, azalış ve değişim trendini en net ve anlaşılır biçimde göstermek için hangi grafik türü tercih edilir?",
      "options": [
        {
          "text": "A) Pasta Grafik (Pie Chart)",
          "isCorrect": false
        },
        {
          "text": "B) Çizgi Grafik (Line Chart)",
          "isCorrect": true
        },
        {
          "text": "C) Radar Grafik",
          "isCorrect": false
        },
        {
          "text": "D) Kabarcık Grafik",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(99, 102, 241, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"40\" y=\"40\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n          <text x=\"90\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Girdi</text>\n          <text x=\"90\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Parametreler (x, y)</text>\n          \n          <line x1=\"140\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#00f0ff\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"180\" y=\"30\" width=\"140\" height=\"90\" rx=\"10\" fill=\"#162038\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n          <text x=\"250\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#c084fc\">def topla(a, b):</text>\n          <text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">sonuc = a + b</text>\n          <text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#34d399\">return sonuc</text>\n          \n          <line x1=\"320\" y1=\"70\" x2=\"360\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"340\" y=\"40\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n          <text x=\"370\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#34d399\">Çıktı</text>\n          <text x=\"370\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Sonuç</text>\n          \n          <!-- Hata Yönetimi try-except -->\n          <rect x=\"40\" y=\"150\" width=\"340\" height=\"115\" rx=\"8\" fill=\"#111827\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">İstisna Yönetimi: try / except</text>\n          <text x=\"210\" y=\"200\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">try: sayi = int(input()) except ValueError: print(\"Hata!\")</text>\n          <text x=\"210\" y=\"225\" text-anchor=\"middle\" font-size=\"10\" fill=\"#cbd5e1\">Programın aniden çökmesini önler, güvenli çalışma sağlar.</text>\n          <text x=\"210\" y=\"245\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Temiz Kod | Modülerlik | Tekrar Kullanılabilirlik</text>\n        </svg>"
  },
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
      {
        "title": "Atama (=) vs Karşılaştırma (==)",
        "desc": "Değer yükleme ile eşitlik sorgulama arasındaki hayati fark."
      },
      {
        "title": "6 Karşılaştırma Operatörü",
        "desc": "`==`, `!=` (eşit değil), `<`, `>`, `<=`, `>=`."
      },
      {
        "title": "Mantıksal Operatörler",
        "desc": "`and` (ve), `or` (veya), `not` (değil) ile bileşik şartlar kurma."
      },
      {
        "title": "Operatör Önceliği",
        "desc": "Aritmetik > Karşılaştırma > Mantıksal işlem sırası."
      }
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
            {
              "bold": "== (Eşit mi?)",
              "text": "`5 == 5` -> `True`, `5 == 4` -> `False`"
            },
            {
              "bold": "!= (Eşit değil mi?)",
              "text": "`10 != 20` -> `True`, `10 != 10` -> `False`"
            },
            {
              "bold": ">= ve <=",
              "text": "Büyük eşit ve küçük eşit kontrolleri: `18 >= 18` -> `True`."
            }
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
        {
          "badge": "Dikkat!",
          "title": "Tek Eşittir (=) Hatası",
          "desc": "`if x = 5` yazmak sözdizimi hatasıdır (SyntaxError); atama değil karşılaştırma için mutlaka `==` kullanılmalıdır.",
          "items": [
            {
              "bold": "Zincirleme Karşılaştırma",
              "text": "Python'da `10 < x < 20` şeklinde doğrudan aralık yazılabilir!"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kullanıcı Girişi ve İndirim Hak Ediş Doğrulama Aracı",
      "subtitle": "Kullanıcının girdiği yaş ve öğrenci durumuna göre boolean sonuçlar üreten program",
      "steps": [
        {
          "title": "1. Girdileri Oku",
          "desc": "`yas = int(input(\"Yaşınız: \"))` ve `ogrenci_mi = input(\"Öğrenci misiniz? (e/h): \")` yazın."
        },
        {
          "title": "2. Şartı Kurgula",
          "desc": "`ucretsiz_ulasim = (yas < 7) or (yas >= 65)` boolean ifadesini kurun."
        },
        {
          "title": "3. İndirim Şartı",
          "desc": "`indirimli = (ogrenci_mi == 'e') and (yas < 25)` mantığını yazın."
        },
        {
          "title": "4. Sonuçları Bas",
          "desc": "f-string ile kullanıcının haklarını konsola `True`/`False` olarak yazdırın."
        }
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
        {
          "bold": "Float Sayılarda Eşitlik Tehlikesi",
          "text": "`0.1 + 0.2 == 0.3` sonucu Python'da `False` döner! (Kayan nokta hassasiyeti sebebiyle `round()` kullanın)."
        },
        {
          "bold": "Metin Karşılaştırmalarında Büyük/Küçük Harf",
          "text": "`\"ali\" == \"Ali\"` sonucu `False`'tur; karşılaştırmadan önce `.lower()` uygulayın."
        },
        {
          "bold": "Boole Değişkenleri Sade Kullanın",
          "text": "`if aktif == True:` yerine sadece `if aktif:` yazmak daha profesyoneldir."
        }
      ],
      "myths": [
        {
          "wrong": "Python'da `and` ve `or` yerine `&&` ve `||` kullanılır.",
          "correct": "C++ ve Java'da `&&` kullanılırken Python sade İngilizce kelimeleri (`and`, `or`, `not`) benimsemiştir."
        },
        {
          "wrong": "Bir karşılaştırma ifadesi sadece `if` içinde yazılabilir.",
          "correct": "Karşılaştırmalar bağımsız bir değişkene atanabilir (`sonuc = x > 10`) ve boolean değer üretir."
        }
      ]
    },
    "quiz": {
      "question": "Python'da `x = 10` olduğuna göre `(x > 5) and not(x == 10)` ifadesinin sonucu nedir?",
      "options": [
        {
          "text": "A) True",
          "isCorrect": false
        },
        {
          "text": "B) False",
          "isCorrect": true
        },
        {
          "text": "C) None",
          "isCorrect": false
        },
        {
          "text": "D) SyntaxError",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(56, 189, 248, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"150\" y=\"30\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#00f0ff\" stroke-width=\"2\"/>\n          <text x=\"210\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#00f0ff\">if puan &gt;= 85:</text>\n          \n          <line x1=\"210\" y1=\"70\" x2=\"310\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"2\"/>\n          <text x=\"270\" y=\"90\" font-size=\"10\" fill=\"#34d399\">True</text>\n          <rect x=\"260\" y=\"120\" width=\"110\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n          <text x=\"315\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Pekiyi (5)\")</text>\n          \n          <line x1=\"210\" y1=\"70\" x2=\"110\" y2=\"120\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"90\" font-size=\"10\" fill=\"#fbbf24\">False</text>\n          <rect x=\"50\" y=\"120\" width=\"130\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\"/>\n          <text x=\"115\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-family=\"monospace\" fill=\"#fbbf24\">elif puan &gt;= 50:</text>\n          \n          <line x1=\"115\" y1=\"160\" x2=\"175\" y2=\"210\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"210\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n          <text x=\"175\" y=\"235\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Geçti\")</text>\n          \n          <line x1=\"115\" y1=\"160\" x2=\"55\" y2=\"210\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n          <rect x=\"15\" y=\"210\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#ef4444\"/>\n          <text x=\"60\" y=\"235\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Kaldı\")</text>\n        </svg>"
  },
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
      {
        "title": "Programın Karar Verme Gücü",
        "desc": "Doğrusal akıştan şartlara göre yön değiştiren akıllı programlara geçiş."
      },
      {
        "title": "if Bloğu Yapısı",
        "desc": "`if koşul:` sözdizimi, iki nokta üst üste (`:`) ve blok kavramı."
      },
      {
        "title": "Girintileme (Indentation)",
        "desc": "4 boşluk veya 1 TAB standardı; IndentationError ile başa çıkma."
      },
      {
        "title": "else Bloğu",
        "desc": "Koşul sağlanmadığında (False durumunda) çalışacak alternatif yol."
      }
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
            {
              "bold": "1. if anahtar kelimesi",
              "text": "Koşul ifadesini başlatır (`if notu >= 50:`)."
            },
            {
              "bold": "2. İki Nokta (:)",
              "text": "Koşulun bittiğini ve içeriye girileceğini belirtir; unutulursa SyntaxError verir."
            },
            {
              "bold": "3. 4 Boşluk Girinti",
              "text": "Koşul doğru olduğunda çalışacak komutlar mutlaka 4 boşluk içeriden başlamalıdır."
            },
            {
              "bold": "4. else alternatifi",
              "text": "Koşul False olduğunda devreye girer; kendi koşulu olmaz, doğrudan `:` alır."
            }
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
        {
          "badge": "Blok Mantığı",
          "title": "Hangi Kod Ne Zaman Çalışır?",
          "desc": "Girintili kodlar sadece ait oldukları koşul sağlanınca çalışır; girintisiz satırlar ise koşuldan bağımsız ana akışta çalışır.",
          "items": [
            {
              "bold": "IndentationError",
              "text": "Boşluk sayılarının uyumsuzluğunda Python'un verdiği hatadır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Ehliyet ve Yaş Uygunluk Denetleyicisi",
      "subtitle": "Kullanıcıdan yaşını alıp ehliyet alıp alamayacağını, alamıyorsa kaç yılı kaldığını söyleyen program",
      "steps": [
        {
          "title": "1. Yaşı Oku",
          "desc": "`yas = int(input(\"Yaşınızı giriniz: \"))` ile tamsayı girdi alın."
        },
        {
          "title": "2. if Koşulunu Kur",
          "desc": "`if yas >= 18:` şartını yazıp altına tebrik mesajı ekleyin."
        },
        {
          "title": "3. else Bloğu",
          "desc": "Kalan yılı hesaplayın: `kalan = 18 - yas` ve `f\"{kalan} yıl sonra başvurabilirsiniz.\"` yazdırın."
        },
        {
          "title": "4. Test Et",
          "desc": "18, 15 ve 25 yaş değerleriyle her iki kolun doğru çalıştığını doğrulayın."
        }
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
        {
          "bold": "İki Noktayı Asla Unutmayın",
          "text": "`if yas >= 18` satırının sonuna `:` koymamak yeni başlayanların en sık yaptığı hatadır."
        },
        {
          "bold": "TAB ile Boşluğu Karıştırmayın",
          "text": "Bazı editörlerde TAB ile boşluk karakteri farklı yorumlanabilir; VS Code'da daima 4 boşluk kullanın."
        },
        {
          "bold": "else Asla Tek Başına Çalışmaz",
          "text": "Her `else` mutlaka kendinden önceki bir `if` bloğuna bağlı olmak zorundadır."
        }
      ],
      "myths": [
        {
          "wrong": "Her `if` bloğunun arkasından mutlaka bir `else` gelmek zorundadır.",
          "correct": "Hayır; `else` zorunlu değildir. Sadece koşul sağlanınca bir şey yapmak istiyorsak tek başına `if` yeterlidir."
        },
        {
          "wrong": "Girintileme sadece görsel güzellik içindir, kodun çalışmasını etkilemez.",
          "correct": "C++ veya Java'da süslü parantez kullanılırken, Python'da girintileme dilin bizzat sözdizimi kuralıdır!"
        }
      ]
    },
    "quiz": {
      "question": "Python'da bir `if` veya `else` satırının hemen sonuna hangi işaretin konulması zorunludur?",
      "options": [
        {
          "text": "A) Noktalı Virgül (;)",
          "isCorrect": false
        },
        {
          "text": "B) İki Nokta Üst Üste (:)",
          "isCorrect": true
        },
        {
          "text": "C) Süslü Parantez ({)",
          "isCorrect": false
        },
        {
          "text": "D) Ok İşareti (->)",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(56, 189, 248, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"150\" y=\"30\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#00f0ff\" stroke-width=\"2\"/>\n          <text x=\"210\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#00f0ff\">if puan &gt;= 85:</text>\n          \n          <line x1=\"210\" y1=\"70\" x2=\"310\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"2\"/>\n          <text x=\"270\" y=\"90\" font-size=\"10\" fill=\"#34d399\">True</text>\n          <rect x=\"260\" y=\"120\" width=\"110\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n          <text x=\"315\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Pekiyi (5)\")</text>\n          \n          <line x1=\"210\" y1=\"70\" x2=\"110\" y2=\"120\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"90\" font-size=\"10\" fill=\"#fbbf24\">False</text>\n          <rect x=\"50\" y=\"120\" width=\"130\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\"/>\n          <text x=\"115\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-family=\"monospace\" fill=\"#fbbf24\">elif puan &gt;= 50:</text>\n          \n          <line x1=\"115\" y1=\"160\" x2=\"175\" y2=\"210\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"210\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n          <text x=\"175\" y=\"235\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Geçti\")</text>\n          \n          <line x1=\"115\" y1=\"160\" x2=\"55\" y2=\"210\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n          <rect x=\"15\" y=\"210\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#ef4444\"/>\n          <text x=\"60\" y=\"235\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Kaldı\")</text>\n        </svg>"
  },
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
      {
        "title": "İkiden Fazla Olasılık",
        "desc": "Sadece Evet/Hayır yetmediğinde devreye giren çoklu dallanma."
      },
      {
        "title": "elif (else-if) Mantığı",
        "desc": "Önceki şart yanlışsa sıradaki şartı kontrol eden verimli basamak."
      },
      {
        "title": "Merdiven Çalışma Prensibi",
        "desc": "Doğru olan ilk `elif` çalıştığında diğer tüm basamakların otomatik atlanması."
      },
      {
        "title": "İç İçe (Nested) Koşullar",
        "desc": "Bir `if` bloğunun içinde başka bir `if` bloğu barındırma mimarisi."
      }
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
            {
              "bold": "Zincirleme Bağlantı",
              "text": "Merdivenin basamakları birbirine bağlıdır; yukarıdaki sağlandıysa aşağıdakiler kontrol bile edilmez."
            },
            {
              "bold": "Sıralama Önemlidir",
              "text": "Koşulları en özelden en genele veya büyükten küçüğe doğru mantıksal sırayla dizmelisiniz."
            },
            {
              "bold": "Son Çare: else",
              "text": "Hiçbir `if` ve `elif` tutmazsa en alttaki `else` devreye girer."
            }
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
        {
          "badge": "İç İçe if (Nested)",
          "title": "Koşul İçinde Koşul",
          "desc": "Örneğin önce kullanıcının oturum açıp açmadığı denetlenir; açtıysa yetkisi (admin mi, öğrenci mi) kontrol edilir.",
          "items": [
            {
              "bold": "Girinti Derinliği",
              "text": "Her iç içe blokta girinti 4 boşluk daha içeri kayar (8 boşluk, 12 boşluk)."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Bankamatik (ATM) Menü ve Bakiye Sistemi",
      "subtitle": "Kullanıcının seçimine (1: Bakiye, 2: Para Yatır, 3: Para Çek, 4: Çıkış) göre işlem yapan program",
      "steps": [
        {
          "title": "1. Menüyü Bas",
          "desc": "Kullanıcıya 4 seçenekli konsol menüsünü yazdırın."
        },
        {
          "title": "2. Seçimi Oku",
          "desc": "`secim = input(\"İşleminiz (1-4): \")` ile tercihi alın."
        },
        {
          "title": "3. elif Merdiveni Kur",
          "desc": "`if secim == '1':` ... `elif secim == '2':` adımlarını kurgulayın."
        },
        {
          "title": "4. İç İçe Kontrol Ekle",
          "desc": "Para çekerken `if cekilecek <= bakiye:` kontrolüyle eksiye düşmeyi önleyin."
        }
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
        {
          "bold": "Büyük Sayıyı Başa Koyun",
          "text": "Not sisteminde `if puan >= 50:` başa konursa, 90 alan öğrenci bile 'Geçer' alır ve durur; büyükten küçüğe sıralayın!"
        },
        {
          "bold": "Aşırı İç İçe Yapılardan Kaçının",
          "text": "3-4 kattan fazla iç içe `if` yazmak kodun okunabilirliğini bozar; bunun yerine `and` ile birleştirin."
        },
        {
          "bold": "Sınır Değerleri Test Edin",
          "text": "50, 70, 85 gibi tam sınır noktalarını test ederek `>=` mi yoksa `>` mı olması gerektiğini doğrulayın."
        }
      ],
      "myths": [
        {
          "wrong": "Bir `elif` bloğu doğru olursa altındaki diğer `elif` blokları da çalışır.",
          "correct": "Merdivende DOĞRU çıkan ilk blok çalışır ve tüm merdiven anında sonlanır."
        },
        {
          "wrong": "İstediğimiz kadar `elif` yazamayız, sınırı 3 tanedir.",
          "correct": "Bir `if` yapısının altına yüzlerce `elif` eklenebilir, hiçbir teknik sınır yoktur."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında `notu = 75` iken ekrana ne yazdırılır?\n```python\nif notu >= 50:\n    print(\"Geçti\")\nelif notu >= 70:\n    print(\"İyi\")\n```",
      "options": [
        {
          "text": "A) İyi",
          "isCorrect": false
        },
        {
          "text": "B) Geçti",
          "isCorrect": true
        },
        {
          "text": "C) Hem Geçti hem İyi",
          "isCorrect": false
        },
        {
          "text": "D) Hata verir",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(56, 189, 248, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"150\" y=\"30\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#00f0ff\" stroke-width=\"2\"/>\n          <text x=\"210\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#00f0ff\">if puan &gt;= 85:</text>\n          \n          <line x1=\"210\" y1=\"70\" x2=\"310\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"2\"/>\n          <text x=\"270\" y=\"90\" font-size=\"10\" fill=\"#34d399\">True</text>\n          <rect x=\"260\" y=\"120\" width=\"110\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n          <text x=\"315\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Pekiyi (5)\")</text>\n          \n          <line x1=\"210\" y1=\"70\" x2=\"110\" y2=\"120\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <text x=\"145\" y=\"90\" font-size=\"10\" fill=\"#fbbf24\">False</text>\n          <rect x=\"50\" y=\"120\" width=\"130\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\"/>\n          <text x=\"115\" y=\"145\" text-anchor=\"middle\" font-size=\"11\" font-family=\"monospace\" fill=\"#fbbf24\">elif puan &gt;= 50:</text>\n          \n          <line x1=\"115\" y1=\"160\" x2=\"175\" y2=\"210\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"210\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n          <text x=\"175\" y=\"235\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Geçti\")</text>\n          \n          <line x1=\"115\" y1=\"160\" x2=\"55\" y2=\"210\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n          <rect x=\"15\" y=\"210\" width=\"90\" height=\"40\" rx=\"6\" fill=\"#1e293b\" stroke=\"#ef4444\"/>\n          <text x=\"60\" y=\"235\" text-anchor=\"middle\" font-size=\"11\" fill=\"#ffffff\">print(\"Kaldı\")</text>\n        </svg>"
  },
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
      {
        "title": "Neden Döngü (Loop)?",
        "desc": "Kendini tekrar eden amele işlerini bilgisayarın işlemci hızına devretme."
      },
      {
        "title": "for Döngüsü Mantığı",
        "desc": "Belirli bir sayıda veya bir listenin üzerinde adım adım gezinme."
      },
      {
        "title": "range() Fonksiyonu",
        "desc": "`range(dur)`, `range(basla, dur)` ve `range(basla, dur, adim)` parametreleri."
      },
      {
        "title": "Toplam ve Sayaç Değişkenleri",
        "desc": "Döngü içinde değer biriktirme (`toplam += i`) tekniği."
      }
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
            {
              "bold": "1. range(5)",
              "text": "0'dan başlar, 5'e kadar (5 hariç): `0, 1, 2, 3, 4` sayılarını üretir (tam 5 tekrar)."
            },
            {
              "bold": "2. range(10, 20)",
              "text": "10'dan başlar, 20'ye kadar (20 hariç): `10, 11, ..., 19` üretir."
            },
            {
              "bold": "3. range(0, 50, 5)",
              "text": "0'dan başlar, 5'er 5'er 50'ye kadar: `0, 5, 10, 15, ..., 45` üretir."
            }
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
        {
          "badge": "Döngü Değişkeni",
          "title": "Geçici İsim (i / sayi)",
          "desc": "Döngü her döndüğünde değişken sıradaki sayının değerini alır; döngü bitince görevi biter.",
          "items": [
            {
              "bold": "Adım Sayısı",
              "text": "Geriye doğru saymak için adım parametresi negatif (`-1`) verilmelidir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "İnteraktif Çarpım Tablosu ve Sayı İstatistik Aracı",
      "subtitle": "Kullanıcının istediği sayının çarpım tablosunu ekrana düzenli basan for döngüsü",
      "steps": [
        {
          "title": "1. Sayıyı Al",
          "desc": "`sayi = int(input(\"Hangi sayının çarpım tablosu? (1-10): \"))` yazın."
        },
        {
          "title": "2. for Döngüsü Kur",
          "desc": "`for i in range(1, 11):` ile 1'den 10'a kadar döngü açın."
        },
        {
          "title": "3. Çarpımı Yazdır",
          "desc": "f-string ile `f\"{sayi} x {i} = {sayi * i}\"` satırını ekrana basın."
        },
        {
          "title": "4. Çift Sayı Filtresi Ekle",
          "desc": "Sadece çift adımları yazdıracak şekilde `if (sayi * i) % 2 == 0:` şartını ekleyin."
        }
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
        {
          "bold": "Bitiş Değeri Dahil Değildir (Off-by-one)",
          "text": "10'a kadar dönmek için `range(1, 11)` yazmalısınız; `range(1, 10)` yazarsanız 9'da durur."
        },
        {
          "bold": "Toplam Değişkenini Döngüden Önce Sıfırlayın",
          "text": "`toplam = 0` satırını döngünün içine yazarsanız her adımda sıfırlanır ve birikmez."
        },
        {
          "bold": "Döngü Değişkenini İçeride Manuel Değiştirmeyin",
          "text": "for döngüsünde `i = i + 1` yazmanıza gerek yoktur, Python bunu otomatik yapar."
        }
      ],
      "myths": [
        {
          "wrong": "`range(5)` komutu 1'den başlar ve 5'e kadar gider.",
          "correct": "Bilgisayar biliminde sayma daima 0'dan başlar! `range(5)` -> `0, 1, 2, 3, 4` üretir."
        },
        {
          "wrong": "for döngüsü sadece sayılar üzerinde çalışır.",
          "correct": "for döngüsü metinler (harf harf), listeler ve dosyalar üzerinde de adım adım gezinir."
        }
      ]
    },
    "quiz": {
      "question": "Python'da `for i in range(2, 10, 3): print(i, end=\" \")` kodunun ekran çıktısı aşağıdakilerden hangisidir?",
      "options": [
        {
          "text": "A) 2 5 8",
          "isCorrect": true
        },
        {
          "text": "B) 2 5 8 11",
          "isCorrect": false
        },
        {
          "text": "C) 3 6 9",
          "isCorrect": false
        },
        {
          "text": "D) 2 4 6 8 10",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <circle cx=\"210\" cy=\"140\" r=\"75\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"8 4\"/>\n          <text x=\"210\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#ffffff\">for i in range(5):</text>\n          <text x=\"210\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\">Adım Adım Tekrar</text>\n          \n          <!-- Döngü Adımları -->\n          <g transform=\"translate(210, 45)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=0</text></g>\n          <g transform=\"translate(300, 110)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=1</text></g>\n          <g transform=\"translate(265, 205)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=2</text></g>\n          <g transform=\"translate(155, 205)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=3</text></g>\n          <g transform=\"translate(120, 110)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=4</text></g>\n          \n          <rect x=\"140\" y=\"245\" width=\"140\" height=\"35\" rx=\"6\" fill=\"#111827\" stroke=\"#10b981\"/>\n          <text x=\"210\" y=\"267\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#34d399\">Döngüden Çıkış (break)</text>\n        </svg>"
  },
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
      {
        "title": "Hata Türleri",
        "desc": "Sözdizimi (Syntax), Çalışma Zamanı (Runtime) ve Mantıksal (Semantic) Hatalar."
      },
      {
        "title": "Hata Ayıklama Teknikleri",
        "desc": "`print()` ile değişken izleme ve adım adım çalıştırma."
      },
      {
        "title": "Algoritmik Meydan Okumalar",
        "desc": "Palindrom kelime bulma, asal sayı testi ve Fibonacci dizisi."
      },
      {
        "title": "Temiz Kod Düzenlemesi",
        "desc": "Gereksiz kodları budama ve PEP 8 standartlarına uyarlama."
      }
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
            {
              "bold": "1. Sözdizimi Hatası (SyntaxError)",
              "text": "İki nokta unutulması, parantez kapanmaması; program hiç başlamadan durur."
            },
            {
              "bold": "2. Çalışma Zamanı Hatası (Runtime)",
              "text": "Sıfıra bölme (`ZeroDivisionError`), tip uyuşmazlığı (`TypeError`); program çalışırken çöker."
            },
            {
              "bold": "3. Mantıksal Hata (Logic Error)",
              "text": "En tehlikelisidir! Program çökmeksizin çalışır ama yanlış sonuç üretir (Örn: `+` yerine `-` yazılması)."
            }
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
        {
          "badge": "Dedektiflik",
          "title": "print() ile İnceleme",
          "desc": "Döngü içine `print(f'Adım {i}: carpim={carpim}')` yazarak değişkenin her turdaki değişimini gözlerinizle görün.",
          "items": [
            {
              "bold": "Breakpoint",
              "text": "Gelişmiş editörlerde kodu durdurup bellek durumunu inceleme noktasıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Bozuk Kodları Tamir Etme Atölyesi",
      "subtitle": "İçinde 4 farklı hata barındıran bir Python programını dedektif gibi inceleyip düzeltme",
      "steps": [
        {
          "title": "1. Hata Raporunu Oku",
          "desc": "Terminaldeki Traceback çıktısını ve satır numarasını inceleyin."
        },
        {
          "title": "2. Syntax Hatalarını Çöz",
          "desc": "Eksik parantezleri ve `:` işaretlerini tamamlayın."
        },
        {
          "title": "3. Tip Hatalarını Gider",
          "desc": "`str` ile `int` toplamaya çalışan satıra `int()` dönüşümü ekleyin."
        },
        {
          "title": "4. Mantık Hatasını Düzelt",
          "desc": "Ortalama hesabında parantez eksikliğini (`a + b / 2` -> `(a + b) / 2`) giderin."
        }
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
        {
          "bold": "Hata Mesajından Korkmayın",
          "text": "Kırmızı hata mesajı ceza değil, Python'un size tam olarak nereye bakmanız gerektiğini söyleyen yardım çağrısıdır."
        },
        {
          "bold": "Tek Seferde Tek Değişiklik Yapın",
          "text": "Aynı anda 5 yeri değiştirmeyin; tek bir yeri düzeltip test edin."
        },
        {
          "bold": "Kodu Sesli Okuyun (Rubber Duck)",
          "text": "Kodu masanızdaki bir nesneye kelime kelime anlatmak mantık hatalarını anında fark ettirir."
        }
      ],
      "myths": [
        {
          "wrong": "Usta yazılımcılar hiç hata yapmaz ve kodları ilk seferde kusursuz çalışır.",
          "correct": "Kıdemli yazılımcıların mesaisinin %70'i hata ayıklamak ve sistemleri test etmekle geçer."
        },
        {
          "wrong": "Hata vermeyen kod kesinlikle doğru çalışıyordur.",
          "correct": "Mantıksal hatalar hiçbir hata mesajı vermez; sonucu dikkatle doğrulamak gerekir."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında programın çökmesine (ZeroDivisionError) sebep olan durum hangi hata kategorisine girer?\n```python\npuan = 100\nkisi_sayisi = 0\nprint(puan / kisi_sayisi)\n```",
      "options": [
        {
          "text": "A) Sözdizimi Hatası (SyntaxError)",
          "isCorrect": false
        },
        {
          "text": "B) Çalışma Zamanı Hatası (Runtime Error)",
          "isCorrect": true
        },
        {
          "text": "C) Mantıksal Hata (Logic Error)",
          "isCorrect": false
        },
        {
          "text": "D) Donanım Hatası",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(99, 102, 241, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"40\" y=\"40\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n          <text x=\"90\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Girdi</text>\n          <text x=\"90\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Parametreler (x, y)</text>\n          \n          <line x1=\"140\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#00f0ff\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"180\" y=\"30\" width=\"140\" height=\"90\" rx=\"10\" fill=\"#162038\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n          <text x=\"250\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#c084fc\">def topla(a, b):</text>\n          <text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">sonuc = a + b</text>\n          <text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#34d399\">return sonuc</text>\n          \n          <line x1=\"320\" y1=\"70\" x2=\"360\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"340\" y=\"40\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n          <text x=\"370\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#34d399\">Çıktı</text>\n          <text x=\"370\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Sonuç</text>\n          \n          <!-- Hata Yönetimi try-except -->\n          <rect x=\"40\" y=\"150\" width=\"340\" height=\"115\" rx=\"8\" fill=\"#111827\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">İstisna Yönetimi: try / except</text>\n          <text x=\"210\" y=\"200\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">try: sayi = int(input()) except ValueError: print(\"Hata!\")</text>\n          <text x=\"210\" y=\"225\" text-anchor=\"middle\" font-size=\"10\" fill=\"#cbd5e1\">Programın aniden çökmesini önler, güvenli çalışma sağlar.</text>\n          <text x=\"210\" y=\"245\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Temiz Kod | Modülerlik | Tekrar Kullanılabilirlik</text>\n        </svg>"
  },
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
      {
        "title": "Operatör Öncelikleri",
        "desc": "Parantez, karşılaştırma (`==`, `!=`) ve mantıksal (`and`, `or`) işlem adımları."
      },
      {
        "title": "if-elif-else Akış Analizi",
        "desc": "Doğru basamağı bulup alttakileri atlama kuralları."
      },
      {
        "title": "for Döngüsü ve range() Takibi",
        "desc": "Döngü sayacının her adımdaki değerini tabloya dökme."
      },
      {
        "title": "Örnek MEB Senaryo Soruları",
        "desc": "Açık uçlu lise bilişim yazılı sınavı provası."
      }
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
            {
              "bold": "1. 'Kodun çıktısı nedir?'",
              "text": "Döngü ve koşul içeren 6 satırlık bir kodun ekrana ne basacağını adım adım yazma."
            },
            {
              "bold": "2. 'Kodu tamamlayınız'",
              "text": "İstenen görevi yerine getirmesi için boş bırakılan yerlere uygun operatörleri yerleştirme."
            },
            {
              "bold": "3. 'Hatalı satırı bulunuz'",
              "text": "Girintileme veya sözdizimi hatası içeren satırı gerekçesiyle açıklama."
            }
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
        {
          "badge": "İzleme Tablosu",
          "title": "Trace Table Mucizesi",
          "desc": "Sınav kağıdının kenarına `i` ve `toplam` sütunları açıp satır satır değerleri yazmak hata yapmanızı %100 engeller.",
          "items": [
            {
              "bold": "range(1, 10)",
              "text": "10'un dahil olmadığını unutmamak en önemli püf noktasıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahtada Canlı Sınav Denemesi",
      "subtitle": "Öğrencilerin tahtaya kalkarak farklı zorluktaki 5 kodlama sorusunu çözmesi",
      "steps": [
        {
          "title": "1. Soruyu Yansıt",
          "desc": "Tahtaya for döngüsü ve if içeren bir kodlama sorusu açın."
        },
        {
          "title": "2. Değişkenleri Çıkar",
          "desc": "Döngü değişkeninin başlangıç, bitiş ve adım değerlerini altını çizerek belirleyin."
        },
        {
          "title": "3. Koşulu Denetle",
          "desc": "Hangi değerlerin `if` filtresinden geçebildiğini listeleyin."
        },
        {
          "title": "4. Çıktıyı Yaz",
          "desc": "Ekrana tam olarak nasıl yazılacağını tırnak ve boşluklara dikkat ederek belirtin."
        }
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
        {
          "bold": "Döngünün Kaç Kere Döndüğünü Sayın",
          "text": "`range(0, 5)` tam 5 kez döner; `range(1, 5)` ise 4 kez döner."
        },
        {
          "bold": "end=\" \" Parametresine Dikkat",
          "text": "`print()` içinde `end` yoksa her çıktı yeni satıra (alt alta) basılır."
        },
        {
          "bold": "Sakin ve Adım Adım İlerleyin",
          "text": "Kodu bir kerede kafanızdan çözmeye çalışmayın; her adımda değişkenin yeni değerini not edin."
        }
      ],
      "myths": [
        {
          "wrong": "Sınavda bir döngü 100 kere dönüyorsa 100 adımı da elle yazmalıyız.",
          "correct": "İlk 3-4 adımı yazıp örüntüyü (matematiksel kuralı) keşfetmek yeterlidir."
        },
        {
          "wrong": "`elif` her zaman çalışır.",
          "correct": "Kendinden önceki `if` doğruysa `elif`'e asla bakılmaz."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod çalıştırıldığında ekranda ne görünür?\n```python\ns = 0\nfor x in [2, 5, 8]:\n    if x > 4:\n        s += x\nprint(s)\n```",
      "options": [
        {
          "text": "A) 15",
          "isCorrect": false
        },
        {
          "text": "B) 13",
          "isCorrect": true
        },
        {
          "text": "C) 8",
          "isCorrect": false
        },
        {
          "text": "D) 5",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(99, 102, 241, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"40\" y=\"40\" width=\"100\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n          <text x=\"90\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Girdi</text>\n          <text x=\"90\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Parametreler (x, y)</text>\n          \n          <line x1=\"140\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#00f0ff\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"180\" y=\"30\" width=\"140\" height=\"90\" rx=\"10\" fill=\"#162038\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n          <text x=\"250\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#c084fc\">def topla(a, b):</text>\n          <text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">sonuc = a + b</text>\n          <text x=\"250\" y=\"98\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#34d399\">return sonuc</text>\n          \n          <line x1=\"320\" y1=\"70\" x2=\"360\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          \n          <rect x=\"340\" y=\"40\" width=\"60\" height=\"60\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n          <text x=\"370\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#34d399\">Çıktı</text>\n          <text x=\"370\" y=\"85\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Sonuç</text>\n          \n          <!-- Hata Yönetimi try-except -->\n          <rect x=\"40\" y=\"150\" width=\"340\" height=\"115\" rx=\"8\" fill=\"#111827\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"210\" y=\"175\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">İstisna Yönetimi: try / except</text>\n          <text x=\"210\" y=\"200\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">try: sayi = int(input()) except ValueError: print(\"Hata!\")</text>\n          <text x=\"210\" y=\"225\" text-anchor=\"middle\" font-size=\"10\" fill=\"#cbd5e1\">Programın aniden çökmesini önler, güvenli çalışma sağlar.</text>\n          <text x=\"210\" y=\"245\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Temiz Kod | Modülerlik | Tekrar Kullanılabilirlik</text>\n        </svg>"
  },
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
      {
        "title": "for vs while Farkı",
        "desc": "Adım sayısı belliyse `for`, koşula bağlı belirsiz tekrarlar için `while`."
      },
      {
        "title": "while Sözdizimi",
        "desc": "`while kosul:` yapısı ve koşul True olduğu sürece dönen mekanizma."
      },
      {
        "title": "Sonsuz Döngü Tehlikesi",
        "desc": "Koşulun hiç False olmaması durumunda bilgisayarın kilitlenmesi."
      },
      {
        "title": "Bayrak (Flag) Değişkeni",
        "desc": "`oyun_devam = True` gibi kontrol değişkenleriyle döngüyü yönetme."
      }
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
            {
              "bold": "for Döngüsü",
              "text": "Tekrar sayısı baştan bellidir (Örn: '10 kere dön', 'Listedeki 50 elemanı tara')."
            },
            {
              "bold": "while Döngüsü",
              "text": "Bir olay gerçekleşene kadar döner (Örn: 'Kullanıcı doğru şifreyi girene kadar sor', 'Oyun bitene kadar ekrana çiz')."
            },
            {
              "bold": "Sayaç Güncelleme",
              "text": "while içinde sayacı artırmazsanız (`sayac += 1`), koşul hep True kalır ve sonsuz döngüye girer!"
            }
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
        {
          "badge": "Sonsuz Döngü",
          "title": "while True Kalıbı",
          "desc": "Bazen kasıtlı olarak `while True:` ile sonsuz döngü başlatılır ve içeriden belirli bir şartta `break` ile çıkılır.",
          "items": [
            {
              "bold": "Ctrl + C",
              "text": "Terminalde sonsuz döngüye giren programı zorla durdurma kısayoludur."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sayı Tahmin Oyunu Geliştirme",
      "subtitle": "Bilgisayarın 1-100 arasında tuttuğu sayıyı 'Yukarı' / 'Aşağı' ipuçlarıyla while döngüsünde bulma",
      "steps": [
        {
          "title": "1. Rastgele Sayı Seç",
          "desc": "`hedef = random.randint(1, 100)` ile gizli sayıyı belirleyin."
        },
        {
          "title": "2. while Döngüsü Aç",
          "desc": "`tahmin = 0` ve `while tahmin != hedef:` koşulunu kurun."
        },
        {
          "title": "3. İpucu Ver",
          "desc": "Kullanıcının tahmini küçükse 'Daha Büyük!', büyükse 'Daha Küçük!' yazdırın."
        },
        {
          "title": "4. Tebrik ve Skor",
          "desc": "Doğru bildiğinde döngüden çıkıp kaç hamlede bildiğini kutlayın."
        }
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
        {
          "bold": "Sayacı Döngü İçinde Artırın",
          "text": "`i = 1` yazıp `while i <= 10:` dediyseniz döngünün sonuna mutlaka `i += 1` yazmalısınız."
        },
        {
          "bold": "Koşulu Döngüden Önce Tanımlayın",
          "text": "`while secim != 'q':` yazmadan önce yukarıda `secim = ''` değişkenini başlatmalısınız."
        },
        {
          "bold": "Bilgisayar Donarsa Ctrl+C",
          "text": "Program sonsuz döngüye girip yanıt vermezse terminalde CTRL+C tuşlarına basın."
        }
      ],
      "myths": [
        {
          "wrong": "Sonsuz döngü bilgisayar donanımını yakar.",
          "correct": "Donanım yanmaz ancak CPU %100 yük altına girip fanları hızlanır; işletim sistemi görevi sonlandırabilir."
        },
        {
          "wrong": "while döngüsü yerine her zaman for döngüsü yazılabilir.",
          "correct": "Kullanıcının kaçıncı denemede doğru yapacağı gibi belirsiz durumlarda for yetersiz kalır, while zorunludur."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında sayacın değeri kaç olduğunda döngü sonlanır?\n```python\nsayac = 1\nwhile sayac < 5:\n    sayac += 2\n```",
      "options": [
        {
          "text": "A) 3",
          "isCorrect": false
        },
        {
          "text": "B) 4",
          "isCorrect": false
        },
        {
          "text": "C) 5",
          "isCorrect": true
        },
        {
          "text": "D) Sonsuz döngüye girer",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <circle cx=\"210\" cy=\"140\" r=\"75\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"8 4\"/>\n          <text x=\"210\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#ffffff\">for i in range(5):</text>\n          <text x=\"210\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\">Adım Adım Tekrar</text>\n          \n          <!-- Döngü Adımları -->\n          <g transform=\"translate(210, 45)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=0</text></g>\n          <g transform=\"translate(300, 110)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=1</text></g>\n          <g transform=\"translate(265, 205)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=2</text></g>\n          <g transform=\"translate(155, 205)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=3</text></g>\n          <g transform=\"translate(120, 110)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=4</text></g>\n          \n          <rect x=\"140\" y=\"245\" width=\"140\" height=\"35\" rx=\"6\" fill=\"#111827\" stroke=\"#10b981\"/>\n          <text x=\"210\" y=\"267\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#34d399\">Döngüden Çıkış (break)</text>\n        </svg>"
  },
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
      {
        "title": "Erken Ayrılma: break",
        "desc": "Koşula bakılmaksızın döngüyü o anda tamamen sonlandırıp dışarı çıkma."
      },
      {
        "title": "Adımı Atlama: continue",
        "desc": "Mevcut turun kalan kodlarını çalıştırmadan bir sonraki tura zıplama."
      },
      {
        "title": "Yer Tutucu: pass",
        "desc": "Henüz yazılmamış kod bloklarında sözdizimi hatası almamak için boş geçme."
      },
      {
        "title": "while True + break Kalıbı",
        "desc": "Sonsuz döngüyü içeriden akıllıca kontrol etme standardı."
      }
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
            {
              "bold": "break (Durdur ve Çık)",
              "text": "Döngüyü derhal öldürür. Döngüden sonraki ilk satıra atlar."
            },
            {
              "bold": "continue (Pas Geç ve Devam Et)",
              "text": "Sadece o anki adımı yarıda keser; döngünün bir sonraki turuna geçer."
            },
            {
              "bold": "pass (Hiçbir Şey Yapma)",
              "text": "Sözdizimsel olarak boş bırakılamayan bloklarda yer tutucu görevi görür."
            }
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
        {
          "badge": "Optimizasyon",
          "title": "Gereksiz İşlemi Önleme",
          "desc": "Aranan veri bulunduğunda `break` kullanmak CPU'yu boşuna milyonlarca döngü döndürmekten kurtarır.",
          "items": [
            {
              "bold": "Temiz Tasarım",
              "text": "`continue` iç içe `if` kalabalığını azaltır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Alışveriş Sepeti ve İptal Mekanizması Simülatörü",
      "subtitle": "Kullanıcı 'tamam' yazana kadar fiyat toplayan, '0' yazarsa o ürünü atlayan program",
      "steps": [
        {
          "title": "1. Sonsuz Döngü Kur",
          "desc": "`toplam = 0` ve `while True:` ile giriş döngüsü başlatın."
        },
        {
          "title": "2. Girdiyi Kontrol Et",
          "desc": "Kullanıcı 'tamam' yazdıysa `break` ile döngüyü kırın."
        },
        {
          "title": "3. continue Filtresi",
          "desc": "Fiyat 0 veya negatif girildiyse `continue` ile sepete eklemeden sonraki ürüne geçin."
        },
        {
          "title": "4. Toplamı Göster",
          "desc": "Döngü kırılınca nihai sepet tutarını f-string ile ekrana basın."
        }
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
        {
          "bold": "İç İçe Döngülerde break",
          "text": "`break` sadece içinde bulunduğu en içteki döngüyü kırar; dıştaki döngü dönmeye devam eder!"
        },
        {
          "bold": "while içinde continue ve Sayaç Tuzağı",
          "text": "while içinde `continue` öncesinde sayacı artırmazsanız, sayaç artamadan döngü başa döner ve sonsuz döngüye girer!"
        },
        {
          "bold": "Aşırı break Kullanımından Kaçının",
          "text": "Bir döngüde 5 farklı `break` olması kodun takip edilmesini zorlaştırır."
        }
      ],
      "myths": [
        {
          "wrong": "`continue` komutu programı kapatır.",
          "correct": "`continue` sadece o anki döngü adımını atlar, döngü bir sonraki değerle çalışmaya devam eder."
        },
        {
          "wrong": "`pass` komutu döngüyü durdurur.",
          "correct": "`pass` hiçbir şey yapmaz; sadece Python'un boş blok hatası vermesini önleyen bir yer tutucudur."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod çalıştırıldığında ekrana basılan son sayı hangisidir?\n```python\nfor i in range(1, 10):\n    if i == 4:\n        continue\n    if i == 7:\n        break\n    print(i, end=\" \")\n```",
      "options": [
        {
          "text": "A) 3",
          "isCorrect": false
        },
        {
          "text": "B) 6",
          "isCorrect": true
        },
        {
          "text": "C) 7",
          "isCorrect": false
        },
        {
          "text": "D) 9",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <circle cx=\"210\" cy=\"140\" r=\"75\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"8 4\"/>\n          <text x=\"210\" y=\"130\" text-anchor=\"middle\" font-size=\"13\" font-family=\"monospace\" font-weight=\"bold\" fill=\"#ffffff\">for i in range(5):</text>\n          <text x=\"210\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" fill=\"#94a3b8\">Adım Adım Tekrar</text>\n          \n          <!-- Döngü Adımları -->\n          <g transform=\"translate(210, 45)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=0</text></g>\n          <g transform=\"translate(300, 110)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=1</text></g>\n          <g transform=\"translate(265, 205)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=2</text></g>\n          <g transform=\"translate(155, 205)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=3</text></g>\n          <g transform=\"translate(120, 110)\"><circle r=\"16\" fill=\"#1e293b\" stroke=\"#00f0ff\"/><text y=\"4\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#00f0ff\">i=4</text></g>\n          \n          <rect x=\"140\" y=\"245\" width=\"140\" height=\"35\" rx=\"6\" fill=\"#111827\" stroke=\"#10b981\"/>\n          <text x=\"210\" y=\"267\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#34d399\">Döngüden Çıkış (break)</text>\n        </svg>"
  },
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
      {
        "title": "Liste (List) Nedir?",
        "desc": "Birden çok veriyi tek bir değişken altında sıralı saklayan dinamik koleksiyon."
      },
      {
        "title": "Köşeli Parantez [] Mimarisi",
        "desc": "Farklı türleri (int, str, float) bir arada tutabilme esnekliği."
      },
      {
        "title": "İndeksleme (0-Tabanlı)",
        "desc": "İlk elemanın indeksi daima 0'dır; son elemana negatif indeksle (`-1`) erişim."
      },
      {
        "title": "Dilimleme (Slicing [basla:bitir])",
        "desc": "Listenin belirli bir alt parçasını çekip alma sanatı."
      }
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
            {
              "bold": "0. İndeks (İlk Eleman)",
              "text": "`diller[0]` daima listenin ilk elemanını getirir."
            },
            {
              "bold": "-1. İndeks (Son Eleman)",
              "text": "Listenin uzunluğunu bilmeseniz bile `diller[-1]` son elemanı verir."
            },
            {
              "bold": "Değiştirilebilirlik (Mutable)",
              "text": "Listeler değiştirilebilir; `diller[0] = 'Python'` yazarak eleman güncellenebilir."
            }
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
        {
          "badge": "IndexError",
          "title": "Sınır Aşımı Hatası",
          "desc": "3 elemanlı bir listenin `liste[5]` elemanını istemek `IndexError: list index out of range` hatası üretir.",
          "items": [
            {
              "bold": "len() Fonksiyonu",
              "text": "Listenin kaç elemandan oluştuğunu `len(liste)` ile anında öğreniriz."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Lise Ders Programı ve Gün Listesi Modelleme",
      "subtitle": "Haftanın günlerini bir listede saklayıp hafta içi ve hafta sonu dilimlerini ekrana basma",
      "steps": [
        {
          "title": "1. Listeyi Tanımla",
          "desc": "`gunler = [\"Pazartesi\", \"Salı\", \"Çarşamba\", \"Perşembe\", \"Cuma\", \"Cumartesi\", \"Pazar\"]` yazın."
        },
        {
          "title": "2. Hafta İçini Dilimle",
          "desc": "`hafta_ici = gunler[0:5]` ile ilk 5 günü yeni bir listeye alın."
        },
        {
          "title": "3. Hafta Sonunu Çek",
          "desc": "`hafta_sonu = gunler[5:]` veya `gunler[-2:]` ile son 2 günü çekin."
        },
        {
          "title": "4. Ekrana Formatlı Bas",
          "desc": "Her iki listeyi ve `len(gunler)` bilgisini konsola yazdırın."
        }
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
        {
          "bold": "Son Elemanın İndeksi: len - 1",
          "text": "5 elemanlı bir listenin son indeksi 4'tür; `liste[5]` yazarsanız program çöker."
        },
        {
          "bold": "Dilimleme Hata Vermez",
          "text": "İndekslemede sınır aşımı hata verirken, dilimlemede `liste[0:100]` yazsanız bile olanları alır ve çökmez."
        },
        {
          "bold": "Kopya Alırken `[:]` Kullanın",
          "text": "`b = a` yazarsanız ikisi aynı belleği gösterir; bağımsız kopya için `b = a.copy()` veya `b = a[:]` yapın."
        }
      ],
      "myths": [
        {
          "wrong": "Listelerin ilk elemanının indeksi 1'dir.",
          "correct": "Tüm modern dillerde (Python, C, Java) ilk elemanın indeksi daima 0'dır."
        },
        {
          "wrong": "Bir liste içinde sadece sayılar veya sadece metinler olabilir.",
          "correct": "Python listeleri heterojendir; aynı listede int, str, float ve bool yan yana bulunabilir."
        }
      ]
    },
    "quiz": {
      "question": "`sehirler = [\"Ankara\", \"İstanbul\", \"İzmir\", \"Bursa\"]` listesinde `sehirler[-1]` ifadesi hangi şehri döndürür?",
      "options": [
        {
          "text": "A) Ankara",
          "isCorrect": false
        },
        {
          "text": "B) İzmir",
          "isCorrect": false
        },
        {
          "text": "C) Bursa",
          "isCorrect": true
        },
        {
          "text": "D) IndexError",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(168, 85, 247, 0.3)\" stroke-width=\"2\"/>\n          <text x=\"210\" y=\"35\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#c084fc\">Python Liste (Array) Bellek Yerleşimi</text>\n          \n          <!-- Liste Kutuları -->\n          <g transform=\"translate(30, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"Python\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[0]</text>\n          </g>\n          <g transform=\"translate(125, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"Java\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[1]</text>\n          </g>\n          <g transform=\"translate(220, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"C++\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[2]</text>\n          </g>\n          <g transform=\"translate(315, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"Rust\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[3]</text>\n          </g>\n\n          <!-- Sözlük (Dictionary) Karşılaştırması -->\n          <rect x=\"30\" y=\"160\" width=\"365\" height=\"110\" rx=\"8\" fill=\"#111827\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"210\" y=\"185\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">Sözlük (Dictionary) - Anahtar (Key) : Değer (Value)</text>\n          <text x=\"210\" y=\"215\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" fill=\"#ffffff\">ogrenci = {{\"ad\": \"Ece\", \"no\": 104, \"alan\": \"Bilişim\"}}</text>\n          <text x=\"210\" y=\"245\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\">Hızlı arama süresi: O(1) Hash Tablosu Mimarisi</text>\n        </svg>"
  },
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
      {
        "title": "Eleman Ekleme",
        "desc": "Sona ekleme (`append()`) ve araya ekleme (`insert()`)."
      },
      {
        "title": "Eleman Silme",
        "desc": "Değere göre silme (`remove()`) ve indekse göre çıkarıp alma (`pop()`)."
      },
      {
        "title": "Sıralama ve Ters Çevirme",
        "desc": "Alfabetik/sayısal dizme (`sort()`) ve listeyi tersyüz etme (`reverse()`)."
      },
      {
        "title": "for ile Liste Gezinimi",
        "desc": "`for eleman in liste:` ve `in` üyelik operatörüyle arama yapma."
      }
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
            {
              "bold": "append(deger)",
              "text": "Listenin en sonuna yeni bir eleman ekler: `sepet.append('Kitap')`."
            },
            {
              "bold": "pop(indeks)",
              "text": "Belirtilen indisteki elemanı listeden çıkarır ve geriye döndürür."
            },
            {
              "bold": "remove(deger)",
              "text": "İsmi verilen ilk eşleşen elemanı siler."
            },
            {
              "bold": "sort()",
              "text": "Listeyi orijinal haliyle küçükten büyüğe (A-Z) sıralar."
            }
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
        {
          "badge": "in Operatörü",
          "title": "Üyelik Sorgulama",
          "desc": "`if 'elma' in meyveler:` yazarak bir elemanın listede olup olmadığını tek kelimeyle sorgulayabilirsiniz.",
          "items": [
            {
              "bold": "enumerate()",
              "text": "Döngüde hem sıra numarasını hem de elemanın kendisini aynı anda verir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Dinamik Görev Listesi (To-Do List) Uygulaması",
      "subtitle": "Kullanıcının görev ekleyip silebildiği ve listelediği interaktif konsol programı",
      "steps": [
        {
          "title": "1. Boş Liste Başlat",
          "desc": "`gorevler = []` listesini oluşturun."
        },
        {
          "title": "2. while Döngüsü",
          "desc": "Kullanıcıya 'Ekle', 'Sil', 'Listele', 'Çıkış' menüsünü sunun."
        },
        {
          "title": "3. Metotları Bağla",
          "desc": "Ekleme için `append()`, tamamlama/silme için `pop()` kullanın."
        },
        {
          "title": "4. Listeyi Göster",
          "desc": "`for` döngüsüyle tüm görevleri numaralandırarak ekrana basın."
        }
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
        {
          "bold": "sort() Geriye Değer Döndürmez",
          "text": "`yeni = liste.sort()` yazarsanız `yeni` değişkeni `None` olur! `sort()` orijinal listeyi yerinde değiştirir."
        },
        {
          "bold": "remove() Olmayan Elemanda Çöker",
          "text": "Listede olmayan bir şeyi silmeye çalışırsanız `ValueError` verir; önce `if eleman in liste:` kontrolü yapın."
        },
        {
          "bold": "Boş Listede pop() Hatası",
          "text": "Boş bir listede `pop()` çağrılırsa `IndexError` verir."
        }
      ],
      "myths": [
        {
          "wrong": "`sort()` ile `sorted()` tamamen aynıdır.",
          "correct": "`liste.sort()` orijinal listeyi değiştirir; `sorted(liste)` ise orijinali bozmadan yeni bir kopya döndürür."
        },
        {
          "wrong": "Bir listenin eleman sayısını saymak için döngüyle tek tek saymak gerekir.",
          "correct": "`len(liste)` fonksiyonu anında eleman sayısını verir."
        }
      ]
    },
    "quiz": {
      "question": "`sayilar = [10, 20, 30]` listesine `sayilar.append(40)` uygulandıktan sonra `sayilar.pop(0)` çalıştırılırsa listenin son hali ne olur?",
      "options": [
        {
          "text": "A) [20, 30, 40]",
          "isCorrect": true
        },
        {
          "text": "B) [10, 20, 30, 40]",
          "isCorrect": false
        },
        {
          "text": "C) [10, 20, 30]",
          "isCorrect": false
        },
        {
          "text": "D) [20, 30]",
          "isCorrect": false
        }
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
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(168, 85, 247, 0.3)\" stroke-width=\"2\"/>\n          <text x=\"210\" y=\"35\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#c084fc\">Python Liste (Array) Bellek Yerleşimi</text>\n          \n          <!-- Liste Kutuları -->\n          <g transform=\"translate(30, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"Python\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[0]</text>\n          </g>\n          <g transform=\"translate(125, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"Java\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[1]</text>\n          </g>\n          <g transform=\"translate(220, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"C++\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[2]</text>\n          </g>\n          <g transform=\"translate(315, 60)\">\n            <rect width=\"80\" height=\"70\" rx=\"6\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n            <text x=\"40\" y=\"32\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">\"Rust\"</text>\n            <text x=\"40\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" font-family=\"monospace\" fill=\"#00f0ff\">[3]</text>\n          </g>\n\n          <!-- Sözlük (Dictionary) Karşılaştırması -->\n          <rect x=\"30\" y=\"160\" width=\"365\" height=\"110\" rx=\"8\" fill=\"#111827\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"210\" y=\"185\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">Sözlük (Dictionary) - Anahtar (Key) : Değer (Value)</text>\n          <text x=\"210\" y=\"215\" text-anchor=\"middle\" font-size=\"12\" font-family=\"monospace\" fill=\"#ffffff\">ogrenci = {{\"ad\": \"Ece\", \"no\": 104, \"alan\": \"Bilişim\"}}</text>\n          <text x=\"210\" y=\"245\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\">Hızlı arama süresi: O(1) Hash Tablosu Mimarisi</text>\n        </svg>"
  }
];
