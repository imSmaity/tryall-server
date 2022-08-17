const router = require('express').Router();
const { getFollowing, getFollowers } = require('../middlewares/user/follow');
const { addPost } = require('../middlewares/user/post/addPost');
const { allPost } = require('../middlewares/user/post/allPost');

router.put('/add-post', addPost);
router.get('/all-post', allPost);

module.exports = router;
