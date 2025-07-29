# Use Debian-based image
FROM openjdk:17-jdk-slim

# Install stress using apt
RUN apt-get update && \
    apt-get install -y stress && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy your Spring Boot JAR file
COPY target/backup-backend-0.0.1.jar app.jar

# Expose the port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
