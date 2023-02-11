const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoute = require('./home-route');
const dashboardRoutes = require('./dashboard');
const postsRoutes = require('./posts');

router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
