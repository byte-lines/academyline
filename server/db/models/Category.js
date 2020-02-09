const Sequelize = require("sequelize");
const db = require("../db");

const Category = db.define("category", {
  name: {
    type: Sequelize.STRING
  },
  pseudoId: {
    type: Sequelize.INTEGER
  }
});

module.exports = Category;
