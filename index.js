const inquirer = require('inquirer');
const db = require('./db/connections');

db.connect(err => {
    if (err) throw err;
    console.log('database connected');
    employeeTracker();
});

let employeeTracker = function() {
    
}