const mongoose = require("mongoose");
const mongooseIdValidator = require("mongoose-id-validator");
const config = require("../config");
const Schema = mongoose.Schema;
const fs = require("fs").promises;

const CommentModel = new Schema({
  text: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

CommentModel.plugin(mongooseIdValidator);

module.exports = CommentModel;
