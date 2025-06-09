import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`top-tier-customs SERVER is live on http://localhost:${PORT}`);
});
