const Unit = require("../models/unit");
const mongodb = require("mongodb");

const ObjectId = mongodb.ObjectId;

exports.getUnits = (req, res, next) => {
  Unit.fetchAll().then((result) => res.status(200).json({ units: result }));
};

exports.getUnitDetailsById = (req, res, next) => {
  const unitId = req.params.unitId;
  Unit.fetchById(unitId).then((result) => res.status(200).json(result));
};

exports.postEditUnit = (req, res, next) => {
  const unitId = req.body.unitId;
  const updatedName = req.body.name;
  const updatedDescription = req.body.description;
  const updatedExpansion = req.body.expansion;
  const updatedAge = req.body.age;
  const updatedCost = req.body.cost;

  const unit = new Unit(
    unitId,
    updatedName,
    updatedDescription,
    updatedExpansion,
    updatedAge,
    updatedCost
  );
  unit
    .save()
    .then((result) => console.log("updated unit", result))
    .catch((err) => console.log(err));
};

exports.getUnits;
