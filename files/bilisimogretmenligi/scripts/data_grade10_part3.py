#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curriculum Data for 10. Sınıf Bilgisayar Bilimi (Kur 2) - Part 3 (Hafta 20 - 31)
MEB 2026-2027 Maarif Modeli
Öğretmen: Vahit Keskin
"""

WEEKS_20_31 = [
  # 20. Hafta (Sömestr 1)
  {
    "week": 20,
    "date": "25 - 31 Ocak",
    "hours": "Sömestr Kış Kampı",
    "unit": "Sömestr: İleri Robotik & Nesnelerin İnterneti (IoT)",
    "unitBadge": "Sömestr 1",
    "unitTheme": "unite-somestr",
    "title": "İleri Düzey Robotik & IoT Kış Kampı Bülteni",
    "subtitle": "ESP32 Mikrodenetleyicisi, Dahili Wi-Fi & Bluetooth, MQTT Protokolü ve Akıllı Sera Otomasyonu Mimarisi",
    "outcomeCode": "BB.10.2.8",
    "targetSkill": "IoT Sistem Mimarisi & Kablosuz Ağ Protokolleri",
    "curiosityQuestion": "Bir çiftçi tarlasından 500 km uzaktayken toprağın nemini telefonundan görüp tek tuşla su vanalarını nasıl açabilir?",
    "roadmap": [
      { "title": "ESP32 Dünyası", "desc": "Çift çekirdekli 240MHz işlemci, dahili Wi-Fi ve Bluetooth ile Arduino Uno'nun ötesine geçiş." },
      { "title": "IoT Haberleşme Protokolleri", "desc": "HTTP yerine hafif ve enerji tasarruflu MQTT (Publish/Subscribe) mesajlaşma mimarisi." },
      { "title": "Bulut Pano (Dashboard)", "desc": "Blynk, Adafruit IO veya ThingsBoard platformlarında canlı veri grafikleri çizdirme." },
      { "title": "Akıllı Tarım ve Sera Projesi", "desc": "Toprak nemi düşünce röleyle 12V su pompasını tetikleyen otonom döngü." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"/>
      
      <!-- ESP32 Kartı -->
      <g transform="translate(30, 40)">
        <rect width="130" height="90" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="65" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">ESP32 NodeMCU</text>
        <rect x="25" y="38" width="80" height="35" rx="4" fill="#0f172a"/>
        <text x="65" y="58" text-anchor="middle" font-size="9" fill="#00f0ff">Wi-Fi + BLE</text>
      </g>
      
      <!-- MQTT Broker Bulutu -->
      <g transform="translate(160, 95)">
        <ellipse cx="50" cy="40" rx="45" ry="30" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
        <text x="50" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="#c084fc">MQTT Broker</text>
        <text x="50" y="52" text-anchor="middle" font-size="8" fill="#cbd5e1">topic: sera/nem</text>
      </g>
      
      <!-- Mobil Pano -->
      <g transform="translate(260, 40)">
        <rect width="130" height="90" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="65" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">Mobil Dashboard</text>
        <rect x="25" y="38" width="80" height="35" rx="4" fill="#0f172a"/>
        <text x="65" y="58" text-anchor="middle" font-size="9" fill="#34d399">Nem: %42 (Canlı)</text>
      </g>
      
      <!-- Bağlantı Çizgileri -->
      <path d="M 160 85 Q 180 115 160 125" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3"/>
      <path d="M 260 125 Q 240 115 260 85" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3"/>
      <text x="135" y="110" font-size="8" fill="#34d399">PUB</text>
      <text x="270" y="110" font-size="8" fill="#fbbf24">SUB</text>
      
      <rect x="30" y="180" width="360" height="85" rx="8" fill="#162038" stroke="#00f0ff" stroke-width="1.5"/>
      <text x="210" y="205" text-anchor="middle" font-size="11" font-weight="bold" fill="#00f0ff">Sömestr Kış Mücadelesi: Sıfır Atık Akıllı Ev</text>
      <text x="210" y="225" text-anchor="middle" font-size="9" fill="#cbd5e1">Tatil boyunca açık kaynak IoT kütüphaneleriyle evinizdeki enerji tüketimini izleyin.</text>
      <text x="210" y="245" text-anchor="middle" font-size="9" fill="#94a3b8">Bilişim kış kampında üreten nesil olmak!</text>
    </svg>''',
    "section1": {
      "title": "ESP32 ve MQTT Protokolü Devrimi",
      "subtitle": "Nesnelerin internetinde düşük güç ve anlık veri iletimi",
      "cards": [
        {
          "title": "Publish / Subscribe (Yayınla / Abone Ol) Modeli",
          "icon": "🌐",
          "desc": "Cihazlar doğrudan birbirine bağlanmaz; merkezi bir MQTT Broker (Örn: Mosquitto) üzerinden haberleşir.",
          "items": [
            { "bold": "Yayıncı (Publisher)", "text": "Sensör düğümü okuduğu nem verisini `ev/salon/sicaklik` başlığına (topic) fırlatır." },
            { "bold": "Abone (Subscriber)", "text": "Klima veya telefon uygulaması bu başlığı dinler; veri geldiği milisaniyede haberdar olur." },
            { "bold": "Bant Genişliği Tasarrufu", "text": "HTTP gibi devasa başlık paketleri göndermez; sadece 2 baytlık başlıkla minimum pil tüketir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "ESP32 ile Wi-Fi'a Bağlanma Kodu",
      "subtitle": "Mikrodenetleyiciyi evdeki modeme bağlayan C++ çekirdeği",
      "codeSnippet": "#include <WiFi.h>\n\nconst char* ssid = \"Okul_Laboratuvar\";\nconst char* password = \"Bilisim2026!\";\n\nvoid setup() {\n  Serial.begin(115200);\n  Serial.print(\"Wi-Fi Agina Baglaniliyor: \");\n  Serial.println(ssid);\n  \n  WiFi.begin(ssid, password);\n  \n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  \n  Serial.println(\"\");\n  Serial.println(\"🎉 Baglanti Basarili!\");\n  Serial.print(\"ESP32 IP Adresi: \");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {\n  // IoT Telemetri döngüsü\n}",
      "codeTitle": "esp32_wifi_connect.ino",
      "codeLang": "C++ (ESP32)",
      "cards": [
        { "badge": "ESP32 Gücü", "title": "Baud Rate Farkı: 115200", "desc": "ESP32 hızlı bir çip olduğu için seri haberleşme hızı Arduino Uno'nun (9600) aksine 115200 bps ayarlanır.", "items": [{ "bold": "Yerel IP Adresi", "text": "Bağlandıktan sonra modemden aldığı 192.168.1.X adresinden mini web sunucu olarak hizmet verebilir." }] }
      ]
    },
    "workshop": {
      "title": "Bulut Kontrollü Akıllı Oda Lambası Projesi",
      "subtitle": "ESP32 veya Tinkercad üzerinde internet üzerinden gönderilen sinyalle röleyi açıp kapatma",
      "steps": [
        { "title": "1. ESP32'yi Wi-Fi'a Bağla", "desc": "Mobil erişim noktası (Hotspot) açıp ESP32 koduna SSID ve şifrenizi girin." },
        { "title": "2. Web Sunucusu Başlat", "desc": "`WiFiServer` sınıfıyla 80 portunda dinleme başlatın." },
        { "title": "3. HTML Butonları Ekle", "desc": "Tarayıcıdan IP adresine girildiğinde 'AÇ' ve 'KAPAT' linkleri sunun." },
        { "title": "4. Röleyi Tetikle", "desc": "İstek gelince Pin 2'deki dahili mavi LED'i ve röleyi açıp kapatın." }
      ],
      "criteria": [
        "Kablosuz ağ bağlantı durumlarını (WL_CONNECTED) doğru kontrol etme",
        "İstemci HTTP GET taleplerini parse ederek komutu ayıklama",
        "Statik IP ve DHCP kavramlarını açıklayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "IoT Cihazlarında Siber Güvenlik",
      "safetyRules": [
        { "bold": "Wi-Fi Şifrelerini Asla GitHub'a Yüklemeyin", "text": "Kodunuzdaki modem şifrelerini ayrı bir `secrets.h` dosyasına koyup `.gitignore` içine ekleyin." },
        { "bold": "MQTT Broker Kimlik Doğrulaması", "text": "Şifresiz açık broker kullanırsanız herkes tarlanızdaki vanaları uzaktan açıp kapatabilir; kullanıcı adı/şifre ve TLS şifrelemesi kullanın." },
        { "bold": "OTA (Over-The-Air) Güncelleme", "text": "Tarlanın ortasındaki cihaza kablo takamazsınız; Wi-Fi üzerinden kablosuz firmware güncelleme açıklarını şifreleyin." }
      ],
      "myths": [
        { "wrong": "Her IoT cihazı için internete açık sabit bir IP (Static IP) satın almak gerekir.", "correct": "Hayır! MQTT ve bulut sunucuları sayesinde cihaz dışarıya bağlanır, dışarıdan cihaza doğrudan port açmaya gerek kalmaz." },
        { "wrong": "Arduino Uno internete tek başına bağlanabilir.", "correct": "Arduino Uno üzerinde ağ donanımı yoktur; ESP8266 veya Ethernet kalkanı (shield) gerektirir. ESP32 ise fabrikadan Wi-Fi'lıdır." }
      ]
    },
    "quiz": {
      "question": "Nesnelerin İnterneti (IoT) projelerinde HTTP yerine hafifliği ve düşük bant genişliği tüketimi nedeniyle en çok tercih edilen mesajlaşma protokolü hangisidir?",
      "options": [
        { "text": "A) FTP", "isCorrect": False },
        { "text": "B) MQTT", "isCorrect": True },
        { "text": "C) SMTP", "isCorrect": False },
        { "text": "D) Telnet", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. MQTT (Message Queuing Telemetry Transport), minimal başlık boyutu ve Publish/Subscribe yapısıyla IoT dünyasının standart protokolüdür."
    },
    "summary": {
      "keyPoints": [
        "ESP32 uygun fiyatı, yüksek işlem gücü ve dahili Wi-Fi/Bluetooth modülüyle modern robotik standardıdır.",
        "MQTT protokolü sensör verilerini minimum enerjiyle buluta ulaştırır.",
        "Sömestr kış kampında edindiğimiz IoT vizyonu 2. dönem projelerimizin kalbini oluşturacak."
      ],
      "nextWeek": "Sömestr 2: Full-Stack Web Geliştirme & Siber Güvenlik Kış Bülteni",
      "homework": "Evinizdeki internete bağlı cihazların (Smart TV, süpürge, tablet vb.) yerel IP adreslerini modem arayüzünden inceleyiniz."
    }
  },

  # 21. Hafta (Sömestr 2)
  {
    "week": 21,
    "date": "01 - 07 Şubat",
    "hours": "Sömestr Kış Kampı",
    "unit": "Sömestr: Full-Stack Web & Güvenli Kodlama",
    "unitBadge": "Sömestr 2",
    "unitTheme": "unite-somestr",
    "title": "Full-Stack Web & Siber Güvenlik Kış Bülteni",
    "subtitle": "Ön Yüz (Frontend) vs Arka Yüz (Backend), OWASP Top 10 Güvenlik Açıkları, SQL Injection Koruması, XSS Filtreleme ve Güvenli Parola Hashleme",
    "outcomeCode": "BB.10.3.4",
    "targetSkill": "Full-Stack Web Mimarisi & Güvenli Yazılım Geliştirme",
    "curiosityQuestion": "Bir hacker sadece bir web sitesinin arama kutusuna `' OR '1'='1` yazarak nasıl tüm kullanıcıların gizli şifrelerini ekranda listeleyebilir?",
    "roadmap": [
      { "title": "Full-Stack Mimari Nedir?", "desc": "Frontend (HTML/CSS/JS) + Backend (Python/Node) + Veritabanı (SQL) üçlüsü." },
      { "title": "OWASP Top 10 Nedir?", "desc": "Dünyanın en tehlikeli ve yaygın web güvenlik açıklarının listesi." },
      { "title": "SQL Injection (SQLi) Tehlikesi", "desc": "Kullanıcı girdisinin doğrulanmadan doğrudan SQL sorgusuna eklenmesinin felaketi." },
      { "title": "Kriptografik Parola Güvenliği", "desc": "Parolaları veritabanında açık metin değil `bcrypt` ve tuzlama (salt) ile saklama sanatı." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(239, 68, 68, 0.3)" stroke-width="2"/>
      
      <!-- Full-Stack 3 Katman -->
      <g transform="translate(30, 30)">
        <rect width="105" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="52" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">FRONTEND</text>
        <text x="52" y="50" text-anchor="middle" font-size="9" fill="#ffffff">HTML5 / CSS3</text>
        <text x="52" y="70" text-anchor="middle" font-size="9" fill="#ffffff">JavaScript</text>
        <text x="52" y="90" text-anchor="middle" font-size="8" fill="#94a3b8">Kullanıcı Ekranı</text>
      </g>
      
      <g transform="translate(155, 30)">
        <rect width="110" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="55" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#34d399">BACKEND</text>
        <text x="55" y="50" text-anchor="middle" font-size="9" fill="#ffffff">Python / Flask</text>
        <text x="55" y="70" text-anchor="middle" font-size="9" fill="#ffffff">REST API</text>
        <text x="55" y="90" text-anchor="middle" font-size="8" fill="#94a3b8">İş Mantığı &amp; Güvenlik</text>
      </g>
      
      <g transform="translate(285, 30)">
        <rect width="105" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="52" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#fbbf24">DATABASE</text>
        <text x="52" y="50" text-anchor="middle" font-size="9" fill="#ffffff">SQLite / SQL</text>
        <text x="52" y="70" text-anchor="middle" font-size="9" fill="#ffffff">Tablolar &amp; CRUD</text>
        <text x="52" y="90" text-anchor="middle" font-size="8" fill="#94a3b8">Kalıcı Depolama</text>
      </g>
      
      <!-- Güvenlik Barikatı -->
      <g transform="translate(30, 155)">
        <rect width="360" height="115" rx="8" fill="#1e1b4b" stroke="#ef4444" stroke-width="2"/>
        <text x="180" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#f87171">🛡️ OWASP Kuralı: "Kullanıcı Girdisine Asla Güvenme!"</text>
        <text x="20" y="50" font-size="9" fill="#fca5a5">❌ Yanlış: "SELECT * FROM uyeler WHERE ad = '" + input + "'"</text>
        <text x="20" y="70" font-size="9" fill="#86efac">✔️ Doğru: cursor.execute("SELECT * FROM uyeler WHERE ad = ?", (input,))</text>
        <text x="180" y="100" text-anchor="middle" font-size="9" font-weight="bold" fill="#38bdf8">Parametreli sorgular (Prepared Statements) SQLi açığını %100 yok eder.</text>
      </g>
    </svg>''',
    "section1": {
      "title": "SQL Injection Anatomisi ve Savunma",
      "subtitle": "Kötü niyetli SQL komutlarının veritabanını ele geçirme mekanizması",
      "cards": [
        {
          "title": "1=1 Hilesi Nasıl Çalışır?",
          "icon": "💥",
          "desc": "Kullanıcı adı kutusuna `admin' OR '1'='1` girildiğinde sorgu şuna dönüşür:",
          "items": [
            { "bold": "Oluşan Sorgu", "text": "`SELECT * FROM kullanicilar WHERE ad = 'admin' OR '1'='1';`" },
            { "bold": "Mantıksal Sonuç", "text": "'1'='1' ifadesi her zaman True döner; şifre kontrolü atlanır ve hacker en yetkili hesapla giriş yapar." },
            { "bold": "Tek ve Kesin Çözüm", "text": "String birleştirme (`+`) asla kullanılmaz; 'Parametreli Sorgular' (Prepared Statements) zorunludur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Güvenli Parola Saklama: Hash ve Salt",
      "subtitle": "Python hashlib / bcrypt ile şifrelerin tek yönlü dönüştürülmesi",
      "codeSnippet": "import hashlib\nimport os\n\ndef guvenli_sifrele(parola):\n    # Her kullanıcıya özel 16 baytlık rastgele tuz (Salt)\n    tuz = os.urandom(16)\n    # SHA-256 ile tuz ve parolayı harmanlayıp 100.000 tur özetle\n    anahtar = hashlib.pbkdf2_hmac('sha256', parola.encode('utf-8'), tuz, 100000)\n    return tuz + anahtar\n\ndef sifre_dogrula(girilen_parola, saklanan_veri):\n    tuz = saklanan_veri[:16]\n    gercek_anahtar = saklanan_veri[16:]\n    yeni_anahtar = hashlib.pbkdf2_hmac('sha256', girilen_parola.encode('utf-8'), tuz, 100000)\n    return yeni_anahtar == gercek_anahtar\n\n# Test\nsaklanan = guvenli_sifrele(\"super_gizli_sifre_2026\")\nprint(\"Veritabanına Yazılan Güvenli Özet:\", saklanan.hex()[:32], \"...\")\nprint(\"Doğru Şifre Testi:\", sifre_dogrula(\"super_gizli_sifre_2026\", saklanan))\nprint(\"Yanlış Şifre Testi:\", sifre_dogrula(\"yanlis_sifre\", saklanan))",
      "codeTitle": "guvenli_parola_hash.py",
      "codeLang": "Python 3",
      "cards": [
        { "badge": "Kriptoloji", "title": "Hash Geri Döndürülemez (Tek Yönlüdür)", "desc": "Veritabanı çalınsa bile hackerlar kullanıcı şifrelerini açık metin olarak göremez.", "items": [{ "bold": "Tuzlama (Salting)", "text": "Aynı şifreye sahip iki kişinin özetlerinin farklı çıkmasını sağlayarak Gökkuşağı Tablosu (Rainbow Table) saldırılarını engeller." }] }
      ]
    },
    "workshop": {
      "title": "Güvenli Form Doğrulama ve XSS Savunması",
      "subtitle": "Kullanıcının girdiği HTML etiketlerini `<script>` temizleyen (sanitize) bir Python/JS fonksiyonu yazma",
      "steps": [
        { "title": "1. Senaryoyu Kur", "desc": "Kullanıcının yorum kutusuna `<script>alert('Saldırı!')</script>` yazdığını hayal edin." },
        { "title": "2. Filtre Fonksiyonu Yaz", "desc": "`<` karakterini `&lt;`, `>` karakterini `&gt;` ile değiştiren bir escaping algoritması kurun." },
        { "title": "3. Çıktıyı İncele", "desc": "Sayfada zararlı scriptin çalışmadığını, sadece ekranda metin olarak göründüğünü doğrulayın." },
        { "title": "4. Siber Güvenlik Analizi", "desc": "Arkadaşlarınızla web uygulamalarında XSS ve SQLi risklerini tartışın." }
      ],
      "criteria": [
        "XSS (Cross-Site Scripting) ve SQL Injection arasındaki farkı kavrama",
        "Kullanıcı girdisini ekrana basmadan önce HTML entity formatına çevirme",
        "Asla şifreleri açık metin saklamama bilincini kazanma"
      ]
    },
    "tips": {
      "safetyTitle": "Geliştirici Güvenlik İlkeleri",
      "safetyRules": [
        { "bold": "Kullanıcı Girdisine ASLA Güvenmeyin (Sanitize All Inputs)", "text": "Formlardan gelen her metin potansiyel bir saldırı vektörü olarak kabul edilmelidir." },
        { "bold": "Şifreleri Asla MD5 veya SHA1 ile Saklamayın", "text": "MD5 ve SHA1 algoritmaları kırılmıştır; saniyede milyarlarca deneme yapılabilir. Bcrypt, Argon2 veya PBKDF2 kullanın." },
        { "bold": "Hata Mesajlarında Veritabanı Detayı Vermeyin", "text": "Kullanıcıya 'SQL Syntax Error at line 4' gibi detaylar göstermek hacker'a veritabanı şemasını hediye etmektir." }
      ],
      "myths": [
        { "wrong": "Frontend tarafında (HTML'de) 'required' veya 'maxlength' koyarsak sitemiz güvendedir.", "correct": "Hackerlar tarayıcıyı devreden çıkarıp doğrudan curl veya Postman ile sunucuya istek atabilir; asıl güvenlik backenddedir." },
        { "wrong": "Güçlü şifre hashlemek şifreyi geri çözülebilir kılar.", "correct": "Hashleme şifreleme (encryption) değildir; tek yönlü matematiksel özet çıkarmadır, geri döndürülemez." }
      ]
    },
    "quiz": {
      "question": "Bir web uygulamasında SQL Injection (SQLi) güvenlik açığını tamamen ve kökten engelleyen en güvenli yöntem aşağıdakilerden hangisidir?",
      "options": [
        { "text": "A) SQL sorgularını Python'da `+` ile birleştirmek", "isCorrect": False },
        { "text": "B) Parametreli Sorgular (Prepared Statements / Parametric Queries) kullanmak", "isCorrect": True },
        { "text": "C) Kullanıcı adlarını sadece büyük harfle kaydetmek", "isCorrect": False },
        { "text": "D) Veritabanı şifresini 4 haneli yapmak", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Parametreli sorgularda veritabanı motoru girdiyi asla çalıştırılabilir SQL komutu olarak yorumlamaz; sadece veri (literal) olarak işler."
    },
    "summary": {
      "keyPoints": [
        "Full-Stack geliştirici sistemin tüm katmanlarını (Frontend, Backend, Database) bir bütün olarak görür.",
        "Güvenlik sonradan eklenen bir yama değil, kod yazılırken uygulanan bir mimari disiplindir.",
        "Sömestr tatilini geride bıraktık; 2. dönemde Veritabanları, SQL ve Yapay Zekâ bizi bekliyor!"
      ],
      "nextWeek": "Web'de Asenkron İletişim: REST API, JSON & fetch()",
      "homework": "OWASP Vakfının web sitesini (owasp.org) ziyaret ederek ilk 3 güvenlik açığının tanımını defterinize özetleyiniz."
    }
  },

  # 22. Hafta
  {
    "week": 22,
    "date": "08 - 14 Şubat",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Web Teknolojileri & Web Tabanlı Programlama",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "Web'de Asenkron İletişim: REST API & fetch()",
    "subtitle": "Asenkron Programlama Mantığı, HTTP Metotları (GET, POST, PUT, DELETE), JSON Formatı, JavaScript fetch() API ve async / await Sözdizimi",
    "outcomeCode": "BB.10.3.5",
    "targetSkill": "Asenkron Ağ İletişimi & Harici REST API Tüketimi",
    "curiosityQuestion": "Instagram veya X'te sayfayı aşağı kaydırdığınızda yeni gönderiler sayfa hiç baştan yüklenmeden nasıl anında belirir?",
    "roadmap": [
      { "title": "Senkron vs Asenkron", "desc": "Sayfanın donmasını engelleyip veriyi arka planda sessizce çekme felsefesi." },
      { "title": "REST API Mimarisi", "desc": "Sunucu ile istemcinin JSON dilinde konuştuğu standart köprü uç noktaları (Endpoints)." },
      { "title": "fetch() ve Promise Mantığı", "desc": "Gelecekte tamamlanacak olan ağ isteğini `then()` veya `await` ile bekleme." },
      { "title": "Canlı Hava Durumu & Döviz Projesi", "desc": "İnternetteki açık bir API'den gerçek zamanlı veriyi çekip sayfaya basma." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
      
      <!-- Tarayıcı Uygulaması -->
      <g transform="translate(30, 40)">
        <rect width="130" height="90" rx="8" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
        <text x="65" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#00f0ff">Web Sayfası (JS)</text>
        <text x="65" y="55" text-anchor="middle" font-size="9" font-family="monospace" fill="#ffffff">fetch(api_url)</text>
        <text x="65" y="75" text-anchor="middle" font-size="8" fill="#94a3b8">Sayfa Yenilenmez!</text>
      </g>
      
      <!-- Asenkron Ağ Köprüsü -->
      <path d="M 165 70 L 245 70" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3"/>
      <polygon points="245,70 235,65 235,75" fill="#f59e0b"/>
      <text x="205" y="60" text-anchor="middle" font-size="8" fill="#fbbf24">HTTP GET (JSON)</text>
      
      <path d="M 245 100 L 165 100" stroke="#10b981" stroke-width="2"/>
      <polygon points="165,100 175,95 175,105" fill="#10b981"/>
      <text x="205" y="115" text-anchor="middle" font-size="8" fill="#34d399">JSON Response</text>

      <!-- REST API Sunucusu -->
      <g transform="translate(250, 40)">
        <rect width="140" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="70" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">Hava Durumu API</text>
        <text x="70" y="50" text-anchor="middle" font-size="8" font-family="monospace" fill="#cbd5e1">/api/hava?sehir=Ankara</text>
        <text x="70" y="70" text-anchor="middle" font-size="9" fill="#94a3b8">Bulut Sunucu</text>
      </g>
      
      <!-- JSON Paket Görseli -->
      <g transform="translate(30, 160)">
        <rect width="360" height="110" rx="8" fill="#162038" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="35" y="28" font-family="monospace" font-size="11" fill="#38bdf8">{</text>
        <text x="50" y="50" font-family="monospace" font-size="10" fill="#fbbf24">  "sehir": "Ankara", "derece": 18.2, "durum": "Gunesli",</text>
        <text x="50" y="72" font-family="monospace" font-size="10" fill="#a7f3d0">  "ruzgar_hizi": 12.5, "nem": 45</text>
        <text x="35" y="94" font-family="monospace" font-size="11" fill="#38bdf8">}</text>
      </g>
    </svg>''',
    "section1": {
      "title": "REST API ve JSON Formatının Evrenselliği",
      "subtitle": "Farklı programlama dillerinin ortak iletişim standardı",
      "cards": [
        {
          "title": "CRUD ve HTTP Metotları Eşleşmesi",
          "icon": "🔄",
          "desc": "REST mimarisinde her eylem standart bir HTTP fiiliyle ifade edilir:",
          "items": [
            { "bold": "GET (Oku)", "text": "Sunucudan veri talep eder (Örn: ürün listesi çekme)." },
            { "bold": "POST (Oluştur)", "text": "Sunucuya yeni kayıt ekler (Örn: yeni üye kaydı)." },
            { "bold": "PUT (Güncelle)", "text": "Mevcut bir kaydın bilgilerini bütünüyle günceller." },
            { "bold": "DELETE (Sil)", "text": "Belirtilen kaydı sistemden kalıcı olarak kaldırır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "async / await ile Canlı Veri Çekme Kodu",
      "subtitle": "Modern JavaScript ile harici API'den veri alıp ekrana basma",
      "codeSnippet": "async function havaDurumuGetir(sehir) {\n  const kart = document.querySelector('#havaKarti');\n  kart.textContent = \"Yükleniyor...\";\n  \n  try {\n    const url = `https://api.ornek.com/v1/hava?sehir=${sehir}`;\n    const yanit = await fetch(url);\n    \n    if (!yanit.ok) {\n      throw new Error(`HTTP Hatası: ${yanit.status}`);\n    }\n    \n    const veri = await yanit.json();\n    \n    kart.innerHTML = `\n      <h3>${veri.sehir}</h3>\n      <p style=\"font-size: 2rem;\">${veri.derece} °C</p>\n      <p>Durum: ${veri.durum}</p>\n    `;\n  } catch (hata) {\n    kart.innerHTML = `<span style=\"color: #ef4444;\">Veri alınamadı: ${hata.message}</span>`;\n  }\n}\n\n// Butona tıklanınca Ankara'yı getir\ndocument.querySelector('#btnSorgula').addEventListener('click', () => {\n  havaDurumuGetir('Ankara');\n});",
      "codeTitle": "api_fetch.js",
      "codeLang": "JavaScript (ES6)",
      "cards": [
        { "badge": "Modern Sözdizimi", "title": "Neden async / await?", "desc": "Eski karmaşık callback zincirleri yerine, asenkron kodu sanki düz senkron kod gibi alt alta tertemiz yazmayı sağlar.", "items": [{ "bold": "try / catch", "text": "İnternet koptuğunda veya sunucu çöktüğünde uygulamanın kilitlenmesini önler." }] }
      ]
    },
    "workshop": {
      "title": "Canlı Döviz / Altın Takip Widget'ı Geliştirme",
      "subtitle": "Açık bir finans API'sinden güncel USD/TRY kurunu çekip 10 saniyede bir sayfayı yenilemeden güncelleyen mini uygulama",
      "steps": [
        { "title": "1. Arayüzü Kur", "desc": "HTML'de kur değerini gösterecek şık bir kart ve 'Yenile' butonu oluşturun." },
        { "title": "2. fetch() Fonksiyonu Yaz", "desc": "API uç noktasına `fetch()` isteği atıp gelen JSON'ı console.log ile inceleyin." },
        { "title": "3. Ekrana Bas", "desc": "`document.querySelector('#kur').textContent = veri.oran;` ile sayıyı güncelleyin." },
        { "title": "4. Otomatik Zamanlayıcı", "desc": "`setInterval(kurlariGuncelle, 10000);` ekleyerek 10 saniyede bir otomatik sorgulama yapın." }
      ],
      "criteria": [
        "async / await yapısını ve try-catch hata kontrolünü eksiksiz kurma",
        "Gelen JSON verisindeki alanlara nesne hiyerarşisiyle (veri.oran) erişebilme",
        "Ağ isteği sürerken kullanıcıya 'Yükleniyor...' geri bildirimi verme"
      ]
    },
    "tips": {
      "safetyTitle": "API Güvenliği & CORS Kuralları",
      "safetyRules": [
        { "bold": "CORS (Cross-Origin Resource Sharing) Hatası", "text": "Tarayıcılar güvenlik gereği farklı bir domainden gelen istekleri engelleyebilir; sunucuda CORS başlıkları açılmalıdır." },
        { "bold": "API Anahtarlarını (API Keys) Frontend'de Saklamayın", "text": "Tarayıcı koduna yazılan tüm gizli API anahtarları F12'den görünür; ücretli API'leri backend üzerinden proxy ile çağırın." },
        { "bold": "Aşırı İstek (Rate Limit) Sınırları", "text": "Döngü içinde saniyede 100 kez API çağırırsanız sunucu IP adresinizi geçici olarak banlar." }
      ],
      "myths": [
        { "wrong": "fetch() çağrısı yapıldığında bütün web sayfası durur ve internet gelene kadar kullanıcı hiçbir yere tıklayamaz.", "correct": "Hayır! fetch() tamamen asenkrondur (arka planda çalışır); kullanıcı sayfada gezinmeye ve butonlara basmaya devam edebilir." },
        { "wrong": "Tüm REST API'ler sadece JSON formatı döndürmek zorundadır.", "correct": "JSON günümüz standardıdır ancak bazı eski kurumsal API'ler XML veya düz metin de döndürebilir." }
      ]
    },
    "quiz": {
      "question": "JavaScript'te `fetch()` fonksiyonu bir ağ isteği gönderdiğinde ilk aşamada doğrudan ne döndürür?",
      "options": [
        { "text": "A) Hazır çözümlenmiş JavaScript nesnesi", "isCorrect": False },
        { "text": "B) Henüz tamamlanmamış bir Promise (Gelecek Vaadi) nesnesi", "isCorrect": True },
        { "text": "C) Düz metin bir HTML sayfası", "isCorrect": False },
        { "text": "D) Sayısal bir hata kodu", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `fetch()` hemen veriyi veremez çünkü internet gecikmesi vardır; bu yüzden gelecekte çözümlenecek bir `Promise` döndürür ve `await` ile beklenir."
    },
    "summary": {
      "keyPoints": [
        "Asenkron programlama modern webin hızlı, akıcı ve kesintisiz çalışmasını sağlar.",
        "REST API'ler JSON biçiminde veri alışverişi yaparak sistemleri birleştirir.",
        "fetch() ve async/await modern JavaScript'in en güçlü iletişim araçlarıdır."
      ],
      "nextWeek": "Python ile Hafif Web Sunucusu: Flask Temelleri & Rotalar (Routes)",
      "homework": "Ücretsiz 'api.github.com/users/kullanici_adiniz' adresinden kendi GitHub profil bilgilerinizi çeken mini bir sayfa yapınız."
    }
  },

  # 23. Hafta
  {
    "week": 23,
    "date": "15 - 21 Şubat",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Web Teknolojileri & Web Tabanlı Programlama",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "Python ile Hafif Web Sunucusu: Flask Temelleri",
    "subtitle": "WSGI Mimarisi, Flask Çatısı (Framework), Rota Tanımlama (@app.route), Dinamik URL Parametreleri, Şablon Motoru (Jinja2) ve Form POST İşleme",
    "outcomeCode": "BB.10.3.6",
    "targetSkill": "Arka Yüz (Backend) Programlama & Web Servisi Geliştirme",
    "curiosityQuestion": "Kendi bilgisayarınızı sadece 5 satır Python koduyla tüm dünyanın erişebileceği canlı bir web sunucusuna nasıl dönüştürürsünüz?",
    "roadmap": [
      { "title": "Backend Nedir?", "desc": "Veritabanıyla konuşan, şifreleri doğrulayan ve HTML sayfalarını dinamik üreten mutfak." },
      { "title": "Flask Çatısı", "desc": "Python'ın en hafif, sade ve anlaşılır web çerçevesi." },
      { "title": "Rotalar (Routing & Decorators)", "desc": "`@app.route('/profil/<isim>')` ile URL isteklerini karşılayan fonksiyonlar." },
      { "title": "Jinja2 Şablonları & Formlar", "desc": "HTML içine `{{ degisken }}` ve `{% for %}` bloklarıyla dinamik veri basma." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"/>
      
      <!-- Flask Sunucu Kutusu -->
      <g transform="translate(35, 35)">
        <rect width="350" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="175" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#34d399">Python Flask Web Sunucusu (Port: 5000)</text>
        
        <rect x="20" y="42" width="95" height="42" rx="4" fill="#0f172a" stroke="#38bdf8"/>
        <text x="67" y="60" text-anchor="middle" font-size="9" font-family="monospace" fill="#38bdf8">@app.route('/')</text>
        <text x="67" y="75" text-anchor="middle" font-size="8" fill="#cbd5e1">index()</text>
        
        <rect x="127" y="42" width="95" height="42" rx="4" fill="#0f172a" stroke="#f59e0b"/>
        <text x="175" y="60" text-anchor="middle" font-size="9" font-family="monospace" fill="#fbbf24">@app.route('/api')</text>
        <text x="175" y="75" text-anchor="middle" font-size="8" fill="#cbd5e1">veri_json()</text>
        
        <rect x="235" y="42" width="95" height="42" rx="4" fill="#0f172a" stroke="#ec4899"/>
        <text x="282" y="60" text-anchor="middle" font-size="9" font-family="monospace" fill="#f472b6">@app.route('/giris')</text>
        <text x="282" y="75" text-anchor="middle" font-size="8" fill="#cbd5e1">form_post()</text>
      </g>
      
      <!-- Jinja2 Şablon İşleme -->
      <g transform="translate(35, 155)">
        <rect width="350" height="110" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="175" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">Jinja2 Şablon Motoru (HTML + Python)</text>
        <text x="25" y="52" font-family="monospace" font-size="10" fill="#cbd5e1">&lt;h1&gt;Hosgeldin, {{ kullanici }}!&lt;/h1&gt;</text>
        <text x="25" y="72" font-family="monospace" font-size="10" fill="#38bdf8">{% for urun in urunler %}</text>
        <text x="45" y="90" font-family="monospace" font-size="10" fill="#a7f3d0">&lt;li&gt;{{ urun.ad }} - {{ urun.fiyat }} TL&lt;/li&gt;</text>
      </g>
    </svg>''',
    "section1": {
      "title": "Neden Flask Tercih Ediyoruz?",
      "subtitle": "Mikro çatının sağladığı hafiflik ve öğrenme kolaylığı",
      "cards": [
        {
          "title": "Django vs Flask Yaklaşımı",
          "icon": "🌶️",
          "desc": "Django büyük kurumsal siteler için her şeyi hazır sunan devasa bir yapıyken, Flask sadece ihtiyacınız olanı eklemenize izin verir.",
          "items": [
            { "bold": "Mikro Çekirdek", "text": "Gereksiz veritabanı veya karmaşık admin paneli dayatmaz; 5 satırda başlar." },
            { "bold": "Öğrenme Eğrisi", "text": "Python temellerini doğrudan web ile birleştirmek için en ideal eğitim aracıdır." },
            { "bold": "REST API Uyumu", "text": "`jsonify()` fonksiyonu ile tek satırda JSON servis uç noktası oluşturur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Çalışan İlk Flask Uygulaması",
      "subtitle": "Ana sayfa ve JSON API uç noktası barındıran temel sunucu kodu",
      "codeSnippet": "from flask import Flask, render_template, request, jsonify\n\napp = Flask(__name__)\n\n# 1. Ana Sayfa Rotası\n@app.route('/')\ndef anasayfa():\n    return \"<h1>MEB 10. Sınıf Flask Web Sunucusu Çalışıyor!</h1>\"\n\n# 2. Dinamik Parametreli Rota\n@app.route('/ogrenci/<ad>')\ndef ogrenci_profili(ad):\n    return f\"<h3>Öğrenci Profili: {ad.capitalize()}</h3>\"\n\n# 3. JSON API Uç Noktası\n@app.route('/api/durum')\ndef sistem_durumu():\n    return jsonify({\n        \"sunucu\": \"Aktif\",\n        \"surum\": \"2.4.1\",\n        \"bagli_kullanici\": 42\n    })\n\nif __name__ == '__main__':\n  # debug=True: Kod değiştikçe sunucu kendini otomatik yeniler\n  app.run(debug=True, port=5000)",
      "codeTitle": "app.py",
      "codeLang": "Python 3 (Flask)",
      "cards": [
        { "badge": "Dekoratör", "title": "@app.route() Mantığı", "desc": "Python'daki `@` işareti bir fonksiyonun hangi web URL'sine bağlanacağını belirler.", "items": [{ "bold": "Port 5000", "text": "Tarayıcıdan `http://127.0.0.1:5000` (localhost) adresine girerek test edilir." }] }
      ]
    },
    "workshop": {
      "title": "Flask ile Not Defteri Web Uygulaması",
      "subtitle": "Kullanıcının formdan girdiği notu alıp sayfada dinamik listeleyen backend uygulaması geliştirme",
      "steps": [
        { "title": "1. Flask Kur", "desc": "Terminalden `pip install flask` komutunu çalıştırın." },
        { "title": "2. templates Klasörü Aç", "desc": "Proje dizininde `templates/index.html` dosyası oluşturup içine basit bir form koyun." },
        { "title": "3. POST İsteğini Yakala", "desc": "`request.form.get('not_metni')` ile formdan gelen yazıyı bir Python listesine ekleyin." },
        { "title": "4. Listeyi Ekrana Bas", "desc": "Jinja2 `{% for n in notlar %}` döngüsüyle tüm notları sayfada listeleyin." }
      ],
      "criteria": [
        "Flask dosya dizin yapısına (`templates/` ve `static/`) eksiksiz uyma",
        "GET ve POST metotlarını route içinde doğru filtreleme (`methods=['GET', 'POST']`)",
        "Jinja2 sözdizimini (if, for) HTML içinde hatasız kullanma"
      ]
    },
    "tips": {
      "safetyTitle": "Flask ve Sunucu Güvenliği",
      "safetyRules": [
        { "bold": "Canlıda Asla debug=True Bırakmayın", "text": "`debug=True` hata anında ekranda interaktif Python konsolu açar; hackerlar sunucuda terminal komutu çalıştırabilir." },
        { "bold": "SECRET_KEY Güvenliği", "text": "Kullanıcı oturumları (session) için güçlü ve tahmin edilemez rastgele bir `app.secret_key` tanımlayın." },
        { "bold": "Geliştirme Sunucusu Canlıya Taşınmaz", "text": "`app.run()` sadece laboratuvar ve test içindir; canlıda Gunicorn veya Nginx gibi gerçek WSGI sunucuları kullanılır." }
      ],
      "myths": [
        { "wrong": "Python web için çok yavaştır, bu yüzden webde hiç kullanılmaz.", "correct": "Instagram, Spotify, Pinterest ve Dropbox gibi devasa platformların arka yüzü büyük oranda Python üzerinde koşar." },
        { "wrong": "Flask ile veritabanı bağlanamaz.", "correct": "Flask hafif yapısıyla SQLite, PostgreSQL veya MongoDB'ye kolayca bağlanır; tam bir özgürlük sunar." }
      ]
    },
    "quiz": {
      "question": "Flask uygulamasında bir HTML dosyasını arka yüzden dinamik değişkenler göndererek istemciye sunmak için hangi fonksiyon kullanılır?",
      "options": [
        { "text": "A) open_html()", "isCorrect": False },
        { "text": "B) render_template('dosya.html', degisken=deger)", "isCorrect": True },
        { "text": "C) load_page()", "isCorrect": False },
        { "text": "D) response.write()", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `render_template` fonksiyonu `templates` klasöründeki HTML dosyasını Jinja2 motorundan geçirip değişkenleri işleyerek tarayıcıya yollar."
    },
    "summary": {
      "keyPoints": [
        "Backend programlama web uygulamalarının beyni ve karar mekanizmasıdır.",
        "Flask sadeliği ve esnekliğiyle modern web geliştirmenin en sevilen Python çatısıdır.",
        "Jinja2 şablonları HTML ile Python arasındaki köprüyü kusursuz kurar."
      ],
      "nextWeek": "Veri Tabanı Mimarisine Giriş: İlişkisel Model, Tablolar, PK & FK",
      "homework": "Flask ile girilen iki sayıyı toplayıp sonucu web sayfasında gösteren mini bir hesap makinesi yapınız."
    }
  },

  # 24. Hafta
  {
    "week": 24,
    "date": "22 - 28 Şubat",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Veri Tabanı Mimarisi & SQL Programlama",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "Veri Tabanı Mimarisine Giriş & İlişkisel Model",
    "subtitle": "Veri vs Enformasyon, Dosya Tabanlı Saklama Sorunları, İlişkisel Veritabanı (RDBMS), Tablo Yapısı, Birincil Anahtar (Primary Key) ve Yabancı Anahtar (Foreign Key)",
    "outcomeCode": "BB.10.4.1",
    "targetSkill": "Veri Modelleme & İlişkisel Varlık-İlişki (ER) Mimarisi",
    "curiosityQuestion": "Milyonlarca kullanıcısı olan e-Devlet veya e-Okul sisteminde bir öğrencinin notları nasıl birbirine hiç karışmadan anında bulunur?",
    "roadmap": [
      { "title": "Neden Veritabanı (Database)?", "desc": "Metin ve Excel dosyalarının devasa verilerde çökmesi ve eşzamanlı erişim krizleri." },
      { "title": "İlişkisel Model (RDBMS)", "desc": "Verilerin satır (kayıt) ve sütunlardan (alan) oluşan tablolarda modellenmesi." },
      { "title": "Birincil Anahtar (Primary Key - PK)", "desc": "Her kaydı benzersiz kılan kimlik numarası (Örn: T.C. Kimlik No, Öğrenci No)." },
      { "title": "Yabancı Anahtar (Foreign Key - FK)", "desc": "Tabloları birbirine bağlayan ve veri tekrarını (redunancy) yok eden sihirli köprü." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2"/>
      
      <!-- Öğrenciler Tablosu -->
      <g transform="translate(30, 40)">
        <rect width="160" height="110" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <rect width="160" height="25" rx="6" fill="#38bdf8"/>
        <text x="80" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#070b14">ogrenciler Tablosu</text>
        <text x="10" y="45" font-size="9" font-family="monospace" fill="#fbbf24">🔑 ogrenci_id (PK)</text>
        <text x="10" y="65" font-size="9" font-family="monospace" fill="#ffffff">ad_soyad: TEXT</text>
        <text x="10" y="85" font-size="9" font-family="monospace" fill="#ffffff">sinif: VARCHAR(5)</text>
      </g>
      
      <!-- Notlar Tablosu -->
      <g transform="translate(230, 40)">
        <rect width="160" height="110" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <rect width="160" height="25" rx="6" fill="#10b981"/>
        <text x="80" y="17" text-anchor="middle" font-size="11" font-weight="bold" fill="#070b14">notlar Tablosu</text>
        <text x="10" y="45" font-size="9" font-family="monospace" fill="#fbbf24">🔑 not_id (PK)</text>
        <text x="10" y="65" font-size="9" font-family="monospace" fill="#38bdf8">🔗 ogrenci_id (FK)</text>
        <text x="10" y="85" font-size="9" font-family="monospace" fill="#ffffff">ders: TEXT</text>
        <text x="10" y="102" font-size="9" font-family="monospace" fill="#ffffff">puan: INTEGER</text>
      </g>
      
      <!-- İlişki Çizgisi (1 to N) -->
      <path d="M 190 65 L 230 65" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4"/>
      <circle cx="190" cy="65" r="4" fill="#38bdf8"/>
      <circle cx="230" cy="65" r="4" fill="#10b981"/>
      <text x="210" y="55" text-anchor="middle" font-size="9" font-weight="bold" fill="#fbbf24">1 : N</text>

      <!-- İlişki Açıklaması -->
      <g transform="translate(30, 170)">
        <rect width="360" height="95" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="180" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">1'e Çok (1-to-Many) İlişki</text>
        <text x="20" y="50" font-size="10" fill="#cbd5e1">• Bir öğrencinin birden çok ders notu olabilir (1 : N).</text>
        <text x="20" y="70" font-size="10" fill="#cbd5e1">• Öğrencinin adı değişirse tek bir yerden güncellenir; veri tutarlılığı sağlanır.</text>
      </g>
    </svg>''',
    "section1": {
      "title": "Veritabanı Normalizasyonu ve İlişki Tipleri",
      "subtitle": "Veri tekrarını önleyip tutarlılığı garanti altına alma",
      "cards": [
        {
          "title": "3 Temel İlişki Türü",
          "icon": "🔗",
          "desc": "Gerçek dünyadaki nesneler arasındaki bağlar tablolarda şöyle modellenir:",
          "items": [
            { "bold": "Bire Bir (1:1)", "text": "Bir vatandaşın sadece bir T.C. Kimlik kartı olabilir (Vatandaş <-> Pasaport)." },
            { "bold": "Bire Çok (1:N)", "text": "Bir öğretmenin birçok öğrencisi olabilir, bir yazarın birçok kitabı olabilir." },
            { "bold": "Çoka Çok (N:M)", "text": "Bir öğrenci birçok derse, bir ders birçok öğrenciye aittir; araya 'Kavşak Tablo' (Junction Table) konur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Veri Tipleri ve Kısıtlayıcılar (Constraints)",
      "subtitle": "Tablo sütunlarının sınırlarını çizen kurallar",
      "codeSnippet": "-- Birbiriyle İlişkili İki Tablo Tasarımı\n\nCREATE TABLE ogrenciler (\n  ogrenci_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  tc_kimlik CHAR(11) UNIQUE NOT NULL,\n  ad TEXT NOT NULL,\n  soyad TEXT NOT NULL,\n  kayit_tarihi DATE DEFAULT CURRENT_DATE\n);\n\nCREATE TABLE odunc_kitaplar (\n  islem_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  ogrenci_id INTEGER NOT NULL,\n  kitap_adi TEXT NOT NULL,\n  teslim_edildi BOOLEAN DEFAULT 0,\n  FOREIGN KEY (ogrenci_id) REFERENCES ogrenciler(ogrenci_id)\n);",
      "codeTitle": "kutuphane_schema.sql",
      "codeLang": "SQL",
      "cards": [
        { "badge": "Kurallar", "title": "Bütünlük Kısıtları (Constraints)", "desc": "`NOT NULL`: Boş bırakılamaz. `UNIQUE`: Tekrar edemez. `PRIMARY KEY`: Benzersiz anahtar.", "items": [{ "bold": "Referential Integrity", "text": "Olmayan bir öğrenciye ödünç kitap verilmesini veritabanı motoru doğrudan reddeder." }] }
      ]
    },
    "workshop": {
      "title": "Okul Kütüphanesi Varlık-İlişki (ER) Diyagramı Çizimi",
      "subtitle": "Kütüphane sistemi için Öğrenciler, Kitaplar ve Ödünç İşlemleri tablolarını tasarlama",
      "steps": [
        { "title": "1. Varlıkları Belirle", "desc": "Sistemde kimler ve neler var? (Öğrenci, Kitap, Yazar)." },
        { "title": "2. Birincil Anahtarları Ata", "desc": "Her tabloya benzersiz bir ID sütunu ekleyin (`kitap_id`, `ogrenci_id`)." },
        { "title": "3. Yabancı Anahtarları Bağla", "desc": "Ödünç tablosuna `ogrenci_id` ve `kitap_id` sütunlarını ekleyerek ilişkiyi çizin." },
        { "title": "4. Senaryo Testi", "desc": "'Kitap silinirse ödünç geçmişine ne olur?' sorusuna CASCADE kuralıyla çözüm üretin." }
      ],
      "criteria": [
        "Varlık-İlişki (ER) modelleme mantığını doğru diyagramlaştırma",
        "Primary Key ve Foreign Key kavramlarını yerli yerinde tanımlama",
        "Gereksiz veri tekrarını (Redundancy) ortadan kaldıracak tablo bölme becerisi"
      ]
    },
    "tips": {
      "safetyTitle": "Veritabanı Tasarım Hataları",
      "safetyRules": [
        { "bold": "Bir Hücreye Asla Birden Çok Veri Yazmayın", "text": "Telefon sütununa '0555..., 0532...' yazmak 1. Normal Formu bozar; arama yapmayı imkansız kılar." },
        { "bold": "T.C. Kimlik Numarasını Sayısal (INTEGER) Tanımlamayın", "text": "Başında '0' olan sayılar veya matematiksel işleme girmeyecek kodlar `VARCHAR` veya `TEXT` yapılmalıdır." },
        { "bold": "Yedeksiz Veritabanı Yaşayamaz", "text": "Düzenli dump / export alarak veritabanı yedeğini farklı bir diskte saklayın." }
      ],
      "myths": [
        { "wrong": "Excel zaten bir veritabanıdır, ek bir veritabanı programına gerek yoktur.", "correct": "Excel bir tablolama programıdır; eşzamanlı milyonlarca satırda kilitlenir, ACID güvencesi ve SQL gücü sunamaz." },
        { "wrong": "Bir tabloda birden çok Primary Key olabilir.", "correct": "Bir tabloda sadece TEK bir Primary Key olabilir; ancak bu anahtar birden çok sütunun birleşiminden (Composite Key) oluşabilir." }
      ]
    },
    "quiz": {
      "question": "Bir ilişkisel veritabanı tablosundaki her satırı diğerlerinden ayıran, benzersiz ve boş (NULL) bırakılamayan alana ne ad verilir?",
      "options": [
        { "text": "A) Foreign Key (Yabancı Anahtar)", "isCorrect": False },
        { "text": "B) Primary Key (Birincil Anahtar)", "isCorrect": True },
        { "text": "C) Secondary Index", "isCorrect": False },
        { "text": "D) Auto Field", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Birincil Anahtar (Primary Key), tabloda her kaydın parmak izi gibidir; benzersizdir ve asla NULL olamaz."
    },
    "summary": {
      "keyPoints": [
        "İlişkisel veritabanları (RDBMS) dünyadaki kurumsal verilerin kalbidir.",
        "Primary Key benzersiz kimlik sağlar, Foreign Key tabloları birbirine bağlar.",
        "Doğru tasarlanmış bir veritabanı şeması yazılımın gelecekteki hızını ve güvenliğini belirler."
      ],
      "nextWeek": "SQL Temelleri: Tablo Oluşturma (CREATE), Veri Ekleme (INSERT) & Listeleme (SELECT)",
      "homework": "Bir e-ticaret sitesi için Müşteriler, Ürünler ve Siparişler tablolarının sütunlarını kağıda çizerek ilişkilendiriniz."
    }
  },

  # 25. Hafta
  {
    "week": 25,
    "date": "01 - 07 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Veri Tabanı Mimarisi & SQL Programlama",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "SQL Temelleri: CREATE, INSERT & SELECT",
    "subtitle": "SQL (Structured Query Language) Sözdizimi, DDL vs DML, CREATE TABLE, INSERT INTO, Temel SELECT Sorguları ve AS ile Yeniden Adlandırma",
    "outcomeCode": "BB.10.4.2",
    "targetSkill": "Temel SQL Komutları & Veri Sorgulama Becerisi",
    "curiosityQuestion": "Veritabanına 'Bana 90'ın üzerinde not alan tüm 10. sınıf öğrencilerini ad sırasına göre getir' emrini evrensel olarak nasıl verirsiniz?",
    "roadmap": [
      { "title": "SQL Dili Nedir?", "desc": "Veritabanlarıyla konuşmak için 1970'lerden beri kullanılan evrensel standart dil." },
      { "title": "DDL (Veri Tanımlama)", "desc": "`CREATE TABLE`, `DROP TABLE`, `ALTER TABLE` ile yapı kurma." },
      { "title": "DML (Veri İşleme)", "desc": "`INSERT INTO` ile yeni kayıt ekleme ve veri girişi." },
      { "title": "Sorgulama Sanatı: SELECT", "desc": "`SELECT sutun FROM tablo;` ile devasa veriler arasından hedef bilgiyi çekip alma." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(56, 189, 248, 0.3)" stroke-width="2"/>
      
      <!-- SQL Sorgu Komutu -->
      <g transform="translate(30, 30)">
        <rect width="360" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="20" y="32" font-family="monospace" font-size="12" font-weight="bold" fill="#38bdf8">SELECT ad, soyad, puan</text>
        <text x="20" y="52" font-family="monospace" font-size="12" font-weight="bold" fill="#fbbf24">FROM ogrenciler;</text>
      </g>
      
      <!-- Sonuç Tablosu (Result Set) -->
      <g transform="translate(30, 120)">
        <rect width="360" height="150" rx="8" fill="#162038" stroke="#10b981" stroke-width="2"/>
        
        <!-- Tablo Başlıkları -->
        <rect x="15" y="15" width="105" height="26" rx="4" fill="#10b981"/><text x="67" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#070b14">ad</text>
        <rect x="125" y="15" width="105" height="26" rx="4" fill="#10b981"/><text x="177" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#070b14">soyad</text>
        <rect x="235" y="15" width="110" height="26" rx="4" fill="#10b981"/><text x="290" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#070b14">puan</text>
        
        <!-- Satır 1 -->
        <text x="67" y="65" text-anchor="middle" font-size="10" fill="#ffffff">Zeynep</text>
        <text x="177" y="65" text-anchor="middle" font-size="10" fill="#ffffff">Yılmaz</text>
        <text x="290" y="65" text-anchor="middle" font-size="10" font-weight="bold" fill="#34d399">95</text>
        <line x1="15" y1="75" x2="345" y2="75" stroke="#334155"/>
        
        <!-- Satır 2 -->
        <text x="67" y="98" text-anchor="middle" font-size="10" fill="#ffffff">Kerem</text>
        <text x="177" y="98" text-anchor="middle" font-size="10" fill="#ffffff">Demir</text>
        <text x="290" y="98" text-anchor="middle" font-size="10" font-weight="bold" fill="#34d399">88</text>
        <line x1="15" y1="108" x2="345" y2="108" stroke="#334155"/>
        
        <!-- Satır 3 -->
        <text x="67" y="130" text-anchor="middle" font-size="10" fill="#ffffff">Elif</text>
        <text x="177" y="130" text-anchor="middle" font-size="10" fill="#ffffff">Kaya</text>
        <text x="290" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="#34d399">100</text>
      </g>
    </svg>''',
    "section1": {
      "title": "DDL vs DML Komut Grupları",
      "subtitle": "Tablo yapısını inşa edenler ile tablodaki veriyi yönetenlerin farkı",
      "cards": [
        {
          "title": "SQL'in 2 Büyük Ailesi",
          "icon": "🏛️",
          "desc": "Veritabanı yöneticileri ve yazılımcıların kullandığı temel komut ayrımı:",
          "items": [
            { "bold": "DDL (Data Definition Language)", "text": "Tabloyu, sütunları ve tipleri oluşturur (`CREATE`, `ALTER`, `DROP`). Mimaridir." },
            { "bold": "DML (Data Manipulation Language)", "text": "Tablonun içine veri ekler, okur, günceller (`INSERT`, `SELECT`, `UPDATE`, `DELETE`). İşçiliktir." },
            { "bold": "Noktalı Virgül (;)", "text": "Tüm SQL komutlarının bittiğini veritabanı motoruna bildiren standart işarettir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Temel SQL Komutları Scripti",
      "subtitle": "Tablo oluşturma, çoklu kayıt ekleme ve tüm sütunları çekme",
      "codeSnippet": "-- 1. Tablo Oluşturma (DDL)\nCREATE TABLE donanim_envanter (\n  cihaz_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  cihaz_adi TEXT NOT NULL,\n  kategori TEXT NOT NULL,\n  adet INTEGER DEFAULT 1,\n  fiyat REAL\n);\n\n-- 2. Kayıt Ekleme (DML)\nINSERT INTO donanim_envanter (cihaz_adi, kategori, adet, fiyat)\nVALUES \n  ('Arduino Uno R3', 'Mikrodenetleyici', 25, 350.00),\n  ('ESP32 NodeMCU', 'IoT Karti', 15, 420.50),\n  ('HC-SR04 Sensor', 'Sensor', 40, 65.00),\n  ('SG90 Servo Motor', 'Aktuator', 30, 85.00);\n\n-- 3. Verileri Sorgulama\nSELECT cihaz_adi, adet, fiyat FROM donanim_envanter;\n\n-- 4. Tüm Sütunları Listeleme\nSELECT * FROM donanim_envanter;",
      "codeTitle": "temel_sorgular.sql",
      "codeLang": "SQL",
      "cards": [
        { "badge": "Sembol", "title": "SELECT * (Yıldız) Anlamı", "desc": "'*' işareti tablodaki TÜM sütunları getir demektir.", "items": [{ "bold": "Performans Uyarısı", "text": "Milyonlarca satırlı büyük tablolarda `SELECT *` yerine sadece ihtiyaç duyulan sütunları yazmak sistemi hızlandırır." }] }
      ]
    },
    "workshop": {
      "title": "Sınıf Bilişim Kulübü Veritabanı Oluşturma",
      "subtitle": "SQLite veya DB Browser aracıyla `kulup_uyeleri` tablosu kurup 5 öğrenci kaydı ekleme",
      "steps": [
        { "title": "1. Veritabanı Aç", "desc": "DB Browser for SQLite programında `okul.db` veritabanını oluşturun." },
        { "title": "2. CREATE TABLE Çalıştır", "desc": "`uye_id`, `ad_soyad`, `rol` ve `katilim_yili` sütunlarını tanımlayın." },
        { "title": "3. INSERT INTO ile Doldur", "desc": "Kendinizi ve 4 arkadaşınızı kulüp üyesi olarak ekleyin." },
        { "title": "4. SELECT ile Doğrula", "desc": "Sorguyu çalıştırıp tablonun ızgara halinde listelendiğini görün." }
      ],
      "criteria": [
        "SQL sözdizimini (büyük harf SQL anahtar kelimeleri) standartlara uygun yazma",
        "Metin verilerini tek tırnak ('...') içinde doğru ifade etme",
        "AUTOINCREMENT alanın her kayıtta 1 artarak çalıştığını gözlemleme"
      ]
    },
    "tips": {
      "safetyTitle": "SQL Yazım Kuralları & Hatalar",
      "safetyRules": [
        { "bold": "Büyük/Küçük Harf Standardı", "text": "SQL komutları büyük harfle (`SELECT`), tablo ve sütun isimleri küçük harfle (`ogrenciler`) yazılır." },
        { "bold": "Metinlerde Tek Tırnak Kuralı", "text": "SQL'de string değerler her zaman tek tırnakla `'Ahmet'` yazılır; çift tırnak bazı motorlarda sütun adı sanılır." },
        { "bold": "Türkçe Karakter Problemleri", "text": "Veritabanı sütun isimlerinde `ı, ş, ğ, ö, ü` harfleri yerine İngilizce karakterler (`ogrenci_id`) kullanın." }
      ],
      "myths": [
        { "wrong": "SELECT komutu tablodaki verileri kalıcı olarak değiştirir veya siler.", "correct": "Asla! SELECT salt okunurdur (read-only); orijinal veriye dokunmadan sadece ekrana kopya listeler." },
        { "wrong": "Her veritabanı farklı bir SQL dili konuşur, hiçbiri birbirine uymaz.", "correct": "ANSI SQL standarttır; SQLite, MySQL, PostgreSQL ve Oracle'da temel SELECT ve INSERT komutları %99 aynıdır." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki SQL ifadelerinden hangisi `kitaplar` tablosundaki TÜM sütunları ve TÜM kayıtları ekrana getirmek için kullanılır?",
      "options": [
        { "text": "A) GET ALL FROM kitaplar;", "isCorrect": False },
        { "text": "B) SELECT * FROM kitaplar;", "isCorrect": True },
        { "text": "C) FETCH TABLE kitaplar;", "isCorrect": False },
        { "text": "D) SHOW ROWS IN kitaplar;", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `SELECT * FROM tablo_adi;` evrensel SQL komutudur; '*' işareti tablodaki bütün sütunları temsil eder."
    },
    "summary": {
      "keyPoints": [
        "SQL ilişkisel veritabanlarıyla konuşmanın küresel ve zamansız standardıdır.",
        "CREATE TABLE ile verinin çatısı kurulur, INSERT INTO ile veriler eklenir.",
        "SELECT komutu veri ambarından tam olarak istediğimiz bilgiyi çekip çıkaran mikroskoptur."
      ],
      "nextWeek": "2. Dönem Ara Tatil: SQL Sorgu Optimizasyonu & Veritabanı Tasarım Atölyesi",
      "homework": "Kendi kitaplığınızdaki 5 kitabın adını, yazarını ve sayfa sayısını ekleyen bir SQL scripti yazınız."
    }
  },

  # 26. Hafta (Ara Tatil)
  {
    "week": 26,
    "date": "08 - 14 Mart",
    "hours": "Ara Tatil Atölyesi",
    "unit": "4. Ünite: Veri Tabanı Mimarisi & SQL Programlama",
    "unitBadge": "Ara Tatil",
    "unitTheme": "unite-4",
    "title": "Ara Tatil: SQL Optimizasyon & İndeks Atölyesi",
    "subtitle": "Büyük Veri Tabanlarında Performans, İndeks (INDEX) Mimarisi, B-Tree Ağaçları, EXPLAIN QUERY PLAN ve Normalizasyon (1NF, 2NF, 3NF)",
    "outcomeCode": "BB.10.4.3",
    "targetSkill": "Sorgu Optimizasyonu & Veritabanı Başarım Analizi",
    "curiosityQuestion": "1000 sayfalık kalın bir ansiklopedide aradığınız kelimeyi sayfaları tek tek çevirmeden arkadaki fihristten saniyeler içinde nasıl bulursunuz?",
    "roadmap": [
      { "title": "Tam Tablo Taraması (Full Table Scan)", "desc": "Milyonlarca satırı baştan sona tek tek taramanın faturası ve sunucu kilitlenmeleri." },
      { "title": "İndeks (INDEX) ve B-Tree", "desc": "Tıpkı kitap fihristi gibi verileri sıralı tutarak saniyenin binde birinde bulma mucizesi." },
      { "title": "Sorgu Planı İnceleme", "desc": "`EXPLAIN QUERY PLAN` komutuyla veritabanının sorguyu nasıl çalıştırdığını röntgenleme." },
      { "title": "3 Normal Form (1NF, 2NF, 3NF)", "desc": "Veritabanını kusursuz normalize ederek mimari açıkları sıfırlama." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2"/>
      
      <!-- İndekssiz Arama (O(N)) -->
      <g transform="translate(30, 30)">
        <rect width="165" height="110" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
        <text x="82" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#f87171">İndekssiz: Full Table Scan</text>
        <text x="15" y="50" font-size="9" fill="#cbd5e1">1.000.000 Satır Tek Tek Taranır</text>
        <text x="15" y="72" font-size="9" font-family="monospace" fill="#fca5a5">Zaman: O(N) -> 2.500 ms</text>
        <text x="15" y="95" font-size="8" fill="#94a3b8">Disk ve CPU aşırı ısınır!</text>
      </g>
      
      <!-- B-Tree İndeksli Arama (O(log N)) -->
      <g transform="translate(225, 30)">
        <rect width="165" height="110" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="82" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#34d399">B-Tree İndeksi: Binary Search</text>
        <text x="15" y="50" font-size="9" fill="#cbd5e1">Sadece 20 Adımda Bulunur</text>
        <text x="15" y="72" font-size="9" font-family="monospace" fill="#86efac">Zaman: O(log N) -> 2 ms</text>
        <text x="15" y="95" font-size="8" fill="#38bdf8">1250 Kat Daha Hızlı!</text>
      </g>
      
      <!-- B-Tree Ağacı -->
      <g transform="translate(30, 160)">
        <rect width="360" height="110" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="180" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">B-Tree İndeks Ağacı Mimarisi</text>
        
        <circle cx="180" cy="50" r="14" fill="#1e1b4b" stroke="#f59e0b" stroke-width="1.5"/><text x="180" y="54" text-anchor="middle" font-size="9" fill="#ffffff">50</text>
        <line x1="170" y1="60" x2="110" y2="78" stroke="#64748b"/>
        <line x1="190" y1="60" x2="250" y2="78" stroke="#64748b"/>
        
        <circle cx="110" cy="85" r="12" fill="#1e1b4b" stroke="#38bdf8"/><text x="110" y="89" text-anchor="middle" font-size="9" fill="#ffffff">25</text>
        <circle cx="250" cy="85" r="12" fill="#1e1b4b" stroke="#38bdf8"/><text x="250" y="89" text-anchor="middle" font-size="9" fill="#ffffff">75</text>
      </g>
    </svg>''',
    "section1": {
      "title": "B-Tree (Dengeli Ağaç) ve İndeks Gücü",
      "subtitle": "1 milyon kayıtta 20 adımda hedefe varma matematiği",
      "cards": [
        {
          "title": "Logaritmik Hız Mucizesi (O(log N))",
          "icon": "🌲",
          "desc": "Veritabanı bir sütuna `CREATE INDEX` koyduğunuzda arka planda sıralı bir B-Tree inşa eder:",
          "items": [
            { "bold": "Fihrist Mantığı", "text": "Aranan numara 50'den büyükse sol tarafa hiç bakmaz, aramayı tek hamlede yarıya indirir." },
            { "bold": "1 Milyon Kayıt Karşılaştırması", "text": "İndekssiz: 1.000.000 işlem. İndeksli: Sadece 20 işlem (2^20 ≈ 1.048.576)!" },
            { "bold": "Dezavantajı", "text": "İndeksler diskte yer kaplar ve her INSERT yapıldığında ağacın güncellenmesi gerekir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "İndeks Tanımlama ve Sorgu Planı İnceleme",
      "subtitle": "SQL sorgusunun performans analizini yapan pratik komutlar",
      "codeSnippet": "-- 1. Sık aranan e-posta sütununa indeks ekle\nCREATE INDEX idx_kullanici_eposta ON kullanicilar(eposta);\n\n-- 2. Sorgunun indeksi kullanıp kullanmadığını test et\nEXPLAIN QUERY PLAN\nSELECT * FROM kullanicilar WHERE eposta = 'ahmet@okul.meb.gov.tr';\n\n-- Çıktı:\n-- SEARCH TABLE kullanicilar USING INDEX idx_kullanici_eposta (eposta=?)",
      "codeTitle": "indeks_optimizasyonu.sql",
      "codeLang": "SQL",
      "cards": [
        { "badge": "Teşhis", "title": "SEARCH vs SCAN", "desc": "Sorgu planında 'SCAN' görüyorsanız tehlike var demektir (baştan sona tarar); 'SEARCH USING INDEX' görüyorsanız sistem şimşek hızındadır.", "items": [{ "bold": "Ne Zaman İndeks Konmalı?", "text": "WHERE, JOIN ve ORDER BY'da sıkça kullanılan sütunlara mutlaka indeks verilmelidir." }] }
      ]
    },
    "workshop": {
      "title": "100.000 Kayıtlı Veritabanında Hız Testi",
      "subtitle": "Python scriptiyle 100.000 sahte kullanıcı oluşturup indekssiz ve indeksli arama sürelerini kronometreyle kıyaslama",
      "steps": [
        { "title": "1. Veriyi Üret", "desc": "Python döngüsüyle SQLite içine 100.000 adet rastgele TC kimlik ve isim ekleyin." },
        { "title": "2. İndekssiz Ara", "desc": "99.999 sıradaki kişiyi `time.time()` sayacıyla aratıp geçen milisaniyeyi kaydedin." },
        { "title": "3. İndeks Oluştur", "desc": "`CREATE INDEX idx_tc ON uyeler(tc);` komutunu çalıştırın." },
        { "title": "4. İndeksli Ara", "desc": "Aynı kişiyi tekrar aratın ve sürenin neredeyse 0.0001 saniyeye düştüğünü canlı görün." }
      ],
      "criteria": [
        "Zaman karmaşıklığı (Time Complexity) kavramını deneysel olarak doğrulama",
        "EXPLAIN QUERY PLAN çıktısını teknik olarak doğru yorumlama",
        "Gereksiz yere her sütuna indeks koymanın getireceği depolama maliyetini açıklayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Optimizasyon Tuzakları",
      "safetyRules": [
        { "bold": "Az Satırlı Tablolara İndeks Koymayın", "text": "100 satırlık küçük bir tabloda indekse bakıp sonra veriye gitmek baştan sona okumaktan daha yavaştır." },
        { "bold": "WHERE Fonksiyon Kullanımı İndeksi Bozar", "text": "`WHERE UPPER(ad) = 'ALİ'` yazarsanız veritabanı ad indeksini kullanamaz; fonksiyonel indeks gerekir." },
        { "bold": "3. Normal Form (3NF) Kuralı", "text": "Hesaplanabilir değerleri (Örn: `toplam_fiyat = adet * birim_fiyat`) veritabanında sütun olarak saklamayın; sorguda hesaplatın." }
      ],
      "myths": [
        { "wrong": "Bütün sütunlara indeks koyarsak veritabanımız dünyanın en hızlısı olur.", "correct": "Hayır! Her indeks yazma (INSERT, UPDATE, DELETE) işlemlerini yavaşlatır; sadece sorgulanan kritik sütunlar indekslenir." },
        { "wrong": "Veritabanı şişerse tek çözüm daha pahalı bir sunucu almaktır (Vertical Scaling).", "correct": "Doğru indeksleme ve sorgu optimizasyonuyla sunucu maliyetleri %90 oranında düşürülebilir." }
      ]
    },
    "quiz": {
      "question": "Bir veritabanında `EXPLAIN QUERY PLAN` komutu çalıştırıldığında çıktıda 'SCAN TABLE' ifadesinin görülmesi ne anlama gelir?",
      "options": [
        { "text": "A) Sorgunun B-Tree indeksi kullanarak çok hızlı çalıştığı", "isCorrect": False },
        { "text": "B) Tabloda hiç indeks kullanılmadığı ve tüm satırların tek tek baştan sona tarandığı", "isCorrect": True },
        { "text": "C) Tablonun silindiği", "isCorrect": False },
        { "text": "D) Veritabanının şifrelendiği", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. 'SCAN TABLE' (Full Table Scan), veritabanının aranan satırı bulabilmek için tablodaki her kaydı tek tek incelediğini gösterir; bu yavaşlığın işaretidir."
    },
    "summary": {
      "keyPoints": [
        "Veritabanı mühendisliği sadece veri depolamak değil, milyonlarca kayıt arasından ışık hızında getirmektir.",
        "B-Tree indeksleri logaritmik hızla (O(log N)) arama sürelerini milisaniyelerin altına indirir.",
        "Ara tatilde veritabanı algoritmalarının kalbine inerek gerçek bir sistem mimarı gibi düşündük!"
      ],
      "nextWeek": "2. Dönem 1. Yazılı Sınavı Tekrarı & SQL / Web / Flask Pekiştirme",
      "homework": "Normalizasyon kurallarını (1NF, 2NF, 3NF) özetleyen 1 sayfalık teknik infografik hazırlayınız."
    }
  },

  # 27. Hafta
  {
    "week": 27,
    "date": "15 - 21 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Veri Tabanı Mimarisi & SQL Programlama",
    "unitBadge": "Sınav Tekrarı",
    "unitTheme": "unite-4",
    "title": "2. Dönem 1. Yazılı Sınav Tekrarı & Pekiştirme",
    "subtitle": "REST API, fetch(), Python Flask Web Sunucusu, İlişkisel Model (PK, FK) ve Temel SQL Komutları (CREATE, INSERT, SELECT) Sınav Provası",
    "outcomeCode": "BB.10.4.4",
    "targetSkill": "Web & Veritabanı Entegrasyon Sentezi",
    "curiosityQuestion": "Bir web formundan gönderilen kullanıcı kaydı, Flask rotasından geçip SQL komutuyla veritabanına nasıl mühürlenir?",
    "roadmap": [
      { "title": "Web & API Soru Kalıpları", "desc": "fetch(), JSON parse, HTTP durum kodları (200, 404, 500) ve async/await." },
      { "title": "Flask Backend Soruları", "desc": "`@app.route`, `request.form`, `render_template` ve Jinja2 sözdizimi." },
      { "title": "İlişkisel Veritabanı Soruları", "desc": "PK, FK, 1:N ilişkiler ve DDL/DML komut yazma pratiği." },
      { "title": "Klasik Yazılı Sınav Senaryoları", "desc": "Açık uçlu kod yazma ve hata bulma sorularıyla sınav provası." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2"/>
      
      <!-- Uçtan Uca Sistem Zinciri -->
      <g transform="translate(25, 40)">
        <rect width="110" height="90" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="55" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#38bdf8">1. Frontend</text>
        <text x="55" y="50" text-anchor="middle" font-size="8" fill="#ffffff">HTML Form</text>
        <text x="55" y="70" text-anchor="middle" font-size="8" fill="#a7f3d0">fetch(POST)</text>
      </g>
      
      <path d="M 135 85 L 155 85" stroke="#f59e0b" stroke-width="2"/>
      
      <g transform="translate(155, 40)">
        <rect width="110" height="90" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="55" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#34d399">2. Flask Backend</text>
        <text x="55" y="50" text-anchor="middle" font-size="8" fill="#ffffff">@app.route</text>
        <text x="55" y="70" text-anchor="middle" font-size="8" fill="#fbbf24">request.form</text>
      </g>
      
      <path d="M 265 85 L 285 85" stroke="#f59e0b" stroke-width="2"/>
      
      <g transform="translate(285, 40)">
        <rect width="110" height="90" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="55" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#fbbf24">3. SQL Database</text>
        <text x="55" y="50" text-anchor="middle" font-size="8" fill="#ffffff">INSERT INTO</text>
        <text x="55" y="70" text-anchor="middle" font-size="8" fill="#f472b6">COMMIT</text>
      </g>
      
      <!-- Sınav İpuçları Paneli -->
      <g transform="translate(25, 160)">
        <rect width="370" height="110" rx="8" fill="#162038" stroke="#38bdf8" stroke-width="2"/>
        <text x="185" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">2. Dönem 1. Sınav Başarı Pusulası</text>
        <text x="20" y="55" font-size="10" fill="#cbd5e1">1. SQL sorgularında tablo ve sütun isimlerinin tam eşleştiğinden emin olun.</text>
        <text x="20" y="75" font-size="10" fill="#cbd5e1">2. Flask rotalarında HTTP metodunu belirtmeyi unutmayın: methods=['POST'].</text>
        <text x="20" y="95" font-size="10" fill="#cbd5e1">3. REST API sorularında JSON anahtar-değer (Key-Value) yapısına dikkat edin.</text>
      </g>
    </svg>''',
    "section1": {
      "title": "Klasik Yazılı Soru Örnekleri ve Analizi",
      "subtitle": "Sınavda tam puan getiren teknik detaylar ve çözüm yolları",
      "cards": [
        {
          "title": "Soru 1: SQL Tablo Tanımlama",
          "icon": "📝",
          "desc": "Adı `urunler` olan; `urun_id` (otomatik artan PK), `ad` (metin, boş olamaz) ve `stok` (tamsayı) alanlarını içeren SQL tablosunu yazınız.",
          "items": [
            { "bold": "Doğru Cevap", "text": "`CREATE TABLE urunler (urun_id INTEGER PRIMARY KEY AUTOINCREMENT, ad TEXT NOT NULL, stok INTEGER);`" }
          ]
        },
        {
          "title": "Soru 2: Flask Form Verisi Yakalama",
          "icon": "🌶️",
          "desc": "HTML formundaki `<input name=\"ogrenci_no\">` alanından gelen veriyi Flask fonksiyonunda hangi komutla alırız?",
          "items": [
            { "bold": "Doğru Cevap", "text": "`no = request.form.get('ogrenci_no')` komutuyla güvenle okunur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Uçtan Uca Mini Proje: Webden SQL'e Kayıt",
      "subtitle": "Formdan gelen öğrenciyi SQLite veritabanına ekleyen tam Flask kodu",
      "codeSnippet": "from flask import Flask, request, render_template, redirect\nimport sqlite3\n\napp = Flask(__name__)\n\n@app.route('/kaydet', methods=['POST'])\ndef ogrenci_kaydet():\n    ad = request.form.get('ad')\n    soyad = request.form.get('soyad')\n    puan = request.form.get('puan')\n    \n    # Veritabanına Bağlan ve Yaz\n    conn = sqlite3.connect('okul.db')\n    cursor = conn.cursor()\n    cursor.execute(\"\"\"\n        INSERT INTO ogrenciler (ad, soyad, puan) \n        VALUES (?, ?, ?)\n    \"\"\", (ad, soyad, puan))\n    conn.commit()\n    conn.close()\n    \n    return \"Kayıt başarıyla eklendi!\"\n\nif __name__ == '__main__':\n    app.run(debug=True)",
      "codeTitle": "sinav_provası_tam.py",
      "codeLang": "Python 3",
      "cards": [
        { "badge": "Hayati Detay", "title": "conn.commit() Neden Şart?", "desc": "Commit komutu verilmezse yapılan ekleme veritabanı diskine kaydedilmez; bağlantı kapanınca uçup gider.", "items": [{ "bold": "Parametreli Sorgu (?)", "text": "SQL Injection açığını engelleyen soru işaretli parametre yapısı sınavda tam puan kazandırır." }] }
      ]
    },
    "workshop": {
      "title": "Hata Bulma (Code Review) Yarışması",
      "subtitle": "İçinde bilerek 4 adet kritik hata bırakılmış Flask ve SQL kodunu tahtada düzeltme",
      "steps": [
        { "title": "1. Kodu İncele", "desc": "Tahtaya yansıtılan kodda syntax, commit eksikliği veya tırnak hatalarını bulun." },
        { "title": "2. Hata Sebebini Söyle", "desc": "Örn: 'methods=['POST'] yazılmadığı için form gönderilince 405 Method Not Allowed hatası verir'." },
        { "title": "3. Canlı Düzelt", "desc": "Öğretmen bilgisayarında kodu düzeltip çalışmasını doğrulayın." },
        { "title": "4. Puanını Al", "desc": "En hızlı doğru teşhisi koyan gruba sınav öncesi bonus motivasyon puanı." }
      ],
      "criteria": [
        "HTTP durum kodlarını (200 OK, 404 Not Found, 405 Method Not Allowed) tanıma",
        "SQL sözdizimi kurallarını (virgüller, parantezler, tipler) eksiksiz denetleme",
        "Takım çalışması ve analitik hata ayıklama hızı"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Günü Altın Kurallar",
      "safetyRules": [
        { "bold": "Sorunun 'Hangi Dilde' Olduğuna Bakın", "text": "Bazen öğrenciler JavaScript fetch() sorusuna Python yazabiliyor; sorulan dili dikkatle okuyun." },
        { "bold": "Noktalı Virgülleri Unutmayın", "text": "SQL ve JavaScript kodlarında satır sonlarına noktalı virgül koymak sözdizimi disiplinini gösterir." },
        { "bold": "Tablo İsimlerine Dikkat", "text": "`FROM ogrenci` mi yoksa `FROM ogrenciler` mi? Şemadaki tam adı yazın." }
      ],
      "myths": [
        { "wrong": "SELECT sorgusunda veriler tablodan silinir.", "correct": "SELECT sadece görüntüler, verilere hiçbir zarar vermez." },
        { "wrong": "Foreign Key tanımlamak performansı yavaşlatır.", "correct": "Aksine! İlişkileri indeksleyerek aramaları binlerce kat hızlandırır." }
      ]
    },
    "quiz": {
      "question": "Python'da `sqlite3` kütüphanesi kullanılırken yapılan bir `INSERT` işleminin veritabanı dosyasına kalıcı olarak kaydedilmesi için hangi fonksiyonun çağrılması zorunludur?",
      "options": [
        { "text": "A) cursor.save()", "isCorrect": False },
        { "text": "B) connection.commit()", "isCorrect": True },
        { "text": "C) cursor.push()", "isCorrect": False },
        { "text": "D) db.mühürle()", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `commit()` fonksiyonu o ana kadar yapılan veritabanı işlemlerini kalıcı olarak diske mühürler; commit edilmeyen işlemler bağlantı kesilince geri alınır (rollback)."
    },
    "summary": {
      "keyPoints": [
        "Web teknolojileri ve veritabanları modern yazılım mühendisliğinin iki ayrılmaz yarısıdır.",
        "Frontend'den gelen veri Backend (Flask) ile süzülür ve SQL ile güvenle saklanır.",
        "Sınavda sakin ve planlı kod yazan tüm öğrencilerimiz yüksek başarıyı yakalayacaktır!"
      ],
      "nextWeek": "İleri Düzey SQL: WHERE, GROUP BY & Tablo Birleştirme (JOIN)",
      "homework": "Sınav tekrarındaki örnek SQL ve Flask kodlarını kendi bilgisayarınızda baştan sona yazıp çalıştırınız."
    }
  },

  # 28. Hafta
  {
    "week": 28,
    "date": "22 - 28 Mart",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Veri Tabanı Mimarisi & SQL Programlama",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "İleri Düzey SQL: WHERE, GROUP BY & JOIN",
    "subtitle": "Filtreleme Operatörleri (WHERE, LIKE, BETWEEN, IN), Toplama Fonksiyonları (COUNT, SUM, AVG, MIN, MAX), Gruplama (GROUP BY, HAVING) ve Tablo Birleştirme (INNER JOIN, LEFT JOIN)",
    "outcomeCode": "BB.10.4.5",
    "targetSkill": "Çok Tablolu İlişkisel Veri Analizi & SQL JOIN Operasyonları",
    "curiosityQuestion": "Bankalar milyonlarca işlem arasından 'Geçen ay Ankara'da 5000 TL üzeri harcama yapan müşterilerin toplam tutarını' tek bir cümleyle nasıl hesaplar?",
    "roadmap": [
      { "title": "WHERE ile Hassas Filtreleme", "desc": "`LIKE '%Teknoloji%'`, `BETWEEN 50 AND 100` ve mantıksal `AND / OR` filtreleri." },
      { "title": "Toplama (Aggregate) Fonksiyonları", "desc": "`COUNT(*)` (sayı), `AVG(fiyat)` (ortalama), `SUM(adet)` (toplam)." },
      { "title": "GROUP BY & Gruplu Raporlama", "desc": "Her sınıfın veya her kategorinin ortalama puanlarını tek tabloda özetleme." },
      { "title": "INNER JOIN ile Tabloları Birleştirme", "desc": "Farklı tablolardaki ilişkili verileri Foreign Key üzerinden yan yana getirme." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2"/>
      
      <!-- Venn Diyagramı (INNER JOIN) -->
      <g transform="translate(110, 30)">
        <!-- Sol Daire (A Tablosu) -->
        <circle cx="70" cy="65" r="50" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
        <text x="45" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#38bdf8">Öğrenciler</text>
        
        <!-- Sağ Daire (B Tablosu) -->
        <circle cx="130" cy="65" r="50" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2"/>
        <text x="155" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#10b981">Notlar</text>
        
        <!-- Kesişim Bölgesi (INNER JOIN) -->
        <text x="100" y="68" text-anchor="middle" font-size="9" font-weight="bold" fill="#fbbf24">Eşleşenler</text>
      </g>
      
      <!-- JOIN Sorgusu Gösterimi -->
      <g transform="translate(30, 155)">
        <rect width="360" height="115" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="180" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">INNER JOIN Sözdizimi</text>
        <text x="20" y="48" font-family="monospace" font-size="10" fill="#38bdf8">SELECT ogrenciler.ad, notlar.ders, notlar.puan</text>
        <text x="20" y="68" font-family="monospace" font-size="10" fill="#ffffff">FROM ogrenciler</text>
        <text x="20" y="88" font-family="monospace" font-size="10" font-weight="bold" fill="#10b981">INNER JOIN notlar ON ogrenciler.id = notlar.ogrenci_id;</text>
      </g>
    </svg>''',
    "section1": {
      "title": "İlişkisel Tabloları Birleştirme: JOIN Türleri",
      "subtitle": "Farklı tablolardaki parçaları tek bir anlamsal raporda birleştirme",
      "cards": [
        {
          "title": "INNER JOIN vs LEFT JOIN",
          "icon": "🧩",
          "desc": "Veritabanında tablolar arası ilişki sorgulamalarının temeli:",
          "items": [
            { "bold": "INNER JOIN (Kesişim)", "text": "Sadece her iki tabloda da karşılığı olan kayıtları getirir. (Örn: Sadece en az 1 notu olan öğrencileri listeler)." },
            { "bold": "LEFT JOIN (Solu Koru)", "text": "Sol tablodaki TÜM öğrencileri getirir; henüz notu girilmemiş öğrencilerin not sütunu NULL görünür." },
            { "bold": "ON Şartı", "text": "Tabloların hangi anahtar üzerinden eşleşeceğini belirtir (`ON ogrenciler.id = notlar.ogrenci_id`)." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Gelişmiş Raporlama ve Gruplama Sorguları",
      "subtitle": "Her dersin ortalamasını ve öğrenci sayısını çıkaran profesyonel SQL",
      "codeSnippet": "-- Ders Bazında Başarı Raporu\nSELECT \n  ders,\n  COUNT(*) AS ogrenci_sayisi,\n  ROUND(AVG(puan), 1) AS sinif_ortalamasi,\n  MAX(puan) AS en_yuksek_not,\n  MIN(puan) AS en_dusuk_not\nFROM notlar\nWHERE puan >= 0\nGROUP BY ders\nHAVING AVG(puan) >= 50\nORDER BY sinif_ortalamasi DESC;",
      "codeTitle": "gelismis_rapor.sql",
      "codeLang": "SQL",
      "cards": [
        { "badge": "Fark", "title": "WHERE vs HAVING", "desc": "WHERE satırları tek tek filtreler (gruplamadan önce); HAVING ise GROUP BY sonucunda oluşan özet grupları filtreler.", "items": [{ "bold": "ROUND() Fonksiyonu", "text": "Ortalama sayısının ondalık basamağını yuvarlayarak temiz rapor üretir." }] }
      ]
    },
    "workshop": {
      "title": "E-Ticaret Satış Analitiği Dashboard'u",
      "subtitle": "Müşteriler, Siparişler ve Ürünler tablolarını JOIN yaparak 'En çok harcama yapan ilk 3 müşteri' sorgusunu yazma",
      "steps": [
        { "title": "1. Şemayı Yükle", "desc": "SQLite'ta Müşteriler ve Siparişler tablolarını örnek verilerle doldurun." },
        { "title": "2. INNER JOIN Kur", "desc": "Müşteri adı ile sipariş tutarını `ON musteri.id = siparis.musteri_id` ile eşleştirin." },
        { "title": "3. GROUP BY Yap", "desc": "Müşteri adına göre gruplayıp `SUM(tutar)` ile toplam harcamayı bulun." },
        { "title": "4. Sırala ve Sınırla", "desc": "`ORDER BY toplam DESC LIMIT 3;` ile podyuma çıkan 3 kişiyi listeleyin." }
      ],
      "criteria": [
        "INNER JOIN sözdizimini ve ON eşleştirme mantığını kusursuz uygulama",
        "Aggregate fonksiyonları (SUM, COUNT) GROUP BY ile doğru ilişkilendirme",
        "ORDER BY ve LIMIT filtreleriyle hedef analitik bilgiye ulaşma"
      ]
    },
    "tips": {
      "safetyTitle": "JOIN Yaparken Dikkat Edilecekler",
      "safetyRules": [
        { "bold": "ON Şartını Asla Unutmayın (Kartezyen Çarpım)", "text": "ON şartı yazılmazsa A tablosundaki her satır B tablosundaki her satırla eşleşir (1.000 x 1.000 = 1.000.000 satır oluşur ve sunucu çöker)." },
        { "bold": "Tablo Takma İsimleri (Alias) Kullanın", "text": "`FROM ogrenciler AS o INNER JOIN notlar AS n ON o.id = n.ogrenci_id` yazarak kod karmaşasını önleyin." },
        { "bold": "NULL Değerleri Hesaba Katın", "text": "LEFT JOIN yapıldığında eşleşmeyen sağ sütunlar NULL gelir; Python tarafında None kontrolü yapın." }
      ],
      "myths": [
        { "wrong": "En fazla iki tablo birleştirilebilir.", "correct": "Hayır! Bir sorguda zincirleme olarak 5, 10 veya daha fazla tablo birbiri ardına JOIN edilebilir." },
        { "wrong": "GROUP BY kullanmadan AVG() veya SUM() fonksiyonu yazılamaz.", "correct": "Yazılabilir! Eğer GROUP BY yazmazsanız tüm tablonun genel ortalamasını tek bir satır olarak verir." }
      ]
    },
    "quiz": {
      "question": "İki tabloyu birleştirirken her iki tabloda da ortak karşılığı bulunan kayıtların yanı sıra sol tablodaki eşleşmeyen kayıtları da kaybetmeden getiren JOIN türü hangisidir?",
      "options": [
        { "text": "A) INNER JOIN", "isCorrect": False },
        { "text": "B) LEFT JOIN (veya LEFT OUTER JOIN)", "isCorrect": True },
        { "text": "C) CROSS JOIN", "isCorrect": False },
        { "text": "D) DROP JOIN", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `LEFT JOIN`, sol tablodaki tüm satırları korur; sağ tabloda eşleşen bir kayıt yoksa o kısımları `NULL` olarak doldurur."
    },
    "summary": {
      "keyPoints": [
        "JOIN operasyonları ilişkisel veritabanlarının en büyük süper gücüdür.",
        "GROUP BY ve Toplama Fonksiyonları ham veriyi stratejik iş kararlarına dönüştürür.",
        "SQL sorgulama derinliğimiz arttıkça veri biliminin kapıları ardına kadar açılır."
      ],
      "nextWeek": "Python ile Veri Tabanı Entegrasyonu: SQLite3 & CRUD İşlemleri",
      "homework": "Kendi okuduğunuz kitaplar tablosunda sayfa sayısı 200'den büyük olanları sayfa sayısına göre azalan sıralayan SQL sorgusunu yazınız."
    }
  },

  # 29. Hafta
  {
    "week": 29,
    "date": "29 Mart - 04 Nisan",
    "hours": "2 Ders Saati",
    "unit": "4. Ünite: Veri Tabanı Mimarisi & SQL Programlama",
    "unitBadge": "4. Ünite",
    "unitTheme": "unite-4",
    "title": "Python ile Veritabanı Entegrasyonu: SQLite3 & CRUD",
    "subtitle": "Python sqlite3 Modülü, connect(), cursor(), execute(), executemany(), fetchone(), fetchall(), CRUD Operasyonları ve Parametreli Güvenli Sorgular",
    "outcomeCode": "BB.10.4.6",
    "targetSkill": "Python - Veritabanı Entegrasyonu & CRUD Yazılım Mimarisi",
    "curiosityQuestion": "Bir masaüstü veya konsol Python uygulamasında kullanıcının kaydettiği bilgiler program kapatılıp bilgisayar yeniden başlatılsa bile nasıl hiç kaybolmaz?",
    "roadmap": [
      { "title": "Gömülü Veritabanı: SQLite", "desc": "Ayrı bir sunucu kurulumu gerektirmeyen, tek bir `.db` dosyasında yaşayan hafif dev." },
      { "title": "Connection ve Cursor Mantığı", "desc": "Veritabanı tüneli açma (`connect`) ve komutları çalıştıran imleç (`cursor`)." },
      { "title": "CRUD Dörtlüsü", "desc": "Create (Ekle), Read (Oku), Update (Güncelle), Delete (Sil) işlemlerini Python fonksiyonlarına dökme." },
      { "title": "fetchall() ve Veri Çekme", "desc": "Veritabanından dönen satırları Python tuple ve liste yapılarıyla karşılama." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"/>
      
      <!-- Python Kodu -->
      <g transform="translate(30, 40)">
        <rect width="140" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="70" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#38bdf8">Python Betiği</text>
        <text x="70" y="50" text-anchor="middle" font-size="9" font-family="monospace" fill="#ffffff">import sqlite3</text>
        <text x="70" y="70" text-anchor="middle" font-size="8" font-family="monospace" fill="#a7f3d0">cursor.execute()</text>
      </g>
      
      <!-- Bağlantı Tüneli -->
      <path d="M 170 85 L 245 85" stroke="#f59e0b" stroke-width="3"/>
      <polygon points="245,85 235,80 235,90" fill="#f59e0b"/>
      <text x="210" y="75" text-anchor="middle" font-size="9" font-weight="bold" fill="#fbbf24">cursor</text>
      <text x="210" y="102" text-anchor="middle" font-size="8" fill="#94a3b8">commit()</text>

      <!-- SQLite Dosyası -->
      <g transform="translate(250, 40)">
        <rect width="140" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="70" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">veritabani.db</text>
        <text x="70" y="55" text-anchor="middle" font-size="22">💾</text>
        <text x="70" y="78" text-anchor="middle" font-size="8" fill="#cbd5e1">Tek Dosya RDBMS</text>
      </g>
      
      <!-- CRUD Şeması -->
      <g transform="translate(30, 160)">
        <rect width="360" height="110" rx="8" fill="#162038" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="20" y="20" width="70" height="30" rx="4" fill="#047857"/><text x="55" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">C: INSERT</text>
        <rect x="105" y="20" width="70" height="30" rx="4" fill="#0369a1"/><text x="140" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">R: SELECT</text>
        <rect x="190" y="20" width="70" height="30" rx="4" fill="#b45309"/><text x="225" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">U: UPDATE</text>
        <rect x="275" y="20" width="70" height="30" rx="4" fill="#b91c1c"/><text x="310" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">D: DELETE</text>
        <text x="180" y="85" text-anchor="middle" font-size="10" fill="#cbd5e1">Tüm yazılımların %90'ı bu 4 temel veritabanı işleminden oluşur.</text>
      </g>
    </svg>''',
    "section1": {
      "title": "Python sqlite3 Modülü ve İşlem Mimarisi",
      "subtitle": "Kütüphane kurmaya gerek kalmadan standart Python ile SQL gücü",
      "cards": [
        {
          "title": "Adım Adım Veritabanı Döngüsü",
          "icon": "🐍",
          "desc": "Python'da bir veritabanı işlemi her zaman şu 5 adımı izler:",
          "items": [
            { "bold": "1. Bağlan (Connect)", "text": "`conn = sqlite3.connect('okul.db')` ile dosya açılır (yoksa sıfırdan oluşturulur)." },
            { "bold": "2. İmleç Al (Cursor)", "text": "`cursor = conn.cursor()` ile sorguları yürütecek araç alınır." },
            { "bold": "3. Çalıştır (Execute)", "text": "`cursor.execute(sql_sorgusu, parametreler)` ile komut verilir." },
            { "bold": "4. Mühürle (Commit)", "text": "Veri değişikliği varsa `conn.commit()` ile diske mühürlenir." },
            { "bold": "5. Kapat (Close)", "text": "Kaynak sızıntısını önlemek için `conn.close()` yapılır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Tam Teşekküllü CRUD Yöneticisi Sınıfı",
      "subtitle": "Nesne yönelimli programlama ile veritabanını kapsülleme",
      "codeSnippet": "import sqlite3\n\nclass VeritabaniYoneticisi:\n    def __init__(self, db_adi=\"rehber.db\"):\n        self.db_adi = db_adi\n        self.tablo_kur()\n        \n    def baglanti(self):\n        return sqlite3.connect(self.db_adi)\n        \n    def tablo_kur(self):\n        with self.baglanti() as conn:\n            conn.execute(\"\"\"\n                CREATE TABLE IF NOT EXISTS kisiler (\n                    id INTEGER PRIMARY KEY AUTOINCREMENT,\n                    ad TEXT NOT NULL,\n                    telefon TEXT UNIQUE NOT NULL\n                )\n            \"\"\")\n            \n    def kisi_ekle(self, ad, telefon):\n        with self.baglanti() as conn:\n            conn.execute(\"INSERT INTO kisiler (ad, telefon) VALUES (?, ?)\", (ad, telefon))\n            \n    def kisileri_listele(self):\n        with self.baglanti() as conn:\n            cursor = conn.cursor()\n            cursor.execute(\"SELECT * FROM kisiler ORDER BY ad ASC\")\n            return cursor.fetchall()\n\n# Test\nyonetici = VeritabaniYoneticisi()\nyonetici.kisi_ekle(\"Zeynep Demir\", \"05551112233\")\nfor k in yonetici.kisileri_listele():\n    print(f\"ID: {k[0]} | İsim: {k[1]} | Tel: {k[2]}\")",
      "codeTitle": "crud_manager.py",
      "codeLang": "Python 3",
      "cards": [
        { "badge": "İleri Teknik", "title": "Context Manager (with conn:)", "desc": "Bağlantıyı `with` bloğu içinde açmak, işlem bitince otomatik commit eder ve hata durumunda geri alır (rollback).", "items": [{ "bold": "fetchall()", "text": "Sorgu sonucundaki tüm satırları Python demetleri (tuple) içeren bir liste olarak döner." }] }
      ]
    },
    "workshop": {
      "title": "Konsol Tabanlı Öğrenci İşleri Otomasyonu",
      "subtitle": "Kullanıcının terminalden yeni öğrenci ekleyebildiği, listeleyebildiği ve silebildiği interaktif Python menüsü kodlama",
      "steps": [
        { "title": "1. Menü Döngüsü Kur", "desc": "`while True:` döngüsüyle '1-Ekle, 2-Listele, 3-Sil, 4-Çıkış' seçeneklerini sunun." },
        { "title": "2. Ekleme Fonksiyonu", "desc": "Kullanıcıdan input alıp parametreli sorguyla `INSERT INTO` yapın." },
        { "title": "3. Listeleme Fonksiyonu", "desc": "`SELECT * FROM ogrenciler` çıktısını şık bir tablo formatında ekrana yazdırın." },
        { "title": "4. Silme Fonksiyonu", "desc": "Girilen ID numarasına göre `DELETE FROM ogrenciler WHERE id = ?` komutunu çalıştırın." }
      ],
      "criteria": [
        "sqlite3 modülü fonksiyonlarını hatasız ve güvenli syntax ile kullanma",
        "Kullanıcı girdilerini parametreli tuple `(ad, no)` formatında execute etme",
        "Hatalı girdilerde programın çökmesini try-except bloklarıyla engelleme"
      ]
    },
    "tips": {
      "safetyTitle": "Veritabanı Entegrasyon Güvenliği",
      "safetyRules": [
        { "bold": "execute() İçinde Asla f-string Kullanmayın", "text": "`cursor.execute(f\"... WHERE ad='{ad}'\")` yazmak doğrudan SQL Injection davetiyesidir; mutlaka `(?, ?)` kullanın." },
        { "bold": "Bağlantıyı Kapatmayı (close) Unutmayın", "text": "Kapatılmayan bağlantılar arka planda dosya kilidi (database is locked) hatasına yol açar." },
        { "bold": "fetchall() Bellek Tüketimi", "text": "Milyonlarca satırlı sorgularda `fetchall()` tüm belleği doldurabilir; satır satır işlemek için `fetchone()` veya döngü kullanın." }
      ],
      "myths": [
        { "wrong": "SQLite sadece bir oyuncaktır, gerçek dünyada kimse kullanmaz.", "correct": "Dünyada en çok kopyası çalışan veritabanı SQLite'tır! Her Android ve iPhone telefonda, her Chrome ve Safari tarayıcısında onlarca SQLite veritabanı koşar." },
        { "wrong": "Python'da veritabanına bağlanmak için harici bir SQL sunucusu kurmak şarttır.", "correct": "sqlite3 Python standart kütüphanesine dahildir; harici hiçbir sunucuya veya kuruluma ihtiyaç duymaz." }
      ]
    },
    "quiz": {
      "question": "Python `sqlite3` kütüphanesinde bir `SELECT` sorgusunun getirdiği tüm sonuç satırlarını Python listesi olarak çekmek için hangi fonksiyon kullanılır?",
      "options": [
        { "text": "A) cursor.get_all()", "isCorrect": False },
        { "text": "B) cursor.fetchall()", "isCorrect": True },
        { "text": "C) connection.read_lines()", "isCorrect": False },
        { "text": "D) cursor.fetch_table()", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `cursor.fetchall()` sorgu sonucundaki tüm satırları demetlerden oluşan bir liste `[(1, 'Ali'), (2, 'Ayşe')]` halinde döndürür."
    },
    "summary": {
      "keyPoints": [
        "SQLite hafifliği ve kurulumsuz yapısıyla masaüstü ve gömülü projelerin kralıdır.",
        "CRUD döngüsü bir yazılımcının en çok yazacağı temel veri işlemlerini kapsar.",
        "Parametreli sorgular yazılımımızı siber saldırılara karşı çelik gibi korur."
      ],
      "nextWeek": "Veri Bilimi ve Yapay Zekâya Giriş: Büyük Veri & Python NumPy Kütüphanesi",
      "homework": "Kendi oluşturduğunuz `rehber.db` veritabanından ada göre telefon numarası güncelleyen (UPDATE) bir Python fonksiyonu yazınız."
    }
  },

  # 30. Hafta
  {
    "week": 30,
    "date": "05 - 11 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Veri Bilimi, Makine Öğrenmesi & Yapay Zekâ",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Veri Bilimi ve Yapay Zekâya Giriş: Python NumPy",
    "subtitle": "Büyük Veri (Big Data) Çağı, Yapay Zekânın Matematiksel Temeli (Lineer Cebir & Matrisler), NumPy ndarray Yapısı, Vektörel İşlemler ve Hız Karşılaştırması",
    "outcomeCode": "BB.10.5.1",
    "targetSkill": "Vektörel Hesaplama & Çok Boyutlu Dizi (Tensor) Yönetimi",
    "curiosityQuestion": "Yapay zekâ modelleri ChatGPT veya otonom araçlar bir fotoğrafı veya metni nasıl sadece sayılardan oluşan devasa bir matris olarak 'görür'?",
    "roadmap": [
      { "title": "Büyük Veri ve Yapay Zekâ İlişkisi", "desc": "Veri olmadan yapay zekâ öğrenemez; modeller trilyonlarca sayının matris çarpımıyla eğitilir." },
      { "title": "NumPy (Numerical Python) Nedir?", "desc": "C dilinde yazılmış, standart Python listelerinden 50 kat daha hızlı çalışan matematik motoru." },
      { "title": "ndarray ve Boyutlar (Dimensions)", "desc": "1B Vektörler, 2B Matrisler ve 3B Görsel Tensörleri oluşturma ve şekillendirme (`reshape`)." },
      { "title": "Vektörel İşlemler (Broadcasting)", "desc": "Döngü (for) yazmadan milyonlarca sayıyı tek satırda birbiriyle toplama ve çarpma sanatı." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(56, 189, 248, 0.3)" stroke-width="2"/>
      
      <!-- 2B Matris Gösterimi -->
      <g transform="translate(40, 35)">
        <rect width="150" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="75" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#38bdf8">2B NumPy Matrisi (3x3)</text>
        
        <text x="35" y="55" font-family="monospace" font-size="12" fill="#ffffff">1   2   3</text>
        <text x="35" y="78" font-family="monospace" font-size="12" fill="#ffffff">4   5   6</text>
        <text x="35" y="101" font-family="monospace" font-size="12" fill="#ffffff">7   8   9</text>
      </g>
      
      <!-- Vektörel Çarpım -->
      <text x="210" y="95" text-anchor="middle" font-size="22" font-weight="bold" fill="#f59e0b">* 2 =</text>
      
      <g transform="translate(240, 35)">
        <rect width="145" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="72" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">Sonuç Matrisi (Broadcasting)</text>
        
        <text x="30" y="55" font-family="monospace" font-size="12" fill="#a7f3d0">2   4   6</text>
        <text x="30" y="78" font-family="monospace" font-size="12" fill="#a7f3d0">8  10  12</text>
        <text x="30" y="101" font-family="monospace" font-size="12" fill="#a7f3d0">14  16  18</text>
      </g>
      
      <!-- Performans Karşılaştırması -->
      <g transform="translate(40, 165)">
        <rect width="345" height="105" rx="8" fill="#162038" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="172" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">1 Milyon Sayı Toplama Hız Testi</text>
        <text x="25" y="52" font-size="10" fill="#fca5a5">Standart Python Listesi (for döngüsü): ~ 120 ms</text>
        <text x="25" y="75" font-size="10" font-weight="bold" fill="#86efac">NumPy ndarray (C düzeyinde vektörel): ~ 2 ms (60 Kat Hızlı!)</text>
        <text x="172" y="96" text-anchor="middle" font-size="8" fill="#94a3b8">Bitişik bellek (contiguous memory) ve SIMD işlemci komutları kullanılır.</text>
      </g>
    </svg>''',
    "section1": {
      "title": "Neden Standart Liste Değil de NumPy?",
      "subtitle": "Yapay zekâ ve veri biliminin donanımsal hızlanma sırrı",
      "cards": [
        {
          "title": "Bitişik Bellek ve Homojen Veri",
          "icon": "⚡",
          "desc": "Standart Python listeleri her eleman için ayrı işaretçi (pointer) tutar; NumPy ise tüm diziyi bellekte yan yana kilitler.",
          "items": [
            { "bold": "Homojen Tip", "text": "NumPy dizisindeki tüm elemanlar aynı tiptedir (Örn: `int32` veya `float64`); tip kontrolüyle vakit kaybetmez." },
            { "bold": "SIMD Desteği", "text": "Modern işlemcilerin tek bir saat çevriminde 8 sayıyı aynı anda çarpmasını (Single Instruction Multiple Data) sağlar." },
            { "bold": "Vektörizasyon", "text": "`dizi * 2` komutu arkada döngü yazmadan C seviyesinde paralel koşar." }
          ]
        }
      ]
    },
    "section2": {
      "title": "NumPy Dizi Operasyonları ve İstatistik",
      "subtitle": "Yapay zekâ modellerinde kullanılan temel dizi matematiği",
      "codeSnippet": "import numpy as np\n\n# 1. 2 Boyutlu Dizi (Matris) Oluştur\nmatris = np.array([\n    [10, 20, 30],\n    [40, 50, 60],\n    [70, 80, 90]\n])\n\nprint(\"Matris Şekli (Shape):\", matris.shape) # (3, 3)\nprint(\"Boyut Sayısı (ndim):\", matris.ndim)    # 2\n\n# 2. Vektörel İşlemler (Broadcasting)\nkareler = matris ** 2\nprint(\"Tüm Elemanların Karesi:\\n\", kareler)\n\n# 3. İstatistiksel Analiz\nprint(\"Genel Ortalama:\", np.mean(matris))\nprint(\"Standart Sapma:\", np.std(matris))\nprint(\"En Büyük Değer:\", np.max(matris))\nprint(\"Sütun Bazında Toplam (axis=0):\", np.sum(matris, axis=0))",
      "codeTitle": "numpy_temelleri.py",
      "codeLang": "Python 3 (NumPy)",
      "cards": [
        { "badge": "Kritik Kavram", "title": "axis (Eksen) Mantığı", "desc": "`axis=0` sütunlar boyunca dikey toplar; `axis=1` satırlar boyunca yatay toplar.", "items": [{ "bold": "reshape()", "text": "1x9'luk bir vektörü `matris.reshape(3, 3)` yaparak anında 2 boyutlu matrise dönüştürür." }] }
      ]
    },
    "workshop": {
      "title": "Dijital Görseli Matris Olarak Temsil Etme",
      "subtitle": "5x5 piksellik siyah-beyaz bir gülen yüz emojisini NumPy 0 ve 255 piksel matrisiyle oluşturup ekrana yazdırma",
      "steps": [
        { "title": "1. NumPy'ı İçe Aktar", "desc": "Terminalden `pip install numpy` yapıp kodda `import numpy as np` yazın." },
        { "title": "2. 5x5 Sıfır Matrisi Aç", "desc": "`resim = np.zeros((5, 5), dtype=int)` ile tamamen siyah bir tuval yaratın." },
        { "title": "3. Pikselleri Beyaz Yap", "desc": "Göz ve ağız koordinatlarına `255` değerini atayarak gülen yüz çizin." },
        { "title": "4. Ekranda İncele", "desc": "Matrisi ekrana bastırıp sayayların nasıl bir görsele dönüştüğünü gözlemleyin." }
      ],
      "criteria": [
        "NumPy ndarray dizilerini ve shape özelliklerini doğru kurgulama",
        "İki boyutlu indeksleme `matris[satir, sutun]` mantığını hatasız kullanma",
        "Vektörel işlemlerin döngülere göre hız üstünlüğünü açıklayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "NumPy Kullanırken Püf Noktaları",
      "safetyRules": [
        { "bold": "Dizi Kopyalama Tuzağı (View vs Copy)", "text": "`b = a` derseniz b'deki değişiklik a'yı da bozar; bağımsız kopya için mutlaka `b = a.copy()` kullanın." },
        { "bold": "Veri Tipi Taşması (Overflow)", "text": "`int8` tipi -128 ile 127 arasındadır; 130 yazarsanız taşma yapar ve eksiye döner. Uygun `dtype` seçin." },
        { "bold": "Python Döngülerinden Kaçının", "text": "NumPy kullanırken for döngüsü yazıyorsanız muhtemelen yanlış yapıyorsunuzdur; vektörel fonksiyonları araştırın." }
      ],
      "myths": [
        { "wrong": "NumPy sadece matematikle ilgilenen akademisyenler içindir.", "correct": "NumPy; görüntü işleme (OpenCV), veri analizi (Pandas) ve derin öğrenme (TensorFlow, PyTorch) dahil tüm yapay zekânın temel harcıdır." },
        { "wrong": "NumPy dizisine farklı tiplerde (örn: hem metin hem sayı) eleman konulabilir.", "correct": "Koyarsanız NumPy tüm sayıları da otomatik metne dönüştürür ve matematiksel yeteneklerini kaybeder; diziler saf homojendir." }
      ]
    },
    "quiz": {
      "question": "NumPy'da 12 elemanlı tek boyutlu bir diziyi 3 satır ve 4 sütunlu bir matrise dönüştürmek için hangi fonksiyon kullanılır?",
      "options": [
        { "text": "A) dizi.resize_matrix(3, 4)", "isCorrect": False },
        { "text": "B) dizi.reshape(3, 4)", "isCorrect": True },
        { "text": "C) dizi.convert(3, 4)", "isCorrect": False },
        { "text": "D) dizi.split(3, 4)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `reshape(satir, sutun)` metodu, eleman sayısı uyuştuğu sürece (3 * 4 = 12) dizinin boyutlarını ve şeklini yeniden yapılandırır."
    },
    "summary": {
      "keyPoints": [
        "NumPy yapay zekâ çağının hesaplama omurgası ve matematik dilidir.",
        "ndarray dizileri bitişik bellek ve vektörizasyon sayesinde standart listelerden katbekat hızlıdır.",
        "Matrisler yapay zekânın dünyayı anlama biçimidir; her resim, ses ve metin bir tensördür."
      ],
      "nextWeek": "Pandas ile Veri Analitiği: DataFrame, CSV Okuma, Temizleme & Filtreleme",
      "homework": "NumPy ile 1'den 100'e kadar olan sayılardan oluşan bir dizi yaratıp sadece çift olanların ortalamasını tek satırda bulunuz."
    }
  },

  # 31. Hafta
  {
    "week": 31,
    "date": "12 - 18 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: Veri Bilimi, Makine Öğrenmesi & Yapay Zekâ",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Pandas ile Veri Analitiği & Tablo İşleme",
    "subtitle": "Veri Biliminde Pandas Kütüphanesi, Series ve DataFrame Yapısı, read_csv(), Veri Keşfi (head, info, describe), Eksik Veri (NaN) Yönetimi ve Filtreleme",
    "outcomeCode": "BB.10.5.2",
    "targetSkill": "Veri Analitiği, Temizleme & DataFrame Manipülasyonu",
    "curiosityQuestion": "Milyonlarca satırlık bir deprem veya iklim verisinde eksik, bozuk ve hatalı ölçümleri yazılımla tek hamlede nasıl temizlersiniz?",
    "roadmap": [
      { "title": "NumPy'dan Pandas'a Geçiş", "desc": "Sayılardan oluşan matrislere sütun isimleri ve satır indeksleri ekleyerek Excel'den güçlü bir tablo gücü kazanma." },
      { "title": "DataFrame ve Series", "desc": "Pandas'ın 2 boyutlu tablosu (DataFrame) ve tek bir sütunu (Series)." },
      { "title": "CSV ve Excel Dosyası Okuma", "desc": "`pd.read_csv('veri.csv')` ile dış dünyadaki açık veri setlerini içeri aktarma." },
      { "title": "Veri Temizleme & Eksik Değerler", "desc": "Boş (`NaN`) hücreleri tespit etme (`isna()`), silme (`dropna()`) veya ortalamayla doldurma (`fillna()`)." }
    ],
    "roadmapSvg": '''<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="300" rx="14" fill="#0c1322" stroke="rgba(16, 185, 129, 0.3)" stroke-width="2"/>
      
      <!-- Pandas DataFrame Tablosu -->
      <g transform="translate(30, 35)">
        <rect width="360" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="180" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">Pandas DataFrame Mimarisi</text>
        
        <!-- Sütun Başlıkları -->
        <rect x="20" y="38" width="50" height="22" fill="#0f172a"/><text x="45" y="53" text-anchor="middle" font-size="9" fill="#94a3b8">Index</text>
        <rect x="75" y="38" width="90" height="22" fill="#047857"/><text x="120" y="53" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Sehir (Series)</text>
        <rect x="170" y="38" width="90" height="22" fill="#047857"/><text x="215" y="53" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Sicaklik</text>
        <rect x="265" y="38" width="80" height="22" fill="#047857"/><text x="305" y="53" text-anchor="middle" font-size="9" font-weight="bold" fill="#ffffff">Nem</text>
        
        <!-- Satır 1 -->
        <text x="45" y="80" text-anchor="middle" font-size="9" fill="#94a3b8">0</text>
        <text x="120" y="80" text-anchor="middle" font-size="9" fill="#ffffff">Ankara</text>
        <text x="215" y="80" text-anchor="middle" font-size="9" fill="#fbbf24">22.4</text>
        <text x="305" y="80" text-anchor="middle" font-size="9" fill="#38bdf8">45</text>
        
        <!-- Satır 2 -->
        <text x="45" y="105" text-anchor="middle" font-size="9" fill="#94a3b8">1</text>
        <text x="120" y="105" text-anchor="middle" font-size="9" fill="#ffffff">İstanbul</text>
        <text x="215" y="105" text-anchor="middle" font-size="9" fill="#ef4444">NaN (Boş!)</text>
        <text x="305" y="105" text-anchor="middle" font-size="9" fill="#38bdf8">70</text>
      </g>
      
      <!-- Veri Temizleme İpuçları -->
      <g transform="translate(30, 170)">
        <rect width="360" height="95" rx="8" fill="#162038" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="180" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#38bdf8">Veri Temizleme &amp; Filtreleme Metotları</text>
        <text x="20" y="50" font-family="monospace" font-size="10" fill="#a7f3d0">• df.dropna(): Boş (NaN) satırları tablodan atar.</text>
        <text x="20" y="70" font-family="monospace" font-size="10" fill="#fbbf24">• df.fillna(df.mean()): Boş hücreleri sütun ortalamasıyla doldurur.</text>
        <text x="20" y="90" font-family="monospace" font-size="10" fill="#38bdf8">• df[df['Sicaklik'] > 20]: Sıcaklığı 20'den büyük olanları filtreler.</text>
      </g>
    </svg>''',
    "section1": {
      "title": "Veri Bilimcinin Günlük Hayatı: %80 Veri Temizleme",
      "subtitle": "Gerçek dünya verileri daima gürültülü, eksik ve hatalıdır",
      "cards": [
        {
          "title": "Garbage In, Garbage Out (Çöp Girerse Çöp Çıkar)",
          "icon": "🧹",
          "desc": "Yapay zekâ modeline hatalı ve eksik veri verirseniz en mükemmel algoritma bile saçma sonuçlar üretir.",
          "items": [
            { "bold": "df.head(5)", "text": "Milyonlarca satırlık tablonun ilk 5 satırını hızlıca önizler." },
            { "bold": "df.info()", "text": "Hangi sütunda kaç tane boş değer olduğunu ve bellek kullanımını raporlar." },
            { "bold": "df.describe()", "text": "Sayısal sütunların ortalamasını, çeyrekliklerini ve uç değerlerini tek tabloda özetler." }
          ]
        }
      ]
    },
    "section2": {
      "title": "CSV Dosyası Analiz ve Filtreleme Kodu",
      "subtitle": "Gerçek bir veri setini okuyup temizleyen ve filtreleyen Pandas betiği",
      "codeSnippet": "import pandas as pd\n\n# 1. CSV Dosyasını İçe Aktar\ndf = pd.read_csv('ogrenci_notlari.csv')\n\nprint(\"Veri Seti Boyutu:\", df.shape)\nprint(\"\\n--- İlk 3 Satır ---\")\nprint(df.head(3))\n\n# 2. Eksik Veri Analizi\nprint(\"\\nBoş Değer Sayıları:\\n\", df.isna().sum())\n\n# Eksik notları sınıf ortalamasıyla doldur\nortalama = df['not'].mean()\ndf['not'].fillna(ortalama, inplace=True)\n\n# 3. İleri Düzey Filtreleme\n# 10. Sınıf olan ve Notu 85'ten büyük öğrenciler\nbasarili_ogrenciler = df[(df['sinif'] == 10) & (df['not'] >= 85)]\nprint(\"\\n10. Sınıf Başarılı Öğrenciler:\\n\", basarili_ogrenciler[['ad', 'not']])\n\n# 4. Şehirlere Göre Ortalama Not Hesabı\nprint(\"\\nŞehir Bazında Başarı:\")\nprint(df.groupby('sehir')['not'].mean().round(1))",
      "codeTitle": "pandas_analiz.py",
      "codeLang": "Python 3 (Pandas)",
      "cards": [
        { "badge": "Sözdizimi", "title": "& (Ve) ve | (Veya) Operatörleri", "desc": "Pandas filtrelemelerinde Python'ın `and` / `or` kelimeleri yerine mantıksal bit operatörleri (`&`, `|`) kullanılır ve her koşul paranteze alınır.", "items": [{ "bold": "inplace=True", "text": "Değişikliği yeni bir kopya oluşturmadan doğrudan mevcut tablonun üzerine işler." }] }
      ]
    },
    "workshop": {
      "title": "Açık Veri Portalı İnceleme Atölyesi",
      "subtitle": "Kaggle veya İBB Açık Veri Portalından indirilen gerçek bir meteoroloji/trafik CSV veri setini Pandas ile analiz etme",
      "steps": [
        { "title": "1. Veri İndir", "desc": "Açık veri portalından 500+ satırlık bir CSV dosyası (Örn: `hava_durumu.csv`) indirin." },
        { "title": "2. df.info() Çalıştır", "desc": "Hangi sütunlarda eksik veri (NaN) olduğunu tespit edin." },
        { "title": "3. Temizle", "desc": "Kritik boşlukları `dropna()` veya `fillna()` ile temizleyin." },
        { "title": "4. Cevap Bul", "desc": "'En sıcak gün hangi tarihteydi?' ve 'Rüzgar hızı ortalaması kaçtır?' sorularını Pandas kodlarıyla yanıtlayın." }
      ],
      "criteria": [
        "Pandas DataFrame yapısını ve sütun indekslemelerini doğru kullanma",
        "Eksik verileri (NaN) uygun stratejiyle temizleme becerisi",
        "groupby() ve filtreleme mekanizmalarıyla analitik çıkarım yapabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Pandas Hataları ve Performans",
      "safetyRules": [
        { "bold": "SettingWithCopyWarning Uyarısı", "text": "Filtrelenmiş bir alt tablonun hücresini doğrudan değiştirmeye çalışırsanız uyarı verir; `.copy()` veya `.loc[]` kullanın." },
        { "bold": "Tarih Sütunlarını Datetime'a Çevirin", "text": "CSV'den okunan tarihler varsayılan olarak metindir (string); `pd.to_datetime(df['tarih'])` yapmazsanız tarihe göre sıralayamazsınız." },
        { "bold": "Satır Satır Döngü (iterrows) Kurmayın", "text": "Pandas'ta `for index, row in df.iterrows():` yazmak sistemi 100 kat yavaşlatır; vektörel fonksiyonları tercih edin." }
      ],
      "myths": [
        { "wrong": "Pandas sadece küçük veri setleri içindir.", "correct": "Pandas milyonlarca satırı bellek yettiği sürece saniyeler içinde işler; daha büyük veriler için Dask ve Spark kullanılır." },
        { "wrong": "Boş hücreleri (NaN) her zaman doğrudan silmek en doğrusudur.", "correct": "Eğer veri seti kısıtlıysa satırları silmek değerli bilgiyi yok edebilir; ortalama veya medyan ile doldurmak (imputation) daha doğrudur." }
      ]
    },
    "quiz": {
      "question": "Bir Pandas DataFrame tablosundaki tüm boş ve eksik (NaN) değerlerin yerine 0 yazmak için hangi fonksiyon kullanılır?",
      "options": [
        { "text": "A) df.clean_zeros()", "isCorrect": False },
        { "text": "B) df.fillna(0)", "isCorrect": True },
        { "text": "C) df.replace_null(0)", "isCorrect": False },
        { "text": "D) df.dropna(0)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `df.fillna(0)` fonksiyonu tablodaki tüm eksik ve tanımsız (`NaN`) hücreleri parantez içindeki değerle (0) doldurur."
    },
    "summary": {
      "keyPoints": [
        "Pandas veriyi anlamlandıran, temizleyen ve yapay zekâya hazırlayan dijital büyüteçtir.",
        "DataFrame tabloları gerçek dünyadaki Excel ve SQL verilerini Python'a taşır.",
        "Veri analitiği becerisi modern bilişim çağının en çok aranan 1 numaralı yetkinliğidir."
      ],
      "nextWeek": "Veri Görselleştirme: Matplotlib ile Çizgi, Sütun ve Dağılım Grafikleri",
      "homework": "Kendi haftalık ders çalışma sürelerinizi (Ders, Gün, Saat) içeren küçük bir DataFrame oluşturup ders bazında toplam saatleri hesaplayınız."
    }
  }
]

print("10. Sınıf Part 3 (Hafta 20-31) başarıyla hazırlandı. Hafta sayısı:", len(WEEKS_20_31))
