const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoute = require('./home-route');
const dashboardRoutes = require('./dashboard');
const postsRoutes = require('./posts');
const loginRoutes = require('./login');
const createAccountRoutes = require('./create-account');

router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/posts', postsRoutes);
router.use('/login', loginRoutes);
router.use('/createaccount', createAccountRoutes);

module.exports = router;
