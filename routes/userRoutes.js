const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controller/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

//routes
//LOGIN||POST
router.post("/login", loginController);

//REGISTER|| POST
router.post("/register", registerController);
//Auth||Post
// router.post("/getUserData", authMiddleware, authController);
router.post("/getUserData", authMiddleware, authController);
module.exports = router;
