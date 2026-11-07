package com.engeldenkacan.domain.model;

public class RobotTelemetry {
    private final int frontDistance;
    private final int servoAngle;
    private final RobotState state;
    private final int leftDistance;
    private final int rightDistance;
    private final boolean hasSignal;
    private final long timestamp;

    public RobotTelemetry(int frontDistance, int servoAngle, RobotState state, int leftDistance, int rightDistance, boolean hasSignal) {
        this.frontDistance = frontDistance;
        this.servoAngle = servoAngle;
        this.state = state;
        this.leftDistance = leftDistance;
        this.rightDistance = rightDistance;
        this.hasSignal = hasSignal;
        this.timestamp = System.currentTimeMillis();
    }

    public static RobotTelemetry noSignal() {
        return new RobotTelemetry(-1, -1, RobotState.DISCONNECTED, -1, -1, false);
    }

    public int getFrontDistance() { return frontDistance; }
    public int getServoAngle() { return servoAngle; }
    public RobotState getState() { return state; }
    public int getLeftDistance() { return leftDistance; }
    public int getRightDistance() { return rightDistance; }
    public boolean hasSignal() { return hasSignal; }
    public long getTimestamp() { return timestamp; }

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
