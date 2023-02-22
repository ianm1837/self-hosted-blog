const router = require('express').Router();

router.get('/', (req, res) => {
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  res.render('create-account', { loginStatus, loggedInUser });
});

module.exports = router;
