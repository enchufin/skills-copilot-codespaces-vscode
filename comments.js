// Create web server
// Create a new web server using the express module. This server will listen on port 3000 and serve the files in the public directory.
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});