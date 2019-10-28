console.log('It works!')
const express = require('express');

const server = express(); // creates a server

// request route handlers
server.get('/', (req, res) => {
  res.send('Hello Node 23');
});

// listen for requests in a particular port on localhost
const port = 8000;
server.listen(port, () => console.log('\n=== API on port 8000 ===\n'));