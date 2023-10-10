const Course = require("../../models/Course");
const Quiz = require("../../models/Quiz");

async function getQuiz(req, res) {
	try {
		const course = await Course.findById(req.params.courseId); //using courseid to find courseid
		const quiz = await Quiz.find({ course: course._id });
		res.status(200).json(quiz);
	} catch (error) {
		res.status(500).json({ error });
	}
}

module.exports = {
	getQuiz,
};
