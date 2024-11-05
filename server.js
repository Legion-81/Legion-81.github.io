// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes for the HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation check (optional, improve as needed)
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required!');
  }

  // Process the form data (e.g., log to console, store in a database, etc.)
  console.log('Form Submission:', { name, email, message });

  // Respond to client with a success message
  res.send('<h1>Thank you for your message!</h1><p>I will get back to you soon.</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
