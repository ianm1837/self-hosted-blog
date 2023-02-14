const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/login');
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

    console.log('dbDashboardData: ' + JSON.stringify(dbDashboardData));

    let posts = dbDashboardData.map((posts) => ({
      title: posts.title,
      content: posts.content,
      timestamp: posts.timestamp,
      user_id: posts.user_id,
    }));

    console.log('list of user posts: ' + JSON.stringify(posts));
    res.render('dashboard', {
      posts,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/login');
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
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
