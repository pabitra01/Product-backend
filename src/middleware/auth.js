//this is an authentication middleware


const jwt =require('jsonwebtoken')


const authentication =(req,res,next)=>{
    const token=req.cookies?.jwt;
    if(!token){
        res.status(401).send("User is not authenticated");
    }
    try {
        const user=jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;
        next();
    } catch (error) {
        res.status(403).json({msg:error});
    }
}
module.exports=authentication