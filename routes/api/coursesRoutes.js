const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/api/coursesCtrl");

router.post("/", coursesCtrl.createCourse);
router.get("/", coursesCtrl.getAllCourses);
router.post("/:courseId", coursesCtrl.createReview);
<<<<<<< HEAD
=======
router.get("/:courseId/content", contentCtrl.showContent);
router.get("/:courseId", coursesCtrl.getOneCourse);
>>>>>>> main

module.exports = router;
