import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Resgister = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.send(req.body);
  } catch (err) {
    next(err.message);
  }
};
export const GetAllResgister = async (req, res, next) => {
  try {
    const AllUser = await User.find();
    res.send(AllUser);
  } catch (err) {
    next(err.message);
  }
};
export const Login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next("User not found!");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next("Wrong password or username!");
    const { password, username } = user;
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      "armaankhan"
    );
    res
      .cookie("access_token", token, { httpOnly: true })
      .json("welcome" + " " + req.body.username);
  } catch (err) {
    next(err.message);
    console.log(err.message);
  }
};
