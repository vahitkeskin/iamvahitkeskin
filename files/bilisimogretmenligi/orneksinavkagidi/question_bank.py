# -*- coding: utf-8 -*-
"""
Bilişim Teknolojileri ve Yazılım / Bilgisayar Bilimi Dersi Soru Bankası
5, 6, 7, 8, 9 ve 10. sınıflar için MEB müfredatına tam uyumlu,
Kazanım odaklı, Kolay - Orta - Zor seviyelerde açık uçlu klasik ve test soruları.
"""

INITIAL_EXAM = {
    "header": {
        "year": "2026-2027 EĞİTİM ÖĞRETİM YILI",
        "school": "Özel Viranşehir Uğur Anadolu Lisesi",
        "lesson": "SEÇMELİ TÜRK SOSYAL HAYATINDA AİLE",
        "term": "1.DÖNEM 1. YAZILI",
        "student_name": "",
        "student_class": "",
        "student_no": "",
        "student_score": ""
    },
    "questions": [
        {
            "id": 1,
            "type": "classic",
            "question": "Aile nedir? Kısaca tanımlayınız.",
            "points": 20,
            "answer": "Aile; evlilik, kan bağı ya da evlat edinme yoluyla birbirine bağlanan, aynı çatı altında yaşayan ve ortak değerleri paylaşan en küçük toplumsal kurumdur."
        },
        {
            "id": 2,
            "type": "classic",
            "question": "Ailenin temel fonksiyonları nelerdir?",
            "points": 20,
            "answer": "Ailenin temel fonksiyonları: Biyolojik (neslin devamı), ekonomik (ihtiyaçların karşılanması), koruyucu, eğitici/sosyalleştirici, psikolojik (sevgi ve güven sağlama) ve dinî/ahlaki değerleri aktarma fonksiyonlarıdır."
        },
        {
            "id": 3,
            "type": "classic",
            "question": "Aile üyelerinin rolleri nedir?",
            "points": 20,
            "answer": "Aile üyelerinin rolleri; anne, baba ve çocukların aile içi huzur ve düzeni sağlamak adına üstlendikleri hak, ödev ve sorumluluklardır. Anne-baba rehberlik ve geçim, çocuklar ise sorumluluk alma ve saygı gösterme rollerine sahiptir."
        },
        {
            "id": 4,
            "type": "classic",
            "question": "Ailede iletişim neden önemlidir?",
            "points": 20,
            "answer": "Sağlıklı iletişim; aile bireylerinin birbirini anlamasını, empati kurmasını, sorunların çatışmasız çözülmesini sağlar. Bireylerin aidiyet duygusunu güçlendirir ve güven ortamı oluşturur."
        },
        {
            "id": 5,
            "type": "classic",
            "question": "Aile içindeki sorumlulukların eşit dağıtılması niçin önemlidir?",
            "points": 20,
            "answer": "Sorumlulukların adil paylaşımı; bireyler arasında tükenmişliği ve adaletsizlik hissini önler, iş birliğini pekiştirir, çocuklara sorumluluk bilinci kazandırır ve aile içi dayanışmayı güçlendirir."
        }
    ]
}

GRADE_TOPICS = {
    "5": [
        "Tüm Konular",
        "Bilişim Teknolojileri ve Donanım",
        "Dosya Yönetimi ve Bulut Depolama",
        "Bilişim Etiği ve Güvenlik",
        "Algoritma ve Blok Tabanlı Kodlama (Scratch)"
    ],
    "6": [
        "Tüm Konular",
        "İşletim Sistemleri ve Ağlar",
        "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi",
        "Algoritmalar ve Akış Şemaları",
        "Blok Tabanlı Programlama (Değişkenler ve Şartlar)"
    ],
    "7": [
        "Tüm Konular",
        "Bilişimsel Düşünme Becerileri",
        "Elektronik Tablolar (Excel Formülleri)",
        "Web Tasarımı (HTML ve CSS Temelleri)",
        "Metin Tabanlı Kodlamaya Giriş (Python)"
    ],
    "8": [
        "Tüm Konular",
        "İleri Algoritmalar ve Python ile Problem Çözme",
        "Veri Güvenliği, Kriptoloji ve Blokzincir",
        "Yapay Zeka ve Makine Öğrenmesi",
        "Geleceğin Bilişim Teknolojileri (IoT, Büyük Veri)"
    ],
    "9": [
        "Tüm Konular",
        "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)",
        "Mantıksal Kapılar ve Boole Cebri",
        "Python ile Programlama (Veri Tipleri, Operatörler)",
        "Python Karar Yapıları (if-elif-else) ve Döngüler"
    ],
    "10": [
        "Tüm Konular",
        "Python Fonksiyonlar (def, return, parametreler)",
        "Dosya İşlemleri ve Hata Yakalama (try-except)",
        "Veritabanı Temelleri ve SQL Sorguları",
        "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik"
    ]
}

