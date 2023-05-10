const userModel = require("../../Model/User/auth");
const { validateEmail, toTitleCase } = require("../../Config/function");
// const phonenumber = require("../Config/function");
// const bcrypt = require("bcryptjs");

class Auth {
	async register(req, res) {
		let { name, email, phone, password } = req.body;
		if (!name || !email || !phone || !password) {
			return res.status(500).json({ error: "All field must not be empty" });
		} else if (name.length < 3 && name.length > 25) {
			return res.status(500).json({ error: "Name must be 3-25 charecter" });
		}  else if (password.length < 8) {
			return res.status(500).json({ error: "password should be more than 8" });
		} else if (!validateEmail(email)) {
			return res.status(500).json({ error: "Email is not valid" });
		}
         else {
			try {
				// password = bcrypt.hashSync(password, 10);
				name = toTitleCase(name);
				const Email = await userModel.findOne({ email: email });
				if (Email) {
					return res.status(500).json({ error: "Email already exits" });
				}
				const mobile = await userModel.findOne({ phone: phone });
				if (mobile) {
					return res.status(400).send({ error: "mobile number already exits" });
				}
				let Newuser = new userModel({
					name,
					email,
					phone,
					password,
					
				});
				Newuser.save().then((data) => {
					console.log(data);
					return res
						.status(200)
						.json({success:"true", message: "Signup Success, Please login" });
				});
			} catch (error) {
				console.log(error);
				return res.status(500).json({
					success: false,
					message: "Errro in Registeration",
					error,
				  })
			}
		}
	}
	async allUser(req, res) {
		try {
			let allUser = await userModel.find({});
			res.json({ users: allUser });
		} catch {
			res.status(404);
		}
	}
	async login (req, res) {
		let { email, password } = req.body;
		try {
			if (!email | !password) {
				return res.status(500).json({ error: "Please fill all fields" });
			} 
				const data = await userModel.findOne({ email });
				if (!data) {
					return res.status(500).json({ error: "Invalid email" });
				} 
				const passcheck= await userModel.findOne({ password });
				if (!passcheck) {
					return res.status(500).json({ error: "Invalid password" });
				} 
				const data1 = await userModel.findOne({ email });
				return res.json({ Success: "Signin successful", user: data1 });
					
	
			
		} catch (error) {
			console.log(error);
		}
	}

	async getlogout(req, res) {
		let signout = req.params.userid;
		try {
			await userModel
				.findOneAndUpdate({ _id: signout }, { status: "Offline" })
				.then((data) => {
					return res.json({ Success: "Signout Successfully" });
				})
				.catch((err) => {
					return res.status({ error: "Something went wrong" });
				});
		} catch (error) {
			console.log(error);
		}
	}


}

const authController = new Auth();
module.exports = authController;