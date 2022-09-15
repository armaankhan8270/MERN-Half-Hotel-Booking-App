import express from "express";
import {
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetAllUser,
  GetUser,
} from "../Controllers/User.js";
import { verifyToken } from "../verify.js";
const router = express.Router();
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});
router.post("/", CreateUser);
//Update
router.put("/:id", UpdateUser);
//Delete
router.delete("/:id", DeleteUser);
//get
router.get("/:id", GetUser);
//get All
router.get("/", GetAllUser);

export default router;
