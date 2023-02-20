const router = require('express').Router();

const createPostRoutes = require('./pages');
const getPostRoutes = require('./api');

// you are here: /posts/api

router.use('/create-post', createPostRoutes);
router.use('/get-post', getPostRoutes);

module.exports = router;
