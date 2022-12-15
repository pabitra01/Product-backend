const products = require("../models/products");

const getDemo=async(req,res)=>{
    try {
        res.status(200).json({demo : "this is demo you can modify it and use it"});
    } catch (error) {
        console.log(error);
    }
}
const postProduct=async(req,res)=>{
    try {
        const product=await products.create(req.body);
        if(!product){
            res.status(500).json({msg:"error"})
        }
        res.status(201).json({product});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}
module.exports={getDemo}