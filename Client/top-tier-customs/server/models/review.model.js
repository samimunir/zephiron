import mongoose from "mongoose";
import Product from "../models/product.model.js";
import Service from "../models/service.model.js";

const reviewSchema = new mongoose.Schema(
  {
    for: {
      type: String,
      enum: ["product", "service"],
      required: true,
    },
    entity: {
      type: Product || Service,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    review: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.Schema("Review", reviewSchema);
