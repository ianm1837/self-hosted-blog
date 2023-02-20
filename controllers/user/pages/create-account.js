const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('createaccount');
});

module.exports = router;
