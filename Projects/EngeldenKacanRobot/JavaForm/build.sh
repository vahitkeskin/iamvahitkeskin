#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"
mkdir -p bin

echo "[1/2] Java kaynak dosyaları derleniyor..."
find src -name "*.java" > sources.txt
javac -encoding UTF-8 -d bin @sources.txt
rm sources.txt

echo "[2/2] Derleme başarılı! Çıktılar 'JavaForm/bin' dizininde."

