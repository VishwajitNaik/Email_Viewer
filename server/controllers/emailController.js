const Email = require('../models/Email');

exports.getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.json(emails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
