const express = require("express");
const router = express.Router();
const enrollsCtrl = require("../../controllers/api/enrollsCtrl");

router.post("/enroll", enrollsCtrl.enroll);
router.delete("/unenroll/:courseId", enrollsCtrl.unenroll);

module.exports = router;
