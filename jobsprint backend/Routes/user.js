const express = require("express");
const router = express.Router();

const userController = require('../controller/user') 
const authentication = require('../Authentication/auth')

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/google',userController.loginThroughGmail);

router.get('/self',authentication.auth,(req,res)=>{
    // console.log(req.user)
    return res.status(200).json({user : req.user})
})

module.exports = router;
