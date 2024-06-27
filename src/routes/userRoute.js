const express= require("express");
const authenticateToken = require("../middleware/authenticateToken");
const userController = require("../controllers/userController")
const router = express.Router();

router.get("/",authenticateToken,userController.getUser);
router.get("/:userId",authenticateToken,userController.getUser);
router.patch("/:userId",authenticateToken,userController.updateUser);
router.put("/:userId",authenticateToken,userController.updateUser);
router.delete("/:userId",authenticateToken,userController.deleteUser);

module.exports =router;