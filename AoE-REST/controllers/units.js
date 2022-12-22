const units = require("../age-of-empires-units.json");

exports.getUnits = (req, res, next) => {
  res.status(200).json(units);
};
