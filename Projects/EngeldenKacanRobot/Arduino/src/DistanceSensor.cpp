#include "DistanceSensor.h"

DistanceSensor::DistanceSensor(uint8_t trigPin, uint8_t echoPin)
    : _trigPin(trigPin), _echoPin(echoPin) {}

void DistanceSensor::begin() {
    pinMode(_trigPin, OUTPUT);
    pinMode(_echoPin, INPUT);
    digitalWrite(_trigPin, LOW);
}

float DistanceSensor::getRawDistance() {
    // Tetikleyici pini temizle
    digitalWrite(_trigPin, LOW);
    delayMicroseconds(2);
    
    // 10us'lik yüksek darbe gönder
    digitalWrite(_trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(_trigPin, LOW);
    
    // Yankı süresini mikrosaniye cinsinden oku
    unsigned long duration = pulseIn(_echoPin, HIGH, TIMEOUT_US);
    
    // Zaman aşımı veya sinyal kaybı kontrolü
    if (duration == 0) {
        return 400.0f; // Engel yok kabul edilir (maksimum menzil)
    }
    
    // Ses hızı: 343 m/s = 0.0343 cm/us -> Gidiş-dönüş olduğu için / 2
    float distance = (duration * 0.0343f) / 2.0f;
    return distance;
}

float DistanceSensor::getFilteredDistance(uint8_t samples) {
    if (samples < 1) samples = 1;
    if (samples > 7) samples = 7;
    
    float readings[7];
    for (uint8_t i = 0; i < samples; i++) {
        readings[i] = getRawDistance();
        delay(10);
    }
    
    // Basit sıralama algoritması (Medyan filtre için)
    for (uint8_t i = 0; i < samples - 1; i++) {
        for (uint8_t j = i + 1; j < samples; j++) {
            if (readings[i] > readings[j]) {
                float temp = readings[i];
                readings[i] = readings[j];
                readings[j] = temp;
            }
        }
    }
    
    // Ortadaki değeri (medyan) döndürerek parazitleri filtrele
    return readings[samples / 2];
}

