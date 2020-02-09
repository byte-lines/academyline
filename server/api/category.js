const router = require('express').Router();
const { Category, Nominee, Movie, User } = require('../db');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Nominee,
          include: [
            {
              model: Movie,
            },
            {
              model: User,
              exclude: ['email', 'ipAddress'],
            },
          ],
        },
      ],
    });
    res.json(categories);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
