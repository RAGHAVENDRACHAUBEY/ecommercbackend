const express = require("express");
const multer = require("multer");
const router = express.Router();
const adminslidercontroller = require("../../Controller/Admin/slider");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/slider");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/addslider", upload.any(), adminslidercontroller.addslider);
router.get("/getslider", upload.any(), adminslidercontroller.getallslider);
router.delete(
  "/deletslider/:id",
  upload.any(),
  adminslidercontroller.removeslider
);

module.exports = router;
