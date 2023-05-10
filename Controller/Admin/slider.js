const adminslider = require("../../Model/Admin/slider");

class slider {
  async addslider(req, res) {
    try {
      let { title, discription } = req.body;

      let obj = { title, discription };

      if (req.files.length != 0) {
        let arr = req.files;
        let i;

        for (i = 0; i < arr?.length; i++) {
          if (arr[i]?.fieldname == "image") {
            obj["image"] = arr[i]?.filename;
          }
        }
      }
      //   console.log("fdk", obj);

      let Newslider = new adminslider(obj);
      Newslider.save().then((data) => {
        console.log(data);
        return res.status(201).json({
          success: true,
          message: "Slider Created Successfully",
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error,
        message: "Error in crearing slider",
      });
    }
  }

  // getallSLider
  async getallslider(req, res) {
    let slider = await adminslider.find({});
    console.log(slider);

    if (slider) {
      return res.status(200).json({
        slider: slider,
      });
    } else {
      res.status(500).json({
        error: "something went wrong",
      });
    }
  }

  // Remove Slider

  async removeslider(req, res) {
    let { id } = req.params;
    try {
      let dslider = await adminslider.findByIdAndDelete({ _id: id });
      console.log(dslider);
      return res.status(200).json({
        Success: "Removed Successfully",
      });
    } catch (error) {
      return res.status(200).json({
        error: "Something went wrong",
      });
    }
  }
}

const adminslidercontroller = new slider();
module.exports = adminslidercontroller;
