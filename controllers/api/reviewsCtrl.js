const Course = require("../../models/Course");
const debug = require("debug")("fincademy:controllers:coursesCtrl");

const createReview = async (req, res) => {
	try {
		const { courseId } = req.params;
		const course = await Course.findById(courseId);
		const newReview = req.body;
		course.reviews.push(newReview);
		await course.save();
		res.status(201).json({ course });
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = { createReview };
