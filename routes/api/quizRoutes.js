const express = require("express");
const router = express.Router();
const quizCtrl = require("../../controllers/api/quizCtrl");
const ensuredLoggedIn = require("../../config/ensureLoggedIn");

router.get("/:courseId", ensuredLoggedIn, quizCtrl.getQuiz);
router.post("/:courseId", ensuredLoggedIn, quizCtrl.create);

module.exports = router;
