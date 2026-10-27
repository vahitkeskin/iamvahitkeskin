#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Weeks 32 to 41 for 9. Sınıf Bilgisayar Bilimi (Kur 1)
MEB 2026-2027 Maarif Modeli
Öğretmen: Vahit Keskin
"""

WEEKS_32_41 = [
  # Hafta 32
  {
    "week": 32,
    "date": "19 - 25 Nisan",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: while Döngüsü ve İleri Veri Yapıları",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Veri Yapıları 2: Demetler & Sözlükler",
    "subtitle": "Demetler (Tuples - Immutable) ve Sözlükler (Dictionaries - Anahtar/Değer Eşlemesi)",
    "outcomeCode": "BB.9.5.5",
    "targetSkill": "İlişkisel Veri Modelleme & Sözlük Mimarisi",
    "curiosityQuestion": "Telefon rehberiniz bir kişinin adını aradığında milyonlarca kayıt arasından numarasını sıfır gecikmeyle (O(1)) nasıl bulur?",
    "roadmap": [
      { "title": "Demetler (Tuples)", "desc": "Normal parantez `()`, değiştirilemez (immutable) ve güvenli veri saklama." },
      { "title": "Sözlük (Dictionary) Mantığı", "desc": "Süslü parantez `{}`, Anahtar: Değer (Key-Value) ikilileri." },
      { "title": "Sözlük Metotları", "desc": "`.keys()`, `.values()`, `.items()`, `.get()` ve eleman güncelleme." },
      { "title": "Gerçek Hayat Eşlemesi", "desc": "Öğrenci numarası -> Öğrenci profili, Plaka -> Şehir eşleştirmeleri." }
    ],
    "section1": {
      "title": "Demet (Tuple) ile Sözlük (Dict) Arasındaki Fark",
      "subtitle": "Değiştirilemez sabitler ile hızlı anahtar-değer eşlemeleri",
      "cards": [
        {
          "title": "Veri Yapısı Karşılaştırması",
          "icon": "📖",
          "desc": "Kullanım amaçlarına göre veri koleksiyonları.",
          "items": [
            { "bold": "Demet (Tuple - ())", "text": "Bir kez tanımlandıktan sonra elemanı eklenemez, silinemez veya değiştirilemez (Örn: GPS koordinatları: `(41.0082, 28.9784)`)." },
            { "bold": "Sözlük (Dictionary - {})", "text": "İndeks numarası yerine anlamlı anahtarlarla (Key) erişim sağlar (Örn: `ogrenci['ad']`)." },
            { "bold": "Hash Tablosu Hızı", "text": "Sözlüklerde arama hızı liste gibi baştan sona aramaz; anında O(1) karmaşıklıkla hedefe ulaşır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Python Sözlük Uygulaması",
      "subtitle": "Kişi kartı ve sözlük üzerinde döngü kurma",
      "codeSnippet": "# Python Sözlük (Dictionary) Kullanımı\nogrenci = {\n    \"no\": 742,\n    \"ad\": \"Zeynep\",\n    \"soyad\": \"Kaya\",\n    \"notlar\": [85, 95, 90],\n    \"aktif\": True\n}\n\n# Veriye erişim\nprint(f\"Öğrenci: {ogrenci['ad']} {ogrenci['soyad']}\")\n\n# Yeni anahtar ekleme / güncelleme\nogrenci[\"alan\"] = \"Bilişim Teknolojileri\"\n\n# Döngü ile gezinti\nfor anahtar, deger in ogrenci.items():\n    print(f\"{anahtar}: {deger}\")",
      "codeTitle": "sozlukler.py",
      "codeLang": "Python",
      "cards": [
        { "badge": ".get() Metodu", "title": "Güvenli Erişim", "desc": "`ogrenci.get('telefon', 'Bulunamadı')` metodu, sözlükte olmayan anahtarda programın çökmesini (KeyError) önler.", "items": [{ "bold": "Anahtar Kuralları", "text": "Anahtarlar benzersiz (unique) ve değiştirilemez (str, int) olmalıdır." }] }
      ]
    },
    "workshop": {
      "title": "İngilizce-Türkçe Bilişim Sözlüğü Geliştirme",
      "subtitle": "Kullanıcının kelime arayabildiği, yeni kelime ekleyebildiği interaktif sözlük programı",
      "steps": [
        { "title": "1. Temel Sözlüğü Kur", "desc": "`sozluk = {\"computer\": \"bilgisayar\", \"network\": \"ağ\", \"loop\": \"döngü\"}` oluşturun." },
        { "title": "2. Arama Yaptır", "desc": "Kullanıcıdan kelime isteyip `.get()` ile Türkçe karşılığını ekrana basın." },
        { "title": "3. Yeni Kelime Ekle", "desc": "Eğer kelime yoksa kullanıcıdan Türkçesini isteyip sözlüğe yeni anahtar olarak ekleyin." },
        { "title": "4. Tümünü Listele", "desc": "`.items()` döngüsüyle güncel sözlük veritabanını yazdırın." }
      ],
      "criteria": [
        "Sözlük anahtar-değer yapısını doğru bağlamda kullanma",
        "Demetlerin değiştirilemez (immutable) kuralını kavrama",
        "KeyError hatasına karşı güvenli sorgulama yapma"
      ]
    },
    "tips": {
      "safetyTitle": "Sözlük ve Demet Kullanırken Püf Noktaları",
      "safetyRules": [
        { "bold": "Olmayan Anahtara Doğrudan Erişmeyin", "text": "`sozluk['olmayan']` yazmak `KeyError` fırlatır; daima `sozluk.get('olmayan')` kullanın." },
        { "bold": "Demetlerde Tek Eleman Tuzağı", "text": "Tek elemanlı demet tanımlarken virgül zorunludur: `demet = (5,)`; virgülsüz `(5)` int kabul edilir." },
        { "bold": "Anahtarlar Değiştirilemez Olmalı", "text": "Bir sözlüğün anahtarı (Key) liste olamaz; çünkü listeler değiştirilebilirdir." }
      ],
      "myths": [
        { "wrong": "Sözlüklerde elemanlar sıralıdır ve 0. eleman diye çağrılabilir.", "correct": "Sözlükler indeksle değil anahtar (Key) ismiyle çağrılır (`sozluk[0]` değil `sozluk['ad']`)." },
        { "wrong": "Demetler gereksizdir, her zaman liste kullanılabilir.", "correct": "Demetler değiştirilemediği için hem bellekte daha az yer kaplar, hem daha hızlıdır, hem de yanlışlıkla değiştirilemez." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında `araba[\"renk\"]` satırı çalıştırıldığında ekranda ne görünür?\n```python\naraba = {\"marka\": \"TOGG\", \"yil\": 2026}\naraba[\"renk\"] = \"Oltu Siyahı\"\nprint(araba[\"renk\"])\n```",
      "options": [
        { "text": "A) KeyError", "isCorrect": False },
        { "text": "B) Oltu Siyahı", "isCorrect": True },
        { "text": "C) None", "isCorrect": False },
        { "text": "D) SyntaxError", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Python sözlüklerinde var olmayan bir anahtara değer atandığında o anahtar otomatik olarak sözlüğe eklenir ve değeri atanır."
    },
    "summary": {
      "keyPoints": [
        "Demetler (Tuples) değiştirilemez sabitler için idealdir.",
        "Sözlükler (Dictionaries) Anahtar-Değer mantığıyla gerçek hayat verilerini modeller.",
        "Sözlük arama hızı O(1) olup büyük veritabanlarının temelidir."
      ],
      "nextWeek": "Python Veri Yapıları 3: Kümeler (Sets) ve Veri Yapılarının Karşılaştırılması",
      "homework": "Kendi favori müzik grubunuzun şarkılarını ve albüm yıllarını saklayan bir sözlük oluşturup ekrana yazdırınız."
    }
  },
  # Hafta 33
  {
    "week": 33,
    "date": "26 Nisan - 02 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: while Döngüsü ve İleri Veri Yapıları",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Veri Yapıları 3: Kümeler & Kıyaslama",
    "subtitle": "Kümeler (Sets - Benzersiz Elemanlar, Kesişim, Birleşim) ve 4 Veri Yapısının Karşılaştırılması",
    "outcomeCode": "BB.9.5.6",
    "targetSkill": "Veri Mimarisi Seçimi & Küme İşlemleri",
    "curiosityQuestion": "Bir e-ticaret sitesinde 100.000 kişilik müşteri listesindeki tekrarlanan e-posta adreslerini tek bir satır kodla nasıl ayıklarsınız?",
    "roadmap": [
      { "title": "Küme (Set) Nedir?", "desc": "Sırasız, indekslenemez ve en önemlisi asla mükerrer (tekrar eden) eleman barındırmayan koleksiyon." },
      { "title": "Matematiksel Küme İşlemleri", "desc": "Kesişim (`intersection`), Birleşim (`union`), Fark (`difference`)." },
      { "title": "4 Büyük Veri Yapısı Özeti", "desc": "Liste (List), Demet (Tuple), Sözlük (Dict) ve Küme (Set) matrisi." },
      { "title": "Hangi Veri Yapısını Seçmeliyim?", "desc": "Senaryoya göre en doğru ve verimli veri yapısına karar verme rehberi." }
    ],
    "section1": {
      "title": "Kümelerin Sihirli Gücü: Benzersizlik",
      "subtitle": "Tekrarlanan verileri anında temizleyen veri yapısı",
      "cards": [
        {
          "title": "Küme İşlemleri",
          "icon": "⭕",
          "desc": "Matematikteki Venn şeması mantığıyla çalışan metotlar.",
          "items": [
            { "bold": "Benzersiz Elemanlar", "text": "`{1, 2, 2, 3}` kümesi otomatik olarak `{1, 2, 3}` haline gelir." },
            { "bold": "Kesişim (Intersection - &)", "text": "İki kümede ortak olan elemanları bulur (Örn: Hem Python hem C++ bilenler)." },
            { "bold": "Birleşim (Union - |)", "text": "İki kümedeki tüm elemanları tekrarsız tek çatıda birleştirir." },
            { "bold": "Fark (Difference - -)", "text": "A kümesinde olup B kümesinde olmayan elemanları ayıklar." }
          ]
        }
      ]
    },
    "section2": {
      "title": "4 Büyük Veri Yapısının Karşılaştırma Matrisi",
      "subtitle": "Doğru problemi doğru veri yapısıyla çözme sanatı",
      "codeSnippet": "# Listeden Tekrarları Temizleme\nkatilimcilar = [\"Ali\", \"Ayşe\", \"Ali\", \"Can\", \"Ayşe\", \"Burak\"]\nbenzersiz = list(set(katilimcilar)) # Set'e çevir ve geri listele!\nprint(\"Tekrarsız Liste:\", benzersiz) # ['Can', 'Burak', 'Ali', 'Ayşe']\n\n# Kesişim Örneği\nkodlama = {\"Ali\", \"Ece\", \"Can\"}\nrobotik = {\"Ece\", \"Can\", \"Zeynep\"}\nprint(\"Her iki kulüpte olanlar:\", kodlama & robotik) # {'Ece', 'Can'}",
      "codeTitle": "kumeler_karsilastirma.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Seçim Kriteri", "title": "Hangi Yapıyı Kullanmalıyım?", "desc": "Sıra ve değişiklik gerekliyse Liste; Sabit güvenlik lazımsa Demet; Hızlı arama ve ilişki varsa Sözlük; Tekrarsızlık ve küme matematiği varsa Küme.", "items": [{ "bold": "İndeks Yoktur", "text": "Kümelerde `kume[0]` yazamazsınız; çünkü elemanların sırası yoktur." }] }
      ]
    },
    "workshop": {
      "title": "Öğrenci Kulüpleri Kesişim ve Fark Analiz Programı",
      "subtitle": "Yazılım ve Yapay Zekâ kulüplerine üye öğrencilerin ortak ve farklı üyelerini bulan program",
      "steps": [
        { "title": "1. İki Küme Oluştur", "desc": "`yazilim = {\"Ahmet\", \"Mehmet\", \"Ayşe\", \"Fatma\"}` ve `ai = {\"Ayşe\", \"Fatma\", \"Can\", \"Zeynep\"}` yazın." },
        { "title": "2. Ortak Üyeleri Bul", "desc": "`ortak = yazilim.intersection(ai)` ile her iki kulüpteki öğrencileri listeleyin." },
        { "title": "3. Yalnızca Yazılımda Olanlar", "desc": "`sadece_yazilim = yazilim - ai` fark işlemini uygulayın." },
        { "title": "4. Toplam Benzersiz Öğrenci", "desc": "`tum_ogrenciler = yazilim | ai` birleşimiyle okul kulüplerindeki toplam tekil öğrenciyi bulun." }
      ],
      "criteria": [
        "Küme oluşturma ve küme operatörlerini (`&`, `|`, `-`) doğru kullanma",
        "Listeden tekrarları `set()` ile temizleme pratikliğini kazanma",
        "Veri yapılarının güçlü ve zayıf yönlerini kıyaslayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Kümeler ile Çalışırken Dikkat",
      "safetyRules": [
        { "bold": "Boş Küme Tanımlama Tuzağı", "text": "`kume = {}` boş SÖZLÜK açar! Boş küme için mutlaka `kume = set()` yazmalısınız." },
        { "bold": "Sıraya Güvenmeyin", "text": "Küme elemanları bellekte rastgele hash sırasıyla tutulur; yazdırma sırası her seferinde değişebilir." },
        { "bold": "Küme İçine Liste Konulamaz", "text": "Kümeler sadece değiştirilemez (hashable) elemanları kabul eder; küme içine liste koymak `TypeError` verir." }
      ],
      "myths": [
        { "wrong": "Kümeler indeksleme destekler.", "correct": "Kümelerde elemanların sırası yoktur; bu nedenle `kume[0]` IndexError verir." },
        { "wrong": "Veri yapısı seçimi sadece tercihtir, performansı etkilemez.", "correct": "1 milyon veride arama yaparken liste O(N) sürede bakarken, küme ve sözlük O(1) anlık sürede bakar." }
      ]
    },
    "quiz": {
      "question": "Python'da boş bir KÜME (Set) oluşturmak için aşağıdaki tanımlamalardan hangisi kullanılmalıdır?",
      "options": [
        { "text": "A) k = {}", "isCorrect": False },
        { "text": "B) k = set()", "isCorrect": True },
        { "text": "C) k = []", "isCorrect": False },
        { "text": "D) k = ()", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Python'da `{}` süslü parantezi varsayılan olarak boş Sözlük (dict) üretir. Boş bir küme oluşturmak için `set()` fonksiyonu kullanılmalıdır."
    },
    "summary": {
      "keyPoints": [
        "Kümeler (Sets) mükerrer verileri reddeder ve matematiksel küme işlemlerini destekler.",
        "Dört veri yapısı: Liste (sıralı), Demet (sabit), Sözlük (anahtar-değer), Küme (benzersiz).",
        "Doğru veri yapısını seçmek profesyonel yazılım mimarisinin ilk kuralıdır."
      ],
      "nextWeek": "Metin (String) İşleme, Parçalama ve Metotları (`split`, `join`, `upper`, `lower`, `replace`)",
      "homework": "Sınıfınızdaki öğrencilerin isimlerinden oluşan bir listedeki yinelenen isimleri `set()` yardımıyla temizleyen bir kod yazınız."
    }
  },
  # Hafta 34
  {
    "week": 34,
    "date": "03 - 09 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "5. Ünite: while Döngüsü ve İleri Veri Yapıları",
    "unitBadge": "5. Ünite",
    "unitTheme": "unite-5",
    "title": "Metin (String) İşleme & Metotları",
    "subtitle": "split(), join(), upper(), lower(), replace(), find(), strip() ve Karakter Dizisi İndeksleme",
    "outcomeCode": "BB.9.5.7",
    "targetSkill": "Metin Madenciliği & Karakter Manipülasyonu",
    "curiosityQuestion": "Arama motorları veya sosyal medya platformları milyonlarca tweet ve mesaj içinden küfürleri, hashtagleri veya e-postaları nasıl ayıklar?",
    "roadmap": [
      { "title": "String'lerin Dizi Doğası", "desc": "Her metin aslında değiştirilemez bir karakter dizisidir (`metin[0]`, `metin[::-1]`)." },
      { "title": "Büyük/Küçük Harf ve Temizlik", "desc": "`.upper()`, `.lower()`, `.capitalize()`, `.strip()` (boşlukları kırpma)." },
      { "title": "Parçalama ve Birleştirme", "desc": "`.split()` (kelimelere bölme) ve `.join()` (listeyi metne çevirme)." },
      { "title": "Arama ve Değiştirme", "desc": "`.replace()` (sansürleme/değiştirme) ve `.find()` (konum arama)." }
    ],
    "section1": {
      "title": "En Güçlü 6 Metin Manipülasyon Metodu",
      "subtitle": "Kullanıcıdan gelen kirli verileri temizleme ve standartlaştırma",
      "cards": [
        {
          "title": "String Metotları Sözlüğü",
          "icon": "🔤",
          "desc": "Metinlerle çalışırken hayat kurtaran araçlar.",
          "items": [
            { "bold": "split(ayırıcı)", "text": "Metni boşluklardan veya virgülden bölüp liste yapar: `'ali,veli,can'.split(',')`." },
            { "bold": "join(liste)", "text": "Bir listedeki kelimeleri aralarına karakter koyarak tek metin yapar: `'-'.join(['2026', '05', '09'])`." },
            { "bold": "strip()", "text": "Metnin başındaki ve sonundaki gereksiz boşlukları temizler." },
            { "bold": "replace(eski, yeni)", "text": "Metindeki belirli kelimeleri yenisiyle değiştirir: `mesaj.replace('kötü', 'iyi')`." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Doğal Dil İşleme Sezgisi: Kelime Sayacı",
      "subtitle": "Bir paragrafı kelimelerine ayırıp analiz etme",
      "codeSnippet": "# Metin Temizleme ve Analiz Örneği\nparagraf = \"  Türkiye Yüzyılı Maarif Modeli ile Geleceğin Bilişimi   \"\ntemiz_metin = paragraf.strip().lower()\nkelimeler = temiz_metin.split()\n\nprint(\"Temiz Metin:\", temiz_metin)\nprint(\"Kelimeler Listesi:\", kelimeler)\nprint(f\"Toplam Kelime Sayısı: {len(kelimeler)}\")\n\n# Sansür / Değiştirme\nsansurlu = temiz_metin.replace(\"bilişimi\", \"TEKNOLOJİSİ\")\nprint(\"Güncel:\", sansurlu)",
      "codeTitle": "metin_islemleri.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Immutable", "title": "Metinler Değiştirilemez!", "desc": "Bir string'in tek bir harfini `metin[0] = 'A'` şeklinde değiştiremezsiniz (`TypeError`); metotlar yeni bir metin üretir.", "items": [{ "bold": "startswith / endswith", "text": "Metnin neyle başlayıp bittiğini sorgular (`.endswith('.com')`)." }] }
      ]
    },
    "workshop": {
      "title": "Otomatik E-Posta Doğrulayıcı ve İsim Formatlayıcı",
      "subtitle": "Kullanıcının girdiği ad soyad ve e-posta adresini kurallara göre denetleyip düzelten program",
      "steps": [
        { "title": "1. Girdileri Al", "desc": "Kullanıcıdan başı sonu boşluklu girilmiş ad soyad ve e-posta okuyun." },
        { "title": "2. strip() ve title()", "desc": "`ad_soyad.strip().title()` ile ilk harfleri büyük, kenar boşlukları silinmiş hale getirin." },
        { "title": "3. E-Posta Denetimi", "desc": "`if '@' in eposta and eposta.endswith('.com'):` ile geçerlilik kontrolü yapın." },
        { "title": "4. Kullanıcı Adını Çıkar", "desc": "`eposta.split('@')[0]` ile @ işaretinden önceki kullanıcı adını ekrana basın." }
      ],
      "criteria": [
        "Metin metotlarını (`split`, `strip`, `replace`) hatasız uygulama",
        "String dilimleme kurallarıyla metin parçalayabilme",
        "Kullanıcı hatalarını tolere eden dayanıklı kod mimarisi"
      ]
    },
    "tips": {
      "safetyTitle": "Metin İşlemede Güvenlik ve Temizlik",
      "safetyRules": [
        { "bold": "Kullanıcı Girdisini Daima Temizleyin", "text": "Veritabanına kaydetmeden önce mutlaka `.strip()` ile sağdaki soldaki görünmez boşlukları silin." },
        { "bold": "Büyük/Küçük Harf Eşitlemesi", "text": "Arama yaparken hem arananı hem veriyi `.lower()` yaparak harf uyumsuzluğunu önleyin." },
        { "bold": "Metot Zincirleme (Method Chaining)", "text": "`metin.strip().lower().replace('a', 'e')` şeklinde arka arkaya çağırabilirsiniz." }
      ],
      "myths": [
        { "wrong": "`metin.upper()` yazıldığında `metin` değişkeni kalıcı olarak büyük harfe dönüşür.", "correct": "Metinler değiştirilemez olduğu için `metin = metin.upper()` şeklinde değişkene geri atamalısınız!" },
        { "wrong": "`split()` içine ayırıcı yazılmazsa hata verir.", "correct": "Boş bırakılırsa (`split()`) varsayılan olarak tüm boşluklardan böler." }
      ]
    },
    "quiz": {
      "question": "Python'da `tarih = \"2026-10-29\"` metnine `parcalar = tarih.split(\"-\")` uygulandığında `parcalar[1]` elemanı ne olur?",
      "options": [
        { "text": "A) \"2026\"", "isCorrect": False },
        { "text": "B) \"10\"", "isCorrect": True },
        { "text": "C) \"29\"", "isCorrect": False },
        { "text": "D) 10 (int)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `split(\"-\")` metodu tire işaretlerinden bölerek `[\"2026\", \"10\", \"29\"]` listesini üretir. 1. indeksteki eleman metin olarak `\"10\"`dur."
    },
    "summary": {
      "keyPoints": [
        "Metinler karakter dizileridir ve zengin metot ailesine sahiptir.",
        "`.split()` metni listeye, `.join()` listeyi metne dönüştürür.",
        "Veri temizleme (Data Cleaning) metin işleme fonksiyonlarıyla başlar."
      ],
      "nextWeek": "Fonksiyon Kavramı ve Fonksiyon Tanımlama (`def`, parametreler, argümanlar)",
      "homework": "Kullanıcının girdiği bir cümlenin kaç kelimeden oluştuğunu ve en uzun kelimenin ne olduğunu bulan programı yazınız."
    }
  },
  # Hafta 35
  {
    "week": 35,
    "date": "10 - 16 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Fonksiyonlar, Modüller ve Proje Geliştirme",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "Fonksiyonlar: def & Parametreler",
    "subtitle": "Fonksiyon Kavramı, def Anahtar Kelimesi, Parametreler, Argümanlar ve Kodun Yeniden Kullanılabilirliği",
    "outcomeCode": "BB.9.6.1",
    "targetSkill": "Modüler Programlama & Fonksiyonel Tasarım",
    "curiosityQuestion": "Aynı hesaplama kodunu programın 10 farklı yerinde kopyala-yapıştır yapmak yerine tek bir Fonksiyon altında toplamak bize ne kazandırır?",
    "roadmap": [
      { "title": "Fonksiyon Nedir?", "desc": "Belirli bir görevi yerine getiren, çağrılmadıkça çalışmayan bağımsız kod bloğu." },
      { "title": "def ile Tanımlama", "desc": "Fonksiyon adı, parantezler ve iki nokta üst üste (`:`) kuralı." },
      { "title": "Parametre ve Argüman", "desc": "Fonksiyonun içine dışarıdan gönderilen girdi değişkenleri." },
      { "title": "Varsayılan Parametreler", "desc": "`def selamla(ad=\"Misafir\"):` ile değer girilmediğinde çalışan varsayılanlar." }
    ],
    "section1": {
      "title": "DRY Prensibi: Kendini Tekrar Etme! (Don't Repeat Yourself)",
      "subtitle": "Spagetti koddan modüler ve profesyonel mimariye geçiş",
      "cards": [
        {
          "title": "Fonksiyon Kullanmanın 3 Faydası",
          "icon": "⚙️",
          "desc": "Büyük yazılım projelerini yönetilebilir kılan mekanizma.",
          "items": [
            { "bold": "1. Kodun Yeniden Kullanımı", "text": "Bir kez yaz, bin kez çağır; saatlerce kod tekrarı yapmaktan kurtarır." },
            { "bold": "2. Kolay Bakım ve Güncelleme", "text": "Bir hesaplama kuralı değiştiğinde 50 yeri değil, sadece o fonksiyonu değiştirmek yeterlidir." },
            { "bold": "3. Okunabilirlik ve Modülerlik", "text": "Ana program yüzlerce satır yerine `giris_yap()`, `veriyi_isle()`, `raporla()` şeklinde kitap gibi okunur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Fonksiyon Tanımlama ve Çağırma Anatomisi",
      "subtitle": "Tanımlama anı (Define) ile çalıştırma anı (Call)",
      "codeSnippet": "# Fonksiyon Tanımlama (def)\ndef karsila(kullanici_adi, rol=\"Öğrenci\"):\n    \"\"\"Kullanıcıyı rolüne göre karşılayan fonksiyon\"\"\"\n    print(f\"Hoş geldiniz Sayın {kullanici_adi}!\")\n    print(f\"Sistemdeki Yetkiniz: {rol}\")\n    print(\"-\" * 30)\n\n# Fonksiyonu Çağırma (Call)\nkarsila(\"Ahmet\", \"Yönetici\")\nkarsila(\"Zeynep\") # rol verilmedi, varsayılan 'Öğrenci' oldu!",
      "codeTitle": "fonksiyonlar_giris.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Çağırma Kuralı", "title": "Parantez Zorunludur", "desc": "`karsila` yazmak fonksiyonun kendisini işaret eder; onu çalıştırmak için mutlaka `karsila()` parantezleri konulmalıdır.", "items": [{ "bold": "Docstring", "text": "Fonksiyonun hemen altına `\"\"\"açıklama\"\"\"` yazarak yardım dokümantasyonu oluşturulur." }] }
      ]
    },
    "workshop": {
      "title": "Geometrik Şekil Alan ve Çevre Hesaplama Motoru",
      "subtitle": "Dikdörtgen, Daire ve Üçgen alanlarını hesaplayan modüler fonksiyon kütüphanesi kodlama",
      "steps": [
        { "title": "1. Dikdörtgen Fonksiyonu", "desc": "`def dikdortgen_alan(kisa, uzun):` tanımlayıp alanı ekrana basın." },
        { "title": "2. Daire Fonksiyonu", "desc": "`def daire_alan(yaricap, pi=3.14):` tanımlayıp `pi * r^2` hesaplayın." },
        { "title": "3. Üçgen Fonksiyonu", "desc": "`def ucgen_alan(taban, yukseklik):` ile `(taban * yukseklik) / 2` formülünü yazın." },
        { "title": "4. Ana Menüden Çağır", "desc": "Kullanıcının seçtiği şekle göre ilgili fonksiyonu doğru parametrelerle tetikleyin." }
      ],
      "criteria": [
        "`def` sözdizimini ve girintilemesini hatasız uygulama",
        "Parametre ve argüman aktarımını doğru kurgulama",
        "Varsayılan (default) parametre mantığını kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "Fonksiyon Tanımlarken Altın Kurallar",
      "safetyRules": [
        { "bold": "Tanımlamadan Önce Çağıramazsınız", "text": "Fonksiyon çağrısı kod dosyasında `def` bloğunun ALTINDA yer almalıdır; üstünde çağrılırsa `NameError` verir." },
        { "bold": "Parametre Sırası", "text": "Varsayılan parametreler daima en sonda yer almalıdır: `def test(a, b=10):` doğrudur; `def test(b=10, a):` SyntaxError verir!" },
        { "bold": "Tek Sorumluluk Prensibi", "text": "Bir fonksiyon sadece tek bir işi kusursuz yapmalıdır (hem hesaplayıp hem veritabanı silip hem mail atmamalıdır)." }
      ],
      "myths": [
        { "wrong": "Bir fonksiyon tanımlandığında hemen otomatik olarak çalışır.", "correct": "Fonksiyon sadece bir tanımdır; programda ismiyle çağrılmadığı sürece asla çalışmaz." },
        { "wrong": "Fonksiyonlar sadece birkaç satırlık basit işler içindir.", "correct": "Dünyadaki tüm büyük yazılımlar ve yapay zekâ modelleri binlerce fonksiyonun birbiriyle konuşmasıdır." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki fonksiyon tanımında `selamla(\"Ece\")` çağrısı yapıldığında ekranda ne görünür?\n```python\ndef selamla(ad, mesaj=\"Günaydın\"):\n    print(f\"{mesaj}, {ad}!\")\n```",
      "options": [
        { "text": "A) Ece, Günaydın!", "isCorrect": False },
        { "text": "B) Günaydın, Ece!", "isCorrect": True },
        { "text": "C) TypeError (Eksik parametre)", "isCorrect": False },
        { "text": "D) Hiçbir şey yazmaz", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `ad = \"Ece\"` atanır. İkinci argüman verilmediği için varsayılan `mesaj = \"Günaydın\"` kullanılır. Çıktı: `Günaydın, Ece!`."
    },
    "summary": {
      "keyPoints": [
        "Fonksiyonlar (`def`) kod tekrarını önler ve projeleri modüler kılar.",
        "Parametreler fonksiyonun girdileridir.",
        "Varsayılan parametreler fonksiyonları esnek hale getirir."
      ],
      "nextWeek": "Geriye Değer Döndüren Fonksiyonlar (`return`) ve Değişken Kapsamı (Scope)",
      "homework": "Kendisine parametre olarak verilen bir sayının tek mi çift mi olduğunu ekrana yazan bir fonksiyon kodlayınız."
    }
  },
  # Hafta 36
  {
    "week": 36,
    "date": "17 - 23 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Fonksiyonlar, Modüller ve Proje Geliştirme",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "return İfadesi & Değişken Kapsamı",
    "subtitle": "Geriye Değer Döndürme (return), Yerel (Local) vs Global Değişken Kapsamı ve global Deyimi",
    "outcomeCode": "BB.9.6.2",
    "targetSkill": "Fonksiyonel Veri Akışı & Kapsam (Scope) Yönetimi",
    "curiosityQuestion": "Bir fonksiyonun içinde oluşturduğunuz değişkene fonksiyon bittikten sonra ana programdan erişmeye çalışırsanız Python neden 'böyle bir değişken yok' der?",
    "roadmap": [
      { "title": "print() vs return Farkı", "desc": "Sadece ekrana göstermek (print) ile sonucu bir sonraki işleme teslim etmek (return)." },
      { "title": "return Mekanizması", "desc": "Fonksiyonu o anda bitirme ve hesaplanan sonucu çağıran satıra fırlatma." },
      { "title": "Değişken Kapsamı (Scope)", "desc": "Yerel (Local) kapsama hapsolmuş değişkenler ve Global evrensel değişkenler." },
      { "title": "global Anahtar Kelimesi", "desc": "Fonksiyon içinden ana program değişkenini değiştirme yetkisi." }
    ],
    "section1": {
      "title": "print() ile return Arasındaki Hayati Fark",
      "subtitle": "Sadece gözle görmek mi, yoksa değişken içine kaydedip kullanmak mı?",
      "cards": [
        {
          "title": "Kritik Ayrım",
          "icon": "↩️",
          "desc": "Programcılık kariyerinin en önemli dönüm noktası.",
          "items": [
            { "bold": "print() Sadece Gösterir", "text": "Ekrana piksel çizer; geriye hiçbir değer bırakmaz (`None`). Sonucu başka hesaplamada kullanamazsınız." },
            { "bold": "return Değeri Teslim Eder", "text": "Hesaplanan sonucu çağıran yere geri verir: `sonuc = topla(5, 10)` yazıp sonucu başka yerlere gönderebilirsiniz." },
            { "bold": "return Fonksiyonu Bitirir", "text": "`return` çalıştığı anda fonksiyon derhal kapanır; altındaki satırlar asla işletilmez." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Yerel (Local) ve Küresel (Global) Kapsam",
      "subtitle": "LEGB Kuralı: Local, Enclosing, Global, Built-in",
      "codeSnippet": "# return Kullanımı ve Kapsam\ndef kdv_hesapla(fiyat, oran=0.20):\n    vergi = fiyat * oran     # 'vergi' yerel (local) bir değişkendir\n    toplam = fiyat + vergi\n    return toplam            # Sonucu dışarıya döndürür!\n\n# return edilen değeri değişkene atama:\nodenecek = kdv_hesapla(1000)\nprint(f\"KDV Dahil Tutar: {odenecek} TL\") # 1200.0 TL\n\n# print(vergi) -> NameError verir! Çünkü 'vergi' fonksiyonun içinde yaşar ve ölür.",
      "codeTitle": "return_scope.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Kapsam İzolasyonu", "title": "Neden Yerel Değişken?", "desc": "Fonksiyon içindeki değişkenlerin dışarıyı bozamaması, binlerce satırlık projelerde isim çakışmalarını önler.", "items": [{ "bold": "global", "text": "Fonksiyon içinden dışarıdaki değişkeni değiştirmek için `global bakiye` tanımlanır." }] }
      ]
    },
    "workshop": {
      "title": "Bileşik Faiz ve Finansal Hesaplama Fonksiyonu",
      "subtitle": "Geriye değer döndüren fonksiyonlarla kademeli hesaplama zinciri kurma",
      "steps": [
        { "title": "1. Fonksiyonu Yaz", "desc": "`def indirim_uygula(fiyat, yuzde):` fonksiyonuyla indirimli fiyatı `return` edin." },
        { "title": "2. İkinci Fonksiyon", "desc": "`def kargo_ekle(tutar):` fonksiyonuyla tutar 500'den azsa 50 TL kargo ekleyip `return` edin." },
        { "title": "3. Fonksiyonları Zincirle", "desc": "`son_tutar = kargo_ekle(indirim_uygula(600, 20))` şeklinde fonksiyonları iç içe çağırın." },
        { "title": "4. Sonucu Yazdır", "desc": "Nihai fatura tutarını f-string ile ekrana basın." }
      ],
      "criteria": [
        "`return` anahtar kelimesini doğru konumda kullanma",
        "`print()` ile `return` arasındaki işlevsel farkı uygulayabilme",
        "Yerel değişkenlerin fonksiyon dışından erişilemez olduğunu kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "return Kullanırken Yapılan Hatalar",
      "safetyRules": [
        { "bold": "return'den Sonra Kod Yazmayın (Unreachable Code)", "text": "`return` çalıştığı an fonksiyondan çıkılır; altındaki satırlar ölü koddur, hiç çalışmaz." },
        { "bold": "Gereksiz global Kullanımından Kaçının", "text": "Her şeyi global yapmak fonksiyonların bağımsızlığını yok eder ve spagetti koda yol açar." },
        { "bold": "Birden Fazla Değer Döndürme", "text": "Python'da `return x, y` yazarak virgülle birden çok değeri demet (tuple) olarak döndürebilirsiniz!" }
      ],
      "myths": [
        { "wrong": "Her fonksiyon mutlaka bir `return` içermek zorundadır.", "correct": "Zorunlu değildir; `return` içermeyen fonksiyonlar işini bitirince otomatik olarak `None` döndürür." },
        { "wrong": "`return print(...)` yazmak iyi bir yaklaşımdır.", "correct": "Bu kod ekrana yazar ama fonksiyonun değeri `None` döner; `return` doğrudan değeri döndürmelidir." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod çalıştırıldığında ekrana ne yazdırılır?\n```python\ndef topla(a, b):\n    return a + b\n    print(\"Hesaplandı\")\n\nsonuc = topla(3, 4)\nprint(sonuc)\n```",
      "options": [
        { "text": "A) Hesaplandı \\n 7", "isCorrect": False },
        { "text": "B) 7", "isCorrect": True },
        { "text": "C) None", "isCorrect": False },
        { "text": "D) SyntaxError", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `return a + b` satırı 7 değerini döndürür ve fonksiyonu o anda bitirir. Altındaki `print(\"Hesaplandı\")` satırına sıra hiç gelmez. Ekrana sadece 7 basılır."
    },
    "summary": {
      "keyPoints": [
        "`return` fonksiyonun ürettiği sonucu çağıran koda teslim eder.",
        "Yerel değişkenler (Local) sadece fonksiyonun içinde yaşar.",
        "Fonksiyonları birbirine bağlamak için `return` vazgeçilmez köprüdür."
      ],
      "nextWeek": "Python Standart Modülleri (`math`, `random`, `time`, `turtle` ile Grafik Çizimi)",
      "homework": "Verilen bir sayının karesini `return` eden bir fonksiyon yazıp, bu fonksiyonu 1'den 10'a kadar tüm sayılar için döngüde çağırınız."
    }
  },
  # Hafta 37
  {
    "week": 37,
    "date": "24 - 30 Mayıs",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Fonksiyonlar, Modüller ve Proje Geliştirme",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "Python Standart Modülleri & turtle",
    "subtitle": "import Deyimi, math, random, time Modülleri ve turtle ile Algoritmik Grafik Çizimi",
    "outcomeCode": "BB.9.6.3",
    "targetSkill": "Modüler Entegrasyon & Algoritmik Görselleştirme",
    "curiosityQuestion": "Dünyanın en iyi mühendislerinin yıllarca optimize ettiği matematik ve grafik kütüphanelerini tek bir `import` kelimesiyle projemize nasıl dahil ederiz?",
    "roadmap": [
      { "title": "Modül (Module) ve Kütüphane Nedir?", "desc": "Önceden yazılmış fonksiyon ve araçların paketlenmiş hali." },
      { "title": "import Sözdizimi", "desc": "`import math`, `from random import randint`, `import time as t`." },
      { "title": "math ve time Modülleri", "desc": "`sqrt` (karekök), `ceil`/`floor`, `sleep` (bekletme) ve kronometre." },
      { "title": "turtle ile Çizim", "desc": "Piksel piksel geometrik desenler, çokgenler ve fraktallar çizme." }
    ],
    "section1": {
      "title": "Python Standart Kütüphanesinin Zenginliği",
      "subtitle": "\"Pilleri Dahil\" (Batteries Included) Felsefesi",
      "cards": [
        {
          "title": "3 Popüler Yerleşik Modül",
          "icon": "📚",
          "desc": "Hiçbir şey yüklemeden Python ile birlikte gelen devasa güç.",
          "items": [
            { "bold": "math Modülü", "text": "İleri matematik: Trigonometri, logaritma, faktöriyel (`math.factorial`), pi sayısı (`math.pi`)." },
            { "bold": "random Modülü", "text": "Rastgele seçim (`choice`), karıştırma (`shuffle`), zar ve sayı üretimi." },
            { "bold": "time Modülü", "text": "`time.sleep(2)` ile programı 2 saniye bekletme veya kodun çalışma süresini ölçme." }
          ]
        }
      ]
    },
    "section2": {
      "title": "turtle ile Algoritmik Geometri Sanatı",
      "subtitle": "Açılar ve döngülerle ekrana sanat eseri çizme",
      "codeSnippet": "# turtle ile Renkli Çokgen Çizimi\nimport turtle\nimport random\n\ntosbaga = turtle.Turtle()\ntosbaga.speed(10)\nrenkler = [\"red\", \"blue\", \"green\", \"orange\", \"purple\", \"cyan\"]\n\n# 36 dönüşlü geometrik spiral deseni\nfor i in range(36):\n    tosbaga.color(random.choice(renkler))\n    for _ in range(4): # Kare çizimi\n        tosbaga.forward(100)\n        tosbaga.right(90)\n    tosbaga.right(10) # 10 derece dön\n\nturtle.done()",
      "codeTitle": "turtle_sanat.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Görsel Matematik", "title": "Açı ve Döngü Bağı", "desc": "Bir çokgenin dış açıları toplamı 360 derecedir. Bir n-gen çizmek için döngüde `360 / n` derece dönülür.", "items": [{ "bold": "from math import *", "text": "Yıldızla tüm modülü içeri almak isim çakışmalarına yol açabileceği için önerilmez." }] }
      ]
    },
    "workshop": {
      "title": "Geri Sayım Sayacı ve turtle Yıldız Çizimi",
      "subtitle": "`time.sleep()` ile konsolda geri sayım yapıp ardından ekrana 5 köşeli parlak yıldız çizen program",
      "steps": [
        { "title": "1. Geri Sayım Yap", "desc": "for döngüsü ve `time.sleep(1)` ile 3-2-1 geri sayımını ekrana basın." },
        { "title": "2. turtle Başlat", "desc": "Kalem rengini sarı (`gold`), arka planı siyah (`black`) ayarlayın." },
        { "title": "3. Yıldız Çiz", "desc": "Yıldız için 5 tekrarlı döngüde `forward(150)` ve `right(144)` komutlarını işletin." },
        { "title": "4. Çizimi Tamamla", "desc": "`turtle.done()` ile pencerenin kapanmadan ekranda kalmasını sağlayın." }
      ],
      "criteria": [
        "`import` yöntemlerini kurallara uygun kullanma",
        "`time.sleep` ile zaman kontrollü akış tasarlama",
        "Geometrik dönüş açısını (144°) algoritmik hesaplayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "Modül Kullanımında Dosya Adı Tuzağı!",
      "safetyRules": [
        { "bold": "Kendi Dosyanıza Modül Adı Vermeyin!", "text": "Dosyanıza ASLA `random.py`, `math.py` veya `turtle.py` adı vermeyin; Python kendi modülü yerine sizin dosyanızı yüklemeye çalışıp çöker!" },
        { "bold": "as ile Kısaltma Yapın", "text": "`import datetime as dt` şeklinde uzun kütüphane isimlerine takma ad (alias) verin." },
        { "bold": "Gereksiz Kütüphane Yüklemeyin", "text": "Kullanmadığınız modülleri `import` etmek programın açılış süresini uzatır." }
      ],
      "myths": [
        { "wrong": "Python kütüphaneleri paralıdır.", "correct": "Standart kütüphaneler ve PyPI üzerindeki 400.000'den fazla paket tamamen açık kaynak ve ücretsizdir." },
        { "wrong": "turtle sadece çocuk oyunudur.", "correct": "turtle dünyaca ünlü üniversitelerde koordinat sistemleri ve özyinelemeli fraktalları öğretmek için kullanılır." }
      ]
    },
    "quiz": {
      "question": "Python'da `math` kütüphanesini kullanarak 64 sayısının karekökünü hesaplamak için hangi kod satırı kullanılır?",
      "options": [
        { "text": "A) math.sqr(64)", "isCorrect": False },
        { "text": "B) math.sqrt(64)", "isCorrect": True },
        { "text": "C) math.root(64)", "isCorrect": False },
        { "text": "D) math.kok(64)", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `math.sqrt()` (square root) fonksiyonu verilen pozitif sayının karekökünü (64 için 8.0) hesaplar."
    },
    "summary": {
      "keyPoints": [
        "Modüller tekerleği yeniden icat etmeden devasa araçları kullanmamızı sağlar.",
        "`import` anahtar kelimesiyle kütüphaneler projeye bağlanır.",
        "`turtle` döngü ve açı matematiğini görselleştiren harika bir eğitim aracıdır."
      ],
      "nextWeek": "Hata Türleri ve İstisna Yönetimi (`try`, `except`, `finally`)",
      "homework": "turtle kütüphanesini kullanarak ekrana iç içe 3 farklı renkte eşkenar üçgen çizen bir Python kodu yazınız."
    }
  },
  # Hafta 38
  {
    "week": 38,
    "date": "31 Mayıs - 06 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Fonksiyonlar, Modüller ve Proje Geliştirme",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "İstisna Yönetimi: try & except",
    "subtitle": "Çalışma Zamanı Hatalarını Yakalama, ZeroDivisionError, ValueError, IndexError ve finally Bloğu",
    "outcomeCode": "BB.9.6.4",
    "targetSkill": "Dayanıklı (Robust) Kodlama & Hata Toleransı",
    "curiosityQuestion": "Kullanıcı sayı yerine harf girdiğinde veya internet bağlantısı koptuğunda bir uygulamanın aniden 'patlayıp' kapanmasını nasıl engelleriz?",
    "roadmap": [
      { "title": "Hata (Exception) Nedir?", "desc": "Kodun çalışması sırasında beklenmeyen durumlarda fırlatılan alarm." },
      { "title": "try - except Blokları", "desc": "\"Şunu yapmayı dene (`try`), hata çıkarsa yakala ve idare et (`except`).\"" },
      { "title": "Özel İstisna Türleri", "desc": "`ValueError`, `ZeroDivisionError`, `IndexError`, `FileNotFoundError`." },
      { "title": "finally Bloğu", "desc": "Hata çıksa da çıkmasa da her halükarda mutlaka çalışan temizlik bloğu." }
    ],
    "section1": {
      "title": "try-except Blok Mekanizması",
      "subtitle": "Programın çökmesini önleyen emniyet kemeri",
      "cards": [
        {
          "title": "İstisna Blokları Mimarisi",
          "icon": "🛡️",
          "desc": "Kusursuz hata yakalama adımları.",
          "items": [
            { "bold": "try Bloğu", "text": "Hata çıkma ihtimali olan tehlikeli kodlar bu bloğun içine konulur." },
            { "bold": "except HataTuru", "text": "Beklenen hata çıktığında devreye girer ve kullanıcıya kibar bir uyarı gösterir." },
            { "bold": "else Bloğu", "text": "Yalnızca hiçbir hata çıkmadığında çalışır." },
            { "bold": "finally Bloğu", "text": "Dosyayı kapatmak veya bağlantıyı kesmek gibi mutlaka yapılması gereken temizlik işlerini yürütür." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Kusursuz Hesap Makinesi Örneği",
      "subtitle": "ValueError ve ZeroDivisionError hatalarına karşı tam koruma",
      "codeSnippet": "# Çökmeyen Güvenli Sayı Girişi ve Bölme\ntry:\n    sayi1 = float(input(\"1. Sayıyı giriniz: \"))\n    sayi2 = float(input(\"2. Sayıyı giriniz: \"))\n    sonuc = sayi1 / sayi2\n    print(f\"Sonuç: {sonuc}\")\nexcept ValueError:\n    print(\"HATA: Lütfen sadece rakam ve sayısal değer giriniz!\")\nexcept ZeroDivisionError:\n    print(\"HATA: Bir sayı asla sıfıra bölünemez!\")\nfinally:\n    print(\"Hesaplama işlemi sona erdi.\")",
      "codeTitle": "try_except.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Dayanıklılık", "title": "Profesyonel Yazılım Kalitesi", "desc": "Amatör kodlar ilk yanlış girdide çöker; profesyonel yazılımlar `try-except` ile kullanıcıyı yönlendirip ayakta kalır.", "items": [{ "bold": "Çıplak except", "text": "Sadece `except:` yazmak hatanın türünü gizlediği için önerilmez; hatanın adı belirtilmelidir." }] }
      ]
    },
    "workshop": {
      "title": "Kullanıcıyı Zorlayan Dayanıklı Girdi Fonksiyonu",
      "subtitle": "Kullanıcı geçerli bir tamsayı girene kadar döngüde soran ve çökmeyen fonksiyon kodlama",
      "steps": [
        { "title": "1. Fonksiyonu Başlat", "desc": "`def guvenli_sayi_al(mesaj):` fonksiyonunu tanımlayın." },
        { "title": "2. while True Döngüsü", "desc": "Döngü içine `try - except ValueError` bloğunu yerleştirin." },
        { "title": "3. Dönüşümü Yap", "desc": "`deger = int(input(mesaj))` başarılı olursa `return deger` ile döngüyü kırıp değeri teslim edin." },
        { "title": "4. Hata Halinde Uyar", "desc": "`except ValueError:` içine 'Geçersiz sayı! Tekrar deneyin.' yazıp döngünün sürmesini sağlayın." }
      ],
      "criteria": [
        "Hata fırlatabilecek operasyonları `try` içine alabilme",
        "İstisna türünü (`ValueError`) doğru yakalama",
        "`finally` bloğunun mantığını kavrama"
      ]
    },
    "tips": {
      "safetyTitle": "İstisna Yönetiminde Güvenlik Standartları",
      "safetyRules": [
        { "bold": "Hataları Sessizce Yutmayın", "text": "`except: pass` yazmak programdaki tüm hataları gizler ve nerede hata olduğunu bulmayı imkansız kılar." },
        { "bold": "try İçini Dar Tutun", "text": "Yüz satırlık kodu tek bir `try` içine koymayın; sadece hata verebilecek 2-3 satırı koyun." },
        { "bold": "Kullanıcıya Hata Mesajını Anlaşılır Verin", "text": "Teknik Traceback yerine 'Parola en az 8 karakter olmalıdır' gibi rehberlik edici mesajlar basın." }
      ],
      "myths": [
        { "wrong": "try-except kodun içindeki mantık hatalarını (örneğin yanlış formülü) düzeltir.", "correct": "try-except mantık hatalarını düzeltmez; sadece programın kilitlenip çökmesini önler." },
        { "wrong": "İyi yazılmış bir programda hiçbir try-except bloğuna gerek yoktur.", "correct": "Dosya açma, ağ bağlantısı ve kullanıcı girdisi gibi dış faktörlerin olduğu her profesyonel kodda try-except şarttır." }
      ]
    },
    "quiz": {
      "question": "Python'da `try-except` bloğunda bir hata oluşsa da oluşmasa da HER HALÜKARDA en son çalışan blok hangisidir?",
      "options": [
        { "text": "A) else", "isCorrect": False },
        { "text": "B) catch", "isCorrect": False },
        { "text": "C) finally", "isCorrect": True },
        { "text": "D) stop", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. `finally` bloğu, try içinde hata çıksa da çıkmasa da en son mutlaka çalışan temizleme ve kapanış bloğudur."
    },
    "summary": {
      "keyPoints": [
        "`try - except` programın öngörülemeyen hatalarda çökmesini önler.",
        "Yaygın istisnalar: `ValueError`, `ZeroDivisionError`, `IndexError`.",
        "`finally` her şartta çalışarak kaynakları (dosya vb.) güvenle kapatır."
      ],
      "nextWeek": "2. Dönem 2. Yazılı Sınavı Büyük Yıl Sonu Tekrarı",
      "homework": "Kullanıcının girdiği bir liste indeksine göre elemanı ekrana basan, liste dışı indeks girildiğinde `IndexError` yakalayan bir kod yazınız."
    }
  },
  # Hafta 39
  {
    "week": 39,
    "date": "07 - 13 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Fonksiyonlar, Modüller ve Proje Geliştirme",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "Yıl Sonu Büyük Sınav Tekrarı",
    "subtitle": "Tüm Yılın Müfredat Özeti: Donanımdan Python Fonksiyonlarına Kapsamlı Soru Çözümleri",
    "outcomeCode": "BB.9.6.5",
    "targetSkill": "Bütünleşik Bilgisayar Bilimi Yetkinliği",
    "curiosityQuestion": "Eylül ayında başladığımız sıfır noktasından bugüne kadar bilgisayar bilimi konusunda zihninizde nasıl devasa bir dönüşüm gerçekleşti?",
    "roadmap": [
      { "title": "1. Dönem Özeti", "desc": "Donanım, işletim sistemleri, ağlar, siber güvenlik, kriptoloji ve algoritmalar." },
      { "title": "2. Dönem Temelleri", "desc": "Karşılaştırma, `if-elif-else`, `for` ve `while` döngü mekanizmaları." },
      { "title": "Veri Yapıları & Fonksiyonlar", "desc": "Listeler, demetler, sözlükler, metin metotları, `def` ve `return`." },
      { "title": "Yıl Sonu Final Denemesi", "desc": "MEB standartlarında 100 puanlık büyük yıl sonu sınav provası." }
    ],
    "section1": {
      "title": "9. Sınıf Bilgisayar Bilimi Tam Müfredat Haritası",
      "subtitle": "Bir lise öğrencisinin kazandığı 6 temel yetkinlik sütunu",
      "cards": [
        {
          "title": "Yılın 6 Altın Sütunu",
          "icon": "🏆",
          "desc": "Geleceğin mühendislerinin temel yapı taşları.",
          "items": [
            { "bold": "1. Sistem & Donanım", "text": "Von Neumann mimarisi, CPU döngüsü, RAM/SSD hiyerarşisi." },
            { "bold": "2. Ağlar & Güvenlik", "text": "OSI modeli, IP, DNS, kriptoloji, siber hijyen ve KVKK." },
            { "bold": "3. Hesaplamalı Düşünme", "text": "Ayrıştırma, soyutlama, sözde kod ve akış şemaları." },
            { "bold": "4. Python Kontrol Yapıları", "text": "Değişkenler, operatörler, `if-elif-else`, `for` ve `while` döngüleri." },
            { "bold": "5. Veri Yapıları", "text": "Listeler, demetler, sözlükler, kümeler ve string metotları." },
            { "bold": "6. Modüler Kodlama", "text": "Fonksiyonlar (`def`, `return`), modüller ve `try-except`." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Büyük Yıl Sonu Soru Çözümü",
      "subtitle": "Tüm konuları birleştiren kapsamlı sınav sorusu",
      "codeSnippet": "# Soru: Bir listenin çift sayılarının karelerini toplayıp\n# sonucu return eden fonksiyonu yazınız.\n\ndef cift_kare_toplam(sayilar):\n    toplam = 0\n    for sayi in sayilar:\n        if sayi % 2 == 0:     # Çift kontrolü\n            toplam += sayi ** 2 # Kareyi ekle\n    return toplam\n\nliste = [1, 2, 3, 4, 5]\nprint(\"Sonuç:\", cift_kare_toplam(liste))\n# 2^2 + 4^2 = 4 + 16 = 20",
      "codeTitle": "yil_sonu_soru.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Sentez", "title": "Bütünleşik Bilgi", "desc": "Bu tek soru; liste gezintisini, mod operatörünü, if koşulunu, üs almayı ve fonksiyonel return mimarisini aynı anda test eder.", "items": [{ "bold": "Tam Puan", "text": "Kodun her adımını açıklayan kısa yorum satırları eklemek sınavda tam puanı garantiler." }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahtada Kahoot / Quizizz Bilgi Yarışması",
      "subtitle": "Tüm yılın kazanımlarını içeren 30 soruluk büyük sınıf turnuvası",
      "steps": [
        { "title": "1. Yarışmaya Bağlan", "desc": "Akıllı tahtadaki PIN koduyla telefon veya tabletlerden yarışmaya katılın." },
        { "title": "2. Hızlı ve Doğru Cevapla", "desc": "Donanım, ağ, algoritma ve Python kod sorularını süresi içinde yanıtlayın." },
        { "title": "3. Hatalı Soruları Tartış", "desc": "Sınıfın en çok yanıldığı 5 soruyu tahtada adım adım analiz edin." },
        { "title": "4. Kürsü ve Tebrik", "desc": "İlk 3'e giren öğrencileri ve katılan tüm sınıfı tebrik edin." }
      ],
      "criteria": [
        "Yıl boyunca edinilen bilişim kavramlarını hatırlama ve ilişkilendirme",
        "Kod bloklarını hızlı ve hatasız analiz etme",
        "Dostane rekabet ve centilmenlik ruhu"
      ]
    },
    "tips": {
      "safetyTitle": "Final Sınavında Başarı Tavsiyeleri",
      "safetyRules": [
        { "bold": "Soruları Dikkatli Okuyun", "text": "`return` mü isteniyor yoksa `print` mi, fonksiyon mu yazılacak yoksa sadece döngü mü, dikkat edin." },
        { "bold": "Boş Bırakmayın", "text": "Tam kod aklınıza gelmese bile mantığını sözde kod veya akış şeması gibi açıklayarak kısmi puan alın." },
        { "bold": "Girintilemeyi Vurgulayın", "text": "Kağıda kod yazarken 4 boşluk girintileri belirgin şekilde içeriden başlatın." }
      ],
      "myths": [
        { "wrong": "Yıl sonu sınavı sadece son ünitelerden çıkar.", "correct": "MEB ortak sınavları tüm yılın sarmal (kümülatif) kazanımlarını dengeli olarak ölçer." },
        { "wrong": "Programlama ezber işidir.", "correct": "Ezberleyenler ilk değişik soruda yanılır; mantığı ve algoritmayı kavrayanlar her soruyu çözer." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki kod parçasında `islem([1, 2, 3, 4])` çağrıldığında ekrana basılan değer nedir?\n```python\ndef islem(liste):\n    return len([x for x in liste if x > 2])\nprint(islem([1, 2, 3, 4]))\n```",
      "options": [
        { "text": "A) 4", "isCorrect": False },
        { "text": "B) 2", "isCorrect": True },
        { "text": "C) [3, 4]", "isCorrect": False },
        { "text": "D) 7", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Listede 2'den büyük olan elemanlar 3 ve 4'tür (2 tane). `len()` bu yeni listenin eleman sayısını yani 2'yi döndürür."
    },
    "summary": {
      "keyPoints": [
        "Tüm yılın 39 haftalık mücadelesini ve kazanımlarını özetledik.",
        "Sınav hazırlığımız tam; kendinize ve emeğinize güvenin.",
        "Gelecek hafta yıl sonu büyük Python projemizi hayata geçireceğiz!"
      ],
      "nextWeek": "Python ile Kapsamlı Mini Proje / Metin Tabanlı Macera Oyunu Geliştirme",
      "homework": "Yıl boyunca aldığınız ders notlarını gözden geçirip sınav öncesi son hazırlıklarınızı tamamlayınız."
    }
  },
  # Hafta 40
  {
    "week": 40,
    "date": "14 - 20 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Fonksiyonlar, Modüller ve Proje Geliştirme",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "Büyük Proje: Metin Tabanlı Oyun",
    "subtitle": "Kapsamlı Mini Proje: Karar Ağaçları, Envanter Listesi, Can/Puan Sistemi ve Oyun Döngüsü",
    "outcomeCode": "BB.9.6.6",
    "targetSkill": "Bütünleşik Yazılım Geliştirme & Oyun Mimarisi",
    "curiosityQuestion": "Grafik kartları ve 3D motorlar icat edilmeden önce milyonlarca oyuncuyu ekrana kilitleyen efsane Zork metin macera oyunları nasıl kodlanıyordu?",
    "roadmap": [
      { "title": "Oyun Mimarisi Tasarımı", "desc": "Hikaye akışı, harita odaları ve durum (State) yönetimi." },
      { "title": "Karakter ve Envanter", "desc": "Can (`int`), İsim (`str`), Envanter (`list`) ve Nitelikler (`dict`)." },
      { "title": "Ana Oyun Döngüsü (Game Loop)", "desc": "`while can > 0:` döngüsü ve kullanıcı komutlarının işlenmesi." },
      { "title": "Modüler Fonksiyonlar", "desc": "`oda_sec()`, `savas()`, `esya_al()`, `durum_goster()`." }
    ],
    "section1": {
      "title": "Bir Oyun Döngüsünün (Game Loop) 3 Aşaması",
      "subtitle": "Tüm modern oyun motorlarının temel kalbi",
      "cards": [
        {
          "title": "Oyun Döngüsü Adımları",
          "icon": "🎮",
          "desc": "Oyun bitene kadar saniyede onlarca kez tekrarlanan süreç.",
          "items": [
            { "bold": "1. Girdi Alma (Input)", "text": "Kullanıcının tercihini (`1: Kuzeye git`, `2: Sandığı aç`) okuma." },
            { "bold": "2. Durum Güncelleme (Update)", "text": "Karakterin canını azaltma, envantere kılıç ekleme, canavarın hamlesi." },
            { "bold": "3. Ekrana Çizme (Render)", "text": "Yeni oda tasvirini, kalan canı ve envanteri konsola estetik biçimde basma." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Proje Çekirdek Kodu: Zindan Macerası",
      "subtitle": "Tüm yıl öğrendiğimiz yapıların tek bir projede buluşması",
      "codeSnippet": "# 9. Sınıf Yıl Sonu Büyük Projesi\nimport random, time\n\noyuncu = {\"ad\": \"\", \"can\": 100, \"envanter\": [\"Meşale\"]}\noyun_aktif = True\n\ndef baslat():\n    oyuncu[\"ad\"] = input(\"Kahramanın Adı: \")\n    print(f\"\\nZindana Hoş Geldin {oyuncu['ad']}! Canın: {oyuncu['can']}\")\n    oda_1()\n\ndef oda_1():\n    global oyun_aktif\n    print(\"\\nKaranlık bir odadasın. Önünde iki kapı var: [1] Sol, [2] Sağ\")\n    secim = input(\"Seçimin: \")\n    if secim == \"1\":\n        print(\"Bir canavarla karşılaştın! -20 Can\")\n        oyuncu[\"can\"] -= 20\n        if oyuncu[\"can\"] <= 0:\n            print(\"Öldün! Oyun Bitti.\")\n            return\n        print(f\"Kalan can: {oyuncu['can']}\")\n    else:\n        print(\"Hazine sandığı buldun! Envantere Altın Anahtar eklendi.\")\n        oyuncu[\"envanter\"].append(\"Altın Anahtar\")\n    print(f\"Mevcut Envanter: {oyuncu['envanter']}\")",
      "codeTitle": "zindan_macerasi.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Entegrasyon", "title": "Büyük Başarı", "desc": "Bu projede sözlükler, listeler, fonksiyonlar, if-elif-else, modüller ve döngüler kusursuz bir ahenkle çalışır.", "items": [{ "bold": "Geliştirme Fikri", "text": "Canavar savaşlarına zar atma (`random`) ve gecikme (`time.sleep`) ekleyerek heyecanı artırın." }] }
      ]
    },
    "workshop": {
      "title": "Metin Tabanlı Macera Oyununu Tamamlama ve Özelleştirme",
      "subtitle": "Kendi hikayenizi, yeni odaları, canavarları ve eşyaları ekleyerek oyunu genişletme",
      "steps": [
        { "title": "1. Hikaye Ağacını Çiz", "desc": "Kağıt üzerine 4 odalı bir zindan haritası ve kararları çizin." },
        { "title": "2. Oda Fonksiyonlarını Kodla", "desc": "Her oda için ayrı bir fonksiyon (`oda_kuzey()`, `oda_hazine()`) yazın." },
        { "title": "3. Envanter Kontrolü Ekle", "desc": "Son kapıyı açmak için envanterde `\"Altın Anahtar\"` olup olmadığını `in` ile denetleyin." },
        { "title": "4. Oyunu Arkadaşına Oynat", "desc": "Sıra arkadaşınızın oyununuzu oynamasını sağlayıp geri bildirim alın." }
      ],
      "criteria": [
        "Bütünleşik programlama mantığını projede başarıyla uygulama",
        "Kullanıcı hatalarında çökmeyen dayanıklı oyun akışı tasarlama",
        "Yaratıcı hikaye ve estetik konsol arayüzü sunma"
      ]
    },
    "tips": {
      "safetyTitle": "Büyük Projeleri Geliştirirken Stratejiler",
      "safetyRules": [
        { "bold": "Adım Adım Geliştirin", "text": "Önce oyunun çalışan en basit halini (MVP) yapın; sonra eşyaları ve canavarları ekleyin." },
        { "bold": "Sık Sık Test Edin", "text": "Her yeni fonksiyon eklediğinizde hemen çalıştırıp test edin; hata birikmesini engelleyin." },
        { "bold": "Yedek Almayı İhmal Etmeyin", "text": "`zindan_v1.py`, `zindan_v2.py` şeklinde sürüm sürüm kaydedin." }
      ],
      "myths": [
        { "wrong": "Oyun yapmak için mutlaka karmaşık 3D grafik motorları gerekir.", "correct": "Oyunun kalbini kurallar, senaryo ve algoritmik mekanikler oluşturur; metin oyunları en güçlü zihinsel egzersizdir." },
        { "wrong": "Tek başına büyük bir program yazılamaz.", "correct": "Modüler fonksiyonlar kullanarak tek bir geliştirici bile harika oyunlar inşa edebilir." }
      ]
    },
    "quiz": {
      "question": "Metin tabanlı bir oyunda `if \"Kalkan\" in oyuncu[\"envanter\"]:` ifadesinin görevi aşağıdakilerden hangisidir?",
      "options": [
        { "text": "A) Envantere Kalkan ekler", "isCorrect": False },
        { "text": "B) Envanterdeki Kalkan'ı siler", "isCorrect": False },
        { "text": "C) Oyuncunun envanter listesinde 'Kalkan' olup olmadığını sorgular", "isCorrect": True },
        { "text": "D) Envanteri alfabetik sıralar", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. `in` üyelik operatörü, aranan elemanın listede mevcut olup olmadığını boolean (`True`/`False`) olarak denetler."
    },
    "summary": {
      "keyPoints": [
        "Metin tabanlı oyun projesi tüm yılın kazanımlarını somut bir ürüne dönüştürür.",
        "Fonksiyonlar oyun odalarını, listeler envanteri, sözlükler karakteri temsil eder.",
        "Gelecek hafta yıl sonu bilişim şenliğinde projelerimizi sergileyeceğiz!"
      ],
      "nextWeek": "Yıl Sonu Lise Bilişim Şenliği, Dijital Portfolyo, GitHub Paylaşımı ve Sertifikalar",
      "homework": "Yazdığınız oyun projesine bir son boss (ejderha) savaşı ve tebrik ekranı ekleyiniz."
    }
  },
  # Hafta 41
  {
    "week": 41,
    "date": "21 - 27 Haziran",
    "hours": "2 Ders Saati",
    "unit": "6. Ünite: Fonksiyonlar, Modüller ve Proje Geliştirme",
    "unitBadge": "6. Ünite",
    "unitTheme": "unite-6",
    "title": "Yıl Sonu Bilişim Şenliği & Portfolyo",
    "subtitle": "Dijital Portfolyo, GitHub / Kod Paylaşımı, 10. Sınıf Bilgisayar Bilimi (Kur 2) Vizyonu ve Başarı Sertifikaları",
    "outcomeCode": "BB.9.6.7",
    "targetSkill": "Teknoloji Liderliği & Sürekli Mesleki Gelişim",
    "curiosityQuestion": "9. sınıfta temellerini attığımız bu algoritmik düşünce ve Python gücüyle 10. sınıfta robotik, yapay zekâ ve mobil uygulamalar dünyasına nasıl uçacağız?",
    "roadmap": [
      { "title": "Bilişim Şenliği ve Proje Sergisi", "desc": "Yıl boyunca üretilen en iyi kodların ve oyunların sunumu." },
      { "title": "GitHub & Dijital Portfolyo", "desc": "Kodları açık kaynak dünyasına kazandırma ve README yazımı." },
      { "title": "10. Sınıf (Kur 2) Fragmanı", "desc": "Nesne Yönelimli Programlama (OOP), Arduino/Robotik, Web Geliştirme ve Yapay Zekâ." },
      { "title": "Başarı Belgeleri & Gurur Anı", "desc": "41 haftalık maratonu tamamlayan genç bilişimcilere tebrikler." }
    ],
    "section1": {
      "title": "41 Haftalık Büyük Başarı Hikayesi",
      "subtitle": "Tüketen değil, teknolojiyi kavrayıp üreten bireyler oldunuz",
      "cards": [
        {
          "title": "Nereden Nereye?",
          "icon": "🎓",
          "desc": "Bir yılda kat ettiğimiz muazzam yolculuk.",
          "items": [
            { "bold": "Eylül 2026", "text": "Bilgisayarın donanım parçalarını ve sıfır-birlerin mantığını öğrenerek başladık." },
            { "bold": "Kasım - Ocak", "text": "Siber güvenliği, kriptolojiyi, akış şemalarını ve Python'un ilk komutlarını fethettik." },
            { "bold": "Şubat - Nisan", "text": "Karar yapıları, for ve while döngüleriyle bilgisayarı adeta konuştuk." },
            { "bold": "Mayıs - Haziran", "text": "Veri yapıları, fonksiyonlar ve kendi oyun projemizi sıfırdan inşa ettik!" }
          ]
        }
      ]
    },
    "section2": {
      "title": "10. Sınıfta Bizi Neler Bekliyor? (Kur 2 Fragmanı)",
      "subtitle": "Lisenin en heyecanlı ileri teknoloji müfredatı",
      "codeSnippet": "# 10. Sınıf Ön Bakış: Nesne Yönelimli Programlama (OOP)\nclass AkilliRobot:\n    def __init__(self, ad, batarya=100):\n        self.ad = ad\n        self.batarya = batarya\n    \n    def gorev_yap(self):\n        print(f\"{self.ad} otonom göreve başladı! 🤖\")\n\n# Gelecek yıl robotik, nesnelerin interneti (IoT),\n# web teknolojileri ve yapay zekâ ile buluşacağız!",
      "codeTitle": "on_bakis_10_sinif.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "10. Sınıf (Kur 2)", "title": "İleri Bilişim Dünyası", "desc": "Arduino mikrodenetleyicileri, sensörler, motorlar, modern web siteleri, mobil uygulamalar ve TEKNOFEST projeleri sizi bekliyor!", "items": [{ "bold": "Yolunuz Açık Olsun", "text": "Kodlamayı hayatınızın bir parçası yapın; geleceği siz inşa edeceksiniz." }] }
      ]
    },
    "workshop": {
      "title": "Yıl Sonu Bilişim Şenliği ve Sertifika Töreni",
      "subtitle": "Projelerin sınıfa sunulması, öğretmen ve akran değerlendirmesi ve başarı belgelerinin takdimi",
      "steps": [
        { "title": "1. Projeni Sun", "desc": "Hazırladığınız metin tabanlı oyunu veya hesaplama aracını akıllı tahtada 2 dakikada tanıtın." },
        { "title": "2. Canlı Demo Yap", "desc": "Bir sınıf arkadaşınıza oyununuzu oynatarak reaksiyonları izleyin." },
        { "title": "3. Yaz Tatili Hedefini Belirle", "desc": "Yazın hangi bilişim alanını (oyun, web, yapay zekâ, robotik) araştıracağınızı tahtaya yazın." },
        { "title": "4. Sertifikanı Al", "desc": "Öğretmeniniz Vahit Keskin'den 'Genç Bilişim Lideri' başarı belgenizi teslim alın." }
      ],
      "criteria": [
        "Teknik projeyi anlaşılır ve özgüvenle sunabilme",
        "Yıl boyunca gösterilen istikrar ve gelişim çabası",
        "Teknolojiyi etik, üretken ve insanlığa faydalı kullanma bilinci"
      ]
    },
    "tips": {
      "safetyTitle": "Yaz Tatilinde Bilişim Becerilerini Canlı Tutma",
      "safetyRules": [
        { "bold": "GitHub Hesabı Açın", "text": "Yazdığınız kodları github.com üzerinde toplayarak lise stajları ve üniversite için güçlü bir CV oluşturun." },
        { "bold": "TEKNOFEST ve TÜBİTAK'ı Takip Edin", "text": "10. sınıfta okul takımımızla TEKNOFEST yarışmalarına katılmak için yaz tatilinde proje fikirleri düşünün." },
        { "bold": "Açık Kaynak Projelerine Katılın", "text": "Pardus topluluğunu ve açık kaynak forumlarını takip edin." }
      ],
      "myths": [
        { "wrong": "Yazın bilgisayarla hiç ilgilenmeyip her şeyi unutmak normaldir.", "correct": "Haftada sadece 1 saat kod yazmak bile tüm yıl kazandığınız yetenekleri korumanızı sağlar." },
        { "wrong": "Bilgisayar bilimi dersi burada bitti.", "correct": "Bu ders bitmedi; hayatınız boyunca kullanacağınız problem çözme zihninizin sadece ilk kapısını araladı!" }
      ]
    },
    "quiz": {
      "question": "9. Sınıf Bilgisayar Bilimi (Kur 1) dersi boyunca edindiğimiz en değerli kazanım aşağıdakilerden hangisidir?",
      "options": [
        { "text": "A) Sadece sınavdan yüksek not almak", "isCorrect": False },
        { "text": "B) Teknolojiyi sadece tüketen değil, mantığını kavrayıp kodla üretebilen analitik bir zihin kazanmak", "isCorrect": True },
        { "text": "C) Bilgisayar parçalarının adını ezberlemek", "isCorrect": False },
        { "text": "D) Komut ezberlemek", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. Tebrikler! Bilgisayar Bilimi dersinin nihai hedefi; düşünen, sorgulayan, problem çözen ve geleceğin dijital dünyasını üreten bilinçli bireyler yetiştirmektir."
    },
    "summary": {
      "keyPoints": [
        "41 haftalık 9. Sınıf Bilgisayar Bilimi serüvenini başarıyla ve gururla tamamladınız.",
        "Öğrendiğiniz algoritmalar ve Python temeli gelecekteki tüm mühendisliklerin kapısını açacaktır.",
        "Hepinize harika, verimli ve dinlendirici bir yaz tatili dilerim! 10. sınıfta görüşmek üzere! 🚀"
      ],
      "nextWeek": "İyi Tatiller! 10. Sınıf Bilgisayar Bilimi (Kur 2) - Robotik, OOP ve Yapay Zekâ'da Buluşmak Üzere!",
      "homework": "Yaz tatilinde kendi ilgi alanınıza göre mini bir proje tasarlayıp eylül ayında öğretmeninizle paylaşınız."
    }
  }
]

print("Hafta 32-41 tamamlandı.")
