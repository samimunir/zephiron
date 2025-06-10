import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    dropOff: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    fits: {
      type: [String],
    },
    // need to add functionality to CRUD service reviews...
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
