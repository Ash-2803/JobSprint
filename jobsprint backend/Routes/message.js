const express = require("express");
const router = express.Router();
const authentication = require('../Authentication/auth')

const messageController = require('../controller/message')

router.post('/', authentication.auth,messageController.sendMessage)
router.get('/:conversationId', authentication.auth,messageController.getMessage)












module.exports = router;