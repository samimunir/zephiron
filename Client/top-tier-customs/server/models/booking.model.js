import mongoose from "mongoose";
import Service from "../models/service.model.js";

const bookingSchema = new mongoose.Schema(
  {
    services: {
      type: [Service],
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: String,
      required: true,
    },
    bookingTime: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.Schema("Booking", bookingSchema);
