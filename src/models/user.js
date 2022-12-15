const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    products:[
        
        {
            type:String,
            ref:"Product"
        }
        
    ],
    purchased_products:[
        
        {
            type:String,
            ref:"Product"
        }
        
    ],
})
module.exports=mongoose.model("User",userSchema)