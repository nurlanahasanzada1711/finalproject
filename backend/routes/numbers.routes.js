const express = require('express');
const numbers_router = express.Router()
const numbersController = require('../controllers/NavbarLogo.controller');

//get All NavbarLogo
numbers_router.get('/',numbersController.getAll)


//post NavbarLogo
numbers_router.post('/',numbersController.post)




module.exports = numbers_router
