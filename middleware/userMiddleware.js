import jwt from 'jsonwebtoken'
import { User } from '../model/userModel.js'

export const isAuthenticated=async(req,res,next)=>{
    try{
        const token=req.cookies.token
        const {id}=jwt.verify(token,process.env.JWT_SECRET)
       
        const user=await User.findById(id)
        if(!user)
        {
            res.status(400)
            .json({
                success: false,
                error: "jwt token is expired"
            })
        }
        req.user=user
        next()


    }catch(err)
    {
        res.status(400)
            .json({
                success: false,
                error: err.message
            })
    }
}