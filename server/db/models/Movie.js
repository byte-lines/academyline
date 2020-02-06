const Sequelize = require("sequelize");
const db = require("../db");

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.TEXT
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trailerLink: {
    type: Sequelize.STRING
  },
  originalSong: {
    type: Sequelize.STRING
  }
});

module.exports = Movie;
