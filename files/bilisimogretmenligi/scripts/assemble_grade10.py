#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Assembler and Builder for 10. Sınıf Bilgisayar Bilimi (Kur 2)
Writes all files to 10-sinif/
"""

import os
import json
import generator_shared as shared
from data_grade10_part1 import WEEKS_1_10, get_svg_for_week_10
from data_grade10_part2 import WEEKS_11_19
from data_grade10_part3 import WEEKS_20_31
from data_grade10_part4 import WEEKS_32_41

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(BASE_DIR, "10-sinif")
os.makedirs(OUTPUT_DIR, exist_ok=True)

GRADE_NAME = "10. Sınıf"
COURSE_NAME = "Bilgisayar Bilimi (Kur 2)"

# Merge all weeks
ALL_WEEKS_10 = WEEKS_1_10 + WEEKS_11_19 + WEEKS_20_31 + WEEKS_32_41

# Ensure every week has roadmapSvg
for w in ALL_WEEKS_10:
    if "roadmapSvg" not in w or not w["roadmapSvg"]:
        w["roadmapSvg"] = get_svg_for_week_10(w["week"], w["title"])

print(f"10. Sınıf Toplam Hafta Sayısı: {len(ALL_WEEKS_10)}")
assert len(ALL_WEEKS_10) == 41, f"Beklenen 41 hafta, bulunan: {len(ALL_WEEKS_10)}"

# 1. curriculum-term1.js (Weeks 1 - 10)
term1_part1 = ALL_WEEKS_10[0:10]
with open(os.path.join(OUTPUT_DIR, "curriculum-term1.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 1. Dönem 1. Kısım (Hafta 1 - 10)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_1_PART1 = " + json.dumps(term1_part1, ensure_ascii=False, indent=2) + ";\n")

# 2. curriculum-term1-part2.js (Weeks 11 - 19)
term1_part2 = ALL_WEEKS_10[10:19]
with open(os.path.join(OUTPUT_DIR, "curriculum-term1-part2.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 1. Dönem 2. Kısım (Hafta 11 - 19)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_1_PART2 = " + json.dumps(term1_part2, ensure_ascii=False, indent=2) + ";\n")

# 3. curriculum-term2-part1.js (Weeks 20 - 31)
term2_part1 = ALL_WEEKS_10[19:31]
with open(os.path.join(OUTPUT_DIR, "curriculum-term2-part1.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 2. Dönem 1. Kısım (Hafta 20 - 31)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_2_PART1 = " + json.dumps(term2_part1, ensure_ascii=False, indent=2) + ";\n")

# 4. curriculum-term2-part2.js (Weeks 32 - 41)
term2_part2 = ALL_WEEKS_10[31:41]
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

# 8. presentation-styles.css (Gold / Amber Theme for Grade 10)
with open(os.path.join(OUTPUT_DIR, "presentation-styles.css"), "w", encoding="utf-8") as f:
    f.write(shared.create_presentation_styles(is_grade_10=True))

# 9. presentation-builder.js
with open(os.path.join(OUTPUT_DIR, "presentation-builder.js"), "w", encoding="utf-8") as f:
    f.write(shared.create_presentation_builder(GRADE_NAME, COURSE_NAME))

# 10. index.html (Portal)
grade10_units = [
    {"id": "unite-1", "title": "1. Ünite: OOP & Dosyalar"},
    {"id": "unite-2", "title": "2. Ünite: Robotik & Sensörler"},
    {"id": "unite-3", "title": "3. Ünite: Web Teknolojileri & DOM"},
    {"id": "unite-somestr", "title": "Sömestr: Kış Kampı Bülteni"},
    {"id": "unite-4", "title": "4. Ünite: Veritabanı & SQL"},
    {"id": "unite-5", "title": "5. Ünite: Veri Bilimi & Yapay Zekâ"},
    {"id": "unite-6", "title": "6. Ünite: Yazılım Mühendisliği & Projeler"}
]

with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
    f.write(shared.create_portal_index_html(GRADE_NAME, COURSE_NAME, grade10_units, is_grade_10=True))

# 11. 41 Weekly HTML files (Hafta_01.html to Hafta_41.html)
for w in ALL_WEEKS_10:
    week_num = w["week"]
    padded = f"{week_num:02d}"
    filename = f"Hafta_{padded}.html"
    filepath = os.path.join(OUTPUT_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(shared.create_single_week_html(GRADE_NAME, week_num, w["title"]))

print(f"10. Sınıfın tüm dosyaları başarıyla {OUTPUT_DIR} klasörüne üretildi!")
