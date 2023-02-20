const router = require('express').Router();
const apiRoutes = require('./api');
const pagesRoutes = require('./pages');

// you are here: /user

router.use('/', pagesRoutes);
router.use('/api', apiRoutes);

module.exports = router;
