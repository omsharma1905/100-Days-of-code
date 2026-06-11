// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Middleware example
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Basic Routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>This is served using Express</p>');
});

app.get('/json', (req, res) => {
  res.json({ name: 'CodeHelp', mission: 'Educate Devs' });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});