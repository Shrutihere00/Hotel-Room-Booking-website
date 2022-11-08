import express from "express";
import {
  CountByCity,
  CreateHotel,
  DeleteHotel,
  GetHotel,
  GetHotels,
  UpdateHotel,
  CountByType,
  getHotelRooms
} from "../controllers/hotelController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
//CREATE
// router.post("/",verifyAdmin, CreateHotel);
router.post("/", CreateHotel);
//UPDATE
router.put("/:id",verifyAdmin, UpdateHotel);
//DELETE
// router.delete("/:id",verifyAdmin, DeleteHotel);
router.delete("/:id", DeleteHotel);
//GET
router.get("/find/:id", GetHotel);
//GET ALL
router.get("/", GetHotels);
router.get("/countByCity", CountByCity);
router.get("/countByType", CountByType);
router.get("/hotelRooms/:id",getHotelRooms)
export default router;
