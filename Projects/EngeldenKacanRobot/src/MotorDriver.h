#ifndef MOTOR_DRIVER_H
#define MOTOR_DRIVER_H

#include <Arduino.h>

class MotorDriver {
public:
    MotorDriver(uint8_t ena, uint8_t in1, uint8_t in2,
                uint8_t in3, uint8_t in4, uint8_t enb);
                
    void begin();
    
    void forward(uint8_t speed);
    void backward(uint8_t speed);
    void turnLeft(uint8_t speed);
    void turnRight(uint8_t speed);
    void stop();

private:
    uint8_t _ena, _in1, _in2;
    uint8_t _in3, _in4, _enb;
};

#endif // MOTOR_DRIVER_H

