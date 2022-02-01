DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30)
);

CREATE TABLE deptRole (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES deptRole(id),
    manager_id INT NOT NULL, 
    FOREIGN KEY (manager_id)
    REFERENCES employee(manager_id)
);
