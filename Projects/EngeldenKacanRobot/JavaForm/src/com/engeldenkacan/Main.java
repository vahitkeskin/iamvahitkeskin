package com.engeldenkacan;

import com.engeldenkacan.presentation.view.MainForm;
import com.engeldenkacan.presentation.viewmodel.DashboardViewModel;

import javax.swing.*;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        // Modern sistem temasını ayarla
        try {
            for (UIManager.LookAndFeelInfo info : UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (Exception ignored) {}

        SwingUtilities.invokeLater(() -> {
            DashboardViewModel viewModel = new DashboardViewModel();
            MainForm form = new MainForm(viewModel);
            form.setVisible(true);

            // Eğer USB Seri portu mevcutsa otomatik bağlan, aksi halde simülasyonu başlat
            String defaultPort = "/dev/cu.usbserial-1240";
            if (new File(defaultPort).exists()) {
                viewModel.connectHardware(defaultPort);
            } else {
                viewModel.connectSimulation();
            }
        });
    }
}
