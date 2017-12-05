const request = require('request');
const bodyParser = require('body-parser');
const db = require('../models');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');


 function reviewKnife(req, res, next) {
	res.render('main');
}

function updateReview(req, res, next) {
	 db.Knife.findOne({_id: req.body.id}, function(err, updateReview) {
 		updateReview.name = req.body.name;
 		updateReview.rating = req.body.rating;
 		updateReview.review = req.body.review;
 		updateReview.save();
	 		});
	 };


module.exports = {
	reviewKnife: reviewKnife,
	updateReview: updateReview
};