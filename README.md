# REST API

A RESTful API to manage libraries and the books associated with each of them

The tecnologies used were NodeJs, MySQL for the Database, Sequelize as the ORM, and PassportJs with JWT for the authentication.

## Installation & Run

```bash
# Clone this project
https://github.com/gonferreyra/REST-API-santex
```

```bash
# Install dependencies
cd REST-API-santex
npm install
npm install -g nodemon
```

Before running API server, you need to:

- create a Database in MySQL
- create a .env file ([dotenv
  ](https://www.npmjs.com/package/dotenv)) for your enviroment variables and set the following values. Note that you need to put your own values on all fields.

```go
PORT=8080
MYSQL_DATABASE_NAME='db_create_name'
MYSQL_DATABASE_USER='your_db_user'
MYSQL_PASSWORD='your_mysql_password'
JWT_PASSWORD='your_jwt_secret_pass'
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

To make this API the first step was to create the server, for which I used Classes and called it from the main app.js to run it

Each entity has its model, controller and service file. All business logic is handled in the service of each entity. To delete an individual library or book, it is done through a boolean property, to prevent the column from being permanently deleted from the database.

Through environment variables the port, name, username and password of the database and the key to encrypt the token are managed, and they were not uploaded to the folder.

The Auth was done with JSONWebToken using Passport.js as a middleware to authenticate the JWT.
