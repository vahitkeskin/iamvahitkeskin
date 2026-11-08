package com.engeldenkacan;

import com.engeldenkacan.data.SerialI2CBridge;
import com.engeldenkacan.presentation.view.MainForm;
import com.engeldenkacan.presentation.view.SplashScreenWindow;
import com.engeldenkacan.presentation.viewmodel.DashboardViewModel;

import javax.swing.*;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception ignored) {}

        SwingUtilities.invokeLater(() -> {
            SplashScreenWindow splash = new SplashScreenWindow(() -> {
                DashboardViewModel viewModel = new DashboardViewModel();
                MainForm form = new MainForm(viewModel);
                form.setVisible(true);

                String defaultPort = SerialI2CBridge.detectDefaultPort();
                if (new File(defaultPort).exists()) {
                    viewModel.connectHardware(defaultPort);
                }
            });
            splash.setVisible(true);
        });
    }
}
