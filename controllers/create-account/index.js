const router = require('express').Router();

const createAccountRoutes = require('./create-account-route');

router.use('/', createAccountRoutes);

module.exports = router;
