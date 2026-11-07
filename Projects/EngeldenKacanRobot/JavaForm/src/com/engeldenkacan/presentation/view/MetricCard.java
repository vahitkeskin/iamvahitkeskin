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

    private ThemeColors colors;
    private RobotTelemetry lastTelemetry = RobotTelemetry.noSignal();

    public MetricCard(ThemeColors initialColors) {
        this.colors = initialColors;
        setLayout(new BorderLayout(10, 10));
        applyTheme(initialColors);

        lblTitle.setFont(new Font("SansSerif", Font.BOLD, 13));
        lblFrontVal.setFont(new Font("SansSerif", Font.BOLD, 42));
        lblSafetyStatus.setFont(new Font("SansSerif", Font.BOLD, 12));

        safetyBar.setPreferredSize(new Dimension(100, 10));
        safetyBar.setValue(0);
        safetyBar.setBorderPainted(false);

        JPanel centerPanel = new JPanel();
        centerPanel.setLayout(new BoxLayout(centerPanel, BoxLayout.Y_AXIS));
        centerPanel.setOpaque(false);
        lblFrontVal.setAlignmentX(Component.CENTER_ALIGNMENT);
        lblSafetyStatus.setAlignmentX(Component.CENTER_ALIGNMENT);
        safetyBar.setAlignmentX(Component.CENTER_ALIGNMENT);

        centerPanel.add(lblFrontVal);
        centerPanel.add(Box.createVerticalStrut(4));
        centerPanel.add(lblSafetyStatus);
        centerPanel.add(Box.createVerticalStrut(8));
        centerPanel.add(safetyBar);

        JPanel bottomPanel = new JPanel(new GridLayout(1, 2, 10, 0));
        bottomPanel.setOpaque(false);
        lblLeftVal.setFont(new Font("Monospaced", Font.PLAIN, 12));
        lblRightVal.setFont(new Font("Monospaced", Font.PLAIN, 12));
        lblRightVal.setHorizontalAlignment(SwingConstants.RIGHT);

        bottomPanel.add(lblLeftVal);
        bottomPanel.add(lblRightVal);

        add(lblTitle, BorderLayout.NORTH);
        add(centerPanel, BorderLayout.CENTER);
        add(bottomPanel, BorderLayout.SOUTH);

        applyLanguage();
    }

    public void applyTheme(ThemeColors colors) {
        this.colors = colors;
        setBackground(colors.bgCard);
        setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(colors.border, 1),
            BorderFactory.createEmptyBorder(14, 16, 14, 16)
        ));
        lblTitle.setForeground(colors.textMuted);
        lblLeftVal.setForeground(colors.textSecondary);
        lblRightVal.setForeground(colors.textSecondary);
        safetyBar.setBackground(colors.bgPrimary);
        updateTelemetry(lastTelemetry);
    }

    public void applyLanguage() {
        lblTitle.setText(Strings.sensorTitle());
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
    }
}
