import express from "express";
import {
  createService,
  editService,
  deleteService,
  getService,
} from "../controllers/service.controller.js";

const serviceRouter = express.Router();

serviceRouter.post("/create", createService);
serviceRouter.put("/:id", editService);
serviceRouter.delete("/:id", deleteService);
serviceRouter.get("/:id", getService);

export default serviceRouter;
