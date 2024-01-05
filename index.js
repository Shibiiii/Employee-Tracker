const inquirer = require('inquirer');
const db = require('./db/connections');

db.connect(err => {
    if (err) throw err;
    console.log('database connected');
    employeeTracker();
});

var employeeTracker = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View All Department', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Log Out']
    }]).then((answers) => {
        if (answers.prompt === 'View All Department') {
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Departments: ");
                console.table(result);
            employeeTracker();
            });
        } else if (answers.prompt === 'View All Roles') {
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) throw err;
                console.log("Viewing All Roles: ");
                console.table(result);
            employeeTracker();
            });
        } else if (amswers.prompt === 'View All Employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) throw err;
                console.log('Viewing All Employees');
                console.table(result);
                employeeTracker()
            });
            
        }
    })
};