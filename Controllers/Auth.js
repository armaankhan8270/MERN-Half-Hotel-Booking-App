import User from "../Models/User.js";
import bcrypt from "bcryptjs";
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
    if (!user) return next(() => res.send(user));

    const passwordcheck = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordcheck) return;
    next(() => {
      res.send("password is incorrenc");
    });
  } catch (err) {
    next(err.message);
  }
};
