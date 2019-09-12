const Administrator = require('../models/administrator');

module.exports.checkEmail = async (req, res, next) => {
  const emailExists = await Administrator.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(400).send(`A user with email: ${req.body.email} already exists`);
  next();
}