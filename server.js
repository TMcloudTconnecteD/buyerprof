// server.js - backend (Node.js)
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Database setup (example)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0022post.OFF@202212794',
    database: 'form_data'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handling form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Error saving data.');
        }
        res.send('Form data saved successfully');
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
