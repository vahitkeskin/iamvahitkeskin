#include "I2CComm.h"

uint8_t I2CComm::currentRegister = REG_FRONT_DISTANCE;
TelemetryData I2CComm::currentTelemetry = {0, 90, 0, 0, 0, 7840, 85, 0};

void I2CComm::begin(uint8_t address) {
    Wire.begin(address);
    Wire.onReceive(handleReceive);
    Wire.onRequest(handleRequest);
}

void I2CComm::updateTelemetry(uint16_t frontDist, uint8_t servoAngle, uint8_t state,
                            uint16_t leftDist, uint16_t rightDist,
                            uint16_t batMilliVolt, uint8_t batPct, uint8_t charging) {
    currentTelemetry.frontDistance = frontDist;
    currentTelemetry.servoAngle = servoAngle;
    currentTelemetry.robotState = state;
    currentTelemetry.leftDistance = leftDist;
    currentTelemetry.rightDistance = rightDist;
    currentTelemetry.batteryMilliVolt = batMilliVolt;
    currentTelemetry.batteryPercent = batPct;
    currentTelemetry.isCharging = charging;
}

void I2CComm::handleReceive(int numBytes) {
    if (Wire.available()) {
        currentRegister = Wire.read();
    }
}

void I2CComm::handleRequest() {
    switch (currentRegister) {
        case REG_FRONT_DISTANCE: {
            uint8_t buf[2];
            buf[0] = (currentTelemetry.frontDistance >> 8) & 0xFF;
            buf[1] = currentTelemetry.frontDistance & 0xFF;
            Wire.write(buf, 2);
            break;
        }
        case REG_SERVO_ANGLE:
            Wire.write(currentTelemetry.servoAngle);
            break;
            
        case REG_ROBOT_STATE:
            Wire.write(currentTelemetry.robotState);
            break;
            
        case REG_LEFT_DISTANCE: {
            uint8_t buf[2];
            buf[0] = (currentTelemetry.leftDistance >> 8) & 0xFF;
            buf[1] = currentTelemetry.leftDistance & 0xFF;
            Wire.write(buf, 2);
            break;
        }
        case REG_RIGHT_DISTANCE: {
            uint8_t buf[2];
            buf[0] = (currentTelemetry.rightDistance >> 8) & 0xFF;
            buf[1] = currentTelemetry.rightDistance & 0xFF;
            Wire.write(buf, 2);
            break;
        }
        case REG_BATTERY_VOLT: {
            uint8_t buf[2];
            buf[0] = (currentTelemetry.batteryMilliVolt >> 8) & 0xFF;
            buf[1] = currentTelemetry.batteryMilliVolt & 0xFF;
            Wire.write(buf, 2);
            break;
        }
        case REG_BATTERY_PERCENT:
            Wire.write(currentTelemetry.batteryPercent);
            break;

        case REG_CHARGING_STATE:
            Wire.write(currentTelemetry.isCharging);
            break;

        case REG_FULL_TELEMETRY:
        default: {
            // 11 Baytlık Tam Telemetri Paketi
            // [0xAA, frontH, frontL, servoAngle, state, leftH, rightH, batVoltH, batVoltL, batPct, checksum]
            uint8_t packet[11];
            packet[0] = 0xAA; // Header
            packet[1] = (currentTelemetry.frontDistance >> 8) & 0xFF;
            packet[2] = currentTelemetry.frontDistance & 0xFF;
            packet[3] = currentTelemetry.servoAngle;
            packet[4] = currentTelemetry.robotState;
            packet[5] = (uint8_t)(currentTelemetry.leftDistance & 0xFF);
            packet[6] = (uint8_t)(currentTelemetry.rightDistance & 0xFF);
            packet[7] = (currentTelemetry.batteryMilliVolt >> 8) & 0xFF;
            packet[8] = currentTelemetry.batteryMilliVolt & 0xFF;
            packet[9] = currentTelemetry.batteryPercent;
            packet[10] = (packet[1] ^ packet[2] ^ packet[3] ^ packet[4] ^ packet[5] ^ packet[6] ^ packet[7] ^ packet[8] ^ packet[9]);
            Wire.write(packet, 11);
            break;
        }
    }
}
