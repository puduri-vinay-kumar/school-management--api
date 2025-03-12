const db = require('../config/db');

const School = {
    addSchool: (name, address, latitude, longitude, callback) => {
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        db.query(query, [name, address, latitude, longitude], callback);
    },

    getAllSchools: (callback) => {
        const query = 'SELECT * FROM schools';
        db.query(query, callback);
    }
};

module.exports = School;