const router = require('express').Router();

const createAccountRoutes = require('./create-account');
const loginRoutes = require('./login');
const logoutRoutes = require('./logout');

// you are here: /user/api

router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;
