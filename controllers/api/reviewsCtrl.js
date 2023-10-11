const Course = require("../../models/Course");
const debug = require("debug")("fincademy:controllers:reviewsCtrl");

const createReview = async (req, res) => {
	try {
		const { courseId } = req.params;
		const { rating, comments } = req.body;
		const userId = req.user._id;
		const course = await Course.findById(courseId);

		if (course.reviews.some((review) => review.user.toString() === userId)) {
			return res
				.status(400)
				.json({ error: "You have already reviewed this course." });
		}

		const newReview = { rating, comments, user: userId };
		course.reviews.push(newReview);
		await course.save();

		res.status(201).json({ course });
	} catch (error) {
		res.status(500).json({ error });
	}
};

const editReview = async (req, res) => {
	try {
		const { courseId } = req.params;
		const userId = req.user._id;
		const course = await Course.findById(courseId);

		const reviewIndex = course.reviews.findIndex(
			(review) => review.user.toString() === userId,
		);

		if (reviewIndex === -1) {
			return res.status(404).json({ error: "Review not found" });
		}

		const { comments, rating } = req.body;
		course.reviews[reviewIndex].comments = comments;
		course.reviews[reviewIndex].rating = rating;

		await course.save();
		res.status(200).json({
			message: "Review updated successfully",
			review: course.reviews[reviewIndex],
		});
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports = { createReview, editReview };
