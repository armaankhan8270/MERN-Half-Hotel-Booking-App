import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  distance: {
    type: String,
    require: true,
  },
  photos: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
    // require:true
  },
  cheapestprice: {
    type: Number,
    require: true,
  },

  feture: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema);
