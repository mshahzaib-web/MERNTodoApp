import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";

export const signup = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  const saveUser = await newUser.save();

  if (!saveUser) {
    return res.status(400).json({
      success: false,
      message: "User Cannot SignUp successfully! try again",
    });
  }

  return res.status(201).json({
    success: true,
    message: "User SignUp successfully",
    saveUser,
  });
});
