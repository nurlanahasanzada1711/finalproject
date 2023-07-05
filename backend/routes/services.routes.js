const express = require('express');
const services_router = express.Router()
const servicesController = require('../controllers/services.controller');

//get All Services
services_router.get('/',servicesController.getAllServices)

// get Services by ID
services_router.get('/:id', servicesController.getServicesById);


//post Service
services_router.post('/',servicesController.postServices)

// delete Service
services_router.delete('/:id', servicesController.deleteServices);

// edit Service
services_router.put('/:id', servicesController.editServices);




module.exports = services_router