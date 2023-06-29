const express = require('express');
const histories_router = express.Router()
const historiesController = require('../controllers/history.controller');

//get All Histories
histories_router.get('/',historiesController.getAllHistories)

//post History
histories_router.post('/',historiesController.postHistories)

// delete History
histories_router.delete('/:id', historiesController.deleteHistories);



module.exports = histories_router