const router = require('express').Router();
const { getFollowing, getFollowers } = require('../middlewares/user/follow');

router.get('/following/:id', getFollowing);
router.get('/followers/:id', getFollowers);

module.exports = router;
