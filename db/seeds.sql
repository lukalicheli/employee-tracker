INSERT INTO department (dept_name)
VALUES ("IT"),
       ("Sales"),
       ("Marketing"),
       ("Accounting");

INSERT INTO deptRole (title, salary, department_id)
VALUES ("Hardware Technician"),
       ("Help Desk Support"),
       ("Sales Lead"),
       ("Salesperson"),
       ("Chief Marketing Officer"), 
       ("Creative Director"), 
       ("Bookkeeper"), 
       ("Accounting Manager");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luka", "Licheli", 1, NULL),
       ("Steve", "Brown", 2, 001),
       ("Gina", "Lopez", 3, 002),
       ("John", "Connor", 4, NULL), 
       ("Vero", "Martinez", 5, 001),
       ("Lucy", "Hortello", 6, 002), 
       ("Mike", "Minto", 7, 001), 
       ("Jason", "Valencia", 8, 002),  
