const getDemo=async(req,res)=>{
    try {
        res.status(200).json({demo : "this is demo you can modify it and use it"});
    } catch (error) {
        console.log(error);
    }
}
module.exports={getDemo}