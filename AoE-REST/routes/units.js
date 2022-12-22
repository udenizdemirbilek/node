const express = require("express");

const unitController = require("../controllers/units");

const router = express.Router();

router.get("/", unitController.getUnits);

module.exports = router;
