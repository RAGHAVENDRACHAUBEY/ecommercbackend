const orderaddress = require("../../Model/User/address");

class Address {
  async addaddress(req, res) {
    let { userId, name, mobile, email, country, state, city, pincode } =
      req.body;
    try {
      let Newaddress = new orderaddress({
        userId,
        name,
        mobile,
        email,
        country,
        state,
        city,
        pincode,
      });

      if (
        !userId ||
        !name ||
        !mobile ||
        !email ||
        !country ||
        !state ||
        !city ||
        !pincode
      ) {
        return res.status(500).json({ error: "Please fill all fields" });
      } else {
        Newaddress.save().then((data) => {
          console.log(data);
          return res.status(200).json({ success: "success" });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getaddaddress(req, res) {
    let userid = req.params.userid;
    // console.log(userid, "gtiorjrer");
    try {
      let addaddress = await orderaddress.find({ userId: userid });
      if (addaddress) {
        return res.status(200).json({ addaddress: addaddress, userId: userid });
      } else {
        return res.status(500).json({ error: "something went wrong" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteaddddress(req, res) {
    let remove = req.params.id;
    try {
      await orderaddress
        .findOneAndDelete({ _id: remove })
        .then((data) => {
          return res.json({ Success: "Address removed Successfully" });
        })
        .catch((err) => {
          return res.status({ error: "Something went wrong" });
        });
    } catch (error) {
      console.log(error);
    }
  }

  async updateaddaddress(req, res) {
    try {
      let { name, mobile, email, country, state, pincode, city } = req.body;
      let addressId = req.params.id;

      let obj = {};
      if (name) {
        obj.name = name;
      }
      if (mobile) {
        obj.mobile = mobile;
      }
      if (email) {
        obj.email = email;
      }
      if (country) {
        obj.country = country;
      }
      if (state) {
        obj.state = state;
      }
      if (pincode) {
        obj.pincode = pincode;
      }

      if (city) {
        obj.city = city;
      }

      let data = await orderaddress.findByIdAndUpdate(
        { _id: addressId },
        {
          $set: obj,
        },
        { new: true }
      );

      return res.status(200).json({
        Success: "customer Address create successfully",
        profileaddress: data,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
const addressController = new Address();
module.exports = addressController;
