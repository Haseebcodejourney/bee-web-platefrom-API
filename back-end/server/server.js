const mysql = require('mysql');
const express = require('express');

const app = express();
const PORT = 3000; // Port for the server

// MySQL connection details
const db = mysql.createConnection({
    host: 'localhost',
    user: 'aiiovdft_bees', // Your database username
    password: '',          // Your database password
    database: 'aiiovdft_bees', // Your database name
});

// Check SQL connection
db.connect((err) => {
    if (err) {
        console.error('Failed to connect to the database:', err.message);
    } else {
        console.log('Connected to the MySQL database!');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
