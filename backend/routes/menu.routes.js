const express = require('express');
const menu_router = express.Router()
const menuController = require('../controllers/menu.controller');

//get All Menus
menu_router.get('/',menuController.getAllMenus)

//post Menus
menu_router.post('/',menuController.postMenus)

// delete Menus
menu_router.delete('/:id', menuController.deleteMenus);



module.exports = menu_router