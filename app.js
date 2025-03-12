const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
const PORT = process.env.DB_PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', schoolRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;