/**
 * MEB 4. Sınıf Bilişim Teknolojileri ve Yazılım - 2. Dönem 2. Kısım (Hafta 32 - 41)
 * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART2 = [
  {
    "week": 32,
    "date": "19 - 25 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "23 Nisan Özel",
    "unitTheme": "unite-5",
    "title": "23 Nisan Çocuk Bayramı: İnteraktif Tebrik Kartı",
    "subtitle": "Kukla Tıklama Olayları, Ses Çalma, Balon Uçurma ve Milli Coşku",
    "outcomeCode": "BTY.4.5.5",
    "targetSkill": "Etkileşimli Tebrik Kartı Tasarlama",
    "curiosityQuestion": "Tebrik kartına fareyle tıkladığımızda arkadan İstiklâl Marşı çalması ve gökyüzüne balonlar uçması nasıl kodlanır?",
    "roadmap": [
      {
        "title": "23 Nisan Anlamı",
        "desc": "TBMM'nin açılışı ve Atatürk'ün dünyada çocuklara bayram hediye eden tek lider olması."
      },
      {
        "title": "Bu Kuklaya Tıklanınca",
        "desc": "Sarı olay bloğuyla nesnelere tıklanma özelliği kazandırma."
      },
      {
        "title": "Ses ve Müzik Blokları",
        "desc": "23 Nisan şarkısını sahneye ekleyip müzikle kutlama yapma."
      },
      {
        "title": "Balon Uçurma Hareketi",
        "desc": "Balon kuklalarının Y konumunu sürekli artırarak göğe yükselmesini sağlama."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#e11d48\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"16\" font-weight=\"bold\">23 Nisan Ulusal Egemenlik ve Çocuk Bayramı</text>\n\n  <!-- Balonlar ve Çocuklar -->\n  <g transform=\"translate(80, 75)\">\n    <circle cx=\"40\" cy=\"40\" r=\"30\" fill=\"#ef4444\"/><path d=\"M40,70 L38,100\" stroke=\"#fca5a5\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"45\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"bold\">23</text>\n  </g>\n  <g transform=\"translate(180, 65)\">\n    <circle cx=\"40\" cy=\"40\" r=\"32\" fill=\"#3b82f6\"/><path d=\"M40,72 L42,110\" stroke=\"#93c5fd\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"45\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"13\" font-weight=\"bold\">NİSAN</text>\n  </g>\n  <g transform=\"translate(280, 75)\">\n    <circle cx=\"40\" cy=\"40\" r=\"30\" fill=\"#10b981\"/><path d=\"M40,70 L35,100\" stroke=\"#a7f3d0\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"48\" text-anchor=\"middle\" font-size=\"20\">🎈</text>\n  </g>\n\n  <rect x=\"50\" y=\"200\" width=\"350\" height=\"90\" rx=\"12\" fill=\"#be123c\"/>\n  <text x=\"225\" y=\"230\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"15\" font-weight=\"bold\">Kutlu Olsun Dünyanın Tek Çocuk Bayramı!</text>\n  <text x=\"225\" y=\"255\" text-anchor=\"middle\" fill=\"#fecdd3\" font-size=\"12\">Atatürk'ün dünya çocuklarına armağanı.</text>\n  <text x=\"225\" y=\"275\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\">Scratch ile tıklanınca şarkı söyleyen bayram kartı kodluyoruz.</text>\n</svg>",
    "section1": {
      "title": "İnteraktif Kart Nasıl Çalışır?",
      "subtitle": "Kullanıcının her dokunuşuna tepki veren canlı tebrik kartı:",
      "cards": [
        {
          "title": "Etkileşim Blokları",
          "icon": "🎈",
          "desc": "Tebrik kartımızdaki her nesneye özel bir görev veriyoruz:",
          "items": [
            {
              "bold": "Kırmızı Balona Tıklanınca",
              "text": "Balon gökyüzüne doğru süzülsün ve 'Pop' sesiyle patlasın."
            },
            {
              "bold": "Atatürk Portresine Tıklanınca",
              "text": "'Egemenlik kayıtsız şartsız milletindir!' sözü yankılansın."
            },
            {
              "bold": "Çocuk Kuklalarına Tıklanınca",
              "text": "Kuklalar el ele tutuşup neşeyle dans etsin ve bayramı kutlasın."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Balonların Göğe Yükselme Kodu",
      "subtitle": "Yerçekiminin tersine çalışan havalı balon algoritması:",
      "cards": [
        {
          "badge": "Yükselme",
          "title": "Y Konumunu Değiştir",
          "desc": "Sürekli Tekrarla içine 'Y'yi 5 değiştir' koyun; balon yukarı doğru uçar.",
          "items": [
            {
              "bold": "Tepeden Dönüş",
              "text": "Eğer Y konumu > 180 ise, Y'yi tekrar -180 yapıp aşağıdan yeniden başlatın."
            }
          ]
        },
        {
          "badge": "Renk Değişimi",
          "title": "Rengârenk Sahne",
          "desc": "'Renk etkisini 25 değiştir' bloğuyla balonların gökkuşağı gibi parlamasını sağlayın.",
          "items": [
            {
              "bold": "Görsel Şölen",
              "text": "Bayram coşkusu tüm ekrana yayılsın!"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "23 Nisan İnteraktif Bayram Kartı Atölyesi",
      "subtitle": "Kendi bayram kartınızı tasarlayıp arkadaşınıza e-posta veya bağlantıyla gönderin.",
      "steps": [
        {
          "title": "Dekoru Süsle",
          "desc": "Türk bayraklarıyla süslenmiş bir okul bahçesi dekoru çizin veya seçin."
        },
        {
          "title": "3 Balon Ekle",
          "desc": "Farklı renklerde 3 balon kuklası koyup her birine yukarı uçma kodu yazın."
        },
        {
          "title": "Şarkıyı Başlat",
          "desc": "Yeşil bayrağa basıldığında '23 Nisan Kutlu Olsun' melodisini çalın."
        }
      ],
      "criteria": [
        "Olaylar ve Hareket bloklarını uyumlu birleştirme",
        "Ses ve renk efektlerini estetik kullanabilme",
        "Milli bayram ruhunu yansıtan özgün bir tasarım üretme"
      ]
    },
    "tips": {
      "safetyTitle": "Tebrik Kartı İpuçları",
      "safetyRules": [
        {
          "bold": "Sesleri Çok Yüksek Yapmayın",
          "text": "Ses seviyesini %70 civarında tutarak kulakları rahatsız etmeyecek şekilde ayarlayın."
        },
        {
          "bold": "Mesajları Okunaklı Yazın",
          "text": "Kuklaların konuşma balonlarındaki yazıları 3 saniye ekranda tutun ki herkes okuyabilsin."
        },
        {
          "bold": "Ailenize Hediye Edin",
          "text": "Hazırladığınız dijital kartı 23 Nisan sabahı anne ve babanıza gösterin."
        }
      ],
      "myths": [
        {
          "wrong": "Tebrik kartları sadece matbaada basılan kâğıtlarla yapılır.",
          "correct": "Dijital interaktif kartlar ses, hareket ve animasyon içerdiği için çok daha eğlencelidir!"
        },
        {
          "wrong": "Scratch'e kendi sesimizi kaydedemeyiz.",
          "correct": "Mikrofon butonuna basarak kendi sesinizle '23 Nisan Kutlu Olsun' kaydı yapabilirsiniz."
        }
      ]
    },
    "quiz": {
      "question": "Scratch'te bir kuklanın üzerine bilgisayar faresiyle tıklandığında kodların çalışmasını başlatan sarı olay bloğu hangisidir?",
      "options": [
        {
          "text": "A) Yeşil bayrağa tıklanınca",
          "isCorrect": false
        },
        {
          "text": "B) Bu kuklaya tıklanınca",
          "isCorrect": true
        },
        {
          "text": "C) Boşluk tuşuna basılınca",
          "isCorrect": false
        },
        {
          "text": "D) Sahne kararınca",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Bu kuklaya tıklanınca' bloğu, sadece o kuklaya fareyle tıklandığı an altındaki komutları çalıştırır."
    },
    "summaryRules": [
      {
        "bold": "23 Nisan",
        "text": "Gazi Mustafa Kemal Atatürk'ün çocuklara en büyük emanetidir."
      },
      {
        "bold": "İnteraktif Kart",
        "text": "Tıklamalarla canlanan ve ses çıkaran dijital kutlamadır."
      },
      {
        "bold": "Ses Kaydı",
        "text": "Kendi sesimizi projeye ekleyerek çalışmalarımızı kişiselleştirebiliriz."
      }
    ],
    "homework": "Scratch'te kendi sesinizle bir 23 Nisan kutlama mesajı kaydedip kartınıza ekleyin.",
    "nextWeekPreview": "Akvaryum Oyunu: Balıkların Yüzmesi ve Ses Efektleri - Deniz altı simülasyonu yapacağız!"
  },
  {
    "week": 33,
    "date": "26 Nisan - 02 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "Akvaryum Simülasyonu",
    "unitTheme": "unite-5",
    "title": "Akvaryum Oyunu: Balıkların Yüzmesi & Efektler",
    "subtitle": "Rastgele Konum (Random), Kenardan Sekme, Baloncuk Klonlama ve Su Altı Sesleri",
    "outcomeCode": "BTY.4.5.6",
    "targetSkill": "Rastgele Hareket & Çoklu Karakter Yönetimi",
    "curiosityQuestion": "Akvaryumdaki balıklar hiçbir zaman duvara çarpıp kalmaz, hep geri döner. Bunu Scratch'te hangi tek bir blok sağlar?",
    "roadmap": [
      {
        "title": "Su Altı Dünyası",
        "desc": "Mavi okyanus dekoru, yosunlar, renkli balıklar ve deniz yıldızları."
      },
      {
        "title": "Kenara Geldiyse Sektir",
        "desc": "Sahnenin sınırına ulaşan balığın ters dönmeden zarifçe geri dönmesi."
      },
      {
        "title": "Rastgele Yüzme",
        "desc": "'-10 ile 10 arasında rastgele bir sayı seç' bloğu ile balıkların doğal süzülmesi."
      },
      {
        "title": "Köpekbalığından Kaçış",
        "desc": "Büyük köpekbalığı yaklaştığında küçük balıkların hızlanması kuralı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"16\" font-weight=\"bold\">Scratch Akvaryum Simülasyonu</text>\n\n  <!-- Akvaryum ve Balıklar -->\n  <rect x=\"50\" y=\"70\" width=\"350\" height=\"150\" rx=\"14\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <g transform=\"translate(90, 110)\">\n    <ellipse cx=\"30\" cy=\"20\" rx=\"25\" ry=\"15\" fill=\"#f59e0b\"/>\n    <polygon points=\"5,20 -10,8 -10,32\" fill=\"#f59e0b\"/>\n    <circle cx=\"45\" cy=\"16\" r=\"3\" fill=\"#000000\"/>\n  </g>\n  <g transform=\"translate(260, 140)\">\n    <ellipse cx=\"30\" cy=\"20\" rx=\"20\" ry=\"12\" fill=\"#ef4444\"/>\n    <polygon points=\"5,20 -8,10 -8,30\" fill=\"#ef4444\"/>\n    <circle cx=\"42\" cy=\"17\" r=\"2.5\" fill=\"#000000\"/>\n  </g>\n  <text x=\"180\" y=\"195\" font-size=\"22\">🫧</text>\n  <text x=\"320\" y=\"115\" font-size=\"22\">🌿</text>\n\n  <rect x=\"50\" y=\"235\" width=\"350\" height=\"60\" rx=\"10\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"260\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">Kenardan Sekme & Rastgele Yüzme</text>\n  <text x=\"225\" y=\"280\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Balıklar duvara çarpınca yön değiştirir ve baloncuk çıkarır.</text>\n</svg>",
    "section1": {
      "title": "Doğal Balık Yüzme Hareketi",
      "subtitle": "Robot gibi düz gitmek yerine gerçek bir balık gibi salınmak:",
      "cards": [
        {
          "title": "Yüzme Algoritması",
          "icon": "🐠",
          "desc": "Balık kuklasının içine şu blokları yerleştiririz:",
          "items": [
            {
              "bold": "1. Adım",
              "text": "Sürekli Tekrarla bloğu açın."
            },
            {
              "bold": "2. Adım",
              "text": "5 adım git."
            },
            {
              "bold": "3. Adım",
              "text": "Sonraki kostüm (kuyruk sallasın)."
            },
            {
              "bold": "4. Adım",
              "text": "Kenara geldiyse sektir!"
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Çoklu Karakterleri Yönetmek",
      "subtitle": "Akvaryumda 5 farklı balığın birbirine çarpmadan yüzmesi:",
      "cards": [
        {
          "badge": "Klon / Kopyala",
          "title": "Balıkları Çoğaltma",
          "desc": "Kuklaya sağ tıklayıp 'Kopyasını Çıkart' diyerek 4 farklı renkte balık oluşturun.",
          "items": [
            {
              "bold": "Farklı Hızlar",
              "text": "Biri 4 adım, diğeri 7 adım giderse akvaryum çok daha canlı görünür."
            }
          ]
        },
        {
          "badge": "Yön Ayarı",
          "title": "Baş Aşağı Dönmeme Kuralı",
          "desc": "'Dönüş iznini sağa-sola ayarla' bloğu balığın sırtüstü yüzmesini engeller.",
          "items": [
            {
              "bold": "Estetik",
              "text": "Balıklar her zaman doğru yöne bakar."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Canlı Akvaryum Projesi",
      "subtitle": "Su altı dekorunda en az 3 balık ve 1 yengecin yüzdüğü simülasyonu kodlayalım.",
      "steps": [
        {
          "title": "Dekoru Seç",
          "desc": "'Underwater' su altı dekorunu yükleyin."
        },
        {
          "title": "Balıkları Yerleştir",
          "desc": "Fish1, Fish2 ve Crab kuklalarını sahneye ekleyin."
        },
        {
          "title": "Baloncuk Sesi Ekle",
          "desc": "'Bubbles' baloncuk sesini arka planda sürekli çalacak şekilde ayarlayın."
        }
      ],
      "criteria": [
        "Kenardan sektirme bloğunu hatasız kullanma",
        "Farklı hızlarda hareket eden karakterler tasarlama",
        "Arka plan sesiyle projeyi zenginleştirme"
      ]
    },
    "tips": {
      "safetyTitle": "Simülasyon Tasarım İpuçları",
      "safetyRules": [
        {
          "bold": "Hızları Dengeli Tutun",
          "text": "Balıkların adımını 30 yaparsanız ekranda şimşek gibi uçarlar; 3-6 arası çok doğaldır."
        },
        {
          "bold": "Kostümleri İnceleyin",
          "text": "Fish kuklasının kostümlerinde 4 farklı balık türü vardır; tek kuklayla 4 farklı balık yapabilirsiniz!"
        },
        {
          "bold": "Yosunları Sabit Bırakın",
          "text": "Yosun ve deniz yıldızı kuklalarını sahnenin dibine koyup kod yazmadan dekoratif bırakın."
        }
      ],
      "myths": [
        {
          "wrong": "Her balık için yüzlerce satır kod yazmak gerekir.",
          "correct": "Bir balığın kodunu yazıp diğer balıklara fareyle sürükleyerek anında kopyalayabilirsiniz!"
        },
        {
          "wrong": "Balıklar duvara çarpınca durmalıdır.",
          "correct": "Kenardan sektir bloğu balığı otomatik 180 derece çevirir."
        }
      ]
    },
    "quiz": {
      "question": "Scratch'te hareket eden bir balığın sahnenin kenarına ulaştığında dışarı kaçmayıp geri dönmesini sağlayan blok hangisidir?",
      "options": [
        {
          "text": "A) Görünümü Gizle",
          "isCorrect": false
        },
        {
          "text": "B) Kenara geldiyse sektir",
          "isCorrect": true
        },
        {
          "text": "C) Sahneyi sil",
          "isCorrect": false
        },
        {
          "text": "D) 10 saniye bekle",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Kenara geldiyse sektir' bloğu sahne duvarlarına çarpan kuklaları otomatik olarak geri döndürür."
    },
    "summaryRules": [
      {
        "bold": "Simülasyon",
        "text": "Gerçek hayatı bilgisayarda canlandırma sanatıdır."
      },
      {
        "bold": "Kenardan Sektirme",
        "text": "Karakterlerin sahne içinde kalmasını sağlar."
      },
      {
        "bold": "Farklı Hızlar",
        "text": "Karakterlere farklı hızlar vermek oyuna doğallık kazandırır."
      }
    ],
    "homework": "Akvaryumunuza bir 'Denizanası' kuklası ekleyip yukarı aşağı süzülmesini kodlayın.",
    "nextWeekPreview": "Meyve Yakalama Oyunu: Değişkenler, Skor Sayacı ve Zamanlayıcı - Puan toplayacağız!"
  },
  {
    "week": 34,
    "date": "03 - 09 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "Değişkenler & Skor",
    "unitTheme": "unite-5",
    "title": "Meyve Yakalama Oyunu: Değişkenler & Skor",
    "subtitle": "Değişken (Variable) Nedir? Skor Sayacı, Zamanlayıcı ve Süre Bitimi",
    "outcomeCode": "BTY.4.5.7",
    "targetSkill": "Değişken Kavramını Kullanarak Skorlu Oyun Geliştirme",
    "curiosityQuestion": "Oynadığımız bütün oyunlarda puanımız ve kalan canımız ekranda yazar. Bilgisayar bu sayıları aklında nasıl tutar?",
    "roadmap": [
      {
        "title": "Değişken (Variable) Nedir?",
        "desc": "Bilgisayarın hafızasında bilgi sakladığı, içi değişebilen etiketli kutu/kumbara."
      },
      {
        "title": "Skor Değişkeni",
        "desc": "Her elma yakalandığında 'skor' kutusuna +1 puan ekleme."
      },
      {
        "title": "Gökten Düşen Meyveler",
        "desc": "Elmanın tepeden rastgele X konumundan aşağı doğru süzülmesi."
      },
      {
        "title": "Süre Sayacı (Geri Sayım)",
        "desc": "30 saniyeden geriye sayıp süre 0 olunca oyunu bitirme kuralı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\">Meyve Yakalama: Değişkenler & Skor</text>\n\n  <!-- Sepet ve Düşen Elma -->\n  <g transform=\"translate(200, 75)\">\n    <circle cx=\"25\" cy=\"25\" r=\"22\" fill=\"#ef4444\"/>\n    <path d=\"M25,5 Q30,-5 35,-2\" stroke=\"#15803d\" stroke-width=\"3\" fill=\"none\"/>\n    <text x=\"25\" y=\"65\" text-anchor=\"middle\" fill=\"#fca5a5\" font-size=\"10\">Düşen Elma 🍎</text>\n  </g>\n\n  <g transform=\"translate(170, 160)\">\n    <path d=\"M0,0 L110,0 L95,45 L15,45 Z\" fill=\"#b45309\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"55\" y=\"28\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"12\" font-weight=\"bold\">Sepet 🧺</text>\n  </g>\n\n  <!-- Skor Panosu -->\n  <rect x=\"50\" y=\"75\" width=\"100\" height=\"45\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n  <text x=\"100\" y=\"95\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">SKOR: 10</text>\n  <text x=\"100\" y=\"112\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"9\">Değişken (Variable)</text>\n\n  <rect x=\"50\" y=\"230\" width=\"350\" height=\"65\" rx=\"10\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"255\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">Değişken: İçinde Puan Sakladığımız Kumbara!</text>\n  <text x=\"225\" y=\"275\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Sepete elma değdikçe skor değişkeni +1 artar.</text>\n</svg>",
    "section1": {
      "title": "Değişken: Dijital Kumbara",
      "subtitle": "Oyunlarda puan, can ve süre değişkenlerle yönetilir:",
      "cards": [
        {
          "title": "Değişken Nasıl Çalışır?",
          "icon": "📦",
          "desc": "Değişkenler menüsünden 'Bir Değişken Oluştur' deyip adını 'Skor' koyarız:",
          "items": [
            {
              "bold": "Oyun Başında",
              "text": "'Skor değişkenini 0 yap' (Kumbara sıfırlanır)."
            },
            {
              "bold": "Elma Yakalanınca",
              "text": "'Skor değişkenini 1 kadar değiştir' (Kumbaraya 1 puan atılır)."
            },
            {
              "bold": "Ekranda Göster",
              "text": "Sol üst köşede güncel puanımız anlık olarak parlar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Düşen Elma Algoritması",
      "subtitle": "Yerçekimiyle gökten yağan lezzetli meyveler:",
      "cards": [
        {
          "badge": "Başlangıç",
          "title": "Tepeye Git",
          "desc": "Y konumunu 180 yap (en tepe), X konumunu ise '-200 ile 200 arasında rastgele' seç.",
          "items": [
            {
              "bold": "Rastgelelik",
              "text": "Elmanın nereden düşeceği hiç belli olmaz!"
            }
          ]
        },
        {
          "badge": "Düşüş & Çarpışma",
          "title": "Aşağı İniş",
          "desc": "Y'yi -7 değiştir. EĞER sepete dokunuyor mu? -> Puanı 1 artır ve tekrar tepeye ışınlan!",
          "items": [
            {
              "bold": "Yere Düşerse",
              "text": "Eğer Y < -160 ise puan vermeden tepeye dön."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Tam Meyve Yakalama Oyunu",
      "subtitle": "Klavye oklarıyla sağa-sola giden sepetle 30 saniyede en çok elmayı toplayalım.",
      "steps": [
        {
          "title": "Sepet Kodu",
          "desc": "Sağ ok -> x'i 10 artır, Sol ok -> x'i 10 azalt."
        },
        {
          "title": "Elma Kodu",
          "desc": "Sürekli aşağı düşsün, sepete değerse ses çalıp skoru artırsın."
        },
        {
          "title": "Geri Sayım Kodu",
          "desc": "Süre 30 olsun; her 1 saniyede -1 azalsın. Süre 0 olunca 'Oyun Bitti' desin."
        }
      ],
      "criteria": [
        "Değişken oluşturup skor sayacını doğru bağlama",
        "Rastgele konum belirleme bloğunu elmaya uygulama",
        "Süre bittiğinde tüm kodları durdurabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Oyun Dengesi (Game Balance) Tüyoları",
      "safetyRules": [
        {
          "bold": "Oyun Başında Sıfırlayın",
          "text": "Yeşil bayrağa basıldığında 'Skoru 0 yap' demezseniz önceki oyunun puanı silinmez!"
        },
        {
          "bold": "Elmayı Çok Hızlı Yapmayın",
          "text": "Elmanın düşüş hızını -20 yaparsanız kimse yakalayamaz; -5 veya -8 idealdir."
        },
        {
          "bold": "Çürük Elma Cezası",
          "text": "Oyuna yeşil zehirli elma ekleyip sepete değince skoru -2 puan düşürebilirsiniz!"
        }
      ],
      "myths": [
        {
          "wrong": "Değişkenler sadece sayı tutabilir.",
          "correct": "Değişkenler oyuncunun adını (Ahmet, Ayşe) veya seviye adını da metin olarak saklayabilir."
        },
        {
          "wrong": "Bir oyunda sadece 1 tane değişken olabilir.",
          "correct": "Aynı oyunda 'Skor', 'Can', 'Süre' ve 'Seviye' gibi onlarca değişken bulunabilir."
        }
      ]
    },
    "quiz": {
      "question": "Scratch'te yakalanan her meyve için oyuncunun puanını 1 artırmak istediğimizde hangi blok kullanılmalıdır?",
      "options": [
        {
          "text": "A) Skoru 0 yap",
          "isCorrect": false
        },
        {
          "text": "B) Skoru 1 kadar değiştir (artır)",
          "isCorrect": true
        },
        {
          "text": "C) Skoru gizle",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarı yeniden başlat",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Skoru 1 kadar değiştir' bloğu mevcut puana her seferinde +1 ekleyerek skoru yükseltir."
    },
    "summaryRules": [
      {
        "bold": "Değişken",
        "text": "Bilgisayarın hafızasındaki bilgi saklama kutusudur."
      },
      {
        "bold": "Skor ve Süre",
        "text": "Oyunların heyecanını artıran en temel değişkenlerdir."
      },
      {
        "bold": "Sıfırlama Kuralı",
        "text": "Her yeni oyun başında skor mutlaka 0'a eşitlenmelidir."
      }
    ],
    "homework": "Meyve yakalama oyununuza bir 'Muz' ekleyip yakalanınca +3 puan vermesini sağlayın.",
    "nextWeekPreview": "Engelliler Haftası Özel: Sesle Renk Değiştiren Engelsiz Proje - Bilişimle engelleri kaldıracağız!"
  },
  {
    "week": 35,
    "date": "10 - 16 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "Engelsiz Bilişim",
    "unitTheme": "unite-5",
    "title": "Engelliler Haftası Özel: Engelsiz Bilişim",
    "subtitle": "Erişilebilirlik, Ses Algılama Sensörü (Loudness) ve Sesle Yönetilen Projeler",
    "outcomeCode": "BTY.4.5.8",
    "targetSkill": "Engelsiz Teknoloji & Sosyal Duyarlılık Becerisi",
    "curiosityQuestion": "Ellerini kullanamayan bedensel engelli bir arkadaşımız bilgisayarda nasıl oyun oynayabilir?",
    "roadmap": [
      {
        "title": "Engelliler Haftası",
        "desc": "Farklılıklara saygı, empati ve engelleri teknolojiyle aşma bilinci."
      },
      {
        "title": "Erişilebilirlik Nedir?",
        "desc": "Cihaz ve programların herkes (görme, işitme, bedensel engelliler) tarafından kullanılabilmesi."
      },
      {
        "title": "Mikrofon / Ses Şiddeti Bloğu",
        "desc": "Scratch'te 'Ses şiddeti > 30 ise' bloğuyla alkış veya sesle komut verme."
      },
      {
        "title": "Engelsiz Proje Tasarımı",
        "desc": "El çırpınca ışıkları yakan veya karakteri zıplatan akıllı asistan."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"16\" font-weight=\"bold\">Engelliler Haftası: Engelsiz Bilişim</text>\n\n  <g transform=\"translate(70, 75)\">\n    <circle cx=\"45\" cy=\"45\" r=\"40\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"52\" text-anchor=\"middle\" font-size=\"34\">🎤</text>\n    <text x=\"45\" y=\"105\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">Ses Algılama</text>\n  </g>\n\n  <g transform=\"translate(180, 75)\">\n    <circle cx=\"45\" cy=\"45\" r=\"40\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"52\" text-anchor=\"middle\" font-size=\"34\">🔊</text>\n    <text x=\"45\" y=\"105\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">Sesli Kitap</text>\n  </g>\n\n  <g transform=\"translate(290, 75)\">\n    <circle cx=\"45\" cy=\"45\" r=\"40\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"52\" text-anchor=\"middle\" font-size=\"34\">🦽</text>\n    <text x=\"45\" y=\"105\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\" font-weight=\"bold\">Akıllı Tekerlek</text>\n  </g>\n\n  <rect x=\"50\" y=\"215\" width=\"350\" height=\"75\" rx=\"12\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"245\" text-anchor=\"middle\" fill=\"#c084fc\" font-size=\"13\" font-weight=\"bold\">Teknoloji Bütün Engelleri Kaldırır!</text>\n  <text x=\"225\" y=\"268\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Ellerini kullanamayan arkadaşlarımız için sesle yönetilen projeler tasarlıyoruz.</text>\n</svg>",
    "section1": {
      "title": "Bilişimle Engelleri Kaldırıyoruz!",
      "subtitle": "Teknoloji, engelli bireylerin dünyaya açılan en güçlü kanatlarıdır:",
      "cards": [
        {
          "title": "Engelsiz Bilişim Çözümleri",
          "icon": "♿",
          "desc": "Yazılımcılar herkesin hayatını kolaylaştıran özel araçlar tasarlar:",
          "items": [
            {
              "bold": "Ekran Okuyucular",
              "text": "Görme engelliler için ekrandaki yazıları sesli olarak okur."
            },
            {
              "bold": "Göz Takip Cihazları",
              "text": "Sadece göz kırparak fareyi hareket ettirme ve yazı yazma."
            },
            {
              "bold": "Sesle Kontrol",
              "text": "Klavyeye dokunmadan ses komutlarıyla kapıları ve lambaları açma."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Scratch'te Ses Algılama Bloğu",
      "subtitle": "Mikrofondan gelen sesi kodlarımızın tetikleyicisi yapmak:",
      "cards": [
        {
          "badge": "Sensör",
          "title": "Ses Şiddeti (Loudness)",
          "desc": "Algılama menüsündeki 'Ses Şiddeti' mikrofona gelen sesin yüksekliğini (0 ile 100 arası) ölçer.",
          "items": [
            {
              "bold": "Kullanım",
              "text": "EĞER Ses Şiddeti > 40 ise -> Karakteri Zıplat!"
            }
          ]
        },
        {
          "badge": "Uygulama",
          "title": "Alkışla Çalışan Lamba",
          "desc": "Öğrenci alkış yaptığında sahnedeki lamba yansın, ikinci alkışta kapansın.",
          "items": [
            {
              "bold": "Empati",
              "text": "Elleri meşgul olan veya engeli olan kişilere büyük kolaylık."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sesle Zıplayan Sevimli Tavşan",
      "subtitle": "Klavye veya fareye hiç dokunmadan, sadece 'Zıpla!' dediğimizde zıplayan oyun kodlayalım.",
      "steps": [
        {
          "title": "Mikrofonu İzin Ver",
          "desc": "Scratch ekranında 'Mikrofon kullanılsın mı?' sorusuna İzin Ver deyin."
        },
        {
          "title": "Şart Bloğunu Kur",
          "desc": "'Sürekli Tekrarla' içine 'Eğer Ses Şiddeti > 30 ise' bloğunu koyun."
        },
        {
          "title": "Zıplama Eylemi",
          "desc": "İçine 'Y'yi 40 artır, 0.2 sn bekle, Y'yi -40 azalt' ekleyin. Şimdi alkış yapın!"
        }
      ],
      "criteria": [
        "Mikrofon algılama sensörünü projeye başarıyla bağlama",
        "Ses eşiğini (30-40) ortam gürültüsüne göre kalibre etme",
        "Erişilebilirlik ve engelsiz yaşam konusunda duyarlılık gösterme"
      ]
    },
    "tips": {
      "safetyTitle": "Erişilebilirlik Tasarım Standartları",
      "safetyRules": [
        {
          "bold": "Büyük Yazı Tipi",
          "text": "Az gören bireyler için ekrandaki yazıları her zaman büyük ve net yapın."
        },
        {
          "bold": "Kontrast Renkler",
          "text": "Renk körü bireyler için kırmızı ile yeşili yan yana koymak yerine şekil simgeleri de ekleyin."
        },
        {
          "bold": "Sesli ve Görsel Çift Uyarı",
          "text": "Oyun bittiğinde hem ses çıksın hem de ekranda yazı çıksın (işitme engelliler için)."
        }
      ],
      "myths": [
        {
          "wrong": "Engelliler bilişim teknolojilerini kullanamaz.",
          "correct": "Dünyada çok başarılı görme engelli ve bedensel engelli yazılım mühendisleri vardır!"
        },
        {
          "wrong": "Erişilebilirlik sadece hastaneler içindir.",
          "correct": "Hazırladığımız her web sitesi ve oyun herkes için erişilebilir olmalıdır."
        }
      ]
    },
    "quiz": {
      "question": "Scratch'te ellerini kullanamayan bir kişinin bilgisayara ses çıkararak veya alkış yaparak komut vermesini sağlayan algılama bloğu hangisidir?",
      "options": [
        {
          "text": "A) Fareye tıklandı mı?",
          "isCorrect": false
        },
        {
          "text": "B) Ses şiddeti (Loudness)",
          "isCorrect": true
        },
        {
          "text": "C) Renge dokunuyor mu?",
          "isCorrect": false
        },
        {
          "text": "D) Klavyeden boşluk tuşu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Ses Şiddeti (Loudness)' bloğu mikrofondan gelen ses seviyesini ölçerek sesle kontrol imkânı tanır."
    },
    "summaryRules": [
      {
        "bold": "Empati ve Sevgi",
        "text": "Engeller bedende değil, empati kuramayan zihinlerdedir."
      },
      {
        "bold": "Engelsiz Bilişim",
        "text": "Sesle kontrol ve ekran okuyucularla herkes eşit teknolojiye ulaşır."
      },
      {
        "bold": "Geleceğin Mühendisleri",
        "text": "Bizler engelli kardeşlerimizin hayatını kolaylaştıracak projeler üreteceğiz."
      }
    ],
    "homework": "Ailenize gözleri bağlıyken sadece sesli komutlarla su bardağını buldurma empati oyununu oynatın.",
    "nextWeekPreview": "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı: Spor Oyunu - Penaltı ve koşu oyunu kodlayacağız!"
  },
  {
    "week": 36,
    "date": "17 - 23 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yapay Zekâ, Doğa ve Geleceğin Bilişimi",
    "unitBadge": "19 Mayıs Özel",
    "unitTheme": "unite-6",
    "title": "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı: Spor Oyunu",
    "subtitle": "19 Mayıs'ın Önemi, Hız Değişkeni, Top Sektirme ve Penaltı Oyunu",
    "outcomeCode": "BTY.4.6.1",
    "targetSkill": "Fiziksel Dinamikler & Spor Oyunu Geliştirme",
    "curiosityQuestion": "Bir futbol topunun kaleye doğru giderken kalecinin topu tutması veya gol olması Scratch'te nasıl kodlanır?",
    "roadmap": [
      {
        "title": "19 Mayıs Ruhu",
        "desc": "Mustafa Kemal Atatürk'ün Samsun'a ayak basarak Kurtuluş Savaşı'nı başlattığı kutlu gün."
      },
      {
        "title": "Gençlik ve Spor",
        "desc": "Sağlıklı yaşam, spor disiplini ve bilişimin birleştiği spor oyunları."
      },
      {
        "title": "Top Fiziği & Açı",
        "desc": "'45 derece yönüne dön' ve 'Kenara geldiyse sektir' ile gerçekçi top hareketi."
      },
      {
        "title": "Kaleci Algoritması",
        "desc": "Kalecinin sağa-sola otomatik gidip gelerek kaleyi savunması."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#e11d48\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"16\" font-weight=\"bold\">19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı</text>\n\n  <g transform=\"translate(70, 75)\">\n    <circle cx=\"45\" cy=\"45\" r=\"38\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"55\" text-anchor=\"middle\" font-size=\"32\">🏃</text>\n  </g>\n\n  <g transform=\"translate(180, 75)\">\n    <circle cx=\"45\" cy=\"45\" r=\"38\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"55\" text-anchor=\"middle\" font-size=\"32\">⚽</text>\n  </g>\n\n  <g transform=\"translate(290, 75)\">\n    <circle cx=\"45\" cy=\"45\" r=\"38\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"45\" y=\"55\" text-anchor=\"middle\" font-size=\"32\">🏀</text>\n  </g>\n\n  <rect x=\"50\" y=\"200\" width=\"350\" height=\"90\" rx=\"12\" fill=\"#be123c\"/>\n  <text x=\"225\" y=\"230\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"14\" font-weight=\"bold\">Gençlik ve Spor Bayramı Kodlama Oyunu</text>\n  <text x=\"225\" y=\"255\" text-anchor=\"middle\" fill=\"#fecdd3\" font-size=\"11\">Engelli koşu ve penaltı çekme oyununu Scratch ile kodluyoruz.</text>\n  <text x=\"225\" y=\"275\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\">\"Sağlam kafa sağlam vücutta bulunur.\"</text>\n</svg>",
    "section1": {
      "title": "Penaltı ve Gol Oyunu Mantığı",
      "subtitle": "Yeşil sahaların coşkusunu Scratch ekranına taşıyoruz:",
      "cards": [
        {
          "title": "Penaltı Mekaniği",
          "icon": "⚽",
          "desc": "Oyunda 3 ana aktör vardır:",
          "items": [
            {
              "bold": "Top Kuklası",
              "text": "Boşluk tuşuna basınca kaleye doğru hızla fırlar."
            },
            {
              "bold": "Kaleci Kuklası",
              "text": "Kale çizgisinde sağa sola sürekli gidip gelerek devriye atar."
            },
            {
              "bold": "Kale Çizgisi (File)",
              "text": "Eğer top kaleciye değerse 'Kurtardı!', ağlara değerse 'Gooool!' sesi çalar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Top Sektirme (Pong) Oyunu",
      "subtitle": "Raketle topu düşürmeden havada tutma mücadelesi:",
      "cards": [
        {
          "badge": "Raket",
          "title": "Farenin X Konumu",
          "desc": "Raket kuklasına 'x konumunu farenin x'i yap' derseniz raket eliniz gibi fareyi takip eder.",
          "items": [
            {
              "bold": "Kolay Kontrol",
              "text": "Gecikme olmadan mükemmel refleks sağlar."
            }
          ]
        },
        {
          "badge": "Çarpma",
          "title": "Raketten Sekme",
          "desc": "Eğer rakete değiyor mu? -> 180 derece tersine dön ve skoru +1 artır!",
          "items": [
            {
              "bold": "Heyecan",
              "text": "Top her sekmede biraz daha hızlansın!"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "19 Mayıs Gençlik Kupası Futbol Oyunu",
      "subtitle": "5 şutta en çok golü atan oyuncunun kupayı kaldırdığı penaltı oyununu kodlayalım.",
      "steps": [
        {
          "title": "Futbol Sahası Dekoru",
          "desc": "'Soccer' futbol sahası dekorunu ekleyin."
        },
        {
          "title": "Kaleciyi Kodla",
          "desc": "Sürekli Tekrarla: 10 adım git, kenara geldiyse sektir."
        },
        {
          "title": "Şut ve Gol Kontrolü",
          "desc": "Top kaleciye çarparsa 'Aut!', kaleye girerse 'Gooool!' yazıp skoru artırın."
        }
      ],
      "criteria": [
        "Açı ve yön bloklarını top hareketinde doğru kullanma",
        "Hedefe ulaşma ve kaleciye çarpma şartlarını kodlama",
        "19 Mayıs spor ruhuna uygun tematik oyun tamamlama"
      ]
    },
    "tips": {
      "safetyTitle": "Spor Oyunu Geliştirme Taktikleri",
      "safetyRules": [
        {
          "bold": "Kaleciyi Çok Hızlı Yapmayın",
          "text": "Kaleci çok hızlı olursa hiç gol atılamaz; oyunu keyifli kılan dengeli hızdır."
        },
        {
          "bold": "Tezahürat Sesi Ekleyin",
          "text": "Gol olunca 'Cheer (Alkış ve Tezahürat)' sesini ekleyerek stadyum coşkusu yaratın."
        },
        {
          "bold": "Hareketi İhmal Etmeyin",
          "text": "Bilgisayarda spor oyunu yaptıktan sonra mutlaka bahçeye çıkıp gerçek topla da oynayın!"
        }
      ],
      "myths": [
        {
          "wrong": "E-spor gerçek sporun yerine geçer.",
          "correct": "E-spor eğlencelidir ama beden sağlığımız için mutlaka gerçek spor ve koşu yapmalıyız."
        },
        {
          "wrong": "Açıları ayarlamak çok zordur.",
          "correct": "Scratch'te yön okuyla açıyı çevirmek saat kadranı gibi çok pratiktir."
        }
      ]
    },
    "quiz": {
      "question": "19 Mayıs Atatürk'ü Anma, Gençlik ve Spor Bayramı oyunumuzda topun rakete çarptığında geriye dönmesi için hangi kod bloğu uygulanır?",
      "options": [
        {
          "text": "A) Sahneyi karart",
          "isCorrect": false
        },
        {
          "text": "B) 180 derece dön ve ilerle",
          "isCorrect": true
        },
        {
          "text": "C) Boyutu 0 yap",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarı kapat",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 180 derece dönmek tam ters istikamete yönelmeyi sağlar ve topun geri sekmesini kodlar."
    },
    "summaryRules": [
      {
        "bold": "19 Mayıs",
        "text": "Milli mücadelemizin ilk kıvılcımı ve gençliğin bayramıdır."
      },
      {
        "bold": "Spor ve Kodlama",
        "text": "Kurallar, refleksler ve strateji spor ile bilişimin ortak noktasıdır."
      },
      {
        "bold": "Sağlıklı Beden",
        "text": "Hem aklımızı kodla besleriz hem de bedenimizi sporla güçlendiririz."
      }
    ],
    "homework": "Futbol oyununuza bir zamanlayıcı ekleyip 60 saniyede kaç gol atılabileceğini test edin.",
    "nextWeekPreview": "Sıfır Atık ve Akıllı Geri Dönüşüm Robotu Projesi - Dünyamızı kurtaran yeşil bilişim!"
  },
  {
    "week": 37,
    "date": "24 - 30 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yapay Zekâ, Doğa ve Geleceğin Bilişimi",
    "unitBadge": "Sıfır Atık",
    "unitTheme": "unite-6",
    "title": "Sıfır Atık ve Akıllı Geri Dönüşüm Robotu",
    "subtitle": "Çevre Bilinci, Yapay Zekâ ile Atık Ayrıştırma ve Yeşil Teknoloji",
    "outcomeCode": "BTY.4.6.2",
    "targetSkill": "Çevreye Duyarlı Teknoloji & Sınıflandırma",
    "curiosityQuestion": "Çöpe attığımız bir plastik şişe doğada 450 yıl boyunca kaybolmazken, yapay zekâlı bir robot onu nasıl 1 saniyede tanıyıp geri dönüştürür?",
    "roadmap": [
      {
        "title": "Sıfır Atık Hareketi",
        "desc": "İsrafı önlemek, kaynakları verimli kullanmak ve atıkları geri dönüştürmek."
      },
      {
        "title": "3 Büyük Atık Türü",
        "desc": "Mavi kutu: Kâğıt, Sarı kutu: Plastik, Yeşil kutu: Cam."
      },
      {
        "title": "Akıllı Ayrıştırma Robotu",
        "desc": "Kamerasıyla atığın türünü tanıyıp doğru kutuya atan robot algoritması."
      },
      {
        "title": "Yeşil Bilişim Projesi",
        "desc": "Scratch ile atıkları sürükleyip doğru kutuya atınca puan kazandıran oyun."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\">Sıfır Atık & Akıllı Geri Dönüşüm Robotu</text>\n\n  <!-- Geri Dönüşüm Kutuları -->\n  <g transform=\"translate(60, 80)\">\n    <rect width=\"80\" height=\"100\" rx=\"8\" fill=\"#1e3a8a\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"45\" text-anchor=\"middle\" font-size=\"28\">📄</text>\n    <text x=\"40\" y=\"80\" text-anchor=\"middle\" fill=\"#93c5fd\" font-size=\"11\" font-weight=\"bold\">KÂĞIT</text>\n  </g>\n\n  <g transform=\"translate(185, 80)\">\n    <rect width=\"80\" height=\"100\" rx=\"8\" fill=\"#78350f\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"45\" text-anchor=\"middle\" font-size=\"28\">🥤</text>\n    <text x=\"40\" y=\"80\" text-anchor=\"middle\" fill=\"#fde68a\" font-size=\"11\" font-weight=\"bold\">PLASTİK</text>\n  </g>\n\n  <g transform=\"translate(310, 80)\">\n    <rect width=\"80\" height=\"100\" rx=\"8\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"40\" y=\"45\" text-anchor=\"middle\" font-size=\"28\">🍾</text>\n    <text x=\"40\" y=\"80\" text-anchor=\"middle\" fill=\"#a7f3d0\" font-size=\"11\" font-weight=\"bold\">CAM</text>\n  </g>\n\n  <rect x=\"50\" y=\"220\" width=\"350\" height=\"70\" rx=\"10\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"245\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"12\" font-weight=\"bold\">Akıllı Robot Atıkları Sensörlerle Ayırıyor!</text>\n  <text x=\"225\" y=\"268\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Doğayı ve geleceğimizi korumak için teknolojiyi kullanıyoruz.</text>\n</svg>",
    "section1": {
      "title": "Teknoloji Doğayı Nasıl Korur?",
      "subtitle": "Bilişim sadece eğlence için değil, gezegenimizi kurtarmak için de çalışır:",
      "cards": [
        {
          "title": "Akıllı Geri Dönüşümün Faydaları",
          "icon": "🌱",
          "desc": "Yapay zekâlı robotlar atıkları saniyeler içinde ayrıştırarak doğayı korur:",
          "items": [
            {
              "bold": "Ağaçları Kurtarır",
              "text": "1 ton kâğıt geri dönüştürüldüğünde 17 yetişkin ağaç kesilmekten kurtulur."
            },
            {
              "bold": "Denizleri Temizler",
              "text": "Plastiklerin okyanuslara ve balıkların midesine gitmesini önler."
            },
            {
              "bold": "Enerji Tasarrufu",
              "text": "Geri dönüştürülmüş cam üretmek sıfırdan cam yapmaktan %40 daha az enerji harcar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Geri Dönüşüm Oyunu Algoritması",
      "subtitle": "Kullanıcının doğru kutuyu seçmesini denetleyen mantık:",
      "cards": [
        {
          "badge": "Doğru Eşleşme",
          "title": "Kâğıt -> Mavi Kutu",
          "desc": "EĞER Gazete kuklası Mavi Kutuya değerse -> 'Tebrikler!' sesi çal, skoru +5 yap ve atığı yok et.",
          "items": [
            {
              "bold": "Puan",
              "text": "Doğru kutu yüksek çevre puanı kazandırır."
            }
          ]
        },
        {
          "badge": "Yanlış Eşleşme",
          "title": "Plastik -> Cam Kutu",
          "desc": "EĞER Plastik şişe Yeşil Kutuya değerse -> 'Buzzer' hata sesi çal ve 'Tekrar Dene' uyarısı ver.",
          "items": [
            {
              "bold": "Öğrenme",
              "text": "Hangi atığın hangi kutuya gideceğini öğretir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sıfır Atık Kahramanı Oyunu",
      "subtitle": "3 farklı atığı (gazete, pet şişe, kavanoz) doğru kutulara sürükleme oyunu yapalım.",
      "steps": [
        {
          "title": "Kutuları Çiz",
          "desc": "Mavi (Kâğıt), Sarı (Plastik) ve Yeşil (Cam) olmak üzere 3 kutu kuklası ekleyin."
        },
        {
          "title": "Atıkları Kodla",
          "desc": "Atık kuklalarına 'fareyle sürüklenebilir' özelliği verin."
        },
        {
          "title": "Çarpışma Kontrolü",
          "desc": "Doğru kutuya değdiğinde 'Aferin!' diyerek çevre puanı kazandırın."
        }
      ],
      "criteria": [
        "Sıfır atık kutu renklerini doğru eşleştirebilme",
        "Kuklalara dokunma (touching) bloklarını hatasız kurma",
        "Çevre koruma bilincini projeye başarıyla yansıtma"
      ]
    },
    "tips": {
      "safetyTitle": "Çevre Dostu Teknoloji Tavsiyeleri",
      "safetyRules": [
        {
          "bold": "Cihazları Prizde Bırakmayın",
          "text": "Şarj aletleri prize takılı kaldığında elektrik tüketmeye devam eder (vampir enerji)."
        },
        {
          "bold": "E-Atıkları Çöpe Atmayın",
          "text": "Eski piller ve bozuk tabletler normal çöpe atılmaz; elektronik atık kutusuna bırakılır."
        },
        {
          "bold": "Gereksiz Kâğıt Çıktısı Almayın",
          "text": "Okuyabileceğiniz şeyleri ekrandan okuyarak ağaçları koruyun."
        }
      ],
      "myths": [
        {
          "wrong": "Bütün çöpler tek bir torbaya konulup atılmalıdır.",
          "correct": "Kâğıt, cam ve plastik kaynağında ayrı toplanırsa %100 geri dönüştürülebilir."
        },
        {
          "wrong": "Teknolojik aletlerin çevreye hiçbir zararı yoktur.",
          "correct": "Bilişim cihazlarının üretimi ve elektriği çevreye etki eder; tasarruflu kullanılmalıdır."
        }
      ]
    },
    "quiz": {
      "question": "Sıfır Atık standartlarına göre 'KÂĞIT VE KARTON' atıklar hangi renkli geri dönüşüm kutusuna atılmalıdır?",
      "options": [
        {
          "text": "A) Sarı Kutu",
          "isCorrect": false
        },
        {
          "text": "B) Mavi Kutu",
          "isCorrect": true
        },
        {
          "text": "C) Kırmızı Kutu",
          "isCorrect": false
        },
        {
          "text": "D) Siyah Kutu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Sıfır Atık yönetmeliğine göre kâğıt ve karton atıklar MAVİ renkli geri dönüşüm kutularında toplanır."
    },
    "summaryRules": [
      {
        "bold": "Sıfır Atık",
        "text": "Geleceğimize temiz ve yaşanabilir bir dünya bırakma sözümüzdür."
      },
      {
        "bold": "Yeşil Bilişim",
        "text": "Teknolojiyi çevre sorunlarını çözmek için kullanmaktır."
      },
      {
        "bold": "Ayrıştırma",
        "text": "Doğru atık doğru kutuya gittiğinde çöp değil değer olur."
      }
    ],
    "homework": "Evinizdeki atıkları 3 gün boyunca kâğıt, plastik ve organik olarak ayrı poşetlerde biriktirin.",
    "nextWeekPreview": "Kendi İnteraktif Hikâyemi/Animasyonumu Tasarlıyorum - Karakterler birbirine haber salacak!"
  },
  {
    "week": 38,
    "date": "31 Mayıs - 06 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yapay Zekâ, Doğa ve Geleceğin Bilişimi",
    "unitBadge": "Haber Salma",
    "unitTheme": "unite-6",
    "title": "İnteraktif Hikâye & Karakter Sohbeti",
    "subtitle": "Karakterler Arası İletişim: 'Haber Sal (Broadcast)' ve 'Haberi Alınca'",
    "outcomeCode": "BTY.4.6.3",
    "targetSkill": "Olay Tabanlı İletişim & Senaryo Kurgulama",
    "curiosityQuestion": "Tiyatroda bir oyuncu repliğini bitirdiğinde diğer oyuncu sıranın kendine geldiğini nasıl anlar? Scratch'te karakterler sırayla nasıl konuşur?",
    "roadmap": [
      {
        "title": "Haber Salma (Broadcast) Nedir?",
        "desc": "Bir kuklanın diğer tüm kuklalara gizli bir telsiz anonsu göndermesi."
      },
      {
        "title": "Haberi Alınca Bloğu",
        "desc": "Telsiz anonsunu duyan kuklanın kendi kodlarını çalıştırmaya başlaması."
      },
      {
        "title": "Sahne Değiştirme",
        "desc": "Orman sahnesinden uzay sahnesine geçerken haber salarak dekoru değiştirme."
      },
      {
        "title": "Kendi Çizgi Filmini Yap",
        "desc": "2 karakterin karşılıklı diyalog kurduğu 3 sahnelik animasyon filmi."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\">İnteraktif Hikâye & Karakter Sohbeti</text>\n\n  <g transform=\"translate(70, 75)\">\n    <rect width=\"130\" height=\"90\" rx=\"10\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"65\" y=\"40\" text-anchor=\"middle\" font-size=\"24\">🐱</text>\n    <text x=\"65\" y=\"70\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">Haber Sal</text>\n  </g>\n\n  <g transform=\"translate(250, 75)\">\n    <rect width=\"130\" height=\"90\" rx=\"10\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"65\" y=\"40\" text-anchor=\"middle\" font-size=\"24\">🐶</text>\n    <text x=\"65\" y=\"70\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">Haberi Alınca</text>\n  </g>\n\n  <path d=\"M205,120 L245,120\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-dasharray=\"4\"/>\n  <text x=\"225\" y=\"215\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">Karakterler Arası İletişim: 'Haber Sal (Broadcast)'</text>\n  <text x=\"225\" y=\"245\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Kedi 'Merhaba' dediğinde köpek haberi alır ve 'Hoş geldin' der.</text>\n</svg>",
    "section1": {
      "title": "Karakterler Arasında Telsiz İletişimi",
      "subtitle": "Haber Salma bloğu Scratch'in en profesyonel mekanizmasıdır:",
      "cards": [
        {
          "title": "Haber Sal (Broadcast) Nasıl Çalışır?",
          "icon": "📻",
          "desc": "Kedi ve Köpeğin karşılıklı konuşma senaryosu:",
          "items": [
            {
              "bold": "1. Adım (Kedi)",
              "text": "'Selam Karabaş!' der ve 'kedi_konustu' haberini salar."
            },
            {
              "bold": "2. Adım (Köpek)",
              "text": "'kedi_konustu haberini alınca' bloğu uyanır ve 'Selam Tekir!' der."
            },
            {
              "bold": "3. Adım (Köpek)",
              "text": "Ardından 'kopek_konustu' haberini salarak sırayı tekrar kediye devreder."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sahne ve Bölüm Değiştirme",
      "subtitle": "Oyunlarda 'Seviye 2'ye geçiş haberle tetiklenir:",
      "cards": [
        {
          "badge": "Haber",
          "title": "'yeni_bolum' Haberi Sal",
          "desc": "Karakter kapıya ulaştığında 'yeni_bolum' haberini tüm oyuna anons eder.",
          "items": [
            {
              "bold": "Sahne Tepkisi",
              "text": "Haber gelince 'Sonraki Dekora Geç' komutunu çalıştırır."
            }
          ]
        },
        {
          "badge": "Düşmanlar",
          "title": "Canavarlar Yeniden Doğar",
          "desc": "Haber gelince yeni bölümün canavarları sahnede belirir ve oyun hızlanır.",
          "items": [
            {
              "bold": "Düzen",
              "text": "Bütün kuklalar aynı anda senkronize olur."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Ormanda Karşılaşan İki Arkadaş Çizgi Filmi",
      "subtitle": "Kedi ile papağanın karşılaşıp birbirine bilmece sorduğu bir animasyon kodlayalım.",
      "steps": [
        {
          "title": "2 Kukla ve Orman Dekoru",
          "desc": "Kedi ve Papağan kuklasını orman dekoruna yerleştirin."
        },
        {
          "title": "Birinci Diyalog",
          "desc": "Kedi: 'Sana bir bilmece sorayım mı?' desin ve 'bilmece_soruldu' haberini salsın."
        },
        {
          "title": "İkinci Diyalog",
          "desc": "Papağan haberi alınca 'Sor bakalım, çok merak ettim!' yanıtını versin."
        }
      ],
      "criteria": [
        "Haber Salma ve Haberi Alınca bloklarını eksiksiz eşleştirme",
        "Konuşmaların üst üste binmesini engelleyerek akıcı diyalog kurma",
        "Yaratıcı ve esprili bir senaryo kurgulayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Haber Salma Püf Noktaları",
      "safetyRules": [
        {
          "bold": "Haberlere Anlamlı İsimler Verin",
          "text": "'Haber 1' demek yerine 'kedi_bitti' veya 'oyun_basladi' yazın; kafanız karışmaz."
        },
        {
          "bold": "Bekleme ile Karıştırmayın",
          "text": "Saniyelerle beklemek yerine haber salmak diyalogların asla şaşmamasını sağlar."
        },
        {
          "bold": "Haber Sal ve Bekle",
          "text": "Eğer diğer kukla işini bitirene kadar beklemek istiyorsanız 'Haberini sal ve bekle' bloğunu kullanın."
        }
      ],
      "myths": [
        {
          "wrong": "Haber salındığında sadece 1 kukla haberi duyabilir.",
          "correct": "Haber salındığında projedeki bütün kuklalar ve sahne anonsu aynı anda duyar!"
        },
        {
          "wrong": "Diyaloglar sadece 'bekle' bloğuyla yapılmalıdır.",
          "correct": "'Bekle' blokları saniyeleri tutturamadığında konuşmalar üst üste biner; en doğrusu haber salmaktır."
        }
      ]
    },
    "quiz": {
      "question": "Scratch'te bir karakterin konuşmasını bitirdikten sonra sıranın diğer karaktere geçtiğini bildirmek için kullandığı blok hangisidir?",
      "options": [
        {
          "text": "A) Bilgisayarı kapat",
          "isCorrect": false
        },
        {
          "text": "B) Haberini sal (Broadcast)",
          "isCorrect": true
        },
        {
          "text": "C) Sahneyi sil",
          "isCorrect": false
        },
        {
          "text": "D) 100 adım git",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Haberini sal (Broadcast)' bloğu kuklalar arası gizli iletişim kurarak olayların sırayla tetiklenmesini sağlar."
    },
    "summaryRules": [
      {
        "bold": "Haber Salma",
        "text": "Kuklalar ve sahneler arası kablosuz anons sistemidir."
      },
      {
        "bold": "Senkronizasyon",
        "text": "Karakterlerin tam zamanında konuşmasını ve hareket etmesini sağlar."
      },
      {
        "bold": "Bölüm Geçişleri",
        "text": "Yeni seviyeler ve dekor değişimleri haberlerle yönetilir."
      }
    ],
    "homework": "Kedi ile köpeğin selamlaşıp el sıkıştığı 2 sahnelik mini animasyonu Scratch'te tamamlayın.",
    "nextWeekPreview": "2. Dönem 2. Yazılı Sınavı Büyük Yıl Sonu Tekrarı - Yılın son sınavına bomba gibi hazırlanıyoruz!"
  },
  {
    "week": 39,
    "date": "07 - 13 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yapay Zekâ, Doğa ve Geleceğin Bilişimi",
    "unitBadge": "Büyük Yıl Sonu Sınavı",
    "unitTheme": "unite-6",
    "title": "2. Dönem 2. Yazılı Sınavı Büyük Yıl Sonu Tekrarı",
    "subtitle": "Bütün Yılın Özeti: Algoritmadan Scratch Oyunlarına, Değişkenlerden Yapay Zekâya",
    "outcomeCode": "BTY.4.6.4",
    "targetSkill": "Yıllık Bilişim Müfredatını Tamamlama & Sınav Başarısı",
    "curiosityQuestion": "1 yıl boyunca biriktirdiğiniz bilişim süper güçleriyle bugün hangi devasa yazılım projesine imza atabilirsiniz?",
    "roadmap": [
      {
        "title": "Algoritma & Akış Şeması",
        "desc": "Sıralama kuralları, elips, dikdörtgen, eşkenar dörtgen sembolleri."
      },
      {
        "title": "Döngüler & Şartlar",
        "desc": "'Tekrarla' blokları, 'Eğer-Değilse' karar mekanizmaları ve sensörler."
      },
      {
        "title": "Değişkenler & Haber Salma",
        "desc": "Skor kumbarası, süre sayacı ve kuklalar arası haber anonsları."
      },
      {
        "title": "Yıl Sonu Şampiyonu",
        "desc": "Yazılı sınavda tüm soruları doğru yanıtlayarak 4. sınıfı zirvede tamamlama."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\">2. Dönem 2. Yazılı Büyük Yıl Sonu Tekrarı</text>\n\n  <g transform=\"translate(75, 80)\">\n    <rect width=\"130\" height=\"75\" rx=\"10\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <text x=\"65\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">🔄</text>\n    <text x=\"65\" y=\"60\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">Döngüler</text>\n  </g>\n\n  <g transform=\"translate(245, 80)\">\n    <rect width=\"130\" height=\"75\" rx=\"10\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <text x=\"65\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">⚖️</text>\n    <text x=\"65\" y=\"60\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">Şartlar (Eğer)</text>\n  </g>\n\n  <g transform=\"translate(75, 175)\">\n    <rect width=\"130\" height=\"75\" rx=\"10\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"65\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">🎯</text>\n    <text x=\"65\" y=\"60\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\" font-weight=\"bold\">Değişkenler</text>\n  </g>\n\n  <g transform=\"translate(245, 175)\">\n    <rect width=\"130\" height=\"75\" rx=\"10\" fill=\"#1e293b\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n    <text x=\"65\" y=\"35\" text-anchor=\"middle\" font-size=\"24\">📢</text>\n    <text x=\"65\" y=\"60\" text-anchor=\"middle\" fill=\"#a855f7\" font-size=\"11\" font-weight=\"bold\">Haber Salma</text>\n  </g>\n</svg>",
    "section1": {
      "title": "Yılın 6 Büyük Bilişim Kazanımı",
      "subtitle": "Bu 6 kavramı bilen öğrenci hem sınavı hem de geleceği kazanır:",
      "cards": [
        {
          "title": "Şampiyonlar Özeti",
          "icon": "🏅",
          "desc": "Zihninizde canlandırın ve pekiştirin:",
          "items": [
            {
              "bold": "1. Algoritma",
              "text": "Problemleri adım adım çözme planıdır (Başla ve Bitir zorunludur)."
            },
            {
              "bold": "2. Döngü",
              "text": "Aynı işi yorulmadan belirlenen sayıda tekrarlar (Kod tasarrufu)."
            },
            {
              "bold": "3. Koşul (Eğer)",
              "text": "Duruma göre karar verir; doğruysa bir yola, yanlışsa diğer yola gider."
            },
            {
              "bold": "4. Değişken",
              "text": "Puan ve süreyi hafızasında tutan dijital kutudur."
            },
            {
              "bold": "5. Haber Salma",
              "text": "Kuklaların birbiriyle konuşmasını ve sahne geçişini sağlar."
            },
            {
              "bold": "6. Dijital Vatandaşlık",
              "text": "Güçlü şifre, kibar dil ve güvenli internet kullanımıdır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sınavda Karşılaşacağınız Özel Soru Tipleri",
      "subtitle": "Soruları çözerken altın değerinde tavsiyeler:",
      "cards": [
        {
          "badge": "Kod Okuma",
          "title": "Kod Bloklarını İnceleme",
          "desc": "Soruda verilen blokları adım adım zihninizde çalıştırın. 'Kedi en son nereye gitti? Kaç puan aldı?'",
          "items": [
            {
              "bold": "Yöntem",
              "text": "Küçük bir karalama kâğıdında adımları tek tek işaretleyin."
            }
          ]
        },
        {
          "badge": "Kavram Eşleme",
          "title": "Tanım Soruları",
          "desc": "Değişken = Puan tutucu, Döngü = Tekrarlayıcı, Baklava Şekli = Karar verici.",
          "items": [
            {
              "bold": "Yöntem",
              "text": "Anahtar kelimeleri sorunun altını çizerek yakalayın."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Büyük Yıl Sonu Bilgi Arenası",
      "subtitle": "Akıllı tahtada 20 soruluk final deneme sınavını sınıfça çözelim.",
      "steps": [
        {
          "title": "Bireysel Odaklanma",
          "desc": "Önce herkes soruyu kendi içinden okuyup defterine cevabını yazsın."
        },
        {
          "title": "Tahtada Çözüm",
          "desc": "Bir arkadaşımız tahtaya kalkıp doğru cevabın gerekçesini açıklasın."
        },
        {
          "title": "Hata Analizi",
          "desc": "Yanlış işaretleyenler doğrusunu hemen öğrenip eksiklerini kapatsın."
        }
      ],
      "criteria": [
        "Yıllık tüm üniteleri sentezleyebilme",
        "Soru köklerindeki tuzakları eleştirel gözle fark etme",
        "Sınava hazır, özgüvenli ve motive olma"
      ]
    },
    "tips": {
      "safetyTitle": "Final Sınavında Tam Puan Alma Kuralları",
      "safetyRules": [
        {
          "bold": "Sakin ve Dikkatli Olun",
          "text": "Sınav kâğıdını aldığınızda heyecanlanmayın; bildiğiniz sorularla başlayın."
        },
        {
          "bold": "Kod Sırasını Karıştırmayın",
          "text": "Blokların yukarıdan aşağıya doğru sırayla çalıştığını asla unutmayın."
        },
        {
          "bold": "Kontrol Edin",
          "text": "Sınavı bitirince kâğıdı hemen teslim etmeyin; baştan sona tüm soruları bir kez daha okuyun."
        }
      ],
      "myths": [
        {
          "wrong": "Bilişim sınavında sadece bilgisayar kullananlar başarılı olur.",
          "correct": "Bilişim sınavında dikkatli düşünen ve mantık kuran herkes tam puan alır."
        },
        {
          "wrong": "En zor konu haber salmadır.",
          "correct": "Haber salmayı telsiz anonsu gibi düşündüğünüzde en eğlenceli ve kolay konudur!"
        }
      ]
    },
    "quiz": {
      "question": "Scratch'te bir oyunda puanları saklamak için 'SKOR' adında oluşturduğumuz ve oyun boyunca değeri değişebilen yapıya ne ad verilir?",
      "options": [
        {
          "text": "A) Ses Efekti",
          "isCorrect": false
        },
        {
          "text": "B) Sahne Dekoru",
          "isCorrect": false
        },
        {
          "text": "C) Değişken (Variable)",
          "isCorrect": true
        },
        {
          "text": "D) Klavye Kablosu",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Puan, can ve süre gibi oyun boyunca güncellenen değerleri saklayan yapılara 'Değişken' denir."
    },
    "summaryRules": [
      {
        "bold": "Büyük Yılın Sonu",
        "text": "4. sınıf bilişim müfredatının tüm kazanımlarını başarıyla tamamladık."
      },
      {
        "bold": "Üst Düzey Başarı",
        "text": "Algoritma, döngü, şart, değişken ve haber salma konularında tam yetkiniz."
      },
      {
        "bold": "Hazırız",
        "text": "Yazılı sınavda en yüksek başarıyı elde edip ortaokula gururla adım atacağız!"
      }
    ],
    "homework": "Yıl sonu sınav deneme testini evde sessiz bir ortamda süre tutarak çözün.",
    "nextWeekPreview": "Oyunumu Arkadaşlarıma Sunuyorum: Dijital Proje Tanıtımı (Pitching) - Oyunlarımızı sahneye çıkarıyoruz!"
  },
  {
    "week": 40,
    "date": "14 - 20 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yapay Zekâ, Doğa ve Geleceğin Bilişimi",
    "unitBadge": "Proje Sunumu",
    "unitTheme": "unite-6",
    "title": "Oyunumu Arkadaşlarıma Sunuyorum: Proje Demosu",
    "subtitle": "Girişimcilik, Proje Sunumu (Pitching), Canlı Demo ve Akran Değerlendirmesi",
    "outcomeCode": "BTY.4.6.5",
    "targetSkill": "Proje Sunumu, Beden Dili & İletişim Becerisi",
    "curiosityQuestion": "Dünyanın en iyi oyununu siz yapmış olsanız bile onu insanlara heyecanla anlatamazsanız oyununuzu kimse oynar mı?",
    "roadmap": [
      {
        "title": "Pitching (Proje Sunumu) Nedir?",
        "desc": "Hazırladığımız bir oyunu veya icadı 2 dakika içinde ilgi çekici şekilde tanıtma sanatı."
      },
      {
        "title": "Sunumun 3 Büyülü Bölümü",
        "desc": "1. Oyunun hikâyesi nedir? 2. Hangi kuralları ve kodları kullandım? 3. Canlı oynanış gösterisi."
      },
      {
        "title": "Akran Değerlendirmesi",
        "desc": "Arkadaşımızın oyununu saygıyla oynamak ve ona yapıcı güzel geri bildirimler vermek."
      },
      {
        "title": "Yıl Sonu Sergisine Hazırlık",
        "desc": "Önümüzdeki haftaki büyük Bilişim Şenliği için projeleri son haline getirme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"16\" font-weight=\"bold\">Oyunumu Sunuyorum: Dijital Pitching</text>\n\n  <g transform=\"translate(185, 75)\">\n    <circle cx=\"40\" cy=\"40\" r=\"38\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n    <text x=\"40\" y=\"50\" text-anchor=\"middle\" font-size=\"34\">🎤</text>\n  </g>\n\n  <rect x=\"50\" y=\"185\" width=\"350\" height=\"95\" rx=\"12\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"215\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"13\" font-weight=\"bold\">Oyununun Hikâyesini Arkadaşlarına Anlat!</text>\n  <text x=\"225\" y=\"240\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">1. Oyunun adı nedir? • 2. Amacı ve kuralları nelerdir?</text>\n  <text x=\"225\" y=\"260\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"11\">3. Hangi kod bloklarını kullandın? Canlı demo yap!</text>\n</svg>",
    "section1": {
      "title": "Harika Bir Oyun Sunumu Nasıl Yapılır?",
      "subtitle": "Tıpkı bir oyun şirketinin yöneticisi gibi sahneye çıkıp konuşmak:",
      "cards": [
        {
          "title": "2 Dakikalık Şampiyon Sunum Planı",
          "icon": "🌟",
          "desc": "Akıllı tahtanın başına geçtiğinizde şu adımları izleyin:",
          "items": [
            {
              "bold": "Giriş (30 sn)",
              "text": "'Merhaba! Oyunumun adı 'Siber Macera'. Amacı dünyayı çevre kirliliğinden kurtarmak.'"
            },
            {
              "bold": "Kodlama Sırları (30 sn)",
              "text": "'Bu oyunda değişkenler, döngüler ve haber salma blokları kullandım.'"
            },
            {
              "bold": "Canlı Demo (60 sn)",
              "text": "Oyunu yeşil bayrakla başlatıp 1 bölüm oynayın ve can/skor sistemini gösterin!"
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Akran Geri Bildirimi: 'Sandviç Yöntemi'",
      "subtitle": "Arkadaşımızın oyununu değerlendirirken kalbini kırmadan rehberlik etmek:",
      "cards": [
        {
          "badge": "1. Katman (Övgü)",
          "title": "Neyi Çok Beğendin?",
          "desc": "'Karakterinin renklerine ve zıplama efektine bayıldım!'",
          "items": [
            {
              "bold": "Motivasyon",
              "text": "Arkadaşının emeğini takdir et."
            }
          ]
        },
        {
          "badge": "2. Katman (Gelişim)",
          "title": "Neyi Geliştirebilir?",
          "desc": "'Elmalar biraz daha yavaş düşerse oyun daha oynanabilir olabilir.'",
          "items": [
            {
              "bold": "Öneri",
              "text": "Yapıcı bir fikir ver."
            }
          ]
        },
        {
          "badge": "3. Katman (Kapanış)",
          "title": "Güzel Bir Dilek",
          "desc": "'Eline sağlık, oynamaktan büyük keyif aldım!'",
          "items": [
            {
              "bold": "Dostluk",
              "text": "Takım ruhunu güçlendir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sınıf İçi Küçük Geliştiriciler Fuarı",
      "subtitle": "Her öğrenci akıllı tahtada hazırladığı oyunu 2 dakika sunup arkadaşına oynatsın.",
      "steps": [
        {
          "title": "Tahtaya Çık",
          "desc": "Projenizi Scratch'te açıp tam ekran yapın."
        },
        {
          "title": "Hikâyeni Anlat",
          "desc": "Güleryüzle ve net bir sesle oyununun kurallarını sınıfa anlat."
        },
        {
          "title": "Alkış ve Yorum",
          "desc": "Sıradaki bir arkadaşını tahtaya çağırıp oyununu test ettir ve yorumunu dinle."
        }
      ],
      "criteria": [
        "Beden dilini ve ses tonunu etkili kullanabilme",
        "Yazdığı kod bloklarının görevlerini açıklayabilme",
        "Eleştirilere açık olma ve arkadaşlarını nezaketle dinleme"
      ]
    },
    "tips": {
      "safetyTitle": "Sahne Özgüveni İpuçları",
      "safetyRules": [
        {
          "bold": "Göz Teması Kurun",
          "text": "Yere veya duvara bakmayın; arkadaşlarınıza ve öğretmeninize bakarak konuşun."
        },
        {
          "bold": "Hata Olursa Gülümseyin",
          "text": "Demo sırasında oyun takılırsa veya canınız biterse panik yapmayın; 'İşte burada küçük bir bug yakaladık!' deyip gülümseyin."
        },
        {
          "bold": "Arkadaşınızı Dikkatle Dinleyin",
          "text": "Sıra size gelene kadar diğer arkadaşlarınızın sunumlarını saygıyla izleyin."
        }
      ],
      "myths": [
        {
          "wrong": "Yazılımcılar sadece karanlık odada kod yazar, insanlarla konuşmaz.",
          "correct": "Modern yazılımcılar harika sunumlar yapan, takım çalışan ve iletişim ustası liderlerdir!"
        },
        {
          "wrong": "Sunumda oyunun bütün kodlarını tek tek okumak gerekir.",
          "correct": "Sadece en ilginç ve kritik kod bloklarını özetlemek dinleyiciler için çok daha keyiflidir."
        }
      ]
    },
    "quiz": {
      "question": "Bir geliştiricinin hazırladığı oyunu veya projeyi topluluğa kısa ve etkileyici şekilde tanıtmasına ne ad verilir?",
      "options": [
        {
          "text": "A) Format Atmak",
          "isCorrect": false
        },
        {
          "text": "B) Proje Sunumu / Demo (Pitching)",
          "isCorrect": true
        },
        {
          "text": "C) Bilgisayarı Kapatmak",
          "isCorrect": false
        },
        {
          "text": "D) Virüs Taraması",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Proje Sunumu ve Pitching', fikri ve çalışan demoyu etkileyici şekilde anlatma becerisidir."
    },
    "summaryRules": [
      {
        "bold": "Proje Sunumu",
        "text": "Ürettiğimiz eseri dünyaya anlatabilme cesareti ve sanatıdır."
      },
      {
        "bold": "Sandviç Metodu",
        "text": "Övgü, yapıcı öneri ve teşekkür ile arkadaşımızın projesini zenginleştirmektir."
      },
      {
        "bold": "Şenlik Hazırlığı",
        "text": "Önümüzdeki hafta ilkokul mezuniyetimizi büyük şenlikle taçlandıracağız!"
      }
    ],
    "homework": "Oyununuzu sunarken aklınızda kalan küçük eksikleri tamamlayıp şenlik için hazır edin.",
    "nextWeekPreview": "Yıl Sonu Bilişim ve Kodlama Şenliği - İlkokul Mezuniyeti & Geleceğin Yazılımcısı Sertifika Töreni!"
  },
  {
    "week": 41,
    "date": "21 - 27 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yapay Zekâ, Doğa ve Geleceğin Bilişimi",
    "unitBadge": "Yıl Sonu Şenliği",
    "unitTheme": "unite-6",
    "title": "Yıl Sonu Bilişim ve Kodlama Şenliği",
    "subtitle": "İlkokul Mezuniyeti, Yıl Sonu Başarı Sertifikaları ve Geleceğe İlham",
    "outcomeCode": "BTY.4.6.6",
    "targetSkill": "Yıllık Başarıyı Kutlama & Ortaokula Geçiş Vizyonu",
    "curiosityQuestion": "Bugün 4. sınıftan mezun olan sizler, bundan 15 yıl sonra Türkiye'nin hangi milli uzay veya yapay zekâ projesine liderlik edeceksiniz?",
    "roadmap": [
      {
        "title": "Büyük Yolculuğun Zirvesi",
        "desc": "41 haftalık bilişim maratonunun gururla tamamlanması."
      },
      {
        "title": "Oyun İstasyonları",
        "desc": "Sınıfta kurulan istasyonlarda birbirimizin Scratch oyunlarını oynayıp puanlama."
      },
      {
        "title": "Başarı Sertifikaları",
        "desc": "'Geleceğin Bilişim Yıldızı' sertifikalarının törenle dağıtılması."
      },
      {
        "title": "5. Sınıfa Merhaba",
        "desc": "Ortaokulda bizi bekleyen ileri robotik, üç boyutlu tasarım ve Python maceralarına vizyoner bakış."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 450 320\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"450\" height=\"320\" rx=\"20\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n  <text x=\"225\" y=\"45\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"16\" font-weight=\"bold\">Yıl Sonu Bilişim Şenliği & Mezuniyet</text>\n\n  <g transform=\"translate(185, 75)\">\n    <circle cx=\"40\" cy=\"40\" r=\"38\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n    <text x=\"40\" y=\"50\" text-anchor=\"middle\" font-size=\"34\">🎓</text>\n  </g>\n\n  <rect x=\"50\" y=\"185\" width=\"350\" height=\"100\" rx=\"12\" fill=\"#312e81\" stroke=\"#818cf8\" stroke-width=\"1.5\"/>\n  <text x=\"225\" y=\"215\" text-anchor=\"middle\" fill=\"#c7d2fe\" font-size=\"14\" font-weight=\"bold\">🌟 Tebrikler İlkokul Bilişim Mezunları!</text>\n  <text x=\"225\" y=\"240\" text-anchor=\"middle\" fill=\"#cbd5e1\" font-size=\"11\">Artık kendi oyunlarını, afişlerini ve algoritmalarını yazan genç dâhilersiniz.</text>\n  <text x=\"225\" y=\"265\" text-anchor=\"middle\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">Ortaokulda (5. Sınıfta) Yeni Maceralar Bizi Bekliyor!</text>\n</svg>",
    "section1": {
      "title": "1 Yılda Neler Başardınız?",
      "subtitle": "Geriye dönüp baktığınızda birer teknoloji ustasına dönüştüğünüzü görün:",
      "cards": [
        {
          "title": "Bilişim Mezununun Gurur Tablosu",
          "icon": "🎓",
          "desc": "Artık sizler sıradan bir teknoloji kullanıcısı değilsiniz:",
          "items": [
            {
              "bold": "Donanım & Yazılım Ustası",
              "text": "Bilgisayarın tüm parçalarını ve milli sistemimiz Pardus'u öğrendiniz."
            },
            {
              "bold": "Siber Kalkan Sahibi",
              "text": "Güçlü şifre yapmayı, netiket kurallarını ve güvenli interneti benimsediniz."
            },
            {
              "bold": "Dijital Sanatçı",
              "text": "Afişler çizdiniz, biçimlendirilmiş masallar ve renkli sunumlar ürettiniz."
            },
            {
              "bold": "Oyun Geliştiricisi",
              "text": "Algoritmalar kurdunuz, döngülerle ve şartlarla kendi oyunlarınızı kodladınız!"
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "5. Sınıfta Bizi Neler Bekliyor?",
      "subtitle": "Ortaokula adım attığınızda bilişim serüveni daha da devleşecek:",
      "cards": [
        {
          "badge": "Ortaokul Düzeyi",
          "title": "İleri Robotik & Kodlama",
          "desc": "Sensörlerle çalışan akıllı robotlar, 3 boyutlu modelleme (Tinkercad) ve mobil uygulama geliştirme.",
          "items": [
            {
              "bold": "Gelecek",
              "text": "Teknofest yarışmalarına katılan takımlarda yer alabilirsiniz!"
            }
          ]
        },
        {
          "badge": "Yapay Zekâ",
          "title": "Yapay Zekâ Modelleri",
          "desc": "Kendi makine öğrenmesi modellerinizi eğitip konuşan akıllı asistanlar tasarlayacaksınız.",
          "items": [
            {
              "bold": "Vizyon",
              "text": "Türkiye Yüzyılı'nın öncü genç mühendisleri olacaksınız."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Bilişim Şenliği Festival Turnuvası",
      "subtitle": "Sınıfta en çok beğenilen 3 oyun akıllı tahtada final turnuvasına çıksın.",
      "steps": [
        {
          "title": "Turnuvayı Başlat",
          "desc": "Finalist oyunları sırayla akıllı tahtaya yansıtın."
        },
        {
          "title": "Rekor Puanlar",
          "desc": "Sınıf şampiyonunu belirlemek için 1'er dakikalık rekor denemeleri yapın."
        },
        {
          "title": "Sertifika Töreni",
          "desc": "Öğretmeninizden 'Geleceğin Kodlama Dâhisi' sertifikanızı alkışlarla teslim alın."
        }
      ],
      "criteria": [
        "Yıl boyunca gösterilen istikrar ve azim",
        "Arkadaşlarının başarılarını içtenlikle kutlama",
        "Bilişim kültürünü ve etik değerlerini gururla temsil etme"
      ]
    },
    "tips": {
      "safetyTitle": "Yaz Tatili Bilişim Tavsiyeleri",
      "safetyRules": [
        {
          "bold": "Kodlamayı Bırakmayın",
          "text": "Yaz tatilinde Scratch üzerinde yeni oyun fikirleri deneyin; öğrendiklerinizi pekiştirin."
        },
        {
          "bold": "Doğayla İç İçe Olun",
          "text": "Yaz boyunca yüzün, bisiklete binin, kitap okuyun ve doğayı keşfedin."
        },
        {
          "bold": "Hayal Kurmaktan Asla Vazgeçmeyin",
          "text": "En büyük icatlar bir çocuğun 'Acaba şöyle olsa nasıl olurdu?' hayaliyle başlar."
        }
      ],
      "myths": [
        {
          "wrong": "İlkokul bittiğinde bilişim dersi de biter.",
          "correct": "Bilişim hayat boyu süren, her meslekte karşınıza çıkacak en değerli süper güçtür!"
        },
        {
          "wrong": "Sadece dâhiler bilgisayar programcısı olabilir.",
          "correct": "Merak eden, çalışan ve pes etmeyen her çocuk harika bir yazılımcı olabilir."
        }
      ]
    },
    "quiz": {
      "question": "4. sınıf boyunca Bilişim Teknolojileri ve Yazılım dersinde öğrendiğimiz en değerli ilke hangisidir?",
      "options": [
        {
          "text": "A) Sadece sabahtan akşama kadar bilgisayarda oyun oynamak",
          "isCorrect": false
        },
        {
          "text": "B) Teknolojiyi tüketen değil; aklıyla, ahlakıyla ve bilgisiyle üreten birey olmak",
          "isCorrect": true
        },
        {
          "text": "C) Bütün şifreleri herkesle paylaşmak",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayara hiç dokunmamak",
          "isCorrect": false
        }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bilişim dersimizin en büyük hedefi; teknolojiyi sadece tüketen değil, vatanımıza ve insanlığa faydalı projeler üreten bireyler yetiştirmektir."
    },
    "summaryRules": [
      {
        "bold": "Yıl Sonu Gururu",
        "text": "41 haftalık MEB müfredatını eksiksiz ve başarıyla tamamladık."
      },
      {
        "bold": "Üreten Nesil",
        "text": "Artık her biriniz kendi oyunlarını ve projelerini yazan birer genç yazılımcısınız."
      },
      {
        "bold": "Yolunuz Açık Olsun",
        "text": "Ortaokulda ve hayatınızda başarılar dileriz; kodlamaya ve üretmeye devam!"
      }
    ],
    "homework": "Yaz tatilinde oynamak üzere kendi hayalinizdeki bir oyunun senaryosunu günlüğünüze yazın.",
    "nextWeekPreview": "Tebrikler! 4. Sınıf Bilişim Teknolojileri ve Yazılım Yıllık Programı Başarıyla Tamamlandı!"
  }
];
