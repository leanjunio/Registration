const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const administratorSchema = new Schema({
  email: String,
  employeeId: Number,
  password: String,
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('Administrator', administratorSchema);