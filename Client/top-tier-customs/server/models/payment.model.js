import mongoose from "mongoose";
import Product from "../models/product.model.js";
import Service from "../models/service.model.js";

const paymentSchema = new mongoose.Schema(
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
    method: {
      type: String,
      enum: ["COD", "credit-card", "debit-card", "paypal", "monzo"],
      default: "COD",
    },
    status: {
      type: String,
      enum: ["paid", "not-paid"],
      default: "not-paid",
    },
  },
  { timestamps: true }
);

export default mongoose.Schema("Payment", paymentSchema);
