const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '120803',
    databnase: 'employee-tracker-db'
});

module.exports = db;