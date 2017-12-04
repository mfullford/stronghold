var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikes");

module.exports.Knife = require('./knife.js');