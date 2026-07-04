import { User } from "../model/userModel.js"
import jwt from 'jsonwebtoken'


export const signUp = async (req, res) => {
    try {
        const user = await User.create(req.body)
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

        res.status(201)
            .cookie('token', token, {
                httpOnly: true,
                secure: false,
                maxAge: 24 * 60 * 60 * 1000
            })
            .json({
                success: true,
                message: 'User Created Successfully',
                user
            })

    } catch (err) {
        // console.log(err)
        res.status(400)
            .json({
                success: false,
                error: err.message
            })
    }
}








export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400)
                .json({
                    success: false,
                    error:"email or password not valid"
                })
        }
        if(!user.comparePassword(req.body.password))
        {
           res.status(400)
                .json({
                    success: false,
                    error:"email or password not valid"
                })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

        res.status(201)
            .cookie('token', token, {
                httpOnly: true,
                secure: false,
                maxAge: 24 * 60 * 60 * 1000
            })
            .json({
                success: true,
                message: 'User Login successfull',
                user
            })

    } catch (err) {
        // console.log(err)
        res.status(400)
            .json({
                success: false,
                error: err.message
            })
    }
}


export const getProfile = async (req, res) => {
    try {
        res.status(201)
            .json({
                success: true,
                message: 'get Profile successfull',
                user:req.user
            })

    } catch (err) {
        // console.log(err)
        res.status(400)
            .json({
                success: false,
                error: err.message
            })
    }
}
