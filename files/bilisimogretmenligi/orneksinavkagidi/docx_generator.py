# -*- coding: utf-8 -*-
"""
DOCX Generator for Exam Papers and Answer Keys
Recreates the exact visual layout of 'orneksinavkagidi.jpg' using standard OpenXML.
Outputs valid, fully formatted .docx files compatible with Word, LibreOffice, Pages, Google Docs.
Strictly avoids generating empty trailing pages!
"""

import io
import re
import zipfile
import xml.sax.saxutils

def escape_xml(s):
    if s is None:
        return ""
    return xml.sax.saxutils.escape(str(s))

def build_exam_xml_elements(header_data, questions, is_answer_key=False, color="000000"):
    clean_color = color.replace("#", "").strip().upper()
    if len(clean_color) != 6:
        clean_color = "000000"

    year_val = header_data.get("year", "2026-2027 EĞİTİM ÖĞRETİM YILI")
    school_val = header_data.get("school", "Özel Viranşehir Uğur Ortaokulu")
    raw_lesson = header_data.get("lesson", "5. SINIF BİLİŞİM TEKNOLOJİLERİ VE YAZILIM")
    
    # Başında sınıf yoksa öğrenci sınıfından veya varsayılan 5'ten sınıf ekle
    if not re.match(r'^\s*\d+\s*[\.\-]?\s*(SINIF|Sınıf|sinif)', raw_lesson, re.IGNORECASE):
        grade_match = re.search(r'\d+', str(header_data.get("student_class", "")))
        grade_num = grade_match.group(0) if grade_match else "5"
        lesson_val = f"{grade_num}. SINIF {raw_lesson.upper()}"
    else:
        lesson_val = raw_lesson

    term_val = header_data.get("term", "1.DÖNEM 1. YAZILI")
    if is_answer_key and "CEVAP ANAHTARI" not in term_val.upper():
        term_val = f"{term_val} - CEVAP ANAHTARI"

    student_name = header_data.get("student_name", "")
    student_class = header_data.get("student_class", "")
    student_no = header_data.get("student_no", "")
    student_score = header_data.get("student_score", "")

    # Header 3-Column Table (Birebir orneksinavkagidi.jpg şablonu)
    table_xml = f'''
    <w:tbl>
        <w:tblPr>
            <w:tblW w:w="9600" w:type="dxa"/>
            <w:jc w:val="center"/>
            <w:tblBorders>
                <w:top w:val="single" w:sz="6" w:space="0" w:color="000000"/>
                <w:left w:val="single" w:sz="6" w:space="0" w:color="000000"/>
                <w:bottom w:val="single" w:sz="6" w:space="0" w:color="000000"/>
                <w:right w:val="single" w:sz="6" w:space="0" w:color="000000"/>
                <w:insideH w:val="none"/>
                <w:insideV w:val="single" w:sz="6" w:space="0" w:color="000000"/>
            </w:tblBorders>
            <w:tblCellMar>
                <w:top w:w="80" w:type="dxa"/>
                <w:left w:w="120" w:type="dxa"/>
                <w:bottom w:w="80" w:type="dxa"/>
                <w:right w:w="120" w:type="dxa"/>
            </w:tblCellMar>
        </w:tblPr>
        <w:tblGrid>
            <w:gridCol w:w="2600"/>
            <w:gridCol w:w="5400"/>
            <w:gridCol w:w="1600"/>
        </w:tblGrid>
        <w:tr>
            <w:trPr><w:cantSplit/></w:trPr>
            <w:tc>
                <w:tcPr><w:tcW w:w="2600" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr>
                <w:p><w:pPr><w:jc w:val="left"/><w:spacing w:before="30" w:after="30"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="24"/></w:rPr><w:t>ADI SOYADI: {escape_xml(student_name)}</w:t></w:r></w:p>
                <w:p><w:pPr><w:jc w:val="left"/><w:spacing w:before="30" w:after="30"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="24"/></w:rPr><w:t>SINIFI: {escape_xml(student_class)}</w:t></w:r></w:p>
                <w:p><w:pPr><w:jc w:val="left"/><w:spacing w:before="30" w:after="30"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="24"/></w:rPr><w:t>No.: {escape_xml(student_no)}</w:t></w:r></w:p>
            </w:tc>
            <w:tc>
                <w:tcPr><w:tcW w:w="5400" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr>
                <w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="20" w:after="20"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="19"/></w:rPr><w:t>{escape_xml(year_val)}</w:t></w:r></w:p>
                <w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="20" w:after="20"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="18"/></w:rPr><w:t>{escape_xml(school_val)}</w:t></w:r></w:p>
                <w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="20" w:after="20"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="18"/></w:rPr><w:t>{escape_xml(lesson_val)}</w:t></w:r></w:p>
                <w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="20" w:after="20"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="18"/></w:rPr><w:t>{escape_xml(term_val)}</w:t></w:r></w:p>
            </w:tc>
            <w:tc>
                <w:tcPr><w:tcW w:w="1600" w:type="dxa"/><w:vAlign w:val="top"/></w:tcPr>
                <w:p><w:pPr><w:jc w:val="left"/><w:spacing w:before="30" w:after="30"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="24"/></w:rPr><w:t>PUAN: {escape_xml(student_score)}</w:t></w:r></w:p>
            </w:tc>
        </w:tr>
    </w:tbl>
    '''

    section_title = "C E V A P L A R" if is_answer_key else "S O R U L A R"

    elements = [table_xml]

    # Başlık
    elements.append(f'''
    <w:p>
        <w:pPr>
            <w:jc w:val="center"/>
            <w:spacing w:before="260" w:after="240"/>
        </w:pPr>
        <w:r>
            <w:rPr>
                <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                <w:sz w:val="22"/>
                <w:spacing w:val="120"/>
            </w:rPr>
            <w:t>{section_title}</w:t>
        </w:r>
    </w:p>
    ''')

    dots_first = "...................................................................................................................................................................."
    dots_full = "............................................................................................................................................................................"
    dots_short = ".........................................................................................................................."

    for idx, q in enumerate(questions, 1):
        # 5 sorudan sonra 2. ve sonraki sayfalara geçiş: Sayfa sonu ve başlık ekle (1. sayfa ile eşit ferahlık)
        if idx > 1 and (idx - 1) % 5 == 0:
            elements.append(f'''
            <w:p>
                <w:r><w:br w:type="page"/></w:r>
            </w:p>
            <w:p>
                <w:pPr>
                    <w:jc w:val="center"/>
                    <w:spacing w:before="260" w:after="240"/>
                </w:pPr>
                <w:r>
                    <w:rPr>
                        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
                        <w:sz w:val="22"/>
                        <w:spacing w:val="120"/>
                    </w:rPr>
                    <w:t>{escape_xml(section_title)}</w:t>
                </w:r>
            </w:p>
            ''')

        q_text = escape_xml(q.get("question", ""))
        p_val = escape_xml(q.get("points", 20))
        ans_text = escape_xml(q.get("answer", ""))

        # Soru ve cevap arasında bir satır kadar boşluk (w:after="160") ve "Soru:" koyu
        elements.append(f'''
        <w:p>
            <w:pPr><w:spacing w:before="120" w:after="160"/></w:pPr>
            <w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="21"/></w:rPr><w:t>{idx}. Soru: </w:t></w:r>
            <w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="21"/></w:rPr><w:t>{q_text} ({p_val} Puan)</w:t></w:r>
        </w:p>
        ''')

        if not is_answer_key:
            # Soru Kağıdı: "Cevap:" kısmı koyu ve rengi siyah kalarak 4 sıra noktalı cevap alanı
            elements.append(f'''
            <w:p><w:pPr><w:spacing w:before="20" w:after="20" w:line="240" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="17"/></w:rPr><w:t>Cevap: </w:t></w:r><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="17"/></w:rPr><w:t>{dots_first}</w:t></w:r></w:p>
            <w:p><w:pPr><w:spacing w:before="20" w:after="20" w:line="240" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="17"/></w:rPr><w:t>{dots_full}</w:t></w:r></w:p>
            <w:p><w:pPr><w:spacing w:before="20" w:after="20" w:line="240" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="17"/></w:rPr><w:t>{dots_full}</w:t></w:r></w:p>
            <w:p><w:pPr><w:spacing w:before="20" w:after="20" w:line="240" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="17"/></w:rPr><w:t>{dots_short}</w:t></w:r></w:p>
            ''')
        else:
            # Cevap Kağıdı: "Cevap: " kısmı koyu ve siyah, model cevap metni renkli/siyah
            color_attr = f'<w:color w:val="{clean_color}"/>' if clean_color != "000000" else ""
            elements.append(f'''
            <w:p>
                <w:pPr><w:spacing w:before="40" w:after="80" w:line="260" w:lineRule="auto"/></w:pPr>
                <w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="20"/></w:rPr><w:t>Cevap: </w:t></w:r>
                <w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>{color_attr}<w:sz w:val="20"/></w:rPr><w:t>{ans_text}</w:t></w:r>
            </w:p>
            ''')

    return elements

