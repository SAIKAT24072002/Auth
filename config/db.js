import mongoose from "mongoose";



export const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_URL,{dbName:process.env.DB_NAME})
    .then(()=>{
        console.log("Mongodb connected")
    }).catch((err)=>{
         console.log(err)
    })
}