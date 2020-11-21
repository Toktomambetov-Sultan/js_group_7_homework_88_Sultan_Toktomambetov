const express = require("express");
const schema = require("./../Models");
const router = express.Router();
const authorizationMiddleware = require("./../tools/routers/authorizationMiddleware");
const uploadImage = require("../tools/routers/uploadImg");
const fs = require("fs").promises;
const config = require("./../config");

router.get("/", async (req, res) => {
  try {
    const posts = await schema.Post.find(req.query)
      .populate({
        path: "user",
      })
      .sort({ datetime: -1 });
    res.send(posts);
  } catch (error) {
    res.status(500).send({ message: "Some problems with server." });
  }
});

router.post(
  "/",
  authorizationMiddleware,
  uploadImage.any(),
  async (req, res) => {
    const file = req.files.find((item) => item.fieldname === "image");
    try {
      if (!(file || req.body.description)) {
        return res.status(400).send({
          errors: {
            image: {
              message: "Please set in at least image field.",
            },
            description: {
              message: "Please set in at least description field.",
            },
          },
        });
      }
      const post = new schema.Post({
        title: req.body.title,
        description: req.body.description,
      });
      post.image = file && file.filename;
      post.user = req.user._id;
      await post.save();

      return res.send(post);
    } catch (error) {
      file && (await fs.unlink(config.ImageUploadingDir + "/" + file.filename));
      res.status(400).send(error);
    }
  }
);

router.delete("/", async (req, res) => {
  try {
    const ans = await schema.Post.deleteMany();
    res.send(ans);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
