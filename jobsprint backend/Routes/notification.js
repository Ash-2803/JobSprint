const express = require("express");
const router = express.Router();
const authentication = require('../Authentication/auth')

const notificationController = require('../controller/notification')

// get notification
router.get('/',authentication.auth,notificationController.getNotification)
router.put('/isRead',authentication.auth,notificationController.updateIsRead)
router.get('/activeNotification',authentication.auth,notificationController.activeNotify)






module.exports = router;