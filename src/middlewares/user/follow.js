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
module.exports.getUnknownUsers = async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id);
	try {
		if (user) {
			const users = await User.find();
			const unknownUsers = users.filter((u) => {
				return user.following.indexOf(u._id) === -1;
			});
			res.status(200).send(unknownUsers);
		} else {
			throw Error();
		}
	} catch {
		res.status(400).send({ msg: 'Something went wrong!' });
	}
};

module.exports.follow = async (req, res) => {
	const { id, followUserId } = req.body;
	const user = await User.findById(id);
	try {
		user.following.unshift(followUserId);
		const updatedUser = await User.findByIdAndUpdate(user._id, user, {
			new: true,
		});
		const users = await User.find();
		const updatedUsers = users.filter((u) => {
			return updatedUser.following.indexOf(u._id) === -1;
		});

		res.send({ user: updatedUser, users: updatedUsers });
	} catch {
		res.status(400).send({ msg: 'Something went wrong!' });
	}
};
module.exports.unfollow = async (req, res) => {
	const { id, unfollowUserId } = req.body;

	const user = await User.findById(id);
	try {
		const index = user.following.indexOf(unfollowUserId);
		if (index !== -1) {
			user.following.splice(unfollowUserId);
			const updatedUser = await User.findByIdAndUpdate(user._id, user, {
				new: true,
			});
			const users = await User.find();
			const updatedUsers = users.filter((u) => {
				return updatedUser.following.indexOf(u._id) === -1;
			});

			res.send({ user: updatedUser, users: updatedUsers });
		} else {
			throw Error();
		}
	} catch {
		res.status(400).send({ msg: 'Something went wrong!' });
	}
};
