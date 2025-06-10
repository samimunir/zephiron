import express from "express";
import {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.put("/:id", editProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/:id", getProduct);

export default productRouter;
