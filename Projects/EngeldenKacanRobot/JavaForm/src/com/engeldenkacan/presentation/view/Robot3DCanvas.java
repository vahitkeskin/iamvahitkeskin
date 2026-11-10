package com.engeldenkacan.presentation.view;

import com.engeldenkacan.domain.model.RobotTelemetry;
import com.engeldenkacan.i18n.Strings;
import com.engeldenkacan.theme.ThemeColors;

import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseWheelEvent;
import java.awt.geom.Path2D;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * 🤖 Robot3DCanvas
 * JavaForm için tam interaktif 3D Dijital İkiz ve A3 Yeşil Kesme Matı Görüntüleyici:
 * - Fare sürükleme ile 360° serbest rotasyon (Yaw & Pitch)
 * - Fare tekerleği ile zoom
 * - Standart, Kuşbakışı, Alttan, Ön, Arka, Sağ, Sol hızlı kamera açıları
 * - Görev 3 Katmanlı Örtme (Occlusion): Üstten bakınca alt parçalar, alttan bakınca üst parçalar görünmez!
 */
public class Robot3DCanvas extends JPanel {
    private ThemeColors colors;
    private RobotTelemetry telemetry;

    private float yaw = -35f;
    private float pitch = 32f;
    private float zoom = 1.8f;
    private int prevMouseX, prevMouseY;

    // 3D Vektör Sınıfı
    public static class Vec3 {
        public float x, y, z;
        public Vec3(float x, float y, float z) { this.x = x; this.y = y; this.z = z; }
    }

    // 3D Poligon Sınıfı
    public static class Poly3D {
        public Vec3[] vertices;
        public Color color;
        public Color strokeColor;
        public int layer; // 1: Alt/Üst, 2: Şasi, 3: Üst/Alt, 4: Efekt
        public float depthZ;

        public Poly3D(Vec3[] vertices, Color color, Color strokeColor, int layer) {
            this.vertices = vertices;
            this.color = color;
            this.strokeColor = strokeColor;
            this.layer = layer;
        }
    }

    public Robot3DCanvas(ThemeColors colors) {
        this.colors = colors;
        setBackground(colors.bgPrimary);
        setPreferredSize(new Dimension(800, 500));

        MouseAdapter ma = new MouseAdapter() {
            @Override
            public void mousePressed(MouseEvent e) {
                prevMouseX = e.getX();
                prevMouseY = e.getY();
            }

            @Override
            public void mouseDragged(MouseEvent e) {
                int dx = e.getX() - prevMouseX;
                int dy = e.getY() - prevMouseY;
                yaw += dx * 0.5f;
                pitch = Math.max(-88f, Math.min(88f, pitch - dy * 0.5f));
                prevMouseX = e.getX();
                prevMouseY = e.getY();
                repaint();
            }

            @Override
            public void mouseWheelMoved(MouseWheelEvent e) {
                zoom = (float) Math.max(0.6f, Math.min(4.0f, zoom - (float) e.getPreciseWheelRotation() * 0.15f));
                repaint();
            }
        };

        addMouseListener(ma);
        addMouseMotionListener(ma);
        addMouseWheelListener(ma);
    }

    public void applyTheme(ThemeColors colors) {
        this.colors = colors;
        setBackground(colors.bgPrimary);
        repaint();
    }

    public void updateTelemetry(RobotTelemetry telemetry) {
        this.telemetry = telemetry;
        repaint();
    }

