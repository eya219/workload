package org.plugin.backupbackend;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Service
public class StressService {

    private final StressRepository stressRepository;

    public StressService(StressRepository stressRepository) {
        this.stressRepository = stressRepository;
    }

    public String stress(String... command) throws Exception {
        String type = Arrays.stream(command).toList().get(1).substring(2);

        ProcessBuilder pb = new ProcessBuilder(command);
        pb.redirectErrorStream(true);
        StressTest stressTest = new StressTest.Builder()
                .startTime(LocalDateTime.now())
                .type(StressType.from(type))
                .timeout(Integer.parseInt(command[command.length - 1]))
                .build();
        Process process = pb.start();

        StringBuilder output = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null)
                output.append(line).append("\n");
        }

        int exitCode = process.waitFor();
        stressTest.setEndTime(LocalDateTime.now());
        stressTest.setOutput(output.toString());
        stressTest.setStatus(String.valueOf(exitCode));
        stressRepository.save(stressTest);

        return "Exit Code: " + exitCode + "\nOutput:\n" + output;
    }

    public List<StressTest> getLogs() {
        return stressRepository.findAll();
    }
}
