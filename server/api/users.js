const router = require('express').Router();
const { User } = require('../db');

router.post('/', async (req, res, next) => {
  try {
    const { choices, userName, email } = req.body;

    //Check if User Name is valid
    const foundUser = await User.findOne({
      where: {
        name: userName,
      },
    });

    //Check if email is valid

    // Create User
    if (!foundUser) {
      const user = await User.create({
        name: userName,
        email: email,
      });

      await user.setNominees(choices.filter(val => val !== null));

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
