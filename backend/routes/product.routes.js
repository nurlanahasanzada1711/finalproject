const express = require('express');
const product_router = express.Router()
const productsContoller = require('../controllers/products.controller');

//get All Products
product_router.get('/',productsContoller.getAllProducts)

// get Services by ID
product_router.get('/:id', productsContoller.getProductsById);

//post Products
product_router.post('/',productsContoller.postProducts)

// delete Products
product_router.delete('/:id', productsContoller.deleteProducts);

// edit Service
product_router.put('/:id', productsContoller.editProducts);



module.exports = product_router