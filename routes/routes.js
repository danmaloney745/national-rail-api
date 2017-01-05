//Defualt Route to the Index Home Page

/* Require Express for the routing, and indexController to render the page */
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const usersController = require("../controllers/users");
const sessionsController = require("../controllers/sessions");
var cookieParser = require('cookie-parser');
const session = require('express-session');
const app = require("../app");
const jwt = require('jsonwebtoken');

app.use(cookieParser());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'spartasupersecretkey'
}));

router.route('/sessions')
    .post(sessionsController.create)
    .delete(sessionsController.delete);

router.route('/sessions/new')
    .get(sessionsController.new);

router.route('/register')
    .get(usersController.newUser)
    .post(usersController.createUser);

/* pass the Get request to the controller and show the homepage */
router.get("/", authCheck,indexController.showIndex);

module.exports = router;

function authCheck(req,res,next){
  if (!req.session.token) {
      res.redirect('/sessions/new');
  } else {
      let token = req.session.token;
      jwt.verify(token,"spartaToken", function (err, decoded){
            if (err){
                  res.redirect('/sessions/new');
            } else {
                  req.decoded = decoded;
                  next();
            }
      });
  }
}