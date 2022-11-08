import express from "express"
import {  DeleteUser, GetUser, GetUsers, UpdateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router()

//CHECK AUTHENTIFICATION
router.get('/checkAuthentification',verifyToken,(req,res,next)=>{
    res.send("Hello user you are logged in ")
})
//CHECK IF USER IS USER
router.get('/checkUser/:id',verifyUser,(req,res,next)=>{
    res.send('You are logged in and you can delete this account')
})
//CHECK IS USER IS ADMIN
router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello admin you can do anything")
})
//UPDATE
router.put('/:id', verifyUser,  UpdateUser)
//GETUSER
router.get('/:id',verifyUser ,GetUser)
//GETUSERS
// router.get('/',verifyUser,GetUsers)
router.get('/',GetUsers)
//DELETEUSER
// router.delete('/:id', verifyAdmin,DeleteUser)
router.delete('/:id',DeleteUser)
export default router;  