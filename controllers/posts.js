const { ModelPost } = require("../models/Posts");

const posts = async (req, res) => {
  try {
    const allPosts = await ModelPost.find({});

    res.status(200).json({ allPosts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { posts };
