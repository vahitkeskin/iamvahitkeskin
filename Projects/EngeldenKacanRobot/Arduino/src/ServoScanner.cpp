#include "ServoScanner.h"
#include "Config.h"

ServoScanner::ServoScanner(uint8_t pin) : _pin(pin), _currentAngle(SERVO_CENTER_ANGLE) {}

void ServoScanner::begin() {
    _servo.attach(_pin);
    lookCenter();
}

void ServoScanner::setAngle(uint8_t angle) {
    _currentAngle = angle;
    _servo.write(angle);
    delay(SERVO_SETTLE_DELAY);
}

void ServoScanner::lookCenter() {
    setAngle(SERVO_CENTER_ANGLE);
}

void ServoScanner::lookRight() {
    setAngle(SERVO_RIGHT_ANGLE);
}

void ServoScanner::lookLeft() {
    setAngle(SERVO_LEFT_ANGLE);
}
