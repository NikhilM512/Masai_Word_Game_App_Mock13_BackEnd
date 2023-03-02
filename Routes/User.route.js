const express=require("express");
const { UserModel } = require("../Models/User.model");

const userRouter=express.Router()

userRouter.get("/",async(req,res)=>{
    const users = await UserModel.find();
    res.send({"allUsers":users});
});

userRouter.post("/",async(req,res)=>{

    const user = new UserModel(req.body);
    await user.save();
    res.send({"msg":"POSTED SUCCESSFULLY","res":user,"status":200});

})

module.exports={userRouter}