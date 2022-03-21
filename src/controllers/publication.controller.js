const express = require("express");
const Publication = require("../models/publication.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const publication = await Publication.find().lean().exec();
    res.status(200).send(publication);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const publication = await Publication.create(req.body);
    res.status(200).send(publication);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
