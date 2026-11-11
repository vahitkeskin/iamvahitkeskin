
// --------------------------------------------------------------------------
// Dinamik Ünite / Konu Seçici
// --------------------------------------------------------------------------
function updateTopicsDropdown(grade) {
  const selectTopic = document.getElementById("select-topic");
  if (!selectTopic) return;
  const currentVal = selectTopic.value;
  selectTopic.innerHTML = "";

  // 1. Genel Seçenek
  const optAll = document.createElement("option");
  optAll.value = "Tüm Dersler (Karma Sınav)";
  optAll.textContent = "Tüm Dersler (Genel / Karma Sınav)";
  selectTopic.appendChild(optAll);

  // 2. 1'den 12'ye Tüm MEB Dersleri
  const grpAll = document.createElement("optgroup");
  grpAll.label = "📋 1 - 12. Sınıf Tüm MEB Dersleri";
  const allLessons = [
    "Bilişim Teknolojileri ve Yazılım",
    "Bilgisayar Bilimi",
    "Türkçe",
    "Türk Dili ve Edebiyatı",
    "Matematik",
    "Fen Bilimleri",
    "Sosyal Bilgiler",
    "Fizik",
    "Kimya",
    "Biyoloji",
    "Tarih",
    "T.C. İnkılap Tarihi ve Atatürkçülük",
    "Coğrafya",
    "Felsefe",
    "Hayat Bilgisi",
    "Din Kültürü ve Ahlak Bilgisi",
    "İngilizce",
    "Görsel Sanatlar (Resim)",
    "Müzik",
    "Beden Eğitimi ve Spor",
    "Teknoloji ve Tasarım",
    "Trafik Güvenliği",
    "İnsan Hakları, Yurttaşlık ve Demokrasi",
    "Seçmeli Türk Sosyal Hayatında Aile",
    "Yapay Zeka ve Yazılım Uygulamaları"
  ];

  allLessons.forEach(l => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    grpAll.appendChild(opt);
  });
  selectTopic.appendChild(grpAll);

  // 3. Seçili Sınıfın Müfredat Konuları & Kazanımları
  const topics = (typeof EMBEDDED_GRADE_TOPICS !== "undefined" && EMBEDDED_GRADE_TOPICS[grade])
    ? EMBEDDED_GRADE_TOPICS[grade]
    : [];
  if (topics && topics.length > 0) {
    const grpGrade = document.createElement("optgroup");
    grpGrade.label = `📌 ${grade}. Sınıf Müfredat Konuları & Kazanımları`;
    topics.forEach(t => {
      if (t !== "Tüm Konular" && !t.startsWith("Tüm Dersler")) {
        const opt = document.createElement("option");
        opt.value = t;
        opt.textContent = t;
        grpGrade.appendChild(opt);
      }
    });
    selectTopic.appendChild(grpGrade);
  }

  // Restore selection if exists
  if (currentVal && Array.from(selectTopic.options).some(o => o.value === currentVal)) {
    selectTopic.value = currentVal;
  }
}

// --------------------------------------------------------------------------
// Tam Ekran %100 Düzgün Önizleme Modalı
// --------------------------------------------------------------------------
function openFullscreenPreview() {
  const modal = document.getElementById("fullscreen-preview-modal");
  const container = document.getElementById("modal-paper-container");
  const scaler = document.getElementById("paper-scaler");
  const badge = document.getElementById("preview-modal-mode-badge");
  const toggleBtn = document.getElementById("btn-modal-toggle-mode");
  if (!modal || !container || !scaler) return;

  container.innerHTML = scaler.innerHTML;

  const isAns = (AppState.viewMode === "answers");
  if (badge) {
    if (AppState.viewMode === "both") {
      badge.textContent = "Soru + Cevap Kağıdı";
    } else {
      badge.textContent = isAns ? "Cevap Anahtarı" : "Soru Kağıdı";
    }
    badge.className = isAns ? "badge badge-fixed" : "badge";
  }
  if (toggleBtn) {
    if (AppState.viewMode === "both") {
      toggleBtn.style.display = "none";
    } else {
      toggleBtn.style.display = "inline-flex";
      toggleBtn.textContent = isAns ? "Soru Kağıdına Geç" : "Cevap Anahtarına Geç";
    }
  }

  modal.classList.add("active");
}

function closeFullscreenPreview() {
  const modal = document.getElementById("fullscreen-preview-modal");
  if (modal) modal.classList.remove("active");
}

function toggleModeInModal() {
  AppState.viewMode = (AppState.viewMode === "questions") ? "answers" : "questions";
  
  const btnModeQuestions = document.getElementById("btn-mode-questions");
  const btnModeAnswers = document.getElementById("btn-mode-answers");
  const colorControls = document.getElementById("color-controls-section");
  
  if (AppState.viewMode === "answers") {
    btnModeAnswers?.classList.add("active");
    btnModeQuestions?.classList.remove("active");
    if (colorControls) colorControls.style.display = "flex";
  } else {
    btnModeQuestions?.classList.add("active");
    btnModeAnswers?.classList.remove("active");
    if (colorControls) colorControls.style.display = "none";
  }

  renderExamSheet();
  openFullscreenPreview();
}


