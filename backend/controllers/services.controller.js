const servicesModel = require('../models/services.model');

const servicesController = {
  getAllServices: async (req, res) => {
    const {
      name
    } = req.query;
    const services = await servicesModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: services,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: services.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },

  postServices: async (req, res) => {
    const {
      desc,
      about,
      imageURL
    } = req.body;
    const newservices = new servicesModel({
      desc: desc,
      imageURL:imageURL,
      about:about
    });
    await newservices.save();
    res.status(201).send("created");
  },

  deleteServices: async (req, res) => {
    const id = req.params.id;
    const service = await servicesModel.findByIdAndDelete(id);
    if (service === undefined) {
      res.status(404).send("service not found!");
    } else {
      res.status(201).send({
        data: service,
        message: "service deleted successfully!",
      });
    }
  },

};

module.exports = servicesController