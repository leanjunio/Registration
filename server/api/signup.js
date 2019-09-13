const router = require('express').Router();
const bodyParser = require('body-parser');

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
router.post('/signup', middlewares.checkEmail, (req, res) => {
  
  const administrator = {};
  
  // Validate data prior to creating the Administrator
  const { error } = signupValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  // Generate an id and check if the ID has already been used
  // If the generated ID is already used, generate another one until
  let validId = false;

  while (!validId) {
    let generatedId = Math.floor(1000 + Math.random() * 9000);
    let empIdExists = await Administrator.findOne({ employeedId: generatedId });
    
    if (!empIdExists) {
      administrator.employeeId = generatedId;
      validId = true;
    }
  }

  administrator.email = req.body.email;
  administrator.password = req.body.password;
});

module.exports = router;