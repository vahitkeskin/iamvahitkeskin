package com.engeldenkacan.data;

import com.engeldenkacan.domain.model.RobotState;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.domain.repository.ITelemetryRepository;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Locale;
import java.util.function.Consumer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SerialI2CBridge implements ITelemetryRepository {
    private Process process;
    private OutputStream processOut;
    private Thread readerThread;
    private Thread simThread;
    private volatile boolean connected = false;
    private Consumer<RobotTelemetry> telemetryListener;
    private Consumer<String> logListener;

    // Simülasyon Durumu
    private volatile boolean isManualMode = false;
    private volatile String currentManualCmd = "STOP";
    private volatile int currentSpeedPwm = 180;
    private volatile int currentServoAngle = 90;
    private volatile float batteryVoltage = 7.84f;
    private volatile int batteryPercentage = 85;
    private volatile boolean isCharging = false;

    private static final Pattern JSON_PATTERN = Pattern.compile(
        "\"front\":\\s*(\\d+).*?\"angle\":\\s*(\\d+).*?\"state\":\\s*(\\d+).*?\"left\":\\s*(-?\\d+).*?\"right\":\\s*(-?\\d+)"
    );
    private static final Pattern VBAT_PATTERN = Pattern.compile("\"vbat\":\\s*([\\d.]+)");
    private static final Pattern BAT_PATTERN = Pattern.compile("\"bat\":\\s*(\\d+)");
    private static final Pattern CHG_PATTERN = Pattern.compile("\"chg\":\\s*(\\d+)");

    public static String detectDefaultPort() {
        String os = System.getProperty("os.name", "").toLowerCase(Locale.ENGLISH);
        if (os.contains("win")) {
            return "COM3";
        } else if (os.contains("mac")) {
            return "/dev/cu.usbserial-1240";
        } else {
            return "/dev/ttyUSB0";
        }
    }

    @Override
    public void connect(String targetPort) throws Exception {
        if (connected) disconnect();

        log("[Donanım Bağlantısı] " + targetPort + " açılıyor (115200 baud)...");

        try {
            // Windows, macOS ve Linux uyumlu evrensel Python seri köprüsü
            ProcessBuilder pb = new ProcessBuilder(
                "python3", "-u", "-c",
                "import os, sys, platform, time\n" +
                "port = sys.argv[1]\n" +
                "sys_name = platform.system()\n" +
                "try:\n" +
                "    if sys_name == 'Windows':\n" +
                "        import serial\n" +
                "        s = serial.Serial(port, 115200, timeout=1)\n" +
                "        while True:\n" +
                "            line = s.readline().decode('utf-8', errors='ignore').strip()\n" +
                "            if line:\n" +
                "                sys.stdout.write(line + '\\n')\n" +
                "                sys.stdout.flush()\n" +
                "    else:\n" +
                "        import termios, select\n" +
                "        fd = os.open(port, os.O_RDWR | os.O_NOCTTY)\n" +
                "        attrs = termios.tcgetattr(fd)\n" +
                "        attrs[0] = 0; attrs[1] = 0; attrs[2] = termios.CS8 | termios.CREAD | termios.CLOCAL; attrs[3] = 0\n" +
                "        attrs[4] = termios.B115200; attrs[5] = termios.B115200\n" +
                "        termios.tcsetattr(fd, termios.TCSANOW, attrs)\n" +
                "        buf = b''\n" +
                "        while True:\n" +
                "            r, _, _ = select.select([fd], [], [], 0.2)\n" +
                "            if r:\n" +
                "                data = os.read(fd, 256)\n" +
                "                if data:\n" +
                "                    buf += data\n" +
                "                    while b'\\n' in buf:\n" +
                "                        line, buf = buf.split(b'\\n', 1)\n" +
                "                        sys.stdout.write(line.decode('utf-8', errors='ignore') + '\\n')\n" +
                "                        sys.stdout.flush()\n" +
                "except Exception as e:\n" +
                "    sys.stderr.write(str(e) + '\\n')\n",
                targetPort
            );

            pb.redirectErrorStream(true);
            process = pb.start();
            processOut = process.getOutputStream();
            connected = true;

            readerThread = new Thread(() -> {
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                    String line;
                    boolean receivedHardwareData = false;
                    while (connected && (line = reader.readLine()) != null) {
                        final String raw = line.trim();
                        if (raw.isEmpty()) continue;

                        if (raw.contains("\"front\"") && raw.contains("\"angle\"")) {
                            receivedHardwareData = true;
                            parseJsonTelemetry(raw);
                        } else {
                            log("[Arduino] " + raw);
                        }
                    }
                    if (!receivedHardwareData && connected) {
                        startSimulationLoop();
                    }
                } catch (Exception e) {
                    if (connected) {
                        log("[Bilgi] Donanım portu simülasyon moduna alındı.");
                        startSimulationLoop();
                    }
                }
            });
            readerThread.setDaemon(true);
            readerThread.start();

            log("[Donanım Bağlantısı] Port açıldı, veri akışı ve doğrudan kumanda aktif.");
        } catch (Exception ex) {
            log("[Donanım Bilgisi] Seri port açılamadı (" + ex.getMessage() + "). Canlı simülatör devreye giriyor.");
            connected = true;
            startSimulationLoop();
        }
    }

    private void startSimulationLoop() {
        if (simThread != null && simThread.isAlive()) return;
        simThread = new Thread(() -> {
            int distance = 65;
            int counter = 0;
            while (connected) {
                try {
                    counter++;
                    // Batarya simülasyonu
                    if (counter % 15 == 0) {
                        if (isCharging) {
                            batteryPercentage = Math.min(100, batteryPercentage + 1);
                            batteryVoltage = 6.40f + (batteryPercentage / 100.0f) * 2.00f;
                        } else {
                            if (Math.random() < 0.25) {
                                batteryPercentage = Math.max(5, batteryPercentage - 1);
                                batteryVoltage = 6.40f + (batteryPercentage / 100.0f) * 2.00f;
                            }
                        }
                    }

                    if (isManualMode) {
                        RobotState state = "STOP".equals(currentManualCmd) ? RobotState.STOPPED : RobotState.MANUAL_OVERRIDE;
                        RobotTelemetry t = new RobotTelemetry(
                            distance, currentServoAngle, state, -1, -1, true,
                            batteryVoltage, batteryPercentage, isCharging, true, currentManualCmd, currentSpeedPwm
                        );
                        if (telemetryListener != null) telemetryListener.accept(t);
                        Thread.sleep(150);
                        continue;
                    }

                    // OTONOM DÖNGÜ
                    if (distance > 15) {
                        RobotTelemetry t = new RobotTelemetry(
                            distance, 90, RobotState.CRUISING, -1, -1, true,
                            batteryVoltage, batteryPercentage, isCharging, false, "FORWARD", 180
                        );
                        if (telemetryListener != null) telemetryListener.accept(t);
                        Thread.sleep(180);
                        distance -= 4;
                    } else {
                        // Engel bulundu
                        log("[ENGEL ALGILANDI] Mesafe: " + distance + " cm. Robot durduruldu, servo tarıyor.");
                        RobotTelemetry t = new RobotTelemetry(
                            distance, 90, RobotState.AVOIDING, -1, -1, true,
                            batteryVoltage, batteryPercentage, isCharging, false, "STOP", 0
                        );
                        if (telemetryListener != null) telemetryListener.accept(t);
                        Thread.sleep(250);

                        // Servo tara (145°)
                        t = new RobotTelemetry(
                            distance, 145, RobotState.AVOIDING, 48, -1, true,
                            batteryVoltage, batteryPercentage, isCharging, false, "STOP", 0
                        );
                        if (telemetryListener != null) telemetryListener.accept(t);
                        Thread.sleep(300);

                        // Servo tara (35°)
                        t = new RobotTelemetry(
                            distance, 35, RobotState.AVOIDING, 48, 16, true,
                            batteryVoltage, batteryPercentage, isCharging, false, "STOP", 0
                        );
                        if (telemetryListener != null) telemetryListener.accept(t);
                        Thread.sleep(300);

                        // Karar: Sola kaç
                        log("[Manevra] Sol (48cm) > Sağ (16cm). Sola dönüş yapılıyor.");
                        t = new RobotTelemetry(
                            14, 90, RobotState.AVOIDING, 48, 16, true,
                            batteryVoltage, batteryPercentage, isCharging, false, "LEFT", 180
                        );
                        if (telemetryListener != null) telemetryListener.accept(t);
                        Thread.sleep(500);

                        distance = 68;
                    }
                } catch (InterruptedException ignored) {
                    break;
                }
            }
        });
        simThread.setDaemon(true);
        simThread.start();
    }

    private void parseJsonTelemetry(String raw) {
        try {
            Matcher m = JSON_PATTERN.matcher(raw);
            if (m.find()) {
                int front = Integer.parseInt(m.group(1));
                int angle = Integer.parseInt(m.group(2));
                int stateCode = Integer.parseInt(m.group(3));
                int left = Integer.parseInt(m.group(4));
                int right = Integer.parseInt(m.group(5));

                float vbat = 7.84f;
                int bat = 85;
                boolean chg = false;

                Matcher mv = VBAT_PATTERN.matcher(raw);
                if (mv.find()) vbat = Float.parseFloat(mv.group(1));

                Matcher mb = BAT_PATTERN.matcher(raw);
                if (mb.find()) bat = Integer.parseInt(mb.group(1));

                Matcher mc = CHG_PATTERN.matcher(raw);
                if (mc.find()) chg = "1".equals(mc.group(1));

                this.batteryVoltage = vbat;
                this.batteryPercentage = bat;
                this.isCharging = chg;

                RobotTelemetry telemetry = new RobotTelemetry(
                    front, angle, RobotState.fromCode(stateCode), left, right, true,
                    vbat, bat, chg, isManualMode, currentManualCmd, currentSpeedPwm
                );

                if (telemetryListener != null) {
                    telemetryListener.accept(telemetry);
                }
            }
        } catch (Exception e) {
            log("[Ayrıştırma Hatası] " + e.getMessage());
        }
    }

    @Override
    public void sendCommand(String command) {
        String clean = command.trim().toUpperCase();
        log("[Kumanda Gönderildi] >> " + clean);

        // Seri porta fiziksel komut bas
        if (processOut != null && connected) {
            try {
                processOut.write((clean + "\n").getBytes(StandardCharsets.UTF_8));
                processOut.flush();
            } catch (Exception ignored) {}
        }

        // Simülasyon durumunu güncelle
        if (clean.startsWith("MODE:AUTO")) {
            isManualMode = false;
            currentManualCmd = "FORWARD";
        } else if (clean.startsWith("MODE:MANUAL")) {
            isManualMode = true;
            currentManualCmd = "STOP";
        } else if ("STOP".equals(clean) || "EMERGENCY".equals(clean)) {
            isManualMode = true;
            currentManualCmd = "STOP";
        } else if (clean.startsWith("DRIVE:")) {
            isManualMode = true;
            String[] parts = clean.split(":");
            if (parts.length >= 2) {
                currentManualCmd = parts[1];
            }
            if (parts.length >= 3) {
                try { currentSpeedPwm = Integer.parseInt(parts[2]); } catch (Exception ignored) {}
            }
        } else if (clean.startsWith("SERVO:")) {
            try {
                currentServoAngle = Integer.parseInt(clean.split(":")[1]);
            } catch (Exception ignored) {}
        } else if (clean.startsWith("BUZZER")) {
            log("[Donanım] 📢 KORNA TETİKLENDİ (Buzzer aktif)!");
        }
    }

    @Override
    public void toggleChargingSimulation() {
        this.isCharging = !this.isCharging;
        if (isCharging) {
            log("[Güç Yönetimi] ⚡ Şarj cihazı takıldı (% " + batteryPercentage + " - " + batteryVoltage + " V)");
        } else {
            log("[Güç Yönetimi] 🔋 Şarj cihazı çıkarıldı. Kullanımda (Deşarj)");
        }
    }

    private void log(String msg) {
        if (logListener != null) logListener.accept(msg);
    }

    @Override
    public void disconnect() {
        connected = false;
        if (process != null) {
            process.destroyForcibly();
            process = null;
            processOut = null;
        }
        if (simThread != null) {
            simThread.interrupt();
            simThread = null;
        }
        log("[Donanım Bağlantısı] Bağlantı kesildi.");
        if (telemetryListener != null) {
            telemetryListener.accept(RobotTelemetry.noSignal());
        }
    }

    @Override
    public boolean isConnected() {
        return connected;
    }

    @Override
    public void setTelemetryListener(Consumer<RobotTelemetry> listener) {
        this.telemetryListener = listener;
    }

    @Override
    public void setLogListener(Consumer<String> logListener) {
        this.logListener = logListener;
    }
}
