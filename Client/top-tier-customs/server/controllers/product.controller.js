import User from "../models/user.model.js";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const {
      adminId,
      title,
      description,
      price,
      quantity,
      installable,
      category,
      type,
      brand,
    } = req.body;

    const user = User.findById({ adminId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Product creation failed.",
        error: "Invalid user.",
      });
    }

    // TODO: implement logic to fetch user data from ID and verify if user is admin.
    // if (user.role !== "admin") {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Product creation failed.",
    //     error: "User is not ADMIN.",
    //   });
    // }

    const productData = {
      title,
      description,
      price,
      quantity,
      installable,
      category,
      type,
      brand,
    };

    const product = await Product.create(productData);
    return res.status(201).json({
      success: true,
      message: "Product ceated successfully.",
      data: product,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating product.",
      error: err.message,
    });
  }
};

export const editProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updated,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Product update failed.",
      error: err.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete product.",
      error: err.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Failed to find product.",
        error: "Invalid/unknown product ID.",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Product found.", data: product });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to find product.",
      error: err.message,
    });
  }
};
