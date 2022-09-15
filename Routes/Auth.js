import express from "express";
import { GetAllResgister, Login, Resgister } from "../Controllers/Auth.js";
const router = express.Router();

router.post("/register", Resgister);
router.get("/register", GetAllResgister);
router.post("/Login", Login);

export default router;
