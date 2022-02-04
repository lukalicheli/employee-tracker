
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
        // case "Add a Role":
        //   addRole();
        //   break
        // case "Add an Employee":
        //   addEmployee();
        //   break
        // case "Update Employee Role":
        //   updateEmployeeRole();
        //   break
        // case "Quit":
        //   quit();
        //   break
      }
    }).catch(err => {
      console.log(err);
    });
}

const viewDepartments = () => {
  db.query('SELECT * from department', (err, viewAllDept) => {
    if (err) {
      console.log(err);
    } else {
      console.table(viewAllDept);
    }
    startApp();
  })
}

const viewRoles = () => {
  db.query('SELECT * from deptRole', (err, viewAllRoles) => {
    if (err) {
      console.log(err);
    } else {
      console.table(viewAllRoles);
    }
    startApp();
  })
}

const viewEmployees = () => {
  db.query('SELECT * from employee', (err, viewAllEmployees) => {
    if (err) {
      console.log(err);
    } else {
      console.table(viewAllEmployees);
    }
    startApp();
  })
}

const addDepartment = () => {
  inquirer
    .prompt([{
      type: "input",
      name: "newDepartment",
      message: "Enter new department:",
    }])
    .then((answers) => {
      db.query(`INSERT INTO department(dept_name) values ('${answers.newDepartment}')`, (err, res) => {
        if (err) {
          throw err
        } else {
          console.table(res)
        }
        startApp();
      });
    });
}
// addDepartment();
// addRole();
// addEmployee();
// updateEmployeeRole();

startApp();