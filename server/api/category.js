const router = require("express").Router();
const { Category, Nominee, Movie } = require("../db");

router.get("/", (req, res) => {
  Category.findAll({
    include: [
      {
        model: Nominee,
        include: [
          {
            model: Movie
          }
        ]
      }
    ]
  });
});
