const School = require('../models/schoolModel');
const calculateDistance = require('../utils/distanceCalculator');

const schoolController = {
    addSchool: (req, res) => {
        const { name, address, latitude, longitude } = req.body;

        // Input Validation
        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        School.addSchool(name, address, latitude, longitude, (err, result) => {
            if (err) {
                console.error('Error adding school:', err);
                return res.status(500).json({ error: 'Failed to add school' });
            }
            res.status(201).json({ message: 'School added successfully', id: result.insertId });
        });
    },

    listSchools: (req, res) => {
        const { latitude, longitude } = req.query;

        // Input Validation
        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        School.getAllSchools((err, results) => {
            if (err) {
                console.error('Error fetching schools:', err);
                return res.status(500).json({ error: 'Failed to fetch schools' });
            }

            // Calculate distance for each school
            const schoolsWithDistance = results.map(school => {
                const distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
                return { ...school, distance };
            });

            // Sort schools by distance
            schoolsWithDistance.sort((a, b) => a.distance - b.distance);

            res.status(200).json(schoolsWithDistance);
        });
    }
};

module.exports = schoolController;