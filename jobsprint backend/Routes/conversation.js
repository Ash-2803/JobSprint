const express = require("express");
const router = express.Router();
const authentication = require('../Authentication/auth')

const conversationController = require('../controller/conversation')

router.post('/add-conversation',authentication.auth,conversationController.addConversation)

router.get('/get-conversation',authentication.auth,conversationController.getConversation)















module.exports = router;