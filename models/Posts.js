const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

const ModelPost = mongoose.model("posts", postSchema);

module.exports = { ModelPost };
