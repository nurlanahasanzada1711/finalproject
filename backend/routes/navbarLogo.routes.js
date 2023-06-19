const express = require('express');
const navbarLogo_router = express.Router()
const navbarLogoController = require('../controllers/NavbarLogo.controller');

//get All NavbarLogo
navbarLogo_router.get('/',navbarLogoController.getAll)


//post NavbarLogo
navbarLogo_router.post('/',navbarLogoController.post)




module.exports = navbarLogo_router
