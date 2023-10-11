const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/api/reviewsCtrl");

router.post("/:courseId/review", reviewsCtrl.createReview);

module.exports = router;
