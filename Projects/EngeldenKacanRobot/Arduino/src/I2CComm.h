#ifndef I2C_COMM_H
#define I2C_COMM_H

#include <Arduino.h>
#include <Wire.h>

#define I2C_DEFAULT_SLAVE_ADDR 0x08

// I2C Kayıt (Register) Adresleri
#define REG_FRONT_DISTANCE   0x01
#define REG_SERVO_ANGLE      0x02
#define REG_ROBOT_STATE      0x03
#define REG_LEFT_DISTANCE    0x04
#define REG_RIGHT_DISTANCE   0x05
#define REG_FULL_TELEMETRY   0xFF

struct TelemetryData {
    uint16_t frontDistance; // cm
    uint8_t servoAngle;     // 0-180 derece
    uint8_t robotState;     // 0: CRUISING, 1: AVOIDING
    uint16_t leftDistance;  // cm
    uint16_t rightDistance; // cm
};

class I2CComm {
public:
    static void begin(uint8_t address = I2C_DEFAULT_SLAVE_ADDR);
    static void updateTelemetry(uint16_t frontDist, uint8_t servoAngle, uint8_t state, uint16_t leftDist, uint16_t rightDist);
    
    static void handleReceive(int numBytes);
    static void handleRequest();

private:
    static uint8_t currentRegister;
    static TelemetryData currentTelemetry;
};

#endif // I2C_COMM_H

