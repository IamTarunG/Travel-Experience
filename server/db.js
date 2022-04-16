const mongoose = require("mongoose");

const connectToDB = () => {
  let url = process.env.MONGO_URL;
  mongoose.connect(url, () => {
    console.log("Connected to DB");
  });
};
module.exports = connectToDB;
