const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const staticsController = require('../controllers/statics');
const knifeController = require('../controllers/knives');



router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Define db
var db = require('../models');

// Hard code review
var reviews = [
  {
    Name: "Bowie",
    Rating: 5,
    Review: "Awesome for hiking and hunting!"
  },
];


/**********
 * KNIVES *
 **********/


// GET main
router.get('/detail', function (req, res) {
  res.render('../detail.html' , { root : __dirname});
});


// GET form
router.get('/detail', function (req, res) {
  res.render('../views/form.ejs' , { root : __dirname});
});



// ajax to express route to mongo to the database
router.post("/form", function(req,res) {
  Knife.create({name: req.body.name, title: req.body.title});
});



// POST new review
router.post("/detail", function(req, res) {
    let newReview = new db.Review({
        name: req.body.name,
        rating: req.body.rating,
        review: req.body.review,
    });
    newReview.save(function(err, review) {
        if (err) console.log(err);
        res.json(review);
    });
});


// GET one review
router.get('/user/reviews/:id', function (req, res) {
  db.Review.findOne({_id: req.params.id}, function(err, review) {
    if (err) console.log(err);
    res.json(review);
  });
});

// EDIT review
 router.route('/detail/reviews/:id')
  .put(reviewController.updateReview)


// DELETE one review
router.delete('/detail/reviews/:id', function(req, res) {
  let reviewId = req.params.id;
  db.Review.findOneAndRemove({_id: reviewId}, function(err, deletedReview) {
    res.json(deletedReview);
  });
});
  
module.exports = router;