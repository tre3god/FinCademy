const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/usersCtrl");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
router.get("/", usersCtrl.getOne);
router.patch(
	"/:courseId/quiz-score",
	ensureLoggedIn,
	usersCtrl.updateQuizScore,
);

module.exports = router;
