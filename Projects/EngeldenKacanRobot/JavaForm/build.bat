@echo off
setlocal
cd /d "%~dp0"

if not exist bin mkdir bin

echo [1/3] Java dosyalari derleniyor...
dir /s /b src\*.java > sources.txt
javac -encoding UTF-8 -d bin @sources.txt
del sources.txt

echo [2/3] Calistirilabilir JAR paketi olusturuluyor (EngeldenKacanRobot.jar)...
jar cfe EngeldenKacanRobot.jar com.engeldenkacan.Main -C bin .

echo [3/3] Derleme ve paketleme basarili! Cikti: JavaForm\EngeldenKacanRobot.jar
