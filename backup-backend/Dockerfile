FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY target/backup-backend-0.0.1.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]