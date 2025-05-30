import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./database/mongodb.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`career-dock SERVER is live on: http://localhost:${PORT}`);
  connectDB();
});
