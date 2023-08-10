FROM maven:3.9.3-eclipse-temurin-20

WORKDIR /app
COPY . .
RUN mvn install

EXPOSE 8080
CMD ["mvn", "spring-boot:run"]