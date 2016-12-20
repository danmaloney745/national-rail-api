const express = require("express");
const router = express.Router();
const departuresController = require("../controllers/departureBoardController");

router.route("/dept-data")
    .post(departuresController.getDeptData)
    .get(departuresController.showDept);


module.exports = router;