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
      const newUser = await User.create({
        name: userName,
        email: email,
      });

      await newUser.setNominees(choices.filter(val => val !== null));
      res.send(newUser);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
