const express = require("express");
const router = express.Router();

const whishlistController = require("../../Controller/User/whishlist");

router.post("/addWhishList", whishlistController.addWhishList);
router.get(
  "/getWishlistByCustomerId/:id",
  whishlistController.getWishlistByCustomerId
);

router.delete(
  "/deleteWishListbyId/:id",
  whishlistController.deleteWishListbyId
);
router.delete(
  "/removeWishlistbcustomeryId/:customerId/:productId",
  whishlistController.removeWishlistbcustomeryId
);
module.exports = router;
