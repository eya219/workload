package org.plugin.backupbackend;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stress")
public class StressController {

    private final StressService stressService;

    public StressController(StressService stressService) {
        this.stressService = stressService;
    }

    @GetMapping
    public ResponseEntity<List<StressTest>> getLogs() {
        try {
            return ResponseEntity.ok(stressService.getLogs());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/cpu")
    public String stressCpu(@RequestParam int workers, @RequestParam int timeout) {
        try {
            return stressService.stress("stress", "--cpu", String.valueOf(workers), "--timeout", String.valueOf(timeout));
        } catch (Exception e) {
            return "CPU Stress Error: " + e.getMessage();
        }
    }

    @PostMapping("/ram")
    public String stressRam(@RequestParam int workers, @RequestParam String bytes, @RequestParam int timeout) {
        try {
            return stressService.stress("stress", "--vm", String.valueOf(workers), "--vm-bytes", bytes, "--timeout", String.valueOf(timeout));
        } catch (Exception e) {
            return "RAM Stress Error: " + e.getMessage();
        }
    }

    @PostMapping("/disk")
    public String stressDisk(@RequestParam int workers, @RequestParam String bytes, @RequestParam int timeout) {
        try {
            return stressService.stress("stress", "--hdd", String.valueOf(workers), "--hdd-bytes", bytes, "--timeout", String.valueOf(timeout));
        } catch (Exception e) {
            return "Disk Stress Error: " + e.getMessage();
        }
    }
}
