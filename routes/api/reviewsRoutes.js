const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/api/reviewsCtrl");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/:courseId/review", ensureLoggedIn, reviewsCtrl.createReview);
router.patch("/:courseId/review", ensureLoggedIn, reviewsCtrl.editReview);

module.exports = router;
