const userService = require("../services/userService");
const getUser = async (req, res) => {
  const { userId } = req.params;
  console.log("controller", userId);
  try {
    let userResult;
    if (userId) {
      userResult = await userService.getUserById(userId);
    } else {
      userResult = await userService.listUsers();
    }
    if (userResult) {
      return res.status(200).json(userResult);
    } else {
      return res.status(404).json({ message: "User not found!", userId });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error fetching user", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;

    const updatedUser = await userService.updateUser(userId, updatedData);
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await userService.deleteUser(userId);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getUser,
  updateUser,
  deleteUser,
};
