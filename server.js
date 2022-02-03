const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");



const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
        name: "Start"
      }
    ])
    .then((choice) => {
      switch (choice.startApp) {
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
    });
}

const viewDepartments = () => {
  db.query('SELECT * from department', (err, res) => {
    if (err) {
      throw err
    } else {
      consoleTable(res)
    }
    startApp();
  })
}

startApp();