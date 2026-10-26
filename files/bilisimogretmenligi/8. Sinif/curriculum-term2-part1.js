/**
 * MEB 8. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem 1. Kısım (Hafta 20 - 31)
 * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART1 = [
  {
    "week": 20,
    "date": "08 - 14 Şubat",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Bilişimsel Mantık Muhakeme & LGS Kampı",
    "unitBadge": "2. Dönem Başlangıcı",
    "unitTheme": "unite-3",
    "title": "Bilişimsel Mantık Muhakeme ve LGS Sayısal Mantık",
    "subtitle": "Algoritmik Zeka ile Sınavlarda ve Kodlamada Fark Yaratma",
    "outcomeCode": "BTY.8.3.1",
    "targetSkill": "Kural Tabanlı Eleme ve Mantıksal Çıkarım",
    "curiosityQuestion": "LGS mantık sorularındaki 'Ahmet Burak'ın solundadır' kuralı ile bilgisayar algoritmaları arasındaki şaşırtıcı bağ nedir?",
    "roadmap": [
      {
        "title": "Kural Tabanlı İndirgeme",
        "desc": "Öncülleri VE/VEYA/DEĞİL mantık ifadelerine çevirme."
      },
      {
        "title": "Doğruluk Matrisi",
        "desc": "2 boyutlu tabloda ihtimalleri X ve ✓ ile eleme."
      },
      {
        "title": "Örüntü ve Dizi Analizi",
        "desc": "Sayı dizilerindeki artış katsayısını formüle etme."
      },
      {
        "title": "Tersine Mühendislik",
        "desc": "Hedef durumdan geriye doğru adımları izleme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">LGS Sayısal Mantık &amp; Bilişimsel Muhakeme</text>\n  <rect x=\"50\" y=\"70\" width=\"350\" height=\"150\" rx=\"12\" fill=\"#1e1b4b\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"105\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\">Kural Tabanlı Eleme Matrisi</text>\n  <text x=\"80\" y=\"140\" fill=\"#f8fafc\" font-size=\"12\">✓ Öncülleri VE / VEYA mantık kapılarına çevir</text>\n  <text x=\"80\" y=\"170\" fill=\"#f8fafc\" font-size=\"12\">✓ 2 Boyutlu tabloda çelişkileri hızla ele</text>\n  <text x=\"80\" y=\"200\" fill=\"#10b981\" font-size=\"12\">✓ Kesinleşen adımlardan hedefe tersine mühendislikle ulaş</text>\n  <rect x=\"50\" y=\"240\" width=\"350\" height=\"55\" rx=\"10\" fill=\"#312e81\"/>\n  <text x=\"225\" y=\"272\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"12\" font-weight=\"bold\">Algoritmik Düşünme Sınavlarda Süre Kazandırır!</text>\n</svg>",
    "section1": {
      "title": "Mantıksal Muhakeme ve Eleme Matrisi",
      "subtitle": "Büyük problemleri küçük kural kümelerine ayırma sanatı:",
      "cards": [
        {
          "title": "Eleme Matrisi Tekniği",
          "icon": "🧠",
          "desc": "Kişiler ve nesneler arasındaki eşleşmeleri ızgarada modelleyerek kesin sonuca saniyeler içinde ulaşırız.",
          "items": [
            {
              "bold": "Kesin Bilgiyi Yerleştir",
              "text": "Önce tartışmasız doğru olan öncülü tabloya işle."
            },
            {
              "bold": "İmkansızları Ele",
              "text": "Çelişen satır ve sütunları kapat."
            },
            {
              "bold": "Zincirleme Çıkarım",
              "text": "Kalan tek boşluk bir sonraki kuralın anahtarıdır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Bilgisayar Biliminde Karar Ağaçları",
      "subtitle": "Yapay zeka satranç motorlarının hamle hesaplama mantığı:",
      "cards": [
        {
          "badge": "Olasılık Uzayı",
          "title": "Ağaç Budama (Pruning)",
          "desc": "Geçersiz olasılık dallarını baştan eleyerek işlem yükünü trilyonlarca kat azaltma.",
          "items": [
            {
              "bold": "Zaman Yönetimi",
              "text": "Sınavda her soruya dakikalar harcamak yerine sistemli çözüm üretmek."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sınıf İçi LGS Mantık Matrisi Çözüm Atölyesi",
      "subtitle": "Akıllı tahtada verilen 4 kişi, 4 meslek ve 4 şehir bulmacasını eleme tablosuyla 3 dakikada çözme.",
      "steps": [
        {
          "title": "Tabloyu Çiz",
          "desc": "Tahtada 4x4'lük boş mantık matrisi oluşturun."
        },
        {
          "title": "Öncülleri Oku",
          "desc": "Kural 1 ve Kural 2'ye göre kesinleşenleri '✓' ile işaretleyin."
        },
        {
          "title": "Kalanı Tamamla",
          "desc": "Sütunlardaki tek ihtimalleri belirleyip cevabı ilan edin."
        }
      ],
      "criteria": [
        "Matris tablosunun hatasız kurulması",
        "Eleme adımlarının mantıksal gerekçelendirilmesi",
        "Süre sınırına (3 dakika) uyulması"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav ve Mantık İpuçları",
      "safetyRules": [
        {
          "bold": "Soruyu Parçala",
          "text": "Uzun paragrafları tek tek kurallara dönüştürerek kenara not al."
        },
        {
          "bold": "Ezberleme",
          "text": "Formül ezberlemek yerine kural mekanizmasını kavra."
        }
      ],
      "myths": [
        {
          "wrong": "Sayısal mantık soruları sadece matematik dehaları içindir.",
          "correct": "Sayısal mantık tamamen bilişimsel algoritma ve eleme disiplinidir; herkes öğrenebilir."
        }
      ]
    },
    "quiz": {
      "question": "Ali, Burak'ın önünde bitirmiştir. Can ise Ali'den hemen sonra gelmiştir. Burak sonuncu (4.) olduğuna göre 1. kim olabilir?",
      "options": [
        {
          "text": "Burak",
          "isCorrect": false
        },
        {
          "text": "Can",
          "isCorrect": false
        },
        {
          "text": "Ali veya 4. kişi (Deniz)",
          "isCorrect": true
        },
        {
          "text": "Soru çözülemez",
          "isCorrect": false
        }
      ],
      "explanation": "Burak sonuncuysa sıra (Ali, Can, ..., Burak) veya (Deniz, Ali, Can, Burak) olabilir. Deniz sonuncu değilse Ali 1. veya 2. olabilir."
    },
    "summary": {
      "keyPoints": [
        "Mantıksal muhakeme kural tabanlı eleme matrisi ile çözülür.",
        "Bilişimsel düşünme becerileri LGS'de doğrudan net artışı sağlar."
      ],
      "nextWeek": "Python Geliştirme Ortamı (Thonny IDE) ve Temel Sözdizimi",
      "homework": "Bir LGS deneme sınavından 2 adet sayısal mantık sorusunu tablo çizerek çözüp deftere kaydedin."
    }
  },
  {
    "week": 21,
    "date": "15 - 21 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "Python'a Giriş",
    "unitTheme": "unite-4",
    "title": "Python Geliştirme Ortamı ve Temel Sözdizimi",
    "subtitle": "Blokların Ötesi: Dünyanın En Popüler Yazılım Diline Adım Atıyoruz",
    "outcomeCode": "BTY.8.4.1",
    "targetSkill": "Metin Tabanlı Kod Yazma & Yorumlayıcı Mantığı",
    "curiosityQuestion": "NASA uzay araçlarını, YouTube video motorunu ve ChatGPT'yi blok kodlarla yazabilir miyiz?",
    "roadmap": [
      {
        "title": "Neden Python?",
        "desc": "Sade İngilizceye benzeyen sözdizimi ve küresel liderliği."
      },
      {
        "title": "Thonny IDE",
        "desc": "Editör, Shell (kabuk) ve hata ayıklama pencereleri."
      },
      {
        "title": "print() Fonksiyonu",
        "desc": "Ekrana çıktı verme ve metin birleştirme kuralları."
      },
      {
        "title": "Sözdizimi Kuralları",
        "desc": "Büyük/küçük harf duyarlılığı ve girintileme mantığı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Python IDE ve Sözdizimi Anatomisi</text>\n  <rect x=\"40\" y=\"70\" width=\"370\" height=\"160\" rx=\"10\" fill=\"#030712\" stroke=\"#334155\"/>\n  <text x=\"60\" y=\"100\" fill=\"#64748b\" font-family=\"monospace\" font-size=\"12\">1</text>\n  <text x=\"90\" y=\"100\" fill=\"#10b981\" font-family=\"monospace\" font-size=\"13\"># 8. Sınıf İlk Python Kodu</text>\n  <text x=\"60\" y=\"130\" fill=\"#64748b\" font-family=\"monospace\" font-size=\"12\">2</text>\n  <text x=\"90\" y=\"130\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"13\">mesaj</text>\n  <text x=\"135\" y=\"130\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"13\"> = </text>\n  <text x=\"155\" y=\"130\" fill=\"#f43f5e\" font-family=\"monospace\" font-size=\"13\">\"Merhaba Geleceğin Mühendisi!\"</text>\n  <text x=\"60\" y=\"160\" fill=\"#64748b\" font-family=\"monospace\" font-size=\"12\">3</text>\n  <text x=\"90\" y=\"160\" fill=\"#a78bfa\" font-family=\"monospace\" font-size=\"13\">print</text>\n  <text x=\"135\" y=\"160\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"13\">(</text>\n  <text x=\"145\" y=\"160\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"13\">mesaj</text>\n  <text x=\"190\" y=\"160\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"13\">)</text>\n  <rect x=\"40\" y=\"245\" width=\"370\" height=\"50\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#8b5cf6\"/>\n  <text x=\"225\" y=\"275\" text-anchor=\"middle\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"12\">&gt;&gt;&gt; Merhaba Geleceğin Mühendisi!</text>\n</svg>",
    "section1": {
      "title": "Python Ekosistemi ve Yorumlayıcı (Interpreter)",
      "subtitle": "Yazılan kodların satır satır makine diline çevrilmesi:",
      "cards": [
        {
          "title": "Python'ın Altın Kuralları",
          "icon": "🐍",
          "desc": "Python okunabilirliği en yüksek, temiz ve güçlü modern bir dildir.",
          "items": [
            {
              "bold": "Case-Sensitive",
              "text": "'print' küçük harfle yazılmalıdır; 'Print' hata verir."
            },
            {
              "bold": "Tırnak Uyumu",
              "text": "Metinler tek tırnak ('...') veya çift tırnak (\"...\") ile kapatılmalıdır."
            },
            {
              "bold": "Yorum Satırı (#)",
              "text": "Bilgisayarın çalıştırmadığı, yazılımcıya not bırakan açıklama satırlarıdır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "İlk Python Betiği ve Çıktı Alma",
      "subtitle": "Thonny IDE üzerinde çalışan ilk program:",
      "codeSnippet": "# 8. Sınıf İlk Kodumuz\nad = 'Geleceğin Mühendisi'\nprint('Merhaba Python Dünyası!')\nprint('Hoş geldin,', ad)",
      "codeTitle": "ilk_programim.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Syntax",
          "title": "Sözdizimi Hatası (SyntaxError)",
          "desc": "Parantezi kapatmayı unutursanız Python SyntaxError vererek durur.",
          "items": [
            {
              "bold": "Kuralcı Dil",
              "text": "Bilgisayar yazım kurallarına harfiyen uymamızı şart koşar."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Thonny'de İlk Konsol Tebrik Kartı Betiği",
      "subtitle": "Kendi adınızı, hedefinizi ve okulunuzu süslü yıldız çerçevesiyle konsola yazdıran program.",
      "steps": [
        {
          "title": "Thonny'yi Başlat",
          "desc": "Yeni bir dosya açıp ilk_kod.py olarak kaydedin."
        },
        {
          "title": "print() Satırları",
          "desc": "3 satır halinde bilgilerinizi ve çerçeve karakterlerini yazın."
        },
        {
          "title": "Çalıştır (F5)",
          "desc": "Yeşil play butonuna basarak Shell çıktısını inceleyin."
        }
      ],
      "criteria": [
        "SyntaxError olmadan hatasız çalışması",
        "Doğru tırnak ve parantez kullanımı",
        "Açıklama satırı (#) eklenmiş olması"
      ]
    },
    "tips": {
      "safetyTitle": "Python Kodlama Hijyeni",
      "safetyRules": [
        {
          "bold": "Dosya Uzantısı",
          "text": "Python dosyaları mutlaka '.py' uzantısıyla kaydedilmelidir."
        },
        {
          "bold": "Boşluklara Dikkat",
          "text": "Satır başlarında gereksiz boşluk bırakmak 'IndentationError' verir."
        }
      ],
      "myths": [
        {
          "wrong": "Python sadece basit bir eğitim dilidir.",
          "correct": "Python Google, Netflix, NASA ve yapay zeka devlerinin ana dilidir."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki Python satırlarından hangisi sözdizimi açısından TAMAMEN DOĞRUDUR?",
      "options": [
        {
          "text": "PRINT('Merhaba')",
          "isCorrect": false
        },
        {
          "text": "print \"Merhaba\"",
          "isCorrect": false
        },
        {
          "text": "print('Merhaba')",
          "isCorrect": true
        },
        {
          "text": "Print('Merhaba')",
          "isCorrect": false
        }
      ],
      "explanation": "Python 3'te print bir fonksiyondur, parantez zorunludur ve tamamen küçük harfle 'print' yazılmalıdır."
    },
    "summary": {
      "keyPoints": [
        "Python yorumlanan, temiz sözdizimli ve güçlü bir metin tabanlı dildir.",
        "print() ekrana çıktı verirken, # sembolü açıklama satırları oluşturur."
      ],
      "nextWeek": "Python Değişkenleri, Veri Tipleri (int, float, str, bool) ve input()",
      "homework": "Yıldızlarla (*) konsolda bir roket veya çam ağacı deseni oluşturan 7 satırlık Python kodu yazın."
    }
  },
  {
    "week": 22,
    "date": "22 - 28 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "Veri Tipleri",
    "unitTheme": "unite-4",
    "title": "Python Değişkenleri, Veri Tipleri ve input()",
    "subtitle": "Bellekte Veri Saklama ve Kullanıcı ile İnteraktif İletişim",
    "outcomeCode": "BTY.8.4.2",
    "targetSkill": "Veri Modelleme & Dinamik Girdi Alma",
    "curiosityQuestion": "Bir oyun kullanıcının adını ve anlık skorunu bilgisayarın belleğinde nasıl hatırlar?",
    "roadmap": [
      {
        "title": "Değişkenler (Variables)",
        "desc": "RAM belleğinde etiketlenmiş özel veri kutuları."
      },
      {
        "title": "4 Temel Veri Tipi",
        "desc": "int (tam sayı), float (ondalık), str (metin), bool (mantıksal)."
      },
      {
        "title": "input() Fonksiyonu",
        "desc": "Klavyeden kullanıcı verisi alma mekanizması."
      },
      {
        "title": "Tip Dönüşümleri (Casting)",
        "desc": "int(), float(), str() ile veri tipini dönüştürme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">RAM Bellek Modeli ve Değişken Tipleri</text>\n  <g transform=\"translate(30, 75)\">\n    <rect width=\"90\" height=\"130\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">str</text>\n    <text x=\"45\" y=\"70\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\">\"Elif\"</text>\n    <text x=\"45\" y=\"110\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Metin</text>\n  </g>\n  <g transform=\"translate(130, 75)\">\n    <rect width=\"90\" height=\"130\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"12\" font-weight=\"bold\">int</text>\n    <text x=\"45\" y=\"70\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"16\" font-weight=\"bold\">14</text>\n    <text x=\"45\" y=\"110\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Tam Sayı</text>\n  </g>\n  <g transform=\"translate(230, 75)\">\n    <rect width=\"90\" height=\"130\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"bold\">float</text>\n    <text x=\"45\" y=\"70\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\">98.5</text>\n    <text x=\"45\" y=\"110\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Ondalık</text>\n  </g>\n  <g transform=\"translate(330, 75)\">\n    <rect width=\"90\" height=\"130\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#ec4899\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#ec4899\" font-size=\"12\" font-weight=\"bold\">bool</text>\n    <text x=\"45\" y=\"70\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"14\">True</text>\n    <text x=\"45\" y=\"110\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Mantıksal</text>\n  </g>\n  <rect x=\"30\" y=\"225\" width=\"390\" height=\"70\" rx=\"8\" fill=\"#030712\" stroke=\"#ef4444\"/>\n  <text x=\"225\" y=\"250\" text-anchor=\"middle\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\">⚠️ input() DAİMA 'str' ÜRETİR!</text>\n  <text x=\"225\" y=\"275\" text-anchor=\"middle\" fill=\"#10b981\" font-family=\"monospace\" font-size=\"11\">sayi = int(input(\"Bir sayı giriniz: \"))  # Tip Dönüşümü!</text>\n</svg>",
    "section1": {
      "title": "RAM Bellekte Değişken Yönetimi",
      "subtitle": "Doğru veriyi doğru tipte saklama kuralları:",
      "cards": [
        {
          "title": "Veri Tipi Sınıfları",
          "icon": "📦",
          "desc": "Python her verinin türünü bellekte otomatik olarak tanır.",
          "items": [
            {
              "bold": "int (Tam Sayı)",
              "text": "yas = 14, seviye = 8"
            },
            {
              "bold": "float (Kesirli)",
              "text": "ortalama = 98.5, pi = 3.14"
            },
            {
              "bold": "str (Metin)",
              "text": "ad = 'Kerem', okul = 'Atatürk OO'"
            },
            {
              "bold": "bool (Mantıksal)",
              "text": "lgs_hazir = True, oyun_bitti = False"
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "input() ile Etkileşimli Programlar",
      "subtitle": "Kullanıcıdan veri alıp matematiksel işlem yapma:",
      "codeSnippet": "# Yaş ve Doğum Yılı Hesaplayıcı\nad = input('Adınız nedir? ')\ndogum_yili = int(input('Doğum yılınız? '))\nyas = 2026 - dogum_yili\nprint(f'Sayın {ad}, 2026 yılında {yas} yaşındasınız!')",
      "codeTitle": "yas_hesapla.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Kritik Kural",
          "title": "input() String Üretir!",
          "desc": "input() ile alınan sayı '5' metnidir; 5 sayısı değildir. Toplamak için int() dönüşümü şarttır.",
          "items": [
            {
              "bold": "Tip Hatası (TypeError)",
              "text": "'10' + 5 işlemi Python'da hata verir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Yaş ve Geometri Asistanı",
      "subtitle": "Kullanıcıdan dikdörtgenin kenarlarını alıp alan ve çevresini hesaplayan interaktif betik.",
      "steps": [
        {
          "title": "Girdileri Al",
          "desc": "float(input()) ile kısa ve uzun kenarı kullanıcıdan isteyin."
        },
        {
          "title": "Hesapla",
          "desc": "alan = kisa * uzun ve cevre = 2 * (kisa + uzun) formüllerini işletin."
        },
        {
          "title": "Ekrana Yazdır",
          "desc": "f-string ile formatlanmış şık mesaj üretin."
        }
      ],
      "criteria": [
        "Tip dönüşümlerinin (float/int) doğru yapılması",
        "Matematiksel formüllerin hatasız uygulanması",
        "Kullanıcı dostu yönlendirme mesajları"
      ]
    },
    "tips": {
      "safetyTitle": "Değişken İsimlendirme Kuralları",
      "safetyRules": [
        {
          "bold": "Sayı ile Başlayamaz",
          "text": "'1sayi' yasaktır; 'sayi1' uygundur."
        },
        {
          "bold": "Özel Karakter Yasağı",
          "text": "Boşluk ve özel işaret kullanılmaz; alt çizgi (_) tercih edilir."
        }
      ],
      "myths": [
        {
          "wrong": "Değişkenler program kapandıktan sonra da silinmez.",
          "correct": "Değişkenler RAM belleğindedir; program kapanınca silinir."
        }
      ]
    },
    "quiz": {
      "question": "Python'da x = '10' ve y = '20' ise print(x + y) komutunun çıktısı ne olur?",
      "options": [
        {
          "text": "30",
          "isCorrect": false
        },
        {
          "text": "1020",
          "isCorrect": true
        },
        {
          "text": "SyntaxError",
          "isCorrect": false
        },
        {
          "text": "TypeError",
          "isCorrect": false
        }
      ],
      "explanation": "Her iki değişken de tırnak içinde string olduğu için '+' işareti metinleri yan yana yapıştırır: '1020'."
    },
    "summary": {
      "keyPoints": [
        "int, float, str, bool temel Python veri tipleridir.",
        "input() fonksiyonu daima str döndürür; sayılar için int() veya float() ile dönüştürülmelidir."
      ],
      "nextWeek": "Matematiksel ve Mantıksal Operatörler (+, -, *, /, //, %, ==, and, or)",
      "homework": "Kullanıcıdan alınan 3 sınav notunun ortalamasını hesaplayan mini bir e-Okul not asistanı yazın."
    }
  },
  {
    "week": 23,
    "date": "01 - 07 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "Operatörler",
    "unitTheme": "unite-4",
    "title": "Matematiksel ve Mantıksal Operatörler",
    "subtitle": "Bilgisayara Karşılaştırma Yaptırma ve Hesaplatma Gücü Kazandırma",
    "outcomeCode": "BTY.8.4.3",
    "targetSkill": "Aritmetik ve Mantık İfadeleri Modelleme",
    "curiosityQuestion": "Bir alışveriş sitesi 'Sepet 500 TL üzeri VE Prime üyesiyseniz kargo bedava' şartını nasıl kontrol eder?",
    "roadmap": [
      {
        "title": "Özel Aritmetik (% ve //)",
        "desc": "Kalan bulma (mod) ve tam bölme işlemlerinin gücü."
      },
      {
        "title": "Üs Alma (**)",
        "desc": "2**8 = 256 gibi büyük sayısal hesaplamalar."
      },
      {
        "title": "Karşılaştırma (==, !=)",
        "desc": "Değerleri kıyaslayıp True/False üretme."
      },
      {
        "title": "Mantıksal Kapılar",
        "desc": "and (VE), or (VEYA), not (DEĞİL) bağlaçları."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Aritmetik ve Mantık Operatörleri</text>\n  <rect x=\"40\" y=\"70\" width=\"175\" height=\"150\" rx=\"10\" fill=\"#1e1b4b\" stroke=\"#38bdf8\"/>\n  <text x=\"127\" y=\"95\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">Özel Operatörler</text>\n  <text x=\"55\" y=\"125\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">% : Mod (Kalan)</text>\n  <text x=\"55\" y=\"150\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">// : Tam Bölme</text>\n  <text x=\"55\" y=\"175\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">** : Üs Alma (2**3=8)</text>\n  <text x=\"127\" y=\"205\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"10\">sayi % 2 == 0 -&gt; ÇİFT</text>\n\n  <rect x=\"235\" y=\"70\" width=\"175\" height=\"150\" rx=\"10\" fill=\"#1e1b4b\" stroke=\"#10b981\"/>\n  <text x=\"322\" y=\"95\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\">Mantıksal (Boole)</text>\n  <text x=\"250\" y=\"125\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">and : VE (Hepsi True)</text>\n  <text x=\"250\" y=\"150\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">or  : VEYA (Biri True)</text>\n  <text x=\"250\" y=\"175\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">not : DEĞİL (Tersi)</text>\n  <text x=\"322\" y=\"205\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"10\">== eşit mi? != değil mi?</text>\n\n  <rect x=\"40\" y=\"235\" width=\"370\" height=\"60\" rx=\"8\" fill=\"#312e81\"/>\n  <text x=\"225\" y=\"270\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"11\" font-weight=\"bold\">Tek eşittir (=) atama yapar, çift eşittir (==) sorgular!</text>\n</svg>",
    "section1": {
      "title": "Modüler Aritmetik ve Algoritmik Önemi",
      "subtitle": "Kalan bulma (%) operatörü neden her algoritmanın kalbidir?",
      "cards": [
        {
          "title": "Operatörler Ailesi",
          "icon": "➗",
          "desc": "Bilgisayar mantığı sadece Boole (True/False) cebriyle çalışır.",
          "items": [
            {
              "bold": "sayi % 2 == 0",
              "text": "Sayının çift olduğunu garanti eder."
            },
            {
              "bold": "17 // 3",
              "text": "Sonucu 5 verir (kesri atar, tam kısmı alır)."
            },
            {
              "bold": "not True",
              "text": "False sonucunu üretir (tersleme)."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "LGS Bursluluk Hak Kazanma Formülü",
      "subtitle": "Çoklu şartları 'and' ile birbirine bağlama:",
      "codeSnippet": "# Bursluluk Kontrol Algoritması\npuan = float(input('LGS Puanınız: '))\ndevamsizlik = int(input('Devamsızlık Gün Sayısı: '))\nburs_hakki = (puan >= 450) and (devamsizlik < 5)\nprint('Burs Kazanma Durumu:', burs_hakki)",
      "codeTitle": "burs_kontrol.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Mantık",
          "title": "and vs or Farkı",
          "desc": "'and' tüm şartların True olmasını zorunlu kılar; 'or' ise bir tanesinin bile doğru olmasını yeterli görür.",
          "items": [
            {
              "bold": "Tek = vs Çift ==",
              "text": "'=' atama emridir, '==' eşit mi sorusudur."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Çift Sayı ve Tam Bölünme Test Aracı",
      "subtitle": "Girilen sayının hem 3'e hem de 5'e bölünüp bölünmediğini tek formülde çözen program.",
      "steps": [
        {
          "title": "Sayıyı Al",
          "desc": "int(input()) ile tam sayıyı okuyun."
        },
        {
          "title": "Formülü Kur",
          "desc": "sonuc = (sayi % 3 == 0) and (sayi % 5 == 0) mantığını kurun."
        },
        {
          "title": "Sonucu İlan Et",
          "desc": "Ekrana True veya False basarak test edin."
        }
      ],
      "criteria": [
        "Mod (%) operatörünün doğru kullanılması",
        "and mantık bağlacının doğru uygulanması",
        "Eşitlik kontrolünde == kullanılması"
      ]
    },
    "tips": {
      "safetyTitle": "Operatör Önceliği İpuçları",
      "safetyRules": [
        {
          "bold": "Parantez Kullan",
          "text": "Karmaşık mantık işlemlerinde parantez kullanarak işlem önceliğini garantiye al."
        }
      ],
      "myths": [
        {
          "wrong": "10 / 2 işlemi int tam sayı üretir.",
          "correct": "Python'da tek bölme (/) daima float (5.0) üretir; tam sayı için // kullanılmalıdır."
        }
      ]
    },
    "quiz": {
      "question": "Python'da 23 % 5 + 3 ** 2 ifadesinin işlem sonucu kaçtır?",
      "options": [
        {
          "text": "12",
          "isCorrect": true
        },
        {
          "text": "10",
          "isCorrect": false
        },
        {
          "text": "7",
          "isCorrect": false
        },
        {
          "text": "14",
          "isCorrect": false
        }
      ],
      "explanation": "23 % 5 = 3 (kalan). 3 ** 2 = 9. Toplam: 3 + 9 = 12."
    },
    "summary": {
      "keyPoints": [
        "% (mod) kalanı, // tam bölümü, ** üs almayı sağlar.",
        "and, or, not operatörleri koşulları mantıksal olarak bağlar."
      ],
      "nextWeek": "Karar Yapıları: if - elif - else Koşul Blokları",
      "homework": "Bir ürünün KDV'li fiyatını ve indirim oranını hesaplayan 5 satırlık bir finans formülü yazın."
    }
  },
  {
    "week": 24,
    "date": "08 - 14 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "Karar Yapıları",
    "unitTheme": "unite-4",
    "title": "Karar Yapıları: if - elif - else Koşul Blokları",
    "subtitle": "Koda Kendi Başına Karar Verme Yeteneği Kazandırma",
    "outcomeCode": "BTY.8.4.3",
    "targetSkill": "Dallanan Algoritmalar & Koşul Denetimi",
    "curiosityQuestion": "Otonom bir araç önüne yaya çıktığında durup durmayacağına kod satırlarında nasıl karar verir?",
    "roadmap": [
      {
        "title": "if (Eğer)",
        "desc": "İlk şartın doğruluğunu denetleme."
      },
      {
        "title": "elif (Değilse Eğer)",
        "desc": "İlk şart yanlışsa sıradaki alternatif şartları denetleme."
      },
      {
        "title": "else (Değilse)",
        "desc": "Hiçbir şart tutmadığında devreye giren son kapı."
      },
      {
        "title": "İki Nokta ve Girinti",
        "desc": "':' işareti ve 4 boşlukluk blok kuralı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Python if - elif - else Karar Ağacı</text>\n  <polygon points=\"225,65 315,100 225,135 135,100\" fill=\"#1e1b4b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"105\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">puan &gt;= 85 ?</text>\n  <line x1=\"315\" y1=\"100\" x2=\"380\" y2=\"100\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <rect x=\"380\" y=\"80\" width=\"55\" height=\"40\" rx=\"6\" fill=\"#10b981\" fill-opacity=\"0.2\" stroke=\"#10b981\"/>\n  <text x=\"407\" y=\"105\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">Not: 5</text>\n  <line x1=\"225\" y1=\"135\" x2=\"225\" y2=\"170\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n  <polygon points=\"225,170 315,205 225,240 135,205\" fill=\"#1e1b4b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"210\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\">puan &gt;= 70 ?</text>\n  <line x1=\"315\" y1=\"205\" x2=\"380\" y2=\"205\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <rect x=\"380\" y=\"185\" width=\"55\" height=\"40\" rx=\"6\" fill=\"#f59e0b\" fill-opacity=\"0.2\" stroke=\"#f59e0b\"/>\n  <text x=\"407\" y=\"210\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"10\" font-weight=\"bold\">Not: 4</text>\n  <rect x=\"50\" y=\"260\" width=\"350\" height=\"45\" rx=\"8\" fill=\"#030712\" stroke=\"#8b5cf6\"/>\n  <text x=\"225\" y=\"287\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Girintileme (Indentation / 4 Boşluk) Python'da Zorunludur!</text>\n</svg>",
    "section1": {
      "title": "Koşullu Dallanma Mimarisi",
      "subtitle": "Program akışının şartlara göre farklı yollardan ilerlemesi:",
      "cards": [
        {
          "title": "Karar Mekanizması",
          "icon": "🔀",
          "desc": "Bilgisayar şartın True veya False olmasına göre ilgili bloğu çalıştırır.",
          "items": [
            {
              "bold": "İki Nokta Üst Üste (:)",
              "text": "Koşul satırının bittiğini ve bloğun başlayacağını gösterir."
            },
            {
              "bold": "Girinti (Indentation)",
              "text": "TAB veya 4 boşluk kuralı Python'ın omurgasıdır."
            },
            {
              "bold": "Çift Eşittir (==)",
              "text": "Atama (=) ile karşılaştırma (==) asla karıştırılmamalıdır!"
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Çoklu Koşul Örneği: Not Derecelendirme",
      "subtitle": "if - elif - else hiyerarşisi:",
      "codeSnippet": "puan = int(input('Sınav Puanınız: '))\nif puan >= 85:\n    print('Not: 5 - Takdir Belgesi!')\nelif puan >= 70:\n    print('Not: 4 - Teşekkür Belgesi')\nelif puan >= 50:\n    print('Not: 3 - Geçti')\nelse:\n    print('Kaldı - Daha çok çalışmalısın')",
      "codeTitle": "not_degerlendir.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Mantık",
          "title": "Sıralama Önceliği",
          "desc": "elif blokları yukarıdan aşağıya taranır; ilk tutan şart çalışır ve bloktan çıkılır.",
          "items": [
            {
              "bold": "else Bloğu",
              "text": "Şart almaz; yukarıdakiler tutmazsa otomatik devreye girer."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Radar ve Hız Cezası Simülasyonu",
      "subtitle": "Araç hızına göre ceza tutarını veya tebrik mesajını belirleyen program.",
      "steps": [
        {
          "title": "Hız Bilgisini Al",
          "desc": "int(input('Hızınız (km/s): ')) ile hızı okuyun."
        },
        {
          "title": "Koşulları Kur",
          "desc": "hiz <= 82, 83-100 arası ve >100 durumlarını if-elif-else ile ayırın."
        },
        {
          "title": "Ceza Hesapla",
          "desc": "Kural ihlaline göre ceza tutarını ve puan düşüşünü yazdırın."
        }
      ],
      "criteria": [
        "if-elif-else bloklarının doğru sıralanması",
        "Sınır değerlerin (<, <=, >) hatasız kullanımı",
        "Girintileme (indentation) hatası yapılmaması"
      ]
    },
    "tips": {
      "safetyTitle": "Koşul Blokları Hijyeni",
      "safetyRules": [
        {
          "bold": ": İşareti",
          "text": "if, elif, else satırlarının sonuna iki nokta koymayı asla unutmayın."
        },
        {
          "bold": "Atama Tuzağı",
          "text": "if x = 5 yazmak sözdizimi hatasıdır; doğrusu if x == 5:"
        }
      ],
      "myths": [
        {
          "wrong": "Bir if yapısında istediğimiz kadar else kullanabiliriz.",
          "correct": "Bir if yapısında sadece 1 adet else olabilir ve daima en sonda yer alır."
        }
      ]
    },
    "quiz": {
      "question": "hava = 'Gunesli' ve sicaklik = 18 ise aşağıdaki kod ne yazar?\nif hava == 'Gunesli' and sicaklik > 25:\n    print('Yüzmeye Git')\nelif hava == 'Gunesli':\n    print('Yürüyüş Yap')\nelse:\n    print('Evde Kal')",
      "options": [
        {
          "text": "Yüzmeye Git",
          "isCorrect": false
        },
        {
          "text": "Yürüyüş Yap",
          "isCorrect": true
        },
        {
          "text": "Evde Kal",
          "isCorrect": false
        },
        {
          "text": "Hiçbir şey yazmaz",
          "isCorrect": false
        }
      ],
      "explanation": "İlk if şartında sıcaklık 18 olduğu için (>25 sağlanmaz) ilk blok atlanır. elif şartı hava=='Gunesli' doğru olduğundan 'Yürüyüş Yap' çalışır."
    },
    "summary": {
      "keyPoints": [
        "if-elif-else kararları programlara zeka ve yön kazandırır.",
        "İki nokta (:) ve 4 boşlukluk girintileme Python için zorunludur."
      ],
      "nextWeek": "Döngüler: for ve while Döngüleri, range() Fonksiyonu",
      "homework": "Kullanıcıdan hava sıcaklığını alıp suyun katı, sıvı veya gaz halinde olduğunu söyleyen mini bir fizik termometresi kodlayın."
    }
  },
  {
    "week": 25,
    "date": "15 - 21 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "Döngüler",
    "unitTheme": "unite-4",
    "title": "Döngüler: for ve while Döngüleri, range()",
    "subtitle": "Binlerce İşi Göz Açıp Kapayıncaya Kadar Tekrarlatmanın Sırrı",
    "outcomeCode": "BTY.8.4.4",
    "targetSkill": "Otomasyon & Tekrarlı Algoritmalar",
    "curiosityQuestion": "1 Milyon veriyi tek tek elle incelemek mi yoksa 3 satırlık bir döngü yazmak mı?",
    "roadmap": [
      {
        "title": "for Döngüsü",
        "desc": "Tekrar sayısı belli durumlarda sayaçla çalışma."
      },
      {
        "title": "range(başla, bitir, adım)",
        "desc": "Sayı dizileri üretme kuralları."
      },
      {
        "title": "while Döngüsü",
        "desc": "Belli bir koşul sağlandığı sürece dönme."
      },
      {
        "title": "Sonsuz Döngü Tehlikesi",
        "desc": "Sayacı güncellemeyi unutmanın riskleri."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">for ve while Döngü Mekanizmaları</text>\n  <rect x=\"40\" y=\"70\" width=\"175\" height=\"160\" rx=\"10\" fill=\"#1e1b4b\" stroke=\"#38bdf8\"/>\n  <text x=\"127\" y=\"95\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">for Döngüsü</text>\n  <text x=\"60\" y=\"125\" fill=\"#a78bfa\" font-family=\"monospace\" font-size=\"11\">for </text>\n  <text x=\"85\" y=\"125\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"11\">i </text>\n  <text x=\"100\" y=\"125\" fill=\"#a78bfa\" font-family=\"monospace\" font-size=\"11\">in </text>\n  <text x=\"120\" y=\"125\" fill=\"#10b981\" font-family=\"monospace\" font-size=\"11\">range</text>\n  <text x=\"155\" y=\"125\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">(5):</text>\n  <text x=\"80\" y=\"150\" fill=\"#f59e0b\" font-family=\"monospace\" font-size=\"11\">    print(i)</text>\n  <text x=\"127\" y=\"195\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Tekrar Sayısı Belli</text>\n  <text x=\"127\" y=\"215\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\">0, 1, 2, 3, 4 (5 adım)</text>\n\n  <rect x=\"235\" y=\"70\" width=\"175\" height=\"160\" rx=\"10\" fill=\"#1e1b4b\" stroke=\"#10b981\"/>\n  <text x=\"322\" y=\"95\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\">while Döngüsü</text>\n  <text x=\"250\" y=\"125\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"11\">hak = 3</text>\n  <text x=\"250\" y=\"145\" fill=\"#a78bfa\" font-family=\"monospace\" font-size=\"11\">while </text>\n  <text x=\"290\" y=\"145\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"11\">hak &gt; 0:</text>\n  <text x=\"270\" y=\"165\" fill=\"#ef4444\" font-family=\"monospace\" font-size=\"11\">    hak -= 1</text>\n  <text x=\"322\" y=\"195\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Şarta Bağlı Tekrar</text>\n  <text x=\"322\" y=\"215\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"10\">Şart False olunca biter</text>\n  <rect x=\"40\" y=\"245\" width=\"370\" height=\"55\" rx=\"8\" fill=\"#312e81\"/>\n  <text x=\"225\" y=\"277\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"11\" font-weight=\"bold\">Sonsuz döngüye girmemek için sayacı güncellemeyi unutma!</text>\n</svg>",
    "section1": {
      "title": "for vs while: Ne Zaman Hangisi?",
      "subtitle": "Doğru senaryoda doğru döngüyü seçme rehberi:",
      "cards": [
        {
          "title": "Döngü Türleri",
          "icon": "🔄",
          "desc": "Bilgisayarları insanlardan üstün kılan en büyük güç yorulmadan tekrarlamalarıdır.",
          "items": [
            {
              "bold": "for Döngüsü",
              "text": "Adım sayısı baştan belliyse (Örn: 10 kez dön, listedeki her elemanı gez)."
            },
            {
              "bold": "while Döngüsü",
              "text": "Koşula bağlıysa (Örn: Kullanıcı doğru şifre girene kadar sor)."
            },
            {
              "bold": "range(1, 10)",
              "text": "1'den 9'a kadar sayar; son sayı (10) DAHİL DEĞİLDİR!"
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Döngü ile Sayaç ve Toplam Bulma",
      "subtitle": "Akümülatör (Biriktirici) Algoritması:",
      "codeSnippet": "# 1'den 100'e Kadar Sayıların Toplamı\ntoplam = 0\nfor sayi in range(1, 101):\n    toplam += sayi\nprint('1-100 Arası Toplam:', toplam)",
      "codeTitle": "toplam_bul.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Algoritma",
          "title": "Akümülatör Mantığı",
          "desc": "toplam = 0 başlangıç sepetine her adımda yeni sayı eklenerek biriktirilir.",
          "items": [
            {
              "bold": "+= Operatörü",
              "text": "toplam = toplam + sayi ifadesinin kısa yazımıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Geri Sayım ve Roket Fırlatma Simülasyonu",
      "subtitle": "10'dan geriye 1'e kadar sayıp '🚀 ATEŞLENDİ!' yazdıran otomasyon betiği.",
      "steps": [
        {
          "title": "Döngüyü Kur",
          "desc": "for i in range(10, 0, -1) veya while sayac > 0 kullanın."
        },
        {
          "title": "Geri Sayımı Yazdır",
          "desc": "Her saniye kalan sayıyı konsola basın."
        },
        {
          "title": "Fırlatma Mesajı",
          "desc": "Döngü bittiğinde tebrik ve fırlatma mesajını duyurun."
        }
      ],
      "criteria": [
        "Geriye doğru adım parametresinin (-1) doğru kullanılması",
        "Döngü çıkış şartının doğru kurgulanması",
        "Sonsuz döngüye girilmemesi"
      ]
    },
    "tips": {
      "safetyTitle": "Döngü Güvenliği",
      "safetyRules": [
        {
          "bold": "Sonsuz Döngüden Kaçış",
          "text": "while döngüsünde şartı bozan sayacı (hak -= 1) asla unutmayın."
        },
        {
          "bold": "Bitiş Sınırı",
          "text": "range(1, 10) yazdığınızda 10'un dahil olmadığını hatırlayın."
        }
      ],
      "myths": [
        {
          "wrong": "Döngüler bilgisayarı yavaşlatır.",
          "correct": "Döngüler işlemcinin en optimize çalıştığı en hızlı kod yapılarıdır."
        }
      ]
    },
    "quiz": {
      "question": "for i in range(2, 10, 3): print(i) kod bloğu ekrana hangi sayıları yazdırır?",
      "options": [
        {
          "text": "2, 5, 8",
          "isCorrect": true
        },
        {
          "text": "2, 3, 4, 5, 6, 7, 8, 9, 10",
          "isCorrect": false
        },
        {
          "text": "2, 5, 8, 11",
          "isCorrect": false
        },
        {
          "text": "3, 6, 9",
          "isCorrect": false
        }
      ],
      "explanation": "2 ile başlar, 3'er artar (2, 5, 8). Bir sonraki adım 11 olurdu ama bitiş 10 olduğu için döngü 8'de durur."
    },
    "summary": {
      "keyPoints": [
        "for döngüsü adımı belli durumlarda range() ile kullanılır.",
        "while döngüsü koşula bağlıdır ve sayacın güncellenmesi şarttır."
      ],
      "nextWeek": "Python Listeleri ve Veri Koleksiyonları (12 Mart İstiklâl Marşı Analizi)",
      "homework": "Kullanıcının girdiği bir sayının çarpım tablosunu (1-10 arası) for döngüsüyle ekrana yazdıran program kodlayın."
    }
  },
  {
    "week": 26,
    "date": "22 - 28 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "12 Mart Özel",
    "unitTheme": "unite-4",
    "title": "Python Listeleri ve 12 Mart İstiklâl Marşı Metin Analizi",
    "subtitle": "Büyük Veri Koleksiyonları, İndeksleme ve Milli Mirasın Kodlanması",
    "outcomeCode": "BTY.8.4.5",
    "targetSkill": "Veri Yapıları & Dizi Analitiği",
    "curiosityQuestion": "1000 öğrencinin sınav notunu saklamak için 1000 ayrı değişken açmak zorunda kalsaydık ne olurdu?",
    "roadmap": [
      {
        "title": "Liste Anatomisi ([])",
        "desc": "Köşeli parantez içinde çoklu veri saklama."
      },
      {
        "title": "Sıfır Tabanlı İndeks",
        "desc": "İlk elemanın daima 0. indeks olması kuralı."
      },
      {
        "title": "Liste Metotları",
        "desc": "append() ekler, remove() siler, len() sayar."
      },
      {
        "title": "12 Mart Metin Analizi",
        "desc": "İstiklâl Marşı kıtalarındaki kelimeleri algoritmik tarama."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Python Liste (List) İndeksleme Mantığı</text>\n  <g transform=\"translate(30, 80)\">\n    <rect width=\"90\" height=\"70\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"12\">\"Korkma\"</text>\n    <text x=\"45\" y=\"55\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">[0]</text>\n  </g>\n  <g transform=\"translate(130, 80)\">\n    <rect width=\"90\" height=\"70\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"12\">\"Sönmez\"</text>\n    <text x=\"45\" y=\"55\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">[1]</text>\n  </g>\n  <g transform=\"translate(230, 80)\">\n    <rect width=\"90\" height=\"70\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"12\">\"Bu\"</text>\n    <text x=\"45\" y=\"55\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\" font-weight=\"bold\">[2]</text>\n  </g>\n  <g transform=\"translate(330, 80)\">\n    <rect width=\"90\" height=\"70\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#ec4899\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"30\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"12\">\"Şafak\"</text>\n    <text x=\"45\" y=\"55\" text-anchor=\"middle\" fill=\"#ec4899\" font-size=\"11\" font-weight=\"bold\">[3]</text>\n  </g>\n  <rect x=\"30\" y=\"175\" width=\"390\" height=\"115\" rx=\"8\" fill=\"#030712\" stroke=\"#ef4444\"/>\n  <text x=\"225\" y=\"200\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\">🇹🇷 12 Mart İstiklâl Marşı'nın Kabulü</text>\n  <text x=\"50\" y=\"225\" fill=\"#cbd5e1\" font-family=\"monospace\" font-size=\"11\">kelimeler.append(\"Yüzen\")  # Listeye son eleman ekler</text>\n  <text x=\"50\" y=\"250\" fill=\"#cbd5e1\" font-family=\"monospace\" font-size=\"11\">len(kelimeler)             # Toplam eleman sayısı: 5</text>\n  <text x=\"50\" y=\"275\" fill=\"#10b981\" font-family=\"monospace\" font-size=\"11\">kelimeler[0]               # İlk eleman: 'Korkma'</text>\n</svg>",
    "section1": {
      "title": "Python Listeleri (Lists) ve Bellek Yerleşimi",
      "subtitle": "Tek bir isim altında birden fazla veriyi düzenli kompartımanlarda tutma:",
      "cards": [
        {
          "title": "Liste Temelleri",
          "icon": "📋",
          "desc": "Listeler dinamik boyutludur; eleman eklenip çıkarılabilir.",
          "items": [
            {
              "bold": "notlar = [85, 90, 100]",
              "text": "3 elemanlı sayı listesi."
            },
            {
              "bold": "notlar[0]",
              "text": "İlk eleman olan 85'i verir."
            },
            {
              "bold": "notlar.append(95)",
              "text": "Listenin sonuna 95 ekler."
            },
            {
              "bold": "len(notlar)",
              "text": "Listenin kaç elemanlı olduğunu söyler."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "12 Mart İstiklâl Marşı Kelime Sayacı",
      "subtitle": "Mehmet Âkif Ersoy'un ölümsüz mısralarını Python ile analiz etme:",
      "codeSnippet": "# İstiklâl Marşı İlk Kıta Kelime Analizi\nkelimeler = ['Korkma', 'sönmez', 'bu', 'şafaklarda', 'yüzen', 'al', 'sancak']\nprint('Toplam Kelime:', len(kelimeler))\nuzun_kelimeler = [k for k in kelimeler if len(k) > 5]\nprint('5 Harften Uzunlar:', uzun_kelimeler)",
      "codeTitle": "istiklal_analiz.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "12 Mart",
          "title": "İstiklâl Marşı'nın Kabulü",
          "desc": "Milli marşımızın asil mısralarını veri yapıları ve algoritmik filtrelerle işledik.",
          "items": [
            {
              "bold": "Milli Bilişim",
              "text": "Kültürel değerlerimizi dijital dünyaya taşıyoruz."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "İstiklâl Marşı Kelime Dedektifi",
      "subtitle": "Listede aranan bir kelimenin kaç defa geçtiğini sayan (Frequency Counter) algoritma.",
      "steps": [
        {
          "title": "Listeyi Tanımla",
          "desc": "İlk kıtadaki tüm kelimeleri bir listeye aktarın."
        },
        {
          "title": "Arama Yap",
          "desc": "for k in kelimeler döngüsü ile hedef kelimeyi arayın."
        },
        {
          "title": "Sayacı Artır",
          "desc": "if k == 'vatan': sayac += 1 ile frekansı ekrana basın."
        }
      ],
      "criteria": [
        "Listenin doğru indekslenmesi",
        "len() ve append() fonksiyonlarının doğru uygulanması",
        "Döngü ile liste taramanın hatasız yapılması"
      ]
    },
    "tips": {
      "safetyTitle": "Liste İndeksleme İpuçları",
      "safetyRules": [
        {
          "bold": "İndeks Sınırı (IndexError)",
          "text": "3 elemanlı bir listenin [3] indeksine erişmeye çalışırsanız hata alırsınız (0, 1, 2 vardır!)."
        }
      ],
      "myths": [
        {
          "wrong": "Listenin ilk elemanı liste[1] ile çağrılır.",
          "correct": "Bilgisayar biliminde indeksler 0'dan başlar; ilk eleman liste[0]'dır."
        }
      ]
    },
    "quiz": {
      "question": "sayilar = [10, 20, 30, 40] listesinde print(sayilar[2]) komutu ne yazdırır?",
      "options": [
        {
          "text": "20",
          "isCorrect": false
        },
        {
          "text": "30",
          "isCorrect": true
        },
        {
          "text": "10",
          "isCorrect": false
        },
        {
          "text": "40",
          "isCorrect": false
        }
      ],
      "explanation": "İndeks 0: 10, İndeks 1: 20, İndeks 2: 30'dur. Bu nedenle çıktı 30 olur."
    },
    "summary": {
      "keyPoints": [
        "Listeler köşeli parantezle tanımlanır ve sıfır tabanlı indeksleme kullanır.",
        "append() eleman ekler, len() uzunluğu verir. 12 Mart milli şuurunu bilişimle andık."
      ],
      "nextWeek": "Fonksiyonlar (def): Modüler Kod ve 18 Mart Çanakkale Zaferi Balistiği",
      "homework": "En sevdiğiniz 5 teknolojik icadı listede tutup, kullanıcıdan aranan kelimeyi sorgulayan bir arama betiği yazın."
    }
  },
  {
    "week": 27,
    "date": "29 Mart - 04 Nisan",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "18 Mart Özel",
    "unitTheme": "unite-4",
    "title": "Fonksiyonlar (def) ve 18 Mart Çanakkale Zaferi Balistiği",
    "subtitle": "Kodu Modüllere Bölme, Parametre, Return ve Seyit Onbaşı Menzil Simülasyonu",
    "outcomeCode": "BTY.8.4.6",
    "targetSkill": "Modüler Programlama & Fonksiyonel Mimari",
    "curiosityQuestion": "Aynı kod satırlarını 50 defa kopyalamak yerine tek bir kelimeyle çağırmak nasıl mümkündür?",
    "roadmap": [
      {
        "title": "Fonksiyon Tanımlama (def)",
        "desc": "Koda yeni bir yetenek kazandırma ve adlandırma."
      },
      {
        "title": "Parametreler (Girdiler)",
        "desc": "Fonksiyonun çalışması için dışarıdan aldığı değişkenler."
      },
      {
        "title": "return Mekanizması",
        "desc": "Hesaplanan değeri programa geri fırlatma."
      },
      {
        "title": "18 Mart Seyit Onbaşı",
        "desc": "276 kg'lık top mermisinin fiziksel menzil hesabı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Fonksiyon (def) Fabrikası &amp; Çanakkale</text>\n  <rect x=\"40\" y=\"70\" width=\"100\" height=\"70\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#38bdf8\"/>\n  <text x=\"90\" y=\"100\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">PARAMETRE</text>\n  <text x=\"90\" y=\"120\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"10\">aci=45, hiz=200</text>\n  <line x1=\"140\" y1=\"105\" x2=\"175\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <rect x=\"175\" y=\"65\" width=\"130\" height=\"85\" rx=\"10\" fill=\"#312e81\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"240\" y=\"95\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"12\" font-weight=\"bold\">def menzil()</text>\n  <text x=\"240\" y=\"120\" text-anchor=\"middle\" fill=\"#10b981\" font-family=\"monospace\" font-size=\"11\">return x</text>\n  <line x1=\"305\" y1=\"105\" x2=\"340\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <rect x=\"340\" y=\"70\" width=\"80\" height=\"70\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#10b981\"/>\n  <text x=\"380\" y=\"100\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">RETURN</text>\n  <text x=\"380\" y=\"120\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"10\">4081 m</text>\n  <rect x=\"30\" y=\"175\" width=\"390\" height=\"115\" rx=\"8\" fill=\"#030712\" stroke=\"#ef4444\"/>\n  <text x=\"225\" y=\"200\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\">🇹🇷 18 Mart Çanakkale Zaferi ve Şehitleri Anma</text>\n  <text x=\"50\" y=\"225\" fill=\"#cbd5e1\" font-size=\"11\">Seyit Onbaşı'nın 276 kg'lık mermiyi namluya sürdüğü anın</text>\n  <text x=\"50\" y=\"245\" fill=\"#cbd5e1\" font-size=\"11\">fiziksel menzil hesabını Python fonksiyonuyla modelledik!</text>\n  <text x=\"50\" y=\"270\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"11\">DRY Prensibi: Kendini tekrar etme; fonksiyon yaz!</text>\n</svg>",
    "section1": {
      "title": "Fonksiyon Kara Kutu Modeli (Girdi - İşlem - Çıktı)",
      "subtitle": "DRY Prensibi (Don't Repeat Yourself - Kendini Tekrar Etme):",
      "cards": [
        {
          "title": "def Yapısı",
          "icon": "⚙️",
          "desc": "Fonksiyonlar yazılımın yeniden kullanılabilir yapı taşlarıdır.",
          "items": [
            {
              "bold": "def kare_al(sayi):",
              "text": "Parametre alan fonksiyon tanımı."
            },
            {
              "bold": "return sayi ** 2",
              "text": "Sonucu çağıran yere teslim eder."
            },
            {
              "bold": "print() vs return",
              "text": "print sadece ekrana yazar, return ise değeri başka formüllere aktarır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "18 Mart Çanakkale Zaferi Top Atış Simülasyonu",
      "subtitle": "Seyit Onbaşı'nın Ocean zırhlısını vurduğu tarihi atışın matematiği:",
      "codeSnippet": "# Çanakkale Topçu Balistik Fonksiyonu\ndef menzil_hesapla(cikis_hizi, yercekimi=9.8):\n    # 45 derece maksimum menzil formülü: v^2 / g\n    menzil = (cikis_hizi ** 2) / yercekimi\n    return round(menzil, 1)\n\nseyit_onbasi_menzil = menzil_hesapla(200)\nprint(f'Mermi Menzili: {seyit_onbasi_menzil} metre - Ocean Vuruldu!')",
      "codeTitle": "canakkale_topcu.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "18 Mart",
          "title": "Çanakkale Geçilmez!",
          "desc": "276 kiloluk mermiyi iman ve vatan sevgisiyle kaldıran Seyit Onbaşı'yı saygıyla anıyoruz.",
          "items": [
            {
              "bold": "Tarih ve Bilişim",
              "text": "Kahramanlarımızın destanını bilim ve yazılımla geleceğe taşıyoruz."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "LGS Puan Hesaplama Fonksiyonu",
      "subtitle": "Türkçe, Mat ve Fen netlerini parametre alıp tahmini puanı döndüren fonksiyon yazımı.",
      "steps": [
        {
          "title": "Fonksiyonu Tanımla",
          "desc": "def lgs_hesapla(t, m, f): başlığını açın."
        },
        {
          "title": "Katsayılarla Çarp",
          "desc": "puan = 100 + (t * 4.3) + (m * 4.3) + (f * 4.1) formülünü uygulayın."
        },
        {
          "title": "return Et",
          "desc": "Hesaplanan puanı return ile çağrıldığı yere geri gönderin."
        }
      ],
      "criteria": [
        "def ve return anahtar kelimelerinin doğru kullanımı",
        "Parametrelerin sırasıyla gönderilmesi",
        "Hesaplama mantığının doğruluğu"
      ]
    },
    "tips": {
      "safetyTitle": "Fonksiyon Tasarım Kuralları",
      "safetyRules": [
        {
          "bold": "Yerel Değişken (Local)",
          "text": "Fonksiyon içinde tanımlanan değişken dışarıdan erişilemez."
        }
      ],
      "myths": [
        {
          "wrong": "print() fonksiyonun çıktısını programa teslim eder.",
          "correct": "print sadece ekrana basar; programa veri teslim etmek için mutlaka return gerekir."
        }
      ]
    },
    "quiz": {
      "question": "def topla(a, b): return a + b kodunda topla(15, 25) * 2 ifadesinin sonucu kaçtır?",
      "options": [
        {
          "text": "40",
          "isCorrect": false
        },
        {
          "text": "80",
          "isCorrect": true
        },
        {
          "text": "1525",
          "isCorrect": false
        },
        {
          "text": "Hata verir",
          "isCorrect": false
        }
      ],
      "explanation": "topla(15, 25) fonksiyonu 40 döndürür. 40 * 2 = 80 olur."
    },
    "summary": {
      "keyPoints": [
        "Fonksiyonlar kod tekrarını önler ve modülerlik kazandırır.",
        "def ile tanımlanır, parametre alır ve return ile değer döndürür. Çanakkale şehitlerimizi andık."
      ],
      "nextWeek": "Python Turtle ile Geometrik Şekiller ve Fraktallar",
      "homework": "Parametre olarak verilen sayının asal sayı olup olmadığını bulup True/False döndüren def asal_mi(sayi): fonksiyonunu yazın."
    }
  },
  {
    "week": 28,
    "date": "05 - 11 Nisan",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "Görsel Kodlama",
    "unitTheme": "unite-4",
    "title": "Python Turtle ile Algoritmik Çizimler ve Fraktallar",
    "subtitle": "Matematik ve Sanatın Python Tuvalinde Buluşması",
    "outcomeCode": "BTY.8.4.7",
    "targetSkill": "Görsel Algoritma & Geometrik Modelleme",
    "curiosityQuestion": "Kar taneleri ve eğrelti otları doğada kodlanmış birer matematik algoritması mıdır?",
    "roadmap": [
      {
        "title": "Turtle Kütüphanesi",
        "desc": "import turtle ile ekrana çizim tuvali açma."
      },
      {
        "title": "Açı ve Mesafe",
        "desc": "forward(), right(), left() komutlarıyla yönlendirme."
      },
      {
        "title": "Dış Açı Formülü",
        "desc": "360 / kenar_sayisi ile çokgenleri çizme."
      },
      {
        "title": "Fraktal Ağaçlar",
        "desc": "Özyinelemeli (recursive) doğa çizimleri."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Python Turtle &amp; Algoritmik Sanat</text>\n  <g transform=\"translate(130, 250)\">\n    <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-60\" stroke=\"#8b5cf6\" stroke-width=\"6\"/>\n    <line x1=\"0\" y1=\"-60\" x2=\"-35\" y2=\"-100\" stroke=\"#a78bfa\" stroke-width=\"4\"/>\n    <line x1=\"0\" y1=\"-60\" x2=\"35\" y2=\"-100\" stroke=\"#a78bfa\" stroke-width=\"4\"/>\n    <circle cx=\"-35\" cy=\"-105\" r=\"5\" fill=\"#10b981\"/>\n    <circle cx=\"35\" cy=\"-105\" r=\"5\" fill=\"#10b981\"/>\n  </g>\n  <rect x=\"230\" y=\"70\" width=\"180\" height=\"160\" rx=\"10\" fill=\"#030712\" stroke=\"#8b5cf6\"/>\n  <text x=\"245\" y=\"95\" fill=\"#38bdf8\" font-family=\"monospace\" font-size=\"11\">import turtle</text>\n  <text x=\"245\" y=\"115\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">forward(100)</text>\n  <text x=\"245\" y=\"135\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">right(120)</text>\n  <text x=\"245\" y=\"165\" fill=\"#10b981\" font-size=\"10\">Dış Açı Formülü:</text>\n  <text x=\"245\" y=\"185\" fill=\"#f59e0b\" font-family=\"monospace\" font-size=\"11\">360 / kenar</text>\n  <rect x=\"40\" y=\"245\" width=\"370\" height=\"50\" rx=\"8\" fill=\"#1e1b4b\"/>\n  <text x=\"225\" y=\"275\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Doğadaki fraktallar ve kar taneleri matematiksel bir koddur.</text>\n</svg>",
    "section1": {
      "title": "Turtle Grafik Modülü ve Temel Komutlar",
      "subtitle": "Kodlarla piksel piksel resim yapma sanatı:",
      "cards": [
        {
          "title": "Çizim Yönergeleri",
          "icon": "🐢",
          "desc": "Kaplumbağayı ekranda bir kalem gibi hareket ettiririz.",
          "items": [
            {
              "bold": "forward(100)",
              "text": "100 piksel ileri çizerek git."
            },
            {
              "bold": "right(90)",
              "text": "Sağa 90 derece dön."
            },
            {
              "bold": "penup() / pendown()",
              "text": "Kalemi kaldır (çizme) ve indir (çiz)."
            },
            {
              "bold": "color('purple')",
              "text": "Çizgi rengini elektrik moru yap."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Döngü ile Çokgen ve Fraktal Geometrisi",
      "subtitle": "Düzgün altıgen ve fraktal dal algoritması:",
      "codeSnippet": "# Çokgen Çizim Algoritması\nimport turtle\nt = turtle.Turtle()\nt.color('#8b5cf6')\nkenar = 6\naci = 360 / kenar\nfor i in range(kenar):\n    t.forward(100)\n    t.left(aci)",
      "codeTitle": "turtle_cokgen.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Geometri",
          "title": "Dış Açı Prensibi",
          "desc": "Bütün dışbükey çokgenlerin dış açıları toplamı 360 derecedir.",
          "items": [
            {
              "bold": "Üçgen",
              "text": "360/3 = 120 derece dönüş."
            },
            {
              "bold": "Sekizgen",
              "text": "360/8 = 45 derece dönüş."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Renkli Çarkıfelek (Mandala) Çizim Atölyesi",
      "subtitle": "36 kez kare çizip 10 derece dönerek rengarenk bir geometrik desen üretme.",
      "steps": [
        {
          "title": "Turtle'ı Hazırla",
          "desc": "import turtle ve t.speed(0) ile hızlandırın."
        },
        {
          "title": "Döngüleri Kur",
          "desc": "İç içe iki for döngüsüyle kareleri ve dönüşü bağlayın."
        },
        {
          "title": "Renklendir",
          "desc": "Her turda farklı bir renk seçerek deseni tamamlayın."
        }
      ],
      "criteria": [
        "Açı formüllerinin doğru kullanılması",
        "İç içe döngü yapısının hatasız kurulması",
        "Görsel estetik ve renk uyumu"
      ]
    },
    "tips": {
      "safetyTitle": "Turtle İpuçları",
      "safetyRules": [
        {
          "bold": "Pencere Kapanmasın",
          "text": "Kodun en sonuna turtle.done() koyarak pencerenin hemen kapanmasını önleyin."
        }
      ],
      "myths": [
        {
          "wrong": "Eşkenar üçgen çizmek için kaplumbağa 60 derece döner.",
          "correct": "İç açı 60'tır ama dönüş dış açıdır: 180 - 60 = 120 derece dönmelidir!"
        }
      ]
    },
    "quiz": {
      "question": "Turtle ile düzgün bir sekizgen (8 kenar) çizmek isteyen öğrenci her dönüşte kaplumbağayı kaç derece döndürmelidir?",
      "options": [
        {
          "text": "45 derece (360 / 8)",
          "isCorrect": true
        },
        {
          "text": "60 derece",
          "isCorrect": false
        },
        {
          "text": "90 derece",
          "isCorrect": false
        },
        {
          "text": "135 derece",
          "isCorrect": false
        }
      ],
      "explanation": "Düzgün çokgenlerde dönüş açısı dış açıdır: 360 / 8 = 45 derece."
    },
    "summary": {
      "keyPoints": [
        "Turtle algoritmaları ve matematiksel açıları görselleştirmede eşsizdir.",
        "Dış açı formülü (360 / kenar) ve döngülerle fraktallar üretilir."
      ],
      "nextWeek": "2. Dönem 1. Yazılı Sınavı & Python Hata Ayıklama (Debug)",
      "homework": "Turtle ile 5 köşeli kusursuz bir Türk Bayrağı yıldızı çizen Python kodu yazın (İpucu: dönüş açısı 144 derecedir)."
    }
  },
  {
    "week": 29,
    "date": "12 - 18 Nisan",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "1. Yazılı & Debug",
    "unitTheme": "unite-4",
    "title": "2. Dönem 1. Yazılı Sınavı ve Python Hata Ayıklama (Debugging)",
    "subtitle": "Kapsamlı Sınav Tekrarı ve Profesyonel Hata Dedektifliği",
    "outcomeCode": "BTY.8.4.8",
    "targetSkill": "Hata Analizi (Debugging) & Sınav Yetkinliği",
    "curiosityQuestion": "Yazılım tarihindeki ilk bilgisayar hatasının gerçek bir güve böceği (bug) olduğunu biliyor muydunuz?",
    "roadmap": [
      {
        "title": "Sözdizimi Hatası (SyntaxError)",
        "desc": "Dilbilgisi ihlalleri; program hiç başlamaz."
      },
      {
        "title": "Çalışma Zamanı (Runtime)",
        "desc": "Sıfıra bölme ve tip uyuşmazlığı gibi çökmeler."
      },
      {
        "title": "Mantık Hatası (LogicError)",
        "desc": "Hata vermeyen ama yanlış sonuç üreten en tehlikeli tür."
      },
      {
        "title": "Yazılı Sınav Maratonu",
        "desc": "Döngüler, koşullar ve fonksiyon soruları."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">2. Dönem 1. Yazılı &amp; Hata Dedektifi</text>\n  <rect x=\"35\" y=\"75\" width=\"115\" height=\"140\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#ef4444\"/>\n  <text x=\"92\" y=\"100\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"bold\">SyntaxError</text>\n  <text x=\"92\" y=\"125\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">Dilbilgisi kuralı</text>\n  <text x=\"92\" y=\"145\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"10\">if x == 5 (eksik :)</text>\n  <text x=\"92\" y=\"195\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"9\">Kod hiç başlamaz</text>\n\n  <rect x=\"165\" y=\"75\" width=\"115\" height=\"140\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#f59e0b\"/>\n  <text x=\"222\" y=\"100\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\" font-weight=\"bold\">RuntimeError</text>\n  <text x=\"222\" y=\"125\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">İmkansız işlem</text>\n  <text x=\"222\" y=\"145\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"10\">10 / 0 (Sıfıra bölme)</text>\n  <text x=\"222\" y=\"195\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"9\">Çalışırken çöker</text>\n\n  <rect x=\"295\" y=\"75\" width=\"115\" height=\"140\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#38bdf8\"/>\n  <text x=\"352\" y=\"100\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">LogicError</text>\n  <text x=\"352\" y=\"125\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">Mantık yanlışı</text>\n  <text x=\"352\" y=\"145\" text-anchor=\"middle\" fill=\"#f8fafc\" font-size=\"10\">ort = a + b / 2</text>\n  <text x=\"352\" y=\"195\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"9\">Çökertecek hata vermez</text>\n\n  <rect x=\"35\" y=\"235\" width=\"375\" height=\"60\" rx=\"8\" fill=\"#312e81\"/>\n  <text x=\"222\" y=\"270\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"11\" font-weight=\"bold\">İyi bir yazılımcı hatayı en hızlı ayıklayan (debug) kişidir!</text>\n</svg>",
    "section1": {
      "title": "3 Büyük Hata Türü ve Dedektiflik Stratejisi",
      "subtitle": "Hata mesajlarını okumayı öğrenmek yazılımcılığın yarısıdır:",
      "cards": [
        {
          "title": "Hata Sınıflandırması",
          "icon": "📝",
          "desc": "Python hata yaptığınızda dosya adını ve satır numarasını size bildirir.",
          "items": [
            {
              "bold": "1. SyntaxError",
              "text": "İki nokta unutulmuş, parantez kapanmamış."
            },
            {
              "bold": "2. ZeroDivisionError",
              "text": "Bir sayı 0'a bölünemez; program çalışırken çöker."
            },
            {
              "bold": "3. Logic Error",
              "text": "ort = a + b / 2 yazmak (işlem önceliği parantezleri unutulmuş)."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Yazılı Sınavda En Çok Yapılan 5 Hata",
      "subtitle": "100 tam puan almanın kritik püf noktaları:",
      "cards": [
        {
          "badge": "Sınav Taktikleri",
          "title": "Puan Kurtaran Kurallar",
          "desc": "1) input() sayısını int() yapmayı unutma. 2) if ve for sonuna : koy. 3) Eşitlikte == kullan. 4) range(1, 10) 9'a kadar gider. 5) Listenin ilk elemanı [0]'dır.",
          "items": [
            {
              "bold": "Dikkat",
              "text": "Kod okuma sorularında değişkenlerin adım adım RAM değerlerini kenara yaz."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Canlı Hata Ayıklama (Bug Hunt) Yarışması",
      "subtitle": "Tahtada gösterilen ve içinde 4 farklı hata olan 10 satırlık kodu hatasız hale getirme.",
      "steps": [
        {
          "title": "Kodu Tara",
          "desc": "Sözdizimi ve iki nokta işaretlerini kontrol edin."
        },
        {
          "title": "Hataları Düzelt",
          "desc": "Tip dönüşümü ve parantez hatalarını giderin."
        },
        {
          "title": "Çalıştır",
          "desc": "Konsolda doğru sonucu teyit edin."
        }
      ],
      "criteria": [
        "Hataların doğru tespit edilmesi",
        "Düzeltmelerin Python standartlarına uygun olması",
        "Çözüm süresi başarısı"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Günü İpuçları",
      "safetyRules": [
        {
          "bold": "Hata Mesajını Oku",
          "text": "Python'ın son satırındaki hata açıklamasını ve satır numarasını dikkatle incele."
        }
      ],
      "myths": [
        {
          "wrong": "Hata almak kötü bir yazılımcı olduğunuzu gösterir.",
          "correct": "Dünyanın en iyi mühendisleri her gün yüzlerce hata alır ve ayıklar."
        }
      ]
    },
    "quiz": {
      "question": "x = 100 ve y = 0 iken print(x / y) çalıştırılırsa hangi hata alınır?",
      "options": [
        {
          "text": "SyntaxError",
          "isCorrect": false
        },
        {
          "text": "ZeroDivisionError",
          "isCorrect": true
        },
        {
          "text": "LogicError",
          "isCorrect": false
        },
        {
          "text": "Hata vermez, sonuç 0 çıkar",
          "isCorrect": false
        }
      ],
      "explanation": "Matematikte 0'a bölme tanımsızdır. Sözdizimi doğru olsa da çalışırken ZeroDivisionError hatasıyla çöker."
    },
    "summary": {
      "keyPoints": [
        "Syntax, Runtime ve Logic hataları yazılımın 3 temel hata sınıfıdır.",
        "2. Dönem 1. yazılı sınavı için tüm Python temellerini eksiksiz pekiştirdik."
      ],
      "nextWeek": "Python ile Oyun Geliştirme: Sayı Tahmin ve Taş-Kâğıt-Makas",
      "homework": "Kendinize ait 5 soruluk mini bir Python deneme sınavı hazırlayıp arkadaşınızla değişin."
    }
  },
  {
    "week": 30,
    "date": "19 - 25 Nisan",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "Oyun Geliştirme",
    "unitTheme": "unite-4",
    "title": "Python ile Oyun Geliştirme: Sayı Tahmin ve Taş-Kâğıt-Makas",
    "subtitle": "random Modülü, Oyun Döngüleri ve Konsol Yapay Zekası",
    "outcomeCode": "BTY.8.4.9",
    "targetSkill": "Oyun Mimarisi & Rastgelelik Algoritmaları",
    "curiosityQuestion": "Bilgisayar kendi aklından nasıl gizli bir sayı tutar veya Taş-Kâğıt-Makas seçimi yapar?",
    "roadmap": [
      {
        "title": "random Modülü",
        "desc": "import random ile olasılık fonksiyonlarını çağırma."
      },
      {
        "title": "randint(1, 100)",
        "desc": "Belirtilen aralıkta rastgele tam sayı üretme."
      },
      {
        "title": "choice(liste)",
        "desc": "Listeden rastgele eleman seçme (Taş/Kağıt/Makas)."
      },
      {
        "title": "İkili Arama Stratejisi",
        "desc": "Sayıyı en fazla 7 tahminde kesin bulma taktiği."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Python Oyun Döngüsü &amp; random Modülü</text>\n  <rect x=\"40\" y=\"75\" width=\"175\" height=\"140\" rx=\"10\" fill=\"#1e1b4b\" stroke=\"#38bdf8\"/>\n  <text x=\"127\" y=\"105\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">Sayı Tahmin Oyunu</text>\n  <text x=\"55\" y=\"135\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">gizli = randint(1,50)</text>\n  <text x=\"55\" y=\"160\" fill=\"#10b981\" font-size=\"10\">İkili Arama (Binary)</text>\n  <text x=\"55\" y=\"180\" fill=\"#cbd5e1\" font-size=\"10\">En çok 7 tahminde bul!</text>\n\n  <rect x=\"235\" y=\"75\" width=\"175\" height=\"140\" rx=\"10\" fill=\"#1e1b4b\" stroke=\"#10b981\"/>\n  <text x=\"322\" y=\"105\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\">Taş-Kâğıt-Makas</text>\n  <text x=\"250\" y=\"135\" fill=\"#f8fafc\" font-family=\"monospace\" font-size=\"11\">choice([\"Taş\",...])</text>\n  <text x=\"250\" y=\"160\" fill=\"#f59e0b\" font-size=\"10\">skor_pc vs skor_oyuncu</text>\n  <text x=\"250\" y=\"180\" fill=\"#cbd5e1\" font-size=\"10\">İlk 3'e ulaşan kazanır</text>\n\n  <rect x=\"40\" y=\"235\" width=\"370\" height=\"60\" rx=\"8\" fill=\"#312e81\"/>\n  <text x=\"225\" y=\"270\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"11\" font-weight=\"bold\">Rastgelelik (Randomness) dijital oyunların atan kalbidir!</text>\n</svg>",
    "section1": {
      "title": "Oyun Döngüsü ve Rastgelelik (Randomness)",
      "subtitle": "Bütün dijital oyunların kalbinde rastgelelik yatar:",
      "cards": [
        {
          "title": "random Fonksiyonları",
          "icon": "🎮",
          "desc": "Oyunun her turunda heyecan katan rastgele seçimler:",
          "items": [
            {
              "bold": "random.randint(1, 50)",
              "text": "1 ile 50 arasında (sınırlar dahil) sayı tutar."
            },
            {
              "bold": "random.choice(['Taş', 'Kağıt', 'Makas'])",
              "text": "Listeden rastgele hamle çeker."
            },
            {
              "bold": "while True",
              "text": "Oyun kazanılana kadar dönen ana oyun döngüsüdür."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Taş-Kâğıt-Makas Oyun Mantığı",
      "subtitle": "Oyuncu hamlesi ile bilgisayar hamlesini kıyaslama:",
      "codeSnippet": "# Taş Kağıt Makas Hakem Algoritması\nimport random\nsecenekler = ['Taş', 'Kağıt', 'Makas']\npc = random.choice(secenekler)\noyuncu = input('Taş, Kağıt, Makas? ')\nif oyuncu == pc:\n    print('Berabere!')\nelif (oyuncu=='Taş' and pc=='Makas') or (oyuncu=='Kağıt' and pc=='Taş'):\n    print(f'Kazandın! PC: {pc}')\nelse:\n    print(f'Kaybettin! PC: {pc}')",
      "codeTitle": "tkm_oyunu.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Oyun Döngüsü",
          "title": "Skor Tutma (Scoreboard)",
          "desc": "skor_oyuncu = 0 ve skor_pc = 0 sayaçlarıyla ilk 3 puana ulaşanın şampiyon ilan edilmesi.",
          "items": [
            {
              "bold": "break Komutu",
              "text": "Biri 3 puana ulaştığında while döngüsünü bitirir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sayı Tahmin Oyunu Geliştirme Atölyesi",
      "subtitle": "Bilgisayarın tuttuğu 1-50 arası sayıyı 'Daha BÜYÜK' / 'Daha KÜÇÜK' ipuçlarıyla bulan oyun.",
      "steps": [
        {
          "title": "Gizli Sayıyı Tut",
          "desc": "gizli = random.randint(1, 50) ile başlayın."
        },
        {
          "title": "Tahmin Döngüsü",
          "desc": "while True ile kullanıcıdan tahmin alın."
        },
        {
          "title": "İpuçları Ver",
          "desc": "if tahmin < gizli: 'Büyüt', elif: 'Küçült', else: 'Bildin!' deyin."
        }
      ],
      "criteria": [
        "random modülünün doğru içe aktarılması",
        "İpuçları yönlendirmelerinin doğruluğu",
        "Bildikten sonra döngünün break ile bitmesi"
      ]
    },
    "tips": {
      "safetyTitle": "Oyun Tasarım İpuçları",
      "safetyRules": [
        {
          "bold": "Tahmin Sayacı",
          "text": "Her tahminde deneme_sayisi += 1 yaparak oyuncunun kaçıncı denemede bulduğunu gösterin."
        }
      ],
      "myths": [
        {
          "wrong": "Bilgisayarlar gerçekten tamamen rastgele sayı üretebilir.",
          "correct": "Bilgisayarlar 'Sözde Rastgele' (Pseudo-random) matematiksel algoritmalar kullanır."
        }
      ]
    },
    "quiz": {
      "question": "random.randint(5, 15) fonksiyonu aşağıdaki sayılardan hangisini ASLA ÜRETMEZ?",
      "options": [
        {
          "text": "5",
          "isCorrect": false
        },
        {
          "text": "15",
          "isCorrect": false
        },
        {
          "text": "10",
          "isCorrect": false
        },
        {
          "text": "16",
          "isCorrect": true
        }
      ],
      "explanation": "randint(5, 15) sınırları dahil eder ama 16 sınırın dışındadır."
    },
    "summary": {
      "keyPoints": [
        "random modülü oyunlara dinamizm katar (randint, choice).",
        "while döngüleri ve koşul bloklarıyla konsol oyunları geliştirilir."
      ],
      "nextWeek": "2. Dönem Ara Tatil: Python Mini Projeler Atölyesi",
      "homework": "Sayı tahmin oyununa 5 tahmin hakkı ekleyin; hak bittiğinde oyunu bitirsin."
    }
  },
  {
    "week": 31,
    "date": "26 Nisan - 02 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Metin Tabanlı Programlama (Python)",
    "unitBadge": "2. Ara Tatil",
    "unitTheme": "unite-4",
    "title": "2. Dönem Ara Tatil: Python Mini Projeler Atölyesi",
    "subtitle": "Kırılamaz Şifre Üreteci, Gelişmiş Hesap Makinesi ve Sağlık Takipçisi",
    "outcomeCode": "BTY.8.4.10",
    "targetSkill": "Uygulamalı Yazılım Portfolyosu Oluşturma",
    "curiosityQuestion": "Bankaların ve askeri sistemlerin kullandığı 12 karakterlik kırılamaz şifreleri Python ile nasıl üretiriz?",
    "roadmap": [
      {
        "title": "Güçlü Şifre Üreteci",
        "desc": "Harf, rakam ve sembol havuzundan rastgele 12 karakter seçme."
      },
      {
        "title": "Gelişmiş Hesap Makinesi",
        "desc": "Fonksiyonlar ve menülü konsol arayüzü."
      },
      {
        "title": "Adım & Kalori Takipçisi",
        "desc": "Haftalık sağlık listeleri ve ortalama hesabı."
      },
      {
        "title": "Yazılım Portfolyosu",
        "desc": "Üretilen projeleri dijital portfolyoya ekleme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"40\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">2. Ara Tatil: Python Mini Projeler Atölyesi</text>\n  <g transform=\"translate(45, 80)\">\n    <rect width=\"105\" height=\"130\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#38bdf8\"/>\n    <text x=\"52\" y=\"30\" text-anchor=\"middle\" font-size=\"20\">🔐</text>\n    <text x=\"52\" y=\"60\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">Şifre Üreteci</text>\n    <text x=\"52\" y=\"90\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"9\">12 karakter</text>\n    <text x=\"52\" y=\"110\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"9\">Kırılamaz</text>\n  </g>\n  <g transform=\"translate(170, 80)\">\n    <rect width=\"105\" height=\"130\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#10b981\"/>\n    <text x=\"52\" y=\"30\" text-anchor=\"middle\" font-size=\"20\">🧮</text>\n    <text x=\"52\" y=\"60\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">Hesap Makinesi</text>\n    <text x=\"52\" y=\"90\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"9\">Mod &amp; Üs alma</text>\n    <text x=\"52\" y=\"110\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"9\">Menülü sistem</text>\n  </g>\n  <g transform=\"translate(295, 80)\">\n    <rect width=\"105\" height=\"130\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#ec4899\"/>\n    <text x=\"52\" y=\"30\" text-anchor=\"middle\" font-size=\"20\">🏃</text>\n    <text x=\"52\" y=\"60\" text-anchor=\"middle\" fill=\"#ec4899\" font-size=\"10\" font-weight=\"bold\">Adım &amp; Kalori</text>\n    <text x=\"52\" y=\"90\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"9\">Haftalık takip</text>\n    <text x=\"52\" y=\"110\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"9\">Sağlık takipçisi</text>\n  </g>\n  <rect x=\"40\" y=\"235\" width=\"370\" height=\"60\" rx=\"8\" fill=\"#312e81\"/>\n  <text x=\"225\" y=\"270\" text-anchor=\"middle\" fill=\"#e0e7ff\" font-size=\"11\" font-weight=\"bold\">Yazılımcılık proje ürettikçe ustalaşılan bir zanaattır!</text>\n</svg>",
    "section1": {
      "title": "3 Popüler Mini Proje Mimarisi",
      "subtitle": "Öğrenilen tüm kavramları faydalı günlük araçlara dönüştürme:",
      "cards": [
        {
          "title": "Proje Çeşitleri",
          "icon": "🛠️",
          "desc": "Gerçek bir yazılımcı olmak için kendi araçlarınızı üretmelisiniz.",
          "items": [
            {
              "bold": "1. Şifre Motoru",
              "text": "Büyük-küçük harf, rakam ve sembollerden siber güvenlik şifresi üretir."
            },
            {
              "bold": "2. Modüler Hesap",
              "text": "Toplama, çıkarma, üs alma ve mod işlemlerini fonksiyonlarla yapar."
            },
            {
              "bold": "3. Sağlık Takibi",
              "text": "Günlük adım sayılarını listede tutup toplam kaloriyi hesaplar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Kırılamaz Şifre Üretici Algoritması",
      "subtitle": "Karakter havuzundan rastgele string oluşturma:",
      "codeSnippet": "# Güçlü Şifre Üreteci\nimport random\nhavuz = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%^&*'\nsifre = ''\nfor i in range(12):\n    sifre += random.choice(havuz)\nprint('Üretilen Güçlü Şifreniz:', sifre)",
      "codeTitle": "sifre_motoru.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Siber Güvenlik",
          "title": "Trilyonlarca Yıl Güvenlik",
          "desc": "12 karakterlik karmaşık şifrelerin kırılması süper bilgisayarlarla bile trilyonlarca yıl sürer.",
          "items": [
            {
              "bold": "String Ekleme",
              "text": "sifre += secilen ile döngüde metin inşa edilir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Menülü Konsol Asistanı Tasarımı",
      "subtitle": "[1] Şifre Üret, [2] Yaş Hesapla, [3] Çıkış seçenekleri sunan interaktif ana menü.",
      "steps": [
        {
          "title": "Menüyü Bas",
          "desc": "Seçenekleri ekranda numaralandırarak gösterin."
        },
        {
          "title": "Seçimi Oku",
          "desc": "Kullanıcının tercihini input() ile alın."
        },
        {
          "title": "Fonksiyonu Çağır",
          "desc": "if secim == '1': sifre_uret() mantığını işletin."
        }
      ],
      "criteria": [
        "Menü döngüsünün '3' seçilene kadar devam etmesi",
        "Her seçeneğin kendi fonksiyonunu çağırması",
        "Geçersiz seçimlerde uyarı verilmesi"
      ]
    },
    "tips": {
      "safetyTitle": "Portfolyo Yönetimi",
      "safetyRules": [
        {
          "bold": "Temiz Kod (Clean Code)",
          "text": "Değişken isimlerini anlamlı verin ve açıklama satırları (#) ekleyin."
        }
      ],
      "myths": [
        {
          "wrong": "Yazılım sadece ders çalışırken öğrenilir.",
          "correct": "Yazılım tatillerde kendi projelerinizi denerken en hızlı şekilde öğrenilir."
        }
      ]
    },
    "quiz": {
      "question": "sifre = '' iken for i in range(4): sifre += 'X' döngüsü bittiğinde sifre ne olur?",
      "options": [
        {
          "text": "'XXXX'",
          "isCorrect": true
        },
        {
          "text": "'X'",
          "isCorrect": false
        },
        {
          "text": "4",
          "isCorrect": false
        },
        {
          "text": "Hata verir",
          "isCorrect": false
        }
      ],
      "explanation": "Döngü 4 kez döner ve her adımda 'X' karakteri eklenir. Sonuç: 'XXXX'."
    },
    "summary": {
      "keyPoints": [
        "2. Dönem Ara Tatilinde döngüler, koşullar ve listeleri gerçek projelere dönüştürdük.",
        "Yazılımcılık proje portfolyosu inşa ederek kalıcı hale gelir."
      ],
      "nextWeek": "23 Nisan Çocuk Bayramı: Python ile Şiir ve Kutlama Kartı Robotu",
      "homework": "Aileniz için bir Market Alışveriş Listesi Asistanı kodlayın ('bitti' yazana kadar ürün eklesin)."
    }
  }
];
