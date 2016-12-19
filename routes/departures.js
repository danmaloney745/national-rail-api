const express = require("express");
const router = express.Router();
const departuresController = require("../controllers/departureBoardController");

router.get("/departures", departuresController.showIndex);
router.get("/departures-data", departuresController.getData);

module.exports = router;