#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Assembler and Builder for 4. Sınıf Bilişim Teknolojileri ve Yazılım
Türkiye Yüzyılı Maarif Modeli (2026-2027)
Writes all 51 files to '4. Sinif/'
Öğretmen: Vahit Keskin
"""

import os
import json
import generator_shared as shared
from data_grade4_part1 import WEEKS_1_10_GRADE4, get_svg_for_week_4
from data_grade4_part2 import WEEKS_11_19_GRADE4, get_svg_for_week_4_part2
from data_grade4_part3 import WEEKS_20_31_GRADE4, get_svg_for_week_4_part3
from data_grade4_part4 import WEEKS_32_41_GRADE4, get_svg_for_week_4_part4

OUTPUT_DIR = "/Users/vahitkeskin/Documents/GitHub/iamvahitkeskin/files/bilisimogretmenligi/4. Sinif"
os.makedirs(OUTPUT_DIR, exist_ok=True)

GRADE_NAME = "4. Sınıf"
COURSE_NAME = "Bilişim Teknolojileri ve Yazılım"
PRIMARY_COLOR = "#10b981"
PRIMARY_RGB = "16, 185, 129"

# Merge all weeks
ALL_WEEKS_4 = WEEKS_1_10_GRADE4 + WEEKS_11_19_GRADE4 + WEEKS_20_31_GRADE4 + WEEKS_32_41_GRADE4

# Ensure every week has roadmapSvg
for w in ALL_WEEKS_4:
    if "roadmapSvg" not in w or not w["roadmapSvg"]:
        w["roadmapSvg"] = get_svg_for_week_4(w["week"], w["title"])

print(f"4. Sınıf Toplam Hafta Sayısı: {len(ALL_WEEKS_4)}")
assert len(ALL_WEEKS_4) == 41, f"Beklenen 41 hafta, bulunan: {len(ALL_WEEKS_4)}"

# 1. curriculum-term1.js (Weeks 1 - 10)
term1_part1 = ALL_WEEKS_4[0:10]
with open(os.path.join(OUTPUT_DIR, "curriculum-term1.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 1. Dönem 1. Kısım (Hafta 1 - 10)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_1_PART1 = " + json.dumps(term1_part1, ensure_ascii=False, indent=2) + ";\n")

# 2. curriculum-term1-part2.js (Weeks 11 - 19)
term1_part2 = ALL_WEEKS_4[10:19]
with open(os.path.join(OUTPUT_DIR, "curriculum-term1-part2.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 1. Dönem 2. Kısım (Hafta 11 - 19)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_1_PART2 = " + json.dumps(term1_part2, ensure_ascii=False, indent=2) + ";\n")

# 3. curriculum-term2-part1.js (Weeks 20 - 31)
term2_part1 = ALL_WEEKS_4[19:31]
with open(os.path.join(OUTPUT_DIR, "curriculum-term2-part1.js"), "w", encoding="utf-8") as f:
    f.write(f"/**\n * MEB {GRADE_NAME} {COURSE_NAME} - 2. Dönem 1. Kısım (Hafta 20 - 31)\n * 2026-2027 Eğitim ve Öğretim Yılı | Öğretmen: Vahit Keskin\n */\n\n")
    f.write("const CURRICULUM_TERM_2_PART1 = " + json.dumps(term2_part1, ensure_ascii=False, indent=2) + ";\n")

# 4. curriculum-term2-part2.js (Weeks 32 - 41)
term2_part2 = ALL_WEEKS_4[31:41]
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

# 8. presentation-styles.css (Emerald Green Theme for Grade 4)
with open(os.path.join(OUTPUT_DIR, "presentation-styles.css"), "w", encoding="utf-8") as f:
    f.write(shared.create_presentation_styles(
        grade_name=GRADE_NAME,
        course_name=COURSE_NAME,
        primary_color=PRIMARY_COLOR,
        primary_rgb=PRIMARY_RGB
    ))

# 9. presentation-builder.js
with open(os.path.join(OUTPUT_DIR, "presentation-builder.js"), "w", encoding="utf-8") as f:
    f.write(shared.create_presentation_builder(GRADE_NAME, COURSE_NAME))

# 10. index.html (Portal)
grade4_units = [
    {"id": "unite-1", "title": "1. Ünite: Dijital Dünyanın Kapıları"},
    {"id": "unite-2", "title": "2. Ünite: Güvenli İnternet & Dijital Vatandaşlık"},
    {"id": "unite-3", "title": "3. Ünite: Dijital Üretim & Yaratıcılık"},
    {"id": "unite-somestr", "title": "Sömestr: Bilişim Kış Şenliği"},
    {"id": "unite-4", "title": "4. Ünite: Problem Çözme & Algoritma"},
    {"id": "unite-5", "title": "5. Ünite: Scratch ile Oyun Geliştirme"},
    {"id": "unite-6", "title": "6. Ünite: Yapay Zekâ & Yeşil Bilişim"}
]

with open(os.path.join(OUTPUT_DIR, "index.html"), "w", encoding="utf-8") as f:
    f.write(shared.create_portal_index_html(
        grade_name=GRADE_NAME,
        course_name=COURSE_NAME,
        units_list=grade4_units,
        accent_color=PRIMARY_COLOR,
        accent_rgb=PRIMARY_RGB
    ))

# 11. 41 Weekly HTML files (Hafta_01.html to Hafta_41.html)
for w in ALL_WEEKS_4:
    week_num = w["week"]
    padded = f"{week_num:02d}"
    filename = f"Hafta_{padded}.html"
    filepath = os.path.join(OUTPUT_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(shared.create_single_week_html(GRADE_NAME, week_num, w["title"], COURSE_NAME))

print(f"4. Sınıfın tüm 51 dosyası başarıyla {OUTPUT_DIR} klasörüne üretildi!")
