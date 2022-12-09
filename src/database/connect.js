const mongoose=require('mongoose');

const connectToDatabase=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}
module.exports=connectToDatabase