# -*- coding: utf-8 -*-
"""
Gemini AI Soru ve Cevap Üretim Servisi (Otomatik Hata Toleransı & Çoklu API Anahtarı Desteği)

Öncelik ve Yedekleme (Failover) Mimarisi:
1. Varsayılan (Default): vahitkeskin07@gmail.com (vahitkeskin07)
2. Yedek (Failover): vhtkskn63@gmail.com (vhtkskn63)

İlk anahtarda kota aşımı (HTTP 429), yetki hatası (HTTP 403), sunucu hatası (HTTP 500)
veya herhangi bir ağ/API hatası oluştuğunda, sistem kesintiye uğramadan
otomatik olarak sıradaki API anahtarına geçiş yapar.
"""

import os
import json
import urllib.request
import urllib.error

def parse_env_file():
    """Reads key-value pairs from .env file securely."""
    env_vars = {}
    env_file = os.path.join(os.path.dirname(__file__), ".env")
    if os.path.exists(env_file):
        try:
            with open(env_file, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line or line.startswith("#"):
                        continue
                    if "=" in line:
                        k, v = line.split("=", 1)
                        env_vars[k.strip()] = v.strip().strip('"\'')
        except Exception as e:
            print(f"[Gemini Service] .env okuma hatası: {e}")
    return env_vars

def load_api_keys():
    """
    Kayıtlı Gemini API anahtarlarını öncelik sırasına göre yükler.
    
    Öncelik Sırası:
    1. vahitkeskin07 (vahitkeskin07@gmail.com) - Varsayılan
    2. vhtkskn63 (vhtkskn63@gmail.com) - Yedek / Failover
    3. GEMINI_API_KEY (Geriye dönük uyumluluk için ek anahtar)
    
    Döner: [{'id': 'vahitkeskin07', 'email': 'vahitkeskin07@gmail.com', 'key': '...'}, ...]
    """
    env_vars = parse_env_file()
    
    # 1. Varsayılan: vahitkeskin07@gmail.com
    key_vahit = (
        os.environ.get("vahitkeskin07") or
        os.environ.get("GEMINI_API_KEY_VAHITKESKIN07") or
        env_vars.get("vahitkeskin07") or
        env_vars.get("GEMINI_API_KEY_VAHITKESKIN07")
    )
    
    # 2. Yedek: vhtkskn63@gmail.com
    key_vht = (
        os.environ.get("vhtkskn63") or
        os.environ.get("GEMINI_API_KEY_VHTKSKN63") or
        env_vars.get("vhtkskn63") or
        env_vars.get("GEMINI_API_KEY_VHTKSKN63")
    )
    
    # 3. Genel yedek
    key_generic = (
        os.environ.get("GEMINI_API_KEY") or
        env_vars.get("GEMINI_API_KEY")
    )
    
    keys = []
    seen = set()

    if key_vahit and key_vahit not in seen:
        keys.append({
            "id": "vahitkeskin07",
            "email": "vahitkeskin07@gmail.com",
            "key": key_vahit,
            "role": "Varsayılan (Primary)"
        })
        seen.add(key_vahit)

    if key_vht and key_vht not in seen:
        keys.append({
            "id": "vhtkskn63",
            "email": "vhtkskn63@gmail.com",
            "key": key_vht,
            "role": "Yedek (Failover)"
        })
        seen.add(key_vht)

    if key_generic and key_generic not in seen:
        keys.append({
            "id": "gemini_default",
            "email": "varsayilan",
            "key": key_generic,
            "role": "Ek Yedek"
        })
        seen.add(key_generic)

    return keys

def load_api_key():
    """Geriye dönük uyumluluk: İlk kullanılabilir API anahtarını döner."""
    keys = load_api_keys()
    if keys:
        return keys[0]["key"]
    return None

def generate_questions_with_gemini(prompt_text, grade="5", count=5, difficulty="orta", lesson=None, start_week=1, end_week=8):
    """
    Google Gemini API ile sınav soruları ve model cevaplar üretir.
    İlk anahtar hata verirse otomatik olarak sıradaki yedek anahtara geçer (Failover).
    Bilişim Öğretmenliği Portalı'ndaki (https://vahitkeskin.github.io/iamvahitkeskin/files/bilisimogretmenligi/index.html)
    ilgili sınıfın haftalık slayt ve sunum konularını baz alarak sorular üretir.
    """
    api_keys = load_api_keys()
    if not api_keys:
        print("[Gemini Service] Hata: Hiçbir API anahtarı bulunamadı (.env kontrol ediniz).")
        return None

    if not lesson:
        try:
            g = int(grade)
        except Exception:
            g = 5
        if g <= 4:
            lesson = "İlkokul Temel Dersleri"
        elif g <= 8:
            lesson = "Bilişim Teknolojileri ve Yazılım"
        else:
            lesson = "Bilgisayar Bilimi"

    # Bilişim Öğretmenliği Portalı Slayt ve Sunum Konularını Bağlam Olarak Dahil Et
    portal_context = ""
    portal_data_path = os.path.join(os.path.dirname(__file__), "portal_curriculum_data.json")
    if os.path.exists(portal_data_path):
        try:
            with open(portal_data_path, "r", encoding="utf-8") as f:
                portal_data = json.load(f)
                g_str = str(grade)
                if g_str in portal_data:
                    weeks_map = portal_data[g_str].get("weeks", {})
                    s_w = max(1, int(start_week))
                    e_w = min(41, max(s_w, int(end_week)))
                    selected_weeks = [
                        f"- {w}. Hafta Slayt Konusu: {weeks_map[str(w)]}"
                        for w in range(s_w, e_w + 1)
                        if str(w) in weeks_map
                    ]
                    if selected_weeks:
                        portal_context = (
                            f"\nÖĞRETMENİN PORTAL SLAYT VE SUNUM MÜFREDATI ({grade}. Sınıf, {s_w}-{e_w}. Haftalar):\n"
                            + "\n".join(selected_weeks)
                            + "\nSoruları ve cevapları doğrudan bu slayt ve sunumlarda işlenen kavram ve kazanımlarla tam uyumlu hazırla.\n"
                        )
        except Exception as e:
            print(f"[Gemini Service] Portal verisi okunamadı: {e}")

    system_instruction = f"""Sen deneyimli bir Türk Milli Eğitim Bakanlığı (MEB) {lesson} öğretmenisin.
Görevin: {grade}. sınıf seviyesinde, {difficulty} zorluk derecesinde tam {count} adet açık uçlu klasik sınav sorusu ve bunların detaylı model cevaplarını hazırlamaktır.
Ders: {lesson}
Konu / Ünite / Sınav Kapsamı: "{prompt_text}".
{portal_context}
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
    payload_bytes = json.dumps(payload).encode("utf-8")

    # Sırayla API anahtarlarını dene (Failover mekanizması)
    for idx, key_entry in enumerate(api_keys):
        key_id = key_entry["id"]
        key_email = key_entry["email"]
        api_key = key_entry["key"]
        role = key_entry["role"]
        
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
        print(f"[Gemini Service] '{key_id}' ({key_email} - {role}) deneniyor... ({idx + 1}/{len(api_keys)})")

        try:
            req = urllib.request.Request(
                url,
                data=payload_bytes,
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
                        print(f"[Gemini Service] Başarılı! '{key_id}' ({key_email}) ile {len(parsed)} soru üretildi.")
                        return parsed

        except urllib.error.HTTPError as e:
            err_body = ""
            try:
                err_body = e.read().decode("utf-8", errors="ignore")[:250]
            except Exception:
                pass
            print(f"[Gemini Service] UYARI: '{key_id}' ({key_email}) API hatası verdi (HTTP {e.code}): {err_body}")

            # Bir sonraki yedek anahtar var mı?
            if idx + 1 < len(api_keys):
                next_key = api_keys[idx + 1]
                print(f"[Gemini Service] Otomatik Geçiş (Failover): '{next_key['id']}' ({next_key['email']}) anahtarına geçiliyor...")
            continue

        except Exception as e:
            print(f"[Gemini Service] UYARI: '{key_id}' ({key_email}) çağrısında hata oluştu: {e}")
            if idx + 1 < len(api_keys):
                next_key = api_keys[idx + 1]
                print(f"[Gemini Service] Otomatik Geçiş (Failover): '{next_key['id']}' ({next_key['email']}) anahtarına geçiliyor...")
            continue

    print("[Gemini Service] Tüm API anahtarları tükendi veya hata verdi. Sistem yerel soru bankasını kullanacak.")
    return None
