import Hotels from "../models/Hotels.js";
import Rooms from "../models/Rooms.js";
export const CreateHotel = async (req, res, next) => {
  const newHotel = new Hotels(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const UpdateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotels.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const GetHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotels.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

export const GetHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const getHotels = await Hotels.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 90000 },
    }).limit(req.query.limit);
    res.status(200).json(getHotels);
  } catch (error) {
    next(error);
  }
};

export const DeleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotels.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
    console.log("Hotel has been Deleted Successfully");
  } catch (error) {
    next(error);

    res.status(500).json(error);
  }
};

export const CountByCity = async (req, res, next) => {
  try {
    const cities = req.query.cities.split(",");
    const list = await Promise.all(
      cities.map((city) => {
        return Hotels.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
export const CountByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotels.countDocuments({ type: "hotel" });
    const motelCount = await Hotels.countDocuments({ type: "motel" });
    const resortCount = await Hotels.countDocuments({ type: "resort" });
    const boutiqueCount = await Hotels.countDocuments({ type: "boutique" });
    const conferenceCount = await Hotels.countDocuments({ type: "conference" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "motel", count: motelCount },
      { type: "resort", count: resortCount },
      { type: "boutique", count: boutiqueCount },
      { type: "conference", count: conferenceCount },
    ]);
  } catch (error) {
    next(error);
  }
};
// export const GetHotels = async (req, res, next) => {
//   try {
//     const getHotels = await Hotels.find();
//     res.status(200).json(getHotels);
//   } catch (error) {
//     next(error);
//   }
// };

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel =await Hotels.findById(req.params.id);
    const roomsList = await Promise.all(
      hotel.rooms.map((roomId) => Rooms.findById(roomId))
    );
    res.status(200).json(roomsList);
  } catch (error) {
    next(error);
  }
};
