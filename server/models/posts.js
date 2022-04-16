const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  image: {
    type: String,
  },
  tags: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postData = mongoose.model("postData", postSchema);
module.exports = postData;
