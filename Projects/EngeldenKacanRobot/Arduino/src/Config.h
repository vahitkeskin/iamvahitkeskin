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

