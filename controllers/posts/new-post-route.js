const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect('/login');
    return;
  }

  res.render('new-post');
});

router.post('/create', (req, res) => {
  Post.create({
    user_id: req.session.user_id,
    timestamp: req.body.timestamp,
    title: req.body.title,
    content: req.body.content,
  })
    .then((dbPostData) => {
      res.json(dbPostData).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
