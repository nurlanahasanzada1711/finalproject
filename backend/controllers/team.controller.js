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

};

module.exports = teamController