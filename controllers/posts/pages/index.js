const router = require('express').Router();

const allPostsRoutes = require('./all-posts');
const newPostRoutes = require('./new-post');

// you are here: /posts

router.use('/', allPostsRoutes);
router.use('/new', newPostRoutes);

module.exports = router;
