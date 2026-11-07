# 🤖 Engelden Kaçan Robot - Çoklu Platform ve I2C Telemetri Sistemi

Bu proje, otonom engelden kaçan robotun gömülü yazılımını, Windows, macOS ve Linux uyumlu masaüstü Java Form kontrol arayüzünü ve Android Studio Kotlin Multiplatform (KMP) mobil uygulamasını **Clean Architecture** prensiplerine uygun olarak bir araya getiren kurumsal bir mimaridir.

---

## 🎨 Dinamik Tema ve Çoklu Dil Desteği

Uygulama çalışma anında tek tıkla anlık olarak arayüz temasını ve dilini değiştirir:
- **Tema Seçenekleri**: 
  - `Sistem / System` *(Varsayılan)*: İşletim sisteminin (Windows, macOS, Linux) aktif temasını algılar.
  - `Koyu / Dark`: Slate 900 tabanlı karanlık mod.
  - `Açık / Light`: Slate 100 tabanlı aydınlık mod.
- **Dil Seçenekleri**: 
  - `Sistem / System` *(Varsayılan)*: Cihazın yerel dil ayarını (Locale) kullanır.
  - `Türkçe (TR)`: Türkçe etiketler, durum mesajları ve uyarılar.
  - `English (EN)`: Uluslararası standart İngilizce terminoloji.

> **Gerçek Telemetri Prensibi**: Arayüzde sanal veya uydurma hareketler üretilmez. HC-SR04 veya Servo donanımı veri üretmediğinde ibreler ve ışınlar sabit kalır (`[SİNYAL YOK / NO SIGNAL]`), yalnızca gerçek fiziksel veriler geldiğinde hareket eder.

---

## 📂 Proje Dizin Yapısı (Clean Architecture)

```
EngeldenKacanRobot/
├── 📁 Arduino/                     # Mikrodenetleyici Gömülü Yazılımı (C++/Wire.h)
│   ├── Arduino.ino                 # Ana döngü, FSM ve telemetri yayını
│   └── src/
│       ├── Config.h                # Pin, hız ve eşik tanımlamaları
│       ├── I2CComm.h/cpp           # I2C Slave (0x08) & Register Protokolü
│       ├── DistanceSensor.h/cpp    # HC-SR04 medyan filtreli mesafe ölçümü
│       ├── MotorDriver.h/cpp       # L298N H-Köprüsü motor hız/yön sürücüsü
│       └── ServoScanner.h/cpp      # SG90 servo motor açı ve tarama sürücüsü
│
├── 📁 JavaForm/                    # Çapraz Platform Masaüstü (Win, Mac, Linux)
│   ├── src/com/engeldenkacan/
│   │   ├── domain/model/           # RobotTelemetry.java, RobotState.java
│   │   ├── domain/repository/      # ITelemetryRepository.java
│   │   ├── data/                   # SerialI2CBridge.java (Win/Mac/Linux donanım köprüsü)
│   │   ├── theme/                  # ThemeDetector, ThemeColors (Dark/Light/System)
│   │   ├── i18n/                   # Strings.java (TR/EN/System)
│   │   ├── presentation/view/      # MainForm, RadarCanvas, ServoGaugeCanvas, MetricCard
│   │   └── presentation/viewmodel/ # DashboardViewModel
│   ├── build.sh & run.sh           # macOS & Linux çalıştırma betikleri
│   ├── build.bat & run.bat         # Windows çalıştırma betikleri
│   └── bin/                        # Derlenmiş sınıf çıktıları
│
├── 📁 EngeldenKacanRobotMobile/    # KMP Çoklu Platform (Android, iOS, Desktop)
│   ├── androidApp/                 # Android APK çıktısı
│   ├── desktopApp/                 # KMP Desktop JVM çıktısı
│   ├── iosApp/                     # iOS Xcode projesi
│   └── shared/src/commonMain/kotlin/com/vahitkeskin/engeldenkacanrobotmobile/
│       ├── domain/model/           # RobotTelemetry.kt, RobotState.kt
│       ├── data/                   # MockTelemetryRepository.kt (Sıfır sahte veri)
│       ├── theme/                  # ThemeColors.kt (Dark, Light, System)
│       ├── i18n/                   # Strings.kt (TR, EN, System)
│       └── presentation/ui/        # RadarView, ServoGaugeView, MetricCards, DashboardScreen
│
├── 📁 .vscode/                     # VS Code Görev ve Çalıştırma Yapılandırması
│   ├── launch.json                 # F5 ile Java Form uygulamasını başlatma
│   └── tasks.json                  # Build ve Run görevleri
│
├── 📁 .github/workflows/           # Otomatik CI/CD Test Hattı
│   └── engelden_kacan_robot_ci.yml # Arduino, Java ve KMP otomatik derleme kontrolü
│
├── 📁 docs/                        # 2D Web Tabanlı Simülatör (simulator.html)
└── 📁 tools/                       # I2C Master tanı ve seri port izleme araçları
```

---

## 🚀 Çalıştırma Yönergeleri

### 1. Arduino Firmware Yükleme:
```bash
arduino-cli compile --fqbn arduino:avr:uno Arduino
arduino-cli upload -p /dev/cu.usbserial-1240 --fqbn arduino:avr:uno Arduino
```

### 2. Java Form Uygulamasını Başlatma:
- **macOS / Linux**:
  ```bash
  ./JavaForm/run.sh
  ```
- **Windows**:
  `JavaForm\run.bat` dosyasına çift tıklayın veya komut satırından çalıştırın:
  ```cmd
  cd JavaForm && run.bat
  ```
- **VS Code**: **F5** tuşuna basarak başlatabilirsiniz.

### 3. KMP Masaüstü ve Android Uygulamasını Başlatma:
- **KMP Desktop (Compose)**:
  ```bash
  cd EngeldenKacanRobotMobile && ./gradlew :desktopApp:run
  ```
- **Android APK Paketleme**:
  ```bash
  cd EngeldenKacanRobotMobile && ./gradlew :androidApp:assembleDebug
  ```
