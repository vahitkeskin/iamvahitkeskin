package com.engeldenkacan.presentation.view;

import com.engeldenkacan.domain.model.RobotTelemetry;

import javax.swing.*;
import java.awt.*;

public class MetricCard extends JPanel {
    private final JLabel lblFrontVal = new JLabel("-- cm", SwingConstants.CENTER);
    private final JLabel lblSafetyStatus = new JLabel("BEKLENİYOR...", SwingConstants.CENTER);
    private final JProgressBar safetyBar = new JProgressBar(0, 100);
    private final JLabel lblLeftVal = new JLabel("Sol: -- cm");
    private final JLabel lblRightVal = new JLabel("Sağ: -- cm");

    public MetricCard() {
        setLayout(new BorderLayout(10, 10));
        setBackground(new Color(30, 41, 59));
        setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(51, 65, 85), 1),
            BorderFactory.createEmptyBorder(14, 16, 14, 16)
        ));

        // Başlık
        JLabel lblTitle = new JLabel("HC-SR04 ULTRASONİK MESAFE SENSÖRÜ");
        lblTitle.setFont(new Font("SansSerif", Font.BOLD, 13));
        lblTitle.setForeground(new Color(148, 163, 184));

        // Değer Göstergesi
        lblFrontVal.setFont(new Font("SansSerif", Font.BOLD, 42));
        lblFrontVal.setForeground(new Color(52, 211, 153));

        lblSafetyStatus.setFont(new Font("SansSerif", Font.BOLD, 12));
        lblSafetyStatus.setForeground(new Color(148, 163, 184));

        safetyBar.setPreferredSize(new Dimension(100, 10));
        safetyBar.setValue(100);
        safetyBar.setForeground(new Color(16, 185, 129));
        safetyBar.setBackground(new Color(15, 23, 42));
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

        // Alt Panel (Sağ & Sol Mesafeler)
        JPanel bottomPanel = new JPanel(new GridLayout(1, 2, 10, 0));
        bottomPanel.setOpaque(false);
        lblLeftVal.setForeground(new Color(203, 213, 225));
        lblLeftVal.setFont(new Font("Monospaced", Font.PLAIN, 12));
        lblRightVal.setForeground(new Color(203, 213, 225));
        lblRightVal.setFont(new Font("Monospaced", Font.PLAIN, 12));
        lblRightVal.setHorizontalAlignment(SwingConstants.RIGHT);

        bottomPanel.add(lblLeftVal);
        bottomPanel.add(lblRightVal);

        add(lblTitle, BorderLayout.NORTH);
        add(centerPanel, BorderLayout.CENTER);
        add(bottomPanel, BorderLayout.SOUTH);
    }

    public void updateTelemetry(RobotTelemetry telemetry) {
        int dist = telemetry.getFrontDistance();
        lblFrontVal.setText(dist + " cm");

        // Güvenlik Seviyesi Hesaplama
        if (dist <= 15) {
            lblFrontVal.setForeground(new Color(239, 68, 68));
            lblSafetyStatus.setText("🔴 TEHLİKE - ACİL DURDURULDU");
            lblSafetyStatus.setForeground(new Color(248, 113, 113));
            safetyBar.setForeground(new Color(239, 68, 68));
            safetyBar.setValue(Math.min(dist * 2, 30));
        } else if (dist <= 30) {
            lblFrontVal.setForeground(new Color(245, 158, 11));
            lblSafetyStatus.setText("🟡 DİKKAT - ENGEL YAKLAŞTI");
            lblSafetyStatus.setForeground(new Color(251, 191, 36));
            safetyBar.setForeground(new Color(245, 158, 11));
            safetyBar.setValue(dist * 2);
        } else {
            lblFrontVal.setForeground(new Color(52, 211, 153));
            lblSafetyStatus.setText("🟢 GÜVENLİ SEYİR KORİDORU");
            lblSafetyStatus.setForeground(new Color(52, 211, 153));
            safetyBar.setForeground(new Color(16, 185, 129));
            safetyBar.setValue(Math.min(dist, 100));
        }

        lblLeftVal.setText("Sol Koridor: " + telemetry.getLeftDistance() + " cm");
        lblRightVal.setText("Sağ Koridor: " + telemetry.getRightDistance() + " cm");
    }
}

