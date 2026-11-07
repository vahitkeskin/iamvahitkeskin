package com.engeldenkacan.domain.model;

public class RobotTelemetry {
    private final int frontDistance;
    private final int servoAngle;
    private final RobotState state;
    private final int leftDistance;
    private final int rightDistance;
    private final boolean hasSignal;
    private final long timestamp;

    // Batarya & Şarj Durumu (2S Li-Ion: 6.4V - 8.4V)
    private final float batteryVoltage;
    private final int batteryPercentage;
    private final boolean isCharging;

    // Manuel Müdahale & Kumanda
    private final boolean isManualMode;
    private final String manualDriveCommand;
    private final int targetPwmSpeed;

    public RobotTelemetry(int frontDistance, int servoAngle, RobotState state, int leftDistance, int rightDistance, boolean hasSignal) {
        this(frontDistance, servoAngle, state, leftDistance, rightDistance, hasSignal, 7.84f, 85, false, false, "STOP", 180);
    }

    public RobotTelemetry(int frontDistance, int servoAngle, RobotState state, int leftDistance, int rightDistance, boolean hasSignal,
                          float batteryVoltage, int batteryPercentage, boolean isCharging,
                          boolean isManualMode, String manualDriveCommand, int targetPwmSpeed) {
        this.frontDistance = frontDistance;
        this.servoAngle = servoAngle;
        this.state = state;
        this.leftDistance = leftDistance;
        this.rightDistance = rightDistance;
        this.hasSignal = hasSignal;
        this.timestamp = System.currentTimeMillis();
        this.batteryVoltage = batteryVoltage;
        this.batteryPercentage = batteryPercentage;
        this.isCharging = isCharging;
        this.isManualMode = isManualMode;
        this.manualDriveCommand = manualDriveCommand;
        this.targetPwmSpeed = targetPwmSpeed;
    }

    public static RobotTelemetry noSignal() {
        return new RobotTelemetry(-1, -1, RobotState.DISCONNECTED, -1, -1, false, 0f, 0, false, false, "STOP", 0);
    }

    public int getFrontDistance() { return frontDistance; }
    public int getServoAngle() { return servoAngle; }
    public RobotState getState() { return state; }
    public int getLeftDistance() { return leftDistance; }
    public int getRightDistance() { return rightDistance; }
    public boolean hasSignal() { return hasSignal; }
    public long getTimestamp() { return timestamp; }

    public float getBatteryVoltage() { return batteryVoltage; }
    public int getBatteryPercentage() { return batteryPercentage; }
    public boolean isCharging() { return isCharging; }
    public boolean isBatteryLow() { return batteryPercentage <= 20; }
    public boolean isBatteryCritical() { return batteryPercentage <= 10; }

    public boolean isManualMode() { return isManualMode; }
    public String getManualDriveCommand() { return manualDriveCommand; }
    public int getTargetPwmSpeed() { return targetPwmSpeed; }

    public boolean isDanger() {
        return hasSignal && frontDistance > 0 && frontDistance <= 15;
    }

    public boolean isWarning() {
        return hasSignal && frontDistance > 15 && frontDistance <= 30;
    }

    public boolean isSafe() {
        return hasSignal && frontDistance > 30;
    }
}
