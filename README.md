# REST API

A RESTful API to manage libraries and the books associated with each of them

The tecnologies used were NodeJs, MySQL for the Database, Sequelize as the ORM, and PassportJs with JWT for the authentication.

## Installation & Run

```bash
# Download this project
go get PONER DIRECCION AL PROYECTO
```

```bash
# Install dependencies
cd 'folder_path'
npm install
npm install -g nodemon
```

Before running API server, you should set the enviroment variables config by creating a new .env file and seting your values

- [dotenv
  ](https://www.npmjs.com/package/dotenv)

```go
PORT=8080
MYSQL_DATABASE_NAME='your_db_name'
MYSQL_DATABASE_USER='your_db_user'
MYSQL_PASSWORD='your_mysql_password'
JWT_PASSWORD='your_jwt_password'
```

To start the server:

```bash
# Run
nodemon app

# API Endpoint : localhost:8080
```

## API

#### /library

- `GET` : Get all libraries

#### /library/:id

- `GET` : Get library by id
- `PUT` : Update a library
- `DELETE` : Delete a library

#### /library/new

- `POST` : Create a new library

#### /book

- `GET` : Get all books

#### /book/:id

- `GET` : Get book by id
- `PUT` : Update a book
- `DELETE` : Delete a book

#### /book/new

- `POST` : Create a new book

#### /user

- `GET` : Get all users

#### /user/new

- `POST` : Create a new user

#### /book/login

- `POST` : User login with userName and password

## Process

To create this API the first step was to create the server wich i used a class and call it on the app.js file.

Every entity has his model, controller and service file. All the business logic is always on the service file of each entity. On a side note, the delete of individual library and book was made through a boolean property, to prevent the column to be errase permanently from the database.

The keys and password are stored on enviroment variable file and they are not uploaded in the server.

The Auth was made with JSONWebToken, using Passport.js as a middleware to authenticate the JWT, having the token a session duration of 24hs.
