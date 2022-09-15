import User from "../Models/User.js";

export const CreateUser = async (req, res, next) => {
  //code for making schema and then posting data into mongodb
  const newUser = new User(req.body);
  try {
    const SavedUser = await newUser.save();
    res.json(SavedUser);
  } catch (err) {
    next(err);
  }
};
export const UpdateUser = async (req, res, next) => {
  //code for update
  try {
    const UpdateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(UpdateUser);
  } catch (err) {
    next(err);
  }
};
export const DeleteUser = async (req, res, next) => {
  try {
    const DeleteUser = await User.findByIdAndDelete(req.params.id);
    res.json("deleted item successfully");
  } catch (err) {
    next(err);
  }
};
export const GetUser = async (req, res, next) => {
  try {
    const User = await User.findById("sss");
    res.json(User);
  } catch (err) {
    next(err);
  }
};
export const GetAllUser = async (req, res, next) => {
  //code for updating schema data into mongodb
  try {
    const AllUsers = await User.find();
    res.json(AllUsers);
  } catch (err) {
    next(err);
  }
};
