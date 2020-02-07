const router = require('express').Router();
const { User } = require('../db');

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

    // Create User
    if (!user && !req.user) {
      user = await User.create({
        name: userName,
        email: email,
      });
    }
    const choices = req.session.choices.filter(val => val !== null);
    await user.setNominees(choices);

    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

module.exports = router;
