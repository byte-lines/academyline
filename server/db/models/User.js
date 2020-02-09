const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
    // validate: {
    //   isEmpty: false
    // }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  ipAddress: {
    type: Sequelize.STRING
  }
});

module.exports = User;
