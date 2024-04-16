// Import the Express module
const express = require('express');
const app = express();
const port = 3000; // You can use any port number you prefer

// Define a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
