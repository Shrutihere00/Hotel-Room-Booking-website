import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, UpdateRoom, updateRoomUnavailableDates } from "../controllers/roomController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router()

// router.post("/:hotelId",verifyAdmin,createRoom);
router.post("/:hotelId",createRoom);
router.put('/:id',verifyAdmin,UpdateRoom);
// router.delete('/:hotelId/:id',verifyAdmin,deleteRoom);
router.delete('/:hotelId/:id',deleteRoom);
router.get("/:id",getRoom);
router.get("/",getRooms);
router.put("/unavailable/:id",updateRoomUnavailableDates)

export default router; 