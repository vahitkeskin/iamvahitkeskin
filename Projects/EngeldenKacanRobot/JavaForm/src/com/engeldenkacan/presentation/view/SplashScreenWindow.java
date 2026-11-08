package com.engeldenkacan.presentation.view;

import com.engeldenkacan.i18n.Strings;
import com.engeldenkacan.theme.ThemeDetector;
import com.engeldenkacan.util.AppIconHelper;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.geom.*;

/**
 * 🚀 SplashScreenWindow - Cross-Platform JavaForm Diagnostic Boot Loader
 * Mac, Windows ve Linux işletim sistemlerinde sorunsuz çalışan,
 * donanım kimliğiyle %100 uyumlu, tam tema (Koyu/Açık) ve tam dil (TR/EN)
 * desteklerini barındıran yüksek çözünürlüklü (Hi-DPI) başlangıç penceresi.
 *
 * En altta "vahitkeskin tarafından geliştirildi" imzasını taşır.
 */
public class SplashScreenWindow extends JWindow {
    private final Runnable onFinished;
    private final Timer animationTimer;

    private float progress = 0.0f;
    private int stepIndex = 0;
    private float sweepAngle = 0.0f;
    private float wavePulse = 0.0f;
    private boolean isFinished = false;

    // Tema & Dil Durumu
    private boolean isDark;
    private Strings.LanguageMode langMode = Strings.getLanguageMode();

