package org.plugin.backupbackend;

public enum StressType {
    VM("Virtual Memory"),
    CPU("CPU"),
    HDD("Hard Drive");

    private final String label;

    StressType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public static StressType from(String value) {
        if (value == null) {
            throw new IllegalArgumentException("Value cannot be null");
        }
        return switch (value.toLowerCase()) {
            case "vm" -> VM;
            case "cpu" -> CPU;
            case "hdd" -> HDD;
            default -> throw new IllegalArgumentException("Unknown stress type: " + value);
        };
    }
}

