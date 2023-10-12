const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/api/coursesCtrl");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
// const checkEnrollment = require("../../config/checkEnrollment");

router.post("/", ensureLoggedIn, coursesCtrl.createCourse);
router.get("/", coursesCtrl.getAllCourses);
router.get("/:courseId", coursesCtrl.getOneCourse);
router.get(
	"/:courseId/content",
	ensureLoggedIn,
	// checkEnrollment,
	coursesCtrl.getCourseContent,
);

module.exports = router;
