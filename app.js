const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

//Db Connection
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected........."))
  .catch((err) => console.log("Database Not Connected !!!"));

const PORT = process.env.PORT || 8000;

//import Routes
const authrouter = require("./Routes/User/auth");
const adminrouter = require("./Routes/Admin/adminuser");
const admincategoriesrouter = require("./Routes/Admin/categories");
const adminproductrouter = require("./Routes/Admin/product");
const adminlsider = require("./Routes/Admin/slider");
const useraddress = require("./Routes/User/address");
const whishlish = require("./Routes/User/whislist");
const addaddress = require("./Routes/User/address");
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/admin", admincategoriesrouter);
app.use("/api/v1/admin", adminproductrouter);
app.use("/api/admin", adminrouter);
app.use("/api/v1/admin", adminlsider);
app.use("/api/v1/user", useraddress);
app.use("/api/v1/user", whishlish);
app.use("/api/v1/user", addaddress);

app.get("/", (req, res) => {
  res.send("Hello, Raghavendra!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
