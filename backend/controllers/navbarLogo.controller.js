const navbarLogoModel = require('../models/navbarLogo.model');

const navbarLogoController = {
  getAll: async (req, res) => {
    const { name } = req.query;
    const navbarLogo = await navbarLogoModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: navbarLogo,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: navbarLogo.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },
  
  post: async (req, res) => {
    const { name, imageURL } = req.body;
    const newNavbarLogo = new navbarLogoModel({
      name: name,
      imageURL: imageURL
    });
    await newNavbarLogo.save();
    res.status(201).send("created");
  },
  
};

module.exports =  navbarLogoController