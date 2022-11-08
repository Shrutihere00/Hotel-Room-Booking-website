import Users from "../models/Users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const Register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new Users({
     ...req.body,
      password: hash,
    });
    const savedAuth = await newUser.save();
    res.status(201).json(savedAuth);
  } catch (error) {
    next(error);
  }
};
export const Login = async (req, res, next) => {
  try {
    const LoginUser = await Users.findOne({
      username: req.body.username,
    });
    if (!LoginUser) return next(createError(404, "User not found"));
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      LoginUser.password
    );
    if (!isPasswordCorrect)
      return next(createError(404, "Invalid Credentials"));
    // using jwt token if password is correct
    const token = jwt.sign(
      { id: LoginUser._id, isAdmin: LoginUser.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...others } = LoginUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(201)
      .json({details:{...others},isAdmin});
  } catch (error) {
    next(error);
  }
};
