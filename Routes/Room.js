import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello i am rOom Router");
});

export default router;