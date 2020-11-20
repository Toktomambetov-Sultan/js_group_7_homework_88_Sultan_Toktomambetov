const mongoose = require("mongoose");

const UserModel = require("./models/UserModel");
const PostModel = require("./models/PostModel");
const CommentModel = require("./models/CommentModel");

const User = mongoose.model("User", UserModel);
const Post = mongoose.model("Post", PostModel);
const Comment = mongoose.model("Comment", CommentModel);

module.exports = {
  User,
  Post,
  Comment,
};
