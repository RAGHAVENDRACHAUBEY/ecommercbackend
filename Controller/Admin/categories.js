const categoryModel = require("../../Model/Admin/categories");

class Categories {
  async AdminAddcat(req, res) {
    let { catname } = req.body;

    try {
      let Newcat = new categoryModel({
        catname,
      });
      Newcat.save().then((data) => {
        console.log(data);
        return res.status(200).json({ success: "success" });
      });
    } catch (error) {
      console.log(error);
    }
  }


//   Get all category

 async getallcategory (req,res){
	 
	try {
		let category= await categoryModel.find({}) ;
		// console.log(category)
		return res.status(200).json({
	
			message: "All Categories List",
			success:category,
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			error,
			message: "Error while getting all categories",
		})
		
	}
 }

//  Delete category

async deletecategory (req,res){
	 
	try {
		let {id}= req.params;
		let category= await categoryModel.findByIdAndDelete(id) ;
		console.log(category)
		return res.status(200).json({
			success: true,
			message: "Category Deleted Successfully",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "error while deleting category",
			error,
		})
		
	}
 }

//  Update category

async updatecategory (req,res){

	
	let {id, catname } = req.body;
	try {
		// let {id}= req.params;
		let category= await categoryModel.findByIdAndUpdate(id,{catname:catname},{ new: true }) ;
		console.log(category)
		return res.status(200).json({
			success: true,
			message: "Category Update Successfully",
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			message: "error while updating category",
			error,
		})
		
	}
 }


}

const categoryController = new Categories();
module.exports = categoryController;
