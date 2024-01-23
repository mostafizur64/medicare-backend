import User from "../models/UserSchema.js";
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully Updated !",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to Update !",
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted !",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to deleted !",
    });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No User found!",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No found!",
    });
  }
};

const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: true, message: "User not found" });
    }
    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Profile info is getting!",
      data: { ...rest },
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "Something went wrong,cannot get",
    });
  }
};

export const getMyAppointMents = async (req, res) => {
  try {
  } catch (error) {}
};
