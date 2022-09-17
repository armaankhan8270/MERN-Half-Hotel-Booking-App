import express from "express";
import { createRoom, GetRoom } from "../Controllers/Room.js";
const router = express.Router();

router.get("/", GetRoom);
router.post("/:hotelid", createRoom);

export default router;
