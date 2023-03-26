import jwt from "jsonwebtoken";


export const verifyToken = (req,res,next)=>{
    try {
        const token = req.cookies.access_token
        if(!token){
            return res.status(401).json({message:"You are not authenticated"})
        }
        jwt.verify(token,process.env.jwt_secret,(err,user)=>{
            if(err)
            return res.status(403).json({message:'Invaild token'})
            req.user = user
            next()
        })
    } catch (error) {
        next(error)
    }
}