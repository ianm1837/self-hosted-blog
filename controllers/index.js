const router = require('express').Router();

const postsRoutes = require('./posts');
const userRoutes = require('./user');

// you are here: /

router.get('/', (req, res) => {
  res.redirect('/posts');
});

router.use('/posts', postsRoutes);
router.use('/user', userRoutes);

module.exports = router;
