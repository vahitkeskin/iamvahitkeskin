package com.engeldenkacan.util;

import java.awt.Image;
import java.awt.Taskbar;
import java.awt.Window;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import javax.swing.ImageIcon;

/**
 * 🛡️ Otonom Engelden Kaçan Robot - Cross-Platform App Icon Yöneticisi
 * macOS (Dock & Pencere), Windows (Görev Çubuğu & Başlık) ve Linux (Alt-Tab & Başlık)
 * için çoklu çözünürlüklü (16px..512px) vektörel kalitede ikon seti sağlar.
 */
public final class AppIconHelper {

    private static List<Image> cachedIcons = null;

    private AppIconHelper() {}

    public static synchronized List<Image> getAppIcons() {
        if (cachedIcons != null && !cachedIcons.isEmpty()) {
            return cachedIcons;
        }

        List<Image> list = new ArrayList<>();
        int[] sizes = {16, 32, 48, 64, 128, 256, 512};
        for (int sz : sizes) {
            String resPath = "/resources/icons/app_icon_" + sz + ".png";
            URL url = AppIconHelper.class.getResource(resPath);
            if (url != null) {
                list.add(new ImageIcon(url).getImage());
            }
        }

        // Fallback ana ikon
        if (list.isEmpty()) {
            URL mainUrl = AppIconHelper.class.getResource("/resources/icons/app_icon.png");
            if (mainUrl != null) {
                list.add(new ImageIcon(mainUrl).getImage());
            }
        }

        cachedIcons = list;
        return list;
    }

    /**
     * Pencereye ve işletim sistemi kabuğuna (macOS Dock, Windows Taskbar, Linux X11/Wayland)
     * en uygun çözünürlükteki ikonları otomatik bağlar.
     */
    public static void apply(Window window) {
        if (window == null) return;

        List<Image> icons = getAppIcons();
        if (!icons.isEmpty()) {
            try {
                window.setIconImages(icons);
            } catch (Throwable ignored) {}

            // macOS Dock İkon Desteği (Java 9+ Taskbar API)
            try {
                if (Taskbar.isTaskbarSupported()) {
                    Taskbar taskbar = Taskbar.getTaskbar();
                    if (taskbar.isSupported(Taskbar.Feature.ICON_IMAGE)) {
                        // En yüksek çözünürlüklü ikonu Dock için ayarla
                        Image bestIcon = icons.get(icons.size() - 1);
                        taskbar.setIconImage(bestIcon);
                    }
                }
            } catch (Throwable ignored) {
                // Eski macOS Apple EAWT API Fallback
                try {
                    Class<?> appClass = Class.forName("com.apple.eawt.Application");
                    Object app = appClass.getMethod("getApplication").invoke(null);
                    Image bestIcon = icons.get(icons.size() - 1);
                    appClass.getMethod("setDockIconImage", Image.class).invoke(app, bestIcon);
                } catch (Throwable ignored2) {}
            }
        }
    }
}

