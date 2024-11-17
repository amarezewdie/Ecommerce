import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import "dotenv/config";

// Function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN);
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = generateToken(user._id);
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Input validation
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }
    if (name.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 3 characters long",
      });
    }
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password and create the user
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const token = generateToken(user._id);
    return res.status(201).json({ success: true, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Admin Login
const adminUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ email }, process.env.ACCESS_TOKEN);
      return res.status(200).json({ success: true, token });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export { loginUser, registerUser, adminUser };
