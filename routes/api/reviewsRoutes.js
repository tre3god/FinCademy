const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/api/reviewsCtrl");

router.post("/:courseId", reviewsCtrl.createReview);

module.exports = router;
