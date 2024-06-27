

const userService = require("../services/userService");
const getUser = async (req, res) => {
  const { userId } = req.params;
   console.log("controller",userId);
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
module.exports = {
    getUser
}
