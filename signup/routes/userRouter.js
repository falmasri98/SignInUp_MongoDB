const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/login", userController.Login);
router.post("/signUp", userController.SignUp);

module.exports = router;