const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "adessoTurkey", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
