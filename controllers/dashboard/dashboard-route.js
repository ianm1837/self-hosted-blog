const router = require('express').Router();
const { Post, User } = require('../../models');

// router.get('/', (req, res) => {
//   res.render('dashboard');
//   console.log('user_id from session: ', req.session.user_id);
// });

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

    const posts = dbDashboardData.map((posts) => posts.get({ plain: true }));

    console.log('list of user posts: ' + posts);
    res.render('dashboard', {
      posts,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
