import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `top-tier-customs + MongoDB connection successful: [${conn.connection.host}]`
    );
  } catch (err) {
    console.log("*** top-tier-customs + MongoDB connection failed!");
    console.log(`\tERROR > message: ${err.message}`);
    console.error("MongoDB connection failed.");

    return 1;
  }
};
