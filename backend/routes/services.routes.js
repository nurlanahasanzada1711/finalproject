const express = require('express');
const services_router = express.Router()
const servicesController = require('../controllers/services.controller');

//get All Services
services_router.get('/',servicesController.getAllServices)

//post Service
services_router.post('/',servicesController.postServices)

// delete Service
services_router.delete('/:id', servicesController.deleteServices);



module.exports = services_router