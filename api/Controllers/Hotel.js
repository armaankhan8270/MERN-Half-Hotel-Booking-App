import Hotel from "../Models/Hotel.js";

export const CreateHotel = async (req, res, next) => {
  //code for making schema and then posting data into mongodb
  const newHotel = new Hotel(req.body);
  try {
    const SavedHotel = await newHotel.save();
    res.json(SavedHotel);
  } catch (err) {
    next(err);
  }
};
export const UpdateHotel = async (req, res, next) => {
  //code for update
  try {
    const UpdateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(UpdateHotel);
  } catch (err) {
    next(err);
  }
};
export const DeleteHotel = async (req, res, next) => {
  try {
    const DeleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.json("deleted item successfully");
  } catch (err) {
    next(err);
  }
};
export const GetHotel = async (req, res, next) => {
  try {
    const Hotel = await Hotel.findById("sss");
    res.json(Hotel);
  } catch (err) {
    next(err);
  }
};
export const GetAllHotel = async (req, res, next) => {
  //code for updating schema data into mongodb
  try {
    const AllHotels = await Hotel.find();
    res.json(AllHotels);
  } catch (err) {
    next(err);
  }
};
