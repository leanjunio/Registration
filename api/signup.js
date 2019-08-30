const router = require('express').Router();
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

bodyParser.json();
bodyParser.urlencoded({ extended: true });

/**
 * Types for all the requested parameters:
 * firstName: String
 * lastName: String,
 * email: String,
 * password: String,
 * 
 * Note: It is best to use HTML validations to ensure that the data is validated prior to checking here
 */
router.post('/signup', (req, res) => {
  const dataCheck = req.body.firstName && req.body.lastName && req.body.email && req.body.password && req.body.empId;
  if (dataCheck) {
    const userSignupData = {
      empId: req.body.empId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }

    // Hashing password
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        throw err;
      } else {
        userSignupData.password = hash
      }
    });

    // TODO: save information into another table from the database
  } else {
    res.send(`Missing information...`);
  }
});