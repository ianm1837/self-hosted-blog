const router = require('express').Router();
const { Post } = require('../../../models');

router.patch('/:id', (req, res) => {
  try {
    Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbPostData) => {
        res.json(dbPostData).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
