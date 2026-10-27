#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Full Generator for 9. Sınıf Bilgisayar Bilimi (Kur 1) - 41 Weeks Complete
MEB 2026-2027 Maarif Modeli
Öğretmen: Vahit Keskin
"""

import os
import json
import generator_shared as shared
from build_grade9_curriculum import WEEKS_DATA_9, get_svg_for_week

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(BASE_DIR, "9-sinif")
os.makedirs(OUTPUT_DIR, exist_ok=True)

GRADE_NAME = "9. Sınıf"
COURSE_NAME = "Bilgisayar Bilimi (Kur 1)"

# Let's define Weeks 11 to 19 (Term 1 Part 2)
WEEKS_11_19 = [
  {
    "week": 11,
    "date": "23 - 29 Kasım",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Problem Çözme ve Algoritmalar",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Algoritma Tasarımı & Sözde Kod (Pseudocode)",
    "subtitle": "Girdi-İşlem-Çıktı, Sonluluk, Kesinlik İlkeleri ve Algoritmik Doğrulama",
    "outcomeCode": "BB.9.2.4",
    "targetSkill": "Sözde Kod Yazımı & Mantıksal Modelleme",
    "curiosityQuestion": "Bir yemek tarifinde 'tuz ekleyin' demek bir bilgisayar için neden ölümcül bir belirsizliktir?",
    "roadmap": [
      { "title": "Algoritmanın 5 Temel İlkesi", "desc": "Girdi, Çıktı, Belirlilik (Kesinlik), Sonluluk ve Etkinlik." },
      { "title": "Sözde Kod (Pseudocode)", "desc": "Herhangi bir programlama diline bağımlı olmadan doğal dil benzeri yapı." },
      { "title": "Değişken ve Atama", "desc": "Hafıza kutuları, değer atama operatörü (<- veya =)." },
      { "title": "Masa Başı Testi (Trace Table)", "desc": "Algoritmayı adım adım elle işletip değişken değerlerini takip etme." }
    ],
    "section1": {
      "title": "Algoritmanın Vazgeçilmez 5 Şartı",
      "subtitle": "Hatasız bir algoritmik sürecin standartları",
      "cards": [
        {
          "title": "Algoritma Kriterleri",
          "icon": "📐",
          "desc": "Bilgisayar biliminde bir sürecin algoritma sayılabilmesi için gerekenler.",
          "items": [
            { "bold": "1. Girdi ve Çıktı", "text": "Sıfır veya daha fazla girdi alır, en az bir anlamlı çıktı üretir." },
            { "bold": "2. Belirlilik (Kesinlik)", "text": "Her adım tek bir anlama gelmeli; 'biraz', 'yaklaşık' gibi belirsizlikler olamaz." },
            { "bold": "3. Sonluluk", "text": "Algoritma sonsuz döngüde kalmamalı, sonlu sayıda adımda bitmelidir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Sözde Kod (Pseudocode) Örneği",
      "subtitle": "İki sayının ortalamasını bulan algoritma",
      "codeSnippet": "BAŞLA\n  YAZ \"1. Sınav notunu girin:\"\n  OKU not1\n  YAZ \"2. Sınav notunu girin:\"\n  OKU not2\n  ortalama <- (not1 + not2) / 2\n  EĞER ortalama >= 50 İSE\n    YAZ \"Tebrikler Geçtiniz!\"\n  DEĞİLSE\n    YAZ \"Kaldınız, Bütünlemeye Hazırlanın\"\n  SON EĞER\nBİTİR",
      "codeTitle": "ortalama_sozde_kod.txt",
      "codeLang": "Pseudocode",
      "cards": [
        { "badge": "Sözde Kod", "title": "Programlama Dillerine Köprü", "desc": "Sözde kodu anlayan bir geliştirici aynı mantığı Python, C++, Java veya JavaScript ile saniyeler içinde kodlayabilir.", "items": [{ "bold": "Trace Table", "text": "Değişkenlerin adım adım değerlerini gösteren doğrulama tablosudur." }] }
      ]
    },
    "workshop": {
      "title": "ATM Para Çekme Sürecini Sözde Kod ile Modelleme",
      "subtitle": "Bakiye kontrolü, günlük limit ve para verme adımlarını sözde kod olarak yazma",
      "steps": [
        { "title": "1. Girdileri Tanımla", "desc": "`kart_sifre`, `istenen_tutar` ve `mevcut_bakiye` değişkenlerini belirleyin." },
        { "title": "2. Şifre Kontrolü", "desc": "Eğer şifre yanlışsa 3 deneme hakkı sayacı kurun." },
        { "title": "3. Bakiye ve Limit Kıyasla", "desc": "`istenen_tutar <= mevcut_bakiye` ve `istenen_tutar <= 5000` şartını yazın." },
        { "title": "4. Çıktıyı Ver", "desc": "Parayı verip yeni bakiyeyi ekrana yazdıran adımla bitirin." }
      ],
      "criteria": [
        "Tüm karar şartlarını (EĞER / DEĞİLSE) eksiksiz kurgulama",
        "Algoritmanın her ihtimalde sonlu bir adıma ulaşmasını sağlama",
        "Masa başı testi yaparak mantık hatası olmadığını ispatlama"
      ]
    },
    "tips": {
      "safetyTitle": "Algoritma Tasarımında Mantıksal Güvenlik",
      "safetyRules": [
        { "bold": "Sıfıra Bölünme Hatası (ZeroDivision)", "text": "Paydada değişken varsa sıfır olup olmadığını EĞER ile kontrol etmeden bölme yapmayın." },
        { "bold": "Sonsuz Döngü Tehlikesi", "text": "Sayacın her adımda artırıldığından veya bitiş koşulunun gerçekleşebilir olduğundan emin olun." },
        { "bold": "Negatif Sayı Kontrolü", "text": "Yaş, para, mesafe gibi fiziksel büyüklüklerde negatif değer girişlerini engelleyin." }
      ],
      "myths": [
        { "wrong": "Sözde kod bilgisayar tarafından doğrudan çalıştırılan bir programlama dilidir.", "correct": "Sözde kod insanlar arasındaki iletişimi ve algoritma netliğini sağlamak için yazılan standart bir taslaktır." },
        { "wrong": "Her algoritma sadece tek bir doğru yolla çözülür.", "correct": "Aynı problemi çözen onlarca farklı algoritma olabilir; önemli olan hız ve bellek verimliliğidir." }
      ]
    },
    "quiz": {
      "question": "Aşağıdakilerden hangisi bir algoritmanın taşıması gereken zorunlu temel özelliklerden biri DEĞİLDİR?",
      "options": [
        { "text": "A) Kesinlik (Belirlilik)", "isCorrect": False },
        { "text": "B) Sonluluk", "isCorrect": False },
        { "text": "C) Belirli bir programlama diline (Örn: Python) bağımlı olması", "isCorrect": True },
        { "text": "D) En az bir çıktı üretmesi", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. Algoritmalar dilden tamamen bağımsız evrensel mantık adımlarıdır; Python, C++ veya Java sadece bu adımları makineye anlatan araçlardır."
    },
    "summary": {
      "keyPoints": [
        "Algoritma bir problemi çözmek için baştan sona tanımlanmış kurallar bütünüdür.",
        "Sözde kod karmaşık programları yazmadan önce en büyük yardımcımızdır.",
        "Sonluluk ve kesinlik olmayan hiçbir yönerge algoritma kabul edilemez."
      ],
      "nextWeek": "Akış Şemaları, Geometrik Semboller ve Flowgorithm ile Görsel Modelleme",
      "homework": "Kullanıcının girdiği 3 sayıdan en büyüğünü bulan algoritmanın sözde kodunu defterinize yazınız."
    }
  },
  {
    "week": 12,
    "date": "30 Kasım - 06 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Problem Çözme ve Algoritmalar",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Akış Şemaları & Geometrik Semboller",
    "subtitle": "Standart ANSI Sembolleri, Karar Eşkenar Dörtgeni ve Flowgorithm Uygulamaları",
    "outcomeCode": "BB.9.2.5",
    "targetSkill": "Görsel Algoritma Modelleme & Simülasyon",
    "curiosityQuestion": "NASA roket fırlatma prosedürlerini veya hava trafik kontrol sistemlerini neden sayfalarca metin yerine akış şemalarıyla yönetir?",
    "roadmap": [
      { "title": "Standart Akış Şeması Sembolleri", "desc": "Elips (Başla/Dur), Paralelkenar (Girdi/Çıktı), Dikdörtgen (İşlem), Eşkenar Dörtgen (Karar)." },
      { "title": "Akış Yönü ve Oklar", "desc": "Yukarıdan aşağıya ve soldan sağa mantıksal bağlantı kuralları." },
      { "title": "Döngü Yapılarının Gösterimi", "desc": "Karar sembolünden geriye dönen oklarla tekrar blokları inşa etme." },
      { "title": "Flowgorithm ile Simülasyon", "desc": "Çizilen şemayı bilgisayarda adım adım çalıştırıp değişkenleri izleme." }
    ],
    "section1": {
      "title": "Evrensel ANSI Akış Şeması Sembolleri",
      "subtitle": "Her mühendisin ve programcının ortak görsel dili",
      "cards": [
        {
          "title": "Temel 4 Geometrik Şekil",
          "icon": "📊",
          "desc": "Akış şemalarında kullanılan standart semboller.",
          "items": [
            { "bold": "Elips", "text": "Algoritmanın BAŞLA ve BİTİR (DUR) noktalarını gösterir." },
            { "bold": "Paralelkenar", "text": "Kullanıcıdan veri alma (OKU) veya ekrana sonuç basma (YAZ) işlemleri." },
            { "bold": "Dikdörtgen", "text": "Aritmetik hesaplama ve değişken atamaları (Örn: `toplam = a + b`)." },
            { "bold": "Eşkenar Dörtgen (Baklava)", "text": "Karar ve kıyaslama; 'Evet' ve 'Hayır' olmak üzere mutlaka iki çıkış kolu bulunur." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Flowgorithm ile Canlı Algoritma Simülasyonu",
      "subtitle": "Görsel akış şemasından otomatik Python kodu üretme",
      "codeSnippet": "// Flowgorithm Mantığı:\nFunction Main\n    Declare Integer sayi\n    Output \"Bir sayı giriniz:\"\n    Input sayi\n    If sayi > 0 Then\n        Output \"Pozitif\"\n    False:\n        If sayi < 0 Then\n            Output \"Negatif\"\n        False:\n            Output \"Sıfır\"\n        End\n    End\nEnd",
      "codeTitle": "sayi_analiz.fprg",
      "codeLang": "Flowgorithm",
      "cards": [
        { "badge": "Görsel Güç", "title": "Hata Takibi", "desc": "Flowgorithm şemayı işletirken o an hangi sembolün aktif olduğunu yeşil renkle yakarak gösterir.", "items": [{ "bold": "Dışa Aktarma", "text": "Şemanızı tek tıkla Python, C++ veya Java koduna dönüştürebilir." }] }
      ]
    },
    "workshop": {
      "title": "Flowgorithm ile Faktöriyel ve Asal Sayı Şeması Çizme",
      "subtitle": "Döngü içeren bir akış şemasını Flowgorithm üzerinde sıfırdan tasarlayıp test etme",
      "steps": [
        { "title": "1. Şemayı Başlat", "desc": "Ana fonksiyonda `n`, `sayac` ve `faktoriyel` tamsayı değişkenlerini tanımlayın." },
        { "title": "2. Girdiyi Al", "desc": "Paralelkenar sembolüyle kullanıcıdan pozitif bir `n` değeri okuyun." },
        { "title": "3. Döngü Kararı Kur", "desc": "Eşkenar dörtgende `sayac <= n` kontrolü yapıp geriye dönüş okunu bağlayın." },
        { "title": "4. Çıktıyı Ekrana Bas", "desc": "Döngü bittiğinde `faktoriyel` sonucunu yazdırıp BİTİR'e bağlayın." }
      ],
      "criteria": [
        "Sembolleri standart kurallara uygun hatasız kullanma",
        "Karar sembollerinin iki çıkışını (Evet/Hayır) doğru etiketleme",
        "Flowgorithm'de değişken penceresinden bellek değişimini gözlemleme"
      ]
    },
    "tips": {
      "safetyTitle": "Akış Şeması Çizerken Dikkat Edilecek Kurallar",
      "safetyRules": [
        { "bold": "Tek Başla, Tek Bitir", "text": "Bir akış şemasında sadece bir adet BAŞLA ve tercihen tek bir BİTİR sembolü olmalıdır." },
        { "bold": "Kesişen oklardan kaçının", "text": "Okların birbirinin üzerinden geçmesi şemanın okunmasını zorlaştırır; bağlantı çemberi kullanın." },
        { "bold": "Karar sembolü çıkışları", "text": "Eşkenar dörtgenden çıkan oklara mutlaka 'Evet' ve 'Hayır' yazılmalıdır." }
      ],
      "myths": [
        { "wrong": "Akış şemaları sadece basit programlar içindir, profesyonel yazılımda kullanılmaz.", "correct": "Havacılık, tıp ve otomotiv gibi kritik sektörlerde tüm yazılımlar önce akış şeması onayından geçer." },
        { "wrong": "Dikdörtgen içine karar sorusu yazılabilir.", "correct": "Dikdörtgen sadece işlem içindir; karar soruları yalnızca eşkenar dörtgen içine yazılır." }
      ]
    },
    "quiz": {
      "question": "Bir akış şemasında 'Girilen sınav notu 50'den büyük mü?' gibi bir koşulu ve karar mekanizmasını temsil etmek için hangi geometrik şekil kullanılır?",
      "options": [
        { "text": "A) Paralelkenar", "isCorrect": False },
        { "text": "B) Dikdörtgen", "isCorrect": False },
        { "text": "C) Eşkenar Dörtgen (Baklava)", "isCorrect": True },
        { "text": "D) Daire", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. Eşkenar dörtgen (karar sembolü), mantıksal bir karşılaştırma yaparak akışın Evet ya da Hayır yönünde dallanmasını sağlar."
    },
    "summary": {
      "keyPoints": [
        "Akış şeması algoritmanın geometrik haritasıdır.",
        "Sembollerin biçimi işlevini belirtir: Elips (başla/dur), Dikdörtgen (işlem), Eşkenar dörtgen (karar).",
        "Flowgorithm gibi araçlar algoritmaları bilgisayarda test etmeyi görselleştirir."
      ],
      "nextWeek": "Mantıksal Önermeler, Doğruluk Tabloları ve Boole Cebri",
      "homework": "Kullanıcının girdiği bir sayının çift mi tek mi olduğunu bulan akış şemasını defterinize renkli kalemlerle çiziniz."
    }
  },
  {
    "week": 13,
    "date": "07 - 13 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Problem Çözme ve Algoritmalar",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Mantıksal Önermeler & Boole Cebri",
    "subtitle": "VE (AND), VEYA (OR), DEĞİL (NOT) Bağlaçları, Doğruluk Tabloları ve Mantık Kapıları",
    "outcomeCode": "BB.9.2.6",
    "targetSkill": "Boole Mantığı & Sayısal Karar Tasarımı",
    "curiosityQuestion": "Milyarlarca transistörden oluşan devasa bir işlemci en karmaşık kararları sadece VE, VEYA, DEĞİL mantık kapılarıyla nasıl çözer?",
    "roadmap": [
      { "title": "Önerme ve Doğruluk Değerleri", "desc": "Kesin doğru (1 / True) veya yanlış (0 / False) hüküm bildiren ifadeler." },
      { "title": "Temel Mantık Bağlaçları", "desc": "VE (AND), VEYA (OR), DEĞİL (NOT) ve ÖZEL VEYA (XOR)." },
      { "title": "Doğruluk Tabloları", "desc": "Tüm girdi kombinasyonlarının mantıksal sonuç matrisini çıkarma." },
      { "title": "Mantık Kapıları (Logic Gates)", "desc": "Fiziksel çiplerde transistörlerin mantık kapısı olarak davranışı." }
    ],
    "section1": {
      "title": "Boole Mantık Bağlaçları Tablosu",
      "subtitle": "Programlamadaki `and`, `or`, `not` ifadelerinin matematiksel kökü",
      "cards": [
        {
          "title": "Bağlaçların Davranış Kuralları",
          "icon": "⚡",
          "desc": "Doğruluk tablolarının altın kuralları.",
          "items": [
            { "bold": "VE (AND - ∧)", "text": "Yalnızca her iki önerme de 1 (Doğru) ise sonuç 1'dir; bir tane 0 varsa sonuç 0 olur." },
            { "bold": "VEYA (OR - ∨)", "text": "Önermelerden en az biri 1 ise sonuç 1'dir; sadece ikisi de 0 iken sonuç 0 olur." },
            { "bold": "DEĞİL (NOT - ¬)", "text": "Önermenin değerini tersine çevirir: NOT(1) = 0, NOT(0) = 1." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Python'da Mantıksal Önerme İfadeleri",
      "subtitle": "Kod içerisinde bileşik koşulların işletilmesi",
      "codeSnippet": "# Python Mantıksal Operatörler\nyas = 16\nkullanici_adi = \"vahit\"\n\n# VE (and): Her ikisi de doğru olmalı\nbasvuru_gecerli = (yas >= 15) and (kullanici_adi == \"vahit\")\nprint(basvuru_gecerli)  # True\n\n# VEYA (or): Biri doğru olsa yeter\nindirim = (yas < 18) or (yas > 65)\nprint(indirim)          # True\n\n# DEĞİL (not)\nprint(not True)         # False",
      "codeTitle": "mantik_test.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "XOR (Özel Veya)", "title": "Farklılık Arayan Kapı", "desc": "Girdiler birbirinden farklı olduğunda 1 üretir; ikisi de aynıysa (0-0 veya 1-1) sonuç 0'dır.", "items": [{ "bold": "Toplayıcılar (Adders)", "text": "İşlemcinin sayıları toplaması XOR ve AND kapılarının birleşimiyle yapılır." }] }
      ]
    },
    "workshop": {
      "title": "Doğruluk Tablosu Çıkarma ve Mantık Devresi Simülasyonu",
      "subtitle": "Logic.ly veya Tinkercad üzerinde AND/OR kapılarıyla basit bir alarm devresi kurma",
      "steps": [
        { "title": "1. Problem Senaryosu", "desc": "Alarm: 'Hava karardıysa (A) VE (Kapı açıldıysa (B) VEYA Pencere kırıldıysa (C))' çalacaktır." },
        { "title": "2. Mantıksal İfadeyi Yaz", "desc": "`Alarm = A AND (B OR C)` formülünü oluşturun." },
        { "title": "3. 8 Satırlı Doğruluk Tablosu", "desc": "A, B, C için (000'dan 111'e) tablosunu çizip alarmın ne zaman 1 olduğunu işaretleyin." },
        { "title": "4. Simülasyonu Çalıştır", "desc": "Işık ve buton anahtarlarını açıp kapatarak lambanın yanışını gözlemleyin." }
      ],
      "criteria": [
        "Bileşik önermelerin doğruluk tablolarını hatasız doldurabilme",
        "İşlem önceliğinde parantez ve NOT bağlacının etkisini doğru kurgulama",
        "Yazılımdaki karar yapıları ile donanımdaki mantık kapıları bağını kurma"
      ]
    },
    "tips": {
      "safetyTitle": "Mantık İfadelerinde İşlem Önceliği",
      "safetyRules": [
        { "bold": "Öncelik Sırası: NOT > AND > OR", "text": "Parantez yoksa önce NOT, sonra AND, en son OR işletilir." },
        { "bold": "Mutlaka Parantez Kullanın", "text": "Karmaşık koşullarda öncelik belirsizliğini önlemek için `(A and B) or C` şeklinde parantez kullanın." },
        { "bold": "Kısa Devre Değerlendirme (Short-circuit)", "text": "AND işleminde ilk ifade False ise Python ikinciye hiç bakmaz; çünkü sonuç zaten False olacaktır." }
      ],
      "myths": [
        { "wrong": "Günlük dildeki 'veya' ile mantıktaki 'VEYA (OR)' tamamen aynıdır.", "correct": "Günlük dilde 'çay veya kahve' derken biri kastedilir (XOR); mantıkta ise ikisini birden seçmek de Doğrudur (OR)." },
        { "wrong": "Bilgisayar mantığı gri tonları veya olasılıkları doğrudan anlar.", "correct": "En temelde bilgisayar yalnızca 1 (Doğru) ve 0 (Yanlış) kesinliğiyle çalışır." }
      ]
    },
    "quiz": {
      "question": "A = True ve B = False olduğuna göre, `not(A and B) or B` mantıksal ifadesinin nihai doğruluk değeri nedir?",
      "options": [
        { "text": "A) True (1)", "isCorrect": True },
        { "text": "B) False (0)", "isCorrect": False },
        { "text": "C) Belirsiz", "isCorrect": False },
        { "text": "D) Hata verir", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: A. `A and B` = True and False = False. `not(False)` = True. `True or False` = True."
    },
    "summary": {
      "keyPoints": [
        "Boole cebri 1 ve 0 değerleri üzerine kurulmuş matematiksel mantık sistemidir.",
        "VE (çarpma benzeri) ve VEYA (toplama benzeri) mantık kararlarının temelidir.",
        "Bilgisayar işlemcileri bu mantık kapılarının mikroskobik silikon dizilimleridir."
      ],
      "nextWeek": "Temel Arama ve Sıralama Algoritmaları (Linear & Binary Search, Bubble Sort)",
      "homework": "`A or (not B and C)` ifadesinin 8 satırlık doğruluk tablosunu defterinize çıkarınız."
    }
  },
  {
    "week": 14,
    "date": "14 - 20 Aralık",
    "hours": "2 Ders Saati",
    "unit": "2. Ünite: Problem Çözme ve Algoritmalar",
    "unitBadge": "2. Ünite",
    "unitTheme": "unite-2",
    "title": "Arama & Sıralama Algoritmaları",
    "subtitle": "Doğrusal Arama (Linear), İkili Arama (Binary Search) ve Kabarcık Sıralaması (Bubble Sort)",
    "outcomeCode": "BB.9.2.7",
    "targetSkill": "Algoritmik Verimlilik & Zaman Karmaşıklığı Analizi",
    "curiosityQuestion": "1 milyon sayfalık bir telefon rehberinde bir ismi baştan sona tek tek aramak yerine ikili aramayla en fazla kaç adımda bulabilirsiniz?",
    "roadmap": [
      { "title": "Arama Problemi", "desc": "Veri yığını içinde hedef elemanı bulma gereksinimi." },
      { "title": "Doğrusal Arama (Linear Search)", "desc": "Sırasız veride baştan sona tek tek kontrol etme; O(N) karmaşıklık." },
      { "title": "İkili Arama (Binary Search)", "desc": "Sıralı veride her adımda arama uzayını ikiye bölme; O(log N) mucizesi." },
      { "title": "Kabarcık Sıralaması (Bubble Sort)", "desc": "Yan yana duran elemanları kıyaslayıp yer değiştirerek dizme mantığı." }
    ],
    "section1": {
      "title": "Linear Search vs Binary Search Karşılaştırması",
      "subtitle": "Sıralı verinin sağladığı muazzam hız avantajı",
      "cards": [
        {
          "title": "Arama Algoritmaları Analizi",
          "icon": "🔍",
          "desc": "Veri boyutu büyüdükçe algoritma seçiminin önemi.",
          "items": [
            { "bold": "Linear Search (Doğrusal)", "text": "Verinin sıralı olması gerekmez; 1 milyon eleman için en kötü durumda 1 milyon adım sürer." },
            { "bold": "Binary Search (İkili)", "text": "Veri MUTLAKA sıralı olmalıdır; 1 milyon eleman için en fazla 20 adımda (log2(1.000.000) ≈ 20) hedefe ulaşır!" },
            { "bold": "Telefon Rehberi Mantığı", "text": "Rehberi tam ortadan açıp aranan harfe göre sağa veya sola bakma tekniğidir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Kabarcık Sıralaması (Bubble Sort) Mantığı",
      "subtitle": "Büyük elemanların su kabarcığı gibi sona yükselmesi",
      "codeSnippet": "# Python ile İkili Arama (Binary Search)\ndef ikili_arama(liste, hedef):\n    sol = 0\n    sag = len(liste) - 1\n    while sol <= sag:\n        orta = (sol + sag) // 2\n        if liste[orta] == hedef:\n            return orta # Bulundu!\n        elif liste[orta] < hedef:\n            sol = orta + 1\n        else:\n            sag = orta - 1\n    return -1 # Bulunamadı",
      "codeTitle": "ikili_arama.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Algoritma Hızı", "title": "Büyük O Gösterimi (Big-O)", "desc": "Algoritmaların veri sayısı (N) arttıkça ne kadar yavaşladığını ifade eden uluslararası matematik standardıdır.", "items": [{ "bold": "Bubble Sort", "text": "Anlaşılması kolaydır ancak O(N^2) olduğu için büyük verilerde çok yavaştır." }] }
      ]
    },
    "workshop": {
      "title": "Sınıf İçi Sayı Tahmin Oyunu ve Sıralama Deneyi",
      "subtitle": "1-100 arasında tutulan sayıyı Binary Search stratejisiyle en fazla 7 tahminde bulma",
      "steps": [
        { "title": "1. Sayı Tut", "desc": "Öğretmen 1 ile 100 arasında bir sayı aklında tutar." },
        { "title": "2. İlk Tahmin", "desc": "Tam ortadaki sayıyı söyleyin: '50'. Öğretmen 'Daha Büyük' der." },
        { "title": "3. Kalanı İkiye Böl", "desc": "51-100 arasının ortasını söyleyin: '75'. Öğretmen 'Daha Küçük' der." },
        { "title": "4. Adım Sayısını Say", "desc": "En geç 7. soruda sayıyı bularak 2^7 = 128 kuralını pratik olarak kanıtlayın." }
      ],
      "criteria": [
        "İkili aramanın çalışabilmesi için verinin sıralı olması gerektiğini açıklama",
        "Algoritmik karmaşıklıkta adım sayısının veri miktarıyla değişimini sezme",
        "Bubble sort adımlarında elemanların yer değiştirme (swap) mantığını çözme"
      ]
    },
    "tips": {
      "safetyTitle": "Veri Yapıları ve Arama Püf Noktaları",
      "safetyRules": [
        { "bold": "Sırasız Listede Binary Search Yapmayın", "text": "Sırasız bir dizide Binary Search uygularsanız var olan elemanı bile bulamazsınız." },
        { "bold": "Arama Sık İse Önce Sıralayın", "text": "Aynı listede binlerce kez arama yapılacaksa, baştan bir kez sıralayıp Binary Search kullanmak çok daha kârlıdır." },
        { "bold": "Python'un Hazır Metotları", "text": "Python'da `in` operatörü ve `list.sort()` arkasında yüksek performanslı Timsort ve C kodu çalışır." }
      ],
      "myths": [
        { "wrong": "Hızlı bir bilgisayarda her algoritma aynı sürede çalışır, algoritma seçimi önemsizdir.", "correct": "Kötü bir algoritma süper bilgisayarda bile saatler sürerken, verimli bir algoritma eski telefonda salisede biter." },
        { "wrong": "Binary search her türlü veride uygulanabilir.", "correct": "Yalnızca sıralanmış ve doğrudan indeksle erişilebilen veri yapılarında uygulanabilir." }
      ]
    },
    "quiz": {
      "question": "1'den 128'e kadar sıralı bir sayı listesinde aranan bir sayıyı bulmak için İkili Arama (Binary Search) algoritması en kötü ihtimalle en fazla kaç karşılaştırma yapar?",
      "options": [
        { "text": "A) 128", "isCorrect": False },
        { "text": "B) 64", "isCorrect": False },
        { "text": "C) 7", "isCorrect": True },
        { "text": "D) 1", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. İkili arama her adımda listeyi yarıya böler. 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1 olmak üzere tam 7 adımda (log2(128) = 7) hedefe ulaşır."
    },
    "summary": {
      "keyPoints": [
        "Arama ve sıralama bilgisayar biliminin omurgasıdır.",
        "Sıralı veri üzerinde ikili arama doğrusal aramadan katbekat daha hızlıdır.",
        "Algoritmaların kalitesi kodun uzunluğuyla değil çalışma verimliliğiyle ölçülür."
      ],
      "nextWeek": "Python ile Programlamaya Giriş, IDLE, VS Code ve İlk Kodlarımız (`print`)",
      "homework": "Kağıda karışık 5 sayı yazıp Kabarcık Sıralaması (Bubble Sort) adımlarıyla adım adım nasıl sıralandığını oklarla gösteriniz."
    }
  },
  {
    "week": 15,
    "date": "21 - 27 Aralık",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Python ile Programlamaya Giriş",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "Python Geliştirme Ortamı & print()",
    "subtitle": "Python Felsefesi, IDLE, VS Code, Etkileşimli Kabuk vs Betik Modu ve Yorum Satırları",
    "outcomeCode": "BB.9.3.1",
    "targetSkill": "Kodlama Ortamı Kurulumu & Temel Sözdizimi",
    "curiosityQuestion": "Instagram, Netflix, NASA ve Spotify gibi dev yazılımlar neden ana geliştirme dili olarak Python'ı tercih ediyor?",
    "roadmap": [
      { "title": "Python Nedir ve Neden Popüler?", "desc": "Okunabilir temiz sözdizimi, zengin kütüphane ekosistemi ve geniş topluluk." },
      { "title": "Geliştirme Ortamları (IDE)", "desc": "Python IDLE, Visual Studio Code ve Çevrimiçi Derleyiciler." },
      { "title": "Etkileşimli Kabuk vs Dosya Modu", "desc": "Satır satır çalıştırma (REPL) ile `.py` dosyasında proje yazma farkı." },
      { "title": "İlk Komut: print() ve Yorumlar", "desc": "Ekrana çıktı basma, tırnak kuralları, `sep`, `end` ve `#` yorumları." }
    ],
    "section1": {
      "title": "Python'un Temel İlkeleri ve Sözdizimi",
      "subtitle": "Okunabilirlik ve sadelik üzerine kurulu dil",
      "cards": [
        {
          "title": "Python'u Özel Kılan Özellikler",
          "icon": "🐍",
          "desc": "Modern programlama dünyasında Python'un yeri.",
          "items": [
            { "bold": "Yorumlanan Dil (Interpreted)", "text": "Kodu derlemeden (compile) satır satır doğrudan çalıştırır; hızlı prototip üretir." },
            { "bold": "Temiz ve Sade Sözdizimi", "text": "Süslü parantezler yerine girintileme (indentation) kullanır; İngilizce gibi okunur." },
            { "bold": "Yapay Zekâ ve Veri Bilimi", "text": "TensorFlow, PyTorch, Pandas gibi modern teknolojilerin ortak dilidir." }
          ]
        }
      ]
    },
    "section2": {
      "title": "print() Fonksiyonu Parametreleri ve Yorumlar",
      "subtitle": "Ekrana profesyonel çıktı üretme teknikleri",
      "codeSnippet": "# İlk Python Programım - Öğretmen: Vahit Keskin\nprint(\"Merhaba Dünya!\", \"Lise Bilişim\", sep=\" - \")\n# sep parametresi kelimeler arasına karakter koyar\n\nprint(\"Adım:\", end=\" \")\nprint(\"Ahmet\")\n# end parametresi satır sonuna ne geleceğini belirler\n\n\"\"\"\nÇok satırlı açıklama ve\ndokümantasyon bloğu\n\"\"\"",
      "codeTitle": "hafta15_giris.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Yorum Satırları (#)", "title": "Kodun Dokümantasyonu", "desc": "Bilgisayar `#` ile başlayan satırları çalıştırmaz; bu satırlar kodu okuyan diğer programcılar içindir.", "items": [{ "bold": "Hata Ayıklama", "text": "Şüpheli kod satırlarını başına `#` koyarak geçici olarak devre dışı bırakabilirsiniz." }] }
      ]
    },
    "workshop": {
      "title": "VS Code Kurulumu ve İlk Python Konsol Kartviziti",
      "subtitle": "Ekrana ASCII sanatı ve `print()` fonksiyonlarıyla öğrenci bilgi kartı tasarlama",
      "steps": [
        { "title": "1. Dosya Oluştur", "desc": "VS Code'da `kartvizit.py` adında yeni bir dosya açın." },
        { "title": "2. Çerçeve Çiz", "desc": "`print(\"=\" * 40)` gibi pratik çarpma işlemleriyle dekoratif çerçeve yapın." },
        { "title": "3. Bilgilerini Yazdır", "desc": "Ad, Soyad, Okul Numarası ve İlgi Alanı satırlarını `sep` parametresiyle düzenleyin." },
        { "title": "4. Terminalden Çalıştır", "desc": "`python3 kartvizit.py` komutuyla konsol çıktısını test edin." }
      ],
      "criteria": [
        "Metinlerde tırnak açma/kapama (`\"` veya `'`) kuralına tam uyma",
        "`sep` ve `end` parametrelerinin etkisini doğru kullanma",
        "Koda açıklayıcı yorum satırları (`#`) ekleme disiplini"
      ]
    },
    "tips": {
      "safetyTitle": "Python Kodlarken Dikkat Edilecek İlkeler",
      "safetyRules": [
        { "bold": "Büyük/Küçük Harf Duyarlılığı (Case-Sensitive)", "text": "`Print()` hata verir; Python'da tüm yerleşik komutlar küçük harfle `print()` yazılmalıdır." },
        { "bold": "Tırnak Eşleşmesi", "text": "Çift tırnakla başladıysanız çift tırnakla bitirmelisiniz; `\"metin'` sözdizimi hatası (SyntaxError) üretir." },
        { "bold": "Dosya İsmi Seçimi", "text": "Dosyanıza asla `python.py` veya `math.py` gibi standart modül isimleri vermeyin." }
      ],
      "myths": [
        { "wrong": "Python sadece başlangıç dilidir, büyük profesyonel projelerde C++ zorunludur.", "correct": "YouTube ve Instagram omurgası Python (Django) ile yazılmıştır; doğru mimariyle devasa sistemleri yönetir." },
        { "wrong": "Yorum satırları programın çalışma hızını yavaşlatır.", "correct": "Yorum satırları derleme anında tamamen atlanır; programa hiçbir ek yük getirmez." }
      ]
    },
    "quiz": {
      "question": "Python'da `print(\"2026\", \"2027\", sep=\"/\")` komutu çalıştırıldığında terminal ekranında hangi çıktı görüntülenir?",
      "options": [
        { "text": "A) 2026 2027", "isCorrect": False },
        { "text": "B) 2026/2027", "isCorrect": True },
        { "text": "C) 2026 sep 2027", "isCorrect": False },
        { "text": "D) Hata verir", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `sep=\"/\"` parametresi, virgülle ayrılmış argümanların arasına boşluk yerine belirtilen karakteri (`/`) yerleştirir."
    },
    "summary": {
      "keyPoints": [
        "Python sade, anlaşılır ve güçlü yapısıyla dünyanın en popüler yazılım dillerindendir.",
        "`print()` ekrana bilgi çıktılamak için kullanılan ilk temel fonksiyondur.",
        "Yorum satırları temiz kod (clean code) yazımının vazgeçilmez standardıdır."
      ],
      "nextWeek": "Değişkenler, Veri Tipleri (`int`, `float`, `str`, `bool`) ve Tip Dönüşümleri",
      "homework": "Kendi bilgisayarınıza Python 3 ve VS Code kurup ekrana 'Kodlamaya Başlıyorum!' yazdırınız."
    }
  },
  {
    "week": 16,
    "date": "28 Aralık - 03 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Python ile Programlamaya Giriş",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "Değişkenler & Veri Tipleri",
    "subtitle": "int, float, str, bool, type() Fonksiyonu, İsimlendirme Kuralları ve Tip Dönüşümleri",
    "outcomeCode": "BB.9.3.2",
    "targetSkill": "Veri Türü Modelleme & Bellek Yönetimi",
    "curiosityQuestion": "Bilgisayar hafızasında `5` sayısı ile `\"5\"` metni arasında ne fark vardır ve ikisini toplamaya çalışırsak ne olur?",
    "roadmap": [
      { "title": "Değişken Mantığı", "desc": "RAM bellekte değer saklayan etiketli kutular." },
      { "title": "4 Temel Veri Tipi", "desc": "Tam sayı (`int`), Ondalıklı sayı (`float`), Metin (`str`), Mantıksal (`bool`)." },
      { "title": "Değişken İsimlendirme Kuralları", "desc": "snake_case, rakamla başlayamama, Türkçe karakterden kaçınma ve anahtar kelimeler." },
      { "title": "Tip Dönüşümleri (Type Casting)", "desc": "`int()`, `float()`, `str()` ile veri türünü güvenle dönüştürme." }
    ],
    "section1": {
      "title": "Python Temel Veri Tipleri ve type() Kullanımı",
      "subtitle": "Dinamik tipleme (Dynamic Typing) özgürlüğü",
      "cards": [
        {
          "title": "Veri Türleri Sözlüğü",
          "icon": "📦",
          "desc": "Python'da her değişken bir veri türüne aittir.",
          "items": [
            { "bold": "int (Integer)", "text": "Pozitif ve negatif tam sayılar: `yas = 15`, `sicaklik = -4`." },
            { "bold": "float (Floating Point)", "text": "Noktalı ondalıklı sayılar: `pi = 3.1415`, `fiyat = 49.90`." },
            { "bold": "str (String)", "text": "Tek veya çift tırnak içindeki metinler: `okul = \"Fen Lisesi\"`." },
            { "bold": "bool (Boolean)", "text": "Yalnızca iki değer alır: `True` (Doğru) veya `False` (Yanlış)." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Tip Dönüşümü (Type Casting) ve Kurallar",
      "subtitle": "Metinsel sayıları matematiksel sayılara çevirme",
      "codeSnippet": "# Veri Tipleri ve Dönüşümler\nsayi_metin = \"100\"\nsayi_tam = int(sayi_metin) # str -> int\n\non_sayi = float(5)         # 5 -> 5.0 (int -> float)\nmetin_hali = str(3.14)     # float -> str\n\nprint(type(sayi_tam))      # <class 'int'>\nprint(sayi_tam + 50)       # 150 (Matematiksel toplama)\nprint(sayi_metin + \"50\")   # \"10050\" (Metin birleştirme!)",
      "codeTitle": "degiskenler.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "İsimlendirme", "title": "Python Kuralları", "desc": "Değişken adları harf veya alt tire `_` ile başlamalıdır; asla rakamla başlayamaz ve boşluk içeremez.", "items": [{ "bold": "Yasaklı Kelimeler", "text": "`for`, `if`, `while`, `class` gibi ayrılmış sözcükler değişken adı yapılamaz." }] }
      ]
    },
    "workshop": {
      "title": "Öğrenci Not Bilgi Sistemi Değişken Tasarımı",
      "subtitle": "Farklı veri türlerinden 6 değişken tanımlayıp ekrana türleriyle birlikte yazdırma",
      "steps": [
        { "title": "1. Değişkenleri Tanımla", "desc": "`ogrenci_ad` (str), `okul_no` (int), `ortalama` (float), `burslu_mu` (bool) değerlerini atayın." },
        { "title": "2. Tipleri Sorgula", "desc": "`type()` fonksiyonu ile her birinin sınıfını konsola yazdırın." },
        { "title": "3. Dönüşüm Yap", "desc": "Kullanıcının metin olarak girdiği notu `int()` ile sayıya çevirin." },
        { "title": "4. Bilgi Kartını Bas", "desc": "Tüm değişkenleri biçimlendirerek tek bir kartta sergileyin." }
      ],
      "criteria": [
        "Veriye en uygun veri tipini doğru seçebilme",
        "Geçersiz değişken isimlerini (`2sayi`, `ad soyad` vb.) teşhis edip düzeltme",
        "Tip uyuşmazlığı hatasını (TypeError) anlayıp giderme"
      ]
    },
    "tips": {
      "safetyTitle": "Değişkenler ile Güvenli Kodlama",
      "safetyRules": [
        { "bold": "Anlamlı İsimler Verin", "text": "`a`, `b`, `x` yerine `ogrenci_yasi`, `kdv_tutari` gibi açıklayıcı isimler seçin." },
        { "bold": "Türkçe Karakterlerden Kaçının", "text": "Python 3 Türkçe harfleri desteklese bile uluslararası standart gereği `ç, ğ, ı, ö, ş, ü` kullanmayın." },
        { "bold": "Dönüşümde Hata Kontrolü", "text": "`int(\"ahmet\")` kodunu çalıştırmak programı çökertir (ValueError)." }
      ],
      "myths": [
        { "wrong": "Bir değişkenin türü Python'da asla değiştirilemez.", "correct": "Python dinamik tiplemelidir; bir değişkene önce int sonra str atanabilir ancak bu iyi bir kodlama pratiği değildir." },
        { "wrong": "`\"10\" + \"20\"` işleminin sonucu `30` yapar.", "correct": "Tırnak içindeki ifadeler metindir; sonuç metin birleştirme ile `\"1020\"` olur." }
      ]
    },
    "quiz": {
      "question": "Aşağıdaki değişken tanımlamalarından hangisi Python kurallarına göre GEÇERSİZDİR (SyntaxError verir)?",
      "options": [
        { "text": "A) ogrenci_yasi = 16", "isCorrect": False },
        { "text": "B) _gizli_kod = 404", "isCorrect": False },
        { "text": "C) 1inci_sinav = 85", "isCorrect": True },
        { "text": "D) sinavNotu = 90", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: C. Python'da değişken isimleri ASLA rakamla başlayamaz (`1inci_sinav` geçersizdir; `sinav_1` olmalıdır)."
    },
    "summary": {
      "keyPoints": [
        "Değişkenler programın hafızadaki yapı taşlarıdır.",
        "Dört temel tip: `int` (tam sayı), `float` (ondalık), `str` (metin), `bool` (mantıksal).",
        "Matematiksel işlem yapabilmek için metin halindeki sayılar `int()` veya `float()` ile dönüştürülmelidir."
      ],
      "nextWeek": "1. Dönem 2. Yazılı Sınavı Tekrarı ve Kodlama Alıştırmaları",
      "homework": "Bir ürünün adını, adetini (int), birim fiyatını (float) ve stokta olup olmadığını (bool) saklayan bir Python dosyası yazınız."
    }
  },
  {
    "week": 17,
    "date": "04 - 10 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Python ile Programlamaya Giriş",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "1. Dönem 2. Sınav Tekrarı & Kodlama",
    "subtitle": "Algoritma, Akış Şeması, Mantık Kapıları ve Python Temelleri Soru Çözümleri",
    "outcomeCode": "BB.9.3.3",
    "targetSkill": "Sınav Performansı & Kod İnceleme (Code Review)",
    "curiosityQuestion": "Yazılı sınavda verilen 5 satırlık karmaşık bir kodun ne çıktı üreteceğini bilgisayar olmadan sadece kağıt üzerinde nasıl bulursunuz?",
    "roadmap": [
      { "title": "Algoritma & Sözde Kod Tekrarı", "desc": "Sayaçlar, toplam biriktirme ve karar blokları analizi." },
      { "title": "Akış Şeması Okuma", "desc": "Sembollerin işlevleri ve dallanma adımlarını takip etme." },
      { "title": "Boole Mantığı Alıştırmaları", "desc": "AND / OR / NOT işlemlerinin doğruluk değerini hesaplama." },
      { "title": "Python Kod Çıktısı Bulma (Trace)", "desc": "Değişken takibi ve tip dönüşümü tuzak soruları." }
    ],
    "section1": {
      "title": "2. Yazılı Sınavı Odak Konuları",
      "subtitle": "En çok puan getiren problem ve kod analizi tipleri",
      "cards": [
        {
          "title": "Sınavda Karşılaşacağınız 3 Soru Tipi",
          "icon": "🎯",
          "desc": "MEB standart senaryolarına göre soru dağılımı.",
          "items": [
            { "bold": "1. Kod Çıktısını Bulma", "text": "Verilen kodun ekrana ne yazdıracağını (`sep`, `end`, tırnaklar ve tip dönüşümleri dahil) bulma." },
            { "bold": "2. Akış Şemasını Çizme", "text": "Verilen günlük hayat senaryosunu elips, paralelkenar ve baklavalarla modelleme." },
            { "bold": "3. Hata Ayıklama (Bug Finding)", "text": "Bozuk verilen sözde kod veya Python kodundaki 3 hatayı tespit edip düzeltme." }
          ]
        }
      ]
    },
    "section2": {
      "title": "Örnek Yazılı Soru Çözümü",
      "subtitle": "Tipik tuzak soru ve adım adım çözüm",
      "codeSnippet": "# Soru: Aşağıdaki kodun ekran çıktısı nedir?\nx = \"20\"\ny = 5\n# print(x + y) -> TypeError verir!\nsonuc1 = int(x) + y\nsonuc2 = x + str(y)\nprint(\"1:\", sonuc1)\nprint(\"2:\", sonuc2)\n\n# Çıktı:\n# 1: 25\n# 2: 205",
      "codeTitle": "sinav_provasi.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Püf Noktası", "title": "Metin ile Sayı Toplanamaz", "desc": "Python'da str ile int arasına `+` konulursa hata verir. `int()` ile çevrilirse toplar, `str()` ile çevrilirse yan yana yapıştırır.", "items": [{ "bold": "Hata Türü", "text": "`TypeError: can only concatenate str to str`" }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Tahtada Sınav Simülasyonu ve Kod Tamamlama",
      "subtitle": "Yarım bırakılmış kod bloklarını tahtada canlı olarak tamamlama ve test etme",
      "steps": [
        { "title": "1. Soruyu Oku", "desc": "Kullanıcının girdiği doğum yılına göre yaşını hesaplayan eksik kodu inceleyin." },
        { "title": "2. Hatayı Teşhis Et", "desc": "`input()` ile gelen değerin `str` olduğunu ve `int()` dönüşümü gerektiğini bulun." },
        { "title": "3. Kodu Düzelt", "desc": "Doğru değişken türleriyle işlemi tamamlayıp çalıştırın." },
        { "title": "4. Akran Puanlaması", "desc": "Cevabın MEB rubriğindeki tam puan kriterlerini karşıladığını doğrulayın." }
      ],
      "criteria": [
        "Sözdizimi hatalarını (SyntaxError) ve tip hatalarını anında ayırt etme",
        "Masa başı takibiyle kodun çalışma adımlarını kağıt üzerinde simüle edebilme",
        "Sınav sorularına net ve gerekçeli cevap yazma"
      ]
    },
    "tips": {
      "safetyTitle": "Sınav Anında Zaman Yönetimi",
      "safetyRules": [
        { "bold": "Tırnak İşaretlerini Unutmayın", "text": "Metin çıktılarında tırnakların ekranda gözükmeyeceğini (sadece metnin yazılacağını) bilin." },
        { "bold": "Büyük/Küçük Harflere Dikkat", "text": "`True` ve `False` baş harfleri büyük yazılmalıdır." },
        { "bold": "Tüm Şıkları İnceleyin", "text": "İlk şık doğru gibi gelse bile diğer şıkları okumadan işaretleme yapmayın." }
      ],
      "myths": [
        { "wrong": "Programlama sınavında bir virgül eksik olsa tüm soru sıfır puan alır.", "correct": "MEB öğretmenleri süreç odaklı değerlendirir; mantık doğruysa küçük yazım hatalarında kısmi puan verilir." },
        { "wrong": "Algoritma sorularını sadece bilgisayarda deneyerek anlayabiliriz.", "correct": "Zihinsel izleme (trace) yeteneği güçlü olan yazılımcılar hatayı bilgisayardan önce görür." }
      ]
    },
    "quiz": {
      "question": "Python'da `a = 15`, `b = 4` iken `print(a // b)` ve `print(a % b)` komutlarının çıktıları sırasıyla nedir?",
      "options": [
        { "text": "A) 3.75 ve 3", "isCorrect": False },
        { "text": "B) 3 ve 3", "isCorrect": True },
        { "text": "C) 3 ve 4", "isCorrect": False },
        { "text": "D) 4 ve 3", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `//` tam bölme operatörüdür ve ondalığı atıp tam kısmı alır (15 // 4 = 3). `%` modül operatörüdür ve kalanı verir (15 % 4 = 3)."
    },
    "summary": {
      "keyPoints": [
        "2. Yazılı sınavı algoritma mantığı ve Python temel sözdizimini kapsar.",
        "Tip dönüşümleri ve operatör kuralları sınavın en kritik belirleyicisidir.",
        "Haftaya kullanıcıdan dinamik girdi almayı (`input`) öğreneceğiz."
      ],
      "nextWeek": "Kullanıcıdan Veri Alma (`input()`), Aritmetik Operatörler ve f-string",
      "homework": "1. Dönem konularını içeren 20 soruluk deneme testini çözüp çözemediğiniz soruları not alınız."
    }
  },
  {
    "week": 18,
    "date": "11 - 17 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Python ile Programlamaya Giriş",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "input(), Operatörler & f-string",
    "subtitle": "Kullanıcı Etkileşimi, Aritmetik İşlemler (+, -, *, /, //, %, **) ve Modern Metin Formatlama",
    "outcomeCode": "BB.9.3.4",
    "targetSkill": "Etkileşimli Programlama & Aritmetik Çözümleme",
    "curiosityQuestion": "Kullanıcının girdiği her bilginin Python tarafından otomatik olarak 'metin (str)' kabul edildiğini bilmezseniz hesap makineniz nasıl bozulur?",
    "roadmap": [
      { "title": "Kullanıcıdan Veri Alma: input()", "desc": "Konsol üzerinden klavye girdisi okuma ve değişkene atama." },
      { "title": "input() ile Gelen Verinin Doğası", "desc": "Her zaman `str` döner; matematik için `int(input())` zorunluluğu." },
      { "title": "7 Aritmetik Operatör", "desc": "Toplama (+), Çıkarma (-), Çarpma (*), Bölme (/), Tam Bölme (//), Mod (%), Üs Alma (**)." },
      { "title": "Modern Metin Formatlama: f-string", "desc": "`f\"Merhaba {ad}, yaşınız {yas}\"` kullanımının kolaylığı." }
    ],
    "section1": {
      "title": "Aritmetik Operatörlerin Tam Tablosu",
      "subtitle": "Matematiksel formülleri koda dökme kuralları",
      "cards": [
        {
          "title": "Python Aritmetik Araçları",
          "icon": "➗",
          "desc": "Hesaplamalarda kullanılan temel semboller.",
          "items": [
            { "bold": "Bölme (/) vs Tam Bölme (//)", "text": "`/` daima float döner (10 / 2 = 5.0). `//` ise küsuratı atar tam sayıyı alır (10 // 3 = 3)." },
            { "bold": "Mod Operatörü (%)", "text": "Bölümden kalanı verir; bir sayının çiftliğini veya basamaklarını bulmada kullanılır (17 % 5 = 2)." },
            { "bold": "Üs Alma (**)", "text": "Kuvvet hesaplar: `2 ** 8 = 256`, `9 ** 0.5 = 3.0` (karekök)." }
          ]
        }
      ]
    },
    "section2": {
      "title": "input() ve f-string Devrimi",
      "subtitle": "Eski `%` ve `.format()` yerine okunabilir f-string kullanımı",
      "codeSnippet": "# Kullanıcıdan Veri Alma ve f-string\nad = input(\"Adınızı giriniz: \")\ndogum_yili = int(input(\"Doğum yılınız: \"))\nguncel_yil = 2026\nyas = guncel_yil - dogum_yili\n\n# Modern f-string ile ekrana basma\nprint(f\"Sayın {ad}, {guncel_yil} yılı itibarıyla {yas} yaşındasınız!\")\nprint(f\"10 yıl sonra {yas + 10} yaşında olacaksınız.\")",
      "codeTitle": "kullanici_etkilesim.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "f-string Gücü", "title": "Süslü Parantez İçinde Kod", "desc": "Süslü parantez `{}` içine doğrudan değişken adını veya matematiksel işlemi yazabilirsiniz.", "items": [{ "bold": "Hız ve Okunabilirlik", "text": "f-string Python 3.6+ ile gelen en hızlı ve temiz formatlama yöntemidir." }] }
      ]
    },
    "workshop": {
      "title": "Akıllı Beden Kitle İndeksi (BKİ) Hesaplayıcı Kodlama",
      "subtitle": "Kullanıcıdan kilo ve boy alıp BKİ formülünü hesaplayan interaktif Python programı",
      "steps": [
        { "title": "1. Girdileri Al", "desc": "`kilo = float(input(\"Kilonuz (kg): \"))` ve `boy = float(input(\"Boyunuz (metre, örn: 1.75): \"))` yazın." },
        { "title": "2. Formülü Uygula", "desc": "`bki = kilo / (boy ** 2)` formülü ile indeksi hesaplayın." },
        { "title": "3. Yuvarlama Yap", "desc": "`round(bki, 2)` ile virgülden sonra iki basamağa sınırlayın." },
        { "title": "4. f-string ile Göster", "desc": "`f\"Vücut Kitle İndeksiniz: {bki}\"` şeklinde şık bir sonuç raporu basın." }
      ],
      "criteria": [
        "Kullanıcı girdisini doğru sayı türüne (`float` veya `int`) dönüştürme",
        "İşlem önceliğini (parantez kullanımı) doğru kurgulama",
        "f-string sözdizimini hatasız uygulayabilme"
      ]
    },
    "tips": {
      "safetyTitle": "input() Fonksiyonunda Güvenlik İpuçları",
      "safetyRules": [
        { "bold": "Tip Dönüşümünü Unutma", "text": "Kullanıcıdan sayı alırken başına mutlaka `int()` veya `float()` ekleyin; aksi takdirde toplama yerine metin birleşir." },
        { "bold": "Kullanıcıya Yol Gösterin", "text": "`input(\"Yaşınızı giriniz: \")` şeklinde ne yazması gerektiğini açıklayıcı mesajla belirtin." },
        { "bold": "Boş Girdileri Önleyin", "text": "Kullanıcı hiçbir şey yazmadan Enter'a basarsa dönüşüm hatası oluşur." }
      ],
      "myths": [
        { "wrong": "Kullanıcı klavyeden sadece rakam yazsa bile Python onu sayı olarak algılar.", "correct": "Kullanıcı 50 de yazsa `input()` bunu her zaman metin (`\"50\"`) olarak programa iletir." },
        { "wrong": "f-string içine sadece değişken yazılabilir, hesaplama yapılamaz.", "correct": "`f\"{fiyat * 1.20}\"` gibi her türlü Python ifadesi süslü parantez içinde çalışır." }
      ]
    },
    "quiz": {
      "question": "Python'da kullanıcı klavyeden `4` girdiğinde `sayi = input(\"Sayı:\")` ardından `print(sayi * 3)` çalıştırılırsa ekranda ne görünür?",
      "options": [
        { "text": "A) 12", "isCorrect": False },
        { "text": "B) 444", "isCorrect": True },
        { "text": "C) 64", "isCorrect": False },
        { "text": "D) TypeError", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. `input()` metin (`str`) döndürdüğü için `sayi = \"4\"` olur. Bir metni `* 3` ile çarpmak onu 3 kez yan yana yazar (`\"444\"`). Matematiksel 12 için `int(input())` yapılmalıydı!"
    },
    "summary": {
      "keyPoints": [
        "`input()` programı dinamik ve kullanıcıyla konuşan hale getirir.",
        "Kullanıcıdan alınan sayılarla matematik yapılacaksa mutlaka `int()` veya `float()` yapılmalıdır.",
        "f-string, karmaşık metinleri değişkenlerle harmanlamanın en modern yoludur."
      ],
      "nextWeek": "1. Dönem Proje Sergisi, Dijital Portfolyo ve Yarıyıl Değerlendirmesi",
      "homework": "Kullanıcıdan bir kenar uzunluğunu alıp karenin alanını ve çevresini hesaplayan bir program yazınız."
    }
  },
  {
    "week": 19,
    "date": "18 - 24 Ocak",
    "hours": "2 Ders Saati",
    "unit": "3. Ünite: Python ile Programlamaya Giriş",
    "unitBadge": "3. Ünite",
    "unitTheme": "unite-3",
    "title": "1. Dönem Proje Sergisi & Yarıyıl Değerlendirme",
    "subtitle": "Öğrenci Kod Portfolyosu, Akran Değerlendirmesi, Kod Kalitesi ve Dönem Sonu Çıkarımları",
    "outcomeCode": "BB.9.3.5",
    "targetSkill": "Proje Sunumu & Kod İncelemesi (Code Review)",
    "curiosityQuestion": "Yazdığınız bir kodun sadece çalışması yeterli midir, yoksa başka bir programcının onu kolayca okuyup geliştirebilmesi neden daha önemlidir?",
    "roadmap": [
      { "title": "Dönemlik Kod Portfolyosu", "desc": "19 hafta boyunca yazılan donanım, ağ, kripto ve Python betiklerini derleme." },
      { "title": "Kod Kalitesi ve Standartları (PEP 8)", "desc": "Değişken isimlendirme, boşluklar, girintileme ve temiz kod ilkeleri." },
      { "title": "Akran Değerlendirmesi (Peer Review)", "desc": "Arkadaşının kodunu inceleme, yapıcı geri bildirim verme ve hata ayıklama." },
      { "title": "2. Dönem Hedefleri", "desc": "Karar yapıları (if-else), döngüler (for/while), listeler ve fonksiyonlara hazırlık." }
    ],
    "section1": {
      "title": "Temiz Kod (Clean Code) ve PEP 8 Standartları",
      "subtitle": "Profesyonel yazılım mühendislerinin ortak etiketi",
      "cards": [
        {
          "title": "PEP 8'in 3 Altın Kuralı",
          "icon": "✨",
          "desc": "Python topluluğunun resmi kod yazım rehberi.",
          "items": [
            { "bold": "1. Anlamlı İsimlendirme", "text": "Değişken adları küçük harfle ve alt tireyle ayrılmalı (`kullanici_yasi`)." },
            { "bold": "2. Operatör Boşlukları", "text": "`x=5+y` yerine `x = 5 + y` şeklinde operatörlerin etrafına tek boşluk konulmalıdır." },
            { "bold": "3. Açıklayıcı Yorumlar", "text": "Kodun ne yaptığını değil, neden öyle yapıldığını açıklayan kısa yorumlar yazılmalıdır." }
          ]
        }
      ]
    },
    "section2": {
      "title": "1. Dönem Bilişim Başarı Portfolyosu",
      "subtitle": "Kazanılan kritik donanım, ağ, güvenlik ve kodlama becerileri",
      "codeSnippet": "# 1. Dönem Final Özeti Programı\nogrenci = {\n    \"ad\": \"Zeynep\",\n    \"tamamlanan_hafta\": 19,\n    \"kazanimlar\": [\"Donanım Mimarisi\", \"Linux / Pardus\",\n                   \"Ağ Protokolleri\", \"Kriptoloji\",\n                   \"Algoritma & Akış Şeması\", \"Python Temelleri\"],\n    \"durum\": \"2. Döneme Hazır! 🚀\"\n}\nprint(f\"{ogrenci['ad']} - {ogrenci['durum']}\")",
      "codeTitle": "donem_sonu_rapor.py",
      "codeLang": "Python",
      "cards": [
        { "badge": "Portfolyo", "title": "Dijital Ayak İzi", "desc": "Geliştirdiğiniz tüm kodları GitHub veya okul bulutunda saklayarak lise bilişim portfolyonuzu oluşturun.", "items": [{ "bold": "Gelecek Dönem", "text": "Koşullu durumlar (`if-elif-else`) ile programlarımıza kendi başına karar verme yeteneği kazandıracağız." }] }
      ]
    },
    "workshop": {
      "title": "Sınıf İçi Mini Kod Fuarı ve Akran İncelemesi",
      "subtitle": "Öğrencilerin hazırladıkları mini hesaplama araçlarını birbirlerinin bilgisayarlarında test etmesi",
      "steps": [
        { "title": "1. Masaları Gez", "desc": "Sınıf arkadaşınızın yazdığı hesaplama programının başına geçin." },
        { "title": "2. Sınır Değerleri Dene", "desc": "Beklenmeyen girdiler (harf yerine sayı, negatif sayı vb.) vererek programın tepkisini ölçün." },
        { "title": "3. Kodu Oku", "desc": "Arkadaşınızın değişken isimlerinin ve yorum satırlarının açıklayıcılığını değerlendirin." },
        { "title": "4. Geri Bildirim Notu Bırak", "desc": "Bir güçlü yön ve bir geliştirilebilecek öneri yazarak arkadaşınıza teslim edin." }
      ],
      "criteria": [
        "Başkalarının yazdığı kodları okuyup mantığını kavrayabilme",
        "Yapıcı, teknik ve saygılı akran geri bildirimi sunma",
        "Dönem boyunca öğrendiği kazanımları öz değerlendirme formuyla puanlama"
      ]
    },
    "tips": {
      "safetyTitle": "Yarıyıl Tatili İçin Bilişim Önerileri",
      "safetyRules": [
        { "bold": "Kodlama Pratiğini Bırakmayın", "text": "Yazılım yabancı dil gibidir; 2 hafta ara vermek sözdizimini unutturabilir, haftada 1-2 saat pratik yapın." },
        { "bold": "Algoritma Sitelerini Ziyaret Edin", "text": "HackerRank, LeetCode veya Kodris gibi platformlarda lise düzeyinde mini alıştırmalar çözün." },
        { "bold": "Ekran Süresi Dengesi", "text": "Sürekli bilgisayar başında kalmayıp fiziksel aktiviteler ve dinlenmeyle göz sağlığınızı koruyun." }
      ],
      "myths": [
        { "wrong": "İyi bir programcı yazdığı ilk kodu asla değiştirmez.", "correct": "En iyi yazılımcılar kodlarını sürekli yeniden düzenler (refactoring), sadeleştirir ve iyileştirir." },
        { "wrong": "Programlama yapabilmek için dahi olmak gerekir.", "correct": "Programlama sabır, merak ve düzenli pratikle herkesin mükemmel şekilde öğrenebileceği bir beceridir." }
      ]
    },
    "quiz": {
      "question": "Python dilinde kodların dünya standartlarında temiz, okunabilir ve düzenli yazılmasını sağlayan resmi stil ve biçimlendirme rehberi aşağıdakilerden hangisidir?",
      "options": [
        { "text": "A) ISO 9001", "isCorrect": False },
        { "text": "B) PEP 8", "isCorrect": True },
        { "text": "C) ASCII", "isCorrect": False },
        { "text": "D) IEEE 802.11", "isCorrect": False }
      ],
      "explanation": "Doğru Cevap: B. PEP 8 (Python Enhancement Proposal 8), Python topluluğunun kabul ettiği resmi stil ve temiz kod yazım kılavuzudur."
    },
    "summary": {
      "keyPoints": [
        "1. Dönemi 19 haftalık zengin bir bilişim temeliyle gururla tamamladık.",
        "Donanım, işletim sistemleri, ağlar, güvenlik ve Python dilinin temelini attık.",
        "2. Dönem koşullar, döngüler, veri yapıları ve gerçek projelerle çok daha heyecanlı olacak!"
      ],
      "nextWeek": "Sömestr Tatili 1. Hafta: Genç Programcılar Kış Kodlama Bülteni",
      "homework": "Tatil boyunca 1. Dönem yazdığınız tüm Python kodlarını tek bir 'Proje_Portfolyom' klasöründe toplayıp yedekleyiniz."
    }
  }
]

print(f"Hafta 11-19 tamamlandı. Toplam: {len(WEEKS_11_19)} hafta.")
