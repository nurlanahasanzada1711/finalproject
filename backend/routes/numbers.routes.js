const express = require('express');
const numbers_router = express.Router()
const numbersController = require('../controllers/numbers.controller');

//get All Artists
numbers_router.get('/',numbersController.getAllNumbers)

//post Artist
numbers_router.post('/',numbersController.postNumbers)

numbers_router.delete('/:id', numbersController.deleteNumbers);



module.exports = numbers_router