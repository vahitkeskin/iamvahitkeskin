#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Assembler and Builder for 9. Sınıf Bilgisayar Bilimi (Kur 1)
Writes all files to 9. Sinif/
"""

import os
import json
import generator_shared as shared
from build_grade9_curriculum import WEEKS_DATA_9, get_svg_for_week
from build_grade9_part2 import WEEKS_11_19
from build_grade9_term2 import WEEKS_20_31 as WEEKS_20_25
from data_grade9_term2 import WEEKS_26_41 as WEEKS_26_31
from data_grade9_part4 import WEEKS_32_41

OUTPUT_DIR = "/Users/vahitkeskin/Documents/GitHub/iamvahitkeskin/files/bilisimogretmenligi/9. Sinif"
os.makedirs(OUTPUT_DIR, exist_ok=True)

GRADE_NAME = "9. Sınıf"
COURSE_NAME = "Bilgisayar Bilimi (Kur 1)"

# Merge all weeks
ALL_WEEKS_9 = WEEKS_DATA_9 + WEEKS_11_19 + WEEKS_20_25 + WEEKS_26_31 + WEEKS_32_41

# Ensure every week has roadmapSvg
for w in ALL_WEEKS_9:
    if "roadmapSvg" not in w or not w["roadmapSvg"]:
        w["roadmapSvg"] = get_svg_for_week(w["week"], w["title"])

print(f"9. Sınıf Toplam Hafta Sayısı: {len(ALL_WEEKS_9)}")
assert len(ALL_WEEKS_9) == 41, f"Beklenen 41 hafta, bulunan: {len(ALL_WEEKS_9)}"

# 1. curriculum-term1.js (Weeks 1 - 10)
term1_part1 = ALL_WEEKS_9[0:10]
with open(os.path.join(OUTPUT_DIR, "curriculum-term1.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 1. Dönem 1. Kısım (Hafta 1 - 10)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_1_PART1 = " + json.dumps(term1_part1, ensure_ascii=False, indent=2) + ";\n")

# 2. curriculum-term1-part2.js (Weeks 11 - 19)
term1_part2 = ALL_WEEKS_9[10:19]
with open(os.path.join(OUTPUT_DIR, "curriculum-term1-part2.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 1. Dönem 2. Kısım (Hafta 11 - 19)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_1_PART2 = " + json.dumps(term1_part2, ensure_ascii=False, indent=2) + ";\n")

# 3. curriculum-term2-part1.js (Weeks 20 - 31)
term2_part1 = ALL_WEEKS_9[19:31]
with open(os.path.join(OUTPUT_DIR, "curriculum-term2-part1.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 2. Dönem 1. Kısım (Hafta 20 - 31)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_2_PART1 = " + json.dumps(term2_part1, ensure_ascii=False, indent=2) + ";\n")

# 4. curriculum-term2-part2.js (Weeks 32 - 41)
term2_part2 = ALL_WEEKS_9[31:41]
with open(os.path.join(OUTPUT_DIR, "curriculum-term2-part2.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 2. Dönem 2. Kısım (Hafta 32 - 41)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_2_PART2 = " + json.dumps(term2_part2, ensure_ascii=False, indent=2) + ";\n")

# 5. curriculum-data.js
with open(os.path.join(OUTPUT_DIR, "curriculum-data.js"), "w", encoding="utf-8") as f:
    f.write(shared.create_curriculum_data_combiner(GRADE_NAME, COURSE_NAME))

# 6. theme-manager.js
with open(os.path.join(OUTPUT_DIR, "theme-manager.js"), "w", encoding="utf-8") as f:
    f.write(shared.create_theme_manager(f"{GRADE_NAME} {COURSE_NAME}"))

# 7. presentation-engine.js
with open(os.path.join(OUTPUT_DIR, "presentation-engine.js"), "w", encoding="utf-8") as f:
    f.write(shared.create_presentation_engine())

# 8. presentation-styles.css
with open(os.path.join(OUTPUT_DIR, "presentation-styles.css"), "w", encoding="utf-8") as f:
    f.write(shared.create_presentation_styles(is_grade_10=False))

# 9. presentation-builder.js
with open(os.path.join(OUTPUT_DIR, "presentation-builder.js"), "w", encoding="utf-8") as f:
    f.write(shared.create_presentation_builder(GRADE_NAME, COURSE_NAME))

# 10. index.html (Portal)
grade9_units = [
    {"id": "unite-1", "title": "1. Ünite: Bilişim Etiği & Sistemler"},
    {"id": "unite-2", "title": "2. Ünite: Problem Çözme & Algoritmalar"},
    {"id": "unite-3", "title": "3. Ünite: Python Temelleri"},
    {"id": "unite-somestr", "title": "Sömestr: Kış Kodlama Kampı"},
    {"id": "unite-4", "title": "4. Ünite: Karar & for Döngüsü"},
    {"id": "unite-5", "title": "5. Ünite: while & Veri Yapıları"},
    {"id": "unite-6", "title": "6. Ünite: Fonksiyonlar & Projeler"}
]

with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
    f.write(shared.create_portal_index_html(GRADE_NAME, COURSE_NAME, grade9_units))

# 11. 41 Weekly HTML files (Hafta_01.html to Hafta_41.html)
for w in ALL_WEEKS_9:
    week_num = w["week"]
    padded = f"{week_num:02d}"
    filename = f"Hafta_{padded}.html"
    filepath = os.path.join(OUTPUT_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(shared.create_single_week_html(GRADE_NAME, week_num, w["title"]))

print(f"9. Sınıfın tüm dosyaları başarıyla {OUTPUT_DIR} klasörüne üretildi!")
