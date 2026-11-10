package com.engeldenkacan.i18n;

import java.util.Locale;

public class Strings {
    public enum LanguageMode {
        SYSTEM, TR, EN
    }

    private static LanguageMode currentMode = LanguageMode.SYSTEM;

    public static void setLanguage(LanguageMode mode) {
        currentMode = mode;
    }

    public static LanguageMode getLanguageMode() {
        return currentMode;
    }

    public static boolean isTurkish() {
        if (currentMode == LanguageMode.SYSTEM) {
            return Locale.getDefault().getLanguage().toLowerCase().startsWith("tr");
        }
        return currentMode == LanguageMode.TR;
    }

    public static String appTitle() {
        return "EK Robot";
    }

    public static String portLabel() {
        return isTurkish() ? "Port / I2C:" : "Port / I2C:";
    }

    public static String btnConnect() {
        return isTurkish() ? "Bağlan (Donanım/I2C)" : "Connect (Hardware/I2C)";
    }

    public static String btnDisconnect() {
        return isTurkish() ? "Bağlantıyı Kes" : "Disconnect";
    }

    public static String statusDisconnected() {
        return isTurkish() ? "BAĞLANTI YOK" : "DISCONNECTED";
    }

    public static String statusCruising() {
        return isTurkish() ? "SEYİR MODU (CRUISING)" : "CRUISING MODE";
    }

    public static String statusAvoiding() {
        return isTurkish() ? "ENGEL KAÇIŞI (AVOIDING)" : "AVOIDING OBSTACLE";
    }

    public static String statusStopped() {
        return isTurkish() ? "DURDURULDU (STOPPED)" : "STOPPED";
    }

    public static String statusManualOverride() {
        return isTurkish() ? "MANUEL MÜDAHALE (MANUAL)" : "MANUAL OVERRIDE";
    }

    public static String radarTitle() {
        return isTurkish() ? "ULTRASONİK RADAR TARAMASI" : "ULTRASONIC RADAR SWEEP";
    }

    public static String servoTitle() {
        return isTurkish() ? "SERVO MOTOR DÖNME AÇISI" : "SERVO ROTATION ANGLE";
    }

    public static String sensorTitle() {
        return isTurkish() ? "HC-SR04 ULTRASONİK MESAFE SENSÖRÜ" : "HC-SR04 ULTRASONIC DISTANCE SENSOR";
    }

    public static String center() {
        return isTurkish() ? "MERKEZ" : "CENTER";
    }

    public static String rightScan() {
        return isTurkish() ? "SAĞ TARAMA" : "RIGHT SCAN";
    }

    public static String leftScan() {
        return isTurkish() ? "SOL TARAMA" : "LEFT SCAN";
    }

    public static String safeCorridor() {
        return isTurkish() ? "🟢 GÜVENLİ SEYİR KORİDORU" : "🟢 SAFE CORRIDOR";
    }

    public static String warningObstacle() {
        return isTurkish() ? "🟡 DİKKAT - ENGEL YAKLAŞTI" : "🟡 WARNING - OBSTACLE AHEAD";
    }

    public static String dangerObstacle() {
        return isTurkish() ? "🔴 TEHLİKE - ACİL DURDURULDU" : "🔴 DANGER - EMERGENCY STOP";
    }

    public static String noSignal() {
        return isTurkish() ? "Sinyal Yok" : "No Signal";
    }

    public static String leftCorridor(int d) {
        return isTurkish() ? ("Sol Koridor: " + (d > 0 ? d + " cm" : "--"))
                           : ("Left Corridor: " + (d > 0 ? d + " cm" : "--"));
    }

    public static String rightCorridor(int d) {
        return isTurkish() ? ("Sağ Koridor: " + (d > 0 ? d + " cm" : "--"))
                            : ("Right Corridor: " + (d > 0 ? d + " cm" : "--"));
    }

    public static String logTitle() {
        return isTurkish() ? "Canlı I2C & Seri Port Telemetri Günlüğü"
                           : "Live I2C & Serial Port Telemetry Log";
    }

    public static String themeLabel() {
        return isTurkish() ? "Tema:" : "Theme:";
    }

