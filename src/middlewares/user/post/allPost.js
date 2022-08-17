const User = require('../../../models/UserModel');

module.exports.allPost = async (req, res) => {
	try {
		const users = await User.find();
		const posts = getAllPost(users);

		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(posts, null, 3));
	} catch {
		res.status(400).send({ success: false, msg: 'Network error!!' });
	}
};
const getAllPost = (users) => {
	let posts = [];
	users.forEach((user) => {
		posts = [...posts, ...user.posts];
	});

	const sortedPosts = sorting(posts);
	return sortedPosts;
};
const sorting = (posts) => {
	const sortedPosts = posts.sort((obj1, obj2) => {
		if (obj1.id > obj2.id) return -1;
		if (obj1.id < obj2.id) return 1;
		return 0;
	});
	return sortedPosts;
};
