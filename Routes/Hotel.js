import express from "express";
import {
  CreateHotel,
  DeleteHotel,
  GetAllHotel,
  GetHotel,
  UpdateHotel,
} from "../Controllers/Hotel.js";
import Hotel from "../Models/Hotel.js";
const router = express.Router();

//Post
router.post("/", CreateHotel);
//Update
router.put("/:id", UpdateHotel);
//Delete
router.delete("/:id", DeleteHotel);
//get
router.get("/:id", GetHotel);
//get All
router.get("/", GetAllHotel);

export default router;
