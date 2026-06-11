// Importing core modules
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

// Create a simple server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my Node.js server!');
  } else if (req.url === '/about') {
    res.end('This is the about page');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Get OS info just to use the os module
console.log(`System Uptime: ${os.uptime()} seconds`);
console.log(`Home Directory: ${os.homedir()}`);

// Start the server
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});