    public SplashScreenWindow(Runnable onFinished) {
        this.onFinished = onFinished;
        this.isDark = ThemeDetector.isSystemInDarkMode();

        setSize(520, 440);
        setLocationRelativeTo(null);
        setAlwaysOnTop(true);
        AppIconHelper.apply(this);

        try {
            setBackground(new Color(0, 0, 0, 0));
        } catch (Exception ignored) {
            setBackground(isDark ? new Color(15, 23, 42) : new Color(248, 250, 252));
        }

        SplashPanel panel = new SplashPanel();
        setContentPane(panel);

        // Hızlı tema/dil çipleri veya atlama (Skip) tıklama denetleyicisi
        panel.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int x = e.getX();
                int y = e.getY();

                // Üst Dil Çipleri Tıklama Alanı (y: 20..44)
                if (y >= 20 && y <= 44) {
                    if (x >= 24 && x <= 60) {
                        langMode = Strings.LanguageMode.SYSTEM;
                        Strings.setLanguage(langMode);
                        panel.repaint();
                        return;
                    } else if (x >= 62 && x <= 98) {
                        langMode = Strings.LanguageMode.TR;
                        Strings.setLanguage(langMode);
                        panel.repaint();
                        return;
                    } else if (x >= 100 && x <= 136) {
                        langMode = Strings.LanguageMode.EN;
                        Strings.setLanguage(langMode);
                        panel.repaint();
                        return;
                    }

                    // Üst Tema Çipleri (Sağ)
                    int w = getWidth();
                    if (x >= w - 140 && x <= w - 104) {
                        isDark = ThemeDetector.isSystemInDarkMode();
                        panel.repaint();
                        return;
                    } else if (x >= w - 102 && x <= w - 66) {
                        isDark = true;
                        panel.repaint();
                        return;
                    } else if (x >= w - 64 && x <= w - 24) {
                        isDark = false;
                        panel.repaint();
                        return;
                    }
                }

                // Ekrana tıklandığında beklemeden geç
                finish();
            }
        });

        // 40 FPS Animasyon ve İlerleme Zamanlayıcısı (2000 ms)
        final long startTime = System.currentTimeMillis();
        final long totalDuration = 2000L;

        animationTimer = new Timer(25, e -> {
            long elapsed = System.currentTimeMillis() - startTime;
            progress = Math.min(1.0f, (float) elapsed / (float) totalDuration);

            // Adım hesaplama
            if (progress < 0.25f) stepIndex = 0;
            else if (progress < 0.50f) stepIndex = 1;
            else if (progress < 0.75f) stepIndex = 2;
            else if (progress < 0.95f) stepIndex = 3;
            else stepIndex = 4;

            // Radar ışını ve ses dalgası animasyonları
            sweepAngle = (sweepAngle + 4.5f) % 360.0f;
            wavePulse = (wavePulse + 0.025f) % 1.0f;

            panel.repaint();

            if (progress >= 1.0f) {
                ((Timer) e.getSource()).stop();
                Timer exitTimer = new Timer(180, ev -> finish());
                exitTimer.setRepeats(false);
                exitTimer.start();
            }
        });
        animationTimer.start();
    }

    private synchronized void finish() {
        if (isFinished) return;
        isFinished = true;
        if (animationTimer != null && animationTimer.isRunning()) {
            animationTimer.stop();
        }
        setVisible(false);
        dispose();
        if (onFinished != null) {
            SwingUtilities.invokeLater(onFinished);
        }
    }

    private class SplashPanel extends JPanel {
        public SplashPanel() {
            setOpaque(false);
        }

        @Override
        protected void paintComponent(Graphics g) {
            super.paintComponent(g);
            Graphics2D g2 = (Graphics2D) g.create();

            g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
            g2.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON);
            g2.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
            g2.setRenderingHint(RenderingHints.KEY_STROKE_CONTROL, RenderingHints.VALUE_STROKE_PURE);

            int w = getWidth();
            int h = getHeight();

            // 1. ANA KART ARKA PLANI & ÇERÇEVESİ (#060914 koyu tema / #F8FAFC açık tema)
            RoundRectangle2D card = new RoundRectangle2D.Float(10, 10, w - 20, h - 20, 28, 28);
            g2.setColor(isDark ? new Color(6, 9, 20) : new Color(248, 250, 252));
            g2.fill(card);

            g2.setColor(isDark ? new Color(30, 41, 59) : new Color(226, 232, 240));
            g2.setStroke(new BasicStroke(1.2f));
            g2.draw(card);

            int cx = w / 2;
            int cy = h / 2 - 20;

            // 2. DIŞA DOĞRU YAYILAN ZARİF SONAR RADAR DALGALARI
            for (int i = 0; i < 3; i++) {
                float phase = (wavePulse + i * 0.33f) % 1.0f;
                float waveR = 75f + phase * 65f;
                int waveAlpha = (int) ((1.0f - phase) * (isDark ? 90 : 70));
                if (waveAlpha > 0) {
                    g2.setColor(new Color(0, 229, 255, waveAlpha));
                    g2.setStroke(new BasicStroke(Math.max(1.0f, 1.8f - phase * 1.0f)));
                    g2.draw(new Ellipse2D.Float(cx - waveR, cy - waveR, waveR * 2, waveR * 2));
                }
            }

            // Ortada yumuşak bir parıltı halesi
            RadialGradientPaint glow = new RadialGradientPaint(
                    cx, cy, 100,
                    new float[]{0.0f, 1.0f},
                    new Color[]{new Color(0, 229, 255, isDark ? 35 : 20), new Color(0, 0, 0, 0)}
            );
            g2.setPaint(glow);
            g2.fill(new Ellipse2D.Float(cx - 100, cy - 100, 200, 200));

            // 3. APP ICON'IN BİREBİR AYNISI (Hafif dikey süzülme ile)
            int iconSize = 145;
            int floatY = (int) (Math.sin(sweepAngle * Math.PI / 180.0) * 4);
            int iconX = cx - iconSize / 2;
            int iconY = cy - iconSize / 2 + floatY;

            RoundRectangle2D iconClip = new RoundRectangle2D.Float(iconX, iconY, iconSize, iconSize, 34, 34);

            // İkon gölgesi ve arka planı
            g2.setColor(isDark ? new Color(15, 23, 42) : Color.WHITE);
            g2.fill(iconClip);

            // İkonu çiz
            java.net.URL iconUrl = AppIconHelper.class.getResource("/resources/icons/app_icon_256.png");
            if (iconUrl == null) {
                iconUrl = AppIconHelper.class.getResource("/resources/icons/app_icon.png");
            }
            if (iconUrl != null) {
                Image appImg = new ImageIcon(iconUrl).getImage();
                Graphics2D gImg = (Graphics2D) g2.create();
                gImg.setClip(iconClip);
                gImg.drawImage(appImg, iconX, iconY, iconSize, iconSize, null);
                gImg.dispose();
            }

            // İkon Çerçevesi (Cyan degrade hissi)
            g2.setColor(isDark ? new Color(0, 229, 255, 120) : new Color(37, 99, 235, 100));
            g2.setStroke(new BasicStroke(1.2f));
            g2.draw(iconClip);

            // 4. SADECE EN ALTTAN "vahitkeskin tarafından geliştirildi" KİBAR UI İMZASI
            String devText = Strings.splashDevelopedBy();
            g2.setFont(new Font("SansSerif", Font.PLAIN, 11));
            FontMetrics fmDev = g2.getFontMetrics();
            int textW = fmDev.stringWidth(devText);
            int badgeW = textW + 36;
            int badgeH = 28;
            int badgeX = cx - badgeW / 2;
            int badgeY = h - 50;

            RoundRectangle2D devBadge = new RoundRectangle2D.Float(badgeX, badgeY, badgeW, badgeH, 14, 14);
            g2.setColor(isDark ? new Color(30, 41, 59, 130) : new Color(255, 255, 255, 200));
            g2.fill(devBadge);
            g2.setColor(isDark ? new Color(51, 65, 85, 140) : new Color(226, 232, 240));
            g2.setStroke(new BasicStroke(0.8f));
            g2.draw(devBadge);

            // Parlayan mavi/cyan aksan noktası
            g2.setColor(isDark ? new Color(56, 189, 248) : new Color(2, 132, 199));
            g2.fillOval(badgeX + 13, badgeY + 11, 6, 6);

            g2.setColor(isDark ? new Color(148, 163, 184) : new Color(100, 116, 139));
            g2.drawString(devText, badgeX + 25, badgeY + 18);

            g2.dispose();
        }

        private void drawTopControls(Graphics2D g2, int w) {
            // Dil Çipi (Sol Üst)
            drawChip(g2, 24, 20, "🌐", langMode == Strings.LanguageMode.SYSTEM);
            drawChip(g2, 62, 20, "🇹🇷", langMode == Strings.LanguageMode.TR);
            drawChip(g2, 100, 20, "🇬🇧", langMode == Strings.LanguageMode.EN);

            // Tema Çipi (Sağ Üst)
            drawChip(g2, w - 138, 20, "💻", false);
            drawChip(g2, w - 100, 20, "🌙", isDark);
            drawChip(g2, w - 62, 20, "☀️", !isDark);
        }

        private void drawChip(Graphics2D g2, int x, int y, String icon, boolean selected) {
            RoundRectangle2D r = new RoundRectangle2D.Float(x, y, 34, 22, 10, 10);
            if (selected) {
                g2.setColor(new Color(37, 99, 235));
                g2.fill(r);
            } else {
                g2.setColor(isDark ? new Color(30, 41, 59, 180) : Color.WHITE);
                g2.fill(r);
                g2.setColor(isDark ? new Color(51, 65, 85) : new Color(203, 213, 225));
                g2.setStroke(new BasicStroke(0.6f));
                g2.draw(r);
            }
            g2.setFont(new Font("SansSerif", Font.PLAIN, 11));
            g2.drawString(icon, x + 9, y + 15);
        }

        private void drawEmblem(Graphics2D g2, int cx, int cy, float radius) {
            // Düzgün Altıgen Kalkan
            Path2D hex = new Path2D.Float();
            for (int i = 0; i < 6; i++) {
                double rad = (60.0 * i - 30.0) * (Math.PI / 180.0);
                float x = cx + (float) (radius * Math.cos(rad));
                float y = cy + (float) (radius * Math.sin(rad));
                if (i == 0) hex.moveTo(x, y);
                else hex.lineTo(x, y);
            }
            hex.closePath();

            // Kalkan İçi
            g2.setColor(isDark ? new Color(20, 30, 48) : new Color(241, 245, 249));
            g2.fill(hex);

            // Kalkan Çerçevesi
            g2.setColor(new Color(37, 99, 235));
            g2.setStroke(new BasicStroke(2.0f));
            g2.draw(hex);

            // Konsantrik Radar Halkaları
            g2.setColor(new Color(56, 189, 248, isDark ? 30 : 45));
            g2.setStroke(new BasicStroke(1.0f));
            float ring1 = radius * 0.45f;
            float ring2 = radius * 0.75f;
            g2.draw(new Ellipse2D.Float(cx - ring1, cy - ring1, ring1 * 2, ring1 * 2));
            g2.draw(new Ellipse2D.Float(cx - ring2, cy - ring2, ring2 * 2, ring2 * 2));

            // Dönen Radar Işını
            Graphics2D gRadar = (Graphics2D) g2.create();
            gRadar.rotate(Math.toRadians(sweepAngle), cx, cy);
            gRadar.setColor(new Color(56, 189, 248, isDark ? 160 : 200));
            gRadar.setStroke(new BasicStroke(1.8f));
            gRadar.drawLine(cx, cy, cx, (int) (cy - radius * 0.85f));

            gRadar.setColor(new Color(2, 132, 199, isDark ? 45 : 35));
            gRadar.fill(new Arc2D.Float(cx - radius * 0.85f, cy - radius * 0.85f, radius * 1.7f, radius * 1.7f, 70, 40, Arc2D.PIE));
            gRadar.dispose();

            // Ultrasonik Ses Dalgası Yayılması (Sonar Wave)
            float maxWave = radius * 0.9f;
            float curWave = radius * 0.35f + (wavePulse * (maxWave - radius * 0.35f));
            int waveAlpha = (int) ((1.0f - wavePulse) * (isDark ? 110 : 130));
            if (waveAlpha > 0) {
                g2.setColor(new Color(56, 189, 248, waveAlpha));
                g2.setStroke(new BasicStroke(1.5f));
                g2.draw(new Arc2D.Float(cx - curWave, cy - curWave, curWave * 2, curWave * 2, 30, 120, Arc2D.OPEN));
            }

            // HC-SR04 PCB Gövdesi
            int pcbW = 68;
            int pcbH = 30;
            int pcbX = cx - pcbW / 2;
            int pcbY = cy - pcbH / 2 + 4;
            g2.setColor(new Color(3, 105, 161)); // Mavi PCB
            g2.fillRoundRect(pcbX, pcbY, pcbW, pcbH, 6, 6);
            g2.setColor(new Color(56, 189, 248, 120));
            g2.setStroke(new BasicStroke(1.0f));
            g2.drawRoundRect(pcbX, pcbY, pcbW, pcbH, 6, 6);

            // Çift Transdüser: Sol (T), Sağ (R)
            int barrelR = 10;
            int barrelY = cy + 4;
            int leftX = cx - 18;
            int rightX = cx + 18;

            int[] barrels = new int[]{leftX, rightX};
            for (int bx : barrels) {
                // Metalik Dış Çember
                g2.setColor(isDark ? new Color(203, 213, 225) : new Color(148, 163, 184));
                g2.fillOval(bx - barrelR, barrelY - barrelR, barrelR * 2, barrelR * 2);
                // İç Hazne
                g2.setColor(isDark ? new Color(30, 41, 59) : new Color(248, 250, 252));
                g2.fillOval(bx - barrelR + 2, barrelY - barrelR + 2, (barrelR - 2) * 2, (barrelR - 2) * 2);
                // Merkez Nokta
                g2.setColor(new Color(2, 132, 199));
                g2.fillOval(bx - 2, barrelY - 2, 4, 4);
            }

            // Merkez Osilatör (Kuvars Kristali)
            g2.setColor(new Color(148, 163, 184));
            g2.fillRoundRect(cx - 3, barrelY - 6, 6, 12, 3, 3);
        }
    }
}
