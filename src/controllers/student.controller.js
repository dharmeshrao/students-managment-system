const express = require("express");
const router = express.Router();
const Student = require("../models/user.model");

router.post("/", async (req, res) => {
  const user = await Student.create(req.body);
  res.status(200).send({ user });
});
router.get("/", async (req, res) => {
  const user = await Student.find().lean().exec();
  res.status(201).json({ user });
});

module.exports = router;
