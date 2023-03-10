const router = require('express').Router();
const { User } = require('../../../models');

// Login
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    // save user data in session
    req.session.save(() => {
      req.session.username = req.body.username;
      req.session.user_id = dbUserData.dataValues.id;
      req.session.loggedIn = true;

      res.status(200).json({ message: "success" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
