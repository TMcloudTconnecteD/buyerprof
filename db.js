const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Change to your MySQL username if necessary
  password: '0022post.OFF@202212794',  // Change to your MySQL password
  database: 'form_data',  // Database name
  port: 3306  // Port (change if necessary)
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
