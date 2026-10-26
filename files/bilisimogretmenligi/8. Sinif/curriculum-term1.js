/**
 * MEB 8. Sınıf Bilişim Teknolojileri ve Yazılım - 1. Dönem 1. Kısım (Hafta 1 - 10)
 * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_PART1 = [
  {
    "week": 1,
    "date": "14 - 20 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişimsel Düşünme & İleri Düzey Problem Çözme",
    "unitBadge": "1. Ünite: Giriş",
    "unitTheme": "unite-1",
    "title": "8. Sınıfa Hoş Geldiniz: Bilişimsel Düşünme",
    "subtitle": "Computational Thinking'in 4 Temel Taşı ve Liseye Hazırlık Vizyonu",
    "outcomeCode": "BTY.8.1.1",
    "targetSkill": "Bilişimsel Düşünme Becerilerini Sistematik Kullanma",
    "curiosityQuestion": "Google haritalar dünyadaki milyarlarca yol arasından evinize giden en hızlı rotayı 0.02 saniyede nasıl bulabiliyor?",
    "roadmap": [
      {
        "title": "Bilişimsel Düşünme Nedir?",
        "desc": "Problemleri bilgisayarların ve insanların anlayabileceği şekilde formüle etme sanatı."
      },
      {
        "title": "Ayrıştırma (Decomposition)",
        "desc": "Büyük sorunları yönetilebilir küçük modüllere ayırma."
      },
      {
        "title": "Örüntü Tanıma & Soyutlama",
        "desc": "Benzerlikleri keşfedip gereksiz detayları ayıklayarak model çıkarma."
      },
      {
        "title": "Algoritmik Tasarım",
        "desc": "Herkesin ve her cihazın uygulayabileceği kesin adımlar dizisi üretme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Bilişimsel Düşünme (4 Temel Taş)</text>\n\n  <g transform=\"translate(40, 75)\">\n    <rect width=\"85\" height=\"95\" rx=\"10\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">🧩</text>\n    <text x=\"42\" y=\"62\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"10\" font-weight=\"bold\">Ayrıştırma</text>\n    <text x=\"42\" y=\"78\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"8\">Decomposition</text>\n  </g>\n\n  <g transform=\"translate(135, 75)\">\n    <rect width=\"85\" height=\"95\" rx=\"10\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">🔍</text>\n    <text x=\"42\" y=\"62\" text-anchor=\"middle\" fill=\"#93c5fd\" font-size=\"10\" font-weight=\"bold\">Örüntü Tanıma</text>\n    <text x=\"42\" y=\"78\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"8\">Pattern</text>\n  </g>\n\n  <g transform=\"translate(230, 75)\">\n    <rect width=\"85\" height=\"95\" rx=\"10\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">🎯</text>\n    <text x=\"42\" y=\"62\" text-anchor=\"middle\" fill=\"#6ee7b7\" font-size=\"10\" font-weight=\"bold\">Soyutlama</text>\n    <text x=\"42\" y=\"78\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"8\">Abstraction</text>\n  </g>\n\n  <g transform=\"translate(325, 75)\">\n    <rect width=\"85\" height=\"95\" rx=\"10\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">⚙️</text>\n    <text x=\"42\" y=\"62\" text-anchor=\"middle\" fill=\"#fde68a\" font-size=\"10\" font-weight=\"bold\">Algoritma</text>\n    <text x=\"42\" y=\"78\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"8\">Algorithm</text>\n  </g>\n\n  <rect x=\"50\" y=\"200\" width=\"350\" height=\"85\" rx=\"12\" fill=\"#312e81\" stroke=\"#818cf8\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"230\" text-anchor=\"middle\" fill=\"#c7d2fe\" font-size=\"13\" font-weight=\"bold\">Geleceğin Problem Çözme Becerisi</text>\n  <text x=\"225\" y=\"255\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Bilgisayar gibi düşünerek karmaşık dünyayı anlamlandırma sanatı.</text>\n  <text x=\"225\" y=\"272\" text-anchor=\"middle\" fill=\"#a5b4fc\" font-size=\"10\">8. Sınıf: Liseye ve Geleceğin Mesleklerine Hazırlık</text>\n</svg>",
    "section1": {
      "title": "Bilişimsel Düşünme: Geleceğin Anahtar Becerisi",
      "subtitle": "Sadece programcılar için değil, mühendisler, doktorlar ve bilim insanları için evrensel bir yöntem:",
      "cards": [
        {
          "title": "4 Süper Güç",
          "icon": "⚡",
          "desc": "Karmaşık bir dünyada problemleri çözmek için bu 4 adımı uygularız:",
          "items": [
            {
              "bold": "1. Ayrıştırma (Decomposition)",
              "text": "Bir otomobil fabrikası arabayı kaporta, motor, yazılım ve tekerlek olarak parçalar."
            },
            {
              "bold": "2. Örüntü Tanıma (Pattern Recognition)",
              "text": "Hastalık teşhisinde doktorlar röntgenlerdeki ortak gölgeleri ve geçmiş vakaları tarar."
            },
            {
              "bold": "3. Soyutlama (Abstraction)",
              "text": "Uçak simülatöründe koltuğun rengi değil, rüzgâr hızı ve irtifa hesaplanır."
            },
            {
              "bold": "4. Algoritma (Algorithm)",
              "text": "Adım adım, açık, sonlu ve test edilebilir çözüm yönergeleri."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "8. Sınıf Bilişim ve LGS Mantık Muhakeme Bağı",
      "subtitle": "Bilişim dersi LGS sayısal mantık sorularını çözmenin en kestirme yoludur:",
      "cards": [
        {
          "badge": "LGS Bağı",
          "title": "Sayısal Mantık & Akıl Yürütme",
          "desc": "LGS sınavındaki şifreleme, grafik okuma ve algoritma akış soruları bilişimsel düşünmeyle çözülür.",
          "items": [
            {
              "bold": "Analitik Zeka",
              "text": "Hızlı okuma, ilişkileri kurma ve çıkarım yapma kabiliyeti."
            }
          ]
        },
        {
          "badge": "Lise Vizyonu",
          "title": "Python ve Gerçek Kodlama",
          "desc": "Bu yıl blok kodlamadan metin tabanlı Python dünyasına geçiş yaparak lisedeki Bilgisayar Bilimi dersine tam hazır olacağız.",
          "items": [
            {
              "bold": "Dünya Standardı",
              "text": "Python; yapay zekâ ve veri biliminde dünyada 1 numaradır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Şehir Trafik Simülasyonu Tasarımı",
      "subtitle": "Şehrimizdeki trafik tıkanıklığı problemini Bilişimsel Düşünmenin 4 adımıyla çözelim.",
      "steps": [
        {
          "title": "Ayrıştır",
          "desc": "Trafiği oluşturan unsurları listele: Işıklar, kavşaklar, araç sayısı, yayalar, acil araçlar."
        },
        {
          "title": "Örüntü Bul",
          "desc": "Hangi saatlerde (örn: 08:00 - 09:00 ve 17:00 - 18:30) tıkanıklık tekrarlanıyor?"
        },
        {
          "title": "Soyutla ve Kodla",
          "desc": "Gereksiz detayları çıkar; akıllı sensörlerle araç sayısına göre yeşil ışık süresini dinamik uzatan algoritmayı yaz."
        }
      ],
      "criteria": [
        "Problemi 4 bilişimsel adımda eksiksiz yapılandırabilme",
        "Soyutlama aşamasında doğru parametreleri seçebilme",
        "Algoritmik çözümü akış şeması mantığıyla sunabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Bilişimsel Düşünürün Çalışma Prensipleri",
      "safetyRules": [
        {
          "bold": "Hemen Kod Yazmaya Başlama",
          "text": "Problemi kâğıt üzerinde ayrıştırmadan bilgisayar başına geçmek zaman kaybettirir."
        },
        {
          "bold": "Büyük Resmi Gör",
          "text": "Ayrıntılarda boğulmamak için soyutlama kalkanınızı kullanın."
        },
        {
          "bold": "Düşüncenizi Belgeleyin",
          "text": "Akış diyagramları ve şemalar çizerek çözümünüzü görselleştirin."
        }
      ],
      "myths": [
        {
          "wrong": "Bilişimsel düşünme sadece bilgisayar başında oturup kod yazmaktır.",
          "correct": "Bilişimsel düşünme kâğıt üzerinde, matematikte, bilimde ve günlük hayatta kullanılan bir düşünce biçimidir."
        },
        {
          "wrong": "Bir problem için tek bir doğru algoritma vardır.",
          "correct": "Aynı probleme farklı hızlarda ve farklı bellek harcayan onlarca algoritma yazılabilir."
        }
      ]
    },
    "quiz": {
      "question": "Bir yazılımcının bir otomobil simülasyonu geliştirirken arabanın rengi ve koltuk kumaşı gibi detayları göz ardı edip sadece hız, yön ve yakıt miktarına odaklanması Bilişimsel Düşünmenin hangi adımına örnektir?",
      "options": [
        {
          "text": "A) Ayrıştırma (Decomposition)",
          "isCorrect": false
        },
        {
          "text": "B) Örüntü Tanıma (Pattern Recognition)",
          "isCorrect": false
        },
        {
          "text": "C) Soyutlama (Abstraction)",
          "isCorrect": true
        },
        {
          "text": "D) Algoritma Tasarımı",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 'Soyutlama (Abstraction)', problem için önemsiz olan detayları filtreleyip sadece kritik verilere odaklanma sürecidir."
    },
    "summaryRules": [
      {
        "bold": "Bilişimsel Düşünme",
        "text": "Problemleri sistematik ve algoritmik olarak çözme yöntemidir."
      },
      {
        "bold": "4 Temel Taş",
        "text": "Ayrıştırma, Örüntü Tanıma, Soyutlama ve Algoritma Tasarımıdır."
      },
      {
        "bold": "8. Sınıf Hedefi",
        "text": "Liseye tam donanımlı, analitik zekâsı güçlü bir yazılımcı olarak adım atmaktır."
      }
    ],
    "homework": "LGS çalışma programınızı Bilişimsel Düşünmenin 4 adımını kullanarak kâğıt üzerinde planlayın.",
    "nextWeekPreview": "Ayrıştırma (Decomposition) ve Örüntü Tanıma: Karmaşık Sistemleri Çözümleme - Derinlemesine vaka analizleri!"
  },
  {
    "week": 2,
    "date": "21 - 27 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişimsel Düşünme & İleri Düzey Problem Çözme",
    "unitBadge": "Ayrıştırma & Örüntü",
    "unitTheme": "unite-1",
    "title": "Ayrıştırma & Örüntü Tanıma: Karmaşık Sistemler",
    "subtitle": "Büyük Sistemleri Modüllere Bölme, Tekrarlayan Desenleri Yakalama ve Şablon Çıkarma",
    "outcomeCode": "BTY.8.1.2",
    "targetSkill": "Sistemik Analiz & Örüntü Keşfi",
    "curiosityQuestion": "Spotify veya YouTube sizin müzik zevkinizi sizden daha iyi tahmin edebiliyorsa, bunu hangi örüntü tanıma algoritmalarıyla başarıyor?",
    "roadmap": [
      {
        "title": "Ayrıştırma Sanatı",
        "desc": "Bir e-ticaret sitesini sepet, ödeme, katalog ve kullanıcı modüllerine ayırma."
      },
      {
        "title": "Örüntü Nedir?",
        "desc": "Veriler arasındaki benzerlikler, düzenlilikler ve tekrar eden desenler."
      },
      {
        "title": "Örüntü Tanıma ile Tahmin",
        "desc": "Hava durumu tahmini ve borsa hareketlerinde geçmiş örüntüleri modelleme."
      },
      {
        "title": "Yazılımda Yeniden Kullanılabilirlik",
        "desc": "Bir kere yazılan fonksiyonu binlerce yerde tekrar kullanma prensibi."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Ayrıştırma (Decomposition) & Örüntü Tanıma</text>\n\n  <!-- Ayrıştırma Şeması -->\n  <g transform=\"translate(185, 70)\">\n    <rect width=\"80\" height=\"35\" rx=\"6\" fill=\"#312e81\" stroke=\"#818cf8\" stroke-width=\"1.5\"/>\n    <text x=\"40\" y=\"22\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\">Büyük Sistem</text>\n  </g>\n\n  <path d=\"M225,105 L130,135 M225,105 L225,135 M225,105 L320,135\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n\n  <g transform=\"translate(90, 135)\">\n    <rect width=\"80\" height=\"35\" rx=\"6\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n    <text x=\"40\" y=\"22\" text-anchor=\"middle\" fill=\"#93c5fd\" font-size=\"10\">Modül 1</text>\n  </g>\n  <g transform=\"translate(185, 135)\">\n    <rect width=\"80\" height=\"35\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n    <text x=\"40\" y=\"22\" text-anchor=\"middle\" fill=\"#6ee7b7\" font-size=\"10\">Modül 2</text>\n  </g>\n  <g transform=\"translate(280, 135)\">\n    <rect width=\"80\" height=\"35\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <text x=\"40\" y=\"22\" text-anchor=\"middle\" fill=\"#fde68a\" font-size=\"10\">Modül 3</text>\n  </g>\n\n  <rect x=\"50\" y=\"205\" width=\"350\" height=\"80\" rx=\"12\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"235\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"12\" font-weight=\"bold\">Örüntü Tanıma: Benzerlikleri ve Tekrarları Yakala!</text>\n  <text x=\"225\" y=\"258\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Daha önce çözdüğün bir problem, yeni problemin anahtarıdır.</text>\n</svg>",
    "section1": {
      "title": "Bir Sistemi Modüllere Ayırmak (Decomposition)",
      "subtitle": "Büyük bir projeyi tek parça halinde kodlamak imkânsızdır:",
      "cards": [
        {
          "title": "Akıllı Telefon İşletim Sisteminin Ayrıştırılması",
          "icon": "📱",
          "desc": "Bir telefon yazılımı yüzlerce küçük modülün ahenkle çalışmasıdır:",
          "items": [
            {
              "bold": "Kamera Modülü",
              "text": "Sensörden gelen ışığı fotoğrafa dönüştürür."
            },
            {
              "bold": "Batarya Modülü",
              "text": "Pil seviyesini takip edip tasarruf modunu açar."
            },
            {
              "bold": "Ağ Modülü",
              "text": "Wi-Fi ve 5G sinyallerini yönetir."
            },
            {
              "bold": "Güvenlik Modülü",
              "text": "Parmak izi ve yüz tanımayı kontrol eder."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Örüntü Tanıma ile Akıllı Çözümler",
      "subtitle": "Geçmiş verileri inceleyip geleceği öngörmek:",
      "cards": [
        {
          "badge": "Örnek 1",
          "title": "Yapay Zekâ ile El Yazısı Okuma",
          "desc": "Milyonlarca kişinin yazdığı 'A' harflerindeki ortak çizgileri (örüntü) öğrenen sistem her yazıyı tanır.",
          "items": [
            {
              "bold": "Teknoloji",
              "text": "Optik Karakter Tanıma (OCR)."
            }
          ]
        },
        {
          "badge": "Örnek 2",
          "title": "Siber Güvenlikte Tehdit Tespiti",
          "desc": "Korsanların sisteme saldırırken oluşturduğu sıra dışı ağ trafiği örüntüsü güvenlik duvarı tarafından anında yakalanır.",
          "items": [
            {
              "bold": "Koruma",
              "text": "Saldırı gerçekleşmeden engellenir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kendi Dijital Okul Yönetim Sistemimizi Ayrıştırıyoruz",
      "subtitle": "E-Okul sistemini bir yazılım mimarı gibi modüllere ayırıp örüntülerini çıkaralım.",
      "steps": [
        {
          "title": "Ana Modülleri Belirle",
          "desc": "Öğrenci İşleri, Not Sistemi, Devamsızlık Takibi, Ders Programı."
        },
        {
          "title": "Örüntüleri Yakala",
          "desc": "Tüm modüllerde ortak olan işlemler: 'Giriş Yap', 'Veri Kaydet', 'Rapor Yazdır'."
        },
        {
          "title": "Ortak Fonksiyon Tasarla",
          "desc": "Her modül için ayrı ayrı kod yazmak yerine tek bir 'Raporla()' fonksiyonu planlayın."
        }
      ],
      "criteria": [
        "Karmaşık bir sistemi mantıklı alt birimlere ayrıştırabilme",
        "Farklı modüller arasındaki ortak örüntüleri tespit etme",
        "Kod tekrarını önleyici mimari çözüm üretebilme"
      ]
    },
    "tips": {
      "safetyTitle": "Mimari Tasarım Püf Noktaları",
      "safetyRules": [
        {
          "bold": "DRY Prensibi (Don't Repeat Yourself)",
          "text": "Kendini tekrar etme! Aynı kodu iki kez yazıyorsan ortada bir örüntü vardır; fonksiyon yap."
        },
        {
          "bold": "Bağımsız Modüller",
          "text": "Kamera modülü çöktüğünde telefonun arama modülü çalışmaya devam etmelidir."
        },
        {
          "bold": "Örüntüleri Doğrulayın",
          "text": "Her tesadüf bir örüntü değildir; bilimsel ve istatistiksel verilere dayanın."
        }
      ],
      "myths": [
        {
          "wrong": "Ayrıştırma yapmak projeyi gereksiz yere uzatır.",
          "correct": "Ayrıştırma yapılmayan projeler büyüdükçe spagetti koda dönüşür ve tamamen çöker."
        },
        {
          "wrong": "Örüntü tanımayı sadece yapay zekâ yapabilir.",
          "correct": "İnsan beyni evrendeki en güçlü örüntü tanıma makinesidir."
        }
      ]
    },
    "quiz": {
      "question": "Bir müzik uygulamasının, dinlediğiniz şarkıların türünü, ritmini ve sanatçılarını analiz ederek size tam seveceğiniz yeni şarkılar önermesi Bilişimsel Düşünmenin hangi adımına dayanır?",
      "options": [
        {
          "text": "A) Ayrıştırma",
          "isCorrect": false
        },
        {
          "text": "B) Örüntü Tanıma (Pattern Recognition)",
          "isCorrect": true
        },
        {
          "text": "C) Bilgisayarı Kapatma",
          "isCorrect": false
        },
        {
          "text": "D) Donanım Temizliği",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Müzik zevkinizdeki ortak noktaları ve benzerlik kalıplarını keşfetmek 'Örüntü Tanıma'nın en somut örneğidir."
    },
    "summaryRules": [
      {
        "bold": "Ayrıştırma",
        "text": "Karmaşık yazılımları bağımsız ve yönetilebilir modüllere bölmektir."
      },
      {
        "bold": "Örüntü Tanıma",
        "text": "Verilerdeki tekrarları bularak geleceğe yönelik tahmin yapma gücüdür."
      },
      {
        "bold": "Kod Verimliliği",
        "text": "Örüntüler sayesinde aynı kodu defalarca yazmaktan kurtuluruz."
      }
    ],
    "homework": "Kullandığınız bir sosyal medya uygulamasını (veya e-ticaret sitesini) 4 temel modüle ayırıp defterinize şemasını çizin.",
    "nextWeekPreview": "Soyutlama (Abstraction) ve Algoritmik Tasarım: Veri Modelleri Oluşturma - Gereksiz yüklerden kurtulacağız!"
  },
  {
    "week": 3,
    "date": "28 Eylül - 04 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişimsel Düşünme & İleri Düzey Problem Çözme",
    "unitBadge": "Soyutlama & Veri",
    "unitTheme": "unite-1",
    "title": "Soyutlama & Algoritmik Tasarım: Veri Modelleri",
    "subtitle": "Gereksiz Detayları Filtreleme, Veri Tipleri Modellemesi ve Algoritmik Çözüm",
    "outcomeCode": "BTY.8.1.3",
    "targetSkill": "Veri Modelleme & Soyut Düşünme",
    "curiosityQuestion": "Metro haritalarına baktığınızda yer altındaki kıvrımlı tünelleri ve gerçek virajları neden görmezsiniz? Neden sadece düz renkli çizgiler vardır?",
    "roadmap": [
      {
        "title": "Soyutlama (Abstraction) Nedir?",
        "desc": "Amaca hizmet etmeyen detayları gizleyip sadece kritik bilgileri öne çıkarma."
      },
      {
        "title": "Metro Haritası Analojisi",
        "desc": "Gerçek virajlar yerine durak sırasını gösteren şematik soyutlama."
      },
      {
        "title": "Veri Modelleme",
        "desc": "Bir nesneyi bilgisayara tanıtırken özelliklerini (isim, yaş, puan) soyutlama."
      },
      {
        "title": "Algoritmik Tasarıma Geçiş",
        "desc": "Modellenen verileri işleyecek mantıksal kurallar zincirini kurma."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Soyutlama (Abstraction) & Veri Modelleri</text>\n\n  <g transform=\"translate(60, 75)\">\n    <rect width=\"140\" height=\"110\" rx=\"10\" fill=\"#1e293b\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>\n    <text x=\"70\" y=\"30\" text-anchor=\"middle\" fill=\"#fca5a5\" font-size=\"11\" font-weight=\"bold\">Gereksiz Detaylar</text>\n    <text x=\"70\" y=\"55\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">• Arabanın rengi</text>\n    <text x=\"70\" y=\"75\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">• Koltuk kumaşı</text>\n    <text x=\"70\" y=\"95\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">• Plaka parlaklığı</text>\n  </g>\n\n  <path d=\"M210,130 L240,130\" stroke=\"#8b5cf6\" stroke-width=\"3\" stroke-dasharray=\"4\"/>\n\n  <g transform=\"translate(250, 75)\">\n    <rect width=\"140\" height=\"110\" rx=\"10\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"70\" y=\"30\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"11\" font-weight=\"bold\">Soyut Model (Öz)</text>\n    <text x=\"70\" y=\"55\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">✓ Hız (km/s)</text>\n    <text x=\"70\" y=\"75\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">✓ Yakıt Seviyesi</text>\n    <text x=\"70\" y=\"95\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"10\">✓ GPS Konumu</text>\n  </g>\n\n  <rect x=\"50\" y=\"215\" width=\"350\" height=\"70\" rx=\"10\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"245\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"12\" font-weight=\"bold\">Soyutlama: Önemsiz Bilgileri Ayıkla, Öze Odaklan!</text>\n  <text x=\"225\" y=\"268\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Haritalar sokaktaki her ağacı çizmez; sadece yolları gösterir.</text>\n</svg>",
    "section1": {
      "title": "Soyutlama: Sadeleştirmenin Dehası",
      "subtitle": "Gereksiz her detay bilgisayarı yavaşlatır ve zihni karıştırır:",
      "cards": [
        {
          "title": "Bir Öğrenciyi Bilgisayara Nasıl Tanıtırız?",
          "icon": "🎓",
          "desc": "E-Okul veritabanında bir öğrencinin hangi bilgileri saklanır?",
          "items": [
            {
              "bold": "Önemli Bilgiler (Model)",
              "text": "T.C. Kimlik, Ad-Soyad, Okul No, Sınıf, Notlar, Devamsızlık."
            },
            {
              "bold": "Gereksiz Detaylar (Soyutlananlar)",
              "text": "Ayakkabı numarası, en sevdiği dondurma, saçının uzunluğu."
            },
            {
              "bold": "Sonuç",
              "text": "Bilgisayar gereksiz verileri çöpe atar, sadece ders yönetimiyle ilgilenir."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Veri Tipleriyle Modelleme",
      "subtitle": "Bilgisayarın hafızasındaki soyut veri kutuları:",
      "cards": [
        {
          "badge": "Sayısal Veri",
          "title": "Tam Sayı (Integer) & Ondalık (Float)",
          "desc": "Öğrenci yaşı = 14 (int), Not ortalaması = 94.75 (float). Matematiksel hesaplamalarda kullanılır.",
          "items": [
            {
              "bold": "Özellik",
              "text": "Hafızada az yer kaplar, çok hızlı hesaplanır."
            }
          ]
        },
        {
          "badge": "Metinsel Veri",
          "title": "Metin Dizisi (String) & Mantıksal (Boolean)",
          "desc": "Ad = 'Zeynep' (str), MezunMu = True/False (bool). Karar bloklarında kullanılır.",
          "items": [
            {
              "bold": "Özellik",
              "text": "True/False bilgisayarın Evet/Hayır mantığıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Hastane Randevu Sistemi Veri Modeli",
      "subtitle": "Bir hasta randevu aldığında sisteme kaydedilecek soyut veri modelini çıkaralım.",
      "steps": [
        {
          "title": "Gereksizleri Ayıkla",
          "desc": "Hastanın göz rengi ve tuttuğu takım sisteme kaydedilmeli mi? Neden?"
        },
        {
          "title": "5 Temel Veri Alanı Belirle",
          "desc": "TC (str), Ad (str), Poliklinik (str), Tarih (str), RandevuSaati (str)."
        },
        {
          "title": "Algoritmayı Kur",
          "desc": "EĞER o saatte doktorun randevusu doluysa -> 'Başka saat seçiniz' uyarısı veren algoritmayı yaz."
        }
      ],
      "criteria": [
        "Gereksiz bilgileri doğru şekilde filtreleyebilme",
        "Her bilgi için uygun veri tipini (int, float, str, bool) seçme",
        "Veri modeline bağlı çalışan karar algoritması kurabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Veri Güvenliği ve KVKK",
      "safetyRules": [
        {
          "bold": "Minimum Veri İlkesi",
          "text": "Bir uygulama sadece görevini yapacak kadar veri istemelidir; fener uygulaması konumunuzu isteyemez!"
        },
        {
          "bold": "Veri Tiplerini Karıştırmayın",
          "text": "Sayı ile metin toplanamaz ('5' + 5 hata verir); tiplere dikkat edin."
        },
        {
          "bold": "Açık ve Anlaşılır İsimler",
          "text": "Değişkene 'x' yerine 'ogrenci_yasi' adı vermek profesyonel soyutlamadır."
        }
      ],
      "myths": [
        {
          "wrong": "Ne kadar çok veri toplarsak sistem o kadar iyi çalışır.",
          "correct": "Aşırı veri gereksiz depolama maliyeti, yavaşlık ve güvenlik açığı yaratır."
        },
        {
          "wrong": "Soyutlama sadece resim ve çizimlerde olur.",
          "correct": "Bilişimde soyutlama nesneleri ve sistemleri matematiksel formüllere dönüştürmektir."
        }
      ]
    },
    "quiz": {
      "question": "Bir kütüphane otomasyon sisteminde bir 'Kitap' nesnesi modellenirken aşağıdakilerden hangisi sisteme kaydedilmesi GEREKMEYEN soyutlanmış (filtrelenmiş) bir bilgidir?",
      "options": [
        {
          "text": "A) Kitabın Adı (String)",
          "isCorrect": false
        },
        {
          "text": "B) Kitabın Yazarı (String)",
          "isCorrect": false
        },
        {
          "text": "C) Kitabın basıldığı matbaadaki mürekkebin kokusu",
          "isCorrect": true
        },
        {
          "text": "D) Kitabın Sayfa Sayısı (Integer)",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Mürekkebin kokusu kütüphane takip sistemi için tamamen önemsiz bir detaydır ve 'Soyutlama' ile elenir."
    },
    "summaryRules": [
      {
        "bold": "Soyutlama",
        "text": "Amaca hizmet etmeyen detayları temizleyip asıl modele odaklanmaktır."
      },
      {
        "bold": "Veri Modelleri",
        "text": "Gerçek dünya nesnelerinin bilgisayar dilindeki yansımasıdır."
      },
      {
        "bold": "Minimum Veri",
        "text": "Sadece gerekli veriyi toplamak sistemi hızlı ve güvenli kılar."
      }
    ],
    "homework": "Bir 'Akıllı Bisiklet' nesnesinin bilgisayar için 4 maddelik soyut veri modelini çıkarın (Hangi veriler lazım?).",
    "nextWeekPreview": "Algoritmik Karmaşıklık (Big-O Notasyonuna Giriş): Zaman ve Bellek Tasarrufu - Kodların hız yarışı!"
  },
  {
    "week": 4,
    "date": "05 - 11 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişimsel Düşünme & İleri Düzey Problem Çözme",
    "unitBadge": "Algoritmik Karmaşıklık",
    "unitTheme": "unite-1",
    "title": "Algoritmik Karmaşıklık: Big-O Notasyonuna Giriş",
    "subtitle": "Zaman Karmaşıklığı, Bellek Kullanımı, En Kötü Durum (Worst Case) ve Hızlı Kod",
    "outcomeCode": "BTY.8.1.4",
    "targetSkill": "Algoritma Performansını Değerlendirme & Big-O",
    "curiosityQuestion": "İki öğrenci aynı problemi çözen iki farklı kod yazdı. Biri 1 saniyede çalışırken diğeri 4 saat sürdü. İkisi de doğruysa hangisi daha üstündür?",
    "roadmap": [
      {
        "title": "Algoritmik Karmaşıklık Nedir?",
        "desc": "Bir algoritmanın girdi boyutu (N) büyüdükçe ne kadar zaman ve bellek harcadığı."
      },
      {
        "title": "Big-O Notasyonu Giriş",
        "desc": "O(1) Sabit zaman, O(n) Doğrusal zaman, O(n²) Karesel zaman."
      },
      {
        "title": "En Kötü Durum (Worst-Case)",
        "desc": "Mühendisler algoritmalarını her zaman en kötü felaket senaryosuna göre test eder."
      },
      {
        "title": "Verimli Kod Yazma",
        "desc": "Gereksiz içiçe döngülerden kaçınarak performansı 1000 kat artırma teknikleri."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Algoritmik Karmaşıklık (Big-O Giriş)</text>\n\n  <!-- Zaman Grafiği -->\n  <g transform=\"translate(70, 75)\">\n    <line x1=\"20\" y1=\"120\" x2=\"310\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <line x1=\"20\" y1=\"120\" x2=\"20\" y2=\"10\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    \n    <!-- O(1) Sabit -->\n    <line x1=\"20\" y1=\"110\" x2=\"300\" y2=\"110\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <text x=\"310\" y=\"114\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">O(1)</text>\n\n    <!-- O(log n) -->\n    <path d=\"M20,110 Q100,70 300,60\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n    <text x=\"310\" y=\"64\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">O(log n)</text>\n\n    <!-- O(n) Doğrusal -->\n    <line x1=\"20\" y1=\"110\" x2=\"260\" y2=\"20\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n    <text x=\"270\" y=\"24\" fill=\"#f59e0b\" font-size=\"10\" font-weight=\"bold\">O(n)</text>\n  </g>\n\n  <rect x=\"50\" y=\"225\" width=\"350\" height=\"65\" rx=\"10\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"250\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"12\" font-weight=\"bold\">Zaman ve Bellek Tasarrufu</text>\n  <text x=\"225\" y=\"270\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Milyonlarca veriyi 1 saniyede işleyen algoritmaların sırrı.</text>\n</svg>",
    "section1": {
      "title": "Zaman Karmaşıklığı: Kodun Hız Sınavı",
      "subtitle": "Veri sayısı 10 iken hızlı olan kod, veri 1.000.000 olunca tıkanabilir:",
      "cards": [
        {
          "title": "3 Temel Big-O Seviyesi",
          "icon": "⏱️",
          "desc": "Algoritmaların hız sıralaması:",
          "items": [
            {
              "bold": "O(1) - Şimşek Hızı (Sabit)",
              "text": "Veri kaç tane olursa olsun tek adımda biter (Örn: Dizinin 1. elemanına bakmak)."
            },
            {
              "bold": "O(log n) - Süper Hızlı (Logaritmik)",
              "text": "Her adımda arama alanını ikiye böler (Örn: İkili Arama / Binary Search)."
            },
            {
              "bold": "O(n) - Doğrusal Hız",
              "text": "1000 veri varsa 1000 adım sürer (Örn: Listeyi baştan sona tek tek taramak)."
            },
            {
              "bold": "O(n²) - Kaplumbağa Hızı (Karesel)",
              "text": "İçiçe iki döngü; 1000 veri varsa 1.000.000 işlem yapar, bilgisayarı dondurur!"
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Gerçek Hayat Örneği: İsim Listesinde Arama",
      "subtitle": "1000 kişilik sınıfta 'Mehmet' ismini arıyoruz:",
      "cards": [
        {
          "badge": "Yöntem A",
          "title": "Sırasız Liste - Tek Tek Bak (O(n))",
          "desc": "1. kişiye bak, 2. kişiye bak... Mehmet en sonuncu sıradaysa 1000 kontrol gerekir.",
          "items": [
            {
              "bold": "Karmaşıklık",
              "text": "Worst-case: 1000 adım."
            }
          ]
        },
        {
          "badge": "Yöntem B",
          "title": "Alfabetik Sıralı Liste - Ortadan Böl (O(log n))",
          "desc": "Tam ortadaki harfe bak ('M'). Mehmet'i bulmak için en fazla 10 adım yeterlidir!",
          "items": [
            {
              "bold": "Karmaşıklık",
              "text": "Worst-case: 10 adım. 100 kat daha hızlı!"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sayı Tahmin Oyununda Big-O Karşılaştırması",
      "subtitle": "1 ile 100 arasında tutulan sayıyı iki farklı algoritmayla bulup adım sayılarını yarıştıralım.",
      "steps": [
        {
          "title": "Algoritma 1 (Doğrusal)",
          "desc": "1, 2, 3, 4, 5... diye sırayla sor. Sayı 99 ise tam 99 tahmin gerekir!"
        },
        {
          "title": "Algoritma 2 (İkili Arama)",
          "desc": "Her seferinde ortadaki sayıyı sor: '50 mi? (Daha büyük) -> 75 mi? (Daha büyük) -> 87 mi?'"
        },
        {
          "title": "Skor Karşılaştırma",
          "desc": "İkili arama en zor sayıyı bile en fazla 7 tahminde bulur (2⁷ = 128)!"
        }
      ],
      "criteria": [
        "Doğrusal arama ile ikili arama hız farkını deneyimleme",
        "Algoritmada işlem sayısı ile geçen süre ilişkisini kavrama",
        "Big-O kavramını somut örnekle açıklayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Hızlı Kod Yazma İlkeleri",
      "safetyRules": [
        {
          "bold": "Gereksiz Döngülerden Kaçının",
          "text": "Döngü içinde döngü yazmadan önce 'Bunu tek döngüde yapabilir miyim?' diye düşünün."
        },
        {
          "bold": "Veriyi Önce Sıralayın",
          "text": "Sıralı veriler üzerinde arama yapmak her zaman yüzlerce kat daha hızlıdır."
        },
        {
          "bold": "Bellek Tüketimine Dikkat Edin",
          "text": "Gereksiz devasa listeler oluşturup bilgisayarın RAM'ini tüketmeyin."
        }
      ],
      "myths": [
        {
          "wrong": "Bilgisayarım çok hızlıysa yazdığım algoritmanın hızının hiç önemi yoktur.",
          "correct": "Dünyanın en hızlı süper bilgisayarı bile O(n²) veya O(2ⁿ) bir algoritmada kilitlenir."
        },
        {
          "wrong": "Kısa yazılan kod her zaman daha hızlı çalışır.",
          "correct": "Satır sayısı değil, bilgisayarın CPU'sunda gerçekleşen işlem döngüsü hızı belirler."
        }
      ]
    },
    "quiz": {
      "question": "1.000.000 elemanlı sıralı bir listede İkili Arama (Binary Search - O(log n)) algoritması aranan elemanı EN FAZLA kaç adımda bulabilir?",
      "options": [
        {
          "text": "A) 1.000.000 adım",
          "isCorrect": false
        },
        {
          "text": "B) 500.000 adım",
          "isCorrect": false
        },
        {
          "text": "C) Yaklaşık 20 adım (2²⁰ ≈ 1.000.000)",
          "isCorrect": true
        },
        {
          "text": "D) 1 adım",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> İkili arama her adımda listeyi ikiye böldüğü için 1 milyonluk listede en fazla 20 adımda hedefe ulaşır (Log₂ 1.000.000 ≈ 20)."
    },
    "summaryRules": [
      {
        "bold": "Big-O Notasyonu",
        "text": "Algoritmaların hızını ve verimliliğini ölçen uluslararası matematik dilidir."
      },
      {
        "bold": "Hız Sıralaması",
        "text": "O(1) > O(log n) > O(n) > O(n²)."
      },
      {
        "bold": "Gerçek Mühendislik",
        "text": "Sadece çalışan değil, en hızlı ve az kaynak tüketen kodu üretmektir."
      }
    ],
    "homework": "1 ile 1000 arasında bir sayı tahmin oyununda İkili Arama ile en fazla kaç tahminde sayı bulunur? (İpucu: 2¹⁰ = ?).",
    "nextWeekPreview": "Arama ve Sıralama Algoritmaları (Binary Search vs Linear Search, Bubble Sort) - Verileri dizip arayacağız!"
  },
  {
    "week": 5,
    "date": "12 - 18 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişimsel Düşünme & İleri Düzey Problem Çözme",
    "unitBadge": "Arama & Sıralama",
    "unitTheme": "unite-1",
    "title": "Arama & Sıralama Algoritmaları: Binary & Bubble",
    "subtitle": "Doğrusal Arama, İkili Arama, Kabarcık Sıralaması (Bubble Sort) ve Karşılaştırmalar",
    "outcomeCode": "BTY.8.1.5",
    "targetSkill": "Arama ve Sıralama Algoritmalarını Kodlama & Analiz",
    "curiosityQuestion": "Bir iskambil destesini elinize aldığınızda kartları küçükten büyüğe nasıl dizersiniz? Bilgisayar milyonlarca sayıyı nasıl sıraya koyar?",
    "roadmap": [
      {
        "title": "Sıralama Neden Şarttır?",
        "desc": "Sıralı olmayan bir kütüphanede veya veritabanında arama yapmak imkânsızdır."
      },
      {
        "title": "Kabarcık Sıralaması (Bubble Sort)",
        "desc": "Yan yana duran iki elemanı karşılaştırıp büyük olanı sağa kaydırma algoritması."
      },
      {
        "title": "Doğrusal Arama (Linear Search)",
        "desc": "Listenin başından sonuna kadar tek tek kontrol etme yöntemi."
      },
      {
        "title": "İkili Arama (Binary Search)",
        "desc": "Sıralı listeyi sürekli ortadan ikiye bölerek hedefe ışık hızında ulaşma."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Arama Algoritmaları (Binary vs Linear)</text>\n\n  <!-- İkili Arama (Binary Search) Ağacı -->\n  <g transform=\"translate(185, 70)\">\n    <circle cx=\"40\" cy=\"20\" r=\"18\" fill=\"#312e81\" stroke=\"#818cf8\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"25\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-weight=\"bold\">50</text>\n\n    <line x1=\"25\" y1=\"35\" x2=\"-20\" y2=\"65\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n    <line x1=\"55\" y1=\"35\" x2=\"100\" y2=\"65\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n\n    <circle cx=\"-25\" cy=\"80\" r=\"16\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"1.5\"/>\n    <text x=\"-25\" y=\"85\" text-anchor=\"middle\" fill=\"#93c5fd\" font-size=\"10\">25</text>\n\n    <circle cx=\"105\" cy=\"80\" r=\"16\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n    <text x=\"105\" y=\"85\" text-anchor=\"middle\" fill=\"#6ee7b7\" font-size=\"10\">75</text>\n  </g>\n\n  <rect x=\"50\" y=\"210\" width=\"350\" height=\"85\" rx=\"12\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"235\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"12\" font-weight=\"bold\">İkili Arama (Binary Search): Her Adımda Listeyi İkiye Böl!</text>\n  <text x=\"225\" y=\"258\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">1.000.000 kişilik telefon rehberinde aranan kişi en fazla 20 adımda bulunur.</text>\n  <text x=\"225\" y=\"278\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"10\">Şart: Listenin sıralı (küçükten büyüğe) olması gerekir.</text>\n</svg>",
    "section1": {
      "title": "Kabarcık Sıralaması (Bubble Sort) Mantığı",
      "subtitle": "Hafif kabarcıkların suyun yüzeyine çıkması gibi büyük sayılar sağa doğru kayar:",
      "cards": [
        {
          "title": "Adım Adım Sıralama [5, 2, 8, 1]",
          "icon": "🫧",
          "desc": "Yan yana iki sayıyı karşılaştır, büyükse yer değiştir (Swap):",
          "items": [
            {
              "bold": "1. Karşılaştırma",
              "text": "5 ve 2 -> 5 büyük, yer değiştir: [2, 5, 8, 1]"
            },
            {
              "bold": "2. Karşılaştırma",
              "text": "5 ve 8 -> 8 zaten büyük, dokunma: [2, 5, 8, 1]"
            },
            {
              "bold": "3. Karşılaştırma",
              "text": "8 ve 1 -> 8 büyük, yer değiştir: [2, 5, 1, 8] (En büyük 8 en sona yerleşti!)"
            },
            {
              "bold": "Tekrar Et",
              "text": "Dizi tamamen sıralanana [1, 2, 5, 8] kadar turlara devam et."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Arama Algoritmalarının Karşılaştırması",
      "subtitle": "Hangi durumda hangi algoritmayı seçmeliyiz?",
      "cards": [
        {
          "badge": "Linear Search",
          "title": "Doğrusal Arama",
          "desc": "Avantajı: Listenin sıralı olmasına gerek yoktur; dağınık listelerde de çalışır.",
          "items": [
            {
              "bold": "Dezavantajı",
              "text": "Liste büyüdükçe çok yavaşlar (O(n))."
            }
          ]
        },
        {
          "badge": "Binary Search",
          "title": "İkili Arama",
          "desc": "Avantajı: Milyonlarca veriyi saniyeden kısa sürede bulur (O(log n)).",
          "items": [
            {
              "bold": "Dezavantajı",
              "text": "Liste mutlaka önceden sıralanmış olmalıdır!"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Canlı İnsan Kartları Sıralama Atölyesi",
      "subtitle": "Sınıftan 6 öğrenci ellerinde sayılarla tahtaya çıksın ve Bubble Sort algoritmasını canlandırsın.",
      "steps": [
        {
          "title": "Rastgele Dizilin",
          "desc": "Tahtada [42, 17, 85, 3, 90, 24] sayılarını tutarak yan yana durun."
        },
        {
          "title": "Karşılaştır ve Yer Değiştir",
          "desc": "1. ve 2. öğrenci sayılarını karşılaştırsın; büyük olan sağa geçsin."
        },
        {
          "title": "Sıralı Diziye Ulaş",
          "desc": "Kaç turda dizinin [3, 17, 24, 42, 85, 90] haline geldiğini tahtaya yazın."
        }
      ],
      "criteria": [
        "Bubble sort yer değiştirme mantığını hatasız uygulayabilme",
        "Algoritmanın adım sayısını takip edebilme",
        "Görsel ve kinestetik yöntemle algoritmayı kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Algoritma Seçim Stratejisi",
      "safetyRules": [
        {
          "bold": "Küçük Listelerde Basit Düşünün",
          "text": "10 elemanlı küçük bir listede karmaşık sıralama algoritmalarına gerek yoktur."
        },
        {
          "bold": "Büyük Veride Önce Sırala",
          "text": "Eğer bir listede milyonlarca kez arama yapacaksanız, listeyi bir kere sıralayıp hep Binary Search kullanın."
        },
        {
          "bold": "Bellek Takibi",
          "text": "Bazı sıralama algoritmaları ek bellek ister; Bubble sort yerinde (in-place) sıralar."
        }
      ],
      "myths": [
        {
          "wrong": "Binary search her türlü listede doğrudan çalışır.",
          "correct": "Binary search sırasız bir listede asla çalışmaz; sonuçları tamamen yanlış bulur."
        },
        {
          "wrong": "Bubble sort dünyanın en hızlı sıralama algoritmasıdır.",
          "correct": "Bubble sort en kolay anlaşılanıdır ama O(n²) olduğu için büyük verilerde yavaştır; Quick Sort çok daha hızlıdır."
        }
      ]
    },
    "quiz": {
      "question": "İkili Arama (Binary Search) algoritmasının çalışabilmesi için arama yapılacak listede bulunması gereken ZORUNLU ŞART hangisidir?",
      "options": [
        {
          "text": "A) Listedeki tüm sayıların çift olması",
          "isCorrect": false
        },
        {
          "text": "B) Listenin mutlaka önceden küçükten büyüğe (sıralı) dizilmiş olması",
          "isCorrect": true
        },
        {
          "text": "C) Listede en fazla 10 eleman bulunması",
          "isCorrect": false
        },
        {
          "text": "D) Listenin metinlerden oluşması",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> İkili Arama, ortadaki elemana bakıp aranan sayının sağda mı solda mı olduğuna karar verebilmek için listenin kesinlikle SIRALI olmasını şart koşar."
    },
    "summaryRules": [
      {
        "bold": "Sıralama",
        "text": "Verileri anlamlandırmanın ve hızlı aramanın ön koşuludur."
      },
      {
        "bold": "Bubble Sort",
        "text": "Komşu elemanları karşılaştırarak büyük olanı sağa iter."
      },
      {
        "bold": "Binary Search",
        "text": "Sıralı listelerde ortadan ikiye bölerek logaritmik hızda arar."
      }
    ],
    "homework": "[9, 3, 7, 1] dizisini Bubble Sort adımlarını tek tek yazarak defterinizde sıralayın.",
    "nextWeekPreview": "Akış Şemalarında İleri Mantık: Çoklu Koşullar ve İçiçe Döngüler - Şemaları profesyonelleştiriyoruz!"
  },
  {
    "week": 6,
    "date": "19 - 25 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişimsel Düşünme & İleri Düzey Problem Çözme",
    "unitBadge": "İleri Akış Şemaları",
    "unitTheme": "unite-1",
    "title": "Akış Şemalarında İleri Mantık & İçiçe Döngüler",
    "subtitle": "Çoklu Koşullar (VE / VEYA Mantığı), Sayaçlar, İçiçe Döngü Mimarisi ve Kod Eşleme",
    "outcomeCode": "BTY.8.1.6",
    "targetSkill": "Karmaşık Algoritmik Akış Şemaları Tasarlama",
    "curiosityQuestion": "ATM makineleri şifrenizi girerken '3 kez yanlış girersen kartı yut' kuralını akış şemasında hangi sayaç ve karar döngüsüyle yönetir?",
    "roadmap": [
      {
        "title": "Mantıksal Operatörler (VE / VEYA)",
        "desc": "İki şartın aynı anda doğru olması (VE) veya birinin yeterli olması (VEYA)."
      },
      {
        "title": "Sayaç (Counter) Değişkenleri",
        "desc": "Her turda `sayac = sayac + 1` yaparak döngü sayısını ve deneme hakkını denetleme."
      },
      {
        "title": "İçiçe Döngü Mantığı",
        "desc": "Dış döngünün her 1 adımı için iç döngünün baştan sona dönmesi (Saat ve Dakika analojisi)."
      },
      {
        "title": "Akış Şemasından Kod Bloğuna",
        "desc": "Çizilen şemayı doğrudan Python sözdizimine eşleme hazırlığı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">İleri Akış Şemaları & İçiçe Döngüler</text>\n\n  <g transform=\"translate(170, 75)\">\n    <rect width=\"110\" height=\"35\" rx=\"6\" fill=\"#312e81\" stroke=\"#818cf8\" stroke-width=\"1.5\"/>\n    <text x=\"55\" y=\"22\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"10\" font-weight=\"bold\">Dış Döngü (i = 1..5)</text>\n    \n    <path d=\"M55,35 L55,55\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n\n    <rect y=\"55\" width=\"110\" height=\"35\" rx=\"6\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n    <text x=\"55\" y=\"77\" text-anchor=\"middle\" fill=\"#a7f3d0\" font-size=\"10\" font-weight=\"bold\">İç Döngü (j = 1..5)</text>\n\n    <path d=\"M55,90 L55,110\" stroke=\"#10b981\" stroke-width=\"2\"/>\n\n    <rect y=\"110\" width=\"110\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <text x=\"55\" y=\"130\" text-anchor=\"middle\" fill=\"#fde68a\" font-size=\"9\">Matris Hücresi (i*j)</text>\n  </g>\n\n  <rect x=\"50\" y=\"235\" width=\"350\" height=\"60\" rx=\"10\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"260\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"12\" font-weight=\"bold\">2 Boyutlu Düşünme: Çarpım Tablosu ve Pikseller</text>\n  <text x=\"225\" y=\"280\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">İçiçe döngüler ekran piksellerini ve oyun haritalarını oluşturur.</text>\n</svg>",
    "section1": {
      "title": "VE (AND) ve VEYA (OR) Mantıksal Kararları",
      "subtitle": "Gerçek hayat kararları tek bir şarta bağlı değildir:",
      "cards": [
        {
          "title": "Mantık Kapıları",
          "icon": "🚪",
          "desc": "Birden fazla şartı birbirine bağlama kuralları:",
          "items": [
            {
              "bold": "VE (AND) Kuralı",
              "text": "Her iki şart da DOĞRU olmalıdır. Örn: (KullanıcıAdı Doğru VE Şifre Doğru) ise giriş yap."
            },
            {
              "bold": "VEYA (OR) Kuralı",
              "text": "Şartlardan sadece BİRİNİN doğru olması yeterlidir. Örn: (Nakit Para Var VEYA Kredi Kartı Var) ise alışveriş yap."
            },
            {
              "bold": "DEĞİL (NOT) Kuralı",
              "text": "Şartın tersini alır. Doğruysa Yanlış, Yanlışsa Doğru yapar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Saat ve Dakika Analojisi: İçiçe Döngüler",
      "subtitle": "Dış döngü yavaş, iç döngü hızlı döner:",
      "cards": [
        {
          "badge": "Saat Analojisi",
          "title": "Saat (Dış) ve Dakika (İç)",
          "desc": "Saat 1 kez ilerlediğinde, dakika ibresi tam 60 kez döner. İşte içiçe döngü tam olarak budur!",
          "items": [
            {
              "bold": "Toplam İşlem",
              "text": "24 saat x 60 dakika = 1440 dakika."
            }
          ]
        },
        {
          "badge": "Matris & Piksel",
          "title": "Ekran Görüntüsü",
          "desc": "1920x1080 piksel bir ekranda her satır için (dış döngü) sütunlar tek tek (iç döngü) taranır.",
          "items": [
            {
              "bold": "Görüntü İşleme",
              "text": "Oyun motorlarının grafik çizme temelidir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "ATM Giriş Güvenlik Akış Şeması Çizimi",
      "subtitle": "Kullanıcıya 3 şifre deneme hakkı veren, doğru girerse parayı veren akış şemasını çizelim.",
      "steps": [
        {
          "title": "Başlangıç ve Sayaç",
          "desc": "Elips (BAŞLA) -> Dikdörtgen (`hak = 3`)."
        },
        {
          "title": "Şifre Girişi ve Karar",
          "desc": "Şifreyi oku -> Baklava (Şifre Doğru mu?)."
        },
        {
          "title": "Döngü ve Kart Yutma",
          "desc": "EVET ise -> Para Menüsü. HAYIR ise -> `hak = hak - 1`. `hak = 0` ise 'Kart bloke edildi' de ve BİTİR."
        }
      ],
      "criteria": [
        "Sayaç değişkenini akış şemasında doğru güncelleme",
        "Karar kutusundan çıkan EVET ve HAYIR oklarını döngüye bağlama",
        "Karmaşık mantığı şemada temiz ve okunabilir sunma"
      ]
    },
    "tips": {
      "safetyTitle": "Akış Şeması Profesyonellik Taktikleri",
      "safetyRules": [
        {
          "bold": "Sonsuz Döngüye Dikkat Edin",
          "text": "Sayacı artırmayı veya azaltmayı unutursanız program sonsuza kadar döner ve kilitlenir."
        },
        {
          "bold": "Şartları Net İfade Edin",
          "text": "'Yas >= 18 VE Ehliyet == Var' şeklinde matematiksel operatörler kullanın."
        },
        {
          "bold": "Kesişen Çizgilerden Kaçının",
          "text": "Okların birbiri üzerinden atlamaması için şemayı geniş ve ferah çizin."
        }
      ],
      "myths": [
        {
          "wrong": "Akış şeması çizmek vakit kaybıdır, doğrudan kod yazılmalıdır.",
          "correct": "Dünyanın en büyük yazılım şirketlerinde şeması onaylanmayan tek bir satır kod bile yazılamaz."
        },
        {
          "wrong": "İçiçe 10 tane döngü yazmak iyi bir şeydir.",
          "correct": "Çok fazla içiçe döngü performansı yerle bir eder; mümkün olduğunca sade tutulmalıdır."
        }
      ]
    },
    "quiz": {
      "question": "Bir sistemde kullanıcının giriş yapabilmesi için HEM e-posta adresinin doğrulanmış olması HEM DE şifresinin doğru olması şartını kontrol eden mantıksal operatör hangisidir?",
      "options": [
        {
          "text": "A) VEYA (OR)",
          "isCorrect": false
        },
        {
          "text": "B) VE (AND)",
          "isCorrect": true
        },
        {
          "text": "C) DEĞİL (NOT)",
          "isCorrect": false
        },
        {
          "text": "D) EŞİT DEĞİL (!=)",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'VE (AND)' operatörü iki şartın da aynı anda DOĞRU olmasını zorunlu kılar; biri bile yanlışsa giriş engellenir."
    },
    "summaryRules": [
      {
        "bold": "Mantıksal Operatörler",
        "text": "VE (AND) ikisini de ister, VEYA (OR) birine razı olur."
      },
      {
        "bold": "Sayaçlar",
        "text": "Döngünün kaç kez döndüğünü takip eden dijital çetelerdir."
      },
      {
        "bold": "İçiçe Döngüler",
        "text": "Saat-dakika gibi çok boyutlu matris ve ekran işlemlerini yönetir."
      }
    ],
    "homework": "Çarpım tablosunu (1'den 10'a kadar) üreten içiçe döngü algoritmasının akış şemasını defterinize çizin.",
    "nextWeekPreview": "29 Ekim Cumhuriyet Bayramı: Cumhuriyetin 100 Yıllık Teknolojik Hamlesi ve Milli İnovasyon!"
  },
  {
    "week": 7,
    "date": "26 Ekim - 01 Kasım",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişimsel Düşünme & İleri Düzey Problem Çözme",
    "unitBadge": "Cumhuriyet Özel",
    "unitTheme": "unite-1",
    "title": "29 Ekim Cumhuriyet Bayramı: Milli Teknoloji Hamlesi",
    "subtitle": "Cumhuriyetin İkinci Yüzyılı, Savunma Sanayii Yazılımları, TEKNOFEST ve İnovasyon",
    "outcomeCode": "BTY.8.1.7",
    "targetSkill": "Milli İnovasyon Bilinci & Savunma Sanayii Mimarisi",
    "curiosityQuestion": "İnsansız savaş uçaklarımız KIZILELMA ve ANKA havada pilot olmadan saniyede binlerce kararı hangi algoritmalarla alır?",
    "roadmap": [
      {
        "title": "Cumhuriyet ve Teknoloji",
        "desc": "Gazi Mustafa Kemal Atatürk'ün 'İstikbal göklerdedir' hedefinin dijital çağdaki yansıması."
      },
      {
        "title": "Milli Teknoloji Hamlesi",
        "desc": "TÜRKSAT 6A yerli haberleşme uydusu, TCG Anadolu ve otonom sistemler."
      },
      {
        "title": "Otonom Uçuş Algoritmaları",
        "desc": "Yapay zekâ ve bilgisayarlı görüyle pisti tanıyıp otomatik inen İHA yazılımları."
      },
      {
        "title": "TEKNOFEST Ruhu",
        "desc": "Gençlerin roket, robotik ve yapay zekâ yarışmalarında dünya liderliğine yürümesi."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#e11d48\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"16\" font-weight=\"bold\">29 Ekim Cumhuriyet Bayramı: Milli Teknoloji Hamlesi</text>\n\n  <!-- Bayrak ve Teknoloji Simgeleri -->\n  <rect x=\"50\" y=\"75\" width=\"350\" height=\"135\" rx=\"12\" fill=\"#be123c\"/>\n  <circle cx=\"160\" cy=\"142\" r=\"38\" fill=\"#ffffff\"/><circle cx=\"170\" cy=\"142\" r=\"30\" fill=\"#be123c\"/>\n  <polygon points=\"205,125 210,138 224,138 214,146 218,159 205,150 192,159 196,146 186,138 200,138\" fill=\"#ffffff\"/>\n\n  <text x=\"290\" y=\"125\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\">TÜRKSAT 6A</text>\n  <text x=\"290\" y=\"145\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\">BAYRAKTAR KIZILELMA</text>\n  <text x=\"290\" y=\"165\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\">MİLLİ İŞLEMCİ ÇAKIL</text>\n\n  <rect x=\"50\" y=\"225\" width=\"350\" height=\"70\" rx=\"10\" fill=\"#1e293b\" stroke=\"#e11d48\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"250\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"13\" font-weight=\"bold\">Cumhuriyetin 2. Yüzyılında Bilişim Ordusu!</text>\n  <text x=\"225\" y=\"272\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Genç yazılımcılar olarak Türkiye'nin yerli teknolojilerini üretiyoruz.</text>\n</svg>",
    "section1": {
      "title": "Milli Savunma ve Bağımsız Yazılım",
      "subtitle": "Yazılımı yerli olmayan bir ülkenin savunması asla tam bağımsız olamaz:",
      "cards": [
        {
          "title": "Milli Gururlarımız ve Bilişim Altyapısı",
          "icon": "🚀",
          "desc": "Türkiye'nin geliştirdiği yerli mühendislik harikaları:",
          "items": [
            {
              "bold": "KIZILELMA (İnsansız Savaş Uçağı)",
              "text": "Yapay zekâ algoritmalarıyla havada kendi kararlarını alan otonom savaş jeti."
            },
            {
              "bold": "TÜRKSAT 6A",
              "text": "Tamamen Türk mühendislerince yazılan uçuş kontrol yazılımlarıyla uzaydaki gözümüz."
            },
            {
              "bold": "ÇAKIL Milli İşlemci",
              "text": "Donanım mimarisi ve mikroişlemci tasarımı Türkiye'de yapılan yerli çip."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Otonom Uçuşun Algoritma Mimarisi",
      "subtitle": "Bir İHA hedefi nasıl takip eder?",
      "cards": [
        {
          "badge": "Sensör Füzyonu",
          "title": "Verileri Birleştirme",
          "desc": "Kamera, radar, lidar ve GPS verilerini saniyede 100 kez birleştirip konum doğrular.",
          "items": [
            {
              "bold": "Güvenilirlik",
              "text": "GPS kesilse bile kamera görüntüsüyle yolunu bulur."
            }
          ]
        },
        {
          "badge": "Karar Verme",
          "title": "Engelden Kaçış",
          "desc": "Eğer rotada dağ veya tehdit algılanırsa -> En az yakıt harcayan alternatif rotayı hesapla.",
          "items": [
            {
              "bold": "Otonomi",
              "text": "İnsan müdahalesine gerek kalmadan görev tamamlanır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "İHA Otonom Rota Planlayıcı Algoritması",
      "subtitle": "Bir İHA'nın A noktasından B noktasına engelleri aşarak güvenle uçmasını sağlayan algoritmayı tasarlayalım.",
      "steps": [
        {
          "title": "Koordinatları Tanımla",
          "desc": "Başlangıç konumu (x1, y1, z1) ve hedef radar üssü (x2, y2, z2)."
        },
        {
          "title": "Hava Koşulları ve Radar Alanı",
          "desc": "Fırtınalı bölgeleri ve yasak hava sahalarını 'Engeller' matrisine ekleyin."
        },
        {
          "title": "En Güvenli Rotayı Hesapla",
          "desc": "Dijkstra veya A* algoritması mantığıyla engellere 5 km'den fazla yaklaşmayan rotayı çıkarın."
        }
      ],
      "criteria": [
        "Otonom sistemlerin çalışma prensiplerini kavrama",
        "Milli teknoloji kavramlarını doğru terminolojiyle kullanma",
        "Algoritmik güvenlik kontrollerini rota tasarımına yansıtma"
      ]
    },
    "tips": {
      "safetyTitle": "Milli Bilişim Etiği",
      "safetyRules": [
        {
          "bold": "Yerli ve Açık Kaynak",
          "text": "Kritik devlet verilerinde yerli yazılımları (Pardus vb.) ve yerli sunucuları tercih edin."
        },
        {
          "bold": "Siber Vatan Savunması",
          "text": "Siber güvenlik denizlerimiz ve kara sınırlarımız kadar kutsal bir savunma cephesidir."
        },
        {
          "bold": "Sürekli Gelişim",
          "text": "Dünyadaki en son yapay zekâ gelişmelerini takip edip ülkemize uyarlayın."
        }
      ],
      "myths": [
        {
          "wrong": "Türkiye teknoloji üretemez, sadece dışarıdan alır.",
          "correct": "Türkiye bugün SİHA, İHA ve uydu yazılımlarında dünyanın en gelişmiş 3 ülkesinden biridir!"
        },
        {
          "wrong": "Gençlerin savunma sanayiine katkısı olamaz.",
          "correct": "TEKNOFEST'te yarışan lise takımları bugün savunma sanayiimizin en parlak mühendis adaylarıdır."
        }
      ]
    },
    "quiz": {
      "question": "Türkiye'nin uzaydaki ilk yerli ve milli haberleşme uydusunun adı nedir?",
      "options": [
        {
          "text": "A) TÜRKSAT 1A",
          "isCorrect": false
        },
        {
          "text": "B) TÜRKSAT 6A",
          "isCorrect": true
        },
        {
          "text": "C) GÖKTÜRK 3",
          "isCorrect": false
        },
        {
          "text": "D) ANKA 2",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> TÜRKSAT 6A, tamamen Türk mühendislerinin geliştirdiği yazılım ve donanımla üretilen ilk yerli haberleşme uydumuzdur."
    },
    "summaryRules": [
      {
        "bold": "29 Ekim Coşkusu",
        "text": "Cumhuriyetimizi bilimle, yazılımla ve milli inovasyonla yücelteceğiz."
      },
      {
        "bold": "Milli Teknoloji",
        "text": "KIZILELMA, TÜRKSAT 6A ve yerli çipler tam bağımsızlığımızın teminatıdır."
      },
      {
        "bold": "Genç Mühendisler",
        "text": "8. sınıf öğrencileri olarak geleceğin teknolojisini tasarlamaya hazırız."
      }
    ],
    "homework": "Milli Teknoloji Hamlesi ürünlerinden birini (KIZILELMA, TCG ANADOLU veya TÜRKSAT 6A) araştırıp 1 sayfalık teknik özet hazırlayın.",
    "nextWeekPreview": "1. Dönem 1. Yazılı Sınav Tekrarı & Bilişimsel Mantık Muhakeme Kampı - Sınava bomba gibi giriyoruz!"
  },
  {
    "week": 8,
    "date": "02 - 08 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Siber Güvenlik, Dijital Haklar & Veri Güvenliği",
    "unitBadge": "Sınav Tekrarı",
    "unitTheme": "unite-2",
    "title": "1. Dönem 1. Yazılı Sınav Tekrarı & Mantık Kampı",
    "subtitle": "Bilişimsel Düşünme, Big-O, Arama/Sıralama ve Akış Şemaları Soru Çözümleri",
    "outcomeCode": "BTY.8.1.8",
    "targetSkill": "Yazılı Sınav Hazırlığı & Mantık Muhakeme Yetkinliği",
    "curiosityQuestion": "LGS sınavında karşınıza çıkacak bir mantık sorusunda 'Bu soruyu Big-O ve İkili Arama ile 10 saniyede çözerim' diyebilir misiniz?",
    "roadmap": [
      {
        "title": "Bilişimsel Düşünme 4 Adımı",
        "desc": "Ayrıştırma, örüntü tanıma, soyutlama ve algoritma kavramlarının pekiştirilmesi."
      },
      {
        "title": "Big-O Soru Tipleri",
        "desc": "Döngülerin karmaşıklığını hesaplama ve en hızlı algoritmayı seçme."
      },
      {
        "title": "Binary Search & Bubble Sort",
        "desc": "Adım adım sıralama ve arama tablolarını eksiksiz doldurma."
      },
      {
        "title": "Şema ve Döngü Takibi",
        "desc": "Akış şemasındaki değişkenlerin adım adım izleme tablosunu (Trace Table) çıkarma."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">1. Dönem 1. Yazılı Sınav Tekrarı</text>\n\n  <g transform=\"translate(60, 75)\">\n    <rect width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n    <text x=\"70\" y=\"32\" text-anchor=\"middle\" font-size=\"20\">🧠</text>\n    <text x=\"70\" y=\"55\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"10\" font-weight=\"bold\">Bilişimsel Düşünme</text>\n  </g>\n\n  <g transform=\"translate(250, 75)\">\n    <rect width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n    <text x=\"70\" y=\"32\" text-anchor=\"middle\" font-size=\"20\">⏱️</text>\n    <text x=\"70\" y=\"55\" text-anchor=\"middle\" fill=\"#93c5fd\" font-size=\"10\" font-weight=\"bold\">Algoritmik Karmaşıklık</text>\n  </g>\n\n  <g transform=\"translate(60, 160)\">\n    <rect width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"70\" y=\"32\" text-anchor=\"middle\" font-size=\"20\">🔍</text>\n    <text x=\"70\" y=\"55\" text-anchor=\"middle\" fill=\"#6ee7b7\" font-size=\"10\" font-weight=\"bold\">Arama Algoritmaları</text>\n  </g>\n\n  <g transform=\"translate(250, 160)\">\n    <rect width=\"140\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"70\" y=\"32\" text-anchor=\"middle\" font-size=\"20\">📊</text>\n    <text x=\"70\" y=\"55\" text-anchor=\"middle\" fill=\"#fde68a\" font-size=\"10\" font-weight=\"bold\">İleri Akış Şemaları</text>\n  </g>\n\n  <text x=\"225\" y=\"275\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"12\">LGS Sayısal Mantık & Bilişim Sınavına Tam Hazırlık</text>\n</svg>",
    "section1": {
      "title": "Sınavın 4 Kritik Soru Bölgesi",
      "subtitle": "Puan kaybetmemek için dikkat edilmesi gereken noktalar:",
      "cards": [
        {
          "title": "Sınav Taktik Tablosu",
          "icon": "🎯",
          "desc": "Soruların çözüm yolları:",
          "items": [
            {
              "bold": "1. Soyutlama Sorusu",
              "text": "Verilen senaryoda sistem için GEREKSİZ olan detayı bulun (Örn: Arabanın rengi, yolcunun ayakkabısı)."
            },
            {
              "bold": "2. Big-O Sorusu",
              "text": "Tek döngü = O(n), İçiçe iki döngü = O(n²), İkiye bölerek arama = O(log n)."
            },
            {
              "bold": "3. Binary Search Adım Sayısı",
              "text": "N eleman için 2'nin hangi kuvveti N'yi geçer? (Örn: 64 eleman için 2⁶ = 64 -> 6 adım)."
            },
            {
              "bold": "4. Mantıksal VE/VEYA",
              "text": "VE için ikisi de doğru olmalı, VEYA için biri yetmelidir."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "İzleme Tablosu (Trace Table) Çözme Sanatı",
      "subtitle": "Akış şemasındaki değişkenlerin değerlerini tabloya yazarak takip etme:",
      "cards": [
        {
          "badge": "Örnek Döngü",
          "title": "Toplam Algoritması",
          "desc": "`toplam = 0`, `i = 1`. Her turda: `toplam = toplam + i`, `i = i + 1`. `i > 3` olunca dur.",
          "items": [
            {
              "bold": "Tur 1",
              "text": "toplam = 1, i = 2"
            },
            {
              "bold": "Tur 2",
              "text": "toplam = 3, i = 3"
            },
            {
              "bold": "Tur 3",
              "text": "toplam = 6, i = 4 (DUR!). Sonuç = 6."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "LGS Mantık & Bilişim Deneme Sınavı",
      "subtitle": "Akıllı tahtada 10 soruluk gerçek sınav provasını süreye karşı çözelim.",
      "steps": [
        {
          "title": "Bireysel Çözüm (15 dk)",
          "desc": "Tüm öğrenciler sınav kâğıdındaki 10 soruyu bağımsız olarak çözsün."
        },
        {
          "title": "Tahtada Analiz (15 dk)",
          "desc": "Öğretmenle birlikte her sorunun çeldiricilerini ve püf noktalarını tartışın."
        },
        {
          "title": "Puanlama",
          "desc": "Eksik kalan konuları belirleyip çalışma planınıza ekleyin."
        }
      ],
      "criteria": [
        "Algoritmik akış şemalarını izleme tablosuyla hatasız çözebilme",
        "Arama ve sıralama algoritmalarının şartlarını ayırt edebilme",
        "Zamanı verimli kullanarak sınav kaygısını aşma"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Başarı Kuralları",
      "safetyRules": [
        {
          "bold": "Sorunun Köküne Odaklanın",
          "text": "'Ulaşılamaz', 'Gereksizdir', 'Yanlıştır' gibi olumsuz köklerin altını çizin."
        },
        {
          "bold": "Trace Table Çizin",
          "text": "Değişkenli döngü sorularında kâğıdın kenarına mutlaka küçük bir izleme tablosu çizin."
        },
        {
          "bold": "Formülleri Hatırlayın",
          "text": "Binary search'te 2'nin katlarını (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024) ezbere bilin."
        }
      ],
      "myths": [
        {
          "wrong": "Bilişim sınavında ezber yeterlidir.",
          "correct": "Bilişim sınavında mantık ve uygulama esastır; ezberleyen değil sistemi anlayan 100 alır."
        },
        {
          "wrong": "Binary search sırasız listede de çalışır.",
          "correct": "Sınavda en çok düşülen tuzaktır: Binary search için liste KESİNLİKLE sıralı olmalıdır!"
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasının 'Zaman Karmaşıklığı (Big-O)' değeri nedir?\nfor i in range(n):\n    for j in range(n):\n        print(i, j)",
      "options": [
        {
          "text": "A) O(1)",
          "isCorrect": false
        },
        {
          "text": "B) O(n)",
          "isCorrect": false
        },
        {
          "text": "C) O(n²) - Karesel Karmaşıklık",
          "isCorrect": true
        },
        {
          "text": "D) O(log n)",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> İçiçe iki tane `n` defa dönen döngü bulunduğu için toplam işlem sayısı n * n = n² olur ve karmaşıklığı O(n²)'dir."
    },
    "summaryRules": [
      {
        "bold": "Büyük Tekrar",
        "text": "Bilişimsel düşünmenin 4 adımı tüm sınavın çatısıdır."
      },
      {
        "bold": "Algoritmalar",
        "text": "Binary search logaritmik hızda arar, Bubble sort takasla sıralar."
      },
      {
        "bold": "Başarı İnancı",
        "text": "Konuları derinlemesine anladınız; sınavda tam puan sizi bekliyor!"
      }
    ],
    "homework": "Sınav çalışma kâğıdındaki 3 adet izleme tablosu (Trace Table) sorusunu evde çözün.",
    "nextWeekPreview": "Siber Tehditler ve Zararlı Yazılımlar (Malware, Ransomware, Phishing) & 10 Kasım Atatürk'ü Anma!"
  },
  {
    "week": 9,
    "date": "09 - 15 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Siber Güvenlik, Dijital Haklar & Veri Güvenliği",
    "unitBadge": "Siber Tehditler & 10 Kasım",
    "unitTheme": "unite-2",
    "title": "Siber Tehditler & 10 Kasım Atatürk'ü Anma",
    "subtitle": "Kötü Amaçlı Yazılımlar (Malware, Ransomware, Truva Atı), Oltalama ve Siber Vatan",
    "outcomeCode": "BTY.8.2.1",
    "targetSkill": "Siber Tehditleri Tanıma & Savunma Mekanizması Geliştirme",
    "curiosityQuestion": "Bir bilgisayar korsanı banka hesabınıza veya okul sistemine girmek için süper bilgisayarlar yerine neden sahte bir e-posta (Oltalama) kullanır?",
    "roadmap": [
      {
        "title": "Kötü Amaçlı Yazılımlar (Malware)",
        "desc": "Virüs, Solucan (Worm), Truva Atı (Trojan), Fidye Yazılımı (Ransomware), Casus Yazılım (Spyware)."
      },
      {
        "title": "Sosyal Mühendislik & Oltalama (Phishing)",
        "desc": "İnsan zaaflarını (merak, korku, açgözlülük) kullanarak şifreleri çalma tuzağı."
      },
      {
        "title": "Fidye Yazılımları Tehlikesi",
        "desc": "Dosyaları şifreleyip para isteyen tehlikeli yazılımlardan korunma yolları."
      },
      {
        "title": "10 Kasım Atatürk'ü Anma",
        "desc": "Büyük Önder Mustafa Kemal Atatürk'ün bilim ve bağımsızlık meşalesini siber vatanda taşıma."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Siber Tehditler & 10 Kasım Atatürk'ü Anma</text>\n\n  <!-- Kalkan ve Virüs Simgesi -->\n  <g transform=\"translate(185, 70)\">\n    <path d=\"M40,5 L80,25 L80,80 Q40,115 40,115 Q0,80 0,25 Z\" fill=\"#312e81\" stroke=\"#818cf8\" stroke-width=\"3\"/>\n    <text x=\"40\" y=\"65\" text-anchor=\"middle\" font-size=\"34\">🛡️</text>\n  </g>\n\n  <rect x=\"50\" y=\"200\" width=\"350\" height=\"95\" rx=\"12\" fill=\"#1e293b\" stroke=\"#ef4444\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"225\" text-anchor=\"middle\" fill=\"#fca5a5\" font-size=\"13\" font-weight=\"bold\">Zararlı Yazılımlar: Malware, Ransomware, Phishing</text>\n  <text x=\"225\" y=\"248\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Oltalama (Phishing) tuzaklarına düşmemek için URL adreslerini kontrol et.</text>\n  <text x=\"225\" y=\"272\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">10 Kasım: Ata'mızın \"İstikbal Göklerdedir\" Vizyonu Bilişimde Yaşıyor!</text>\n</svg>",
    "section1": {
      "title": "Zararlı Yazılım (Malware) Türleri",
      "subtitle": "Dijital virüslerin ve tehditlerin çalışma yöntemleri:",
      "cards": [
        {
          "title": "5 Tehlikeli Zararlı Yazılım",
          "icon": "🦠",
          "desc": "Sistemleri çökerten veya bilgileri çalan dijital silahlar:",
          "items": [
            {
              "bold": "1. Truva Atı (Trojan)",
              "text": "Faydalı bir oyun veya program gibi görünür; içine gizli kapı (backdoor) açar."
            },
            {
              "bold": "2. Fidye Yazılımı (Ransomware)",
              "text": "Bütün fotoğrafları ve ödevleri şifreler, açmak için kripto para (fidye) ister."
            },
            {
              "bold": "3. Solucan (Worm)",
              "text": "Kullanıcıya ihtiyaç duymadan ağ üzerinden bilgisayardan bilgisayara kendi kendine bulaşır."
            },
            {
              "bold": "4. Casus Yazılım (Spyware)",
              "text": "Klavyede bastığınız her tuşu (şifreler dahil) kaydedip korsana yollar (Keylogger)."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sosyal Mühendislik: Oltalama (Phishing)",
      "subtitle": "Korsanların en çok kullandığı insan kandırma sanatı:",
      "cards": [
        {
          "badge": "Tuzak",
          "title": "Sahte E-Posta / SMS",
          "desc": "'Tebrikler 10.000 TL kazandınız, hemen linke tıklayıp şifrenizi girin!' veya 'Kargonuz teslim edilemedi, tıklayın'.",
          "items": [
            {
              "bold": "Tehlike",
              "text": "Site gerçek banka veya kargo sitesinin birebir kopyasıdır."
            }
          ]
        },
        {
          "badge": "Savunma",
          "title": "URL Adresini Kontrol Et!",
          "desc": "Site adresine dikkatlice bakın: 'www.ziraatbankasi.com' yerine 'www.ziraat-bank-guvenlik.xyz' yazıyorsa DERHAL KAÇIN!",
          "items": [
            {
              "bold": "Kural",
              "text": "Hiçbir resmi kurum SMS ile şifre istemez."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Oltalama (Phishing) Dedektifi Vaka Analizi",
      "subtitle": "Sınıfa getirilen 3 gerçek e-posta örneğindeki tuzakları ve sahte ipuçlarını yakalayalım.",
      "steps": [
        {
          "title": "Gönderen Adresini İncele",
          "desc": "'destek@instagram.com' yerine 'destek-help-insta48@gmail.com' yazıyorsa sahtedir!"
        },
        {
          "title": "Aciliyet ve Korku Hissi",
          "desc": "'Hesabınız 24 saat içinde kapatılacak!' diyerek panik yaptırmaya çalışıyor mu?"
        },
        {
          "title": "Linkin Üzerine Gel (Tıklama!)",
          "desc": "Farenin imlecini linkin üzerine getirin; altta açılan gerçek yönlendirme adresini okuyun."
        }
      ],
      "criteria": [
        "Zararlı yazılım türlerini etkilerine göre doğru sınıflandırma",
        "Oltalama e-postalarındaki 3 temel ipucunu tespit edebilme",
        "Siber güvenlik farkındalığını günlük internet kullanımına aktarma"
      ]
    },
    "tips": {
      "safetyTitle": "Siber Kalkan Savunma İlkeleri",
      "safetyRules": [
        {
          "bold": "Düzenli Yedekleme Yapın",
          "text": "Fidye yazılımlarına karşı tek çare dosyalarınızı internete bağlı olmayan harici bir diske yedeklemektir."
        },
        {
          "bold": "Bilinmeyen Ekleri Açmayın",
          "text": "E-postada gelen '.exe', '.bat', '.scr' uzantılı dosyaları asla çalıştırmayın."
        },
        {
          "bold": "İki Aşamalı Doğrulama (2FA) Açın",
          "text": "Şifreniz çalınsa bile telefonunuza gelen SMS kodu olmadan hesabınıza girilemez."
        }
      ],
      "myths": [
        {
          "wrong": "Benim bilgisayarımda önemli bir şey yok, korsanlar bana saldırmaz.",
          "correct": "Korsanlar sizin bilgisayarınızı ele geçirip başkalarına saldırmak için (Zombi/Botnet) kullanır!"
        },
        {
          "wrong": "Antivirüs programım varsa bana hiçbir virüs bulaşamaz.",
          "correct": "En zayıf halka insandır; siz kendi elinizle sahte siteye şifre girerseniz antivirüs sizi koruyamaz."
        }
      ]
    },
    "quiz": {
      "question": "Kullanıcının bilgisayarındaki tüm dosyaları güçlü şifreleme algoritmalarıyla kilitleyip, dosyaları açmak için para (fidye) talep eden zararlı yazılım türü hangisidir?",
      "options": [
        {
          "text": "A) Solucan (Worm)",
          "isCorrect": false
        },
        {
          "text": "B) Fidye Yazılımı (Ransomware)",
          "isCorrect": true
        },
        {
          "text": "C) Kelime İşlemci",
          "isCorrect": false
        },
        {
          "text": "D) Tarayıcı Programı",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Ransomware (Fidye Yazılımı)', dosyaları kilitleyerek para koparmayı amaçlayan son derece tehlikeli bir siber tehdittir."
    },
    "summaryRules": [
      {
        "bold": "Siber Tehditler",
        "text": "Malware, Ransomware ve Phishing dijital dünyanın tuzaklarıdır."
      },
      {
        "bold": "Sosyal Mühendislik",
        "text": "Korsanlar sistem açığından çok insan zaaflarını hedefler."
      },
      {
        "bold": "10 Kasım Ruhu",
        "text": "Ata'mızın emaneti olan Cumhuriyetimizi siber alanda da canla başla savunacağız."
      }
    ],
    "homework": "Evinizdeki internet modemi ve bilgisayarların güvenlik ayarlarını kontrol edip ebeveyninizle 2FA doğrulamasını açın.",
    "nextWeekPreview": "1. Dönem Ara Tatil: Siber Savunma ve Etik Hackerlık Kampı - Beyaz şapkalı hacker dünyası!"
  },
  {
    "week": 10,
    "date": "16 - 22 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Siber Güvenlik, Dijital Haklar & Veri Güvenliği",
    "unitBadge": "1. Ara Tatil",
    "unitTheme": "unite-somestr",
    "title": "1. Dönem Ara Tatil: Siber Savunma & Etik Hackerlık",
    "subtitle": "Beyaz Şapkalı Hackerlık, CTF (Bayrağı Yakala) Oyunları ve Ağ Güvenliği",
    "outcomeCode": "BTY.8.2.2",
    "targetSkill": "Etik Hackerlık & Ağ Güvenliği Temelleri",
    "curiosityQuestion": "Devletler ve büyük bankalar neden hackerları işe alıp kendi sistemlerine saldırtırlar?",
    "roadmap": [
      {
        "title": "Hacker Renkleri",
        "desc": "Siyah Şapka (Kötü niyetli), Beyaz Şapka (Etik/Savunmacı), Gri Şapka (İzinsiz araştıran)."
      },
      {
        "title": "Etik Hacker (CEH) Nedir?",
        "desc": "Sistem sahibinden izin alarak açıkları bulan ve kapatan güvenlik uzmanı."
      },
      {
        "title": "CTF (Capture The Flag) Nedir?",
        "desc": "Siber güvenlikçilerin şifre kırma, ağ analizi ve ipucu bulma yarışması."
      },
      {
        "title": "Ev Ağı Güvenliği",
        "desc": "Wi-Fi şifresi güvenliği, WPA3 protokolü ve misafir ağı kurulumu."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"16\" font-weight=\"bold\">1. Dönem Ara Tatil: Siber Savunma Kampı</text>\n\n  <g transform=\"translate(70, 75)\">\n    <rect width=\"85\" height=\"90\" rx=\"10\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"45\" text-anchor=\"middle\" font-size=\"28\">🔐</text>\n    <text x=\"42\" y=\"75\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-weight=\"bold\">Kripto</text>\n  </g>\n\n  <g transform=\"translate(180, 75)\">\n    <rect width=\"85\" height=\"90\" rx=\"10\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"45\" text-anchor=\"middle\" font-size=\"28\">🌐</text>\n    <text x=\"42\" y=\"75\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"10\" font-weight=\"bold\">Ağ Analizi</text>\n  </g>\n\n  <g transform=\"translate(290, 75)\">\n    <rect width=\"85\" height=\"90\" rx=\"10\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n    <text x=\"42\" y=\"45\" text-anchor=\"middle\" font-size=\"28\">💻</text>\n    <text x=\"42\" y=\"75\" text-anchor=\"middle\" fill=\"#a855f7\" font-size=\"10\" font-weight=\"bold\">CTF Oyunları</text>\n  </g>\n\n  <rect x=\"50\" y=\"210\" width=\"350\" height=\"75\" rx=\"12\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"238\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">Beyaz Şapkalı Hacker (Ethical Hacker) İlkeleri</text>\n  <text x=\"225\" y=\"260\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Sistemleri bozmak için değil, açıkları kapatıp vatanımızı savunmak için öğreniyoruz.</text>\n</svg>",
    "section1": {
      "title": "Hacker Dünyasında Şapka Renkleri",
      "subtitle": "Güç bir araçtır; onu nasıl kullandığınız sizin kimliğinizi belirler:",
      "cards": [
        {
          "title": "Şapka Sınıflandırması",
          "icon": "🎩",
          "desc": "Siber dünyadaki 3 temel rol:",
          "items": [
            {
              "bold": "Siyah Şapkalı Hacker",
              "text": "Sistemlere izinsiz girer, verileri çalar, zarar verir ve şantaj yapar (Siber Suçlu)."
            },
            {
              "bold": "Beyaz Şapkalı Hacker (Etik Hacker)",
              "text": "İzinli olarak sisteme sızma testi yapar, açıkları raporlar ve kapatır (Siber Muhafız)."
            },
            {
              "bold": "Gri Şapkalı Hacker",
              "text": "İzinsiz girer ama zarar vermez; sistemi hackledikten sonra sahibine haber verir (Yine de yasal değildir)."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "CTF: Bayrağı Yakala Siber Yarışması",
      "subtitle": "Güvenlik uzmanlarının zekâ ve kriptoloji maratonu:",
      "cards": [
        {
          "badge": "Görev",
          "title": "Gizli Bayrağı (Flag) Bul",
          "desc": "Web sitesinin kaynak kodunda, şifrelenmiş bir metinde veya bir resmin içine gizlenmiş 'FLAG{siber_kahraman_2026}' metnini bulmak.",
          "items": [
            {
              "bold": "Kategoriler",
              "text": "Kriptografi, Web Güvenliği, Tersine Mühendislik, Adli Bilişim."
            }
          ]
        },
        {
          "badge": "Ödül",
          "title": "Savunma Becerisi",
          "desc": "Siber güvenlik açıklarının nasıl oluştuğunu öğrenen mühendisler kırılmaz sistemler inşa eder.",
          "items": [
            {
              "bold": "Kariyer",
              "text": "Dünyada en çok aranan ve en yüksek maaşlı bilişim mesleklerindendir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Tatil Özel: Mini Kripto CTF Görevi",
      "subtitle": "Tahtadaki şifrelenmiş metni Sezar Şifreleme ve Base64 çözücüyle çözüp bayrağı yakalayalım.",
      "steps": [
        {
          "title": "İpucu 1 (Sezar Şifresi)",
          "desc": "Her harf alfabede 3 adım ileri kaydırılmış: 'PHUKDED' -> Geriye doğru 3 kaydırın: 'MERHABA'."
        },
        {
          "title": "İpucu 2 (Kaynak Kod Gizemi)",
          "desc": "Web sayfasında 'Sağ Tık > Sayfa Kaynağını Görüntüle' diyerek HTML yorum satırındaki bayrağı bulun."
        },
        {
          "title": "Bayrağı Teslim Et",
          "desc": "Bulunan gizli anahtarı öğretmeninizin sistemine girerek CTF puanınızı alın."
        }
      ],
      "criteria": [
        "Temel şifreleme ve şifre çözme mantığını kavrama",
        "Web sayfalarında kaynak kod inceleme becerisi",
        "Etik hackerlık kurallarına ve yasal sınırlara bağlı kalma"
      ]
    },
    "tips": {
      "safetyTitle": "Yasal ve Etik Sorumluluk Kuralları",
      "safetyRules": [
        {
          "bold": "İzinsiz Test Yapmak Suçtur",
          "text": "İzniniz olmayan bir siteye açık arama amacıyla bile saldırmak TCK 243. maddeye göre suçtur."
        },
        {
          "bold": "Kendi Laboratuvarınızı Kurun",
          "text": "Testlerinizi kendi bilgisayarınızdaki sanal makinelerde (VirtualBox vb.) güvenle yapın."
        },
        {
          "bold": "Bilgi Sorumluluktur",
          "text": "Öğrendiğiniz güvenlik tekniklerini sadece savunma ve vatana hizmet için kullanın."
        }
      ],
      "myths": [
        {
          "wrong": "Hacker olmak için karanlık sitelerden virüs programı indirmek yeterlidir.",
          "correct": "Gerçek hackerlık ağ protokollerini, işletim sistemlerini ve programlamayı derinlemesine bilmektir."
        },
        {
          "wrong": "Evdeki Wi-Fi şifresi kırılamaz.",
          "correct": "Eski 'WEP' veya kolay 'WPA' şifreleri dakikalar içinde kırılabilir; WPA2/WPA3 ve güçlü parola şarttır."
        }
      ]
    },
    "quiz": {
      "question": "Sistem yöneticisinden yasal izin alarak bir bilgisayar sistemindeki güvenlik açıklarını bulup raporlayan ve kapatılmasını sağlayan siber güvenlik uzmanına ne ad verilir?",
      "options": [
        {
          "text": "A) Siyah Şapkalı Hacker",
          "isCorrect": false
        },
        {
          "text": "B) Beyaz Şapkalı (Etik) Hacker",
          "isCorrect": true
        },
        {
          "text": "C) Yazılım Korsanı",
          "isCorrect": false
        },
        {
          "text": "D) Botnet Yöneticisi",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Beyaz Şapkalı (Etik) Hacker', bilgi ve yeteneklerini yasal çerçevede sistemleri korumak için kullanan siber güvenlik kahramanıdır."
    },
    "summaryRules": [
      {
        "bold": "Etik Hackerlık",
        "text": "Siber saldırganların önüne geçmek için sistemleri savunma uzmanlığıdır."
      },
      {
        "bold": "CTF Yarışmaları",
        "text": "Zekâ, kriptoloji ve ağ güvenliğini harmanlayan siber sporlardır."
      },
      {
        "bold": "Siber Vatan",
        "text": "Ülkemizin verilerini ve altyapılarını korumak milli bir görevdir."
      }
    ],
    "homework": "Ev Wi-Fi ağınızın şifreleme türünü (WPA2/WPA3) kontrol edip güvenli olduğundan emin olun.",
    "nextWeekPreview": "Kriptoloji ve Şifreleme Temelleri: Sezar Şifresinden RSA Asimetrik Şifrelemeye & 24 Kasım!"
  }
];
