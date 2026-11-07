#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

if [ ! -f "EngeldenKacanRobot.jar" ]; then
    ./build.sh
fi

echo "Java Form Telemetri Uygulaması Başlatılıyor..."
java -jar EngeldenKacanRobot.jar "$@"
