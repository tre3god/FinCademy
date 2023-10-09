const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/api/coursesCtrl");

router.post("/", coursesCtrl.createCourse);
router.get("/", coursesCtrl.getAllCourses);
router.post("/:courseId", coursesCtrl.createReview);

module.exports = router;
