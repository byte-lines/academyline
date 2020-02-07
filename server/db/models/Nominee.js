const Sequelize = require('sequelize');
const db = require('../db');

const Nominee = db.define('nominee', {
  name: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  infoLink: {
    type: Sequelize.STRING,
  },
});

module.exports = Nominee;
