import User from "../models/user.model.js";
import Service from "../models/service.model.js";

export const createService = async (req, res) => {
  try {
    const { adminId, title, description, price, dropOff, category, type } =
      req.body;

    const user = User.findById({ adminId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Service creation failed.",
        error: "Invalid user.",
      });
    }

    const serviceData = {
      title,
      description,
      price,
      dropOff,
      category,
      type,
    };

    const service = await Service.create(serviceData);
    return res.status(201).json({
      success: true,
      message: "Service created successfully.",
      data: service,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating service.",
      error: err.message,
    });
  }
};

export const editService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Service updated successfully.",
      data: updated,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Service update failed.",
      error: err.message,
    });
  }
};

export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    return res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete service.",
      error: err.message,
    });
  }
};

export const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(400).json({
        success: false,
        message: "Failed to find service.",
        error: "Invalid/unknown service ID.",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Service found.", data: service });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "failed to find service.",
      error: err.message,
    });
  }
};
