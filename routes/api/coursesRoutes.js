const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/api/coursesCtrl");

router.post("/", coursesCtrl.create)
router.post("/:courseId", coursesCtrl.createReview);

module.exports = router;
