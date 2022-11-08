import Rooms from "../models/Rooms.js";
import Hotels from "../models/Hotels.js";
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const createRoom = new Rooms(req.body);
  try {
    const savedRoom = await createRoom.save();
    try {
      await Hotels.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
      console.log(
        `Room id- ${savedRoom._id} added to the hotel having id- ${hotelId}`
      );
    } catch (error) {
      next(error);
    }
    res.status(201).json(savedRoom);
  } catch (error) {
    next(error);
  }
};
export const UpdateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Rooms.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};


export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    const deletedRoom = await Rooms.findByIdAndDelete(req.params.id);
    try {
      await Hotels.findByIdAndUpdate(hotelId, {
        $pull:{ rooms: req.params.id }, 
      });
      console.log(
        `Room id- ${req.params.id} removed from the hotel having id- ${hotelId}`
      );
    } catch (error) {
      next(error);
    }
    res.status(200).json(deletedRoom);
    console.log("Room is deleted Successfully");
  } catch (error) {
    next(error);
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const getRoom = await Rooms.findById(req.params.id);
    res.status(200).json(getRoom);
  } catch (error) {
    next(error);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const getRooms = await Rooms.find();
    res.status(200).json(getRooms);
  } catch (error) {
    next(error);
  }
};

export const updateRoomUnavailableDates=async(req,res,next)=>{
  try {
    const updatedUnavailableDates=await Rooms.updateOne({"roomNumbers._id":req.params.id},{$push:{"roomNumbers.$.unavailableDates":req.body.dates}},{new:true})
    res.status(200).send(updatedUnavailableDates)
  } catch (error) {
    next(error)
    
  }
}