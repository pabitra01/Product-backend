const jwt =require('jsonwebtoken')


const authentication =(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader){
        res.status(401).send("User is not authenticated");
        return
    }
    const token=authHeader.split(" ")[1];
    try {
        const user=jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;
        next();
    } catch (error) {
        res.status(403).json({msg:error});
        return;
    }
}
module.exports=authentication