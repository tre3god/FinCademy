const Course = require("../../models/Course");
const debug = require("debug")("fincademy:controllers:coursesCtrl");

async function createCourse(req, res) {
	const data = req.body;
	try {
		const newCourse = await Course.create(data);
		res.json(newCourse);
	} catch (error) {
		res.status(500).json({ error });
	}
}

async function getAllCourses(req, res) {
	try {
		const page = req.query.page || 1;
		const pageSize = req.query.pageSize || 8;

		const skip = (page - 1) * pageSize;

		const allCourses = await Course.find().skip(skip).limit(pageSize);
		const totalCount = await Course.countDocuments();

		res.status(200).json({ allCourses, totalCount });
	} catch (error) {
		res.status(500).json({ error });
	}
}

async function getOneCourse(req, res) {
	const { courseId } = req.params;
	try {
		const oneCourse = await Course.findById(courseId).populate({
			path: "reviews.user",
			model: "User",
			select: "name",
		});
		res.status(200).json({ oneCourse });
	} catch (error) {
		res.status(500).json({ error });
	}
}

async function getCourseContent(req, res) {
	const { courseId } = req.params;
	try {
		const oneCourse = await Course.findById(courseId);
		const data = {
			courseTitle: oneCourse.courseTitle,
			content: oneCourse.content,
		};
		console.log(data);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
}

module.exports = {
	createCourse,
	getAllCourses,
	getOneCourse,
	getCourseContent,
};
