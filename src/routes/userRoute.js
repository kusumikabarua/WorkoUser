const express= require("express");
const authenticateToken = require("../middleware/authenticateToken");
const userController = require("../controllers/userController")
const userValidation = require("../validations/userValidation");
const validate = require("../middleware/validate");
const router = express.Router();

router.get("/",authenticateToken,userController.getUser);
router.get("/:userId",authenticateToken,validate(userValidation.getUser),userController.getUser);
router.patch("/:userId",authenticateToken,validate(userValidation.updateUser),userController.updateUser);
router.put("/:userId",authenticateToken,validate(userValidation.updateUser),userController.updateUser);
router.delete("/:userId",authenticateToken,validate(userValidation.deleteUser),userController.deleteUser);

module.exports =router;