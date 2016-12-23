//Defualt Route to the Index Home Page

/* Require Express for the routing, and indexController to render the page */
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

/* pass the Get request to the controller and show the homepage */
router.get("/", indexController.showIndex);

module.exports = router;