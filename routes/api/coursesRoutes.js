const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/api/coursesCtrl");

router.post("/", coursesCtrl.create)

module.exports = router;
