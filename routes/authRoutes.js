const { registerController, loginController, logoutController } = require("../controllers/authController");

const express = require('express');

//router Object
const router = express.Router();

//routes
//register
router.post('/register', registerController)

//login
router.post('/login', loginController)

//logout
router.post('/logout', logoutController)


module.exports = router