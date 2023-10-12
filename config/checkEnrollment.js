module.exports = function (req, res, next) {
	const courseId = req.params.courseId;
	const isEnrolled = req.user.enrolledCourses.some(
		(enrollment) => enrollment.course.toString() === courseId,
	);

	if (!isEnrolled) return res.status(403).json("Forbidden");

	next();
};
