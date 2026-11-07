@echo off
setlocal
cd /d "%~dp0"

if not exist bin mkdir bin

echo [1/2] Java dosyalari derleniyor...
dir /s /b src\*.java > sources.txt
javac -encoding UTF-8 -d bin @sources.txt
del sources.txt

echo [2/2] Derleme basarili! Ciktilar JavaForm\bin dizinindedir.
