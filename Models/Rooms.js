import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
    maxPepole: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    roomNumber: [{ number: Number, UnavailableDate: [{ type: Date }] }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
