const router = require('express').Router();

const pagesRoutes = require('./pages');
const apiRoutes = require('./api');

// you are here: /posts

router.use('/', pagesRoutes);
router.use('/api', apiRoutes);

module.exports = router;
