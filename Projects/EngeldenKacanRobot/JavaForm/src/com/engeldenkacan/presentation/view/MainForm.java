package com.engeldenkacan.presentation.view;

import com.engeldenkacan.data.SerialI2CBridge;
import com.engeldenkacan.domain.model.RobotState;
import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.i18n.Strings;
import com.engeldenkacan.presentation.viewmodel.DashboardViewModel;
import com.engeldenkacan.theme.ThemeColors;
import com.engeldenkacan.theme.ThemeDetector;
import com.engeldenkacan.util.AppIconHelper;

import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 🖥️ MainForm (JavaForm Swing Desktop Container)
 * 4 Sekmeli Çoklu Ekran Mimarisi:
 * - Sekme 1: 📊 Telemetri (Radar, Servo Kadranı, HC-SR04 Metrikleri, Canlı Log)
 * - Sekme 2: 🎮 Kumanda (D-Pad, Servo Açısı, PWM Hız Slider, Vitesler, Korna, Acil Fren)
 * - Sekme 3: 🤖 Robot 3D (İnteraktif 3D Dijital İkiz, A3 Yeşil Kesme Matı, 7 Kamera Açısı)
 * - Sekme 4: ⚙️ Ayarlar (Görünüm & Tema, Dil Seçimi, Donanım & Sistem Bilgileri)
 */
public class MainForm extends JFrame {
    private final DashboardViewModel viewModel;
    private ThemeColors colors;

    // 4 Ana Ekran İçerik Kartı
    private final CardLayout cardLayout = new CardLayout();
    private final JPanel mainCardPanel = new JPanel(cardLayout);

    // Sekme Butonları
    private final JButton btnTabTelemetry = new JButton();
    private final JButton btnTabController = new JButton();
    private final JButton btnTab3D = new JButton();
    private final JButton btnTabSettings = new JButton();
    private int selectedTab = 0;

    // 1. TELEMETRİ EKRANI BİLEŞENLERİ
    private final RadarCanvas radarCanvas;
    private final ServoGaugeCanvas servoGaugeCanvas;
    private final MetricCard metricCard;
    private final JTextArea logArea = new JTextArea(4, 60);
    private final JScrollPane scrollPane = new JScrollPane(logArea);

    // 2. KUMANDA EKRANI BİLEŞENLERİ
    private final JPanel controlCard = new JPanel(new BorderLayout(10, 8));
    private final JLabel lblControlTitle = new JLabel();
    private final JButton btnEmergencyStop = new JButton();
    private final JButton btnModeAuto = new JButton();
    private final JButton btnModeManual = new JButton();
    private final JButton btnFwd = new JButton("▲");
    private final JButton btnRev = new JButton("▼");
    private final JButton btnLeft = new JButton("◀");
    private final JButton btnRight = new JButton("▶");
    private final JButton btnStop = new JButton("■");
    private final JButton btnHorn = new JButton();
    private final JButton btnSimCharge = new JButton();
    private final JSlider speedSlider = new JSlider(80, 255, 180);
    private final JLabel lblSpeedVal = new JLabel("180 PWM");
    private final JSlider servoSlider = new JSlider(0, 180, 90);
    private final JLabel lblServoVal = new JLabel("90°");

    // 3. ROBOT 3D EKRANI BİLEŞENLERİ
    private final Robot3DCanvas robot3DCanvas;
    private final JButton btnCamStandard = new JButton("🎯 Standart");
    private final JButton btnCamTop = new JButton("🔝 Kuşbakışı");
    private final JButton btnCamBottom = new JButton("🔽 Alttan");
    private final JButton btnCamFront = new JButton("🚘 Ön");
    private final JButton btnCamRear = new JButton("🚗 Arka");
    private final JButton btnCamRight = new JButton("➡️ Sağ");
    private final JButton btnCamLeft = new JButton("⬅️ Sol");

    // 4. AYARLAR EKRANI BİLEŞENLERİ
    private final JPanel settingsPanel = new JPanel();
    private final JButton btnThemeSys = new JButton("💻 Sistem");
    private final JButton btnThemeDark = new JButton("🌙 Koyu");
    private final JButton btnThemeLight = new JButton("☀️ Açık");
    private final JButton btnLangSys = new JButton("🌐 Sistem");
    private final JButton btnLangTR = new JButton("🇹🇷 Türkçe");
    private final JButton btnLangEN = new JButton("🇬🇧 English");

