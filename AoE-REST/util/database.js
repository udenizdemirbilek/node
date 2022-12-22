const Sequelize = require("sequelize");

const sequelize = new Sequelize("age-of-empires", "root", "adessoTurkey", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
