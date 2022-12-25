const Unit = require("../models/unit");

exports.getUnits = (req, res, next) => {
  Unit.fetchAll().then((result) => res.status(200).json({ units: result }));
};

exports.getUnitDetailsById = (req, res, next) => {
  const unitId = req.params.unitId;
  Unit.fetchById(unitId).then((result) => res.status(200).json(result));
};

exports.getUnits;
