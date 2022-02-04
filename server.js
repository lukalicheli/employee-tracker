
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "departments_db"
});

function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role", "Quit"],
        name: "option"
      }
    ])
    .then((answers) => {
      switch (answers.option) {
        case "View All Departments":
          viewDepartments();
          break
        case "View All Roles":
          viewRoles();
          break
        case "View All Employees":
          viewEmployees();
          break
        case "Add a Department":
          addDepartment();
          break
        case "Add a Role":
          addRole();
          break
        case "Add an Employee":
          addEmployee();
          break
        case "Update Employee Role":
          updateEmployeeRole();
          break
        case "Quit":
          quit();
          break
      }
    }).catch(err => {
      console.log(err);
    });
};

const viewDepartments = () => {
  db.query('SELECT * FROM department', (err, viewAllDept) => {
    if (err) {
      console.log(err);
    } else {
      console.table(viewAllDept);
    }
    startApp();
  })
};

const viewRoles = () => {
  db.query('SELECT * FROM deptRole', (err, viewAllRoles) => {
    if (err) {
      console.log(err);
    } else {
      console.table(viewAllRoles);
    }
    startApp();
  })
};

const viewEmployees = () => {
  db.query('SELECT * FROM employee', (err, viewAllEmployees) => {
    if (err) {
      console.log(err);
    } else {
      console.table(viewAllEmployees);
    }
    startApp();
  })
};

const addDepartment = () => {
  inquirer
    .prompt([{
      type: "input",
      name: "newDepartment",
      message: "Enter new department:",
    }])
    .then((answers) => {
      db.query(`INSERT INTO department(dept_name) VALUES ('${answers.newDepartment}')`, (err, res) => {
        if (err) {
          throw err
        } else {
          console.table(res)
        }
        startApp();
      });
    });
};

const addRole = () => {
  inquirer
    .prompt([{
        type: "input",
        name: "newRole",
        message: "Enter title",
      },
      {
        type: "input",
        name: "newSalary",
        message: "Enter salary",
      },
      {
        type: "input",
        name: "newDeptId",
        message: "Enter Department ID:",
      }
    ])
    .then((answers) => {
      db.query(`INSERT INTO deptRole(title, salary, department_id) VALUES ('${answers.newRole}', '${answers.newSalary}', '${answers.newDeptId}')`, (err, res) => {
        if (err) {
          throw err
        } else {
          console.table(res)
        }
        startApp();
      });
    });
};

const addEmployee = () => {
  inquirer
    .prompt([{
        type: "input",
        name: "firstName",
        message: "Enter first name:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter last name:",
      },
      {
        type: "input",
        name: "newDeptRole",
        message: "Enter role ID:",
      },
      {
        type: "input",
        name: "newManager",
        message: "Enter manager ID:",
      }
    ])
    .then((answers) => {
      db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.newDeptRole}', '${answers.newManager}')`, (err, res) => {
        if (err) {
          throw err
        } else {
          console.table(res)
        }
        startApp();
      });
    });
};
const updateEmployeeRole = () => {
  db.query('SELECT * FROM employee', (err, res) => {
    if (err) {
      throw err
    } else {
      console.table(res)
    }
    inquirer
      .prompt([{
          type: "input",
          name: "employeeUpdate",
          message: "Enter employee ID to make changes: ",
        },
        {
          type: "input",
          name: "newDeptRole",
          message: "Enter new job ID: ",
        },
      ])
      .then((answers) => {
        db.query(`UPDATE employee SET role_id = ${answers.newDeptRole} WHERE id = ${answers.employeeUpdate}`);
        if (err) {
          throw err
        } else {
        }
        startApp();
      });
  })
};

const quit = () => {
  process.exit(1);
};

startApp();