const { find } = require("../../Model/Admin/product");
const adminproducts = require("../../Model/Admin/product");

class products {
  // add Product
  async addproduct(req, res) {
    try {
      let { productname, productprice, productcategory, productdis } = req.body;

      let obj = { productname, productprice, productcategory, productdis };

      if (req.files.length != 0) {
        let arr = req.files;
        let i;
        for (i = 0; i < arr.length; i++) {
          if (arr[i].fieldname == "productimage") {
            obj["productimage"] = arr[i].filename;
          }
          if (arr[i].fieldname == "productsubimage1") {
            obj["productsubimage1"] = arr[i].filename;
          }
          if (arr[i].fieldname == "productsubimage2") {
            obj["productsubimage2"] = arr[i].filename;
          }
          if (arr[i].fieldname == "productsubimage3") {
            obj["productsubimage3"] = arr[i].filename;
          }
        }
      }
      // console.log("fdk",obj)

      let Newproduct = new adminproducts(obj);
      Newproduct.save().then((data) => {
        console.log(data);
        return res.status(201).json({
          success: true,
          message: "Product Created Successfully",
          products,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error,
        message: "Error in crearing product",
      });
    }
  }
  //  get all product

  async getallproduct(req, res) {
    let product = await adminproducts.find({});
    console.log(product);
    if (product) {
      return res.status(200).json({
        product: product,
      });
    } else {
      return res.status(500).json({ error: "something went wrong" });
    }
  }

  // Singal product

  async singleproduct(req, res) {
    let { id } = req.params;
    let singproduct = await adminproducts.findOne({ _id: id });
    console.log(singproduct);
    if (singproduct) {
      return res.status(200).json({
        product: singproduct,
      });
    } else {
      return res.status(500).json({ error: "something went wrong" });
    }
  }

  // category
  async getcategoryproduct(req, res) {
    let catname = req.params.catname;
    let product = await adminproducts.find({ productcategory: catname });
    // console.log(product)
    if (product) {
      return res.status(200).json({ product: product });
    } else {
      return res.status(500).json({ error: "something went wrong" });
    }
  }

  //Delete

  async deleteproduct(req, res) {
    let { id } = req.params;
    try {
      let dproduct = await adminproducts.findByIdAndDelete({ _id: id });
      console.log(dproduct);
      return res.status(200).json({
        Success: "Removed Successfully",
      });
    } catch (error) {
      return res.status(200).json({
        error: "Something went wrong",
      });
    }
  }

  //Update Product

  async updateproduct(req, res) {
    let { productname, productprice, productcategory, productdis, id } =
      req.body;
    let obj = {};
    if (productname) {
      obj["productname"] = productname;
    }
    if (productprice) {
      obj["productprice"] = productprice;
    }
    if (productcategory) {
      obj["productcategory"] = productcategory;
    }
    if (productdis) {
      obj["productdis"] = productdis;
    }
    // let file = req.files[0].filename;
    // let file1 = req.files[1].filename;
    // let file2 = req.files[2].filename;
    // let file3 = req.files[3].filename;

    if (req.files.length != 0) {
      let arr = req.files;
      let i;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].fieldname == "productimage") {
          obj["productimage"] = arr[i].filename;
        }
        if (arr[i].fieldname == "productsubimage1") {
          obj["productsubimage1"] = arr[i].filename;
        }
        if (arr[i].fieldname == "productsubimage2") {
          obj["productsubimage2"] = arr[i].filename;
        }
        if (arr[i].fieldname == "productsubimage3") {
          obj["productsubimage3"] = arr[i].filename;
        }
      }
    }

    // let {id}= req.body;
    try {
      let updatesproducts = await adminproducts.findByIdAndUpdate(
        id,
        { $set: obj },
        { new: true }
      );
      console.log(updatesproducts);
      return res.status(200).json({
        Success: "Update Successfully",
      });
    } catch (error) {
      return res.status(200).json({
        error: "Something went wrong",
      });
    }
  }
}

const adminproductcontroller = new products();
module.exports = adminproductcontroller;
