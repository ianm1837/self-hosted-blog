const router = require('express').Router();

const allPostsRoutes = require('./all-posts');
const viewPostRoutes = require('./view-post');
const newPostRoutes = require('./new-post');

// you are here: /posts

router.use('/', allPostsRoutes);
router.use('/view-post', viewPostRoutes);
router.use('/new-post', newPostRoutes);

module.exports = router;
