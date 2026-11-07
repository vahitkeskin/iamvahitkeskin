package com.engeldenkacan.presentation.view;

import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.i18n.Strings;
import com.engeldenkacan.theme.ThemeColors;

import javax.swing.*;
import java.awt.*;

public class MetricCard extends JPanel {
    private final JLabel lblTitle = new JLabel();
    private final JLabel lblFrontVal = new JLabel("-- cm", SwingConstants.CENTER);
    private final JLabel lblSafetyStatus = new JLabel("", SwingConstants.CENTER);
    private final JProgressBar safetyBar = new JProgressBar(0, 100);
    private final JLabel lblLeftVal = new JLabel();
    private final JLabel lblRightVal = new JLabel();

    // Batarya Gösterge Elemanları
    private final JPanel batteryPanel = new JPanel(new BorderLayout(8, 4));
    private final JLabel lblBatteryTitle = new JLabel();
    private final JLabel lblBatteryStatus = new JLabel("", SwingConstants.RIGHT);
    private final JProgressBar batteryBar = new JProgressBar(0, 100);

    private ThemeColors colors;
    private RobotTelemetry lastTelemetry = RobotTelemetry.noSignal();

    public MetricCard(ThemeColors initialColors) {
        this.colors = initialColors;
        setLayout(new BorderLayout(10, 8));
        applyTheme(initialColors);

        lblTitle.setFont(new Font("SansSerif", Font.BOLD, 12));
        lblFrontVal.setFont(new Font("SansSerif", Font.BOLD, 38));
        lblSafetyStatus.setFont(new Font("SansSerif", Font.BOLD, 11));

        safetyBar.setPreferredSize(new Dimension(100, 8));
        safetyBar.setValue(0);
        safetyBar.setBorderPainted(false);

        JPanel centerPanel = new JPanel();
        centerPanel.setLayout(new BoxLayout(centerPanel, BoxLayout.Y_AXIS));
        centerPanel.setOpaque(false);
        lblFrontVal.setAlignmentX(Component.CENTER_ALIGNMENT);
        lblSafetyStatus.setAlignmentX(Component.CENTER_ALIGNMENT);
        safetyBar.setAlignmentX(Component.CENTER_ALIGNMENT);

        centerPanel.add(lblFrontVal);
        centerPanel.add(Box.createVerticalStrut(2));
        centerPanel.add(lblSafetyStatus);
        centerPanel.add(Box.createVerticalStrut(6));
        centerPanel.add(safetyBar);

        // Mesafe Koridorları (Sol & Sağ)
        JPanel corridorPanel = new JPanel(new GridLayout(1, 2, 10, 0));
        corridorPanel.setOpaque(false);
        lblLeftVal.setFont(new Font("Monospaced", Font.PLAIN, 11));
        lblRightVal.setFont(new Font("Monospaced", Font.PLAIN, 11));
        lblRightVal.setHorizontalAlignment(SwingConstants.RIGHT);
        corridorPanel.add(lblLeftVal);
        corridorPanel.add(lblRightVal);

        // Batarya & Güç Yönetimi
        batteryPanel.setOpaque(false);
        lblBatteryTitle.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblBatteryStatus.setFont(new Font("Monospaced", Font.BOLD, 11));
        batteryBar.setPreferredSize(new Dimension(100, 8));
        batteryBar.setValue(85);
        batteryBar.setBorderPainted(false);

        JPanel batHeader = new JPanel(new BorderLayout());
        batHeader.setOpaque(false);
        batHeader.add(lblBatteryTitle, BorderLayout.WEST);
        batHeader.add(lblBatteryStatus, BorderLayout.EAST);

        batteryPanel.add(batHeader, BorderLayout.NORTH);
        batteryPanel.add(batteryBar, BorderLayout.CENTER);

        // Alt Kısım: Koridorlar + Batarya
        JPanel bottomContainer = new JPanel(new BorderLayout(0, 6));
        bottomContainer.setOpaque(false);
        bottomContainer.add(corridorPanel, BorderLayout.NORTH);
        bottomContainer.add(batteryPanel, BorderLayout.SOUTH);

        add(lblTitle, BorderLayout.NORTH);
        add(centerPanel, BorderLayout.CENTER);
        add(bottomContainer, BorderLayout.SOUTH);

        applyLanguage();
    }

