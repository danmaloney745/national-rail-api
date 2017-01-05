/*========================== Requires ====================*/

var express = require('express');
const app = module.exports = express();
var layouts = require('express-ejs-layouts');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
const routes = require("./routes/routes");
const searchRoutes = require("./routes/search");
var User = require("./models/user")

/*========================== Middleware ====================*/
// add support for cookies
app.use(cookieParser());

// add support for sessions
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'spartasupersecretkey'
}));

// connect to the database
mongoose.connect('mongodb://localhost/departures');


//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

//view options
app.set('view engine', 'ejs');

// load logged in user
app.use(function(req,res,next) {

  // no user id? just move on
  if(!req.session.user) {
     res.locals.user = false;
    next();
  } else {

    // load the user with the ID in the session
    User.findById(req.session.user , function(err, user){

      if(user) {
        // add the user to the request object
        req.user = user;
        // add it to locals so we can use it in all templates
        res.locals.user = user;
      } else {
        // couldn't find it... that's weird. clear the session
        req.session.user = null;
      }

      next(err);
    });
  }
});

app.use(flash());

app.use(layouts);

//Routes 
app.use(routes);

/*==========================Port Info ====================*/
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port 3000 ${process.env.PORT || 3000}`);
});