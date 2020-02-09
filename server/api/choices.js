const router = require('express').Router();
const { User, Nominee } = require('../db');
const { Op } = require('sequelize');

module.exports = router;

router.get('/me', (req, res, next) => {
  if (!req.session.choices) {
    req.session.choices = Array(24).fill(null);
  }

  res.send(req.session.choices);
});

router.post('/', async (req, res, next) => {
  try {
    const NOW = new Date();
    const TIME = new Date('February 10 2020 1:45 AM UTC');
    if (NOW < TIME || (req.user && req.user.name === process.env.SNEEKYSNEEK)) {
      if (!req.session.choices) {
        //   Create choices on session
        req.session.choices = Array(24).fill(null);
      }

      const { categoryIndex, nomineeId } = req.body;
      req.session.choices[categoryIndex] = nomineeId;

      if (req.user) {
        const user = await User.findByPk(req.user.id);
        const choices = req.session.choices.filter(choice => choice);
        await user.setNominees(choices);
        if (req.user.name === process.env.SNEEKYSNEEK) {
          const nominees = await Nominee.findAll();
          console.log(`
          
          answer posted
          
          `);
          nominees.forEach(nominee => {
            if (choices.includes(nominee.id)) {
              nominee.winner = true;
            } else {
              nominee.winner = false;
            }
            nominee.save();
          });
        }
      }

      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
});
