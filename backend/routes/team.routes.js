const express = require('express');
const team_router = express.Router()
const teamController = require('../controllers/team.controller');

//get All Teams
team_router.get('/',teamController.getAllTeams)

// get Team by ID
team_router.get('/:id', teamController.getTeamsById);

//post Teams
team_router.post('/',teamController.postTeams)

// delete Teams
team_router.delete('/:id', teamController.deleteTeams);

// edit Team
team_router.put('/:id', teamController.editTeams);



module.exports = team_router