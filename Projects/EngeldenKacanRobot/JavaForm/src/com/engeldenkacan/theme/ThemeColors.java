package com.engeldenkacan.theme;

import java.awt.Color;

public class ThemeColors {
    public final Color bgPrimary;
    public final Color bgSecondary;
    public final Color bgCard;
    public final Color border;
    public final Color textPrimary;
    public final Color textSecondary;
    public final Color textMuted;
    public final Color radarBg;
    public final Color radarGrid;
    public final Color logBg;
    public final Color logText;

    private ThemeColors(boolean dark) {
        if (dark) {
            bgPrimary = new Color(15, 23, 42);      // Slate 900
            bgSecondary = new Color(30, 41, 59);    // Slate 800
            bgCard = new Color(30, 41, 59);
            border = new Color(51, 65, 85);         // Slate 700
            textPrimary = new Color(248, 250, 252); // Slate 50
            textSecondary = new Color(203, 213, 225);// Slate 300
            textMuted = new Color(148, 163, 184);   // Slate 400
            radarBg = new Color(30, 41, 59);
            radarGrid = new Color(51, 65, 85);
            logBg = new Color(3, 7, 18);
            logText = new Color(110, 231, 183);     // Emerald 300
        } else {
            bgPrimary = new Color(241, 245, 249);   // Slate 100
            bgSecondary = new Color(255, 255, 255); // Beyaz
            bgCard = new Color(255, 255, 255);
            border = new Color(203, 213, 225);      // Slate 300
            textPrimary = new Color(15, 23, 42);    // Slate 900
            textSecondary = new Color(51, 65, 85);  // Slate 700
            textMuted = new Color(100, 116, 139);   // Slate 500
            radarBg = new Color(226, 232, 240);     // Slate 200
            radarGrid = new Color(148, 163, 184);   // Slate 400
            logBg = new Color(248, 250, 252);
            logText = new Color(5, 150, 105);       // Emerald 600
        }
    }

    public static ThemeColors get(ThemeDetector.ThemeMode mode) {
        boolean isDark;
        if (mode == ThemeDetector.ThemeMode.SYSTEM) {
            isDark = ThemeDetector.isSystemInDarkMode();
        } else {
            isDark = (mode == ThemeDetector.ThemeMode.DARK);
        }
        return new ThemeColors(isDark);
    }
}
