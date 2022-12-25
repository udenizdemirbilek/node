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
    this.id = id;
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
    db.collection("units")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("units")
      .find()
      .toArray()
      .then()
      .catch((err) => console.log(err));
  }

  static fetchById(unitId) {
    const db = getDb();
    return db
      .collection("units")
      .find({ id: parseInt(unitId) })
      .next()
      .then()
      .catch((err) => console.log(err));
  }
}

module.exports = Unit;
