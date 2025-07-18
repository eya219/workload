package org.plugin.backupbackend;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@Service
public class StressService {

    public String stress(String... command) throws Exception {
        ProcessBuilder pb = new ProcessBuilder(command);
        pb.redirectErrorStream(true);
        Process process = pb.start();

        StringBuilder output = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
            String line;
            while ((line = reader.readLine()) != null)
                output.append(line).append("\n");
        }

        int exitCode = process.waitFor();
        return "Exit Code: " + exitCode + "\nOutput:\n" + output.toString();
    }
}
