const mongodb = require("mongodb");

const getDb = require("../util/database").getDb;
class Unit {
  constructor(
    id,
    name,
    description,
    expansion,
    age,
    cost,
    build_time,
    reload_time,
    attack_delay,
    movement_rate,
    line_of_sight,
    hit_points,
    range,
    attack,
    armor,
    attack_bonus,
    accuracy,
    search_radius
  ) {
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.name = name;
    this.description = description;
    this.expansion = expansion;
    this.age = age;
    this.cost = cost;
    this.build_time = build_time;
    this.reload_time = reload_time;
    this.attack_delay = attack_delay;
    this.movement_rate = movement_rate;
    this.line_of_sight = line_of_sight;
    this.hit_points = hit_points;
    this.range = range;
    this.attack = attack;
    this.armor = armor;
    this.attack_bonus = attack_bonus;
    this.accuracy = accuracy;
    this.search_radius = search_radius;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this.id) {
      dbOp = db
        .collection("units")
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    } else dbOp = db.collection("units").insertOne(this);
    return dbOp
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("units")
      .find()
      .project({
        id: 1,
        name: 1,
        age: 1,
        cost: 1,
      })
      .toArray()
      .then()
      .catch((err) => console.log(err));
  }

  static fetchById(unitId) {
    const db = getDb();
    return db
      .collection("units")
      .find({ _id: mongodb.ObjectId(unitId) })
      .next()
      .then()
      .catch((err) => console.log(err));
  }

  static deleteById(unitId) {
    const db = getDb();
    db.collection("units")
      .deleteOne({ _id: mongodb.ObjectId(unitId) })
      .then()
      .catch((err) => console.log(err));
  }
}

module.exports = Unit;
