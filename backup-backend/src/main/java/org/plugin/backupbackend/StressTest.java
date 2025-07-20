package org.plugin.backupbackend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class StressTest {

    @Id
    @GeneratedValue
    private UUID id;
    private StressType type;
    private int timeout;
    private String status;
    private String output;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    public StressTest() {
    }

    private StressTest(Builder builder) {
        this.id = builder.id;
        this.type = builder.type;
        this.timeout = builder.timeout;
        this.status = builder.status;
        this.output = builder.output;
        this.startTime = builder.startTime;
        this.endTime = builder.endTime;
    }

    public static class Builder {
        private UUID id;
        private StressType type;
        private int timeout;
        private String status;
        private String output;
        private LocalDateTime startTime;
        private LocalDateTime endTime;

        public Builder id(UUID id) {
            this.id = id;
            return this;
        }

        public Builder type(StressType type) {
            this.type = type;
            return this;
        }

        public Builder timeout(int timeout) {
            this.timeout = timeout;
            return this;
        }

        public Builder status(String status) {
            this.status = status;
            return this;
        }

        public Builder output(String output) {
            this.output = output;
            return this;
        }

        public Builder startTime(LocalDateTime startTime) {
            this.startTime = startTime;
            return this;
        }

        public Builder endTime(LocalDateTime endTime) {
            this.endTime = endTime;
            return this;
        }

        public StressTest build() {
            return new StressTest(this);
        }
    }

    public UUID getId() {
        return id;
    }

    public StressType getType() {
        return type;
    }

    public int getTimeout() {
        return timeout;
    }

    public String getStatus() {
        return status;
    }

    public String getOutput() {
        return output;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
