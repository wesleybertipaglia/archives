# NerdBooks API

Welcome to the NerdBooks API repository! This Node.js API is built with Express, an ORM for database interaction, SQLite as the database, and it is deployed on Vercel. The API serves as a platform for managing and retrieving information about book choices popular among nerds, such as The Hobbit, The Lord of the Rings, Harry Potter, Clean Code, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Introduction

The NerdBooks API is designed to provide a simple and efficient way to manage information about books popular among nerds. It leverages Node.js, Express for routing, an ORM for database interactions, and SQLite as the database to store book data.

## Features

- CRUD operations for managing books
- RESTful API design
- Integration with an ORM for database interactions
- Deployment on Vercel for easy accessibility

## Getting Started

To get started with the NerdBooks API, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/wesleybertipaglia/nerdbooks-api
    ```

2. Navigate to the project directory:

    ```bash
    cd nerdbooks-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the database:

    Run database migrations to set up the SQLite database:

    ```bash
    npm run migrate
    ```

5. Start the server:

    ```bash
    npm start
    ```

    The API will be accessible at `http://localhost:3000`.

## API Endpoints

- `GET /books`: Retrieve a list of all books.
- `GET /books/:id`: Retrieve details of a specific book by ID.
- `POST /books`: Add a new book to the collection.
- `PUT /books/:id`: Update details of a specific book by ID.
- `DELETE /books/:id`: Remove a specific book by ID.

For detailed request and response examples, refer to the API documentation.

## Database Schema

The database schema includes a `books` table with columns like `id`, `title`, `author`, `genre`, `published_year`, etc. Refer to the database migration files for detailed information.

## Deployment

The NerdBooks API is deployed on Vercel, ensuring easy accessibility and scalability. Any changes pushed to the main branch will trigger automatic deployments.

## Contributing

If you have suggestions, improvements, or find any issues, feel free to open an issue or create a pull request. Contributions are welcome!

Happy nerdbook managing!
