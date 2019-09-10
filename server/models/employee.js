const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeId: String,
  firstName: String,
  lastName: String,
  addressStreet: String,
  addressState: String,
  addressCity: String,
  addressZip: String,
  phoneNum: String,
  extension: Number,
  position: {
    positionName: String,
    positionDescription: String,
    positionBaseSalary: Number
  }
}, {
  collection: 'employees'
});

module.exports = mongoose.model('Employee', employeeSchema);