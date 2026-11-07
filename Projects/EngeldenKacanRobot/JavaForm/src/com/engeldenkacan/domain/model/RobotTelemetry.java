package com.engeldenkacan.domain.model;

public class RobotTelemetry {
    private final int frontDistance;
    private final int servoAngle;
    private final RobotState state;
    private final int leftDistance;
    private final int rightDistance;
    private final long timestamp;

    public RobotTelemetry(int frontDistance, int servoAngle, RobotState state, int leftDistance, int rightDistance) {
        this.frontDistance = frontDistance;
        this.servoAngle = servoAngle;
        this.state = state;
        this.leftDistance = leftDistance;
        this.rightDistance = rightDistance;
        this.timestamp = System.currentTimeMillis();
    }

    public int getFrontDistance() { return frontDistance; }
    public int getServoAngle() { return servoAngle; }
    public RobotState getState() { return state; }
    public int getLeftDistance() { return leftDistance; }
    public int getRightDistance() { return rightDistance; }
    public long getTimestamp() { return timestamp; }

    public boolean isDanger() {
        return frontDistance <= 15;
    }

    public boolean isWarning() {
        return frontDistance > 15 && frontDistance <= 30;
    }

    public boolean isSafe() {
        return frontDistance > 30;
    }

    @Override
    public String toString() {
        return String.format("Telemetry[Ön=%dcm, Açı=%d°, Durum=%s, Sol=%dcm, Sağ=%dcm]",
                frontDistance, servoAngle, state.getDisplayName(), leftDistance, rightDistance);
    }
}
