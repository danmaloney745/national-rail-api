const express = require("express");
const router = express.Router();
const departuresController = require("../controllers/departureBoardController");

router.route("/departures")
    .get(departuresController.showDept)
    .post(departuresController.getDeptData);

module.exports = router;