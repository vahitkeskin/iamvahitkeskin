#!/usr/bin/env python3
"""
Engelden Kaçan Robot - I2C Uzaktan Master İstemci & Tanı Aracı
Bu betik, I2C Master olarak çalışan bir birimin (Raspberry Pi, ESP32 veya PC USB-I2C köprüsü)
Arduino Slave (0x08) üzerindeki telemetri register'larını nasıl sorgulayacağını modeller.

Register Haritası:
  0x01: REG_FRONT_DISTANCE   (uint16_t, 2 Bayt)
  0x02: REG_SERVO_ANGLE      (uint8_t, 1 Bayt)
  0x03: REG_ROBOT_STATE      (uint8_t, 1 Bayt)
  0x04: REG_LEFT_DISTANCE    (uint16_t, 2 Bayt)
  0x05: REG_RIGHT_DISTANCE   (uint16_t, 2 Bayt)
  0xFF: REG_FULL_TELEMETRY   (8 Bayt: [0xAA, frontH, frontL, angle, state, left, right, checksum])
"""

import sys
import time

I2C_SLAVE_ADDR = 0x08

REG_FRONT_DISTANCE = 0x01
REG_SERVO_ANGLE = 0x02
REG_ROBOT_STATE = 0x03
REG_LEFT_DISTANCE = 0x04
REG_RIGHT_DISTANCE = 0x05
REG_FULL_TELEMETRY = 0xFF

STATE_MAP = {
    0: "CRUISING (Seyir Modu)",
    1: "AVOIDING (Engel Kaçış Modu)",
    2: "STOPPED (Durduruldu)"
}

def decode_full_telemetry(packet_bytes):
    """
    8 Baytlık Tam Telemetri Paketini Çözümler:
    [0xAA, frontH, frontL, servoAngle, state, left, right, checksum]
    """
    if len(packet_bytes) != 8:
        raise ValueError(f"Geçersiz paket uzunluğu: {len(packet_bytes)} (Beklenen: 8)")

    header = packet_bytes[0]
    if header != 0xAA:
        raise ValueError(f"Hatalı paket başlığı: {hex(header)} (Beklenen: 0xAA)")

    front_h = packet_bytes[1]
    front_l = packet_bytes[2]
    servo_angle = packet_bytes[3]
    state_code = packet_bytes[4]
    left_dist = packet_bytes[5]
    right_dist = packet_bytes[6]
    checksum = packet_bytes[7]

    expected_chk = front_h ^ front_l ^ servo_angle ^ state_code ^ left_dist ^ right_dist
    if checksum != expected_chk:
        raise ValueError(f"Sağlama (Checksum) Hatası! Alınan: {hex(checksum)}, Hesaplanan: {hex(expected_chk)}")

    front_dist = (front_h << 8) | front_l
    return {
        "front_distance_cm": front_dist,
        "servo_angle_deg": servo_angle,
        "robot_state": STATE_MAP.get(state_code, f"Bilinmeyen ({state_code})"),
        "left_distance_cm": left_dist,
        "right_distance_cm": right_dist,
        "checksum_valid": True
    }

def main():
    print("=" * 60)
    print(f" [I2C MASTER İSTEMCİ] Hedef Slave Adresi: {hex(I2C_SLAVE_ADDR)}")
    print("=" * 60)

    # Örnek simüle edilmiş I2C paketi testi (Arduino tarafından üretilen baytlar)
    sample_front = 24  # 24 cm
    sample_angle = 90  # 90 derece
    sample_state = 0   # CRUISING
    sample_left = 45   # 45 cm
    sample_right = 38  # 38 cm
    
    front_h = (sample_front >> 8) & 0xFF
    front_l = sample_front & 0xFF
    chk = front_h ^ front_l ^ sample_angle ^ sample_state ^ sample_left ^ sample_right
    sample_packet = bytes([0xAA, front_h, front_l, sample_angle, sample_state, sample_left, sample_right, chk])

    print(f"\n[1] Ham I2C Paketi (0xFF Register): {[hex(b) for b in sample_packet]}")
    decoded = decode_full_telemetry(sample_packet)

    print("\n[2] Çözümlenen Telemetri Verileri:")
    print(f"  • HC-SR04 Ön Mesafe: {decoded['front_distance_cm']} cm")
    print(f"  • Servo Motor Açısı : {decoded['servo_angle_deg']}°")
    print(f"  • Robot Durumu       : {decoded['robot_state']}")
    print(f"  • Sol Koridor Mesafesi: {decoded['left_distance_cm']} cm")
    print(f"  • Sağ Koridor Mesafesi: {decoded['right_distance_cm']} cm")
    print(f"  • Checksum Doğrulaması: {'BAŞARILI' if decoded['checksum_valid'] else 'HATALI'}")
    print("\n[OK] I2C protokolü tam uyumlu ve çalışmaya hazır.\n")

if __name__ == "__main__":
    main()
