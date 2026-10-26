/**
 * MEB 10. Sınıf Bilgisayar Bilimi (Kur 2) - 2. Dönem 2. Kısım (Hafta 32 - 41)
 * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_2_PART2 = [
  {
    "week": 32,
    "date": "19 - 25 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Veri Bilimi, Makine Öğrenmesi & Yapay Zekâ",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Veri Görselleştirme: Matplotlib ile Grafikler",
    "subtitle": "Grafik Okuryazarlığı, Matplotlib pyplot Modülü, Çizgi Grafiği (Line Plot), Sütun Grafiği (Bar Chart), Dağılım (Scatter Plot), Başlık, Eksen Etiketleri ve Lejant",
    "outcomeCode": "BB.10.5.3",
    "targetSkill": "Veri Görselleştirme & Grafiksel Çıkarım",
    "curiosityQuestion": "İnsan beyni milyonlarca sayının olduğu bir Excel tablosuna bakınca hiçbir şey anlayamazken, tek bir renkli grafiği nasıl yarım saniyede kavrar?",
    "roadmap": [
      {
        "title": "Görselleştirmenin Gücü",
        "desc": "Ham sayı yığınlarını hikâye anlatan, karar verdirici infografiklere çevirme."
      },
      {
        "title": "Matplotlib ve pyplot Modülü",
        "desc": "Python dünyasının en köklü ve güvenilir 2B grafik çizim motoru."
      },
      {
        "title": "Grafik Türleri ve Seçim Kriterleri",
        "desc": "Zaman içindeki değişim için Çizgi, kategorik kıyaslama için Sütun, korelasyon için Dağılım."
      },
      {
        "title": "Grafik Özelleştirme",
        "desc": "Renkler, ızgara çizgileri (grid), lejant (açıklama kutusu) ve çözünürlük (DPI) ayarları."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(56, 189, 248, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Grafik Çerçevesi -->\n      <g transform=\"translate(40, 30)\">\n        <rect width=\"340\" height=\"180\" rx=\"6\" fill=\"#162038\" stroke=\"#334155\"/>\n        <text x=\"170\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Aylık Sensör Sıcaklık Grafiği (Matplotlib)</text>\n        \n        <!-- Eksenler -->\n        <line x1=\"45\" y1=\"35\" x2=\"45\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n        <line x1=\"45\" y1=\"145\" x2=\"315\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n        \n        <!-- Izgara Çizgileri -->\n        <line x1=\"45\" y1=\"65\" x2=\"315\" y2=\"65\" stroke=\"#1e293b\" stroke-dasharray=\"2\"/>\n        <line x1=\"45\" y1=\"105\" x2=\"315\" y2=\"105\" stroke=\"#1e293b\" stroke-dasharray=\"2\"/>\n        \n        <!-- Çizgi Grafiği Eğrisi (Line Plot) -->\n        <path d=\"M 60 130 L 110 110 L 160 70 L 210 55 L 260 75 L 300 95\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\"/>\n        \n        <!-- Veri Noktaları (Scatter Points) -->\n        <circle cx=\"60\" cy=\"130\" r=\"4\" fill=\"#fbbf24\"/>\n        <circle cx=\"110\" cy=\"110\" r=\"4\" fill=\"#fbbf24\"/>\n        <circle cx=\"160\" cy=\"70\" r=\"4\" fill=\"#fbbf24\"/>\n        <circle cx=\"210\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/>\n        <circle cx=\"260\" cy=\"75\" r=\"4\" fill=\"#fbbf24\"/>\n        <circle cx=\"300\" cy=\"95\" r=\"4\" fill=\"#fbbf24\"/>\n        \n        <!-- Eksen Etiketleri -->\n        <text x=\"60\" y=\"160\" text-anchor=\"middle\" font-size=\"8\" fill=\"#94a3b8\">Oca</text>\n        <text x=\"160\" y=\"160\" text-anchor=\"middle\" font-size=\"8\" fill=\"#94a3b8\">Mar</text>\n        <text x=\"210\" y=\"160\" text-anchor=\"middle\" font-size=\"8\" fill=\"#94a3b8\">May</text>\n        <text x=\"300\" y=\"160\" text-anchor=\"middle\" font-size=\"8\" fill=\"#94a3b8\">Tem</text>\n      </g>\n      \n      <!-- Kod Çıkarımı -->\n      <g transform=\"translate(40, 225)\">\n        <rect width=\"340\" height=\"55\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"1\"/>\n        <text x=\"15\" y=\"24\" font-family=\"monospace\" font-size=\"9\" fill=\"#fbbf24\">plt.plot(aylar, sicaklik, marker='o', color='#10b981')</text>\n        <text x=\"15\" y=\"42\" font-family=\"monospace\" font-size=\"9\" fill=\"#38bdf8\">plt.title(\"Yıllık Trend\") ; plt.show()</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Hangi Veriye Hangi Grafik?",
      "subtitle": "Doğru görselleştirme stratejisiyle verinin mesajını öne çıkarma",
      "cards": [
        {
          "title": "3 Temel Grafik Şablonu",
          "icon": "📊",
          "desc": "Veri biliminde en sık başvurulan grafik formatları:",
          "items": [
            {
              "bold": "Çizgi Grafiği (plt.plot)",
              "text": "Zamana bağlı değişimleri, sıcaklık trendlerini ve borsa grafiklerini gösterir."
            },
            {
              "bold": "Sütun Grafiği (plt.bar)",
              "text": "Kategoriler arası karşılaştırma yapar (Örn: Sınıflara göre ortalama notlar)."
            },
            {
              "bold": "Dağılım Grafiği (plt.scatter)",
              "text": "İki sayısal değişken arasındaki korelasyonu (Örn: Ders çalışma süresi ile sınav notu ilişkisi) noktalarla ortaya koyar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Profesyonel Grafik Çizim Kodu",
      "subtitle": "Başlık, eksen isimleri ve ızgara içeren eksiksiz Python betiği",
      "codeSnippet": "import matplotlib.pyplot as plt\n\n# Veriler\ngunler = ['Pzt', 'Sal', 'Car', 'Per', 'Cum']\nsensor_verisi = [21.5, 22.0, 24.3, 23.8, 25.1]\n\n# Grafik Ayarları\nplt.figure(figsize=(8, 4), dpi=100)\nplt.plot(gunler, sensor_verisi, marker='o', color='#0284c7', linewidth=2.5, label='Sera Sıcaklığı (°C)')\n\n# Başlık ve Etiketler\nplt.title('Haftalık Sera Sıcaklık Takibi', fontsize=14, fontweight='bold')\nplt.xlabel('Ölçüm Günleri', fontsize=11)\nplt.ylabel('Sıcaklık (°C)', fontsize=11)\nplt.grid(True, linestyle='--', alpha=0.6)\nplt.legend()\n\n# Resmi Kaydet ve Göster\nplt.tight_layout()\nplt.savefig('sicaklik_grafigi.png')\nplt.show()",
      "codeTitle": "matplotlib_demo.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "İpucu",
          "title": "plt.savefig() Gücü",
          "desc": "Grafiği ekranda göstermekle kalmaz, raporlara ve sunumlara eklemek için yüksek çözünürlüklü PNG veya PDF olarak kaydeder.",
          "items": [
            {
              "bold": "plt.tight_layout()",
              "text": "Kenar boşluklarını otomatik kırparak etiketlerin kesilmesini engeller."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Bilişim Laboratuvarı Başarı Grafiği Üretimi",
      "subtitle": "Öğrencilerin sınav sonuçlarını sütun grafiği, çalışma saatlerini ise dağılım grafiği olarak çizdirme",
      "steps": [
        {
          "title": "1. Verileri Tanımla",
          "desc": "5 dersin adı ve sınıf ortalamalarını iki ayrı liste olarak tanımlayın."
        },
        {
          "title": "2. Bar Grafiği Çiz",
          "desc": "`plt.bar(dersler, ortalamalar, color=['#38bdf8', '#10b981', ...])` ile renklendirin."
        },
        {
          "title": "3. Ortalama Çizgisi Ekle",
          "desc": "`plt.axhline(y=70, color='r', linestyle='--')` ile 70 puan baraj çizgisi çekin."
        },
        {
          "title": "4. PNG Olarak Çıkar",
          "desc": "Oluşan grafiği `basari_grafigi.png` olarak kaydedip sunumunuza ekleyin."
        }
      ],
      "criteria": [
        "Matplotlib fonksiyonlarını ve parametrelerini doğru sözdizimiyle kullanma",
        "Eksen isimlerini ve grafik başlığını anlaşılır biçimde etiketleme",
        "Verinin tipine uygun grafik formatını (bar, plot, scatter) seçebilme"
      ]
    },
    "tips": {
      "safetyTitle": "Veri Görselleştirme Etik İlkeleri",
      "safetyRules": [
        {
          "bold": "Eksenleri Sıfırdan Başlatın (Trunking Axis)",
          "text": "Sütun grafiğinde Y eksenini 90'dan başlatırsanız 92 ile 95 arasındaki fark devasa görünür; yanıltıcı grafik çizmek etik dışıdır."
        },
        {
          "bold": "Aşırı Renk ve Süslemeden Kaçının (Chart Junk)",
          "text": "3D efektler, gereksiz desenler göz yorar ve verinin asıl mesajını gölgeler; sade ve net kalın."
        },
        {
          "bold": "Türkçe Karakter Sorunları",
          "text": "Matplotlib bazı işletim sistemlerinde Türkçe font bulamayabilir; standart `DejaVu Sans` veya `Arial` fontu belirtin."
        }
      ],
      "myths": [
        {
          "wrong": "Pasta grafiği (Pie Chart) her yerde kullanılabilir.",
          "correct": "Veri bilimciler pasta grafiğinden kaçınır; insan gözü açıları kıyaslamakta zorlanır. Sütun grafiği her zaman daha doğrudur."
        },
        {
          "wrong": "Matplotlib interaktif animasyonlar yapamaz.",
          "correct": "Matplotlib'in `animation.FuncAnimation` modülüyle canlı sensör akış grafikleri ve simülasyonlar yapılabilir."
        }
      ]
    },
    "quiz": {
      "question": "İki sürekli sayısal değişken arasındaki korelasyonu (ilişkiyi) noktalar kümesi olarak göstermek için Matplotlib'de hangi fonksiyon kullanılır?",
      "options": [
        {
          "text": "A) plt.bar()",
          "isCorrect": false
        },
        {
          "text": "B) plt.scatter()",
          "isCorrect": true
        },
        {
          "text": "C) plt.pie()",
          "isCorrect": false
        },
        {
          "text": "D) plt.hist()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `plt.scatter(x, y)` saçılım / dağılım grafiği çizer ve iki değişkenin birbiriyle nasıl bir ilişki içinde olduğunu noktalarla gösterir."
    },
    "summary": {
      "keyPoints": [
        "Veri görselleştirme ham veriyi hikâyeye ve eyleme dönüştüren köprüdür.",
        "Matplotlib esnek yapısıyla bilimsel makalelerden web panolarına kadar endüstri standardıdır.",
        "Dürüst ve net grafik çizmek bir veri bilimcinin en temel etik sorumluluğudur."
      ],
      "nextWeek": "Makine Öğrenmesine Giriş: Gözetimli Öğrenme & KNN Sınıflandırma",
      "homework": "Haftalık uyku saatleriniz ile kendinizi hissettiğiniz enerji seviyesi (1-10) arasındaki ilişkiyi gösteren bir scatter plot çiziniz."
    }
  },
  {
    "week": 33,
    "date": "26 Nisan - 02 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Veri Bilimi, Makine Öğrenmesi & Yapay Zekâ",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Makine Öğrenmesine Giriş & KNN Algoritması",
    "subtitle": "Geleneksel Programlama vs Makine Öğrenmesi, Öğrenme Türleri (Gözetimli, Gözetimsiz, Pekiştirmeli), Eğitim/Test Bölmesi (Train/Test Split), K-En Yakın Komşu (KNN) ve Öklid Mesafesi",
    "outcomeCode": "BB.10.5.4",
    "targetSkill": "Makine Öğrenmesi Modeli Eğitme & Sınıflandırma Mantığı",
    "curiosityQuestion": "Bir bilgisayara elma ile portakalı ayırt eden tek bir if-else kuralı bile yazmadan, sadece 1000 tane meyve fotoğrafı göstererek kendi kendine öğrenmesini nasıl sağlarsınız?",
    "roadmap": [
      {
        "title": "Programlamada Büyük Paradigma Değişimi",
        "desc": "Geleneksel: Kural + Veri = Sonuç. Makine Öğrenmesi: Veri + Sonuç = Kural!"
      },
      {
        "title": "Gözetimli Öğrenme (Supervised Learning)",
        "desc": "Etiketli verilerle (Örn: Fotoğraf ve 'Kedi' etiketi) modeli eğitme mantığı."
      },
      {
        "title": "KNN (K-Nearest Neighbors) Algoritması",
        "desc": "Bilinmeyen yeni bir veriyi en yakın 'K' adet komşusunun çoğunluk oyuna göre sınıflandırma."
      },
      {
        "title": "Öklid Mesafesi & Model Doğruluğu",
        "desc": "İki nokta arasındaki geometrik mesafe formülü ve test setinde başarı skoru (%95)."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(168, 85, 247, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- KNN Karar Alanı -->\n      <g transform=\"translate(40, 30)\">\n        <rect width=\"340\" height=\"150\" rx=\"6\" fill=\"#162038\" stroke=\"#334155\"/>\n        <text x=\"170\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#c084fc\">KNN (K=3) Sınıflandırma Mantığı</text>\n        \n        <!-- Mavi Sınıf (Elma) -->\n        <circle cx=\"70\" cy=\"55\" r=\"8\" fill=\"#38bdf8\"/>\n        <circle cx=\"95\" cy=\"80\" r=\"8\" fill=\"#38bdf8\"/>\n        <circle cx=\"60\" cy=\"105\" r=\"8\" fill=\"#38bdf8\"/>\n        \n        <!-- Kırmızı Sınıf (Portakal) -->\n        <circle cx=\"270\" cy=\"65\" r=\"8\" fill=\"#ef4444\"/>\n        <circle cx=\"240\" cy=\"95\" r=\"8\" fill=\"#ef4444\"/>\n        <circle cx=\"280\" cy=\"120\" r=\"8\" fill=\"#ef4444\"/>\n        \n        <!-- Yeni Bilinmeyen Nokta (?) -->\n        <circle cx=\"150\" cy=\"85\" r=\"9\" fill=\"#fbbf24\" stroke=\"#ffffff\" stroke-width=\"2\"/>\n        <text x=\"150\" y=\"89\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#070b14\">?</text>\n        \n        <!-- K=3 Çemberi -->\n        <circle cx=\"150\" cy=\"85\" r=\"45\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n        <line x1=\"150\" y1=\"85\" x2=\"95\" y2=\"80\" stroke=\"#38bdf8\" stroke-dasharray=\"2\"/>\n        <line x1=\"150\" y1=\"85\" x2=\"70\" y2=\"55\" stroke=\"#38bdf8\" stroke-dasharray=\"2\"/>\n        <line x1=\"150\" y1=\"85\" x2=\"240\" y2=\"95\" stroke=\"#ef4444\" stroke-dasharray=\"2\"/>\n      </g>\n      \n      <!-- Karar Çıkarımı -->\n      <g transform=\"translate(40, 195)\">\n        <rect width=\"340\" height=\"80\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n        <text x=\"170\" y=\"24\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#34d399\">Demokratik Oylama Sonucu (K=3)</text>\n        <text x=\"20\" y=\"48\" font-size=\"9\" fill=\"#cbd5e1\">• En yakın 3 komşudan 2'si MAVİ, 1'i KIRMIZI.</text>\n        <text x=\"20\" y=\"66\" font-size=\"9\" font-weight=\"bold\" fill=\"#38bdf8\">🏆 Karar: Bilinmeyen nesne MAVİ sınıfa aittir!</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Geleneksel Kodlama vs Makine Öğrenmesi",
      "subtitle": "Kuralları ezberletmek yerine veriden desen (pattern) çıkartma",
      "cards": [
        {
          "title": "KNN Algoritması Nasıl Karar Verir?",
          "icon": "🤖",
          "desc": "En sade ve anlaşılır gözetimli sınıflandırma algoritmasıdır:",
          "items": [
            {
              "bold": "1. Mesafe Ölçümü",
              "text": "Yeni gelen noktanın tüm eski noktalara uzaklığı Öklid formülüyle (`d = √((x2-x1)² + (y2-y1)²)` hesaplanır."
            },
            {
              "bold": "2. En Yakın K Komşuyu Seç",
              "text": "Mesafeler küçükten büyüğe sıralanır; en yakın K adet (örn: 3 veya 5) komşu belirlenir."
            },
            {
              "bold": "3. Çoğunluk Oyu",
              "text": "Komşular arasında en çok hangi etiket varsa yeni veri de o sınıfa atanır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Scikit-Learn ile İlk Yapay Zekâ Modeli",
      "subtitle": "Meyve ağırlığı ve pürüzlülüğüne göre sınıflandırma yapan Python kodu",
      "codeSnippet": "from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import train_test_split\n\n# Özellikler (X): [Ağırlık (gram), Pürüzlülük (1-Pürüzsüz, 10-Pürüzlü)]\nX = [\n    [150, 2], [160, 3], [140, 1], # Elma (0)\n    [170, 8], [180, 9], [190, 7]  # Portakal (1)\n]\ny = [0, 0, 0, 1, 1, 1] # Etiketler: 0=Elma, 1=Portakal\n\n# 1. Modeli Oluştur (K=3)\nmodel = KNeighborsClassifier(n_neighbors=3)\n\n# 2. Modeli Eğit (Fit)\nmodel.fit(X, y)\n\n# 3. Yeni Bilinmeyen Bir Meyve Tahmin Et\nyeni_meyve = [[165, 8.5]] # 165 gram ve çok pürüzlü\ntahmin = model.predict(yeni_meyve)\n\nsonuc = \"Portakal\" if tahmin[0] == 1 else \"Elma\"\nprint(f\"Yapay Zekânın Tahmini: {sonuc}\")",
      "codeTitle": "knn_siniflandirma.py",
      "codeLang": "Python 3 (Scikit-Learn)",
      "cards": [
        {
          "badge": "Temel Fonksiyon",
          "title": "fit() ve predict()",
          "desc": "`fit(X, y)` veriyi hafızaya alıp öğrenir; `predict(yeni)` ise öğrenilen tecrübeyle yeni duruma tahmin yürütür.",
          "items": [
            {
              "bold": "K Değeri Seçimi",
              "text": "Beraberlik durumunu önlemek için K sayısı genelde tek sayı (3, 5, 7) seçilir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Spam E-Posta / Mesaj Filtresi Simülasyonu",
      "subtitle": "İçinde 'Kredi', 'Bedava', 'Kazandınız' gibi kelimelerin sıklığına göre mesajı Spam veya Normal olarak sınıflandıran KNN modeli eğitme",
      "steps": [
        {
          "title": "1. Scikit-Learn Kur",
          "desc": "Terminalden `pip install scikit-learn` komutunu çalıştırın."
        },
        {
          "title": "2. Veri Seti Hazırla",
          "desc": "10 adet normal ve 10 adet spam mesajın kelime sayılarını X matrisine dökün."
        },
        {
          "title": "3. Modeli Eğit",
          "desc": "`KNeighborsClassifier(n_neighbors=3)` modelini `fit()` ile eğitin."
        },
        {
          "title": "4. Test Et",
          "desc": "Kendi uydurduğunuz şüpheli bir mesajı modele sorup spam tespiti başarısını ölçün."
        }
      ],
      "criteria": [
        "Öznitelik (Feature - X) ile Hedef Etiket (Label - y) arasındaki farkı kavramak",
        "Scikit-learn kütüphanesinin fit() ve predict() standart API'sini hatasız çalıştırmak",
        "K değerinin modelin kararlılığı üzerindeki etkisini açıklayabilmek"
      ]
    },
    "tips": {
      "safetyTitle": "Makine Öğrenmesinde Yanılgılar & Aşırı Öğrenme",
      "safetyRules": [
        {
          "bold": "Aşırı Öğrenme (Overfitting) Tuzağı",
          "text": "Model eğitimi ezberlerse yeni gördüğü veride çuvallar; eğitim verisiyle test verisini mutlaka ayırın (`train_test_split`)."
        },
        {
          "bold": "Veri Ölçekleme (Feature Scaling)",
          "text": "Ağırlık 1500 gram, pürüzlülük 2 ise mesafe formülünde ağırlık baskın çıkar; `StandardScaler` ile verileri 0-1 arasına normalize edin."
        },
        {
          "bold": "Yapay Zekâ Önyargısı (AI Bias)",
          "text": "Model sadece gösterdiğiniz veriyi öğrenir; eğitim verisinde hata veya yanlılık varsa model de önyargılı kararlar verir."
        }
      ],
      "myths": [
        {
          "wrong": "Yapay zekâ modelleri insan gibi bilinçlidir ve düşünür.",
          "correct": "Yapay zekâ bilinç taşımaz; sadece çok boyutlu geometrik uzayda mesafe, türev ve istatistik hesaplayan matematiksel formüllerdir."
        },
        {
          "wrong": "Ne kadar çok veri olursa model her zaman %100 doğru tahmin yapar.",
          "correct": "Verinin niceliği değil niteliği önemlidir; etiketleri bozuk 1 milyon veri, temiz 1000 veriden daha kötü sonuç üretir."
        }
      ]
    },
    "quiz": {
      "question": "K-En Yakın Komşu (KNN) algoritmasında, yeni bir veri noktasının hangi sınıfa ait olduğuna karar verilirken temel alınan matematiksel ilke hangisidir?",
      "options": [
        {
          "text": "A) Rastgele zar atma",
          "isCorrect": false
        },
        {
          "text": "B) En yakın K adet komşunun Öklid mesafesine göre çoğunluk oylaması (Majority Vote)",
          "isCorrect": true
        },
        {
          "text": "C) Verilerin ortalamasını çarpmak",
          "isCorrect": false
        },
        {
          "text": "D) Veritabanından satır silmek",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. KNN, yeni verinin uzaydaki konumunu mevcut verilere olan mesafesiyle kıyaslar ve en yakın komşularının çoğunluk sınıfına dahil eder."
    },
    "summary": {
      "keyPoints": [
        "Makine öğrenmesi bilgisayarlara kural dikte etmek yerine veriden kural keşfetme gücü verir.",
        "Gözetimli öğrenmede model geçmişteki etiketli tecrübelerden öğrenir.",
        "KNN algoritması yapay zekâ dünyasına adım atarken matematiksel sadeliğiyle en sağlam köprüdür."
      ],
      "nextWeek": "Bilgisayarlı Görü Temelleri: OpenCV ile Görüntü İşleme & Renk Tespiti",
      "homework": "Farklı K değerlerinin (K=1, K=3, K=7) sınıflandırma kararlarını nasıl değiştirdiğini küçük bir örnekle defterinize yazınız."
    }
  },
  {
    "week": 34,
    "date": "03 - 09 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Veri Bilimi, Makine Öğrenmesi & Yapay Zekâ",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Bilgisayarlı Görü Temelleri: OpenCV & Kamera",
    "subtitle": "Bilgisayarlı Görü (Computer Vision) Kavramı, OpenCV Kütüphanesi, Piksel Matrisleri (BGR), Gri Tonlama (Grayscale), Kenar Tespiti (Canny Edge) ve Canlı Kameradan Renk Algılama",
    "outcomeCode": "BB.10.5.5",
    "targetSkill": "Görüntü İşleme & Gerçek Zamanlı Kamera Görüntüsü Analizi",
    "curiosityQuestion": "Otonom arabalar yoldaki şeritleri ve kırmızı ışığı, telefonlar ise yüzümüzü karanlıkta bile nasıl saniyede 60 kare hızla tanıyabilir?",
    "roadmap": [
      {
        "title": "Bilgisayar Nasıl 'Görür'?",
        "desc": "Her pikselin 0 ile 255 arasında Kırmızı, Yeşil ve Mavi sayılardan oluştuğu 3B matrisler."
      },
      {
        "title": "OpenCV ve BGR Formatı",
        "desc": "Dünyanın en popüler bilgisayarlı görü motoru ve standart RGB yerine BGR renk dizilimi."
      },
      {
        "title": "Görüntü Filtreleme & Kenar Bulma",
        "desc": "Gri tonlama (`cvtColor`), bulanıklaştırma (`GaussianBlur`) ve Canny kenar tespiti."
      },
      {
        "title": "Canlı Kamera ile Renk Takibi",
        "desc": "Web kamerasından kırmızı bir nesneyi takip edip ekranda etrafına kutu çizme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(0, 240, 255, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Kamera Girişi -->\n      <g transform=\"translate(30, 40)\">\n        <rect width=\"110\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n        <text x=\"55\" y=\"25\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\">1. Renkli Kare (BGR)</text>\n        <rect x=\"25\" y=\"40\" width=\"60\" height=\"35\" rx=\"4\" fill=\"#ef4444\"/>\n        <text x=\"55\" y=\"62\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffffff\">3 Kanal (3D)</text>\n      </g>\n      \n      <path d=\"M 145 85 L 165 85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      \n      <!-- Gri Tonlama -->\n      <g transform=\"translate(165, 40)\">\n        <rect width=\"110\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n        <text x=\"55\" y=\"25\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#cbd5e1\">2. Gri Ton (Gray)</text>\n        <rect x=\"25\" y=\"40\" width=\"60\" height=\"35\" rx=\"4\" fill=\"#64748b\"/>\n        <text x=\"55\" y=\"62\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffffff\">1 Kanal (2D)</text>\n      </g>\n      \n      <path d=\"M 280 85 L 300 85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      \n      <!-- Canny Kenar Tespiti -->\n      <g transform=\"translate(300, 40)\">\n        <rect width=\"95\" height=\"90\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"2\"/>\n        <text x=\"47\" y=\"25\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#34d399\">3. Kenarlar</text>\n        <rect x=\"17\" y=\"40\" width=\"60\" height=\"35\" rx=\"4\" fill=\"#0f172a\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n        <line x1=\"25\" y1=\"50\" x2=\"65\" y2=\"65\" stroke=\"#10b981\"/>\n      </g>\n      \n      <!-- Renk Maskeleme (HSV) -->\n      <g transform=\"translate(30, 160)\">\n        <rect width=\"365\" height=\"110\" rx=\"8\" fill=\"#162038\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        <text x=\"182\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\">Canlı Kamera &amp; HSV Renk Takip Hattı</text>\n        <text x=\"20\" y=\"52\" font-family=\"monospace\" font-size=\"9\" fill=\"#a7f3d0\">cap = cv2.VideoCapture(0) # Kamerayı Aç</text>\n        <text x=\"20\" y=\"72\" font-family=\"monospace\" font-size=\"9\" fill=\"#38bdf8\">hsv = cv2.cvtColor(kare, cv2.COLOR_BGR2HSV)</text>\n        <text x=\"20\" y=\"92\" font-family=\"monospace\" font-size=\"9\" fill=\"#ffffff\">maske = cv2.inRange(hsv, alt_kirmizi, ust_kirmizi) # Sadece kırmızıyı bul!</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Dijital Görüntünün Piksel Anatomisi",
      "subtitle": "Işık yoğunluklarının 0-255 arasındaki sayısal matrislere dönüşümü",
      "cards": [
        {
          "title": "BGR vs RGB Renk Uzayı",
          "icon": "📷",
          "desc": "OpenCV tarihsel nedenlerle pikselleri Kırmızı-Yeşil-Mavi değil, Mavi-Yeşil-Kırmızı (BGR) sırasıyla okur.",
          "items": [
            {
              "bold": "Piksel Değeri (0-255)",
              "text": "0 tamamen zifiri karanlık (siyah), 255 ise en parlak ışıktır."
            },
            {
              "bold": "Neden Gri Tonlama (Grayscale)?",
              "text": "Renk bilgisi kenar ve şekil bulurken gereksiz hesap yükü getirir; 3 kanaldan tek kanala düşürerek hızı 3 kat artırırız."
            },
            {
              "bold": "Canny Kenar Bulucu",
              "text": "Piksel parlaklığının aniden değiştiği yerleri (türev alarak) tespit edip nesnelerin sınırlarını çizer."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Web Kamerasını Açan ve Kenar Çizen OpenCV Kodu",
      "subtitle": "Bilgisayar kamerasından canlı görüntü alıp gerçek zamanlı kenar tespiti yapma",
      "codeSnippet": "import cv2\n\n# 0: Varsayılan Dahili Web Kamerası\ncap = cv2.VideoCapture(0)\n\nwhile True:\n    ret, kare = cap.read() # Kameradan bir kare oku\n    if not ret:\n        break\n        \n    # 1. Gri Tona Çevir\n    gri = cv2.cvtColor(kare, cv2.COLOR_BGR2GRAY)\n    \n    # 2. Gürültüyü Azaltmak İçin Hafif Bulanıklaştır\n    bulanik = cv2.GaussianBlur(gri, (5, 5), 0)\n    \n    # 3. Canny Algoritmasıyla Kenarları Bul\n    kenarlar = cv2.Canny(bulanik, 50, 150)\n    \n    # Pencerelerde Göster\n    cv2.imshow('Orijinal Kamera', kare)\n    cv2.imshow('Yapay Zeka Kenar Tespiti', kenarlar)\n    \n    # 'q' tuşuna basılırsa döngüden çık\n    if cv2.waitKey(1) & 0xFF == ord('q'):\n        break\n\ncap.release()\ncv2.destroyAllWindows()",
      "codeTitle": "canli_kamera_kenar.py",
      "codeLang": "Python 3 (OpenCV)",
      "cards": [
        {
          "badge": "Kritik Döngü",
          "title": "while True & waitKey(1)",
          "desc": "Video aslında saniyede 30 kez çekilen fotoğrafların arka arkaya gösterilmesidir; waitKey(1) her kare arasında 1 milisaniye bekler.",
          "items": [
            {
              "bold": "Kaynak Temizliği",
              "text": "`cap.release()` kameranın donanımsal meşguliyetini serbest bırakır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kırmızı Elma / Kalem Takip Eden Akıllı Radar",
      "subtitle": "Kameraya gösterilen kırmızı bir nesnenin koordinatlarını bulup ekranda üzerine yeşil hedef kutusu çizen uygulama",
      "steps": [
        {
          "title": "1. OpenCV Kur",
          "desc": "Terminalden `pip install opencv-python` komutunu çalıştırın."
        },
        {
          "title": "2. HSV Uzayına Çevir",
          "desc": "`cv2.cvtColor(kare, cv2.COLOR_BGR2HSV)` ile renklere duyarlı uzaya geçin."
        },
        {
          "title": "3. Kırmızı Maskesi Al",
          "desc": "`cv2.inRange()` ile kırmızı renk aralığını beyaz, diğer yerleri siyah yapın."
        },
        {
          "title": "4. Kontur Bul ve Çiz",
          "desc": "`cv2.findContours()` ile nesnenin çevresine yeşil dikdörtgen `cv2.rectangle()` oturtun."
        }
      ],
      "criteria": [
        "OpenCV video yakalama döngüsünü hatasız inşa etme",
        "BGR, Grayscale ve HSV renk uzaylarının kullanım amaçlarını ayırt edebilme",
        "Görüntü işleme pencerelerini ve kamera kaynağını güvenle kapatma"
      ]
    },
    "tips": {
      "safetyTitle": "Kamera ve Görüntü İşleme Güvenliği",
      "safetyRules": [
        {
          "bold": "Işıklandırma Değişkenliği",
          "text": "Odadaki ışık değiştiğinde RGB değerleri bozulur; renk takibi projelerinde her zaman ışığa dayanıklı HSV formatını kullanın."
        },
        {
          "bold": "Kamera İzinleri",
          "text": "macOS ve Windows'ta terminalin veya IDE'nin kamera erişim izninin açık olduğundan emin olun."
        },
        {
          "bold": "Büyük Çözünürlük Yavaşlatır",
          "text": "4K kamerayı gerçek zamanlı işlemek bilgisayarı kilitler; `cap.set(3, 640)` ile 640x480 çözünürlüğe ölçekleyin."
        }
      ],
      "myths": [
        {
          "wrong": "Kameradan okunan görüntüler otomatik olarak RGB formatındadır.",
          "correct": "OpenCV kütüphanesinde varsayılan renk dizilimi BGR'dır (Mavi, Yeşil, Kırmızı)."
        },
        {
          "wrong": "Kenar bulmak için yapay zekâ derin sinir ağı şarttır.",
          "correct": "Canny algoritması 1986'da geliştirilmiş saf matematiksel bir filtredir; yapay sinir ağı olmadan da harika kenar bulur."
        }
      ]
    },
    "quiz": {
      "question": "OpenCV kütüphanesinde bir görüntüyü kenar tespiti veya yüz tanıma işlemine sokmadan önce hesaplama yükünü azaltmak amacıyla standart olarak hangi formata dönüştürürüz?",
      "options": [
        {
          "text": "A) CMYK Formatı",
          "isCorrect": false
        },
        {
          "text": "B) Gri Tonlama (Grayscale)",
          "isCorrect": true
        },
        {
          "text": "C) Negatif Format",
          "isCorrect": false
        },
        {
          "text": "D) 16-bit Ses Formatı",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Gri tonlama görüntüyü 3 renk kanalından (B, G, R) tek bir parlaklık kanalına indirir; bu sayede algoritma 3 kat daha hızlı çalışır."
    },
    "summary": {
      "keyPoints": [
        "Bilgisayarlı görü, kameralardan gelen piksel matrislerini yapay zekâ için anlamlı verilere dönüştürür.",
        "OpenCV robotik gözler, otonom araçlar ve yüz tanıma sistemlerinin endüstriyel kalbidir.",
        "Artık bilgisayarımız sadece hesap yapmıyor, etrafındaki fiziksel dünyayı da görebiliyor!"
      ],
      "nextWeek": "Versiyon Kontrol Sistemleri: Git & GitHub ile Profesyonel İş Birliği",
      "homework": "Telefonunuzdaki yüz tanıma veya parmak izi okuyucu sistemlerinin arkasındaki biyometrik görüntü işleme adımlarını araştırınız."
    }
  },
  {
    "week": 35,
    "date": "10 - 16 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & Bitirme Projeleri",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "Git & GitHub ile Profesyonel İş Birliği",
    "subtitle": "Takım Çalışması (Collaborative Development), Dal (Branch) Yönetimi, Çakışma Çözme (Merge Conflict), Pull Request (PR), Kod İnceleme (Code Review) ve README.md Tasarımı",
    "outcomeCode": "BB.10.6.1",
    "targetSkill": "Açık Kaynak İş Birliği & Sürüm Kontrol Yönetimi",
    "curiosityQuestion": "Linux çekirdeğinde dünyanın dört bir yanından 15.000 farklı yazılımcı tek bir satır kod bile kaybolmadan nasıl ortak bir işletim sistemi üretebilir?",
    "roadmap": [
      {
        "title": "Bireysel Git'ten Takım Git'ine",
        "desc": "Tek başına commit atmak yerine onlarca dalın (branch) eşzamanlı birleştiği büyük nehir."
      },
      {
        "title": "Dallanma Stratejisi (Git Flow)",
        "desc": "`main` dalı stabil canlı koddur; yeni özellikler `feature/login` dallarında geliştirilir."
      },
      {
        "title": "Merge Conflict (Çakışma) Çözümü",
        "desc": "İki geliştirici aynı dosyayı değiştirdiğinde Git'in durup insan aklına danışması."
      },
      {
        "title": "Pull Request & Profesyonel Portfolyo",
        "desc": "GitHub'da kod inceleme kültürü ve vitrininiz olan README.md dosyasını süsleme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Git Branching Akışı -->\n      <g transform=\"translate(35, 40)\">\n        <rect width=\"350\" height=\"130\" rx=\"8\" fill=\"#162038\" stroke=\"#334155\"/>\n        <text x=\"175\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\">Git Dallanma &amp; Birleşme (Branch &amp; Merge)</text>\n        \n        <!-- Ana Dal (main) -->\n        <line x1=\"30\" y1=\"55\" x2=\"320\" y2=\"55\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n        <circle cx=\"50\" cy=\"55\" r=\"7\" fill=\"#38bdf8\"/><text x=\"50\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" fill=\"#cbd5e1\">v1.0</text>\n        <circle cx=\"140\" cy=\"55\" r=\"7\" fill=\"#38bdf8\"/>\n        <circle cx=\"300\" cy=\"55\" r=\"7\" fill=\"#38bdf8\"/><text x=\"300\" y=\"42\" text-anchor=\"middle\" font-size=\"8\" fill=\"#34d399\">v2.0</text>\n        <text x=\"330\" y=\"58\" font-size=\"9\" font-weight=\"bold\" fill=\"#38bdf8\">main</text>\n        \n        <!-- Özellik Dalı (feature) -->\n        <path d=\"M 140 55 Q 170 105 210 105 L 260 105 Q 285 105 300 55\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\" stroke-dasharray=\"3\"/>\n        <circle cx=\"210\" cy=\"105\" r=\"6\" fill=\"#10b981\"/>\n        <circle cx=\"260\" cy=\"105\" r=\"6\" fill=\"#10b981\"/>\n        <text x=\"235\" y=\"122\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#86efac\">feature/sensor-api</text>\n      </g>\n      \n      <!-- Pull Request & Merge Kutusu -->\n      <g transform=\"translate(35, 185)\">\n        <rect width=\"350\" height=\"85\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n        <text x=\"175\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#34d399\">GitHub Pull Request (PR) Kültürü</text>\n        <text x=\"20\" y=\"48\" font-size=\"9\" fill=\"#cbd5e1\">1. Geliştirici kodunu kendi dalından PR olarak açar.</text>\n        <text x=\"20\" y=\"68\" font-size=\"9\" fill=\"#cbd5e1\">2. Takım arkadaşları kodu inceler, yorum yapar ve onaylar (Approved &amp; Merged).</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Merge Conflict (Çakışma) Bir Felaket Değildir",
      "subtitle": "İki geliştiricinin aynı satırı değiştirmesi durumunda profesyonel uzlaşma",
      "cards": [
        {
          "title": "Git Çakışma İşaretleri (Conflict Markers)",
          "icon": "⚔️",
          "desc": "Git iki satır arasında karar veremediğinde dosyaya şu işaretleri bırakır:",
          "items": [
            {
              "bold": "<<<<<<< HEAD",
              "text": "Sizin mevcut dalınızdaki kodların başladığı yerdir."
            },
            {
              "bold": "=======",
              "text": "İki farklı kod versiyonunu ayıran orta sınırdır."
            },
            {
              "bold": ">>>>>>> feature",
              "text": "Diğer daldan gelen kodların bittiği yerdir. Yazılımcı doğru olanı seçip işaretleri siler ve commit atar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Takım Çalışması İçin Terminal Komutları",
      "subtitle": "Dal açma, uzaktaki kodu çekme ve birleştirme akışı",
      "codeSnippet": "# 1. Ana dalın en güncel halini çek\n$ git checkout main\n$ git pull origin main\n\n# 2. Yeni bir özellik için dal (branch) aç ve geç\n$ git checkout -b feature/karanlik-mod\n\n# 3. Kodları yaz, test et ve commit at\n$ git add .\n$ git commit -m \"feat: CSS dark mode paleti eklendi\"\n\n# 4. Kendi dalını GitHub'a gönder\n$ git push -u origin feature/karanlik-mod\n\n# 5. GitHub web sitesinden 'Open Pull Request' butonuna tıkla!",
      "codeTitle": "git_takim_akisi.sh",
      "codeLang": "Bash",
      "cards": [
        {
          "badge": "Kural",
          "title": "Doğrudan main'e Commit Atılmaz!",
          "desc": "Büyük yazılım şirketlerinde ana dal (main) korumaya alınır (Protected Branch); sadece PR onayı alan kodlar birleşebilir.",
          "items": [
            {
              "bold": "Conventional Commits",
              "text": "`feat:`, `fix:`, `docs:` gibi önekler commit geçmişini pırıl pırıl yapar."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "3 Kişilik Takımla Ortak Proje Simülasyonu",
      "subtitle": "Bir öğrencinin depo kurup diğer iki arkadaşını davet ettiği, herkesin kendi dalında bir özellik ekleyip PR ile birleştirdiği atölye",
      "steps": [
        {
          "title": "1. Depoyu Aç & Davet Et",
          "desc": "Grup lideri GitHub'da `lise_bitirme_projesi` reposu açıp takım arkadaşlarını 'Collaborator' eklesin."
        },
        {
          "title": "2. Dallar Açın",
          "desc": "1. öğrenci `feature/navbar`, 2. öğrenci `feature/footer` dallarında çalışsın."
        },
        {
          "title": "3. PR Açın ve İnceleyin",
          "desc": "Dallar GitHub'a push edilip karşılıklı Pull Request incelensin."
        },
        {
          "title": "4. Bilerek Çakışma Çözün",
          "desc": "Aynı satırı değiştirip `git merge` sırasında çıkan conflict işaretlerini elle temizleyin."
        }
      ],
      "criteria": [
        "Git dallanma komutlarını (branch, checkout, merge) terminalde hatasız yönetme",
        "Merge conflict durumunda soğukkanlılıkla doğru kodu seçip temiz commit atma",
        "GitHub üzerinde yapıcı ve profesyonel kod inceleme yorumu yazma"
      ]
    },
    "tips": {
      "safetyTitle": "GitHub Portfolyo ve Profil Hijyeni",
      "safetyRules": [
        {
          "bold": "README.md Projenin Vitrinidir",
          "text": "Açıklaması, ekran görüntüleri ve kurulum adımları olmayan bir GitHub projesi ölü bir koddur."
        },
        {
          "bold": "Büyük Veri Setlerini Git'e Atmayın",
          "text": "Git 100MB'dan büyük dosyaları kabul etmez; CSV ve model dosyalarını `.gitignore` içine alın."
        },
        {
          "bold": "SSH Anahtarı (SSH Key) Kullanın",
          "text": "Her push işleminde şifre girmemek için bilgisayarınızın SSH anahtarını GitHub profilinize ekleyin."
        }
      ],
      "myths": [
        {
          "wrong": "Merge Conflict bir hatadır veya kodun bozulduğu anlamına gelir.",
          "correct": "Asla! Conflict bir hata değil, Git'in iki kişinin emeğini korumak için 'Hangisini seçeyim?' diye yazılımcıya sorduğu güvenlik kalkanıdır."
        },
        {
          "wrong": "GitHub sadece açık kaynaklı projeler içindir.",
          "correct": "Dünyadaki milyonlarca şirket özel (private) ticari projelerini ve fikri mülkiyetlerini GitHub üzerinde güvenle saklar."
        }
      ]
    },
    "quiz": {
      "question": "Git sisteminde ana kodu bozmadan 'ozellik' adında yeni bir geliştirme dalı (branch) oluşturup doğrudan o dala geçiş yapan tek satırlık pratik komut hangisidir?",
      "options": [
        {
          "text": "A) git branch new ozellik",
          "isCorrect": false
        },
        {
          "text": "B) git checkout -b ozellik",
          "isCorrect": true
        },
        {
          "text": "C) git create ozellik",
          "isCorrect": false
        },
        {
          "text": "D) git jump ozellik",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `git checkout -b dal_adi` komutu aynı anda hem yeni bir dal oluşturur hem de çalışma alanını o dala geçirir."
    },
    "summary": {
      "keyPoints": [
        "Yazılım bireysel bir çaba değil, küresel bir takım sporudur.",
        "Git ve GitHub modern yazılım sektörünün ortak pasaportudur.",
        "Geleceğin mühendisleri olarak şimdiden açık kaynak kültürünü ve iş birliği ahlakını benimsiyoruz."
      ],
      "nextWeek": "Çevik Yazılım Geliştirme (Agile, Scrum, Kanban) & Proje Planlama",
      "homework": "Kişisel GitHub profiliniz için markdown formatında kendinizi tanıtan şık bir `README.md` dosyası hazırlayınız."
    }
  },
  {
    "week": 36,
    "date": "17 - 23 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & Bitirme Projeleri",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "Çevik Yazılım Geliştirme: Agile, Scrum & Kanban",
    "subtitle": "Geleneksel Şelale (Waterfall) vs Çevik (Agile) Metodoloji, Scrum Çerçevesi (Sprint, Daily Scrum, Retrospective), Kanban Panosu (To-Do, In Progress, Done) ve Kullanıcı Hikâyeleri (User Stories)",
    "outcomeCode": "BB.10.6.2",
    "targetSkill": "Proje Yönetimi, Çevik Metodolojiler & Ekip Koordinasyonu",
    "curiosityQuestion": "Aylar süren projelerin müşterinin istediği gibi çıkmayıp çöpe gitmesini engelleyen '2 haftalık sprintler' felsefesi nedir?",
    "roadmap": [
      {
        "title": "Şelale (Waterfall) Neden İflas Etti?",
        "desc": "1 yıl plan yapıp sonra kod yazmanın değişen dünya şartlarında başarısız oluşu."
      },
      {
        "title": "Agile Manifestosu",
        "desc": "Kapsamlı dokümantasyon yerine çalışan yazılıma, sözleşme yerine iş birliğine değer verme."
      },
      {
        "title": "Scrum Çerçevesi & Roller",
        "desc": "Product Owner (Ürün Sahibi), Scrum Master (Kolaylaştırıcı) ve Geliştirme Takımı."
      },
      {
        "title": "Kanban Panosu",
        "desc": "Yapılacaklar, Yapılıyor ve Bitti sütunlarıyla iş akışını şeffaf ve canlı yönetme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(16, 185, 129, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Kanban Panosu Görseli -->\n      <g transform=\"translate(30, 35)\">\n        <rect width=\"360\" height=\"150\" rx=\"8\" fill=\"#162038\" stroke=\"#334155\"/>\n        <text x=\"180\" y=\"22\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Proje Kanban Panosu (Sprint 1)</text>\n        \n        <!-- Sütun 1: Yapılacak (To-Do) -->\n        <g transform=\"translate(15, 35)\">\n          <rect width=\"100\" height=\"100\" rx=\"4\" fill=\"#1e293b\"/>\n          <text x=\"50\" y=\"16\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#fca5a5\">Yapılacak (To-Do)</text>\n          <rect x=\"8\" y=\"25\" width=\"84\" height=\"26\" rx=\"3\" fill=\"#0f172a\"/><text x=\"12\" y=\"41\" font-size=\"7\" fill=\"#ffffff\">Röle Devresi</text>\n          <rect x=\"8\" y=\"56\" width=\"84\" height=\"26\" rx=\"3\" fill=\"#0f172a\"/><text x=\"12\" y=\"72\" font-size=\"7\" fill=\"#ffffff\">Grafik Ekranı</text>\n        </g>\n        \n        <!-- Sütun 2: Yapılıyor (In Progress) -->\n        <g transform=\"translate(130, 35)\">\n          <rect width=\"100\" height=\"100\" rx=\"4\" fill=\"#1e293b\"/>\n          <text x=\"50\" y=\"16\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#fef08a\">Yapılıyor</text>\n          <rect x=\"8\" y=\"25\" width=\"84\" height=\"30\" rx=\"3\" fill=\"#0f172a\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"12\" y=\"43\" font-size=\"7\" font-weight=\"bold\" fill=\"#fbbf24\">Flask API</text>\n        </g>\n        \n        <!-- Sütun 3: Bitti (Done) -->\n        <g transform=\"translate(245, 35)\">\n          <rect width=\"100\" height=\"100\" rx=\"4\" fill=\"#1e293b\"/>\n          <text x=\"50\" y=\"16\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#86efac\">Bitti (Done)</text>\n          <rect x=\"8\" y=\"25\" width=\"84\" height=\"26\" rx=\"3\" fill=\"#047857\"/><text x=\"12\" y=\"41\" font-size=\"7\" fill=\"#ffffff\">SQL Şeması</text>\n          <rect x=\"8\" y=\"56\" width=\"84\" height=\"26\" rx=\"3\" fill=\"#047857\"/><text x=\"12\" y=\"72\" font-size=\"7\" fill=\"#ffffff\">HTML İskelet</text>\n        </g>\n      </g>\n      \n      <!-- Sprint Döngüsü -->\n      <g transform=\"translate(30, 200)\">\n        <rect width=\"360\" height=\"70\" rx=\"8\" fill=\"#1e293b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n        <text x=\"180\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#34d399\">2 Haftalık Sprint Döngüsü</text>\n        <text x=\"20\" y=\"45\" font-size=\"9\" fill=\"#cbd5e1\">Sprint Planlama -> Günlük 15 Dk Toplantı (Daily) -> Demo &amp; Retrospektif</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Kullanıcı Hikâyesi (User Story) Nasıl Yazılır?",
      "subtitle": "Yazılım taleplerini teknik jargondan arındırıp kullanıcı faydasına odaklama",
      "cards": [
        {
          "title": "Standart Çevik Hikâye Formatı",
          "icon": "📋",
          "desc": "Her özellik Jira veya Trello panosuna şu kalıpla yazılır:",
          "items": [
            {
              "bold": "Kalıp",
              "text": "'Bir [KULLANICI TİPİ] olarak, [BİR HEDEF / İSTEK] istiyorum, böylece [SAĞLANAN FAYDA] elde edebileyim.'"
            },
            {
              "bold": "Örnek",
              "text": "'Bir **Öğrenci** olarak, **kütüphanedeki kitapları ada göre aratabilmek** istiyorum, böylece **aradığım kaynağı dakikalarca aramadan hızla bulabileyim**.'"
            },
            {
              "bold": "Kabul Kriterleri (Acceptance Criteria)",
              "text": "Görevin bitti sayılması için nelerin testten geçmesi gerektiğini netleştiren maddeler."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Scrum Toplantıları ve Ritüelleri",
      "subtitle": "Takımın senkronize kalmasını sağlayan düzenli buluşmalar",
      "cards": [
        {
          "badge": "Ritüel 1",
          "title": "Günlük Ayaküstü Toplantı (Daily Scrum)",
          "desc": "Her sabah en fazla 15 dakika sürer; herkes ayakta 3 soruya cevap verir:",
          "items": [
            {
              "bold": "3 Soru",
              "text": "1) Dün ne yaptım? 2) Bugün ne yapacağım? 3) Önümde beni engelleyen bir blokaj var mı?"
            }
          ]
        },
        {
          "badge": "Ritüel 2",
          "title": "Sprint Retrospektifi",
          "desc": "Sprint bitince yapılan iç değerlendirme:",
          "items": [
            {
              "bold": "Gelişim",
              "text": "Neleri iyi yaptık? Neleri daha iyi yapabilirdik? Bir sonraki sprintte neyi değiştireceğiz?"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Bitirme Projesi İçin Sınıf Kanban Panosu Kurma",
      "subtitle": "Her projenin görevlerini renkli post-it veya Trello ile Yapılacak, Yapılıyor ve Bitti sütunlarına bölme",
      "steps": [
        {
          "title": "1. Takım Rollerini Belirle",
          "desc": "Gruptan bir Ürün Sahibi (Product Owner) ve bir Scrum Master seçin."
        },
        {
          "title": "2. Görevleri Parçala",
          "desc": "Büyük projeyi en fazla 2 günlük küçük parçalara (User Stories) bölün."
        },
        {
          "title": "3. WIP (Work In Progress) Limiti Koy",
          "desc": "'Yapılıyor' sütununda aynı anda en fazla 2 iş olmasına izin verin (odaklanma kuralı)."
        },
        {
          "title": "4. İlk Kartı Taşıyın",
          "desc": "İlk görevi 'In Progress'e çekerek bitirme projesi maratonunu başlatın."
        }
      ],
      "criteria": [
        "Kullanıcı hikayesi (User Story) formatını amaca uygun ve eksiksiz yazma",
        "WIP (Work in Progress) limitinin aşırı yüklenmeyi önleyen felsefesini kavrama",
        "Scrum rollerinin ve günlük ayaküstü toplantıların disiplinine uyma"
      ]
    },
    "tips": {
      "safetyTitle": "Çevik Yönetimde Tuzaklar",
      "safetyRules": [
        {
          "bold": "Kapsam Kayması (Scope Creep)",
          "text": "Proje geliştirilirken sürekli 'Şunu da ekleyelim' denirse proje asla bitmez; yeni fikirleri sonraki sprintlere erteleyin."
        },
        {
          "bold": "Daily Scrum Toplantılarını Uzatmayın",
          "text": "Daily bir teknik tartışma yeri değildir; sadece durum güncellemesidir, 15 dakikayı aşmamalıdır."
        },
        {
          "bold": "Görevleri Çok Büyük Bırakmayın",
          "text": "'Web sitesini yap' bir görev değildir; 'Giriş formunu kodla', 'Veritabanı tablosunu kur' şeklinde atomik olmalıdır."
        }
      ],
      "myths": [
        {
          "wrong": "Agile metodolojide hiç planlama yapılmaz, herkes kafasına göre kod yazar.",
          "correct": "Agile katı ve hantal planlara karşıdır; aksine her 2 haftada bir sürekli ve dinamik planlama yapar."
        },
        {
          "wrong": "Scrum Master takımın patronudur ve emir verir.",
          "correct": "Scrum Master patron değil bir 'Hizmetkâr Liderdir' (Servant Leader); amacı takımın önündeki engelleri temizlemektir."
        }
      ]
    },
    "quiz": {
      "question": "Scrum metodolojisinde her gün yapılan ve en fazla 15 dakika süren, geliştiricilerin dünkü işlerini, bugünkü planlarını ve önlerindeki engelleri paylaştığı toplantıya ne ad verilir?",
      "options": [
        {
          "text": "A) Sprint Retrospective",
          "isCorrect": false
        },
        {
          "text": "B) Daily Scrum (Günlük Ayaküstü Toplantı)",
          "isCorrect": true
        },
        {
          "text": "C) Sprint Planning",
          "isCorrect": false
        },
        {
          "text": "D) Code Review",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Daily Scrum, takımın iletişimini taze tutmak ve engelleri erken teşhis etmek için her iş günü 15 dakikalık hızlı bir senkronizasyon toplantısıdır."
    },
    "summary": {
      "keyPoints": [
        "Yazılım mühendisliği sadece kod yazmak değil, projeyi başarıyla yönetebilme olgunluğudur.",
        "Kanban panosu iş akışını şeffaflaştırır ve darboğazları anında gösterir.",
        "Bitirme projemize çevik disiplinle başlayarak yıl sonu şenliğine eksiksiz hazırlanıyoruz."
      ],
      "nextWeek": "Yıl Sonu Büyük Capstone Proje Başlangıcı: Sistem Tasarımı & Mimari",
      "homework": "Bitirme projeniz için 3 adet 'Bir ... olarak, ... istiyorum, böylece ...' formatında kullanıcı hikâyesi yazınız."
    }
  },
  {
    "week": 37,
    "date": "24 - 30 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & Bitirme Projeleri",
    "unitBadge": "Büyük Proje",
    "unitTheme": "unite-6",
    "title": "Büyük Capstone Proje: Sistem Tasarımı & Mimari",
    "subtitle": "10. Sınıf Bitirme Projesi (Capstone Project) Başlangıcı, Proje Konusu Seçimi (Robotik/IoT, Web Portalı veya Yapay Zekâ Analitiği), Mimari Şema Çizimi ve Modüler Görev Dağılımı",
    "outcomeCode": "BB.10.6.3",
    "targetSkill": "Bütünleşik Sistem Mimarisi Tasarımı & Şartname Hazırlama",
    "curiosityQuestion": "10. sınıf boyunca öğrendiğiniz Nesne Yönelimli Programlama, Arduino sensörleri, Flask web sunucusu ve SQL veritabanını tek bir devasa projede nasıl birleştirirsiniz?",
    "roadmap": [
      {
        "title": "Capstone Proje Vizyonu",
        "desc": "Lise müfredatının tüm kazanımlarını somut, çalışan ve topluma faydalı bir ürüne dönüştürme."
      },
      {
        "title": "3 Büyük Proje Kulvarı",
        "desc": "1) Akıllı Tarım / IoT Otomasyonu, 2) Okul Kütüphane / Etkinlik Web Portalı, 3) Yapay Zekâ Destekli Görüntü / Veri Analiz Sistemi."
      },
      {
        "title": "Sistem Mimari Şeması (Block Diagram)",
        "desc": "Donanım, Backend, Veritabanı ve Arayüz arasındaki veri akışını projelendirme."
      },
      {
        "title": "Teknik Şartname & Görev Dağılımı",
        "desc": "Kimin hangi modülü yazacağının Git repolarıyla netleştirilmesi."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(0, 240, 255, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Bütünleşik Capstone Mimarisi -->\n      <g transform=\"translate(30, 30)\">\n        <rect width=\"360\" height=\"235\" rx=\"8\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"2\"/>\n        <text x=\"180\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#00f0ff\">Bütünleşik Capstone Proje Mimarisi</text>\n        \n        <!-- Katman 1: Donanım & Sensörler -->\n        <rect x=\"20\" y=\"42\" width=\"95\" height=\"75\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\"/>\n        <text x=\"67\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#fbbf24\">1. Donanım / IoT</text>\n        <text x=\"67\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffffff\">ESP32 / Arduino</text>\n        <text x=\"67\" y=\"94\" text-anchor=\"middle\" font-size=\"8\" fill=\"#a7f3d0\">Sensör &amp; Servo</text>\n        \n        <!-- Katman 2: Flask API & İş Mantığı -->\n        <rect x=\"132\" y=\"42\" width=\"95\" height=\"75\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n        <text x=\"180\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#34d399\">2. Python Backend</text>\n        <text x=\"180\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffffff\">Flask REST API</text>\n        <text x=\"180\" y=\"94\" text-anchor=\"middle\" font-size=\"8\" fill=\"#38bdf8\">OOP Sınıfları</text>\n        \n        <!-- Katman 3: SQL Veritabanı -->\n        <rect x=\"245\" y=\"42\" width=\"95\" height=\"75\" rx=\"6\" fill=\"#1e293b\" stroke=\"#8b5cf6\"/>\n        <text x=\"292\" y=\"60\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#c084fc\">3. Veritabanı</text>\n        <text x=\"292\" y=\"78\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffffff\">SQLite3</text>\n        <text x=\"292\" y=\"94\" text-anchor=\"middle\" font-size=\"8\" fill=\"#fbbf24\">İlişkisel Tablolar</text>\n        \n        <!-- Katman 4: Web Arayüzü & Yapay Zeka Grafikleri -->\n        <rect x=\"20\" y=\"135\" width=\"320\" height=\"80\" rx=\"6\" fill=\"#1e1b4b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"180\" y=\"155\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#38bdf8\">4. Kullanıcı Arayüzü &amp; Canlı Dashboard</text>\n        <text x=\"180\" y=\"175\" text-anchor=\"middle\" font-size=\"9\" fill=\"#cbd5e1\">HTML5 Semantik İskelet | CSS Grid &amp; Flexbox | JS fetch() | Matplotlib Trend Grafikleri</text>\n        <text x=\"180\" y=\"195\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#34d399\">Tüm Yılın Kazanımları Tek Bir Canlı Sistemde!</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Capstone Projesi Başarı Kriterleri",
      "subtitle": "MEB Maarif Modeli çerçevesinde değerlendirilecek temel çıktılar",
      "cards": [
        {
          "title": "Bir Mühendislik Projesinin 4 Temel Taşı",
          "icon": "🏛️",
          "desc": "Projenizin geçerli sayılması için şu 4 katmanı içermesi beklenir:",
          "items": [
            {
              "bold": "1. Veri Üretimi / Girişi",
              "text": "Sensörlerden (IoT) veya web formlarından gelen canlı veriler."
            },
            {
              "bold": "2. İşleme ve OOP Mantığı",
              "text": "Python sınıflarıyla (Class) verinin modellenmesi ve doğrulanması."
            },
            {
              "bold": "3. Kalıcı Depolama",
              "text": "Verilerin SQLite veritabanına ilişkisel tablolarla kaydedilmesi."
            },
            {
              "bold": "4. Kullanıcı Arayüzü",
              "text": "Web tarayıcısından izlenebilen ve yönetilebilen responsive bir kontrol paneli."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Örnek Proje Şartnamesi (Teknik Doküman)",
      "subtitle": "Akıllı Sera ve Çevre İzleme Sistemi Mimari Özeti",
      "cards": [
        {
          "badge": "Kulvar A",
          "title": "Akıllı Sera Otomasyonu",
          "desc": "Toprak nemini ölçüp azaldığında pompayı çalıştıran, verileri Flask API üzerinden SQLite'a yazıp webde canlı çizen sistem.",
          "items": [
            {
              "bold": "Teknolojiler",
              "text": "Arduino/ESP32, Python Flask, SQLite, HTML/CSS/JS, Matplotlib."
            }
          ]
        },
        {
          "badge": "Kulvar B",
          "title": "Bilişim Kulübü & Kütüphane Otomasyonu",
          "desc": "Öğrenci ve kitap kayıtlarını SQL'de tutan, ödünç alma durumunu takip eden ve web üzerinden arama yaptıran yazılım.",
          "items": [
            {
              "bold": "Teknolojiler",
              "text": "Python OOP, Flask, SQLite3, Bootstrap/CSS Grid."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Proje Şartnamesi ve Mimari Diyagram Hazırlama",
      "subtitle": "Her takımın projesinin amacını, kullanacağı teknolojileri ve veritabanı ER şemasını kağıda veya çizim aracına dökmesi",
      "steps": [
        {
          "title": "1. Proje Adını ve Amacını Seç",
          "desc": "Takımca toplanıp hangi gerçek yaşam problemine çözüm üreteceğinizi kararlaştırın."
        },
        {
          "title": "2. Mimari Şemayı Çiz",
          "desc": "Verinin sensörden çıkıp veritabanına ve oradan ekrana nasıl akacağını kutu ve oklarla çizin."
        },
        {
          "title": "3. Veritabanı Tablolarını Belirle",
          "desc": "En az 2 ilişkili tablo (PK, FK) tasarlayın."
        },
        {
          "title": "4. Öğretmen Onayı Al",
          "desc": "Şartnamenizi zümre öğretmenine sunup yapıcı geri bildirimlerle geliştirin."
        }
      ],
      "criteria": [
        "Sistem bileşenleri arasındaki veri akışını doğru modelleme",
        "Kullanılacak teknolojileri gerçekçi ve uygulanabilir seçme",
        "Takım içi rol ve görev dağılımını şeffaf bir çizelgeye bağlama"
      ]
    },
    "tips": {
      "safetyTitle": "Proje Planlama İlkeleri",
      "safetyRules": [
        {
          "bold": "MVP (Minimum Viable Product) Mantığı",
          "text": "Önce projenin en temel çalışan çekirdeğini yapın; süslemeleri ve ekstra özellikleri sonraya bırakın."
        },
        {
          "bold": "Modüler Geliştirin",
          "text": "Herkes ayrı bir Python fonksiyonu veya devre üzerinde çalışsın; modülleri en son birleştirin."
        },
        {
          "bold": "Sürekli Git Commit Atın",
          "text": "Akşam bilgisayar çökse bile projenin GitHub'da güvende olduğundan emin olun."
        }
      ],
      "myths": [
        {
          "wrong": "Büyük projeyi bitirmek için yüzlerce sayfa kod yazmak gerekir.",
          "correct": "Önemli olan kodun uzunluğu değil, mimarinin temizliği, modülerliği ve hatasız çalışmasıdır."
        },
        {
          "wrong": "Tüm projeyi tek bir dahi öğrencinin yazması takım için daha iyidir.",
          "correct": "Yazılım mühendisliği takım disiplinidir; görev paylaşımı yapmayan takımlar sunumda başarısız olur."
        }
      ]
    },
    "quiz": {
      "question": "Bir yazılım projesine başlamadan önce projenin temel işlevlerini içeren ilk çalışan en yalın sürümüne yazılım mühendisliğinde ne ad verilir?",
      "options": [
        {
          "text": "A) Beta Test",
          "isCorrect": false
        },
        {
          "text": "B) MVP (Minimum Viable Product - Minimum Uygulanabilir Ürün)",
          "isCorrect": true
        },
        {
          "text": "C) Final Release",
          "isCorrect": false
        },
        {
          "text": "D) Full Stack",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. MVP, projenin temel değerini kanıtlayan en sade çalışan modelidir; önce MVP inşa edilir, sonra üzerine ek özellikler inşa edilir."
    },
    "summary": {
      "keyPoints": [
        "Capstone projesi lise bilişim eğitiminizin taçlandığı zirve noktasıdır.",
        "Sağlam bir mimari tasarım kodlama süresini yarı yarıya kısaltır ve hataları önler.",
        "Artık teori bitti, üreten ve çözüm geliştiren genç mühendisler olarak sahadayız!"
      ],
      "nextWeek": "Capstone Proje Geliştirme: Entegrasyon, Test ve Hata Ayıklama",
      "homework": "Takımınızın GitHub reposunda ilk commit'i atarak proje klasör iskeletini ve README taslağını oluşturunuz."
    }
  },
  {
    "week": 38,
    "date": "31 Mayıs - 06 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & Bitirme Projeleri",
    "unitBadge": "Büyük Proje",
    "unitTheme": "unite-6",
    "title": "Capstone Proje: Entegrasyon & Test Maratonu",
    "subtitle": "Donanım ve Yazılım Katmanlarının Birleştirilmesi, Birim Testleri (Unit Testing), Entegrasyon Testleri, Uçtan Uca Hata Ayıklama (Debugging) ve Kod İyileştirme (Refactoring)",
    "outcomeCode": "BB.10.6.4",
    "targetSkill": "Sistem Entegrasyonu & Yazılım Test Metodolojileri",
    "curiosityQuestion": "Tek tek mükemmel çalışan devre kartı ve web sunucusu bir araya geldiğinde neden birdenbire beklenmedik hatalar verir?",
    "roadmap": [
      {
        "title": "Bütünleştirme (Integration) Krizi",
        "desc": "Farklı geliştiricilerin yazdığı bağımsız modüllerin bir araya getirildiği kritik an."
      },
      {
        "title": "Test Seviyeleri",
        "desc": "Birim Testi (Unit Test) -> Entegrasyon Testi -> Sistem Testi hiyerarşisi."
      },
      {
        "title": "Hata Ayıklama (Debugging) Stratejileri",
        "desc": "Log kayıtları, breakpointler ve ağ trafiği incelemeleriyle hatanın kök nedenini bulma."
      },
      {
        "title": "Refactoring (Kodu Temizleme)",
        "desc": "Kodun işlevini bozmadan okunabilirliğini, hızını ve modülerliğini artırma."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(16, 185, 129, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Test Piramidi (Testing Pyramid) -->\n      <g transform=\"translate(110, 30)\">\n        <polygon points=\"100,20 160,110 40,110\" fill=\"#1e293b\" stroke=\"#334155\" stroke-width=\"2\"/>\n        \n        <!-- UI / E2E Testleri -->\n        <polygon points=\"100,20 120,50 80,50\" fill=\"#ef4444\"/>\n        <text x=\"100\" y=\"42\" text-anchor=\"middle\" font-size=\"7\" font-weight=\"bold\" fill=\"#ffffff\">E2E Test</text>\n        \n        <!-- Entegrasyon Testleri -->\n        <polygon points=\"80,50 120,50 140,80 60,80\" fill=\"#f59e0b\"/>\n        <text x=\"100\" y=\"70\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#070b14\">Entegrasyon</text>\n        \n        <!-- Birim Testleri (Unit Tests) -->\n        <polygon points=\"60,80 140,80 160,110 40,110\" fill=\"#10b981\"/>\n        <text x=\"100\" y=\"98\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#070b14\">Birim Testleri (Unit Tests)</text>\n      </g>\n      \n      <!-- Hata Ayıklama Akışı -->\n      <g transform=\"translate(30, 160)\">\n        <rect width=\"360\" height=\"110\" rx=\"8\" fill=\"#162038\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n        <text x=\"180\" y=\"25\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#38bdf8\">Sistem Test Kontrol Listesi</text>\n        <text x=\"25\" y=\"50\" font-size=\"9\" fill=\"#86efac\">✔️ Sensör verisi Flask API'ye hatasız ulaşıyor mu? (HTTP 200 OK)</text>\n        <text x=\"25\" y=\"70\" font-size=\"9\" fill=\"#86efac\">✔️ Veritabanına yazılan satırlarda NULL değer kalıyor mu?</text>\n        <text x=\"25\" y=\"90\" font-size=\"9\" fill=\"#86efac\">✔️ Web arayüzü telefonda açıldığında butonlar doğru tetikleniyor mu?</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Birim Testi (Unit Testing) Mantığı",
      "subtitle": "Her fonksiyonun doğru çalıştığını otomatik testlerle garanti altına alma",
      "cards": [
        {
          "title": "Python unittest Kütüphanesi",
          "icon": "🧪",
          "desc": "Yazılımcılar kodlarını elle tek tek test etmek yerine küçük test fonksiyonları yazar:",
          "items": [
            {
              "bold": "assert Eşitliği",
              "text": "`self.assertEqual(hesapla(2, 3), 5)` komutu fonksiyonun 5 üretip üretmediğini denetler."
            },
            {
              "bold": "Regresyon Önleme",
              "text": "Yeni bir özellik eklediğinizde eski özelliklerin bozulmadığını tek bir tuşla test eder."
            },
            {
              "bold": "Huzurlu Canlıya Alma",
              "text": "Tüm testleri yeşil yanan bir yazılım çökmeye karşı en güçlü zırha sahiptir."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Python Otomatik Birim Testi Kodu",
      "subtitle": "Sensör sıcaklık dönüşüm fonksiyonunu denetleyen örnek test betiği",
      "codeSnippet": "import unittest\n\ndef celsius_to_fahrenheit(c):\n    if c < -273.15:\n        raise ValueError(\"Mutlak sıfırın altında sıcaklık olamaz!\")\n    return round((c * 9/5) + 32, 2)\n\nclass TestSicaklikDonusumu(unittest.TestCase):\n    def test_suyun_donma_noktasi(self):\n        self.assertEqual(celsius_to_fahrenheit(0), 32.0)\n        \n    def test_suyun_kaynama_noktasi(self):\n        self.assertEqual(celsius_to_fahrenheit(100), 212.0)\n        \n    def test_fiziksel_limit_hatasi(self):\n        with self.assertRaises(ValueError):\n            celsius_to_fahrenheit(-300)\n\nif __name__ == '__main__':\n    unittest.main()",
      "codeTitle": "test_sensor.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Yeşil Işık",
          "title": "Ran 3 tests in 0.001s - OK",
          "desc": "Terminalde bu yazıyı görmek yazılımcının en büyük mutluluğudur; tüm fonksiyonlar matematiksel olarak kusursuzdur.",
          "items": [
            {
              "bold": "Sınır Değer Testleri",
              "text": "Sıfır, eksi sayılar ve aşırı büyük girdilerle kodun dayanıklılığı sınanır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Takım İçi Entegrasyon & Bug Avı Maratonu",
      "subtitle": "Takımların projelerindeki devreleri, API'leri ve veritabanını canlı bağlayıp bulunan hataları GitHub Issues üzerinde takip etmesi",
      "steps": [
        {
          "title": "1. Modülleri Birleştir",
          "desc": "Donanımcı devreyi bağlasın, backendci Flask sunucusunu başlatsın, frontendci webi açsın."
        },
        {
          "title": "2. Stres Testi Yap",
          "desc": "Butona arka arkaya 20 kez hızlıca basın; sistem kilitleniyor mu?"
        },
        {
          "title": "3. Hata Kaydı Aç (Issue)",
          "desc": "Bulunan her hatayı GitHub'da 'Bug: Buton basılınca ekran donuyor' başlığıyla açın."
        },
        {
          "title": "4. Hatayı Çöz ve Kapat",
          "desc": "Kodu düzeltip ilgili GitHub Issue kaydını 'Resolved' olarak kapatın."
        }
      ],
      "criteria": [
        "Farklı katmanlar arasındaki veri aktarımını uçtan uca çalışır kılma",
        "Hata ayıklama sürecini panik yapmadan metodik ve analitik yürütme",
        "GitHub Issues mekanizmasını takım içi görev takibinde aktif kullanma"
      ]
    },
    "tips": {
      "safetyTitle": "Entegrasyon Sürecinde Kritik Güvenlik",
      "safetyRules": [
        {
          "bold": "Kabloları Zorlamayın & Gevşek Bırakmayın",
          "text": "Robotik projelerde en sık yaşanan entegrasyon hatası temassızlık yapan jumper kablolardır; kabloları bantla sabitleyin."
        },
        {
          "bold": "Logları Konsola Temiz Yazdırın",
          "text": "Backendde `print(\"[BILGI] Yeni sensör verisi alındı:\", veri)` şeklinde zaman damgalı loglar tutun."
        },
        {
          "bold": "Büyük Değişikliklerden Kaçının",
          "text": "Sunuma 1 hafta kala projenin temel mimarisini baştan yazmaya kalkmayın; mevcut çalışan sistemi cilalayın."
        }
      ],
      "myths": [
        {
          "wrong": "Yazılımda hiç hata çıkmaması projenin harika olduğu anlamına gelir.",
          "correct": "Tam aksine, hiç test edilmediği anlamına gelir! İyi bir yazılımcı bilerek sistemi zorlar ve hataları erken bulur."
        },
        {
          "wrong": "Birim testleri yazmak vakit kaybıdır.",
          "correct": "Test yazmak projeyi uzatmaz; canlıda çıkacak ve günlerce aranacak ölümcül hataları saniyeler içinde önler."
        }
      ]
    },
    "quiz": {
      "question": "Bir yazılım projesinde en alt seviyedeki bağımsız fonksiyonların tek tek doğruluğunu denetleyen otomatik test seviyesine ne ad verilir?",
      "options": [
        {
          "text": "A) Entegrasyon Testi",
          "isCorrect": false
        },
        {
          "text": "B) Birim Testi (Unit Test)",
          "isCorrect": true
        },
        {
          "text": "C) Kullanıcı Kabul Testi (UAT)",
          "isCorrect": false
        },
        {
          "text": "D) Güvenlik Sızma Testi",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Birim Testleri (Unit Tests), kodun en küçük yapı taşları olan tekil fonksiyon ve metotların beklenen çıktıyı verip vermediğini izole olarak test eder."
    },
    "summary": {
      "keyPoints": [
        "Entegrasyon aşaması parçaların yaşayan tek bir organizmaya dönüştüğü andır.",
        "Otomatik birim testleri yazılımın sağlamlığını ve uzun ömürlülüğünü teminat altına alır.",
        "Hataları erkenden avladık; artık yıl sonu büyük sınavına ve proje sergisine hazırız!"
      ],
      "nextWeek": "2. Dönem 2. Büyük Sınav Tekrarı & Yıl Sonu Kapsamlı Özet",
      "homework": "Projenizdeki en kritik 2 Python fonksiyonu için unittest modülüyle test senaryoları yazınız."
    }
  },
  {
    "week": 39,
    "date": "07 - 13 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & Bitirme Projeleri",
    "unitBadge": "Yıl Sonu Sınavı",
    "unitTheme": "unite-6",
    "title": "2. Dönem 2. Büyük Sınav Tekrarı & Kapsamlı Özet",
    "subtitle": "10. Sınıf Kur 2 Yıllık Kazanım Taraması: OOP, Mikrodenetleyiciler, Web Teknolojileri, İleri SQL, Veri Analitiği (NumPy/Pandas) ve Makine Öğrenmesi Soru Çözüm Kampı",
    "outcomeCode": "BB.10.6.5",
    "targetSkill": "Yıllık Bilişim Müfredatı Kazanım Sentezi & Sınav Yetkinliği",
    "curiosityQuestion": "1 yıl önce sadece basit Python değişkenlerini bilen bir öğrenci, bugün nasıl yapay zekâ, veritabanı ve robotik sistemleri baştan sona tasarlayabilir?",
    "roadmap": [
      {
        "title": "Büyük Yıllık Döngü Özeti",
        "desc": "1. Dönem donanım ve OOP temellerinden, 2. Dönem web, SQL ve makine öğrenmesine uzanan köprü."
      },
      {
        "title": "İleri SQL Soru Çözümleri",
        "desc": "JOIN, GROUP BY, HAVING ve Python sqlite3 CRUD parametreli sorgu kalıpları."
      },
      {
        "title": "NumPy & Pandas Analiz Soruları",
        "desc": "Vektörel işlemler, shape, slicing, NaN temizleme ve filtreleme senaryoları."
      },
      {
        "title": "Klasik Yazılı Sınav Maratonu",
        "desc": "MEB Maarif Modeli açık uçlu senaryoları ve kod tamamlama egzersizleri."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- 4 Temel Sınav Sütunu -->\n      <g transform=\"translate(25, 35)\">\n        <rect width=\"85\" height=\"110\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n        <text x=\"42\" y=\"22\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#38bdf8\">1. OOP &amp; Gömülü</text>\n        <text x=\"10\" y=\"45\" font-size=\"7\" fill=\"#ffffff\">• Sınıf &amp; Kalıtım</text>\n        <text x=\"10\" y=\"62\" font-size=\"7\" fill=\"#ffffff\">• PWM &amp; ADC</text>\n        <text x=\"10\" y=\"79\" font-size=\"7\" fill=\"#ffffff\">• HC-SR04 &amp; LCD</text>\n      </g>\n      \n      <g transform=\"translate(118, 35)\">\n        <rect width=\"85\" height=\"110\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n        <text x=\"42\" y=\"22\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#34d399\">2. Web &amp; API</text>\n        <text x=\"10\" y=\"45\" font-size=\"7\" fill=\"#ffffff\">• HTML5 &amp; CSS</text>\n        <text x=\"10\" y=\"62\" font-size=\"7\" fill=\"#ffffff\">• JS fetch()</text>\n        <text x=\"10\" y=\"79\" font-size=\"7\" fill=\"#ffffff\">• Flask Rotaları</text>\n      </g>\n      \n      <g transform=\"translate(211, 35)\">\n        <rect width=\"90\" height=\"110\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\"/>\n        <text x=\"45\" y=\"22\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#fbbf24\">3. SQL &amp; CRUD</text>\n        <text x=\"10\" y=\"45\" font-size=\"7\" fill=\"#ffffff\">• PK &amp; FK</text>\n        <text x=\"10\" y=\"62\" font-size=\"7\" fill=\"#ffffff\">• JOIN &amp; GROUP</text>\n        <text x=\"10\" y=\"79\" font-size=\"7\" fill=\"#ffffff\">• sqlite3 Bağlantı</text>\n      </g>\n      \n      <g transform=\"translate(309, 35)\">\n        <rect width=\"85\" height=\"110\" rx=\"6\" fill=\"#1e293b\" stroke=\"#c084fc\"/>\n        <text x=\"42\" y=\"22\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#c084fc\">4. Yapay Zekâ</text>\n        <text x=\"10\" y=\"45\" font-size=\"7\" fill=\"#ffffff\">• NumPy Matris</text>\n        <text x=\"10\" y=\"62\" font-size=\"7\" fill=\"#ffffff\">• Pandas Temizleme</text>\n        <text x=\"10\" y=\"79\" font-size=\"7\" fill=\"#ffffff\">• KNN &amp; OpenCV</text>\n      </g>\n      \n      <!-- Sınav Başarı Kutusu -->\n      <g transform=\"translate(25, 165)\">\n        <rect width=\"370\" height=\"105\" rx=\"8\" fill=\"#162038\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"185\" y=\"26\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">Yıl Sonu Büyük Sınav Stratejisi</text>\n        <text x=\"20\" y=\"52\" font-size=\"10\" fill=\"#cbd5e1\">1. Kod tamamlama sorularında değişken adlarına ve girintilere dikkat edin.</text>\n        <text x=\"20\" y=\"72\" font-size=\"10\" fill=\"#cbd5e1\">2. SQL sorularında INNER JOIN ve WHERE şartlarını doğru sıralamayla yazın.</text>\n        <text x=\"20\" y=\"92\" font-size=\"10\" fill=\"#cbd5e1\">3. Yapay zekâ sorularında 'Gözetimli Öğrenme' ve 'Öklid Mesafesi' kavramlarını açıklayın.</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Kritik Sınav Senaryoları & Soru Çözümleri",
      "subtitle": "Yıl sonu sınavında çıkabilecek çoklu kazanım soruları",
      "cards": [
        {
          "title": "Soru: SQL JOIN ve Gruplama",
          "icon": "📝",
          "desc": "Öğrenciler ve Notlar tablosundan her öğrencinin adını ve not ortalamasını getiren SQL sorgusu:",
          "items": [
            {
              "bold": "Çözüm",
              "text": "`SELECT o.ad, AVG(n.puan) FROM ogrenciler o INNER JOIN notlar n ON o.id = n.ogrenci_id GROUP BY o.ad;`"
            }
          ]
        },
        {
          "title": "Soru: Pandas ile Eksik Veri Filtreleme",
          "icon": "🐼",
          "desc": "Bir DataFrame tablosunda 'fiyat' sütunundaki boş (NaN) değerleri ortalamayla doldurup fiyatı 100'den büyük olanları filtreleyiniz:",
          "items": [
            {
              "bold": "Çözüm",
              "text": "`df['fiyat'].fillna(df['fiyat'].mean(), inplace=True)` ardından `filtre = df[df['fiyat'] > 100]`."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Yıllık Büyük Sentez Kodu: Veriden Tahmine",
      "subtitle": "SQL'den veri çekip Pandas ile temizleyen ve KNN ile tahmin yürüten nihai kod",
      "codeSnippet": "import sqlite3\nimport pandas as pd\nfrom sklearn.neighbors import KNeighborsClassifier\n\n# 1. SQL'den Canlı Veriyi Çek\nconn = sqlite3.connect('okul_sistemi.db')\ndf = pd.read_sql_query(\"SELECT calisma_saati, devamsizlik, gecti FROM ogrenci_verisi\", conn)\nconn.close()\n\n# 2. Pandas ile Temizle\ndf.dropna(inplace=True)\n\n# 3. Yapay Zekâ Modelini Eğit\nX = df[['calisma_saati', 'devamsizlik']]\ny = df['gecti']\n\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X, y)\n\n# 4. Yeni Öğrenciyi Tahmin Et\nyeni_durum = [[15, 2]] # 15 saat çalışmış, 2 gün devamsızlık\ntahmin = model.predict(yeni_durum)\nprint(\"Dersi Geçme Tahmini:\", \"BAŞARILI\" if tahmin[0] == 1 else \"KALDI\")",
      "codeTitle": "yil_sonu_sentez.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Büyük Resim",
          "title": "SQL + Pandas + Scikit-Learn",
          "desc": "Bu 15 satırlık kod parçası, 10. sınıf müfredatımızın tüm parçalarının nasıl kusursuz bir senfoni oluşturduğunu kanıtlar.",
          "items": [
            {
              "bold": "Yazılı Sınav Bonusu",
              "text": "Bu bütünleşik mimariyi sınav kağıdında açıklayabilen öğrenciler tam puanı garantiler."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahta Canlı Soru Çözüm Maratonu",
      "subtitle": "Tüm sınıfın gruplar halinde tahtaya çıkıp geçmiş yılların MEB açık uçlu sorularını adım adım çözmesi",
      "steps": [
        {
          "title": "1. Rastgele Soru Çek",
          "desc": "Kura ile OOP, Arduino, SQL veya Yapay Zekâ kategorisinden bir soru seçin."
        },
        {
          "title": "2. Tahtada Çöz",
          "desc": "Grup sözcüsü kodu veya devre şemasını tahtaya çizerek mantığını anlatsın."
        },
        {
          "title": "3. Çeldiricileri Tartış",
          "desc": "Soru çoktan seçmeli ise diğer şıkların neden yanlış olduğunu açıklayın."
        },
        {
          "title": "4. Eksikleri Kapat",
          "desc": "Anlaşılmayan noktaları öğretmen açıklamasıyla anında pekiştirin."
        }
      ],
      "criteria": [
        "Teknik terminolojiyi (Kapsülleme, PWM, REST API, INNER JOIN) doğru kullanma",
        "Açık uçlu sorularda çözüm algoritmasını adım adım yazma",
        "Soru çözümü sırasında zamanı verimli yönetebilme"
      ]
    },
    "tips": {
      "safetyTitle": "Yıl Sonu Sınav Günü Tavsiyeleri",
      "safetyRules": [
        {
          "bold": "Soruları Acele Etmeden İki Kez Okuyun",
          "text": "En çok yapılan hata sorunun kökündeki 'değildir', 'beklenmez' veya 'hata verir' kelimelerini kaçırmaktır."
        },
        {
          "bold": "Kod Yazarken Okunaklı Olun",
          "text": "İki nokta üst üste (:), girintiler ve değişken isimlerinin temizliği puanınızı doğrudan etkiler."
        },
        {
          "bold": "Boş Soru Bırakmayın",
          "text": "Tam kod aklınıza gelmese bile algoritmanın çalışma adımlarını Türkçe açıklayarak kısmi puan alın."
        }
      ],
      "myths": [
        {
          "wrong": "Yazılı sınavda sadece kod ezberleyenler yüksek not alır.",
          "correct": "Ezberleyenler ilk ters köşede takılır; mantığını ve mimari ilişkileri kavrayanlar her soruyu çözer."
        },
        {
          "wrong": "Bilişim dersi sınavı diğer derslerden daha önemsizdir.",
          "correct": "Yapay zekâ çağında bilişim sınavı geleceğin mühendislik ve teknoloji okuryazarlığının en somut karnesidir."
        }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki teknolojilerden hangisi ilişkisel veritabanlarından çekilen verileri Python ortamında temizlemek ve matris olarak yapay zekâ modeline hazırlamak için doğrudan kullanılır?",
      "options": [
        {
          "text": "A) Arduino IDE",
          "isCorrect": false
        },
        {
          "text": "B) Pandas ve NumPy Kütüphaneleri",
          "isCorrect": true
        },
        {
          "text": "C) CSS Flexbox",
          "isCorrect": false
        },
        {
          "text": "D) Servo.h",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Pandas ve NumPy, SQL veya dosyalardan gelen ham verileri temizleme, matrisleştirme ve makine öğrenmesi modellerine girdi olarak sunma araçlarıdır."
    },
    "summary": {
      "keyPoints": [
        "10. Sınıf Kur 2 müfredatının tüm kazanımlarını başarıyla tamamladık.",
        "Donanımdan yapay zekâya, veritabanından web uygulamalarına kadar tam donanımlı bir vizyon kazandık.",
        "Sınavda tüm öğrencilerimize üstün başarılar diliyoruz; emeğinizin karşılığını fazlasıyla alacaksınız!"
      ],
      "nextWeek": "Capstone Proje Tamamlama & Canlı Sistem Demosu",
      "homework": "Yıl boyunca aldığınız notları ve çözdüğünüz örnek soruları sınav öncesi son bir kez tekrar ediniz."
    }
  },
  {
    "week": 40,
    "date": "14 - 20 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & Bitirme Projeleri",
    "unitBadge": "Canlı Demo",
    "unitTheme": "unite-6",
    "title": "Capstone Proje: Canlı Sistem Demosu & Test",
    "subtitle": "Projelerin Canlı Laboratuvar Ortamında Çalıştırılması, Stres Testleri, Akıllı Tahta Üzerinde Canlı Sunum, Akran Değerlendirmesi ve Teknik Dokümantasyon Teslimi",
    "outcomeCode": "BB.10.6.6",
    "targetSkill": "Canlı Sistem Demosu, Sunum Becerisi & Teknik Dokümantasyon",
    "curiosityQuestion": "Steve Jobs veya Elon Musk sahnede yeni bir teknolojiyi canlı tanıtırken sistemin tam o anda bozulmaması için arkada nasıl bir hazırlık yürütülür?",
    "roadmap": [
      {
        "title": "Büyük Gün: Canlı Sistem Demosu",
        "desc": "PowerPoint slaytları arkasına saklanmadan, çalışan canlı devreyi ve yazılımı sergileme."
      },
      {
        "title": "Canlı Demo Murphy Kanunu",
        "desc": "'Ters gidebilecek her şey tam sunum anında ters gider'; bu yüzden yedek plan (Plan B) hazırlığı."
      },
      {
        "title": "Teknik Dokümantasyon ve Rapor",
        "desc": "Devre şeması, kod açıklamaları, veritabanı ER diyagramı ve kullanım kılavuzu teslimi."
      },
      {
        "title": "Akran ve Zümre Değerlendirmesi",
        "desc": "Diğer takımların projelerini rubrik ölçütlerine göre adilce puanlama ve tebrik etme."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(0, 240, 255, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Sahne & Sunum Görseli -->\n      <g transform=\"translate(40, 35)\">\n        <rect width=\"340\" height=\"145\" rx=\"8\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"2\"/>\n        <text x=\"170\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#00f0ff\">Fatih Akıllı Tahta - Canlı Proje Demosu</text>\n        \n        <!-- Sol: Çalışan Web Dashboard -->\n        <rect x=\"20\" y=\"40\" width=\"145\" height=\"90\" rx=\"4\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n        <text x=\"92\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#38bdf8\">Web Dashboard (Canlı)</text>\n        <circle cx=\"45\" cy=\"85\" r=\"14\" fill=\"#10b981\"/><text x=\"45\" y=\"89\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffffff\">ONLINE</text>\n        <text x=\"105\" y=\"80\" font-size=\"8\" fill=\"#ffffff\">Nem: %58</text>\n        <text x=\"105\" y=\"96\" font-size=\"8\" fill=\"#ffffff\">Pompa: AÇIK</text>\n        \n        <!-- Sağ: Fiziksel Proje Masası -->\n        <rect x=\"180\" y=\"40\" width=\"140\" height=\"90\" rx=\"4\" fill=\"#1e293b\" stroke=\"#f59e0b\"/>\n        <text x=\"250\" y=\"58\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#fbbf24\">Fiziksel Donanım</text>\n        <rect x=\"200\" y=\"70\" width=\"45\" height=\"45\" rx=\"3\" fill=\"#065f46\"/><text x=\"222\" y=\"96\" text-anchor=\"middle\" font-size=\"7\" fill=\"#ffffff\">ESP32</text>\n        <circle cx=\"280\" cy=\"92\" r=\"12\" fill=\"#ef4444\"/><text x=\"280\" y=\"96\" text-anchor=\"middle\" font-size=\"7\" fill=\"#ffffff\">SERVO</text>\n      </g>\n      \n      <!-- Rubrik Ölçütleri -->\n      <g transform=\"translate(40, 195)\">\n        <rect width=\"340\" height=\"75\" rx=\"6\" fill=\"#1e1b4b\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n        <text x=\"170\" y=\"22\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#34d399\">Değerlendirme Rubriği (100 Puan)</text>\n        <text x=\"20\" y=\"44\" font-size=\"9\" fill=\"#cbd5e1\">Çalışan Canlı Demo (40p) | Kod Kalitesi &amp; Git (30p) | Sunum &amp; Rapor (30p)</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Canlı Demo Nasıl Başarıyla Sunulur?",
      "subtitle": "Heyecanı kontrol altına alıp projenin değerini anlatma adımları",
      "cards": [
        {
          "title": "3 Dakikalık Kusursuz Sunum Kurgusu",
          "icon": "🎤",
          "desc": "Zamanı verimli kullanarak dinleyicileri etkileme planı:",
          "items": [
            {
              "bold": "1. Dakika: Problem ve Çözüm",
              "text": "'Hangi sorunu çözüyoruz ve projemiz günlük hayatı nasıl kolaylaştırıyor?'"
            },
            {
              "bold": "2. Dakika: Canlı Etkileşim",
              "text": "Sensöre üfleyin, butona basın, web sayfasında grafiğin nasıl güncellendiğini canlı gösterin."
            },
            {
              "bold": "3. Dakika: Kod ve Mimari",
              "text": "Veritabanı tablosunu ve en gurur duyduğunuz algoritmayı akıllı tahtada açıp gösterin."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Yedek Plan (Fail-Safe Strategy) İlkeleri",
      "subtitle": "Kamera açılmazsa veya internet koparsa sunumu kurtarma yolları",
      "cards": [
        {
          "badge": "Altın Kural 1",
          "title": "Önceden Çekilmiş 30 Saniyelik Video",
          "desc": "Canlı sunumda Wi-Fi kopabilir veya kablo çıkabilir; telefonunuzla çektiğiniz çalışan bir yedek videonuz mutlaka flaş bellekte olsun.",
          "items": [
            {
              "bold": "Yerel Sunucu (Localhost)",
              "text": "Okul interneti yavaşsa projeyi harici bulut yerine kendi bilgisayarınızdaki localhost üzerinden çalıştırın."
            }
          ]
        },
        {
          "badge": "Altın Kural 2",
          "title": "Yedek Jumper ve Piller",
          "desc": "Donanım sunumlarında piller aniden bitebilir; masanızda yedek pil ve kablo bulundurun.",
          "items": [
            {
              "bold": "Sakin Kalmak",
              "text": "Hata çıksa bile paniklemeyin; hatanın nedenini teknik dille açıklamak jüriye mühendislik olgunluğunuzu gösterir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Bilişim Zümresi Önünde Canlı Proje Sunumu",
      "subtitle": "Her takımın akıllı tahta karşısına geçerek hazırladığı Capstone projesini tüm sınıfa ve öğretmenlere canlı sergilemesi",
      "steps": [
        {
          "title": "1. Sahneyi Kur",
          "desc": "Akıllı tahtaya web sayfasını yansıtın, donanım devresini USB ile bağlayın."
        },
        {
          "title": "2. Canlı Senaryoyu Çalıştır",
          "desc": "Öğretmenin veya bir arkadaşınızın sisteme veri girmesini isteyin (Örn: 'Kartı okutun')."
        },
        {
          "title": "3. Soruları Yanıtlayın",
          "desc": "Zümre öğretmenlerinin 'Burada neden SQLite seçtiniz?' gibi mimari sorularına yanıt verin."
        },
        {
          "title": "4. Alkışı Kabul Edin",
          "desc": "1 yıllık emeğin çalışan bir sisteme dönüştüğünü tüm okulla gururla paylaşın."
        }
      ],
      "criteria": [
        "Sistemin baştan sona eksiksiz ve canlı çalıştığını kanıtlama",
        "Takım üyelerinin eşit söz alarak kendi yazdığı modülü anlatabilmesi",
        "Zaman sınırına (maksimum 5 dakika) riayet etme disiplini"
      ]
    },
    "tips": {
      "safetyTitle": "Canlı Sunum Adabı",
      "safetyRules": [
        {
          "bold": "Kodu Baştan Sona Okumayın",
          "text": "Slayttaki 200 satır kodu tek tek okumak dinleyicileri sıkar; sadece kritik algoritmayı ve mimariyi özetleyin."
        },
        {
          "bold": "Göz Teması Kurun",
          "text": "Sadece bilgisayar ekranına bakmayın; dinleyiciler ve öğretmenlerle göz teması kurarak konuşun."
        },
        {
          "bold": "Diğer Takımları Saygıyla Dinleyin",
          "text": "Sıranız bittiğinde veya başlamadan önce diğer arkadaşlarınızın sunumlarını dikkatle dinleyip alkışlayın."
        }
      ],
      "myths": [
        {
          "wrong": "Canlı sunumda küçük bir aksaklık çıkarsa tüm proje sıfır alır.",
          "correct": "Asla! Gerçek hayatta uzay roketleri bile fırlatılırken aksaklık yaşanabilir; önemli olan sorunu soğukkanlılıkla teşhis etmektir."
        },
        {
          "wrong": "En karmaşık ve anlaşılmaz projeler her zaman en yüksek puanı alır.",
          "correct": "Sadelik en üstün zarafettir; problemi en temiz, en kararlı ve en anlaşılır çözen proje kazanır."
        }
      ]
    },
    "quiz": {
      "question": "Canlı bir yazılım veya donanım demosu sırasında beklenmedik bir bağlantı veya elektrik arızası yaşanması ihtimaline karşı profesyonel mühendislerin hazırladığı en kritik önlem nedir?",
      "options": [
        {
          "text": "A) Sunumu tamamen iptal edip kaçmak",
          "isCorrect": false
        },
        {
          "text": "B) Önceden kaydedilmiş çalışan sistem demosunu (Plan B / Fail-safe Video) hazır bulundurmak",
          "isCorrect": true
        },
        {
          "text": "C) Arızayı gizleyip çalışıyormuş gibi yalan söylemek",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayarı çöpe atmak",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Büyük teknoloji konferanslarında (Apple, Google, Microsoft) bile canlı demo kazalarına karşı çalışan sistemin önceden çekilmiş yüksek çözünürlüklü yedek demosu her zaman hazır tutulur."
    },
    "summary": {
      "keyPoints": [
        "Canlı demo maratonu bir bilişim öğrencisinin en heyecanlı ve öğretici mezuniyet sınavıdır.",
        "Çalışan bir ürün üretmek ve bunu topluluk önünde savunmak paha biçilmez bir özgüvendir.",
        "Tüm takımlarımızı gösterdikleri üstün gayret ve mühendislik vizyonu için yürekten kutluyoruz!"
      ],
      "nextWeek": "Yıl Sonu Bilişim Şenliği, Portfolyo Sunumu & Gelecek Kariyer Rehberliği",
      "homework": "Projenizin tüm kodlarını, devre şemasını ve README dosyasını içeren nihai GitHub bağlantınızı öğretmeninizle paylaşınız."
    }
  },
  {
    "week": 41,
    "date": "21 - 27 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & Bitirme Projeleri",
    "unitBadge": "Yıl Sonu Şenliği",
    "unitTheme": "unite-6",
    "title": "Yıl Sonu Bilişim Şenliği & Kariyer Rehberliği",
    "subtitle": "10. Sınıf Mezuniyet Şenliği, Proje Stantları, Dijital Portfolyo (GitHub / LinkedIn), Yapay Zekâ Çağında Bilişim Kariyerleri (Yazılım, Siber Güvenlik, Veri Bilimi, Robotik) ve Gelecek Vizyonu",
    "outcomeCode": "BB.10.6.7",
    "targetSkill": "Bilişim Vizyonu, Portfolyo Sunumu & Kariyer Planlama",
    "curiosityQuestion": "10. sınıfı geride bırakan bir genç olarak, önümüzdeki 10 yıl içinde yapay zekâ dünyayı baştan yaratırken siz bu geleceğin neresinde olacaksınız?",
    "roadmap": [
      {
        "title": "Bilişim Teknolojileri Şenliği",
        "desc": "Okul koridorlarında ve laboratuvarında açılan stantlarla projelerin tüm okula ve velilere sergilenmesi."
      },
      {
        "title": "Dijital Portfolyo ve Ayak İzi",
        "desc": "GitHub profili, proje bağlantıları ve gelecekteki üniversite/staj başvuruları için portfolyo hazırlığı."
      },
      {
        "title": "Bilişim Sektöründe Kariyer Haritası",
        "desc": "Yazılım Mühendisliği, Siber Güvenlik Uzmanlığı, Veri Bilimcisi, Gömülü Sistem Mimarı ve AI Araştırmacısı rolleri."
      },
      {
        "title": "Geleceğe Mesaj: Üreten Türkiye",
        "desc": "Tüketen değil, Türkiye Yüzyılı'nda yerli ve milli teknolojiler geliştiren genç mühendisler olma sözü."
      }
    ],
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n      \n      <!-- Mezuniyet & Başarı Çelengi -->\n      <g transform=\"translate(140, 25)\">\n        <circle cx=\"70\" cy=\"55\" r=\"45\" fill=\"rgba(245, 158, 11, 0.15)\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n        <text x=\"70\" y=\"50\" text-anchor=\"middle\" font-size=\"28\">🎓</text>\n        <text x=\"70\" y=\"78\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"bold\" fill=\"#fbbf24\">10. Sınıf Kur 2</text>\n        <text x=\"70\" y=\"92\" text-anchor=\"middle\" font-size=\"8\" fill=\"#ffffff\">Tamamlandı!</text>\n      </g>\n      \n      <!-- 4 Gelecek Kariyer Yolu -->\n      <g transform=\"translate(25, 135)\">\n        <rect width=\"85\" height=\"70\" rx=\"6\" fill=\"#1e293b\" stroke=\"#38bdf8\"/>\n        <text x=\"42\" y=\"24\" text-anchor=\"middle\" font-size=\"16\">💻</text>\n        <text x=\"42\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#38bdf8\">Yazılım Geliştirici</text>\n        <text x=\"42\" y=\"58\" text-anchor=\"middle\" font-size=\"7\" fill=\"#94a3b8\">Web &amp; Full-Stack</text>\n      </g>\n      \n      <g transform=\"translate(118, 135)\">\n        <rect width=\"85\" height=\"70\" rx=\"6\" fill=\"#1e293b\" stroke=\"#10b981\"/>\n        <text x=\"42\" y=\"24\" text-anchor=\"middle\" font-size=\"16\">🧠</text>\n        <text x=\"42\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#34d399\">Veri &amp; Yapay Zekâ</text>\n        <text x=\"42\" y=\"58\" text-anchor=\"middle\" font-size=\"7\" fill=\"#94a3b8\">ML &amp; Data Science</text>\n      </g>\n      \n      <g transform=\"translate(211, 135)\">\n        <rect width=\"90\" height=\"70\" rx=\"6\" fill=\"#1e293b\" stroke=\"#ef4444\"/>\n        <text x=\"45\" y=\"24\" text-anchor=\"middle\" font-size=\"16\">🛡️</text>\n        <text x=\"45\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#f87171\">Siber Güvenlik</text>\n        <text x=\"45\" y=\"58\" text-anchor=\"middle\" font-size=\"7\" fill=\"#94a3b8\">Kripto &amp; Savunma</text>\n      </g>\n      \n      <g transform=\"translate(309, 135)\">\n        <rect width=\"85\" height=\"70\" rx=\"6\" fill=\"#1e293b\" stroke=\"#c084fc\"/>\n        <text x=\"42\" y=\"24\" text-anchor=\"middle\" font-size=\"16\">🤖</text>\n        <text x=\"42\" y=\"44\" text-anchor=\"middle\" font-size=\"8\" font-weight=\"bold\" fill=\"#c084fc\">Robotik &amp; IoT</text>\n        <text x=\"42\" y=\"58\" text-anchor=\"middle\" font-size=\"7\" fill=\"#94a3b8\">Gömülü Sistemler</text>\n      </g>\n      \n      <!-- Kapanış Kutusu -->\n      <g transform=\"translate(25, 220)\">\n        <rect width=\"370\" height=\"60\" rx=\"8\" fill=\"#162038\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        <text x=\"185\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fbbf24\">Tebrikler Gençler! 41 Haftalık Büyük Yolculuk Tamamlandı</text>\n        <text x=\"185\" y=\"46\" text-anchor=\"middle\" font-size=\"9\" fill=\"#cbd5e1\">Öğretmen: Vahit Keskin | MEB 2026-2027 Maarif Modeli</text>\n      </g>\n    </svg>",
    "section1": {
      "title": "Geleceğin Bilişim Kariyer Haritası",
      "subtitle": "Hangi alanda uzmanlaşmak istiyorsunuz? Yolunuzu çizin",
      "cards": [
        {
          "title": "Bilişim Dünyasında 4 Büyük Rota",
          "icon": "🚀",
          "desc": "Liseden sonra üniversite ve kariyer hayatınızda seçebileceğiniz ana uzmanlıklar:",
          "items": [
            {
              "bold": "1. Yapay Zekâ ve Veri Bilimi",
              "text": "Büyük veri analizi, makine öğrenmesi algoritmaları, derin öğrenme ve üretken yapay zekâ (LLM) geliştirme."
            },
            {
              "bold": "2. Full-Stack Web ve Bulut Mühendisliği",
              "text": "Milyonlarca kullanıcılı web platformları, mikroservisler, AWS/Google Cloud ve modern arayüzler."
            },
            {
              "bold": "3. Otonom Sistemler & Robotik (IoT)",
              "text": "İHA'lar, otonom arabalar, akıllı fabrikalar, savunma sanayii ve mikrodenetleyici donanım mimarileri."
            },
            {
              "bold": "4. Siber Güvenlik & Kriptoloji",
              "text": "Sızma testleri (Pentest), adli bilişim, ağ güvenliği ve devlet/şirket sistemlerinin siber kalkanı olma."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Geliştiricinin Hayat Boyu Öğrenme Sözü",
      "subtitle": "Teknoloji hızla değişir; değişmeyen tek şey problem çözme tutkusudur",
      "cards": [
        {
          "badge": "İlke 1",
          "title": "Merakını Asla Kaybetme",
          "desc": "Yeni bir teknoloji çıktığında korkma; dokümantasyonunu oku, ilk 'Merhaba Dünya'nı yaz ve projelerine entegre et.",
          "items": [
            {
              "bold": "Açık Kaynak Katkısı",
              "text": "Sadece hazır kod kullanan değil, dünyaya faydalı kütüphaneler hediye eden bir yazılımcı olun."
            }
          ]
        },
        {
          "badge": "İlke 2",
          "title": "Etik ve Toplumsal Fayda",
          "desc": "Bilişim gücü büyük bir sorumluluktur; bilginizi insanlığa, çevreye ve ülkenize yararlı teknolojiler üretmek için kullanın.",
          "items": [
            {
              "bold": "Yolun Açık Olsun!",
              "text": "10. Sınıf Kur 2 sona erdi ancak bilişim dünyasındaki büyük serüveniniz yeni başlıyor!"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Yıl Sonu Bilişim Şenliği ve Portfolyo Lansmanı",
      "subtitle": "Okul koridorlarında stant açıp projeleri alt sınıflara, öğretmenlere ve velilere canlı anlatma",
      "steps": [
        {
          "title": "1. Standını Süsle",
          "desc": "Projenizin afişini, devrelerini, ekran görüntülerini ve QR kodlu GitHub linkini masaya yerleştirin."
        },
        {
          "title": "2. Ziyaretçilere Canlı Göster",
          "desc": "Gelen misafirlere devrenizi canlı test ettirin, sensörlere dokunmalarını sağlayın."
        },
        {
          "title": "3. Deneyim Paylaşımı",
          "desc": "9. sınıf kardeşlerinize seneye Kur 2'de onları nelerin beklediğini heyecanla anlatın."
        },
        {
          "title": "4. Başarı Sertifikası",
          "desc": "41 haftalık bilişim maratonunu başarıyla tamamlayan tüm öğrenciler sertifikalarını alsın."
        }
      ],
      "criteria": [
        "Teknik bilgiyi her yaştan insana sade ve etkileyici dille aktarabilme",
        "Yıl boyunca üretilen tüm çalışmaları dijital bir portfolyoda derleme",
        "Gelecek eğitim yıllarına yönelik kişisel gelişim hedefleri belirleme"
      ]
    },
    "tips": {
      "safetyTitle": "Yaz Tatili Bilişim Tavsiyeleri",
      "safetyRules": [
        {
          "bold": "Yaz Boyunca Kod Yazmayı Bırakmayın",
          "text": "Kodlama kas gibidir; 3 ay hiç pratik yapmazsanız syntax unutulur. Haftada en az 2 saat küçük projeler yapın."
        },
        {
          "bold": "Teknofest ve TÜBİTAK Yarışmalarını Takip Edin",
          "text": "Lisede ürettiğiniz bu projelerle ulusal yarışmalara başvurun; dereceler üniversite kapılarını açar."
        },
        {
          "bold": "İngilizce Teknik Terimleri Geliştirin",
          "text": "Yazılım dünyasının küresel dili İngilizcedir; yabancı blogları ve dokümanları orijinal dilinden okuyun."
        }
      ],
      "myths": [
        {
          "wrong": "Yazılımcı olmak için doğuştan dahi matematikçi olmak şarttır.",
          "correct": "Yazılımcı olmanın %10'u zekâ, %90'ı sabır, deneme-yanılma ve merak duygusudur."
        },
        {
          "wrong": "Yapay zekâ çıktığı için artık yazılımcılara gerek kalmayacak.",
          "correct": "Yapay zekâ yazılımcıları yok etmeyecek; yapay zekâyı bir asistan gibi kullanan yazılımcılar, kullanmayanların yerini alacak."
        }
      ]
    },
    "quiz": {
      "question": "10. Sınıf Bilgisayar Bilimi (Kur 2) dersi boyunca edindiğiniz bilgi birikimi, üniversite ve iş hayatında aşağıdaki alanlardan hangisinin temelini oluşturur?",
      "options": [
        {
          "text": "A) Yalnızca klavyede hızlı yazı yazmanın",
          "isCorrect": false
        },
        {
          "text": "B) Yazılım Mühendisliği, Veri Bilimi, Siber Güvenlik ve Robotik Sistemler dünyasının",
          "isCorrect": true
        },
        {
          "text": "C) Sadece bilgisayar oyunları oynamanın",
          "isCorrect": false
        },
        {
          "text": "D) Bilgisayar monitörünü temizlemenin",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Bu yıl tamamladığınız OOP, Mikrodenetleyiciler, Web Mimarisi, SQL ve Yapay Zekâ konuları modern bilgisayar mühendisliğinin temel çekirdeğini oluşturmaktadır."
    },
    "summary": {
      "keyPoints": [
        "41 haftalık muazzam bir bilişim ve mühendislik yolculuğunu başarıyla tamamladınız.",
        "Öğrendiğiniz her algoritma, kurduğunuz her devre ve yazdığınız her SQL sorgusu geleceğinize yatırımdır.",
        "Türkiye Yüzyılı'nı inşa edecek genç bilişimciler olarak hepinizle gurur duyuyoruz!"
      ],
      "nextWeek": "Tebrikler! 10. Sınıf Bilgisayar Bilimi Başarıyla Tamamlandı.",
      "homework": "Yaz tatilinde kendi ilgi alanınıza uygun (Oyun, Web, AI veya Robotik) bağımsız bir açık kaynak proje geliştiriniz."
    }
  }
];
