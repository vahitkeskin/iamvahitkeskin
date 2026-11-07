/**
 * @file EngeldenKacanRobot.ino
 * @brief Otonom Engelden Kaçan Robot Ana Kontrol Kodu
 * @author Vahit Keskin
 */

#include "src/Config.h"
#include "src/DistanceSensor.h"
#include "src/MotorDriver.h"
#include "src/ServoScanner.h"

// Modül nesnelerinin ilklendirilmesi
DistanceSensor sensor(PIN_TRIG, PIN_ECHO);
MotorDriver motors(PIN_ENA, PIN_IN1, PIN_IN2, PIN_IN3, PIN_IN4, PIN_ENB);
ServoScanner scanner(PIN_SERVO);

// Durum Makinesi (State Machine) Tanımları
enum RobotState {
    CRUISING,
    AVOIDING_OBSTACLE
};

RobotState currentState = CRUISING;

void setup() {
    Serial.begin(115200);
    Serial.println(F("========================================"));
    Serial.println(F(" Engellerden Kaçan Robot Başlatılıyor... "));
    Serial.println(F("========================================"));

    // Donanım birimlerini başlat
    sensor.begin();
    motors.begin();
    scanner.begin();

    // Başlangıç beklemesi ve güvenli kontrol
    delay(1000);
    scanner.lookCenter();
    Serial.println(F("Robot hazır. Seyir moduna geçiliyor."));
}

void loop() {
    switch (currentState) {
        case CRUISING: {
            float frontDistance = sensor.getRawDistance();
            
            // Hata ayıklama çıktısı
            // Serial.print(F("Ön Mesafe: "));
            // Serial.println(frontDistance);

            if (frontDistance <= OBSTACLE_LIMIT_CM) {
                Serial.print(F("[ENGEL ALGILANDI] Mesafe: "));
                Serial.print(frontDistance);
                Serial.println(F(" cm. Acil durduruluyor."));
                
                motors.stop();
                currentState = AVOIDING_OBSTACLE;
            } else {
                motors.forward(SPEED_CRUISE);
            }
            break;
        }

        case AVOIDING_OBSTACLE: {
            motors.stop();
            delay(100);

            // Çok yakınsa hafifçe geri çekil
            float closeCheck = sensor.getRawDistance();
            if (closeCheck <= STOP_DISTANCE_CM) {
                Serial.println(F("Kritik yakınlık! Geri manevra yapılıyor..."));
                motors.backward(SPEED_REVERSE);
                delay(300);
                motors.stop();
            }

            // Çevre Tarama: Sağ tarafı ölç
            Serial.println(F("Sağ yön taranıyor..."));
            scanner.lookRight();
            float distanceRight = sensor.getFilteredDistance(3);
            Serial.print(F("Sağ Mesafe: "));
            Serial.print(distanceRight);
            Serial.println(F(" cm"));

            // Çevre Tarama: Sol tarafı ölç
            Serial.println(F("Sol yön taranıyor..."));
            scanner.lookLeft();
            float distanceLeft = sensor.getFilteredDistance(3);
            Serial.print(F("Sol Mesafe: "));
            Serial.print(distanceLeft);
            Serial.println(F(" cm"));

            // Sensörü tekrar merkeze al
            scanner.lookCenter();

            // Karar Mekanizması:
            // 1. İki taraf da tıkalıysa -> Tam geri dön (180 derece manevra)
            if (distanceRight < OBSTACLE_LIMIT_CM && distanceLeft < OBSTACLE_LIMIT_CM) {
                Serial.println(F("İki yön de kapalı! 180 derece geri dönüş yapılıyor..."));
                motors.backward(SPEED_REVERSE);
                delay(400);
                motors.turnRight(SPEED_TURN);
                delay(700);
            }
            // 2. Sağ taraf daha açıksa -> Sağa dön
            else if (distanceRight >= distanceLeft) {
                Serial.println(F("Sağ taraf daha açık. Sağa dönülüyor..."));
                motors.turnRight(SPEED_TURN);
                delay(450);
            }
            // 3. Sol taraf daha açıksa -> Sola dön
            else {
                Serial.println(F("Sol taraf daha açık. Sola dönülüyor..."));
                motors.turnLeft(SPEED_TURN);
                delay(450);
            }

            motors.stop();
            delay(150);
            Serial.println(F("Manevra tamamlandı. Seyre devam ediliyor."));
            currentState = CRUISING;
            break;
        }
    }
}