    public void setCamera(float yaw, float pitch, float zoom) {
        this.yaw = yaw;
        this.pitch = pitch;
        this.zoom = zoom;
        repaint();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g.create();
        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

        int width = getWidth();
        int height = getHeight();
        float cx = width / 2.0f;
        float cy = height / 2.0f;

        // Katmanlı Örtme (Occlusion): pitch >= 0 ise üstten bakış (alt parçalar katman 1, şasi 2, üst 3)
        // pitch < 0 ise alttan bakış (üst parçalar katman 1, şasi 2, alt parçalar 3)
        boolean isLookingFromAbove = pitch >= 0f;
        int undersideLayer = isLookingFromAbove ? 1 : 3;
        int chassisLayer = 2;
        int topLayer = isLookingFromAbove ? 3 : 1;

        List<Poly3D> polygons = new ArrayList<>();

        // 1. A3 Yeşil Kesme Matı (Layer 0)
        buildCuttingMat(polygons);

        // 2. Alt Parçalar: TT Dişli Motorlar & Sarhoş Bilye
        buildUnderside(polygons, undersideLayer);

        // 3. MDF Ahşap Şasi (Layer 2)
        buildChassis(polygons, chassisLayer);

        // 4. Üst Parçalar: Arduino Uno, HC-SR04, SG90 Servo, Batarya
        buildTopComponents(polygons, topLayer);

        // Perspektif Projeksiyon & Derinlik Hesabı
        float yawRad = (float) Math.toRadians(yaw);
        float pitchRad = (float) Math.toRadians(pitch);

        // Yatay Eksen (Yaw) ve Yan Profil Fiziksel Bariyer:
        // Kamera sağdayken (sin(yaw) > 0.72): Sol tekerlek tahtanın ARKASINDA kalır -> Tamamen gizlenir!
        // Kamera soldayken (sin(yaw) < -0.72): Sağ tekerlek tahtanın ARKASINDA kalır -> Tamamen gizlenir!
        // Ön/arka bakışta veya kuşbakışında her iki tekerlek de iki yanda temizce görünür.
        float sinYaw = (float) Math.sin(yawRad);
        boolean isSideView = pitch < 45f && pitch > -45f;
        boolean isRightSide = isSideView && sinYaw > 0.72f;
        boolean isLeftSide = isSideView && sinYaw < -0.72f;

        int leftWheelLayer = (sinYaw > 0.05f) ? 1 : 3;
        int rightWheelLayer = (sinYaw < -0.05f) ? 1 : 3;

        // 5. Tekerlekler (Dinamik Yan Örtme ile Sol ve Sağ Bağımsız Katman)
        buildWheels(polygons, leftWheelLayer, rightWheelLayer, isRightSide, isLeftSide);
        float focalDist = 450f * zoom;
        float camDist = 550f;

        List<ProjectedPoly> projected = new ArrayList<>();

        for (Poly3D poly : polygons) {
            float totalZ = 0;
            Point[] pts = new Point[poly.vertices.length];
            boolean valid = true;

            for (int i = 0; i < poly.vertices.length; i++) {
                Vec3 v = poly.vertices[i];
                // Y ekseninde (yaw) ve X ekseninde (pitch) rotasyon
                float cosY = (float) Math.cos(yawRad), sinY = (float) Math.sin(yawRad);
                float x1 = v.x * cosY + v.z * sinY;
                float z1 = -v.x * sinY + v.z * cosY;

                float cosP = (float) Math.cos(pitchRad), sinP = (float) Math.sin(pitchRad);
                float y2 = v.y * cosP - z1 * sinP;
                float z2 = v.y * sinP + z1 * cosP;

                float camZ = z2 + camDist;
                if (camZ <= 10f) { valid = false; break; }

                float scale = focalDist / camZ;
                pts[i] = new Point((int) (cx + x1 * scale), (int) (cy + y2 * scale));
                totalZ += camZ;
            }

            if (valid) {
                projected.add(new ProjectedPoly(pts, totalZ / poly.vertices.length, poly.color, poly.strokeColor, poly.layer));
            }
        }

        // Katmanlı ve Derinlik Sıralaması (Painter's Algorithm)
        Collections.sort(projected, new Comparator<ProjectedPoly>() {
            @Override
            public int compare(ProjectedPoly a, ProjectedPoly b) {
                if (a.layer != b.layer) return Integer.compare(a.layer, b.layer);
                return Float.compare(b.depthZ, a.depthZ);
            }
        });

        // Çizim
        for (ProjectedPoly p : projected) {
            Path2D path = new Path2D.Float();
            path.moveTo(p.pts[0].x, p.pts[0].y);
            for (int i = 1; i < p.pts.length; i++) {
                path.lineTo(p.pts[i].x, p.pts[i].y);
            }
            path.closePath();

            g2.setColor(p.color);
            g2.fill(path);

            if (p.strokeColor != null) {
                g2.setColor(p.strokeColor);
                g2.setStroke(new BasicStroke(1.0f));
                g2.draw(path);
            }
        }

        // HUD Bilgi Katmanı (Açı, Durum & İpucu)
        g2.setColor(colors.textMuted);
        g2.setFont(new Font("SansSerif", Font.PLAIN, 11));
        g2.drawString(com.engeldenkacan.i18n.Strings.hint3dMouse(), 16, height - 16);

        g2.setColor(colors.accent);
        g2.setFont(new Font("SansSerif", Font.BOLD, 12));
        g2.drawString(String.format("Yaw: %.0f° | Pitch: %.0f° | Zoom: %.1fx", yaw, pitch, zoom), 16, 24);

        g2.dispose();
    }

