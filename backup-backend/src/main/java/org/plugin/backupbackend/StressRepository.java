package org.plugin.backupbackend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface StressRepository extends JpaRepository<StressTest, UUID> {
}
