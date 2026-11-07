package com.engeldenkacan.presentation.viewmodel;

import com.engeldenkacan.data.SerialI2CBridge;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.domain.repository.ITelemetryRepository;
import com.engeldenkacan.i18n.Strings;
import com.engeldenkacan.theme.ThemeColors;
import com.engeldenkacan.theme.ThemeDetector;

import javax.swing.SwingUtilities;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class DashboardViewModel {
    private final ITelemetryRepository repository;
    private final List<Consumer<RobotTelemetry>> telemetryObservers = new ArrayList<>();
    private final List<Consumer<String>> logObservers = new ArrayList<>();
    private final List<Consumer<Boolean>> connectionObservers = new ArrayList<>();
    private final List<Runnable> uiThemeObservers = new ArrayList<>();

    private ThemeDetector.ThemeMode currentTheme = ThemeDetector.ThemeMode.SYSTEM;
    private Strings.LanguageMode currentLanguage = Strings.LanguageMode.SYSTEM;
    private RobotTelemetry lastTelemetry = RobotTelemetry.noSignal();

    public DashboardViewModel() {
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
        try {
            repository.connect(port);
            notifyConnection(true);
        } catch (Exception e) {
            notifyLog("[Bağlantı Hatası] " + e.getMessage());
            notifyConnection(false);
        }
    }

    public void disconnect() {
        if (repository != null && repository.isConnected()) {
            repository.disconnect();
        }
        notifyConnection(false);
        lastTelemetry = RobotTelemetry.noSignal();
        for (Consumer<RobotTelemetry> observer : telemetryObservers) {
            observer.accept(lastTelemetry);
        }
    }

    public void setTheme(ThemeDetector.ThemeMode theme) {
        this.currentTheme = theme;
        notifyUiRebuild();
    }

    public void setLanguage(Strings.LanguageMode lang) {
        this.currentLanguage = lang;
        Strings.setLanguage(lang);
        notifyUiRebuild();
    }

    public ThemeDetector.ThemeMode getCurrentTheme() { return currentTheme; }
    public Strings.LanguageMode getCurrentLanguage() { return currentLanguage; }
    public ThemeColors getColors() { return ThemeColors.get(currentTheme); }

    public boolean isConnected() {
        return repository != null && repository.isConnected();
    }

    public RobotTelemetry getLastTelemetry() {
        return lastTelemetry;
    }

    public void addTelemetryObserver(Consumer<RobotTelemetry> obs) { telemetryObservers.add(obs); }
    public void addLogObserver(Consumer<String> obs) { logObservers.add(obs); }
    public void addConnectionObserver(Consumer<Boolean> obs) { connectionObservers.add(obs); }
    public void addUiThemeObserver(Runnable obs) { uiThemeObservers.add(obs); }

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

    private void notifyUiRebuild() {
        SwingUtilities.invokeLater(() -> {
            for (Runnable obs : uiThemeObservers) obs.run();
        });
    }
}
