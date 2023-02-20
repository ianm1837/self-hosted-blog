const router = require('express').Router();
const { Post } = require('../../../models');

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/login');
    return;
  }

  res.render('new-post');
});

module.exports = router;
