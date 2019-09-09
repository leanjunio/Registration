const router = require('express').Router();
const bodyParser = require('body-parser');

const User = require('../models/user');
const Employee = require('../models/employee');

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
 * 
 * This route should:
 * - look at the employees collection to check for the employeeId?
 */
router.post('/signup', (req, res) => {
  const validData = req.body.firstName && req.body.lastName && req.body.email && req.body.password && req.body.empId;
  if (validData) {
    const userSignupData = {
      empId: req.body.empId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }

    // check if the user already exists
    User.findOne({
      firstName: userSignupData.firstName,
      lastName: userSignupData.lastName,
      lastName: userSignupData.lastName,
    }, (err, user) => {
      if (user) {
        console.log(`User already signed up`);
        res.redirect('./login');
      }
      else {
        if (err) {
          throw err;
        } else {
          // TODO: save information into another table from the database
          User.create(userSignupData, (err, user) => {
            if (err)
              throw err;
            else {
              // TODO: Redirect to correct route when signup is successful
            }
          });
        }
      }
    });
  } else {
    res.send(`Missing information...`);
  }
});

module.exports = router;