import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `career-dock + MongoDB connection successful: [${conn.connection.host}]`
    );
  } catch (err) {
    console.log("*** career-dock + MongoDB connection failed! ***");
    console.error("MongoDB connection failed.");
    return 1;
  }
};
