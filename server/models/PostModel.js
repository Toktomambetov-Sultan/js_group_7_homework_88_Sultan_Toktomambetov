const mongoose = require("mongoose");
const mongooseIdValidator = require("mongoose-id-validator");
const config = require("../config");
const Schema = mongoose.Schema;
const fs = require("fs").promises;

const PostModel = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  datetime: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

PostModel.plugin(mongooseIdValidator);

PostModel.pre("deleteMany", async () => {
  const data = await mongoose.model("Post").find();
  await mongoose.model("Comment").deleteMany();

  for (item of data) {
    item.image &&
      (await fs.unlink(config.ImageUploadingDir + "/" + item.image));
  }
});

module.exports = PostModel;
