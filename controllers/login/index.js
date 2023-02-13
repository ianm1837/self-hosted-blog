const router = require('express').Router();

const loginRoutes = require('./login-route');

router.use('/', loginRoutes);

module.exports = router;