def generate_docx(header_data, questions, mode="questions", color="000000"):
    """
    mode: 'questions' (Soru Kağıdı), 'answers' (Cevap Kağıdı), 'both' (Sayfa 1 Soru, Sayfa 2 Cevap)
    """
    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
    <Default Extension="xml" ContentType="application/xml"/>
    <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
    <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>'''

    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''

    styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:docDefaults>
        <w:rPrDefault>
            <w:rPr>
                <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
                <w:sz w:val="22"/>
                <w:szCs w:val="22"/>
                <w:lang w:val="tr-TR"/>
            </w:rPr>
        </w:rPrDefault>
        <w:pPrDefault>
            <w:pPr>
                <w:spacing w:after="0" w:line="240" w:lineRule="auto"/>
            </w:pPr>
        </w:pPrDefault>
    </w:docDefaults>
</w:styles>'''

    body_elements = []

    if mode == "questions":
        body_elements.extend(build_exam_xml_elements(header_data, questions, is_answer_key=False, color="000000"))
    elif mode == "answers":
        body_elements.extend(build_exam_xml_elements(header_data, questions, is_answer_key=True, color=color))
    elif mode == "both":
        # Soru kağıdı
        body_elements.extend(build_exam_xml_elements(header_data, questions, is_answer_key=False, color="000000"))
        # Sadece soru varsa ve cevap kağıdı eklenecekse araya sayfa sonu koy
        if questions and len(questions) > 0:
            body_elements.append('<w:p><w:r><w:br w:type="page"/></w:r></w:p>')
            body_elements.extend(build_exam_xml_elements(header_data, questions, is_answer_key=True, color=color))

    doc_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:body>
        {''.join(body_elements)}
        <w:sectPr>
            <w:pgSz w:w="11906" w:h="16838"/>
            <w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/>
        </w:sectPr>
    </w:body>
</w:document>'''

    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("[Content_Types].xml", content_types)
        z.writestr("_rels/.rels", rels)
        z.writestr("word/styles.xml", styles)
        z.writestr("word/document.xml", doc_xml)
    
    return buf.getvalue()
