#ifndef DISTANCE_SENSOR_H
#define DISTANCE_SENSOR_H

#include <Arduino.h>

class DistanceSensor {
public:
    DistanceSensor(uint8_t trigPin, uint8_t echoPin);
    void begin();
    
    // Tek bir ham mesafe ölçümü (cm)
    float getRawDistance();
    
    // Gürültüyü engellemek için ardışık ölçümler alıp medyan filtreleyen güvenli ölçüm (cm)
    float getFilteredDistance(uint8_t samples = 3);

private:
    uint8_t _trigPin;
    uint8_t _echoPin;
    const unsigned long TIMEOUT_US = 25000; // ~4 metre maksimum menzil zaman aşımı
};

#endif // DISTANCE_SENSOR_H

