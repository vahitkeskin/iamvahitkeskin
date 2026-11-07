#ifndef SERVO_SCANNER_H
#define SERVO_SCANNER_H

#include <Arduino.h>
#include <Servo.h>

class ServoScanner {
public:
    ServoScanner(uint8_t pin);
    void begin();
    
    void lookCenter();
    void lookRight();
    void lookLeft();
    void setAngle(uint8_t angle);
    uint8_t getCurrentAngle() const { return _currentAngle; }

private:
    uint8_t _pin;
    uint8_t _currentAngle;
    Servo _servo;
};

#endif // SERVO_SCANNER_H
