const router = require('express').Router();
const { Post, Comment, User } = require('../../../models');

router.get('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'post_id', 'user_id', 'timestamp'],
          include: {
            model: User,
            attributes: ['username'],
          },
          include: {
            model: Post,
            attributes: ['id', 'title', 'content', 'timestamp', 'user_id'],
          },
        },
      ],
    });

    const post = dbPostData.get({ plain: true });

    res.render('view-post', {
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
