# Keskin Erkek Kuaförü & VIP Grooming Lounge

[![Live Demo](https://img.shields.io/badge/Status-Active-00ff87?style=for-the-badge)](http://localhost:4321)
[![Design](https://img.shields.io/badge/Design-Glassmorphism%20%26%20Neon-00ff87?style=for-the-badge)](styles.css)
[![Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-0284c7?style=for-the-badge)](index.html)

> **"Kusursuz Kesim, Benzersiz Duruş."**  
> Geleneksel berber sanatını fütüristik lüks, modern saç-sakal tasarımı ve kişiye özel VIP bakım protokolleriyle birleştiren yeni nesil erkek kuaförü web uygulaması.

---

## ✂️ Proje Özeti & Vizyon

**Keskin Erkek Kuaförü**, Dribbble ve Behance standartlarında ödüllü bir görsel dille tasarlanmış; Apple ve Google tasarım ilkelerine (Human Interface Guidelines & Material Design) tam uyumlu, koyu tema (obsidyen siyahı & titanyum), yarı saydam cam efekti (*glassmorphism*), neon zümrüt yeşili vurgular ve fütüristik atmosferiyle misafirlerine lüks bir salon deneyimi sunan responsive bir web platformudur.

---

## 💎 Temel Özellikler & Fonksiyonlar

1. **İnteraktif 4 Aşamalı Online Randevu Motoru (Interactive Booking Engine)**:
   - **Adım 1 (Hizmet Seçimi):** Çoklu hizmet seçimi, anlık süre ve sepet tutarı hesaplama.
   - **Adım 2 (Berber Seçimi):** Kurucu Vahit Keskin, Murat Kaya, Can Demir veya "İlk Müsait Usta" seçeneği.
   - **Adım 3 (Tarih & Saat):** Dinamik 7 günlük takvim karuseli ve müsaitlik etiketli saat slotları.
   - **Adım 4 (İletişim & Onay):** Misafir bilgileri doğrulaması, randevu özeti ve tek tıkla **Doğrudan WhatsApp'a Hazır Formatlı Randevu Mesajı** oluşturma.
   - *LocalStorage* ile tarayıcıda randevu verisi saklama.

2. **Dinamik Çalışma Saati Durum Rozeti (Live Open/Closed Status)**:
   - Haftanın gününe ve anlık saate göre dinamik olarak hesaplanan canlı `"Şu An Açık (21:00'a kadar)"` / `"Şu An Kapalı"` rozeti.

3. **Çift Dilli Altyapı (TR / EN Language Switcher)**:
   - Tek tıkla tüm sayfayı anında Türkçe ve İngilizce arasında çeviren lightweight dil motoru (yabancı ve expat müşteriler için optimize).

4. **Sentezlenmiş Web Audio Berber Makas Efekti (Ambient Sound FX)**:
   - Harici ses dosyası yükleme ihtiyacı olmadan, tarayıcının Web Audio API'si ile gerçek zamanlı olarak sentezlenen zarif buton ve makas tıklama sesi (opsiyonel açma/kapama desteği).

5. **Kategorize Edilmiş Hizmet & Şeffaf Fiyat Listesi**:
   - Tümü, Saç Tasarımı, Sakal & Ustura, VIP Bakım Paketleri, Cilt & Spa filtreleme sekmeleri.
   - Fiyat kartlarından doğrudan randevu sepetine hizmet ekleme (`Randevuya Ekle`).

6. **Usta Berberlerimiz & Birebir Randevu**:
   - Berber profilleri, uzmanlık alanları, biyografiler ve doğrudan o ustadan randevu alma butonu.

7. **Fütüristik Stil & Salon Galerisi (Lightbox Zoom)**:
   - Filtrelenebilir portföy ve yerleşik HTML5 `<dialog>` lightbox tam ekran görsel görüntüleme.

8. **Google Doğrulanmış Müşteri Yorumları & Puanı**:
   - 4.9 / 5.0 Google değerlendirme kartları ve doğrulanmış misafir geri bildirimleri.

9. **İnteraktif Lokasyon Haritası & Sıkça Sorulan Sorular**:
   - Nişantaşı lokasyonu, özel koyu tema filtreli harita, vale bilgisi ve akordiyon SSS.

10. **Hızlı Erişim Yüzen Aksiyon Butonları (Floating Action Bar)**:
    - WhatsApp Canlı Destek, Hızlı Randevu ve Sayfa Başına Dön (Back to Top) butonları.

---

## 🎨 Tasarım Sistemi & Renk Paleti

| Token | Değer | Kullanım Alanı |
|---|---|---|
| `--bg-deep` | `#07090c` | Derin uzay obsidyen arka plan |
| `--bg-card` | `rgba(18, 24, 33, 0.65)` | Yarı saydam cam paneller (*backdrop-filter: blur(20px)*) |
| `--neon-green` | `#00ff87` | Birincil fütüristik neon vurgu & butonlar |
| `--neon-green-glow` | `rgba(0, 255, 135, 0.35)` | Neon ışık süzmesi & kart hover gölgeleri |
| `--emerald-accent` | `#10b981` | Tamamlayıcı zümrüt tonu |
| `--cyan-accent` | `#60efff` | İkincil ışıma ve degrade detayları |
| `--amber-gold` | `#f59e0b` | VIP Executive kart vurguları ve yıldızlar |
| `--border-glass` | `rgba(255, 255, 255, 0.08)` | Ultra ince cam kenarlıkları |

---

## 🚀 Projeyi Çalıştırma

Proje modern standartlarda saf **HTML5, Vanilla CSS3 ve Vanilla JavaScript** ile geliştirilmiştir. Ekstra paket kurulumu gerektirmez.

### Seçenek 1: Python ile yerel sunucu başlatma
```bash
python3 -m http.server 4321
```
Ardından tarayıcınızda açın:  
👉 **`http://localhost:4321`**

### Seçenek 2: Node.js / npx ile çalıştırma
```bash
npx serve .
```

### Seçenek 3: Doğrudan açma
`index.html` dosyasını çift tıklayarak herhangi bir modern tarayıcıda doğrudan açabilirsiniz.

---

## 📁 Proje Dosya Yapısı

```
ErkekKuafor/
├── index.html               # Semantik HTML5, SEO & Schema.org LocalBusiness işaretlemeleri
├── styles.css               # Koyu tema, glassmorphism, neon animasyonları, responsive grid
├── app.js                   # Çok adımlı randevu motoru, ses sentezleyici, TR/EN çevirici
├── logo.jpg                 # Orijinal referans berber & logo görseli
├── assets/
│   └── images/
│       ├── logo.jpg         # Marka amblemi & berber görseli
│       ├── hero.jpg         # 8K Fütüristik zümrüt ışıklı lüks salon iç mekan renderı
│       ├── styling.jpg      # Yüksek moda skin fade & sakal model çekimi
│       ├── tools.jpg        # Mat siyah titanyum & altın makas/ustura zanaat çekimi
│       ├── barber1.jpg      # Kurucu & Baş Berber Vahit Keskin portresi
│       ├── barber2.jpg      # Kıdemli Berber Murat Kaya portresi
│       └── barber3.jpg      # Usta Berber Can Demir portresi
└── README.md                # Proje dokümantasyonu & Yapay Zeka Tasarım Promptları
```

---

## 🤖 UI/UX Baş Tasarımcısı & Prompt Mühendisi Yapay Zeka Komutları (Master Prompts)

> **Kullanım Notu:** Aşağıdaki promptlar **Midjourney v6**, **Antigravity** ve **Stable Diffusion XL** sistemlerinde doğrudan tek tıkla kopyalayıp yapıştırılmak üzere İngilizce, sinematik ışıklandırma parametreleri ve sektör spesifikasyonlarıyla hazırlanmıştır.

### 🌟 1. Web Sitesi Arayüzü & Spatial UI Tasarım Promptu (Kopya-Yapıştır)
```text
Award-winning UI/UX web design showcase for "Keskin Erkek Kuaförü", an ultra-luxury futuristic men's grooming lounge and barbershop landing page. Dark obsidian slate background (#07090c), translucent glassmorphism cards with smooth 24px corner radius and 1px crisp frosted border, luminous cyber emerald neon green accent highlights (#00ff87) with soft ambient drop glows. Spatial UI layout influenced by Apple Vision Pro and modern Dribbble trends. 
In the hero header: circular metallic logo featuring a charismatic master barber with a glowing emerald LED ring around it, sleek minimalist navigation bar with glass pills for "Hakkımızda", "Hizmetler", "Fiyat Listesi", "Usta Berberler", "İletişim", and a vibrant neon green glowing CTA button reading "Randevu Al".
In the hero body: bold futuristic sans-serif typography (Outfit font) displaying "Kusursuz Kesim, Benzersiz Duruş", glowing badge "İSTANBUL'UN EN SEÇKİN ERKEK KUAFÖRÜ", and an interactive 4-step appointment booking widget showing service selections, calendar date pills, and master barber avatars.
Background features an ultra-luxury barbershop interior with dark fluted oak panels, black Nero Marquina marble counters, glowing vertical LED mirrors, warm amber Edison bulbs in soft creamy bokeh depth of field. 
Cinematic lighting, ray tracing, octane render, Unreal Engine 5 render aesthetic, 8k resolution, clean minimal layout, no visual clutter, ultra-crisp web typography, Behance Best of Interaction Design award winner --ar 16:9 --style raw --v 6.0
```

### 💈 2. Fütüristik Lüks Salon İç Mekan Konsepti (Kopya-Yapıştır)
```text
Cinematic architectural photography of an ultra-luxurious futuristic high-end gentleman's barbershop and grooming club at night. Dark moody atmosphere, polished black Nero Marquina marble floor with subtle reflections, matte charcoal sound-absorbing vertical wall slats, bespoke Italian ergonomic reclining barber chairs in supple full-grain black leather with brushed gold hardware. Minimalist styling stations with glowing emerald green ambient neon light strips running beneath floating countertops and framing the floor-to-ceiling smart mirrors. Ambient soft warm 2700K filament pendants in the background creating an exquisite creamy bokeh. Volumetric lighting, subtle haze, ray tracing reflections, 8k resolution, shot on Hasselblad H6D-100c, 35mm lens, f/1.8 aperture, Unreal Engine 5 architectural render, hyper-detailed, luxury interior magazine feature --ar 16:9 --style raw --v 6.0
```

### ✂️ 3. Zanaat Ekipmanları & Usta Detayı (Kopya-Yapıştır)
```text
Extreme macro close-up product photography of bespoke master barber tools resting on a rough textured natural black slate countertop. Custom matte black titanium scissors with polished brass pivot screw engraved with luxury crest, an open Japanese steel straight razor with dark ebony wood handle, and two amber glass apothecary bottles with gold foil labels and glass droppers containing organic sandalwood beard tonic. Subtle emerald neon rim light edge reflecting along the razor blade and scissors bevel, dramatic chiaroscuro side lighting, shallow depth of field, f/2.0, 8k resolution, razor sharp micro-details, ultra-realistic craftsmanship --ar 4:3 --v 6.0
```

---

## 👥 Berber Ekibi & İletişim

- **Kurucu & Baş Berber:** Vahit Keskin
- **Kıdemli Fade & Sakal Uzmanı:** Murat Kaya
- **Usta Berber & Spa Uzmanı:** Can Demir
- **Adres:** Abdi İpekçi Caddesi No:42/B, Nişantaşı, Şişli / İstanbul
- **Telefon:** +90 (555) 012 34 56
- **WhatsApp Hattı:** [+90 555 012 34 56](https://wa.me/905550123456)
- **Çalışma Saatleri:** Pazartesi - Cumartesi: 09:00 - 21:00 | Pazar: 10:00 - 19:00

---
*© 2026 Keskin Erkek Kuaförü. Tüm hakları saklıdır. Designed with Futuristic Glassmorphism & Neon Precision.*