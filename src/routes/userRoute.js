const express= require("express");
const authenticateToken = require("../middleware/authenticateToken");
const userController = require("../controllers/userController")
const router = express.Router();
console.log("userroute");
router.get("/",authenticateToken,userController.getUser);
router.get("/:userId",authenticateToken,userController.getUser);
// router.put("/:id",authenticateToken,userController.updateUser);
// router.delete("/:id",authenticateToken,userController.deleteUser);

module.exports =router;