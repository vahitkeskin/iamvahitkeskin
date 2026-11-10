#!/bin/bash
# Bilişim Sınav Kağıdı Hazırlama & Yönetim Sistemi Başlatıcı
cd "$(dirname "$0")"

# 5050 portunda çalışan eski süreç varsa temizle
kill $(lsof -t -i:5050) 2>/dev/null

echo "Sınav Kağıdı Hazırlama Web Sistemi Başlatılıyor..."
python3 app.py &
PID=$!
sleep 1

# Tarayıcıda aç
open "http://localhost:5050"

echo "Web sitesi açıldı: http://localhost:5050"
wait $PID

