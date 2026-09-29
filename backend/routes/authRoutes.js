const express = require("express");
const {
	register,
	login,
	update,
	remove,
} = require("./../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/users/:id", update);
router.delete("/users/:id", remove);

module.exports = router;
