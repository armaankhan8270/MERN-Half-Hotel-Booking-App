import Hotel from "../Models/Hotel.js";
import Rooms from "../Models/Rooms.js";

export const createRoom = async (req, res, next) => {
  const hotelid = req.params.hotelid;
  const newRoom = new Rooms(req.body);
  try {
    const saveRoom = await newRoom.save();
    Hotel.findByIdAndUpdate(hotelid, { $push: { rooms: saveRoom._id } });
    res.json(saveRoom);
  } catch (error) {
    next(error);
  }
};
export const GetRoom = async (req, res, next) => {
  try {
    const AllRooms = await Rooms.find();
    res.send(AllRooms);
  } catch (err) {
    next(err);
  }
};
