const express = require('express');
const times_router = express.Router()
const timesController = require('../controllers/times.controller');

//get All Times
times_router.get('/',timesController.getAllTimes)

//post Times
times_router.post('/',timesController.postTimes)

// delete Times
times_router.delete('/:id', timesController.deleteTimes);



module.exports = times_router