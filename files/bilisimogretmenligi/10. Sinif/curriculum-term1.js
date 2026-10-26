/**
 * MEB 10. Sınıf Bilgisayar Bilimi (Kur 2) - 1. Dönem 1. Kısım (Hafta 1 - 10)
 * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin
 */

const CURRICULUM_TERM_1_PART1 = [
  {
    "week": 1,
    "date": "14 - 20 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Kur 2'ye Giriş & Yazılım Yaşam Döngüsü",
    "subtitle": "Yazılım Mühendisliği Temelleri, SDLC Aşamaları, Çevik (Agile) Metodoloji ve Git Versiyon Kontrolü",
    "outcomeCode": "BB.10.1.1",
    "targetSkill": "Yazılım Yaşam Döngüsü & Sürüm Yönetimi",
    "curiosityQuestion": "Yüzlerce mühendisin çalıştığı bir projede kodlar birbirinin üzerine yazılmadan ve çökmeden nasıl eşzamanlı geliştirilir?",
    "roadmap": [
      {
        "title": "Bilgisayar Bilimi Kur 2 Vizyonu",
        "desc": "OOP, Robotik / IoT, Web/Mobil sistemler ve Yapay Zekâ yol haritası."
      },
      {
        "title": "Yazılım Yaşam Döngüsü (SDLC)",
        "desc": "Gereksinim Analizi, Tasarım, Geliştirme, Test, Dağıtım ve Bakım."
      },
      {
        "title": "Çevik (Agile / Scrum) Yaklaşım",
        "desc": "Sprintler, günlük toplantılar ve sürekli teslimat felsefesi."
      },
      {
        "title": "Git & GitHub Temelleri",
        "desc": "`git init`, `add`, `commit`, `push`, `branch` ve ekip çalışması."
      }
    ],
    "section1": {
      "title": "Yazılım Geliştirme Yaşam Döngüsü (SDLC)",
      "subtitle": "Fikirden çalışan devasa sistemlere giden profesyonel yol",
      "cards": [
        {
          "title": "SDLC'nin 6 Kritik Fazı",
          "icon": "🔄",
          "desc": "Mühendislerin proje yürütme metodolojisi.",
          "items": [
            {
              "bold": "1. Planlama ve Analiz",
              "text": "Müşterinin veya sistemin neye ihtiyaç duyduğunu teknik şartnameye dökme."
            },
            {
              "bold": "2. Mimari Tasarım (Design)",
              "text": "Veritabanı şemaları, UML diyagramları ve sistem arayüzlerinin çizilmesi."
            },
            {
              "bold": "3. Kodlama ve Birim Testleri",
              "text": "Modüler fonksiyonlar ve nesne yönelimli sınıflarla kod inşa etme."
            },
            {
              "bold": "4. Sürekli Entegrasyon (CI/CD)",
              "text": "Otomatik testlerle kodun her commit'te sağlamlığını doğrulama."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Versiyon Kontrol Sistemi: Git Mimarisi",
      "subtitle": "Zaman makinesi gibi projenin her anını kaydetme",
      "codeSnippet": "# Git Temel Komutları\n$ git init                # Yeni bir Git deposu başlat\n$ git status              # Değişen dosyaları gör\n$ git add main.py         # Dosyayı sahneleme alanına (stage) al\n$ git commit -m \"İlk sürüm: Robot sınıfı eklendi\"\n$ git branch ozellik/sensor # Yeni bir geliştirme dalı aç\n$ git push origin main    # GitHub'a kodları gönder",
      "codeTitle": "git_workflow.sh",
      "codeLang": "Bash",
      "cards": [
        {
          "badge": "Git Gücü",
          "title": "Dallanma (Branching)",
          "desc": "Her geliştirici ana kodu bozmadan kendi dalında (branch) çalışır; özellik tamamlanınca 'Merge' edilir.",
          "items": [
            {
              "bold": "Commit Mesajı",
              "text": "Neyin neden değiştirildiğini anlatan tarihsel hafıza kaydıdır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Terminalde Git Deposu Başlatma ve İlk Commit",
      "subtitle": "Kişisel bir proje klasöründe Git versiyon kontrolü kurup geçmiş sürümleri inceleme",
      "steps": [
        {
          "title": "1. Depo Aç",
          "desc": "`git init lise_projem` komutuyla klasörü Git takibine alın."
        },
        {
          "title": "2. Dosya Ekle",
          "desc": "`README.md` dosyası oluşturup proje amacını yazın."
        },
        {
          "title": "3. Commit At",
          "desc": "`git add .` ve `git commit -m \"docs: README eklendi\"` yapın."
        },
        {
          "title": "4. Logları İncele",
          "desc": "`git log --oneline` komutuyla commit hash ve yazar bilgilerini görün."
        }
      ],
      "criteria": [
        "Git çalışma alanlarını (Working Directory, Staging, Repository) ayırt etme",
        "Anlamlı ve standartlara uygun commit mesajı yazma",
        "SDLC aşamalarının bir yazılım projesindeki önemini açıklama"
      ]
    },
    "tips": {
      "safetyTitle": "Git ve Takım Çalışması Güvenliği",
      "safetyRules": [
        {
          "bold": "Hassas Bilgileri Yüklemeyin",
          "text": "Parola, API anahtarı veya veritabanı şifrelerini asla GitHub'a push etmeyin; `.gitignore` kullanın."
        },
        {
          "bold": "Sık Sık Küçük Commit'ler Atın",
          "text": "Haftalık tek bir devasa commit yerine, her tamamlanan özellik için küçük commit'ler atın."
        },
        {
          "bold": "Çakışmaları (Conflict) Çözün",
          "text": "İki kişi aynı satırı değiştirirse Git uyarır; ekipçe konuşup doğru satırı seçin."
        }
      ],
      "myths": [
        {
          "wrong": "Git ile GitHub tamamen aynı şeydir.",
          "correct": "Git bilgisayarınızda çalışan yerel versiyon kontrol aracıdır; GitHub ise bu depoları bulutta barındıran platformdur."
        },
        {
          "wrong": "Tek başına çalışan bir yazılımcının Git kullanmasına gerek yoktur.",
          "correct": "Kod bozulduğunda dünkü çalışan sürüme dönebilmek için tek başınıza olsanız bile Git şarttır."
        }
      ]
    },
    "quiz": {
      "question": "Git versiyon kontrol sisteminde yapılan değişiklikleri kalıcı bir sürüm noktası olarak kaydedip açıklama ekleyen temel komut hangisidir?",
      "options": [
        {
          "text": "A) git pull",
          "isCorrect": false
        },
        {
          "text": "B) git commit -m \"açıklama\"",
          "isCorrect": true
        },
        {
          "text": "C) git push",
          "isCorrect": false
        },
        {
          "text": "D) git checkout",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `git commit -m \"...\"` komutu, sahnelenen (staged) değişiklikleri kalıcı bir anlık görüntü (snapshot) olarak yerel depoya mühürler."
    },
    "summary": {
      "keyPoints": [
        "10. Sınıf Kur 2 ileri seviye bilişim ve mühendislik yılımızdır.",
        "SDLC yazılım projelerinin planlı ve sürdürülebilir geliştirilmesini sağlar.",
        "Git modern yazılım dünyasının evrensel sürüm kontrol standardıdır."
      ],
      "nextWeek": "Nesne Yönelimli Programlama (OOP) Felsefesi: Sınıf (Class) ve Nesne (Object)",
      "homework": "Bilgisayarınıza Git kurup `git --version` ve kullanıcı adı/eposta ayarlarınızı tamamlayınız."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <!-- Üst Sınıf (Superclass) -->\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"100\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"28\" rx=\"6\" fill=\"#f59e0b\"/>\n          <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0c1322\">&lt;&lt;Class&gt;&gt; Robot</text>\n          <text x=\"140\" y=\"70\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- ad: str</text>\n          <text x=\"140\" y=\"85\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- batarya: int</text>\n          <line x1=\"130\" y1=\"92\" x2=\"290\" y2=\"92\" stroke=\"#475569\"/>\n          <text x=\"140\" y=\"108\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ hareket_et()</text>\n          <text x=\"140\" y=\"120\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ sarj_durumu()</text>\n          \n          <!-- Kalıtım Oku -->\n          <line x1=\"210\" y1=\"125\" x2=\"210\" y2=\"165\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <polygon points=\"210,125 204,140 216,140\" fill=\"#f59e0b\"/>\n          \n          <!-- Alt Sınıflar (Subclasses) -->\n          <g transform=\"translate(40, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#10b981\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">UcanRobot (Drone)</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- irtifa: float</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ havalan()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ inis_yap()</text>\n          </g>\n          \n          <g transform=\"translate(230, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#00f0ff\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">TekerlekliRobot</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- tekerlek_sayisi: int</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ saga_don()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ fren_yap()</text>\n          </g>\n          <line x1=\"115\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <line x1=\"305\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        </svg>"
  },
  {
    "week": 2,
    "date": "21 - 27 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "OOP Felsefesi: Sınıf & Nesne",
    "subtitle": "Gerçek Dünyayı Koda Modelleme: Sınıf (Class) Şablonu ve Nesne (Object / Instance) Mimarisi",
    "outcomeCode": "BB.10.1.2",
    "targetSkill": "Nesne Yönelimli Modelleme & Soyutlama",
    "curiosityQuestion": "Bir fabrikada araba üretilirken kullanılan 'mavi plan (blueprint)' ile yollarda gezen gerçek 'arabalar' arasındaki ilişki koddaki sınıf-nesne bağına nasıl benzer?",
    "roadmap": [
      {
        "title": "Prosedürel vs Nesne Yönelimli",
        "desc": "Fonksiyonlar yığınından birbiriyle haberleşen akıllı nesneler dünyasına geçiş."
      },
      {
        "title": "Sınıf (Class) Nedir?",
        "desc": "Nesneleri üretmek için kullanılan genel kalıp, fabrika veya taslak."
      },
      {
        "title": "Nesne (Object / Instance) Nedir?",
        "desc": "Sınıf kalıbından bellekte somut olarak türetilen gerçek varlık."
      },
      {
        "title": "Öznitelik ve Davranış",
        "desc": "Durumlar (Öznitelikler / Değişkenler) ve Yetenekler (Metotlar / Fonksiyonlar)."
      }
    ],
    "section1": {
      "title": "Sınıf (Kalıp) ile Nesne (Örnek) Ayrımı",
      "subtitle": "Kek kalıbı ile fırından çıkan gerçek kekler metaforu",
      "cards": [
        {
          "title": "İki Temel Kavram",
          "icon": "🏛️",
          "desc": "Nesne yönelimli paradigmanın çekirdeği.",
          "items": [
            {
              "bold": "Sınıf (Class)",
              "text": "Soyut tasarımdır. Bellekte yer kaplamaz; kuralları tanımlar (Örn: `Insan` sınıfı)."
            },
            {
              "bold": "Nesne (Object / Instance)",
              "text": "Taslaktan üretilmiş somut örnektir. Bellekte yer tutar (Örn: `ali = Insan()`, `ece = Insan()`)."
            },
            {
              "bold": "Öznitelikler (Attributes)",
              "text": "Nesnenin taşıdığı verilerdir (`renk`, `model`, `hiz`)."
            },
            {
              "bold": "Metotlar (Methods)",
              "text": "Nesnenin yapabildiği eylemlerdir (`hizlan()`, `fren_yap()`)."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Python'da İlk Sınıfın Tanımlanması",
      "subtitle": "class anahtar kelimesi ve nesne türetme",
      "codeSnippet": "# Basit Sınıf Tanımı ve Nesne Üretimi\nclass Araba:\n    # Sınıf Özniteliği\n    tekerlek_sayisi = 4\n\n# Nesneleri türetme (Instantiation)\naraba1 = Araba()\naraba2 = Araba()\n\n# Nesneye özel dinamik alanlar\naraba1.marka = \"TOGG\"\naraba1.renk = \"Kapadokya Sarısı\"\n\naraba2.marka = \"Tesla\"\naraba2.renk = \"Beyaz\"\n\nprint(f\"1. Araç: {araba1.marka} - {araba1.renk}\")\nprint(f\"2. Araç: {araba2.marka} - Tekerlek: {araba2.tekerlek_sayisi}\")",
      "codeTitle": "sinif_nesne.py",
      "codeLang": "Python",
      "cards": [
        {
          "badge": "İsimlendirme",
          "title": "PascalCase Standardı",
          "desc": "Python'da fonksiyonlar `kucuk_harf` yazılırken, sınıflar kural olarak `BuyukHarf` (PascalCase) ile başlar (`Araba`, `OgrenciTakip`).",
          "items": [
            {
              "bold": "Yeniden Kullanılabilirlik",
              "text": "Tek bir sınıftan binlerce farklı nesne türetebilirsiniz."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Bilişim Laboratuvarı Cihaz Sınıfı Modelleme",
      "subtitle": "Okul bilgisayarlarını temsil eden bir `Bilgisayar` sınıfı kurup 3 farklı laboratuvar bilgisayarı türetme",
      "steps": [
        {
          "title": "1. Sınıfı Aç",
          "desc": "`class Bilgisayar:` bloğunu oluşturun."
        },
        {
          "title": "2. Nesneleri Türet",
          "desc": "`pc1 = Bilgisayar()`, `pc2 = Bilgisayar()` nesnelerini belleğe çıkarın."
        },
        {
          "title": "3. Öznitelikler Ata",
          "desc": "Her nesneye `islemci`, `ram`, `durum` (açık/kapalı) değerleri verin."
        },
        {
          "title": "4. Ekrana Durum Bas",
          "desc": "f-string ile laboratuvar envanter listesini konsola dökün."
        }
      ],
      "criteria": [
        "Sınıf ile nesne arasındaki kavramsal farkı doğru açıklama",
        "PascalCase sınıf isimlendirme kuralına uyma",
        "Aynı sınıftan üretilen nesnelerin bağımsız bellek alanlarına sahip olduğunu gözlemleme"
      ]
    },
    "tips": {
      "safetyTitle": "OOP'ye Girişte Dikkat Edilecekler",
      "safetyRules": [
        {
          "bold": "Sınıf İsimlerinde Büyük Harf",
          "text": "`class ogrenci:` yerine mutlaka `class Ogrenci:` yazın; bu standart kodun okunmasını sağlar."
        },
        {
          "bold": "Parantezleri Unutmayın",
          "text": "Nesne üretirken `a = Araba()` yazmalısınız; `a = Araba` yazarsanız nesne değil sınıfın referansını kopyalarsınız!"
        },
        {
          "bold": "Her Nesne Bağımsızdır",
          "text": "`araba1.renk` değiştiğinde `araba2.renk` bundan asla etkilenmez."
        }
      ],
      "myths": [
        {
          "wrong": "Sınıf ile nesne aynı şeydir.",
          "correct": "Sınıf soyut bir kalıptır (mimari çizim), nesne ise o kalıptan inşa edilen somut binadır."
        },
        {
          "wrong": "OOP sadece oyunlarda kullanılır.",
          "correct": "İşletim sistemlerinden bankacılık uygulamalarına, yapay zekâ kütüphanelerinden web sitelerine kadar tüm modern yazılım OOP'dir."
        }
      ]
    },
    "quiz": {
      "question": "Nesne Yönelimli Programlamada (OOP) bir nesnenin sahip olduğu özellikleri (verileri) ve yapabildiği davranışları (fonksiyonları) tanımlayan genel şablona / kalıba ne ad verilir?",
      "options": [
        {
          "text": "A) Nesne (Object)",
          "isCorrect": false
        },
        {
          "text": "B) Sınıf (Class)",
          "isCorrect": true
        },
        {
          "text": "C) Modül (Module)",
          "isCorrect": false
        },
        {
          "text": "D) Değişken (Variable)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Sınıf (Class), nesnelerin özellik ve davranışlarını tanımlayan soyut şablondur; bu şablondan üretilen somut varlıklara ise Nesne (Object) denir."
    },
    "summary": {
      "keyPoints": [
        "OOP gerçek dünyadaki varlıkları yazılıma taşımanın en doğal yoludur.",
        "Sınıf (Class) şablondur, Nesne (Object) o şablonun yaşayan örneğidir.",
        "Gelecek hafta yapıcı metot (`__init__`) ve `self` kavramını öğreneceğiz."
      ],
      "nextWeek": "Yapıcı Metot (`__init__`), Öznitelikler ve Sınıf Metotları (`self`)",
      "homework": "Bir 'AkıllıTelefon' sınıfı tasarlayıp hangi özniteliklere (ekran, batarya) ve hangi metotlara (ara, mesaj_at) sahip olacağını listeleyiniz."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <!-- Üst Sınıf (Superclass) -->\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"100\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"28\" rx=\"6\" fill=\"#f59e0b\"/>\n          <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0c1322\">&lt;&lt;Class&gt;&gt; Robot</text>\n          <text x=\"140\" y=\"70\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- ad: str</text>\n          <text x=\"140\" y=\"85\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- batarya: int</text>\n          <line x1=\"130\" y1=\"92\" x2=\"290\" y2=\"92\" stroke=\"#475569\"/>\n          <text x=\"140\" y=\"108\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ hareket_et()</text>\n          <text x=\"140\" y=\"120\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ sarj_durumu()</text>\n          \n          <!-- Kalıtım Oku -->\n          <line x1=\"210\" y1=\"125\" x2=\"210\" y2=\"165\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <polygon points=\"210,125 204,140 216,140\" fill=\"#f59e0b\"/>\n          \n          <!-- Alt Sınıflar (Subclasses) -->\n          <g transform=\"translate(40, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#10b981\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">UcanRobot (Drone)</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- irtifa: float</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ havalan()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ inis_yap()</text>\n          </g>\n          \n          <g transform=\"translate(230, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#00f0ff\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">TekerlekliRobot</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- tekerlek_sayisi: int</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ saga_don()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ fren_yap()</text>\n          </g>\n          <line x1=\"115\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <line x1=\"305\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        </svg>"
  },
  {
    "week": 3,
    "date": "28 Eylül - 04 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Yapıcı Metot (__init__) & self",
    "subtitle": "Nesne Doğuşu (Constructor), self Parametresi, Örnek Öznitelikleri ve Metot Tanımlama",
    "outcomeCode": "BB.10.1.3",
    "targetSkill": "Sınıf İçi Metot ve Durum Yönetimi",
    "curiosityQuestion": "Bir oyun başlarken karakterlerin canı, adı ve silahı otomatik olarak nasıl ayarlanır ve her karakter kendi canını nasıl takip eder?",
    "roadmap": [
      {
        "title": "Yapıcı Metot (__init__)",
        "desc": "Nesne yaratıldığı anda arka planda otomatik çalışan sihirli kurucu metot."
      },
      {
        "title": "self Parametresi Gizemi",
        "desc": "Metodun o an hangi somut nesne üzerinde çalıştığını işaret eden kimlik kartı."
      },
      {
        "title": "Örnek Öznitelikleri (Instance Attributes)",
        "desc": "`self.ad = ad` ile nesnenin kalbine bağlanan kalıcı özellikler."
      },
      {
        "title": "Sınıf İçi Metotlar",
        "desc": "Nesnenin eylemlerini kodlama ve durumunu güncelleme (`saldir()`, `iyiles()`)."
      }
    ],
    "section1": {
      "title": "__init__ ve self Mimarisi",
      "subtitle": "Nesne fabrikasının montaj hattı",
      "cards": [
        {
          "title": "Yapıcı Metot Prensipleri",
          "icon": "⚙️",
          "desc": "Nesnenin başlangıç durumunu garantiye alır.",
          "items": [
            {
              "bold": "__init__ Rolü",
              "text": "Nesne oluşturulduğunda ilk çalışan fonksiyondur; zorunlu parametreleri alır."
            },
            {
              "bold": "self Anlamı",
              "text": "Çağıran nesnenin bellekteki adresini gösterir. `araba1.calis()` dendiğinde `self = araba1` olur."
            },
            {
              "bold": "Kapsam İzolasyonu",
              "text": "`self.hiz` nesneye aittir, sıradan bir yerel değişken değildir; nesne yaşadıkça yaşar."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Akıllı Oyuncu Sınıfı Uygulaması",
      "subtitle": "Can, isim ve hasar verme yetenekleri",
      "codeSnippet": "class Oyuncu:\n    def __init__(self, ad, can=100, guc=15):\n        # Yapıcı metot: Nesne doğarken çalışır\n        self.ad = ad\n        self.can = can\n        self.guc = guc\n    \n    def saldir(self, hedef):\n        print(f\"{self.ad}, {hedef.ad} oyuncusuna {self.guc} hasar verdi! ⚔️\")\n        hedef.can -= self.guc\n        print(f\"{hedef.ad} kalan can: {hedef.can}\")\n\n# Nesneleri oluşturma:\nkahraman = Oyuncu(\"Alp\", can=120, guc=20)\ndusman = Oyuncu(\"Gölge\", can=80, guc=10)\n\nkahraman.saldir(dusman)",
      "codeTitle": "oyuncu_oop.py",
      "codeLang": "Python",
      "cards": [
        {
          "badge": "Etkileşim",
          "title": "Nesneler Arası İletişim",
          "desc": "Bir nesne başka bir nesneyi parametre olarak alıp onun özniteliklerini (`hedef.can -= self.guc`) doğrudan değiştirebilir.",
          "items": [
            {
              "bold": "Dunder Metotlar",
              "text": "`__init__`, `__str__` gibi çift alt tireli metotlara Python'da 'Dunder' denir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Banka Hesabı Sınıfı (Bakiye, Para Yatır, Para Çek)",
      "subtitle": "Hesap sahibi ve bakiye özniteliklerine sahip güvenli bir BankaHesabi sınıfı kodlama",
      "steps": [
        {
          "title": "1. __init__ Yaz",
          "desc": "`def __init__(self, sahip, bakiye=0):` ile başlangıç verilerini bağlayın."
        },
        {
          "title": "2. para_yatir Metodu",
          "desc": "`self.bakiye += miktar` yapan ve yeni bakiyeyi basan metot yazın."
        },
        {
          "title": "3. para_cek Metodu",
          "desc": "Eğer `miktar <= self.bakiye` ise düşen, değilse 'Yetersiz Bakiye' diyen kontrolü kurun."
        },
        {
          "title": "4. Nesnelerle Test Et",
          "desc": "İki farklı kişinin hesabını açıp para transferi simülasyonu yapın."
        }
      ],
      "criteria": [
        "`__init__` metodunu doğru parametrelerle tanımlama",
        "Her sınıf metoduna ilk parametre olarak `self` koyma kuralına uyma",
        "Nesnenin kendi durumunu (state) metotlar aracılığıyla güvenle güncelleme"
      ]
    },
    "tips": {
      "safetyTitle": "self Kullanımında En Sık Yapılan Hata",
      "safetyRules": [
        {
          "bold": "self Parametresini Atlamayın",
          "text": "Metot tanımlarken `def saldir(self):` yazmazsanız, Python `saldir() takes 0 positional arguments but 1 was given` hatası fırlatır!"
        },
        {
          "bold": "self. ile Değişkene Erişin",
          "text": "Metot içinde `ad` yazarsanız yerel değişken arar; nesnenin adına erişmek için mutlaka `self.ad` yazmalısınız."
        },
        {
          "bold": "__init__ Geriye Değer Döndürmez",
          "text": "`__init__` içine asla `return bir_sey` yazmayın; `None` dışında return vermek hatadır."
        }
      ],
      "myths": [
        {
          "wrong": "Nesneyi çağırırken `self` parametresini de elimizle girmeliyiz.",
          "correct": "Python nokta operatörüyle çağrılan nesneyi `self` yerine otomatik olarak arka planda ilk sıraya koyar."
        },
        {
          "wrong": "self kelimesi yerine başka kelime yazılamaz.",
          "correct": "Teknik olarak `this` veya başka kelime yazılabilir ama dünya standartlarında Python'da daima `self` kullanılır."
        }
      ]
    },
    "quiz": {
      "question": "Python'da bir sınıfın yapıcı metodu (constructor) olarak nesne bellekte ilk üretildiği anda çalışan özel metot hangisidir?",
      "options": [
        {
          "text": "A) def start(self):",
          "isCorrect": false
        },
        {
          "text": "B) def __init__(self):",
          "isCorrect": true
        },
        {
          "text": "C) def __build__(self):",
          "isCorrect": false
        },
        {
          "text": "D) def new(self):",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `__init__` (Initialization / Başlatma) metodu, Python sınıflarının standart yapıcı metodudur."
    },
    "summary": {
      "keyPoints": [
        "`__init__` nesne ilk yaratıldığında otomatik çalışarak öznitelikleri kurar.",
        "`self`, metotların o an hangi nesne örneğiyle çalıştığını belirten referanstır.",
        "Nesneler birbirleriyle metotlar üzerinden haberleşerek gerçek hayatı simüle eder."
      ],
      "nextWeek": "Kapsülleme (Encapsulation), Veri Gizleme (Private/Public) ve Getter/Setter Mantığı",
      "homework": "Bir 'Kitap' sınıfı tasarlayıp `__init__` içinde ad, yazar ve sayfa sayısı alan, `bilgi_ver()` metodu olan bir kod yazınız."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <!-- Üst Sınıf (Superclass) -->\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"100\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"28\" rx=\"6\" fill=\"#f59e0b\"/>\n          <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0c1322\">&lt;&lt;Class&gt;&gt; Robot</text>\n          <text x=\"140\" y=\"70\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- ad: str</text>\n          <text x=\"140\" y=\"85\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- batarya: int</text>\n          <line x1=\"130\" y1=\"92\" x2=\"290\" y2=\"92\" stroke=\"#475569\"/>\n          <text x=\"140\" y=\"108\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ hareket_et()</text>\n          <text x=\"140\" y=\"120\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ sarj_durumu()</text>\n          \n          <!-- Kalıtım Oku -->\n          <line x1=\"210\" y1=\"125\" x2=\"210\" y2=\"165\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <polygon points=\"210,125 204,140 216,140\" fill=\"#f59e0b\"/>\n          \n          <!-- Alt Sınıflar (Subclasses) -->\n          <g transform=\"translate(40, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#10b981\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">UcanRobot (Drone)</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- irtifa: float</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ havalan()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ inis_yap()</text>\n          </g>\n          \n          <g transform=\"translate(230, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#00f0ff\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">TekerlekliRobot</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- tekerlek_sayisi: int</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ saga_don()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ fren_yap()</text>\n          </g>\n          <line x1=\"115\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <line x1=\"305\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        </svg>"
  },
  {
    "week": 4,
    "date": "05 - 11 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Kapsülleme (Encapsulation) & Veri Gizleme",
    "subtitle": "Güvenli Nesne Mimarisi, Gizli Değişkenler (`__`), Getter ve Setter Metotları ile Veri Doğrulama",
    "outcomeCode": "BB.10.1.4",
    "targetSkill": "Veri Bütünlüğü & Güvenli Sınıf Tasarımı",
    "curiosityQuestion": "Bir banka uygulamasında kullanıcı bakiyesini dışarıdan doğrudan `hesap.bakiye = 1000000` yazarak değiştirebilseydi finansal sistem nasıl çökerdi?",
    "roadmap": [
      {
        "title": "Kapsülleme (Encapsulation) Nedir?",
        "desc": "Veriyi ve o veriyi işleyen metotları tek bir kapsül içinde koruma altına alma ilkesi."
      },
      {
        "title": "Erişim Belirleyiciler",
        "desc": "Public (Açık), Protected (`_degisken`) ve Private (`__degisken`) seviyeleri."
      },
      {
        "title": "Getter ve Setter Metotları",
        "desc": "Veriyi kontrollü okuma (`get_bakiye`) ve kurallarla güncelleme (`set_bakiye`)."
      },
      {
        "title": "@property Dekoratörü",
        "desc": "Pythonik getter/setter kullanımı ve doğrudan öznitelik hissi verme."
      }
    ],
    "section1": {
      "title": "Veri Gizleme ve Güvenlik Seviyeleri",
      "subtitle": "Dış müdahalelere karşı zırhlı sınıflar",
      "cards": [
        {
          "title": "Erişim Seviyesi Hiyerarşisi",
          "icon": "🔒",
          "desc": "Python'da isim değiştirme (Name Mangling) kuralları.",
          "items": [
            {
              "bold": "Public (Genel)",
              "text": "`self.ad = 'Ali'` - Herkes doğrudan okur ve değiştirebilir."
            },
            {
              "bold": "Protected (Korumalı)",
              "text": "`self._hiz = 50` - Tek alt tire; geliştiriciye 'Dışarıdan dokunma' ricasıdır."
            },
            {
              "bold": "Private (Özel / Gizli)",
              "text": "`self.__sifre = '123'` - Çift alt tire; sınıf dışından doğrudan erişilemez."
            },
            {
              "bold": "Doğrulama Filtresi",
              "text": "Setter fonksiyonu negatif sayı girişlerini (`hiz < 0`) otomatik engeller."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Güvenli Banka Hesabı ve Setter Doğrulaması",
      "subtitle": "Kapsüllenmiş bakiye kontrolü",
      "codeSnippet": "class GuvenliHesap:\n    def __init__(self, sahip, baslangic_bakiye=0):\n        self.sahip = sahip\n        self.__bakiye = baslangic_bakiye  # Private: Dışarıdan gizli!\n\n    # Getter metodu\n    def get_bakiye(self):\n        return self.__bakiye\n\n    # Setter metodu (Veri Doğrulama)\n    def para_yatir(self, miktar):\n        if miktar > 0:\n            self.__bakiye += miktar\n            print(f\"{miktar} TL yatırıldı. Güncel bakiye: {self.__bakiye} TL\")\n        else:\n            print(\"Hata: Geçersiz para miktarı!\")\n\nh = GuvenliHesap(\"Zeynep\", 500)\n# h.__bakiye = 999999 -> Bu doğrudan DEĞİŞMEZ!\nh.para_yatir(250)\nprint(\"Bakiye:\", h.get_bakiye())",
      "codeTitle": "kapsulleme.py",
      "codeLang": "Python",
      "cards": [
        {
          "badge": "Güvenlik",
          "title": "Name Mangling",
          "desc": "Python `__bakiye` değişkenini arka planda `_GuvenliHesap__bakiye` olarak saklar; böylece yanlışlıkla ezilmesi engellenir.",
          "items": [
            {
              "bold": "Veri Bütünlüğü",
              "text": "Hatalı değerlerin sistemin hafızasına girmesini setter bariyeri durdurur."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Termostat Sınıfı Kapsülleme Atölyesi",
      "subtitle": "Sıcaklığı sadece 15°C ile 35°C arasında kabul eden güvenli bir termostat tasarlama",
      "steps": [
        {
          "title": "1. Sınıf & Private Alan",
          "desc": "`self.__sicaklik = 22` başlangıç değeriyle sınıfı tanımlayın."
        },
        {
          "title": "2. Getter Yaz",
          "desc": "`get_sicaklik(self)` ile mevcut dereceyi döndürün."
        },
        {
          "title": "3. Setter & Aralık Kontrolü",
          "desc": "`set_sicaklik(self, yeni_derece)` metodunda 15-35 kontrolü yapın, aksi halde hata mesajı verin."
        },
        {
          "title": "4. Sınır Testi",
          "desc": "-5°C ve 50°C değerlerini göndermeyi deneyip koruma sistemini test edin."
        }
      ],
      "criteria": [
        "Private değişkenler için `__` ön ekini doğru uygulama",
        "Getter ve Setter fonksiyonlarını amaca uygun kurgulama",
        "Sınıf dışından geçersiz veri aktarımının engellendiğini kanıtlama"
      ]
    },
    "tips": {
      "safetyTitle": "Veri Kapsülleme İpuçları",
      "safetyRules": [
        {
          "bold": "Gereksiz Yere Her Şeyi Private Yapmayın",
          "text": "Sadece korunması ve kurallara bağlanması gereken kritik verileri private yapın."
        },
        {
          "bold": "Getter'da Veriyi Korumak",
          "text": "Eğer liste veya sözlük döndürüyorsanız, doğrudan referans yerine kopyasını (`return self.__liste.copy()`) döndürün."
        },
        {
          "bold": "Name Mangling'i Kötüye Kullanmayın",
          "text": "`_Sinif__gizli` diyerek private alana erişmek mümkündür ama profesyonel kodda asla yapılmaz."
        }
      ],
      "myths": [
        {
          "wrong": "Python'da C++ veya Java'daki gibi mutlak 'private' vardır.",
          "correct": "Python 'hepimiz yetişkin insanlarız' felsefesini benimser; iki alt tire güçlü bir sözleşmedir ancak bellekten mutlak kilit vurmaz."
        },
        {
          "wrong": "Kapsülleme sadece güvenlik içindir.",
          "correct": "Kapsülleme aynı zamanda kodun ileride iç yapısı değiştiğinde dışarıyı bozmamasını (Bakım Kolaylığı) sağlar."
        }
      ]
    },
    "quiz": {
      "question": "Python'da bir sınıf özniteliğini 'Private' (sınıf dışından doğrudan erişilemez) yapmak için öznitelik adının başına hangi karakterler konulur?",
      "options": [
        {
          "text": "A) Tek alt tire (_degisken)",
          "isCorrect": false
        },
        {
          "text": "B) Çift alt tire (__degisken)",
          "isCorrect": true
        },
        {
          "text": "C) Yıldız işareti (*degisken)",
          "isCorrect": false
        },
        {
          "text": "D) Dolar işareti ($degisken)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. Python'da çift alt tire (`__`) ile başlayan öznitelikler 'Name Mangling' mekanizmasıyla dışarıdan doğrudan erişime kapatılarak Private hale getirilir."
    },
    "summary": {
      "keyPoints": [
        "Kapsülleme veriyi korur ve kontrolsüz bozulmaları engeller.",
        "Private değişkenler `__` ile tanımlanır, Getter/Setter ile yönetilir.",
        "Haftaya OOP'nin en güçlü sütunlarından biri olan Kalıtım (Inheritance) konusuna geçeceğiz."
      ],
      "nextWeek": "Kalıtım (Inheritance / Miras Alma), Üst Sınıf & super() Fonksiyonu",
      "homework": "Bir 'Ogrenci' sınıfı tasarlayıp `__not` özniteliğini 0-100 aralığı dışında kabul etmeyen bir setter yazınız."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <!-- Üst Sınıf (Superclass) -->\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"100\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"28\" rx=\"6\" fill=\"#f59e0b\"/>\n          <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0c1322\">&lt;&lt;Class&gt;&gt; Robot</text>\n          <text x=\"140\" y=\"70\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- ad: str</text>\n          <text x=\"140\" y=\"85\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- batarya: int</text>\n          <line x1=\"130\" y1=\"92\" x2=\"290\" y2=\"92\" stroke=\"#475569\"/>\n          <text x=\"140\" y=\"108\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ hareket_et()</text>\n          <text x=\"140\" y=\"120\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ sarj_durumu()</text>\n          \n          <!-- Kalıtım Oku -->\n          <line x1=\"210\" y1=\"125\" x2=\"210\" y2=\"165\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <polygon points=\"210,125 204,140 216,140\" fill=\"#f59e0b\"/>\n          \n          <!-- Alt Sınıflar (Subclasses) -->\n          <g transform=\"translate(40, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#10b981\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">UcanRobot (Drone)</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- irtifa: float</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ havalan()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ inis_yap()</text>\n          </g>\n          \n          <g transform=\"translate(230, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#00f0ff\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">TekerlekliRobot</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- tekerlek_sayisi: int</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ saga_don()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ fren_yap()</text>\n          </g>\n          <line x1=\"115\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <line x1=\"305\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        </svg>"
  },
  {
    "week": 5,
    "date": "12 - 18 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Kalıtım (Inheritance) & super()",
    "subtitle": "Kod Tekrarını Yok Etme: Üst Sınıf (Base/Parent), Alt Sınıf (Derived/Child) ve super().__init__() Mimarisi",
    "outcomeCode": "BB.10.1.5",
    "targetSkill": "Hiyerarşik Modelleme & Kod Yeniden Kullanılabilirliği",
    "curiosityQuestion": "Bir RPG oyununda Savaşçı, Büyücü ve Okçu karakterlerinin hepsinin canı, adı ve yürüme özelliği varken neden bu özellikleri üç kez baştan yazmayız?",
    "roadmap": [
      {
        "title": "Kalıtım (Miras) Kavramı",
        "desc": "Biyolojik gen aktarımı gibi; üst sınıfın yeteneklerini alt sınıfa devretme."
      },
      {
        "title": "Parent (Üst) ve Child (Alt) Sınıf",
        "desc": "`class Kedi(Hayvan):` söz dizimi ile miras alma ilişkisi kurma."
      },
      {
        "title": "super() Fonksiyonu",
        "desc": "Üst sınıfın yapıcı metodunu çağırıp ortak öznitelikleri mirasla başlatma."
      },
      {
        "title": "Özelleştirme (Extending)",
        "desc": "Alt sınıfa kendine özgü yeni özellikler ve yeni metotlar ekleme."
      }
    ],
    "section1": {
      "title": "Kalıtımın Temel Mekanizması",
      "subtitle": "DRY (Don't Repeat Yourself - Kendini Tekrar Etme) prensibi",
      "cards": [
        {
          "title": "Üst Sınıftan Alt Sınıfa Aktarım",
          "icon": "🧬",
          "desc": "Yazılım mimarisinde hiyerarşi kurma sanatı.",
          "items": [
            {
              "bold": "Temel Sınıf (Superclass)",
              "text": "En genel özellikleri barındırır (Örn: `Arac`)."
            },
            {
              "bold": "Türemiş Sınıf (Subclass)",
              "text": "Üst sınıftan her şeyi alır ve üzerine ekleme yapar (Örn: `ElektrikliArac(Arac)`)."
            },
            {
              "bold": "super().__init__()",
              "text": "Üst sınıfın montaj hattını çalıştırarak temel alanları doldurur."
            },
            {
              "bold": "is-a İlişkisi",
              "text": "Kalıtım 'bir türüdür' ilişkisini modeller: Kartal bir Kuş'tur, Kuş bir Hayvan'dır."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Robot Hiyerarşisi Uygulaması",
      "subtitle": "Temel Robot sınıfından Uçan Robot türetme",
      "codeSnippet": "# Üst Sınıf (Parent / Super)\nclass Robot:\n    def __init__(self, ad, batarya=100):\n        self.ad = ad\n        self.batarya = batarya\n    \n    def sarj_et(self):\n        self.batarya = 100\n        print(f\"{self.ad} tamamen şarj edildi! ⚡\")\n\n# Alt Sınıf (Child / Derived)\nclass UcanRobot(Robot):\n    def __init__(self, ad, irtifa_limiti=500):\n        # Üst sınıfın yapıcısını çağırıyoruz:\n        super().__init__(ad)\n        self.irtifa_limiti = irtifa_limiti  # Ekstra özellik\n    \n    def havalan(self, metre):\n        print(f\"{self.ad} {metre} metreye havalandı! 🚁\")\n\ndrone = UcanRobot(\"Bayraktar-AI\", 3000)\ndrone.havalan(150)\ndrone.sarj_et()  # Miras alınan metot!",
      "codeTitle": "kalitim_robot.py",
      "codeLang": "Python",
      "cards": [
        {
          "badge": "Güç",
          "title": "super() Neden Şart?",
          "desc": "`super().__init__()` çağrılmazsa alt sınıf üst sınıfın özniteliklerini (`self.ad`, `self.batarya`) oluşturamaz ve hata çıkar.",
          "items": [
            {
              "bold": "Bakım Kolaylığı",
              "text": "Ortak bir kural değiştiğinde sadece üst sınıfı güncellemek yeterlidir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Okul Bilişim Ailesi Sınıf Hiyerarşisi",
      "subtitle": "Temel `Kisi` sınıfından `Ogrenci` ve `Ogretmen` alt sınıflarını miras alma",
      "steps": [
        {
          "title": "1. Kisi Sınıfı Yaz",
          "desc": "`ad`, `soyad`, `tc_no` alanları ve `tanit()` metodu olan temel sınıfı kurun."
        },
        {
          "title": "2. Ogrenci Türet",
          "desc": "`class Ogrenci(Kisi):` ile türetip `super().__init__()` çağırın ve `ogrenci_no` ekleyin."
        },
        {
          "title": "3. Ogretmen Türet",
          "desc": "`brans` özniteliği ve `ders_anlat()` metodu ekleyin."
        },
        {
          "title": "4. Nesnelerle Test Et",
          "desc": "Bir öğrenci ve bir öğretmen nesnesi türetip her ikisinin de `tanit()` metodunu çalıştırın."
        }
      ],
      "criteria": [
        "Sınıf parantezi içinde üst sınıfı doğru belirtebilme",
        "`super().__init__()` komutunu eksiksiz çalıştırabilme",
        "Alt sınıfların üst sınıf metotlarına serbestçe erişebildiğini doğrulama"
      ]
    },
    "tips": {
      "safetyTitle": "Kalıtım Tasarımında Kritik Kurallar",
      "safetyRules": [
        {
          "bold": "super() Çağrısını Unutmayın",
          "text": "Alt sınıfın `__init__` metodunun ilk satırına daima `super().__init__(...)` yazın."
        },
        {
          "bold": "Gereksiz Derin Hiyerarşilerden Kaçının",
          "text": "5-6 katmanlı karmaşık miras ağaçları kodun anlaşılmasını ve bakımını zorlaştırır."
        },
        {
          "bold": "Miras İlişkisini Doğru Kurun",
          "text": "Bir sınıf diğerinin 'bir türü' (is-a) değilse kalıtım yerine bileşim (composition) kullanın."
        }
      ],
      "myths": [
        {
          "wrong": "Alt sınıf üst sınıftaki private (`__`) değişkenlere doğrudan erişebilir.",
          "correct": "Private alanlar alt sınıflara bile gizlidir; alt sınıf onlara ancak üst sınıfın public metotlarıyla ulaşabilir."
        },
        {
          "wrong": "Python çoklu kalıtımı (Multiple Inheritance) desteklemez.",
          "correct": "Python aynı anda birden fazla üst sınıftan miras almayı (`class C(A, B):`) destekler."
        }
      ]
    },
    "quiz": {
      "question": "Python'da bir alt sınıfın (child class), üst sınıfının (parent class) yapıcı metodunu çağırmasını sağlayan yerleşik fonksiyon hangisidir?",
      "options": [
        {
          "text": "A) parent()",
          "isCorrect": false
        },
        {
          "text": "B) super()",
          "isCorrect": true
        },
        {
          "text": "C) base()",
          "isCorrect": false
        },
        {
          "text": "D) this()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `super()` fonksiyonu alt sınıftan üst sınıfın metotlarına (özellikle `super().__init__()`) erişim sağlayan standart fonksiyondur."
    },
    "summary": {
      "keyPoints": [
        "Kalıtım kod tekrarını önler ve mantıksal sınıflar arası bağ kurar.",
        "Alt sınıflar üst sınıfların tüm public metotlarını otomatik kazanır.",
        "Gelecek hafta Çok Biçimlilik (Polymorphism) ve Metot Ezme (Overriding) konularını göreceğiz."
      ],
      "nextWeek": "Çok Biçimlilik (Polymorphism), Metot Ezme (Overriding) & __str__ Dunder Metodu",
      "homework": "Temel `Sekil` sınıfından türeyen `Kare` ve `Daire` sınıfları yazıp alan hesaplama fonksiyonlarını ekleyiniz."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <!-- Üst Sınıf (Superclass) -->\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"100\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"28\" rx=\"6\" fill=\"#f59e0b\"/>\n          <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0c1322\">&lt;&lt;Class&gt;&gt; Robot</text>\n          <text x=\"140\" y=\"70\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- ad: str</text>\n          <text x=\"140\" y=\"85\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- batarya: int</text>\n          <line x1=\"130\" y1=\"92\" x2=\"290\" y2=\"92\" stroke=\"#475569\"/>\n          <text x=\"140\" y=\"108\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ hareket_et()</text>\n          <text x=\"140\" y=\"120\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ sarj_durumu()</text>\n          \n          <!-- Kalıtım Oku -->\n          <line x1=\"210\" y1=\"125\" x2=\"210\" y2=\"165\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <polygon points=\"210,125 204,140 216,140\" fill=\"#f59e0b\"/>\n          \n          <!-- Alt Sınıflar (Subclasses) -->\n          <g transform=\"translate(40, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#10b981\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">UcanRobot (Drone)</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- irtifa: float</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ havalan()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ inis_yap()</text>\n          </g>\n          \n          <g transform=\"translate(230, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#00f0ff\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">TekerlekliRobot</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- tekerlek_sayisi: int</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ saga_don()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ fren_yap()</text>\n          </g>\n          <line x1=\"115\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <line x1=\"305\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        </svg>"
  },
  {
    "week": 6,
    "date": "19 - 25 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Çok Biçimlilik & Metot Ezme",
    "subtitle": "Aynı İsim Farklı Davranış: Polymorphism, Method Overriding, Duck Typing ve Sihirli Metotlar (__str__, __len__)",
    "outcomeCode": "BB.10.1.6",
    "targetSkill": "Esnek Arayüz Tasarımı & Çok Biçimli Algoritmalar",
    "curiosityQuestion": "Bir müzikçalar programında MP3, WAV veya FLAC dosyalarının her biri için ayrı kod yazmadan hepsini tek bir 'Oynat (Play)' tuşuyla nasıl çalıştırırız?",
    "roadmap": [
      {
        "title": "Çok Biçimlilik (Polymorphism)",
        "desc": "Farklı sınıfların aynı isimli metotlara sahip olarak ortak bir arayüz sunması."
      },
      {
        "title": "Metot Ezme (Method Overriding)",
        "desc": "Alt sınıfın üst sınıftan devraldığı metodu kendi ihtiyacına göre yeniden yazması."
      },
      {
        "title": "Ördek Tiplemesi (Duck Typing)",
        "desc": "'Bir kuş ördek gibi yürüyüp vaklıyorsa o ördektir' felsefesiyle esnek tip uyumu."
      },
      {
        "title": "Sihirli Metotlar (__str__, __repr__)",
        "desc": "`print(nesne)` dendiğinde okunabilir metin basılmasını sağlayan dunder metotlar."
      }
    ],
    "section1": {
      "title": "Metot Ezme ve Çok Biçimlilik Mimarisi",
      "subtitle": "Tek arayüz, sınırsız farklı icra kabiliyeti",
      "cards": [
        {
          "title": "Polymorphism Avantajları",
          "icon": "🎭",
          "desc": "Genişletilebilir ve geleceğe hazır sistemler.",
          "items": [
            {
              "bold": "Method Overriding",
              "text": "Alt sınıf üst sınıfın metodunu aynı isimle yeniden yazar; çağrıldığında alt sınıfınki çalışır."
            },
            {
              "bold": "Döngü ile Çalışma",
              "text": "Tek bir listedeki yüzlerce farklı nesneyi `for nesne in liste: nesne.ses_cikar()` ile yönetebilme."
            },
            {
              "bold": "Loose Coupling (Gevşek Bağ)",
              "text": "Ana sistem nesnelerin iç detayını bilmeden sadece ortak metot çağrısı yapar."
            },
            {
              "bold": "__str__ Sihri",
              "text": "Sınıfa `def __str__(self): return ...` eklendiğinde nesne doğrudan stringe dönüşür."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Ses Çıkaran Canlılar ve Çok Biçimlilik",
      "subtitle": "Aynı listede farklı canlıları tek döngüde konuşturma",
      "codeSnippet": "class Hayvan:\n    def __init__(self, ad):\n        self.ad = ad\n    def ses_ver(self):\n        return \"Bilinmeyen ses...\"\n\nclass Kopek(Hayvan):\n    def ses_ver(self):  # Overriding: Üst sınıf metodunu ezdik!\n        return \"Hav hav! 🐕\"\n\nclass Kedi(Hayvan):\n    def ses_ver(self):\n        return \"Miyav! 🐈\"\n\n# Çok Biçimli Kullanım (Polymorphism):\ncanlilar = [Kopek(\"Karabaş\"), Kedi(\"Tekir\"), Kopek(\"Cesur\")]\n\nfor c in canlilar:\n    # c'nin Kopek mi Kedi mi olduğuna bakmadan aynı metodu çağırıyoruz:\n    print(f\"{c.ad}: {c.ses_ver()}\")",
      "codeTitle": "cok_bicimlilik.py",
      "codeLang": "Python",
      "cards": [
        {
          "badge": "Zarafet",
          "title": "if/else Yığınlarından Kurtulma",
          "desc": "Polymorphism sayesinde `if tur == 'kedi': ... elif tur == 'kopek': ...` gibi hantal kontroller tamamen ortadan kalkar.",
          "items": [
            {
              "bold": "Açık/Kapalı Prensibi",
              "text": "Yeni bir `Kus` sınıfı eklediğinizde mevcut döngü koduna tek satır dokunmanız gerekmez!"
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Geometrik Şekiller Alan Hesaplayıcı",
      "subtitle": "Kare, Dikdörtgen ve Daire sınıflarını `alan()` metoduyla çok biçimli çalıştırma",
      "steps": [
        {
          "title": "1. Sekil Taban Sınıfı",
          "desc": "`def alan(self): pass` içeren soyut taslak sınıfı yazın."
        },
        {
          "title": "2. Alt Sınıfları Kodla",
          "desc": "`Kare(kenar)`, `Daire(yaricap)` sınıflarını yazıp `alan()` metodunu override edin."
        },
        {
          "title": "3. Liste Oluştur",
          "desc": "Farklı ölçülerde 4-5 şekli tek bir `sekiller` listesine toplayın."
        },
        {
          "title": "4. Toplam Alanı Bul",
          "desc": "`for s in sekiller:` döngüsüyle toplam alanı tek satırda toplayıp yazdırın."
        }
      ],
      "criteria": [
        "Metot ezme (overriding) kurallarını harfiyen uygulama",
        "Çok biçimli nesne listesi üzerinde tek komutla işlem yapabilme",
        "`__str__` metodunu sınıfa ekleyerek nesne çıktısını güzelleştirme"
      ]
    },
    "tips": {
      "safetyTitle": "Polymorphism Kullanırken İpuçları",
      "safetyRules": [
        {
          "bold": "Metot İsimlerini Birebir Aynı Tutun",
          "text": "Üst sınıfta `alan()` iken alt sınıfta `alan_hesapla()` yazarsanız override gerçekleşmez!"
        },
        {
          "bold": "Parametre İmzasına Dikkat Edin",
          "text": "Ezilen metodun aldığı argüman sayısı ve sırası üst sınıfla uyumlu olmalıdır."
        },
        {
          "bold": "__str__ Mutlaka Metin Döndürmeli",
          "text": "`def __str__(self):` fonksiyonu daima `return string` yapmalıdır; `print` basmak hatadır."
        }
      ],
      "myths": [
        {
          "wrong": "Polymorphism sadece kalıtımla mümkündür.",
          "correct": "Python'da 'Duck Typing' sayesinde iki sınıf arasında kalıtım bağı olmasa bile aynı isimli metotları varsa çok biçimli davranabilirler."
        },
        {
          "wrong": "Overriding üst sınıftaki metodu tamamen yok eder.",
          "correct": "Üst sınıftaki orijinal metoda ihtiyaç duyulursa `super().metot_adi()` ile hala ulaşılabilir."
        }
      ]
    },
    "quiz": {
      "question": "Farklı sınıfların aynı isimli metotlara sahip olarak ortak bir döngü veya fonksiyonda aynı biçimde çağrılabilmesine Nesne Yönelimli Programlamada ne ad verilir?",
      "options": [
        {
          "text": "A) Kapsülleme (Encapsulation)",
          "isCorrect": false
        },
        {
          "text": "B) Kalıtım (Inheritance)",
          "isCorrect": false
        },
        {
          "text": "C) Çok Biçimlilik (Polymorphism)",
          "isCorrect": true
        },
        {
          "text": "D) Derleme (Compilation)",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. Çok Biçimlilik (Polymorphism), farklı sınıfların aynı arayüzü (aynı isimli metotları) kendi bünyelerinde farklı biçimlerde icra edebilmesidir."
    },
    "summary": {
      "keyPoints": [
        "Polymorphism yazılım mimarisini genişletilebilir ve esnek kılar.",
        "Overriding alt sınıfın kendi özel davranışını tanımlamasını sağlar.",
        "Gelecek hafta verilerimizi diske kalıcı olarak kaydedeceğimiz Dosya İşlemleri konusuna geçiyoruz."
      ],
      "nextWeek": "Dosya İşlemleri: Metin (.txt) ve CSV Dosyalarını Güvenli Okuma/Yazma (with open)",
      "homework": "Sınıflarınıza `__str__` dunder metodu ekleyerek `print(nesne)` çağrıldığında güzel bir özet yazdırmasını sağlayınız."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(245, 158, 11, 0.3)\" stroke-width=\"2\"/>\n          <!-- Üst Sınıf (Superclass) -->\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"100\" rx=\"6\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <rect x=\"130\" y=\"25\" width=\"160\" height=\"28\" rx=\"6\" fill=\"#f59e0b\"/>\n          <text x=\"210\" y=\"44\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#0c1322\">&lt;&lt;Class&gt;&gt; Robot</text>\n          <text x=\"140\" y=\"70\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- ad: str</text>\n          <text x=\"140\" y=\"85\" font-size=\"10\" font-family=\"monospace\" fill=\"#ffffff\">- batarya: int</text>\n          <line x1=\"130\" y1=\"92\" x2=\"290\" y2=\"92\" stroke=\"#475569\"/>\n          <text x=\"140\" y=\"108\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ hareket_et()</text>\n          <text x=\"140\" y=\"120\" font-size=\"10\" font-family=\"monospace\" fill=\"#38bdf8\">+ sarj_durumu()</text>\n          \n          <!-- Kalıtım Oku -->\n          <line x1=\"210\" y1=\"125\" x2=\"210\" y2=\"165\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n          <polygon points=\"210,125 204,140 216,140\" fill=\"#f59e0b\"/>\n          \n          <!-- Alt Sınıflar (Subclasses) -->\n          <g transform=\"translate(40, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#10b981\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">UcanRobot (Drone)</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- irtifa: float</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ havalan()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#34d399\">+ inis_yap()</text>\n          </g>\n          \n          <g transform=\"translate(230, 165)\">\n            <rect width=\"150\" height=\"95\" rx=\"6\" fill=\"#162038\" stroke=\"#00f0ff\" stroke-width=\"1.5\"/>\n            <rect width=\"150\" height=\"25\" rx=\"6\" fill=\"#00f0ff\"/>\n            <text x=\"75\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#070b14\">TekerlekliRobot</text>\n            <text x=\"10\" y=\"45\" font-size=\"9\" font-family=\"monospace\" fill=\"#ffffff\">- tekerlek_sayisi: int</text>\n            <line x1=\"0\" y1=\"52\" x2=\"150\" y2=\"52\" stroke=\"#475569\"/>\n            <text x=\"10\" y=\"68\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ saga_don()</text>\n            <text x=\"10\" y=\"82\" font-size=\"9\" font-family=\"monospace\" fill=\"#38bdf8\">+ fren_yap()</text>\n          </g>\n          <line x1=\"115\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n          <line x1=\"305\" y1=\"165\" x2=\"210\" y2=\"150\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n        </svg>"
  },
  {
    "week": 7,
    "date": "26 Ekim - 01 Kasım",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Dosya İşlemleri (I/O) & CSV",
    "subtitle": "Kalıcı Veri Saklama: open(), read(), write(), with Bağlam Yöneticisi, CSV Modülü ve Türkçe Karakter (utf-8) Yönetimi",
    "outcomeCode": "BB.10.1.7",
    "targetSkill": "Kalıcı Veri Yönetimi & Tablosal Dosya İşleme",
    "curiosityQuestion": "Programımız kapandığında RAM'deki tüm değişkenler uçup gidiyor; verilerimizi ertesi güne nasıl kalıcı olarak saklarız?",
    "roadmap": [
      {
        "title": "Uçucu Bellek vs Kalıcı Depolama",
        "desc": "RAM ile Disk (SSD/HDD) farkı ve dosyaların işletim sistemindeki yeri."
      },
      {
        "title": "with open() Güvenli Blok",
        "desc": "Dosyayı açtıktan sonra hata çıksa bile otomatik kapatan bağlam yöneticisi (Context Manager)."
      },
      {
        "title": "Dosya Erişim Modları",
        "desc": "'r' (okuma), 'w' (sıfırdan yazma), 'a' (sonuna ekleme) kipleri."
      },
      {
        "title": "CSV Dosyaları & Tablo Verisi",
        "desc": "Excel ve veri analizinde evrensel format olan virgülle ayrılmış (CSV) dosyalar."
      }
    ],
    "section1": {
      "title": "Python Dosya Okuma/Yazma Standartları",
      "subtitle": "Veri kaybı yaşamadan profesyonel dosya yönetimi",
      "cards": [
        {
          "title": "with open İle Güvenli Yaşam",
          "icon": "📁",
          "desc": "Dosya sızıntılarını (file leak) önleyen modern yöntem.",
          "items": [
            {
              "bold": "'r' Kipi",
              "text": "Okuma modu. Dosya yoksa `FileNotFoundError` fırlatır."
            },
            {
              "bold": "'w' Kipi",
              "text": "Yazma modu. Dosya varsa içindekileri tamamen SİLER, baştan yazar!"
            },
            {
              "bold": "'a' Kipi",
              "text": "Ekleme (Append) modu. Var olan içeriğin sonuna yeni satırlar ekler."
            },
            {
              "bold": "encoding='utf-8'",
              "text": "Türkçe karakterlerin (ş, ğ, ı, ö, ü, ç) bozulmaması için zorunlu parametredir."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Öğrenci Not Kayıt ve CSV Dışa Aktarım",
      "subtitle": "Metin ve CSV dosya işlemleri kod örneği",
      "codeSnippet": "# 1. Metin Dosyasına Yazma (with open güvenli blok)\nwith open(\"gunluk_kayit.txt\", \"a\", encoding=\"utf-8\") as dosya:\n    dosya.write(\"2026-10-26: Sistem yedeklemesi tamamlandı.\\n\")\n\n# 2. CSV Dosyası Okuma (Tablo Verisi)\nimport csv\n\nogrenciler = [\n    [\"Numara\", \"Ad\", \"Bilisim_Notu\"],\n    [\"101\", \"Ayşe Yılmaz\", 95],\n    [\"102\", \"Mehmet Demir\", 88]\n]\n\nwith open(\"sinif_notlari.csv\", \"w\", newline=\"\", encoding=\"utf-8\") as f:\n    yazici = csv.writer(f)\n    yazici.writerows(ogrenciler)\n\nprint(\"Veriler CSV dosyasına başarıyla kaydedildi! 📊\")",
      "codeTitle": "dosya_yonetimi.py",
      "codeLang": "Python",
      "cards": [
        {
          "badge": "Kritik Kural",
          "title": "newline='' Parametresi",
          "desc": "Windows sistemlerde CSV yazarken her satır arasına boş bir satır eklenmesini engellemek için `newline=''` parametresi kullanılır.",
          "items": [
            {
              "bold": "Otomatik Kapanma",
              "text": "`with` bloğu bittiğinde dosya arka planda işletim sistemine iade edilir."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kişisel Günlük ve Şifreli Not Defteri",
      "subtitle": "Kullanıcıdan alınan notları zaman damgasıyla `gunluk.txt` dosyasına ekleyen program",
      "steps": [
        {
          "title": "1. Kullanıcıdan Not Al",
          "desc": "`input(\"Bugün ne öğrendiniz?: \")` ile veri okuyun."
        },
        {
          "title": "2. Zaman Damgası Al",
          "desc": "`datetime.now()` modülüyle gün ve saati formatlayın."
        },
        {
          "title": "3. 'a' Kipiyle Aç",
          "desc": "`with open(\"gunluk.txt\", \"a\", encoding=\"utf-8\") as f:` bloğunu kurun."
        },
        {
          "title": "4. Ekrana Dök",
          "desc": "Ayrı bir fonksiyonda `'r'` kipiyle açıp tüm eski günlüğü numaralandırarak konsola dökün."
        }
      ],
      "criteria": [
        "`with open` yapısını doğru kip ('a' ve 'r') ile kullanabilme",
        "`encoding='utf-8'` parametresini unutmadan Türkçe karakterleri destekleme",
        "Dosyadan satır satır okuma döngüsünü kurabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Dosya İşlemlerinde Güvenlik İpuçları",
      "safetyRules": [
        {
          "bold": "'w' Moduna Çok Dikkat Edin",
          "text": "Mevcut bir dosyayı `'w'` kipiyle açtığınız an içindeki tüm eski veriler anında kalıcı olarak silinir!"
        },
        {
          "bold": "Dosya Yolunu (Path) Doğru Belirtin",
          "text": "Farklı klasörlerdeki dosyalara erişirken göreli veya mutlak yolları dikkatli yazın."
        },
        {
          "bold": "Büyük Dosyaları read() ile Tek Seferde Okumayın",
          "text": "Gigabaytlarca boyuttaki dosyaları `f.read()` yaparsanız RAM patlayabilir; `for satir in f:` ile satır satır okuyun."
        }
      ],
      "myths": [
        {
          "wrong": "Dosyayı kapatmak için mutlaka elimizle `f.close()` yazmalıyız.",
          "correct": "`with` bağlam yöneticisi kullanıldığında kod hata fırlatsa bile dosya yüzde yüz güvenle otomatik kapatılır."
        },
        {
          "wrong": "CSV dosyalarını açmak için bilgisayarda mutlaka Excel yüklü olmalıdır.",
          "correct": "CSV saf metin (plain text) dosyasıdır; not defteriyle dahi okunup düzenlenebilir."
        }
      ]
    },
    "quiz": {
      "question": "Python'da var olan bir metin dosyasının içindeki eski verileri silmeden, yeni verileri dosyanın en sonuna eklemek için hangi dosya açma kipi (mode) kullanılır?",
      "options": [
        {
          "text": "A) 'r'",
          "isCorrect": false
        },
        {
          "text": "B) 'w'",
          "isCorrect": false
        },
        {
          "text": "C) 'a'",
          "isCorrect": true
        },
        {
          "text": "D) 'x'",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: C. 'a' (Append / Ekleme) kipi, dosya varsa mevcut içeriği korur ve imleci dosyanın sonuna koyarak yeni kayıtları ekler."
    },
    "summary": {
      "keyPoints": [
        "Dosyalar sayesinde verilerimiz program kapansa da korunur.",
        "`with open` bloğu dosya sızıntılarını ve bozulmaları önler.",
        "Gelecek hafta JSON veri formatı ve Hata Yönetimi (`try-except`) göreceğiz."
      ],
      "nextWeek": "Yapılandırılmış Veri (JSON), Web API'leri ve Hata Yakalama (try - except)",
      "homework": "Bir rehber uygulaması yazıp girilen isim ve telefon numaralarını `rehber.csv` dosyasına kaydediniz."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(56, 189, 248, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"30\" y=\"40\" width=\"160\" height=\"220\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <text x=\"110\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\">veri.json Dosyası</text>\n          <text x=\"45\" y=\"95\" font-size=\"10\" font-family=\"monospace\" fill=\"#cbd5e1\">{</text>\n          <text x=\"55\" y=\"115\" font-size=\"10\" font-family=\"monospace\" fill=\"#fbbf24\">  \"cihaz\": \"ESP32\",</text>\n          <text x=\"55\" y=\"135\" font-size=\"10\" font-family=\"monospace\" fill=\"#fbbf24\">  \"sicaklik\": 24.5,</text>\n          <text x=\"55\" y=\"155\" font-size=\"10\" font-family=\"monospace\" fill=\"#fbbf24\">  \"nem\": 60,</text>\n          <text x=\"55\" y=\"175\" font-size=\"10\" font-family=\"monospace\" fill=\"#34d399\">  \"role_aktif\": true</text>\n          <text x=\"45\" y=\"195\" font-size=\"10\" font-family=\"monospace\" fill=\"#cbd5e1\">}</text>\n          \n          <g transform=\"translate(230, 80)\">\n            <rect width=\"150\" height=\"60\" rx=\"8\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"2\"/>\n            <text x=\"75\" y=\"28\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#34d399\">json.load(f)</text>\n            <text x=\"75\" y=\"48\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Dosyadan -&gt; Python Dict</text>\n          </g>\n          <g transform=\"translate(230, 160)\">\n            <rect width=\"150\" height=\"60\" rx=\"8\" fill=\"#162038\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n            <text x=\"75\" y=\"28\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">json.dump(d, f)</text>\n            <text x=\"75\" y=\"48\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Python Dict -&gt; Dosyaya</text>\n          </g>\n          \n          <line x1=\"190\" y1=\"110\" x2=\"230\" y2=\"110\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          <line x1=\"190\" y1=\"190\" x2=\"230\" y2=\"190\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n        </svg>"
  },
  {
    "week": 8,
    "date": "02 - 08 Kasım",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP) & Dosyalar",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "JSON Veri Formatı & Hata Yakalama",
    "subtitle": "Modern İnternetin Ortak Dili: JSON Serileştirme (dump/load), İstisna Yönetimi (try - except - finally) ve Dayanıklı Sistemler",
    "outcomeCode": "BB.10.1.8",
    "targetSkill": "Veri Değişimi & Dayanıklı (Fault-Tolerant) Kodlama",
    "curiosityQuestion": "Bir Python sunucusu ile bir Android telefon veya web tarayıcı aralarındaki verileri birbirlerine nasıl sorunsuz iletir?",
    "roadmap": [
      {
        "title": "JSON (JavaScript Object Notation)",
        "desc": "İnternet dünyasının evrensel veri paketleme standardı."
      },
      {
        "title": "json Modülü (dumps, loads, dump, load)",
        "desc": "Python sözlüklerini JSON metnine ve dosyalara dönüştürme."
      },
      {
        "title": "Hata (Exception) Türleri",
        "desc": "ZeroDivisionError, ValueError, FileNotFoundError, KeyError."
      },
      {
        "title": "try - except - else - finally Blokları",
        "desc": "Çökmeyen, hataları zarifçe yakalayıp kullanıcıyı bilgilendiren kodlar."
      }
    ],
    "section1": {
      "title": "JSON Formatı ve İstisna Hiyerarşisi",
      "subtitle": "Hem insan hem makine tarafından kolay okunan veri yapısı",
      "cards": [
        {
          "title": "JSON ve Python Veri Eşleşmesi",
          "icon": "📦",
          "desc": "Platformlar arası köprü.",
          "items": [
            {
              "bold": "Python Dict <-> JSON Object",
              "text": "Python anahtar-değer sözlükleri doğrudan JSON objesi `{}` olur."
            },
            {
              "bold": "Python List <-> JSON Array",
              "text": "Python listeleri JSON dizisi `[]` olarak aktarılır."
            },
            {
              "bold": "json.dump(veri, dosya)",
              "text": "Veriyi doğrudan bir dosyaya yazar."
            },
            {
              "bold": "json.load(dosya)",
              "text": "Dosyayı okuyup Python sözlüğüne dönüştürür."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Ayarlar Dosyası ve Güvenli Hata Yakalama",
      "subtitle": "Çökmeye karşı korumalı JSON yapılandırma sistemi",
      "codeSnippet": "import json\n\nayarlar = {\n    \"kullanici\": \"vahitkeskin\",\n    \"tema\": \"koyu\",\n    \"otomatik_kayit\": True,\n    \"cozunurluk\": [1920, 1080]\n}\n\n# 1. JSON Dosyasına Yazma\nwith open(\"config.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(ayarlar, f, indent=4, ensure_ascii=False)\n\n# 2. Hata Korumalı Okuma (try - except)\ntry:\n    with open(\"config.json\", \"r\", encoding=\"utf-8\") as f:\n        gelen_veri = json.load(f)\n        print(\"Kullanıcı Teması:\", gelen_veri[\"tema\"])\nexcept FileNotFoundError:\n    print(\"Hata: config.json dosyası bulunamadı, varsayılan ayarlar yükleniyor!\")\nexcept json.JSONDecodeError:\n    print(\"Hata: JSON dosyası bozulmuş!\")\nfinally:\n    print(\"Ayarlar kontrolü tamamlandı.\")",
      "codeTitle": "json_try_except.py",
      "codeLang": "Python",
      "cards": [
        {
          "badge": "Dayanıklılık",
          "title": "finally Bloğu",
          "desc": "Hata çıksa da çıkmasa da daima en son çalışan bloktur; kaynakları temizlemek için kullanılır.",
          "items": [
            {
              "bold": "ensure_ascii=False",
              "text": "JSON içine Türkçe karakterleri Unicode koduna dönüştürmeden doğrudan yazmayı sağlar."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Görev Yöneticisi (Todo App)",
      "subtitle": "Kullanıcının görevlerini `gorevler.json` dosyasında saklayan ve hataları yöneten konsol uygulaması",
      "steps": [
        {
          "title": "1. Dosya Kontrolü",
          "desc": "`try-except FileNotFoundError` ile dosya yoksa boş liste oluşturan mekanizma kurun."
        },
        {
          "title": "2. Görev Ekle",
          "desc": "Kullanıcıdan başlık ve aciliyet alıp listeye sözlük olarak ekleyin."
        },
        {
          "title": "3. JSON'a Kaydet",
          "desc": "`json.dump(gorevler, f, indent=2)` ile dosyayı güncelleyin."
        },
        {
          "title": "4. Sayı Girişi Koru",
          "desc": "Görev silerken girilen sıra numarasını `ValueError` ve `IndexError` kontrolüyle koruyun."
        }
      ],
      "criteria": [
        "`json.dump` ve `json.load` fonksiyonlarını doğru kullanabilme",
        "En az iki farklı spesifik istisna türünü (`FileNotFoundError`, `ValueError`) yakalayabilme",
        "`ensure_ascii=False` ile Türkçe karakter desteğini sağlama"
      ]
    },
    "tips": {
      "safetyTitle": "Hata Yönetiminde Altın Kurallar",
      "safetyRules": [
        {
          "bold": "Asla Boş 'except:' Yazmayın",
          "text": "Sadece `except:` yazıp geçmek programın neden çöktüğünü gizler; daima spesifik hata adını belirtin."
        },
        {
          "bold": "Kullanıcıya Dostça Mesaj Verin",
          "text": "Kırmızı korkutucu traceback yerine 'Lütfen geçerli bir sayı giriniz' gibi nazik yönergeler sunun."
        },
        {
          "bold": "JSON Dosyalarını Elle Düzenlerken Dikkat",
          "text": "En son elemanın sonuna virgül koymak JSON standardında hatadır."
        }
      ],
      "myths": [
        {
          "wrong": "Hata yakalama (try-except) programı yavaşlatır.",
          "correct": "Modern dillerde try bloğunun performans etkisi ihmal edilebilir düzeydedir; çökmeden çalışan bir sistem her şeyden değerlidir."
        },
        {
          "wrong": "JSON sadece web için uygundur.",
          "correct": "Mobil oyun kayıtlarından yapay zekâ model yapılandırmalarına kadar her yerde JSON kullanılır."
        }
      ]
    },
    "quiz": {
      "question": "Python'da çalışma anında meydana gelebilecek olası hataları yakalamak ve programın beklenmedik şekilde çökmesini engellemek için hangi blok yapısı kullanılır?",
      "options": [
        {
          "text": "A) if - elif - else",
          "isCorrect": false
        },
        {
          "text": "B) try - except - finally",
          "isCorrect": true
        },
        {
          "text": "C) while - break",
          "isCorrect": false
        },
        {
          "text": "D) def - return",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `try` bloğu riskli kodları çalıştırır, hata oluşursa `except` bloğu devreye girer, `finally` ise temizlik kodlarını yürütür."
    },
    "summary": {
      "keyPoints": [
        "JSON modern yazılım dünyasının veri aktarım standardıdır.",
        "`try-except` sistemlerin kesintisiz ve dayanıklı çalışmasını sağlar.",
        "Gelecek hafta 2. Üniteye geçiyor ve Donanım Dünyasına: Arduino & ESP32'ye adım atıyoruz!"
      ],
      "nextWeek": "2. Ünite Başlıyor: Robotik Kodlama, Arduino & ESP32 Mimarisi ve Pin Yapısı",
      "homework": "Kişisel film listenizi (film adı, yıl, puan) JSON formatında bir dosyaya kaydedip okuyan bir Python betiği yazınız."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(56, 189, 248, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"30\" y=\"40\" width=\"160\" height=\"220\" rx=\"8\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n          <text x=\"110\" y=\"65\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\">veri.json Dosyası</text>\n          <text x=\"45\" y=\"95\" font-size=\"10\" font-family=\"monospace\" fill=\"#cbd5e1\">{</text>\n          <text x=\"55\" y=\"115\" font-size=\"10\" font-family=\"monospace\" fill=\"#fbbf24\">  \"cihaz\": \"ESP32\",</text>\n          <text x=\"55\" y=\"135\" font-size=\"10\" font-family=\"monospace\" fill=\"#fbbf24\">  \"sicaklik\": 24.5,</text>\n          <text x=\"55\" y=\"155\" font-size=\"10\" font-family=\"monospace\" fill=\"#fbbf24\">  \"nem\": 60,</text>\n          <text x=\"55\" y=\"175\" font-size=\"10\" font-family=\"monospace\" fill=\"#34d399\">  \"role_aktif\": true</text>\n          <text x=\"45\" y=\"195\" font-size=\"10\" font-family=\"monospace\" fill=\"#cbd5e1\">}</text>\n          \n          <g transform=\"translate(230, 80)\">\n            <rect width=\"150\" height=\"60\" rx=\"8\" fill=\"#162038\" stroke=\"#10b981\" stroke-width=\"2\"/>\n            <text x=\"75\" y=\"28\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#34d399\">json.load(f)</text>\n            <text x=\"75\" y=\"48\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Dosyadan -&gt; Python Dict</text>\n          </g>\n          <g transform=\"translate(230, 160)\">\n            <rect width=\"150\" height=\"60\" rx=\"8\" fill=\"#162038\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n            <text x=\"75\" y=\"28\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"bold\" fill=\"#fbbf24\">json.dump(d, f)</text>\n            <text x=\"75\" y=\"48\" text-anchor=\"middle\" font-size=\"9\" fill=\"#94a3b8\">Python Dict -&gt; Dosyaya</text>\n          </g>\n          \n          <line x1=\"190\" y1=\"110\" x2=\"230\" y2=\"110\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n          <line x1=\"190\" y1=\"190\" x2=\"230\" y2=\"190\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n        </svg>"
  },
  {
    "week": 9,
    "date": "09 - 15 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Robotik Kodlama & Gömülü Sistemler (Donanım/IoT)",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Mikrodenetleyiciler & Donanıma Giriş",
    "subtitle": "Yazılımın Fiziksel Dünyayla Buluşması: Arduino UNO, ESP32 Mimarisi, Giriş/Çıkış (GPIO) Pinleri ve IDE Kurulumu",
    "outcomeCode": "BB.10.2.1",
    "targetSkill": "Gömülü Sistem Mimarisi & Donanım Tanıma",
    "curiosityQuestion": "Yazdığımız kodlar ekrandaki piksellerden çıkıp etrafımızdaki lambaları, kapıları ve motorları gerçek hayatta nasıl kontrol edebilir?",
    "roadmap": [
      {
        "title": "Mikroişlemci vs Mikrodenetleyici",
        "desc": "Bilgisayar CPU'su (işlem gücü) ile tek yongada bilgisayar (SoC / MCU) farkı."
      },
      {
        "title": "Arduino UNO Donanım Mimarisi",
        "desc": "ATmega328P çipi, USB arabirimi, voltaj regülatörü ve kristal osilatör."
      },
      {
        "title": "ESP32 Devrimi (IoT Canavarı)",
        "desc": "Çift çekirdek, dahili Wi-Fi ve Bluetooth yetenekleriyle modern akıllı cihazlar."
      },
      {
        "title": "GPIO (General Purpose Input/Output)",
        "desc": "Dijital ve Analog pinlerin çalışma felsefesi."
      }
    ],
    "section1": {
      "title": "Gömülü Sistem Mimarisi ve Pin Dağılımı",
      "subtitle": "Fiziksel dünyaya açılan elektronik kapılar",
      "cards": [
        {
          "title": "Arduino UNO Pin Haritası",
          "icon": "⚡",
          "desc": "Bir bakışta Arduino anatomisi.",
          "items": [
            {
              "bold": "Dijital Pinler (0 - 13)",
              "text": "Sadece 0V (LOW) veya 5V (HIGH) durumlarını anlar ve üretir."
            },
            {
              "bold": "PWM Pinleri (~3, 5, 6, 9, 10, 11)",
              "text": "Hız ve parlaklık gibi ara kademeleri simüle eden özel dijital pinler."
            },
            {
              "bold": "Analog Giriş Pinleri (A0 - A5)",
              "text": "0V ile 5V arasındaki voltajı 0 - 1023 arasında sayısal değere çevirir (ADC)."
            },
            {
              "bold": "Güç Pinleri",
              "text": "5V, 3.3V, GND (Toprak) ve VIN (Harici Giriş) pinleri."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "C/C++ Arduino Kod İskeleti",
      "subtitle": "setup() ve loop() fonksiyonlarının çalışma mantığı",
      "codeSnippet": "// Arduino C/C++ Temel Yaşam Döngüsü\nvoid setup() {\n  // 1. Kurulum: Kart açıldığında SADECE BİR KEZ çalışır\n  pinMode(13, OUTPUT);      // 13 numaralı pini ÇIKIŞ yaptık\n  Serial.begin(9600);       // Seri haberleşmeyi başlattık\n  Serial.println(\"Sistem Hazır!\");\n}\n\nvoid loop() {\n  // 2. Sonsuz Döngü: Kart elektrik aldığı sürece sürekli tekrarlar\n  digitalWrite(13, HIGH);   // LED'e 5V ver (Yak)\n  delay(1000);              // 1000 milisaniye (1 saniye) bekle\n  digitalWrite(13, LOW);    // LED'e 0V ver (Söndür)\n  delay(1000);              // 1 saniye bekle\n}",
      "codeTitle": "blink_led.ino",
      "codeLang": "C++",
      "cards": [
        {
          "badge": "İki Faz",
          "title": "setup() vs loop()",
          "desc": "`setup()` hazırlıkları yapar (pin giriş mi çıkış mı), `loop()` ise cihazın ana görevini sonsuz bir döngüde icra eder.",
          "items": [
            {
              "bold": "Gömülü Mantık",
              "text": "Gömülü cihazlarda işletim sistemi yoktur; yazdığınız kod doğrudan donanımda çalışır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Arduino IDE Kurulumu ve Dahili LED Yakma",
      "subtitle": "Arduino'yu bilgisayara bağlayıp Pin 13 üzerindeki dahili (Built-in) LED'i flaşör yapma",
      "steps": [
        {
          "title": "1. IDE ve Port Seçimi",
          "desc": "Arduino IDE'yi açıp `Araçlar > Kart > Arduino Uno` ve doğru `Port`u seçin."
        },
        {
          "title": "2. Blink Kodunu Yükle",
          "desc": "`Dosya > Örnekler > 01.Basics > Blink` örneğini açın."
        },
        {
          "title": "3. Karta Yükle",
          "desc": "Sağ ok (Yükle) butonuna basın; TX/RX ışıklarının yanıp söndüğünü gözlemleyin."
        },
        {
          "title": "4. Gecikmeyi Değiştir",
          "desc": "`delay(200)` yaparak flaşör hızını 5 katına çıkarın."
        }
      ],
      "criteria": [
        "Doğru kart modelini ve COM/USB portunu seçebilme",
        "`setup()` ve `loop()` fonksiyonlarının görev ayrımını açıklama",
        "`pinMode()` ve `digitalWrite()` komutlarının mantığını kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Donanım Güvenliği ve Kart Sağlığı",
      "safetyRules": [
        {
          "bold": "Kısa Devreye Dikkat Edin",
          "text": "5V ile GND pinlerini asla doğrudan birbirine bağlamayın; kartın regülatörü yanabilir!"
        },
        {
          "bold": "Kartı Metal Yüzeylere Koymayın",
          "text": "Çalışırken kartın altındaki lehim bacaklarının metal masaya temas etmesi kısa devreye yol açar."
        },
        {
          "bold": "Devre Kurarken Elektriği Kesin",
          "text": "Breadboard üzerine kablo takıp çıkarırken USB kablosunu bilgisayardan çekin."
        }
      ],
      "myths": [
        {
          "wrong": "Arduino kodlamak için çok ileri düzey C bilmek gerekir.",
          "correct": "Arduino sadeleştirilmiş C++ dili kullanır ve fonksiyonları Python kadar kolay ve anlaşılırdır."
        },
        {
          "wrong": "Arduino ile yapay zekâ veya internet projeleri yapılamaz.",
          "correct": "ESP32 gibi Wi-Fi kartlarıyla bulut bağlantılı IoT ve hafif makine öğrenmesi modelleri çalıştırılabilir."
        }
      ]
    },
    "quiz": {
      "question": "Arduino programlarında kart ilk açıldığında veya yeniden başlatıldığında sadece bir defa çalışan ve pin yapılandırmalarının yapıldığı özel fonksiyon hangisidir?",
      "options": [
        {
          "text": "A) void main()",
          "isCorrect": false
        },
        {
          "text": "B) void setup()",
          "isCorrect": true
        },
        {
          "text": "C) void loop()",
          "isCorrect": false
        },
        {
          "text": "D) void init()",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. `setup()` fonksiyonu kart enerjilendiğinde tek bir kez çalışarak pinlerin giriş/çıkış modlarını ve iletişim hızını ayarlar."
    },
    "summary": {
      "keyPoints": [
        "Mikrodenetleyiciler fiziksel dünyayı akıllandıran beyinlerdir.",
        "Arduino ve ESP32 modern prototiplemenin dünya standartlarıdır.",
        "Gelecek hafta Breadboard, Direnç, Ohm Kanunu ve harici LED devreleri kuracağız."
      ],
      "nextWeek": "Temel Elektronik: Breadboard Kullanımı, Dirençler, Ohm Kanunu & Harici LED Devresi",
      "homework": "Arduino IDE'yi bilgisayarınıza kurup bir Arduino simülatörü (Tinkercad Circuits) hesabı açınız."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(0, 240, 255, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"30\" y=\"40\" width=\"170\" height=\"220\" rx=\"8\" fill=\"#00878F\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"70\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">ARDUINO UNO</text>\n          <rect x=\"45\" y=\"90\" width=\"40\" height=\"30\" rx=\"3\" fill=\"#333333\"/>\n          <text x=\"65\" y=\"110\" text-anchor=\"middle\" font-size=\"8\" fill=\"#cccccc\">USB</text>\n          <rect x=\"110\" y=\"120\" width=\"70\" height=\"90\" rx=\"4\" fill=\"#1e293b\" stroke=\"#ffffff\" stroke-width=\"1\"/>\n          <text x=\"145\" y=\"165\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#00f0ff\">ATmega328P</text>\n          \n          <circle cx=\"185\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/>\n          <text x=\"175\" y=\"58\" text-anchor=\"end\" font-size=\"8\" fill=\"#ffffff\">D13</text>\n          <circle cx=\"185\" cy=\"70\" r=\"4\" fill=\"#ffffff\"/>\n          <text x=\"175\" y=\"73\" text-anchor=\"end\" font-size=\"8\" fill=\"#ffffff\">GND</text>\n          \n          <rect x=\"240\" y=\"40\" width=\"150\" height=\"220\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n          <text x=\"315\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">Breadboard</text>\n          \n          <circle cx=\"315\" cy=\"110\" r=\"14\" fill=\"#ef4444\" stroke=\"#b91c1c\" stroke-width=\"2\"/>\n          <text x=\"315\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\">LED</text>\n          \n          <rect x=\"300\" y=\"150\" width=\"30\" height=\"12\" rx=\"3\" fill=\"#d97706\"/>\n          <text x=\"315\" y=\"175\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#0f172a\">220 Ω</text>\n          \n          <path d=\"M 185 55 Q 220 55 315 96\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n          <path d=\"M 315 124 L 315 150\" stroke=\"#000000\" stroke-width=\"2\"/>\n          <path d=\"M 315 162 L 315 210\" stroke=\"#000000\" stroke-width=\"2\"/>\n          <path d=\"M 315 210 Q 220 210 185 70\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        </svg>"
  },
  {
    "week": 10,
    "date": "16 - 22 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Robotik Kodlama & Gömülü Sistemler (Donanım/IoT)",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Temel Elektronik & Breadboard Devreleri",
    "subtitle": "Akım, Voltaj, Direnç: Ohm Kanunu (V = I * R), Breadboard İç Mimarisi, LED Anatomisi ve Seri Direnç Hesabı",
    "outcomeCode": "BB.10.2.2",
    "targetSkill": "Devre Analizi & Breadboard Üzerinde Prototipleme",
    "curiosityQuestion": "Bir LED'i 5V güç kaynağına araya direnç koymadan doğrudan bağlarsak neden 'çıt' diye bir ses çıkarıp dumanla yanar?",
    "roadmap": [
      {
        "title": "Elektriğin Temel Büyüklükleri",
        "desc": "Voltaj (Gerilim - V), Akım (Şiddet - I) ve Direnç (Zorluk - R)."
      },
      {
        "title": "Ohm Kanunu (V = I * R)",
        "desc": "Devrenin kalbi: Voltaj arttıkça akım artar, direnç arttıkça akım düşer."
      },
      {
        "title": "Breadboard (Devre Tahtası) Mimarisi",
        "desc": "Lehimsiz prototipleme: Yatay güç hatları ve dikey veri hatları."
      },
      {
        "title": "LED (Işık Yayan Diyot) Anatomisi",
        "desc": "Anot (+ uzun bacak) ve Katot (- kısa bacak) yönlülük kuralı."
      }
    ],
    "section1": {
      "title": "Ohm Kanunu ve LED Direnç Hesabı",
      "subtitle": "Elektronik elemanları yakmadan koruma bilimi",
      "cards": [
        {
          "title": "Ohm Kanunu Üçgeni",
          "icon": "📐",
          "desc": "Elektronik mühendisliğinin temel formülü.",
          "items": [
            {
              "bold": "Formül: V = I * R",
              "text": "Gerilim (Volt) = Akım (Amper) x Direnç (Ohm)."
            },
            {
              "bold": "LED Çalışma Şartı",
              "text": "Kırmızı LED yaklaşık 2V gerilim ve 20mA (0.02A) akımla güvenle ışık verir."
            },
            {
              "bold": "Direnç Seçimi Hesabı",
              "text": "(5V Kaynak - 2V LED) / 0.02A = 150 Ω. Güvenlik için 220 Ω veya 330 Ω kullanılır."
            },
            {
              "bold": "Ters Bağlantı Durumu",
              "text": "LED bir diyottur; ters takılırsa yanmaz ama akım da geçirmez."
            }
          ]
        }
      ]
    },
    "section2": {
      "title": "Breadboard Üzerinde Harici LED Devresi",
      "subtitle": "Pin 9 üzerinden harici LED yakıp söndürme",
      "codeSnippet": "// Harici Kırmızı LED Kontrolü\nconst int LED_PIN = 9;  // LED'in bağlı olduğu pin\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);  // Pin 9'u çıkış yap\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH); // 5V gönder -> LED Yansın\n  delay(500);                  // Yarım saniye bekle\n  digitalWrite(LED_PIN, LOW);  // 0V gönder -> LED Sönsün\n  delay(500);                  // Yarım saniye bekle\n}",
      "codeTitle": "harici_led.ino",
      "codeLang": "C++",
      "cards": [
        {
          "badge": "Bağlantı Şeması",
          "title": "Adım Adım Devre",
          "desc": "Arduino Pin 9 -> 220 Ω Direnç -> LED Anot (+) -> LED Katot (-) -> Arduino GND.",
          "items": [
            {
              "bold": "Breadboard Bağlantısı",
              "text": "Dikey delikler (1-30) kendi aralarında 5'erli iletkendir; orta yarık iki tarafı ayırır."
            }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Trafik Işıkları Simülasyonu Devresi",
      "subtitle": "Kırmızı, Sarı ve Yeşil LED'lerle gerçekçi bir trafik ışığı döngüsü inşa etme",
      "steps": [
        {
          "title": "1. 3 LED ve 3 Direnç Yerleştir",
          "desc": "Breadboard üzerine Kırmızı (Pin 8), Sarı (Pin 9), Yeşil (Pin 10) dizin."
        },
        {
          "title": "2. Ortak GND (Toprak) Çekin",
          "desc": "Tüm LED'lerin katot (-) bacaklarını breadboard'un mavi eksi hattına bağlayıp Arduino GND'ye verin."
        },
        {
          "title": "3. Trafik Algoritmasını Yaz",
          "desc": "Kırmızı 4 sn yansın -> Kırmızı+Sarı 1 sn yansın -> Yeşil 4 sn yansın -> Sarı 1 sn yansın."
        },
        {
          "title": "4. Test ve İnce Ayar",
          "desc": "Süreleri gerçek kavşak kurallarına göre kalibre edin."
        }
      ],
      "criteria": [
        "Direnç renk kodlarını veya değerini (220 Ω) doğru tespit etme",
        "Breadboard'un iç iletkenlik hatlarını doğru kullanarak devre kurabilme",
        "Trafik ışığı zamanlama algoritmasını C++ ile eksiksiz kodlama"
      ]
    },
    "tips": {
      "safetyTitle": "Elektronik Devre Pratikleri",
      "safetyRules": [
        {
          "bold": "Direnci Asla Atlamayın",
          "text": "5V hatta bağlanan hiçbir LED'i dirençsiz bırakmayın; direnç akım sınırlayıcı hayat sigortasıdır."
        },
        {
          "bold": "LED Bacak Boylarına Dikkat Edin",
          "text": "Uzun bacak Anot (+), kısa bacak Katot (-) dur; kestiyseniz LED'in içindeki küçük plaka Anot'tur."
        },
        {
          "bold": "Renk Kodları",
          "text": "220 Ω direnç: Kırmızı - Kırmızı - Kahverengi - Altın renk şeritlerine sahiptir."
        }
      ],
      "myths": [
        {
          "wrong": "Direncin LED'den önce mi sonra mı takıldığı sonucu değiştirir.",
          "correct": "Direnç seridir; LED'in ister anaduna ister katotuna takılsın devredeki akımı eşit derecede sınırlar."
        },
        {
          "wrong": "Dirençlerin artı ve eksi kutbu vardır.",
          "correct": "Dirençler kutupsuzdur; devreye hangi yönde takılırsa takılsın aynı direnci gösterir."
        }
      ]
    },
    "quiz": {
      "question": "Ohm Kanunu'na (V = I * R) göre 5 Volt gerilimle çalışan bir devrede akımı 0.02 Amper (20 mA) ile sınırlamak için bağlanması gereken ideal direnç değeri kaç Ohm'dur?",
      "options": [
        {
          "text": "A) 100 Ω",
          "isCorrect": false
        },
        {
          "text": "B) 250 Ω (veya pratik standart 220 Ω)",
          "isCorrect": true
        },
        {
          "text": "C) 1000 Ω",
          "isCorrect": false
        },
        {
          "text": "D) 10 Ω",
          "isCorrect": false
        }
      ],
      "explanation": "Doğru Cevap: B. R = V / I formülünden R = 5V / 0.02A = 250 Ω çıkar. Piyasada en yakın standart değer 220 Ω veya 330 Ω olarak güvenle kullanılır."
    },
    "summary": {
      "keyPoints": [
        "Ohm Kanunu elektrik ve elektronik mühendisliğinin temel taşıdır.",
        "Dirençler LED gibi hassas yarı iletkenleri aşırı akımdan korur.",
        "Gelecek hafta Butonlar ile Dijital Giriş okuma ve Pull-down dirençlerini göreceğiz."
      ],
      "nextWeek": "Dijital Giriş Elemanları: Buton ile LED Kontrolü ve Pull-up / Pull-down Direnç Mantığı",
      "homework": "Tinkercad Circuits üzerinde 3 LED'li trafik lambası devresini simüle ediniz."
    },
    "roadmapSvg": "<svg viewBox=\"0 0 420 300\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect width=\"420\" height=\"300\" rx=\"14\" fill=\"#0c1322\" stroke=\"rgba(0, 240, 255, 0.3)\" stroke-width=\"2\"/>\n          <rect x=\"30\" y=\"40\" width=\"170\" height=\"220\" rx=\"8\" fill=\"#00878F\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n          <text x=\"115\" y=\"70\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#ffffff\">ARDUINO UNO</text>\n          <rect x=\"45\" y=\"90\" width=\"40\" height=\"30\" rx=\"3\" fill=\"#333333\"/>\n          <text x=\"65\" y=\"110\" text-anchor=\"middle\" font-size=\"8\" fill=\"#cccccc\">USB</text>\n          <rect x=\"110\" y=\"120\" width=\"70\" height=\"90\" rx=\"4\" fill=\"#1e293b\" stroke=\"#ffffff\" stroke-width=\"1\"/>\n          <text x=\"145\" y=\"165\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#00f0ff\">ATmega328P</text>\n          \n          <circle cx=\"185\" cy=\"55\" r=\"4\" fill=\"#fbbf24\"/>\n          <text x=\"175\" y=\"58\" text-anchor=\"end\" font-size=\"8\" fill=\"#ffffff\">D13</text>\n          <circle cx=\"185\" cy=\"70\" r=\"4\" fill=\"#ffffff\"/>\n          <text x=\"175\" y=\"73\" text-anchor=\"end\" font-size=\"8\" fill=\"#ffffff\">GND</text>\n          \n          <rect x=\"240\" y=\"40\" width=\"150\" height=\"220\" rx=\"6\" fill=\"#f8fafc\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n          <text x=\"315\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#0f172a\">Breadboard</text>\n          \n          <circle cx=\"315\" cy=\"110\" r=\"14\" fill=\"#ef4444\" stroke=\"#b91c1c\" stroke-width=\"2\"/>\n          <text x=\"315\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#ffffff\">LED</text>\n          \n          <rect x=\"300\" y=\"150\" width=\"30\" height=\"12\" rx=\"3\" fill=\"#d97706\"/>\n          <text x=\"315\" y=\"175\" text-anchor=\"middle\" font-size=\"9\" font-weight=\"bold\" fill=\"#0f172a\">220 Ω</text>\n          \n          <path d=\"M 185 55 Q 220 55 315 96\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\"/>\n          <path d=\"M 315 124 L 315 150\" stroke=\"#000000\" stroke-width=\"2\"/>\n          <path d=\"M 315 162 L 315 210\" stroke=\"#000000\" stroke-width=\"2\"/>\n          <path d=\"M 315 210 Q 220 210 185 70\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/>\n        </svg>"
  }
];
