const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).send({ user });
});
router.get("/", async (req, res) => {
  const user = await User.find().lean().exec();
  res.status(201).json({ user });
});

module.exports = router;
