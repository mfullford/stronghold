var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reviews");

module.exports.Knife = require('./knife.js');