const express = require("express");
const router = express.Router();
const quizCtrl = require("../../controllers/api/quizCtrl");

router.get("/:courseId", quizCtrl.getQuiz);

module.exports = router;