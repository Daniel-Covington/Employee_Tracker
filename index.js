const { viewAllDepartments, viewAllRoles, viewAllEmployees, addADepartment, addARole, addAnEmployee, updateEmployeeRole, quit } = require('./server.js');
const inquirer = require("inquirer");
const art = require('ascii-art');

function handleUserInput (data) {
    const input = data.user_actions;
    switch (input) {
        case "View All Departments":
            viewAllDepartments(init);
            return;
        case "View All Roles":
            viewAllRoles(init);
            return;
        case "View All Employees":
            viewAllEmployees(init);
            return;
        case "Add A Department":
            addADepartment(init);
            return;
        case "Add A Role":
            addARole(init);
            return;
        case "Add An Employee": 
            addAnEmployee(init);
            return;
        case "Update An Employee Role":
            updateEmployeeRole(init);
            return;
        case "Quit":
            quit(init);
            return;
    }
}
