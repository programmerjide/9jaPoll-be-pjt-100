const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  headerImg: {
    type: String,
  },
  description: {
    type: String,
  },
  body: {
    type: String,
    required: [true, "Article body is required"],
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
