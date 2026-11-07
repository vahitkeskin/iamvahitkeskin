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
        return isTurkish() ? "Engelden Kaçan Robot - Canlı Telemetri & Kontrol"
                           : "Obstacle Avoiding Robot - Live Telemetry & Control";
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
}

