const Administrator = require('../models/administrator');

module.exports.checkEmail = async (req, res, next) => {
  try {
    const emailExists = await Administrator.findOne({ email: req.body.email });  
    if (emailExists) {
      throw `User with ${req.body.email} already exists`;
    }
  } catch (error) {
    next(error)
  }
}