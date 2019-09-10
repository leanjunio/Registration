const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const administratorSchema = new Schema({
  email: String,
  employeeId: Number,
  password: String
});

administratorSchema.pre('validate', (next) => {
  bcrypt.genSalt(10, (err, result) => {
    if (err)
      return next(err);
    else {
      this.password = bcrypt.hashSync(this.password, result);
        next();
    }
  });
});

module.exports = mongoose.model('Administrator', administratorSchema);