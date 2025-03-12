const express = require('express');
const schoolController = require('../controllers/schoolController');

const router = express.Router();

// Add School API
router.post('/addSchool', schoolController.addSchool);

// List Schools API
router.get('/listSchools', schoolController.listSchools);

module.exports = router;