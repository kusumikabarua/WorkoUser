const User = require("../models/User");

const listUsers= async () => {
    try {
        console.log("list");
      let users = await User.find();
   
      return users;
    } catch (error) {
      throw error;
    }
  };
  const getUserById= async (userId) => {
    try {
        console.log("list");
      let users = await User.find({_id:userId});
   
      return users;
    } catch (error) {
      throw error;
    }
  };
  module.exports = {
    listUsers,
    getUserById
}