const router = require('express').Router();

const userRoutes = require('./user-route');

router.use('/user', authRoutes);

module.exports = router;
