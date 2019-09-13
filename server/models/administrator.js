const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const administratorSchema = new Schema({
  email: String,
  employeeId: Number,
  password: String
});

module.exports = mongoose.model('Administrator', administratorSchema);