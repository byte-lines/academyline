const router = require("express").Router();
const { Category, Nominee, Movie } = require("../db");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
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
    res.json(categories);
  } catch (err) {
    next(err);
  }
});
