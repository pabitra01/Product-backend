const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    desc:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    is_purchased:{
        type:Boolean,
        required:true,
        default:false
    },
    photo:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
})
module.exports=mongoose.model("Product",productSchema)