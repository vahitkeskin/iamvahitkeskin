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
#define REG_BATTERY_VOLT     0x06
#define REG_BATTERY_PERCENT  0x07
#define REG_CHARGING_STATE   0x08
#define REG_COMMAND          0x10
#define REG_FULL_TELEMETRY   0xFF

struct TelemetryData {
    uint16_t frontDistance;     // cm
    uint8_t servoAngle;         // 0-180 derece
    uint8_t robotState;         // 0: CRUISING, 1: AVOIDING, 2: STOPPED, 3: MANUAL
    uint16_t leftDistance;      // cm
    uint16_t rightDistance;     // cm
    uint16_t batteryMilliVolt;  // mV (ör. 7840 mV = 7.84V)
    uint8_t batteryPercent;     // 0 - 100%
    uint8_t isCharging;         // 0: Deşarj, 1: Şarj Oluyor
};

class I2CComm {
public:
    static void begin(uint8_t address = I2C_DEFAULT_SLAVE_ADDR);
    static void setCommandHandler(void (*handler)(const String& cmd));
    static void updateTelemetry(uint16_t frontDist, uint8_t servoAngle, uint8_t state,
                                uint16_t leftDist, uint16_t rightDist,
                                uint16_t batMilliVolt = 7840, uint8_t batPct = 85, uint8_t charging = 0);
    
    static void handleReceive(int numBytes);
    static void handleRequest();

    static unsigned long getLastActiveTime();
    static uint32_t getPacketCount();

private:
    static uint8_t currentRegister;
    static TelemetryData currentTelemetry;
    static void (*commandHandler)(const String& cmd);
    static volatile unsigned long lastI2CActiveTime;
    static volatile uint32_t i2cPacketCount;
};

#endif // I2C_COMM_H
