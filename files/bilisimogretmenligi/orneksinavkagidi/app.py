# -*- coding: utf-8 -*-
"""
Sınav Kağıdı Hazırlama & Bilişim Öğretmenliği Web Uygulaması
Flask Backend Server
"""

import os
import io
import json
import random
import tempfile
import zipfile
from flask import Flask, request, jsonify, render_template, send_file, Response
from question_bank import INITIAL_EXAM, QUESTION_BANK, GRADE_TOPICS
from docx_generator import generate_docx
from printer_service import list_system_printers, print_file

app = Flask(__name__, template_folder="templates", static_folder="static")

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
    """Seçili sınıf düzeyine ait ünite/konu başlıklarını döner."""
    grade = request.args.get("grade", "5")
    topics = GRADE_TOPICS.get(grade, ["Tüm Konular"])
    return jsonify({"grade": grade, "topics": topics})

@app.route("/api/questions", methods=["GET"])
def get_questions():
    """
    Sınıf, zorluk, konu ve soru sayısına göre Bilişim Teknolojileri sorularını ve cevaplarını döner.
    Parametreler: grade, difficulty, count, topic
    """
    grade = request.args.get("grade", "5")
    difficulty = request.args.get("difficulty", "orta").lower()
    topic = request.args.get("topic", "Tüm Konular").strip()
    try:
        count = int(request.args.get("count", 5))
    except ValueError:
        count = 5
    count = max(1, min(count, 30))

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
    if topic and topic != "Tüm Konular":
        filtered = [item for item in pool if item.get("topic") == topic]
        if filtered:
            pool = filtered

    # Yeterli soru yoksa havuzu diğer zorluklardan genişlet
    if len(pool) < count:
        all_pool = list(grade_data.get("kolay", [])) + list(grade_data.get("orta", [])) + list(grade_data.get("zor", []))
        if topic and topic != "Tüm Konular":
            all_filtered = [item for item in all_pool if item.get("topic") == topic]
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
    for idx, item in enumerate(selected, 1):
        formatted_questions.append({
            "id": idx,
            "topic": item.get("topic", ""),
            "question": item.get("question", ""),
            "points": pts_per_q,
            "answer": item.get("answer", "")
        })

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

    if not prompt:
        return jsonify({"error": "Lütfen bir konu veya soru açıklaması yazınız."}), 400

    # Akıllı konu analizi ve üretim mantığı
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
    Soru kağıdı veya cevap anahtarını DOCX formatında üretip indirir.
    JSON: { header: {...}, questions: [...], mode: 'questions'|'answers', color: '#D32F2F' }
    """
    data = request.get_json() or {}
    header = data.get("header", {})
    questions = data.get("questions", [])
    mode = data.get("mode", "questions")
    color = data.get("color", "000000")

    docx_bytes = generate_docx(header, questions, mode=mode, color=color)

    lesson_name = header.get("lesson", "Sinav").replace(" ", "_")
    filename = f"{lesson_name}_Soru_Kagidi.docx" if mode == "questions" else f"{lesson_name}_Cevap_Anahtari.docx"

    return send_file(
        io.BytesIO(docx_bytes),
        mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        as_attachment=True,
        download_name=filename
    )

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

    # Geçici metin veya postscript belgesi oluştur
    temp_content = f"""
================================================================================
{header.get('year', '')}
{header.get('school', '')}
{header.get('lesson', '')} - {header.get('term', '')}
================================================================================
ADI SOYADI: {header.get('student_name', '')}
SINIFI:     {header.get('student_class', '')}
NUMARASI:   {header.get('student_no', '')}
PUAN:       {header.get('student_score', '')}
--------------------------------------------------------------------------------
                             S O R U L A R
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
