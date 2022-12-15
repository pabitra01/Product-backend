const products = require("../models/products");
const user = require("../models/user");
const User=require('../models/user')

const postProduct=async(req,res)=>{
    try {
        const {_id}=req.user
        req.body.user=_id;
        const product=await products.create(req.body);
        const userData=await User.findOneAndUpdate({_id},{$push:{products:product._id}},{new:true})
        if(!product){
            res.status(500).json({msg:"error"})
        }
        res.status(201).json({product});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}
const getProducts=async(req,res)=>{
    try {
        const allProducts=await products.find({});
        if(!allProducts){
            res.status(500).json({msg:"erron"})
        }
        res.status(200).json({allProducts})
    } catch (error) {
        res.status(500).json({msg:"erron"})
        
    }
}
const getUnsoldProducts=async(req,res)=>{
    try {
        const allProducts=await products.find({is_purchased:false}).populate('user');
        if(!allProducts){
            res.status(500).json({msg:"erron"})
        }
        res.status(200).json({allProducts})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const postPurchaseProducts=async(req,res)=>{
    try {
        const {id}=req.params;
        const {_id}=req.user;
        console.log(id);
        const allProducts=await products.findByIdAndUpdate({_id:id},{is_purchased:true},{new:true});
        const userData=await user.findByIdAndUpdate({_id},{$push:{purchased_products:allProducts._id}},)
        console.log(allProducts);
        console.log(userData);
        if(!allProducts){
            res.status(500).json({msg:"erron"})
        }
        res.status(200).json({allProducts})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports={postProduct,getProducts,getUnsoldProducts,postPurchaseProducts}