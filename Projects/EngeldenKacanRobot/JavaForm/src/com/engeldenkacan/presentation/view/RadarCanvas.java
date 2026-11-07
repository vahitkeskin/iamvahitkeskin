package com.engeldenkacan.presentation.view;

import com.engeldenkacan.domain.model.RobotTelemetry;

import javax.swing.JPanel;
import java.awt.*;
import java.awt.geom.Arc2D;
import java.awt.geom.Point2D;
import java.util.ArrayList;
import java.util.List;

public class RadarCanvas extends JPanel {
    private int currentAngle = 90;
    private int currentDistance = 400; // cm
    private final List<Point2D.Float> obstacleBlips = new ArrayList<>();

    public RadarCanvas() {
        setBackground(new Color(15, 23, 42)); // Koyu Slate mavisi
        setPreferredSize(new Dimension(380, 320));
    }

    public void updateTelemetry(RobotTelemetry telemetry) {
        this.currentAngle = telemetry.getServoAngle();
        this.currentDistance = telemetry.getFrontDistance();

        // Engel tespit edildiyse radar üzerine blip (nokta) ekle
        if (currentDistance <= 50 && currentDistance > 2) {
            float rad = (float) Math.toRadians(currentAngle);
            // 50cm radar yarıçapına ölçekle
            float rNorm = currentDistance / 50.0f;
            obstacleBlips.add(new Point2D.Float(rad, rNorm));
            if (obstacleBlips.size() > 25) {
                obstacleBlips.remove(0);
            }
        }
        repaint();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g.create();
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        g2.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);

        int w = getWidth();
        int h = getHeight();
        int centerX = w / 2;
        int centerY = h - 35;
        int maxRadius = Math.min(centerX - 25, centerY - 25);

        // Radar Arka Plan Izgarası
        g2.setColor(new Color(30, 41, 59));
        g2.fill(new Arc2D.Float(centerX - maxRadius, centerY - maxRadius, maxRadius * 2, maxRadius * 2, 0, 180, Arc2D.PIE));

        // Konsantrik Mesafe Halkaları (10, 20, 30, 40, 50 cm)
        g2.setColor(new Color(51, 65, 85));
        g2.setStroke(new BasicStroke(1.2f));
        int rings = 5;
        for (int i = 1; i <= rings; i++) {
            int r = (maxRadius * i) / rings;
            g2.draw(new Arc2D.Float(centerX - r, centerY - r, r * 2, r * 2, 0, 180, Arc2D.OPEN));
            
            // Mesafe Etiketleri
            g2.setColor(new Color(148, 163, 184));
            g2.setFont(new Font("Monospaced", Font.PLAIN, 10));
            g2.drawString((i * 10) + "cm", centerX + 4, centerY - r + 12);
            g2.setColor(new Color(51, 65, 85));
        }

        // Radyal Açı Çizgileri (0, 30, 60, 90, 120, 150, 180)
        for (int a = 0; a <= 180; a += 30) {
            double rad = Math.toRadians(a);
            int x = centerX + (int) (maxRadius * Math.cos(rad));
            int y = centerY - (int) (maxRadius * Math.sin(rad));
            g2.drawLine(centerX, centerY, x, y);

            // Açı etiketleri
            int tx = centerX + (int) ((maxRadius + 14) * Math.cos(rad)) - 8;
            int ty = centerY - (int) ((maxRadius + 14) * Math.sin(rad)) + 4;
            g2.setColor(new Color(148, 163, 184));
            g2.setFont(new Font("SansSerif", Font.BOLD, 10));
            g2.drawString(a + "°", tx, ty);
            g2.setColor(new Color(51, 65, 85));
        }

        // Engel Noktaları (Blips)
        for (Point2D.Float blip : obstacleBlips) {
            int bx = centerX + (int) (maxRadius * blip.y * Math.cos(blip.x));
            int by = centerY - (int) (maxRadius * blip.y * Math.sin(blip.x));

            g2.setColor(new Color(239, 68, 68, 180));
            g2.fillOval(bx - 4, by - 4, 8, 8);
            g2.setColor(new Color(254, 202, 202));
            g2.fillOval(bx - 2, by - 2, 4, 4);
        }

        // Servo Açısı Işını (Tarama Çizgisi)
        double servoRad = Math.toRadians(currentAngle);
        int beamX = centerX + (int) (maxRadius * Math.cos(servoRad));
        int beamY = centerY - (int) (maxRadius * Math.sin(servoRad));

        // Işın gölgesi / parlaması
        g2.setColor(new Color(16, 185, 129, 60));
        g2.setStroke(new BasicStroke(6f));
        g2.drawLine(centerX, centerY, beamX, beamY);

        // Ana ışın
        g2.setColor(new Color(52, 211, 153));
        g2.setStroke(new BasicStroke(2.2f));
        g2.drawLine(centerX, centerY, beamX, beamY);

        // Merkez Taban Noktası
        g2.setColor(new Color(16, 185, 129));
        g2.fillOval(centerX - 7, centerY - 7, 14, 14);
        g2.setColor(Color.WHITE);
        g2.fillOval(centerX - 3, centerY - 3, 6, 6);

        // Başlık
        g2.setColor(new Color(241, 245, 249));
        g2.setFont(new Font("SansSerif", Font.BOLD, 13));
        g2.drawString("ULTRASONİK RADAR TARAMASI", 16, 22);

        g2.dispose();
    }
}
