// run mongoose to make a database
var mongoose = require("mongoose");
// create schema variable
var Schema = mongoose.Schema;

// Create hike schema
let knifeSchema = new Schema({
	name: String
});

//make the schema a model
let Knife = mongoose.model('Knife', knifeSchema);

//export the Hike model
module.exports = Knife;