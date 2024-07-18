const express = import('express');
const mysql = import('mysql');
const app = express();
const port = 3000;

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Wteamred900',
  database: 'intern'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submissions
app.post('/', (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO internal (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.status(500).send('Error submitting form');
      return;
    }
    console.log('Form data inserted successfully');
    res.status(200).send('Form submitted successfully');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});