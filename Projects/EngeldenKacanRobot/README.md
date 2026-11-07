# 🤖 Engelden Kaçan Robot - Çoklu Platform ve I2C Telemetri Sistemi

Bu proje, otonom engelden kaçan robotun gömülü yazılımını, masaüstü Java Form kontrol arayüzünü ve Android Studio Kotlin Multiplatform (KMP) mobil uygulamasını **Clean Architecture** prensiplerine uygun olarak bir araya getiren kurumsal bir mimaridir.

---

## 📂 Proje Dizin Yapısı (Clean Architecture)

```
EngeldenKacanRobot/
├── Arduino/                    # Mikrodenetleyici Gömülü Yazılımı (C++/Wire.h)
│   ├── Arduino.ino             # Ana döngü ve durum makinesi (FSM)
│   └── src/
│       ├── Config.h            # Pin, hız ve eşik tanımlamaları
│       ├── I2CComm.h/cpp       # I2C Slave (0x08) haberleşme protokolü
│       ├── DistanceSensor.h/cpp# HC-SR04 medyan filtreli mesafe ölçümü
│       ├── MotorDriver.h/cpp   # L298N H-Köprüsü motor hız/yön sürücüsü
│       └── ServoScanner.h/cpp  # SG90 servo motor açı ve tarama sürücüsü
│
├── JavaForm/                   # Masaüstü Kontrol Arayüzü (Java 17 / Swing)
│   ├── src/com/engeldenkacan/
│   │   ├── domain/             # İş Kuralları ve Modeller
│   │   │   ├── model/          # RobotTelemetry, RobotState
│   │   │   └── repository/     # ITelemetryRepository
│   │   ├── data/               # Veri Katmanı
│   │   │   ├── SerialI2CBridge.java # Gerçek Seri/I2C donanım köprüsü
│   │   │   └── MockTelemetryProvider.java # Sanal telemetri simülatörü
│   │   └── presentation/       # Sunum Katmanı
│   │       ├── view/           # MainForm, RadarCanvas, ServoGaugeCanvas, MetricCard
│   │       └── viewmodel/      # DashboardViewModel
│   ├── build.sh                # javac derleme betiği
│   └── run.sh                  # java çalıştırma betiği
│
├── EngeldenKacanRobotMobile/   # Mobil & Masaüstü Uygulaması (Android Studio / KMP)
│   ├── androidApp/             # Android APK çıktısı
│   ├── desktopApp/             # Masaüstü JVM çıktısı
│   ├── iosApp/                 # iOS Xcode projesi
│   └── shared/src/commonMain/kotlin/com/vahitkeskin/engeldenkacanrobotmobile/
│       ├── domain/             # KMP Domain Katmanı (RobotState, RobotTelemetry)
│       ├── data/               # KMP Data Katmanı (MockTelemetryRepository)
│       └── presentation/ui/    # Jetpack Compose UI (RadarView, ServoGaugeView, MetricCards)
│
├── .vscode/                    # VS Code Görev ve Çalıştırma Yapılandırması
│   ├── launch.json             # F5 ile Java Form uygulamasını başlatma
│   └── tasks.json              # Build ve Run görevleri
│
├── docs/                       # 2D Web Tabanlı Simülatör (simulator.html)
└── tools/                      # Hızlı donanım test ve telemetri izleme betikleri
```

---

## 📡 I2C Haberleşme ve Kayıt (Register) Haritası

Arduino, I2C veri yolunda varsayılan olarak **`0x08`** slave adresinde dinler:

| Kayıt (Register) | Adı | Veri Tipi | Açıklama |
|---|---|---|---|
| **0x01** | `REG_FRONT_DISTANCE` | `uint16_t` (2 Byte) | HC-SR04 ön mesafe ölçümü (cm) |
| **0x02** | `REG_SERVO_ANGLE` | `uint8_t` (1 Byte) | SG90 servo motorun anlık açısı (0° - 180°) |
| **0x03** | `REG_ROBOT_STATE` | `uint8_t` (1 Byte) | `0: CRUISING`, `1: AVOIDING`, `2: STOPPED` |
| **0x04** | `REG_LEFT_DISTANCE` | `uint16_t` (2 Byte) | Sol yön tarama mesafesi (cm) |
| **0x05** | `REG_RIGHT_DISTANCE` | `uint16_t` (2 Byte) | Sağ yön tarama mesafesi (cm) |
| **0xFF** | `REG_FULL_TELEMETRY` | `8 Byte Paket` | `[0xAA, FrontH, FrontL, Angle, State, Left, Right, Checksum]` |

---

## 🚀 Çalıştırma Yönergeleri

### 1. Arduino Firmware Yükleme:
```bash
arduino-cli compile --fqbn arduino:avr:uno Arduino
arduino-cli upload -p /dev/cu.usbserial-1240 --fqbn arduino:avr:uno Arduino
```

### 2. Java Form Uygulamasını VS Code'da Çalıştırma:
- **Yöntem A**: VS Code içerisinde **F5** tuşuna basarak veya `Run and Debug` sekmesinden *"Java Form - Engelden Kaçan Robot"* profilini seçerek.
- **Yöntem B**: Terminalden doğrudan:
  ```bash
  ./JavaForm/run.sh
  ```

### 3. Android Studio / KMP Mobil Uygulamasını Çalıştırma:
- Android Studio ile `EngeldenKacanRobotMobile` klasörünü açın.
- Terminalden derlemek için:
  ```bash
  cd EngeldenKacanRobotMobile
  ./gradlew :androidApp:assembleDebug
  ```
