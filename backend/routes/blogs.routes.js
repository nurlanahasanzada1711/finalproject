const express = require('express');
const blogs_router = express.Router()
const blogsController = require('../controllers/blogs.controller');

//get All Blogs
blogs_router.get('/',blogsController.getAllBlogs)

//post Blogs
blogs_router.post('/',blogsController.postBlogs)

// delete Blogs
blogs_router.delete('/:id', blogsController.deleteBlogs);



module.exports = blogs_router