const mysql = require('mysql12');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '120803',
    databnase: 'employee-tracker-db'
});

module.exports = db;