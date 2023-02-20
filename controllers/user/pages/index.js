const router = require('express').Router();

const createAccountRoutes = require('./create-account');
const loginRoutes = require('./login');
const dashboardRoutes = require('./dashboard');
const settingsRoutes = require('./settings');

// you are here: /user

router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/settings', settingsRoutes);

module.exports = router;
