const router = require('express').Router();
const {
	getFollowing,
	getFollowers,
	getUnknownUsers,
	follow,
	unfollow,
} = require('../middlewares/user/follow');

router.post('/follow', follow);
router.post('/unfollow', unfollow);
router.get('/unknown-users/:id', getUnknownUsers);
router.get('/following/:id', getFollowing);
router.get('/followers/:id', getFollowers);

module.exports = router;
