import express from "express";
import mongoose from "mongoose";
import Userrouter from "./Routes/User.js";
import AuthRouter from "./Routes/Auth.js";
import HotelRouter from "./Routes/Hotel.js";
import RoomRouter from "./Routes/Room.js";
import cors from "cors";
import { Resgister } from "./Controllers/Auth.js";
const app = express();

app.use(express.json());

app.use(cors());

//code for connect to mongo db
const url =
  "mongodb+srv://armaankhan:armaan242@cluster0.ygbfntv.mongodb.net/?retryWrites=true&w=majority";
const connect = () => {
  try {
    mongoose.connect(url).then((e) => {
      console.log("successfully connected to mongodb");
    });
  } catch (e) {
    console.log(e);
  }
};
//code for informing us to we are dissconnected to mongo db
mongoose.connection.on("disconnect", () => {
  console.log(" mongodb disconnected");
});
//code for informing us to we are conneted to mongo db
mongoose.connection.on("connected", () => {
  console.log(" mongodb connected");
});
//rotes code here
// app.use('/register',Resgister)
app.use("/api/user", Userrouter);
app.use("/api/auth", AuthRouter);
app.use("/api/room", RoomRouter);
app.use("/api/hotel", HotelRouter);
app.use("/", (req, res) => res.send("hello Welcome To Booking App"));

//error handling milware
app.use((err, req, res, next) => {
  return res.json("i am errorrrrrr" + err);
});
app.listen(3001, () => {
  connect();
  console.log("server in running on port 3001");
});
