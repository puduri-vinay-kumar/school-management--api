const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'mysql-273a70ab-vinaykumarpuduri10-573d.h.aivencloud.com',
    user: 'avnadmin', // Replace with your MySQL username
    password: 'AVNS_atY1EVF2W7VjOezhpaO', // Replace with your MySQL password
    database: 'school_management',
    port: 23823
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;