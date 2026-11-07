#include "MotorDriver.h"

MotorDriver::MotorDriver(uint8_t ena, uint8_t in1, uint8_t in2,
                         uint8_t in3, uint8_t in4, uint8_t enb)
    : _ena(ena), _in1(in1), _in2(in2),
      _in3(in3), _in4(in4), _enb(enb) {}

void MotorDriver::begin() {
    pinMode(_ena, OUTPUT);
    pinMode(_in1, OUTPUT);
    pinMode(_in2, OUTPUT);
    
    pinMode(_in3, OUTPUT);
    pinMode(_in4, OUTPUT);
    pinMode(_enb, OUTPUT);
    
    stop();
}

void MotorDriver::forward(uint8_t speed) {
    // Sol Motor İleri
    digitalWrite(_in1, HIGH);
    digitalWrite(_in2, LOW);
    analogWrite(_ena, speed);
    
    // Sağ Motor İleri
    digitalWrite(_in3, HIGH);
    digitalWrite(_in4, LOW);
    analogWrite(_enb, speed);
}

void MotorDriver::backward(uint8_t speed) {
    // Sol Motor Geri
    digitalWrite(_in1, LOW);
    digitalWrite(_in2, HIGH);
    analogWrite(_ena, speed);
    
    // Sağ Motor Geri
    digitalWrite(_in3, LOW);
    digitalWrite(_in4, HIGH);
    analogWrite(_enb, speed);
}

void MotorDriver::turnLeft(uint8_t speed) {
    // Kendi ekseni etrafında sola dön: Sol motor geri, Sağ motor ileri
    digitalWrite(_in1, LOW);
    digitalWrite(_in2, HIGH);
    analogWrite(_ena, speed);
    
    digitalWrite(_in3, HIGH);
    digitalWrite(_in4, LOW);
    analogWrite(_enb, speed);
}

void MotorDriver::turnRight(uint8_t speed) {
    // Kendi ekseni etrafında sağa dön: Sol motor ileri, Sağ motor geri
    digitalWrite(_in1, HIGH);
    digitalWrite(_in2, LOW);
    analogWrite(_ena, speed);
    
    digitalWrite(_in3, LOW);
    digitalWrite(_in4, HIGH);
    analogWrite(_enb, speed);
}

void MotorDriver::stop() {
    digitalWrite(_in1, LOW);
    digitalWrite(_in2, LOW);
    analogWrite(_ena, 0);
    
    digitalWrite(_in3, LOW);
    digitalWrite(_in4, LOW);
    analogWrite(_enb, 0);
}

