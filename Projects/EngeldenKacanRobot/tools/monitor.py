#!/usr/bin/env python3
"""
Robot Canlı Seri Port Telemetri İzleme Aracı
Harici kütüphane gerektirmez (Pure Python / macOS POSIX termios).
Kullanım: 
    python3 tools/monitor.py [/dev/cu.usbserial-1240] [--duration 5]
"""

import sys
import os
import glob
import termios
import select
import time
import argparse

def find_serial_port():
    ports = glob.glob("/dev/cu.usbserial*")
    if not ports:
        ports = glob.glob("/dev/cu.usbmodem*")
    if ports:
        return sorted(ports, reverse=True)[0]
    return "/dev/cu.usbserial-1240"

def configure_port(fd, baudrate=115200):
    baud_map = {
        9600: termios.B9600,
        19200: termios.B19200,
        38400: termios.B38400,
        57600: termios.B57600,
        115200: termios.B115200
    }
    b = baud_map.get(baudrate, termios.B115200)
    
    attrs = termios.tcgetattr(fd)
    attrs[0] = 0
    attrs[1] = 0
    attrs[2] = termios.CS8 | termios.CREAD | termios.CLOCAL
    attrs[3] = 0
    attrs[4] = b
    attrs[5] = b
    attrs[6][termios.VMIN] = 1
    attrs[6][termios.VTIME] = 0
    
    termios.tcsetattr(fd, termios.TCSANOW, attrs)

def colorize(text):
    RESET = "\033[0m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    RED = "\033[91m"
    CYAN = "\033[96m"
    BOLD = "\033[1m"
    
    if "[ENGEL ALGILANDI]" in text or "Kritik" in text:
        return f"{RED}{BOLD}{text}{RESET}"
    elif "Seyir" in text or "Seyre" in text or "hazır" in text:
        return f"{GREEN}{text}{RESET}"
    elif "taranıyor" in text or "Tarama" in text:
        return f"{YELLOW}{text}{RESET}"
    elif "Mesafe:" in text:
        return f"{CYAN}{text}{RESET}"
    return text

def main():
    parser = argparse.ArgumentParser(description="Arduino Robot Telemetri Monitörü")
    parser.add_argument("port", nargs="?", default=find_serial_port(), help="Seri Port")
    parser.add_argument("--duration", type=float, default=0, help="Çalışma süresi (saniye, 0 = sonsuz)")
    args = parser.parse_args()

    port = args.port
    print(f"\033[1;34m[ROBOT MONİTÖRÜ]\033[0m Bağlanılıyor: {port} @ 115200 baud")
    if args.duration > 0:
        print(f"\033[90mİzleme süresi: {args.duration} saniye\033[0m\n")
    else:
        print("\033[90mÇıkmak için Ctrl+C tuşlayın...\033[0m\n")

    try:
        fd = os.open(port, os.O_RDWR | os.O_NOCTTY | os.O_NONBLOCK)
        configure_port(fd, 115200)
    except Exception as e:
        print(f"\033[91mPort açılamadı ({port}): {e}\033[0m")
        sys.exit(1)

    # Arduino DTR Reset darbesi gönder
    try:
        import fcntl
        import termios
        # TIOCM_DTR = 0x002
        # DTR LOW -> HIGH darbesi
        status = termios.TIOCM_DTR
        fcntl.ioctl(fd, termios.TIOCMBIC, bytes([status]))
        time.sleep(0.1)
        fcntl.ioctl(fd, termios.TIOCMBIS, bytes([status]))
    except Exception:
        pass

    start_time = time.time()
    buffer = b""
    line_count = 0
    try:
        while True:
            if args.duration > 0 and (time.time() - start_time) >= args.duration:
                break
                
            r, _, _ = select.select([fd], [], [], 0.1)
            if r:
                chunk = os.read(fd, 256)
                if not chunk:
                    continue
                buffer += chunk
                while b"\n" in buffer:
                    line, buffer = buffer.split(b"\n", 1)
                    decoded = line.decode("utf-8", errors="replace").strip()
                    if decoded:
                        line_count += 1
                        timestamp = time.strftime("[%H:%M:%S]")
                        print(f"\033[90m{timestamp}\033[0m {colorize(decoded)}")
    except KeyboardInterrupt:
        print("\n\033[93mMonitör kullanıcı tarafından durduruldu.\033[0m")
    finally:
        os.close(fd)
        print(f"\n\033[1;32m[TAMAMLANDI]\033[0m Toplam {line_count} telemetri satırı okundu.")

if __name__ == "__main__":
    main()
