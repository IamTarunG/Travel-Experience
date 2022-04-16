const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");

const postRouter = require("./routes/posts.js");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
connectToDB();
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "30mb" }));
app.use(express.json({ limit: "30mb" }));
app.use("/posts", postRouter);
app.listen(5000, () => {
  console.log("Server Running at port 5000");
});