    private static class ProjectedPoly {
        Point[] pts;
        float depthZ;
        Color color;
        Color strokeColor;
        int layer;

        public ProjectedPoly(Point[] pts, float depthZ, Color color, Color strokeColor, int layer) {
            this.pts = pts;
            this.depthZ = depthZ;
            this.color = color;
            this.strokeColor = strokeColor;
            this.layer = layer;
        }
    }

    // A3 Kesme Matı İnşası
    private void buildCuttingMat(List<Poly3D> list) {
        float y = 28f;
        Color matGreen = pitch < -5f ? new Color(15, 81, 50, 60) : new Color(15, 81, 50, 230);
        Color matGrid = pitch < -5f ? new Color(110, 231, 183, 70) : new Color(110, 231, 183, 180);

        // Mat Tablası
        list.add(new Poly3D(new Vec3[]{
            new Vec3(-225f, y, -150f), new Vec3(225f, y, -150f),
            new Vec3(225f, y, 150f), new Vec3(-225f, y, 150f)
        }, matGreen, matGrid, 0));

        // Mat Kılavuz Çizgileri
        for (float x = -200f; x <= 200f; x += 50f) {
            list.add(new Poly3D(new Vec3[]{
                new Vec3(x, y - 0.2f, -140f), new Vec3(x + 1f, y - 0.2f, -140f),
                new Vec3(x + 1f, y - 0.2f, 140f), new Vec3(x, y - 0.2f, 140f)
            }, matGrid, null, 0));
        }
        for (float z = -120f; z <= 120f; z += 40f) {
            list.add(new Poly3D(new Vec3[]{
                new Vec3(-210f, y - 0.2f, z), new Vec3(210f, y - 0.2f, z),
                new Vec3(210f, y - 0.2f, z + 1f), new Vec3(-210f, y - 0.2f, z + 1f)
            }, matGrid, null, 0));
        }
    }

    // MDF Ahşap Şasi
    private void buildChassis(List<Poly3D> list, int layer) {
        float yTop = -3f;
        float yBottom = 3f;
        Color mdfTop = new Color(212, 163, 115);
        Color mdfBottom = new Color(176, 137, 88);
        Color mdfEdge = new Color(139, 90, 43);

        // Üst Yüzey (Katı Doğal Ahşap)
        list.add(new Poly3D(new Vec3[]{
            new Vec3(-45f, yTop, -90f), new Vec3(45f, yTop, -90f),
            new Vec3(65f, yTop, -50f), new Vec3(65f, yTop, 70f),
            new Vec3(-65f, yTop, 70f), new Vec3(-65f, yTop, -50f)
        }, mdfTop, mdfEdge, layer));

        // Alt Yüzey (Katı Koyu Ahşap)
        list.add(new Poly3D(new Vec3[]{
            new Vec3(-45f, yBottom, -90f), new Vec3(-65f, yBottom, -50f),
            new Vec3(-65f, yBottom, 70f), new Vec3(65f, yBottom, 70f),
            new Vec3(65f, yBottom, -50f), new Vec3(45f, yBottom, -90f)
        }, mdfBottom, mdfEdge, layer));

        // Yan Kenarlar
        addBox(list, 0f, 0f, -90f, 90f, 6f, 2f, mdfEdge, layer);
        addBox(list, -65f, 0f, 10f, 2f, 6f, 120f, mdfEdge, layer);
        addBox(list, 65f, 0f, 10f, 2f, 6f, 120f, mdfEdge, layer);
        addBox(list, 0f, 0f, 70f, 130f, 6f, 2f, mdfEdge, layer);
    }

    // Alt Gövde Parçaları (TT Motorlar & Sarhoş Bilye)
    private void buildUnderside(List<Poly3D> list, int layer) {
        Color yellow = new Color(245, 158, 11);
        Color steel = new Color(148, 163, 184);
        Color caster = new Color(203, 213, 225);

        // Sol TT Motor
        addBox(list, -46f, 11f, -14f, 19f, 16f, 32f, yellow, layer);
        addBox(list, -46f, 11f, 11f, 12f, 12f, 16f, steel, layer);

        // Sağ TT Motor
        addBox(list, 46f, 11f, -14f, 19f, 16f, 32f, yellow, layer);
        addBox(list, 46f, 11f, 11f, 12f, 12f, 16f, steel, layer);

        // Arka Sarhoş Bilye
        addBox(list, 0f, 12f, 50f, 22f, 16f, 22f, caster, layer);
    }

