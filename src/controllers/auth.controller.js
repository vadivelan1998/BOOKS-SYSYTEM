const express = require("express");
const User=require("../models/user.model")
const jwt =require("jsonwebtoken")
require("dotenv").config()
const generateToken=(user)=>{
    return jwt.sign({user},process.env.KEY)
}

const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.mail})
        if(!user)
        {
            return res.status(400).send("email already registered")

        }
        user=await User.create(req.body)
        const token=generateToken(user)
        console.log(token)
        return res.status(200).send({user,token})
    } catch (error) {
        console.log(error)
    }

}

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.mail });
    if (!user) {
      return res.status(400).send("wrong email or password");
    }

    const token = generateToken(user);
    console.log(token);
    return res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {register,login};
