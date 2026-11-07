package com.engeldenkacan.domain.model;

import java.awt.Color;

public enum RobotState {
    CRUISING("SEYİR MODU (CRUISING)", new Color(16, 185, 129), 0),
    AVOIDING("ENGEL KAÇIŞI (AVOIDING)", new Color(239, 68, 68), 1),
    STOPPED("DURDURULDU (STOPPED)", new Color(245, 158, 11), 2),
    DISCONNECTED("BAĞLANTI YOK", new Color(107, 114, 128), -1);

    private final String displayName;
    private final Color badgeColor;
    private final int code;

    RobotState(String displayName, Color badgeColor, int code) {
        this.displayName = displayName;
        this.badgeColor = badgeColor;
        this.code = code;
    }

    public String getDisplayName() {
        return displayName;
    }

    public Color getBadgeColor() {
        return badgeColor;
    }

    public int getCode() {
        return code;
    }

    public static RobotState fromCode(int code) {
        for (RobotState state : values()) {
            if (state.code == code) return state;
        }
        return CRUISING;
    }
}
