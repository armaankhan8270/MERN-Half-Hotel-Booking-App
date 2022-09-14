import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello i am Auth Router");
});

export default router;
