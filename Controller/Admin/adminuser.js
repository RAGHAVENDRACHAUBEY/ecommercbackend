const adminUsers = require("../../Model/Admin/adminuser");

class Admin {
	async AdminSignup(req, res) {
		let { email, password } = req.body;
		try {
			let Newuser = new adminUsers({
				email,
				password,
			});
			Newuser.save().then((data) => {
				console.log(data);
				return res.status(200).json({ success: "success" });
			});
		} catch (error) {
			console.log(error);
		}
	}

	async Postadminlogin(req, res) {
		let { email, password } = req.body;
		try {
			if (!email || !password) {
				return res.status(500).json({ error: "Please fill all fields" });
			} else {
				const data = await adminUsers.findOne({ email, password });
				if (!data) {
					return res.status(500).json({ error: "invalid email or password" });
				} else {
					return res
						.status(200)
						.json({ success: "login success", admin: data });
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	async adminSignout(req, res) {
		let signout = req.params.adminid;
		try {
			await adminUsers
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

const adminUsersauthontroller = new Admin();
module.exports = adminUsersauthontroller;