const EMBEDDED_INITIAL_EXAM = {"header": {"year": "2026-2027 EĞİTİM ÖĞRETİM YILI", "school": "Özel Viranşehir Uğur Anadolu Lisesi", "lesson": "SEÇMELİ TÜRK SOSYAL HAYATINDA AİLE", "term": "1.DÖNEM 1. YAZILI", "student_name": "", "student_class": "", "student_no": "", "student_score": ""}, "questions": [{"id": 1, "type": "classic", "question": "Aile nedir? Kısaca tanımlayınız.", "points": 20, "answer": "Aile; evlilik, kan bağı ya da evlat edinme yoluyla birbirine bağlanan, aynı çatı altında yaşayan ve ortak değerleri paylaşan en küçük toplumsal kurumdur."}, {"id": 2, "type": "classic", "question": "Ailenin temel fonksiyonları nelerdir?", "points": 20, "answer": "Ailenin temel fonksiyonları: Biyolojik (neslin devamı), ekonomik (ihtiyaçların karşılanması), koruyucu, eğitici/sosyalleştirici, psikolojik (sevgi ve güven sağlama) ve dinî/ahlaki değerleri aktarma fonksiyonlarıdır."}, {"id": 3, "type": "classic", "question": "Aile üyelerinin rolleri nedir?", "points": 20, "answer": "Aile üyelerinin rolleri; anne, baba ve çocukların aile içi huzur ve düzeni sağlamak adına üstlendikleri hak, ödev ve sorumluluklardır. Anne-baba rehberlik ve geçim, çocuklar ise sorumluluk alma ve saygı gösterme rollerine sahiptir."}, {"id": 4, "type": "classic", "question": "Ailede iletişim neden önemlidir?", "points": 20, "answer": "Sağlıklı iletişim; aile bireylerinin birbirini anlamasını, empati kurmasını, sorunların çatışmasız çözülmesini sağlar. Bireylerin aidiyet duygusunu güçlendirir ve güven ortamı oluşturur."}, {"id": 5, "type": "classic", "question": "Aile içindeki sorumlulukların eşit dağıtılması niçin önemlidir?", "points": 20, "answer": "Sorumlulukların adil paylaşımı; bireyler arasında tükenmişliği ve adaletsizlik hissini önler, iş birliğini pekiştirir, çocuklara sorumluluk bilinci kazandırır ve aile içi dayanışmayı güçlendirir."}]};
const EMBEDDED_QUESTION_BANK = {"1": {"grade_name": "1. Sınıf", "kolay": [{"topic": "Türkçe: Harfler, Heceler ve Okuma-Yazma", "question": "Alfabemizin ilk ve son harfi hangileridir? Yazınız.", "points": 20, "answer": "İlk harfi 'A', son harfi 'Z' harfidir."}, {"topic": "Matematik: Doğal Sayılar ve Ritmik Sayma", "question": "1'den 10'a kadar birer ritmik sayarak sayıları sırayla yazınız.", "points": 20, "answer": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10."}, {"topic": "Hayat Bilgisi: Okulumuzda ve Evimizde Hayat", "question": "Okulda sınıfımızda uymamız gereken iki temel kural yazınız.", "points": 20, "answer": "1. Derse zamanında girmek. 2. Parmak kaldırarak söz istemek."}, {"topic": "Matematik: Doğal Sayılar ve Ritmik Sayma", "question": "5 elmanız vardı, 3 elma daha aldınız. Toplam kaç elmanız olur?", "points": 20, "answer": "5 + 3 = 8 elma olur."}, {"topic": "Bilişim ve Kodlama: Algoritmik Sıralama ve Yönergeler", "question": "Bir robotun ileri 2 adım gitmesi için gereken basit yönergeyi yazınız.", "points": 20, "answer": "Robot 'İleri git', 'İleri git' şeklinde 2 adım yönergesi alır."}], "orta": [{"topic": "Türkçe: Harfler, Heceler ve Okuma-Yazma", "question": "Görsel okuma nedir? Bir resme bakarak neler anlayabiliriz?", "points": 20, "answer": "Resim ve işaretleri anlamlandırmaya görsel okuma denir. Resimdeki olayları, duyguları ve çevreyi anlarız."}, {"topic": "Matematik: Doğal Sayılar ve Ritmik Sayma", "question": "Bir basamaklı en büyük doğal sayı ile en küçük doğal sayıyı yazınız.", "points": 20, "answer": "En büyük bir basamaklı sayı 9, en küçük doğal sayı ise 0'dır."}, {"topic": "Hayat Bilgisi: Okulumuzda ve Evimizde Hayat", "question": "Kişisel temizliğimiz için her gün yapmamız gereken iki alışkanlık yazınız.", "points": 20, "answer": "1. Sabah ve akşam dişleri fırçalamak. 2. Yemeklerden önce elleri sabunla yıkamak."}, {"topic": "Türkçe: Harfler, Heceler ve Okuma-Yazma", "question": "'Kedi süt içti.' cümlesinde kaç tane kelime (sözcük) vardır?", "points": 20, "answer": "Bu cümlede toplam 3 kelime vardır: Kedi, süt, içti."}, {"topic": "Bilişim ve Kodlama: Algoritmik Sıralama ve Yönergeler", "question": "Ayakkabı giyme adımlarını doğru sırayla listeleyiniz.", "points": 20, "answer": "1. Çorabı giy. 2. Ayakkabıyı ayağına geçir. 3. Bağcıklarını bağla."}], "zor": [{"topic": "Matematik: Doğal Sayılar ve Ritmik Sayma", "question": "Ali'nin 12 cevizi vardı. 4 tanesini kardeşine verdi. Ali'nin kaç cevizi kaldı?", "points": 20, "answer": "12 - 4 = 8 cevizi kalmıştır."}, {"topic": "Türkçe: Harfler, Heceler ve Okuma-Yazma", "question": "'Okul' kelimesini hecelerine ayırınız ve kaç heceli olduğunu yazınız.", "points": 20, "answer": "'O - kul' şeklinde 2 heceye ayrılır."}, {"topic": "Hayat Bilgisi: Okulumuzda ve Evimizde Hayat", "question": "Trafikte karşıdan karşıya geçerken güvenli geçiş yerlerine iki örnek veriniz.", "points": 20, "answer": "1. Yaya geçitleri. 2. Üst ve alt geçitler."}, {"topic": "Bilişim ve Kodlama: Algoritmik Sıralama ve Yönergeler", "question": "Bir labirentteki tavşanın havuca ulaşması için gereken 3 adımlı yön algoritmasını yazınız.", "points": 20, "answer": "1. 2 adım İleri Git. 2. Sağa Dön. 3. 1 adım İleri Git."}, {"topic": "Matematik: Doğal Sayılar ve Ritmik Sayma", "question": "Bir düzine kaç tanedir ve bir deste kaç tanedir? Arasındaki farkı bulunuz.", "points": 20, "answer": "Bir düzine 12, bir deste 10 tanedir. Fark: 12 - 10 = 2 tanedir."}]}, "2": {"grade_name": "2. Sınıf", "kolay": [{"topic": "Türkçe: Okuduğunu Anlama ve Noktalama", "question": "Nokta (.) işareti nerelerde kullanılır? İki örnek veriniz.", "points": 20, "answer": "1. Tamamlanmış cümlenin sonunda. 2. Sayılardan sonra sıra bildirmek için (1., 2.)."}, {"topic": "Matematik: Dört İşlem, Geometri ve Paralarımız", "question": "25 + 14 işleminin sonucunu bulunuz.", "points": 20, "answer": "25 + 14 = 39."}, {"topic": "Hayat Bilgisi: Sağlıklı Yaşam ve Doğada Hayat", "question": "Sağlıklı büyümek için tüketmemiz gereken besin gruplarından üç tanesini yazınız.", "points": 20, "answer": "Süt ve süt ürünleri, et ve yumurta, taze sebze ve meyveler."}, {"topic": "İngilizce: Words, Numbers, Colors and Friends", "question": "İngilizce 'Kırmızı' ve 'Mavi' renklerinin karşılıklarını yazınız.", "points": 20, "answer": "Kırmızı: Red, Mavi: Blue."}, {"topic": "Bilişim ve Kodlama: Mantıksal Yönler ve Döngüler", "question": "Kodlamada 'Döngü' (Tekrar) ne anlama gelir? Kısaca açıklayınız.", "points": 20, "answer": "Aynı işlemi tekrar tekrar yazmak yerine belirli sayıda otomatik tekrarlatılmasıdır."}], "orta": [{"topic": "Türkçe: Okuduğunu Anlama ve Noktalama", "question": "'Siyah' ve 'Büyük' sözcüklerinin zıt (karşıt) anlamlılarını yazınız.", "points": 20, "answer": "Siyah zıttı: Beyaz. Büyük zıttı: Küçük."}, {"topic": "Matematik: Dört İşlem, Geometri ve Paralarımız", "question": "40 sayısından başlayarak geriye doğru beşer ritmik sayınız.", "points": 20, "answer": "40, 35, 30, 25, 20, 15, 10, 5, 0."}, {"topic": "Hayat Bilgisi: Sağlıklı Yaşam ve Doğada Hayat", "question": "Milli bayramlarımızdan iki tanesini yazınız.", "points": 20, "answer": "1. 29 Ekim Cumhuriyet Bayramı, 2. 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı."}, {"topic": "İngilizce: Words, Numbers, Colors and Friends", "question": "'One, two, three, four, five' sayılarını Türkçe karşılıklarıyla eşleştiriniz.", "points": 20, "answer": "One: 1, Two: 2, Three: 3, Four: 4, Five: 5."}, {"topic": "Bilişim ve Kodlama: Mantıksal Yönler ve Döngüler", "question": "Bilgisayarda ekranı görmemizi ve yazı yazmamızı sağlayan donanımların adlarını yazınız.", "points": 20, "answer": "Ekranı görmemizi Monitör (Ekran), yazı yazmamızı Klavye sağlar."}], "zor": [{"topic": "Matematik: Dört İşlem, Geometri ve Paralarımız", "question": "Tanesi 4 TL olan kalemlerden 5 tane alan Zeynep kırtasiyeye kaç TL öder?", "points": 20, "answer": "5 x 4 = 20 TL öder."}, {"topic": "Türkçe: Okuduğunu Anlama ve Noktalama", "question": "'güneş açınca çiçekler açtı' cümlesindeki yazım ve noktalama hatasını düzeltiniz.", "points": 20, "answer": "Cümle büyük harfle 'Güneş' diye başlamalı ve sonuna nokta (.) konmalıdır: 'Güneş açınca çiçekler açtı.'"}, {"topic": "Hayat Bilgisi: Sağlıklı Yaşam ve Doğada Hayat", "question": "Geri dönüşüm nedir? Geri dönüştürülebilen iki atık türü yazınız.", "points": 20, "answer": "Kullanılmış atıkların yeniden işlenerek üretime kazandırılmasıdır. Örnek: Kağıt ve Cam/Plastik."}, {"topic": "İngilizce: Words, Numbers, Colors and Friends", "question": "'How are you?' sorusuna verilebilecek iki kibar cevap yazınız.", "points": 20, "answer": "'I am fine, thank you.' ve 'I am great.'"}, {"topic": "Bilişim ve Kodlama: Mantıksal Yönler ve Döngüler", "question": "Bir robotun kare çizmesi için gereken adımları döngü mantığıyla yazınız.", "points": 20, "answer": "4 kez tekrarla: [10 adım İleri Git, 90 derece Sağa Dön]."}]}, "3": {"grade_name": "3. Sınıf", "kolay": [{"topic": "Türkçe: 5N1K, Deyimler ve Metin Bilgisi", "question": "5N1K kuralındaki 5N harfi hangi soruları temsil eder? Yazınız.", "points": 20, "answer": "Ne, Nerede, Ne zaman, Nasıl, Neden."}, {"topic": "Matematik: Üç Basamaklı Sayılar, Çarpma, Bölme ve Kesirler", "question": "3 basamaklı en küçük çift doğal sayı kaçtır?", "points": 20, "answer": "100'dür."}, {"topic": "Fen Bilimleri: Gezegenimiz, Beş Duyumuz ve Kuvvet", "question": "Dünyamızın dıştan içe doğru katmanlarını yazınız.", "points": 20, "answer": "Hava katmanı (Atmosfer), Su katmanı, Yer kabuğu, Manto ve Çekirdek."}, {"topic": "Hayat Bilgisi: Okul Heyecanımız ve Ülkemizde Hayat", "question": "Tasarruf yapmak ne demektir? Evde yapabileceğimiz bir örnek veriniz.", "points": 20, "answer": "Kaynakları israf etmeden ihtiyacımız kadar kullanmaktır. Örnek: Diş fırçalarken musluğu kapatmak."}, {"topic": "Bilişim ve Kodlama: Problem Çözme ve Basit Blok Kodlama", "question": "İnternette tanımadığımız kişilerle neden kişisel bilgilerimizi (şifre, adres vb.) paylaşmamalıyız?", "points": 20, "answer": "Güvenliğimiz tehlikeye girebilir ve kötü niyetli kişiler hesaplarımızı veya bizi tehdit edebilir."}], "orta": [{"topic": "Türkçe: 5N1K, Deyimler ve Metin Bilgisi", "question": "'Gözden düşmek' deyiminin anlamını açıklayınız.", "points": 20, "answer": "Bir kişinin başkalarının yanındaki değerini ve sevgisini yitirmesi anlamına gelir."}, {"topic": "Matematik: Üç Basamaklı Sayılar, Çarpma, Bölme ve Kesirler", "question": "248 sayısının basamak değerlerini (yüzler, onlar, birler) ayrı ayrı yazınız.", "points": 20, "answer": "Yüzler basamağı: 200, Onlar basamağı: 40, Birler basamağı: 8."}, {"topic": "Fen Bilimleri: Gezegenimiz, Beş Duyumuz ve Kuvvet", "question": "Kuvvetin cisimler üzerindeki 3 temel etkisini yazınız.", "points": 20, "answer": "1. Hızlandırıcı etki, 2. Yavaşlatıcı/Durdurucu etki, 3. Şekil değiştirici etki."}, {"topic": "İngilizce: Greetings, Feelings and Family", "question": "'Mother, Father, Sister, Brother' kelimelerinin Türkçe anlamlarını yazınız.", "points": 20, "answer": "Mother: Anne, Father: Baba, Sister: Kız kardeş, Brother: Erkek kardeş."}, {"topic": "Bilişim ve Kodlama: Problem Çözme ve Basit Blok Kodlama", "question": "Algoritmada 'Şart' (Eğer / İse) kavramını günlük hayattan yağmur örneğiyle açıklayınız.", "points": 20, "answer": "Eğer hava yağmurlu ise şemsiye al, değilse şemsiye alma."}], "zor": [{"topic": "Matematik: Üç Basamaklı Sayılar, Çarpma, Bölme ve Kesirler", "question": "Bir bölme işleminde bölen 6, bölüm 14 ve kalan 3 ise bölünen sayı kaçtır?", "points": 20, "answer": "Bölünen = (Bölen x Bölüm) + Kalan -> (6 x 14) + 3 = 84 + 3 = 87'dir."}, {"topic": "Türkçe: 5N1K, Deyimler ve Metin Bilgisi", "question": "'Çay kenarında oturup sıcak bir çay içtik.' cümlesindeki eş sesli sözcüğü ve iki farklı anlamını yazınız.", "points": 20, "answer": "'Çay' sözcüğüdür. 1. Akarsu/dere anlamında. 2. İçilen sıcak içecek anlamında."}, {"topic": "Fen Bilimleri: Gezegenimiz, Beş Duyumuz ve Kuvvet", "question": "Maddenin halleri kaça ayrılır? Her birine günlük hayattan birer örnek veriniz.", "points": 20, "answer": "Üçe ayrılır: 1. Katı (Buz, taş), 2. Sıvı (Su, süt), 3. Gaz (Su buharı, hava)."}, {"topic": "İngilizce: Greetings, Feelings and Family", "question": "'What is your favourite toy and why?' sorusuna İngilizce bir cevap cümlesi yazınız.", "points": 20, "answer": "'My favourite toy is a blue car because I love racing.'"}, {"topic": "Bilişim ve Kodlama: Problem Çözme ve Basit Blok Kodlama", "question": "Scratch programında yeşil bayrağa tıklandığında karakterin ekranda sürekli yürümesi için hangi bloklar kullanılır?", "points": 20, "answer": "'Yeşil bayrağa tıklandığında' -> 'Sürekli tekrarla' -> '10 adım git' ve 'Kenara geldiyse sek'."}]}, "4": {"grade_name": "4. Sınıf", "kolay": [{"topic": "Türkçe: Metin Türleri, Atasözleri ve Cümle Bilgisi", "question": "Öznel yargı ile nesnel yargı arasındaki farkı birer örnekle açıklayınız.", "points": 20, "answer": "Nesnel: Kanıtlanabilir gerçekler ('Türkiye\\'nin başkenti Ankara\\'dır'). Öznel: Kişisel duygu ve görüşler ('En güzel renk mavidir')."}, {"topic": "Matematik: Dört Basamaklı Sayılar, Kesirler ve Açılar", "question": "4500 sayısının 100'e ve 10'a zihinden bölümünü yazınız.", "points": 20, "answer": "4500 / 100 = 45, 4500 / 10 = 450."}, {"topic": "Fen Bilimleri: Yer Kabuğu, Besinlerimiz ve Maddenin Halleri", "question": "Fosil nedir? Kısaca açıklayınız.", "points": 20, "answer": "Milyonlarca yıl önce yaşamış canlıların kayaçlar içinde taşlaşmış kalıntı ve izleridir."}, {"topic": "Sosyal Bilgiler: Birey ve Toplum, Kültür ve Miras", "question": "Mustafa Kemal Atatürk'ün Samsun'a çıkarak Milli Mücadeleyi başlattığı tarihi yazınız.", "points": 20, "answer": "19 Mayıs 1919."}, {"topic": "Bilişim ve Kodlama: Algoritmalar ve Scratch ile Animasyon", "question": "Bilgisayarda güçlü bir şifre oluştururken nelere dikkat edilmelidir? İki kural yazınız.", "points": 20, "answer": "1. En az 8 karakter olmalı, harf, rakam ve sembol içermeli. 2. Doğum tarihi gibi kolay tahmin edilen bilgiler kullanılmamalıdır."}], "orta": [{"topic": "Türkçe: Metin Türleri, Atasözleri ve Cümle Bilgisi", "question": "'Damlaya damlaya göl olur' atasözünün anlamını açıklayınız.", "points": 20, "answer": "Küçük ve önemsiz görünen birikimler zamanla büyük bir değere dönüşür."}, {"topic": "Matematik: Dört Basamaklı Sayılar, Kesirler ve Açılar", "question": "Bir dikdörtgenin uzun kenarı 12 cm, kısa kenarı 8 cm'dir. Bu dikdörtgenin çevresi ve alanı kaçtır?", "points": 20, "answer": "Çevre = 2 x (12 + 8) = 40 cm. Alan = 12 x 8 = 96 cm²."}, {"topic": "Fen Bilimleri: Yer Kabuğu, Besinlerimiz ve Maddenin Halleri", "question": "Karbonhidratların ve proteinlerin vücuttaki temel görevlerini yazınız.", "points": 20, "answer": "Karbonhidratlar: Vücuda öncelikli enerji sağlar. Proteinler: Yapıcı ve onarıcı olarak büyüme ve doku onarımını sağlar."}, {"topic": "Din Kültürü ve Ahlak Bilgisi: Dini İfadeler ve Güzel Ahlak", "question": "İslam'ın beş şartını sırasıyla yazınız.", "points": 20, "answer": "1. Kelime-i Şehadet getirmek, 2. Namaz kılmak, 3. Oruç tutmak, 4. Zekat vermek, 5. Hacca gitmek."}, {"topic": "Bilişim ve Kodlama: Algoritmalar ve Scratch ile Animasyon", "question": "Scratch'ta 'Değişken' (Variable) nedir? Skor tablosundaki rolünü yazınız.", "points": 20, "answer": "Değişken, oyun süresince değişebilen sayı veya verileri saklayan hafıza kutusudur. Örn: Her elma toplandığında skor 1 artırılır."}], "zor": [{"topic": "Matematik: Dört Basamaklı Sayılar, Kesirler ve Açılar", "question": "Bir çıkarma işleminde eksilen, çıkan ve farkın toplamı 240'tır. Eksilen sayı kaçtır?", "points": 20, "answer": "Eksilen = Çıkan + Fark olduğundan, toplam = 2 x Eksilen = 240. Buradan Eksilen = 120'dir."}, {"topic": "Türkçe: Metin Türleri, Atasözleri ve Cümle Bilgisi", "question": "Cümlede abartma (mübalağa) ve benzetme sanatlarına birer örnek cümle yazınız.", "points": 20, "answer": "Abartma: 'Ağlamaktan gözlerimin yaşı sel oldu.' Benzetme: 'Aslan gibi kuvvetli bir çocuktu.'"}, {"topic": "Fen Bilimleri: Yer Kabuğu, Besinlerimiz ve Maddenin Halleri", "question": "Maddenin ısı alarak katıdan sıvıya ve sıvıdan gaza geçmesine ne ad verilir?", "points": 20, "answer": "Katıdan sıvıya geçişe 'Erime', sıvıdan gaza geçişe 'Buharlaşma' denir."}, {"topic": "Sosyal Bilgiler: Birey ve Toplum, Kültür ve Miras", "question": "Bilinçli bir tüketicinin alışveriş yaparken dikkat etmesi gereken üç önemli özelliği yazınız.", "points": 20, "answer": "1. TSE damgasına bakmak. 2. Son kullanma tarihini kontrol etmek. 3. Fiş veya fatura almak."}, {"topic": "Bilişim ve Kodlama: Algoritmalar ve Scratch ile Animasyon", "question": "İnternet etiği (Netiquette) nedir? İki kural yazınız.", "points": 20, "answer": "İnternet kullanırken uyulması gereken ahlaki kurallardır. 1. Siber zorbalık yapmamak. 2. Başkalarının emeğini izinsiz kopyalamamak."}]}, "5": {"grade_name": "5. Sınıf - Bilişim Teknolojileri ve Yazılım", "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM", "kolay": [{"topic": "Bilişim Teknolojileri ve Donanım", "question": "Donanım ve yazılım kavramlarını kısaca açıklayınız ve birer örnek veriniz.", "points": 20, "answer": "Donanım: Bilgisayarın gözle görülebilen, elle tutulabilen fiziksel parçalarıdır (Örn: Klavye, Monitör, Fare). Yazılım: Bilgisayar donanımını çalıştırmak ve belirli işleri yapmak için yazılmış programlardır (Örn: İşletim sistemi, Paint, Kelime işlemci)."}, {"topic": "Bilişim Teknolojileri ve Donanım", "question": "Bilgisayar kullanırken sağlığımızı korumak için dikkat etmemiz gereken iki ergonomi kuralını yazınız.", "points": 20, "answer": "1. Ekranın üst kenarı göz hizasında olmalı ve ekrana 50-70 cm mesafeden bakılmalıdır. 2. Sandalyede dik oturulmalı, sırt ve bel desteklenmeli, ayaklar yere tam basmalıdır."}, {"topic": "Bilişim Teknolojileri ve Donanım", "question": "Giriş ve çıkış birimlerine ikişer örnek vererek ne işe yaradıklarını yazınız.", "points": 20, "answer": "Giriş Birimleri: Bilgisayara dışarıdan veri ve komut aktaran birimlerdir (Klavye, Fare). Çıkış Birimleri: Bilgisayarda işlenen bilgiyi kullanıcıya sunan birimlerdir (Monitör, Yazıcı/Hoparlör)."}, {"topic": "Bilişim Etiği ve Güvenlik", "question": "Güçlü bir şifre oluştururken nelere dikkat edilmelidir? Üç kural belirtiniz.", "points": 20, "answer": "1. En az 8 karakter uzunluğunda olmalıdır. 2. Büyük harf, küçük harf, rakam ve özel karakter (?, !, *, #) içermelidir. 3. Doğum tarihi, isim gibi tahmin edilmesi kolay kişisel bilgiler içermemelidir."}, {"topic": "Dosya Yönetimi ve Bulut Depolama", "question": "Dosya uzantısı nedir? '.docx' ve '.mp3' uzantılarının hangi dosya türlerine ait olduğunu yazınız.", "points": 20, "answer": "Dosya uzantısı, bir dosyanın hangi program tarafından oluşturulduğunu ve türünü belirten noktadan sonraki harflerdir. '.docx' kelime işlemci (metin/belge) dosyası, '.mp3' ise ses/müzik dosyasıdır."}], "orta": [{"topic": "Bilişim Etiği ve Güvenlik", "question": "Dijital ayak izi nedir? Günlük hayattan bir örnek vererek açıklayınız.", "points": 20, "answer": "Dijital ayak izi, internette gezinirken, sosyal medyada paylaşım yaparken veya arama yaparken geride bıraktığımız tüm dijital veriler ve izlerdir. Örnek: Sosyal medyada bir gönderiye yaptığımız yorum veya bir e-ticaret sitesinde arattığımız ürünler dijital ayak izimizdir."}, {"topic": "Bilişim Etiği ve Güvenlik", "question": "Bilişim etiği nedir? İnternet ortamında uyulması gereken etik kurallardan iki tanesini yazınız.", "points": 20, "answer": "Bilişim etiği, bilişim teknolojilerini ve interneti kullanırken doğru ile yanlışı ayırt etmeyi sağlayan ahlaki kurallardır. 1. Başkalarının kişisel bilgilerini ve şifrelerini izinsiz ele geçirmemek. 2. İnternette hakaret, alay veya tehdit içerikli kaba ifadeler kullanmamak."}, {"topic": "Algoritma ve Blok Tabanlı Kodlama (Scratch)", "question": "Problem çözme sürecinde 'algoritma' kavramının önemini açıklayınız.", "points": 20, "answer": "Algoritma; bir problemin adım adım, açık ve net bir sırayla çözülme planıdır. Önemi: Karmaşık problemleri küçük adımlara bölerek hatasız, hızlı ve düzenli bir şekilde çözmemizi sağlar."}, {"topic": "Dosya Yönetimi ve Bulut Depolama", "question": "Bulut depolama nedir? Sağladığı iki temel avantajı belirtiniz.", "points": 20, "answer": "Bulut depolama; dosyaların internet üzerindeki güvenli sunucularda saklanmasıdır. Avantajları: 1. Dosyalara internet olan her cihazdan erişilebilir. 2. Cihaz bozulsa bile dosyalar kaybolmaz (yedeklilik sağlar)."}, {"topic": "Bilişim Etiği ve Güvenlik", "question": "Zararlı yazılımlardan (virüs, truva atı vb.) korunmak için alınabilecek üç önlemi yazınız.", "points": 20, "answer": "1. Bilgisayara güvenilir bir antivirüs programı yükleyip güncel tutmak. 2. Tanınmayan kişilerden gelen şüpheli e-posta eklerini ve bağlantıları açmamak. 3. Lisanssız, kırılmış (korsan) yazılımları indirmemek."}], "zor": [{"topic": "Bilişim Etiği ve Güvenlik", "question": "Çevrim içi ortamlarda kişisel verilerin korunması ve gizliliğinin sağlanması neden hayati öneme sahiptir?", "points": 20, "answer": "Kişisel veriler kötü niyetli kişilerin eline geçtiğinde kimlik hırsızlığı, dolandırıcılık, hesapların çalınması ve siber zorbalık yaşanabilir. Bireyin hem maddi hem de manevi güvenliğini sağlamak için kişisel verilerin korunması hayati önemdedir."}, {"topic": "Algoritma ve Blok Tabanlı Kodlama (Scratch)", "question": "Blok tabanlı kodlamada (Scratch vb.) 'döngü' ve 'koşul' bloklarının işlevini karşılaştırarak açıklayınız.", "points": 20, "answer": "Döngü blokları (örneğin '10 defa tekrarla' veya 'sürekli tekrarla'), belirli komutların tekrarlanmasını sağlayarak kod tekrarını önler. Koşul blokları ise ('eğer ... ise') yalnızca belirlenen şart sağlandığında içine yazılan kodların çalışmasını sağlar; karar mekanizması oluşturur."}, {"topic": "Bilişim Etiği ve Güvenlik", "question": "Siber zorbalık nedir? Siber zorbalığa maruz kalan bir öğrencinin yapması gereken adımları sıralayınız.", "points": 20, "answer": "Siber zorbalık; dijital platformlarda bir kişiye yönelik kasıtlı, tekrarlayıcı ve zarar verici davranışlardır (alay etme, tehdit, iftira). Yapılması gerekenler: 1. Zorbalık yapan kişiye cevap vermemek/tartışmamak. 2. Mesajların ekran görüntüsünü alıp kanıt oluşturmak. 3. Kişiyi engellemek ve durumu aileye, öğretmene ya da okul rehberliğine bildirmek."}, {"topic": "Dosya Yönetimi ve Bulut Depolama", "question": "Açık kaynak kodlu yazılım ile ticari (lisanslı) yazılım arasındaki temel farkları açıklayınız.", "points": 20, "answer": "Açık kaynak kodlu yazılımların kodları herkes tarafından görülebilir, geliştirilebilir ve genellikle ücretsizdir (Örn: Linux, LibreOffice). Ticari (lisanslı) yazılımların ise kodları gizlidir, üretici firmanın mülkiyetindedir ve kullanım için lisans ücreti ödenmesi gerekir (Örn: Windows, MS Office)."}, {"topic": "Algoritma ve Blok Tabanlı Kodlama (Scratch)", "question": "Bir günlük problemi (örneğin sabah uyanıp okula gitme süreci) 5 adımlı bir algoritma olarak yazınız.", "points": 20, "answer": "1. Adım: Çalar saat çalınca uyan ve yataktan kalk. 2. Adım: Elini yüzünü yıka ve dişlerini fırçala. 3. Adım: Okul kıyafetlerini giy. 4. Adım: Sabah kahvaltını yap. 5. Adım: Okul çantanı kontrol et ve evden çık."}]}, "6": {"grade_name": "6. Sınıf - Bilişim Teknolojileri ve Yazılım", "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM", "kolay": [{"topic": "İşletim Sistemleri ve Ağlar", "question": "İşletim sistemi nedir? Bilgisayarlar ve mobil cihazlar için yaygın kullanılan ikişer işletim sistemi adı yazınız.", "points": 20, "answer": "İşletim sistemi; donanım ile kullanıcı ve diğer yazılımlar arasında köprü kurarak bilgisayarın tüm kaynaklarını yöneten ana yazılımdır. Bilgisayar için: Windows, Linux (veya macOS). Mobil cihazlar için: Android, iOS."}, {"topic": "İşletim Sistemleri ve Ağlar", "question": "Bilgisayar ağı nedir? Ağ bağlantısının sağladığı en büyük iki faydayı yazınız.", "points": 20, "answer": "Bilgisayar ağı; iki veya daha fazla bilgisayarın bilgi ve kaynak paylaşımı için birbirine bağlanmasıdır. Faydaları: 1. Yazıcı, tarayıcı gibi donanımları ortak kullanarak tasarruf sağlamak. 2. Dosya ve bilgi paylaşımını saniyeler içinde gerçekleştirmek."}, {"topic": "İşletim Sistemleri ve Ağlar", "question": "İnternet adreslerinde yer alan 'gov.tr' ve 'edu.tr' uzantılarının ne anlama geldiğini açıklayınız.", "points": 20, "answer": "'gov.tr': Türkiye Cumhuriyeti devlet/hükümet kurumlarına ait resmi web sitelerini ifade eder (Government). 'edu.tr': Türkiye'deki üniversiteler ve yükseköğretim kurumlarına ait web sitelerini ifade eder (Education)."}, {"topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi", "question": "Arama motorlarında daha etkili ve doğru sonuç almak için kullanılan iki arama tekniğini yazınız.", "points": 20, "answer": "1. Çift tırnak (\"...\") kullanmak: Kelime grubunu aynen aratır (Örn: \"bilişim teknolojileri\"). 2. Eksi (-) işareti kullanmak: İstenmeyen kelimeleri arama sonucundan çıkarır (Örn: elma -meyve)."}, {"topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi", "question": "Telif hakkı nedir? Başkasına ait bir dijital içeriği izinsiz kullanmanın sakıncalarını yazınız.", "points": 20, "answer": "Telif hakkı; bir fikir veya sanat eserini meydana getiren kişinin o eser üzerindeki yasal haklarıdır. İzinsiz kullanmak emek hırsızlığıdır, yasal cezalar doğurur ve içerik üreticilerinin üretkenliğini zedeler."}], "orta": [{"topic": "İşletim Sistemleri ve Ağlar", "question": "LAN (Yerel Alan Ağı) ile WAN (Geniş Alan Ağı) arasındaki temel farkları açıklayınız.", "points": 20, "answer": "LAN (Local Area Network); ev, okul, ofis gibi sınırlı ve dar bir coğrafi alandaki cihazları birbirine bağlar. WAN (Wide Area Network) ise şehirler, ülkeler veya kıtalar arası çok geniş coğrafi alanları bağlar. En büyük WAN örneği İnternettir."}, {"topic": "Algoritmalar ve Akış Şemaları", "question": "Akış şemasında kullanılan 'Elips', 'Dikdörtgen' ve 'Eşkenar Dörtgen' sembollerinin görevlerini yazınız.", "points": 20, "answer": "Elips: Akış şemasını başlatmak (BAŞLA) ve bitirmek (BİTİR) için kullanılır. Dikdörtgen: Hesaplama, değer atama ve işlem adımlarını gösterir. Eşkenar Dörtgen: Karar verme, koşul sınama ve karşılaştırma (Evet/Hayır) işlemlerinde kullanılır."}, {"topic": "Blok Tabanlı Programlama (Değişkenler ve Şartlar)", "question": "Blok tabanlı programlamada 'değişken' (variable) kavramı ne işe yarar? Bir örnekle açıklayınız.", "points": 20, "answer": "Değişken; program çalışırken değişebilen değerleri bilgisayarın hafızasında tutan isimlendirilmiş depolama alanıdır. Örnek: Bir oyunda oyuncunun topladığı altın sayısı veya puanı tutan 'Skor' bir değişkendir."}, {"topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi", "question": "Phishing (Oltalama) saldırısı nedir? Kullanıcılar bu tuzaklara düşmemek için nelere dikkat etmelidir?", "points": 20, "answer": "Oltalama; sahte web siteleri veya e-postalar aracılığıyla kullanıcıların şifre, kredi kartı veya kimlik bilgilerini kandırarak çalma yöntemidir. Korunmak için: Gelen bağlantının alan adı dikkatlice kontrol edilmeli, şüpheli linklere tıklanmamalıdır."}, {"topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi", "question": "Yaratıcı Birliktelik (Creative Commons) lisansı ne anlama gelir? Eser sahibine sağladığı esneklik nedir?", "points": 20, "answer": "Creative Commons; eser sahiplerinin eserlerinin hangi koşullarda kullanılabileceğini (kaynak göstererek, ticari olmayan, türetilemez vb.) belirten esnek ve ücretsiz bir telif lisanslama sistemidir."}], "zor": [{"topic": "Algoritmalar ve Akış Şemaları", "question": "Girilen iki sayıyı toplayıp sonucu ekrana yazdıran programın adım adım algoritmasını yazınız.", "points": 20, "answer": "1. Adım: Başla. 2. Adım: Birinci sayıyı al (A). 3. Adım: İkinci sayıyı al (B). 4. Adım: İki sayıyı topla (Toplam = A + B). 5. Adım: Toplam sonucunu ekrana yazdır. 6. Adım: Bitir."}, {"topic": "Blok Tabanlı Programlama (Değişkenler ve Şartlar)", "question": "Scratch programında bir karakterin sahnede sürekli ileri gitmesi ve kenara geldiğinde sekmesi için gereken kod bloklarını açıklayınız.", "points": 20, "answer": "'Yeşil bayrağa tıklandığında' bloğu altına bir 'sürekli tekrarla' döngüsü eklenir. Döngü içine '10 adım git' ve 'kenara geldiysen sek' blokları yerleştirilir. Karakterin ters dönmemesi için 'dönüş stilini sağa-sola ayarla' komutu kullanılır."}, {"topic": "Blok Tabanlı Programlama (Değişkenler ve Şartlar)", "question": "Sayısal veri (integer), metinsel veri (string) ve mantıksal veri (boolean) tiplerini tanımlayıp birer örnek veriniz.", "points": 20, "answer": "Sayısal (Integer): Matematiksel işlemlerde kullanılan tam sayılardır (Örn: Yaş = 12). Metinsel (String): Tırnak içinde yazılan karakter dizileridir (Örn: İsim = 'Ahmet'). Mantıksal (Boolean): Yalnızca Doğru (True) veya Yanlış (False) değeri alan veridir (Örn: MezunMu = True)."}, {"topic": "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi", "question": "İki faktörlü kimlik doğrulamanın (2FA) çalışma mantığını ve tek şifreye kıyasla güvenlik üstünlüğünü açıklayınız.", "points": 20, "answer": "2FA; sisteme giriş yaparken bildiğiniz bir şifrenin yanı sıra sahip olduğunuz bir cihaza (SMS veya onay uygulaması) gelen tek kullanımlık geçici kodu talep eder. Şifreniz çalınsa bile saldırgan telefonunuza erişemediği için hesabınızı ele geçiremez."}, {"topic": "İşletim Sistemleri ve Ağlar", "question": "Elektronik atıkların (e-atık) çevre ve insan sağlığına zararları nelerdir? Geri dönüşüm sürecinde ne yapılmalıdır?", "points": 20, "answer": "E-atıklar kurşun, cıva, kadmiyum gibi ağır metaller içerir; normal çöplere değil, belediyelerin ve teknoloji mağazalarının e-atık toplama kutularına teslim edilerek geri dönüştürülmelidir."}]}, "7": {"grade_name": "7. Sınıf - Bilişim Teknolojileri ve Yazılım", "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM", "kolay": [{"topic": "Bilişimsel Düşünme Becerileri", "question": "Bilişimsel düşünme (computational thinking) nedir? Günlük hayattaki önemini belirtiniz.", "points": 20, "answer": "Bilişimsel düşünme; problemleri bir bilgisayarın veya insanın etkin bir şekilde çözebileceği biçimde formüle etme ve adım adım çözüm üretme sürecidir. Karşılaşılan sorunları sistematik, mantıklı ve yaratıcı çözmeyi sağlar."}, {"topic": "Elektronik Tablolar (Excel Formülleri)", "question": "Elektronik tablolama programlarında (Excel) 'Hücre' ve 'Formül' kavramlarını açıklayınız.", "points": 20, "answer": "Hücre: Satır ve sütunların kesiştiği, verilerin yazıldığı kutucuklardır (Örn: A1, B3). Formül: Eşittir (=) işareti ile başlayan ve hücrelerdeki verilerle otomatik matematiksel/mantıksal işlem yapan ifadelerdir."}, {"topic": "Elektronik Tablolar (Excel Formülleri)", "question": "Excel'de '=TOPLA(A1:A5)' ve '=ORTALAMA(B1:B10)' formüllerinin yaptığı işlemleri açıklayınız.", "points": 20, "answer": "'=TOPLA(A1:A5)': A1 hücresinden A5 hücresine kadar olan tüm sayıları toplar. '=ORTALAMA(B1:B10)': B1 ile B10 arasındaki hücrelerde yer alan sayıların aritmetik ortalamasını hesaplar."}, {"topic": "Web Tasarımı (HTML ve CSS Temelleri)", "question": "Web sitesi hazırlarken HTML ve CSS dillerinin üstlendiği temel görevler nelerdir?", "points": 20, "answer": "HTML (HyperText Markup Language): Web sayfasının iskeletini ve içeriğini (başlıklar, paragraflar, resimler) oluşturur. CSS (Cascading Style Sheets): Web sayfasının görsel tasarımını, renklerini, yazı tiplerini ve yerleşimini düzenler."}, {"topic": "Bilişimsel Düşünme Becerileri", "question": "Sosyal medya platformlarında paylaşılan içeriklerin dijital itibar üzerindeki etkisini açıklayınız.", "points": 20, "answer": "Paylaşılan her fotoğraf, yorum ve beğeni dijital ayak izi olarak kalıcılaşır. İleride eğitim, iş başvuruları veya sosyal ilişkilerde bu içerikler kişinin dijital itibarını olumlu ya da olumsuz doğrudan etkiler."}], "orta": [{"topic": "Bilişimsel Düşünme Becerileri", "question": "Bilişimsel düşünmenin 4 temel bileşenini (Ayrıştırma, Örüntü Tanıma, Soyutlama, Algoritma Tasarımı) kısaca açıklayınız.", "points": 20, "answer": "1. Ayrıştırma: Problemi daha küçük parçalara bölme. 2. Örüntü Tanıma: Parçalar arasındaki benzerlikleri bulma. 3. Soyutlama: Önemsiz detayları çıkarıp ana fikre odaklanma. 4. Algoritma Tasarımı: Çözüm için adım adım kural dizisi hazırlama."}, {"topic": "Metin Tabanlı Kodlamaya Giriş (Python)", "question": "Metin tabanlı programlama (Python vb.) ile blok tabanlı programlama (Scratch vb.) arasındaki avantaj ve dezavantajları karşılaştırınız.", "points": 20, "answer": "Blok tabanlı: Başlangıç için kolaydır, yazım hatası riski yoktur ancak karmaşık ve büyük projelerde yetersiz kalır. Metin tabanlı: Kod yazarken yazım kurallarına dikkat edilmelidir; sınırsız esneklik, yüksek performans ve profesyonel yazılım geliştirme imkanı sunar."}, {"topic": "Web Tasarımı (HTML ve CSS Temelleri)", "question": "HTML dilinde <h1>, <p>, <a> ve <img> etiketlerinin görevlerini yazınız.", "points": 20, "answer": "<h1>: Sayfadaki en önemli ana başlığı tanımlar. <p>: Metin paragraflarını oluşturur. <a>: Başka bir sayfaya veya web sitesine köprü (link) verir. <img>: Sayfaya resim eklemek için kullanılır."}, {"topic": "Bilişimsel Düşünme Becerileri", "question": "Nesnelerin İnterneti (IoT) nedir? Günlük hayattan bir akıllı sistem örneği ile açıklayınız.", "points": 20, "answer": "IoT; fiziksel nesnelerin sensörler ve yazılımlar aracılığıyla internete bağlanarak birbirleriyle veri alışverişi yapmasıdır. Örnek: Evdeki akıllı termostatın havanın soğuduğunu algılayıp ev sahibinin telefonuna bildirim göndermesi ve kombiyi uzaktan çalıştırması."}, {"topic": "Web Tasarımı (HTML ve CSS Temelleri)", "question": "Web sitelerinde kullanılan SSL/TLS sertifikasının işlevini ve adres çubuğundaki göstergesini açıklayınız.", "points": 20, "answer": "SSL/TLS; kullanıcı tarayıcısı ile sunucu arasındaki veri trafiğini şifreleyerek üçüncü kişilerin verileri (şifre, kredi kartı) çalmasını engeller. Göstergesi: Adres çubuğundaki kilit simgesi ve 'https://' protokolüdür."}], "zor": [{"topic": "Metin Tabanlı Kodlamaya Giriş (Python)", "question": "Python dilinde kullanıcıdan yaşını alan ve eğer yaşı 18'den küçükse 'Giriş Başarısız', büyük veya eşitse 'Giriş Başarılı' yazan kod satırlarını yazınız.", "points": 20, "answer": "yas = int(input('Yaşınızı giriniz: '))\nif yas >= 18:\n    print('Giriş Başarılı')\nelse:\n    print('Giriş Başarısız')"}, {"topic": "Bilişimsel Düşünme Becerileri", "question": "Büyük Veri (Big Data) kavramını ve 3V (Volume, Velocity, Variety) prensibini kısaca açıklayınız.", "points": 20, "answer": "Büyük Veri; geleneksel veritabanlarının işleyemeyeceği büyüklükte, hızda ve çeşitlilikteki veridir. 1. Volume (Hacim): Verinin devasa boyutu. 2. Velocity (Hız): Verinin anlık üretilme ve işlenme hızı. 3. Variety (Çeşitlilik): Farklı veri türlerinin bir arada bulunması."}, {"topic": "Elektronik Tablolar (Excel Formülleri)", "question": "Elektronik tablolarda 'EĞER' (IF) fonksiyonunun genel yapısını ve mantıksal koşul sınamasını örnekle açıklayınız.", "points": 20, "answer": "Yapı: =EĞER(Mantıksal_Sınama; Doğruysa_Değer; Yanlışsa_Değer). Örnek: '=EĞER(A1>=50; \"Geçti\"; \"Kaldı\")'. A1 hücresindeki not 50 ve üzeriyse 'Geçti', altındaysa 'Kaldı' yazar."}, {"topic": "Bilişimsel Düşünme Becerileri", "question": "Sosyal mühendislik (social engineering) saldırı yöntemleri nelerdir? İnsan faktörünün güvenlikteki önemini açıklayınız.", "points": 20, "answer": "Sosyal mühendislik; teknik açıklardan ziyade insan zaaflarını (güven, korku, merak) kullanarak gizli bilgileri ele geçirme yöntemidir. Güvenlik sistemleri ne kadar sağlam olursa olsun, en zayıf halka her zaman insandır."}, {"topic": "Bilişimsel Düşünme Becerileri", "question": "Açık kaynak kodlu işletim sistemlerinin (örneğin Pardus/Linux) kamu kurumları ve okullarda kullanılmasının stratejik önemini açıklayınız.", "points": 20, "answer": "1. Dışa bağımlılığı azaltarak milli yazılım güvenliği ve siber egemenlik sağlar. 2. Yüksek lisans maliyetlerinden tasarruf edilerek kamu bütçesi korunur. 3. Güvenlik açıkları bağımsız uzmanlarca hızlıca kapatılır."}]}, "8": {"grade_name": "8. Sınıf - Bilişim Teknolojileri ve Yazılım", "lesson_name": "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM", "kolay": [{"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Algoritmada 'döngü' (loop) kavramı neden kullanılır? Programlamada sağladığı temel faydayı yazınız.", "points": 20, "answer": "Döngüler, aynı kod satırlarını defalarca yazmak yerine belirli bir şart sağlandığı sürece otomatik tekrar edilmesini sağlar. Kod satırını kısaltır, hafızayı korur ve programın daha düzenli çalışmasını sağlar."}, {"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Python programlama dilinde 'print()' ve 'input()' fonksiyonlarının görevlerini açıklayınız.", "points": 20, "answer": "'print()': Ekrana metin, sayı veya değişken değerlerini çıktı olarak yazdırmak için kullanılır. 'input()': Kullanıcıdan klavye aracılığıyla bilgi/veri girişi almak için kullanılır."}, {"topic": "Yapay Zeka ve Makine Öğrenmesi", "question": "Yapay zeka (AI) nedir? Günlük hayatta sıkça karşılaştığımız iki yapay zeka uygulamasını yazınız.", "points": 20, "answer": "Yapay zeka; insan benzeri düşünme, öğrenme, problem çözme ve karar verme yeteneklerinin makineler tarafından taklit edilmesidir. Örnekler: Sesli asistanlar (Siri, Google Asistan), navigasyon uygulamalarındaki rota optimizasyonu."}, {"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Bir yazılım geliştirirken 'hata ayıklama' (debugging) ne anlama gelir?", "points": 20, "answer": "Hata ayıklama; bir programın kodlarındaki mantıksal veya söz dizimsel (syntax) hataları tespit etme, analiz etme ve düzelterek programın beklendiği gibi çalışmasını sağlama sürecidir."}, {"topic": "Veri Güvenliği, Kriptoloji ve Blokzincir", "question": "Veri güvenliğinde '3-2-1 Yedekleme Kuralı' nedir? Açıklayınız.", "points": 20, "answer": "Verilerinizin en az 3 kopyası olmalı, bu kopyalar 2 farklı depolama ortamında (örn. harici disk ve bilgisayar) saklanmalı ve bu kopyalardan en az 1 tanesi farklı bir fiziksel mekanda/bulutta tutulmalıdır."}], "orta": [{"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Python'da 'for' döngüsü ile 'while' döngüsü arasındaki temel kullanım farkını açıklayınız.", "points": 20, "answer": "'for' döngüsü; tekrar sayısı önceden belli olduğunda veya bir liste üzerinde gezilirken kullanılır. 'while' döngüsü ise belirli bir mantıksal koşul True olduğu sürece çalışır; şart bozulana kadar döner."}, {"topic": "Yapay Zeka ve Makine Öğrenmesi", "question": "Makine öğrenmesi (Machine Learning) ile geleneksel programlama arasındaki farkı girdi ve çıktı üzerinden açıklayınız.", "points": 20, "answer": "Geleneksel programlamada yazılımcı kuralları ve veriyi sisteme verir, bilgisayar çıktıyı üretir. Makine öğrenmesinde ise bilgisayara veri ve beklenen çıktılar verilir; bilgisayar veriler arasındaki örüntüleri inceleyerek kendi modelini kendisi öğrenir."}, {"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Python dilinde listeler (lists) ne amaçla kullanılır? 'notlar = [70, 85, 90]' listesinin ilk elemanına nasıl erişilir?", "points": 20, "answer": "Listeler; birden çok veriyi tek bir değişken altında sıralı bir şekilde saklamak için kullanılır. Python'da indeksler 0'dan başladığı için ilk elemana 'notlar[0]' ifadesiyle erişilir ve değeri 70'tir."}, {"topic": "Veri Güvenliği, Kriptoloji ve Blokzincir", "question": "Kriptoloji ve şifreleme (encryption) internet üzerinden gönderilen verileri nasıl korur?", "points": 20, "answer": "Şifreleme; düz metin halindeki okunabilir veriyi matematiksel algoritmalarla anlamsız karakter dizilerine dönüştürür. Veri iletim esnasında üçüncü bir kişi tarafından ele geçirilse bile gizli anahtarı olmadan okunamaz."}, {"topic": "Geleceğin Bilişim Teknolojileri (IoT, Büyük Veri)", "question": "Otonom araçların çevreyi algılamak ve kaza yapmadan ilerlemek için kullandığı bilişim teknolojilerini yazınız.", "points": 20, "answer": "1. Sensörler ve Kameralar (LiDAR, Radar). 2. Bilgisayarlı Görü (Computer Vision) algoritmaları. 3. Gerçek zamanlı karar veren Yapay Zeka işlemcileri. 4. Yüksek hassasiyetli GPS ve haritalama sistemleri."}], "zor": [{"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Python dilinde 1'den 20'ye kadar olan çift sayıları ekrana yazdıran for döngüsü kodunu yazınız.", "points": 20, "answer": "for i in range(2, 21, 2):\n    print(i)\n# Veya:\nfor i in range(1, 21):\n    if i % 2 == 0:\n        print(i)"}, {"topic": "Veri Güvenliği, Kriptoloji ve Blokzincir", "question": "Blokzincir (Blockchain) teknolojisinin temel çalışma prensibini ve 'değiştirilemezlik' özelliğini açıklayınız.", "points": 20, "answer": "Blokzincir; verilerin bloklar halinde şifrelenip birbirine kriptografik özetlerle (hash) zincirleme bağlandığı dağıtık bir defter sistemidir. Bir bloktaki veri değiştirilmek istendiğinde sonraki tüm blokların şifresi bozulur ve çoğunluk bunu reddeder; geriye dönük veri değişikliği yapılamaz."}, {"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Bir algoritmanın zaman karmaşıklığı (hızı) ve bellek (RAM) kullanımı neden önemlidir?", "points": 20, "answer": "Milyonlarca verinin işlendiği büyük sistemlerde (örneğin arama motorları), verimsiz algoritmalar sistemin kilitlenmesine ve aşırı maliyete yol açar. İyi bir algoritma hem en kısa sürede hem de en az bellek harcayarak çalışmalıdır."}, {"topic": "İleri Algoritmalar ve Python ile Problem Çözme", "question": "Derleyici (Compiler) ile Yorumlayıcı (Interpreter) arasındaki farkı açıklayarak Python'ın çalışma biçimini belirtiniz.", "points": 20, "answer": "Derleyici kaynak kodun tamamını bir kerede makine diline çevirir ve çalıştırılabilir dosya üretir. Yorumlayıcı ise kodu satır satır okur ve çalıştırır. Python temelde yorumlanan bir dildir; platform bağımsız çalışır."}, {"topic": "Yapay Zeka ve Makine Öğrenmesi", "question": "Yapay zeka sistemlerindeki 'önyargı' (algorithmic bias) nedir? Nasıl ortaya çıkar?", "points": 20, "answer": "Yapay zekanın eğitildiği veri setleri geçmişteki insani önyargıları ve ayrımcılıkları içeriyorsa, model bu önyargıları öğrenir ve kararlarında haksız ayrımcılık uygular. Veri setinin dengeli ve tarafsız hazırlanması bu yüzden zorunludur."}]}, "9": {"grade_name": "9. Sınıf - Bilgisayar Bilimi", "lesson_name": "BİLGİSAYAR BİLİMİ", "kolay": [{"topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)", "question": "İkili (Binary) sayı sistemi nedir? Bilgisayarlar verileri neden ikili sistemde işler?", "points": 20, "answer": "İkili sistem sadece 0 ve 1 rakamlarından oluşan 2 tabanlı sayı sistemidir. Bilgisayarlardaki elektronik transistörlerin açık (elektrik var = 1) veya kapalı (elektrik yok = 0) olmak üzere iki fiziksel durumu bulunması nedeniyle ikili sistem kullanılır."}, {"topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)", "question": "1 Bayt (Byte) kaç Bitten (Bit) oluşur? KB, MB, GB birimlerini küçükten büyüğe sıralayınız.", "points": 20, "answer": "1 Bayt = 8 Bit'tir. Depolama birimleri küçükten büyüğe: Byte (B) < Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB)."}, {"topic": "Python ile Programlama (Veri Tipleri, Operatörler)", "question": "Python programlama dilinde yer alan int, float, str ve bool veri tiplerine birer örnek veriniz.", "points": 20, "answer": "int: Tam sayılar (Örn: sayi = 42). float: Ondalıklı sayılar (Örn: pi = 3.14). str: Metin dizileri (Örn: mesaj = 'Merhaba'). bool: Mantıksal değerler (Örn: durum = True)."}, {"topic": "Mantıksal Kapılar ve Boole Cebri", "question": "Mantıksal operatörlerden AND (VE), OR (VEYA) ve NOT (DEĞİL) işlevlerini açıklayınız.", "points": 20, "answer": "AND: Bağlanan tüm koşulların True olması durumunda True üretir. OR: Koşullardan en az birinin True olması durumunda True üretir. NOT: Koşulun sonucunu tersine çevirir (True ise False, False ise True)."}, {"topic": "Python Karar Yapıları (if-elif-else) ve Döngüler", "question": "Programlamada 'Sözde Kod' (Pseudocode) nedir? Programcıya sağladığı yararı yazınız.", "points": 20, "answer": "Sözde kod; herhangi bir programlama dilinin katı söz dizimi kurallarına bağlı kalmadan, günlük konuşma diline yakın ifadelerle algoritmanın mantığını tasvir etmektir. Kodlamaya başlamadan önce mantık hatalarını görmeyi sağlar."}], "orta": [{"topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)", "question": "Onluk tabandaki 25 sayısının ikili (binary) tabandaki karşılığını bölme yöntemini göstererek bulunuz.", "points": 20, "answer": "25 / 2 = 12 (kalan 1)\n12 / 2 = 6 (kalan 0)\n6 / 2 = 3 (kalan 0)\n3 / 2 = 1 (kalan 1)\n1 / 2 = 0 (kalan 1)\nKalanlar sondan başa doğru yazılır: (25)_10 = (11001)_2"}, {"topic": "Python Karar Yapıları (if-elif-else) ve Döngüler", "question": "Python'da 'if - elif - else' karar yapısının çalışma hiyerarşisini açıklayınız.", "points": 20, "answer": "Program önce 'if' şartını kontrol eder. Doğruysa kodunu çalıştırır ve bloğu terk eder. Yanlışsa sırasıyla 'elif' şartlarını inceler. Doğru olan ilk 'elif' bloğunu çalıştırır. Hiçbir şart sağlanmazsa en sondaki 'else' bloğu varsayılan olarak yürütülür."}, {"topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)", "question": "Bilgisayar mimarisinde CPU (İşlemci), RAM (Bellek) ve Sabit Disk (Depolama) arasındaki veri akışını özetleyiniz.", "points": 20, "answer": "Programlar ve dosyalar kalıcı olarak Sabit Diskte saklanır. Bir program çalıştırıldığında diske göre çok daha hızlı olan RAM belleğe yüklenir. CPU (İşlemci) ise gerekli komut ve verileri doğrudan RAM'den alıp işler ve sonuçları üretir."}, {"topic": "Python Karar Yapıları (if-elif-else) ve Döngüler", "question": "Python'da 'range(1, 10, 2)' ifadesinin üreteceği sayı listesini ve parametrelerin görevlerini yazınız.", "points": 20, "answer": "Parametreler: range(başlangıç, bitiş, artış_miktarı). Bitiş değeri dahil edilmez. Üretilen sayılar: 1, 3, 5, 7, 9."}, {"topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)", "question": "ASCII ve Unicode (UTF-8) karakter kodlama tabloları arasındaki farkı açıklayınız.", "points": 20, "answer": "ASCII tablosu 7 veya 8 bit kullanarak sadece İngiliz alfabesini ve temel işaretleri tanımlar. Unicode ise dünyadaki tüm dillerin (Türkçe karakterler dahil) ve sembollerin standart kodlanmasını sağlar."}], "zor": [{"topic": "Python Karar Yapıları (if-elif-else) ve Döngüler", "question": "Kullanıcıdan alınan bir sayının asal olup olmadığını bulan Python kodunu yazınız.", "points": 20, "answer": "sayi = int(input('Bir sayı giriniz: '))\nasal_mi = True\nif sayi < 2:\n    asal_mi = False\nelse:\n    for i in range(2, int(sayi**0.5) + 1):\n        if sayi % i == 0:\n            asal_mi = False\n            break\nif asal_mi:\n    print(f'{sayi} asaldır.')\nelse:\n    print(f'{sayi} asal değildir.')"}, {"topic": "Mantıksal Kapılar ve Boole Cebri", "question": "AND, OR ve XOR mantık kapılarının 2 girişli (A ve B) doğruluk tablosunu (Truth Table) oluşturunuz.", "points": 20, "answer": "A  B | AND | OR | XOR\n0  0 |  0  | 0  |  0\n0  1 |  0  | 1  |  1\n1  0 |  0  | 1  |  1\n1  1 |  1  | 1  |  0\n(XOR kapısı sadece girişler birbirinden farklı olduğunda 1 çıktısı verir)."}, {"topic": "Python ile Programlama (Veri Tipleri, Operatörler)", "question": "Yerel (Local) ve Küresel (Global) değişken kavramlarını Python kodu üzerinden örnekle açıklayınız.", "points": 20, "answer": "Global değişkenler fonksiyonların dışında tanımlanır ve tüm programdan erişilebilir. Local değişkenler ise fonksiyon içinde tanımlanır ve yalnızca o fonksiyona özeldir, dışarıdan erişilemez."}, {"topic": "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)", "question": "Von Neumann bilgisayar mimarisinin 4 ana bileşenini ve aralarındaki 'veri yolu' (bus) ilişkisini açıklayınız.", "points": 20, "answer": "1. Merkezi İşlem Birimi (İçinde CU ve ALU bulunur). 2. Ana Bellek (RAM). 3. Giriş/Çıkış Arayüzleri. 4. Veri Yolları. Veri ve komutlar aynı bellek alanında depolanır ve veri yolları üzerinden CPU'ya taşınır."}, {"topic": "Python Karar Yapıları (if-elif-else) ve Döngüler", "question": "Doğrusal Arama (Linear Search) ile İkili Arama (Binary Search) algoritmalarını hız ve ön koşul açısından karşılaştırınız.", "points": 20, "answer": "Doğrusal Arama listenin başından sonuna elemanları tek tek inceler; liste sıralı olmak zorunda değildir (O(N)). İkili Arama listenin ortasındaki elemana bakıp listeyi sürekli ikiye böler; ön koşulu listenin kesinlikle SIRALI olmasıdır (O(log N))."}]}, "10": {"grade_name": "10. Sınıf - Bilgisayar Bilimi", "lesson_name": "BİLGİSAYAR BİLİMİ", "kolay": [{"topic": "Python Fonksiyonlar (def, return, parametreler)", "question": "Programlamada 'Fonksiyon' (Function) nedir? Fonksiyon kullanmanın sağladığı iki önemli avantajı yazınız.", "points": 20, "answer": "Fonksiyon; belirli bir görevi yerine getirmek üzere yapılandırılmış, tekrar tekrar çağrılabilen bağımsız kod bloklarıdır. Avantajları: 1. Kod tekrarını önler (DRY prensibi). 2. Programı modüler hale getirerek okunabilirliği ve bakım kolaylığını artırır."}, {"topic": "Python Fonksiyonlar (def, return, parametreler)", "question": "Python'da bir fonksiyon nasıl tanımlanır ('def') ve nasıl çağrılır? İki sayıyı toplayan basit bir örnek gösteriniz.", "points": 20, "answer": "def topla(a, b):\n    return a + b\n\n# Çağırma:\nsonuc = topla(5, 7)\nprint(sonuc) # Ekrana 12 yazar"}, {"topic": "Dosya İşlemleri ve Hata Yakalama (try-except)", "question": "Hata yakalama mekanizmasında 'try - except' bloklarının amacı nedir?", "points": 20, "answer": "'try' bloğu içine çalışma esnasında hata oluşturabilecek kodlar yazılır. Bir hata oluştuğunda program çökmek yerine 'except' bloğuna geçer ve hatayı zararsızca yöneterek kullanıcıya uygun mesaj verir."}, {"topic": "Veritabanı Temelleri ve SQL Sorguları", "question": "İlişkisel Veritabanı Yönetim Sistemi (VTYS / RDBMS) nedir? İki popüler VTYS adı yazınız.", "points": 20, "answer": "Verileri satır ve sütunlardan oluşan tablolar halinde saklayan, aralarındaki ilişkileri yöneten yazılım sistemleridir. Popüler örnekler: MySQL, PostgreSQL, SQLite, Microsoft SQL Server."}, {"topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik", "question": "IP Adresi ile MAC Adresi arasındaki temel farkları açıklayınız.", "points": 20, "answer": "IP Adresi: Ağ üzerinde cihazların birbirini bulmasını sağlayan mantıksal ve değiştirilebilir adrestir (Yazılımsal). MAC Adresi: Ağ kartının (NIC) üretimi sırasında içine yazılan benzersiz, fiziksel donanım kimliğidir (Donanımsal)."}], "orta": [{"topic": "Python Fonksiyonlar (def, return, parametreler)", "question": "Python'da 'return' ifadesi içeren bir fonksiyon ile sadece 'print()' yapan bir fonksiyon arasındaki farkı açıklayınız.", "points": 20, "answer": "'print()' sadece ekrana yazı basar, program hafızasına bir değer kazandırmaz. 'return' ise hesaplanan değeri fonksiyonun çağrıldığı yere geri döndürür; bu değer bir değişkende saklanabilir veya başka işlemlerde kullanılabilir."}, {"topic": "Dosya İşlemleri ve Hata Yakalama (try-except)", "question": "Python'da bir metin dosyasına yazma ('w') ve okuma ('r') işlemlerini 'with' bağlamı üzerinden kod örneğiyle açıklayınız.", "points": 20, "answer": "# Dosyaya Yazma:\nwith open('notlar.txt', 'w', encoding='utf-8') as f:\n    f.write('Ali: 90\\n')\n# Dosyadan Okuma:\nwith open('notlar.txt', 'r', encoding='utf-8') as f:\n    icerik = f.read()\n    print(icerik)"}, {"topic": "Veritabanı Temelleri ve SQL Sorguları", "question": "İlişkisel veritabanlarında 'Birincil Anahtar' (Primary Key) ve 'Yabancı Anahtar' (Foreign Key) kavramlarını açıklayınız.", "points": 20, "answer": "Primary Key: Bir tablodaki her satırı benzersiz (unique) şekilde tanımlayan sütundur (Örn: OgrenciNo). Foreign Key: Bir tablodaki sütunun başka bir tablonun Primary Key'ine bağlanarak tablolar arası ilişki kurmasını sağlayan anahtardır."}, {"topic": "Python Fonksiyonlar (def, return, parametreler)", "question": "Nesne Yönelimli Programlamada (OOP) 'Sınıf' (Class) ve 'Nesne' (Object) kavramlarını günlük hayattan bir benzetmeyle açıklayınız.", "points": 20, "answer": "Sınıf (Class) bir taslaktır, plandır (Örn: Bir araba mimari çizimi). Nesne (Object) ise o plandan üretilmiş somut örnektir (Örn: Fabrikadan çıkan kırmızı renkli, 34 plakalı gerçek bir araba)."}, {"topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik", "question": "Bilgisayar ağlarında Yıldız (Star) topolojisinin çalışma mantığını, bir avantajını ve bir dezavantajını yazınız.", "points": 20, "answer": "Çalışma mantığı: Tüm cihazlar merkezi bir anahtara (Switch/Hub) doğrudan bağımsız kablolarla bağlıdır. Avantajı: Bir kablo kopsa bile diğerleri etkilenmez. Dezavantajı: Merkezi cihaz bozulursa tüm ağ çöker."}], "zor": [{"topic": "Python Fonksiyonlar (def, return, parametreler)", "question": "Python dilinde özyinelemeli (recursive) bir yaklaşımla sayının faktöriyelini hesaplayan fonksiyonu yazınız.", "points": 20, "answer": "def faktoriyel(n):\n    if n <= 1:\n        return 1\n    return n * faktoriyel(n - 1)\n\nprint(faktoriyel(5)) # 120"}, {"topic": "Veritabanı Temelleri ve SQL Sorguları", "question": "SQL dilinde bir 'Ogrenciler' tablosunda notu 70'ten büyük olan öğrencilerin ad ve soyadlarını listeleyen sorguyu yazınız.", "points": 20, "answer": "SELECT ad, soyad FROM Ogrenciler WHERE notu > 70 ORDER BY notu DESC;"}, {"topic": "Python Fonksiyonlar (def, return, parametreler)", "question": "Nesne Yönelimli Programlamanın (OOP) 4 temel ilkesini (Kapsülleme, Kalıtım, Çok Biçimlilik, Soyutlama) birer cümleyle özetleyiniz.", "points": 20, "answer": "1. Kapsülleme: Veri ve metodları bir arada tutup dış müdahalelerden gizlemek. 2. Kalıtım: Bir sınıfın özelliklerini alt sınıflara aktarmak. 3. Çok Biçimlilik: Farklı nesnelerin aynı metoda kendi biçimlerinde yanıt vermesi. 4. Soyutlama: Gereksiz karmaşıklığı gizleyip temel fonksiyonları sunmak."}, {"topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik", "question": "TCP ve UDP ağ iletim protokollerini güvenilirlik, hız ve kullanım alanları açısından karşılaştırınız.", "points": 20, "answer": "TCP: Bağlantı odaklıdır, veri iletimini doğrular (Güvenli ama yavaş; web, dosya indirme). UDP: Bağlantısızdır, iletim doğrulaması yapmaz (Çok hızlı ama paket kaybı olabilir; canlı video yayını, online oyunlar)."}, {"topic": "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik", "question": "Simetrik şifreleme (AES) ile Asimetrik şifreleme (RSA / Açık-Gizli Anahtar) arasındaki çalışma mantığı farkını açıklayınız.", "points": 20, "answer": "Simetrik şifrelemede hem şifreleme hem şifre çözme için aynı tek gizli anahtar kullanılır. Asimetrik şifrelemede iki anahtar vardır: Herkesin bildiği 'Genel Anahtar' (Public Key) ile şifrelenen veri, yalnızca alıcıdaki 'Gizli Anahtar' (Private Key) ile açılabilir."}]}, "11": {"grade_name": "11. Sınıf", "kolay": [{"topic": "Bilgisayar Bilimi: Nesne Yönelimli Programlama (OOP) ve Web", "question": "Nesne Yönelimli Programlamada (OOP) Sınıf (Class) ve Nesne (Object) arasındaki farkı belirtiniz.", "points": 20, "answer": "Sınıf bir şablondur; nesne ise o sınıftan üretilmiş somut bellek örneğidir."}, {"topic": "Matematik: Trigonometri, Analitik Geometri ve Eşitsizlikler", "question": "Trigonometride sin²(x) + cos²(x) ifadesinin eşitini yazınız.", "points": 20, "answer": "Her x reel sayısı için sin²(x) + cos²(x) = 1'dir."}, {"topic": "Fizik: Vektörler, Bağıl Hareket, Newton Yasaları ve Momentum", "question": "Vektörlerin skaler büyüklüklerden temel farkı nedir? İki vektörel büyüklük örneği veriniz.", "points": 20, "answer": "Vektörel büyüklüklerin sayı ve birimin yanında yön ve doğrultuları da vardır. Örn: Kuvvet, Hız, İvme."}, {"topic": "Kimya: Modern Atom Teorisi, Gazlar ve Sıvı Çözeltiler", "question": "İdeal gaz denkleminde (P.V = n.R.T) her bir harfin temsil ettiği niceliği yazınız.", "points": 20, "answer": "P: Basınç (atm), V: Hacim (L), n: Mol sayısı, R: Gaz sabiti, T: Mutlak sıcaklık (Kelvin)."}, {"topic": "Türk Dili ve Edebiyatı: Tanzimat, Servetifünun ve Milli Edebiyat", "question": "Tanzimat I. Dönem edebiyatının genel özelliklerinden iki tanesini yazınız.", "points": 20, "answer": "'Sanat toplum içindir' anlayışı hakimdir. Hak, adalet, vatan, hürriyet gibi temalar ilk kez işlenmiştir."}], "orta": [{"topic": "Bilgisayar Bilimi: Nesne Yönelimli Programlama (OOP) ve Web", "question": "Python'da kalıtım (inheritance) mekanizmasını basit bir 'Hayvan' ve 'Kopek' sınıfı üzerinden kodlayınız.", "points": 20, "answer": "class Hayvan:\n    def ses_cikar(self): pass\nclass Kopek(Hayvan):\n    def ses_cikar(self): return 'Hav hav'"}, {"topic": "Matematik: Trigonometri, Analitik Geometri ve Eşitsizlikler", "question": "Analitik düzlemde A(2, 3) ve B(6, 6) noktaları arasındaki uzaklığı formülle hesaplayınız.", "points": 20, "answer": "d = √[(6 - 2)² + (6 - 3)²] = √[16 + 9] = √25 = 5 birimdir."}, {"topic": "Fizik: Vektörler, Bağıl Hareket, Newton Yasaları ve Momentum", "question": "Newton'ın II. Yasasını formülüyle açıklayınız. 4 kg kütleli cisme 20 N net kuvvet uygulanırsa ivmesi ne olur?", "points": 20, "answer": "F_net = m . a -> 20 = 4 . a -> a = 5 m/s² olur."}, {"topic": "Kimya: Modern Atom Teorisi, Gazlar ve Sıvı Çözeltiler", "question": "Le Chatelier İlkesini açıklayınız. Ekzotermik dengede sıcaklık artarsa denge ne yöne kayar?", "points": 20, "answer": "Dengedeki sisteme dış müdahale yapıldığında sistem bu etkiyi azaltacak yöne kayar. Sıcaklık artarsa ekzotermik tepkimede girenler (sol) yönüne kayar."}, {"topic": "Biyoloji: İnsan Fizyolojisi, Sinir Sistemi ve Dolaşım", "question": "İnsanda merkezi sinir sistemini oluşturan iki bölümü ve beyinciğin temel görevini yazınız.", "points": 20, "answer": "Beyin ve Omuriliktir. Beyincik: Kas koordinasyonu, denge ve hareket uyumunu sağlar."}], "zor": [{"topic": "Bilgisayar Bilimi: Nesne Yönelimli Programlama (OOP) ve Web", "question": "Big-O gösteriminde O(1), O(n) ve O(n²) karmaşıklıklarını birer örnek işlemle açıklayınız.", "points": 20, "answer": "O(1): Dizi indeksinden doğrudan eleman okuma. O(n): Diziyi tek döngüyle tarama (Linear Search). O(n²): İç içe iki döngü (Bubble Sort)."}, {"topic": "Matematik: Trigonometri, Analitik Geometri ve Eşitsizlikler", "question": "f(x) = 2x² - 8x + 5 parabolünün tepe noktasının koordinatlarını (r, k) bulunuz.", "points": 20, "answer": "r = -b / (2a) = -(-8) / 4 = 2. k = f(2) = 2(4) - 8(2) + 5 = -3. Tepe noktası: T(2, -3)."}, {"topic": "Fizik: Vektörler, Bağıl Hareket, Newton Yasaları ve Momentum", "question": "2 kg kütleli cisim 10 m/s hızla duvara dik çarpıp aynı hızla dönüyor. İtmenin (impuls) büyüklüğü nedir?", "points": 20, "answer": "I = ΔP = m(v_son - v_ilk) = 2(-10 - 10) = -40 N.s (Büyüklük: 40 N.s)."}, {"topic": "Kimya: Modern Atom Teorisi, Gazlar ve Sıvı Çözeltiler", "question": "0.1 M 500 mL HCl çözeltisi hazırlamak için kaç mol saf HCl gereklidir?", "points": 20, "answer": "M = n / V -> 0.1 = n / 0.5 -> n = 0.05 mol HCl gereklidir."}, {"topic": "Biyoloji: İnsan Fizyolojisi, Sinir Sistemi ve Dolaşım", "question": "Nöronlarda elektriksel ve kimyasal iletim bölgelerini yazınız. Sinapslarda iletim nasıl sağlanır?", "points": 20, "answer": "Akson boyunca elektriksel, sinapslarda kimyasaldır. Sinapslarda iletim nörotransmitter maddeler (asetilkolin vb.) ile difüzyonla sağlanır."}]}, "12": {"grade_name": "12. Sınıf", "kolay": [{"topic": "Bilgisayar Bilimi: Yapay Zeka Uygulamaları ve Büyük Veri", "question": "Yapay zekada 'Makine Öğrenmesi' ile 'Derin Öğrenme' arasındaki ilişkiyi açıklayınız.", "points": 20, "answer": "Makine öğrenmesi yapay zekanın veriden öğrenen alt dalıdır; Derin öğrenme ise çok katmanlı yapay sinir ağlarını kullanan makine öğrenmesinin özelleşmiş alt dalıdır."}, {"topic": "Matematik: Logaritma, Diziler, Limit, Türev ve İntegral", "question": "f(x) = 3x⁴ - 5x² + 7 fonksiyonunun türevini [f'(x)] alınız.", "points": 20, "answer": "f'(x) = 12x³ - 10x."}, {"topic": "Fizik: Çembersel Hareket, Basit Harmonik Hareket ve Modern Fizik", "question": "Düzgün çembersel hareket yapan cismin çizgisel hızı (v) ile açısal hızı (ω) bağıntısını yazınız.", "points": 20, "answer": "v = ω . r (r: yörünge yarıçapıdır)."}, {"topic": "Kimya: Kimya ve Elektrik, Organik Kimyaya Giriş", "question": "Galvanik piller ile Elektrolitik piller arasındaki temel farkı enerji dönüşümü açısından yazınız.", "points": 20, "answer": "Galvanik piller kimyasal enerjiyi elektrik enerjisine çevirir (istemli). Elektrolitik piller elektrik enerjisi harcayarak kimyasal tepkime gerçekleştirir (istemsiz)."}, {"topic": "T.C. İnkılap Tarihi: 20. Yüzyıl Başlarında Osmanlı ve Atatürkçülük", "question": "Kurtuluş Savaşı'nı askeri safhasını sona erdiren ve bağımsızlığımızı tescilleyen iki antlaşmayı yazınız.", "points": 20, "answer": "1. Mudanya Ateşkes Antlaşması, 2. Lozan Barış Antlaşması."}], "orta": [{"topic": "Bilgisayar Bilimi: Yapay Zeka Uygulamaları ve Büyük Veri", "question": "Denetimli Öğrenme ile Denetimsiz Öğrenme arasındaki farkı etiketli veri bağlamında açıklayınız.", "points": 20, "answer": "Denetimli öğrenmede eğitim verisi etiketlidir (girdi-çıktı çiftleri). Denetimsiz öğrenmede veri etiketsizdir, model verideki gizli örüntüleri kendi keşfeder (kümeleme)."}, {"topic": "Matematik: Logaritma, Diziler, Limit, Türev ve İntegral", "question": "∫ (6x² + 4x - 3) dx belirsiz integralini hesaplayınız.", "points": 20, "answer": "∫ (6x² + 4x - 3) dx = 2x³ + 2x² - 3x + C."}, {"topic": "Fizik: Çembersel Hareket, Basit Harmonik Hareket ve Modern Fizik", "question": "Fotoelektrik olayda Einstein'ın fotoelektrik denklemini ve eşik enerjisi kavramını açıklayınız.", "points": 20, "answer": "E_foton = E_bağlanma + E_kinetik. Eşik enerjisi, metalden elektron koparabilmek için gereken minimum foton enerjisidir."}, {"topic": "Kimya: Kimya ve Elektrik, Organik Kimyaya Giriş", "question": "Alkan, Alken ve Alkinlerin genel formüllerini ve karbon bağ türlerini yazınız.", "points": 20, "answer": "Alkan: CnH2n+2 (Tekli bağlar). Alken: CnH2n (İkili bağ). Alkin: CnH2n-2 (Üçlü bağ)."}, {"topic": "Biyoloji: Genden Proteine, Fotosentez ve Hücresel Solunum", "question": "DNA replikasyonunda görev alan helikaz, DNA polimeraz ve DNA ligaz enzimlerinin görevlerini yazınız.", "points": 20, "answer": "Helikaz sarmalı açar. DNA polimeraz yeni zinciri sentezler. DNA ligaz parçacıkları birleştirir."}], "zor": [{"topic": "Bilgisayar Bilimi: Yapay Zeka Uygulamaları ve Büyük Veri", "question": "Büyük Verinin (Big Data) 5V bileşenini Türkçe karşılıklarıyla yazınız.", "points": 20, "answer": "1. Volume (Hacim), 2. Velocity (Hız), 3. Variety (Çeşitlilik), 4. Veracity (Doğruluk), 5. Value (Değer)."}, {"topic": "Matematik: Logaritma, Diziler, Limit, Türev ve İntegral", "question": "lim (x -> 0) [sin(5x) / (2x)] limitinin değerini hesaplayınız.", "points": 20, "answer": "lim (x->0) sin(5x)/(2x) = 5/2'dir."}, {"topic": "Fizik: Çembersel Hareket, Basit Harmonik Hareket ve Modern Fizik", "question": "Compton saçılmasında saçılan fotonun dalga boyu neden gelen fotondan daha büyüktür?", "points": 20, "answer": "Foton enerjisinin bir kısmını elektrona aktarır; enerjisi azalan fotonun dalga boyu (E = hc/λ) artar."}, {"topic": "Kimya: Kimya ve Elektrik, Organik Kimyaya Giriş", "question": "Standart hidrojen elektroduna (SHE) göre indirgenme potansiyeli yüksek olan metal anot mu katot mu olur?", "points": 20, "answer": "İndirgenme potansiyeli yüksek olan metal indirgenmeyi tercih eder ve KATOT olur."}, {"topic": "Biyoloji: Genden Proteine, Fotosentez ve Hücresel Solunum", "question": "Hücresel solunumda Substrat Düzeyinde Fosforilasyon ile Oksidatif Fosforilasyon mekanizmalarını karşılaştırınız.", "points": 20, "answer": "Glikoliz ve Krebs'te enzimler aracılığıyla doğrudan Substrat Düzeyinde ATP üretilir; ETS'de ise proton gradyanı ve kemiozmozis ile Oksidatif Fosforilasyon ile yüksek miktarda ATP üretilir."}]}};
const EMBEDDED_GRADE_TOPICS = {"1": ["Tüm Dersler (Karma Sınav)", "Türkçe: Harfler, Heceler ve Okuma-Yazma", "Matematik: Doğal Sayılar ve Ritmik Sayma", "Hayat Bilgisi: Okulumuzda ve Evimizde Hayat", "Bilişim ve Kodlama: Algoritmik Sıralama ve Yönergeler", "Görsel Sanatlar ve Müzik"], "2": ["Tüm Dersler (Karma Sınav)", "Türkçe: Okuduğunu Anlama ve Noktalama", "Matematik: Dört İşlem, Geometri ve Paralarımız", "Hayat Bilgisi: Sağlıklı Yaşam ve Doğada Hayat", "İngilizce: Words, Numbers, Colors and Friends", "Bilişim ve Kodlama: Mantıksal Yönler ve Döngüler"], "3": ["Tüm Dersler (Karma Sınav)", "Türkçe: 5N1K, Deyimler ve Metin Bilgisi", "Matematik: Üç Basamaklı Sayılar, Çarpma, Bölme ve Kesirler", "Fen Bilimleri: Gezegenimiz, Beş Duyumuz ve Kuvvet", "Hayat Bilgisi: Okul Heyecanımız ve Ülkemizde Hayat", "İngilizce: Greetings, Feelings and Family", "Bilişim ve Kodlama: Problem Çözme ve Basit Blok Kodlama"], "4": ["Tüm Dersler (Karma Sınav)", "Türkçe: Metin Türleri, Atasözleri ve Cümle Bilgisi", "Matematik: Dört Basamaklı Sayılar, Kesirler ve Açılar", "Fen Bilimleri: Yer Kabuğu, Besinlerimiz ve Maddenin Halleri", "Sosyal Bilgiler: Birey ve Toplum, Kültür ve Miras", "Din Kültürü ve Ahlak Bilgisi: Dini İfadeler ve Güzel Ahlak", "İngilizce: Classroom Rules and My Day", "Bilişim ve Kodlama: Algoritmalar ve Scratch ile Animasyon"], "5": ["Tüm Dersler (Karma Sınav)", "Bilişim Teknolojileri ve Donanım", "Dosya Yönetimi ve Bulut Depolama", "Bilişim Etiği ve Güvenlik", "Algoritma ve Blok Tabanlı Kodlama (Scratch)", "Türkçe: Sözcükte/Cümlede Anlam, Paragraf ve Noktalama", "Matematik: Doğal Sayılar, Kesirler, Yüzdeler ve Geometri", "Fen Bilimleri: Güneş, Dünya, Ay, Canlılar ve Madde", "Sosyal Bilgiler: Birlikte Yaşamak ve Kültürümüz", "İngilizce: Hello, Games and Hobbies, Daily Routine", "Din Kültürü ve Ahlak Bilgisi: Allah İnancı ve Adap-Nezaket"], "6": ["Tüm Dersler (Karma Sınav)", "İşletim Sistemleri ve Ağlar", "Siber Zorbalık, Telif Hakları ve Dijital Ayak İzi", "Algoritmalar ve Akış Şemaları", "Blok Tabanlı Programlama (Değişkenler ve Şartlar)", "Türkçe: İsimler, Sıfatlar, Zamirler ve Paragraf", "Matematik: Çarpanlar, Kümeler, Tam Sayılar ve Oran", "Fen Bilimleri: Güneş Sistemi, Vücudumuzdaki Sistemler ve Kuvvet", "Sosyal Bilgiler: Biz ve Değerlerimiz, Tarihe Yolculuk", "İngilizce: Life, Breakfast, Weather and Emotions", "Din Kültürü ve Ahlak Bilgisi: Peygamber İnancı ve Namaz"], "7": ["Tüm Dersler (Karma Sınav)", "Bilişimsel Düşünme Becerileri", "Elektronik Tablolar (Excel Formülleri)", "Web Tasarımı (HTML ve CSS Temelleri)", "Metin Tabanlı Kodlamaya Giriş (Python)", "Türkçe: Fiiller, Ek Fiil, Zarflar ve Anlatım Bozuklukları", "Matematik: Rasyonel Sayılar, Denklemler, Oran ve Çember", "Fen Bilimleri: Güneş Sistemi, Hücre, Kuvvet ve Karışımlar", "Sosyal Bilgiler: İletişim, Türk Tarihi ve Nüfus", "İngilizce: Biographies, Wild Animals, Television", "Din Kültürü ve Ahlak Bilgisi: Melek ve Ahiret İnancı, Hac"], "8": ["Tüm Dersler (LGS / Karma Sınav)", "İleri Algoritmalar ve Python ile Problem Çözme", "Veri Güvenliği, Kriptoloji ve Blokzincir", "Yapay Zeka ve Makine Öğrenmesi", "Geleceğin Bilişim Teknolojileri (IoT, Büyük Veri)", "Türkçe: Fiilimsiler, Cümlenin Ögeleri ve Paragraf Analizi", "Matematik: Çarpanlar, Üslü-Köklü İfadeler ve Olasılık", "Fen Bilimleri: Mevsimler, DNA ve Genetik Kod, Basınç", "T.C. İnkılap Tarihi: Bir Kahraman Doğuyor ve Milli Mücadele", "İngilizce: Friendship, Teen Life and The Internet", "Din Kültürü ve Ahlak Bilgisi: Kader İnancı, Zekat ve Sadaka"], "9": ["Tüm Dersler (Karma Sınav)", "Bilgisayar Mimarisi ve Sayı Sistemleri (Binary/Hex)", "Mantıksal Kapılar ve Boole Cebri", "Python ile Programlama (Veri Tipleri, Operatörler)", "Python Karar Yapıları (if-elif-else) ve Döngüler", "Türk Dili ve Edebiyatı: Edebiyata Giriş, Hikaye ve Şiir", "Matematik: Mantık, Kümeler, Denklemler ve Üçgenler", "Fizik: Fizik Bilimine Giriş, Madde, Hareket ve Enerji", "Kimya: Kimya Bilimi, Atom ve Periyodik Sistem", "Biyoloji: Yaşam Bilimi Biyoloji ve Hücre", "Tarih: İlk ve Orta Çağlarda Türk Dünyası", "Coğrafya: Doğa ve İnsan, Coğrafi Koordinatlar", "İngilizce: Studying Abroad and My Environment", "Din Kültürü ve Ahlak Bilgisi: Bilgi, İnanç ve İslam ve İbadet"], "10": ["Tüm Dersler (Karma Sınav)", "Python Fonksiyonlar (def, return, parametreler)", "Dosya İşlemleri ve Hata Yakalama (try-except)", "Veritabanı Temelleri ve SQL Sorguları", "Bilgisayar Ağları Protokolleri (TCP/IP) ve Siber Güvenlik", "Türk Dili ve Edebiyatı: Destan, Roman, Tiyatro ve Anlatım Türleri", "Matematik: Sayma, Olasılık, Fonksiyonlar ve Polinomlar", "Fizik: Elektrik, Manyetizma, Dalgalar ve Optik", "Kimya: Kimyanın Temel Kanunları, Karışımlar ve Asit-Baz", "Biyoloji: Hücre Bölünmeleri, Kalıtım ve Ekosistem", "Tarih: Beylikten Devlete Osmanlı ve Dünya Gücü Osmanlı", "Coğrafya: Yer Şekilleri, İç ve Dış Kuvvetler, Nüfus", "Felsefe: Felsefeyi Tanıma ve Felsefi Düşünce", "İngilizce: School Life, Plans and Legend People", "Din Kültürü ve Ahlak Bilgisi: Allah İnsan İlişkisi ve Hz. Muhammed"], "11": ["Tüm Dersler (Karma Sınav)", "Bilgisayar Bilimi: Nesne Yönelimli Programlama (OOP) ve Web", "Türk Dili ve Edebiyatı: Tanzimat, Servetifünun ve Milli Edebiyat", "Matematik: Trigonometri, Analitik Geometri ve Eşitsizlikler", "Fizik: Vektörler, Bağıl Hareket, Newton Yasaları ve Momentum", "Kimya: Modern Atom Teorisi, Gazlar ve Sıvı Çözeltiler", "Biyoloji: İnsan Fizyolojisi, Sinir Sistemi ve Dolaşım", "Tarih: Değişen Dünya Dengeleri ve Osmanlı", "Coğrafya: Biyoçeşitlilik, Türkiye Ekonomisi ve Bölgeler", "Felsefe: İlk Çağdan 20. Yüzyıla Felsefe Tarihi", "İngilizce: Future Jobs and Hobbies and Skills", "Din Kültürü ve Ahlak Bilgisi: Dünya ve Ahiret, İslam Düşüncesi"], "12": ["Tüm Dersler (YKS / Karma Sınav)", "Bilgisayar Bilimi: Yapay Zeka Uygulamaları ve Büyük Veri", "Türk Dili ve Edebiyatı: Cumhuriyet Dönemi Türk Edebiyatı", "Matematik: Logaritma, Diziler, Limit, Türev ve İntegral", "Fizik: Çembersel Hareket, Basit Harmonik Hareket ve Modern Fizik", "Kimya: Kimya ve Elektrik, Organik Kimyaya Giriş", "Biyoloji: Genden Proteine, Fotosentez ve Hücresel Solunum", "T.C. İnkılap Tarihi: 20. Yüzyıl Başlarında Osmanlı ve Atatürkçülük", "Coğrafya: Ekstrem Doğa Olayları ve Küresel Ticaret", "İngilizce: Friendship, Human Rights and Energy", "Din Kültürü ve Ahlak Bilgisi: İslam ve Bilim, Güncel Dini Meseleler"]};
const EMBEDDED_ALL_LESSONS = ["Türkçe", "Matematik", "Fen Bilimleri", "Hayat Bilgisi", "Sosyal Bilgiler", "Bilişim Teknolojileri ve Yazılım", "Bilgisayar Bilimi", "Türk Dili ve Edebiyatı", "Fizik", "Kimya", "Biyoloji", "Tarih", "T.C. İnkılap Tarihi ve Atatürkçülük", "Coğrafya", "Felsefe", "İngilizce", "Din Kültürü ve Ahlak Bilgisi", "Seçmeli Türk Sosyal Hayatında Aile", "Yapay Zeka ve Yazılım Uygulamaları"];

function getApiUrl(path) {
  if (window.location.protocol === "file:") {
    return "http://localhost:5050" + path;
  }
  return path;
}

// Yerel Soru Üretici (Sunucusuz / İnternetsiz / file:// modunda %100 kesintisiz çalışır)
function generateClientQuestions(grade, difficulty, count, topic) {
  const qBank = (typeof EMBEDDED_QUESTION_BANK !== "undefined") ? EMBEDDED_QUESTION_BANK : null;
  if (!qBank || !qBank[grade]) return [];
  const gradeData = qBank[grade];
  let pool = [];
  if (difficulty === "kolay" || difficulty === "orta" || difficulty === "zor") {
    pool = [...(gradeData[difficulty] || [])];
  } else {
    pool = [...(gradeData.kolay || []), ...(gradeData.orta || []), ...(gradeData.zor || [])];
  }

  if (topic && !topic.startsWith("Tüm")) {
    const filtered = pool.filter(item => (item.topic || "").toLowerCase().includes(topic.toLowerCase()));
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  if (pool.length < count) {
    let allPool = [...(gradeData.kolay || []), ...(gradeData.orta || []), ...(gradeData.zor || [])];
    if (topic && !topic.startsWith("Tüm")) {
      const filtered = allPool.filter(item => (item.topic || "").toLowerCase().includes(topic.toLowerCase()));
      if (filtered.length > 0) allPool = filtered;
    }
    pool = allPool;
  }
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  const ptsPerQ = Math.round(100 / Math.max(1, selected.length));
  const result = selected.map((q, idx) => ({
    id: idx + 1,
    topic: q.topic || "",
    question: q.question,
    points: ptsPerQ,
    answer: q.answer
  }));

  const total = result.reduce((s, q) => s + q.points, 0);
  const diff = 100 - total;
  if (result.length > 0 && diff !== 0) {
    result[result.length - 1].points += diff;
  }

  return result;
}

function generateClientCustomQuestions(promptText, count) {
  const pLower = promptText.toLowerCase();
  const pts = Math.round(100 / Math.max(1, count));
  let templates = [];
  if (pLower.includes("python")) {
    templates = [
      ["Python'da döngülerin (for/while) çalışma mantığını ve sonsuz döngüden kaçınma yollarını açıklayınız.", "For döngüsü belirli bir aralıkta tekrar ederken, while döngüsü koşul True olduğu sürece çalışır."],
      ["Python'da kullanıcıdan veri almak için hangi fonksiyon kullanılır? Örnek bir kod satırı yazınız.", "Kullanıcıdan veri almak için input() kullanılır. Örnek: yas = int(input('Yaş: '))"],
      ["Python'da fonksiyon tanımlamanın (def) sağladığı avantajları açıklayınız.", "Fonksiyonlar kod tekrarını önler ve programı modüler hale getirir."],
      ["Python'da liste (list) veri yapısı nedir ve nasıl tanımlanır?", "Birden çok elemanı sıralı tutar. Örnek: sayilar = [1, 2, 3]"],
      ["Python'da try-except hata yakalama mekanizmasının önemini açıklayınız.", "Beklenmedik hatalarda programın çökmesini engeller."]
    ];
  } else if (pLower.includes("scratch") || pLower.includes("blok") || pLower.includes("kodlama")) {
    templates = [
      ["Scratch'ta Sürekli Tekrarla ile 10 Defa Tekrarla blokları arasındaki fark nedir?", "Sürekli tekrarla sonsuz döngüdür, diğeri ise sadece 10 kez çalışıp durur."],
      ["Scratch programında Değişken kavramı ne işe yarar? Bir örnek veriniz.", "Skor veya süre gibi anlık değişen verileri hafızada tutar."],
      ["Scratch'ta Eğer ... İse koşul bloğunun görevini açıklayınız.", "Yalnızca belirlenen mantıksal şart sağlandığında çalışır."],
      ["Scratch'ta Haber Sal bloğunun işlevini yazınız.", "Karakterler ve sahneler arası haberleşmeyi sağlar."],
      ["Bir karakterin ekrandan çıkmaması için hangi blok kullanılır?", "Kenara geldiysen sek bloğu kullanılır."]
    ];
  } else {
    templates = [
      [promptText + " kavramını tanımlayınız ve bilişimdeki önemini açıklayınız.", promptText + "; bilişim sistemlerinde veri akışını ve problem çözmeyi destekleyen temel bir konudur."],
      [promptText + " konusunun günlük hayattaki iki temel kullanım alanını belirtiniz.", "1. Otomasyon ve hız sağlaması. 2. Güvenli ve düzenli bilgi yönetimi sunması."],
      [promptText + " ile ilgili dikkat edilmesi gereken etik ve güvenlik kurallarını yazınız.", "Veri gizliliğine özen gösterilmeli ve yetkisiz erişimler engellenmelidir."],
      [promptText + " teknolojisinin gelecekteki olası gelişimlerini değerlendiriniz.", "Yapay zeka ve bulut teknolojileriyle entegrasyonu artacaktır."],
      [promptText + " alanında karşılaşılan sorunlar nasıl çözülmelidir?", "Sistematik problem çözme adımları ve test süreçleri uygulanmalıdır."]
    ];
  }
  const result = [];
  for (let i = 0; i < Math.min(count, templates.length); i++) {
    result.push({
      id: i + 1,
      question: templates[i][0],
      points: pts,
      answer: templates[i][1]
    });
  }
  const tot = result.reduce((s, q) => s + q.points, 0);
  if (result.length && tot !== 100) {
    result[result.length - 1].points += (100 - tot);
  }
  return result;
}


// ==========================================================================
// Bilişim Sınav Kağıdı Hazırlama & Yönetim Sistemi - Frontend Uygulaması
// ==========================================================================

const AppState = {
  header: {
    year: "2026-2027 EĞİTİM ÖĞRETİM YILI",
    school: "Özel Viranşehir Uğur Anadolu Lisesi",
    lesson: "SEÇMELİ TÜRK SOSYAL HAYATINDA AİLE",
    term: "1.DÖNEM 1. YAZILI",
    student_name: "",
    student_class: "",
    student_no: "",
    student_score: ""
  },
  questions: [],
  viewMode: "questions", // 'questions' (Soru Kağıdı) veya 'answers' (Cevap Anahtarı)
  colorMode: "bw",       // 'bw' (Siyah/Beyaz) veya 'color' (Renkli)
  answerColor: "#d32f2f",// Varsayılan renk: Kırmızı
  zoomLevel: 1.0,
  printers: []
};

// Sayfa yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  loadInitialExam();
});

// --------------------------------------------------------------------------
// Başlangıç Sınav Kağıdını Yükleme (orneksinavkagidi.jpg Replikası)
// --------------------------------------------------------------------------
async function loadInitialExam() {
  let loaded = false;
  try {
    const res = await fetch(getApiUrl("/api/initial-exam"));
    if (res.ok) {
      const data = await res.json();
      AppState.header = Object.assign({}, AppState.header, data.header);
      AppState.questions = data.questions || [];
      loaded = true;
    }
  } catch (err) {
    console.warn("Sunucu başlangıç verisine erişilemedi, yerel şablon yükleniyor:", err);
  }

  if (!loaded && typeof EMBEDDED_INITIAL_EXAM !== "undefined") {
    AppState.header = Object.assign({}, AppState.header, EMBEDDED_INITIAL_EXAM.header);
    AppState.questions = JSON.parse(JSON.stringify(EMBEDDED_INITIAL_EXAM.questions || []));
  }

  populateForm();
  renderExamSheet();
  renderQuestionsList();
}

// --------------------------------------------------------------------------
// Form Alanlarını State ile Doldurma
// --------------------------------------------------------------------------
function populateForm() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  };

  setVal("input-year", AppState.header.year);
  setVal("input-school", AppState.header.school);
  setVal("input-lesson", AppState.header.lesson);
  setVal("input-term", AppState.header.term);
  setVal("input-student-name", AppState.header.student_name);
  setVal("input-student-class", AppState.header.student_class);
  setVal("input-student-no", AppState.header.student_no);
  setVal("input-student-score", AppState.header.student_score);
}

// --------------------------------------------------------------------------
// A4 Kağıdı Canlı Render (orneksinavkagidi.jpg Şablonunun Birebir Aynısı)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// Tek Bir A4 Sayfasının HTML Şablonunu Üretici (Soru Kağıdı veya Cevap Kağıdı)
// --------------------------------------------------------------------------
function createExamPageHtml(isAnswerKey) {
  const h = AppState.header;
  const isColor = (AppState.colorMode === "color");
  const activeColor = isColor ? AppState.answerColor : "#000000";
  const termDisplay = isAnswerKey ? `${h.term} - CEVAP ANAHTARI` : h.term;
  const sectionTitle = isAnswerKey ? "S O R U L A R   V E   C E V A P L A R" : "S O R U L A R";

  const dotsLine1 = "...................................................................................................................................";
  const dotsLine2 = "........................................................................................................................................";
  const dotsLine3 = "........................................................................................................................................";
  const dotsLine4 = ".........................................................................................";

  let questionsHtml = "";
  AppState.questions.forEach((q, idx) => {
    const qNum = idx + 1;
    let answerPart = "";
    if (!isAnswerKey) {
      answerPart = `
        <div class="dotted-answer-lines">
          <div class="dotted-line-row"><span class="ans-label">Cevap:</span>${dotsLine1}</div>
          <div class="dotted-line-row">${dotsLine2}</div>
          <div class="dotted-line-row">${dotsLine3}</div>
          <div class="dotted-line-row">${dotsLine4}</div>
        </div>
      `;
    } else {
      answerPart = `
        <div class="model-answer-block" style="color: ${activeColor};">
          <span class="ans-label">Cevap: </span>
          <span class="ans-content" contenteditable="true" data-qid="${q.id}" data-field="answer">${escapeHtml(q.answer)}</span>
        </div>
      `;
    }

    questionsHtml += `
      <div class="exam-question-block">
        <div class="exam-question-text">
          <span class="q-num">${qNum}. Soru:</span>
          <span class="q-content" contenteditable="true" data-qid="${q.id}" data-field="question">${escapeHtml(q.question)}</span>
          <span class="q-pts">(${q.points} Puan)</span>
        </div>
        ${answerPart}
      </div>
    `;
  });

  return `
    <article class="a4-page ${isAnswerKey ? 'a4-page-break' : ''}">
      <table class="exam-header-table">
        <tr>
          <td class="header-col-left">
            <div>ADI SOYADI:<span>${escapeHtml(h.student_name ? ' ' + h.student_name : '')}</span></div>
            <div>SINIFI:<span>${escapeHtml(h.student_class ? ' ' + h.student_class : '')}</span></div>
            <div>No.:<span>${escapeHtml(h.student_no ? ' ' + h.student_no : '')}</span></div>
          </td>
          <td class="header-col-middle">
            <div class="exam-year">${escapeHtml(h.year)}</div>
            <div class="exam-school">${escapeHtml(h.school)}</div>
            <div class="exam-lesson">${escapeHtml(h.lesson)}</div>
            <div class="exam-term">${escapeHtml(termDisplay)}</div>
          </td>
          <td class="header-col-right">
            <div>PUAN:<span>${escapeHtml(h.student_score ? ' ' + h.student_score : '')}</span></div>
          </td>
        </tr>
      </table>
      <div class="exam-section-title">${sectionTitle}</div>
      <div class="exam-questions-container">${questionsHtml}</div>
    </article>
  `;
}

// --------------------------------------------------------------------------
// A4 Kağıdı Canlı Render (Soru, Cevap veya İkisi Birlikte)
// --------------------------------------------------------------------------
function renderExamSheet() {
  const scaler = document.getElementById("paper-scaler");
  if (!scaler) return;

  if (AppState.viewMode === "questions") {
    scaler.innerHTML = createExamPageHtml(false);
  } else if (AppState.viewMode === "answers") {
    scaler.innerHTML = createExamPageHtml(true);
  } else if (AppState.viewMode === "both") {
    scaler.innerHTML = `
      ${createExamPageHtml(false)}
      <div class="page-separator"><span>📄 Sayfa 2: Cevap Kağıdı (Cevap Anahtarı)</span></div>
      ${createExamPageHtml(true)}
    `;
  }

  attachSheetEditableListeners();
}


// --------------------------------------------------------------------------
// Kağıt Üzerinden Canlı Düzenleme (ContentEditable -> State Senkronizasyonu)
// --------------------------------------------------------------------------
function attachSheetEditableListeners() {
  document.querySelectorAll("[contenteditable='true']").forEach(el => {
    el.addEventListener("blur", (e) => {
      const qid = e.target.getAttribute("data-qid");
      const field = e.target.getAttribute("data-field");
      if (qid && field) {
        const item = AppState.questions.find(q => q.id == qid);
        if (item) {
          item[field] = e.target.innerText.trim();
          renderQuestionsList();
        }
      }
    });
  });
}

// --------------------------------------------------------------------------
// Sol Panel: Soru Listesini Çizme & Yönetim
// --------------------------------------------------------------------------
function renderQuestionsList() {
  const container = document.getElementById("sidebar-questions-list");
  const countBadge = document.getElementById("badge-question-count");
  if (countBadge) countBadge.textContent = `${AppState.questions.length} Soru (Toplam: ${getTotalPoints()} Puan)`;

  if (!container) return;
  container.innerHTML = "";

  AppState.questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-item-card";

    card.innerHTML = `
      <div class="question-item-header">
        <span class="question-num-tag">${idx + 1}. Soru</span>
        <div class="question-item-actions">
          <button class="btn btn-secondary btn-sm" onclick="moveQuestion(${idx}, -1)" title="Yukarı Taşı" ${idx === 0 ? "disabled" : ""}>↑</button>
          <button class="btn btn-secondary btn-sm" onclick="moveQuestion(${idx}, 1)" title="Aşağı Taşı" ${idx === AppState.questions.length - 1 ? "disabled" : ""}>↓</button>
          <button class="btn btn-danger btn-sm" onclick="deleteQuestion(${idx})" title="Sil">✕</button>
        </div>
      </div>
      <div class="form-group" style="margin-bottom: 0.4rem;">
        <input type="text" value="${escapeHtml(q.question)}" onchange="updateQuestionText(${idx}, this.value)" placeholder="Soru metni...">
      </div>
      <div class="form-row" style="margin-bottom: 0.4rem;">
        <div>
          <label style="font-size: 0.7rem;">Puan:</label>
          <input type="number" min="1" max="100" value="${q.points}" onchange="updateQuestionPoints(${idx}, this.value)">
        </div>
        <div>
          <label style="font-size: 0.7rem;">Cevap Önizleme:</label>
          <input type="text" value="${escapeHtml(q.answer.substring(0, 30))}..." title="${escapeHtml(q.answer)}" readonly style="background: #f1f5f9; cursor: pointer;" onclick="editAnswerModal(${idx})">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function getTotalPoints() {
  return AppState.questions.reduce((sum, q) => sum + (parseInt(q.points) || 0), 0);
}

// Soru Düzenleme İşlemleri
window.updateQuestionText = (idx, val) => {
  if (AppState.questions[idx]) {
    AppState.questions[idx].question = val;
    renderExamSheet();
  }
};

window.updateQuestionPoints = (idx, val) => {
  if (AppState.questions[idx]) {
    AppState.questions[idx].points = parseInt(val) || 0;
    renderExamSheet();
    renderQuestionsList();
  }
};

window.moveQuestion = (idx, direction) => {
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= AppState.questions.length) return;
  const temp = AppState.questions[idx];
  AppState.questions[idx] = AppState.questions[newIdx];
  AppState.questions[newIdx] = temp;
  renderExamSheet();
  renderQuestionsList();
};

window.deleteQuestion = (idx) => {
  AppState.questions.splice(idx, 1);
  renderExamSheet();
  renderQuestionsList();
  showToast("Soru silindi.");
};

window.addNewQuestion = () => {
  const newId = Date.now();
  const defaultPts = Math.max(5, Math.round(100 / (AppState.questions.length + 1)));
  AppState.questions.push({
    id: newId,
    question: "Yeni soru metnini buraya yazınız...",
    points: defaultPts,
    answer: "Bu sorunun doğru model cevabını buraya yazınız."
  });
  renderExamSheet();
  renderQuestionsList();
  showToast("Yeni soru eklendi.");
};

window.balancePoints = () => {
  const n = AppState.questions.length;
  if (n === 0) return;
  const each = Math.floor(100 / n);
  const rem = 100 - (each * n);
  AppState.questions.forEach((q, i) => {
    q.points = each + (i === n - 1 ? rem : 0);
  });
  renderExamSheet();
  renderQuestionsList();
  showToast("Puanlar 100 puana eşit şekilde dengelendi.");
};

window.editAnswerModal = (idx) => {
  const q = AppState.questions[idx];
  if (!q) return;
  const newAns = prompt(`${idx + 1}. Soru için model cevabı düzenleyiniz:`, q.answer);
  if (newAns !== null) {
    q.answer = newAns.trim();
    renderExamSheet();
    renderQuestionsList();
  }
};

// --------------------------------------------------------------------------
// Bilişim Öğretmenliği Sınavı Oluşturucu (5, 6, 7, 8, 9, 10. Sınıflar)
// --------------------------------------------------------------------------
async function generateBilisimExam() {
  const grade = document.getElementById("select-grade").value;
  const difficulty = document.getElementById("select-difficulty").value;
  const count = parseInt(document.getElementById("input-question-count").value) || 5;
  const topic = document.getElementById("select-topic")?.value || "Tüm Dersler (Karma Sınav)";
  const lesson = AppState.header.lesson || "";

  showToast(`${grade}. Sınıf ${lesson || 'Sınav'} soruları hazırlanıyor...`);

  let questions = [];

  // 1. Önce sunucuyu dene
  try {
    const res = await fetch(getApiUrl(`/api/questions?grade=${grade}&difficulty=${difficulty}&count=${count}&topic=${encodeURIComponent(topic)}&lesson=${encodeURIComponent(lesson)}`));
    if (res.ok) {
      const data = await res.json();
      questions = data.questions || [];
    }
  } catch (err) {
    console.warn("Sunucu erişim hatası, yerel soru bankası kullanılıyor:", err);
  }

  // 2. Sunucuya ulaşılamazsa yerel soru bankasından anında üret
  if (!questions || questions.length === 0) {
    questions = generateClientQuestions(grade, difficulty, count, topic);
  }

  if (questions && questions.length > 0) {
    AppState.questions = questions;
    populateForm();
    renderExamSheet();
    renderQuestionsList();
    showToast(`${grade}. Sınıf sınavı (${questions.length} soru) başarıyla oluşturuldu!`);
  } else {
    showToast("Soru oluşturulurken bir hata oluştu.");
  }
}

// --------------------------------------------------------------------------
// Özel Soru İsteme Asistanı (AI / Konu Bazlı)
// --------------------------------------------------------------------------
async function generateCustomPrompt() {
  const promptInput = document.getElementById("input-custom-prompt");
  const promptText = promptInput.value.trim();
  const grade = document.getElementById("select-grade").value;
  const count = parseInt(document.getElementById("input-question-count").value) || 5;

  if (!promptText) {
    alert("Lütfen hazırlamak istediğiniz konuyu yazınız (Örn: Python döngüler, Scratch değişkenler, Siber güvenlik)");
    return;
  }

  showToast("Özel sorular üretiliyor...");
  let questions = [];
  let topic = promptText;

  try {
    const res = await fetch(getApiUrl("/api/generate-custom"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: promptText, grade: grade, count: count })
    });
    if (res.ok) {
      const data = await res.json();
      questions = data.questions || [];
      topic = data.topic || promptText;
    }
  } catch (err) {
    console.warn("Sunucu özel soru API hatası, yerel kural motoru devreye girdi:", err);
  }

  if (!questions || questions.length === 0) {
    questions = generateClientCustomQuestions(promptText, count);
  }

  AppState.questions = questions;
  AppState.header.lesson = "BİLİŞİM: " + topic.toUpperCase();
  populateForm();
  renderExamSheet();
  renderQuestionsList();
  promptInput.value = "";
  showToast(`'${topic}' konulu sorular kağıda yerleştirildi!`);
}

// --------------------------------------------------------------------------
// Event Listener'lar ve Kontroller
// --------------------------------------------------------------------------
function initEventListeners() {

  // Sınıf değiştiğinde konuları dinamik güncelle
  const selectGrade = document.getElementById("select-grade");
  if (selectGrade) {
    updateTopicsDropdown(selectGrade.value);
    selectGrade.addEventListener("change", (e) => {
      const gVal = e.target.value;
      updateTopicsDropdown(gVal);
      const g = parseInt(gVal) || 5;
      if (g <= 4) {
        AppState.header.school = "İlkokulu";
        if (AppState.header.lesson === "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM" || AppState.header.lesson === "BİLGİSAYAR BİLİMİ") {
          AppState.header.lesson = "TÜRKÇE";
        }
      } else if (g <= 8) {
        AppState.header.school = "Ortaokulu";
        if (AppState.header.lesson === "BİLGİSAYAR BİLİMİ") {
          AppState.header.lesson = "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM";
        }
      } else {
        AppState.header.school = "Anadolu Lisesi";
        if (AppState.header.lesson === "BİLİŞİM TEKNOLOJİLERİ VE YAZILIM") {
          AppState.header.lesson = "BİLGİSAYAR BİLİMİ";
        }
      }
      populateForm();
      renderExamSheet();
    });
  }

  const selectTopic = document.getElementById("select-topic");
  if (selectTopic) {
    selectTopic.addEventListener("change", (e) => {
      const selected = e.target.value;
      if (selected && !selected.startsWith("Tüm Dersler") && !selected.startsWith("Tüm Konular")) {
        let lessonName = selected;
        if (selected.includes(":")) {
          lessonName = selected.split(":")[0].trim();
        }
        AppState.header.lesson = lessonName.toUpperCase();
        
        const g = parseInt(document.getElementById("select-grade")?.value || "5");
        if (lessonName.includes("Edebiyat") || lessonName.includes("Fizik") || lessonName.includes("Kimya") || lessonName.includes("Biyoloji") || lessonName.includes("Felsefe") || lessonName.includes("Bilgisayar Bilimi")) {
          AppState.header.school = "Anadolu Lisesi";
        } else if (lessonName.includes("Hayat Bilgisi") || g <= 4) {
          AppState.header.school = "İlkokulu";
        } else {
          AppState.header.school = "Ortaokulu";
        }
        populateForm();
        renderExamSheet();
      }
    });
  }

  // %100 Düzgün Önizleme Modalı Butonları
  document.getElementById("btn-open-preview-modal")?.addEventListener("click", openFullscreenPreview);
  document.getElementById("btn-fullscreen-preview-close")?.addEventListener("click", closeFullscreenPreview);
  document.getElementById("btn-modal-toggle-mode")?.addEventListener("click", toggleModeInModal);
  document.getElementById("btn-modal-print")?.addEventListener("click", () => {
    closeFullscreenPreview();
    setTimeout(() => window.print(), 200);
  });
  document.getElementById("btn-modal-docx")?.addEventListener("click", () => {
    downloadDocx(AppState.viewMode);
  });
  document.getElementById("fullscreen-preview-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "fullscreen-preview-modal") closeFullscreenPreview();
  });

  // Üst Bilgi Değişiklikleri
  const bindHeaderInput = (id, key) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        AppState.header[key] = e.target.value;
        renderExamSheet();
      });
    }
  };

  bindHeaderInput("input-year", "year");
  bindHeaderInput("input-school", "school");
  bindHeaderInput("input-lesson", "lesson");
  bindHeaderInput("input-term", "term");
  bindHeaderInput("input-student-name", "student_name");
  bindHeaderInput("input-student-class", "student_class");
  bindHeaderInput("input-student-no", "student_no");
  bindHeaderInput("input-student-score", "student_score");

  // Bilişim Soru Üret Butonları
  document.getElementById("btn-generate-bilisim")?.addEventListener("click", generateBilisimExam);
  document.getElementById("btn-generate-custom")?.addEventListener("click", generateCustomPrompt);
  document.getElementById("btn-add-question")?.addEventListener("click", addNewQuestion);
  document.getElementById("btn-balance-points")?.addEventListener("click", balancePoints);

  
  // Görünüm Modu Değiştirme: [ Soru Kağıdı ] | [ Cevap Kağıdı ] | [ Her İkisi ]
  const btnModeQuestions = document.getElementById("btn-mode-questions");
  const btnModeAnswers = document.getElementById("btn-mode-answers");
  const btnModeBoth = document.getElementById("btn-mode-both");
  const colorControls = document.getElementById("color-controls-section");

  btnModeQuestions?.addEventListener("click", () => {
    AppState.viewMode = "questions";
    btnModeQuestions.classList.add("active");
    btnModeAnswers?.classList.remove("active");
    btnModeBoth?.classList.remove("active");
    if (colorControls) colorControls.style.display = "none";
    renderExamSheet();
  });

  btnModeAnswers?.addEventListener("click", () => {
    AppState.viewMode = "answers";
    btnModeAnswers.classList.add("active");
    btnModeQuestions?.classList.remove("active");
    btnModeBoth?.classList.remove("active");
    if (colorControls) colorControls.style.display = "flex";
    renderExamSheet();
  });

  btnModeBoth?.addEventListener("click", () => {
    AppState.viewMode = "both";
    btnModeBoth.classList.add("active");
    btnModeQuestions?.classList.remove("active");
    btnModeAnswers?.classList.remove("active");
    if (colorControls) colorControls.style.display = "flex";
    renderExamSheet();
  });

  // Tek DOCX Dosyasında Soru + Cevap Kağıdı İndirme
  document.getElementById("btn-export-docx-single-both")?.addEventListener("click", () => {
    downloadDocx("both");
  });


  btnModeAnswers?.addEventListener("click", () => {
    AppState.viewMode = "answers";
    btnModeAnswers.classList.add("active");
    btnModeQuestions.classList.remove("active");
    document.getElementById("color-controls-section").style.display = "flex";
    renderExamSheet();
  });

  // Renkli / Siyah-Beyaz Seçeneği
  const selectColorMode = document.getElementById("select-color-mode");
  const colorPickerWrapper = document.getElementById("color-picker-wrapper");
  const colorPicker = document.getElementById("input-answer-color");
  const colorHexText = document.getElementById("color-hex-text");

  selectColorMode?.addEventListener("change", (e) => {
    AppState.colorMode = e.target.value; // 'bw' veya 'color'
    if (AppState.colorMode === "color") {
      colorPickerWrapper.style.display = "flex";
    } else {
      colorPickerWrapper.style.display = "none";
    }
    renderExamSheet();
  });

  colorPicker?.addEventListener("input", (e) => {
    AppState.answerColor = e.target.value;
    if (colorHexText) colorHexText.textContent = e.target.value.toUpperCase();
    renderExamSheet();
  });

  // Hazır Renk Butonları (Kırmızı, Lacivert, Yeşil, Mor, Turuncu)
  document.querySelectorAll(".preset-color-dot").forEach(dot => {
    dot.addEventListener("click", (e) => {
      const color = e.target.getAttribute("data-color");
      if (color) {
        AppState.answerColor = color;
        if (colorPicker) colorPicker.value = color;
        if (colorHexText) colorHexText.textContent = color.toUpperCase();
        renderExamSheet();
      }
    });
  });

  // Yakınlaştırma (Zoom) Kontrolleri
  document.getElementById("btn-zoom-50")?.addEventListener("click", () => setZoom(0.5));
  document.getElementById("btn-zoom-75")?.addEventListener("click", () => setZoom(0.75));
  document.getElementById("btn-zoom-100")?.addEventListener("click", () => setZoom(1.0));
  document.getElementById("btn-zoom-fit")?.addEventListener("click", setZoomFit);

  // Sıfırla (Orijinal orneksinavkagidi.jpg'ye dön)
  document.getElementById("btn-reset-original")?.addEventListener("click", () => {
    if (confirm("Sınav kağıdını görseldeki orijinal 'orneksinavkagidi.jpg' haline döndürmek istiyor musunuz?")) {
      loadInitialExam();
      showToast("Orijinal şablon geri yüklendi.");
    }
  });

  // İndirme ve Yazdırma
  document.getElementById("btn-export-docx-questions")?.addEventListener("click", () => downloadDocx("questions"));
  document.getElementById("btn-export-docx-answers")?.addEventListener("click", () => downloadDocx("answers"));
  document.getElementById("btn-export-docx-both")?.addEventListener("click", downloadBothDocx);

  // Hızlı Yazdır / PDF Kaydet (window.print)
  document.getElementById("btn-quick-print")?.addEventListener("click", () => {
    window.print();
  });

  // Donanım Yazıcısı Seçme Modalı
  document.getElementById("btn-open-printer-modal")?.addEventListener("click", openPrinterModal);
  document.getElementById("btn-modal-close")?.addEventListener("click", closePrinterModal);
  document.getElementById("btn-refresh-printers")?.addEventListener("click", fetchPrinters);
  document.getElementById("btn-submit-print")?.addEventListener("click", executePrint);

  // Modal dışına tıklandığında kapat
  document.getElementById("printer-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "printer-modal") closePrinterModal();
  });
}

// --------------------------------------------------------------------------
// Yakınlaştırma (Zoom) İşlevi
// --------------------------------------------------------------------------
function setZoom(val) {
  AppState.zoomLevel = val;
  const scaler = document.getElementById("paper-scaler");
  if (scaler) {
    scaler.style.transform = `scale(${val})`;
  }
  document.querySelectorAll(".zoom-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`btn-zoom-${Math.round(val * 100)}`);
  if (btn) btn.classList.add("active");
}

function setZoomFit() {
  const container = document.querySelector(".preview-panel");
  if (!container) return;
  const containerWidth = container.clientWidth - 40;
  const a4WidthPx = 794; // approx 210mm in px at 96 dpi
  const scale = Math.min(1.0, Math.max(0.4, (containerWidth / a4WidthPx)));
  AppState.zoomLevel = scale;
  const scaler = document.getElementById("paper-scaler");
  if (scaler) {
    scaler.style.transform = `scale(${scale})`;
  }
}

// --------------------------------------------------------------------------
// DOCX İndirme İşlemleri (Sunucu OpenXML Motoru)
// --------------------------------------------------------------------------
async function downloadDocx(mode) {
  showToast(mode === "questions" ? "Soru Kağıdı DOCX oluşturuluyor..." : "Cevap Anahtarı DOCX oluşturuluyor...");

  const payload = {
    header: AppState.header,
    questions: AppState.questions,
    mode: mode,
    color: (AppState.colorMode === "color" && mode === "answers") ? AppState.answerColor : "000000"
  };

  try {
    const res = await fetch("/api/export-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      const lessonName = (AppState.header.lesson || "Sinav").replace(/\s+/g, "_");
      a.href = url;
      a.download = mode === "questions" ? `${lessonName}_Soru_Kagidi.docx` : `${lessonName}_Cevap_Anahtari.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      showToast("DOCX belgesi indirildi!");
    } else {
      showToast("DOCX indirme hatası oluştu.");
    }
  } catch (err) {
    console.error("DOCX indirme hatası:", err);
  }
}

