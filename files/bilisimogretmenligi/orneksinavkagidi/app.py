# -*- coding: utf-8 -*-
"""
Sınav Kağıdı Hazırlama & Bilişim Öğretmenliği Web Uygulaması
Flask Backend Server
"""

import os
import io
import re
import json
import random
import tempfile
import zipfile
from flask import Flask, request, jsonify, render_template, send_file, Response
from question_bank import INITIAL_EXAM, QUESTION_BANK, GRADE_TOPICS, ALL_LESSONS_1_TO_12
from docx_generator import generate_docx
from printer_service import list_system_printers, print_file
from gemini_service import generate_questions_with_gemini

app = Flask(__name__, template_folder="templates", static_folder="static")

PORTAL_DATA_PATH = os.path.join(os.path.dirname(__file__), "portal_curriculum_data.json")
PORTAL_CURRICULUM_DATA = {}
if os.path.exists(PORTAL_DATA_PATH):
    try:
        with open(PORTAL_DATA_PATH, "r", encoding="utf-8") as f:
            PORTAL_CURRICULUM_DATA = json.load(f)
    except Exception as e:
        print(f"Error loading portal curriculum: {e}")

@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type,Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS"
    return response

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/initial-exam", methods=["GET"])
def get_initial_exam():
    """Görseldeki (orneksinavkagidi.jpg) orijinal sınav kağıdını döner."""
    return jsonify(INITIAL_EXAM)

@app.route("/api/topics", methods=["GET"])
def get_topics():
    """Seçili sınıf düzeyine ait ünite/konu başlıklarını ve 1'den 12'ye tüm dersleri döner."""
    grade = request.args.get("grade", "5")
    topics = GRADE_TOPICS.get(grade, ["Tüm Dersler (Karma Sınav)"])
    return jsonify({
        "grade": grade,
        "topics": topics,
        "all_lessons": ALL_LESSONS_1_TO_12
    })

@app.route("/api/portal-curriculum", methods=["GET"])
def get_portal_curriculum():
    """Bilişim Öğretmenliği Portalı müfredatını ve haftalarını döner."""
    grade = str(request.args.get("grade", ""))
    if grade and grade in PORTAL_CURRICULUM_DATA:
        return jsonify(PORTAL_CURRICULUM_DATA[grade])
    return jsonify(PORTAL_CURRICULUM_DATA)

