#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MEB 4. Sınıf Bilişim Teknolojileri ve Yazılım
Türkiye Yüzyılı Maarif Modeli (2026-2027)
2. Dönem 1. Kısım: Hafta 20 - 31
Öğretmen: Vahit Keskin
"""

from data_grade4_part1 import get_svg_for_week_4

def get_svg_for_week_4_part3(week_num, title):
    if week_num == 20:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold">Sömestr 1. Hafta: Ekransız Kodlama Kampı</text>

  <g transform="translate(60, 75)">
    <rect width="90" height="90" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="45" y="55" text-anchor="middle" font-size="34">⬆️</text>
    <text x="45" y="105" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">İleri Yürü</text>
  </g>

  <g transform="translate(180, 75)">
    <rect width="90" height="90" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="45" y="55" text-anchor="middle" font-size="34">🔄</text>
    <text x="45" y="105" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Tekrar Et</text>
  </g>

  <g transform="translate(300, 75)">
    <rect width="90" height="90" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="45" y="55" text-anchor="middle" font-size="34">🎯</text>
    <text x="45" y="105" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Hedefe Ulaş</text>
  </g>

  <rect x="50" y="215" width="350" height="75" rx="12" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="225" y="245" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">Algoritma: Adım Adım Problem Çözme Sanatı</text>
  <text x="225" y="268" text-anchor="middle" fill="#cbd5e1" font-size="11">Bilgisayar olmadan kâğıt, kalem ve zekâ ile kodlama yapıyoruz!</text>
</svg>'''
    elif week_num == 21:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold">Sömestr 2. Hafta: Zekâ & Labirent Atölyesi</text>

  <!-- Labirent Çizimi -->
  <g transform="translate(135, 70)">
    <rect width="180" height="130" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="8"/>
    <line x1="45" y1="0" x2="45" y2="90" stroke="#38bdf8" stroke-width="3"/>
    <line x1="90" y1="40" x2="90" y2="130" stroke="#38bdf8" stroke-width="3"/>
    <line x1="135" y1="0" x2="135" y2="90" stroke="#38bdf8" stroke-width="3"/>
    <circle cx="20" cy="20" r="10" fill="#10b981"/>
    <text x="160" y="120" text-anchor="middle" font-size="16">🏁</text>
  </g>

  <rect x="50" y="225" width="350" height="65" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="250" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Engellere Çarpmadan Hedefe Git!</text>
  <text x="225" y="270" text-anchor="middle" fill="#cbd5e1" font-size="11">En kısa rotayı hesapla, gereksiz adımlardan kaçın.</text>
</svg>'''
    elif week_num == 22:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Problem Çözme Süreci (4 Adım)</text>

  <g transform="translate(40, 80)">
    <rect width="80" height="80" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="40" y="35" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">1</text>
    <text x="40" y="60" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Problemi</text>
    <text x="40" y="73" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Anla</text>
  </g>

  <g transform="translate(140, 80)">
    <rect width="80" height="80" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="40" y="35" text-anchor="middle" fill="#10b981" font-size="18" font-weight="bold">2</text>
    <text x="40" y="60" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Plan</text>
    <text x="40" y="73" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Yap</text>
  </g>

  <g transform="translate(240, 80)">
    <rect width="80" height="80" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="40" y="35" text-anchor="middle" fill="#f59e0b" font-size="18" font-weight="bold">3</text>
    <text x="40" y="60" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Planı</text>
    <text x="40" y="73" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Uygula</text>
  </g>

  <g transform="translate(340, 80)">
    <rect width="70" height="80" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="35" y="35" text-anchor="middle" fill="#a855f7" font-size="18" font-weight="bold">4</text>
    <text x="35" y="60" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Kontrol</text>
    <text x="35" y="73" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="bold">Et</text>
  </g>

  <rect x="50" y="200" width="350" height="80" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="230" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Büyük Problemleri Küçük Parçalara Böl!</text>
  <text x="225" y="255" text-anchor="middle" fill="#cbd5e1" font-size="11">Bir pastayı tek lokmada yiyemezsin; dilim dilim çözmelisin.</text>
</svg>'''
    elif week_num == 23:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Algoritma Sihri: Günlük Rutinler</text>

  <!-- Kek Tarifi Algoritması -->
  <g transform="translate(60, 75)">
    <rect width="330" height="35" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="20" y="22" fill="#38bdf8" font-weight="bold" font-size="12">1. Adım:</text>
    <text x="80" y="22" fill="#f8fafc" font-size="12">Yumurta ve şekeri çırp.</text>
  </g>

  <g transform="translate(60, 120)">
    <rect width="330" height="35" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="20" y="22" fill="#10b981" font-weight="bold" font-size="12">2. Adım:</text>
    <text x="80" y="22" fill="#f8fafc" font-size="12">Un, süt ve kakaoyu ekleyip karıştır.</text>
  </g>

  <g transform="translate(60, 165)">
    <rect width="330" height="35" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="20" y="22" fill="#f59e0b" font-weight="bold" font-size="12">3. Adım:</text>
    <text x="80" y="22" fill="#f8fafc" font-size="12">Kalıba dök ve fırında 30 dk pişir.</text>
  </g>

  <g transform="translate(60, 210)">
    <rect width="330" height="35" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
    <text x="20" y="22" fill="#34d399" font-weight="bold" font-size="12">Sonuç:</text>
    <text x="80" y="22" fill="#f8fafc" font-size="12">Nefis çikolatalı kek hazır! 🎂</text>
  </g>

  <text x="225" y="285" text-anchor="middle" fill="#cbd5e1" font-size="11">Sıralama değişirse sonuç bozulur; algoritma sıralı adımlardır!</text>
</svg>'''
    elif week_num == 24:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Akış Şeması Sembolleri</text>

  <!-- Başla / Dur (Elips) -->
  <g transform="translate(50, 75)">
    <ellipse cx="60" cy="30" rx="55" ry="25" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="60" y="35" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">BAŞLA / BİTİR</text>
  </g>

  <!-- İşlem (Dikdörtgen) -->
  <g transform="translate(240, 75)">
    <rect width="140" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="70" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">İŞLEM (Hesapla)</text>
  </g>

  <!-- Karar (Eşkenar Dörtgen) -->
  <g transform="translate(150, 160)">
    <polygon points="75,0 150,40 75,80 0,40" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="75" y="45" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">KARAR (Eğer?)</text>
  </g>

  <text x="225" y="280" text-anchor="middle" fill="#cbd5e1" font-size="12">Semboller birleşerek algoritmamızın haritasını çıkarır.</text>
</svg>'''
    elif week_num == 25:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Blok Tabanlı Kodlama (Code.org)</text>

  <!-- Kod Blokları Lego Şekli -->
  <g transform="translate(80, 80)">
    <path d="M0,0 L40,0 L50,10 L70,10 L80,0 L200,0 L200,45 L80,45 L70,55 L50,55 L40,45 L0,45 Z" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
    <text x="100" y="28" text-anchor="middle" fill="#0f172a" font-size="13" font-weight="bold">çalıştığı zaman</text>
  </g>

  <g transform="translate(80, 128)">
    <path d="M0,0 L40,0 L50,10 L70,10 L80,0 L200,0 L200,45 L80,45 L70,55 L50,55 L40,45 L0,45 Z" fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
    <text x="100" y="28" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">10 adım ilerle</text>
  </g>

  <g transform="translate(80, 176)">
    <path d="M0,0 L40,0 L50,10 L70,10 L80,0 L200,0 L200,45 L80,45 L70,55 L50,55 L40,45 L0,45 Z" fill="#10b981" stroke="#059669" stroke-width="2"/>
    <text x="100" y="28" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">sağa 90 derece dön</text>
  </g>

  <rect x="50" y="245" width="350" height="50" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="225" y="275" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Lego Parçaları Gibi Birbirine Kenetlenen Bloklar!</text>
</svg>'''
    elif week_num == 26:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Döngüler (Tekrarlar) & 12 Mart</text>

  <!-- Döngü Bloğu Temsili -->
  <g transform="translate(60, 75)">
    <path d="M0,0 L60,0 L70,10 L90,10 L100,0 L240,0 L240,35 L120,35 L110,45 L90,45 L80,35 L40,35 L40,95 L80,95 L90,105 L110,105 L120,95 L240,95 L240,125 L0,125 Z" fill="#ec4899" stroke="#db2777" stroke-width="2"/>
    <text x="130" y="24" fill="#ffffff" font-size="12" font-weight="bold">4 defa tekrarla</text>
    <rect x="55" y="45" width="160" height="35" rx="4" fill="#3b82f6"/>
    <text x="135" y="68" text-anchor="middle" fill="#ffffff" font-size="11">İlerle ve Sağa Dön</text>
  </g>

  <g transform="translate(320, 85)">
    <circle cx="45" cy="45" r="40" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="45" y="40" text-anchor="middle" font-size="20">🔄</text>
    <text x="45" y="65" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Kare Çiz</text>
  </g>

  <rect x="50" y="225" width="350" height="70" rx="10" fill="#1e293b" stroke="#e11d48" stroke-width="1.5"/>
  <text x="225" y="250" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="bold">🇹🇷 12 Mart İstiklâl Marşı'nın Kabulü</text>
  <text x="225" y="272" text-anchor="middle" fill="#cbd5e1" font-size="11">Milli marşımızın dizeleriyle kodlama animasyonu tasarlıyoruz.</text>
</svg>'''
    elif week_num == 27:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Koşul Blokları (Eğer - Değilse) & 18 Mart</text>

  <!-- Eğer Bloğu -->
  <g transform="translate(60, 75)">
    <rect width="330" height="40" rx="8" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
    <text x="20" y="26" fill="#0f172a" font-size="12" font-weight="bold">EĞER: Yağmur yağıyorsa</text>
    <text x="230" y="26" fill="#0f172a" font-size="12">☔ Şemsiyeni Aç</text>
  </g>

  <g transform="translate(60, 125)">
    <rect width="330" height="40" rx="8" fill="#3b82f6" stroke="#2563eb" stroke-width="2"/>
    <text x="20" y="26" fill="#ffffff" font-size="12" font-weight="bold">DEĞİLSE (Hava güneşliyse)</text>
    <text x="230" y="26" fill="#ffffff" font-size="12">🕶️ Güneş Gözlüğü Tak</text>
  </g>

  <rect x="50" y="195" width="350" height="95" rx="12" fill="#450a0a" stroke="#e11d48" stroke-width="1.5"/>
  <text x="225" y="225" text-anchor="middle" fill="#fca5a5" font-size="13" font-weight="bold">🇹🇷 18 Mart Çanakkale Zaferi ve Şehitleri Anma</text>
  <text x="225" y="250" text-anchor="middle" fill="#ffffff" font-size="12">"Çanakkale Geçilmez!"</text>
  <text x="225" y="272" text-anchor="middle" fill="#cbd5e1" font-size="10">Eğer cesaret varsa, hiçbir engel vatanımızı bölemez!</text>
</svg>'''
    elif week_num == 28:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold">Scratch Dünyasına Merhaba!</text>

  <!-- Scratch Kedi Maskotu -->
  <g transform="translate(70, 75)">
    <circle cx="50" cy="50" r="40" fill="#f59e0b"/>
    <polygon points="20,20 15,0 40,15" fill="#f59e0b"/>
    <polygon points="80,20 85,0 60,15" fill="#f59e0b"/>
    <circle cx="35" cy="45" r="6" fill="#ffffff"/><circle cx="35" cy="45" r="3" fill="#000000"/>
    <circle cx="65" cy="45" r="6" fill="#ffffff"/><circle cx="65" cy="45" r="3" fill="#000000"/>
    <polygon points="50,55 45,62 55,62" fill="#ef4444"/>
    <text x="50" y="115" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Scratch Kedisi</text>
  </g>

  <g transform="translate(200, 75)">
    <rect width="180" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="90" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Sahne & Karakterler</text>
    <text x="90" y="60" text-anchor="middle" fill="#cbd5e1" font-size="10">🎨 Arka Plan Seç</text>
    <text x="90" y="80" text-anchor="middle" fill="#cbd5e1" font-size="10">👾 Karakter Ekle</text>
    <text x="90" y="100" text-anchor="middle" fill="#cbd5e1" font-size="10">🧩 Blokları Sürükle</text>
  </g>

  <rect x="50" y="225" width="350" height="65" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="250" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Kendi Oyunlarımızın Yönetmeni Oluyoruz!</text>
  <text x="225" y="270" text-anchor="middle" fill="#cbd5e1" font-size="11">Yeşil bayrak = Başla 🏁 • Kırmızı buton = Dur 🛑</text>
</svg>'''
    elif week_num == 29:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">2. Dönem 1. Yazılı Sınav Tekrarı & Debug</text>

  <!-- Böcek / Hata Ayıklama (Debug) -->
  <g transform="translate(195, 75)">
    <circle cx="30" cy="30" r="25" fill="#ef4444"/>
    <circle cx="30" cy="15" r="10" fill="#991b1b"/>
    <line x1="5" y1="20" x2="0" y2="10" stroke="#ef4444" stroke-width="3"/>
    <line x1="55" y1="20" x2="60" y2="10" stroke="#ef4444" stroke-width="3"/>
    <line x1="5" y1="35" x2="0" y2="35" stroke="#ef4444" stroke-width="3"/>
    <line x1="55" y1="35" x2="60" y2="35" stroke="#ef4444" stroke-width="3"/>
    <text x="30" y="75" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Bug (Hata)</text>
  </g>

  <rect x="50" y="175" width="350" height="110" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="205" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Hata Ayıklama (Debugging) Süper Gücü</text>
  <text x="225" y="230" text-anchor="middle" fill="#cbd5e1" font-size="11">Kod çalışmadığında üzülmüyoruz; dedektif gibi satır satır inceliyoruz.</text>
  <text x="225" y="255" text-anchor="middle" fill="#fbbf24" font-size="11">Algoritma + Döngüler + Şartlar + Scratch Blokları</text>
</svg>'''
    elif week_num == 30:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#34d399" font-size="16" font-weight="bold">Karakterleri Canlandırma & Kostümler</text>

  <g transform="translate(90, 80)">
    <rect width="110" height="100" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="55" y="45" text-anchor="middle" font-size="28">🐱</text>
    <text x="55" y="75" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Kostüm 1</text>
    <text x="55" y="90" text-anchor="middle" fill="#cbd5e1" font-size="9">Sağ adım önde</text>
  </g>

  <g transform="translate(250, 80)">
    <rect width="110" height="100" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="55" y="45" text-anchor="middle" font-size="28">🐈</text>
    <text x="55" y="75" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Kostüm 2</text>
    <text x="55" y="90" text-anchor="middle" fill="#cbd5e1" font-size="9">Sol adım önde</text>
  </g>

  <path d="M210,130 L240,130" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4"/>
  <text x="225" y="225" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="bold">Sürekli 'Sonraki Kostüm' = Canlı Yürüme Animasyonu!</text>
  <text x="225" y="255" text-anchor="middle" fill="#cbd5e1" font-size="11">Tıpkı çizgi filmlerdeki gibi resimler hızla değişir.</text>
</svg>'''
    elif week_num == 31:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#fbbf24" font-size="16" font-weight="bold">2. Dönem Ara Tatil: Scratch Oyun Kulübü</text>

  <g transform="translate(60, 80)">
    <rect width="90" height="90" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="45" y="50" text-anchor="middle" font-size="30">🎮</text>
    <text x="45" y="80" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Oyunlar</text>
  </g>

  <g transform="translate(180, 80)">
    <rect width="90" height="90" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="45" y="50" text-anchor="middle" font-size="30">👾</text>
    <text x="45" y="80" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Canavarlar</text>
  </g>

  <g transform="translate(300, 80)">
    <rect width="90" height="90" rx="12" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="45" y="50" text-anchor="middle" font-size="30">🏆</text>
    <text x="45" y="80" text-anchor="middle" fill="#a855f7" font-size="11" font-weight="bold">Skorlar</text>
  </g>

  <rect x="50" y="215" width="350" height="75" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="245" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold">Tatil Projesi: Kendi Labirent Oyununu Tasarla!</text>
  <text x="225" y="268" text-anchor="middle" fill="#cbd5e1" font-size="11">Duvara çarpınca başa dönen, elmayı toplayınca kazanan oyun.</text>
</svg>'''
    return get_svg_for_week_4(week_num, title)

WEEKS_20_31_GRADE4 = [
  # 20. HAFTA
  {
    "week": 20,
    "date": "25 - 31 Ocak",
    "hours": "2 Ders Saati",
    "unit": "Sömestr: Bilişim ve Kodlama Kış Şenliği",
    "unitBadge": "Sömestr 1. Hafta",
    "unitTheme": "unite-somestr",
    "title": "Sömestr 1. Hafta: Ekransız Kodlama & Algoritma",
    "subtitle": "Kâğıt Üzerinde Kodlama, Yön Bulma ve Aile İçi Bilişim Oyunları",
    "outcomeCode": "BTY.4.4.1",
    "targetSkill": "Bilişimsel Düşünme & Algoritmik Sıralama",
    "curiosityQuestion": "Uzaydaki bir astronota telsizle sadece 'İleri', 'Geri', 'Sağa dön' diyerek uzay aracını tamir ettirebilir misiniz?",
    "roadmap": [
      { "title": "Algoritma Nedir?", "desc": "Bir hedefe ulaşmak veya bir problemi çözmek için adım adım izlenen kesin yol." },
      { "title": "Yön Komutları", "desc": "Yukarı, aşağı, sağa, sola komutlarıyla karakter yönlendirme." },
      { "title": "Hatasız Sıralama", "desc": "Adımların yerini değiştirdiğimizde hedefe neden ulaşamadığımızı keşfetme." },
      { "title": "Evde Kodlama Kulübü", "desc": "Kardeşinize veya ailenize kâğıttan labirent hazırlayıp oynatma." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(20, "Sömestr 1. Hafta: Ekransız Kodlama"),
    "section1": {
      "title": "Algoritma: Hayatımızın Her Yerinde!",
      "subtitle": "Farkında olmadan her gün onlarca algoritma çalıştırırız:",
      "cards": [
        {
          "title": "Günlük Hayat Algoritmaları",
          "icon": "📝",
          "desc": "Adımları doğru sırayla yapmazsak işler karışır:",
          "items": [
            { "bold": "Ayakkabı Giyme", "text": "1. Çorabını giy -> 2. Ayakkabını giy -> 3. Bağcıklarını bağla. (Önce ayakkabı giyilmez!)" },
            { "bold": "Çay Demleme", "text": "1. Suyu kaynat -> 2. Çayı demliğe koy -> 3. Sıcak suyu dök -> 4. 15 dakika bekle." },
            { "bold": "Okula Hazırlık", "text": "1. Uyan -> 2. Elini yüzünü yıka -> 3. Kahvaltı yap -> 4. Üniformanı giy." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Ekransız Kodlama Tahtası",
      "subtitle": "Kareli defterde kendi kodlama dünyamızı kuruyoruz:",
      "cards": [
        {
          "badge": "Sembol 1",
          "title": "Oklar ve Sayılar",
          "desc": "'3 ➡️' demek 3 kare sağa git demektir. '2 ⬆️' demek 2 kare yukarı çık demektir.",
          "items": [
            { "bold": "Kural", "text": "Her adım tek bir kare ilerletir." }
          ]
        },
        {
          "badge": "Sembol 2",
          "title": "Dönüşler",
          "desc": "Sağa dön veya sola dön komutları karakterin yüzünü çevirir ama yerini değiştirmez.",
          "items": [
            { "bold": "Dikkat", "text": "Önce yönünü dönmeli, sonra adım atmalıdır." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Hazine Avcısı Algoritması",
      "subtitle": "Kareli kâğıtta korsanı timsahlara yakalanmadan altın sandığına ulaştırın.",
      "steps": [
        { "title": "Haritayı Çiz", "desc": "6x6 kareli bir ızgara çizin. (1,1) karesine korsan, (6,6) karesine sandık koyun." },
        { "title": "Engelleri Yerleştir", "desc": "Rastgele 4 kareye timsah veya kaya resmi çizin." },
        { "title": "Kodunu Yaz", "desc": "Korsanı sandığa götüren en kısa ok kodlarını alt alta yazın." }
      ],
      "criteria": [
        "Adımları eksiksiz ve sıralı yazabilme",
        "Engellerin etrafından güvenle dolaşabilme",
        "En az komutla en verimli yolu bulma"
      ]
    },
    "tips": {
      "safetyTitle": "Algoritmik Düşünme İpuçları",
      "safetyRules": [
        { "bold": "Başlangıç ve Bitiş Şarttır", "text": "Her algoritmanın mutlaka bir 'BAŞLA' ve bir 'DUR' noktası olmalıdır." },
        { "bold": "Adımları Açık Yazın", "text": "'Biraz yürü' denmez; '3 adım ileri git' denir; kesinlik esastır." },
        { "bold": "Hata Olursa Başa Dön", "text": "Adımları tek tek parmağınızla takip ederek nerede şaşırdığınızı bulun." }
      ],
      "myths": [
        { "wrong": "Kodlama yapmak için mutlaka çok pahalı bir bilgisayar gerekir.", "correct": "En büyük bilgisayar bilimcileri algoritmalarını önce kâğıt üzerinde tasarlar." },
        { "wrong": "Algoritmada adımların sırası hiç önemli değildir.", "correct": "Sıralama hayati önem taşır; çorap giymeden ayakkabı giyilemez!" }
      ]
    },
    "quiz": {
      "question": "Bir problemin çözümü için adım adım izlenen sıralı yola ne ad verilir?",
      "options": [
        { "text": "A) Monitör", "isCorrect": False },
        { "text": "B) Algoritma", "isCorrect": True },
        { "text": "C) Yazıcı", "isCorrect": False },
        { "text": "D) Hoparlör", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Algoritma', belirli bir amaca ulaşmak için adım adım tasarlanan mantıksal işlem sırasıdır."
    },
    "summaryRules": [
      { "bold": "Algoritma", "text": "Adım adım kurallar ve sıralı eylemler bütünüdür." },
      { "bold": "Kesinlik", "text": "Her adım net ve anlaşılır olmalıdır." },
      { "bold": "Mantık Gücü", "text": "Kâğıt üzerinde kodlama yaparak beynimizi bir süper bilgisayara dönüştürürüz." }
    ],
    "homework": "Sabah yataktan kalkıp okula gidene kadar yaptığınız 5 adımlı algoritmayı defterinize yazın.",
    "nextWeekPreview": "Sömestr 2. Hafta: Zekâ Oyunları ve Labirent Çözme Maceraları - Kış tatili 2. bölüm!"
  },

  # 21. HAFTA
  {
    "week": 21,
    "date": "01 - 07 Şubat",
    "hours": "2 Ders Saati",
    "unit": "Sömestr: Bilişim ve Kodlama Kış Şenliği",
    "unitBadge": "Sömestr 2. Hafta",
    "unitTheme": "unite-somestr",
    "title": "Sömestr 2. Hafta: Zekâ ve Labirent Atölyesi",
    "subtitle": "Karesel Labirentler, Karar Noktaları ve En Kısa Yol (Optimizasyon)",
    "outcomeCode": "BTY.4.4.2",
    "targetSkill": "Stratejik Planlama & Alternatif Üretme",
    "curiosityQuestion": "Bir karınca dev bir labirentin içine girerse çıkışı nasıl bulur? Sürekli sağ duvara dokunarak yürürse ne olur?",
    "roadmap": [
      { "title": "Labirent Çözme Stratejisi", "desc": "Çıkmaz sokakları erkenden fark etme ve geri dönme mantığı." },
      { "title": "Sağ El Kuralı", "desc": "Labirentte sağ elinizi duvardan hiç ayırmadan yürürseniz çıkışı bulma sırrı." },
      { "title": "En Kısa Yol (Optimizasyon)", "desc": "10 adımda gidilebilecek bir yolu 6 adımda gidebilmenin yollarını arama." },
      { "title": "2. Döneme Hazırlık", "desc": "Önümüzdeki hafta başlayacak blok kodlama derslerine zihinsel motivasyon." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(21, "Sömestr 2. Hafta: Zekâ & Labirent"),
    "section1": {
      "title": "Labirentlerde Karar Noktaları",
      "subtitle": "Yol ikiye ayrıldığında doğru kararı nasıl veririz?",
      "cards": [
        {
          "title": "Yol Ayrımında 3 İpucu",
          "icon": "🛣️",
          "desc": "Algoritmada karar anları 'Eğer' bloklarının temelidir:",
          "items": [
            { "bold": "Çıkmaz Sokağı Gör", "text": "Eğer yolun sonu kapalıysa o yola hiç girmeden diğer tarafa yönel." },
            { "bold": "Hedef Pusulası", "text": "Hedef sağ üstteyse, mümkün olduğunca yukarı ve sağa giden yolları tercih et." },
            { "bold": "Dönüş İzi Bırak", "text": "Gittiğin yerleri işaretle ki aynı yanlış yola iki kez girip vakit kaybetmeyesin." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Optimizasyon: En Kısa Yolu Bul!",
      "subtitle": "Bilgisayarlar işlerini her zaman en hızlı ve en az enerjiyle yapmak ister:",
      "cards": [
        {
          "badge": "Uzun Yol",
          "title": "14 Adımlık Rota",
          "desc": "Gereksiz yere odanın etrafında tur atıp hedefe ulaşan algoritma.",
          "items": [
            { "bold": "Dezavantaj", "text": "Çok pil harcar, zaman kaybettirir." }
          ]
        },
        {
          "badge": "Akıllı Yol",
          "title": "6 Adımlık Rota",
          "desc": "Hedefe doğrudan engelleri aşarak en az adımla giden akıllı algoritma.",
          "items": [
            { "bold": "Avantaj", "text": "Hızlı, verimli ve profesyonel çözüm." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kendi Labirentini Yarat ve Arkadaşına Çözdür",
      "subtitle": "Arkadaşınıza çözmesi için gizli tuzakları olan bir zekâ labirenti tasarlayın.",
      "steps": [
        { "title": "Izgarayı Çiz", "desc": "Deftere 8x8 kare çizip giriş ve çıkış kapılarını belirleyin." },
        { "title": "Tuzaklar ve Duvarlar", "desc": "İçine 2 çıkmaz sokak ve 1 doğru geçit yerleştirin." },
        { "title": "Süre Tut", "desc": "Arkadaşınızın çıkışı kaç saniyede bulduğunu kronometreyle ölçün." }
      ],
      "criteria": [
        "Çözülebilir ve kurallı bir labirent tasarlama",
        "En kısa rota algoritmasını doğru hesaplayabilme",
        "Oyunlaştırılmış öğrenmeden keyif alma"
      ]
    },
    "tips": {
      "safetyTitle": "Zekâ Oyunlarında Başarı Sırları",
      "safetyRules": [
        { "bold": "Bütünü Görün", "text": "Labirente sadece başlangıç noktasından bakmayın; çıkıştan geriye doğru bakmak bazen çok daha kolaydır!" },
        { "bold": "Pes Etmeyin", "text": "Bir yol tıkandıysa bu bir başarısızlık değil; doğru yola bir adım daha yaklaşmaktır." },
        { "bold": "Kalemi Hafif Kullanın", "text": "Deneme yanılma yaparken kurşun kalemi hafif bastırın ki kolayca silinebilsin." }
      ],
      "myths": [
        { "wrong": "Labirentten çıkış sadece şans işidir.", "correct": "Labirentten çıkış matematik, mantık ve yön stratejisi işidir." },
        { "wrong": "En uzun yolu yürüyen daha çok puan alır.", "correct": "Bilişimde her zaman en kısa ve verimli çözümü bulan kazanır." }
      ]
    },
    "quiz": {
      "question": "Bir bilgisayarın bir işi en az adımda, en hızlı ve en az enerji harcayarak yapmasına ne ad verilir?",
      "options": [
        { "text": "A) Format Atmak", "isCorrect": False },
        { "text": "B) Verimlilik / Optimizasyon (En Kısa Yol)", "isCorrect": True },
        { "text": "C) Bilgisayarı Kapatmak", "isCorrect": False },
        { "text": "D) Ekranı Karartmak", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Verimlilik ve Optimizasyon', problemleri en kısa ve en az maliyetli yoldan çözme sanatıdır."
    },
    "summaryRules": [
      { "bold": "Labirent Stratejisi", "text": "Hedefe odaklanmak ve çıkmaz yolları erken fark etmektir." },
      { "bold": "En Kısa Yol", "text": "Gereksiz adımlardan kaçınarak zaman ve enerji kazanmaktır." },
      { "bold": "2. Dönem Başlıyor", "text": "Önümüzdeki hafta bilgisayar başında gerçek blok kodlamaya geçiyoruz!" }
    ],
    "homework": "Tatilde gazetelerden veya dergilerden 1 adet labirent bulup en kısa yoldan çözün.",
    "nextWeekPreview": "2. Dönem Başlangıcı: Problem Nedir? Günlük Hayat Problemlerini Çözme - Kodlama derslerimiz başlıyor!"
  },

  # 22. HAFTA
  {
    "week": 22,
    "date": "08 - 14 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Problem Çözme ve Algoritma Dünyası",
    "unitBadge": "Problem Çözme",
    "unitTheme": "unite-4",
    "title": "Problem Nedir? Günlük Hayat Problemleri",
    "subtitle": "Problemi Anlama, Ayrıştırma (Decomposition) ve Çözüm Planı Geliştirme",
    "outcomeCode": "BTY.4.4.3",
    "targetSkill": "Problemi Tanımlama & Parçalara Bölme",
    "curiosityQuestion": "Bir uzay mekiği fırlatılırken binlerce mühendis aynı anda çalışır. Bu kadar devasa bir problemi nasıl çözerler?",
    "roadmap": [
      { "title": "Problem Nedir?", "desc": "Hedefimize ulaşmamızı engelleyen, çözülmesi gereken her türlü durum veya soru." },
      { "title": "Problemi Ayrıştırma", "desc": "Büyük ve korkutucu bir sorunu küçük, kolay lokmalara bölerek çözme." },
      { "title": "Çözüm Planı (Strateji)", "desc": "Hangi adımları hangi sırayla yapacağımızı önceden belirleme." },
      { "title": "Bilgisayarlar Nasıl Çözer?", "desc": "Bilgisayarlar da tıpkı bizim gibi problemleri adım adım küçük komutlarla çözer." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(22, "Problem Çözme Süreci"),
    "section1": {
      "title": "Büyük Problemi Küçük Parçalara Böl!",
      "subtitle": "Bilişimcilerin en büyük süper gücü: 'Ayrıştırma (Decomposition)'",
      "cards": [
        {
          "title": "Örnek Problem: 'Odam Çok Dağınık!'",
          "icon": "🧩",
          "desc": "Tüm odaya birden bakarsanız gözünüz korkar; parçalara bölerseniz 10 dakikada biter:",
          "items": [
            { "bold": "1. Küçük Parça", "text": "Önce yerdeki oyuncakları toplayıp sepete koy." },
            { "bold": "2. Küçük Parça", "text": "Sonra masadaki kitap ve defterleri çantaya yerleştir." },
            { "bold": "3. Küçük Parça", "text": "En son yatağını düzelt. İşte problem bitti!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Problem Çözmenin 4 Altın Adımı",
      "subtitle": "George Polya'nın tüm dünyada kabul gören problem çözme yöntemi:",
      "cards": [
        {
          "badge": "Adım 1 ve 2",
          "title": "Anla ve Plan Yap",
          "desc": "Sorun tam olarak nedir? Elimde hangi bilgiler var? Hangi yöntemi kullanmalıyım?",
          "items": [
            { "bold": "Önemli", "text": "Problemi anlamadan çözüm üretmeye çalışmak karanlıkta koşmaya benzer." }
          ]
        },
        {
          "badge": "Adım 3 ve 4",
          "title": "Uygula ve Kontrol Et",
          "desc": "Planı harfiyen uygula. Sonuca ulaşınca 'Çözümüm gerçekten işe yaradı mı?' diye test et.",
          "items": [
            { "bold": "Önemli", "text": "İşe yaramadıysa pes etme, yeni bir plan dene." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Okul Kantinindeki Kuyruk Problemini Çözüyoruz",
      "subtitle": "Kantin sırasında çok bekleyen öğrencilerin sorununu adım adım çözelim.",
      "steps": [
        { "title": "Problemi Tanımla", "desc": "Teneffüs 10 dakika ama kantin sırası 8 dakika sürüyor; tost yemeye vakit kalmıyor." },
        { "title": "Parçalara Böl", "desc": "Para üstü hesaplama yavaş, herkes aynı anda sıraya giriyor, menü tahtada yazmıyor." },
        { "title": "3 Adımlı Çözüm Üret", "desc": "1. Menü önceden asılsın, 2. Önceden sipariş fişi verilsin, 3. İki ayrı kasa açılsın." }
      ],
      "criteria": [
        "Problemin asıl kaynağını doğru tespit edebilme",
        "Uygulanabilir ve yaratıcı çözümler önerme",
        "Fikirlerini sınıfla paylaşırken net ve anlaşılır olma"
      ]
    },
    "tips": {
      "safetyTitle": "Problem Çözerken Sakin Kalma Sanatı",
      "safetyRules": [
        { "bold": "Panik Yok!", "text": "Bir sorunla karşılaştığınızda önce derin bir nefes alıp sakinleşin." },
        { "bold": "Not Alın", "text": "Problemi ve bildiklerinizi bir kâğıda yazmak beyninizi rahatlatır." },
        { "bold": "Farklı Açılardan Bakın", "text": "'Bu sorunu bir kuş veya bir robot nasıl çözerdi?' diye düşünün." }
      ],
      "myths": [
        { "wrong": "Akıllı insanlar problemleri tek saniyede sihirle çözer.", "correct": "Akıllı insanlar problemleri adım adım, sabırla ve plan yaparak çözer." },
        { "wrong": "Bir plan tutmadıysa problem çözülemez demektir.", "correct": "Bir plan tutmadıysa B, C ve D planları devreye sokulur!" }
      ]
    },
    "quiz": {
      "question": "Büyük ve karmaşık bir problemi daha kolay çözebilmek için küçük ve yönetilebilir parçalara ayırma işlemine ne ad verilir?",
      "options": [
        { "text": "A) Bilgisayarı Kapatmak", "isCorrect": False },
        { "text": "B) Problemi Ayrıştırma (Parçalara Bölme)", "isCorrect": True },
        { "text": "C) Monitörü Temizlemek", "isCorrect": False },
        { "text": "D) Resim Çizmek", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Ayrıştırma (Decomposition)', bilişimsel düşünmenin en temel adımıdır; büyük işleri küçük parçalarla kolayca çözeriz."
    },
    "summaryRules": [
      { "bold": "Problem", "text": "Çözülmeyi bekleyen her türlü zorluk veya sorudur." },
      { "bold": "Ayrıştırma", "text": "Büyük sorunları küçük parçalara bölerek adım adım çözmektir." },
      { "bold": "4 Adım", "text": "Anla, Planla, Uygula ve Kontrol Et!" }
    ],
    "homework": "Evinizde yaşanan küçük bir problemi (örn: çorapların tekinin kaybolması) 3 adımda nasıl çözeceğinizi yazın.",
    "nextWeekPreview": "Algoritma Sihri: Yemek Tarifi ve Diş Fırçalama Algoritması - Günlük adımların kodlanması!"
  },

  # 23. HAFTA
  {
    "week": 23,
    "date": "15 - 21 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Problem Çözme ve Algoritma Dünyası",
    "unitBadge": "Algoritma Temelleri",
    "unitTheme": "unite-4",
    "title": "Algoritma Sihri: Günlük Yaşam Algoritmaları",
    "subtitle": "Algoritmanın Özellikleri, Sıralama Kuralları ve Diş Fırçalama Algoritması",
    "outcomeCode": "BTY.4.4.4",
    "targetSkill": "Algoritma Oluşturma & Adımları Mantıkla Sıralama",
    "curiosityQuestion": "Bir robota 'Dişlerini fırçala' deseniz, fırçaya macun sürmeden ağzına sokarsa hata kimdedir: Robotta mı, komutu eksik veren sizde mi?",
    "roadmap": [
      { "title": "Algoritmanın 3 Altın Kuralı", "desc": "1. Başlangıcı ve bitişi olmalı, 2. Adımları kesin ve net olmalı, 3. Sonuç üretmeli." },
      { "title": "Eksik Komut Tuzağı", "desc": "Bilgisayarlar ne eksik ne fazla, sadece söylediğimiz adımları harfiyen yapar." },
      { "title": "Diş Fırçalama Algoritması", "desc": "Macunu aç, fırçaya sür, 2 dakika dairesel fırçala, ağzını çalkala." },
      { "title": "Akış Sırasının Önemi", "desc": "Bir adımı atlamak veya sırasını karıştırmak tüm sistemi çökertebilir." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(23, "Algoritma Sihri: Günlük Rutinler"),
    "section1": {
      "title": "İyi Bir Algoritmanın Özellikleri",
      "subtitle": "Bir listenin algoritma sayılabilmesi için taşıması gereken özellikler:",
      "cards": [
        {
          "title": "Algoritma Kuralları",
          "icon": "📜",
          "desc": "Algoritmalar rastgele değil, katı kurallarla yazılır:",
          "items": [
            { "bold": "Başla ve Dur", "text": "Mutlaka 1. adım 'BAŞLA' ve son adım 'BİTİR' olmalıdır." },
            { "bold": "Net Komutlar", "text": "'Biraz su koy' belirsizdir; '1 bardak su koy' açık ve nettir." },
            { "bold": "Sonsuz Döngüye Girmemeli", "text": "Adımlar bir yerde tamamlanmalı ve hedefe ulaşmalıdır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Adım Adım Diş Fırçalama Algoritması",
      "subtitle": "Her sabah yaptığımız rutini bir bilgisayara öğretelim:",
      "cards": [
        {
          "badge": "1 - 3. Adım",
          "title": "Hazırlık",
          "desc": "1. BAŞLA -> 2. Diş fırçasını eline al -> 3. Diş macununun kapağını aç.",
          "items": [
            { "bold": "Detay", "text": "Macunu fırçanın üzerine nohut büyüklüğünde sık." }
          ]
        },
        {
          "badge": "4 - 6. Adım",
          "title": "Fırçalama ve Bitiş",
          "desc": "4. Dişlerini 2 dakika boyunca fırçala -> 5. Ağzını bol suyla çalkala -> 6. BİTİR.",
          "items": [
            { "bold": "Sonuç", "text": "Tertemiz ve parıldayan dişler!" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kör Robot ve Sandviç Algoritması",
      "subtitle": "Öğretmeniniz 'robot' olsun, siz de ona peynirli ekmek hazırlama komutları verin.",
      "steps": [
        { "title": "Öğrenci Komut Verir", "desc": "'Ekmeği al' dediğinizde robot poşeti açmadan ekmeği tutarsa ne yaparsınız?" },
        { "title": "Komutu Düzelt", "desc": "'1. Ekmek poşetinin klipsini aç -> 2. İçinden 1 dilim ekmek çıkar'." },
        { "title": "Hatasız Sandviç", "desc": "Adımları eksiksiz söyleyerek robotun peyniri ekmeğin arasına koymasını sağlayın." }
      ],
      "criteria": [
        "Komutları hiçbir adımı atlamadan sıralayabilme",
        "Açık, net ve anlaşılır yönergeler kullanma",
        "Algoritmik düşünmenin inceliklerini yaşayarak öğrenme"
      ]
    },
    "tips": {
      "safetyTitle": "Algoritma Yazarken Püf Noktaları",
      "safetyRules": [
        { "bold": "Kendinizi Robot Yerine Koyun", "text": "Robot sizin ne düşündüğünüzü bilmez; sadece ağzınızdan çıkan kelimeyi anlar." },
        { "bold": "Numaralandırın", "text": "Adımların başına 1, 2, 3 yazmak sıralamanın karışmasını engeller." },
        { "bold": "Test Edin", "text": "Yazdığınız algoritmayı bir kâğıtta kendiniz adım adım uygulayıp sonucu görün." }
      ],
      "myths": [
        { "wrong": "Robotlar akıllıdır, eksik söylediğimiz şeyleri kendileri tamamlar.", "correct": "Robotlar ve bilgisayarlar sadece söyleneni yapar; asla kendiliğinden tahmin edemez." },
        { "wrong": "Algoritmalar sadece matematikte kullanılır.", "correct": "Yemek yaparken, resim çizerken, oyun oynarken her an algoritma kullanırız." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki 'Kek Pişirme Algoritması' adımlarından hangisi 'EN SONDA' yer almalıdır?",
      "options": [
        { "text": "A) Yumurtaları kaba kır", "isCorrect": False },
        { "text": "B) Fırını 180 dereceye ayarla", "isCorrect": False },
        { "text": "C) Keki fırından çıkar ve afiyetle ye (BİTİR)", "isCorrect": True },
        { "text": "D) Un ve sütü karıştır", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Bir pişirme algoritmasında yemeğin servis edilmesi ve yenmesi (BİTİR) en son adımdır."
    },
    "summaryRules": [
      { "bold": "Algoritma Sihri", "text": "Adımları doğru sırayla dizerek harika sonuçlar üretmektir." },
      { "bold": "Net Komutlar", "text": "Bilgisayarlara verilen yönergeler asla belirsiz olmamalıdır." },
      { "bold": "Başla ve Bitir", "text": "Her sürecin net bir başlangıcı ve nihai bir bitişi vardır." }
    ],
    "homework": "En sevdiğiniz tostun yapılış algoritmasını 5 adımda defterinize yazın.",
    "nextWeekPreview": "Yönler ve Akış Şemaları: Karakteri Hedefe Ulaştırma - Algoritmaları şekillerle çizeceğiz!"
  },

  # 24. HAFTA
  {
    "week": 24,
    "date": "22 - 28 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Problem Çözme ve Algoritma Dünyası",
    "unitBadge": "Akış Şemaları",
    "unitTheme": "unite-4",
    "title": "Yönler ve Akış Şemaları: Hedefe Ulaşma",
    "subtitle": "Akış Şeması Sembolleri (Elips, Dikdörtgen, Eşkenar Dörtgen) ve Oklar",
    "outcomeCode": "BTY.4.4.5",
    "targetSkill": "Görsel Algoritma & Akış Şeması Çizme",
    "curiosityQuestion": "Mühendisler ve yazılımcılar kod yazmaya başlamadan önce neden duvarlara şekiller ve oklar çizerler?",
    "roadmap": [
      { "title": "Akış Şeması Nedir?", "desc": "Algoritmanın geometrik şekiller ve oklarla çizilmiş görsel haritası." },
      { "title": "Elips (Oval)", "desc": "Algoritmanın başladığını (BAŞLA) ve bittiğini (DUR) gösteren şekil." },
      { "title": "Dikdörtgen", "desc": "Yapılan eylemleri, hesaplamaları ve işlemleri gösteren kutu." },
      { "title": "Eşkenar Dörtgen (Baklava)", "desc": "Karar verme anı: 'Yağmur yağıyor mu? Evet ise şemsiye aç, Hayır ise yürü'." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(24, "Akış Şeması Sembolleri"),
    "section1": {
      "title": "Akış Şemasının Temel Sembolleri",
      "subtitle": "Her şeklin uluslararası standart bir anlamı vardır:",
      "cards": [
        {
          "title": "Şekillerin Gizli Dili",
          "icon": "📐",
          "desc": "Tüm dünyadaki yazılımcılar aynı şekilleri kullanarak anlaşırlar:",
          "items": [
            { "bold": "Elips (Başla / Bitir)", "text": "Şemanın en üstünde ve en altında mutlaka birer tane bulunur." },
            { "bold": "Dikdörtgen (İşlem)", "text": "'10 adım yürü', 'Sayıyı 2 ile çarp' gibi eylemler buraya yazılır." },
            { "bold": "Eşkenar Dörtgen (Karar)", "text": "İçine bir soru yazılır; 'EVET' ve 'HAYIR' olmak üzere iki ok çıkar." },
            { "bold": "Akış Okları (➡️ ⬇️)", "text": "Adımların hangi yöne doğru aktığını gösterir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Karar Anı: Evet mi, Hayır mı?",
      "subtitle": "Hayatımızdaki şartları akış şemasına dökmek:",
      "cards": [
        {
          "badge": "Şart",
          "title": "Hava Soğuk mu?",
          "desc": "Eşkenar dörtgen içine 'Hava soğuk mu?' yazılır.",
          "items": [
            { "bold": "EVET Oku", "text": "Montunu giy kutusuna gider." },
            { "bold": "HAYIR Oku", "text": "Tişörtünle kal kutusuna gider." }
          ]
        },
        {
          "badge": "Birleşim",
          "title": "Ortak Bitiş",
          "desc": "İki ok da en sonunda 'Dışarı çık' işlemine ve oradan 'BİTİR' elipsine bağlanır.",
          "items": [
            { "bold": "Kural", "text": "Bütün yollar eninde sonunda BİTİR'e ulaşmalıdır." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Trafik Lambası Akış Şeması Çizimi",
      "subtitle": "Trafik ışığında bekleyen bir yayaya ait akış şemasını defterimize çizelim.",
      "steps": [
        { "title": "Başla Elipsi", "desc": "Sayfanın başına bir elips çizip içine 'BAŞLA' yazın." },
        { "title": "Karar Baklavası", "desc": "Aşağı ok çekip eşkenar dörtgen çizin: 'Işık Yeşil mi?'" },
        { "title": "Kolları Çiz", "desc": "EVET ise -> 'Karşıya Geç' dikdörtgenine git. HAYIR ise -> 'Kaldırımda Bekle'ye git." }
      ],
      "criteria": [
        "Doğru sembolleri (elips, dikdörtgen, baklava) yerinde kullanma",
        "Akış oklarını doğru yönlendirebilme",
        "Temiz, cetvelle çizilmiş düzenli bir şema oluşturma"
      ]
    },
    "tips": {
      "safetyTitle": "Akış Şeması Çizerken Kurallar",
      "safetyRules": [
        { "bold": "Cetvel Kullanın", "text": "Düzgün çizilmiş şekiller şemanın okunmasını çok kolaylaştırır." },
        { "bold": "Okların Yönünü Unutmayın", "text": "Düz çizgi değil, mutlaka ucunda ok (➡️) olan çizgiler kullanın." },
        { "bold": "Karar Kutusundan 2 Ok Çıkar", "text": "Eşkenar dörtgenden her zaman biri EVET diğeri HAYIR olan 2 ok çıkmalıdır." }
      ],
      "myths": [
        { "wrong": "İstediğimiz herhangi bir şekli akış şemasında kafamıza göre kullanabiliriz.", "correct": "Şekillerin anlamı sabittir; dikdörtgen işlem, baklava karardır." },
        { "wrong": "Akış şeması sadece bilgisayar mühendisleri içindir.", "correct": "Doktorlar, pilotlar ve fabrika yöneticileri de süreçlerini akış şemalarıyla yönetir." }
      ]
    },
    "quiz": {
      "question": "Bir akış şemasında 'Karar verme' ve 'Şart sorgulama' (Örn: Sınav notu 50'den büyük mü?) için hangi geometrik sembol kullanılır?",
      "options": [
        { "text": "A) Dikdörtgen", "isCorrect": False },
        { "text": "B) Eşkenar Dörtgen (Baklava Dilimi)", "isCorrect": True },
        { "text": "C) Elips", "isCorrect": False },
        { "text": "D) Daire", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Eşkenar dörtgen (baklava dilimi), karar anlarını gösterir ve içinden EVET/HAYIR okları çıkar."
    },
    "summaryRules": [
      { "bold": "Akış Şeması", "text": "Algoritmanın görsel haritasıdır." },
      { "bold": "Elips", "text": "Başla ve Dur anlamına gelir." },
      { "bold": "Baklava", "text": "Karar verir ve yolu ikiye ayırır." }
    ],
    "homework": "'Ödev bitti mi?' sorusunu içeren 4 adımlı bir akış şemasını defterinize çizin.",
    "nextWeekPreview": "Blok Tabanlı Kodlamaya İlk Adım: Code.org ve Blok Dünyası - Bilgisayarda ilk bloklarımızı dizeceğiz!"
  },

  # 25. HAFTA
  {
    "week": 25,
    "date": "01 - 07 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Problem Çözme ve Algoritma Dünyası",
    "unitBadge": "Blok Kodlama Giriş",
    "unitTheme": "unite-4",
    "title": "Blok Tabanlı Kodlamaya İlk Adım: Code.org",
    "subtitle": "Blokların Mantığı, Sürükle-Bırak, Sahne, Kodlama Alanı ve İlk Görevler",
    "outcomeCode": "BTY.4.4.6",
    "targetSkill": "Görsel Bloklarla Program Yazma",
    "curiosityQuestion": "Kod yazmak için binlerce karmaşık İngilizce kelime ezberlemek şart mıdır, yoksa renkli blokları lego gibi takarak da oyun yapılabilir mi?",
    "roadmap": [
      { "title": "Blok Tabanlı Kodlama Nedir?", "desc": "Yazım hatası yapmadan, lego parçalarını birleştirir gibi program yazma yöntemi." },
      { "title": "Code.org Platformu", "desc": "Milyonlarca çocuğun kodlama öğrendiği eğlenceli bulmaca dünyası." },
      { "title": "Sürükle - Bırak (Drag & Drop)", "desc": "Blokları paletten alıp kodlama alanına takma ve 'Tık' sesini duyma." },
      { "title": "Karakteri Hedefe Götür", "desc": "Angry Birds veya sevimli sincabı engellere çarpmadan hedefe ulaştırma." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(25, "Blok Tabanlı Kodlama (Code.org)"),
    "section1": {
      "title": "Neden Blok Tabanlı Kodlama?",
      "subtitle": "Geleneksel kod yazmanın zorluklarını ortadan kaldıran harika buluş:",
      "cards": [
        {
          "title": "Lego Parçaları Gibi Kenetlenen Kodlar",
          "icon": "🧱",
          "desc": "Blok kodlamada imla hatası veya noktalı virgül unutma derdi yoktur!",
          "items": [
            { "bold": "Hata Yapmayı Önler", "text": "Birbirine uymayan bloklar fiziksel olarak kenetlenmez." },
            { "bold": "Görsel ve Renkli", "text": "Hareket blokları mavi, olaylar sarı, kontroller turuncudur." },
            { "bold": "Hızlı Sonuç", "text": "Yazdığınız kodun sonucunu anında sahnede canlı olarak izlersiniz." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Code.org Arayüzünü Tanıyalım",
      "subtitle": "Ekrandaki 3 ana bölüm:",
      "cards": [
        {
          "badge": "Sol Taraf",
          "title": "Sahne (Oyun Alanı)",
          "desc": "Karakterimizin yaşadığı, labirentin ve hedefin bulunduğu görsel alan. 'Çalıştır' butonu buradadır.",
          "items": [
            { "bold": "Görev", "text": "Karakteri hedefe ulaştırmak." }
          ]
        },
        {
          "badge": "Orta Taraf",
          "title": "Blok Paleti (Alet Çantası)",
          "desc": "Kullanabileceğimiz hazır komut bloklarının (İlerle, Sağa Dön, Zıpla) durduğu çekmece.",
          "items": [
            { "bold": "Kullanım", "text": "İhtiyacın olan bloğu tutup sağa sürükle." }
          ]
        },
        {
          "badge": "Sağ Taraf",
          "title": "Çalışma Alanı (Kod Masası)",
          "desc": "Blokları 'Çalıştığı Zaman' bloğunun altına alt alta dizip kenetlediğimiz yer.",
          "items": [
            { "bold": "Püf Noktası", "text": "Gereksiz bloğu sol tarafa geri atıp silebilirsiniz." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Code.org Klasik Labirent 1-5 Bölümleri",
      "subtitle": "Akıllı tahtada ve bilgisayarlarımızda ilk 5 kodlama bulmacasını çözelim.",
      "steps": [
        { "title": "Bölüm 1'i Aç", "desc": "Kuşun domuza ulaşması için 2 blok 'ilerle' takın ve Çalıştır'a basın." },
        { "title": "Dönüşleri Hesapla", "desc": "Bölüm 3'te sola dönmesi gereken yerde 'Sola Dön' bloğunu araya ekleyin." },
        { "title": "Yeşil Bayrağı Yakala", "desc": "5. bölümü en az blokla bitirip 'Tebrikler' rozetini kazanın." }
      ],
      "criteria": [
        "Blokları doğru sırada birbirine kenetleyebilme",
        "Karakterin yönüne göre sağ/sol dönüşünü karıştırmama",
        "Hedefe başarıyla ulaşıp sonraki seviyeye geçme"
      ]
    },
    "tips": {
      "safetyTitle": "Kodlama Yaparken İpuçları",
      "safetyRules": [
        { "bold": "Karakterin Gözünden Bakın", "text": "Karakter aşağı doğru bakıyorsa onun sağı sizin solunuz olabilir; kendinizi onun yerine koyun!" },
        { "bold": "'Tık' Sesini Duyun", "text": "Bloklar tam birbirine oturunca bir klik sesi çıkar; oturmazsa kod çalışmaz." },
        { "bold": "Adım Adım Çalıştırın", "text": "Kodunuz yanlışsa 'Adım' butonuna basarak hangi blokta hata olduğunu tek tek izleyin." }
      ],
      "myths": [
        { "wrong": "Blok kodlama gerçek kodlama değildir, sadece bir oyundur.", "correct": "Blokların arkasında gerçek Python ve JavaScript kodları yatar; mantık birebir aynıdır!" },
        { "wrong": "Ne kadar çok blok koyarsak o kadar çok puan alırız.", "correct": "Tam tersine, hedefi en az blokla çözen 'En Başarılı Kodlamacı' olur." }
      ]
    },
    "quiz": {
      "question": "Blok tabanlı kodlamada bir komutun çalışması için blok nereye takılmalıdır?",
      "options": [
        { "text": "A) Ekranın boş bir yerine tek başına bırakılmalıdır", "isCorrect": False },
        { "text": "B) 'Çalıştığı Zaman' bloğunun altına kenetlenmelidir", "isCorrect": True },
        { "text": "C) Çöp kutusuna atılmalıdır", "isCorrect": False },
        { "text": "D) Bilgisayarın klavyesinin üstüne konmalıdır", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Kodların çalışması için başlangıç tetiği olan 'Çalıştığı Zaman' bloğunun altına lego gibi takılması gerekir."
    },
    "summaryRules": [
      { "bold": "Blok Kodlama", "text": "Görsel ve eğlenceli yazılım üretme yöntemidir." },
      { "bold": "Sürükle-Bırak", "text": "Paletten aldığımız blokları çalışma masasında birleştiririz." },
      { "bold": "Code.org", "text": "Mantık ve problem çözme becerimizi geliştiren harika bir eğitim platformudur." }
    ],
    "homework": "Code.org sitesine evden girip 6, 7 ve 8. bulmacaları tamamlayın.",
    "nextWeekPreview": "Döngüler (Tekrarlar): 'Yorulmadan 10 Adım Yürü!' & 12 Mart İstiklâl Marşı'nın Kabulü!"
  },

  # 26. HAFTA
  {
    "week": 26,
    "date": "08 - 14 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Problem Çözme ve Algoritma Dünyası",
    "unitBadge": "Döngüler & 12 Mart",
    "unitTheme": "unite-4",
    "title": "Döngüler (Tekrarlar) & 12 Mart İstiklâl Marşı",
    "subtitle": "Tekrar Blokları (Repeat), Kod Tasarrufu ve Milli Marşımızın Kabulü",
    "outcomeCode": "BTY.4.4.7",
    "targetSkill": "Döngü Yapılarını Kullanarak Kodu Sadeleştirme",
    "curiosityQuestion": "Bir robota 100 adım attırmak için 100 tane 'İlerle' bloğu mu dizersiniz, yoksa '100 defa tekrarla: İlerle' mi dersiniz?",
    "roadmap": [
      { "title": "Döngü (Loop) Nedir?", "desc": "Aynı işlemi defalarca tekrarlayan süper pratik kod yapısı." },
      { "title": "Kod Hamallığından Kurtulmak", "desc": "20 satırlık kodu sadece 2 blokla yazabilme mucizesi." },
      { "title": "Geometrik Şekiller Çizme", "desc": "4 defa tekrarla (İlerle + Sağa dön) = Kusursuz bir Kare!" },
      { "title": "12 Mart İstiklâl Marşı Özel", "desc": "Mehmet Âkif Ersoy'un ölümsüz dizelerini dijital ortamda kodlama." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(26, "Döngüler & 12 Mart"),
    "section1": {
      "title": "Döngülerin Büyülü Gücü: Tekrar Et!",
      "subtitle": "Yorulmadan, sıkılmadan binlerce kez aynı görevi yapan kod blokları:",
      "cards": [
        {
          "title": "Döngüsüz Kod vs Döngülü Kod",
          "icon": "🔄",
          "desc": "Aynı işi iki farklı şekilde yapabiliriz ama hangisi daha akıllıca?",
          "items": [
            { "bold": "Döngüsüz (Zor Yol)", "text": "İlerle, İlerle, İlerle, İlerle, İlerle... (Sayfa bloklarla dolar!)" },
            { "bold": "Döngülü (Akıllı Yol)", "text": "'5 defa tekrarla: [ İlerle ]' -> Sadece tek bir blokla biter!" },
            { "bold": "Zamandan Tasarruf", "text": "Hata yapma ihtimali azalır, kod tertemiz görünür." }
          ]
        }
      ]
    },
    "section2": {
      "title": "12 Mart İstiklâl Marşı'nın Kabulü",
      "subtitle": "'Korkma, sönmez bu şafaklarda yüzen al sancak!'",
      "cards": [
        {
          "badge": "Milli Değer",
          "title": "Mehmet Âkif Ersoy'u Anıyoruz",
          "desc": "Kurtuluş Savaşı'nın bağımsızlık manifestosu olan marşımızın kabulünün yıldönümünü gururla kutluyoruz.",
          "items": [
            { "bold": "Bilişim Projesi", "text": "İstiklal Marşı'nın mısralarını döngülerle sırayla ekranda gösteren bir animasyon tasarlıyoruz." }
          ]
        },
        {
          "badge": "Kodlama",
          "title": "Mısra Döngüsü",
          "desc": "10 kıtayı sırayla ekrana getiren ve arkada şanlı bayrağımızı dalgalandıran kod blokları.",
          "items": [
            { "bold": "Vatan Sevgisi", "text": "Teknolojiyle tarihimizi ve değerlerimizi yaşatıyoruz." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Döngü ile Kare ve Yıldız Çizme",
      "subtitle": "Karakterimize döngü bloğu kullanarak geometrik şekiller çizdirelim.",
      "steps": [
        { "title": "Döngü Bloğunu Al", "desc": "Pembe renkli '... defa tekrarla' bloğunu çalışma masasına koyun." },
        { "title": "Sayısını 4 Yap", "desc": "Tekrar sayısını 4 olarak ayarlayın." },
        { "title": "İçine 2 Blok Tak", "desc": "İçine '100 adım ilerle' ve '90 derece sağa dön' bloklarını koyup çalıştırın!" }
      ],
      "criteria": [
        "Döngü bloğunun mantığını doğru kavrayabilme",
        "Geometrik şeklin kenar sayısı ile tekrar sayısını eşleştirme",
        "Kodu sadeleştirerek az blokla sonuca ulaşma"
      ]
    },
    "tips": {
      "safetyTitle": "Döngü İpuçları",
      "safetyRules": [
        { "bold": "İçine Koyduğunuz Bloklara Dikkat Edin", "text": "Döngünün içine ne koyarsanız o bloklar tekrarlanır; dışındakiler sadece bir kez çalışır." },
        { "bold": "Üçgen İçin 3 Tekrar", "text": "Eşkenar üçgen çizmek için 3 defa tekrarla ve 120 derece dön komutu kullanılır." },
        { "bold": "Sonsuz Döngü", "text": "Bazı oyunlarda karakterin sürekli koşması için 'Sürekli Tekrarla' bloğu kullanılır." }
      ],
      "myths": [
        { "wrong": "Döngü kullanmadan da her programı yapabiliriz, döngü gereksizdir.", "correct": "Döngü olmadan 1000 satırlık oyunlar yazılamaz; döngü yazılımcının en büyük yardımcısıdır." },
        { "wrong": "Döngü bilgisayarı yorar.", "correct": "Tam tersine, döngülü kodlar bilgisayarın belleğinde çok daha az yer kaplar." }
      ]
    },
    "quiz": {
      "question": "Bir karakterin kenarları eşit bir KARE çizmesi için hangi döngü kodu kullanılmalıdır?",
      "options": [
        { "text": "A) 2 defa tekrarla: [ İlerle, Sola dön ]", "isCorrect": False },
        { "text": "B) 4 defa tekrarla: [ İlerle, 90 derece Sağa dön ]", "isCorrect": True },
        { "text": "C) 10 defa tekrarla: [ Zıpla ]", "isCorrect": False },
        { "text": "D) 1 defa tekrarla: [ Dur ]", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Karenin 4 eşit kenarı ve 4 dik açısı olduğu için 4 defa [İlerle, 90 derece dön] döngüsü kusursuz bir kare çizer."
    },
    "summaryRules": [
      { "bold": "Döngüler", "text": "Aynı eylemleri belirlenen sayıda otomatik tekrarlayan bloklardır." },
      { "bold": "Sadelik", "text": "Döngüler sayesinde sayfalarca kod yazmaktan kurtuluruz." },
      { "bold": "12 Mart", "text": "İstiklâl Marşımız milletimizin bağımsızlık andıdır; gururla yaşatacağız." }
    ],
    "homework": "Eğer bir sekizgen çizmek isteseydik döngümüz kaç defa tekrarlamalıydı? Cevabını defterinize yazın.",
    "nextWeekPreview": "Şartlar (Eğer - Değilse): 'Yağmur Yağarsa Şemsiyeni Al!' & 18 Mart Çanakkale Zaferi!"
  },

  # 27. HAFTA
  {
    "week": 27,
    "date": "15 - 21 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Problem Çözme ve Algoritma Dünyası",
    "unitBadge": "Şartlar & 18 Mart",
    "unitTheme": "unite-4",
    "title": "Şartlar (Eğer - Değilse) & 18 Mart Çanakkale Zaferi",
    "subtitle": "Karar Mekanizmaları, Algılama Sensörleri ve Çanakkale Destanı",
    "outcomeCode": "BTY.4.4.8",
    "targetSkill": "Koşullu Durumları Kodlama & Karar Mekanizmaları",
    "curiosityQuestion": "Akıllı otonom araçlar kırmızı ışığı gördüğünde durup, yeşil yandığında geçmeyi hangi kod bloğu sayesinde bilir?",
    "roadmap": [
      { "title": "Koşul (Şart) Nedir?", "desc": "Bir olayın gerçekleşmesinin başka bir duruma bağlı olması ('Eğer ödev biterse oyun oynayabilirsin')." },
      { "title": "Eğer - Değilse (If - Else)", "desc": "Şart doğruysa A planını, şart yanlışsa B planını çalıştıran akıllı blok." },
      { "title": "Algılama ve Sensör Blokları", "desc": "'Renge dokunuyor mu?', 'Fareye tıklanıyor mu?', 'Mesafe 10'dan küçük mü?'" },
      { "title": "18 Mart Çanakkale Zaferi", "desc": "Tarihe altın harflerle kazınan 'Çanakkale Geçilmez!' destanını anma." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(27, "Koşul Blokları & 18 Mart"),
    "section1": {
      "title": "Bilgisayarlar Nasıl Karar Verir?",
      "subtitle": "Eğer bloğu bilgisayara akıl ve mantık kazandıran mekanizmadır:",
      "cards": [
        {
          "title": "Eğer - Değilse Mantığı",
          "icon": "⚖️",
          "desc": "Bilgisayar önce şartı kontrol eder: Doğru mu (Evet), Yanlış mı (Hayır)?",
          "items": [
            { "bold": "EĞER Şartı Doğruysa", "text": "Hemen altındaki birinci blok grubunu çalıştırır." },
            { "bold": "DEĞİLSE (Şart Yanlışsa)", "text": "Değilse kısmındaki alternatif blok grubunu çalıştırır." },
            { "bold": "Örnek", "text": "EĞER can = 0 ise: 'Oyun Bitti' de. DEĞİLSE: Oyuna devam et!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "18 Mart Çanakkale Zaferi ve Şehitleri Anma",
      "subtitle": "Vatan sevgisinin ve kahramanlığın en büyük destanı:",
      "cards": [
        {
          "badge": "Tarih",
          "title": "Seyit Onbaşı ve Kahramanlarımız",
          "desc": "276 kiloluk mermiyi sırtlayan Seyit Onbaşı ve Gazi Mustafa Kemal Atatürk'ün önderliğinde kazanılan büyük zafer.",
          "items": [
            { "bold": "Milli Bilinç", "text": "Şehitlerimizi saygı ve rahmetle anıyoruz." }
          ]
        },
        {
          "badge": "Kodlama",
          "title": "Çanakkale Simülasyonu",
          "desc": "Eğer düşman gemisi boğaza yaklaşırsa -> Topları ateşle! 'Çanakkale Geçilmez!' yazısını göster.",
          "items": [
            { "bold": "Algılama", "text": "Mesafe sensörü ile yaklaşan nesneleri algılama mantığı." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Trafik Lambası Kodluyoruz",
      "subtitle": "Arabayı kırmızı ışıkta durduran, yeşilde hareket ettiren Eğer bloğunu kuralım.",
      "steps": [
        { "title": "Sensörü Ayarla", "desc": "'Eğer kırmızı renge dokunuyor mu?' algılama bloğunu alın." },
        { "title": "Durdur", "desc": "İçine '0 adım ilerle (Dur)' ve 'Bekle' bloğunu takın." },
        { "title": "Değilse Kısmı", "desc": "Değilse kısmına '10 adım ilerle (Yol açık)' komutunu yerleştirip yeşil bayrağa basın." }
      ],
      "criteria": [
        "Eğer ve Değilse kavramlarını doğru ayırt etme",
        "Algılama bloklarını şart yuvasına yerleştirebilme",
        "Akıllı karar mekanizmasını simülasyonda başarıyla test etme"
      ]
    },
    "tips": {
      "safetyTitle": "Şart Bloklarında Püf Noktaları",
      "safetyRules": [
        { "bold": "Sürekli Tekrarla ile Kullanın", "text": "Eğer bloğu bir kere değil oyun boyunca kontrol etsin diye 'Sürekli Tekrarla' içine konulmalıdır." },
        { "bold": "Algılama Şekline Dikkat", "text": "Şart bloğunun yuvası altıgen şeklindedir; içine sadece sivri uçlu altıgen algılama blokları girer." },
        { "bold": "Skor Kontrolü", "text": "Eğer elma sayısı = 10 ise 'Kazandın!' mesajı yayınlayın." }
      ],
      "myths": [
        { "wrong": "Bilgisayarlar geleceği önceden tahmin edebilir.", "correct": "Bilgisayarlar sadece bizim 'Eğer şu olursa bunu yap' dediğimiz şartları kontrol eder." },
        { "wrong": "Değilse kısmı olmadan Eğer bloğu çalışmaz.", "correct": "Sadece tek bir 'Eğer' bloğu da kullanılabilir; Değilse zorunlu değildir, tercihtir." }
      ]
    },
    "quiz": {
      "question": "Bir oyunda karakterimizin duvara çarptığında 'Geriye Dönmesini', duvara çarpmadığında ise 'İlerlemeye Devam Etmesini' sağlayan kod yapısı hangisidir?",
      "options": [
        { "text": "A) Sadece Başla bloğu", "isCorrect": False },
        { "text": "B) Eğer (Duvara dokunuyor mu?) ... Değilse ...", "isCorrect": True },
        { "text": "C) Ses Çal bloğu", "isCorrect": False },
        { "text": "D) Yazıyı Sil bloğu", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Eğer - Değilse' yapısı iki farklı durumu kontrol ederek karaktere doğru kararı aldırır."
    },
    "summaryRules": [
      { "bold": "Koşul (Şart)", "text": "Karar verme anlarıdır; bir durumun sonucuna göre yön belirler." },
      { "bold": "Eğer - Değilse", "text": "Doğruysa bir yolu, yanlışsa diğer yolu çalıştırır." },
      { "bold": "18 Mart Zaferi", "text": "Çanakkale Geçilmez; bağımsızlık ve cesaret ruhumuzdur." }
    ],
    "homework": "Evinizde uygulanan 2 tane 'Eğer - Değilse' kuralı bulun (Örn: Eğer hava yağmurluysa çizme giy, değilse spor ayakkabı giy).",
    "nextWeekPreview": "Scratch Dünyasına Merhaba: Kedi Maskot, Sahne ve Blok Grupları - Gerçek Scratch başlıyor!"
  },

  # 28. HAFTA
  {
    "week": 28,
    "date": "22 - 28 Mart",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "Scratch Giriş",
    "unitTheme": "unite-5",
    "title": "Scratch Dünyasına Merhaba: Kedi Maskot & Sahne",
    "subtitle": "Scratch Arayüzü, Sahne (Stage), Karakterler (Sprites), Kod Blokları Grupları",
    "outcomeCode": "BTY.4.5.1",
    "targetSkill": "Scratch Arayüzünü Tanıma & İlk Animasyon",
    "curiosityQuestion": "Dünyadaki milyonlarca çocuğun kendi oyunlarını ve çizgi filmlerini yaptığı Scratch platformunun adı nereden gelir?",
    "roadmap": [
      { "title": "Scratch Nedir?", "desc": "MIT Üniversitesi tarafından çocuklar için geliştirilen en popüler blok kodlama aracı." },
      { "title": "Arayüzün 4 Bölgesi", "desc": "1. Blok Paleti, 2. Kodlama Alanı, 3. Sahne (Stage), 4. Karakter & Arka Plan Paneli." },
      { "title": "Yeşil Bayrak & Kırmızı Buton", "desc": "Oyunları başlatan yeşil bayrak ve acil durdurma sağlayan kırmızı dur butonu." },
      { "title": "İlk Merhaba Projesi", "desc": "Kedi maskotunun 'Merhaba Dünya! Kodlamayı Çok Seviyorum!' demesi." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(28, "Scratch Dünyasına Merhaba!"),
    "section1": {
      "title": "Scratch Arayüzünün Haritası",
      "subtitle": "Kendi oyun stüdyomuzun kontrol paneli:",
      "cards": [
        {
          "title": "4 Ana Çalışma Bölgesi",
          "icon": "🖥️",
          "desc": "Scratch ekranında her şey yerli yerindedir:",
          "items": [
            { "bold": "1. Blok Çekmecesi (Sol)", "text": "Hareket (Mavi), Görünüm (Mor), Ses (Pembe), Olaylar (Sarı), Kontrol (Turuncu)." },
            { "bold": "2. Kodlama Alanı (Orta)", "text": "Blokları sürükleyip lego gibi dizdiğimiz geniş çalışma masası." },
            { "bold": "3. Sahne / Stage (Sağ Üst)", "text": "Oyunumuzun çalıştığı 480x360 piksellik renkli tiyatro sahnesi." },
            { "bold": "4. Karakter Paneli (Sağ Alt)", "text": "Yeni kuklalar ve dekorlar eklediğimiz, boyut ve yön ayarladığımız yer." }
          ]
        }
      ]
    },
    "section2": {
      "title": "İlk Scratch Kodumuz",
      "subtitle": "Kedi maskotunu konuşturup hareket ettirelim:",
      "cards": [
        {
          "badge": "Tetikleyici",
          "title": "Tıklanınca (Yeşil Bayrak)",
          "desc": "Olaylar menüsünden 'Yeşil bayrağa tıklanınca' bloğunu alıp masaya koyun.",
          "items": [
            { "bold": "Önemli", "text": "Bütün Scratch projeleri bu sarı blokla başlar." }
          ]
        },
        {
          "badge": "Eylem",
          "title": "Konuş ve Yürü",
          "desc": "'2 saniye boyunca Merhaba de!' ve '10 adım git' bloklarını altına kenetleyin.",
          "items": [
            { "bold": "Sonuç", "text": "Yeşil bayrağa bastığınızda kedi konuşur ve ileri doğru yürür!" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kendi Karakterimi Seçiyorum ve Konuşturuyorum",
      "subtitle": "Scratch kütüphanesinden sevdiğiniz bir kukla seçip sahneye arka plan ekleyin.",
      "steps": [
        { "title": "Arka Plan Ekle", "desc": "Sağ alttaki 'Dekor Seç' butonuna tıklayıp 'Blue Sky (Mavi Gökyüzü)' dekorunu seçin." },
        { "title": "Yeni Kukla Ekle", "desc": "'Kukla Seç' butonundan sevimli bir ayı veya penguen karakteri ekleyin." },
        { "title": "Kodunu Yaz", "desc": "Yeşil bayrağa tıklanınca kuklanız '4. Sınıf Kodlama Dersi Başladı!' desin." }
      ],
      "criteria": [
        "Scratch arayüzünde dekor ve kukla ekleyebilme",
        "Olaylar ve Görünüm bloklarını doğru birleştirebilme",
        "Projeyi bilgisayara '.sb3' uzantısıyla kaydedebilme"
      ]
    },
    "tips": {
      "safetyTitle": "Scratch Başlangıç İpuçları",
      "safetyRules": [
        { "bold": "Kuklaya Tıkladığınızdan Emin Olun", "text": "Kod yazmadan önce sağ altta hangi kuklanın seçili olduğuna bakın; yoksa sahneye kod yazabilirsiniz!" },
        { "bold": "Boyut Ayarı", "text": "Kukla çok büyük geldiyse sağ alttaki 'Büyüklük: 100' değerini 70 veya 50 yapın." },
        { "bold": "Projeyi Kaydetmeyi Unutmayın", "text": "'Dosya > Bilgisayarına Kaydet' diyerek emeğinizi güvenceye alın." }
      ],
      "myths": [
        { "wrong": "Scratch'te sadece sarı kedi kuklasıyla oyun yapılabilir.", "correct": "Kütüphanede yüzlerce hayvan, insan, uzay aracı vardır; hatta kendi çiziminizi bile kukla yapabilirsiniz!" },
        { "wrong": "Scratch internet olmadan asla çalışmaz.", "correct": "Scratch masaüstü uygulamasını bilgisayarınıza kurarak internetsiz de özgürce çalışabilirsiniz." }
      ]
    },
    "quiz": {
      "question": "Scratch programında hazırladığımız oyun ve animasyonları başlatmak için sahnenin üzerindeki hangi renkli simgeye tıklanır?",
      "options": [
        { "text": "A) Kırmızı Buton", "isCorrect": False },
        { "text": "B) Yeşil Bayrak", "isCorrect": True },
        { "text": "C) Sarı Yıldız", "isCorrect": False },
        { "text": "D) Mavi Kare", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> Scratch dünyasında projeleri başlatmanın evrensel sembolü 'Yeşil Bayrak'tır."
    },
    "summaryRules": [
      { "bold": "Scratch", "text": "Oyun ve animasyon yapmamızı sağlayan görsel kodlama platformudur." },
      { "bold": "Kukla ve Sahne", "text": "Kuklalar oyuncularımız, sahne ise onların tiyatrosudur." },
      { "bold": "Yeşil Bayrak", "text": "Kodların çalışmasını başlatan sihirli düğmedir." }
    ],
    "homework": "Scratch'te kediyi 50 adım ileri götürüp 'Miyav' sesi çıkartan mini bir kod yazın.",
    "nextWeekPreview": "2. Dönem 1. Yazılı Sınav Tekrarı & Kod Hata Ayıklama (Debugging) - Kod dedektifliği yapacağız!"
  },

  # 29. HAFTA
  {
    "week": 29,
    "date": "29 Mart - 04 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "Sınav Tekrarı & Debug",
    "unitTheme": "unite-5",
    "title": "2. Dönem 1. Yazılı Sınav Tekrarı & Debug",
    "subtitle": "Algoritma, Akış Şemaları, Döngüler, Şartlar ve Hata Ayıklama (Debug)",
    "outcomeCode": "BTY.4.5.2",
    "targetSkill": "Kod Hatalarını Bulma & Düzeltme (Debugging)",
    "curiosityQuestion": "1947 yılında dünyanın ilk dev bilgisayarlarından birinin içine bir böcek (bug) girip sistemi durdurdu. O günden beri yazılımdaki hatalara neden 'Bug' denir?",
    "roadmap": [
      { "title": "Bug ve Debug Nedir?", "desc": "Bug = Kod hatası, Debug = Hatayı bulup temizleme sanatı." },
      { "title": "Algoritma ve Şemalar", "desc": "Elips, dikdörtgen, baklava ve döngülerin sınav hazırlık özeti." },
      { "title": "Yaygın Scratch Hataları", "desc": "Yeşil bayrak koymayı unutmak, ters açıya dönmek, döngüyü yanlış kurmak." },
      { "title": "Sınav Taktikleri", "desc": "2. dönemin ilk yazılı sınavında 100 alma stratejileri." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(29, "2. Dönem 1. Yazılı Sınav & Debug"),
    "section1": {
      "title": "Hata Ayıklama (Debug) Nasıl Yapılır?",
      "subtitle": "Gerçek bir yazılımcı hata yapmaktan korkmaz, hatayı bulmaktan zevk alır!",
      "cards": [
        {
          "title": "Kod Dedektifinin 3 Adımı",
          "icon": "🐞",
          "desc": "Programınız beklediğiniz gibi çalışmıyorsa şu sırayı takip edin:",
          "items": [
            { "bold": "1. Hatayı Gözlemle", "text": "Karakter ne yapıyor? Duvara mı çarpıyor, dönmüyor mu yoksa hiç hareket etmiyor mu?" },
            { "bold": "2. Blokları Sırayla Oku", "text": "Yukarıdan aşağıya doğru blokları tıpkı bir robot gibi sesli oku." },
            { "bold": "3. Yanlış Bloğu Değiştir", "text": "Örn: '90 derece sağa' yerine yanlışlıkla '90 derece sola' mı konulmuş?" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sınavda Çıkacak Temel Kod Soruları",
      "subtitle": "Soru çözerken dikkat edilecek can alıcı noktalar:",
      "cards": [
        {
          "badge": "Soru Tipi 1",
          "title": "Döngü Hesaplama",
          "desc": "'3 defa tekrarla: [ 2 adım git ]' -> Karakter toplam kaç adım gider? (3 x 2 = 6 adım).",
          "items": [
            { "bold": "İpucu", "text": "Tekrar sayısı ile adım sayısını çarpın." }
          ]
        },
        {
          "badge": "Soru Tipi 2",
          "title": "Şart Kontrolü",
          "desc": "'Eğer elma kırmızı ise sepete koy, değilse çöpe at'. Elma yeşilse ne olur? Çöpe atılır!",
          "items": [
            { "bold": "İpucu", "text": "Şart sağlanmadığında Değilse kısmı çalışır." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Bozuk Kodları Tamir Etme Atölyesi",
      "subtitle": "Öğretmenimizin tahtaya getirdiği 3 hatalı Scratch kodunu sınıfça debug edelim.",
      "steps": [
        { "title": "Bozuk Kod 1", "desc": "Kedi hiç yürümüyor çünkü 'Yeşil bayrak tıklanınca' bloğu unutulmuş! Bloğu ekleyin." },
        { "title": "Bozuk Kod 2", "desc": "Kare çizmek yerine üçgen çiziyor çünkü tekrar sayısı 3 yapılmış. 4 olarak düzeltin." },
        { "title": "Bozuk Kod 3", "desc": "Karakter baş aşağı dönüyor! Yön stilini 'Sağa-Sola' olarak ayarlayın." }
      ],
      "criteria": [
        "Hatanın kaynağını hızlıca tespit edebilme",
        "Doğru kod bloğunu yerine yerleştirme",
        "Sınav sorularına analitik yaklaşımla çözüm üretme"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Başarı Rehberi",
      "safetyRules": [
        { "bold": "Kod Bloklarını Parmağınızla İzleyin", "text": "Soru kâğıdındaki blokları sırasıyla parmağınızla takip ederek kafanızda canlandırın." },
        { "bold": "Çarpma İşlemine Dikkat", "text": "Döngü içi adım hesaplamalarında matematiksel çarpma yapmayı unutmayın." },
        { "bold": "Eksik Blok Bırakmayın", "text": "Akış şeması sorularında okların uçlarını ve yönlerini dikkatle kontrol edin." }
      ],
      "myths": [
        { "wrong": "Hata yapan biri iyi bir yazılımcı olamaz.", "correct": "Dünyanın en iyi yazılımcıları günlerinin yarısını hata ayıklayarak (debugging) geçirir!" },
        { "wrong": "Scratch blokları rastgele takılsa da çalışır.", "correct": "Kodlama kesin kurallara dayanır; bir blok eksik olursa program çalışmaz." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod çalıştırıldığında kedi toplam KAÇ ADIM ilerlemiş olur?\n[ 5 defa tekrarla: [ 10 adım git ] ]",
      "options": [
        { "text": "A) 10 adım", "isCorrect": False },
        { "text": "B) 15 adım", "isCorrect": False },
        { "text": "C) 50 adım", "isCorrect": True },
        { "text": "D) 5 adım", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> 5 defa 10 adım git komutu çalıştığında 5 x 10 = 50 adım ilerlenmiş olur."
    },
    "summaryRules": [
      { "bold": "Debug (Hata Ayıklama)", "text": "Kod hatalarını bulup düzeltme uzmanlığıdır." },
      { "bold": "Döngü & Şart", "text": "Kodlamanın bel kemiğidir; sınavda en çok puan getiren konulardır." },
      { "bold": "Kendine İnan", "text": "Çalışan, mantık kuran ve pes etmeyen her öğrenci sınavda 100 alır!" }
    ],
    "homework": "Sınav çalışma kâğıdındaki 5 hatalı kodu evde inceleyip doğrularını altına yazın.",
    "nextWeekPreview": "Karakterleri Canlandırma: Yürüme, Zıplama ve Kostüm Değiştirme - Karakterlerimize hayat vereceğiz!"
  },

  # 30. HAFTA
  {
    "week": 30,
    "date": "05 - 11 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "Karakter Canlandırma",
    "unitTheme": "unite-5",
    "title": "Karakterleri Canlandırma: Yürüme & Zıplama",
    "subtitle": "Kostüm Değiştirme (Next Costume), Bekleme Süreleri, Zıplama Fiziği ve Sesler",
    "outcomeCode": "BTY.4.5.3",
    "targetSkill": "Animasyon Yapma & Karakterleri Hareketlendirme",
    "curiosityQuestion": "Çizgi filmlerdeki karakterler aslında kâğıda çizilmiş hareketsiz resimlerdir; peki ekranda nasıl koşup zıplarlar?",
    "roadmap": [
      { "title": "Animasyonun Sırrı", "desc": "Birbirini takip eden resimlerin hızla gösterilmesiyle hareket yanılsaması oluşturma." },
      { "title": "Kostümler (Costumes)", "desc": "Scratch kuklasının farklı bacak ve kol pozisyonlarını gösteren kıyafetleri." },
      { "title": "Sonraki Kostüm Bloğu", "desc": "Her adımda kostüm değiştirerek canlı yürüyüş hissi verme." },
      { "title": "Zıplama Hareketi", "desc": "Y koordinatını önce 50 artırıp (yukarı çık), sonra 50 azaltma (aşağı inme) fiziği." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(30, "Karakterleri Canlandırma & Kostümler"),
    "section1": {
      "title": "Çizgi Film Sihirbazlığı: Kostüm Değişimi",
      "subtitle": "Kedi maskotunu canlı gibi koşturmanın püf noktası:",
      "cards": [
        {
          "title": "Yürüme Algoritması",
          "icon": "🏃",
          "desc": "Kedi1 kuklasının iki kostümü vardır: 'kostum1' (ayaklar açık) ve 'kostum2' (ayaklar kapalı).",
          "items": [
            { "bold": "1. Blok", "text": "10 adım git." },
            { "bold": "2. Blok", "text": "Sonraki kostüme geç." },
            { "bold": "3. Blok", "text": "0.1 saniye bekle (Beklemezseniz çok hızlı değişir, ayaklar fırıldak gibi olur!)." },
            { "bold": "Döngüye Al", "text": "Bu 3 bloğu 'Sürekli Tekrarla' içine koyun; işte koşan kedi!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Yerçekimi ve Zıplama Fiziği",
      "subtitle": "Klavyeden Boşluk (Space) tuşuna basınca karakteri zıplatmak:",
      "cards": [
        {
          "badge": "Yukarı Çıkış",
          "title": "Y Konumunu Artır (+)",
          "desc": "Ekrandaki dikey eksen Y eksenidir. Y'yi 10 kez +5 artırırsanız kukla yukarı doğru uçar.",
          "items": [
            { "bold": "Tepe Noktası", "text": "En tepede 0.1 saniye havada asılı kalır." }
          ]
        },
        {
          "badge": "Aşağı İniş",
          "title": "Y Konumunu Azalt (-)",
          "desc": "Yerçekimi devreye girer: Y'yi 10 kez -5 azaltırsanız kukla yere yumuşakça geri iner.",
          "items": [
            { "bold": "Sonuç", "text": "Gerçekçi bir süper Mario zıplaması!" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Koşan ve Zıplayan Kedi Oyunu",
      "subtitle": "Klavye ok tuşlarıyla sağa sola koşan, boşluk tuşuyla engelin üstünden zıplayan oyun yapalım.",
      "steps": [
        { "title": "Sağ Ok Kodu", "desc": "'Sağ ok tuşuna basılınca': Yönünü 90 yap, 10 adım git, sonraki kostüm." },
        { "title": "Sol Ok Kodu", "desc": "'Sol ok tuşuna basılınca': Yönünü -90 yap, 10 adım git, sonraki kostüm." },
        { "title": "Boşluk Tuşu (Zıpla)", "desc": "'Boşluk tuşuna basılınca': Y'yi 50 değiştir, 0.2 sn bekle, Y'yi -50 değiştir." }
      ],
      "criteria": [
        "Kostüm değiştirme ve bekleme süresini dengeli ayarlama",
        "Klavye tuşlarıyla karakter kontrolünü sağlama",
        "Zıplama hareketini pürüzsüz kodlayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Animasyon Yaparken İpuçları",
      "safetyRules": [
        { "bold": "Dönüş İznini Ayarlayın", "text": "Sol oka basınca kedi baş aşağı dönüyorsa, 'Dönüş İznini: Sadece Sağa-Sola' olarak seçin." },
        { "bold": "Bekleme Süresi Çok Önemli", "text": "0.1 saniye ideal yürüyüş hızıdır; 1 saniye yaparsanız çok yavaş kalır." },
        { "bold": "Kenara Geldiyse Sektir", "text": "Karakter ekrandan kaybolmasın diye 'Kenara geldiyse sektir' bloğunu ekleyin." }
      ],
      "myths": [
        { "wrong": "Karakterin zıplaması için sadece 'Yukarı git' demek yeterlidir.", "correct": "Eğer aşağı indirme kodu yazmazsanız karakter havada asılı kalır; mutlaka geri indirmelisiniz!" },
        { "wrong": "Ses eklemek oyunu yavaşlatır.", "correct": "Zıplama anına konulan 'Pop' veya 'Boing' sesi oyuna harika bir neşe katar." }
      ]
    },
    "quiz": {
      "question": "Scratch'te bir karakterin yürürken bacaklarını hareket ettiriyormuş gibi görünmesi için hangi blok kullanılır?",
      "options": [
        { "text": "A) Görünümü Gizle", "isCorrect": False },
        { "text": "B) Sonraki Kostüme Geç", "isCorrect": True },
        { "text": "C) Sahneyi Karart", "isCorrect": False },
        { "text": "D) Bilgisayarı Kapat", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'Sonraki Kostüm' bloğu kuklanın bir sonraki çizimine geçerek yürüyüş animasyonu oluşturur."
    },
    "summaryRules": [
      { "bold": "Kostümler", "text": "Karakterin farklı çizimleridir; hızla değişince animasyon doğar." },
      { "bold": "Bekleme Süresi", "text": "0.1 saniye gibi minik beklemeler hareketi doğallaştırır." },
      { "bold": "Zıplama", "text": "Y eksenini önce artırıp sonra azaltarak yerçekimi simüle edilir." }
    ],
    "homework": "Scratch'te bir kelebek veya kuş kuklası seçip kanat çırpma animasyonu kodlayın.",
    "nextWeekPreview": "2. Dönem Ara Tatil: Scratch Oyun Tasarım Atölyesi - Tatilde kendi labirent oyunumuzu kodluyoruz!"
  },

  # 31. HAFTA
  {
    "week": 31,
    "date": "12 - 18 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Scratch ile Kendi Oyunumu Yapıyorum",
    "unitBadge": "2. Ara Tatil",
    "unitTheme": "unite-somestr",
    "title": "2. Dönem Ara Tatil: Scratch Oyun Kulübü",
    "subtitle": "Kendi Labirent Oyununu Kodlama, Duvar Algılama, Hazine ve Seviyeler",
    "outcomeCode": "BTY.4.5.4",
    "targetSkill": "Kapsamlı Oyun Tasarımı & Hata Ayıklama",
    "curiosityQuestion": "Bir oyunda canavar duvardan geçemezken biz nasıl geçemeyiz? Oyun duvarı bizim çarptığımızı nasıl anlar?",
    "roadmap": [
      { "title": "Labirent Oyunu Mimarisi", "desc": "Karakter, labirent duvarları, toplanacak ödüller ve çıkış kapısı." },
      { "title": "Renge Dokunuyor mu?", "desc": "Karakter siyah renkli duvara çarparsa 5 adım geri sekme algoritması." },
      { "title": "Ödül Toplama & Gizlenme", "desc": "Elmaya dokununca 'Ding' sesi çal, puanı artır ve elmayı gizle." },
      { "title": "Tebrikler Ekranı", "desc": "Çıkış kapısına ulaşınca sahnenin değişmesi ve 'KAZANDIN!' yazısı." }
    ],
    "roadmapSvg": get_svg_for_week_4_part3(31, "2. Dönem Ara Tatil: Scratch Oyun Kulübü"),
    "section1": {
      "title": "Labirent Oyununun Temel Mekaniği",
      "subtitle": "Gerçekçi bir oyunun duvar çarpışma kuralı:",
      "cards": [
        {
          "title": "Duvar Algılama Algoritması",
          "icon": "🧱",
          "desc": "Karakterin duvarın içinden geçip gitmesini engelleyen sihirli kod:",
          "items": [
            { "bold": "Hareket", "text": "Sağ oka basınca 5 adım ileri git." },
            { "bold": "Kontrol", "text": "EĞER siyah duvara dokunuyor mu?" },
            { "bold": "Geri Tepme", "text": "Hemen -5 adım geri git (Böylece duvarın önünde kilitlenir kalır!)." },
            { "bold": "Kusursuz Sonuç", "text": "Karakter hiçbir zaman duvardan geçemez." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Ödül ve Puan Sistemi",
      "subtitle": "Oyuncuyu motive eden hedefler eklemek:",
      "cards": [
        {
          "badge": "Ödül (Elma)",
          "title": "Toplama Kodu",
          "desc": "Eğer 'Kedi' kuklasına dokunuyor mu? -> 'Chomp' sesini çal -> 'Gizlen' -> Puanı 1 artır.",
          "items": [
            { "bold": "Yeniden Başlama", "text": "Yeşil bayrağa basıldığında elma yeniden 'Görün'melidir!" }
          ]
        },
        {
          "badge": "Kazanma",
          "title": "Bölüm Sonu Bayrağı",
          "desc": "Eğer yeşil kapıya ulaşıldıysa -> 'Kazandınız!' dekoruna geç ve tüm kodları durdur.",
          "items": [
            { "bold": "Zafer", "text": "Oyuncu labirenti başarıyla tamamladı!" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Tatil Özel: Kendi Labirent Oyunumu Yapıyorum",
      "subtitle": "Paint ile kendi labirentinizi çizin ve Scratch'te oynanabilir tam bir oyun yapın.",
      "steps": [
        { "title": "Labirenti Çiz", "desc": "Sahne dekoruna girip çizgi aracıyla siyah renkli bir labirent çizin." },
        { "title": "Kediyi Boyutlandır", "desc": "Kedinin boyutunu 40 yapın ki labirentin dar koridorlarından geçebilsin." },
        { "title": "Kodları Yaz ve Oyna", "desc": "4 yön tuşu ve duvardan sekme kodlarını yazıp ailenize test ettirin." }
      ],
      "criteria": [
        "Özgün bir labirent dekoru tasarlayabilme",
        "Renk algılama ve geri sekme kodunu hatasız kurma",
        "Puan ve ödül mekanizmasını oyuna başarıyla ekleme"
      ]
    },
    "tips": {
      "safetyTitle": "Oyun Geliştirici Tüyoları",
      "safetyRules": [
        { "bold": "Başlangıç Konumunu Belirleyin", "text": "Yeşil bayrağa basınca kedinin her zaman sol üstteki başlangıç noktasına gitmesi için 'x: -200 y: 150 konumuna git' bloğunu en başa koyun." },
        { "bold": "Koridorları Geniş Bırakın", "text": "Labirent yolları kedinin geçemeyeceği kadar dar olursa oyun kilitlenir." },
        { "bold": "Arkadaşına Oynat", "text": "Oyunu yapımcısı değil başkası oynayınca gizli hatalar hemen ortaya çıkar!" }
      ],
      "myths": [
        { "wrong": "Oyun yapmak için kodları tek seferde mükemmel yazmak gerekir.", "correct": "Oyunlar deneme, yanılma, test etme ve geliştirme ile adım adım mükemmelleşir." },
        { "wrong": "Scratch oyunları sadece bilgisayarda kalır.", "correct": "Scratch web sitesinde paylaşarak tüm dünyadaki çocukların oyununuzu oynamasını sağlayabilirsiniz." }
      ]
    },
    "quiz": {
      "question": "Scratch'te bir kuklanın topladığı elmanın ekranda kaybolması ve gizlenmesi için hangi Görünüm bloğu kullanılır?",
      "options": [
        { "text": "A) Göster", "isCorrect": False },
        { "text": "B) Gizle", "isCorrect": True },
        { "text": "C) Ses Çal", "isCorrect": False },
        { "text": "D) Boyutu 200 Yap", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Gizle' bloğu kuklayı görünmez yapar; ödül toplanınca gizlenmesi için bu blok kullanılır."
    },
    "summaryRules": [
      { "bold": "Labirent Fiziği", "text": "Renge dokunma ve geri tepme ile duvar hissi verilir." },
      { "bold": "Başlangıç Noktası", "text": "Her oyun başladığında karakter başlangıç koordinatına gitmelidir." },
      { "bold": "Oyun Tasarımcısı", "text": "Artık sadece tüketici değil, kendi kurallarını yazan bir oyun tasarımcısısınız!" }
    ],
    "homework": "Tatil boyunca tasarladığınız labirent oyununu ailenizle oynayın ve en yüksek skoru kimin yaptığını not edin.",
    "nextWeekPreview": "23 Nisan Çocuk Bayramı İnteraktif Tebrik Kartı Tasarımı - Bayramımızı kodla kutluyoruz!"
  }
]
