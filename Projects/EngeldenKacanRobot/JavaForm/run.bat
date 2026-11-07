@echo off
setlocal
cd /d "%~dp0"

if not exist EngeldenKacanRobot.jar (
    call build.bat
)

echo [Java Form] Telemetri Uygulamasi Baslatiliyor...
java -jar EngeldenKacanRobot.jar %*
pause
