const router = require('express').Router();

const createPostRoutes = require('./create-post');
const createCommentRoutes = require('./create-comment');
const deletePostRoutes = require('./delete-post');
const editPostRoutes = require('./edit-post');

// you are here: /posts/api

router.use('/delete-post', deletePostRoutes);
router.use('/create-post', createPostRoutes);
router.use('/create-comment', createCommentRoutes);
router.use('/edit-post', editPostRoutes);

module.exports = router;
