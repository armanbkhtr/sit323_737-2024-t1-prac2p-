Step 1: Setting Up Your Project
1. Install Node.js: Ensure Node.js is installed on your
system. You can download it from the official Node.js
website and follow the installation instructions.
2. Create a New Project Directory: Create a
new directory for your Node.js project. You can do this
using the terminal or command prompt:
 ```bash
 mkdir node-web-server
 cd node-web-server
 ```
3. Initialize a New Node.js Project:Initialize a
new Node.js project using npm (Node Package Manager):
 ```bash
 npm init -y
 ```
4. Install Express: Install Express framework in
your project. Express will help us create our web server
and handle HTTP requests easily.
 ```bash
 npm install express
 ```
Step 2: Create Your HTML File
1. Create an HTML file: Create a new file named
`index.html` in your project directory (`node-webserver`) and add your HTML content. For example:
 ```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=devicewidth, initial-scale=1.0">
 <title>Simple Web Page</title>
 </head>
 <body>
 <h1>Hello, World!</h1>
 <p>This is a simple HTML page served by a Node.js
web server.</p>
 </body>
 </html>
 ```
Step 3: Create Your Express Web Server
1. Create a Server File: Create a new file named
`server.js` in your project directory (`node-web-server`).
2. Require Express: In `server.js`, require the
Express module and create an Express application
instance:
 ```javascript
 const express = require('express');
 const app = express();
 ```
3. Define Route to Serve HTML File: Define
a route using Express to serve your HTML file when a user
accesses the root URL (`/`) of your server:
 ```javascript
 app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.html');
 });
 ```
4. Start the Server: Start the Express server and
listen on a specified port (e.g., 3000):
 ```javascript
 const PORT = 3000;
 app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
 });
 ```
Step 4: Run Your Node.js Web Server
1. Run the Server: Open a terminal or command
prompt in your project directory (`node-web-server`) and
run the server using Node.js:
 ```bash
 node server.js
 ```
2. Access Your Web Page:Open your web
browser and navigate to `http://localhost:3000` (or the
port you specified). You should see your simple HTML
page served by the Node.js web server.