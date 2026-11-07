package com.engeldenkacan.presentation.view;

import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.i18n.Strings;
import com.engeldenkacan.theme.ThemeColors;

import javax.swing.JPanel;
import java.awt.*;
import java.awt.geom.Arc2D;

public class ServoGaugeCanvas extends JPanel {
    private int currentAngle = 90;
    private boolean hasSignal = false;
    private ThemeColors colors;

    public ServoGaugeCanvas(ThemeColors initialColors) {
        this.colors = initialColors;
        setBackground(colors.radarBg);
        setPreferredSize(new Dimension(320, 320));
    }

    public void applyTheme(ThemeColors colors) {
        this.colors = colors;
        setBackground(colors.radarBg);
        repaint();
    }

    public void updateTelemetry(RobotTelemetry telemetry) {
        this.hasSignal = telemetry.hasSignal();
        if (hasSignal) {
            this.currentAngle = telemetry.getServoAngle();
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
        int cx = w / 2;
        int cy = h / 2 + 10;
        int radius = Math.min(w, h) / 2 - 35;

        // Başlık
        g2.setColor(colors.textPrimary);
        g2.setFont(new Font("SansSerif", Font.BOLD, 13));
        g2.drawString(Strings.servoTitle(), 16, 22);

        // Kadran Yayının Arka Planı (0° - 180° Aralığı)
        g2.setColor(colors.border);
        g2.setStroke(new BasicStroke(16f, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND));
        g2.draw(new Arc2D.Float(cx - radius, cy - radius, radius * 2, radius * 2, 0, 180, Arc2D.OPEN));

        if (hasSignal) {
            // Renkli İlerleme Yayı (0°'den mevcut açıya kadar)
            g2.setColor(new Color(59, 130, 246));
            g2.setStroke(new BasicStroke(16f, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND));
            g2.draw(new Arc2D.Float(cx - radius, cy - radius, radius * 2, radius * 2, 0, currentAngle, Arc2D.OPEN));
        }

        // Kadran Çizgileri ve Derece İşaretleri
        g2.setStroke(new BasicStroke(1.5f));
        for (int a = 0; a <= 180; a += 15) {
            double rad = Math.toRadians(a);
            int innerR = (a % 45 == 0) ? radius - 18 : radius - 12;
            int outerR = radius - 4;

            int x1 = cx + (int) (innerR * Math.cos(rad));
            int y1 = cy - (int) (innerR * Math.sin(rad));
            int x2 = cx + (int) (outerR * Math.cos(rad));
            int y2 = cy - (int) (outerR * Math.sin(rad));

            g2.setColor((a % 45 == 0) ? colors.textPrimary : colors.border);
            g2.drawLine(x1, y1, x2, y2);

            if (a % 45 == 0) {
                int tx = cx + (int) ((radius - 30) * Math.cos(rad)) - 10;
                int ty = cy - (int) ((radius - 30) * Math.sin(rad)) + 4;
                g2.setColor(colors.textMuted);
                g2.setFont(new Font("Monospaced", Font.BOLD, 10));
                g2.drawString(a + "°", tx, ty);
            }
        }

        if (hasSignal) {
            // Gerçek İbre (Sadece donanım bağlı ve veri aktarıyorsa)
            double needleRad = Math.toRadians(currentAngle);
            int needleLen = radius - 8;
            int nx = cx + (int) (needleLen * Math.cos(needleRad));
            int ny = cy - (int) (needleLen * Math.sin(needleRad));

            g2.setColor(new Color(239, 68, 68));
            g2.setStroke(new BasicStroke(3.5f, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND));
            g2.drawLine(cx, cy, nx, ny);

            g2.setColor(colors.bgCard);
            g2.fillOval(cx - 10, cy - 10, 20, 20);
            g2.setColor(new Color(239, 68, 68));
            g2.fillOval(cx - 5, cy - 5, 10, 10);

            // Dijital Açı Değeri
            g2.setColor(colors.textPrimary);
            g2.setFont(new Font("SansSerif", Font.BOLD, 28));
            String angleText = currentAngle + "°";
            FontMetrics fm = g2.getFontMetrics();
            int strW = fm.stringWidth(angleText);
            g2.drawString(angleText, cx - strW / 2, cy + 45);

            String posLabel = Strings.center() + " (90°)";
            Color posColor = new Color(52, 211, 153);
            if (currentAngle < 70) {
                posLabel = Strings.rightScan() + " (" + currentAngle + "°)";
                posColor = new Color(96, 165, 250);
            } else if (currentAngle > 110) {
                posLabel = Strings.leftScan() + " (" + currentAngle + "°)";
                posColor = new Color(244, 114, 182);
            }

            g2.setColor(posColor);
            g2.setFont(new Font("SansSerif", Font.BOLD, 12));
            FontMetrics fmLabel = g2.getFontMetrics();
            int labelW = fmLabel.stringWidth(posLabel);
            g2.drawString(posLabel, cx - labelW / 2, cy + 65);
        } else {
            // Sinyal Yok Durumu - Statik Bekleme
            g2.setColor(colors.textMuted);
            g2.setFont(new Font("SansSerif", Font.BOLD, 26));
            String noSig = "--°";
            FontMetrics fm = g2.getFontMetrics();
            int strW = fm.stringWidth(noSig);
            g2.drawString(noSig, cx - strW / 2, cy + 45);

            g2.setColor(new Color(239, 68, 68));
            g2.setFont(new Font("SansSerif", Font.BOLD, 12));
            String warn = "[" + Strings.noSignal().toUpperCase() + "]";
            FontMetrics fmW = g2.getFontMetrics();
            int wW = fmW.stringWidth(warn);
            g2.drawString(warn, cx - wW / 2, cy + 65);
        }

        g2.dispose();
    }
}
