#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MEB 8. Sınıf Bilişim Teknolojileri ve Yazılım
Türkiye Yüzyılı Maarif Modeli (2026-2027)
2. Dönem 2. Kısım: Hafta 32 - 41
Öğretmen: Vahit Keskin
"""

from data_grade8_part1 import get_svg_for_week_8

false = False
true = True


def get_svg_for_week_8_part4(week_num, title):
    if week_num == 32:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="40" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">23 Nisan Tebrik Kartı &amp; f-string Motoru</text>
  <rect x="35" y="65" width="180" height="150" rx="10" fill="#dc2626" stroke="#ffffff" stroke-width="1.5"/>
  <circle cx="100" cy="130" r="30" fill="#ffffff"/>
  <circle cx="108" cy="130" r="24" fill="#dc2626"/>
  <polygon points="122,120 126,128 135,128 128,133 130,142 122,136 114,142 116,133 109,128 118,128" fill="#ffffff"/>
  <text x="125" y="195" text-anchor="middle" fill="#fde047" font-size="12" font-weight="bold">23 NİSAN 🇹🇷</text>

  <rect x="230" y="65" width="185" height="150" rx="10" fill="#030712" stroke="#8b5cf6"/>
  <text x="245" y="95" fill="#38bdf8" font-family="monospace" font-size="11">ad = "Ahmet"</text>
  <text x="245" y="120" fill="#10b981" font-family="monospace" font-size="11">f"🇹🇷 Sayın {ad},"</text>
  <text x="245" y="145" fill="#f8fafc" font-family="monospace" font-size="10">23 Nisan Kutlu Olsun!</text>
  <text x="245" y="180" fill="#f59e0b" font-family="monospace" font-size="10">mesaj.center(40, "*")</text>

  <rect x="35" y="230" width="380" height="65" rx="8" fill="#312e81"/>
  <text x="225" y="255" text-anchor="middle" fill="#fde047" font-size="11" font-weight="bold">🇹🇷 Gazi Mustafa Kemal Atatürk'ün Çocuklara Armağanı</text>
  <text x="225" y="278" text-anchor="middle" fill="#cbd5e1" font-size="10">Cumhuriyetimizin ve meclisimizin açılışını kodlarımızla kutluyoruz.</text>
</svg>'''
    elif week_num == 33:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="40" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Metin Tabanlı Macera Oyunu Dallanma Ağacı</text>
  <rect x="160" y="65" width="130" height="40" rx="8" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="225" y="90" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Giriş Kapısı</text>
  <line x1="180" y1="105" x2="100" y2="140" stroke="#8b5cf6" stroke-width="2"/>
  <line x1="270" y1="105" x2="350" y2="140" stroke="#8b5cf6" stroke-width="2"/>

  <rect x="40" y="140" width="120" height="45" rx="6" fill="#1e1b4b" stroke="#10b981"/>
  <text x="100" y="162" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">Bilgelik Odası</text>
  <text x="100" y="178" text-anchor="middle" fill="#cbd5e1" font-size="9">+ Altın Anahtar</text>

  <rect x="290" y="140" width="120" height="45" rx="6" fill="#1e1b4b" stroke="#ef4444"/>
  <text x="350" y="162" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">Ejderha İni</text>
  <text x="350" y="178" text-anchor="middle" fill="#ef4444" font-size="9">Tuzak! Can -40</text>

  <rect x="90" y="215" width="270" height="80" rx="8" fill="#030712" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="225" y="240" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Hazine Kapısı: if 'Anahtar' in envanter:</text>
  <text x="225" y="260" text-anchor="middle" fill="#10b981" font-size="11">Tebrikler Kazandın! 🏆</text>
  <text x="225" y="280" text-anchor="middle" fill="#94a3b8" font-size="10">Durum yönetimi (State Machine) mantığı</text>
</svg>'''
    elif week_num == 34:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="40" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Python Dosya İşlemleri (RAM -&gt; Sabit Disk)</text>
  <rect x="35" y="75" width="165" height="150" rx="10" fill="#1e1b4b" stroke="#f59e0b"/>
  <text x="117" y="105" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">RAM (Geçici)</text>
  <text x="50" y="135" fill="#f8fafc" font-family="monospace" font-size="11">skor = 950</text>
  <text x="50" y="160" fill="#ef4444" font-size="10">⚠️ Program kapanınca</text>
  <text x="50" y="180" fill="#ef4444" font-size="10">bütün veriler silinir!</text>

  <line x1="200" y1="150" x2="250" y2="150" stroke="#8b5cf6" stroke-width="3"/>

  <rect x="250" y="75" width="165" height="150" rx="10" fill="#030712" stroke="#10b981"/>
  <text x="332" y="105" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">SSD / Dosya (Kalıcı)</text>
  <text x="265" y="135" fill="#cbd5e1" font-family="monospace" font-size="10">skorlar.txt:</text>
  <text x="265" y="155" fill="#10b981" font-family="monospace" font-size="10">1. Efe - 950 Puan</text>
  <text x="265" y="195" fill="#38bdf8" font-size="10">✓ Yıllarca saklanır!</text>

  <rect x="35" y="240" width="380" height="55" rx="8" fill="#312e81"/>
  <text x="225" y="272" text-anchor="middle" fill="#e0e7ff" font-size="11" font-weight="bold">with open('skor.txt', 'a') as f: # Güvenli Ekleme Modu</text>
</svg>'''
    elif week_num == 37:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="40" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Teachable Machine &amp; Python Yapay Zeka</text>
  <g transform="translate(30, 75)">
    <rect width="115" height="135" rx="8" fill="#1e1b4b" stroke="#38bdf8"/>
    <text x="57" y="25" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">1. Veri Topla</text>
    <text x="57" y="60" text-anchor="middle" font-size="20">📷</text>
    <text x="57" y="90" text-anchor="middle" fill="#cbd5e1" font-size="9">Kitap: 50 foto</text>
    <text x="57" y="110" text-anchor="middle" fill="#cbd5e1" font-size="9">Kalem: 50 foto</text>
  </g>
  <line x1="145" y1="142" x2="165" y2="142" stroke="#8b5cf6" stroke-width="2"/>
  <g transform="translate(165, 75)">
    <rect width="115" height="135" rx="8" fill="#1e1b4b" stroke="#8b5cf6"/>
    <text x="57" y="25" text-anchor="middle" fill="#a78bfa" font-size="10" font-weight="bold">2. Modeli Eğit</text>
    <circle cx="57" cy="65" r="22" fill="#8b5cf6" fill-opacity="0.3"/>
    <text x="57" y="70" text-anchor="middle" font-size="14">🧠</text>
    <text x="57" y="105" text-anchor="middle" fill="#f8fafc" font-size="9">Ağırlıklar (Weights)</text>
  </g>
  <line x1="280" y1="142" x2="300" y2="142" stroke="#8b5cf6" stroke-width="2"/>
  <g transform="translate(300, 75)">
    <rect width="115" height="135" rx="8" fill="#1e1b4b" stroke="#10b981"/>
    <text x="57" y="25" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">3. Canlı Tahmin</text>
    <text x="57" y="60" text-anchor="middle" font-size="20">⚡</text>
    <text x="57" y="90" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">Kitap</text>
    <text x="57" y="110" text-anchor="middle" fill="#cbd5e1" font-size="9">%96.8 Güven</text>
  </g>
  <rect x="30" y="235" width="385" height="60" rx="8" fill="#312e81"/>
  <text x="222" y="270" text-anchor="middle" fill="#e0e7ff" font-size="11" font-weight="bold">Bilgisayarlı Görü (Computer Vision) Dünyanın Gözüdür!</text>
</svg>'''
    elif week_num == 41:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="3"/>
  <rect x="15" y="15" width="420" height="290" rx="14" fill="none" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4"/>
  <text x="225" y="60" text-anchor="middle" fill="#fde047" font-size="16" font-weight="bold">🎓 ORTAOKUL BİLİŞİM MEZUNİYETİ 🎓</text>
  <text x="225" y="85" text-anchor="middle" fill="#c084fc" font-size="11">MEB 2026-2027 Eğitim ve Öğretim Yılı</text>
  <text x="225" y="125" text-anchor="middle" fill="#e2e8f0" font-size="12">41 Haftalık Bilişimsel Düşünme, Algoritmalar, Python,</text>
  <text x="225" y="145" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Kriptoloji ve Yapay Zekâ Eğitimini Tamamlayan</text>
  <rect x="90" y="165" width="270" height="35" rx="8" fill="#8b5cf6" fill-opacity="0.3" stroke="#8b5cf6"/>
  <text x="225" y="188" text-anchor="middle" fill="#10b981" font-size="13" font-weight="bold">TÜRKİYE YÜZYILI GENÇ BİLİŞİMCİSİ</text>
  <circle cx="90" cy="245" r="22" fill="#1e1b4b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="90" y="252" text-anchor="middle" font-size="16">⭐</text>
  <circle cx="360" cy="245" r="22" fill="#1e1b4b" stroke="#10b981" stroke-width="1.5"/>
  <text x="360" y="252" text-anchor="middle" font-size="16">🚀</text>
  <text x="225" y="260" text-anchor="middle" fill="#cbd5e1" font-size="11" font-style="italic">"Yolunuz açık, kodlarınız hatasız olsun!"</text>
</svg>'''
    else:
        return get_svg_for_week_8(week_num, title)

# ----------------------------------------------------
# 8. SINIF 32 - 41. HAFTALAR LİSTESİ
# ----------------------------------------------------
WEEKS_32_41_GRADE8 = [
  # 32. HAFTA
  {
    "week": 32,
    "date": "19 - 25 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: İleri Projeler & Kültürel Bilişim",
    "unitBadge": "23 Nisan Özel",
    "unitTheme": "unite-5",
    "title": "23 Nisan Çocuk Bayramı: Python ile Şiir ve Kutlama Kartı Robotu",
    "subtitle": "Cumhuriyetimizin ve Egemenliğimizin 8. Sınıf Kodlarıyla Kutlanması",
    "outcomeCode": "BTY.8.5.1",
    "targetSkill": "f-string & Metin Biçimlendirme Algoritmaları",
    "curiosityQuestion": "Atatürk'ün dünya çocuklarına armağan ettiği 23 Nisan için yapay zeka nasıl anlamlı şiirler üretebilir?",
    "roadmap": [
      { "title": "f-string Gücü", "desc": "f'{degisken}' ile metin içine kod gömme standardı." },
      { "title": "Metin Hizalama", "desc": "center(), upper(), title() fonksiyonlarıyla estetik çıktılar." },
      { "title": "Algoritmik Şiir", "desc": "Gramer kalıbına göre anlamlı mısra sentezleme." },
      { "title": "Milli Egemenlik", "desc": "23 Nisan ruhunu bilişimle geleceğe taşıma." }
    ],
    "roadmapSvg": get_svg_for_week_8_part4(32, "23 Nisan Tebrik Kartı & f-string Motoru"),
    "section1": {
      "title": "Modern Python'da f-string Mucizesi",
      "subtitle": "Metin birleştirmede '+' işaretini tarihe gömen en hızlı yöntem:",
      "cards": [
        {
          "title": "f-string ve Formatlama",
          "icon": "🇹🇷",
          "desc": "Metnin başına küçük 'f' harfi koyarak süslü parantez içine doğrudan değişken yazarız.",
          "items": [
            { "bold": "f'Ad: {ad}, Not: {notu}'", "text": "Metin ve sayı dönüşümünü otomatik yapar." },
            { "bold": "metin.center(40, '=')", "text": "Metni 40 karakterlik alanda ortalar ve kenarlara '=' koyar." }
          ]
        }
      ]
    },
    "section2": {
      "title": "23 Nisan Kutlama Mektubu Algoritması",
      "subtitle": "Konsolda çerçevelenmiş kişisel tebrik kartı:",
      "codeSnippet": "# 23 Nisan Kutlama Kartı\nad = input('Öğrenci Adı: ')\nokul = 'Cumhuriyet Ortaokulu'\nkart = f'''\n{'*'*40}\n* 🇹🇷 23 NİSAN ÇOCUK BAYRAMI 🇹🇷 *\n* Sevgili {ad.title()},\n* {okul} Gururla Kutlar!\n{'*'*40}'''\nprint(kart)",
      "codeTitle": "kutlama_karti.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "23 Nisan",
          "title": "Ulusal Egemenlik",
          "desc": "23 Nisan 1920 TBMM'nin açılışını ve millet egemenliğini milli yazılımlarımızla taçlandırıyoruz.",
          "items": [
            { "bold": "Geleceğin Işığı", "text": "Atatürk: 'Bütün ümidim gençliktedir!'" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Algoritmik Şiir Robotu Tasarımı",
      "subtitle": "Sıfat ve eylem havuzundan rastgele 2 kıtalık bayram şiiri üreten program.",
      "steps": [
        { "title": "Kelime Havuzu", "desc": "ozneler, sifatlar ve eylemler listelerini doldurun." },
        { "title": "Kıta Üret", "desc": "random.choice() ile 4 mısralık gramer şablonu oluşturun." },
        { "title": "Yazdır", "desc": "f-string ile çerçeve içine alıp konsolda duyurun." }
      ],
      "criteria": [
        "f-string sözdiziminin hatasız kullanımı",
        "random.choice fonksiyonunun listelerle entegrasyonu",
        "Kültürel içerik ve estetik çerçeveleme"
      ]
    },
    "tips": {
      "safetyTitle": "Metin İşleme Hijyeni",
      "safetyRules": [
        { "bold": "f Harfi Unutulmasın", "text": "Tırnak işaretinin hemen başına 'f' harfi koymazsanız {ad} yazısı aynen ekranda kalır." }
      ],
      "myths": [
        { "wrong": "Yapay zeka sadece rastgele kelimeler saçar.", "correct": "Yapay zeka gramer ve olasılık matrisleriyle anlamlı cümleler kurar." }
      ]
    },
    "quiz": {
      "question": "Python'da x = 8 ve ders = 'Bilişim' ise print(f'{x}. Sınıf {ders} Dersi') komutunun çıktısı nedir?",
      "options": [
        { "text": "8. Sınıf Bilişim Dersi", "isCorrect": true },
        { "text": "{x}. Sınıf {ders} Dersi", "isCorrect": false },
        { "text": "f'8. Sınıf Bilişim Dersi'", "isCorrect": false },
        { "text": "SyntaxError", "isCorrect": false }
      ],
      "explanation": "f-string içindeki süslü parantezler değişkenlerin gerçek değerleriyle değiştirilir."
    },
    "summary": {
      "keyPoints": [
        "f-string modern Python'da metin biçimlendirmenin altın standardıdır.",
        "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı'nı gururla kutladık."
      ],
      "nextWeek": "Metin Tabanlı Macera Oyunu Tasarımı (Interactive Fiction)",
      "homework": "Ailenizden birine f-string ile kişiselleştirilmiş 23 Nisan kutlama mektubu yazan bir Python kodu oluşturun."
    }
  },

  # 33. HAFTA
  {
    "week": 33,
    "date": "26 Nisan - 02 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: İleri Projeler & Oyun Mimarisi",
    "unitBadge": "Metin Macera",
    "unitTheme": "unite-5",
    "title": "Metin Tabanlı Macera Oyunu Tasarımı (Interactive Fiction)",
    "subtitle": "Kendi Seçimini Kendin Yap: Dallanan Hikaye Kurgusu ve Envanter Yönetimi",
    "outcomeCode": "BTY.8.5.2",
    "targetSkill": "Durum Makineleri (State Machine) & Etkileşimli Kurgu",
    "curiosityQuestion": "3D grafik kartları yokken dünyayı kasıp kavuran metin tabanlı macera oyunları nasıl çalışıyordu?",
    "roadmap": [
      { "title": "Dallanan Senaryo", "desc": "Her seçimde hikayenin farklı bir yöne evrilmesi." },
      { "title": "Envanter Listesi", "desc": "Bulunan eşyaları (anahtar, kılıç) çantaya ekleme (append)." },
      { "title": "Can/Enerji Takibi", "desc": "Tuzaklarda canın azalması ve oyun bitiş şartları." },
      { "title": "Durum Makinesi", "desc": "Hangi odada olduğunu takip eden state değişkeni." }
    ],
    "roadmapSvg": get_svg_for_week_8_part4(33, "Metin Tabanlı Macera Oyunu Dallanma Ağacı"),
    "section1": {
      "title": "Metin Macera Oyununun 4 Temel Direği",
      "subtitle": "Kodlarla hayal gücünü harekete geçiren interaktif edebiyat:",
      "cards": [
        {
          "title": "Oyun Mekanikleri",
          "icon": "🗺️",
          "desc": "Grafik olmadan sadece oyuncunun seçimleriyle yaşayan bir dünya kurarız.",
          "items": [
            { "bold": "Oda Durumu (State)", "text": "mevcut_oda = 'Giris' değişkeni konumu tutar." },
            { "bold": "Envanter Kontrolü", "text": "if 'Altın Anahtar' in envanter: kapıyı açar." },
            { "bold": "Can Puanı", "text": "can <= 0 olursa Game Over ekranı gelir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Siber Kaçış (Cyber Escape) Konsol Oyunu",
      "subtitle": "Kilitli laboratuvardan şifre bularak kaçma simülasyonu:",
      "codeSnippet": "# Siber Kaçış Oyunu\nenvanter = []\ncan = 100\nprint('Kilitli Laboratuvardasın! [1] Sol Kapı [2] Sağ Sandık')\nsecim = input('&gt; ')\nif secim == '2':\n    envanter.append('Giriş Kartı')\n    print('Kartı çantana koydun!')\nif 'Giriş Kartı' in envanter:\n    print('Kapıyı açtın ve BAŞARIYLA KAÇTIN! 🎉')",
      "codeTitle": "siber_kacis.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Durum Yönetimi",
          "title": "'in' Operatörü",
          "desc": "Listenin içinde bir öğenin olup olmadığını 'if oge in liste:' ile tek satırda kontrol ederiz.",
          "items": [
            { "bold": "Etkileşim", "text": "Kullanıcının her tercihi oyunun sonunu değiştirir." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "3 Odalı Siber Kaçış Oyunu Kodlama",
      "subtitle": "En az 3 farklı odası olan, can puanı azalan ve envanter kullanan oyun tasarlama.",
      "steps": [
        { "title": "Haritayı Çiz", "desc": "Kağıt üzerinde odaları ve seçim yollarını şematize edin." },
        { "title": "Değişkenleri Aç", "desc": "can = 100 ve envanter = [] listesini başlatın." },
        { "title": "Döngüyü Yaz", "desc": "while can > 0 ile odalar arası geçişleri if-elif ile kodlayın." }
      ],
      "criteria": [
        "En az 3 farklı seçim dalının bulunması",
        "Envanter listesine eleman ekleme ve kontrolü",
        "Kazanma ve kaybetme şartlarının hatasız çalışması"
      ]
    },
    "tips": {
      "safetyTitle": "Oyun Kurgu İpuçları",
      "safetyRules": [
        { "bold": "Geçersiz Girdi Kontrolü", "text": "Kullanıcı 1 veya 2 yerine 'x' yazarsa program çökmeyip uyarı vermelidir." }
      ],
      "myths": [
        { "wrong": "İyi bir oyun için mutlaka 3D ekran kartı lazımdır.", "correct": "Efsanevi oyunlar grafiklerle değil, kusursuz kurgulanmış karar ağaçlarıyla başlar." }
      ]
    },
    "quiz": {
      "question": "envanter = ['Kılıç'] olan oyuncu sandıktan 'İksir' bulduğunda listeye eklemek için hangi komut yazılır?",
      "options": [
        { "text": "envanter.append('İksir')", "isCorrect": true },
        { "text": "envanter.add('İksir')", "isCorrect": false },
        { "text": "envanter = 'İksir'", "isCorrect": false },
        { "text": "envanter.push('İksir')", "isCorrect": false }
      ],
      "explanation": "Python listelerine yeni eleman eklemek için append() fonksiyonu kullanılır."
    },
    "summary": {
      "keyPoints": [
        "Metin tabanlı macera oyunları durum makinesi ve karar ağaçlarıyla çalışır.",
        "Listeler envanter tutmak için idealdir; 'in' operatörü varlık sorgular."
      ],
      "nextWeek": "Dosya İşlemleri: Python ile Veri Kaydetme ve Okuma (I/O)",
      "homework": "Oyununuza 'Hamle Sayacı' ekleyin; oyuncu 5 hamlede kaçamazsa laboratuvar kilitlensin."
    }
  },

  # 34. HAFTA
  {
    "week": 34,
    "date": "03 - 09 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: İleri Projeler & Veri Kalıcılığı",
    "unitBadge": "Dosya İşlemleri",
    "unitTheme": "unite-5",
    "title": "Dosya İşlemleri: Python ile Veri Kaydetme ve Okuma",
    "subtitle": "Program Kapanınca Veriler Yok Olmasın: Kalıcı Depolama Dünyası",
    "outcomeCode": "BTY.8.5.3",
    "targetSkill": "Veri Kalıcılığı (Persistence) & Dosya Yönetimi (I/O)",
    "curiosityQuestion": "Bilgisayarı kapattığınızda oyun rekorunuz neden sıfırlanmaz?",
    "roadmap": [
      { "title": "RAM vs Sabit Disk", "desc": "Geçici bellek ile kalıcı depolama farkı." },
      { "title": "with open() Bloğu", "desc": "Dosyayı güvenle açıp otomatik kapatma." },
      { "title": "Dosya Modları (r, w, a)", "desc": "Okuma, baştan yazma ve sonuna ekleme." },
      { "title": "Skor Tablosu Dosyası", "desc": "Rekorları .txt dosyasına kazıma." }
    ],
    "roadmapSvg": get_svg_for_week_8_part4(34, "Python Dosya İşlemleri (RAM -> Sabit Disk)"),
    "section1": {
      "title": "Kalıcı Depolama ve Dosya Modları",
      "subtitle": "RAM unutur, Hard Disk hatırlar:",
      "cards": [
        {
          "title": "open() Modları",
          "icon": "💾",
          "desc": "Dosya açarken Python'a ne niyetle açtığımızı söyleriz:",
          "items": [
            { "bold": "'w' (Write)", "text": "Dosyayı sıfırdan oluşturur; varsa içindekileri siler!" },
            { "bold": "'a' (Append)", "text": "Eski verilere dokunmaz; dosyanın en altına yeni satır ekler." },
            { "bold": "'r' (Read)", "text": "Mevcut dosyanın içini okur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "with open(...) Güvenlik Standardı",
      "subtitle": "Dosyaların bozulmasını engelleyen altın kural:",
      "codeSnippet": "# Kalıcı Skor Kaydedici\noyuncu = input('Oyuncu Adı: ')\nskor = 950\nwith open('skorlar.txt', 'a', encoding='utf-8') as dosya:\n    dosya.write(f'{oyuncu}: {skor} Puan\\n')\nprint('Skor başarıyla diske kaydedildi!')",
      "codeTitle": "skor_kaydet.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Altın Kural",
          "title": "with Bloğu",
          "desc": "İşlem bittiğinde dosya.close() yapmayı unutsanız bile dosyayı otomatik kapatır.",
          "items": [
            { "bold": "\\n Karakteri", "text": "Alt satıra geçmeyi sağlar." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Dijital Günlük ve Ziyaretçi Defteri",
      "subtitle": "Günün tarihini ve notunu gunluk.txt dosyasına ekleyen ve eski notları okuyan program.",
      "steps": [
        { "title": "Notu Al", "desc": "input() ile kullanıcının o günkü notunu alın." },
        { "title": "Dosyaya Yaz", "desc": "with open('gunluk.txt', 'a') ile dosyaya yazın." },
        { "title": "Dosyayı Oku", "desc": "with open('gunluk.txt', 'r') ile tüm defteri ekrana dökün." }
      ],
      "criteria": [
        "with open() yapısının doğru kurulması",
        "'a' ve 'r' modlarının amacına uygun seçilmesi",
        "Karakter kodlamasının (utf-8) belirtilmesi"
      ]
    },
    "tips": {
      "safetyTitle": "Dosya Güvenliği",
      "safetyRules": [
        { "bold": "'w' Modu Tehlikesi", "text": "Var olan bir dosyayı 'w' ile açarsanız tüm eski veriler anında silinir; dikkatli olun!" }
      ],
      "myths": [
        { "wrong": "Değişkenler bilgisayarı kapatıp açınca dosyaya gerek kalmadan saklanır.", "correct": "RAM elektrik kesilince sıfırlanır; kalıcılık için dosya veya veritabanı şarttır." }
      ]
    },
    "quiz": {
      "question": "Eski verileri silmeden dosyanın sonuna yeni bir satır eklemek için open() fonksiyonunda hangi mod kullanılır?",
      "options": [
        { "text": "'w'", "isCorrect": false },
        { "text": "'a'", "isCorrect": true },
        { "text": "'r'", "isCorrect": false },
        { "text": "'x'", "isCorrect": false }
      ],
      "explanation": "'a' harfi 'append' (ekleme) anlamına gelir ve eski verileri silmeden sona yazar."
    },
    "summary": {
      "keyPoints": [
        "with open() yapısı kalıcı veri kaydının en güvenli yoludur.",
        "'r' okur, 'w' sıfırlayarak yazar, 'a' sonuna ekler."
      ],
      "nextWeek": "Engelliler Haftası Özel: Görme Engelliler İçin Sesli Bilgi Sistemi",
      "homework": "Taş-Kâğıt-Makas oyununun sonuna her oyunun galibini tkm_rekorlar.txt dosyasına yazan bir fonksiyon ekleyin."
    }
  },

  # 35. HAFTA
  {
    "week": 35,
    "date": "10 - 16 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Sosyal Sorumluluk & Sesli Sistemler",
    "unitBadge": "Erişilebilirlik",
    "unitTheme": "unite-5",
    "title": "Engelliler Haftası: Görme Engelliler İçin Erişilebilir Bilişim",
    "subtitle": "Metinden Sese (TTS) Teknolojileri ve Engelsiz Yazılım Mimarisi",
    "outcomeCode": "BTY.8.5.4",
    "targetSkill": "Erişilebilirlik (Accessibility) & Sesli Sentezleme",
    "curiosityQuestion": "Gözleri hiç görmeyen bir yazılımcı, ekrana hiç bakmadan sadece kulaklığına gelen saniyede 500 kelimelik ekran okuyucu sesleriyle devasa yapay zekâ kodlarını nasıl yazıp dünyaca ünlü bir mühendis olabilir?",
    "roadmap": [
      { "title": "Engelsiz Bilişim", "desc": "Ekran okuyucular (Screen Reader) ve erişilebilirlik ilkeleri." },
      { "title": "Metinden Sese (TTS)", "desc": "Text-to-Speech yapay ses sentezleme modelleri." },
      { "title": "Sesli Asistan Mantığı", "desc": "Sensör verilerini ve mesajları sese dönüştürme." },
      { "title": "Evrensel Tasarım", "desc": "Teknolojiyi herkes için eşit ve engelsiz kılma." }
    ],
    "roadmapSvg": get_svg_for_week_8(35, "Sesli Asistan & Erişilebilirlik Mimarisi"),
    "section1": {
      "title": "Erişilebilirlik (A11y) ve TTS Teknolojisi",
      "subtitle": "En ileri teknoloji hiç kimseyi geride bırakmayan teknolojidir:",
      "cards": [
        {
          "title": "Sesli Asistan Mimarisi",
          "icon": "♿",
          "desc": "Yazılımda empati ve sosyal sorumluluk ilkeleri:",
          "items": [
            { "bold": "TTS (Text-to-Speech)", "text": "Yazılı metinleri yapay zekayla Türkçe insan sesine çevirme." },
            { "bold": "Alt Metin (Alt Text)", "text": "Görme engellilere resimleri sesle betimleme standardı." },
            { "bold": "Klavye Erişimi", "text": "Fare olmadan tüm menülerin klavyeyle yönetilebilmesi." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sesli İlaç ve Uyarı Asistanı Mantığı",
      "subtitle": "Python ile metni ses dalgasına çevirme süreci:",
      "codeSnippet": "# Sesli Bilgi Sistemi Mantığı\nmesaj = 'Saat 14:00, lütfen tansiyon ilacınızı alınız.'\nprint('SES ÇIKIŞI: 🔊', mesaj)\n# gTTS kütüphanesiyle mesaj.mp3 üretilip hoparlörden çalınır",
      "codeTitle": "sesli_asistan.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Sosyal Fayda",
          "title": "Evrensel Tasarım",
          "desc": "Sesli navigasyon hem araç kullanan sürücünün hem de görme engelli vatandaşın hayatını kurtarır.",
          "items": [
            { "bold": "Kapsayıcılık", "text": "Yazılımcılar toplumun her kesimini düşünmelidir." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sesli İlaç Hatırlatıcı Simülatörü",
      "subtitle": "Görme engelli birey için ilaç saatlerini ekranda büyük puntolarla gösterip sesli uyarı üreten algoritma.",
      "steps": [
        { "title": "İlaç Saatlerini Belirle", "desc": "Saatleri ve ilaç adlarını bir listede tutun." },
        { "title": "Saati Denetle", "desc": "Vakti gelen ilacı tespit eden koşul bloğu kurun." },
        { "title": "Sesli Mesaj Oluştur", "desc": "f-string ile anlaşılır sesli yönerge metni hazırlayın." }
      ],
      "criteria": [
        "Erişilebilirlik standartlarına uygunluk",
        "Net ve anlaşılır seslendirme metni",
        "Algoritmik zaman kontrolü"
      ]
    },
    "tips": {
      "safetyTitle": "Erişilebilirlik İpuçları",
      "safetyRules": [
        { "bold": "Kontrast Oranı", "text": "Yazıların ve butonların arka planla yüksek kontrasta sahip olmasını sağlayın." }
      ],
      "myths": [
        { "wrong": "Erişilebilirlik sadece özel yazılımlarda gereklidir.", "correct": "Erişilebilirlik tüm web siteleri ve uygulamalar için yasal bir zorunluluktur." }
      ]
    },
    "quiz": {
      "question": "Görme engellilerin yazılı içerikleri dinlemesini sağlayan 'Metinden Sese' teknolojisinin kısaltması nedir?",
      "options": [
        { "text": "TTS (Text-to-Speech)", "isCorrect": true },
        { "text": "RAM", "isCorrect": false },
        { "text": "CPU", "isCorrect": false },
        { "text": "SSD", "isCorrect": false }
      ],
      "explanation": "Text-to-Speech (TTS), metinleri sese dönüştüren temel erişilebilirlik teknolojisidir."
    },
    "summary": {
      "keyPoints": [
        "Engelliler Haftası'nda teknolojinin empati ve erişilebilirlik yönünü işledik.",
        "TTS modelleriyle görmeyen gözlere ses olan projeler ürettik."
      ],
      "nextWeek": "19 Mayıs Gençlik Bayramı: Genç Yazılımcılar Hackathonu",
      "homework": "Renk körü bireyler için kırmızı ve yeşil butonları ayırt edebilecekleri bir sembol kuralı önerisi yazın."
    }
  },

  # 36. HAFTA
  {
    "week": 36,
    "date": "17 - 23 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Gençlik & Hızlı Prototipleme",
    "unitBadge": "19 Mayıs Özel",
    "unitTheme": "unite-5",
    "title": "19 Mayıs Gençlik Bayramı: Genç Yazılımcılar Hackathonu",
    "subtitle": "Bandırma Vapuru'nun Bağımsızlık Meşalesinden Milli Teknoloji Hamlesine",
    "outcomeCode": "BTY.8.5.5",
    "targetSkill": "Çevik Prototipleme (Hackathon) & Takım Çalışması",
    "curiosityQuestion": "19 Mayıs 1919'da Samsun'da yakılan bağımsızlık meşalesi bugün TEKNOFEST'te nasıl parlıyor?",
    "roadmap": [
      { "title": "Hackathon Kültürü", "desc": "Kısıtlı sürede sıfırdan çalışan prototip üretme maratonu." },
      { "title": "Eşli Kodlama (Pair)", "desc": "İki yazılımcının sürücü ve gözlemci olarak birlikte çalışması." },
      { "title": "MVP (İlk Ürün)", "desc": "Minimum Viable Product: En küçük çalışabilir ürün." },
      { "title": "Milli Teknoloji Hamlesi", "desc": "Kendi kodunu yazan, kendi uçağını uçuran Türkiye vizyonu." }
    ],
    "roadmapSvg": get_svg_for_week_8(36, "Hackathon & Takım Çalışması Döngüsü"),
    "section1": {
      "title": "Hackathon ve MVP (En Küçük Çalışabilir Ürün)",
      "subtitle": "Mükemmel olmasını bekleme; çalışan ilk sürümü üret:",
      "cards": [
        {
          "title": "Hackathon Dinamikleri",
          "icon": "🚀",
          "desc": "Dünyanın en büyük girişimleri hackathonlarda doğmuştur.",
          "items": [
            { "bold": "Fikir Sprinti", "text": "Toplumsal bir problemi tespit edip çözüm üretme." },
            { "bold": "MVP Prensibi", "text": "Araba yapamıyorsan önce kaykay yap; ama mutlaka çalışsın." },
            { "bold": "Canlı Demo", "text": "Slayt okumak yerine kodları çalıştırıp göstermek." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Eşli Programlama (Pair Programming)",
      "subtitle": "İki beyin tek klavye:",
      "cards": [
        {
          "badge": "Takım Ruhu",
          "title": "Sürücü vs Gözlemci",
          "desc": "Biri klavyede kodları yazar, diğeri stratejiyi ve syntax hatalarını kontrol eder.",
          "items": [
            { "bold": "19 Mayıs Ruhu", "text": "Atatürk: 'Bütün ümidim gençliktedir!'" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sınıf İçi 30 Dakikalık Mini Hackathon",
      "subtitle": "2'şerli takımlarla belirlenen bir soruna çalışan tek dosyalık Python prototipi üretme.",
      "steps": [
        { "title": "Sorunu Seç", "desc": "Sokak hayvanları takipçisi veya LGS puan hesaplayıcı seçin." },
        { "title": "MVP Kodla", "desc": "20 dakikada sadece en temel özelliği çalışan kodu yazın." },
        { "title": "2 Dakikalık Demo", "desc": "Akıllı tahtada çalışan ürünü sınıfa canlı gösterin." }
      ],
      "criteria": [
        "Kodun hatasız çalışması (MVP)",
        "Takım içi işbirliği ve rol dağılımı",
        "Etkili canlı demo sunumu"
      ]
    },
    "tips": {
      "safetyTitle": "Hackathon Taktikleri",
      "safetyRules": [
        { "bold": "Zamanı Yönet", "text": "Tasarımda boğulmayın; önce ana mantığı çalıştırın." }
      ],
      "myths": [
        { "wrong": "Hackathon sadece hackerların işidir.", "correct": "Hackathon yaratıcı fikirleri hızla yazılıma dönüştüren herkesin maratonudur." }
      ]
    },
    "quiz": {
      "question": "Bir projenin kullanıcıya sunulabilecek en temel, çalışan ilk sürümüne ne ad verilir?",
      "options": [
        { "text": "MVP (Minimum Viable Product)", "isCorrect": true },
        { "text": "Beta Sürüm", "isCorrect": false },
        { "text": "Final Sürüm", "isCorrect": false },
        { "text": "Yama (Patch)", "isCorrect": false }
      ],
      "explanation": "MVP (En Küçük Çalışabilir Ürün), fikri en hızlı şekilde test eden çalışan ilk sürümdür."
    },
    "summary": {
      "keyPoints": [
        "19 Mayıs ruhunu genç bilişimciler olarak hackathon heyecanıyla kutladık.",
        "Pair programming ve MVP metodolojileri modern yazılımın temelidir."
      ],
      "nextWeek": "Yapay Zeka: Görüntü Tanıma ve Model Eğitimi (Teachable Machine)",
      "homework": "Bir arkadaşınızla ortak proje fikri belirleyip mimari akış şemasını çizin."
    }
  },

  # 37. HAFTA
  {
    "week": 37,
    "date": "24 - 30 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yapay Zeka & Bilgisayarlı Görü",
    "unitBadge": "Yapay Zeka & Görüntü",
    "unitTheme": "unite-6",
    "title": "Yapay Zeka: Görüntü Tanıma ve Model Eğitimi",
    "subtitle": "Kameraya Dünyayı Tanıtmak: Bilgisayarlı Görü (Computer Vision) Dünyası",
    "outcomeCode": "BTY.8.6.1",
    "targetSkill": "Yapay Zeka Modeli Eğitme & Canlı Tahmin",
    "curiosityQuestion": "Bilgisayar bir fotoğraftaki kediyi köpeğin bıyıklarından nasıl ayırt edebilir?",
    "roadmap": [
      { "title": "Bilgisayarlı Görü", "desc": "Piksellerin arkasındaki örüntüleri yapay sinir ağlarıyla anlama." },
      { "title": "Veri Toplama (Dataset)", "desc": "Web kamerasından sınıflara göre 50'şer fotoğraf çekme." },
      { "title": "Model Eğitimi (Train)", "desc": "Matematiksel ağırlıkları (weights) hesaplama." },
      { "title": "Güven Skoru (% Confidence)", "desc": "Modelin gördüğü nesneden yüzde kaç emin olduğu." }
    ],
    "roadmapSvg": get_svg_for_week_8_part4(37, "Teachable Machine & Python Yapay Zeka"),
    "section1": {
      "title": "Bilgisayarlı Görü ve Model Eğitimi Adımları",
      "subtitle": "Pikselleri sayılardan zekaya dönüştürme:",
      "cards": [
        {
          "title": "Eğitim Boru Hattı",
          "icon": "👁️",
          "desc": "Google Teachable Machine ile kod yazmadan derin öğrenme:",
          "items": [
            { "bold": "1. Veri Seti", "text": "Farklı açılardan ve ışıklardan onlarca örnek toplamak." },
            { "bold": "2. Eğitim (Training)", "text": "Yapay sinir ağının ortak görsel kalıpları ezberlemesi." },
            { "bold": "3. Canlı Test", "text": "Kameraya yeni bir nesne gösterip anında % skorunu görmek." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Aşırı Öğrenme (Overfitting) Tehlikesi",
      "subtitle": "Ezberleyen değil, genelleme yapan yapay zeka:",
      "cards": [
        {
          "badge": "Derin Öğrenme",
          "title": "Zengin Veri Kuralı",
          "desc": "Modele sadece kırmızı elma gösterirseniz yeşil elmayı tanıyamaz. Farklı varyasyonlar şarttır.",
          "items": [
            { "bold": "Kullanım Alanları", "text": "Otonom araçlar, yüz tanıma, fabrikalarda hatalı ürün ayıklama." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Duruş ve Jest Tanıma Modeli Eğitimi",
      "subtitle": "Teachable Machine ile 'Sağ El Havada' vs 'Sol El Havada' jestlerini tanıyan canlı model kurma.",
      "steps": [
        { "title": "Kamera ile Çek", "desc": "Her jest için 30 kare fotoğraf kaydedin." },
        { "title": "Modeli Eğit", "desc": "Train model butonuna basıp eğitimi izleyin." },
        { "title": "Test Et", "desc": "Elinizi kaldırdığınızda doğruluk yüzdesini teyit edin." }
      ],
      "criteria": [
        "Veri setinin dengeli toplanması (eşit kare sayısı)",
        "Modelin %90 üzeri güven skoru üretmesi",
        "Farklı ışık koşullarında test edilmesi"
      ]
    },
    "tips": {
      "safetyTitle": "Yapay Zeka Etiği",
      "safetyRules": [
        { "bold": "Veri Yanlılığı (Bias)", "text": "Veri setiniz ne kadar tarafsızsa yapay zeka o kadar adil kararlar verir." }
      ],
      "myths": [
        { "wrong": "Bilgisayarlar fotoğrafları tıpkı insanlar gibi görür.", "correct": "Bilgisayarlar sadece RGB renk sayı matrislerini ve kenar çizgilerini analiz eder." }
      ]
    },
    "quiz": {
      "question": "Bir yapay zeka modeli kameradaki nesneyi %95 oranında 'Kalem' olarak tahmin ediyorsa, bu %95 neyi ifade eder?",
      "options": [
        { "text": "Modelin tahmin güven skorunu (Confidence Score)", "isCorrect": true },
        { "text": "Kalemin ağırlığını", "isCorrect": false },
        { "text": "Kameranın pil seviyesini", "isCorrect": false },
        { "text": "İnternet hızını", "isCorrect": false }
      ],
      "explanation": "Yüzdelik oran, modelin eğitim verilerine dayanarak o tahminden ne kadar emin olduğunu gösterir."
    },
    "summary": {
      "keyPoints": [
        "Bilgisayarlı görü görsel pikselleri yapay zeka modelleriyle sınıflandırır.",
        "Teachable Machine ile veri toplama, eğitim ve güven skoru mantığını uyguladık."
      ],
      "nextWeek": "Yazılım Geliştirme Yaşam Döngüsü (SDLC) ve Test",
      "homework": "Geri dönüştürülebilir atıkları (Plastik/Kağıt/Cam) ayırt edebilecek 3 sınıflı bir model kurgulayın."
    }
  },

  # 38. HAFTA
  {
    "week": 38,
    "date": "31 Mayıs - 06 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Yazılım Mühendisliği & SDLC",
    "unitBadge": "Yazılım Mühendisliği",
    "unitTheme": "unite-6",
    "title": "Yazılım Geliştirme Yaşam Döngüsü (SDLC) ve Test",
    "subtitle": "Amatör Kodlamadan Profesyonel Yazılım Mühendisliğine Geçiş",
    "outcomeCode": "BTY.8.6.2",
    "targetSkill": "Yazılım Mühendisliği Aşamaları & Birim Testleri",
    "curiosityQuestion": "Milyonlarca satırlık roket yazılımları neden doğrudan kod yazılarak başlanmaz?",
    "roadmap": [
      { "title": "1. Analiz", "desc": "Gereksinimleri belirleme ve sınırları çizme." },
      { "title": "2. Tasarım", "desc": "Akış şemaları ve mimari blueprint planlama." },
      { "title": "3. Kodlama & Test", "desc": "Modüler geliştirme ve otomatik birim testleri." },
      { "title": "Uç Durumlar (Edge)", "desc": "Hatalı kullanıcı girişlerini önceden engelleme." }
    ],
    "roadmapSvg": get_svg_for_week_8(38, "SDLC Yaşam Döngüsü ve Test"),
    "section1": {
      "title": "SDLC'nin 5 Temel Aşaması",
      "subtitle": "Plansız yazılan kod temelsiz inşa edilen binaya benzer:",
      "cards": [
        {
          "title": "Mühendislik Döngüsü",
          "icon": "📐",
          "desc": "Büyük yazılımlar adım adım inşa edilir:",
          "items": [
            { "bold": "1. Analiz", "text": "Kullanıcı ne istiyor? Problemin tanımı." },
            { "bold": "2. Tasarım", "text": "Ekran tasarımları ve algoritma şemaları." },
            { "bold": "3. Kodlama", "text": "Python ile modüler temiz kod yazımı." },
            { "bold": "4. Test (QA)", "text": "Tüm sınır değerlerin sınanması." },
            { "bold": "5. Dağıtım", "text": "Kullanıcıya sunma ve bakım." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Birim Testi (Unit Test) Mantığı",
      "subtitle": "Fonksiyonların doğru çalıştığını otomatik denetleme:",
      "codeSnippet": "# Birim Testi Örneği\ndef topla(a, b):\n    return a + b\n\n# Otomatik Doğrulama\nassert topla(2, 3) == 5, 'Hata: 2+3=5 olmalıdır!'\nassert topla(-1, 1) == 0, 'Hata: Negatif test başarısız!'\nprint('Tüm testler başarıyla geçti! ✓')",
      "codeTitle": "test_birim.py",
      "codeLang": "Python 3",
      "cards": [
        {
          "badge": "Kalite Güvence",
          "title": "Edge Case (Uç Durumlar)",
          "desc": "Yaş yerine '-5' giren, şifreyi boş basıp geçen kullanıcıları önceden yakalama sanatı.",
          "items": [
            { "bold": "assert Komutu", "text": "Şart yanlışsa programı anında uyarır." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kayıt Sistemi Test Senaryosu Yazımı",
      "subtitle": "Kullanıcı adı ve şifre kayıt modülü için 4 farklı test durumu hazırlama.",
      "steps": [
        { "title": "Başarılı Durum", "desc": "Geçerli isim ve 8 haneli şifre ile test edin." },
        { "title": "Kısa Şifre", "desc": "3 haneli şifre girildiğinde reddedildiğini teyit edin." },
        { "title": "Boş İsim", "desc": "İsim girilmediğinde uyarı verildiğini doğrulayın." }
      ],
      "criteria": [
        "En az 4 farklı test senaryosunun yazılması",
        "assert veya if kontrolleriyle otomatik sınanması",
        "Hata mesajlarının açıklayıcı olması"
      ]
    },
    "tips": {
      "safetyTitle": "Yazılım Kalite Kuralları",
      "safetyRules": [
        { "bold": "Önce Tasarla", "text": "Klavyeye dokunmadan önce kağıt üzerinde akış şemanı tamamla." }
      ],
      "myths": [
        { "wrong": "Test aşaması zaman kaybıdır.", "correct": "Test aşaması canlıya çıkıldığında milyonlarca dolarlık kayıpları önleyen en kritik adımdır." }
      ]
    },
    "quiz": {
      "question": "Yazılım geliştirme yaşam döngüsünde (SDLC) kod yazılmadan HEMEN ÖNCE gelen aşama hangisidir?",
      "options": [
        { "text": "Tasarım (Design)", "isCorrect": true },
        { "text": "Bakım (Maintenance)", "isCorrect": false },
        { "text": "Dağıtım (Deployment)", "isCorrect": false },
        { "text": "Pazarlama", "isCorrect": false }
      ],
      "explanation": "SDLC akışı: 1. Analiz -> 2. Tasarım -> 3. Kodlama şeklindedir."
    },
    "summary": {
      "keyPoints": [
        "Yazılım mühendisliği analiz, tasarım, kodlama, test ve dağıtım döngüsüdür.",
        "Otomatik birim testleri yazılımın sağlamlığını garanti eder."
      ],
      "nextWeek": "2. Dönem 2. Yazılı Sınavı Büyük Lise Hazırlık Tekrarı",
      "homework": "Hayalinizdeki bir uygulamanın 5 maddelik Gereksinim Listesini (Requirements) yazın."
    }
  },

  # 39. HAFTA
  {
    "week": 39,
    "date": "07 - 13 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Büyük Sınav & Lise Hazırlık",
    "unitBadge": "Büyük Sınav Tekrarı",
    "unitTheme": "unite-6",
    "title": "2. Dönem 2. Yazılı Sınavı ve Lise Hazırlık Tekrarı",
    "subtitle": "41 Haftalık Bilişim Yolculuğunun Zirvesi ve Liseye Güçlü Adım",
    "outcomeCode": "BTY.8.6.3",
    "targetSkill": "Kapsamlı Bilişim Yetkinliği & Sınav Değerlendirmesi",
    "curiosityQuestion": "Artık teknolojiye sadece ekrandan bakan bir tüketici değil, geleceği kodlayan bir mimarsınız!",
    "roadmap": [
      { "title": "Bilişimsel Düşünme & Big-O", "desc": "Algoritmik karmaşıklık ve arama türleri." },
      { "title": "Kriptoloji & Siber Güvenlik", "desc": "RSA, blokzincir ve güvenli şifreleme." },
      { "title": "Python Metin Kodlama", "desc": "Koşullar, döngüler, listeler, fonksiyonlar ve dosyalar." },
      { "title": "Yapay Zeka & Gelecek", "desc": "Makine öğrenmesi ve lisedeki bilişim kulüpleri." }
    ],
    "roadmapSvg": get_svg_for_week_8(39, "8. Sınıf Bilişim Zihin Haritası"),
    "section1": {
      "title": "Yıllık Müfredatın 6 Ana Taşı",
      "subtitle": "8. sınıf boyunca kazandığınız süper güçler:",
      "cards": [
        {
          "title": "Kazanım Haritası",
          "icon": "🏆",
          "desc": "Tüm yılın özeti:",
          "items": [
            { "bold": "1. Algoritmalar", "text": "Big-O, İkili Arama (Binary Search), Bubble Sort." },
            { "bold": "2. Kriptoloji", "text": "Asimetrik şifreleme ve blokzincir hash mantığı." },
            { "bold": "3. Python", "text": "Metin tabanlı programlama ile çalışan araçlar üretme." },
            { "bold": "4. Yapay Zeka", "text": "Bilgisayarlı görü ve model eğitimi." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Lisede Sizi Bekleyen Bilişim Dünyası",
      "subtitle": "Liseye tam donanımlı liderler olarak gidiyorsunuz:",
      "cards": [
        {
          "badge": "Lise Vizyonu",
          "title": "TEKNOFEST & Kulüpler",
          "desc": "Fen ve Anadolu liselerindeki robotik takımlarında, İHA yarışmalarında lider siz olacaksınız.",
          "items": [
            { "bold": "Üreten Gençlik", "text": "Türkiye Yüzyılı'nın milli yazılımlarını sizler yazacaksınız." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahta Büyük Deneme Maratonu",
      "subtitle": "Sınıf 4 takıma ayrılarak 10 karma yazılı sınav sorusunu süreye karşı tahtada çözer.",
      "steps": [
        { "title": "Takımları Kur", "desc": "Sözcüleri belirleyip tahtada yerinizi alın." },
        { "title": "Soruları Çöz", "desc": "Kod okuma ve algoritma analiz sorularını yanıtlayın." },
        { "title": "Şampiyonu Belirle", "desc": "Puanları toplayıp büyük finali kutlayın." }
      ],
      "criteria": [
        "Soru çözüm mantığının tahtada anlatılması",
        "Takım içi istişare ve hızlı karar alma",
        "Sınav stratejisi başarısı"
      ]
    },
    "tips": {
      "safetyTitle": "Final Taktikleri",
      "safetyRules": [
        { "bold": "Kod Okuma", "text": "Sorularda döngülerin adım sayılarını ve değişken değerlerini kenara yazarak takip et." }
      ],
      "myths": [
        { "wrong": "Ortaokul bilişimi lisede unutulur.", "correct": "Burada kazandığınız algoritmik düşünme hayat boyu her derste sizi öne geçirecektir." }
      ]
    },
    "quiz": {
      "question": "Aşağıdakilerden hangisi bir algoritmanın girdi boyutu arttıkça verimliliğini analiz eden matematiksel gösterimdir?",
      "options": [
        { "text": "Big-O Gösterimi (O(n))", "isCorrect": true },
        { "text": "ASCII Tablosu", "isCorrect": false },
        { "text": "IP Adresi", "isCorrect": false },
        { "text": "RGB Kodu", "isCorrect": false }
      ],
      "explanation": "Big-O gösterimi algoritmaların zaman ve bellek verimliliğini ölçen temel gösterimdir."
    },
    "summary": {
      "keyPoints": [
        "2. Dönem 2. yazılı sınavı ile 41 haftalık tüm müfredatı taçlandırdık.",
        "Lise seviyesinde bilgisayar bilimi ve yazılım temellerine ulaştık."
      ],
      "nextWeek": "8. Sınıf Capstone Mezuniyet Proje Sunumları (Pitching & Demo)",
      "homework": "Tüm yılın en sevdiğiniz konusunu 5. sınıf öğrencisine nasıl anlatacağınızı özetleyin."
    }
  },

  # 40. HAFTA
  {
    "week": 40,
    "date": "14 - 20 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Capstone & Mezuniyet",
    "unitBadge": "Mezuniyet Projesi",
    "unitTheme": "unite-6",
    "title": "8. Sınıf Capstone Mezuniyet Proje Sunumları",
    "subtitle": "Yıl Boyunca Üretilen Projelerin Sahneye Çıkış Anı (Pitching & Demo)",
    "outcomeCode": "BTY.8.6.4",
    "targetSkill": "Etkili Sunum (Pitching) & Canlı Yazılım Demosu",
    "curiosityQuestion": "Steve Jobs iPhone'u tanıtırken sadece slayt mı okudu yoksa sahnede telefonu canlı mı çalıştırdı?",
    "roadmap": [
      { "title": "3 Dakika Kuralı", "desc": "Kanca, problem, çözüm ve canlı demo zaman yönetimi." },
      { "title": "Canlı Demo (Live Demo)", "desc": "Kodları çalıştırıp çalışan ürünü gururla gösterme." },
      { "title": "Akran Değerlendirmesi", "desc": "Code review ve yapıcı geri bildirim kültürü." },
      { "title": "Gelecek Vizyonu", "desc": "Bu proje lisede nasıl büyütülebilir?" }
    ],
    "roadmapSvg": get_svg_for_week_8(40, "Capstone Proje Sunumu: 3 Dakika Kuralı"),
    "section1": {
      "title": "Etkili Pitching (Asansör Sunumu) Sanatı",
      "subtitle": "Dünyanın en iyi kodunu yazsanız bile anlatamazsanız sessiz kalır:",
      "cards": [
        {
          "title": "Sunumun 4 Adımı",
          "icon": "🎤",
          "desc": "3 dakikada dinleyiciyi büyüleme formülü:",
          "items": [
            { "bold": "1. Kanca (0-30 sn)", "text": "Çarpıcı bir soru veya istatistikle başla." },
            { "bold": "2. Çözüm (30-90 sn)", "text": "Yazdığın yazılım bu sorunu nasıl çözüyor?" },
            { "bold": "3. Canlı Demo (90-150 sn)", "text": "Kodları çalıştır, butonlara bas, ürünü göster!" },
            { "bold": "4. Gelecek (150-180 sn)", "text": "Liseye geçtiğinde projeni nasıl büyüteceksin?" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Akran Değerlendirmesi (Code Review)",
      "subtitle": "Yazılımcılar birbirini eleştirerek mükemmelleşir:",
      "cards": [
        {
          "badge": "Jüri Ölçütleri",
          "title": "3 Altın Kriter",
          "desc": "1) Fikir özgün mü? 2) Kod hatasız çalışıyor mu? 3) Sunum heyecan verici mi?",
          "items": [
            { "bold": "Geri Bildirim", "text": "Eleştiriler bir sonraki sürümü kusursuz yapmak içindir." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sahne Sizin! Canlı Capstone Sunumları",
      "subtitle": "Her öğrenci akıllı tahtaya bağlanarak yılın projesini 3 dakikada sınıfa sunar.",
      "steps": [
        { "title": "Tahtaya Bağlan", "desc": "Python kodunuzu akıllı tahta ekranında açın." },
        { "title": "Çalıştır", "desc": "Canlı olarak girdileri verip çıktıyı gösterin." },
        { "title": "Soruları Yanıtla", "desc": "Arkadaşlarınızın sorularına mimari cevaplar verin." }
      ],
      "criteria": [
        "Canlı demonun hatasız çalışması",
        "Süre sınırına (3 dakika) uyulması",
        "Sunum heyecanı ve özgüven"
      ]
    },
    "tips": {
      "safetyTitle": "Sunum Tavsiyeleri",
      "safetyRules": [
        { "bold": "Slaytı Düz Okuma", "text": "Ekrandaki yazıları kelime kelime okumayın; projeyi neden sevdiğinizi anlatın." }
      ],
      "myths": [
        { "wrong": "Sunumda hata çıkarsa her şey mahvolur.", "correct": "Canlı demoda hata çıkabilir; soğukkanlılıkla hatayı açıklamak profesyonelliktir." }
      ]
    },
    "quiz": {
      "question": "Bir yazılım projesi sunumunda projenin gerçekten çalıştığını ispatlayan en can alıcı bölüm hangisidir?",
      "options": [
        { "text": "Canlı Demo (Live Demo / Kodun Çalıştırılması)", "isCorrect": true },
        { "text": "Uzun metinli slayt okumak", "isCorrect": false },
        { "text": "Sadece logonun rengini anlatmak", "isCorrect": false },
        { "text": "Sunumu hemen bitirmek", "isCorrect": false }
      ],
      "explanation": "Canlı demo, yazılımın bir hayal olmadığını, çalışan gerçek bir ürün olduğunu ispatlar."
    },
    "summary": {
      "keyPoints": [
        "Capstone sunumlarıyla ortaokul bilişim yolculuğumuzun zirvesini yaşadık.",
        "Canlı demo, etkili pitching ve akran değerlendirmesi kültürünü edindik."
      ],
      "nextWeek": "Yıl Sonu Bilişim Şenliği: Ortaokul Mezuniyeti ve Bilişim Sertifikaları",
      "homework": "Projenizin kodlarını GitHub veya güvenli bir diske 'Capstone_Final' adıyla yedekleyin."
    }
  },

  # 41. HAFTA
  {
    "week": 41,
    "date": "21 - 25 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Mezuniyet & Gelecek Vizyonu",
    "unitBadge": "Ortaokul Mezuniyeti",
    "unitTheme": "unite-6",
    "title": "Yıl Sonu Bilişim Şenliği: Ortaokul Mezuniyeti ve Gelecek",
    "subtitle": "Bir Çağı Kapattık, Liseye Bilişim Liderleri Olarak Uğurlanıyoruz!",
    "outcomeCode": "BTY.8.6.5",
    "targetSkill": "Kariyer Vizyonu & Yaşam Boyu Öğrenme",
    "curiosityQuestion": "Ortaokul bitti ama bilişim serüveniniz asıl şimdi başlıyor; geleceğin hangi teknolojisini siz inşa edeceksiniz?",
    "roadmap": [
      { "title": "Büyük Yolculuk", "desc": "41 haftalık bilişim ve yazılım maratonunun zaferi." },
      { "title": "Lisede Kariyer Yolları", "desc": "Yapay zeka, siber savunma, oyun geliştirme, uzay yazılımları." },
      { "title": "Mezuniyet Sertifikası", "desc": "Türkiye Yüzyılı Genç Bilişimcisi Başarı Belgesi." },
      { "title": "Veda ve Geleceğe Adım", "desc": "Bilim ve aklın rehberliğinde aydınlık bir gelecek." }
    ],
    "roadmapSvg": get_svg_for_week_8_part4(41, "Ortaokul Bilişim Mezuniyeti"),
    "section1": {
      "title": "Tebrikler Genç Bilişimciler, Başardınız!",
      "subtitle": "Tam 41 haftalık mühendislik yolculuğu tamamlandı:",
      "cards": [
        {
          "title": "Geleceğin Meslekleri",
          "icon": "🎓",
          "desc": "Lisede ve üniversitede sizi bekleyen fırsatlar:",
          "items": [
            { "bold": "Yapay Zeka Mühendisliği", "text": "Derin öğrenme modelleri ve otonom sistemler." },
            { "bold": "Siber Güvenlik Uzmanlığı", "text": "Milli savunmanın dijital kalkanı olmak." },
            { "bold": "Oyun Tasarımı (Game Dev)", "text": "Milyonlarca gencin oynayacağı dünyaları kodlamak." },
            { "bold": "Uzay ve Havacılık Yazılımları", "text": "Milli uydularımız ve İHA'larımız için gömülü sistemler." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Yaşam Boyu Öğrenme (Lifelong Learning)",
      "subtitle": "Yazılımcının öğrenme yolculuğu asla bitmez:",
      "cards": [
        {
          "badge": "Veda Mesajı",
          "title": "Gelecek Sizin Ellerinizde",
          "desc": "Merak etmeye, yeni diller denemeye ve problem çözmeye devam ettiğiniz sürece geleceği siz şekillendireceksiniz.",
          "items": [
            { "bold": "Öğretmeninizden", "text": "'Yolunuz açık, kodlarınız hatasız olsun!'" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Ortaokul Bilişim Yıllığı ve Veda Panosu",
      "subtitle": "Her öğrenci akıllı tahtadaki dijital panoya en unutulmaz bilişim anısını ve lise hedefini yazar.",
      "steps": [
        { "title": "Tahtaya Gel", "desc": "Dijital mezuniyet panosunda bir kart seçin." },
        { "title": "Mesajını Yaz", "desc": "Hedeflediğiniz lise ve hayalinizdeki yazılımı yazın." },
        { "title": "Fotoğraf Çekimi", "desc": "Tüm sınıf mezuniyet belgesiyle hatıra fotoğrafı çekilin." }
      ],
      "criteria": [
        "Gelecek vizyonu ve hedef belirleme",
        "Sınıf içi dayanışma ve veda ruhu",
        "Dijital panonun tamamlanması"
      ]
    },
    "tips": {
      "safetyTitle": "Yaz Tatili Tavsiyeleri",
      "safetyRules": [
        { "bold": "Kodlamaya Ara Verme", "text": "Yazın haftada en az bir saat açık kaynaklı bir Python projesi üzerinde çalışın." }
      ],
      "myths": [
        { "wrong": "Ortaokul bitince bilişim biter.", "correct": "Bilişim bir ders değil, tüm hayatınızı kolaylaştıracak evrensel bir düşünme biçimidir." }
      ]
    },
    "quiz": {
      "question": "Ortaokul boyunca edindiğiniz bilişimsel düşünme becerilerinin hayatınızdaki en kalıcı faydası nedir?",
      "options": [
        { "text": "Karşılaşılan her karmaşık problemi parçalara bölüp mantıkla çözebilme zihniyeti kazanmak", "isCorrect": true },
        { "text": "Sadece bilgisayar sınavından 100 almak", "isCorrect": false },
        { "text": "Daha hızlı oyun oynamak", "isCorrect": false },
        { "text": "Hızlı yazı yazmak", "isCorrect": false }
      ],
      "explanation": "Bilişimsel düşünmenin amacı, mesleğiniz ne olursa olsun karmaşık hayat problemlerini analitik zihinle çözebilmektir."
    },
    "summary": {
      "keyPoints": [
        "41 haftalık 8. Sınıf Bilişim Teknolojileri ve Yazılım dersini üstün başarıyla tamamladık.",
        "Tüm mezunlarımıza lise hayatlarında ve gelecekte sonsuz başarılar dileriz!"
      ],
      "nextWeek": "Lise Bilgisayar Bilimi Dersinde Görüşmek Üzere!",
      "homework": "Yaz tatilinde kendinize ait ilk açık kaynaklı Python projesini yazıp dünyayla paylaşın!"
    }
  }
]
