const express = require('express');
const abouts_router = express.Router()
const aboutsController = require('../controllers/about.controller');

//get All About
abouts_router.get('/',aboutsController.getAllAbouts)

//post About
abouts_router.post('/',aboutsController.postAbouts)

// delete About
abouts_router.delete('/:id', aboutsController.deleteAbouts);



module.exports = abouts_router