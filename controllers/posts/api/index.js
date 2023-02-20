const router = require('express').Router();

const createPostRoutes = require('./create-post');

// you are here: /posts/api

router.use('/create-post', createPostRoutes);

module.exports = router;
