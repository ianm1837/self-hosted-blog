const router = require('express').Router();
const allPostsRoutes = require('./all-posts');
const viewPostRoutes = require('./view-post');
const newPostRoutes = require('./new-post');
const editPostRoutes = require('./edit-post');

// you are here: /posts

router.use('/', allPostsRoutes);
router.use('/view-post', viewPostRoutes);
router.use('/new-post', newPostRoutes);
router.use('/edit-post', editPostRoutes);

module.exports = router;
