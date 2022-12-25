const units = require("../age-of-empires-units.json");
const Unit = require("../models/unit");

exports.getUnits = (req, res, next) => {
  Unit.fetchAll();
  // res.status(200).json(units);
};

exports.getUnitDetailsById = (req, res, next) => {};

exports.getUnits;
