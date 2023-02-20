const router = require('express').Router();

const allPostsRoutes = require('./all-posts');
const viewPostRoutes = require('./view-post');

// you are here: /posts

router.use('/', allPostsRoutes);
router.use('/view-post', viewPostRoutes);

module.exports = router;
