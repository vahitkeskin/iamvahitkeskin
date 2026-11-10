/**
 * @file Arduino.ino
 * @brief Otonom Engelden Kaçan Robot - I2C & Seri Port Telemetri, Batarya ve Doğrudan Kumanda Firmware
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
    STATE_CRUISING        = 0,
    STATE_AVOIDING        = 1,
    STATE_STOPPED         = 2,
    STATE_MANUAL_OVERRIDE = 3
};

RobotState currentState = STATE_CRUISING;
float lastFrontDist = 400.0f;
float lastLeftDist = 400.0f;
float lastRightDist = 400.0f;
float currentBatteryVoltage = 7.84f;
int currentBatteryPercent = 85;
uint8_t isCharging = 0;
unsigned long lastTelemetryTime = 0;
unsigned long lastBatteryReadTime = 0;

float readBatteryVoltage() {
    int raw = analogRead(PIN_BATTERY);
    float vPin = (raw / 1023.0f) * 5.0f;
    float vBat = vPin * BATTERY_VOLT_DIV;
    // Eğer A0 pini boşta veya bağlı değilse nominal 2S Li-Ion değerine (7.84V) ayarla
    if (vBat < 2.0f) return 7.84f;
    return vBat;
}

int calculateBatteryPercent(float vBat) {
    if (vBat >= BATTERY_MAX_VOLT) return 100;
    if (vBat <= BATTERY_MIN_VOLT) return 0;
    return (int)(((vBat - BATTERY_MIN_VOLT) / (BATTERY_MAX_VOLT - BATTERY_MIN_VOLT)) * 100.0f);
}

void publishTelemetry() {
    uint16_t batMilliVolt = (uint16_t)(currentBatteryVoltage * 1000);

    // I2C Veri Kayıtlarını Güncelle
    I2CComm::updateTelemetry(
        (uint16_t)lastFrontDist,
        scanner.getCurrentAngle(),
        (uint8_t)currentState,
        (uint16_t)lastLeftDist,
        (uint16_t)lastRightDist,
        batMilliVolt,
        (uint8_t)currentBatteryPercent,
        isCharging
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
    Serial.print(F(",\"vbat\":"));
    Serial.print(currentBatteryVoltage, 2);
    Serial.print(F(",\"bat\":"));
    Serial.print(currentBatteryPercent);
    Serial.print(F(",\"chg\":"));
    Serial.print((int)isCharging);
    long i2cAge = (I2CComm::getLastActiveTime() > 0) ? (long)(millis() - I2CComm::getLastActiveTime()) : -1;
    Serial.print(F(",\"i2c\":"));
    Serial.print(i2cAge);
    Serial.print(F(",\"i2c_pkts\":"));
    Serial.print(I2CComm::getPacketCount());
    Serial.println(F("}"));
}

void scanI2CBus() {
    Serial.println(F("[I2C SCANNER] A4 (SDA) & A5 (SCL) I2C veriyolu taranıyor..."));
    
    // Hat Fiziksel Elektrik Testi
    pinMode(A4, INPUT);
    pinMode(A5, INPUT);
    delay(10);
    int rawA4 = analogRead(A4);
    int rawA5 = analogRead(A5);
    float vA4 = (rawA4 / 1023.0f) * 5.0f;
    float vA5 = (rawA5 / 1023.0f) * 5.0f;
    Serial.print(F("-> [HATTIN GERİLİMİ] SDA (A4): "));
    Serial.print(vA4, 2);
    Serial.print(F("V | SCL (A5): "));
    Serial.print(vA5, 2);
    Serial.println(F("V"));

    Wire.begin(); // Master modunda tara
    int count = 0;
    for (uint8_t addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        uint8_t err = Wire.endTransmission();
        if (err == 0) {
            Serial.print(F("-> I2C Cihazı Bulundu: 0x"));
            if (addr < 16) Serial.print('0');
            Serial.println(addr, HEX);
            count++;
        }
    }
    if (count == 0) {
        Serial.println(F("-> Uyarı: I2C veriyolunda yanıt veren cihaz bulunamadı."));
        Serial.println(F("   (Kontrol: ESP32 enerjisi açık mı? 21->A4, 22->A5, GND->GND bağlı mı?)"));
    } else {
        Serial.print(F("-> Toplam "));
        Serial.print(count);
        Serial.println(F(" I2C cihazı yanıt verdi."));
    }
    // Slave moduna geri dön
    Wire.end();
    I2CComm::begin(I2C_DEFAULT_SLAVE_ADDR);
    I2CComm::setCommandHandler(executeCommand);
}

void executeCommand(String cmd) {
    cmd.trim();
    if (cmd.length() == 0) return;
    cmd.toUpperCase();

    if (cmd == "STOP" || cmd == "EMERGENCY") {
        currentState = STATE_STOPPED;
        motors.stop();
        publishTelemetry();
    } else if (cmd == "START" || cmd == "CRUISE" || cmd == "MODE:AUTO") {
        currentState = STATE_CRUISING;
        motors.forward(SPEED_CRUISE);
        publishTelemetry();
    } else if (cmd == "MODE:MANUAL") {
        currentState = STATE_MANUAL_OVERRIDE;
        motors.stop();
        publishTelemetry();
    } else if (cmd.startsWith("DRIVE:")) {
        currentState = STATE_MANUAL_OVERRIDE;
        // Format: DRIVE:FWD:180 / DRIVE:REV:160 / DRIVE:LEFT:180 / DRIVE:RIGHT:180 / DRIVE:STOP
        int firstColon = cmd.indexOf(':');
        int secondColon = cmd.indexOf(':', firstColon + 1);
        String dir = (secondColon > 0) ? cmd.substring(firstColon + 1, secondColon) : cmd.substring(firstColon + 1);
        uint8_t spd = SPEED_CRUISE;
        if (secondColon > 0) {
            spd = cmd.substring(secondColon + 1).toInt();
            if (spd == 0) spd = SPEED_CRUISE;
        }

        if (dir == "FWD" || dir == "FORWARD") {
            motors.forward(spd);
        } else if (dir == "REV" || dir == "BACKWARD") {
            motors.backward(spd);
        } else if (dir == "LEFT") {
            motors.turnLeft(spd);
        } else if (dir == "RIGHT") {
            motors.turnRight(spd);
        } else {
            motors.stop();
        }
        publishTelemetry();
    } else if (cmd.startsWith("SERVO:")) {
        int targetAngle = cmd.substring(6).toInt();
        targetAngle = constrain(targetAngle, 0, 180);
        scanner.setAngle(targetAngle);
        publishTelemetry();
    } else if (cmd.startsWith("BUZZER")) {
        digitalWrite(PIN_BUZZER, HIGH);
        delay(150);
        digitalWrite(PIN_BUZZER, LOW);
    } else if (cmd == "TEST:PINS" || cmd == "PINS") {
        Wire.end();
        Serial.println(F("[PIN TEST] A4=LOW, A5=HIGH..."));
        pinMode(A4, OUTPUT);
        pinMode(A5, OUTPUT);
        digitalWrite(A4, LOW);
        digitalWrite(A5, HIGH);
        delay(2000);
        Serial.println(F("[PIN TEST] A4=HIGH, A5=LOW..."));
        digitalWrite(A4, HIGH);
        digitalWrite(A5, LOW);
        delay(2000);
        Serial.println(F("[PIN TEST] A4=HIGH, A5=HIGH..."));
        digitalWrite(A4, HIGH);
        digitalWrite(A5, HIGH);
        delay(1000);
        // Slave moduna geri dön
        I2CComm::begin(I2C_DEFAULT_SLAVE_ADDR);
        I2CComm::setCommandHandler(executeCommand);
        Serial.println(F("[PIN TEST] Tamamlandı, I2C Slave aktif."));
    } else if (cmd == "I2C:SCAN" || cmd == "SCAN") {
        scanI2CBus();
    }
}

void processSerialCommands() {
    if (!Serial.available()) return;
    String cmd = Serial.readStringUntil('\n');
    executeCommand(cmd);
}

void setup() {
    Serial.begin(115200);
    
    // Buzzer pini çıkış
    pinMode(PIN_BUZZER, OUTPUT);
    digitalWrite(PIN_BUZZER, LOW);

    // I2C Slave Başlat (0x08) - A4=SDA, A5=SCL
    I2CComm::begin(I2C_DEFAULT_SLAVE_ADDR);
    I2CComm::setCommandHandler(executeCommand);
    Serial.println(F("[I2C Slave] Arduino Uno 0x08 adresinde I2C dinlemede (A4=SDA, A5=SCL)."));
    
    // Sensör ve Sürücüleri Başlat
    sensor.begin();
    motors.begin();
    scanner.begin();

    // Batarya ilk okuması
    currentBatteryVoltage = readBatteryVoltage();
    currentBatteryPercent = calculateBatteryPercent(currentBatteryVoltage);

    delay(500);
    scanner.lookCenter();
    publishTelemetry();
}

void loop() {
    // Seri porttan doğrudan kumanda komutlarını dinle
    processSerialCommands();

    // 2 saniyede bir batarya voltajını güncelle
    if (millis() - lastBatteryReadTime >= 2000) {
        lastBatteryReadTime = millis();
        currentBatteryVoltage = readBatteryVoltage();
        currentBatteryPercent = calculateBatteryPercent(currentBatteryVoltage);
    }

    // 50ms'de bir periyodik telemetri yayını
    if (millis() - lastTelemetryTime >= 50) {
        lastTelemetryTime = millis();
        publishTelemetry();
    }

    // Otonom sürüş mantığı (Sadece STATE_CRUISING veya STATE_AVOIDING iken çalışır)
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

        case STATE_MANUAL_OVERRIDE:
        case STATE_STOPPED:
            // Manuel kumanda veya acil fren modundayken robot otonom hareket etmez,
            // gelen komutları bekler.
            break;
    }
}
