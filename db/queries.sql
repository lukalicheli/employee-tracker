SELECT *
FROM deptRole
JOIN department ON deptRole.department_id = department.id;

SELECT *
FROM employee
JOIN deptRole ON employee.role_id = deptRole.id;

SELECT *
FROM employee
JOIN employee ON employee.manager_id = employee.id;