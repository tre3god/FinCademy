const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/usersCtrl");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
router.get("/:userId", usersCtrl.getOne);
router.delete("/:userId/unsubscribe", usersCtrl.del);

module.exports = router;
