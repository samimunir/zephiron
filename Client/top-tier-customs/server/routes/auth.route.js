import express from "express";
import { register, login, userData } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/:id", userData);

export default authRouter;
