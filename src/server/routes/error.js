const router = require('express').Router();

// Throw an error
router.get('/throw', () => {
  throw new Error('Threw an error!');
});

// Throw an async error
router.get('/throw-async', async () => {
  throw new Error('Threw an async error!');
});

// Call next with error
router.get('/call-next', (req, res, next) => {
  next(new Error('Called next with error!'));
});

module.exports = router;
