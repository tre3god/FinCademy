const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/api/coursesCtrl");

router.post("/", coursesCtrl.createCourse);
router.get("/", coursesCtrl.getAllCourses);
router.get("/:courseId", coursesCtrl.getOneCourse);
router.get("/:courseId/content", coursesCtrl.getCourseContent);

module.exports = router;
