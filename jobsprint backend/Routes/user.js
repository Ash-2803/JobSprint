const express = require("express");
const route = express.Router();

const userController = require('../controller/user') 

route.post('/register',userController.register);
route.post('/login',userController.login);
route.post('/google',userController.loginThroughGmail);


module.exports = route;
