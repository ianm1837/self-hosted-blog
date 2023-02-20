const router = require('express').Router();
const { Post, User } = require('./../../../models');

router.get('/', async (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/user/login');
    return;
  }

  try {
    const dbDashboardData = await Post.findAll({
      include: [
        {
          model: User,
          user_id: req.session.user_id,
        },
      ],
    });

    let posts = dbDashboardData.map((posts) => ({
      title: posts.title,
      content: posts.content,
      timestamp: posts.timestamp,
      user_id: posts.user_id,
    }));

    res.render('dashboard', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
