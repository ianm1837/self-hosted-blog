const router = require('express').Router();
const { Post, Comment, User } = require('../../../models');

router.get('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        { model: User, attributes: ['username'] },
        {
          model: Comment,
          attributes: [
            'id',
            'content',
            'username',
            'post_id',
            'user_id',
            'timestamp',
          ],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });
    const postId = req.params.id;
    let loginStatus = req.session.loggedIn;
    let loggedInUser = req.session.username;

    // res.json(post).status(200);

    console.log(post);

    res.render('view-post', {
      post,
      postId,
      loginStatus,
      loggedInUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
