const express = require("express");

const unitController = require("../controllers/units");

const router = express.Router();

router.get("/", unitController.getUnits);

router.get("/details/:unitId", unitController.getUnitDetailsById);

router.post("/details/:unitId", unitController.postEditUnit);

module.exports = router;
