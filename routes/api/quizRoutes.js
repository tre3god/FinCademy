const express = require("express");
const router = express.Router();
const quizCtrl = require("../../controllers/api/quizCtrl");
const ensuredLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", quizCtrl.create);
router.get("/:courseId", ensuredLoggedIn, quizCtrl.showQuiz);

module.exports = router;
