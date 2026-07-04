import express from "express";
import { getProfile, login, signUp } from "../controller/userController.js";
import { isAuthenticated } from '../middleware/userMiddleware.js'


const router=express.Router()


router.post('/signup',signUp)
router.post('/login',login)
router.get('/getprofile',isAuthenticated,getProfile)




export default router