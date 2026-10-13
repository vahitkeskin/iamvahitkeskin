// 13. pin Arduino üzerinde dahili LED'e bağlıdır. 
// İsterseniz doğrudan 13 sayısını da yazabilirsiniz.
const int ledPin = 8; 

void setup() {
  // 13. pinin çıkış (OUTPUT) olarak ayarlanması
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);   // LED'i yak (5 Volt ver)
  delay(5000);                  // 1 saniye (1000 milisaniye) bekle
  digitalWrite(ledPin, LOW);    // LED'i söndür (0 Volt ver)
  delay(1000);                  // 1 saniye bekle
}