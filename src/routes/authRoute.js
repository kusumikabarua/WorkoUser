const express= require("express");
const router = express.Router();

const authValidation = require("../validations/authValidation");
const validate = require("../middleware/validate");
const authController =require("../controllers/authController")

router.post("/register",validate(authValidation.register),authController.register);
router.post("/login",validate(authValidation.login),authController.login);

module.exports =router;