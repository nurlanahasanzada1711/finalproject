const express = require('express');
const comment_router = express.Router()
const commentController = require('../controllers/comment.controller');

//get All Comments
comment_router.get('/',commentController.getAllComments)

//post Comment
comment_router.post('/',commentController.postComments)

// delete Comment
comment_router.delete('/:id', commentController.deleteComments);



module.exports = comment_router