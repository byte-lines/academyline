const router = require('express').Router();
module.exports = router;

// API ROUTES GO HERE
router.use('/category', require('./category'));
router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
