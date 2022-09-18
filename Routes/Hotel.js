import express from "express";
import {
  countByCity,
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
router.get("/find/:id", GetHotel);
//get All
router.get("/", GetAllHotel);
router.get("/countBycity", countByCity);

export default router;

//http://localhost:3001/api/hotel/countBycity?cities=london