def make_test_options_py(correct_ans, pool_answers, grade):
    try:
        g = int(grade)
    except:
        g = 5
    if 1 <= g <= 4:
        num_opts = 3 # İlkokul: 3 şık (A, B, C)
    elif 5 <= g <= 8:
        num_opts = 4 # Ortaokul: 4 şık (A, B, C, D)
    else:
        num_opts = 5 # Lise: 5 şık (A, B, C, D, E)

    letters = ["A", "B", "C", "D", "E"][:num_opts]
    correct_idx = random.randint(0, num_opts - 1)
    correct_letter = letters[correct_idx]

    level_key = "ilkokul" if g <= 4 else ("ortaokul" if g <= 8 else "lise")
    domain_distractors = {
        "ilkokul": [
            "Sessizce dinlemek ve parmak kaldırarak söz istemek",
            "Bilgisayarı Başlat menüsünden güvenli şekilde kapatmak",
            "Ekran ile gözümüz arasında bir kol boyu mesafe bırakmak",
            "Klavyedeki Space (Boşluk) tuşunu kullanarak kelimeleri ayırmak",
            "Boya Kovası aracı ile şekillerin içini tek tıkla boyamak",
            "Şifrelerimizi kimseyle paylaşmamak ve yabancılara söylememek",
            "Algoritma adımlarını sırasıyla ve dikkatle takip etmek"
        ],
        "ortaokul": [
            "İşlemci (CPU) tüm mantıksal ve aritmetik işlemleri yönetir",
            "RAM bellek elektrik kesildiğinde üzerindeki geçici verileri siler",
            "Sabit Disk (HDD/SSD) verilerin kalıcı saklanmasını sağlar",
            "Güvenlik Duvarı ağdan gelebilecek yetkisiz erişimleri engeller",
            "Dijital Ayak İzi internetteki tüm hareketlerin kalıcı kaydıdır",
            "Giriş birimleri bilgisayara dışarıdan veri aktarılmasını sağlar",
            "Çıkış birimleri işlenen verileri kullanıcıya sunar",
            "Zararlı yazılımlara karşı güncel antivirüs programı kullanılır"
        ],
        "lise": [
            "Derleyici (Compiler) tüm kaynak kodu tek seferde makine diline çevirir",
            "Yorumlayıcı (Interpreter) kaynak kodu satır satır yorumlayarak çalıştırır",
            "Büyük Veri (Big Data) 5V (Hacim, Hız, Çeşitlilik, Doğruluk, Değer) bileşenlerinden oluşur",
            "Yapay Zeka modelleri denetimli veya denetimsiz öğrenme ile eğitilir",
            "İlişkisel Veritabanlarında birincil anahtar (Primary Key) tekil kayıt sağlar",
            "Nesne Yönelimli Programlamada (OOP) kalıtım ve kapsülleme temel prensiptir"
        ]
    }
    pool_candidates = [a for a in pool_answers if a and a.strip() != correct_ans.strip()]
    combined = list(dict.fromkeys(pool_candidates + domain_distractors.get(level_key, [])))
    random.shuffle(combined)

    options = []
    dist_ptr = 0
    for i in range(num_opts):
        l = letters[i]
        if i == correct_idx:
            options.append({"key": l, "text": correct_ans})
        else:
            txt = combined[dist_ptr] if dist_ptr < len(combined) else f"Seçenek {l}"
            dist_ptr += 1
            options.append({"key": l, "text": txt})

    return options, correct_letter

