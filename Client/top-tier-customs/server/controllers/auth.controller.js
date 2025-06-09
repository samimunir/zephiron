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
