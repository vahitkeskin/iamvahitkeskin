package com.engeldenkacan.presentation.viewmodel;

import com.engeldenkacan.data.MockTelemetryProvider;
import com.engeldenkacan.data.SerialI2CBridge;
import com.engeldenkacan.domain.model.RobotState;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.domain.repository.ITelemetryRepository;

import javax.swing.SwingUtilities;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class DashboardViewModel {
    private ITelemetryRepository repository;
    private final List<Consumer<RobotTelemetry>> telemetryObservers = new ArrayList<>();
    private final List<Consumer<String>> logObservers = new ArrayList<>();
    private final List<Consumer<Boolean>> connectionObservers = new ArrayList<>();

    private RobotTelemetry lastTelemetry = new RobotTelemetry(400, 90, RobotState.DISCONNECTED, 400, 400);

    public DashboardViewModel() {
        // Varsayılan olarak donanım köprüsü atanır
        this.repository = new SerialI2CBridge();
        setupRepoListeners();
    }

    private void setupRepoListeners() {
        repository.setTelemetryListener(telemetry -> {
            this.lastTelemetry = telemetry;
            SwingUtilities.invokeLater(() -> {
                for (Consumer<RobotTelemetry> observer : telemetryObservers) {
                    observer.accept(telemetry);
                }
            });
        });

        repository.setLogListener(msg -> {
            SwingUtilities.invokeLater(() -> {
                for (Consumer<String> observer : logObservers) {
                    observer.accept(msg);
                }
            });
        });
    }

    public void connectHardware(String port) {
        disconnect();
        this.repository = new SerialI2CBridge();
        setupRepoListeners();
        try {
            repository.connect(port);
            notifyConnection(true);
        } catch (Exception e) {
            notifyLog("[Bağlantı Hatası] " + e.getMessage());
            notifyConnection(false);
        }
    }

    public void connectSimulation() {
        disconnect();
        this.repository = new MockTelemetryProvider();
        setupRepoListeners();
        try {
            repository.connect("I2C_ADDR:0x08 (SIM)");
            notifyConnection(true);
        } catch (Exception e) {
            notifyLog("[Simülasyon Hatası] " + e.getMessage());
            notifyConnection(false);
        }
    }

    public void disconnect() {
        if (repository != null && repository.isConnected()) {
            repository.disconnect();
        }
        notifyConnection(false);
        lastTelemetry = new RobotTelemetry(400, 90, RobotState.DISCONNECTED, 400, 400);
        for (Consumer<RobotTelemetry> observer : telemetryObservers) {
            observer.accept(lastTelemetry);
        }
    }

    public boolean isConnected() {
        return repository != null && repository.isConnected();
    }

    public RobotTelemetry getLastTelemetry() {
        return lastTelemetry;
    }

    public void addTelemetryObserver(Consumer<RobotTelemetry> obs) { telemetryObservers.add(obs); }
    public void addLogObserver(Consumer<String> obs) { logObservers.add(obs); }
    public void addConnectionObserver(Consumer<Boolean> obs) { connectionObservers.add(obs); }

    private void notifyConnection(boolean status) {
        SwingUtilities.invokeLater(() -> {
            for (Consumer<Boolean> obs : connectionObservers) obs.accept(status);
        });
    }

    private void notifyLog(String msg) {
        SwingUtilities.invokeLater(() -> {
            for (Consumer<String> obs : logObservers) obs.accept(msg);
        });
    }
}