@app.route("/api/questions", methods=["GET"])
def get_questions():
    """
    1-12. sınıf, tüm dersler, zorluk, konu ve soru sayısına göre soruları döner.
    Parametreler: grade, difficulty, count, topic, lesson, exam_type
    """
    grade = str(request.args.get("grade", "5"))
    difficulty = request.args.get("difficulty", "orta").lower()
    topic = request.args.get("topic", "").strip()
    lesson = request.args.get("lesson", "").strip()
    exam_type = request.args.get("exam_type", "klasik").lower()
    try:
        count = int(request.args.get("count", 5))
    except ValueError:
        count = 5
    count = max(1, min(count, 30))

    portal_curriculum = request.args.get("portal_curriculum", "").lower() == "true"
    portal_grade = str(request.args.get("portal_grade", grade))
    try:
        portal_start_week = int(request.args.get("portal_start_week", 1))
    except ValueError:
        portal_start_week = 1
    try:
        portal_end_week = int(request.args.get("portal_end_week", request.args.get("portal_weeks", 8)))
    except ValueError:
        portal_end_week = 8

    if portal_start_week > portal_end_week:
        portal_start_week, portal_end_week = portal_end_week, portal_start_week
    portal_start_week = max(1, min(portal_start_week, 41))
    portal_end_week = max(1, min(portal_end_week, 41))

    # Portal müfredatı eşleştirmesi seçilmişse
    if portal_curriculum and portal_grade in PORTAL_CURRICULUM_DATA:
        p_info = PORTAL_CURRICULUM_DATA[portal_grade]
        p_pool = []
        for w in range(portal_start_week, portal_end_week + 1):
            w_q = p_info.get("questions", {}).get(str(w), [])
            for item in w_q:
                p_pool.append({
                    "week": w,
                    "topic": f"{portal_grade}. Sınıf {w}. Hafta: {p_info.get('weeks', {}).get(str(w), '')}",
                    "question": item.get("q", ""),
                    "answer": item.get("a", ""),
                    "points": 20
                })
        if p_pool:
            if len(p_pool) >= count:
                selected = random.sample(p_pool, count)
            else:
                selected = p_pool
            
            pts = 100 // count
            questions = []
            pool_answers = [p.get("answer", "") for p in p_pool]
            for idx, item in enumerate(selected):
                q_pts = (100 - pts * (count - 1)) if idx == count - 1 else pts
                q_obj = {
                    "id": str(idx + 1),
                    "topic": item.get("topic", "Bilişim"),
                    "question": item["question"],
                    "points": q_pts,
                    "answer": item.get("answer", ""),
                    "type": exam_type
                }
                if exam_type == "test":
                    opts, c_letter = make_test_options_py(item.get("answer", ""), pool_answers, portal_grade)
                    q_obj["options"] = opts
                    q_obj["correct_option"] = c_letter
                    q_obj["answer"] = f"{c_letter}) {item.get('answer', '')}"
                questions.append(q_obj)
            return jsonify({
                "grade": portal_grade,
                "grade_name": f"{portal_grade}. Sınıf ({p_info.get('lesson', '')})",
                "start_week": portal_start_week,
                "end_week": portal_end_week,
                "weeks_count": portal_end_week - portal_start_week + 1,
                "count": len(questions),
                "questions": questions,
                "source": "portal-curriculum"
            })

    # 1. Özel bir konu/ders seçildiyse ve API anahtarı mevcutsa öncelikle Gemini AI ile taze üret
    if topic and not topic.startswith("Tüm Dersler") and not topic.startswith("Tüm Konular"):
        ai_questions = generate_questions_with_gemini(
            topic, grade=grade, count=count, difficulty=difficulty, lesson=lesson,
            start_week=portal_start_week, end_week=portal_end_week
        )
        if ai_questions:
            return jsonify({
                "grade": grade,
                "grade_name": f"{grade}. Sınıf",
                "difficulty": difficulty,
                "count": len(ai_questions),
                "questions": ai_questions,
                "source": "gemini-ai"
            })

    if grade not in QUESTION_BANK:
        grade = "5"

    grade_data = QUESTION_BANK[grade]
    grade_name = grade_data.get("grade_name", f"{grade}. Sınıf")

    pool = []
    if difficulty in ["kolay", "orta", "zor"]:
        pool = list(grade_data.get(difficulty, []))
    else:  # karma
        pool = list(grade_data.get("kolay", [])) + list(grade_data.get("orta", [])) + list(grade_data.get("zor", []))

    # Konu filtresi varsa uygula
    if topic and not topic.startswith("Tüm"):
        filtered = [item for item in pool if topic.lower() in item.get("topic", "").lower()]
        if filtered:
            pool = filtered

    # Yeterli soru yoksa havuzu diğer zorluklardan genişlet
    if len(pool) < count:
        all_pool = list(grade_data.get("kolay", [])) + list(grade_data.get("orta", [])) + list(grade_data.get("zor", []))
        if topic and not topic.startswith("Tüm"):
            all_filtered = [item for item in all_pool if topic.lower() in item.get("topic", "").lower()]
            if all_filtered:
                all_pool = all_filtered
        pool = all_pool

    # Rastgele veya sırayla seç
    if len(pool) >= count:
        selected = random.sample(pool, count)
    else:
        selected = pool

    # Puanı toplam 100 olacak şekilde eşit paylaştır
    pts_per_q = round(100 / max(1, len(selected)))
    formatted_questions = []
    pool_answers = [item.get("answer", "") for item in pool]
    for idx, item in enumerate(selected, 1):
        q_obj = {
            "id": idx,
            "topic": item.get("topic", ""),
            "question": item.get("question", ""),
            "points": pts_per_q,
            "answer": item.get("answer", ""),
            "type": exam_type
        }
        if exam_type == "test":
            opts, c_letter = make_test_options_py(item.get("answer", ""), pool_answers, grade)
            q_obj["options"] = opts
            q_obj["correct_option"] = c_letter
            q_obj["answer"] = f"{c_letter}) {item.get('answer', '')}"
        formatted_questions.append(q_obj)

    # Son sorunun puanını tam 100'e yuvarla
    total_pts = sum(q["points"] for q in formatted_questions)
    diff = 100 - total_pts
    if formatted_questions and diff != 0:
        formatted_questions[-1]["points"] += diff

    return jsonify({
        "grade": grade,
        "grade_name": grade_name,
        "difficulty": difficulty,
        "count": len(formatted_questions),
        "questions": formatted_questions
    })

