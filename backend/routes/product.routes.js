const express = require('express');
const product_router = express.Router()
const productsContoller = require('../controllers/products.controller');

//get All Products
product_router.get('/',productsContoller.getAllProducts)

//post Products
product_router.post('/',productsContoller.postProducts)

// delete Products
product_router.delete('/:id', productsContoller.deleteProducts);



module.exports = product_router