    public static String langLabel() {
        return isTurkish() ? "Dil:" : "Lang:";
    }

    public static String optSystem() {
        return isTurkish() ? "Sistem" : "System";
    }

    public static String optDark() {
        return isTurkish() ? "Koyu" : "Dark";
    }

    public static String optLight() {
        return isTurkish() ? "Açık" : "Light";
    }

    // Navigasyon Sekmeleri (Tabs)
    public static String navTelemetry() {
        return isTurkish() ? "Telemetri" : "Telemetry";
    }

    public static String navController() {
        return isTurkish() ? "Kumanda" : "Remote";
    }

    public static String navRobotTwin() {
        return "Robot 3D";
    }

    public static String navSettings() {
        return isTurkish() ? "Ayarlar" : "Settings";
    }

    // Kamera Perspektifleri (Camera Presets)
    public static String viewStandard() {
        return isTurkish() ? "Standart" : "Standard";
    }

    public static String viewTop() {
        return isTurkish() ? "Kuşbakışı" : "Top-Down";
    }

    public static String viewBottom() {
        return isTurkish() ? "Alttan" : "Bottom";
    }

    public static String viewFront() {
        return isTurkish() ? "Ön" : "Front";
    }

    public static String viewRear() {
        return isTurkish() ? "Arka" : "Rear";
    }

    public static String viewRight() {
        return isTurkish() ? "Sağ" : "Right";
    }

    public static String viewLeft() {
        return isTurkish() ? "Sol" : "Left";
    }

    // Ayarlar Ekranı (Settings)
    public static String settingsTitle() {
        return isTurkish() ? "AYARLAR" : "SETTINGS";
    }

    public static String settingsSubtitle() {
        return isTurkish() ? "Tema, Dil & Sistem Tercihleri" : "Theme, Language & System Preferences";
    }

    public static String sectionAppearance() {
        return isTurkish() ? "GÖRÜNÜM & TEMA" : "APPEARANCE & THEME";
    }

    public static String appearanceDesc() {
        return isTurkish() ? "Arayüz rengini cihazınıza veya kişisel zevkinize göre ayarlayın" : "Customize interface colors to match preference";
    }

    public static String sectionLanguage() {
        return isTurkish() ? "DİL SEÇİMİ" : "LANGUAGE PREFERENCE";
    }

    public static String languageDesc() {
        return isTurkish() ? "Tüm etiket ve telemetri metinleri anında seçilen dile geçer" : "All labels and telemetry texts instantly update";
    }

    public static String sectionHardwareInfo() {
        return isTurkish() ? "DONANIM & VERİYOLU" : "HARDWARE & BUS";
    }

    public static String sectionAppInfo() {
        return isTurkish() ? "UYGULAMA HAKKINDA" : "ABOUT APPLICATION";
    }

    public static String optSystemDesc() {
        return isTurkish() ? "Cihazınızın sistem ayarlarıyla otomatik senkronize olur" : "Automatically synchronizes with your device settings";
    }

    public static String optDarkDesc() {
        return isTurkish() ? "Göz yormayan, OLED dostu derin lacivert/siyah renkler" : "Eye-friendly, OLED-optimized deep navy/black tones";
    }

    public static String optLightDesc() {
        return isTurkish() ? "Güneş altında yüksek okunabilirlik sunan aydınlık arayüz" : "Bright high-contrast interface for daylight reading";
    }

    public static String optTrDesc() {
        return "Türkçe (Varsayılan)";
    }

    public static String optEnDesc() {
        return "English (International)";
    }

    // Doğrudan Müdahale ve Batarya
    public static String directControlTitle() {
        return isTurkish() ? "ROBOTA DOĞRUDAN MÜDAHALE (KUMANDA)" : "DIRECT ROBOT OVERRIDE (COCKPIT)";
    }

    public static String batteryTitle() {
        return isTurkish() ? "BATARYA DURUMU (2S Li-Ion)" : "BATTERY STATUS (2S Li-Ion)";
    }

    public static String batteryCharging() {
        return isTurkish() ? "⚡ Şarj Oluyor" : "⚡ Charging";
    }

