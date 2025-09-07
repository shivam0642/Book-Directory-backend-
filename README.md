**Overview**

The Book Directory App is a backend project that manages a collection of books. Users can perform CRUD operations (Create, Read, Update, Delete) on books via RESTful APIs. Each book stores details like title, author, genre, and year of publication.
This project functions as a mini-library backend, designed for efficient book management and easy extension.


**Tech Stack**

-Node.js & Express.js – REST API server

-MongoDB – Book data storage (NoSQL)

-Mongoose – Schema modeling & queries

-dotenv – Secure environment variables

-Postman – API testing

____________________________________________________________________________________________________________________________________________

**Features**

1.Add a Book: Add new books with title, author, genre, and year

2.Get All Books: Retrieve a complete book list from the database

3.Get Book by ID: Fetch details of a single book via its unique ID

4.Update Book: Modify existing book information

5.Delete Book: Remove books from the directory

_____________________________________________________________________________________________________________________________________________

**API Endpoints**

-POST /books – Add a new book

-GET /books – Fetch all books

-GET /books/:id – Get details of a single book

-PUT /books/:id – Update book details

-DELETE /books/:id – Delete a book

_____________________________________________________________________________________________________________________________________________

**Real-World Use Case**

1.This app serves as a foundation for:

2.Building library/inventory systems

3.Supporting user authentication (JWT)

4.User reviews/ratings (future extensions)

5.Organizing books by genre, author, or publication year

6.Adding borrowing functionality

____________________________________________________________________________________________________________________________________________
