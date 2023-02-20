const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('settings');
});

module.exports = router;
