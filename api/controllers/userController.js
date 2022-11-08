import Users from "../models/Users.js"

export const UpdateUser=async(req,res,next)=>{
    try {
        const updateUser=await Users.findByIdAndUpdate(req.params.is,{$set:req.body},{new:true})
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}

export const DeleteUser=async(req,res,next)=>{
    try {
        const deleteUser=await Users.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteUser)
        console.log("User is deleted Successfully")
        
    } catch (error) {
        next(error)
    }
}

export const GetUser=async(req,res,next)=>{
    try {
        const getUser=await Users.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}

export const GetUsers=async(req,res,next)=>{
    try {
        const getUsers=await Users.find()
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
}
