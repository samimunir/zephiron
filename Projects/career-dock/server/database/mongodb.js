import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `career-dock + MongoDB connection successful: [${conn.connection.host}]`
    );
  } catch (err) {
    console.log("*** career-dock + MongoDB connection failed! ***");
    console.log(`\tERROR > message: ${err.message}`);
    console.error("MongoDB connection failed.");
    return 1;
  }
};
