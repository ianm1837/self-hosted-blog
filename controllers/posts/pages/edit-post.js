const router = require('express').Router();
const { Post } = require('../../../models');

router.get('/:id', (req, res) => {
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  try {
    Post.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }

        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
          post,
          loginStatus,
          loggedInUser,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
