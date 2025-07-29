FROM openjdk:17-jdk-alpine

# Install the stress command
RUN apk update && apk add --no-cache stress

# Set working directory
WORKDIR /app

# Copy the Spring Boot JAR
COPY target/backup-backend-0.0.1.jar app.jar

# Expose port
EXPOSE 8080

# Run the Spring Boot app
CMD ["java", "-jar", "app.jar"]