async function downloadBothDocx() {
  showToast("Hem soru hem cevaplı sınav paketi hazırlanıyor...");

  const payload = {
    header: AppState.header,
    questions: AppState.questions,
    color: AppState.colorMode === "color" ? AppState.answerColor : "000000"
  };

  try {
    const res = await fetch("/api/export-both-docx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      const lessonName = (AppState.header.lesson || "Sinav").replace(/\s+/g, "_");
      a.href = url;
      a.download = `${lessonName}_Sinav_Paketi.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      showToast("Soru ve Cevap Kağıtları ZIP olarak indirildi!");
    }
  } catch (err) {
    console.error("ZIP paketi indirme hatası:", err);
  }
}

// --------------------------------------------------------------------------
// Yazıcı Servisi & CUPS Modal İşlemleri
// --------------------------------------------------------------------------
function openPrinterModal() {
  const modal = document.getElementById("printer-modal");
  if (modal) modal.classList.add("active");
  fetchPrinters();
}

function closePrinterModal() {
  const modal = document.getElementById("printer-modal");
  if (modal) modal.classList.remove("active");
}

async function fetchPrinters() {
  const select = document.getElementById("select-printer");
  const statusMsg = document.getElementById("printer-status-message");
  if (select) select.innerHTML = "<option>Yazıcılar taranıyor...</option>";

  try {
    const res = await fetch("/api/printers");
    if (res.ok) {
      const data = await res.json();
      AppState.printers = data.printers || [];

      if (select) select.innerHTML = "";

      if (AppState.printers.length === 0) {
        if (select) {
          select.innerHTML = "<option value=''>Sistemde kayıtlı fiziksel CUPS yazıcısı yok</option>";
        }
        if (statusMsg) {
          statusMsg.innerHTML = `<span style="color:#b45309;">⚠️ ${data.message}</span>`;
        }
      } else {
        AppState.printers.forEach(p => {
          const opt = document.createElement("option");
          opt.value = p.name;
          opt.textContent = `${p.name} ${p.is_default ? "(Varsayılan)" : ""} - ${p.description}`;
          if (p.is_default) opt.selected = true;
          select.appendChild(opt);
        });
        if (statusMsg) {
          statusMsg.innerHTML = `<span style="color:#16a34a;">✓ ${AppState.printers.length} yazıcı tespit edildi.</span>`;
        }
      }
    }
  } catch (err) {
    console.error("Yazıcı listesi hatası:", err);
  }
}

async function executePrint() {
  const select = document.getElementById("select-printer");
  const copiesInput = document.getElementById("input-print-copies");
  const copies = parseInt(copiesInput?.value || 1);
  const selectedPrinter = select?.value;

  if (!selectedPrinter) {
    // CUPS yazıcısı yoksa tarayıcının yerel yazdırma penceresini başlat
    closePrinterModal();
    showToast("Doğrudan sistem yazdırma penceresi açılıyor...");
    window.print();
    return;
  }

  showToast(`${copies} adet kopya '${selectedPrinter}' yazıcısına gönderiliyor...`);

  const payload = {
    printer: selectedPrinter,
    copies: copies,
    header: AppState.header,
    questions: AppState.questions,
    mode: AppState.viewMode,
    color: AppState.colorMode === "color" ? AppState.answerColor : "000000"
  };

  try {
    const res = await fetch("/api/print", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      showToast(data.message);
      closePrinterModal();
    } else {
      showToast(data.message || "Yazdırma başarısız oldu.");
    }
  } catch (err) {
    console.error("Yazdırma gönderim hatası:", err);
  }
}

// --------------------------------------------------------------------------
// Yardımcılar: Toast Bildirimi & HTML Escape
// --------------------------------------------------------------------------
function showToast(msg) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>ℹ️</span> <span>${escapeHtml(msg)}</span>`;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

function escapeHtml(text) {
  if (!text) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.toString().replace(/[&<>"']/g, m => map[m]);
}

