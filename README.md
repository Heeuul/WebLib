# WebLib
Full stack web app for storing books. 

## To Run Web App 
**Prerequisite**: Make sure docker is installed and running. 
1. Clone repository or download as zip.
2. Go to root folder of `./WebLib/` and start the container with `docker-compose -p weblib up -d`. First time creation will take a while. 
3. Go to `http://localhost:10101` on your browser. Fully supported browsers are Chrome, Firefox, and Safari.
4. Once finished exploring the features, stop the container with `docker-compose -p weblib stop` or remove them with `docker-compose -p weblib down -v`. 

## RESTful API Operations 
You can perform RESTful API operations on `http://localhost:10102/books` (e.g., using Postman or Axios) when the container is running. 

### Create a single new Book 
> POST `http://localhost:10102/books/new` 
### Create multiple new Books (expects an array) 
> POST `http://localhost:10102/books/newlist` 
### Update a single Book 
> PUT `http://localhost:10102/books/{bookID}` 
### Delete a single Book 
> DELETE `http://localhost:10102/books/{bookID}` 
### Get all Books 
> GET `http://localhost:10102/books` 
### Get a single Book by ID 
> GET `http://localhost:10102/books/{bookID}` 
### Get Book(s) based on parameters and keywords 
> GET `http://localhost:10102/books?{param1}={value1}&{param2}={value2}&...` 

**Accepted parameters**
| Parameter | Value Type | Example | 
|-----------|------------|---------| 
| author | text | `http://localhost:10102/books?author=James` | 
| title | text | `http://localhost:10102/books?title=How` | 
| country | text | `http://localhost:10102/books?country=Nigeria` | 
| language | text | `http://localhost:10102/books?language=French` | 
| link | text | `http://localhost:10102/books?link=amazon` | 
| pages | number | `http://localhost:10102/books?pages=200` | 
| year | text | `http://localhost:10102/books?year=2000` | 
| isbn | text | `http://localhost:10102/books?isbn=13` | 
| any | - | `http://localhost:10102/books?any` | 

## Tech Stack 
### Frontend 
- **Javascript**: programming language 
- **NPM**: build & dependency tool for JavaScript 
- **ReactJS**: web application framework 
- **MaterialUI**: layout & design component 
### Backend 
- **Java**: programming language 
- **Maven**: build & dependency tool for Java 
- **Spring Boot**: web service framework 
- **JPA**: interface to manage database using Java object 
- **MySQL**: relational SQL database 

## Troubleshooting 
### Ports 
Ports `10101`, `10102`, and `10103` are expected to be free and unused on your local network. 
In case they are not free, you can change to desired port(s) at `./WebLib/docker.compose.yml`. 

An example if the new ports are `20437`, `57091`, and `9268` respectively (the red lines are replaced by green ones): 
```diff
services:
  front_react:
    ...
    ports:
-      - 10101:3000
+      - 20437:3000
    ... 
  back_springboot:
    ...
    ports:
-      - 10102:8080
+      - 57091:8080
    ... 
  db_mysql:
    ...
    ports:
-      - 10103:3306
+      - 9268:3306
    ... 
```

### Website error 
> e.data.startsWith() does not exist  

This means that the web app framework (ReactJS) does not support the current browser. Please try to access the site with a different browser. Fully supported browsers are Chrome, Firefox, and Safari. 

> unable to perform fetch() 

This means that the network ports for backend are already in use by other applcations. Please replace the ports as shown above in the *Troubleshooting - Ports* section. 
