const router = require('express').Router();

const postsRoutes = require('./posts-route');
const newPostRoutes = require('./new-post-route');

router.use('/', postsRoutes);

router.use('/new', newPostRoutes);

module.exports = router;
