package com.engeldenkacan.presentation.view;

import com.engeldenkacan.data.SerialI2CBridge;
import com.engeldenkacan.domain.model.RobotState;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.i18n.Strings;
import com.engeldenkacan.presentation.viewmodel.DashboardViewModel;
import com.engeldenkacan.theme.ThemeColors;
import com.engeldenkacan.theme.ThemeDetector;

import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MainForm extends JFrame {
    private final DashboardViewModel viewModel;
    private ThemeColors colors;

    private final RadarCanvas radarCanvas;
    private final ServoGaugeCanvas servoGaugeCanvas;
    private final MetricCard metricCard;

    private final JPanel topBar = new JPanel(new BorderLayout(10, 10));
    private final JPanel visualPanel = new JPanel(new GridLayout(1, 2, 12, 0));
    private final JPanel bottomPanel = new JPanel(new BorderLayout(10, 8));

    private final JLabel lblPort = new JLabel();
    private final JTextField txtPort = new JTextField(SerialI2CBridge.detectDefaultPort(), 14);
    private final JButton btnConnect = new JButton();
    private final JButton btnDisconnect = new JButton();
    private final JLabel lblBatteryBadge = new JLabel("🔋 %85", SwingConstants.CENTER);
    private final JLabel lblStatusBadge = new JLabel("", SwingConstants.CENTER);

    // Segmentli Tema Butonları
    private final JLabel lblTheme = new JLabel();
    private final JButton btnThemeSys = new JButton("💻 Sys");
    private final JButton btnThemeDark = new JButton("🌙 Dark");
    private final JButton btnThemeLight = new JButton("☀️ Light");

    // Segmentli Dil Butonları
    private final JLabel lblLang = new JLabel();
    private final JButton btnLangSys = new JButton("🌐 Sys");
    private final JButton btnLangTR = new JButton("🇹🇷 TR");
    private final JButton btnLangEN = new JButton("🇬🇧 EN");

    // 🎮 ROBOTA DOĞRUDAN MÜDAHALE KONTROL ELEMANLARI (DIRECT OVERRIDE)
    private final JPanel controlCard = new JPanel(new BorderLayout(10, 8));
    private final JLabel lblControlTitle = new JLabel();
    private final JButton btnEmergencyStop = new JButton();
    private final JButton btnModeAuto = new JButton();
    private final JButton btnModeManual = new JButton();
    private final JButton btnFwd = new JButton("▲ İLERİ");
    private final JButton btnRev = new JButton("▼ GERİ");
    private final JButton btnLeft = new JButton("◀ SOL");
    private final JButton btnRight = new JButton("SAĞ ▶");
    private final JButton btnStop = new JButton("■ DUR");
    private final JButton btnHorn = new JButton();
    private final JButton btnSimCharge = new JButton();

    private final JSlider speedSlider = new JSlider(80, 255, 180);
    private final JLabel lblSpeedVal = new JLabel("180 PWM");
    private final JSlider servoSlider = new JSlider(0, 180, 90);
    private final JLabel lblServoVal = new JLabel("90°");

    private final JTextArea logArea = new JTextArea(4, 60);
    private final JScrollPane scrollPane = new JScrollPane(logArea);
    private final SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss.SSS");

    public MainForm(DashboardViewModel viewModel) {
        this.viewModel = viewModel;
        ThemeColors initialColors = viewModel.getColors();
        this.colors = initialColors;

        this.radarCanvas = new RadarCanvas(initialColors);
        this.servoGaugeCanvas = new ServoGaugeCanvas(initialColors);
        this.metricCard = new MetricCard(initialColors);

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1040, 880);
        setMinimumSize(new Dimension(920, 760));
        setLocationRelativeTo(null);

        initUI();
        bindViewModel();
        applyThemeAndLanguage();
    }

    private void initUI() {
        setLayout(new BorderLayout(10, 8));

        // 1. ÜST KONTROL ÇUBUĞU
        JPanel leftControls = new JPanel(new FlowLayout(FlowLayout.LEFT, 8, 0));
        leftControls.setOpaque(false);

        styleButton(btnConnect, new Color(37, 99, 235), Color.WHITE);
        styleButton(btnDisconnect, new Color(71, 85, 105), Color.WHITE);
        btnDisconnect.setEnabled(false);

        leftControls.add(lblPort);
        leftControls.add(txtPort);
        leftControls.add(btnConnect);
        leftControls.add(btnDisconnect);

        // Sağ Kontroller: Tema, Dil, Batarya Rozeti ve Durum Rozeti
        JPanel rightControls = new JPanel(new FlowLayout(FlowLayout.RIGHT, 6, 0));
        rightControls.setOpaque(false);

        // Tema Grubu
        JPanel themeGroup = new JPanel(new FlowLayout(FlowLayout.LEFT, 2, 0));
        themeGroup.setOpaque(false);
        themeGroup.add(lblTheme);
        themeGroup.add(btnThemeSys);
        themeGroup.add(btnThemeDark);
        themeGroup.add(btnThemeLight);

        // Dil Grubu
        JPanel langGroup = new JPanel(new FlowLayout(FlowLayout.LEFT, 2, 0));
        langGroup.setOpaque(false);
        langGroup.add(lblLang);
        langGroup.add(btnLangSys);
        langGroup.add(btnLangTR);
        langGroup.add(btnLangEN);

        lblBatteryBadge.setOpaque(true);
        lblBatteryBadge.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblBatteryBadge.setBorder(new EmptyBorder(5, 10, 5, 10));

        lblStatusBadge.setOpaque(true);
        lblStatusBadge.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblStatusBadge.setBorder(new EmptyBorder(5, 12, 5, 12));

        rightControls.add(themeGroup);
        rightControls.add(Box.createHorizontalStrut(4));
        rightControls.add(langGroup);
        rightControls.add(Box.createHorizontalStrut(6));
        rightControls.add(lblBatteryBadge);
        rightControls.add(Box.createHorizontalStrut(4));
        rightControls.add(lblStatusBadge);

        topBar.add(leftControls, BorderLayout.WEST);
        topBar.add(rightControls, BorderLayout.EAST);
        topBar.setBorder(new EmptyBorder(8, 12, 6, 12));
        add(topBar, BorderLayout.NORTH);

        // 2. ORTA PANEL: RADAR & SERVO KADRANI
        visualPanel.setOpaque(false);
        visualPanel.setBorder(new EmptyBorder(0, 12, 0, 12));
        visualPanel.add(radarCanvas);
        visualPanel.add(servoGaugeCanvas);
        add(visualPanel, BorderLayout.CENTER);

        // 3. ALT BÖLÜM: ROBOTA DOĞRUDAN MÜDAHALE KUMANDASI + METRİK KARTI + LOG
        buildDirectControlPanel();

        JPanel southContainer = new JPanel();
        southContainer.setLayout(new BoxLayout(southContainer, BoxLayout.Y_AXIS));
        southContainer.setOpaque(false);
        southContainer.setBorder(new EmptyBorder(6, 12, 10, 12));

        controlCard.setAlignmentX(Component.CENTER_ALIGNMENT);
        metricCard.setAlignmentX(Component.CENTER_ALIGNMENT);
        scrollPane.setAlignmentX(Component.CENTER_ALIGNMENT);

        southContainer.add(controlCard);
        southContainer.add(Box.createVerticalStrut(6));
        southContainer.add(metricCard);
        southContainer.add(Box.createVerticalStrut(6));

        logArea.setEditable(false);
        logArea.setFont(new Font("Monospaced", Font.PLAIN, 11));
        scrollPane.setPreferredSize(new Dimension(800, 100));
        southContainer.add(scrollPane);

        add(southContainer, BorderLayout.SOUTH);

        // Dinleyiciler
        btnConnect.addActionListener(e -> viewModel.connectHardware(txtPort.getText().trim()));
        btnDisconnect.addActionListener(e -> viewModel.disconnect());

        btnThemeSys.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.SYSTEM));
        btnThemeDark.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.DARK));
        btnThemeLight.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.LIGHT));

        btnLangSys.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.SYSTEM));
        btnLangTR.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.TR));
        btnLangEN.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.EN));
    }

    private void buildDirectControlPanel() {
        controlCard.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(59, 130, 246, 120), 1),
            BorderFactory.createEmptyBorder(8, 12, 8, 12)
        ));

        // Başlık Satırı: Başlık, Mod Seçici ve Acil Fren
        JPanel headerRow = new JPanel(new BorderLayout(8, 0));
        headerRow.setOpaque(false);

        lblControlTitle.setFont(new Font("SansSerif", Font.BOLD, 12));
        headerRow.add(lblControlTitle, BorderLayout.WEST);

        JPanel modeAndBrake = new JPanel(new FlowLayout(FlowLayout.RIGHT, 6, 0));
        modeAndBrake.setOpaque(false);

        styleButton(btnModeAuto, new Color(16, 185, 129), Color.WHITE);
        btnModeAuto.setFont(new Font("SansSerif", Font.BOLD, 10));
        styleButton(btnModeManual, new Color(59, 130, 246), Color.WHITE);
        btnModeManual.setFont(new Font("SansSerif", Font.BOLD, 10));

        styleButton(btnEmergencyStop, new Color(220, 38, 38), Color.WHITE);
        btnEmergencyStop.setFont(new Font("SansSerif", Font.BOLD, 11));

        styleButton(btnHorn, new Color(139, 92, 246), Color.WHITE);
        btnHorn.setFont(new Font("SansSerif", Font.BOLD, 10));

        styleButton(btnSimCharge, new Color(16, 185, 129), Color.WHITE);
        btnSimCharge.setFont(new Font("SansSerif", Font.BOLD, 10));

        modeAndBrake.add(btnModeAuto);
        modeAndBrake.add(btnModeManual);
        modeAndBrake.add(btnSimCharge);
        modeAndBrake.add(btnHorn);
        modeAndBrake.add(btnEmergencyStop);
        headerRow.add(modeAndBrake, BorderLayout.EAST);

        // Kumanda D-Pad ve Slider Satırı
        JPanel controlsRow = new JPanel(new GridLayout(1, 3, 16, 0));
        controlsRow.setOpaque(false);

        // 1. D-Pad Yön Tuşları
        JPanel dpadPanel = new JPanel(new BorderLayout(4, 4));
        dpadPanel.setOpaque(false);

        styleDirButton(btnFwd, new Color(16, 185, 129));
        styleDirButton(btnRev, new Color(245, 158, 11));
        styleDirButton(btnLeft, new Color(59, 130, 246));
        styleDirButton(btnRight, new Color(59, 130, 246));
        styleDirButton(btnStop, new Color(239, 68, 68));

        JPanel centerDir = new JPanel(new GridLayout(1, 3, 4, 0));
        centerDir.setOpaque(false);
        centerDir.add(btnLeft);
        centerDir.add(btnStop);
        centerDir.add(btnRight);

        dpadPanel.add(btnFwd, BorderLayout.NORTH);
        dpadPanel.add(centerDir, BorderLayout.CENTER);
        dpadPanel.add(btnRev, BorderLayout.SOUTH);
        controlsRow.add(dpadPanel);

        // 2. Motor Hız Slider
        JPanel speedPanel = new JPanel();
        speedPanel.setLayout(new BoxLayout(speedPanel, BoxLayout.Y_AXIS));
        speedPanel.setOpaque(false);
        JLabel lblSpeed = new JLabel("⚡ " + Strings.speedLabel());
        lblSpeed.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblSpeedVal.setFont(new Font("Monospaced", Font.BOLD, 11));
        speedSlider.setOpaque(false);

        speedPanel.add(lblSpeed);
        speedPanel.add(lblSpeedVal);
        speedPanel.add(speedSlider);
        controlsRow.add(speedPanel);

        // 3. Servo Açı Slider
        JPanel servoPanel = new JPanel();
        servoPanel.setLayout(new BoxLayout(servoPanel, BoxLayout.Y_AXIS));
        servoPanel.setOpaque(false);
        JLabel lblServo = new JLabel("📡 " + Strings.servoTitle());
        lblServo.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblServoVal.setFont(new Font("Monospaced", Font.BOLD, 11));
        servoSlider.setOpaque(false);

        servoPanel.add(lblServo);
        servoPanel.add(lblServoVal);
        servoPanel.add(servoSlider);
        controlsRow.add(servoPanel);

        controlCard.add(headerRow, BorderLayout.NORTH);
        controlCard.add(controlsRow, BorderLayout.CENTER);

        // Aksiyon Dinleyicileri
        btnModeAuto.addActionListener(e -> viewModel.startAutonomous());
        btnModeManual.addActionListener(e -> viewModel.setManualMode(true));
        btnEmergencyStop.addActionListener(e -> viewModel.emergencyStop());
        btnHorn.addActionListener(e -> viewModel.triggerHorn());
        btnSimCharge.addActionListener(e -> viewModel.toggleChargingSimulation());

        attachDriveMouseListener(btnFwd, "FORWARD");
        attachDriveMouseListener(btnRev, "BACKWARD");
        attachDriveMouseListener(btnLeft, "LEFT");
        attachDriveMouseListener(btnRight, "RIGHT");
        btnStop.addActionListener(e -> viewModel.sendCommand("STOP"));

        speedSlider.addChangeListener(e -> {
            lblSpeedVal.setText(speedSlider.getValue() + " PWM");
        });

        servoSlider.addChangeListener(e -> {
            lblServoVal.setText(servoSlider.getValue() + "°");
            viewModel.sendCommand("SERVO:" + servoSlider.getValue());
        });
    }

    private void attachDriveMouseListener(JButton btn, String command) {
        btn.addMouseListener(new MouseAdapter() {
            @Override
            public void mousePressed(MouseEvent e) {
                viewModel.sendCommand("DRIVE:" + command + ":" + speedSlider.getValue());
            }

            @Override
            public void mouseReleased(MouseEvent e) {
                viewModel.sendCommand("STOP");
            }
        });
    }

    private void styleDirButton(JButton btn, Color bg) {
        btn.setBackground(bg);
        btn.setForeground(Color.WHITE);
        btn.setFocusPainted(false);
        btn.setFont(new Font("SansSerif", Font.BOLD, 11));
        btn.setBorder(new EmptyBorder(4, 6, 4, 6));
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
    }

    private void styleButton(JButton btn, Color bg, Color fg) {
        btn.setBackground(bg);
        btn.setForeground(fg);
        btn.setFocusPainted(false);
        btn.setFont(new Font("SansSerif", Font.BOLD, 11));
        btn.setBorder(new EmptyBorder(5, 10, 5, 10));
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
    }

    private void stylePill(JButton btn, boolean isSelected, ThemeColors colors) {
        btn.setFocusPainted(false);
        btn.setFont(new Font("SansSerif", Font.BOLD, 10));
        btn.setBorder(new EmptyBorder(4, 8, 4, 8));
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));

        if (isSelected) {
            btn.setBackground(new Color(37, 99, 235));
            btn.setForeground(Color.WHITE);
        } else {
            btn.setBackground(colors.bgCard);
            btn.setForeground(colors.textMuted);
        }
    }

    private void bindViewModel() {
        viewModel.addTelemetryObserver(this::onTelemetryUpdated);
        viewModel.addLogObserver(this::onLogReceived);
        viewModel.addConnectionObserver(this::onConnectionChanged);
        viewModel.addUiThemeObserver(this::applyThemeAndLanguage);
    }

    private void applyThemeAndLanguage() {
        this.colors = viewModel.getColors();
        ThemeColors colors = this.colors;

        setTitle(Strings.appTitle());
        getContentPane().setBackground(colors.bgPrimary);
        topBar.setBackground(colors.bgSecondary);

        lblPort.setText(Strings.portLabel());
        lblPort.setForeground(colors.textSecondary);
        btnConnect.setText(Strings.btnConnect());
        btnDisconnect.setText(Strings.btnDisconnect());

        lblTheme.setText(Strings.themeLabel());
        lblTheme.setForeground(colors.textMuted);
        lblLang.setText(Strings.langLabel());
        lblLang.setForeground(colors.textMuted);

        // Tema Butonları
        ThemeDetector.ThemeMode currentTheme = viewModel.getCurrentTheme();
        stylePill(btnThemeSys, currentTheme == ThemeDetector.ThemeMode.SYSTEM, colors);
        stylePill(btnThemeDark, currentTheme == ThemeDetector.ThemeMode.DARK, colors);
        stylePill(btnThemeLight, currentTheme == ThemeDetector.ThemeMode.LIGHT, colors);

        // Dil Butonları
        Strings.LanguageMode currentLang = viewModel.getCurrentLanguage();
        stylePill(btnLangSys, currentLang == Strings.LanguageMode.SYSTEM, colors);
        stylePill(btnLangTR, currentLang == Strings.LanguageMode.TR, colors);
        stylePill(btnLangEN, currentLang == Strings.LanguageMode.EN, colors);

        txtPort.setBackground(colors.bgPrimary);
        txtPort.setForeground(colors.textPrimary);
        txtPort.setCaretColor(colors.textPrimary);
        txtPort.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(colors.border),
            BorderFactory.createEmptyBorder(4, 6, 4, 6)
        ));

        radarCanvas.applyTheme(colors);
        radarCanvas.setBorder(BorderFactory.createLineBorder(colors.border, 1));

        servoGaugeCanvas.applyTheme(colors);
        servoGaugeCanvas.setBorder(BorderFactory.createLineBorder(colors.border, 1));

        metricCard.applyTheme(colors);
        metricCard.applyLanguage();

        // Kumanda Kartı Tema & Dil
        controlCard.setBackground(colors.bgCard);
        lblControlTitle.setText("🎮 " + Strings.directControlTitle());
        lblControlTitle.setForeground(colors.textPrimary);
        btnEmergencyStop.setText(Strings.btnEmergencyStop());
        btnModeAuto.setText(Strings.modeAuto());
        btnModeManual.setText(Strings.modeManual());
        btnHorn.setText(Strings.btnHorn());
        btnSimCharge.setText(Strings.btnSimulateCharge());

        logArea.setBackground(colors.logBg);
        logArea.setForeground(colors.logText);
        scrollPane.setBorder(BorderFactory.createTitledBorder(
            BorderFactory.createLineBorder(colors.border),
            Strings.logTitle(),
            0, 0, new Font("SansSerif", Font.BOLD, 11), colors.textMuted
        ));

        onTelemetryUpdated(viewModel.getLastTelemetry());
        repaint();
    }

    private void onTelemetryUpdated(RobotTelemetry telemetry) {
        radarCanvas.updateTelemetry(telemetry);
        servoGaugeCanvas.updateTelemetry(telemetry);
        metricCard.updateTelemetry(telemetry);

        if (!telemetry.hasSignal()) {
            lblStatusBadge.setText(Strings.statusDisconnected());
            lblStatusBadge.setBackground(RobotState.DISCONNECTED.getBadgeColor());
            lblBatteryBadge.setText("🔋 --%");
            lblBatteryBadge.setBackground(colors.bgCard);
            lblBatteryBadge.setForeground(colors.textMuted);
        } else {
            RobotState state = telemetry.getState();
            String name = switch (state) {
                case CRUISING -> Strings.statusCruising();
                case AVOIDING -> Strings.statusAvoiding();
                case MANUAL_OVERRIDE -> Strings.statusManualOverride();
                case STOPPED -> Strings.statusStopped();
                default -> Strings.statusDisconnected();
            };
            lblStatusBadge.setText(name);
            lblStatusBadge.setBackground(state.getBadgeColor());

            // Batarya Rozeti
            int bat = telemetry.getBatteryPercentage();
            boolean chg = telemetry.isCharging();
            lblBatteryBadge.setText((chg ? "⚡ %" : "🔋 %") + bat);
            if (chg) {
                lblBatteryBadge.setBackground(new Color(16, 185, 129));
                lblBatteryBadge.setForeground(Color.WHITE);
            } else if (bat <= 15) {
                lblBatteryBadge.setBackground(new Color(239, 68, 68));
                lblBatteryBadge.setForeground(Color.WHITE);
            } else {
                lblBatteryBadge.setBackground(new Color(59, 130, 246));
                lblBatteryBadge.setForeground(Color.WHITE);
            }
        }
    }

    private void onLogReceived(String message) {
        String time = timeFormat.format(new Date());
        logArea.append(String.format("[%s] %s\n", time, message));
        logArea.setCaretPosition(logArea.getDocument().getLength());
    }

    private void onConnectionChanged(boolean connected) {
        btnConnect.setEnabled(!connected);
        btnDisconnect.setEnabled(connected);
        txtPort.setEnabled(!connected);
    }
}
