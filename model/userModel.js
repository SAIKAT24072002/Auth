import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],

    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:[true,"Email should be unique"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
},{timestamps:true})

userSchema.pre('save',async function(next)
{
    if(!this.isModified('password'))
    {
      next()
    }
    this.password=await bcrypt.hash(this.password,8)
    return
})

userSchema.methods.comparePassword=async function (enteredPassword)
{
    return await bcrypt.compare(enteredPassword,this.password)
}


export const User=mongoose.model('User',userSchema)
