const router = require('express').Router();

const postsRoutes = require('./posts-route');

router.use('/', postsRoutes);

module.exports = router;
