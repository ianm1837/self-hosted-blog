const router = require('express').Router();
const { User } = require('../../models');

// create new user
router.post('/create', async (req, res) => {
  try {
    const dbFindUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // If username does not exist, create new user
    if (!dbFindUserData) {
      if (req.body.username.length > 7 && req.body.password.length > 7) {
        try {
          const dbNewUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
          });

          req.session.save(() => {
            req.session.username = req.body.username;
            req.session.user_id = dbNewUserData.dataValues.id;
            req.session.loggedIn = true;

            res.status(200).json(dbNewUserData);
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      } else {
        res.status(400).json({
          message:
            'Username and password must be at least 8 characters long. Please try again!',
        });
      }
    } else {
      res.status(400).json({
        message: 'Username already exists. Please try again!',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    console.log(err);
  }
});

// Login
router.post('/login', async (req, res) => {
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

    req.session.save(() => {
      req.session.username = req.body.username;
      req.session.user_id = dbUserData.dataValues.id;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({ message: 'Logout success!' }).end();
    });
  } else {
    res.status(404).json({ message: "You weren't logged in..." }).end();
  }
});

module.exports = router;
