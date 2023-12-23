const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  from: String,
  subject: String,
  para: String,
  category: String,
  date: String,
  time: String,
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
