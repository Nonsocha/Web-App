
         const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (if needed)
// Uncomment the line below if you have other static files to serve
// app.use(express.static(__dirname));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Adjusted path
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});

