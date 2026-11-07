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

private:
    uint8_t _pin;
    Servo _servo;
};

#endif // SERVO_SCANNER_H

