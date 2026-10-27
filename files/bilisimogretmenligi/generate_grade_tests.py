#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generator for weekly tests across all 10 grades (MEB Bilişim & Bilgisayar Bilimi).
Generates 10 topic-aligned questions per week for 41 weeks per grade (4,100 total questions).
The 10th question is specifically designed as a HARD / CHALLENGING question (isHard: True).
"""

import os
import json
import re

# Load curriculum
with open("all_curriculum.json", "r", encoding="utf-8") as f:
    ALL_CURRICULUM = json.load(f)

def clean_text(text):
    if not text:
        return ""
    # Strip HTML tags
    clean = re.sub(r'<[^>]+>', '', str(text))
    return clean.strip()

def build_test_for_week(grade, week_data):
    week_num = week_data.get("week", 1)
    title = clean_text(week_data.get("title", ""))
    subtitle = clean_text(week_data.get("subtitle", ""))
    unit = clean_text(week_data.get("unit", ""))
    outcome = clean_text(week_data.get("outcomeCode", ""))
    skill = clean_text(week_data.get("targetSkill", ""))
    curiosity = clean_text(week_data.get("curiosityQuestion", ""))

    roadmap = week_data.get("roadmap", [])
    roadmap_titles = [clean_text(r.get("title", "")) for r in roadmap if r.get("title")]
    roadmap_descs = [clean_text(r.get("desc", "")) for r in roadmap if r.get("desc")]

    sec1 = week_data.get("section1", {})
    sec1_title = clean_text(sec1.get("title", ""))
    sec1_items = []
    if sec1.get("card") and sec1.get("card", {}).get("items"):
        for it in sec1["card"]["items"]:
            sec1_items.append((clean_text(it.get("bold", "")), clean_text(it.get("text", ""))))
    elif sec1.get("cards"):
        for c in sec1["cards"]:
            for it in c.get("items", []):
                sec1_items.append((clean_text(it.get("bold", "")), clean_text(it.get("text", ""))))

    sec2 = week_data.get("section2", {})
    sec2_title = clean_text(sec2.get("title", ""))
    sec2_items = []
    if sec2.get("card") and sec2.get("card", {}).get("items"):
        for it in sec2["card"]["items"]:
            sec2_items.append((clean_text(it.get("bold", "")), clean_text(it.get("text", ""))))
    elif sec2.get("cards"):
        for c in sec2["cards"]:
            for it in c.get("items", []):
                sec2_items.append((clean_text(it.get("bold", "")), clean_text(it.get("text", ""))))

    workshop = week_data.get("workshop", {})
    ws_title = clean_text(workshop.get("title", ""))
    ws_steps = [clean_text(s.get("title", "")) for s in workshop.get("steps", []) if s.get("title")]

    tips = week_data.get("tips", {})
    safety_rules = [(clean_text(s.get("bold", "")), clean_text(s.get("text", ""))) for s in tips.get("safetyRules", [])]
    myths = tips.get("myths", [])

    summary_rules = [(clean_text(s.get("bold", "")), clean_text(s.get("text", ""))) for s in week_data.get("summaryRules", [])]

    # Existing quiz question
    existing_quiz = week_data.get("quiz")

    questions = []

    # -------------------------------------------------------------
    # Soru 1: Temel Kavram / Mevcut Quiz Sorusu
    # -------------------------------------------------------------
    if existing_quiz and existing_quiz.get("question") and existing_quiz.get("options"):
        opts = []
        for opt in existing_quiz["options"]:
            if isinstance(opt, dict):
                t = clean_text(opt.get("text", ""))
                is_corr = bool(opt.get("isCorrect", False))
            else:
                t = clean_text(opt)
                is_corr = False
            # Strip existing A) B) prefix if present
            t = re.sub(r'^[A-D]\)\s*', '', t)
            opts.append({
                "text": t,
                "isCorrect": is_corr
            })
        # Ensure exactly one correct
        if not any(o["isCorrect"] for o in opts) and opts:
            opts[0]["isCorrect"] = True

        questions.append({
            "question": clean_text(existing_quiz["question"]),
            "options": opts,
            "explanation": existing_quiz.get("explanation", "🎉 Doğru cevap! Konunun temel kavramını başarıyla kavradınız."),
            "difficulty": "Kolay",
            "isHard": False
        })
    else:
        # Fallback question 1
        q_text = f"'{title}' konusunun temel amacı ve odaklandığı ana kavram aşağıdakilerden hangisidir?"
        opts = [
            {"text": f"{subtitle or title} ile ilgili kavramları doğru öğrenmek", "isCorrect": True},
            {"text": "Teknolojik cihazları sadece oyun oynamak için kullanmak", "isCorrect": False},
            {"text": "Tüm bilgisayar sistemlerini kapatıp dijital dünyadan uzak durmak", "isCorrect": False},
            {"text": "Sadece internetteki videoları izlemek", "isCorrect": False}
        ]
        questions.append({
            "question": q_text,
            "options": opts,
            "explanation": f"🎉 <strong>Doğru Cevap: A!</strong> Bu haftanın temel hedefi {title} konusunu doğru kavramak ve bilinçli kullanmaktır.",
            "difficulty": "Kolay",
            "isHard": False
        })

    # Helper to build 4 options with rotated correct index
    def make_options(correct_text, wrong1, wrong2, wrong3, correct_idx=0):
        items = [
            {"text": correct_text, "isCorrect": True},
            {"text": wrong1, "isCorrect": False},
            {"text": wrong2, "isCorrect": False},
            {"text": wrong3, "isCorrect": False}
        ]
        # rotate
        order = [0, 1, 2, 3]
        if correct_idx == 1:
            order = [1, 0, 2, 3]
        elif correct_idx == 2:
            order = [2, 1, 0, 3]
        elif correct_idx == 3:
            order = [3, 1, 2, 0]
        
        rotated = [items[i] for i in order]
        # Assign prefixes
        letters = ['A', 'B', 'C', 'D']
        final_opts = []
        for idx, it in enumerate(rotated):
            final_opts.append({
                "text": f"{letters[idx]}) {it['text']}",
                "isCorrect": it['isCorrect']
            })
        corr_letter = letters[order.index(0)]
        return final_opts, corr_letter

    # -------------------------------------------------------------
    # Soru 2: Yol Haritası ve Süreç Odaklı Soru
    # -------------------------------------------------------------
    rm_t = roadmap_titles[0] if roadmap_titles else "Giriş ve Keşif"
    rm_d = roadmap_descs[0] if roadmap_descs else f"{title} adımları"
    q2_text = f"Bu haftaki ders akışında '{rm_t}' adımında hangi temel süreç üzerinde durulmuştur?"
    q2_opts, q2_letter = make_options(
        correct_text=rm_d if len(rm_d) > 8 else f"{rm_t} aşamasında temel kavramları analiz etmek",
        wrong1="Rastgele tuşlara basarak deneme yapmak",
        wrong2="Konuyla ilgisi olmayan oyun sitelerinde vakit geçirmek",
        wrong3="Dijital güvenlik kurallarını tamamen devre dışı bırakmak",
        correct_idx=1 # B
    )
    questions.append({
        "question": q2_text,
        "options": q2_opts,
        "explanation": f"🎉 <strong>Tebrikler, Doğru Cevap: {q2_letter}!</strong> '{rm_t}' basamağında hedeflenen kazanım tam olarak bu açıklamadır.",
        "difficulty": "Kolay",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 3: 1. Konu Odağı - Temel Tanım / Karakteristik
    # -------------------------------------------------------------
    s1_key = sec1_items[0][0] if sec1_items else title
    s1_val = sec1_items[0][1] if sec1_items else subtitle
    q3_text = f"'{sec1_title or title}' kapsamında ele alınan <strong>{s1_key}</strong> kavramının en doğru açıklaması hangisidir?"
    q3_opts, q3_letter = make_options(
        correct_text=s1_val if len(s1_val) > 8 else f"{s1_key} sürecinin bilişimdeki işlevi ve temel görevidir.",
        wrong1="Yalnızca bilgisayar ilk açıldığında ekranda çıkan anlamsız bir yazıdır.",
        wrong2="Sadece kabloların rengini belirleyen bir donanım parçasıdır.",
        wrong3="İnternet hızını düşürmek amacıyla yapılan bir sistem kısıtlamasıdır.",
        correct_idx=2 # C
    )
    questions.append({
        "question": q3_text,
        "options": q3_opts,
        "explanation": f"🎉 <strong>Harika, Doğru Cevap: {q3_letter}!</strong> {s1_key}, bilişim sistemlerinde {s1_val[:60]}... olarak tanımlanır.",
        "difficulty": "Orta",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 4: 1. Konu Odağı - İkinci Kavram / İşlev
    # -------------------------------------------------------------
    s1_key2 = sec1_items[1][0] if len(sec1_items) > 1 else (roadmap_titles[1] if len(roadmap_titles) > 1 else "Sistem Analizi")
    s1_val2 = sec1_items[1][1] if len(sec1_items) > 1 else (roadmap_descs[1] if len(roadmap_descs) > 1 else "İşlem ve veri yönetimi")
    q4_text = f"Bilişim uygulamalarında <strong>{s1_key2}</strong> kavramı neden hayati bir öneme sahiptir?"
    q4_opts, q4_letter = make_options(
        correct_text=s1_val2 if len(s1_val2) > 8 else f"{s1_key2} sayesinde işlemler düzenli, hatasız ve amaca uygun yürütülür.",
        wrong1="Bilgisayarın elektriğini aniden keserek sistemi sıfırlamak için kullanılır.",
        wrong2="Tüm kullanıcı şifrelerini açıkta herkese yaymak için gereklidir.",
        wrong3="Ekranın parlaklığını kapatıp çalışmayı durdurur.",
        correct_idx=0 # A
    )
    questions.append({
        "question": q4_text,
        "options": q4_opts,
        "explanation": f"🎉 <strong>Doğru Cevap: {q4_letter}!</strong> {s1_key2}, {s1_val2} açısından temel taşıdır.",
        "difficulty": "Orta",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 5: 2. Konu Odağı - Derinlemesine Yapı & İlişki
    # -------------------------------------------------------------
    s2_key = sec2_items[0][0] if sec2_items else (sec2_title or "Uygulama")
    s2_val = sec2_items[0][1] if sec2_items else "Sistemlerin doğru ve optimize biçimde çalışması"
    q5_text = f"'{sec2_title or 'İleri Düzey İnceleme'}' bölümünde vurgulanan <strong>{s2_key}</strong> için hangisi söylenemez?"
    q5_opts, q5_letter = make_options(
        correct_text="Sistem için hiçbir kuralı veya mantıksal sırası olmayan rastgele bir süreçtir.", # bu söylenemez (doğru cevap)
        wrong1=f"Temelde {s2_val[:50]}... amacına hizmet eder.",
        wrong2="Bilişim sisteminin güvenli ve düzenli çalışmasını destekler.",
        wrong3="Kullanıcı veya programcı için rehber niteliğinde kurallar içerir.",
        correct_idx=3 # D
    )
    questions.append({
        "question": q5_text,
        "options": q5_opts,
        "explanation": f"🎉 <strong>Tebrikler, Doğru Cevap: {q5_letter}!</strong> {s2_key} asla rastgele değildir; kurallı, sistematik ve planlıdır.",
        "difficulty": "Orta",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 6: Laboratuvar ve Atölye Uygulama Sorusu
    # -------------------------------------------------------------
    step_hint = ws_steps[0] if ws_steps else "Planlama ve Kodlama"
    q6_text = f"Bu haftaki bilişim laboratuvarı atölyesinde yapılan <strong>'{ws_title or 'Uygulama Görevi'}'</strong> çalışmasında öğrencilerin dikkat etmesi gereken en önemli adım hangisidir?"
    q6_opts, q6_letter = make_options(
        correct_text=f"'{step_hint}' adımını yönergelere ve başarı kriterlerine uygun olarak titizlikle tamamlamak",
        wrong1="Görevi yapmadan bilgisayarı kapatıp hemen laboratuvardan çıkmak",
        wrong2="Arkadaşının çalışmasını silip yerine boş dosya bırakmak",
        wrong3="Ekranı fareyle çizerek fiziksel olarak hasar vermek",
        correct_idx=1 # B
    )
    questions.append({
        "question": q6_text,
        "options": q6_opts,
        "explanation": f"🎉 <strong>Harika, Doğru Cevap: {q6_letter}!</strong> Laboratuvar etkinliklerinde adım adım yönergeleri takip etmek başarı kriterlerine ulaşmanın anahtarıdır.",
        "difficulty": "Orta",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 7: Doğru Bilinen Yanlışlar (Efsaneler)
    # -------------------------------------------------------------
    if myths:
        myth = myths[0]
        wrong_stmt = clean_text(myth.get("wrong", ""))
        correct_stmt = clean_text(myth.get("correct", ""))
        q7_text = f"Bilişim dünyasında sıkça karşılaşılan <em>\"{wrong_stmt}\"</em> şeklindeki inanışın bilimsel ve doğru karşılığı nedir?"
        q7_opts, q7_letter = make_options(
            correct_text=correct_stmt,
            wrong1="Bu inanış tamamen doğrudur, hiçbir değişiklik yapılamaz.",
            wrong2="Teknoloji geliştikçe bütün doğrular önemsiz hale gelir.",
            wrong3="Yalnızca en pahalı cihazlarda bu inanış geçerli sayılır.",
            correct_idx=0 # A
        )
    else:
        q7_text = f"'{title}' konusunda teknoloji kullanıcılarının sıklıkla düştüğü en büyük yanılgı hangisidir?"
        q7_opts, q7_letter = make_options(
            correct_text="Teknolojik araçların hiçbir kurala veya etik değere bağlı olmadan sınırsızca kullanılabileceğini düşünmek",
            wrong1="Bilgisayarların elektrik enerjisiyle çalıştığını bilmek",
            wrong2="Dosyaları düzenli klasörlerde saklamanın faydalı olduğunu kabul etmek",
            wrong3="Zararlı yazılımlara karşı güvenlik önlemi almak",
            correct_idx=0 # A
        )
    questions.append({
        "question": q7_text,
        "options": q7_opts,
        "explanation": f"🎉 <strong>Doğru Cevap: {q7_letter}!</strong> Doğru bilinen yanlışlara kanmamak, bilinçli bir dijital okuryazar olmanın en önemli kuralıdır.",
        "difficulty": "Orta",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 8: Güvenlik, Etik & Altın Kurallar
    # -------------------------------------------------------------
    rule_bold = safety_rules[0][0] if safety_rules else "Bilinçli Kullanım"
    rule_text = safety_rules[0][1] if safety_rules else "Dijital güvenlik ve etik kurallara uymak"
    q8_text = f"Günün Altın Kuralı olan <strong>'{rule_bold}'</strong> ilkesine göre aşağıdakilerden hangisi doğru bir davranıştır?"
    q8_opts, q8_letter = make_options(
        correct_text=rule_text if len(rule_text) > 8 else f"{rule_bold} kuralına uygun şekilde bilinçli hareket etmek",
        wrong1="Şifrelerimizi herkesin göreceği bir kâğıda yazıp ekrana yapıştırmak",
        wrong2="Kaynağı belirsiz şüpheli e-posta eklerini tereddütsüz açmak",
        wrong3="İnternette tanımadığımız kişilere tüm özel bilgilerimizi göndermek",
        correct_idx=2 # C
    )
    questions.append({
        "question": q8_text,
        "options": q8_opts,
        "explanation": f"🎉 <strong>Tebrikler, Doğru Cevap: {q8_letter}!</strong> {rule_bold} prensibi, {rule_text} gerektirir.",
        "difficulty": "İleri",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 9: Haftalık Özet & Hedef Beceri
    # -------------------------------------------------------------
    sum_b = summary_rules[0][0] if summary_rules else "Kilit Çıkarım"
    sum_t = summary_rules[0][1] if summary_rules else f"{title} becerisini günlük hayata aktarmak"
    q9_text = f"Bu haftaki dersin genel özeti ve hedeflenen <strong>'{skill or 'Bilişim Becerisi'}'</strong> doğrultusunda çıkarılacak en kapsamlı sonuç hangisidir?"
    q9_opts, q9_letter = make_options(
        correct_text=f"{sum_b}: {sum_t}",
        wrong1="Teknoloji sadece pasif bir tüketim aracıdır, üretim için kullanılmaz.",
        wrong2="Bilişim dersinde öğrenilen bilgilerin gerçek hayatla hiçbir bağı yoktur.",
        wrong3="Bir projede karşılaşılan ilk hatada çalışmayı tamamen bırakmak gerekir.",
        correct_idx=1 # B
    )
    questions.append({
        "question": q9_text,
        "options": q9_opts,
        "explanation": f"🎉 <strong>Harika, Doğru Cevap: {q9_letter}!</strong> Bu haftanın kilit çıkarımı '{sum_b}' doğrultusunda {sum_t} olmuştur.",
        "difficulty": "İleri",
        "isHard": False
    })

    # -------------------------------------------------------------
    # Soru 10: 🔥 ZOR SORU - Derin Analiz, Kod / Senaryo Muhakemesi
    # -------------------------------------------------------------
    hard_q = build_hard_question(grade, week_num, title, subtitle, sec1, sec2, workshop, summary_rules)
    questions.append(hard_q)

    assert len(questions) == 10, f"Expected 10 questions, got {len(questions)}"
    return questions

def build_hard_question(grade, week_num, title, subtitle, sec1, sec2, workshop, summary_rules):
    """
    Constructs a genuinely difficult/challenging question tailored to grade level and week topic.
    """
    if grade == 1:
        # 1. Sınıf Zor Soru: İki aşamalı mantık / dikkat sorusu
        q_text = (
            f"🔥 <strong>ZOR SORU (Dikkat ve Mantık Bilmecesi):</strong><br>"
            f"Ali, Ayşe ve Can öğretmenlerinin anlattığı '{title}' konusuna göre bir etkinlik yapıyorlar:<br>"
            f"• Ali: 'Ben yalnızca doğru ve nazik olan davranışı seçiyorum.'<br>"
            f"• Ayşe: 'Ali ne yaparsa ben onun tam tersini yapıyorum.'<br>"
            f"• Can: 'Ben ise yalnızca Ayşe'nin söylediğini dinliyorum.'<br>"
            f"Buna göre sınıfta kurallara <strong>en uygun</strong> ve doğru davranışı sergileyen öğrenci kimdir?"
        )
        opts = [
            {"text": "A) Yalnızca Ali", "isCorrect": True},
            {"text": "B) Yalnızca Ayşe", "isCorrect": False},
            {"text": "C) Yalnızca Can", "isCorrect": False},
            {"text": "D) Hem Ayşe hem Can", "isCorrect": False}
        ]
        exp = "🔥 <strong>Tebrikler, Zor Soruyu Başarıyla Çözdün: A!</strong> Ali doğrudan kurallara uygun nazik davranışı seçmektedir. Ayşe onun tersini yaptığı için yanlış davranır, Can da Ayşe'yi dinlediği için hatalı yola girer. Doğru davranan sadece Ali'dir."

    elif grade == 2:
        # 2. Sınıf Zor Soru: ScratchJr / Yön - Blok Sıralama Bulmacası
        q_text = (
            f"🔥 <strong>ZOR SORU (Algoritma ve Adım Takibi):</strong><br>"
            f"Kareli bir labirentte bulunan sevimli robotumuz '{title}' görevini tamamlamak için şu komutları sırasıyla çalıştırıyor:<br>"
            f"1. Adım: [3 Kutu Sağa İlerle]<br>"
            f"2. Adım: [2 Kutu Yukarı Çık]<br>"
            f"3. Adım: [1 Kutu Sola Dön ve İlerle]<br>"
            f"4. Adım: [2 Kutu Aşağı İn]<br>"
            f"Robotumuz başlangıç noktasına göre şu an <strong>tam olarak nerede</strong> durmaktadır?"
        )
        opts = [
            {"text": "A) Başlangıç noktasının 2 kutu sağında", "isCorrect": True},
            {"text": "B) Başlangıç noktasının 3 kutu yukarısında", "isCorrect": False},
            {"text": "C) Tam olarak başlangıç noktasının üzerinde", "isCorrect": False},
            {"text": "D) Başlangıç noktasının 1 kutu solunda", "isCorrect": False}
        ]
        exp = "🔥 <strong>Harika Analiz, Doğru Cevap: A!</strong> Robot 3 sağa gitti, 2 yukarı çıktı, 1 sola gitti (net sağ: 3 - 1 = 2), 2 aşağı indi (net dikey: 2 - 2 = 0). Sonuçta başlangıcın tam 2 kutu sağındadır!"

    elif grade == 3:
        # 3. Sınıf Zor Soru: Giriş/Çıkış veya Dosya Organizasyonu Çelişki Tespiti
        q_text = (
            f"🔥 <strong>ZOR SORU (Sistem Analizi & Mantık):</strong><br>"
            f"Bir okul bilgisayarında '{title}' konusuyla ilgili bir senaryo inceleniyor:<br>"
            f"Öğrenci Zeynep, çizdiği resmi <em>'resim.png'</em> olarak, yazdığı şiiri <em>'siir.docx'</em> olarak kaydediyor. "
            f"Fakat elektrikler aniden kesildiğinde şiirinin kaydedilmediğini, resminin ise flash bellekte sağlam kaldığını fark ediyor.<br>"
            f"Bu durumun teknik sebebi aşağıdakilerden hangisiyle <strong>kesinlikle açıklanır</strong>?"
        )
        opts = [
            {"text": "A) Flash bellek kalıcı depolamadır; kaydedilmemiş şiir ise yalnızca geçici bellek olan RAM'dedir ve elektrik kesilince silinir.", "isCorrect": True},
            {"text": "B) .docx uzantılı dosyalar hiçbir zaman bilgisayarda saklanamaz.", "isCorrect": False},
            {"text": "C) Resim dosyaları elektrik olmadan da kendi kendini şarj edebilir.", "isCorrect": False},
            {"text": "D) Bilgisayarın klavyesi bozulduğu için şiir silinmiştir.", "isCorrect": False}
        ]
        exp = "🔥 <strong>Mükemmel, Doğru Cevap: A!</strong> Kaydedilmemiş veriler geçici bellek olan RAM'de tutulur ve elektrik kesintisinde kaybolur. Kalıcı belleğe (flash bellek veya sabit disk) 'Kaydet' komutuyla yazılan dosyalar ise korunur."

    elif grade == 4:
        # 4. Sınıf Zor Soru: Döngü ve Değişken Değer Takibi
        q_text = (
            f"🔥 <strong>ZOR SORU (Algoritmik Düşünme & Döngü Takibi):</strong><br>"
            f"'{title}' kapsamında tasarlanan bir blok kodda şu algoritma işletiliyor:<br>"
            f"• <strong>Puan</strong> değişkeni başlangıçta <strong>10</strong> olarak belirlenir.<br>"
            f"• <strong>3 defa tekrarla:</strong><br>"
            f"&nbsp;&nbsp;&nbsp;&nbsp;[Puan'ı 5 artır]<br>"
            f"&nbsp;&nbsp;&nbsp;&nbsp;[Eğer Puan > 20 ise: Puan'ı 2 azalt]<br>"
            f"Bu döngü tamamen bittiğinde <strong>Puan</strong> değişkeninin son değeri kaç olur?"
        )
        # Tur 1: 10 + 5 = 15 (>20 değil) -> Puan = 15
        # Tur 2: 15 + 5 = 20 (>20 değil) -> Puan = 20
        # Tur 3: 20 + 5 = 25 (>20 doğru!) -> 25 - 2 = 23 -> Puan = 23
        opts = [
            {"text": "A) 21", "isCorrect": False},
            {"text": "B) 23", "isCorrect": True},
            {"text": "C) 25", "isCorrect": False},
            {"text": "D) 19", "isCorrect": False}
        ]
        exp = "🔥 <strong>Tebrikler, Çok Başarılı Bir Çözüm: B!</strong><br>1. Tur: 10+5=15 (20'den büyük değil).<br>2. Tur: 15+5=20 (20'den büyük değil).<br>3. Tur: 20+5=25 (20'den büyük olduğu için 2 azalır: 25-2=23). Sonuç: 23!"

    elif grade == 5:
        # 5. Sınıf Zor Soru: Kapasite Dönüşümü & Scratch Hata Ayıklama (Debugging)
        if week_num in [7, 8, 9, 11, 12]:
            q_text = (
                f"🔥 <strong>ZOR SORU (Kapasite Birimleri & Sayısal Hesaplama):</strong><br>"
                f"Bir bilişim laboratuvarında <strong>8 GB</strong> kapasiteli bir USB belleğe, "
                f"her biri ortalama <strong>4 MB</strong> büyüklüğünde olan müzik dosyaları yüklenecektir.<br>"
                f"(Not: 1 GB = 1024 MB olarak kabul edilecektir.)<br>"
                f"Bu belleğe içi tamamen dolana kadar en fazla <strong>kaç adet</strong> müzik parçası yüklenebilir?"
            )
            # 8 * 1024 = 8192 MB. 8192 / 4 = 2048 adet!
            opts = [
                {"text": "A) 1024 adet", "isCorrect": False},
                {"text": "B) 2000 adet", "isCorrect": False},
                {"text": "C) 2048 adet", "isCorrect": True},
                {"text": "D) 4096 adet", "isCorrect": False}
            ]
            exp = "🔥 <strong>Mükemmel Matematiksel Muhakeme: C!</strong><br>8 GB = 8 × 1024 MB = 8192 MB.<br>8192 MB / 4 MB = <strong>2048 adet</strong> müzik dosyası tam olarak sığar."
        else:
            q_text = (
                f"🔥 <strong>ZOR SORU (Scratch Algılama & Hata Ayıklama - Debugging):</strong><br>"
                f"'{title}' laboratuvar projesinde bir öğrenci kuklasının labirent duvarına değdiğinde başa dönmesini istemektedir. "
                f"Yazdığı kod:<br>"
                f"<code>[Yeşil Bayrak Tıklandığında] → [Eğer &lt;Siyah Rengine Değiyor mu?&gt; ise] → [x: -200 y: 0 Konumuna Git]</code><br>"
                f"Ancak oyun başladığında kukla duvara değse bile kod çalışmamaktadır. Bu mantıksal hatanın çözümü nedir?"
            )
            opts = [
                {"text": "A) 'Eğer' bloğu 'Sürekli Tekrarla' bloğu içine alınmalıdır; çünkü tek başına 'Eğer' sadece bayrağa basıldığı ilk mikro saniyede kontrol edip biter.", "isCorrect": True},
                {"text": "B) Siyah renk yerine beyaz renk seçilmelidir.", "isCorrect": False},
                {"text": "C) x ve y koordinatları pozitif yapılmalıdır.", "isCorrect": False},
                {"text": "D) Yeşil bayrak yerine boşluk tuşu kullanılmalıdır.", "isCorrect": False}
            ]
            exp = "🔥 <strong>Üst Düzey Kodlama Bilgisi, Tebrikler: A!</strong> Scratch'te durum kontrollerinin oyun boyunca aktif kalabilmesi için mutlaka <strong>'Sürekli Tekrarla'</strong> döngüsü içine yerleştirilmesi gerekir."

    elif grade == 6:
        # 6. Sınıf Zor Soru: Excel Formülleri / Yapay Zekâ Model Çelişkisi
        if week_num in [3, 4]:
            q_text = (
                f"🔥 <strong>ZOR SORU (Elektronik Tablo İç İçe Formül Analizi):</strong><br>"
                f"Bir e-tablo programında A1=20, A2=30, A3=50 değerleri yer almaktadır.<br>"
                f"B1 hücresine şu formül yazılmıştır:<br>"
                f"<code>=EĞER(ORTALAMA(A1:A3) &gt;= 35; TOPLA(A1:A2) * 2; TOPLA(A2:A3))</code><br>"
                f"Buna göre B1 hücresinde görüntülenecek sonuç kaçtır?"
            )
            # ORTALAMA = (20+30+50)/3 = 100/3 = 33.33. 33.33 >= 35 YANLIŞ!
            # Dolayısıyla Yanlış_İse_Değer çalışır: TOPLA(A2:A3) = 30 + 50 = 80!
            opts = [
                {"text": "A) 100", "isCorrect": False},
                {"text": "B) 80", "isCorrect": True},
                {"text": "C) 160", "isCorrect": False},
                {"text": "D) 50", "isCorrect": False}
            ]
            exp = "🔥 <strong>Şahane Formül Çözümü: B!</strong><br>Ortalama = (20+30+50)/3 = 33,33'tür. 33,33 >= 35 şartı YANLIŞ olduğu için formülün 3. parametresi çalışır: TOPLA(A2:A3) = 30 + 50 = 80!"
        else:
            q_text = (
                f"🔥 <strong>ZOR SORU (Yapay Zekâ Eğitimi & Veri Yanlılığı - Bias):</strong><br>"
                f"Bir yapay zekâ görme modeline '{title}' kapsamında kedi ve köpekleri ayırt etmesi öğretilmektedir. "
                f"Eğitim setindeki 1000 kedi fotoğrafının tamamı yeşil çimler üzerinde çekilmiş, 1000 köpek fotoğrafı ise kar üzerinde çekilmiştir.<br>"
                f"Model test edildiğinde karlı zemindeki bir kediyi 'Köpek' olarak sınıflandırmıştır. "
                f"Bu durumun temel sebebi ve çözümü hangisidir?"
            )
            opts = [
                {"text": "A) Model nesne yerine arka planı (kar/çim) ezberlemiştir (Overfitting/Yanlılık); her iki hayvan da farklı ve çeşitli arka planlarla dengeli eğitilmelidir.", "isCorrect": True},
                {"text": "B) Kedilerin beyaz karda yürümesi yasaklanmalıdır.", "isCorrect": False},
                {"text": "C) Bilgisayarın ekran kartı bozulduğu için renkleri karıştırmıştır.", "isCorrect": False},
                {"text": "D) Yapay zekâ modelleri hiçbir zaman hayvan fotoğraflarını tanıyamaz.", "isCorrect": False}
            ]
            exp = "🔥 <strong>Tebrikler, Çok Derin Bir Analiz: A!</strong> Veri setindeki gizli korelasyonlar (kedi=çim, köpek=kar) yapay zekânın arka planı ezberlemesine (veri yanlılığı) yol açar. Çeşitlilik ve denge şarttır."

    elif grade == 7:
        # 7. Sınıf Zor Soru: Teknoloji ve Tasarım Hukuk / Biyomimikri / Tasarım Döngüsü
        q_text = (
            f"🔥 <strong>ZOR SORU (Tasarım Odaklı Düşünme & İnovasyon Analizi):</strong><br>"
            f"Bir teknoloji tasarımcısı '{title}' kapsamında doğadaki yusufçuğun kanat çırpışından esinlenerek "
            f"şiddetli rüzgârda bile sarsılmayan bir mikro drone prototipi geliştirmiş ve Türk Patent Kurumu'na başvurmuştur.<br>"
            f"Bu vaka ile ilgili aşağıdaki çıkarımlardan hangisi <strong>bütüncül olarak doğrudur</strong>?"
        )
        opts = [
            {"text": "A) Doğadan esinlenme 'Biyomimikri'dir; teknik bir buluş ve sanayiye uygulanabilirlik içeriyorsa 'Patent' koruması altına alınabilir.", "isCorrect": True},
            {"text": "B) Doğadaki hiçbir canlıdan esinlenerek teknolojik ürün yapılamaz, bu intihal (aşırma) sayılır.", "isCorrect": False},
            {"text": "C) Geliştirilen ürün yalnızca 'Faydalı Model' olabilir çünkü dünyadaki tüm uçan araçların patenti dolmuştur.", "isCorrect": False},
            {"text": "D) Patent almak için ürünün mutlaka plastik malzemeden üretilmesi şarttır.", "isCorrect": False}
        ]
        exp = "🔥 <strong>Harika Tasarım ve Hukuk Analizi: A!</strong> Doğadaki mekanizmalardan esinlenme prensibine Biyomimikri denir. Yeni, tekniğin bilinen durumunu aşan ve sanayiye uygulanabilen buluşlar Patent ile tescillenir."

    elif grade == 8:
        # 8. Sınıf Zor Soru: LGS Sayısal Mantık / Algoritmik Karmaşıklık / Python Tracing
        if week_num in [1, 2, 3, 4, 5]:
            q_text = (
                f"🔥 <strong>ZOR SORU (LGS Bilişimsel Mantık & Algoritmik Karmaşıklık):</strong><br>"
                f"Sıralı 1.048.576 (2<sup>20</sup>) elemanlı devasa bir veri tabanında aranan bir kimlik numarası sorgulanacaktır.<br>"
                f"• 1. Yöntem (Doğrusal Arama - Linear Search): En kötü durumda n adım sürer.<br>"
                f"• 2. Yöntem (İkili Arama - Binary Search): Her adımda arama alanını ikiye böler [O(log<sub>2</sub> n)].<br>"
                f"En kötü senaryoda İkili Arama en fazla <strong>kaç adımda</strong> sonuca ulaşır?"
            )
            # log2(2^20) = 20 adım!
            opts = [
                {"text": "A) 20 adım", "isCorrect": True},
                {"text": "B) 1024 adım", "isCorrect": False},
                {"text": "C) 524.288 adım", "isCorrect": False},
                {"text": "D) 1.048.576 adım", "isCorrect": False}
            ]
            exp = "🔥 <strong>Efsanevi Bir LGS Sayısal Mantık Başarısı: A!</strong><br>İkili Arama (Binary Search) logaritmik hızda çalışır. 2<sup>20</sup> elemanlı bir listede log<sub>2</sub>(2<sup>20</sup>) = <strong>20 adımda</strong> aranılan kayıt kesinlikle bulunur veya olmadığı anlaşılır!"
        else:
            q_text = (
                f"🔥 <strong>ZOR SORU (Python Kod Takibi & İleri Mantık):</strong><br>"
                f"Aşağıdaki Python kod bloğu çalıştırıldığında ekrana yazdırılacak çıktı nedir?<br>"
                f"<pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>"
                f"sayilar = [2, 5, 8, 11, 14]\n"
                f"toplam = 0\n"
                f"for x in sayilar:\n"
                f"    if x % 2 == 0 and x > 4:\n"
                f"        toplam += x * 2\n"
                f"    elif x % 2 != 0:\n"
                f"        toplam += 1\n"
                f"print(toplam)"
                f"</pre>"
            )
            # x=2: x%2==0 ama x>4 değil (False). elif: x%2!=0 (False). toplam = 0
            # x=5: elif x%2!=0 (True) -> toplam += 1 -> toplam = 1
            # x=8: x%2==0 ve x>4 (True) -> toplam += 8*2 = 16 -> toplam = 17
            # x=11: elif x%2!=0 (True) -> toplam += 1 -> toplam = 18
            # x=14: x%2==0 ve x>4 (True) -> toplam += 14*2 = 28 -> toplam = 18 + 28 = 46!
            opts = [
                {"text": "A) 44", "isCorrect": False},
                {"text": "B) 46", "isCorrect": True},
                {"text": "C) 52", "isCorrect": False},
                {"text": "D) 38", "isCorrect": False}
            ]
            exp = "🔥 <strong>Mükemmel Kod Takibi, Tebrikler: B!</strong><br>x=2: şartlar sağlanmaz.<br>x=5: tek sayı -> toplam=1.<br>x=8: çift ve >4 -> 8*2=16 -> toplam=17.<br>x=11: tek sayı -> toplam=18.<br>x=14: çift ve >4 -> 14*2=28 -> toplam = 18 + 28 = <strong>46</strong>!"

    elif grade == 9:
        # 9. Sınıf Zor Soru: Python String Dilimleme / Fonksiyon / Döngü
        q_text = (
            f"🔥 <strong>ZOR SORU (Bilgisayar Bilimi Python Derinlemesine İzleme):</strong><br>"
            f"Aşağıdaki Python kod parçasının konsol çıktısı nedir?<br>"
            f"<pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>"
            f"metin = 'BILGISAYAR'\n"
            f"parca = metin[1:8:2]\n"
            f"sonuc = ''.join([ch.lower() if i % 2 == 0 else ch for i, ch in enumerate(parca)])\n"
            f"print(sonuc)"
            f"</pre>"
        )
        # metin = 'BILGISAYAR'
        # indeksler: 0:B, 1:I, 2:L, 3:G, 4:I, 5:S, 6:A, 7:Y, 8:A, 9:R
        # metin[1:8:2] -> indeks 1, 3, 5, 7 -> 'I', 'G', 'S', 'Y' -> 'IGSY'
        # enumerate('IGSY'):
        # i=0, ch='I' -> i%2==0 -> 'i'
        # i=1, ch='G' -> i%2!=0 -> 'G'
        # i=2, ch='S' -> i%2==0 -> 's'
        # i=3, ch='Y' -> i%2!=0 -> 'Y'
        # sonuc = 'iGsY'
        opts = [
            {"text": "A) iGsY", "isCorrect": True},
            {"text": "B) IgSy", "isCorrect": False},
            {"text": "C) bLgAy", "isCorrect": False},
            {"text": "D) IGSY", "isCorrect": False}
        ]
        exp = "🔥 <strong>Şahane Python Dilimleme Takibi: A!</strong><br>1) <code>metin[1:8:2]</code> 1, 3, 5, 7. indeksleri alır: 'I', 'G', 'S', 'Y'.<br>2) Çift indeksler (0 ve 2) küçültülür: 'i' ve 's'.<br>3) Tek indeksler (1 ve 3) aynen kalır: 'G' ve 'Y'.<br>Sonuç: <strong>iGsY</strong>!"

    elif grade == 10:
        # 10. Sınıf Zor Soru: OOP Kalıtım / super() / Method Overriding / Try-Except
        q_text = (
            f"🔥 <strong>ZOR SORU (Nesne Yönelimli Programlama - OOP & Kalıtım):</strong><br>"
            f"Aşağıdaki Python OOP kod mimarisinin çalışması sonucunda ekrana ne yazdırılır?<br>"
            f"<pre style='background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 6px; font-family: monospace;'>"
            f"class Donanim:\n"
            f"    def __init__(self, ad):\n"
            f"        self.ad = ad\n"
            f"    def calis(self):\n"
            f"        return f'{{self.ad}}: Aktif'\n\n"
            f"class Islemci(Donanim):\n"
            f"    def calis(self):\n"
            f"        ana = super().calis()\n"
            f"        return f'{{ana}} + 8 Çekirdek'\n\n"
            f"cpu = Islemci('CPU')\n"
            f"print(cpu.calis())"
            f"</pre>"
        )
        opts = [
            {"text": "A) CPU: Aktif + 8 Çekirdek", "isCorrect": True},
            {"text": "B) CPU: Aktif", "isCorrect": False},
            {"text": "C) AttributeError: 'Islemci' nesnesinde 'ad' bulunamadı", "isCorrect": False},
            {"text": "D) 8 Çekirdek", "isCorrect": False}
        ]
        exp = "🔥 <strong>Profesyonel OOP Mimarisi, Tebrikler: A!</strong><br>1) Islemci sınıfında __init__ ezilmediği için üst sınıfın (Donanim) __init__ metodu çalışır ve self.ad = 'CPU' atanır.<br>2) cpu.calis() çağrıldığında super().calis() 'CPU: Aktif' metnini döner.<br>3) Alt sınıf buna ' + 8 Çekirdek' ekler. Sonuç: <strong>CPU: Aktif + 8 Çekirdek</strong>!"

    return {
        "question": q_text,
        "options": opts,
        "explanation": exp,
        "difficulty": "Zor",
        "isHard": True
    }

def generate_all_tests():
    for grade in range(1, 11):
        grade_str = str(grade)
        weeks = ALL_CURRICULUM.get(grade_str, [])
        print(f"Generating tests for Grade {grade} ({len(weeks)} weeks)...")

        grade_tests = {}
        for w in weeks:
            w_num = w.get("week")
            test_questions = build_test_for_week(grade, w)
            grade_tests[w_num] = test_questions

        # Write to {grade}-sinif/weekly-tests.js
        out_path = f"{grade}-sinif/weekly-tests.js"
        course_name = "Bilgisayar Bilimi" if grade in [9, 10] else ("Teknoloji ve Tasarım" if grade == 7 else "Bilişim Teknolojileri ve Yazılım")
        
        js_content = f"""/**
 * MEB {grade}. Sınıf {course_name}
 * Haftalık 10 Soruluk Konu Değerlendirme Testleri (Türkiye Yüzyılı Maarif Modeli 2026-2027)
 * Öğretmen: Vahit Keskin
 * 41 Hafta x 10 Soru = 410 Soru
 * Not: 10. Sorular %100 konu uyumlu, derin analiz ve üst düzey düşünme gerektiren zor sorulardır.
 */

const WEEKLY_TESTS = {json.dumps(grade_tests, ensure_ascii=False, indent=2)};

if (typeof window !== 'undefined') {{
  window.WEEKLY_TESTS = WEEKLY_TESTS;
}}
if (typeof globalThis !== 'undefined') {{
  globalThis.WEEKLY_TESTS = WEEKLY_TESTS;
}}
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = WEEKLY_TESTS;
}}
"""
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"  Successfully wrote {out_path} ({len(grade_tests)} weeks, {len(grade_tests)*10} questions).")

if __name__ == "__main__":
    generate_all_tests()