    public void applyTheme(ThemeColors colors) {
        this.colors = colors;
        setBackground(colors.bgCard);
        setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(colors.border, 1),
            BorderFactory.createEmptyBorder(10, 14, 10, 14)
        ));
        lblTitle.setForeground(colors.textMuted);
        lblLeftVal.setForeground(colors.textSecondary);
        lblRightVal.setForeground(colors.textSecondary);
        safetyBar.setBackground(colors.bgPrimary);

        lblBatteryTitle.setForeground(colors.textMuted);
        lblBatteryStatus.setForeground(colors.textPrimary);
        batteryBar.setBackground(colors.bgPrimary);

        updateTelemetry(lastTelemetry);
    }

    public void applyLanguage() {
        lblTitle.setText(Strings.sensorTitle());
        lblBatteryTitle.setText(Strings.batteryTitle());
        updateTelemetry(lastTelemetry);
    }

    public void updateTelemetry(RobotTelemetry telemetry) {
        this.lastTelemetry = telemetry;

        if (!telemetry.hasSignal()) {
            lblFrontVal.setText("-- cm");
            lblFrontVal.setForeground(colors.textMuted);
            lblSafetyStatus.setText("[" + Strings.noSignal().toUpperCase() + "]");
            lblSafetyStatus.setForeground(new Color(239, 68, 68));
            safetyBar.setValue(0);
            lblLeftVal.setText(Strings.leftCorridor(-1));
            lblRightVal.setText(Strings.rightCorridor(-1));

            lblBatteryStatus.setText("-- V (0%)");
            lblBatteryStatus.setForeground(colors.textMuted);
            batteryBar.setValue(0);
            return;
        }

        int dist = telemetry.getFrontDistance();
        lblFrontVal.setText(dist + " cm");

        if (dist <= 15) {
            lblFrontVal.setForeground(new Color(239, 68, 68));
            lblSafetyStatus.setText(Strings.dangerObstacle());
            lblSafetyStatus.setForeground(new Color(248, 113, 113));
            safetyBar.setForeground(new Color(239, 68, 68));
            safetyBar.setValue(Math.min(dist * 2, 30));
        } else if (dist <= 30) {
            lblFrontVal.setForeground(new Color(245, 158, 11));
            lblSafetyStatus.setText(Strings.warningObstacle());
            lblSafetyStatus.setForeground(new Color(251, 191, 36));
            safetyBar.setForeground(new Color(245, 158, 11));
            safetyBar.setValue(dist * 2);
        } else {
            lblFrontVal.setForeground(new Color(52, 211, 153));
            lblSafetyStatus.setText(Strings.safeCorridor());
            lblSafetyStatus.setForeground(new Color(52, 211, 153));
            safetyBar.setForeground(new Color(16, 185, 129));
            safetyBar.setValue(Math.min(dist, 100));
        }

        lblLeftVal.setText(Strings.leftCorridor(telemetry.getLeftDistance()));
        lblRightVal.setText(Strings.rightCorridor(telemetry.getRightDistance()));

        // Batarya Durumu Güncellemesi
        int batPct = telemetry.getBatteryPercentage();
        float batVolt = telemetry.getBatteryVoltage();
        boolean isChg = telemetry.isCharging();

        batteryBar.setValue(batPct);
        String chgText = isChg ? Strings.batteryCharging() : (batPct <= 15 ? Strings.batteryCritical() : Strings.batteryDischarging());
        lblBatteryStatus.setText(chgText + " | " + String.format("%.2fV", batVolt) + " (%" + batPct + ")");

        if (isChg) {
            batteryBar.setForeground(new Color(16, 185, 129));
            lblBatteryStatus.setForeground(new Color(16, 185, 129));
        } else if (batPct <= 15) {
            batteryBar.setForeground(new Color(239, 68, 68));
            lblBatteryStatus.setForeground(new Color(239, 68, 68));
        } else if (batPct <= 35) {
            batteryBar.setForeground(new Color(245, 158, 11));
            lblBatteryStatus.setForeground(new Color(245, 158, 11));
        } else {
            batteryBar.setForeground(new Color(16, 185, 129));
            lblBatteryStatus.setForeground(new Color(16, 185, 129));
        }
    }
}
