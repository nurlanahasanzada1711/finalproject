const express = require('express');
const team_router = express.Router()
const teamController = require('../controllers/team.controller');

//get All Teams
team_router.get('/',teamController.getAllTeams)

//post Teams
team_router.post('/',teamController.postTeams)

// delete Teams
team_router.delete('/:id', teamController.deleteTeams);



module.exports = team_router