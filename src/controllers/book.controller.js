const express = require("express");
const Book = require("../models/book.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
    res.status(200).send(comment);
  } catch (error) {
    console.log(comment);
  }
});

router.post("/", async (req, res) => {
  try {
    const comment = await Book.create(req.body);
    res.status(200).send(comment);
  } catch (error) {
    console.log(comment);
  }
});

module.exports = router;
