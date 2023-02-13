const router = require('express').Router();

const dashboardRoutes = require('./dashboard-route');

router.use('/', dashboardRoutes);

module.exports = router;
