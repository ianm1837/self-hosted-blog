const router = require('express').Router();
const moment = require('moment')
const { Post, User } = require('../../../models');

router.get('/', async (req, res) => {
  try {
    const dbDashboardData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    let posts = dbDashboardData.map((posts) => ({
      title: posts.title,
      id: posts.id,
      content: posts.content,
      timestamp: moment(posts.updatedAt).format('lll'),
      user_id: posts.user_id,
      username: posts.user.username,
    }));

    let loginStatus = req.session.loggedIn;
    let loggedInUser = req.session.username;

    res.render('all-posts', {
      posts,
      loginStatus,
      loggedInUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
