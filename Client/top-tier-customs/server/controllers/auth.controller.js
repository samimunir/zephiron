import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

dotenv.config();

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      city,
      country,
      adminCode,
      email,
      password,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Registration failed.",
        error: "Email already in use.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const role = adminCode === process.env.ADMIN_CODE ? "admin" : "customer";

    const location = {
      city,
      country,
    };

    const newUser = await User.create({
      firstName,
      lastName,
      phone,
      location,
      role,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
        city: newUser.location.city,
        country: newUser.location.country,
        role: newUser.role,
        email: newUser.email,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Registration failed.", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials.", error: "User not found." });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid credentials.",
        error: "User not validated.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const location = {
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
    };

    const shippingAddress = {
      address: user.shippingAddress.address,
      city: user.shippingAddress.city,
      state: user.shippingAddress.state,
      postalCode: user.shippingAddress.postalCode,
      country: user.shippingAddress.country,
    };

    const vehicles = user.vehicles;

    const savedProducts = user.savedProducts;

    return res.status(200).json({
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        location,
        shippingAddress,
        role: user.role,
        email: user.email,
        vehicles,
        savedProducts,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Login failed.", error: err.message });
  }
};

export const userData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.staus(400).json({
        success: false,
        message: "Failed to fetch user data.",
        error: "Invalid/unknown user ID",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "User found.", user: user });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user data.",
      error: err.message,
    });
  }
};
