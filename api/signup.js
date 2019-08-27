const router = require('express').Router();
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/signup', (req, res) => {

  // basic check for required information
  const dataCheck = req.body.firstName && req.body.lastName && req.body.email && req.body.password && req.body.birthday;
  if (dataCheck) {
    const userSignupData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday
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