package com.engeldenkacan.data;

import com.engeldenkacan.domain.model.RobotState;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.domain.repository.ITelemetryRepository;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.function.Consumer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SerialI2CBridge implements ITelemetryRepository {
    private Process process;
    private Thread readerThread;
    private boolean connected = false;
    private Consumer<RobotTelemetry> telemetryListener;
    private Consumer<String> logListener;

    private static final Pattern JSON_PATTERN = Pattern.compile(
        "\"front\":\\s*(\\d+).*?\"angle\":\\s*(\\d+).*?\"state\":\\s*(\\d+).*?\"left\":\\s*(\\d+).*?\"right\":\\s*(\\d+)"
    );

    @Override
    public void connect(String targetPort) throws Exception {
        if (connected) disconnect();

        log("[Donanım Bağlantısı] " + targetPort + " açılıyor (115200 baud)...");

        // python3 tabanlı kararlı seri akış köprüsü başlat
        ProcessBuilder pb = new ProcessBuilder(
            "python3", "-u", "-c",
            "import os, termios, select, sys\n" +
            "port = sys.argv[1]\n" +
            "try:\n" +
            "    fd = os.open(port, os.O_RDONLY | os.O_NOCTTY)\n" +
            "    attrs = termios.tcgetattr(fd)\n" +
            "    attrs[0] = 0; attrs[1] = 0; attrs[2] = termios.CS8 | termios.CREAD | termios.CLOCAL; attrs[3] = 0\n" +
            "    attrs[4] = termios.B115200; attrs[5] = termios.B115200\n" +
            "    termios.tcsetattr(fd, termios.TCSANOW, attrs)\n" +
            "    buf = b''\n" +
            "    while True:\n" +
            "        r, _, _ = select.select([fd], [], [], 0.2)\n" +
            "        if r:\n" +
            "            data = os.read(fd, 256)\n" +
            "            if data:\n" +
            "                buf += data\n" +
            "                while b'\\n' in buf:\n" +
            "                    line, buf = buf.split(b'\\n', 1)\n" +
            "                    sys.stdout.write(line.decode('utf-8', errors='ignore') + '\\n')\n" +
            "                    sys.stdout.flush()\n" +
            "except Exception as e:\n" +
            "    sys.stderr.write(str(e) + '\\n')\n",
            targetPort
        );

        pb.redirectErrorStream(true);
        process = pb.start();
        connected = true;

        readerThread = new Thread(() -> {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                String line;
                while (connected && (line = reader.readLine()) != null) {
                    final String raw = line.trim();
                    if (raw.isEmpty()) continue;

                    if (raw.contains("\"front\"") && raw.contains("\"angle\"")) {
                        parseJsonTelemetry(raw);
                    } else {
                        log("[Arduino] " + raw);
                    }
                }
            } catch (Exception e) {
                if (connected) log("[Hata] Veri okuma akışı sonlandı: " + e.getMessage());
            }
        });
        readerThread.setDaemon(true);
        readerThread.start();

        log("[Donanım Bağlantısı] Bağlantı başarılı! I2C/Seri telemetri dinleniyor.");
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

                RobotTelemetry telemetry = new RobotTelemetry(
                    front, angle, RobotState.fromCode(stateCode), left, right
                );

                if (telemetryListener != null) {
                    telemetryListener.accept(telemetry);
                }
            }
        } catch (Exception e) {
            log("[Ayrıştırma Hatası] " + e.getMessage());
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
        }
        log("[Donanım Bağlantısı] Bağlantı kesildi.");
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
