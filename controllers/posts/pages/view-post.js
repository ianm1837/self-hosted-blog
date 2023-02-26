const router = require('express').Router();
const moment = require('moment')
const { Post, Comment, User } = require('../../../models');

router.get('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        { model: User, attributes: ['username'] },
        {
          model: Comment,
          attributes: [
            'id',
            'content',
            'username',
            'post_id',
            'user_id',
            'timestamp',
          ],
        },
      ],
    });

     console.log("🚀 dbPostData: " + JSON.stringify(dbPostData))

    const { title: postTitle, content: postContent, user: postUser, timestamp: postTimestamp, comments: postComments } = dbPostData
    
    const post = {
      title: postTitle,
      content: postContent,
      username: postUser,
      timestamp: moment(postTimestamp).format('lll'),
      comments: postComments
    }

    const postId = req.params.id;
    let loginStatus = req.session.loggedIn;
    let loggedInUser = req.session.username;
    let test = 'test'

    res.render('view-post', {
      post,
      postId,
      test,
      loginStatus,
      loggedInUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
