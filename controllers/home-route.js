const router = require('express').Router();
const { Post, User } = require('../models');

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
      content: posts.content,
      timestamp: posts.timestamp,
      user_id: posts.user_id,
      username: posts.user.username,
    }));

    console.log('list of user posts: ' + JSON.stringify(posts));
    res.render('home', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/test', async (req, res) => {
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
      content: posts.content,
      timestamp: posts.timestamp,
      user_id: posts.user_id,
      username: posts.user.username,
    }));

    res.json(posts);
    // let posts = dbDashboardData.map((posts) => ({
    //   title: posts.title,
    //   content: posts.content,
    //   timestamp: posts.timestamp,
    //   user_id: posts.user_id,
    // }));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
