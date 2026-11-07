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
import java.text.SimpleDateFormat;
import java.util.Date;

public class MainForm extends JFrame {
    private final DashboardViewModel viewModel;

    private final RadarCanvas radarCanvas;
    private final ServoGaugeCanvas servoGaugeCanvas;
    private final MetricCard metricCard;

    private final JPanel topBar = new JPanel(new BorderLayout(10, 10));
    private final JPanel visualPanel = new JPanel(new GridLayout(1, 2, 12, 0));
    private final JPanel bottomPanel = new JPanel(new BorderLayout(10, 10));

    private final JLabel lblPort = new JLabel();
    private final JTextField txtPort = new JTextField(SerialI2CBridge.detectDefaultPort(), 16);
    private final JButton btnConnect = new JButton();
    private final JButton btnDisconnect = new JButton();
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

    private final JTextArea logArea = new JTextArea(5, 60);
    private final JScrollPane scrollPane = new JScrollPane(logArea);
    private final SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss.SSS");

    public MainForm(DashboardViewModel viewModel) {
        this.viewModel = viewModel;
        ThemeColors initialColors = viewModel.getColors();

        this.radarCanvas = new RadarCanvas(initialColors);
        this.servoGaugeCanvas = new ServoGaugeCanvas(initialColors);
        this.metricCard = new MetricCard(initialColors);

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(980, 780);
        setMinimumSize(new Dimension(860, 680));
        setLocationRelativeTo(null);

        initUI();
        bindViewModel();
        applyThemeAndLanguage();
    }

    private void initUI() {
        setLayout(new BorderLayout(10, 10));

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

        // Sağ Kontroller: Tek tıkla çalışan butonlar ve Durum Rozeti
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

        lblStatusBadge.setOpaque(true);
        lblStatusBadge.setFont(new Font("SansSerif", Font.BOLD, 11));
        lblStatusBadge.setBorder(new EmptyBorder(6, 12, 6, 12));

        rightControls.add(themeGroup);
        rightControls.add(Box.createHorizontalStrut(6));
        rightControls.add(langGroup);
        rightControls.add(Box.createHorizontalStrut(8));
        rightControls.add(lblStatusBadge);

        topBar.add(leftControls, BorderLayout.WEST);
        topBar.add(rightControls, BorderLayout.EAST);
        topBar.setBorder(new EmptyBorder(10, 14, 10, 14));
        add(topBar, BorderLayout.NORTH);

        // 2. ORTA PANEL (Radar ve Servo Kadranı)
        visualPanel.setOpaque(false);
        visualPanel.setBorder(new EmptyBorder(0, 14, 0, 14));
        visualPanel.add(radarCanvas);
        visualPanel.add(servoGaugeCanvas);
        add(visualPanel, BorderLayout.CENTER);

        // 3. ALT PANEL (Metrik Kartı ve Canlı Telemetri Logu)
        bottomPanel.setOpaque(false);
        bottomPanel.setBorder(new EmptyBorder(8, 14, 14, 14));
        bottomPanel.add(metricCard, BorderLayout.NORTH);

        logArea.setEditable(false);
        logArea.setFont(new Font("Monospaced", Font.PLAIN, 11));
        scrollPane.setPreferredSize(new Dimension(800, 120));
        bottomPanel.add(scrollPane, BorderLayout.CENTER);
        add(bottomPanel, BorderLayout.SOUTH);

        // Olay Dinleyicileri (Anlık Değişim)
        btnConnect.addActionListener(e -> viewModel.connectHardware(txtPort.getText().trim()));
        btnDisconnect.addActionListener(e -> viewModel.disconnect());

        btnThemeSys.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.SYSTEM));
        btnThemeDark.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.DARK));
        btnThemeLight.addActionListener(e -> viewModel.setTheme(ThemeDetector.ThemeMode.LIGHT));

        btnLangSys.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.SYSTEM));
        btnLangTR.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.TR));
        btnLangEN.addActionListener(e -> viewModel.setLanguage(Strings.LanguageMode.EN));
    }

    private void styleButton(JButton btn, Color bg, Color fg) {
        btn.setBackground(bg);
        btn.setForeground(fg);
        btn.setFocusPainted(false);
        btn.setFont(new Font("SansSerif", Font.BOLD, 12));
        btn.setBorder(new EmptyBorder(6, 12, 6, 12));
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
        ThemeColors colors = viewModel.getColors();

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

        // Tema Butonlarının Aktiflik Durumu
        ThemeDetector.ThemeMode currentTheme = viewModel.getCurrentTheme();
        stylePill(btnThemeSys, currentTheme == ThemeDetector.ThemeMode.SYSTEM, colors);
        stylePill(btnThemeDark, currentTheme == ThemeDetector.ThemeMode.DARK, colors);
        stylePill(btnThemeLight, currentTheme == ThemeDetector.ThemeMode.LIGHT, colors);

        // Dil Butonlarının Aktiflik Durumu
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
        } else {
            RobotState state = telemetry.getState();
            String name = switch (state) {
                case CRUISING -> Strings.statusCruising();
                case AVOIDING -> Strings.statusAvoiding();
                case STOPPED -> Strings.statusStopped();
                default -> Strings.statusDisconnected();
            };
            lblStatusBadge.setText(name);
            lblStatusBadge.setBackground(state.getBadgeColor());
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
