const Sequelize = require("sequelize");
const db = require("../db");

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.TEXT
  },
  trailerLink: {
    type: Sequelize.STRING
  }
});

module.exports = Movie;
