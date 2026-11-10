/**
 * @file esp_wifi_bridge.ino
 * @brief EK ROBOT - Yüksek Performanslı Wi-Fi <-> UART Seri Haberleşme Köprüsü
 * @author Vahit Keskin
 *
 * ESP32 Wi-Fi Köprüsü (I2C YOK - Doğrudan Güvenilir UART Seri Haberleşme)
 *
 * Mimari:
 * [Mobil KMP / Masaüstü JavaForm] 
 *        ↕ Wi-Fi TCP Socket (Port 8080)
 *   [ ESP32 Köprü ]
 *        ↕ Seri Port (UART - RX/TX)
 * [ Arduino Uno Robot Beyni ] (Motorlar, Mesafe Sensörü, Servo, Batarya)
 */

#include <WiFi.h>

// ==========================================
// 1. AĞ AYARLARI
// ==========================================
const char* STA_SSID = "FiberHGW_TP2BA8";
const char* STA_PASS = "qdXuk7jfzgP4";

const char* AP_SSID  = "EKRobot_WiFi";
const char* AP_PASS  = "12345678";
const int   TCP_PORT = 8080;

WiFiServer tcpServer(TCP_PORT);
WiFiClient connectedClients[4];

// UART Pin Tanımları (Arduino Uno ile bağlantı)
// Varsayılan: ESP32 Pin 21 (RX) <--- Arduino TX
//             ESP32 Pin 22 (TX) ---> Arduino RX
#define ESP_RX_PIN 21
#define ESP_TX_PIN 22
#define UART_BAUD_RATE 115200

// İkincil Donanımsal Seri Port (Serial2)
HardwareSerial RobotSerial(2);

// Telemetri Önbelleği
String lastTelemetryJson = "{\"front\":400,\"angle\":90,\"state\":0,\"left\":400,\"right\":400,\"vbat\":7.84,\"bat\":85,\"chg\":0}";
unsigned long lastPacketTime = 0;
uint32_t packetCount = 0;

void setup() {
    // 1. USB Hata Ayıklama Seri Portu
    Serial.begin(115200);
    delay(200);
    Serial.println("\n==========================================");
    Serial.println("  🤖 EK ROBOT - WI-FI <-> SERIAL BRIDGE   ");
    Serial.println("==========================================");

    // 2. Arduino Uno ile UART Bağlantısını Başlat
    RobotSerial.begin(UART_BAUD_RATE, SERIAL_8N1, ESP_RX_PIN, ESP_TX_PIN);
    Serial.printf("[Robot UART] Serial2 başlatıldı: RX=Pin %d, TX=Pin %d (%d baud)\n", ESP_RX_PIN, ESP_TX_PIN, UART_BAUD_RATE);

    // 3. Wi-Fi İstasyon (STA) Modunda Bağlan
    Serial.printf("[Wi-Fi STA] '%s' ağına bağlanılıyor...", STA_SSID);
    WiFi.mode(WIFI_STA);
    WiFi.begin(STA_SSID, STA_PASS);

    int attempts = 0;
    while (WiFi.status() != WL_CONNECTED && attempts < 20) {
        delay(500);
        Serial.print(".");
        attempts++;
    }

    if (WiFi.status() == WL_CONNECTED) {
        Serial.printf("\n[Wi-Fi STA] Bağlandı! Robot IP: %s\n", WiFi.localIP().toString().c_str());
    } else {
        Serial.println("\n[Wi-Fi STA] Bağlantı kurulamadı. Access Point (AP) moduna geçiliyor...");
        WiFi.mode(WIFI_AP);
        WiFi.softAP(AP_SSID, AP_PASS);
        Serial.printf("[Wi-Fi AP] Hotspot Başlatıldı! SSID: %s | IP: %s\n", AP_SSID, WiFi.softAPIP().toString().c_str());
    }

    // 4. TCP Sunucusunu Başlat
    tcpServer.begin();
    tcpServer.setNoDelay(true);
    Serial.printf("[TCP Server] Port %d üzerinde dinlemede (KMP & JavaForm hazır)...\n", TCP_PORT);
}

void broadcastToClients(const String& data) {
    for (int i = 0; i < 4; i++) {
        if (connectedClients[i] && connectedClients[i].connected()) {
            connectedClients[i].println(data);
        }
    }
}

