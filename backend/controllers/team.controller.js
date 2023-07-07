const teamModel = require('../models/team.model');

const teamController = {
    getAllTeams: async (req, res) => {
        const {
            name
        } = req.query;
        const teams = await teamModel.find();
        if (name === undefined) {
            res.status(200).send({
                data: teams,
                message: "data get success!",
            });
        } else {
            res.status(200).send({
                data: teams.filter((x) =>
                    x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
                ),
                message: "data get success!",
            });
        }
    },

    
    getTeamsById: async (req, res) => {
        const id = req.params.id;
        const team = await teamModel.findById(id);
        console.log("team found", team);
        if (!team) {
            res.status(200).send("Data not found!")
        } else {
            res.status(200).send({
                data: team,
                message: "Data get success!",
            });
        }
    },

    postTeams: async (req, res) => {
        const {
            chef,
            desc,
            imageURL
        } = req.body;
        const newTeams= new teamModel({
            chef: chef,
            imageURL: imageURL,
            desc: desc
        });
        await newTeams.save();
        res.status(201).send("created");
    },

    deleteTeams: async (req, res) => {
        const id = req.params.id;
        const team = await teamModel.findByIdAndDelete(id);
        if (team === undefined) {
            res.status(404).send("team not found!");
        } else {
            res.status(201).send({
                data: team,
                message: "team deleted successfully!",
            });
        }
    },

    editTeams: async (req, res) => {
        const id = req.params.id;
        const {
            chef,
            desc,
            imageURL
        } = req.body;
        const existedTeam = await teamModel.findByIdAndUpdate(id, {
            chef: chef,
            desc: desc,
            imageURL: imageURL,
        });
        if (existedTeam == undefined) {
            res.status(404).send("data not found!");
        } else {
            res.status(200).send(`Data updated successfully!`);
        }
    },

};

module.exports = teamController