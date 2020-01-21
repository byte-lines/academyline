const router = require('express').Router();
const User = require('../db');
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
      console.log('new session');
      req.session.choices = Array(24).fill(null);
    }

    const { categoryIndex, nomineeId } = req.body;

    if (req.user) {
      const user = await User.findByPk(req.user.id);

      if (req.session.choices[categoryIndex]) {
        await user.removeNominee(req.session.choices[categoryIndex]);
      }
      await user.setNominee(nomineeId);
    }
    req.session.choices[categoryIndex] = nomineeId;

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
