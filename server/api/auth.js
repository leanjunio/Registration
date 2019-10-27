const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { signupValidation } = require('../helpers/validation');
const Administrator = require('../models/administrator');
const middlewares = require('../middleware/checks');

/**
 * This route takes a req.body consisting of { email, password }
 * Handles incoming requests regarding administrator sign up.
 * 
 * NOTE: Email and password will be the primary source of authentication
 * 
 * When invoked, this route should:
 * - Check whether the email already exists within the administrator collection
 */
router.post('/signup', 
  middlewares.checkEmail, 
  async (req, res) => {
  
  const administrator = {};
  
  // Validate data prior to creating the Administrator
  const { error } = signupValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  // Generate an id and check if the ID has already been used
  // If the generated ID is already used, generate another one until
  let validId = false;

  // Keep generating an employeeId until its unique
  while (!validId) {
    let generatedId = Math.floor(1000 + Math.random() * 9000);
    let empIdExists = await Administrator.findOne({ employeeId: generatedId });
    
    if (!empIdExists) {
      administrator.employeeId = generatedId;
      validId = true;
    }
  }
  
  // Assign email and hashed password to object
  administrator.email = req.body.email;

  // Hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      administrator.password = hash;
    }); 
  });

  try {
    const salt = await bcrypt.genSalt(10);
    administrator.password = await bcrypt.hash(req.body.password, salt);
  } catch (error) {
    res.status(400).send(error);
  }

  // Create a new administrator
  const admin = new Administrator({
    email: administrator.email,
    password: administrator.password,
    employeeId: administrator.employeeId
  });

  // Attempt to save the created user to DB
  try {
    const savedAdmin = await admin.save();
    res.send(savedAdmin);
  } catch (error) {
    res.status(400).send(error)    ;
  }
});

module.exports = router;