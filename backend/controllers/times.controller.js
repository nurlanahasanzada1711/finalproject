const timesModel = require('../models/times.model');

const timesController = {
    getAllTimes: async (req, res) => {
        const {
            name
        } = req.query;
        const times = await timesModel.find();
        if (name === undefined) {
            res.status(200).send({
                data: times,
                message: "data get success!",
            });
        } else {
            res.status(200).send({
                data: times.filter((x) =>
                    x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
                ),
                message: "data get success!",
            });
        }
    },

    postTimes: async (req, res) => {
        const {
            phone,
            hours,
            imageURL
        } = req.body;
        const newTimes = new timesModel({
            phone: phone,
            imageURL: imageURL,
            hours: hours
        });
        await newTimes.save();
        res.status(201).send("created");
    },

    deleteTimes: async (req, res) => {
        const id = req.params.id;
        const time = await timesModel.findByIdAndDelete(id);
        if (time === undefined) {
            res.status(404).send("time not found!");
        } else {
            res.status(201).send({
                data: time,
                message: "time deleted successfully!",
            });
        }
    },

};

module.exports = timesController