const router = require('express').Router();
const { User } = require('../db');
module.exports = router;

router.get('/me', (req, res, next) => {
  if (!req.session.choices) {
    req.session.choices = Array(24).fill(null);
  }

  res.send(req.session.choices);
});

router.post('/', async (req, res, next) => {
  try {
    //   Create choices on session
    if (!req.session.choices) {
      req.session.choices = Array(24).fill(null);
    }

    const { categoryIndex, nomineeId } = req.body;

    req.session.choices[categoryIndex] = nomineeId;
    if (req.user) {
      const user = await User.findByPk(req.user.id);
      const choices = req.session.choices.filter(choice => choice);
      await user.setNominees(choices);
    }

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
