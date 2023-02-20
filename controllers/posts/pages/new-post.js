const router = require('express').Router();

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/user/login');
    return;
  }
  
  res.render('new-post');
});

module.exports = router;
