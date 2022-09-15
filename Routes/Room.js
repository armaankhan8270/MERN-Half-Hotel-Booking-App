import express from "express";
import { createRoom } from "../Controllers/Room.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello i am rOom Router");
});
router.post("/", createRoom);

export default router;
