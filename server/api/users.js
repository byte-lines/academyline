const router = require('express').Router();
const { User, Nominee } = require('../db');
const { Op } = require('sequelize');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        name: {
          [Op.not]: process.env.SNEEKYSNEEK,
        },
      },
      exclude: ['email', 'ipAddress'],
      include: [
        {
          model: Nominee,
        },
      ],
    });

    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { userName, email } = req.body;

    //Check if User Name is valid

    let user = await User.findOne({
      where: {
        name: userName,
      },
    });

    //Check if email is valid
    if (user && req.body.email !== user.email) {
      res.sendStatus(401);
    } else {
      if (!user && !req.user) {
        // Create User
        user = await User.create({
          name: userName,
          email: email,
        });
      }
      const choices = req.session.choices.filter(val => val !== null);
      await user.setNominees(choices);

      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

module.exports = router;