@app.route("/api/generate-custom", methods=["POST"])
def generate_custom_questions():
    """
    Kullanıcının yazdığı özel konu veya istek üzerinden (AI / kural tabanlı) soru ve model cevap üretir.
    Örn: 'Python döngüler hakkında 3 zor soru', 'Scratch değişkenler', 'Siber güvenlik'
    """
    data = request.get_json() or {}
    prompt = data.get("prompt", "").strip()
    grade = str(data.get("grade", "5"))
    count = int(data.get("count", 5))
    lesson = data.get("lesson", "")
    start_week = int(data.get("start_week", 1))
    end_week = int(data.get("end_week", 8))

    if not prompt:
        return jsonify({"error": "Lütfen bir konu veya soru açıklaması yazınız."}), 400

    # 1. Öncelikli olarak kullanıcının Gemini API anahtarı ile canlı AI soru üretimi (Portal slaytlarını baz alır)
    ai_questions = generate_questions_with_gemini(
        prompt, grade=grade, count=count, lesson=lesson,
        start_week=start_week, end_week=end_week
    )
    if ai_questions:
        return jsonify({
            "topic": prompt,
            "count": len(ai_questions),
            "questions": ai_questions,
            "source": "gemini-ai"
        })

    # 2. API erişilemezse kural tabanlı zengin soru motoru devreye girer
    p_lower = prompt.lower()
    pts = round(100 / max(1, count))
    generated = []

    # Bilişim konularına göre akıllı eşleştirme ve üretici şablonları
    if "python" in p_lower:
        topic_title = "Python Programlama"
        templates = [
            ("Python'da döngülerin (for/while) çalışma mantığını ve sonsuz döngüden kaçınma yollarını açıklayınız.",
             "For döngüsü belirli bir aralıkta tekrar ederken, while döngüsü koşul True olduğu sürece çalışır. Sonsuz döngüye girmemek için while içindeki koşul değişkeni döngü gövdesinde güncellenmeli veya 'break' ile çıkış sağlanmalıdır."),
            ("Python'da kullanıcıdan veri almak için hangi fonksiyon kullanılır? Alınan veriyi tamsayıya dönüştüren örnek bir kod satırı yazınız.",
             "Kullanıcıdan veri almak için 'input()' fonksiyonu kullanılır. Alınan metinsel girdiyi tamsayıya dönüştürmek için 'int()' fonksiyonu ile tip dönüşümü yapılır. Örnek: 'yas = int(input(\"Yaşınızı giriniz: \"))'."),
            ("Python'da fonksiyon tanımlamanın ('def') sağladığı avantajları ve 'return' ifadesinin görevini açıklayınız.",
             "Fonksiyonlar kod tekrarını önler, okunabilirliği artırır ve programı modüler hale getirir. 'return' ifadesi ise fonksiyon içinde üretilen veya hesaplanan değeri çağrıldığı yere geri döndürür."),
            ("Python'da liste (list) ve sözlük (dict) veri yapıları arasındaki temel kullanım farkını açıklayınız.",
             "Listeler sıralı ve indeks numaraları (0, 1, 2...) ile erişilen elemanlar tutar (Örn: [1, 2, 3]). Sözlükler ise anahtar-değer (key-value) çiftleri şeklinde veriyi saklar (Örn: {'ad': 'Ali', 'not': 90})."),
            ("Python'da hata yakalama mekanizmasında 'try-except' bloklarının çalışma prensibini açıklayınız.",
             "Programın beklenmedik bir hata anında çökmesini önlemek için hata oluşturabilecek kodlar 'try' bloğuna yazılır. Hata oluştuğunda 'except' bloğu devreye girerek programın güvenle devam etmesini sağlar.")
        ]
    elif "scratch" in p_lower or "blok" in p_lower or "kodlama" in p_lower:
        topic_title = "Blok Tabanlı Programlama"
        templates = [
            ("Scratch programında 'Sürekli Tekrarla' ile '... Defa Tekrarla' blokları arasındaki fark nedir?",
             "'Sürekli Tekrarla' bloğu program durdurulana kadar sonsuza dek çalışır. '... Defa Tekrarla' bloğu ise içine konulan kodları yalnızca belirtilen sayı kadar çalıştırıp ardından sonraki komuta geçer."),
            ("Scratch'ta bir karakterin fareyi takip etmesi için hangi kod blokları kullanılmalıdır?",
             "'Yeşil bayrağa tıklandığında' altına 'sürekli tekrarla' döngüsü konur ve içine 'fare imlecine doğru dön' ile '... adım git' blokları yerleştirilir."),
            ("Blok tabanlı kodlamada 'Eğer ... İse' koşul bloğu ne işe yarar? Bir oyun senaryosuyla örnekleyiniz.",
             "Belirli bir şart sağlandığında kodların çalışmasını sağlar. Örnek: 'Eğer karaktere kedi değerse ise canı 1 azalt ve başlangıç noktasına dön'."),
            ("Scratch'ta 'Haber Sal' ve 'Haberi Aldığımda' bloklarının işlevini açıklayınız.",
             "Karakterler ve sahneler arasında iletişim kurmayı sağlar. Bir olay gerçekleştiğinde (örneğin oyun bittiğinde) haber salınır ve bu haberi dinleyen tüm karakterler kendi görevlerini başlatır."),
            ("Blok tabanlı programlamada değişken oluşturmanın (örneğin 'Puan' veya 'Süre') projeye katkısını açıklayınız.",
             "Değişkenler oyun esnasında sürekli güncellenen sayısal veya metinsel verileri hafızada tutar; skor takibi, süre geri sayımı veya can durumu değişkenler sayesinde yönetilir.")
        ]
    elif "siber" in p_lower or "güvenlik" in p_lower or "etik" in p_lower:
        topic_title = "Siber Güvenlik ve Bilişim Etiği"
        templates = [
            ("Siber zorbalık nedir? Sosyal medyada siber zorbalığa uğrayan bir öğrenci neler yapmalıdır?",
             "Siber zorbalık, dijital platformlarda bir kişiyi rahatsız edici, küçük düşürücü veya tehditkar mesajlarla hedef almaktır. Mağdur öğrenci: Cevap vermemeli, ekran görüntüsü alarak kanıtlamalı, zorbalık yapanı engellemeli ve güvendiği bir yetişkine (aile/öğretmen) bildirmelidir."),
            ("Oltalama (Phishing) saldırısı nedir? Bir e-postanın sahte olduğunu gösteren üç ipucunu yazınız.",
             "Oltalama; sahte iletilerle kullanıcıların şifre veya kart bilgilerini çalma girişimidir. İpuçları: 1. Gönderen e-posta adresindeki harf oyunları/sahtelikler. 2. Aciliyet veya korku hissi uyandıran ifadeler (Örn: 'Hesabınız 24 saat içinde kapatılacak'). 3. Şüpheli ekler veya tuhaf linkler."),
            ("Bilişim suçları nelerdir? İki örnek vererek cezai yaptırımlarından bahsediniz.",
             "Bilişim sistemlerine yetkisiz girmek, verileri yok etmek, başkalarının hesaplarını ele geçirmek bilişim suçudur. Türk Ceza Kanunu kapsamında bu eylemler adli para ve hapis cezası ile sonuçlanır."),
            ("Kişisel Verilerin Korunması Kanunu (KVKK) bireylere hangi hakları sağlar?",
             "Bireylerin kendilerine ait verilerin kimler tarafından, hangi amaçla işlendiğini öğrenme, rızası dışında paylaşılmasını engelleme ve silinmesini talep etme hakkını yasal güvence altına alır."),
            ("Kablosuz ağlarda (Wi-Fi) güvenliği sağlamak için WPA2/WPA3 şifreleme protokollerinin önemini açıklayınız.",
             "WPA2 ve WPA3, modem ile cihazlar arasındaki sinyalleri güçlü algoritmalarla şifreleyerek aynı ortamdaki yabancı kişilerin internet trafiğinizi dinlemesini ve verilerinizi çalmasını engeller.")
        ]
    elif "donanım" in p_lower or "yazılım" in p_lower or "ağ" in p_lower:
        topic_title = "Donanım, Yazılım ve Ağlar"
        templates = [
            ("İşlemci (CPU) ve RAM (Bellek) birimlerinin bilgisayar çalışmasındaki görevlerini özetleyiniz.",
             "CPU bilgisayarın beynidir; tüm mantıksal ve matematiksel işlemleri yürütür. RAM ise açık olan programların ve aktif verilerin geçici olarak hızlıca işlendiği çalışma belleğidir; elektrik kesildiğinde sıfırlanır."),
            ("Sabit Disk (HDD) ile Katı Hal Sürücüsü (SSD) arasındaki hız ve mekanik farkları açıklayınız.",
             "HDD dönen manyetik diskler ve okuyucu kafa ile mekanik çalışır. SSD ise hareketli parça içermeyen flash bellek yongalarından oluşur; HDD'ye göre çok daha hızlı, sessiz, darbelere dayanıklı ve enerji tasarrufludur."),
            ("Modem ve Router (Yönlendirici) cihazlarının ağ bağlantısındaki rollerini açıklayınız.",
             "Modem servis sağlayıcıdan gelen internet sinyalini dijital veriye dönüştürür. Router ise bu internet bağlantısını ve yerel ağ trafiğini evdeki/okuldaki birden fazla cihaza paylaştırır."),
            ("IP adresi nedir? IPv4 ile IPv6 arasındaki farkı nedenleriyle birlikte açıklayınız.",
             "IP adresi cihazların ağda birbirini bulmasını sağlayan kimlik numarasıdır. IPv4 adresleri 32 bitliktir ve dünyada tükenmiştir; bu nedenle trilyonlarca yeni adres sağlayan 128 bitlik IPv6 protokolüne geçilmektedir."),
            ("Sistem yazılımı ile uygulama yazılımı arasındaki farkı birer örnekle açıklayınız.",
             "Sistem yazılımı donanımı doğrudan yönetir ve bilgisayarın çalışmasını sağlar (Örn: Windows, Linux). Uygulama yazılımı ise kullanıcının belirli bir işini (yazı yazma, resim çizme, internete girme) yapmak için sistem yazılımı üzerinde çalışır (Örn: Word, Chrome).")
        ]
    else:
        topic_title = prompt
        templates = [
            (f"{prompt} kavramını tanımlayınız ve bilişim dünyasındaki yerini kısaca açıklayınız.",
             f"{prompt}; bilişim teknolojileri ve yazılım alanında temel bir konu olup sistemlerin daha etkin, güvenli ve verimli çalışmasına katkı sağlar."),
            (f"{prompt} konusunun günlük hayatımızdaki ve eğitimdeki iki temel kullanım alanını belirtiniz.",
             f"1. Problem çözme süreçlerini hızlandırması ve otomasyon sağlaması. 2. Bilgiye erişimi ve dijital üretkenliği kolaylaştırması."),
            (f"{prompt} ile ilgili karşılaşılabilecek olası riskler veya dikkat edilmesi gereken kurallar nelerdir?",
             f"Kullanım sırasında veri gizliliğine, etik kurallara ve sistem güvenliğine özen gösterilmeli, teknik yönergeler takip edilmelidir."),
            (f"{prompt} konusunun gelecekteki gelişim trendleri ve hayatımıza etkileri hakkında neler söylenebilir?",
             f"Yapay zeka, bulut bilişim ve otomasyon ile entegre olarak gelecekte insan iş gücünü destekleyecek ve yeni dijital yetkinlikler gerektirecektir."),
            (f"{prompt} uygulamalarında başarı elde etmek için izlenmesi gereken adımları sıralayınız.",
             f"1. İhtiyaç analizi yapılması. 2. Uygun araç ve yöntemlerin seçilmesi. 3. Test etme ve sürekli iyileştirme adımlarının uygulanması.")
        ]

    for i in range(min(count, len(templates))):
        q_item, a_item = templates[i]
        generated.append({
            "id": i + 1,
            "question": q_item,
            "points": pts,
            "answer": a_item
        })

    # Tam 100 puan denkleştirme
    total_pts = sum(q["points"] for q in generated)
    diff = 100 - total_pts
    if generated and diff != 0:
        generated[-1]["points"] += diff

    return jsonify({
        "topic": topic_title,
        "count": len(generated),
        "questions": generated
    })

