// Server

var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(express.static('public'));
var mongoose = require('mongoose');
var flash = require('connect-flash');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var session = require('express-session');


// Serve static files from public folder
app.use(express.static(__dirname + '/controllers'));

// // Set up ejs
app.set('views', __dirname + "/views");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());




/************
 * DATABASE *
 ************/

var db = require('./models');


/************
 * Routes *
 ************/

// // Require all the routes
let routes = require('./config/routes');
app.use(routes);



/**********
 * SERVER *
 **********/

// Listening at 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening at http://localhost:3000/');
});