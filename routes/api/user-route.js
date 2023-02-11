const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('api route working');
});

module.exports = router;
