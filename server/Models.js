const mongoose = require("mongoose");

const UserModel = require("./models/UserModel");
const PostModel = require("./models/PostModel");

const User = mongoose.model("User", UserModel);
const Post = mongoose.model("Post", PostModel);

module.exports = {
  User,
  Post,
};
