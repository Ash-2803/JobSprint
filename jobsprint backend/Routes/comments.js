const express = require("express");
const router = express.Router();
const authentication = require('../Authentication/auth')

const commentController = require('../controller/comments')

router.post('/',authentication.auth,commentController.commentPost)
router.get('/:postId',commentController.getCommentByPostId)








module.exports = router;