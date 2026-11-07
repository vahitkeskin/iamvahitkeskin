package com.engeldenkacan.domain.repository;

import com.engeldenkacan.domain.model.RobotTelemetry;
import java.util.function.Consumer;

public interface ITelemetryRepository {
    void connect(String target) throws Exception;
    void disconnect();
    boolean isConnected();
    void setTelemetryListener(Consumer<RobotTelemetry> listener);
    void setLogListener(Consumer<String> logListener);

    // Robota Doğrudan Müdahale & Batarya
    void sendCommand(String command);
    void toggleChargingSimulation();
}
