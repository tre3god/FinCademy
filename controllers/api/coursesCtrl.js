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
		const page = Number(req.query.page) || 1;
		const pageSize = Number(req.query.pageSize) || 8;
		const sortBy = req.query.sortBy || "default";
		const skip = (page - 1) * pageSize;

		if (sortBy === "rating") {
			const allCourses = await Course.find();

			allCourses.forEach((course) => {
				if (course.reviews && course.reviews.length > 0) {
					const totalRating = course.reviews.reduce(
						(sum, review) => sum + review.rating,
						0,
					);
					course.avgRating = totalRating / course.reviews.length;
				} else {
					course.avgRating = 0;
				}
			});

			allCourses.sort((a, b) => b.avgRating - a.avgRating);
			const paginatedCourses = allCourses.slice(skip, skip + pageSize);

			const totalCount = allCourses.length;
			res.status(200).json({ allCourses: paginatedCourses, totalCount });
		} else {
			let sortOptions = {};
			if (sortBy === "az") {
				sortOptions = { courseTitle: 1 };
			} else if (sortBy === "za") {
				sortOptions = { courseTitle: -1 };
			}
			const allCourses = await Course.find()
				.sort(sortOptions)
				.skip(skip)
				.limit(pageSize);

			const totalCount = await Course.countDocuments();

			res.status(200).json({ allCourses, totalCount });
		}
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
