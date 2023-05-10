const whishlishModel = require("../../Model/User/whislist");

class WhisList {
  async addWhishList(req, res) {
    try {
      let { price, customerId, productId, quantity, totalPrice, Size } =
        req.body;
      console.log(price, customerId, productId, quantity, totalPrice);
      let data = await whishlishModel.create({
        price,
        customerId,
        productId,
        quantity,
        totalPrice,
      });

      return res.status(200).json({ success: "Successfully added" });
    } catch (error) {
      console.log(error);
    }
  }

  async getWishlistByCustomerId(req, res) {
    try {
      let id = req.params.id;
      let data = await whishlishModel
        .find({ customerId: id })
        .sort({ _id: -1 })
        .populate("productId");
      if (data.length != 0) return res.status(200).json({ success: data });
      return res.status(400).json({ error: "Data not found" });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteWishListbyId(req, res) {
    try {
      let id = req.params.id;
      let data = await whishlishModel.deleteOne({ _id: id }).sort({ _id: -1 });
      if (data.length != 0) return res.status(200).json({ success: data });
      return res.status(400).json({ error: "Data not found" });
    } catch (error) {
      console.log(error);
    }
  }
  async removeWishlistbcustomeryId(req, res) {
    try {
      let customerId = req.params.customerId;
      let productId = req.params.productId;
      let data = await whishlishModel.deleteOne({
        customerId: customerId,
        productId: productId,
      });
      if (data.length != 0) return res.status(200).json({ success: data });
      return res.status(400).json({ error: "Data not found" });
    } catch (error) {
      console.log(error);
    }
  }
}
const whishlistController = new WhisList();
module.exports = whishlistController;
