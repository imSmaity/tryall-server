const User = require('../../..//models/UserModel');
const PostCount = require('../../../models/PostCountModel');

module.exports.addPost = async (req, res) => {
	const { id, data } = req.body;

	try {
		const user = await User.findById(id);

		const updatedData = await setNewPost(user, data);
		res.status(200).send(updatedData);
	} catch {
		res
			.status(400)
			.send({ message: 'Something went wrong. Please try again!' });
	}
};

const setNewPost = async (user, data) => {
	const prevPostCount = await PostCount.find();
	const newPostId = prevPostCount[0].count + 1;

	data.id = String(newPostId);
	data.created = new Date().toISOString();
	user.posts.unshift(data);

	const updatedUser = await User.findByIdAndUpdate(user._id, user, {
		new: true,
	});
	await PostCount.findByIdAndUpdate(prevPostCount[0]._id, { count: newPostId });
	return { user: updatedUser, post: data };
};
