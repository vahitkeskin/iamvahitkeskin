#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curriculum & Slide Generator for 9. Sınıf Bilgisayar Bilimi (Kur 1)
2026-2027 MEB Maarif Modeli
Öğretmen: Vahit Keskin
"""

import os
import json
import generator_shared as shared

OUTPUT_DIR = "/Users/vahitkeskin/Documents/GitHub/iamvahitkeskin/files/bilisimogretmenligi/9-sinif"
os.makedirs(OUTPUT_DIR, exist_ok=True)

GRADE_NAME = "9. Sınıf"
COURSE_NAME = "Bilgisayar Bilimi (Kur 1)"

def get_svg_for_week(week, title):
    # Specialized high-tech SVGs for high school computer science
    if week == 1: # Donanım & CPU
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
          <rect x="30" y="30" width="160" height="240" rx="10" fill="#162038" stroke="#00f0ff" stroke-width="2"/>
          <text x="110" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#00f0ff">CPU (İşlemci)</text>
          <rect x="45" y="70" width="130" height="50" rx="6" fill="#1e293b" stroke="#38bdf8"/>
          <text x="110" y="92" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">CU (Kontrol Birimi)</text>
          <text x="110" y="108" text-anchor="middle" font-size="9" fill="#94a3b8">Komut Getir & Çöz</text>
          <rect x="45" y="130" width="130" height="50" rx="6" fill="#1e293b" stroke="#10b981"/>
          <text x="110" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">ALU (Aritmetik-Mantık)</text>
          <text x="110" y="168" text-anchor="middle" font-size="9" fill="#94a3b8">Toplama / Karar</text>
          <rect x="45" y="190" width="130" height="40" rx="6" fill="#1e293b" stroke="#f59e0b"/>
          <text x="110" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">Yazmaçlar & Cache</text>
          
          <rect x="230" y="40" width="160" height="90" rx="8" fill="#162038" stroke="#8b5cf6" stroke-width="2"/>
          <text x="310" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#c084fc">RAM (Ana Bellek)</text>
          <text x="310" y="85" text-anchor="middle" font-size="10" fill="#cbd5e1">DDR4 / DDR5 - Uçucu</text>
          <text x="310" y="105" text-anchor="middle" font-size="9" fill="#94a3b8">Yüksek Hız, Geçici Veri</text>
          
          <rect x="230" y="160" width="160" height="90" rx="8" fill="#162038" stroke="#ec4899" stroke-width="2"/>
          <text x="310" y="185" text-anchor="middle" font-size="13" font-weight="bold" fill="#f472b6">SSD / Depolama</text>
          <text x="310" y="205" text-anchor="middle" font-size="10" fill="#cbd5e1">NVMe PCIe - Kalıcı</text>
          <text x="310" y="225" text-anchor="middle" font-size="9" fill="#94a3b8">Dosya & İşletim Sistemi</text>
          
          <!-- Veri Yolları (Buses) -->
          <line x1="190" y1="85" x2="230" y2="85" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4"/>
          <line x1="190" y1="205" x2="230" y2="205" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
          <text x="210" y="78" text-anchor="middle" font-size="8" fill="#38bdf8">Bus</text>
        </svg>'''
    elif week == 2: # İşletim Sistemleri
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"/>
          <rect x="40" y="30" width="340" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="210" y="58" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">Kullanıcı & Uygulamalar (Python, Web Tarayıcı, Oyun)</text>
          
          <rect x="40" y="95" width="340" height="45" rx="8" fill="#162038" stroke="#8b5cf6" stroke-width="1.5"/>
          <text x="210" y="123" text-anchor="middle" font-size="13" font-weight="bold" fill="#c084fc">Kabuk (Shell) & Sistem Çağrıları (Bash, Terminal, GUI)</text>
          
          <rect x="40" y="160" width="340" height="60" rx="8" fill="#1e1b4b" stroke="#10b981" stroke-width="2"/>
          <text x="210" y="188" text-anchor="middle" font-size="14" font-weight="bold" fill="#34d399">ÇEKİRDEK (Kernel - Pardus / Linux)</text>
          <text x="210" y="206" text-anchor="middle" font-size="10" fill="#94a3b8">Süreç Yönetimi | Bellek Yönetimi | Sürücüler | Dosya Sistemi</text>
          
          <rect x="40" y="240" width="340" height="38" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="210" y="264" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">Fiziksel Donanım (CPU, RAM, Disk, Ağ Kartı)</text>
        </svg>'''
    elif week == 3 or week == 4: # Ağlar & Protokoller
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(56, 189, 248, 0.3)" stroke-width="2"/>
          <circle cx="210" cy="140" r="35" fill="#162038" stroke="#00f0ff" stroke-width="2"/>
          <text x="210" y="136" text-anchor="middle" font-size="11" font-weight="bold" fill="#00f0ff">Router</text>
          <text x="210" y="150" text-anchor="middle" font-size="9" fill="#94a3b8">Yönlendirici</text>
          
          <g transform="translate(70, 70)">
            <rect width="80" height="50" rx="6" fill="#1e293b" stroke="#3b82f6"/>
            <text x="40" y="28" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">İstemci PC</text>
            <text x="40" y="42" text-anchor="middle" font-size="8" fill="#94a3b8">192.168.1.10</text>
            <line x1="80" y1="25" x2="110" y2="55" stroke="#38bdf8" stroke-dasharray="3"/>
          </g>
          
          <g transform="translate(270, 70)">
            <rect width="80" height="50" rx="6" fill="#1e293b" stroke="#10b981"/>
            <text x="40" y="28" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Web Sunucu</text>
            <text x="40" y="42" text-anchor="middle" font-size="8" fill="#94a3b8">Port: 443 / 80</text>
            <line x1="0" y1="25" x2="-30" y2="55" stroke="#10b981" stroke-dasharray="3"/>
          </g>

          <g transform="translate(170, 210)">
            <rect width="80" height="45" rx="6" fill="#1e293b" stroke="#f59e0b"/>
            <text x="40" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#fbbf24">DNS Sunucu</text>
            <text x="40" y="38" text-anchor="middle" font-size="8" fill="#94a3b8">meb.gov.tr -> IP</text>
            <line x1="40" y1="0" x2="40" y2="-35" stroke="#f59e0b" stroke-dasharray="3"/>
          </g>
        </svg>'''
    elif week == 5 or week == 6: # Siber Güvenlik & Kriptoloji
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(239, 68, 68, 0.3)" stroke-width="2"/>
          <rect x="40" y="40" width="100" height="70" rx="8" fill="#1e293b" stroke="#38bdf8"/>
          <text x="90" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Düz Metin</text>
          <text x="90" y="90" text-anchor="middle" font-size="9" fill="#94a3b8">"Gizli Parola"</text>
          
          <rect x="170" y="40" width="80" height="70" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="2"/>
          <text x="210" y="72" text-anchor="middle" font-size="20">🔐</text>
          <text x="210" y="94" text-anchor="middle" font-size="9" font-weight="bold" fill="#fbbf24">AES / RSA</text>
          
          <rect x="280" y="40" width="100" height="70" rx="8" fill="#1e293b" stroke="#ef4444"/>
          <text x="330" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#fca5a5">Şifreli Metin</text>
          <text x="330" y="90" text-anchor="middle" font-size="8" fill="#94a3b8">"X7#9q$2@!kL"</text>
          
          <!-- Hash Fonksiyonu Bölümü -->
          <rect x="40" y="150" width="340" height="110" rx="8" fill="#111827" stroke="#10b981" stroke-dasharray="4"/>
          <text x="210" y="175" text-anchor="middle" font-size="12" font-weight="bold" fill="#34d399">Tek Yönlü Özetleme: SHA-256 Hash</text>
          <text x="210" y="200" text-anchor="middle" font-size="10" fill="#cbd5e1">Veri Boyutu Ne Olursa Olsun Sabit 256 Bit (64 Hex Karakter)</text>
          <rect x="60" y="215" width="300" height="30" rx="4" fill="#070b14"/>
          <text x="210" y="235" text-anchor="middle" font-size="9" font-family="monospace" fill="#00f0ff">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</text>
        </svg>'''
    elif week in [11, 12, 13]: # Akış Şeması & Mantık
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"/>
          <!-- Başla Elips -->
          <ellipse cx="210" cy="35" rx="55" ry="20" fill="#162038" stroke="#10b981" stroke-width="2"/>
          <text x="210" y="40" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">BAŞLA</text>
          <line x1="210" y1="55" x2="210" y2="75" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
          
          <!-- Girdi Paralelkenar -->
          <polygon points="160,75 270,75 250,110 140,110" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
          <text x="205" y="97" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">Girdi: sayi</text>
          <line x1="205" y1="110" x2="205" y2="135" stroke="#94a3b8" stroke-width="2"/>
          
          <!-- Karar Eşkenar Dörtgen -->
          <polygon points="205,135 275,170 205,205 135,170" fill="#162038" stroke="#f59e0b" stroke-width="2"/>
          <text x="205" y="174" text-anchor="middle" font-size="10" font-weight="bold" fill="#fbbf24">sayi % 2 == 0?</text>
          
          <!-- Evet / Hayır Çıkışları -->
          <line x1="275" y1="170" x2="330" y2="170" stroke="#10b981" stroke-width="2"/>
          <text x="295" y="162" font-size="9" fill="#34d399">Evet</text>
          <rect x="330" y="152" width="70" height="35" rx="4" fill="#1e293b" stroke="#10b981"/>
          <text x="365" y="174" text-anchor="middle" font-size="9" fill="#ffffff">Çift Yaz</text>
          
          <line x1="135" y1="170" x2="80" y2="170" stroke="#ef4444" stroke-width="2"/>
          <text x="105" y="162" font-size="9" fill="#fca5a5">Hayır</text>
          <rect x="20" y="152" width="60" height="35" rx="4" fill="#1e293b" stroke="#ef4444"/>
          <text x="50" y="174" text-anchor="middle" font-size="9" fill="#ffffff">Tek Yaz</text>
          
          <!-- Dur Elips -->
          <ellipse cx="205" cy="265" rx="50" ry="18" fill="#162038" stroke="#ec4899" stroke-width="2"/>
          <text x="205" y="270" text-anchor="middle" font-size="11" font-weight="bold" fill="#f472b6">DUR</text>
          <line x1="50" y1="187" x2="50" y2="240" stroke="#94a3b8"/>
          <line x1="50" y1="240" x2="160" y2="265" stroke="#94a3b8"/>
          <line x1="365" y1="187" x2="365" y2="240" stroke="#94a3b8"/>
          <line x1="365" y1="240" x2="255" y2="265" stroke="#94a3b8"/>
        </svg>'''
    elif week in [15, 16, 18]: # Python Temelleri & Değişkenler
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
          <g transform="translate(30, 40)">
            <rect width="160" height="100" rx="8" fill="#162038" stroke="#00f0ff" stroke-width="2"/>
            <text x="80" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#00f0ff">Değişken İsmi (Etiket)</text>
            <text x="80" y="55" text-anchor="middle" font-size="18" font-family="monospace" font-weight="bold" fill="#ffffff">puan = 100</text>
            <text x="80" y="85" text-anchor="middle" font-size="10" fill="#94a3b8">Tip: int (Tam Sayı)</text>
          </g>
          <g transform="translate(230, 40)">
            <rect width="160" height="100" rx="8" fill="#162038" stroke="#10b981" stroke-width="2"/>
            <text x="80" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">Metin (String)</text>
            <text x="80" y="55" text-anchor="middle" font-size="18" font-family="monospace" font-weight="bold" fill="#ffffff">ad = "Ali"</text>
            <text x="80" y="85" text-anchor="middle" font-size="10" fill="#94a3b8">Tip: str (Karakter Dizisi)</text>
          </g>
          <g transform="translate(30, 160)">
            <rect width="160" height="100" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="2"/>
            <text x="80" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">Ondalıklı Sayı</text>
            <text x="80" y="55" text-anchor="middle" font-size="18" font-family="monospace" font-weight="bold" fill="#ffffff">pi = 3.14</text>
            <text x="80" y="85" text-anchor="middle" font-size="10" fill="#94a3b8">Tip: float</text>
          </g>
          <g transform="translate(230, 160)">
            <rect width="160" height="100" rx="8" fill="#162038" stroke="#ec4899" stroke-width="2"/>
            <text x="80" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#f472b6">Mantıksal Değer</text>
            <text x="80" y="55" text-anchor="middle" font-size="18" font-family="monospace" font-weight="bold" fill="#ffffff">aktif = True</text>
            <text x="80" y="85" text-anchor="middle" font-size="10" fill="#94a3b8">Tip: bool (Doğru / Yanlış)</text>
          </g>
        </svg>'''
    elif week in [22, 23, 24]: # Koşullar & Karar Ağacı
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(56, 189, 248, 0.3)" stroke-width="2"/>
          <rect x="150" y="30" width="120" height="40" rx="6" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
          <text x="210" y="55" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold" fill="#00f0ff">if puan &gt;= 85:</text>
          
          <line x1="210" y1="70" x2="310" y2="120" stroke="#10b981" stroke-width="2"/>
          <text x="270" y="90" font-size="10" fill="#34d399">True</text>
          <rect x="260" y="120" width="110" height="40" rx="6" fill="#1e293b" stroke="#10b981"/>
          <text x="315" y="145" text-anchor="middle" font-size="11" fill="#ffffff">print("Pekiyi (5)")</text>
          
          <line x1="210" y1="70" x2="110" y2="120" stroke="#f59e0b" stroke-width="2"/>
          <text x="145" y="90" font-size="10" fill="#fbbf24">False</text>
          <rect x="50" y="120" width="130" height="40" rx="6" fill="#1e293b" stroke="#f59e0b"/>
          <text x="115" y="145" text-anchor="middle" font-size="11" font-family="monospace" fill="#fbbf24">elif puan &gt;= 50:</text>
          
          <line x1="115" y1="160" x2="175" y2="210" stroke="#38bdf8" stroke-width="2"/>
          <rect x="130" y="210" width="90" height="40" rx="6" fill="#1e293b" stroke="#38bdf8"/>
          <text x="175" y="235" text-anchor="middle" font-size="11" fill="#ffffff">print("Geçti")</text>
          
          <line x1="115" y1="160" x2="55" y2="210" stroke="#ef4444" stroke-width="2"/>
          <rect x="15" y="210" width="90" height="40" rx="6" fill="#1e293b" stroke="#ef4444"/>
          <text x="60" y="235" text-anchor="middle" font-size="11" fill="#ffffff">print("Kaldı")</text>
        </svg>'''
    elif week in [25, 28, 29]: # Döngüler
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2"/>
          <circle cx="210" cy="140" r="75" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 4"/>
          <text x="210" y="130" text-anchor="middle" font-size="13" font-family="monospace" font-weight="bold" fill="#ffffff">for i in range(5):</text>
          <text x="210" y="152" text-anchor="middle" font-size="11" fill="#94a3b8">Adım Adım Tekrar</text>
          
          <!-- Döngü Adımları -->
          <g transform="translate(210, 45)"><circle r="16" fill="#1e293b" stroke="#00f0ff"/><text y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="#00f0ff">i=0</text></g>
          <g transform="translate(300, 110)"><circle r="16" fill="#1e293b" stroke="#00f0ff"/><text y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="#00f0ff">i=1</text></g>
          <g transform="translate(265, 205)"><circle r="16" fill="#1e293b" stroke="#00f0ff"/><text y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="#00f0ff">i=2</text></g>
          <g transform="translate(155, 205)"><circle r="16" fill="#1e293b" stroke="#00f0ff"/><text y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="#00f0ff">i=3</text></g>
          <g transform="translate(120, 110)"><circle r="16" fill="#1e293b" stroke="#00f0ff"/><text y="4" text-anchor="middle" font-size="10" font-weight="bold" fill="#00f0ff">i=4</text></g>
          
          <rect x="140" y="245" width="140" height="35" rx="6" fill="#111827" stroke="#10b981"/>
          <text x="210" y="267" text-anchor="middle" font-size="10" font-weight="bold" fill="#34d399">Döngüden Çıkış (break)</text>
        </svg>'''
    elif week in [30, 31, 32, 33, 34]: # Veri Yapıları
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(168, 85, 247, 0.3)" stroke-width="2"/>
          <text x="210" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#c084fc">Python Liste (Array) Bellek Yerleşimi</text>
          
          <!-- Liste Kutuları -->
          <g transform="translate(30, 60)">
            <rect width="80" height="70" rx="6" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
            <text x="40" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">"Python"</text>
            <text x="40" y="55" text-anchor="middle" font-size="10" font-family="monospace" fill="#00f0ff">[0]</text>
          </g>
          <g transform="translate(125, 60)">
            <rect width="80" height="70" rx="6" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
            <text x="40" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">"Java"</text>
            <text x="40" y="55" text-anchor="middle" font-size="10" font-family="monospace" fill="#00f0ff">[1]</text>
          </g>
          <g transform="translate(220, 60)">
            <rect width="80" height="70" rx="6" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
            <text x="40" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">"C++"</text>
            <text x="40" y="55" text-anchor="middle" font-size="10" font-family="monospace" fill="#00f0ff">[2]</text>
          </g>
          <g transform="translate(315, 60)">
            <rect width="80" height="70" rx="6" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
            <text x="40" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">"Rust"</text>
            <text x="40" y="55" text-anchor="middle" font-size="10" font-family="monospace" fill="#00f0ff">[3]</text>
          </g>

          <!-- Sözlük (Dictionary) Karşılaştırması -->
          <rect x="30" y="160" width="365" height="110" rx="8" fill="#111827" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="210" y="185" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">Sözlük (Dictionary) - Anahtar (Key) : Değer (Value)</text>
          <text x="210" y="215" text-anchor="middle" font-size="12" font-family="monospace" fill="#ffffff">ogrenci = {{"ad": "Ece", "no": 104, "alan": "Bilişim"}}</text>
          <text x="210" y="245" text-anchor="middle" font-size="10" fill="#94a3b8">Hızlı arama süresi: O(1) Hash Tablosu Mimarisi</text>
        </svg>'''
    else: # Fonksiyonlar, Modüller & Yıl Sonu
        return '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(99, 102, 241, 0.3)" stroke-width="2"/>
          <rect x="40" y="40" width="100" height="60" rx="8" fill="#1e293b" stroke="#38bdf8"/>
          <text x="90" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#38bdf8">Girdi</text>
          <text x="90" y="85" text-anchor="middle" font-size="9" fill="#94a3b8">Parametreler (x, y)</text>
          
          <line x1="140" y1="70" x2="180" y2="70" stroke="#00f0ff" stroke-width="2" stroke-dasharray="3"/>
          
          <rect x="180" y="30" width="140" height="90" rx="10" fill="#162038" stroke="#8b5cf6" stroke-width="2"/>
          <text x="250" y="55" text-anchor="middle" font-size="12" font-family="monospace" font-weight="bold" fill="#c084fc">def topla(a, b):</text>
          <text x="250" y="78" text-anchor="middle" font-size="10" font-family="monospace" fill="#ffffff">sonuc = a + b</text>
          <text x="250" y="98" text-anchor="middle" font-size="10" font-family="monospace" fill="#34d399">return sonuc</text>
          
          <line x1="320" y1="70" x2="360" y2="70" stroke="#10b981" stroke-width="2" stroke-dasharray="3"/>
          
          <rect x="340" y="40" width="60" height="60" rx="8" fill="#1e293b" stroke="#10b981"/>
          <text x="370" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">Çıktı</text>
          <text x="370" y="85" text-anchor="middle" font-size="9" fill="#94a3b8">Sonuç</text>
          
          <!-- Hata Yönetimi try-except -->
          <rect x="40" y="150" width="340" height="115" rx="8" fill="#111827" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="210" y="175" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbf24">İstisna Yönetimi: try / except</text>
          <text x="210" y="200" text-anchor="middle" font-size="10" font-family="monospace" fill="#ffffff">try: sayi = int(input()) except ValueError: print("Hata!")</text>
          <text x="210" y="225" text-anchor="middle" font-size="10" fill="#cbd5e1">Programın aniden çökmesini önler, güvenli çalışma sağlar.</text>
          <text x="210" y="245" text-anchor="middle" font-size="9" fill="#94a3b8">Temiz Kod | Modülerlik | Tekrar Kullanılabilirlik</text>
        </svg>'''

# 41 Weeks Data for Grade 9
WEEKS_DATA_9 = [
  # --- 1. DÖNEM (1 - 19) ---
  {
    "week": 1,
    "date": "14 - 20 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişim Etiği ve Bilgisayar Sistemleri",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Bilgisayar Bilimine Giriş & Donanım Mimarisi",
    "subtitle": "Von Neumann Mimarisi, İşlemci (CPU), Bellek ve Veri Yolları",
    "outcomeCode": "BB.9.1.1",
    "targetSkill": "Sistem Analizi & Donanım Okuryazarlığı",
    "curiosityQuestion": "Bir bilgisayar aslında sadece 0 ve 1 elektrik sinyallerinden ibaretken, saniyede milyarlarca komutu nasıl hatasız işler?",
    "roadmap": [
      { "title": "Bilgisayar Biliminin Kapsamı", "desc": "Donanım, yazılım, ağlar ve algoritmaların kesişim haritası." },
      { "title": "Von Neumann Mimarisi", "desc": "Giriş birimleri, CPU (ALU + CU), Bellek ve Çıkış birimlerinin haberleşmesi." },
      { "title": "Bellek Hiyerarşisi", "desc": "Yazmaçlar (Registers), Önbellek (L1/L2/L3), RAM ve NVMe SSD hız dengesi." },
      { "title": "Geleceğin Mimarileri", "desc": "ARM mimarisi, NPU (Yapay Zekâ Hızlandırıcıları) ve Kuantum bilişim." }
    ],
    "section1": {
      "title": "Merkezi İşlem Birimi (CPU) ve Komut Döngüsü",
      "subtitle": "Getir (Fetch), Çöz (Decode) ve Çalıştır (Execute) süreçleri",
      "cards": [
        {
          "title": "CPU'nun Temel Bileşenleri",
          "icon": "⚡",
          "desc": "Bilgisayarın tüm mantıksal ve aritmetik kararlarını veren merkezi mikroişlemci.",
          "items": [
            { "bold": "ALU (Aritmetik Mantık Birimi)", "text": "Toplama, çıkarma, karşılaştırma ve Boole mantık işlemlerini icra eder." },
            { "bold": "CU (Kontrol Birimi)", "text": "Komutların zamanlamasını ve veri yollarındaki sinyal trafiğini koordine eder." },
            { "bold": "Saat Frekansı (GHz)", "text": "İşlemcinin saniyedeki saat darbesi sayısını belirtir (Örn: 3.8 GHz = saniyede 3.8 milyar döngü)." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Bellek Türleri & Veri Hiyerarşisi",
      "subtitle": "Hız, kapasite ve maliyet dengesi",
      "codeSnippet": "# Terminalden Donanım Bilgisi Sorgulama\n$ lscpu | grep 'Model name'\nModel name: AMD Ryzen 7 / Intel Core i7\n\n$ free -h\n       total        used        free\nMem:    16Gi       4.2Gi       11.8Gi\nSwap:  2.0Gi         0Bi        2.0Gi",
      "codeTitle": "bash_terminal.sh",
      "codeLang": "Bash",
      "cards": [
        { "badge": "RAM vs SSD", "title": "Uçucu ve Kalıcı Bellek", "desc": "RAM elektrik kesildiğinde sıfırlanır ancak nanosaniyeler mertebesinde hızlıdır; SSD ise verileri kalıcı depolar.", "items": [{ "bold": "Cache Bellek", "text": "İşlemciye en yakın ultra hızlı geçici bellek katmanıdır." }] }
      ]
    },
    "workshop": {
      "title": "Terminal ile Sistem Donanımını Analiz Etme",
      "subtitle": "Okul bilgisayarında komut satırını açarak CPU, RAM ve depolama detaylarını çıkarma",
      "steps": [
        { "title": "1. Terminali Başlat", "desc": "Pardus/Linux üzerinde CTRL+ALT+T ile komut satırını açın." },
        { "title": "2. İşlemciyi Sorgula", "desc": "`lscpu` komutunu çalıştırarak çekirdek sayısını ve önbellek boyutunu inceleyin." },
        { "title": "3. Belleği İzle", "desc": "`free -m` komutuyla toplam ve boş RAM miktarını megabayt cinsinden kaydedin." },
        { "title": "4. Süreç Ağacını Gör", "desc": "`top` veya `htop` ile işlemcinin o an hangi süreçlerce tüketildiğini raporlayın." }
      ],
      "criteria": [
        "CPU modelini ve çekirdek (core/thread) sayısını doğru tespit etme",
        "RAM ile Swap (Takas Alanı) arasındaki ilişkiyi açıklayabilme",
        "Donanım bileşenlerinin birbirine darboğaz (bottleneck) oluşturma nedenini yorumlama"
      ]
    },
    "tips": {
      "safetyTitle": "Donanım Güvenliği ve Sağlığı",
      "safetyRules": [
        { "bold": "Statik Elektrik (ESD)", "text": "Parçalara dokunmadan önce metal bir yüzeye dokunarak statik yükünüzü boşaltın." },
        { "bold": "Sıcaklık ve Termal Macun", "text": "CPU sıcaklığının 85°C üzerine çıkması termal kısmaya (throttling) neden olur." },
        { "bold": "Güç Kaynağı (PSU)", "text": "Sertifikalı (80+) güç kaynakları dalgalanmaları önleyerek anakartı korur." }
      ],
      "myths": [
        { "wrong": "Çekirdek sayısı fazla olan her işlemci her oyunda veya uygulamada daha hızlıdır.", "correct": "Yazılım çoklu çekirdeği (multithreading) optimize etmemişse tek çekirdek performansı belirleyicidir." },
        { "wrong": "RAM dolunca bilgisayar yanar veya donanım bozulur.", "correct": "İşletim sistemi disk üzerinde Sanal Bellek (Swap) açarak çökmeyi önler, ancak sistem yavaşlar." }
      ]
    },
    "quiz": {
      "question": "Bilgisayarda komutların Getirilmesi (Fetch), Çözülmesi (Decode) ve Çalıştırılması (Execute) adımlarını yürüten ana donanım birimi hangisidir?",
      "options": [
        { "text": "A) RAM (Ana Bellek)", "isCorrect": False },
        { "text": "B) CPU (Merkezi İşlem Birimi)", "isCorrect": True },
        { "text": "C) GPU (Ekran Kartı)", "isCorrect": False },
        { "text": "D) SSD (Katı Hâl Sürücüsü)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. CPU, Fetch-Decode-Execute döngüsü ile işletim sistemi ve program komutlarını yürüten bilgisayarın beynidir."
    },
    "summary": {
      "keyPoints": [
        "Von Neumann mimarisi verileri ve komutları aynı bellek hiyerarşisinde ele alır.",
        "İşlemci hızı GHz, çekirdek sayısı ve önbellek (Cache) mimarisinin birleşimiyle ölçülür.",
        "RAM geçici çalışma masası, SSD ise kalıcı kütüphane gibidir."
      ],
      "nextWeek": "İşletim Sistemleri Mimarisi, Linux Çekirdeği ve Millî İşletim Sistemimiz Pardus",
      "homework": "Kendi bilgisayarınızın işlemci mimarisini (x86_64 mü ARM mı) ve RAM miktarını öğrenip defterinize şemasını çiziniz."
    }
  },
  {
    "week": 2,
    "date": "21 - 27 Eylül",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişim Etiği ve Bilgisayar Sistemleri",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "İşletim Sistemleri & Açık Kaynak Dünyası",
    "subtitle": "Çekirdek (Kernel), Süreç Yönetimi, Linux Mimarisi ve Pardus",
    "outcomeCode": "BB.9.1.2",
    "targetSkill": "İşletim Sistemi Yönetimi & Açık Kaynak Bilinci",
    "curiosityQuestion": "Dünyadaki süper bilgisayarların %100'ü ve internet sunucularının çoğu neden açık kaynaklı Linux kullanır?",
    "roadmap": [
      { "title": "İşletim Sistemi Nedir?", "desc": "Donanım ile uygulama yazılımları arasındaki köprü ve kaynak yöneticisi." },
      { "title": "Çekirdek (Kernel) Türleri", "desc": "Monolitik çekirdek (Linux), Mikro çekirdek ve Hibrit mimariler." },
      { "title": "Linux ve Pardus", "desc": "Açık kaynak felsefesi, TÜBİTAK Pardus projesi ve özgür yazılım lisansları." },
      { "title": "Temel Dosya Sistemi", "desc": "Kök dizin (/), /home, /etc, izinler (rwx) ve terminal komutları." }
    ],
    "section1": {
      "title": "İşletim Sisteminin Dört Ana Görevi",
      "subtitle": "Süreç, Bellek, Dosya ve Aygıt Yönetimi",
      "cards": [
        {
          "title": "Kaynak Yönetim İlkeleri",
          "icon": "🐧",
          "desc": "Donanım kaynaklarının uygulamalar arasında adil ve güvenli paylaşımı.",
          "items": [
            { "bold": "Süreç Yönetimi (Process Scheduling)", "text": "CPU süresini milisaniyeler bazında uygulamalara dağıtır." },
            { "bold": "Bellek Yönetimi (Memory Management)", "text": "Her programa izole bellek alanı tahsis eder, çakışmaları engeller." },
            { "bold": "Aygıt Sürücüleri (Drivers)", "text": "Yazılımların ekran kartı, yazıcı gibi cihazlarla standart dille konuşmasını sağlar." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Terminal (CLI) Gücü ve Temel Komutlar",
      "subtitle": "Grafik arayüz olmadan bilgisayarı tam kontrol etme",
      "codeSnippet": "# Pardus / Linux Temel Terminal Komutları\n$ pwd                  # Bulunduğun dizini göster\n/home/ogrenci\n$ ls -la               # Dosyaları ve izinleri listele\n$ mkdir proje_kod      # Yeni klasör oluştur\n$ cd proje_kod         # Klasöre geçiş yap\n$ touch main.py        # Boş bir Python dosyası üret",
      "codeTitle": "terminal_giris.sh",
      "codeLang": "Bash",
      "cards": [
        { "badge": "Açık Kaynak", "title": "Özgür Yazılımın Gücü", "desc": "Kaynak kodları herkes tarafından incelenebilir, denetlenebilir ve geliştirilebilir.", "items": [{ "bold": "Pardus", "text": "Türkiye'nin güvenli ve yerli Debian tabanlı dağıtımıdır." }] }
      ]
    },
    "workshop": {
      "title": "Pardus Terminali ile Dosya ve Dizin Yönetimi",
      "subtitle": "Komut satırında klasör açma, dosya izinlerini düzenleme ve sistem durumunu görme",
      "steps": [
        { "title": "1. Dizin Oluştur", "desc": "`mkdir lab1` komutuyla yeni bir çalışma alanı açın." },
        { "title": "2. Dosya Üret", "desc": "`echo 'Merhaba Bilgisayar Bilimi' > not.txt` ile dosya yazın." },
        { "title": "3. İçeriği Oku", "desc": "`cat not.txt` komutuyla dosya içeriğini terminale yazdırın." },
        { "title": "4. İzinleri İncele", "desc": "`ls -l not.txt` yazarak dosyanın okuma (r), yazma (w) yetkilerini analiz edin." }
      ],
      "criteria": [
        "Temel navigasyon komutlarını (`cd`, `ls`, `pwd`) akıcı kullanma",
        "Açık kaynak ile kapalı kod (proprietary) yazılımların farkını ifade edebilme",
        "Pardus'un kamu ve eğitim kurumlarındaki siber güvenlik katkısını kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Root ve Yönetici Güvenliği",
      "safetyRules": [
        { "bold": "sudo Komutuna Dikkat", "text": "Yönetici yetkisi veren `sudo` komutunu ne yaptığını bilmediğiniz betiklerde asla çalıştırmayın." },
        { "bold": "Güncellemeleri İhmal Etmeyin", "text": "`sudo apt update && sudo apt upgrade` ile güvenlik açıklarını düzenli kapatın." },
        { "bold": "Dosya İzinleri", "text": "Her dosyaya 777 (tam yetki) vermek güvenlik zaafiyeti oluşturur." }
      ],
      "myths": [
        { "wrong": "Linux işletim sistemlerinde hiç virüs veya güvenlik açığı bulunmaz.", "correct": "Linux mimarisi izin yapısı sebebiyle çok güvenlidir ancak kullanıcı hatası veya güncellenmemiş sunucular hedef olabilir." },
        { "wrong": "Açık kaynaklı yazılımlar ücretsiz olduğu için kalitesizdir.", "correct": "Dünya internet omurgası, Android ve NASA sistemleri açık kaynaklı Linux çekirdeğiyle çalışır." }
      ]
    },
    "quiz": {
      "question": "İşletim sisteminde donanım ile yazılımlar arasında doğrudan iletişim kuran, bellek ve süreç yönetiminden sorumlu en temel çekirdek bileşene ne ad verilir?",
      "options": [
        { "text": "A) Shell (Kabuk)", "isCorrect": False },
        { "text": "B) Kernel (Çekirdek)", "isCorrect": True },
        { "text": "C) BIOS / UEFI", "isCorrect": False },
        { "text": "D) GUI (Grafik Arayüz)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Kernel (Çekirdek), işletim sisteminin kalbidir; süreçleri, belleği ve donanım aygıtlarını doğrudan yönetir."
    },
    "summary": {
      "keyPoints": [
        "İşletim sistemi bir orkestra şefi gibi donanım kaynaklarını paylaştırır.",
        "Linux açık kaynaklı, güvenli ve esnek yapısıyla modern teknolojinin temel taşıdır.",
        "Pardus, millî siber bağımsızlığımızın önemli bir dijital kalesidir."
      ],
      "nextWeek": "Bilgisayar Ağları, Ağ Topolojileri ve OSI / TCP-IP Modeli",
      "homework": "Pardus işletim sisteminin resmi web sitesini (pardus.org.tr) ziyaret ederek hangi kamu kurumlarında kullanıldığını araştırınız."
    }
  },
  {
    "week": 3,
    "date": "28 Eylül - 04 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişim Etiği ve Bilgisayar Sistemleri",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Bilgisayar Ağları & Topolojiler",
    "subtitle": "LAN, WAN, Ağ Cihazları (Switch, Router) ve OSI Katman Modeli",
    "outcomeCode": "BB.9.1.3",
    "targetSkill": "Ağ Mimarisi Modelleme & Protokol Analizi",
    "curiosityQuestion": "Telefonunuzdan gönderdiğiniz bir WhatsApp mesajı saniyeler içinde okyanus ötesindeki bir sunucuya nasıl ulaşıp hedefe varır?",
    "roadmap": [
      { "title": "Ağ Türleri", "desc": "PAN (Kişisel), LAN (Yerel), MAN (Şehir) ve WAN (Geniş Alan Ağı)." },
      { "title": "Fiziksel Topolojiler", "desc": "Yıldız (Star), Halka (Ring), Yol (Bus) ve Örgü (Mesh) mimarileri." },
      { "title": "Ağ Donanımları", "desc": "Anahtar (Switch), Yönlendirici (Router), Modem ve Erişim Noktası (AP)." },
      { "title": "OSI 7 Katman Modeli", "desc": "Fiziksel, Veri Bağlantı, Ağ, İletim, Oturum, Sunum ve Uygulama." }
    ],
    "section1": {
      "title": "Ağ Cihazları ve Görev Dağılımı",
      "subtitle": "Paketlerin doğru hedefe yönlendirilmesi süreci",
      "cards": [
        {
          "title": "Switch vs Router",
          "icon": "🌐",
          "desc": "Yerel ağ içi yönlendirme ile ağlar arası yönlendirmenin farkı.",
          "items": [
            { "bold": "Switch (Anahtar)", "text": "Yerel ağdaki (LAN) cihazları MAC adreslerine göre birbirine bağlar." },
            { "bold": "Router (Yönlendirici)", "text": "Farklı ağları IP adreslerine göre haberleştirir ve internet rotasını belirler." },
            { "bold": "Yıldız Topolojisi", "text": "Günümüzde tüm cihazların merkezi bir switch'e bağlandığı en yaygın modeldir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "OSI Katmanları ve Veri Paketleme (Encapsulation)",
      "subtitle": "Verinin kablodan ekrana yolculuğu",
      "codeSnippet": "# Ağ Bağlantısını ve Rotaları Test Etme\n$ ping -c 4 meb.gov.tr\n64 bytes from ...: icmp_seq=1 ttl=56 time=14.2 ms\n\n$ traceroute google.com\n 1  192.168.1.1 (Modem/Router)  1.2 ms\n 2  10.20.0.1 (ISP Omurgası)     8.5 ms\n 3  142.250.185.206 (Hedef)     14.1 ms",
      "codeTitle": "ag_tehisi.sh",
      "codeLang": "Bash",
      "cards": [
        { "badge": "OSI Mimarisi", "title": "Katmanlı Yaklaşım", "desc": "Her katman sadece bir üst ve bir alt katmanla konuşarak karmaşık ağ iletişimini modüler hale getirir.", "items": [{ "bold": "Paketleme", "text": "Veri her katmandan geçerken başlık (header) eklenerek paketlenir." }] }
      ]
    },
    "workshop": {
      "title": "Cisco Packet Tracer ile Yıldız Ağ Simülasyonu",
      "subtitle": "1 Switch, 1 Router ve 3 Bilgisayardan oluşan sanal yerel ağ kurma ve paket gönderme",
      "steps": [
        { "title": "1. Cihazları Ekle", "desc": "Çalışma alanına 1 adet Switch ve 3 adet PC yerleştirin." },
        { "title": "2. Kablolama Yap", "desc": "Düz geçişli (Straight-Through) bakır kablolarla PC'leri Switch portlarına bağlayın." },
        { "title": "3. IP Tanımla", "desc": "PC'lere 192.168.1.10, 192.168.1.11, 192.168.1.12 statik IP adreslerini atayın." },
        { "title": "4. Simülasyonu Başlat", "desc": "PC0'dan PC2'ye ICMP paketi (Ping) yollayarak paket akışını adım adım izleyin." }
      ],
      "criteria": [
        "IP adresi ve Alt Ağ Maskesi (Subnet Mask) mantığını kavramış olma",
        "Switch'in broadcast fırtınasını nasıl engellediğini açıklayabilme",
        "`ping` komutu ile gecikme (latency) değerlerini analiz etme"
      ]
    },
    "tips": {
      "safetyTitle": "Ağ Güvenliği ve Kablolama Standartları",
      "safetyRules": [
        { "bold": "WPA3 Şifreleme", "text": "Kablosuz ağlarda eski WEP ve WPA standartları dakikalar içinde kırılabilir; mutlaka WPA2/WPA3 kullanın." },
        { "bold": "Varsayılan Şifreleri Değiştirin", "text": "Modem veya router yönetim şifresi asla 'admin/admin' olarak bırakılmamalıdır." },
        { "bold": "Kablo Bükülme Yarıçapı", "text": "Cat6 ethernet veya fiber kabloları aşırı bükmek sinyal kaybına (attenuation) yol açar." }
      ],
      "myths": [
        { "wrong": "Wi-Fi sinyalinin şifresi güçlüyse ağdaki tüm veriler otomatik olarak tamamen gizlidir.", "correct": "Ağdaki diğer kullanıcılar şifresiz HTTP sitelerindeki trafiğinizi paket dinleme (sniffing) ile görebilir." },
        { "wrong": "Router ile Modem tamamen aynı cihazdır.", "correct": "Modem sinyali dönüştürür (modüle/demodüle), Router ise farklı ağlar arasındaki paket trafiğini yönlendirir." }
      ]
    },
    "quiz": {
      "question": "Yerel ağda (LAN) bulunan bilgisayarları MAC adresleri tablosuna (CAM Table) göre birbirine bağlayan ve veriyi sadece hedef porta ileten akıllı ağ cihazı hangisidir?",
      "options": [
        { "text": "A) Hub (Dağıtıcı)", "isCorrect": False },
        { "text": "B) Switch (Anahtar)", "isCorrect": True },
        { "text": "C) Repeater (Tekrarlayıcı)", "isCorrect": False },
        { "text": "D) Modem", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Switch, gelen veri çerçevesindeki (Frame) hedef MAC adresini okuyarak paketi yalnızca ilgili porta yollar; Hub gibi herkese yaymaz."
    },
    "summary": {
      "keyPoints": [
        "Bilgisayar ağları coğrafi boyutlarına göre LAN, MAN ve WAN olarak sınıflandırılır.",
        "Günümüz modern ofis ve okullarında en çok Yıldız (Star) topolojisi kullanılır.",
        "OSI modeli 7 katmanıyla ağ iletişimini evrensel bir standarda bağlamıştır."
      ],
      "nextWeek": "İnternet Protokolleri, IP Adresleme (IPv4 / IPv6), DNS ve Web Altyapısı",
      "homework": "Evinizdeki internet modemi arkasındaki portları ve bağlı cihazları inceleyip yerel IP adreslerini listeyiniz."
    }
  },
  {
    "week": 4,
    "date": "05 - 11 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişim Etiği ve Bilgisayar Sistemleri",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "İnternet Protokolleri, IP & DNS",
    "subtitle": "IPv4 vs IPv6, TCP/UDP, Portlar, DNS Çözümleme ve Client-Server",
    "outcomeCode": "BB.9.1.4",
    "targetSkill": "Protokol Analizi & Web Altyapısı Okuryazarlığı",
    "curiosityQuestion": "Tarayıcınıza 'meb.gov.tr' yazdığınızda bilgisayarınız o sitenin hangi sunucuda olduğunu milisaniyeler içinde nasıl bulur?",
    "roadmap": [
      { "title": "IP Adresleme Mimarisi", "desc": "32 bitlik IPv4 adres tükenmesi ve 128 bitlik IPv6 geleceği." },
      { "title": "DNS (Alan Adı Sistemi)", "desc": "İnternetin telefon rehberi: İsimleri IP adreslerine çevirme hiyerarşisi." },
      { "title": "TCP vs UDP", "desc": "Güvenilir ve el sıkışmalı (TCP) vs Ultra hızlı ve kayıpsız olmayan (UDP)." },
      { "title": "Standart Portlar", "desc": "HTTP (80), HTTPS (443), SSH (22), DNS (53), FTP (21)." }
    ],
    "section1": {
      "title": "İnternetin Telefon Rehberi: DNS ve İstemci-Sunucu",
      "subtitle": "Kök DNS, TLD (.tr, .gov) ve Yetkili Ad Sunucuları",
      "cards": [
        {
          "title": "DNS Çözümleme Aşamaları",
          "icon": "🔎",
          "desc": "Tarayıcı adres satırına basıldığı andan sayfanın gelmesine kadar geçen süreç.",
          "items": [
            { "bold": "1. Yerel Önbellek", "text": "Önce tarayıcı ve işletim sistemi önbelleğinde IP aranır." },
            { "bold": "2. DNS Sunucu Sorgusu", "text": "Bulunamazsa servis sağlayıcının (ISP) DNS sunucusuna sorulur." },
            { "bold": "3. IP ile Bağlantı", "text": "Elde edilen IP adresine TCP 443 portu üzerinden el sıkışma (Handshake) gönderilir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "İletim Katmanı: TCP vs UDP Farkı",
      "subtitle": "Kritik veri doğruluğu ile gerçek zamanlı hız yarışı",
      "codeSnippet": "# DNS Sorgusu Yapma (dig / nslookup)\n$ nslookup meb.gov.tr\nServer:         1.1.1.1\nAddress:        1.1.1.1#53\n\nNon-authoritative answer:\nName:   meb.gov.tr\nAddress: 195.175.244.135",
      "codeTitle": "dns_sorgu.sh",
      "codeLang": "Bash",
      "cards": [
        { "badge": "TCP vs UDP", "title": "Kullanım Alanları", "desc": "TCP web sayfaları ve dosya indirmede kullanılırken; UDP canlı yayın, online oyun ve görüntülü görüşmede tercih edilir.", "items": [{ "bold": "El Sıkışma (3-Way Handshake)", "text": "SYN -> SYN-ACK -> ACK ile güvenli kanal açılır." }] }
      ]
    },
    "workshop": {
      "title": "Wireshark ile HTTP / DNS Paketlerini Yakalama",
      "subtitle": "Ağ kartından geçen DNS sorgusunu ve TCP üçlü el sıkışmasını canlı gözlemleme",
      "steps": [
        { "title": "1. Wireshark'ı Aç", "desc": "Aktif internet arayüzünü (Wi-Fi veya Ethernet) seçip dinlemeyi başlatın." },
        { "title": "2. Filtre Uygula", "desc": "Arama çubuğuna `dns || http` filtresi yazarak gürültüyü azaltın." },
        { "title": "3. Siteye Gir", "desc": "Tarayıcıdan bir web sitesi açın ve giden `DNS Standard query` paketini bulun." },
        { "title": "4. Yanıtı İncele", "desc": "Sunucudan dönen `DNS response` paketinin içindeki A kaydını (IP adresini) okuyun." }
      ],
      "criteria": [
        "DNS protokolünün 53 numaralı portu ve UDP kullandığını gözlemleme",
        "İstemci (Client) ve Sunucu (Server) IP adreslerini paket başlığından ayırt etme",
        "HTTPS'in veriyi şifrelediğini, düz metin okunmasını engellediğini test etme"
      ]
    },
    "tips": {
      "safetyTitle": "DNS Güvenliği ve Oltalama Koruması",
      "safetyRules": [
        { "bold": "DNS Zehirlenmesi (DNS Spoofing)", "text": "Zararlı yazılımlar DNS ayarlarınızı sahte sunuculara yönlendirerek banka sitelerini taklit edebilir." },
        { "bold": "DoH / DoT Kullanımı", "text": "DNS-over-HTTPS (DoH) ile DNS sorgularınızı şifreleyip meraklı gözlerden gizleyin." },
        { "bold": "HTTPS Asma Kilit İkonu", "text": "Adres çubuğunda kilit simgesi ve alan adının tam doğruluğunu kontrol edin." }
      ],
      "myths": [
        { "wrong": "IPv6 geldiğinde internet hızımız otomatik olarak 10 kat artacaktır.", "correct": "IPv6 hız değil, tükenen IP adres havuzunu (3.4 x 10^38 adres) genişletmek için tasarlanmıştır." },
        { "wrong": "UDP bozuk veya güvenilmez olduğu için çağ dışı bir protokoldür.", "correct": "UDP gecikmesiz gerçek zamanlı iletişim (oyun, ses) için bilerek el sıkışmayı atlayan vazgeçilmez bir protokoldür." }
      ]
    },
    "quiz": {
      "question": "Web tarayıcınızın 'https://...' ile başlayan güvenli bir web sitesine bağlanırken kullandığı varsayılan ağ port numarası hangisidir?",
      "options": [
        { "text": "A) 21", "isCorrect": False },
        { "text": "B) 53", "isCorrect": False },
        { "text": "C) 80", "isCorrect": False },
        { "text": "D) 443", "isCorrect": True }
      ],
      "explanation": "Doğru Cevap: D. Standart güvensiz HTTP 80 portunu kullanırken, SSL/TLS ile şifrelenmiş güvenli HTTPS protokolü 443 numaralı portu kullanır."
    },
    "summary": {
      "keyPoints": [
        "IP adresleri internetteki her cihazın dijital kimliğidir.",
        "DNS sistemi akılda kalıcı alan adlarını makine dostu IP adreslerine çevirir.",
        "TCP garantili teslimat sunarken, UDP hız odaklı gerçek zamanlı veri taşır."
      ],
      "nextWeek": "Siber Güvenlik, Zararlı Yazılımlar, Tehditler ve Dijital Mahremiyet",
      "homework": "Komut satırından `nslookup` komutunu kullanarak en çok ziyaret ettiğiniz 3 web sitesinin IP adreslerini bulunuz."
    }
  },
  {
    "week": 5,
    "date": "12 - 18 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişim Etiği ve Bilgisayar Sistemleri",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Siber Güvenlik & Dijital Mahremiyet",
    "subtitle": "Zararlı Yazılımlar (Malware), Sosyal Mühendislik, Oltalama ve Savunma",
    "outcomeCode": "BB.9.1.5",
    "targetSkill": "Siber Tehdit Analizi & Dijital Öz Savunma",
    "curiosityQuestion": "En güçlü şifreleme ve güvenlik duvarlarına sahip devasa şirketler nasıl olur da basit bir e-posta ekine tıklanmasıyla hacklenebilir?",
    "roadmap": [
      { "title": "Zararlı Yazılım Türleri", "desc": "Virüs, Truva Atı (Trojan), Fidye Yazılımı (Ransomware), Solucan (Worm), Casus (Spyware)." },
      { "title": "Sosyal Mühendislik", "desc": "İnsan psikolojisini istismar etme: Oltalama (Phishing), yemleme ve kimlik taklidi." },
      { "title": "Parola Güvenliği & 2FA", "desc": "Entropi, kaba kuvvet (Brute-force) saldırıları ve İki Aşamalı Doğrulama." },
      { "title": "Dijital Ayak İzi", "desc": "Sosyal medyada paylaşılan verilerin toplanması, profiling ve gizlilik ayarları." }
    ],
    "section1": {
      "title": "Zararlı Yazılımlar (Malware) ve Bulaşma Yolları",
      "subtitle": "Sistemleri ele geçiren, kilitleyen veya veri sızdıran kodlar",
      "cards": [
        {
          "title": "En Tehlikeli 3 Zararlı Yazılım",
          "icon": "🛡️",
          "desc": "Modern siber korsanların en sık kullandığı saldırı vektörleri.",
          "items": [
            { "bold": "Fidye Yazılımı (Ransomware)", "text": "Diskteki tüm dosyaları güçlü şifrelerle kilitler ve açmak için kripto para talep eder." },
            { "bold": "Truva Atı (Trojan)", "text": "Faydalı bir oyun veya program gibi görünerek arka planda saldırgana kapı (backdoor) açar." },
            { "bold": "Casus Yazılım (Keylogger/Spyware)", "text": "Klavyede bastığınız her tuşu ve şifreyi kaydedip saldırgana iletir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sosyal Mühendislik ve Oltalama (Phishing)",
      "subtitle": "Sistemler kırılmaz, insanlar kandırılır",
      "codeSnippet": "# Güvenli Parola Üretme Python Kodu\nimport secrets, string\nkarakterler = string.ascii_letters + string.digits + \"!@#$%^&*\"\nparola = ''.join(secrets.choice(karakterler) for _ in range(16))\nprint(\"Kırılması İmkânsız Parola:\", parola)\n# Çıktı: K9#mQ8$vL2!xZ7@w",
      "codeTitle": "guclu_parola.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Oltalama Belirtileri", "title": "Sahte E-Postayı Tanıma", "desc": "Aciliyet hissi oluşturma, şüpheli gönderici alan adı ve sahte giriş bağlantıları.", "items": [{ "bold": "İki Aşamalı Doğrulama (2FA)", "text": "Parolanız çalınsa bile telefonunuza gelen onay olmadan hesaba girilemez." }] }
      ]
    },
    "workshop": {
      "title": "Phishing (Oltalama) Analizi ve Parola Testi Laboratuvarı",
      "subtitle": "Örnek bir sahte e-postayı inceleme ve parolanın brute-force kırılma süresini hesaplama",
      "steps": [
        { "title": "1. E-Posta Başlığını İncele", "desc": "Gönderen adresi ile gerçek alan adını karşılaştırın (Örn: `support@paypa1.com`)." },
        { "title": "2. Bağlantı Linkini Kontrol Et", "desc": "Tıklamadan linkin üzerine gelerek alttaki gerçek URL hedefini okuyun." },
        { "title": "3. Parola Entropisi Ölç", "desc": "Harf, rakam ve sembol içeren 16 karakterli bir parolanın kırılma süresini simüle edin." },
        { "title": "4. 2FA Kurulumu Yap", "desc": "Bir test hesabında Authenticator uygulamasıyla 2 faktörlü koruma açın." }
      ],
      "criteria": [
        "Oltalama yöntemlerini teknik ipuçlarıyla ifşa edebilme",
        "Kişisel bilgileri (doğum yılı, isim vb.) parola olarak kullanmama bilinci",
        "Dijital ayak izini azaltmak için gizlilik ayarlarını optimize etme"
      ]
    },
    "tips": {
      "safetyTitle": "Siber Hijyen ve Dijital Savunma İlkeleri",
      "safetyRules": [
        { "bold": "Aynı Parolayı Tekrarlama", "text": "Bir site hacklendiğinde sızan parolanız tüm diğer hesaplarınızı tehlikeye atar." },
        { "bold": "Parola Yöneticisi Kullanın", "text": "Bitwarden veya KeePass gibi açık kaynaklı parola kasaları kullanın." },
        { "bold": "Korsan Yazılımdan Kaçının", "text": "Torrent ve kırılmış (crack) programlar içine neredeyse her zaman trojan gömülür." }
      ],
      "myths": [
        { "wrong": "Ben ünlü veya zengin biri değilim, beni kimse hacklemek istemez.", "correct": "Saldırganlar bireyleri botnet ordusu kurmak veya kimlik hırsızlığı yapmak için otomatik taramalarla avlar." },
        { "wrong": "Gizli sekme (Incognito) beni internette tamamen görünmez ve anonim yapar.", "correct": "Gizli sekme sadece yerel tarayıcı geçmişini tutmaz; siteler ve servis sağlayıcı trafiğinizi yine görür." }
      ]
    },
    "quiz": {
      "question": "Kullanıcının bilgisayarındaki önemli dosyaları şifreleyerek erişilemez hale getiren ve şifreyi çözmek için para talep eden siber saldırı yazılımı hangisidir?",
      "options": [
        { "text": "A) Adware (Reklam Yazılımı)", "isCorrect": False },
        { "text": "B) Ransomware (Fidye Yazılımı)", "isCorrect": True },
        { "text": "C) Solucan (Worm)", "isCorrect": False },
        { "text": "D) Casus Yazılım (Spyware)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Ransomware (Fidye Yazılımı), sistemleri şifreleyip fidye isteyerek hastaneler, okullar ve şirketlerde milyarlarca liralık zarara yol açan en kritik tehdittir."
    },
    "summary": {
      "keyPoints": [
        "Siber güvenlikte en zayıf halka genellikle teknoloji değil insan faktörüdür.",
        "Güçlü parola ve 2FA dijital hesaplarınızın çelik kapısıdır.",
        "Sosyal mühendislik tuzaklarına karşı her zaman şüpheci ve dikkatli olunmalıdır."
      ],
      "nextWeek": "Kriptoloji Temelleri: Şifreleme Algoritmaları, Hash ve Güvenli İletişim",
      "homework": "Kişisel e-posta veya sosyal medya hesaplarınızda İki Aşamalı Doğrulama (2FA) özelliğini aktif hale getiriniz."
    }
  },
  {
    "week": 6,
    "date": "19 - 25 Ekim",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişim Etiği ve Bilgisayar Sistemleri",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Kriptoloji: Şifreleme, Hash & İmza",
    "subtitle": "Sezar Şifrelemesinden RSA'ya: Simetrik vs Asimetrik Şifreleme ve SHA-256",
    "outcomeCode": "BB.9.1.6",
    "targetSkill": "Kriptografik Düşünme & Veri Bütünlüğü Analizi",
    "curiosityQuestion": "Birbirini hiç tanımayan iki bilgisayar, aradaki hattı herkes dinlerken nasıl kimsenin çözemeyeceği ortak bir gizli şifre belirleyebilir?",
    "roadmap": [
      { "title": "Kriptoloji Nedir?", "desc": "Kriptografi (Şifreleme bilimi) ve Kriptoanaliz (Şifre kırma bilimi)." },
      { "title": "Klasik Kriptoloji", "desc": "Sezar kaydırmalı şifreleme ve frekans analiziyle kırılma mantığı." },
      { "title": "Simetrik vs Asimetrik", "desc": "Tek anahtarlı AES vs Açık/Özel (Public/Private) anahtarlı RSA/ECC." },
      { "title": "Hash ve Dijital İmza", "desc": "Geri döndürülemez özet fonksiyonları (SHA-256) ve veri bütünlüğü doğrulama." }
    ],
    "section1": {
      "title": "Simetrik ve Asimetrik Şifreleme Mimarisi",
      "subtitle": "Gizli anahtar paylaşımı sorununun asimetrik matematikle çözümü",
      "cards": [
        {
          "title": "İki Temel Şifreleme Türü",
          "icon": "🔑",
          "desc": "Modern internet güvenliğinin dayandığı matematiksel temeller.",
          "items": [
            { "bold": "Simetrik Şifreleme (AES)", "text": "Şifreleme ve çözme için tek bir gizli anahtar kullanılır; çok hızlıdır." },
            { "bold": "Asimetrik Şifreleme (RSA)", "text": "Herkesin bildiği Genel Anahtar (Public Key) ile şifrelenir, sadece sahibindeki Özel Anahtar (Private Key) çözer." },
            { "bold": "Hibrit Yaklaşım", "text": "HTTPS bağlantısında oturum anahtarı RSA ile güvenle paylaşılır, ardından hızlı AES ile konuşulur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Kriptografik Hash (Özet) Fonksiyonları",
      "subtitle": "Verinin parmak izi: Çığ etkisi (Avalanche Effect)",
      "codeSnippet": "# Python ile SHA-256 Hash Hesaplama\nimport hashlib\n\nmesaj = \"MEB 2026\".encode('utf-8')\nhash_kodu = hashlib.sha256(mesaj).hexdigest()\nprint(\"Hash:\", hash_kodu)\n# Çıktı: 5a8e... (Tek bir harf değişse bile hash tamamen değişir!)",
      "codeTitle": "hash_ornek.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Hash Özellikleri", "title": "Geri Dönüşsüzlük", "desc": "Hash kodundan orijinal metin asla üretilemez; sadece aynı girdinin aynı hash'i verip vermediği kontrol edilir.", "items": [{ "bold": "Veri Bütünlüğü", "text": "İndirilen bir dosyanın değiştirilmediğini doğrulamak için hash karşılaştırılır." }] }
      ]
    },
    "workshop": {
      "title": "Python ile Sezar Şifreleme Aracı Kodlama",
      "subtitle": "Kullanıcının girdiği metni alfabede belirli bir adım kaydırarak şifreleyen algoritma yazma",
      "steps": [
        { "title": "1. Algoritmayı Tasarla", "desc": "Her harfin ASCII kodunu (`ord()`) alıp anahtar kadar ekleyin." },
        { "title": "2. Şifreleme Fonksiyonu", "desc": "Taşan karakterleri alfabenin başına döndürmek için `% 26` modülünü kullanın." },
        { "title": "3. Çözme Fonksiyonu", "desc": "Aynı işlemi ters yönde (çıkarma) uygulayarak orijinal metni elde edin." },
        { "title": "4. Frekans Testi", "desc": "Türkçede en çok geçen 'a' ve 'e' harflerini sayarak şifrenin nasıl kırılabileceğini tartışın." }
      ],
      "criteria": [
        "ASCII ve karakter kodlama mantığını doğru uygulama",
        "Simetrik ve asimetrik şifrelemenin kullanım senaryolarını ayırt etme",
        "Hash fonksiyonlarının şifreleme değil özetleme olduğunu kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Kriptografik Güvenlik Standartları",
      "safetyRules": [
        { "bold": "Kendi Şifrelemenizi Yazmayın", "text": "Gerçek projelerde asla kendi yazdığınız kriptoyu kullanmayın; test edilmiş standart kütüphaneleri (OpenSSL) seçin." },
        { "bold": "MD5 ve SHA-1 Kullanmayın", "text": "Bu algoritmalar çakışma (collision) saldırılarıyla kırılmıştır; en az SHA-256 kullanın." },
        { "bold": "Özel Anahtarı Asla Paylaşmayın", "text": "Private Key yalnızca sizin cihazınızda kalmalıdır." }
      ],
      "myths": [
        { "wrong": "Hash fonksiyonları çok güçlü şifreleme yöntemleridir.", "correct": "Hash bir şifreleme değildir; tek yönlü matematiksel özettir, geri çözülemez." },
        { "wrong": "Asimetrik şifreleme her şey için simetrik şifrelemeden daha üstündür.", "correct": "Asimetrik şifreleme yüzlerce kat daha yavaştır; bu yüzden sadece anahtar değişiminde kullanılır." }
      ]
    },
    "quiz": {
      "question": "Asimetrik (Açık Anahtarlı) şifreleme sisteminde, bir kullanıcının size şifreli bir mesaj gönderebilmesi için hangi anahtarınızı kullanması gerekir?",
      "options": [
        { "text": "A) Özel Anahtarınız (Private Key)", "isCorrect": False },
        { "text": "B) Genel Anahtarınız (Public Key)", "isCorrect": True },
        { "text": "C) Ortak Simetrik Anahtar", "isCorrect": False },
        { "text": "D) Hash Kodu", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Genel Anahtar (Public Key) herkese açıktır ve mesajı şifrelemek için kullanılır. Şifreyi yalnızca o anahtarın sahibi kendi Özel Anahtarıyla (Private Key) çözebilir."
    },
    "summary": {
      "keyPoints": [
        "Kriptoloji bilginin gizliliğini, bütünlüğünü ve kimlik doğrulamasını sağlar.",
        "Asimetrik şifreleme gizli anahtarı hatta sızdırmadan güvenli iletişim başlatır.",
        "Hash fonksiyonları tek yönlüdür ve verinin değiştirilmediğini ispatlar."
      ],
      "nextWeek": "Bilişim Hukuku, Telif Hakları, Açık Kaynak Lisansları ve KVKK",
      "homework": "İnternetten indirdiğiniz bir dosyanın SHA-256 hash değerini işletim sistemi komutuyla (`sha256sum` veya `Get-FileHash`) doğrulayınız."
    }
  },
  {
    "week": 7,
    "date": "26 Ekim - 01 Kasım",
    "hours": "2 Ders Saati",
    "unit": "1. Ünite: Bilişim Etiği ve Bilgisayar Sistemleri",
    "unitBadge": "1. Ünite",
    "unitTheme": "unite-1",
    "title": "Bilişim Hukuku, Telif Hakları & KVKK",
    "subtitle": "Fikri Mülkiyet, Creative Commons, Açık Kaynak Lisansları (GPL, MIT) ve Siber Suçlar",
    "outcomeCode": "BB.9.1.7",
    "targetSkill": "Bilişim Etiği & Yasal Sorumluluk Bilinci",
    "curiosityQuestion": "İnternette herkese açık bulunan bir fotoğrafı veya kod satırını kopyalayıp kendi projenizde kullanmak ne zaman yasal, ne zaman suçtur?",
    "roadmap": [
      { "title": "Fikri Mülkiyet ve Telif", "desc": "Yazılım, görsel, müzik ve metinlerin eser sahipliği hakları." },
      { "title": "Açık Kaynak Lisansları", "desc": "MIT, Apache 2.0, GPL (Copyleft) ve ticari kullanım koşulları." },
      { "title": "Creative Commons (CC)", "desc": "BY (Atıf), NC (Ticari Olmayan), ND (Türetilemez), SA (Aynı Lisansla Paylaş)." },
      { "title": "KVKK ve Bilişim Suçları", "desc": "Kişisel verilerin korunması kanunu, veri ihlalleri ve TCK bilişim suçları." }
    ],
    "section1": {
      "title": "Açık Kaynak Yazılım Lisansları Dünyası",
      "subtitle": "Kodu özgürce paylaşırken hakları koruma yöntemleri",
      "cards": [
        {
          "title": "Popüler Yazılım Lisansları",
          "icon": "⚖️",
          "desc": "Yazılımcıların projelerini dünyaya sunarken seçtiği modeller.",
          "items": [
            { "bold": "MIT Lisansı", "text": "Son derece özgürdür; kodu kopyalayabilir, değiştirebilir ve ticari satabilirsiniz; tek şart telif ibaresini korumaktır." },
            { "bold": "GPL (Genel Kamu Lisansı)", "text": "Copyleft ilkesi: Kodunuzu kullanan herkes kendi projesini de açık kaynak yapmak zorundadır." },
            { "bold": "Tescilli (Proprietary)", "text": "Kaynak kodu gizlidir, tersine mühendislik ve kopyalama kanunen yasaktır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "KVKK ve Dijital Çağda Kişisel Veriler",
      "subtitle": "6698 Sayılı Kişisel Verilerin Korunması Kanunu",
      "codeSnippet": "# Açık Kaynak Lisans Başlığı Örneği (MIT)\n\"\"\"\nMIT License\nCopyright (c) 2026 Vahit Keskin\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files...\n\"\"\"",
      "codeTitle": "LICENSE",
      "codeLang": "Text",
      "cards": [
        { "badge": "Kişisel Veri Nedir?", "title": "Kimliği Belirli Kılan Veriler", "desc": "Ad, TC kimlik no, IP adresi, konum geçmişi ve biyometrik veriler kanun koruması altındadır.", "items": [{ "bold": "Açık Rıza", "text": "Verileriniz onayınız olmadan üçüncü taraflarla paylaşılamaz veya satılamaz." }] }
      ]
    },
    "workshop": {
      "title": "Yazılım Projesine Doğru Lisans Seçme Çalıştayı",
      "subtitle": "Senaryolara göre bir yazılım projesine en uygun açık kaynak veya ticari lisansı belirleme",
      "steps": [
        { "title": "1. Senaryoyu İncele", "desc": "'Şirketlerin kodumu görmesini ama ücretsiz kullanmasını istiyorum' senaryosunu okuyun." },
        { "title": "2. ChooseALicense Aracını Kullan", "desc": "choosealicense.com üzerinden lisans maddelerini karşılaştırın." },
        { "title": "3. GitHub LICENSE Dosyası Oluştur", "desc": "Deponuza uygun MIT veya GPL metnini ekleyin." },
        { "title": "4. CC Lisansı Uygula", "desc": "Projenizdeki grafikler için Creative Commons BY-SA rozeti seçin." }
      ],
      "criteria": [
        "Açık kaynak lisanslarının sınırlarını ve sorumluluklarını doğru anlama",
        "İnternetten görsel veya kod alırken telif durumunu kontrol etme alışkanlığı",
        "Kişisel veri ihlallerinde yasal haklarını bilme"
      ]
    },
    "tips": {
      "safetyTitle": "Bilişim Hukuku ve Siber Suç Farkındalığı",
      "safetyRules": [
        { "bold": "Sistemleri İzinsiz Test Etmeyin", "text": "İzin almadan bir web sitesinde açık aramak veya tarama yapmak (port scan) suç teşkil edebilir." },
        { "bold": "Başkalarının Verisini Yaymayın", "text": "İzinsiz fotoğraf veya mesaj paylaşmak TCK kapsamında özel hayatın gizliliğini ihlaldir." },
        { "bold": "Yazılım Korsanlığına Hayır", "text": "Korsan yazılım hem hırsızlıktır hem de sisteminizi zararlılara açar." }
      ],
      "myths": [
        { "wrong": "Google Görseller'de çıkan tüm fotoğraflar ücretsizce projelerde kullanılabilir.", "correct": "Görsellerin çoğunun telif hakkı vardır; filtrelerden 'Ticari ve diğer lisanslar' aranmalıdır." },
        { "wrong": "Açık kaynaklı bir yazılımı kimse ticari amaçla satamaz.", "correct": "Lisans koşullarına uyulursa (örneğin MIT) açık kaynak kodlu ürünler ticari olarak dağıtılabilir." }
      ]
    },
    "quiz": {
      "question": "Geliştiricinin kaynak kodunu herkesin kullanımına açtığı ancak bu kodu kullanan veya geliştiren kişilerin de kendi türetilmiş projelerini zorunlu olarak açık kaynak yapmasını şart koşan lisans türü hangisidir?",
      "options": [
        { "text": "A) MIT Lisansı", "isCorrect": False },
        { "text": "B) GNU GPL (Genel Kamu Lisansı)", "isCorrect": True },
        { "text": "C) Apache 2.0 Lisansı", "isCorrect": False },
        { "text": "D) Ticari EULA Lisansı", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. GNU GPL lisansı 'Copyleft' ilkesi gereği, o koddan türetilen tüm yeni projelerin de aynı özgürlükle açık kaynak dağıtılmasını şart koşar."
    },
    "summary": {
      "keyPoints": [
        "Dijital dünyada üretilen her kod, görsel ve metin sahibinin telif hakkıyla korunur.",
        "Açık kaynak lisansları bilginin özgürce paylaşılmasını yasal güvenceye bağlar.",
        "KVKK vatandaşların dijital mahremiyetini ve kişisel verilerini koruyan temel kanundur."
      ],
      "nextWeek": "1. Dönem 1. Yazılı Sınavı Tekrarı ve Kavram Pekiştirme",
      "homework": "GitHub üzerinde beğendiğiniz bir açık kaynak projesinin LICENSE dosyasını inceleyip hangi hakları tanıdığını özetleyiniz."
    }
  },
  {
    "week": 8,
    "date": "02 - 08 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Problem Çözme ve Algoritmalar",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "1. Yazılı Sınavı Tekrarı & Pekiştirme",
    "subtitle": "Donanım, İşletim Sistemleri, Ağlar, Siber Güvenlik ve Kriptoloji Soru Çözümleri",
    "outcomeCode": "BB.9.2.1",
    "targetSkill": "Kavramsal Entegrasyon & Sınav Stratejileri",
    "curiosityQuestion": "Bugüne kadar öğrendiğimiz 7 haftalık bilişim müfredatının tüm parçaları gerçek hayatta bir siber güvenlik uzmanının gününü nasıl oluşturur?",
    "roadmap": [
      { "title": "Donanım & Mimari Tekrarı", "desc": "Von Neumann, CPU döngüsü, önbellek ve bellek türleri soru analizi." },
      { "title": "İşletim Sistemleri & Ağlar", "desc": "Linux mimarisi, IP, DNS, OSI katmanları ve router/switch rolleri." },
      { "title": "Siber Güvenlik & Kripto", "desc": "Malware türleri, oltalama belirtileri, simetrik/asimetrik şifreleme ve hash." },
      { "title": "Örnek Senaryo Soruları", "desc": "Açık uçlu MEB Maarif Modeli yazılı sınav provası ve dereceli puanlama." }
    ],
    "section1": {
      "title": "1. Dönem 1. Yazılı Sınavı Kritik Konu Özeti",
      "subtitle": "Kavram yanılgılarını giderme ve püf noktaları",
      "cards": [
        {
          "title": "Sınavda Kesin Çıkacak 3 Tema",
          "icon": "📝",
          "desc": "MEB ortak sınav standartlarına göre en çok puan getiren alanlar.",
          "items": [
            { "bold": "CPU Komut Döngüsü", "text": "Fetch (Getir), Decode (Çöz), Execute (Çalıştır) adımlarının sırası ve görevli birimler." },
            { "bold": "OSI Modeli vs TCP/IP", "text": "Paketlerin katmanlardan geçerken başlık (header) alarak kapsüllenmesi." },
            { "bold": "Simetrik vs Asimetrik Şifreleme", "text": "Hız farkı, anahtar sayısı ve hibrit kullanım mantığı." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Örnek Senaryo Soru Çözümü",
      "subtitle": "Olay tabanlı analiz sorularında tam puan alma yöntemi",
      "codeSnippet": "# Örnek Soru Analizi:\nSoru: Bir okulda 30 bilgisayar vardır. Bu bilgisayarların\nbirbirleriyle hızlı haberleşmesi ve aynı zamanda güvenle\ninternete çıkması için hangi ağ cihazları nereye konmalıdır?\n\nCevap: 30 bilgisayar yerel ağda bir Switch'e (Anahtar) bağlanır.\nSwitch ise okulun internete çıkması için bir Router'a (Yönlendirici)\nve güvenlik duvarına (Firewall) bağlanmalıdır.",
      "codeTitle": "sinav_senaryo.txt",
      "codeLang": "Text",
      "cards": [
        { "badge": "Puanlama Kriteri", "title": "Açık Uçlu Cevaplama", "desc": "Sadece cihaz adını yazmak yetmez; neden o cihazın seçildiği teknik terimlerle açıklanmalıdır.", "items": [{ "bold": "Anahtar Kelimeler", "text": "MAC adresi, IP adresi, LAN, WAN, Yönlendirme terimlerini mutlaka kullanın." }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahtada İnteraktif Soru Bankası Çözümü",
      "subtitle": "Öğrencilerin tahtaya kalkarak çoktan seçmeli ve açık uçlu soruları birlikte çözmesi",
      "steps": [
        { "title": "1. Soru Dağılımını İncele", "desc": "1. Dönem 1. Yazılı sınavı konu ağırlıklarını tahtaya yansıtın." },
        { "title": "2. Senaryo Analizi Yap", "desc": "Örnek bir siber saldırı vakasında hangi güvenlik ilkesinin ihlal edildiğini tartışın." },
        { "title": "3. Ağ Şeması Çiz", "desc": "Tahtada bir istemcinin DNS sunucudan web sunucuya kadar giden rotasını çizin." },
        { "title": "4. Hızlı Soru-Cevap", "desc": "Öğrencilerin kavram kartlarıyla birbirini test etmesini sağlayın." }
      ],
      "criteria": [
        "Bilişim kavramlarını ezberlemeden mantıksal bağıntısıyla açıklayabilme",
        "Sorulardaki çeldirici şıkları teknik gerekçelerle eleyebilme",
        "Yazılı sınavda zaman yönetimini doğru kurgulama"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Başarı Taktikleri ve İpuçları",
      "safetyRules": [
        { "bold": "Soruyu Sonuna Kadar Oku", "text": "'Değildir', 'kullanılamaz', 'en az' gibi olumsuz ve sınırlayıcı ifadelere dikkat edin." },
        { "bold": "Kavramları Karıştırmayın", "text": "Hub ile Switch'i, Simetrik ile Asimetrik şifrelemeyi, RAM ile ROM'u net ayırt edin." },
        { "bold": "Görsel ve Şemaları Kullanın", "text": "Açık uçlu sorularda şema çizmek cevabınızı çok daha ikna edici kılar." }
      ],
      "myths": [
        { "wrong": "Yazılı sınavlarda uzun yazmak her zaman yüksek puan getirir.", "correct": "Öğretmenler uzun paragraflardan ziyade doğru teknik kavramların ve gerekçelerin varlığına puan verir." },
        { "wrong": "Bilişim dersi sınavı sadece teoridir, pratik mantık içermez.", "correct": "MEB Maarif Modeli problem çözme ve senaryo temelli akıl yürütmeyi ölçer." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
      "options": [
        { "text": "A) DNS -> Alan adını IP adresine dönüştürür", "isCorrect": False },
        { "text": "B) Switch -> Yerel ağda MAC adresleriyle paket yönlendirir", "isCorrect": False },
        { "text": "C) SHA-256 -> Simetrik bir şifre çözme algoritmasıdır", "isCorrect": True },
        { "text": "D) ALU -> Aritmetik ve mantıksal hesaplamaları yapar", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. SHA-256 bir şifreleme veya şifre çözme algoritması değil, tek yönlü kriptografik bir HASH (özetleme) fonksiyonudur."
    },
    "summary": {
      "keyPoints": [
        "1. Ünitede donanımdan ağlara, siber güvenlikten hukuka kadar bilişimin temellerini tamamladık.",
        "Sınavda sistemli düşünme ve teknik kavram hakimiyeti başarıyı getirir.",
        "Haftaya algoritmik düşünme ve problem çözme dünyasına adım atıyoruz."
      ],
      "nextWeek": "Problem Çözme Stratejileri, Hesaplamalı Düşünme ve Algoritmaya Giriş",
      "homework": "1. Ünite özet kavram haritanızı A4 kağıdına çıkarıp sınav öncesi son tekrarlarınızı tamamlayınız."
    }
  },
  {
    "week": 9,
    "date": "09 - 15 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Problem Çözme ve Algoritmalar",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Hesaplamalı Düşünme & Problem Çözme",
    "subtitle": "Ayrıştırma (Decomposition), Örüntü Tanıma, Soyutlama ve Algoritmik Çıkarım",
    "outcomeCode": "BB.9.2.2",
    "targetSkill": "Hesaplamalı Düşünme (Computational Thinking)",
    "curiosityQuestion": "Bir insan satrançta sadece birkaç hamle sonrasını hesaplayabilirken, yapay zekâ saniyede 200 milyon olasılığı nasıl eler?",
    "roadmap": [
      { "title": "Hesaplamalı Düşünme Nedir?", "desc": "Problemleri bir bilgisayarın çözebileceği adımlara dönüştürme yetisi." },
      { "title": "Ayrıştırma (Decomposition)", "desc": "Büyük ve karmaşık bir problemi yönetilebilir küçük alt parçalara bölme." },
      { "title": "Örüntü Tanıma (Pattern Recognition)", "desc": "Geçmiş deneyimlerle benzerlikleri ve yinelenen kalıpları tespit etme." },
      { "title": "Soyutlama (Abstraction)", "desc": "Gereksiz detayları ayıklayıp sadece can alıcı ana özelliklere odaklanma." }
    ],
    "section1": {
      "title": "Hesaplamalı Düşünmenin Dört Temel Sütunu",
      "subtitle": "Yazılım mühendislerinin zihinsel alet çantası",
      "cards": [
        {
          "title": "Dört Kritik Aşama",
          "icon": "🧩",
          "desc": "Kod yazmadan önce zihinde kurulan sistematik mimari.",
          "items": [
            { "bold": "1. Ayrıştırma", "text": "Örn: Bir oyun yaparken harita, karakter, fizik motoru ve skor tabelasını ayrı tasarlamak." },
            { "bold": "2. Örüntü Tanıma", "text": "Daha önce çözülmüş benzer problemlerin mantığını yeni duruma uyarlamak." },
            { "bold": "3. Soyutlama", "text": "Bir haritada binaların rengini değil, yolların bağlantısını göstermek." },
            { "bold": "4. Algoritma Tasarımı", "text": "Problemi adım adım çözen sonlu ve kesin yönergeler dizisi oluşturmak." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Gerçek Hayat Problemlerini Ayrıştırma Örneği",
      "subtitle": "Akıllı Şehir Trafik Yönetim Sistemi",
      "codeSnippet": "# Problem: Şehir Trafiğini Optimize Etme\n1. Ayrıştırma: Kavşaklar, Sensörler, Işıklar, Toplu Taşıma\n2. Örüntü: Sabah 08:00 ve akşam 18:00'de trafik yoğunlaşıyor.\n3. Soyutlama: Araçların markası önemsiz, sadece araç sayısı kritik.\n4. Algoritma: Eğer bekleme süresi > 90 saniye ise yeşil ışığı 20 sn uzat.",
      "codeTitle": "hesaplamali_cozum.txt",
      "codeLang": "Text",
      "cards": [
        { "badge": "Algoritmik Zihin", "title": "Hata Bulma (Debugging)", "desc": "Problemi parçalara böldüğünüzde nerede hata olduğunu bulmak dakikalar sürer.", "items": [{ "bold": "Böl ve Yönet (Divide & Conquer)", "text": "Büyük sorunlar parçalanarak çözülür." }] }
      ]
    },
    "workshop": {
      "title": "Vaka Çalışması: Okul Kantini Otomasyonunu Ayrıştırma",
      "subtitle": "Gruplar halinde okul kantinindeki sipariş, stok ve ödeme sürecini 4 sütunla modelleme",
      "steps": [
        { "title": "1. Problemi Parçala", "desc": "Kantin sürecini 'Stok Takibi', 'Sipariş Alma', 'Ödeme' ve 'Fiş Kesme' olarak 4 alt gruba ayırın." },
        { "title": "2. Örüntüleri Belirle", "desc": "Teneffüs zili çaldığında hangi ürünlerin daha çok talep gördüğünü analiz edin." },
        { "title": "3. Soyutlama Yap", "desc": "Sistem için gereksiz olan bilgileri (öğrencinin ayakkabı numarası vb.) eleyin." },
        { "title": "4. Algoritmik Adımları Yaz", "desc": "Bir tost siparişi verildiğinde sistemin atacağı 5 adımı sıralayın." }
      ],
      "criteria": [
        "Karmaşık bir iş sürecini bağımsız alt modüllere bölebilme",
        "Gereksiz ayrıntıları eleyip doğru soyutlama düzeyini belirleme",
        "Takım çalışmasında düşüncelerini yapılandırılmış ifade etme"
      ]
    },
    "tips": {
      "safetyTitle": "Problem Çözmede Yapılan Tipik Hatalar",
      "safetyRules": [
        { "bold": "Hemen Kod Yazmaya Başlamayın", "text": "Planı ve algoritması kağıt üzerinde netleşmemiş kodu bilgisayarda yazmak saatler kaybettirir." },
        { "bold": "Aşırı Detayda Boğulmayın", "text": "Soyutlama yapmayı unutursanız önemsiz ayrıntılar asıl hedefi gölgeler." },
        { "bold": "Uç Durumları (Edge Cases) Unutmayın", "text": "Sayı sıfıra bölünürse veya stok biterse ne olacağını baştan düşünün." }
      ],
      "myths": [
        { "wrong": "Hesaplamalı düşünme sadece bilgisayar programcılarının işine yarayan bir beceridir.", "correct": "Doktorlar teşhis koyarken, mimarlar bina çizerken, avukatlar dava savunurken hesaplamalı düşünür." },
        { "wrong": "Zeki insanlar problemleri parçalamadan tek seferde çözer.", "correct": "Tam aksine, en büyük bilim insanları ve mühendisler en karmaşık problemleri en küçük parçalara bölenlerdir." }
      ]
    },
    "quiz": {
      "question": "Bir harita uygulamasının binaların rengini, ağaçların türünü veya sokaktaki kuşları göstermeyip sadece yolları ve mesafeleri göstermesi, hesaplamalı düşünmenin hangi temel ilkesine örnektir?",
      "options": [
        { "text": "A) Ayrıştırma (Decomposition)", "isCorrect": False },
        { "text": "B) Örüntü Tanıma (Pattern Recognition)", "isCorrect": False },
        { "text": "C) Soyutlama (Abstraction)", "isCorrect": True },
        { "text": "D) Hata Ayıklama (Debugging)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. Soyutlama (Abstraction), problem çözümü için gereksiz detayları gizleyip yalnızca amaca hizmet eden kritik bilgileri öne çıkarma sürecidir."
    },
    "summary": {
      "keyPoints": [
        "Hesaplamalı düşünme insan zihninin bilgisayar mantığıyla problem çözme sanatıdır.",
        "Ayrıştırma, örüntü tanıma, soyutlama ve algoritma bu sanatın dört ana sütunudur.",
        "Kod yazmak sadece bir araçtır; asıl değer algoritmik düşünce üretmektedir."
      ],
      "nextWeek": "1. Dönem Ara Tatili: Algoritma, Kripto ve Mantık Oyunları Atölyesi",
      "homework": "Günlük bir rutininizi (örneğin sabah okula hazırlanma sürecinizi) 4 aşamalı hesaplamalı düşünme modeliyle defterinize yazınız."
    }
  },
  {
    "week": 10,
    "date": "16 - 22 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Problem Çözme ve Algoritmalar",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Ara Tatil: Algoritma & Mantık Atölyesi",
    "subtitle": "Hanoi Kuleleri, Kurt-Kuzu-Ot Problemi, Labirent Çözümleri ve Mantık Bulmacaları",
    "outcomeCode": "BB.9.2.3",
    "targetSkill": "Algoritmik Zeka & Zihinsel Simülasyon",
    "curiosityQuestion": "3 diskli Hanoi Kuleleri oyununu en az kaç hamlede çözebilirsiniz ve disk sayısı 64'e çıkarsa bu kaç yıl sürer?",
    "roadmap": [
      { "title": "Klasik Algoritma Problemleri", "desc": "Kurt, Kuzu ve Ot kayık problemi; Nehir geçme stratejileri." },
      { "title": "Hanoi Kuleleri & Özyineleme", "desc": "2^n - 1 matematiksel formülü ve özyinelemeli (recursive) çözüm mantığı." },
      { "title": "Labirent Algoritmaları", "desc": "Sağ El Kuralı (Wall Follower), derinlik öncelikli (DFS) ve genişlik öncelikli arama." },
      { "title": "Sıralama Oyunları", "desc": "Terazi ile en az tartımda sahte parayı bulma algoritmaları." }
    ],
    "section1": {
      "title": "Klasik Mantık Problemleri ve Bilgisayar Bilimi Çözümleri",
      "subtitle": "Durum uzayı ve kısıtlamalar altında en uygun yolu bulma",
      "cards": [
        {
          "title": "Kurt, Kuzu ve Ot Problemi",
          "icon": "🧠",
          "desc": "Kayıkçı yanına sadece birini alabilirken avcı ile avı yalnız bırakmama algoritması.",
          "items": [
            { "bold": "Kısıt 1", "text": "Kurt ile kuzu yalnız kalırsa kurt kuzuyu yer." },
            { "bold": "Kısıt 2", "text": "Kuzu ile ot yalnız kalırsa kuzu otu yer." },
            { "bold": "Çözüm Adımı", "text": "Önce kuzu karşıya geçirilir, sonra kurt götürülüp dönüşte kuzu geri getirilir!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "Hanoi Kuleleri ve 2^n - 1 Formülü",
      "subtitle": "Üstel karmaşıklığın zihinsel kavranışı",
      "codeSnippet": "# Hanoi Kuleleri Çözüm Sayısı\ndef hanoi_hamle(n):\n    return (2 ** n) - 1\n\nprint(\"3 Disk:\", hanoi_hamle(3), \"hamle\")   # 7\nprint(\"5 Disk:\", hanoi_hamle(5), \"hamle\")   # 31\nprint(\"64 Disk:\", hanoi_hamle(64), \"hamle\") # 18.4 Kentilyon hamle!",
      "codeTitle": "hanoi_hesap.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Algoritma Formülü", "title": "Matematiksel Zarafet", "desc": "Her eklenen disk, toplam çözüm süresini iki katına çıkarır.", "items": [{ "bold": "64 Disk Efsanesi", "text": "Saniyede 1 hamle yapılsa bile evrenin ömründen daha uzun (584 milyar yıl) sürer." }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahtada Hanoi Kuleleri Turnuvası",
      "subtitle": "Öğrencilerin 3 ve 4 diskli Hanoi Kuleleri simülasyonunu en az hamlede tamamlama yarışı",
      "steps": [
        { "title": "1. 3 Diskli Çözüm", "desc": "Diskleri kurallara uygun olarak 7 hamlede hedef çubuğa taşıyın." },
        { "title": "2. Kural Hatırlatma", "desc": "Büyük disk asla küçük diskin üzerine konulamaz." },
        { "title": "3. 4 Diske Geç", "desc": "15 hamlede hatasız aktarımı tamamlayarak örüntüyü keşfedin." },
        { "title": "4. Stratejiyi Yaz", "desc": "Tek sayılı ve çift sayılı disklerde ilk diskin nereye gitmesi gerektiğini formüle edin." }
      ],
      "criteria": [
        "Problemdeki kısıtları ihlal etmeden en kısa yolu bulma",
        "Adımların nedenini mantıksal önermelerle savunabilme",
        "Özyinelemeli (kendi kendini çağıran) adımları sezgisel kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Zeka Oyunları ve Algoritmik Esneklik",
      "safetyRules": [
        { "bold": "Çıkmaza Girdiğinde Geri Adım At (Backtracking)", "text": "Algoritmalar hata yaptığında bir önceki güvenli duruma dönüp farklı yolu dener." },
        { "bold": "Kural Sınırlarını Test Edin", "text": "Soruda açıkça yasaklanmamış alternatifleri yaratıcı şekilde düşünün." },
        { "bold": "Ezberlemeyin, Mantığını Kurun", "text": "Her hamlenin bir sonraki 2 hamleye zemin hazırladığını unutmayın." }
      ],
      "myths": [
        { "wrong": "Labirentlerde sol veya sağ duvarı takip etmek (Sağ El Kuralı) her labirentte mutlaka çıkışı bulur.", "correct": "Eğer çıkış veya hedef labirentin ortasında ada şeklindeyse duvar takip kuralı sonsuz döngüye girebilir." },
        { "wrong": "Hanoi kuleleri sadece bir çocuk oyunudur.", "correct": "Bilgisayar biliminde özyineleme (recursion) ve çağrı yığını (call stack) mimarisinin en temel öğretim aracıdır." }
      ]
    },
    "quiz": {
      "question": "3 adet diski olan bir Hanoi Kuleleri oyununu kurallara uygun olarak başka bir çubuğa aktarmak için gereken minimum hamle sayısı kaçtır?",
      "options": [
        { "text": "A) 5", "isCorrect": False },
        { "text": "B) 6", "isCorrect": False },
        { "text": "C) 7", "isCorrect": True },
        { "text": "D) 9", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. Hanoi kulelerinde minimum hamle sayısı 2^n - 1 formülüyle hesaplanır. 3 disk için 2^3 - 1 = 8 - 1 = 7 hamledir."
    },
    "summary": {
      "keyPoints": [
        "Mantık bulmacaları bilgisayar algoritmalarının mikro simülasyonlarıdır.",
        "Özyineleme, karmaşık problemleri kendisinin daha küçük kopyalarına dönüştürür.",
        "Geri izleme (Backtracking) yapay zekânın karar ağaçlarında en temel arama yöntemidir."
      ],
      "nextWeek": "Algoritma Tasarımı, Sözde Kod (Pseudocode) ve Temel Mantık İlkeleri",
      "homework": "Ailenize Kurt-Kuzu-Ot problemini sorup adım adım nasıl çözüldüğünü bir algoritma gibi anlatınız."
    }
  }
]

print("9. Sınıf Müfredat Verisi 1. Kısım (Hafta 1-10) Hazırlandı.")
