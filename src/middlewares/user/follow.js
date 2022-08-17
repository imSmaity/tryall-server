const User = require('../../models/UserModel');

module.exports.getFollowing = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);

	try {
		if (user) {
			const users = await User.find();
			const followingUsers = users.filter((u) => {
				return user.following.indexOf(u._id) !== -1;
			});
			res.status(200).send(followingUsers);
		} else {
			throw Error();
		}
	} catch {
		res.status(400).send({ msg: 'Something went wrong!' });
	}
};

module.exports.getFollowers = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	try {
		if (user) {
			const users = await User.find();
			const followersUsers = users.filter((u) => {
				return user.followers.indexOf(u._id) !== -1;
			});
			res.status(200).send(followersUsers);
		} else {
			throw Error();
		}
	} catch {
		res.status(400).send({ msg: 'Something went wrong!' });
	}
};
