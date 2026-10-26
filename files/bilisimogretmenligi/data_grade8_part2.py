#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
MEB 8. Sınıf Bilişim Teknolojileri ve Yazılım
Türkiye Yüzyılı Maarif Modeli (2026-2027)
1. Dönem 2. Kısım: Hafta 11 - 19
Öğretmen: Vahit Keskin
"""

from data_grade8_part1 import get_svg_for_week_8

def get_svg_for_week_8_part2(week_num, title):
    if week_num == 11:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Kriptoloji & Asimetrik Şifreleme</text>

  <!-- Açık Anahtar & Gizli Anahtar -->
  <g transform="translate(80, 75)">
    <rect width="120" height="90" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="60" y="38" text-anchor="middle" font-size="28">🔓</text>
    <text x="60" y="65" text-anchor="middle" fill="#6ee7b7" font-size="11" font-weight="bold">Public Key</text>
    <text x="60" y="80" text-anchor="middle" fill="#94a3b8" font-size="9">Açık Anahtar (Kilitle)</text>
  </g>

  <g transform="translate(250, 75)">
    <rect width="120" height="90" rx="10" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
    <text x="60" y="38" text-anchor="middle" font-size="28">🔑</text>
    <text x="60" y="65" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="bold">Private Key</text>
    <text x="60" y="80" text-anchor="middle" fill="#94a3b8" font-size="9">Gizli Anahtar (Aç)</text>
  </g>

  <rect x="50" y="200" width="350" height="90" rx="12" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="225" y="230" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">RSA ve HTTPS Güvenli İnternet Temeli</text>
  <text x="225" y="252" text-anchor="middle" fill="#cbd5e1" font-size="11">Veriler herkesin görebileceği açık anahtarla kilitlenir;</text>
  <text x="225" y="272" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">💐 24 Kasım Öğretmenler Günü Kutlu Olsun!</text>
</svg>'''
    elif week_num == 12:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">2FA, Dijital İmza & Blokzincir</text>

  <!-- Blokzincir Zincir Temsili -->
  <g transform="translate(50, 85)">
    <rect width="90" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="45" y="30" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">Blok #1</text>
    <text x="45" y="50" text-anchor="middle" fill="#94a3b8" font-size="8">Hash: a8f9...</text>
    <text x="45" y="68" text-anchor="middle" fill="#10b981" font-size="8">Data: 10 BTC</text>
  </g>

  <line x1="145" y1="125" x2="175" y2="125" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="3"/>

  <g transform="translate(180, 85)">
    <rect width="90" height="80" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="45" y="30" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">Blok #2</text>
    <text x="45" y="50" text-anchor="middle" fill="#94a3b8" font-size="8">Prev: a8f9...</text>
    <text x="45" y="68" text-anchor="middle" fill="#10b981" font-size="8">Data: 5 BTC</text>
  </g>

  <line x1="275" y1="125" x2="305" y2="125" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="3"/>

  <g transform="translate(310, 85)">
    <rect width="90" height="80" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="45" y="30" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="bold">Blok #3</text>
    <text x="45" y="50" text-anchor="middle" fill="#94a3b8" font-size="8">Prev: 7c2d...</text>
    <text x="45" y="68" text-anchor="middle" fill="#10b981" font-size="8">Data: 2 BTC</text>
  </g>

  <rect x="50" y="200" width="350" height="85" rx="12" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="225" y="230" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">Değiştirilemez ve Dağıtık Veri Defteri</text>
  <text x="225" y="255" text-anchor="middle" fill="#cbd5e1" font-size="11">Blokzincirde geçmişteki tek bir kaydı değiştirmek tüm zinciri bozar.</text>
  <text x="225" y="272" text-anchor="middle" fill="#38bdf8" font-size="10">2FA (SMS / Authenticator) + Dijital İmza (Inkar Edilemezlik)</text>
</svg>'''
    elif week_num == 13:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">KVKK, Dijital Haklar & Açık Kaynak</text>

  <g transform="translate(70, 75)">
    <circle cx="45" cy="45" r="40" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="45" y="52" text-anchor="middle" font-size="30">⚖️</text>
    <text x="45" y="105" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">KVKK 6698</text>
  </g>

  <g transform="translate(180, 75)">
    <circle cx="45" cy="45" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="45" y="52" text-anchor="middle" font-size="30">📜</text>
    <text x="45" y="105" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Telif Hakkı</text>
  </g>

  <g transform="translate(290, 75)">
    <circle cx="45" cy="45" r="40" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="45" y="52" text-anchor="middle" font-size="30">🔓</text>
    <text x="45" y="105" text-anchor="middle" fill="#a855f7" font-size="11" font-weight="bold">Açık Kaynak (MIT/GPL)</text>
  </g>

  <rect x="50" y="215" width="350" height="75" rx="12" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="225" y="245" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold">Bilişim Hukuku & Etik Yazılımcı İlkeleri</text>
  <text x="225" y="268" text-anchor="middle" fill="#cbd5e1" font-size="11">Kişisel veriler izinsiz paylaşılamaz; açık kaynak kodlar dünyayı geliştirir.</text>
</svg>'''
    elif week_num == 14:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Nesnelerin İnterneti (IoT) Mimarisi</text>

  <!-- 3 Katmanlı Mimari -->
  <g transform="translate(60, 75)">
    <rect width="90" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="45" y="35" text-anchor="middle" font-size="24">🌡️</text>
    <text x="45" y="65" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Sensörler</text>
    <text x="45" y="85" text-anchor="middle" fill="#cbd5e1" font-size="9">Isı, Nem, LDR</text>
    <text x="45" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">Algılama Katmanı</text>
  </g>

  <path d="M155,130 L175,130" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="3"/>

  <g transform="translate(180, 75)">
    <rect width="90" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="45" y="35" text-anchor="middle" font-size="24">🎛️</text>
    <text x="45" y="65" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">Denetleyici</text>
    <text x="45" y="85" text-anchor="middle" fill="#cbd5e1" font-size="9">ESP32 / Arduino</text>
    <text x="45" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">Ağ & Karar</text>
  </g>

  <path d="M275,130 L295,130" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="3"/>

  <g transform="translate(300, 75)">
    <rect width="90" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="45" y="35" text-anchor="middle" font-size="24">⚙️</text>
    <text x="45" y="65" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Aktüatör</text>
    <text x="45" y="85" text-anchor="middle" fill="#cbd5e1" font-size="9">Motor, Röle, Vana</text>
    <text x="45" y="100" text-anchor="middle" fill="#94a3b8" font-size="8">Eylem Katmanı</text>
  </g>

  <rect x="50" y="215" width="350" height="65" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="225" y="245" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">Algıla -> İlet -> Karar Ver -> Harekete Geç!</text>
  <text x="225" y="265" text-anchor="middle" fill="#cbd5e1" font-size="11">Fiziksel dünya dijital dünyaya bağlanıyor.</text>
</svg>'''
    elif week_num == 15:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Akıllı Şehirler & Endüstri 4.0</text>

  <g transform="translate(60, 75)">
    <rect width="140" height="100" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="70" y="38" text-anchor="middle" font-size="26">🏙️</text>
    <text x="70" y="65" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">Akıllı Şehir</text>
    <text x="70" y="85" text-anchor="middle" fill="#cbd5e1" font-size="9">Trafik, Atık, Şebeke</text>
  </g>

  <g transform="translate(250, 75)">
    <rect width="140" height="100" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="38" text-anchor="middle" font-size="26">🏭</text>
    <text x="70" y="65" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">Endüstri 4.0</text>
    <text x="70" y="85" text-anchor="middle" fill="#cbd5e1" font-size="9">Karanlık Fabrikalar</text>
  </g>

  <rect x="50" y="205" width="350" height="85" rx="12" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="225" y="235" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">Otonom Üretim ve Enerji Optimizasyonu</text>
  <text x="225" y="258" text-anchor="middle" fill="#cbd5e1" font-size="11">Robotların birbiriyle konuşarak insan olmadan üretim yaptığı çağ.</text>
  <text x="225" y="275" text-anchor="middle" fill="#10b981" font-size="10">Karbon ayak izini azaltan akıllı şebekeler (Smart Grid)</text>
</svg>'''
    elif week_num == 16:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Büyük Veri (Big Data) 5V Kuralı</text>

  <!-- 5V Çemberi -->
  <g transform="translate(185, 70)">
    <circle cx="40" cy="40" r="35" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
    <text x="40" y="46" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">5V</text>
  </g>

  <g transform="translate(40, 75)"><rect width="70" height="40" rx="6" fill="#1e293b" stroke="#38bdf8"/><text x="35" y="25" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="bold">Volume (Hacim)</text></g>
  <g transform="translate(340, 75)"><rect width="70" height="40" rx="6" fill="#1e293b" stroke="#10b981"/><text x="35" y="25" text-anchor="middle" fill="#6ee7b7" font-size="9" font-weight="bold">Velocity (Hız)</text></g>
  <g transform="translate(60, 150)"><rect width="70" height="40" rx="6" fill="#1e293b" stroke="#f59e0b"/><text x="35" y="25" text-anchor="middle" fill="#fde68a" font-size="9" font-weight="bold">Variety (Çeşit)</text></g>
  <g transform="translate(320, 150)"><rect width="70" height="40" rx="6" fill="#1e293b" stroke="#ef4444"/><text x="35" y="25" text-anchor="middle" fill="#fca5a5" font-size="9" font-weight="bold">Veracity (Doğru)</text></g>
  <g transform="translate(190, 170)"><rect width="70" height="40" rx="6" fill="#1e293b" stroke="#a855f7"/><text x="35" y="25" text-anchor="middle" fill="#d8b4fe" font-size="9" font-weight="bold">Value (Değer)</text></g>

  <rect x="50" y="230" width="350" height="65" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="225" y="255" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">Ham Veri -> Bilgi -> Değer (Value)</text>
  <text x="225" y="275" text-anchor="middle" fill="#cbd5e1" font-size="11">Veri Madenciliği (Data Mining) ile gizli hazineleri çıkarma.</text>
</svg>'''
    elif week_num == 17:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">1. Dönem 2. Yazılı Sınav Tekrarı</text>

  <g transform="translate(60, 75)">
    <rect width="140" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
    <text x="70" y="32" text-anchor="middle" font-size="20">🔐</text>
    <text x="70" y="55" text-anchor="middle" fill="#c084fc" font-size="10" font-weight="bold">Kripto & 2FA</text>
  </g>

  <g transform="translate(250, 75)">
    <rect width="140" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="70" y="32" text-anchor="middle" font-size="20">⛓️</text>
    <text x="70" y="55" text-anchor="middle" fill="#93c5fd" font-size="10" font-weight="bold">Blokzincir</text>
  </g>

  <g transform="translate(60, 160)">
    <rect width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="70" y="32" text-anchor="middle" font-size="20">📡</text>
    <text x="70" y="55" text-anchor="middle" fill="#6ee7b7" font-size="10" font-weight="bold">IoT Mimarisi</text>
  </g>

  <g transform="translate(250, 160)">
    <rect width="140" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="32" text-anchor="middle" font-size="20">📊</text>
    <text x="70" y="55" text-anchor="middle" fill="#fde68a" font-size="10" font-weight="bold">Büyük Veri 5V</text>
  </g>

  <text x="225" y="275" text-anchor="middle" fill="#cbd5e1" font-size="12">Teknolojik Kavramlar & LGS Mantık Muhakeme Sınavı</text>
</svg>'''
    elif week_num == 18:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Makine Öğrenmesi (Machine Learning) Türleri</text>

  <g transform="translate(45, 75)">
    <rect width="105" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="52" y="35" text-anchor="middle" font-size="22">🏷️</text>
    <text x="52" y="60" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">Denetimli</text>
    <text x="52" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">Supervised</text>
    <text x="52" y="95" text-anchor="middle" fill="#cbd5e1" font-size="8">Etiketli Veri</text>
  </g>

  <g transform="translate(172, 75)">
    <rect width="105" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="52" y="35" text-anchor="middle" font-size="22">🧩</text>
    <text x="52" y="60" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">Denetimsiz</text>
    <text x="52" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">Unsupervised</text>
    <text x="52" y="95" text-anchor="middle" fill="#cbd5e1" font-size="8">Kümeleme (Clustering)</text>
  </g>

  <g transform="translate(300, 75)">
    <rect width="105" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="52" y="35" text-anchor="middle" font-size="22">🎮</text>
    <text x="52" y="60" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">Pekiştirmeli</text>
    <text x="52" y="75" text-anchor="middle" fill="#94a3b8" font-size="8">Reinforcement</text>
    <text x="52" y="95" text-anchor="middle" fill="#cbd5e1" font-size="8">Ödül / Ceza</text>
  </g>

  <rect x="50" y="215" width="350" height="65" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="225" y="245" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold">Yapay Zekâ Nasıl Öğrenir?</text>
  <text x="225" y="265" text-anchor="middle" fill="#cbd5e1" font-size="11">Etiketlerle (Öğretmenli), Kümelerle (Kendi Başına) veya Deneme-Yanılmayla.</text>
</svg>'''
    elif week_num == 19:
        return '''<svg viewBox="0 0 450 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="320" rx="20" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <text x="225" y="45" text-anchor="middle" fill="#c084fc" font-size="16" font-weight="bold">Üretken Yapay Zekâ (LLM) & Prompt Mühendisliği</text>

  <!-- LLM Beyin & Prompt -->
  <g transform="translate(185, 70)">
    <circle cx="40" cy="40" r="38" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
    <text x="40" y="50" text-anchor="middle" font-size="34">🧠</text>
  </g>

  <rect x="50" y="170" width="350" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="65" y="200" fill="#38bdf8" font-family="monospace" font-size="11">> Prompt: "Bir lise öğrencisi için Python ile hesap makinesi kodu yaz."</text>

  <rect x="50" y="235" width="350" height="65" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="225" y="258" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold">Prompt Mühendisliği: Doğru Soru Sorma Sanatı</text>
  <text x="225" y="278" text-anchor="middle" fill="#cbd5e1" font-size="10">Rol Ver + Görevi Tanımla + Kısıtlamaları Belirt = Mükemmel Çıktı!</text>
</svg>'''
    return get_svg_for_week_8(week_num, title)

WEEKS_11_19_GRADE8 = [
  # 11. HAFTA
  {
    "week": 11,
    "date": "23 - 29 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Siber Güvenlik, Dijital Haklar & Veri Güvenliği",
    "unitBadge": "Kriptoloji & 24 Kasım",
    "unitTheme": "unite-2",
    "title": "Kriptoloji & Şifreleme: Sezar'dan RSA'ya",
    "subtitle": "Simetrik ve Asimetrik Şifreleme, Açık Anahtarlar ve 24 Kasım Öğretmenler Günü",
    "outcomeCode": "BTY.8.2.3",
    "targetSkill": "Şifreleme Algoritmalarını Çözümleme & Kriptoloji",
    "curiosityQuestion": "İnternette kredi kartı numaranızı yazdığınızda, aradaki binlerce bilgisayar bu numarayı neden okuyamaz?",
    "roadmap": [
      { "title": "Kriptoloji Nedir?", "desc": "Gizli haberleşme bilimi; metinleri anlamsız şifrelere dönüştürme ve çözme sanatı." },
      { "title": "Simetrik Şifreleme (Sezar & AES)", "desc": "Kilitlemek için de açmak için de aynı tek gizli anahtarı kullanma yöntemi." },
      { "title": "Asimetrik Şifreleme (RSA & HTTPS)", "desc": "Biri kilitleyen (Public), diğeri açan (Private) çift anahtar devrimi." },
      { "title": "24 Kasım Öğretmenler Günü", "desc": "Bize bilimin ve matematiğin ışığını açan öğretmenlerimize kriptografik teşekkür kartı." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(11, "Kriptoloji & Asimetrik Şifreleme"),
    "section1": {
      "title": "Tarihten Günümüze Şifreleme",
      "subtitle": "Sezar'ın mektuplarından internetin HTTPS kalkanına:",
      "cards": [
        {
          "title": "Sezar Şifresi (Simetrik)",
          "icon": "🏛️",
          "desc": "Her harfi alfabede sabit bir sayı kadar (Örn: +3) kaydırma mantığı:",
          "items": [
            { "bold": "Düz Metin", "text": "'VATAN' kelimesini ele alalım." },
            { "bold": "Şifreli Metin (+3)", "text": "V->Y, A->D, T->V, A->D, N->P = 'YD VDP'." },
            { "bold": "Zayıflığı", "text": "Harf frekansı analiziyle saniyeler içinde çözülür." }
          ]
        },
        {
          "title": "Asimetrik Şifreleme (Modern Çağ)",
          "icon": "🔐",
          "desc": "Modern e-ticaret ve WhatsApp uçtan uca şifrelemesi asimetrik anahtarlarla çalışır:",
          "items": [
            { "bold": "Public Key (Açık Anahtar)", "text": "Herkesle paylaşılır; mesajı sadece kilitler, açamaz." },
            { "bold": "Private Key (Gizli Anahtar)", "text": "Sadece sizde durur; kilitlenen mesajı sadece bu anahtar açabilir!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "24 Kasım Öğretmenler Günü Kripto Mesajı",
      "subtitle": "Matematik ve yazılımın kalbindeki minnet duygusu:",
      "cards": [
        {
          "badge": "Milli Değer",
          "title": "Başöğretmen Atatürk ve Öğretmenlerimiz",
          "desc": "'Dünyanın her tarafında öğretmenler insan topluluğunun en fedakâr ve saygıdeğer unsurlarıdır.'",
          "items": [
            { "bold": "Etkinlik", "text": "Öğretmenimize Sezar şifresiyle şifrelenmiş bir teşekkür mektubu hazırlıyoruz." }
          ]
        },
        {
          "badge": "HTTPS",
          "title": "Web'de Güvenlik Kilidi",
          "desc": "Tarayıcı adres çubuğundaki asma kilit simgesi verilerinizin RSA/TLS ile şifrelendiğini gösterir.",
          "items": [
            { "bold": "Kural", "text": "Kilit simgesi olmayan ('http://') sitelere asla şifre veya kart bilgisi girmeyin!" }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Kendi Kripto Şifreleme Algoritmamızı Kodluyoruz",
      "subtitle": "Metinleri belirlenen anahtar kadar kaydırıp şifreleyen algoritma tasarımı.",
      "steps": [
        { "title": "Anahtarı Seç", "desc": "Gizli kaydırma sayısı: `k = 5`." },
        { "title": "Mesajı Şifrele", "desc": "'OGRETMENIM' -> Alfabede her harfi 5 ileri kaydırarak şifreli metni oluştur." },
        { "title": "Şifre Çözücü Algoritma", "desc": "Şifreli metni alıp her harfi 5 geri kaydırarak orijinal metne dönüştür." }
      ],
      "criteria": [
        "Simetrik ve asimetrik şifreleme farkını net açıklayabilme",
        "Karakter kodlama (ASCII) ve kaydırma mantığını uygulama",
        "İnternetteki veri güvenliğinde şifrelemenin önemini kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Kripto Güvenliği Kuralları",
      "safetyRules": [
        { "bold": "Private Key Asla Paylaşılmaz", "text": "Gizli anahtarınızı kaybederseniz şifrelenmiş dosyalarınızı süper bilgisayarlar bile açamaz." },
        { "bold": "Açık Wi-Fi Ağlarında Dikkat", "text": "Kafelerdeki şifresiz Wi-Fi ağlarında şifresiz (HTTP) sitelere girerseniz trafiğiniz izlenebilir." },
        { "bold": "Güçlü Algoritmalar Seçin", "text": "MD5 ve SHA-1 artık kırılmıştır; SHA-256 ve AES-256 kullanılmalıdır." }
      ],
      "myths": [
        { "wrong": "Şifreleme sadece suçluların kullandığı bir yöntemdir.", "correct": "Şifreleme olmasaydı internet bankacılığı, e-Devlet ve çevrimiçi ticaret asla var olamazdı!" },
        { "wrong": "Sezar şifresi günümüzde hâlâ güvenlidir.", "correct": "Sezar şifresi 2000 yıl önce etkiliydi; bugün bir bilgisayar 0.0001 saniyede çözer." }
      ]
    },
    "quiz": {
      "question": "İnternet üzerinde güvenli alışveriş yaparken (HTTPS), mesajı kilitlemek için herkesle paylaşılan fakat şifreyi çözmek için sadece alıcıda bulunan gizli anahtar çiftini kullanan şifreleme türü hangisidir?",
      "options": [
        { "text": "A) Sezar Şifrelemesi", "isCorrect": False },
        { "text": "B) Asimetrik (Açık Anahtarlı) Şifreleme", "isCorrect": True },
        { "text": "C) Mors Alfabesi", "isCorrect": False },
        { "text": "D) Resim Çizme", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Asimetrik Şifreleme', Public Key (Açık Anahtar) ile şifreleyip sadece Private Key (Gizli Anahtar) ile açabilen çift anahtarlı güvenli sistemdir."
    },
    "summaryRules": [
      { "bold": "Kriptoloji", "text": "Dijital dünyada mahremiyetin ve veri güvenliğinin matematiksel kalkanıdır." },
      { "bold": "Asimetrik Güvenlik", "text": "Açık anahtarla şifreler, gizli anahtarla çözer." },
      { "bold": "24 Kasım", "text": "Öğretmenlerimizin emeği geleceğimizin en değerli hazinesidir." }
    ],
    "homework": "Kendi adınızı Sezar şifresiyle (+4 kaydırarak) şifreleyip bir kâğıda yazın.",
    "nextWeekPreview": "İki Aşamalı Doğrulama (2FA), Dijital İmza ve Blokzincir (Blockchain) Mantığı - Değiştirilemez kayıtlar!"
  },

  # 12. HAFTA
  {
    "week": 12,
    "date": "30 Kasım - 06 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Siber Güvenlik, Dijital Haklar & Veri Güvenliği",
    "unitBadge": "2FA & Blokzincir",
    "unitTheme": "unite-2",
    "title": "2FA, Dijital İmza & Blokzincir (Blockchain)",
    "subtitle": "İki Aşamalı Doğrulama, İnkâr Edilemezlik, Hash Fonksiyonları ve Dağıtık Defter",
    "outcomeCode": "BTY.8.2.4",
    "targetSkill": "Modern Doğrulama Teknolojilerini ve Blokzincir Mimarisi",
    "curiosityQuestion": "Bir banka veritabanını tek bir şirket yönetirken, Bitcoin ve Blokzincir teknolojisini dünyada hiçbir merkez, hiçbir şirket veya devlet nasıl kapatamıyor?",
    "roadmap": [
      { "title": "İki Aşamalı Doğrulama (2FA / MFA)", "desc": "Bildiğin bir şey (Şifre) + Sahip olduğun bir şey (Telefon/SMS/Authenticator)." },
      { "title": "Dijital İmza & İnkâr Edilemezlik", "desc": "Islak imza gibi yasal geçerliliği olan, taklit edilemez elektronik imza." },
      { "title": "Kriptografik Özet (Hash - SHA-256)", "desc": "Her verinin benzersiz parmak izini çıkaran tek yönlü matematiksel fonksiyon." },
      { "title": "Blokzincir (Blockchain) Mimarisi", "desc": "Blokların birbirine kriptografik zincirlerle bağlandığı dağıtık defter teknolojisi." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(12, "2FA, Dijital İmza & Blokzincir"),
    "section1": {
      "title": "Kimlik Doğrulamanın 3 Faktörü (MFA)",
      "subtitle": "Sadece şifre artık yeterli değil:",
      "cards": [
        {
          "title": "Güvenli Giriş Faktörleri",
          "icon": "🛡️",
          "desc": "En az 2 faktör birleştiğinde hesap hacklenemez hale gelir:",
          "items": [
            { "bold": "1. Bildiğiniz Bir Şey", "text": "Parola, PIN kodu veya gizli soru." },
            { "bold": "2. Sahip Olduğunuz Bir Şey", "text": "Akıllı telefonunuza gelen SMS kodu veya Authenticator uygulaması." },
            { "bold": "3. Olduğunuz Bir Şey (Biyometrik)", "text": "Parmak izi, yüz tanıma veya retina taraması." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Blokzincir: Değiştirilemez Dijital Defter",
      "subtitle": "Güvenin aracılar olmadan sağlandığı teknoloji:",
      "cards": [
        {
          "badge": "Hash Fonksiyonu",
          "title": "SHA-256 Parmak İzi",
          "desc": "Kocaman bir kütüphanedeki tüm kitapları da verseniz tek bir kelime de verseniz 64 karakterlik benzersiz bir özet üretir.",
          "items": [
            { "bold": "Hassasiyet", "text": "Metindeki tek bir virgül bile değişse hash tamamen değişir!" }
          ]
        },
        {
          "badge": "Zincir Yapısı",
          "title": "Blokların Birbirine Bağlanması",
          "desc": "Her yeni blok kendinden önceki bloğun hash özetini taşır. Geçmişteki bir bloku değiştirmeye kalkarsanız sonraki tüm zincir kırılır.",
          "items": [
            { "bold": "Kullanım Alanı", "text": "Kripto paralar, tapu kayıtları, oy kullanma sistemleri, diploma doğrulaması." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Sınıfta İnsan Blokzinciri Simülasyonu",
      "subtitle": "Öğrencilerin defter yapraklarını blok yaparak birbirine hash kodlarıyla bağlayalım.",
      "steps": [
        { "title": "Blok 1 (Genez Blok)", "desc": "Ali Veli'ye 5 elma verdi. Özet: 'AB12'. Deftere yazın." },
        { "title": "Blok 2'yi Bağla", "desc": "Önceki blok: 'AB12'. Ayşe Fatma'ya 2 elma verdi. Yeni özet: 'CD34'." },
        { "title": "Hileyi Yakala", "desc": "Biri 1. bloktaki 5 elmayı silip 10 yapmaya kalkarsa 'AB12' bozulur ve tüm sınıf hileyi anında fark eder!" }
      ],
      "criteria": [
        "Hash özetinin tek yönlü doğasını kavrayabilme",
        "Blokzincirin hile ve sahteciliği nasıl imkânsız kıldığını anlama",
        "2FA açmanın siber güvenlikteki hayati rolünü benimseme"
      ]
    },
    "tips": {
      "safetyTitle": "Hesap Güvenliği Standartları",
      "safetyRules": [
        { "bold": "SMS Yerine Authenticator Kullanın", "text": "SIM kopyalama saldırılarına karşı Google Authenticator gibi uygulamalar daha güvenlidir." },
        { "bold": "Kurtarma Kodlarını Saklayın", "text": "2FA açarken verilen yedek kodları bir kâğıda yazıp cüzdanınızda saklayın." },
        { "bold": "E-Devlet Kapısında 2FA Açın", "text": "Vatandaşlık bilgilerinizin güvenliği için çift aşamalı girişi aktif edin." }
      ],
      "myths": [
        { "wrong": "Blokzincir sadece Bitcoin demektir.", "correct": "Bitcoin blokzincirin sadece ilk uygulamasıdır; blokzincir sağlık, lojistik ve hukukta devrim yaratmaktadır." },
        { "wrong": "2FA açarsam her dakika SMS beklemek zorunda kalırım.", "correct": "Genellikle sadece yeni bir cihazdan ilk giriş yapıldığında kod istenir." }
      ]
    },
    "quiz": {
      "question": "Blokzincir (Blockchain) teknolojisinde bir bloktaki verilerin sonradan değiştirilmesini veya silinmesini imkânsız kılan temel kriptografik mekanizma hangisidir?",
      "options": [
        { "text": "A) Bilgisayarların aynı renkte olması", "isCorrect": False },
        { "text": "B) Her bloğun kendinden önceki bloğun kriptografik özetini (Hash) içermesi ve zincir oluşturması", "isCorrect": True },
        { "text": "C) İnternetin çok hızlı olması", "isCorrect": False },
        { "text": "D) Ekranda piksellerin bulunması", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bloklar birbirine önceki bloğun 'Hash' özetiyle kenetlendiği için, geçmişteki tek bir harfi bile değiştirmek tüm zinciri geçersiz kılar."
    },
    "summaryRules": [
      { "bold": "2FA Güvenliği", "text": "Şifreniz çalınsa bile hesabınızı koruyan ikinci savunma hattıdır." },
      { "bold": "Hash Fonksiyonu", "text": "Verilerin değiştirilemez dijital parmak izidir." },
      { "bold": "Blokzincir", "text": "Merkezi otoriteye ihtiyaç duymayan güven ve kayıt teknolojisidir." }
    ],
    "homework": "Kullandığınız bir e-posta veya oyun hesabınızda 2FA (İki Aşamalı Doğrulama) özelliğini açın.",
    "nextWeekPreview": "Dijital Ayak İzi, KVKK, Telif Hakları & Açık Kaynak Lisansları - Bilişim hukukunun incelikleri!"
  },

  # 13. HAFTA
  {
    "week": 13,
    "date": "07 - 13 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Siber Güvenlik, Dijital Haklar & Veri Güvenliği",
    "unitBadge": "KVKK & Açık Kaynak",
    "unitTheme": "unite-2",
    "title": "Dijital Ayak İzi, KVKK & Açık Kaynak Lisansları",
    "subtitle": "Kişisel Verilerin Korunması Kanunu (KVKK), Fikri Mülkiyet, Telif ve Açık Kaynak (MIT, GPL)",
    "outcomeCode": "BTY.8.2.5",
    "targetSkill": "Bilişim Hukuku & Fikri Mülkiyet Farkındalığı",
    "curiosityQuestion": "Linux ve Python gibi dünyanın en güçlü yazılımları tamamen ücretsizken, arkalarındaki geliştiriciler nasıl para kazanır ve bu kodları kim korur?",
    "roadmap": [
      { "title": "KVKK (6698 Sayılı Kanun)", "desc": "Kişisel verilerimizin izinsiz toplanmasını, satılmasını ve paylaşılmasını engelleyen kanun." },
      { "title": "Açık Rıza İlkesi", "desc": "Şirketlerin verilerimizi işlemeden önce bizden açıkça onay istemek zorunda olması." },
      { "title": "Telif Hakları & Korsan Yazılım", "desc": "Başkalarının emeğini izinsiz kopyalamanın hukuki ve ahlaki sonuçları." },
      { "title": "Açık Kaynak Lisansları (MIT, GPL, Apache)", "desc": "Kodları insanlığın hizmetine sunarken yazılımcının haklarını koruyan lisanslar." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(13, "KVKK & Açık Kaynak"),
    "section1": {
      "title": "KVKK: Dijital Kimliğinizin Zırhı",
      "subtitle": "Verileriniz petrol kadar değerlidir ve kanunla korunur:",
      "cards": [
        {
          "title": "Kişisel Veri Nedir?",
          "icon": "⚖️",
          "desc": "Sizi doğrudan veya dolaylı olarak belirleyen her bilgi kişisel veridir:",
          "items": [
            { "bold": "Doğrudan Veri", "text": "T.C. Kimlik No, Ad-Soyad, Parmak izi, Telefon No." },
            { "bold": "Dolaylı Veri", "text": "Konum geçmişi, alışveriş alışkanlıkları, IP adresi." },
            { "bold": "Unutulma Hakkı", "text": "Geçmişte internete düşen verilerinizin arama motorlarından silinmesini talep etme hakkı." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Açık Kaynak Kültürü (Open Source)",
      "subtitle": "Bilgiyi paylaşarak dünyayı büyütmek:",
      "cards": [
        {
          "badge": "MIT Lisansı",
          "title": "Özgür ve Esnek",
          "desc": "Kodu istediğin gibi kullan, değiştir, sat; sadece yazarı belirt.",
          "items": [
            { "bold": "Kullanım", "text": "Yazılım dünyasında en yaygın lisans." }
          ]
        },
        {
          "badge": "GPL Lisansı",
          "title": "Paylaşım Şartı (Copyleft)",
          "desc": "Bu kodu kullanarak yeni bir yazılım yaparsan, senin yazılımın da açık kaynak olmak zorundadır!",
          "items": [
            { "bold": "Örnek", "text": "Linux ve Pardus GPL ruhuyla büyür." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Gizlilik Sözleşmesi Dedektifliği Atölyesi",
      "subtitle": "Popüler bir mobil oyunun izin istediği listeyi inceleyip KVKK'ya aykırı maddeleri bulalım.",
      "steps": [
        { "title": "İzin Listesini Oku", "desc": "Bir hesap makinesi uygulaması 'Rehber, Konum, Kamera, Mikrofon' izni istiyor." },
        { "title": "Amaca Uygunluğu Sorgula", "desc": "Hesap makinesinin rehberinize erişmeye ihtiyacı var mıdır? Neden bu izni ister?" },
        { "title": "Haklarını Kullan", "desc": "Gereksiz izinleri kapatın ve uygulamayı KVKK ilkelerine göre şikayet etme yolunu öğrenin." }
      ],
      "criteria": [
        "Kişisel veri ile anonim veriyi ayırt edebilme",
        "Açık kaynak lisanslarının temel farklarını bilme",
        "Kullanıcı sözleşmelerini eleştirel gözle değerlendirme"
      ]
    },
    "tips": {
      "safetyTitle": "Telif Haklarına Saygı Rehberi",
      "safetyRules": [
        { "bold": "Kaynak Gösterin", "text": "Ödevlerinizde ve projelerinizde başkasının kodunu veya görselini kullandıysanız mutlaka yazarını belirtin." },
        { "bold": "Korsan (Crack) Yazılım İndirmeyin", "text": "Korsan oyunlar ve programlar içlerinde mutlaka fidye virüsü veya trojan barındırır." },
        { "bold": "Creative Commons Tercih Edin", "text": "İnternette telifsiz (CC0) görseller ve müzikler kullanarak yasal risklerden korunun." }
      ],
      "myths": [
        { "wrong": "İnternette bulduğum her resmi projemde izin almadan kullanabilirim.", "correct": "İnternetteki her eser sahibinin telif hakkı altındadır; izinsiz ticari kullanım yasal yaptırım doğurur." },
        { "wrong": "Açık kaynak yazılımlar kalitesiz ve güvensizdir.", "correct": "Dünyanın en güvenli sunucuları, uzay araçları ve süper bilgisayarları açık kaynaklı Linux kullanır." }
      ]
    },
    "quiz": {
      "question": "Türkiye'de vatandaşların kişisel verilerinin hukuka aykırı olarak işlenmesini, kaydedilmesini ve başkalarına satılmasını engelleyen temel kanun hangisidir?",
      "options": [
        { "text": "A) Trafik Kanunu", "isCorrect": False },
        { "text": "B) 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK)", "isCorrect": True },
        { "text": "C) Türk Ticaret Kanunu", "isCorrect": False },
        { "text": "D) Çevre Kanunu", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'KVKK (Kişisel Verilerin Korunması Kanunu)', bireylerin temel hak ve özgürlüklerini dijital ortamda koruyan anayasal zırhtır."
    },
    "summaryRules": [
      { "bold": "KVKK", "text": "Verilerimizin izinsiz kullanımını yasaklayan yasal kalkanımızdır." },
      { "bold": "Açık Kaynak", "text": "Kodların paylaşılması ve insanlığın ortak mirasına dönüşmesidir." },
      { "bold": "Etik Kullanım", "text": "Emeğe saygı duymak, kaynak belirtmek ve korsandan uzak durmaktır." }
    ],
    "homework": "Telefonunuzdaki bir uygulamanın izinlerini kontrol edin ve gereksiz olanları (örn: el fenerinin konumu) kapatın.",
    "nextWeekPreview": "Nesnelerin İnterneti (IoT) Mimarisi: Sensörler, Aktüatörler ve Mikrodenetleyiciler - Akıllı cihazların kalbine iniyoruz!"
  },

  # 14. HAFTA
  {
    "week": 14,
    "date": "14 - 20 Aralık",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Nesnelerin İnterneti (IoT), Büyük Veri & Yapay Zekâ",
    "unitBadge": "IoT Mimarisi",
    "unitTheme": "unite-3",
    "title": "Nesnelerin İnterneti (IoT) Mimarisi",
    "subtitle": "Sensörler, Aktüatörler, Mikrodenetleyiciler (ESP32/Arduino) ve İletişim Protokolleri",
    "outcomeCode": "BTY.8.3.1",
    "targetSkill": "Fiziksel Bilişim & IoT Sistem Mimarisi Tasarlama",
    "curiosityQuestion": "Toprağın nemi azaldığında bahçıvan olmadan tarlayı sulayan, su dolunca vanayı kapatan akıllı sistem nasıl çalışır?",
    "roadmap": [
      { "title": "IoT (Internet of Things) Nedir?", "desc": "Fiziksel cihazların internet üzerinden birbirleriyle konuşup veri paylaşması." },
      { "title": "Sensörler (Duyular)", "desc": "Isı, nem, ışık (LDR), ultrasonik mesafe, gaz ve hareket (PIR) sensörleri." },
      { "title": "Mikrodenetleyiciler (Beyin)", "desc": "Arduino ve Wi-Fi/Bluetooth özellikli ESP32 kartlarının çalışma mantığı." },
      { "title": "Aktüatörler (Kollar & Bacaklar)", "desc": "Servo motor, röle, su vanası, LED ve hoparlör gibi fiziksel eylemciler." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(14, "IoT Mimarisi"),
    "section1": {
      "title": "IoT'nin 3 Katmanlı Mimarisi",
      "subtitle": "Fiziksel dünyayı dijital kararlara bağlayan döngü:",
      "cards": [
        {
          "title": "Girdi -> İşlem -> Çıktı",
          "icon": "🌐",
          "desc": "Akıllı bir seranın çalışma algoritması:",
          "items": [
            { "bold": "1. Algılama (Sensör)", "text": "Toprak nem sensörü topraktaki su oranını ölçer: 'Nem = %15 (Kritik Kuru)'." },
            { "bold": "2. Karar (ESP32 / Bulut)", "text": "Mikrodenetleyici kontrol eder: 'Eğer nem < %30 ise vanayı aç'." },
            { "bold": "3. Eylem (Aktüatör)", "text": "Röle elektrik devresini tamamlar ve su pompası çalışarak tarlayı sular." },
            { "bold": "4. Bildirim (İletişim)", "text": "Çiftçinin cep telefonuna bildirim gider: 'Domatesler sulanıyor!'" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Kablosuz Haberleşme Protokolleri",
      "subtitle": "Cihazlar havadan nasıl konuşur?",
      "cards": [
        {
          "badge": "Kısa Mesafe",
          "title": "Bluetooth & Zigbee",
          "desc": "Çok az pil harcar. Akıllı saatler ve evdeki akıllı lambalar için idealdir.",
          "items": [
            { "bold": "Mesafe", "text": "10 - 50 metre." }
          ]
        },
        {
          "badge": "Geniş Alan",
          "title": "Wi-Fi & LoRaWAN",
          "desc": "Wi-Fi yüksek hızlı veri aktarır; LoRaWAN ise kilometrelerce ötedeki tarım arazisinden veri çeker.",
          "items": [
            { "bold": "Mesafe", "text": "Şehirler arası ve kilometrelerce menzil." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Deprem ve Gaz Kaçağı Alarm Sistemi Tasarımı",
      "subtitle": "Gaz kaçağı veya sarsıntı algılandığında gaz vanasını kapatan IoT sistemini blok diyagramla tasarlayalım.",
      "steps": [
        { "title": "Sensörleri Seç", "desc": "MQ-4 Gaz Sensörü ve MPU-6050 İvme/Titreşim Sensörü." },
        { "title": "Karar Kartı", "desc": "ESP32 Wi-Fi mikrodenetleyici kartı." },
        { "title": "Eylemcileri Belirle", "desc": "Solenoid Gaz Vanası (kapatır), Buzzer Alarm (ses çıkarır), Acil SMS Modülü." }
      ],
      "criteria": [
        "Sensör ve aktüatörleri doğru eşleştirebilme",
        "Girdi-İşlem-Çıktı döngüsünü akış şemasında gösterme",
        "Hayat kurtaran güvenlik senaryosu kurgulayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "IoT Güvenlik Uyarıları",
      "safetyRules": [
        { "bold": "Varsayılan Şifreyi Değiştirin", "text": "Akıllı kameraların fabrika şifresi 'admin'dir; hemen güçlü bir parolayla güncelleyin." },
        { "bold": "Ayrı Wi-Fi Ağı Kurun", "text": "Evdeki akıllı ampul ve süpürgeleri bilgisayarınızın bağlı olduğu ana ağa değil, misafir ağına bağlayın." },
        { "bold": "Yazılım Güncellemeleri", "text": "IoT cihazlarının üretici güncellemelerini düzenli yükleyin." }
      ],
      "myths": [
        { "wrong": "Bir akıllı ampulün hacklenmesi tehlikeli değildir.", "correct": "Korsanlar ampul üzerinden evinizin tüm internet ağına ve bilgisayarınıza sızabilir!" },
        { "wrong": "Sensörler elektrik üretir.", "correct": "Sensörler fiziksel büyüklükleri (ısı, ışık) mikrodenetleyicinin okuyabileceği minik elektrik sinyallerine çevirir." }
      ]
    },
    "quiz": {
      "question": "Bir IoT sisteminde ortamdaki fiziksel değişkenleri (sıcaklık, nem, ışık) ölçüp mikrodenetleyiciye elektrik sinyali olarak aktaran birimlere ne ad verilir?",
      "options": [
        { "text": "A) Aktüatör", "isCorrect": False },
        { "text": "B) Sensör (Algılayıcı)", "isCorrect": True },
        { "text": "C) Monitör", "isCorrect": False },
        { "text": "D) Sabit Disk", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Sensörler (Algılayıcılar)', fiziksel dünyayı dijital dünyaya bağlayan elektronik duyu organlarıdır."
    },
    "summaryRules": [
      { "bold": "IoT Mimarisi", "text": "Sensör (Duyu), Mikrodenetleyici (Beyin) ve Aktüatör (Eylem) sacayağıdır." },
      { "bold": "ESP32 / Arduino", "text": "Fiziksel bilişimin en popüler geliştirme kartlarıdır." },
      { "bold": "Akıllı Gelecek", "text": "Evler, tarım ve fabrikalar IoT ile otonom olarak yönetilir." }
    ],
    "homework": "Eviniz için bir IoT projesi fikri geliştirip blok diyagramını (Sensör -> Kart -> Aktüatör) çizin.",
    "nextWeekPreview": "Akıllı Şehirler, Endüstri 4.0 ve Otonom Sistemlerin Çalışma Mantığı - Geleceğin karanlık fabrikaları!"
  },

  # 15. HAFTA
  {
    "week": 15,
    "date": "21 - 27 Aralık",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Nesnelerin İnterneti (IoT), Büyük Veri & Yapay Zekâ",
    "unitBadge": "Akıllı Şehirler",
    "unitTheme": "unite-3",
    "title": "Akıllı Şehirler & Endüstri 4.0",
    "subtitle": "Karanlık Fabrikalar (Lights-out Manufacturing), Otonom Şebekeler ve Akıllı Ulaşım",
    "outcomeCode": "BTY.8.3.2",
    "targetSkill": "Geleceğin Teknolojik Sistemlerini Değerlendirme",
    "curiosityQuestion": "İçinde tek bir insanın bile çalışmadığı, ışıkların tamamen kapalı olduğu 'Karanlık Fabrikalar'da robotlar arabaları nasıl hatasız üretir?",
    "roadmap": [
      { "title": "Endüstri 4.0 Devrimi", "desc": "Buhar gücünden (1.0), seri üretime (2.0), otomasyona (3.0) ve siber-fiziksel sistemlere (4.0) geçiş." },
      { "title": "Karanlık Fabrikalar", "desc": "İnsana ihtiyaç duymayan, 7/24 karanlıkta kusursuz çalışan robotik üretim tesisleri." },
      { "title": "Akıllı Şehirler (Smart Cities)", "desc": "Akıllı çöp kutuları, dinamik trafik ışıkları ve kendi enerjisini üreten binalar." },
      { "title": "Akıllı Şebekeler (Smart Grid)", "desc": "Güneş ve rüzgâr enerjisini ihtiyaca göre şehre dağıtan yapay zekâlı elektrik hatları." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(15, "Akıllı Şehirler & Endüstri 4.0"),
    "section1": {
      "title": "Karanlık Fabrikalar (Lights-Out Manufacturing)",
      "subtitle": "Robotların ışığa, molaya veya uykuya ihtiyacı yoktur:",
      "cards": [
        {
          "title": "Robotik Üretimin Üstünlükleri",
          "icon": "🏭",
          "desc": "Geleneksel fabrikalara göre avantajları:",
          "items": [
            { "bold": "Sıfır Hata Payı", "text": "Mikrometre düzeyinde lazer hassasiyetiyle çalışan kollar." },
            { "bold": "Enerji Tasarrufu", "text": "Isıtma, aydınlatma ve havalandırma gerekmez; sadece makinelerin elektriği tüketilir." },
            { "bold": "İş Güvenliği", "text": "Ağır kimyasallar ve tehlikeli pres makinelerinde insan hayatı riske atılmaz." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Geleceğin Akıllı Şehirleri",
      "subtitle": "Kaynakları israf etmeyen sürdürülebilir metropoller:",
      "cards": [
        {
          "badge": "Akıllı Çöp Kutusu",
          "title": "Dinamik Rota",
          "desc": "Doluluk sensörü %90 olunca belediye kamyonuna haber verir; kamyon boş kutulara uğramadan sadece dolu olanlara gider.",
          "items": [
            { "bold": "Fayda", "text": "%30 yakıt tasarrufu ve temiz sokaklar." }
          ]
        },
        {
          "badge": "Akıllı Sokak Lambası",
          "title": "Hareket Algılama",
          "desc": "Sokakta araba veya yaya yokken ışığı %20'ye kısar; yaklaşan biri olunca %100 parlar.",
          "items": [
            { "bold": "Fayda", "text": "Şehir bütçesine milyonlarca lira elektrik tasarrufu." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Geleceğin Akıllı Okulunu Tasarla",
      "subtitle": "Okulunuzun enerji, güvenlik ve kantin sistemini Endüstri 4.0 vizyonuyla akıllı hale getirin.",
      "steps": [
        { "title": "Enerji Modülü", "desc": "Sınıfta kimse yokken lambaları ve akıllı tahtayı otomatik kapatan sensörler." },
        { "title": "Hava Kalitesi Modülü", "desc": "Karbondioksit oranı artınca pencereleri otomatik aralayan motorlu mekanizma." },
        { "title": "Dijital Kart / Yüz Tanıma", "desc": "Kütüphane ve turnikelerde beklemeden geçiş sağlayan sistem." }
      ],
      "criteria": [
        "Sürdürülebilirlik ve tasarruf ilkelerini ön planda tutma",
        "Sensör ve IoT entegrasyonunu mantıklı kurgulama",
        "Geleceğin okul mimarisini yenilikçi fikirlerle sunma"
      ]
    },
    "tips": {
      "safetyTitle": "Akıllı Sistemlerde Güvenilirlik",
      "safetyRules": [
        { "bold": "Yedekli Sistemler (Redundancy)", "text": "Bir sensör bozulursa trafik ışığı kilitlenmemeli; yedek sensör devreye girmelidir." },
        { "bold": "Siber Güvenlik Duvarı", "text": "Akıllı şehirlerin su ve elektrik şebekeleri siber saldırılara karşı askeri düzeyde korunmalıdır." },
        { "bold": "İnsan Denetimi", "text": "Sistemler otonom çalışsa da acil durumlarda insan müdahale butonu mutlaka bulunmalıdır." }
      ],
      "myths": [
        { "wrong": "Endüstri 4.0 insanları tamamen işsiz bırakacak.", "correct": "Eski beden işleri bitecek ama robot bakımcısı, veri analisti ve yapay zekâ mimarı gibi yüzlerce yeni prestijli meslek doğacak!" },
        { "wrong": "Akıllı şehirler sadece zengin ülkeler içindir.", "correct": "Tasarruf sağladığı için akıllı şehir çözümleri aslında her ülkenin bütçesini zenginleştirir." }
      ]
    },
    "quiz": {
      "question": "İçinde insan işçilere ihtiyaç duyulmadığı için ısıtma ve aydınlatma masrafları sıfıra indirilen ve 7/24 çalışan robotik fabrikalara ne ad verilir?",
      "options": [
        { "text": "A) Buharlı Dokuma Fabrikası", "isCorrect": False },
        { "text": "B) Karanlık Fabrikalar (Lights-out Manufacturing)", "isCorrect": True },
        { "text": "C) El Sanatları Atölyesi", "isCorrect": False },
        { "text": "D) Demir Dökümhanesi", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Karanlık Fabrikalar', robotların ışıksız ortamda sensör ve kameralarla kesintisiz çalıştığı Endüstri 4.0 tesisleridir."
    },
    "summaryRules": [
      { "bold": "Endüstri 4.0", "text": "Üretimin robotlar, bulut ve yapay zekâ ile otonomlaşmasıdır." },
      { "bold": "Akıllı Şehirler", "text": "Enerjiyi ve kaynakları sensörlerle tasarruflu kullanan metropollerdir." },
      { "bold": "Geleceğin Meslekleri", "text": "Robotları yöneten ve programlayan mühendisler dünyayı şekillendirecektir." }
    ],
    "homework": "Şehrinizdeki bir sorunu (örn: park yeri bulma) akıllı şehir teknolojisiyle nasıl çözeceğinizi 1 paragrafta yazın.",
    "nextWeekPreview": "Büyük Veri (Big Data) 5V Kuralı ve Veri Madenciliği Temelleri - Bilgi madenlerine iniyoruz!"
  },

  # 16. HAFTA
  {
    "week": 16,
    "date": "28 Aralık - 03 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Nesnelerin İnterneti (IoT), Büyük Veri & Yapay Zekâ",
    "unitBadge": "Büyük Veri (5V)",
    "unitTheme": "unite-3",
    "title": "Büyük Veri (Big Data) 5V Kuralı & Veri Madenciliği",
    "subtitle": "Volume, Velocity, Variety, Veracity, Value İlkeleri ve Veri Analitiği",
    "outcomeCode": "BTY.8.3.3",
    "targetSkill": "Büyük Veriyi Çözümleme & Değer Üretme",
    "curiosityQuestion": "Dünyada her 60 saniyede 500 saat video yükleniyor ve milyonlarca mesaj atılıyor. Bu devasa veri okyanusu nerede depolanır ve ne işe yarar?",
    "roadmap": [
      { "title": "Büyük Veri (Big Data) Nedir?", "desc": "Geleneksel veritabanlarının işleyemeyeceği kadar devasa, hızlı ve karmaşık veri yığınları." },
      { "title": "Büyük Verinin 5V Kuralı", "desc": "Volume (Hacim), Velocity (Hız), Variety (Çeşitlilik), Veracity (Doğruluk), Value (Değer)." },
      { "title": "Veri Madenciliği (Data Mining)", "desc": "Milyonlarca satır veri arasından gizli bilgileri ve altın değerindeki örüntüleri çıkarma." },
      { "title": "Kişiselleştirilmiş Öneriler", "desc": "Netflix, Trendyol ve YouTube öneri algoritmalarının veri analitiği temelleri." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(16, "Büyük Veri 5V"),
    "section1": {
      "title": "Büyük Verinin 5V Kuralı",
      "subtitle": "Bir verinin 'Big Data' sayılması için bu 5 boyuta sahip olması gerekir:",
      "cards": [
        {
          "title": "5V İlkeleri",
          "icon": "📊",
          "desc": "Veri biliminin temel kriterleri:",
          "items": [
            { "bold": "1. Volume (Hacim)", "text": "Terabaytlar, petabaytlar ve zettabaytlarca devasa bilgi miktarı." },
            { "bold": "2. Velocity (Hız)", "text": "Sensörlerden ve uçak motorlarından her milisaniyede akan canlı veri akışı." },
            { "bold": "3. Variety (Çeşitlilik)", "text": "Metinler, videolar, ses kayıtları, sensör logları ve fotoğrafların bir arada olması." },
            { "bold": "4. Veracity (Doğruluk)", "text": "Verinin ne kadar güvenilir ve temiz olduğu; gürültülü hataların temizlenmesi." },
            { "bold": "5. Value (Değer)", "text": "En önemlisi! İşlenmeyen veri çöptür; veriyi faydalı bir karara dönüştürme gücü." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Veri Madenciliği: Bilgi Hazineleri",
      "subtitle": "Market sepetindeki gizli bağları keşfetmek:",
      "cards": [
        {
          "badge": "Birliktelik Kuralı",
          "title": "Bebek Bezi ve Islak Mendil",
          "desc": "Veri madenciliği analizi bebek bezi alanların %80'inin ıslak mendil de aldığını keşfeder. Market bunları yan yana koyarak satışları artırır.",
          "items": [
            { "bold": "Ticari Zekâ", "text": "Veriye dayalı reyon düzenlemesi." }
          ]
        },
        {
          "badge": "Sağlıkta Teşhis",
          "title": "Salgın Yayılım Analizi",
          "desc": "Arama motorlarında 'grip ilacı' aramalarının arttığı bölgeleri haritada göstererek salgını günler öncesinden tespit etme.",
          "items": [
            { "bold": "Erken Uyarı", "text": "Hayat kurtaran büyük veri uygulaması." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Okul Kantini Satış Verisi Madenciliği",
      "subtitle": "Kantin satış tablosunu analiz ederek en çok hangi gün hangi ürünlerin satıldığını bulalım.",
      "steps": [
        { "title": "Veri Tablosunu İncele", "desc": "Pazartesi-Cuma arası tost, ayran, meyve suyu ve meyve satış adetleri." },
        { "title": "Örüntüyü Keşfet", "desc": "Beden eğitimi dersinin olduğu günlerde su satışının 3 katına çıktığını bulun." },
        { "title": "Değer Üret (Value)", "desc": "Kantinciye öneri sunun: 'Perşembe günü su stoklarını ikiye katlayın!'" }
      ],
      "criteria": [
        "Veri tablosundan anlamlı örüntüler çıkarabilme",
        "5V kuralındaki 'Value (Değer)' ilkesini somutlaştırma",
        "Veriye dayalı mantıklı kararlar alabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Veri Analitiği Püf Noktaları",
      "safetyRules": [
        { "bold": "Çöp İçeri, Çöp Dışarı (GIGO)", "text": "'Garbage In, Garbage Out': Eğer girdiğiniz veri hatalıysa aldığınız sonuç da tamamen yanlıştır." },
        { "bold": "Gizliliğe Dikkat (Anonimleştirme)", "text": "Büyük veri analizlerinde kişilerin isimleri ve T.C. kimlikleri gizlenerek anonimleştirilmelidir." },
        { "bold": "Görselleştirme Yapın", "text": "Milyonlarca satır tabloyu kimse anlayamaz; grafikler ve haritalar çizerek görselleştirin." }
      ],
      "myths": [
        { "wrong": "Büyük veri sadece Excel tablolarıyla analiz edilebilir.", "correct": "Big Data terabaytlarca olduğu için Hadoop, Spark ve SQL gibi süper veritabanları gerektirir." },
        { "wrong": "Çok veri her zaman iyidir.", "correct": "Doğru ve temiz olmayan devasa veri sadece sistemleri yavaşlatan bir çöplüktür (Veracity önemlidir)." }
      ]
    },
    "quiz": {
      "question": "Büyük Veri (Big Data) kavramını niteleyen 5V kuralında, işlenen verinin insanlara, şirketlere veya bilime sağladığı FAYDA VE KAZANCI ifade eden boyut hangisidir?",
      "options": [
        { "text": "A) Volume (Hacim)", "isCorrect": False },
        { "text": "B) Velocity (Hız)", "isCorrect": False },
        { "text": "C) Variety (Çeşitlilik)", "isCorrect": False },
        { "text": "D) Value (Değer)", "isCorrect": True }
      ],
      "explanation": "🎉 <strong>Tebrikler, Doğru Cevap: D!</strong> 'Value (Değer)', Büyük Veri 5V kuralının en nihai amacıdır; verinin işlenerek faydaya ve ekonomik/bilimsel değere dönüşmesidir."
    },
    "summaryRules": [
      { "bold": "Büyük Veri", "text": "Hacimli, hızlı, çeşitli, doğru ve değerli dev bilgi okyanusudur." },
      { "bold": "5V Kuralı", "text": "Volume, Velocity, Variety, Veracity ve Value." },
      { "bold": "Veri Madenciliği", "text": "Veri okyanusundan geleceği aydınlatan gizli hazineleri çıkarmaktır." }
    ],
    "homework": "Günde kaç adet dijital bildirim aldığınızı 2 gün boyunca sayıp küçük bir veri tablosu çıkarın.",
    "nextWeekPreview": "1. Dönem 2. Yazılı Sınav Tekrarı & Teknolojik Kavramlar Quizi - 1. dönemi zirvede bitiriyoruz!"
  },

  # 17. HAFTA
  {
    "week": 17,
    "date": "04 - 10 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Nesnelerin İnterneti (IoT), Büyük Veri & Yapay Zekâ",
    "unitBadge": "Sınav Tekrarı",
    "unitTheme": "unite-3",
    "title": "1. Dönem 2. Yazılı Sınav Tekrarı & Teknoloji Quizi",
    "subtitle": "Kriptoloji, Blokzincir, KVKK, IoT Mimarisi, Akıllı Şehirler ve Büyük Veri Tekrarı",
    "outcomeCode": "BTY.8.3.4",
    "targetSkill": "Teknolojik Kavramları Sentezleme & Yazılı Başarısı",
    "curiosityQuestion": "17 haftalık bilişim yolculuğumuzda öğrendiğiniz hangi teknoloji sizi geleceğin en büyük şirketi yapabilir?",
    "roadmap": [
      { "title": "Kripto & Güvenlik Özeti", "desc": "Asimetrik şifreleme, RSA, 2FA ve SHA-256 hash fonksiyonları." },
      { "title": "Blokzincir & KVKK", "desc": "Dağıtık defter teknolojisi, inkâr edilemezlik ve veri mahremiyeti kanunu." },
      { "title": "IoT & Akıllı Sistemler", "desc": "Sensör, aktüatör, mikrodenetleyici ve karanlık fabrikalar." },
      { "title": "Büyük Veri 5V", "desc": "Volume, Velocity, Variety, Veracity ve Value ilkelerinin pekiştirilmesi." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(17, "1. Dönem 2. Yazılı Sınav Tekrarı"),
    "section1": {
      "title": "2. Yazılı Sınavının 4 Temel Ayağı",
      "subtitle": "Sınavda 100 almak için zihninizde netleşmesi gereken kavramlar:",
      "cards": [
        {
          "title": "Kavram Sözlüğü",
          "icon": "📚",
          "desc": "Soruların kilit noktaları:",
          "items": [
            { "bold": "Asimetrik Şifreleme", "text": "Public Key kilitler, Private Key açar (Çift anahtar)." },
            { "bold": "Blokzincir", "text": "Önceki bloğun hash özetini taşıyan değiştirilemez dağıtık defterdir." },
            { "bold": "Sensör vs Aktüatör", "text": "Sensör ortamı algılar (Girdi), aktüatör fiziksel iş yapar (Çıktı - Motor, Vana)." },
            { "bold": "KVKK", "text": "Kişisel veriler açık rıza olmadan toplanamaz ve satılamaz." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Soru Çözüm Senaryoları",
      "subtitle": "Örnek sınav sorularında mantık yürütme:",
      "cards": [
        {
          "badge": "Senaryo 1",
          "title": "Yangın Söndürme Sistemi",
          "desc": "Duman dedektörü = Sensör, Su püskürtme vanası = Aktüatör, Mikroişlemci = Denetleyici.",
          "items": [
            { "bold": "Soru Tipi", "text": "Parçaları doğru katmanla eşleştirme." }
          ]
        },
        {
          "badge": "Senaryo 2",
          "title": "Big Data 5V",
          "desc": "Milyonlarca sensör verisinden şirket için kârlı bir karar çıkarma -> 'Value (Değer)'.",
          "items": [
            { "bold": "Soru Tipi", "text": "Hangi 'V' olduğunu bulma." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahta Bilişim Arenası",
      "subtitle": "Tüm sınıf 4 gruba ayrılarak 15 soruluk final provasında yarışsın.",
      "steps": [
        { "title": "Gruplar Kurulsun", "desc": "'Kriptocular', 'Blokzincirciler', 'IoT Muhafızları', 'Veri Madencileri'." },
        { "title": "Süreye Karşı Çözüm", "desc": "Her soru için 30 saniye içinde doğru cevabı ve gerekçesini sunun." },
        { "title": "Şampiyon Takım", "desc": "En çok doğruyu bulan takım '1. Dönem Bilişim Yıldızı' unvanını alsın." }
      ],
      "criteria": [
        "2. yazılı sınav müfredatındaki kavramları hatasız tanımlama",
        "Teknik terimleri yerinde ve doğru telaffuzla kullanma",
        "Takım çalışması ve analitik akıl yürütme becerisi"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Başarı Tavsiyeleri",
      "safetyRules": [
        { "bold": "Kavramları Birbirine Karıştırmayın", "text": "Sensör ile aktüatör farkına çok dikkat edin; biri bilgi alır diğeri motoru çalıştırır." },
        { "bold": "Şık Eleme Yöntemi", "text": "En ufak şüpheniz olan şıkkı hemen eleyerek doğru cevaba odaklanın." },
        { "bold": "Kendinize Güvenin", "text": "Modern dünyanın en ileri teknolojilerini öğrendiniz; sınav sizin için çok kolay olacak!" }
      ],
      "myths": [
        { "wrong": "Bilişim dersi sınavı diğer derslerden daha önemsizdir.", "correct": "Bilişim mantığı LGS'deki fen ve matematik mantık muhakeme sorularının temelidir." },
        { "wrong": "Tüm hackerlar suçludur.", "correct": "Beyaz şapkalı etik hackerlar sistemleri koruyan en önemli güvenlik kahramanlarıdır." }
      ]
    },
    "quiz": {
      "question": "Aşağıdakilerden hangisi bir IoT sisteminde fiziksel bir eylem gerçekleştiren 'AKTÜATÖR' örneğidir?",
      "options": [
        { "text": "A) Toprak Nem Sensörü", "isCorrect": False },
        { "text": "B) Ortam Işık Algılayıcısı (LDR)", "isCorrect": False },
        { "text": "C) Su Pompası ve Motorlu Vana", "isCorrect": True },
        { "text": "D) Gaz Kaçağı Dedektörü", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: C!</strong> Su pompası ve motorlu vanalar mekanik bir hareket veya eylem ürettikleri için 'Aktüatör' sınıfındadır; diğerleri sensördür."
    },
    "summaryRules": [
      { "bold": "Büyük Tekrar", "text": "Kriptoloji, Blokzincir, KVKK, IoT ve Büyük Veri konularını eksiksiz pekiştirdik." },
      { "bold": "Sınav Başarısı", "text": "Kavramları net bilen öğrenci tüm soruları güvenle yanıtlar." },
      { "bold": "Yapay Zekâya Doğru", "text": "Önümüzdeki hafta makine öğrenmesi ve üretken yapay zekâ dünyasına adım atacağız!" }
    ],
    "homework": "Sınav çalışma kâğıdındaki 15 soruluk deneme testini evde tamamlayın.",
    "nextWeekPreview": "Makine Öğrenmesi (Machine Learning) Türleri: Denetimli, Denetimsiz ve Pekiştirmeli - Bilgisayarlara öğrenmeyi öğreteceğiz!"
  },

  # 18. HAFTA
  {
    "week": 18,
    "date": "11 - 17 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Nesnelerin İnterneti (IoT), Büyük Veri & Yapay Zekâ",
    "unitBadge": "Makine Öğrenmesi",
    "unitTheme": "unite-3",
    "title": "Makine Öğrenmesi (Machine Learning) Türleri",
    "subtitle": "Supervised (Denetimli), Unsupervised (Denetimsiz), Reinforcement (Pekiştirmeli) Öğrenme",
    "outcomeCode": "BTY.8.3.5",
    "targetSkill": "Makine Öğrenmesi Modellerini ve Algoritmalarını Sınıflandırma",
    "curiosityQuestion": "Bir bilgisayar satrançta dünya şampiyonunu nasıl yendi? Ona bütün hamleler tek tek kodlandı mı, yoksa kendi kendine oynayarak mı öğrendi?",
    "roadmap": [
      { "title": "Makine Öğrenmesi (ML) Nedir?", "desc": "Açıkça programlanmadan, verilerden tecrübe edinerek performansını artıran algoritmalar." },
      { "title": "Denetimli Öğrenme (Supervised)", "desc": "Etiketli verilerle eğitim (Girdi: Resim, Etiket: 'Kedi'). Sınıflandırma ve regresyon." },
      { "title": "Denetimsiz Öğrenme (Unsupervised)", "desc": "Etiketsiz verilerdeki gizli kümeleri bulma (Müşteri profili kümeleme - Clustering)." },
      { "title": "Pekiştirmeli Öğrenme (Reinforcement)", "desc": "Ödül ve ceza mekanizmasıyla oyun oynayarak öğrenen yapay zekâ (AlphaGo, Otonom Araçlar)." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(18, "Makine Öğrenmesi Türleri"),
    "section1": {
      "title": "Makine Öğrenmesinin 3 Temel Yöntemi",
      "subtitle": "Yapay zekânın dünyayı kavrama biçimleri:",
      "cards": [
        {
          "title": "3 Büyük Öğrenme Modeli",
          "icon": "🤖",
          "desc": "Algoritmaların öğrenme felsefesi:",
          "items": [
            { "bold": "1. Denetimli Öğrenme (Öğretmenli)", "text": "Öğrenciye sorular ve cevap anahtarı birlikte verilir. Soru: Röntgen resmi, Cevap: Sağlıklı/Hasta." },
            { "bold": "2. Denetimsiz Öğrenme (Öğretmensiz)", "text": "Cevap anahtarı yoktur; verideki benzerlikleri kendi keşfeder. Örn: Müşterileri alışveriş tarzına göre 3 gruba ayırır." },
            { "bold": "3. Pekiştirmeli Öğrenme (Ödül/Ceza)", "text": "Tıpkı bir köpeğe numara öğretmek gibi: Doğru hamle yaparsa +10 puan (ödül), yanarsa -50 puan (ceza). Milyonlarca denemeyle ustalaşır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "AlphaGo ve Satranç Devrimi",
      "subtitle": "Pekiştirmeli öğrenmenin inanılmaz gücü:",
      "cards": [
        {
          "badge": "AlphaGo",
          "title": "Dünya Şampiyonunu Yenen Kod",
          "desc": "Go oyunu evrendeki atom sayısından daha fazla olasılığa sahiptir. İnsanların bunu tek tek kodlaması imkânsızdı.",
          "items": [
            { "bold": "Çözüm", "text": "AlphaGo kendi kendine milyonlarca maç yaparak oyunun bin yıllık sırlarını çözdü." }
          ]
        },
        {
          "badge": "Otonom Araç",
          "title": "Sürücüsüz Otomobiller",
          "desc": "Şeritte kalırsa ödül puanı, kaza yaparsa büyük ceza puanı alarak sanal simülatörde sürüşü öğrenir.",
          "items": [
            { "bold": "Güvenlik", "text": "İnsanlardan daha hızlı refleks geliştirir." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Makine Öğrenmesi Türü Belirleme Vaka Çalışması",
      "subtitle": "Verilen 4 gerçek hayat senaryosunun hangi ML türü olduğunu analiz edelim.",
      "steps": [
        { "title": "Vaka 1: Spam E-Posta Filtresi", "desc": "100.000 adet 'Spam' ve 'Normal' etiketli e-postayla eğitilen filtre -> Denetimli (Supervised)." },
        { "title": "Vaka 2: Süper Mario Oynayan Yapay Zekâ", "desc": "Altın toplayınca puan alan, uçuruma düşünce yanan bot -> Pekiştirmeli (Reinforcement)." },
        { "title": "Vaka 3: Müşteri Segmentasyonu", "desc": "Milyonlarca kullanıcının şarkı dinleme saatlerine göre etiket olmadan gruplanması -> Denetimsiz (Unsupervised)." }
      ],
      "criteria": [
        "3 temel makine öğrenmesi türünün farklarını net kavrama",
        "Etiketli veri, kümeleme ve ödül/ceza kavramlarını ayırt edebilme",
        "Gerçek dünya yapay zekâ uygulamalarını analiz etme"
      ]
    },
    "tips": {
      "safetyTitle": "Yapay Zekâda Önyargı (Bias) Tehlikesi",
      "safetyRules": [
        { "bold": "Hatalı Veri Hatalı Model Üretir", "text": "Eğitim verinizde sadece erkek mühendisler varsa, model kadınların mühendis olamayacağını düşünebilir (Önyargı/Bias)." },
        { "bold": "Çeşitli Veri Kullanın", "text": "Modelinizi dünyadaki tüm farklı kültür ve dillerden zengin verilerle eğitin." },
        { "bold": "Aşırı Öğrenme (Overfitting)", "text": "Model veriyi ezberlerse yeni gördüğü durumlarda çuvallar; ezberletmeyin, mantığını öğretin." }
      ],
      "myths": [
        { "wrong": "Yapay zekâ insanlar gibi bilinç sahibidir ve düşünür.", "correct": "Yapay zekâda bilinç veya ruh yoktur; sadece çok gelişmiş olasılık ve istatistik matematiği vardır." },
        { "wrong": "Denetimsiz öğrenmede insan hiçbir şeye karışmaz.", "correct": "Algoritmanın tasarımını ve kaç kümeye ayrılacağını yine insan mühendisler belirler." }
      ]
    },
    "quiz": {
      "question": "Bir yapay zekâ modelinin video oyunu oynamayı öğrenirken; doğru hamle yaptığında 'ÖDÜL PUANI' alması, duvara çarpıp yandığında ise 'CEZA PUANI' alarak kendini geliştirmesi hangi Makine Öğrenmesi türüdür?",
      "options": [
        { "text": "A) Denetimli Öğrenme (Supervised)", "isCorrect": False },
        { "text": "B) Pekiştirmeli Öğrenme (Reinforcement Learning)", "isCorrect": True },
        { "text": "C) Denetimsiz Öğrenme (Unsupervised)", "isCorrect": False },
        { "text": "D) Kelime İşlemci", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Pekiştirmeli Öğrenme (Reinforcement Learning)', çevreyle etkileşime girip ödül ve ceza mekanizmasıyla en yüksek skora ulaşmayı öğrenen yöntemdir."
    },
    "summaryRules": [
      { "bold": "Makine Öğrenmesi", "text": "Verilerden tecrübe edinerek kendini güncelleyen yapay zekâ dalıdır." },
      { "bold": "3 Yöntem", "text": "Denetimli (Etiketli), Denetimsiz (Kümeler), Pekiştirmeli (Ödül/Ceza)." },
      { "bold": "Veri Kalitesi", "text": "Modelin zekâsı ona gösterdiğimiz verinin doğruluğu kadardır." }
    ],
    "homework": "Kullandığınız bir uygulamanın (örn: çeviri, yüz filtreleri) hangi makine öğrenmesi türünü kullandığını araştırıp yazın.",
    "nextWeekPreview": "Üretken Yapay Zekâ (LLM) Dünyası, Prompt Mühendisliği & Etik İkilemler - ChatGPT ve yapay zekâ yazarları!"
  },

  # 19. HAFTA
  {
    "week": 19,
    "date": "18 - 24 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Nesnelerin İnterneti (IoT), Büyük Veri & Yapay Zekâ",
    "unitBadge": "Üretken YZ & Dönem Sonu",
    "unitTheme": "unite-3",
    "title": "Üretken Yapay Zekâ (LLM) & Prompt Mühendisliği",
    "subtitle": "Büyük Dil Modelleri (ChatGPT, Gemini), Prompt Formülleri, Halüsinasyon ve Dönem Sonu",
    "outcomeCode": "BTY.8.3.6",
    "targetSkill": "Prompt Mühendisliği & Üretken YZ Araçlarını Etik Kullanma",
    "curiosityQuestion": "Yapay zekâya 'Bana bir şiir yaz' dediğinizde sıradan bir şiir yazarken, 'Mehmet Âkif Ersoy üslubuyla Çanakkale şehitlerine hitaben 4 kıtalık epik bir şiir yaz' dediğinizde neden bir başyapıt çıkarır?",
    "roadmap": [
      { "title": "Üretken Yapay Zekâ (Generative AI)", "desc": "Sadece sınıflandırma yapmayan; metin, resim, kod ve müzik üreten yeni nesil YZ." },
      { "title": "Büyük Dil Modelleri (LLM)", "desc": "Milyarlarca kitabı okuyarak bir sonraki en mantıklı kelimeyi tahmin eden dev modeller." },
      { "title": "Prompt Mühendisliği", "desc": "Rol + Görev + Bağlam + Kısıtlamalar = Mükemmel çıktıyı alma formülü." },
      { "title": "Halüsinasyon & Etik İkilemler", "desc": "Yapay zekânın kendinden emin şekilde yanlış bilgi uydurması tehlikesi." }
    ],
    "roadmapSvg": get_svg_for_week_8_part2(19, "Üretken YZ & Prompt"),
    "section1": {
      "title": "Prompt Mühendisliğinin Altın Formülü",
      "subtitle": "Yapay zekâdan en doğru cevabı almanın 4 adımı:",
      "cards": [
        {
          "title": "Mükemmel Prompt Formülü",
          "icon": "💬",
          "desc": "Kötü Prompt: 'Bana Python anlat'. Harika Prompt:",
          "items": [
            { "bold": "1. Rol Ver (Persona)", "text": "'Sen 15 yıllık deneyimli bir bilgisayar bilimi öğretmenisin.'" },
            { "bold": "2. Görevi Tanımla (Task)", "text": "'8. sınıf öğrencilerine Python döngülerini eğlenceli örneklerle açıkla.'" },
            { "bold": "3. Bağlam Ver (Context)", "text": "'Öğrenciler Scratch bloklarını biliyor, şimdi metin tabanlı koda geçecekler.'" },
            { "bold": "4. Kısıtlama Koy (Constraint)", "text": "'En fazla 3 paragraf olsun, içinde 1 adet çalışan kod örneği bulunsun.'" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Yapay Zekâ Etiği & Halüsinasyon",
      "subtitle": "Yapay zekâ bir arama motoru değildir, yaratıcı bir metin tahmincisidir:",
      "cards": [
        {
          "badge": "Halüsinasyon",
          "title": "Uydurma Bilgi Tehlikesi",
          "desc": "Yapay zekâ bilmediği bir soruya son derece kibar ve inandırıcı bir yalan uydurabilir.",
          "items": [
            { "bold": "Kural", "text": "Tarih, tıp ve kanun konularında yapay zekânın her söylediğini resmi kaynaklardan teyit edin!" }
          ]
        },
        {
          "badge": "Akademik Dürüstlük",
          "title": "Ödev ve İntihal",
          "desc": "Yapay zekâya ödevinizi yazdırmak intihaldir (hırsızlıktır). Onu fikir almak, kod hatalarını bulmak ve beyin fırtınası yapmak için kullanın.",
          "items": [
            { "bold": "Gelişim", "text": "Sizin yerinize düşünen bir teknoloji sizi zeki değil tembel yapar." }
          ]
        }
      ]
    },
    "workshop": {
      "title": "Prompt Mühendisliği Yarışması",
      "subtitle": "Aynı yapay zekâ aracına iki farklı prompt verip çıkan sonuçların kalitesini karşılaştıralım.",
      "steps": [
        { "title": "Zayıf Prompt", "desc": "'Python oyunu kodu ver' -> Çıkan karmaşık ve anlaşılmaz kodu inceleyin." },
        { "title": "Usta Prompt", "desc": "Rol + Görev + Kısıtlama formülüyle '8. sınıf seviyesinde, 20 satırı geçmeyen Sayı Tahmin Oyunu yaz' deyin." },
        { "title": "Karşılaştırma", "desc": "Usta prompt ile gelen kodun ne kadar temiz, yorum satırlı ve anlaşılır olduğunu görün." }
      ],
      "criteria": [
        "Prompt formülünün 4 bileşenini eksiksiz uygulayabilme",
        "Yapay zekâ çıktılarındaki halüsinasyon ve hataları denetleme",
        "Etik kullanım ve akademik dürüstlük bilinci sergileme"
      ]
    },
    "tips": {
      "safetyTitle": "Üretken YZ Güvenlik Kuralları",
      "safetyRules": [
        { "bold": "Gizli Veri Paylaşmayın", "text": "Sohbet robotlarına aile sırlarınızı, kod şifrelerinizi veya kimlik bilgilerinizi yazmayın; sistem bu verilerle eğitilir." },
        { "bold": "Kritik Kararları Ona Bırakmayın", "text": "Geleceğiniz, sağlığınız ve arkadaşlık ilişkileriniz hakkında kararları siz alın." },
        { "bold": "2. Döneme Hazırlık", "text": "Sömestr tatilinde Python dilinin temellerini öğrenmeye başlayarak 2. döneme önde girin!" }
      ],
      "myths": [
        { "wrong": "Yapay zekâ her şeyi bildiği için artık ders çalışmaya gerek yoktur.", "correct": "Yapay zekânın ürettiği bilginin doğru mu yanlış mı olduğunu anlayabilmek için eskisinden daha çok bilgiye ihtiyacımız vardır!" },
        { "wrong": "ChatGPT internetteki tüm web sitelerini canlı olarak tek tek okur.", "correct": "Eğitildiği veri kümesine göre kelime kelime olasılık hesaplayarak tahmin üretir." }
      ]
    },
    "quiz": {
      "question": "Bir üretken yapay zekâ modelinin (LLM) gerçekte var olmayan tarihi bir olayı veya yanlış bir bilgiyi son derece kendinden emin ve ikna edici şekilde uydurması durumuna ne ad verilir?",
      "options": [
        { "text": "A) Format Atma", "isCorrect": False },
        { "text": "B) Halüsinasyon (Hallucination)", "isCorrect": True },
        { "text": "C) Şifreleme", "isCorrect": False },
        { "text": "D) Donanım Yanması", "isCorrect": False }
      ],
      "explanation": "🎉 <strong>Harika, Doğru Cevap: B!</strong> 'Halüsinasyon (Hallucination)', yapay zekânın veri eksikliğinde mantıklı görünen ancak tamamen asılsız bilgiler uydurması olgusudur."
    },
    "summaryRules": [
      { "bold": "Üretken Yapay Zekâ", "text": "Metin, kod, resim ve müzik üreten yeni nesil teknolojidir." },
      { "bold": "Prompt Mühendisliği", "text": "Yapay zekâ ile doğru, net ve hedefe yönelik iletişim kurma sanatıdır." },
      { "bold": "1. Dönem Bitti", "text": "Bilişimsel düşünmeden yapay zekâya harika bir dönem tamamladık; 2. dönem Python ile kod yazacağız!" }
    ],
    "homework": "Yarıyıl tatilinde Python IDLE veya Thonny programını bilgisayarınıza kurup hazır olun.",
    "nextWeekPreview": "Sömestr 1. Hafta: Bilişimsel Mantık Muhakeme & LGS Sayısal Mantık Kampı - Kış kampı başlıyor!"
  }
]
