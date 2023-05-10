const express = require("express");
const addressController = require("../../Controller/User/address");
const router = express.Router();

router.post("/addshipping", addressController.addaddress);
router.get("/getshipping/:userid", addressController.getaddaddress);
router.delete("/deleteshipping/:id", addressController.deleteaddddress);
router.put("/updateshippingaddress/:id", addressController.updateaddaddress);

module.exports = router;
