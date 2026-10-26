#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MEB 4. Sınıf Bilişim Teknolojileri ve Yazılım
Türkiye Yüzyılı Maarif Modeli (2026-2027)
1. Dönem 1. Kısım: Hafta 1 - 10
Öğretmen: Vahit Keskin
"""

def get_svg_for_week_4(week_num, title):
    # Tematik Zümrüt Yeşili & Canlı İlkokul Renkleri
    if week_num == 1:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#064e3b" opacity="0.3"/>
  <rect x="25" y="25" width="400" height="270" rx="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="60" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Dijital Teknolojiler & Akıllı Cihazlar</text>
  
  <g transform="translate(60, 100)">
    <rect width="90" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect x="35" y="65" width="20" height="20" fill="#334155"/>
    <rect x="20" y="85" width="50" height="6" rx="3" fill="#64748b"/>
    <text x="45" y="40" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Masaüstü</text>
  </g>

  <g transform="translate(180, 100)">
    <rect width="90" height="60" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <path d="M-10,60 L100,60 L90,75 L0,75 Z" fill="#334155" stroke="#10b981" stroke-width="1.5"/>
    <text x="45" y="38" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Dizüstü</text>
  </g>

  <g transform="translate(300, 100)">
    <rect width="80" height="110" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="40" cy="98" r="6" fill="#f59e0b" opacity="0.5"/>
    <text x="40" y="45" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Tablet &</text>
    <text x="40" y="62" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">Telefon</text>
  </g>

  <circle cx="225" cy="245" r="30" fill="#10b981" opacity="0.2"/>
  <text x="225" y="250" text-anchor="middle" fill="#6ee7b7" font-size="13" font-weight="bold">Hayatımızı Kolaylaştıran Bilişim</text>
</svg>'''
    elif week_num == 2:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Bilgisayarın Donanım Organları</text>
  
  <!-- Giriş Birimleri -->
  <rect x="40" y="80" width="160" height="180" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="120" y="110" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Giriş Birimleri</text>
  <text x="60" y="145" fill="#cbd5e1" font-size="12">⌨️ Klavye (Bilgi Yaz)</text>
  <text x="60" y="175" fill="#cbd5e1" font-size="12">🖱️ Fare (Komut Ver)</text>
  <text x="60" y="205" fill="#cbd5e1" font-size="12">🎤 Mikrofon (Ses Gönder)</text>
  <text x="60" y="235" fill="#cbd5e1" font-size="12">📷 Kamera (Görüntü Al)</text>

  <!-- Çıkış Birimleri -->
  <rect x="250" y="80" width="160" height="180" rx="12" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="330" y="110" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="bold">Çıkış Birimleri</text>
  <text x="270" y="145" fill="#cbd5e1" font-size="12">🖥️ Ekran (Görüntü Göster)</text>
  <text x="270" y="175" fill="#cbd5e1" font-size="12">🔊 Hoparlör (Ses Çıkar)</text>
  <text x="270" y="205" fill="#cbd5e1" font-size="12">🖨️ Yazıcı (Kâğıda Bas)</text>
  <text x="270" y="235" fill="#cbd5e1" font-size="12">🎧 Kulaklık (Sesi Dinle)</text>

  <path d="M205,170 L245,170" stroke="#10b981" stroke-width="3" stroke-dasharray="4"/>
  <text x="225" y="285" text-anchor="middle" fill="#94a3b8" font-size="12">Merkez: Kasa / İşlemci (Beyin)</text>
</svg>'''
    elif week_num == 3:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Yazılım & İşletim Sistemi (Pardus)</text>

  <rect x="50" y="80" width="350" height="60" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="225" y="115" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">👤 Kullanıcı (Biz)</text>

  <path d="M225,140 L225,170" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow)"/>

  <rect x="50" y="170" width="350" height="60" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="205" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🐆 İşletim Sistemi (Milli Gücümüz: PARDUS)</text>

  <path d="M225,230 L225,260" stroke="#10b981" stroke-width="3"/>

  <rect x="50" y="260" width="350" height="40" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="225" y="285" text-anchor="middle" fill="#94a3b8" font-size="12">💻 Donanım (Ekran, Klavye, Bellek)</text>
</svg>'''
    elif week_num == 4:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Dosya ve Klasör Düzeni</text>
  
  <g transform="translate(60, 90)">
    <path d="M0,10 L30,10 L45,25 L120,25 L120,90 L0,90 Z" fill="#f59e0b" opacity="0.85"/>
    <text x="60" y="60" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">📁 Derslerim</text>
  </g>

  <g transform="translate(230, 90)">
    <path d="M0,10 L30,10 L45,25 L120,25 L120,90 L0,90 Z" fill="#10b981" opacity="0.85"/>
    <text x="60" y="60" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">📁 Resimlerim</text>
  </g>

  <g transform="translate(60, 200)">
    <rect width="70" height="85" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="35" y="45" text-anchor="middle" font-size="22">📄</text>
    <text x="35" y="70" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">siir.txt</text>
  </g>

  <g transform="translate(180, 200)">
    <rect width="70" height="85" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
    <text x="35" y="45" text-anchor="middle" font-size="22">🖼️</text>
    <text x="35" y="70" text-anchor="middle" fill="#f43f5e" font-size="10" font-weight="bold">manzara.jpg</text>
  </g>

  <g transform="translate(300, 200)">
    <rect width="70" height="85" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="35" y="45" text-anchor="middle" font-size="22">🎵</text>
    <text x="35" y="70" text-anchor="middle" fill="#a855f7" font-size="10" font-weight="bold">sarki.mp3</text>
  </g>
</svg>'''
    elif week_num == 5:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Klavye ve Fare Sihirbazı</text>

  <!-- Klavye Temsili -->
  <rect x="50" y="80" width="350" height="130" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <rect x="70" y="95" width="40" height="30" rx="4" fill="#334155"/><text x="90" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">Q</text>
  <rect x="120" y="95" width="40" height="30" rx="4" fill="#334155"/><text x="140" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">W</text>
  <rect x="170" y="95" width="40" height="30" rx="4" fill="#334155"/><text x="190" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">E</text>
  <rect x="220" y="95" width="40" height="30" rx="4" fill="#334155"/><text x="240" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">R</text>
  <rect x="270" y="95" width="40" height="30" rx="4" fill="#334155"/><text x="290" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">T</text>
  <rect x="320" y="95" width="60" height="30" rx="4" fill="#ef4444"/><text x="350" y="115" fill="#ffffff" font-size="10" text-anchor="middle">Sil (Del)</text>

  <rect x="130" y="145" width="180" height="30" rx="6" fill="#10b981"/><text x="220" y="165" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">Boşluk (Space Bar)</text>

  <!-- Fare Tıklama Rehberi -->
  <g transform="translate(160, 230)">
    <rect width="60" height="70" rx="20" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
    <path d="M0,25 L60,25" stroke="#64748b"/>
    <path d="M30,0 L30,25" stroke="#64748b"/>
    <text x="15" y="18" fill="#38bdf8" font-size="9" text-anchor="middle">Sol</text>
    <text x="45" y="18" fill="#f43f5e" font-size="9" text-anchor="middle">Sağ</text>
  </g>
  <text x="250" y="260" fill="#cbd5e1" font-size="12">🖱️ Sol Tık: Seç & Aç</text>
  <text x="250" y="285" fill="#cbd5e1" font-size="12">🖱️ Sağ Tık: Seçenekler Menüsü</text>
</svg>'''
    elif week_num == 6:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Ergonomi & Sağlıklı Bilgisayar Duruşu</text>
  
  <g transform="translate(60, 90)">
    <circle cx="50" cy="30" r="18" fill="#f59e0b"/>
    <path d="M50,48 L50,110 L10,150 M50,80 L80,95 L95,130" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <path d="M50,110 L85,115 L85,160" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
    <text x="50" y="190" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">✅ Dik Otur (90° Kuralı)</text>
  </g>

  <g transform="translate(260, 90)">
    <rect width="130" height="90" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="65" y="35" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">👀 Göz Hizası</text>
    <text x="65" y="60" text-anchor="middle" fill="#cbd5e1" font-size="11">50 - 70 cm mesafe</text>
    <text x="65" y="78" text-anchor="middle" fill="#f59e0b" font-size="11">Ekran üstü gözle bir</text>
    
    <rect y="120" width="130" height="55" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
    <text x="65" y="145" text-anchor="middle" fill="#a7f3d0" font-size="12" font-weight="bold">⏰ 20-20-20 Kuralı</text>
    <text x="65" y="162" text-anchor="middle" fill="#f8fafc" font-size="10">20 dk'da bir 20 sn mola</text>
  </g>
</svg>'''
    elif week_num == 7:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#e11d48" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#fb7185" font-size="16" font-weight="bold">29 Ekim Cumhuriyet Bayramı Dijital Afiş</text>
  
  <rect x="50" y="80" width="350" height="180" rx="16" fill="#be123c"/>
  <circle cx="180" cy="170" r="45" fill="#ffffff"/>
  <circle cx="192" cy="170" r="36" fill="#be123c"/>
  <polygon points="230,150 236,165 252,165 240,175 244,190 230,180 216,190 220,175 208,165 224,165" fill="#ffffff"/>
  
  <text x="225" y="235" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">YAŞASIN CUMHURİYET!</text>
  <text x="225" y="290" text-anchor="middle" fill="#cbd5e1" font-size="13">Bilişim Araçlarıyla Milli Değerlerimizi Tasarlıyoruz</text>
</svg>'''
    elif week_num == 8:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">1. Dönem 1. Yazılı Sınav Tekrarı</text>
  
  <g transform="translate(60, 85)">
    <circle cx="60" cy="50" r="35" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="60" y="55" text-anchor="middle" font-size="28">💻</text>
    <text x="60" y="105" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Donanım</text>
  </g>

  <g transform="translate(270, 85)">
    <circle cx="60" cy="50" r="35" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="60" y="55" text-anchor="middle" font-size="28">⚙️</text>
    <text x="60" y="105" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Yazılım</text>
  </g>

  <g transform="translate(60, 195)">
    <circle cx="60" cy="45" r="35" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="60" y="50" text-anchor="middle" font-size="28">📁</text>
    <text x="60" y="100" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">Dosya Düzeni</text>
  </g>

  <g transform="translate(270, 195)">
    <circle cx="60" cy="45" r="35" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="60" y="50" text-anchor="middle" font-size="28">💺</text>
    <text x="60" y="100" text-anchor="middle" fill="#a855f7" font-size="12" font-weight="bold">Ergonomi</text>
  </g>
</svg>'''
    elif week_num == 9:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Güvenli İnternet: Şifre Kalkanı</text>
  
  <g transform="translate(175, 75)">
    <path d="M50,10 L95,30 L95,90 Q50,130 50,130 Q5,90 5,30 Z" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
    <text x="50" y="70" text-anchor="middle" font-size="34">🔒</text>
  </g>

  <rect x="60" y="215" width="330" height="75" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="225" y="240" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Güçlü Şifre Kuralı (En az 8 Karakter)</text>
  <text x="225" y="260" text-anchor="middle" fill="#cbd5e1" font-size="11">Büyük Harf (A) + Küçük Harf (a) + Rakam (9) + Sembol (!)</text>
  <text x="225" y="278" text-anchor="middle" fill="#f59e0b" font-size="10">Örn: Bilgi*2026</text>
</svg>'''
    elif week_num == 10:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="225" y="50" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold">1. Dönem Ara Tatili: Kodlama Macerası</text>

  <g transform="translate(75, 90)">
    <rect width="80" height="80" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="40" y="48" text-anchor="middle" font-size="32">🧩</text>
    <text x="40" y="105" text-anchor="middle" fill="#10b981" font-size="12" font-weight="bold">Bulmaca</text>
  </g>

  <g transform="translate(185, 90)">
    <rect width="80" height="80" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="40" y="48" text-anchor="middle" font-size="32">🤖</text>
    <text x="40" y="105" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Robotik</text>
  </g>

  <g transform="translate(295, 90)">
    <rect width="80" height="80" rx="12" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="40" y="48" text-anchor="middle" font-size="32">🎮</text>
    <text x="40" y="105" text-anchor="middle" fill="#a855f7" font-size="12" font-weight="bold">Oyunlar</text>
  </g>

  <rect x="50" y="225" width="350" height="55" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
  <text x="225" y="250" text-anchor="middle" fill="#c7d2fe" font-size="13" font-weight="bold">Tatil Görevi: Ekransız Aile Algoritma Oyunu</text>
  <text x="225" y="268" text-anchor="middle" fill="#cbd5e1" font-size="11">Gözleri kapalı robot arkadaşına sesli komutlarla rehberlik et!</text>
</svg>'''
    else:
        return f'''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="60" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">{title}</text>
  <circle cx="225" cy="160" r="45" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="170" text-anchor="middle" font-size="34">🚀</text>
  <text x="225" y="250" text-anchor="middle" fill="#94a3b8" font-size="13">MEB 4. Sınıf Bilişim Teknolojileri ve Yazılım</text>
</svg>'''

WEEKS_1_10_GRADE4 = [
  # 1. HAFTA
  {
    "week": 1,
    "date": "14 - 20 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Dijital Dünyanın Kapılarını Aralıyorum",
    "unitBadge": "1. Ünite: Başlangıç",
    "unitTheme": "unite-1",
    "title": "Dijital Teknolojiyle Tanışıyorum",
    "subtitle": "Akıllı Cihazlar, Bilgisayarlar ve Hayatımızı Kolaylaştıran Teknolojiler",
    "outcomeCode": "BTY.4.1.1",
    "targetSkill": "Teknolojiyi Tanıma & Amaçlı Kullanma",
    "curiosityQuestion": "Eğer evimizdeki buzdolabı, lamba ve televizyon birbiriyle konuşabilseydi bize ne söylerlerdi?",
    "roadmap": [
      { "title": "Bilişim Nedir?", "desc": "Bilgi ve iletişim kelimelerinin birleşimiyle doğan teknoloji dünyası." },
      { "title": "Akıllı Cihazlar", "desc": "Telefon, tablet, robot süpürge ve akıllı saatlerin çalışma mantığı." },
      { "title": "Tüketen Değil Üreten Olmak", "desc": "Sadece oyun oynayan değil, geleceğin teknolojisini üreten çocuk olma vizyonu." },
      { "title": "Sınıf Kuralları", "desc": "Bilişim laboratuvarında düzen, temizlik ve güvenli çalışma ortamı." }
    ],
    "roadmapSvg": get_svg_for_week_4(1, "Dijital Teknolojiyle Tanışıyorum"),
    "section1": {
      "title": "Dijital Cihazlar Hayatımızı Nasıl Değiştirdi?",
      "subtitle": "Geçmişten günümüze teknolojinin hızlı gelişimi ve sağladığı kolaylıklar.",
      "cards": [
        {
          "title": "Akıllı Cihazların Süper Güçleri",
          "icon": "🌟",
          "desc": "Bilgisayarlar çok hızlı hesap yapabilir, fotoğraflarımızı saklayabilir ve bizi dünyadaki tüm bilgiye ulaştırabilir.",
          "items": [
            { "bold": "Hızlı İletişim", "text": "Dünyanın öbür ucundaki akrabalarımızla görüntülü konuşabiliyoruz." },
            { "bold": "Eğlenceli Öğrenme", "text": "İnteraktif haritalar, uzay simülasyonları ve eğitici oyunlarla öğreniyoruz." },
            { "bold": "Hayatı Kolaylaştırma", "text": "Akıllı lambalar ve navigasyon ile enerji ve zaman tasarrufu yapıyoruz." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Farklı Türde Bilgisayarlar",
      "subtitle": "Her bilgisayar aynı görünmez; ihtiyaca göre farklı boyutta cihazlar vardır.",
      "cards": [
        {
          "badge": "Masaüstü (PC)",
          "title": "Masaüstü Bilgisayar",
          "desc": "Kasa, monitör, klavye ve fare parçalarından oluşur. Sabit durur, yüksek güç gerektiren işlerde kullanılır.",
          "items": [
            { "bold": "Avantajı", "text": "Geniş ekran, güçlü işlemci ve uzun süreli dayanıklılık." }
          ]
        },
        {
          "badge": "Dizüstü (Laptop)",
          "title": "Dizüstü Bilgisayar",
          "desc": "Ekranı, klavyesi ve pili tek gövdede birleşir. Çantanıza koyup her yere götürebilirsiniz.",
          "items": [
            { "bold": "Avantajı", "text": "Taşınabilir olması ve elektrik kesilse bile pille çalışabilmesi." }
          ]
        },
        {
          "badge": "Mobil Cihazlar",
          "title": "Tablet & Akıllı Telefon",
          "desc": "Dokunmatik ekranıyla çalışan, cebimize veya çantamıza sığan hafif ve pratik bilgisayarlar.",
          "items": [
            { "bold": "Avantajı", "text": "Dokunmatik kolay kontrol, kamera ve her an internet erişimi." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Benim Süper Akıllı Cihaz Tasarımım",
      "subtitle": "Evinizde veya okulunuzda bir sorunu çözen akıllı bir cihaz hayal edin ve resmedin.",
      "steps": [
        { "title": "Sorunu Keşfet", "desc": "Örn: Sabah yataktan zor kalkmak veya okul çantasında kitap unutmak." },
        { "title": "Cihazına İsim Ver", "desc": "Örn: 'Çanta-Savar 3000' veya 'Akıllı Çalar Yastık'." },
        { "title": "Özelliklerini Listele", "desc": "Hangi sensörleri var? Bize nasıl yardım ediyor? 3 maddede anlatın." }
      ],
      "criteria": [
        "Günlük hayatı kolaylaştıran özgün bir fikir geliştirme",
        "Cihazın adını ve görevini net açıklayabilme",
        "Arkadaşlarına saygıyla sunum yapma"
      ]
    },
    "tips": {
      "safetyTitle": "Bilişim Laboratuvarı Güvenlik Kuralları",
      "safetyRules": [
        { "bold": "Yiyecek ve İçecek Yasak", "text": "Klavye ve cihazların üzerine sıvı dökülmemesi için sınıfa su/içecek getirilmez." },
        { "bold": "Kablolarla Oynamayın", "text": "Priz ve elektrik kabloları tehlikeli olabilir, asla çekilmemelidir." },
        { "bold": "Öğretmen Talimatı", "text": "Bilgisayarlar öğretmen 'Açabilirsiniz' dediğinde açılır ve düzenli kapatılır." }
      ],
      "myths": [
        { "wrong": "Bilgisayarlar kendi kendine her şeyi düşünebilir.", "correct": "Bilgisayarlar sadece insanların yazdığı yazılımları ve komutları çalıştırır." },
        { "wrong": "Sadece oyun oynayan biri bilişim uzmanı olur.", "correct": "Bilişim uzmanı olmak için mantık, kodlama ve üretme merakı gerekir." }
      ]
    },
    "quiz": {
      "question": "Aşağıdakilerden hangisi taşınabilir, ekranı katlanabilen ve pille çalışan bir bilgisayar türüdür?",
      "options": [
        { "text": "A) Masaüstü Bilgisayar (Kasa)", "isCorrect": False },
        { "text": "B) Dizüstü Bilgisayar (Laptop)", "isCorrect": True },
        { "text": "C) Televizyon Ekranı", "isCorrect": False },
        { "text": "D) Fotokopi Makinesi", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Dizüstü (Laptop) bilgisayarlar ekran, klavye ve pili bir arada barındırarak kolayca taşınabilir."
    },
    "summaryRules": [
      { "bold": "Bilişim", "text": "Hayatımızın her alanında işlerimizi kolaylaştıran teknolojiler bütünüdür." },
      { "bold": "Cihaz Çeşitliliği", "text": "Masaüstü, dizüstü, tablet ve akıllı telefonlar farklı ihtiyaçlara hizmet eder." },
      { "bold": "Üreten Çocuklar", "text": "Bizler sadece ekran izleyen değil, teknolojiyle yeni projeler üreten bireyleriz." }
    ],
    "homework": "Evinizdeki akıllı cihazları (telefon, robot süpürge, TV vb.) sayın ve bir kâğıda en çok sevdiğiniz 3 tanesini çizin.",
    "nextWeekPreview": "Bilgisayarın Organları: Donanım Dünyası - Bilgisayarın içine bakıp işlemciyi ve parçaları keşfedeceğiz!"
  },

  # 2. HAFTA
  {
    "week": 2,
    "date": "21 - 27 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Dijital Dünyanın Kapılarını Aralıyorum",
    "unitBadge": "1. Ünite: Donanım",
    "unitTheme": "unite-1",
    "title": "Bilgisayarın Organları: Donanım Dünyası",
    "subtitle": "Giriş ve Çıkış Birimleri, Kasa İçi Parçalar ve İnsan Vücudu Benzetimi",
    "outcomeCode": "BTY.4.1.2",
    "targetSkill": "Donanım Birimlerini Sınıflandırma",
    "curiosityQuestion": "İnsan gözleriyle görür ve elleriyle yazar; peki bilgisayar dünyayı nasıl görür ve sesini bize nasıl duyurur?",
    "roadmap": [
      { "title": "Donanım Nedir?", "desc": "Bilgisayarın dokunabildiğimiz, gözle görebildiğimiz tüm fiziksel parçaları." },
      { "title": "Giriş Birimleri", "desc": "Bilgisayara bilgi, ses ve resim gönderen organlar (Klavye, Fare, Mikrofon, Kamera)." },
      { "title": "Çıkış Birimleri", "desc": "Bilgisayarın bize bilgi sunduğu organlar (Ekran, Hoparlör, Yazıcı, Kulaklık)." },
      { "title": "Merkezi İşlemci (CPU)", "desc": "Bilgisayarın beyni: Bütün kararları saniyeler içinde alan süper çip." }
    ],
    "roadmapSvg": get_svg_for_week_4(2, "Bilgisayarın Organları: Donanım Dünyası"),
    "section1": {
      "title": "Giriş ve Çıkış Birimleri Arasındaki Fark",
      "subtitle": "Bilgi içeri mi giriyor, dışarı mı çıkıyor? İşte sihirli soru!",
      "cards": [
        {
          "title": "Giriş ve Çıkış Mantığı",
          "icon": "🔄",
          "desc": "Bilgisayara bir şey anlatmak için giriş birimlerini, bilgisayarın bize yanıt vermesi için çıkış birimlerini kullanırız.",
          "items": [
            { "bold": "Giriş (Input)", "text": "Klavye ile harf yazmak, fare ile tıklamak, mikrofonla şarkı söylemek." },
            { "bold": "İşleme (CPU)", "text": "İşlemci gelen komutları anlar, hesaplar ve sonuca dönüştürür." },
            { "bold": "Çıkış (Output)", "text": "Ekranda resim görmek, hoparlörden müziği duymak, yazıcıdan çıktı almak." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Donanımları Yakından Tanıyalım",
      "subtitle": "Sınıfta her gün kullandığımız temel donanım aygıtları:",
      "cards": [
        {
          "badge": "Giriş",
          "title": "Klavye ve Fare",
          "desc": "Klavye parmaklarımızla harf ve sayı girmemizi sağlar. Fare ise ekrandaki ok işaretini yönetir.",
          "items": [
            { "bold": "Klavye", "text": "F ve Q klavye türleri vardır; Türkçe için F klavye çok hızlıdır." }
          ]
        },
        {
          "badge": "Çıkış",
          "title": "Monitör ve Hoparlör",
          "desc": "Monitör (ekran) renkli piksellerle görüntü oluşturur. Hoparlör ise dijital sesleri kulaklarımıza ulaştırır.",
          "items": [
            { "bold": "Ekran", "text": "Gözlerimizi yormamak için parlaklığı dengeli ayarlanmalıdır." }
          ]
        },
        {
          "badge": "Kasa İçi",
          "title": "İşlemci ve Sabit Disk",
          "desc": "İşlemci (CPU) bilgisayarın beynidir. Sabit Disk (Hard Disk/SSD) ise fotoğrafları ve oyunları saklayan kütüphanedir.",
          "items": [
            { "bold": "Kapasite", "text": "Disk ne kadar büyükse o kadar çok oyun ve çizim saklayabiliriz." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Donanım Sepeti Oyunu",
      "subtitle": "Öğretmeninizin söylediği donanım biriminin Giriş mi yoksa Çıkış mı olduğunu bulun!",
      "steps": [
        { "title": "Birimleri Ayır", "desc": "Tahtadaki iki kutuya (Giriş Kutusu & Çıkış Kutusu) donanım kartlarını yerleştirin." },
        { "title": "Zor Soru: Dokunmatik Ekran", "desc": "Dokunmatik ekran hem görüntü verdiği hem de dokunarak komut aldığı için çift yönlüdür!" },
        { "title": "Grup Puanlaması", "desc": "Doğru eşleştiren öğrenci grubuna 'Donanım Ustası' yıldızı verilir." }
      ],
      "criteria": [
        "Donanımların işlevini doğru kavrama",
        "Giriş ve çıkış birimlerini hatasız ayırt etme",
        "Takım çalışmasına aktif katılma"
      ]
    },
    "tips": {
      "safetyTitle": "Donanım Bakımı ve Korunması",
      "safetyRules": [
        { "bold": "Ekranı Elle Silmeyin", "text": "Monitör ekranına parmakla sertçe bastırılmaz; özel mikrofiber bezle silinir." },
        { "bold": "Fareyi Nazik Kullanın", "text": "Fare tuşlarına çok sert vurulmaz, fare altlığı (mousepad) üzerinde kaydırılır." },
        { "bold": "Hava Kanallarını Kapatmayın", "text": "Bilgisayar kasasının arkasındaki hava delikleri kapanırsa cihaz aşırı ısınabilir." }
      ],
      "myths": [
        { "wrong": "Ekran kapandığında bilgisayarın içindeki bütün bilgiler silinir.", "correct": "Hayır, bilgiler sabit diskte (SSD) güvenle saklanır; ekran sadece göstergedir." },
        { "wrong": "Yazıcı bir giriş birimidir.", "correct": "Yazıcı bilgiyi kâğıda aktardığı için kesinlikle bir ÇIKIŞ birimidir." }
      ]
    },
    "quiz": {
      "question": "Bilgisayara sesimizi kaydetmek ve mikrofondan konuşmak istediğimizde hangi tür donanım kullanmış oluruz?",
      "options": [
        { "text": "A) Çıkış Birimi", "isCorrect": False },
        { "text": "B) Giriş Birimi", "isCorrect": True },
        { "text": "C) Yazıcı", "isCorrect": False },
        { "text": "D) Hoparlör", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Mikrofon dışarıdaki ses dalgalarını bilgisayarın içine aktardığı için bir GİRİŞ birimidir."
    },
    "summaryRules": [
      { "bold": "Donanım", "text": "Bilgisayarın elle tutulup gözle görülebilen somut parçalarıdır." },
      { "bold": "Giriş Organları", "text": "Klavye, fare, kamera ve mikrofon bilgisayara bilgi yollar." },
      { "bold": "Çıkış Organları", "text": "Ekran, hoparlör ve yazıcı bilgisayardaki sonucu bize sunar." }
    ],
    "homework": "Evinizdeki bilgisayarın parçalarını inceleyin. Hangisi giriş, hangisi çıkış birimi? 4 tanesini defterinize yazın.",
    "nextWeekPreview": "Yazılım Ne İşe Yarar? İşletim Sistemleri & Milli İşletim Sistemimiz PARDUS ile tanışacağız!"
  },

  # 3. HAFTA
  {
    "week": 3,
    "date": "28 Eylül - 04 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Dijital Dünyanın Kapılarını Aralıyorum",
    "unitBadge": "1. Ünite: Yazılım",
    "unitTheme": "unite-1",
    "title": "Yazılım Ne İşe Yarar? İşletim Sistemleri & PARDUS",
    "subtitle": "Donanımı Canlandıran Ruh: Yazılımlar ve Milli Gururumuz PARDUS",
    "outcomeCode": "BTY.4.1.3",
    "targetSkill": "Yazılım Türlerini ve İşletim Sistemini Anlama",
    "curiosityQuestion": "İçi boş bir akıllı telefon veya bilgisayar donanımı, içine hiçbir program yüklenmezse ne işe yarar?",
    "roadmap": [
      { "title": "Yazılım Nedir?", "desc": "Donanıma ne yapması gerektiğini söyleyen kodlar, komutlar ve programlar." },
      { "title": "İşletim Sistemi", "desc": "Bilgisayar açılır açılmaz bizi karşılayan, tüm programları yöneten ana yazılım." },
      { "title": "Milli Gururumuz PARDUS", "desc": "TÜBİTAK tarafından geliştirilen, güvenli ve yerli işletim sistemimiz." },
      { "title": "Uygulama Yazılımları", "desc": "Oyunlar, resim çizme programları, müzik çalarlar ve tarayıcılar." }
    ],
    "roadmapSvg": get_svg_for_week_4(3, "Yazılım & İşletim Sistemi (Pardus)"),
    "section1": {
      "title": "Yazılım Olmadan Donanım Bir Hiçtir!",
      "subtitle": "Donanım vücudumuzsa, yazılım aklımız ve düşüncelerimizdir.",
      "cards": [
        {
          "title": "Yazılımın Büyülü Gücü",
          "icon": "✨",
          "desc": "Yazılım, bilgisayar parçalarına 'Şu resmi ekrana çiz', 'Şu sesi hoparlörden çıkar' diyen akıllı talimatlar listesidir.",
          "items": [
            { "bold": "Sistem Yazılımları", "text": "İşletim sistemleri (Pardus, Windows, Android, iOS)." },
            { "bold": "Uygulama Yazılımları", "text": "Paint (resim çizme), Word (yazı yazma), Scratch (kodlama)." },
            { "bold": "Oyun Yazılımları", "text": "Kuralları kodlanmış eğlenceli dijital maceralar." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Milli İşletim Sistemimiz: PARDUS",
      "subtitle": "Ülkemizin mühendisleri tarafından geliştirilen özgür ve güvenli yazılım.",
      "cards": [
        {
          "badge": "Yerli & Milli",
          "title": "Pardus Nedir?",
          "desc": "Adını Anadolu parsından alan, okullardaki akıllı tahtalarda ve kamu kurumlarında kullanılan işletim sistemimizdir.",
          "items": [
            { "bold": "Güvenli", "text": "Virüslere karşı son derece dayanıklıdır." },
            { "bold": "Ücretsiz", "text": "Herkes bilgisayarına ücretsiz indirip kurabilir." }
          ]
        },
        {
          "badge": "Açık Kaynak",
          "title": "Özgür Yazılım",
          "desc": "Kodları herkese açıktır. Dünyadaki geliştiriciler ve Türk mühendisler el ele verip onu her gün daha iyi yapar.",
          "items": [
            { "bold": "Milli Bağımsızlık", "text": "Kendi yazılımımıza sahip olmak siber alanda gücümüzü artırır." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahtada Pardus'u Keşfediyoruz",
      "subtitle": "Sınıfımızdaki akıllı tahtanın Pardus menülerini ve programlarını inceleyelim.",
      "steps": [
        { "title": "Pardus Logosu", "desc": "Sol alttaki sevimli pars logosuna tıklayıp ana menüyü açın." },
        { "title": "Eğitim Araçları", "desc": "Menüden 'Eğitim' sekmesini bulun ve içindeki çizim ve zekâ araçlarını listeleyin." },
        { "title": "Pardus Not Defteri", "desc": "Not defterini açıp 'Yaşasın Milli Yazılımımız Pardus!' cümlesini yazın." }
      ],
      "criteria": [
        "İşletim sisteminin görevini doğru açıklama",
        "Pardus menüsünde aranan uygulamayı bulabilme",
        "Milli yazılımların önemini kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Yazılım İndirirken Dikkat Edilecekler",
      "safetyRules": [
        { "bold": "Bilinmeyen Sitelerden İndirmeyin", "text": "İnternette 'Ücretsiz indir' yazan tuzak reklamlara asla tıklanmaz." },
        { "bold": "Virüslere Karşı Dikkat", "text": "Yabancı programlar bilgisayara zarar verebilir; mutlaka öğretmen veya ebeveyn onaylamalıdır." },
        { "bold": "Lisanslı ve Güvenli Yazılım", "text": "Pardus ve MEB onaylı güvenli yazılımları tercih edin." }
      ],
      "myths": [
        { "wrong": "Yazılıma dokunabiliriz çünkü o da bir alettir.", "correct": "Yazılım elle tutulamaz, sadece ekranda görünür ve çalışır." },
        { "wrong": "Pardus sadece öğretmenler içindir.", "correct": "Pardus tüm öğrenciler ve vatandaşlar için ücretsiz, harika bir sistemdir." }
      ]
    },
    "quiz": {
      "question": "Ülkemizde TÜBİTAK tarafından geliştirilen, akıllı tahtalarımızda da kullanılan milli işletim sistemimizin adı nedir?",
      "options": [
        { "text": "A) PARDUS", "isCorrect": True },
        { "text": "B) Paint", "isCorrect": False },
        { "text": "C) Hesap Makinesi", "isCorrect": False },
        { "text": "D) Klavye", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Aferin, Doğru Cevap: A!</strong> Anadolu Parsı'ndan adını alan PARDUS, ülkemizin gururu olan milli işletim sistemimizdir."
    },
    "summaryRules": [
      { "bold": "Yazılım", "text": "Bilgisayarın donanımlarını çalıştıran akıllı programlardır." },
      { "bold": "İşletim Sistemi", "text": "Tüm cihazı yöneten ana sistem yazılımıdır." },
      { "bold": "PARDUS", "text": "Türkiye'nin güvenli, yerli ve açık kaynaklı işletim sistemidir." }
    ],
    "homework": "Pardus işletim sisteminin logosunda hangi hayvan vardır? Bu hayvanın resmini defterinize çizin.",
    "nextWeekPreview": "Dosya ve Klasör Düzeni: Dijital Çantamı Topluyorum - Bilgisayarda kaybolan dosyaları bulma sırları!"
  },

  # 4. HAFTA
  {
    "week": 4,
    "date": "05 - 11 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Dijital Dünyanın Kapılarını Aralıyorum",
    "unitBadge": "1. Ünite: Dosya Yönetimi",
    "unitTheme": "unite-1",
    "title": "Dosya ve Klasör Düzeni: Dijital Çantamı Topluyorum",
    "subtitle": "Dosya Türleri, Uzantılar, Klasör Ağacı ve Düzenli Çalışma Alışkanlığı",
    "outcomeCode": "BTY.4.1.4",
    "targetSkill": "Dosya ve Klasör Hiyerarşisini Yönetme",
    "curiosityQuestion": "Okul çantanızda defterler, kalemler ve elmalar karmakarışık olsa aradığınız silgiyi nasıl bulurdunuz? Bilgisayarda çantamızı nasıl toplarız?",
    "roadmap": [
      { "title": "Dosya Nedir?", "desc": "Bilgisayarda sakladığımız her yazı, resim, müzik veya video bir dosyadır." },
      { "title": "Klasör (Dizin) Nedir?", "desc": "Dosyaları konularına göre ayırıp düzenli tuttuğumuz sarı dijital kutular." },
      { "title": "Dosya Uzantıları (.txt, .jpg, .mp3)", "desc": "Dosyanın soyadı gibidir; bilgisayara dosyanın türünü fısıldar." },
      { "title": "Düzenli Olmanın Faydası", "desc": "Aradığımız ödevi 2 saniyede bulmak ve yanlışlıkla silinmesini önlemek." }
    ],
    "roadmapSvg": get_svg_for_week_4(4, "Dosya ve Klasör Düzeni"),
    "section1": {
      "title": "Dosyaların Soyadları: Dosya Uzantıları",
      "subtitle": "Her dosyanın bir adı, bir de türünü belirten noktadan sonraki uzantısı vardır.",
      "cards": [
        {
          "title": "Dosya Adı ve Uzantısı: 'masal.docx'",
          "icon": "🏷️",
          "desc": "Noktanın solundaki kısım bizim verdiğimiz isim, sağındaki kısım ise dosya türüdür.",
          "items": [
            { "bold": ".txt / .docx", "text": "Yazı ve metin dosyaları (Hikâyeler, ödevler)." },
            { "bold": ".jpg / .png", "text": "Resim ve fotoğraf dosyaları (Çizimlerimiz)." },
            { "bold": ".mp3", "text": "Ses ve müzik dosyaları (Şarkılar, ses kayıtları)." },
            { "bold": ".mp4", "text": "Video ve film dosyaları (Ders videoları)." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Klasörler: Dijital Düzen Dolabımız",
      "subtitle": "Klasörlerin içine başka klasörler (alt klasör) açarak ağaç düzeni kurabiliriz.",
      "cards": [
        {
          "badge": "Adım 1",
          "title": "Ana Klasör Aç",
          "desc": "Masaüstüne sağ tıklayıp 'Yeni Klasör' seçeneğiyle '4-A_Sinifi_Ali' klasörü açın.",
          "items": [
            { "bold": "Kural", "text": "Klasör adlarında Türkçe karakterleri dikkatli kullanın." }
          ]
        },
        {
          "badge": "Adım 2",
          "title": "Konu Klasörleri",
          "desc": "İçine 'Turkce_Odevleri', 'Resimlerim' ve 'Muziklerim' adında 3 alt klasör oluşturun.",
          "items": [
            { "bold": "Fayda", "text": "Resimler resim klasörüne, yazılar ödev klasörüne taşınır." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Masaüstü Temizlik Operasyonu",
      "subtitle": "Masaüstünde dağınık duran 5 dosyayı ait olduğu klasörlere sürükleyip bırakalım.",
      "steps": [
        { "title": "Klasör Oluştur", "desc": "Masaüstünde 'Fen_Projesi' ve 'Matematik_Calisma' klasörleri oluşturun." },
        { "title": "Taşı ve Bırak", "desc": "Fare ile basılı tutup dosyaları sürükleyerek ilgili klasörün içine bırakın." },
        { "title": "Kontrol Et", "desc": "Klasörü çift tıklayıp açarak dosyaların içeri girdiğini teyit edin." }
      ],
      "criteria": [
        "Yeni klasör oluşturabilme ve adlandırabilme",
        "Dosyaları doğru klasörlere sürükleyip bırakabilme",
        "Masaüstünü derli toplu tutma alışkanlığı kazanma"
      ]
    },
    "tips": {
      "safetyTitle": "Dosyaları Yanlışlıkla Silmekten Korunun",
      "safetyRules": [
        { "bold": "Çöp Kutusunu Hemen Boşaltmayın", "text": "Yanlışlıkla sildiğiniz bir dosya 'Geri Dönüşüm Kutusu'ndan kurtarılabilir." },
        { "bold": "Uzantıyı Değiştirmeyin", "text": "Dosyayı yeniden adlandırırken noktadan sonraki harfleri (.jpg vb.) silmeyin, yoksa dosya açılmayabilir." },
        { "bold": "Önemli Dosyaları Yedekleyin", "text": "Büyük ödevlerinizi bir USB belleğe veya buluta kopyalayın." }
      ],
      "myths": [
        { "wrong": "Bir klasörün içine asla başka klasör konulamaz.", "correct": "Klasörlerin içine istediğiniz kadar alt klasör koyabilirsiniz." },
        { "wrong": "Bütün dosyaların uzantısı aynıdır.", "correct": "Her dosya türünün (müzik, resim, yazı) uzantısı farklıdır." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki dosyalardan hangisi bir 'RESİM / FOTOĞRAF' dosyasıdır?",
      "options": [
        { "text": "A) istiklal_marsi.mp3", "isCorrect": False },
        { "text": "B) okul_bahcesi.jpg", "isCorrect": True },
        { "text": "C) matematik_notlari.txt", "isCorrect": False },
        { "text": "D) cizgi_film.mp4", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> '.jpg' ve '.png' uzantıları resim ve görsel dosyalarını temsil eder."
    },
    "summaryRules": [
      { "bold": "Dosyalar", "text": "Bilgisayardaki bilgi parçacıklarıdır; uzantıları dosya türünü gösterir." },
      { "bold": "Klasörler", "text": "Dosyaları gruplayıp düzenli tuttuğumuz dijital bölmelerdir." },
      { "bold": "Düzenli Çalışma", "text": "Klasör kullanan öğrenciler ödevlerini asla kaybetmez." }
    ],
    "homework": "Bilgisayarınızda (veya bir kâğıt üzerinde) '4. Sınıf' klasörü tasarlayıp altına 3 ders klasörü çizin.",
    "nextWeekPreview": "Klavye ve Fare Sihirbazı: Hızlı & Doğru Yazma Maceraları - 10 parmak klavye sırları!"
  },

  # 5. HAFTA
  {
    "week": 5,
    "date": "12 - 18 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Dijital Dünyanın Kapılarını Aralıyorum",
    "unitBadge": "1. Ünite: Klavye ve Fare",
    "unitTheme": "unite-1",
    "title": "Klavye ve Fare Sihirbazı: Hızlı & Doğru Yazma",
    "subtitle": "Klavye Tuşlarının Görevleri, F Klavye, Çift Tıklama, Sürükle-Bırak",
    "outcomeCode": "BTY.4.1.5",
    "targetSkill": "Klavye ve Fareyi Etkin ve Hızlı Kullanma",
    "curiosityQuestion": "Klavyedeki 'Space (Boşluk)' tuşu neden bütün tuşlardan daha büyüktür?",
    "roadmap": [
      { "title": "Klavyenin Gizli Tuşları", "desc": "Enter (Giriş/Onay), Backspace (Geriye Sil), Delete (İleriye Sil), Caps Lock (Büyük Harf)." },
      { "title": "Shift ve Alt Gr Sihirbazlığı", "desc": "Tuşların üzerindeki ikinci ve üçüncü sembolleri (@, #, ?) yazma sırrı." },
      { "title": "F Klavye ve Türkçe", "desc": "Türkçemize en uygun, parmaklarımızı yormayan milli klavyemiz." },
      { "title": "Fare Becerileri", "desc": "Tek tık, çift tık, sağ tık menüsü ve tekerlek (scroll) kaydırma." }
    ],
    "roadmapSvg": get_svg_for_week_4(5, "Klavye ve Fare Sihirbazı"),
    "section1": {
      "title": "Önemli Klavye Tuşları Ne İşe Yarar?",
      "subtitle": "Yazı yazarken en sık kullandığımız süper tuşlar:",
      "cards": [
        {
          "title": "Klavye Kahramanları",
          "icon": "⌨️",
          "desc": "Klavyedeki tuşlar bize metin oluştururken hız ve güç kazandırır.",
          "items": [
            { "bold": "Enter (Giriş)", "text": "Alt satıra geçmeyi sağlar veya seçili komutu onaylar." },
            { "bold": "Space (Boşluk)", "text": "Kelimeler arasında bir karakterlik boşluk bırakır; en uzun tuştur." },
            { "bold": "Backspace & Delete", "text": "Backspace imlecin solundaki harfi, Delete ise sağındaki harfi siler." },
            { "bold": "Caps Lock", "text": "Açıldığında yazılan bütün harfleri BÜYÜK harfe dönüştürür." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Fare (Mouse) Kontrol Sanatı",
      "subtitle": "İmleci hedeflediğimiz noktaya taşımak ve doğru tıklamak:",
      "cards": [
        {
          "badge": "Sol Tık",
          "title": "Sol Tıklama & Çift Tık",
          "desc": "Tek tıklama bir öğeyi seçer. Çift sol tıklama ise bir klasörü veya programı anında açar.",
          "items": [
            { "bold": "İpucu", "text": "Çift tıklarken fareyi hareket ettirmeden hızlıca iki kez basmalıyız." }
          ]
        },
        {
          "badge": "Sağ Tık",
          "title": "Sağ Tıklama (Menü)",
          "desc": "Tıkladığımız nesne hakkında yapılabilecek seçenekleri (Kopyala, Yapıştır, Yeniden Adlandır, Sil) açar.",
          "items": [
            { "bold": "Özellik", "text": "Sağ tık sihirli bir ayar menüsüdür." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Hızlı Parmaklar Klavye Yarışı",
      "subtitle": "Öğretmenimizin tahtaya yazdığı tekerlemeyi hatasız ve hızlıca yazalım.",
      "steps": [
        { "title": "Duruşunu Ayarla", "desc": "Klavyenin başına dik otur ve iki elini klavyeye rahatça yerleştir." },
        { "title": "Tekerlemeyi Yaz", "desc": "'Şu köşe yaz köşesi, şu köşe kış köşesi' tekerlemesini büyük-küçük harflere dikkat ederek yaz." },
        { "title": "Hata Ayıkla", "desc": "Yanlış yazdığın harfi Backspace tuşu ile silip düzelt." }
      ],
      "criteria": [
        "İki eli de klavyede dengeli kullanma",
        "Büyük harf ve boşluk tuşunu doğru uygulama",
        "Ekrandaki imleci takip ederek hatasız tamamlama"
      ]
    },
    "tips": {
      "safetyTitle": "Bilek ve Parmak Sağlığı",
      "safetyRules": [
        { "bold": "Tuşlara Sert Basmayın", "text": "Tuşlar hassastır, hafif dokunuşlarla yazmak parmakları korur." },
        { "bold": "Bilekleri Masaya Dayamayın", "text": "Bilekleri havada veya destekleyici yumuşak ped üzerinde tutmak yorulmayı önler." },
        { "bold": "Parmak Egzersizleri", "text": "Her 15 dakikada bir ellerinizi açıp kapatarak esnetin." }
      ],
      "myths": [
        { "wrong": "Ne kadar sert basarsak harf o kadar hızlı yazılır.", "correct": "Bilgisayar nazik dokunuşları da anında algılar, sert basmak klavyeyi bozar." },
        { "wrong": "Fareyi kullanırken bütün kolumuzu sallamalıyız.", "correct": "Sadece bilek ve parmak hareketleriyle fare kontrol edilmelidir." }
      ]
    },
    "quiz": {
      "question": "Yazı yazarken kelimeler arasında boşluk bırakmak için klavyenin en uzun tuşu olan hangi tuşa basarız?",
      "options": [
        { "text": "A) Enter", "isCorrect": False },
        { "text": "B) Space (Boşluk)", "isCorrect": True },
        { "text": "C) Esc (Çıkış)", "isCorrect": False },
        { "text": "D) Shift", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Klavyenin en altındaki uzun tuş Space (Boşluk) tuşudur ve kelimeler arasına boşluk koyar."
    },
    "summaryRules": [
      { "bold": "Klavye Tuşları", "text": "Enter alt satıra geçer, Space boşluk bırakır, Backspace geriye siler." },
      { "bold": "Fare Tıklamaları", "text": "Tek tık seçer, çift tık açar, sağ tık menü çıkarır." },
      { "bold": "Alıştırma", "text": "Ne kadar çok yazı yazarsak parmaklarımız o kadar hızlanır." }
    ],
    "homework": "Klavyeden 10 parmakla kendi adınızı ve soyadınızı ekrana bakmadan yazmayı deneyin.",
    "nextWeekPreview": "Sağlıklı ve Ergonomik Bilgisayar Kullanımı: Doğru Duruş & Ekran Molası!"
  },

  # 6. HAFTA
  {
    "week": 6,
    "date": "19 - 25 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Dijital Dünyanın Kapılarını Aralıyorum",
    "unitBadge": "1. Ünite: Ergonomi",
    "unitTheme": "unite-1",
    "title": "Sağlıklı ve Ergonomik Bilgisayar Kullanımı",
    "subtitle": "Doğru Oturuş, Göz Sağlığı, 20-20-20 Kuralı ve Dijital Denge",
    "outcomeCode": "BTY.4.1.6",
    "targetSkill": "Sağlık ve Ergonomi Kurallarını Yaşama Geçirme",
    "curiosityQuestion": "Bilgisayar başında kambur oturursak omurgamız ve boynumuz bize neden küser?",
    "roadmap": [
      { "title": "Ergonomi Nedir?", "desc": "Çalışma ortamımızın ve eşyalarımızın bedenimize uygun tasarlanması bilimi." },
      { "title": "Doğru Duruş (90° Kuralı)", "desc": "Sırt dik, kollar ve dizler 90 derece bükülü, ayaklar yere basar." },
      { "title": "Göz Sağlığı & Mesafe", "desc": "Ekranla gözümüz arasında en az 50-70 cm (bir kol boyu) mesafe olmalıdır." },
      { "title": "20-20-20 Kuralı", "desc": "Her 20 dakikada bir, 20 metre uzağa, 20 saniye boyunca bakıp gözleri dinlendirme." }
    ],
    "roadmapSvg": get_svg_for_week_4(6, "Ergonomi & Sağlıklı Bilgisayar Duruşu"),
    "section1": {
      "title": "Bilgisayar Başında Doğru Oturuş Kuralları",
      "subtitle": "Sağlıklı bir bilişimci olmak için vücudumuzu korumalıyız.",
      "cards": [
        {
          "title": "Altın Duruş İlkeleri",
          "icon": "🪑",
          "desc": "Yanlış duruşlar boyun ağrısına, göz yorgunluğuna ve sırt eğriliğine yol açabilir.",
          "items": [
            { "bold": "Sırt Desteği", "text": "Sandalyenin sırtlığına yaslanın; asla öne doğru eğilmeyin." },
            { "bold": "Ekran Yüksekliği", "text": "Ekranın üst kenarı tam göz hizanızda olmalıdır." },
            { "bold": "Ayaklar Yerde", "text": "Ayaklar havada sallanmamalı, yere veya ayak desteğine basmalıdır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Gözlerimizi Nasıl Koruruz?",
      "subtitle": "Ekrana çok yakın bakmak gözleri yorar ve kurutur.",
      "cards": [
        {
          "badge": "Mesafe",
          "title": "Kol Boyu Mesafesi",
          "desc": "Kolunuzu öne doğru uzattığınızda parmak uçlarınız ekrana ancak değmelidir (50-70 cm).",
          "items": [
            { "bold": "Aydınlatma", "text": "Oda loş olmamalı, ışık doğrudan ekrana yansıyıp parlama yapmamalıdır." }
          ]
        },
        {
          "badge": "Dinlenme",
          "title": "20-20-20 Kuralı",
          "desc": "20 dakikada bir gözleri ekrandan ayırıp uzaktaki bir ağaca veya duvara 20 saniye bakın.",
          "items": [
            { "bold": "Göz Kırpma", "text": "Ekrana odaklanınca göz kırpmayı unutmayın, gözyaşı gözü korur." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sınıfta Ayna Heykel Ergonomi Oyunu",
      "subtitle": "Arkadaşınızın bilgisayar başındaki oturuşunu kontrol edin ve hatalarını düzeltin!",
      "steps": [
        { "title": "Duruş Denetimi", "desc": "Sıra arkadaşınız bilgisayar başına geçsin. Sırtı dik mi? Ekran uzaklığı doğru mu?" },
        { "title": "Ergonomi Antrenörü Ol", "desc": "'Kolunu 90 derece bük', 'Sırtını sandalyeye daya' diyerek ona rehberlik et." },
        { "title": "Mola Hareketi", "desc": "Tüm sınıf ayağa kalkıp omuzları geriye doğru 5 kez çevirsin." }
      ],
      "criteria": [
        "Ergonomik oturuş ilkelerini doğru uygulayabilme",
        "Ekran mesafesini ayarlama becerisi",
        "Sağlıklı teknoloji mola alışkanlığı kazanma"
      ]
    },
    "tips": {
      "safetyTitle": "Dijital Ekran Süresi Dengesi",
      "safetyRules": [
        { "bold": "Yemekte Ekran Yok", "text": "Yemek yerken telefon veya tablet izlenmez; ailece sohbet edilir." },
        { "bold": "Uykudan 1 Saat Önce Kapat", "text": "Mavi ışık beynimizi uyanık tutar; uykudan önce ekrandan uzak durulmalıdır." },
        { "bold": "Günde 1 Saat Yeterli", "text": "4. sınıf öğrencisi için ders dışı eğlenceli ekran süresi günde 1 saati aşmamalıdır." }
      ],
      "myths": [
        { "wrong": "Karanlık odada parıl parıl yanan ekrana bakmak çok havalıdır.", "correct": "Karanlıkta parlak ekrana bakmak göz sağlığına ciddi zarar verir." },
        { "wrong": "Koltukta yatarak laptop kullanmak çok rahattır.", "correct": "Yatarak bilgisayar kullanmak boyun ve omurga yapısını bozar." }
      ]
    },
    "quiz": {
      "question": "Bilgisayar kullanırken gözlerimizi dinlendirmek için uyguladığımız '20-20-20 kuralı' ne anlama gelir?",
      "options": [
        { "text": "A) 20 saat aralıksız oyun oynamak", "isCorrect": False },
        { "text": "B) Her 20 dakikada bir, 20 saniye boyunca uzağa bakmak", "isCorrect": True },
        { "text": "C) 20 kere ekrana dokunmak", "isCorrect": False },
        { "text": "D) 20 dakika sonra bilgisayarı çöpe atmak", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 20 dakikada bir en az 20 saniye uzağa bakarak göz kaslarımızı dinlendiririz."
    },
    "summaryRules": [
      { "bold": "90° Kuralı", "text": "Dizler ve dirsekler 90 derece, sırt sandalyeye tam yaslanmalıdır." },
      { "bold": "Göz Mesafesi", "text": "Ekrandan en az bir kol boyu (50-70 cm) uzakta durulmalıdır." },
      { "bold": "Mola ve Hareket", "text": "Düzenli molalar ve esneme hareketleri sağlığımızın sigortasıdır." }
    ],
    "homework": "Evinizdeki çalışma masanızı ergonomi kurallarına göre düzenleyin ve ailenize 20-20-20 kuralını öğretin.",
    "nextWeekPreview": "29 Ekim Cumhuriyet Bayramı Özel: Dijital Resim & Afiş Tasarımı - Bayrağımızı ve milli değerlerimizi çizeceğiz!"
  },

  # 7. HAFTA
  {
    "week": 7,
    "date": "26 Ekim - 01 Kasım",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Dijital Dünyanın Kapılarını Aralıyorum",
    "unitBadge": "Cumhuriyet Özel",
    "unitTheme": "unite-1",
    "title": "29 Ekim Cumhuriyet Bayramı Özel: Dijital Afiş Tasarımı",
    "subtitle": "Cumhuriyetimizin Kuruluşu, Milli Birlik ve Dijital Resim Dünyası",
    "outcomeCode": "BTY.4.1.7",
    "targetSkill": "Milli Değerleri Dijital Tasarımla İfade Etme",
    "curiosityQuestion": "Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk bugün yaşasaydı, gençlerin bilişim alanında ne yapmasını isterdi?",
    "roadmap": [
      { "title": "29 Ekim Coşkusu", "desc": "Cumhuriyetin ilanı ve milletimizin bağımsızlık meşalesi." },
      { "title": "Dijital Tasarım Araçları", "desc": "Paint veya açık kaynaklı çizim programlarıyla fırça, şekil ve renk kullanımı." },
      { "title": "Şanlı Al Bayrağımız", "desc": "Hilal ve yıldızın oranlarına dikkat ederek bayrak çizimi." },
      { "title": "Slogan ve Metin Ekleme", "desc": "'Cumhuriyet Çok Yaşa!' sloganını estetik yazı tipiyle yerleştirme." }
    ],
    "roadmapSvg": get_svg_for_week_4(7, "29 Ekim Cumhuriyet Bayramı Dijital Afiş"),
    "section1": {
      "title": "Dijital Ressamın Araç Kutusu",
      "subtitle": "Kâğıt ve boya olmadan bilgisayar ekranında nasıl resim çizeriz?",
      "cards": [
        {
          "title": "Çizim Programı Öğeleri",
          "icon": "🎨",
          "desc": "Çizim yazılımları bize yüzlerce renk ve hata yapınca geri alma süper gücü sunar.",
          "items": [
            { "bold": "Fırça ve Kalem", "text": "Farklı kalınlıklarda serbest çizgi çizmemizi sağlar." },
            { "bold": "Geometrik Şekiller", "text": "Kusursuz daire, dikdörtgen ve yıldız çizmeyi kolaylaştırır." },
            { "bold": "Boya Kovası (Doldur)", "text": "Kapalı bir şeklin içini tek tıkla kırmızı renge boyar." },
            { "bold": "Geri Al (Ctrl + Z)", "text": "Hata yaptığımızda tek tuşla bir adım geriye gidebiliriz!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Cumhuriyet Afişi Tasarım Adımları",
      "subtitle": "Anlamlı ve etkileyici bir bayram afişi hazırlamak:",
      "cards": [
        {
          "badge": "1. Adım",
          "title": "Kırmızı Arka Plan",
          "desc": "Boya kovasıyla sahneyi canlı bir bayrak kırmızısına (#e11d48) boyayın.",
          "items": [
            { "bold": "Renk Seçimi", "text": "Milli bayrağımızın rengi derin ve asildir." }
          ]
        },
        {
          "badge": "2. Adım",
          "title": "Hilal ve Yıldız Çizimi",
          "desc": "Beyaz daireler ve yıldız şekil aracını kullanarak ay ve yıldızı tam ortaya yerleştirin.",
          "items": [
            { "bold": "Detay", "text": "Hilal için içiçe iki daire kullanılır." }
          ]
        },
        {
          "badge": "3. Adım",
          "title": "Cumhuriyet Mesajı",
          "desc": "Metin (A) aracını seçip afişin altına 'Cumhuriyetimizin 103. Yılı Kutlu Olsun!' yazın.",
          "items": [
            { "bold": "Yazı Tipi", "text": "Okunaklı ve kalın bir yazı stili seçin." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Cumhuriyet Afişi Tasarım Atölyesi",
      "subtitle": "Her öğrenci kendi özgün 29 Ekim afişini tasarlasın ve akıllı tahtada sergileyelim.",
      "steps": [
        { "title": "Programı Aç", "desc": "Pardus çizim aracını veya Paint uygulamasını başlatın." },
        { "title": "Afişini Oluştur", "desc": "Bayrak, meşale ve okul resimleri ekleyerek afişinizi renklendirin." },
        { "title": "Kaydet", "desc": "Dosyayı 'Cumhuriyet_Afisim_Adiniz.png' adıyla Masaüstüne kaydedin." }
      ],
      "criteria": [
        "Çizim araçlarını (fırça, şekil, boya kovası) doğru kullanma",
        "Milli bayram temasını yansıtan anlamlı slogan yazma",
        "Dosyayı doğru isim ve uzantıyla kaydedebilme"
      ]
    },
    "tips": {
      "safetyTitle": "Tasarım Yaparken Püf Noktaları",
      "safetyRules": [
        { "bold": "Sık Sık Kaydedin (Ctrl + S)", "text": "Elektrik kesilirse emeğiniz kaybolmasın diye sık sık kaydedin." },
        { "bold": "Şekilleri Kapatın", "text": "Boya kovasıyla boyarken çizgide açık yer varsa boya bütün ekrana taşar!" },
        { "bold": "Telif Hakkına Dikkat", "text": "İnternetten aldığınız görselleri kendi emeğinizle zenginleştirin." }
      ],
      "myths": [
        { "wrong": "Bilgisayarda resim çizmek için ressam olmak şarttır.", "correct": "Geometrik şekiller ve dijital araçlarla herkes harika afişler yapabilir." },
        { "wrong": "Hata yaparsak resmi kapatıp baştan çizmeliyiz.", "correct": "Ctrl + Z (Geri Al) tuşuyla son hatanızı anında silebilirsiniz." }
      ]
    },
    "quiz": {
      "question": "Çizim programında bir hata yaptığımızda son yaptığımız işlemi hemen iptal edip geri almak için hangi klavye kısayolu kullanılır?",
      "options": [
        { "text": "A) Ctrl + Z (Geri Al)", "isCorrect": True },
        { "text": "B) Delete (Sil)", "isCorrect": False },
        { "text": "C) Esc (Çıkış)", "isCorrect": False },
        { "text": "D) Space (Boşluk)", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: A!</strong> Ctrl + Z kısayolu dijital dünyanın en büyük kurtarıcısıdır; yapılan son işlemi geri alır."
    },
    "summaryRules": [
      { "bold": "29 Ekim", "text": "Milletimizin en büyük bayramıdır; bilişimle onu geleceğe taşırız." },
      { "bold": "Dijital Afiş", "text": "Şekil, fırça ve metin araçlarıyla hazırlanan görsel mesajdır." },
      { "bold": "Geri Al Gücü", "text": "Ctrl + Z sayesinde dijital çizimde hata yapmaktan korkmayız." }
    ],
    "homework": "Cumhuriyet Bayramı afişinizin çıktısını alın veya ailenize bilgisayar ekranında gururla gösterin.",
    "nextWeekPreview": "1. Dönem 1. Yazılı Sınav Tekrarı & Dijital Dedektif Oyunu - Bilgilerimizi test edeceğiz!"
  },

  # 8. HAFTA
  {
    "week": 8,
    "date": "02 - 08 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Dijital Vatandaşlık & Güvenli İnternet",
    "unitBadge": "Sınav Tekrarı",
    "unitTheme": "unite-2",
    "title": "1. Dönem 1. Yazılı Sınav Tekrarı & Dijital Dedektif",
    "subtitle": "Donanım, Yazılım, Dosya Yönetimi, Klavye/Fare ve Ergonomi Özeti",
    "outcomeCode": "BTY.4.1.8",
    "targetSkill": "Kavramları Hatırlama, Pekiştirme ve Sınava Hazırlık",
    "curiosityQuestion": "Şimdiye kadar öğrendiğimiz bilişim kavramlarından bir 'Dijital Süper Kahraman' yapsaydık özellikleri neler olurdu?",
    "roadmap": [
      { "title": "Donanım Özeti", "desc": "Giriş birimleri, çıkış birimleri ve kasa içi bileşenlerin tekrarı." },
      { "title": "Yazılım & PARDUS", "desc": "İşletim sistemleri, uygulama yazılımları ve milli işletim sistemimiz." },
      { "title": "Dosya Uzantıları", "desc": ".txt, .jpg, .mp3, .mp4 ve klasör ağacı yapısının pekiştirilmesi." },
      { "title": "Ergonomi & Sağlık", "desc": "90 derece oturuş kuralı ve 20-20-20 dinlenme tekniği." }
    ],
    "roadmapSvg": get_svg_for_week_4(8, "1. Dönem 1. Yazılı Sınav Tekrarı"),
    "section1": {
      "title": "Büyük Sınav Tekrarı: 4 Ana Başlık",
      "subtitle": "Yazılı sınavda karşımıza çıkacak temel bilişim konuları:",
      "cards": [
        {
          "title": "Hızlı Bilgi Kartları",
          "icon": "🧠",
          "desc": "Bu 4 maddeyi aklınızda tuttuğunuzda sınavdan 100 almak çok kolay!",
          "items": [
            { "bold": "Donanım (Fiziksel)", "text": "Dokunabildiğimiz her şey donanımdır. Klavye (Giriş), Ekran (Çıkış)." },
            { "bold": "Yazılım (Ruh)", "text": "Donanıma can veren programlardır. En önemlisi PARDUS işletim sistemidir." },
            { "bold": "Dosyalar & Klasörler", "text": "Dosyalar bilgidir, klasörler ise onları düzenli tutan kutulardır." },
            { "bold": "Ergonomi", "text": "Dik otur, ekrandan 50 cm uzakta dur, 20 dakikada bir gözlerini dinlendir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sınavda Çıkabilecek Örnek Sorular",
      "subtitle": "Soru çözerken dikkat edilecek püf noktaları:",
      "cards": [
        {
          "badge": "Soru Tipi 1",
          "title": "Giriş / Çıkış Eşleştirme",
          "desc": "Hoparlör = Çıkış, Mikrofon = Giriş, Fare = Giriş, Yazıcı = Çıkış. Bilgi içeri mi giriyor dışarı mı çıkıyor?",
          "items": [
            { "bold": "Taktik", "text": "Aygıtın ses/görüntü verdiğini mi yoksa aldığını mı düşünün." }
          ]
        },
        {
          "badge": "Soru Tipi 2",
          "title": "Dosya Uzantısı Eşleştirme",
          "desc": "'.jpg' resimdir, '.mp3' müziktir, '.txt' yazıdır, '.mp4' videodur.",
          "items": [
            { "bold": "Taktik", "text": "Noktadan sonraki 3-4 harfe odaklanın." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Dijital Bilgi Çarkı Yarışması",
      "subtitle": "Akıllı tahtada soruları grupça yanıtlayıp sınav provası yapıyoruz.",
      "steps": [
        { "title": "Gruplara Ayrılın", "desc": "Sınıf 3 takıma ayrılsın: 'Donanımcılar', 'Yazılımcılar', 'Pardusçular'." },
        { "title": "Soruyu Çöz", "desc": "Tahtaya gelen çoktan seçmeli soruyu 30 saniye içinde takımca tartışıp işaretleyin." },
        { "title": "Skor Tablosu", "desc": "Doğru yanıt veren takım tahtada yıldız toplar." }
      ],
      "criteria": [
        "Öğrenilen bilişim kavramlarını eksiksiz hatırlama",
        "Takım arkadaşlarıyla sessizce fikir alışverişi yapma",
        "Hatalı yanıtlardan ders çıkararak doğrusunu öğrenme"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Anı Taktikleri",
      "safetyRules": [
        { "bold": "Soruyu Sonuna Kadar Oku", "text": "'Hangisi DEĞİLDİR?' gibi olumsuz köklere özellikle dikkat edin." },
        { "bold": "Acele Etmeyin", "text": "İlk aklınıza gelen şıkkı hemen işaretlemeyin; tüm seçenekleri mutlaka okuyun." },
        { "bold": "Kendinize Güvenin", "text": "Derslerimizde bütün konuları uygulamalı olarak öğrendiniz!" }
      ],
      "myths": [
        { "wrong": "Bilişim sınavı sadece ezberle geçilir.", "correct": "Bilişim sınavı kavramları anlayarak ve mantık kurarak çok daha kolay geçilir." },
        { "wrong": "En hızlı bitiren en yüksek notu alır.", "correct": "Sınavda önemli olan hız değil, dikkatli ve doğru yanıtlamaktır." }
      ]
    },
    "quiz": {
      "question": "Aşağıdakilerden hangisi bir 'ÇIKIŞ BİRİMİ'dir ve bilgisayardaki yazıları kâğıda dökmeye yarar?",
      "options": [
        { "text": "A) Tarayıcı", "isCorrect": False },
        { "text": "B) Klavye", "isCorrect": False },
        { "text": "C) Yazıcı (Printer)", "isCorrect": True },
        { "text": "D) Fare", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Yazıcı (Printer), bilgisayardaki verileri ve çizimleri kâğıda basan bir ÇIKIŞ birimidir."
    },
    "summaryRules": [
      { "bold": "Kavramları Hatırla", "text": "Donanım somut aletler, yazılım akıllı kodlardır." },
      { "bold": "Sistem Lideri", "text": "Pardus bilgisayarı yöneten milli sistemimizdir." },
      { "bold": "Başarı Anahtarı", "text": "Soruları dikkatli okumak ve kendine inanmaktır." }
    ],
    "homework": "Sınav çalışma kâğıdındaki 10 soruyu evde çözüp ailenize kontrol ettirin.",
    "nextWeekPreview": "Güvenli İnternet Kuralları: Şifremi Kimseye Söylemem! & 10 Kasım Atatürk'ü Anma Haftası!"
  },

  # 9. HAFTA
  {
    "week": 9,
    "date": "09 - 15 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Dijital Vatandaşlık & Güvenli İnternet",
    "unitBadge": "Güvenli İnternet & 10 Kasım",
    "unitTheme": "unite-2",
    "title": "Güvenli İnternet: Şifremi Kimseye Söylemem!",
    "subtitle": "Kişisel Bilgileri Koruma, Güçlü Şifre Oluşturma ve 10 Kasım Atatürk'ü Anma",
    "outcomeCode": "BTY.4.2.1",
    "targetSkill": "Siber Güvenlik Bilinci & Şifre Koruması",
    "curiosityQuestion": "Evinizin anahtarını tanımadığınız bir yabancıya verir misiniz? Peki dijital evimizin anahtarı olan şifrelerimizi neden korumalıyız?",
    "roadmap": [
      { "title": "Kişisel Bilgi Nedir?", "desc": "Adımız, T.C. kimlik numaramız, ev adresimiz, okul adımız ve telefonumuz." },
      { "title": "Güçlü Şifre Kalkanı", "desc": "Kolay tahmin edilemeyen, en az 8 karakterli, harf, rakam ve sembol içeren şifreler." },
      { "title": "Yabancılarla İletişim", "desc": "İnternette tanımadığımız kişilerden gelen mesajları ebeveynimize bildirme kuralı." },
      { "title": "10 Kasım Atatürk'ü Anma", "desc": "'Gelecek göklerdedir' diyerek bize bilimi ve teknolojiyi miras bırakan Ata'mızı anıyoruz." }
    ],
    "roadmapSvg": get_svg_for_week_4(9, "Güvenli İnternet: Şifre Kalkanı"),
    "section1": {
      "title": "Kişisel Bilgilerimiz Bize Özeldir!",
      "subtitle": "İnternette oyun oynarken veya video izlerken asla paylaşılmaması gereken bilgiler:",
      "cards": [
        {
          "title": "Gizli Kalması Gereken 5 Bilgi",
          "icon": "🛑",
          "desc": "Bu bilgileri kötü niyetli kişiler öğrenirse ailemize ve bize zarar verebilir.",
          "items": [
            { "bold": "Ev Adresi ve Okul Adı", "text": "Hangi okulda okuduğunuzu ve nerede oturduğunuzu asla yazmayın." },
            { "bold": "T.C. Kimlik Numarası", "text": "Devletin sadece size verdiği çok gizli bir numaradır." },
            { "bold": "Telefon Numarası", "text": "Yabancı sitelere ve formlara telefonunuzu kaydetmeyin." },
            { "bold": "Hesap Şifreleri", "text": "Şifrenizi en yakın arkadaşınıza bile söylemeyin; sadece anne-babanız bilsin." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Süper Güçlü Şifre Nasıl Yapılır?",
      "subtitle": "123456 veya 'adiniz123' gibi kolay şifreler saniyeler içinde kırılır!",
      "cards": [
        {
          "badge": "Zayıf Şifre",
          "title": "❌ Çok Kolay Kırılır",
          "desc": "123456, 1111, futbol takiminiz, dogum yiliniz veya adiniz.",
          "items": [
            { "bold": "Tehlike", "text": "Korsanlar bu şifreleri hemen tahmin edip hesabınızı ele geçirir." }
          ]
        },
        {
          "badge": "Güçlü Şifre",
          "title": "✅ Kırılması Yıllar Sürer",
          "desc": "Büyük harf + Küçük harf + Rakam + Özel sembol (!, ?, *, #).",
          "items": [
            { "bold": "Örnek", "text": "'Kitap*2026!' veya 'Mavi_Gozluk!9'" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Güçlü Şifre Oluşturma Fabrikası",
      "subtitle": "Kolay hatırlanabilen ama kırılması imkânsız bir gizli formül geliştirelim.",
      "steps": [
        { "title": "Sevdiğin Bir Kelime Seç", "desc": "Örn: 'Kartal'" },
        { "title": "Rakam ve Sembol Ekle", "desc": "'Kartal' -> 'Kartal#79'" },
        { "title": "Büyük-Küçük Harf Karıştır", "desc": "'kArTaL#79!' -> İşte süper kırılmaz bir şifre kalkanı!" }
      ],
      "criteria": [
        "En az 8 karakter uzunluğunda şifre tasarlayabilme",
        "Harf, rakam ve sembolleri dengeli harmanlama",
        "Kişisel bilgileri şifrede kullanmama bilinci"
      ]
    },
    "tips": {
      "safetyTitle": "Dijital Tehlikelere Karşı 3 Altın Kural",
      "safetyRules": [
        { "bold": "Şüphelenirsen Ebeveynine Söyle", "text": "Sizi rahatsız eden, hediye vaat eden veya korkutan bir mesaj görürseniz hemen ailenize gösterin." },
        { "bold": "Kamerayı Açmayın", "text": "Tanımadığınız kişilerin olduğu online oyunlarda kameranızı asla açmayın." },
        { "bold": "Ortak Bilgisayarda Çıkış Yap", "text": "Okulda veya kütüphanede hesabınızı kullandıktan sonra mutlaka 'Çıkış Yap (Log Out)' butonuna tıklayın." }
      ],
      "myths": [
        { "wrong": "İnternette tanıştığımız herkes gerçekten söylediği yaştadır.", "correct": "Kötü niyetli yetişkinler internette kendilerini çocuk gibi tanıtabilir!" },
        { "wrong": "Şifremi en iyi arkadaşıma söylersem dostluğumuz pekişir.", "correct": "Şifre sadece size ve ailenize aittir; kimseyle paylaşılmaz." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki şifrelerden hangisi 'EN GÜÇLÜ VE GÜVENLİ' şifre örneğidir?",
      "options": [
        { "text": "A) 123456", "isCorrect": False },
        { "text": "B) fenerbahce", "isCorrect": False },
        { "text": "C) Ahmet2015", "isCorrect": False },
        { "text": "D) Kedi*48!Mavi", "isCorrect": True }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: D!</strong> 'Kedi*48!Mavi' şifresi büyük harf, küçük harf, rakam ve sembol içerdiği için son derece güçlüdür."
    },
    "summaryRules": [
      { "bold": "Kişisel Bilgiler", "text": "Ad, adres, telefon ve T.C. kimlik internette asla paylaşılmaz." },
      { "bold": "Güçlü Şifre", "text": "En az 8 karakterli, harf, rakam ve sembol içeren gizli kalkandır." },
      { "bold": "Ata'mızın İzinde", "text": "Bilişimde güçlü olan bir millet, bağımsızlığını sonsuza dek korur." }
    ],
    "homework": "Kullandığınız bir oyun veya e-posta şifrenizi ebeveyninizle birlikte kontrol edip güçlendirin.",
    "nextWeekPreview": "1. Dönem Ara Tatil: Eğlenceli Bilişim ve Kodlama Kulübü - Tatilde eğlenceli algoritmalar!"
  },

  # 10. HAFTA
  {
    "week": 10,
    "date": "16 - 22 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Dijital Vatandaşlık & Güvenli İnternet",
    "unitBadge": "1. Ara Tatil",
    "unitTheme": "unite-somestr",
    "title": "1. Dönem Ara Tatil: Eğlenceli Bilişim ve Kodlama Kulübü",
    "subtitle": "Ekransız Kodlama Oyunları, Zekâ Bulmacaları ve Aile Algoritma Atölyesi",
    "outcomeCode": "BTY.4.2.2",
    "targetSkill": "Bilişimsel Düşünme & Problem Çözme Becerisi",
    "curiosityQuestion": "Elektrik ve bilgisayar olmadan, sadece kâğıt ve kalemle kodlama yapılabilir mi?",
    "roadmap": [
      { "title": "Ara Tatil Dinlenmesi", "desc": "Derslere kısa bir mola verip zihnimizi tazelemek." },
      { "title": "Ekransız Kodlama (Unplugged)", "desc": "Kareli kâğıt üzerinde oklarla karakteri hedefe ulaştırma algoritmaları." },
      { "title": "Zekâ ve Mantık Oyunları", "desc": "Labirentler, sudoku ve şifreli gizem kutularını çözme." },
      { "title": "Ailece Kodlama Görevi", "desc": "Evde anne veya babamızı 'robot' yapıp sesli komutlarla yönlendirme oyunu." }
    ],
    "roadmapSvg": get_svg_for_week_4(10, "1. Dönem Ara Tatili: Kodlama Macerası"),
    "section1": {
      "title": "Ekransız Kodlama (Unplugged) Nedir?",
      "subtitle": "Kodlamanın özü bilgisayar değil, problem çözme mantığıdır!",
      "cards": [
        {
          "title": "Oklarla Yönlendirme Algoritması",
          "icon": "🧭",
          "desc": "Karakterimizi başlangıçtan hedefe ulaştırmak için adım adım yön komutları veririz.",
          "items": [
            { "bold": "⬆️ Yukarı", "text": "Karakteri bir kare yukarı ilerlet." },
            { "bold": "➡️ Sağa", "text": "Karakteri bir kare sağa ilerlet." },
            { "bold": "⬇️ Aşağı", "text": "Karakteri bir kare aşağı ilerlet." },
            { "bold": "⬅️ Sola", "text": "Karakteri bir kare sola ilerlet." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Robot Arkadaşım Oyunu",
      "subtitle": "Evde ailenizle oynayabileceğiniz eğlenceli tatil oyunu:",
      "cards": [
        {
          "badge": "Rol 1",
          "title": "Programcı (Sen)",
          "desc": "Robota adım adım komut verirsin: '3 adım ileri yürü', 'Sağa dön', 'Masadaki elmayı al'.",
          "items": [
            { "bold": "Kural", "text": "Eksik veya hatalı komut verirsen robot duvara toslayabilir!" }
          ]
        },
        {
          "badge": "Rol 2",
          "title": "Robot (Anne/Baba)",
          "desc": "Sadece programcının söylediği komutları harfiyen uygular, kendi kafasına göre hareket edemez.",
          "items": [
            { "bold": "Farkındalık", "text": "Bilgisayarların neden net ve hatasız komutlara ihtiyaç duyduğunu anlarsınız." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kareli Kâğıtta Labirent Algoritması",
      "subtitle": "Kareli defterinize bir labirent çizin ve çıkış kodunu oklarla yazın.",
      "steps": [
        { "title": "Labirenti Çiz", "desc": "5x5 karelik bir alan çizip içine engeller (duvarlar) koyun." },
        { "title": "Başlangıç ve Hedef", "desc": "Sol alttan başlayıp sağ üstteki bayrağa ulaşacak rotayı planlayın." },
        { "title": "Kod Listesi Yaz", "desc": "Örn: 2 Adım Yukarı ➡️ 3 Adım Sağa ➡️ Bayrağı Al!" }
      ],
      "criteria": [
        "Algoritmada adımları sırasıyla mantıklı kurgulama",
        "Engellere çarpmadan en kısa yolu bulabilme",
        "Çözüm kodlarını ok sembolleriyle doğru ifade etme"
      ]
    },
    "tips": {
      "safetyTitle": "Tatil Boyunca Sağlıklı Ekran Rehberi",
      "safetyRules": [
        { "bold": "Doğada Vakit Geçirin", "text": "Güneşli havalarda parkta koşun, top oynayın ve temiz hava alın." },
        { "bold": "Kitap Okuma Saati", "text": "Günde en az 30 sayfa kitap okumak hayal gücünüzü ve kodlama zekanızı besler." },
        { "bold": "Süre Sınırı Koyun", "text": "Ekrana bakma sürenizi alarm kurarak takip edin; süreniz bitince cihazı kapatın." }
      ],
      "myths": [
        { "wrong": "Kodlama sadece bilgisayar başında öğrenilir.", "correct": "Algoritmik düşünme satrançla, yemek tarifiyle ve kutu oyunlarıyla da gelişir." },
        { "wrong": "Tatil boyunca bütün gün bilgisayar oynanmalıdır.", "correct": "Tatil dinlenmek, sosyalleşmek ve hareket etmek için harika bir fırsattır." }
      ]
    },
    "quiz": {
      "question": "Bir robotu kareli labirentte 2 kare yukarı ve 3 kare sağa götürmek için hangi algoritma sırası uygulanmalıdır?",
      "options": [
        { "text": "A) ⬇️⬇️ ⬅️⬅️⬅️", "isCorrect": False },
        { "text": "B) ⬆️⬆️ ➡️➡️➡️", "isCorrect": True },
        { "text": "C) ➡️➡️ ⬆️⬆️⬆️", "isCorrect": False },
        { "text": "D) ⬅️ ⬆️ ⬇️", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> İki kare yukarı (⬆️⬆️) ve üç kare sağa (➡️➡️➡️) adımları robotu doğru hedefe ulaştırır."
    },
    "summaryRules": [
      { "bold": "Ekransız Kodlama", "text": "Düşünme, sıralama ve mantık yürütme becerisidir." },
      { "bold": "Net Komutlar", "text": "Bilgisayarlar ve robotlar sadece açık ve kesin komutları anlar." },
      { "bold": "Dengeli Tatil", "text": "Ekran, kitap, oyun ve doğa dengesi bizi mutlu ve zinde tutar." }
    ],
    "homework": "Ailenizle 'Robot Arkadaşım' oyununu oynayın ve robotun yaptığı komik hataları günlüğünüze yazın.",
    "nextWeekPreview": "Dijital Ayak İzi: İnternette Bıraktığımız İzler Silinir mi? & 24 Kasım Öğretmenler Günü!"
  }
]
