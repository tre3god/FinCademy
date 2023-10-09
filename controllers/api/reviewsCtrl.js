const Course = require("../../models/Course");
const debug = require("debug")("fincademy:controllers:reviewsCtrl");

const createReview = async (req, res) => {
	try {
		const { courseId } = req.params;
		const { rating, comments } = req.body;
		const userId = req.user._id;
		const newReview = { rating, comments, user: userId };
		debug(newReview);

		const course = await Course.findById(courseId);
		debug(course);
		course.reviews.push(newReview);
		await course.save();
		res.status(201).json({ course });
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = { createReview };
