const router = require('express').Router();

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
      timestamp: posts.timestamp,
      user_id: posts.user_id,
      username: posts.user.username,
    }));

    console.log('list of user posts: ' + JSON.stringify(posts));
    res.render('all-posts', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
