#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curriculum Data for 10. Sınıf Bilgisayar Bilimi (Kur 2) - 1. Dönem (Hafta 1 - 19)
MEB 2026-2027 Maarif Modeli
Öğretmen: Vahit Keskin
"""

def get_svg_for_week_10(week, title):
    if week in [1, 2, 3, 4, 5, 6]: # OOP & UML Sınıf Diyagramı
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2"/>
          <!-- Üst Sınıf (Superclass) -->
          <rect x="130" y="25" width="160" height="100" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <rect x="130" y="25" width="160" height="28" rx="6" fill="#f59e0b"/>
          <text x="210" y="44" text-anchor="middle" font-size="12" font-weight="bold" fill="#0c1322">&lt;&lt;Class&gt;&gt; Robot</text>
          <text x="140" y="70" font-size="10" font-family="monospace" fill="#ffffff">- ad: str</text>
          <text x="140" y="85" font-size="10" font-family="monospace" fill="#ffffff">- batarya: int</text>
          <line x1="130" y1="92" x2="290" y2="92" stroke="#475569"/>
          <text x="140" y="108" font-size="10" font-family="monospace" fill="#38bdf8">+ hareket_et()</text>
          <text x="140" y="120" font-size="10" font-family="monospace" fill="#38bdf8">+ sarj_durumu()</text>
          
          <!-- Kalıtım Oku -->
          <line x1="210" y1="125" x2="210" y2="165" stroke="#f59e0b" stroke-width="2"/>
          <polygon points="210,125 204,140 216,140" fill="#f59e0b"/>
          
          <!-- Alt Sınıflar (Subclasses) -->
          <g transform="translate(40, 165)">
            <rect width="150" height="95" rx="6" fill="#162038" stroke="#10b981" stroke-width="1.5"/>
            <rect width="150" height="25" rx="6" fill="#10b981"/>
            <text x="75" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#070b14">UcanRobot (Drone)</text>
            <text x="10" y="45" font-size="9" font-family="monospace" fill="#ffffff">- irtifa: float</text>
            <line x1="0" y1="52" x2="150" y2="52" stroke="#475569"/>
            <text x="10" y="68" font-size="9" font-family="monospace" fill="#34d399">+ havalan()</text>
            <text x="10" y="82" font-size="9" font-family="monospace" fill="#34d399">+ inis_yap()</text>
          </g>
          
          <g transform="translate(230, 165)">
            <rect width="150" height="95" rx="6" fill="#162038" stroke="#00f0ff" stroke-width="1.5"/>
            <rect width="150" height="25" rx="6" fill="#00f0ff"/>
            <text x="75" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#070b14">TekerlekliRobot</text>
            <text x="10" y="45" font-size="9" font-family="monospace" fill="#ffffff">- tekerlek_sayisi: int</text>
            <line x1="0" y1="52" x2="150" y2="52" stroke="#475569"/>
            <text x="10" y="68" font-size="9" font-family="monospace" fill="#38bdf8">+ saga_don()</text>
            <text x="10" y="82" font-size="9" font-family="monospace" fill="#38bdf8">+ fren_yap()</text>
          </g>
          <line x1="115" y1="165" x2="210" y2="150" stroke="#f59e0b" stroke-width="1.5"/>
          <line x1="305" y1="165" x2="210" y2="150" stroke="#f59e0b" stroke-width="1.5"/>
        </svg>'''
    elif week in [7, 8]: # Dosya İşlemleri & JSON
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(56, 189, 248, 0.3)" stroke-width="2"/>
          <rect x="30" y="40" width="160" height="220" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <text x="110" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">veri.json Dosyası</text>
          <text x="45" y="95" font-size="10" font-family="monospace" fill="#cbd5e1">{</text>
          <text x="55" y="115" font-size="10" font-family="monospace" fill="#fbbf24">  "cihaz": "ESP32",</text>
          <text x="55" y="135" font-size="10" font-family="monospace" fill="#fbbf24">  "sicaklik": 24.5,</text>
          <text x="55" y="155" font-size="10" font-family="monospace" fill="#fbbf24">  "nem": 60,</text>
          <text x="55" y="175" font-size="10" font-family="monospace" fill="#34d399">  "role_aktif": true</text>
          <text x="45" y="195" font-size="10" font-family="monospace" fill="#cbd5e1">}</text>
          
          <g transform="translate(230, 80)">
            <rect width="150" height="60" rx="8" fill="#162038" stroke="#10b981" stroke-width="2"/>
            <text x="75" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#34d399">json.load(f)</text>
            <text x="75" y="48" text-anchor="middle" font-size="9" fill="#94a3b8">Dosyadan -> Python Dict</text>
          </g>
          <g transform="translate(230, 160)">
            <rect width="150" height="60" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="2"/>
            <text x="75" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">json.dump(d, f)</text>
            <text x="75" y="48" text-anchor="middle" font-size="9" fill="#94a3b8">Python Dict -> Dosyaya</text>
          </g>
          
          <line x1="190" y1="110" x2="230" y2="110" stroke="#10b981" stroke-width="2" stroke-dasharray="3"/>
          <line x1="190" y1="190" x2="230" y2="190" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3"/>
        </svg>'''
    elif week in [9, 10, 11, 12]: # Arduino, Elektronik & Breadboard
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
          <!-- Arduino Kartı -->
          <rect x="30" y="40" width="170" height="220" rx="8" fill="#00878F" stroke="#ffffff" stroke-width="1.5"/>
          <text x="115" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">ARDUINO UNO</text>
          <rect x="45" y="90" width="40" height="30" rx="3" fill="#333333"/>
          <text x="65" y="110" text-anchor="middle" font-size="8" fill="#cccccc">USB</text>
          <rect x="110" y="120" width="70" height="90" rx="4" fill="#1e293b" stroke="#ffffff" stroke-width="1"/>
          <text x="145" y="165" text-anchor="middle" font-size="9" font-weight="bold" fill="#00f0ff">ATmega328P</text>
          
          <!-- Pinler -->
          <circle cx="185" cy="55" r="4" fill="#fbbf24"/>
          <text x="175" y="58" text-anchor="end" font-size="8" fill="#ffffff">D13</text>
          <circle cx="185" cy="70" r="4" fill="#ffffff"/>
          <text x="175" y="73" text-anchor="end" font-size="8" fill="#ffffff">GND</text>
          
          <!-- Breadboard & LED Devresi -->
          <rect x="240" y="40" width="150" height="220" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
          <text x="315" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">Breadboard</text>
          
          <!-- LED Şematik -->
          <circle cx="315" cy="110" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
          <text x="315" y="114" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">LED</text>
          
          <!-- Direnç -->
          <rect x="300" y="150" width="30" height="12" rx="3" fill="#d97706"/>
          <text x="315" y="175" text-anchor="middle" font-size="9" font-weight="bold" fill="#0f172a">220 Ω</text>
          
          <!-- Bağlantı Kabloları -->
          <path d="M 185 55 Q 220 55 315 96" fill="none" stroke="#ef4444" stroke-width="2"/>
          <path d="M 315 124 L 315 150" stroke="#000000" stroke-width="2"/>
          <path d="M 315 162 L 315 210" stroke="#000000" stroke-width="2"/>
          <path d="M 315 210 Q 220 210 185 70" fill="none" stroke="#3b82f6" stroke-width="2"/>
        </svg>'''
    elif week in [13, 14, 15]: # Sensörler, Ultrasonik & Motorlar
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"/>
          <!-- HC-SR04 Ultrasonik Sensör -->
          <rect x="40" y="50" width="130" height="80" rx="8" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
          <circle cx="75" cy="90" r="22" fill="#94a3b8" stroke="#ffffff" stroke-width="2"/>
          <text x="75" y="93" text-anchor="middle" font-size="8" font-weight="bold" fill="#0f172a">TRIGGER</text>
          <circle cx="135" cy="90" r="22" fill="#94a3b8" stroke="#ffffff" stroke-width="2"/>
          <text x="135" y="93" text-anchor="middle" font-size="8" font-weight="bold" fill="#0f172a">ECHO</text>
          <text x="105" y="68" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">HC-SR04</text>
          
          <!-- Ses Dalgaları -->
          <path d="M 175 80 Q 210 90 240 70" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4"/>
          <path d="M 185 90 Q 220 100 250 80" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4"/>
          
          <!-- Engel Nesnesi -->
          <rect x="280" y="45" width="40" height="90" rx="4" fill="#ef4444" stroke="#ffffff"/>
          <text x="300" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">ENGEL</text>
          
          <!-- Formül Kutusu -->
          <rect x="40" y="160" width="340" height="100" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="210" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">Ses Hızı ve Mesafe Formülü</text>
          <text x="210" y="212" text-anchor="middle" font-size="13" font-family="monospace" fill="#ffffff">Mesafe = (Süre / 2) * 0.0343 cm/µs</text>
          <text x="210" y="235" text-anchor="middle" font-size="10" fill="#cbd5e1">Ses gidip döndüğü için toplam süre 2'ye bölünür.</text>
        </svg>'''
    else: # IoT & Akıllı Sistemler
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(168, 85, 247, 0.3)" stroke-width="2"/>
          <circle cx="210" cy="140" r="45" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
          <text x="210" y="135" text-anchor="middle" font-size="24">☁️</text>
          <text x="210" y="158" text-anchor="middle" font-size="10" font-weight="bold" fill="#c084fc">IoT Bulut (Cloud)</text>
          
          <g transform="translate(50, 50)">
            <rect width="90" height="60" rx="6" fill="#1e293b" stroke="#00f0ff"/>
            <text x="45" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">ESP32 Sera</text>
            <text x="45" y="48" text-anchor="middle" font-size="8" fill="#94a3b8">Nem & Sıcaklık</text>
            <line x1="90" y1="50" x2="165" y2="110" stroke="#00f0ff" stroke-dasharray="3"/>
          </g>
          <g transform="translate(280, 50)">
            <rect width="90" height="60" rx="6" fill="#1e293b" stroke="#10b981"/>
            <text x="45" y="30" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Mobil Telefon</text>
            <text x="45" y="48" text-anchor="middle" font-size="8" fill="#94a3b8">Uzaktan İzleme</text>
            <line x1="0" y1="50" x2="-25" y2="110" stroke="#10b981" stroke-dasharray="3"/>
          </g>
          <g transform="translate(165, 215)">
            <rect width="90" height="55" rx="6" fill="#1e293b" stroke="#f59e0b"/>
            <text x="45" y="28" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Akıllı Röle</text>
            <text x="45" y="44" text-anchor="middle" font-size="8" fill="#fbbf24">Su Pompası Aç</text>
            <line x1="45" y1="0" x2="45" y2="-30" stroke="#f59e0b" stroke-dasharray="3"/>
          </g>
        </svg>'''

WEEKS_GRADE10_TERM1 = [
  # 1. Hafta
  {
    "week": 1,
    "date": "14 - 20 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP)",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Kur 2'ye Giriş & Yazılım Yaşam Döngüsü",
    "subtitle": "Yazılım Mühendisliği Temelleri, SDLC Aşamaları, Çevik (Agile) Metodoloji ve Git Versiyon Kontrolü",
    "outcomeCode": "BB.10.1.1",
    "targetSkill": "Yazılım Yaşam Döngüsü & Sürüm Yönetimi",
    "curiosityQuestion": "Yüzlerce mühendisin çalıştığı bir projede kodlar birbirinin üzerine yazılmadan ve çökmeden nasıl eşzamanlı geliştirilir?",
    "roadmap": [
      { "title": "Bilgisayar Bilimi Kur 2 Vizyonu", "desc": "OOP, Robotik / IoT, Web/Mobil sistemler ve Yapay Zekâ yol haritası." },
      { "title": "Yazılım Yaşam Döngüsü (SDLC)", "desc": "Gereksinim Analizi, Tasarım, Geliştirme, Test, Dağıtım ve Bakım." },
      { "title": "Çevik (Agile / Scrum) Yaklaşım", "desc": "Sprintler, günlük toplantılar ve sürekli teslimat felsefesi." },
      { "title": "Git & GitHub Temelleri", "desc": "`git init`, `add`, `commit`, `push`, `branch` ve ekip çalışması." }
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
            { "bold": "1. Planlama ve Analiz", "text": "Müşterinin veya sistemin neye ihtiyaç duyduğunu teknik şartnameye dökme." },
            { "bold": "2. Mimari Tasarım (Design)", "text": "Veritabanı şemaları, UML diyagramları ve sistem arayüzlerinin çizilmesi." },
            { "bold": "3. Kodlama ve Birim Testleri", "text": "Modüler fonksiyonlar ve nesne yönelimli sınıflarla kod inşa etme." },
            { "bold": "4. Sürekli Entegrasyon (CI/CD)", "text": "Otomatik testlerle kodun her commit'te sağlamlığını doğrulama." }
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
        { "badge": "Git Gücü", "title": "Dallanma (Branching)", "desc": "Her geliştirici ana kodu bozmadan kendi dalında (branch) çalışır; özellik tamamlanınca 'Merge' edilir.", "items": [{ "bold": "Commit Mesajı", "text": "Neyin neden değiştirildiğini anlatan tarihsel hafıza kaydıdır." }] }
      ]
    },
    "workshop": {
      "title": "Terminalde Git Deposu Başlatma ve İlk Commit",
      "subtitle": "Kişisel bir proje klasöründe Git versiyon kontrolü kurup geçmiş sürümleri inceleme",
      "steps": [
        { "title": "1. Depo Aç", "desc": "`git init lise_projem` komutuyla klasörü Git takibine alın." },
        { "title": "2. Dosya Ekle", "desc": "`README.md` dosyası oluşturup proje amacını yazın." },
        { "title": "3. Commit At", "desc": "`git add .` ve `git commit -m \"docs: README eklendi\"` yapın." },
        { "title": "4. Logları İncele", "desc": "`git log --oneline` komutuyla commit hash ve yazar bilgilerini görün." }
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
        { "bold": "Hassas Bilgileri Yüklemeyin", "text": "Parola, API anahtarı veya veritabanı şifrelerini asla GitHub'a push etmeyin; `.gitignore` kullanın." },
        { "bold": "Sık Sık Küçük Commit'ler Atın", "text": "Haftalık tek bir devasa commit yerine, her tamamlanan özellik için küçük commit'ler atın." },
        { "bold": "Çakışmaları (Conflict) Çözün", "text": "İki kişi aynı satırı değiştirirse Git uyarır; ekipçe konuşup doğru satırı seçin." }
      ],
      "myths": [
        { "wrong": "Git ile GitHub tamamen aynı şeydir.", "correct": "Git bilgisayarınızda çalışan yerel versiyon kontrol aracıdır; GitHub ise bu depoları bulutta barındıran platformdur." },
        { "wrong": "Tek başına çalışan bir yazılımcının Git kullanmasına gerek yoktur.", "correct": "Kod bozulduğunda dünkü çalışan sürüme dönebilmek için tek başınıza olsanız bile Git şarttır." }
      ]
    },
    "quiz": {
      "question": "Git versiyon kontrol sisteminde yapılan değişiklikleri kalıcı bir sürüm noktası olarak kaydedip açıklama ekleyen temel komut hangisidir?",
      "options": [
        { "text": "A) git pull", "isCorrect": False },
        { "text": "B) git commit -m \"açıklama\"", "isCorrect": True },
        { "text": "C) git push", "isCorrect": False },
        { "text": "D) git checkout", "isCorrect": False }
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
    }
  },
  # 2. Hafta
  {
    "week": 2,
    "date": "21 - 27 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP)",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "OOP Felsefesi: Sınıf & Nesne",
    "subtitle": "Gerçek Dünyayı Koda Modelleme: Sınıf (Class) Şablonu ve Nesne (Object / Instance) Mimarisi",
    "outcomeCode": "BB.10.1.2",
    "targetSkill": "Nesne Yönelimli Modelleme & Soyutlama",
    "curiosityQuestion": "Bir fabrikada araba üretilirken kullanılan 'mavi plan (blueprint)' ile yollarda gezen gerçek 'arabalar' arasındaki ilişki koddaki sınıf-nesne bağına nasıl benzer?",
    "roadmap": [
      { "title": "Prosedürel vs Nesne Yönelimli", "desc": "Fonksiyonlar yığınından birbiriyle haberleşen akıllı nesneler dünyasına geçiş." },
      { "title": "Sınıf (Class) Nedir?", "desc": "Nesneleri üretmek için kullanılan genel kalıp, fabrika veya taslak." },
      { "title": "Nesne (Object / Instance) Nedir?", "desc": "Sınıf kalıbından bellekte somut olarak türetilen gerçek varlık." },
      { "title": "Öznitelik ve Davranış", "desc": "Durumlar (Öznitelikler / Değişkenler) ve Yetenekler (Metotlar / Fonksiyonlar)." }
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
            { "bold": "Sınıf (Class)", "text": "Soyut tasarımdır. Bellekte yer kaplamaz; kuralları tanımlar (Örn: `Insan` sınıfı)." },
            { "bold": "Nesne (Object / Instance)", "text": "Taslaktan üretilmiş somut örnektir. Bellekte yer tutar (Örn: `ali = Insan()`, `ece = Insan()`)." },
            { "bold": "Öznitelikler (Attributes)", "text": "Nesnenin taşıdığı verilerdir (`renk`, `model`, `hiz`)." },
            { "bold": "Metotlar (Methods)", "text": "Nesnenin yapabildiği eylemlerdir (`hizlan()`, `fren_yap()`)." }
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
        { "badge": "İsimlendirme", "title": "PascalCase Standardı", "desc": "Python'da fonksiyonlar `kucuk_harf` yazılırken, sınıflar kural olarak `BuyukHarf` (PascalCase) ile başlar (`Araba`, `OgrenciTakip`).", "items": [{ "bold": "Yeniden Kullanılabilirlik", "text": "Tek bir sınıftan binlerce farklı nesne türetebilirsiniz." }] }
      ]
    },
    "workshop": {
      "title": "Bilişim Laboratuvarı Cihaz Sınıfı Modelleme",
      "subtitle": "Okul bilgisayarlarını temsil eden bir `Bilgisayar` sınıfı kurup 3 farklı laboratuvar bilgisayarı türetme",
      "steps": [
        { "title": "1. Sınıfı Aç", "desc": "`class Bilgisayar:` bloğunu oluşturun." },
        { "title": "2. Nesneleri Türet", "desc": "`pc1 = Bilgisayar()`, `pc2 = Bilgisayar()` nesnelerini belleğe çıkarın." },
        { "title": "3. Öznitelikler Ata", "desc": "Her nesneye `islemci`, `ram`, `durum` (açık/kapalı) değerleri verin." },
        { "title": "4. Ekrana Durum Bas", "desc": "f-string ile laboratuvar envanter listesini konsola dökün." }
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
        { "bold": "Sınıf İsimlerinde Büyük Harf", "text": "`class ogrenci:` yerine mutlaka `class Ogrenci:` yazın; bu standart kodun okunmasını sağlar." },
        { "bold": "Parantezleri Unutmayın", "text": "Nesne üretirken `a = Araba()` yazmalısınız; `a = Araba` yazarsanız nesne değil sınıfın referansını kopyalarsınız!" },
        { "bold": "Her Nesne Bağımsızdır", "text": "`araba1.renk` değiştiğinde `araba2.renk` bundan asla etkilenmez." }
      ],
      "myths": [
        { "wrong": "Sınıf ile nesne aynı şeydir.", "correct": "Sınıf soyut bir kalıptır (mimari çizim), nesne ise o kalıptan inşa edilen somut binadır." },
        { "wrong": "OOP sadece oyunlarda kullanılır.", "correct": "İşletim sistemlerinden bankacılık uygulamalarına, yapay zekâ kütüphanelerinden web sitelerine kadar tüm modern yazılım OOP'dir." }
      ]
    },
    "quiz": {
      "question": "Nesne Yönelimli Programlamada (OOP) bir nesnenin sahip olduğu özellikleri (verileri) ve yapabildiği davranışları (fonksiyonları) tanımlayan genel şablona / kalıba ne ad verilir?",
      "options": [
        { "text": "A) Nesne (Object)", "isCorrect": False },
        { "text": "B) Sınıf (Class)", "isCorrect": True },
        { "text": "C) Modül (Module)", "isCorrect": False },
        { "text": "D) Değişken (Variable)", "isCorrect": False }
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
    }
  },
  # 3. Hafta
  {
    "week": 3,
    "date": "28 Eylül - 04 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Nesne Yönelimli Programlama (OOP)",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Yapıcı Metot (__init__) & self",
    "subtitle": "Nesne Doğuşu (Constructor), self Parametresi, Örnek Öznitelikleri ve Metot Tanımlama",
    "outcomeCode": "BB.10.1.3",
    "targetSkill": "Nesne Ömrü Yönetimi & Metot Tasarımı",
    "curiosityQuestion": "Bir nesne doğduğu (üretildiği) anda otomatik olarak çalışan ve ona ilk can suyunu veren sihirli fonksiyon nedir?",
    "roadmap": [
      { "title": "Yapıcı Metot (__init__)", "desc": "Nesne `()` ile türetildiği anda ilk parametreleri alıp hazırlayan metot." },
      { "title": "self Parametresi", "desc": "\"Ben kendim!\" - Metotların hangi nesne üzerinde çalıştığını bilmesini sağlayan referans." },
      { "title": "Örnek Öznitelikleri (Instance Attributes)", "desc": "`self.ad = ad` ile nesneye özel bellek alanları açma." },
      { "title": "Sınıf İçi Metot Yazımı", "desc": "İlk parametresi daima `self` olan nesne yetenekleri." }
    ],
    "section1": {
      "title": "__init__ ve self Mekanizması",
      "subtitle": "Nesneye kimlik kazandıran fabrika hattı",
      "cards": [
        {
          "title": "self Neden Zorunludur?",
          "icon": "⚡",
          "desc": "Nesnenin kendi içindeki verilere ulaşma anahtarı.",
          "items": [
            { "bold": "__init__ (Constructor)", "text": "Çift alt tireli (dunder) özel metottur; nesne oluşturulurken otomatik tetiklenir." },
            { "bold": "self Referansı", "text": "O an hangi nesnenin çağrıldığını temsil eder (`araba1.calis()` dendiğinde `self` araba1 olur)." },
            { "bold": "Kapsam İzolasyonu", "text": "`self.hiz` nesneye aittir, sıradan bir yerel değişken değildir; nesne yaşadıkça yaşar." }
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
        { "badge": "Etkileşim", "title": "Nesneler Arası İletişim", "desc": "Bir nesne başka bir nesneyi parametre olarak alıp onun özniteliklerini (`hedef.can -= self.guc`) doğrudan değiştirebilir.", "items": [{ "bold": "Dunder Metotlar", "text": "`__init__`, `__str__` gibi çift alt tireli metotlara Python'da 'Dunder' denir." }] }
      ]
    },
    "workshop": {
      "title": "Banka Hesabı Sınıfı (Bakiye, Para Yatır, Para Çek)",
      "subtitle": "Hesap sahibi ve bakiye özniteliklerine sahip güvenli bir BankaHesabi sınıfı kodlama",
      "steps": [
        { "title": "1. __init__ Yaz", "desc": "`def __init__(self, sahip, bakiye=0):` ile başlangıç verilerini bağlayın." },
        { "title": "2. para_yatir Metodu", "desc": "`self.bakiye += miktar` yapan ve yeni bakiyeyi basan metot yazın." },
        { "title": "3. para_cek Metodu", "desc": "Eğer `miktar <= self.bakiye` ise düşen, değilse 'Yetersiz Bakiye' diyen kontrolü kurun." },
        { "title": "4. Nesnelerle Test Et", "desc": "İki farklı kişinin hesabını açıp para transferi simülasyonu yapın." }
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
        { "bold": "self Parametresini Atlamayın", "text": "Metot tanımlarken `def saldir(self):` yazmazsanız, Python `saldir() takes 0 positional arguments but 1 was given` hatası fırlatır!" },
        { "bold": "self. ile Değişkene Erişin", "text": "Metot içinde `ad` yazarsanız yerel değişken arar; nesnenin adına erişmek için mutlaka `self.ad` yazmalısınız." },
        { "bold": "__init__ Geriye Değer Döndürmez", "text": "`__init__` içine asla `return bir_sey` yazmayın; `None` dışında return vermek hatadır." }
      ],
      "myths": [
        { "wrong": "Nesneyi çağırırken `self` parametresini de elimizle girmeliyiz.", "correct": "Python nokta operatörüyle çağrılan nesneyi `self` yerine otomatik olarak arka planda ilk sıraya koyar." },
        { "wrong": "self kelimesi yerine başka kelime yazılamaz.", "correct": "Teknik olarak `this` veya başka kelime yazılabilir ama dünya standartlarında Python'da daima `self` kullanılır." }
      ]
    },
    "quiz": {
      "question": "Python'da bir sınıfın yapıcı metodu (constructor) olarak nesne bellekte ilk üretildiği anda çalışan özel metot hangisidir?",
      "options": [
        { "text": "A) def start(self):", "isCorrect": False },
        { "text": "B) def __init__(self):", "isCorrect": True },
        { "text": "C) def __build__(self):", "isCorrect": False },
        { "text": "D) def new(self):", "isCorrect": False }
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
    }
  }
]

print("10. Sınıf 1-3. Hafta hazırlandı.")
