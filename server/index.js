// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const emailController = require('./controllers/emailController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Define routes here
app.get('/api/emails', emailController.getAllEmails);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
