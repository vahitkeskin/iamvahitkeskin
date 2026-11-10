# -*- coding: utf-8 -*-
"""
Gemini AI Question Generation Service
Uses Google Gemini API to generate curriculum-aligned questions and model answers.
Reads API key securely from local .env file.
"""

import os
import json
import urllib.request
import urllib.error

def load_api_key():
    """Reads GEMINI_API_KEY from .env file or environment variable."""
    env_key = os.environ.get("GEMINI_API_KEY")
    if env_key:
        return env_key.strip()
    
    env_file = os.path.join(os.path.dirname(__file__), ".env")
    if os.path.exists(env_file):
        try:
            with open(env_file, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line.startswith("GEMINI_API_KEY="):
                        return line.split("=", 1)[1].strip().strip('"\'')
        except Exception:
            pass
    return None

def generate_questions_with_gemini(prompt_text, grade="5", count=5, difficulty="orta"):
    """
    Calls Google Gemini API (gemini-2.5-flash) to generate structured questions and answers.
    Returns list of question dicts or None if API fails.
    """
    api_key = load_api_key()
    if not api_key:
        return None

    system_instruction = f"""Sen deneyimli bir Türk Milli Eğitim Bakanlığı (MEB) Bilişim Teknolojileri ve Yazılım / Bilgisayar Bilimi öğretmenisin.
Görevin: {grade}. sınıf seviyesinde, {difficulty} zorluk derecesinde tam {count} adet açık uçlu klasik sınav sorusu ve bunların detaylı model cevaplarını hazırlamaktır.
Konu: "{prompt_text}".

Kurallar:
1. Sorular ve cevaplar {grade}. sınıf düzeyine pedagojik olarak tam uygun olmalıdır.
2. Her soru için puan değeri belirle (Tüm soruların puanlarının toplamı tam 100 olmalıdır).
3. Yanıtı SADECE ve SADECE geçerli bir JSON formatında döndür. Hiçbir markdown formatı (```json ... ```) veya ek açıklama metni ekleme.

İstenen JSON şeması:
[
  {{
    "id": 1,
    "question": "Soru metni...",
    "points": 20,
    "answer": "Detaylı model cevap metni..."
  }}
]
"""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    
    payload = {
        "contents": [
            {
                "parts": [
                    {"text": system_instruction}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.4,
            "responseMimeType": "application/json"
        }
    }

    try:
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            candidates = data.get("candidates", [])
            if candidates:
                text_content = candidates[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                text_content = text_content.strip()
                if text_content.startswith("```json"):
                    text_content = text_content[7:]
                if text_content.startswith("```"):
                    text_content = text_content[3:]
                if text_content.endswith("```"):
                    text_content = text_content[:-3]
                
                parsed = json.loads(text_content.strip())
                if isinstance(parsed, list) and len(parsed) > 0:
                    return parsed
    except Exception as e:
        print(f"Gemini API generation error: {e}")
        return None

    return None

