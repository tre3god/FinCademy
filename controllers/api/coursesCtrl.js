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

// const debug = require("debug")("fincademy:controllers:coursesCtrl");

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

module.exports = { createReview, createCourse, getAllCourses };

