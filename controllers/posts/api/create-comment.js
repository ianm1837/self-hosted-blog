const router = require('express').Router();
const { Comment } = require('../../../models');

router.post('/', (req, res) => {
  Comment.create({
    user_id: req.session.user_id,
    post_id: req.body.postId,
    username: req.session.username,
    content: req.body.commentData,
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
