const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/api/coursesCtrl");
const contentCtrl = require("../../controllers/api/contentCtrl");

router.post("/", coursesCtrl.createCourse);
router.get("/", coursesCtrl.getAllCourses);
router.post("/:courseId", coursesCtrl.createReview);
router.get("/:courseId/content", contentCtrl.showContent);
router.get("/:courseId", coursesCtrl.getOneCourse);

module.exports = router;
