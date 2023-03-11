const express = require('express');
const router = express.Router();

const {login,register, newPassword, processRegister,processLogin, logout, profile} = require('../controllers/userController');
const checkUser = require('../middlewares/checkUser');
const checkUserLogin = require('../middlewares/checkUserLogin');
const loginUserValidator = require('../validations/loginUserValidator');
const registerUserValidation = require('../validations/registerUserValidation');
const { uploadProductImagesUser } = require('../middlewares/uploadUsers');

router
.get('/register',checkUser,register)
.post('/register',registerUserValidation,processRegister)
.get('/login',checkUser,login)
.post('/login',loginUserValidator,processLogin)
.get('/newPassword',newPassword)
.get('/logout',checkUserLogin,logout)
.get('/profile',checkUserLogin,uploadProductImagesUser.single("image"), profile)



module.exports = router;
