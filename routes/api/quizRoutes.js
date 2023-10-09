const express = require("express");
const router = express.Router();
const quizCtrl = require("../../controllers/api/quizCtrl");

router.post("/", quizCtrl.create);
router.get("/:courseId", quizCtrl.showQuiz);

module.exports = router;