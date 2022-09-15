import Hotel from "../Models/Hotel.js";
import Rooms from "../Models/Rooms.js";

export const createRoom = (req, res, next) => {
  const hotelid = req.paramas.hotelid;
  const newRoom = new Rooms(req.body);
  try {
    const saveRoom = newRoom.save();
    Hotel.findByIdAndUpdate(hotelid, { $push: { Rooms: saveRoom._id } });
    res.json(saveRoom);
  } catch (error) {
    next(error);
  }
};
