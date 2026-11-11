# Bilişim Sınav Kağıdı Hazırlama & Yönetim Sistemi

MEB Bilişim Teknolojileri ve Bilgisayar Bilimi müfredatına tam uyumlu, `orneksinavkagidi.jpg` şablonunun birebir 1:1 görsel kopyasını oluşturan; hem Soru Kağıdı hem de Cevap Anahtarı üreten, Word (.docx) ve PDF formatlarında dışa aktarabilen, yerel/ağ yazıcılarıyla doğrudan çıktı alabilen web tabanlı sınav yönetim sistemi.

---

## 🚀 Öne Çıkan Özellikler

1. **Birebir Görsel Şablon Eşleşmesi (`orneksinavkagidi.jpg`):**
   - 3 sütunlu MEB standart başlık tablosu.
   - Sabit alanlar: `ADI SOYADI:`, `SINIFI:`, `No.:`, `PUAN:`.
   - **Koyu (Bold) Başlık Alanı:** Sadece orta sütundaki `2026-2027 EĞİTİM ÖĞRETİM YILI`, okul adı, `BİLİŞİM TEKNOLOJİLERİ VE YAZILIM` ve `1.DÖNEM 1. YAZILI` satırları koyu yazı tipindedir. Geri kalan tüm soru metinleri, numaralar, puanlar ve etiketler standart font ve normal kalınlıktadır.
   - Soru kağıdında 4 sıralı noktalı cevap satırları.
   - Sayfa sonlarında kesinlikle gereksiz boş 2. sayfa oluşturmayan akıllı A4 sayfalama mimarisi.

2. **Sınıf & Zorluk Düzeylerine Göre Soru Üretimi:**
   - **Sınıflar:** 5, 6, 7, 8. Sınıf (Bilişim Teknolojileri ve Yazılım) ile 9, 10. Sınıf (Bilgisayar Bilimi).
   - **Zorluk Seviyeleri:** Kolay, Orta, Zor veya Dengeli Karma.
   - **Soru Sayısı & Puanlama:** İstenilen sayıda soru seçimi ve toplam 100 puana otomatik puan dengeleme.
   - **Google Gemini Yapay Zeka Entegrasyonu:** `.env` dosyasındaki API anahtarı ile güncel MEB kazanımlarına göre dinamik yeni sorular ve model cevaplar üretebilme.
   - **100+ Çevrimdışı Soru Bankası:** İnternet veya API bağlantısı olmasa dahi kesintisiz çalışan dahili soru havuzu.

3. **Görüntüleme & Renkli Cevap Seçenekleri:**
   - **Soru Kağıdı Modu:** Noktalı cevap satırlarıyla öğrenciye dağıtılmaya hazır çıktı.
   - **Cevap Anahtarı Modu:** Soruların altında model cevapların yer aldığı öğretmen nüshası.
   - **İkisi Birlikte (Soru + Cevap Kağıdı):** Sayfa 1 Soru Kağıdı, Sayfa 2 Cevap Anahtarı olacak şekilde tek işlemde 2 sayfalık sınav paketi.
   - **Renkli Cevap Seçeneği:** Varsayılan olarak siyah/beyaz. Renkli seçildiğinde varsayılan kırmızı (`#d32f2f`), renk paleti veya HEX koduyla tamamen özelleştirilebilir.

4. **Çıktı & Yazdırma Yetenekleri:**
   - **Word (.docx):** Harici kütüphane bağımlılığı olmadan standart OpenXML ile %100 uyumlu DOCX üretimi (Word, LibreOffice, Google Docs, Pages).
   - **Hızlı Yazdır / PDF:** Tarayıcı yazdırma penceresi ve PDF olarak kaydetme.
   - **Donanım / Ağ Yazıcıları Entegrasyonu:** macOS CUPS ve AirPrint yazıcılarını otomatik algılama, kopya sayısı belirleme ve doğrudan yazdırma.
   - **%100 Gerçek Önizleme Modalı:** İndirmeden veya yazdırmadan önce A4 boyutunda tam ekran canlı kontrol imkanı.

---

## 📂 Dosya Yapısı

```
orneksinavkagidi/
├── app.py                      # Flask backend API sunucusu (Port 5050)
├── baslat.sh                   # Tek tıkla port temizleyip sunucuyu ve tarayıcıyı açan başlatma betiği
├── docx_generator.py           # Saf Python OpenXML .docx üretici
├── gemini_service.py           # Gemini 2.5 Flash soru üretim servisi
├── printer_service.py          # macOS CUPS / AirPrint yazıcı servisi
├── question_bank.py            # MEB 5-10. sınıf kapsamlı soru bankası & ilk sınav verileri
├── sinav_sistemi_tek_sayfa.html # Çift tıkla çalışan, CSS+JS gömülü çevrimdışı tek dosya
├── templates/
│   └── index.html              # Modern web arayüz şablonu
├── static/
│   ├── css/style.css           # A4 kağıt tasarımı, yazdırma kuralları ve koyu başlık stilleri
│   └── js/app.js               # Canlı düzenleme, durum yönetimi ve önizleme motoru
├── .env                        # Gemini API anahtarı (Gizli - Git'e eklenmez)
├── .gitignore                  # .env ve geçici dosyaların korunması
└── orneksinavkagidi.jpg        # Referans görsel
```

---

## 💻 Başlatma & Kullanım

### Yöntem 1: Tek Tıkla Başlatma Betiği (Önerilen)
Terminalde aşağıdaki komutu çalıştırarak sunucuyu başlatabilir ve tarayıcıda açabilirsiniz:
```bash
./baslat.sh
```
veya doğrudan:
```bash
python3 app.py
```
Tarayıcınızdan `http://localhost:5050` adresine gidebilirsiniz.

### Yöntem 2: Tamamen Çevrimdışı Tek Dosya (Finder'dan Çift Tıkla)
Finder üzerinden `sinav_sistemi_tek_sayfa.html` dosyasına çift tıklayarak herhangi bir sunucu kurmadan tüm sınav hazırlama ve yazdırma işlemlerini tarayıcınızda doğrudan yapabilirsiniz.

---

## 🔒 Güvenlik Notu
API anahtarlarını barındıran `.env` dosyası `.gitignore` ile korunmaktadır ve hiçbir koşulda Git deposuna dahil edilmez.

