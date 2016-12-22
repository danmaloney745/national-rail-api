//Defualt Route to the Index Home Page

/* Require Express for the routing, and searchController to access the information */
const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

/* Return through a post request the information gained from the controller. */
router.post("/search", searchController.sendSearchRequest);

module.exports = router;