@app.route("/api/export-docx", methods=["POST"])
def export_docx():
    """
    Soru kağıdı veya cevap anahtarını DOCX formatında üretip indirir ve hedef klasöre kaydeder.
    JSON: { header: {...}, questions: [...], mode: 'questions'|'answers', color: '#D32F2F', filename: '...', folder: '...' }
    """
    data = request.get_json() or {}
    header = data.get("header", {})
    questions = data.get("questions", [])
    mode = data.get("mode", "questions")
    color = data.get("color", "000000")
    custom_filename = (data.get("filename") or "").strip()
    target_folder = (data.get("folder") or "kayitlisinavkagitlari").strip() or "kayitlisinavkagitlari"

    docx_bytes = generate_docx(header, questions, mode=mode, color=color)

    lesson_name = header.get("lesson", "Sinav").replace(" ", "_")
    if custom_filename:
        filename = custom_filename if custom_filename.endswith(".docx") else f"{custom_filename}.docx"
    elif mode == "questions":
        filename = f"{lesson_name}_Soru_Kagidi.docx"
    elif mode == "both":
        filename = f"{lesson_name}_Soru_ve_Cevap_Kagidi.docx"
    else:
        filename = f"{lesson_name}_Cevap_Anahtari.docx"

    # Güvenli klasör ve dosya adı oluşturma & kaydetme
    safe_folder = re.sub(r'[^a-zA-Z0-9_\-\u00C0-\u017F]', '_', target_folder)
    folder_path = os.path.join(os.path.dirname(__file__), safe_folder)
    os.makedirs(folder_path, exist_ok=True)

    safe_filename = os.path.basename(filename)
    saved_file_path = os.path.join(folder_path, safe_filename)
    try:
        with open(saved_file_path, "wb") as f:
            f.write(docx_bytes)
        print(f"DOCX sunucuya kaydedildi: {saved_file_path}")
    except Exception as e:
        print(f"Server DOCX save error: {e}")

    return send_file(
        io.BytesIO(docx_bytes),
        mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        as_attachment=True,
        download_name=safe_filename
    )

