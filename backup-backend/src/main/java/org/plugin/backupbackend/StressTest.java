package org.plugin.backupbackend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class StressTest {

    @Id
    @GeneratedValue
    private Long id;
    private StressType type;
    private int timeout;
    private String status;
    private String output;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
