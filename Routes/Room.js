import express from "express";
import { createRoom, GetOneRoom, GetRoom } from "../Controllers/Room.js";
const router = express.Router();

router.get("/", GetRoom);
router.post("/:hotelid", createRoom);
router.get("/:id", GetOneRoom);

export default router;