    public static String batteryDischarging() {
        return isTurkish() ? "🔋 Kullanımda (Deşarj)" : "🔋 In Use (Discharge)";
    }

    public static String batteryCritical() {
        return isTurkish() ? "🪫 Kritik Pil!" : "🪫 Low Battery!";
    }

    public static String btnEmergencyStop() {
        return isTurkish() ? "🛑 ACİL FREN" : "🛑 E-BRAKE";
    }

    public static String btnStart() {
        return isTurkish() ? "▶ BAŞLAT" : "▶ START";
    }

    public static String btnStop() {
        return isTurkish() ? "⏹ DURDUR" : "⏹ STOP";
    }

    public static String btnHorn() {
        return isTurkish() ? "📢 KORNA" : "📢 HORN";
    }

    public static String btnSimulateCharge() {
        return isTurkish() ? "⚡ Şarjı Simüle Et" : "⚡ Sim Charge";
    }

    public static String speedLabel() {
        return isTurkish() ? "Motor Hızı (PWM):" : "Motor Speed (PWM):";
    }

    public static String modeAuto() {
        return isTurkish() ? "🤖 Otonom" : "🤖 Auto";
    }

    public static String modeManual() {
        return isTurkish() ? "🎮 Manuel" : "🎮 Manual";
    }

    // Splash Screen (Önyükleme Teşhisi)
    public static String splashTitle() {
        return "EK ROBOT";
    }

    public static String splashSubtitle() {
        return isTurkish() ? "OTONOM ENGEL TESPİT & TELEMETRİ SİSTEMİ" : "AUTONOMOUS OBSTACLE DETECTION & TELEMETRY";
    }

    public static String splashStep1() {
        return isTurkish() ? "I2C Veri Yolu (0x08) Başlatılıyor..." : "Initializing I2C Bus (0x08)...";
    }

    public static String splashStep2() {
        return isTurkish() ? "HC-SR04 Ultrasonik Sonar Testi..." : "Testing HC-SR04 Ultrasonic Sonar...";
    }

    public static String splashStep3() {
        return isTurkish() ? "SG90 Mikro Servo Sıfırlanıyor (90°)..." : "Centering SG90 Micro Servo (90°)...";
    }

    public static String splashStep4() {
        return isTurkish() ? "L298N Çift Motor Sürücü Hazır..." : "L298N Dual Motor Driver Ready...";
    }

    public static String splashStep5() {
        return isTurkish() ? "Telemetri & Dijital İkiz Hazır!" : "Telemetry & Digital Twin Ready!";
    }

    public static String splashHardwareBadge() {
        return "ARDUINO UNO R3 • ATMEGA328P • I2C: 0x08";
    }

    public static String splashVersion() {
        return "v1.0.0 Production";
    }

    public static String splashSkipHint() {
        return isTurkish() ? "Devam etmek için tıklayın" : "Click to continue";
    }

    public static String splashDevelopedBy() {
        return isTurkish() ? "vahitkeskin tarafından geliştirildi" : "Developed by vahitkeskin";
    }

    public static String hint3dMouse() {
        return isTurkish() ? "🖱️ Fare ile 360° Döndür • Tekerlek ile Yakınlaş • Çift Tık: Sıfırla" : "🖱️ Mouse 360° Orbit • Scroll Wheel Zoom • Double Click: Reset";
    }

    public static String sectionWifiNetwork() {
        return isTurkish() ? "WIFI & AĞ YAPILANDIRMASI" : "WIFI & NETWORK CONFIGURATION";
    }

    public static String shareWifiTitle() {
        return isTurkish() ? "Bağlı Olduğum Wi-Fi'yi Paylaş" : "Share Connected Wi-Fi";
    }

    public static String shareWifiDesc() {
        return isTurkish() ? "Robotu bilgisayarınızın bağlı olduğu Wi-Fi ağına bağlayın" : "Connect the robot to your active Wi-Fi network";
    }

    public static String btnSendWifiConfig() {
        return isTurkish() ? "Robota Gönder & Yapılandır" : "Send & Configure on Robot";
    }

    public static String btnCopyWifi() {
        return isTurkish() ? "Wi-Fi Bilgisini Kopyala" : "Copy Wi-Fi Info";
    }
}
