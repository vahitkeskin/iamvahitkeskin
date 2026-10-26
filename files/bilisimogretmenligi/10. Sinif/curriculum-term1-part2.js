/**
 * MEB 10. Sınıf Bilgisayar Bilimi (Kur 2) - 1. Dönem 2. Kısım (Hafta 11 - 19)
 * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_PART2 = [
  {
    "week": 11,
    "date": "23 - 29 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Robotik ve Mikrodenetleyici Sistemleri",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Dijital Giriş/Çıkış & Buton ile LED Kontrolü",
    "subtitle": "GPIO Pinleri, pinMode(), digitalRead(), digitalWrite(), Pull-up / Pull-down Direnç Mantığı ve Buton Sıçraması (Debouncing)",
    "outcomeCode": "BB.10.2.3",
    "targetSkill": "Dijital Giriş/Çıkış Devreleri & Mantıksal Anahtarlama",
    "curiosityQuestion": "Bir butona bastığınızda mikrodenetleyici bunu saniyede binlerce kez okurken 'tek basış' olduğunu nasıl anlar?",
    "roadmap": [
      {
        "title": "GPIO Nedir?",
        "desc": "Genel Amaçlı Giriş/Çıkış pinlerinin voltaj seviyeleri (HIGH: 5V/3.3V, LOW: 0V)."
      },
      {
        "title": "Dahili & Harici Pull-Up",
        "desc": "Pin boşta kaldığında voltajın yüzmesini (floating) önleyen direnç mekanizması."
      },
      {
        "title": "Buton Durum Kontrolü",
        "desc": "`digitalRead()` fonksiyonuyla butona basılıp basılmadığını denetleme."
      },
      {
        "title": "Mekanik Sıçrama (Debounce)",
        "desc": "Metal kontakların temas anındaki elektriksel parazitleri yazılımla filtreleme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n      <rect x=\"30\" y=\"30\" width=\"160\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"110\" y=\"55\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#f59e0b\">Dahili PULL-UP Devresi</text>\n      <circle cx=\"60\" cy=\"85\" r=\"5\" fill=\"#ef4444\"/>\n      <text x=\"75\" y=\"89\" font-size=\"11\" fill=\"#ffffff\">+5V (VCC)</text>\n      <path d=\"M 60 90 L 60 105\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n      <rect x=\"52\" y=\"105\" width=\"16\" height=\"25\" rx=\"3\" fill=\"#d97706\"/>\n      <text x=\"115\" y=\"122\" font-size=\"10\" font-family=\"monospace\" fill=\"#fbbf24\">20k-50kΩ</text>\n      <circle cx=\"150\" cy=\"120\" r=\"5\" fill=\"#38bdf8\"/>\n      <text x=\"140\" y=\"105\" font-size=\"10\" fill=\"#38bdf8\">Pin (D2)</text>\n      <line x1=\"60\" y1=\"130\" x2=\"150\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n      \n      <g transform=\"translate(220, 30)\">\n        <rect width=\"170\" height=\"110\" rx=\"8\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"2\"/>\n        <text x=\"85\" y=\"25\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#34d399\">Buton Durumları</text>\n        <text x=\"15\" y=\"55\" font-size=\"11\" fill=\"#cbd5e1\">Basılmadığında:</text>\n        <text x=\"120\" y=\"55\" font-size=\"11\" font-weight=\"bold\" fill=\"#ef4444\">HIGH (1)</text>\n        <text x=\"15\" y=\"85\" font-size=\"11\" fill=\"#cbd5e1\">Basıldığında (GND):</text>\n        <text x=\"120\" y=\"85\" font-size=\"11\" font-weight=\"bold\" fill=\"#10b981\">LOW (0)</text>\n      </g>\n      \n      <rect x=\"30\" y=\"160\" width=\"360\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#6366f1\" stroke-width=\"1.5\"/>\n      <text x=\"210\" y=\"185\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#818cf8\">Debounce (Sıçrama Giderme) Mantığı</text>\n      <path d=\"M 50 230 L 80 230 L 85 205 L 90 230 L 95 205 L 100 230 L 140 230\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n      <text x=\"95\" y=\"250\" text-anchor=\"middle\" font-size=\"9\" fill=\"#fca5a5\">Parazitli Sinyal</text>\n      <line x1=\"160\" y1=\"215\" x2=\"200\" y2=\"215\" stroke=\"#f59e0b\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n      <path d=\"M 220 230 L 250 230 L 250 205 L 340 205\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n      <text x=\"290\" y=\"250\" text-anchor=\"middle\" font-size=\"9\" fill=\"#86efac\">Temizlenmiş Sinyal (50ms Gecikme)</text>\n    </svg>",
    "section1": {
      "title": "Dijital Giriş ve Floating Pin Problemi",
      "subtitle": "Mikrodenetleyicilerde kararlı 0V ve 5V okuma prensipleri",
      "cards": [
        {
          "title": "Floating (Yüzen) Pin Nedir?",
          "icon": "⚡",
          "desc": "Bir giriş pini ne 5V'a ne de GND'ye bağlıysa havadaki elektrostatik gürültüden etkilenip rastgele 0 ve 1 üretir.",
          "items": [
            {
              "bold": "Çözüm: Pull-up Direnci",
              "text": "Pini bir dirençle 5V'a bağlayarak boştayken kararlı HIGH seviyesinde tutar."
            },
            {
              "bold": "pinMode(pin, INPUT_PULLUP)",
              "text": "Arduino'nun içindeki dahili 20kΩ direnci aktif eder; harici dirence gerek kalmaz."
            },
            {
              "bold": "Ters Mantık (Active-Low)",
              "text": "INPUT_PULLUP modunda butona basıldığında pin GND ile birleşir ve `digitalRead()` LOW (0) verir."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Buton ile LED Yakma & Toggle Mantığı",
      "subtitle": "Butona her basıldığında LED'in durumunu tersine çeviren profesyonel kod",
      "codeSnippet": "const int BUTON_PIN = 2;\nconst int LED_PIN = 13;\n\nint ledDurumu = LOW;\nint sonButonDurumu = HIGH;\nunsigned long sonZaman = 0;\nconst unsigned long debounceGecikmesi = 50; // 50 milisaniye\n\nvoid setup() {\n  pinMode(BUTON_PIN, INPUT_PULLUP);\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  int okunan = digitalRead(BUTON_PIN);\n  if (okunan != sonButonDurumu) {\n    sonZaman = millis(); // Buton durumu değiştiyse zamanı sıfırla\n  }\n  if ((millis() - sonZaman) > debounceGecikmesi) {\n    if (okunan == LOW) { // Butona basıldıysa\n      ledDurumu = !ledDurumu;\n      digitalWrite(LED_PIN, ledDurumu);\n    }\n  }\n  sonButonDurumu = okunan;\n}",
      "codeTitle": "buton_toggle_debounce.ino",
      "codeLang": "C++ / Arduino",
      "cards": [
        {
          "badge": "Algoritma",
          "title": "Toggle (Aç/Kapa) Mantığı",
          "desc": "`ledDurumu = !ledDurumu;` ifadesi açık olan LED'i kapatır, kapalı olanı açar.",
          "items": [
            {
              "bold": "millis() vs delay()",
              "text": "delay() işlemciyi dondururken, millis() zaman sayacı arkada akmaya devam eder."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "INPUT_PULLUP ile Buton Kontrollü Güvenlik Kilidi",
      "subtitle": "Breadboard üzerinde 2 buton ve 1 kırmızı, 1 yeşil LED ile şifreli açma-kapama devresi kurma",
      "steps": [
        {
          "title": "1. Devreyi Kur",
          "desc": "Pin 2 ve Pin 3'e birer buton bağlayın (diğer bacakları doğrudan GND'ye)."
        },
        {
          "title": "2. LED'leri Bağla",
          "desc": "Pin 11 (Kırmızı) ve Pin 12 (Yeşil) 220Ω dirençlerle GND'ye bağlansın."
        },
        {
          "title": "3. Kodu Yükle",
          "desc": "1. butona basılınca Yeşil yansın, 2. butona basılınca Kırmızı yansın."
        },
        {
          "title": "4. Serial Monitor Aç",
          "desc": "`Serial.println(\"Kilit Açıldı\")` gibi durum loglarını takip edin."
        }
      ],
      "criteria": [
        "INPUT_PULLUP modunun elektriksel mantığını eksiksiz uygulama",
        "Breadboard üzerinde kısa devre yapmadan temiz kablolama",
        "Debounce mantığıyla buton okuma güvenilirliğini sağlama"
      ]
    },
    "tips": {
      "safetyTitle": "GPIO ve Kısa Devre Önlemleri",
      "safetyRules": [
        {
          "bold": "OUTPUT Olarak Tanımlı Pini GND'ye Doğrudan Bağlamayın",
          "text": "HIGH iken GND'ye değerse aşırı akım çekilir ve mikrodenetleyicinin o pini kalıcı olarak yanar."
        },
        {
          "bold": "Maksimum Akım Limiti",
          "text": "Bir Arduino pini en fazla 20mA akım verebilir; fazlası için transistör veya röle kullanın."
        },
        {
          "bold": "Devreyi Kurarken Gücü Kesin",
          "text": "Kabloları takıp çıkarırken USB kablosunu bilgisayardan çıkarın."
        }
      ],
      "myths": [
        {
          "wrong": "Butonun bir bacağını 5V'a, diğerini doğrudan pine bağlarsak harika çalışır.",
          "correct": "Buton bırakıldığında pin boşta kalır (floating) ve devre parazitlerle kafayı yer; mutlaka pull-up/down gerekir."
        },
        {
          "wrong": "Her dijital pin aynı zamanda analog okuma yapabilir.",
          "correct": "Sadece üzerinde 'A' harfi olan (A0-A5) pinler dahili ADC donanımıyla analog gerilim okuyabilir."
        }
      ]
    },
    "quiz": {
      "question": "Arduino'da `pinMode(2, INPUT_PULLUP);` komutu verildiğinde ve butona basılmadığında `digitalRead(2)` hangi değeri döner?",
      "options": [
        {
          "text": "A) LOW (0)",
          "isCorrect": false
        },
        {
          "text": "B) HIGH (1)",
          "isCorrect": true
        },
        {
          "text": "C) 2.5V (Belirsiz)",
          "isCorrect": false
        },
        {
          "text": "D) -1 (Hata)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Dahili Pull-up direnci pini VCC (+5V) hattına çektiği için buton basılı değilken pin HIGH (1) okunur; basıldığında GND'ye çekilip LOW (0) olur."
    },
    "summary": {
      "keyPoints": [
        "GPIO pinleri dijital dünyada 0 ve 1 sinyalleriyle konuşur.",
        "Boşta kalan giriş pinleri parazit üretir, bu yüzden Pull-up veya Pull-down direnç zorunludur.",
        "Mekanik butonlardaki sıçramalar yazılımsal debounce filtreleriyle engellenir."
      ],
      "nextWeek": "Analog Sinyaller & PWM ile RGB LED ve Potansiyometre Kontrolü",
      "homework": "Tinkercad üzerinde INPUT_PULLUP kullanarak iki butonlu bir trafik ışığı simülasyonu tasarlayınız."
    }
  },
  {
    "week": 12,
    "date": "30 Kasım - 06 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Robotik ve Mikrodenetleyici Sistemleri",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Analog Sinyaller & PWM ile RGB LED Kontrolü",
    "subtitle": "ADC (Analog-Dijital Çevirici), 10-bit Çözünürlük, analogRead(), PWM (Darbe Genişlik Modülasyonu), analogWrite() ve map() Fonksiyonu",
    "outcomeCode": "BB.10.2.4",
    "targetSkill": "Analog Veri İşleme & PWM Sinyal Modülasyonu",
    "curiosityQuestion": "Mikrodenetleyiciler sadece 0V ve 5V üretebildiği halde bir LED'in parlaklığını veya bir motorun hızını nasıl kademeli olarak değiştirebilir?",
    "roadmap": [
      {
        "title": "Analog Dünya vs Dijital Dünya",
        "desc": "Gerçek hayattaki sürekli voltaj (0-5V) ile 0/1 arasındaki fark."
      },
      {
        "title": "ADC ve 10-bit Çözünürlük",
        "desc": "`analogRead()`: 0V - 5V aralığını 0 ile 1023 arasındaki tamsayılara bölme."
      },
      {
        "title": "PWM (Pulse Width Modulation)",
        "desc": "Saniyede 490 kez aç-kapa yaparak ortalama gerilimi değiştirme (Duty Cycle)."
      },
      {
        "title": "RGB LED & Renk Karışımı",
        "desc": "Kırmızı, Yeşil ve Mavi PWM oranlarıyla 16 milyon renk sentezleme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(0, 240, 255, 0.3)\" stroke-width=\"2\"/>\n      <rect x=\"25\" y=\"25\" width=\"370\" height=\"120\" rx=\"8\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"1.5\"/>\n      <text x=\"210\" y=\"48\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#00f0ff\">PWM (Darbe Genişlik Modülasyonu) Dalga Formları</text>\n      \n      <!-- %25 Duty Cycle -->\n      <text x=\"35\" y=\"78\" font-size=\"10\" fill=\"#94a3b8\">%25 PWM (1.25V):</text>\n      <path d=\"M 130 80 L 150 80 L 150 60 L 160 60 L 160 80 L 200 80 L 200 60 L 210 60 L 210 80\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      \n      <!-- %50 Duty Cycle -->\n      <text x=\"35\" y=\"105\" font-size=\"10\" fill=\"#94a3b8\">%50 PWM (2.50V):</text>\n      <path d=\"M 130 110 L 145 110 L 145 90 L 165 90 L 165 110 L 185 110 L 185 90 L 205 90 L 205 110\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n      \n      <!-- %75 Duty Cycle -->\n      <text x=\"35\" y=\"132\" font-size=\"10\" fill=\"#94a3b8\">%75 PWM (3.75V):</text>\n      <path d=\"M 130 135 L 140 135 L 140 118 L 170 118 L 170 135 L 180 135 L 180 118 L 210 118 L 210 135\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/>\n\n      <g transform=\"translate(25, 160)\">\n        <rect width=\"175\" height=\"115\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        <text x=\"87\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\">Potansiyometre (ADC)</text>\n        <text x=\"15\" y=\"50\" font-size=\"9\" fill=\"#cbd5e1\">Giriş: 0V - 5V</text>\n        <text x=\"15\" y=\"70\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">analogRead(A0) -> 0..1023</text>\n        <text x=\"15\" y=\"92\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">map(val, 0, 1023, 0, 255)</text>\n      </g>\n      \n      <g transform=\"translate(220, 160)\">\n        <rect width=\"175\" height=\"115\" rx=\"8\" fill=\"#1e293b\" stroke=\"#ec4899\" stroke-width=\"1.5\"/>\n        <text x=\"87\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#f472b6\">RGB LED (Ortak Katot)</text>\n        <circle cx=\"50\" cy=\"55\" r=\"10\" fill=\"#ef4444\"/><text x=\"70\" y=\"59\" font-size=\"9\" fill=\"#ffffff\">Red (D9 ~)</text>\n        <circle cx=\"50\" cy=\"78\" r=\"10\" fill=\"#10b981\"/><text x=\"70\" y=\"82\" font-size=\"9\" fill=\"#ffffff\">Green (D10 ~)</text>\n        <circle cx=\"50\" cy=\"101\" r=\"10\" fill=\"#3b82f6\"/><text x=\"70\" y=\"105\" font-size=\"9\" fill=\"#ffffff\">Blue (D11 ~)</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "analogRead() vs analogWrite() Çözünürlükleri",
      "subtitle": "10-bit Giriş ile 8-bit Çıkış arasındaki ölçekleme sanatı",
      "cards": [
        {
          "title": "1024 Adımdan 256 Adıma Dönüşüm",
          "icon": "🎛️",
          "desc": "Arduino'nun analog giriş kanalı 10-bit (0-1023), PWM çıkış kanalı ise 8-bit (0-255) çözünürlüğe sahiptir.",
          "items": [
            {
              "bold": "analogRead(A0)",
              "text": "0V için 0, 2.5V için 512, 5V için 1023 değerini döndürür."
            },
            {
              "bold": "analogWrite(pin, deger)",
              "text": "Yalnızca yanında '~' simgesi olan PWM pinlerinde (3, 5, 6, 9, 10, 11) 0-255 arası çalışır."
            },
            {
              "bold": "map() Fonksiyonu",
              "text": "`y = map(x, 0, 1023, 0, 255);` formülü matematiksel oran-orantıyı tek satırda çözer."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Potansiyometre ile RGB LED Renk Mikseri",
      "subtitle": "A0'dan okunan analog veriyi PWM ile 3 renk kanalına yansıtma",
      "codeSnippet": "const int POT_PIN = A0;\nconst int KIRMIZI = 9;  // PWM pini (~)\nconst int YESIL = 10;   // PWM pini (~)\nconst int MAVI = 11;    // PWM pini (~)\n\nvoid setup() {\n  pinMode(KIRMIZI, OUTPUT);\n  pinMode(YESIL, OUTPUT);\n  pinMode(MAVI, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int hamDeger = analogRead(POT_PIN); // 0 - 1023\n  int parlaklik = map(hamDeger, 0, 1023, 0, 255); // 0 - 255\n  \n  analogWrite(KIRMIZI, parlaklik);\n  analogWrite(YESIL, 255 - parlaklik);\n  analogWrite(MAVI, 128);\n  \n  Serial.print(\"Ham: \"); Serial.print(hamDeger);\n  Serial.print(\" -> PWM: \"); Serial.println(parlaklik);\n  delay(30);\n}",
      "codeTitle": "rgb_pwm_mixer.ino",
      "codeLang": "C++ / Arduino",
      "cards": [
        {
          "badge": "Fiziksel İlke",
          "title": "Göz Aldatmacası (Persist of Vision)",
          "desc": "LED saniyede 500 kez yanıp söner; insan gözü bu frekansı yakalayamaz ve LED'i kısık yanıyormuş gibi algılar.",
          "items": [
            {
              "bold": "Ortak Anot vs Ortak Katot",
              "text": "Katot devrede eksi ucu (GND) ortaktır; 255 tam parlaklık verir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Masa Lambası Tasarımı (Potansiyometreli Dimmer)",
      "subtitle": "Potansiyometre çevrildikçe LED parlaklığını sıfırdan maksimuma kademeli artıran dimmer devresi",
      "steps": [
        {
          "title": "1. Potansiyometreyi Bağla",
          "desc": "Dış bacakları 5V ve GND'ye, orta sinyal bacağını A0 pinine takın."
        },
        {
          "title": "2. PWM LED Bağla",
          "desc": "LED'in anodu 220Ω direnç üzerinden Pin 9'a (~), katodu GND'ye bağlansın."
        },
        {
          "title": "3. Serial Plotter Aç",
          "desc": "Arduino IDE'den `Araçlar > Seri Çizici`yi açarak potansiyometre dalga şeklini canlı izleyin."
        },
        {
          "title": "4. Ters Çalıştır",
          "desc": "`map(deger, 0, 1023, 255, 0)` yaparak saat yönünde çevirince sönmesini deneyin."
        }
      ],
      "criteria": [
        "Potansiyometrenin gerilim bölücü mantığını şematik olarak kavrama",
        "PWM pinlerini diğer standart dijital pinlerden ayırt edebilme",
        "map() dönüşüm aralıklarını matematiksel olarak hatasız kurgulama"
      ]
    },
    "tips": {
      "safetyTitle": "Analog Pin & PWM Sınırları",
      "safetyRules": [
        {
          "bold": "Analog Pinlere Asla 5V Üzerinde Gerilim Vermeyin",
          "text": "ADC girişine 5V'tan yüksek voltaj gelirse mikrodenetleyicinin analog modülü kalıcı hasar görür."
        },
        {
          "bold": "RGB LED'in Her Rengine Ayrı Direnç Takın",
          "text": "Kırmızı, Yeşil ve Mavi kristallerinin ileri gerilimleri (Vf) farklıdır; tek direnç paylaşılırsa renkler bozulur."
        },
        {
          "bold": "analogWrite() Sadece PWM Pinlerinde Çalışır",
          "text": "Pin 2 veya 4 gibi PWM olmayan bir pine `analogWrite(2, 100)` yazarsanız devre sadece HIGH veya LOW yapar."
        }
      ],
      "myths": [
        {
          "wrong": "analogWrite() pinden gerçekten 2.5V gibi sürekli analog voltaj çıkartır.",
          "correct": "Hayır! Arduino gerçek DAC (Dijital-Analog Çevirici) içermez; 0V ve 5V arasında yüksek hızda kare dalga açıp kapatır."
        },
        {
          "wrong": "analogRead() için `pinMode(A0, INPUT)` yazmak zorunludur.",
          "correct": "Analog pinler varsayılan olarak zaten analog giriştir; `pinMode` şart değildir ama kod okunurluğu için yazılabilir."
        }
      ]
    },
    "quiz": {
      "question": "Arduino'da `analogRead(A0)` komutu 512 değerini okuduğunda, A0 pinine uygulanan gerçek fiziksel voltaj yaklaşık kaç volttur?",
      "options": [
        {
          "text": "A) 1.25 V",
          "isCorrect": false
        },
        {
          "text": "B) 2.50 V",
          "isCorrect": true
        },
        {
          "text": "C) 3.30 V",
          "isCorrect": false
        },
        {
          "text": "D) 5.00 V",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. 10-bit ADC 0V'u 0, 5V'u 1023 olarak kodlar. 512 değeri tam orta nokta olduğundan (512 / 1023) * 5V ≈ 2.50 Volt'a karşılık gelir."
    },
    "summary": {
      "keyPoints": [
        "Gerçek dünya analogdur (ışık, ısı, ses); mikrodenetleyiciler ADC ile bunu dijitale çevirir.",
        "PWM (Darbe Genişlik Modülasyonu) gerilimi değil, sinyalin açık kalma süresi oranını (Duty Cycle) değiştirir.",
        "map() fonksiyonu giriş ve çıkış aralıklarını birbirine ölçekler."
      ],
      "nextWeek": "Çevre Algılama: Sensörler (HC-SR04 Ultrasonik, LDR Işık, DHT11 Isı-Nem)",
      "homework": "Tinkercad üzerinde RGB LED'in 3 rengini 3 ayrı potansiyometre ile yöneten bir renk stüdyosu kurunuz."
    }
  },
  {
    "week": 13,
    "date": "07 - 13 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Robotik ve Mikrodenetleyici Sistemleri",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Çevre Algılama: Sensörler & HC-SR04 Mesafe Sensörü",
    "subtitle": "Sensör Tipleri (Dijital, Analog, Protokollü), HC-SR04 Ultrasonik Radar, LDR Işık Sensörü, DHT11 Sıcaklık/Nem ve pulseIn() Mantığı",
    "outcomeCode": "BB.10.2.5",
    "targetSkill": "Sensör Verisi Toplama & Çevresel Algılama",
    "curiosityQuestion": "Yarasalar zifiri karanlık mağaralarda hiçbir yere çarpmadan nasıl uçar ve ultrasonik sensörler bu prensibi nasıl taklit eder?",
    "roadmap": [
      {
        "title": "Sensör Sınıflandırması",
        "desc": "Analog sensörler (LDR, NTC) vs Dijital/Zaman tabanlı sensörler (HC-SR04, DHT11)."
      },
      {
        "title": "HC-SR04 Ultrasonik Mantığı",
        "desc": "Trigger bacağından 40 kHz ses dalgası fırlatma ve Echo bacağında yankıyı bekleme."
      },
      {
        "title": "Ses Hızı & Mesafe Hesabı",
        "desc": "`pulseIn()` ile mikrosaniye cinsinden ölçülen süreyi santimetreye çevirme."
      },
      {
        "title": "LDR ile Işığa Duyarlı Sistemler",
        "desc": "Foto-direnç yardımıyla ortam karanlıklaşınca devreye giren sokak lambası modeli."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(16, 185, 129, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"40\" y=\"50\" width=\"130\" height=\"80\" rx=\"8\" fill=\"#1e3a8a\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n          <circle cx=\"75\" cy=\"90\" r=\"22\" fill=\"#94a3b8\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n          <text x=\"75\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#0f172a\">TRIGGER</text>\n          <circle cx=\"135\" cy=\"90\" r=\"22\" fill=\"#94a3b8\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n          <text x=\"135\" y=\"93\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#0f172a\">ECHO</text>\n          <text x=\"105\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\">HC-SR04</text>\n          \n          <path d=\"M 175 80 Q 210 90 240 70\" fill=\"none\" stroke=\"#00f0ff\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n          <path d=\"M 185 90 Q 220 100 250 80\" fill=\"none\" stroke=\"#00f0ff\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n          \n          <rect x=\"280\" y=\"45\" width=\"40\" height=\"90\" rx=\"4\" fill=\"#ef4444\" stroke=\"#ffffff\"/>\n          <text x=\"300\" y=\"95\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\">ENGEL</text>\n          \n          <rect x=\"40\" y=\"160\" width=\"340\" height=\"100\" rx=\"8\" fill=\"#162038\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <text x=\"210\" y=\"185\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">Ses Hızı ve Mesafe Formülü</text>\n          <text x=\"210\" y=\"212\" text-anchor=\"middle\" font-size=\"13\" font-family=\"monospace\" fill=\"#ffffff\">Mesafe = (Süre / 2) * 0.0343 cm/µs</text>\n          <text x=\"210\" y=\"235\" text-anchor=\"middle\" font-size=\"10\" fill=\"#cbd5e1\">Ses gidip döndüğü için toplam süre 2'ye bölünür.</text>\n        </svg>",
    "section1": {
      "title": "HC-SR04 Ultrasonik Mesafe Ölçüm Felsefesi",
      "subtitle": "İnsan kulağının duyamayacağı 40kHz ses patlaması ile sonar teknolojisi",
      "cards": [
        {
          "title": "Trigger & Echo Çalışma Aşamaları",
          "icon": "📡",
          "desc": "Yarasaların ekolokasyon yönteminin modern robotikteki karşılığıdır.",
          "items": [
            {
              "bold": "1. Tetikleme (Trigger)",
              "text": "Trig pinine 10 mikrosaniyelik HIGH darbesi verilir; sensör 8 adet ses dalgası yayar."
            },
            {
              "bold": "2. Dinleme (Echo)",
              "text": "Ses engele çarpıp dönene kadar Echo pini HIGH kalır; `pulseIn(ECHO, HIGH)` bu süreyi ölçer."
            },
            {
              "bold": "3. Matematiksel Formül",
              "text": "Ses havadaki hızı 343 m/s = 0.0343 cm/µs. Mesafe = (Süre / 2) * 0.0343 cm."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "HC-SR04 ile Park Sensörü ve Radar Sistemi",
      "subtitle": "Engel mesafesine göre Buzzer bip frekansını artıran C++ kodu",
      "codeSnippet": "const int TRIG_PIN = 7;\nconst int ECHO_PIN = 8;\nconst int BUZZER_PIN = 9;\n\nvoid setup() {\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n  pinMode(BUZZER_PIN, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  // 10µs tetikleme darbesi\n  digitalWrite(TRIG_PIN, LOW); delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n  \n  long sure = pulseIn(ECHO_PIN, HIGH);\n  float mesafe = (sure / 2.0) * 0.0343; // cm cinsinden\n  \n  Serial.print(\"Mesafe: \"); Serial.print(mesafe); Serial.println(\" cm\");\n  \n  if (mesafe > 0 && mesafe < 15) { // 15 cm'den yakınsa kesintisiz öt\n    digitalWrite(BUZZER_PIN, HIGH);\n  } else if (mesafe >= 15 && mesafe < 50) { // Yaklaştıkça hızlı öt\n    digitalWrite(BUZZER_PIN, HIGH); delay(mesafe * 10);\n    digitalWrite(BUZZER_PIN, LOW); delay(mesafe * 10);\n  } else {\n    digitalWrite(BUZZER_PIN, LOW);\n  }\n  delay(50);\n}",
      "codeTitle": "ultrasonik_park_sensoru.ino",
      "codeLang": "C++ / Arduino",
      "cards": [
        {
          "badge": "Sınır Durum",
          "title": "Ölçüm Menzili & Kör Nokta",
          "desc": "HC-SR04 sensörü 2 cm ile 400 cm arasında ölçüm yapar; 2 cm'den yakın nesneler kör noktada kalır.",
          "items": [
            {
              "bold": "Yankı Alamama (Timeout)",
              "text": "Ses engelden sekmezse pulseIn fonksiyonu varsayılan 1 saniye bekler; gecikmeyi önlemek için timeout girilebilir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Otonom Araçlar İçin Çarpışma Önleyici Radar",
      "subtitle": "Breadboard üzerinde HC-SR04, Buzzer ve Kırmızı/Sarı/Yeşil LED'lerle araç park mesafe ikaz sistemi yapma",
      "steps": [
        {
          "title": "1. HC-SR04 Bağla",
          "desc": "VCC -> 5V, GND -> GND, Trig -> Pin 7, Echo -> Pin 8."
        },
        {
          "title": "2. LED İkazı Kur",
          "desc": ">50cm Yeşil, 20-50cm Sarı, <20cm Kırmızı LED yansın."
        },
        {
          "title": "3. Sesli Uyarı Ekle",
          "desc": "Mesafe kısaldıkça Buzzer'ın bip aralığını kısaltarak frekansı artırın."
        },
        {
          "title": "4. Kitapla Test Et",
          "desc": "Sensörün önüne sert bir kitap koyup mesafeyi santimetre cetveliyle doğrulayın."
        }
      ],
      "criteria": [
        "pulseIn() zaman ölçümünü fiziksel ses hızına hatasız dönüştürme",
        "Sensör sınır değerlerini (min 2cm, max 400cm) kodda güvenli filtreleme",
        "Görsel ve işitsel uyarı mekanizmalarını doğru senkronize etme"
      ]
    },
    "tips": {
      "safetyTitle": "Sensör Hataları ve Doğruluk",
      "safetyRules": [
        {
          "bold": "Kumaş ve Sünger Gibi Yutucu Yüzeyler",
          "text": "Yumuşak yüzeyler ultrasonik sesi soğurur, yankı geri dönmez ve mesafe ölçülemez."
        },
        {
          "bold": "Açılı Yüzeyler Sesi Başka Yöne Saptırır",
          "text": "Sensöre 45 derece eğik duran bir yüzeyden ses sekip başka yöne gider; sensör cismi göremez."
        },
        {
          "bold": "Sıcaklığın Ses Hızına Etkisi",
          "text": "Havadaki ses hızı sıcaklıkla değişir (331.3 + 0.606 * T). Hassas projelerde DHT11 ile ses hızı kalibre edilir."
        }
      ],
      "myths": [
        {
          "wrong": "HC-SR04 kızılötesi lazer ışığıyla mesafe ölçer.",
          "correct": "Hayır! HC-SR04 mekanik ses dalgası kullanır; optik lazer sensörler VL53L0X gibi ToF (Time-of-Flight) sensörleridir."
        },
        {
          "wrong": "Sensör önündeki cismin rengini algılayabilir.",
          "correct": "Ses dalgaları cismin renginden etkilenmez, sadece geometrisi ve yüzey sertliği önemlidir."
        }
      ]
    },
    "quiz": {
      "question": "HC-SR04 sensörüyle yapılan ölçümde `pulseIn(ECHO, HIGH)` süresi 2000 mikrosaniye çıkmıştır. Ses hızı 0.0343 cm/µs kabul edilirse engelin mesafesi kaç santimetredir?",
      "options": [
        {
          "text": "A) 68.6 cm",
          "isCorrect": false
        },
        {
          "text": "B) 34.3 cm",
          "isCorrect": true
        },
        {
          "text": "C) 17.15 cm",
          "isCorrect": false
        },
        {
          "text": "D) 100 cm",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Ses engele gidip tekrar geri döndüğü için süre 2'ye bölünür: 2000 / 2 = 1000 µs. Mesafe = 1000 * 0.0343 = 34.3 cm."
    },
    "summary": {
      "keyPoints": [
        "Sensörler robotların gözü ve kulağıdır; fiziksel büyüklükleri elektriksel sinyale dönüştürür.",
        "HC-SR04 ekolokasyon (sonar) mantığıyla çalışır ve sesin yankılanma süresini hesaplar.",
        "pulseIn() fonksiyonu mikrodenetleyicilerde mikrosaniye seviyesinde zaman ölçümü sağlar."
      ],
      "nextWeek": "Aktüatörler: Servo Motor, Röle & Buzzer ile Akıllı Kontrol Sistemleri",
      "homework": "LDR (Işık sensörü) kullanarak havanın kararmasını algılayıp LED'i yakan otomatik gece lambası devresini tasarlayınız."
    }
  },
  {
    "week": 14,
    "date": "14 - 20 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Robotik ve Mikrodenetleyici Sistemleri",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Aktüatörler: Servo Motor, Röle & Mekanik Eyleyiciler",
    "subtitle": "Eyleyici (Aktüatör) Kavramı, Servo Motor Açısı (0°-180°), Servo.h Kütüphanesi, Röle ile 220V Şebeke Kontrolü ve Manyetik İndüksiyon",
    "outcomeCode": "BB.10.2.6",
    "targetSkill": "Fiziksel Eyleyiciler & Mekanik Güç Yönetimi",
    "curiosityQuestion": "Bir mikrodenetleyicinin minicik 5V ve 20mA gücüyle evimizdeki 220V'luk bir avize veya devasa bir fabrika motoru nasıl güvenle açılıp kapatılır?",
    "roadmap": [
      {
        "title": "Aktüatör Nedir?",
        "desc": "Sensörün aldığı kararı fiziksel harekete, sese veya güce çeviren eyleyici elemanlar."
      },
      {
        "title": "SG90 Servo Motor Mimarisi",
        "desc": "İçindeki DC motor, dişli kutusu ve potansiyometre geri bildirimiyle istenen açıya (0-180°) kilitlenme."
      },
      {
        "title": "Röle (Relay) Çalışma Mantığı",
        "desc": "Elektromıknatıs yardımıyla düşük voltajla yüksek voltajı izole eden mekanik anahtar."
      },
      {
        "title": "Güvenlik & Harici Besleme",
        "desc": "Motorların anlık çektiği yüksek akımı mikrodenetleyiciden değil harici pilden/adaptörden besleme kuralı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Servo Motor Şematiği -->\n      <g transform=\"translate(30, 30)\">\n        <rect width=\"165\" height=\"110\" rx=\"8\" fill=\"#1e3a8a\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        <text x=\"82\" y=\"25\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#ffffff\">SG90 Servo Motor</text>\n        <circle cx=\"82\" cy=\"65\" r=\"24\" fill=\"#0f172a\" stroke=\"#60a5fa\" stroke-width=\"2\"/>\n        <line x1=\"82\" y1=\"65\" x2=\"100\" y2=\"50\" stroke=\"#f59e0b\" stroke-width=\"3\"/>\n        <text x=\"82\" y=\"102\" text-anchor=\"middle\" font-size=\"9\" fill=\"#93c5fd\">0° - 180° Hassas Açı</text>\n        <!-- 3 Kablo -->\n        <circle cx=\"20\" cy=\"95\" r=\"4\" fill=\"#78350f\"/><text x=\"28\" y=\"98\" font-size=\"8\" fill=\"#ffffff\">GND</text>\n        <circle cx=\"20\" cy=\"75\" r=\"4\" fill=\"#ef4444\"/><text x=\"28\" y=\"78\" font-size=\"8\" fill=\"#ffffff\">VCC (5V)</text>\n        <circle cx=\"20\" cy=\"55\" r=\"4\" fill=\"#f59e0b\"/><text x=\"28\" y=\"58\" font-size=\"8\" fill=\"#ffffff\">Sinyal (PWM)</text>\n      </g>\n      \n      <!-- Röle Şematiği -->\n      <g transform=\"translate(225, 30)\">\n        <rect width=\"165\" height=\"110\" rx=\"8\" fill=\"#064e3b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n        <text x=\"82\" y=\"25\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#ffffff\">Röle Modülü (Optoizole)</text>\n        <rect x=\"25\" y=\"45\" width=\"40\" height=\"50\" rx=\"4\" fill=\"#047857\"/>\n        <text x=\"45\" y=\"73\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#ffffff\">BOBİN</text>\n        <text x=\"110\" y=\"55\" font-size=\"9\" fill=\"#a7f3d0\">COM (Ortak)</text>\n        <text x=\"110\" y=\"75\" font-size=\"9\" fill=\"#a7f3d0\">NO (Açık Kontak)</text>\n        <text x=\"110\" y=\"95\" font-size=\"9\" fill=\"#a7f3d0\">NC (Kapalı)</text>\n      </g>\n      \n      <!-- Galvanik İzolasyon Açıklaması -->\n      <rect x=\"30\" y=\"160\" width=\"360\" height=\"110\" rx=\"8\" fill=\"#1e1b4b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n      <text x=\"210\" y=\"185\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">Optokuplör &amp; Galvanik İzolasyon</text>\n      <text x=\"45\" y=\"210\" font-size=\"10\" fill=\"#cbd5e1\">Mikrodenetleyici 5V tarafı ile 220V AC şebeke tarafı arasında hiçbir fiziksel</text>\n      <text x=\"45\" y=\"228\" font-size=\"10\" fill=\"#cbd5e1\">elektriksel temas yoktur. Komut ışık (foton) veya manyetik alanla aktarılır.</text>\n      <text x=\"210\" y=\"255\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Robotik Sistem = Beyin (MCU) + Kaslar (Aktüatörler)</text>\n    </svg>",
    "section1": {
      "title": "Servo Motor vs Step Motor vs DC Motor",
      "subtitle": "Robotik eklemlerde hangi eyleyici ne zaman tercih edilir?",
      "cards": [
        {
          "title": "SG90 ve MG996R Servo Mekanizması",
          "icon": "🦾",
          "desc": "Belirli bir açıya gitmesi ve o açıda sabit kalması istenen bariyer, robot kol ve dümenlerde kullanılır.",
          "items": [
            {
              "bold": "Kapalı Çevrim Kontrol",
              "text": "İçindeki potansiyometre motor milinin açısını sürekli okur ve hedefe varınca motoru durdurur."
            },
            {
              "bold": "PWM Kontrol Prensibi",
              "text": "50 Hz (20ms periyot) sinyalinde 1ms pals 0°, 1.5ms pals 90°, 2ms pals 180° açısına karşılık gelir."
            },
            {
              "bold": "Arduino Servo Kütüphanesi",
              "text": "`#include <Servo.h>` eklenerek `motor.write(90);` komutuyla doğrudan derece girilir."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Ultrasonik Radar Taraması Yapan Servo Kodu",
      "subtitle": "Servonun 0'dan 180 dereceye sağa sola dönerek etrafı taraması",
      "codeSnippet": "#include <Servo.h>\n\nServo radarServosu;\nconst int SERVO_PIN = 9;\n\nvoid setup() {\n  radarServosu.attach(SERVO_PIN); // 9. pine servo bağlandı\n  radarServosu.write(90);         // Başlangıçta merkeze dön\n  delay(1000);\n}\n\nvoid loop() {\n  // 15 dereceden 165 dereceye tara\n  for (int aci = 15; aci <= 165; aci += 5) {\n    radarServosu.write(aci);\n    delay(30); // Motorun hedefe varmasını bekle\n  }\n  // Geri dön\n  for (int aci = 165; aci >= 15; aci -= 5) {\n    radarServosu.write(aci);\n    delay(30);\n  }\n}",
      "codeTitle": "radar_servo_sweep.ino",
      "codeLang": "C++ / Arduino",
      "cards": [
        {
          "badge": "Kritik Kural",
          "title": "attach() ve detach()",
          "desc": "Servo sürekli PWM sinyali alırsa titreme (jitter) yapabilir; sabit kalacağı zaman `detach()` yapılabilir.",
          "items": [
            {
              "bold": "Akım Sıçraması",
              "text": "Birden fazla servo aynı anda dönerse Arduino reset atabilir; harici 5V regülatör bağlanmalıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Otopark Bariyeri Sistemi",
      "subtitle": "HC-SR04 araç algılayınca Servo motor ile bariyer kolunu 90 derece kaldıran ve araç geçince kapatan sistem",
      "steps": [
        {
          "title": "1. Servoyu ve Sensörü Bağla",
          "desc": "Servo Pin 9'a, HC-SR04 Trig Pin 7'ye, Echo Pin 8'e bağlansın."
        },
        {
          "title": "2. Bariyer Kolunu Tak",
          "desc": "Servo miline dondurma çubuğu veya kartondan minyatür bariyer kolu monte edin."
        },
        {
          "title": "3. Mantığı Kodla",
          "desc": "Araç mesafesi < 10 cm ise `bariyer.write(90);` (Aç), araç uzaklaşınca 3 saniye bekleyip `write(0);` (Kapat)."
        },
        {
          "title": "4. Test ve Kalibre",
          "desc": "Bariyerin yere paralel (0°) ve dik (90°) durmasını mekanik olarak ayarlayın."
        }
      ],
      "criteria": [
        "Servo.h kütüphanesini ve write() fonksiyonunu doğru kullanma",
        "Sensör algılaması ile aktüatör hareketini akıcı bir döngüde birleştirme",
        "Motor hareket sürelerini delay() veya durum makineleriyle doğru yönetme"
      ]
    },
    "tips": {
      "safetyTitle": "Motor ve Röle Güvenliği",
      "safetyRules": [
        {
          "bold": "Asla Servoyu Zorla Elinizle Döndürmeyin",
          "text": "SG90 motorların plastik dişlileri aşırı narindir; zorlandığında diş sıyırır ve motor bozulur."
        },
        {
          "bold": "Geri Emf ve Diyot Koruması",
          "text": "Bobinli yükler (motor, röle) kapanırken ters voltaj üretir; modüllerdeki koruma diyotlarını kontrol edin."
        },
        {
          "bold": "220V Şebeke Deneyleri Sadece Öğretmen Gözetiminde",
          "text": "Yüksek gerilim ölümcül tehlikedir; laboratuvarda röle ile önce 5V/12V LED veya fan kontrolü yapılır."
        }
      ],
      "myths": [
        {
          "wrong": "Servo motor sürekli kendi etrafında 360 derece döner.",
          "correct": "Standart servolar 180 derece ile sınırlıdır. 360 derece dönebilenler 'Continuous Servo' olarak adlandırılır."
        },
        {
          "wrong": "Röle açıldığında çıkan 'tık' sesi elektriksel bir arızadır.",
          "correct": "Tam aksine! O ses elektromıknatısın metal kontak pleytini çekip bıraktığı mekanik anahtarlama sesidir."
        }
      ]
    },
    "quiz": {
      "question": "Bir servo motora `motor.write(180);` komutu gönderildiğinde motor milinin hareketi ne olur?",
      "options": [
        {
          "text": "A) 180 saniye boyunca son hızla döner",
          "isCorrect": false
        },
        {
          "text": "B) 180 derecelik açısal konuma gider ve orada kilitlenir",
          "isCorrect": true
        },
        {
          "text": "C) Saniyede 180 tur atar",
          "isCorrect": false
        },
        {
          "text": "D) 180 milivolt gerilim üretir",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Standart servo motorlar açısal konumlandırma (0-180 derece) aktüatörleridir; girilen açı değerine ulaşıp pozisyonunu korur."
    },
    "summary": {
      "keyPoints": [
        "Aktüatörler işlemcinin dijital kararlarını mekanik harekete ve fiziksel güce dönüştürür.",
        "Servo motorlar dahili geri bildirim mekanizmasıyla açısal konum kontrolü sağlar.",
        "Röleler düşük kontrol voltajı ile yüksek gerilimli yükleri güvenle sürmeye yarar."
      ],
      "nextWeek": "Bilgi Ekranları: I2C LCD 16x2 Ekran & Robotik Sistem Entegrasyonu",
      "homework": "Tinkercad üzerinde buton basıldığında açılan ve 5 saniye sonra otomatik kapanan kasa kilidi devresi tasarlayınız."
    }
  },
  {
    "week": 15,
    "date": "21 - 27 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Robotik ve Mikrodenetleyici Sistemleri",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Bilgi Ekranları: I2C LCD 16x2 & Robotik Entegrasyon",
    "subtitle": "Karakter LCD Ekranlar, I2C Seri Haberleşme Protokolü (SDA, SCL), 0x27 / 0x3F Adresleme, LiquidCrystal_I2C Kütüphanesi ve Özel Karakter Tasarımı",
    "outcomeCode": "BB.10.2.7",
    "targetSkill": "I2C Haberleşme Protokolü & Görsel Kullanıcı Arayüzü",
    "curiosityQuestion": "Normalde çalışması için 16 farklı kablo gereken bir LCD ekran, I2C modülü sayesinde sadece 2 kablo ile nasıl kontrol edilebilir?",
    "roadmap": [
      {
        "title": "Geleneksel Paralel LCD vs I2C LCD",
        "desc": "16 pinlik karmaşık bağlantı yerine I2C modülü ile 4 pine (VCC, GND, SDA, SCL) düşürme."
      },
      {
        "title": "I2C Protokolü Nasıl Çalışır?",
        "desc": "SDA (Seri Veri) ve SCL (Seri Saat) hatları üzerinden benzersiz hex adresle haberleşme."
      },
      {
        "title": "I2C Adres Tarama (Scanner)",
        "desc": "Ekranın `0x27` mi yoksa `0x3F` adresinde mi olduğunu yazılımla bulma."
      },
      {
        "title": "Karakter & Arayüz Tasarımı",
        "desc": "16 sütun 2 satır ızgarada sıcaklık, mesafe ve özel semboller gösterme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(0, 240, 255, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- 16x2 LCD Ekran -->\n      <rect x=\"35\" y=\"30\" width=\"350\" height=\"130\" rx=\"8\" fill=\"#14532d\" stroke=\"#22c55e\" stroke-width=\"2\"/>\n      <rect x=\"55\" y=\"45\" width=\"310\" height=\"70\" rx=\"4\" fill=\"#166534\" stroke=\"#4ade80\" stroke-width=\"1.5\"/>\n      \n      <!-- Ekrandaki Karakterler (Monospace Matrix) -->\n      <text x=\"65\" y=\"72\" font-family=\"monospace\" font-size=\"14\" font-weight=\"bold\" fill=\"#86efac\">SICAKLIK: 24.5 C</text>\n      <text x=\"65\" y=\"98\" font-family=\"monospace\" font-size=\"14\" font-weight=\"bold\" fill=\"#86efac\">MESAFE  : 38 cm</text>\n      <text x=\"210\" y=\"145\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#bbf7d0\">I2C LCD 16x2 (Adres: 0x27)</text>\n\n      <!-- I2C Veri Yolu (Bus) -->\n      <g transform=\"translate(35, 180)\">\n        <rect width=\"350\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"175\" y=\"24\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\">I2C (Inter-Integrated Circuit) Haberleşme</text>\n        <circle cx=\"50\" cy=\"55\" r=\"5\" fill=\"#f59e0b\"/><text x=\"65\" y=\"59\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\">SDA (Serial Data - Pin A4)</text>\n        <circle cx=\"210\" cy=\"55\" r=\"5\" fill=\"#10b981\"/><text x=\"225\" y=\"59\" font-size=\"10\" font-weight=\"bold\" fill=\"#ffffff\">SCL (Serial Clock - Pin A5)</text>\n        <text x=\"175\" y=\"80\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Tek bir veri yoluna 127 farklı sensör ve ekran paralel bağlanabilir.</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "I2C Haberleşme Mimarisi ve Adresleme",
      "subtitle": "Pin tasarrufu sağlayan modern gömülü sistem veri yolu",
      "cards": [
        {
          "title": "Neden I2C Kullanıyoruz?",
          "icon": "📟",
          "desc": "Mikrodenetleyici projelerinde en kıymetli kaynak boşta kalan dijital pinlerdir.",
          "items": [
            {
              "bold": "Sadece 2 İletişim Hattı",
              "text": "Arduino Uno'da A4 pini SDA (veri), A5 pini SCL (saat sinyali) olarak görev yapar."
            },
            {
              "bold": "Adres Tabanlı İletişim",
              "text": "Her cihazın benzersiz bir kimlik adresi vardır (örn: LCD için `0x27`, RTC saat modülü için `0x68`)."
            },
            {
              "bold": "PCF8574 Çipi",
              "text": "LCD'nin arkasındaki bu entegre, I2C'den gelen seri veriyi 8-bit paralel veriye çevirir."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sensör Verilerini LCD Ekrana Yazdırma",
      "subtitle": "16x2 ekranda canlı telemetri paneli oluşturma",
      "codeSnippet": "#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n\n// 0x27 adresinde 16 sütun 2 satır LCD tanımla\nLiquidCrystal_I2C lcd(0x27, 16, 2);\n\nvoid setup() {\n  lcd.init();        // Ekranı başlat\n  lcd.backlight();   // Arka ışığı aç\n  \n  lcd.setCursor(0, 0); // 1. satır, 1. sütun\n  lcd.print(\"MEB AKILLI OKUL\");\n  lcd.setCursor(0, 1); // 2. satır, 1. sütun\n  lcd.print(\"SISTEM BASLADI\");\n  delay(2000);\n  lcd.clear();\n}\n\nvoid loop() {\n  float sicaklik = 23.4; // Sensörden geldiğini varsayalım\n  int nem = 55;\n  \n  lcd.setCursor(0, 0);\n  lcd.print(\"Sicaklik: \");\n  lcd.print(sicaklik, 1); // 1 ondalıklı basamak\n  lcd.print(\" C\");\n  \n  lcd.setCursor(0, 1);\n  lcd.print(\"Hava Nemi: %\");\n  lcd.print(nem);\n  \n  delay(1000);\n}",
      "codeTitle": "i2c_lcd_dashboard.ino",
      "codeLang": "C++ / Arduino",
      "cards": [
        {
          "badge": "İpucu",
          "title": "setCursor(sütun, satır)",
          "desc": "İndeksler 0'dan başlar. `setCursor(0,0)` sol üst köşe, `setCursor(0,1)` ise alt satırın başıdır.",
          "items": [
            {
              "bold": "lcd.clear() Kullanımı",
              "text": "Sürekli loop içinde clear() çağrılırsa ekran titrer; sadece değişen sayıyı üzerine yazmak daha akıcıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Çevre İstasyonu Gösterge Paneli",
      "subtitle": "HC-SR04 mesafe sensörü veya potansiyometre değerini LCD ekranda canlı çubuk grafik (Bar-graph) ile gösterme",
      "steps": [
        {
          "title": "1. LCD'yi Arduino'ya Bağla",
          "desc": "GND->GND, VCC->5V, SDA->A4, SCL->A5 pinlerine bağlayın."
        },
        {
          "title": "2. I2C Adresini Tara",
          "desc": "Eğer ekran açılmazsa `i2c_scanner` kodu yükleyip Seri Port'tan `0x27` veya `0x3F` adresini teyit edin."
        },
        {
          "title": "3. Potansiyometre Oku",
          "desc": "A0'daki potansiyometre değerini LCD 1. satırda sayı, 2. satırda '■■■' blokları olarak gösterin."
        },
        {
          "title": "4. Kontrast Ayarı",
          "desc": "Yazılar görünmezse modülün arkasındaki mavi trimpotu küçük bir tornavidayla çevirin."
        }
      ],
      "criteria": [
        "I2C veri yolu kablolamasını (A4-SDA, A5-SCL) hatasız tamamlama",
        "setCursor koordinat matematiğini ekrana taşma yapmadan yönetme",
        "Sensör değerleri güncellenirken ekran titremesini (flicker) engelleme"
      ]
    },
    "tips": {
      "safetyTitle": "I2C ve LCD Sorun Giderme",
      "safetyRules": [
        {
          "bold": "Ekranda Sadece Beyaz Kareler Varsa",
          "text": "Bu durum ekranın elektrik aldığını ama işlemciyle haberleşemediğini gösterir; I2C adresini ve SDA/SCL bağlantılarını kontrol edin."
        },
        {
          "bold": "Kontrast Trimpotunu Aşırı Zorlamayın",
          "text": "Mavi potansiyometre 360 derece sonsuz dönmez; son noktada zorlanırsa kırılır."
        },
        {
          "bold": "Kablo Mesafesi Sınırı",
          "text": "I2C protokolü devre kartı içi kısa mesafeler (maksimum 1-2 metre) için tasarlanmıştır; uzun kablolarda sinyal bozulur."
        }
      ],
      "myths": [
        {
          "wrong": "I2C LCD ekrana istediğimiz her Türkçe karakteri (ğ, ş, ı) doğrudan yazdırabiliriz.",
          "correct": "Karakter LCD'ler ROM'larında standart ASCII tablosu barındırır; 'ğ, ş' gibi harfler için `createChar()` ile 5x8 özel piksel çizilmelidir."
        },
        {
          "wrong": "Her I2C cihazının adresi fabrikada sabittir ve değiştirilemez.",
          "correct": "Modül arkasındaki A0, A1, A2 lehim köprüleri birleştirilerek adres `0x20` ile `0x27` arasında değiştirilebilir."
        }
      ]
    },
    "quiz": {
      "question": "Arduino Uno mikrodenetleyicisinde I2C haberleşme protokolünün SDA (Veri) ve SCL (Saat) sinyalleri standart olarak hangi pinlerden alınır?",
      "options": [
        {
          "text": "A) D0 ve D1 pinleri",
          "isCorrect": false
        },
        {
          "text": "B) A4 (SDA) ve A5 (SCL) pinleri",
          "isCorrect": true
        },
        {
          "text": "C) D9 ve D10 PWM pinleri",
          "isCorrect": false
        },
        {
          "text": "D) Vin ve 5V pinleri",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. ATmega328P işlemcisinde dahili donanımsal TWI (I2C) birimi A4 (SDA) ve A5 (SCL) pinlerine bağlıdır."
    },
    "summary": {
      "keyPoints": [
        "I2C veri yolu iki hat (SDA ve SCL) üzerinden onlarca çevre birimini tek hatta bağlar.",
        "LiquidCrystal_I2C kütüphanesi kullanıcı dostu print(), setCursor() ve clear() fonksiyonları sunar.",
        "Robotik projelerde bilgi ekranları hata ayıklama ve kullanıcı geri bildirimi için vazgeçilmezdir."
      ],
      "nextWeek": "Web Mimarisine Giriş: İstemci-Sunucu, HTTP/HTTPS & HTML5 Semantik İskelet",
      "homework": "Tinkercad üzerinde LCD ekranda geri sayım yapan ve süre bitince Buzzer çalan bir bomba imha / sayaç oyunu kodlayınız."
    }
  },
  {
    "week": 16,
    "date": "28 Aralık - 03 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Web Teknolojileri & Web Tabanlı Programlama",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "Web Mimarisine Giriş & HTML5 Semantik Yapı",
    "subtitle": "İstemci-Sunucu (Client-Server) Mimarisi, HTTP/HTTPS Protokolleri, DNS ve IP Çözümleme, HTML5 Semantik Etiketleri (<header>, <nav>, <main>, <section>, <article>, <footer>)",
    "outcomeCode": "BB.10.3.1",
    "targetSkill": "Web Mimarisi & Semantik Sayfa İskeleti İnşası",
    "curiosityQuestion": "Tarayıcınızın adres çubuğuna 'meb.gov.tr' yazıp Enter'a bastığınız o 1 saniye içinde dünyada hangi sunucular ve okyanus altı kabloları harekete geçer?",
    "roadmap": [
      {
        "title": "İstemci-Sunucu Mimarisi",
        "desc": "İstemci (Tarayıcı) istek atar (Request), Sunucu işler ve yanıt döner (Response)."
      },
      {
        "title": "HTTP vs HTTPS",
        "desc": "Metin tabanlı iletişim ile SSL/TLS sertifikasıyla şifrelenmiş güvenli hat arasındaki fark."
      },
      {
        "title": "HTML5 Semantik Devrimi",
        "desc": "`<div>` çöplüğü yerine anlamsal etiketlerle arama motoru (SEO) ve erişilebilirlik sağlama."
      },
      {
        "title": "Modern Web İskeleti",
        "desc": "`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>` ile profesyonel sayfa yapısı."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(56, 189, 248, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- İstemci (Browser) -->\n      <g transform=\"translate(30, 40)\">\n        <rect width=\"130\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n        <text x=\"65\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">İstemci (Client)</text>\n        <rect x=\"15\" y=\"38\" width=\"100\" height=\"40\" rx=\"4\" fill=\"#0f172a\"/>\n        <text x=\"65\" y=\"62\" text-anchor=\"middle\" font-size=\"9\" fill=\"#cbd5e1\">Web Tarayıcı</text>\n      </g>\n      \n      <!-- HTTP Request / Response Okları -->\n      <path d=\"M 165 65 L 245 65\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n      <polygon points=\"245,65 235,60 235,70\" fill=\"#f59e0b\"/>\n      <text x=\"205\" y=\"58\" text-anchor=\"middle\" font-size=\"8\" font-family=\"monospace\" fill=\"#fbbf24\">GET / HTTP/2</text>\n      \n      <path d=\"M 245 95 L 165 95\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <polygon points=\"165,95 175,90 175,100\" fill=\"#10b981\"/>\n      <text x=\"205\" y=\"110\" text-anchor=\"middle\" font-size=\"8\" font-family=\"monospace\" fill=\"#34d399\">200 OK (HTML)</text>\n\n      <!-- Web Sunucu -->\n      <g transform=\"translate(250, 40)\">\n        <rect width=\"140\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n        <text x=\"70\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#34d399\">Sunucu (Server)</text>\n        <text x=\"70\" y=\"50\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Nginx / Apache / Python</text>\n        <text x=\"70\" y=\"70\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Port: 443 (HTTPS)</text>\n      </g>\n      \n      <!-- HTML5 Semantik Ağaç -->\n      <g transform=\"translate(30, 150)\">\n        <rect width=\"360\" height=\"120\" rx=\"8\" fill=\"#162038\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        <rect x=\"15\" y=\"15\" width=\"330\" height=\"22\" rx=\"4\" fill=\"#1e293b\"/><text x=\"180\" y=\"30\" text-anchor=\"middle\" font-size=\"10\" fill=\"#38bdf8\">&lt;header&gt; &amp; &lt;nav&gt;</text>\n        <rect x=\"15\" y=\"42\" width=\"220\" height=\"45\" rx=\"4\" fill=\"#1e293b\"/><text x=\"125\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" fill=\"#fbbf24\">&lt;main&gt; &gt; &lt;article&gt;</text>\n        <rect x=\"245\" y=\"42\" width=\"100\" height=\"45\" rx=\"4\" fill=\"#1e293b\"/><text x=\"295\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" fill=\"#f472b6\">&lt;aside&gt;</text>\n        <rect x=\"15\" y=\"92\" width=\"330\" height=\"20\" rx=\"4\" fill=\"#1e293b\"/><text x=\"180\" y=\"106\" text-anchor=\"middle\" font-size=\"10\" fill=\"#10b981\">&lt;footer&gt;</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Neden Semantik (Anlamsal) HTML5?",
      "subtitle": "Arama motoru optimizasyonu (SEO) ve ekran okuyucu uyumluluğu",
      "cards": [
        {
          "title": "Eski Yöntem vs Modern Semantik Standart",
          "icon": "🌐",
          "desc": "HTML5 öncesi her yere `<div id='header'>` yazılırdı; modern web standartlarında her etiketin öz bir anlamı vardır.",
          "items": [
            {
              "bold": "<header> ve <nav>",
              "text": "Site logosu, ana başlık ve gezinme menüsü linklerini içerir."
            },
            {
              "bold": "<main> ve <article>",
              "text": "Sayfanın asıl benzersiz gövdesini ve kendi başına bağımsız okunabilir yazıları temsil eder."
            },
            {
              "bold": "<section> ve <aside>",
              "text": "Tematik içerik bölümlerini ve yan panel (reklam, ek linkler, profil) alanlarını ayırır."
            },
            {
              "bold": "<footer>",
              "text": "Telif hakları, iletişim bilgileri ve sosyal medya bağlantılarını barındırır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Semantik Bir Teknoloji Blogu İskeleti",
      "subtitle": "W3C standartlarına uygun HTML5 kod yapısı",
      "codeSnippet": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Bilişim & Robotik Bülteni</title>\n</head>\n<body>\n  <header>\n    <h1>Geleceğin Teknolojileri</h1>\n    <nav>\n      <ul>\n        <li><a href=\"#yapay-zeka\">Yapay Zekâ</a></li>\n        <li><a href=\"#robotik\">Robotik</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <article id=\"robotik\">\n      <h2>Robotikte I2C Devrimi</h2>\n      <p>I2C veri yolu iki pinle onlarca sensörü bağlamamıza imkan tanır...</p>\n    </article>\n  </main>\n\n  <aside>\n    <h3>Yazar Hakkında</h3>\n    <p>10. Sınıf Bilgisayar Bilimi Öğrencileri</p>\n  </aside>\n\n  <footer>\n    <p>&copy; 2026 MEB Maarif Modeli | Tüm Hakları Saklıdır.</p>\n  </footer>\n</body>\n</html>",
      "codeTitle": "index.html",
      "codeLang": "HTML5",
      "cards": [
        {
          "badge": "SEO Avantajı",
          "title": "Arama Motorları Nasıl Görür?",
          "desc": "Google botları `<article>` etiketini görünce sayfanın değerli bir makale olduğunu anlar ve sıralamada öne çıkarır.",
          "items": [
            {
              "bold": "Erişilebilirlik (A11y)",
              "text": "Görme engelliler için ekran okuyucular doğrudan `<main>` alanına atlayarak kullanıcıya zaman kazandırır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kişisel Bilişim Portfolyosu İskeleti Oluşturma",
      "subtitle": "Her öğrencinin kendi ilgi alanını (Oyun Geliştirme, Siber Güvenlik, Yapay Zekâ) anlatan semantik HTML5 sayfası kodlaması",
      "steps": [
        {
          "title": "1. Proje Klasörü Aç",
          "desc": "VS Code'da `web_projem` klasörü açıp içine `index.html` dosyası oluşturun."
        },
        {
          "title": "2. Semantik İskelet Kur",
          "desc": "`header`, `nav`, `main`, `article`, `section`, `footer` etiketlerini hiyerarşik yerleştirin."
        },
        {
          "title": "3. Görsel ve Bağlantı Ekle",
          "desc": "`<img src=\"...\" alt=\"Proje Ekranı\">` ve harici kaynaklara link veren `<a>` etiketlerini ekleyin."
        },
        {
          "title": "4. W3C Validator ile Test Et",
          "desc": "Kodunuzu `validator.w3.org` adresine yapıştırarak sözdizimi hatalarını sıfırlayın."
        }
      ],
      "criteria": [
        "Hiçbir gereksiz <div> kullanmadan saf semantik etiket tercih etme",
        "Tüm <img> etiketlerinde ekran okuyucu için zorunlu alt=\"...\" özniteliğini kullanma",
        "Doğru karakter kodlaması (<meta charset=\"UTF-8\">) tanımlama"
      ]
    },
    "tips": {
      "safetyTitle": "Web Güvenliği & HTTPS Önemi",
      "safetyRules": [
        {
          "bold": "HTTP Üzerinden Asla Şifre Göndermeyin",
          "text": "HTTP trafiği düz metindir; aynı ağdaki herkes Wireshark ile parolanızı açıkça okuyabilir."
        },
        {
          "bold": "HTTPS ve SSL/TLS Şifrelemesi",
          "text": "HTTPS veriyi asimetrik şifreler; aradaki casuslar sadece anlamsız rastgele baytlar görür."
        },
        {
          "bold": "meta viewport Zorunluluğu",
          "text": "`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` olmadan site mobilde düzgün ölçeklenemez."
        }
      ],
      "myths": [
        {
          "wrong": "HTML bir programlama dilidir.",
          "correct": "HTML programlama dili değil, bir 'İşaretleme Dilidir' (Markup Language); döngü veya mantıksal karar içermez."
        },
        {
          "wrong": "<div> kullanmak tamamen yasaklanmıştır.",
          "correct": "Hayır! Saf görsel amaçlı (CSS ile süsleme, flex kutulama) semantik anlam taşımayan yerlerde <div> kullanılabilir."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki HTML5 etiketlerinden hangisi bir web sayfasının ana ve benzersiz içeriğini barındırmak için özel olarak tasarlanmıştır?",
      "options": [
        {
          "text": "A) <nav>",
          "isCorrect": false
        },
        {
          "text": "B) <main>",
          "isCorrect": true
        },
        {
          "text": "C) <aside>",
          "isCorrect": false
        },
        {
          "text": "D) <footer>",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `<main>` etiketi bir sayfada yalnızca bir kez bulunur ve o belgenin temel ana konusunu temsil eder."
    },
    "summary": {
      "keyPoints": [
        "Web, istemcilerin HTTP talepleri ve sunucuların HTTP yanıtları üzerinde yükselir.",
        "HTML5 semantik etiketleri interneti daha erişilebilir, organize ve arama motoru dostu kılar.",
        "Güvenli web deneyimi için SSL/TLS tabanlı HTTPS standardı zorunludur."
      ],
      "nextWeek": "1. Dönem 2. Yazılı Sınavı Tekrarı & Robotik-OOP Pekiştirme Atölyesi",
      "homework": "Kendi özgeçmişinizi (hobiler, hedefler, projeler) içeren semantik bir `ozgecmis.html` sayfası kodlayınız."
    }
  },
  {
    "week": 17,
    "date": "04 - 10 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Web Teknolojileri & Web Tabanlı Programlama",
    "unitBadge": "1. Dönem Tekrarı",
    "unitTheme": "unite-3",
    "title": "1. Dönem 2. Yazılı Sınav Tekrarı & Pekiştirme",
    "subtitle": "Nesne Yönelimli Programlama (OOP), Dosya İşlemleri & JSON, Mikrodenetleyiciler (Arduino), Sensörler ve Web Temelleri Kapsamlı Soru Çözümü",
    "outcomeCode": "BB.10.1.9",
    "targetSkill": "Kapsamlı Kod Analizi & Problem Çözme Sentezi",
    "curiosityQuestion": "OOP mantığıyla yazılmış bir Python sınıfını, mikrodenetleyiciden gelen JSON sensör verisiyle birleştirip webde nasıl sunarsınız?",
    "roadmap": [
      {
        "title": "OOP Kritik Soru Kalıpları",
        "desc": "Sınıf, kalıtım, encapsulation ve `__init__` constructor senaryoları."
      },
      {
        "title": "Dosya & JSON Parsing",
        "desc": "with open, json.loads, json.dumps ve hata yakalama (try-except) blokları."
      },
      {
        "title": "Robotik & Sensör Hesapları",
        "desc": "PWM duty cycle, ADC 10-bit gerilim hesabı, HC-SR04 ses süresi formülleri."
      },
      {
        "title": "Klasik Yazılı Sınav Provası",
        "desc": "MEB senaryo formatında açık uçlu ve kod tamamlama sorularıyla pratik yapma."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n      \n      <g transform=\"translate(30, 30)\">\n        <rect width=\"170\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        <text x=\"85\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\">1. Blok: Yazılım & OOP</text>\n        <text x=\"15\" y=\"50\" font-size=\"9\" fill=\"#cbd5e1\">• Class, Self, __init__</text>\n        <text x=\"15\" y=\"70\" font-size=\"9\" fill=\"#cbd5e1\">• Kalıtım (super())</text>\n        <text x=\"15\" y=\"90\" font-size=\"9\" fill=\"#cbd5e1\">• JSON & Dosya I/O</text>\n      </g>\n      \n      <g transform=\"translate(220, 30)\">\n        <rect width=\"170\" height=\"110\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n        <text x=\"85\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#34d399\">2. Blok: Donanım & Robotik</text>\n        <text x=\"15\" y=\"50\" font-size=\"9\" fill=\"#cbd5e1\">• INPUT_PULLUP Mantığı</text>\n        <text x=\"15\" y=\"70\" font-size=\"9\" fill=\"#cbd5e1\">• PWM (0-255) & ADC (0-1023)</text>\n        <text x=\"15\" y=\"90\" font-size=\"9\" fill=\"#cbd5e1\">• HC-SR04 pulseIn() hesabı</text>\n      </g>\n      \n      <g transform=\"translate(30, 160)\">\n        <rect width=\"360\" height=\"110\" rx=\"8\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"2\"/>\n        <text x=\"180\" y=\"28\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#00f0ff\">Sınav Başarı Stratejisi</text>\n        <text x=\"25\" y=\"55\" font-size=\"10\" fill=\"#cbd5e1\">1. Soruyu dikkatle oku: Çıktı mı isteniyor, yoksa eksik kod satırı mı?</text>\n        <text x=\"25\" y=\"75\" font-size=\"10\" fill=\"#cbd5e1\">2. Sözdizimi (Syntax) kurallarına dikkat et: İki nokta (:), parantezler, girintiler.</text>\n        <text x=\"25\" y=\"95\" font-size=\"10\" fill=\"#cbd5e1\">3. Donanım sorularında birimleri unutma (µs -> s, V, Ohm, cm).</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "1. Dönem Çıkabilecek Kritik Kod Senaryoları",
      "subtitle": "Yazılı sınavlarda öğretmenlerin en çok sorduğu klasik problemler",
      "cards": [
        {
          "title": "OOP Soru Örneği",
          "icon": "📝",
          "desc": "Kalıtım alan bir alt sınıfta `super().__init__()` çağrısı unutulursa ne olur?",
          "items": [
            {
              "bold": "Cevap",
              "text": "Üst sınıfın nitelikleri başlatılamaz; alt sınıf üst sınıftaki değişkenlere erişmeye çalıştığında `AttributeError` fırlatır."
            },
            {
              "bold": "Püf Noktası",
              "text": "`super()` metodu üst sınıfın yapıcı fonksiyonunu çalıştırıp ortak alanları miras aldırır."
            }
          ]
        },
        {
          "title": "Robotik Soru Örneği",
          "icon": "🤖",
          "desc": "Bir LDR devresinde karanlıkta LED'in yanması için if koşulu nasıl kurulmalıdır?",
          "items": [
            {
              "bold": "Cevap",
              "text": "LDR gerilim bölücü devresine göre okunan analog değer eşik değerinin (örn: 400) altına düşerse `digitalWrite(LED, HIGH);` yapılır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Bütünleşik Örnek: IoT Sensör Okuma Sınıfı",
      "subtitle": "Python OOP ile gelen veriyi nesneye dönüştürüp dosyaya yazma",
      "codeSnippet": "import json\n\nclass SensorDugumu:\n    def __init__(self, cihaz_id, konum):\n        self.cihaz_id = cihaz_id\n        self.konum = konum\n        self.__veri_gecmisi = [] # Kapsülleme (Private)\n        \n    def veri_ekle(self, sicaklik, nem):\n        kayit = {\"sicaklik\": sicaklik, \"nem\": nem}\n        self.__veri_gecmisi.append(kayit)\n        \n    def rapor_kaydet(self, dosya_adi):\n        with open(dosya_adi, \"w\", encoding=\"utf-8\") as f:\n            json.dump({\"cihaz\": self.cihaz_id, \"kayitlar\": self.__veri_gecmisi}, f, indent=2)\n        print(f\"{dosya_adi} başarıyla mühürlendi.\")\n\n# Test Kodu\ndugum = SensorDugumu(\"ESP32_SERA\", \"Sera-A\")\ndugum.veri_ekle(24.5, 60)\ndugum.rapor_kaydet(\"sera_rapor.json\")",
      "codeTitle": "sinav_tekrar_butunlesik.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Sentez",
          "title": "OOP + JSON Entegrasyonu",
          "desc": "Gömülü sistemlerden toplanan veriler nesneler üzerinde modellenip JSON olarak saklanır.",
          "items": [
            {
              "bold": "Sınavda Puan Getiren Detay",
              "text": "with bloğu dosya kapatmayı (close) garanti eder."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akran Değerlendirmeli Sınav Provası",
      "subtitle": "Öğrencilerin ikili gruplar halinde birbirlerine hazırladıkları kod tamamlama sorularını çözdürmesi",
      "steps": [
        {
          "title": "1. Soru Hazırla",
          "desc": "İçinde bilerek 2 hata bırakılmış 10 satırlık bir Python OOP veya Arduino kodu yazın."
        },
        {
          "title": "2. Değiş tokuş Yap",
          "desc": "Soruyu sıra arkadaşınıza verin ve 5 dakika süre tutun."
        },
        {
          "title": "3. Hataları Ayıkla",
          "desc": "Arkadaşınızın kodundaki syntax ve mantık hatalarını kırmızı kalemle işaretleyin."
        },
        {
          "title": "4. Çözümü Açıkla",
          "desc": "Hatanın neden kaynaklandığını ve doğrusunun ne olduğunu arkadaşınıza anlatın."
        }
      ],
      "criteria": [
        "Soru hazırlarken kazanım hedeflerine sadık kalma",
        "Kodlardaki hata tiplerini (SyntaxError, AttributeError, ValueError) doğru isimlendirme",
        "Akranına yapıcı ve teknik dille geri bildirim verme"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Günü İpuçları",
      "safetyRules": [
        {
          "bold": "Değişken İsimlerini Anlaşılır Yazın",
          "text": "Sınav kağıdına `a`, `b`, `x` yerine `sicaklik`, `mesafe` gibi anlamlı isimler yazmak puan kazandırır."
        },
        {
          "bold": "Girintilemeye (Indentation) Dikkat Edin",
          "text": "Python'da 4 boşlukluk girinti hayati önem taşır; sınav kağıdında if ve class altlarını mutlaka içeriden başlatın."
        },
        {
          "bold": "Sözde Kod (Pseudocode) Mantığını Unutmayın",
          "text": "Fonksiyonun adını hatırlayamazsanız ne yapmak istediğinizi yorum satırı olarak açıklayın."
        }
      ],
      "myths": [
        {
          "wrong": "Yazılı sınavda sadece kodun hatasız çalışması puan getirir.",
          "correct": "Öğretmenler problem çözme yaklaşımına, algoritma mantığına ve temiz kod standartlarına da kısmi puan verir."
        },
        {
          "wrong": "Donanım sorularında devre şemasını ezberlemek yeterlidir.",
          "correct": "Akımın nereden çıkıp nereye gittiğini ve neden direnç takıldığını açıklayabilmek asıl bilgiyi gösterir."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod satırlarından hangisi bir Arduino devresinde 9. pine bağlı LED'in parlaklığını yarı yarıya yakmak için doğru bir ifadedir?",
      "options": [
        {
          "text": "A) digitalWrite(9, 50);",
          "isCorrect": false
        },
        {
          "text": "B) analogWrite(9, 127);",
          "isCorrect": true
        },
        {
          "text": "C) analogRead(9, 512);",
          "isCorrect": false
        },
        {
          "text": "D) pinMode(9, 2.5V);",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. analogWrite() 0 ile 255 arasında PWM değeri alır. 127 yaklaşık olarak %50 duty cycle (yarı parlaklık) sağlar."
    },
    "summary": {
      "keyPoints": [
        "1. Dönem boyunca Nesne Yönelimli Programlama ve Mikrodenetleyiciler dünyasını fethettik.",
        "Teorik bilgi ile pratik devre kurma becerisi birleştiğinde gerçek mühendislik başlar.",
        "Sınavlarda sakin olmak, problemi adım adım parçalamak (Divide and Conquer) başarının anahtarıdır."
      ],
      "nextWeek": "CSS3 ile Modern Web Arayüz Tasarımı: Flexbox & CSS Grid",
      "homework": "1. Dönem boyunca yazdığınız tüm Python ve Arduino kodlarını tek bir GitHub reposunda toparlayınız."
    }
  },
  {
    "week": 18,
    "date": "11 - 17 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Web Teknolojileri & Web Tabanlı Programlama",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "CSS3 ile Modern Arayüz: Flexbox & CSS Grid",
    "subtitle": "Kutu Modeli (Box Model: margin, border, padding), Flexbox Yerleşimi (justify-content, align-items), CSS Grid 2B Matris Düzeni ve Medya Sorguları (@media)",
    "outcomeCode": "BB.10.3.2",
    "targetSkill": "Modern CSS Yerleşim Sistemleri & Duyarlı (Responsive) Tasarım",
    "curiosityQuestion": "Aynı web sitesi devasa bir 4K akıllı tahtada, dizüstü bilgisayarda ve küçücük bir cep telefonunda nasıl hiç bozulmadan kusursuz görünür?",
    "roadmap": [
      {
        "title": "CSS Kutu Modeli (Box Model)",
        "desc": "Content, Padding, Border ve Margin katmanlarının piksel matematiği."
      },
      {
        "title": "Flexbox (1 Boyutlu Yerleşim)",
        "desc": "Öğeleri tek eksende (satır veya sütun) kusursuz hizalama ve esnetme."
      },
      {
        "title": "CSS Grid (2 Boyutlu Matris)",
        "desc": "Satır ve sütunları aynı anda yöneterek gazete/portal düzeni kurma."
      },
      {
        "title": "Duyarlı Tasarım & @media",
        "desc": "Ekran genişliği değiştikçe elementleri otomatik alt alta dizme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(236, 72, 153, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Flexbox Düzeni -->\n      <g transform=\"translate(30, 30)\">\n        <rect width=\"360\" height=\"100\" rx=\"8\" fill=\"#1e293b\" stroke=\"#ec4899\" stroke-width=\"2\"/>\n        <text x=\"180\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#f472b6\">display: flex; justify-content: space-between;</text>\n        \n        <rect x=\"20\" y=\"40\" width=\"90\" height=\"45\" rx=\"6\" fill=\"#0f172a\" stroke=\"#38bdf8\"/>\n        <text x=\"65\" y=\"67\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\">Kart 1</text>\n        \n        <rect x=\"135\" y=\"40\" width=\"90\" height=\"45\" rx=\"6\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n        <text x=\"180\" y=\"67\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#10b981\">Kart 2</text>\n        \n        <rect x=\"250\" y=\"40\" width=\"90\" height=\"45\" rx=\"6\" fill=\"#0f172a\" stroke=\"#f59e0b\"/>\n        <text x=\"295\" y=\"67\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#fbbf24\">Kart 3</text>\n      </g>\n      \n      <!-- CSS Grid Düzeni -->\n      <g transform=\"translate(30, 150)\">\n        <rect width=\"360\" height=\"120\" rx=\"8\" fill=\"#162038\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n        <text x=\"180\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#c084fc\">display: grid; grid-template-columns: 1fr 1fr 1fr;</text>\n        \n        <rect x=\"20\" y=\"38\" width=\"95\" height=\"32\" rx=\"4\" fill=\"#1e1b4b\"/><text x=\"67\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ffffff\">A1</text>\n        <rect x=\"132\" y=\"38\" width=\"95\" height=\"32\" rx=\"4\" fill=\"#1e1b4b\"/><text x=\"180\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ffffff\">A2</text>\n        <rect x=\"245\" y=\"38\" width=\"95\" height=\"32\" rx=\"4\" fill=\"#1e1b4b\"/><text x=\"292\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ffffff\">A3</text>\n        \n        <rect x=\"20\" y=\"76\" width=\"95\" height=\"32\" rx=\"4\" fill=\"#1e1b4b\"/><text x=\"67\" y=\"96\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ffffff\">B1</text>\n        <rect x=\"132\" y=\"76\" width=\"95\" height=\"32\" rx=\"4\" fill=\"#1e1b4b\"/><text x=\"180\" y=\"96\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ffffff\">B2</text>\n        <rect x=\"245\" y=\"76\" width=\"95\" height=\"32\" rx=\"4\" fill=\"#1e1b4b\"/><text x=\"292\" y=\"96\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ffffff\">B3</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Flexbox vs CSS Grid Karşılaştırması",
      "subtitle": "Hangi yerleşim mekanizmasını nerede kullanmalıyız?",
      "cards": [
        {
          "title": "Flexbox: 1 Boyutlu Sihirbaz",
          "icon": "📐",
          "desc": "Menü çubukları (navbar), buton grupları veya tek sıra kartlar için mükemmeldir.",
          "items": [
            {
              "bold": "justify-content",
              "text": "Ana eksende (yatayda) öğeleri dağıtır: `center`, `space-between`, `space-around`."
            },
            {
              "bold": "align-items",
              "text": "Çapraz eksende (dikeyde) öğeleri hizalar: `center` ile tek satırda dikey ortalama."
            },
            {
              "bold": "flex-wrap: wrap",
              "text": "Ekran daraldığında taşan öğeleri alt satıra güvenle aktarır."
            }
          ]
        },
        {
          "title": "CSS Grid: 2 Boyutlu Mimari",
          "icon": "🗂️",
          "desc": "Tüm sayfa şablonu, fotoğraf galerileri ve karmaşık panel arayüzleri için kullanılır.",
          "items": [
            {
              "bold": "grid-template-columns",
              "text": "`repeat(3, 1fr)` komutuyla 3 eşit esnek sütun yaratır."
            },
            {
              "bold": "gap: 1.5rem",
              "text": "Hücreler arasına marjin derdi olmadan temiz boşluk bırakır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Duyarlı (Responsive) Kart Izgarası CSS Kodu",
      "subtitle": "Mobil ve Masaüstü uyumlu modern kart tasarımı",
      "codeSnippet": "/* Kart Izgarası (Masaüstü: 3 Sütun) */\n.kart-konteyner {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding: 2rem;\n}\n\n.kart {\n  background: #1e293b;\n  border-radius: 12px;\n  padding: 1.5rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.kart:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 10px 25px rgba(0, 240, 255, 0.25);\n}\n\n/* Medya Sorgusu (Mobil: Ekran < 768px ise Tek Sütun) */\n@media (max-width: 768px) {\n  .kart-konteyner {\n    grid-template-columns: 1fr;\n    padding: 1rem;\n  }\n}",
      "codeTitle": "style.css",
      "codeLang": "CSS3",
      "cards": [
        {
          "badge": "Modern Standart",
          "title": "box-sizing: border-box",
          "desc": "Tüm web sitelerinin başına konulan bu kural, padding ve border eklense bile kutunun dış genişliğini sabit tutar.",
          "items": [
            {
              "bold": "Mobil Öncelikli Tasarım",
              "text": "Önce telefon görünümünü tasarlayıp sonra @media ile büyük ekranlara yaymak endüstri kuralıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Responsive Teknoloji Haber Portalı Tasarımı",
      "subtitle": "Flexbox ile üst menü, CSS Grid ile 6 haber kartından oluşan responsive ana sayfa yapma",
      "steps": [
        {
          "title": "1. Navbar Tasarla",
          "desc": "Logo solda, menü linkleri sağda olacak şekilde `display: flex; justify-content: space-between;` yapın."
        },
        {
          "title": "2. Grid Izgarası Kur",
          "desc": "Haber kartlarını `repeat(auto-fit, minmax(280px, 1fr))` ile ekran boyuna göre otomatik sığdırın."
        },
        {
          "title": "3. Hover Efekti Ver",
          "desc": "Kartların üzerine gelince hafifçe yukarı kalkmasını sağlayan geçiş (transition) ekleyin."
        },
        {
          "title": "4. Telefondan Test Et",
          "desc": "Tarayıcı Geliştirici Araçlarını (F12) açıp cep telefonu modunda menünün taşmadığını görün."
        }
      ],
      "criteria": [
        "Flexbox ve Grid özelliklerini doğru yerde amaca uygun kullanma",
        "Medya sorgusu ile mobil görünümde yatay kaydırma çubuğunun (horizontal scroll) çıkmasını engelleme",
        "Kutu modeli mantığını (padding vs margin) hatasız uygulama"
      ]
    },
    "tips": {
      "safetyTitle": "CSS'te Yaygın Hatalar & Çözümleri",
      "safetyRules": [
        {
          "bold": "Sabit Genişliklerden (px) Kaçının",
          "text": "Kapsayıcılara `width: 1200px;` vermek telefonda sağa taşmaya yol açar; `max-width: 100%` veya `fr` kullanın."
        },
        {
          "bold": "Her Şeye !important Yazmayın",
          "text": "!important CSS özgüllüğünü kırar ve ileride kodun yönetilmesini imkansız hale getirir."
        },
        {
          "bold": "Renk Kontrastına Dikkat Edin",
          "text": "Koyu arkaplan üzerine açık metin seçerek okunabilirlik standartlarına (WCAG) uyun."
        }
      ],
      "myths": [
        {
          "wrong": "Flexbox varken artık CSS Grid'e hiç gerek yoktur.",
          "correct": "Flexbox tek boyut (satır VEYA sütun) için harikadır; ancak 2 boyutlu matris ve sayfa düzenlerinde Grid çok daha üstündür."
        },
        {
          "wrong": "CSS bir programlama dili olmadığı için basit ve önemsizdir.",
          "correct": "Modern CSS; değişkenler, matematiksel fonksiyonlar (calc, clamp) ve animasyonlarla devasa bir mühendislik alanıdır."
        }
      ]
    },
    "quiz": {
      "question": "Bir CSS Grid konteynerinde 3 eşit genişlikte sütun oluşturmak için kullanılan en modern ve temiz CSS ifadesi hangisidir?",
      "options": [
        {
          "text": "A) grid-template-columns: 33.3% 33.3% 33.3%;",
          "isCorrect": false
        },
        {
          "text": "B) grid-template-columns: repeat(3, 1fr);",
          "isCorrect": true
        },
        {
          "text": "C) display: flex-columns(3);",
          "isCorrect": false
        },
        {
          "text": "D) columns: 3px;",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `repeat(3, 1fr)` ifadesi alanı 3 eşit kesire (fraction) böler; padding ve gap değerlerini otomatik hesaplayarak taşmayı önler."
    },
    "summary": {
      "keyPoints": [
        "CSS Kutu Modeli (Box Model) her web öğesinin etrafındaki koruyucu katmandır.",
        "Flexbox 1 boyutlu esnek hizalama, CSS Grid ise 2 boyutlu alan yönetimi sağlar.",
        "Duyarlı tasarım (Responsive Design) sitelerin her cihazda kusursuz açılmasını garanti eder."
      ],
      "nextWeek": "JavaScript Temelleri & Dinamik DOM Yönetimi (1. Dönem Büyük Değerlendirmesi)",
      "homework": "Kişisel portfolyonuza Flexbox ile şık bir navbar ve CSS Grid ile 3 adet proje kartı ekleyiniz."
    }
  },
  {
    "week": 19,
    "date": "18 - 24 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Web Teknolojileri & Web Tabanlı Programlama",
    "unitBadge": "1. Dönem Sonu",
    "unitTheme": "unite-3",
    "title": "JavaScript Temelleri & Dinamik DOM Yönetimi",
    "subtitle": "Tarayıcının Programlama Dili, DOM (Document Object Model) Ağacı, querySelector(), addEventListener() Olay Dinleyicileri ve 1. Dönem Proje Sergisi",
    "outcomeCode": "BB.10.3.3",
    "targetSkill": "Etkileşimli Web Programlama & DOM Manipülasyonu",
    "curiosityQuestion": "HTML sayfanın iskeleti, CSS kıyafeti ise; sayfaya hayat veren, butonlara tıklanınca çalışan ve canlı verileri güncelleyen 'beyin' nedir?",
    "roadmap": [
      {
        "title": "JavaScript'in Doğuşu & Rolü",
        "desc": "Statik sayfaları yaşayan, kullanıcıyla konuşan canlı uygulamalara dönüştürme."
      },
      {
        "title": "DOM (Document Object Model) Nedir?",
        "desc": "HTML etiketlerinin tarayıcı belleğinde nesne tabanlı bir aile ağacı olarak tutulması."
      },
      {
        "title": "querySelector() & innerHTML",
        "desc": "JavaScript ile istenen HTML elementini yakalayıp içeriğini ve stilini canlı değiştirme."
      },
      {
        "title": "Olay Dinleyicileri (Event Listeners)",
        "desc": "`click`, `input`, `keydown` gibi kullanıcı hareketlerini yakalayıp fonksiyon çalıştırma."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(234, 179, 8, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- DOM Ağacı (Tree) -->\n      <rect x=\"150\" y=\"25\" width=\"120\" height=\"30\" rx=\"6\" fill=\"#1e293b\" stroke=\"#eab308\" stroke-width=\"2\"/>\n      <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#facc15\">document</text>\n      \n      <line x1=\"210\" y1=\"55\" x2=\"210\" y2=\"75\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <rect x=\"160\" y=\"75\" width=\"100\" height=\"28\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n      <text x=\"210\" y=\"93\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\">&lt;html&gt;</text>\n      \n      <line x1=\"210\" y1=\"103\" x2=\"110\" y2=\"125\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <line x1=\"210\" y1=\"103\" x2=\"310\" y2=\"125\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      \n      <rect x=\"65\" y=\"125\" width=\"90\" height=\"26\" rx=\"4\" fill=\"#1e1b4b\" stroke=\"#818cf8\"/>\n      <text x=\"110\" y=\"142\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c7d2fe\">&lt;head&gt;</text>\n      \n      <rect x=\"265\" y=\"125\" width=\"90\" height=\"26\" rx=\"4\" fill=\"#162038\" stroke=\"#10b981\"/>\n      <text x=\"310\" y=\"142\" text-anchor=\"middle\" font-size=\"10\" fill=\"#34d399\">&lt;body&gt;</text>\n      \n      <!-- Etkileşim Butonu -->\n      <g transform=\"translate(60, 180)\">\n        <rect width=\"300\" height=\"95\" rx=\"8\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        <text x=\"150\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\">Olay (Event) Mekanizması</text>\n        <rect x=\"20\" y=\"40\" width=\"110\" height=\"35\" rx=\"6\" fill=\"#f59e0b\"/>\n        <text x=\"75\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#070b14\">Kullanıcı Tıklar</text>\n        \n        <path d=\"M 135 57 L 175 57\" stroke=\"#eab308\" stroke-width=\"2\"/>\n        <polygon points=\"175,57 165,52 165,62\" fill=\"#eab308\"/>\n        \n        <text x=\"235\" y=\"52\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">addEventListener</text>\n        <text x=\"235\" y=\"68\" font-size=\"9\" fill=\"#a7f3d0\">DOM güncellenir!</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "DOM (Belge Nesne Modeli) Nedir?",
      "subtitle": "HTML dökümanının JavaScript tarafından canlı yönetilebilir arayüzü",
      "cards": [
        {
          "title": "Sayfayı Canlı Değiştirme Adımları",
          "icon": "⚡",
          "desc": "Tarayıcı bir HTML dosyasını açtığında her etiketi bir JavaScript nesnesine dönüştürür.",
          "items": [
            {
              "bold": "1. Seçme (Select)",
              "text": "const btn = document.querySelector('#btnKaydet'); ile elemanı yakalama."
            },
            {
              "bold": "2. Dinleme (Listen)",
              "text": "btn.addEventListener('click', () => { ... }); ile tıklanmayı bekleme."
            },
            {
              "bold": "3. Değiştirme (Mutate)",
              "text": "baslik.textContent = 'İşlem Başarılı!'; ile sayfayı yenilemeden anında güncelleme."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Etkileşimli Sayaç ve Tema Değiştirici Kodu",
      "subtitle": "Kullanıcı tıkladıkça sayıyı artıran ve arkaplan rengini değiştiren JS",
      "codeSnippet": "// 1. DOM Elemanlarını Seç\nconst sayacMetni = document.querySelector('#sayac');\nconst artirButonu = document.querySelector('#btnArtir');\nconst temaButonu = document.querySelector('#btnTema');\n\nlet sayi = 0;\n\n// 2. Tıklama Olayı (Event Listener)\nartirButonu.addEventListener('click', () => {\n  sayi++;\n  sayacMetni.textContent = sayi;\n  if (sayi >= 10) {\n    sayacMetni.style.color = '#10b981'; // 10 olunca yeşil yap\n  }\n});\n\n// 3. Koyu/Açık Tema Olayı\ntemaButonu.addEventListener('click', () => {\n  document.body.classList.toggle('koyu-mod');\n});",
      "codeTitle": "app.js",
      "codeLang": "JavaScript (ES6)",
      "cards": [
        {
          "badge": "Güç",
          "title": "classList.toggle()",
          "desc": "Bir CSS sınıfı varsa kaldırır, yoksa ekler; tek satırda karanlık mod (dark mode) yapmayı sağlar.",
          "items": [
            {
              "bold": "Modern JS (ES6)",
              "text": "const, let ve ok fonksiyonları (`() => {}`) modern geliştirmenin temelidir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "1. Dönem Sonu Bilişim Portfolyo Sergisi",
      "subtitle": "Dönem boyunca geliştirilen projelerin (OOP simülasyonları, Arduino devreleri ve Web siteleri) sınıfta sunulması",
      "steps": [
        {
          "title": "1. Projeni Hazırla",
          "desc": "1. Dönem içinde yazdığınız en iyi projeyi (Python, Arduino veya Web) seçin."
        },
        {
          "title": "2. Canlı Demo Yap",
          "desc": "Akıllı tahtada kodunuzu çalıştırın ve nasıl çalıştığını 2 dakikada arkadaşlarınıza anlatın."
        },
        {
          "title": "3. Karşılaşılan Engeller",
          "desc": "Projeyi yaparken hangi hatayla (bug) karşılaştığınızı ve nasıl çözdüğünüzü paylaşın."
        },
        {
          "title": "4. Dönem Sonu Değerlendirmesi",
          "desc": "Arkadaşlarınızın projelerini inceleyip olumlu geri bildirimler verin."
        }
      ],
      "criteria": [
        "Teknik kavramları (OOP, PWM, Semantik HTML, DOM) doğru terminolojiyle ifade etme",
        "Çalışan bir canlı yazılım demosu sunabilme",
        "Soru-cevap bölümünde kodunun arkasında durabilme"
      ]
    },
    "tips": {
      "safetyTitle": "JavaScript Güvenliği & Geliştirici Konsolu",
      "safetyRules": [
        {
          "bold": "F12 Console Panelini Dostunuz Yapın",
          "text": "Hatalar sayfada görünmez, F12 Konsolunda kırmızı olarak yazar; `console.log()` ile değişkenleri kontrol edin."
        },
        {
          "bold": "innerHTML Kullanırken Dikkat (XSS Saldırısı)",
          "text": "Kullanıcıdan gelen metni doğrudan innerHTML ile basarsanız kötü niyetli scriptler çalışabilir; `textContent` tercih edin."
        },
        {
          "bold": "Büyük/Küçük Harf Duyarlılığı (Case-Sensitive)",
          "text": "JavaScript'te `Sayac` ile `sayac` tamamen farklı iki değişkendir."
        }
      ],
      "myths": [
        {
          "wrong": "Java ile JavaScript aynı dildir.",
          "correct": "Asla! 'Ham' ile 'Hamster' ne kadar benzerse Java ile JavaScript de o kadar benzerdir; tamamen farklı iki dildir."
        },
        {
          "wrong": "JavaScript sadece web tarayıcılarında çalışır.",
          "correct": "Node.js sayesinde JavaScript artık sunucularda, robotlarda ve masaüstü programlarında da çalışmaktadır."
        }
      ]
    },
    "quiz": {
      "question": "JavaScript'te sayfadaki `<button id=\"kaydet\">` öğesine tıklandığında bir fonksiyon çalıştırmak için hangi yöntem kullanılır?",
      "options": [
        {
          "text": "A) document.click('#kaydet');",
          "isCorrect": false
        },
        {
          "text": "B) document.querySelector('#kaydet').addEventListener('click', fn);",
          "isCorrect": true
        },
        {
          "text": "C) window.setClick('kaydet');",
          "isCorrect": false
        },
        {
          "text": "D) html.find('button').start();",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `querySelector` ile seçilen DOM elemanına `addEventListener` metodu bağlanarak kullanıcı etkileşimleri yakalanır."
    },
    "summary": {
      "keyPoints": [
        "JavaScript web sayfalarına akıl ve dinamizm katan evrensel dildir.",
        "DOM ağacı sayesinde HTML elementleri JavaScript nesneleri olarak manipüle edilir.",
        "1. Dönemi OOP, Mikrodenetleyiciler ve Modern Web temellerini tamamlayarak başarıyla kapattık!"
      ],
      "nextWeek": "Sömestr Tatili 1: İleri Düzey Robotik & IoT Kış Kampı Bülteni",
      "homework": "1. Dönem öğrendiklerinizi pekiştirmek için tatilde küçük bir JavaScript mini oyunu (Sayı Tahmin Oyunu) geliştiriniz."
    }
  }
];
