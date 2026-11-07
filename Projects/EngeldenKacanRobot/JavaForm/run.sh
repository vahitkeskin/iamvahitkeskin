#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

if [ ! -d "bin" ]; then
    ./build.sh
fi

echo "Java Form Telemetri Uygulaması Başlatılıyor..."
java -cp bin com.engeldenkacan.Main "$@"

