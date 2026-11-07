package com.engeldenkacan.data;

import com.engeldenkacan.domain.model.RobotState;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.domain.repository.ITelemetryRepository;

import java.util.Random;
import java.util.concurrent.*;
import java.util.function.Consumer;

public class MockTelemetryProvider implements ITelemetryRepository {
    private ScheduledExecutorService executor;
    private Consumer<RobotTelemetry> telemetryListener;
    private Consumer<String> logListener;
    private boolean connected = false;

    private int servoAngle = 90;
    private int servoDirection = 2; // + veya -
    private int distance = 65;
    private RobotState state = RobotState.CRUISING;
    private final Random random = new Random();

    @Override
    public void connect(String target) {
        connected = true;
        if (logListener != null) {
            logListener.accept("[I2C Köprüsü] " + target + " adresine sanal I2C/Seri bağlantı kuruldu.");
        }
        
        executor = Executors.newSingleThreadScheduledExecutor();
        executor.scheduleAtFixedRate(this::tick, 0, 50, TimeUnit.MILLISECONDS);
    }

    private void tick() {
        if (!connected) return;

        // Servo Açı Hareketi (90 merkez, 20 sağ, 160 sol)
        if (state == RobotState.AVOIDING) {
            servoAngle += servoDirection * 4;
            if (servoAngle >= 160) {
                servoAngle = 160;
                servoDirection = -1;
            } else if (servoAngle <= 20) {
                servoAngle = 20;
                servoDirection = 1;
            }
        } else {
            // Küçük titreşimler
            servoAngle = 90 + (int)(Math.sin(System.currentTimeMillis() / 300.0) * 5);
        }

        // Mesafe Değişimi
        if (state == RobotState.CRUISING) {
            distance -= 1;
            if (distance <= 25) {
                state = RobotState.AVOIDING;
                if (logListener != null) {
                    logListener.accept(String.format("[I2C 0x08] REG_FRONT_DISTANCE=%d cm -> ENGEL TESPİT EDİLDİ!", distance));
                }
            }
        } else if (state == RobotState.AVOIDING) {
            distance += 2;
            if (distance >= 55) {
                state = RobotState.CRUISING;
                if (logListener != null) {
                    logListener.accept("[I2C 0x08] Yol açıldı, Seyir moduna (CRUISING) dönüldü.");
                }
            }
        }

        int leftDist = 40 + random.nextInt(15);
        int rightDist = 20 + random.nextInt(10);

        RobotTelemetry telemetry = new RobotTelemetry(distance, servoAngle, state, leftDist, rightDist);
        if (telemetryListener != null) {
            telemetryListener.accept(telemetry);
        }
    }

    @Override
    public void disconnect() {
        connected = false;
        if (executor != null) {
            executor.shutdownNow();
        }
        if (logListener != null) {
            logListener.accept("[I2C Köprüsü] Bağlantı kapatıldı.");
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
