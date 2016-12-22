//Defualt Route to the Index Home Page
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.showIndex);

module.exports = router;