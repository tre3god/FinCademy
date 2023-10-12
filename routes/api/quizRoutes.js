const express = require("express");
const router = express.Router();
const quizCtrl = require("../../controllers/api/quizCtrl");
const ensuredLoggedIn = require("../../config/ensureLoggedIn");
const checkEnrollment = require("../../config/checkEnrollment");

router.get("/:courseId", ensuredLoggedIn, checkEnrollment, quizCtrl.getQuiz);
router.post(
	"/create/:courseId",
	ensuredLoggedIn,
	checkEnrollment,
	quizCtrl.create,
);

module.exports = router;
