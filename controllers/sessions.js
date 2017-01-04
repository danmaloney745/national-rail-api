var User = require('../models/user');
const hash = require('password-hash');
const jwt = require('jsonwebtoken');

function newSession(req,res) {
    res.render('sessions/new', {title:"Login"});
}

function createSession(req,res){
    User.findOne({email: req.body.email}, function(err, user){
        if(user && verifyPassword(req.body.password, user.password)) {
            let token = jwt.sign(user, "spartaToken", {
                expiresIn: "12h"
            });

            req.session.user = user.id;
            req.session.token = token;

            res.redirect("/");
        } else {
            if(err) req.flash('error', err.message);

            req.flash('error', err.message);

            req.flash('error', 'Email or Password was incorrect');

            res.redirect("sessions/new");
        }
    });
}

function deleteSession(req,res) {
    delete req.session.user;

    res.redirect("/sessions/new");
}

function verifyPassword(inputPassword, hashedPassword){
    return hash.verify(inputPassword, hashedPassword);
}

module.exports = {
    new: newSession,
    create: createSession,
    delete: deleteSession
}