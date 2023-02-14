const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbDashboardData = await Post.findAll();

    let posts = dbDashboardData.map((posts) => ({
      title: posts.title,
      content: posts.content,
      timestamp: posts.timestamp,
      user_id: posts.user_id,
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

module.exports = router;
