# Viranşehir Özel Uğur Orta Okulu Rehberlik Planı & Excel Tablo PDF Oluşturucu

Viranşehir Özel Uğur Orta Okulu Rehberlik ve Psikolojik Danışma Hizmetleri için geliştirilmiş, Excel benzeri kolay veri girişi ve anlık canlı A4 PDF önizlemesi/çıktısı sunan modern web uygulaması.

![Uğur Logo](assets/ugurokullariviransehirkampusu.jpg)

---

## 🚀 Özellikler

- **Tam Özelleştirilebilir Başlıklar ve Veriler:**
  - Kurum adı, alt birim/servis adı, ana tablo başlığı (`✚ HAZİRAN`), akademik yıl ve alt bilgiler serbestçe düzenlenebilir.
  - Sütun başlıkları (`Sıra`, `YAPILACAK ÇALIŞMA`, `TARİH`, `HEDEF TÜRÜ`, `AÇIKLAMA`, `SINIF/ŞUBE`) yeniden adlandırılabilir, yeni sütun eklenebilir veya silinebilir.
- **Canlı Senkronize Önizleme & PDF:**
  - **⚡ Canlı Belge Önizleme:** Her harf yazıldığında gecikmesiz olarak A4 kağıt simülasyonunda güncellenir.
  - **📄 Gerçek PDF Dosyası (Canlı):** Tarayıcı içinde gömülü iframe ile vektörel gerçek PDF dosyası oluşturulup gösterilir.
  - **Otomatik Ekrana Sığdırma (Auto-fit Zoom):** Cihaz çözünürlüğü ne olursa olsun sayfa açıldığında tüm kağıt tek bakışta görünecek şekilde otomatik ölçeklenir.
- **Excel & Veri Kolaylıkları:**
  - Excel veya Google E-Tablolar'dan kopyalanan satırları doğrudan aktarabilen **"Excel'den Yapıştır"** aracı.
  - Satır ekleme, silme, kopyalama (çoğaltma) ve yukarı/aşağı taşıma.
  - Excel tarzı alt kılavuz satırları (+10 Boş Satır).
  - Masaüstündeki `ornekexcel.jpg` verilerini tek tıkla geri getiren hazır şablon.
- **Tasarım & Çıktı Seçenekleri:**
  - Sayfa Yönü: Yatay (A4 Landscape - Varsayılan) ve Dikey (A4 Portrait).
  - Temalar: Excel Klasik (ornekexcel.jpg stili), Uğur Kurumsal (Lacivert/Kırmızı), MEB Resmi Belge (Siyah-Beyaz), Zümrüt Yeşili.
  - Hücre ızgara çizgileri (Noktalı kılavuz, düz çizgi, belirgin çerçeve).
  - Hazırlayan ve Okul Müdürü imza/onay bloğu açma/kapatma.
- **Kalıcılık & Dışa Aktarma:**
  - Otomatik `localStorage` kaydı (sayfa yenilense de veriler kaybolmaz).
  - JSON formatında tam veri yedekleme ve geri yükleme.
  - Tek tıkla "PDF İndir" ve tarayıcı yerel yazdırma uyumlu "Yazdır".

---

## 🛠️ Teknolojiler

- **HTML5 & Vanilla CSS3** (Responsive, CSS Custom Properties, Glassmorphism, `@media print`)
- **Modern JavaScript (ES6+)** (Reaktif Durum Yönetimi, Blob URL, Auto-fit Zoom)
- **html2pdf.js / jsPDF / html2canvas** (İstemci taraflı vektörel/raster PDF üretimi)
- **Google Fonts** (Inter & Outfit) & **Font Awesome 6**

---

## 💻 Yerel Kurulum & Çalıştırma

Herhangi bir sunucu ile doğrudan çalıştırabilirsiniz:

```bash
# Python ile:
python3 -m http.server 8080

# veya Node.js npx ile:
npx serve .
```

Tarayıcınızda `http://localhost:8080` adresine giderek kullanmaya başlayabilirsiniz.
