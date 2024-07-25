import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not Found!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Password is Invalid" });
    }
    const token = createToken(user._id);
    res.json({ success: true, token, message: "Login Successfull!" });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "something wrong Login to account",
    });
  }
};
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if email is provided
    if (!email || !validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a Valid Email!",
      });
    }

    // Check if the user already exists
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User Already Exists!" });
    }

    // Check for strong password
    if (!password || password.length < 6) {
      return res.json({
        success: false,
        message: "Please Enter a Strong Password with 6 or More Characters",
      });
    }

    // Hashing user password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: password,
    });

    // Save the user to the database
    const user = await newUser.save();

    // Create a token for the user
    const token = createToken(user._id);

    // Send the response
    res.json({
      success: true,
      token,
      message: "Account Created Successfully!",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Something went wrong creating the account",
    });
  }
};
const fetchUserData = async function (req, res) {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId).select("-password -_id");
    if (!user) {
      return res.json({ success: false, message: "User not found!" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Something went wrong. Login to account",
    });
  }
};
const fetchProgress = async function (req, res) {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    if (user) {
      res.json({ success: true, points: user.points, level: user.level });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Fetch user progress error:", error);
    res.json({ success: false, message: "Failed to fetch user progress" });
  }
};
const fetchUpdateProgress = async function (req, res) {
  try {
    const { userId, points, level } = req.body;
    const user = await userModel.findByIdAndUpdate(userId, { points, level });
    if (user) {
      res.json({ success: true, message: 'Progress updated ', user });
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Update user progress error:', error);
    res.json({ success: false, message: 'Failed to update user progress' });
  }
};
export { registerUser, loginUser, fetchUserData,fetchProgress,fetchUpdateProgress };
