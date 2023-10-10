const express = require("express");
const router = express.Router();
const enrollsCtrl = require("../../controllers/api/enrollsCtrl");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/enroll", ensureLoggedIn, enrollsCtrl.enroll);
router.delete("/unenroll/:courseId", ensureLoggedIn, enrollsCtrl.unenroll);

module.exports = router;
