package com.engeldenkacan.theme;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Locale;

public class ThemeDetector {
    public enum ThemeMode {
        SYSTEM, DARK, LIGHT
    }

    /**
     * Windows, macOS ve Linux üzerinde işletim sisteminin karanlık modda olup olmadığını tespit eder.
     */
    public static boolean isSystemInDarkMode() {
        String os = System.getProperty("os.name", "").toLowerCase(Locale.ENGLISH);

        try {
            if (os.contains("mac")) {
                // macOS kontrolü
                Process p = Runtime.getRuntime().exec(new String[]{"defaults", "read", "-g", "AppleInterfaceStyle"});
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()))) {
                    String line = reader.readLine();
                    return line != null && line.trim().equalsIgnoreCase("Dark");
                }
            } else if (os.contains("win")) {
                // Windows Kayıt Defteri kontrolü (AppsUseLightTheme == 0 -> Dark)
                Process p = Runtime.getRuntime().exec(new String[]{
                    "reg", "query", "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize",
                    "/v", "AppsUseLightTheme"
                });
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()))) {
                    String line;
                    while ((line = reader.readLine()) != null) {
                        if (line.contains("AppsUseLightTheme") && line.contains("0x0")) {
                            return true;
                        }
                    }
                }
            } else if (os.contains("linux")) {
                // Linux GNOME/GTK kontrolü
                Process p = Runtime.getRuntime().exec(new String[]{
                    "gsettings", "get", "org.gnome.desktop.interface", "color-scheme"
                });
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()))) {
                    String line = reader.readLine();
                    if (line != null && line.toLowerCase().contains("dark")) {
                        return true;
                    }
                }
            }
        } catch (Exception ignored) {}

        // Varsayılan karanlık tema
        return true;
    }
}
