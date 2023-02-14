const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', (req, res) => {
  res.render('new-post');
});

router.post('/create', (req, res) => {
  console.log(req.body);

  Post.create({
    user_id: req.session.user_id,
    timestamp: req.body.timestamp,
    title: req.body.title,
    content: req.body.content,
  })
    .then((dbPostData) => {
      res.json(dbPostData);
      res.status(200).json(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
