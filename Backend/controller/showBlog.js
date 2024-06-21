const User = require("../models/User");
exports.showBlog = async (req, res) => {
	try {
		const blogData = await User.find({});
		res.json({ success: true, data: blogData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};