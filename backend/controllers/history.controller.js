const historiesModel = require('../models/history.model');

const historiesController = {
  getAllHistories: async (req, res) => {
    const {
      name
    } = req.query;
    const histories = await historiesModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: histories,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: histories.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },

  postHistories: async (req, res) => {
    const {
      desc,
      about,
      imageURL
    } = req.body;
    const newHistories = new historiesModel({
      desc: desc,
      imageURL:imageURL,
      about:about
    });
    await newHistories.save();
    res.status(201).send("created");
  },

  deleteHistories: async (req, res) => {
    const id = req.params.id;
    const history = await historiesModel.findByIdAndDelete(id);
    if (history === undefined) {
      res.status(404).send("history not found!");
    } else {
      res.status(201).send({
        data: history,
        message: "history deleted successfully!",
      });
    }
  },

};

module.exports = historiesController