const int trigPin = 7;    // Ultrasonik sensörün tetikleme (Trig) pinini 7 numaralı dijital pine tanımlıyoruz
const int echoPin = 6;    // Ultrasonik sensörün dönüş (Echo) pinini 6 numaralı dijital pine tanımlıyoruz
const int ledPin = 8;     // Uyarı LED'inin bağlı olduğu pinin numarasını 8 olarak belirliyoruz
const int buzzerPin = 9;  // Sesli uyarı verecek buzzer'ın bağlı olduğu pinin numarasını 9 olarak belirliyoruz

void setup() {
  pinMode(trigPin, OUTPUT);    // Trig pinini ses dalgası göndermesi için çıkış (OUTPUT) olarak ayarlıyoruz
  pinMode(echoPin, INPUT);     // Echo pinini yansıyan dalgayı okuması için giriş (INPUT) olarak ayarlıyoruz
  pinMode(ledPin, OUTPUT);     // LED pinini enerji vermek üzere çıkış (OUTPUT) olarak ayarlıyoruz
  pinMode(buzzerPin, OUTPUT);  // Buzzer pinini ses üretmek üzere çıkış (OUTPUT) olarak ayarlıyoruz
  Serial.begin(9600);          // Bilgisayara veri gönderebilmek için seri haberleşmeyi 9600 baud hızında başlatıyoruz
}

void loop() {
  // --- MESAFE ÖLÇÜM AŞAMASI ---
  digitalWrite(trigPin, LOW);    // Sensörün tetik pinini önce LOW yaparak temiz bir başlangıç sinyali hazırlıyoruz
  delayMicroseconds(2);          // Hassas ölçüm için 2 mikrosaniye bekliyoruz
  digitalWrite(trigPin, HIGH);   // Trig pinini HIGH yaparak ses dalgası (ultrasonik sinyal) gönderilmesini sağlıyoruz
  delayMicroseconds(10);         // Ses dalgasının yayılması için 10 mikrosaniye boyunca sinyali açık tutuyoruz
  digitalWrite(trigPin, LOW);    // Sinyal gönderimini durdurmak için Trig pinini tekrar LOW konuma getiriyoruz

  long duration = pulseIn(echoPin, HIGH); // Echo pininin HIGH olma süresini (sesin gidip gelme süresini) mikro saniye cinsinden ölçüyoruz
  int distance = duration * 0.034 / 2;    // Ölçülen süreyi ses hızını hesaba katarak santim (cm) cinsinden mesafeye çeviriyoruz

  // --- EKRANA YAZDIRMA AŞAMASI ---
  Serial.print("Guncel Mesafe: ");        // Seri monitör ekranına açıklama metni yazdırıyoruz
  Serial.print(distance);                 // Hesaplanan anlık mesafe değerini ekrana basıyoruz
  Serial.println(" cm");                  // Birim olarak " cm" yazıp alt satıra geçiyoruz

  // --- KRİTİK MESAFE KONTROLÜ (5 cm ve altı) ---
  if (distance > 0 && distance <= 5) {    // Eğer cisim 0'dan büyük ve 5 cm'ye eşit veya daha yakınsa:
    digitalWrite(ledPin, HIGH);           // LED'i tamamen ve sürekli olarak yakıyoruz
    digitalWrite(buzzerPin, HIGH);        // Buzzer'ı aralıksız (durmaksızın) sürekli öttürüyoruz
  }
  // --- NORMAL PARK SENSÖRÜ KONTROLÜ (5 cm ile 30 cm arası) ---
  else if (distance > 5 && distance <= 30) { // Eğer mesafe 5 cm ile 30 cm arasındaysa:
    int bipHizi = distance * 8;              // Mesafeye bağlı olarak bip hızını belirliyoruz (yaklaştıkça süre küçülür, hızlanır)

    if (bipHizi < 20) {                      // Eğer hesaplanan hız güvenli sınır olan 20 ms'den küçük çıkarsa:
      bipHizi = 20;                          // Hızın aşırı yüklenip kilitlenmemesi için minimum 20 ms sınır koyuyoruz
    }

    digitalWrite(ledPin, HIGH);              // LED'i yakıyoruz
    digitalWrite(buzzerPin, HIGH);           // Buzzer'ı ses çıkarması için aktif ediyoruz
    delay(bipHizi);                          // Mesafeye göre belirlenen süre kadar (bip süresi) bekliyoruz
    
    digitalWrite(ledPin, LOW);               // LED'i söndürüyoruz
    digitalWrite(buzzerPin, LOW);            // Buzzer'ı susturuyoruz
    delay(bipHizi);                          // Sessizlik süresi boyunca aynı miktar süre bekliyoruz
  } 
  // --- GÜVENLİ MESAFE / UZAK BÖLGE KONTROLÜ (30 cm'den uzak) ---
  else {
    digitalWrite(ledPin, LOW);               // Nesne uzakta olduğu için LED'i söndürüyoruz
    digitalWrite(buzzerPin, LOW);            // Buzzer'ı tamamen susturuyoruz
    delay(50);                               // Sensörün döngüyü çok hızlı yormaması için 50 milisaniye kısa bir bekleme yapıyoruz
  }
}