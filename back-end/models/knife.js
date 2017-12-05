// run mongoose to make a database
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let reviewSchema = new Schema({
	name: String,
	rating: Number,
	review: String
});

let Review = mongoose.model('Review', reviewSchema);


module.exports = Review;