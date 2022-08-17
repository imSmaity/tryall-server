const User = require('../../models/UserModel');

module.exports.userUpdate = async (req, res) => {
	const { id, data } = req.body;

	try {
		await User.findByIdAndUpdate(id, modifyUser(data));
		const updatedUser = await User.findById(id);
		res.status(200).send(updatedUser);
	} catch {
		res
			.status(400)
			.send({ message: 'Something went wrong. Please try again!' });
	}
};

const modifyUser = (user) => {
	const posts = user.posts;
	const appUser = {
		id: user._id,
		email: user.email,
		name: user.name,
		avatar: user.avatar,
	};

	user.posts = posts.map((post) => {
		post.user = appUser;
		return post;
	});

	return user;
};
