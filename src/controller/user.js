const user = require("../models/user");
const jwt=require('jsonwebtoken')

const getUser=async(req,res)=>{
    try {
        const {_id}=req.user;
        const userData=await user.findOne({_id:_id}).populate('products').populate('purchased_products');
        if(!userData){
            res.status(400).json({msg:"user not authanticated"})
            return;
        }
        res.status(200).json({userData});
    } catch (error) {
        console.log(error);
    }
}
const registerUser=async(req,res)=>{
    try{
        console.log(req.body);
        const userData=await user.create(req.body);
        if(!userData){
            res.status(500).json({msg:err})
            return;
        }
        const { _id , username}=userData;
        const token=jwt.sign({_id,username},process.env.JWT_SECRET,{
            expiresIn:'7d'
        })
        userData.token=token;
        userData.save();
        res.status(201).json({userData})
    }catch(err){
        console.log(err);
    }
}
const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        console.log(req.body);
        const userData=await user.findOne({email:email});
        if(!userData) {
            res.status(400).json({msg:"invalid credential"});
            return;
        }
        if(userData.password!==password){
            res.status(400).json({msg:"invalid credential"});
            return;
        }
        const { _id , username}=userData;
        const token=jwt.sign({_id,username},process.env.JWT_SECRET,{
            expiresIn:'7d'
        })
        userData.token=token;
        userData.save();
        res.status(200).json({userData});
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    getUser,loginUser,registerUser
}