const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Create and connect to the database
const db = new sqlite3.Database(':memory:');

// Create a table
db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');

  const stmt = db.prepare('INSERT INTO users VALUES (?, ?)');
  stmt.run(1, 'John Doe');
  stmt.run(2, 'Jane Doe');
  stmt.finalize();
});

// Fetch data from the database
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