void loop() {
    // 1. Yeni Wi-Fi İstemcilerini Kabul Et
    if (tcpServer.hasClient()) {
        WiFiClient newClient = tcpServer.available();
        bool accepted = false;
        for (int i = 0; i < 4; i++) {
            if (!connectedClients[i] || !connectedClients[i].connected()) {
                connectedClients[i] = newClient;
                Serial.printf("[Wi-Fi TCP] İstemci #%d bağlandı: %s\n", i, newClient.remoteIP().toString().c_str());
                // Bağlanır bağlanmaz son telemetriyi gönder
                connectedClients[i].println(lastTelemetryJson);
                accepted = true;
                break;
            }
        }
        if (!accepted) {
            newClient.stop();
        }
    }

    // 2. Wi-Fi İstemcilerinden Gelen Kumanda Komutlarını Oku -> Arduino'ya İlet
    for (int i = 0; i < 4; i++) {
        if (connectedClients[i] && connectedClients[i].connected()) {
            while (connectedClients[i].available()) {
                String cmd = connectedClients[i].readStringUntil('\n');
                cmd.trim();
                if (cmd.length() > 0) {
                    Serial.printf("[Wi-Fi -> Robot] Komut: %s\n", cmd.c_str());
                    if (cmd.startsWith("WIFI:SET:")) {
                        // Format: WIFI:SET:<SSID>:<PASS>
                        int firstColon = cmd.indexOf(':', 9);
                        String newSsid = (firstColon > 0) ? cmd.substring(9, firstColon) : cmd.substring(9);
                        String newPass = (firstColon > 0) ? cmd.substring(firstColon + 1) : "";
                        Serial.printf("[Wi-Fi Config] Yeni ağ ayarları alındı: SSID='%s'\n", newSsid.c_str());
                        broadcastToClients("{\"wifi_status\":\"CONNECTING\",\"ssid\":\"" + newSsid + "\"}");
                        WiFi.disconnect();
                        delay(200);
                        WiFi.begin(newSsid.c_str(), newPass.c_str());
                        int att = 0;
                        while (WiFi.status() != WL_CONNECTED && att < 20) {
                            delay(500);
                            att++;
                        }
                        if (WiFi.status() == WL_CONNECTED) {
                            String newIp = WiFi.localIP().toString();
                            broadcastToClients("{\"wifi_status\":\"CONNECTED\",\"ssid\":\"" + newSsid + "\",\"ip\":\"" + newIp + "\"}");
                            Serial.printf("[Wi-Fi Config] Yeni ağa başarıyla bağlandı: %s\n", newIp.c_str());
                        } else {
                            broadcastToClients("{\"wifi_status\":\"FAILED\",\"ssid\":\"" + newSsid + "\"}");
                            WiFi.begin(STA_SSID, STA_PASS); // Eski ağa geri dön
                        }
                    } else if (cmd == "WIFI:GET" || cmd == "WIFI:STATUS") {
                        String currentSsid = (WiFi.status() == WL_CONNECTED) ? WiFi.SSID() : AP_SSID;
                        String currentIp = (WiFi.status() == WL_CONNECTED) ? WiFi.localIP().toString() : WiFi.softAPIP().toString();
                        int rssi = (WiFi.status() == WL_CONNECTED) ? WiFi.RSSI() : 0;
                        String wifiJson = "{\"wifi_status\":\"" + String((WiFi.status() == WL_CONNECTED) ? "CONNECTED" : "AP_MODE") + "\",\"ssid\":\"" + currentSsid + "\",\"ip\":\"" + currentIp + "\",\"port\":8080,\"rssi\":" + String(rssi) + "}";
                        connectedClients[i].println(wifiJson);
                    } else {
                        RobotSerial.println(cmd); // Arduino Uno'ya UART üzerinden ilet
                    }
                }
            }
        }
    }

    // 3. Arduino'dan Gelen Telemetriyi Oku (RobotSerial) -> Wi-Fi İstemcilerine Yayınla
    while (RobotSerial.available()) {
        String line = RobotSerial.readStringUntil('\n');
        line.trim();
        if (line.length() > 0 && line.startsWith("{") && line.endsWith("}")) {
            lastTelemetryJson = line;
            lastPacketTime = millis();
            packetCount++;
            broadcastToClients(line);
        }
    }

    // 4. USB Seri Portundan da Komut Alabilme (Hata Ayıklama & Köprüleme)
    while (Serial.available()) {
        String usbCmd = Serial.readStringUntil('\n');
        usbCmd.trim();
        if (usbCmd.length() > 0) {
            RobotSerial.println(usbCmd);
        }
    }

    // 5. Periyodik Durum Bilgisi (Her 3 saniyede bir USB monitörüne)
    static unsigned long lastStatusPrint = 0;
    if (millis() - lastStatusPrint >= 3000) {
        lastStatusPrint = millis();
        int activeClients = 0;
        for (int i = 0; i < 4; i++) {
            if (connectedClients[i] && connectedClients[i].connected()) activeClients++;
        }
        Serial.printf("[Bridge Status] Wi-Fi: %s (%s) | İstemciler: %d | Paketler: %u | Son Veri: %lu ms önce\n",
            (WiFi.status() == WL_CONNECTED) ? "STA" : "AP",
            (WiFi.status() == WL_CONNECTED) ? WiFi.localIP().toString().c_str() : WiFi.softAPIP().toString().c_str(),
            activeClients,
            packetCount,
            (lastPacketTime > 0) ? (millis() - lastPacketTime) : 99999);
    }
}