    // Üst Bar Kontrolleri
    private final JPanel topBar = new JPanel(new BorderLayout(10, 10));
    private final JLabel lblPort = new JLabel();
    private final JTextField txtPort = new JTextField(SerialI2CBridge.detectDefaultPort(), 11);
    private final JButton btnConnect = new JButton();
    private final JButton btnDisconnect = new JButton();
    private final JLabel lblBatteryBadge = new JLabel("🔋 %85", SwingConstants.CENTER);
    private final JLabel lblStatusBadge = new JLabel("", SwingConstants.CENTER);

    private final SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss.SSS");

    public MainForm(DashboardViewModel viewModel) {
        this.viewModel = viewModel;
        ThemeColors initialColors = viewModel.getColors();
        this.colors = initialColors;

        this.radarCanvas = new RadarCanvas(initialColors);
        this.servoGaugeCanvas = new ServoGaugeCanvas(initialColors);
        this.metricCard = new MetricCard(initialColors);
        this.robot3DCanvas = new Robot3DCanvas(initialColors);

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1040, 880);
        setMinimumSize(new Dimension(920, 760));
        setLocationRelativeTo(null);
        AppIconHelper.apply(this);

        initUI();
        bindViewModel();
        applyThemeAndLanguage();
    }

    private void initUI() {
        setLayout(new BorderLayout(0, 0));

        // ==========================================
        // 1. ÜST GEZİNME VE BAĞLANTI ÇUBUĞU (NAV & HEADER)
        // ==========================================
        JPanel leftControls = new JPanel(new FlowLayout(FlowLayout.LEFT, 6, 0));
        leftControls.setOpaque(false);
        styleButton(btnConnect, new Color(37, 99, 235), Color.WHITE);
        styleButton(btnDisconnect, new Color(71, 85, 105), Color.WHITE);
        btnDisconnect.setEnabled(false);

        leftControls.add(lblPort);
        leftControls.add(txtPort);
        leftControls.add(btnConnect);
        leftControls.add(btnDisconnect);

        // Orta: 4 Sekmeli Segmentli Navigasyon Butonları
        JPanel centerTabs = new JPanel(new FlowLayout(FlowLayout.CENTER, 4, 0));
        centerTabs.setOpaque(false);
        centerTabs.add(btnTabTelemetry);
        centerTabs.add(btnTabController);
        centerTabs.add(btnTab3D);
        centerTabs.add(btnTabSettings);

        // Sağ: Batarya & Durum Rozetleri
        JPanel rightControls = new JPanel(new FlowLayout(FlowLayout.RIGHT, 6, 0));
        rightControls.setOpaque(false);
        lblBatteryBadge.setOpaque(true);
        lblBatteryBadge.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblBatteryBadge.setBorder(new EmptyBorder(5, 10, 5, 10));

        lblStatusBadge.setOpaque(true);
        lblStatusBadge.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblStatusBadge.setBorder(new EmptyBorder(5, 12, 5, 12));

        rightControls.add(lblBatteryBadge);
        rightControls.add(lblStatusBadge);

        topBar.add(leftControls, BorderLayout.WEST);
        topBar.add(centerTabs, BorderLayout.CENTER);
        topBar.add(rightControls, BorderLayout.EAST);
        topBar.setBorder(new EmptyBorder(8, 12, 8, 12));
        add(topBar, BorderLayout.NORTH);

        // ==========================================
        // 2. DÖRT ANA EKRAN KARTININ OLUŞTURULMASI
        // ==========================================
        mainCardPanel.setOpaque(false);
        mainCardPanel.add(buildTelemetryScreen(), "TAB_0");
        mainCardPanel.add(buildControllerScreen(), "TAB_1");
        mainCardPanel.add(buildRobot3DScreen(), "TAB_2");
        mainCardPanel.add(buildSettingsScreen(), "TAB_3");
        add(mainCardPanel, BorderLayout.CENTER);

        // Sekme Değiştirme Dinleyicileri
        btnTabTelemetry.addActionListener(e -> switchTab(0));
        btnTabController.addActionListener(e -> switchTab(1));
        btnTab3D.addActionListener(e -> switchTab(2));
        btnTabSettings.addActionListener(e -> switchTab(3));

        // Bağlantı Dinleyicileri
        btnConnect.addActionListener(e -> viewModel.connectHardware(txtPort.getText().trim()));
        btnDisconnect.addActionListener(e -> viewModel.disconnect());
    }

    private void switchTab(int tabIndex) {
        selectedTab = tabIndex;
        cardLayout.show(mainCardPanel, "TAB_" + tabIndex);
        updateNavPillStyles();
    }

    private void updateNavPillStyles() {
        stylePill(btnTabTelemetry, selectedTab == 0, colors);
        stylePill(btnTabController, selectedTab == 1, colors);
        stylePill(btnTab3D, selectedTab == 2, colors);
        stylePill(btnTabSettings, selectedTab == 3, colors);
    }

    // ==========================================
    // EKRAN 1: TELEMETRİ EKRANI (RADAR, SERVO, LOG)
    // ==========================================
    private JPanel buildTelemetryScreen() {
        JPanel panel = new JPanel(new BorderLayout(10, 8));
        panel.setOpaque(false);
        panel.setBorder(new EmptyBorder(8, 12, 8, 12));

        JPanel visualPanel = new JPanel(new GridLayout(1, 2, 12, 0));
        visualPanel.setOpaque(false);
        visualPanel.add(radarCanvas);
        visualPanel.add(servoGaugeCanvas);
        panel.add(visualPanel, BorderLayout.CENTER);

        JPanel south = new JPanel();
        south.setLayout(new BoxLayout(south, BoxLayout.Y_AXIS));
        south.setOpaque(false);
        metricCard.setAlignmentX(Component.CENTER_ALIGNMENT);
        scrollPane.setAlignmentX(Component.CENTER_ALIGNMENT);

        south.add(metricCard);
        south.add(Box.createVerticalStrut(6));

        logArea.setEditable(false);
        logArea.setFont(new Font("Monospaced", Font.PLAIN, 11));
        scrollPane.setPreferredSize(new Dimension(800, 110));
        south.add(scrollPane);

        panel.add(south, BorderLayout.SOUTH);
        return panel;
    }

    // ==========================================
    // EKRAN 2: KUMANDA (KOKPİT) EKRANI
    // ==========================================
    private JPanel buildControllerScreen() {
        JPanel panel = new JPanel(new BorderLayout(12, 12));
        panel.setOpaque(false);
        panel.setBorder(new EmptyBorder(16, 24, 16, 24));

        controlCard.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(59, 130, 246, 140), 1),
            BorderFactory.createEmptyBorder(12, 16, 12, 16)
        ));

        // Üst Başlık Satırı & Butonlar
        JPanel headerRow = new JPanel(new BorderLayout(8, 0));
        headerRow.setOpaque(false);
        lblControlTitle.setFont(new Font("SansSerif", Font.BOLD, 14));
        headerRow.add(lblControlTitle, BorderLayout.WEST);

        JPanel topActions = new JPanel(new FlowLayout(FlowLayout.RIGHT, 6, 0));
        topActions.setOpaque(false);

        styleButton(btnModeAuto, new Color(16, 185, 129), Color.WHITE);
        styleButton(btnModeManual, new Color(59, 130, 246), Color.WHITE);
        styleButton(btnSimCharge, new Color(16, 185, 129), Color.WHITE);
        styleButton(btnHorn, new Color(139, 92, 246), Color.WHITE);
        styleButton(btnEmergencyStop, new Color(220, 38, 38), Color.WHITE);

        topActions.add(btnModeAuto);
        topActions.add(btnModeManual);
        topActions.add(btnSimCharge);
        topActions.add(btnHorn);
        topActions.add(btnEmergencyStop);
        headerRow.add(topActions, BorderLayout.EAST);
        controlCard.add(headerRow, BorderLayout.NORTH);

        // Orta Gövde: D-Pad, Servo Kontrolü, Hız Vitesleri
        JPanel bodyRow = new JPanel(new GridLayout(1, 3, 20, 0));
        bodyRow.setOpaque(false);
        bodyRow.setBorder(new EmptyBorder(16, 0, 16, 0));

        // 1. D-Pad
        JPanel dpadPanel = new JPanel(new BorderLayout(6, 6));
        dpadPanel.setOpaque(false);
        dpadPanel.setBorder(BorderFactory.createTitledBorder(
            BorderFactory.createLineBorder(new Color(59, 130, 246, 80)),
            "D-PAD DIREKSIYON", 0, 0, new Font("SansSerif", Font.BOLD, 11), Color.GRAY
        ));

        styleDirButton(btnFwd, new Color(16, 185, 129));
        styleDirButton(btnRev, new Color(245, 158, 11));
        styleDirButton(btnLeft, new Color(59, 130, 246));
        styleDirButton(btnRight, new Color(59, 130, 246));
        styleDirButton(btnStop, new Color(239, 68, 68));

        btnFwd.setPreferredSize(new Dimension(80, 44));
        btnRev.setPreferredSize(new Dimension(80, 44));
        dpadPanel.add(btnFwd, BorderLayout.NORTH);

        JPanel centerDir = new JPanel(new GridLayout(1, 3, 6, 0));
        centerDir.setOpaque(false);
        centerDir.add(btnLeft);
        centerDir.add(btnStop);
        centerDir.add(btnRight);
        dpadPanel.add(centerDir, BorderLayout.CENTER);
        dpadPanel.add(btnRev, BorderLayout.SOUTH);
        bodyRow.add(dpadPanel);

        // 2. Servo Açısı
        JPanel servoBox = new JPanel();
        servoBox.setLayout(new BoxLayout(servoBox, BoxLayout.Y_AXIS));
        servoBox.setOpaque(false);
        servoBox.setBorder(BorderFactory.createTitledBorder(
            BorderFactory.createLineBorder(new Color(59, 130, 246, 80)),
            "SERVO MANUEL AÇI", 0, 0, new Font("SansSerif", Font.BOLD, 11), Color.GRAY
        ));

        lblServoVal.setFont(new Font("SansSerif", Font.BOLD, 28));
        lblServoVal.setForeground(new Color(37, 99, 235));
        lblServoVal.setAlignmentX(Component.CENTER_ALIGNMENT);

        servoSlider.setMajorTickSpacing(45);
        servoSlider.setMinorTickSpacing(15);
        servoSlider.setPaintTicks(true);
        servoSlider.setOpaque(false);

        JPanel quickAngles = new JPanel(new GridLayout(1, 3, 4, 0));
        quickAngles.setOpaque(false);
        JButton btnAng160 = new JButton("160°");
        JButton btnAng90 = new JButton("90°");
        JButton btnAng20 = new JButton("20°");
        styleButton(btnAng160, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnAng90, new Color(37, 99, 235), Color.WHITE);
        styleButton(btnAng20, Color.DARK_GRAY, Color.WHITE);
        btnAng160.addActionListener(e -> servoSlider.setValue(160));
        btnAng90.addActionListener(e -> servoSlider.setValue(90));
        btnAng20.addActionListener(e -> servoSlider.setValue(20));
        quickAngles.add(btnAng160);
        quickAngles.add(btnAng90);
        quickAngles.add(btnAng20);

        servoBox.add(Box.createVerticalStrut(10));
        servoBox.add(lblServoVal);
        servoBox.add(Box.createVerticalStrut(10));
        servoBox.add(servoSlider);
        servoBox.add(Box.createVerticalStrut(10));
        servoBox.add(quickAngles);
        bodyRow.add(servoBox);

        // 3. Motor Hızı (PWM)
        JPanel speedBox = new JPanel();
        speedBox.setLayout(new BoxLayout(speedBox, BoxLayout.Y_AXIS));
        speedBox.setOpaque(false);
        speedBox.setBorder(BorderFactory.createTitledBorder(
            BorderFactory.createLineBorder(new Color(59, 130, 246, 80)),
            "MOTOR HIZI (PWM)", 0, 0, new Font("SansSerif", Font.BOLD, 11), Color.GRAY
        ));

        lblSpeedVal.setFont(new Font("SansSerif", Font.BOLD, 28));
        lblSpeedVal.setForeground(new Color(37, 99, 235));
        lblSpeedVal.setAlignmentX(Component.CENTER_ALIGNMENT);

        speedSlider.setMajorTickSpacing(50);
        speedSlider.setPaintTicks(true);
        speedSlider.setOpaque(false);

        JPanel gearPanel = new JPanel(new GridLayout(1, 3, 4, 0));
        gearPanel.setOpaque(false);
        JButton btnEco = new JButton("🌱 Eko");
        JButton btnNorm = new JButton("🚗 Standart");
        JButton btnTurbo = new JButton("🚀 Turbo");
        styleButton(btnEco, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnNorm, new Color(37, 99, 235), Color.WHITE);
        styleButton(btnTurbo, new Color(220, 38, 38), Color.WHITE);
        btnEco.addActionListener(e -> speedSlider.setValue(120));
        btnNorm.addActionListener(e -> speedSlider.setValue(180));
        btnTurbo.addActionListener(e -> speedSlider.setValue(255));
        gearPanel.add(btnEco);
        gearPanel.add(btnNorm);
        gearPanel.add(btnTurbo);

        speedBox.add(Box.createVerticalStrut(10));
        speedBox.add(lblSpeedVal);
        speedBox.add(Box.createVerticalStrut(10));
        speedBox.add(speedSlider);
        speedBox.add(Box.createVerticalStrut(10));
        speedBox.add(gearPanel);
        bodyRow.add(speedBox);

        controlCard.add(bodyRow, BorderLayout.CENTER);
        panel.add(controlCard, BorderLayout.CENTER);

        // Dinleyiciler
        attachDriveMouseListener(btnFwd, "FORWARD");
        attachDriveMouseListener(btnRev, "BACKWARD");
        attachDriveMouseListener(btnLeft, "LEFT");
        attachDriveMouseListener(btnRight, "RIGHT");
        btnStop.addActionListener(e -> viewModel.sendCommand("STOP"));
        btnEmergencyStop.addActionListener(e -> viewModel.sendCommand("ESTOP"));
        btnHorn.addActionListener(e -> viewModel.sendCommand("HORN"));
        btnSimCharge.addActionListener(e -> viewModel.sendCommand("SIM_CHARGE"));

        btnModeAuto.addActionListener(e -> viewModel.sendCommand("MODE:AUTO"));
        btnModeManual.addActionListener(e -> viewModel.sendCommand("MODE:MANUAL"));

        speedSlider.addChangeListener(e -> lblSpeedVal.setText(speedSlider.getValue() + " PWM"));
        servoSlider.addChangeListener(e -> {
            lblServoVal.setText(servoSlider.getValue() + "°");
            viewModel.sendCommand("SERVO:" + servoSlider.getValue());
        });

        return panel;
    }

    // ==========================================
    // EKRAN 3: ROBOT 3D DİJİTAL İKİZ VE A3 KESME MATI
    // ==========================================
    private JPanel buildRobot3DScreen() {
        JPanel panel = new JPanel(new BorderLayout(8, 8));
        panel.setOpaque(false);
        panel.setBorder(new EmptyBorder(8, 12, 12, 12));

        // Üst Kamera Açıları Dock'u (Görev 1: Standart, Kuşbakışı, Alttan, Ön, Arka, Sağ, Sol)
        JPanel cameraBar = new JPanel(new FlowLayout(FlowLayout.CENTER, 6, 4));
        cameraBar.setOpaque(false);

        styleButton(btnCamStandard, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnCamTop, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnCamBottom, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnCamFront, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnCamRear, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnCamRight, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnCamLeft, Color.DARK_GRAY, Color.WHITE);

        btnCamStandard.addActionListener(e -> robot3DCanvas.setCamera(-35f, 32f, 1.8f));
        btnCamTop.addActionListener(e -> robot3DCanvas.setCamera(0f, 85f, 1.8f));
        btnCamBottom.addActionListener(e -> robot3DCanvas.setCamera(180f, -70f, 1.9f));
        btnCamFront.addActionListener(e -> robot3DCanvas.setCamera(0f, 16f, 2.3f));
        btnCamRear.addActionListener(e -> robot3DCanvas.setCamera(180f, 16f, 2.3f));
        btnCamRight.addActionListener(e -> robot3DCanvas.setCamera(90f, 20f, 2.0f));
        btnCamLeft.addActionListener(e -> robot3DCanvas.setCamera(-90f, 20f, 2.0f));

        cameraBar.add(btnCamStandard);
        cameraBar.add(btnCamTop);
        cameraBar.add(btnCamBottom);
        cameraBar.add(btnCamFront);
        cameraBar.add(btnCamRear);
        cameraBar.add(btnCamRight);
        cameraBar.add(btnCamLeft);

        panel.add(cameraBar, BorderLayout.NORTH);
        panel.add(robot3DCanvas, BorderLayout.CENTER);
        return panel;
    }

    // ==========================================
    // EKRAN 4: AYARLAR EKRANI (SETTINGS)
    // ==========================================
    private JPanel buildSettingsScreen() {
        settingsPanel.setLayout(new BoxLayout(settingsPanel, BoxLayout.Y_AXIS));
        settingsPanel.setOpaque(false);
        settingsPanel.setBorder(new EmptyBorder(16, 24, 16, 24));

        // 1. TEMA SEÇİM KARTI
        JPanel themeCard = new JPanel(new BorderLayout(10, 8));
        themeCard.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(59, 130, 246, 120), 1),
            BorderFactory.createEmptyBorder(12, 16, 12, 16)
        ));
        themeCard.setOpaque(false);

        JLabel lblThemeHeader = new JLabel("🎨 " + Strings.sectionAppearance());
        lblThemeHeader.setFont(new Font("SansSerif", Font.BOLD, 13));
        themeCard.add(lblThemeHeader, BorderLayout.NORTH);

        JPanel themeButtons = new JPanel(new GridLayout(1, 3, 10, 0));
        themeButtons.setOpaque(false);
        styleButton(btnThemeSys, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnThemeDark, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnThemeLight, Color.DARK_GRAY, Color.WHITE);
        btnThemeSys.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.SYSTEM));
        btnThemeDark.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.DARK));
        btnThemeLight.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.LIGHT));
        themeButtons.add(btnThemeSys);
        themeButtons.add(btnThemeDark);
        themeButtons.add(btnThemeLight);
        themeCard.add(themeButtons, BorderLayout.CENTER);
        settingsPanel.add(themeCard);

        settingsPanel.add(Box.createVerticalStrut(14));

        // 2. DİL SEÇİM KARTI
        JPanel langCard = new JPanel(new BorderLayout(10, 8));
        langCard.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(59, 130, 246, 120), 1),
            BorderFactory.createEmptyBorder(12, 16, 12, 16)
        ));
        langCard.setOpaque(false);

        JLabel lblLangHeader = new JLabel("🌐 " + Strings.sectionLanguage());
        lblLangHeader.setFont(new Font("SansSerif", Font.BOLD, 13));
        langCard.add(lblLangHeader, BorderLayout.NORTH);

        JPanel langButtons = new JPanel(new GridLayout(1, 3, 10, 0));
        langButtons.setOpaque(false);
        styleButton(btnLangSys, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnLangTR, Color.DARK_GRAY, Color.WHITE);
        styleButton(btnLangEN, Color.DARK_GRAY, Color.WHITE);
        btnLangSys.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.SYSTEM));
        btnLangTR.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.TR));
        btnLangEN.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.EN));
        langButtons.add(btnLangSys);
        langButtons.add(btnLangTR);
        langButtons.add(btnLangEN);
        langCard.add(langButtons, BorderLayout.CENTER);
        settingsPanel.add(langCard);

        settingsPanel.add(Box.createVerticalStrut(14));

        // 3. WİFİ & AĞ YAPILANDIRMASI KARTI
        JPanel wifiCard = new JPanel(new BorderLayout(10, 10));
        wifiCard.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(16, 185, 129, 140), 1),
            BorderFactory.createEmptyBorder(14, 16, 14, 16)
        ));
        wifiCard.setOpaque(false);

        JLabel lblWifiHeader = new JLabel("📶 " + Strings.sectionWifiNetwork());
        lblWifiHeader.setFont(new Font("SansSerif", Font.BOLD, 13));
        wifiCard.add(lblWifiHeader, BorderLayout.NORTH);

        JPanel wifiBody = new JPanel();
        wifiBody.setLayout(new BoxLayout(wifiBody, BoxLayout.Y_AXIS));
        wifiBody.setOpaque(false);

        JPanel rowRobotIp = new JPanel(new FlowLayout(FlowLayout.LEFT, 8, 4));
        rowRobotIp.setOpaque(false);
        rowRobotIp.add(new JLabel("Robot Adresi:"));
        JTextField txtWifiTarget = new JTextField("192.168.1.103:8080", 14);
        JButton btnConnectWifi = new JButton("Bağlan");
        styleButton(btnConnectWifi, new Color(37, 99, 235), Color.WHITE);
        btnConnectWifi.addActionListener(e -> {
            txtPort.setText(txtWifiTarget.getText().trim());
            viewModel.connectHardware(txtWifiTarget.getText().trim());
        });
        rowRobotIp.add(txtWifiTarget);
        rowRobotIp.add(btnConnectWifi);
        wifiBody.add(rowRobotIp);

        wifiBody.add(Box.createVerticalStrut(8));

        JLabel lblShareTitle = new JLabel("📲 " + Strings.shareWifiTitle() + " (" + Strings.shareWifiDesc() + "):");
        lblShareTitle.setFont(new Font("SansSerif", Font.BOLD, 11));
        wifiBody.add(lblShareTitle);

        JPanel rowSsidPass = new JPanel(new FlowLayout(FlowLayout.LEFT, 8, 4));
        rowSsidPass.setOpaque(false);
        rowSsidPass.add(new JLabel("Ağ (SSID):"));
        JTextField txtSsid = new JTextField("FiberHGW_TP2BA8", 12);
        rowSsidPass.add(txtSsid);
        rowSsidPass.add(new JLabel("Şifre:"));
        JPasswordField txtPass = new JPasswordField("qdXuk7jfzgP4", 10);
        rowSsidPass.add(txtPass);

        JButton btnSendWifi = new JButton(Strings.btnSendWifiConfig());
        styleButton(btnSendWifi, new Color(5, 150, 105), Color.WHITE);
        btnSendWifi.addActionListener(e -> {
            String ssid = txtSsid.getText().trim();
            String pass = new String(txtPass.getPassword()).trim();
            viewModel.sendCommand("WIFI:SET:" + ssid + ":" + pass);
            JOptionPane.showMessageDialog(this, "Wi-Fi bilgileri robota iletildi!\nSSID: " + ssid, "Wi-Fi Yapılandırma", JOptionPane.INFORMATION_MESSAGE);
        });
        rowSsidPass.add(btnSendWifi);

        JButton btnCopyWifi = new JButton(Strings.btnCopyWifi());
        styleButton(btnCopyWifi, new Color(71, 85, 105), Color.WHITE);
        btnCopyWifi.addActionListener(e -> {
            String text = "SSID: " + txtSsid.getText().trim() + " | Şifre: " + new String(txtPass.getPassword()).trim();
            java.awt.datatransfer.StringSelection sel = new java.awt.datatransfer.StringSelection(text);
            java.awt.Toolkit.getDefaultToolkit().getSystemClipboard().setContents(sel, sel);
            JOptionPane.showMessageDialog(this, "Wi-Fi bilgileri panoya kopyalandı!", "Pano", JOptionPane.INFORMATION_MESSAGE);
        });
        rowSsidPass.add(btnCopyWifi);

        wifiBody.add(rowSsidPass);

        JLabel lblApNote = new JLabel("<html><small style='color:gray;'>💡 Doğrudan Erişim (AP Hotspot): SSID: 'EKRobot_WiFi' • Şifre: '12345678' • IP: 192.168.4.1:8080</small></html>");
        wifiBody.add(lblApNote);

        wifiCard.add(wifiBody, BorderLayout.CENTER);
        settingsPanel.add(wifiCard);

        settingsPanel.add(Box.createVerticalStrut(14));

        // 4. SİSTEM & DONANIM BİLGİSİ
        JPanel infoCard = new JPanel(new BorderLayout(8, 8));
        infoCard.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(71, 85, 105, 120), 1),
            BorderFactory.createEmptyBorder(12, 16, 12, 16)
        ));
        infoCard.setOpaque(false);

        JLabel lblInfoHeader = new JLabel("ℹ️ " + Strings.sectionAppInfo());
        lblInfoHeader.setFont(new Font("SansSerif", Font.BOLD, 13));
        infoCard.add(lblInfoHeader, BorderLayout.NORTH);

        JLabel lblInfoBody = new JLabel("<html><b>EK ROBOT v1.0.0 Production</b><br>"
            + "Arduino Uno R3 • ATmega328P • I2C Bus: 0x08<br>"
            + "HC-SR04 Ultrasonik Mesafe Sensörü • SG90 Mikro Servo • L298N Sürücü<br>"
            + "Cross-Platform: KMP (Android/iOS/Desktop) & JavaForm (Mac/Win/Linux)<br><br>"
            + "<i>" + Strings.splashDevelopedBy() + "</i></html>");
        lblInfoBody.setFont(new Font("SansSerif", Font.PLAIN, 11));
        infoCard.add(lblInfoBody, BorderLayout.CENTER);

        settingsPanel.add(infoCard);
        return settingsPanel;
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
        btn.setFont(new Font("SansSerif", Font.BOLD, 14));
        btn.setBorder(new EmptyBorder(6, 10, 6, 10));
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
    }

    private void styleButton(JButton btn, Color bg, Color fg) {
        btn.setBackground(bg);
        btn.setForeground(fg);
        btn.setFocusPainted(false);
        btn.setFont(new Font("SansSerif", Font.BOLD, 11));
        btn.setBorder(new EmptyBorder(6, 12, 6, 12));
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
    }

    private void stylePill(JButton btn, boolean isSelected, ThemeColors colors) {
        btn.setFocusPainted(false);
        btn.setFont(new Font("SansSerif", Font.BOLD, 11));
        btn.setBorder(new EmptyBorder(6, 14, 6, 14));
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

        setTitle(Strings.appTitle() + " - " + Strings.navTelemetry());
        getContentPane().setBackground(colors.bgPrimary);
        topBar.setBackground(colors.bgSecondary);

        lblPort.setText(Strings.portLabel());
        lblPort.setForeground(colors.textSecondary);
        btnConnect.setText(Strings.btnConnect());
        btnDisconnect.setText(Strings.btnDisconnect());

        // Sekme Buton Başlıkları
        btnTabTelemetry.setText("📊 " + Strings.navTelemetry());
        btnTabController.setText("🎮 " + Strings.navController());
        btnTab3D.setText("🤖 " + Strings.navRobotTwin());
        btnTabSettings.setText("⚙️ " + Strings.navSettings());
        updateNavPillStyles();

        // Kamera Buton Başlıkları
        btnCamStandard.setText("🎯 " + Strings.viewStandard());
        btnCamTop.setText("🔝 " + Strings.viewTop());
        btnCamBottom.setText("🔽 " + Strings.viewBottom());
        btnCamFront.setText("🚘 " + Strings.viewFront());
        btnCamRear.setText("🚗 " + Strings.viewRear());
        btnCamRight.setText("➡️ " + Strings.viewRight());
        btnCamLeft.setText("⬅️ " + Strings.viewLeft());

        // Tema & Dil Butonları
        ThemeDetector.ThemeMode currentTheme = viewModel.getCurrentTheme();
        styleButton(btnThemeSys, currentTheme == ThemeDetector.ThemeMode.SYSTEM ? new Color(37, 99, 235) : colors.bgCard, currentTheme == ThemeDetector.ThemeMode.SYSTEM ? Color.WHITE : colors.textMuted);
        styleButton(btnThemeDark, currentTheme == ThemeDetector.ThemeMode.DARK ? new Color(37, 99, 235) : colors.bgCard, currentTheme == ThemeDetector.ThemeMode.DARK ? Color.WHITE : colors.textMuted);
        styleButton(btnThemeLight, currentTheme == ThemeDetector.ThemeMode.LIGHT ? new Color(37, 99, 235) : colors.bgCard, currentTheme == ThemeDetector.ThemeMode.LIGHT ? Color.WHITE : colors.textMuted);

        Strings.LanguageMode currentLang = viewModel.getCurrentLanguage();
        styleButton(btnLangSys, currentLang == Strings.LanguageMode.SYSTEM ? new Color(37, 99, 235) : colors.bgCard, currentLang == Strings.LanguageMode.SYSTEM ? Color.WHITE : colors.textMuted);
        styleButton(btnLangTR, currentLang == Strings.LanguageMode.TR ? new Color(37, 99, 235) : colors.bgCard, currentLang == Strings.LanguageMode.TR ? Color.WHITE : colors.textMuted);
        styleButton(btnLangEN, currentLang == Strings.LanguageMode.EN ? new Color(37, 99, 235) : colors.bgCard, currentLang == Strings.LanguageMode.EN ? Color.WHITE : colors.textMuted);

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

        robot3DCanvas.applyTheme(colors);
        robot3DCanvas.setBorder(BorderFactory.createLineBorder(colors.border, 1));

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
        robot3DCanvas.updateTelemetry(telemetry);
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
