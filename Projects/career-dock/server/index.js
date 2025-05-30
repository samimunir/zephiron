import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./database/mongodb.js";
import authRouter from "./routes/auth.route.js";
import recordRouter from "./routes/record.route.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/records", recordRouter);

app.listen(PORT, () => {
  console.log(`career-dock SERVER is live on: http://localhost:${PORT}`);
  console.log(`--> JWT_SECRET: ${process.env.JWT_SECRET}`);
  console.log(`--> ADMIN_CODE: ${process.env.ADMIN_CODE}`);
  connectDB();
});
