const express=require("express")
const Comment=require("../models/comment.model")

const router=express.Router()

router.get("/",async(req,res)=>{
  try {
      const comment=await Comment.find().lean().exec()
      res.status(200).send(comment)
  } catch (error) {
      console.log(comment)
  }
})

router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).send(comment);
  } catch (error) {
    console.log(comment);
  }
});

module.exports=router