const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5050;
const HOST = process.env.HOST || 'app.berkompeten.id';

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
}); 
