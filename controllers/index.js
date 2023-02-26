const router = require('express').Router();

const postsRoutes = require('./posts');
const userRoutes = require('./user');

// you are here: /

router.use('/posts', postsRoutes);
router.use('/user', userRoutes);

router.get('/', (req, res) => {
  res.redirect('/posts');
});

module.exports = router;
