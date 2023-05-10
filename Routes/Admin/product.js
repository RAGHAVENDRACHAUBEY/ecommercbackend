const express= require("express");
const multer = require("multer");
const router = express.Router();

const adminproductcontroller= require("../../Controller/Admin/product");



var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/product");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "_" + file.originalname);
	},
});


const upload = multer({ storage: storage });


router.post("/addproduct",upload.any(),adminproductcontroller.addproduct);
router.get ("/allproduct",adminproductcontroller.getallproduct);
router.get("/singleproduct/:id",adminproductcontroller.singleproduct);
router.get("/getcatproduct/:catname",adminproductcontroller.getcategoryproduct);
router.delete("/deleteproduct/:id",adminproductcontroller.deleteproduct);
router.put("/updateproduct",upload.any(),adminproductcontroller.updateproduct);

module.exports = router;