@app.route("/api/save-exam-file", methods=["POST"])
def save_exam_file():
    """
    Sınav dosyasını (DOCX veya HTML/PDF yedeği) belirtilen klasöre kaydeder.
    """
    data = request.get_json() or {}
    header = data.get("header", {})
    questions = data.get("questions", [])
    mode = data.get("mode", "questions")
    color = data.get("color", "000000")
    file_format = (data.get("format") or "docx").lower()
    custom_filename = (data.get("filename") or "").strip()
    target_folder = (data.get("folder") or "kayitlisinavkagitlari").strip() or "kayitlisinavkagitlari"
    html_content = data.get("html_content")

    safe_folder = re.sub(r'[^a-zA-Z0-9_\-\u00C0-\u017F]', '_', target_folder)
    folder_path = os.path.join(os.path.dirname(__file__), safe_folder)
    os.makedirs(folder_path, exist_ok=True)

    if not custom_filename:
        custom_filename = f"sinav_kagidi.{file_format}"

    safe_filename = os.path.basename(custom_filename)
    saved_path = os.path.join(folder_path, safe_filename)

    try:
        if file_format == "docx":
            docx_bytes = generate_docx(header, questions, mode=mode, color=color)
            with open(saved_path, "wb") as f:
                f.write(docx_bytes)
        elif html_content:
            with open(saved_path, "w", encoding="utf-8") as f:
                f.write(html_content)
        return jsonify({
            "success": True,
            "filename": safe_filename,
            "folder": safe_folder,
            "saved_path": saved_path
        })
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route("/api/export-both-docx", methods=["POST"])
def export_both_docx():
    """
    Hem Soru Kağıdını hem de Cevap Anahtarını tek bir ZIP dosyasında paketleyip indirir.
    """
    data = request.get_json() or {}
    header = data.get("header", {})
    questions = data.get("questions", [])
    color = data.get("color", "000000")

    q_docx = generate_docx(header, questions, mode="questions", color=color)
    a_docx = generate_docx(header, questions, mode="answers", color=color)

    lesson_name = header.get("lesson", "Sinav").replace(" ", "_")

    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr(f"{lesson_name}_Soru_Kagidi.docx", q_docx)
        z.writestr(f"{lesson_name}_Cevap_Anahtari.docx", a_docx)

    zip_buffer.seek(0)
    return send_file(
        zip_buffer,
        mimetype="application/zip",
        as_attachment=True,
        download_name=f"{lesson_name}_Sinav_Paketi.zip"
    )

