const Course = require("../../models/Course");

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
		const allCourses = await Course.find();
		res.status(200).json({ allCourses });
	} catch (error) {
		res.status(500).json({ error });
	}
}

async function getOneCourse(req, res) {
	const { courseId } = req.params;
	try {
		const oneCourse = await Course.findById(courseId);
		res.status(200).json({ oneCourse });
	} catch (error) {
		res.status(500).json({ error });
	}
}

async function getCourseContent(req, res) {
	const { courseId } = req.params;
	try {
		const oneCourse = await Course.findById(courseId);
		const data = { courseTitle: oneCourse.courseTitle,
		content: oneCourse.content };
		console.log(data);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error });
	}
}

module.exports = { createCourse, getAllCourses, getOneCourse, getCourseContent };
