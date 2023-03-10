const router = require('express').Router();
const { Post } = require('../../../models');

router.delete('/:id', (req, res) => {
  try {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    })
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
