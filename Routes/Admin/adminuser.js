const express = require("express");
const router = express.Router();
const adminUsersauthontroller= require("../../Controller/Admin/adminuser");



router.post("/signup", adminUsersauthontroller.AdminSignup);
router.post("/signin", adminUsersauthontroller.Postadminlogin);
router.get("/signout/:adminid", adminUsersauthontroller.adminSignout);


module.exports = router;