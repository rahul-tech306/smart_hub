const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname,)));



// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'select opinion-3.html'));
});
app.get('/worker', (req, res) => {
  res.sendFile(path.join(__dirname,'sel_prof.html'));
});
app.get('/customer', (req, res) => {
  res.sendFile(path.join(__dirname,'customer select.html'));
});


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});