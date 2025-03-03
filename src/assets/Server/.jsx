const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // Your MySQL username
  password: 'Ha1435691', // Your MySQL password
  database: 'netflix_clone'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Netflix Clone API!');
});

// Route to get all users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving users');
    } else {
      res.json(results);
    }
  });
});

// Route to create a new user
app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  
  connection.query(sql, [name, email, password], (err, result) => {
    if (err) {
      res.status(500).send('Error creating user');
    } else {
      res.status(201).send(`User created with ID: ${result.insertId}`);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
