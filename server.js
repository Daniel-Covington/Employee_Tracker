const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Maverick2022!",
    database: "employee_db",
  },
  console.log('Connected to the employee_db database.')
);