import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      required: true,
      enum: ["customer", "admin"],
      default: "customer",
    },
    location: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
        required: true,
      },
    },
    shippingAddress: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    vehicles: [String],
    savedProducts: [String],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
