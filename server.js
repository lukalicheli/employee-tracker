const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

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
          viewEmployees();
          break
        case "View All Roles":
          addEmployee();
          break
        case "View All Employees":
          updateEmployee();
          break
        case "Add a Department":
          viewJobs();
          break
        case "Add a Role":
          viewDepartments();
          break
        case "Add an Employee":
          addJob();
          break
        case "Update Employee Role":
          addDepartment();
          break
        case "Quit":
          quit();
          break
      }
    });
}

