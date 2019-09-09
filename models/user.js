const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * All users must have:
 * firstName: String
 * lastName: String,
 * email: String,
 * password: String
 */

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection: 'administrators'
});

UserSchema.pre('validate', (next) => {
  bcrypt.genSalt(10, (err, result) => {
    if (err)
      return next(err);
    else {
      this.password = bcrypt.hashSync(this.password, result);
        next();
    }
  })
});

module.exports = mongoose.model('User', UserSchema);