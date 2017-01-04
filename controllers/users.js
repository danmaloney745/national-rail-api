var User = require('../models/user');
const hash = require('password-hash');

function newUser(req, res) {
    var newUser = {
        id: "",
        title: "",
        body: ""
    }

    res.render("users/register", {
        title: "Register",
        user: newUser
    });
}

function createUser(req, res) {
    req.body.password = hash.generate(req.body.password);

    User.create( req.body, function(err, post){
        if(err) return res.status(500).send(err);

        res.redirect("/");
    });
}

module.exports = {
    newUser: newUser,
    createUser: createUser
}