    // Üst Gövde Parçaları (Arduino, Sensör, Servo, Batarya)
    private void buildTopComponents(List<Poly3D> list, int layer) {
        Color teal = new Color(0, 135, 143);   // Arduino Uno Teal PCB
        Color blue = new Color(30, 64, 175);   // HC-SR04 Mavi PCB
        Color servoBlue = new Color(29, 78, 216); // SG90 Servo
        Color red = new Color(220, 38, 38);    // L298N Sürücü Kırmızı
        Color green = new Color(34, 197, 94);  // 18650 Li-Ion Yeşil Batarya
        Color silver = new Color(203, 213, 225); // Sensör Silindirleri

        // Arduino Uno R3 (Şasi arkası)
        addBox(list, 0f, -8f, 30f, 53f, 8f, 68f, teal, layer);

        // 18650 Çiftli Batarya Yuvası & Çapraz (Zıt Kutuplu) Li-Ion Piller
        Color darkBox = new Color(20, 24, 30);
        float batZ = 75f;
        // Siyah ABS Pil Yuvası
        addBox(list, 0f, -8f, batZ, 62f, 8f, 32f, darkBox, layer);
        addBox(list, 0f, -12f, batZ, 60f, 6f, 2f, darkBox, layer); // Orta ayırıcı
        addBox(list, -30f, -12f, batZ, 2f, 8f, 32f, darkBox, layer); // Sol duvar
        addBox(list, 30f, -12f, batZ, 2f, 8f, 32f, darkBox, layer);  // Sağ duvar

        // Pil 1 (Ön Pil): Pozitif (+) SOLDA (-25f), Negatif (-) SAĞDA (+25f)
        addBox(list, 0f, -14f, batZ - 8f, 48f, 12f, 12f, green, layer);
        addBox(list, -26f, -14f, batZ - 8f, 3f, 5f, 5f, silver, layer); // (+) Pozitif Button Top
        addBox(list, 26f, -14f, batZ - 8f, 3f, 8f, 8f, silver, layer);  // (-) Negatif Yay
        // Pil 1 Polarite Göstergeleri: Sol (+) Kırmızı, Sağ (-) Siyah
        addBox(list, -15f, -20.5f, batZ - 8f, 4f, 1f, 1.5f, red, layer);
        addBox(list, -15f, -20.5f, batZ - 8f, 1.5f, 1f, 4f, red, layer); // [+]
        addBox(list, 15f, -20.5f, batZ - 8f, 4f, 1f, 1.5f, Color.BLACK, layer); // [-]

        // Pil 2 (Arka Pil) - ÇAPRAZ: Negatif (-) SOLDA (-25f), Pozitif (+) SAĞDA (+25f)
        addBox(list, 0f, -14f, batZ + 8f, 48f, 12f, 12f, green, layer);
        addBox(list, -26f, -14f, batZ + 8f, 3f, 8f, 8f, silver, layer); // (-) Negatif Yay
        addBox(list, 26f, -14f, batZ + 8f, 3f, 5f, 5f, silver, layer);  // (+) Pozitif Button Top
        // Pil 2 Polarite Göstergeleri: Sol (-) Siyah, Sağ (+) Kırmızı
        addBox(list, -15f, -20.5f, batZ + 8f, 4f, 1f, 1.5f, Color.BLACK, layer); // [-]
        addBox(list, 15f, -20.5f, batZ + 8f, 4f, 1f, 1.5f, red, layer);
        addBox(list, 15f, -20.5f, batZ + 8f, 1.5f, 1f, 4f, red, layer); // [+]

        // Sağ Nikel Seri Bağlantı Köprüsü
        addBox(list, 29.5f, -14f, batZ, 1.5f, 6f, 18f, silver, layer);

        // Kırmızı (+) ve Siyah (-) Besleme Kabloları
        addBox(list, -28f, -10f, batZ - 20f, 2f, 2f, 24f, red, layer);
        addBox(list, -28f, -7f, batZ - 10f, 2f, 2f, 36f, Color.BLACK, layer);

        // L298N Çift Motor Sürücüsü
        addBox(list, -25f, -9f, 15f, 30f, 10f, 30f, red, layer);

        // SG90 Mikro Servo (Ön burun)
        int angle = telemetry != null ? telemetry.getServoAngle() : 90;
        addBox(list, 0f, -12f, -80f, 22f, 16f, 14f, servoBlue, layer);

        // Dönen HC-SR04 Ultrasonik Sensör
        float rad = (float) Math.toRadians(angle - 90);
        float sx = (float) (Math.cos(rad) * 0);
        float sz = (float) (Math.sin(rad) * 0);

        addBox(list, sx, -22f, -88f + sz, 45f, 20f, 6f, blue, layer);
        addBox(list, sx - 12f, -22f, -94f + sz, 14f, 14f, 10f, silver, layer); // T Verici
        addBox(list, sx + 12f, -22f, -94f + sz, 14f, 14f, 10f, silver, layer); // R Alıcı
    }

