const router = require('express').Router();
const bodyParser = require('body-parser');

const User = require('../models/user');
const Employee = require('../models/employee');
const Administrator = require('../models/administrator');

bodyParser.json();
bodyParser.urlencoded({ extended: true });

/**
 * Handles incoming requests regarding administrator sign up.
 * 
 * NOTE: Email and password will be the primary source of authentication
 * 
 * When invoked, this route should:
 * - Check whether the email already exists within the administrator collection
 */
router.post('/signup', (req, res) => {
  const validData = req.body.email && req.body.password;
  if (validData) {

    // TODO: Find a mechanism to generate an employeeId that is 4 digits long and is unique in reference to the ones in the collection
    const userSignupData = {
      email: req.body.email,
      password: req.body.password
    }

    // check if the email already exists in administrator collection
    let query = Administrator.where({ email: userSignupData.email });

    query.findOne((err, administrator) => {
      if (err) throw err;

      // If an administrator is found, the user is already registered therefore redirect to correct login
      if (administrator) {
        console.log(`Administrator already signed up`);
        res.redirect('./login');
      } else {
        Administrator.create(userSignupData, (err, admin) => {
          if (err) throw err;
          else {
            // TODO: Redirect to success route (dashboard??)
          }
        });
      }
    });
  } else {
    res.send(`Missing information...`);
  }
});

module.exports = router;