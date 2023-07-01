const aboutModel = require('../models/about.model');

const aboutController = {
  getAllAbouts: async (req, res) => {
    const {
      name
    } = req.query;
    const abouts = await aboutModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: abouts,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: abouts.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },

  postAbouts: async (req, res) => {
    const {
      desc,
      about,
      imageURL,
      author
    } = req.body;
    const newAbouts = new aboutModel({
      desc: desc,
      imageURL:imageURL,
      about:about,
      author:author
    });
    await newAbouts.save();
    res.status(201).send("created");
  },

  deleteAbouts: async (req, res) => {
    const id = req.params.id;
    const about = await aboutModel.findByIdAndDelete(id);
    if (about === undefined) {
      res.status(404).send("about not found!");
    } else {
      res.status(201).send({
        data: about,
        message: "about deleted successfully!",
      });
    }
  },

};

module.exports = aboutController