    // Tekerlekler (Dinamik Yan Örtme Katmanları)
    private void buildWheels(List<Poly3D> list, int leftLayer, int rightLayer, boolean hideLeft, boolean hideRight) {
        Color tire = new Color(30, 41, 59);
        Color rim = new Color(245, 158, 11);

        // Sol Tekerlek
        if (!hideLeft) {
            addBox(list, -68f, 6f, -14f, 14f, 44f, 44f, tire, leftLayer);
            addBox(list, -70f, 6f, -14f, 4f, 24f, 24f, rim, leftLayer);
        }

        // Sağ Tekerlek
        if (!hideRight) {
            addBox(list, 68f, 6f, -14f, 14f, 44f, 44f, tire, rightLayer);
            addBox(list, 70f, 6f, -14f, 4f, 24f, 24f, rim, rightLayer);
        }
    }

    // 3D Kutu Ekleme Yardımcısı
    private void addBox(List<Poly3D> list, float cx, float cy, float cz, float w, float h, float d, Color c, int layer) {
        float hw = w / 2f, hh = h / 2f, hd = d / 2f;
        Color stroke = new Color(0, 0, 0, 40);

        // Üst
        list.add(new Poly3D(new Vec3[]{
            new Vec3(cx - hw, cy - hh, cz - hd), new Vec3(cx + hw, cy - hh, cz - hd),
            new Vec3(cx + hw, cy - hh, cz + hd), new Vec3(cx - hw, cy - hh, cz + hd)
        }, c, stroke, layer));

        // Alt
        list.add(new Poly3D(new Vec3[]{
            new Vec3(cx - hw, cy + hh, cz + hd), new Vec3(cx + hw, cy + hh, cz + hd),
            new Vec3(cx + hw, cy + hh, cz - hd), new Vec3(cx - hw, cy + hh, cz - hd)
        }, c, stroke, layer));

        // Ön
        list.add(new Poly3D(new Vec3[]{
            new Vec3(cx - hw, cy - hh, cz - hd), new Vec3(cx + hw, cy - hh, cz - hd),
            new Vec3(cx + hw, cy + hh, cz - hd), new Vec3(cx - hw, cy + hh, cz - hd)
        }, c, stroke, layer));

        // Arka
        list.add(new Poly3D(new Vec3[]{
            new Vec3(cx + hw, cy - hh, cz + hd), new Vec3(cx - hw, cy - hh, cz + hd),
            new Vec3(cx - hw, cy + hh, cz + hd), new Vec3(cx + hw, cy + hh, cz + hd)
        }, c, stroke, layer));

        // Sol
        list.add(new Poly3D(new Vec3[]{
            new Vec3(cx - hw, cy - hh, cz + hd), new Vec3(cx - hw, cy - hh, cz - hd),
            new Vec3(cx - hw, cy + hh, cz - hd), new Vec3(cx - hw, cy + hh, cz + hd)
        }, c, stroke, layer));

        // Sağ
        list.add(new Poly3D(new Vec3[]{
            new Vec3(cx + hw, cy - hh, cz - hd), new Vec3(cx + hw, cy - hh, cz + hd),
            new Vec3(cx + hw, cy + hh, cz + hd), new Vec3(cx + hw, cy + hh, cz - hd)
        }, c, stroke, layer));
    }
}
