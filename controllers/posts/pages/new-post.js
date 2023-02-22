const router = require('express').Router();

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/user/login');
    return;
  }

  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  res.render('new-post', { loginStatus, loggedInUser });
});

module.exports = router;
