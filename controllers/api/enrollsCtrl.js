const User = require("../../models/User");
const debug = require("debug")("fincademy:controllers:enrollsCtrl");

const enroll = async (req, res) => {
	const { courseId } = req.body;
	const user = await User.findById(req.user._id).populate(
		"enrolledCourses.course",
	);
	debug(user);

	const isEnrolled = user.enrolledCourses.some(
		(enrollment) => enrollment.course._id.toString() === courseId,
	);
	if (!isEnrolled) {
		const newEnrollment = {
			course: courseId,
			quizScore: null,
		};
		user.enrolledCourses.push(newEnrollment);

		await user.save();
		res.status(200).json({ user, message: "Enrollment successful." });
	} else {
		res.status(403).json({ error: "You are already enrolled in this course." });
	}
};

const unenroll = async (req, res) => {
	const { courseId } = req.params;
	const user = await User.findById(req.user._id).populate(
		"enrolledCourses.course",
	);

	const enrolledIndex = user.enrolledCourses.findIndex(
		(enrollment) => enrollment.course._id.toString() === courseId,
	);

	if (enrolledIndex !== -1) {
		user.enrolledCourses.splice(enrolledIndex, 1);

		await user.save();
		res.json({ user, message: "Successfully unenrolled from the course" });
	} else {
		res.status(404).json({ error: "Course enrollment not found." });
	}
};

module.exports = { enroll, unenroll };