@app.route("/api/printers", methods=["GET"])
def get_printers():
    """Sistemdeki yazıcıları listeler."""
    return jsonify(list_system_printers())

@app.route("/api/print", methods=["POST"])
def submit_print():
    """
    Yazıcıya doğrudan yazdırma emri gönderir.
    JSON: { printer: '...', copies: 1, header: {...}, questions: [...], mode: '...', color: '...' }
    """
    data = request.get_json() or {}
    printer_name = data.get("printer", "")
    copies = data.get("copies", 1)
    header = data.get("header", {})
    questions = data.get("questions", [])
    mode = data.get("mode", "questions")
    color = data.get("color", "000000")

    section_title = "C E V A P L A R" if mode == "answers" else "S O R U L A R"

    raw_lesson = header.get('lesson', '5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM')
    if not re.match(r'^\s*\d+\s*[\.\-]?\s*(SINIF|Sınıf|sinif)', raw_lesson, re.IGNORECASE):
        grade_match = re.search(r'\d+', str(header.get("student_class", "")))
        grade_num = grade_match.group(0) if grade_match else "5"
        lesson_display = f"{grade_num}. SINIF {raw_lesson.upper()}"
    else:
        lesson_display = raw_lesson

    # Geçici metin veya postscript belgesi oluştur
    temp_content = f"""
================================================================================
{header.get('year', '')}
{header.get('school', '')}
{lesson_display} - {header.get('term', '')}
================================================================================
ADI SOYADI: {header.get('student_name', '')}
SINIFI:     {header.get('student_class', '')}
NUMARASI:   {header.get('student_no', '')}
PUAN:       {header.get('student_score', '')}
--------------------------------------------------------------------------------
                             {section_title}
--------------------------------------------------------------------------------
"""
    for i, q in enumerate(questions, 1):
        temp_content += f"\n{i}. Soru: {q.get('question')} ({q.get('points')} Puan)\n"
        if mode == "questions":
            temp_content += "Cevap:................................................................................\n"
            temp_content += "......................................................................................\n"
            temp_content += "......................................................................................\n"
        else:
            temp_content += f"Cevap: {q.get('answer')}\n"

    with tempfile.NamedTemporaryFile("w", encoding="utf-8", delete=False, suffix=".txt") as tf:
        tf.write(temp_content)
        temp_file_path = tf.name

    try:
        res = print_file(printer_name, temp_file_path, copies=copies)
    finally:
        if os.path.exists(temp_file_path):
            os.remove(temp_file_path)

    return jsonify(res)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=False)
