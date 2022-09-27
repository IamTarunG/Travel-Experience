const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");

const postRouter = require("./routes/posts.js");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
connectToDB();
const port = process.env.PORT | 5000
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "30mb" }));
app.use(express.json({ limit: "30mb" }));
app.use("/posts", postRouter);
app.listen(port, () => {
  console.log("Server Running at port " + port);
});
