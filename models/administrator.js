var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the administratorSchema
var administratorSchema = new Schema({
    EmployeeID: String,
    EmployeePassword: String
});

// make this schema available to the Node application
module.exports = administratorSchema;