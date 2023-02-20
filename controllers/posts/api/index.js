const router = require('express').Router();

const createPostRoutes = require('./create-post');
const createCommentRoutes = require('./create-comment');

// you are here: /posts/api

router.use('/create-post', createPostRoutes);
router.use('/create-comment', createCommentRoutes);

module.exports = router;
