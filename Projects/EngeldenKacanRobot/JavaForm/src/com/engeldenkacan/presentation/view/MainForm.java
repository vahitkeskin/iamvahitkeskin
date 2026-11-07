package com.engeldenkacan.presentation.view;

import com.engeldenkacan.domain.model.RobotState;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.presentation.viewmodel.DashboardViewModel;

import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MainForm extends JFrame {
    private final DashboardViewModel viewModel;

    private final RadarCanvas radarCanvas = new RadarCanvas();
    private final ServoGaugeCanvas servoGaugeCanvas = new ServoGaugeCanvas();
    private final MetricCard metricCard = new MetricCard();

    private final JTextField txtPort = new JTextField("/dev/cu.usbserial-1240", 18);
    private final JButton btnConnect = new JButton("Bağlan (Donanım/I2C)");
    private final JButton btnSimulate = new JButton("Simülasyon Modu");
    private final JButton btnDisconnect = new JButton("Bağlantıyı Kes");
    private final JLabel lblStatusBadge = new JLabel("BAĞLANTI YOK", SwingConstants.CENTER);

    private final JTextArea logArea = new JTextArea(6, 60);
    private final SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss.SSS");

    public MainForm(DashboardViewModel viewModel) {
        this.viewModel = viewModel;

        setTitle("Engelden Kaçan Robot - I2C & Otonom Telemetri Kontrol Formu");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(960, 780);
        setMinimumSize(new Dimension(850, 680));
        setLocationRelativeTo(null);
        getContentPane().setBackground(new Color(15, 23, 42));

        initUI();
        bindViewModel();
    }

    private void initUI() {
        setLayout(new BorderLayout(10, 10));

        // 1. ÜST ARAÇ ÇUBUĞU (Toolbar)
        JPanel topBar = new JPanel(new BorderLayout(10, 10));
        topBar.setBackground(new Color(30, 41, 59));
        topBar.setBorder(new EmptyBorder(12, 16, 12, 16));

        JPanel leftControls = new JPanel(new FlowLayout(FlowLayout.LEFT, 8, 0));
        leftControls.setOpaque(false);

        JLabel lblPort = new JLabel("Port / I2C:");
        lblPort.setForeground(new Color(203, 213, 225));
        lblPort.setFont(new Font("SansSerif", Font.BOLD, 12));

        styleButton(btnConnect, new Color(37, 99, 235), Color.WHITE);
        styleButton(btnSimulate, new Color(79, 70, 229), Color.WHITE);
        styleButton(btnDisconnect, new Color(71, 85, 105), Color.WHITE);
        btnDisconnect.setEnabled(false);

        txtPort.setBackground(new Color(15, 23, 42));
        txtPort.setForeground(Color.WHITE);
        txtPort.setCaretColor(Color.WHITE);
        txtPort.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(71, 85, 105)),
            BorderFactory.createEmptyBorder(4, 6, 4, 6)
        ));

        leftControls.add(lblPort);
        leftControls.add(txtPort);
        leftControls.add(btnConnect);
        leftControls.add(btnSimulate);
        leftControls.add(btnDisconnect);

        // Durum Rozeti (Badge)
        lblStatusBadge.setOpaque(true);
        lblStatusBadge.setBackground(new Color(71, 85, 105));
        lblStatusBadge.setForeground(Color.WHITE);
        lblStatusBadge.setFont(new Font("SansSerif", Font.BOLD, 12));
        lblStatusBadge.setBorder(new EmptyBorder(6, 14, 6, 14));

        topBar.add(leftControls, BorderLayout.WEST);
        topBar.add(lblStatusBadge, BorderLayout.EAST);
        add(topBar, BorderLayout.NORTH);

        // 2. ORTA PANEL (Radar ve Servo Göstergesi Yan Yana)
        JPanel visualPanel = new JPanel(new GridLayout(1, 2, 12, 0));
        visualPanel.setOpaque(false);
        visualPanel.setBorder(new EmptyBorder(0, 16, 0, 16));

        radarCanvas.setBorder(BorderFactory.createLineBorder(new Color(51, 65, 85), 1));
        servoGaugeCanvas.setBorder(BorderFactory.createLineBorder(new Color(51, 65, 85), 1));

        visualPanel.add(radarCanvas);
        visualPanel.add(servoGaugeCanvas);
        add(visualPanel, BorderLayout.CENTER);

        // 3. ALT PANEL (Mesafe Kartı ve Canlı Telemetri Günlüğü)
        JPanel bottomPanel = new JPanel(new BorderLayout(10, 10));
        bottomPanel.setOpaque(false);
        bottomPanel.setBorder(new EmptyBorder(10, 16, 16, 16));

        bottomPanel.add(metricCard, BorderLayout.NORTH);

        // Log Alanı
        logArea.setEditable(false);
        logArea.setBackground(new Color(3, 7, 18));
        logArea.setForeground(new Color(110, 231, 183));
        logArea.setFont(new Font("Monospaced", Font.PLAIN, 11));
        JScrollPane scrollPane = new JScrollPane(logArea);
        scrollPane.setBorder(BorderFactory.createTitledBorder(
            BorderFactory.createLineBorder(new Color(51, 65, 85)),
            "Canlı I2C & Seri Port Telemetri Günlüğü",
            0, 0, new Font("SansSerif", Font.BOLD, 11), new Color(148, 163, 184)
        ));
        scrollPane.setPreferredSize(new Dimension(800, 130));
        bottomPanel.add(scrollPane, BorderLayout.CENTER);

        add(bottomPanel, BorderLayout.SOUTH);

        // Buton Eylemleri
        btnConnect.addActionListener(e -> viewModel.connectHardware(txtPort.getText().trim()));
        btnSimulate.addActionListener(e -> viewModel.connectSimulation());
        btnDisconnect.addActionListener(e -> viewModel.disconnect());
    }

    private void styleButton(JButton btn, Color bg, Color fg) {
        btn.setBackground(bg);
        btn.setForeground(fg);
        btn.setFocusPainted(false);
        btn.setFont(new Font("SansSerif", Font.BOLD, 12));
        btn.setBorder(new EmptyBorder(6, 12, 6, 12));
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
    }

    private void bindViewModel() {
        viewModel.addTelemetryObserver(this::onTelemetryUpdated);
        viewModel.addLogObserver(this::onLogReceived);
        viewModel.addConnectionObserver(this::onConnectionChanged);
    }

    private void onTelemetryUpdated(RobotTelemetry telemetry) {
        radarCanvas.updateTelemetry(telemetry);
        servoGaugeCanvas.updateTelemetry(telemetry);
        metricCard.updateTelemetry(telemetry);

        RobotState state = telemetry.getState();
        lblStatusBadge.setText(state.getDisplayName());
        lblStatusBadge.setBackground(state.getBadgeColor());
    }

    private void onLogReceived(String message) {
        String time = timeFormat.format(new Date());
        logArea.append(String.format("[%s] %s\n", time, message));
        logArea.setCaretPosition(logArea.getDocument().getLength());
    }

    private void onConnectionChanged(boolean connected) {
        btnConnect.setEnabled(!connected);
        btnSimulate.setEnabled(!connected);
        btnDisconnect.setEnabled(connected);
        txtPort.setEnabled(!connected);
    }
}
