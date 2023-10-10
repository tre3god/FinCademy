const User = require("../../models/User");
const debug = require("debug")("fincademy:controllers:enrollsCtrl");

const enroll = async (req, res) => {
	const { courseId } = req.body;
	const user = await User.findById(req.user._id);
	debug(user);

	const isEnrolled = user.enrolledCourses.some(
		(enrollment) => enrollment.course.toString() === courseId,
	);
	if (!isEnrolled) {
		const newEnrollment = {
			course: courseId,
			completed: false,
		};
		user.enrolledCourses.push(newEnrollment);

		await user.save();
	}
	res.json({ user });
};

module.exports = { enroll };
