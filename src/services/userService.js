const User = require("../models/User");

const listUsers = async () => {
  try {
    console.log("list");
    let users = await User.find();

    return users;
  } catch (error) {
    throw error;
  }
};
const getUserById = async (userId) => {
  try {
    console.log("list");
    let users = await User.find({ _id: userId });

    return users;
  } catch (error) {
    throw error;
  }
};
const updateUser = async (userId, updatedData) => {
  try {
    console.log("Update");
    const updatedUser = await User.findByIdAndUpdate(
      userId ,
      { $set: updatedData },
      { new: true }
    );

    return updatedUser;
  } catch (error) {
    throw error;
  }
};
const deleteUser = async (userId) => {
  try {
    const deletedUser = await  User.findByIdAndUpdate(
     userId ,
      { deleteFlag :true },
      { new: true }
    );
    return deletedUser;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  listUsers,
  getUserById,
  updateUser,
  deleteUser
};
