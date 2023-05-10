const express = require("express");
const router = express.Router();
const admicatconntroller = require("../../Controller/Admin/categories");

router.post("/addcat", admicatconntroller.AdminAddcat);
router.get("/allcategory", admicatconntroller.getallcategory);
router.delete("/category/:id",admicatconntroller.deletecategory);
router.put("/update-category",admicatconntroller.updatecategory);

module.exports = router;
