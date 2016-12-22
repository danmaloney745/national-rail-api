const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

router.post("/", searchController.sendSearchRequest);

module.exports = router;