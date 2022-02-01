DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE books_db;

CREATE TABLE favorite_books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL
);
