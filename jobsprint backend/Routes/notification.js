const express = require("express");
const router = express.Router();
const authentication = require('../Authentication/auth')

const notificationController = require('../controller/notification')

// get notification
router.get('/',authentication.auth,notificationController.getNotification)






module.exports = router;