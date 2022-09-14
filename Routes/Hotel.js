import express from "express";
import Hotel from "../Models/Hotel.js";
const router = express.Router();

// router.get("/", (req, res) => {
//   const data = req.body;

//   res.send("Hello i am Hotel Router" + data);
// });
//Post
router.post("/", async (req, res) => {
  //code for making schema and then posting data into mongodb
  const newHotel = new Hotel(req.body);
  try {
    const SavedHotel = await newHotel.save();
    res.json(SavedHotel);
  } catch (err) {
    res.json(err);
  }
});
//Update
router.put("/:id", async (req, res) => {
  //code for updating schema data into mongodb
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
    res.json(err);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  //code for updating schema data into mongodb
  try {
    const DeleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.json(DeleteHotel);
  } catch (err) {
    res.json(err);
  }
});
//get
router.get("/:id", async (req, res) => {
  //code for updating schema data into mongodb
  try {
    const Hotel = await Hotel.findById(req.params.id);
    res.json(Hotel);
  } catch (err) {
    res.json(err);
  }
});
//get All
router.get("/", async (req, res) => {
  //code for updating schema data into mongodb
  try {
    const AllHotels = await Hotel.find();
    res.json(AllHotels);
  } catch (err) {
    res.json(err);
  }
});

export default router;
