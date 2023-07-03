const express = require('express')
const user_router = express.Router()

const userController = require('../controllers/user.controller')

user_router.get('/users',userController.getAllUsers)

user_router.post('/register',userController.postRegister)

user_router.post('/login',userController.postLogin)

user_router.post('/admin/login',userController.AdminPostLogin)

module.exports = user_router