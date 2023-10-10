const express = require("express");
const router = express.Router();
const enrollsCtrl = require("../../controllers/api/enrollsCtrl");

router.post("/enroll", enrollsCtrl.enroll);

module.exports = router;
