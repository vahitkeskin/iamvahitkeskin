#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"
mkdir -p bin

echo "[1/3] Java kaynak dosyaları derleniyor..."
find src -name "*.java" > sources.txt
javac -encoding UTF-8 -d bin @sources.txt
rm sources.txt

echo "[2/3] Çalıştırılabilir JAR paketi oluşturuluyor (EngeldenKacanRobot.jar)..."
jar cfe EngeldenKacanRobot.jar com.engeldenkacan.Main -C bin .

echo "[3/3] Derleme ve paketleme başarılı! Çıktı: 'JavaForm/EngeldenKacanRobot.jar'"
