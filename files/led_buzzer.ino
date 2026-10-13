const int ledPin = 8;     
const int buzzerPin = 9;  

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  // Yaklaşıyor simülasyonu: Bip sesleri giderek hızlanır
  for (int i = 0; i < 5; i++) {
    digitalWrite(ledPin, HIGH);
    digitalWrite(buzzerPin, HIGH);
    delay(100);                    // 0.1 saniye yanık kal
    digitalWrite(ledPin, LOW);
    digitalWrite(buzzerPin, LOW);
    delay(400 - (i * 70));         // Her adımda bekleme süresi kısalır (hızlanır)
  }
  
  // Uzaklaşıyor veya boşluk simülasyonu: Uzun bir duraklama
  delay(1500);
}