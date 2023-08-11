# WebLib
Full stack web app for storing books. 

## To Run Web App 
1. Make sure docker is installed and running. 
2. Clone repository or download as zip. 
3. Go to root folder of ./WebLib/ and start the container with `docker-compose -p weblib up -d`. (first time creation will take a while) 
5. Go to `http://localhost:10101` on your browser (fully supported browsers are Chrome, Firefox, and Safari). 
6. Once finished exploring the features, stop the container with `docker-compose -p weblib stop` or remove them with `docker-compose -p weblib down -v`. 

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

Example: `http://localhost:10102/books/32` 
### Get Book(s) based on parameters and keywords 
> GET `http://localhost:10102/books?{param1}={value1}&{param2}={value2}&...` 

**Accepted parameters**
| Parameter | Value Type | Example | 
|-----------|------------|---------| 
| author | text | `http://localhost:10102/books?author=James` | 
| title | text | `http://localhost:10102/books?title=How` | 
| country | text | `http://localhost:10102/books?country=German` | 
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