QUESTION_BANK = {
    "5": {
        "grade_name": "5. Sınıf - Bilişim Teknolojileri ve Yazılım",
        "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM",
        "kolay": [
            {
                "topic": "Bilişim Teknolojileri ve Donanım",
                "question": "Donanım ve yazılım kavramlarını kısaca açıklayınız ve birer örnek veriniz.",
                "points": 20,
                "answer": "Donanım: Bilgisayarın gözle görülebilen, elle tutulabilen fiziksel parçalarıdır (Örn: Klavye, Monitör, Fare). Yazılım: Bilgisayar donanımını çalıştırmak ve belirli işleri yapmak için yazılmış programlardır (Örn: İşletim sistemi, Paint, Kelime işlemci)."
            },
            {
                "topic": "Bilişim Teknolojileri ve Donanım",
                "question": "Bilgisayar kullanırken sağlığımızı korumak için dikkat etmemiz gereken iki ergonomi kuralını yazınız.",
                "points": 20,
                "answer": "1. Ekranın üst kenarı göz hizasında olmalı ve ekrana 50-70 cm mesafeden bakılmalıdır. 2. Sandalyede dik oturulmalı, sırt ve bel desteklenmeli, ayaklar yere tam basmalıdır."
            },
            {
                "topic": "Bilişim Teknolojileri ve Donanım",
                "question": "Giriş ve çıkış birimlerine ikişer örnek vererek ne işe yaradıklarını yazınız.",
                "points": 20,
                "answer": "Giriş Birimleri: Bilgisayara dışarıdan veri ve komut aktaran birimlerdir (Klavye, Fare). Çıkış Birimleri: Bilgisayarda işlenen bilgiyi kullanıcıya sunan birimlerdir (Monitör, Yazıcı/Hoparlör)."
            },
            {
                "topic": "Bilişim Etiği ve Güvenlik",
                "question": "Güçlü bir şifre oluştururken nelere dikkat edilmelidir? Üç kural belirtiniz.",
                "points": 20,
                "answer": "1. En az 8 karakter uzunluğunda olmalıdır. 2. Büyük harf, küçük harf, rakam ve özel karakter (?, !, *, #) içermelidir. 3. Doğum tarihi, isim gibi tahmin edilmesi kolay kişisel bilgiler içermemelidir."
            },
            {
                "topic": "Dosya Yönetimi ve Bulut Depolama",
                "question": "Dosya uzantısı nedir? '.docx' ve '.mp3' uzantılarının hangi dosya türlerine ait olduğunu yazınız.",
                "points": 20,
                "answer": "Dosya uzantısı, bir dosyanın hangi program tarafından oluşturulduğunu ve türünü belirten noktadan sonraki harflerdir. '.docx' kelime işlemci (metin/belge) dosyası, '.mp3' ise ses/müzik dosyasıdır."
            }
        ],
        "orta": [
            {
                "topic": "Bilişim Etiği ve Güvenlik",
                "question": "Dijital ayak izi nedir? Günlük hayattan bir örnek vererek açıklayınız.",
                "points": 20,
                "answer": "Dijital ayak izi, internette gezinirken, sosyal medyada paylaşım yaparken veya arama yaparken geride bıraktığımız tüm dijital veriler ve izlerdir. Örnek: Sosyal medyada bir gönderiye yaptığımız yorum veya bir e-ticaret sitesinde arattığımız ürünler dijital ayak izimizdir."
            },
            {
                "topic": "Bilişim Etiği ve Güvenlik",
                "question": "Bilişim etiği nedir? İnternet ortamında uyulması gereken etik kurallardan iki tanesini yazınız.",
                "points": 20,
                "answer": "Bilişim etiği, bilişim teknolojilerini ve interneti kullanırken doğru ile yanlışı ayırt etmeyi sağlayan ahlaki kurallardır. 1. Başkalarının kişisel bilgilerini ve şifrelerini izinsiz ele geçirmemek. 2. İnternette hakaret, alay veya tehdit içerikli kaba ifadeler kullanmamak."
            },
            {
                "topic": "Algoritma ve Blok Tabanlı Kodlama (Scratch)",
                "question": "Problem çözme sürecinde 'algoritma' kavramının önemini açıklayınız.",
                "points": 20,
                "answer": "Algoritma; bir problemin adım adım, açık ve net bir sırayla çözülme planıdır. Önemi: Karmaşık problemleri küçük adımlara bölerek hatasız, hızlı ve düzenli bir şekilde çözmemizi sağlar."
            },
            {
                "topic": "Dosya Yönetimi ve Bulut Depolama",
                "question": "Bulut depolama nedir? Sağladığı iki temel avantajı belirtiniz.",
                "points": 20,
                "answer": "Bulut depolama; dosyaların internet üzerindeki güvenli sunucularda saklanmasıdır. Avantajları: 1. Dosyalara internet olan her cihazdan erişilebilir. 2. Cihaz bozulsa bile dosyalar kaybolmaz (yedeklilik sağlar)."
            },
            {
                "topic": "Bilişim Etiği ve Güvenlik",
                "question": "Zararlı yazılımlardan (virüs, truva atı vb.) korunmak için alınabilecek üç önlemi yazınız.",
                "points": 20,
                "answer": "1. Bilgisayara güvenilir bir antivirüs programı yükleyip güncel tutmak. 2. Tanınmayan kişilerden gelen şüpheli e-posta eklerini ve bağlantıları açmamak. 3. Lisanssız, kırılmış (korsan) yazılımları indirmemek."
            }
        ],
        "zor": [
            {
                "topic": "Bilişim Etiği ve Güvenlik",
                "question": "Çevrim içi ortamlarda kişisel verilerin korunması ve gizliliğinin sağlanması neden hayati öneme sahiptir?",
                "points": 20,
                "answer": "Kişisel veriler kötü niyetli kişilerin eline geçtiğinde kimlik hırsızlığı, dolandırıcılık, hesapların çalınması ve siber zorbalık yaşanabilir. Bireyin hem maddi hem de manevi güvenliğini sağlamak için kişisel verilerin korunması hayati önemdedir."
            },
            {
                "topic": "Algoritma ve Blok Tabanlı Kodlama (Scratch)",
                "question": "Blok tabanlı kodlamada (Scratch vb.) 'döngü' ve 'koşul' bloklarının işlevini karşılaştırarak açıklayınız.",
                "points": 20,
                "answer": "Döngü blokları (örneğin '10 defa tekrarla' veya 'sürekli tekrarla'), belirli komutların tekrarlanmasını sağlayarak kod tekrarını önler. Koşul blokları ise ('eğer ... ise') yalnızca belirlenen şart sağlandığında içine yazılan kodların çalışmasını sağlar; karar mekanizması oluşturur."
            },
            {
                "topic": "Bilişim Etiği ve Güvenlik",
                "question": "Siber zorbalık nedir? Siber zorbalığa maruz kalan bir öğrencinin yapması gereken adımları sıralayınız.",
                "points": 20,
                "answer": "Siber zorbalık; dijital platformlarda bir kişiye yönelik kasıtlı, tekrarlayıcı ve zarar verici davranışlardır (alay etme, tehdit, iftira). Yapılması gerekenler: 1. Zorbalık yapan kişiye cevap vermemek/tartışmamak. 2. Mesajların ekran görüntüsünü alıp kanıt oluşturmak. 3. Kişiyi engellemek ve durumu aileye, öğretmene ya da okul rehberliğine bildirmek."
            },
            {
                "topic": "Dosya Yönetimi ve Bulut Depolama",
                "question": "Açık kaynak kodlu yazılım ile ticari (lisanslı) yazılım arasındaki temel farkları açıklayınız.",
                "points": 20,
                "answer": "Açık kaynak kodlu yazılımların kodları herkes tarafından görülebilir, geliştirilebilir ve genellikle ücretsizdir (Örn: Linux, LibreOffice). Ticari (lisanslı) yazılımların ise kodları gizlidir, üretici firmanın mülkiyetindedir ve kullanım için lisans ücreti ödenmesi gerekir (Örn: Windows, MS Office)."
            },
            {
                "topic": "Algoritma ve Blok Tabanlı Kodlama (Scratch)",
                "question": "Bir günlük problemi (örneğin sabah uyanıp okula gitme süreci) 5 adımlı bir algoritma olarak yazınız.",
                "points": 20,
                "answer": "1. Adım: Çalar saat çalınca uyan ve yataktan kalk. 2. Adım: Elini yüzünü yıka ve dişlerini fırçala. 3. Adım: Okul kıyafetlerini giy. 4. Adım: Sabah kahvaltını yap. 5. Adım: Okul çantanı kontrol et ve evden çık."
            }
        ]
    },
    "6": {
        "grade_name": "6. Sınıf - Bilişim Teknolojileri ve Yazılım",
        "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM",
        "kolay": [
            {
                "topic": "İşletim Sistemleri ve Ağlar",
                "question": "İşletim sistemi nedir? Bilgisayarlar ve mobil cihazlar için yaygın kullanılan ikişer işletim sistemi adı yazınız.",
                "points": 20,
                "answer": "İşletim sistemi; donanım ile kullanıcı ve diğer yazılımlar arasında köprü kurarak bilgisayarın tüm kaynaklarını yöneten ana yazılımdır. Bilgisayar için: Windows, Linux (veya macOS). Mobil cihazlar için: Android, iOS."
            },
            {
                "topic": "İşletim Sistemleri ve Ağlar",
                "question": "Bilgisayar ağı nedir? Ağ bağlantısının sağladığı en büyük iki faydayı yazınız.",
                "points": 20,
                "answer": "Bilgisayar ağı; iki veya daha fazla bilgisayarın bilgi ve kaynak paylaşımı için birbirine bağlanmasıdır. Faydaları: 1. Yazıcı, tarayıcı gibi donanımları ortak kullanarak tasarruf sağlamak. 2. Dosya ve bilgi paylaşımını saniyeler içinde gerçekleştirmek."
            },
            {
                "topic": "İşletim Sistemleri ve Ağlar",
                "question": "İnternet adreslerinde yer alan 'gov.tr' ve 'edu.tr' uzantılarının ne anlama geldiğini açıklayınız.",
                "points": 20,
                "answer": "'gov.tr': Türkiye Cumhuriyeti devlet/hükümet kurumlarına ait resmi web sitelerini ifade eder (Government). 'edu.tr': Türkiye'deki üniversiteler ve yükseköğretim kurumlarına ait web sitelerini ifade eder (Education)."
            },
            {
                "topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi",
                "question": "Arama motorlarında daha etkili ve doğru sonuç almak için kullanılan iki arama tekniğini yazınız.",
                "points": 20,
                "answer": "1. Çift tırnak (\"...\") kullanmak: Kelime grubunu aynen aratır (Örn: \"bilişim teknolojileri\"). 2. Eksi (-) işareti kullanmak: İstenmeyen kelimeleri arama sonucundan çıkarır (Örn: elma -meyve)."
            },
            {
                "topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi",
                "question": "Telif hakkı nedir? Başkasına ait bir dijital içeriği izinsiz kullanmanın sakıncalarını yazınız.",
                "points": 20,
                "answer": "Telif hakkı; bir fikir veya sanat eserini meydana getiren kişinin o eser üzerindeki yasal haklarıdır. İzinsiz kullanmak emek hırsızlığıdır, yasal cezalar doğurur ve içerik üreticilerinin üretkenliğini zedeler."
            }
        ],
        "orta": [
            {
                "topic": "İşletim Sistemleri ve Ağlar",
                "question": "LAN (Yerel Alan Ağı) ile WAN (Geniş Alan Ağı) arasındaki temel farkları açıklayınız.",
                "points": 20,
                "answer": "LAN (Local Area Network); ev, okul, ofis gibi sınırlı ve dar bir coğrafi alandaki cihazları birbirine bağlar. WAN (Wide Area Network) ise şehirler, ülkeler veya kıtalar arası çok geniş coğrafi alanları bağlar. En büyük WAN örneği İnternettir."
            },
            {
                "topic": "Algoritmalar ve Akış Şemaları",
                "question": "Akış şemasında kullanılan 'Elips', 'Dikdörtgen' ve 'Eşkenar Dörtgen' sembollerinin görevlerini yazınız.",
                "points": 20,
                "answer": "Elips: Akış şemasını başlatmak (BAŞLA) ve bitirmek (BİTİR) için kullanılır. Dikdörtgen: Hesaplama, değer atama ve işlem adımlarını gösterir. Eşkenar Dörtgen: Karar verme, koşul sınama ve karşılaştırma (Evet/Hayır) işlemlerinde kullanılır."
            },
            {
                "topic": "Blok Tabanlı Programlama (Değişkenler ve Şartlar)",
                "question": "Blok tabanlı programlamada 'değişken' (variable) kavramı ne işe yarar? Bir örnekle açıklayınız.",
                "points": 20,
                "answer": "Değişken; program çalışırken değişebilen değerleri bilgisayarın hafızasında tutan isimlendirilmiş depolama alanıdır. Örnek: Bir oyunda oyuncunun topladığı altın sayısı veya puanı tutan 'Skor' bir değişkendir."
            },
            {
                "topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi",
                "question": "Phishing (Oltalama) saldırısı nedir? Kullanıcılar bu tuzaklara düşmemek için nelere dikkat etmelidir?",
                "points": 20,
                "answer": "Oltalama; sahte web siteleri veya e-postalar aracılığıyla kullanıcıların şifre, kredi kartı veya kimlik bilgilerini kandırarak çalma yöntemidir. Korunmak için: Gelen bağlantının alan adı dikkatlice kontrol edilmeli, şüpheli linklere tıklanmamalıdır."
            },
            {
                "topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi",
                "question": "Yaratıcı Birliktelik (Creative Commons) lisansı ne anlama gelir? Eser sahibine sağladığı esneklik nedir?",
                "points": 20,
                "answer": "Creative Commons; eser sahiplerinin eserlerinin hangi koşullarda kullanılabileceğini (kaynak göstererek, ticari olmayan, türetilemez vb.) belirten esnek ve ücretsiz bir telif lisanslama sistemidir."
            }
        ],
        "zor": [
            {
                "topic": "Algoritmalar ve Akış Şemaları",
                "question": "Girilen iki sayıyı toplayıp sonucu ekrana yazdıran programın adım adım algoritmasını yazınız.",
                "points": 20,
                "answer": "1. Adım: Başla. 2. Adım: Birinci sayıyı al (A). 3. Adım: İkinci sayıyı al (B). 4. Adım: İki sayıyı topla (Toplam = A + B). 5. Adım: Toplam sonucunu ekrana yazdır. 6. Adım: Bitir."
            },
            {
                "topic": "Blok Tabanlı Programlama (Değişkenler ve Şartlar)",
                "question": "Scratch programında bir karakterin sahnede sürekli ileri gitmesi ve kenara geldiğinde sekmesi için gereken kod bloklarını açıklayınız.",
                "points": 20,
                "answer": "'Yeşil bayrağa tıklandığında' bloğu altına bir 'sürekli tekrarla' döngüsü eklenir. Döngü içine '10 adım git' ve 'kenara geldiysen sek' blokları yerleştirilir. Karakterin ters dönmemesi için 'dönüş stilini sağa-sola ayarla' komutu kullanılır."
            },
            {
                "topic": "Blok Tabanlı Programlama (Değişkenler ve Şartlar)",
                "question": "Sayısal veri (integer), metinsel veri (string) ve mantıksal veri (boolean) tiplerini tanımlayıp birer örnek veriniz.",
                "points": 20,
                "answer": "Sayısal (Integer): Matematiksel işlemlerde kullanılan tam sayılardır (Örn: Yaş = 12). Metinsel (String): Tırnak içinde yazılan karakter dizileridir (Örn: İsim = 'Ahmet'). Mantıksal (Boolean): Yalnızca Doğru (True) veya Yanlış (False) değeri alan veridir (Örn: MezunMu = True)."
            },
            {
                "topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi",
                "question": "İki faktörlü kimlik doğrulamanın (2FA) çalışma mantığını ve tek şifreye kıyasla güvenlik üstünlüğünü açıklayınız.",
                "points": 20,
                "answer": "2FA; sisteme giriş yaparken bildiğiniz bir şifrenin yanı sıra sahip olduğunuz bir cihaza (SMS veya onay uygulaması) gelen tek kullanımlık geçici kodu talep eder. Şifreniz çalınsa bile saldırgan telefonunuza erişemediği için hesabınızı ele geçiremez."
            },
            {
                "topic": "İşletim Sistemleri ve Ağlar",
                "question": "Elektronik atıkların (e-atık) çevre ve insan sağlığına zararları nelerdir? Geri dönüşüm sürecinde ne yapılmalıdır?",
                "points": 20,
                "answer": "E-atıklar kurşun, cıva, kadmiyum gibi ağır metaller içerir; normal çöplere değil, belediyelerin ve teknoloji mağazalarının e-atık toplama kutularına teslim edilerek geri dönüştürülmelidir."
            }
        ]
    },
    "7": {
        "grade_name": "7. Sınıf - Bilişim Teknolojileri ve Yazılım",
        "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM",
        "kolay": [
            {
                "topic": "Bilişimsel Düşünme Becerileri",
                "question": "Bilişimsel düşünme (computational thinking) nedir? Günlük hayattaki önemini belirtiniz.",
                "points": 20,
                "answer": "Bilişimsel düşünme; problemleri bir bilgisayarın veya insanın etkin bir şekilde çözebileceği biçimde formüle etme ve adım adım çözüm üretme sürecidir. Karşılaşılan sorunları sistematik, mantıklı ve yaratıcı çözmeyi sağlar."
            },
            {
                "topic": "Elektronik Tablolar (Excel Formülleri)",
                "question": "Elektronik tablolama programlarında (Excel) 'Hücre' ve 'Formül' kavramlarını açıklayınız.",
                "points": 20,
                "answer": "Hücre: Satır ve sütunların kesiştiği, verilerin yazıldığı kutucuklardır (Örn: A1, B3). Formül: Eşittir (=) işareti ile başlayan ve hücrelerdeki verilerle otomatik matematiksel/mantıksal işlem yapan ifadelerdir."
            },
            {
                "topic": "Elektronik Tablolar (Excel Formülleri)",
                "question": "Excel'de '=TOPLA(A1:A5)' ve '=ORTALAMA(B1:B10)' formüllerinin yaptığı işlemleri açıklayınız.",
                "points": 20,
                "answer": "'=TOPLA(A1:A5)': A1 hücresinden A5 hücresine kadar olan tüm sayıları toplar. '=ORTALAMA(B1:B10)': B1 ile B10 arasındaki hücrelerde yer alan sayıların aritmetik ortalamasını hesaplar."
            },
            {
                "topic": "Web Tasarımı (HTML ve CSS Temelleri)",
                "question": "Web sitesi hazırlarken HTML ve CSS dillerinin üstlendiği temel görevler nelerdir?",
                "points": 20,
                "answer": "HTML (HyperText Markup Language): Web sayfasının iskeletini ve içeriğini (başlıklar, paragraflar, resimler) oluşturur. CSS (Cascading Style Sheets): Web sayfasının görsel tasarımını, renklerini, yazı tiplerini ve yerleşimini düzenler."
            },
            {
                "topic": "Bilişimsel Düşünme Becerileri",
                "question": "Sosyal medya platformlarında paylaşılan içeriklerin dijital itibar üzerindeki etkisini açıklayınız.",
                "points": 20,
                "answer": "Paylaşılan her fotoğraf, yorum ve beğeni dijital ayak izi olarak kalıcılaşır. İleride eğitim, iş başvuruları veya sosyal ilişkilerde bu içerikler kişinin dijital itibarını olumlu ya da olumsuz doğrudan etkiler."
            }
        ],
        "orta": [
            {
                "topic": "Bilişimsel Düşünme Becerileri",
                "question": "Bilişimsel düşünmenin 4 temel bileşenini (Ayrıştırma, Örüntü Tanıma, Soyutlama, Algoritma Tasarımı) kısaca açıklayınız.",
                "points": 20,
                "answer": "1. Ayrıştırma: Problemi daha küçük parçalara bölme. 2. Örüntü Tanıma: Parçalar arasındaki benzerlikleri bulma. 3. Soyutlama: Önemsiz detayları çıkarıp ana fikre odaklanma. 4. Algoritma Tasarımı: Çözüm için adım adım kural dizisi hazırlama."
            },
            {
                "topic": "Metin Tabanlı Kodlamaya Giriş (Python)",
                "question": "Metin tabanlı programlama (Python vb.) ile blok tabanlı programlama (Scratch vb.) arasındaki avantaj ve dezavantajları karşılaştırınız.",
                "points": 20,
                "answer": "Blok tabanlı: Başlangıç için kolaydır, yazım hatası riski yoktur ancak karmaşık ve büyük projelerde yetersiz kalır. Metin tabanlı: Kod yazarken yazım kurallarına dikkat edilmelidir; sınırsız esneklik, yüksek performans ve profesyonel yazılım geliştirme imkanı sunar."
            },
            {
                "topic": "Web Tasarımı (HTML ve CSS Temelleri)",
                "question": "HTML dilinde <h1>, <p>, <a> ve <img> etiketlerinin görevlerini yazınız.",
                "points": 20,
                "answer": "<h1>: Sayfadaki en önemli ana başlığı tanımlar. <p>: Metin paragraflarını oluşturur. <a>: Başka bir sayfaya veya web sitesine köprü (link) verir. <img>: Sayfaya resim eklemek için kullanılır."
            },
            {
                "topic": "Bilişimsel Düşünme Becerileri",
                "question": "Nesnelerin İnterneti (IoT) nedir? Günlük hayattan bir akıllı sistem örneği ile açıklayınız.",
                "points": 20,
                "answer": "IoT; fiziksel nesnelerin sensörler ve yazılımlar aracılığıyla internete bağlanarak birbirleriyle veri alışverişi yapmasıdır. Örnek: Evdeki akıllı termostatın havanın soğuduğunu algılayıp ev sahibinin telefonuna bildirim göndermesi ve kombiyi uzaktan çalıştırması."
            },
            {
                "topic": "Web Tasarımı (HTML ve CSS Temelleri)",
                "question": "Web sitelerinde kullanılan SSL/TLS sertifikasının işlevini ve adres çubuğundaki göstergesini açıklayınız.",
                "points": 20,
                "answer": "SSL/TLS; kullanıcı tarayıcısı ile sunucu arasındaki veri trafiğini şifreleyerek üçüncü kişilerin verileri (şifre, kredi kartı) çalmasını engeller. Göstergesi: Adres çubuğundaki kilit simgesi ve 'https://' protokolüdür."
            }
        ],
        "zor": [
            {
                "topic": "Metin Tabanlı Kodlamaya Giriş (Python)",
                "question": "Python dilinde kullanıcıdan yaşını alan ve eğer yaşı 18'den küçükse 'Giriş Başarısız', büyük veya eşitse 'Giriş Başarılı' yazan kod satırlarını yazınız.",
                "points": 20,
                "answer": "yas = int(input('Yaşınızı giriniz: '))\nif yas >= 18:\n    print('Giriş Başarılı')\nelse:\n    print('Giriş Başarısız')"
            },
            {
                "topic": "Bilişimsel Düşünme Becerileri",
                "question": "Büyük Veri (Big Data) kavramını ve 3V (Volume, Velocity, Variety) prensibini kısaca açıklayınız.",
                "points": 20,
                "answer": "Büyük Veri; geleneksel veritabanlarının işleyemeyeceği büyüklükte, hızda ve çeşitlilikteki veridir. 1. Volume (Hacim): Verinin devasa boyutu. 2. Velocity (Hız): Verinin anlık üretilme ve işlenme hızı. 3. Variety (Çeşitlilik): Farklı veri türlerinin bir arada bulunması."
            },
            {
                "topic": "Elektronik Tablolar (Excel Formülleri)",
                "question": "Elektronik tablolarda 'EĞER' (IF) fonksiyonunun genel yapısını ve mantıksal koşul sınamasını örnekle açıklayınız.",
                "points": 20,
                "answer": "Yapı: =EĞER(Mantıksal_Sınama; Doğruysa_Değer; Yanlışsa_Değer). Örnek: '=EĞER(A1>=50; \"Geçti\"; \"Kaldı\")'. A1 hücresindeki not 50 ve üzeriyse 'Geçti', altındaysa 'Kaldı' yazar."
            },
            {
                "topic": "Bilişimsel Düşünme Becerileri",
                "question": "Sosyal mühendislik (social engineering) saldırı yöntemleri nelerdir? İnsan faktörünün güvenlikteki önemini açıklayınız.",
                "points": 20,
                "answer": "Sosyal mühendislik; teknik açıklardan ziyade insan zaaflarını (güven, korku, merak) kullanarak gizli bilgileri ele geçirme yöntemidir. Güvenlik sistemleri ne kadar sağlam olursa olsun, en zayıf halka her zaman insandır."
            },
            {
                "topic": "Bilişimsel Düşünme Becerileri",
                "question": "Açık kaynak kodlu işletim sistemlerinin (örneğin Pardus/Linux) kamu kurumları ve okullarda kullanılmasının stratejik önemini açıklayınız.",
                "points": 20,
                "answer": "1. Dışa bağımlılığı azaltarak milli yazılım güvenliği ve siber egemenlik sağlar. 2. Yüksek lisans maliyetlerinden tasarruf edilerek kamu bütçesi korunur. 3. Güvenlik açıkları bağımsız uzmanlarca hızlıca kapatılır."
            }
        ]
    },
    "8": {
        "grade_name": "8. Sınıf - Bilişim Teknolojileri ve Yazılım",
        "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM",
        "kolay": [
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Algoritmada 'döngü' (loop) kavramı neden kullanılır? Programlamada sağladığı temel faydayı yazınız.",
                "points": 20,
                "answer": "Döngüler, aynı kod satırlarını defalarca yazmak yerine belirli bir şart sağlandığı sürece otomatik tekrar edilmesini sağlar. Kod satırını kısaltır, hafızayı korur ve programın daha düzenli çalışmasını sağlar."
            },
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Python programlama dilinde 'print()' ve 'input()' fonksiyonlarının görevlerini açıklayınız.",
                "points": 20,
                "answer": "'print()': Ekrana metin, sayı veya değişken değerlerini çıktı olarak yazdırmak için kullanılır. 'input()': Kullanıcıdan klavye aracılığıyla bilgi/veri girişi almak için kullanılır."
            },
            {
                "topic": "Yapay Zeka ve Makine Öğrenmesi",
                "question": "Yapay zeka (AI) nedir? Günlük hayatta sıkça karşılaştığımız iki yapay zeka uygulamasını yazınız.",
                "points": 20,
                "answer": "Yapay zeka; insan benzeri düşünme, öğrenme, problem çözme ve karar verme yeteneklerinin makineler tarafından taklit edilmesidir. Örnekler: Sesli asistanlar (Siri, Google Asistan), navigasyon uygulamalarındaki rota optimizasyonu."
            },
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Bir yazılım geliştirirken 'hata ayıklama' (debugging) ne anlama gelir?",
                "points": 20,
                "answer": "Hata ayıklama; bir programın kodlarındaki mantıksal veya söz dizimsel (syntax) hataları tespit etme, analiz etme ve düzelterek programın beklendiği gibi çalışmasını sağlama sürecidir."
            },
            {
                "topic": "Veri Güvenliği, Kriptoloji ve Blokzincir",
                "question": "Veri güvenliğinde '3-2-1 Yedekleme Kuralı' nedir? Açıklayınız.",
                "points": 20,
                "answer": "Verilerinizin en az 3 kopyası olmalı, bu kopyalar 2 farklı depolama ortamında (örn. harici disk ve bilgisayar) saklanmalı ve bu kopyalardan en az 1 tanesi farklı bir fiziksel mekanda/bulutta tutulmalıdır."
            }
        ],
        "orta": [
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Python'da 'for' döngüsü ile 'while' döngüsü arasındaki temel kullanım farkını açıklayınız.",
                "points": 20,
                "answer": "'for' döngüsü; tekrar sayısı önceden belli olduğunda veya bir liste üzerinde gezilirken kullanılır. 'while' döngüsü ise belirli bir mantıksal koşul True olduğu sürece çalışır; şart bozulana kadar döner."
            },
            {
                "topic": "Yapay Zeka ve Makine Öğrenmesi",
                "question": "Makine öğrenmesi (Machine Learning) ile geleneksel programlama arasındaki farkı girdi ve çıktı üzerinden açıklayınız.",
                "points": 20,
                "answer": "Geleneksel programlamada yazılımcı kuralları ve veriyi sisteme verir, bilgisayar çıktıyı üretir. Makine öğrenmesinde ise bilgisayara veri ve beklenen çıktılar verilir; bilgisayar veriler arasındaki örüntüleri inceleyerek kendi modelini kendisi öğrenir."
            },
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Python dilinde listeler (lists) ne amaçla kullanılır? 'notlar = [70, 85, 90]' listesinin ilk elemanına nasıl erişilir?",
                "points": 20,
                "answer": "Listeler; birden çok veriyi tek bir değişken altında sıralı bir şekilde saklamak için kullanılır. Python'da indeksler 0'dan başladığı için ilk elemana 'notlar[0]' ifadesiyle erişilir ve değeri 70'tir."
            },
            {
                "topic": "Veri Güvenliği, Kriptoloji ve Blokzincir",
                "question": "Kriptoloji ve şifreleme (encryption) internet üzerinden gönderilen verileri nasıl korur?",
                "points": 20,
                "answer": "Şifreleme; düz metin halindeki okunabilir veriyi matematiksel algoritmalarla anlamsız karakter dizilerine dönüştürür. Veri iletim esnasında üçüncü bir kişi tarafından ele geçirilse bile gizli anahtarı olmadan okunamaz."
            },
            {
                "topic": "Geleceğin Bilişim Teknolojileri (IoT, Büyük Veri)",
                "question": "Otonom araçların çevreyi algılamak ve kaza yapmadan ilerlemek için kullandığı bilişim teknolojilerini yazınız.",
                "points": 20,
                "answer": "1. Sensörler ve Kameralar (LiDAR, Radar). 2. Bilgisayarlı Görü (Computer Vision) algoritmaları. 3. Gerçek zamanlı karar veren Yapay Zeka işlemcileri. 4. Yüksek hassasiyetli GPS ve haritalama sistemleri."
            }
        ],
        "zor": [
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Python dilinde 1'den 20'ye kadar olan çift sayıları ekrana yazdıran for döngüsü kodunu yazınız.",
                "points": 20,
                "answer": "for i in range(2, 21, 2):\n    print(i)\n# Veya:\nfor i in range(1, 21):\n    if i % 2 == 0:\n        print(i)"
            },
            {
                "topic": "Veri Güvenliği, Kriptoloji ve Blokzincir",
                "question": "Blokzincir (Blockchain) teknolojisinin temel çalışma prensibini ve 'değiştirilemezlik' özelliğini açıklayınız.",
                "points": 20,
                "answer": "Blokzincir; verilerin bloklar halinde şifrelenip birbirine kriptografik özetlerle (hash) zincirleme bağlandığı dağıtık bir defter sistemidir. Bir bloktaki veri değiştirilmek istendiğinde sonraki tüm blokların şifresi bozulur ve çoğunluk bunu reddeder; geriye dönük veri değişikliği yapılamaz."
            },
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Bir algoritmanın zaman karmaşıklığı (hızı) ve bellek (RAM) kullanımı neden önemlidir?",
                "points": 20,
                "answer": "Milyonlarca verinin işlendiği büyük sistemlerde (örneğin arama motorları), verimsiz algoritmalar sistemin kilitlenmesine ve aşırı maliyete yol açar. İyi bir algoritma hem en kısa sürede hem de en az bellek harcayarak çalışmalıdır."
            },
            {
                "topic": "İleri Algoritmalar ve Python ile Problem Çözme",
                "question": "Derleyici (Compiler) ile Yorumlayıcı (Interpreter) arasındaki farkı açıklayarak Python'ın çalışma biçimini belirtiniz.",
                "points": 20,
                "answer": "Derleyici kaynak kodun tamamını bir kerede makine diline çevirir ve çalıştırılabilir dosya üretir. Yorumlayıcı ise kodu satır satır okur ve çalıştırır. Python temelde yorumlanan bir dildir; platform bağımsız çalışır."
            },
            {
                "topic": "Yapay Zeka ve Makine Öğrenmesi",
                "question": "Yapay zeka sistemlerindeki 'önyargı' (algorithmic bias) nedir? Nasıl ortaya çıkar?",
                "points": 20,
                "answer": "Yapay zekanın eğitildiği veri setleri geçmişteki insani önyargıları ve ayrımcılıkları içeriyorsa, model bu önyargıları öğrenir ve kararlarında haksız ayrımcılık uygular. Veri setinin dengeli ve tarafsız hazırlanması bu yüzden zorunludur."
            }
        ]
    },
    "9": {
        "grade_name": "9. Sınıf - Bilgisayar Bilimi",
        "lesson_name": "BİLGİSAYAR BİLİMİ",
        "kolay": [
            {
                "topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)",
                "question": "İkili (Binary) sayı sistemi nedir? Bilgisayarlar verileri neden ikili sistemde işler?",
                "points": 20,
                "answer": "İkili sistem sadece 0 ve 1 rakamlarından oluşan 2 tabanlı sayı sistemidir. Bilgisayarlardaki elektronik transistörlerin açık (elektrik var = 1) veya kapalı (elektrik yok = 0) olmak üzere iki fiziksel durumu bulunması nedeniyle ikili sistem kullanılır."
            },
            {
                "topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)",
                "question": "1 Bayt (Byte) kaç Bitten (Bit) oluşur? KB, MB, GB birimlerini küçükten büyüğe sıralayınız.",
                "points": 20,
                "answer": "1 Bayt = 8 Bit'tir. Depolama birimleri küçükten büyüğe: Byte (B) < Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB)."
            },
            {
                "topic": "Python ile Programlama (Veri Tipleri, Operatörler)",
                "question": "Python programlama dilinde yer alan int, float, str ve bool veri tiplerine birer örnek veriniz.",
                "points": 20,
                "answer": "int: Tam sayılar (Örn: sayi = 42). float: Ondalıklı sayılar (Örn: pi = 3.14). str: Metin dizileri (Örn: mesaj = 'Merhaba'). bool: Mantıksal değerler (Örn: durum = True)."
            },
            {
                "topic": "Mantıksal Kapılar ve Boole Cebri",
                "question": "Mantıksal operatörlerden AND (VE), OR (VEYA) ve NOT (DEĞİL) işlevlerini açıklayınız.",
                "points": 20,
                "answer": "AND: Bağlanan tüm koşulların True olması durumunda True üretir. OR: Koşullardan en az birinin True olması durumunda True üretir. NOT: Koşulun sonucunu tersine çevirir (True ise False, False ise True)."
            },
            {
                "topic": "Python Karar Yapıları (if-elif-else) ve Döngüler",
                "question": "Programlamada 'Sözde Kod' (Pseudocode) nedir? Programcıya sağladığı yararı yazınız.",
                "points": 20,
                "answer": "Sözde kod; herhangi bir programlama dilinin katı söz dizimi kurallarına bağlı kalmadan, günlük konuşma diline yakın ifadelerle algoritmanın mantığını tasvir etmektir. Kodlamaya başlamadan önce mantık hatalarını görmeyi sağlar."
            }
        ],
        "orta": [
            {
                "topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)",
                "question": "Onluk tabandaki 25 sayısının ikili (binary) tabandaki karşılığını bölme yöntemini göstererek bulunuz.",
                "points": 20,
                "answer": "25 / 2 = 12 (kalan 1)\n12 / 2 = 6 (kalan 0)\n6 / 2 = 3 (kalan 0)\n3 / 2 = 1 (kalan 1)\n1 / 2 = 0 (kalan 1)\nKalanlar sondan başa doğru yazılır: (25)_10 = (11001)_2"
            },
            {
                "topic": "Python Karar Yapıları (if-elif-else) ve Döngüler",
                "question": "Python'da 'if - elif - else' karar yapısının çalışma hiyerarşisini açıklayınız.",
                "points": 20,
                "answer": "Program önce 'if' şartını kontrol eder. Doğruysa kodunu çalıştırır ve bloğu terk eder. Yanlışsa sırasıyla 'elif' şartlarını inceler. Doğru olan ilk 'elif' bloğunu çalıştırır. Hiçbir şart sağlanmazsa en sondaki 'else' bloğu varsayılan olarak yürütülür."
            },
            {
                "topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)",
                "question": "Bilgisayar mimarisinde CPU (İşlemci), RAM (Bellek) ve Sabit Disk (Depolama) arasındaki veri akışını özetleyiniz.",
                "points": 20,
                "answer": "Programlar ve dosyalar kalıcı olarak Sabit Diskte saklanır. Bir program çalıştırıldığında diske göre çok daha hızlı olan RAM belleğe yüklenir. CPU (İşlemci) ise gerekli komut ve verileri doğrudan RAM'den alıp işler ve sonuçları üretir."
            },
            {
                "topic": "Python Karar Yapıları (if-elif-else) ve Döngüler",
                "question": "Python'da 'range(1, 10, 2)' ifadesinin üreteceği sayı listesini ve parametrelerin görevlerini yazınız.",
                "points": 20,
                "answer": "Parametreler: range(başlangıç, bitiş, artış_miktarı). Bitiş değeri dahil edilmez. Üretilen sayılar: 1, 3, 5, 7, 9."
            },
            {
                "topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)",
                "question": "ASCII ve Unicode (UTF-8) karakter kodlama tabloları arasındaki farkı açıklayınız.",
                "points": 20,
                "answer": "ASCII tablosu 7 veya 8 bit kullanarak sadece İngiliz alfabesini ve temel işaretleri tanımlar. Unicode ise dünyadaki tüm dillerin (Türkçe karakterler dahil) ve sembollerin standart kodlanmasını sağlar."
            }
        ],
        "zor": [
            {
                "topic": "Python Karar Yapıları (if-elif-else) ve Döngüler",
                "question": "Kullanıcıdan alınan bir sayının asal olup olmadığını bulan Python kodunu yazınız.",
                "points": 20,
                "answer": "sayi = int(input('Bir sayı giriniz: '))\nasal_mi = True\nif sayi < 2:\n    asal_mi = False\nelse:\n    for i in range(2, int(sayi**0.5) + 1):\n        if sayi % i == 0:\n            asal_mi = False\n            break\nif asal_mi:\n    print(f'{sayi} asaldır.')\nelse:\n    print(f'{sayi} asal değildir.')"
            },
            {
                "topic": "Mantıksal Kapılar ve Boole Cebri",
                "question": "AND, OR ve XOR mantık kapılarının 2 girişli (A ve B) doğruluk tablosunu (Truth Table) oluşturunuz.",
                "points": 20,
                "answer": "A  B | AND | OR | XOR\n0  0 |  0  | 0  |  0\n0  1 |  0  | 1  |  1\n1  0 |  0  | 1  |  1\n1  1 |  1  | 1  |  0\n(XOR kapısı sadece girişler birbirinden farklı olduğunda 1 çıktısı verir)."
            },
            {
                "topic": "Python ile Programlama (Veri Tipleri, Operatörler)",
                "question": "Yerel (Local) ve Küresel (Global) değişken kavramlarını Python kodu üzerinden örnekle açıklayınız.",
                "points": 20,
                "answer": "Global değişkenler fonksiyonların dışında tanımlanır ve tüm programdan erişilebilir. Local değişkenler ise fonksiyon içinde tanımlanır ve yalnızca o fonksiyona özeldir, dışarıdan erişilemez."
            },
            {
                "topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)",
                "question": "Von Neumann bilgisayar mimarisinin 4 ana bileşenini ve aralarındaki 'veri yolu' (bus) ilişkisini açıklayınız.",
                "points": 20,
                "answer": "1. Merkezi İşlem Birimi (İçinde CU ve ALU bulunur). 2. Ana Bellek (RAM). 3. Giriş/Çıkış Arayüzleri. 4. Veri Yolları. Veri ve komutlar aynı bellek alanında depolanır ve veri yolları üzerinden CPU'ya taşınır."
            },
            {
                "topic": "Python Karar Yapıları (if-elif-else) ve Döngüler",
                "question": "Doğrusal Arama (Linear Search) ile İkili Arama (Binary Search) algoritmalarını hız ve ön koşul açısından karşılaştırınız.",
                "points": 20,
                "answer": "Doğrusal Arama listenin başından sonuna elemanları tek tek inceler; liste sıralı olmak zorunda değildir (O(N)). İkili Arama listenin ortasındaki elemana bakıp listeyi sürekli ikiye böler; ön koşulu listenin kesinlikle SIRALI olmasıdır (O(log N))."
            }
        ]
    },
    "10": {
        "grade_name": "10. Sınıf - Bilgisayar Bilimi",
        "lesson_name": "BİLGİSAYAR BİLİMİ",
        "kolay": [
            {
                "topic": "Python Fonksiyonlar (def, return, parametreler)",
                "question": "Programlamada 'Fonksiyon' (Function) nedir? Fonksiyon kullanmanın sağladığı iki önemli avantajı yazınız.",
                "points": 20,
                "answer": "Fonksiyon; belirli bir görevi yerine getirmek üzere yapılandırılmış, tekrar tekrar çağrılabilen bağımsız kod bloklarıdır. Avantajları: 1. Kod tekrarını önler (DRY prensibi). 2. Programı modüler hale getirerek okunabilirliği ve bakım kolaylığını artırır."
            },
            {
                "topic": "Python Fonksiyonlar (def, return, parametreler)",
                "question": "Python'da bir fonksiyon nasıl tanımlanır ('def') ve nasıl çağrılır? İki sayıyı toplayan basit bir örnek gösteriniz.",
                "points": 20,
                "answer": "def topla(a, b):\n    return a + b\n\n# Çağırma:\nsonuc = topla(5, 7)\nprint(sonuc) # Ekrana 12 yazar"
            },
            {
                "topic": "Dosya İşlemleri ve Hata Yakalama (try-except)",
                "question": "Hata yakalama mekanizmasında 'try - except' bloklarının amacı nedir?",
                "points": 20,
                "answer": "'try' bloğu içine çalışma esnasında hata oluşturabilecek kodlar yazılır. Bir hata oluştuğunda program çökmek yerine 'except' bloğuna geçer ve hatayı zararsızca yöneterek kullanıcıya uygun mesaj verir."
            },
            {
                "topic": "Veritabanı Temelleri ve SQL Sorguları",
                "question": "İlişkisel Veritabanı Yönetim Sistemi (VTYS / RDBMS) nedir? İki popüler VTYS adı yazınız.",
                "points": 20,
                "answer": "Verileri satır ve sütunlardan oluşan tablolar halinde saklayan, aralarındaki ilişkileri yöneten yazılım sistemleridir. Popüler örnekler: MySQL, PostgreSQL, SQLite, Microsoft SQL Server."
            },
            {
                "topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik",
                "question": "IP Adresi ile MAC Adresi arasındaki temel farkları açıklayınız.",
                "points": 20,
                "answer": "IP Adresi: Ağ üzerinde cihazların birbirini bulmasını sağlayan mantıksal ve değiştirilebilir adrestir (Yazılımsal). MAC Adresi: Ağ kartının (NIC) üretimi sırasında içine yazılan benzersiz, fiziksel donanım kimliğidir (Donanımsal)."
            }
        ],
        "orta": [
            {
                "topic": "Python Fonksiyonlar (def, return, parametreler)",
                "question": "Python'da 'return' ifadesi içeren bir fonksiyon ile sadece 'print()' yapan bir fonksiyon arasındaki farkı açıklayınız.",
                "points": 20,
                "answer": "'print()' sadece ekrana yazı basar, program hafızasına bir değer kazandırmaz. 'return' ise hesaplanan değeri fonksiyonun çağrıldığı yere geri döndürür; bu değer bir değişkende saklanabilir veya başka işlemlerde kullanılabilir."
            },
            {
                "topic": "Dosya İşlemleri ve Hata Yakalama (try-except)",
                "question": "Python'da bir metin dosyasına yazma ('w') ve okuma ('r') işlemlerini 'with' bağlamı üzerinden kod örneğiyle açıklayınız.",
                "points": 20,
                "answer": "# Dosyaya Yazma:\nwith open('notlar.txt', 'w', encoding='utf-8') as f:\n    f.write('Ali: 90\\n')\n# Dosyadan Okuma:\nwith open('notlar.txt', 'r', encoding='utf-8') as f:\n    icerik = f.read()\n    print(icerik)"
            },
            {
                "topic": "Veritabanı Temelleri ve SQL Sorguları",
                "question": "İlişkisel veritabanlarında 'Birincil Anahtar' (Primary Key) ve 'Yabancı Anahtar' (Foreign Key) kavramlarını açıklayınız.",
                "points": 20,
                "answer": "Primary Key: Bir tablodaki her satırı benzersiz (unique) şekilde tanımlayan sütundur (Örn: OgrenciNo). Foreign Key: Bir tablodaki sütunun başka bir tablonun Primary Key'ine bağlanarak tablolar arası ilişki kurmasını sağlayan anahtardır."
            },
            {
                "topic": "Python Fonksiyonlar (def, return, parametreler)",
                "question": "Nesne Yönelimli Programlamada (OOP) 'Sınıf' (Class) ve 'Nesne' (Object) kavramlarını günlük hayattan bir benzetmeyle açıklayınız.",
                "points": 20,
                "answer": "Sınıf (Class) bir taslaktır, plandır (Örn: Bir araba mimari çizimi). Nesne (Object) ise o plandan üretilmiş somut örnektir (Örn: Fabrikadan çıkan kırmızı renkli, 34 plakalı gerçek bir araba)."
            },
            {
                "topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik",
                "question": "Bilgisayar ağlarında Yıldız (Star) topolojisinin çalışma mantığını, bir avantajını ve bir dezavantajını yazınız.",
                "points": 20,
                "answer": "Çalışma mantığı: Tüm cihazlar merkezi bir anahtara (Switch/Hub) doğrudan bağımsız kablolarla bağlıdır. Avantajı: Bir kablo kopsa bile diğerleri etkilenmez. Dezavantajı: Merkezi cihaz bozulursa tüm ağ çöker."
            }
        ],
        "zor": [
            {
                "topic": "Python Fonksiyonlar (def, return, parametreler)",
                "question": "Python dilinde özyinelemeli (recursive) bir yaklaşımla sayının faktöriyelini hesaplayan fonksiyonu yazınız.",
                "points": 20,
                "answer": "def faktoriyel(n):\n    if n <= 1:\n        return 1\n    return n * faktoriyel(n - 1)\n\nprint(faktoriyel(5)) # 120"
            },
            {
                "topic": "Veritabanı Temelleri ve SQL Sorguları",
                "question": "SQL dilinde bir 'Ogrenciler' tablosunda notu 70'ten büyük olan öğrencilerin ad ve soyadlarını listeleyen sorguyu yazınız.",
                "points": 20,
                "answer": "SELECT ad, soyad FROM Ogrenciler WHERE notu > 70 ORDER BY notu DESC;"
            },
            {
                "topic": "Python Fonksiyonlar (def, return, parametreler)",
                "question": "Nesne Yönelimli Programlamanın (OOP) 4 temel ilkesini (Kapsülleme, Kalıtım, Çok Biçimlilik, Soyutlama) birer cümleyle özetleyiniz.",
                "points": 20,
                "answer": "1. Kapsülleme: Veri ve metodları bir arada tutup dış müdahalelerden gizlemek. 2. Kalıtım: Bir sınıfın özelliklerini alt sınıflara aktarmak. 3. Çok Biçimlilik: Farklı nesnelerin aynı metoda kendi biçimlerinde yanıt vermesi. 4. Soyutlama: Gereksiz karmaşıklığı gizleyip temel fonksiyonları sunmak."
            },
            {
                "topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik",
                "question": "TCP ve UDP ağ iletim protokollerini güvenilirlik, hız ve kullanım alanları açısından karşılaştırınız.",
                "points": 20,
                "answer": "TCP: Bağlantı odaklıdır, veri iletimini doğrular (Güvenli ama yavaş; web, dosya indirme). UDP: Bağlantısızdır, iletim doğrulaması yapmaz (Çok hızlı ama paket kaybı olabilir; canlı video yayını, online oyunlar)."
            },
            {
                "topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik",
                "question": "Simetrik şifreleme (AES) ile Asimetrik şifreleme (RSA / Açık-Gizli Anahtar) arasındaki çalışma mantığı farkını açıklayınız.",
                "points": 20,
                "answer": "Simetrik şifrelemede hem şifreleme hem şifre çözme için aynı tek gizli anahtar kullanılır. Asimetrik şifrelemede iki anahtar vardır: Herkesin bildiği 'Genel Anahtar' (Public Key) ile şifrelenen veri, yalnızca alıcıdaki 'Gizli Anahtar' (Private Key) ile açılabilir."
            }
        ]
    }
}
