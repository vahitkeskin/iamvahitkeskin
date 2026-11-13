# -*- coding: utf-8 -*-
"""
1-12. Sınıf Tüm MEB Dersleri İçin Soru Üretici Motoru
Matematik, Fizik, Kimya, Biyoloji, Türkçe, Edebiyat, Tarih, Coğrafya, Felsefe vb.
tüm dersleri hem statik MEB müfredatı hem de dinamik algoritmik soru motoruyla destekler.
"""

import random
import re

# Sınıflara göre okutulan temel dersler
GRADE_DEFAULT_LESSONS = {
    "1": ["Türkçe", "Matematik", "Hayat Bilgisi", "Bilişim ve Kodlama", "Serbest Etkinlikler"],
    "2": ["Türkçe", "Matematik", "Hayat Bilgisi", "İngilizce", "Bilişim ve Kodlama"],
    "3": ["Türkçe", "Matematik", "Fen Bilimleri", "Hayat Bilgisi", "İngilizce", "Bilişim ve Kodlama"],
    "4": ["Türkçe", "Matematik", "Fen Bilimleri", "Sosyal Bilgiler", "Din Kültürü ve Ahlak Bilgisi", "İngilizce", "Bilişim ve Kodlama"],
    "5": ["Bilişim Teknolojileri ve Yazılım", "Matematik", "Fen Bilimleri", "Türkçe", "Sosyal Bilgiler", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"],
    "6": ["Bilişim Teknolojileri ve Yazılım", "Matematik", "Fen Bilimleri", "Türkçe", "Sosyal Bilgiler", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"],
    "7": ["Bilişim Teknolojileri ve Yazılım", "Teknoloji Tasarım", "Matematik", "Fen Bilimleri", "Türkçe", "Sosyal Bilgiler", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"],
    "8": ["Bilişim Teknolojileri ve Yazılım", "Teknoloji Tasarım", "Matematik", "Fen Bilimleri", "Türkçe", "T.C. İnkılap Tarihi ve Atatürkçülük", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"],
    "9": ["Bilgisayar Bilimi", "Matematik", "Fizik", "Kimya", "Biyoloji", "Türk Dili ve Edebiyatı", "Tarih", "Coğrafya", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"],
    "10": ["Bilgisayar Bilimi", "Matematik", "Fizik", "Kimya", "Biyoloji", "Türk Dili ve Edebiyatı", "Tarih", "Coğrafya", "Felsefe", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"],
    "11": ["Bilgisayar Bilimi", "Matematik", "Fizik", "Kimya", "Biyoloji", "Türk Dili ve Edebiyatı", "Tarih", "Coğrafya", "Felsefe", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"],
    "12": ["Bilgisayar Bilimi", "Matematik", "Fizik", "Kimya", "Biyoloji", "Türk Dili ve Edebiyatı", "T.C. İnkılap Tarihi ve Atatürkçülük", "Coğrafya", "İngilizce", "Din Kültürü ve Ahlak Bilgisi"]
}

def tr_lower(text):
    return str(text).replace("İ", "i").replace("I", "ı").lower()

def detect_subject_from_text(text):
    if not text:
        return "Bilişim Teknolojileri ve Yazılım"
    t = str(text).strip()
    t = re.sub(r"^\s*\d+\s*[\.\-]?\s*(SINIF|Sınıf|sinif)\s*[\:\-]?\s*", "", t, flags=re.IGNORECASE).strip()
    t = re.sub(r"\s*\(?\s*(?:KUR|Kur)\s*[12]\s*\)?", "", t, flags=re.IGNORECASE).strip()
    if ":" in t:
        t = t.split(":")[0].strip()
    t_lower = tr_lower(t)
    
    if "matematik" in t_lower:
        return "Matematik"
    if "fizik" in t_lower:
        return "Fizik"
    if "kimya" in t_lower:
        return "Kimya"
    if "biyoloji" in t_lower:
        return "Biyoloji"
    if "fen" in t_lower:
        return "Fen Bilimleri"
    if "edebiyat" in t_lower or "türk dili" in t_lower or "turk dili" in t_lower:
        return "Türk Dili ve Edebiyatı"
    if "türkçe" in t_lower or "turkce" in t_lower:
        return "Türkçe"
    if "tarih" in t_lower:
        if "inkılap" in t_lower or "inkilap" in t_lower or "atatürk" in t_lower:
            return "T.C. İnkılap Tarihi ve Atatürkçülük"
        return "Tarih"
    if "inkılap" in t_lower or "inkilap" in t_lower:
        return "T.C. İnkılap Tarihi ve Atatürkçülük"
    if "sosyal" in t_lower:
        return "Sosyal Bilgiler"
    if "coğrafya" in t_lower or "cografya" in t_lower:
        return "Coğrafya"
    if "felsefe" in t_lower:
        return "Felsefe"
    if "ingilizce" in t_lower or "english" in t_lower:
        return "İngilizce"
    if "din" in t_lower or "ahlak" in t_lower:
        return "Din Kültürü ve Ahlak Bilgisi"
    if "hayat" in t_lower:
        return "Hayat Bilgisi"
    if "teknoloji tasarım" in t_lower or "teknoloji ve tasarım" in t_lower:
        return "Teknoloji Tasarım"
    if "bilgisayar" in t_lower:
        return "Bilgisayar Bilimi"
    if "bilişim" in t_lower or "bilisim" in t_lower or "kodlama" in t_lower or "yazılım" in t_lower:
        return "Bilişim Teknolojileri ve Yazılım"
    return t

# --------------------------------------------------------------------------
# Algoritmik Matematik Soru Motoru (1-12. Sınıf)
# --------------------------------------------------------------------------
def generate_dynamic_math_question(grade, difficulty="kolay"):
    g = int(grade) if str(grade).isdigit() else 5
    
    if g == 1:
        ops = [
            ("Ali'nin {a} kalemi vardı. Öğretmeni ona {b} kalem daha hediye etti. Ali'nin toplam kaç kalemi oldu?", lambda a, b: a + b),
            ("Bahçedeki ağaçta {a} kuş vardı. {b} tanesi uçup gitti. Ağaçta kaç kuş kaldı?", lambda a, b: a - b),
            ("{a} ile {b} sayılarının toplamı kaçtır?", lambda a, b: a + b)
        ]
        q_tpl, fn = random.choice(ops)
        a = random.randint(5, 12)
        b = random.randint(1, a - 1 if "kaldı" in q_tpl else 8)
        ans = fn(a, b)
        return {
            "topic": "Matematik: Doğal Sayılarla Toplama ve Çıkarma",
            "question": q_tpl.format(a=a, b=b),
            "answer": f"{ans}"
        }
        
    elif g == 2:
        kind = random.choice(["carpma", "toplama", "ayak"])
        if kind == "carpma":
            a = random.randint(2, 5)
            b = random.randint(3, 9)
            return {
                "topic": "Matematik: Çarpma İşlemi ve Katlar",
                "question": f"Her birinde {b} elma bulunan {a} sepet elmanın toplam sayısı kaçtır? ({a} x {b})",
                "answer": f"{a * b} elma"
            }
        elif kind == "ayak":
            tavuk = random.randint(3, 8)
            koyun = random.randint(2, 6)
            ans = tavuk * 2 + koyun * 4
            return {
                "topic": "Matematik: Dört İşlem Problemleri",
                "question": f"Bir çiftlikte {tavuk} tavuk ve {koyun} koyun bulunmaktadır. Bu hayvanların toplam ayak sayısı kaçtır?",
                "answer": f"{ans} ayak ({tavuk} x 2 = {tavuk*2}, {koyun} x 4 = {koyun*4} -> {ans})"
            }
        else:
            a = random.randint(25, 60)
            b = random.randint(15, 35)
            return {
                "topic": "Matematik: İki Basamaklı Sayılarla İşlemler",
                "question": f"{a} + {b} işleminin sonucu kaçtır?",
                "answer": f"{a + b}"
            }
            
    elif g == 3:
        kind = random.choice(["bolme", "carpma", "geometri"])
        if kind == "bolme":
            b = random.randint(3, 8)
            q_res = random.randint(4, 9)
            a = b * q_res
            return {
                "topic": "Matematik: Kalansız Bölme İşlemi",
                "question": f"{a} tane cevizi {b} kardeş eşit şekilde paylaştığında her birine kaç ceviz düşer?",
                "answer": f"{q_res} ceviz ({a} / {b} = {q_res})"
            }
        elif kind == "carpma":
            a = random.randint(12, 25)
            b = random.randint(3, 7)
            return {
                "topic": "Matematik: Çarpma ve Kat Problemleri",
                "question": f"Tanesi {a} TL olan defterlerden {b} tane alan bir öğrenci satıcıya kaç TL öder?",
                "answer": f"{a * b} TL"
            }
        else:
            k = random.randint(6, 15)
            return {
                "topic": "Matematik: Geometrik Şekiller ve Çevre",
                "question": f"Bir kenar uzunluğu {k} cm olan bir karenin çevre uzunluğu kaç cm'dir?",
                "answer": f"{k * 4} cm (4 x {k} = {k*4})"
            }
            
    elif g == 4:
        kind = random.choice(["kesir", "alan", "dort_islem"])
        if kind == "kesir":
            payda = random.choice([4, 5, 8, 10])
            pay = random.randint(2, payda - 1)
            sayi = payda * random.randint(6, 15)
            ans = (sayi // payda) * pay
            return {
                "topic": "Matematik: Kesirler ve Çoklukların Kesir Değeri",
                "question": f"{sayi} sayısının {pay}/{payda}'i kaçtır?",
                "answer": f"{ans} ({sayi} ÷ {payda} = {sayi//payda}, {sayi//payda} x {pay} = {ans})"
            }
        elif kind == "alan":
            a = random.randint(6, 14)
            b = random.randint(15, 25)
            return {
                "topic": "Matematik: Dikdörtgende Alan Hesabı",
                "question": f"Kısa kenarı {a} metre, uzun kenarı {b} metre olan dikdörtgen biçimindeki bir salonun alanı kaç metrekaredir?",
                "answer": f"{a * b} m² ({a} x {b} = {a * b})"
            }
        else:
            x = random.randint(120, 350)
            y = random.randint(80, 210)
            z = random.randint(50, 150)
            return {
                "topic": "Matematik: Dört Basamaklı Doğal Sayılar",
                "question": f"{x} + {y} - {z} işleminin sonucu kaçtır?",
                "answer": f"{x + y - z}"
            }
            
    elif g == 5:
        kind = random.choice(["uslu", "yuzde", "kesir_topla"])
        if kind == "uslu":
            taban = random.choice([2, 3, 4, 5, 6, 7])
            us = random.choice([2, 3])
            ans = taban ** us
            return {
                "topic": "Matematik: Doğal Sayılarda Üslü İfadeler",
                "question": f"{taban}^{us} üslü ifadesinin sayısal değeri kaçtır?",
                "answer": f"{ans} ({taban} x {taban if us == 2 else f'{taban} x {taban}'} = {ans})"
            }
        elif kind == "yuzde":
            yuzde = random.choice([10, 20, 25, 40, 50])
            sayi = random.choice([120, 150, 200, 250, 300, 400])
            ans = (sayi * yuzde) // 100
            return {
                "topic": "Matematik: Yüzdeler ve Orantı",
                "question": f"{sayi} TL tutarındaki bir montta %{yuzde} indirim yapılırsa indirim tutarı kaç TL olur?",
                "answer": f"{ans} TL ({sayi} x {yuzde}/100 = {ans})"
            }
        else:
            p1, p2 = random.choice([(1, 3), (2, 5), (3, 7)])
            payda = 12
            k1 = payda // p2
            return {
                "topic": "Matematik: Kesirlerle Toplama İşlemi",
                "question": f"1/{p2} + 3/{p2} işleminin sonucu en sade haliyle kaçtır?",
                "answer": f"4/{p2}"
            }
            
    elif g == 6:
        kind = random.choice(["tam_sayi", "islem_onceligi", "oran"])
        if kind == "tam_sayi":
            a = random.randint(-15, -3)
            b = random.randint(5, 18)
            c = random.randint(-8, -1)
            ans = a + b - c
            return {
                "topic": "Matematik: Tam Sayılarla İşlemler",
                "question": f"({a}) + (+{b}) - ({c}) işleminin sonucu kaçtır?",
                "answer": f"{ans}"
            }
        elif kind == "islem_onceligi":
            a = random.randint(3, 8)
            b = random.randint(2, 6)
            c = random.randint(4, 9)
            ans = a + b * c
            return {
                "topic": "Matematik: İşlem Önceliği",
                "question": f"{a} + {b} x {c} işleminin sonucu işlem önceliği kuralına göre kaçtır?",
                "answer": f"{ans} (Önce çarpma: {b} x {c} = {b*c}, ardından toplama: {a} + {b*c} = {ans})"
            }
        else:
            kiz = random.randint(12, 18)
            erkek = random.randint(10, 16)
            return {
                "topic": "Matematik: Oran Kavramı",
                "question": f"Bir sınıfta {kiz} kız ve {erkek} erkek öğrenci vardır. Sınıftaki kız öğrencilerin sayısının erkek öğrencilerin sayısına oranı nedir?",
                "answer": f"{kiz}/{erkek}"
            }
            
    elif g == 7:
        kind = random.choice(["denklem", "rasyonel", "yuzde_artis"])
        if kind == "denklem":
            x_val = random.randint(3, 9)
            kat = random.choice([2, 3, 4, 5])
            sabit = random.randint(3, 15)
            sonuc = kat * x_val - sabit
            return {
                "topic": "Matematik: Birinci Dereceden Bir Bilinmeyenli Denklemler",
                "question": f"{kat}x - {sabit} = {sonuc} denklemini sağlayan x değeri kaçtır?",
                "answer": f"x = {x_val} ({kat}x = {sonuc + sabit} -> x = {x_val})"
            }
        elif kind == "rasyonel":
            return {
                "topic": "Matematik: Rasyonel Sayılarla Çarpma",
                "question": f"(-3/4) x (2/5) işleminin sonucunu en sade biçimde yazınız.",
                "answer": "-3/10 (Paylar çarpımı -6, paydalar çarpımı 20; sadeleşince -3/10)"
            }
        else:
            fiyat = random.choice([200, 300, 400, 500])
            zam = random.choice([15, 20, 25, 30])
            yeni = fiyat + (fiyat * zam) // 100
            return {
                "topic": "Matematik: Yüzde Problemleri ve Artış",
                "question": f"{fiyat} TL olan bir ürüne %{zam} zam yapılırsa ürünün yeni fiyatı kaç TL olur?",
                "answer": f"{yeni} TL (Zam tutarı: {fiyat * zam // 100} TL, Yeni fiyat: {fiyat} + {fiyat * zam // 100} = {yeni} TL)"
            }
            
    elif g == 8:
        kind = random.choice(["karekok", "ebob_ekok", "ozdeslik"])
        if kind == "karekok":
            a = random.choice([2, 3, 5])
            k1 = random.choice([3, 4, 5])
            k2 = random.choice([2, 3])
            ans = k1 + k2
            return {
                "topic": "Matematik: Kareköklü İfadelerle Toplama (LGS)",
                "question": f"√{(k1**2)*a} + √{(k2**2)*a} işleminin sonucunu a√b biçiminde en sade yazınız.",
                "answer": f"{ans}√{a} ({k1}√{a} + {k2}√{a} = {ans}√{a})"
            }
        elif kind == "ebob_ekok":
            return {
                "topic": "Matematik: Çarpanlar ve Katlar (EBOB / EKOK)",
                "question": "24 ve 36 sayılarının En Büyük Ortak Böleni (EBOB) kaçtır?",
                "answer": "12 (24 = 2³ x 3, 36 = 2² x 3² -> EBOB = 2² x 3 = 12)"
            }
        else:
            return {
                "topic": "Matematik: Cebirsel İfadeler ve Özdeşlikler",
                "question": "(x + 4)² tam kare özdeşliğinin açılımını yazınız.",
                "answer": "x² + 8x + 16 (Birincinin karesi + iki katı + ikincinin karesi)"
            }
            
    elif g == 9:
        kind = random.choice(["mutlak", "kumeler", "ucgen_aci"])
        if kind == "mutlak":
            c = random.randint(2, 6)
            k = random.randint(4, 9)
            return {
                "topic": "Matematik: Mutlak Değerli Denklemler",
                "question": f"|x - {c}| = {k} denklemini sağlayan x gerçek sayı değerlerinin toplamı kaçtır?",
                "answer": f"{2 * c} (x - {c} = {k} -> x₁ = {c+k}; x - {c} = -{k} -> x₂ = {c-k}; Toplam = {2*c})"
            }
        elif kind == "kumeler":
            return {
                "topic": "Matematik: Kümelerde Eleman Sayısı",
                "question": "s(A) = 8, s(B) = 6 ve s(A ∩ B) = 3 olduğuna göre s(A ∪ B) birleşim kümesinin eleman sayısı kaçtır?",
                "answer": "11 (s(A ∪ B) = s(A) + s(B) - s(A ∩ B) = 8 + 6 - 3 = 11)"
            }
        else:
            a = random.choice([40, 50, 60, 70])
            b = random.choice([30, 45, 55, 65])
            c = 180 - (a + b)
            return {
                "topic": "Matematik: Üçgende İç Açılar Toplamı",
                "question": f"Bir ABC üçgeninde m(A) = {a}° ve m(B) = {b}° olduğuna göre m(C) kaç derecedir?",
                "answer": f"{c}° (İç açılar toplamı 180° olduğundan: 180 - ({a} + {b}) = {c}°)"
            }
            
    elif g == 10:
        kind = random.choice(["fonksiyon", "polinom", "permutasyon"])
        if kind == "fonksiyon":
            m = random.randint(2, 5)
            n = random.randint(1, 7)
            x_val = random.randint(2, 5)
            return {
                "topic": "Matematik: Fonksiyonlar ve Değer Bulma",
                "question": f"f(x) = {m}x + {n} fonksiyonu verildiğine göre f({x_val}) değeri kaçtır?",
                "answer": f"{m * x_val + n} (f({x_val}) = {m} x {x_val} + {n} = {m * x_val + n})"
            }
        elif kind == "polinom":
            return {
                "topic": "Matematik: Polinomlarda Sabit Terim ve Katsayılar Toplamı",
                "question": "P(x) = 2x³ - 5x² + 4x + 7 polinomunun sabit terimini ve katsayılar toplamını bulunuz.",
                "answer": "Sabit terim P(0) = 7; Katsayılar toplamı P(1) = 2 - 5 + 4 + 7 = 8'dir."
            }
        else:
            return {
                "topic": "Matematik: Sayma ve Permütasyon",
                "question": "5 kişinin yan yana düz bir sıraya dizilerek fotoğraf çektirebileceği kaç farklı dizilim (P(5,5)) vardır?",
                "answer": "120 (5! = 5 x 4 x 3 x 2 x 1 = 120 farklı durum)"
            }
            
    elif g == 11:
        kind = random.choice(["trigonometri", "analitik", "parabol"])
        if kind == "trigonometri":
            return {
                "topic": "Matematik: Trigonometri (Özdeşlikler)",
                "question": "sin²(x) + cos²(x) temel trigonometrik özdeşliğinin eşitini yazınız ve tan(x) ile cot(x) çarpımının değerini belirtiniz.",
                "answer": "sin²(x) + cos²(x) = 1'dir. tan(x) . cot(x) = 1'dir."
            }
        elif kind == "analitik":
            m = random.choice([2, 3, 4, -2, -3])
            b = random.randint(1, 8)
            return {
                "topic": "Matematik: Analitik Geometri (Doğru Eğimi)",
                "question": f"Denklemi y = {m}x + {b} olan doğrunun eğimi (m) kaçtır?",
                "answer": f"{m} (y = mx + n formunda x'in katsayısı doğrunun eğimidir)"
            }
        else:
            return {
                "topic": "Matematik: Parabolün Tepe Noktası",
                "question": "f(x) = x² - 6x + 5 parabolünün tepe noktasının koordinatlarını [T(r, k)] bulunuz.",
                "answer": "T(3, -4) (r = -b/(2a) = 6/2 = 3; k = f(3) = 9 - 18 + 5 = -4)"
            }
            
    else: # 12. Sınıf
        kind = random.choice(["turev", "integral", "logaritma"])
        if kind == "turev":
            a = random.randint(2, 6)
            n = random.randint(2, 4)
            c = random.randint(1, 9)
            return {
                "topic": "Matematik: Türev Alma Kuralları (AYT)",
                "question": f"f(x) = {a}x^{n} + {c} fonksiyonunun birinci türevini [f'(x)] alınız.",
                "answer": f"f'(x) = {a * n}x^{n-1} (Kuvvet başa katsayı olarak geçer ve 1 eksilir)"
            }
        elif kind == "integral":
            k = random.choice([2, 4, 6])
            return {
                "topic": "Matematik: Belirsiz İntegral Hesabı (AYT)",
                "question": f"∫ {k}x dx belirsiz integralini hesaplayınız.",
                "answer": f"{k//2}x² + C (Üs 1 artırılıp paydaya yazılır: {k}x²/2 + C = {k//2}x² + C)"
            }
        else:
            taban = random.choice([2, 3, 5])
            us = random.choice([2, 3, 4])
            deger = taban ** us
            return {
                "topic": "Matematik: Logaritma Fonksiyonu (AYT)",
                "question": f"log_{taban}({deger}) ifadesinin değeri kaçtır?",
                "answer": f"{us} (Çünkü {taban}^{us} = {deger})"
            }

# --------------------------------------------------------------------------
# Algoritmik Fizik Soru Motoru (9-12. Sınıf)
# --------------------------------------------------------------------------
def generate_dynamic_physics_question(grade, difficulty="kolay"):
    g = int(grade) if str(grade).isdigit() else 9
    
    if g == 9:
        kind = random.choice(["kuvvet", "ozkutle", "isi"])
        if kind == "kuvvet":
            m = random.randint(2, 8)
            a = random.randint(2, 6)
            F = m * a
            return {
                "topic": "Fizik: Newton'ın II. Hareket Yasası (F = m.a)",
                "question": f"Kütlesi {m} kg olan sürtünmesiz yatay düzlemdeki bir cisme {F} N net kuvvet uygulandığında cismin ivmesi (a) kaç m/s² olur?",
                "answer": f"{a} m/s² (a = F_net / m = {F} / {m} = {a} m/s²)"
            }
        elif kind == "ozkutle":
            V = random.choice([10, 20, 50, 100])
            d = random.choice([2, 3, 4, 5])
            m = d * V
            return {
                "topic": "Fizik: Madde ve Özkütle (d = m / V)",
                "question": f"Kütlesi {m} gram, hacmi {V} cm³ olan saf bir katı maddenin özkütlesi kaç g/cm³'tür?",
                "answer": f"{d} g/cm³ (d = m / V = {m} / {V} = {d} g/cm³)"
            }
        else:
            return {
                "topic": "Fizik: Isı ve Sıcaklık Kavramları",
                "question": "Isı ile sıcaklık kavramları arasındaki iki temel farkı yazınız.",
                "answer": "1. Isı bir enerji türüdür (birimi Joule veya Kalori), sıcaklık ise enerjinin bir göstergesidir (birimi Kelvin/Celsius). 2. Isı kalorimetre kabıyla hesaplanır, sıcaklık termometreyle doğrudan ölçülür."
            }
            
    elif g == 10:
        kind = random.choice(["ohm", "basinc", "kaldirma"])
        if kind == "ohm":
            R = random.choice([2, 4, 5, 10])
            I = random.randint(2, 6)
            V = I * R
            return {
                "topic": "Fizik: Elektrik Devreleri ve Ohm Yasası (V = I.R)",
                "question": f"Direnci {R} Ω olan bir iletkenden {I} Amper akım geçebilmesi için iletkenin uçlarına kaç Volt gerilim uygulanmalıdır?",
                "answer": f"{V} Volt (V = I . R = {I} x {R} = {V} Volt)"
            }
        elif kind == "basinc":
            F = random.choice([60, 120, 200, 300])
            S = random.choice([2, 4, 5, 10])
            P = F // S
            return {
                "topic": "Fizik: Katı Basıncı (P = F / S)",
                "question": f"Taban alanı {S} m² olan bir cismin zemine uyguladığı dik kuvvet (ağırlık) {F} N olduğuna göre zemine yaptığı basınç kaç Pascal'dır (N/m²)?",
                "answer": f"{P} Pa (P = F / S = {F} / {S} = {P} Pascal)"
            }
        else:
            return {
                "topic": "Fizik: Sıvıların Kaldırma Kuvveti (Arşimet)",
                "question": "Sıvı içine bırakılan bir cismin yüzmesi, askıda kalması ve batması durumlarını cismin özkütlesi (dc) ve sıvının özkütlesi (ds) açısından yazınız.",
                "answer": "Yüzme: dc < ds. Askıda kalma: dc = ds. Batma: dc > ds."
            }
            
    elif g == 11:
        kind = random.choice(["serbest_dusme", "momentum", "bagil_hareket"])
        if kind == "serbest_dusme":
            t = random.randint(2, 5)
            h = 5 * (t ** 2)
            return {
                "topic": "Fizik: Bir Boyutta Sabit İvmeli Hareket (Serbest Düşme)",
                "question": f"Sürtünmelerin önemsenmediği ortamda serbest düşmeye bırakılan bir taş {h} m yüksekliği kaç saniyede tamamlayarak yere çarpar? (g = 10 m/s²)",
                "answer": f"{t} saniye (h = 1/2 g t² -> {h} = 5 t² -> t = {t} saniye)"
            }
        elif kind == "momentum":
            m = random.choice([2, 3, 4, 5])
            v = random.choice([10, 15, 20, 25])
            P = m * v
            return {
                "topic": "Fizik: İtme ve Çizgisel Momentum (P = m.v)",
                "question": f"Kütlesi {m} kg olan bir cisim {v} m/s hızla doğu yönünde hareket etmektedir. Bu cismin çizgisel momentum büyüklüğü kaç kg.m/s'dir?",
                "answer": f"{P} kg.m/s (P = m . v = {m} x {v} = {P} kg.m/s)"
            }
        else:
            v_k = random.choice([60, 70, 80])
            v_l = random.choice([30, 40, 50])
            return {
                "topic": "Fizik: Bağıl Hareket",
                "question": f"Doğuya doğru {v_k} km/h hızla giden K aracındaki sürücü, aynı yönde {v_l} km/h hızla giden L aracını hangi yönde ve hangi hızla görür?",
                "answer": f"Batı yönünde {abs(v_k - v_l)} km/h hızla (V_bağıl = V_gözlenen - V_gözlemci = {v_l} - {v_k} = -{abs(v_k - v_l)} km/h)"
            }
            
    else: # 12. Sınıf
        kind = random.choice(["cembersel", "fotoelektrik", "harmonik"])
        if kind == "cembersel":
            r = random.randint(2, 5)
            w = random.randint(2, 6)
            v = w * r
            return {
                "topic": "Fizik: Düzgün Çembersel Hareket (v = w.r)",
                "question": f"Yarıçapı {r} m olan dairesel pistte düzgün çembersel hareket yapan bir cismin açısal hızı {w} rad/s olduğuna göre çizgisel hızı (v) kaç m/s'dir?",
                "answer": f"{v} m/s (v = ω . r = {w} x {r} = {v} m/s)"
            }
        elif kind == "harmonik":
            return {
                "topic": "Fizik: Basit Harmonik Hareket",
                "question": "Basit harmonik hareket yapan bir yayın periyot formülünü (Tolga formülü) bileşenleriyle birlikte yazınız.",
                "answer": "T = 2π √(m/k) (m: kütle, k: yay sabiti, T: periyot)"
            }
        else:
            return {
                "topic": "Fizik: Modern Fizik ve Fotoelektrik Olay",
                "question": "Fotoelektrik olayda Einstein fotoelektrik denklemini yazarak eşik enerjisi kavramını açıklayınız.",
                "answer": "E_foton = E_bağlanma (Eşik) + E_kinetik. Eşik enerjisi, metal yüzeyinden elektron koparmak için gereken minimum foton enerjisidir."
            }

# --------------------------------------------------------------------------
# Zengin MEB Müfredatı Statik Soru Havuzu (1-12. Sınıf Tüm Dersler)
# --------------------------------------------------------------------------
SUBJECT_STATIC_QUESTIONS = {
    # --- MATEMATİK ---
    ("Matematik", "1"): [
        {"topic": "Matematik: Doğal Sayılar", "question": "1'den 20'ye kadar ileriye doğru ikişer ritmik sayarken 8'den sonra hangi sayı gelir?", "answer": "10"},
        {"topic": "Matematik: Toplama İşlemi", "question": "Bir vazoda 6 gül, diğer vazoda 7 gül vardır. İki vazoda toplam kaç gül vardır?", "answer": "13 gül (6 + 7 = 13)"},
        {"topic": "Matematik: Çıkarma İşlemi", "question": "15 elmanın 6 tanesi yenirse geriye kaç elma kalır?", "answer": "9 elma (15 - 6 = 9)"},
        {"topic": "Matematik: Geometrik Cisimler", "question": "Küp şekline benzeyen günlük hayattan iki nesne örneği veriniz.", "answer": "Zar ve hediye kutusu"},
        {"topic": "Matematik: Paralarımız", "question": "1 TL kaç tane 50 kuruştan oluşur?", "answer": "2 tane 50 kuruştan"}
    ],
    ("Matematik", "2"): [
        {"topic": "Matematik: Basamak Değeri", "question": "74 doğal sayısındaki '7' rakamının basamak değeri kaçtır?", "answer": "70 (Onlar basamağında olduğu için 7 x 10 = 70)"},
        {"topic": "Matematik: Çarpma İşlemi", "question": "Bir masanın 4 ayağı olduğuna göre 6 masanın toplam kaç ayağı vardır?", "answer": "24 ayak (6 x 4 = 24)"},
        {"topic": "Matematik: Bölme İşlemi", "question": "18 fındık 3 sincap arasında eşit paylaştırılırsa her sincaba kaç fındık düşer?", "answer": "6 fındık (18 ÷ 3 = 6)"},
        {"topic": "Matematik: Kesirler", "question": "Bir bütün elma kaç çeyrek elmaya eşittir?", "answer": "4 çeyrek elmaya eşittir"},
        {"topic": "Matematik: Zaman Ölçüleri", "question": "Bir günde kaç saat ve bir saatte kaç dakika vardır?", "answer": "Bir gün 24 saat, bir saat 60 dakikadır"}
    ],
    ("Matematik", "3"): [
        {"topic": "Matematik: Basamak Değeri", "question": "583 sayısının yüzler ve birler basamağındaki rakamların basamak değerleri toplamı kaçtır?", "answer": "503 (Yüzler: 500, Birler: 3 -> 500 + 3 = 503)"},
        {"topic": "Matematik: Çarpma İşlemi", "question": "Bir okul servisinde 16 koltuk vardır. 5 serviste toplam kaç koltuk bulunur?", "answer": "80 koltuk (16 x 5 = 80)"},
        {"topic": "Matematik: Kalanlı Bölme", "question": "27'yi 4'e böldüğümüzde bölüm ve kalan kaç olur?", "answer": "Bölüm: 6, Kalan: 3 (27 = 4 x 6 + 3)"},
        {"topic": "Matematik: Kesirler", "question": "Payı 3, paydası 8 olan kesri yazınız ve bu kesrin birim kesrini belirtiniz.", "answer": "Kesir: 3/8, Birim kesir: 1/8"},
        {"topic": "Matematik: Geometri", "question": "Üçgenin kaç köşesi ve kaç kenarı vardır?", "answer": "3 köşesi ve 3 kenarı vardır"}
    ],
    ("Matematik", "4"): [
        {"topic": "Matematik: Basamak Analizi", "question": "24.580 sayısının okunuşunu yazınız ve binler basamağındaki rakamı belirtiniz.", "answer": "Okunuşu: Yirmi dört bin beş yüz seksen. Binler basamağı: 4"},
        {"topic": "Matematik: Açılar", "question": "Ölçüsü 90 dereceden küçük olan açılara ve 90 derece olan açılara ne ad verilir?", "answer": "Dar açı ve Dik açı"},
        {"topic": "Matematik: Kesirlerle Toplama", "question": "2/7 + 3/7 işleminin sonucunu yazınız.", "answer": "5/7"},
        {"topic": "Matematik: Çevre ve Alan", "question": "Kısa kenarı 8 cm, uzun kenarı 12 cm olan dikdörtgenin çevresi kaç cm'dir?", "answer": "40 cm (2 x (8 + 12) = 40 cm)"},
        {"topic": "Matematik: Problem Çözme", "question": "Bir çiftçi 480 kg elmanın yarısını sattı. Kalan elmalar 6 kasaya eşit bölüştürülürse her kasada kaç kg elma olur?", "answer": "40 kg (Kalan: 240 kg, 240 ÷ 6 = 40 kg)"}
    ],
    ("Matematik", "5"): [
        {"topic": "Matematik: Doğal Sayılarla İşlemler", "question": "5³ - 4² işleminin sonucu kaçtır?", "answer": "109 (125 - 16 = 109)"},
        {"topic": "Matematik: Kesirlerde Sıralama", "question": "3/5, 7/10 ve 1/2 kesirlerini küçükten büyüğe sıralayınız.", "answer": "1/2 < 3/5 < 7/10 (Paydalar 10'da eşitlenirse: 5/10 < 6/10 < 7/10)"},
        {"topic": "Matematik: Ondalık Gösterim", "question": "0,75 ondalık gösteriminin en sade kesir karşılığı nedir?", "answer": "3/4 (75/100 sadeleşince 3/4)"},
        {"topic": "Matematik: Yüzdeler", "question": "240 TL olan bir pantolona %25 indirim yapılırsa yeni satış fiyatı kaç TL olur?", "answer": "180 TL (İndirim: 60 TL, 240 - 60 = 180 TL)"},
        {"topic": "Matematik: Temel Geometrik Kavramlar", "question": "Bir noktadan başlayıp sonsuza kadar giden düz çizgiye ne ad verilir?", "answer": "Işın"}
    ],
    ("Matematik", "6"): [
        {"topic": "Matematik: Çarpanlar ve Asal Sayılar", "question": "1'den 20'ye kadar olan asal sayıları sırasıyla yazınız.", "answer": "2, 3, 5, 7, 11, 13, 17, 19"},
        {"topic": "Matematik: İşlem Önceliği", "question": "24 ÷ 3 + 2 x 5 - 4 işleminin sonucu kaçtır?", "answer": "14 (8 + 10 - 4 = 14)"},
        {"topic": "Matematik: Tam Sayılar", "question": "|-12| + (-5) işleminin sonucu kaçtır?", "answer": "7 (12 - 5 = 7)"},
        {"topic": "Matematik: Kümeler", "question": "A = {1, 2, 3, 4, 5} ve B = {3, 4, 5, 6, 7} olduğuna göre A ∩ B kümesini yazınız.", "answer": "A ∩ B = {3, 4, 5}"},
        {"topic": "Matematik: Cebirsel İfadeler", "question": "3x - 5 ifadesinde x = 4 için elde edilen sayısal değer kaçtır?", "answer": "7 (3 x 4 - 5 = 7)"}
    ],
    ("Matematik", "7"): [
        {"topic": "Matematik: Tam Sayılarla Çarpma ve Bölme", "question": "(-4) x (+6) ÷ (-2) işleminin sonucu kaçtır?", "answer": "+12 (-24 ÷ -2 = +12)"},
        {"topic": "Matematik: Rasyonel Sayılar", "question": "Devirli ondalık gösterim olan 0,333... rasyonel olarak nasıl yazılır?", "answer": "1/3"},
        {"topic": "Matematik: Birinci Dereceden Denklemler", "question": "4x + 8 = 2x + 20 denklemini sağlayan x değeri kaçtır?", "answer": "x = 6 (2x = 12 -> x = 6)"},
        {"topic": "Matematik: Oran-Orantı", "question": "3 işçi bir işi 12 günde bitirirse aynı güçteki 6 işçi kaç günde bitirir?", "answer": "6 günde (Ters orantı: 3 x 12 = 6 x gün -> gün = 6)"},
        {"topic": "Matematik: Dairede Çevre ve Alan", "question": "Yarıçapı r = 5 cm olan çemberin çevre uzunluğu kaç cm'dir? (π = 3 alınız)", "answer": "30 cm (2 x π x r = 2 x 3 x 5 = 30 cm)"}
    ],
    ("Matematik", "8"): [
        {"topic": "Matematik: Çarpanlar ve Katlar (EBOB-EKOK)", "question": "Aralarında asal iki sayının EBOB'u ve EKOK'u hakkında ne söylenebilir?", "answer": "EBOB'ları 1'dir, EKOK'ları ise sayıların çarpımına eşittir."},
        {"topic": "Matematik: Üslü İfadeler (LGS)", "question": "2⁵ x 5⁵ işleminin sonucu kaç basamaklı bir sayıdır?", "answer": "6 basamaklıdır ((2x5)⁵ = 10⁵ = 100000 -> 6 basamak)"},
        {"topic": "Matematik: Kareköklü Sayılar", "question": "√48 sayısı hangi iki ardışık tam sayı arasındadır ve hangisine daha yakındır?", "answer": "6 ile 7 arasındadır (√36 < √48 < √49), 7'ye daha yakındır."},
        {"topic": "Matematik: Olasılık", "question": "Bir zar atıldığında üst yüze asal sayı gelme olasılığı kaçtır?", "answer": "1/2 (Asal sayılar: 2, 3, 5 -> 3/6 = 1/2)"},
        {"topic": "Matematik: Pisagor Teoremi", "question": "Dik kenarları 6 cm ve 8 cm olan dik üçgenin hipotenüs uzunluğu kaç cm'dir?", "answer": "10 cm (6² + 8² = 36 + 64 = 100 = 10²)"}
    ],
    ("Matematik", "9"): [
        {"topic": "Matematik: Mantık ve Önermeler", "question": "p ve q önermeleri için p ⇒ q koşullu önermesinin karşıt tersini yazınız.", "answer": "q' ⇒ p' (q'nun değili gerektirir p'nin değili)"},
        {"topic": "Matematik: Kümeler ve Kartezyen Çarpım", "question": "s(A) = 4 ve s(B) = 3 olduğuna göre s(A x B) kartezyen çarpımının eleman sayısı kaçtır?", "answer": "12 (4 x 3 = 12)"},
        {"topic": "Matematik: Mutlak Değer", "question": "|x| < 5 eşitsizliğinin çözüm aralığını yazınız.", "answer": "-5 < x < 5"},
        {"topic": "Matematik: Üslü ve Köklü Denklemler", "question": "2^(x+1) = 32 olduğuna göre x kaçtır?", "answer": "x = 4 (32 = 2⁵ -> x + 1 = 5 -> x = 4)"},
        {"topic": "Matematik: Üçgende Benzerlik", "question": "Benzerlik oranı 2/3 olan iki benzer üçgenin alanları oranı kaçtır?", "answer": "4/9 (Benzerlik oranının karesi alanlar oranına eşittir: (2/3)² = 4/9)"}
    ],
    ("Matematik", "10"): [
        {"topic": "Matematik: Permütasyon ve Kombinasyon", "question": "C(7, 2) kombinasyonunun değerini hesaplayınız.", "answer": "21 ((7 x 6) / (2 x 1) = 21)"},
        {"topic": "Matematik: Olasılık ve Binom", "question": "İki madeni para birlikte atıldığında en az birinin tura gelme olasılığı nedir?", "answer": "3/4 (Tüm durumlar: TT, TY, YT, YY; İstenen: 3/4)"},
        {"topic": "Matematik: Fonksiyonlar", "question": "f(x) = 2x + 3 ve g(x) = x - 1 olduğuna göre (fog)(x) bileşke fonksiyonunu bulunuz.", "answer": "2x + 1 ((fog)(x) = 2(x - 1) + 3 = 2x - 2 + 3 = 2x + 1)"},
        {"topic": "Matematik: İkinci Dereceden Denklemler", "question": "x² - 5x + 6 = 0 denkleminin köklerini bulunuz.", "answer": "x₁ = 2, x₂ = 3 ((x - 2)(x - 3) = 0)"},
        {"topic": "Matematik: Çokgenler ve Dörtgenler", "question": "İç açılarının ölçüleri toplamı 720° olan bir çokgen kaç kenarlıdır?", "answer": "6 kenarlıdır (Altıgen: (n - 2) x 180 = 720 -> n - 2 = 4 -> n = 6)"}
    ],
    ("Matematik", "11"): [
        {"topic": "Matematik: Trigonometri (Birim Çember)", "question": "sin(90°), cos(0°) ve tan(45°) değerlerini sırasıyla yazınız.", "answer": "1, 1, 1"},
        {"topic": "Matematik: Analitik Geometri", "question": "A(1, 2) ve B(4, 6) noktaları arasındaki uzaklığı formülle hesaplayınız.", "answer": "5 birim (√[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5)"},
        {"topic": "Matematik: Parabol ve Fonksiyonlar", "question": "f(x) = ax² + bx + c parabolünün kollarının yukarı doğru olması için 'a' katsayısının işareti ne olmalıdır?", "answer": "Pozitif (a > 0)"},
        {"topic": "Matematik: Çember ve Açı", "question": "Bir çemberde aynı yayı gören çevre açı ile merkez açı arasındaki ilişki nedir?", "answer": "Merkez açının ölçüsü, çevre açının ölçüsünün 2 katıdır."},
        {"topic": "Matematik: Eşitsizlik Sistemleri", "question": "x² - 9 < 0 eşitsizliğini sağlayan x tam sayıları kaç tanedir?", "answer": "5 tanedir (-3 < x < 3 aralığında: -2, -1, 0, 1, 2)"}
    ],
    ("Matematik", "12"): [
        {"topic": "Matematik: Logaritma (AYT)", "question": "log₂(8) + log₃(27) işleminin sonucu kaçtır?", "answer": "6 (3 + 3 = 6)"},
        {"topic": "Matematik: Diziler", "question": "İlk terimi 3, ortak farkı 4 olan bir aritmetik dizinin 10. terimi (a₁₀) kaçtır?", "answer": "39 (a₁₀ = a₁ + 9d = 3 + 9x4 = 39)"},
        {"topic": "Matematik: Limit", "question": "lim (x -> 3) (x² - 9) / (x - 3) limitinin değerini bulunuz.", "answer": "6 (0/0 belirsizliği sadeleşince: lim (x + 3) = 6)"},
        {"topic": "Matematik: Türev (Teğet Eğimi)", "question": "f(x) = x³ - 2x fonksiyonunun x = 2 noktasındaki teğetinin eğimi kaçtır?", "answer": "10 (f'(x) = 3x² - 2 -> f'(2) = 3(4) - 2 = 10)"},
        {"topic": "Matematik: Belirli İntegral", "question": "∫ (0'dan 2'ye) 3x² dx integralinin değerini hesaplayınız.", "answer": "8 ([x³] (0'dan 2'ye) = 2³ - 0³ = 8)"}
    ],

    # --- FİZİK (9-12) ---
    ("Fizik", "9"): [
        {"topic": "Fizik: Fizik Bilimine Giriş", "question": "SI birim sisteminde temel büyüklüklerden üç tanesini ve birimlerini yazınız.", "answer": "Kütle (Kilogram), Uzunluk (Metre), Zaman (Saniye)"},
        {"topic": "Fizik: Madde ve Dayanıklılık", "question": "Katı bir cismin boyutları aynı oranda artırıldığında dayanıklılığı nasıl değişir?", "answer": "Azalır (Dayanıklılık kesit alanı / hacim oranıyla yani 1/yükseklik ile ters orantılıdır)"},
        {"topic": "Fizik: Düzgün Doğrusal Hareket", "question": "Hız ile sürat arasındaki en temel fiziksel fark nedir?", "answer": "Hız vektörel bir büyüklüktür (yönü vardır), sürat ise skaler bir büyüklüktür (sadece büyüklüğü vardır)."},
        {"topic": "Fizik: Mekanik Enerji", "question": "Kinetik enerji ve yer çekimi potansiyel enerjisi formüllerini yazınız.", "answer": "E_k = 1/2 m v² ve E_p = m g h"},
        {"topic": "Fizik: Isı İletim Yolları", "question": "Isının yayılma yollarını (üç yöntem) yazınız.", "answer": "İletim (katılarda), Konveksiyon (sıvı ve gazlarda), Işıma (radyasyonla boşlukta)"}
    ],
    ("Fizik", "10"): [
        {"topic": "Fizik: Elektrik Akımı ve Direnç", "question": "Bir iletkenin direnci nelere bağlıdır? Formülüyle açıklayınız.", "answer": "R = ρ . L / A (Özdirenç, uzunluk ile doğru, kesit alanı ile ters orantılıdır)"},
        {"topic": "Fizik: Basınç (Pascal Prensibi)", "question": "Pascal prensibini açıklayınız ve teknolojideki iki kullanım alanını yazınız.", "answer": "Kapalı kaptaki sıvılar üzerlerine uygulanan basıncı her doğrultuda aynen iletir. Kullanım: Hidrolik frenler, hidrolik liftler."},
        {"topic": "Fizik: Dalgalar", "question": "Enine ve boyuna dalgalara birer örnek veriniz.", "answer": "Enine: Işık (Elektromanyetik dalgalar) veya Yay. Boyuna: Ses dalgaları."},
        {"topic": "Fizik: Optik (Işığın Kırılması)", "question": "Işık az yoğun ortamdan çok yoğun ortama geçerken doğrultusu ve hızı nasıl değişir?", "answer": "Normale yaklaşarak kırılır ve yayılma hızı azalır."},
        {"topic": "Fizik: Küresel Aynalar", "question": "Çukur aynanın merkezindeki bir cismin görüntüsü nerede ve nasıl oluşur?", "answer": "Merkezde, ters, gerçek ve cisimle aynı boyda oluşur."}
    ],
    ("Fizik", "11"): [
        {"topic": "Fizik: Vektörler ve Bağıl Hareket", "question": "Aralarındaki açı 90° olan 6 N ve 8 N büyüklüğündeki iki kuvvetin bileşkesi kaç N'dir?", "answer": "10 N (R = √(6² + 8²) = 10 N)"},
        {"topic": "Fizik: Atış Hareketleri (Yatay Atış)", "question": "Yatay atılan bir cismin yatay ve düşey eksendeki hareket türleri nelerdir?", "answer": "Yatayda sabit hızlı hareket, düşeyde serbest düşme (sabit ivmeli hareket) yapar."},
        {"topic": "Fizik: İtme ve Momentum", "question": "İtme (I) ile momentum değişimi (ΔP) arasındaki bağıntıyı yazınız.", "answer": "I = F . Δt = ΔP = P_son - P_ilk (İtme çizgisel momentum değişimine eşittir)"},
        {"topic": "Fizik: Tork ve Denge", "question": "Bir cismin dengede kalabilmesi için gerekli olan iki denge şartını yazınız.", "answer": "1. Toplam net kuvvet sıfır olmalıdır (ΣF = 0). 2. Herhangi bir noktaya göre toplam tork sıfır olmalıdır (Στ = 0)."},
        {"topic": "Fizik: Manyetik İndüksiyon (Lenz Yasası)", "question": "Faraday ve Lenz yasalarına göre indüksiyon akımının yönü nasıl belirlenir?", "answer": "İndüksiyon akımı, kendisini oluşturan manyetik akı değişimine karşı koyacak yönde oluşur."}
    ],
    ("Fizik", "12"): [
        {"topic": "Fizik: Çembersel Hareket (Merkezcil Kuvvet)", "question": "Düzgün çembersel hareket yapan m kütleli cismin merkezcil kuvvet formülünü yazınız.", "answer": "F_merkezcil = m . v² / r = m . ω² . r"},
        {"topic": "Fizik: Açısal Momentumun Korunumu", "question": "Dönen bir buz patencisi kollarını kapattığında dönme hızı neden artar?", "answer": "Kollar kapanınca eylemsizlik momenti (I) küçülür; açısal momentum (L = I.ω) korunduğu için açısal hız (ω) artar."},
        {"topic": "Fizik: Basit Harmonik Hareket", "question": "Basit harmonik hareket yapan bir sarkaçta hızın ve ivmenin maksimum olduğu noktalar nerelerdir?", "answer": "Hız denge konumunda maksimumdur (ivme sıfırdır); ivme ise genlik (uç) noktalarında maksimumdur (hız sıfırdır)."},
        {"topic": "Fizik: Dalga Mekaniği (Doppler Olayı)", "question": "Yaklaşan bir ambulansın siren sesinin daha tiz (yüksek frekanslı) algılanmasının sebebi nedir?", "answer": "Doppler olayı sebebiyle ses dalgaları sıkışır ve algılanan frekans artar."},
        {"topic": "Fizik: Özel Görelilik ve Modern Fizik", "question": "Einstein'ın Özel Görelilik Teorisinin iki temel postülatını yazınız.", "answer": "1. Fizik yasaları tüm eylemsiz referans sistemlerinde aynıdır. 2. Işık hızı tüm gözlemciler için sabittir (c = 3x10⁸ m/s) ve aşılamaz."}
    ],

    # --- KİMYA (9-12) ---
    ("Kimya", "9"): [
        {"topic": "Kimya: Atomun Yapısı", "question": "Bir atomun çekirdeğinde hangi tanecikler bulunur ve nükleon sayısı neye eşittir?", "answer": "Proton ve nötron bulunur. Nükleon sayısı = Proton + Nötron (Kütle Numarası)."},
        {"topic": "Kimya: Periyodik Tablo", "question": "Aynı grupta yukarıdan aşağıya doğru inildikçe atom yarıçapı ve elektronegatiflik nasıl değişir?", "answer": "Atom yarıçapı artar, elektronegatiflik genellikle azalır."},
        {"topic": "Kimya: Kimyasal Türler Arası Etkileşimler", "question": "İyonik bağ ve kovalent bağın oluşum mekanizmasını açıklayınız.", "answer": "İyonik bağ elektron alışverişiyle (metal-ametal), kovalent bağ elektron ortaklaşmasıyla (ametal-ametal) oluşur."}
    ],
    ("Kimya", "10"): [
        {"topic": "Kimya: Mol Kavramı", "question": "1 mol gaz normal şartlar altında (NŞA) kaç litre hacim kaplar ve Avogadro sayısı kaçtır?", "answer": "22,4 litre hacim kaplar. Avogadro sayısı: 6,02 x 10²³."},
        {"topic": "Kimya: Asitler ve Bazlar", "question": "Asitlerin ve bazların pH aralıklarını ve turnusol kağıdına etkilerini yazınız.", "answer": "Asit: pH < 7 (Turnusolu kırmızıya çevirir). Baz: pH > 7 (Turnusolu maviye çevirir)."}
    ],
    ("Kimya", "11"): [
        {"topic": "Kimya: Gazlar (İdeal Gaz Yasası)", "question": "İdeal gaz denkleminde (P.V = n.R.T) birimleriyle her harfin anlamını yazınız.", "answer": "P: Basınç (atm), V: Hacim (L), n: Mol sayısı, R: Gaz sabiti, T: Sıcaklık (Kelvin)."},
        {"topic": "Kimya: Kimyasal Denge (Le Chatelier)", "question": "Ekzotermik dengedeki bir tepkimenin sıcaklığı artırılırsa denge ne yöne kayar?", "answer": "Girenler (sol) yönüne kayar ve denge sabiti (Kc) küçülür."}
    ],
    ("Kimya", "12"): [
        {"topic": "Kimya: Kimya ve Elektrik (Galvanik Piller)", "question": "Galvanik pillerde Anot ve Katot kutuplarında gerçekleşen temel olaylar nelerdir?", "answer": "Anotta yükseltgenme (aşınma), Katotta indirgenme (kütle artışı) gerçekleşir."},
        {"topic": "Kimya: Organik Kimya (Hidrokarbonlar)", "question": "Alkan, Alken ve Alkinlerin genel formüllerini yazınız.", "answer": "Alkan: CnH2n+2, Alken: CnH2n, Alkin: CnH2n-2."}
    ],

    # --- BİYOLOJİ (9-12) ---
    ("Biyoloji", "9"): [
        {"topic": "Biyoloji: Canlıların Temel Bileşenleri", "question": "Hücrede enerji verici olarak kullanılan üç temel organik molekülün kullanım sırasını yazınız.", "answer": "1. Karbonhidratlar, 2. Yağlar (Lipitler), 3. Proteinler."},
        {"topic": "Biyoloji: Hücre Organelleri", "question": "Bitki hücresinde bulunup hayvan hücresinde bulunmayan iki temel yapıyı yazınız.", "answer": "Hücre çeperi (çeper/duvar) ve Kloroplast (Plastitler)."}
    ],
    ("Biyoloji", "10"): [
        {"topic": "Biyoloji: Hücre Bölünmeleri", "question": "Mitoz bölünme ile Mayoz bölünme arasındaki iki temel farkı yazınız.", "answer": "1. Mitozda 2 hücre oluşur ve kromozom sayısı değişmez; Mayozda 4 hücre oluşur ve kromozom sayısı yarıya iner. 2. Mayozda krossing-over ile genetik çeşitlilik sağlanır."},
        {"topic": "Biyoloji: Mendel Genetiği", "question": "Heterozigot kahverengi gözlü iki bireyin (Aa x Aa) mavi gözlü (aa) çocuklarının olma olasılığı nedir?", "answer": "%25 (1/4)"}
    ],
    ("Biyoloji", "11"): [
        {"topic": "Biyoloji: İnsan Fizyolojisi (Sinir Sistemi)", "question": "Nöronlarda impuls iletiminin akson boyunca ve sinapstaki iletim mekanizması nasıldır?", "answer": "Akson boyunca elektriksel ve kimyasal (elektrokimyasal); sinapslarda ise nörotransmitter maddelerle kimyasaldır."},
        {"topic": "Biyoloji: Dolaşım Sistemi", "question": "Küçük kan dolaşımının amacı nedir ve nerede başlayıp nerede biter?", "answer": "Kanı oksijence zenginleştirmek (temizlemek) amacıyla sağ karıncıkta başlar, akciğerde temizlenip sol kulakçıkta biter."}
    ],
    ("Biyoloji", "12"): [
        {"topic": "Biyoloji: Genden Proteine", "question": "DNA replikasyonunda görev alan Helikaz ve DNA Polimeraz enzimlerinin işlevleri nelerdir?", "answer": "Helikaz çift sarmal hidrojen bağlarını açar; DNA Polimeraz yeni nükleotit zincirini sentezler."},
        {"topic": "Biyoloji: Fotosentez ve Solunum", "question": "Fotosentezin ışığa bağımlı ve ışıktan bağımsız (Calvin Döngüsü) evreleri kloroplastın hangi kısımlarında gerçekleşir?", "answer": "Işığa bağımlı evre tilakoit zarda (granum), ışıktan bağımsız evre stromada gerçekleşir."}
    ],

    # --- FEN BİLİMLERİ (3-8) ---
    ("Fen Bilimleri", "5"): [
        {"topic": "Fen Bilimleri: Güneş, Dünya ve Ay", "question": "Ay'ın ana evrelerini oluşum sırasıyla yazınız.", "answer": "Yeni Ay, İlk Dördün, Dolunay, Son Dördün"},
        {"topic": "Fen Bilimleri: Kuvvet ve Sürtünme", "question": "Sürtünme kuvvetinin olumlu ve olumsuz birer etkisini yazınız.", "answer": "Olumlu: Yürüyebilmemizi ve araçların durmasını sağlar. Olumsuz: Makine parçalarının aşınmasına ve enerji kaybına yol açar."}
    ],
    ("Fen Bilimleri", "6"): [
        {"topic": "Fen Bilimleri: Vücudumuzdaki Sistemler", "question": "İnce bağırsakta sindirilen besinlerin emilimini sağlayan mikroskobik parmaksı çıkıntılara ne ad verilir?", "answer": "Villus (Tümür)"},
        {"topic": "Fen Bilimleri: Madde ve Isı", "question": "Isı iletkeni ve ısı yalıtkanı maddelere ikişer örnek veriniz.", "answer": "İletken: Bakır, Demir. Yalıtkan: Strafor köpük, Ahşap/Plastik."}
    ],
    ("Fen Bilimleri", "7"): [
        {"topic": "Fen Bilimleri: Hücre ve Bölünmeler", "question": "Hücrenin yönetim merkezi ve enerji üretim merkezi olan organeller hangileridir?", "answer": "Yönetim: Çekirdek, Enerji: Mitokondri."},
        {"topic": "Fen Bilimleri: Kuvvet ve Enerji", "question": "Yerden yukarı doğru fırlatılan bir top tepe noktasına çıkarken kinetik ve potansiyel enerjisi nasıl değişir?", "answer": "Kinetik enerjisi azalır, yer çekimi potansiyel enerjisi artar (Mekanik enerji korunur)."}
    ],
    ("Fen Bilimleri", "8"): [
        {"topic": "Fen Bilimleri: Mevsimler ve İklim", "question": "Dünya'da mevsimlerin oluşmasının iki temel sebebi nedir?", "answer": "1. Dünya'nın dönme ekseninin eğik olması (23° 27'). 2. Dünya'nın Güneş etrafında dolanması."},
        {"topic": "Fen Bilimleri: DNA ve Genetik Kod", "question": "DNA'daki 4 organik bazı yazınız ve baz eşleşme kuralını belirtiniz.", "answer": "Adenin (A), Timin (T), Guanin (G), Sitozin (C). Eşleşme: A ile T (ikili bağ), G ile C (üçlü bağ)."}
    ],

    # --- TÜRKÇE & TÜRK DİLİ VE EDEBİYATI (1-12) ---
    ("Türkçe", "5"): [
        {"topic": "Türkçe: Sözcükte Anlam", "question": "Gerçek anlam ve mecaz anlam kavramlarını birer cümle içinde kullanarak açıklayınız.", "answer": "Gerçek: 'Sobadaki sıcak odun çıtırdıyordu.' Mecaz: 'Bizi çok sıcak karşıladı.'"},
        {"topic": "Türkçe: Ek ve Kök Bilgisi", "question": "'Gözlükçü' sözcüğünün kökünü ve aldığı eklerin türünü yazınız.", "answer": "Kök: Göz (İsim kökü), -lük ve -çü yapım ekleridir (Türemiş sözcük)."}
    ],
    ("Türkçe", "8"): [
        {"topic": "Türkçe: Fiilimsiler (LGS)", "question": "Fiilimsi türlerini (üç grup) yazınız ve birer ek örneği veriniz.", "answer": "1. İsim-fiil (-ma, -ış, -mak), 2. Sıfat-fiil (-an, -ası, -mez, -ar, -dik, -ecek, -miş), 3. Zarf-fiil (-ken, -alı, -asiye, -erek)."},
        {"topic": "Türkçe: Cümle Ögeleri", "question": "'Yolcular sabah erkenden istasyona ulaştı.' cümlesinin ögelerini sırasıyla bulunuz.", "answer": "Yolcular (Özne), sabah erkenden (Zarf Tümleci), istasyona (Yer Tamlayıcısı), ulaştı (Yüklem)."}
    ],
    ("Türk Dili ve Edebiyatı", "9"): [
        {"topic": "Türk Dili ve Edebiyatı: Şiir Bilgisi", "question": "Dörtlük sonlarındaki yarım, tam ve zengin kafiyeyi tanımlayınız.", "answer": "Yarım: Tek ses benzerliği. Tam: İki ses benzerliği. Zengin: Üç veya daha fazla ses benzerliği."},
        {"topic": "Türk Dili ve Edebiyatı: Olay Hikâyesi vs Durum Hikâyesi", "question": "Maupassant tarzı (Olay) ile Çehov tarzı (Durum) hikâye arasındaki temel farkı yazınız.", "answer": "Olay hikâyesinde serim-düğüm-çözüm ve merak unsuru ön plandadır; durum hikâyesinde ise hayatın bir kesiti duygularla aktarılır."}
    ],
    ("Türk Dili ve Edebiyatı", "11"): [
        {"topic": "Türk Dili ve Edebiyatı: Tanzimat Edebiyatı", "question": "Tanzimat I. Dönem edebiyatı ile II. Dönem edebiyatının 'sanat anlayışlarını' karşılaştırınız.", "answer": "I. Dönem: 'Sanat toplum içindir' anlayışı hakimdir. II. Dönem: 'Sanat sanat içindir' anlayışı hakimdir."},
        {"topic": "Türk Dili ve Edebiyatı: Milli Edebiyat", "question": "Genç Kalemler dergisinde Ömer Seyfettin tarafından yayımlanan ve sadeleşmeyi savunan başmakale nedir?", "answer": "'Yeni Lisan' makalesidir."}
    ]
}

# --------------------------------------------------------------------------
# Genel Soru Üretici Motor (Ders ve Sınıfa Göre Birleştirici)
# --------------------------------------------------------------------------
def clean_short_answer(ans):
    ans = str(ans).strip()
    if '(' in ans:
        prefix = ans.split('(')[0].strip()
        if prefix:
            return prefix
    return ans

def build_test_options_smart(correct_ans, pool_answers, num_opts, letters):
    correct_idx = random.randint(0, num_opts - 1)
    correct_letter = letters[correct_idx]
    
    short_correct = clean_short_answer(correct_ans)
    
    # 1. Havuzdan tekil ve doğru cevaptan farklı çeldiricileri al
    cand_distractors = []
    seen = {short_correct.lower()}
    
    for a in pool_answers:
        s_short = clean_short_answer(a)
        if s_short and s_short.lower() not in seen:
            seen.add(s_short.lower())
            cand_distractors.append(s_short)
            
    random.shuffle(cand_distractors)
    
    # 2. Eğer çeldirici sayısı yetersizse akıllı sentetik çeldirici üret
    needed = (num_opts - 1) - len(cand_distractors)
    if needed > 0:
        num_match = re.search(r'[-+]?\b\d+(?:[\.,]\d+)?\b', short_correct)
        if num_match:
            base_str = num_match.group(0).replace(',', '.')
            try:
                base_val = float(base_str) if '.' in base_str else int(base_str)
                deltas = [-2, 2, -1, 1, 3, -3, 5, 4, -4, 6, -5]
                for d in deltas:
                    if len(cand_distractors) >= num_opts - 1:
                        break
                    alt_val = base_val + d
                    if alt_val <= 0 and base_val > 0:
                        alt_val = base_val + abs(d) + 1
                    alt_text = short_correct.replace(num_match.group(0), str(alt_val), 1)
                    if alt_text.lower() not in seen:
                        seen.add(alt_text.lower())
                        cand_distractors.append(alt_text)
            except:
                pass
                
    fallbacks = ['0', '1', 'Sabit kalır', 'Artar', 'Azalır', 'Doğru', 'Yanlış', 'Değişmez']
    for fb in fallbacks:
        if len(cand_distractors) >= num_opts - 1:
            break
        if fb.lower() not in seen:
            seen.add(fb.lower())
            cand_distractors.append(fb)
            
    opts = []
    d_ptr = 0
    for i in range(num_opts):
        l = letters[i]
        if i == correct_idx:
            opts.append({'key': l, 'text': short_correct})
        else:
            d_txt = cand_distractors[d_ptr] if d_ptr < len(cand_distractors) else f'Seçenek {l}'
            d_ptr += 1
            opts.append({'key': l, 'text': d_txt})
            
    return opts, correct_letter

def generate_subject_questions(subject, grade, count=10, difficulty="cok-kolay", exam_type="klasik"):
    g_str = str(grade) if grade else "5"
    s_clean = detect_subject_from_text(subject)
    count = int(count) if count else 10
    
    questions = []
    
    # 1. Statik havuzdan eşleşenleri çek
    key = (s_clean, g_str)
    static_pool = list(SUBJECT_STATIC_QUESTIONS.get(key, []))
    
    # Eğer birebir eşleşmediyse genel ders eşleşmesine bak
    if not static_pool:
        for (sub, gr), q_list in SUBJECT_STATIC_QUESTIONS.items():
            if sub.lower() in s_clean.lower() and gr == g_str:
                static_pool.extend(q_list)
                
    # 2. Matematik veya Fizik ise dinamik motorla destekle
    dynamic_pool = []
    if "matematik" in s_clean.lower():
        for _ in range(max(10, count * 2)):
            dynamic_pool.append(generate_dynamic_math_question(g_str, difficulty))
    elif "fizik" in s_clean.lower():
        for _ in range(max(10, count * 2)):
            dynamic_pool.append(generate_dynamic_physics_question(g_str, difficulty))
            
    combined_pool = static_pool + dynamic_pool
    
    seen_q = set()
    unique_pool = []
    for item in combined_pool:
        q_text = item.get("question", "").strip()
        if q_text and q_text not in seen_q:
            seen_q.add(q_text)
            unique_pool.append(item)
            
    # Eğer tekil soru sayısı count'tan azsa dinamik üretici ile doldur
    if len(unique_pool) < count:
        for _ in range(count * 5):
            if "matematik" in s_clean.lower():
                dyn = generate_dynamic_math_question(g_str, difficulty)
            elif "fizik" in s_clean.lower():
                dyn = generate_dynamic_physics_question(g_str, difficulty)
            else:
                break
            q_text = dyn.get("question", "").strip()
            if q_text and q_text not in seen_q:
                seen_q.add(q_text)
                unique_pool.append(dyn)
            if len(unique_pool) >= count:
                break

    # Rastgele seçim
    if len(unique_pool) >= count:
        selected = random.sample(unique_pool, count)
    elif unique_pool:
        selected = [random.choice(unique_pool) for _ in range(count)]
    else:
        selected = [
            {"topic": f"{s_clean}: Temel Kavramlar", "question": f"{g_str}. Sınıf {s_clean} dersinde öğrenilen temel ilkelerden birini açıklayınız.", "answer": "Müfredatta yer alan tanım ve yönergeler doğrultusunda çözülür."}
            for _ in range(count)
        ]
        
    pts = 100 // count
    res_questions = []
    pool_answers = [item.get("answer", "") for item in combined_pool if item.get("answer")]
    
    # Kademe seçenek sayısı: Lise 5, Ortaokul 4, İlkokul 3
    g_int = int(g_str) if g_str.isdigit() else 5
    num_opts = 5 if g_int >= 9 else (4 if g_int >= 5 else 3)
    letters = ["A", "B", "C", "D", "E"][:num_opts]
    
    for idx, item in enumerate(selected, 1):
        q_pts = (100 - pts * (count - 1)) if idx == count else pts
        correct_ans = item.get("answer", "")
        q_obj = {
            "id": str(idx),
            "topic": item.get("topic", s_clean),
            "question": item.get("question", ""),
            "answer": correct_ans,
            "points": q_pts,
            "type": exam_type
        }
        
        if exam_type == "test":
            opts, correct_letter = build_test_options_smart(correct_ans, pool_answers, num_opts, letters)
            q_obj["options"] = opts
            q_obj["correct_option"] = correct_letter
            q_obj["answer"] = f"{correct_letter}) {correct_ans}"
            
        res_questions.append(q_obj)
        
    return res_questions
