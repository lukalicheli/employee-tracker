INSERT INTO department (id, dept_name)
VALUES (1, "IT"),
       (2, "Sales"),
       (3, "Marketing"),
       (4, "Accounting");

INSERT INTO deptRole (title, salary, department_id)
VALUES ("Hardware Technician", 50000, 1),
       ("Help Desk Support", 40000, 2),
       ("Sales Lead", 70000, 3),
       ("Salesperson", 60000, 4),
       ("Chief Marketing Officer", 80000, 1),  
       ("Creative Director", 70000, 2), 
       ("Bookkeeper", 30000, 3), 
       ("Accounting Manager", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luka", "Licheli", 1, 1),
       ("Steve", "Brown", 2, 1),
       ("Gina", "Lopez", 3, 1),
       ("John", "Connor", 4, 2), 
       ("Vero", "Martinez", 5, 1),
       ("Lucy", "Hortello", 6, 2), 
       ("Mike", "Minto", 7, 2), 
       ("Jason", "Valencia", 8, 1);
