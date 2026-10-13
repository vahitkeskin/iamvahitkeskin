#include <Wire.h>                           // I2C haberleşme kütüphanesini dahil ediyoruz
#include <LiquidCrystal_I2C.h>              // I2C LCD ekran kütüphanesini dahil ediyoruz

// I2C LCD adresini tanımlıyoruz (Genellikle 0x27 veya 0x3F olur)
LiquidCrystal_I2C lcd(0x27, 16, 2); 

const int trigPin = 7;    // Ultrasonik sensörün tetikleme (Trig) pinini 7 numaralı dijital pin olarak belirliyoruz
const int echoPin = 6;    // Ultrasonik sensörün dönüş (Echo) pinini 6 numaralı dijital pin olarak belirliyoruz
const int ledPin = 8;     // Uyarı LED'inin bağlı olduğu pinin numarasını 8 olarak belirliyoruz
const int buzzerPin = 9;  // Sesli uyarı verecek buzzer'ın bağlı olduğu pinin numarasını 9 olarak belirliyoruz

void setup() {
  pinMode(trigPin, OUTPUT);    // Trig pinini ses dalgası göndermesi için çıkış (OUTPUT) yapıyoruz
  pinMode(echoPin, INPUT);     // Echo pinini yansıyan dalgayı okuması için giriş (INPUT) yapıyoruz
  pinMode(ledPin, OUTPUT);     // LED pinini çıkış (OUTPUT) yapıyoruz
  pinMode(buzzerPin, OUTPUT);  // Buzzer pinini çıkış (OUTPUT) yapıyoruz
  Serial.begin(9600);          // Bilgisayara veri gönderebilmek için seri haberleşmeyi başlatıyoruz

  lcd.init();                  // LCD ekranı başlatıyoruz
  lcd.backlight();             // LCD ekranın arka plan ışığını (backlight) açıyoruz
}

void loop() {
  // --- MESAFE ÖLÇÜM AŞAMASI ---
  digitalWrite(trigPin, LOW);    // Sensör pinini temizliyoruz
  delayMicroseconds(2);          // 2 mikrosaniye bekliyoruz
  digitalWrite(trigPin, HIGH);   // Ses dalgası gönderiyoruz
  delayMicroseconds(10);         // 10 mikrosaniye boyunca açık tutuyoruz
  digitalWrite(trigPin, LOW);    // Sinyali kapatıyoruz

  long duration = pulseIn(echoPin, HIGH); // Geri dönen süreyi ölçüyoruz
  int distance = duration * 0.034 / 2;    // Süreyi cm cinsinden mesafeye çeviriyoruz

  // --- EKRANA VE SERIAL MONITOR'E YAZDIRMA AŞAMASI ---
  Serial.print("Guncel Mesafe: ");        // Seri monitöre metin yazdırıyoruz
  Serial.print(distance);                 // Mesafe değerini yazdırıyoruz
  Serial.println(" cm");                  // Birim ekleyip alt satıra geçiyoruz

  // LCD Ekrana Yazdırma İşlemi
  lcd.setCursor(0, 0);                    // LCD'nin 1. sütun, 1. satırına konumlanıyoruz
  lcd.print("Mesafe: ");                  // Ekrana sabit metin yazıyoruz
  lcd.print("     ");                     // Önceki uzun sayılardan kalan kalıntıları silmek için boşluk bırakıyoruz
  lcd.setCursor(8, 0);                    // Sayının yazılacağı konuma geçiyoruz
  lcd.print(distance);                    // Anlık mesafe değerini ekrana yazıyoruz
  lcd.print(" cm  ");                     // Birim ekliyoruz

  // --- KRİTİK MESAFE KONTROLÜ (5 cm ve altı) ---
  if (distance > 0 && distance <= 5) {    // Eğer mesafe 5 cm ve altındaysa:
    digitalWrite(ledPin, HIGH);           // LED'i sürekli yakıyoruz
    digitalWrite(buzzerPin, HIGH);        // Buzzer'ı aralıksız öttürüyoruz
    
    lcd.setCursor(0, 1);                  // LCD'nin 2. satırına geçiyoruz
    lcd.print("DIKKAT: COK YAKIN!");      // Ekranda uyarı yazısı gösteriyoruz
  }
  // --- NORMAL PARK SENSÖRÜ KONTROLÜ (5 cm ile 30 cm arası) ---
  else if (distance > 5 && distance <= 30) { // Eğer mesafe 5 ile 30 cm arasındaysa:
    int bipHizi = distance * 8;              // Mesafeye göre bip hızını hesaplıyoruz

    if (bipHizi < 20) {                      // Hız aşırı artıp kilitlenmesin diye sınır koyuyoruz
      bipHizi = 20;                          
    }

    digitalWrite(ledPin, HIGH);              // LED'i yakıyoruz
    digitalWrite(buzzerPin, HIGH);           // Buzzer'ı ses için aktif ediyoruz
    
    lcd.setCursor(0, 1);                     // LCD'nin 2. satırına geçiyoruz
    lcd.print("PARK SEN. HIZLI  ");          // Ekrana durum yazıyoruz
    
    delay(bipHizi);                          // Hesaplanan bip süresi kadar bekliyoruz
    
    digitalWrite(ledPin, LOW);               // LED'i söndürüyoruz
    digitalWrite(buzzerPin, LOW);            // Buzzer'ı susturuyoruz
    delay(bipHizi);                          // Sessizlik süresi kadar bekliyoruz
  } 
  // --- GÜVENLİ MESAFE / UZAK BÖLGE KONTROLÜ (30 cm'den uzak) ---
  else {
    digitalWrite(ledPin, LOW);               // LED'i söndürüyoruz
    digitalWrite(buzzerPin, LOW);            // Buzzer'ı kapatıyoruz
    
    lcd.setCursor(0, 1);                     // LCD'nin 2. satırına geçiyoruz
    lcd.print("Sistem Guvenli   ");          // Ekrana güvenli olduğunu yazıyoruz
    
    delay(50);                               // Döngüyü rahatlatmak için kısa bekleme
  }
}