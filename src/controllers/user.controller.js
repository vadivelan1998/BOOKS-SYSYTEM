const express = require("express");
const User = require("../models/User.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    res.status(200).send(user);
  } catch (error) {
    console.log(comment);
  }
});




module.exports = router;
