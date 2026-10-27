/**
 * 6. Sınıf Bilişim Teknolojileri - 1. Dönem Müfredat Verileri (Hafta 11 - 19)
 */

const CURRICULUM_TERM_1_PART2 = [
  // 11. HAFTA
  {
    week: 11,
    date: "23 - 29 Kasım",
    hours: "2 Saat",
    unit: "3. Ünite: Bilgisayar Ağları ve İletişim",
    unitBadge: "3. Ünite",
    unitTheme: "unite-3",
    title: "İletişim Teknolojileri & İleri Düzey Arama",
    subtitle: "E-Posta Adabı (Netiquette), Senkron/Asenkron İletişim ve Arama Operatörleri",
    outcomeCode: "BTY.6.3.1 - 6.3.2",
    targetSkill: "Bilgi Okuryazarlığı & Dijital İletişim",
    curiosityQuestion: "Google'da arama yaptığınızda çıkan milyonlarca sayfa arasından tam aradığınız PDF dosyasını 3 saniyede nasıl bulursunuz?",
    roadmap: [
      { title: "İletişim Türleri", desc: "Eş zamanlı (Senkron: Canlı ders, görüntülü arama) ve Farklı zamanlı (Asenkron: E-posta, forum)." },
      { title: "E-Posta Adabı (Netiquette)", desc: "Konu başlığı yazma, hitap kuralları, CC ve BCC alanlarının farkı." },
      { title: "İleri Düzey Arama Operatörleri", desc: "Tırnak işareti (\"...\"), eksi (-kelime), site: ve filetype: sihirbazlıkları." },
      { title: "Güvenilir Bilgi Kaynakları", desc: "Her okuduğuna inanma! .gov.tr ve .edu.tr uzantılarının güvenilirliği." }
    ],
    section1: {
      title: "İnternette İleri Düzey Arama Teknikleri",
      subtitle: "Arama motorunu sıradan bir kullanıcı gibi değil, bir bilişim uzmanı gibi kullanın.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Sihirli Arama Operatörleri",
          icon: "🔍",
          borderClass: "card-primary-border",
          desc: "Arama kutusuna sadece kelime yazmak yerine bu kodları ekleyin:",
          items: [
            { bold: "\"Tam İfade\"", text: "\"Güneş sistemi gezegenleri\" yazarsanız kelimeleri ayırmadan tam bu sırayla arar." },
            { bold: "-İstemediğinKelime", text: "jaguar -araba yazarsanız araba olan değil, sadece hayvan olan jaguarı getirir." },
            { bold: "site:uzantı", text: "deprem site:gov.tr yazarsanız sadece resmî devlet kurumlarının sitelerinde arar." },
            { bold: "filetype:format", text: "bilişim teknolojileri filetype:pdf yazarsanız sadece PDF belgelerini listeler." }
          ]
        },
        {
          title: "Güvenilir Bilgiye Ulaşma Kriterleri",
          icon: "🛡️",
          borderClass: "card-accent-border",
          desc: "İnternetteki her bilgi doğru değildir (Bilgi Kirliliği):",
          items: [
            { bold: "Yazar Belli mi?", text: "Yazarı veya kurumu belli olmayan içeriklerden şüphelenin." },
            { bold: "Tarih Güncel mi?", text: "10 yıl önceki bir bilim haberi geçerliliğini yitirmiş olabilir." },
            { bold: "Farklı Kaynaklardan Teyit", text: "Önemli bilgileri en az 2-3 bağımsız güvenilir siteden kontrol edin." }
          ]
        }
      ]
    },
    section2: {
      title: "Dijital Nezaket & E-Posta Kullanımı",
      subtitle: "Sanal dünyada saygılı, etkili ve profesyonel iletişim kuralları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "E-Postanın Anatomisi",
          icon: "✉️",
          borderClass: "card-success-border",
          desc: "Bir e-posta gönderirken bu alanların görevini bilin:",
          items: [
            { bold: "Kime (To)", text: "Mektubun asıl gideceği kişinin e-posta adresidir." },
            { bold: "Bilgi (CC)", text: "Mektuptan haberdar olması gereken diğer kişilerin adresidir." },
            { bold: "Gizli Bilgi (BCC)", text: "Adresi diğer alıcılar tarafından GÖRÜNMEYECEK kişidir (Gizlilik sağlar)." },
            { bold: "Konu (Subject)", text: "Asla boş bırakılmamalıdır! E-postanın özet başlığı yazılır." }
          ]
        },
        {
          title: "Dijital Nezaket Kuralları (Netiquette)",
          icon: "🤝",
          borderClass: "card-primary-border",
          desc: "Mesajlaşırken dikkat edilmesi gereken temel ilkeler:",
          items: [
            { bold: "BÜYÜK HARFLE YAZMAYIN", text: "İnternette tamamı büyük harfle yazmak KARŞIDAKİNE BAĞIRMAK anlamına gelir!" },
            { bold: "Hitap ve Kapanış", text: "'Değerli Öğretmenim / Merhaba Ali' ile başlayıp 'İyi çalışmalar dilerim' ile bitirin." },
            { bold: "İmla Kuralları", text: "Anlaşılır Türkçe kullanın, kısaltmalarla mesajı anlaşılmaz kılmayın." }
          ]
        }
      ]
    },
    workshop: {
      title: "Öğretmene Ödev Teslim E-Postası Gönderme Simülasyonu",
      subtitle: "Doğru e-posta adabı kurallarıyla öğretmenimize e-posta hazırlayalım.",
      steps: [
        { title: "Konu Başlığını Belirle", desc: "'Bilişim Teknolojileri 1. Ödev Teslimi - 6/A 452 Ahmet Yılmaz' şeklinde net bir konu yazın." },
        { title: "Gövde Metnini Yaz", desc: "Nezaketle hitap edin, ekte hangi dosyanın olduğunu açıklayın ve saygıyla bitirin." },
        { title: "Dosyayı Ekle (Attach)", desc: "Ataş simgesine tıklayarak ödev dosyasını e-postaya eklemeyi unutmayın!" }
      ],
      criteria: [
        "Konu satırının doğru ve eksiksiz doldurulması",
        "Büyük harfle bağırma hatasına düşülmemesi",
        "Saygılı ve net bir hitap/kapanış dili kullanılması"
      ]
    },
    tips: {
      safetyTitle: "Spam ve Sahte E-Posta Tehlikesi (Phishing)",
      safetyRules: [
        { bold: "Şüpheli Eklere Tıklamayın", text: "Tanımadığınız kişilerden gelen 'Faturanız', 'Tebrikler Kazandınız' başlıklı maillerin eklerini asla açmayın." },
        { bold: "Gönderen Adresini İnceleyin", text: "Banka gibi görünen ama sonu garip harflerle biten sahte adreslere aldanmayın." }
      ],
      myths: [
        { wrong: "Google'da ilk sırada çıkan web sitesi her zaman en doğru sitedir.", correct: "İlk sıradakiler bazen 'Sponsorlu / Reklam' içeriklerdir; bilgi doğruluğu garanti değildir." }
      ]
    },
    quiz: {
      question: "İnternette sadece Millî Eğitim Bakanlığı'na ait resmî sitelerde 'Scratch' konusunu aramak isteyen bir öğrenci arama kutusuna ne yazmalıdır?",
      options: [
        { text: "A) Scratch meb indir", isCorrect: false },
        { text: "B) Scratch site:meb.gov.tr", isCorrect: true },
        { text: "C) \"Scratch meb siteleri\"", isCorrect: false },
        { text: "D) Scratch filetype:meb", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> 'site:meb.gov.tr' operatörü arama motoruna sadece meb.gov.tr alan adı altındaki sayfaları listele komutunu verir."
    },
    summaryRules: [
      { bold: "Operatörler Zaman Kazandırır", text: "\" \" tam ifade arar, site: kurumu sınırlar, filetype: dosya türünü bulur." },
      { bold: "Büyük Harf Bağırmaktır", text: "Dijital yazışmalarda büyük harf kaba kabul edilir." },
      { bold: "BCC Gizlilik Sağlar", text: "Toplu e-postada kişilerin adreslerini gizlemek için BCC alanı kullanılır." }
    ],
    homework: "Google'da 'Türkiye çevre sorunları' konusunu sadece 'filetype:pdf site:gov.tr' filtreleriyle arayıp bulduğunuz ilk resmî raporun başlığını not edin.",
    nextWeekPreview: "Etkileşimli Web Araçları & Bilişim Etiği: Siber Zorbalığa Karşı Güçlü Duruş!"
  },

  // 12. HAFTA
  {
    week: 12,
    date: "30 Kasım - 06 Aralık",
    hours: "2 Saat",
    unit: "3. Ünite & 4. Ünite: Bilişim Etiği ve Siber Güvenlik",
    unitBadge: "3. & 4. Ünite",
    unitTheme: "unite-4",
    title: "Etkileşimli Web Araçları & Bilişim Etiği",
    subtitle: "Web 2.0 Araçları, Dijital Ayak İzi, Siber Zorbalık ve Bilişim Suçları",
    outcomeCode: "BTY.6.3.3 & 6.4.1",
    targetSkill: "Etik Değerlendirme & Dijital Vatandaşlık",
    curiosityQuestion: "Bugün internette paylaştığınız komik bir fotoğraf veya yazdığınız kırıcı bir yorum 15 yıl sonra karşınıza çıkabilir mi?",
    roadmap: [
      { title: "Web 2.0 ve İş Birliği", desc: "Kullanıcıların sadece okumayıp aynı anda içerik ürettiği interaktif platformlar." },
      { title: "Dijital Ayak İzi", desc: "İnternette tıkladığımız her butonun ve paylaşımın arkamızda bıraktığı kalıcı iz." },
      { title: "Siber Zorbalık (Cyberbullying)", desc: "Dijital ortamda alay etme, dışlama ve tehdit; zorbalıkla mücadele yolları." },
      { title: "Bilişim Suçları ve Yasalar", desc: "Başkalarının hesabını ele geçirmek veya hakaret etmek suçtur!" }
    ],
    section1: {
      title: "Dijital Ayak İzi: İnternet Hiçbir Şeyi Unutmaz!",
      subtitle: "Sanal dünyada bastığımız her kum tanesinde kalıcı bir izimiz kalır.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Dijital Ayak İzi Nedir?",
          icon: "👣",
          borderClass: "card-primary-border",
          desc: "İnternet kullanırken arkamızda bıraktığımız tüm veri kayıtlarıdır:",
          items: [
            { bold: "Aktif Ayak İzi", text: "Kendi isteğimizle paylaştığımız fotoğraflar, videolar, yorumlar ve beğeniler." },
            { bold: "Pasif Ayak İzi", text: "Ziyaret ettiğimiz sitelerin IP adresimiz ve çerezler (cookies) aracılığıyla topladığı bilgiler." },
            { bold: "Geleceğe Etkisi", text: "Gelecekte üniversite başvurularında ve işe alımlarda şirketler dijital geçmişinizi inceler." }
          ]
        },
        {
          title: "Temiz Bir Dijital Ayak İzi İçin",
          icon: "✨",
          borderClass: "card-success-border",
          desc: "Bir şey paylaşmadan önce kendine şu 3 soruyu sor:",
          items: [
            { bold: "1. Doğru mu?", text: "Paylaştığım bilgi kesin ve teyitli bir gerçek mi?" },
            { bold: "2. Gerekli mi?", text: "Bu fotoğrafın veya düşüncenin herkes tarafından görülmesi şart mı?" },
            { bold: "3. Nazik mi?", text: "Bu paylaşım bir arkadaşımı üzer, utandırır veya zor durumda bırakır mı?" }
          ]
        }
      ]
    },
    section2: {
      title: "Siber Zorbalık & Bilişim Suçları",
      subtitle: "Klavyenin arkasına saklanarak başkalarına zarar verilemez; kanunlar devrededir.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Siber Zorbalık Çeşitleri",
          icon: "🛑",
          borderClass: "card-accent-border",
          desc: "Dijital cihazlar kullanılarak yapılan kasıtlı ve tekrarlayan kötülükler:",
          items: [
            { bold: "Dışlama", text: "Arkadaşını kasıtlı olarak sınıf WhatsApp grubundan atmak veya yalnızlaştırmak." },
            { bold: "İfşa ve Hakaret", text: "Birinin izinsiz komik fotoğrafını yayıp alay etmek veya kötü yorum yazmak." },
            { bold: "Hesap Çalma / Sahte Profil", text: "Başkasının adına profil açıp uygunsuz paylaşımlarda bulunmak." }
          ]
        },
        {
          title: "Zorbalıkla Karşılaşınca Ne Yapmalı?",
          icon: "🛡️",
          borderClass: "card-purple-border",
          desc: "Asla sessiz kalmayın, 4 kuralı uygulayın:",
          items: [
            { bold: "1. Karşılık Verme", text: "Zorbanın amacı sizi sinirlendirmektir; onunla tartışmaya girmeyin." },
            { bold: "2. Ekran Görüntüsü Al", text: "Mesajları silmeyin, kanıt olarak ekran görüntüsünü kaydedin." },
            { bold: "3. Engelle ve Şikayet Et", text: "Uygulama üzerinden zorbayı engelleyin ve bildir butonuna basın." },
            { bold: "4. Güvenilir Yetişkine Anlat", text: "Ailenize, bilişim öğretmeninize veya rehber öğretmeninize durumu anlatın." }
          ]
        }
      ]
    },
    workshop: {
      title: "Örnek Olay Analizi: 'Mert'in Zorba Arkadaşı'",
      subtitle: "Aşağıdaki senaryoyu okuyup sınıfta doğru kararı tartışalım.",
      steps: [
        { title: "Senaryo", desc: "Sınıftan bir öğrenci, arkadaşının derste esnerken çekilen fotoğrafını komik çıkartma (sticker) yapıp tüm okula dağıtmıştır. Fotoğrafı çekilen öğrenci okula gelmek istememektedir." },
        { title: "Sorular", desc: "Bu davranış bir şaka mıdır yoksa siber zorbalık mıdır? Olayın mağduru ne yapmalıdır? Bu fotoğrafı gören diğer öğrenciler nasıl davranmalıdır?" },
        { title: "Sınıf Kararı", desc: "'Gülüp paylaşmak suça ortak olmaktır. Doğru davranış paylaşımı durdurup desteği belirtmektir.'" }
      ],
      criteria: [
        "Şaka ile zorbalık arasındaki çizgiyi (rızanın önemini) ayırt edebilme",
        "Empati kurabilme ve mağduru suçlamama yaklaşımı",
        "Bilişim suçu kavramının farkında olma"
      ]
    },
    tips: {
      safetyTitle: "Bilişim Suçlarında Cezai Sorumluluk",
      safetyRules: [
        { bold: "Anonim Değilsiniz", text: "İnternette takma isim kullansanız bile polis ve savcılık IP adresinizden hangi evden girdiğinizi dakikalar içinde tespit eder." },
        { bold: "İzinsiz Fotoğraf Suçtur", text: "Bir arkadaşınızın fotoğrafını ondan veya ailesinden izinsiz sosyal medyada paylaşmak kişisel verilerin ihlali suçudur." }
      ],
      myths: [
        { wrong: "'Ben sadece şaka yapmıştım' demek cezayı engeller.", correct: "Hukukta 'şaka yapmıştım' bir savunma değildir; birini aşağılamak ve huzurunu bozmak suçtur." }
      ]
    },
    quiz: {
      question: "Sosyal medyada bir arkadaşınızın fotoğrafının altına hakaret içeren kötü yorumlar yazıldığını ve dalga geçildiğini gördünüz. En doğru davranış hangisidir?",
      options: [
        { text: "A) Ben de bir komik yorum ekleyip gülmek", isCorrect: false },
        { text: "B) Yoruma ortak olmadan arkadaşıma destek olmak ve gerekirse öğretmene bildirmek", isCorrect: true },
        { text: "C) Fotoğrafı kaydedip başka gruplara göndermek", isCorrect: false },
        { text: "D) Zorbaya küfürle karşılık vermek", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Siber zorbalıkta izleyici kalıp sessiz kalmak ya da yaymak zorbalığa ortak olmaktır; mağdura destek olmak ve yetişkine bildirmek en doğru erdemdir."
    },
    summaryRules: [
      { bold: "Dijital Ayak İzi Kalıcıdır", text: "Bugün internete yüklediğiniz her şey gelecekte karşınıza çıkabilir." },
      { bold: "Zorbalığa Sıfır Tolerans", text: "Cevap verme, kanıt al, engelle ve yetişkine bildir." },
      { bold: "Ekran Arkasında İnsan Var", text: "Yüz yüzeyken söyleyemeyeceğiniz hiçbir şeyi internette yazmayın." }
    ],
    homework: "Kendi adınızı tırnak içinde Google'da aratın (\"Adınız Soyadınız\") ve çıkan sonuçlarda dijital ayak izinizi inceleyin.",
    nextWeekPreview: "Telif Hakkı & Güvenli Siber Ortam: Fikir Eserleri, Güçlü Şifreler ve Siber Tehditler!"
  },

  // 13. HAFTA
  {
    week: 13,
    date: "07 - 13 Aralık",
    hours: "2 Saat",
    unit: "4. Ünite: Bilişim Etiği ve Siber Güvenlik",
    unitBadge: "4. Ünite",
    unitTheme: "unite-4",
    title: "Telif Hakkı & Güvenli Siber Ortam",
    subtitle: "Fikir ve Sanat Eserleri, İntihal, Güçlü Şifreler ve Siber Tehditler (Virüs, Phishing)",
    outcomeCode: "BTY.6.4.2 - 6.4.3",
    targetSkill: "Telif Bilinci & Siber Korunma",
    curiosityQuestion: "Aylarca çalışıp yazdığınız bir kitabı veya kodladığınız bir oyunu biri kopyalayıp 'Bunu ben yaptım' diyerek satsa ne hissederdiniz?",
    roadmap: [
      { title: "Telif Hakkı (Copyright) Nedir?", desc: "Bir eseri üreten kişinin o eser üzerindeki yasal hakları (© sembolü)." },
      { title: "İntihal (Plagiarism)", desc: "Başkasına ait bir yazıyı veya ödevi kopyalayıp kendisininmiş gibi sunmanın hırsızlık olması." },
      { title: "Siber Tehdit Türleri", desc: "Virüs, Solucan (Worm), Truva Atı (Trojan), Fidye Yazılımı (Ransomware) ve Oltalama (Phishing)." },
      { title: "Kırılmaz Şifrelerin Sırrı", desc: "Büyük-küçük harf, rakam ve özel karakterlerden oluşan güçlü şifre kuralları." }
    ],
    section1: {
      title: "Fikir Emeği Kutsaldır: Telif Hakkı ve İntihal",
      subtitle: "Sanatçıların, yazarların ve yazılımcıların haklarını koruma kuralları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Telif Hakkı (Copyright ©)",
          icon: "©️",
          borderClass: "card-primary-border",
          desc: "Kişinin her türlü fikrî emeği ile meydana getirdiği eserler üzerindeki hukuki haklarıdır:",
          items: [
            { bold: "Fikir ve Sanat Eserleri Kanunu", text: "Ülkemizde 5846 sayılı kanunla eser sahipleri devlet güvencesi altındadır." },
            { bold: "İzinsiz Kullanım Yasaktır", text: "Telifli bir müziği, resmi veya yazılımı sahibinden izinsiz satmak veya dağıtmak suçtur." },
            { bold: "Korsan Yazılım Tehlikesi", text: "Korsan oyun veya programlar genellikle içine casus yazılım gizlenmiş tehlikelerdir." }
          ]
        },
        {
          title: "İntihal (Akademik Hırsızlık) Nedir?",
          icon: "⚠️",
          borderClass: "card-accent-border",
          desc: "Başkalarının emeğini kopyalayıp kendi yapmış gibi göstermektir:",
          items: [
            { bold: "Ödevde Kopyala-Yapıştır", text: "Vikipedi'den yazıyı aynen kopyalayıp altına kendi adını yazmak intihaldir!" },
            { bold: "Doğru Yol: Kaynakça Göstermek", text: "Bilgiyi okuyup kendi cümlelerinizle özetleyin ve 'Kaynak: TÜBİTAK Bilim Çocuk' diye belirtin." }
          ]
        }
      ]
    },
    section2: {
      title: "Siber Tehditler & Kırılmaz Şifre Rehberi",
      subtitle: "Bilgisayar korsanlarına karşı dijital kalenizi inşa edin.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Siber Dünyadaki Başlıca Tehditler",
          icon: "👾",
          borderClass: "card-accent-border",
          desc: "Cihazlarımıza zarar veren kötü niyetli yazılımlar (Malware):",
          items: [
            { bold: "Virüs & Solucan", text: "Sistem dosyalarını bozar, kendini çoğaltarak tüm ağa yayılır." },
            { bold: "Truva Atı (Trojan)", text: "Faydalı bir oyun gibi görünür ama arkada arka kapı açıp kamerayı/klavyeyi izler." },
            { bold: "Oltalama (Phishing)", text: "'Hesabınız çalındı hemen şifrenizi girin' diyen sahte e-postalarla şifre avcılığı." },
            { bold: "Fidye Yazılımı", text: "Dosyalarınızı şifreleyip açmak için sizden para talep eder." }
          ]
        },
        {
          title: "Güçlü Şifrenin 4 Kuralı",
          icon: "🔑",
          borderClass: "card-success-border",
          desc: "123456 veya doğum tarihi yerine kırılmaz şifreler oluşturun:",
          items: [
            { bold: "En Az 8-12 Karakter", text: "Kısa şifreler bilgisayar programlarıyla saniyeler içinde kırılır." },
            { bold: "Çeşitlilik Şart", text: "Büyük harf (A), Küçük harf (b), Rakam (7) ve Özel Sembol (!, ?, #, *)." },
            { bold: "Kişisel Bilgi İçermemeli", text: "Adınız, doğum yılınız, tuttuğunuz takım şifre olmamalıdır." },
            { bold: "İki Adımlı Doğrulama (2FA)", text: "Şifreye ek olarak telefona gelen onay kodu ile hesabınızı koruyun." }
          ]
        }
      ]
    },
    workshop: {
      title: "Kendi Kırılmaz Parolanı Üret: 'Cümle Yöntemi'",
      subtitle: "Unutulması imkânsız ama kırılması imkânsız şifre türetme tekniği.",
      steps: [
        { title: "Akılda Kalıcı Bir Cümle Seç", desc: "Örn: 'Ben bu yıl bilişim dersinde 100 almak istiyorum!'" },
        { title: "İlk Harflerini Al", desc: "B - b - y - b - d - 100 - a - i - !" },
        { title: "Şifreni Oluştur", desc: "Bbybd100ai! (11 karakter, büyük-küçük harf, sayı ve sembol içerir!)" }
      ],
      criteria: [
        "En az 8 karakter uzunluğunda olması",
        "Tüm karakter türlerini (Büyük, küçük, sayı, sembol) içermesi",
        "Şifrenin kesinlikle kimseyle paylaşılmaması"
      ]
    },
    tips: {
      safetyTitle: "Siber Güvenlik Altın Kuralları",
      safetyRules: [
        { bold: "Şifre Diş Fırçası Gibidir", text: "Kişiye özeldir, kimseyle (en yakın arkadaşınızla bile) paylaşılmaz ve 3-6 ayda bir yenilenmelidir." },
        { bold: "Antivirüs Kullanın", text: "Bilgisayarınızda güncel bir güvenlik yazılımı mutlaka aktif olmalıdır." }
      ],
      myths: [
        { wrong: "Benim hesabımı kim ne yapsın, ben ünlü değilim ki!", correct: "Korsanlar kişisel hesapları başkalarına spam atmak ve dolandırıcılık yapmak için çalarlar." }
      ]
    },
    quiz: {
      question: "Aşağıdakilerden hangisi siber güvenlik kurallarına göre EN GÜÇLÜ şifredir?",
      options: [
        { text: "A) fenerbahce1907", isCorrect: false },
        { text: "B) 123456789", isCorrect: false },
        { text: "C) Tr!k49#Bilisim.", isCorrect: true },
        { text: "D) ahmet2014", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Büyük harf, küçük harf, özel karakterler (! # .) ve rakamlar içeren karmaşık şifreler kırılması en zor şifrelerdir."
    },
    summaryRules: [
      { bold: "Emeğe Saygı", text: "Başkalarının içeriklerini kaynak göstermeden kullanmak intihaldir." },
      { bold: "Güçlü Parola", text: "Karmaşık ve uzun şifreler siber saldırganların ilk engelidir." },
      { bold: "Şüpheli Linklere Tıklama", text: "Oltalama saldırılarına karşı her zaman dikkatli ve uyanık olun." }
    ],
    homework: "Kullanmakta olduğunuz bir oyun veya e-posta şifrenizi güçlü şifre kurallarına göre yenileyin.",
    nextWeekPreview: "Lisans Türleri & Yapay Zekâ Dünyasına Giriş: Açık Kaynak, Creative Commons ve Veri!"
  },

  // 14. HAFTA
  {
    week: 14,
    date: "14 - 20 Aralık",
    hours: "2 Saat",
    unit: "4. Ünite & 5. Ünite: Yapay Zekâ",
    unitBadge: "4. & 5. Ünite",
    unitTheme: "unite-5",
    title: "Lisans Türleri & Yapay Zekâda Veri",
    subtitle: "Açık Kaynak, Creative Commons, Freeware ve Yapay Zekâya Giriş",
    outcomeCode: "BTY.6.4.4 & 6.5.1",
    targetSkill: "Lisans Karşılaştırma & Yapay Zekâ Temelleri",
    curiosityQuestion: "Nasıl oluyor da bazı bilgisayar programları tamamen ücretsiz ve kaynak kodları herkese açıkken, bazıları binlerce liraya satılıyor?",
    roadmap: [
      { title: "Yazılım Lisansı Nedir?", desc: "Bir yazılımı kullanma, dağıtma ve değiştirme haklarını belirleyen yasal sözleşme." },
      { title: "Temel Lisans Türleri", desc: "Ticari (Ücretli), Freeware (Ücretsiz), Shareware (Deneme) ve Açık Kaynak (Open Source)." },
      { title: "Creative Commons (CC)", desc: "İnternetteki resim ve müziklerin ücretsiz ama kurallı paylaşım lisansı." },
      { title: "Yapay Zekâya Merhaba", desc: "Yapay zekâ nedir? Yapay zekânın en temel besin kaynağı: Veri!" }
    ],
    section1: {
      title: "Yazılım Dünyasında Lisans Türleri",
      subtitle: "Hangi programı nasıl ve hangi şartlarda kullanabileceğimizi belirleyen kurallar.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Geleneksel Yazılım Lisansları",
          icon: "📜",
          borderClass: "card-primary-border",
          desc: "Kullanım haklarına göre yazılımlar 4 ana gruba ayrılır:",
          items: [
            { bold: "Ticari Yazılım", text: "Kullanmak için ücret ödenmesi gereken telifli yazılımlar (Örn: Windows, MS Office)." },
            { bold: "Ücretsiz Yazılım (Freeware)", text: "Tamamen ücretsiz kullanılabilen ancak kodları kapalı olan programlar." },
            { bold: "Deneme Sürümü (Shareware)", text: "30 gün boyunca ücretsiz olup sonra satın almayı isteyen yazılımlar." },
            { bold: "Demo Yazılım", text: "Oyunun veya programın sadece ilk 1-2 bölümünün açık olduğu tanıtım sürümü." }
          ]
        },
        {
          title: "Açık Kaynak Kod (Open Source) & Creative Commons",
          icon: "🔓",
          borderClass: "card-success-border",
          desc: "Paylaşımı, geliştirmeyi ve yardımlaşmayı savunan modern lisanslar:",
          items: [
            { bold: "Açık Kaynak (Pardus, Linux)", text: "Programın tüm kodları açıktır; herkes inceleyebilir, düzeltebilir ve geliştirebilir." },
            { bold: "Creative Commons (CC)", text: "Eser sahibinin adını belirtmek şartıyla fotoğraf, ses ve videoların ücretsiz kullanımına izin veren lisans." },
            { bold: "Özgür Yazılım Felsefesi", text: "Bilginin paylaşıldıkça büyüyeceğini savunan küresel bilişim hareketi." }
          ]
        }
      ]
    },
    section2: {
      title: "Yapay Zekâ Dünyasına Giriş & Veri",
      subtitle: "Yapay zekâ nasıl düşünür? Veri onun için neden yemek kadar hayati?",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Yapay Zekâ (AI) Nedir?",
          icon: "🧠",
          borderClass: "card-purple-border",
          desc: "İnsan zekâsının problem çözme, görme, dinleme ve öğrenme gibi yeteneklerinin bilgisayarlar tarafından taklit edilmesidir.",
          items: [
            { bold: "Geleneksel Program", text: "Yazılımcı ne kural yazdıysa SADECE onu yapar (2+2=4)." },
            { bold: "Yapay Zekâ", text: "Kendisine verilen milyonlarca örnekten kuralı KENDİSİ keşfeder ve öğrenir!" }
          ]
        },
        {
          title: "Veri: Yapay Zekânın Yakıtı",
          icon: "⛽",
          borderClass: "card-accent-border",
          desc: "Yapay zekâ veri olmadan bir hiçtir:",
          items: [
            { bold: "Nasıl Öğrenir?", text: "Bir yapay zekâya 100.000 kedi fotoğrafı gösterirseniz, 100.001. fotoğrafta kedi olup olmadığını anlar." },
            { bold: "Çöp Girerse Çöp Çıkar (GIGO)", text: "Yapay zekâya verdiğiniz eğitim verisi kalitesiz veya hatalıysa, üreteceği sonuçlar da yanlış olur." }
          ]
        }
      ]
    },
    workshop: {
      title: "Lisans Dedektifi: Okul Bilgisayarındaki Programları İncele",
      subtitle: "Kullandığımız programların lisans türlerini tespit edelim.",
      steps: [
        { title: "Programları Listele", desc: "Masaüstündeki 3 programı seçin (Örn: Google Chrome, Audacity, MS Paint)." },
        { title: "Lisansını Bul", desc: "Bu programlardan hangisi Açık Kaynak, hangisi Ticari, hangisi Freeware?" },
        { title: "Tabloya Yaz", desc: "Defterinize 'Program Adı | Lisans Türü | Ücretli mi?' tablosu oluşturun." }
      ],
      criteria: [
        "Açık kaynak ile ticari yazılım farkını doğru açıklama",
        "Creative Commons simgelerini (BY, NC, SA) tanıma",
        "Yapay zekanın veriden beslendiğini kavrama"
      ]
    },
    tips: {
      safetyTitle: "Creative Commons Kullanırken Dikkat!",
      safetyRules: [
        { bold: "BY Simgesi (Atıf)", text: "Eseri kullanırken sahibinin adını belirtmek ZORUNDASINIZ." },
        { bold: "NC Simgesi (Ticari Olmayan)", text: "Bu simge varsa o görseli veya müziği para kazanmak amacıyla KULLANAMAZSINIZ." }
      ],
      myths: [
        { wrong: "İnternette Google Görseller'de çıkan her resmi ödevime veya videoma koyabilirim.", correct: "Google Görseller'deki fotoğrafların çoğu teliflidir; sadece 'Kullanım Hakları > Creative Commons' olanları kullanabilirsiniz." }
      ]
    },
    quiz: {
      question: "Kaynak kodları herkes tarafından görülebilen, ücretsiz dağıtılabilen ve dileyen herkesin geliştirebildiği yazılım türü hangisidir?",
      options: [
        { text: "A) Ticari Yazılım", isCorrect: false },
        { text: "B) Demo Yazılım", isCorrect: false },
        { text: "C) Açık Kaynak Kodlu Yazılım", isCorrect: true },
        { text: "D) Shareware", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: C!</strong> Açık Kaynak (Open Source) yazılımların kodları açıktır; topluluk tarafından sürekli geliştirilir (Linux, Pardus, Audacity gibi)."
    },
    summaryRules: [
      { bold: "Lisans = Yasal İzin", text: "Yazılımları lisans kurallarına uygun kullanmak yasal ve ahlaki bir görevdir." },
      { bold: "Açık Kaynak Özgürlüktür", text: "Açık kaynak yazılımlar teknolojik bağımsızlığı ve iş birliğini destekler." },
      { bold: "Veri = YZ'nin Yakıtı", text: "Yapay zekâ insanlar tarafından sağlanan zengin verilerle eğitilir." }
    ],
    homework: "Milli işletim sistemimiz olan 'Pardus'un resmi web sitesini (pardus.org.tr) ziyaret edip hangi lisansla dağıtıldığını araştırın.",
    nextWeekPreview: "Yapay Zekâda Verinin Rolü: Veri Nasıl Toplanır, Temizlenir ve Etiketlenir?"
  },

  // 15. HAFTA
  {
    week: 15,
    date: "21 - 27 Aralık",
    hours: "2 Saat",
    unit: "5. Ünite: Yapay Zekâ",
    unitBadge: "5. Ünite",
    unitTheme: "unite-5",
    title: "Yapay Zekâda Verinin Rolü",
    subtitle: "Veri Toplama, Temizleme, Etiketleme (Labeling) ve Veride Önyargı (Bias)",
    outcomeCode: "BTY.6.5.1",
    targetSkill: "Veri Okuryazarlığı & Model Eğitimi",
    curiosityQuestion: "Bir bilgisayar elma ile domates arasındaki farkı nasıl ayırt eder? Gözleri olmadığına göre nasıl 'görür'?",
    roadmap: [
      { title: "Veri Türleri", desc: "Metin, görüntü (piksel matrisi), ses dalgası ve sayısal sensör verileri." },
      { title: "Veri Toplama & Temizleme", desc: "Bulanık, alakasız ve hatalı verilerin elenmesi süreci." },
      { title: "Veri Etiketleme (Labeling)", desc: "Bilgisayara 'Bak bu bir kedi, bak bu bir köpek' diye öğretme sanatı." },
      { title: "Veride Önyargı ve Taraflılık (Bias)", desc: "Eksik veya tek taraflı verinin yol açtığı tehlikeli hatalar." }
    ],
    section1: {
      title: "Bilgisayar Veriyi Nasıl Görür ve Öğrenir?",
      subtitle: "Görsellerden sayılara: Bir yapay zekânın dünyayı algılama biçimi.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Veri Toplama ve Temizleme",
          icon: "🧹",
          borderClass: "card-primary-border",
          desc: "Bir yapay zekâ modeli eğitmek için binlerce kaliteli veriye ihtiyaç vardır:",
          items: [
            { bold: "Veri Çeşitliliği", text: "Modelin iyi öğrenmesi için elmanın her rengi (kırmızı, yeşil, sarı) ve her açısından fotoğraf toplanmalıdır." },
            { bold: "Gürültülü Veriyi Temizleme", text: "Çok karanlık, bulanık veya elma yerine muz olan fotoğraflar veri setinden ayıklanır." },
            { bold: "Veri Seti (Dataset)", text: "Yapay zekânın eğitiminde kullanılan düzenli veri kütüphanesidir." }
          ]
        },
        {
          title: "Veri Etiketleme (Data Labeling)",
          icon: "🏷️",
          borderClass: "card-success-border",
          desc: "Yapay zekâya öğretmenlik yapma sürecidir:",
          items: [
            { bold: "Etiket Nedir?", text: "Her fotoğrafın yanına doğru bilginin eklenmesidir (Örn: Resim1 = 'Kedi', Resim2 = 'Köpek')." },
            { bold: "Sınıflandırma (Classification)", text: "Etiketlenen veriler sayesinde yapay zekâ hangi özelliğin kime ait olduğunu kavrar." },
            { bold: "Test Verisi", text: "Model eğitildikten sonra, daha önce hiç görmediği fotoğraflarla sınav yapılır!" }
          ]
        }
      ]
    },
    section2: {
      title: "Büyük Tehlike: Veride Önyargı ve Taraflılık (Bias)",
      subtitle: "Yapay zekâ kendisine ne öğretilirse onu yansıtır.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Yapay Zekâ Önyargısı Nasıl Oluşur?",
          icon: "⚖️",
          borderClass: "card-accent-border",
          desc: "Eğer eğitim verisi dünyayı adil ve eşit temsil etmiyorsa model hatalı kararlar verir:",
          items: [
            { bold: "Örnek Olay (Doktor & Hemşire)", text: "Yapay zekâya sadece erkek doktor ve kadın hemşire fotoğrafları gösterilirse, kadın bir doktor gördüğünde 'Bu hemşire' diyerek yanılır!" },
            { bold: "Ten Rengi Ayrımcılığı", text: "Yüz tanıma sistemleri sadece açık tenli insanlarla eğitilirse koyu tenli insanları tanıyamaz." }
          ]
        },
        {
          title: "Adil ve Güvenilir Yapay Zekâ İlkeleri",
          icon: "🤝",
          borderClass: "card-purple-border",
          desc: "Geleceğin yapay zekâ mühendisleri olarak uymamız gereken kurallar:",
          items: [
            { bold: "Çeşitlilik", text: "Veri setinde her yaştan, her kültürden ve her coğrafyadan eşit örnek olmalıdır." },
            { bold: "Sürekli Denetim", text: "Yapay zekânın kararları tarafsız uzmanlar tarafından test edilmelidir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Veri Etiketleme Atölyesi",
      subtitle: "Geri dönüşüm yapay zekâsı için veri seti hazırlıyoruz.",
      steps: [
        { title: "Veri Sınıflarını Belirle", desc: "İki sınıf oluşturun: 'Plastik Şişe' ve 'Cam Şişe'." },
        { title: "Özellikleri Çıkarın", desc: "Plastik şişenin belirgin özellikleri nelerdir? (Bükülebilir, mat, hafif). Cam şişenin özellikleri nelerdir? (Parlak, şeffaf, sert)." },
        { title: "Hatalı Veriyi Ayıkla", desc: "Önünüze gelen kırık ampul fotoğrafını cam şişe sınıfına ekler misiniz? Neden?" }
      ],
      criteria: [
        "Veri etiketleme mantığını doğru kavramak",
        "Sınıflandırma kriterlerini net belirlemek",
        "Yanlış veya yanıltıcı verileri ayıklayabilmek"
      ]
    },
    tips: {
      safetyTitle: "Kişisel Verilerin Gizliliği (KVKK)",
      safetyRules: [
        { bold: "Yüzünüz Bir Veridir", text: "Sosyal medyadaki 'Beni 50 yıl yaşlandır' gibi yapay zekâ uygulamalarına yüz fotoğrafınızı yüklerken gizlilik sözleşmelerine dikkat edin." },
        { bold: "Rızasız Veri Toplanamaz", text: "İnsanların haberi olmadan seslerini veya fotoğraflarını yapay zekâ eğitimi için toplamak suçtur." }
      ],
      myths: [
        { wrong: "Yapay zekâ kendiliğinden tarafsızdır, çünkü o bir makinedir.", correct: "Makineler duygusuzdur fakat onları eğiten insanların önyargılarını ve hatalı verilerini aynen kopyalarlar." }
      ]
    },
    quiz: {
      question: "Bir yapay zekâ modelinin elma ile armudu ayırt edebilmesi için her fotoğrafın altına 'Elma' veya 'Armut' şeklinde doğru bilginin yazılması işlemine ne denir?",
      options: [
        { text: "A) Veri Formatlama", isCorrect: false },
        { text: "B) Veri Etiketleme (Data Labeling)", isCorrect: true },
        { text: "C) Veri Silme", isCorrect: false },
        { text: "D) Veri Sıkıştırma", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Bilgisayara hangi verinin ne olduğunu tanıtma işlemine Veri Etiketleme (Data Labeling) denir ve model eğitiminin temelidir."
    },
    summaryRules: [
      { bold: "Kaliteli Veri = Başarılı YZ", text: "Yapay zekânın başarısı, eğitildiği verinin doğruluğuna ve çeşitliliğine bağlıdır." },
      { bold: "Etiketleme Şarttır", text: "Model doğru ve yanlış kavramını etiketlenmiş verilerden öğrenir." },
      { bold: "Önyargıya Dikkat", text: "Eksik veri adaletsiz yapay zekâ sonuçları doğurur." }
    ],
    homework: "Evinizdeki 5 farklı nesnenin (kalem, silgi, bardak, defter, telefon) yapay zekaya öğretilecek en belirgin 2 ayırt edici özelliğini yazın.",
    nextWeekPreview: "Üretken Yapay Zekâ Araçları & Prompt (İstek Metni) Mühendisliği!"
  },

  // 16. HAFTA
  {
    week: 16,
    date: "28 Aralık - 03 Ocak",
    hours: "2 Saat",
    unit: "5. Ünite: Yapay Zekâ",
    unitBadge: "5. Ünite",
    unitTheme: "unite-5",
    title: "Üretken Yapay Zekâ Araçları",
    subtitle: "Metin, Görsel ve Ses Üreten Araçlar & Prompt (İstek Metni) Mühendisliği",
    outcomeCode: "BTY.6.5.2",
    targetSkill: "Prompt Mühendisliği & YZ Araçlarını Kullanma",
    curiosityQuestion: "Yapay zekâya 'Bana bir masal yaz' demekle '6 yaşındaki bir çocuk için içinde uçan bir kaplumbağa olan komik bir masal yaz' demek arasındaki dev fark nedir?",
    roadmap: [
      { title: "Üretken Yapay Zekâ (GenAI)", desc: "Sıfırdan metin, resim, müzik ve kod üretebilen yeni nesil yapay zekâ." },
      { title: "Popüler Araçlar", desc: "Metin üretenler (ChatGPT, Claude, Gemini), Görsel üretenler ve Ses araçları." },
      { title: "Prompt Mühendisliği Nedir?", desc: "Yapay zekâya doğru komutu vererek mükemmel sonuç alma sanatı." },
      { title: "4 Adımlı Altın Prompt Formülü", desc: "Rol + Görev + Bağlam + Çıktı Formatı kuralı." }
    ],
    section1: {
      title: "Üretken Yapay Zekâ Araçları Dünyası",
      subtitle: "Hayal ettiğinizi birkaç saniyede gerçeğe dönüştüren dijital yardımcılar.",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Metin Üreticiler (LLM)",
          icon: "✍️",
          borderClass: "card-primary-border",
          desc: "Gemini, ChatGPT, Claude gibi büyük dil modelleri:",
          items: [
            { bold: "Neler Yapar?", text: "Hikâye yazar, şiir yazar, yabancı dilleri çevirir, özet çıkarır ve kod yazar." },
            { bold: "Nasıl Çalışır?", text: "Cümledeki bir sonraki en mantıklı kelimeyi tahmin ederek yazar." }
          ]
        },
        {
          title: "Görsel Üreticiler",
          icon: "🎨",
          borderClass: "card-accent-border",
          desc: "Midjourney, DALL-E, Stable Diffusion gibi araçlar:",
          items: [
            { bold: "Neler Yapar?", text: "Yazdığınız metin tarifinden sıfırdan hayal bile edemeyeceğiniz resimler çizer." },
            { bold: "Örnek", text: "'Ay yüzeyinde çay içen astronot sincap, yağlı boya tablosu'." }
          ]
        },
        {
          title: "Ses & Müzik Üreticiler",
          icon: "🎵",
          borderClass: "card-purple-border",
          desc: "Suno, Udio, ElevenLabs gibi ses teknolojileri:",
          items: [
            { bold: "Neler Yapar?", text: "Metni insan gibi seslendirir, istediğiniz tarzda (rock, pop) şarkı besteler." }
          ]
        }
      ]
    },
    section2: {
      title: "Prompt Mühendisliğinin 4 Altın Kuralı",
      subtitle: "Yapay zekâdan en doğru cevabı almanın sihirli formülü.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Altın Formül: R-G-B-F",
          icon: "🪄",
          borderClass: "card-success-border",
          desc: "Her promptunuzda bu 4 bileşeni birleştirin:",
          items: [
            { bold: "1. ROL Verin", text: "'Sen uzman bir 6. sınıf fen bilimleri öğretmenisin.'" },
            { bold: "2. GÖREVİ Tanımlayın", text: "'Fotosentez konusunu bana açıkla.'" },
            { bold: "3. BAĞLAM Sağlayın", text: "'12 yaşındaki öğrencilerin anlayacağı eğlenceli ve günlük hayat örnekleriyle olsun.'" },
            { bold: "4. FORMAT Belirleyin", text: "'Maddeler hâlinde, en fazla 5 maddede ve sonunda 1 soruyla bitir.'" }
          ]
        },
        {
          title: "Kötü Prompt vs. İyi Prompt",
          icon: "⚡",
          borderClass: "card-primary-border",
          desc: "Küçük detaylar büyük fark yaratır:",
          items: [
            { bold: "Kötü:", text: "'Bana çevre kirliliğini anlat.' (Çok genel, sıkıcı bir ansiklopedi metni verir)." },
            { bold: "İyi:", text: "'Sen bir çevre mühendisisin. Okul bahçesinde sıfır atık projesi başlatmak için 6. sınıf öğrencilerine 3 pratik öneri listele.'" }
          ]
        }
      ]
    },
    workshop: {
      title: "Sınıf İçi Prompt Mühendisliği Yarışması",
      subtitle: "En yaratıcı hikaye promptunu tasarlayan grubu seçiyoruz.",
      steps: [
        { title: "Karakter ve Mekân Seç", desc: "Bir robot kedi ve Mars gezegenindeki gizli bir sera seçin." },
        { title: "4 Kuralı Uygula", desc: "Rol (Masal yazarı), Görev (Heyecanlı macera), Bağlam (Dostluk temalı), Format (3 paragraf)." },
        { title: "Tahtada Test Et", desc: "Promptu tahtadaki yapay zekâ aracına yazın ve ortaya çıkan masalı birlikte okuyun!" }
      ],
      criteria: [
        "Rol, görev, bağlam ve format ögelerinin eksiksiz olması",
        "Yapay zekânın tam istenen uzunluk ve tonda yanıt vermesi",
        "Yaratıcı ve özgün fikirler barındırması"
      ]
    },
    tips: {
      safetyTitle: "Halüsinasyon (Yanılsama) Uyarısı!",
      safetyRules: [
        { bold: "Yapay Zekâ Uydurabilir!", text: "Büyük dil modelleri bilmedikleri konularda son derece kendinden emin bir şekilde yalan veya yanlış bilgi üretebilir (Buna Halüsinasyon denir)." },
        { bold: "Ödevinizi Asla Aynen Kopyalamayın", text: "Yapay zekâ bir düşünme ve araştırma asistanıdır; ödevi ona yaptırıp teslim etmek akademik dürüstlüğe aykırıdır." }
      ],
      myths: [
        { wrong: "Yapay zekâ canlıdır, duyguları vardır ve dünyayı ele geçirecektir.", correct: "Yapay zekâ bir yazılımdır; bilinci veya duygusu yoktur, sadece matematiksel olasılık hesapları yapar." }
      ]
    },
    quiz: {
      question: "Yapay zekâya verilen komut metninde 'Sen ödüllü bir çocuk kitabı yazarısın' ifadesini kullanmak Prompt Mühendisliğinin hangi adımına örnektir?",
      options: [
        { text: "A) Çıktı Formatı Belirleme", isCorrect: false },
        { text: "B) Rol Atama (Role)", isCorrect: true },
        { text: "C) Hata Ayıklama", isCorrect: false },
        { text: "D) Dosya Sıkıştırma", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Yapay zekâya hangi kimliğe bürüneceğini söylemek 'Rol Atama' adımıdır ve cevabın üslubunu doğrudan belirler."
    },
    summaryRules: [
      { bold: "Prompt = Yönerge", text: "Ne kadar detaylı ve net tarif ederseniz o kadar kaliteli sonuç alırsınız." },
      { bold: "4 Altın Kural", text: "Rol + Görev + Bağlam + Format formülünü asla unutmayın." },
      { bold: "Doğrula!", text: "Yapay zekânın verdiği tarihî ve bilimsel bilgileri daima güvenilir kaynaklardan teyit edin." }
    ],
    homework: "Yapay zekaya sormak üzere 'Rol, Görev, Bağlam, Format' kuralına uygun 1 adet mükemmel prompt yazıp defterinize not edin.",
    nextWeekPreview: "1. Dönem 2. Sınav Tekrarı & Yapay Zekâ Araçlarının Eğitimde Güvenli Kullanımı!"
  },

  // 17. HAFTA
  {
    week: 17,
    date: "04 - 10 Ocak",
    hours: "2 Saat",
    unit: "SINAV HAFTASI & 5. Ünite: Yapay Zekâ",
    unitBadge: "Sınav & 5. Ünite",
    unitTheme: "unite-5",
    title: "1. Dönem 2. Sınav Tekrarı & YZ Araçları",
    subtitle: "Ağlar, Siber Güvenlik, Telif, Lisanslar ve Yapay Zekâ Sınav Hazırlığı",
    outcomeCode: "BTY.6.5.2",
    targetSkill: "Sınav Başarısı, Kritik Düşünme & Bilgi Sentezi",
    curiosityQuestion: "1. dönemin başından bu yana öğrendiğimiz tüm dijital becerileri tek bir büyük sınavda nasıl başarıya dönüştürürüz?",
    roadmap: [
      { title: "2. Sınav Kapsam Haritası", desc: "Ağ türleri, arama operatörleri, siber zorbalık, telif, lisanslar ve yapay zekâ." },
      { title: "En Çok Karıştırılan Sorular", desc: "CC simgeleri, açık kaynak vs freeware, LAN vs WAN farkları." },
      { title: "Yapay Zekânın Sınavı", desc: "Halüsinasyon (uydurma) nedir ve bilgi nasıl doğrulanır?" },
      { title: "Sınav Taktikleri", desc: "Sorulardaki anahtar kelimeleri yakalama ve zaman yönetimi." }
    ],
    section1: {
      title: "2. Sınavın 4 Büyük Konu Başlığı",
      subtitle: "Sınavda kesinlikle çıkacak temel kazanımların hızlı tekrarı.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Ağlar & Arama Operatörleri",
          icon: "🌐",
          borderClass: "card-primary-border",
          desc: "BTY.6.3.1 - BTY.6.3.3:",
          items: [
            { bold: "LAN", text: "Okul içi yerel ağ; WAN dünya çapı geniş ağ (İnternet)." },
            { bold: "Switch (Dağıtıcı)", text: "Laboratuvardaki bilgisayarları birbirine bağlar." },
            { bold: "\"...\" Tırnak", text: "Kelimeleri bölmeden arar; site: gov.tr resmî sitelerde arar." },
            { bold: "Netiquette", text: "Büyük harfle yazmak bağırmaktır, kaba sayılır." }
          ]
        },
        {
          title: "Siber Güvenlik, Telif & Lisanslar",
          icon: "🛡️",
          borderClass: "card-accent-border",
          desc: "BTY.6.4.1 - BTY.6.4.4:",
          items: [
            { bold: "Telif Hakkı", text: "Fikir eserlerinin izinsiz kopyalanmasını yasaklar." },
            { bold: "İntihal", text: "Kopyala-yapıştır yapıp kendi yazmış gibi sunmaktır." },
            { bold: "Açık Kaynak", text: "Kodları açık, ücretsiz ve geliştirilebilir yazılımdır (Pardus)." },
            { bold: "Oltalama (Phishing)", text: "Sahte e-posta/linklerle şifre çalma tuzağıdır." }
          ]
        }
      ]
    },
    section2: {
      title: "Yapay Zekâ ve Veri Soruları",
      subtitle: "Yapay zekâ konusundan gelecek soruların püf noktaları.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Veri ve Model Eğitimi",
          icon: "🤖",
          borderClass: "card-purple-border",
          desc: "BTY.6.5.1:",
          items: [
            { bold: "Veri = Yakıt", text: "Yapay zekâ kuralları önceden yazılan kodlarla değil, veriden öğrenir." },
            { bold: "Etiketleme (Labeling)", text: "Verinin ne olduğunu makineye öğretme işlemidir." },
            { bold: "Veride Önyargı (Bias)", text: "Eksik veya taraflı verinin adil olmayan sonuçlar üretmesidir." }
          ]
        },
        {
          title: "Prompt Mühendisliği & Doğrulama",
          icon: "✍️",
          borderClass: "card-success-border",
          desc: "BTY.6.5.2:",
          items: [
            { bold: "4 Formül", text: "Rol + Görev + Bağlam + Çıktı Formatı." },
            { bold: "Halüsinasyon", text: "Yapay zekânın gerçek olmayan yanlış bilgiyi uydurmasıdır." },
            { bold: "Doğrulama", text: "Bilgiler mutlaka güvenilir (.edu, .gov, ansiklopedi) kaynaklardan teyit edilmelidir." }
          ]
        }
      ]
    },
    workshop: {
      title: "Akıllı Tahta Canlı Sınav Simülasyonu",
      subtitle: "Sınıfça 5 dakikalık hızlı soru-cevap maratonu yapıyoruz.",
      steps: [
        { title: "Soru 1", desc: "Okuldaki bilgisayarları birbirine bağlayan ağ türü nedir? (Cevap: LAN)" },
        { title: "Soru 2", desc: "Kodları herkes tarafından incelenip geliştirilebilen yazılımlara ne ad verilir? (Cevap: Açık Kaynak)" },
        { title: "Soru 3", desc: "Yapay zekânın bilmediği konuda kendinden emin şekilde yanlış bilgi uydurmasına ne ad verilir? (Cevap: Halüsinasyon)" }
      ],
      criteria: [
        "Kavramları karıştırmadan doğru telaffuz etme",
        "Hızlı ve kendinden emin yanıt verme",
        "Eksik kalan konuları anında tespit edip not alma"
      ]
    },
    tips: {
      safetyTitle: "Sınavda Başarılı Olmanın 3 Kuralı",
      safetyRules: [
        { bold: "Sorunun Tamamını Oku", text: "Cevabı tahmin edip aceleyle işaretlemeyin, şıkların hepsini mutlaka okuyun." },
        { bold: "Çelişkili Şıkları Ele", text: "Birbirinin tam zıddı olan iki şıktan biri genellikle doğrudur." }
      ],
      myths: [
        { wrong: "Sınavda sadece ezberleyenler yüksek not alır.", correct: "Bilişim sınavında ezber değil, bir problemin mantığını çözebilme becerisi ölçülür." }
      ]
    },
    quiz: {
      question: "Bir yapay zekâ modelinin elma ile armudu ayırt edemeyip armutlara da elma demesinin en olası sebebi hangisidir?",
      options: [
        { text: "A) Monitörün çözünürlüğünün düşük olması", isCorrect: false },
        { text: "B) Eğitim verisinde yeterli ve çeşitli armut fotoğrafı olmaması", isCorrect: true },
        { text: "C) Klavyenin kablosuz olması", isCorrect: false },
        { text: "D) Bilgisayara antivirüs yüklenmesi", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Yapay zekâ eksik veya yetersiz veriyle eğitildiğinde (veri yanlılığı) nesneleri doğru tanıyamaz ve hata yapar."
    },
    summaryRules: [
      { bold: "Güven ve Sakinlik", text: "Konulara hakimsiniz, sınavda dikkatli okumak tam puan getirir." },
      { bold: "Kavramları Hatırla", text: "LAN, Telif, Açık Kaynak, Etiketleme ve Prompt anahtar kelimelerdir." },
      { bold: "Gelecek Hafta Atölye", text: "Sınavdan sonra kendi yapay zekâ modelimizi bizzat eğiteceğiz!" }
    ],
    homework: "2. sınav konularından en çok tereddüt ettiğiniz 2 konuyu defterinize yazıp özetleyin.",
    nextWeekPreview: "Teachable Machine ile Kendi Yapay Zekâ Modelimizi Eğitiyoruz!"
  },

  // 18. HAFTA
  {
    week: 18,
    date: "11 - 17 Ocak",
    hours: "2 Saat",
    unit: "5. Ünite: Yapay Zekâ",
    unitBadge: "5. Ünite",
    unitTheme: "unite-5",
    title: "Yapay Zekâ ile Model Geliştirme",
    subtitle: "Google Teachable Machine ile Görüntü ve Ses Sınıflandırma Modeli Eğitimi",
    outcomeCode: "BTY.6.5.2 - 6.5.3",
    targetSkill: "Makine Öğrenmesi & Model Geliştirme",
    curiosityQuestion: "Bilgisayara web kamerasından gösterdiğimiz 'taş, kâğıt, makas' el hareketlerini ayırt etmeyi 5 dakikada öğretebilir miyiz?",
    roadmap: [
      { title: "Makine Öğrenmesi (Machine Learning)", desc: "Bilgisayarların deneyim ve verilerle kendi kendini eğitme yöntemi." },
      { title: "Google Teachable Machine", desc: "Kod yazmadan tarayıcı üzerinden yapay zekâ modeli eğiten ücretsiz araç." },
      { title: "Model Geliştirmenin 3 Adımı", desc: "1. Veri Topla (Sınıflar) -> 2. Modeli Eğit (Training) -> 3. Test Et (Preview)." },
      { title: "Görüntü vs. Ses Modelleri", desc: "Kamerayla nesne tanıma ve mikrofonla ses komutu algılama." }
    ],
    section1: {
      title: "Teachable Machine: Kodsuz Yapay Zekâ Laboratuvarı",
      subtitle: "Web kameranızı kullanarak kendi makine öğrenmesi modelinizi oluşturun.",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Nasıl Çalışır? 3 Temel Adım",
          icon: "🔄",
          borderClass: "card-primary-border",
          desc: "Dünyanın en kolay ve eğlenceli yapay zekâ eğitim platformu:",
          items: [
            { bold: "1. Adım: Sınıfları Oluştur ve Veri Topla", text: "Örn: 'Sınıf 1: Maskeli', 'Sınıf 2: Maskesiz'. Kamerayı açıp her sınıf için 100-200 fotoğraf çekin." },
            { bold: "2. Adım: Modeli Eğit (Train Model)", text: "Tek bir butona tıklayın; bilgisayar fotoğraflardaki desenleri ve pikselleri analiz edip öğrenir." },
            { bold: "3. Adım: Canlı Test Et (Preview)", text: "Kameraya yeni bir hareket yapın; yapay zekâ %98 olasılıkla doğru sınıfı söylesin!" }
          ]
        },
        {
          title: "Hangi Modelleri Yapabiliriz?",
          icon: "🎯",
          borderClass: "card-purple-border",
          desc: "Teachable Machine 3 farklı model türünü destekler:",
          items: [
            { bold: "Görüntü Modeli (Image)", text: "El hareketleri, yüz ifadeleri, kalem/silgi gibi nesneleri tanıma." },
            { bold: "Ses Modeli (Audio)", text: "Islık sesi, alkış sesi veya 'Açıl susam açıl' gibi kelimeleri tanıma." },
            { bold: "Poz Modeli (Pose)", text: "Vücudun duruşunu, kolların ve bacakların pozisyonunu algılama." }
          ]
        }
      ]
    },
    section2: {
      title: "Başarılı Bir Model İçin Kritik İpuçları",
      subtitle: "Yapay zekânızın şaşırmaması için veriyi nasıl toplamalısınız?",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Veri Çeşitliliği Kuralı",
          icon: "📸",
          borderClass: "card-accent-border",
          desc: "Modelin gerçek hayatta da kusursuz çalışması için:",
          items: [
            { bold: "Farklı Açılar", text: "Kameraya nesneyi sadece önden değil, yanlardan ve yukarıdan da gösterin." },
            { bold: "Farklı Işık Şartları", text: "Hem aydınlık hem hafif loş ortamda örnek fotoğraflar çekin." },
            { bold: "Farklı Mesafeler", text: "Kameraya yaklaşıp uzaklaşarak bol bol kare kaydedin." }
          ]
        },
        {
          title: "Modelin Yanılma Sebepleri",
          icon: "⚠️",
          borderClass: "card-primary-border",
          desc: "Model test sırasında neden yanlış tahmin yapar?",
          items: [
            { bold: "Arka Plan Tuzağı", text: "Eğer elma fotoğraflarını hep beyaz duvarda, armut fotoğraflarını mavi duvarda çektiyseniz, yapay zekâ meyveyi değil arka plan rengini öğrenmiş olabilir!" },
            { bold: "Dengesiz Veri", text: "Bir sınıfa 300 fotoğraf, diğerine 20 fotoğraf yüklerseniz model hep çok olanı tahmin eder." }
          ]
        }
      ]
    },
    workshop: {
      title: "Atölye: 'Gülümseme Dedektörü' Modeli Eğitiyoruz",
      subtitle: "Sınıf web kamerasını kullanarak gülen ve üzgün yüzleri ayırt eden YZ yapalım.",
      steps: [
        { title: "Sınıfları Aç", desc: "Teachable Machine'de 'Gulen_Yuz' ve 'Ciddi_Yuz' adında iki sınıf açın." },
        { title: "Fotoğrafları Kaydet", desc: "Öğrenciler kameraya gülümseyerek 150 kare, ciddi durarak 150 kare kaydetsin." },
        { title: "Eğit ve Canlı Test Et", desc: "'Train' butonuna basın ve canlı önizlemede modelin yüz ifadelerinizi nasıl %100 bildiğini izleyin!" }
      ],
      criteria: [
        "Sınıfların doğru adlandırılması",
        "İki sınıfa da eşit sayıda ve çeşitli açılardan veri toplanması",
        "Modelin canlı kamerada doğru tahmin oranına ulaşması"
      ]
    },
    tips: {
      safetyTitle: "Model Eğitimi Püf Noktaları",
      safetyRules: [
        { bold: "Eğitilirken Sekmeyi Kapatmayın", text: "Model eğitilirken (Training) tarayıcı sekmesini kapatırsanız işlem iptal olur." },
        { bold: "Modeli Dışa Aktar (Export)", text: "Eğittiğiniz modeli daha sonra Scratch veya web projelerinizde kullanmak için 'Export Model' diyerek buluta kaydedebilirsiniz." }
      ],
      myths: [
        { wrong: "Yapay zekâ modeli eğitmek için binlerce satır kod yazmak zorunludur.", correct: "Teachable Machine gibi modern araçlar sayesinde görsel arayüzle sıfır kodla profesyonel modeller eğitilebilir." }
      ]
    },
    quiz: {
      question: "Teachable Machine'de elma ve portakalı ayırt eden bir model eğitiyorsunuz. Modelin portakalı elma zannetmemesi için hangisini yapmak EN DOĞRUDUR?",
      options: [
        { text: "A) Bilgisayarı kapatıp açmak", isCorrect: false },
        { text: "B) Her iki meyve için de farklı açılardan ve ışıklardan çok sayıda örnek fotoğraf eklemek", isCorrect: true },
        { text: "C) Sadece 1 adet elma fotoğrafı yüklemek", isCorrect: false },
        { text: "D) Mikrofonu son ses açmak", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Makine öğrenmesinde başarı, modelin nesneyi her türlü açıdan ve ortamdan tanımasını sağlayan zengin veri çeşitliliğine dayanır."
    },
    summaryRules: [
      { bold: "Veri -> Eğitim -> Test", text: "Makine öğrenmesinin evrensel 3 basamağını başarıyla uyguladık." },
      { bold: "Eşit ve Kaliteli Veri", text: "Sınıflar arasındaki veri dengesi modelin adil karar vermesini sağlar." },
      { bold: "Gelecek Hafta Scratch!", text: "2. dönem bu eğittiğimiz yapay zekâ modellerini Scratch kodlarımıza bağlayacağız!" }
    ],
    homework: "Evde bilgisayarınız varsa teachablemachine.withgoogle.com adresine girip 'Taş-Kâğıt-Makas' el hareketleri modelini eğitmeyi deneyin.",
    nextWeekPreview: "Yapay Zekâ Modeli Geliştirme & 1. Dönem Bilişim Başarı Değerlendirmesi!"
  },

  // 19. HAFTA
  {
    week: 19,
    date: "18 - 24 Ocak",
    hours: "2 Saat",
    unit: "5. Ünite: Yapay Zekâ",
    unitBadge: "5. Ünite",
    unitTheme: "unite-5",
    title: "Yapay Zekâ Modeli & Dönem Değerlendirmesi",
    subtitle: "Model İyileştirme, Hata Düzeltme ve 1. Dönem Bilişim Başarı Yolculuğu",
    outcomeCode: "BTY.6.5.3",
    targetSkill: "Model Optimizasyonu & 1. Dönem Portfolyosu",
    curiosityQuestion: "19 haftadır bilişimle büyüyen bir 6. sınıf öğrencisi olarak, artık sadece teknolojiyi kullanan biri misiniz, yoksa onu yöneten bir üretici mi?",
    roadmap: [
      { title: "Model Doğruluk Oranı (Accuracy)", desc: "Modelin kararlarındaki başarı yüzdesini ölçme ve test etme." },
      { title: "Hatalı Tahminleri İyileştirme", desc: "Model yanıldığında yeni fotoğraflar ekleyip yeniden eğitme (Retraining)." },
      { title: "1. Dönemin Bilişim Portfolyosu", desc: "Tablolama, ses kurgusu, video montajı, siber güvenlik ve YZ kazanımları." },
      { title: "2. Dönem Sürprizi: Kodlama!", desc: "Şubat ayında başlayacak olan Blok Tabanlı Scratch ve Robotik Dünyası." }
    ],
    section1: {
      title: "Model Optimizasyonu: Yapay Zekâyı Akıllandırmak",
      subtitle: "Model bir nesneyi yanlış bildiğinde onu nasıl ustalaştırırız?",
      layout: "layout-cards-2",
      cards: [
        {
          title: "Hata Ayıklama ve Yeniden Eğitim (Retraining)",
          icon: "🔧",
          borderClass: "card-primary-border",
          desc: "Yapay zekâ modeli de insanlar gibi hata yaptıkça öğrenir:",
          items: [
            { bold: "Karışıklık Matrisi", text: "Modelin en çok hangi iki nesneyi birbirine karıştırdığını tespit edin." },
            { bold: "Eksik Pozları Tamamlama", text: "Örn: Kalemi dik tutunca tanıyor ama yatay tutunca tanımıyorsa, hemen 50 adet yatay kalem fotoğrafı ekleyin." },
            { bold: "Yeniden Eğit", text: "Yeni verilerle eğitilen model artık o hatayı bir daha yapmaz!" }
          ]
        },
        {
          title: "Modeli Gerçek Hayatta Kullanma",
          icon: "🚀",
          borderClass: "card-success-border",
          desc: "Eğittiğimiz bu modeli nerede kullanabiliriz?",
          items: [
            { bold: "Akıllı Çöp Kutusu", text: "Kameraya gösterilen atığın plastik mi cam mı olduğunu anlayan robot." },
            { bold: "Engelsiz Yaşam", text: "İşitme engelliler için el işaretlerini yazıya çeviren çeviri sistemi." },
            { bold: "Güvenlik Sistemi", text: "Odaya yabancı biri girdiğinde alarm çalan yüz tanıma yazılımı." }
          ]
        }
      ]
    },
    section2: {
      title: "1. Dönem Bilişim Başarı Yolculuğumuz",
      subtitle: "Eylül'den Ocak'a kadar kazandığımız muhteşem süper güçler!",
      layout: "layout-cards-3",
      cards: [
        {
          title: "Bilişim & Veri Uzmanı",
          icon: "📊",
          borderClass: "card-primary-border",
          desc: "Excel ile formüller yazdınız, harçlık ve sıcaklık grafiklerini analiz ettiniz.",
          items: [
            { bold: "Kazanım", text: "=TOPLA ve =ORTALAMA ile büyük verileri saniyede çözme." }
          ]
        },
        {
          title: "Dijital Medya Yapımcısı",
          icon: "🎬",
          borderClass: "card-accent-border",
          desc: "Audacity ile podcast kaydettiniz, CapCut ile video ve animasyon montajladınız.",
          items: [
            { bold: "Kazanım", text: "Katmanlar, ses miksajı ve profesyonel içerik üretimi." }
          ]
        },
        {
          title: "Bilinçli Siber Vatandaş",
          icon: "🛡️",
          borderClass: "card-purple-border",
          desc: "Telif haklarına saygılı, kırılmaz şifreler üreten, siber zorbalığa geçit vermeyen birer siber kahraman oldunuz!",
          items: [
            { bold: "Kazanım", text: "Etik kullanım ve yapay zekâ model eğitimi temelleri." }
          ]
        }
      ]
    },
    workshop: {
      title: "1. Dönem Sonu Bilişim Şöleni ve Sergi",
      subtitle: "Dönem boyunca ürettiğimiz en iyi ürünleri tahtada sergiliyoruz.",
      steps: [
        { title: "En İyi Ürününü Seç", desc: "Hazırladığın podcast MP3'ü, hazırladığın Excel tablosu veya video klibini belirle." },
        { title: "Akıllı Tahtada Sun", desc: "1 dakikalık kısa bir sunumla ürününü arkadaşlarınla ve öğretmeninle paylaş." },
        { title: "Gelişimini Kutla", desc: "19 haftada katettiğin dijital ilerleme için kendini ve arkadaşlarını tebrik et!" }
      ],
      criteria: [
        "Dijital portfolyosunu gururla sunabilme",
        "Teknolojik kavramları doğru ve yerinde kullanma",
        "Arkadaşlarının çalışmalarına yapıcı ve nazik geri bildirimler verme"
      ]
    },
    tips: {
      safetyTitle: "Yarıyıl Tatiline Girerken",
      safetyRules: [
        { bold: "Tatilde Dinlenin ve Üretin", text: "Karne sevincinizi yaşarken teknolojiyi sadece tüketici olarak değil, merak ettiğiniz şeyleri keşfetmek için kullanın." },
        { bold: "2. Dönem Çok Eğlenceli Olacak", text: "Şubat ayında kendi bilgisayar oyunlarımızı Scratch ile kodlamaya başlayacağız!" }
      ],
      myths: [
        { wrong: "Yapay zekâ sadece dev şirketlerin yapabileceği bir şeydir.", correct: "Bugün sınıfta gördük ki 6. sınıf öğrencileri bile kendi yapay zekâ modellerini eğitip hayata geçirebilir!" }
      ]
    },
    quiz: {
      question: "1. Dönem boyunca öğrendiğimiz konulardan hangisi 'Fikir ve Sanat Eserleri Kanunu' ile güvence altına alınan eser sahibinin haklarını ifade eder?",
      options: [
        { text: "A) Ağ Dağıtıcısı", isCorrect: false },
        { text: "B) Telif Hakkı (Copyright)", isCorrect: true },
        { text: "C) Formül Çubuğu", isCorrect: false },
        { text: "D) Çözünürlük", isCorrect: false }
      ],
      explanation: "🎉 <strong>Tebrikler, Doğru Cevap: B!</strong> Telif Hakkı (Copyright), sanatçı ve üreticilerin emeklerini koruyan en temel yasal haktır."
    },
    summaryRules: [
      { bold: "Muhteşem Bir Dönem!", text: "19 hafta boyunca dijital dünyada dev adımlar attınız." },
      { bold: "Teknolojiyi Yöneten Sizsiniz", text: "Artık bilgisayarların nasıl düşündüğünü ve çalıştığını biliyorsunuz." },
      { bold: "Sömestrde Görüşmek Üzere", text: "İyi tatiller, 2. dönem oyun kodlama maceralarında buluşalım!" }
    ],
    homework: "Yarıyıl tatili boyunca oynamak istediğiniz hayalinizdeki bilgisayar oyununun kurallarını ve karakterlerini bir kâğıda çizin.",
    nextWeekPreview: "Yarıyıl Tatili Kodlama & Algoritma Keşif Bülteni!"
  }
];
