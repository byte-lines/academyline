const router = require('express').Router();
module.exports = router;

// API ROUTES

router.use('/category', require('./category'));
router.use('/users', require('./users'));
router.use('/choices', require('./choices'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
