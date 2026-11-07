#ifndef CONFIG_H
#define CONFIG_H

#include <Arduino.h>

// ==========================================
// HC-SR04 Ultrasonik Mesafe Sensörü Pinleri
// ==========================================
#define PIN_TRIG 12
#define PIN_ECHO 13

// ==========================================
// SG90 Servo Motor Pini (Sensör Tarama)
// ==========================================
#define PIN_SERVO 11

// ==========================================
// L298N Çift Motor Sürücü Pinleri
// ==========================================
// Sol Motorlar
#define PIN_ENA 5   // Sol motor PWM hız kontrolü
#define PIN_IN1 6   // Sol motor ileri
#define PIN_IN2 7   // Sol motor geri

// Sağ Motorlar
#define PIN_IN3 8   // Sağ motor ileri
#define PIN_IN4 9   // Sağ motor geri
#define PIN_ENB 10  // Sağ motor PWM hız kontrolü

// ==========================================
// Batarya ve Güç Yönetimi Pinleri (2S Li-Ion)
// ==========================================
#define PIN_BATTERY         A0   // Direnç bölücü üzerinden analog voltaj okuma (R1=10k, R2=10k)
#define PIN_BUZZER          4    // Korna / Sesli İkaz Buzzer Pini
#define BATTERY_VOLT_DIV    2.0f // Gerilim bölücü çarpanı (R1+R2)/R2
#define BATTERY_MIN_VOLT    6.4f // 2S Li-ion minimum deşarj kesme gerilimi (0%)
#define BATTERY_MAX_VOLT    8.4f // 2S Li-ion tam dolu şarj gerilimi (100%)

// ==========================================
// Eşik ve Hız Parametreleri
// ==========================================
#define OBSTACLE_LIMIT_CM   25  // Bu mesafenin altında engel algılanır (cm)
#define STOP_DISTANCE_CM    15  // Kritik acil durma mesafesi (cm)

#define SPEED_CRUISE        180 // Normal seyir hızı (0-255 PWM)
#define SPEED_TURN          200 // Dönüş hızı (0-255 PWM)
#define SPEED_REVERSE       160 // Geri manevra hızı (0-255 PWM)

// ==========================================
// Servo Açı Parametreleri
// ==========================================
#define SERVO_CENTER_ANGLE  90
#define SERVO_RIGHT_ANGLE   20
#define SERVO_LEFT_ANGLE    160
#define SERVO_SETTLE_DELAY  250 // Servonun konumlanma bekleme süresi (ms)

#endif // CONFIG_H
