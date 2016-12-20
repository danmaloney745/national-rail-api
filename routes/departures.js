const express = require("express");
const router = express.Router();
const departuresController = require("../controllers/departureBoardController");

router.post("/dept-data", departuresController.getDeptData);
router.get("/showDept", departuresController.showDept);

module.exports = router;