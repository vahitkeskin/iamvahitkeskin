@echo off
setlocal
cd /d "%~dp0"

if not exist bin (
    call build.bat
)

echo [Java Form] Telemetri Uygulamasi Baslatiliyor...
java -cp bin com.engeldenkacan.Main %*
pause
