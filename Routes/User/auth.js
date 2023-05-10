const express= require("express");
const authController= require("../../Controller/User/auth")
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register",authController.register);
router.post("/login",authController.login);
router.get ("/alluser", authController.allUser);
router.get("/logout/:userid",authController.getlogout);

module.exports = router;