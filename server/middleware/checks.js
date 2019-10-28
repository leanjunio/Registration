const Administrator = require('../models/administrator');

module.exports.checkEmail = async (req, res, next) => {
  const emailExists = await Administrator.findOne({ email: req.body.email });  
  if (emailExists)
    res.status(400).send({ message: `User with ${req.body.email} already exists` })
}