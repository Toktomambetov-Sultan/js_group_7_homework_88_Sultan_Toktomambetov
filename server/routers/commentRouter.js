const express = require("express");
const schema = require("./../Models");
const router = express.Router();
const authorizationMiddleware = require("./../tools/routers/authorizationMiddleware");
const config = require("./../config");

router.get("/", async (req, res) => {
  try {
    const comments = await schema.Comment.find(req.query)
      .populate({ path: "user" })
      .populate({
        path: "post",
        populate: {
          path: "user",
        },
      })
      .sort({ datetime: -1 });
    res.send(comments);
  } catch (error) {
    res.status(500).send({ message: "Some problems with server." });
  }
});

router.post("/", authorizationMiddleware, async (req, res) => {
  try {
    const comment = new schema.Comment({
      text: req.body.text,
      post: req.body.post,
    });
    comment.user = req.user._id;
    await comment.save();

    return res.send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const ans = await schema.Comment.deleteMany();
    res.send(ans);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
