/**
 * @file Arduino.ino
 * @brief Otonom Engelden Kaçan Robot - I2C & Seri Port Telemetri Destekli Firmware
 * @author Vahit Keskin
 */

#include "src/Config.h"
#include "src/DistanceSensor.h"
#include "src/MotorDriver.h"
#include "src/ServoScanner.h"
#include "src/I2CComm.h"

DistanceSensor sensor(PIN_TRIG, PIN_ECHO);
MotorDriver motors(PIN_ENA, PIN_IN1, PIN_IN2, PIN_IN3, PIN_IN4, PIN_ENB);
ServoScanner scanner(PIN_SERVO);

enum RobotState {
    STATE_CRUISING = 0,
    STATE_AVOIDING = 1,
    STATE_STOPPED  = 2
};

RobotState currentState = STATE_CRUISING;
float lastFrontDist = 400.0f;
float lastLeftDist = 400.0f;
float lastRightDist = 400.0f;
unsigned long lastTelemetryTime = 0;

void publishTelemetry() {
    // I2C Veri Kayıtlarını Güncelle
    I2CComm::updateTelemetry(
        (uint16_t)lastFrontDist,
        scanner.getCurrentAngle(),
        (uint8_t)currentState,
        (uint16_t)lastLeftDist,
        (uint16_t)lastRightDist
    );

    // Seri Port Üzerinden Yapılandırılmış JSON Telemetri Gönder
    Serial.print(F("{\"front\":"));
    Serial.print((int)lastFrontDist);
    Serial.print(F(",\"angle\":"));
    Serial.print(scanner.getCurrentAngle());
    Serial.print(F(",\"state\":"));
    Serial.print((int)currentState);
    Serial.print(F(",\"left\":"));
    Serial.print((int)lastLeftDist);
    Serial.print(F(",\"right\":"));
    Serial.print((int)lastRightDist);
    Serial.println(F("}"));
}

void setup() {
    Serial.begin(115200);
    
    // I2C Slave Başlat (Varsayılan adres: 0x08)
    I2CComm::begin(I2C_DEFAULT_SLAVE_ADDR);
    
    // Sensör ve Sürücüleri Başlat
    sensor.begin();
    motors.begin();
    scanner.begin();

    delay(500);
    scanner.lookCenter();
    publishTelemetry();
}

void loop() {
    // 50ms'de bir periyodik telemetri yayını
    if (millis() - lastTelemetryTime >= 50) {
        lastTelemetryTime = millis();
        publishTelemetry();
    }

    switch (currentState) {
        case STATE_CRUISING: {
            lastFrontDist = sensor.getRawDistance();
            
            if (lastFrontDist <= OBSTACLE_LIMIT_CM) {
                motors.stop();
                currentState = STATE_AVOIDING;
                publishTelemetry();
            } else {
                motors.forward(SPEED_CRUISE);
            }
            break;
        }

        case STATE_AVOIDING: {
            motors.stop();
            delay(80);

            // Yakınsa hafif geri çekil
            if (sensor.getRawDistance() <= STOP_DISTANCE_CM) {
                motors.backward(SPEED_REVERSE);
                delay(250);
                motors.stop();
            }

            // Sağ Taraması
            scanner.lookRight();
            publishTelemetry();
            lastRightDist = sensor.getFilteredDistance(3);
            publishTelemetry();

            // Sol Taraması
            scanner.lookLeft();
            publishTelemetry();
            lastLeftDist = sensor.getFilteredDistance(3);
            publishTelemetry();

            // Merkeze Dönüş
            scanner.lookCenter();
            publishTelemetry();

            // Karar Verme
            if (lastRightDist < OBSTACLE_LIMIT_CM && lastLeftDist < OBSTACLE_LIMIT_CM) {
                motors.backward(SPEED_REVERSE);
                delay(350);
                motors.turnRight(SPEED_TURN);
                delay(650);
            } else if (lastRightDist >= lastLeftDist) {
                motors.turnRight(SPEED_TURN);
                delay(400);
            } else {
                motors.turnLeft(SPEED_TURN);
                delay(400);
            }

            motors.stop();
            delay(100);
            currentState = STATE_CRUISING;
            publishTelemetry();
            break;
        }

        case STATE_STOPPED:
            motors.stop();
            break;
    }
}
