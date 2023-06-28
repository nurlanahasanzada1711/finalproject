const numbersModel = require('../models/numbers.model');

const numbersController = {
  getAll: async (req, res) => {
    const { name } = req.query;
    const numbers = await numbersModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: numbers,
        message: "data get success!",
      });
    } else {
      res.status(200).send({
        data: numbers.filter((x) =>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  },
  
  post: async (req, res) => {
    const { count, desc } = req.body;
    const newNumbers = new numbersModel({
        count: count,
        desc: desc
    });
    await newNumbers.save();
    res.status(201).send("created");
  },
  
};

module.exports =  numbersController