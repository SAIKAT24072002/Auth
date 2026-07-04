import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import user from './routes/userRoute.js'
dotenv.config({path:'./config/.env'})
const app=express()
connectDB()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true
}))

app.use('/api/v1/user',user)


app.listen(process.env.PORT,()=>{
    console.log(`server is Listning on port no ${process.env.PORT}`)
})